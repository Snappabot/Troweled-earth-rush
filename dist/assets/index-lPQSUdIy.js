var vh=Object.defineProperty;var _h=(o,e,t)=>e in o?vh(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var E=(o,e,t)=>_h(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ha="170",yh=0,Ga=1,bh=2,mc=1,gc=2,vi=3,zi=0,Rt=1,Nt=2,Mi=0,Dn=1,mr=2,Ha=3,Va=4,wh=5,en=100,Mh=101,Sh=102,Eh=103,Th=104,Ah=200,Ch=201,Rh=202,Ph=203,gr=204,xr=205,Ih=206,Lh=207,Dh=208,Bh=209,Fh=210,Uh=211,Nh=212,Oh=213,kh=214,vr=0,_r=1,yr=2,Un=3,br=4,wr=5,Mr=6,Sr=7,da=0,zh=1,Gh=2,Oi=0,xc=1,vc=2,_c=3,ua=4,Hh=5,yc=6,bc=7,wc=300,Nn=301,On=302,Er=303,Tr=304,wo=306,Ar=1e3,on=1001,Cr=1002,ni=1003,Vh=1004,Ps=1005,ci=1006,Po=1007,rn=1008,Ti=1009,Mc=1010,Sc=1011,xs=1012,fa=1013,cn=1014,bi=1015,Si=1016,pa=1017,ma=1018,kn=1020,Ec=35902,Tc=1021,Ac=1022,ii=1023,Cc=1024,Rc=1025,Bn=1026,zn=1027,Pc=1028,ga=1029,Ic=1030,xa=1031,va=1033,no=33776,so=33777,oo=33778,ro=33779,Rr=35840,Pr=35841,Ir=35842,Lr=35843,Dr=36196,Br=37492,Fr=37496,Ur=37808,Nr=37809,Or=37810,kr=37811,zr=37812,Gr=37813,Hr=37814,Vr=37815,Wr=37816,Xr=37817,qr=37818,Yr=37819,jr=37820,$r=37821,ao=36492,Jr=36494,Kr=36495,Lc=36283,Zr=36284,Qr=36285,ea=36286,Wh=2200,Xh=2201,qh=2202,fo=2300,ta=2301,Io=2302,Rn=2400,Pn=2401,po=2402,_a=2500,Yh=2501,jh=3200,$h=3201,Dc=0,Jh=1,Ui="",Xt="srgb",Wn="srgb-linear",Mo="linear",tt="srgb",fn=7680,Wa=519,Kh=512,Zh=513,Qh=514,Bc=515,ed=516,td=517,id=518,nd=519,Xa=35044,qa="300 es",wi=2e3,mo=2001;class hn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lo=Math.PI/180,ia=180/Math.PI;function Xn(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Tt[o&255]+Tt[o>>8&255]+Tt[o>>16&255]+Tt[o>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]).toLowerCase()}function Ut(o,e,t){return Math.max(e,Math.min(t,o))}function sd(o,e){return(o%e+e)%e}function Do(o,e,t){return(1-t)*o+t*e}function Qn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ft(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*n+e.x,this.y=s*n+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,i,n,s,r,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,a,l,c)}set(e,t,i,n,s,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=n[0],m=n[3],p=n[6],y=n[1],M=n[4],v=n[7],R=n[2],A=n[5],C=n[8];return s[0]=r*x+a*y+l*R,s[3]=r*m+a*M+l*A,s[6]=r*p+a*v+l*C,s[1]=c*x+h*y+u*R,s[4]=c*m+h*M+u*A,s[7]=c*p+h*v+u*C,s[2]=d*x+f*y+g*R,s[5]=d*m+f*M+g*A,s[8]=d*p+f*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-i*s*h+i*a*l+n*s*c-n*r*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*r-a*c,d=a*l-h*s,f=c*s-r*l,g=t*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(n*c-h*i)*x,e[2]=(a*i-n*r)*x,e[3]=d*x,e[4]=(h*t-n*l)*x,e[5]=(n*s-a*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(r*t-i*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*a)+r+e,-n*c,n*l,-n*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Bo.makeScale(e,t)),this}rotate(e){return this.premultiply(Bo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Bo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bo=new ze;function Fc(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function go(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function od(){const o=go("canvas");return o.style.display="block",o}const Ya={};function ds(o){o in Ya||(Ya[o]=!0,console.warn(o))}function rd(o,e,t){return new Promise(function(i,n){function s(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:n();break;case o.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function ad(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ld(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:Wn,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tt&&(o.r=Ei(o.r),o.g=Ei(o.g),o.b=Ei(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(o.r=Fn(o.r),o.g=Fn(o.g),o.b=Fn(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ui?Mo:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Ei(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Fn(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const ja=[.64,.33,.3,.6,.15,.06],$a=[.2126,.7152,.0722],Ja=[.3127,.329],Ka=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Za=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[Wn]:{primaries:ja,whitePoint:Ja,transfer:Mo,toXYZ:Ka,fromXYZ:Za,luminanceCoefficients:$a,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:ja,whitePoint:Ja,transfer:tt,toXYZ:Ka,fromXYZ:Za,luminanceCoefficients:$a,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}});let pn;class cd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{pn===void 0&&(pn=go("canvas")),pn.width=e.width,pn.height=e.height;const i=pn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=pn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=go("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=Ei(s[r]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ei(t[i]/255)*255):t[i]=Ei(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hd=0;class Uc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,a=n.length;r<a;r++)n[r].isDataTexture?s.push(Fo(n[r].image)):s.push(Fo(n[r]))}else s=Fo(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Fo(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?cd.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dd=0;class Dt extends hn{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=on,n=on,s=ci,r=rn,a=ii,l=Ti,c=Dt.DEFAULT_ANISOTROPY,h=Ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=Xn(),this.name="",this.source=new Uc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ar:e.x=e.x-Math.floor(e.x);break;case on:e.x=e.x<0?0:1;break;case Cr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ar:e.y=e.y-Math.floor(e.y);break;case on:e.y=e.y<0?0:1;break;case Cr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=wc;Dt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,n=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*n+r[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,v=(f+1)/2,R=(p+1)/2,A=(h+d)/4,C=(u+x)/4,I=(g+m)/4;return M>v&&M>R?M<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(M),n=A/i,s=C/i):v>R?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=A/n,s=I/n):R<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(R),i=C/s,n=I/s),this.set(i,n,s,t),this}let y=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(u-x)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ud extends hn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Dt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let a=0;a<r;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends ud{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Nc extends Dt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ni,this.minFilter=ni,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fd extends Dt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=ni,this.minFilter=ni,this.wrapR=on,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qt{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,r,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[r+0],f=s[r+1],g=s[r+2],x=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*x,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),A=Math.atan2(R,p*y);m=Math.sin(m*A)/R,a=Math.sin(a*A)/R}const v=a*y;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+x*v,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,r){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),f=l(n/2),g=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(r-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+r*a+n*c-s*l,this._y=n*h+r*l+s*a-i*c,this._z=s*h+r*c+i*l-n*a,this._w=r*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,r=this._w;let a=r*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*n-a*i),h=2*(a*t-s*n),u=2*(s*i-r*t);return this.x=t+l*c+r*u-a*h,this.y=i+l*h+a*c-s*u,this.z=n+l*u+s*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*r-i*l,this.z=i*a-n*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uo.copy(this).projectOnVector(e),this.sub(Uo)}reflect(e){return this.sub(Uo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uo=new L,Qa=new qt;class Ms{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=s.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,$t):$t.fromBufferAttribute(s,r),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Is.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Is.copy(i.boundingBox)),Is.applyMatrix4(e.matrixWorld),this.union(Is)}const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),Ls.subVectors(this.max,es),mn.subVectors(e.a,es),gn.subVectors(e.b,es),xn.subVectors(e.c,es),Pi.subVectors(gn,mn),Ii.subVectors(xn,gn),Hi.subVectors(mn,xn);let t=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-Hi.z,Hi.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,Hi.z,0,-Hi.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-Hi.y,Hi.x,0];return!No(t,mn,gn,xn,Ls)||(t=[1,0,0,0,1,0,0,0,1],!No(t,mn,gn,xn,Ls))?!1:(Ds.crossVectors(Pi,Ii),t=[Ds.x,Ds.y,Ds.z],No(t,mn,gn,xn,Ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new L,new L,new L,new L,new L,new L,new L,new L],$t=new L,Is=new Ms,mn=new L,gn=new L,xn=new L,Pi=new L,Ii=new L,Hi=new L,es=new L,Ls=new L,Ds=new L,Vi=new L;function No(o,e,t,i,n){for(let s=0,r=o.length-3;s<=r;s+=3){Vi.fromArray(o,s);const a=n.x*Math.abs(Vi.x)+n.y*Math.abs(Vi.y)+n.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),h=i.dot(Vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const pd=new Ms,ts=new L,Oo=new L;class So{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):pd.setFromPoints(e).getCenter(i);let n=0;for(let s=0,r=e.length;s<r;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const t=ts.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ts,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(Oo)),this.expandByPoint(ts.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new L,ko=new L,Bs=new L,Li=new L,zo=new L,Fs=new L,Go=new L;class Oc{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){ko.copy(e).add(t).multiplyScalar(.5),Bs.copy(t).sub(e).normalize(),Li.copy(this.origin).sub(ko);const s=e.distanceTo(t)*.5,r=-this.direction.dot(Bs),a=Li.dot(this.direction),l=-Li.dot(Bs),c=Li.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*l-a,d=r*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(ko).addScaledVector(Bs,d),f}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const i=pi.dot(this.direction),n=pi.dot(pi)-i*i,s=e.radius*e.radius;if(n>s)return null;const r=Math.sqrt(s-n),a=i-r,l=i+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,n,s){zo.subVectors(t,e),Fs.subVectors(i,e),Go.crossVectors(zo,Fs);let r=this.direction.dot(Go),a;if(r>0){if(n)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Li.subVectors(this.origin,e);const l=a*this.direction.dot(Fs.crossVectors(Li,Fs));if(l<0)return null;const c=a*this.direction.dot(zo.cross(Li));if(c<0||l+c>r)return null;const h=-a*Li.dot(Go);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,i,n,s,r,a,l,c,h,u,d,f,g,x,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,r,a,l,c,h,u,d,f,g,x,m)}set(e,t,i,n,s,r,a,l,c,h,u,d,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/vn.setFromMatrixColumn(e,0).length(),s=1/vn.setFromMatrixColumn(e,1).length(),r=1/vn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,f=r*u,g=a*h,x=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-x*c,t[9]=-a*l,t[2]=x-d*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d+x*a,t[4]=g*a-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-a,t[2]=f*a-g,t[6]=x+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,x=c*u;t[0]=d-x*a,t[4]=-r*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*h,t[9]=x-d*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,f=r*u,g=a*h,x=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*c,g=a*l,x=a*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=r*l,f=r*c,g=a*l,x=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=r*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(md,e,gd)}lookAt(e,t,i){const n=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Di.crossVectors(i,zt),Di.lengthSq()===0&&(Math.abs(i.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Di.crossVectors(i,zt)),Di.normalize(),Us.crossVectors(zt,Di),n[0]=Di.x,n[4]=Us.x,n[8]=zt.x,n[1]=Di.y,n[5]=Us.y,n[9]=zt.y,n[2]=Di.z,n[6]=Us.z,n[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],y=i[3],M=i[7],v=i[11],R=i[15],A=n[0],C=n[4],I=n[8],w=n[12],b=n[1],P=n[5],G=n[9],O=n[13],W=n[2],j=n[6],Y=n[10],X=n[14],z=n[3],ie=n[7],de=n[11],ye=n[15];return s[0]=r*A+a*b+l*W+c*z,s[4]=r*C+a*P+l*j+c*ie,s[8]=r*I+a*G+l*Y+c*de,s[12]=r*w+a*O+l*X+c*ye,s[1]=h*A+u*b+d*W+f*z,s[5]=h*C+u*P+d*j+f*ie,s[9]=h*I+u*G+d*Y+f*de,s[13]=h*w+u*O+d*X+f*ye,s[2]=g*A+x*b+m*W+p*z,s[6]=g*C+x*P+m*j+p*ie,s[10]=g*I+x*G+m*Y+p*de,s[14]=g*w+x*O+m*X+p*ye,s[3]=y*A+M*b+v*W+R*z,s[7]=y*C+M*P+v*j+R*ie,s[11]=y*I+M*G+v*Y+R*de,s[15]=y*w+M*O+v*X+R*ye,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*l*u-n*c*u-s*a*d+i*c*d+n*a*f-i*l*f)+x*(+t*l*f-t*c*d+s*r*d-n*r*f+n*c*h-s*l*h)+m*(+t*c*u-t*a*f-s*r*u+i*r*f+s*a*h-i*c*h)+p*(-n*a*h-t*l*u+t*a*d+n*r*u-i*r*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],y=u*m*c-x*d*c+x*l*f-a*m*f-u*l*p+a*d*p,M=g*d*c-h*m*c-g*l*f+r*m*f+h*l*p-r*d*p,v=h*x*c-g*u*c+g*a*f-r*x*f-h*a*p+r*u*p,R=g*u*l-h*x*l-g*a*d+r*x*d+h*a*m-r*u*m,A=t*y+i*M+n*v+s*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=y*C,e[1]=(x*d*s-u*m*s-x*n*f+i*m*f+u*n*p-i*d*p)*C,e[2]=(a*m*s-x*l*s+x*n*c-i*m*c-a*n*p+i*l*p)*C,e[3]=(u*l*s-a*d*s-u*n*c+i*d*c+a*n*f-i*l*f)*C,e[4]=M*C,e[5]=(h*m*s-g*d*s+g*n*f-t*m*f-h*n*p+t*d*p)*C,e[6]=(g*l*s-r*m*s-g*n*c+t*m*c+r*n*p-t*l*p)*C,e[7]=(r*d*s-h*l*s+h*n*c-t*d*c-r*n*f+t*l*f)*C,e[8]=v*C,e[9]=(g*u*s-h*x*s-g*i*f+t*x*f+h*i*p-t*u*p)*C,e[10]=(r*x*s-g*a*s+g*i*c-t*x*c-r*i*p+t*a*p)*C,e[11]=(h*a*s-r*u*s-h*i*c+t*u*c+r*i*f-t*a*f)*C,e[12]=R*C,e[13]=(h*x*n-g*u*n+g*i*d-t*x*d-h*i*m+t*u*m)*C,e[14]=(g*a*n-r*x*n-g*i*l+t*x*l+r*i*m-t*a*m)*C,e[15]=(r*u*n-h*a*n+h*i*l-t*u*l-r*i*d+t*a*d)*C,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,r=e.x,a=e.y,l=e.z,c=s*r,h=s*a;return this.set(c*r+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*r,0,c*l-n*a,h*l+n*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,r){return this.set(1,i,s,0,e,1,r,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,h=r+r,u=a+a,d=s*c,f=s*h,g=s*u,x=r*h,m=r*u,p=a*u,y=l*c,M=l*h,v=l*u,R=i.x,A=i.y,C=i.z;return n[0]=(1-(x+p))*R,n[1]=(f+v)*R,n[2]=(g-M)*R,n[3]=0,n[4]=(f-v)*A,n[5]=(1-(d+p))*A,n[6]=(m+y)*A,n[7]=0,n[8]=(g+M)*C,n[9]=(m-y)*C,n[10]=(1-(d+x))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=vn.set(n[0],n[1],n[2]).length();const r=vn.set(n[4],n[5],n[6]).length(),a=vn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Jt.copy(this);const c=1/s,h=1/r,u=1/a;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=h,Jt.elements[5]*=h,Jt.elements[6]*=h,Jt.elements[8]*=u,Jt.elements[9]*=u,Jt.elements[10]*=u,t.setFromRotationMatrix(Jt),i.x=s,i.y=r,i.z=a,this}makePerspective(e,t,i,n,s,r,a=wi){const l=this.elements,c=2*s/(t-e),h=2*s/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n);let f,g;if(a===wi)f=-(r+s)/(r-s),g=-2*r*s/(r-s);else if(a===mo)f=-r/(r-s),g=-r*s/(r-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,r,a=wi){const l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(r-s),d=(t+e)*c,f=(i+n)*h;let g,x;if(a===wi)g=(r+s)*u,x=-2*u;else if(a===mo)g=s*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const vn=new L,Jt=new ut,md=new L(0,0,0),gd=new L(1,1,1),Di=new L,Us=new L,zt=new L,el=new ut,tl=new qt;class Ht{constructor(e=0,t=0,i=0,n=Ht.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],r=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ut(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return el.makeRotationFromQuaternion(e),this.setFromRotationMatrix(el,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tl.setFromEuler(this),this.setFromQuaternion(tl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ht.DEFAULT_ORDER="XYZ";class kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xd=0;const il=new L,_n=new qt,mi=new ut,Ns=new L,is=new L,vd=new L,_d=new qt,nl=new L(1,0,0),sl=new L(0,1,0),ol=new L(0,0,1),rl={type:"added"},yd={type:"removed"},yn={type:"childadded",child:null},Ho={type:"childremoved",child:null};class vt extends hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new L,t=new Ht,i=new qt,n=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ut},normalMatrix:{value:new ze}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.multiply(_n),this}rotateOnWorldAxis(e,t){return _n.setFromAxisAngle(e,t),this.quaternion.premultiply(_n),this}rotateX(e){return this.rotateOnAxis(nl,e)}rotateY(e){return this.rotateOnAxis(sl,e)}rotateZ(e){return this.rotateOnAxis(ol,e)}translateOnAxis(e,t){return il.copy(e).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nl,e)}translateY(e){return this.translateOnAxis(sl,e)}translateZ(e){return this.translateOnAxis(ol,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ns.copy(e):Ns.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(is,Ns,this.up):mi.lookAt(Ns,is,this.up),this.quaternion.setFromRotationMatrix(mi),n&&(mi.extractRotation(n.matrixWorld),_n.setFromRotationMatrix(mi),this.quaternion.premultiply(_n.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rl),yn.child=e,this.dispatchEvent(yn),yn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yd),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rl),yn.child=e,this.dispatchEvent(yn),yn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,e,vd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,_d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,r=n.length;s<r;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}vt.DEFAULT_UP=new L(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new L,gi=new L,Vo=new L,xi=new L,bn=new L,wn=new L,al=new L,Wo=new L,Xo=new L,qo=new L,Yo=new nt,jo=new nt,$o=new nt;class ti{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Kt.subVectors(e,t),n.cross(Kt);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Kt.subVectors(n,t),gi.subVectors(i,t),Vo.subVectors(e,t);const r=Kt.dot(Kt),a=Kt.dot(gi),l=Kt.dot(Vo),c=gi.dot(gi),h=gi.dot(Vo),u=r*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(r*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,i,n,s,r,a,l){return this.getBarycoord(e,t,i,n,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(r,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,t,i,n,s,r){return Yo.setScalar(0),jo.setScalar(0),$o.setScalar(0),Yo.fromBufferAttribute(e,t),jo.fromBufferAttribute(e,i),$o.fromBufferAttribute(e,n),r.setScalar(0),r.addScaledVector(Yo,s.x),r.addScaledVector(jo,s.y),r.addScaledVector($o,s.z),r}static isFrontFacing(e,t,i,n){return Kt.subVectors(i,t),gi.subVectors(e,t),Kt.cross(gi).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Kt.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let r,a;bn.subVectors(n,i),wn.subVectors(s,i),Wo.subVectors(e,i);const l=bn.dot(Wo),c=wn.dot(Wo);if(l<=0&&c<=0)return t.copy(i);Xo.subVectors(e,n);const h=bn.dot(Xo),u=wn.dot(Xo);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(i).addScaledVector(bn,r);qo.subVectors(e,s);const f=bn.dot(qo),g=wn.dot(qo);if(g>=0&&f<=g)return t.copy(s);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(wn,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return al.subVectors(s,n),a=(u-h)/(u-h+(f-g)),t.copy(n).addScaledVector(al,a);const p=1/(m+x+d);return r=x*p,a=d*p,t.copy(i).addScaledVector(bn,r).addScaledVector(wn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Os={h:0,s:0,l:0};function Jo(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ye.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ye.workingColorSpace){if(e=sd(e,1),t=Ut(t,0,1),i=Ut(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=Jo(r,s,e+1/3),this.g=Jo(r,s,e),this.b=Jo(r,s,e-1/3)}return Ye.toWorkingColorSpace(this,n),this}setStyle(e,t=Xt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const i=zc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=Fn(e.r),this.g=Fn(e.g),this.b=Fn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ye.fromWorkingColorSpace(At.copy(this),e),Math.round(Ut(At.r*255,0,255))*65536+Math.round(Ut(At.g*255,0,255))*256+Math.round(Ut(At.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(At.copy(this),t);const i=At.r,n=At.g,s=At.b,r=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Xt){Ye.fromWorkingColorSpace(At.copy(this),e);const t=At.r,i=At.g,n=At.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+t,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Bi),e.getHSL(Os);const i=Do(Bi.h,Os.h,t),n=Do(Bi.s,Os.s,t),s=Do(Bi.l,Os.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new be;be.NAMES=zc;let bd=0;class qn extends hn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=Xn(),this.name="",this.blending=Dn,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gr,this.blendDst=xr,this.blendEquation=en,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Un,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fn,this.stencilZFail=fn,this.stencilZPass=fn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Dn&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gr&&(i.blendSrc=this.blendSrc),this.blendDst!==xr&&(i.blendDst=this.blendDst),this.blendEquation!==en&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Un&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wa&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==fn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==fn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=n(e.textures),r=n(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ot extends qn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new L,ks=new Be;class oi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xa,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ks.fromBufferAttribute(this,t),ks.applyMatrix3(e),this.setXY(t,ks.x,ks.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ft(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),i=Ft(i,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xa&&(e.usage=this.usage),e}}class Gc extends oi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Hc extends oi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class st extends oi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wd=0;const Wt=new ut,Ko=new vt,Mn=new L,Gt=new Ms,ns=new Ms,wt=new L;class Pt extends hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fc(e)?Hc:Gc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,i){return Wt.makeTranslation(e,t,i),this.applyMatrix4(Wt),this}scale(e,t,i){return Wt.makeScale(e,t,i),this.applyMatrix4(Wt),this}lookAt(e){return Ko.lookAt(e),Ko.updateMatrix(),this.applyMatrix4(Ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mn).negate(),this.translate(Mn.x,Mn.y,Mn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new st(i,3))}else{for(let i=0,n=t.count;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ms);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Gt.setFromBufferAttribute(s),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,Gt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,Gt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(Gt.min),this.boundingBox.expandByPoint(Gt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(Gt.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];ns.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(Gt.min,ns.min),Gt.expandByPoint(wt),wt.addVectors(Gt.max,ns.max),Gt.expandByPoint(wt)):(Gt.expandByPoint(ns.min),Gt.expandByPoint(ns.max))}Gt.getCenter(i);let n=0;for(let s=0,r=e.count;s<r;s++)wt.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(wt));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)wt.fromBufferAttribute(a,c),l&&(Mn.fromBufferAttribute(e,c),wt.add(Mn)),n=Math.max(n,i.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<i.count;I++)a[I]=new L,l[I]=new L;const c=new L,h=new L,u=new L,d=new Be,f=new Be,g=new Be,x=new L,m=new L;function p(I,w,b){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,b),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[I].add(x),a[w].add(x),a[b].add(x),l[I].add(m),l[w].add(m),l[b].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,w=y.length;I<w;++I){const b=y[I],P=b.start,G=b.count;for(let O=P,W=P+G;O<W;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new L,v=new L,R=new L,A=new L;function C(I){R.fromBufferAttribute(n,I),A.copy(R);const w=a[I];M.copy(w),M.sub(R.multiplyScalar(R.dot(w))).normalize(),v.crossVectors(A,w);const P=v.dot(l[I])<0?-1:1;r.setXYZW(I,M.x,M.y,M.z,P)}for(let I=0,w=y.length;I<w;++I){const b=y[I],P=b.start,G=b.count;for(let O=P,W=P+G;O<W;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new L,s=new L,r=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?f=l[x]*a.data.stride+a.offset:f=l[x]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new oi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ll=new ut,Wi=new Oc,zs=new So,cl=new L,Gs=new L,Hs=new L,Vs=new L,Zo=new L,Ws=new L,hl=new L,Xs=new L;class B extends vt{constructor(e=new Pt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){Ws.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Zo.fromBufferAttribute(u,e),r?Ws.addScaledVector(Zo,h):Ws.addScaledVector(Zo.sub(t),h))}t.add(Ws)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zs.copy(i.boundingSphere),zs.applyMatrix4(s),Wi.copy(e.ray).recast(e.near),!(zs.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(zs,cl)===null||Wi.origin.distanceToSquared(cl)>(e.far-e.near)**2))&&(ll.copy(s).invert(),Wi.copy(e.ray).applyMatrix4(ll),!(i.boundingBox!==null&&Wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Wi)))}_computeIntersections(e,t,i){let n;const s=this.geometry,r=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=r[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,R=M;v<R;v+=3){const A=a.getX(v),C=a.getX(v+1),I=a.getX(v+2);n=qs(this,p,e,i,c,h,u,A,C,I),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const y=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);n=qs(this,r,e,i,c,h,u,y,M,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=r[m.materialIndex],y=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=y,R=M;v<R;v+=3){const A=v,C=v+1,I=v+2;n=qs(this,p,e,i,c,h,u,A,C,I),n&&(n.faceIndex=Math.floor(v/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const y=m,M=m+1,v=m+2;n=qs(this,r,e,i,c,h,u,y,M,v),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Md(o,e,t,i,n,s,r,a){let l;if(e.side===Rt?l=i.intersectTriangle(r,s,n,!0,a):l=i.intersectTriangle(n,s,r,e.side===zi,a),l===null)return null;Xs.copy(a),Xs.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Xs);return c<t.near||c>t.far?null:{distance:c,point:Xs.clone(),object:o}}function qs(o,e,t,i,n,s,r,a,l,c){o.getVertexPosition(a,Gs),o.getVertexPosition(l,Hs),o.getVertexPosition(c,Vs);const h=Md(o,e,t,i,Gs,Hs,Vs,hl);if(h){const u=new L;ti.getBarycoord(hl,Gs,Hs,Vs,u),n&&(h.uv=ti.getInterpolatedAttribute(n,a,l,c,u,new Be)),s&&(h.uv1=ti.getInterpolatedAttribute(s,a,l,c,u,new Be)),r&&(h.normal=ti.getInterpolatedAttribute(r,a,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};ti.getNormal(Gs,Hs,Vs,d.normal),h.face=d,h.barycoord=u}return h}class Q extends Pt{constructor(e=1,t=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};const a=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,r,s,0),g("z","y","x",1,-1,i,t,-e,r,s,1),g("x","z","y",1,1,e,i,t,n,r,2),g("x","z","y",1,-1,e,i,-t,n,r,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(x,m,p,y,M,v,R,A,C,I,w){const b=v/C,P=R/I,G=v/2,O=R/2,W=A/2,j=C+1,Y=I+1;let X=0,z=0;const ie=new L;for(let de=0;de<Y;de++){const ye=de*P-O;for(let re=0;re<j;re++){const Ie=re*b-G;ie[x]=Ie*y,ie[m]=ye*M,ie[p]=W,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[m]=0,ie[p]=A>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(re/C),u.push(1-de/I),X+=1}}for(let de=0;de<I;de++)for(let ye=0;ye<C;ye++){const re=d+ye+j*de,Ie=d+ye+j*(de+1),q=d+(ye+1)+j*(de+1),ne=d+(ye+1)+j*de;l.push(re,Ie,ne),l.push(Ie,q,ne),z+=6}a.addGroup(f,z,w),f+=z,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Q(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gn(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const n=o[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function It(o){const e={};for(let t=0;t<o.length;t++){const i=Gn(o[t]);for(const n in i)e[n]=i[n]}return e}function Sd(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Vc(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const vs={clone:Gn,merge:It};var Ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends qn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ed,this.fragmentShader=Td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gn(e.uniforms),this.uniformsGroups=Sd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wc extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new L,dl=new Be,ul=new Be;class Lt extends Wc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,t){return this.getViewBounds(e,dl,ul),t.subVectors(ul,dl)}setViewOffset(e,t,i,n,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lo*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*n/l,t-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Sn=-90,En=1;class Ad extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Lt(Sn,En,e,t);n.layers=this.layers,this.add(n);const s=new Lt(Sn,En,e,t);s.layers=this.layers,this.add(s);const r=new Lt(Sn,En,e,t);r.layers=this.layers,this.add(r);const a=new Lt(Sn,En,e,t);a.layers=this.layers,this.add(a);const l=new Lt(Sn,En,e,t);l.layers=this.layers,this.add(l);const c=new Lt(Sn,En,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,r,a,l]=t;for(const c of t)this.remove(c);if(e===wi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===mo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,r,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,r),e.setRenderTarget(i,2,n),e.render(t,a),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Xc extends Dt{constructor(e,t,i,n,s,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Nn,super(e,t,i,n,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Cd extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Xc(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:ci}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Q(5,5,5),s=new Ct({name:"CubemapFromEquirect",uniforms:Gn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rt,blending:Mi});s.uniforms.tEquirect.value=t;const r=new B(n,s),a=t.minFilter;return t.minFilter===rn&&(t.minFilter=ci),new Ad(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(s)}}const Qo=new L,Rd=new L,Pd=new ze;class Zi{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Qo.subVectors(i,t).cross(Rd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Qo),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Pd.getNormalMatrix(e),n=this.coplanarPoint(Qo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xi=new So,Ys=new L;class ya{constructor(e=new Zi,t=new Zi,i=new Zi,n=new Zi,s=new Zi,r=new Zi){this.planes=[e,t,i,n,s,r]}set(e,t,i,n,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=wi){const i=this.planes,n=e.elements,s=n[0],r=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],g=n[9],x=n[10],m=n[11],p=n[12],y=n[13],M=n[14],v=n[15];if(i[0].setComponents(l-s,d-c,m-f,v-p).normalize(),i[1].setComponents(l+s,d+c,m+f,v+p).normalize(),i[2].setComponents(l+r,d+h,m+g,v+y).normalize(),i[3].setComponents(l-r,d-h,m-g,v-y).normalize(),i[4].setComponents(l-a,d-u,m-x,v-M).normalize(),t===wi)i[5].setComponents(l+a,d+u,m+x,v+M).normalize();else if(t===mo)i[5].setComponents(a,u,x,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(e){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476,Xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ys.x=n.normal.x>0?e.max.x:e.min.x,Ys.y=n.normal.y>0?e.max.y:e.min.y,Ys.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qc(){let o=null,e=!1,t=null,i=null;function n(s,r){t(s,r),i=o.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(n),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function Id(o){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=o.createBuffer();o.bindBuffer(l,d),o.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(o.bindBuffer(c,a),u.length===0)o.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const x=u[f];o.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(o.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:s,update:r}}class ht extends Pt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,r=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const y=p*d-r;for(let M=0;M<c;M++){const v=M*u-s;g.push(v,-y,0),x.push(0,0,1),m.push(M/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+c*p,v=y+c*(p+1),R=y+1+c*(p+1),A=y+1+c*p;f.push(M,v,A),f.push(v,R,A)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dd=`#ifdef USE_ALPHAHASH
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
#endif`,Bd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
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
#endif`,kd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zd=`#ifdef USE_BATCHING
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
#endif`,Gd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xd=`#ifdef USE_IRIDESCENCE
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
#endif`,qd=`#ifdef USE_BUMPMAP
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tu=`#define PI 3.141592653589793
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
} // validated`,iu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nu=`vec3 transformedNormal = objectNormal;
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
#endif`,su=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ou=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ru=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,au=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lu="gl_FragColor = linearToOutputTexel( gl_FragColor );",cu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hu=`#ifdef USE_ENVMAP
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
#endif`,du=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uu=`#ifdef USE_ENVMAP
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
#endif`,fu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_u=`#ifdef USE_GRADIENTMAP
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
}`,yu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mu=`uniform bool receiveShadow;
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
#endif`,Su=`#ifdef USE_ENVMAP
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
#endif`,Eu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Au=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ru=`PhysicalMaterial material;
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
#endif`,Pu=`struct PhysicalMaterial {
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
}`,Iu=`
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
#endif`,Lu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Du=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Bu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ou=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ku=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gu=`#if defined( USE_POINTS_UV )
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
#endif`,Hu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yu=`#ifdef USE_MORPHTARGETS
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
#endif`,ju=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$u=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ju=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ku=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ef=`#ifdef USE_NORMALMAP
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
#endif`,tf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,af=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,lf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ff=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xf=`float getShadowMask() {
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
}`,vf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_f=`#ifdef USE_SKINNING
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
#endif`,yf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bf=`#ifdef USE_SKINNING
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
#endif`,wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ef=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tf=`#ifdef USE_TRANSMISSION
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
#endif`,Af=`#ifdef USE_TRANSMISSION
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
#endif`,Cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,If=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Df=`uniform sampler2D t2D;
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
}`,Bf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ff=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Uf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Of=`#include <common>
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
}`,kf=`#if DEPTH_PACKING == 3200
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
}`,zf=`#define DISTANCE
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
}`,Gf=`#define DISTANCE
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
}`,Hf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wf=`uniform float scale;
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
}`,Xf=`uniform vec3 diffuse;
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
}`,qf=`#include <common>
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
}`,Yf=`uniform vec3 diffuse;
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
}`,jf=`#define LAMBERT
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
}`,$f=`#define LAMBERT
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
}`,Jf=`#define MATCAP
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
}`,Kf=`#define MATCAP
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
}`,Zf=`#define NORMAL
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
}`,Qf=`#define NORMAL
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
}`,ep=`#define PHONG
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
}`,tp=`#define PHONG
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
}`,ip=`#define STANDARD
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
}`,np=`#define STANDARD
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
}`,sp=`#define TOON
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
}`,op=`#define TOON
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
}`,rp=`uniform float size;
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
}`,ap=`uniform vec3 diffuse;
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
}`,lp=`#include <common>
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
}`,cp=`uniform vec3 color;
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
}`,hp=`uniform float rotation;
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
}`,dp=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:Ld,alphahash_pars_fragment:Dd,alphamap_fragment:Bd,alphamap_pars_fragment:Fd,alphatest_fragment:Ud,alphatest_pars_fragment:Nd,aomap_fragment:Od,aomap_pars_fragment:kd,batching_pars_vertex:zd,batching_vertex:Gd,begin_vertex:Hd,beginnormal_vertex:Vd,bsdfs:Wd,iridescence_fragment:Xd,bumpmap_pars_fragment:qd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:jd,clipping_planes_pars_vertex:$d,clipping_planes_vertex:Jd,color_fragment:Kd,color_pars_fragment:Zd,color_pars_vertex:Qd,color_vertex:eu,common:tu,cube_uv_reflection_fragment:iu,defaultnormal_vertex:nu,displacementmap_pars_vertex:su,displacementmap_vertex:ou,emissivemap_fragment:ru,emissivemap_pars_fragment:au,colorspace_fragment:lu,colorspace_pars_fragment:cu,envmap_fragment:hu,envmap_common_pars_fragment:du,envmap_pars_fragment:uu,envmap_pars_vertex:fu,envmap_physical_pars_fragment:Su,envmap_vertex:pu,fog_vertex:mu,fog_pars_vertex:gu,fog_fragment:xu,fog_pars_fragment:vu,gradientmap_pars_fragment:_u,lightmap_pars_fragment:yu,lights_lambert_fragment:bu,lights_lambert_pars_fragment:wu,lights_pars_begin:Mu,lights_toon_fragment:Eu,lights_toon_pars_fragment:Tu,lights_phong_fragment:Au,lights_phong_pars_fragment:Cu,lights_physical_fragment:Ru,lights_physical_pars_fragment:Pu,lights_fragment_begin:Iu,lights_fragment_maps:Lu,lights_fragment_end:Du,logdepthbuf_fragment:Bu,logdepthbuf_pars_fragment:Fu,logdepthbuf_pars_vertex:Uu,logdepthbuf_vertex:Nu,map_fragment:Ou,map_pars_fragment:ku,map_particle_fragment:zu,map_particle_pars_fragment:Gu,metalnessmap_fragment:Hu,metalnessmap_pars_fragment:Vu,morphinstance_vertex:Wu,morphcolor_vertex:Xu,morphnormal_vertex:qu,morphtarget_pars_vertex:Yu,morphtarget_vertex:ju,normal_fragment_begin:$u,normal_fragment_maps:Ju,normal_pars_fragment:Ku,normal_pars_vertex:Zu,normal_vertex:Qu,normalmap_pars_fragment:ef,clearcoat_normal_fragment_begin:tf,clearcoat_normal_fragment_maps:nf,clearcoat_pars_fragment:sf,iridescence_pars_fragment:of,opaque_fragment:rf,packing:af,premultiplied_alpha_fragment:lf,project_vertex:cf,dithering_fragment:hf,dithering_pars_fragment:df,roughnessmap_fragment:uf,roughnessmap_pars_fragment:ff,shadowmap_pars_fragment:pf,shadowmap_pars_vertex:mf,shadowmap_vertex:gf,shadowmask_pars_fragment:xf,skinbase_vertex:vf,skinning_pars_vertex:_f,skinning_vertex:yf,skinnormal_vertex:bf,specularmap_fragment:wf,specularmap_pars_fragment:Mf,tonemapping_fragment:Sf,tonemapping_pars_fragment:Ef,transmission_fragment:Tf,transmission_pars_fragment:Af,uv_pars_fragment:Cf,uv_pars_vertex:Rf,uv_vertex:Pf,worldpos_vertex:If,background_vert:Lf,background_frag:Df,backgroundCube_vert:Bf,backgroundCube_frag:Ff,cube_vert:Uf,cube_frag:Nf,depth_vert:Of,depth_frag:kf,distanceRGBA_vert:zf,distanceRGBA_frag:Gf,equirect_vert:Hf,equirect_frag:Vf,linedashed_vert:Wf,linedashed_frag:Xf,meshbasic_vert:qf,meshbasic_frag:Yf,meshlambert_vert:jf,meshlambert_frag:$f,meshmatcap_vert:Jf,meshmatcap_frag:Kf,meshnormal_vert:Zf,meshnormal_frag:Qf,meshphong_vert:ep,meshphong_frag:tp,meshphysical_vert:ip,meshphysical_frag:np,meshtoon_vert:sp,meshtoon_frag:op,points_vert:rp,points_frag:ap,shadow_vert:lp,shadow_frag:cp,sprite_vert:hp,sprite_frag:dp},le={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},li={basic:{uniforms:It([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:It([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new be(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:It([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:It([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:It([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new be(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:It([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:It([le.points,le.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:It([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:It([le.common,le.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:It([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:It([le.sprite,le.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:It([le.common,le.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:It([le.lights,le.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};li.physical={uniforms:It([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const js={r:0,b:0,g:0},qi=new Ht,up=new ut;function fp(o,e,t,i,n,s,r){const a=new be(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?t:e).get(M)),M}function x(y){let M=!1;const v=g(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),M=!0);const R=o.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(o.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function m(y,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===wo)?(h===void 0&&(h=new B(new Q(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:Gn(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),qi.copy(M.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(up.makeRotationFromEuler(qi)),h.material.toneMapped=Ye.getTransfer(v.colorSpace)!==tt,(u!==v||d!==v.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=o.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new B(new ht(2,2),new Ct({name:"BackgroundMaterial",uniforms:Gn(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=o.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,M){y.getRGB(js,Vc(o)),i.buffers.color.setClear(js.r,js.g,js.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:x,addToRenderList:m}}function pp(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},n=d(null);let s=n,r=!1;function a(b,P,G,O,W){let j=!1;const Y=u(O,G,P);s!==Y&&(s=Y,c(s.object)),j=f(b,O,G,W),j&&g(b,O,G,W),W!==null&&e.update(W,o.ELEMENT_ARRAY_BUFFER),(j||r)&&(r=!1,v(b,P,G,O),W!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return o.createVertexArray()}function c(b){return o.bindVertexArray(b)}function h(b){return o.deleteVertexArray(b)}function u(b,P,G){const O=G.wireframe===!0;let W=i[b.id];W===void 0&&(W={},i[b.id]=W);let j=W[P.id];j===void 0&&(j={},W[P.id]=j);let Y=j[O];return Y===void 0&&(Y=d(l()),j[O]=Y),Y}function d(b){const P=[],G=[],O=[];for(let W=0;W<t;W++)P[W]=0,G[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:O,object:b,attributes:{},index:null}}function f(b,P,G,O){const W=s.attributes,j=P.attributes;let Y=0;const X=G.getAttributes();for(const z in X)if(X[z].location>=0){const de=W[z];let ye=j[z];if(ye===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(ye=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(ye=b.instanceColor)),de===void 0||de.attribute!==ye||ye&&de.data!==ye.data)return!0;Y++}return s.attributesNum!==Y||s.index!==O}function g(b,P,G,O){const W={},j=P.attributes;let Y=0;const X=G.getAttributes();for(const z in X)if(X[z].location>=0){let de=j[z];de===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(de=b.instanceColor));const ye={};ye.attribute=de,de&&de.data&&(ye.data=de.data),W[z]=ye,Y++}s.attributes=W,s.attributesNum=Y,s.index=O}function x(){const b=s.newAttributes;for(let P=0,G=b.length;P<G;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const G=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;G[b]=1,O[b]===0&&(o.enableVertexAttribArray(b),O[b]=1),W[b]!==P&&(o.vertexAttribDivisor(b,P),W[b]=P)}function y(){const b=s.newAttributes,P=s.enabledAttributes;for(let G=0,O=P.length;G<O;G++)P[G]!==b[G]&&(o.disableVertexAttribArray(G),P[G]=0)}function M(b,P,G,O,W,j,Y){Y===!0?o.vertexAttribIPointer(b,P,G,W,j):o.vertexAttribPointer(b,P,G,O,W,j)}function v(b,P,G,O){x();const W=O.attributes,j=G.getAttributes(),Y=P.defaultAttributeValues;for(const X in j){const z=j[X];if(z.location>=0){let ie=W[X];if(ie===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ie!==void 0){const de=ie.normalized,ye=ie.itemSize,re=e.get(ie);if(re===void 0)continue;const Ie=re.buffer,q=re.type,ne=re.bytesPerElement,ge=q===o.INT||q===o.UNSIGNED_INT||ie.gpuType===fa;if(ie.isInterleavedBufferAttribute){const ae=ie.data,Pe=ae.stride,Le=ie.offset;if(ae.isInstancedInterleavedBuffer){for(let Ve=0;Ve<z.locationSize;Ve++)p(z.location+Ve,ae.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ve=0;Ve<z.locationSize;Ve++)m(z.location+Ve);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let Ve=0;Ve<z.locationSize;Ve++)M(z.location+Ve,ye/z.locationSize,q,de,Pe*ne,(Le+ye/z.locationSize*Ve)*ne,ge)}else{if(ie.isInstancedBufferAttribute){for(let ae=0;ae<z.locationSize;ae++)p(z.location+ae,ie.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let ae=0;ae<z.locationSize;ae++)m(z.location+ae);o.bindBuffer(o.ARRAY_BUFFER,Ie);for(let ae=0;ae<z.locationSize;ae++)M(z.location+ae,ye/z.locationSize,q,de,ye*ne,ye/z.locationSize*ae*ne,ge)}}else if(Y!==void 0){const de=Y[X];if(de!==void 0)switch(de.length){case 2:o.vertexAttrib2fv(z.location,de);break;case 3:o.vertexAttrib3fv(z.location,de);break;case 4:o.vertexAttrib4fv(z.location,de);break;default:o.vertexAttrib1fv(z.location,de)}}}}y()}function R(){I();for(const b in i){const P=i[b];for(const G in P){const O=P[G];for(const W in O)h(O[W].object),delete O[W];delete P[G]}delete i[b]}}function A(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const G in P){const O=P[G];for(const W in O)h(O[W].object),delete O[W];delete P[G]}delete i[b.id]}function C(b){for(const P in i){const G=i[P];if(G[b.id]===void 0)continue;const O=G[b.id];for(const W in O)h(O[W].object),delete O[W];delete G[b.id]}}function I(){w(),r=!0,s!==n&&(s=n,c(s.object))}function w(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:y}}function mp(o,e,t){let i;function n(c){i=c}function s(c,h){o.drawArrays(i,c,h),t.update(h,i,1)}function r(c,h,u){u!==0&&(o.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];t.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gp(o,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(C){return!(C!==ii&&i.convert(C)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===Si&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ti&&i.convert(C)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==bi&&!I)}function l(C){if(C==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_TEXTURE_SIZE),m=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),y=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),M=o.getParameter(o.MAX_VARYING_VECTORS),v=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,A=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:R,maxSamples:A}}function xp(o){const e=this;let t=null,i=0,n=!1,s=!1;const r=new Zi,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=o.get(u);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{const y=s?0:i,M=y*4;let v=p.clippingState||null;l.value=v,v=h(g,d,M,f);for(let R=0;R!==M;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==x;++M,v+=4)r.copy(u[M]).applyMatrix4(y,a),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function vp(o){let e=new WeakMap;function t(r,a){return a===Er?r.mapping=Nn:a===Tr&&(r.mapping=On),r}function i(r){if(r&&r.isTexture){const a=r.mapping;if(a===Er||a===Tr)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Cd(l.height);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",n),t(c.texture,r.mapping)}else return null}}return r}function n(r){const a=r.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ba extends Wc{constructor(e=-1,t=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,r=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const In=4,fl=[.125,.215,.35,.446,.526,.582],tn=20,er=new ba,pl=new be;let tr=null,ir=0,nr=0,sr=!1;const Qi=(1+Math.sqrt(5))/2,Tn=1/Qi,ml=[new L(-Qi,Tn,0),new L(Qi,Tn,0),new L(-Tn,0,Qi),new L(Tn,0,Qi),new L(0,Qi,-Tn),new L(0,Qi,Tn),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class gl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){tr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel(),sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_l(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tr,ir,nr),this._renderer.xr.enabled=sr,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Nn||e.mapping===On?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tr=this._renderer.getRenderTarget(),ir=this._renderer.getActiveCubeFace(),nr=this._renderer.getActiveMipmapLevel(),sr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:Si,format:ii,colorSpace:Wn,depthBuffer:!1},n=xl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_p(s)),this._blurMaterial=yp(s,e,t)}return n}_compileMaterial(e){const t=new B(this._lodPlanes[0],e);this._renderer.compile(t,er)}_sceneToCubeUV(e,t,i,n){const a=new Lt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(pl),h.toneMapping=Oi,h.autoClear=!1;const f=new Ot({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new B(new Q,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(pl),x=!0);for(let p=0;p<6;p++){const y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const M=this._cubeSize;$s(n,y*M,p>2?M:0,M,M),h.setRenderTarget(n),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Nn||e.mapping===On;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=_l()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vl());const s=n?this._cubemapMaterial:this._equirectMaterial,r=new B(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$s(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,er)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ml[(n-s-1)%ml.length];this._blur(e,s-1,s,r,a)}t.autoClear=i}_blur(e,t,i,n,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,n,"latitudinal",s),this._halfBlur(r,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new B(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*tn-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):tn;m>tn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tn}`);const p=[];let y=0;for(let C=0;C<tn;++C){const I=C/x,w=Math.exp(-I*I/2);p.push(w),C===0?y+=w:C<m&&(y+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/y;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const v=this._sizeLods[n],R=3*v*(n>M-In?n-M+In:0),A=4*(this._cubeSize-v);$s(t,R,A,3*v,2*v),l.setRenderTarget(t),l.render(u,er)}}function _p(o){const e=[],t=[],i=[];let n=o;const s=o-In+1+fl.length;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);let l=1/a;r>o-In?l=fl[r-o+In-1]:r===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,x=3,m=2,p=1,y=new Float32Array(x*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,I=A>2?0:-1,w=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];y.set(w,x*g*A),M.set(d,m*g*A);const b=[A,A,A,A,A,A];v.set(b,p*g*A)}const R=new Pt;R.setAttribute("position",new oi(y,x)),R.setAttribute("uv",new oi(M,m)),R.setAttribute("faceIndex",new oi(v,p)),e.push(R),n>In&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xl(o,e,t){const i=new si(o,e,t);return i.texture.mapping=wo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $s(o,e,t,i,n){o.viewport.set(e,t,i,n),o.scissor.set(e,t,i,n)}function yp(o,e,t){const i=new Float32Array(tn),n=new L(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:tn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function vl(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function _l(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function wa(){return`

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
	`}function bp(o){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Er||l===Tr,h=l===Nn||l===On;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new gl(o)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new gl(o)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function wp(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&ds("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Mp(o,e,t,i){const n={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}d.removeEventListener("dispose",r),delete n[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",r),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],o.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],o.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let x=0;if(f!==null){const y=f.array;x=f.version;for(let M=0,v=y.length;M<v;M+=3){const R=y[M+0],A=y[M+1],C=y[M+2];d.push(R,A,A,C,C,R)}}else if(g!==void 0){const y=g.array;x=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){const R=M+0,A=M+1,C=M+2;d.push(R,A,A,C,C,R)}}else return;const m=new(Fc(d)?Hc:Gc)(d,1);m.version=x;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Sp(o,e,t){let i;function n(d){i=d}let s,r;function a(d){s=d.type,r=d.bytesPerElement}function l(d,f){o.drawElements(i,f,s,d*r),t.update(f,i,1)}function c(d,f,g){g!==0&&(o.drawElementsInstanced(i,f,s,d*r,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,x,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*x[y];t.update(p,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ep(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,a){switch(t.calls++,r){case o.TRIANGLES:t.triangles+=a*(s/3);break;case o.LINES:t.lines+=a*(s/2);break;case o.LINE_STRIP:t.lines+=a*(s-1);break;case o.LINE_LOOP:t.lines+=a*s;break;case o.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Tp(o,e,t){const i=new WeakMap,n=new nt;function s(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let b=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let R=a.attributes.position.count*v,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const C=new Float32Array(R*A*4*u),I=new Nc(C,R,A,u);I.type=bi,I.needsUpdate=!0;const w=v*4;for(let P=0;P<u;P++){const G=p[P],O=y[P],W=M[P],j=R*A*4*P;for(let Y=0;Y<G.count;Y++){const X=Y*w;g===!0&&(n.fromBufferAttribute(G,Y),C[j+X+0]=n.x,C[j+X+1]=n.y,C[j+X+2]=n.z,C[j+X+3]=0),x===!0&&(n.fromBufferAttribute(O,Y),C[j+X+4]=n.x,C[j+X+5]=n.y,C[j+X+6]=n.z,C[j+X+7]=0),m===!0&&(n.fromBufferAttribute(W,Y),C[j+X+8]=n.x,C[j+X+9]=n.y,C[j+X+10]=n.z,C[j+X+11]=W.itemSize===4?n.w:1)}}d={count:u,texture:I,size:new Be(R,A)},i.set(a,d),a.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(o,"morphTargetBaseInfluence",x),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:s}}function Ap(o,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function r(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}class Yc extends Dt{constructor(e,t,i,n,s,r,a,l,c,h=Bn){if(h!==Bn&&h!==zn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Bn&&(i=cn),i===void 0&&h===zn&&(i=kn),super(null,n,s,r,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ni,this.minFilter=l!==void 0?l:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const jc=new Dt,yl=new Yc(1,1),$c=new Nc,Jc=new fd,Kc=new Xc,bl=[],wl=[],Ml=new Float32Array(16),Sl=new Float32Array(9),El=new Float32Array(4);function Yn(o,e,t){const i=o[0];if(i<=0||i>0)return o;const n=e*t;let s=bl[n];if(s===void 0&&(s=new Float32Array(n),bl[n]=s),e!==0){i.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function _t(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function yt(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Eo(o,e){let t=wl[e];t===void 0&&(t=new Int32Array(e),wl[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function Cp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Rp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;o.uniform2fv(this.addr,e),yt(t,e)}}function Pp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_t(t,e))return;o.uniform3fv(this.addr,e),yt(t,e)}}function Ip(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;o.uniform4fv(this.addr,e),yt(t,e)}}function Lp(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,i))return;El.set(i),o.uniformMatrix2fv(this.addr,!1,El),yt(t,i)}}function Dp(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,i))return;Sl.set(i),o.uniformMatrix3fv(this.addr,!1,Sl),yt(t,i)}}function Bp(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(_t(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(_t(t,i))return;Ml.set(i),o.uniformMatrix4fv(this.addr,!1,Ml),yt(t,i)}}function Fp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Up(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;o.uniform2iv(this.addr,e),yt(t,e)}}function Np(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;o.uniform3iv(this.addr,e),yt(t,e)}}function Op(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;o.uniform4iv(this.addr,e),yt(t,e)}}function kp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function zp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_t(t,e))return;o.uniform2uiv(this.addr,e),yt(t,e)}}function Gp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_t(t,e))return;o.uniform3uiv(this.addr,e),yt(t,e)}}function Hp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_t(t,e))return;o.uniform4uiv(this.addr,e),yt(t,e)}}function Vp(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n);let s;this.type===o.SAMPLER_2D_SHADOW?(yl.compareFunction=Bc,s=yl):s=jc,t.setTexture2D(e||s,n)}function Wp(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Jc,n)}function Xp(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Kc,n)}function qp(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||$c,n)}function Yp(o){switch(o){case 5126:return Cp;case 35664:return Rp;case 35665:return Pp;case 35666:return Ip;case 35674:return Lp;case 35675:return Dp;case 35676:return Bp;case 5124:case 35670:return Fp;case 35667:case 35671:return Up;case 35668:case 35672:return Np;case 35669:case 35673:return Op;case 5125:return kp;case 36294:return zp;case 36295:return Gp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Wp;case 35680:case 36300:case 36308:case 36293:return Xp;case 36289:case 36303:case 36311:case 36292:return qp}}function jp(o,e){o.uniform1fv(this.addr,e)}function $p(o,e){const t=Yn(e,this.size,2);o.uniform2fv(this.addr,t)}function Jp(o,e){const t=Yn(e,this.size,3);o.uniform3fv(this.addr,t)}function Kp(o,e){const t=Yn(e,this.size,4);o.uniform4fv(this.addr,t)}function Zp(o,e){const t=Yn(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Qp(o,e){const t=Yn(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function e0(o,e){const t=Yn(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function t0(o,e){o.uniform1iv(this.addr,e)}function i0(o,e){o.uniform2iv(this.addr,e)}function n0(o,e){o.uniform3iv(this.addr,e)}function s0(o,e){o.uniform4iv(this.addr,e)}function o0(o,e){o.uniform1uiv(this.addr,e)}function r0(o,e){o.uniform2uiv(this.addr,e)}function a0(o,e){o.uniform3uiv(this.addr,e)}function l0(o,e){o.uniform4uiv(this.addr,e)}function c0(o,e,t){const i=this.cache,n=e.length,s=Eo(t,n);_t(i,s)||(o.uniform1iv(this.addr,s),yt(i,s));for(let r=0;r!==n;++r)t.setTexture2D(e[r]||jc,s[r])}function h0(o,e,t){const i=this.cache,n=e.length,s=Eo(t,n);_t(i,s)||(o.uniform1iv(this.addr,s),yt(i,s));for(let r=0;r!==n;++r)t.setTexture3D(e[r]||Jc,s[r])}function d0(o,e,t){const i=this.cache,n=e.length,s=Eo(t,n);_t(i,s)||(o.uniform1iv(this.addr,s),yt(i,s));for(let r=0;r!==n;++r)t.setTextureCube(e[r]||Kc,s[r])}function u0(o,e,t){const i=this.cache,n=e.length,s=Eo(t,n);_t(i,s)||(o.uniform1iv(this.addr,s),yt(i,s));for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||$c,s[r])}function f0(o){switch(o){case 5126:return jp;case 35664:return $p;case 35665:return Jp;case 35666:return Kp;case 35674:return Zp;case 35675:return Qp;case 35676:return e0;case 5124:case 35670:return t0;case 35667:case 35671:return i0;case 35668:case 35672:return n0;case 35669:case 35673:return s0;case 5125:return o0;case 36294:return r0;case 36295:return a0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return c0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return u0}}class p0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Yp(t.type)}}class m0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=f0(t.type)}}class g0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,r=n.length;s!==r;++s){const a=n[s];a.setValue(e,t[a.id],i)}}}const or=/(\w+)(\])?(\[|\.)?/g;function Tl(o,e){o.seq.push(e),o.map[e.id]=e}function x0(o,e,t){const i=o.name,n=i.length;for(or.lastIndex=0;;){const s=or.exec(i),r=or.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===n){Tl(t,c===void 0?new p0(a,o,e):new m0(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new g0(a),Tl(t,u)),t=u}}}class lo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),r=e.getUniformLocation(t,s.name);x0(s,r,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.id in t&&i.push(r)}return i}}function Al(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const v0=37297;let _0=0;function y0(o,e){const t=o.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=n;r<s;r++){const a=r+1;i.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return i.join(`
`)}const Cl=new ze;function b0(o){Ye._getMatrix(Cl,Ye.workingColorSpace,o);const e=`mat3( ${Cl.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(o)){case Mo:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Rl(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),n=o.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+y0(o.getShaderSource(e),r)}else return n}function w0(o,e){const t=b0(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function M0(o,e){let t;switch(e){case xc:t="Linear";break;case vc:t="Reinhard";break;case _c:t="Cineon";break;case ua:t="ACESFilmic";break;case yc:t="AgX";break;case bc:t="Neutral";break;case Hh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Js=new L;function S0(){Ye.getLuminanceCoefficients(Js);const o=Js.x.toFixed(4),e=Js.y.toFixed(4),t=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E0(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(us).join(`
`)}function T0(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function A0(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=o.getActiveAttrib(e,n),r=s.name;let a=1;s.type===o.FLOAT_MAT2&&(a=2),s.type===o.FLOAT_MAT3&&(a=3),s.type===o.FLOAT_MAT4&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function us(o){return o!==""}function Pl(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Il(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C0=/^[ \t]*#include +<([\w\d./]+)>/gm;function na(o){return o.replace(C0,P0)}const R0=new Map;function P0(o,e){let t=He[e];if(t===void 0){const i=R0.get(e);if(i!==void 0)t=He[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return na(t)}const I0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ll(o){return o.replace(I0,L0)}function L0(o,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Dl(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function D0(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===mc?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===gc?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function B0(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Nn:case On:e="ENVMAP_TYPE_CUBE";break;case wo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F0(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case On:e="ENVMAP_MODE_REFRACTION";break}return e}function U0(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case da:e="ENVMAP_BLENDING_MULTIPLY";break;case zh:e="ENVMAP_BLENDING_MIX";break;case Gh:e="ENVMAP_BLENDING_ADD";break}return e}function N0(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function O0(o,e,t,i){const n=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=D0(t),c=B0(t),h=F0(t),u=U0(t),d=N0(t),f=E0(t),g=T0(s),x=n.createProgram();let m,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(us).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(us).join(`
`),p.length>0&&(p+=`
`)):(m=[Dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(us).join(`
`),p=[Dl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Oi?"#define TONE_MAPPING":"",t.toneMapping!==Oi?He.tonemapping_pars_fragment:"",t.toneMapping!==Oi?M0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,w0("linearToOutputTexel",t.outputColorSpace),S0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(us).join(`
`)),r=na(r),r=Pl(r,t),r=Il(r,t),a=na(a),a=Pl(a,t),a=Il(a,t),r=Ll(r),a=Ll(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===qa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+m+r,v=y+p+a,R=Al(n,n.VERTEX_SHADER,M),A=Al(n,n.FRAGMENT_SHADER,v);n.attachShader(x,R),n.attachShader(x,A),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function C(P){if(o.debug.checkShaderErrors){const G=n.getProgramInfoLog(x).trim(),O=n.getShaderInfoLog(R).trim(),W=n.getShaderInfoLog(A).trim();let j=!0,Y=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(n,x,R,A);else{const X=Rl(n,R,"vertex"),z=Rl(n,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+X+`
`+z)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(O===""||W==="")&&(Y=!1);Y&&(P.diagnostics={runnable:j,programLog:G,vertexShader:{log:O,prefix:m},fragmentShader:{log:W,prefix:p}})}n.deleteShader(R),n.deleteShader(A),I=new lo(n,x),w=A0(n,x)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(x,v0)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=A,this}let k0=0;class z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new G0(e),t.set(e,i)),i}}class G0{constructor(e){this.id=k0++,this.code=e,this.usedTimes=0}}function H0(o,e,t,i,n,s,r){const a=new kc,l=new z0,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,P,G,O){const W=G.fog,j=O.geometry,Y=w.isMeshStandardMaterial?G.environment:null,X=(w.isMeshStandardMaterial?t:e).get(w.envMap||Y),z=X&&X.mapping===wo?X.image.height:null,ie=g[w.type];w.precision!==null&&(f=n.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const de=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ye=de!==void 0?de.length:0;let re=0;j.morphAttributes.position!==void 0&&(re=1),j.morphAttributes.normal!==void 0&&(re=2),j.morphAttributes.color!==void 0&&(re=3);let Ie,q,ne,ge;if(ie){const et=li[ie];Ie=et.vertexShader,q=et.fragmentShader}else Ie=w.vertexShader,q=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),ge=l.getFragmentShaderID(w);const ae=o.getRenderTarget(),Pe=o.state.buffers.depth.getReversed(),Le=O.isInstancedMesh===!0,Ve=O.isBatchedMesh===!0,at=!!w.map,Xe=!!w.matcap,ft=!!X,N=!!w.aoMap,St=!!w.lightMap,Te=!!w.bumpMap,ue=!!w.normalMap,Ee=!!w.displacementMap,$e=!!w.emissiveMap,Ae=!!w.metalnessMap,T=!!w.roughnessMap,_=w.anisotropy>0,k=w.clearcoat>0,Z=w.dispersion>0,te=w.iridescence>0,J=w.sheen>0,Ce=w.transmission>0,he=_&&!!w.anisotropyMap,xe=k&&!!w.clearcoatMap,je=k&&!!w.clearcoatNormalMap,se=k&&!!w.clearcoatRoughnessMap,ve=te&&!!w.iridescenceMap,De=te&&!!w.iridescenceThicknessMap,Fe=J&&!!w.sheenColorMap,_e=J&&!!w.sheenRoughnessMap,qe=!!w.specularMap,Ge=!!w.specularColorMap,ot=!!w.specularIntensityMap,D=Ce&&!!w.transmissionMap,ce=Ce&&!!w.thicknessMap,$=!!w.gradientMap,ee=!!w.alphaMap,me=w.alphaTest>0,fe=!!w.alphaHash,Oe=!!w.extensions;let pt=Oi;w.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(pt=o.toneMapping);const Et={shaderID:ie,shaderType:w.type,shaderName:w.name,vertexShader:Ie,fragmentShader:q,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:Ve,batchingColor:Ve&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?o.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Wn,alphaToCoverage:!!w.alphaToCoverage,map:at,matcap:Xe,envMap:ft,envMapMode:ft&&X.mapping,envMapCubeUVHeight:z,aoMap:N,lightMap:St,bumpMap:Te,normalMap:ue,displacementMap:d&&Ee,emissiveMap:$e,normalMapObjectSpace:ue&&w.normalMapType===Jh,normalMapTangentSpace:ue&&w.normalMapType===Dc,metalnessMap:Ae,roughnessMap:T,anisotropy:_,anisotropyMap:he,clearcoat:k,clearcoatMap:xe,clearcoatNormalMap:je,clearcoatRoughnessMap:se,dispersion:Z,iridescence:te,iridescenceMap:ve,iridescenceThicknessMap:De,sheen:J,sheenColorMap:Fe,sheenRoughnessMap:_e,specularMap:qe,specularColorMap:Ge,specularIntensityMap:ot,transmission:Ce,transmissionMap:D,thicknessMap:ce,gradientMap:$,opaque:w.transparent===!1&&w.blending===Dn&&w.alphaToCoverage===!1,alphaMap:ee,alphaTest:me,alphaHash:fe,combine:w.combine,mapUv:at&&x(w.map.channel),aoMapUv:N&&x(w.aoMap.channel),lightMapUv:St&&x(w.lightMap.channel),bumpMapUv:Te&&x(w.bumpMap.channel),normalMapUv:ue&&x(w.normalMap.channel),displacementMapUv:Ee&&x(w.displacementMap.channel),emissiveMapUv:$e&&x(w.emissiveMap.channel),metalnessMapUv:Ae&&x(w.metalnessMap.channel),roughnessMapUv:T&&x(w.roughnessMap.channel),anisotropyMapUv:he&&x(w.anisotropyMap.channel),clearcoatMapUv:xe&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:je&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:De&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(w.sheenRoughnessMap.channel),specularMapUv:qe&&x(w.specularMap.channel),specularColorMapUv:Ge&&x(w.specularColorMap.channel),specularIntensityMapUv:ot&&x(w.specularIntensityMap.channel),transmissionMapUv:D&&x(w.transmissionMap.channel),thicknessMapUv:ce&&x(w.thicknessMap.channel),alphaMapUv:ee&&x(w.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ue||_),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!j.attributes.uv&&(at||ee),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pe,skinning:O.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:re,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:pt,decodeVideoTexture:at&&w.map.isVideoTexture===!0&&Ye.getTransfer(w.map.colorSpace)===tt,decodeVideoTextureEmissive:$e&&w.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(w.emissiveMap.colorSpace)===tt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Nt,flipSided:w.side===Rt,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Oe&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&w.extensions.multiDraw===!0||Ve)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function p(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)b.push(P),b.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(y(b,w),M(b,w),b.push(o.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function y(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function M(w,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),w.push(a.mask)}function v(w){const b=g[w.type];let P;if(b){const G=li[b];P=vs.clone(G.uniforms)}else P=w.uniforms;return P}function R(w,b){let P;for(let G=0,O=h.length;G<O;G++){const W=h[G];if(W.cacheKey===b){P=W,++P.usedTimes;break}}return P===void 0&&(P=new O0(o,b,w,s),h.push(P)),P}function A(w){if(--w.usedTimes===0){const b=h.indexOf(w);h[b]=h[h.length-1],h.pop(),w.destroy()}}function C(w){l.remove(w)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:I}}function V0(){let o=new WeakMap;function e(r){return o.has(r)}function t(r){let a=o.get(r);return a===void 0&&(a={},o.set(r,a)),a}function i(r){o.delete(r)}function n(r,a,l){o.get(r)[a]=l}function s(){o=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function W0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Bl(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Fl(){const o=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function r(u,d,f,g,x,m){let p=o[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},o[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function a(u,d,f,g,x,m){const p=r(u,d,f,g,x,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,g,x,m){const p=r(u,d,f,g,x,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||W0),i.length>1&&i.sort(d||Bl),n.length>1&&n.sort(d||Bl)}function h(){for(let u=e,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function X0(){let o=new WeakMap;function e(i,n){const s=o.get(i);let r;return s===void 0?(r=new Fl,o.set(i,[r])):n>=s.length?(r=new Fl,s.push(r)):r=s[n],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function q0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new be};break;case"SpotLight":t={position:new L,direction:new L,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new L,halfWidth:new L,halfHeight:new L};break}return o[e.id]=t,t}}}function Y0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let j0=0;function $0(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function J0(o){const e=new q0,t=Y0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const n=new L,s=new ut,r=new ut;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,y=0,M=0,v=0,R=0,A=0,C=0;c.sort($0);for(let w=0,b=c.length;w<b;w++){const P=c[w],G=P.color,O=P.intensity,W=P.distance,j=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*O,u+=G.g*O,d+=G.b*O;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],O);C++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,z=t.get(P);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,i.directionalShadow[f]=z,i.directionalShadowMap[f]=j,i.directionalShadowMatrix[f]=P.shadow.matrix,y++}i.directional[f]=Y,f++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(G).multiplyScalar(O),Y.distance=W,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[x]=Y;const X=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,X.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[x]=X.matrix,P.castShadow){const z=t.get(P);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,i.spotShadow[x]=z,i.spotShadowMap[x]=j,v++}x++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(G).multiplyScalar(O),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const X=P.shadow,z=t.get(P);z.shadowIntensity=X.intensity,z.shadowBias=X.bias,z.shadowNormalBias=X.normalBias,z.shadowRadius=X.radius,z.shadowMapSize=X.mapSize,z.shadowCameraNear=X.camera.near,z.shadowCameraFar=X.camera.far,i.pointShadow[g]=z,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=P.shadow.matrix,M++}i.point[g]=Y,g++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(O),Y.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[p]=Y,p++}}m>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==x||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==M||I.numSpotShadows!==v||I.numSpotMaps!==R||I.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=v+R-A,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=C,I.directionalLength=f,I.pointLength=g,I.spotLength=x,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=M,I.numSpotShadows=v,I.numSpotMaps=R,I.numLightProbes=C,i.version=j0++)}function l(c,h){let u=0,d=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const v=i.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=i.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(n),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),r.identity(),s.copy(M.matrixWorld),s.premultiply(m),r.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(M.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Ul(o){const e=new J0(o),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function r(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:r}}function K0(o){let e=new WeakMap;function t(n,s=0){const r=e.get(n);let a;return r===void 0?(a=new Ul(o),e.set(n,[a])):s>=r.length?(a=new Ul(o),r.push(a)):a=r[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class Z0 extends qn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=jh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q0 extends qn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tm=`uniform sampler2D shadow_pass;
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
}`;function im(o,e,t){let i=new ya;const n=new Be,s=new Be,r=new nt,a=new Z0({depthPacking:$h}),l=new Q0,c={},h=t.maxTextureSize,u={[zi]:Rt,[Rt]:zi,[Nt]:Nt},d=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:em,fragmentShader:tm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new B(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mc;let p=this.type;this.render=function(A,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=o.getRenderTarget(),b=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),G=o.state;G.setBlending(Mi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const O=p!==vi&&this.type===vi,W=p===vi&&this.type!==vi;for(let j=0,Y=A.length;j<Y;j++){const X=A[j],z=X.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;n.copy(z.mapSize);const ie=z.getFrameExtents();if(n.multiply(ie),s.copy(z.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/ie.x),n.x=s.x*ie.x,z.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/ie.y),n.y=s.y*ie.y,z.mapSize.y=s.y)),z.map===null||O===!0||W===!0){const ye=this.type!==vi?{minFilter:ni,magFilter:ni}:{};z.map!==null&&z.map.dispose(),z.map=new si(n.x,n.y,ye),z.map.texture.name=X.name+".shadowMap",z.camera.updateProjectionMatrix()}o.setRenderTarget(z.map),o.clear();const de=z.getViewportCount();for(let ye=0;ye<de;ye++){const re=z.getViewport(ye);r.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),G.viewport(r),z.updateMatrices(X,ye),i=z.getFrustum(),v(C,I,z.camera,X,this.type)}z.isPointLightShadow!==!0&&this.type===vi&&y(z,I),z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(w,b,P)};function y(A,C){const I=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new si(n.x,n.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,o.setRenderTarget(A.mapPass),o.clear(),o.renderBufferDirect(C,null,I,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,o.setRenderTarget(A.map),o.clear(),o.renderBufferDirect(C,null,I,f,x,null)}function M(A,C,I,w){let b=null;const P=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)b=P;else if(b=I.isPointLight===!0?l:a,o.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=b.uuid,O=C.uuid;let W=c[G];W===void 0&&(W={},c[G]=W);let j=W[O];j===void 0&&(j=b.clone(),W[O]=j,C.addEventListener("dispose",R)),b=j}if(b.visible=C.visible,b.wireframe=C.wireframe,w===vi?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const G=o.properties.get(b);G.light=I}return b}function v(A,C,I,w,b){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&b===vi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);const O=e.update(A),W=A.material;if(Array.isArray(W)){const j=O.groups;for(let Y=0,X=j.length;Y<X;Y++){const z=j[Y],ie=W[z.materialIndex];if(ie&&ie.visible){const de=M(A,ie,w,b);A.onBeforeShadow(o,A,C,I,O,de,z),o.renderBufferDirect(I,null,O,de,A,z),A.onAfterShadow(o,A,C,I,O,de,z)}}}else if(W.visible){const j=M(A,W,w,b);A.onBeforeShadow(o,A,C,I,O,j,null),o.renderBufferDirect(I,null,O,j,A,null),A.onAfterShadow(o,A,C,I,O,j,null)}}const G=A.children;for(let O=0,W=G.length;O<W;O++)v(G[O],C,I,w,b)}function R(A){A.target.removeEventListener("dispose",R);for(const I in c){const w=c[I],b=A.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const nm={[vr]:_r,[yr]:Mr,[br]:Sr,[Un]:wr,[_r]:vr,[Mr]:yr,[Sr]:br,[wr]:Un};function sm(o,e){function t(){let D=!1;const ce=new nt;let $=null;const ee=new nt(0,0,0,0);return{setMask:function(me){$!==me&&!D&&(o.colorMask(me,me,me,me),$=me)},setLocked:function(me){D=me},setClear:function(me,fe,Oe,pt,Et){Et===!0&&(me*=pt,fe*=pt,Oe*=pt),ce.set(me,fe,Oe,pt),ee.equals(ce)===!1&&(o.clearColor(me,fe,Oe,pt),ee.copy(ce))},reset:function(){D=!1,$=null,ee.set(-1,0,0,0)}}}function i(){let D=!1,ce=!1,$=null,ee=null,me=null;return{setReversed:function(fe){if(ce!==fe){const Oe=e.get("EXT_clip_control");ce?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const pt=me;me=null,this.setClear(pt)}ce=fe},getReversed:function(){return ce},setTest:function(fe){fe?ae(o.DEPTH_TEST):Pe(o.DEPTH_TEST)},setMask:function(fe){$!==fe&&!D&&(o.depthMask(fe),$=fe)},setFunc:function(fe){if(ce&&(fe=nm[fe]),ee!==fe){switch(fe){case vr:o.depthFunc(o.NEVER);break;case _r:o.depthFunc(o.ALWAYS);break;case yr:o.depthFunc(o.LESS);break;case Un:o.depthFunc(o.LEQUAL);break;case br:o.depthFunc(o.EQUAL);break;case wr:o.depthFunc(o.GEQUAL);break;case Mr:o.depthFunc(o.GREATER);break;case Sr:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ee=fe}},setLocked:function(fe){D=fe},setClear:function(fe){me!==fe&&(ce&&(fe=1-fe),o.clearDepth(fe),me=fe)},reset:function(){D=!1,$=null,ee=null,me=null,ce=!1}}}function n(){let D=!1,ce=null,$=null,ee=null,me=null,fe=null,Oe=null,pt=null,Et=null;return{setTest:function(et){D||(et?ae(o.STENCIL_TEST):Pe(o.STENCIL_TEST))},setMask:function(et){ce!==et&&!D&&(o.stencilMask(et),ce=et)},setFunc:function(et,Yt,di){($!==et||ee!==Yt||me!==di)&&(o.stencilFunc(et,Yt,di),$=et,ee=Yt,me=di)},setOp:function(et,Yt,di){(fe!==et||Oe!==Yt||pt!==di)&&(o.stencilOp(et,Yt,di),fe=et,Oe=Yt,pt=di)},setLocked:function(et){D=et},setClear:function(et){Et!==et&&(o.clearStencil(et),Et=et)},reset:function(){D=!1,ce=null,$=null,ee=null,me=null,fe=null,Oe=null,pt=null,Et=null}}}const s=new t,r=new i,a=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,M=null,v=null,R=null,A=null,C=new be(0,0,0),I=0,w=!1,b=null,P=null,G=null,O=null,W=null;const j=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,X=0;const z=o.getParameter(o.VERSION);z.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(z)[1]),Y=X>=1):z.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),Y=X>=2);let ie=null,de={};const ye=o.getParameter(o.SCISSOR_BOX),re=o.getParameter(o.VIEWPORT),Ie=new nt().fromArray(ye),q=new nt().fromArray(re);function ne(D,ce,$,ee){const me=new Uint8Array(4),fe=o.createTexture();o.bindTexture(D,fe),o.texParameteri(D,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(D,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Oe=0;Oe<$;Oe++)D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY?o.texImage3D(ce,0,o.RGBA,1,1,ee,0,o.RGBA,o.UNSIGNED_BYTE,me):o.texImage2D(ce+Oe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,me);return fe}const ge={};ge[o.TEXTURE_2D]=ne(o.TEXTURE_2D,o.TEXTURE_2D,1),ge[o.TEXTURE_CUBE_MAP]=ne(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[o.TEXTURE_2D_ARRAY]=ne(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ge[o.TEXTURE_3D]=ne(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ae(o.DEPTH_TEST),r.setFunc(Un),Te(!1),ue(Ga),ae(o.CULL_FACE),N(Mi);function ae(D){h[D]!==!0&&(o.enable(D),h[D]=!0)}function Pe(D){h[D]!==!1&&(o.disable(D),h[D]=!1)}function Le(D,ce){return u[D]!==ce?(o.bindFramebuffer(D,ce),u[D]=ce,D===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=ce),D===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ve(D,ce){let $=f,ee=!1;if(D){$=d.get(ce),$===void 0&&($=[],d.set(ce,$));const me=D.textures;if($.length!==me.length||$[0]!==o.COLOR_ATTACHMENT0){for(let fe=0,Oe=me.length;fe<Oe;fe++)$[fe]=o.COLOR_ATTACHMENT0+fe;$.length=me.length,ee=!0}}else $[0]!==o.BACK&&($[0]=o.BACK,ee=!0);ee&&o.drawBuffers($)}function at(D){return g!==D?(o.useProgram(D),g=D,!0):!1}const Xe={[en]:o.FUNC_ADD,[Mh]:o.FUNC_SUBTRACT,[Sh]:o.FUNC_REVERSE_SUBTRACT};Xe[Eh]=o.MIN,Xe[Th]=o.MAX;const ft={[Ah]:o.ZERO,[Ch]:o.ONE,[Rh]:o.SRC_COLOR,[gr]:o.SRC_ALPHA,[Fh]:o.SRC_ALPHA_SATURATE,[Dh]:o.DST_COLOR,[Ih]:o.DST_ALPHA,[Ph]:o.ONE_MINUS_SRC_COLOR,[xr]:o.ONE_MINUS_SRC_ALPHA,[Bh]:o.ONE_MINUS_DST_COLOR,[Lh]:o.ONE_MINUS_DST_ALPHA,[Uh]:o.CONSTANT_COLOR,[Nh]:o.ONE_MINUS_CONSTANT_COLOR,[Oh]:o.CONSTANT_ALPHA,[kh]:o.ONE_MINUS_CONSTANT_ALPHA};function N(D,ce,$,ee,me,fe,Oe,pt,Et,et){if(D===Mi){x===!0&&(Pe(o.BLEND),x=!1);return}if(x===!1&&(ae(o.BLEND),x=!0),D!==wh){if(D!==m||et!==w){if((p!==en||v!==en)&&(o.blendEquation(o.FUNC_ADD),p=en,v=en),et)switch(D){case Dn:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mr:o.blendFunc(o.ONE,o.ONE);break;case Ha:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Va:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Dn:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case mr:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Ha:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Va:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}y=null,M=null,R=null,A=null,C.set(0,0,0),I=0,m=D,w=et}return}me=me||ce,fe=fe||$,Oe=Oe||ee,(ce!==p||me!==v)&&(o.blendEquationSeparate(Xe[ce],Xe[me]),p=ce,v=me),($!==y||ee!==M||fe!==R||Oe!==A)&&(o.blendFuncSeparate(ft[$],ft[ee],ft[fe],ft[Oe]),y=$,M=ee,R=fe,A=Oe),(pt.equals(C)===!1||Et!==I)&&(o.blendColor(pt.r,pt.g,pt.b,Et),C.copy(pt),I=Et),m=D,w=!1}function St(D,ce){D.side===Nt?Pe(o.CULL_FACE):ae(o.CULL_FACE);let $=D.side===Rt;ce&&($=!$),Te($),D.blending===Dn&&D.transparent===!1?N(Mi):N(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const ee=D.stencilWrite;a.setTest(ee),ee&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),$e(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ae(o.SAMPLE_ALPHA_TO_COVERAGE):Pe(o.SAMPLE_ALPHA_TO_COVERAGE)}function Te(D){b!==D&&(D?o.frontFace(o.CW):o.frontFace(o.CCW),b=D)}function ue(D){D!==yh?(ae(o.CULL_FACE),D!==P&&(D===Ga?o.cullFace(o.BACK):D===bh?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Pe(o.CULL_FACE),P=D}function Ee(D){D!==G&&(Y&&o.lineWidth(D),G=D)}function $e(D,ce,$){D?(ae(o.POLYGON_OFFSET_FILL),(O!==ce||W!==$)&&(o.polygonOffset(ce,$),O=ce,W=$)):Pe(o.POLYGON_OFFSET_FILL)}function Ae(D){D?ae(o.SCISSOR_TEST):Pe(o.SCISSOR_TEST)}function T(D){D===void 0&&(D=o.TEXTURE0+j-1),ie!==D&&(o.activeTexture(D),ie=D)}function _(D,ce,$){$===void 0&&(ie===null?$=o.TEXTURE0+j-1:$=ie);let ee=de[$];ee===void 0&&(ee={type:void 0,texture:void 0},de[$]=ee),(ee.type!==D||ee.texture!==ce)&&(ie!==$&&(o.activeTexture($),ie=$),o.bindTexture(D,ce||ge[D]),ee.type=D,ee.texture=ce)}function k(){const D=de[ie];D!==void 0&&D.type!==void 0&&(o.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{o.compressedTexImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{o.compressedTexImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{o.texSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{o.texSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function je(){try{o.texStorage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{o.texStorage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{o.texImage2D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{o.texImage3D.apply(o,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Fe(D){Ie.equals(D)===!1&&(o.scissor(D.x,D.y,D.z,D.w),Ie.copy(D))}function _e(D){q.equals(D)===!1&&(o.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function qe(D,ce){let $=c.get(ce);$===void 0&&($=new WeakMap,c.set(ce,$));let ee=$.get(D);ee===void 0&&(ee=o.getUniformBlockIndex(ce,D.name),$.set(D,ee))}function Ge(D,ce){const ee=c.get(ce).get(D);l.get(ce)!==ee&&(o.uniformBlockBinding(ce,ee,D.__bindingPointIndex),l.set(ce,ee))}function ot(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),r.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},ie=null,de={},u={},d=new WeakMap,f=[],g=null,x=!1,m=null,p=null,y=null,M=null,v=null,R=null,A=null,C=new be(0,0,0),I=0,w=!1,b=null,P=null,G=null,O=null,W=null,Ie.set(0,0,o.canvas.width,o.canvas.height),q.set(0,0,o.canvas.width,o.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ae,disable:Pe,bindFramebuffer:Le,drawBuffers:Ve,useProgram:at,setBlending:N,setMaterial:St,setFlipSided:Te,setCullFace:ue,setLineWidth:Ee,setPolygonOffset:$e,setScissorTest:Ae,activeTexture:T,bindTexture:_,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:ve,texImage3D:De,updateUBOMapping:qe,uniformBlockBinding:Ge,texStorage2D:je,texStorage3D:se,texSubImage2D:J,texSubImage3D:Ce,compressedTexSubImage2D:he,compressedTexSubImage3D:xe,scissor:Fe,viewport:_e,reset:ot}}function Nl(o,e,t,i){const n=om(i);switch(t){case Tc:return o*e;case Cc:return o*e;case Rc:return o*e*2;case Pc:return o*e/n.components*n.byteLength;case ga:return o*e/n.components*n.byteLength;case Ic:return o*e*2/n.components*n.byteLength;case xa:return o*e*2/n.components*n.byteLength;case Ac:return o*e*3/n.components*n.byteLength;case ii:return o*e*4/n.components*n.byteLength;case va:return o*e*4/n.components*n.byteLength;case no:case so:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case oo:case ro:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Pr:case Lr:return Math.max(o,16)*Math.max(e,8)/4;case Rr:case Ir:return Math.max(o,8)*Math.max(e,8)/2;case Dr:case Br:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Fr:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ur:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Nr:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Or:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case kr:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case zr:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Gr:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Hr:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Vr:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Wr:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Xr:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case qr:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Yr:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case jr:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case $r:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case ao:case Jr:case Kr:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Lc:case Zr:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Qr:case ea:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function om(o){switch(o){case Ti:case Mc:return{byteLength:1,components:1};case xs:case Sc:case Si:return{byteLength:2,components:1};case pa:case ma:return{byteLength:2,components:4};case cn:case fa:case bi:return{byteLength:4,components:1};case Ec:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function rm(o,e,t,i,n,s,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):go("canvas")}function x(T,_,k){let Z=1;const te=Ae(T);if((te.width>k||te.height>k)&&(Z=k/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(Z*te.width),Ce=Math.floor(Z*te.height);u===void 0&&(u=g(J,Ce));const he=_?g(J,Ce):u;return he.width=J,he.height=Ce,he.getContext("2d").drawImage(T,0,0,J,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+J+"x"+Ce+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){o.generateMipmap(T)}function y(T){return T.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?o.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function M(T,_,k,Z,te=!1){if(T!==null){if(o[T]!==void 0)return o[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=_;if(_===o.RED&&(k===o.FLOAT&&(J=o.R32F),k===o.HALF_FLOAT&&(J=o.R16F),k===o.UNSIGNED_BYTE&&(J=o.R8)),_===o.RED_INTEGER&&(k===o.UNSIGNED_BYTE&&(J=o.R8UI),k===o.UNSIGNED_SHORT&&(J=o.R16UI),k===o.UNSIGNED_INT&&(J=o.R32UI),k===o.BYTE&&(J=o.R8I),k===o.SHORT&&(J=o.R16I),k===o.INT&&(J=o.R32I)),_===o.RG&&(k===o.FLOAT&&(J=o.RG32F),k===o.HALF_FLOAT&&(J=o.RG16F),k===o.UNSIGNED_BYTE&&(J=o.RG8)),_===o.RG_INTEGER&&(k===o.UNSIGNED_BYTE&&(J=o.RG8UI),k===o.UNSIGNED_SHORT&&(J=o.RG16UI),k===o.UNSIGNED_INT&&(J=o.RG32UI),k===o.BYTE&&(J=o.RG8I),k===o.SHORT&&(J=o.RG16I),k===o.INT&&(J=o.RG32I)),_===o.RGB_INTEGER&&(k===o.UNSIGNED_BYTE&&(J=o.RGB8UI),k===o.UNSIGNED_SHORT&&(J=o.RGB16UI),k===o.UNSIGNED_INT&&(J=o.RGB32UI),k===o.BYTE&&(J=o.RGB8I),k===o.SHORT&&(J=o.RGB16I),k===o.INT&&(J=o.RGB32I)),_===o.RGBA_INTEGER&&(k===o.UNSIGNED_BYTE&&(J=o.RGBA8UI),k===o.UNSIGNED_SHORT&&(J=o.RGBA16UI),k===o.UNSIGNED_INT&&(J=o.RGBA32UI),k===o.BYTE&&(J=o.RGBA8I),k===o.SHORT&&(J=o.RGBA16I),k===o.INT&&(J=o.RGBA32I)),_===o.RGB&&k===o.UNSIGNED_INT_5_9_9_9_REV&&(J=o.RGB9_E5),_===o.RGBA){const Ce=te?Mo:Ye.getTransfer(Z);k===o.FLOAT&&(J=o.RGBA32F),k===o.HALF_FLOAT&&(J=o.RGBA16F),k===o.UNSIGNED_BYTE&&(J=Ce===tt?o.SRGB8_ALPHA8:o.RGBA8),k===o.UNSIGNED_SHORT_4_4_4_4&&(J=o.RGBA4),k===o.UNSIGNED_SHORT_5_5_5_1&&(J=o.RGB5_A1)}return(J===o.R16F||J===o.R32F||J===o.RG16F||J===o.RG32F||J===o.RGBA16F||J===o.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(T,_){let k;return T?_===null||_===cn||_===kn?k=o.DEPTH24_STENCIL8:_===bi?k=o.DEPTH32F_STENCIL8:_===xs&&(k=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===cn||_===kn?k=o.DEPTH_COMPONENT24:_===bi?k=o.DEPTH_COMPONENT32F:_===xs&&(k=o.DEPTH_COMPONENT16),k}function R(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==ni&&T.minFilter!==ci?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){const _=T.target;_.removeEventListener("dispose",A),I(_),_.isVideoTexture&&h.delete(_)}function C(T){const _=T.target;_.removeEventListener("dispose",C),b(_)}function I(T){const _=i.get(T);if(_.__webglInit===void 0)return;const k=T.source,Z=d.get(k);if(Z){const te=Z[_.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(T),Object.keys(Z).length===0&&d.delete(k)}i.remove(T)}function w(T){const _=i.get(T);o.deleteTexture(_.__webglTexture);const k=T.source,Z=d.get(k);delete Z[_.__cacheKey],r.memory.textures--}function b(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let te=0;te<_.__webglFramebuffer[Z].length;te++)o.deleteFramebuffer(_.__webglFramebuffer[Z][te]);else o.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&o.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)o.deleteFramebuffer(_.__webglFramebuffer[Z]);else o.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&o.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&o.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&o.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&o.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const k=T.textures;for(let Z=0,te=k.length;Z<te;Z++){const J=i.get(k[Z]);J.__webglTexture&&(o.deleteTexture(J.__webglTexture),r.memory.textures--),i.remove(k[Z])}i.remove(T)}let P=0;function G(){P=0}function O(){const T=P;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),P+=1,T}function W(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function j(T,_){const k=i.get(T);if(T.isVideoTexture&&Ee(T),T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,T,_);return}}t.bindTexture(o.TEXTURE_2D,k.__webglTexture,o.TEXTURE0+_)}function Y(T,_){const k=i.get(T);if(T.version>0&&k.__version!==T.version){q(k,T,_);return}t.bindTexture(o.TEXTURE_2D_ARRAY,k.__webglTexture,o.TEXTURE0+_)}function X(T,_){const k=i.get(T);if(T.version>0&&k.__version!==T.version){q(k,T,_);return}t.bindTexture(o.TEXTURE_3D,k.__webglTexture,o.TEXTURE0+_)}function z(T,_){const k=i.get(T);if(T.version>0&&k.__version!==T.version){ne(k,T,_);return}t.bindTexture(o.TEXTURE_CUBE_MAP,k.__webglTexture,o.TEXTURE0+_)}const ie={[Ar]:o.REPEAT,[on]:o.CLAMP_TO_EDGE,[Cr]:o.MIRRORED_REPEAT},de={[ni]:o.NEAREST,[Vh]:o.NEAREST_MIPMAP_NEAREST,[Ps]:o.NEAREST_MIPMAP_LINEAR,[ci]:o.LINEAR,[Po]:o.LINEAR_MIPMAP_NEAREST,[rn]:o.LINEAR_MIPMAP_LINEAR},ye={[Kh]:o.NEVER,[nd]:o.ALWAYS,[Zh]:o.LESS,[Bc]:o.LEQUAL,[Qh]:o.EQUAL,[id]:o.GEQUAL,[ed]:o.GREATER,[td]:o.NOTEQUAL};function re(T,_){if(_.type===bi&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===ci||_.magFilter===Po||_.magFilter===Ps||_.magFilter===rn||_.minFilter===ci||_.minFilter===Po||_.minFilter===Ps||_.minFilter===rn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(T,o.TEXTURE_WRAP_S,ie[_.wrapS]),o.texParameteri(T,o.TEXTURE_WRAP_T,ie[_.wrapT]),(T===o.TEXTURE_3D||T===o.TEXTURE_2D_ARRAY)&&o.texParameteri(T,o.TEXTURE_WRAP_R,ie[_.wrapR]),o.texParameteri(T,o.TEXTURE_MAG_FILTER,de[_.magFilter]),o.texParameteri(T,o.TEXTURE_MIN_FILTER,de[_.minFilter]),_.compareFunction&&(o.texParameteri(T,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(T,o.TEXTURE_COMPARE_FUNC,ye[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===ni||_.minFilter!==Ps&&_.minFilter!==rn||_.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");o.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Ie(T,_){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));const Z=_.source;let te=d.get(Z);te===void 0&&(te={},d.set(Z,te));const J=W(_);if(J!==T.__cacheKey){te[J]===void 0&&(te[J]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,k=!0),te[J].usedTimes++;const Ce=te[T.__cacheKey];Ce!==void 0&&(te[T.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(_)),T.__cacheKey=J,T.__webglTexture=te[J].texture}return k}function q(T,_,k){let Z=o.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=o.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=o.TEXTURE_3D);const te=Ie(T,_),J=_.source;t.bindTexture(Z,T.__webglTexture,o.TEXTURE0+k);const Ce=i.get(J);if(J.version!==Ce.__version||te===!0){t.activeTexture(o.TEXTURE0+k);const he=Ye.getPrimaries(Ye.workingColorSpace),xe=_.colorSpace===Ui?null:Ye.getPrimaries(_.colorSpace),je=_.colorSpace===Ui||he===xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,_.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,_.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let se=x(_.image,!1,n.maxTextureSize);se=$e(_,se);const ve=s.convert(_.format,_.colorSpace),De=s.convert(_.type);let Fe=M(_.internalFormat,ve,De,_.colorSpace,_.isVideoTexture);re(Z,_);let _e;const qe=_.mipmaps,Ge=_.isVideoTexture!==!0,ot=Ce.__version===void 0||te===!0,D=J.dataReady,ce=R(_,se);if(_.isDepthTexture)Fe=v(_.format===zn,_.type),ot&&(Ge?t.texStorage2D(o.TEXTURE_2D,1,Fe,se.width,se.height):t.texImage2D(o.TEXTURE_2D,0,Fe,se.width,se.height,0,ve,De,null));else if(_.isDataTexture)if(qe.length>0){Ge&&ot&&t.texStorage2D(o.TEXTURE_2D,ce,Fe,qe[0].width,qe[0].height);for(let $=0,ee=qe.length;$<ee;$++)_e=qe[$],Ge?D&&t.texSubImage2D(o.TEXTURE_2D,$,0,0,_e.width,_e.height,ve,De,_e.data):t.texImage2D(o.TEXTURE_2D,$,Fe,_e.width,_e.height,0,ve,De,_e.data);_.generateMipmaps=!1}else Ge?(ot&&t.texStorage2D(o.TEXTURE_2D,ce,Fe,se.width,se.height),D&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,se.width,se.height,ve,De,se.data)):t.texImage2D(o.TEXTURE_2D,0,Fe,se.width,se.height,0,ve,De,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&ot&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ce,Fe,qe[0].width,qe[0].height,se.depth);for(let $=0,ee=qe.length;$<ee;$++)if(_e=qe[$],_.format!==ii)if(ve!==null)if(Ge){if(D)if(_.layerUpdates.size>0){const me=Nl(_e.width,_e.height,_.format,_.type);for(const fe of _.layerUpdates){const Oe=_e.data.subarray(fe*me/_e.data.BYTES_PER_ELEMENT,(fe+1)*me/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,$,0,0,fe,_e.width,_e.height,1,ve,Oe)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,se.depth,ve,_e.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,$,Fe,_e.width,_e.height,se.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?D&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,$,0,0,0,_e.width,_e.height,se.depth,ve,De,_e.data):t.texImage3D(o.TEXTURE_2D_ARRAY,$,Fe,_e.width,_e.height,se.depth,0,ve,De,_e.data)}else{Ge&&ot&&t.texStorage2D(o.TEXTURE_2D,ce,Fe,qe[0].width,qe[0].height);for(let $=0,ee=qe.length;$<ee;$++)_e=qe[$],_.format!==ii?ve!==null?Ge?D&&t.compressedTexSubImage2D(o.TEXTURE_2D,$,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(o.TEXTURE_2D,$,Fe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?D&&t.texSubImage2D(o.TEXTURE_2D,$,0,0,_e.width,_e.height,ve,De,_e.data):t.texImage2D(o.TEXTURE_2D,$,Fe,_e.width,_e.height,0,ve,De,_e.data)}else if(_.isDataArrayTexture)if(Ge){if(ot&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ce,Fe,se.width,se.height,se.depth),D)if(_.layerUpdates.size>0){const $=Nl(se.width,se.height,_.format,_.type);for(const ee of _.layerUpdates){const me=se.data.subarray(ee*$/se.data.BYTES_PER_ELEMENT,(ee+1)*$/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,ve,De,me)}_.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ve,De,se.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Fe,se.width,se.height,se.depth,0,ve,De,se.data);else if(_.isData3DTexture)Ge?(ot&&t.texStorage3D(o.TEXTURE_3D,ce,Fe,se.width,se.height,se.depth),D&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ve,De,se.data)):t.texImage3D(o.TEXTURE_3D,0,Fe,se.width,se.height,se.depth,0,ve,De,se.data);else if(_.isFramebufferTexture){if(ot)if(Ge)t.texStorage2D(o.TEXTURE_2D,ce,Fe,se.width,se.height);else{let $=se.width,ee=se.height;for(let me=0;me<ce;me++)t.texImage2D(o.TEXTURE_2D,me,Fe,$,ee,0,ve,De,null),$>>=1,ee>>=1}}else if(qe.length>0){if(Ge&&ot){const $=Ae(qe[0]);t.texStorage2D(o.TEXTURE_2D,ce,Fe,$.width,$.height)}for(let $=0,ee=qe.length;$<ee;$++)_e=qe[$],Ge?D&&t.texSubImage2D(o.TEXTURE_2D,$,0,0,ve,De,_e):t.texImage2D(o.TEXTURE_2D,$,Fe,ve,De,_e);_.generateMipmaps=!1}else if(Ge){if(ot){const $=Ae(se);t.texStorage2D(o.TEXTURE_2D,ce,Fe,$.width,$.height)}D&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,ve,De,se)}else t.texImage2D(o.TEXTURE_2D,0,Fe,ve,De,se);m(_)&&p(Z),Ce.__version=J.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ne(T,_,k){if(_.image.length!==6)return;const Z=Ie(T,_),te=_.source;t.bindTexture(o.TEXTURE_CUBE_MAP,T.__webglTexture,o.TEXTURE0+k);const J=i.get(te);if(te.version!==J.__version||Z===!0){t.activeTexture(o.TEXTURE0+k);const Ce=Ye.getPrimaries(Ye.workingColorSpace),he=_.colorSpace===Ui?null:Ye.getPrimaries(_.colorSpace),xe=_.colorSpace===Ui||Ce===he?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,_.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,_.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const je=_.isCompressedTexture||_.image[0].isCompressedTexture,se=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let ee=0;ee<6;ee++)!je&&!se?ve[ee]=x(_.image[ee],!0,n.maxCubemapSize):ve[ee]=se?_.image[ee].image:_.image[ee],ve[ee]=$e(_,ve[ee]);const De=ve[0],Fe=s.convert(_.format,_.colorSpace),_e=s.convert(_.type),qe=M(_.internalFormat,Fe,_e,_.colorSpace),Ge=_.isVideoTexture!==!0,ot=J.__version===void 0||Z===!0,D=te.dataReady;let ce=R(_,De);re(o.TEXTURE_CUBE_MAP,_);let $;if(je){Ge&&ot&&t.texStorage2D(o.TEXTURE_CUBE_MAP,ce,qe,De.width,De.height);for(let ee=0;ee<6;ee++){$=ve[ee].mipmaps;for(let me=0;me<$.length;me++){const fe=$[me];_.format!==ii?Fe!==null?Ge?D&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,0,0,fe.width,fe.height,Fe,fe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,qe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?D&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,0,0,fe.width,fe.height,Fe,_e,fe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me,qe,fe.width,fe.height,0,Fe,_e,fe.data)}}}else{if($=_.mipmaps,Ge&&ot){$.length>0&&ce++;const ee=Ae(ve[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,ce,qe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Ge?D&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ve[ee].width,ve[ee].height,Fe,_e,ve[ee].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,ve[ee].width,ve[ee].height,0,Fe,_e,ve[ee].data);for(let me=0;me<$.length;me++){const Oe=$[me].image[ee].image;Ge?D&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,0,0,Oe.width,Oe.height,Fe,_e,Oe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,qe,Oe.width,Oe.height,0,Fe,_e,Oe.data)}}else{Ge?D&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Fe,_e,ve[ee]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,qe,Fe,_e,ve[ee]);for(let me=0;me<$.length;me++){const fe=$[me];Ge?D&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,0,0,Fe,_e,fe.image[ee]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,me+1,qe,Fe,_e,fe.image[ee])}}}m(_)&&p(o.TEXTURE_CUBE_MAP),J.__version=te.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ge(T,_,k,Z,te,J){const Ce=s.convert(k.format,k.colorSpace),he=s.convert(k.type),xe=M(k.internalFormat,Ce,he,k.colorSpace),je=i.get(_),se=i.get(k);if(se.__renderTarget=_,!je.__hasExternalTextures){const ve=Math.max(1,_.width>>J),De=Math.max(1,_.height>>J);te===o.TEXTURE_3D||te===o.TEXTURE_2D_ARRAY?t.texImage3D(te,J,xe,ve,De,_.depth,0,Ce,he,null):t.texImage2D(te,J,xe,ve,De,0,Ce,he,null)}t.bindFramebuffer(o.FRAMEBUFFER,T),ue(_)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Z,te,se.__webglTexture,0,Te(_)):(te===o.TEXTURE_2D||te>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Z,te,se.__webglTexture,J),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ae(T,_,k){if(o.bindRenderbuffer(o.RENDERBUFFER,T),_.depthBuffer){const Z=_.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,J=v(_.stencilBuffer,te),Ce=_.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,he=Te(_);ue(_)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,he,J,_.width,_.height):k?o.renderbufferStorageMultisample(o.RENDERBUFFER,he,J,_.width,_.height):o.renderbufferStorage(o.RENDERBUFFER,J,_.width,_.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ce,o.RENDERBUFFER,T)}else{const Z=_.textures;for(let te=0;te<Z.length;te++){const J=Z[te],Ce=s.convert(J.format,J.colorSpace),he=s.convert(J.type),xe=M(J.internalFormat,Ce,he,J.colorSpace),je=Te(_);k&&ue(_)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,je,xe,_.width,_.height):ue(_)?a.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,je,xe,_.width,_.height):o.renderbufferStorage(o.RENDERBUFFER,xe,_.width,_.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Pe(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),j(_.depthTexture,0);const te=Z.__webglTexture,J=Te(_);if(_.depthTexture.format===Bn)ue(_)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,te,0,J):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,te,0);else if(_.depthTexture.format===zn)ue(_)?a.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,te,0,J):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Le(T){const _=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const te=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),_.__depthDisposeCallback=te}_.__boundDepthTexture=Z}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Pe(_.__webglFramebuffer,T)}else if(k){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(o.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=o.createRenderbuffer(),ae(_.__webglDepthbuffer[Z],T,!1);else{const te=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[Z];o.bindRenderbuffer(o.RENDERBUFFER,J),o.framebufferRenderbuffer(o.FRAMEBUFFER,te,o.RENDERBUFFER,J)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=o.createRenderbuffer(),ae(_.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,te=_.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,te),o.framebufferRenderbuffer(o.FRAMEBUFFER,Z,o.RENDERBUFFER,te)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ve(T,_,k){const Z=i.get(T);_!==void 0&&ge(Z.__webglFramebuffer,T,T.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),k!==void 0&&Le(T)}function at(T){const _=T.texture,k=i.get(T),Z=i.get(_);T.addEventListener("dispose",C);const te=T.textures,J=T.isWebGLCubeRenderTarget===!0,Ce=te.length>1;if(Ce||(Z.__webglTexture===void 0&&(Z.__webglTexture=o.createTexture()),Z.__version=_.version,r.memory.textures++),J){k.__webglFramebuffer=[];for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[he]=[];for(let xe=0;xe<_.mipmaps.length;xe++)k.__webglFramebuffer[he][xe]=o.createFramebuffer()}else k.__webglFramebuffer[he]=o.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let he=0;he<_.mipmaps.length;he++)k.__webglFramebuffer[he]=o.createFramebuffer()}else k.__webglFramebuffer=o.createFramebuffer();if(Ce)for(let he=0,xe=te.length;he<xe;he++){const je=i.get(te[he]);je.__webglTexture===void 0&&(je.__webglTexture=o.createTexture(),r.memory.textures++)}if(T.samples>0&&ue(T)===!1){k.__webglMultisampledFramebuffer=o.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){const xe=te[he];k.__webglColorRenderbuffer[he]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,k.__webglColorRenderbuffer[he]);const je=s.convert(xe.format,xe.colorSpace),se=s.convert(xe.type),ve=M(xe.internalFormat,je,se,xe.colorSpace,T.isXRRenderTarget===!0),De=Te(T);o.renderbufferStorageMultisample(o.RENDERBUFFER,De,ve,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+he,o.RENDERBUFFER,k.__webglColorRenderbuffer[he])}o.bindRenderbuffer(o.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=o.createRenderbuffer(),ae(k.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(J){t.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture),re(o.TEXTURE_CUBE_MAP,_);for(let he=0;he<6;he++)if(_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)ge(k.__webglFramebuffer[he][xe],T,_,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+he,xe);else ge(k.__webglFramebuffer[he],T,_,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(_)&&p(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let he=0,xe=te.length;he<xe;he++){const je=te[he],se=i.get(je);t.bindTexture(o.TEXTURE_2D,se.__webglTexture),re(o.TEXTURE_2D,je),ge(k.__webglFramebuffer,T,je,o.COLOR_ATTACHMENT0+he,o.TEXTURE_2D,0),m(je)&&p(o.TEXTURE_2D)}t.unbindTexture()}else{let he=o.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(he,Z.__webglTexture),re(he,_),_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)ge(k.__webglFramebuffer[xe],T,_,o.COLOR_ATTACHMENT0,he,xe);else ge(k.__webglFramebuffer,T,_,o.COLOR_ATTACHMENT0,he,0);m(_)&&p(he),t.unbindTexture()}T.depthBuffer&&Le(T)}function Xe(T){const _=T.textures;for(let k=0,Z=_.length;k<Z;k++){const te=_[k];if(m(te)){const J=y(T),Ce=i.get(te).__webglTexture;t.bindTexture(J,Ce),p(J),t.unbindTexture()}}}const ft=[],N=[];function St(T){if(T.samples>0){if(ue(T)===!1){const _=T.textures,k=T.width,Z=T.height;let te=o.COLOR_BUFFER_BIT;const J=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ce=i.get(T),he=_.length>1;if(he)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=o.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=o.STENCIL_BUFFER_BIT)),he){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);const je=i.get(_[xe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,je,0)}o.blitFramebuffer(0,0,k,Z,0,0,k,Z,te,o.NEAREST),l===!0&&(ft.length=0,N.length=0,ft.push(o.COLOR_ATTACHMENT0+xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ft.push(J),N.push(J),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,N)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),he)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.RENDERBUFFER,Ce.__webglColorRenderbuffer[xe]);const je=i.get(_[xe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ce.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.TEXTURE_2D,je,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[_])}}}function Te(T){return Math.min(n.maxSamples,T.samples)}function ue(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ee(T){const _=r.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function $e(T,_){const k=T.colorSpace,Z=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Wn&&k!==Ui&&(Ye.getTransfer(k)===tt?(Z!==ii||te!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),_}function Ae(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=G,this.setTexture2D=j,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=z,this.rebindTextures=Ve,this.setupRenderTarget=at,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=St,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=ue}function am(o,e){function t(i,n=Ui){let s;const r=Ye.getTransfer(n);if(i===Ti)return o.UNSIGNED_BYTE;if(i===pa)return o.UNSIGNED_SHORT_4_4_4_4;if(i===ma)return o.UNSIGNED_SHORT_5_5_5_1;if(i===Ec)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===Mc)return o.BYTE;if(i===Sc)return o.SHORT;if(i===xs)return o.UNSIGNED_SHORT;if(i===fa)return o.INT;if(i===cn)return o.UNSIGNED_INT;if(i===bi)return o.FLOAT;if(i===Si)return o.HALF_FLOAT;if(i===Tc)return o.ALPHA;if(i===Ac)return o.RGB;if(i===ii)return o.RGBA;if(i===Cc)return o.LUMINANCE;if(i===Rc)return o.LUMINANCE_ALPHA;if(i===Bn)return o.DEPTH_COMPONENT;if(i===zn)return o.DEPTH_STENCIL;if(i===Pc)return o.RED;if(i===ga)return o.RED_INTEGER;if(i===Ic)return o.RG;if(i===xa)return o.RG_INTEGER;if(i===va)return o.RGBA_INTEGER;if(i===no||i===so||i===oo||i===ro)if(r===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===no)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===no)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===so)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Rr||i===Pr||i===Ir||i===Lr)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Rr)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Pr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ir)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Dr||i===Br||i===Fr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Dr||i===Br)return r===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fr)return r===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ur||i===Nr||i===Or||i===kr||i===zr||i===Gr||i===Hr||i===Vr||i===Wr||i===Xr||i===qr||i===Yr||i===jr||i===$r)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ur)return r===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Nr)return r===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Or)return r===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kr)return r===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zr)return r===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gr)return r===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hr)return r===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vr)return r===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wr)return r===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xr)return r===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qr)return r===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Yr)return r===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===jr)return r===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$r)return r===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ao||i===Jr||i===Kr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ao)return r===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Jr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Lc||i===Zr||i===Qr||i===ea)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ao)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Zr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ea)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kn?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}class lm extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ne extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cm={type:"move"};class rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cm)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ne;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const hm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dm=`
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

}`;class um{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Dt,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ct({vertexShader:hm,fragmentShader:dm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new B(new ht(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fm extends hn{constructor(e,t){super();const i=this;let n=null,s=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const x=new um,m=t.getContextAttributes();let p=null,y=null;const M=[],v=[],R=new Be;let A=null;const C=new Lt;C.viewport=new nt;const I=new Lt;I.viewport=new nt;const w=[C,I],b=new lm;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ne=M[q];return ne===void 0&&(ne=new rr,M[q]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(q){let ne=M[q];return ne===void 0&&(ne=new rr,M[q]=ne),ne.getGripSpace()},this.getHand=function(q){let ne=M[q];return ne===void 0&&(ne=new rr,M[q]=ne),ne.getHandSpace()};function O(q){const ne=v.indexOf(q.inputSource);if(ne===-1)return;const ge=M[ne];ge!==void 0&&(ge.update(q.inputSource,q.frame,c||r),ge.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",W),n.removeEventListener("inputsourceschange",j);for(let q=0;q<M.length;q++){const ne=v[q];ne!==null&&(v[q]=null,M[q].disconnect(ne))}P=null,G=null,x.reset(),e.setRenderTarget(p),f=null,d=null,u=null,n=null,y=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(q){if(n=q,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",W),n.addEventListener("inputsourceschange",j),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(R),n.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,ne),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new si(f.framebufferWidth,f.framebufferHeight,{format:ii,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,ge=null,ae=null;m.depth&&(ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?zn:Bn,ge=m.stencil?kn:cn);const Pe={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(Pe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new si(d.textureWidth,d.textureHeight,{format:ii,type:Ti,depthTexture:new Yc(d.textureWidth,d.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await n.requestReferenceSpace(a),Ie.setContext(n),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function j(q){for(let ne=0;ne<q.removed.length;ne++){const ge=q.removed[ne],ae=v.indexOf(ge);ae>=0&&(v[ae]=null,M[ae].disconnect(ge))}for(let ne=0;ne<q.added.length;ne++){const ge=q.added[ne];let ae=v.indexOf(ge);if(ae===-1){for(let Le=0;Le<M.length;Le++)if(Le>=v.length){v.push(ge),ae=Le;break}else if(v[Le]===null){v[Le]=ge,ae=Le;break}if(ae===-1)break}const Pe=M[ae];Pe&&Pe.connect(ge)}}const Y=new L,X=new L;function z(q,ne,ge){Y.setFromMatrixPosition(ne.matrixWorld),X.setFromMatrixPosition(ge.matrixWorld);const ae=Y.distanceTo(X),Pe=ne.projectionMatrix.elements,Le=ge.projectionMatrix.elements,Ve=Pe[14]/(Pe[10]-1),at=Pe[14]/(Pe[10]+1),Xe=(Pe[9]+1)/Pe[5],ft=(Pe[9]-1)/Pe[5],N=(Pe[8]-1)/Pe[0],St=(Le[8]+1)/Le[0],Te=Ve*N,ue=Ve*St,Ee=ae/(-N+St),$e=Ee*-N;if(ne.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX($e),q.translateZ(Ee),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Pe[10]===-1)q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Ae=Ve+Ee,T=at+Ee,_=Te-$e,k=ue+(ae-$e),Z=Xe*at/T*Ae,te=ft*at/T*Ae;q.projectionMatrix.makePerspective(_,k,Z,te,Ae,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,ne){ne===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ne.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(n===null)return;let ne=q.near,ge=q.far;x.texture!==null&&(x.depthNear>0&&(ne=x.depthNear),x.depthFar>0&&(ge=x.depthFar)),b.near=I.near=C.near=ne,b.far=I.far=C.far=ge,(P!==b.near||G!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,G=b.far),C.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,b.layers.mask=C.layers.mask|I.layers.mask;const ae=q.parent,Pe=b.cameras;ie(b,ae);for(let Le=0;Le<Pe.length;Le++)ie(Pe[Le],ae);Pe.length===2?z(b,C,I):b.projectionMatrix.copy(C.projectionMatrix),de(q,b,ae)};function de(q,ne,ge){ge===null?q.matrix.copy(ne.matrixWorld):(q.matrix.copy(ge.matrixWorld),q.matrix.invert(),q.matrix.multiply(ne.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ne.projectionMatrix),q.projectionMatrixInverse.copy(ne.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=ia*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let ye=null;function re(q,ne){if(h=ne.getViewerPose(c||r),g=ne,h!==null){const ge=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let ae=!1;ge.length!==b.cameras.length&&(b.cameras.length=0,ae=!0);for(let Le=0;Le<ge.length;Le++){const Ve=ge[Le];let at=null;if(f!==null)at=f.getViewport(Ve);else{const ft=u.getViewSubImage(d,Ve);at=ft.viewport,Le===0&&(e.setRenderTargetTextures(y,ft.colorTexture,d.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(y))}let Xe=w[Le];Xe===void 0&&(Xe=new Lt,Xe.layers.enable(Le),Xe.viewport=new nt,w[Le]=Xe),Xe.matrix.fromArray(Ve.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ve.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(at.x,at.y,at.width,at.height),Le===0&&(b.matrix.copy(Xe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ae===!0&&b.cameras.push(Xe)}const Pe=n.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Le=u.getDepthInformation(ge[0]);Le&&Le.isValid&&Le.texture&&x.init(e,Le,n.renderState)}}for(let ge=0;ge<M.length;ge++){const ae=v[ge],Pe=M[ge];ae!==null&&Pe!==void 0&&Pe.update(ae,ne,c||r)}ye&&ye(q,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ie=new qc;Ie.setAnimationLoop(re),this.setAnimationLoop=function(q){ye=q},this.dispose=function(){}}}const Yi=new Ht,pm=new ut;function mm(o,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Vc(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,y,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,y,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),M=y.envMap,v=y.envMapRotation;M&&(m.envMap.value=M,Yi.copy(v),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(pm.makeRotationFromEuler(Yi)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function gm(o,e,t,i){let n={},s={},r=[];const a=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const v=M.program;i.uniformBlockBinding(y,v)}function c(y,M){let v=n[y.id];v===void 0&&(g(y),v=h(y),n[y.id]=v,y.addEventListener("dispose",m));const R=M.program;i.updateUBOMapping(y,R);const A=e.render.frame;s[y.id]!==A&&(d(y),s[y.id]=A)}function h(y){const M=u();y.__bindingPointIndex=M;const v=o.createBuffer(),R=y.__size,A=y.usage;return o.bindBuffer(o.UNIFORM_BUFFER,v),o.bufferData(o.UNIFORM_BUFFER,R,A),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,M,v),v}function u(){for(let y=0;y<a;y++)if(r.indexOf(y)===-1)return r.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const M=n[y.id],v=y.uniforms,R=y.__cache;o.bindBuffer(o.UNIFORM_BUFFER,M);for(let A=0,C=v.length;A<C;A++){const I=Array.isArray(v[A])?v[A]:[v[A]];for(let w=0,b=I.length;w<b;w++){const P=I[w];if(f(P,A,w,R)===!0){const G=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let j=0;j<O.length;j++){const Y=O[j],X=x(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,o.bufferSubData(o.UNIFORM_BUFFER,G+W,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,W),W+=X.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,G,P.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(y,M,v,R){const A=y.value,C=M+"_"+v;if(R[C]===void 0)return typeof A=="number"||typeof A=="boolean"?R[C]=A:R[C]=A.clone(),!0;{const I=R[C];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return R[C]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function g(y){const M=y.uniforms;let v=0;const R=16;for(let C=0,I=M.length;C<I;C++){const w=Array.isArray(M[C])?M[C]:[M[C]];for(let b=0,P=w.length;b<P;b++){const G=w[b],O=Array.isArray(G.value)?G.value:[G.value];for(let W=0,j=O.length;W<j;W++){const Y=O[W],X=x(Y),z=v%R,ie=z%X.boundary,de=z+ie;v+=ie,de!==0&&R-de<X.storage&&(v+=R-de),G.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=X.storage}}}const A=v%R;return A>0&&(v+=R-A),y.__size=v,y.__cache={},this}function x(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function m(y){const M=y.target;M.removeEventListener("dispose",m);const v=r.indexOf(M.__bindingPointIndex);r.splice(v,1),o.deleteBuffer(n[M.id]),delete n[M.id],delete s[M.id]}function p(){for(const y in n)o.deleteBuffer(n[y]);r=[],n={},s={}}return{bind:l,update:c,dispose:p}}class Ma{constructor(e={}){const{canvas:t=od(),context:i=null,depth:n=!0,stencil:s=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const y=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=Oi,this.toneMappingExposure=1;const v=this;let R=!1,A=0,C=0,I=null,w=-1,b=null;const P=new nt,G=new nt;let O=null;const W=new be(0);let j=0,Y=t.width,X=t.height,z=1,ie=null,de=null;const ye=new nt(0,0,Y,X),re=new nt(0,0,Y,X);let Ie=!1;const q=new ya;let ne=!1,ge=!1;const ae=new ut,Pe=new ut,Le=new L,Ve=new nt,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ft(){return I===null?z:1}let N=i;function St(S,F){return t.getContext(S,F)}try{const S={alpha:!0,depth:n,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ha}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",fe,!1),N===null){const F="webgl2";if(N=St(F,S),N===null)throw St(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Te,ue,Ee,$e,Ae,T,_,k,Z,te,J,Ce,he,xe,je,se,ve,De,Fe,_e,qe,Ge,ot,D;function ce(){Te=new wp(N),Te.init(),Ge=new am(N,Te),ue=new gp(N,Te,e,Ge),Ee=new sm(N,Te),ue.reverseDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),$e=new Ep(N),Ae=new V0,T=new rm(N,Te,Ee,Ae,ue,Ge,$e),_=new vp(v),k=new bp(v),Z=new Id(N),ot=new pp(N,Z),te=new Mp(N,Z,$e,ot),J=new Ap(N,te,Z,$e),Fe=new Tp(N,ue,T),se=new xp(Ae),Ce=new H0(v,_,k,Te,ue,ot,se),he=new mm(v,Ae),xe=new X0,je=new K0(Te),De=new fp(v,_,k,Ee,J,f,l),ve=new im(v,J,ue),D=new gm(N,$e,ue,Ee),_e=new mp(N,Te,$e),qe=new Sp(N,Te,$e),$e.programs=Ce.programs,v.capabilities=ue,v.extensions=Te,v.properties=Ae,v.renderLists=xe,v.shadowMap=ve,v.state=Ee,v.info=$e}ce();const $=new fm(v,N);this.xr=$,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=Te.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Te.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(Y,X,!1))},this.getSize=function(S){return S.set(Y,X)},this.setSize=function(S,F,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=S,X=F,t.width=Math.floor(S*z),t.height=Math.floor(F*z),H===!0&&(t.style.width=S+"px",t.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(Y*z,X*z).floor()},this.setDrawingBufferSize=function(S,F,H){Y=S,X=F,z=H,t.width=Math.floor(S*H),t.height=Math.floor(F*H),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(ye)},this.setViewport=function(S,F,H,V){S.isVector4?ye.set(S.x,S.y,S.z,S.w):ye.set(S,F,H,V),Ee.viewport(P.copy(ye).multiplyScalar(z).round())},this.getScissor=function(S){return S.copy(re)},this.setScissor=function(S,F,H,V){S.isVector4?re.set(S.x,S.y,S.z,S.w):re.set(S,F,H,V),Ee.scissor(G.copy(re).multiplyScalar(z).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(S){Ee.setScissorTest(Ie=S)},this.setOpaqueSort=function(S){ie=S},this.setTransparentSort=function(S){de=S},this.getClearColor=function(S){return S.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(S=!0,F=!0,H=!0){let V=0;if(S){let U=!1;if(I!==null){const oe=I.texture.format;U=oe===va||oe===xa||oe===ga}if(U){const oe=I.texture.type,pe=oe===Ti||oe===cn||oe===xs||oe===kn||oe===pa||oe===ma,we=De.getClearColor(),Me=De.getClearAlpha(),Ue=we.r,ke=we.g,Se=we.b;pe?(g[0]=Ue,g[1]=ke,g[2]=Se,g[3]=Me,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=Ue,x[1]=ke,x[2]=Se,x[3]=Me,N.clearBufferiv(N.COLOR,0,x))}else V|=N.COLOR_BUFFER_BIT}F&&(V|=N.DEPTH_BUFFER_BIT),H&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),xe.dispose(),je.dispose(),Ae.dispose(),_.dispose(),k.dispose(),J.dispose(),ot.dispose(),D.dispose(),Ce.dispose(),$.dispose(),$.removeEventListener("sessionstart",Da),$.removeEventListener("sessionend",Ba),Gi.stop()};function ee(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=$e.autoReset,F=ve.enabled,H=ve.autoUpdate,V=ve.needsUpdate,U=ve.type;ce(),$e.autoReset=S,ve.enabled=F,ve.autoUpdate=H,ve.needsUpdate=V,ve.type=U}function fe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Oe(S){const F=S.target;F.removeEventListener("dispose",Oe),pt(F)}function pt(S){Et(S),Ae.remove(S)}function Et(S){const F=Ae.get(S).programs;F!==void 0&&(F.forEach(function(H){Ce.releaseProgram(H)}),S.isShaderMaterial&&Ce.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,H,V,U,oe){F===null&&(F=at);const pe=U.isMesh&&U.matrixWorld.determinant()<0,we=mh(S,F,H,V,U);Ee.setMaterial(V,pe);let Me=H.index,Ue=1;if(V.wireframe===!0){if(Me=te.getWireframeAttribute(H),Me===void 0)return;Ue=2}const ke=H.drawRange,Se=H.attributes.position;let Je=ke.start*Ue,rt=(ke.start+ke.count)*Ue;oe!==null&&(Je=Math.max(Je,oe.start*Ue),rt=Math.min(rt,(oe.start+oe.count)*Ue)),Me!==null?(Je=Math.max(Je,0),rt=Math.min(rt,Me.count)):Se!=null&&(Je=Math.max(Je,0),rt=Math.min(rt,Se.count));const lt=rt-Je;if(lt<0||lt===1/0)return;ot.setup(U,V,we,H,Me);let Bt,Ke=_e;if(Me!==null&&(Bt=Z.get(Me),Ke=qe,Ke.setIndex(Bt)),U.isMesh)V.wireframe===!0?(Ee.setLineWidth(V.wireframeLinewidth*ft()),Ke.setMode(N.LINES)):Ke.setMode(N.TRIANGLES);else if(U.isLine){let Re=V.linewidth;Re===void 0&&(Re=1),Ee.setLineWidth(Re*ft()),U.isLineSegments?Ke.setMode(N.LINES):U.isLineLoop?Ke.setMode(N.LINE_LOOP):Ke.setMode(N.LINE_STRIP)}else U.isPoints?Ke.setMode(N.POINTS):U.isSprite&&Ke.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))Ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Re=U._multiDrawStarts,ui=U._multiDrawCounts,Ze=U._multiDrawCount,jt=Me?Z.get(Me).bytesPerElement:1,un=Ae.get(V).currentProgram.getUniforms();for(let kt=0;kt<Ze;kt++)un.setValue(N,"_gl_DrawID",kt),Ke.render(Re[kt]/jt,ui[kt])}else if(U.isInstancedMesh)Ke.renderInstances(Je,lt,U.count);else if(H.isInstancedBufferGeometry){const Re=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,ui=Math.min(H.instanceCount,Re);Ke.renderInstances(Je,lt,ui)}else Ke.render(Je,lt)};function et(S,F,H){S.transparent===!0&&S.side===Nt&&S.forceSinglePass===!1?(S.side=Rt,S.needsUpdate=!0,Rs(S,F,H),S.side=zi,S.needsUpdate=!0,Rs(S,F,H),S.side=Nt):Rs(S,F,H)}this.compile=function(S,F,H=null){H===null&&(H=S),p=je.get(H),p.init(F),M.push(p),H.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),S!==H&&S.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const V=new Set;return S.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let pe=0;pe<oe.length;pe++){const we=oe[pe];et(we,H,U),V.add(we)}else et(oe,H,U),V.add(oe)}),M.pop(),p=null,V},this.compileAsync=function(S,F,H=null){const V=this.compile(S,F,H);return new Promise(U=>{function oe(){if(V.forEach(function(pe){Ae.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){U(S);return}setTimeout(oe,10)}Te.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Yt=null;function di(S){Yt&&Yt(S)}function Da(){Gi.stop()}function Ba(){Gi.start()}const Gi=new qc;Gi.setAnimationLoop(di),typeof self<"u"&&Gi.setContext(self),this.setAnimationLoop=function(S){Yt=S,$.setAnimationLoop(S),S===null?Gi.stop():Gi.start()},$.addEventListener("sessionstart",Da),$.addEventListener("sessionend",Ba),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(F),F=$.getCamera()),S.isScene===!0&&S.onBeforeRender(v,S,F,I),p=je.get(S,M.length),p.init(F),M.push(p),Pe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),q.setFromProjectionMatrix(Pe),ge=this.localClippingEnabled,ne=se.init(this.clippingPlanes,ge),m=xe.get(S,y.length),m.init(),y.push(m),$.enabled===!0&&$.isPresenting===!0){const oe=v.xr.getDepthSensingMesh();oe!==null&&Ro(oe,F,-1/0,v.sortObjects)}Ro(S,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ie,de),Xe=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Xe&&De.addToRenderList(m,S),this.info.render.frame++,ne===!0&&se.beginShadows();const H=p.state.shadowsArray;ve.render(H,S,F),ne===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,U=m.transmissive;if(p.setupLights(),F.isArrayCamera){const oe=F.cameras;if(U.length>0)for(let pe=0,we=oe.length;pe<we;pe++){const Me=oe[pe];Ua(V,U,S,Me)}Xe&&De.render(S);for(let pe=0,we=oe.length;pe<we;pe++){const Me=oe[pe];Fa(m,S,Me,Me.viewport)}}else U.length>0&&Ua(V,U,S,F),Xe&&De.render(S),Fa(m,S,F);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(v,S,F),ot.resetDefaultState(),w=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],ne===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ro(S,F,H,V){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||q.intersectsSprite(S)){V&&Ve.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pe);const pe=J.update(S),we=S.material;we.visible&&m.push(S,pe,we,H,Ve.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||q.intersectsObject(S))){const pe=J.update(S),we=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ve.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ve.copy(pe.boundingSphere.center)),Ve.applyMatrix4(S.matrixWorld).applyMatrix4(Pe)),Array.isArray(we)){const Me=pe.groups;for(let Ue=0,ke=Me.length;Ue<ke;Ue++){const Se=Me[Ue],Je=we[Se.materialIndex];Je&&Je.visible&&m.push(S,pe,Je,H,Ve.z,Se)}}else we.visible&&m.push(S,pe,we,H,Ve.z,null)}}const oe=S.children;for(let pe=0,we=oe.length;pe<we;pe++)Ro(oe[pe],F,H,V)}function Fa(S,F,H,V){const U=S.opaque,oe=S.transmissive,pe=S.transparent;p.setupLightsView(H),ne===!0&&se.setGlobalState(v.clippingPlanes,H),V&&Ee.viewport(P.copy(V)),U.length>0&&Cs(U,F,H),oe.length>0&&Cs(oe,F,H),pe.length>0&&Cs(pe,F,H),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Ua(S,F,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new si(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?Si:Ti,minFilter:rn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const oe=p.state.transmissionRenderTarget[V.id],pe=V.viewport||P;oe.setSize(pe.z,pe.w);const we=v.getRenderTarget();v.setRenderTarget(oe),v.getClearColor(W),j=v.getClearAlpha(),j<1&&v.setClearColor(16777215,.5),v.clear(),Xe&&De.render(H);const Me=v.toneMapping;v.toneMapping=Oi;const Ue=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ne===!0&&se.setGlobalState(v.clippingPlanes,V),Cs(S,H,V),T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe),Te.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Se=0,Je=F.length;Se<Je;Se++){const rt=F[Se],lt=rt.object,Bt=rt.geometry,Ke=rt.material,Re=rt.group;if(Ke.side===Nt&&lt.layers.test(V.layers)){const ui=Ke.side;Ke.side=Rt,Ke.needsUpdate=!0,Na(lt,H,V,Bt,Ke,Re),Ke.side=ui,Ke.needsUpdate=!0,ke=!0}}ke===!0&&(T.updateMultisampleRenderTarget(oe),T.updateRenderTargetMipmap(oe))}v.setRenderTarget(we),v.setClearColor(W,j),Ue!==void 0&&(V.viewport=Ue),v.toneMapping=Me}function Cs(S,F,H){const V=F.isScene===!0?F.overrideMaterial:null;for(let U=0,oe=S.length;U<oe;U++){const pe=S[U],we=pe.object,Me=pe.geometry,Ue=V===null?pe.material:V,ke=pe.group;we.layers.test(H.layers)&&Na(we,F,H,Me,Ue,ke)}}function Na(S,F,H,V,U,oe){S.onBeforeRender(v,F,H,V,U,oe),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),U.onBeforeRender(v,F,H,V,S,oe),U.transparent===!0&&U.side===Nt&&U.forceSinglePass===!1?(U.side=Rt,U.needsUpdate=!0,v.renderBufferDirect(H,F,V,U,S,oe),U.side=zi,U.needsUpdate=!0,v.renderBufferDirect(H,F,V,U,S,oe),U.side=Nt):v.renderBufferDirect(H,F,V,U,S,oe),S.onAfterRender(v,F,H,V,U,oe)}function Rs(S,F,H){F.isScene!==!0&&(F=at);const V=Ae.get(S),U=p.state.lights,oe=p.state.shadowsArray,pe=U.state.version,we=Ce.getParameters(S,U.state,oe,F,H),Me=Ce.getProgramCacheKey(we);let Ue=V.programs;V.environment=S.isMeshStandardMaterial?F.environment:null,V.fog=F.fog,V.envMap=(S.isMeshStandardMaterial?k:_).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Ue===void 0&&(S.addEventListener("dispose",Oe),Ue=new Map,V.programs=Ue);let ke=Ue.get(Me);if(ke!==void 0){if(V.currentProgram===ke&&V.lightsStateVersion===pe)return ka(S,we),ke}else we.uniforms=Ce.getUniforms(S),S.onBeforeCompile(we,v),ke=Ce.acquireProgram(we,Me),Ue.set(Me,ke),V.uniforms=we.uniforms;const Se=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Se.clippingPlanes=se.uniform),ka(S,we),V.needsLights=xh(S),V.lightsStateVersion=pe,V.needsLights&&(Se.ambientLightColor.value=U.state.ambient,Se.lightProbe.value=U.state.probe,Se.directionalLights.value=U.state.directional,Se.directionalLightShadows.value=U.state.directionalShadow,Se.spotLights.value=U.state.spot,Se.spotLightShadows.value=U.state.spotShadow,Se.rectAreaLights.value=U.state.rectArea,Se.ltc_1.value=U.state.rectAreaLTC1,Se.ltc_2.value=U.state.rectAreaLTC2,Se.pointLights.value=U.state.point,Se.pointLightShadows.value=U.state.pointShadow,Se.hemisphereLights.value=U.state.hemi,Se.directionalShadowMap.value=U.state.directionalShadowMap,Se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Se.spotShadowMap.value=U.state.spotShadowMap,Se.spotLightMatrix.value=U.state.spotLightMatrix,Se.spotLightMap.value=U.state.spotLightMap,Se.pointShadowMap.value=U.state.pointShadowMap,Se.pointShadowMatrix.value=U.state.pointShadowMatrix),V.currentProgram=ke,V.uniformsList=null,ke}function Oa(S){if(S.uniformsList===null){const F=S.currentProgram.getUniforms();S.uniformsList=lo.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function ka(S,F){const H=Ae.get(S);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function mh(S,F,H,V,U){F.isScene!==!0&&(F=at),T.resetTextureUnits();const oe=F.fog,pe=V.isMeshStandardMaterial?F.environment:null,we=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Wn,Me=(V.isMeshStandardMaterial?k:_).get(V.envMap||pe),Ue=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ke=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!H.morphAttributes.position,Je=!!H.morphAttributes.normal,rt=!!H.morphAttributes.color;let lt=Oi;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(lt=v.toneMapping);const Bt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ke=Bt!==void 0?Bt.length:0,Re=Ae.get(V),ui=p.state.lights;if(ne===!0&&(ge===!0||S!==b)){const Vt=S===b&&V.id===w;se.setState(V,S,Vt)}let Ze=!1;V.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==ui.state.version||Re.outputColorSpace!==we||U.isBatchedMesh&&Re.batching===!1||!U.isBatchedMesh&&Re.batching===!0||U.isBatchedMesh&&Re.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Re.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Re.instancing===!1||!U.isInstancedMesh&&Re.instancing===!0||U.isSkinnedMesh&&Re.skinning===!1||!U.isSkinnedMesh&&Re.skinning===!0||U.isInstancedMesh&&Re.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Re.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Re.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Re.instancingMorph===!1&&U.morphTexture!==null||Re.envMap!==Me||V.fog===!0&&Re.fog!==oe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==se.numPlanes||Re.numIntersection!==se.numIntersection)||Re.vertexAlphas!==Ue||Re.vertexTangents!==ke||Re.morphTargets!==Se||Re.morphNormals!==Je||Re.morphColors!==rt||Re.toneMapping!==lt||Re.morphTargetsCount!==Ke)&&(Ze=!0):(Ze=!0,Re.__version=V.version);let jt=Re.currentProgram;Ze===!0&&(jt=Rs(V,F,U));let un=!1,kt=!1,Kn=!1;const ct=jt.getUniforms(),ri=Re.uniforms;if(Ee.useProgram(jt.program)&&(un=!0,kt=!0,Kn=!0),V.id!==w&&(w=V.id,kt=!0),un||b!==S){Ee.buffers.depth.getReversed()?(ae.copy(S.projectionMatrix),ad(ae),ld(ae),ct.setValue(N,"projectionMatrix",ae)):ct.setValue(N,"projectionMatrix",S.projectionMatrix),ct.setValue(N,"viewMatrix",S.matrixWorldInverse);const Ci=ct.map.cameraPosition;Ci!==void 0&&Ci.setValue(N,Le.setFromMatrixPosition(S.matrixWorld)),ue.logarithmicDepthBuffer&&ct.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ct.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,kt=!0,Kn=!0)}if(U.isSkinnedMesh){ct.setOptional(N,U,"bindMatrix"),ct.setOptional(N,U,"bindMatrixInverse");const Vt=U.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),ct.setValue(N,"boneTexture",Vt.boneTexture,T))}U.isBatchedMesh&&(ct.setOptional(N,U,"batchingTexture"),ct.setValue(N,"batchingTexture",U._matricesTexture,T),ct.setOptional(N,U,"batchingIdTexture"),ct.setValue(N,"batchingIdTexture",U._indirectTexture,T),ct.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&ct.setValue(N,"batchingColorTexture",U._colorsTexture,T));const Zn=H.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&Fe.update(U,H,jt),(kt||Re.receiveShadow!==U.receiveShadow)&&(Re.receiveShadow=U.receiveShadow,ct.setValue(N,"receiveShadow",U.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(ri.envMap.value=Me,ri.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&F.environment!==null&&(ri.envMapIntensity.value=F.environmentIntensity),kt&&(ct.setValue(N,"toneMappingExposure",v.toneMappingExposure),Re.needsLights&&gh(ri,Kn),oe&&V.fog===!0&&he.refreshFogUniforms(ri,oe),he.refreshMaterialUniforms(ri,V,z,X,p.state.transmissionRenderTarget[S.id]),lo.upload(N,Oa(Re),ri,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(lo.upload(N,Oa(Re),ri,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ct.setValue(N,"center",U.center),ct.setValue(N,"modelViewMatrix",U.modelViewMatrix),ct.setValue(N,"normalMatrix",U.normalMatrix),ct.setValue(N,"modelMatrix",U.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Vt=V.uniformsGroups;for(let Ci=0,Ri=Vt.length;Ci<Ri;Ci++){const za=Vt[Ci];D.update(za,jt),D.bind(za,jt)}}return jt}function gh(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function xh(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,F,H){Ae.get(S.texture).__webglTexture=F,Ae.get(S.depthTexture).__webglTexture=H;const V=Ae.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,F){const H=Ae.get(S);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,H=0){I=S,A=F,C=H;let V=!0,U=null,oe=!1,pe=!1;if(S){const Me=Ae.get(S);if(Me.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(N.FRAMEBUFFER,null),V=!1;else if(Me.__webglFramebuffer===void 0)T.setupRenderTarget(S);else if(Me.__hasExternalTextures)T.rebindTextures(S,Ae.get(S.texture).__webglTexture,Ae.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Se=S.depthTexture;if(Me.__boundDepthTexture!==Se){if(Se!==null&&Ae.has(Se)&&(S.width!==Se.image.width||S.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(S)}}const Ue=S.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(pe=!0);const ke=Ae.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?U=ke[F][H]:U=ke[F],oe=!0):S.samples>0&&T.useMultisampledRTT(S)===!1?U=Ae.get(S).__webglMultisampledFramebuffer:Array.isArray(ke)?U=ke[H]:U=ke,P.copy(S.viewport),G.copy(S.scissor),O=S.scissorTest}else P.copy(ye).multiplyScalar(z).floor(),G.copy(re).multiplyScalar(z).floor(),O=Ie;if(Ee.bindFramebuffer(N.FRAMEBUFFER,U)&&V&&Ee.drawBuffers(S,U),Ee.viewport(P),Ee.scissor(G),Ee.setScissorTest(O),oe){const Me=Ae.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,H)}else if(pe){const Me=Ae.get(S.texture),Ue=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.__webglTexture,H||0,Ue)}w=-1},this.readRenderTargetPixels=function(S,F,H,V,U,oe,pe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we){Ee.bindFramebuffer(N.FRAMEBUFFER,we);try{const Me=S.texture,Ue=Me.format,ke=Me.type;if(!ue.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-V&&H>=0&&H<=S.height-U&&N.readPixels(F,H,V,U,Ge.convert(Ue),Ge.convert(ke),oe)}finally{const Me=I!==null?Ae.get(I).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(S,F,H,V,U,oe,pe){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ae.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(we=we[pe]),we){const Me=S.texture,Ue=Me.format,ke=Me.type;if(!ue.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=S.width-V&&H>=0&&H<=S.height-U){Ee.bindFramebuffer(N.FRAMEBUFFER,we);const Se=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.bufferData(N.PIXEL_PACK_BUFFER,oe.byteLength,N.STREAM_READ),N.readPixels(F,H,V,U,Ge.convert(Ue),Ge.convert(ke),0);const Je=I!==null?Ae.get(I).__webglFramebuffer:null;Ee.bindFramebuffer(N.FRAMEBUFFER,Je);const rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await rd(N,rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Se),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,oe),N.deleteBuffer(Se),N.deleteSync(rt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,F=null,H=0){S.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-H),U=Math.floor(S.image.width*V),oe=Math.floor(S.image.height*V),pe=F!==null?F.x:0,we=F!==null?F.y:0;T.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,pe,we,U,oe),Ee.unbindTexture()},this.copyTextureToTexture=function(S,F,H=null,V=null,U=0){S.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],F=arguments[2],U=arguments[3]||0,H=null);let oe,pe,we,Me,Ue,ke,Se,Je,rt;const lt=S.isCompressedTexture?S.mipmaps[U]:S.image;H!==null?(oe=H.max.x-H.min.x,pe=H.max.y-H.min.y,we=H.isBox3?H.max.z-H.min.z:1,Me=H.min.x,Ue=H.min.y,ke=H.isBox3?H.min.z:0):(oe=lt.width,pe=lt.height,we=lt.depth||1,Me=0,Ue=0,ke=0),V!==null?(Se=V.x,Je=V.y,rt=V.z):(Se=0,Je=0,rt=0);const Bt=Ge.convert(F.format),Ke=Ge.convert(F.type);let Re;F.isData3DTexture?(T.setTexture3D(F,0),Re=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),Re=N.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),Re=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const ui=N.getParameter(N.UNPACK_ROW_LENGTH),Ze=N.getParameter(N.UNPACK_IMAGE_HEIGHT),jt=N.getParameter(N.UNPACK_SKIP_PIXELS),un=N.getParameter(N.UNPACK_SKIP_ROWS),kt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,lt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Me),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ke);const Kn=S.isDataArrayTexture||S.isData3DTexture,ct=F.isDataArrayTexture||F.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const ri=Ae.get(S),Zn=Ae.get(F),Vt=Ae.get(ri.__renderTarget),Ci=Ae.get(Zn.__renderTarget);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Ri=0;Ri<we;Ri++)Kn&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(S).__webglTexture,U,ke+Ri),S.isDepthTexture?(ct&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ae.get(F).__webglTexture,U,rt+Ri),N.blitFramebuffer(Me,Ue,oe,pe,Se,Je,oe,pe,N.DEPTH_BUFFER_BIT,N.NEAREST)):ct?N.copyTexSubImage3D(Re,U,Se,Je,rt+Ri,Me,Ue,oe,pe):N.copyTexSubImage2D(Re,U,Se,Je,rt+Ri,Me,Ue,oe,pe);Ee.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ct?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Re,U,Se,Je,rt,oe,pe,we,Bt,Ke,lt.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Re,U,Se,Je,rt,oe,pe,we,Bt,lt.data):N.texSubImage3D(Re,U,Se,Je,rt,oe,pe,we,Bt,Ke,lt):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,Se,Je,oe,pe,Bt,Ke,lt.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,Se,Je,lt.width,lt.height,Bt,lt.data):N.texSubImage2D(N.TEXTURE_2D,U,Se,Je,oe,pe,Bt,Ke,lt);N.pixelStorei(N.UNPACK_ROW_LENGTH,ui),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ze),N.pixelStorei(N.UNPACK_SKIP_PIXELS,jt),N.pixelStorei(N.UNPACK_SKIP_ROWS,un),N.pixelStorei(N.UNPACK_SKIP_IMAGES,kt),U===0&&F.generateMipmaps&&N.generateMipmap(Re),Ee.unbindTexture()},this.copyTextureToTexture3D=function(S,F,H=null,V=null,U=0){return S.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,S=arguments[2],F=arguments[3],U=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,F,H,V,U)},this.initRenderTarget=function(S){Ae.get(S).__webglFramebuffer===void 0&&T.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?T.setTextureCube(S,0):S.isData3DTexture?T.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?T.setTexture2DArray(S,0):T.setTexture2D(S,0),Ee.unbindTexture()},this.resetState=function(){A=0,C=0,I=null,Ee.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class To{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new To(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Sa extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ht,this.environmentIntensity=1,this.environmentRotation=new Ht,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zt extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zc extends qn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xo=new L,vo=new L,Ol=new ut,ss=new Oc,Ks=new So,ar=new L,kl=new L;class xm extends vt{constructor(e=new Pt,t=new Zc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)xo.fromBufferAttribute(t,n-1),vo.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=xo.distanceTo(vo);e.setAttribute("lineDistance",new st(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ks.copy(i.boundingSphere),Ks.applyMatrix4(n),Ks.radius+=s,e.ray.intersectsSphere(Ks)===!1)return;Ol.copy(n).invert(),ss.copy(e.ray).applyMatrix4(Ol);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=f,m=g-1;x<m;x+=c){const p=h.getX(x),y=h.getX(x+1),M=Zs(this,e,ss,l,p,y);M&&t.push(M)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=Zs(this,e,ss,l,x,m);p&&t.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let x=f,m=g-1;x<m;x+=c){const p=Zs(this,e,ss,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=Zs(this,e,ss,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zs(o,e,t,i,n,s){const r=o.geometry.attributes.position;if(xo.fromBufferAttribute(r,n),vo.fromBufferAttribute(r,s),t.distanceSqToSegment(xo,vo,ar,kl)>i)return;ar.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(ar);if(!(l<e.near||l>e.far))return{distance:l,point:kl.clone().applyMatrix4(o.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:o}}class Ss extends Dt{constructor(e,t,i,n,s,r,a,l,c){super(e,t,i,n,s,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ea extends Pt{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],r=[],a=[],l=[],c=new L,h=new Be;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/e+1)/2,h.y=(r[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ea(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class We extends Pt{constructor(e=1,t=1,i=1,n=32,s=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const x=[],m=i/2;let p=0;y(),r===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function y(){const v=new L,R=new L;let A=0;const C=(t-e)/i;for(let I=0;I<=s;I++){const w=[],b=I/s,P=b*(t-e)+e;for(let G=0;G<=n;G++){const O=G/n,W=O*l+a,j=Math.sin(W),Y=Math.cos(W);R.x=P*j,R.y=-b*i+m,R.z=P*Y,u.push(R.x,R.y,R.z),v.set(j,C,Y).normalize(),d.push(v.x,v.y,v.z),f.push(O,1-b),w.push(g++)}x.push(w)}for(let I=0;I<n;I++)for(let w=0;w<s;w++){const b=x[w][I],P=x[w+1][I],G=x[w+1][I+1],O=x[w][I+1];(e>0||w!==0)&&(h.push(b,P,O),A+=3),(t>0||w!==s-1)&&(h.push(P,G,O),A+=3)}c.addGroup(p,A,0),p+=A}function M(v){const R=g,A=new Be,C=new L;let I=0;const w=v===!0?e:t,b=v===!0?1:-1;for(let G=1;G<=n;G++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const P=g;for(let G=0;G<=n;G++){const W=G/n*l+a,j=Math.cos(W),Y=Math.sin(W);C.x=w*Y,C.y=m*b,C.z=w*j,u.push(C.x,C.y,C.z),d.push(0,b,0),A.x=j*.5+.5,A.y=Y*.5*b+.5,f.push(A.x,A.y),g++}for(let G=0;G<n;G++){const O=R+G,W=P+G;v===!0?h.push(W,W+1,O):h.push(W+1,W,O),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new We(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ni extends We{constructor(e=1,t=1,i=32,n=1,s=!1,r=0,a=Math.PI*2){super(0,e,t,i,n,s,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:r,thetaLength:a}}static fromJSON(e){return new Ni(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ta extends Pt{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],r=[];a(n),c(i),h(),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(s.slice(),3)),this.setAttribute("uv",new st(r,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const M=new L,v=new L,R=new L;for(let A=0;A<t.length;A+=3)f(t[A+0],M),f(t[A+1],v),f(t[A+2],R),l(M,v,R,y)}function l(y,M,v,R){const A=R+1,C=[];for(let I=0;I<=A;I++){C[I]=[];const w=y.clone().lerp(v,I/A),b=M.clone().lerp(v,I/A),P=A-I;for(let G=0;G<=P;G++)G===0&&I===A?C[I][G]=w:C[I][G]=w.clone().lerp(b,G/P)}for(let I=0;I<A;I++)for(let w=0;w<2*(A-I)-1;w++){const b=Math.floor(w/2);w%2===0?(d(C[I][b+1]),d(C[I+1][b]),d(C[I][b])):(d(C[I][b+1]),d(C[I+1][b+1]),d(C[I+1][b]))}}function c(y){const M=new L;for(let v=0;v<s.length;v+=3)M.x=s[v+0],M.y=s[v+1],M.z=s[v+2],M.normalize().multiplyScalar(y),s[v+0]=M.x,s[v+1]=M.y,s[v+2]=M.z}function h(){const y=new L;for(let M=0;M<s.length;M+=3){y.x=s[M+0],y.y=s[M+1],y.z=s[M+2];const v=m(y)/2/Math.PI+.5,R=p(y)/Math.PI+.5;r.push(v,1-R)}g(),u()}function u(){for(let y=0;y<r.length;y+=6){const M=r[y+0],v=r[y+2],R=r[y+4],A=Math.max(M,v,R),C=Math.min(M,v,R);A>.9&&C<.1&&(M<.2&&(r[y+0]+=1),v<.2&&(r[y+2]+=1),R<.2&&(r[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,M){const v=y*3;M.x=e[v+0],M.y=e[v+1],M.z=e[v+2]}function g(){const y=new L,M=new L,v=new L,R=new L,A=new Be,C=new Be,I=new Be;for(let w=0,b=0;w<s.length;w+=9,b+=6){y.set(s[w+0],s[w+1],s[w+2]),M.set(s[w+3],s[w+4],s[w+5]),v.set(s[w+6],s[w+7],s[w+8]),A.set(r[b+0],r[b+1]),C.set(r[b+2],r[b+3]),I.set(r[b+4],r[b+5]),R.copy(y).add(M).add(v).divideScalar(3);const P=m(R);x(A,b+0,y,P),x(C,b+2,M,P),x(I,b+4,v,P)}}function x(y,M,v,R){R<0&&y.x===1&&(r[M]=y.x-1),v.x===0&&v.z===0&&(r[M]=R/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.vertices,e.indices,e.radius,e.details)}}class Aa extends Ta{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Aa(e.radius,e.detail)}}class dn extends Pt{constructor(e=.5,t=1,i=32,n=1,s=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:r},i=Math.max(3,i),n=Math.max(1,n);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/n,f=new L,g=new Be;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){const p=s+m/i*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<n;x++){const m=x*(i+1);for(let p=0;p<i;p++){const y=p+m,M=y,v=y+i+1,R=y+i+2,A=y+1;a.push(M,v,A),a.push(v,R,A)}}this.setIndex(a),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dn(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class dt extends Pt{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const y=[],M=p/i;let v=0;p===0&&r===0?v=.5/t:p===i&&l===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){const A=R/t;u.x=-e*Math.cos(n+A*s)*Math.sin(r+M*a),u.y=e*Math.cos(r+M*a),u.z=e*Math.sin(n+A*s)*Math.sin(r+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(A+v,1-M),y.push(c++)}h.push(y)}for(let p=0;p<i;p++)for(let y=0;y<t;y++){const M=h[p][y+1],v=h[p][y],R=h[p+1][y],A=h[p+1][y+1];(p!==0||r>0)&&f.push(M,v,A),(p!==i-1||l<Math.PI)&&f.push(v,R,A)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ao extends Pt{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const r=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const x=g/n*s,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const x=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,y=(n+1)*f+g;r.push(x,m,y),r.push(m,p,y)}this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ao(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vm extends Ct{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class K extends qn{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ht,this.combine=da,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Qs(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function _m(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function ym(o){function e(n,s){return o[n]-o[s]}const t=o.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function zl(o,e,t){const i=o.length,n=new o.constructor(i);for(let s=0,r=0;r!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)n[r++]=o[a+l]}return n}function Qc(o,e,t,i){let n=1,s=o[0];for(;s!==void 0&&s[i]===void 0;)s=o[n++];if(s===void 0)return;let r=s[i];if(r!==void 0)if(Array.isArray(r))do r=s[i],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[n++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[i],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[n++];while(s!==void 0);else do r=s[i],r!==void 0&&(e.push(s.time),t.push(r)),s=o[n++];while(s!==void 0)}class Co{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let r;i:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break t}r=t.length;break i}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}r=i,i=0;break i}break e}for(;i<r;){const a=i+r>>>1;e<t[a]?r=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let r=0;r!==n;++r)t[r]=i[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class bm extends Co{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rn,endingEnd:Rn}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,r=e+1,a=n[s],l=n[r];if(a===void 0)switch(this.getSettings_().endingStart){case Pn:s=e,a=2*t-i;break;case po:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Pn:r=e,l=2*i-t;break;case po:r=1,l=i+n[1]-n[0];break;default:r=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,y=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let R=0;R!==a;++R)s[R]=p*r[h+R]+y*r[c+R]+M*r[l+R]+v*r[u+R];return s}}class eh extends Co{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}}class wm extends Co{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class hi{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qs(t,this.TimeBufferType),this.values=Qs(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Qs(e.times,Array),values:Qs(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new wm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new eh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case fo:t=this.InterpolantFactoryMethodDiscrete;break;case ta:t=this.InterpolantFactoryMethodLinear;break;case Io:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return fo;case this.InterpolantFactoryMethodLinear:return ta;case this.InterpolantFactoryMethodSmooth:return Io}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,r=n-1;for(;s!==n&&i[s]<e;)++s;for(;r!==-1&&i[r]>t;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=i.slice(s,r),this.values=this.values.slice(s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(n!==void 0&&_m(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Io,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{const u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){const x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const u=a*i,d=r*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*i,l=r*i,c=0;c!==i;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}hi.prototype.TimeBufferType=Float32Array;hi.prototype.ValueBufferType=Float32Array;hi.prototype.DefaultInterpolation=ta;class jn extends hi{constructor(e,t,i){super(e,t,i)}}jn.prototype.ValueTypeName="bool";jn.prototype.ValueBufferType=Array;jn.prototype.DefaultInterpolation=fo;jn.prototype.InterpolantFactoryMethodLinear=void 0;jn.prototype.InterpolantFactoryMethodSmooth=void 0;class th extends hi{}th.prototype.ValueTypeName="color";class _o extends hi{}_o.prototype.ValueTypeName="number";class Mm extends Co{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let h=c+a;c!==h;c+=4)qt.slerpFlat(s,0,r,c-a,r,c,l);return s}}class mt extends hi{InterpolantFactoryMethodLinear(e){return new Mm(this.times,this.values,this.getValueSize(),e)}}mt.prototype.ValueTypeName="quaternion";mt.prototype.InterpolantFactoryMethodSmooth=void 0;class $n extends hi{constructor(e,t,i){super(e,t,i)}}$n.prototype.ValueTypeName="string";$n.prototype.ValueBufferType=Array;$n.prototype.DefaultInterpolation=fo;$n.prototype.InterpolantFactoryMethodLinear=void 0;$n.prototype.InterpolantFactoryMethodSmooth=void 0;class an extends hi{}an.prototype.ValueTypeName="vector";class fs{constructor(e="",t=-1,i=[],n=_a){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Xn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let r=0,a=i.length;r!==a;++r)t.push(Em(i[r]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=i.length;s!==r;++s)t.push(hi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=ym(l);l=zl(l,1,h),c=zl(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new _o(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,r)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const r=[];for(const a in n)r.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,g,x){if(f.length!==0){const m=[],p=[];Qc(f,m,p,g),m.length!==0&&x.push(new u(d,m,p))}},n=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)f[d[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let y=0;y!==d[g].morphTargets.length;++y){const M=d[g];m.push(M.time),p.push(M.morphTarget===x?1:0)}n.push(new _o(".morphTargetInfluence["+x+"]",m,p))}l=f.length*r}else{const f=".bones["+t[u].name+"]";i(an,f+".position",d,"pos",n),i(mt,f+".quaternion",d,"rot",n),i(an,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Sm(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _o;case"vector":case"vector2":case"vector3":case"vector4":return an;case"color":return th;case"quaternion":return mt;case"bool":case"boolean":return jn;case"string":return $n}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function Em(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Sm(o.type);if(o.times===void 0){const t=[],i=[];Qc(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}class Es extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Tm extends Es{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const lr=new ut,Gl=new L,Hl=new L;class ih{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ya,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Gl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gl),Hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hl),t.updateMatrixWorld(),lr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vl=new ut,os=new L,cr=new L;class Am extends ih{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),os.setFromMatrixPosition(e.matrixWorld),i.position.copy(os),cr.copy(i.position),cr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(cr),i.updateMatrixWorld(),n.makeTranslation(-os.x,-os.y,-os.z),Vl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vl)}}class Cm extends Es{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Am}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Rm extends ih{constructor(){super(new ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hn extends Es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Rm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ca extends Es{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wl(){return performance.now()}class Im{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,r;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==n;++a)i[s+a]=i[a];r=t}else{r+=t;const a=t/r;this._mixBufferRegion(i,s,0,a,n)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,r=n;s!==r;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let r=0;r!==s;++r)e[t+r]=e[i+r]}_slerp(e,t,i,n){qt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const r=this._workIndex*s;qt.multiplyQuaternionsFlat(e,r,e,t,e,i),qt.slerpFlat(e,t,e,t,e,r,n)}_lerp(e,t,i,n,s){const r=1-n;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*r+e[i+a]*n}}_lerpAdditive(e,t,i,n,s){for(let r=0;r!==s;++r){const a=t+r;e[a]=e[a]+e[i+r]*n}}}const Ra="\\[\\]\\.:\\/",Lm=new RegExp("["+Ra+"]","g"),Pa="[^"+Ra+"]",Dm="[^"+Ra.replace("\\.","")+"]",Bm=/((?:WC+[\/:])*)/.source.replace("WC",Pa),Fm=/(WCOD+)?/.source.replace("WCOD",Dm),Um=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pa),Nm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pa),Om=new RegExp("^"+Bm+Fm+Um+Nm+"$"),km=["material","materials","bones","map"];class zm{constructor(e,t,i){const n=i||it.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class it{constructor(e,t,i){this.path=t,this.parsedPath=i||it.parseTrackName(t),this.node=it.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new it.Composite(e,t,i):new it(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Lm,"")}static parseTrackName(e){const t=Om.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);km.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=it.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[n];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}it.Composite=zm;it.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};it.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};it.prototype.GetterByBindingType=[it.prototype._getValue_direct,it.prototype._getValue_array,it.prototype._getValue_arrayElement,it.prototype._getValue_toArray];it.prototype.SetterByBindingTypeAndVersioning=[[it.prototype._setValue_direct,it.prototype._setValue_direct_setNeedsUpdate,it.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[it.prototype._setValue_array,it.prototype._setValue_array_setNeedsUpdate,it.prototype._setValue_array_setMatrixWorldNeedsUpdate],[it.prototype._setValue_arrayElement,it.prototype._setValue_arrayElement_setNeedsUpdate,it.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[it.prototype._setValue_fromArray,it.prototype._setValue_fromArray_setNeedsUpdate,it.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Gm{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,r=s.length,a=new Array(r),l={endingStart:Rn,endingEnd:Rn};for(let c=0;c!==r;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Xh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,s=e._clip.duration,r=s/n,a=n/s;e.warp(1,r,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const r=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Yh:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulateAdditive(a);break;case _a:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const r=i===qh;if(e===0)return s===-1?n:r&&(s&1)===1?t-n:n;if(i===Wh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),n>=t||n<0){const a=Math.floor(n/t);n-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=n;if(r&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=Pn,n.endingEnd=Pn):(e?n.endingStart=this.zeroSlopeAtStart?Pn:Rn:n.endingStart=po,t?n.endingEnd=this.zeroSlopeAtEnd?Pn:Rn:n.endingEnd=po)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let r=this._weightInterpolant;r===null&&(r=n._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}}const Hm=new Float32Array(1);class Vm extends hn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,r=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=n[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,r[u]=g;else{if(g=r[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const x=t&&t._propertyBindings[u].binding.parsedPath;g=new Im(it.create(i,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),r[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const a=r.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),r.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,s=this._bindings;let r=n[t];r===void 0&&(r={},n[t]=r),r[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,r=this._bindingsByRootAndName,a=r[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete r[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new eh(new Float32Array(2),new Float32Array(2),1,Hm),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const n=t||this._root,s=n.uuid;let r=typeof e=="string"?fs.findByName(n,e):e;const a=r!==null?r.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(r!==null?i=r.blendMode:i=_a),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const h=new Gm(this,r,t,i);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const i=t||this._root,n=i.uuid,s=typeof e=="string"?fs.findByName(i,e):e,r=s?s.uuid:e,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,r);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){const c=r[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const r in i){const a=i[r].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ha}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ha);const nh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Jn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Wm=new ba(-1,1,1,-1,0,1);class Xm extends Pt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}}const qm=new Xm;class Ia{constructor(e){this._mesh=new B(qm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Wm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ym extends Jn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=vs.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ia(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xl extends Jn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class jm extends Jn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class $m{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Be);this._width=i.width,this._height=i.height,t=new si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Si}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ym(nh),this.copyPass.material.blending=Mi,this.clock=new Pm}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Xl!==void 0&&(r instanceof Xl?i=!0:r instanceof jm&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Jm extends Jn{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new be}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=n}}const Km={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Vn extends Jn{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Be(e.x,e.y):new Be(256,256),this.clearColor=new be(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new si(s,r,{type:Si}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new si(s,r,{type:Si});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new si(s,r,{type:Si});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),r=Math.round(r/2)}const a=Km;this.highPassUniforms=vs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Be(1/s,1/r),s=Math.round(s/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=nh;this.copyUniforms=vs.clone(h.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:mr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new be,this.oldClearAlpha=1,this.basic=new Ot,this.fsQuad=new Ia(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Be(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Vn.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Vn.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Ct({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Be(.5,.5)},direction:{value:new Be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}Vn.BlurDirectionX=new Be(1,0);Vn.BlurDirectionY=new Be(0,1);const Zm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Qm extends Jn{constructor(){super();const e=Zm;this.uniforms=vs.clone(e.uniforms),this.material=new vm({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ia(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ye.getTransfer(this._outputColorSpace)===tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===xc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ua?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===yc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===bc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const rs={fov:35,height:38,rotationSmoothing:.06,positionSmoothing:.1,lookAheadDistance:6};class eg{constructor(){E(this,"camera");E(this,"targetPos",new L);E(this,"cameraAngle",0);this.camera=new Lt(rs.fov,window.innerWidth/window.innerHeight,5,800)}follow(e,t,i){let n=i-this.cameraAngle;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;this.cameraAngle+=n*rs.rotationSmoothing;const s=Math.sin(this.cameraAngle)*-28,r=-Math.cos(this.cameraAngle)*-28;this.targetPos.set(e.x+s,e.y+rs.height,e.z+r),this.camera.position.lerp(this.targetPos,rs.positionSmoothing);const l=t.length()>.5?t.clone().normalize().multiplyScalar(rs.lookAheadDistance):new L(0,0,0),c=e.clone().add(l);c.y+=2,this.camera.lookAt(c)}}class tg{constructor(){E(this,"boxes",[])}addBox(e,t,i,n){this.boxes.push({cx:e,cz:t,hw:i,hd:n})}resolveCircle(e,t,i){let n=e,s=t;for(const r of this.boxes){const a=r.hw+i,l=r.hd+i,c=n-r.cx,h=s-r.cz;if(Math.abs(c)<a&&Math.abs(h)<l){const u=a-Math.abs(c),d=l-Math.abs(h);u<d?n+=c<0?-u:u:s+=h<0?-d:d}}return{x:n,z:s}}}let sa=null,_s=null;async function ig(){async function e(t){const i=new Image;return new Promise(n=>{i.onload=()=>n(i.naturalWidth>0?i:null),i.onerror=()=>{console.warn("[LogoLoader] failed:",t),n(null)},i.src=t})}[sa,_s]=await Promise.all([e("./tem-logo.jpg"),e("./tem-logo-white.jpg")]),console.log("[LogoLoader] black-on-white:",!!sa,"| white-on-black:",!!_s)}function sh(o){const t=document.createElement("canvas");t.width=t.height=256;const i=t.getContext("2d"),n=o>>16&255,s=o>>8&255,r=o&255,l=.299*n+.587*s+.114*r<128,c=l?_s:sa;if(c){i.drawImage(c,0,0,256,256);const h=i.getImageData(0,0,256,256),u=h.data;for(let d=0;d<u.length;d+=4){const f=.299*u[d]+.587*u[d+1]+.114*u[d+2];l?u[d+3]=Math.round(Math.min(255,f*1.4)):u[d+3]=Math.round(Math.min(255,(255-f)*1.4))}i.putImageData(h,0,0)}else ng(i,256,l);return new Ss(t)}function oh(o=512){const e=document.createElement("canvas");e.width=e.height=o;const t=e.getContext("2d");if(_s){t.drawImage(_s,0,0,o,o);const i=t.getImageData(0,0,o,o),n=i.data;for(let s=0;s<n.length;s+=4){const r=.299*n[s]+.587*n[s+1]+.114*n[s+2];n[s+3]=Math.round(Math.min(255,r*1.5))}t.putImageData(i,0,0)}else t.strokeStyle="#FFFFFF",t.fillStyle="#FFFFFF",rh(t,o);return new Ss(e)}function ng(o,e,t){o.strokeStyle=t?"#FFFFFF":"#111111",o.fillStyle=t?"#FFFFFF":"#111111",rh(o,e)}function rh(o,e){const t=e/256;o.save(),o.scale(t,t),o.lineCap="round",o.lineWidth=6,o.beginPath(),o.arc(128,128,118,0,Math.PI*2),o.stroke(),o.lineWidth=11,o.beginPath(),o.moveTo(128,225),o.lineTo(128,148),o.stroke(),o.lineWidth=7,o.beginPath(),o.moveTo(128,148),o.lineTo(128,96),o.stroke();const i=[[128,178,76,152],[128,178,180,152],[128,160,64,134],[128,160,192,134],[128,142,76,116],[128,142,180,116],[128,124,88,99],[128,124,168,99],[128,110,98,84],[128,110,158,84],[128,98,110,70],[128,98,146,70],[128,88,118,56],[128,88,138,56]];o.lineWidth=4;for(const[n,s,r,a]of i)o.beginPath(),o.moveTo(n,s),o.lineTo(r,a),o.stroke(),o.beginPath(),o.arc(r,a,5,0,Math.PI*2),o.fill();o.restore()}class sg{constructor(){E(this,"renderer");E(this,"scene");E(this,"camera");E(this,"collisionWorld",new tg);E(this,"composer");E(this,"clouds",[]);E(this,"updateCallbacks",[]);E(this,"lastTime",0);E(this,"C",{modernGrey:13157564,warmGrey:12103846,terracotta:12884602,deepClay:10516568,softWhite:15262940,charcoal:4868682,warmCream:13945272,oliveGreen:9083754,ironRed:12674667})}async init(){this.renderer=new Ma({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=gc,this.renderer.toneMapping=ua,this.renderer.toneMappingExposure=1.1,document.body.appendChild(this.renderer.domElement),this.renderer.domElement.style.position="relative",this.renderer.domElement.style.zIndex="1",this.scene=new Sa,this.scene.fog=new To(8900331,.0025),this.camera=new eg,this.scene.add(this.camera.camera),this.composer=new $m(this.renderer),this.composer.addPass(new Jm(this.scene,this.camera.camera));const e=new Vn(new Be(window.innerWidth,window.innerHeight),.3,.4,.85);this.composer.addPass(e),this.composer.addPass(new Qm);const t=new Ca(16777215,.5);this.scene.add(t);const i=new Hn(16774368,1.4);i.position.set(80,120,40),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=.5,i.shadow.camera.far=600,i.shadow.camera.left=-300,i.shadow.camera.right=300,i.shadow.camera.top=300,i.shadow.camera.bottom=-300,i.shadow.bias=-.001,this.scene.add(i);const n=new Hn(16771280,.5);n.position.set(-60,40,-80),this.scene.add(n);const s=new Tm(8900331,8943462,.3);this.scene.add(s),this.createCityGround(),this.createCity(),this.createTEHouses(),this.buildWorkshop(10,15),this.createZebraCrossings(),this.createRoadCorners(),this.createStreetFurniture(),this.createSkyDome(),this.createClouds(),this.createPuddles(),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),this.camera.camera.aspect=window.innerWidth/window.innerHeight,this.camera.camera.updateProjectionMatrix()})}seed(e,t,i=0){const n=Math.sin(e*127.1+t*311.7+i*74.3)*43758.5453123;return n-Math.floor(n)}getZone(e,t){return Math.abs(e)<80&&Math.abs(t)<80?"cbd":e<-80?"footscray":e>80?"richmond":t<-80?"stkilda":"brunswick"}pickBuildingType(e,t){const i={cbd:[.5,.5,.9,1,1],footscray:[0,.2,.2,.4,1],brunswick:[.3,.6,.6,1,1],richmond:[.3,.3,.6,1,1],stkilda:[0,.3,.3,.7,1]},n=i[e]??i.brunswick,s=["A","B","C","D","E"];for(let r=0;r<n.length;r++)if(t<n[r])return s[r];return"D"}createCityGround(){const s=new K({color:8947840}),r=new B(new ht(2048,2048),s);r.rotation.x=-Math.PI/2,r.position.y=0,r.receiveShadow=!0,this.scene.add(r);const a={cbd:8947840,footscray:7824981,brunswick:8943462,richmond:8026224,stkilda:9080960};for(let l=-240;l<240;l+=40)for(let c=-240;c<240;c+=40){const h=l+20,u=c+40/2,d=this.getZone(h,u),g=this.seed(l,c,0)<.15?5929546:a[d],x=new K({color:g}),m=new B(new ht(30,30),x);m.rotation.x=-Math.PI/2,m.position.set(h,.005,u),m.receiveShadow=!0,this.scene.add(m)}}createCity(){const n=new K({color:2763306}),s=new K({color:16777215}),r=new K({color:15777856}),a=new K({color:13156528}),l=32;for(let c=-240;c<=240;c+=40){const u=new B(new ht(480,8),n);u.rotation.x=-Math.PI/2,u.position.set(0,.01,c),u.receiveShadow=!0,this.scene.add(u);for(let d=-240;d<240;d+=40){const f=d+20;for(const g of[-1,1]){const x=new B(new ht(l,2),a);x.rotation.x=-Math.PI/2,x.position.set(f,.02,c+g*(8/2+1)),x.receiveShadow=!0,this.scene.add(x)}}for(const d of[-1,1]){const f=new B(new ht(480,.2),r);f.rotation.x=-Math.PI/2,f.position.set(0,.03,c+d*(8/2-.3)),this.scene.add(f)}for(let d=-240;d<=240;d+=8){const f=new B(new ht(4,.15),s);f.rotation.x=-Math.PI/2,f.position.set(d,.03,c),this.scene.add(f)}for(let d=-240;d<=240;d+=20)for(const f of[-1,1]){const g=d+(this.seed(d,c,50+f)-.5)*2,x=c+f*5.5,m=(g%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,x,d*10+f,c*10+1)}for(let d=-232;d<240;d+=17){const f=this.seed(d,c,60);if(f>.45){const g=f>.72?1:-1,x=d+(this.seed(d,c,61)-.5)*4,m=c+g*(8/2+2);this.addParkedCar(x,m,d+g*3,c+7,Math.PI/2)}}}for(let c=-240;c<=240;c+=40){const u=new B(new ht(8,480),n);u.rotation.x=-Math.PI/2,u.position.set(c,.01,0),u.receiveShadow=!0,this.scene.add(u);for(let d=-240;d<240;d+=40){const f=d+20;for(const g of[-1,1]){const x=new B(new ht(2,l),a);x.rotation.x=-Math.PI/2,x.position.set(c+g*(8/2+1),.02,f),x.receiveShadow=!0,this.scene.add(x)}}for(const d of[-1,1]){const f=new B(new ht(.2,480),r);f.rotation.x=-Math.PI/2,f.position.set(c+d*(8/2-.3),.03,0),this.scene.add(f)}for(let d=-240;d<=240;d+=8){const f=new B(new ht(.15,4),s);f.rotation.x=-Math.PI/2,f.position.set(c,.03,d),this.scene.add(f)}for(let d=-240;d<=240;d+=20)for(const f of[-1,1]){const g=c+f*5.5,x=d+(this.seed(c,d,52+f)-.5)*2,m=(x%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,x,c*10+2,d*10+f)}for(let d=-232;d<240;d+=17){const f=this.seed(c,d,62);if(f>.45){const g=f>.72?1:-1,x=c+g*(8/2+2),m=d+(this.seed(c,d,63)-.5)*4;this.addParkedCar(x,m,c+9,d+g*3,0)}}}for(let c=-240;c<240;c+=40)for(let h=-240;h<240;h+=40)this.populateBlock(c,h,40,8)}addTree(e,t,i,n){const s=this.seed(i,n,99),r=s<.15?"palm":s<.5?"round":"layered",a=2+s*1.5,l=new K({color:6045747}),c=new B(new We(.25,.35,a,7),l);if(c.position.set(e,a/2,t),c.castShadow=!0,this.scene.add(c),r==="palm"){const h=new B(new We(.15,.22,6,6),new K({color:9139029}));h.position.set(e,3,t),this.scene.add(h);for(let u=0;u<6;u++){const d=u/6*Math.PI*2,f=new B(new Q(.15,.08,2.5),new K({color:2775578}));f.position.set(e+Math.cos(d)*1.2,6.5,t+Math.sin(d)*1.2),f.rotation.y=d,f.rotation.z=.4,this.scene.add(f)}}else if(r==="layered"){const h=[2973229,3829306,4881994];for(let u=0;u<3;u++){const d=2.2-u*.5,f=new B(new Ni(d,2,8),new K({color:h[u]}));f.position.set(e,a+1+u*1.5,t),f.castShadow=!0,this.scene.add(f)}}else{const h=s>.7?4025917:2973229,u=[[0,0,0],[.8,-.3,.5],[-.7,-.2,.3],[.3,.4,-.6],[-.4,.3,-.5]];for(let d=0;d<u.length;d++){const[f,g,x]=u[d],m=1.8+this.seed(i+d*17,n+d*13,103)*.8,p=new B(new dt(m,7,6),new K({color:h}));p.position.set(e+f,a+2.5+g,t+x),p.castShadow=!0,this.scene.add(p)}}}addParkedCar(e,t,i,n,s=0){const r=[13382451,3364300,11184810,14540253,2236962],a=Math.floor(this.seed(i,n,20)*r.length),l=new K({color:r[a]}),c=new B(new Q(1.5,1.2,3),l);c.position.set(e,.6,t),c.rotation.y=s,this.scene.add(c);const h=new K({color:2241348}),u=new B(new Q(1.4,.5,.1),h),d=-.9*Math.sin(s),f=-.9*Math.cos(s);u.position.set(e+d,1.3,t+f),u.rotation.y=s,this.scene.add(u)}populateBlock(e,t,i,n){const s=i-n-4,r=e+i/2,a=t+i/2,l=this.getZone(r,a),c=1+Math.floor(this.seed(e,t,1)*2);for(let h=0;h<c;h++){const u=this.seed(e+h*3,t+h*7,3),d=this.pickBuildingType(l,u);if(d==="E"){h===0&&this.buildTypeE(r,a,e,t);break}const f=s*.18,g=c>1?h===0?-f:f:0,x=g+(this.seed(e+h*5,t,4)-.5)*f*.3,m=g+(this.seed(e,t+h*5,5)-.5)*f*.3,p=e+h*11,y=t+h*13;switch(d){case"A":this.buildTypeA(r+x,a+m,p,y);break;case"B":this.buildTypeB(r+x,a+m,p,y);break;case"C":this.buildTypeC(r+x,a+m,p,y);break;case"D":this.buildTypeD(r+x,a+m,p,y);break}}}addBox(e,t,i,n,s,r,a,l,c=0,h=0,u=0){const d=new B(new Q(i,n,s),new K({color:t}));d.position.set(r,a,l),c!==0&&(d.rotation.x=c),h!==0&&(d.rotation.y=h),u!==0&&(d.rotation.z=u),d.castShadow=!0,d.receiveShadow=!0,e.add(d)}addCyl(e,t,i,n,s,r,a,l,c){const h=new B(new We(i,n,s,r),new K({color:t}));h.position.set(a,l,c),h.castShadow=!0,h.receiveShadow=!0,e.add(h)}registerBuildingCollider(e,t,i,n,s,r){const a=Math.floor(this.seed(s,r,101)*4)%4,l=a===1||a===3;this.collisionWorld.addBox(e,t,l?n:i,l?i:n)}buildTypeA(e,t,i,n){const s=this.C,r=new Ne;this.addBox(r,s.modernGrey,16,10,14,0,5,0),this.addBox(r,s.softWhite,16.4,.6,14.4,0,10.3,0);for(const u of[-5,0,5])this.addCyl(r,s.charcoal,.3,.3,3,6,u,1.5,-7);this.addBox(r,s.charcoal,14,.4,.4,0,3,-7);for(const u of[-4.5,0,4.5])this.addGlassBox(r,2241348,2.5,1.8,.15,u,7,-6.93);this.addBox(r,s.deepClay,14,.5,1.2,0,.25,-7.6),this.addBox(r,s.oliveGreen,13,.4,1,0,.7,-7.6);const a=this.seed(i,n,400),l=new K({color:a>.5?12876352:4876938}),c=new B(new Q(14,.1,1.5),l);c.position.set(0,3.8,-7.75),c.rotation.x=.15,r.add(c);const h=new B(new Q(14,.3,.08),l);h.position.set(0,3.45,-8.45),r.add(h),this.addBox(r,14210252,.8,.5,.08,-6.5,1,-7.05),this.addRooftopDetails(r,16,14,10,i,n),r.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),r.position.set(e,0,t),this.scene.add(r),this.registerBuildingCollider(e,t,8.5,7.5,i,n)}buildTypeB(e,t,i,n){const s=this.C,r=new Ne;this.addBox(r,s.deepClay,14.5,8.2,12.5,.3,4,.3),this.addBox(r,s.terracotta,14,8,12,0,4,0),this.addBox(r,s.terracotta,14.6,1.2,12.6,0,8.6,0),this.addBox(r,s.softWhite,15,.3,13,0,9.35,0);for(const a of[-3,3]){this.addBox(r,s.softWhite,1.6,2.6,.1,a,5,-5.99),this.addGlassBox(r,2241348,1.2,2.2,.2,a,5,-5.75);for(const l of[4.3,5,5.7])this.addBox(r,s.charcoal,1,.08,.12,a,l,-5.68)}this.addBox(r,s.charcoal,2,3,.2,0,1.5,-6.1),this.addBox(r,s.charcoal,1.5,.4,.2,0,3.2,-6.1),this.addBox(r,s.charcoal,1,.4,.2,0,3.7,-6.1),this.addBox(r,s.deepClay,2,.4,.6,0,.2,-6.6),this.addBox(r,s.oliveGreen,1.8,.1,.5,0,.45,-6.6),this.addBox(r,13938826,.8,.5,.08,-5,1,-6.05),this.addRooftopDetails(r,14,12,8,i,n),r.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),r.position.set(e,0,t),this.scene.add(r),this.registerBuildingCollider(e,t,7.5,6.5,i,n)}buildTypeC(e,t,i,n){const s=this.C,r=new Ne,a=30+Math.floor(this.seed(i,n,31)*20);this.addBox(r,s.modernGrey,8,4,8,0,2,0),this.addBox(r,4478310,7.5,3.5,7.5,0,2,0),this.addBox(r,3359829,7,a,7,0,a/2,0);for(let l=4;l<=a;l+=4)this.addBox(r,s.warmGrey,7.3,.2,7.3,0,l,0);this.addBox(r,s.charcoal,4,3,4,0,a+1.5,0),r.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),r.position.set(e,0,t),this.scene.add(r),this.registerBuildingCollider(e,t,4.5,4.5,i,n)}buildTypeD(e,t,i,n){const s=this.C,r=new Ne;this.addBox(r,s.warmCream,13,7,11,0,3.5,0),this.addBox(r,s.softWhite,13.5,.5,11.5,0,7.25,0),this.addBox(r,s.softWhite,2.8,3.8,1.6,0,4,-6.2),this.addBox(r,s.warmCream,2.5,3.5,1.5,0,4,-6.25);for(const a of[-.8,0,.8])this.addGlassBox(r,3359829,.7,2.5,.2,a,4,-7);this.addBox(r,s.deepClay,2.2,3.2,.3,0,1.6,-5.65),this.addBox(r,s.deepClay,1.8,.4,.3,0,3.35,-5.65),this.addBox(r,s.deepClay,1.2,.4,.3,0,3.8,-5.65);for(const a of[-3.5,3.5])this.addBox(r,s.softWhite,1.8,1.5,.1,a,5.5,-5.5),this.addGlassBox(r,3359829,1.5,1.2,.15,a,5.5,-5.55);this.addBox(r,s.deepClay,11,1,.3,0,.5,-6.65),this.addBox(r,14997960,.8,.5,.08,-5,1,-5.55),this.addRooftopDetails(r,13,11,7,i,n),r.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),r.position.set(e,0,t),this.scene.add(r),this.registerBuildingCollider(e,t,7,6,i,n)}buildTypeE(e,t,i,n){this.C;const s=new Ne,r=12*Math.PI/180;this.addBox(s,6974050,22,4,18,0,2,0),this.addBox(s,1710614,22.1,.3,18.1,0,.15,0);const a=new B(new Q(22.5,.3,10),new K({color:1973786}));a.castShadow=!0,a.receiveShadow=!0,a.rotation.x=r,a.position.set(0,4.5,-4.5),s.add(a);const l=new B(new Q(22.5,.3,10),new K({color:1973786}));l.castShadow=!0,l.receiveShadow=!0,l.rotation.x=-r,l.position.set(0,4.5,4.5),s.add(l),this.addBox(s,1118480,22.5,.5,.6,0,5.2,0);for(const f of[-2,.5,3])this.addBox(s,1118480,22.2,.08,.1,0,3.5,f);this.addBox(s,1118480,4.5,3.5,.2,0,1.75,-9.1),this.addBox(s,2236960,.15,3.5,.2,-2.4,1.75,-9.1),this.addBox(s,2236960,.15,3.5,.2,2.4,1.75,-9.1),this.addBox(s,3359829,8,.8,.15,-11.075,3.5,0),this.addCyl(s,1118480,.1,.1,4,5,-11,2,-9);const c=this.seed(i,n,401),h=new K({color:c>.5?12876352:4876938}),u=new B(new Q(8,.1,1.5),h);u.position.set(0,4.2,-9.85),u.rotation.x=.15,s.add(u);const d=new B(new Q(8,.3,.08),h);d.position.set(0,3.85,-10.6),s.add(d);for(const f of[-3.5,3.5]){const g=new B(new We(.06,.06,4,5),new K({color:5592400}));g.position.set(f,2,-10.55),s.add(g)}this.addRooftopDetails(s,22,18,5.2,i,n),s.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),s.position.set(e,0,t),this.scene.add(s),this.registerBuildingCollider(e,t,11.5,9.5,i,n)}createTEHouses(){this.buildHouseMarbellino(20,20),this.collisionWorld.addBox(20,20,10,7.5),this.buildHousePorthole(-60,20),this.collisionWorld.addBox(-60,20,8,6.5),this.buildHouseTerracotta(20,-60),this.collisionWorld.addBox(20,-60,9,7),this.buildHouseLoggia(-60,-60),this.collisionWorld.addBox(-60,-60,10,7.5),this.buildHouseRokka(60,-20),this.collisionWorld.addBox(60,-20,11,8),this.buildHouseTimberStone(100,60),this.collisionWorld.addBox(100,60,11,7),this.buildHouseSculpturalPlaster(-100,-20),this.collisionWorld.addBox(-100,-20,8,6),this.buildHouseHaussmann(60,-100),this.collisionWorld.addBox(60,-100,11,7),this.buildHouseAngularBay(-140,60),this.collisionWorld.addBox(-140,60,9,6.5),this.buildHouseBrutalistCompound(20,100),this.collisionWorld.addBox(20,100,12,5),this.buildHouseTerracottaMonolith(140,20),this.collisionWorld.addBox(140,20,10,5),this.buildHouseCurvedBalcony(-20,-140),this.collisionWorld.addBox(-20,-140,8,6),this.buildHouseCortenPlaster(-140,-60),this.collisionWorld.addBox(-140,-60,10,5.5),this.buildCoffeeShop(-60,-100),this.collisionWorld.addBox(-60,-100,7,5),this.buildToiletBlock(100,60),this.collisionWorld.addBox(100,60,6,5)}buildHouseMarbellino(e,t){const i=new Ne;this.addBox(i,13945786,18,4,14,0,2,0),this.addBox(i,2763306,20,4,15,0,7,0);for(const n of[-8,-5,-2,1,4,7])this.addBox(i,1710618,.15,4,15,n,7,0);this.addBox(i,3355443,20.5,.5,15.5,0,9.25,0),this.addBox(i,3359829,10,.9,.15,0,3.5,-7.1),this.addBox(i,13157564,10.4,1.1,.1,0,3.5,-7.05);for(const n of[-4,0,4]){const s=new B(new Q(1.5,2.5,.15),new K({color:4478310,emissive:new be(2241348),emissiveIntensity:.3}));s.position.set(n,7.5,-7.6),i.add(s)}this.addBox(i,1710618,5,3.8,.2,-5.5,1.9,-7.1),this.addBox(i,13157564,2,.3,1,4,.15,-7.5),this.addBox(i,9072736,14,.4,1,0,.2,-8),this.addBox(i,5929546,12,.6,.8,0,.6,-8),i.position.set(e,0,t),this.scene.add(i)}buildHousePorthole(e,t){const i=new Ne;this.addBox(i,12104876,16,5.5,13,0,2.75,0),this.addBox(i,9134144,7,5.5,.3,3.5,2.75,-6.65);for(let n=0;n<5;n++){const s=(n-2)*1.2;this.addBox(i,6965280,7,.2,.4,3.5,2.75+s,-6.55,0,0,Math.PI/7.2)}this.addBox(i,13157564,16.5,.3,13.5,0,5.65,0),this.addBox(i,2763306,17,.5,14,0,5.95,0);{const n=new B(new We(1.4,1.4,.15,16),new K({color:8947848}));n.rotation.x=Math.PI/2,n.position.set(-4,3.5,-6.7),i.add(n)}{const n=new B(new We(1.1,1.1,.1,16),new K({color:2241348,emissive:new be(1122867),emissiveIntensity:.5}));n.rotation.x=Math.PI/2,n.position.set(-4,3.5,-6.65),i.add(n)}this.addBox(i,3359829,3.5,1.2,.15,1,3.5,-6.7),this.addBox(i,3359829,3.5,1.2,.15,5,3.5,-6.7),this.addBox(i,3811866,1.8,2.8,.3,-6,1.4,-6.8),this.addBox(i,8947848,2.2,3,.2,-6,1.4,-6.65),this.addBox(i,3828282,10,.7,.8,0,.35,-7.5),i.position.set(e,0,t),this.scene.add(i)}buildHouseTerracotta(e,t){const i=new Ne;this.addBox(i,10121296,17.6,7.2,14.6,0,3.5,0),this.addBox(i,12884602,17,7,14,0,3.5,0),this.addBox(i,12884602,17.8,1.5,14.8,0,7.75,0),this.addBox(i,15262940,18.2,.3,15.2,0,8.65,0),this.addBox(i,9068608,2.4,3.5,.3,0,1.75,-7.1),this.addBox(i,9068608,2,.5,.3,0,3.75,-7.1),this.addBox(i,9068608,1.4,.5,.3,0,4.25,-7.1),this.addBox(i,9068608,1.4,2.8,.5,-4,4,-7.2),this.addBox(i,2241348,1,2.4,.15,-4,4,-7.05),this.addBox(i,15262940,1.6,3,.15,-4,4,-6.98);for(const n of[3.2,4,4.8])this.addBox(i,3355443,.9,.08,.15,-4,n,-7.1);this.addBox(i,9068608,1.4,2.8,.5,4,4,-7.2),this.addBox(i,2241348,1,2.4,.15,4,4,-7.05),this.addBox(i,15262940,1.6,3,.15,4,4,-6.98);for(const n of[3.2,4,4.8])this.addBox(i,3355443,.9,.08,.15,4,n,-7.1);for(const n of[-2,2])this.addBox(i,3359829,.15,1.5,1,8.58,4,n),this.addBox(i,3359829,.15,1.5,1,-8.58,4,n);this.addBox(i,10516568,2.5,.5,.8,-4,.25,-7.5),this.addBox(i,10516568,2.5,.5,.8,4,.25,-7.5),this.addBox(i,5933642,2,.5,.6,-4,.65,-7.5),this.addBox(i,5933642,2,.5,.6,4,.65,-7.5);for(const n of[-6,-2,2,6])this.addBox(i,15262940,.8,.8,.2,n,8.4,-7.4);i.position.set(e,0,t),this.scene.add(i)}buildHouseLoggia(e,t){const i=new Ne;this.addBox(i,11578532,20,6,15,0,3,0),this.addBox(i,10131088,20.5,.4,15.5,0,6.2,0),this.addBox(i,10131088,20,.4,3,0,3.2,-10);for(const n of[-7,-3,3,7])this.addCyl(i,8947840,.2,.2,3.2,8,n,1.6,-11);this.addBox(i,3359829,14,2,.2,0,4,-7.5),this.addBox(i,13157564,14.4,2.2,.15,0,4,-7.4);for(const n of[-5,0,5])this.addBox(i,8947840,.15,2,.2,n,4,-7.5);{const n=new B(new Q(2.4,2.8,.2),new K({color:3359829,emissive:new be(1120290),emissiveIntensity:.2}));n.position.set(5,1.4,-7.5),i.add(n)}this.addBox(i,8947840,2.8,3,.15,5,1.4,-7.4),this.addBox(i,9074784,18,.5,2.5,0,.25,-9),this.addBox(i,4880970,16,.7,2,0,.65,-9),this.addBox(i,8947840,20,.3,.3,0,3.1,-10.2),this.addBox(i,8947840,20,.3,.3,0,3.1,-11.8),i.position.set(e,0,t),this.scene.add(i)}buildHouseRokka(e,t){const i=new Ne;this.addBox(i,12892314,22,4.5,16,0,2.25,0),this.addBox(i,10128506,22.5,.3,9,0,4.75,-3.5,Math.PI*8/180,0,0),this.addBox(i,10128506,22.5,.3,9,0,4.75,3.5,-Math.PI*8/180,0,0),this.addBox(i,6969928,22.5,.6,.8,0,5.1,0),this.addBox(i,10127472,22.5,1,16.5,0,.5,0);{const n=new B(new Q(6,3.2,.2),new K({color:3359829,emissive:new be(1120290),emissiveIntensity:.3}));n.position.set(0,1.6,-8.1),i.add(n)}this.addBox(i,8022618,6.4,3.5,.15,0,1.75,-8);for(const n of[-2,0,2])this.addBox(i,8947824,.1,3.2,.2,n,1.6,-8.1);this.addBox(i,8947824,6,.1,.2,0,2.2,-8.1),this.addBox(i,3359829,2.5,1.5,.2,-7,3,-8.1),this.addBox(i,3359829,2.5,1.5,.2,7,3,-8.1),this.addBox(i,11575432,.8,4.5,.8,-3.5,2.25,-8.2),this.addBox(i,11575432,.8,4.5,.8,3.5,2.25,-8.2),this.addCyl(i,6969928,.1,.1,4.5,5,-11,2.25,-8),this.addCyl(i,6969928,.1,.1,4.5,5,11,2.25,-8),this.addBox(i,11575432,20,.8,.3,0,.4,-10),i.position.set(e,0,t),this.scene.add(i)}buildHouseTimberStone(e,t){const i=new Ne;this.addBox(i,8947840,22,4,14,0,2,0),this.addBox(i,6710880,22.2,.4,14.2,0,.2,0),this.addBox(i,12088362,22,4.5,13,0,6.25,0);for(let n=0;n<8;n++)this.addBox(i,10116634,22.1,.12,13.1,0,4.3+n*.57,0);this.addBox(i,4870229,5,8.5,14.2,8.5,4.25,0);for(let n=0;n<12;n++){const s=n%2===0?3817541:5593696;this.addBox(i,s,5.1,.3,14.3,8.5,.5+n*.65,0)}this.addBox(i,2763306,22.5,.5,14.5,0,8.75,0);for(const n of[-6,-2,2]){this.addBox(i,1710618,2.8,3.2,.2,n,6,-6.6);const s=new B(new Q(2.4,2.9,.15),new K({color:9087675,emissive:new be(2770005),emissiveIntensity:.2}));s.position.set(n,6,-6.6),i.add(s)}this.addBox(i,1710618,13,.15,.5,-3,8,-6.8),this.addBox(i,10140364,12.5,.8,.1,-3,7.6,-6.75);for(const n of[-7,-4.5])this.addBox(i,1710618,2.2,1.8,.2,n,2,-7.1),this.addBox(i,3359829,1.8,1.5,.15,n,2,-7);this.addBox(i,6962202,1.8,3.2,.2,2.5,1.6,-7.1),this.addBox(i,12092938,.12,.12,.15,3.1,1.6,-7.1),this.addBox(i,1710618,4,.15,2.5,2.5,3.5,-7.3),this.addCyl(i,1710618,.06,.06,3.5,5,1,1.75,-8.2),this.addCyl(i,1710618,.06,.06,3.5,5,4,1.75,-8.2),this.addBox(i,1710618,8,.18,6,-9,4.1,-5),this.addCyl(i,1118481,.12,.12,4.1,6,-6.5,2.05,-7.8),this.addCyl(i,1118481,.12,.12,4.1,6,-11.5,2.05,-7.8),this.addBox(i,10066329,2,.8,3.5,-9.5,.4,-4.5),this.addBox(i,11184810,1.9,.3,3.4,-9.5,.9,-4.5);for(let n=5;n<=13;n+=.7)this.addBox(i,1710618,.12,1.6,.12,n,.8,-8.5);this.addBox(i,6710880,20,.8,.3,0,.4,-9.5),this.addBox(i,4870229,20,.35,.4,0,.18,-9.5);for(let n=0;n<5;n++)this.addBox(i,14540236,1.4,.08,.7,5,.05,-10.2+n*.9);this.addBox(i,4880954,8,.1,3,5,0,-9.8);for(const[n,s]of[[3.5,-8.5],[6.5,-8]]){this.addCyl(i,5912608,.12,.15,2.5,6,n,1.25,s);const r=new B(new Ni(1,2.2,7),new K({color:3828266}));r.position.set(n,2.8,s),i.add(r)}this.addBox(i,1710618,3.5,1.8,.2,7.5,6.5,-6.6),this.addBox(i,3359829,3,1.5,.15,7.5,6.5,-6.55),i.position.set(e,0,t),this.scene.add(i)}buildHouseSculpturalPlaster(e,t){const i=new Ne,n=8686698,s=6976085,r=11842732,a=1118481;this.addBox(i,n,14,5.5,12,-3,2.75,0),this.addBox(i,n,7,3.5,12,9,1.75,0),this.addBox(i,s,.3,5.6,12,2.85,2.75,0);const l=new B(new Q(11,.35,12.4),new K({color:n}));l.rotation.z=22*Math.PI/180,l.position.set(.5,8,0),i.add(l);const c=new B(new Q(7.5,.35,12.4),new K({color:r}));c.rotation.z=-52*Math.PI/180,c.position.set(-6.2,8.2,0),i.add(c),this.addBox(i,s,.6,.6,12.4,-3.2,10,0),this.addBox(i,1710618,2.3,4,.5,-3,2,-6.25),this.addBox(i,a,2.6,4.3,.2,-3,2.1,-6.05);const h=new B(new Q(2,3.6,.12),new K({color:2767428,emissive:new be(661538),emissiveIntensity:.3}));h.position.set(-3,2.1,-6.1),i.add(h),this.addBox(i,1710618,1.6,1.6,.4,8.5,2,-6.2),this.addBox(i,a,1.8,1.8,.18,8.5,2,-6.05),this.addBox(i,a,.4,.4,.4,-6.5,4.2,-6.05),this.addBox(i,a,.4,.4,.4,6.5,3.4,-6.05);for(const f of[-6.5,6.5]){const g=new B(new Q(.5,.08,.3),new K({color:16772812,emissive:new be(16764040),emissiveIntensity:.6}));g.position.set(f,f===-6.5?3.95:3.15,-6.07),i.add(g)}const u=8.5,d=-11;for(let f=-4;f<=4;f++){const g=f/4*40*Math.PI/180,x=u*Math.sin(g),m=d+u*(Math.cos(g)-1),p=new B(new Q(2,1.2,.35),new K({color:n}));p.rotation.y=g,p.position.set(x,.6,m),i.add(p);const y=new B(new Q(2,.12,.45),new K({color:12631720}));y.rotation.y=g,y.position.set(x,1.26,m),i.add(y)}this.addBox(i,s,2.5,.2,1,-3,.1,-7.5),i.position.set(e,0,t),this.scene.add(i)}buildHouseHaussmann(e,t){const i=new Ne,n=15261384,s=15788244,r=13154972,a=1118481;this.addBox(i,n,22,9.5,14,0,4.75,0);for(let h=0;h<5;h++)this.addBox(i,r,22.3,.14,14.3,0,.5+h*.88,0);for(let h=0;h<4;h++)this.addBox(i,r,22.3,.12,14.3,0,5.4+h*.85,0);this.addBox(i,s,22.6,.5,14.6,0,4.75,0),this.addBox(i,r,22.8,.2,14.8,0,5.05,0),this.addBox(i,n,22.5,.3,14.5,0,5.25,0),this.addBox(i,n,23.2,.5,15.2,0,9.75,0),this.addBox(i,s,22.8,.8,14.8,0,10.15,0),this.addBox(i,r,23.4,.25,15.4,0,10.55,0),this.addBox(i,s,4,11.5,4,-10,5.75,-6);for(let h=0;h<6;h++)this.addBox(i,r,4.2,.12,4.2,-10,.5+h*1.75,-6);this.addBox(i,n,4.4,.4,4.4,-10,5,-6),this.addBox(i,n,4.6,.4,4.6,-10,11.3,-6),this.addBox(i,s,4.4,.6,4.4,-10,11.75,-6),this.addBox(i,r,4.8,.25,4.8,-10,12.12,-6),this.addBox(i,n,2.5,1,2.5,-10,12.75,-6);for(const h of[-6.5,-1,4.5]){this.addBox(i,r,2,4.2,.5,h,2.1,-7.25),this.addBox(i,s,1.7,4,.2,h,2.1,-7.05);const u=new B(new Q(1.35,3.5,.12),new K({color:9087931,emissive:new be(1714739),emissiveIntensity:.15}));u.position.set(h,2.1,-7),i.add(u),this.addBox(i,s,1.7,.12,.15,h,3.2,-7.05)}for(const h of[-6.5,4.5]){this.addBox(i,r,2,3.8,.5,h,7.5,-7.25),this.addBox(i,s,1.7,3.5,.2,h,7.5,-7.05);const u=new B(new Q(1.35,3,.12),new K({color:9087931,emissive:new be(1714739),emissiveIntensity:.15}));u.position.set(h,7.5,-7),i.add(u),this.addBox(i,s,1.7,.12,.15,h,8.5,-7.05),this.addBox(i,n,3.4,.28,1.4,h,5.66,-7.9),this.addBox(i,r,3.5,.45,1.5,h,5.38,-7.95);for(let d=0;d<5;d++){const f=h-1.3+d*.65;this.addBox(i,a,.07,1,.07,f,6.2,-8.4)}this.addBox(i,a,3.2,.09,.09,h,6.72,-8.4),this.addBox(i,a,3.2,.09,.09,h,5.82,-8.4),this.addBox(i,a,.07,1,.07,h-1.3,6.2,-8.4,0,0,.35),this.addBox(i,a,.07,1,.07,h+1.3,6.2,-8.4,0,0,-.35)}this.addBox(i,s,5,6.5,.22,9.5,3.75,-7.05);const l=new B(new Q(4.5,6,.12),new K({color:9087931,emissive:new be(1714739),emissiveIntensity:.12}));l.position.set(9.5,3.75,-7),i.add(l);for(let h=0;h<3;h++)this.addBox(i,s,5,.1,.15,9.5,1+h*2,-7);for(const h of[7.5,9.5,11.5])this.addBox(i,s,.1,6,.15,h,3.75,-7);this.addBox(i,r,3.8,5.5,.6,1.5,2.75,-7.4),this.addBox(i,s,2.8,4.8,.2,1.5,2.4,-7.1);const c=new B(new Q(2.2,4.2,.12),new K({color:9087931,emissive:new be(660768),emissiveIntensity:.2}));c.position.set(1.5,2.4,-7.05),i.add(c),this.addBox(i,13937232,.1,.1,.1,2.4,2.2,-7.06),this.addBox(i,r,22.5,.3,14.5,0,.15,0),i.position.set(e,0,t),this.scene.add(i)}buildHouseAngularBay(e,t){const i=new Ne,n=15789022,s=12876378,r=3809296,a=1118481;this.addBox(i,n,18,4,13,0,2,0),this.addBox(i,n,18,4,12,0,6,0),this.addBox(i,n,8,4,2.5,5,6,-7.25),this.addBox(i,n,3,10,2.5,6.5,5,-7.5),this.addBox(i,s,10,.5,14,-4.5,8.5,0,0,0,.44),this.addBox(i,s,10,.5,14,4.5,8.5,0,0,0,-.44),this.addBox(i,r,1.5,.5,14.5,0,10.5,0),this.addBox(i,r,19,.3,13.5,0,8.05,0),this.addBox(i,r,19,.2,1.2,0,8.05,-7.3);for(const l of[-6.5,0])this.addBox(i,15658734,2.6,2,.12,l,1.8,-6.56),this.addBox(i,3359829,2.2,1.6,.15,l,1.8,-6.5);for(const l of[-6.5,0])this.addBox(i,15658734,2.6,2,.12,l,5.8,-6.56),this.addBox(i,3359829,2.2,1.6,.15,l,5.8,-6.5);for(let l=0;l<4;l++)this.addBox(i,a,.08,1,.08,-8.5+l*.65,5.5,-6.7);this.addBox(i,a,2.4,.08,.08,-7.02,6.05,-6.7),this.addBox(i,a,2.4,.08,.08,-7.02,5,-6.7),i.position.set(e,0,t),this.scene.add(i)}buildHouseBrutalistCompound(e,t){const i=new Ne,n=10524792,s=8947840;this.addBox(i,n,7,7,11,-8.5,3.5,0),this.addBox(i,n,6,5,10,-1,2.5,.5),this.addBox(i,n,6,6,11,5.5,3,-.5),this.addBox(i,n,5,4,9,11,2,0),this.addBox(i,n,24,1.5,9,0,.75,.5),this.addBox(i,s,4,.25,2.5,-8.5,7.25,-6.2),this.addBox(i,s,4,.25,2.5,5.5,6.25,-6.2),this.addBox(i,2241348,4,5.5,.15,-8.5,3.5,-5.6),this.addBox(i,2241348,3.5,4.5,.15,5.5,3,-5.6),this.addBox(i,n,8,5,.4,2,2.5,-6.5,0,.26,0);const r=14,a=9,l=-Math.PI*.35,c=Math.PI*.35;for(let h=0;h<a;h++){const u=h/(a-1),d=l+(c-l)*u,f=Math.sin(d)*r,g=Math.cos(d)*r-r+4;this.addBox(i,n,3.5,1.5,.4,f,.75,g,0,-d,0)}for(const h of[-3,2.5]){this.addCyl(i,5913114,.15,.2,3,5,h,1.5,-4);const u=new B(new dt(1.2,6,5),new K({color:3828266}));u.position.set(h,4,-4),i.add(u)}i.position.set(e,0,t),this.scene.add(i)}buildHouseTerracottaMonolith(e,t){const i=new Ne,n=12284e3,s=2759194,r=4880954;this.addBox(i,n,20,3,.5,0,1.5,-9.5),this.addBox(i,s,20.2,.1,.55,0,1,-9.5),this.addBox(i,s,20.2,.1,.55,0,2,-9.5),this.addBox(i,n,20,6,10,0,3,-2),this.addBox(i,s,20.2,.1,10.1,0,2,-2),this.addBox(i,s,20.2,.1,10.1,0,4,-2),this.addBox(i,n,20.3,.4,10.3,0,6.2,-2),this.addBox(i,r,18,.3,1.8,0,.15,-7.5);for(let a=-8;a<=8;a+=2.5){const l=new B(new Ni(.2,.8,5),new K({color:5933642}));l.position.set(a,.55,-7.5),i.add(l)}this.addBox(i,1118481,1.2,3.5,.2,0,3.5,-7.05),this.addBox(i,2241348,.8,3,.15,0,3.5,-7),i.position.set(e,0,t),this.scene.add(i)}buildHouseCurvedBalcony(e,t){const i=new Ne,n=15261900,s=15789544,r=11053216,a=1118481;this.addBox(i,n,16,4,12,0,2,0),this.addBox(i,s,16,4,12,0,6,0),this.addBox(i,s,16.5,.3,12.5,0,8.15,0),this.addBox(i,a,16.6,.2,12.6,0,8.3,0);const l=5,c=14,h=-Math.PI*.5,u=Math.PI*.5;for(let d=0;d<c;d++){const f=d/(c-1),g=h+(u-h)*f,x=Math.sin(g)*l,m=-Math.cos(g)*l-3.5;this.addBox(i,r,1.3,2,.5,x,5.5,m,0,-g,0)}for(const d of[-5,0,5])this.addBox(i,4473924,2.5,2,.15,d,1.8,-6.1),this.addBox(i,2241348,2,1.6,.12,d,1.8,-6);this.addCyl(i,a,.1,.1,8,5,-8,4,-6.1),this.addCyl(i,a,.1,.1,8,5,8,4,-6.1),this.addBox(i,a,.3,.3,.3,-2,2.5,-6.15),this.addBox(i,s,17,.25,1.5,0,8,-7.2,.1,0,0),this.addBox(i,a,17.2,.1,1.6,0,8.12,-7.2,.1,0,0),i.position.set(e,0,t),this.scene.add(i)}buildHouseCortenPlaster(e,t){const i=new Ne,n=4868682,s=12081696,r=3684408,a=9060368;this.addBox(i,n,12,8,11,-7,4,0),this.addBox(i,n,12.3,.4,11.3,-7,8.2,0),this.addBox(i,s,8,8.5,11,5,4.25,0),this.addBox(i,s,8.3,.4,11.3,5,8.7,0),this.addBox(i,r,2,9.5,11,-.5,4.75,0);for(let c=0;c<6;c++)this.addBox(i,a,.15,8.5,11.1,1.5+c*1.2,4.25,0);this.addCyl(i,13421704,.15,.15,.5,6,-5,5,-5.6),this.addCyl(i,13421704,.15,.15,.5,6,-9,5,-5.6),this.addBox(i,1118481,2.5,1.8,.3,-6,4.5,-5.7),this.addBox(i,2241348,2,1.4,.15,-6,4.5,-5.6),this.addBox(i,1118481,2.5,1.8,.3,-10,2.5,-5.7),this.addBox(i,2241348,2,1.4,.15,-10,2.5,-5.6),this.addCyl(i,9132587,.2,.3,8,6,-15,4,-3);const l=new B(new Ni(2.5,1.5,8),new K({color:2775578}));l.position.set(-15,8.75,-3),i.add(l),i.position.set(e,0,t),this.scene.add(i)}buildCoffeeShop(e,t){const i=new Ne;this.addBox(i,15788248,14,4,10,0,2,0),this.addBox(i,15261904,14.2,.18,10.2,0,4.09,0),this.addBox(i,1118481,14.6,.38,10.6,0,4.19,0);for(const s of[-3.8,3.8]){this.addBox(i,1118481,4,3.8,.14,s,2.1,-5.08);const r=new B(new Q(3.5,3.4,.1),new K({color:13140032,emissive:new be(10115616),emissiveIntensity:.7}));r.position.set(s,2.1,-5.06),i.add(r)}this.addBox(i,1118481,2,3,.14,0,1.5,-5.08),this.addBox(i,8014368,1.6,2.8,.2,0,1.4,-5.1),this.addBox(i,13410400,.1,.1,.12,.5,1.4,-5.1),this.addBox(i,12876352,13.5,.28,4,0,3.22,-7),this.addBox(i,10770984,13.5,.6,.18,0,2.95,-9.05);for(const s of[-4.5,0,4.5])this.addCyl(i,8947832,.07,.07,3,5,s,1.5,-9.1);this.addBox(i,16777215,5,.36,.12,0,3.06,-8.96);for(const[s,r]of[[-5,-11.5],[0,-11.5],[5,-11.5]]){this.addCyl(i,9068608,.75,.75,.1,12,s,1.12,r),this.addCyl(i,6963232,.07,.07,1.12,6,s,.56,r);for(const a of[-1,1])this.addCyl(i,9068608,.32,.32,.09,8,s+a*.85,.82,r),this.addCyl(i,6963232,.05,.05,.82,5,s+a*.85,.41,r)}for(let s=0;s<5;s++)this.addCyl(i,16777215,.22-s*.008,.24-s*.008,.3,8,7.1,.22+s*.28,-3.5);this.addBox(i,3355445,1.1,1.7,.12,-3.5,1.1,-5.1),this.addBox(i,15658734,.72,.08,.05,-3.5,1.6,-5.04),this.addBox(i,15658734,.55,.08,.05,-3.5,1.42,-5.04),this.addBox(i,15658734,.63,.08,.05,-3.5,1.24,-5.04),this.addBox(i,15658734,.48,.08,.05,-3.5,1.06,-5.04);for(const s of[-4,0,4]){const r=new B(new Q(.25,.25,.25),new K({color:16764040,emissive:new be(16755268),emissiveIntensity:.8}));r.position.set(s,3.7,-2),i.add(r)}this.addCyl(i,3355443,.3,.3,12,8,0,6,-8);const n=new B(new Q(10,3,.4),new K({color:13918762,emissive:new be(9121808),emissiveIntensity:.6}));n.position.set(0,13,-8),n.castShadow=!0,i.add(n),this.addBox(i,16777215,8,.2,.5,0,14.2,-7.85),this.addBox(i,16777215,8,.2,.5,0,12.8,-7.85),this.addCyl(i,16777215,.8,1,1.5,12,0,15.5,-8),this.addCyl(i,7027242,.4,.4,.3,8,0,16.4,-8),i.position.set(e,0,t),this.scene.add(i)}buildWorkshop(e,t){const i=new Ne,n=4868676,s=2236960,r=15657176,a=3355440,l=1118480;this.addBox(i,n,30,8,20,0,4,0),this.addBox(i,1710616,30.2,.35,20.2,0,.18,0);const c=12*Math.PI/180,h=new K({color:s}),u=new B(new Q(30.5,.35,11),h);u.castShadow=!0,u.rotation.x=c,u.position.set(0,8.6,-4.5),i.add(u);const d=new B(new Q(30.5,.35,11),h);d.castShadow=!0,d.rotation.x=-c,d.position.set(0,8.6,4.5),i.add(d),this.addBox(i,1118480,30.5,.55,.8,0,9.3,0),this.addBox(i,r,24,3.2,.45,0,7.4,-10.23),this.addBox(i,a,22,2.5,.28,0,7.4,-10.25),this.addBox(i,16775920,24.2,.22,.46,0,9.11,-10.23),this.addBox(i,16775920,24.2,.22,.46,0,5.89,-10.23),this.addBox(i,16775920,.22,3.2,.46,-12.11,7.4,-10.23),this.addBox(i,16775920,.22,3.2,.46,12.11,7.4,-10.23),this.addBox(i,12674667,24,.3,.44,0,5.75,-10.22),this.addBox(i,16763972,8,.65,.35,0,5.5,-10.2),this.addBox(i,2763296,7.5,.42,.38,0,5.5,-10.21),this.addBox(i,l,12,5,.25,0,2.5,-10.15),this.addBox(i,2236960,.2,5,.25,-6.2,2.5,-10.15),this.addBox(i,2236960,.2,5,.25,6.2,2.5,-10.15);for(let v=1;v<=4;v++)this.addBox(i,1710616,11.8,.08,.28,0,v,-10.14);this.addBox(i,2236960,12.6,.4,.28,0,5.2,-10.14);const f=3359829;for(let v=-6;v<=6;v+=4)this.addBox(i,f,.16,1.2,2.8,15.09,7.2,v),this.addBox(i,f,.16,1.2,2.8,-15.09,7.2,v);this.addBox(i,2236960,.2,.18,20,15.1,7.9,0),this.addBox(i,2236960,.2,.18,20,15.1,6.6,0),this.addBox(i,2236960,.2,.18,20,-15.1,7.9,0),this.addBox(i,2236960,.2,.18,20,-15.1,6.6,0),this.addCyl(i,2236960,.12,.12,8,5,-15,4,-10),this.addCyl(i,2236960,.12,.12,8,5,15,4,-10),this.addCyl(i,2236960,.12,.12,8,5,-15,4,10),this.addCyl(i,2236960,.12,.12,8,5,15,4,10),this.addCyl(i,12884602,.85,.9,1.5,10,9.5,.75,-11.5),this.addCyl(i,6974050,.85,.9,1.5,10,9.5,2.35,-11.5),this.addCyl(i,8947840,.92,.92,.12,10,9.5,1.56,-11.5),this.addCyl(i,8947840,.92,.92,.12,10,9.5,3.16,-11.5),this.addCyl(i,12884602,.85,.9,1.5,10,11.2,.75,-12.2),this.addCyl(i,8947840,.92,.92,.12,10,11.2,1.56,-12.2),this.addBox(i,8018488,4.5,.18,2.5,10.2,.09,-11.8),this.addBox(i,9074776,6,1,2.2,0,.5,-9.2),this.addBox(i,13154448,6.3,.18,2.4,0,1.09,-9.2),this.addBox(i,15658700,.8,.05,1,.8,1.19,-9.3),this.addBox(i,4473924,.12,.25,.12,.8,1.22,-9),this.addBox(i,5921362,2.8,1.8,2.8,-8.5,.9,-11.5);const g=new B(new We(.75,.75,2.2,10),new K({color:8947840}));g.rotation.z=35*Math.PI/180,g.position.set(-8.5,1.6,-11.5),g.castShadow=!0,i.add(g),this.addCyl(i,3355440,.4,.4,.3,8,-8.5,.2,-10.8),this.addBox(i,4868676,3.5,2.2,2.5,-11.5,1.1,-13),this.addBox(i,8947840,3,.5,2,-11.5,2.35,-13),this.addBox(i,6710880,2.2,1.2,1.4,-11.5,3.1,-13);const x=new K({color:10131600}),m=new B(new ht(20,8),x);m.rotation.x=-Math.PI/2,m.position.set(0,.008,-14),m.receiveShadow=!0,i.add(m),this.addBox(i,r,.3,2.5,6,15.16,4,0),this.addBox(i,a,.32,2,5.5,15.17,4,0);const p=oh(1024),y=new Ot({map:p,transparent:!0,depthWrite:!1,side:Nt}),M=new B(new ht(7,4.5),y);M.position.set(0,2.5,-10.29),i.add(M),i.position.set(e,0,t),this.scene.add(i),this.collisionWorld.addBox(e,t,15.5,10.5)}createZebraCrossings(){const e=new K({color:15658734}),t=new K({color:1118481});for(let i=-200;i<=200;i+=40)for(let n=-200;n<=200;n+=40){if(Math.abs(i)>200||Math.abs(n)>200)continue;const s=[-3.2,-1.6,0,1.6,3.2],r=[-2.4,-.8,.8,2.4],a=2;for(const l of s){const c=new B(new Q(.8,.03,a),e);c.position.set(i+l,.05,n-5),this.scene.add(c)}for(const l of r){const c=new B(new Q(.8,.03,a),t);c.position.set(i+l,.04,n-5),this.scene.add(c)}for(const l of s){const c=new B(new Q(.8,.03,a),e);c.position.set(i+l,.05,n+5),this.scene.add(c)}for(const l of r){const c=new B(new Q(.8,.03,a),t);c.position.set(i+l,.04,n+5),this.scene.add(c)}for(const l of s){const c=new B(new Q(a,.03,.8),e);c.position.set(i-5,.05,n+l),this.scene.add(c)}for(const l of r){const c=new B(new Q(a,.03,.8),t);c.position.set(i-5,.04,n+l),this.scene.add(c)}for(const l of s){const c=new B(new Q(a,.03,.8),e);c.position.set(i+5,.05,n+l),this.scene.add(c)}for(const l of r){const c=new B(new Q(a,.03,.8),t);c.position.set(i+5,.04,n+l),this.scene.add(c)}}}createRoadCorners(){const e=new K({color:13156528}),t=new K({color:11051160}),i=[{dx:-6,dz:-6,theta:3*Math.PI/2},{dx:6,dz:-6,theta:Math.PI},{dx:-6,dz:6,theta:0},{dx:6,dz:6,theta:Math.PI/2}];for(let n=-200;n<=200;n+=40)for(let s=-200;s<=200;s+=40)for(const{dx:r,dz:a,theta:l}of i){const c=n+r,h=s+a,u=new B(new Ea(2,24,l,Math.PI/2),e);u.rotation.x=-Math.PI/2,u.position.set(c,.021,h),u.receiveShadow=!0,this.scene.add(u);const d=new B(new dn(1.8,2,24,1,l,Math.PI/2),t);d.rotation.x=-Math.PI/2,d.position.set(c,.08,h),d.receiveShadow=!0,this.scene.add(d)}}onUpdate(e){this.updateCallbacks.push(e)}createSkyDome(){const e=new dt(800,32,16);e.scale(-1,1,1);const t=new Ct({uniforms:{topColor:{value:new be(4491468)},bottomColor:{value:new be(12970229)},offset:{value:100},exponent:{value:.8}},vertexShader:`
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
      `,side:Rt,depthWrite:!1}),i=new B(e,t);this.scene.add(i)}createClouds(){const e=new K({color:16777215,transparent:!0,opacity:.85});for(let t=0;t<10;t++){const i=new Ne,n=3+Math.floor(Math.random()*4);for(let s=0;s<n;s++){const r=8+Math.random()*12,a=new B(new dt(r,7,5),e);a.position.set(s*15-n*7+(Math.random()-.5)*10,(Math.random()-.5)*8,(Math.random()-.5)*15),i.add(a)}i.position.set((Math.random()-.5)*600,80+Math.random()*60,(Math.random()-.5)*600),this.scene.add(i),this.clouds.push({mesh:i,speed:.3+Math.random()*.7})}}createPuddles(){const e=new K({color:8952234,transparent:!0,opacity:.35});for(let t=0;t<20;t++){const i=2+Math.random()*4,n=1+Math.random()*2,s=new B(new ht(i,n),e);s.rotation.x=-Math.PI/2,s.position.set((Math.random()-.5)*300,.015,(Math.random()-.5)*300),this.scene.add(s)}}addRooftopDetails(e,t,i,n,s,r){const a=this.seed(s,r,200);if(a>.3){const l=new Ne;this.addBox(l,8947840,1.5,.6,1,0,0,0),this.addBox(l,6710880,1.5,.1,.8,0,.35,.05),l.position.set(t/2-2,n+.3,i/2-2),e.add(l)}if(a>.7&&n>8){const l=new B(new We(1,1,1.8,10),new K({color:9139029}));l.position.set(-t/2+2,n+.9,0),e.add(l);for(const[c,h]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]]){const u=new B(new We(.06,.06,1.5,4),new K({color:5592400}));u.position.set(-t/2+2+c,n+.1,h),e.add(u)}}if(a>.5&&a<.8){const l=new B(new dt(.4,8,4,0,Math.PI*2,0,Math.PI/2),new K({color:13421772}));l.position.set(t/2-1,n+.2,-i/2+1),l.rotation.x=-Math.PI/4,e.add(l)}if(a<.4){const l=new B(new We(.04,.04,3,4),new K({color:4473924}));l.position.set(0,n+1.5,0),e.add(l),this.addBox(e,4473924,2,.05,.05,0,n+2.5,0)}a>.4&&a<.6&&this.addBox(e,7829360,2,.4,.4,t/4,n+.2,-i/4)}addHydrant(e,t){const i=new Ne,n=new K({color:13378082}),s=new K({color:11145489}),r=new B(new We(.25,.28,.6,8),n);r.position.set(0,.3,0),i.add(r);const a=new B(new We(.18,.18,.12,8),s);a.position.set(0,.66,0),i.add(a);for(const l of[-1,1]){const c=new B(new We(.06,.06,.2,6),n);c.rotation.z=Math.PI/2,c.position.set(l*.3,.3,0),i.add(c)}i.position.set(e,0,t),this.scene.add(i)}addBin(e,t){const i=new Ne,n=new K({color:4473924}),s=new K({color:5592405}),r=new B(new We(.2,.22,.7,8),n);r.position.set(0,.35,0),i.add(r);const a=new B(new We(.22,.22,.08,8),s);a.position.set(0,.74,0),i.add(a),i.position.set(e,0,t),this.scene.add(i)}addBollard(e,t){const i=new Ne,n=new K({color:10066329}),s=new K({color:7829367}),r=new B(new We(.1,.1,.6,8),n);r.position.set(0,.3,0),i.add(r);const a=new B(new We(.14,.14,.08,8),s);a.position.set(0,.04,0),i.add(a),i.position.set(e,0,t),this.scene.add(i)}addBench(e,t,i=0){const n=new Ne,s=new K({color:9134144}),r=new K({color:5592405}),a=new B(new Q(1.2,.1,.4),s);a.position.set(0,.45,0),n.add(a);for(const c of[-.5,.5]){const h=new B(new Q(.05,.4,.4),r);h.position.set(c,.2,0),n.add(h)}const l=new B(new Q(1.2,.3,.08),s);l.position.set(0,.75,-.16),n.add(l),n.rotation.y=i,n.position.set(e,0,t),this.scene.add(n)}addBusStop(e,t,i=0){const n=new Ne,s=new K({color:13421772}),r=new K({color:4482730,transparent:!0,opacity:.7}),a=new B(new We(.05,.05,3.5,6),s);a.position.set(0,1.75,0),n.add(a);const l=new B(new Q(2,.05,.8),r);l.position.set(0,3.3,.4),n.add(l);const c=new B(new Q(.05,2.5,.8),r);c.position.set(0,2,0),n.add(c),n.rotation.y=i,n.position.set(e,0,t),this.scene.add(n)}addStreetLight(e,t,i=0,n=!1){const s=new Ne,r=new K({color:1118481}),a=new K({color:16771232,transparent:!0,opacity:.06}),l=new B(new We(.08,.1,6,6),r);l.position.set(0,3,0),s.add(l);const c=new B(new Q(.08,.08,1.5),r);c.position.set(0,6,-.75),c.rotation.x=-.2,s.add(c);const h=new B(new Q(.4,.15,.3),r);h.position.set(0,5.9,-1.4),s.add(h);const u=new B(new Ni(1.5,3,8,1,!0),a);if(u.rotation.x=Math.PI,u.position.set(0,4.4,-1.4),s.add(u),s.rotation.y=i,s.position.set(e,0,t),this.scene.add(s),n){const d=new Cm(16771232,.8,15);d.position.set(e+Math.sin(i+Math.PI)*1.4,5.9,t+Math.cos(i+Math.PI)*1.4),this.scene.add(d)}}addTrafficLight(e,t,i=0){const n=new Ne,s=new K({color:1118481}),r=new B(new We(.07,.09,4.5,6),s);r.position.set(0,2.25,0),n.add(r);const a=new B(new Q(.5,1.4,.4),s);a.position.set(0,4.7,0),n.add(a);const l=[16720384,16750848,52292];for(let c=0;c<3;c++){const h=new B(new We(.15,.15,.08,8),new K({color:l[c]}));h.rotation.x=Math.PI/2,h.position.set(0,5.25-c*.45,-.21),n.add(h)}n.rotation.y=i,n.position.set(e,0,t),this.scene.add(n)}createStreetLights(){let i=0;const n=20;for(let s=-160;s<=160;s+=40)for(let r=-160;r<=160;r+=20){const c=Math.sqrt(s*s+r*r)<80&&i<n,h=(r%40+40)%40;Math.min(h,40-h)>6&&(this.addStreetLight(r,s-5.2,0,c),this.addStreetLight(r,s+5.2,Math.PI,c),c&&(i+=2));const u=(r%40+40)%40;if(Math.min(u,40-u)>6&&(this.addStreetLight(s+5.2,r,Math.PI/2,c),this.addStreetLight(s-5.2,r,-Math.PI/2,c),c&&(i+=2)),i>=n)return}}createTrafficLights(){for(let n=-160;n<=160;n+=40)for(let s=-160;s<=160;s+=40)this.addTrafficLight(n-5.2,s-5.2,Math.PI/4),this.addTrafficLight(n+5.2,s-5.2,-Math.PI/4),this.addTrafficLight(n-5.2,s+5.2,3*Math.PI/4),this.addTrafficLight(n+5.2,s+5.2,-3*Math.PI/4)}createStreetFurniture(){for(let i=-160;i<=160;i+=40)for(let n=-160;n<=160;n+=20){const s=this.seed(i,n,300),r=this.seed(i,n,301);if(s>.4){const c=s>.7?1:-1,h=(this.seed(n,i,302)-.5)*4,u=(n%40+40)%40;Math.min(u,40-u)>8&&(r<.3?this.addHydrant(n+h,i+c*5.2):r<.5?this.addBin(n+h,i+c*5.2):r<.65?this.addBollard(n+h,i+c*5.2):r<.75&&this.addBench(n+h,i+c*5.2))}const a=this.seed(n,i,303),l=this.seed(n,i,304);if(a>.4){const c=a>.7?1:-1,h=(this.seed(i,n,305)-.5)*4,u=(n%40+40)%40;Math.min(u,40-u)>8&&(l<.3?this.addHydrant(i+c*5.2,n+h):l<.5?this.addBin(i+c*5.2,n+h):l<.65?this.addBollard(i+c*5.2,n+h):l<.75&&this.addBench(i+c*5.2,n+h,Math.PI/2))}}for(let i=-160;i<=160;i+=40)for(let n=-160;n<=160;n+=160){const s=(n%40+40)%40;Math.min(s,40-s)>8&&this.addBusStop(n,i+5.5,0);const r=(n%40+40)%40;Math.min(r,40-r)>8&&this.addBusStop(i+5.5,n,Math.PI/2)}this.createStreetLights(),this.createTrafficLights()}addGlassBox(e,t,i,n,s,r,a,l){const c=Math.random()>.6?new be(2241348):new be(1122867),h=new B(new Q(i,n,s),new K({color:t,emissive:c,emissiveIntensity:Math.random()*.4}));h.position.set(r,a,l),h.castShadow=!0,h.receiveShadow=!0,e.add(h)}buildToiletBlock(e,t){const i=new Ne;this.addBox(i,11577496,10,3.5,8,0,1.75,0),this.addBox(i,10064008,11,.3,9,0,3.65,0),this.addBox(i,2236960,1.6,2.4,.2,-2.2,1.2,-4.05),this.addBox(i,2236960,1.6,2.4,.2,2.2,1.2,-4.05),this.addBox(i,15263968,10.1,.4,8.1,0,1.8,0),this.addBox(i,3359829,8,.8,.15,0,3.1,-4.05),this.addBox(i,16777215,6,.2,.1,0,3.2,-4.03),this.addCyl(i,4473920,.15,.15,8,6,0,4,-5.5),this.addBox(i,2201331,4,1.5,.3,0,8.75,-5.5),this.addBox(i,16777215,3,.25,.1,0,9,-5.38),this.addBox(i,16777215,3,.25,.1,0,8.5,-5.38);const n=new K({color:6600182,emissive:new be(1402304),emissiveIntensity:.4}),s=new B(new dt(.7,8,6),n);s.position.set(0,10.5,-5.5),i.add(s),i.position.set(e,0,t),this.scene.add(i)}start(){const e=t=>{const i=Math.min((t-this.lastTime)/1e3,.05);this.lastTime=t;for(const n of this.updateCallbacks)n(i);for(const n of this.clouds)n.mesh.position.x-=n.speed*i,n.mesh.position.x<-350&&(n.mesh.position.x=350);this.composer.render(),requestAnimationFrame(e)};requestAnimationFrame(e)}}const ah=.9,ki={Matt:{name:"Matt",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:6044190,hairStyle:"short"},Jose:{name:"Jose",skinColor:12884592,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:657930,hairStyle:"dreadlocks"},Jarrad:{name:"Jarrad",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236976,hairColor:1710618,hairStyle:"topknot",glassesColor:2236962,hasPhone:!0},Phil:{name:"Phil",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:3821696,hairColor:12632248,hairStyle:"silver",glassesColor:11053216},Tsuyoshi:{name:"Tsuyoshi",skinColor:12093528,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236960,hairColor:657930,hairStyle:"mohawk"},Fabio:{name:"Fabio",skinColor:12488288,shirtColor:1801924,shirtLogoColor:16777215,pantsColor:2631728,hairColor:1708040,hairStyle:"bun",glassesColor:2759176},Joe:{name:"Joe",skinColor:13934704,shirtColor:15777792,shirtLogoColor:1710618,pantsColor:2763320,hairColor:3811866,hairStyle:"short",helmetColor:16119280,hiVisBands:!0},Mikayla:{name:"Mikayla",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:1708064,hairColor:10035780,hairStyle:"bun"},Connie:{name:"Connie",skinColor:15255704,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:2763322,hairColor:16109664,hairStyle:"wildblonde"}};class Ts{constructor(e){E(this,"group");E(this,"mixer");E(this,"walkAction");E(this,"idleAction");E(this,"currentAction");E(this,"logoMesh");this.group=new Ne,this._build(e),this.mixer=new Vm(this.group);const t=this._buildWalkClip(),i=this._buildIdleClip();this.walkAction=this.mixer.clipAction(t),this.idleAction=this.mixer.clipAction(i),this.idleAction.play(),this.currentAction=this.idleAction}_build(e){const t=new Zt;t.name="Hip",t.position.set(0,1,0);const i=new Zt;i.name="Spine",i.position.set(0,.55,0);const n=new Zt;n.name="Head",n.position.set(0,.65,0);const s=new Zt;s.name="LShoulder",s.position.set(-.4,.38,0);const r=new Zt;r.name="LForeArm",r.position.set(0,-.36,0);const a=new Zt;a.name="RShoulder",a.position.set(.4,.38,0);const l=new Zt;l.name="RForeArm",l.position.set(0,-.36,0);const c=new Zt;c.name="LHip",c.position.set(-.16,-.05,0);const h=new Zt;h.name="LKnee",h.position.set(0,-.5,0);const u=new Zt;u.name="RHip",u.position.set(.16,-.05,0);const d=new Zt;d.name="RKnee",d.position.set(0,-.5,0),t.add(i),i.add(n),i.add(s),s.add(r),i.add(a),a.add(l),t.add(c),c.add(h),t.add(u),u.add(d),this.group.add(t);const f=M=>new K({color:M}),g=(M,v,R,A,C,I=0,w=0,b=0)=>{const P=new B(new Q(R,A,C),f(v));P.position.set(I,w,b),P.castShadow=!0,M.add(P)},x=(M,v,R,A,C=0,I=0,w=0)=>{const b=new B(new We(R,R,A,8),f(v));b.position.set(C,I,w),b.castShadow=!0,M.add(b)},m=(M,v,R,A=0,C=0,I=0)=>{const w=new B(new dt(R,10,8),f(v));w.position.set(A,C,I),w.castShadow=!0,M.add(w)};g(i,e.shirtColor,.5,.56,.28,0,.02,0),e.hiVisBands&&(g(i,16777215,.52,.06,.3,0,.18,0),g(i,16777215,.52,.06,.3,0,-.1,0));const p=this._makeLogo(e),y=new B(new ht(.44,.5),new Ot({map:p,transparent:!0,depthWrite:!1}));if(y.position.set(0,.02,.145),i.add(y),this.logoMesh=y,g(t,e.pantsColor,.44,.2,.26,0,0,0),x(s,e.shirtColor,.08,.34,0,-.17,0),x(a,e.shirtColor,.08,.34,0,-.17,0),e.hiVisBands&&(g(s,16777215,.18,.06,.18,0,-.1,0),g(a,16777215,.18,.06,.18,0,-.1,0)),x(r,e.skinColor,.07,.3,0,-.15,0),x(l,e.skinColor,.07,.3,0,-.15,0),g(r,e.skinColor,.13,.11,.09,0,-.32,0),g(l,e.skinColor,.13,.11,.09,0,-.32,0),e.hasPhone){const M=new K({color:1118484}),v=new B(new Q(.11,.19,.013),M);v.position.set(.01,-.38,.05),l.add(v);const R=new K({color:2767445,emissive:1714756}),A=new B(new ht(.085,.15),R);A.position.set(0,0,.008),v.add(A)}x(c,e.pantsColor,.11,.46,0,-.23,0),x(u,e.pantsColor,.11,.46,0,-.23,0),x(h,e.pantsColor,.09,.42,0,-.21,0),x(d,e.pantsColor,.09,.42,0,-.21,0),g(h,1710616,.19,.12,.24,0,-.46,.03),g(d,1710616,.19,.12,.24,0,-.46,.03),x(n,e.skinColor,.09,.16,0,-.08,0),m(n,e.skinColor,.21,0,.1,0),g(n,2236962,.055,.035,.02,-.07,.12,.2),g(n,2236962,.055,.035,.02,.07,.12,.2),this._buildHair(n,e,f),e.glassesColor!==void 0&&g(n,e.glassesColor,.24,.055,.015,0,.12,.21),e.helmetColor!==void 0&&(g(n,e.helmetColor,.5,.07,.5,0,.25,-.01),g(n,e.helmetColor,.38,.18,.38,0,.34,-.01))}_buildHair(e,t,i){const n=i(t.hairColor),s=(r,a,l,c)=>{const h=new B(r,n);h.position.set(a,l,c),e.add(h)};switch(t.hairStyle){case"short":case"silver":s(new dt(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),t.hairStyle==="silver"&&(s(new Q(.11,.18,.13),-.19,.06,0),s(new Q(.11,.18,.13),.19,.06,0));break;case"dreadlocks":s(new dt(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0);for(const[r,a]of[[-.12,0],[.12,0],[0,-.16],[-.08,-.1],[.08,-.1]])s(new We(.035,.022,.38,6),r,-.07,a);break;case"mohawk":s(new Q(.09,.26,.4),0,.28,0);break;case"bun":s(new dt(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),s(new dt(.09,7,6),0,.05,-.19);break;case"topknot":{s(new dt(.215,8,5,0,Math.PI*2,0,Math.PI*.45),0,.08,0);const r=new B(new We(.06,.08,.18,7),n);r.position.set(0,.3,0),e.add(r),s(new dt(.085,7,6),0,.41,0);const a=new K({color:1118481}),l=new B(new Ao(.075,.018,6,10),a);l.rotation.x=Math.PI/2,l.position.set(0,.29,0),e.add(l);break}case"wildblonde":{s(new dt(.225,8,5,0,Math.PI*2,0,Math.PI*.55),0,.1,0);const r=[[-.2,-.18,.04,.3,0],[.2,-.18,.04,-.3,0],[-.14,-.22,-.14,.2,.15],[.14,-.22,-.14,-.2,.15],[0,-.26,-.18,0,0],[-.1,-.16,.16,-.15,0],[.1,-.16,.16,.15,0]];for(const[a,l,c,h,u]of r){const d=new B(new We(.045,.02,.5,5),n);d.position.set(a,l,c),d.rotation.z=h,d.rotation.x=u,e.add(d)}break}}}setLogoTexture(e){const t=this.logoMesh.material;t.map=e,t.needsUpdate=!0}_makeLogo(e){return sh(e.shirtColor)}_buildWalkClip(){const e=Math.PI/180,t=.8,i=[0,.2,.4,.6,.8],n=(s,r=0,a=0)=>Array.from(new qt().setFromEuler(new Ht(s*e,r*e,a*e)).toArray());return new fs("walk",t,[new mt("LHip.quaternion",i,[...n(-35),...n(0),...n(35),...n(0),...n(-35)]),new mt("RHip.quaternion",i,[...n(35),...n(0),...n(-35),...n(0),...n(35)]),new mt("LKnee.quaternion",i,[...n(-5),...n(-18),...n(-28),...n(-12),...n(-5)]),new mt("RKnee.quaternion",i,[...n(-28),...n(-12),...n(-5),...n(-18),...n(-28)]),new mt("LShoulder.quaternion",i,[...n(28,0,8),...n(0,0,8),...n(-28,0,8),...n(0,0,8),...n(28,0,8)]),new mt("RShoulder.quaternion",i,[...n(-28,0,-8),...n(0,0,-8),...n(28,0,-8),...n(0,0,-8),...n(-28,0,-8)]),new mt("Hip.quaternion",i,[...n(0,0,4),...n(0,0,0),...n(0,0,-4),...n(0,0,0),...n(0,0,4)]),new an("Hip.position",i,[0,1.02,0,0,1,0,0,1.02,0,0,1,0,0,1.02,0])])}_buildIdleClip(){const e=Math.PI/180,t=2.4,i=[0,.6,1.2,1.8,2.4],n=(s,r=0,a=0)=>Array.from(new qt().setFromEuler(new Ht(s*e,r*e,a*e)).toArray());return new fs("idle",t,[new mt("Spine.quaternion",i,[...n(0,0,1),...n(0,0,0),...n(0,0,-1),...n(0,0,0),...n(0,0,1)]),new an("Hip.position",i,[0,1,0,0,1.01,0,0,1,0,0,.99,0,0,1,0]),new mt("LShoulder.quaternion",[0,2.4],[...n(0,0,8),...n(0,0,8)]),new mt("RShoulder.quaternion",[0,2.4],[...n(0,0,-8),...n(0,0,-8)])])}buildJumpRopeClip(){const e=Math.PI/180,t=ah,i=[0,.225,.45,.675,.9],n=(s,r=0,a=0)=>Array.from(new qt().setFromEuler(new Ht(s*e,r*e,a*e)).toArray());return new fs("jumprope",t,[new an("Hip.position",i,[0,1,0,0,1.28,0,0,1,0,0,1.28,0,0,1,0]),new mt("LShoulder.quaternion",[0,.5],[...n(0,0,52),...n(0,0,52)]),new mt("RShoulder.quaternion",[0,.5],[...n(0,0,-52),...n(0,0,-52)]),new mt("LForeArm.quaternion",[0,.5],[...n(-20),...n(-20)]),new mt("RForeArm.quaternion",[0,.5],[...n(-20),...n(-20)]),new mt("LKnee.quaternion",i,[...n(-22),...n(-5),...n(-22),...n(-5),...n(-22)]),new mt("RKnee.quaternion",i,[...n(-22),...n(-5),...n(-22),...n(-5),...n(-22)]),new mt("Spine.quaternion",i,[...n(8),...n(2),...n(8),...n(2),...n(8)])])}setWalking(e){const t=e?this.walkAction:this.idleAction;t!==this.currentAction&&(t.reset().play(),this.currentAction.crossFadeTo(t,.2,!1),this.currentAction=t)}update(e){this.mixer.update(e)}}const og={Jose:{x:-80,z:-40},Jarrad:{x:40,z:-80},Matt:{x:80,z:40},Phil:{x:-40,z:80},Tsuyoshi:{x:120,z:-40},Fabio:{x:-120,z:40},Joe:{x:0,z:-120}},rg={Matt:["Troweled Earth is the best product on the market. Full stop. Don't argue.","Jose has a whole music room and a cigar collection but can't reply to a text message. That's the guy.","I've been up since 4am and done 80 square metres. How's your morning?","Jarrad's got opinions on how everyone else lives their life. Zero opinions on his own. Interesting.","Antique Stucco, Hemp Render, Tadelakt — I'll do all three before lunch.","Jose called himself Wall Jesus in front of a client. An actual client. I was standing right there.","Jarrad once sent me a 400-word message about something I said. I read the first line. Seemed about right.","Right. Tools out. Let's get this done."],Jose:["I didn't apply plaster. I gave the wall a soul. Big difference.","Matt is a great man. Big heart. Absolutely no volume control. You can hear him from the next suburb.","I was in my music room last night finishing a track. Then I invented a new finish. Big night.","My cigar costs more than your primer. It is worth it.","Jarrad sends meeting agendas. For conversations. Between two people. In a van.","Wall Jesus doesn't do touch-ups. Wall Jesus does originals.","Matt apologises for nothing. I respect it. Also it is sometimes a problem.","Other plasterers apply product. I apply vision. Light a cigar and watch."],Jarrad:["Been waiting fifteen minutes. Did you read the TDS? Because I did. Twice.","Hang on — just finishing something.","Jose has a whole spiritual identity built around being mysterious. He's from Footscray. I looked it up.","I'm not micro-managing. I'm preventing the disaster you are about to cause.","Matt once introduced himself to a client by saying 'I don't do small talk'. To their face. At the door.","Have you seen my sister? She's supposed to be here. She's doing jump rope.","I would do it myself but then nothing else would get done. Look, I've already typed up a plan.","Mikayla borrowed my trowel again. I have a spare. I'm not lending that one either.","This is interesting. Have you heard of this Epstein list thing?","Who designed this waypoint system? Actually — don't answer that. I'll figure it out."],Phil:["I've been in this game longer than some of these buildings.","Back in my day we didn't have sealers. We just hoped.","Forty years in plaster. My knees disagree with the timeline.","That's a nice van. My first van had a hole in the floor.","The youngsters think Marbellino is new. I did it before it had a name.","Seven year warranty. I've outlasted three of those already.","If the surface isn't right, no product will fix it. That's wisdom.","I'm too old for emergencies. Call Darren."],Tsuyoshi:["My trowel... she is like samurai sword. Must be respected.","In Japan, we say... actually this is different in Australia. But same feeling.","I study engineering. Also I study this wall. Both are... very complex.","The angle of application is most important. Like blade angle. Very critical.","I think about the wall much. The wall also thinks, I believe.","This surface... it is speaking to me. I will listen before I apply.","My sensei say: good craftsman blame tool. But I never blame my trowel. She is perfect.","One day I will design the building. And also I will plaster it. Both very satisfying."],Fabio:["Ehhhh — in Italy, we do not rush the plaster. She knows when she is ready.","I am Fabio. You have heard of me, yes? Ehhhh — of course you have.","Last night I find a pizza place — thin base, wood fire, proper San Marzano. Ehhhh. I almost cry.","I have plastered villas in Tuscany. This job is also... acceptable. Ehhhh.","The colour must be chosen with the soul, not the brain. Ehhhh — the brain is for pizza toppings.","I put my heart into every wall. Same as I put my heart into a good margherita. Ehhhh.","Madonna mia, this surface has potential. Not as much potential as a good pizza, but still.","Other men apply plaster. Fabio makes love to the wall. Artistically speaking. Ehhhh.","You want to know the secret of perfect render? Patience. Same as perfect pizza dough. Ehhhh — same thing.","I carry my trowel like a man carries his last slice. With respect. With both hands."],Joe:["Don't judge me by the helmet. I contain multitudes.","Good honest work. That's all any of us can do.","I don't talk politics on site. But I do have a bumper sticker.","Hard work, good product, fair pay. That's the whole philosophy.","Free Palestine. That's all I'll say. Back to work.","I've been boycotting certain brands for three years. You'd be surprised.","The helmet stays on. Most of the opinions stay in.","Solid crew. Good product. Just don't ask me about the news."]},ag=15,lg=12e3;class cg{constructor(e){E(this,"scene");E(this,"crewMap",new Map);E(this,"lastDialogue",new Map);E(this,"dialogueIndex",new Map);this.scene=e}spawnCrewAtCityPositions(){for(const[e,t]of Object.entries(og)){const i=ki[e];if(!i)continue;const n=new Ts(i);n.group.scale.set(2,2,2);const s=new Ne;s.add(n.group);const r=new B(new dn(1.2,1.6,32),new Ot({color:16763904,side:Nt}));r.rotation.x=-Math.PI/2,r.position.y=.05,s.add(r);const a=document.createElement("canvas");a.width=256,a.height=64;const l=a.getContext("2d");l.fillStyle="rgba(0,0,0,0.75)",l.roundRect?l.roundRect(2,2,252,60,8):l.rect(2,2,252,60),l.fill(),l.fillStyle="#fff",l.font="bold 30px Arial",l.textAlign="center",l.textBaseline="middle",l.fillText(e.toUpperCase(),128,32);const c=new B(new ht(2.2,.55),new Ot({map:new Ss(a),transparent:!0,depthWrite:!1}));c.position.set(0,8.5,0),c.renderOrder=1,s.add(c),s.position.set(t.x,0,t.z),this.scene.add(s),this.crewMap.set(e,{character:n,wrapper:s,pos:t}),this.lastDialogue.set(e,0),this.dialogueIndex.set(e,Math.floor(Math.random()*8))}}updateAll(e){for(const{character:t}of this.crewMap.values())t.update(e)}checkProximityDialogue(e,t){const i=Date.now();for(const[n,{wrapper:s,pos:r}]of this.crewMap.entries()){if(!s.visible)continue;const a=e-r.x,l=t-r.z;if(Math.sqrt(a*a+l*l)>ag)continue;const c=this.lastDialogue.get(n)??0;if(i-c<lg)continue;const h=rg[n];if(!h)continue;const u=this.dialogueIndex.get(n)??0,d=h[u%h.length];return this.dialogueIndex.set(n,u+1),this.lastDialogue.set(n,i),{name:n,line:d,pos:r}}return null}hideCrew(e){const t=this.crewMap.get(e);t&&(t.wrapper.visible=!1)}showAllCrew(){for(const{wrapper:e}of this.crewMap.values())e.visible=!0}showCrew(e){const t=this.crewMap.get(e);t&&(t.wrapper.visible=!0)}getCrewPosition(e){var t;return((t=this.crewMap.get(e))==null?void 0:t.pos)??{x:0,z:0}}dispose(){for(const{wrapper:e}of this.crewMap.values())this.scene.remove(e);this.crewMap.clear()}}class hg{constructor(e){E(this,"mesh");E(this,"velocity",new L);E(this,"heading",0);E(this,"bodyGroup");E(this,"suspensionY",0);E(this,"suspensionVel",0);this.mesh=new Ne,this.bodyGroup=new Ne,this.mesh.add(this.bodyGroup);const t=new K({color:1118481}),i=new B(new Q(2.4,1.6,3.2),t);i.position.set(0,.8,.8),i.castShadow=!0,i.receiveShadow=!0,this.bodyGroup.add(i);const n=new K({color:1579032}),s=new B(new Q(2.4,1.4,1.6),n);s.position.set(0,.7,-1.6),s.castShadow=!0,s.receiveShadow=!0,this.bodyGroup.add(s);const r=new K({color:2241348}),a=new B(new Q(2,1,.1),r);a.rotation.x=-.18,a.position.set(0,1.15,-2.36),a.castShadow=!0,a.receiveShadow=!0,this.bodyGroup.add(a);const l=new K({color:1381653}),c=new B(new Q(2.3,.15,4.6),l);c.position.set(0,1.675,0),c.castShadow=!0,c.receiveShadow=!0,this.bodyGroup.add(c);const h=new K({color:12674667}),u=new B(new Q(.05,.35,3),h);u.position.set(-1.23,.85,.5),u.castShadow=!0,u.receiveShadow=!0,this.bodyGroup.add(u);const d=new B(new Q(.05,.35,3),h);d.position.set(1.23,.85,.5),d.castShadow=!0,d.receiveShadow=!0,this.bodyGroup.add(d);const f=new K({color:3359829}),g=new B(new Q(.05,.4,.5),f);g.position.set(-1.22,1.1,-1.7),g.castShadow=!0,g.receiveShadow=!0,this.bodyGroup.add(g);const x=new B(new Q(.05,.4,.5),f);x.position.set(1.22,1.1,-1.7),x.castShadow=!0,x.receiveShadow=!0,this.bodyGroup.add(x);const m=new K({color:3355443});for(const Te of[-.3,.3]){const ue=new B(new Q(.05,1.4,.1),m);ue.position.set(Te,.8,2.46),ue.castShadow=!0,ue.receiveShadow=!0,this.bodyGroup.add(ue)}const p=new K({color:526344}),y=new B(new Q(.04,1.6,.05),p);y.position.set(-1.22,.8,-.8),this.bodyGroup.add(y);const M=new B(new Q(.04,1.6,.05),p);M.position.set(1.22,.8,-.8),this.bodyGroup.add(M);const v=new B(new Q(2.4,.04,.05),p);v.position.set(0,1.58,-.8),this.bodyGroup.add(v);const R=new K({color:1118481}),A=new K({color:3359829});for(const Te of[-1,1]){const ue=Te*1.3,Ee=new B(new Q(.18,.12,.22),R);Ee.position.set(ue,1.1,-1.7),this.bodyGroup.add(Ee);const $e=new B(new Q(.08,.1,.18),A);$e.position.set(ue+Te*.05,1.1,-1.7),this.bodyGroup.add($e)}const C=new K({color:3355443});for(const Te of[-.15,-.85]){const ue=new B(new Q(2.1,.07,.07),C);ue.position.set(0,1.78,Te),this.bodyGroup.add(ue)}for(const Te of[-.95,.95]){const ue=new B(new Q(.05,.05,.7),C);ue.position.set(Te,1.78,-.5),this.bodyGroup.add(ue)}const I=oh(512),w=new K({map:I,transparent:!0,depthWrite:!1}),b=new B(new ht(2,3.8),w);b.rotation.x=-Math.PI/2,b.position.set(0,1.8,.9),this.bodyGroup.add(b);const P=new K({color:8947848});for(const Te of[-.6,.6]){const ue=new B(new Q(.06,.06,.14),P);ue.position.set(Te,.85,2.52),this.bodyGroup.add(ue)}const G=new B(new Q(2.4,.04,.06),p);G.position.set(0,1.2,2.47),this.bodyGroup.add(G);const O=new K({color:16733440}),W=new K({color:1118481}),j=new B(new Q(.05,.22,.82),O);j.position.set(-1.255,.86,.36),this.bodyGroup.add(j);const Y=new B(new Q(.06,.05,.16),W);Y.position.set(-1.262,.96,.12),this.bodyGroup.add(Y);const X=new B(new Q(.06,.15,.05),W);X.position.set(-1.262,.86,.12),this.bodyGroup.add(X);const z=new B(new Q(.06,.18,.05),W);z.position.set(-1.262,.86,.38),this.bodyGroup.add(z);const ie=new B(new Q(.06,.04,.13),W);ie.position.set(-1.262,.95,.445),this.bodyGroup.add(ie);const de=new B(new Q(.06,.04,.1),W);de.position.set(-1.262,.86,.43),this.bodyGroup.add(de);const ye=new B(new Q(.06,.04,.13),W);ye.position.set(-1.262,.77,.445),this.bodyGroup.add(ye);const re=new B(new Q(.06,.18,.05),W);re.position.set(-1.262,.86,.61),this.bodyGroup.add(re);const Ie=new B(new Q(.06,.18,.05),W);Ie.position.set(-1.262,.86,.73),this.bodyGroup.add(Ie);const q=new B(new Q(.06,.08,.13),W);q.position.set(-1.262,.92,.67),this.bodyGroup.add(q);const ne=new B(new Q(.05,.22,.82),O);ne.position.set(1.255,.86,.36),this.bodyGroup.add(ne);const ge=new We(.38,.38,.28,10),ae=new K({color:1118481}),Pe=new K({color:8947848}),Le=[[-1.25,.38,-1.2,-1],[1.25,.38,-1.2,1],[-1.25,.38,1.3,-1],[1.25,.38,1.3,1]];for(const[Te,ue,Ee,$e]of Le){const Ae=new B(ge,ae);Ae.rotation.z=Math.PI/2,Ae.position.set(Te,ue,Ee),Ae.castShadow=!0,Ae.receiveShadow=!0,this.mesh.add(Ae);const T=new We(.2,.2,.06,10),_=new B(T,Pe);_.rotation.z=Math.PI/2,_.position.set(Te+$e*.15,ue,Ee),_.castShadow=!0,_.receiveShadow=!0,this.mesh.add(_);const k=new K({color:3355443}),Z=new B(new We(.36,.38,.06,10),k);Z.rotation.z=Math.PI/2,Z.position.set(Te+$e*.2,ue,Ee),this.mesh.add(Z);const te=new K({color:1118481}),J=new B(new Q(.14,.1,.82),te);J.position.set(Te+$e*.07,ue+.3,Ee),this.bodyGroup.add(J)}const Ve=new K({color:16777181,emissive:16777181,emissiveIntensity:.8});for(const Te of[-.8,.8]){const ue=new B(new Q(.35,.2,.08),Ve);ue.position.set(Te,.75,-2.41),ue.castShadow=!0,ue.receiveShadow=!0,this.bodyGroup.add(ue)}const at=new Ot({color:16777164,transparent:!0,opacity:.08,side:Rt}),Xe=new Ni(1.5,8,8,1,!0);for(const Te of[-.6,.6]){const ue=new B(Xe,at);ue.rotation.x=Math.PI/2,ue.position.set(Te,.7,-3),this.bodyGroup.add(ue)}const ft=new K({color:16720384,emissive:16720384,emissiveIntensity:.8});for(const Te of[-.8,.8]){const ue=new B(new Q(.3,.18,.06),ft);ue.position.set(Te,.75,2.47),ue.castShadow=!0,ue.receiveShadow=!0,this.bodyGroup.add(ue)}const N=new K({color:3355443}),St=new B(new Q(2,.08,.8),N);St.position.set(0,1.77,-.5),St.castShadow=!0,St.receiveShadow=!0,this.bodyGroup.add(St),this.mesh.position.set(0,0,0),e.add(this.mesh)}triggerBump(e){this.suspensionVel=-e*6}updateSuspension(e){const t=-80*this.suspensionY-10*this.suspensionVel;this.suspensionVel+=t*e,this.suspensionY+=this.suspensionVel*e,this.suspensionY=Math.max(-.35,Math.min(.35,this.suspensionY)),this.bodyGroup.position.y=this.suspensionY,this.bodyGroup.rotation.z=-this.suspensionY*.08}get suspensionMagnitude(){return Math.abs(this.suspensionY)+Math.abs(this.suspensionVel)*.04}}const ai={maxSpeed:80,acceleration:55,reverseForce:45,friction:.985,steerRate:2.8,minSpeedToSteer:.5,gripAtLowSpeed:7,gripAtHighSpeed:1.2},ql=40,dg=4,ug=30,fg=.8;function pg(o){for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;return o}function mg(o){return Math.round(o/ql)*ql}function Yl(o,e){let t=0;const i=mg((o+e)*.5);for(const n of[-1,1]){const s=i+n*dg;(o-s)*(e-s)<0&&t++}return t}class gg{constructor(e,t,i,n,s){E(this,"van");E(this,"input");E(this,"_speed",0);E(this,"velocityAngle",0);E(this,"prevPos",new L);E(this,"onBump");E(this,"onBuildingHit");E(this,"collisionWorld");E(this,"COLL_GRID",40);E(this,"COLL_ROAD_HALF",6.5);this.van=e,this.input=t,this.onBump=i,this.collisionWorld=n,this.onBuildingHit=s,this.velocityAngle=this.van.heading,this.prevPos.copy(this.van.mesh.position)}get speed(){return this._speed}update(e){var l;this.prevPos.copy(this.van.mesh.position);const t=Math.abs(this._speed);if(this.input.forward&&(this._speed+=ai.acceleration*e),this.input.brake&&(this._speed-=ai.reverseForce*e),this._speed*=Math.pow(ai.friction,e*60),this._speed=Math.max(-80*.5,Math.min(ai.maxSpeed,this._speed)),t>ai.minSpeedToSteer){const c=this.input.left?-1:this.input.right?1:Math.abs(this.input.steerAxis)>.1?this.input.steerAxis:0,h=Math.min(1,t/15);this.van.heading+=c*ai.steerRate*h*Math.sign(this._speed)*e}const i=Math.min(t/ai.maxSpeed,1),n=ai.gripAtLowSpeed+(ai.gripAtHighSpeed-ai.gripAtLowSpeed)*i,s=pg(this.van.heading-this.velocityAngle);this.velocityAngle+=s*n*e;const r=new L(Math.sin(this.velocityAngle),0,-Math.cos(this.velocityAngle));this.van.velocity.copy(r).multiplyScalar(this._speed),this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(e)),this.van.mesh.rotation.y=-this.van.heading;const a=245;if(this.van.mesh.position.x=Math.max(-a,Math.min(a,this.van.mesh.position.x)),this.van.mesh.position.z=Math.max(-a,Math.min(a,this.van.mesh.position.z)),this.collisionWorld){const c=this.collisionWorld.resolveCircle(this.van.mesh.position.x,this.van.mesh.position.z,1.8);(c.x!==this.van.mesh.position.x||c.z!==this.van.mesh.position.z)&&(this._speed*=.65,(l=this.onBuildingHit)==null||l.call(this),this.van.mesh.position.x=c.x,this.van.mesh.position.z=c.z)}this._checkCurbCrossings()}distToNearestRoad(e){const t=(e%this.COLL_GRID+this.COLL_GRID)%this.COLL_GRID;return Math.min(t,this.COLL_GRID-t)}isOnRoad(e,t){const i=this.distToNearestRoad(e),n=this.distToNearestRoad(t);return i<this.COLL_ROAD_HALF||n<this.COLL_ROAD_HALF}resolveCollision(e,t,i,n){return this.isOnRoad(i,n)?{x:i,z:n}:this.isOnRoad(e,n)?{x:e,z:n}:this.isOnRoad(i,t)?{x:i,z:t}:{x:e,z:t}}applyImpulse(e,t){this._speed*=.5,this.van.mesh.position.x+=e*.1,this.van.mesh.position.z+=t*.1}_checkCurbCrossings(){const e=this.van.mesh.position,t=this.prevPos,i=Yl(t.x,e.x),n=Yl(t.z,e.z);if(i+n===0)return;const a=Math.abs(this._speed)/ug,l=Math.max(fg,Math.min(1,a));this.van.triggerBump(l),this._speed*=.85,this.onBump&&this.onBump(l)}}const co=(o,e)=>{const t=e.x-o.x,i=e.y-o.y;return Math.sqrt(t*t+i*i)},xg=(o,e)=>{const t=e.x-o.x,i=e.y-o.y;return _g(Math.atan2(i,t))},vg=(o,e,t)=>{const i={x:0,y:0};return t=oa(t),i.x=o.x-e*Math.cos(t),i.y=o.y-e*Math.sin(t),i},oa=o=>o*(Math.PI/180),_g=o=>o*(180/Math.PI),yg=o=>isNaN(o.buttons)?o.pressure!==0:o.buttons!==0,hr=new Map,jl=o=>{hr.has(o)&&clearTimeout(hr.get(o)),hr.set(o,setTimeout(o,100))},yo=(o,e,t)=>{const i=e.split(/[ ,]+/g);let n;for(let s=0;s<i.length;s+=1)n=i[s],o.addEventListener?o.addEventListener(n,t,!1):o.attachEvent&&o.attachEvent(n,t)},$l=(o,e,t)=>{const i=e.split(/[ ,]+/g);let n;for(let s=0;s<i.length;s+=1)n=i[s],o.removeEventListener?o.removeEventListener(n,t):o.detachEvent&&o.detachEvent(n,t)},lh=o=>(o.preventDefault(),o.type.match(/^touch/)?o.changedTouches:o),Jl=()=>{const o=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:o,y:e}},Kl=(o,e)=>{e.top||e.right||e.bottom||e.left?(o.style.top=e.top,o.style.right=e.right,o.style.bottom=e.bottom,o.style.left=e.left):(o.style.left=e.x+"px",o.style.top=e.y+"px")},La=(o,e,t)=>{const i=ch(o);for(let n in i)if(i.hasOwnProperty(n))if(typeof e=="string")i[n]=e+" "+t;else{let s="";for(let r=0,a=e.length;r<a;r+=1)s+=e[r]+" "+t+", ";i[n]=s.slice(0,-2)}return i},bg=(o,e)=>{const t=ch(o);for(let i in t)t.hasOwnProperty(i)&&(t[i]=e);return t},ch=o=>{const e={};return e[o]="",["webkit","Moz","o"].forEach(function(i){e[i+o.charAt(0).toUpperCase()+o.slice(1)]=""}),e},dr=(o,e)=>{for(let t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o},wg=(o,e)=>{const t={};for(let i in o)o.hasOwnProperty(i)&&e.hasOwnProperty(i)?t[i]=e[i]:o.hasOwnProperty(i)&&(t[i]=o[i]);return t},ra=(o,e)=>{if(o.length)for(let t=0,i=o.length;t<i;t+=1)e(o[t]);else e(o)},Mg=(o,e,t)=>({x:Math.min(Math.max(o.x,e.x-t),e.x+t),y:Math.min(Math.max(o.y,e.y-t),e.y+t)});var Sg="ontouchstart"in window,Eg=!!window.PointerEvent,Tg=!!window.MSPointerEvent,as={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},Ln,ys={};Eg?Ln=as.pointer:Tg?Ln=as.MSPointer:Sg?(Ln=as.touch,ys=as.mouse):Ln=as.mouse;function Ai(){}Ai.prototype.on=function(o,e){var t=this,i=o.split(/[ ,]+/g),n;t._handlers_=t._handlers_||{};for(var s=0;s<i.length;s+=1)n=i[s],t._handlers_[n]=t._handlers_[n]||[],t._handlers_[n].push(e);return t};Ai.prototype.off=function(o,e){var t=this;return t._handlers_=t._handlers_||{},o===void 0?t._handlers_={}:e===void 0?t._handlers_[o]=null:t._handlers_[o]&&t._handlers_[o].indexOf(e)>=0&&t._handlers_[o].splice(t._handlers_[o].indexOf(e),1),t};Ai.prototype.trigger=function(o,e){var t=this,i=o.split(/[ ,]+/g),n;t._handlers_=t._handlers_||{};for(var s=0;s<i.length;s+=1)n=i[s],t._handlers_[n]&&t._handlers_[n].length&&t._handlers_[n].forEach(function(r){r.call(t,{type:n,target:t},e)})};Ai.prototype.config=function(o){var e=this;e.options=e.defaults||{},o&&(e.options=wg(e.options,o))};Ai.prototype.bindEvt=function(o,e){var t=this;return t._domHandlers_=t._domHandlers_||{},t._domHandlers_[e]=function(){typeof t["on"+e]=="function"?t["on"+e].apply(t,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},yo(o,Ln[e],t._domHandlers_[e]),ys[e]&&yo(o,ys[e],t._domHandlers_[e]),t};Ai.prototype.unbindEvt=function(o,e){var t=this;return t._domHandlers_=t._domHandlers_||{},$l(o,Ln[e],t._domHandlers_[e]),ys[e]&&$l(o,ys[e],t._domHandlers_[e]),delete t._domHandlers_[e],this};function bt(o,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=o,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=bt.id,bt.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}bt.prototype=new Ai;bt.constructor=bt;bt.id=0;bt.prototype.buildEl=function(o){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};bt.prototype.stylize=function(){if(this.options.dataOnly)return this;var o=this.options.fadeTime+"ms",e=bg("borderRadius","50%"),t=La("transition","opacity",o),i={};return i.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},i.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},i.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},dr(i.el,t),this.options.shape==="circle"&&dr(i.back,e),dr(i.front,e),this.applyStyles(i),this};bt.prototype.applyStyles=function(o){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var t in o[e])this.ui[e].style[t]=o[e][t];return this};bt.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};bt.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};bt.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};bt.prototype.show=function(o){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof o=="function"&&o.call(this)},e.options.fadeTime)),e};bt.prototype.hide=function(o){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var t=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=t,typeof o=="function"&&o.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){const t=e.options.restJoystick,i={};i.x=t===!0||t.x!==!1?0:e.instance.frontPosition.x,i.y=t===!0||t.y!==!1?0:e.instance.frontPosition.y,e.setPosition(o,i)}return e};bt.prototype.setPosition=function(o,e){var t=this;t.frontPosition={x:e.x,y:e.y};var i=t.options.fadeTime+"ms",n={};n.front=La("transition",["transform"],i);var s={front:{}};s.front={transform:"translate("+t.frontPosition.x+"px,"+t.frontPosition.y+"px)"},t.applyStyles(n),t.applyStyles(s),t.restTimeout=setTimeout(function(){typeof o=="function"&&o.call(t),t.restCallback()},t.options.fadeTime)};bt.prototype.restCallback=function(){var o=this,e={};e.front=La("transition","none",""),o.applyStyles(e),o.trigger("rested",o.instance)};bt.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};bt.prototype.computeDirection=function(o){var e=o.angle.radian,t=Math.PI/4,i=Math.PI/2,n,s,r;if(e>t&&e<t*3&&!o.lockX?n="up":e>-t&&e<=t&&!o.lockY?n="left":e>-t*3&&e<=-t&&!o.lockX?n="down":o.lockY||(n="right"),o.lockY||(e>-i&&e<i?s="left":s="right"),o.lockX||(e>0?r="up":r="down"),o.force>this.options.threshold){var a={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(a[l]=this.direction[l]);var c={};this.direction={x:s,y:r,angle:n},o.direction=this.direction;for(l in a)a[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return o;(!c.x||!c.y)&&this.trigger("plain",o),c.x||this.trigger("plain:"+s,o),c.y||this.trigger("plain:"+r,o),c.angle||this.trigger("dir dir:"+n,o)}else this.resetDirection();return o};function gt(o,e){var t=this;t.nipples=[],t.idles=[],t.actives=[],t.ids=[],t.pressureIntervals={},t.manager=o,t.id=gt.id,gt.id+=1,t.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},t.config(e),(t.options.mode==="static"||t.options.mode==="semi")&&(t.options.multitouch=!1),t.options.multitouch||(t.options.maxNumberOfNipples=1);const i=getComputedStyle(t.options.zone.parentElement);return i&&i.display==="flex"&&(t.parentIsFlex=!0),t.updateBox(),t.prepareNipples(),t.bindings(),t.begin(),t.nipples}gt.prototype=new Ai;gt.constructor=gt;gt.id=0;gt.prototype.prepareNipples=function(){var o=this,e=o.nipples;e.on=o.on.bind(o),e.off=o.off.bind(o),e.options=o.options,e.destroy=o.destroy.bind(o),e.ids=o.ids,e.id=o.id,e.processOnMove=o.processOnMove.bind(o),e.processOnEnd=o.processOnEnd.bind(o),e.get=function(t){if(t===void 0)return e[0];for(var i=0,n=e.length;i<n;i+=1)if(e[i].identifier===t)return e[i];return!1}};gt.prototype.bindings=function(){var o=this;o.bindEvt(o.options.zone,"start"),o.options.zone.style.touchAction="none",o.options.zone.style.msTouchAction="none"};gt.prototype.begin=function(){var o=this,e=o.options;if(e.mode==="static"){var t=o.createNipple(e.position,o.manager.getIdentifier());t.add(),o.idles.push(t)}};gt.prototype.createNipple=function(o,e){var t=this,i=t.manager.scroll,n={},s=t.options,r={x:t.parentIsFlex?i.x:i.x+t.box.left,y:t.parentIsFlex?i.y:i.y+t.box.top};if(o.x&&o.y)n={x:o.x-r.x,y:o.y-r.y};else if(o.top||o.right||o.bottom||o.left){var a=document.createElement("DIV");a.style.display="hidden",a.style.top=o.top,a.style.right=o.right,a.style.bottom=o.bottom,a.style.left=o.left,a.style.position="absolute",s.zone.appendChild(a);var l=a.getBoundingClientRect();s.zone.removeChild(a),n=o,o={x:l.left+i.x,y:l.top+i.y}}var c=new bt(t,{color:s.color,size:s.size,threshold:s.threshold,fadeTime:s.fadeTime,dataOnly:s.dataOnly,restJoystick:s.restJoystick,restOpacity:s.restOpacity,mode:s.mode,identifier:e,position:o,zone:s.zone,frontPosition:{x:0,y:0},shape:s.shape});return s.dataOnly||(Kl(c.ui.el,n),Kl(c.ui.front,c.frontPosition)),t.nipples.push(c),t.trigger("added "+c.identifier+":added",c),t.manager.trigger("added "+c.identifier+":added",c),t.bindNipple(c),c};gt.prototype.updateBox=function(){var o=this;o.box=o.options.zone.getBoundingClientRect()};gt.prototype.bindNipple=function(o){var e=this,t,i=function(n,s){t=n.type+" "+s.id+":"+n.type,e.trigger(t,s)};o.on("destroyed",e.onDestroyed.bind(e)),o.on("shown hidden rested dir plain",i),o.on("dir:up dir:right dir:down dir:left",i),o.on("plain:up plain:right plain:down plain:left",i)};gt.prototype.pressureFn=function(o,e,t){var i=this,n=0;clearInterval(i.pressureIntervals[t]),i.pressureIntervals[t]=setInterval((function(){var s=o.force||o.pressure||o.webkitForce||0;s!==n&&(e.trigger("pressure",s),i.trigger("pressure "+e.identifier+":pressure",s),n=s)}).bind(i),100)};gt.prototype.onstart=function(o){var e=this,t=e.options,i=o;o=lh(o),e.updateBox();var n=function(s){e.actives.length<t.maxNumberOfNipples?e.processOnStart(s):i.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(r){if(Object.values(i.touches).findIndex(function(l){return l.identifier===r})<0){var a=[o[0]];a.identifier=r,e.processOnEnd(a)}}),e.actives.length<t.maxNumberOfNipples&&e.processOnStart(s))};return ra(o,n),e.manager.bindDocument(),!1};gt.prototype.processOnStart=function(o){var e=this,t=e.options,i,n=e.manager.getIdentifier(o),s=o.force||o.pressure||o.webkitForce||0,r={x:o.pageX,y:o.pageY},a=e.getOrCreate(n,r);a.identifier!==n&&e.manager.removeIdentifier(a.identifier),a.identifier=n;var l=function(h){h.trigger("start",h),e.trigger("start "+h.id+":start",h),h.show(),s>0&&e.pressureFn(o,h,h.identifier),e.processOnMove(o)};if((i=e.idles.indexOf(a))>=0&&e.idles.splice(i,1),e.actives.push(a),e.ids.push(a.identifier),t.mode!=="semi")l(a);else{var c=co(r,a.position);if(c<=t.catchDistance)l(a);else{a.destroy(),e.processOnStart(o);return}}return a};gt.prototype.getOrCreate=function(o,e){var t=this,i=t.options,n;return/(semi|static)/.test(i.mode)?(n=t.idles[0],n?(t.idles.splice(0,1),n):i.mode==="semi"?t.createNipple(e,o):(console.warn("Coudln't find the needed nipple."),!1)):(n=t.createNipple(e,o),n)};gt.prototype.processOnMove=function(o){var e=this,t=e.options,i=e.manager.getIdentifier(o),n=e.nipples.get(i),s=e.manager.scroll;if(!yg(o)){this.processOnEnd(o);return}if(!n){console.error("Found zombie joystick with ID "+i),e.manager.removeIdentifier(i);return}if(t.dynamicPage){var r=n.el.getBoundingClientRect();n.position={x:s.x+r.left,y:s.y+r.top}}n.identifier=i;var a=n.options.size/2,l={x:o.pageX,y:o.pageY};t.lockX&&(l.y=n.position.y),t.lockY&&(l.x=n.position.x);var c=co(l,n.position),h=xg(l,n.position),u=oa(h),d=c/a,f={distance:c,position:l},g,x;if(n.options.shape==="circle"?(g=Math.min(c,a),x=vg(n.position,g,h)):(x=Mg(l,n.position,a),g=co(x,n.position)),t.follow){if(c>a){let M=l.x-x.x,v=l.y-x.y;n.position.x+=M,n.position.y+=v,n.el.style.top=n.position.y-(e.box.top+s.y)+"px",n.el.style.left=n.position.x-(e.box.left+s.x)+"px",c=co(l,n.position)}}else l=x,c=g;var m=l.x-n.position.x,p=l.y-n.position.y;n.frontPosition={x:m,y:p},t.dataOnly||(n.ui.front.style.transform="translate("+m+"px,"+p+"px)");var y={identifier:n.identifier,position:l,force:d,pressure:o.force||o.pressure||o.webkitForce||0,distance:c,angle:{radian:u,degree:h},vector:{x:m/a,y:-p/a},raw:f,instance:n,lockX:t.lockX,lockY:t.lockY};y=n.computeDirection(y),y.angle={radian:oa(180-h),degree:180-h},n.trigger("move",y),e.trigger("move "+n.id+":move",y)};gt.prototype.processOnEnd=function(o){var e=this,t=e.options,i=e.manager.getIdentifier(o),n=e.nipples.get(i),s=e.manager.removeIdentifier(n.identifier);n&&(t.dataOnly||n.hide(function(){t.mode==="dynamic"&&(n.trigger("removed",n),e.trigger("removed "+n.id+":removed",n),e.manager.trigger("removed "+n.id+":removed",n),n.destroy())}),clearInterval(e.pressureIntervals[n.identifier]),n.resetDirection(),n.trigger("end",n),e.trigger("end "+n.id+":end",n),e.ids.indexOf(n.identifier)>=0&&e.ids.splice(e.ids.indexOf(n.identifier),1),e.actives.indexOf(n)>=0&&e.actives.splice(e.actives.indexOf(n),1),/(semi|static)/.test(t.mode)?e.idles.push(n):e.nipples.indexOf(n)>=0&&e.nipples.splice(e.nipples.indexOf(n),1),e.manager.unbindDocument(),/(semi|static)/.test(t.mode)&&(e.manager.ids[s.id]=s.identifier))};gt.prototype.onDestroyed=function(o,e){var t=this;t.nipples.indexOf(e)>=0&&t.nipples.splice(t.nipples.indexOf(e),1),t.actives.indexOf(e)>=0&&t.actives.splice(t.actives.indexOf(e),1),t.idles.indexOf(e)>=0&&t.idles.splice(t.idles.indexOf(e),1),t.ids.indexOf(e.identifier)>=0&&t.ids.splice(t.ids.indexOf(e.identifier),1),t.manager.removeIdentifier(e.identifier),t.manager.unbindDocument()};gt.prototype.destroy=function(){var o=this;o.unbindEvt(o.options.zone,"start"),o.nipples.forEach(function(t){t.destroy()});for(var e in o.pressureIntervals)o.pressureIntervals.hasOwnProperty(e)&&clearInterval(o.pressureIntervals[e]);o.trigger("destroyed",o.nipples),o.manager.unbindDocument(),o.off()};function Mt(o){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=Jl(),e.config(o),e.prepareCollections();var t=function(){var n;e.collections.forEach(function(s){s.forEach(function(r){n=r.el.getBoundingClientRect(),r.position={x:e.scroll.x+n.left,y:e.scroll.y+n.top}})})};yo(window,"resize",function(){jl(t)});var i=function(){e.scroll=Jl()};return yo(window,"scroll",function(){jl(i)}),e.collections}Mt.prototype=new Ai;Mt.constructor=Mt;Mt.prototype.prepareCollections=function(){var o=this;o.collections.create=o.create.bind(o),o.collections.on=o.on.bind(o),o.collections.off=o.off.bind(o),o.collections.destroy=o.destroy.bind(o),o.collections.get=function(e){var t;return o.collections.every(function(i){return t=i.get(e),!t}),t}};Mt.prototype.create=function(o){return this.createCollection(o)};Mt.prototype.createCollection=function(o){var e=this,t=new gt(e,o);return e.bindCollection(t),e.collections.push(t),t};Mt.prototype.bindCollection=function(o){var e=this,t,i=function(n,s){t=n.type+" "+s.id+":"+n.type,e.trigger(t,s)};o.on("destroyed",e.onDestroyed.bind(e)),o.on("shown hidden rested dir plain",i),o.on("dir:up dir:right dir:down dir:left",i),o.on("plain:up plain:right plain:down plain:left",i)};Mt.prototype.bindDocument=function(){var o=this;o.binded||(o.bindEvt(document,"move").bindEvt(document,"end"),o.binded=!0)};Mt.prototype.unbindDocument=function(o){var e=this;(!Object.keys(e.ids).length||o===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};Mt.prototype.getIdentifier=function(o){var e;return o?(e=o.identifier===void 0?o.pointerId:o.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};Mt.prototype.removeIdentifier=function(o){var e={};for(var t in this.ids)if(this.ids[t]===o){e.id=t,e.identifier=this.ids[t],delete this.ids[t];break}return e};Mt.prototype.onmove=function(o){var e=this;return e.onAny("move",o),!1};Mt.prototype.onend=function(o){var e=this;return e.onAny("end",o),!1};Mt.prototype.oncancel=function(o){var e=this;return e.onAny("end",o),!1};Mt.prototype.onAny=function(o,e){var t=this,i,n="processOn"+o.charAt(0).toUpperCase()+o.slice(1);e=lh(e);var s=function(a,l,c){c.ids.indexOf(l)>=0&&(c[n](a),a._found_=!0)},r=function(a){i=t.getIdentifier(a),ra(t.collections,s.bind(null,a,i)),a._found_||t.removeIdentifier(i)};return ra(e,r),!1};Mt.prototype.destroy=function(){var o=this;o.unbindDocument(!0),o.ids={},o.index=0,o.collections.forEach(function(e){e.destroy()}),o.off()};Mt.prototype.onDestroyed=function(o,e){var t=this;if(t.collections.indexOf(e)<0)return!1;t.collections.splice(t.collections.indexOf(e),1)};const Zl=new Mt,Ag={create:function(o){return Zl.create(o)},factory:Zl};class Cg{constructor(){E(this,"keys",{});E(this,"steerAxis",0);E(this,"accelerating",!1);E(this,"braking",!1);E(this,"horn",!1);E(this,"joystickManager",null);E(this,"hornTimeout",null);window.addEventListener("keydown",e=>{this.keys[e.code]=!0,e.code==="KeyH"&&this.triggerHorn()}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),this.setupMobileControls()}triggerHorn(){this.horn=!0,this.hornTimeout!==null&&clearTimeout(this.hornTimeout),this.hornTimeout=setTimeout(()=>{this.horn=!1,this.hornTimeout=null},300)}setupMobileControls(){const e=document.createElement("div");e.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 150px;
      height: 150px;
      z-index: 100;
      touch-action: none;
    `,document.body.appendChild(e),this.joystickManager=Ag.create({zone:e,mode:"static",position:{left:"75px",bottom:"75px"},color:"rgba(255, 255, 255, 0.6)",size:120,restOpacity:.5}),this.joystickManager.on("move",(s,r)=>{r.vector&&(this.steerAxis=r.vector.x)}),this.joystickManager.on("end",()=>{this.steerAxis=0});const t=document.createElement("div");t.style.cssText=`
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
    `,n.textContent="📯",document.body.appendChild(n),n.addEventListener("touchstart",s=>{s.preventDefault(),this.triggerHorn(),n.style.background="rgba(255, 200, 50, 0.95)",n.style.transform="scale(1.1)"},{passive:!1}),n.addEventListener("touchend",s=>{s.preventDefault(),n.style.background="rgba(255, 200, 50, 0.6)",n.style.transform="scale(1.0)"},{passive:!1})}get forward(){return this.keys.ArrowUp||this.keys.KeyW||this.accelerating}get backward(){return this.keys.ArrowDown||this.keys.KeyS}get left(){return this.keys.ArrowLeft||this.keys.KeyA||this.steerAxis<-.2}get right(){return this.keys.ArrowRight||this.keys.KeyD||this.steerAxis>.2}get brake(){return this.keys.Space||this.braking}get honk(){return this.horn}}class Rg{constructor(){E(this,"level",0);E(this,"spillRateMultiplier",1);E(this,"onSpill");E(this,"container");E(this,"fill");E(this,"bucketEl");E(this,"_warningIcon");E(this,"isShaking",!1);E(this,"spillFlashing",!1);if(!document.getElementById("spill-meter-styles")){const i=document.createElement("style");i.id="spill-meter-styles",i.textContent=`
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
      `,document.head.appendChild(i)}this.container=document.createElement("div"),Object.assign(this.container.style,{position:"fixed",left:"10px",top:"50%",transform:"translateY(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",zIndex:"999",userSelect:"none",pointerEvents:"none"}),this.bucketEl=document.createElement("span"),this.bucketEl.textContent="🪣",Object.assign(this.bucketEl.style,{fontSize:"26px",lineHeight:"1"}),this.container.appendChild(this.bucketEl);const e=document.createElement("div");Object.assign(e.style,{position:"relative",width:"16px",height:"130px",background:"rgba(40,40,40,0.85)",borderRadius:"8px",overflow:"hidden",border:"1.5px solid rgba(255,255,255,0.2)",boxShadow:"0 2px 8px rgba(0,0,0,0.6)"}),this.fill=document.createElement("div"),Object.assign(this.fill.style,{position:"absolute",bottom:"0",left:"0",width:"100%",height:"0%",borderRadius:"8px",transition:"height 0.05s linear",background:"#4caf50"}),e.appendChild(this.fill),this.container.appendChild(e);const t=document.createElement("div");t.textContent="🚨",Object.assign(t.style,{fontSize:"16px",lineHeight:"1",opacity:"0",transition:"opacity 0.3s"}),t._isWarning=!0,this.container.appendChild(t),this._warningIcon=t,document.body.appendChild(this.container),this.container.style.display="none"}setVisible(e){this.container.style.display=e?"flex":"none"}addSpill(e){this.level=Math.min(1,this.level+e)}update(e){var i;const t=this.level*100;if(this.fill.style.height=`${t}%`,this.level<.5){const n=this.level*2,s=Math.round(76+n*179),r=Math.round(175+n*60);this.fill.style.background=`linear-gradient(to right, rgb(${s},${r},50), rgb(${s},${r},50))`}else{const n=(this.level-.5)*2,s=255,r=Math.round(235-n*235);this.fill.style.background=`linear-gradient(to right, rgb(${s},${r},50), rgb(${s},${Math.round(r*.4)},20))`}this.level>.8&&!this.isShaking?(this.bucketEl.classList.add("bucket-shake"),this._warningIcon.style.opacity="1",this.isShaking=!0):this.level<=.8&&this.isShaking&&(this.bucketEl.classList.remove("bucket-shake"),this._warningIcon.style.opacity="0",this.isShaking=!1),this.level>=1&&!this.spillFlashing&&(this.spillFlashing=!0,this.level=.5,(i=this.onSpill)==null||i.call(this,5e4),this.container.classList.add("spill-flash"),setTimeout(()=>{this.container.classList.remove("spill-flash"),this.spillFlashing=!1},700))}triggerBump(e){this.addSpill(.025)}triggerCrash(){this.addSpill(.3)}}const Pg=[{id:"job_01",type:"commercial",zone:"cbd",position:{x:40,z:-40},title:"Marbellino Boardroom",client:"Brad from Accounts",description:"Brad wants a Marbellino feature wall in the boardroom. Stone-like marbled finish. Brad calls it 'very European'. Brad has never been to Europe.",pay:42e4,timeLimit:0,travelTimeLimit:120,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_02",type:"commercial",zone:"footscray",position:{x:-120,z:60},title:"Hemp Render — Big Kev's Shed",client:"Big Kev",description:"Big Kev wants Hemp Earthen Render on his warehouse. Rammed earth look, hemp fibres, 3–5mm application. He says it's a small shed. It is not a small shed.",pay:68e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_03",type:"residential",zone:"brunswick",position:{x:-80,z:80},title:"Antique Stucco Terrace",client:"Matilda",description:"Matilda wants Antique Stucco throughout — that Southern European aged look. Three rooms. By Thursday. It's Wednesday. She also needs primer coats. Yes, all of them.",pay:55e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_04",type:"heritage",zone:"richmond",position:{x:120,z:40},title:"Antique Stucco Heritage Restore",client:"The Council",description:"Council heritage job. Full 3-coat Antique Stucco system. Primer, stucco, sealer. Nobody told you about the asbestos audit. Nobody.",pay:8e5,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_05",type:"residential",zone:"stkilda",position:{x:40,z:-120},title:"Tadelakt Beachfront Bathroom",client:"Chloe",description:"Chloe wants Tadelakt in the bathroom — polished, waterproof, glossy. Traditional Moroccan technique. She also wants it 'textured but smooth'. You nod and apply the polishing stone.",pay:61e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_06",type:"emergency",zone:"cbd",position:{x:-40,z:20},title:"🚨 Emergency Antique Stucco Patch",client:"Darren (Stressed)",description:"Open home in 4 hours. Actual hole in the Antique Stucco feature wall. Primer, stucco, sealer — in 4 hours. Darren is sweating. You are also sweating.",pay:95e4,timeLimit:240,travelTimeLimit:240,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_07",type:"residential",zone:"brunswick",position:{x:-120,z:-80},title:"Hemp Render Repair — DIY Gone Wrong",client:"Zephyr",description:"Zephyr tried to do his own Hemp Earthen Render. No base coat. No primer. Wrong mix ratio. You strip it back and do it properly. Zephyr watches and takes notes.",pay:39e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_08",type:"commercial",zone:"footscray",position:{x:-160,z:20},title:"Rokka — Kebab Shop Reno",client:"Mustafa",description:"Mustafa wants Rokka on the walls — smooth, rustic, modern. 2–5mm application, sealed and ready before the health inspector comes back. No questions about the old walls.",pay:47e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_09",type:"heritage",zone:"stkilda",position:{x:80,z:-160},title:"Antique Stucco — Edwardian Cottage",client:"Patricia",description:"Patricia wants Antique Stucco — aged Southern European finish, NCC 2022 compliant. She's printed the full TDS. She's highlighted it. She will quiz you on cure times.",pay:72e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_10",type:"residential",zone:"richmond",position:{x:160,z:-40},title:"Tadelino New Build",client:"The Hendersons",description:"Full Tadelino system throughout — polished, modern, glossy finish. Two coats, polishing stone, sealer. The Hendersons want it done before Christmas. You ask which Christmas.",pay:58e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_11",type:"emergency",zone:"brunswick",position:{x:-40,z:120},title:"🚨 Tadelakt Water Damage Repair",client:"Gary",description:"Upstairs left the bath running. Gary's Tadelakt bathroom is destroyed. Strip, reprime, two coats Tadelakt, polish, seal. Gary is not speaking to upstairs. You don't ask.",pay:88e4,timeLimit:300,travelTimeLimit:300,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_12",type:"commercial",zone:"stkilda",position:{x:-20,z:-160},title:"Rokka Feature Wall — Wine Bar",client:"Alejandro",description:"Alejandro wants Rokka on the feature wall. Rustic, modern, subtle undulations. He calls it 'industrial earthen chic'. You write down 'Rokka, sealed, done'.",pay:64e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1}],Ql=["Jose","Jarrad","Matt","Phil","Tsuyoshi","Fabio"],sn=class sn{constructor(){E(this,"jobs",Pg.map(e=>({...e})));E(this,"activeJob",null);E(this,"activePhase",1);E(this,"completedJobIds",new Set);E(this,"money",5e5);E(this,"travelTimer",0);E(this,"travelFailed",!1);E(this,"crewToPickup",[]);E(this,"crewPickedUp",[])}getAvailableJobs(){return this.jobs.filter(e=>!this.completedJobIds.has(e.id)&&e!==this.activeJob)}acceptJob(e){this.activeJob=e,this.activePhase=1,this.crewToPickup=this._pickCrew(e.crewNeeded),this.crewPickedUp=[],this.startTravelTimer()}_pickCrew(e){return[...Ql].sort(()=>Math.random()-.5).slice(0,Math.min(e,Ql.length))}startTravelTimer(){this.activeJob&&(this.travelTimer=this.activeJob.travelTimeLimit??120,this.travelFailed=!1)}checkPhase1Arrival(e,t){const i=e-sn.WORKSHOP_POS.x,n=t-sn.WORKSHOP_POS.z;return Math.sqrt(i*i+n*n)<18}advanceToPhase2(){this.activePhase=2,this.startTravelTimer()}advanceToPhase3(){this.activePhase=3,this.startTravelTimer()}pickupCrew(e){return!this.crewPickedUp.includes(e)&&this.crewToPickup.includes(e)&&this.crewPickedUp.push(e),this.allCrewCollected()}allCrewCollected(){return this.crewToPickup.every(e=>this.crewPickedUp.includes(e))}nextCrewNeeded(){for(const e of this.crewToPickup)if(!this.crewPickedUp.includes(e))return e;return null}tickTravel(e){if(!this.activeJob||this.travelFailed)return null;if(this.travelTimer-=e,this.travelTimer<=0){this.travelFailed=!0;const t=15e4;return this.money=Math.max(0,this.money-t),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],{failed:!0,penalty:t}}return null}checkArrival(e,t){if(!this.activeJob||this.activePhase!==3)return null;const i=e-this.activeJob.position.x,n=t-this.activeJob.position.z;return Math.sqrt(i*i+n*n)<this.activeJob.triggerRadius?this.activeJob:null}completeJob(e,t=1){const i=Math.round(e.pay*t);return this.money=Math.max(0,this.money+i),this.completedJobIds.add(e.id),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],i}distanceTo(e,t){if(!this.activeJob)return 0;const i=e-this.activeJob.position.x,n=t-this.activeJob.position.z;return Math.sqrt(i*i+n*n)}distanceToWorkshop(e,t){const i=e-sn.WORKSHOP_POS.x,n=t-sn.WORKSHOP_POS.z;return Math.sqrt(i*i+n*n)}distanceToPoint(e,t,i,n){const s=e-i,r=t-n;return Math.sqrt(s*s+r*r)}};E(sn,"WORKSHOP_POS",{x:10,z:15});let bo=sn;const ei=class ei{constructor(e){E(this,"marker");E(this,"diamond");E(this,"ring");E(this,"routeLine",null);E(this,"routeGeom",null);E(this,"scene");E(this,"time",0);E(this,"targetPos",null);this.scene=e,this.marker=new Ne;const t=new Aa(1,0),i=new K({color:ei.MARKER_COLOR,emissive:new be(ei.MARKER_COLOR),emissiveIntensity:.35});this.diamond=new B(t,i),this.diamond.scale.set(1.2,2,1.2),this.diamond.castShadow=!1,this.marker.add(this.diamond);const n=new dn(.5,2,32),s=new Ot({color:ei.MARKER_COLOR,transparent:!0,opacity:.6,side:Nt,depthWrite:!1});this.ring=new B(n,s),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=-8+.3,this.marker.add(this.ring),this.marker.visible=!1,this.scene.add(this.marker)}setTarget(e){if(this.targetPos=e,this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null),e===null){this.marker.visible=!1;return}this.marker.position.set(e.x,ei.BASE_HEIGHT,e.z),this.marker.visible=!0,this.routeGeom=new Pt;const t=new Float32Array(6);t[0]=e.x,t[1]=.05,t[2]=e.z,t[3]=e.x,t[4]=.05,t[5]=e.z,this.routeGeom.setAttribute("position",new oi(t,3));const i=new Zc({color:16777215,transparent:!0,opacity:.75,depthTest:!1});this.routeLine=new xm(this.routeGeom,i),this.routeLine.renderOrder=999,this.scene.add(this.routeLine)}setJob(e){this.setTarget((e==null?void 0:e.position)??null)}get currentTarget(){return this.targetPos?{...this.targetPos}:null}update(e,t,i){if(this.time+=e,!this.targetPos||!this.marker.visible)return;const n=Math.sin(this.time*2.2)*ei.BOB_AMP;this.marker.position.y=ei.BASE_HEIGHT+n,this.diamond.rotation.y=this.time*1.2;const s=this.time*.8%1,r=.5+s*2;this.ring.scale.set(r,r,1);const a=this.ring.material;if(a.opacity=(1-s)*.6,this.routeGeom){const l=this.routeGeom.attributes.position;l.setXYZ(0,t,.05,i),l.setXYZ(1,this.targetPos.x,.05,this.targetPos.z),l.needsUpdate=!0,this.routeGeom.computeBoundingSphere()}}dispose(){this.marker.visible=!1,this.scene.remove(this.marker),this.diamond.geometry.dispose(),this.diamond.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null)}};E(ei,"MARKER_COLOR",12674667),E(ei,"BASE_HEIGHT",8),E(ei,"BOB_AMP",.5);let aa=ei;function Ig(o){return o>=1e6?`${(o/1e6).toFixed(2)}M sats`:o>=1e3?`${(o/1e3).toFixed(0)}K sats`:`${o} sats`}const Lg={cbd:"🏙️ CBD",footscray:"🏭 Footscray",brunswick:"🎸 Brunswick",richmond:"🏡 Richmond",stkilda:"🌊 St Kilda"},Dg={residential:"🏠 Residential",commercial:"🏢 Commercial",heritage:"🏛️ Heritage",emergency:"🚨 Emergency"};class Bg{constructor(e){E(this,"onAccept");E(this,"overlay");E(this,"visible",!1);E(this,"jobs",[]);if(this.onAccept=e,this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,e.appendChild(t);const i=document.createElement("button");if(i.className="jb-close-btn",i.textContent="✕",i.setAttribute("aria-label","Close"),i.addEventListener("click",()=>this.hide()),e.appendChild(i),this.overlay.appendChild(e),this.jobs.length===0){const n=document.createElement("div");n.className="jb-no-jobs",n.textContent="You've smashed all the jobs, legend. 🏆",this.overlay.appendChild(n);return}for(const n of this.jobs){const s=document.createElement("div");s.className="jb-card";const r=document.createElement("div");r.className="jb-card-header";const a=document.createElement("div");a.className="jb-title",a.textContent=n.title,r.appendChild(a);const l=document.createElement("div");l.className="jb-pay",l.textContent=`₿ ${Ig(n.pay)}`,r.appendChild(l),s.appendChild(r);const c=document.createElement("div");c.className="jb-meta";const h=document.createElement("span");h.className="jb-badge",h.textContent=Lg[n.zone]??n.zone,c.appendChild(h);const u=document.createElement("span");if(u.className=`jb-badge${n.type==="emergency"?" jb-emergency-badge":""}`,u.textContent=Dg[n.type]??n.type,c.appendChild(u),n.timeLimit>0){const x=document.createElement("span");x.className="jb-badge jb-emergency-badge",x.textContent=`⏱️ ${Math.round(n.timeLimit/60)} min limit`,c.appendChild(x)}s.appendChild(c);const d=document.createElement("div");d.className="jb-client",d.textContent=`Client: ${n.client}`,s.appendChild(d);const f=document.createElement("div");f.className="jb-desc",f.textContent=n.description,s.appendChild(f);const g=document.createElement("button");g.className="jb-accept-btn",g.textContent="ACCEPT →",g.addEventListener("click",()=>{this.onAccept(n)}),s.appendChild(g),this.overlay.appendChild(s)}}}const ec=1e8;function ji(o){return o>=1e6?`${(o/1e6).toFixed(2)}M sats`:o>=1e3?`${(o/1e3).toFixed(0)}K sats`:`${o} sats`}function Fg(o){const e=Math.max(0,Math.ceil(o)),t=Math.floor(e/60),i=e%60;return`${t}:${i.toString().padStart(2,"0")}`}function Ug(o){return o.charAt(0).toUpperCase()}class Ng{constructor(){E(this,"btcAchieved",!1);E(this,"speedText");E(this,"moneyEl");E(this,"btcBarFill");E(this,"btcLabelEl");E(this,"jobStripEl");E(this,"travelTimerEl");E(this,"flashOverlay");E(this,"timerFailOverlay");E(this,"crewPanelEl");E(this,"moneyPanel");E(this,"activeJob",null);E(this,"activePhase",1);E(this,"flashTimeout",null);E(this,"spillPenaltyTimeout",null);E(this,"currentMoney",5e5);E(this,"timerPulseInterval",null);if(!document.getElementById("hud-styles")){const a=document.createElement("style");a.id="hud-styles",a.textContent=`
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
      `,l.textContent=Ug(r),l.title=r,s.appendChild(l)}this.crewPanelEl.appendChild(s)}_refreshJobStrip(e,t){this.jobStripEl.innerHTML="";const i=document.createElement("div");if(i.style.cssText=`
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      text-align: right;
    `,t!==null){const n=t<1e3?`${Math.round(t)}m`:`${(t/1e3).toFixed(1)}km`;this.activePhase===1?(i.textContent=`📦 To workshop: ${n} — ${e.title}`,i.style.color="#FFD700"):this.activePhase===2?(i.textContent=`👥 Pick up crew: ${n} — ${e.title}`,i.style.color="#60AAFF"):(i.textContent=`🧱 To job site: ${n} — ${e.title}`,i.style.color="#C1666B")}else this.activePhase===1?(i.textContent=`📦 Workshop pickup — ${e.title}`,i.style.color="#FFD700"):this.activePhase===2?(i.textContent=`👥 Pick up the crew — ${e.title}`,i.style.color="#60AAFF"):(i.textContent=`🧱 ${e.title}`,i.style.color="#fff");this.jobStripEl.appendChild(i)}updateTravelTimer(e){if(e===null){this.travelTimerEl.style.display="none",this.travelTimerEl.classList.remove("hud-timer-pulse"),this.timerPulseInterval!==null&&(clearInterval(this.timerPulseInterval),this.timerPulseInterval=null);return}this.travelTimerEl.style.display="block",this.travelTimerEl.textContent=`⏱ ${Fg(e)}`,e>60?(this.travelTimerEl.style.color="#5EDB7D",this.travelTimerEl.classList.remove("hud-timer-pulse")):e>30?(this.travelTimerEl.style.color="#FFD700",this.travelTimerEl.classList.remove("hud-timer-pulse")):(this.travelTimerEl.style.color="#ff4444",this.travelTimerEl.classList.contains("hud-timer-pulse")||this.travelTimerEl.classList.add("hud-timer-pulse"))}showTimerFail(e){const t=document.getElementById("hud-timer-fail-msg");t&&(t.textContent=`⏰ TOO SLOW! -${ji(e)}`),this.timerFailOverlay.style.display="flex",setTimeout(()=>{this.timerFailOverlay.style.display="none"},3e3)}showPhase1Complete(){const e=document.getElementById("hud-flash-msg");e&&(e.innerHTML='📦 Materials loaded!<br><span style="font-size:0.65em">Go pick up the crew.</span>',e.style.color="#FFD700"),this.flashOverlay.style.background="rgba(255, 210, 0, 0.10)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2500)}showCrewPickup(e,t){const i=document.getElementById("hud-flash-msg");i&&(t?i.innerHTML=`👤 ${e} on board!<br><span style="font-size:0.65em">Pick up ${t}!</span>`:(i.innerHTML='✅ Crew assembled!<br><span style="font-size:0.65em">Head to the job site.</span>',i.style.color="#5EDB7D"),t&&(i.style.color="#60AAFF")),this.flashOverlay.style.background=t?"rgba(96, 170, 255, 0.08)":"rgba(94, 219, 125, 0.12)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2200)}showSpillPenalty(e){this.spillPenaltyTimeout!==null&&(clearTimeout(this.spillPenaltyTimeout),this.spillPenaltyTimeout=null);const t=`-${ji(e)}`;this.moneyEl.style.color="#ff4444",this.moneyEl.textContent=`${ji(this.currentMoney)} ${t}`,this.spillPenaltyTimeout=setTimeout(()=>{this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=ji(this.currentMoney),this.spillPenaltyTimeout=null},1500)}showJobComplete(e,t){const i=document.getElementById("hud-flash-msg");i&&(i.style.color="#5EDB7D",i.innerHTML=`✅ JOB DONE!<br><span style="font-size:0.7em">+${ji(t)} — ${e}</span>`),this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashTimeout=null},3e3)}updateMoney(e){this.currentMoney=e,this.spillPenaltyTimeout===null&&(this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=ji(e));const t=Math.min(1,e/ec);this.btcBarFill.style.width=`${(t*100).toFixed(1)}%`,t>=1?(this.btcLabelEl.textContent="₿ GOAL: ACHIEVED! 🚀",this.btcBarFill.style.background="#FFD700"):this.btcLabelEl.textContent=`₿ GOAL: ${(t*100).toFixed(1)}%`,!this.btcAchieved&&e>=ec&&(this.btcAchieved=!0,this._showBitcoinAchievement())}showPenalty(e,t){this.flashTimeout&&clearTimeout(this.flashTimeout),this.flashOverlay.style.display="block";const i=this.flashOverlay.querySelector("div");i&&(i.innerHTML=`⚠️ SCAFFOLD FAIL<br><span style="font-size:0.7em">−${ji(t)} penalty — ${e}</span>`),this.flashOverlay.style.animation="none",this.flashOverlay.offsetWidth,this.flashOverlay.style.animation="hudRedFlash 2.5s ease forwards",this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none"},2600)}showToast(e,t=16777215){const i="#"+t.toString(16).padStart(6,"0"),n=document.createElement("div");n.textContent=e,Object.assign(n.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:i,color:"#fff",padding:"14px 24px",borderRadius:"14px",fontSize:"18px",fontWeight:"800",fontFamily:"system-ui, sans-serif",zIndex:"9000",opacity:"1",textShadow:"0 1px 4px rgba(0,0,0,0.5)",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",pointerEvents:"none",whiteSpace:"nowrap",transition:"opacity 0.5s ease"}),document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0"},2e3),setTimeout(()=>n.remove(),2600)}_showBitcoinAchievement(){if(localStorage.setItem("tem-rush-btc-achieved","1"),!document.getElementById("btc-anim-styles")){const c=document.createElement("style");c.id="btc-anim-styles",c.textContent=`
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
    `;const s=tc("🎽  REWARD — MERCH STORE","rgba(247,147,26,0.18)","rgba(247,147,26,0.55)","10% off all TEM merch.<br>Show this at checkout or use the code online.","BTCPLASTER10");t.appendChild(s);const r=tc("🪣  REWARD — MATERIAL SALES","rgba(94,219,125,0.14)","rgba(94,219,125,0.45)","5% off TEM materials at participating retail stores.<br>Present your in-app certificate.","BTCMAT5");t.appendChild(r);const a=document.createElement("div");a.style.cssText=`
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
    `,l.onclick=()=>e.remove(),t.appendChild(l),e.appendChild(t),document.body.appendChild(e)}}function tc(o,e,t,i,n){const s=document.createElement("div");s.style.cssText=`
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
  `;const r=s.querySelector("button");return r.addEventListener("click",()=>{var a;(a=navigator.clipboard)==null||a.writeText(n).then(()=>{r.textContent="✓ Copied!",setTimeout(()=>{r.textContent="📋 Copy Code"},2e3)})}),s}const ln=[{id:"timber-bluestone",file:"images/270ae674-ae77-46c0-a931-d8b3890bb728.jpg",name:"Timber & Bluestone"},{id:"angular-bay",file:"images/4d5ff18e-1129-4195-9108-a64f3c8e4d34.jpg",name:"Angular Bay House"},{id:"haussmann",file:"images/5c2eabb7-65ce-4f76-b14c-8eb37a3f9537.jpg",name:"Haussmann Mansion"},{id:"brutalist",file:"images/60007f2e-318f-412e-b2ad-4d77445ee417.jpg",name:"Brutalist Compound"},{id:"sculptural-olive",file:"images/787315c4-a661-4dca-8567-b7a18f104665.jpg",name:"Sculptural Olive"},{id:"curved-balcony",file:"images/842fccc6-6bad-4509-81d8-ecb2dc14c80c.jpg",name:"Curved Balcony"},{id:"corten-plaster",file:"images/e3cbd2c9-7944-4074-a439-1033c9f2c166.jpg",name:"Corten & Plaster"},{id:"terracotta-mono",file:"images/f2ed55b5-ba78-4a78-8bad-e57a86b6bcef.jpg",name:"Terracotta Monolith"}],hh="tem-rush-achievements";function As(){try{return JSON.parse(localStorage.getItem(hh)||"[]")}catch{return[]}}function Og(o){const e=As();return e.includes(o)?!1:(e.push(o),localStorage.setItem(hh,JSON.stringify(e)),!0)}function dh(){return As().length>=ln.length}function kg(){const o=As(),e=ln.filter(t=>!o.includes(t.id));return e.length>0?e[Math.floor(Math.random()*e.length)]:ln[Math.floor(Math.random()*ln.length)]}function zg(o,e,t){o.fillStyle="#C8B89A",o.fillRect(0,0,e,t);for(let i=0;i<800;i++){const n=Math.random()*e,s=Math.random()*t,r=20+Math.random()*60,a=Math.random()*Math.PI,l=Math.floor(180+Math.random()*40);o.strokeStyle=`rgb(${l},${l-10},${l-20})`,o.lineWidth=1+Math.random()*3,o.globalAlpha=.3+Math.random()*.4,o.beginPath(),o.moveTo(n,s),o.lineTo(n+Math.cos(a)*r,s+Math.sin(a)*r),o.stroke()}o.globalAlpha=1,o.font="bold 48px system-ui",o.textAlign="center",o.fillStyle="rgba(180,160,130,0.4)",o.fillText("TROWELED EARTH",e/2,t/2-20),o.font="22px system-ui",o.fillStyle="rgba(180,160,130,0.3)",o.fillText("Scratch to reveal",e/2,t/2+20)}function Gg(o,e,t,i,n,s=45){o.globalCompositeOperation="destination-out",o.strokeStyle="rgba(0,0,0,1)",o.lineCap="round",o.lineJoin="round",o.lineWidth=s*2,o.beginPath(),o.moveTo(e,t),o.lineTo(i,n),o.stroke(),o.globalCompositeOperation="source-over"}function ic(o,e,t){const i=o.getImageData(0,0,e,t).data;let n=0;const s=e*t;for(let r=3;r<i.length;r+=4)i[r]<128&&n++;return n/s}function Hg(o,e,t){o.save(),o.translate(e,t),o.rotate(Math.PI/4),o.strokeStyle="#8B6914",o.lineWidth=5,o.lineCap="round",o.beginPath(),o.moveTo(0,0),o.lineTo(0,36),o.stroke(),o.fillStyle="#C0C0C0",o.strokeStyle="#888",o.lineWidth=1.5,o.beginPath(),o.moveTo(-14,0),o.lineTo(14,0),o.lineTo(10,-28),o.lineTo(-10,-28),o.closePath(),o.fill(),o.stroke(),o.fillStyle="rgba(255,255,255,0.35)",o.beginPath(),o.moveTo(-8,-4),o.lineTo(4,-4),o.lineTo(2,-22),o.lineTo(-6,-22),o.closePath(),o.fill(),o.restore()}function nc(o,e,t,i){const n=Math.max(t/e.naturalWidth,i/e.naturalHeight),s=e.naturalWidth*n,r=e.naturalHeight*n,a=(t-s)/2,l=(i-r)/2;o.drawImage(e,a,l,s,r)}class Vg{constructor(){E(this,"container",null);E(this,"canvas",null);E(this,"ctx",null);E(this,"scratch",null);E(this,"sctx",null);E(this,"onComplete",null);E(this,"photo",null);E(this,"img",null);E(this,"imgLoaded",!1);E(this,"lastX",0);E(this,"lastY",0);E(this,"pointerDown",!1);E(this,"cursorX",-999);E(this,"cursorY",-999);E(this,"DURATION",30);E(this,"timeLeft",30);E(this,"timerInterval",null);E(this,"rafId",0);E(this,"done",!1);E(this,"revealed",0);E(this,"lastSampleTime",0);E(this,"SAMPLE_INTERVAL",250);E(this,"toastMsg","");E(this,"toastAlpha",0);E(this,"_onMouseMove");E(this,"_onMouseDown");E(this,"_onMouseUp");E(this,"_onTouchStart");E(this,"_onTouchMove");E(this,"_onTouchEnd");this._onMouseMove=this.handleMouseMove.bind(this),this._onMouseDown=this.handleMouseDown.bind(this),this._onMouseUp=()=>{this.pointerDown=!1},this._onTouchStart=this.handleTouchStart.bind(this),this._onTouchMove=this.handleTouchMove.bind(this),this._onTouchEnd=()=>{this.pointerDown=!1}}mount(e,t){if(this.container=e,this.onComplete=t,this.done=!1,this.revealed=0,this.timeLeft=this.DURATION,this.toastMsg="",this.toastAlpha=0,this.photo=kg(),this.canvas=document.createElement("canvas"),this.canvas.width=e.clientWidth||window.innerWidth,this.canvas.height=e.clientHeight||window.innerHeight,this.canvas.style.cssText="position:absolute;inset:0;display:block;cursor:none;touch-action:none;",this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx)throw new Error("Canvas 2D not supported");if(e.appendChild(this.canvas),this.scratch=document.createElement("canvas"),this.scratch.width=this.canvas.width,this.scratch.height=this.canvas.height,this.sctx=this.scratch.getContext("2d",{willReadFrequently:!0}),!this.sctx)throw new Error("Scratch canvas 2D not supported");zg(this.sctx,this.scratch.width,this.scratch.height),this.img=new Image,this.img.onload=()=>{this.imgLoaded=!0},this.img.onerror=()=>{this.imgLoaded=!0},this.img.src=this.photo.file,this.canvas.addEventListener("mousemove",this._onMouseMove),this.canvas.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),this.canvas.addEventListener("touchstart",this._onTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.canvas.addEventListener("touchend",this._onTouchEnd),this.timerInterval=setInterval(()=>{this.done||(this.timeLeft--,this.timeLeft<=0&&this.finish())},1e3),this.loop()}handleMouseDown(e){this.pointerDown=!0;const t=this.canvas.getBoundingClientRect();this.lastX=e.clientX-t.left,this.lastY=e.clientY-t.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleMouseMove(e){const t=this.canvas.getBoundingClientRect(),i=e.clientX-t.left,n=e.clientY-t.top;this.cursorX=i,this.cursorY=n,this.pointerDown&&!this.done&&(this.scrape(this.lastX,this.lastY,i,n),this.lastX=i,this.lastY=n)}handleTouchStart(e){e.preventDefault(),this.pointerDown=!0;const t=e.touches[0],i=this.canvas.getBoundingClientRect();this.lastX=t.clientX-i.left,this.lastY=t.clientY-i.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleTouchMove(e){if(e.preventDefault(),!this.pointerDown||this.done)return;const t=e.touches[0],i=this.canvas.getBoundingClientRect(),n=t.clientX-i.left,s=t.clientY-i.top;this.cursorX=n,this.cursorY=s,this.scrape(this.lastX,this.lastY,n,s),this.lastX=n,this.lastY=s}scrape(e,t,i,n){if(!this.sctx||!this.scratch||this.done)return;Gg(this.sctx,e,t,i,n,45);const s=performance.now();s-this.lastSampleTime>this.SAMPLE_INTERVAL&&(this.lastSampleTime=s,this.revealed=ic(this.sctx,this.scratch.width,this.scratch.height),this.revealed>=.85&&this.finish())}loop(){if(this.done&&this.toastAlpha<=0)return;const e=this.ctx,t=this.canvas;if(!e||!t)return;const i=t.width,n=t.height;e.clearRect(0,0,i,n),this.imgLoaded&&this.img&&this.img.naturalWidth>0?nc(e,this.img,i,n):(e.fillStyle="#2a2a20",e.fillRect(0,0,i,n)),this.scratch&&e.drawImage(this.scratch,0,0),this.done||this.drawHUD(e,i,n),this.cursorX>0&&!this.done&&Hg(e,this.cursorX,this.cursorY),this.toastAlpha>0&&(this.drawToast(e,i,n),this.toastAlpha-=.012),this.rafId=requestAnimationFrame(()=>this.loop())}drawHUD(e,t,i){const n=this.timeLeft/this.DURATION,s=t*.8,r=t*.1,a=16,l=14,c=7;e.fillStyle="rgba(0,0,0,0.4)",this.roundRect(e,r,a,s,l,c),e.fill();const h=n<.33?"#F07070":n<.6?"#F7C948":"#5EDB7D";e.fillStyle=h,this.roundRect(e,r,a,s*n,l,c),e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.round(i*.03)}px system-ui`,e.textAlign="center",e.shadowColor="rgba(0,0,0,0.8)",e.shadowBlur=6,e.fillText(`${Math.ceil(this.timeLeft)}s`,t/2,a+l+22);const u=Math.round(this.revealed*100);e.font=`900 ${Math.round(i*.09)}px system-ui`,e.textAlign="center",e.fillStyle="rgba(255,255,255,0.9)",e.shadowColor="rgba(0,0,0,0.9)",e.shadowBlur=12,e.fillText(`${u}%`,t/2,i-32),e.shadowBlur=0,this.timeLeft>25&&(e.font=`bold ${Math.round(i*.03)}px system-ui`,e.fillStyle="rgba(255,255,255,0.85)",e.textAlign="center",e.fillText("🪣  Scrape away the plaster!",t/2,i/2))}roundRect(e,t,i,n,s,r){n<0||(e.beginPath(),e.moveTo(t+r,i),e.lineTo(t+n-r,i),e.quadraticCurveTo(t+n,i,t+n,i+r),e.lineTo(t+n,i+s-r),e.quadraticCurveTo(t+n,i+s,t+n-r,i+s),e.lineTo(t+r,i+s),e.quadraticCurveTo(t,i+s,t,i+s-r),e.lineTo(t,i+r),e.quadraticCurveTo(t,i,t+r,i),e.closePath())}drawToast(e,t,i){const n=Math.min(1,this.toastAlpha);e.save(),e.globalAlpha=n,e.fillStyle="rgba(0,0,0,0.7)",e.font=`bold ${Math.round(i*.035)}px system-ui`,e.textAlign="center";const s=this.toastMsg.split(`
`),r=Math.round(i*.045),a=s.length*r+24,l=i*.45-a/2,c=t*.85,h=(t-c)/2;this.roundRect(e,h,l,c,a,16),e.fill(),e.fillStyle="#fff",e.shadowColor="rgba(0,0,0,0.6)",e.shadowBlur=8,s.forEach((u,d)=>{e.fillText(u,t/2,l+22+d*r)}),e.restore()}finish(){if(this.done)return;this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.sctx&&this.scratch&&(this.revealed=ic(this.sctx,this.scratch.width,this.scratch.height));const e=Math.round(this.revealed*100),t=Math.max(20,e),i=t/100,n=this.photo,s=Og(n.id),r=As().length,a=dh();this.showResultScreen(t,n,s,r,a,i)}showResultScreen(e,t,i,n,s,r){const a=this.ctx,l=this.canvas;if(!a||!l)return;const c=l.width,h=l.height;a.clearRect(0,0,c,h),this.imgLoaded&&this.img&&this.img.naturalWidth>0?nc(a,this.img,c,h):(a.fillStyle="#2a2a20",a.fillRect(0,0,c,h)),this.scratch&&a.drawImage(this.scratch,0,0),a.fillStyle="rgba(0,0,0,0.65)",a.fillRect(0,0,c,h);const u=e>=85?"#5EDB7D":e>=60?"#F7C948":"#F07070";a.font=`900 ${Math.round(h*.15)}px system-ui`,a.textAlign="center",a.fillStyle=u,a.shadowColor="rgba(0,0,0,0.8)",a.shadowBlur=20,a.fillText(`${e}%`,c/2,h*.35),a.font=`bold ${Math.round(h*.04)}px system-ui`,a.fillStyle="#fff",a.shadowBlur=10,a.fillText(`📸 ${t.name}`,c/2,h*.47);let d;s?d="🏆 FULL TEM COLLECTION!":i?d="✨ NEW PHOTO UNLOCKED!":d="Already in your collection",a.font=`bold ${Math.round(h*.032)}px system-ui`,a.fillStyle=s?"#FFD700":i?"#5EDB7D":"#aaa",a.shadowBlur=8,a.fillText(d,c/2,h*.56),a.font=`${Math.round(h*.026)}px system-ui`,a.fillStyle="rgba(255,255,255,0.75)",a.shadowBlur=4,a.fillText(`Collection: ${n} / ${ln.length}`,c/2,h*.64),a.shadowBlur=0;const f=s?"🏆 Full TEM Collection complete!":i?`📸 New photo unlocked: ${t.name}`:`${t.name} — already in collection`,g={score:e,qualityPct:r,message:f};setTimeout(()=>{var x;return(x=this.onComplete)==null?void 0:x.call(this,g)},2800)}unmount(){this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.rafId&&cancelAnimationFrame(this.rafId),this.canvas&&(this.canvas.removeEventListener("mousemove",this._onMouseMove),this.canvas.removeEventListener("mousedown",this._onMouseDown),this.canvas.removeEventListener("touchstart",this._onTouchStart),this.canvas.removeEventListener("touchmove",this._onTouchMove),this.canvas.removeEventListener("touchend",this._onTouchEnd),this.canvas.remove()),window.removeEventListener("mouseup",this._onMouseUp),this.canvas=null,this.ctx=null,this.scratch=null,this.sctx=null,this.container=null,this.onComplete=null,this.img=null}}const Qe=5,ho=8,Qt=ho*Qe,Wg=[-8,8],Xg=20,eo=5.5,sc=14,oc=11,rc=4,qg=-30,An=.4;class Yg{constructor(){E(this,"overlay");E(this,"renderer");E(this,"scene");E(this,"camera");E(this,"rafId",0);E(this,"lastTs",0);E(this,"px",0);E(this,"py",0);E(this,"vx",0);E(this,"vy",0);E(this,"onGround",!1);E(this,"jumpsLeft",2);E(this,"climbPole",null);E(this,"swingBar",null);E(this,"swingAngle",0);E(this,"swingOmega",0);E(this,"char");E(this,"charGroup");E(this,"facingRight",!0);E(this,"platforms",[]);E(this,"poles",[]);E(this,"swingBars",[]);E(this,"heartsEl");E(this,"timerEl");E(this,"lives",3);E(this,"timer",120);E(this,"gameOver",!1);E(this,"delivered",!1);E(this,"keys",{left:!1,right:!1,up:!1,down:!1});E(this,"jumpTap",!1);E(this,"onCompleteFn")}start(e){this.onCompleteFn=e,this._createOverlay(),this._createScene(),this._buildBackground(),this._buildLevel(),this._buildHUD(),this._buildControls(),this.px=0,this.py=.5,this.lastTs=performance.now(),this.rafId=requestAnimationFrame(t=>this._loop(t))}_createOverlay(){this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position:fixed; inset:0; z-index:10000; overflow:hidden; touch-action:none;
      background:#87CEEB;
    `,document.body.appendChild(this.overlay)}_createScene(){const e=window.innerWidth,t=window.innerHeight,i=document.createElement("canvas");i.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;",this.overlay.appendChild(i),this.renderer=new Ma({canvas:i,antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setSize(e,t),this.renderer.shadowMap.enabled=!0,this.scene=new Sa,this.scene.background=new be(8900331),this.scene.fog=new To(8900331,.018),this.camera=new Lt(44,e/t,.1,200),this.camera.position.set(0,12,26),this.camera.lookAt(0,10,0);const n=new Ca(16777215,.6);this.scene.add(n);const s=new Hn(16775400,1.1);s.position.set(8,30,15),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),s.shadow.camera.near=.5,s.shadow.camera.far=120,s.shadow.camera.left=-20,s.shadow.camera.right=20,s.shadow.camera.top=55,s.shadow.camera.bottom=-5,this.scene.add(s);const r=new Hn(12638463,.4);r.position.set(-5,10,5),this.scene.add(r),this.char=new Ts(ki.Jarrad),this.charGroup=this.char.group,this.charGroup.scale.setScalar(1),this.scene.add(this.charGroup)}_buildBackground(){const e=(n,s,r,a,l)=>{const c=new B(n,new K({color:s}));return c.position.set(r,a,l),c.receiveShadow=!0,this.scene.add(c),c};e(new ht(80,60),11589872,0,22,-12);const t=[[-14,10],[-10,14],[-6,8],[8,16],[12,11],[16,9]];for(const[n,s]of t)e(new Q(4,s,1),6975632,n,s/2-1,-9);const i=Qt+5;e(new Q(16,i,.6),15260864,0,i/2-1,-1.5),e(new Q(16.6,.5,.9),13945e3,0,i-1,-1.4),e(new Q(16,.4,.7),13681824,0,0,-1.4);for(let n=0;n<ho;n++){const s=n*Qe+2;for(const r of[-5.5,-1.8,1.8,5.5])e(new Q(2,2.8,.2),3359846,r,s,-1.1),e(new Q(1.8,.15,.25),12300432,r,s+1.5,-1.05)}e(new Q(24,.5,5),3815474,0,-.25,.5),e(new Q(14,.5,1.2),13154440,0,.25,1),e(new Q(14,1.2,.15),12101752,0,.6,1.57),e(new Q(.15,1.2,1.2),12101752,-7,.6,1),e(new Q(.15,1.2,1.2),12101752,7,.6,1)}_buildLevel(){for(const t of Wg)this._addScaffoldPole(t,0,Qt+3),this.poles.push({x:t,y1:0,y2:Qt+3});for(const t of[-3.5,3.5])this._addScaffoldPole(t,0,Qt+3),this.poles.push({x:t,y1:0,y2:Qt+3});this._addScaffoldPole(-1,0,Qt+3),this._addScaffoldPole(1,0,Qt+3);for(let t=0;t<=ho;t++){const i=t*Qe;this._addTube(-8,8,i,10066346,.07)}for(let t=0;t<ho;t++){const i=t*Qe,n=(t+1)*Qe;this._addDiag(-8,i,8,n),this._addDiag(8,i,-8,n)}this._addPlat(-7.5,7.5,0,"normal"),this._addPlat(-7.5,-1.2,Qe*1,"normal"),this._addPlat(1.2,7.5,Qe*1,"normal"),this._addPlat(-7.5,-1,Qe*2,"normal"),this._addPlat(2,7.5,Qe*2,"crumble"),this._addPlat(-7.5,-3,Qe*3,"normal"),this._addPlat(3,7.5,Qe*3,"normal"),this._addPlat(-2,2,Qe*3,"moving"),this._addPlat(-7.5,1.5,Qe*4,"normal"),this._addPlat(4,7.5,Qe*4,"crumble"),this._addPlat(-7.5,-4,Qe*5,"normal"),this._addPlat(-1.5,1.5,Qe*5+.8,"normal"),this._addPlat(4,7.5,Qe*5,"normal"),this._addPlat(-7.5,-4.5,Qe*6,"normal"),this._addPlat(4.5,7.5,Qe*6,"normal"),this._addPlat(-3,3,Qe*6,"moving"),this._addPlat(-7.5,-4.5,Qe*7,"crumble"),this._addPlat(-1.5,1.5,Qe*7,"normal"),this._addPlat(4.5,7.5,Qe*7,"crumble"),this._addSwingBar(0,Qe*1+2.5,2.8),this._addSwingBar(0,Qe*3+2.5,2.8),this._addSwingBar(-4,Qe*5+2.5,2.2),this._addSwingBar(4,Qe*6+2.5,2.2),this._addPlat(-7.5,7.5,Qt,"win"),this._addSign(0,Qt+1.8,"⭐ DELIVER HERE ⭐",16746496),this._addBucket(-5,.8),this._addBucket(5,.8)}_addScaffoldPole(e,t,i){const n=i-t,s=new We(.07,.07,n,8),r=new K({color:10526896}),a=new B(s,r);a.position.set(e,t+n/2,.3),a.castShadow=!0,this.scene.add(a);for(let l=t;l<=i;l+=Qe){const c=new dt(.12,6,5),h=new B(c,r);h.position.set(e,l,.3),this.scene.add(h)}}_addTube(e,t,i,n,s){const r=t-e,a=new We(s,s,r,7),l=new K({color:n}),c=new B(a,l);c.rotation.z=Math.PI/2,c.position.set((e+t)/2,i,.3),this.scene.add(c)}_addDiag(e,t,i,n){const s=i-e,r=n-t,a=Math.sqrt(s*s+r*r),l=new We(.04,.04,a,6),c=new K({color:8947872}),h=new B(l,c);h.rotation.z=Math.atan2(r,s)-Math.PI/2,h.position.set((e+i)/2,(t+n)/2,.3),this.scene.add(h)}_addPlat(e,t,i,n){const s=t-e,r={normal:9134608,moving:13918224,crumble:8939042,win:16763904}[n],a=new Q(s,.28,.8),l=new K({color:r}),c=new B(a,l);c.position.set((e+t)/2,i+.14,.3),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);for(let h=e+.6;h<t;h+=.9){const u=new Q(.06,.3,.82),d=new K({color:r-1118464}),f=new B(u,d);f.position.set(h-(e+t)/2,0,0),c.add(f)}this.platforms.push({x1:e,x2:t,y:i,mesh:c,type:n,moveDir:1,crumbleTimer:0,crumbled:!1})}_addSwingBar(e,t,i){const n=new We(.09,.09,3,8),s=new K({color:16755200,emissive:8930304,emissiveIntensity:.5}),r=new B(n,s);r.rotation.z=Math.PI/2,r.position.set(e,t,.5),this.scene.add(r);const a=new dt(.22,8,8),l=new Ot({color:16772608,transparent:!0,opacity:.7}),c=new B(a,l);c.position.set(e,t,.6),this.scene.add(c),this.swingBars.push({anchorX:e,anchorY:t,radius:i,mesh:r})}_addSign(e,t,i,n){const s=new Q(6,.8,.15),r=new K({color:n,emissive:n,emissiveIntensity:.3}),a=new B(s,r);a.position.set(e,t,.5),this.scene.add(a)}_addBucket(e,t){const i=new We(.25,.2,.5,8),n=new K({color:12674667,emissive:6684689,emissiveIntensity:.3}),s=new B(i,n);s.position.set(e,t,.5),this.scene.add(s)}_buildHUD(){const e=document.createElement("div");e.style.cssText=`
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
    `;const t=document.createElement("div");t.style.cssText="display:grid; grid-template-columns:70px 70px 70px; grid-template-rows:70px 70px; gap:6px;";const i=(g,x,m,p)=>{const y=document.createElement("div");return y.style.cssText=`
        grid-row:${m}; grid-column:${p};
        background:${x}; border-radius:50%; color:#fff;
        font-size:22px; display:flex; align-items:center; justify-content:center;
        box-shadow:0 4px 10px rgba(0,0,0,0.4); touch-action:none; user-select:none;
        cursor:pointer;
      `,y.textContent=g,y},n=i("▲","rgba(60,60,160,0.88)",1,2),s=i("◀","rgba(70,70,70,0.88)",2,1),r=i("▼","rgba(60,60,160,0.88)",2,2),a=i("▶","rgba(70,70,70,0.88)",2,3);t.appendChild(n),t.appendChild(s),t.appendChild(r),t.appendChild(a);const l=document.createElement("div");l.style.cssText=`
      width:92px; height:92px; border-radius:50%;
      background:rgba(30,180,30,0.9); color:#fff;
      font-size:13px; font-weight:900; letter-spacing:0.5px;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 5px 15px rgba(0,0,0,0.45); touch-action:none; user-select:none;
      cursor:pointer;
    `,l.textContent="JUMP";const c=(g,x,m)=>{g.addEventListener("touchstart",p=>{p.preventDefault(),x()},{passive:!1}),g.addEventListener("touchend",p=>{p.preventDefault(),m()},{passive:!1}),g.addEventListener("mousedown",x),g.addEventListener("mouseup",m)};c(s,()=>this.keys.left=!0,()=>this.keys.left=!1),c(a,()=>this.keys.right=!0,()=>this.keys.right=!1),c(n,()=>this.keys.up=!0,()=>this.keys.up=!1),c(r,()=>this.keys.down=!0,()=>this.keys.down=!1);const h=()=>{this.jumpTap=!0};l.addEventListener("touchstart",g=>{g.preventDefault(),h()},{passive:!1}),l.addEventListener("mousedown",h);const u={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down",KeyA:"left",KeyD:"right",KeyW:"up",KeyS:"down"},d=g=>{if(u[g.code]){const x=u[g.code];x==="jump"?this.jumpTap=!0:this.keys[x]=!0}(g.code==="Space"||g.code==="KeyZ")&&(this.jumpTap=!0)},f=g=>{const x=u[g.code];x&&x!=="jump"&&(this.keys[x]=!1)};window.addEventListener("keydown",d),window.addEventListener("keyup",f),this.overlay.addEventListener("remove",()=>{window.removeEventListener("keydown",d),window.removeEventListener("keyup",f)}),e.appendChild(t),e.appendChild(l),this.overlay.appendChild(e)}_loop(e){if(this.gameOver)return;this.rafId=requestAnimationFrame(i=>this._loop(i));const t=Math.min((e-this.lastTs)/1e3,.05);this.lastTs=e,this._update(t),this.renderer.render(this.scene,this.camera),this.jumpTap=!1}_update(e){if(this.timer=Math.max(0,this.timer-e),this.timerEl.textContent=`⏱ ${Math.ceil(this.timer)}s`,this.timer<=0&&!this.delivered){this._end(!1);return}this.char.update(e);for(const i of this.platforms)if(i.type==="moving"&&(i.x1+=2.5*(i.moveDir??1)*e,i.x2+=2.5*(i.moveDir??1)*e,i.mesh.position.x=(i.x1+i.x2)/2,(i.x2>5.2||i.x1<-1.8)&&(i.moveDir=-(i.moveDir??1))),i.type==="crumble"&&!i.crumbled)if(this.onGround&&this.px>=i.x1-An&&this.px<=i.x2+An&&Math.abs(this.py-i.y)<.3){i.crumbleTimer=(i.crumbleTimer??0)+e;const s=Math.sin(i.crumbleTimer*40)*.06*Math.min(1,i.crumbleTimer);i.mesh.position.z=.3+s,i.crumbleTimer>1.2&&(i.crumbled=!0,i.mesh.visible=!1)}else(i.crumbleTimer??0)>0&&!i.crumbled&&(i.crumbleTimer=0);this.swingBar?this._physicsSwing(e):this.climbPole?this._physicsClimb(e):this._physicsPlatform(e),this.charGroup.position.set(this.px,this.py,.3),this.charGroup.rotation.y=this.facingRight?-.15:Math.PI+.15;const t=Math.max(8,Math.min(this.py+6,Qt+2));if(this.camera.position.y+=(t-this.camera.position.y)*.07,this.camera.lookAt(0,this.camera.position.y-4,0),this.py<-3.5){this._loseLife();return}!this.delivered&&this.py>=Qt-.5&&Math.abs(this.px)<5&&(this.delivered=!0,this._end(!0))}_physicsPlatform(e){for(const t of this.poles)if(Math.abs(this.px-t.x)<.6&&this.py>=t.y1-.5&&this.py<=t.y2&&this.keys.up){this.climbPole=t,this.px=t.x,this.vx=0,this.vy=0,this.onGround=!1;return}if(this.onGround||(this.vy=Math.max(this.vy-Xg*e,qg)),this.keys.left?(this.vx=-eo,this.facingRight=!1):this.keys.right?(this.vx=eo,this.facingRight=!0):this.vx*=.6,this.jumpTap)if(this.onGround)this.vy=sc,this.onGround=!1,this.jumpsLeft=1;else if(this.jumpsLeft>0)this.vy=oc,this.jumpsLeft--;else for(const t of this.swingBars){const i=this.px-t.anchorX,n=this.py-t.anchorY,s=Math.sqrt(i*i+n*n);if(s<t.radius+1.5&&this.py<t.anchorY+.5){this.swingBar=t;const r=Math.max(s,t.radius);this.swingAngle=Math.atan2(i,-n),this.swingOmega=this.vx/r,this.vx=0,this.vy=0;return}}if(!this.onGround)for(const t of this.swingBars){const i=Math.abs(this.py-t.anchorY),n=Math.abs(this.px-t.anchorX);if(i<.6&&n<t.radius&&this.vy<0){this.swingBar=t,this.swingAngle=Math.atan2(this.px-t.anchorX,-(this.py-t.anchorY)),this.swingOmega=this.vx/t.radius,this.vx=0,this.vy=0;return}}this.px+=this.vx*e,this.py+=this.vy*e,this.px=Math.max(-8.2,Math.min(8.2,this.px)),this.onGround=!1;for(const t of this.platforms)if(!t.crumbled&&this.px+An>t.x1&&this.px-An<t.x2&&this.py>t.y-.5&&this.py<t.y+1&&this.vy<=0){this.py=t.y,this.vy=0,this.onGround=!0,this.jumpsLeft=2;break}}_physicsClimb(e){const t=this.climbPole;this.keys.up&&(this.py+=rc*e),this.keys.down&&(this.py-=rc*e);for(const i of this.platforms)if(!i.crumbled&&Math.abs(this.py-i.y)<.4&&this.px>=i.x1&&this.px<=i.x2){this.climbPole=null,this.py=i.y,this.onGround=!0,this.jumpsLeft=2;return}(this.py<t.y1||this.py>t.y2)&&(this.climbPole=null),this.jumpTap&&(this.climbPole=null,this.vy=sc*.85,this.jumpsLeft=1,this.keys.left?(this.vx=-eo*1.3,this.facingRight=!1):this.keys.right&&(this.vx=eo*1.3,this.facingRight=!0))}_physicsSwing(e){const t=this.swingBar,i=t.radius;if(this.swingOmega+=-(9.8/i)*Math.sin(this.swingAngle)*e,this.keys.left&&(this.swingOmega-=4*e),this.keys.right&&(this.swingOmega+=4*e),this.swingOmega*=.993,this.swingAngle+=this.swingOmega*e,this.px=t.anchorX+i*Math.sin(this.swingAngle),this.py=t.anchorY-i*Math.cos(this.swingAngle),this.facingRight=this.swingOmega>0,this.jumpTap){this.swingBar=null;const n=this.swingOmega*i;this.vx=n*Math.cos(this.swingAngle)*1.4,this.vy=Math.max(oc*.75,Math.abs(n)*.8+4),this.jumpsLeft=1,this.onGround=!1}for(const n of this.platforms)!n.crumbled&&this.px+An>n.x1&&this.px-An<n.x2&&Math.abs(this.py-n.y)<.4&&this.swingOmega<1.5&&(this.swingBar=null,this.py=n.y,this.vx=0,this.vy=0,this.onGround=!0,this.jumpsLeft=2)}_loseLife(){if(this.lives--,this._updateHearts(),this.lives<=0){this._end(!1);return}const e=Math.max(0,Math.floor(this.py/Qe)-1);this.px=0,this.py=e*Qe,this.vx=0,this.vy=0,this.onGround=!1,this.jumpsLeft=2,this.climbPole=null,this.swingBar=null}_end(e){if(this.gameOver)return;this.gameOver=!0,cancelAnimationFrame(this.rafId);const t=e?1:-.3,i=document.createElement("div");i.style.cssText=`
      position:absolute; top:50%; left:50%; transform:translate(-50%,-55%);
      background:rgba(0,0,0,0.88); padding:32px 40px;
      border-radius:22px; font-size:26px; font-weight:900; text-align:center;
      font-family:system-ui,sans-serif; z-index:200;
      box-shadow:0 8px 32px rgba(0,0,0,0.6);
      border:2px solid ${e?"#FFD700":"#C1666B"};
      color: ${e?"#FFD97A":"#FF6B6B"};
    `,i.innerHTML=e?'🏆 DELIVERED!<br><small style="font-size:15px;font-weight:500;color:#ccc;">Full pay — nice work, Jarrad.</small>':`💀 SCAFFOLD FAIL<br><small style="font-size:15px;font-weight:500;color:#ccc;">−30% penalty. Jarrad's blaming his phone.</small>`,this.overlay.appendChild(i),setTimeout(()=>{this._cleanup(),this.onCompleteFn({score:e?100:0,qualityPct:t,message:e?"Scaffold conquered!":"Scaffold failed — 30% deducted."})},e?1800:2200)}_cleanup(){cancelAnimationFrame(this.rafId),this.renderer.dispose(),this.overlay.dispatchEvent(new Event("remove")),this.overlay.remove()}mount(e,t){this.start(t)}unmount(){this.gameOver||(this.gameOver=!0,this._cleanup())}}class jg{constructor(){E(this,"overlay");E(this,"active",!1);E(this,"trowelingGame",null);E(this,"scaffoldGame",null);E(this,"safetyTimer",null);this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,t.addEventListener("click",()=>{this.stop(),e({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(t),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),e({score:70,qualityPct:.7,message:"Time up!"}))},6e4),setTimeout(()=>{if(this.active)try{this.trowelingGame=new Vg,this.trowelingGame.mount(this.overlay,i=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),e(i)})}catch(i){console.error("TrowelingGame init failed:",i);const n=document.createElement("div");n.style.cssText=`
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
    `,t.addEventListener("click",()=>{this.stop(),e({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(t),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),e({score:50,qualityPct:.5,message:"Time up on the scaffold!"}))},9e4),setTimeout(()=>{if(this.active)try{this.scaffoldGame=new Yg,this.scaffoldGame.mount(this.overlay,i=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),e(i)})}catch(i){console.error("ScaffoldGame init failed:",i);const n=document.createElement("div");n.style.cssText=`
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; height:100%; color:#fff;
          font-family:system-ui,sans-serif; gap:24px; padding:40px;
          text-align:center;
        `,n.innerHTML=`
          <div style="font-size:60px">🪣</div>
          <div style="font-size:30px; font-weight:800;">SCAFFOLD CLIMBED!</div>
          <div style="font-size:16px; opacity:0.7;">Tap DONE to collect your pay</div>
        `,this.overlay.appendChild(n)}},120)}startRandom(e){Math.random()<.5?this.startTroweling(e):this.startScaffold(e)}stop(){this.safetyTimer&&(clearTimeout(this.safetyTimer),this.safetyTimer=null),this.trowelingGame&&(this.trowelingGame.unmount(),this.trowelingGame=null),this.scaffoldGame&&(this.scaffoldGame.unmount(),this.scaffoldGame=null),this.overlay.style.display="none",this.overlay.innerHTML="",this.active=!1}}function uh(){return localStorage.getItem("tem-rush-btc-achieved")==="1"}function $g(o={}){const e=o.recipientName??"Apprentice Plasterer",t=o.dateStr??new Date().toLocaleDateString("en-AU",{day:"numeric",month:"long",year:"numeric"}),i=o.btcAchieved??uh(),n=900,s=i?820:640,r=document.createElement("canvas");r.width=n,r.height=s;const a=r.getContext("2d");a.fillStyle="#0D0B08",a.fillRect(0,0,n,s);const l=a.createLinearGradient(0,0,n,s);l.addColorStop(0,"rgba(40,32,20,0.95)"),l.addColorStop(.5,"rgba(28,22,14,0.98)"),l.addColorStop(1,"rgba(40,32,20,0.95)"),a.fillStyle=l,a.fillRect(0,0,n,s),a.strokeStyle="#C8A86A",a.lineWidth=3,a.strokeRect(18,18,n-36,s-36),a.strokeStyle="rgba(200,168,106,0.35)",a.lineWidth=1,a.strokeRect(26,26,n-52,s-52);const c=[[36,36],[n-36,36],[36,s-36],[n-36,s-36]];for(const[R,A]of c)a.strokeStyle="#C8A86A",a.lineWidth=1.5,a.beginPath(),a.arc(R,A,10,0,Math.PI*2),a.stroke(),a.beginPath(),a.arc(R,A,5,0,Math.PI*2),a.fillStyle="#C8A86A",a.fill();const h=n/2,u=74;a.fillStyle="#C8A86A",a.fillRect(h-3,u,6,22);for(let R=0;R<3;R++){const A=20-R*4,C=u-R*14;a.beginPath(),a.arc(h,C,A,0,Math.PI*2),a.fill()}a.textAlign="center",a.fillStyle="#C8A86A",a.font="700 11px 'Courier New', monospace",a.letterSpacing="4px",a.fillText("TROWELED EARTH MELBOURNE",n/2,148),a.fillStyle="rgba(200,168,106,0.45)",a.fillRect(n/2-180,158,360,1),a.fillStyle="#F0E8D8",a.font="900 34px system-ui, sans-serif",a.letterSpacing="0px",a.fillText("Certificate of Completion",n/2,200),a.fillStyle="rgba(200,168,106,0.45)",a.fillRect(n/2-220,214,440,1),a.fillStyle="rgba(240,232,216,0.55)",a.font="400 15px system-ui, sans-serif",a.fillText("This certifies that",n/2,258),a.fillStyle="#FFD97A",a.font="700 28px system-ui, sans-serif",a.fillText(e,n/2,300),a.fillStyle="rgba(200,168,106,0.45)",a.fillRect(n/2-200,312,400,1),a.fillStyle="rgba(240,232,216,0.55)",a.font="400 15px system-ui, sans-serif",a.fillText("has completed all TEM Rush training missions",n/2,348),a.fillText("and achieved full collection of Troweled Earth works.",n/2,372);const d=n/2-200,f=394,g=400,x=58;a.fillStyle="rgba(200,168,106,0.08)",a.strokeStyle="rgba(200,168,106,0.3)",a.lineWidth=1,a.beginPath(),a.roundRect(d,f,g,x,8),a.fill(),a.stroke(),a.fillStyle="#C8A86A",a.font="700 11px 'Courier New', monospace",a.letterSpacing="2px",a.fillText("QUALIFICATION",n/2,f+20),a.fillStyle="#F0E8D8",a.font="700 17px system-ui, sans-serif",a.letterSpacing="0px",a.fillText("TEM Rush — Plasterer's Apprentice",n/2,f+44);const m=n/2-160,p=466,y=320,M=52;a.fillStyle="rgba(193,102,107,0.15)",a.strokeStyle="rgba(193,102,107,0.5)",a.lineWidth=1.5,a.beginPath(),a.roundRect(m,p,y,M,8),a.fill(),a.stroke(),a.fillStyle="#C1666B",a.font="700 11px 'Courier New', monospace",a.letterSpacing="2px",a.fillText("5% OFF TEM STORE — USE CODE:",n/2,p+20),a.fillStyle="#FFD97A",a.font="900 20px system-ui, sans-serif",a.letterSpacing="3px",a.fillText("TEMRUSH5",n/2,p+41),a.letterSpacing="0px";const v=556;if(a.strokeStyle="rgba(200,168,106,0.4)",a.lineWidth=1,a.beginPath(),a.moveTo(n/2-260,v),a.lineTo(n/2-80,v),a.stroke(),a.beginPath(),a.moveTo(n/2+80,v),a.lineTo(n/2+260,v),a.stroke(),a.fillStyle="rgba(240,232,216,0.5)",a.font="400 12px system-ui, sans-serif",a.fillText("Matt Maloy",n/2-170,v+16),a.fillText(t,n/2+170,v+16),a.fillStyle="rgba(200,168,106,0.45)",a.font="400 10px 'Courier New', monospace",a.fillText("Director, Troweled Earth Melbourne",n/2-170,v+32),a.fillText("Date of Completion",n/2+170,v+32),a.fillStyle="rgba(200,168,106,0.06)",a.font="900 90px system-ui, sans-serif",a.save(),a.translate(n/2,s/2+20),a.rotate(-.18),a.fillText("CERTIFIED",0,0),a.restore(),i){a.strokeStyle="rgba(247,147,26,0.35)",a.lineWidth=1,a.beginPath(),a.moveTo(36,602),a.lineTo(n-36,602),a.stroke(),a.fillStyle="#F7931A",a.font="900 14px monospace",a.letterSpacing="2px",a.textAlign="center",a.fillText("₿  1 BITCOIN ACHIEVEMENT — BONUS REWARDS",n/2,624);const A=360,C=90,I=20,w=n/2-A-I/2,b=n/2+I/2,P=638,G=(O,W,j,Y,X)=>{a.fillStyle="rgba(247,147,26,0.10)",a.strokeStyle="rgba(247,147,26,0.40)",a.lineWidth=1,a.beginPath(),a.roundRect(O,W,A,C,8),a.fill(),a.stroke(),a.textAlign="center",a.fillStyle="#F7931A",a.font="700 11px monospace",a.letterSpacing="1px",a.fillText(`${j}  ${Y}`,O+A/2,W+22),a.fillStyle="rgba(240,232,216,0.5)",a.font="400 11px system-ui",a.letterSpacing="0px",a.fillText("USE CODE AT CHECKOUT:",O+A/2,W+46),a.fillStyle="#FFD97A",a.font="900 18px monospace",a.letterSpacing="2px",a.fillText(X,O+A/2,W+72)};G(w,P,"🎽","10% OFF TEM MERCH STORE","BTCPLASTER10"),G(b,P,"🪣","5% OFF MATERIAL SALES","BTCMAT5"),a.letterSpacing="0px",a.textAlign="center",a.fillStyle="rgba(200,168,106,0.4)",a.font="400 10px monospace",a.fillText("Present this certificate at participating TEM retail stores",n/2,746)}return r.toDataURL("image/png")}const Jg="https://troweledearthmelbourne.com.au",ac="TEMRUSH5",lc="tem-rush-cert-unlocked";class bs{constructor(){E(this,"overlay",null);E(this,"certDataUrl",null)}static isUnlocked(){return localStorage.getItem(lc)==="1"}trigger(){localStorage.setItem(lc,"1"),this._show(!0)}open(){bs.isUnlocked()&&this._show(!1)}_show(e){this.overlay&&(this.overlay.remove(),this.overlay=null),this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
        <a href="${Jg}" target="_blank"
           style="color:#C8A86A; font-weight:700; text-decoration:none;">troweledearthmelbourne.com.au</a>
      </div>
      <div style="background:rgba(0,0,0,0.4); border:1px solid rgba(200,168,106,0.4); border-radius:10px;
                  padding:14px; text-align:center;">
        <div style="color:rgba(200,168,106,0.7); font-size:11px; letter-spacing:2px; margin-bottom:6px; font-family:monospace;">
          USE PROMO CODE AT CHECKOUT
        </div>
        <div style="color:#FFD97A; font-size:clamp(22px,7vw,32px); font-weight:900; letter-spacing:4px; font-family:monospace;">
          ${ac}
        </div>
      </div>
      <button id="copy-code-btn" style="
        background:rgba(200,168,106,0.15); border:1px solid rgba(200,168,106,0.4);
        color:#C8A86A; font-size:13px; font-weight:700; border-radius:8px;
        padding:10px; cursor:pointer; touch-action:manipulation; width:100%;
      ">📋 Copy Code</button>
    `,t.appendChild(s),setTimeout(()=>{const l=document.getElementById("copy-code-btn");l&&l.addEventListener("click",()=>{var c;(c=navigator.clipboard)==null||c.writeText(ac).then(()=>{l.textContent="✓ Copied!",setTimeout(()=>{l.textContent="📋 Copy Code"},2e3)})})},0);const r=document.createElement("div");r.style.cssText=`
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
    `;try{this.certDataUrl=$g({btcAchieved:uh()});const l=document.createElement("img");l.src=this.certDataUrl,l.style.cssText=`
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
    `,i.addEventListener("click",()=>e.remove()),e.addEventListener("click",n=>{n.target===e&&e.remove()}),e.appendChild(t),e.appendChild(i),document.body.appendChild(e)}_downloadCert(){if(!this.certDataUrl)return;const e=document.createElement("a");e.href=this.certDataUrl,e.download="TEM-Rush-Certificate.png",e.click()}_close(){this.overlay&&(this.overlay.remove(),this.overlay=null)}}class Kg{constructor(){E(this,"overlay",null);E(this,"rewardScreen",new bs)}show(){if(this.overlay){this.refresh(),this.overlay.style.display="flex";return}this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,this.overlay.appendChild(r),this.overlay.addEventListener("click",a=>{a.target===this.overlay&&this.hide()}),document.body.appendChild(this.overlay),this.refresh()}refresh(){if(!this.overlay)return;const e=As(),t=e.length,i=ln.length,n=this.overlay.querySelector("#gallery-progress-wrap");if(n){n.innerHTML="";const a=document.createElement("div");a.style.cssText=`
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
        `,l){const h=document.createElement("img");h.src=a.file,h.alt=a.name,h.style.cssText=`
            width: 100%; height: 100%;
            object-fit: cover;
            filter: blur(1px) brightness(0.75);
            display: block; transition: filter 0.2s;
          `,c.appendChild(h);const u=document.createElement("div");u.style.cssText=`
            position: absolute; bottom: 0; left: 0; right: 0;
            padding: 8px 10px 10px;
            background: linear-gradient(transparent, rgba(0,0,0,0.85));
            color: #fff; font-size: clamp(11px,2.5vw,14px);
            font-weight: 700; text-align: center;
          `,u.textContent=a.name,c.appendChild(u);const d=document.createElement("div");d.style.cssText=`
            position: absolute; top: 8px; right: 8px;
            font-size: 16px; opacity: 0.6; pointer-events: none;
          `,d.textContent="🔍",c.appendChild(d),c.style.cursor="pointer",c.addEventListener("click",()=>this._openLightbox(a.file,a.name)),c.addEventListener("mouseenter",()=>{h.style.filter="blur(0px) brightness(0.9)"}),c.addEventListener("mouseleave",()=>{h.style.filter="blur(1px) brightness(0.75)"})}else{const h=document.createElement("div");h.style.cssText=`
            width: 100%; height: 100%;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            gap: 8px;
          `,h.innerHTML=`
            <div style="font-size: clamp(24px,8vw,40px); opacity:0.35;">🔒</div>
            <div style="color:rgba(255,255,255,0.25); font-size:clamp(12px,3vw,16px); font-weight:700;">???</div>
          `,c.appendChild(h)}s.appendChild(c)}));const r=this.overlay.querySelector("#gallery-encourage");r&&(t>=i?(r.innerHTML=`
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
    `,r.textContent="Tap anywhere to close",i.appendChild(r),i.addEventListener("click",()=>i.remove()),document.body.appendChild(i)}hide(){this.overlay&&(this.overlay.style.display="none")}}const cc=[16032353,15167313,2792847,2508371,15320170,11066076,16739179,7029286],Zg=16767916,Qg=40,hc=8;function ex(o){const e=new Ne,t=new K({color:o}),i=new K({color:Zg}),n=new K({color:o}),s=new B(new We(.3,.35,1.1,7),t);s.position.set(0,.55,0),e.add(s);const r=new B(new dt(.28,6,5),i);r.position.set(0,1.28,0),e.add(r);const a=new B(new Q(.15,.65,.15),t);a.position.set(-.45,.75,0),a.rotation.z=.15,e.add(a);const l=new B(new Q(.15,.65,.15),t);l.position.set(.45,.75,0),l.rotation.z=-.15,e.add(l);const c=new B(new Q(.18,.55,.18),n);c.position.set(-.18,0,.05),e.add(c);const h=new B(new Q(.18,.55,.18),n);return h.position.set(.18,0,-.05),e.add(h),{group:e,leftArm:a,rightArm:l,leftLeg:c,rightLeg:h}}class tx{constructor(e){E(this,"pedestrians",[]);E(this,"scene");this.scene=e,this._spawn()}_spawn(){const e=[];for(let i=-200;i<=200;i+=40)e.push(i);const t=i=>{const n=cc[Math.floor(Math.random()*cc.length)],{group:s,leftArm:r,rightArm:a,leftLeg:l,rightLeg:c}=ex(n),h=e[Math.floor(Math.random()*e.length)],u=Math.random()>.5?5:-5,d=h+u,f=[];for(let R=-240;R<240;R+=40)f.push(R);const g=f[Math.floor(Math.random()*f.length)],x=g+hc/2,m=g+Qg-hc/2,p=x+Math.random()*(m-x),y=Math.random()>.5?1:-1,M=2+Math.random()*1.5,v={group:s,axis:i,roadPos:d,segStart:x,segEnd:m,pos:p,dir:y,speed:M,scattering:!1,scatterTimer:0,scatterDirX:0,scatterDirZ:0,walkCycle:Math.random()*Math.PI*2,leftArm:r,rightArm:a,leftLeg:l,rightLeg:c};this.pedestrians.push(v),this.scene.add(s),this._applyPosition(v),this._applyFacing(v)};for(let i=0;i<20;i++)t("x");for(let i=0;i<20;i++)t("z")}_applyPosition(e){e.axis==="x"?e.group.position.set(e.pos,0,e.roadPos):e.group.position.set(e.roadPos,0,e.pos)}_applyFacing(e){if(e.scattering){e.group.rotation.y=Math.atan2(e.scatterDirX,e.scatterDirZ);return}e.axis==="x"?e.group.rotation.y=e.dir===1?-Math.PI/2:Math.PI/2:e.group.rotation.y=e.dir===1?Math.PI:0}update(e,t,i){for(const n of this.pedestrians){const s=n.group.position.x,r=n.group.position.z,a=s-t,l=r-i,c=Math.sqrt(a*a+l*l);if(!n.scattering&&c<7){n.scattering=!0,n.scatterTimer=2.5;const d=Math.max(c,.01);n.scatterDirX=a/d,n.scatterDirZ=l/d}n.scattering?(n.group.position.x+=n.scatterDirX*12*e,n.group.position.z+=n.scatterDirZ*12*e,n.scatterTimer-=e,n.scatterTimer<=0&&(n.scattering=!1,n.axis==="x"?n.pos=Math.max(n.segStart,Math.min(n.segEnd,n.group.position.x)):n.pos=Math.max(n.segStart,Math.min(n.segEnd,n.group.position.z)),this._applyPosition(n))):(n.pos+=n.dir*n.speed*e,n.pos>=n.segEnd?(n.pos=n.segEnd,n.dir=-1):n.pos<=n.segStart&&(n.pos=n.segStart,n.dir=1),this._applyPosition(n)),this._applyFacing(n);const h=n.scattering?12:n.speed;n.walkCycle+=h*e*2;const u=Math.sin(n.walkCycle);n.leftArm.rotation.z=u*.4+.15,n.rightArm.rotation.z=-u*.4-.15,n.leftLeg.rotation.x=u*.5,n.rightLeg.rotation.x=-u*.5}}}const _i=class _i{constructor(e){E(this,"indicator");E(this,"scene");E(this,"lastVisit",-30);this.scene=e,this.indicator=new B(new dt(1.5,10,8),new K({color:13918762,emissive:new be(10498064),emissiveIntensity:.8})),this.indicator.position.set(_i.POS.x,10,_i.POS.z),this.scene.add(this.indicator)}update(e){this.indicator.position.y=10+Math.sin(Date.now()*.002)*.5,this.indicator.rotation.y+=e*1.5}isNearby(e,t){const i=e-_i.POS.x,n=t-_i.POS.z;return Math.sqrt(i*i+n*n)<_i.TRIGGER_RADIUS}tryVisit(e,t){if(!this.isNearby(e,t))return!1;const i=Date.now()/1e3;return i-this.lastVisit<20?!1:(this.lastVisit=i,!0)}};E(_i,"POS",{x:-60,z:-100}),E(_i,"TRIGGER_RADIUS",12);let la=_i;class ix{constructor(){E(this,"level",0);E(this,"isUrgent",!1);E(this,"lastUrgentToast",0);E(this,"caffeinated",!1);E(this,"caffeineTimer",0)}update(e,t){this.caffeinated&&(this.caffeineTimer-=e,this.caffeineTimer<=0&&(this.caffeinated=!1));const i=this.caffeinated?.018:.012;Math.abs(t)>2?this.level=Math.min(1,this.level+e*i):this.level=Math.max(0,this.level-e*.005),this.isUrgent=this.level>.8}drinkCoffee(){this.level=Math.min(1,this.level+.4),this.caffeinated=!0,this.caffeineTimer=30,this.isUrgent=this.level>.8}tryRelief(e,t){const i=e-100,n=t-60;return Math.sqrt(i*i+n*n)>14||this.level===0?!1:(this.level=0,this.isUrgent=!1,this.caffeinated=!1,this.caffeineTimer=0,!0)}get spillMultiplier(){return this.isUrgent?1.8:1}}const ls={x:30,z:28},dc=["Got a dollar, mate? 💸","You got a light? 🚬","Nice van. Does it leak?","My brother Jarrad says I'm not qualified. He's right but I don't like it.","These boots were not made for plastering. Yet here we are.","Jump in? No seriously, I need a lift.","Jarrad says he's read the TDS. He hasn't. I've lived with him.","You look like you need a coffee and a toilet. In that order.","Phil owes me fifty bucks. Pass it on.","I plastered that wall. Don't tell Jarrad.","Matt left the primer lid off again. Just letting you know."],ms=class ms{constructor(e){E(this,"wrapper");E(this,"character");E(this,"ropeRing");E(this,"ropePivot");E(this,"lastDialogue",0);E(this,"cooldown",9e3);this.character=new Ts(ki.Mikayla),this.character.group.scale.set(2,2,2);const t=this.character.buildJumpRopeClip();this.character.mixer.stopAllAction(),this.character.mixer.clipAction(t).play(),this.ropePivot=new Ne,this.ropePivot.position.set(0,1.3,0),this.ropePivot.rotation.y=Math.PI/2,this.character.group.add(this.ropePivot),this.ropeRing=new B(new Ao(1.35,.05,7,28),new K({color:8079902})),this.ropePivot.add(this.ropeRing);const i=this._makeNameBoard();i.position.set(0,8.8,0);const n=new B(new dn(1.2,1.7,32),new Ot({color:14501e3,side:Nt}));n.rotation.x=-Math.PI/2,n.position.y=.05,this.wrapper=new Ne,this.wrapper.add(this.character.group),this.wrapper.add(i),this.wrapper.add(n),this.wrapper.position.set(ls.x,0,ls.z),e.add(this.wrapper)}_makeNameBoard(){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d");t.fillStyle="rgba(190, 40, 90, 0.88)",t.roundRect?t.roundRect(2,2,252,60,8):t.rect(2,2,252,60),t.fill(),t.fillStyle="#fff",t.font="bold 30px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("MIKAYLA",128,32);const i=new Ss(e);return new B(new ht(2.4,.6),new Ot({map:i,transparent:!0,depthWrite:!1}))}update(e,t,i,n){this.character.update(e),this.ropeRing.rotation.z+=e*(2*Math.PI/ah);const s=t-ls.x,r=i-ls.z;this.character.group.rotation.y=Math.atan2(s,r);const a=Math.sqrt(s*s+r*r),l=Date.now();if(a<ms.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=dc[Math.floor(Math.random()*dc.length)];return n.show(ki.Mikayla,c),this.lastDialogue=l,!0}return!1}dispose(e){e.remove(this.wrapper)}};E(ms,"POS",ls),E(ms,"TRIGGER_RADIUS",15);let nn=ms;const cs={x:-4,z:-6},uc=["Ha ha ha HA HA! You picked up ze buckets! Love it!","I mix ze plaster by hand. Za gloves are for ze weak.","In Germany, zis would be a warm-up. But I like Australia. Ze mud here is good.","I have mud wrestled ze entire Brunswick football club. Zey lost. Badly.","Ze mixing ratio is one part water, two parts product, one part pure power.","Last Saturday I wrestled a man twice my size. Sunday I mixed 50 buckets. Your turn.","Don't let ze hair fool you. I once arm wrestled Phil. He is still talking about it.","Ha HA! You are funny. Not as funny as ze last guy. But funny."],gs=class gs{constructor(e){E(this,"wrapper");E(this,"character");E(this,"lastDialogue",0);E(this,"cooldown",1e4);E(this,"audioCtx",null);this.character=new Ts(ki.Connie),this.character.group.scale.set(2,2.35,2);const t=new K({color:15789544}),i=new B(new dt(.16,8,6),t);i.position.set(-.12,1.55,.19);const n=new B(new dt(.16,8,6),t);n.position.set(.12,1.55,.19),this.character.group.add(i),this.character.group.add(n),this.character.setLogoTexture(sh(ki.Connie.shirtColor));const s=this._makeNameBoard();s.position.set(0,8.8,0);const r=new B(new dn(1.2,1.7,32),new Ot({color:16109664,side:Nt}));r.rotation.x=-Math.PI/2,r.position.y=.05,this.wrapper=new Ne,this.wrapper.add(this.character.group),this.wrapper.add(s),this.wrapper.add(r),this.wrapper.position.set(cs.x,0,cs.z),e.add(this.wrapper)}_makeNameBoard(){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d");return t.fillStyle="rgba(200, 150, 20, 0.88)",t.roundRect?t.roundRect(2,2,252,60,8):t.rect(2,2,252,60),t.fill(),t.fillStyle="#fff",t.font="bold 30px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("CONNIE",128,32),new B(new ht(2.4,.6),new Ot({map:new Ss(e),transparent:!0,depthWrite:!1}))}playLaugh(){try{this.audioCtx||(this.audioCtx=new(window.AudioContext||window.webkitAudioContext));const e=this.audioCtx,t=7;for(let i=0;i<t;i++){const n=e.currentTime+i*.16,s=e.createOscillator(),r=e.createGain(),a=480+i*18+Math.random()*60;s.frequency.setValueAtTime(a,n),s.frequency.exponentialRampToValueAtTime(a*.48,n+.13),r.gain.setValueAtTime(0,n),r.gain.linearRampToValueAtTime(.35,n+.03),r.gain.exponentialRampToValueAtTime(.001,n+.15),s.connect(r),r.connect(e.destination),s.start(n),s.stop(n+.17)}}catch{}}update(e,t,i,n){this.character.update(e);const s=t-cs.x,r=i-cs.z;this.character.group.rotation.y=Math.atan2(s,r);const a=Math.sqrt(s*s+r*r),l=Date.now();if(a<gs.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=uc[Math.floor(Math.random()*uc.length)];return n.show(ki.Connie,c),this.lastDialogue=l,!0}return!1}dispose(e){var t;e.remove(this.wrapper),(t=this.audioCtx)==null||t.close()}};E(gs,"POS",cs),E(gs,"TRIGGER_RADIUS",16);let ps=gs;const nx={Connie:{scale:[2,2.35,2],addGeometry:o=>{const e=new K({color:15789544}),t=new B(new dt(.16,8,6),e);t.position.set(-.12,1.55,.19);const i=new B(new dt(.16,8,6),e);i.position.set(.12,1.55,.19),o.add(t),o.add(i)}},Mikayla:{scale:[1.9,1.9,1.9]}};class sx{constructor(){E(this,"renderer");E(this,"scene");E(this,"camera");E(this,"canvas");E(this,"cache",new Map);this.canvas=document.createElement("canvas"),this.canvas.width=160,this.canvas.height=160,this.renderer=new Ma({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(160,160),this.renderer.setClearColor(0,0),this.scene=new Sa;const e=new Ca(16777215,.7);this.scene.add(e);const t=new Hn(16774624,1);t.position.set(2,4,5),this.scene.add(t);const i=new Hn(14741759,.4);i.position.set(-3,2,3),this.scene.add(i),this.camera=new Lt(38,1,.1,100),this.camera.position.set(1.2,5,5.5),this.camera.lookAt(.1,3.8,0)}renderPortrait(e){var c;if(this.cache.has(e.name))return this.cache.get(e.name);this.scene.children.filter(h=>!(h instanceof Es)).forEach(h=>this.scene.remove(h));const i=nx[e.name],n=new Ts(e),[s,r,a]=(i==null?void 0:i.scale)??[2,2,2];n.group.scale.set(s,r,a),n.group.rotation.y=-Math.PI*.18,(c=i==null?void 0:i.addGeometry)==null||c.call(i,n.group),this.scene.add(n.group),this.renderer.render(this.scene,this.camera);const l=this.canvas.toDataURL("image/png");return this.cache.set(e.name,l),this.scene.remove(n.group),l}dispose(){this.renderer.dispose()}}class ox{constructor(){E(this,"container");E(this,"portrait");E(this,"nameEl");E(this,"textEl");E(this,"portraitRenderer");E(this,"hideTimeout",null);E(this,"visible",!1);this.portraitRenderer=new sx,this._injectStyles(),this._buildDOM()}_injectStyles(){if(document.getElementById("speech-bubble-styles"))return;const e=document.createElement("style");e.id="speech-bubble-styles",e.textContent=`
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
    `,document.head.appendChild(e)}_buildDOM(){this.container=document.createElement("div"),this.container.id="tem-speech-bubble";const e=document.createElement("div");e.className="sb-portrait-wrap",this.portrait=document.createElement("img"),this.portrait.className="sb-portrait-img",e.appendChild(this.portrait);const t=document.createElement("div");t.className="sb-text-area",this.nameEl=document.createElement("span"),this.nameEl.className="sb-name",this.textEl=document.createElement("span"),this.textEl.className="sb-text",t.appendChild(this.nameEl),t.appendChild(this.textEl),this.container.appendChild(e),this.container.appendChild(t),document.body.appendChild(this.container)}show(e,t){this.nameEl.textContent=e.name,this.textEl.textContent=t,this.portrait.src=this.portraitRenderer.renderPortrait(e),this.container.style.display="flex",requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.container.classList.add("sb-visible")})}),this.visible=!0,this.hideTimeout!==null&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(()=>this.hide(),1e4)}setScreenPosition(e,t){this.container.style.left=`${e}px`,this.container.style.top=`${t}px`}hide(){this.container.classList.remove("sb-visible"),this.visible=!1,setTimeout(()=>{this.visible||(this.container.style.display="none")},220)}isVisible(){return this.visible}dispose(){this.portraitRenderer.dispose(),document.body.removeChild(this.container)}}const hs=15;class rx{constructor(){E(this,"overlay");E(this,"titleEl");E(this,"bodyEl");E(this,"sloganEl");E(this,"hintEl");E(this,"progressBar");E(this,"_active",!1);E(this,"_readyToResume",!1);E(this,"_resumeCallback",null);E(this,"_lockTimer",null);E(this,"_countdownInterval",null);E(this,"_autoTimer",null);E(this,"_secondsLeft",hs);if(!document.getElementById("dp-styles")){const a=document.createElement("style");a.id="dp-styles",a.textContent=`
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
    `,r.textContent="▶  TAP GAS or REV to skip",t.appendChild(this.titleEl),t.appendChild(i),s.appendChild(this.bodyEl),e.appendChild(t),e.appendChild(n),e.appendChild(s),e.appendChild(this.sloganEl),e.appendChild(r),this.overlay.appendChild(e),document.body.appendChild(this.overlay),this.overlay.addEventListener("touchstart",a=>{a.preventDefault(),this.tryResume()},{passive:!1}),this.overlay.addEventListener("click",()=>this.tryResume())}show(e,t,i,n,s){this._clearTimers(),this._active=!0,this._readyToResume=!1,this._resumeCallback=i,this._secondsLeft=hs,this.titleEl.textContent=e,this.bodyEl.textContent=t,this.sloganEl.textContent=n??"",this.sloganEl.style.display=n?"block":"none",this.hintEl.textContent=String(hs),this.overlay.style.display="flex",this.progressBar.style.transition="none",this.progressBar.style.width="100%",this.progressBar.offsetWidth,this.progressBar.style.transition=`width ${hs}s linear`,this.progressBar.style.width="0%",this._lockTimer=setTimeout(()=>{this._readyToResume=!0},380),this._countdownInterval=setInterval(()=>{this._secondsLeft=Math.max(0,this._secondsLeft-1),this.hintEl.textContent=String(this._secondsLeft)},1e3),this._autoTimer=setTimeout(()=>{this._forceResume()},hs*1e3)}tryResume(){!this._active||!this._readyToResume||this._doResume()}_forceResume(){this._active&&this._doResume()}_doResume(){this._active=!1,this._readyToResume=!1,this.overlay.style.display="none",this._clearTimers();const e=this._resumeCallback;this._resumeCallback=null,e==null||e()}_clearTimers(){this._lockTimer&&(clearTimeout(this._lockTimer),this._lockTimer=null),this._autoTimer&&(clearTimeout(this._autoTimer),this._autoTimer=null),this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}get isActive(){return this._active}}const ur=[`Our finishes don't copy the earth.
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
We're on our way.`],fr=["DRIVING TIP: The spill meter doesn't care about your excuses. Neither does the road.","DRIVING TIP: Traffic in Melbourne has never once moved for a plastering van. You are not the exception.","DRIVING TIP: Hitting a car at speed is, technically, texture development. We do not recommend it.","DRIVING TIP: The crew will comment on your driving. They are not wrong.","DRIVING TIP: Every bump is just the plaster finding its character. That's what you're telling yourself.","CREW TIP: Tsuyoshi once vaulted into a moving van. He's done it again. You weren't watching.","CREW TIP: Phil will finish his tea before he gets in. Always. Plan for this.","CREW TIP: Jose was ready before you left the workshop. He's been ready since Tuesday.","CREW TIP: Jarrad has been standing there fifteen minutes. He will mention it.","CREW TIP: Fabio is smiling. He's also judging your gearwork. Smile back.","CLIENT TIP: Brad has never been to Europe. The wall will be 'very European' regardless.","CLIENT TIP: Darren is stressed. Darren is always stressed. The wall is fine. Darren is not.","CLIENT TIP: Patricia has read the full TDS. She's highlighted it. She will quiz you.","CLIENT TIP: Zephyr tried to do it himself. You're not here to judge. You are here to fix it.","CLIENT TIP: Mustafa's health inspector doesn't ask questions. You shouldn't either.","HEALTH TIP: Coffee steadies the trowel. What it does to the bladder is your problem.","HEALTH TIP: The toilet block is 100 metres east of the intersection. You know this now.","HEALTH TIP: Hydration is important. Timing is more important.","HEALTH TIP: The barista knows your order. So does your bladder.","BUSINESS TIP: TEM has been in business since before your GPS was a thing. Follow the waypoint anyway.","BUSINESS TIP: Quality render takes time. So does finding parking. Plan accordingly.","BUSINESS TIP: A finish that breathes with the wall is worth more than one that cracks by Thursday. Ask Zephyr.","BUSINESS TIP: Authenticity cannot be rushed. Darren is rushing you. Do your best.","The road to perfection runs through three crew pickups, a coffee stop, and a very urgent toilet.","Connie has seen everything. She is still laughing.","The van has been in worse situations. The plaster has not.","This city has 240 square units of roads and exactly one decent flat white. Find it.",`The walls remember every hand that shaped them.
The van remembers nothing. Drive carefully.`],ax=["One wall. One chance. The render decides everything.","A surface waiting to become something real.","From bare substrate to finished art — this is the job.",`The craft doesn't care about the deadline.
You do. Get there.`,"Clients don't buy plaster. They buy the moment the wall changes everything.",`Not every wall gets a second coat.
This one does. Make it count.`,"The difference between ordinary and extraordinary is one hand-applied layer.","Somewhere between the bucket and the wall, something real happens.",`They called TEM because they want it done right.
Don't prove them wrong.`,"This isn't a wall. It's a surface waiting to breathe."];function $i(o){return o[Math.floor(Math.random()*o.length)]}const Cn="./",yi={theme:`${Cn}audio/theme.aac`,theme2:`${Cn}audio/theme2.aac`,credits:`${Cn}audio/credits.m4a`,radio1:`${Cn}audio/radio1.m4a`,radio2:`${Cn}audio/radio2.m4a`,radio3:`${Cn}audio/radio3.m4a`},Ji=[{id:"tem-fm",name:"TEM FM",freq:"88.3",tagline:"Melbourne's Most Refined",songs:["★ Troweled Earth (The Anthem) [LIVE]","Fresh Plaster Dreams","Tadelakt Sunrise","Ochre & Ochre","Marbellino Midnight","Render Slowly (feat. Phil)"],dj:["TEM FM — opening tonight with the anthem. Turn it up.","That was Troweled Earth — The Anthem. Written on site, finished in the van.","You're listening to TEM FM. Don't spill.","Smooth surfaces. Smoother sounds. TEM FM 88.3.","That was a certified classic. Like a three-coat stucco system.","Blood red clay to concrete's cold embrace... TEM FM."],bpm:68,rootHz:220,vibe:"ambient",color:"#C8A86A",audioFile:yi.theme},{id:"connie-gold",name:"CONNIE'S GOLD",freq:"103.7",tagline:"For the Craft, Darling",songs:["Quando Quando Quando (In the Van)","Bella Ciao Bella Render","Volare Trowel","Arrivederci Deadline","O Sole Mio Stucco"],dj:["Ehhhh — welcome to Connie's Gold! Ha ha ha ha!","You're listening to the best station. Connie said so. She's right.","Connie's Gold 103.7 — music to plaster by, darling.","Next up: another classic. Just like our Antique Stucco. Ha!"],bpm:92,rootHz:261.63,vibe:"italian",color:"#E8A050",audioFile:yi.radio1},{id:"brunswick-beats",name:"BRUNSWICK BEATS",freq:"99.9",tagline:"Lo-Fi for Lo-Fi People",songs:["study playlist #47","plaster & chill","waiting for jarrad (again)","lost my trowel","bladder full, waypoint far"],dj:["Brunswick Beats. For people who get it.","That was a vibe. This is also a vibe. 99.9.","We don't talk. We just play the music. Brunswick Beats.","Jarrad submitted this playlist. He says it slaps. It does."],bpm:80,rootHz:196,vibe:"lofi",color:"#8B9EC8",audioFile:yi.radio2},{id:"the-scaffold",name:"THE SCAFFOLD",freq:"107.1",tagline:"Tune In, Fall Off",songs:["30% Penalty (Acoustic)","Epstein Was Right (Radio Edit)","Topknot Thunder","Hard Hat? Never Heard of Her","Five Floors No Fear"],dj:["THE SCAFFOLD. 107.1. You WILL survive the jump.","That riff goes harder than Tsuyoshi vaulting the van door.","Tune in. Fall off. THE SCAFFOLD.","Jarrad called in. Said he's been waiting fifteen minutes. Legend."],bpm:140,rootHz:164.81,vibe:"rock",color:"#C1666B"},{id:"fabio-pizza",name:"FABIO'S PIZZA RADIO",freq:"92.5",tagline:"Music for Real Men",songs:['Ehhhh (12" Extended Mix)',"San Marzano Morning","La Dolce Trowel","One Slice, Two Slice","Thin Base, Wood Fire (feat. Fabio)"],dj:["Fabio's Pizza Radio — ehhhh. That is all.","You're listening to 92.5. The pizza is coming. Be patient. Ehhhh.","That song — like a perfect margherita. Simple. Honest. Ehhhh.","Fabio's Pizza Radio. For men with trowels and good taste."],bpm:108,rootHz:246.94,vibe:"italian",color:"#D4602A",audioFile:yi.radio3},{id:"tem-talk",name:"TEM TALK",freq:"91.1",tagline:"Conversations From the Site",songs:["★ The Troweled Earth Podcast [LIVE]","Deep Dive: Blood Red Clay vs Venetian","Interview: Matt on the Warlord Method","Ask Connie — Running a Crew in Melbourne","Five Years of Tadelakt with Tsuyoshi"],dj:["TEM Talk 91.1 — real conversations from the trade.","You're listening to Melbourne's only plastering podcast. TEM Talk.","That was a conversation worth replaying. 91.1 FM.","Next up: more from the TEM crew. Stick around."],bpm:70,rootHz:180,vibe:"ambient",color:"#90B0C0",audioFile:yi.theme2}];class lx{constructor(){E(this,"ctx",null);E(this,"masterGain");E(this,"scheduleAhead",.1);E(this,"scheduleInterval",.05);E(this,"nextBeatTime",0);E(this,"beatCount",0);E(this,"currentStation",null);E(this,"nodes",[]);E(this,"schedulerTimer",0);E(this,"compressor");E(this,"realAudioEl",null);E(this,"realAudioActive",!1)}init(){try{return this.ctx=new(window.AudioContext||window.webkitAudioContext),this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.ratio.value=4,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.18,this.masterGain.connect(this.compressor),this.compressor.connect(this.ctx.destination),!0}catch{return!1}}setVolume(e){this.masterGain&&(this.masterGain.gain.value=e),this.realAudioEl&&(this.realAudioEl.volume=Math.min(1,e*4))}play(e){var t;if(this.stop(),this.currentStation=e,this.beatCount=0,e.audioFile){const i=Math.min(1,(((t=this.masterGain)==null?void 0:t.gain.value)??.18)*4.5),n=new Audio;n.src=e.audioFile,n.loop=!0,n.volume=i;const s=n.play();s!==void 0?s.then(()=>{this.realAudioEl=n,this.realAudioActive=!0}).catch(()=>{this.realAudioActive=!1,this._startGenerative()}):(this.realAudioEl=n,this.realAudioActive=!0)}else this._startGenerative()}_startGenerative(){!this.ctx||!this.currentStation||(this.ctx.state==="suspended"&&this.ctx.resume(),this.nextBeatTime=this.ctx.currentTime+.05,this.schedulerTimer=window.setInterval(()=>this._schedule(),this.scheduleInterval*1e3))}stop(){clearInterval(this.schedulerTimer),this.nodes.forEach(e=>{var t;try{(t=e.stop)==null||t.call(e),e.disconnect()}catch{}}),this.nodes=[],this.currentStation=null,this.realAudioEl&&(this.realAudioEl.pause(),this.realAudioEl.src="",this.realAudioEl=null),this.realAudioActive=!1}_schedule(){if(!this.ctx||!this.currentStation)return;const e=this.ctx.currentTime+this.scheduleAhead;for(;this.nextBeatTime<e;){this._scheduleBeat(this.nextBeatTime,this.beatCount,this.currentStation);const t=this.currentStation.bpm/60;this.nextBeatTime+=1/t,this.beatCount++}}_scheduleBeat(e,t,i){const n=Math.floor(t/4),s=t%4,r=i.rootHz;switch(i.vibe){case"ambient":this._ambientBeat(e,t,r);break;case"lofi":this._lofiBeat(e,s,r);break;case"rock":this._rockBeat(e,s,n,r);break;case"italian":this._italianBeat(e,s,n,r);break;case"electronic":this._electronicBeat(e,s,r);break}}_ambientBeat(e,t,i){if(this.ctx&&(t%4===0&&[i,i*1.25,i*1.5,i*2].forEach((s,r)=>{const a=this.ctx.createOscillator(),l=this.ctx.createGain(),c=this.ctx.createBiquadFilter();a.type="sine",a.frequency.value=s*.5,c.type="lowpass",c.frequency.value=800,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.06-r*.01,e+.4),l.gain.linearRampToValueAtTime(0,e+3.5),a.connect(c),c.connect(l),l.connect(this.masterGain),a.start(e),a.stop(e+4),this.nodes.push(a,l)}),t%8===5)){const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="triangle",n.frequency.value=i*4,s.gain.setValueAtTime(.04,e),s.gain.exponentialRampToValueAtTime(.001,e+.8),n.connect(s),s.connect(this.masterGain),n.start(e),n.stop(e+.9),this.nodes.push(n,s)}}_lofiBeat(e,t,i){if(!this.ctx)return;(t===0||t===2)&&this._kick(e,i*.5),(t===1||t===3)&&this._snare(e,.04),this._hihat(e,.025);const n=[i*.5,i*.5,i*.5*.75,i*.5*.9];this._bass(e,n[t],.25)}_rockBeat(e,t,i,n){if(!this.ctx)return;(t===0||t===2)&&this._kick(e,n*.4),(t===1||t===3)&&this._snare(e,.07),this._hihat(e,.05);const s=[n*.5,n*.5,n*.5*.8,n*.5];this._distBass(e,s[t%4]),t===0&&i%2===0&&[n,n*1.5,n*2].forEach(r=>{const a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type="sawtooth",a.frequency.value=r,l.gain.setValueAtTime(.035,e),l.gain.linearRampToValueAtTime(0,e+.5),a.connect(l),l.connect(this.masterGain),a.start(e),a.stop(e+.55),this.nodes.push(a,l)})}_italianBeat(e,t,i,n){if(this.ctx&&(t===0&&this._bass(e,n*.5,.3),(t===1||t===2||t===3)&&this._bass(e,n*.75,.12),t===0&&this._kick(e,n*.5),t===0||t===2)){const s=[n,n*1.122,n*1.26,n*1.498,n*1.682],r=s[i%s.length],a=this.ctx.createOscillator(),l=this.ctx.createGain();a.type="triangle",a.frequency.value=r;const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.frequency.value=5.5,h.gain.value=3,c.connect(h),h.connect(a.frequency),l.gain.setValueAtTime(.04,e),l.gain.linearRampToValueAtTime(0,e+.8),a.connect(l),l.connect(this.masterGain),c.start(e),a.start(e),c.stop(e+.9),a.stop(e+.9),this.nodes.push(a,c,l,h)}}_electronicBeat(e,t,i){this.ctx&&((t===0||t===2)&&this._kick(e,i*.5),(t===1||t===3)&&this._snare(e,.05),this._hihat(e,.03),t===0&&this._bass(e,i*.5,.25),t===2&&this._bass(e,i*.375,.2))}_kick(e,t){if(!this.ctx)return;const i=this.ctx.createOscillator(),n=this.ctx.createGain();i.frequency.setValueAtTime(t,e),i.frequency.exponentialRampToValueAtTime(20,e+.12),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.25),i.connect(n),n.connect(this.masterGain),i.start(e),i.stop(e+.3),this.nodes.push(i,n)}_snare(e,t){if(!this.ctx)return;const i=Math.floor(this.ctx.sampleRate*.18),n=this.ctx.createBuffer(1,i,this.ctx.sampleRate),s=n.getChannelData(0);for(let c=0;c<i;c++)s[c]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="bandpass",a.frequency.value=1800,a.Q.value=.8;const l=this.ctx.createGain();l.gain.setValueAtTime(t,e),l.gain.exponentialRampToValueAtTime(.001,e+.18),r.connect(a),a.connect(l),l.connect(this.masterGain),r.start(e),r.stop(e+.2),this.nodes.push(r,l)}_hihat(e,t){if(!this.ctx)return;const i=Math.floor(this.ctx.sampleRate*.06),n=this.ctx.createBuffer(1,i,this.ctx.sampleRate),s=n.getChannelData(0);for(let c=0;c<i;c++)s[c]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="highpass",a.frequency.value=7e3;const l=this.ctx.createGain();l.gain.setValueAtTime(t,e),l.gain.exponentialRampToValueAtTime(.001,e+.06),r.connect(a),a.connect(l),l.connect(this.masterGain),r.start(e),r.stop(e+.08),this.nodes.push(r,l)}_bass(e,t,i){if(!this.ctx)return;const n=this.ctx.createOscillator(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.type="sawtooth",n.frequency.value=t,s.type="lowpass",s.frequency.value=350,r.gain.setValueAtTime(i,e),r.gain.exponentialRampToValueAtTime(.001,e+.35),n.connect(s),s.connect(r),r.connect(this.masterGain),n.start(e),n.stop(e+.4),this.nodes.push(n,r)}_distBass(e,t){if(!this.ctx)return;const i=this.ctx.createOscillator(),n=this.ctx.createWaveShaper(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.value=t;const r=new Float32Array(256);for(let a=0;a<256;a++){const l=a*2/256-1;r[a]=Math.max(-.6,Math.min(.6,l*3))}n.curve=r,s.gain.setValueAtTime(.08,e),s.gain.exponentialRampToValueAtTime(.001,e+.3),i.connect(n),n.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+.35),this.nodes.push(i,s)}}class cx{constructor(){E(this,"container");E(this,"stationIdx",0);E(this,"on",!1);E(this,"songIdx",0);E(this,"djIdx",0);E(this,"songTimer",0);E(this,"djTimer",0);E(this,"nameEl");E(this,"songEl");E(this,"djEl");E(this,"iconEl");E(this,"freqEl");E(this,"engine",new lx);E(this,"engineReady",!1);E(this,"volumeSlider");E(this,"rafId",0);E(this,"lastUpdateTs",0);E(this,"_volOpen",!1);this._buildUI(),this.lastUpdateTs=performance.now(),this._tick()}_buildUI(){this.container=document.createElement("div"),this.container.style.cssText=`
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
    `,this.freqEl=document.createElement("span"),this.freqEl.style.cssText="color: rgba(200,168,106,0.5); font-size: 9px; letter-spacing: 0.5px;",i.appendChild(this.nameEl),i.appendChild(this.freqEl);const n=document.createElement("span");n.textContent="▶",n.style.cssText="color:rgba(200,168,106,0.8); font-size:12px; cursor:pointer; padding:0 2px; line-height:1;",n.addEventListener("click",()=>this._changeStation(1));const s=document.createElement("span");s.textContent="🔊",s.title="Volume",s.style.cssText="font-size:14px; cursor:pointer; opacity:0.8; line-height:1; padding:0 1px;",s.addEventListener("click",h=>{h.stopPropagation(),this._volOpen=!this._volOpen,a.style.display=this._volOpen?"flex":"none"});const r=document.createElement("span");r.textContent="⏻",r.title=this.on?"Turn Off":"Turn On",r.style.cssText=`
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
    `,this.volumeSlider.addEventListener("input",()=>{const h=Number(this.volumeSlider.value)/100;this.engine.setVolume(h*.18),l.textContent=h===0?"🔇":h<.4?"🔈":"🔊"});const c=document.createElement("span");c.style.cssText="color:rgba(200,168,106,0.6); font-size:9px; min-width:22px; text-align:right;",this.volumeSlider.addEventListener("input",()=>{c.textContent=this.volumeSlider.value+"%"}),c.textContent="55%",a.appendChild(l),a.appendChild(this.volumeSlider),a.appendChild(c),this.songEl=document.createElement("div"),this.songEl.style.cssText=`
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
    `,this.container.appendChild(e),this.container.appendChild(a),this.container.appendChild(this.songEl),this.container.appendChild(this.djEl),this._renderStation()}getEl(){return this.container}_renderStation(){const e=Ji[this.stationIdx];this.nameEl.textContent=e.name,this.nameEl.style.color=e.color,this.freqEl.textContent=`${e.freq} FM`,this.songEl.textContent=this.on?`♫  ${e.songs[this.songIdx%e.songs.length]}`:"— OFF —",this.iconEl.style.opacity=this.on?"1":"0.55"}_togglePower(){this.engineReady||(this.engineReady=this.engine.init()),this.on=!this.on,this.on?(this.engine.play(Ji[this.stationIdx]),this._showDJ()):this.engine.stop(),this._renderStation()}_changeStation(e){this.stationIdx=(this.stationIdx+e+Ji.length)%Ji.length,this.songIdx=0,this.songTimer=0,this.on&&(this.engineReady||(this.engineReady=this.engine.init()),this.engine.play(Ji[this.stationIdx]),this._showDJ()),this._renderStation()}_showDJ(){const e=Ji[this.stationIdx],t=e.dj[this.djIdx%e.dj.length];this.djEl.textContent=`"${t}"`,this.djEl.style.opacity="1",setTimeout(()=>{this.djEl.style.opacity="0"},4500),this.djIdx++}_tick(){const e=performance.now(),t=(e-this.lastUpdateTs)/1e3;if(this.lastUpdateTs=e,this.on){Ji[this.stationIdx];const i=45+this.songIdx%3*10;this.songTimer+=t,this.songTimer>=i&&(this.songTimer=0,this.songIdx++,this._renderStation()),this.djTimer+=t,this.djTimer>=30&&(this.djTimer=0,this._showDJ())}this.rafId=requestAnimationFrame(()=>this._tick())}setVisible(e){this.container.style.opacity=e?"1":"0",this.container.style.pointerEvents=e?"auto":"none"}destroy(){cancelAnimationFrame(this.rafId),this.engine.stop(),this.container.remove()}}const hx="./",to=`${hx}tem-logo-white.jpg`,io=[{id:"melbourne",name:"TROWELED EARTH MELBOURNE",role:"presents",line:"",accentColor:"#C8A86A",skyTop:"#040810",skyBot:"#102040",particleColor:"#C8A86A",particleKind:"dust",buildingTint:"#182840",spotColor:"#C8A86A33",voiceChar:"Narrator"},{id:"jose",name:"JOSE GARCIA",role:"The Spaniard · Master of Clay",line:"Some people call me Wall Jesus. They're not wrong!",accentColor:"#FF7040",skyTop:"#7A1800",skyBot:"#CC3300",particleColor:"#FF9040",particleKind:"sparks",buildingTint:"#3A0C00",spotColor:"#FF704055",voiceChar:"Jose"},{id:"matt",name:"MATT",role:"The Warlord · Lead Plasterer",line:"I can be any type of Matt, but I prefer the Diplomatt!",accentColor:"#FF3355",skyTop:"#8A0010",skyBot:"#CC0030",particleColor:"#FF5070",particleKind:"sparks",buildingTint:"#440010",spotColor:"#FF335555",voiceChar:"Matt"},{id:"tsuyoshi",name:"TSUYOSHI",role:"The Samurai · Tadelakt Specialist",line:"I no like bug. Where is... da respect!",accentColor:"#00DD88",skyTop:"#005530",skyBot:"#009958",particleColor:"#60FFB0",particleKind:"dust",buildingTint:"#003322",spotColor:"#00DD8855",voiceChar:"Tsuyoshi"},{id:"connie",name:"CONNIE",role:"Operations Queen · Born in Germany",line:"I'll crush all of you!!! Hahahahahaha!",accentColor:"#FFB030",skyTop:"#884400",skyBot:"#CC7700",particleColor:"#FFD060",particleKind:"smoke",buildingTint:"#442200",spotColor:"#FFB03055",voiceChar:"Connie"},{id:"jarrad",name:"JARRAD",role:"Scaffold Specialist · Topknot Philosopher",line:"My plan is convince everyone I have a plan, tho I do not.... Did you get any of that?",accentColor:"#8866FF",skyTop:"#220066",skyBot:"#4400AA",particleColor:"#AA88FF",particleKind:"dust",buildingTint:"#110033",spotColor:"#8866FF55",voiceChar:"Jarrad"},{id:"fabio",name:"FABIO",role:"Plasterer · Pizza Consultant",line:"Come, we can have pizza. Andiamo, fa presto!",accentColor:"#FF7722",skyTop:"#883300",skyBot:"#CC5500",particleColor:"#FFAa40",particleKind:"smoke",buildingTint:"#441A00",spotColor:"#FF772255",voiceChar:"Fabio"},{id:"joe",name:"JOE",role:"The Wildcard · Knows Too Much",line:"Y'all seen that Epstein list? So many chosen people! And Trump!",accentColor:"#F0C000",skyTop:"#3A3000",skyBot:"#887700",particleColor:"#FFE040",particleKind:"sparks",buildingTint:"#1A1600",spotColor:"#F0C00055",voiceChar:"Joe"},{id:"phil",name:"PHIL",role:"The Quiet Legend · Renders",line:"I get asked to 'fill me crack in?' I don't get it...",accentColor:"#44CCCC",skyTop:"#004444",skyBot:"#007777",particleColor:"#88FFFF",particleKind:"dust",buildingTint:"#002222",spotColor:"#44CCCC55",voiceChar:"Phil"}],dx=8e3,ux=8e3,fx=5e3,fc=350;class px{constructor(){E(this,"overlay");E(this,"canvas");E(this,"ctx2d");E(this,"textLayer");E(this,"themeAudio",null);E(this,"logoImg",null);E(this,"done",!1);E(this,"rafId",0);E(this,"timers",[]);E(this,"particles",[]);E(this,"panX",0);E(this,"camShake",0);E(this,"currentScene",null);E(this,"sceneT",0);E(this,"buildings",[])}play(){return new Promise(e=>this._tapThenBuild(e))}_tapThenBuild(e){this._injectStyles();const t=new Image;t.src=to,t.onload=()=>{this.logoImg=t};const i=document.createElement("div");i.style.cssText=`
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

      <img src="${to}" alt="TEM"
        style="height:clamp(80px,18vw,130px); width:auto; object-fit:contain;
               filter:brightness(0.9) drop-shadow(0 0 20px rgba(200,168,106,0.4));
               animation:tapPulse 3s ease-in-out infinite;"
        onerror="this.style.display='none'">
    `;const n=new Audio;n.src=yi.theme,n.volume=.75,n.loop=!0,n.preload="auto",this.themeAudio=n,document.body.appendChild(i);let s=!1;const r=()=>{s||(s=!0,n.play().catch(()=>{this.themeAudio=null}),i.remove(),this._build(e))};i.addEventListener("pointerup",r,{once:!0})}_build(e){this.overlay=document.createElement("div"),this.overlay.id="intro-overlay",this.overlay.style.cssText=`
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
    `,s.addEventListener("click",()=>this._finish(e)),this.overlay.appendChild(this.canvas),this.overlay.appendChild(n),this.overlay.appendChild(t),this.overlay.appendChild(i),this.overlay.appendChild(this.textLayer),this.overlay.appendChild(s),document.body.appendChild(this.overlay),this._genBuildings(),this._startScene(io[0]);let r=ux;for(let c=1;c<io.length;c++){const h=io[c];this._after(r,()=>this._startScene(h)),r+=dx}this._after(r,()=>this._showTitle(e));let a=performance.now();const l=c=>{if(this.done)return;const h=Math.min((c-a)/1e3,.05);a=c,this.sceneT+=h,this._update(h),this._draw(),this.rafId=requestAnimationFrame(l)};this.rafId=requestAnimationFrame(l)}_startScene(e){this.done||(this.currentScene=e,this.sceneT=0,this.panX=0,this.particles=[],this.camShake=e.id==="matt"||e.id==="jose"?.5:0,this._updateText(e))}_updateText(e){if(!this.textLayer)return;const t=e.id==="melbourne";this.textLayer.innerHTML=`
      <div style="animation: introSlideUp 0.5s ease both;">
        ${t?`
          <div style="color:rgba(200,168,106,0.6); font-size:clamp(9px,2.5vw,12px);
                      font-weight:700; letter-spacing:4px; margin-bottom:12px;">
            TROWELED EARTH MELBOURNE PRESENTS
          </div>
          <img src="${to}" alt="TEM"
            style="height:clamp(50px,10vw,80px); width:auto; object-fit:contain;
                   filter:brightness(0.85); display:block; margin-bottom:16px;"
            onerror="this.style.display='none'">
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
    `}_update(e){const t=this.currentScene;if(t){this.panX+=e*18,this.camShake>0&&(this.camShake=Math.max(0,this.camShake-e*.8)),t.particleKind!=="none"&&this._spawnParticles(t,e);for(let i=this.particles.length-1;i>=0;i--){const n=this.particles[i];n.x+=n.vx*e,n.y+=n.vy*e,n.life-=e,n.alpha=Math.max(0,n.life/n.maxLife),n.life<=0&&this.particles.splice(i,1)}}}_spawnParticles(e,t){const i=this.canvas.width,n=this.canvas.height,s=e.particleKind==="sparks"?12:4;for(let r=0;r<s*t;r++){const a=Math.random()*i,l=n*.62;let c;e.particleKind==="sparks"?c={x:a,y:l-Math.random()*n*.15,vx:(Math.random()-.5)*80,vy:-Math.random()*120-40,life:.4+Math.random()*.4,maxLife:.8,size:1.5+Math.random()*2,alpha:1}:e.particleKind==="smoke"?c={x:a,y:l,vx:(Math.random()-.5)*20,vy:-Math.random()*30-10,life:1.5+Math.random(),maxLife:2.5,size:20+Math.random()*40,alpha:.3}:c={x:a,y:l+Math.random()*n*.1,vx:(Math.random()-.5)*15,vy:-Math.random()*15,life:1+Math.random()*1.5,maxLife:2.5,size:2+Math.random()*5,alpha:.5},this.particles.push(c)}}_draw(){const e=this.canvas.width,t=this.canvas.height,i=this.currentScene;if(!i)return;const n=this.ctx2d,s=this.camShake>0?(Math.random()-.5)*this.camShake*4:0;n.save(),n.translate(s,s*.5);const r=n.createLinearGradient(0,0,0,t*.65);r.addColorStop(0,i.skyTop),r.addColorStop(1,i.skyBot),n.fillStyle=r,n.fillRect(0,0,e,t),this._drawStars(n,e,t,i),this._drawCity(n,e,t,i);const a=n.createLinearGradient(0,t*.62,0,t);a.addColorStop(0,i.spotColor),a.addColorStop(.3,"#000000CC"),a.addColorStop(1,"#000000"),n.fillStyle=a,n.fillRect(0,t*.62,e,t*.38),this._drawRoad(n,e,t,i),this._drawParticles(n,i),this._drawBuckets(n,e,t,i),i.id!=="melbourne"&&this._drawCharSilhouette(n,e,t,i),i.id!=="melbourne"&&i.line&&this.sceneT>2&&this._drawSpeechBubble(n,e,t,i);const l=n.createRadialGradient(e/2,t/2,t*.1,e/2,t/2,t*.8);if(l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,0.72)"),n.fillStyle=l,n.fillRect(0,0,e,t),i.id!=="melbourne"&&this.sceneT<.6){const c=Math.max(0,.6-this.sceneT)*.4;n.fillStyle=i.accentColor+Math.round(c*255).toString(16).padStart(2,"0"),n.fillRect(0,0,e,t)}n.restore()}_drawStars(e,t,i,n){const s=n.id.charCodeAt(0)*31;e.fillStyle="rgba(255,255,255,0.7)";for(let r=0;r<60;r++){const a=(s*(r+1)*1234567%t+t)%t,l=(s*(r+7)*765432%(i*.5)+i*.01)%(i*.5),c=.5+s*r*11%10/10,h=(this.sceneT*.8+r*.3)%(Math.PI*2);e.globalAlpha=.3+Math.sin(h)*.3,e.beginPath(),e.arc(a,l,c,0,Math.PI*2),e.fill()}e.globalAlpha=1}_drawCity(e,t,i,n){const s=i*.62,r=this.panX*.3%t;for(let a=-1;a<=1;a++){const l=a*t-r;for(const c of this.buildings){const h=c.x+l;if(h+c.w<-50||h>t+50)continue;e.fillStyle=n.buildingTint,e.fillRect(h,s-c.h,c.w,c.h),e.fillStyle=n.accentColor+"55";const u=Math.floor(c.w/10),d=Math.floor(c.h/14);for(let f=0;f<u;f++)for(let g=0;g<d;g++){if(!(Math.sin((c.x+f*17+g*13)*.618)>.1))continue;const m=h+f*10+2,p=s-c.h+g*14+3,y=Math.sin(this.sceneT*2+f+g)>.95;e.fillStyle=y?"#fff4":n.accentColor+"66",e.fillRect(m,p,5,7)}e.strokeStyle=n.accentColor+"22",e.lineWidth=1,e.strokeRect(h,s-c.h,c.w,c.h)}}}_drawRoad(e,t,i,n){const s=i*.72,r=this.panX*1.5;if(e.fillStyle="#0a0a0a",e.fillRect(0,s,t,i-s),e.strokeStyle=n.accentColor+"30",e.lineWidth=2,e.setLineDash([30,40]),e.lineDashOffset=-r%70,e.beginPath(),e.moveTo(0,s+20),e.lineTo(t,s+20),e.stroke(),e.setLineDash([]),n.id==="melbourne"){const a=this.panX*60%(t+200)-100;this._drawVan(e,a,s+5)}}_drawVan(e,t,i){e.save(),e.translate(t,i),e.fillStyle="#C1660A",e.beginPath(),e.roundRect(0,0,90*.8,42*.8,4*.8),e.fill(),e.fillStyle="#A04A00",e.beginPath(),e.roundRect(60*.8,4*.8,30*.8,32*.8,3*.8),e.fill(),e.fillStyle="#6090D080",e.fillRect(64*.8,7*.8,22*.8,16*.8),e.fillStyle="#111",e.beginPath(),e.arc(18*.8,42*.8,8*.8,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(72*.8,42*.8,8*.8,0,Math.PI*2),e.fill(),e.fillStyle="#FFFF8088",e.fillRect(88*.8,16*.8,3*.8,8*.8),e.restore()}_drawCharSilhouette(e,t,i,n){if(n.id==="connie"){this._drawConnieBond(e,t,i,n);return}const s=i*.62,r=t*.68,a=Math.min(1,this.sceneT*2);e.save(),e.globalAlpha=a;const l=e.createRadialGradient(r,s-80,10,r,s-80,160);l.addColorStop(0,n.accentColor+"50"),l.addColorStop(1,"transparent"),e.fillStyle=l,e.beginPath(),e.ellipse(r,s-80,160,220,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(0,0,0,0.45)",e.beginPath(),e.ellipse(r,s+6,40,9,0,0,Math.PI*2),e.fill();const c=Math.min(i*.52,240),u={jose:"#C8856A",matt:"#E8C0A0",tsuyoshi:"#F0D4B0",connie:"#F0C8A0",jarrad:"#E0B090",fabio:"#D4A070",joe:"#D4A070",phil:"#D8A888"}[n.id]??"#D0A080",d="#111111",f="#1a1a2a";e.fillStyle="#0a0a0a",e.fillRect(r-19,s-22,16,22),e.fillRect(r+3,s-22,16,22),e.fillStyle=f,e.fillRect(r-18,s-c*.44,16,c*.44-20),e.fillRect(r+2,s-c*.44,16,c*.44-20),e.fillStyle=d,e.fillRect(r-20,s-c*.8,40,c*.37),this._drawTEMLogoOnShirt(e,r,s-c*.7),e.fillStyle=u,e.fillRect(r-5,s-c*.84,10,c*.06),e.fillStyle=d,e.fillRect(r-32,s-c*.78,13,c*.32),e.fillRect(r+19,s-c*.78,13,c*.28),e.fillStyle=u,e.beginPath(),e.ellipse(r-26,s-c*.46,7,9,.2,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(r+26,s-c*.5,7,9,-.2,0,Math.PI*2),e.fill(),e.fillStyle=u,e.beginPath(),e.ellipse(r,s-c*.87,c*.075,c*.09,0,0,Math.PI*2),e.fill(),this._drawHairAndProp(e,n,r,s,c,u),e.strokeStyle=n.accentColor,e.lineWidth=3,e.globalAlpha=a*.8,e.beginPath(),e.moveTo(r-20,s-c*.44),e.lineTo(r-20,s-c*.8),e.lineTo(r-10,s-c*.84),e.stroke(),e.restore()}_drawTEMLogoOnShirt(e,t,i){if(!this.logoImg)return;const n=20,s=n*(1504/688);e.save(),e.globalAlpha=.85,e.drawImage(this.logoImg,t-n/2,i-s/2,n,s),e.restore()}_drawConnieBond(e,t,i,n){const s=i*.62,r=t*.6,a=Math.min(1,this.sceneT*2),l=Math.min(i*.52,240),c="#F0C8A0",h=n.accentColor;e.save(),e.globalAlpha=a;const u=e.createRadialGradient(r,s-90,10,r,s-90,180);u.addColorStop(0,h+"55"),u.addColorStop(1,"transparent"),e.fillStyle=u,e.beginPath(),e.ellipse(r,s-90,180,230,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(0,0,0,0.4)",e.beginPath(),e.ellipse(r,s+5,30,7,0,0,Math.PI*2),e.fill();const d=s,f=d-l,g=d-l*.5;e.fillStyle="#D4B840",e.beginPath(),e.moveTo(r-8,f+l*.06),e.bezierCurveTo(r-40,f+l*.18,r-55,g-l*.06,r-35,d-l*.2),e.bezierCurveTo(r-28,d-l*.18,r-14,f+l*.3,r-2,f+l*.12),e.closePath(),e.fill(),e.strokeStyle="#FFE878",e.lineWidth=3,e.beginPath(),e.moveTo(r-4,f+l*.08),e.bezierCurveTo(r-30,f+l*.22,r-45,g,r-28,d-l*.22),e.stroke(),e.fillStyle="#111122",e.beginPath(),e.moveTo(r-8,d-l*.43),e.lineTo(r-14,d),e.lineTo(r-6,d),e.lineTo(r+4,d-l*.43),e.closePath(),e.fill(),e.beginPath(),e.moveTo(r-2,d-l*.43),e.lineTo(r+6,d),e.lineTo(r+16,d),e.lineTo(r+10,d-l*.43),e.closePath(),e.fill(),e.fillStyle="#111",e.fillRect(r-16,d-4,12,4),e.fillRect(r-13,d-10,2,10),e.fillRect(r+4,d-4,14,4),e.fillRect(r+15,d-10,2,10),e.fillStyle="#111111",e.beginPath(),e.moveTo(r+14,d-l*.82),e.bezierCurveTo(r+28,d-l*.76,r+32,d-l*.68,r+18,d-l*.6),e.bezierCurveTo(r+10,d-l*.52,r+8,d-l*.47,r+14,d-l*.43),e.bezierCurveTo(r+18,d-l*.4,r+14,d-l*.34,r+6,d-l*.28),e.lineTo(r-2,d-l*.43),e.bezierCurveTo(r-6,d-l*.5,r-4,d-l*.56,r+2,d-l*.66),e.bezierCurveTo(r+4,d-l*.72,r+0,d-l*.78,r+6,d-l*.83),e.closePath(),e.fill(),e.fillStyle=c,e.fillRect(r+8,f+l*.12,8,l*.05);const x=l*.09;e.beginPath(),e.arc(r+12,f+l*.07,x,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(r+12+x*.85,f+l*.08,x*.22,-.4,.9),e.fill(),e.beginPath(),e.arc(r+12+x*.5,f+l*.1+x*.7,x*.3,0,Math.PI),e.fill(),e.fillStyle="#D4B840",e.beginPath(),e.arc(r+12,f+l*.04,x*1.05,Math.PI*.9,Math.PI*1.9),e.fill(),e.beginPath(),e.arc(r+12+x*.3,f+l*.02,x*.6,Math.PI,Math.PI*1.7),e.fill(),e.fillStyle="#CC2244",e.beginPath(),e.ellipse(r+12+x*.8,f+l*.09,4,2.5,.2,0,Math.PI*2),e.fill();const m=r+16,p=d-l*.78,y=-.4,M=l*.36,v=m+Math.cos(y)*M,R=p+Math.sin(y)*M;e.strokeStyle=c,e.lineWidth=l*.045,e.lineCap="round",e.beginPath(),e.moveTo(m,p),e.lineTo(v,R),e.stroke();const A=y-.08,C=l*.14,I=v+Math.cos(A)*C,w=R+Math.sin(A)*C;if(e.fillStyle="#1a1a1a",e.save(),e.translate(v,R),e.rotate(A),e.fillRect(-4,-4,10,18),e.restore(),e.strokeStyle="#2a2a2a",e.lineWidth=5,e.lineCap="square",e.beginPath(),e.moveTo(v,R),e.lineTo(I,w),e.stroke(),e.strokeStyle="#666",e.lineWidth=1.5,e.beginPath(),e.moveTo(v,R-1),e.lineTo(I,w-1),e.stroke(),this.sceneT>2.5){e.save(),e.globalAlpha=a*.6*(.5+Math.sin(this.sceneT*8)*.5);const b=e.createRadialGradient(I,w,0,I,w,14);b.addColorStop(0,"#FFFF88CC"),b.addColorStop(1,"transparent"),e.fillStyle=b,e.beginPath(),e.arc(I,w,14,0,Math.PI*2),e.fill(),e.restore()}e.strokeStyle="#FFD700",e.lineWidth=2.5,e.beginPath(),e.arc(v+6,R,4,0,Math.PI*2),e.stroke(),e.strokeStyle=h,e.lineWidth=3,e.globalAlpha=a*.7,e.beginPath(),e.moveTo(r-2,d-l*.43),e.bezierCurveTo(r-6,d-l*.5,r-4,d-l*.78,r+6,d-l*.83),e.stroke(),e.restore()}_drawHairAndProp(e,t,i,n,s,r){const l={jose:{color:"#1a0800",kind:"short"},matt:{color:"#2a1a00",kind:"short"},tsuyoshi:{color:"#111",kind:"mohawk"},connie:{color:"#E8D080",kind:"long"},jarrad:{color:"#3a2000",kind:"topknot"},fabio:{color:"#1a0800",kind:"short"},joe:{color:"#2a1a00",kind:"short"},phil:{color:"#CCCCCC",kind:"short"}}[t.id]??{color:"#1a0800",kind:"short"};e.fillStyle=l.color;const c=n-s*.87,h=s*.075;switch(l.kind==="short"?(e.beginPath(),e.arc(i,c-h*.7,h*1.1,Math.PI,0),e.fill()):l.kind==="mohawk"?(e.fillRect(i-4,c-h*2.2,8,h*1.6),e.fillStyle="#FF3A00",e.fillRect(i-3,c-h*2.4,6,h*.6)):l.kind==="long"?(e.beginPath(),e.arc(i,c-h*.5,h*1.1,Math.PI,0),e.fill(),e.fillRect(i-h*1.2,c,h*2.4,s*.18)):l.kind==="topknot"&&(e.beginPath(),e.arc(i,c-h*.5,h,Math.PI,0),e.fill(),e.beginPath(),e.arc(i,c-h*1.6,h*.7,0,Math.PI*2),e.fill()),(t.id==="jose"||t.id==="matt"||t.id==="tsuyoshi")&&(e.fillStyle="#F5C842",e.beginPath(),e.ellipse(i,c-h*.9,h*1.4,h*.5,0,Math.PI,0),e.fill(),e.fillRect(i-h*1.4,c-h*1,h*2.8,h*.4)),t.id==="joe"&&(e.fillStyle="#F5F5F0",e.beginPath(),e.ellipse(i,c-h*.9,h*1.4,h*.5,0,Math.PI,0),e.fill(),e.fillRect(i-h*1.4,c-h*1,h*2.8,h*.4),e.fillStyle="#F0C000",e.fillRect(i-20,n-s*.56,40,s*.07)),t.id){case"jose":case"matt":{e.fillStyle=r,e.fillRect(i+19,n-s*.62,28,8),e.fillStyle="#A0B8CC",e.save(),e.translate(i+52,n-s*.63),e.rotate(-.3),e.fillRect(0,-4,28,10),e.fillStyle="#6A7A88",e.fillRect(24,-5,6,12),e.restore();break}case"tsuyoshi":{e.fillStyle=r,e.fillRect(i-33,n-s*.44,8,s*.22),e.fillStyle="#446688",e.beginPath(),e.moveTo(i-44,n-s*.22),e.lineTo(i-28,n-s*.22),e.lineTo(i-30,n-s*.04),e.lineTo(i-42,n-s*.04),e.fill(),e.strokeStyle="#88AACC",e.lineWidth=2,e.strokeRect(i-44,n-s*.22,16,2);break}case"connie":{e.fillStyle=r,e.fillRect(i+19,n-s*.68,10,s*.2),e.fillStyle="#E8E0C0",e.fillRect(i+28,n-s*.72,26,34),e.fillStyle="#C8A86A",e.fillRect(i+34,n-s*.74,14,6),e.fillStyle="#88778866";for(let u=0;u<4;u++)e.fillRect(i+30,n-s*.66+u*6,20,3);break}case"jarrad":{e.fillStyle=r,e.fillRect(i+19,n-s*.7,10,s*.22),e.fillStyle="#1a1a2a",e.fillRect(i+28,n-s*.73,18,28),e.fillStyle="#4488FF",e.shadowColor="#4488FF",e.shadowBlur=18,e.fillRect(i+30,n-s*.71,14,24),e.shadowBlur=0,e.fillStyle="#4488FF18",e.beginPath(),e.ellipse(i+20,n-s*.87,30,40,0,0,Math.PI*2),e.fill();break}case"fabio":{e.fillStyle=r,e.fillRect(i-32,n-s*.78,10,s*.1),e.fillStyle="#B8904A",e.fillRect(i-46,n-s*.86,38,6),e.fillRect(i-46,n-s*.84,38,20),e.fillStyle="#FF5533",e.fillRect(i-43,n-s*.82,32,14),e.fillStyle="#FFDD44";for(let u=0;u<5;u++)e.beginPath(),e.arc(i-38+u*6,n-s*.78+u%2*4,3,0,Math.PI*2),e.fill();break}case"phil":{e.fillStyle=r,e.fillRect(i-33,n-s*.52,8,s*.1),e.fillStyle="#8899AA",e.fillRect(i-40,n-s*.44,14,20),e.fillStyle="#AAC0CC",e.fillRect(i-39,n-s*.46,12,8),e.strokeStyle="#AAAAAA60",e.lineWidth=2;for(let u=0;u<3;u++)e.beginPath(),e.moveTo(i-36+u*4,n-s*.46),e.quadraticCurveTo(i-34+u*4,n-s*.5,i-36+u*4,n-s*.54),e.stroke();break}}}_drawParticles(e,t){for(const i of this.particles)if(e.globalAlpha=i.alpha*.85,t.particleKind==="sparks")e.fillStyle=t.particleColor,e.shadowColor=t.particleColor,e.shadowBlur=4,e.beginPath(),e.arc(i.x,i.y,i.size,0,Math.PI*2),e.fill(),e.shadowBlur=0;else{const n=e.createRadialGradient(i.x,i.y,0,i.x,i.y,i.size);n.addColorStop(0,t.particleColor+"60"),n.addColorStop(1,"transparent"),e.fillStyle=n,e.beginPath(),e.arc(i.x,i.y,i.size,0,Math.PI*2),e.fill()}e.globalAlpha=1}_drawBuckets(e,t,i,n){const s=i*.62,r=(a,l,c,h=1)=>{const u=c*1.2,d=c,f=c*.72,g=a-d/2,x=a-f/2;e.save(),e.globalAlpha=h,e.fillStyle="rgba(0,0,0,0.3)",e.beginPath(),e.ellipse(a,l+u+3,c*.42,5,0,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(g,l),e.lineTo(g+d,l),e.lineTo(x+f,l+u),e.lineTo(x,l+u),e.closePath(),e.fillStyle="#F8F6F0",e.fill(),e.strokeStyle="#C8A86A",e.lineWidth=Math.max(1,c*.04),e.stroke(),e.beginPath(),e.ellipse(a,l,d/2,d*.1,0,0,Math.PI*2),e.fillStyle="#E8E4DC",e.fill(),e.strokeStyle="#C8A86A",e.lineWidth=Math.max(1,c*.03),e.stroke(),e.beginPath(),e.arc(a,l-d*.06,d*.3,Math.PI,0),e.strokeStyle="#B0966A",e.lineWidth=Math.max(1.5,c*.05),e.stroke();const m=c*.55,p=a-m/2,y=l+u*.18;this.logoImg?(e.globalCompositeOperation="multiply",e.globalAlpha=h*.6,e.drawImage(this.logoImg,p,y,m,m*(1504/688)),e.globalCompositeOperation="source-over",e.globalAlpha=h):(e.fillStyle="#C8A86A",e.font=`bold ${Math.max(7,c*.18)}px system-ui`,e.textAlign="center",e.fillText("TEM",a,l+u*.55),e.textAlign="start"),e.restore()};if(n.id==="melbourne")r(t*.1,s-48,46,.92),r(t*.165,s-38,36,.78),r(t*.8,s-44,42,.88),r(t*.87,s-32,30,.68);else{const a=Math.min(1,this.sceneT*1.5);r(t*.16,s-52,48,a*.95),r(t*.25,s-40,36,a*.82)}}_drawSpeechBubble(e,t,i,n){const s=Math.min(1,(this.sceneT-2)*1.5);if(s<=0)return;const r=Math.sin(this.sceneT*1.8)*5,a=Math.min(t*.42,280),l=72,c=t*.04,h=i*.38+r,u=14,d=c+a;e.save(),e.globalAlpha=s,e.shadowColor="rgba(0,0,0,0.45)",e.shadowBlur=12,e.shadowOffsetY=4,e.fillStyle="rgba(255,255,255,0.94)",e.beginPath(),e.moveTo(c+u,h),e.lineTo(c+a-u,h),e.quadraticCurveTo(c+a,h,c+a,h+u),e.lineTo(c+a,h+l-u),e.quadraticCurveTo(c+a,h+l,c+a-u,h+l),e.lineTo(c+u,h+l),e.quadraticCurveTo(c,h+l,c,h+l-u),e.lineTo(c,h+u),e.quadraticCurveTo(c,h,c+u,h),e.closePath(),e.fill(),e.shadowBlur=0,e.shadowOffsetY=0,e.beginPath(),e.moveTo(d,h+l*.42),e.lineTo(d+20,h+l*.55),e.lineTo(d,h+l*.68),e.closePath(),e.fill(),e.fillStyle=n.accentColor,e.fillRect(c+u,h,a-u*2,4),e.shadowBlur=0;const f=Math.max(12,Math.min(16,a/16));e.font=`italic ${f}px system-ui, sans-serif`,e.fillStyle="#111",e.textBaseline="middle";const g=a-24,x=`"${n.line}"`.split(" "),m=[];let p="";for(const R of x){const A=p?`${p} ${R}`:R;e.measureText(A).width>g&&p?(m.push(p),p=R):p=A}p&&m.push(p);const y=f+5,M=m.length*y,v=h+(l-M)/2+y/2+2;m.forEach((R,A)=>{e.fillText(R,c+12,v+A*y,g)}),e.restore()}_showTitle(e){this.done||(this.particles=[],this.currentScene={...io[0],id:"title",name:"",role:"",line:""},this.textLayer.innerHTML=`
      <div style="animation:introSlideUp 0.7s ease both; text-align:center; width:100%;">
        <img src="${to}" alt="TEM"
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
    `,this.textLayer.style.justifyContent="center",this.textLayer.style.alignItems="center",this._after(fx,()=>{this.overlay.style.transition=`opacity ${fc}ms ease`,this.overlay.style.opacity="0",this._after(fc+50,()=>this._finish(e))}))}_startAudio(){try{const e=new Audio;e.src=yi.theme,e.volume=.75,this.themeAudio=e,e.play().catch(()=>{this.themeAudio=null})}catch{}}_finish(e){var i;if(this.done)return;this.done=!0,this.timers.forEach(clearTimeout),cancelAnimationFrame(this.rafId);const t=this.themeAudio;this.themeAudio=null,(i=this.overlay)==null||i.remove(),e(t)}_after(e,t){this.timers.push(setTimeout(t,e))}_genBuildings(){let t=0;this.buildings=[];for(let i=0;i<28;i++){const n=30+Math.floor(Math.sin(i*2.1)*15+Math.cos(i*1.3)*12+40),s=60+Math.abs(Math.sin(i*1.7)*140+Math.cos(i*2.3)*80);this.buildings.push({x:t,w:n,h:s}),t+=n+4+Math.floor(Math.sin(i*3.7)*6)}}_resizeCanvas(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}_injectStyles(){if(document.getElementById("intro-styles"))return;const e=document.createElement("style");e.id="intro-styles",e.textContent=`
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
    `,document.head.appendChild(e)}}const mx=[{character:"Jose",label:"JOSE GARCIA",color:"#8B6A3A",lines:["Jose Garcia — the Spaniard cloaked in shadows, grim veil","An artist of chaos where darkness and dreams prevail","With brutal hands he sculpts the earth's unyielding core","His trowel, a weapon — top class, none can ignore","From blood red clay to concrete's cold, unfeeling embrace","He molds the void to find foundations of time"]},{character:null,label:"CHORUS",color:"#C8A86A",lines:["Troweled Earth — where shadows fall","Unyielding — it calls to all","This spirit's rise beneath the skies","The spark of architects' darkest dreams"]},{character:"Matt",label:"MATT",color:"#C1666B",lines:["Matt, the warlord — fire raging deep in his veins","Charismatic, don't matter, wielding hearts in unyielding chains","From Marbellino's wrath to metallic's cold, cruel, clean","His energy — tempest, relentless, untamed and wild","Unyielding strokes cut deep and true","His trowel carved dark — Troweled Earth's anchor bold"]},{character:"Tsuyoshi",label:"TSUYOSHI",color:"#4A8A6A",lines:["A samurai — perfect engineer","Crafts Tadelakt with a blade's cold glare","Positions master, slicing through despair","The future's written in shadows he's claimed as his own"]},{character:"Connie",label:"CONNIE",color:"#E8A050",lines:["Connie — tight on wheels, a trowel school might","Turning more queen, driving through the night"]},{character:"Jarrad",label:"JARRAD",color:"#8080C0",lines:["Jarrad — iron-forged, a time built in flame","His strength runs deep, no force can break or tame","He etches the earth with hands of steel","His honour worn in fire"]},{character:"Fabio",label:"FABIO",color:"#D4602A",lines:['Like fire among the wise — "you have no power here, Gandalf the Grey"',"Conjuring dark nights, his lore makes the unwilling pay"]},{character:null,label:"BRIDGE — MELBOURNE",color:"#8B9EC8",lines:["St Kilda confined — Fitzroy, raw forms rise","No facade — let the heavy stone speak","Trowel the fruit of beauty, cold and true","Polish scars are steel in all grids and grooves","Good dreams forged in the fire of steel","Tadelakt stone lit sheen — custom strokes, no polish","Just the fight in every scene"]},{character:null,label:"FINAL CHORUS",color:"#C8A86A",lines:["Melbourne's concrete sonnet — unyielding, profound","Trowel dust builds the goal on hallowed ground","Troweled Earth — we shatter the stone","Crafting brutal spaces — this is home"]}],pc=mx.flatMap(o=>o.lines),gx=[{text:"🌳",size:64,color:"#C8A86A",gap:12},{text:"TROWELED EARTH RUSH",size:32,color:"#C8A86A",weight:900,spacing:4,gap:8},{text:"A TROWELED EARTH MELBOURNE PRODUCTION",size:11,color:"rgba(200,168,106,0.5)",spacing:2,gap:48},{text:"CREW",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"MATT",size:16,color:"#C1666B",weight:800,gap:4},{text:"LEAD PLASTERER · THE WARLORD",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"JOSE GARCIA",size:16,color:"#8B6A3A",weight:800,gap:4},{text:"THE SPANIARD · MASTER OF CLAY",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"TSUYOSHI",size:16,color:"#4A8A6A",weight:800,gap:4},{text:"SAMURAI ENGINEER · TADELAKT SPECIALIST",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"CONNIE",size:16,color:"#E8A050",weight:800,gap:4},{text:"OPERATIONS QUEEN · BORN IN GERMANY",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"JARRAD",size:16,color:"#8080C0",weight:800,gap:4},{text:"SCAFFOLD SPECIALIST · TOPKNOT PHILOSOPHER",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"FABIO",size:16,color:"#D4602A",weight:800,gap:4},{text:'PLASTERER · PIZZA CONSULTANT · "EHHHH"',size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"PHIL",size:16,color:"#A0B8A0",weight:800,gap:4},{text:"RENDERS · QUIET LEGEND",size:11,color:"rgba(240,232,216,0.5)",gap:40},{text:"SUPPORTING CAST",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"MIKAYLA",size:16,color:"#FF9DC4",weight:800,gap:4},{text:"WORKSHOP MANAGER · JUMP ROPE CHAMPION",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"JOE",size:16,color:"#C8A86A",weight:800,gap:4},{text:"SUPPLIES · MAN OF FEW WORDS",size:11,color:"rgba(240,232,216,0.5)",gap:40},{text:"PRODUCTS FEATURED",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"Blood Red Clay · Marbellino · Tadelakt",size:14,color:"rgba(240,232,216,0.7)",gap:8},{text:"Antique Stucco · Metallic · Sgraffito",size:14,color:"rgba(240,232,216,0.7)",gap:8},{text:"Concrete Polish · Venetian Plaster · Limewash",size:14,color:"rgba(240,232,216,0.7)",gap:40},{text:"RADIO STATIONS",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"TEM FM 88.3 · Brunswick Beats 99.9",size:13,color:"rgba(240,232,216,0.6)",gap:8},{text:"Connie's Gold 103.7 · The Scaffold 107.1",size:13,color:"rgba(240,232,216,0.6)",gap:8},{text:"Fabio's Pizza Radio 92.5",size:13,color:"rgba(240,232,216,0.6)",gap:40},{text:"CITY LOCATIONS",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"Melbourne CBD · Fitzroy · Brunswick",size:13,color:"rgba(240,232,216,0.6)",gap:8},{text:"Richmond · St Kilda · Footscray",size:13,color:"rgba(240,232,216,0.6)",gap:40},{text:"GAME DESIGN & DEVELOPMENT",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"Snappabot",size:18,color:"rgba(240,232,216,0.9)",weight:800,gap:4},{text:"Three.js · TypeScript · Vite",size:11,color:"rgba(200,168,106,0.4)",gap:40},{text:"MADE WITH 🌳 IN MELBOURNE",size:14,color:"#C8A86A",spacing:2,gap:40},{text:'"The walls remember every hand that shaped them."',size:14,color:"rgba(200,168,106,0.6)",italic:!0,gap:60},{text:"TROWELED EARTH MELBOURNE",size:14,color:"#C8A86A",spacing:2,gap:8},{text:"troweledearthmelbourne.com.au",size:12,color:"rgba(200,168,106,0.4)",gap:80}];class xx{constructor(){E(this,"overlay");E(this,"creditsAudio",null);E(this,"rafId",0)}show(){return new Promise(e=>this._build(e))}_build(e){this._injectStyles(),this.overlay=document.createElement("div"),this.overlay.id="credits-overlay",this.overlay.style.cssText=`
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
    `;let n=0;gx.forEach(u=>{const d=document.createElement("div"),f=u.size||14;d.textContent=u.text,d.style.cssText=`
        color: ${u.color||"rgba(240,232,216,0.8)"};
        font-size: ${f}px;
        font-weight: ${u.weight||400};
        letter-spacing: ${u.spacing||0}px;
        font-style: ${u.italic?"italic":"normal"};
        margin-bottom: ${u.gap||16}px;
        line-height: 1.4;
      `,i.appendChild(d),n+=f*1.4+(u.gap||16)});const s=document.createElement("div");s.style.height="100vh",i.appendChild(s);const r=document.createElement("div");r.style.cssText=`
      position:absolute; inset:0; z-index:5; pointer-events:none;
      background: linear-gradient(
        180deg,
        rgba(5,4,2,1) 0%,
        rgba(5,4,2,0) 8%,
        rgba(5,4,2,0) 92%,
        rgba(5,4,2,1) 100%
      );
    `,this.overlay.appendChild(t),this.overlay.appendChild(i),this.overlay.appendChild(r),document.body.appendChild(this.overlay),this._startAudio();const a=.6;let l=-window.innerHeight;const c=n+window.innerHeight,h=()=>{if(this.overlay.isConnected){if(l+=a,i.style.transform=`translateX(-50%) translateY(-${l}px)`,l>c){this._finish(e);return}this.rafId=requestAnimationFrame(h)}};this.rafId=requestAnimationFrame(h)}_startAudio(){try{const e=new Audio;e.src=yi.credits,e.volume=0,e.play().then(()=>{this.creditsAudio=e;let t=0;const i=setInterval(()=>{t=Math.min(t+.02,.65),e.volume=t,t>=.65&&clearInterval(i)},80)}).catch(()=>{})}catch{}}_finish(e){if(cancelAnimationFrame(this.rafId),this.creditsAudio){const t=this.creditsAudio;let i=t.volume;const n=setInterval(()=>{i=Math.max(0,i-.04),t.volume=i,i<=0&&(clearInterval(n),t.pause(),t.src="")},60)}this.overlay.style.transition="opacity 0.8s",this.overlay.style.opacity="0",setTimeout(()=>{this.overlay.remove(),e()},850)}_injectStyles(){if(document.getElementById("credits-styles"))return;const e=document.createElement("style");e.id="credits-styles",e.textContent=`
      #credits-overlay {
        background: linear-gradient(180deg, #050402 0%, #080604 50%, #050402 100%);
      }
    `,document.head.appendChild(e)}}const vx="./",_x=`${vx}tem-logo-white.jpg`;class yx{constructor(){E(this,"overlay");E(this,"scrollTimer",0);E(this,"ctx",null);E(this,"masterGain",null);E(this,"themeAudio",null)}show(e){return new Promise(t=>{this._build(t,e)})}_build(e,t){this._injectStyles(),this.overlay=document.createElement("div"),this.overlay.id="start-menu",this.overlay.style.cssText=`
      position:fixed; inset:0; z-index:40000;
      background:#07050302;
      display:flex; flex-direction:column;
      align-items:center; justify-content:center;
      font-family: system-ui, -apple-system, sans-serif;
      overflow:hidden;
    `;const i=document.createElement("div");i.className="sm-lyrics-back";const n=document.createElement("div");n.id="sm-lyrics-inner";const s=[...pc,...pc];s.forEach(d=>{const f=document.createElement("div");f.className="sm-lyric-line",f.textContent=d,n.appendChild(f)}),i.appendChild(n),this.overlay.appendChild(i);const r=document.createElement("div");r.className="sm-gradient",this.overlay.appendChild(r);const a=document.createElement("div");a.className="sm-content",a.innerHTML=`
      <img src="${_x}" alt="Troweled Earth" class="sm-logo-img"
        onerror="this.outerHTML='<div class=sm-logo>🌳</div>'">
      <div class="sm-title">TROWELED EARTH RUSH</div>
      <div class="sm-tagline">"The walls remember every hand that shaped them."</div>
    `;const l=document.createElement("div");l.className="sm-btn-row";const c=this._btn("▶  PLAY","#C1666B","#9E4A50");c.style.fontSize="18px",c.style.padding="18px 48px",c.addEventListener("click",d=>{d.stopPropagation(),this._stopAudio(),this.overlay.style.transition="opacity 0.5s",this.overlay.style.opacity="0",setTimeout(()=>{this.overlay.remove(),e()},520)});const h=this._btn("📋  HOW TO PLAY","rgba(200,168,106,0.18)","rgba(200,168,106,0.28)");h.style.border="1.5px solid rgba(200,168,106,0.4)",h.addEventListener("click",d=>{d.stopPropagation(),this._showHowToPlay()});const u=this._btn("🎬  CREDITS","rgba(255,255,255,0.06)","rgba(255,255,255,0.12)");u.style.border="1.5px solid rgba(255,255,255,0.15)",u.style.color="rgba(255,255,255,0.55)",u.addEventListener("click",d=>{d.stopPropagation(),this._killAudio(),this.overlay.style.opacity="0",this.overlay.style.transition="opacity 0.3s",setTimeout(async()=>{await new xx().show(),this.overlay.style.opacity="1",this._startAudio()},320)}),l.appendChild(c),l.appendChild(h),l.appendChild(u),a.appendChild(l),this.overlay.appendChild(a),document.body.appendChild(this.overlay),this._startScroll(n,s.length),t?(this.themeAudio=t,t.loop=!0,t.volume=.6):this.overlay.addEventListener("click",()=>this._startAudio(),{once:!0})}_btn(e,t,i){const n=document.createElement("button");return n.innerHTML=e,n.style.cssText=`
      background:${t}; border:none; color:#fff;
      font-size:14px; font-weight:800; letter-spacing:1px;
      padding:14px 32px; border-radius:50px; cursor:pointer;
      touch-action:manipulation; transition:background 0.15s, transform 0.1s;
      font-family:system-ui,sans-serif;
      box-shadow:0 4px 20px rgba(0,0,0,0.4);
    `,n.addEventListener("mouseenter",()=>{n.style.background=i,n.style.transform="translateY(-2px)"}),n.addEventListener("mouseleave",()=>{n.style.background=t,n.style.transform=""}),n}_startScroll(e,t){let i=0;const r=t*38/2,a=()=>{i+=.35,i>=r&&(i=0),e.style.transform=`translateY(-${i}px)`,this.scrollTimer=requestAnimationFrame(a)};this.scrollTimer=requestAnimationFrame(a)}_startAudio(){try{const e=new Audio;e.src=yi.theme,e.volume=0,e.loop=!0,this.themeAudio=e,e.play().then(()=>{let t=0;const i=setInterval(()=>{if(!this.themeAudio){clearInterval(i);return}t=Math.min(t+.02,.6),e.volume=t,t>=.6&&clearInterval(i)},100)}).catch(()=>{this.themeAudio=null,this._startSynthAudio()});return}catch{}this._startSynthAudio()}_startSynthAudio(){try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=0,this.masterGain.connect(this.ctx.destination),this.masterGain.gain.linearRampToValueAtTime(.1,this.ctx.currentTime+2);const e=76,t=e/60;let i=this.ctx.currentTime+.5;const n=this.ctx.createOscillator(),s=this.ctx.createGain(),r=this.ctx.createBiquadFilter();n.type="sine",n.frequency.value=55,r.type="lowpass",r.frequency.value=180,s.gain.value=.5,n.connect(r),r.connect(s),s.connect(this.masterGain),n.start(i);for(let a=0;a<180;a++){const l=i+a/t,c=a%4;c===0&&this._kick(l,55),(c===1||c===3)&&this._snare(l),this._hihat(l),c===0&&this._bass(l,55),a%8===0&&this._pad(l,220*(a%16<8?1:1.5))}}catch{}}_killAudio(){this.themeAudio&&(this.themeAudio.pause(),this.themeAudio.src="",this.themeAudio=null);try{this.ctx&&(this.ctx.close(),this.ctx=null,this.masterGain=null)}catch{}}_stopAudio(){if(this.themeAudio){const e=this.themeAudio;let t=e.volume;const i=setInterval(()=>{t=Math.max(0,t-.05),e.volume=t,t<=0&&(clearInterval(i),e.pause(),e.src="")},50)}try{this.masterGain&&this.ctx&&(this.masterGain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.5),setTimeout(()=>{var e;try{(e=this.ctx)==null||e.close()}catch{}},600))}catch{}}_kick(e,t){if(!(!this.ctx||!this.masterGain))try{const i=this.ctx.createOscillator(),n=this.ctx.createGain();i.frequency.setValueAtTime(t,e),i.frequency.exponentialRampToValueAtTime(20,e+.15),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.28),i.connect(n),n.connect(this.masterGain),i.start(e),i.stop(e+.32)}catch{}}_snare(e){if(!(!this.ctx||!this.masterGain))try{const t=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*.18),this.ctx.sampleRate),i=t.getChannelData(0);for(let a=0;a<i.length;a++)i[a]=Math.random()*2-1;const n=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.buffer=t,s.type="bandpass",s.frequency.value=1800,r.gain.setValueAtTime(.055,e),r.gain.exponentialRampToValueAtTime(.001,e+.18),n.connect(s),s.connect(r),r.connect(this.masterGain),n.start(e),n.stop(e+.2)}catch{}}_hihat(e){if(!(!this.ctx||!this.masterGain))try{const t=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*.04),this.ctx.sampleRate),i=t.getChannelData(0);for(let a=0;a<i.length;a++)i[a]=Math.random()*2-1;const n=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),r=this.ctx.createGain();n.buffer=t,s.type="highpass",s.frequency.value=9e3,r.gain.setValueAtTime(.016,e),r.gain.exponentialRampToValueAtTime(.001,e+.04),n.connect(s),s.connect(r),r.connect(this.masterGain),n.start(e),n.stop(e+.05)}catch{}}_bass(e,t){if(!(!this.ctx||!this.masterGain))try{const i=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.value=t,n.type="lowpass",n.frequency.value=280,s.gain.setValueAtTime(.3,e),s.gain.exponentialRampToValueAtTime(.001,e+.45),i.connect(n),n.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+.5)}catch{}}_pad(e,t){if(!(!this.ctx||!this.masterGain))try{const i=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.createBiquadFilter();i.type="triangle",i.frequency.value=t,s.type="lowpass",s.frequency.value=1e3,n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(.07,e+.6),n.gain.linearRampToValueAtTime(0,e+4),i.connect(s),s.connect(n),n.connect(this.masterGain),i.start(e),i.stop(e+4.5)}catch{}}_showHowToPlay(){const e=document.createElement("div");e.style.cssText=`
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
    `,document.head.appendChild(e)}}class bx{constructor(e,t,i){E(this,"btn");E(this,"panel");E(this,"radioSlot");E(this,"moneySlot");E(this,"_open",!1);this._build(e,t,i)}_build(e,t,i){this.btn=document.createElement("button"),this.btn.textContent="☰",this.btn.style.cssText=`
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
    `,n.addEventListener("click",s=>{s.stopPropagation(),i()}),n}_divider(){const e=document.createElement("div");return e.style.cssText="height: 1px; background: rgba(200,168,106,0.12); margin: 0 -4px;",e}}const uo=[{name:"Spanish White",shots:{B:1,Y:1,L:0,R:0,G:0},hex:"#F8F4EC",difficulty:1,hint:"Minimal pigment — barely there"},{name:"Papercut",shots:{B:1,Y:2,L:1,R:0,G:0},hex:"#F0E8D0",difficulty:1,hint:"Double the Yellow, everything else even"},{name:"Tranquil",shots:{B:2,Y:2,L:2,R:0,G:0},hex:"#E4DAC0",difficulty:1,hint:"All three equal — balanced warm white"},{name:"Ivory",shots:{B:3,Y:3,L:3,R:0,G:0},hex:"#EDE0BC",difficulty:2,hint:"Classic — three equal shots"},{name:"Bones",shots:{B:3,Y:1,L:3,R:0,G:0},hex:"#E8DFC8",difficulty:2,hint:"Like Ivory but drop the Yellow to 1"},{name:"Bohemian",shots:{B:3,Y:2,L:3,R:0,G:0},hex:"#DDD0B0",difficulty:2,hint:"Between Ivory and Bones — Y sits at 2"},{name:"Sawtooth",shots:{B:6,Y:2,L:6,R:0,G:0},hex:"#D4C8A8",difficulty:3,hint:"Double the Black and Umber from Bones"},{name:"Atlas",shots:{B:5,Y:10,L:5,R:0,G:0},hex:"#D4B87A",difficulty:3,hint:"Heavy on Yellow — most of anything"}],Ki=[{key:"B",label:"Black",color:"#2a2a2a",dot:"#555",max:8},{key:"Y",label:"Dirty Yellow",color:"#C8A020",dot:"#E8C040",max:12},{key:"L",label:"Raw Umber",color:"#8B5E30",dot:"#AA7848",max:8},{key:"R",label:"Dirty Red",color:"#A04030",dot:"#CC5542",max:6},{key:"G",label:"Green",color:"#3A6030",dot:"#5A8850",max:8}];function ws(o){const e=parseInt(o.replace("#",""),16);return[e>>16&255,e>>8&255,e&255]}function fh(o,e,t){return"#"+[o,e,t].map(i=>Math.max(0,Math.min(255,Math.round(i))).toString(16).padStart(2,"0")).join("")}function wx(o,e){const[t,i,n]=ws(o),[s,r,a]=ws(e);return Math.sqrt((t-s)**2+(i-r)**2+(n-a)**2)}function Mx(o,e){return Math.max(0,Math.round(100-wx(o,e)*.45))}function pr(o){const e={B:o.B??0,Y:o.Y??0,L:o.L??0,R:(o.R??0)*.1,G:o.G??0},t={B:e.B/8,Y:e.Y/12,L:e.L/8,R:e.R/.6,G:e.G/8};let i=0,n=0,s=0,r=0;for(const a of uo){const l={B:a.shots.B/8,Y:a.shots.Y/12,L:a.shots.L/8,R:a.shots.R*.1/.6,G:a.shots.G/8},h=1/(Math.sqrt((t.B-l.B)**2+(t.Y-l.Y)**2+(t.L-l.L)**2+(t.R-l.R)**2+(t.G-l.G)**2)+.003),[u,d,f]=ws(a.hex);i+=u*h,n+=d*h,s+=f*h,r+=h}return fh(i/r,n/r,s/r)}const ph="tem-mixer-v2";function ca(){try{return new Set(JSON.parse(localStorage.getItem(ph)||"[]"))}catch{return new Set}}function Sx(o){try{const e=ca();e.add(o),localStorage.setItem(ph,JSON.stringify([...e]))}catch{}}class Ex{constructor(){E(this,"overlay",null);E(this,"canvas",null);E(this,"ctx",null);E(this,"rafId",0);E(this,"shots",{B:0,Y:0,L:0,R:0,G:0});E(this,"selectedPigment","B");E(this,"target",null);E(this,"timer",180);E(this,"timerInt",null);E(this,"solved",!1);E(this,"onDone",null);E(this,"animState","idle");E(this,"animT",0);E(this,"pumpColor","#C8A020");E(this,"pourDrops",[]);E(this,"currentMix","#F8F6F0");E(this,"displayMix","#F8F6F0");E(this,"mixedResult","");E(this,"matchValue",0);E(this,"dotEls",{B:[],Y:[],L:[],R:[],G:[]});E(this,"timerEl",null);E(this,"mixBtn",null);E(this,"pumpBtn",null);E(this,"matchEl",null);E(this,"pigmentBtns",{});E(this,"W",400);E(this,"H",200);E(this,"bucketCX",200);E(this,"bucketY",155);E(this,"nozzleX",150);E(this,"nozzleY",90);E(this,"joseX",80);E(this,"joseY",178);E(this,"connieX",320);E(this,"connieY",178)}show(e){this._cleanup(),this.solved=!1,this.timer=180,this.shots={B:0,Y:0,L:0,R:0,G:0},this.animState="idle",this.animT=0,this.pourDrops=[],this.currentMix="#F8F6F0",this.displayMix="#F8F6F0",this.mixedResult="",this.matchValue=0,this.onDone=e??null;const t=ca(),i=uo.filter(s=>!t.has(s.name)),n=i.length>0?i:uo;this.target=n[Math.floor(Math.random()*n.length)],this.selectedPigment="B",this._injectStyles(),this._buildUI(),this._startTimer(),this._startRenderLoop()}hide(){this._cleanup()}_buildUI(){const e=document.createElement("div");e.id="mmv2-ov",e.style.cssText=`
      position:fixed; inset:0; z-index:9000;
      background:rgba(0,0,0,0.9); backdrop-filter:blur(10px);
      display:flex; align-items:center; justify-content:center;
      font-family:system-ui,sans-serif;
      animation:mmFadeIn 0.2s ease both;
    `,document.body.appendChild(e),this.overlay=e;const t=document.createElement("div");t.style.cssText=`
      background:linear-gradient(170deg,#1c1814 0%,#0e0c0a 100%);
      border:1px solid rgba(200,168,106,0.22); border-radius:22px;
      width:min(440px,97vw); max-height:97vh; overflow-y:auto;
      box-shadow:0 24px 80px rgba(0,0,0,0.95);
      animation:mmSlideUp 0.28s cubic-bezier(.4,0,.2,1) both;
    `,e.appendChild(t);const i=document.createElement("div");i.style.cssText="display:flex;align-items:flex-start;justify-content:space-between;padding:16px 16px 0;",i.innerHTML=`
      <div>
        <div style="color:#C8A86A;font-size:10px;font-weight:800;letter-spacing:4px;opacity:0.7;">TEM WORKSHOP</div>
        <div style="color:#fff;font-size:19px;font-weight:900;letter-spacing:1px;">🎨 MARBELLINO MIXER</div>
        <div style="color:rgba(200,168,106,0.5);font-size:11px;margin-top:2px;">Mix the right shots — crack the formula</div>
      </div>
    `;const n=document.createElement("button");n.textContent="✕",n.style.cssText="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.45);font-size:16px;width:34px;height:34px;border-radius:50%;cursor:pointer;flex-shrink:0;",n.addEventListener("click",()=>this._cleanup()),i.appendChild(n),t.appendChild(i);const s=document.createElement("div");s.style.cssText="display:flex;align-items:center;gap:12px;padding:12px 16px 0;";const r=document.createElement("div");r.style.cssText="width:52px;height:52px;border-radius:10px;border:2px solid rgba(200,168,106,0.4);flex-shrink:0;",r.style.background=this.target.hex;const a=document.createElement("div");a.style.cssText="flex:1;";const l="★".repeat(this.target.difficulty)+"☆".repeat(3-this.target.difficulty);a.innerHTML=`
      <div style="color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:3px;">TARGET COLOUR</div>
      <div id="mmv2-colname" style="color:#fff;font-size:17px;font-weight:900;letter-spacing:0.5px;">???</div>
      <div style="color:#C8A86A;font-size:11px;letter-spacing:1px;">${l}</div>
    `,s.appendChild(r),s.appendChild(a),t.appendChild(s);const c=document.createElement("div");c.style.cssText="padding:10px 16px 0;",this.canvas=document.createElement("canvas"),this.canvas.style.cssText=`
      width:100%; border-radius:14px;
      border:1px solid rgba(255,255,255,0.07);
      background:#0a0806;
      box-shadow:inset 0 2px 20px rgba(0,0,0,0.8);
    `,this._resizeCanvas(),c.appendChild(this.canvas),t.appendChild(c),this.ctx=this.canvas.getContext("2d");const h=document.createElement("div");h.style.cssText="display:flex;flex-direction:column;gap:8px;padding:12px 16px 0;";for(const g of Ki){const x=g.key,m=document.createElement("div");m.style.cssText="display:flex;align-items:center;gap:10px;cursor:pointer;padding:6px 10px;border-radius:12px;border:1.5px solid transparent;transition:all 0.15s;",m.id=`mmv2-pig-${x}`;const p=document.createElement("div");p.style.cssText=`width:20px;height:20px;border-radius:5px;background:${g.color};border:1.5px solid rgba(255,255,255,0.15);flex-shrink:0;`;const y=document.createElement("div");y.style.cssText="color:rgba(255,255,255,0.7);font-size:12px;font-weight:700;width:88px;flex-shrink:0;",y.textContent=g.label;const M=document.createElement("div");M.style.cssText="display:flex;gap:4px;flex:1;align-items:center;",this.dotEls[x]=[];const v=Math.min(g.max,12);for(let A=0;A<v;A++){const C=document.createElement("div");C.style.cssText="width:12px;height:12px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.12);background:transparent;flex-shrink:0;transition:background 0.15s;",M.appendChild(C),this.dotEls[x].push(C)}const R=document.createElement("div");R.id=`mmv2-cnt-${x}`,R.style.cssText=`color:${g.dot};font-size:13px;font-weight:900;min-width:32px;text-align:right;font-variant-numeric:tabular-nums;`,R.textContent="0",m.appendChild(p),m.appendChild(y),m.appendChild(M),m.appendChild(R),h.appendChild(m),m.addEventListener("click",()=>this._selectPigment(x)),this.pigmentBtns[x]=m}t.appendChild(h),this._selectPigment("B"),this.matchEl=document.createElement("div"),this.matchEl.style.cssText="padding:10px 16px 0;",this.matchEl.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
        <span style="color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:2px;">MATCH</span>
        <span id="mmv2-pct" style="color:#C8A86A;font-size:15px;font-weight:900;">—</span>
      </div>
      <div style="background:rgba(255,255,255,0.06);border-radius:99px;height:8px;overflow:hidden;">
        <div id="mmv2-bar" style="height:100%;width:0%;border-radius:99px;background:linear-gradient(90deg,#C8A86A,#FFD080);transition:width 0.3s ease,background 0.3s ease;"></div>
      </div>
      <div id="mmv2-hint" style="color:rgba(200,168,106,0.4);font-size:11px;text-align:center;margin-top:5px;min-height:16px;"></div>
    `,t.appendChild(this.matchEl);const u=document.createElement("div");u.style.cssText="display:flex;gap:10px;padding:12px 16px 18px;";const d=document.createElement("button");d.textContent="⌫",d.title="Remove one shot",d.style.cssText=`
      background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);
      color:rgba(255,255,255,0.5);font-size:18px;
      width:50px;height:54px;border-radius:14px;cursor:pointer;
      flex-shrink:0;touch-action:manipulation;
    `,d.addEventListener("click",()=>this._removeShot()),this.pumpBtn=document.createElement("button"),this.pumpBtn.style.cssText=`
      flex:1;height:54px;border:none;border-radius:14px;
      font-size:15px;font-weight:900;letter-spacing:0.5px;cursor:pointer;
      touch-action:manipulation;
      background:linear-gradient(135deg,#2a5a3a,#1a3a28);
      color:#88FFbb;
      box-shadow:0 4px 20px rgba(40,160,80,0.25);
      transition:transform 0.1s,box-shadow 0.1s;
    `,this._updatePumpLabel(),this.pumpBtn.addEventListener("pointerdown",()=>{this.pumpBtn.style.transform="scale(0.97)"}),this.pumpBtn.addEventListener("pointerup",()=>{this.pumpBtn.style.transform="",this._pumpShot()}),this.mixBtn=document.createElement("button"),this.mixBtn.style.cssText=`
      width:80px;height:54px;border:none;border-radius:14px;
      font-size:13px;font-weight:900;letter-spacing:0.5px;cursor:pointer;
      touch-action:manipulation;
      background:linear-gradient(135deg,#8B4A00,#5A3000);
      color:#FFD080; flex-shrink:0;
      box-shadow:0 4px 16px rgba(200,100,0,0.25);
      transition:transform 0.1s;
    `,this.mixBtn.textContent="🔩 MIX",this.mixBtn.addEventListener("pointerdown",()=>{this.mixBtn.style.transform="scale(0.97)"}),this.mixBtn.addEventListener("pointerup",()=>{this.mixBtn.style.transform="",this._triggerMix()});const f=document.createElement("div");f.style.cssText="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1px;flex-shrink:0;",f.innerHTML='<span style="color:rgba(255,255,255,0.3);font-size:9px;letter-spacing:1px;">TIME</span>',this.timerEl=document.createElement("span"),this.timerEl.style.cssText="color:#fff;font-size:17px;font-weight:900;font-variant-numeric:tabular-nums;",this.timerEl.textContent="3:00",f.appendChild(this.timerEl),u.appendChild(d),u.appendChild(this.pumpBtn),u.appendChild(this.mixBtn),u.appendChild(f),t.appendChild(u)}_selectPigment(e){this.selectedPigment=e;const t=Ki.find(i=>i.key===e);this.pumpColor=t.dot,this._updatePumpLabel();for(const i of Ki){const n=document.getElementById(`mmv2-pig-${i.key}`);n&&(i.key===e?(n.style.borderColor=t.dot,n.style.background=`${t.color}22`):(n.style.borderColor="transparent",n.style.background="transparent"))}}_updatePumpLabel(){if(!this.pumpBtn)return;const e=Ki.find(n=>n.key===this.selectedPigment),t=this.shots[this.selectedPigment],i=t<1&&this.selectedPigment==="R"&&t>0?`${t.toFixed(1)}`:String(t);this.pumpBtn.textContent=`💉 PUMP ${e.label.toUpperCase()} (${i}/${e.max})`}_pumpShot(){if(this.solved||this.animState==="mixing"||this.animState==="success")return;const e=this.selectedPigment,t=Ki.find(i=>i.key===e);if(this.shots[e]>=t.max){this._flashBtn(this.pumpBtn,"rgba(150,30,20,0.9)",`MAX ${t.max} shots`);return}this.shots[e]++,this._refreshDots(),this._updatePumpLabel(),this.currentMix=pr(this.shots),this.animState="pumping",this.animT=0,this._spawnPour(t.dot)}_removeShot(){if(this.solved||this.animState==="mixing")return;const e=this.selectedPigment;this.shots[e]>0&&(this.shots[e]--,this._refreshDots(),this._updatePumpLabel(),this.currentMix=pr(this.shots))}_refreshDots(){for(const e of Ki){const t=e.key,i=this.shots[t],n=this.dotEls[t],s=e.dot;n.forEach((a,l)=>{a.style.background=l<i?s:"transparent",a.style.borderColor=l<i?s+"88":"rgba(255,255,255,0.12)"});const r=document.getElementById(`mmv2-cnt-${t}`);r&&(r.textContent=String(i))}}_flashBtn(e,t,i){const n=e.style.background,s=e.textContent;e.style.background=t,e.textContent=i,setTimeout(()=>{e.style.background=n,e.textContent=s??""},1200)}_spawnPour(e){for(let t=0;t<8;t++)this.pourDrops.push({x:this.nozzleX+(Math.random()-.5)*4,y:this.nozzleY+t*6,vy:80+Math.random()*40,alpha:1,r:3+Math.random()*3,color:e})}_triggerMix(){if(this.solved||this.animState==="mixing"||this.animState==="success")return;if(Object.values(this.shots).reduce((t,i)=>t+i,0)===0){this._flashBtn(this.mixBtn,"rgba(100,60,0,0.9)","Add some shots first!");return}this.animState="mixing",this.animT=0,this.mixedResult=pr(this.shots),this.matchValue=Mx(this.mixedResult,this.target.hex)}_onMixComplete(){const e=this.matchValue,t=document.getElementById("mmv2-bar"),i=document.getElementById("mmv2-pct"),n=document.getElementById("mmv2-hint");t&&(t.style.width=`${e}%`,t.style.background=e>=82?"linear-gradient(90deg,#44DD88,#88FFCC)":e>=55?"linear-gradient(90deg,#C8A86A,#FFD080)":"linear-gradient(90deg,#882222,#CC4433)"),i&&(i.textContent=`${e}%`,i.style.color=e>=82?"#44DD88":e>=55?"#C8A86A":"#FF6644"),e>=82?this._triggerSuccess(e):(n&&(n.textContent=e>=65?"Getting warmer… try adjusting the shots":"Way off — reset and try again"),this.animState="idle")}_triggerSuccess(e){if(this.solved)return;this.solved=!0,this._stopTimer(),Sx(this.target.name),this.animState="success",this.animT=0;const t=document.getElementById("mmv2-colname");t&&(t.textContent=this.target.name,t.style.color="#44DD88");const i=document.getElementById("mmv2-hint");if(i){const s=Ki.filter(r=>this.target.shots[r.key]>0).map(r=>`${r.key}=${this.target.shots[r.key]}`).join("  ");i.textContent=`✓ Formula: ${s}   (${ca().size}/${uo.length} solved)`,i.style.color="#44DD88AA"}this.pumpBtn&&(this.pumpBtn.disabled=!0),this.mixBtn&&(this.mixBtn.textContent="🏆 CRACKED!",this.mixBtn.style.background="linear-gradient(135deg,#2a8a44,#1a6030)",this.mixBtn.style.color="#88FFcc",this.mixBtn.disabled=!0);const n=Math.round((e-82)/18*40);setTimeout(()=>{var s;this._cleanup(),(s=this.onDone)==null||s.call(this,n)},4500)}_triggerTimeout(){if(this.solved)return;this._stopTimer(),this.animState="fail",this.timerEl&&(this.timerEl.textContent="0:00",this.timerEl.style.color="#FF4444");const e=document.getElementById("mmv2-colname");e&&(e.textContent=`${this.target.name} ← answer`,e.style.color="#FF8866"),this.mixBtn&&(this.mixBtn.disabled=!1,this.mixBtn.style.background="rgba(100,30,20,0.9)",this.mixBtn.style.color="#FF9988",this.mixBtn.textContent="Close",this.mixBtn.addEventListener("click",()=>{var t;this._cleanup(),(t=this.onDone)==null||t.call(this,0)},{once:!0}))}_startRenderLoop(){let e=performance.now();const t=i=>{if(!this.canvas)return;const n=Math.min((i-e)/1e3,.05);e=i,this._update(n),this._drawScene(),this.rafId=requestAnimationFrame(t)};this.rafId=requestAnimationFrame(t)}_update(e){this.animT+=e;const[t,i,n]=ws(this.currentMix),[s,r,a]=ws(this.displayMix),l=this.animState==="mixing"?4:1.5;this.displayMix=fh(s+(t-s)*l*e,r+(i-r)*l*e,a+(n-a)*l*e);for(let c=this.pourDrops.length-1;c>=0;c--){const h=this.pourDrops[c];h.y+=h.vy*e,h.vy+=200*e,h.alpha=Math.max(0,1-(h.y-this.nozzleY)/(this.bucketY-this.nozzleY+10)),(h.y>this.bucketY+5||h.alpha<=0)&&this.pourDrops.splice(c,1)}this.animState==="pumping"&&this.animT>.7&&(this.animState="idle"),this.animState==="mixing"&&this.animT>2&&(this.animState="idle",this._onMixComplete())}_drawScene(){if(!this.canvas||!this.ctx)return;const e=this.ctx,t=this.canvas.width,i=this.canvas.height;e.clearRect(0,0,t,i);const n=e.createLinearGradient(0,0,0,i);n.addColorStop(0,"#1a1410"),n.addColorStop(1,"#080604"),e.fillStyle=n,e.fillRect(0,0,t,i),e.strokeStyle="rgba(200,168,106,0.15)",e.lineWidth=1,e.beginPath(),e.moveTo(0,i-18),e.lineTo(t,i-18),e.stroke(),this._drawBucket(e,t,i),this._drawJose(e,t,i),(this.animState==="mixing"||this.animState==="success"||this.matchValue>0)&&this._drawConnie(e,t,i);for(const s of this.pourDrops)e.save(),e.globalAlpha=s.alpha,e.fillStyle=s.color,e.shadowColor=s.color,e.shadowBlur=6,e.beginPath(),e.arc(s.x,s.y,s.r,0,Math.PI*2),e.fill(),e.restore();(this.animState==="pumping"||this.pourDrops.length>0)&&(e.save(),e.strokeStyle="rgba(255,255,255,0.15)",e.lineWidth=3,e.beginPath(),e.moveTo(this.nozzleX,this.nozzleY),e.lineTo(this.bucketCX-5,this.nozzleY),e.stroke(),e.fillStyle="#888",e.fillRect(this.bucketCX-10,this.nozzleY-4,14,7),e.restore())}_drawBucket(e,t,i){const n=this.bucketCX,s=this.bucketY,r=58,a=54,l=40,c={x:n-a/2,y:s-r},h={x:n+a/2,y:s-r},u={x:n+l/2,y:s},d={x:n-l/2,y:s};e.save(),e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(h.x,h.y),e.lineTo(u.x,u.y),e.lineTo(d.x,d.y),e.closePath(),e.clip(),e.fillStyle="#F5F0E8",e.fill();const f=Object.values(this.shots).reduce((x,m)=>x+m,0),g=Math.min(1,f/22);if(g>0){const x=s-r*g,m=l+(a-l)*g,p={x:n-m/2},y={x:n+m/2};e.beginPath(),e.moveTo(p.x,x),e.lineTo(y.x,x),e.lineTo(u.x,s),e.lineTo(d.x,s),e.closePath(),e.fillStyle=this.displayMix,e.fill(),e.strokeStyle="rgba(255,255,255,0.3)",e.lineWidth=1.5;const M=x+2;e.beginPath(),e.moveTo(p.x+3,M),e.bezierCurveTo(n-m/4,M-3,n+m/4,M+2,y.x-3,M),e.stroke()}if(this.animState==="mixing"){const m=this.animT;for(let p=0;p<3;p++){const y=m*6+p*(Math.PI*2/3),M=10+Math.sin(m*3+p)*5,v=n+Math.cos(y)*M,R=s-r*.3+Math.sin(y)*M*.4;e.beginPath(),e.arc(v,R,3,0,Math.PI*2),e.fillStyle=`rgba(255,255,255,${.15+Math.sin(y)*.1})`,e.fill()}}e.restore(),e.save(),e.beginPath(),e.moveTo(c.x,c.y),e.lineTo(h.x,h.y),e.lineTo(u.x,u.y),e.lineTo(d.x,d.y),e.closePath(),e.strokeStyle=this.animState==="success"?`rgba(68,221,136,${.7+Math.sin(this.animT*4)*.3})`:"rgba(200,168,106,0.5)",e.lineWidth=2,e.stroke(),e.beginPath(),e.ellipse(n,s-r,a/2,6,0,0,Math.PI*2),e.strokeStyle="rgba(200,168,106,0.6)",e.lineWidth=2,e.stroke(),e.fillStyle="rgba(220,190,140,0.15)",e.fill(),e.beginPath(),e.arc(n,s-r-3,a/2-4,Math.PI,0),e.strokeStyle="#B09060",e.lineWidth=3,e.stroke(),e.font=`bold ${Math.round(r*.16)}px system-ui`,e.fillStyle="rgba(200,168,106,0.55)",e.textAlign="center",e.fillText("TEM",n,s-r*.4),e.textAlign="start",e.restore()}_drawJose(e,t,i){const n=this.joseX,s=this.joseY,r="#C88060",a="#111",l=this.animState==="pumping",c=this.animT,h=n+20,u=s-55,d=18,f=50;e.fillStyle="#2a2a2a",e.strokeStyle="#555",e.lineWidth=1.5,e.beginPath(),e.roundRect(h,u,d,f,3),e.fill(),e.stroke(),e.beginPath(),e.arc(h+d/2,u+12,6,0,Math.PI*2),e.fillStyle=l?"#FF8800":"#446688",e.fill(),e.strokeStyle="#888",e.lineWidth=1,e.stroke();const g=h+d/2,x=u+30,m=l?Math.sin(c*12)*.5:-.15,p=22,y=g+Math.cos(m-.5)*p,M=x+Math.sin(m-.5)*p;e.strokeStyle="#888",e.lineWidth=3,e.lineCap="round",e.beginPath(),e.moveTo(g,x),e.lineTo(y,M),e.stroke(),e.lineCap="butt",e.beginPath(),e.arc(y,M,5,0,Math.PI*2),e.fillStyle="#C8A86A",e.fill();const v=95;e.fillStyle="#0a0a0a",e.fillRect(n-10,s-14,10,14),e.fillRect(n+2,s-14,10,14),e.fillStyle="#1a1a2a",e.fillRect(n-9,s-v*.45,9,v*.45-12),e.fillRect(n+2,s-v*.45,9,v*.45-12),e.fillStyle=a,e.fillRect(n-12,s-v*.82,24,v*.38),e.fillStyle=r,e.fillRect(n-4,s-v*.87,8,v*.06),e.beginPath(),e.arc(n,s-v*.9,v*.08,0,Math.PI*2),e.fill(),e.fillStyle="#1a0800",e.beginPath(),e.arc(n,s-v*.9-v*.08*.5,v*.09,Math.PI,0),e.fill(),e.fillStyle="#F5C842",e.beginPath(),e.ellipse(n,s-v*.9-v*.07,v*.12,v*.04,0,Math.PI,0),e.fill(),e.fillRect(n-v*.12,s-v*.9-v*.08,v*.24,v*.035),e.strokeStyle=a,e.lineWidth=8,e.lineCap="round";const R=l?Math.sin(c*12)*5:0;e.beginPath(),e.moveTo(n+10,s-v*.75),e.quadraticCurveTo(n+22,s-v*.6+R,y-4,M+2),e.stroke(),e.beginPath(),e.arc(y-3,M+2,5,0,Math.PI*2),e.fillStyle=r,e.fill(),e.strokeStyle=a,e.lineWidth=8,e.beginPath(),e.moveTo(n-10,s-v*.75),e.lineTo(n-16,s-v*.5),e.stroke(),e.beginPath(),e.arc(n-16,s-v*.49,5,0,Math.PI*2),e.fillStyle=r,e.fill(),e.lineCap="butt",e.font="bold 8px system-ui",e.fillStyle="rgba(255,220,100,0.7)",e.textAlign="center",e.fillText("JOSE",n,s+10),e.textAlign="start"}_drawConnie(e,t,i){const n=this.connieX,s=this.connieY,r="#F0C8A0",a="#111",l=95,c=this.animState==="mixing",h=this.animState==="success",u=this.animT,d=Math.min(1,c||h||this.matchValue>0?u*4:0);e.save(),e.globalAlpha=d,e.translate((1-d)*40,0),e.fillStyle="#111",e.fillRect(n-10,s-14,10,14),e.fillRect(n+2,s-14,10,14),e.fillStyle="#1a1a2a",e.fillRect(n-9,s-l*.45,9,l*.45-12),e.fillRect(n+2,s-l*.45,9,l*.45-12),e.fillStyle=a,e.fillRect(n-12,s-l*.82,24,l*.38),e.fillStyle=r,e.fillRect(n-4,s-l*.87,8,l*.06),e.beginPath(),e.arc(n,s-l*.9,l*.08,0,Math.PI*2),e.fill(),e.fillStyle="#D4B840",e.beginPath(),e.arc(n,s-l*.9-l*.05,l*.1,Math.PI,0),e.fill(),e.fillRect(n-l*.11,s-l*.9,l*.22,l*.14);const f=-.15+(c?Math.sin(u*8)*.06:0),g=55,x=n-12,m=s-l*.74,p=x-Math.cos(f)*g,y=m+Math.sin(f)*g*.4;if(e.strokeStyle=a,e.lineWidth=8,e.lineCap="round",e.beginPath(),e.moveTo(x,m),e.lineTo(p+20,y),e.stroke(),e.lineCap="butt",e.save(),e.translate(p,y),e.rotate(f),e.fillStyle="#333",e.beginPath(),e.roundRect(-28,-6,36,12,3),e.fill(),e.strokeStyle="#666",e.lineWidth=1,e.stroke(),e.fillStyle="#555",e.fillRect(-32,-4,6,8),e.strokeStyle="#aaa",e.lineWidth=2,e.lineCap="round",e.beginPath(),e.moveTo(-32,0),e.lineTo(-44,0),e.stroke(),e.lineCap="butt",c){e.save(),e.translate(-44,0);const M=e.createRadialGradient(0,0,0,0,0,12);M.addColorStop(0,`rgba(200,168,106,${.6+Math.sin(u*15)*.3})`),M.addColorStop(1,"transparent"),e.fillStyle=M,e.beginPath(),e.arc(0,0,12,0,Math.PI*2),e.fill(),e.strokeStyle="#FFD080",e.lineWidth=2,e.save(),e.rotate(u*20);for(let v=0;v<Math.PI*2;v+=Math.PI/2)e.beginPath(),e.moveTo(0,0),e.lineTo(Math.cos(v)*9,Math.sin(v)*9),e.stroke();e.restore(),e.restore()}e.restore(),h&&u>.5&&(e.fillStyle=r,e.strokeStyle=a,e.lineWidth=8,e.lineCap="round",e.beginPath(),e.moveTo(n+10,s-l*.74),e.lineTo(n+22,s-l*.9),e.stroke()),e.font="bold 8px system-ui",e.fillStyle="rgba(255,200,80,0.7)",e.textAlign="center",e.fillText("CONNIE",n,s+10),e.textAlign="start",e.lineCap="butt",e.restore()}_startTimer(){this.timerInt=setInterval(()=>{if(!this.solved){if(this.timer--,this.timerEl){const e=Math.floor(this.timer/60),t=this.timer%60;this.timerEl.textContent=`${e}:${t.toString().padStart(2,"0")}`,this.timer<=30&&(this.timerEl.style.color="#FF6644"),this.timer<=10&&(this.timerEl.style.animation="mmTimerPulse 0.5s ease infinite alternate")}this.timer<=0&&this._triggerTimeout()}},1e3)}_stopTimer(){this.timerInt&&(clearInterval(this.timerInt),this.timerInt=null)}_resizeCanvas(){if(!this.canvas)return;const e=Math.min(440,window.innerWidth*.97)-32,t=e/400;this.W=Math.round(e),this.H=Math.round(200*t),this.canvas.width=this.W,this.canvas.height=this.H,this.bucketCX=Math.round(this.W*.5),this.bucketY=Math.round(this.H*.82),this.nozzleX=Math.round(this.W*.38),this.nozzleY=Math.round(this.H*.36),this.joseX=Math.round(this.W*.2),this.joseY=Math.round(this.H*.94),this.connieX=Math.round(this.W*.8),this.connieY=Math.round(this.H*.94)}_cleanup(){var e;this._stopTimer(),cancelAnimationFrame(this.rafId),(e=document.getElementById("mmv2-ov"))==null||e.remove(),this.overlay=null,this.canvas=null,this.ctx=null}_injectStyles(){if(document.getElementById("mmv2-styles"))return;const e=document.createElement("style");e.id="mmv2-styles",e.textContent=`
      @keyframes mmFadeIn  { from { opacity:0 } to { opacity:1 } }
      @keyframes mmSlideUp { from { opacity:0; transform:translateY(30px) scale(0.96) }
                              to   { opacity:1; transform:translateY(0) scale(1) } }
      @keyframes mmTimerPulse { from { opacity:1 } to { opacity:0.3 } }
    `,document.head.appendChild(e)}}const Tx={Matt:`Matt folds himself into the back. "Took your time." He's already on his phone.`,Jose:'Jose appears from nowhere, bucket in hand. "Vámonos — I was getting bored."',Jarrad:`Jarrad adjusts his hard hat. "I've been standing here fifteen minutes." He has.`,Phil:`Phil sips the last of his tea, unhurried. "Right then. Let's go." He fastens his seatbelt twice.`,Tsuyoshi:"Tsuyoshi vaults in without opening the door. His mohawk grazes the roof lining.",Fabio:`Fabio loads in, trowel over his shoulder. "You're late. Ehhhh —" he waves it off. "I found a pizza place nearby. Very acceptable."`};async function Ax(){await ig();const o=await new px().play();await new yx().show(o);const e=new sg;await e.init();const t=new cg(e.scene);t.spawnCrewAtCityPositions();const i=new Cg,n=new hg(e.scene),s=new Rg,r=new Ng,a=new rx,l=new bo,c=new gg(n,i,X=>{l.activePhase>=2&&s.triggerBump(X)},e.collisionWorld,()=>{l.activePhase>=2&&s.triggerCrash()}),h=new aa(e.scene),u=new Bg(X=>{u.hide(),a.show(`📋 ${X.title}`,`Client: ${X.client}

${X.description}

💰 Pay: $${X.pay.toLocaleString()}

🏭 Head to the TEM workshop to collect supplies.`,()=>{l.acceptJob(X),h.setTarget(bo.WORKSHOP_POS),r.setActiveJob(X,1),r.updateCrewStatus([],[],!1),G=0;const z=20+Math.random()*60,ie=z+20+Math.random()*50;Math.random()>.5?(O=z,W=ie):(W=z,O=ie),j=null,Y=null},$i(ax))});s.onSpill=X=>{l.money=Math.max(0,l.money-X),r.updateMoney(l.money),r.showSpillPenalty(X)};const d=new tx(e.scene),f=new la(e.scene),g=new ix,x=new nn(e.scene),m=new ps(e.scene),p=new ox,y=new L(nn.POS.x,6,nn.POS.z),M=new jg,v=new Kg,R=new bs,A=new Ex,C=new cx,I=new bx(()=>v.show(),()=>{u.isVisible()?u.hide():u.show(l.getAvailableJobs())},()=>A.show(X=>{X>0&&(l.money+=X*1e3,r.updateMoney(l.money),r.showToast(`🎨 Formula cracked! +${(X*1e3).toLocaleString()} sats`,4513160))}));I.mountMoneyPanel(r.getMoneyPanel()),I.mountRadio(C.getEl());let w=!1;const b={x:-60,z:-100},P={x:100,z:60};let G=0,O=-1,W=-1,j=null,Y=null;e.onUpdate(X=>{const z=n.mesh.position.x,ie=n.mesh.position.z;if(a.isActive){(i.forward||i.brake)&&a.tryResume(),t.updateAll(X),x.update(X,z,ie,p),m.update(X,z,ie,p),e.camera.follow(n.mesh.position,n.velocity,n.heading);{const re=y.clone().project(e.camera.camera),Ie=(re.x*.5+.5)*window.innerWidth,q=(-re.y*.5+.5)*window.innerHeight;p.setScreenPosition(Ie,q)}return}c.update(X),n.updateSuspension(X);const de=l.activeJob!==null&&l.activePhase>=2;if(s.setVisible(de),de?s.update(X):s.level=0,t.updateAll(X),f.update(X),f.tryVisit(z,ie)&&j!=="coffee"&&(s.level=Math.max(0,s.level-.6),g.drinkCoffee(),g.isUrgent?r.showToast("☕ Coffeed up — now find a toilet, fast!",13918762):r.showToast("☕ Coffee hit! Plaster steady, bladder loading...",13918762)),g.update(X,l.activeJob?c.speed:0),g.tryRelief(z,ie)&&j!=="toilet"&&r.showToast("🚽 Ahhh! Relief! Ready for the next coffee ☕",2201331),g.isUrgent&&l.activeJob){const re=Date.now();re-g.lastUrgentToast>15e3&&(g.lastUrgentToast=re,r.showToast("🚽 Bursting! Find the toilet before you spill!",16733986))}s.spillRateMultiplier=g.spillMultiplier,x.update(X,z,ie,p)&&y.set(nn.POS.x,6,nn.POS.z),m.update(X,z,ie,p)&&y.set(ps.POS.x,6,ps.POS.z);const ye=t.checkProximityDialogue(z,ie);ye&&(y.set(ye.pos.x,6,ye.pos.z),p.show(ki[ye.name],ye.line));{const re=y.clone().project(e.camera.camera),Ie=(re.x*.5+.5)*window.innerWidth,q=(-re.y*.5+.5)*window.innerHeight;p.setScreenPosition(Ie,q)}if(d.update(X,z,ie),h.update(X,z,ie),l.activeJob){const re=l.tickTravel(X);r.updateTravelTimer(l.travelTimer),re!=null&&re.failed&&(s.level=0,j=null,Y=null,O=-1,W=-1,h.setTarget(null),r.updateTravelTimer(null),r.showTimerFail(15e4),r.setActiveJob(null,1),r.updateMoney(l.money),r.updateCrewStatus([],[],!1),t.showAllCrew(),setTimeout(()=>u.show(l.getAvailableJobs()),3500))}else r.updateTravelTimer(null);if(l.activeJob!==null)if(l.activePhase===1)r.updateJobDistance(l.distanceToWorkshop(z,ie));else if(l.activePhase===2){const re=l.nextCrewNeeded();if(re){const Ie=t.getCrewPosition(re);r.updateJobDistance(l.distanceToPoint(z,ie,Ie.x,Ie.z))}}else r.updateJobDistance(l.distanceTo(z,ie));if(l.activeJob&&!j&&!w&&(G+=X,O>0&&G>=O?(O=-1,j="coffee",Y=h.currentTarget,h.setTarget(b),r.showToast("☕ Gagging for a coffee — hit the cafe NOW!",13918762)):W>0&&G>=W&&(W=-1,j="toilet",g.level=.88,g.isUrgent=!0,Y=h.currentTarget,h.setTarget(P),r.showToast("🚽 Bursting! Find the toilet before you ruin the plastering!",16733986))),l.activeJob&&j&&!w){const re=j==="coffee"?b:P,Ie=z-re.x,q=ie-re.z;if(Math.sqrt(Ie*Ie+q*q)<14){w=!0;const ne=j;j=null;const ge=Y;Y=null,ne==="coffee"?(g.drinkCoffee(),a.show("☕ Coffee Break!",`You grab a flat white. The barista nods — they know the order.

Bladder's loading... don't take too long.

Back on the road.`,()=>{h.setTarget(ge),w=!1},$i(fr))):(g.level=0,g.isUrgent=!1,g.caffeinated=!1,a.show("🚽 Phew — Crisis Averted!",`Barely made it. Not a word to the crew.

Back on the road.`,()=>{h.setTarget(ge),w=!1},$i(fr)))}}if(l.activeJob&&l.activePhase===1&&!j&&!w&&l.checkPhase1Arrival(z,ie)){w=!0,s.level=0,m.playLaugh();const re=l.crewToPickup.join(" + ");a.show("📦 Supplies Loaded!",`Connie's cackle echoes through the factory as the buckets go in.

Now go pick up the crew:
👷 ${re}

They're scattered around the city. Your waypoint will guide you.`,()=>{l.advanceToPhase2();const Ie=l.nextCrewNeeded();if(Ie){const q=t.getCrewPosition(Ie);h.setTarget(q)}r.showPhase1Complete(),r.setActiveJob(l.activeJob,2),r.updateCrewStatus(l.crewToPickup,l.crewPickedUp,!0),w=!1},$i(ur))}if(l.activeJob&&l.activePhase===2&&!j&&!w)for(const re of l.crewToPickup){if(l.crewPickedUp.includes(re))continue;const Ie=t.getCrewPosition(re);if(l.distanceToPoint(z,ie,Ie.x,Ie.z)<10){w=!0,t.hideCrew(re);const ne=l.pickupCrew(re);r.updateCrewStatus(l.crewToPickup,l.crewPickedUp,!0);const ge=Tx[re]??`${re} hops in.`;if(ne)a.show(`🚐 ${re} aboard — Full crew!`,`${ge}

Full crew loaded. Everyone's in (sort of).

Head to the job site now. Your waypoint is set.`,()=>{l.advanceToPhase3(),h.setTarget(l.activeJob.position),r.showCrewPickup(re,null),r.setActiveJob(l.activeJob,3),w=!1},$i(ur));else{const ae=l.nextCrewNeeded(),Pe=l.crewToPickup.filter(Le=>!l.crewPickedUp.includes(Le)).join(", ");a.show(`🧑‍🔧 ${re} aboard!`,`${ge}

Still need to collect:
👷 ${Pe}`,()=>{if(ae){const Le=t.getCrewPosition(ae);h.setTarget(Le),r.showCrewPickup(re,ae)}r.updateCrewStatus(l.crewToPickup,l.crewPickedUp,!0),w=!1},$i(fr))}break}}if(l.activeJob&&l.activePhase===3&&!j&&!w&&!M.isActive()){const re=l.checkArrival(z,ie);re!==null&&(w=!0,h.setTarget(null),a.show(`🏗️ ${re.title}`,`${re.client} is waiting.

${re.description}

Time to get to work. Show them what TEM does.`,()=>{r.setActiveJob(null,3),r.updateCrewStatus([],[],!1),C.setVisible(!1),M.startRandom(Ie=>{C.setVisible(!0);const q=l.completeJob(re,Ie.qualityPct);q<0?r.showPenalty(re.title,Math.abs(q)):r.showJobComplete(re.title,q),r.updateMoney(l.money),t.showAllCrew(),j=null,Y=null,O=-1,W=-1,w=!1,dh()&&!bs.isUnlocked()?setTimeout(()=>R.trigger(),2e3):setTimeout(()=>{const ne=l.getAvailableJobs();ne.length>0&&u.show(ne)},3500)})},$i(ur)))}e.camera.follow(n.mesh.position,n.velocity,n.heading),r.update(c.speed,s.level)}),setTimeout(()=>{u.show(l.getAvailableJobs())},1e3),e.start()}Ax().catch(o=>{console.error("Game init failed:",o),document.body.style.background="#000";const e=document.createElement("div");e.style.cssText=`
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    color:#fff;font-family:sans-serif;font-size:18px;text-align:center;
    background:rgba(200,40,40,0.9);padding:24px 32px;border-radius:16px;
    max-width:90vw;z-index:9999;
  `,e.innerHTML=`<b>🚨 Game failed to start</b><br><br>${(o==null?void 0:o.message)||String(o)}`,document.body.appendChild(e)});
//# sourceMappingURL=index-lPQSUdIy.js.map
