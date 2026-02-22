var $c=Object.defineProperty;var Jc=(s,t,e)=>t in s?$c(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var R=(s,t,e)=>Jc(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $r="170",Kc=0,Aa=1,Zc=2,Jl=1,Kl=2,vn=3,zn=0,Re=1,ze=2,bn=0,Ci=1,er=2,Ca=3,Ra=4,Qc=5,Jn=100,th=101,eh=102,nh=103,ih=104,sh=200,oh=201,rh=202,ah=203,nr=204,ir=205,lh=206,ch=207,hh=208,dh=209,uh=210,fh=211,ph=212,mh=213,gh=214,sr=0,or=1,rr=2,Ii=3,ar=4,lr=5,cr=6,hr=7,Jr=0,xh=1,_h=2,On=0,Zl=1,Ql=2,tc=3,Kr=4,vh=5,ec=6,nc=7,ic=300,Di=301,Li=302,dr=303,ur=304,uo=306,fr=1e3,ti=1001,pr=1002,nn=1003,yh=1004,bs=1005,cn=1006,vo=1007,ei=1008,Tn=1009,sc=1010,oc=1011,us=1012,Zr=1013,si=1014,Mn=1015,Sn=1016,Qr=1017,ta=1018,Bi=1020,rc=35902,ac=1021,lc=1022,en=1023,cc=1024,hc=1025,Ri=1026,Fi=1027,dc=1028,ea=1029,uc=1030,na=1031,ia=1033,js=33776,$s=33777,Js=33778,Ks=33779,mr=35840,gr=35841,xr=35842,_r=35843,vr=36196,yr=37492,Mr=37496,wr=37808,br=37809,Sr=37810,Er=37811,Tr=37812,Ar=37813,Cr=37814,Rr=37815,Pr=37816,Ir=37817,Dr=37818,Lr=37819,Br=37820,Fr=37821,Zs=36492,Ur=36494,Nr=36495,fc=36283,Or=36284,kr=36285,zr=36286,Mh=2200,wh=2201,bh=2202,no=2300,Gr=2301,yo=2302,Si=2400,Ei=2401,io=2402,sa=2500,Sh=2501,Eh=3200,Th=3201,pc=0,Ah=1,Un="",Xe="srgb",ki="srgb-linear",fo="linear",te="srgb",li=7680,Pa=519,Ch=512,Rh=513,Ph=514,mc=515,Ih=516,Dh=517,Lh=518,Bh=519,Ia=35044,Da="300 es",wn=2e3,so=2001;class oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mo=Math.PI/180,Hr=180/Math.PI;function zi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[s&255]+Te[s>>8&255]+Te[s>>16&255]+Te[s>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function Fh(s,t){return(s%t+t)%t}function wo(s,t,e){return(1-e)*s+e*t}function ji(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Fe(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*i+t.x,this.y=o*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,i,o,r,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c)}set(t,e,n,i,o,r,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],g=n[8],x=i[0],m=i[3],f=i[6],b=i[1],S=i[4],y=i[7],I=i[2],A=i[5],T=i[8];return o[0]=r*x+a*b+l*I,o[3]=r*m+a*S+l*A,o[6]=r*f+a*y+l*T,o[1]=c*x+h*b+d*I,o[4]=c*m+h*S+d*A,o[7]=c*f+h*y+d*T,o[2]=u*x+p*b+g*I,o[5]=u*m+p*S+g*A,o[8]=u*f+p*y+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*r*h-e*a*c-n*o*h+n*a*l+i*o*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*r-a*c,u=a*l-h*o,p=c*o-r*l,g=e*d+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=d*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*r)*x,t[3]=u*x,t[4]=(h*e-i*l)*x,t[5]=(i*o-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(r*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+t,-i*c,i*l,-i*(-c*r+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(bo.makeScale(t,e)),this}rotate(t){return this.premultiply(bo.makeRotation(-t)),this}translate(t,e){return this.premultiply(bo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const bo=new kt;function gc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function oo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Uh(){const s=oo("canvas");return s.style.display="block",s}const La={};function rs(s){s in La||(La[s]=!0,console.warn(s))}function Nh(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Oh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function kh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:ki,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?fo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function En(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Pi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ba=[.64,.33,.3,.6,.15,.06],Fa=[.2126,.7152,.0722],Ua=[.3127,.329],Na=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oa=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[ki]:{primaries:Ba,whitePoint:Ua,transfer:fo,toXYZ:Na,fromXYZ:Oa,luminanceCoefficients:Fa,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:Ba,whitePoint:Ua,transfer:te,toXYZ:Na,fromXYZ:Oa,luminanceCoefficients:Fa,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}});let ci;class zh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ci===void 0&&(ci=oo("canvas")),ci.width=t.width,ci.height=t.height;const n=ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=oo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=En(o[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gh=0;class xc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(So(i[r].image)):o.push(So(i[r]))}else o=So(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function So(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?zh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hh=0;class Le extends oi{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=ti,i=ti,o=cn,r=ei,a=en,l=Tn,c=Le.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=zi(),this.name="",this.source=new xc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ic)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fr:t.x=t.x-Math.floor(t.x);break;case ti:t.x=t.x<0?0:1;break;case pr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fr:t.y=t.y-Math.floor(t.y);break;case ti:t.y=t.y<0?0:1;break;case pr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=ic;Le.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,i=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,y=(p+1)/2,I=(f+1)/2,A=(h+u)/4,T=(d+x)/4,P=(g+m)/4;return S>y&&S>I?S<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(S),i=A/n,o=T/n):y>I?y<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(y),n=A/i,o=P/i):I<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(I),n=T/o,i=P/o),this.set(n,i,o,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-x)/b,this.z=(u-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vh extends oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends Vh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class _c extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Wh extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=o[r+0],p=o[r+1],g=o[r+2],x=o[r+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(d!==x||l!==u||c!==p||h!==g){let m=1-a;const f=l*u+c*p+h*g+d*x,b=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const I=Math.sqrt(S),A=Math.atan2(I,f*b);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}const y=a*b;if(l=l*m+u*y,c=c*m+p*y,h=h*m+g*y,d=d*m+x*y,m===1-a){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,o,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=o[r],u=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+h*d+l*p-c*u,t[e+1]=l*g+h*u+c*d-a*p,t[e+2]=c*g+h*p+a*u-l*d,t[e+3]=h*g-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,r=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(o/2),u=l(n/2),p=l(i/2),g=l(o/2);switch(r){case"XYZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"YXZ":this._x=u*h*d+c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"ZXY":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d-u*p*g;break;case"ZYX":this._x=u*h*d-c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d+u*p*g;break;case"YZX":this._x=u*h*d+c*p*g,this._y=c*p*d+u*h*g,this._z=c*h*g-u*p*d,this._w=c*h*d-u*p*g;break;case"XZY":this._x=u*h*d-c*p*g,this._y=c*p*d-u*h*g,this._z=c*h*g+u*p*d,this._w=c*h*d+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],r=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(o-c)*p,this._z=(r-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(o+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(o-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(r-i)/p,this._x=(o+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,r=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+r*a+i*c-o*l,this._y=i*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+i*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=r*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=o*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ka.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ka.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,r=t.y,a=t.z,l=t.w,c=2*(r*i-a*n),h=2*(a*e-o*i),d=2*(o*n-r*e);return this.x=e+l*c+r*d-a*h,this.y=n+l*h+a*c-o*d,this.z=i+l*d+o*h-r*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,r=e.x,a=e.y,l=e.z;return this.x=i*l-o*a,this.y=o*r-n*l,this.z=n*a-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Eo.copy(this).projectOnVector(t),this.sub(Eo)}reflect(t){return this.sub(Eo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Eo=new D,ka=new qe;class gs{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,$e):$e.fromBufferAttribute(o,r),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ss.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(t.matrixWorld),this.union(Ss)}const i=t.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($i),Es.subVectors(this.max,$i),hi.subVectors(t.a,$i),di.subVectors(t.b,$i),ui.subVectors(t.c,$i),Pn.subVectors(di,hi),In.subVectors(ui,di),Hn.subVectors(hi,ui);let e=[0,-Pn.z,Pn.y,0,-In.z,In.y,0,-Hn.z,Hn.y,Pn.z,0,-Pn.x,In.z,0,-In.x,Hn.z,0,-Hn.x,-Pn.y,Pn.x,0,-In.y,In.x,0,-Hn.y,Hn.x,0];return!To(e,hi,di,ui,Es)||(e=[1,0,0,0,1,0,0,0,1],!To(e,hi,di,ui,Es))?!1:(Ts.crossVectors(Pn,In),e=[Ts.x,Ts.y,Ts.z],To(e,hi,di,ui,Es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new D,new D,new D,new D,new D,new D,new D,new D],$e=new D,Ss=new gs,hi=new D,di=new D,ui=new D,Pn=new D,In=new D,Hn=new D,$i=new D,Es=new D,Ts=new D,Vn=new D;function To(s,t,e,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){Vn.fromArray(s,o);const a=i.x*Math.abs(Vn.x)+i.y*Math.abs(Vn.y)+i.z*Math.abs(Vn.z),l=t.dot(Vn),c=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Xh=new gs,Ji=new D,Ao=new D;class po{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Xh.setFromPoints(t).getCenter(n);let i=0;for(let o=0,r=t.length;o<r;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ji.subVectors(t,this.center);const e=Ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ji,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ao.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ji.copy(t.center).add(Ao)),this.expandByPoint(Ji.copy(t.center).sub(Ao))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new D,Co=new D,As=new D,Dn=new D,Ro=new D,Cs=new D,Po=new D;class vc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Co.copy(t).add(e).multiplyScalar(.5),As.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(Co);const o=t.distanceTo(e)*.5,r=-this.direction.dot(As),a=Dn.dot(this.direction),l=-Dn.dot(As),c=Dn.lengthSq(),h=Math.abs(1-r*r);let d,u,p,g;if(h>0)if(d=r*l-a,u=r*a-l,g=o*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,p=d*(d+r*u+2*a)+u*(r*d+u+2*l)+c}else u=o,d=Math.max(0,-(r*u+a)),p=-d*d+u*(u+2*l)+c;else u=-o,d=Math.max(0,-(r*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-r*o+a)),u=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-o,-l),o),p=u*(u+2*l)+c):(d=Math.max(0,-(r*o+a)),u=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+u*(u+2*l)+c);else u=r>0?-o:o,d=Math.max(0,-(r*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Co).addScaledVector(As,u),p}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,o=t.radius*t.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(o=(t.min.y-u.y)*h,r=(t.max.y-u.y)*h):(o=(t.max.y-u.y)*h,r=(t.min.y-u.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,i,o){Ro.subVectors(e,t),Cs.subVectors(n,t),Po.crossVectors(Ro,Cs);let r=this.direction.dot(Po),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Dn.subVectors(this.origin,t);const l=a*this.direction.dot(Cs.crossVectors(Dn,Cs));if(l<0)return null;const c=a*this.direction.dot(Ro.cross(Dn));if(c<0||l+c>r)return null;const h=-a*Dn.dot(Po);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,n,i,o,r,a,l,c,h,d,u,p,g,x,m){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,r,a,l,c,h,d,u,p,g,x,m)}set(t,e,n,i,o,r,a,l,c,h,d,u,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=o,f[5]=r,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/fi.setFromMatrixColumn(t,0).length(),o=1/fi.setFromMatrixColumn(t,1).length(),r=1/fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),d=Math.sin(o);if(t.order==="XYZ"){const u=r*h,p=r*d,g=a*h,x=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=g+p*c,e[10]=r*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,g=c*h,x=c*d;e[0]=u+x*a,e[4]=g*a-p,e[8]=r*c,e[1]=r*d,e[5]=r*h,e[9]=-a,e[2]=p*a-g,e[6]=x+u*a,e[10]=r*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,g=c*h,x=c*d;e[0]=u-x*a,e[4]=-r*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*h,e[9]=x-u*a,e[2]=-r*c,e[6]=a,e[10]=r*l}else if(t.order==="ZYX"){const u=r*h,p=r*d,g=a*h,x=a*d;e[0]=l*h,e[4]=g*c-p,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=r*l}else if(t.order==="YZX"){const u=r*l,p=r*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-u*d,e[8]=g*d+p,e[1]=d,e[5]=r*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+g,e[10]=u-x*d}else if(t.order==="XZY"){const u=r*l,p=r*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=r*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qh,t,Yh)}lookAt(t,e,n){const i=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Ln.crossVectors(n,Oe),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Ln.crossVectors(n,Oe)),Ln.normalize(),Rs.crossVectors(Oe,Ln),i[0]=Ln.x,i[4]=Rs.x,i[8]=Oe.x,i[1]=Ln.y,i[5]=Rs.y,i[9]=Oe.y,i[2]=Ln.z,i[6]=Rs.z,i[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],b=n[3],S=n[7],y=n[11],I=n[15],A=i[0],T=i[4],P=i[8],M=i[12],_=i[1],C=i[5],z=i[9],k=i[13],W=i[2],K=i[6],q=i[10],et=i[14],V=i[3],J=i[7],ot=i[11],mt=i[15];return o[0]=r*A+a*_+l*W+c*V,o[4]=r*T+a*C+l*K+c*J,o[8]=r*P+a*z+l*q+c*ot,o[12]=r*M+a*k+l*et+c*mt,o[1]=h*A+d*_+u*W+p*V,o[5]=h*T+d*C+u*K+p*J,o[9]=h*P+d*z+u*q+p*ot,o[13]=h*M+d*k+u*et+p*mt,o[2]=g*A+x*_+m*W+f*V,o[6]=g*T+x*C+m*K+f*J,o[10]=g*P+x*z+m*q+f*ot,o[14]=g*M+x*k+m*et+f*mt,o[3]=b*A+S*_+y*W+I*V,o[7]=b*T+S*C+y*K+I*J,o[11]=b*P+S*z+y*q+I*ot,o[15]=b*M+S*k+y*et+I*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],r=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+o*l*d-i*c*d-o*a*u+n*c*u+i*a*p-n*l*p)+x*(+e*l*p-e*c*u+o*r*u-i*r*p+i*c*h-o*l*h)+m*(+e*c*d-e*a*p-o*r*d+n*r*p+o*a*h-n*c*h)+f*(-i*a*h-e*l*d+e*a*u+i*r*d-n*r*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],r=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],b=d*m*c-x*u*c+x*l*p-a*m*p-d*l*f+a*u*f,S=g*u*c-h*m*c-g*l*p+r*m*p+h*l*f-r*u*f,y=h*x*c-g*d*c+g*a*p-r*x*p-h*a*f+r*d*f,I=g*d*l-h*x*l-g*a*u+r*x*u+h*a*m-r*d*m,A=e*b+n*S+i*y+o*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=b*T,t[1]=(x*u*o-d*m*o-x*i*p+n*m*p+d*i*f-n*u*f)*T,t[2]=(a*m*o-x*l*o+x*i*c-n*m*c-a*i*f+n*l*f)*T,t[3]=(d*l*o-a*u*o-d*i*c+n*u*c+a*i*p-n*l*p)*T,t[4]=S*T,t[5]=(h*m*o-g*u*o+g*i*p-e*m*p-h*i*f+e*u*f)*T,t[6]=(g*l*o-r*m*o-g*i*c+e*m*c+r*i*f-e*l*f)*T,t[7]=(r*u*o-h*l*o+h*i*c-e*u*c-r*i*p+e*l*p)*T,t[8]=y*T,t[9]=(g*d*o-h*x*o-g*n*p+e*x*p+h*n*f-e*d*f)*T,t[10]=(r*x*o-g*a*o+g*n*c-e*x*c-r*n*f+e*a*f)*T,t[11]=(h*a*o-r*d*o-h*n*c+e*d*c+r*n*p-e*a*p)*T,t[12]=I*T,t[13]=(h*x*i-g*d*i+g*n*u-e*x*u-h*n*m+e*d*m)*T,t[14]=(g*a*i-r*x*i-g*n*l+e*x*l+r*n*m-e*a*m)*T,t[15]=(r*d*i-h*a*i+h*n*l-e*d*l-r*n*u+e*a*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,r=t.x,a=t.y,l=t.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,r){return this.set(1,n,o,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,r=e._y,a=e._z,l=e._w,c=o+o,h=r+r,d=a+a,u=o*c,p=o*h,g=o*d,x=r*h,m=r*d,f=a*d,b=l*c,S=l*h,y=l*d,I=n.x,A=n.y,T=n.z;return i[0]=(1-(x+f))*I,i[1]=(p+y)*I,i[2]=(g-S)*I,i[3]=0,i[4]=(p-y)*A,i[5]=(1-(u+f))*A,i[6]=(m+b)*A,i[7]=0,i[8]=(g+S)*T,i[9]=(m-b)*T,i[10]=(1-(u+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=fi.set(i[0],i[1],i[2]).length();const r=fi.set(i[4],i[5],i[6]).length(),a=fi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],Je.copy(this);const c=1/o,h=1/r,d=1/a;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=h,Je.elements[5]*=h,Je.elements[6]*=h,Je.elements[8]*=d,Je.elements[9]*=d,Je.elements[10]*=d,e.setFromRotationMatrix(Je),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,i,o,r,a=wn){const l=this.elements,c=2*o/(e-t),h=2*o/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(a===wn)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===so)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,o,r,a=wn){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(r-o),u=(e+t)*c,p=(n+i)*h;let g,x;if(a===wn)g=(r+o)*d,x=-2*d;else if(a===so)g=o*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const fi=new D,Je=new ce,qh=new D(0,0,0),Yh=new D(1,1,1),Ln=new D,Rs=new D,Oe=new D,za=new ce,Ga=new qe;class Ge{constructor(t=0,e=0,n=0,i=Ge.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ue(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return za.makeRotationFromQuaternion(t),this.setFromRotationMatrix(za,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ga.setFromEuler(this),this.setFromQuaternion(Ga,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ge.DEFAULT_ORDER="XYZ";class yc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jh=0;const Ha=new D,pi=new qe,mn=new ce,Ps=new D,Ki=new D,$h=new D,Jh=new qe,Va=new D(1,0,0),Wa=new D(0,1,0),Xa=new D(0,0,1),qa={type:"added"},Kh={type:"removed"},mi={type:"childadded",child:null},Io={type:"childremoved",child:null};class _e extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new D,e=new Ge,n=new qe,i=new D(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ce},normalMatrix:{value:new kt}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(Va,t)}rotateY(t){return this.rotateOnAxis(Wa,t)}rotateZ(t){return this.rotateOnAxis(Xa,t)}translateOnAxis(t,e){return Ha.copy(t).applyQuaternion(this.quaternion),this.position.add(Ha.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Va,t)}translateY(t){return this.translateOnAxis(Wa,t)}translateZ(t){return this.translateOnAxis(Xa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ps.copy(t):Ps.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ki.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Ki,Ps,this.up):mn.lookAt(Ps,Ki,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),pi.setFromRotationMatrix(mn),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qa),mi.child=t,this.dispatchEvent(mi),mi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Kh),Io.child=t,this.dispatchEvent(Io),Io.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qa),mi.child=t,this.dispatchEvent(mi),mi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,t,$h),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ki,Jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];o(t.shapes,d)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(t.materials,this.material[l]));i.material=a}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(t.animations,l))}}if(e){const a=r(t.geometries),l=r(t.materials),c=r(t.textures),h=r(t.images),d=r(t.shapes),u=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new D(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new D,gn=new D,Do=new D,xn=new D,gi=new D,xi=new D,Ya=new D,Lo=new D,Bo=new D,Fo=new D,Uo=new ne,No=new ne,Oo=new ne;class tn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Ke.subVectors(i,e),gn.subVectors(n,e),Do.subVectors(t,e);const r=Ke.dot(Ke),a=Ke.dot(gn),l=Ke.dot(Do),c=gn.dot(gn),h=gn.dot(Do),d=r*c-a*a;if(d===0)return o.set(0,0,0),null;const u=1/d,p=(c*l-a*h)*u,g=(r*h-a*l)*u;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,i,o,r,a,l){return this.getBarycoord(t,e,n,i,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,xn.x),l.addScaledVector(r,xn.y),l.addScaledVector(a,xn.z),l)}static getInterpolatedAttribute(t,e,n,i,o,r){return Uo.setScalar(0),No.setScalar(0),Oo.setScalar(0),Uo.fromBufferAttribute(t,e),No.fromBufferAttribute(t,n),Oo.fromBufferAttribute(t,i),r.setScalar(0),r.addScaledVector(Uo,o.x),r.addScaledVector(No,o.y),r.addScaledVector(Oo,o.z),r}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),gn.subVectors(t,e),Ke.cross(gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Ke.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let r,a;gi.subVectors(i,n),xi.subVectors(o,n),Lo.subVectors(t,n);const l=gi.dot(Lo),c=xi.dot(Lo);if(l<=0&&c<=0)return e.copy(n);Bo.subVectors(t,i);const h=gi.dot(Bo),d=xi.dot(Bo);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return r=l/(l-h),e.copy(n).addScaledVector(gi,r);Fo.subVectors(t,o);const p=gi.dot(Fo),g=xi.dot(Fo);if(g>=0&&p<=g)return e.copy(o);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(xi,a);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Ya.subVectors(o,i),a=(d-h)/(d-h+(p-g)),e.copy(i).addScaledVector(Ya,a);const f=1/(m+x+u);return r=x*f,a=u*f,e.copy(n).addScaledVector(gi,r).addScaledVector(xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function ko(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=Fh(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=ko(r,o,t+1/3),this.g=ko(r,o,t),this.b=ko(r,o,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=Xe){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=Mc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return qt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ue(Ae.r*255,0,255))*65536+Math.round(Ue(Ae.g*255,0,255))*256+Math.round(Ue(Ae.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,o=Ae.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const d=r-a;switch(c=h<=.5?d/(r+a):d/(2-r-a),r){case n:l=(i-o)/d+(i<o?6:0);break;case i:l=(o-n)/d+2;break;case o:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Xe){qt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Is);const n=wo(Bn.h,Is.h,e),i=wo(Bn.s,Is.s,e),o=wo(Bn.l,Is.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new yt;yt.NAMES=Mc;let Zh=0;class Gi extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=zi(),this.name="",this.blending=Ci,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nr,this.blendDst=ir,this.blendEquation=Jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==nr&&(n.blendSrc=this.blendSrc),this.blendDst!==ir&&(n.blendDst=this.blendDst),this.blendEquation!==Jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ii&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(e){const o=i(t.textures),r=i(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class He extends Gi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=Jr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new D,Ds=new It;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ia,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ds.fromBufferAttribute(this,e),Ds.applyMatrix3(t),this.setXY(e,Ds.x,Ds.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Fe(e,this.array),n=Fe(n,this.array),i=Fe(i,this.array),o=Fe(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ia&&(t.usage=this.usage),t}}class wc extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class bc extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ie extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Qh=0;const We=new ce,zo=new _e,_i=new D,ke=new gs,Zi=new gs,we=new D;class Pe extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gc(t)?bc:wc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new kt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return zo.lookAt(t),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const r=t[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ie(n,3))}else{for(let n=0,i=e.count;n<i;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];ke.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Zi.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(ke.min,Zi.min),ke.expandByPoint(we),we.addVectors(ke.max,Zi.max),ke.expandByPoint(we)):(ke.expandByPoint(Zi.min),ke.expandByPoint(Zi.max))}ke.getCenter(n);let i=0;for(let o=0,r=t.count;o<r;o++)we.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(we));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)we.fromBufferAttribute(a,c),l&&(_i.fromBufferAttribute(t,c),we.add(_i)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new D,l[P]=new D;const c=new D,h=new D,d=new D,u=new It,p=new It,g=new It,x=new D,m=new D;function f(P,M,_){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,_),u.fromBufferAttribute(o,P),p.fromBufferAttribute(o,M),g.fromBufferAttribute(o,_),h.sub(c),d.sub(c),p.sub(u),g.sub(u);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(C),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(x),a[M].add(x),a[_].add(x),l[P].add(m),l[M].add(m),l[_].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,M=b.length;P<M;++P){const _=b[P],C=_.start,z=_.count;for(let k=C,W=C+z;k<W;k+=3)f(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const S=new D,y=new D,I=new D,A=new D;function T(P){I.fromBufferAttribute(i,P),A.copy(I);const M=a[P];S.copy(M),S.sub(I.multiplyScalar(I.dot(M))).normalize(),y.crossVectors(A,M);const C=y.dot(l[P])<0?-1:1;r.setXYZW(P,S.x,S.y,S.z,C)}for(let P=0,M=b.length;P<M;++P){const _=b[P],C=_.start,z=_.count;for(let k=C,W=C+z;k<W;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new D,o=new D,r=new D,a=new D,l=new D,c=new D,h=new D,d=new D;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),h.subVectors(r,o),d.subVectors(i,o),h.cross(d),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),r.fromBufferAttribute(e,u+2),h.subVectors(r,o),d.subVectors(i,o),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new on(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const o=t.morphAttributes;for(const c in o){const h=[],d=o[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new ce,Wn=new vc,Ls=new po,$a=new D,Bs=new D,Fs=new D,Us=new D,Go=new D,Ns=new D,Ja=new D,Os=new D;class L extends _e{constructor(t=new Pe,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(o&&a){Ns.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],d=o[l];h!==0&&(Go.fromBufferAttribute(d,t),r?Ns.addScaledVector(Go,h):Ns.addScaledVector(Go.sub(e),h))}e.add(Ns)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ls.copy(n.boundingSphere),Ls.applyMatrix4(o),Wn.copy(t.ray).recast(t.near),!(Ls.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ls,$a)===null||Wn.origin.distanceToSquared($a)>(t.far-t.near)**2))&&(ja.copy(o).invert(),Wn.copy(t.ray).applyMatrix4(ja),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let i;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,d=o.attributes.normal,u=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=r[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,I=S;y<I;y+=3){const A=a.getX(y),T=a.getX(y+1),P=a.getX(y+2);i=ks(this,f,t,n,c,h,d,A,T,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const b=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);i=ks(this,r,t,n,c,h,d,b,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=r[m.materialIndex],b=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=b,I=S;y<I;y+=3){const A=y,T=y+1,P=y+2;i=ks(this,f,t,n,c,h,d,A,T,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const b=m,S=m+1,y=m+2;i=ks(this,r,t,n,c,h,d,b,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function td(s,t,e,n,i,o,r,a){let l;if(t.side===Re?l=n.intersectTriangle(r,o,i,!0,a):l=n.intersectTriangle(i,o,r,t.side===zn,a),l===null)return null;Os.copy(a),Os.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Os);return c<e.near||c>e.far?null:{distance:c,point:Os.clone(),object:s}}function ks(s,t,e,n,i,o,r,a,l,c){s.getVertexPosition(a,Bs),s.getVertexPosition(l,Fs),s.getVertexPosition(c,Us);const h=td(s,t,e,n,Bs,Fs,Us,Ja);if(h){const d=new D;tn.getBarycoord(Ja,Bs,Fs,Us,d),i&&(h.uv=tn.getInterpolatedAttribute(i,a,l,c,d,new It)),o&&(h.uv1=tn.getInterpolatedAttribute(o,a,l,c,d,new It)),r&&(h.normal=tn.getInterpolatedAttribute(r,a,l,c,d,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new D,materialIndex:0};tn.getNormal(Bs,Fs,Us,u.normal),h.face=u,h.barycoord=d}return h}class Q extends Pe{constructor(t=1,e=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],d=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new ie(c,3)),this.setAttribute("normal",new ie(h,3)),this.setAttribute("uv",new ie(d,2));function g(x,m,f,b,S,y,I,A,T,P,M){const _=y/T,C=I/P,z=y/2,k=I/2,W=A/2,K=T+1,q=P+1;let et=0,V=0;const J=new D;for(let ot=0;ot<q;ot++){const mt=ot*C-k;for(let Dt=0;Dt<K;Dt++){const Yt=Dt*_-z;J[x]=Yt*b,J[m]=mt*S,J[f]=W,c.push(J.x,J.y,J.z),J[x]=0,J[m]=0,J[f]=A>0?1:-1,h.push(J.x,J.y,J.z),d.push(Dt/T),d.push(1-ot/P),et+=1}}for(let ot=0;ot<P;ot++)for(let mt=0;mt<T;mt++){const Dt=u+mt+K*ot,Yt=u+mt+K*(ot+1),Y=u+(mt+1)+K*(ot+1),it=u+(mt+1)+K*ot;l.push(Dt,Yt,it),l.push(Yt,Y,it),V+=6}a.addGroup(p,V,M),p+=V,u+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Q(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ui(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ie(s){const t={};for(let e=0;e<s.length;e++){const n=Ui(s[e]);for(const i in n)t[i]=n[i]}return t}function ed(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Sc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const fs={clone:Ui,merge:Ie};var nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ce extends Gi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nd,this.fragmentShader=id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=ed(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ec extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new D,Ka=new It,Za=new It;class De extends Ec{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hr*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z)}getViewSize(t,e){return this.getViewBounds(t,Ka,Za),e.subVectors(Za,Ka)}setViewOffset(t,e,n,i,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Mo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vi=-90,yi=1;class sd extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new De(vi,yi,t,e);i.layers=this.layers,this.add(i);const o=new De(vi,yi,t,e);o.layers=this.layers,this.add(o);const r=new De(vi,yi,t,e);r.layers=this.layers,this.add(r);const a=new De(vi,yi,t,e);a.layers=this.layers,this.add(a);const l=new De(vi,yi,t,e);l.layers=this.layers,this.add(l);const c=new De(vi,yi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,r,a,l]=e;for(const c of e)this.remove(c);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===so)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,r),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Tc extends Le{constructor(t,e,n,i,o,r,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Di,super(t,e,n,i,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class od extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Tc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Q(5,5,5),o=new Ce({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:bn});o.uniforms.tEquirect.value=e;const r=new L(i,o),a=e.minFilter;return e.minFilter===ei&&(e.minFilter=cn),new sd(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(o)}}const Ho=new D,rd=new D,ad=new kt;class jn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ho.subVectors(n,e).cross(rd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ho),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ad.getNormalMatrix(t),i=this.coplanarPoint(Ho).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new po,zs=new D;class oa{constructor(t=new jn,e=new jn,n=new jn,i=new jn,o=new jn,r=new jn){this.planes=[t,e,n,i,o,r]}set(t,e,n,i,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){const n=this.planes,i=t.elements,o=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],p=i[8],g=i[9],x=i[10],m=i[11],f=i[12],b=i[13],S=i[14],y=i[15];if(n[0].setComponents(l-o,u-c,m-p,y-f).normalize(),n[1].setComponents(l+o,u+c,m+p,y+f).normalize(),n[2].setComponents(l+r,u+h,m+g,y+b).normalize(),n[3].setComponents(l-r,u-h,m-g,y-b).normalize(),n[4].setComponents(l-a,u-d,m-x,y-S).normalize(),e===wn)n[5].setComponents(l+a,u+d,m+x,y+S).normalize();else if(e===so)n[5].setComponents(a,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(zs.x=i.normal.x>0?t.max.x:t.min.x,zs.y=i.normal.y>0?t.max.y:t.min.y,zs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ac(){let s=null,t=!1,e=null,n=null;function i(o,r){e(o,r),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function ld(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){const g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}class de extends Pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,r=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const b=f*u-r;for(let S=0;S<c;S++){const y=S*d-o;g.push(y,-b,0),x.push(0,0,1),m.push(S/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){const S=b+c*f,y=b+c*(f+1),I=b+1+c*(f+1),A=b+1+c*f;p.push(S,y,A),p.push(y,I,A)}this.setIndex(p),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.width,t.height,t.widthSegments,t.heightSegments)}}var cd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hd=`#ifdef USE_ALPHAHASH
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
#endif`,dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ud=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,md=`#ifdef USE_AOMAP
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
#endif`,gd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xd=`#ifdef USE_BATCHING
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
#endif`,_d=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Md=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wd=`#ifdef USE_IRIDESCENCE
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
#endif`,bd=`#ifdef USE_BUMPMAP
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Id=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Dd=`#define PI 3.141592653589793
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
} // validated`,Ld=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bd=`vec3 transformedNormal = objectNormal;
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
#endif`,Fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ud=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kd="gl_FragColor = linearToOutputTexel( gl_FragColor );",zd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Wd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xd=`#ifdef USE_ENVMAP
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
#endif`,qd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$d=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jd=`#ifdef USE_GRADIENTMAP
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
}`,Kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tu=`uniform bool receiveShadow;
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
#endif`,eu=`#ifdef USE_ENVMAP
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
#endif`,nu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,su=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ou=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ru=`PhysicalMaterial material;
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
#endif`,au=`struct PhysicalMaterial {
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
}`,lu=`
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
#endif`,cu=`#if defined( RE_IndirectDiffuse )
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
#endif`,hu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,du=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_u=`#if defined( USE_POINTS_UV )
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
#endif`,vu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Su=`#ifdef USE_MORPHTARGETS
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
#endif`,Eu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Au=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Cu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ru=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Iu=`#ifdef USE_NORMALMAP
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
#endif`,Du=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ou=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ku=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yu=`float getShadowMask() {
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
}`,ju=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$u=`#ifdef USE_SKINNING
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
#endif`,Ju=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ku=`#ifdef USE_SKINNING
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
#endif`,Zu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ef=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nf=`#ifdef USE_TRANSMISSION
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
#endif`,sf=`#ifdef USE_TRANSMISSION
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
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hf=`uniform sampler2D t2D;
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
}`,df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`#include <common>
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
}`,gf=`#if DEPTH_PACKING == 3200
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
}`,xf=`#define DISTANCE
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
}`,_f=`#define DISTANCE
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
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mf=`uniform float scale;
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
}`,wf=`uniform vec3 diffuse;
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
}`,bf=`#include <common>
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
}`,Sf=`uniform vec3 diffuse;
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
}`,Ef=`#define LAMBERT
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
}`,Tf=`#define LAMBERT
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
}`,Af=`#define MATCAP
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
}`,Cf=`#define MATCAP
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
}`,Rf=`#define NORMAL
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
}`,Pf=`#define NORMAL
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
}`,If=`#define PHONG
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
}`,Df=`#define PHONG
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
}`,Lf=`#define STANDARD
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
}`,Bf=`#define STANDARD
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
}`,Ff=`#define TOON
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
}`,Uf=`#define TOON
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
}`,Nf=`uniform float size;
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
}`,Of=`uniform vec3 diffuse;
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
}`,kf=`#include <common>
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
}`,zf=`uniform vec3 color;
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
}`,Gf=`uniform float rotation;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Gt={alphahash_fragment:cd,alphahash_pars_fragment:hd,alphamap_fragment:dd,alphamap_pars_fragment:ud,alphatest_fragment:fd,alphatest_pars_fragment:pd,aomap_fragment:md,aomap_pars_fragment:gd,batching_pars_vertex:xd,batching_vertex:_d,begin_vertex:vd,beginnormal_vertex:yd,bsdfs:Md,iridescence_fragment:wd,bumpmap_pars_fragment:bd,clipping_planes_fragment:Sd,clipping_planes_pars_fragment:Ed,clipping_planes_pars_vertex:Td,clipping_planes_vertex:Ad,color_fragment:Cd,color_pars_fragment:Rd,color_pars_vertex:Pd,color_vertex:Id,common:Dd,cube_uv_reflection_fragment:Ld,defaultnormal_vertex:Bd,displacementmap_pars_vertex:Fd,displacementmap_vertex:Ud,emissivemap_fragment:Nd,emissivemap_pars_fragment:Od,colorspace_fragment:kd,colorspace_pars_fragment:zd,envmap_fragment:Gd,envmap_common_pars_fragment:Hd,envmap_pars_fragment:Vd,envmap_pars_vertex:Wd,envmap_physical_pars_fragment:eu,envmap_vertex:Xd,fog_vertex:qd,fog_pars_vertex:Yd,fog_fragment:jd,fog_pars_fragment:$d,gradientmap_pars_fragment:Jd,lightmap_pars_fragment:Kd,lights_lambert_fragment:Zd,lights_lambert_pars_fragment:Qd,lights_pars_begin:tu,lights_toon_fragment:nu,lights_toon_pars_fragment:iu,lights_phong_fragment:su,lights_phong_pars_fragment:ou,lights_physical_fragment:ru,lights_physical_pars_fragment:au,lights_fragment_begin:lu,lights_fragment_maps:cu,lights_fragment_end:hu,logdepthbuf_fragment:du,logdepthbuf_pars_fragment:uu,logdepthbuf_pars_vertex:fu,logdepthbuf_vertex:pu,map_fragment:mu,map_pars_fragment:gu,map_particle_fragment:xu,map_particle_pars_fragment:_u,metalnessmap_fragment:vu,metalnessmap_pars_fragment:yu,morphinstance_vertex:Mu,morphcolor_vertex:wu,morphnormal_vertex:bu,morphtarget_pars_vertex:Su,morphtarget_vertex:Eu,normal_fragment_begin:Tu,normal_fragment_maps:Au,normal_pars_fragment:Cu,normal_pars_vertex:Ru,normal_vertex:Pu,normalmap_pars_fragment:Iu,clearcoat_normal_fragment_begin:Du,clearcoat_normal_fragment_maps:Lu,clearcoat_pars_fragment:Bu,iridescence_pars_fragment:Fu,opaque_fragment:Uu,packing:Nu,premultiplied_alpha_fragment:Ou,project_vertex:ku,dithering_fragment:zu,dithering_pars_fragment:Gu,roughnessmap_fragment:Hu,roughnessmap_pars_fragment:Vu,shadowmap_pars_fragment:Wu,shadowmap_pars_vertex:Xu,shadowmap_vertex:qu,shadowmask_pars_fragment:Yu,skinbase_vertex:ju,skinning_pars_vertex:$u,skinning_vertex:Ju,skinnormal_vertex:Ku,specularmap_fragment:Zu,specularmap_pars_fragment:Qu,tonemapping_fragment:tf,tonemapping_pars_fragment:ef,transmission_fragment:nf,transmission_pars_fragment:sf,uv_pars_fragment:of,uv_pars_vertex:rf,uv_vertex:af,worldpos_vertex:lf,background_vert:cf,background_frag:hf,backgroundCube_vert:df,backgroundCube_frag:uf,cube_vert:ff,cube_frag:pf,depth_vert:mf,depth_frag:gf,distanceRGBA_vert:xf,distanceRGBA_frag:_f,equirect_vert:vf,equirect_frag:yf,linedashed_vert:Mf,linedashed_frag:wf,meshbasic_vert:bf,meshbasic_frag:Sf,meshlambert_vert:Ef,meshlambert_frag:Tf,meshmatcap_vert:Af,meshmatcap_frag:Cf,meshnormal_vert:Rf,meshnormal_frag:Pf,meshphong_vert:If,meshphong_frag:Df,meshphysical_vert:Lf,meshphysical_frag:Bf,meshtoon_vert:Ff,meshtoon_frag:Uf,points_vert:Nf,points_frag:Of,shadow_vert:kf,shadow_frag:zf,sprite_vert:Gf,sprite_frag:Hf},at={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},ln={basic:{uniforms:Ie([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:Ie([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new yt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:Ie([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:Ie([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:Ie([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new yt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:Ie([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:Ie([at.points,at.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:Ie([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:Ie([at.common,at.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:Ie([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:Ie([at.sprite,at.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:Ie([at.common,at.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:Ie([at.lights,at.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};ln.physical={uniforms:Ie([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Gs={r:0,b:0,g:0},qn=new Ge,Vf=new ce;function Wf(s,t,e,n,i,o,r){const a=new yt(0);let l=o===!0?0:1,c,h,d=null,u=0,p=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function x(b){let S=!1;const y=g(b);y===null?f(a,l):y&&y.isColor&&(f(y,1),S=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,r):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,S){const y=g(S);y&&(y.isCubeTexture||y.mapping===uo)?(h===void 0&&(h=new L(new Q(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:Ui(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),qn.copy(S.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Vf.makeRotationFromEuler(qn)),h.material.toneMapped=qt.getTransfer(y.colorSpace)!==te,(d!==y||u!==y.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=y,u=y.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new L(new de(2,2),new Ce({name:"BackgroundMaterial",uniforms:Ui(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=qt.getTransfer(y.colorSpace)!==te,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||u!==y.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=y,u=y.version,p=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,S){b.getRGB(Gs,Sc(s)),n.buffers.color.setClear(Gs.r,Gs.g,Gs.b,S,r)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:x,addToRenderList:m}}function Xf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let o=i,r=!1;function a(_,C,z,k,W){let K=!1;const q=d(k,z,C);o!==q&&(o=q,c(o.object)),K=p(_,k,z,W),K&&g(_,k,z,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,y(_,C,z,k),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function h(_){return s.deleteVertexArray(_)}function d(_,C,z){const k=z.wireframe===!0;let W=n[_.id];W===void 0&&(W={},n[_.id]=W);let K=W[C.id];K===void 0&&(K={},W[C.id]=K);let q=K[k];return q===void 0&&(q=u(l()),K[k]=q),q}function u(_){const C=[],z=[],k=[];for(let W=0;W<e;W++)C[W]=0,z[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:k,object:_,attributes:{},index:null}}function p(_,C,z,k){const W=o.attributes,K=C.attributes;let q=0;const et=z.getAttributes();for(const V in et)if(et[V].location>=0){const ot=W[V];let mt=K[V];if(mt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(mt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(mt=_.instanceColor)),ot===void 0||ot.attribute!==mt||mt&&ot.data!==mt.data)return!0;q++}return o.attributesNum!==q||o.index!==k}function g(_,C,z,k){const W={},K=C.attributes;let q=0;const et=z.getAttributes();for(const V in et)if(et[V].location>=0){let ot=K[V];ot===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor));const mt={};mt.attribute=ot,ot&&ot.data&&(mt.data=ot.data),W[V]=mt,q++}o.attributes=W,o.attributesNum=q,o.index=k}function x(){const _=o.newAttributes;for(let C=0,z=_.length;C<z;C++)_[C]=0}function m(_){f(_,0)}function f(_,C){const z=o.newAttributes,k=o.enabledAttributes,W=o.attributeDivisors;z[_]=1,k[_]===0&&(s.enableVertexAttribArray(_),k[_]=1),W[_]!==C&&(s.vertexAttribDivisor(_,C),W[_]=C)}function b(){const _=o.newAttributes,C=o.enabledAttributes;for(let z=0,k=C.length;z<k;z++)C[z]!==_[z]&&(s.disableVertexAttribArray(z),C[z]=0)}function S(_,C,z,k,W,K,q){q===!0?s.vertexAttribIPointer(_,C,z,W,K):s.vertexAttribPointer(_,C,z,k,W,K)}function y(_,C,z,k){x();const W=k.attributes,K=z.getAttributes(),q=C.defaultAttributeValues;for(const et in K){const V=K[et];if(V.location>=0){let J=W[et];if(J===void 0&&(et==="instanceMatrix"&&_.instanceMatrix&&(J=_.instanceMatrix),et==="instanceColor"&&_.instanceColor&&(J=_.instanceColor)),J!==void 0){const ot=J.normalized,mt=J.itemSize,Dt=t.get(J);if(Dt===void 0)continue;const Yt=Dt.buffer,Y=Dt.type,it=Dt.bytesPerElement,xt=Y===s.INT||Y===s.UNSIGNED_INT||J.gpuType===Zr;if(J.isInterleavedBufferAttribute){const lt=J.data,Rt=lt.stride,Bt=J.offset;if(lt.isInstancedInterleavedBuffer){for(let Ht=0;Ht<V.locationSize;Ht++)f(V.location+Ht,lt.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ht=0;Ht<V.locationSize;Ht++)m(V.location+Ht);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let Ht=0;Ht<V.locationSize;Ht++)S(V.location+Ht,mt/V.locationSize,Y,ot,Rt*it,(Bt+mt/V.locationSize*Ht)*it,xt)}else{if(J.isInstancedBufferAttribute){for(let lt=0;lt<V.locationSize;lt++)f(V.location+lt,J.meshPerAttribute);_.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let lt=0;lt<V.locationSize;lt++)m(V.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Yt);for(let lt=0;lt<V.locationSize;lt++)S(V.location+lt,mt/V.locationSize,Y,ot,mt*it,mt/V.locationSize*lt*it,xt)}}else if(q!==void 0){const ot=q[et];if(ot!==void 0)switch(ot.length){case 2:s.vertexAttrib2fv(V.location,ot);break;case 3:s.vertexAttrib3fv(V.location,ot);break;case 4:s.vertexAttrib4fv(V.location,ot);break;default:s.vertexAttrib1fv(V.location,ot)}}}}b()}function I(){P();for(const _ in n){const C=n[_];for(const z in C){const k=C[z];for(const W in k)h(k[W].object),delete k[W];delete C[z]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;const C=n[_.id];for(const z in C){const k=C[z];for(const W in k)h(k[W].object),delete k[W];delete C[z]}delete n[_.id]}function T(_){for(const C in n){const z=n[C];if(z[_.id]===void 0)continue;const k=z[_.id];for(const W in k)h(k[W].object),delete k[W];delete z[_.id]}}function P(){M(),r=!0,o!==i&&(o=i,c(o.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function qf(s,t,e){let n;function i(c){n=c}function o(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function r(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Yf(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){return!(T!==en&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const P=T===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Tn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Mn&&!P)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:I,maxSamples:A}}function jf(s){const t=this;let e=null,n=0,i=!1,o=!1;const r=new jn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=s.get(d);if(!i||g===null||g.length===0||o&&!m)o?h(null):c();else{const b=o?0:n,S=b*4;let y=f.clippingState||null;l.value=y,y=h(g,u,S,p);for(let I=0;I!==S;++I)y[I]=e[I];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,y=p;S!==x;++S,y+=4)r.copy(d[S]).applyMatrix4(b,a),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function $f(s){let t=new WeakMap;function e(r,a){return a===dr?r.mapping=Di:a===ur&&(r.mapping=Li),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===dr||a===ur)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new od(l.height);return c.fromEquirectangularTexture(s,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class ra extends Ec{constructor(t=-1,e=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ti=4,Qa=[.125,.215,.35,.446,.526,.582],Kn=20,Vo=new ra,tl=new yt;let Wo=null,Xo=0,qo=0,Yo=!1;const $n=(1+Math.sqrt(5))/2,Mi=1/$n,el=[new D(-$n,Mi,0),new D($n,Mi,0),new D(-Mi,0,$n),new D(Mi,0,$n),new D(0,$n,-Mi),new D(0,$n,Mi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class nl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ol(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wo,Xo,qo),this._renderer.xr.enabled=Yo,t.scissorTest=!1,Hs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),qo=this._renderer.getActiveMipmapLevel(),Yo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Sn,format:en,colorSpace:ki,depthBuffer:!1},i=il(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=il(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jf(o)),this._blurMaterial=Kf(o,t,e)}return i}_compileMaterial(t){const e=new L(this._lodPlanes[0],t);this._renderer.compile(e,Vo)}_sceneToCubeUV(t,e,n,i){const a=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(tl),h.toneMapping=On,h.autoClear=!1;const p=new He({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new L(new Q,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(tl),x=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):b===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const S=this._cubeSize;Hs(i,b*S,f>2?S:0,S,S),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Di||t.mapping===Li;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ol()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new L(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const l=this._cubeSize;Hs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Vo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=el[(i-o-1)%el.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",o),this._halfBlur(r,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new L(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Kn-1),x=o/g,m=isFinite(o)?1+Math.floor(h*x):Kn;m>Kn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Kn}`);const f=[];let b=0;for(let T=0;T<Kn;++T){const P=T/x,M=Math.exp(-P*P/2);f.push(M),T===0?b+=M:T<m&&(b+=2*M)}for(let T=0;T<f.length;T++)f[T]=f[T]/b;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=r==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const y=this._sizeLods[i],I=3*y*(i>S-Ti?i-S+Ti:0),A=4*(this._cubeSize-y);Hs(e,I,A,3*y,2*y),l.setRenderTarget(e),l.render(d,Vo)}}function Jf(s){const t=[],e=[],n=[];let i=s;const o=s-Ti+1+Qa.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);e.push(a);let l=1/a;r>s-Ti?l=Qa[r-s+Ti-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,f=1,b=new Float32Array(x*g*p),S=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,P=A>2?0:-1,M=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];b.set(M,x*g*A),S.set(u,m*g*A);const _=[A,A,A,A,A,A];y.set(_,f*g*A)}const I=new Pe;I.setAttribute("position",new on(b,x)),I.setAttribute("uv",new on(S,m)),I.setAttribute("faceIndex",new on(y,f)),t.push(I),i>Ti&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function il(s,t,e){const n=new sn(s,t,e);return n.texture.mapping=uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Hs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Kf(s,t,e){const n=new Float32Array(Kn),i=new D(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:aa(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function sl(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:aa(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ol(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:aa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function aa(){return`

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
	`}function Zf(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===dr||l===ur,h=l===Di||l===Li;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new nl(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new nl(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",o),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Qf(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&rs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function tp(s,t,e,n){const i={},o=new WeakMap;function r(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}u.removeEventListener("dispose",r),delete i[u.id];const p=o.get(u);p&&(t.remove(p),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",r),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(d){const u=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let S=0,y=b.length;S<y;S+=3){const I=b[S+0],A=b[S+1],T=b[S+2];u.push(I,A,A,T,T,I)}}else if(g!==void 0){const b=g.array;x=g.version;for(let S=0,y=b.length/3-1;S<y;S+=3){const I=S+0,A=S+1,T=S+2;u.push(I,A,A,T,T,I)}}else return;const m=new(gc(u)?bc:wc)(u,1);m.version=x;const f=o.get(d);f&&t.remove(f),o.set(d,m)}function h(d){const u=o.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return o.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function ep(s,t,e){let n;function i(u){n=u}let o,r;function a(u){o=u.type,r=u.bytesPerElement}function l(u,p){s.drawElements(n,p,o,u*r),e.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,o,u*r,g),e.update(p,n,g))}function h(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function d(u,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/r,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,o,u,0,x,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*x[b];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function np(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case s.TRIANGLES:e.triangles+=a*(o/3);break;case s.LINES:e.lines+=a*(o/2);break;case s.LINE_STRIP:e.lines+=a*(o-1);break;case s.LINE_LOOP:e.lines+=a*o;break;case s.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function ip(s,t,e){const n=new WeakMap,i=new ne;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let _=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",_)};var p=_;u!==void 0&&u.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let I=a.attributes.position.count*y,A=1;I>t.maxTextureSize&&(A=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const T=new Float32Array(I*A*4*d),P=new _c(T,I,A,d);P.type=Mn,P.needsUpdate=!0;const M=y*4;for(let C=0;C<d;C++){const z=f[C],k=b[C],W=S[C],K=I*A*4*C;for(let q=0;q<z.count;q++){const et=q*M;g===!0&&(i.fromBufferAttribute(z,q),T[K+et+0]=i.x,T[K+et+1]=i.y,T[K+et+2]=i.z,T[K+et+3]=0),x===!0&&(i.fromBufferAttribute(k,q),T[K+et+4]=i.x,T[K+et+5]=i.y,T[K+et+6]=i.z,T[K+et+7]=0),m===!0&&(i.fromBufferAttribute(W,q),T[K+et+8]=i.x,T[K+et+9]=i.y,T[K+et+10]=i.z,T[K+et+11]=W.itemSize===4?i.w:1)}}u={count:d,texture:P,size:new It(I,A)},n.set(a,u),a.addEventListener("dispose",_)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:o}}function sp(s,t,e,n){let i=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:r}}class Cc extends Le{constructor(t,e,n,i,o,r,a,l,c,h=Ri){if(h!==Ri&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ri&&(n=si),n===void 0&&h===Fi&&(n=Bi),super(null,i,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Rc=new Le,rl=new Cc(1,1),Pc=new _c,Ic=new Wh,Dc=new Tc,al=[],ll=[],cl=new Float32Array(16),hl=new Float32Array(9),dl=new Float32Array(4);function Hi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=al[i];if(o===void 0&&(o=new Float32Array(i),al[i]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,s[r].toArray(o,a)}return o}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function mo(s,t){let e=ll[t];e===void 0&&(e=new Int32Array(t),ll[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function op(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function rp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function lp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function cp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;dl.set(n),s.uniformMatrix2fv(this.addr,!1,dl),ye(e,n)}}function hp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;hl.set(n),s.uniformMatrix3fv(this.addr,!1,hl),ye(e,n)}}function dp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;cl.set(n),s.uniformMatrix4fv(this.addr,!1,cl),ye(e,n)}}function up(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function fp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function pp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function gp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function xp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function _p(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function yp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(rl.compareFunction=mc,o=rl):o=Rc,e.setTexture2D(t||o,i)}function Mp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ic,i)}function wp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Dc,i)}function bp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Pc,i)}function Sp(s){switch(s){case 5126:return op;case 35664:return rp;case 35665:return ap;case 35666:return lp;case 35674:return cp;case 35675:return hp;case 35676:return dp;case 5124:case 35670:return up;case 35667:case 35671:return fp;case 35668:case 35672:return pp;case 35669:case 35673:return mp;case 5125:return gp;case 36294:return xp;case 36295:return _p;case 36296:return vp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Mp;case 35680:case 36300:case 36308:case 36293:return wp;case 36289:case 36303:case 36311:case 36292:return bp}}function Ep(s,t){s.uniform1fv(this.addr,t)}function Tp(s,t){const e=Hi(t,this.size,2);s.uniform2fv(this.addr,e)}function Ap(s,t){const e=Hi(t,this.size,3);s.uniform3fv(this.addr,e)}function Cp(s,t){const e=Hi(t,this.size,4);s.uniform4fv(this.addr,e)}function Rp(s,t){const e=Hi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Pp(s,t){const e=Hi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Ip(s,t){const e=Hi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Dp(s,t){s.uniform1iv(this.addr,t)}function Lp(s,t){s.uniform2iv(this.addr,t)}function Bp(s,t){s.uniform3iv(this.addr,t)}function Fp(s,t){s.uniform4iv(this.addr,t)}function Up(s,t){s.uniform1uiv(this.addr,t)}function Np(s,t){s.uniform2uiv(this.addr,t)}function Op(s,t){s.uniform3uiv(this.addr,t)}function kp(s,t){s.uniform4uiv(this.addr,t)}function zp(s,t,e){const n=this.cache,i=t.length,o=mo(e,i);ve(n,o)||(s.uniform1iv(this.addr,o),ye(n,o));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Rc,o[r])}function Gp(s,t,e){const n=this.cache,i=t.length,o=mo(e,i);ve(n,o)||(s.uniform1iv(this.addr,o),ye(n,o));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Ic,o[r])}function Hp(s,t,e){const n=this.cache,i=t.length,o=mo(e,i);ve(n,o)||(s.uniform1iv(this.addr,o),ye(n,o));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Dc,o[r])}function Vp(s,t,e){const n=this.cache,i=t.length,o=mo(e,i);ve(n,o)||(s.uniform1iv(this.addr,o),ye(n,o));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Pc,o[r])}function Wp(s){switch(s){case 5126:return Ep;case 35664:return Tp;case 35665:return Ap;case 35666:return Cp;case 35674:return Rp;case 35675:return Pp;case 35676:return Ip;case 5124:case 35670:return Dp;case 35667:case 35671:return Lp;case 35668:case 35672:return Bp;case 35669:case 35673:return Fp;case 5125:return Up;case 36294:return Np;case 36295:return Op;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Vp}}class Xp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Sp(e.type)}}class qp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wp(e.type)}}class Yp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(t,e[a.id],n)}}}const jo=/(\w+)(\])?(\[|\.)?/g;function ul(s,t){s.seq.push(t),s.map[t.id]=t}function jp(s,t,e){const n=s.name,i=n.length;for(jo.lastIndex=0;;){const o=jo.exec(n),r=jo.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){ul(e,c===void 0?new Xp(a,s,t):new qp(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Yp(a),ul(e,d)),e=d}}}class Qs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),r=t.getUniformLocation(e,o.name);jp(o,r,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,r=e.length;o!==r;++o){const a=e[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function fl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const $p=37297;let Jp=0;function Kp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const pl=new kt;function Zp(s){qt._getMatrix(pl,qt.workingColorSpace,s);const t=`mat3( ${pl.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(s)){case fo:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ml(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+Kp(s.getShaderSource(t),r)}else return i}function Qp(s,t){const e=Zp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function t0(s,t){let e;switch(t){case Zl:e="Linear";break;case Ql:e="Reinhard";break;case tc:e="Cineon";break;case Kr:e="ACESFilmic";break;case ec:e="AgX";break;case nc:e="Neutral";break;case vh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vs=new D;function e0(){qt.getLuminanceCoefficients(Vs);const s=Vs.x.toFixed(4),t=Vs.y.toFixed(4),e=Vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(as).join(`
`)}function i0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function s0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:s.getAttribLocation(t,r),locationSize:a}}return e}function as(s){return s!==""}function gl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const o0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vr(s){return s.replace(o0,a0)}const r0=new Map;function a0(s,t){let e=Gt[t];if(e===void 0){const n=r0.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Vr(e)}const l0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(s){return s.replace(l0,c0)}function c0(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function vl(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function h0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Jl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Kl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function d0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Di:case Li:t="ENVMAP_TYPE_CUBE";break;case uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function u0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function f0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Jr:t="ENVMAP_BLENDING_MULTIPLY";break;case xh:t="ENVMAP_BLENDING_MIX";break;case _h:t="ENVMAP_BLENDING_ADD";break}return t}function p0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function m0(s,t,e,n){const i=s.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const l=h0(e),c=d0(e),h=u0(e),d=f0(e),u=p0(e),p=n0(e),g=i0(o),x=i.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(as).join(`
`),f.length>0&&(f+=`
`)):(m=[vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(as).join(`
`),f=[vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Gt.tonemapping_pars_fragment:"",e.toneMapping!==On?t0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,Qp("linearToOutputTexel",e.outputColorSpace),e0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(as).join(`
`)),r=Vr(r),r=gl(r,e),r=xl(r,e),a=Vr(a),a=gl(a,e),a=xl(a,e),r=_l(r),a=_l(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Da?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Da?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=b+m+r,y=b+f+a,I=fl(i,i.VERTEX_SHADER,S),A=fl(i,i.FRAGMENT_SHADER,y);i.attachShader(x,I),i.attachShader(x,A),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(C){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(x).trim(),k=i.getShaderInfoLog(I).trim(),W=i.getShaderInfoLog(A).trim();let K=!0,q=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,I,A);else{const et=ml(i,I,"vertex"),V=ml(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+et+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||W==="")&&(q=!1);q&&(C.diagnostics={runnable:K,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:f}})}i.deleteShader(I),i.deleteShader(A),P=new Qs(i,x),M=s0(i,x)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(x,$p)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Jp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=A,this}let g0=0;class x0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _0(t),e.set(t,n)),n}}class _0{constructor(t){this.id=g0++,this.code=t,this.usedTimes=0}}function v0(s,t,e,n,i,o,r){const a=new yc,l=new x0,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,_,C,z,k){const W=z.fog,K=k.geometry,q=M.isMeshStandardMaterial?z.environment:null,et=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),V=et&&et.mapping===uo?et.image.height:null,J=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ot=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,mt=ot!==void 0?ot.length:0;let Dt=0;K.morphAttributes.position!==void 0&&(Dt=1),K.morphAttributes.normal!==void 0&&(Dt=2),K.morphAttributes.color!==void 0&&(Dt=3);let Yt,Y,it,xt;if(J){const Qt=ln[J];Yt=Qt.vertexShader,Y=Qt.fragmentShader}else Yt=M.vertexShader,Y=M.fragmentShader,l.update(M),it=l.getVertexShaderID(M),xt=l.getFragmentShaderID(M);const lt=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),Bt=k.isInstancedMesh===!0,Ht=k.isBatchedMesh===!0,re=!!M.map,Wt=!!M.matcap,he=!!et,N=!!M.aoMap,Se=!!M.lightMap,Et=!!M.bumpMap,dt=!!M.normalMap,St=!!M.displacementMap,$t=!!M.emissiveMap,Tt=!!M.metalnessMap,E=!!M.roughnessMap,v=M.anisotropy>0,O=M.clearcoat>0,Z=M.dispersion>0,nt=M.iridescence>0,$=M.sheen>0,At=M.transmission>0,ht=v&&!!M.anisotropyMap,gt=O&&!!M.clearcoatMap,jt=O&&!!M.clearcoatNormalMap,st=O&&!!M.clearcoatRoughnessMap,_t=nt&&!!M.iridescenceMap,Pt=nt&&!!M.iridescenceThicknessMap,Lt=$&&!!M.sheenColorMap,vt=$&&!!M.sheenRoughnessMap,Xt=!!M.specularMap,zt=!!M.specularColorMap,se=!!M.specularIntensityMap,B=At&&!!M.transmissionMap,ct=At&&!!M.thicknessMap,X=!!M.gradientMap,tt=!!M.alphaMap,pt=M.alphaTest>0,ut=!!M.alphaHash,Nt=!!M.extensions;let ue=On;M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ue=s.toneMapping);const Ee={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:Yt,fragmentShader:Y,defines:M.defines,customVertexShaderID:it,customFragmentShaderID:xt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ht,batchingColor:Ht&&k._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&k.instanceColor!==null,instancingMorph:Bt&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:ki,alphaToCoverage:!!M.alphaToCoverage,map:re,matcap:Wt,envMap:he,envMapMode:he&&et.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:Se,bumpMap:Et,normalMap:dt,displacementMap:u&&St,emissiveMap:$t,normalMapObjectSpace:dt&&M.normalMapType===Ah,normalMapTangentSpace:dt&&M.normalMapType===pc,metalnessMap:Tt,roughnessMap:E,anisotropy:v,anisotropyMap:ht,clearcoat:O,clearcoatMap:gt,clearcoatNormalMap:jt,clearcoatRoughnessMap:st,dispersion:Z,iridescence:nt,iridescenceMap:_t,iridescenceThicknessMap:Pt,sheen:$,sheenColorMap:Lt,sheenRoughnessMap:vt,specularMap:Xt,specularColorMap:zt,specularIntensityMap:se,transmission:At,transmissionMap:B,thicknessMap:ct,gradientMap:X,opaque:M.transparent===!1&&M.blending===Ci&&M.alphaToCoverage===!1,alphaMap:tt,alphaTest:pt,alphaHash:ut,combine:M.combine,mapUv:re&&x(M.map.channel),aoMapUv:N&&x(M.aoMap.channel),lightMapUv:Se&&x(M.lightMap.channel),bumpMapUv:Et&&x(M.bumpMap.channel),normalMapUv:dt&&x(M.normalMap.channel),displacementMapUv:St&&x(M.displacementMap.channel),emissiveMapUv:$t&&x(M.emissiveMap.channel),metalnessMapUv:Tt&&x(M.metalnessMap.channel),roughnessMapUv:E&&x(M.roughnessMap.channel),anisotropyMapUv:ht&&x(M.anisotropyMap.channel),clearcoatMapUv:gt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:jt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:vt&&x(M.sheenRoughnessMap.channel),specularMapUv:Xt&&x(M.specularMap.channel),specularColorMapUv:zt&&x(M.specularColorMap.channel),specularIntensityMapUv:se&&x(M.specularIntensityMap.channel),transmissionMapUv:B&&x(M.transmissionMap.channel),thicknessMapUv:ct&&x(M.thicknessMap.channel),alphaMapUv:tt&&x(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(dt||v),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!K.attributes.uv&&(re||tt),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Rt,skinning:k.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Dt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:ue,decodeVideoTexture:re&&M.map.isVideoTexture===!0&&qt.getTransfer(M.map.colorSpace)===te,decodeVideoTextureEmissive:$t&&M.emissiveMap.isVideoTexture===!0&&qt.getTransfer(M.emissiveMap.colorSpace)===te,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ze,flipSided:M.side===Re,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Nt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Nt&&M.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function f(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)_.push(C),_.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(b(_,M),S(_,M),_.push(s.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function b(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function S(M,_){a.disableAll(),_.supportsVertexTextures&&a.enable(0),_.instancing&&a.enable(1),_.instancingColor&&a.enable(2),_.instancingMorph&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),_.dispersion&&a.enable(20),_.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reverseDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),M.push(a.mask)}function y(M){const _=g[M.type];let C;if(_){const z=ln[_];C=fs.clone(z.uniforms)}else C=M.uniforms;return C}function I(M,_){let C;for(let z=0,k=h.length;z<k;z++){const W=h[z];if(W.cacheKey===_){C=W,++C.usedTimes;break}}return C===void 0&&(C=new m0(s,_,M,o),h.push(C)),C}function A(M){if(--M.usedTimes===0){const _=h.indexOf(M);h[_]=h[h.length-1],h.pop(),M.destroy()}}function T(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:I,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:P}}function y0(){let s=new WeakMap;function t(r){return s.has(r)}function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function M0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function yl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ml(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function r(d,u,p,g,x,m){let f=s[t];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},s[t]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=x,f.group=m),t++,f}function a(d,u,p,g,x,m){const f=r(d,u,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(d,u,p,g,x,m){const f=r(d,u,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(d,u){e.length>1&&e.sort(d||M0),n.length>1&&n.sort(u||yl),i.length>1&&i.sort(u||yl)}function h(){for(let d=t,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:a,unshift:l,finish:h,sort:c}}function w0(){let s=new WeakMap;function t(n,i){const o=s.get(n);let r;return o===void 0?(r=new Ml,s.set(n,[r])):i>=o.length?(r=new Ml,o.push(r)):r=o[i],r}function e(){s=new WeakMap}return{get:t,dispose:e}}function b0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new yt};break;case"SpotLight":e={position:new D,direction:new D,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function S0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let E0=0;function T0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function A0(s){const t=new b0,e=S0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,o=new ce,r=new ce;function a(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,b=0,S=0,y=0,I=0,A=0,T=0;c.sort(T0);for(let M=0,_=c.length;M<_;M++){const C=c[M],z=C.color,k=C.intensity,W=C.distance,K=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*k,d+=z.g*k,u+=z.b*k;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],k);T++}else if(C.isDirectionalLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const et=C.shadow,V=e.get(C);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=C.shadow.matrix,b++}n.directional[p]=q,p++}else if(C.isSpotLight){const q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(z).multiplyScalar(k),q.distance=W,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[x]=q;const et=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,et.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[x]=et.matrix,C.castShadow){const V=e.get(C);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=K,y++}x++}else if(C.isRectAreaLight){const q=t.get(C);q.color.copy(z).multiplyScalar(k),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=q,m++}else if(C.isPointLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const et=C.shadow,V=e.get(C);V.shadowIntensity=et.intensity,V.shadowBias=et.bias,V.shadowNormalBias=et.normalBias,V.shadowRadius=et.radius,V.shadowMapSize=et.mapSize,V.shadowCameraNear=et.camera.near,V.shadowCameraFar=et.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=q,g++}else if(C.isHemisphereLight){const q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(k),q.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[f]=q,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==b||P.numPointShadows!==S||P.numSpotShadows!==y||P.numSpotMaps!==I||P.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=y+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=p,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=b,P.numPointShadows=S,P.numSpotShadows=y,P.numSpotMaps=I,P.numLightProbes=T,n.version=E0++)}function l(c,h){let d=0,u=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const S=c[f];if(S.isDirectionalLight){const y=n.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),d++}else if(S.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),r.identity(),o.copy(S.matrixWorld),o.premultiply(m),r.extractRotation(o),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(S.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function wl(s){const t=new A0(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function C0(s){let t=new WeakMap;function e(i,o=0){const r=t.get(i);let a;return r===void 0?(a=new wl(s),t.set(i,[a])):o>=r.length?(a=new wl(s),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class R0 extends Gi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class P0 extends Gi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const I0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D0=`uniform sampler2D shadow_pass;
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
}`;function L0(s,t,e){let n=new oa;const i=new It,o=new It,r=new ne,a=new R0({depthPacking:Th}),l=new P0,c={},h=e.maxTextureSize,d={[zn]:Re,[Re]:zn,[ze]:ze},u=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:I0,fragmentShader:D0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new L(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jl;let f=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const M=s.getRenderTarget(),_=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),z=s.state;z.setBlending(bn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=f!==vn&&this.type===vn,W=f===vn&&this.type!==vn;for(let K=0,q=A.length;K<q;K++){const et=A[K],V=et.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const J=V.getFrameExtents();if(i.multiply(J),o.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/J.x),i.x=o.x*J.x,V.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/J.y),i.y=o.y*J.y,V.mapSize.y=o.y)),V.map===null||k===!0||W===!0){const mt=this.type!==vn?{minFilter:nn,magFilter:nn}:{};V.map!==null&&V.map.dispose(),V.map=new sn(i.x,i.y,mt),V.map.texture.name=et.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ot=V.getViewportCount();for(let mt=0;mt<ot;mt++){const Dt=V.getViewport(mt);r.set(o.x*Dt.x,o.y*Dt.y,o.x*Dt.z,o.y*Dt.w),z.viewport(r),V.updateMatrices(et,mt),n=V.getFrustum(),y(T,P,V.camera,et,this.type)}V.isPointLightShadow!==!0&&this.type===vn&&b(V,P),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,_,C)};function b(A,T){const P=t.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new sn(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,P,u,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,P,p,x,null)}function S(A,T,P,M){let _=null;const C=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)_=C;else if(_=P.isPointLight===!0?l:a,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const z=_.uuid,k=T.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let K=W[k];K===void 0&&(K=_.clone(),W[k]=K,T.addEventListener("dispose",I)),_=K}if(_.visible=T.visible,_.wireframe=T.wireframe,M===vn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:d[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,P.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const z=s.properties.get(_);z.light=P}return _}function y(A,T,P,M,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===vn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const k=t.update(A),W=A.material;if(Array.isArray(W)){const K=k.groups;for(let q=0,et=K.length;q<et;q++){const V=K[q],J=W[V.materialIndex];if(J&&J.visible){const ot=S(A,J,M,_);A.onBeforeShadow(s,A,T,P,k,ot,V),s.renderBufferDirect(P,null,k,ot,A,V),A.onAfterShadow(s,A,T,P,k,ot,V)}}}else if(W.visible){const K=S(A,W,M,_);A.onBeforeShadow(s,A,T,P,k,K,null),s.renderBufferDirect(P,null,k,K,A,null),A.onAfterShadow(s,A,T,P,k,K,null)}}const z=A.children;for(let k=0,W=z.length;k<W;k++)y(z[k],T,P,M,_)}function I(A){A.target.removeEventListener("dispose",I);for(const P in c){const M=c[P],_=A.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const B0={[sr]:or,[rr]:cr,[ar]:hr,[Ii]:lr,[or]:sr,[cr]:rr,[hr]:ar,[lr]:Ii};function F0(s,t){function e(){let B=!1;const ct=new ne;let X=null;const tt=new ne(0,0,0,0);return{setMask:function(pt){X!==pt&&!B&&(s.colorMask(pt,pt,pt,pt),X=pt)},setLocked:function(pt){B=pt},setClear:function(pt,ut,Nt,ue,Ee){Ee===!0&&(pt*=ue,ut*=ue,Nt*=ue),ct.set(pt,ut,Nt,ue),tt.equals(ct)===!1&&(s.clearColor(pt,ut,Nt,ue),tt.copy(ct))},reset:function(){B=!1,X=null,tt.set(-1,0,0,0)}}}function n(){let B=!1,ct=!1,X=null,tt=null,pt=null;return{setReversed:function(ut){if(ct!==ut){const Nt=t.get("EXT_clip_control");ct?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT);const ue=pt;pt=null,this.setClear(ue)}ct=ut},getReversed:function(){return ct},setTest:function(ut){ut?lt(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(ut){X!==ut&&!B&&(s.depthMask(ut),X=ut)},setFunc:function(ut){if(ct&&(ut=B0[ut]),tt!==ut){switch(ut){case sr:s.depthFunc(s.NEVER);break;case or:s.depthFunc(s.ALWAYS);break;case rr:s.depthFunc(s.LESS);break;case Ii:s.depthFunc(s.LEQUAL);break;case ar:s.depthFunc(s.EQUAL);break;case lr:s.depthFunc(s.GEQUAL);break;case cr:s.depthFunc(s.GREATER);break;case hr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}tt=ut}},setLocked:function(ut){B=ut},setClear:function(ut){pt!==ut&&(ct&&(ut=1-ut),s.clearDepth(ut),pt=ut)},reset:function(){B=!1,X=null,tt=null,pt=null,ct=!1}}}function i(){let B=!1,ct=null,X=null,tt=null,pt=null,ut=null,Nt=null,ue=null,Ee=null;return{setTest:function(Qt){B||(Qt?lt(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(Qt){ct!==Qt&&!B&&(s.stencilMask(Qt),ct=Qt)},setFunc:function(Qt,Ye,dn){(X!==Qt||tt!==Ye||pt!==dn)&&(s.stencilFunc(Qt,Ye,dn),X=Qt,tt=Ye,pt=dn)},setOp:function(Qt,Ye,dn){(ut!==Qt||Nt!==Ye||ue!==dn)&&(s.stencilOp(Qt,Ye,dn),ut=Qt,Nt=Ye,ue=dn)},setLocked:function(Qt){B=Qt},setClear:function(Qt){Ee!==Qt&&(s.clearStencil(Qt),Ee=Qt)},reset:function(){B=!1,ct=null,X=null,tt=null,pt=null,ut=null,Nt=null,ue=null,Ee=null}}}const o=new e,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,b=null,S=null,y=null,I=null,A=null,T=new yt(0,0,0),P=0,M=!1,_=null,C=null,z=null,k=null,W=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,et=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=et>=1):V.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=et>=2);let J=null,ot={};const mt=s.getParameter(s.SCISSOR_BOX),Dt=s.getParameter(s.VIEWPORT),Yt=new ne().fromArray(mt),Y=new ne().fromArray(Dt);function it(B,ct,X,tt){const pt=new Uint8Array(4),ut=s.createTexture();s.bindTexture(B,ut),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Nt=0;Nt<X;Nt++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(ct,0,s.RGBA,1,1,tt,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(ct+Nt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return ut}const xt={};xt[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),lt(s.DEPTH_TEST),r.setFunc(Ii),Et(!1),dt(Aa),lt(s.CULL_FACE),N(bn);function lt(B){h[B]!==!0&&(s.enable(B),h[B]=!0)}function Rt(B){h[B]!==!1&&(s.disable(B),h[B]=!1)}function Bt(B,ct){return d[B]!==ct?(s.bindFramebuffer(B,ct),d[B]=ct,B===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ct),B===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ct),!0):!1}function Ht(B,ct){let X=p,tt=!1;if(B){X=u.get(ct),X===void 0&&(X=[],u.set(ct,X));const pt=B.textures;if(X.length!==pt.length||X[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Nt=pt.length;ut<Nt;ut++)X[ut]=s.COLOR_ATTACHMENT0+ut;X.length=pt.length,tt=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,tt=!0);tt&&s.drawBuffers(X)}function re(B){return g!==B?(s.useProgram(B),g=B,!0):!1}const Wt={[Jn]:s.FUNC_ADD,[th]:s.FUNC_SUBTRACT,[eh]:s.FUNC_REVERSE_SUBTRACT};Wt[nh]=s.MIN,Wt[ih]=s.MAX;const he={[sh]:s.ZERO,[oh]:s.ONE,[rh]:s.SRC_COLOR,[nr]:s.SRC_ALPHA,[uh]:s.SRC_ALPHA_SATURATE,[hh]:s.DST_COLOR,[lh]:s.DST_ALPHA,[ah]:s.ONE_MINUS_SRC_COLOR,[ir]:s.ONE_MINUS_SRC_ALPHA,[dh]:s.ONE_MINUS_DST_COLOR,[ch]:s.ONE_MINUS_DST_ALPHA,[fh]:s.CONSTANT_COLOR,[ph]:s.ONE_MINUS_CONSTANT_COLOR,[mh]:s.CONSTANT_ALPHA,[gh]:s.ONE_MINUS_CONSTANT_ALPHA};function N(B,ct,X,tt,pt,ut,Nt,ue,Ee,Qt){if(B===bn){x===!0&&(Rt(s.BLEND),x=!1);return}if(x===!1&&(lt(s.BLEND),x=!0),B!==Qc){if(B!==m||Qt!==M){if((f!==Jn||y!==Jn)&&(s.blendEquation(s.FUNC_ADD),f=Jn,y=Jn),Qt)switch(B){case Ci:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case er:s.blendFunc(s.ONE,s.ONE);break;case Ca:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ra:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case er:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ca:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ra:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}b=null,S=null,I=null,A=null,T.set(0,0,0),P=0,m=B,M=Qt}return}pt=pt||ct,ut=ut||X,Nt=Nt||tt,(ct!==f||pt!==y)&&(s.blendEquationSeparate(Wt[ct],Wt[pt]),f=ct,y=pt),(X!==b||tt!==S||ut!==I||Nt!==A)&&(s.blendFuncSeparate(he[X],he[tt],he[ut],he[Nt]),b=X,S=tt,I=ut,A=Nt),(ue.equals(T)===!1||Ee!==P)&&(s.blendColor(ue.r,ue.g,ue.b,Ee),T.copy(ue),P=Ee),m=B,M=!1}function Se(B,ct){B.side===ze?Rt(s.CULL_FACE):lt(s.CULL_FACE);let X=B.side===Re;ct&&(X=!X),Et(X),B.blending===Ci&&B.transparent===!1?N(bn):N(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),o.setMask(B.colorWrite);const tt=B.stencilWrite;a.setTest(tt),tt&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),$t(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Et(B){_!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),_=B)}function dt(B){B!==Kc?(lt(s.CULL_FACE),B!==C&&(B===Aa?s.cullFace(s.BACK):B===Zc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),C=B}function St(B){B!==z&&(q&&s.lineWidth(B),z=B)}function $t(B,ct,X){B?(lt(s.POLYGON_OFFSET_FILL),(k!==ct||W!==X)&&(s.polygonOffset(ct,X),k=ct,W=X)):Rt(s.POLYGON_OFFSET_FILL)}function Tt(B){B?lt(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function E(B){B===void 0&&(B=s.TEXTURE0+K-1),J!==B&&(s.activeTexture(B),J=B)}function v(B,ct,X){X===void 0&&(J===null?X=s.TEXTURE0+K-1:X=J);let tt=ot[X];tt===void 0&&(tt={type:void 0,texture:void 0},ot[X]=tt),(tt.type!==B||tt.texture!==ct)&&(J!==X&&(s.activeTexture(X),J=X),s.bindTexture(B,ct||xt[B]),tt.type=B,tt.texture=ct)}function O(){const B=ot[J];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function nt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function At(){try{s.texSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function jt(){try{s.texStorage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function st(){try{s.texStorage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{s.texImage3D.apply(s,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Lt(B){Yt.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),Yt.copy(B))}function vt(B){Y.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),Y.copy(B))}function Xt(B,ct){let X=c.get(ct);X===void 0&&(X=new WeakMap,c.set(ct,X));let tt=X.get(B);tt===void 0&&(tt=s.getUniformBlockIndex(ct,B.name),X.set(B,tt))}function zt(B,ct){const tt=c.get(ct).get(B);l.get(ct)!==tt&&(s.uniformBlockBinding(ct,tt,B.__bindingPointIndex),l.set(ct,tt))}function se(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},J=null,ot={},d={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,b=null,S=null,y=null,I=null,A=null,T=new yt(0,0,0),P=0,M=!1,_=null,C=null,z=null,k=null,W=null,Yt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:lt,disable:Rt,bindFramebuffer:Bt,drawBuffers:Ht,useProgram:re,setBlending:N,setMaterial:Se,setFlipSided:Et,setCullFace:dt,setLineWidth:St,setPolygonOffset:$t,setScissorTest:Tt,activeTexture:E,bindTexture:v,unbindTexture:O,compressedTexImage2D:Z,compressedTexImage3D:nt,texImage2D:_t,texImage3D:Pt,updateUBOMapping:Xt,uniformBlockBinding:zt,texStorage2D:jt,texStorage3D:st,texSubImage2D:$,texSubImage3D:At,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:Lt,viewport:vt,reset:se}}function bl(s,t,e,n){const i=U0(n);switch(e){case ac:return s*t;case cc:return s*t;case hc:return s*t*2;case dc:return s*t/i.components*i.byteLength;case ea:return s*t/i.components*i.byteLength;case uc:return s*t*2/i.components*i.byteLength;case na:return s*t*2/i.components*i.byteLength;case lc:return s*t*3/i.components*i.byteLength;case en:return s*t*4/i.components*i.byteLength;case ia:return s*t*4/i.components*i.byteLength;case js:case $s:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Js:case Ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case gr:case _r:return Math.max(s,16)*Math.max(t,8)/4;case mr:case xr:return Math.max(s,8)*Math.max(t,8)/2;case vr:case yr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Mr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case br:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Sr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Er:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Tr:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ar:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Cr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Rr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Pr:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ir:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Dr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Lr:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Br:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Fr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Zs:case Ur:case Nr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case fc:case Or:return Math.ceil(s/4)*Math.ceil(t/4)*8;case kr:case zr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function U0(s){switch(s){case Tn:case sc:return{byteLength:1,components:1};case us:case oc:case Sn:return{byteLength:2,components:1};case Qr:case ta:return{byteLength:2,components:4};case si:case Zr:case Mn:return{byteLength:4,components:1};case rc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function N0(s,t,e,n,i,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new It,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return p?new OffscreenCanvas(E,v):oo("canvas")}function x(E,v,O){let Z=1;const nt=Tt(E);if((nt.width>O||nt.height>O)&&(Z=O/Math.max(nt.width,nt.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(Z*nt.width),At=Math.floor(Z*nt.height);d===void 0&&(d=g($,At));const ht=v?g($,At):d;return ht.width=$,ht.height=At,ht.getContext("2d").drawImage(E,0,0,$,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+$+"x"+At+")."),ht}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){s.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(E,v,O,Z,nt=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=v;if(v===s.RED&&(O===s.FLOAT&&($=s.R32F),O===s.HALF_FLOAT&&($=s.R16F),O===s.UNSIGNED_BYTE&&($=s.R8)),v===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.R8UI),O===s.UNSIGNED_SHORT&&($=s.R16UI),O===s.UNSIGNED_INT&&($=s.R32UI),O===s.BYTE&&($=s.R8I),O===s.SHORT&&($=s.R16I),O===s.INT&&($=s.R32I)),v===s.RG&&(O===s.FLOAT&&($=s.RG32F),O===s.HALF_FLOAT&&($=s.RG16F),O===s.UNSIGNED_BYTE&&($=s.RG8)),v===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RG8UI),O===s.UNSIGNED_SHORT&&($=s.RG16UI),O===s.UNSIGNED_INT&&($=s.RG32UI),O===s.BYTE&&($=s.RG8I),O===s.SHORT&&($=s.RG16I),O===s.INT&&($=s.RG32I)),v===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGB8UI),O===s.UNSIGNED_SHORT&&($=s.RGB16UI),O===s.UNSIGNED_INT&&($=s.RGB32UI),O===s.BYTE&&($=s.RGB8I),O===s.SHORT&&($=s.RGB16I),O===s.INT&&($=s.RGB32I)),v===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&($=s.RGBA8UI),O===s.UNSIGNED_SHORT&&($=s.RGBA16UI),O===s.UNSIGNED_INT&&($=s.RGBA32UI),O===s.BYTE&&($=s.RGBA8I),O===s.SHORT&&($=s.RGBA16I),O===s.INT&&($=s.RGBA32I)),v===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),v===s.RGBA){const At=nt?fo:qt.getTransfer(Z);O===s.FLOAT&&($=s.RGBA32F),O===s.HALF_FLOAT&&($=s.RGBA16F),O===s.UNSIGNED_BYTE&&($=At===te?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(E,v){let O;return E?v===null||v===si||v===Bi?O=s.DEPTH24_STENCIL8:v===Mn?O=s.DEPTH32F_STENCIL8:v===us&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===si||v===Bi?O=s.DEPTH_COMPONENT24:v===Mn?O=s.DEPTH_COMPONENT32F:v===us&&(O=s.DEPTH_COMPONENT16),O}function I(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==nn&&E.minFilter!==cn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){const v=E.target;v.removeEventListener("dispose",A),P(v),v.isVideoTexture&&h.delete(v)}function T(E){const v=E.target;v.removeEventListener("dispose",T),_(v)}function P(E){const v=n.get(E);if(v.__webglInit===void 0)return;const O=E.source,Z=u.get(O);if(Z){const nt=Z[v.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&M(E),Object.keys(Z).length===0&&u.delete(O)}n.remove(E)}function M(E){const v=n.get(E);s.deleteTexture(v.__webglTexture);const O=E.source,Z=u.get(O);delete Z[v.__cacheKey],r.memory.textures--}function _(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let nt=0;nt<v.__webglFramebuffer[Z].length;nt++)s.deleteFramebuffer(v.__webglFramebuffer[Z][nt]);else s.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)s.deleteFramebuffer(v.__webglFramebuffer[Z]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=E.textures;for(let Z=0,nt=O.length;Z<nt;Z++){const $=n.get(O[Z]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),r.memory.textures--),n.remove(O[Z])}n.remove(E)}let C=0;function z(){C=0}function k(){const E=C;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),C+=1,E}function W(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function K(E,v){const O=n.get(E);if(E.isVideoTexture&&St(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,E,v);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+v)}function q(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+v)}function et(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){Y(O,E,v);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+v)}function V(E,v){const O=n.get(E);if(E.version>0&&O.__version!==E.version){it(O,E,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+v)}const J={[fr]:s.REPEAT,[ti]:s.CLAMP_TO_EDGE,[pr]:s.MIRRORED_REPEAT},ot={[nn]:s.NEAREST,[yh]:s.NEAREST_MIPMAP_NEAREST,[bs]:s.NEAREST_MIPMAP_LINEAR,[cn]:s.LINEAR,[vo]:s.LINEAR_MIPMAP_NEAREST,[ei]:s.LINEAR_MIPMAP_LINEAR},mt={[Ch]:s.NEVER,[Bh]:s.ALWAYS,[Rh]:s.LESS,[mc]:s.LEQUAL,[Ph]:s.EQUAL,[Lh]:s.GEQUAL,[Ih]:s.GREATER,[Dh]:s.NOTEQUAL};function Dt(E,v){if(v.type===Mn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===cn||v.magFilter===vo||v.magFilter===bs||v.magFilter===ei||v.minFilter===cn||v.minFilter===vo||v.minFilter===bs||v.minFilter===ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,J[v.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,J[v.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,J[v.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ot[v.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ot[v.minFilter]),v.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,mt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===nn||v.minFilter!==bs&&v.minFilter!==ei||v.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Yt(E,v){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));const Z=v.source;let nt=u.get(Z);nt===void 0&&(nt={},u.set(Z,nt));const $=W(v);if($!==E.__cacheKey){nt[$]===void 0&&(nt[$]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,O=!0),nt[$].usedTimes++;const At=nt[E.__cacheKey];At!==void 0&&(nt[E.__cacheKey].usedTimes--,At.usedTimes===0&&M(v)),E.__cacheKey=$,E.__webglTexture=nt[$].texture}return O}function Y(E,v,O){let Z=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=s.TEXTURE_3D);const nt=Yt(E,v),$=v.source;e.bindTexture(Z,E.__webglTexture,s.TEXTURE0+O);const At=n.get($);if($.version!==At.__version||nt===!0){e.activeTexture(s.TEXTURE0+O);const ht=qt.getPrimaries(qt.workingColorSpace),gt=v.colorSpace===Un?null:qt.getPrimaries(v.colorSpace),jt=v.colorSpace===Un||ht===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let st=x(v.image,!1,i.maxTextureSize);st=$t(v,st);const _t=o.convert(v.format,v.colorSpace),Pt=o.convert(v.type);let Lt=S(v.internalFormat,_t,Pt,v.colorSpace,v.isVideoTexture);Dt(Z,v);let vt;const Xt=v.mipmaps,zt=v.isVideoTexture!==!0,se=At.__version===void 0||nt===!0,B=$.dataReady,ct=I(v,st);if(v.isDepthTexture)Lt=y(v.format===Fi,v.type),se&&(zt?e.texStorage2D(s.TEXTURE_2D,1,Lt,st.width,st.height):e.texImage2D(s.TEXTURE_2D,0,Lt,st.width,st.height,0,_t,Pt,null));else if(v.isDataTexture)if(Xt.length>0){zt&&se&&e.texStorage2D(s.TEXTURE_2D,ct,Lt,Xt[0].width,Xt[0].height);for(let X=0,tt=Xt.length;X<tt;X++)vt=Xt[X],zt?B&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,vt.width,vt.height,_t,Pt,vt.data):e.texImage2D(s.TEXTURE_2D,X,Lt,vt.width,vt.height,0,_t,Pt,vt.data);v.generateMipmaps=!1}else zt?(se&&e.texStorage2D(s.TEXTURE_2D,ct,Lt,st.width,st.height),B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,st.width,st.height,_t,Pt,st.data)):e.texImage2D(s.TEXTURE_2D,0,Lt,st.width,st.height,0,_t,Pt,st.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){zt&&se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Lt,Xt[0].width,Xt[0].height,st.depth);for(let X=0,tt=Xt.length;X<tt;X++)if(vt=Xt[X],v.format!==en)if(_t!==null)if(zt){if(B)if(v.layerUpdates.size>0){const pt=bl(vt.width,vt.height,v.format,v.type);for(const ut of v.layerUpdates){const Nt=vt.data.subarray(ut*pt/vt.data.BYTES_PER_ELEMENT,(ut+1)*pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,ut,vt.width,vt.height,1,_t,Nt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,st.depth,_t,vt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Lt,vt.width,vt.height,st.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?B&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,st.depth,_t,Pt,vt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,Lt,vt.width,vt.height,st.depth,0,_t,Pt,vt.data)}else{zt&&se&&e.texStorage2D(s.TEXTURE_2D,ct,Lt,Xt[0].width,Xt[0].height);for(let X=0,tt=Xt.length;X<tt;X++)vt=Xt[X],v.format!==en?_t!==null?zt?B&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(s.TEXTURE_2D,X,Lt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?B&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,vt.width,vt.height,_t,Pt,vt.data):e.texImage2D(s.TEXTURE_2D,X,Lt,vt.width,vt.height,0,_t,Pt,vt.data)}else if(v.isDataArrayTexture)if(zt){if(se&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ct,Lt,st.width,st.height,st.depth),B)if(v.layerUpdates.size>0){const X=bl(st.width,st.height,v.format,v.type);for(const tt of v.layerUpdates){const pt=st.data.subarray(tt*X/st.data.BYTES_PER_ELEMENT,(tt+1)*X/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,tt,st.width,st.height,1,_t,Pt,pt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,Pt,st.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Lt,st.width,st.height,st.depth,0,_t,Pt,st.data);else if(v.isData3DTexture)zt?(se&&e.texStorage3D(s.TEXTURE_3D,ct,Lt,st.width,st.height,st.depth),B&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,Pt,st.data)):e.texImage3D(s.TEXTURE_3D,0,Lt,st.width,st.height,st.depth,0,_t,Pt,st.data);else if(v.isFramebufferTexture){if(se)if(zt)e.texStorage2D(s.TEXTURE_2D,ct,Lt,st.width,st.height);else{let X=st.width,tt=st.height;for(let pt=0;pt<ct;pt++)e.texImage2D(s.TEXTURE_2D,pt,Lt,X,tt,0,_t,Pt,null),X>>=1,tt>>=1}}else if(Xt.length>0){if(zt&&se){const X=Tt(Xt[0]);e.texStorage2D(s.TEXTURE_2D,ct,Lt,X.width,X.height)}for(let X=0,tt=Xt.length;X<tt;X++)vt=Xt[X],zt?B&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,_t,Pt,vt):e.texImage2D(s.TEXTURE_2D,X,Lt,_t,Pt,vt);v.generateMipmaps=!1}else if(zt){if(se){const X=Tt(st);e.texStorage2D(s.TEXTURE_2D,ct,Lt,X.width,X.height)}B&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,_t,Pt,st)}else e.texImage2D(s.TEXTURE_2D,0,Lt,_t,Pt,st);m(v)&&f(Z),At.__version=$.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function it(E,v,O){if(v.image.length!==6)return;const Z=Yt(E,v),nt=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+O);const $=n.get(nt);if(nt.version!==$.__version||Z===!0){e.activeTexture(s.TEXTURE0+O);const At=qt.getPrimaries(qt.workingColorSpace),ht=v.colorSpace===Un?null:qt.getPrimaries(v.colorSpace),gt=v.colorSpace===Un||At===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const jt=v.isCompressedTexture||v.image[0].isCompressedTexture,st=v.image[0]&&v.image[0].isDataTexture,_t=[];for(let tt=0;tt<6;tt++)!jt&&!st?_t[tt]=x(v.image[tt],!0,i.maxCubemapSize):_t[tt]=st?v.image[tt].image:v.image[tt],_t[tt]=$t(v,_t[tt]);const Pt=_t[0],Lt=o.convert(v.format,v.colorSpace),vt=o.convert(v.type),Xt=S(v.internalFormat,Lt,vt,v.colorSpace),zt=v.isVideoTexture!==!0,se=$.__version===void 0||Z===!0,B=nt.dataReady;let ct=I(v,Pt);Dt(s.TEXTURE_CUBE_MAP,v);let X;if(jt){zt&&se&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Xt,Pt.width,Pt.height);for(let tt=0;tt<6;tt++){X=_t[tt].mipmaps;for(let pt=0;pt<X.length;pt++){const ut=X[pt];v.format!==en?Lt!==null?zt?B&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,ut.width,ut.height,Lt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,Xt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,0,0,ut.width,ut.height,Lt,vt,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt,Xt,ut.width,ut.height,0,Lt,vt,ut.data)}}}else{if(X=v.mipmaps,zt&&se){X.length>0&&ct++;const tt=Tt(_t[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ct,Xt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(st){zt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,_t[tt].width,_t[tt].height,Lt,vt,_t[tt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Xt,_t[tt].width,_t[tt].height,0,Lt,vt,_t[tt].data);for(let pt=0;pt<X.length;pt++){const Nt=X[pt].image[tt].image;zt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,Nt.width,Nt.height,Lt,vt,Nt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,Xt,Nt.width,Nt.height,0,Lt,vt,Nt.data)}}else{zt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,vt,_t[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Xt,Lt,vt,_t[tt]);for(let pt=0;pt<X.length;pt++){const ut=X[pt];zt?B&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,0,0,Lt,vt,ut.image[tt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,pt+1,Xt,Lt,vt,ut.image[tt])}}}m(v)&&f(s.TEXTURE_CUBE_MAP),$.__version=nt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function xt(E,v,O,Z,nt,$){const At=o.convert(O.format,O.colorSpace),ht=o.convert(O.type),gt=S(O.internalFormat,At,ht,O.colorSpace),jt=n.get(v),st=n.get(O);if(st.__renderTarget=v,!jt.__hasExternalTextures){const _t=Math.max(1,v.width>>$),Pt=Math.max(1,v.height>>$);nt===s.TEXTURE_3D||nt===s.TEXTURE_2D_ARRAY?e.texImage3D(nt,$,gt,_t,Pt,v.depth,0,At,ht,null):e.texImage2D(nt,$,gt,_t,Pt,0,At,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),dt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,nt,st.__webglTexture,0,Et(v)):(nt===s.TEXTURE_2D||nt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,nt,st.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(E,v,O){if(s.bindRenderbuffer(s.RENDERBUFFER,E),v.depthBuffer){const Z=v.depthTexture,nt=Z&&Z.isDepthTexture?Z.type:null,$=y(v.stencilBuffer,nt),At=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=Et(v);dt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,$,v.width,v.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,$,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,$,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,At,s.RENDERBUFFER,E)}else{const Z=v.textures;for(let nt=0;nt<Z.length;nt++){const $=Z[nt],At=o.convert($.format,$.colorSpace),ht=o.convert($.type),gt=S($.internalFormat,At,ht,$.colorSpace),jt=Et(v);O&&dt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,gt,v.width,v.height):dt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,gt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,gt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const nt=Z.__webglTexture,$=Et(v);if(v.depthTexture.format===Ri)dt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,nt,0);else if(v.depthTexture.format===Fi)dt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Bt(E){const v=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const Z=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const nt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",nt)};Z.addEventListener("dispose",nt),v.__depthDisposeCallback=nt}v.__boundDepthTexture=Z}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Rt(v.__webglFramebuffer,E)}else if(O){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=s.createRenderbuffer(),lt(v.__webglDepthbuffer[Z],E,!1);else{const nt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),lt(v.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,nt=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,nt),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,nt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ht(E,v,O){const Z=n.get(E);v!==void 0&&xt(Z.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Bt(E)}function re(E){const v=E.texture,O=n.get(E),Z=n.get(v);E.addEventListener("dispose",T);const nt=E.textures,$=E.isWebGLCubeRenderTarget===!0,At=nt.length>1;if(At||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=v.version,r.memory.textures++),$){O.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ht]=[];for(let gt=0;gt<v.mipmaps.length;gt++)O.__webglFramebuffer[ht][gt]=s.createFramebuffer()}else O.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ht=0;ht<v.mipmaps.length;ht++)O.__webglFramebuffer[ht]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(At)for(let ht=0,gt=nt.length;ht<gt;ht++){const jt=n.get(nt[ht]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),r.memory.textures++)}if(E.samples>0&&dt(E)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ht=0;ht<nt.length;ht++){const gt=nt[ht];O.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ht]);const jt=o.convert(gt.format,gt.colorSpace),st=o.convert(gt.type),_t=S(gt.internalFormat,jt,st,gt.colorSpace,E.isXRRenderTarget===!0),Pt=Et(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,_t,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,O.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Dt(s.TEXTURE_CUBE_MAP,v);for(let ht=0;ht<6;ht++)if(v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)xt(O.__webglFramebuffer[ht][gt],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else xt(O.__webglFramebuffer[ht],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(v)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ht=0,gt=nt.length;ht<gt;ht++){const jt=nt[ht],st=n.get(jt);e.bindTexture(s.TEXTURE_2D,st.__webglTexture),Dt(s.TEXTURE_2D,jt),xt(O.__webglFramebuffer,E,jt,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),m(jt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ht=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,Z.__webglTexture),Dt(ht,v),v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)xt(O.__webglFramebuffer[gt],E,v,s.COLOR_ATTACHMENT0,ht,gt);else xt(O.__webglFramebuffer,E,v,s.COLOR_ATTACHMENT0,ht,0);m(v)&&f(ht),e.unbindTexture()}E.depthBuffer&&Bt(E)}function Wt(E){const v=E.textures;for(let O=0,Z=v.length;O<Z;O++){const nt=v[O];if(m(nt)){const $=b(E),At=n.get(nt).__webglTexture;e.bindTexture($,At),f($),e.unbindTexture()}}}const he=[],N=[];function Se(E){if(E.samples>0){if(dt(E)===!1){const v=E.textures,O=E.width,Z=E.height;let nt=s.COLOR_BUFFER_BIT;const $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(E),ht=v.length>1;if(ht)for(let gt=0;gt<v.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let gt=0;gt<v.length;gt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(nt|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(nt|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[gt]);const jt=n.get(v[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,jt,0)}s.blitFramebuffer(0,0,O,Z,0,0,O,Z,nt,s.NEAREST),l===!0&&(he.length=0,N.length=0,he.push(s.COLOR_ATTACHMENT0+gt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(he.push($),N.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let gt=0;gt<v.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,At.__webglColorRenderbuffer[gt]);const jt=n.get(v[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Et(E){return Math.min(i.maxSamples,E.samples)}function dt(E){const v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function St(E){const v=r.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function $t(E,v){const O=E.colorSpace,Z=E.format,nt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==ki&&O!==Un&&(qt.getTransfer(O)===te?(Z!==en||nt!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Tt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=et,this.setTextureCube=V,this.rebindTextures=Ht,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Wt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=dt}function O0(s,t){function e(n,i=Un){let o;const r=qt.getTransfer(i);if(n===Tn)return s.UNSIGNED_BYTE;if(n===Qr)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ta)return s.UNSIGNED_SHORT_5_5_5_1;if(n===rc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===sc)return s.BYTE;if(n===oc)return s.SHORT;if(n===us)return s.UNSIGNED_SHORT;if(n===Zr)return s.INT;if(n===si)return s.UNSIGNED_INT;if(n===Mn)return s.FLOAT;if(n===Sn)return s.HALF_FLOAT;if(n===ac)return s.ALPHA;if(n===lc)return s.RGB;if(n===en)return s.RGBA;if(n===cc)return s.LUMINANCE;if(n===hc)return s.LUMINANCE_ALPHA;if(n===Ri)return s.DEPTH_COMPONENT;if(n===Fi)return s.DEPTH_STENCIL;if(n===dc)return s.RED;if(n===ea)return s.RED_INTEGER;if(n===uc)return s.RG;if(n===na)return s.RG_INTEGER;if(n===ia)return s.RGBA_INTEGER;if(n===js||n===$s||n===Js||n===Ks)if(r===te)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===js)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===js)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$s)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Js)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ks)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===mr||n===gr||n===xr||n===_r)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===mr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_r)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vr||n===yr||n===Mr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===vr||n===yr)return r===te?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Mr)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wr||n===br||n===Sr||n===Er||n===Tr||n===Ar||n===Cr||n===Rr||n===Pr||n===Ir||n===Dr||n===Lr||n===Br||n===Fr)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===wr)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===br)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sr)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Er)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tr)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ar)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cr)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Rr)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pr)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ir)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Dr)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lr)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Br)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fr)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Zs||n===Ur||n===Nr)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Zs)return r===te?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ur)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fc||n===Or||n===kr||n===zr)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Zs)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Or)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class k0 extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ut extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const z0={type:"move"};class $o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(z0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ut;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const G0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H0=`
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

}`;class V0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Le,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ce({vertexShader:G0,fragmentShader:H0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new L(new de(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class W0 extends oi{constructor(t,e){super();const n=this;let i=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,g=null;const x=new V0,m=e.getContextAttributes();let f=null,b=null;const S=[],y=[],I=new It;let A=null;const T=new De;T.viewport=new ne;const P=new De;P.viewport=new ne;const M=[T,P],_=new k0;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let it=S[Y];return it===void 0&&(it=new $o,S[Y]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Y){let it=S[Y];return it===void 0&&(it=new $o,S[Y]=it),it.getGripSpace()},this.getHand=function(Y){let it=S[Y];return it===void 0&&(it=new $o,S[Y]=it),it.getHandSpace()};function k(Y){const it=y.indexOf(Y.inputSource);if(it===-1)return;const xt=S[it];xt!==void 0&&(xt.update(Y.inputSource,Y.frame,c||r),xt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",K);for(let Y=0;Y<S.length;Y++){const it=y[Y];it!==null&&(y[Y]=null,S[Y].disconnect(it))}C=null,z=null,x.reset(),t.setRenderTarget(f),p=null,u=null,d=null,i=null,b=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",W),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new sn(p.framebufferWidth,p.framebufferHeight,{format:en,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,xt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Fi:Ri,xt=m.stencil?Bi:si);const Rt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:o};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Rt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),b=new sn(u.textureWidth,u.textureHeight,{format:en,type:Tn,depthTexture:new Cc(u.textureWidth,u.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),Yt.setContext(i),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(Y){for(let it=0;it<Y.removed.length;it++){const xt=Y.removed[it],lt=y.indexOf(xt);lt>=0&&(y[lt]=null,S[lt].disconnect(xt))}for(let it=0;it<Y.added.length;it++){const xt=Y.added[it];let lt=y.indexOf(xt);if(lt===-1){for(let Bt=0;Bt<S.length;Bt++)if(Bt>=y.length){y.push(xt),lt=Bt;break}else if(y[Bt]===null){y[Bt]=xt,lt=Bt;break}if(lt===-1)break}const Rt=S[lt];Rt&&Rt.connect(xt)}}const q=new D,et=new D;function V(Y,it,xt){q.setFromMatrixPosition(it.matrixWorld),et.setFromMatrixPosition(xt.matrixWorld);const lt=q.distanceTo(et),Rt=it.projectionMatrix.elements,Bt=xt.projectionMatrix.elements,Ht=Rt[14]/(Rt[10]-1),re=Rt[14]/(Rt[10]+1),Wt=(Rt[9]+1)/Rt[5],he=(Rt[9]-1)/Rt[5],N=(Rt[8]-1)/Rt[0],Se=(Bt[8]+1)/Bt[0],Et=Ht*N,dt=Ht*Se,St=lt/(-N+Se),$t=St*-N;if(it.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX($t),Y.translateZ(St),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Rt[10]===-1)Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Tt=Ht+St,E=re+St,v=Et-$t,O=dt+(lt-$t),Z=Wt*re/E*Tt,nt=he*re/E*Tt;Y.projectionMatrix.makePerspective(v,O,Z,nt,Tt,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function J(Y,it){it===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(it.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let it=Y.near,xt=Y.far;x.texture!==null&&(x.depthNear>0&&(it=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),_.near=P.near=T.near=it,_.far=P.far=T.far=xt,(C!==_.near||z!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,z=_.far),T.layers.mask=Y.layers.mask|2,P.layers.mask=Y.layers.mask|4,_.layers.mask=T.layers.mask|P.layers.mask;const lt=Y.parent,Rt=_.cameras;J(_,lt);for(let Bt=0;Bt<Rt.length;Bt++)J(Rt[Bt],lt);Rt.length===2?V(_,T,P):_.projectionMatrix.copy(T.projectionMatrix),ot(Y,_,lt)};function ot(Y,it,xt){xt===null?Y.matrix.copy(it.matrixWorld):(Y.matrix.copy(xt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(it.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(it.projectionMatrix),Y.projectionMatrixInverse.copy(it.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Hr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let mt=null;function Dt(Y,it){if(h=it.getViewerPose(c||r),g=it,h!==null){const xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let lt=!1;xt.length!==_.cameras.length&&(_.cameras.length=0,lt=!0);for(let Bt=0;Bt<xt.length;Bt++){const Ht=xt[Bt];let re=null;if(p!==null)re=p.getViewport(Ht);else{const he=d.getViewSubImage(u,Ht);re=he.viewport,Bt===0&&(t.setRenderTargetTextures(b,he.colorTexture,u.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(b))}let Wt=M[Bt];Wt===void 0&&(Wt=new De,Wt.layers.enable(Bt),Wt.viewport=new ne,M[Bt]=Wt),Wt.matrix.fromArray(Ht.transform.matrix),Wt.matrix.decompose(Wt.position,Wt.quaternion,Wt.scale),Wt.projectionMatrix.fromArray(Ht.projectionMatrix),Wt.projectionMatrixInverse.copy(Wt.projectionMatrix).invert(),Wt.viewport.set(re.x,re.y,re.width,re.height),Bt===0&&(_.matrix.copy(Wt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),lt===!0&&_.cameras.push(Wt)}const Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){const Bt=d.getDepthInformation(xt[0]);Bt&&Bt.isValid&&Bt.texture&&x.init(t,Bt,i.renderState)}}for(let xt=0;xt<S.length;xt++){const lt=y[xt],Rt=S[xt];lt!==null&&Rt!==void 0&&Rt.update(lt,it,c||r)}mt&&mt(Y,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const Yt=new Ac;Yt.setAnimationLoop(Dt),this.setAnimationLoop=function(Y){mt=Y},this.dispose=function(){}}}const Yn=new Ge,X0=new ce;function q0(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Sc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,b,S,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),d(m,f)):f.isMeshPhongMaterial?(o(m,f),h(m,f)):f.isMeshStandardMaterial?(o(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(o(m,f),g(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),x(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(r(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,b,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Re&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Re&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),S=b.envMap,y=b.envMapRotation;S&&(m.envMap.value=S,Yn.copy(y),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(X0.makeRotationFromEuler(Yn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function r(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Re&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Y0(s,t,e,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const y=S.program;n.uniformBlockBinding(b,y)}function c(b,S){let y=i[b.id];y===void 0&&(g(b),y=h(b),i[b.id]=y,b.addEventListener("dispose",m));const I=S.program;n.updateUBOMapping(b,I);const A=t.render.frame;o[b.id]!==A&&(u(b),o[b.id]=A)}function h(b){const S=d();b.__bindingPointIndex=S;const y=s.createBuffer(),I=b.__size,A=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,y),y}function d(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const S=i[b.id],y=b.uniforms,I=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,T=y.length;A<T;A++){const P=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,_=P.length;M<_;M++){const C=P[M];if(p(C,A,M,I)===!0){const z=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let W=0;for(let K=0;K<k.length;K++){const q=k[K],et=x(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,z+W,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,W),W+=et.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,S,y,I){const A=b.value,T=S+"_"+y;if(I[T]===void 0)return typeof A=="number"||typeof A=="boolean"?I[T]=A:I[T]=A.clone(),!0;{const P=I[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return I[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(b){const S=b.uniforms;let y=0;const I=16;for(let T=0,P=S.length;T<P;T++){const M=Array.isArray(S[T])?S[T]:[S[T]];for(let _=0,C=M.length;_<C;_++){const z=M[_],k=Array.isArray(z.value)?z.value:[z.value];for(let W=0,K=k.length;W<K;W++){const q=k[W],et=x(q),V=y%I,J=V%et.boundary,ot=V+J;y+=J,ot!==0&&I-ot<et.storage&&(y+=I-ot),z.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=et.storage}}}const A=y%I;return A>0&&(y+=I-A),b.__size=y,b.__cache={},this}function x(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const y=r.indexOf(S.__bindingPointIndex);r.splice(y,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete o[S.id]}function f(){for(const b in i)s.deleteBuffer(i[b]);r=[],i={},o={}}return{bind:l,update:c,dispose:f}}class la{constructor(t={}){const{canvas:e=Uh(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=On,this.toneMappingExposure=1;const y=this;let I=!1,A=0,T=0,P=null,M=-1,_=null;const C=new ne,z=new ne;let k=null;const W=new yt(0);let K=0,q=e.width,et=e.height,V=1,J=null,ot=null;const mt=new ne(0,0,q,et),Dt=new ne(0,0,q,et);let Yt=!1;const Y=new oa;let it=!1,xt=!1;const lt=new ce,Rt=new ce,Bt=new D,Ht=new ne,re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Wt=!1;function he(){return P===null?V:1}let N=n;function Se(w,F){return e.getContext(w,F)}try{const w={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$r}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),N===null){const F="webgl2";if(N=Se(F,w),N===null)throw Se(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Et,dt,St,$t,Tt,E,v,O,Z,nt,$,At,ht,gt,jt,st,_t,Pt,Lt,vt,Xt,zt,se,B;function ct(){Et=new Qf(N),Et.init(),zt=new O0(N,Et),dt=new Yf(N,Et,t,zt),St=new F0(N,Et),dt.reverseDepthBuffer&&u&&St.buffers.depth.setReversed(!0),$t=new np(N),Tt=new y0,E=new N0(N,Et,St,Tt,dt,zt,$t),v=new $f(y),O=new Zf(y),Z=new ld(N),se=new Xf(N,Z),nt=new tp(N,Z,$t,se),$=new sp(N,nt,Z,$t),Lt=new ip(N,dt,E),st=new jf(Tt),At=new v0(y,v,O,Et,dt,se,st),ht=new q0(y,Tt),gt=new w0,jt=new C0(Et),Pt=new Wf(y,v,O,St,$,p,l),_t=new L0(y,$,dt),B=new Y0(N,$t,dt,St),vt=new qf(N,Et,$t),Xt=new ep(N,Et,$t),$t.programs=At.programs,y.capabilities=dt,y.extensions=Et,y.properties=Tt,y.renderLists=gt,y.shadowMap=_t,y.state=St,y.info=$t}ct();const X=new W0(y,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(q,et,!1))},this.getSize=function(w){return w.set(q,et)},this.setSize=function(w,F,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,et=F,e.width=Math.floor(w*V),e.height=Math.floor(F*V),G===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(q*V,et*V).floor()},this.setDrawingBufferSize=function(w,F,G){q=w,et=F,V=G,e.width=Math.floor(w*G),e.height=Math.floor(F*G),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(C)},this.getViewport=function(w){return w.copy(mt)},this.setViewport=function(w,F,G,H){w.isVector4?mt.set(w.x,w.y,w.z,w.w):mt.set(w,F,G,H),St.viewport(C.copy(mt).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(Dt)},this.setScissor=function(w,F,G,H){w.isVector4?Dt.set(w.x,w.y,w.z,w.w):Dt.set(w,F,G,H),St.scissor(z.copy(Dt).multiplyScalar(V).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(w){St.setScissorTest(Yt=w)},this.setOpaqueSort=function(w){J=w},this.setTransparentSort=function(w){ot=w},this.getClearColor=function(w){return w.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor.apply(Pt,arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha.apply(Pt,arguments)},this.clear=function(w=!0,F=!0,G=!0){let H=0;if(w){let U=!1;if(P!==null){const rt=P.texture.format;U=rt===ia||rt===na||rt===ea}if(U){const rt=P.texture.type,ft=rt===Tn||rt===si||rt===us||rt===Bi||rt===Qr||rt===ta,Mt=Pt.getClearColor(),wt=Pt.getClearAlpha(),Ft=Mt.r,Ot=Mt.g,bt=Mt.b;ft?(g[0]=Ft,g[1]=Ot,g[2]=bt,g[3]=wt,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=Ft,x[1]=Ot,x[2]=bt,x[3]=wt,N.clearBufferiv(N.COLOR,0,x))}else H|=N.COLOR_BUFFER_BIT}F&&(H|=N.DEPTH_BUFFER_BIT),G&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),gt.dispose(),jt.dispose(),Tt.dispose(),v.dispose(),O.dispose(),$.dispose(),se.dispose(),B.dispose(),At.dispose(),X.dispose(),X.removeEventListener("sessionstart",va),X.removeEventListener("sessionend",ya),Gn.stop()};function tt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const w=$t.autoReset,F=_t.enabled,G=_t.autoUpdate,H=_t.needsUpdate,U=_t.type;ct(),$t.autoReset=w,_t.enabled=F,_t.autoUpdate=G,_t.needsUpdate=H,_t.type=U}function ut(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Nt(w){const F=w.target;F.removeEventListener("dispose",Nt),ue(F)}function ue(w){Ee(w),Tt.remove(w)}function Ee(w){const F=Tt.get(w).programs;F!==void 0&&(F.forEach(function(G){At.releaseProgram(G)}),w.isShaderMaterial&&At.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,G,H,U,rt){F===null&&(F=re);const ft=U.isMesh&&U.matrixWorld.determinant()<0,Mt=qc(w,F,G,H,U);St.setMaterial(H,ft);let wt=G.index,Ft=1;if(H.wireframe===!0){if(wt=nt.getWireframeAttribute(G),wt===void 0)return;Ft=2}const Ot=G.drawRange,bt=G.attributes.position;let Jt=Ot.start*Ft,oe=(Ot.start+Ot.count)*Ft;rt!==null&&(Jt=Math.max(Jt,rt.start*Ft),oe=Math.min(oe,(rt.start+rt.count)*Ft)),wt!==null?(Jt=Math.max(Jt,0),oe=Math.min(oe,wt.count)):bt!=null&&(Jt=Math.max(Jt,0),oe=Math.min(oe,bt.count));const ae=oe-Jt;if(ae<0||ae===1/0)return;se.setup(U,H,Mt,G,wt);let Be,Kt=vt;if(wt!==null&&(Be=Z.get(wt),Kt=Xt,Kt.setIndex(Be)),U.isMesh)H.wireframe===!0?(St.setLineWidth(H.wireframeLinewidth*he()),Kt.setMode(N.LINES)):Kt.setMode(N.TRIANGLES);else if(U.isLine){let Ct=H.linewidth;Ct===void 0&&(Ct=1),St.setLineWidth(Ct*he()),U.isLineSegments?Kt.setMode(N.LINES):U.isLineLoop?Kt.setMode(N.LINE_LOOP):Kt.setMode(N.LINE_STRIP)}else U.isPoints?Kt.setMode(N.POINTS):U.isSprite&&Kt.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ct=U._multiDrawStarts,un=U._multiDrawCounts,Zt=U._multiDrawCount,je=wt?Z.get(wt).bytesPerElement:1,ai=Tt.get(H).currentProgram.getUniforms();for(let Ne=0;Ne<Zt;Ne++)ai.setValue(N,"_gl_DrawID",Ne),Kt.render(Ct[Ne]/je,un[Ne])}else if(U.isInstancedMesh)Kt.renderInstances(Jt,ae,U.count);else if(G.isInstancedBufferGeometry){const Ct=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,un=Math.min(G.instanceCount,Ct);Kt.renderInstances(Jt,ae,un)}else Kt.render(Jt,ae)};function Qt(w,F,G){w.transparent===!0&&w.side===ze&&w.forceSinglePass===!1?(w.side=Re,w.needsUpdate=!0,ws(w,F,G),w.side=zn,w.needsUpdate=!0,ws(w,F,G),w.side=ze):ws(w,F,G)}this.compile=function(w,F,G=null){G===null&&(G=w),f=jt.get(G),f.init(F),S.push(f),G.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),w!==G&&w.traverseVisible(function(U){U.isLight&&U.layers.test(F.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const H=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const rt=U.material;if(rt)if(Array.isArray(rt))for(let ft=0;ft<rt.length;ft++){const Mt=rt[ft];Qt(Mt,G,U),H.add(Mt)}else Qt(rt,G,U),H.add(rt)}),S.pop(),f=null,H},this.compileAsync=function(w,F,G=null){const H=this.compile(w,F,G);return new Promise(U=>{function rt(){if(H.forEach(function(ft){Tt.get(ft).currentProgram.isReady()&&H.delete(ft)}),H.size===0){U(w);return}setTimeout(rt,10)}Et.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Ye=null;function dn(w){Ye&&Ye(w)}function va(){Gn.stop()}function ya(){Gn.start()}const Gn=new Ac;Gn.setAnimationLoop(dn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(w){Ye=w,X.setAnimationLoop(w),w===null?Gn.stop():Gn.start()},X.addEventListener("sessionstart",va),X.addEventListener("sessionend",ya),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,F,P),f=jt.get(w,S.length),f.init(F),S.push(f),Rt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(Rt),xt=this.localClippingEnabled,it=st.init(this.clippingPlanes,xt),m=gt.get(w,b.length),m.init(),b.push(m),X.enabled===!0&&X.isPresenting===!0){const rt=y.xr.getDepthSensingMesh();rt!==null&&_o(rt,F,-1/0,y.sortObjects)}_o(w,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(J,ot),Wt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Wt&&Pt.addToRenderList(m,w),this.info.render.frame++,it===!0&&st.beginShadows();const G=f.state.shadowsArray;_t.render(G,w,F),it===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(f.setupLights(),F.isArrayCamera){const rt=F.cameras;if(U.length>0)for(let ft=0,Mt=rt.length;ft<Mt;ft++){const wt=rt[ft];wa(H,U,w,wt)}Wt&&Pt.render(w);for(let ft=0,Mt=rt.length;ft<Mt;ft++){const wt=rt[ft];Ma(m,w,wt,wt.viewport)}}else U.length>0&&wa(H,U,w,F),Wt&&Pt.render(w),Ma(m,w,F);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(y,w,F),se.resetDefaultState(),M=-1,_=null,S.pop(),S.length>0?(f=S[S.length-1],it===!0&&st.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function _o(w,F,G,H){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)f.pushLight(w),w.castShadow&&f.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){H&&Ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Rt);const ft=$.update(w),Mt=w.material;Mt.visible&&m.push(w,ft,Mt,G,Ht.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const ft=$.update(w),Mt=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ht.copy(w.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Ht.copy(ft.boundingSphere.center)),Ht.applyMatrix4(w.matrixWorld).applyMatrix4(Rt)),Array.isArray(Mt)){const wt=ft.groups;for(let Ft=0,Ot=wt.length;Ft<Ot;Ft++){const bt=wt[Ft],Jt=Mt[bt.materialIndex];Jt&&Jt.visible&&m.push(w,ft,Jt,G,Ht.z,bt)}}else Mt.visible&&m.push(w,ft,Mt,G,Ht.z,null)}}const rt=w.children;for(let ft=0,Mt=rt.length;ft<Mt;ft++)_o(rt[ft],F,G,H)}function Ma(w,F,G,H){const U=w.opaque,rt=w.transmissive,ft=w.transparent;f.setupLightsView(G),it===!0&&st.setGlobalState(y.clippingPlanes,G),H&&St.viewport(C.copy(H)),U.length>0&&Ms(U,F,G),rt.length>0&&Ms(rt,F,G),ft.length>0&&Ms(ft,F,G),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function wa(w,F,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new sn(1,1,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float")?Sn:Tn,minFilter:ei,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const rt=f.state.transmissionRenderTarget[H.id],ft=H.viewport||C;rt.setSize(ft.z,ft.w);const Mt=y.getRenderTarget();y.setRenderTarget(rt),y.getClearColor(W),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),Wt&&Pt.render(G);const wt=y.toneMapping;y.toneMapping=On;const Ft=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),it===!0&&st.setGlobalState(y.clippingPlanes,H),Ms(w,G,H),E.updateMultisampleRenderTarget(rt),E.updateRenderTargetMipmap(rt),Et.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let bt=0,Jt=F.length;bt<Jt;bt++){const oe=F[bt],ae=oe.object,Be=oe.geometry,Kt=oe.material,Ct=oe.group;if(Kt.side===ze&&ae.layers.test(H.layers)){const un=Kt.side;Kt.side=Re,Kt.needsUpdate=!0,ba(ae,G,H,Be,Kt,Ct),Kt.side=un,Kt.needsUpdate=!0,Ot=!0}}Ot===!0&&(E.updateMultisampleRenderTarget(rt),E.updateRenderTargetMipmap(rt))}y.setRenderTarget(Mt),y.setClearColor(W,K),Ft!==void 0&&(H.viewport=Ft),y.toneMapping=wt}function Ms(w,F,G){const H=F.isScene===!0?F.overrideMaterial:null;for(let U=0,rt=w.length;U<rt;U++){const ft=w[U],Mt=ft.object,wt=ft.geometry,Ft=H===null?ft.material:H,Ot=ft.group;Mt.layers.test(G.layers)&&ba(Mt,F,G,wt,Ft,Ot)}}function ba(w,F,G,H,U,rt){w.onBeforeRender(y,F,G,H,U,rt),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(y,F,G,H,w,rt),U.transparent===!0&&U.side===ze&&U.forceSinglePass===!1?(U.side=Re,U.needsUpdate=!0,y.renderBufferDirect(G,F,H,U,w,rt),U.side=zn,U.needsUpdate=!0,y.renderBufferDirect(G,F,H,U,w,rt),U.side=ze):y.renderBufferDirect(G,F,H,U,w,rt),w.onAfterRender(y,F,G,H,U,rt)}function ws(w,F,G){F.isScene!==!0&&(F=re);const H=Tt.get(w),U=f.state.lights,rt=f.state.shadowsArray,ft=U.state.version,Mt=At.getParameters(w,U.state,rt,F,G),wt=At.getProgramCacheKey(Mt);let Ft=H.programs;H.environment=w.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(w.isMeshStandardMaterial?O:v).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ft===void 0&&(w.addEventListener("dispose",Nt),Ft=new Map,H.programs=Ft);let Ot=Ft.get(wt);if(Ot!==void 0){if(H.currentProgram===Ot&&H.lightsStateVersion===ft)return Ea(w,Mt),Ot}else Mt.uniforms=At.getUniforms(w),w.onBeforeCompile(Mt,y),Ot=At.acquireProgram(Mt,wt),Ft.set(wt,Ot),H.uniforms=Mt.uniforms;const bt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(bt.clippingPlanes=st.uniform),Ea(w,Mt),H.needsLights=jc(w),H.lightsStateVersion=ft,H.needsLights&&(bt.ambientLightColor.value=U.state.ambient,bt.lightProbe.value=U.state.probe,bt.directionalLights.value=U.state.directional,bt.directionalLightShadows.value=U.state.directionalShadow,bt.spotLights.value=U.state.spot,bt.spotLightShadows.value=U.state.spotShadow,bt.rectAreaLights.value=U.state.rectArea,bt.ltc_1.value=U.state.rectAreaLTC1,bt.ltc_2.value=U.state.rectAreaLTC2,bt.pointLights.value=U.state.point,bt.pointLightShadows.value=U.state.pointShadow,bt.hemisphereLights.value=U.state.hemi,bt.directionalShadowMap.value=U.state.directionalShadowMap,bt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,bt.spotShadowMap.value=U.state.spotShadowMap,bt.spotLightMatrix.value=U.state.spotLightMatrix,bt.spotLightMap.value=U.state.spotLightMap,bt.pointShadowMap.value=U.state.pointShadowMap,bt.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Ot,H.uniformsList=null,Ot}function Sa(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Qs.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Ea(w,F){const G=Tt.get(w);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function qc(w,F,G,H,U){F.isScene!==!0&&(F=re),E.resetTextureUnits();const rt=F.fog,ft=H.isMeshStandardMaterial?F.environment:null,Mt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ki,wt=(H.isMeshStandardMaterial?O:v).get(H.envMap||ft),Ft=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ot=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),bt=!!G.morphAttributes.position,Jt=!!G.morphAttributes.normal,oe=!!G.morphAttributes.color;let ae=On;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ae=y.toneMapping);const Be=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Kt=Be!==void 0?Be.length:0,Ct=Tt.get(H),un=f.state.lights;if(it===!0&&(xt===!0||w!==_)){const Ve=w===_&&H.id===M;st.setState(H,w,Ve)}let Zt=!1;H.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==un.state.version||Ct.outputColorSpace!==Mt||U.isBatchedMesh&&Ct.batching===!1||!U.isBatchedMesh&&Ct.batching===!0||U.isBatchedMesh&&Ct.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ct.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ct.instancing===!1||!U.isInstancedMesh&&Ct.instancing===!0||U.isSkinnedMesh&&Ct.skinning===!1||!U.isSkinnedMesh&&Ct.skinning===!0||U.isInstancedMesh&&Ct.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ct.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ct.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ct.instancingMorph===!1&&U.morphTexture!==null||Ct.envMap!==wt||H.fog===!0&&Ct.fog!==rt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==st.numPlanes||Ct.numIntersection!==st.numIntersection)||Ct.vertexAlphas!==Ft||Ct.vertexTangents!==Ot||Ct.morphTargets!==bt||Ct.morphNormals!==Jt||Ct.morphColors!==oe||Ct.toneMapping!==ae||Ct.morphTargetsCount!==Kt)&&(Zt=!0):(Zt=!0,Ct.__version=H.version);let je=Ct.currentProgram;Zt===!0&&(je=ws(H,F,U));let ai=!1,Ne=!1,qi=!1;const le=je.getUniforms(),rn=Ct.uniforms;if(St.useProgram(je.program)&&(ai=!0,Ne=!0,qi=!0),H.id!==M&&(M=H.id,Ne=!0),ai||_!==w){St.buffers.depth.getReversed()?(lt.copy(w.projectionMatrix),Oh(lt),kh(lt),le.setValue(N,"projectionMatrix",lt)):le.setValue(N,"projectionMatrix",w.projectionMatrix),le.setValue(N,"viewMatrix",w.matrixWorldInverse);const Cn=le.map.cameraPosition;Cn!==void 0&&Cn.setValue(N,Bt.setFromMatrixPosition(w.matrixWorld)),dt.logarithmicDepthBuffer&&le.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&le.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),_!==w&&(_=w,Ne=!0,qi=!0)}if(U.isSkinnedMesh){le.setOptional(N,U,"bindMatrix"),le.setOptional(N,U,"bindMatrixInverse");const Ve=U.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),le.setValue(N,"boneTexture",Ve.boneTexture,E))}U.isBatchedMesh&&(le.setOptional(N,U,"batchingTexture"),le.setValue(N,"batchingTexture",U._matricesTexture,E),le.setOptional(N,U,"batchingIdTexture"),le.setValue(N,"batchingIdTexture",U._indirectTexture,E),le.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&le.setValue(N,"batchingColorTexture",U._colorsTexture,E));const Yi=G.morphAttributes;if((Yi.position!==void 0||Yi.normal!==void 0||Yi.color!==void 0)&&Lt.update(U,G,je),(Ne||Ct.receiveShadow!==U.receiveShadow)&&(Ct.receiveShadow=U.receiveShadow,le.setValue(N,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(rn.envMap.value=wt,rn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(rn.envMapIntensity.value=F.environmentIntensity),Ne&&(le.setValue(N,"toneMappingExposure",y.toneMappingExposure),Ct.needsLights&&Yc(rn,qi),rt&&H.fog===!0&&ht.refreshFogUniforms(rn,rt),ht.refreshMaterialUniforms(rn,H,V,et,f.state.transmissionRenderTarget[w.id]),Qs.upload(N,Sa(Ct),rn,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Qs.upload(N,Sa(Ct),rn,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&le.setValue(N,"center",U.center),le.setValue(N,"modelViewMatrix",U.modelViewMatrix),le.setValue(N,"normalMatrix",U.normalMatrix),le.setValue(N,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ve=H.uniformsGroups;for(let Cn=0,Rn=Ve.length;Cn<Rn;Cn++){const Ta=Ve[Cn];B.update(Ta,je),B.bind(Ta,je)}}return je}function Yc(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function jc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,F,G){Tt.get(w.texture).__webglTexture=F,Tt.get(w.depthTexture).__webglTexture=G;const H=Tt.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const G=Tt.get(w);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,G=0){P=w,A=F,T=G;let H=!0,U=null,rt=!1,ft=!1;if(w){const wt=Tt.get(w);if(wt.__useDefaultFramebuffer!==void 0)St.bindFramebuffer(N.FRAMEBUFFER,null),H=!1;else if(wt.__webglFramebuffer===void 0)E.setupRenderTarget(w);else if(wt.__hasExternalTextures)E.rebindTextures(w,Tt.get(w.texture).__webglTexture,Tt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const bt=w.depthTexture;if(wt.__boundDepthTexture!==bt){if(bt!==null&&Tt.has(bt)&&(w.width!==bt.image.width||w.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(w)}}const Ft=w.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(ft=!0);const Ot=Tt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ot[F])?U=Ot[F][G]:U=Ot[F],rt=!0):w.samples>0&&E.useMultisampledRTT(w)===!1?U=Tt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ot)?U=Ot[G]:U=Ot,C.copy(w.viewport),z.copy(w.scissor),k=w.scissorTest}else C.copy(mt).multiplyScalar(V).floor(),z.copy(Dt).multiplyScalar(V).floor(),k=Yt;if(St.bindFramebuffer(N.FRAMEBUFFER,U)&&H&&St.drawBuffers(w,U),St.viewport(C),St.scissor(z),St.setScissorTest(k),rt){const wt=Tt.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+F,wt.__webglTexture,G)}else if(ft){const wt=Tt.get(w.texture),Ft=F||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,wt.__webglTexture,G||0,Ft)}M=-1},this.readRenderTargetPixels=function(w,F,G,H,U,rt,ft){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){St.bindFramebuffer(N.FRAMEBUFFER,Mt);try{const wt=w.texture,Ft=wt.format,Ot=wt.type;if(!dt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-H&&G>=0&&G<=w.height-U&&N.readPixels(F,G,H,U,zt.convert(Ft),zt.convert(Ot),rt)}finally{const wt=P!==null?Tt.get(P).__webglFramebuffer:null;St.bindFramebuffer(N.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(w,F,G,H,U,rt,ft){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Tt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ft!==void 0&&(Mt=Mt[ft]),Mt){const wt=w.texture,Ft=wt.format,Ot=wt.type;if(!dt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-H&&G>=0&&G<=w.height-U){St.bindFramebuffer(N.FRAMEBUFFER,Mt);const bt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,bt),N.bufferData(N.PIXEL_PACK_BUFFER,rt.byteLength,N.STREAM_READ),N.readPixels(F,G,H,U,zt.convert(Ft),zt.convert(Ot),0);const Jt=P!==null?Tt.get(P).__webglFramebuffer:null;St.bindFramebuffer(N.FRAMEBUFFER,Jt);const oe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Nh(N,oe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,bt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,rt),N.deleteBuffer(bt),N.deleteSync(oe),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,G=0){w.isTexture!==!0&&(rs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-G),U=Math.floor(w.image.width*H),rt=Math.floor(w.image.height*H),ft=F!==null?F.x:0,Mt=F!==null?F.y:0;E.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ft,Mt,U,rt),St.unbindTexture()},this.copyTextureToTexture=function(w,F,G=null,H=null,U=0){w.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],F=arguments[2],U=arguments[3]||0,G=null);let rt,ft,Mt,wt,Ft,Ot,bt,Jt,oe;const ae=w.isCompressedTexture?w.mipmaps[U]:w.image;G!==null?(rt=G.max.x-G.min.x,ft=G.max.y-G.min.y,Mt=G.isBox3?G.max.z-G.min.z:1,wt=G.min.x,Ft=G.min.y,Ot=G.isBox3?G.min.z:0):(rt=ae.width,ft=ae.height,Mt=ae.depth||1,wt=0,Ft=0,Ot=0),H!==null?(bt=H.x,Jt=H.y,oe=H.z):(bt=0,Jt=0,oe=0);const Be=zt.convert(F.format),Kt=zt.convert(F.type);let Ct;F.isData3DTexture?(E.setTexture3D(F,0),Ct=N.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(E.setTexture2DArray(F,0),Ct=N.TEXTURE_2D_ARRAY):(E.setTexture2D(F,0),Ct=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment);const un=N.getParameter(N.UNPACK_ROW_LENGTH),Zt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),je=N.getParameter(N.UNPACK_SKIP_PIXELS),ai=N.getParameter(N.UNPACK_SKIP_ROWS),Ne=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ae.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ae.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,wt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ft),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ot);const qi=w.isDataArrayTexture||w.isData3DTexture,le=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const rn=Tt.get(w),Yi=Tt.get(F),Ve=Tt.get(rn.__renderTarget),Cn=Tt.get(Yi.__renderTarget);St.bindFramebuffer(N.READ_FRAMEBUFFER,Ve.__webglFramebuffer),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Rn=0;Rn<Mt;Rn++)qi&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(w).__webglTexture,U,Ot+Rn),w.isDepthTexture?(le&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Tt.get(F).__webglTexture,U,oe+Rn),N.blitFramebuffer(wt,Ft,rt,ft,bt,Jt,rt,ft,N.DEPTH_BUFFER_BIT,N.NEAREST)):le?N.copyTexSubImage3D(Ct,U,bt,Jt,oe+Rn,wt,Ft,rt,ft):N.copyTexSubImage2D(Ct,U,bt,Jt,oe+Rn,wt,Ft,rt,ft);St.bindFramebuffer(N.READ_FRAMEBUFFER,null),St.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else le?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(Ct,U,bt,Jt,oe,rt,ft,Mt,Be,Kt,ae.data):F.isCompressedArrayTexture?N.compressedTexSubImage3D(Ct,U,bt,Jt,oe,rt,ft,Mt,Be,ae.data):N.texSubImage3D(Ct,U,bt,Jt,oe,rt,ft,Mt,Be,Kt,ae):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,bt,Jt,rt,ft,Be,Kt,ae.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,bt,Jt,ae.width,ae.height,Be,ae.data):N.texSubImage2D(N.TEXTURE_2D,U,bt,Jt,rt,ft,Be,Kt,ae);N.pixelStorei(N.UNPACK_ROW_LENGTH,un),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Zt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,je),N.pixelStorei(N.UNPACK_SKIP_ROWS,ai),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ne),U===0&&F.generateMipmaps&&N.generateMipmap(Ct),St.unbindTexture()},this.copyTextureToTexture3D=function(w,F,G=null,H=null,U=0){return w.isTexture!==!0&&(rs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,w=arguments[2],F=arguments[3],U=arguments[4]||0),rs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,G,H,U)},this.initRenderTarget=function(w){Tt.get(w).__webglFramebuffer===void 0&&E.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?E.setTextureCube(w,0):w.isData3DTexture?E.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?E.setTexture2DArray(w,0):E.setTexture2D(w,0),St.unbindTexture()},this.resetState=function(){A=0,T=0,P=null,St.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class go{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new yt(t),this.density=e}clone(){return new go(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ca extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ze extends _e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Lc extends Gi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ro=new D,ao=new D,Sl=new ce,Qi=new vc,Ws=new po,Jo=new D,El=new D;class j0 extends _e{constructor(t=new Pe,e=new Lc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)ro.fromBufferAttribute(e,i-1),ao.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ro.distanceTo(ao);t.setAttribute("lineDistance",new ie(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(i),Ws.radius+=o,t.ray.intersectsSphere(Ws)===!1)return;Sl.copy(i).invert(),Qi.copy(t.ray).applyMatrix4(Sl);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=c){const f=h.getX(x),b=h.getX(x+1),S=Xs(this,t,Qi,l,f,b);S&&e.push(S)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),f=Xs(this,t,Qi,l,x,m);f&&e.push(f)}}else{const p=Math.max(0,r.start),g=Math.min(u.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=c){const f=Xs(this,t,Qi,l,x,x+1);f&&e.push(f)}if(this.isLineLoop){const x=Xs(this,t,Qi,l,g-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Xs(s,t,e,n,i,o){const r=s.geometry.attributes.position;if(ro.fromBufferAttribute(r,i),ao.fromBufferAttribute(r,o),e.distanceSqToSegment(ro,ao,Jo,El)>n)return;Jo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Jo);if(!(l<t.near||l>t.far))return{distance:l,point:El.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class xs extends Le{constructor(t,e,n,i,o,r,a,l,c){super(t,e,n,i,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ha extends Pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],r=[],a=[],l=[],c=new D,h=new It;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[u]/t+1)/2,h.y=(r[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)o.push(d,d+1,0);this.setIndex(o),this.setAttribute("position",new ie(r,3)),this.setAttribute("normal",new ie(a,3)),this.setAttribute("uv",new ie(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ha(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Vt extends Pe{constructor(t=1,e=1,n=1,i=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],d=[],u=[],p=[];let g=0;const x=[],m=n/2;let f=0;b(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new ie(d,3)),this.setAttribute("normal",new ie(u,3)),this.setAttribute("uv",new ie(p,2));function b(){const y=new D,I=new D;let A=0;const T=(e-t)/n;for(let P=0;P<=o;P++){const M=[],_=P/o,C=_*(e-t)+t;for(let z=0;z<=i;z++){const k=z/i,W=k*l+a,K=Math.sin(W),q=Math.cos(W);I.x=C*K,I.y=-_*n+m,I.z=C*q,d.push(I.x,I.y,I.z),y.set(K,T,q).normalize(),u.push(y.x,y.y,y.z),p.push(k,1-_),M.push(g++)}x.push(M)}for(let P=0;P<i;P++)for(let M=0;M<o;M++){const _=x[M][P],C=x[M+1][P],z=x[M+1][P+1],k=x[M][P+1];(t>0||M!==0)&&(h.push(_,C,k),A+=3),(e>0||M!==o-1)&&(h.push(C,z,k),A+=3)}c.addGroup(f,A,0),f+=A}function S(y){const I=g,A=new It,T=new D;let P=0;const M=y===!0?t:e,_=y===!0?1:-1;for(let z=1;z<=i;z++)d.push(0,m*_,0),u.push(0,_,0),p.push(.5,.5),g++;const C=g;for(let z=0;z<=i;z++){const W=z/i*l+a,K=Math.cos(W),q=Math.sin(W);T.x=M*q,T.y=m*_,T.z=M*K,d.push(T.x,T.y,T.z),u.push(0,_,0),A.x=K*.5+.5,A.y=q*.5*_+.5,p.push(A.x,A.y),g++}for(let z=0;z<i;z++){const k=I+z,W=C+z;y===!0?h.push(W,W+1,k):h.push(W+1,W,k),P+=3}c.addGroup(f,P,y===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nn extends Vt{constructor(t=1,e=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Nn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class da extends Pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],r=[];a(i),c(n),h(),this.setAttribute("position",new ie(o,3)),this.setAttribute("normal",new ie(o.slice(),3)),this.setAttribute("uv",new ie(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const S=new D,y=new D,I=new D;for(let A=0;A<e.length;A+=3)p(e[A+0],S),p(e[A+1],y),p(e[A+2],I),l(S,y,I,b)}function l(b,S,y,I){const A=I+1,T=[];for(let P=0;P<=A;P++){T[P]=[];const M=b.clone().lerp(y,P/A),_=S.clone().lerp(y,P/A),C=A-P;for(let z=0;z<=C;z++)z===0&&P===A?T[P][z]=M:T[P][z]=M.clone().lerp(_,z/C)}for(let P=0;P<A;P++)for(let M=0;M<2*(A-P)-1;M++){const _=Math.floor(M/2);M%2===0?(u(T[P][_+1]),u(T[P+1][_]),u(T[P][_])):(u(T[P][_+1]),u(T[P+1][_+1]),u(T[P+1][_]))}}function c(b){const S=new D;for(let y=0;y<o.length;y+=3)S.x=o[y+0],S.y=o[y+1],S.z=o[y+2],S.normalize().multiplyScalar(b),o[y+0]=S.x,o[y+1]=S.y,o[y+2]=S.z}function h(){const b=new D;for(let S=0;S<o.length;S+=3){b.x=o[S+0],b.y=o[S+1],b.z=o[S+2];const y=m(b)/2/Math.PI+.5,I=f(b)/Math.PI+.5;r.push(y,1-I)}g(),d()}function d(){for(let b=0;b<r.length;b+=6){const S=r[b+0],y=r[b+2],I=r[b+4],A=Math.max(S,y,I),T=Math.min(S,y,I);A>.9&&T<.1&&(S<.2&&(r[b+0]+=1),y<.2&&(r[b+2]+=1),I<.2&&(r[b+4]+=1))}}function u(b){o.push(b.x,b.y,b.z)}function p(b,S){const y=b*3;S.x=t[y+0],S.y=t[y+1],S.z=t[y+2]}function g(){const b=new D,S=new D,y=new D,I=new D,A=new It,T=new It,P=new It;for(let M=0,_=0;M<o.length;M+=9,_+=6){b.set(o[M+0],o[M+1],o[M+2]),S.set(o[M+3],o[M+4],o[M+5]),y.set(o[M+6],o[M+7],o[M+8]),A.set(r[_+0],r[_+1]),T.set(r[_+2],r[_+3]),P.set(r[_+4],r[_+5]),I.copy(b).add(S).add(y).divideScalar(3);const C=m(I);x(A,_+0,b,C),x(T,_+2,S,C),x(P,_+4,y,C)}}function x(b,S,y,I){I<0&&b.x===1&&(r[S]=b.x-1),y.x===0&&y.z===0&&(r[S]=I/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new da(t.vertices,t.indices,t.radius,t.details)}}class ua extends da{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ua(t.radius,t.detail)}}class ri extends Pe{constructor(t=.5,e=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let d=t;const u=(e-t)/i,p=new D,g=new It;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const f=o+m/n*r;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<i;x++){const m=x*(n+1);for(let f=0;f<n;f++){const b=f+m,S=b,y=b+n+1,I=b+n+2,A=b+1;a.push(S,y,A),a.push(y,I,A)}}this.setIndex(a),this.setAttribute("position",new ie(l,3)),this.setAttribute("normal",new ie(c,3)),this.setAttribute("uv",new ie(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ri(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class fe extends Pe{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],d=new D,u=new D,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const b=[],S=f/n;let y=0;f===0&&r===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let I=0;I<=e;I++){const A=I/e;d.x=-t*Math.cos(i+A*o)*Math.sin(r+S*a),d.y=t*Math.cos(r+S*a),d.z=t*Math.sin(i+A*o)*Math.sin(r+S*a),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(A+y,1-S),b.push(c++)}h.push(b)}for(let f=0;f<n;f++)for(let b=0;b<e;b++){const S=h[f][b+1],y=h[f][b],I=h[f+1][b],A=h[f+1][b+1];(f!==0||r>0)&&p.push(S,y,A),(f!==n-1||l<Math.PI)&&p.push(y,I,A)}this.setIndex(p),this.setAttribute("position",new ie(g,3)),this.setAttribute("normal",new ie(x,3)),this.setAttribute("uv",new ie(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fa extends Pe{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],h=new D,d=new D,u=new D;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const x=g/i*o,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(x),d.y=(t+e*Math.cos(m))*Math.sin(x),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const x=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,b=(i+1)*p+g;r.push(x,m,b),r.push(m,f,b)}this.setIndex(r),this.setAttribute("position",new ie(a,3)),this.setAttribute("normal",new ie(l,3)),this.setAttribute("uv",new ie(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class $0 extends Ce{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class j extends Gi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=Jr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function qs(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function J0(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function K0(s){function t(i,o){return s[i]-s[o]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Tl(s,t,e){const n=s.length,i=new s.constructor(n);for(let o=0,r=0;r!==n;++o){const a=e[o]*t;for(let l=0;l!==t;++l)i[r++]=s[a+l]}return i}function Bc(s,t,e,n){let i=1,o=s[0];for(;o!==void 0&&o[n]===void 0;)o=s[i++];if(o===void 0)return;let r=o[n];if(r!==void 0)if(Array.isArray(r))do r=o[n],r!==void 0&&(t.push(o.time),e.push.apply(e,r)),o=s[i++];while(o!==void 0);else if(r.toArray!==void 0)do r=o[n],r!==void 0&&(t.push(o.time),r.toArray(e,e.length)),o=s[i++];while(o!==void 0);else do r=o[n],r!==void 0&&(t.push(o.time),e.push(r)),o=s[i++];while(o!==void 0)}class xo{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],o=e[n-1];t:{e:{let r;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=i,i=e[++n],t<i)break e}r=e.length;break n}if(!(t>=o)){const a=e[1];t<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=o,o=e[--n-1],t>=o)break e}r=n,n=0;break n}break t}for(;n<r;){const a=n+r>>>1;t<e[a]?r=a:n=a+1}if(i=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,i)}return this.interpolate_(n,o,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=t*i;for(let r=0;r!==i;++r)e[r]=n[o+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Z0 extends xo{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Si,endingEnd:Si}}intervalChanged_(t,e,n){const i=this.parameterPositions;let o=t-2,r=t+1,a=i[o],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case Ei:o=t,a=2*e-n;break;case io:o=i.length-2,a=e+i[o]-i[o+1];break;default:o=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ei:r=t,l=2*n-e;break;case io:r=1,l=n+i[1]-i[0];break;default:r=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=r*h}interpolate_(t,e,n,i){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,f=-u*m+2*u*x-u*g,b=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,S=(-1-p)*m+(1.5+p)*x+.5*g,y=p*m-p*x;for(let I=0;I!==a;++I)o[I]=f*r[h+I]+b*r[c+I]+S*r[l+I]+y*r[d+I];return o}}class Fc extends xo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)o[u]=r[c+u]*d+r[l+u]*h;return o}}class Q0 extends xo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class hn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qs(e,this.TimeBufferType),this.values=qs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:qs(t.times,Array),values:qs(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Q0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Z0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case no:e=this.InterpolantFactoryMethodDiscrete;break;case Gr:e=this.InterpolantFactoryMethodLinear;break;case yo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return no;case this.InterpolantFactoryMethodLinear:return Gr;case this.InterpolantFactoryMethodSmooth:return yo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let o=0,r=i-1;for(;o!==i&&n[o]<t;)++o;for(;r!==-1&&n[r]>e;)--r;if(++r,o!==0||r!==i){o>=r&&(r=Math.max(r,1),o=r-1);const a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let a=0;a!==o;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),t=!1;break}r=l}if(i!==void 0&&J0(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===yo,o=t.length-1;let r=1;for(let a=1;a<o;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const d=a*n,u=d-n,p=d+n;for(let g=0;g!==n;++g){const x=e[d+g];if(x!==e[u+g]||x!==e[p+g]){l=!0;break}}}if(l){if(a!==r){t[r]=t[a];const d=a*n,u=r*n;for(let p=0;p!==n;++p)e[u+p]=e[d+p]}++r}}if(o>0){t[r]=t[o];for(let a=o*n,l=r*n,c=0;c!==n;++c)e[l+c]=e[a+c];++r}return r!==t.length?(this.times=t.slice(0,r),this.values=e.slice(0,r*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Gr;class Vi extends hn{constructor(t,e,n){super(t,e,n)}}Vi.prototype.ValueTypeName="bool";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=no;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;class Uc extends hn{}Uc.prototype.ValueTypeName="color";class lo extends hn{}lo.prototype.ValueTypeName="number";class tm extends xo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)qe.slerpFlat(o,0,r,c-a,r,c,l);return o}}class pe extends hn{InterpolantFactoryMethodLinear(t){return new tm(this.times,this.values,this.getValueSize(),t)}}pe.prototype.ValueTypeName="quaternion";pe.prototype.InterpolantFactoryMethodSmooth=void 0;class Wi extends hn{constructor(t,e,n){super(t,e,n)}}Wi.prototype.ValueTypeName="string";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=no;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class ni extends hn{}ni.prototype.ValueTypeName="vector";class ls{constructor(t="",e=-1,n=[],i=sa){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=zi(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let r=0,a=n.length;r!==a;++r)e.push(nm(n[r]).scale(i));const o=new this(t.name,t.duration,e,t.blendMode);return o.uuid=t.uuid,o}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let o=0,r=n.length;o!==r;++o)e.push(hn.toJSON(n[o]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const o=e.length,r=[];for(let a=0;a<o;a++){let l=[],c=[];l.push((a+o-1)%o,a,(a+1)%o),c.push(0,1,0);const h=K0(l);l=Tl(l,1,h),c=Tl(c,1,h),!i&&l[0]===0&&(l.push(o),c.push(c[0])),r.push(new lo(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,r)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},o=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(o);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return r}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,p,g,x){if(p.length!==0){const m=[],f=[];Bc(p,m,f,g),m.length!==0&&x.push(new d(u,m,f))}},i=[],o=t.name||"default",r=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let x=0;x<u[g].morphTargets.length;x++)p[u[g].morphTargets[x]]=-1;for(const x in p){const m=[],f=[];for(let b=0;b!==u[g].morphTargets.length;++b){const S=u[g];m.push(S.time),f.push(S.morphTarget===x?1:0)}i.push(new lo(".morphTargetInfluence["+x+"]",m,f))}l=p.length*r}else{const p=".bones["+e[d].name+"]";n(ni,p+".position",u,"pos",i),n(pe,p+".quaternion",u,"rot",i),n(ni,p+".scale",u,"scl",i)}}return i.length===0?null:new this(o,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const o=this.tracks[n];e=Math.max(e,o.times[o.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function em(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return lo;case"vector":case"vector2":case"vector3":case"vector4":return ni;case"color":return Uc;case"quaternion":return pe;case"bool":case"boolean":return Vi;case"string":return Wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function nm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=em(s.type);if(s.times===void 0){const e=[],n=[];Bc(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}class _s extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class im extends _s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ko=new ce,Al=new D,Cl=new D;class Nc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Al.setFromMatrixPosition(t.matrixWorld),e.position.copy(Al),Cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cl),e.updateMatrixWorld(),Ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Rl=new ce,ts=new D,Zo=new D;class sm extends Nc{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),ts.setFromMatrixPosition(t.matrixWorld),n.position.copy(ts),Zo.copy(n.position),Zo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Zo),n.updateMatrixWorld(),i.makeTranslation(-ts.x,-ts.y,-ts.z),Rl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rl)}}class om extends _s{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new sm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class rm extends Nc{constructor(){super(new ra(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ni extends _s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new rm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class pa extends _s{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class am{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Pl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Pl(){return performance.now()}class lm{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,o,r;switch(e){case"quaternion":i=this._slerp,o=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,o=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,o=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=o,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,o=t*i+i;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[o+a]=n[a];r=e}else{r+=e;const a=e/r;this._mixBufferRegion(n,o,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,o=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,o<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-o,e)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let o=n,r=i;o!==r;++o)e[o]=e[i+o%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,o){if(i>=.5)for(let r=0;r!==o;++r)t[e+r]=t[n+r]}_slerp(t,e,n,i){qe.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,o){const r=this._workIndex*o;qe.multiplyQuaternionsFlat(t,r,t,e,t,n),qe.slerpFlat(t,e,t,e,t,r,i)}_lerp(t,e,n,i,o){const r=1-i;for(let a=0;a!==o;++a){const l=e+a;t[l]=t[l]*r+t[n+a]*i}}_lerpAdditive(t,e,n,i,o){for(let r=0;r!==o;++r){const a=e+r;t[a]=t[a]+t[n+r]*i}}}const ma="\\[\\]\\.:\\/",cm=new RegExp("["+ma+"]","g"),ga="[^"+ma+"]",hm="[^"+ma.replace("\\.","")+"]",dm=/((?:WC+[\/:])*)/.source.replace("WC",ga),um=/(WCOD+)?/.source.replace("WCOD",hm),fm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ga),pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ga),mm=new RegExp("^"+dm+um+fm+pm+"$"),gm=["material","materials","bones","map"];class xm{constructor(t,e,n){const i=n||ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=n.length;i!==o;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ee{constructor(t,e,n){this.path=e,this.parsedPath=n||ee.parseTrackName(e),this.node=ee.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ee.Composite(t,e,n):new ee(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(cm,"")}static parseTrackName(t){const e=mm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const o=n.nodeName.substring(i+1);gm.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(o){for(let r=0;r<o.length;r++){const a=o[r];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let o=e.propertyIndex;if(t||(t=ee.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const r=t[i];if(r===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ee.Composite=xm;ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ee.prototype.GetterByBindingType=[ee.prototype._getValue_direct,ee.prototype._getValue_array,ee.prototype._getValue_arrayElement,ee.prototype._getValue_toArray];ee.prototype.SetterByBindingTypeAndVersioning=[[ee.prototype._setValue_direct,ee.prototype._setValue_direct_setNeedsUpdate,ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_array,ee.prototype._setValue_array_setNeedsUpdate,ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_arrayElement,ee.prototype._setValue_arrayElement_setNeedsUpdate,ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_fromArray,ee.prototype._setValue_fromArray_setNeedsUpdate,ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class _m{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const o=e.tracks,r=o.length,a=new Array(r),l={endingStart:Si,endingEnd:Si};for(let c=0;c!==r;++c){const h=o[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=wh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,o=t._clip.duration,r=o/i,a=i/o;t.warp(1,r,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,o=i.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=o,l[1]=o+n,c[0]=t/r,c[1]=e/r,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const o=this._startTime;if(o!==null){const l=(t-o)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const r=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Sh:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(r),c[h].accumulateAdditive(a);break;case sa:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(r),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,o=this._loopCount;const r=n===bh;if(t===0)return o===-1?i:r&&(o&1)===1?e-i:i;if(n===Mh){o===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(o===-1&&(t>=0?(o=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,o+=Math.abs(a);const l=this.repetitions-o;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=o,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(r&&(o&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Ei,i.endingEnd=Ei):(t?i.endingStart=this.zeroSlopeAtStart?Ei:Si:i.endingStart=io,e?i.endingEnd=this.zeroSlopeAtEnd?Ei:Si:i.endingEnd=io)}_scheduleFading(t,e,n){const i=this._mixer,o=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=o,l[0]=e,a[1]=o+t,l[1]=n,this}}const vm=new Float32Array(1);class ym extends oi{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,o=i.length,r=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==o;++d){const u=i[d],p=u.name;let g=h[p];if(g!==void 0)++g.referenceCount,r[d]=g;else{if(g=r[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const x=e&&e._propertyBindings[d].binding.parsedPath;g=new lm(ee.create(n,p,x),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),r[d]=g}a[d].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,o=this._actionsByClip[i];this._bindAction(t,o&&o.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const o=e[n];o.useCount++===0&&(this._lendBinding(o),o.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const o=e[n];--o.useCount===0&&(o.restoreOriginalState(),this._takeBackBinding(o))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,o=this._actionsByClip;let r=o[e];if(r===void 0)r={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,o[e]=r;else{const a=r.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),r.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const o=t._clip.uuid,r=this._actionsByClip,a=r[o],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=a.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],l.length===0&&delete r[o],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const o=e[n];--o.referenceCount===0&&this._removeInactiveBinding(o)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,o=e[i];t._cacheIndex=i,e[i]=t,o._cacheIndex=n,e[n]=o}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,o=e[i];t._cacheIndex=i,e[i]=t,o._cacheIndex=n,e[n]=o}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,o=this._bindings;let r=i[e];r===void 0&&(r={},i[e]=r),r[n]=t,t._cacheIndex=o.length,o.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,o=n.path,r=this._bindingsByRootAndName,a=r[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[o],Object.keys(a).length===0&&delete r[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,o=e[i];t._cacheIndex=i,e[i]=t,o._cacheIndex=n,e[n]=o}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,o=e[i];t._cacheIndex=i,e[i]=t,o._cacheIndex=n,e[n]=o}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Fc(new Float32Array(2),new Float32Array(2),1,vm),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,o=e[i];t.__cacheIndex=i,e[i]=t,o.__cacheIndex=n,e[n]=o}clipAction(t,e,n){const i=e||this._root,o=i.uuid;let r=typeof t=="string"?ls.findByName(i,t):t;const a=r!==null?r.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=sa),l!==void 0){const d=l.actionByRoot[o];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const h=new _m(this,r,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,o),h}existingAction(t,e){const n=e||this._root,i=n.uuid,o=typeof t=="string"?ls.findByName(n,t):t,r=o?o.uuid:t,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,o=Math.sign(t),r=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,o,r);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,o=i[n];if(o!==void 0){const r=o.knownActions;for(let a=0,l=r.length;a!==l;++a){const c=r[a];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,o=i[e];if(o!==void 0)for(const r in o){const a=o[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$r}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$r);const Oc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Xi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Mm=new ra(-1,1,1,-1,0,1);class wm extends Pe{constructor(){super(),this.setAttribute("position",new ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ie([0,2,0,0,2,0],2))}}const bm=new wm;class xa{constructor(t){this._mesh=new L(bm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Mm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Sm extends Xi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fs.clone(t.uniforms),this.material=new Ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new xa(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Il extends Xi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class Em extends Xi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Tm{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new It);this._width=n.width,this._height=n.height,e=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Sm(Oc),this.copyPass.material.blending=bn,this.clock=new am}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Il!==void 0&&(r instanceof Il?n=!0:r instanceof Em&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Am extends Xi{constructor(t,e,n=null,i=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new yt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=i}}const Cm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Oi extends Xi{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new yt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(o,r,{type:Sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new sn(o,r,{type:Sn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new sn(o,r,{type:Sn});p.texture.name="UnrealBloomPass.v"+d,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),r=Math.round(r/2)}const a=Cm;this.highPassUniforms=fs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ce({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new It(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Oc;this.copyUniforms=fs.clone(h.uniforms),this.blendMaterial=new Ce({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:er,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new yt,this.oldClearAlpha=1,this.basic=new He,this.fsQuad=new xa(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new It(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Oi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Oi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ce({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ce({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Oi.BlurDirectionX=new It(1,0);Oi.BlurDirectionY=new It(0,1);const Rm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Pm extends Xi{constructor(){super();const t=Rm;this.uniforms=fs.clone(t.uniforms),this.material=new $0({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new xa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===te&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ql?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Kr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ec?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===nc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const es={fov:35,height:38,rotationSmoothing:.06,positionSmoothing:.1,lookAheadDistance:6};class Im{constructor(){R(this,"camera");R(this,"targetPos",new D);R(this,"cameraAngle",0);this.camera=new De(es.fov,window.innerWidth/window.innerHeight,5,800)}follow(t,e,n){let i=n-this.cameraAngle;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;this.cameraAngle+=i*es.rotationSmoothing;const o=Math.sin(this.cameraAngle)*-28,r=-Math.cos(this.cameraAngle)*-28;this.targetPos.set(t.x+o,t.y+es.height,t.z+r),this.camera.position.lerp(this.targetPos,es.positionSmoothing);const l=e.length()>.5?e.clone().normalize().multiplyScalar(es.lookAheadDistance):new D(0,0,0),c=t.clone().add(l);c.y+=2,this.camera.lookAt(c)}}class Dm{constructor(){R(this,"boxes",[])}addBox(t,e,n,i){this.boxes.push({cx:t,cz:e,hw:n,hd:i})}resolveCircle(t,e,n){let i=t,o=e;for(const r of this.boxes){const a=r.hw+n,l=r.hd+n,c=i-r.cx,h=o-r.cz;if(Math.abs(c)<a&&Math.abs(h)<l){const d=a-Math.abs(c),u=l-Math.abs(h);d<u?i+=c<0?-d:d:o+=h<0?-u:u}}return{x:i,z:o}}}let Wr=null,ps=null;async function Lm(){async function t(e){const n=new Image;return new Promise(i=>{n.onload=()=>i(n.naturalWidth>0?n:null),n.onerror=()=>{console.warn("[LogoLoader] failed:",e),i(null)},n.src=e})}[Wr,ps]=await Promise.all([t("./tem-logo.jpg"),t("./tem-logo-white.jpg")]),console.log("[LogoLoader] black-on-white:",!!Wr,"| white-on-black:",!!ps)}function kc(s){const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d"),i=s>>16&255,o=s>>8&255,r=s&255,l=.299*i+.587*o+.114*r<128,c=l?ps:Wr;if(c){n.drawImage(c,0,0,256,256);const h=n.getImageData(0,0,256,256),d=h.data;for(let u=0;u<d.length;u+=4){const p=.299*d[u]+.587*d[u+1]+.114*d[u+2];l?d[u+3]=Math.round(Math.min(255,p*1.4)):d[u+3]=Math.round(Math.min(255,(255-p)*1.4))}n.putImageData(h,0,0)}else Bm(n,256,l);return new xs(e)}function zc(s=512){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d");if(ps){e.drawImage(ps,0,0,s,s);const n=e.getImageData(0,0,s,s),i=n.data;for(let o=0;o<i.length;o+=4){const r=.299*i[o]+.587*i[o+1]+.114*i[o+2];i[o+3]=Math.round(Math.min(255,r*1.5))}e.putImageData(n,0,0)}else e.strokeStyle="#FFFFFF",e.fillStyle="#FFFFFF",Gc(e,s);return new xs(t)}function Bm(s,t,e){s.strokeStyle=e?"#FFFFFF":"#111111",s.fillStyle=e?"#FFFFFF":"#111111",Gc(s,t)}function Gc(s,t){const e=t/256;s.save(),s.scale(e,e),s.lineCap="round",s.lineWidth=6,s.beginPath(),s.arc(128,128,118,0,Math.PI*2),s.stroke(),s.lineWidth=11,s.beginPath(),s.moveTo(128,225),s.lineTo(128,148),s.stroke(),s.lineWidth=7,s.beginPath(),s.moveTo(128,148),s.lineTo(128,96),s.stroke();const n=[[128,178,76,152],[128,178,180,152],[128,160,64,134],[128,160,192,134],[128,142,76,116],[128,142,180,116],[128,124,88,99],[128,124,168,99],[128,110,98,84],[128,110,158,84],[128,98,110,70],[128,98,146,70],[128,88,118,56],[128,88,138,56]];s.lineWidth=4;for(const[i,o,r,a]of n)s.beginPath(),s.moveTo(i,o),s.lineTo(r,a),s.stroke(),s.beginPath(),s.arc(r,a,5,0,Math.PI*2),s.fill();s.restore()}class Fm{constructor(){R(this,"renderer");R(this,"scene");R(this,"camera");R(this,"collisionWorld",new Dm);R(this,"composer");R(this,"clouds",[]);R(this,"updateCallbacks",[]);R(this,"lastTime",0);R(this,"C",{modernGrey:13157564,warmGrey:12103846,terracotta:12884602,deepClay:10516568,softWhite:15262940,charcoal:4868682,warmCream:13945272,oliveGreen:9083754,ironRed:12674667})}async init(){this.renderer=new la({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Kl,this.renderer.toneMapping=Kr,this.renderer.toneMappingExposure=1.1,document.body.appendChild(this.renderer.domElement),this.renderer.domElement.style.position="relative",this.renderer.domElement.style.zIndex="1",this.scene=new ca,this.scene.fog=new go(8900331,.0025),this.camera=new Im,this.scene.add(this.camera.camera),this.composer=new Tm(this.renderer),this.composer.addPass(new Am(this.scene,this.camera.camera));const t=new Oi(new It(window.innerWidth,window.innerHeight),.3,.4,.85);this.composer.addPass(t),this.composer.addPass(new Pm);const e=new pa(16777215,.5);this.scene.add(e);const n=new Ni(16774368,1.4);n.position.set(80,120,40),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=.5,n.shadow.camera.far=600,n.shadow.camera.left=-300,n.shadow.camera.right=300,n.shadow.camera.top=300,n.shadow.camera.bottom=-300,n.shadow.bias=-.001,this.scene.add(n);const i=new Ni(16771280,.5);i.position.set(-60,40,-80),this.scene.add(i);const o=new im(8900331,8943462,.3);this.scene.add(o),this.createCityGround(),this.createCity(),this.createTEHouses(),this.buildWorkshop(10,15),this.createZebraCrossings(),this.createRoadCorners(),this.createStreetFurniture(),this.createSkyDome(),this.createClouds(),this.createPuddles(),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),this.camera.camera.aspect=window.innerWidth/window.innerHeight,this.camera.camera.updateProjectionMatrix()})}seed(t,e,n=0){const i=Math.sin(t*127.1+e*311.7+n*74.3)*43758.5453123;return i-Math.floor(i)}getZone(t,e){return Math.abs(t)<80&&Math.abs(e)<80?"cbd":t<-80?"footscray":t>80?"richmond":e<-80?"stkilda":"brunswick"}pickBuildingType(t,e){const n={cbd:[.5,.5,.9,1,1],footscray:[0,.2,.2,.4,1],brunswick:[.3,.6,.6,1,1],richmond:[.3,.3,.6,1,1],stkilda:[0,.3,.3,.7,1]},i=n[t]??n.brunswick,o=["A","B","C","D","E"];for(let r=0;r<i.length;r++)if(e<i[r])return o[r];return"D"}createCityGround(){const o=new j({color:8947840}),r=new L(new de(2048,2048),o);r.rotation.x=-Math.PI/2,r.position.y=0,r.receiveShadow=!0,this.scene.add(r);const a={cbd:8947840,footscray:7824981,brunswick:8943462,richmond:8026224,stkilda:9080960};for(let l=-240;l<240;l+=40)for(let c=-240;c<240;c+=40){const h=l+20,d=c+40/2,u=this.getZone(h,d),g=this.seed(l,c,0)<.15?5929546:a[u],x=new j({color:g}),m=new L(new de(30,30),x);m.rotation.x=-Math.PI/2,m.position.set(h,.005,d),m.receiveShadow=!0,this.scene.add(m)}}createCity(){const i=new j({color:2763306}),o=new j({color:16777215}),r=new j({color:15777856}),a=new j({color:13156528}),l=32;for(let c=-240;c<=240;c+=40){const d=new L(new de(480,8),i);d.rotation.x=-Math.PI/2,d.position.set(0,.01,c),d.receiveShadow=!0,this.scene.add(d);for(let u=-240;u<240;u+=40){const p=u+20;for(const g of[-1,1]){const x=new L(new de(l,2),a);x.rotation.x=-Math.PI/2,x.position.set(p,.02,c+g*(8/2+1)),x.receiveShadow=!0,this.scene.add(x)}}for(const u of[-1,1]){const p=new L(new de(480,.2),r);p.rotation.x=-Math.PI/2,p.position.set(0,.03,c+u*(8/2-.3)),this.scene.add(p)}for(let u=-240;u<=240;u+=8){const p=new L(new de(4,.15),o);p.rotation.x=-Math.PI/2,p.position.set(u,.03,c),this.scene.add(p)}for(let u=-240;u<=240;u+=20)for(const p of[-1,1]){const g=u+(this.seed(u,c,50+p)-.5)*2,x=c+p*5.5,m=(g%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,x,u*10+p,c*10+1)}for(let u=-232;u<240;u+=17){const p=this.seed(u,c,60);if(p>.45){const g=p>.72?1:-1,x=u+(this.seed(u,c,61)-.5)*4,m=c+g*(8/2+2);this.addParkedCar(x,m,u+g*3,c+7,Math.PI/2)}}}for(let c=-240;c<=240;c+=40){const d=new L(new de(8,480),i);d.rotation.x=-Math.PI/2,d.position.set(c,.01,0),d.receiveShadow=!0,this.scene.add(d);for(let u=-240;u<240;u+=40){const p=u+20;for(const g of[-1,1]){const x=new L(new de(2,l),a);x.rotation.x=-Math.PI/2,x.position.set(c+g*(8/2+1),.02,p),x.receiveShadow=!0,this.scene.add(x)}}for(const u of[-1,1]){const p=new L(new de(.2,480),r);p.rotation.x=-Math.PI/2,p.position.set(c+u*(8/2-.3),.03,0),this.scene.add(p)}for(let u=-240;u<=240;u+=8){const p=new L(new de(.15,4),o);p.rotation.x=-Math.PI/2,p.position.set(c,.03,u),this.scene.add(p)}for(let u=-240;u<=240;u+=20)for(const p of[-1,1]){const g=c+p*5.5,x=u+(this.seed(c,u,52+p)-.5)*2,m=(x%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,x,c*10+2,u*10+p)}for(let u=-232;u<240;u+=17){const p=this.seed(c,u,62);if(p>.45){const g=p>.72?1:-1,x=c+g*(8/2+2),m=u+(this.seed(c,u,63)-.5)*4;this.addParkedCar(x,m,c+9,u+g*3,0)}}}for(let c=-240;c<240;c+=40)for(let h=-240;h<240;h+=40)this.populateBlock(c,h,40,8)}addTree(t,e,n,i){const o=this.seed(n,i,99),r=o<.15?"palm":o<.5?"round":"layered",a=2+o*1.5,l=new j({color:6045747}),c=new L(new Vt(.25,.35,a,7),l);if(c.position.set(t,a/2,e),c.castShadow=!0,this.scene.add(c),r==="palm"){const h=new L(new Vt(.15,.22,6,6),new j({color:9139029}));h.position.set(t,3,e),this.scene.add(h);for(let d=0;d<6;d++){const u=d/6*Math.PI*2,p=new L(new Q(.15,.08,2.5),new j({color:2775578}));p.position.set(t+Math.cos(u)*1.2,6.5,e+Math.sin(u)*1.2),p.rotation.y=u,p.rotation.z=.4,this.scene.add(p)}}else if(r==="layered"){const h=[2973229,3829306,4881994];for(let d=0;d<3;d++){const u=2.2-d*.5,p=new L(new Nn(u,2,8),new j({color:h[d]}));p.position.set(t,a+1+d*1.5,e),p.castShadow=!0,this.scene.add(p)}}else{const h=o>.7?4025917:2973229,d=[[0,0,0],[.8,-.3,.5],[-.7,-.2,.3],[.3,.4,-.6],[-.4,.3,-.5]];for(let u=0;u<d.length;u++){const[p,g,x]=d[u],m=1.8+this.seed(n+u*17,i+u*13,103)*.8,f=new L(new fe(m,7,6),new j({color:h}));f.position.set(t+p,a+2.5+g,e+x),f.castShadow=!0,this.scene.add(f)}}}addParkedCar(t,e,n,i,o=0){const r=[13382451,3364300,11184810,14540253,2236962],a=Math.floor(this.seed(n,i,20)*r.length),l=new j({color:r[a]}),c=new L(new Q(1.5,1.2,3),l);c.position.set(t,.6,e),c.rotation.y=o,this.scene.add(c);const h=new j({color:2241348}),d=new L(new Q(1.4,.5,.1),h),u=-.9*Math.sin(o),p=-.9*Math.cos(o);d.position.set(t+u,1.3,e+p),d.rotation.y=o,this.scene.add(d)}populateBlock(t,e,n,i){const o=n-i-4,r=t+n/2,a=e+n/2,l=this.getZone(r,a),c=1+Math.floor(this.seed(t,e,1)*2);for(let h=0;h<c;h++){const d=this.seed(t+h*3,e+h*7,3),u=this.pickBuildingType(l,d);if(u==="E"){h===0&&this.buildTypeE(r,a,t,e);break}const p=o*.18,g=c>1?h===0?-p:p:0,x=g+(this.seed(t+h*5,e,4)-.5)*p*.3,m=g+(this.seed(t,e+h*5,5)-.5)*p*.3,f=t+h*11,b=e+h*13;switch(u){case"A":this.buildTypeA(r+x,a+m,f,b);break;case"B":this.buildTypeB(r+x,a+m,f,b);break;case"C":this.buildTypeC(r+x,a+m,f,b);break;case"D":this.buildTypeD(r+x,a+m,f,b);break}}}addBox(t,e,n,i,o,r,a,l,c=0,h=0,d=0){const u=new L(new Q(n,i,o),new j({color:e}));u.position.set(r,a,l),c!==0&&(u.rotation.x=c),h!==0&&(u.rotation.y=h),d!==0&&(u.rotation.z=d),u.castShadow=!0,u.receiveShadow=!0,t.add(u)}addCyl(t,e,n,i,o,r,a,l,c){const h=new L(new Vt(n,i,o,r),new j({color:e}));h.position.set(a,l,c),h.castShadow=!0,h.receiveShadow=!0,t.add(h)}registerBuildingCollider(t,e,n,i,o,r){const a=Math.floor(this.seed(o,r,101)*4)%4,l=a===1||a===3;this.collisionWorld.addBox(t,e,l?i:n,l?n:i)}buildTypeA(t,e,n,i){const o=this.C,r=new Ut;this.addBox(r,o.modernGrey,16,10,14,0,5,0),this.addBox(r,o.softWhite,16.4,.6,14.4,0,10.3,0);for(const d of[-5,0,5])this.addCyl(r,o.charcoal,.3,.3,3,6,d,1.5,-7);this.addBox(r,o.charcoal,14,.4,.4,0,3,-7);for(const d of[-4.5,0,4.5])this.addGlassBox(r,2241348,2.5,1.8,.15,d,7,-6.93);this.addBox(r,o.deepClay,14,.5,1.2,0,.25,-7.6),this.addBox(r,o.oliveGreen,13,.4,1,0,.7,-7.6);const a=this.seed(n,i,400),l=new j({color:a>.5?12876352:4876938}),c=new L(new Q(14,.1,1.5),l);c.position.set(0,3.8,-7.75),c.rotation.x=.15,r.add(c);const h=new L(new Q(14,.3,.08),l);h.position.set(0,3.45,-8.45),r.add(h),this.addBox(r,14210252,.8,.5,.08,-6.5,1,-7.05),this.addRooftopDetails(r,16,14,10,n,i),r.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),r.position.set(t,0,e),this.scene.add(r),this.registerBuildingCollider(t,e,8.5,7.5,n,i)}buildTypeB(t,e,n,i){const o=this.C,r=new Ut;this.addBox(r,o.deepClay,14.5,8.2,12.5,.3,4,.3),this.addBox(r,o.terracotta,14,8,12,0,4,0),this.addBox(r,o.terracotta,14.6,1.2,12.6,0,8.6,0),this.addBox(r,o.softWhite,15,.3,13,0,9.35,0);for(const a of[-3,3]){this.addBox(r,o.softWhite,1.6,2.6,.1,a,5,-5.99),this.addGlassBox(r,2241348,1.2,2.2,.2,a,5,-5.75);for(const l of[4.3,5,5.7])this.addBox(r,o.charcoal,1,.08,.12,a,l,-5.68)}this.addBox(r,o.charcoal,2,3,.2,0,1.5,-6.1),this.addBox(r,o.charcoal,1.5,.4,.2,0,3.2,-6.1),this.addBox(r,o.charcoal,1,.4,.2,0,3.7,-6.1),this.addBox(r,o.deepClay,2,.4,.6,0,.2,-6.6),this.addBox(r,o.oliveGreen,1.8,.1,.5,0,.45,-6.6),this.addBox(r,13938826,.8,.5,.08,-5,1,-6.05),this.addRooftopDetails(r,14,12,8,n,i),r.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),r.position.set(t,0,e),this.scene.add(r),this.registerBuildingCollider(t,e,7.5,6.5,n,i)}buildTypeC(t,e,n,i){const o=this.C,r=new Ut,a=30+Math.floor(this.seed(n,i,31)*20);this.addBox(r,o.modernGrey,8,4,8,0,2,0),this.addBox(r,4478310,7.5,3.5,7.5,0,2,0),this.addBox(r,3359829,7,a,7,0,a/2,0);for(let l=4;l<=a;l+=4)this.addBox(r,o.warmGrey,7.3,.2,7.3,0,l,0);this.addBox(r,o.charcoal,4,3,4,0,a+1.5,0),r.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),r.position.set(t,0,e),this.scene.add(r),this.registerBuildingCollider(t,e,4.5,4.5,n,i)}buildTypeD(t,e,n,i){const o=this.C,r=new Ut;this.addBox(r,o.warmCream,13,7,11,0,3.5,0),this.addBox(r,o.softWhite,13.5,.5,11.5,0,7.25,0),this.addBox(r,o.softWhite,2.8,3.8,1.6,0,4,-6.2),this.addBox(r,o.warmCream,2.5,3.5,1.5,0,4,-6.25);for(const a of[-.8,0,.8])this.addGlassBox(r,3359829,.7,2.5,.2,a,4,-7);this.addBox(r,o.deepClay,2.2,3.2,.3,0,1.6,-5.65),this.addBox(r,o.deepClay,1.8,.4,.3,0,3.35,-5.65),this.addBox(r,o.deepClay,1.2,.4,.3,0,3.8,-5.65);for(const a of[-3.5,3.5])this.addBox(r,o.softWhite,1.8,1.5,.1,a,5.5,-5.5),this.addGlassBox(r,3359829,1.5,1.2,.15,a,5.5,-5.55);this.addBox(r,o.deepClay,11,1,.3,0,.5,-6.65),this.addBox(r,14997960,.8,.5,.08,-5,1,-5.55),this.addRooftopDetails(r,13,11,7,n,i),r.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),r.position.set(t,0,e),this.scene.add(r),this.registerBuildingCollider(t,e,7,6,n,i)}buildTypeE(t,e,n,i){this.C;const o=new Ut,r=12*Math.PI/180;this.addBox(o,6974050,22,4,18,0,2,0),this.addBox(o,1710614,22.1,.3,18.1,0,.15,0);const a=new L(new Q(22.5,.3,10),new j({color:1973786}));a.castShadow=!0,a.receiveShadow=!0,a.rotation.x=r,a.position.set(0,4.5,-4.5),o.add(a);const l=new L(new Q(22.5,.3,10),new j({color:1973786}));l.castShadow=!0,l.receiveShadow=!0,l.rotation.x=-r,l.position.set(0,4.5,4.5),o.add(l),this.addBox(o,1118480,22.5,.5,.6,0,5.2,0);for(const p of[-2,.5,3])this.addBox(o,1118480,22.2,.08,.1,0,3.5,p);this.addBox(o,1118480,4.5,3.5,.2,0,1.75,-9.1),this.addBox(o,2236960,.15,3.5,.2,-2.4,1.75,-9.1),this.addBox(o,2236960,.15,3.5,.2,2.4,1.75,-9.1),this.addBox(o,3359829,8,.8,.15,-11.075,3.5,0),this.addCyl(o,1118480,.1,.1,4,5,-11,2,-9);const c=this.seed(n,i,401),h=new j({color:c>.5?12876352:4876938}),d=new L(new Q(8,.1,1.5),h);d.position.set(0,4.2,-9.85),d.rotation.x=.15,o.add(d);const u=new L(new Q(8,.3,.08),h);u.position.set(0,3.85,-10.6),o.add(u);for(const p of[-3.5,3.5]){const g=new L(new Vt(.06,.06,4,5),new j({color:5592400}));g.position.set(p,2,-10.55),o.add(g)}this.addRooftopDetails(o,22,18,5.2,n,i),o.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),o.position.set(t,0,e),this.scene.add(o),this.registerBuildingCollider(t,e,11.5,9.5,n,i)}createTEHouses(){this.buildHouseMarbellino(20,20),this.collisionWorld.addBox(20,20,10,7.5),this.buildHousePorthole(-60,20),this.collisionWorld.addBox(-60,20,8,6.5),this.buildHouseTerracotta(20,-60),this.collisionWorld.addBox(20,-60,9,7),this.buildHouseLoggia(-60,-60),this.collisionWorld.addBox(-60,-60,10,7.5),this.buildHouseRokka(60,-20),this.collisionWorld.addBox(60,-20,11,8),this.buildHouseTimberStone(100,60),this.collisionWorld.addBox(100,60,11,7),this.buildHouseSculpturalPlaster(-100,-20),this.collisionWorld.addBox(-100,-20,8,6),this.buildHouseHaussmann(60,-100),this.collisionWorld.addBox(60,-100,11,7),this.buildHouseAngularBay(-140,60),this.collisionWorld.addBox(-140,60,9,6.5),this.buildHouseBrutalistCompound(20,100),this.collisionWorld.addBox(20,100,12,5),this.buildHouseTerracottaMonolith(140,20),this.collisionWorld.addBox(140,20,10,5),this.buildHouseCurvedBalcony(-20,-140),this.collisionWorld.addBox(-20,-140,8,6),this.buildHouseCortenPlaster(-140,-60),this.collisionWorld.addBox(-140,-60,10,5.5),this.buildCoffeeShop(-60,-100),this.collisionWorld.addBox(-60,-100,7,5),this.buildToiletBlock(100,60),this.collisionWorld.addBox(100,60,6,5)}buildHouseMarbellino(t,e){const n=new Ut;this.addBox(n,13945786,18,4,14,0,2,0),this.addBox(n,2763306,20,4,15,0,7,0);for(const i of[-8,-5,-2,1,4,7])this.addBox(n,1710618,.15,4,15,i,7,0);this.addBox(n,3355443,20.5,.5,15.5,0,9.25,0),this.addBox(n,3359829,10,.9,.15,0,3.5,-7.1),this.addBox(n,13157564,10.4,1.1,.1,0,3.5,-7.05);for(const i of[-4,0,4]){const o=new L(new Q(1.5,2.5,.15),new j({color:4478310,emissive:new yt(2241348),emissiveIntensity:.3}));o.position.set(i,7.5,-7.6),n.add(o)}this.addBox(n,1710618,5,3.8,.2,-5.5,1.9,-7.1),this.addBox(n,13157564,2,.3,1,4,.15,-7.5),this.addBox(n,9072736,14,.4,1,0,.2,-8),this.addBox(n,5929546,12,.6,.8,0,.6,-8),n.position.set(t,0,e),this.scene.add(n)}buildHousePorthole(t,e){const n=new Ut;this.addBox(n,12104876,16,5.5,13,0,2.75,0),this.addBox(n,9134144,7,5.5,.3,3.5,2.75,-6.65);for(let i=0;i<5;i++){const o=(i-2)*1.2;this.addBox(n,6965280,7,.2,.4,3.5,2.75+o,-6.55,0,0,Math.PI/7.2)}this.addBox(n,13157564,16.5,.3,13.5,0,5.65,0),this.addBox(n,2763306,17,.5,14,0,5.95,0);{const i=new L(new Vt(1.4,1.4,.15,16),new j({color:8947848}));i.rotation.x=Math.PI/2,i.position.set(-4,3.5,-6.7),n.add(i)}{const i=new L(new Vt(1.1,1.1,.1,16),new j({color:2241348,emissive:new yt(1122867),emissiveIntensity:.5}));i.rotation.x=Math.PI/2,i.position.set(-4,3.5,-6.65),n.add(i)}this.addBox(n,3359829,3.5,1.2,.15,1,3.5,-6.7),this.addBox(n,3359829,3.5,1.2,.15,5,3.5,-6.7),this.addBox(n,3811866,1.8,2.8,.3,-6,1.4,-6.8),this.addBox(n,8947848,2.2,3,.2,-6,1.4,-6.65),this.addBox(n,3828282,10,.7,.8,0,.35,-7.5),n.position.set(t,0,e),this.scene.add(n)}buildHouseTerracotta(t,e){const n=new Ut;this.addBox(n,10121296,17.6,7.2,14.6,0,3.5,0),this.addBox(n,12884602,17,7,14,0,3.5,0),this.addBox(n,12884602,17.8,1.5,14.8,0,7.75,0),this.addBox(n,15262940,18.2,.3,15.2,0,8.65,0),this.addBox(n,9068608,2.4,3.5,.3,0,1.75,-7.1),this.addBox(n,9068608,2,.5,.3,0,3.75,-7.1),this.addBox(n,9068608,1.4,.5,.3,0,4.25,-7.1),this.addBox(n,9068608,1.4,2.8,.5,-4,4,-7.2),this.addBox(n,2241348,1,2.4,.15,-4,4,-7.05),this.addBox(n,15262940,1.6,3,.15,-4,4,-6.98);for(const i of[3.2,4,4.8])this.addBox(n,3355443,.9,.08,.15,-4,i,-7.1);this.addBox(n,9068608,1.4,2.8,.5,4,4,-7.2),this.addBox(n,2241348,1,2.4,.15,4,4,-7.05),this.addBox(n,15262940,1.6,3,.15,4,4,-6.98);for(const i of[3.2,4,4.8])this.addBox(n,3355443,.9,.08,.15,4,i,-7.1);for(const i of[-2,2])this.addBox(n,3359829,.15,1.5,1,8.58,4,i),this.addBox(n,3359829,.15,1.5,1,-8.58,4,i);this.addBox(n,10516568,2.5,.5,.8,-4,.25,-7.5),this.addBox(n,10516568,2.5,.5,.8,4,.25,-7.5),this.addBox(n,5933642,2,.5,.6,-4,.65,-7.5),this.addBox(n,5933642,2,.5,.6,4,.65,-7.5);for(const i of[-6,-2,2,6])this.addBox(n,15262940,.8,.8,.2,i,8.4,-7.4);n.position.set(t,0,e),this.scene.add(n)}buildHouseLoggia(t,e){const n=new Ut;this.addBox(n,11578532,20,6,15,0,3,0),this.addBox(n,10131088,20.5,.4,15.5,0,6.2,0),this.addBox(n,10131088,20,.4,3,0,3.2,-10);for(const i of[-7,-3,3,7])this.addCyl(n,8947840,.2,.2,3.2,8,i,1.6,-11);this.addBox(n,3359829,14,2,.2,0,4,-7.5),this.addBox(n,13157564,14.4,2.2,.15,0,4,-7.4);for(const i of[-5,0,5])this.addBox(n,8947840,.15,2,.2,i,4,-7.5);{const i=new L(new Q(2.4,2.8,.2),new j({color:3359829,emissive:new yt(1120290),emissiveIntensity:.2}));i.position.set(5,1.4,-7.5),n.add(i)}this.addBox(n,8947840,2.8,3,.15,5,1.4,-7.4),this.addBox(n,9074784,18,.5,2.5,0,.25,-9),this.addBox(n,4880970,16,.7,2,0,.65,-9),this.addBox(n,8947840,20,.3,.3,0,3.1,-10.2),this.addBox(n,8947840,20,.3,.3,0,3.1,-11.8),n.position.set(t,0,e),this.scene.add(n)}buildHouseRokka(t,e){const n=new Ut;this.addBox(n,12892314,22,4.5,16,0,2.25,0),this.addBox(n,10128506,22.5,.3,9,0,4.75,-3.5,Math.PI*8/180,0,0),this.addBox(n,10128506,22.5,.3,9,0,4.75,3.5,-Math.PI*8/180,0,0),this.addBox(n,6969928,22.5,.6,.8,0,5.1,0),this.addBox(n,10127472,22.5,1,16.5,0,.5,0);{const i=new L(new Q(6,3.2,.2),new j({color:3359829,emissive:new yt(1120290),emissiveIntensity:.3}));i.position.set(0,1.6,-8.1),n.add(i)}this.addBox(n,8022618,6.4,3.5,.15,0,1.75,-8);for(const i of[-2,0,2])this.addBox(n,8947824,.1,3.2,.2,i,1.6,-8.1);this.addBox(n,8947824,6,.1,.2,0,2.2,-8.1),this.addBox(n,3359829,2.5,1.5,.2,-7,3,-8.1),this.addBox(n,3359829,2.5,1.5,.2,7,3,-8.1),this.addBox(n,11575432,.8,4.5,.8,-3.5,2.25,-8.2),this.addBox(n,11575432,.8,4.5,.8,3.5,2.25,-8.2),this.addCyl(n,6969928,.1,.1,4.5,5,-11,2.25,-8),this.addCyl(n,6969928,.1,.1,4.5,5,11,2.25,-8),this.addBox(n,11575432,20,.8,.3,0,.4,-10),n.position.set(t,0,e),this.scene.add(n)}buildHouseTimberStone(t,e){const n=new Ut;this.addBox(n,8947840,22,4,14,0,2,0),this.addBox(n,6710880,22.2,.4,14.2,0,.2,0),this.addBox(n,12088362,22,4.5,13,0,6.25,0);for(let i=0;i<8;i++)this.addBox(n,10116634,22.1,.12,13.1,0,4.3+i*.57,0);this.addBox(n,4870229,5,8.5,14.2,8.5,4.25,0);for(let i=0;i<12;i++){const o=i%2===0?3817541:5593696;this.addBox(n,o,5.1,.3,14.3,8.5,.5+i*.65,0)}this.addBox(n,2763306,22.5,.5,14.5,0,8.75,0);for(const i of[-6,-2,2]){this.addBox(n,1710618,2.8,3.2,.2,i,6,-6.6);const o=new L(new Q(2.4,2.9,.15),new j({color:9087675,emissive:new yt(2770005),emissiveIntensity:.2}));o.position.set(i,6,-6.6),n.add(o)}this.addBox(n,1710618,13,.15,.5,-3,8,-6.8),this.addBox(n,10140364,12.5,.8,.1,-3,7.6,-6.75);for(const i of[-7,-4.5])this.addBox(n,1710618,2.2,1.8,.2,i,2,-7.1),this.addBox(n,3359829,1.8,1.5,.15,i,2,-7);this.addBox(n,6962202,1.8,3.2,.2,2.5,1.6,-7.1),this.addBox(n,12092938,.12,.12,.15,3.1,1.6,-7.1),this.addBox(n,1710618,4,.15,2.5,2.5,3.5,-7.3),this.addCyl(n,1710618,.06,.06,3.5,5,1,1.75,-8.2),this.addCyl(n,1710618,.06,.06,3.5,5,4,1.75,-8.2),this.addBox(n,1710618,8,.18,6,-9,4.1,-5),this.addCyl(n,1118481,.12,.12,4.1,6,-6.5,2.05,-7.8),this.addCyl(n,1118481,.12,.12,4.1,6,-11.5,2.05,-7.8),this.addBox(n,10066329,2,.8,3.5,-9.5,.4,-4.5),this.addBox(n,11184810,1.9,.3,3.4,-9.5,.9,-4.5);for(let i=5;i<=13;i+=.7)this.addBox(n,1710618,.12,1.6,.12,i,.8,-8.5);this.addBox(n,6710880,20,.8,.3,0,.4,-9.5),this.addBox(n,4870229,20,.35,.4,0,.18,-9.5);for(let i=0;i<5;i++)this.addBox(n,14540236,1.4,.08,.7,5,.05,-10.2+i*.9);this.addBox(n,4880954,8,.1,3,5,0,-9.8);for(const[i,o]of[[3.5,-8.5],[6.5,-8]]){this.addCyl(n,5912608,.12,.15,2.5,6,i,1.25,o);const r=new L(new Nn(1,2.2,7),new j({color:3828266}));r.position.set(i,2.8,o),n.add(r)}this.addBox(n,1710618,3.5,1.8,.2,7.5,6.5,-6.6),this.addBox(n,3359829,3,1.5,.15,7.5,6.5,-6.55),n.position.set(t,0,e),this.scene.add(n)}buildHouseSculpturalPlaster(t,e){const n=new Ut,i=8686698,o=6976085,r=11842732,a=1118481;this.addBox(n,i,14,5.5,12,-3,2.75,0),this.addBox(n,i,7,3.5,12,9,1.75,0),this.addBox(n,o,.3,5.6,12,2.85,2.75,0);const l=new L(new Q(11,.35,12.4),new j({color:i}));l.rotation.z=22*Math.PI/180,l.position.set(.5,8,0),n.add(l);const c=new L(new Q(7.5,.35,12.4),new j({color:r}));c.rotation.z=-52*Math.PI/180,c.position.set(-6.2,8.2,0),n.add(c),this.addBox(n,o,.6,.6,12.4,-3.2,10,0),this.addBox(n,1710618,2.3,4,.5,-3,2,-6.25),this.addBox(n,a,2.6,4.3,.2,-3,2.1,-6.05);const h=new L(new Q(2,3.6,.12),new j({color:2767428,emissive:new yt(661538),emissiveIntensity:.3}));h.position.set(-3,2.1,-6.1),n.add(h),this.addBox(n,1710618,1.6,1.6,.4,8.5,2,-6.2),this.addBox(n,a,1.8,1.8,.18,8.5,2,-6.05),this.addBox(n,a,.4,.4,.4,-6.5,4.2,-6.05),this.addBox(n,a,.4,.4,.4,6.5,3.4,-6.05);for(const p of[-6.5,6.5]){const g=new L(new Q(.5,.08,.3),new j({color:16772812,emissive:new yt(16764040),emissiveIntensity:.6}));g.position.set(p,p===-6.5?3.95:3.15,-6.07),n.add(g)}const d=8.5,u=-11;for(let p=-4;p<=4;p++){const g=p/4*40*Math.PI/180,x=d*Math.sin(g),m=u+d*(Math.cos(g)-1),f=new L(new Q(2,1.2,.35),new j({color:i}));f.rotation.y=g,f.position.set(x,.6,m),n.add(f);const b=new L(new Q(2,.12,.45),new j({color:12631720}));b.rotation.y=g,b.position.set(x,1.26,m),n.add(b)}this.addBox(n,o,2.5,.2,1,-3,.1,-7.5),n.position.set(t,0,e),this.scene.add(n)}buildHouseHaussmann(t,e){const n=new Ut,i=15261384,o=15788244,r=13154972,a=1118481;this.addBox(n,i,22,9.5,14,0,4.75,0);for(let h=0;h<5;h++)this.addBox(n,r,22.3,.14,14.3,0,.5+h*.88,0);for(let h=0;h<4;h++)this.addBox(n,r,22.3,.12,14.3,0,5.4+h*.85,0);this.addBox(n,o,22.6,.5,14.6,0,4.75,0),this.addBox(n,r,22.8,.2,14.8,0,5.05,0),this.addBox(n,i,22.5,.3,14.5,0,5.25,0),this.addBox(n,i,23.2,.5,15.2,0,9.75,0),this.addBox(n,o,22.8,.8,14.8,0,10.15,0),this.addBox(n,r,23.4,.25,15.4,0,10.55,0),this.addBox(n,o,4,11.5,4,-10,5.75,-6);for(let h=0;h<6;h++)this.addBox(n,r,4.2,.12,4.2,-10,.5+h*1.75,-6);this.addBox(n,i,4.4,.4,4.4,-10,5,-6),this.addBox(n,i,4.6,.4,4.6,-10,11.3,-6),this.addBox(n,o,4.4,.6,4.4,-10,11.75,-6),this.addBox(n,r,4.8,.25,4.8,-10,12.12,-6),this.addBox(n,i,2.5,1,2.5,-10,12.75,-6);for(const h of[-6.5,-1,4.5]){this.addBox(n,r,2,4.2,.5,h,2.1,-7.25),this.addBox(n,o,1.7,4,.2,h,2.1,-7.05);const d=new L(new Q(1.35,3.5,.12),new j({color:9087931,emissive:new yt(1714739),emissiveIntensity:.15}));d.position.set(h,2.1,-7),n.add(d),this.addBox(n,o,1.7,.12,.15,h,3.2,-7.05)}for(const h of[-6.5,4.5]){this.addBox(n,r,2,3.8,.5,h,7.5,-7.25),this.addBox(n,o,1.7,3.5,.2,h,7.5,-7.05);const d=new L(new Q(1.35,3,.12),new j({color:9087931,emissive:new yt(1714739),emissiveIntensity:.15}));d.position.set(h,7.5,-7),n.add(d),this.addBox(n,o,1.7,.12,.15,h,8.5,-7.05),this.addBox(n,i,3.4,.28,1.4,h,5.66,-7.9),this.addBox(n,r,3.5,.45,1.5,h,5.38,-7.95);for(let u=0;u<5;u++){const p=h-1.3+u*.65;this.addBox(n,a,.07,1,.07,p,6.2,-8.4)}this.addBox(n,a,3.2,.09,.09,h,6.72,-8.4),this.addBox(n,a,3.2,.09,.09,h,5.82,-8.4),this.addBox(n,a,.07,1,.07,h-1.3,6.2,-8.4,0,0,.35),this.addBox(n,a,.07,1,.07,h+1.3,6.2,-8.4,0,0,-.35)}this.addBox(n,o,5,6.5,.22,9.5,3.75,-7.05);const l=new L(new Q(4.5,6,.12),new j({color:9087931,emissive:new yt(1714739),emissiveIntensity:.12}));l.position.set(9.5,3.75,-7),n.add(l);for(let h=0;h<3;h++)this.addBox(n,o,5,.1,.15,9.5,1+h*2,-7);for(const h of[7.5,9.5,11.5])this.addBox(n,o,.1,6,.15,h,3.75,-7);this.addBox(n,r,3.8,5.5,.6,1.5,2.75,-7.4),this.addBox(n,o,2.8,4.8,.2,1.5,2.4,-7.1);const c=new L(new Q(2.2,4.2,.12),new j({color:9087931,emissive:new yt(660768),emissiveIntensity:.2}));c.position.set(1.5,2.4,-7.05),n.add(c),this.addBox(n,13937232,.1,.1,.1,2.4,2.2,-7.06),this.addBox(n,r,22.5,.3,14.5,0,.15,0),n.position.set(t,0,e),this.scene.add(n)}buildHouseAngularBay(t,e){const n=new Ut,i=15789022,o=12876378,r=3809296,a=1118481;this.addBox(n,i,18,4,13,0,2,0),this.addBox(n,i,18,4,12,0,6,0),this.addBox(n,i,8,4,2.5,5,6,-7.25),this.addBox(n,i,3,10,2.5,6.5,5,-7.5),this.addBox(n,o,10,.5,14,-4.5,8.5,0,0,0,.44),this.addBox(n,o,10,.5,14,4.5,8.5,0,0,0,-.44),this.addBox(n,r,1.5,.5,14.5,0,10.5,0),this.addBox(n,r,19,.3,13.5,0,8.05,0),this.addBox(n,r,19,.2,1.2,0,8.05,-7.3);for(const l of[-6.5,0])this.addBox(n,15658734,2.6,2,.12,l,1.8,-6.56),this.addBox(n,3359829,2.2,1.6,.15,l,1.8,-6.5);for(const l of[-6.5,0])this.addBox(n,15658734,2.6,2,.12,l,5.8,-6.56),this.addBox(n,3359829,2.2,1.6,.15,l,5.8,-6.5);for(let l=0;l<4;l++)this.addBox(n,a,.08,1,.08,-8.5+l*.65,5.5,-6.7);this.addBox(n,a,2.4,.08,.08,-7.02,6.05,-6.7),this.addBox(n,a,2.4,.08,.08,-7.02,5,-6.7),n.position.set(t,0,e),this.scene.add(n)}buildHouseBrutalistCompound(t,e){const n=new Ut,i=10524792,o=8947840;this.addBox(n,i,7,7,11,-8.5,3.5,0),this.addBox(n,i,6,5,10,-1,2.5,.5),this.addBox(n,i,6,6,11,5.5,3,-.5),this.addBox(n,i,5,4,9,11,2,0),this.addBox(n,i,24,1.5,9,0,.75,.5),this.addBox(n,o,4,.25,2.5,-8.5,7.25,-6.2),this.addBox(n,o,4,.25,2.5,5.5,6.25,-6.2),this.addBox(n,2241348,4,5.5,.15,-8.5,3.5,-5.6),this.addBox(n,2241348,3.5,4.5,.15,5.5,3,-5.6),this.addBox(n,i,8,5,.4,2,2.5,-6.5,0,.26,0);const r=14,a=9,l=-Math.PI*.35,c=Math.PI*.35;for(let h=0;h<a;h++){const d=h/(a-1),u=l+(c-l)*d,p=Math.sin(u)*r,g=Math.cos(u)*r-r+4;this.addBox(n,i,3.5,1.5,.4,p,.75,g,0,-u,0)}for(const h of[-3,2.5]){this.addCyl(n,5913114,.15,.2,3,5,h,1.5,-4);const d=new L(new fe(1.2,6,5),new j({color:3828266}));d.position.set(h,4,-4),n.add(d)}n.position.set(t,0,e),this.scene.add(n)}buildHouseTerracottaMonolith(t,e){const n=new Ut,i=12284e3,o=2759194,r=4880954;this.addBox(n,i,20,3,.5,0,1.5,-9.5),this.addBox(n,o,20.2,.1,.55,0,1,-9.5),this.addBox(n,o,20.2,.1,.55,0,2,-9.5),this.addBox(n,i,20,6,10,0,3,-2),this.addBox(n,o,20.2,.1,10.1,0,2,-2),this.addBox(n,o,20.2,.1,10.1,0,4,-2),this.addBox(n,i,20.3,.4,10.3,0,6.2,-2),this.addBox(n,r,18,.3,1.8,0,.15,-7.5);for(let a=-8;a<=8;a+=2.5){const l=new L(new Nn(.2,.8,5),new j({color:5933642}));l.position.set(a,.55,-7.5),n.add(l)}this.addBox(n,1118481,1.2,3.5,.2,0,3.5,-7.05),this.addBox(n,2241348,.8,3,.15,0,3.5,-7),n.position.set(t,0,e),this.scene.add(n)}buildHouseCurvedBalcony(t,e){const n=new Ut,i=15261900,o=15789544,r=11053216,a=1118481;this.addBox(n,i,16,4,12,0,2,0),this.addBox(n,o,16,4,12,0,6,0),this.addBox(n,o,16.5,.3,12.5,0,8.15,0),this.addBox(n,a,16.6,.2,12.6,0,8.3,0);const l=5,c=14,h=-Math.PI*.5,d=Math.PI*.5;for(let u=0;u<c;u++){const p=u/(c-1),g=h+(d-h)*p,x=Math.sin(g)*l,m=-Math.cos(g)*l-3.5;this.addBox(n,r,1.3,2,.5,x,5.5,m,0,-g,0)}for(const u of[-5,0,5])this.addBox(n,4473924,2.5,2,.15,u,1.8,-6.1),this.addBox(n,2241348,2,1.6,.12,u,1.8,-6);this.addCyl(n,a,.1,.1,8,5,-8,4,-6.1),this.addCyl(n,a,.1,.1,8,5,8,4,-6.1),this.addBox(n,a,.3,.3,.3,-2,2.5,-6.15),this.addBox(n,o,17,.25,1.5,0,8,-7.2,.1,0,0),this.addBox(n,a,17.2,.1,1.6,0,8.12,-7.2,.1,0,0),n.position.set(t,0,e),this.scene.add(n)}buildHouseCortenPlaster(t,e){const n=new Ut,i=4868682,o=12081696,r=3684408,a=9060368;this.addBox(n,i,12,8,11,-7,4,0),this.addBox(n,i,12.3,.4,11.3,-7,8.2,0),this.addBox(n,o,8,8.5,11,5,4.25,0),this.addBox(n,o,8.3,.4,11.3,5,8.7,0),this.addBox(n,r,2,9.5,11,-.5,4.75,0);for(let c=0;c<6;c++)this.addBox(n,a,.15,8.5,11.1,1.5+c*1.2,4.25,0);this.addCyl(n,13421704,.15,.15,.5,6,-5,5,-5.6),this.addCyl(n,13421704,.15,.15,.5,6,-9,5,-5.6),this.addBox(n,1118481,2.5,1.8,.3,-6,4.5,-5.7),this.addBox(n,2241348,2,1.4,.15,-6,4.5,-5.6),this.addBox(n,1118481,2.5,1.8,.3,-10,2.5,-5.7),this.addBox(n,2241348,2,1.4,.15,-10,2.5,-5.6),this.addCyl(n,9132587,.2,.3,8,6,-15,4,-3);const l=new L(new Nn(2.5,1.5,8),new j({color:2775578}));l.position.set(-15,8.75,-3),n.add(l),n.position.set(t,0,e),this.scene.add(n)}buildCoffeeShop(t,e){const n=new Ut;this.addBox(n,15788248,14,4,10,0,2,0),this.addBox(n,15261904,14.2,.18,10.2,0,4.09,0),this.addBox(n,1118481,14.6,.38,10.6,0,4.19,0);for(const o of[-3.8,3.8]){this.addBox(n,1118481,4,3.8,.14,o,2.1,-5.08);const r=new L(new Q(3.5,3.4,.1),new j({color:13140032,emissive:new yt(10115616),emissiveIntensity:.7}));r.position.set(o,2.1,-5.06),n.add(r)}this.addBox(n,1118481,2,3,.14,0,1.5,-5.08),this.addBox(n,8014368,1.6,2.8,.2,0,1.4,-5.1),this.addBox(n,13410400,.1,.1,.12,.5,1.4,-5.1),this.addBox(n,12876352,13.5,.28,4,0,3.22,-7),this.addBox(n,10770984,13.5,.6,.18,0,2.95,-9.05);for(const o of[-4.5,0,4.5])this.addCyl(n,8947832,.07,.07,3,5,o,1.5,-9.1);this.addBox(n,16777215,5,.36,.12,0,3.06,-8.96);for(const[o,r]of[[-5,-11.5],[0,-11.5],[5,-11.5]]){this.addCyl(n,9068608,.75,.75,.1,12,o,1.12,r),this.addCyl(n,6963232,.07,.07,1.12,6,o,.56,r);for(const a of[-1,1])this.addCyl(n,9068608,.32,.32,.09,8,o+a*.85,.82,r),this.addCyl(n,6963232,.05,.05,.82,5,o+a*.85,.41,r)}for(let o=0;o<5;o++)this.addCyl(n,16777215,.22-o*.008,.24-o*.008,.3,8,7.1,.22+o*.28,-3.5);this.addBox(n,3355445,1.1,1.7,.12,-3.5,1.1,-5.1),this.addBox(n,15658734,.72,.08,.05,-3.5,1.6,-5.04),this.addBox(n,15658734,.55,.08,.05,-3.5,1.42,-5.04),this.addBox(n,15658734,.63,.08,.05,-3.5,1.24,-5.04),this.addBox(n,15658734,.48,.08,.05,-3.5,1.06,-5.04);for(const o of[-4,0,4]){const r=new L(new Q(.25,.25,.25),new j({color:16764040,emissive:new yt(16755268),emissiveIntensity:.8}));r.position.set(o,3.7,-2),n.add(r)}this.addCyl(n,3355443,.3,.3,12,8,0,6,-8);const i=new L(new Q(10,3,.4),new j({color:13918762,emissive:new yt(9121808),emissiveIntensity:.6}));i.position.set(0,13,-8),i.castShadow=!0,n.add(i),this.addBox(n,16777215,8,.2,.5,0,14.2,-7.85),this.addBox(n,16777215,8,.2,.5,0,12.8,-7.85),this.addCyl(n,16777215,.8,1,1.5,12,0,15.5,-8),this.addCyl(n,7027242,.4,.4,.3,8,0,16.4,-8),n.position.set(t,0,e),this.scene.add(n)}buildWorkshop(t,e){const n=new Ut,i=4868676,o=2236960,r=15657176,a=3355440,l=1118480;this.addBox(n,i,30,8,20,0,4,0),this.addBox(n,1710616,30.2,.35,20.2,0,.18,0);const c=12*Math.PI/180,h=new j({color:o}),d=new L(new Q(30.5,.35,11),h);d.castShadow=!0,d.rotation.x=c,d.position.set(0,8.6,-4.5),n.add(d);const u=new L(new Q(30.5,.35,11),h);u.castShadow=!0,u.rotation.x=-c,u.position.set(0,8.6,4.5),n.add(u),this.addBox(n,1118480,30.5,.55,.8,0,9.3,0),this.addBox(n,r,24,3.2,.45,0,7.4,-10.23),this.addBox(n,a,22,2.5,.28,0,7.4,-10.25),this.addBox(n,16775920,24.2,.22,.46,0,9.11,-10.23),this.addBox(n,16775920,24.2,.22,.46,0,5.89,-10.23),this.addBox(n,16775920,.22,3.2,.46,-12.11,7.4,-10.23),this.addBox(n,16775920,.22,3.2,.46,12.11,7.4,-10.23),this.addBox(n,12674667,24,.3,.44,0,5.75,-10.22),this.addBox(n,16763972,8,.65,.35,0,5.5,-10.2),this.addBox(n,2763296,7.5,.42,.38,0,5.5,-10.21),this.addBox(n,l,12,5,.25,0,2.5,-10.15),this.addBox(n,2236960,.2,5,.25,-6.2,2.5,-10.15),this.addBox(n,2236960,.2,5,.25,6.2,2.5,-10.15);for(let y=1;y<=4;y++)this.addBox(n,1710616,11.8,.08,.28,0,y,-10.14);this.addBox(n,2236960,12.6,.4,.28,0,5.2,-10.14);const p=3359829;for(let y=-6;y<=6;y+=4)this.addBox(n,p,.16,1.2,2.8,15.09,7.2,y),this.addBox(n,p,.16,1.2,2.8,-15.09,7.2,y);this.addBox(n,2236960,.2,.18,20,15.1,7.9,0),this.addBox(n,2236960,.2,.18,20,15.1,6.6,0),this.addBox(n,2236960,.2,.18,20,-15.1,7.9,0),this.addBox(n,2236960,.2,.18,20,-15.1,6.6,0),this.addCyl(n,2236960,.12,.12,8,5,-15,4,-10),this.addCyl(n,2236960,.12,.12,8,5,15,4,-10),this.addCyl(n,2236960,.12,.12,8,5,-15,4,10),this.addCyl(n,2236960,.12,.12,8,5,15,4,10),this.addCyl(n,12884602,.85,.9,1.5,10,9.5,.75,-11.5),this.addCyl(n,6974050,.85,.9,1.5,10,9.5,2.35,-11.5),this.addCyl(n,8947840,.92,.92,.12,10,9.5,1.56,-11.5),this.addCyl(n,8947840,.92,.92,.12,10,9.5,3.16,-11.5),this.addCyl(n,12884602,.85,.9,1.5,10,11.2,.75,-12.2),this.addCyl(n,8947840,.92,.92,.12,10,11.2,1.56,-12.2),this.addBox(n,8018488,4.5,.18,2.5,10.2,.09,-11.8),this.addBox(n,9074776,6,1,2.2,0,.5,-9.2),this.addBox(n,13154448,6.3,.18,2.4,0,1.09,-9.2),this.addBox(n,15658700,.8,.05,1,.8,1.19,-9.3),this.addBox(n,4473924,.12,.25,.12,.8,1.22,-9),this.addBox(n,5921362,2.8,1.8,2.8,-8.5,.9,-11.5);const g=new L(new Vt(.75,.75,2.2,10),new j({color:8947840}));g.rotation.z=35*Math.PI/180,g.position.set(-8.5,1.6,-11.5),g.castShadow=!0,n.add(g),this.addCyl(n,3355440,.4,.4,.3,8,-8.5,.2,-10.8),this.addBox(n,4868676,3.5,2.2,2.5,-11.5,1.1,-13),this.addBox(n,8947840,3,.5,2,-11.5,2.35,-13),this.addBox(n,6710880,2.2,1.2,1.4,-11.5,3.1,-13);const x=new j({color:10131600}),m=new L(new de(20,8),x);m.rotation.x=-Math.PI/2,m.position.set(0,.008,-14),m.receiveShadow=!0,n.add(m),this.addBox(n,r,.3,2.5,6,15.16,4,0),this.addBox(n,a,.32,2,5.5,15.17,4,0);const f=zc(1024),b=new j({map:f,transparent:!0,depthWrite:!1}),S=new L(new de(14,14),b);S.position.set(0,4.5,-10.4),n.add(S),n.position.set(t,0,e),this.scene.add(n),this.collisionWorld.addBox(t,e,15.5,10.5)}createZebraCrossings(){const t=new j({color:15658734}),e=new j({color:1118481});for(let n=-200;n<=200;n+=40)for(let i=-200;i<=200;i+=40){if(Math.abs(n)>200||Math.abs(i)>200)continue;const o=[-3.2,-1.6,0,1.6,3.2],r=[-2.4,-.8,.8,2.4],a=2;for(const l of o){const c=new L(new Q(.8,.03,a),t);c.position.set(n+l,.05,i-5),this.scene.add(c)}for(const l of r){const c=new L(new Q(.8,.03,a),e);c.position.set(n+l,.04,i-5),this.scene.add(c)}for(const l of o){const c=new L(new Q(.8,.03,a),t);c.position.set(n+l,.05,i+5),this.scene.add(c)}for(const l of r){const c=new L(new Q(.8,.03,a),e);c.position.set(n+l,.04,i+5),this.scene.add(c)}for(const l of o){const c=new L(new Q(a,.03,.8),t);c.position.set(n-5,.05,i+l),this.scene.add(c)}for(const l of r){const c=new L(new Q(a,.03,.8),e);c.position.set(n-5,.04,i+l),this.scene.add(c)}for(const l of o){const c=new L(new Q(a,.03,.8),t);c.position.set(n+5,.05,i+l),this.scene.add(c)}for(const l of r){const c=new L(new Q(a,.03,.8),e);c.position.set(n+5,.04,i+l),this.scene.add(c)}}}createRoadCorners(){const t=new j({color:13156528}),e=new j({color:11051160}),n=[{dx:-6,dz:-6,theta:3*Math.PI/2},{dx:6,dz:-6,theta:Math.PI},{dx:-6,dz:6,theta:0},{dx:6,dz:6,theta:Math.PI/2}];for(let i=-200;i<=200;i+=40)for(let o=-200;o<=200;o+=40)for(const{dx:r,dz:a,theta:l}of n){const c=i+r,h=o+a,d=new L(new ha(2,24,l,Math.PI/2),t);d.rotation.x=-Math.PI/2,d.position.set(c,.021,h),d.receiveShadow=!0,this.scene.add(d);const u=new L(new ri(1.8,2,24,1,l,Math.PI/2),e);u.rotation.x=-Math.PI/2,u.position.set(c,.08,h),u.receiveShadow=!0,this.scene.add(u)}}onUpdate(t){this.updateCallbacks.push(t)}createSkyDome(){const t=new fe(800,32,16);t.scale(-1,1,1);const e=new Ce({uniforms:{topColor:{value:new yt(4491468)},bottomColor:{value:new yt(12970229)},offset:{value:100},exponent:{value:.8}},vertexShader:`
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
      `,side:Re,depthWrite:!1}),n=new L(t,e);this.scene.add(n)}createClouds(){const t=new j({color:16777215,transparent:!0,opacity:.85});for(let e=0;e<10;e++){const n=new Ut,i=3+Math.floor(Math.random()*4);for(let o=0;o<i;o++){const r=8+Math.random()*12,a=new L(new fe(r,7,5),t);a.position.set(o*15-i*7+(Math.random()-.5)*10,(Math.random()-.5)*8,(Math.random()-.5)*15),n.add(a)}n.position.set((Math.random()-.5)*600,80+Math.random()*60,(Math.random()-.5)*600),this.scene.add(n),this.clouds.push({mesh:n,speed:.3+Math.random()*.7})}}createPuddles(){const t=new j({color:8952234,transparent:!0,opacity:.35});for(let e=0;e<20;e++){const n=2+Math.random()*4,i=1+Math.random()*2,o=new L(new de(n,i),t);o.rotation.x=-Math.PI/2,o.position.set((Math.random()-.5)*300,.015,(Math.random()-.5)*300),this.scene.add(o)}}addRooftopDetails(t,e,n,i,o,r){const a=this.seed(o,r,200);if(a>.3){const l=new Ut;this.addBox(l,8947840,1.5,.6,1,0,0,0),this.addBox(l,6710880,1.5,.1,.8,0,.35,.05),l.position.set(e/2-2,i+.3,n/2-2),t.add(l)}if(a>.7&&i>8){const l=new L(new Vt(1,1,1.8,10),new j({color:9139029}));l.position.set(-e/2+2,i+.9,0),t.add(l);for(const[c,h]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]]){const d=new L(new Vt(.06,.06,1.5,4),new j({color:5592400}));d.position.set(-e/2+2+c,i+.1,h),t.add(d)}}if(a>.5&&a<.8){const l=new L(new fe(.4,8,4,0,Math.PI*2,0,Math.PI/2),new j({color:13421772}));l.position.set(e/2-1,i+.2,-n/2+1),l.rotation.x=-Math.PI/4,t.add(l)}if(a<.4){const l=new L(new Vt(.04,.04,3,4),new j({color:4473924}));l.position.set(0,i+1.5,0),t.add(l),this.addBox(t,4473924,2,.05,.05,0,i+2.5,0)}a>.4&&a<.6&&this.addBox(t,7829360,2,.4,.4,e/4,i+.2,-n/4)}addHydrant(t,e){const n=new Ut,i=new j({color:13378082}),o=new j({color:11145489}),r=new L(new Vt(.25,.28,.6,8),i);r.position.set(0,.3,0),n.add(r);const a=new L(new Vt(.18,.18,.12,8),o);a.position.set(0,.66,0),n.add(a);for(const l of[-1,1]){const c=new L(new Vt(.06,.06,.2,6),i);c.rotation.z=Math.PI/2,c.position.set(l*.3,.3,0),n.add(c)}n.position.set(t,0,e),this.scene.add(n)}addBin(t,e){const n=new Ut,i=new j({color:4473924}),o=new j({color:5592405}),r=new L(new Vt(.2,.22,.7,8),i);r.position.set(0,.35,0),n.add(r);const a=new L(new Vt(.22,.22,.08,8),o);a.position.set(0,.74,0),n.add(a),n.position.set(t,0,e),this.scene.add(n)}addBollard(t,e){const n=new Ut,i=new j({color:10066329}),o=new j({color:7829367}),r=new L(new Vt(.1,.1,.6,8),i);r.position.set(0,.3,0),n.add(r);const a=new L(new Vt(.14,.14,.08,8),o);a.position.set(0,.04,0),n.add(a),n.position.set(t,0,e),this.scene.add(n)}addBench(t,e,n=0){const i=new Ut,o=new j({color:9134144}),r=new j({color:5592405}),a=new L(new Q(1.2,.1,.4),o);a.position.set(0,.45,0),i.add(a);for(const c of[-.5,.5]){const h=new L(new Q(.05,.4,.4),r);h.position.set(c,.2,0),i.add(h)}const l=new L(new Q(1.2,.3,.08),o);l.position.set(0,.75,-.16),i.add(l),i.rotation.y=n,i.position.set(t,0,e),this.scene.add(i)}addBusStop(t,e,n=0){const i=new Ut,o=new j({color:13421772}),r=new j({color:4482730,transparent:!0,opacity:.7}),a=new L(new Vt(.05,.05,3.5,6),o);a.position.set(0,1.75,0),i.add(a);const l=new L(new Q(2,.05,.8),r);l.position.set(0,3.3,.4),i.add(l);const c=new L(new Q(.05,2.5,.8),r);c.position.set(0,2,0),i.add(c),i.rotation.y=n,i.position.set(t,0,e),this.scene.add(i)}addStreetLight(t,e,n=0,i=!1){const o=new Ut,r=new j({color:1118481}),a=new j({color:16771232,transparent:!0,opacity:.06}),l=new L(new Vt(.08,.1,6,6),r);l.position.set(0,3,0),o.add(l);const c=new L(new Q(.08,.08,1.5),r);c.position.set(0,6,-.75),c.rotation.x=-.2,o.add(c);const h=new L(new Q(.4,.15,.3),r);h.position.set(0,5.9,-1.4),o.add(h);const d=new L(new Nn(1.5,3,8,1,!0),a);if(d.rotation.x=Math.PI,d.position.set(0,4.4,-1.4),o.add(d),o.rotation.y=n,o.position.set(t,0,e),this.scene.add(o),i){const u=new om(16771232,.8,15);u.position.set(t+Math.sin(n+Math.PI)*1.4,5.9,e+Math.cos(n+Math.PI)*1.4),this.scene.add(u)}}addTrafficLight(t,e,n=0){const i=new Ut,o=new j({color:1118481}),r=new L(new Vt(.07,.09,4.5,6),o);r.position.set(0,2.25,0),i.add(r);const a=new L(new Q(.5,1.4,.4),o);a.position.set(0,4.7,0),i.add(a);const l=[16720384,16750848,52292];for(let c=0;c<3;c++){const h=new L(new Vt(.15,.15,.08,8),new j({color:l[c]}));h.rotation.x=Math.PI/2,h.position.set(0,5.25-c*.45,-.21),i.add(h)}i.rotation.y=n,i.position.set(t,0,e),this.scene.add(i)}createStreetLights(){let n=0;const i=20;for(let o=-160;o<=160;o+=40)for(let r=-160;r<=160;r+=20){const c=Math.sqrt(o*o+r*r)<80&&n<i,h=(r%40+40)%40;Math.min(h,40-h)>6&&(this.addStreetLight(r,o-5.2,0,c),this.addStreetLight(r,o+5.2,Math.PI,c),c&&(n+=2));const d=(r%40+40)%40;if(Math.min(d,40-d)>6&&(this.addStreetLight(o+5.2,r,Math.PI/2,c),this.addStreetLight(o-5.2,r,-Math.PI/2,c),c&&(n+=2)),n>=i)return}}createTrafficLights(){for(let i=-160;i<=160;i+=40)for(let o=-160;o<=160;o+=40)this.addTrafficLight(i-5.2,o-5.2,Math.PI/4),this.addTrafficLight(i+5.2,o-5.2,-Math.PI/4),this.addTrafficLight(i-5.2,o+5.2,3*Math.PI/4),this.addTrafficLight(i+5.2,o+5.2,-3*Math.PI/4)}createStreetFurniture(){for(let n=-160;n<=160;n+=40)for(let i=-160;i<=160;i+=20){const o=this.seed(n,i,300),r=this.seed(n,i,301);if(o>.4){const c=o>.7?1:-1,h=(this.seed(i,n,302)-.5)*4,d=(i%40+40)%40;Math.min(d,40-d)>8&&(r<.3?this.addHydrant(i+h,n+c*5.2):r<.5?this.addBin(i+h,n+c*5.2):r<.65?this.addBollard(i+h,n+c*5.2):r<.75&&this.addBench(i+h,n+c*5.2))}const a=this.seed(i,n,303),l=this.seed(i,n,304);if(a>.4){const c=a>.7?1:-1,h=(this.seed(n,i,305)-.5)*4,d=(i%40+40)%40;Math.min(d,40-d)>8&&(l<.3?this.addHydrant(n+c*5.2,i+h):l<.5?this.addBin(n+c*5.2,i+h):l<.65?this.addBollard(n+c*5.2,i+h):l<.75&&this.addBench(n+c*5.2,i+h,Math.PI/2))}}for(let n=-160;n<=160;n+=40)for(let i=-160;i<=160;i+=160){const o=(i%40+40)%40;Math.min(o,40-o)>8&&this.addBusStop(i,n+5.5,0);const r=(i%40+40)%40;Math.min(r,40-r)>8&&this.addBusStop(n+5.5,i,Math.PI/2)}this.createStreetLights(),this.createTrafficLights()}addGlassBox(t,e,n,i,o,r,a,l){const c=Math.random()>.6?new yt(2241348):new yt(1122867),h=new L(new Q(n,i,o),new j({color:e,emissive:c,emissiveIntensity:Math.random()*.4}));h.position.set(r,a,l),h.castShadow=!0,h.receiveShadow=!0,t.add(h)}buildToiletBlock(t,e){const n=new Ut;this.addBox(n,11577496,10,3.5,8,0,1.75,0),this.addBox(n,10064008,11,.3,9,0,3.65,0),this.addBox(n,2236960,1.6,2.4,.2,-2.2,1.2,-4.05),this.addBox(n,2236960,1.6,2.4,.2,2.2,1.2,-4.05),this.addBox(n,15263968,10.1,.4,8.1,0,1.8,0),this.addBox(n,3359829,8,.8,.15,0,3.1,-4.05),this.addBox(n,16777215,6,.2,.1,0,3.2,-4.03),this.addCyl(n,4473920,.15,.15,8,6,0,4,-5.5),this.addBox(n,2201331,4,1.5,.3,0,8.75,-5.5),this.addBox(n,16777215,3,.25,.1,0,9,-5.38),this.addBox(n,16777215,3,.25,.1,0,8.5,-5.38);const i=new j({color:6600182,emissive:new yt(1402304),emissiveIntensity:.4}),o=new L(new fe(.7,8,6),i);o.position.set(0,10.5,-5.5),n.add(o),n.position.set(t,0,e),this.scene.add(n)}start(){const t=e=>{const n=Math.min((e-this.lastTime)/1e3,.05);this.lastTime=e;for(const i of this.updateCallbacks)i(n);for(const i of this.clouds)i.mesh.position.x-=i.speed*n,i.mesh.position.x<-350&&(i.mesh.position.x=350);this.composer.render(),requestAnimationFrame(t)};requestAnimationFrame(t)}}const Hc=.9,kn={Matt:{name:"Matt",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:6044190,hairStyle:"short"},Jose:{name:"Jose",skinColor:12884592,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:657930,hairStyle:"dreadlocks"},Jarrad:{name:"Jarrad",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236976,hairColor:1710618,hairStyle:"short",glassesColor:2236962},Phil:{name:"Phil",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:3821696,hairColor:12632248,hairStyle:"silver",glassesColor:11053216},Tsuyoshi:{name:"Tsuyoshi",skinColor:12093528,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236960,hairColor:657930,hairStyle:"mohawk"},Fabio:{name:"Fabio",skinColor:12488288,shirtColor:1801924,shirtLogoColor:16777215,pantsColor:2631728,hairColor:1708040,hairStyle:"bun",glassesColor:2759176},Joe:{name:"Joe",skinColor:13934704,shirtColor:15777792,shirtLogoColor:1710618,pantsColor:2763320,hairColor:3811866,hairStyle:"short",helmetColor:16119280,hiVisBands:!0},Mikayla:{name:"Mikayla",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:1708064,hairColor:10035780,hairStyle:"bun"},Connie:{name:"Connie",skinColor:15255704,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:2763322,hairColor:16109664,hairStyle:"wildblonde"}};class vs{constructor(t){R(this,"group");R(this,"mixer");R(this,"walkAction");R(this,"idleAction");R(this,"currentAction");R(this,"logoMesh");this.group=new Ut,this._build(t),this.mixer=new ym(this.group);const e=this._buildWalkClip(),n=this._buildIdleClip();this.walkAction=this.mixer.clipAction(e),this.idleAction=this.mixer.clipAction(n),this.idleAction.play(),this.currentAction=this.idleAction}_build(t){const e=new Ze;e.name="Hip",e.position.set(0,1,0);const n=new Ze;n.name="Spine",n.position.set(0,.55,0);const i=new Ze;i.name="Head",i.position.set(0,.65,0);const o=new Ze;o.name="LShoulder",o.position.set(-.4,.38,0);const r=new Ze;r.name="LForeArm",r.position.set(0,-.36,0);const a=new Ze;a.name="RShoulder",a.position.set(.4,.38,0);const l=new Ze;l.name="RForeArm",l.position.set(0,-.36,0);const c=new Ze;c.name="LHip",c.position.set(-.16,-.05,0);const h=new Ze;h.name="LKnee",h.position.set(0,-.5,0);const d=new Ze;d.name="RHip",d.position.set(.16,-.05,0);const u=new Ze;u.name="RKnee",u.position.set(0,-.5,0),e.add(n),n.add(i),n.add(o),o.add(r),n.add(a),a.add(l),e.add(c),c.add(h),e.add(d),d.add(u),this.group.add(e);const p=S=>new j({color:S}),g=(S,y,I,A,T,P=0,M=0,_=0)=>{const C=new L(new Q(I,A,T),p(y));C.position.set(P,M,_),C.castShadow=!0,S.add(C)},x=(S,y,I,A,T=0,P=0,M=0)=>{const _=new L(new Vt(I,I,A,8),p(y));_.position.set(T,P,M),_.castShadow=!0,S.add(_)},m=(S,y,I,A=0,T=0,P=0)=>{const M=new L(new fe(I,10,8),p(y));M.position.set(A,T,P),M.castShadow=!0,S.add(M)};g(n,t.shirtColor,.5,.56,.28,0,.02,0),t.hiVisBands&&(g(n,16777215,.52,.06,.3,0,.18,0),g(n,16777215,.52,.06,.3,0,-.1,0));const f=this._makeLogo(t),b=new L(new de(.44,.5),new He({map:f,transparent:!0,depthWrite:!1}));b.position.set(0,.02,.145),n.add(b),this.logoMesh=b,g(e,t.pantsColor,.44,.2,.26,0,0,0),x(o,t.shirtColor,.08,.34,0,-.17,0),x(a,t.shirtColor,.08,.34,0,-.17,0),t.hiVisBands&&(g(o,16777215,.18,.06,.18,0,-.1,0),g(a,16777215,.18,.06,.18,0,-.1,0)),x(r,t.skinColor,.07,.3,0,-.15,0),x(l,t.skinColor,.07,.3,0,-.15,0),g(r,t.skinColor,.13,.11,.09,0,-.32,0),g(l,t.skinColor,.13,.11,.09,0,-.32,0),x(c,t.pantsColor,.11,.46,0,-.23,0),x(d,t.pantsColor,.11,.46,0,-.23,0),x(h,t.pantsColor,.09,.42,0,-.21,0),x(u,t.pantsColor,.09,.42,0,-.21,0),g(h,1710616,.19,.12,.24,0,-.46,.03),g(u,1710616,.19,.12,.24,0,-.46,.03),x(i,t.skinColor,.09,.16,0,-.08,0),m(i,t.skinColor,.21,0,.1,0),g(i,2236962,.055,.035,.02,-.07,.12,.2),g(i,2236962,.055,.035,.02,.07,.12,.2),this._buildHair(i,t,p),t.glassesColor!==void 0&&g(i,t.glassesColor,.24,.055,.015,0,.12,.21),t.helmetColor!==void 0&&(g(i,t.helmetColor,.5,.07,.5,0,.25,-.01),g(i,t.helmetColor,.38,.18,.38,0,.34,-.01))}_buildHair(t,e,n){const i=n(e.hairColor),o=(r,a,l,c)=>{const h=new L(r,i);h.position.set(a,l,c),t.add(h)};switch(e.hairStyle){case"short":case"silver":o(new fe(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),e.hairStyle==="silver"&&(o(new Q(.11,.18,.13),-.19,.06,0),o(new Q(.11,.18,.13),.19,.06,0));break;case"dreadlocks":o(new fe(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0);for(const[r,a]of[[-.12,0],[.12,0],[0,-.16],[-.08,-.1],[.08,-.1]])o(new Vt(.035,.022,.38,6),r,-.07,a);break;case"mohawk":o(new Q(.09,.26,.4),0,.28,0);break;case"bun":o(new fe(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),o(new fe(.09,7,6),0,.05,-.19);break;case"wildblonde":{o(new fe(.225,8,5,0,Math.PI*2,0,Math.PI*.55),0,.1,0);const r=[[-.2,-.18,.04,.3,0],[.2,-.18,.04,-.3,0],[-.14,-.22,-.14,.2,.15],[.14,-.22,-.14,-.2,.15],[0,-.26,-.18,0,0],[-.1,-.16,.16,-.15,0],[.1,-.16,.16,.15,0]];for(const[a,l,c,h,d]of r){const u=new L(new Vt(.045,.02,.5,5),i);u.position.set(a,l,c),u.rotation.z=h,u.rotation.x=d,t.add(u)}break}}}setLogoTexture(t){const e=this.logoMesh.material;e.map=t,e.needsUpdate=!0}_makeLogo(t){return kc(t.shirtColor)}_buildWalkClip(){const t=Math.PI/180,e=.8,n=[0,.2,.4,.6,.8],i=(o,r=0,a=0)=>Array.from(new qe().setFromEuler(new Ge(o*t,r*t,a*t)).toArray());return new ls("walk",e,[new pe("LHip.quaternion",n,[...i(-35),...i(0),...i(35),...i(0),...i(-35)]),new pe("RHip.quaternion",n,[...i(35),...i(0),...i(-35),...i(0),...i(35)]),new pe("LKnee.quaternion",n,[...i(-5),...i(-18),...i(-28),...i(-12),...i(-5)]),new pe("RKnee.quaternion",n,[...i(-28),...i(-12),...i(-5),...i(-18),...i(-28)]),new pe("LShoulder.quaternion",n,[...i(28,0,8),...i(0,0,8),...i(-28,0,8),...i(0,0,8),...i(28,0,8)]),new pe("RShoulder.quaternion",n,[...i(-28,0,-8),...i(0,0,-8),...i(28,0,-8),...i(0,0,-8),...i(-28,0,-8)]),new pe("Hip.quaternion",n,[...i(0,0,4),...i(0,0,0),...i(0,0,-4),...i(0,0,0),...i(0,0,4)]),new ni("Hip.position",n,[0,1.02,0,0,1,0,0,1.02,0,0,1,0,0,1.02,0])])}_buildIdleClip(){const t=Math.PI/180,e=2.4,n=[0,.6,1.2,1.8,2.4],i=(o,r=0,a=0)=>Array.from(new qe().setFromEuler(new Ge(o*t,r*t,a*t)).toArray());return new ls("idle",e,[new pe("Spine.quaternion",n,[...i(0,0,1),...i(0,0,0),...i(0,0,-1),...i(0,0,0),...i(0,0,1)]),new ni("Hip.position",n,[0,1,0,0,1.01,0,0,1,0,0,.99,0,0,1,0]),new pe("LShoulder.quaternion",[0,2.4],[...i(0,0,8),...i(0,0,8)]),new pe("RShoulder.quaternion",[0,2.4],[...i(0,0,-8),...i(0,0,-8)])])}buildJumpRopeClip(){const t=Math.PI/180,e=Hc,n=[0,.225,.45,.675,.9],i=(o,r=0,a=0)=>Array.from(new qe().setFromEuler(new Ge(o*t,r*t,a*t)).toArray());return new ls("jumprope",e,[new ni("Hip.position",n,[0,1,0,0,1.28,0,0,1,0,0,1.28,0,0,1,0]),new pe("LShoulder.quaternion",[0,.5],[...i(0,0,52),...i(0,0,52)]),new pe("RShoulder.quaternion",[0,.5],[...i(0,0,-52),...i(0,0,-52)]),new pe("LForeArm.quaternion",[0,.5],[...i(-20),...i(-20)]),new pe("RForeArm.quaternion",[0,.5],[...i(-20),...i(-20)]),new pe("LKnee.quaternion",n,[...i(-22),...i(-5),...i(-22),...i(-5),...i(-22)]),new pe("RKnee.quaternion",n,[...i(-22),...i(-5),...i(-22),...i(-5),...i(-22)]),new pe("Spine.quaternion",n,[...i(8),...i(2),...i(8),...i(2),...i(8)])])}setWalking(t){const e=t?this.walkAction:this.idleAction;e!==this.currentAction&&(e.reset().play(),this.currentAction.crossFadeTo(e,.2,!1),this.currentAction=e)}update(t){this.mixer.update(t)}}const Um={Jose:{x:-80,z:-40},Jarrad:{x:40,z:-80},Matt:{x:80,z:40},Phil:{x:-40,z:80},Tsuyoshi:{x:120,z:-40},Fabio:{x:-120,z:40},Joe:{x:0,z:-120}},Nm={Matt:["Troweled Earth is the best product on the market. Full stop. Don't argue.","Jose has a whole music room and a cigar collection but can't reply to a text message. That's the guy.","I've been up since 4am and done 80 square metres. How's your morning?","Jarrad's got opinions on how everyone else lives their life. Zero opinions on his own. Interesting.","Antique Stucco, Hemp Render, Tadelakt — I'll do all three before lunch.","Jose called himself Wall Jesus in front of a client. An actual client. I was standing right there.","Jarrad once sent me a 400-word message about something I said. I read the first line. Seemed about right.","Right. Tools out. Let's get this done."],Jose:["I didn't apply plaster. I gave the wall a soul. Big difference.","Matt is a great man. Big heart. Absolutely no volume control. You can hear him from the next suburb.","I was in my music room last night finishing a track. Then I invented a new finish. Big night.","My cigar costs more than your primer. It is worth it.","Jarrad sends meeting agendas. For conversations. Between two people. In a van.","Wall Jesus doesn't do touch-ups. Wall Jesus does originals.","Matt apologises for nothing. I respect it. Also it is sometimes a problem.","Other plasterers apply product. I apply vision. Light a cigar and watch."],Jarrad:["Did you read the TDS? Because I did. Yes. Moving on.","Jose has a whole spiritual identity built around being mysterious. He's from Footscray.","I'm not micro-managing. I'm preventing the disaster you are about to cause.","Matt once introduced himself to a client by saying 'I don't do small talk'. To their face. At the door.","Have you seen my sister? She's supposed to be here. She's doing jump rope.","I would do it myself but then nothing else would get done.","Jose lights a cigar every time he has a feeling. That man is constantly having feelings.","Mikayla borrowed my trowel again. I have a spare. I'm not lending that one."],Phil:["I've been in this game longer than some of these buildings.","Back in my day we didn't have sealers. We just hoped.","Forty years in plaster. My knees disagree with the timeline.","That's a nice van. My first van had a hole in the floor.","The youngsters think Marbellino is new. I did it before it had a name.","Seven year warranty. I've outlasted three of those already.","If the surface isn't right, no product will fix it. That's wisdom.","I'm too old for emergencies. Call Darren."],Tsuyoshi:["My trowel... she is like samurai sword. Must be respected.","In Japan, we say... actually this is different in Australia. But same feeling.","I study engineering. Also I study this wall. Both are... very complex.","The angle of application is most important. Like blade angle. Very critical.","I think about the wall much. The wall also thinks, I believe.","This surface... it is speaking to me. I will listen before I apply.","My sensei say: good craftsman blame tool. But I never blame my trowel. She is perfect.","One day I will design the building. And also I will plaster it. Both very satisfying."],Fabio:["In Italy, we do not rush the plaster. The plaster knows when it is ready.","I am Fabio. You have heard of me, yes?","This finish — she is like a woman. Gentle, then confident, then gentle again.","I have plastered villas in Tuscany. This job is also... acceptable.","The colour must be chosen with the soul, not the brain.","I put my heart into every wall. This is why I am tired. But beautiful tired.","Madonna mia, this surface... it has potential. Fabio will fix it.","Other men apply plaster. Fabio makes love to the wall. Artistically speaking."],Joe:["Don't judge me by the helmet. I contain multitudes.","Good honest work. That's all any of us can do.","I don't talk politics on site. But I do have a bumper sticker.","Hard work, good product, fair pay. That's the whole philosophy.","Free Palestine. That's all I'll say. Back to work.","I've been boycotting certain brands for three years. You'd be surprised.","The helmet stays on. Most of the opinions stay in.","Solid crew. Good product. Just don't ask me about the news."]},Om=15,km=12e3;class zm{constructor(t){R(this,"scene");R(this,"crewMap",new Map);R(this,"lastDialogue",new Map);R(this,"dialogueIndex",new Map);this.scene=t}spawnCrewAtCityPositions(){for(const[t,e]of Object.entries(Um)){const n=kn[t];if(!n)continue;const i=new vs(n);i.group.scale.set(2,2,2);const o=new Ut;o.add(i.group);const r=new L(new ri(1.2,1.6,32),new He({color:16763904,side:ze}));r.rotation.x=-Math.PI/2,r.position.y=.05,o.add(r);const a=document.createElement("canvas");a.width=256,a.height=64;const l=a.getContext("2d");l.fillStyle="rgba(0,0,0,0.75)",l.roundRect?l.roundRect(2,2,252,60,8):l.rect(2,2,252,60),l.fill(),l.fillStyle="#fff",l.font="bold 30px Arial",l.textAlign="center",l.textBaseline="middle",l.fillText(t.toUpperCase(),128,32);const c=new L(new de(2.2,.55),new He({map:new xs(a),transparent:!0,depthWrite:!1}));c.position.set(0,8.5,0),c.renderOrder=1,o.add(c),o.position.set(e.x,0,e.z),this.scene.add(o),this.crewMap.set(t,{character:i,wrapper:o,pos:e}),this.lastDialogue.set(t,0),this.dialogueIndex.set(t,Math.floor(Math.random()*8))}}updateAll(t){for(const{character:e}of this.crewMap.values())e.update(t)}checkProximityDialogue(t,e){const n=Date.now();for(const[i,{wrapper:o,pos:r}]of this.crewMap.entries()){if(!o.visible)continue;const a=t-r.x,l=e-r.z;if(Math.sqrt(a*a+l*l)>Om)continue;const c=this.lastDialogue.get(i)??0;if(n-c<km)continue;const h=Nm[i];if(!h)continue;const d=this.dialogueIndex.get(i)??0,u=h[d%h.length];return this.dialogueIndex.set(i,d+1),this.lastDialogue.set(i,n),{name:i,line:u,pos:r}}return null}hideCrew(t){const e=this.crewMap.get(t);e&&(e.wrapper.visible=!1)}showAllCrew(){for(const{wrapper:t}of this.crewMap.values())t.visible=!0}showCrew(t){const e=this.crewMap.get(t);e&&(e.wrapper.visible=!0)}getCrewPosition(t){var e;return((e=this.crewMap.get(t))==null?void 0:e.pos)??{x:0,z:0}}dispose(){for(const{wrapper:t}of this.crewMap.values())this.scene.remove(t);this.crewMap.clear()}}class Gm{constructor(t){R(this,"mesh");R(this,"velocity",new D);R(this,"heading",0);R(this,"bodyGroup");R(this,"suspensionY",0);R(this,"suspensionVel",0);this.mesh=new Ut,this.bodyGroup=new Ut,this.mesh.add(this.bodyGroup);const e=new j({color:1118481}),n=new L(new Q(2.4,1.6,3.2),e);n.position.set(0,.8,.8),n.castShadow=!0,n.receiveShadow=!0,this.bodyGroup.add(n);const i=new j({color:1579032}),o=new L(new Q(2.4,1.4,1.6),i);o.position.set(0,.7,-1.6),o.castShadow=!0,o.receiveShadow=!0,this.bodyGroup.add(o);const r=new j({color:2241348}),a=new L(new Q(2,1,.1),r);a.rotation.x=-.18,a.position.set(0,1.15,-2.36),a.castShadow=!0,a.receiveShadow=!0,this.bodyGroup.add(a);const l=new j({color:1381653}),c=new L(new Q(2.3,.15,4.6),l);c.position.set(0,1.675,0),c.castShadow=!0,c.receiveShadow=!0,this.bodyGroup.add(c);const h=new j({color:12674667}),d=new L(new Q(.05,.35,3),h);d.position.set(-1.23,.85,.5),d.castShadow=!0,d.receiveShadow=!0,this.bodyGroup.add(d);const u=new L(new Q(.05,.35,3),h);u.position.set(1.23,.85,.5),u.castShadow=!0,u.receiveShadow=!0,this.bodyGroup.add(u);const p=new j({color:3359829}),g=new L(new Q(.05,.4,.5),p);g.position.set(-1.22,1.1,-1.7),g.castShadow=!0,g.receiveShadow=!0,this.bodyGroup.add(g);const x=new L(new Q(.05,.4,.5),p);x.position.set(1.22,1.1,-1.7),x.castShadow=!0,x.receiveShadow=!0,this.bodyGroup.add(x);const m=new j({color:3355443});for(const Et of[-.3,.3]){const dt=new L(new Q(.05,1.4,.1),m);dt.position.set(Et,.8,2.46),dt.castShadow=!0,dt.receiveShadow=!0,this.bodyGroup.add(dt)}const f=new j({color:526344}),b=new L(new Q(.04,1.6,.05),f);b.position.set(-1.22,.8,-.8),this.bodyGroup.add(b);const S=new L(new Q(.04,1.6,.05),f);S.position.set(1.22,.8,-.8),this.bodyGroup.add(S);const y=new L(new Q(2.4,.04,.05),f);y.position.set(0,1.58,-.8),this.bodyGroup.add(y);const I=new j({color:1118481}),A=new j({color:3359829});for(const Et of[-1,1]){const dt=Et*1.3,St=new L(new Q(.18,.12,.22),I);St.position.set(dt,1.1,-1.7),this.bodyGroup.add(St);const $t=new L(new Q(.08,.1,.18),A);$t.position.set(dt+Et*.05,1.1,-1.7),this.bodyGroup.add($t)}const T=new j({color:3355443});for(const Et of[-.15,-.85]){const dt=new L(new Q(2.1,.07,.07),T);dt.position.set(0,1.78,Et),this.bodyGroup.add(dt)}for(const Et of[-.95,.95]){const dt=new L(new Q(.05,.05,.7),T);dt.position.set(Et,1.78,-.5),this.bodyGroup.add(dt)}const P=zc(512),M=new j({map:P,transparent:!0,depthWrite:!1}),_=new L(new de(2,3.8),M);_.rotation.x=-Math.PI/2,_.position.set(0,1.8,.9),this.bodyGroup.add(_);const C=new j({color:8947848});for(const Et of[-.6,.6]){const dt=new L(new Q(.06,.06,.14),C);dt.position.set(Et,.85,2.52),this.bodyGroup.add(dt)}const z=new L(new Q(2.4,.04,.06),f);z.position.set(0,1.2,2.47),this.bodyGroup.add(z);const k=new j({color:16733440}),W=new j({color:1118481}),K=new L(new Q(.05,.22,.82),k);K.position.set(-1.255,.86,.36),this.bodyGroup.add(K);const q=new L(new Q(.06,.05,.16),W);q.position.set(-1.262,.96,.12),this.bodyGroup.add(q);const et=new L(new Q(.06,.15,.05),W);et.position.set(-1.262,.86,.12),this.bodyGroup.add(et);const V=new L(new Q(.06,.18,.05),W);V.position.set(-1.262,.86,.38),this.bodyGroup.add(V);const J=new L(new Q(.06,.04,.13),W);J.position.set(-1.262,.95,.445),this.bodyGroup.add(J);const ot=new L(new Q(.06,.04,.1),W);ot.position.set(-1.262,.86,.43),this.bodyGroup.add(ot);const mt=new L(new Q(.06,.04,.13),W);mt.position.set(-1.262,.77,.445),this.bodyGroup.add(mt);const Dt=new L(new Q(.06,.18,.05),W);Dt.position.set(-1.262,.86,.61),this.bodyGroup.add(Dt);const Yt=new L(new Q(.06,.18,.05),W);Yt.position.set(-1.262,.86,.73),this.bodyGroup.add(Yt);const Y=new L(new Q(.06,.08,.13),W);Y.position.set(-1.262,.92,.67),this.bodyGroup.add(Y);const it=new L(new Q(.05,.22,.82),k);it.position.set(1.255,.86,.36),this.bodyGroup.add(it);const xt=new Vt(.38,.38,.28,10),lt=new j({color:1118481}),Rt=new j({color:8947848}),Bt=[[-1.25,.38,-1.2,-1],[1.25,.38,-1.2,1],[-1.25,.38,1.3,-1],[1.25,.38,1.3,1]];for(const[Et,dt,St,$t]of Bt){const Tt=new L(xt,lt);Tt.rotation.z=Math.PI/2,Tt.position.set(Et,dt,St),Tt.castShadow=!0,Tt.receiveShadow=!0,this.mesh.add(Tt);const E=new Vt(.2,.2,.06,10),v=new L(E,Rt);v.rotation.z=Math.PI/2,v.position.set(Et+$t*.15,dt,St),v.castShadow=!0,v.receiveShadow=!0,this.mesh.add(v);const O=new j({color:3355443}),Z=new L(new Vt(.36,.38,.06,10),O);Z.rotation.z=Math.PI/2,Z.position.set(Et+$t*.2,dt,St),this.mesh.add(Z);const nt=new j({color:1118481}),$=new L(new Q(.14,.1,.82),nt);$.position.set(Et+$t*.07,dt+.3,St),this.bodyGroup.add($)}const Ht=new j({color:16777181,emissive:16777181,emissiveIntensity:.8});for(const Et of[-.8,.8]){const dt=new L(new Q(.35,.2,.08),Ht);dt.position.set(Et,.75,-2.41),dt.castShadow=!0,dt.receiveShadow=!0,this.bodyGroup.add(dt)}const re=new He({color:16777164,transparent:!0,opacity:.08,side:Re}),Wt=new Nn(1.5,8,8,1,!0);for(const Et of[-.6,.6]){const dt=new L(Wt,re);dt.rotation.x=Math.PI/2,dt.position.set(Et,.7,-3),this.bodyGroup.add(dt)}const he=new j({color:16720384,emissive:16720384,emissiveIntensity:.8});for(const Et of[-.8,.8]){const dt=new L(new Q(.3,.18,.06),he);dt.position.set(Et,.75,2.47),dt.castShadow=!0,dt.receiveShadow=!0,this.bodyGroup.add(dt)}const N=new j({color:3355443}),Se=new L(new Q(2,.08,.8),N);Se.position.set(0,1.77,-.5),Se.castShadow=!0,Se.receiveShadow=!0,this.bodyGroup.add(Se),this.mesh.position.set(0,0,0),t.add(this.mesh)}triggerBump(t){this.suspensionVel=-t*6}updateSuspension(t){const e=-80*this.suspensionY-10*this.suspensionVel;this.suspensionVel+=e*t,this.suspensionY+=this.suspensionVel*t,this.suspensionY=Math.max(-.35,Math.min(.35,this.suspensionY)),this.bodyGroup.position.y=this.suspensionY,this.bodyGroup.rotation.z=-this.suspensionY*.08}get suspensionMagnitude(){return Math.abs(this.suspensionY)+Math.abs(this.suspensionVel)*.04}}const an={maxSpeed:80,acceleration:55,reverseForce:45,friction:.985,steerRate:2.8,minSpeedToSteer:.5,gripAtLowSpeed:7,gripAtHighSpeed:1.2},Dl=40,Hm=4,Vm=30,Wm=.8;function Xm(s){for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s}function qm(s){return Math.round(s/Dl)*Dl}function Ll(s,t){let e=0;const n=qm((s+t)*.5);for(const i of[-1,1]){const o=n+i*Hm;(s-o)*(t-o)<0&&e++}return e}class Ym{constructor(t,e,n,i,o){R(this,"van");R(this,"input");R(this,"_speed",0);R(this,"velocityAngle",0);R(this,"prevPos",new D);R(this,"onBump");R(this,"onBuildingHit");R(this,"collisionWorld");R(this,"COLL_GRID",40);R(this,"COLL_ROAD_HALF",6.5);this.van=t,this.input=e,this.onBump=n,this.collisionWorld=i,this.onBuildingHit=o,this.velocityAngle=this.van.heading,this.prevPos.copy(this.van.mesh.position)}get speed(){return this._speed}update(t){var l;this.prevPos.copy(this.van.mesh.position);const e=Math.abs(this._speed);if(this.input.forward&&(this._speed+=an.acceleration*t),this.input.brake&&(this._speed-=an.reverseForce*t),this._speed*=Math.pow(an.friction,t*60),this._speed=Math.max(-80*.5,Math.min(an.maxSpeed,this._speed)),e>an.minSpeedToSteer){const c=this.input.left?-1:this.input.right?1:Math.abs(this.input.steerAxis)>.1?this.input.steerAxis:0,h=Math.min(1,e/15);this.van.heading+=c*an.steerRate*h*Math.sign(this._speed)*t}const n=Math.min(e/an.maxSpeed,1),i=an.gripAtLowSpeed+(an.gripAtHighSpeed-an.gripAtLowSpeed)*n,o=Xm(this.van.heading-this.velocityAngle);this.velocityAngle+=o*i*t;const r=new D(Math.sin(this.velocityAngle),0,-Math.cos(this.velocityAngle));this.van.velocity.copy(r).multiplyScalar(this._speed),this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(t)),this.van.mesh.rotation.y=-this.van.heading;const a=245;if(this.van.mesh.position.x=Math.max(-a,Math.min(a,this.van.mesh.position.x)),this.van.mesh.position.z=Math.max(-a,Math.min(a,this.van.mesh.position.z)),this.collisionWorld){const c=this.collisionWorld.resolveCircle(this.van.mesh.position.x,this.van.mesh.position.z,1.8);(c.x!==this.van.mesh.position.x||c.z!==this.van.mesh.position.z)&&(this._speed*=.65,(l=this.onBuildingHit)==null||l.call(this),this.van.mesh.position.x=c.x,this.van.mesh.position.z=c.z)}this._checkCurbCrossings()}distToNearestRoad(t){const e=(t%this.COLL_GRID+this.COLL_GRID)%this.COLL_GRID;return Math.min(e,this.COLL_GRID-e)}isOnRoad(t,e){const n=this.distToNearestRoad(t),i=this.distToNearestRoad(e);return n<this.COLL_ROAD_HALF||i<this.COLL_ROAD_HALF}resolveCollision(t,e,n,i){return this.isOnRoad(n,i)?{x:n,z:i}:this.isOnRoad(t,i)?{x:t,z:i}:this.isOnRoad(n,e)?{x:n,z:e}:{x:t,z:e}}applyImpulse(t,e){this._speed*=.5,this.van.mesh.position.x+=t*.1,this.van.mesh.position.z+=e*.1}_checkCurbCrossings(){const t=this.van.mesh.position,e=this.prevPos,n=Ll(e.x,t.x),i=Ll(e.z,t.z);if(n+i===0)return;const a=Math.abs(this._speed)/Vm,l=Math.max(Wm,Math.min(1,a));this.van.triggerBump(l),this._speed*=.85,this.onBump&&this.onBump(l)}}const to=(s,t)=>{const e=t.x-s.x,n=t.y-s.y;return Math.sqrt(e*e+n*n)},jm=(s,t)=>{const e=t.x-s.x,n=t.y-s.y;return Jm(Math.atan2(n,e))},$m=(s,t,e)=>{const n={x:0,y:0};return e=Xr(e),n.x=s.x-t*Math.cos(e),n.y=s.y-t*Math.sin(e),n},Xr=s=>s*(Math.PI/180),Jm=s=>s*(180/Math.PI),Km=s=>isNaN(s.buttons)?s.pressure!==0:s.buttons!==0,Qo=new Map,Bl=s=>{Qo.has(s)&&clearTimeout(Qo.get(s)),Qo.set(s,setTimeout(s,100))},co=(s,t,e)=>{const n=t.split(/[ ,]+/g);let i;for(let o=0;o<n.length;o+=1)i=n[o],s.addEventListener?s.addEventListener(i,e,!1):s.attachEvent&&s.attachEvent(i,e)},Fl=(s,t,e)=>{const n=t.split(/[ ,]+/g);let i;for(let o=0;o<n.length;o+=1)i=n[o],s.removeEventListener?s.removeEventListener(i,e):s.detachEvent&&s.detachEvent(i,e)},Vc=s=>(s.preventDefault(),s.type.match(/^touch/)?s.changedTouches:s),Ul=()=>{const s=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,t=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:s,y:t}},Nl=(s,t)=>{t.top||t.right||t.bottom||t.left?(s.style.top=t.top,s.style.right=t.right,s.style.bottom=t.bottom,s.style.left=t.left):(s.style.left=t.x+"px",s.style.top=t.y+"px")},_a=(s,t,e)=>{const n=Wc(s);for(let i in n)if(n.hasOwnProperty(i))if(typeof t=="string")n[i]=t+" "+e;else{let o="";for(let r=0,a=t.length;r<a;r+=1)o+=t[r]+" "+e+", ";n[i]=o.slice(0,-2)}return n},Zm=(s,t)=>{const e=Wc(s);for(let n in e)e.hasOwnProperty(n)&&(e[n]=t);return e},Wc=s=>{const t={};return t[s]="",["webkit","Moz","o"].forEach(function(n){t[n+s.charAt(0).toUpperCase()+s.slice(1)]=""}),t},tr=(s,t)=>{for(let e in t)t.hasOwnProperty(e)&&(s[e]=t[e]);return s},Qm=(s,t)=>{const e={};for(let n in s)s.hasOwnProperty(n)&&t.hasOwnProperty(n)?e[n]=t[n]:s.hasOwnProperty(n)&&(e[n]=s[n]);return e},qr=(s,t)=>{if(s.length)for(let e=0,n=s.length;e<n;e+=1)t(s[e]);else t(s)},tg=(s,t,e)=>({x:Math.min(Math.max(s.x,t.x-e),t.x+e),y:Math.min(Math.max(s.y,t.y-e),t.y+e)});var eg="ontouchstart"in window,ng=!!window.PointerEvent,ig=!!window.MSPointerEvent,ns={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},Ai,ms={};ng?Ai=ns.pointer:ig?Ai=ns.MSPointer:eg?(Ai=ns.touch,ms=ns.mouse):Ai=ns.mouse;function An(){}An.prototype.on=function(s,t){var e=this,n=s.split(/[ ,]+/g),i;e._handlers_=e._handlers_||{};for(var o=0;o<n.length;o+=1)i=n[o],e._handlers_[i]=e._handlers_[i]||[],e._handlers_[i].push(t);return e};An.prototype.off=function(s,t){var e=this;return e._handlers_=e._handlers_||{},s===void 0?e._handlers_={}:t===void 0?e._handlers_[s]=null:e._handlers_[s]&&e._handlers_[s].indexOf(t)>=0&&e._handlers_[s].splice(e._handlers_[s].indexOf(t),1),e};An.prototype.trigger=function(s,t){var e=this,n=s.split(/[ ,]+/g),i;e._handlers_=e._handlers_||{};for(var o=0;o<n.length;o+=1)i=n[o],e._handlers_[i]&&e._handlers_[i].length&&e._handlers_[i].forEach(function(r){r.call(e,{type:i,target:e},t)})};An.prototype.config=function(s){var t=this;t.options=t.defaults||{},s&&(t.options=Qm(t.options,s))};An.prototype.bindEvt=function(s,t){var e=this;return e._domHandlers_=e._domHandlers_||{},e._domHandlers_[t]=function(){typeof e["on"+t]=="function"?e["on"+t].apply(e,arguments):console.warn('[WARNING] : Missing "on'+t+'" handler.')},co(s,Ai[t],e._domHandlers_[t]),ms[t]&&co(s,ms[t],e._domHandlers_[t]),e};An.prototype.unbindEvt=function(s,t){var e=this;return e._domHandlers_=e._domHandlers_||{},Fl(s,Ai[t],e._domHandlers_[t]),ms[t]&&Fl(s,ms[t],e._domHandlers_[t]),delete e._domHandlers_[t],this};function Me(s,t){return this.identifier=t.identifier,this.position=t.position,this.frontPosition=t.frontPosition,this.collection=s,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(t),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=Me.id,Me.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}Me.prototype=new An;Me.constructor=Me;Me.id=0;Me.prototype.buildEl=function(s){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};Me.prototype.stylize=function(){if(this.options.dataOnly)return this;var s=this.options.fadeTime+"ms",t=Zm("borderRadius","50%"),e=_a("transition","opacity",s),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},tr(n.el,e),this.options.shape==="circle"&&tr(n.back,t),tr(n.front,t),this.applyStyles(n),this};Me.prototype.applyStyles=function(s){for(var t in this.ui)if(this.ui.hasOwnProperty(t))for(var e in s[t])this.ui[t].style[e]=s[t][e];return this};Me.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};Me.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};Me.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};Me.prototype.show=function(s){var t=this;return t.options.dataOnly||(clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.addToDom(),t.restCallback(),setTimeout(function(){t.ui.el.style.opacity=1},0),t.showTimeout=setTimeout(function(){t.trigger("shown",t.instance),typeof s=="function"&&s.call(this)},t.options.fadeTime)),t};Me.prototype.hide=function(s){var t=this;if(t.options.dataOnly)return t;if(t.ui.el.style.opacity=t.options.restOpacity,clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.removeTimeout=setTimeout(function(){var e=t.options.mode==="dynamic"?"none":"block";t.ui.el.style.display=e,typeof s=="function"&&s.call(t),t.trigger("hidden",t.instance)},t.options.fadeTime),t.options.restJoystick){const e=t.options.restJoystick,n={};n.x=e===!0||e.x!==!1?0:t.instance.frontPosition.x,n.y=e===!0||e.y!==!1?0:t.instance.frontPosition.y,t.setPosition(s,n)}return t};Me.prototype.setPosition=function(s,t){var e=this;e.frontPosition={x:t.x,y:t.y};var n=e.options.fadeTime+"ms",i={};i.front=_a("transition",["transform"],n);var o={front:{}};o.front={transform:"translate("+e.frontPosition.x+"px,"+e.frontPosition.y+"px)"},e.applyStyles(i),e.applyStyles(o),e.restTimeout=setTimeout(function(){typeof s=="function"&&s.call(e),e.restCallback()},e.options.fadeTime)};Me.prototype.restCallback=function(){var s=this,t={};t.front=_a("transition","none",""),s.applyStyles(t),s.trigger("rested",s.instance)};Me.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};Me.prototype.computeDirection=function(s){var t=s.angle.radian,e=Math.PI/4,n=Math.PI/2,i,o,r;if(t>e&&t<e*3&&!s.lockX?i="up":t>-e&&t<=e&&!s.lockY?i="left":t>-e*3&&t<=-e&&!s.lockX?i="down":s.lockY||(i="right"),s.lockY||(t>-n&&t<n?o="left":o="right"),s.lockX||(t>0?r="up":r="down"),s.force>this.options.threshold){var a={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(a[l]=this.direction[l]);var c={};this.direction={x:o,y:r,angle:i},s.direction=this.direction;for(l in a)a[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return s;(!c.x||!c.y)&&this.trigger("plain",s),c.x||this.trigger("plain:"+o,s),c.y||this.trigger("plain:"+r,s),c.angle||this.trigger("dir dir:"+i,s)}else this.resetDirection();return s};function me(s,t){var e=this;e.nipples=[],e.idles=[],e.actives=[],e.ids=[],e.pressureIntervals={},e.manager=s,e.id=me.id,me.id+=1,e.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},e.config(t),(e.options.mode==="static"||e.options.mode==="semi")&&(e.options.multitouch=!1),e.options.multitouch||(e.options.maxNumberOfNipples=1);const n=getComputedStyle(e.options.zone.parentElement);return n&&n.display==="flex"&&(e.parentIsFlex=!0),e.updateBox(),e.prepareNipples(),e.bindings(),e.begin(),e.nipples}me.prototype=new An;me.constructor=me;me.id=0;me.prototype.prepareNipples=function(){var s=this,t=s.nipples;t.on=s.on.bind(s),t.off=s.off.bind(s),t.options=s.options,t.destroy=s.destroy.bind(s),t.ids=s.ids,t.id=s.id,t.processOnMove=s.processOnMove.bind(s),t.processOnEnd=s.processOnEnd.bind(s),t.get=function(e){if(e===void 0)return t[0];for(var n=0,i=t.length;n<i;n+=1)if(t[n].identifier===e)return t[n];return!1}};me.prototype.bindings=function(){var s=this;s.bindEvt(s.options.zone,"start"),s.options.zone.style.touchAction="none",s.options.zone.style.msTouchAction="none"};me.prototype.begin=function(){var s=this,t=s.options;if(t.mode==="static"){var e=s.createNipple(t.position,s.manager.getIdentifier());e.add(),s.idles.push(e)}};me.prototype.createNipple=function(s,t){var e=this,n=e.manager.scroll,i={},o=e.options,r={x:e.parentIsFlex?n.x:n.x+e.box.left,y:e.parentIsFlex?n.y:n.y+e.box.top};if(s.x&&s.y)i={x:s.x-r.x,y:s.y-r.y};else if(s.top||s.right||s.bottom||s.left){var a=document.createElement("DIV");a.style.display="hidden",a.style.top=s.top,a.style.right=s.right,a.style.bottom=s.bottom,a.style.left=s.left,a.style.position="absolute",o.zone.appendChild(a);var l=a.getBoundingClientRect();o.zone.removeChild(a),i=s,s={x:l.left+n.x,y:l.top+n.y}}var c=new Me(e,{color:o.color,size:o.size,threshold:o.threshold,fadeTime:o.fadeTime,dataOnly:o.dataOnly,restJoystick:o.restJoystick,restOpacity:o.restOpacity,mode:o.mode,identifier:t,position:s,zone:o.zone,frontPosition:{x:0,y:0},shape:o.shape});return o.dataOnly||(Nl(c.ui.el,i),Nl(c.ui.front,c.frontPosition)),e.nipples.push(c),e.trigger("added "+c.identifier+":added",c),e.manager.trigger("added "+c.identifier+":added",c),e.bindNipple(c),c};me.prototype.updateBox=function(){var s=this;s.box=s.options.zone.getBoundingClientRect()};me.prototype.bindNipple=function(s){var t=this,e,n=function(i,o){e=i.type+" "+o.id+":"+i.type,t.trigger(e,o)};s.on("destroyed",t.onDestroyed.bind(t)),s.on("shown hidden rested dir plain",n),s.on("dir:up dir:right dir:down dir:left",n),s.on("plain:up plain:right plain:down plain:left",n)};me.prototype.pressureFn=function(s,t,e){var n=this,i=0;clearInterval(n.pressureIntervals[e]),n.pressureIntervals[e]=setInterval((function(){var o=s.force||s.pressure||s.webkitForce||0;o!==i&&(t.trigger("pressure",o),n.trigger("pressure "+t.identifier+":pressure",o),i=o)}).bind(n),100)};me.prototype.onstart=function(s){var t=this,e=t.options,n=s;s=Vc(s),t.updateBox();var i=function(o){t.actives.length<e.maxNumberOfNipples?t.processOnStart(o):n.type.match(/^touch/)&&(Object.keys(t.manager.ids).forEach(function(r){if(Object.values(n.touches).findIndex(function(l){return l.identifier===r})<0){var a=[s[0]];a.identifier=r,t.processOnEnd(a)}}),t.actives.length<e.maxNumberOfNipples&&t.processOnStart(o))};return qr(s,i),t.manager.bindDocument(),!1};me.prototype.processOnStart=function(s){var t=this,e=t.options,n,i=t.manager.getIdentifier(s),o=s.force||s.pressure||s.webkitForce||0,r={x:s.pageX,y:s.pageY},a=t.getOrCreate(i,r);a.identifier!==i&&t.manager.removeIdentifier(a.identifier),a.identifier=i;var l=function(h){h.trigger("start",h),t.trigger("start "+h.id+":start",h),h.show(),o>0&&t.pressureFn(s,h,h.identifier),t.processOnMove(s)};if((n=t.idles.indexOf(a))>=0&&t.idles.splice(n,1),t.actives.push(a),t.ids.push(a.identifier),e.mode!=="semi")l(a);else{var c=to(r,a.position);if(c<=e.catchDistance)l(a);else{a.destroy(),t.processOnStart(s);return}}return a};me.prototype.getOrCreate=function(s,t){var e=this,n=e.options,i;return/(semi|static)/.test(n.mode)?(i=e.idles[0],i?(e.idles.splice(0,1),i):n.mode==="semi"?e.createNipple(t,s):(console.warn("Coudln't find the needed nipple."),!1)):(i=e.createNipple(t,s),i)};me.prototype.processOnMove=function(s){var t=this,e=t.options,n=t.manager.getIdentifier(s),i=t.nipples.get(n),o=t.manager.scroll;if(!Km(s)){this.processOnEnd(s);return}if(!i){console.error("Found zombie joystick with ID "+n),t.manager.removeIdentifier(n);return}if(e.dynamicPage){var r=i.el.getBoundingClientRect();i.position={x:o.x+r.left,y:o.y+r.top}}i.identifier=n;var a=i.options.size/2,l={x:s.pageX,y:s.pageY};e.lockX&&(l.y=i.position.y),e.lockY&&(l.x=i.position.x);var c=to(l,i.position),h=jm(l,i.position),d=Xr(h),u=c/a,p={distance:c,position:l},g,x;if(i.options.shape==="circle"?(g=Math.min(c,a),x=$m(i.position,g,h)):(x=tg(l,i.position,a),g=to(x,i.position)),e.follow){if(c>a){let S=l.x-x.x,y=l.y-x.y;i.position.x+=S,i.position.y+=y,i.el.style.top=i.position.y-(t.box.top+o.y)+"px",i.el.style.left=i.position.x-(t.box.left+o.x)+"px",c=to(l,i.position)}}else l=x,c=g;var m=l.x-i.position.x,f=l.y-i.position.y;i.frontPosition={x:m,y:f},e.dataOnly||(i.ui.front.style.transform="translate("+m+"px,"+f+"px)");var b={identifier:i.identifier,position:l,force:u,pressure:s.force||s.pressure||s.webkitForce||0,distance:c,angle:{radian:d,degree:h},vector:{x:m/a,y:-f/a},raw:p,instance:i,lockX:e.lockX,lockY:e.lockY};b=i.computeDirection(b),b.angle={radian:Xr(180-h),degree:180-h},i.trigger("move",b),t.trigger("move "+i.id+":move",b)};me.prototype.processOnEnd=function(s){var t=this,e=t.options,n=t.manager.getIdentifier(s),i=t.nipples.get(n),o=t.manager.removeIdentifier(i.identifier);i&&(e.dataOnly||i.hide(function(){e.mode==="dynamic"&&(i.trigger("removed",i),t.trigger("removed "+i.id+":removed",i),t.manager.trigger("removed "+i.id+":removed",i),i.destroy())}),clearInterval(t.pressureIntervals[i.identifier]),i.resetDirection(),i.trigger("end",i),t.trigger("end "+i.id+":end",i),t.ids.indexOf(i.identifier)>=0&&t.ids.splice(t.ids.indexOf(i.identifier),1),t.actives.indexOf(i)>=0&&t.actives.splice(t.actives.indexOf(i),1),/(semi|static)/.test(e.mode)?t.idles.push(i):t.nipples.indexOf(i)>=0&&t.nipples.splice(t.nipples.indexOf(i),1),t.manager.unbindDocument(),/(semi|static)/.test(e.mode)&&(t.manager.ids[o.id]=o.identifier))};me.prototype.onDestroyed=function(s,t){var e=this;e.nipples.indexOf(t)>=0&&e.nipples.splice(e.nipples.indexOf(t),1),e.actives.indexOf(t)>=0&&e.actives.splice(e.actives.indexOf(t),1),e.idles.indexOf(t)>=0&&e.idles.splice(e.idles.indexOf(t),1),e.ids.indexOf(t.identifier)>=0&&e.ids.splice(e.ids.indexOf(t.identifier),1),e.manager.removeIdentifier(t.identifier),e.manager.unbindDocument()};me.prototype.destroy=function(){var s=this;s.unbindEvt(s.options.zone,"start"),s.nipples.forEach(function(e){e.destroy()});for(var t in s.pressureIntervals)s.pressureIntervals.hasOwnProperty(t)&&clearInterval(s.pressureIntervals[t]);s.trigger("destroyed",s.nipples),s.manager.unbindDocument(),s.off()};function be(s){var t=this;t.ids={},t.index=0,t.collections=[],t.scroll=Ul(),t.config(s),t.prepareCollections();var e=function(){var i;t.collections.forEach(function(o){o.forEach(function(r){i=r.el.getBoundingClientRect(),r.position={x:t.scroll.x+i.left,y:t.scroll.y+i.top}})})};co(window,"resize",function(){Bl(e)});var n=function(){t.scroll=Ul()};return co(window,"scroll",function(){Bl(n)}),t.collections}be.prototype=new An;be.constructor=be;be.prototype.prepareCollections=function(){var s=this;s.collections.create=s.create.bind(s),s.collections.on=s.on.bind(s),s.collections.off=s.off.bind(s),s.collections.destroy=s.destroy.bind(s),s.collections.get=function(t){var e;return s.collections.every(function(n){return e=n.get(t),!e}),e}};be.prototype.create=function(s){return this.createCollection(s)};be.prototype.createCollection=function(s){var t=this,e=new me(t,s);return t.bindCollection(e),t.collections.push(e),e};be.prototype.bindCollection=function(s){var t=this,e,n=function(i,o){e=i.type+" "+o.id+":"+i.type,t.trigger(e,o)};s.on("destroyed",t.onDestroyed.bind(t)),s.on("shown hidden rested dir plain",n),s.on("dir:up dir:right dir:down dir:left",n),s.on("plain:up plain:right plain:down plain:left",n)};be.prototype.bindDocument=function(){var s=this;s.binded||(s.bindEvt(document,"move").bindEvt(document,"end"),s.binded=!0)};be.prototype.unbindDocument=function(s){var t=this;(!Object.keys(t.ids).length||s===!0)&&(t.unbindEvt(document,"move").unbindEvt(document,"end"),t.binded=!1)};be.prototype.getIdentifier=function(s){var t;return s?(t=s.identifier===void 0?s.pointerId:s.identifier,t===void 0&&(t=this.latest||0)):t=this.index,this.ids[t]===void 0&&(this.ids[t]=this.index,this.index+=1),this.latest=t,this.ids[t]};be.prototype.removeIdentifier=function(s){var t={};for(var e in this.ids)if(this.ids[e]===s){t.id=e,t.identifier=this.ids[e],delete this.ids[e];break}return t};be.prototype.onmove=function(s){var t=this;return t.onAny("move",s),!1};be.prototype.onend=function(s){var t=this;return t.onAny("end",s),!1};be.prototype.oncancel=function(s){var t=this;return t.onAny("end",s),!1};be.prototype.onAny=function(s,t){var e=this,n,i="processOn"+s.charAt(0).toUpperCase()+s.slice(1);t=Vc(t);var o=function(a,l,c){c.ids.indexOf(l)>=0&&(c[i](a),a._found_=!0)},r=function(a){n=e.getIdentifier(a),qr(e.collections,o.bind(null,a,n)),a._found_||e.removeIdentifier(n)};return qr(t,r),!1};be.prototype.destroy=function(){var s=this;s.unbindDocument(!0),s.ids={},s.index=0,s.collections.forEach(function(t){t.destroy()}),s.off()};be.prototype.onDestroyed=function(s,t){var e=this;if(e.collections.indexOf(t)<0)return!1;e.collections.splice(e.collections.indexOf(t),1)};const Ol=new be,sg={create:function(s){return Ol.create(s)},factory:Ol};class og{constructor(){R(this,"keys",{});R(this,"steerAxis",0);R(this,"accelerating",!1);R(this,"braking",!1);R(this,"horn",!1);R(this,"joystickManager",null);R(this,"hornTimeout",null);window.addEventListener("keydown",t=>{this.keys[t.code]=!0,t.code==="KeyH"&&this.triggerHorn()}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1}),this.setupMobileControls()}triggerHorn(){this.horn=!0,this.hornTimeout!==null&&clearTimeout(this.hornTimeout),this.hornTimeout=setTimeout(()=>{this.horn=!1,this.hornTimeout=null},300)}setupMobileControls(){const t=document.createElement("div");t.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 150px;
      height: 150px;
      z-index: 100;
      touch-action: none;
    `,document.body.appendChild(t),this.joystickManager=sg.create({zone:t,mode:"static",position:{left:"75px",bottom:"75px"},color:"rgba(255, 255, 255, 0.6)",size:120,restOpacity:.5}),this.joystickManager.on("move",(o,r)=>{r.vector&&(this.steerAxis=r.vector.x)}),this.joystickManager.on("end",()=>{this.steerAxis=0});const e=document.createElement("div");e.style.cssText=`
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
    `,e.textContent="REV",document.body.appendChild(e),e.addEventListener("touchstart",o=>{o.preventDefault(),this.braking=!0,e.style.background="rgba(220, 50, 50, 0.9)"},{passive:!1}),e.addEventListener("touchend",o=>{o.preventDefault(),this.braking=!1,e.style.background="rgba(220, 50, 50, 0.6)"},{passive:!1});const n=document.createElement("div");n.style.cssText=`
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
    `,n.textContent="GAS",document.body.appendChild(n),n.addEventListener("touchstart",o=>{o.preventDefault(),this.accelerating=!0,n.style.background="rgba(50, 200, 50, 0.9)"},{passive:!1}),n.addEventListener("touchend",o=>{o.preventDefault(),this.accelerating=!1,n.style.background="rgba(50, 200, 50, 0.6)"},{passive:!1});const i=document.createElement("div");i.style.cssText=`
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
    `,i.textContent="📯",document.body.appendChild(i),i.addEventListener("touchstart",o=>{o.preventDefault(),this.triggerHorn(),i.style.background="rgba(255, 200, 50, 0.95)",i.style.transform="scale(1.1)"},{passive:!1}),i.addEventListener("touchend",o=>{o.preventDefault(),i.style.background="rgba(255, 200, 50, 0.6)",i.style.transform="scale(1.0)"},{passive:!1})}get forward(){return this.keys.ArrowUp||this.keys.KeyW||this.accelerating}get backward(){return this.keys.ArrowDown||this.keys.KeyS}get left(){return this.keys.ArrowLeft||this.keys.KeyA||this.steerAxis<-.2}get right(){return this.keys.ArrowRight||this.keys.KeyD||this.steerAxis>.2}get brake(){return this.keys.Space||this.braking}get honk(){return this.horn}}class rg{constructor(){R(this,"level",0);R(this,"spillRateMultiplier",1);R(this,"onSpill");R(this,"container");R(this,"fill");R(this,"bucketEl");R(this,"isShaking",!1);R(this,"spillFlashing",!1);if(!document.getElementById("spill-meter-styles")){const i=document.createElement("style");i.id="spill-meter-styles",i.textContent=`
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
      `,document.head.appendChild(i)}this.container=document.createElement("div"),Object.assign(this.container.style,{position:"fixed",top:"16px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",zIndex:"999",userSelect:"none",pointerEvents:"none"});const t=document.createElement("div");Object.assign(t.style,{display:"flex",alignItems:"center",gap:"8px"}),this.bucketEl=document.createElement("span"),this.bucketEl.textContent="🪣",Object.assign(this.bucketEl.style,{fontSize:"28px",lineHeight:"1"}),t.appendChild(this.bucketEl);const e=document.createElement("div");Object.assign(e.style,{width:"160px",height:"18px",background:"#333",borderRadius:"9px",overflow:"hidden",border:"2px solid rgba(255,255,255,0.25)",boxShadow:"0 2px 6px rgba(0,0,0,0.6)"}),this.fill=document.createElement("div"),Object.assign(this.fill.style,{height:"100%",width:"0%",borderRadius:"9px",transition:"width 0.05s linear",background:"linear-gradient(to right, #4caf50, #ffeb3b)"}),e.appendChild(this.fill),t.appendChild(e),this.container.appendChild(t);const n=document.createElement("div");n.textContent="DON'T SPILL THE PLASTER!",Object.assign(n.style,{color:"#fff",fontSize:"11px",fontWeight:"700",fontFamily:"system-ui, sans-serif",textShadow:"0 1px 4px rgba(0,0,0,0.9)",letterSpacing:"0.5px"}),this.container.appendChild(n),document.body.appendChild(this.container),this.container.style.display="none"}setVisible(t){this.container.style.display=t?"flex":"none"}addSpill(t){this.level=Math.min(1,this.level+t)}update(t){var n;const e=this.level*100;if(this.fill.style.width=`${e}%`,this.level<.5){const i=this.level*2,o=Math.round(76+i*179),r=Math.round(175+i*60);this.fill.style.background=`linear-gradient(to right, rgb(${o},${r},50), rgb(${o},${r},50))`}else{const i=(this.level-.5)*2,o=255,r=Math.round(235-i*235);this.fill.style.background=`linear-gradient(to right, rgb(${o},${r},50), rgb(${o},${Math.round(r*.4)},20))`}this.level>.8&&!this.isShaking?(this.bucketEl.classList.add("bucket-shake"),this.isShaking=!0):this.level<=.8&&this.isShaking&&(this.bucketEl.classList.remove("bucket-shake"),this.isShaking=!1),this.level>=1&&!this.spillFlashing&&(this.spillFlashing=!0,this.level=.5,(n=this.onSpill)==null||n.call(this,5e4),this.container.classList.add("spill-flash"),setTimeout(()=>{this.container.classList.remove("spill-flash"),this.spillFlashing=!1},700))}triggerBump(t){this.addSpill(.025)}triggerCrash(){this.addSpill(.3)}}const ag=[{id:"job_01",type:"commercial",zone:"cbd",position:{x:40,z:-40},title:"Marbellino Boardroom",client:"Brad from Accounts",description:"Brad wants a Marbellino feature wall in the boardroom. Stone-like marbled finish. Brad calls it 'very European'. Brad has never been to Europe.",pay:42e4,timeLimit:0,travelTimeLimit:120,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_02",type:"commercial",zone:"footscray",position:{x:-120,z:60},title:"Hemp Render — Big Kev's Shed",client:"Big Kev",description:"Big Kev wants Hemp Earthen Render on his warehouse. Rammed earth look, hemp fibres, 3–5mm application. He says it's a small shed. It is not a small shed.",pay:68e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_03",type:"residential",zone:"brunswick",position:{x:-80,z:80},title:"Antique Stucco Terrace",client:"Matilda",description:"Matilda wants Antique Stucco throughout — that Southern European aged look. Three rooms. By Thursday. It's Wednesday. She also needs primer coats. Yes, all of them.",pay:55e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_04",type:"heritage",zone:"richmond",position:{x:120,z:40},title:"Antique Stucco Heritage Restore",client:"The Council",description:"Council heritage job. Full 3-coat Antique Stucco system. Primer, stucco, sealer. Nobody told you about the asbestos audit. Nobody.",pay:8e5,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_05",type:"residential",zone:"stkilda",position:{x:40,z:-120},title:"Tadelakt Beachfront Bathroom",client:"Chloe",description:"Chloe wants Tadelakt in the bathroom — polished, waterproof, glossy. Traditional Moroccan technique. She also wants it 'textured but smooth'. You nod and apply the polishing stone.",pay:61e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_06",type:"emergency",zone:"cbd",position:{x:-40,z:20},title:"🚨 Emergency Antique Stucco Patch",client:"Darren (Stressed)",description:"Open home in 4 hours. Actual hole in the Antique Stucco feature wall. Primer, stucco, sealer — in 4 hours. Darren is sweating. You are also sweating.",pay:95e4,timeLimit:240,travelTimeLimit:240,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_07",type:"residential",zone:"brunswick",position:{x:-120,z:-80},title:"Hemp Render Repair — DIY Gone Wrong",client:"Zephyr",description:"Zephyr tried to do his own Hemp Earthen Render. No base coat. No primer. Wrong mix ratio. You strip it back and do it properly. Zephyr watches and takes notes.",pay:39e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_08",type:"commercial",zone:"footscray",position:{x:-160,z:20},title:"Rokka — Kebab Shop Reno",client:"Mustafa",description:"Mustafa wants Rokka on the walls — smooth, rustic, modern. 2–5mm application, sealed and ready before the health inspector comes back. No questions about the old walls.",pay:47e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_09",type:"heritage",zone:"stkilda",position:{x:80,z:-160},title:"Antique Stucco — Edwardian Cottage",client:"Patricia",description:"Patricia wants Antique Stucco — aged Southern European finish, NCC 2022 compliant. She's printed the full TDS. She's highlighted it. She will quiz you on cure times.",pay:72e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_10",type:"residential",zone:"richmond",position:{x:160,z:-40},title:"Tadelino New Build",client:"The Hendersons",description:"Full Tadelino system throughout — polished, modern, glossy finish. Two coats, polishing stone, sealer. The Hendersons want it done before Christmas. You ask which Christmas.",pay:58e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_11",type:"emergency",zone:"brunswick",position:{x:-40,z:120},title:"🚨 Tadelakt Water Damage Repair",client:"Gary",description:"Upstairs left the bath running. Gary's Tadelakt bathroom is destroyed. Strip, reprime, two coats Tadelakt, polish, seal. Gary is not speaking to upstairs. You don't ask.",pay:88e4,timeLimit:300,travelTimeLimit:300,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_12",type:"commercial",zone:"stkilda",position:{x:-20,z:-160},title:"Rokka Feature Wall — Wine Bar",client:"Alejandro",description:"Alejandro wants Rokka on the feature wall. Rustic, modern, subtle undulations. He calls it 'industrial earthen chic'. You write down 'Rokka, sealed, done'.",pay:64e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1}],kl=["Jose","Jarrad","Matt","Phil","Tsuyoshi","Fabio"],Qn=class Qn{constructor(){R(this,"jobs",ag.map(t=>({...t})));R(this,"activeJob",null);R(this,"activePhase",1);R(this,"completedJobIds",new Set);R(this,"money",5e5);R(this,"travelTimer",0);R(this,"travelFailed",!1);R(this,"crewToPickup",[]);R(this,"crewPickedUp",[])}getAvailableJobs(){return this.jobs.filter(t=>!this.completedJobIds.has(t.id)&&t!==this.activeJob)}acceptJob(t){this.activeJob=t,this.activePhase=1,this.crewToPickup=this._pickCrew(t.crewNeeded),this.crewPickedUp=[],this.startTravelTimer()}_pickCrew(t){return[...kl].sort(()=>Math.random()-.5).slice(0,Math.min(t,kl.length))}startTravelTimer(){this.activeJob&&(this.travelTimer=this.activeJob.travelTimeLimit??120,this.travelFailed=!1)}checkPhase1Arrival(t,e){const n=t-Qn.WORKSHOP_POS.x,i=e-Qn.WORKSHOP_POS.z;return Math.sqrt(n*n+i*i)<18}advanceToPhase2(){this.activePhase=2,this.startTravelTimer()}advanceToPhase3(){this.activePhase=3,this.startTravelTimer()}pickupCrew(t){return!this.crewPickedUp.includes(t)&&this.crewToPickup.includes(t)&&this.crewPickedUp.push(t),this.allCrewCollected()}allCrewCollected(){return this.crewToPickup.every(t=>this.crewPickedUp.includes(t))}nextCrewNeeded(){for(const t of this.crewToPickup)if(!this.crewPickedUp.includes(t))return t;return null}tickTravel(t){if(!this.activeJob||this.travelFailed)return null;if(this.travelTimer-=t,this.travelTimer<=0){this.travelFailed=!0;const e=15e4;return this.money=Math.max(0,this.money-e),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],{failed:!0,penalty:e}}return null}checkArrival(t,e){if(!this.activeJob||this.activePhase!==3)return null;const n=t-this.activeJob.position.x,i=e-this.activeJob.position.z;return Math.sqrt(n*n+i*i)<this.activeJob.triggerRadius?this.activeJob:null}completeJob(t,e=1){const n=Math.round(t.pay*e);return this.money+=n,this.completedJobIds.add(t.id),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],n}distanceTo(t,e){if(!this.activeJob)return 0;const n=t-this.activeJob.position.x,i=e-this.activeJob.position.z;return Math.sqrt(n*n+i*i)}distanceToWorkshop(t,e){const n=t-Qn.WORKSHOP_POS.x,i=e-Qn.WORKSHOP_POS.z;return Math.sqrt(n*n+i*i)}distanceToPoint(t,e,n,i){const o=t-n,r=e-i;return Math.sqrt(o*o+r*r)}};R(Qn,"WORKSHOP_POS",{x:10,z:15});let ho=Qn;const Qe=class Qe{constructor(t){R(this,"marker");R(this,"diamond");R(this,"ring");R(this,"routeLine",null);R(this,"routeGeom",null);R(this,"scene");R(this,"time",0);R(this,"targetPos",null);this.scene=t,this.marker=new Ut;const e=new ua(1,0),n=new j({color:Qe.MARKER_COLOR,emissive:new yt(Qe.MARKER_COLOR),emissiveIntensity:.35});this.diamond=new L(e,n),this.diamond.scale.set(1.2,2,1.2),this.diamond.castShadow=!1,this.marker.add(this.diamond);const i=new ri(.5,2,32),o=new He({color:Qe.MARKER_COLOR,transparent:!0,opacity:.6,side:ze,depthWrite:!1});this.ring=new L(i,o),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=-8+.3,this.marker.add(this.ring),this.marker.visible=!1,this.scene.add(this.marker)}setTarget(t){if(this.targetPos=t,this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null),t===null){this.marker.visible=!1;return}this.marker.position.set(t.x,Qe.BASE_HEIGHT,t.z),this.marker.visible=!0,this.routeGeom=new Pe;const e=new Float32Array(6);e[0]=t.x,e[1]=.05,e[2]=t.z,e[3]=t.x,e[4]=.05,e[5]=t.z,this.routeGeom.setAttribute("position",new on(e,3));const n=new Lc({color:16777215,transparent:!0,opacity:.75,depthTest:!1});this.routeLine=new j0(this.routeGeom,n),this.routeLine.renderOrder=999,this.scene.add(this.routeLine)}setJob(t){this.setTarget((t==null?void 0:t.position)??null)}update(t,e,n){if(this.time+=t,!this.targetPos||!this.marker.visible)return;const i=Math.sin(this.time*2.2)*Qe.BOB_AMP;this.marker.position.y=Qe.BASE_HEIGHT+i,this.diamond.rotation.y=this.time*1.2;const o=this.time*.8%1,r=.5+o*2;this.ring.scale.set(r,r,1);const a=this.ring.material;if(a.opacity=(1-o)*.6,this.routeGeom){const l=this.routeGeom.attributes.position;l.setXYZ(0,e,.05,n),l.setXYZ(1,this.targetPos.x,.05,this.targetPos.z),l.needsUpdate=!0,this.routeGeom.computeBoundingSphere()}}dispose(){this.marker.visible=!1,this.scene.remove(this.marker),this.diamond.geometry.dispose(),this.diamond.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null)}};R(Qe,"MARKER_COLOR",12674667),R(Qe,"BASE_HEIGHT",8),R(Qe,"BOB_AMP",.5);let Yr=Qe;function lg(s){return s>=1e6?`${(s/1e6).toFixed(2)}M sats`:s>=1e3?`${(s/1e3).toFixed(0)}K sats`:`${s} sats`}const cg={cbd:"🏙️ CBD",footscray:"🏭 Footscray",brunswick:"🎸 Brunswick",richmond:"🏡 Richmond",stkilda:"🌊 St Kilda"},hg={residential:"🏠 Residential",commercial:"🏢 Commercial",heritage:"🏛️ Heritage",emergency:"🚨 Emergency"};class dg{constructor(t){R(this,"onAccept");R(this,"overlay");R(this,"visible",!1);R(this,"jobs",[]);if(this.onAccept=t,this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,!document.getElementById("job-board-styles")){const e=document.createElement("style");e.id="job-board-styles",e.textContent=`
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
      `,document.head.appendChild(e)}document.body.appendChild(this.overlay)}show(t){this.jobs=t.slice(0,5),this.visible=!0,this._render(),this.overlay.style.display="flex"}hide(){this.visible=!1,this.overlay.style.display="none"}isVisible(){return this.visible}_render(){this.overlay.innerHTML="";const t=document.createElement("div");t.style.cssText=`
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
    `;const e=document.createElement("div");e.textContent="📋 JOBS AVAILABLE",e.style.cssText=`
      color: #fff;
      font-size: 20px;
      font-weight: 900;
      letter-spacing: 1px;
    `,t.appendChild(e);const n=document.createElement("button");if(n.className="jb-close-btn",n.textContent="✕",n.setAttribute("aria-label","Close"),n.addEventListener("click",()=>this.hide()),t.appendChild(n),this.overlay.appendChild(t),this.jobs.length===0){const i=document.createElement("div");i.className="jb-no-jobs",i.textContent="You've smashed all the jobs, legend. 🏆",this.overlay.appendChild(i);return}for(const i of this.jobs){const o=document.createElement("div");o.className="jb-card";const r=document.createElement("div");r.className="jb-card-header";const a=document.createElement("div");a.className="jb-title",a.textContent=i.title,r.appendChild(a);const l=document.createElement("div");l.className="jb-pay",l.textContent=`₿ ${lg(i.pay)}`,r.appendChild(l),o.appendChild(r);const c=document.createElement("div");c.className="jb-meta";const h=document.createElement("span");h.className="jb-badge",h.textContent=cg[i.zone]??i.zone,c.appendChild(h);const d=document.createElement("span");if(d.className=`jb-badge${i.type==="emergency"?" jb-emergency-badge":""}`,d.textContent=hg[i.type]??i.type,c.appendChild(d),i.timeLimit>0){const x=document.createElement("span");x.className="jb-badge jb-emergency-badge",x.textContent=`⏱️ ${Math.round(i.timeLimit/60)} min limit`,c.appendChild(x)}o.appendChild(c);const u=document.createElement("div");u.className="jb-client",u.textContent=`Client: ${i.client}`,o.appendChild(u);const p=document.createElement("div");p.className="jb-desc",p.textContent=i.description,o.appendChild(p);const g=document.createElement("button");g.className="jb-accept-btn",g.textContent="ACCEPT →",g.addEventListener("click",()=>{this.onAccept(i)}),o.appendChild(g),this.overlay.appendChild(o)}}}const ug=1e8;function wi(s){return s>=1e6?`${(s/1e6).toFixed(2)}M sats`:s>=1e3?`${(s/1e3).toFixed(0)}K sats`:`${s} sats`}function fg(s){const t=Math.max(0,Math.ceil(s)),e=Math.floor(t/60),n=t%60;return`${e}:${n.toString().padStart(2,"0")}`}function pg(s){return s.charAt(0).toUpperCase()}class mg{constructor(){R(this,"btcAchieved",!1);R(this,"speedText");R(this,"moneyEl");R(this,"jobStripEl");R(this,"travelTimerEl");R(this,"flashOverlay");R(this,"timerFailOverlay");R(this,"crewPanelEl");R(this,"activeJob",null);R(this,"activePhase",1);R(this,"flashTimeout",null);R(this,"spillPenaltyTimeout",null);R(this,"currentMoney",5e5);R(this,"timerPulseInterval",null);if(!document.getElementById("hud-styles")){const o=document.createElement("style");o.id="hud-styles",o.textContent=`
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
      `,document.head.appendChild(o)}const t=document.createElement("div");t.style.cssText=`
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
    `,this.speedText.textContent="0 km/h",t.appendChild(this.speedText),document.body.appendChild(t);const e=document.createElement("div");e.style.cssText=`
      position: fixed;
      top: 16px;
      right: 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 6px;
      pointer-events: none;
      font-family: system-ui, sans-serif;
      z-index: 1000;
      max-width: 300px;
    `,this.moneyEl=document.createElement("div"),this.moneyEl.style.cssText=`
      color: #5EDB7D;
      font-size: 26px;
      font-weight: 900;
      text-shadow: 0 1px 6px rgba(0,0,0,0.8);
      letter-spacing: 1px;
      transition: color 0.2s;
    `,this.moneyEl.textContent="500K sats",e.appendChild(this.moneyEl),this.jobStripEl=document.createElement("div"),this.jobStripEl.style.cssText=`
      display: none;
      flex-direction: column;
      align-items: flex-end;
      gap: 2px;
      background: rgba(0,0,0,0.55);
      border-radius: 10px;
      padding: 8px 12px;
      border-left: 3px solid #C1666B;
    `,e.appendChild(this.jobStripEl),this.travelTimerEl=document.createElement("div"),this.travelTimerEl.style.cssText=`
      display: none;
      text-align: right;
      font-size: 20px;
      font-weight: 900;
      font-family: system-ui, monospace;
      text-shadow: 0 1px 6px rgba(0,0,0,0.9);
      letter-spacing: 1px;
      background: rgba(0,0,0,0.5);
      border-radius: 8px;
      padding: 4px 10px;
    `,e.appendChild(this.travelTimerEl),document.body.appendChild(e),this.crewPanelEl=document.createElement("div"),this.crewPanelEl.style.cssText=`
      position: fixed;
      top: 16px;
      left: 16px;
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
    `;const n=document.createElement("div");n.id="hud-flash-msg",n.style.cssText=`
      color: #5EDB7D;
      font-size: clamp(28px, 6vw, 52px);
      font-weight: 900;
      font-family: system-ui, sans-serif;
      text-shadow: 0 2px 12px rgba(0,0,0,0.9);
      text-align: center;
      padding: 0 24px;
      line-height: 1.3;
    `,this.flashOverlay.appendChild(n),document.body.appendChild(this.flashOverlay),this.timerFailOverlay=document.createElement("div"),this.timerFailOverlay.style.cssText=`
      position: fixed;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1600;
      pointer-events: none;
      background: rgba(220, 38, 38, 0.18);
    `;const i=document.createElement("div");i.id="hud-timer-fail-msg",i.style.cssText=`
      color: #ff4444;
      font-size: clamp(28px, 6vw, 52px);
      font-weight: 900;
      font-family: system-ui, sans-serif;
      text-shadow: 0 2px 12px rgba(0,0,0,0.9);
      text-align: center;
      padding: 0 24px;
      line-height: 1.4;
    `,i.textContent="⏰ TOO SLOW! -150K sats",this.timerFailOverlay.appendChild(i),document.body.appendChild(this.timerFailOverlay)}update(t,e){const n=Math.abs(Math.round(t*3.6));this.speedText.textContent=`${n} km/h`}setActiveJob(t,e=2){if(this.activeJob=t,this.activePhase=e,!t){this.jobStripEl.style.display="none",this.crewPanelEl.style.display="none";return}this.jobStripEl.style.display="flex",this._refreshJobStrip(t,null)}updateJobDistance(t){this.activeJob&&this._refreshJobStrip(this.activeJob,t)}updateCrewStatus(t,e,n){if(!n||t.length===0){this.crewPanelEl.style.display="none";return}this.crewPanelEl.style.display="flex",this.crewPanelEl.innerHTML="";const i=document.createElement("div");i.style.cssText=`
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      letter-spacing: 0.5px;
      text-transform: uppercase;
    `,i.textContent="Crew",this.crewPanelEl.appendChild(i);const o=document.createElement("div");o.style.cssText=`
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: center;
    `;for(const r of t){const a=e.includes(r),l=document.createElement("div");l.style.cssText=`
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
      `,l.textContent=pg(r),l.title=r,o.appendChild(l)}this.crewPanelEl.appendChild(o)}_refreshJobStrip(t,e){this.jobStripEl.innerHTML="";const n=document.createElement("div");if(n.style.cssText=`
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      text-align: right;
    `,e!==null){const i=e<1e3?`${Math.round(e)}m`:`${(e/1e3).toFixed(1)}km`;this.activePhase===1?(n.textContent=`📦 To workshop: ${i} — ${t.title}`,n.style.color="#FFD700"):this.activePhase===2?(n.textContent=`👥 Pick up crew: ${i} — ${t.title}`,n.style.color="#60AAFF"):(n.textContent=`🧱 To job site: ${i} — ${t.title}`,n.style.color="#C1666B")}else this.activePhase===1?(n.textContent=`📦 Workshop pickup — ${t.title}`,n.style.color="#FFD700"):this.activePhase===2?(n.textContent=`👥 Pick up the crew — ${t.title}`,n.style.color="#60AAFF"):(n.textContent=`🧱 ${t.title}`,n.style.color="#fff");this.jobStripEl.appendChild(n)}updateTravelTimer(t){if(t===null){this.travelTimerEl.style.display="none",this.travelTimerEl.classList.remove("hud-timer-pulse"),this.timerPulseInterval!==null&&(clearInterval(this.timerPulseInterval),this.timerPulseInterval=null);return}this.travelTimerEl.style.display="block",this.travelTimerEl.textContent=`⏱ ${fg(t)}`,t>60?(this.travelTimerEl.style.color="#5EDB7D",this.travelTimerEl.classList.remove("hud-timer-pulse")):t>30?(this.travelTimerEl.style.color="#FFD700",this.travelTimerEl.classList.remove("hud-timer-pulse")):(this.travelTimerEl.style.color="#ff4444",this.travelTimerEl.classList.contains("hud-timer-pulse")||this.travelTimerEl.classList.add("hud-timer-pulse"))}showTimerFail(t){const e=document.getElementById("hud-timer-fail-msg");e&&(e.textContent=`⏰ TOO SLOW! -${wi(t)}`),this.timerFailOverlay.style.display="flex",setTimeout(()=>{this.timerFailOverlay.style.display="none"},3e3)}showPhase1Complete(){const t=document.getElementById("hud-flash-msg");t&&(t.innerHTML='📦 Materials loaded!<br><span style="font-size:0.65em">Go pick up the crew.</span>',t.style.color="#FFD700"),this.flashOverlay.style.background="rgba(255, 210, 0, 0.10)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2500)}showCrewPickup(t,e){const n=document.getElementById("hud-flash-msg");n&&(e?n.innerHTML=`👤 ${t} on board!<br><span style="font-size:0.65em">Pick up ${e}!</span>`:(n.innerHTML='✅ Crew assembled!<br><span style="font-size:0.65em">Head to the job site.</span>',n.style.color="#5EDB7D"),e&&(n.style.color="#60AAFF")),this.flashOverlay.style.background=e?"rgba(96, 170, 255, 0.08)":"rgba(94, 219, 125, 0.12)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2200)}showSpillPenalty(t){this.spillPenaltyTimeout!==null&&(clearTimeout(this.spillPenaltyTimeout),this.spillPenaltyTimeout=null);const e=`-${wi(t)}`;this.moneyEl.style.color="#ff4444",this.moneyEl.textContent=`${wi(this.currentMoney)} ${e}`,this.spillPenaltyTimeout=setTimeout(()=>{this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=wi(this.currentMoney),this.spillPenaltyTimeout=null},1500)}showJobComplete(t,e){const n=document.getElementById("hud-flash-msg");n&&(n.style.color="#5EDB7D",n.innerHTML=`✅ JOB DONE!<br><span style="font-size:0.7em">+${wi(e)} — ${t}</span>`),this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashTimeout=null},3e3)}updateMoney(t){this.currentMoney=t,this.spillPenaltyTimeout===null&&(this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=wi(t)),!this.btcAchieved&&t>=ug&&(this.btcAchieved=!0,this._showBitcoinAchievement())}showToast(t,e=16777215){const n="#"+e.toString(16).padStart(6,"0"),i=document.createElement("div");i.textContent=t,Object.assign(i.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:n,color:"#fff",padding:"14px 24px",borderRadius:"14px",fontSize:"18px",fontWeight:"800",fontFamily:"system-ui, sans-serif",zIndex:"9000",opacity:"1",textShadow:"0 1px 4px rgba(0,0,0,0.5)",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",pointerEvents:"none",whiteSpace:"nowrap",transition:"opacity 0.5s ease"}),document.body.appendChild(i),setTimeout(()=>{i.style.opacity="0"},2e3),setTimeout(()=>i.remove(),2600)}_showBitcoinAchievement(){const t=document.createElement("div");t.style.cssText=`
      position: fixed; inset: 0; z-index: 9999;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      background: rgba(0,0,0,0.85);
      font-family: system-ui, sans-serif;
      animation: btcFadeIn 0.6s ease;
    `;const e=document.createElement("style");e.textContent=`
      @keyframes btcFadeIn { from { opacity:0; transform:scale(0.8); } to { opacity:1; transform:scale(1); } }
      @keyframes btcSpin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
    `,document.head.appendChild(e),t.innerHTML=`
      <div style="font-size:80px; animation: btcSpin 3s linear infinite; display:inline-block;">₿</div>
      <div style="color:#F7931A; font-size:clamp(32px,8vw,64px); font-weight:900; margin:16px 0 8px; text-shadow:0 0 30px #F7931A;">1 BITCOIN</div>
      <div style="color:#FFD700; font-size:clamp(16px,4vw,28px); font-weight:700; margin-bottom:8px;">ACHIEVED</div>
      <div style="color:#aaa; font-size:14px; margin-bottom:32px;">100,000,000 sats earned plastering Melbourne</div>
      <div style="color:#888; font-size:12px; font-style:italic;">Jarrad wants his cut. You pretend not to hear him.</div>
      <button onclick="this.parentElement.remove()" style="
        margin-top:40px; padding:14px 40px;
        background:#F7931A; color:#000; border:none;
        border-radius:50px; font-size:18px; font-weight:900;
        cursor:pointer; letter-spacing:1px;
      ">HODL 🚀</button>
    `,document.body.appendChild(t)}}const ii=[{id:"timber-bluestone",file:"images/270ae674-ae77-46c0-a931-d8b3890bb728.jpg",name:"Timber & Bluestone"},{id:"angular-bay",file:"images/4d5ff18e-1129-4195-9108-a64f3c8e4d34.jpg",name:"Angular Bay House"},{id:"haussmann",file:"images/5c2eabb7-65ce-4f76-b14c-8eb37a3f9537.jpg",name:"Haussmann Mansion"},{id:"brutalist",file:"images/60007f2e-318f-412e-b2ad-4d77445ee417.jpg",name:"Brutalist Compound"},{id:"sculptural-olive",file:"images/787315c4-a661-4dca-8567-b7a18f104665.jpg",name:"Sculptural Olive"},{id:"curved-balcony",file:"images/842fccc6-6bad-4509-81d8-ecb2dc14c80c.jpg",name:"Curved Balcony"},{id:"corten-plaster",file:"images/e3cbd2c9-7944-4074-a439-1033c9f2c166.jpg",name:"Corten & Plaster"},{id:"terracotta-mono",file:"images/f2ed55b5-ba78-4a78-8bad-e57a86b6bcef.jpg",name:"Terracotta Monolith"}],Xc="tem-rush-achievements";function ys(){try{return JSON.parse(localStorage.getItem(Xc)||"[]")}catch{return[]}}function gg(s){const t=ys();return t.includes(s)?!1:(t.push(s),localStorage.setItem(Xc,JSON.stringify(t)),!0)}function xg(){return ys().length>=ii.length}function _g(){const s=ys(),t=ii.filter(e=>!s.includes(e.id));return t.length>0?t[Math.floor(Math.random()*t.length)]:ii[Math.floor(Math.random()*ii.length)]}function vg(s,t,e){s.fillStyle="#C8B89A",s.fillRect(0,0,t,e);for(let n=0;n<800;n++){const i=Math.random()*t,o=Math.random()*e,r=20+Math.random()*60,a=Math.random()*Math.PI,l=Math.floor(180+Math.random()*40);s.strokeStyle=`rgb(${l},${l-10},${l-20})`,s.lineWidth=1+Math.random()*3,s.globalAlpha=.3+Math.random()*.4,s.beginPath(),s.moveTo(i,o),s.lineTo(i+Math.cos(a)*r,o+Math.sin(a)*r),s.stroke()}s.globalAlpha=1,s.font="bold 48px system-ui",s.textAlign="center",s.fillStyle="rgba(180,160,130,0.4)",s.fillText("TROWELED EARTH",t/2,e/2-20),s.font="22px system-ui",s.fillStyle="rgba(180,160,130,0.3)",s.fillText("Scratch to reveal",t/2,e/2+20)}function yg(s,t,e,n,i,o=45){s.globalCompositeOperation="destination-out",s.strokeStyle="rgba(0,0,0,1)",s.lineCap="round",s.lineJoin="round",s.lineWidth=o*2,s.beginPath(),s.moveTo(t,e),s.lineTo(n,i),s.stroke(),s.globalCompositeOperation="source-over"}function zl(s,t,e){const n=s.getImageData(0,0,t,e).data;let i=0;const o=t*e;for(let r=3;r<n.length;r+=4)n[r]<128&&i++;return i/o}function Mg(s,t,e){s.save(),s.translate(t,e),s.rotate(Math.PI/4),s.strokeStyle="#8B6914",s.lineWidth=5,s.lineCap="round",s.beginPath(),s.moveTo(0,0),s.lineTo(0,36),s.stroke(),s.fillStyle="#C0C0C0",s.strokeStyle="#888",s.lineWidth=1.5,s.beginPath(),s.moveTo(-14,0),s.lineTo(14,0),s.lineTo(10,-28),s.lineTo(-10,-28),s.closePath(),s.fill(),s.stroke(),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.moveTo(-8,-4),s.lineTo(4,-4),s.lineTo(2,-22),s.lineTo(-6,-22),s.closePath(),s.fill(),s.restore()}function Gl(s,t,e,n){const i=Math.max(e/t.naturalWidth,n/t.naturalHeight),o=t.naturalWidth*i,r=t.naturalHeight*i,a=(e-o)/2,l=(n-r)/2;s.drawImage(t,a,l,o,r)}class wg{constructor(){R(this,"container",null);R(this,"canvas",null);R(this,"ctx",null);R(this,"scratch",null);R(this,"sctx",null);R(this,"onComplete",null);R(this,"photo",null);R(this,"img",null);R(this,"imgLoaded",!1);R(this,"lastX",0);R(this,"lastY",0);R(this,"pointerDown",!1);R(this,"cursorX",-999);R(this,"cursorY",-999);R(this,"DURATION",30);R(this,"timeLeft",30);R(this,"timerInterval",null);R(this,"rafId",0);R(this,"done",!1);R(this,"revealed",0);R(this,"lastSampleTime",0);R(this,"SAMPLE_INTERVAL",250);R(this,"toastMsg","");R(this,"toastAlpha",0);R(this,"_onMouseMove");R(this,"_onMouseDown");R(this,"_onMouseUp");R(this,"_onTouchStart");R(this,"_onTouchMove");R(this,"_onTouchEnd");this._onMouseMove=this.handleMouseMove.bind(this),this._onMouseDown=this.handleMouseDown.bind(this),this._onMouseUp=()=>{this.pointerDown=!1},this._onTouchStart=this.handleTouchStart.bind(this),this._onTouchMove=this.handleTouchMove.bind(this),this._onTouchEnd=()=>{this.pointerDown=!1}}mount(t,e){if(this.container=t,this.onComplete=e,this.done=!1,this.revealed=0,this.timeLeft=this.DURATION,this.toastMsg="",this.toastAlpha=0,this.photo=_g(),this.canvas=document.createElement("canvas"),this.canvas.width=t.clientWidth||window.innerWidth,this.canvas.height=t.clientHeight||window.innerHeight,this.canvas.style.cssText="position:absolute;inset:0;display:block;cursor:none;touch-action:none;",this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx)throw new Error("Canvas 2D not supported");if(t.appendChild(this.canvas),this.scratch=document.createElement("canvas"),this.scratch.width=this.canvas.width,this.scratch.height=this.canvas.height,this.sctx=this.scratch.getContext("2d",{willReadFrequently:!0}),!this.sctx)throw new Error("Scratch canvas 2D not supported");vg(this.sctx,this.scratch.width,this.scratch.height),this.img=new Image,this.img.onload=()=>{this.imgLoaded=!0},this.img.onerror=()=>{this.imgLoaded=!0},this.img.src=this.photo.file,this.canvas.addEventListener("mousemove",this._onMouseMove),this.canvas.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),this.canvas.addEventListener("touchstart",this._onTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.canvas.addEventListener("touchend",this._onTouchEnd),this.timerInterval=setInterval(()=>{this.done||(this.timeLeft--,this.timeLeft<=0&&this.finish())},1e3),this.loop()}handleMouseDown(t){this.pointerDown=!0;const e=this.canvas.getBoundingClientRect();this.lastX=t.clientX-e.left,this.lastY=t.clientY-e.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleMouseMove(t){const e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top;this.cursorX=n,this.cursorY=i,this.pointerDown&&!this.done&&(this.scrape(this.lastX,this.lastY,n,i),this.lastX=n,this.lastY=i)}handleTouchStart(t){t.preventDefault(),this.pointerDown=!0;const e=t.touches[0],n=this.canvas.getBoundingClientRect();this.lastX=e.clientX-n.left,this.lastY=e.clientY-n.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleTouchMove(t){if(t.preventDefault(),!this.pointerDown||this.done)return;const e=t.touches[0],n=this.canvas.getBoundingClientRect(),i=e.clientX-n.left,o=e.clientY-n.top;this.cursorX=i,this.cursorY=o,this.scrape(this.lastX,this.lastY,i,o),this.lastX=i,this.lastY=o}scrape(t,e,n,i){if(!this.sctx||!this.scratch||this.done)return;yg(this.sctx,t,e,n,i,45);const o=performance.now();o-this.lastSampleTime>this.SAMPLE_INTERVAL&&(this.lastSampleTime=o,this.revealed=zl(this.sctx,this.scratch.width,this.scratch.height),this.revealed>=.85&&this.finish())}loop(){if(this.done&&this.toastAlpha<=0)return;const t=this.ctx,e=this.canvas;if(!t||!e)return;const n=e.width,i=e.height;t.clearRect(0,0,n,i),this.imgLoaded&&this.img&&this.img.naturalWidth>0?Gl(t,this.img,n,i):(t.fillStyle="#2a2a20",t.fillRect(0,0,n,i)),this.scratch&&t.drawImage(this.scratch,0,0),this.done||this.drawHUD(t,n,i),this.cursorX>0&&!this.done&&Mg(t,this.cursorX,this.cursorY),this.toastAlpha>0&&(this.drawToast(t,n,i),this.toastAlpha-=.012),this.rafId=requestAnimationFrame(()=>this.loop())}drawHUD(t,e,n){const i=this.timeLeft/this.DURATION,o=e*.8,r=e*.1,a=16,l=14,c=7;t.fillStyle="rgba(0,0,0,0.4)",this.roundRect(t,r,a,o,l,c),t.fill();const h=i<.33?"#F07070":i<.6?"#F7C948":"#5EDB7D";t.fillStyle=h,this.roundRect(t,r,a,o*i,l,c),t.fill(),t.fillStyle="#fff",t.font=`bold ${Math.round(n*.03)}px system-ui`,t.textAlign="center",t.shadowColor="rgba(0,0,0,0.8)",t.shadowBlur=6,t.fillText(`${Math.ceil(this.timeLeft)}s`,e/2,a+l+22);const d=Math.round(this.revealed*100);t.font=`900 ${Math.round(n*.09)}px system-ui`,t.textAlign="center",t.fillStyle="rgba(255,255,255,0.9)",t.shadowColor="rgba(0,0,0,0.9)",t.shadowBlur=12,t.fillText(`${d}%`,e/2,n-32),t.shadowBlur=0,this.timeLeft>25&&(t.font=`bold ${Math.round(n*.03)}px system-ui`,t.fillStyle="rgba(255,255,255,0.85)",t.textAlign="center",t.fillText("🪣  Scrape away the plaster!",e/2,n/2))}roundRect(t,e,n,i,o,r){i<0||(t.beginPath(),t.moveTo(e+r,n),t.lineTo(e+i-r,n),t.quadraticCurveTo(e+i,n,e+i,n+r),t.lineTo(e+i,n+o-r),t.quadraticCurveTo(e+i,n+o,e+i-r,n+o),t.lineTo(e+r,n+o),t.quadraticCurveTo(e,n+o,e,n+o-r),t.lineTo(e,n+r),t.quadraticCurveTo(e,n,e+r,n),t.closePath())}drawToast(t,e,n){const i=Math.min(1,this.toastAlpha);t.save(),t.globalAlpha=i,t.fillStyle="rgba(0,0,0,0.7)",t.font=`bold ${Math.round(n*.035)}px system-ui`,t.textAlign="center";const o=this.toastMsg.split(`
`),r=Math.round(n*.045),a=o.length*r+24,l=n*.45-a/2,c=e*.85,h=(e-c)/2;this.roundRect(t,h,l,c,a,16),t.fill(),t.fillStyle="#fff",t.shadowColor="rgba(0,0,0,0.6)",t.shadowBlur=8,o.forEach((d,u)=>{t.fillText(d,e/2,l+22+u*r)}),t.restore()}finish(){if(this.done)return;this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.sctx&&this.scratch&&(this.revealed=zl(this.sctx,this.scratch.width,this.scratch.height));const t=Math.round(this.revealed*100),e=Math.max(20,t),n=e/100,i=this.photo,o=gg(i.id),r=ys().length,a=xg();this.showResultScreen(e,i,o,r,a,n)}showResultScreen(t,e,n,i,o,r){const a=this.ctx,l=this.canvas;if(!a||!l)return;const c=l.width,h=l.height;a.clearRect(0,0,c,h),this.imgLoaded&&this.img&&this.img.naturalWidth>0?Gl(a,this.img,c,h):(a.fillStyle="#2a2a20",a.fillRect(0,0,c,h)),this.scratch&&a.drawImage(this.scratch,0,0),a.fillStyle="rgba(0,0,0,0.65)",a.fillRect(0,0,c,h);const d=t>=85?"#5EDB7D":t>=60?"#F7C948":"#F07070";a.font=`900 ${Math.round(h*.15)}px system-ui`,a.textAlign="center",a.fillStyle=d,a.shadowColor="rgba(0,0,0,0.8)",a.shadowBlur=20,a.fillText(`${t}%`,c/2,h*.35),a.font=`bold ${Math.round(h*.04)}px system-ui`,a.fillStyle="#fff",a.shadowBlur=10,a.fillText(`📸 ${e.name}`,c/2,h*.47);let u;o?u="🏆 FULL TEM COLLECTION!":n?u="✨ NEW PHOTO UNLOCKED!":u="Already in your collection",a.font=`bold ${Math.round(h*.032)}px system-ui`,a.fillStyle=o?"#FFD700":n?"#5EDB7D":"#aaa",a.shadowBlur=8,a.fillText(u,c/2,h*.56),a.font=`${Math.round(h*.026)}px system-ui`,a.fillStyle="rgba(255,255,255,0.75)",a.shadowBlur=4,a.fillText(`Collection: ${i} / ${ii.length}`,c/2,h*.64),a.shadowBlur=0;const p=o?"🏆 Full TEM Collection complete!":n?`📸 New photo unlocked: ${e.name}`:`${e.name} — already in collection`,g={score:t,qualityPct:r,message:p};setTimeout(()=>{var x;return(x=this.onComplete)==null?void 0:x.call(this,g)},2800)}unmount(){this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.rafId&&cancelAnimationFrame(this.rafId),this.canvas&&(this.canvas.removeEventListener("mousemove",this._onMouseMove),this.canvas.removeEventListener("mousedown",this._onMouseDown),this.canvas.removeEventListener("touchstart",this._onTouchStart),this.canvas.removeEventListener("touchmove",this._onTouchMove),this.canvas.removeEventListener("touchend",this._onTouchEnd),this.canvas.remove()),window.removeEventListener("mouseup",this._onMouseUp),this.canvas=null,this.ctx=null,this.scratch=null,this.sctx=null,this.container=null,this.onComplete=null,this.img=null}}const xe=7,eo=5,_n=eo*xe,bg=[-6,6],Sg=26,Ys=5,Hl=13,Vl=11,Wl=3.5,Eg=-30,bi=.4;class Tg{constructor(){R(this,"overlay");R(this,"renderer");R(this,"scene");R(this,"camera");R(this,"rafId",0);R(this,"lastTs",0);R(this,"px",0);R(this,"py",0);R(this,"vx",0);R(this,"vy",0);R(this,"onGround",!1);R(this,"jumpsLeft",2);R(this,"climbPole",null);R(this,"swingBar",null);R(this,"swingAngle",0);R(this,"swingOmega",0);R(this,"char");R(this,"charGroup");R(this,"facingRight",!0);R(this,"platforms",[]);R(this,"poles",[]);R(this,"swingBars",[]);R(this,"heartsEl");R(this,"timerEl");R(this,"lives",3);R(this,"timer",90);R(this,"gameOver",!1);R(this,"delivered",!1);R(this,"keys",{left:!1,right:!1,up:!1,down:!1});R(this,"jumpTap",!1);R(this,"onCompleteFn")}start(t){this.onCompleteFn=t,this._createOverlay(),this._createScene(),this._buildBackground(),this._buildLevel(),this._buildHUD(),this._buildControls(),this.px=0,this.py=.5,this.lastTs=performance.now(),this.rafId=requestAnimationFrame(e=>this._loop(e))}_createOverlay(){this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position:fixed; inset:0; z-index:9000; overflow:hidden; touch-action:none;
      background:#87CEEB;
    `,document.body.appendChild(this.overlay)}_createScene(){const t=window.innerWidth,e=window.innerHeight,n=document.createElement("canvas");n.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;",this.overlay.appendChild(n),this.renderer=new la({canvas:n,antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setSize(t,e),this.renderer.shadowMap.enabled=!0,this.scene=new ca,this.scene.background=new yt(8900331),this.scene.fog=new go(8900331,.018),this.camera=new De(42,t/e,.1,200),this.camera.position.set(0,12,20),this.camera.lookAt(0,10,0);const i=new pa(16777215,.6);this.scene.add(i);const o=new Ni(16775400,1.1);o.position.set(8,30,15),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),o.shadow.camera.near=.5,o.shadow.camera.far=80,o.shadow.camera.left=-15,o.shadow.camera.right=15,o.shadow.camera.top=40,o.shadow.camera.bottom=-5,this.scene.add(o);const r=new Ni(12638463,.4);r.position.set(-5,10,5),this.scene.add(r),this.char=new vs(kn.Jarrad),this.charGroup=this.char.group,this.charGroup.scale.setScalar(1),this.scene.add(this.charGroup)}_buildBackground(){const t=(i,o,r,a,l)=>{const c=new L(i,new j({color:o}));return c.position.set(r,a,l),c.receiveShadow=!0,this.scene.add(c),c};t(new de(80,60),11589872,0,22,-12);const e=[[-14,10],[-10,14],[-6,8],[8,16],[12,11],[16,9]];for(const[i,o]of e)t(new Q(4,o,1),6975632,i,o/2-1,-9);const n=_n+4;t(new Q(12,n,.6),15260864,0,n/2-1,-1.5),t(new Q(12.6,.5,.9),13945e3,0,n-1,-1.4),t(new Q(12,.4,.7),13681824,0,0,-1.4);for(let i=0;i<eo;i++){const o=i*xe+2.5;for(const r of[-3.5,0,3.5])t(new Q(2.2,3.2,.2),3359846,r,o,-1.1),t(new Q(2,.15,.25),12300432,r,o+1.7,-1.05)}t(new Q(20,.5,5),3815474,0,-.25,.5),t(new Q(10,.5,1.2),13154440,0,.25,1),t(new Q(10,1.2,.15),12101752,0,.6,1.57),t(new Q(.15,1.2,1.2),12101752,-5,.6,1),t(new Q(.15,1.2,1.2),12101752,5,.6,1)}_buildLevel(){for(const t of bg)this._addScaffoldPole(t,0,_n+3),this.poles.push({x:t,y1:0,y2:_n+3});this._addScaffoldPole(-2.5,0,_n+3),this._addScaffoldPole(2.5,0,_n+3);for(let t=0;t<=eo;t++){const e=t*xe;this._addTube(-6,6,e,10066346,.07)}for(let t=0;t<eo;t++){const e=t*xe,n=(t+1)*xe;this._addDiag(-6,e,6,n),this._addDiag(6,e,-6,n)}this._addPlat(-5.5,5.5,0,"normal"),this._addPlat(-5.5,-.8,xe*1,"normal"),this._addPlat(.8,5.5,xe*1,"normal"),this._addPlat(-5.5,-1,xe*2,"normal"),this._addPlat(1.5,4.5,xe*2,"crumble"),this._addPlat(-5.5,-1.8,xe*3,"normal"),this._addPlat(1.8,5.5,xe*3,"normal"),this._addPlat(-1.5,1.5,xe*3,"moving"),this._addPlat(-5.5,-2.5,xe*4,"normal"),this._addPlat(-.8,.8,xe*4+1.2,"normal"),this._addPlat(2.5,5.5,xe*4,"normal"),this._addSwingBar(0,xe*1+3.5,2.5),this._addSwingBar(0,xe*3+3.5,2.5),this._addPlat(-5.5,5.5,_n,"win"),this._addSign(0,_n+1.8,"⭐ DELIVER HERE ⭐",16746496),this._addBucket(-3.5,.8)}_addScaffoldPole(t,e,n){const i=n-e,o=new Vt(.07,.07,i,8),r=new j({color:10526896}),a=new L(o,r);a.position.set(t,e+i/2,.3),a.castShadow=!0,this.scene.add(a);for(let l=e;l<=n;l+=xe){const c=new fe(.12,6,5),h=new L(c,r);h.position.set(t,l,.3),this.scene.add(h)}}_addTube(t,e,n,i,o){const r=e-t,a=new Vt(o,o,r,7),l=new j({color:i}),c=new L(a,l);c.rotation.z=Math.PI/2,c.position.set((t+e)/2,n,.3),this.scene.add(c)}_addDiag(t,e,n,i){const o=n-t,r=i-e,a=Math.sqrt(o*o+r*r),l=new Vt(.04,.04,a,6),c=new j({color:8947872}),h=new L(l,c);h.rotation.z=Math.atan2(r,o)-Math.PI/2,h.position.set((t+n)/2,(e+i)/2,.3),this.scene.add(h)}_addPlat(t,e,n,i){const o=e-t,r={normal:9134608,moving:13918224,crumble:8939042,win:16763904}[i],a=new Q(o,.28,.8),l=new j({color:r}),c=new L(a,l);c.position.set((t+e)/2,n+.14,.3),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);for(let h=t+.6;h<e;h+=.9){const d=new Q(.06,.3,.82),u=new j({color:r-1118464}),p=new L(d,u);p.position.set(h-(t+e)/2,0,0),c.add(p)}this.platforms.push({x1:t,x2:e,y:n,mesh:c,type:i,moveDir:1,crumbleTimer:0,crumbled:!1})}_addSwingBar(t,e,n){const i=new Vt(.09,.09,3,8),o=new j({color:16755200,emissive:8930304,emissiveIntensity:.5}),r=new L(i,o);r.rotation.z=Math.PI/2,r.position.set(t,e,.5),this.scene.add(r);const a=new fe(.22,8,8),l=new He({color:16772608,transparent:!0,opacity:.7}),c=new L(a,l);c.position.set(t,e,.6),this.scene.add(c),this.swingBars.push({anchorX:t,anchorY:e,radius:n,mesh:r})}_addSign(t,e,n,i){const o=new Q(6,.8,.15),r=new j({color:i,emissive:i,emissiveIntensity:.3}),a=new L(o,r);a.position.set(t,e,.5),this.scene.add(a)}_addBucket(t,e){const n=new Vt(.25,.2,.5,8),i=new j({color:12674667,emissive:6684689,emissiveIntensity:.3}),o=new L(n,i);o.position.set(t,e,.5),this.scene.add(o)}_buildHUD(){const t=document.createElement("div");t.style.cssText=`
      position:absolute; top:0; left:0; right:0; z-index:100;
      display:flex; justify-content:space-between; align-items:center;
      padding:14px 18px; font-family:system-ui,sans-serif; pointer-events:none;
    `,this.heartsEl=document.createElement("div"),this.heartsEl.style.fontSize="22px",this._updateHearts();const e=document.createElement("div");e.style.cssText=`
      background:rgba(0,0,0,0.55); color:#fff; padding:6px 14px;
      border-radius:20px; font-size:13px; font-weight:800; letter-spacing:1px;
    `,e.textContent="🏗️ SCAFFOLD CLIMB",this.timerEl=document.createElement("div"),this.timerEl.style.cssText=`
      background:rgba(0,0,0,0.55); color:#fff; padding:6px 14px;
      border-radius:20px; font-size:14px; font-weight:800; min-width:52px; text-align:center;
    `,t.appendChild(this.heartsEl),t.appendChild(e),t.appendChild(this.timerEl),this.overlay.appendChild(t)}_updateHearts(){this.heartsEl.textContent="❤️".repeat(this.lives)+"🖤".repeat(Math.max(0,3-this.lives))}_buildControls(){const t=document.createElement("div");t.style.cssText=`
      position:absolute; bottom:12px; left:0; right:0; z-index:100;
      display:flex; justify-content:space-between; align-items:flex-end;
      padding:0 20px 8px;
    `;const e=document.createElement("div");e.style.cssText="display:grid; grid-template-columns:70px 70px 70px; grid-template-rows:70px 70px; gap:6px;";const n=(g,x,m,f)=>{const b=document.createElement("div");return b.style.cssText=`
        grid-row:${m}; grid-column:${f};
        background:${x}; border-radius:50%; color:#fff;
        font-size:22px; display:flex; align-items:center; justify-content:center;
        box-shadow:0 4px 10px rgba(0,0,0,0.4); touch-action:none; user-select:none;
        cursor:pointer;
      `,b.textContent=g,b},i=n("▲","rgba(60,60,160,0.88)",1,2),o=n("◀","rgba(70,70,70,0.88)",2,1),r=n("▼","rgba(60,60,160,0.88)",2,2),a=n("▶","rgba(70,70,70,0.88)",2,3);e.appendChild(i),e.appendChild(o),e.appendChild(r),e.appendChild(a);const l=document.createElement("div");l.style.cssText=`
      width:92px; height:92px; border-radius:50%;
      background:rgba(30,180,30,0.9); color:#fff;
      font-size:13px; font-weight:900; letter-spacing:0.5px;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 5px 15px rgba(0,0,0,0.45); touch-action:none; user-select:none;
      cursor:pointer;
    `,l.textContent="JUMP";const c=(g,x,m)=>{g.addEventListener("touchstart",f=>{f.preventDefault(),x()},{passive:!1}),g.addEventListener("touchend",f=>{f.preventDefault(),m()},{passive:!1}),g.addEventListener("mousedown",x),g.addEventListener("mouseup",m)};c(o,()=>this.keys.left=!0,()=>this.keys.left=!1),c(a,()=>this.keys.right=!0,()=>this.keys.right=!1),c(i,()=>this.keys.up=!0,()=>this.keys.up=!1),c(r,()=>this.keys.down=!0,()=>this.keys.down=!1);const h=()=>{this.jumpTap=!0};l.addEventListener("touchstart",g=>{g.preventDefault(),h()},{passive:!1}),l.addEventListener("mousedown",h);const d={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down",KeyA:"left",KeyD:"right",KeyW:"up",KeyS:"down"},u=g=>{if(d[g.code]){const x=d[g.code];x==="jump"?this.jumpTap=!0:this.keys[x]=!0}(g.code==="Space"||g.code==="KeyZ")&&(this.jumpTap=!0)},p=g=>{const x=d[g.code];x&&x!=="jump"&&(this.keys[x]=!1)};window.addEventListener("keydown",u),window.addEventListener("keyup",p),this.overlay.addEventListener("remove",()=>{window.removeEventListener("keydown",u),window.removeEventListener("keyup",p)}),t.appendChild(e),t.appendChild(l),this.overlay.appendChild(t)}_loop(t){if(this.gameOver)return;this.rafId=requestAnimationFrame(n=>this._loop(n));const e=Math.min((t-this.lastTs)/1e3,.05);this.lastTs=t,this._update(e),this.renderer.render(this.scene,this.camera),this.jumpTap=!1}_update(t){if(this.timer=Math.max(0,this.timer-t),this.timerEl.textContent=`⏱ ${Math.ceil(this.timer)}s`,this.timer<=0&&!this.delivered){this._end(!1);return}this.char.update(t);for(const n of this.platforms)if(n.type==="moving"&&(n.x1+=2.5*(n.moveDir??1)*t,n.x2+=2.5*(n.moveDir??1)*t,n.mesh.position.x=(n.x1+n.x2)/2,(n.x2>5.2||n.x1<-1.8)&&(n.moveDir=-(n.moveDir??1))),n.type==="crumble"&&!n.crumbled)if(this.onGround&&this.px>=n.x1-bi&&this.px<=n.x2+bi&&Math.abs(this.py-n.y)<.3){n.crumbleTimer=(n.crumbleTimer??0)+t;const o=Math.sin(n.crumbleTimer*40)*.06*Math.min(1,n.crumbleTimer);n.mesh.position.z=.3+o,n.crumbleTimer>1.2&&(n.crumbled=!0,n.mesh.visible=!1)}else(n.crumbleTimer??0)>0&&!n.crumbled&&(n.crumbleTimer=0);this.swingBar?this._physicsSwing(t):this.climbPole?this._physicsClimb(t):this._physicsPlatform(t),this.charGroup.position.set(this.px,this.py,.3),this.charGroup.rotation.y=this.facingRight?-.15:Math.PI+.15;const e=Math.max(8,Math.min(this.py+6,_n+2));if(this.camera.position.y+=(e-this.camera.position.y)*.07,this.camera.lookAt(0,this.camera.position.y-4,0),this.py<-3.5){this._loseLife();return}!this.delivered&&this.py>=_n-.5&&Math.abs(this.px)<5&&(this.delivered=!0,this._end(!0))}_physicsPlatform(t){if(!this.onGround){for(const e of this.poles)if(Math.abs(this.px-e.x)<.5&&this.py>=e.y1-.5&&this.py<=e.y2&&this.keys.up){this.climbPole=e,this.px=e.x,this.vx=0,this.vy=0;return}}if(this.onGround||(this.vy=Math.max(this.vy-Sg*t,Eg)),this.keys.left?(this.vx=-Ys,this.facingRight=!1):this.keys.right?(this.vx=Ys,this.facingRight=!0):this.vx*=.6,this.jumpTap)if(this.onGround)this.vy=Hl,this.onGround=!1,this.jumpsLeft=1;else if(this.jumpsLeft>0)this.vy=Vl,this.jumpsLeft--;else for(const e of this.swingBars){const n=this.px-e.anchorX,i=this.py-e.anchorY,o=Math.sqrt(n*n+i*i);if(o<e.radius+1.5&&this.py<e.anchorY+.5){this.swingBar=e;const r=Math.max(o,e.radius);this.swingAngle=Math.atan2(n,-i),this.swingOmega=this.vx/r,this.vx=0,this.vy=0;return}}if(!this.onGround)for(const e of this.swingBars){const n=Math.abs(this.py-e.anchorY),i=Math.abs(this.px-e.anchorX);if(n<.6&&i<e.radius&&this.vy<0){this.swingBar=e,this.swingAngle=Math.atan2(this.px-e.anchorX,-(this.py-e.anchorY)),this.swingOmega=this.vx/e.radius,this.vx=0,this.vy=0;return}}this.px+=this.vx*t,this.py+=this.vy*t,this.px=Math.max(-6.2,Math.min(6.2,this.px)),this.onGround=!1;for(const e of this.platforms)if(!e.crumbled&&this.px+bi>e.x1&&this.px-bi<e.x2&&this.py>e.y-.5&&this.py<e.y+1&&this.vy<=0){this.py=e.y,this.vy=0,this.onGround=!0,this.jumpsLeft=2;break}}_physicsClimb(t){const e=this.climbPole;this.keys.up&&(this.py+=Wl*t),this.keys.down&&(this.py-=Wl*t);for(const n of this.platforms)if(!n.crumbled&&Math.abs(this.py-n.y)<.4&&this.px>=n.x1&&this.px<=n.x2){this.climbPole=null,this.py=n.y,this.onGround=!0,this.jumpsLeft=2;return}(this.py<e.y1||this.py>e.y2)&&(this.climbPole=null),this.jumpTap&&(this.climbPole=null,this.vy=Hl*.85,this.jumpsLeft=1,this.keys.left?(this.vx=-Ys*1.3,this.facingRight=!1):this.keys.right&&(this.vx=Ys*1.3,this.facingRight=!0))}_physicsSwing(t){const e=this.swingBar,n=e.radius;if(this.swingOmega+=-(9.8/n)*Math.sin(this.swingAngle)*t,this.keys.left&&(this.swingOmega-=4*t),this.keys.right&&(this.swingOmega+=4*t),this.swingOmega*=.993,this.swingAngle+=this.swingOmega*t,this.px=e.anchorX+n*Math.sin(this.swingAngle),this.py=e.anchorY-n*Math.cos(this.swingAngle),this.facingRight=this.swingOmega>0,this.jumpTap){this.swingBar=null;const i=this.swingOmega*n;this.vx=i*Math.cos(this.swingAngle)*1.4,this.vy=Math.max(Vl*.75,Math.abs(i)*.8+4),this.jumpsLeft=1,this.onGround=!1}for(const i of this.platforms)!i.crumbled&&this.px+bi>i.x1&&this.px-bi<i.x2&&Math.abs(this.py-i.y)<.4&&this.swingOmega<1.5&&(this.swingBar=null,this.py=i.y,this.vx=0,this.vy=0,this.onGround=!0,this.jumpsLeft=2)}_loseLife(){if(this.lives--,this._updateHearts(),this.lives<=0){this._end(!1);return}const t=Math.max(0,Math.floor(this.py/xe)-1);this.px=0,this.py=t*xe,this.vx=0,this.vy=0,this.onGround=!1,this.jumpsLeft=2,this.climbPole=null,this.swingBar=null}_end(t){if(this.gameOver)return;this.gameOver=!0,cancelAnimationFrame(this.rafId);const e=t?Math.max(.55,.55+this.timer/90*.45):.25+this.lives/3*.2,n=document.createElement("div");n.style.cssText=`
      position:absolute; top:50%; left:50%; transform:translate(-50%,-55%);
      background:rgba(0,0,0,0.82); color:#fff; padding:32px 40px;
      border-radius:22px; font-size:26px; font-weight:900; text-align:center;
      font-family:system-ui,sans-serif; z-index:200;
      box-shadow:0 8px 32px rgba(0,0,0,0.6);
    `,n.innerHTML=t?`🏆 DELIVERED!<br><small style="font-size:15px;font-weight:500">Quality: ${Math.round(e*100)}%</small>`:'💀 FAILED<br><small style="font-size:15px;font-weight:500">Better luck next time...</small>',this.overlay.appendChild(n),setTimeout(()=>{this._cleanup(),this.onCompleteFn({score:Math.round(e*100),qualityPct:e,message:t?"Scaffold conquered!":"Try again!"})},t?1800:2200)}_cleanup(){cancelAnimationFrame(this.rafId),this.renderer.dispose(),this.overlay.dispatchEvent(new Event("remove")),this.overlay.remove()}mount(t,e){this.start(e)}unmount(){this.gameOver||(this.gameOver=!0,this._cleanup())}}class Ag{constructor(){R(this,"overlay");R(this,"active",!1);R(this,"trowelingGame",null);R(this,"scaffoldGame",null);R(this,"safetyTimer",null);this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position: fixed;
      inset: 0;
      z-index: 9999;
      background: #1a1a14;
      display: none;
      overflow: hidden;
    `,document.body.appendChild(this.overlay)}isActive(){return this.active}startTroweling(t){this.stop(),this.active=!0,this.overlay.style.display="block",this.overlay.innerHTML="";const e=document.createElement("button");e.textContent="✓ DONE",e.style.cssText=`
      position: absolute; top: 16px; right: 16px;
      z-index: 10001;
      background: rgba(193,102,107,0.95);
      color: #fff; border: none; border-radius: 10px;
      padding: 12px 22px; font-size: 16px; font-weight: 800;
      cursor: pointer; font-family: system-ui, sans-serif;
      touch-action: manipulation;
    `,e.addEventListener("click",()=>{this.stop(),t({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(e),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),t({score:70,qualityPct:.7,message:"Time up!"}))},6e4),setTimeout(()=>{if(this.active)try{this.trowelingGame=new wg,this.trowelingGame.mount(this.overlay,n=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),t(n)})}catch(n){console.error("TrowelingGame init failed:",n);const i=document.createElement("div");i.style.cssText=`
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; height:100%; color:#fff;
          font-family:system-ui,sans-serif; gap:24px; padding:40px;
          text-align:center;
        `,i.innerHTML=`
          <div style="font-size:60px">🪣</div>
          <div style="font-size:30px; font-weight:800;">PLASTER APPLIED!</div>
          <div style="font-size:16px; opacity:0.7;">Tap DONE to collect your pay</div>
        `,this.overlay.appendChild(i)}},120)}startScaffold(t){this.stop(),this.active=!0,this.overlay.style.display="block",this.overlay.innerHTML="";const e=document.createElement("button");e.textContent="✓ DONE",e.style.cssText=`
      position: absolute; top: 16px; right: 16px;
      z-index: 10001;
      background: rgba(193,102,107,0.95);
      color: #fff; border: none; border-radius: 10px;
      padding: 12px 22px; font-size: 16px; font-weight: 800;
      cursor: pointer; font-family: system-ui, sans-serif;
      touch-action: manipulation;
    `,e.addEventListener("click",()=>{this.stop(),t({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(e),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),t({score:50,qualityPct:.5,message:"Time up on the scaffold!"}))},9e4),setTimeout(()=>{if(this.active)try{this.scaffoldGame=new Tg,this.scaffoldGame.mount(this.overlay,n=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),t(n)})}catch(n){console.error("ScaffoldGame init failed:",n);const i=document.createElement("div");i.style.cssText=`
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; height:100%; color:#fff;
          font-family:system-ui,sans-serif; gap:24px; padding:40px;
          text-align:center;
        `,i.innerHTML=`
          <div style="font-size:60px">🪣</div>
          <div style="font-size:30px; font-weight:800;">SCAFFOLD CLIMBED!</div>
          <div style="font-size:16px; opacity:0.7;">Tap DONE to collect your pay</div>
        `,this.overlay.appendChild(i)}},120)}startRandom(t){Math.random()<.5?this.startTroweling(t):this.startScaffold(t)}stop(){this.safetyTimer&&(clearTimeout(this.safetyTimer),this.safetyTimer=null),this.trowelingGame&&(this.trowelingGame.unmount(),this.trowelingGame=null),this.scaffoldGame&&(this.scaffoldGame.unmount(),this.scaffoldGame=null),this.overlay.style.display="none",this.overlay.innerHTML="",this.active=!1}}class Cg{constructor(){R(this,"overlay",null)}show(){if(this.overlay){this.refresh(),this.overlay.style.display="flex";return}this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position: fixed; inset: 0; z-index: 20000;
      display: flex; flex-direction: column;
      align-items: center; justify-content: flex-start;
      background: rgba(10,10,8,0.96);
      backdrop-filter: blur(8px);
      overflow-y: auto;
      font-family: system-ui, sans-serif;
      touch-action: pan-y;
    `;const t=document.createElement("div");t.style.cssText=`
      width: 100%; max-width: 600px;
      display: flex; align-items: center; justify-content: space-between;
      padding: 20px 20px 0;
      box-sizing: border-box;
    `;const e=document.createElement("h2");e.style.cssText=`
      margin: 0; color: #C8B89A;
      font-size: clamp(18px, 5vw, 26px); font-weight: 900;
      letter-spacing: 1px;
    `,e.textContent="📸 TEM PHOTO COLLECTION";const n=document.createElement("button");n.textContent="✕",n.style.cssText=`
      background: rgba(255,255,255,0.1); border: none;
      color: #fff; font-size: 20px; font-weight: 700;
      width: 40px; height: 40px; border-radius: 50%;
      cursor: pointer; flex-shrink: 0;
      touch-action: manipulation;
    `,n.addEventListener("click",()=>this.hide()),t.appendChild(e),t.appendChild(n),this.overlay.appendChild(t);const i=document.createElement("div");i.id="gallery-progress-wrap",i.style.cssText=`
      width: 100%; max-width: 600px;
      padding: 16px 20px 8px; box-sizing: border-box;
    `,this.overlay.appendChild(i);const o=document.createElement("div");o.id="gallery-grid",o.style.cssText=`
      width: 100%; max-width: 600px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      padding: 8px 20px 32px;
      box-sizing: border-box;
    `,this.overlay.appendChild(o);const r=document.createElement("div");r.id="gallery-encourage",r.style.cssText=`
      width: 100%; max-width: 600px;
      text-align: center;
      color: rgba(200,184,154,0.7);
      font-size: clamp(13px, 3vw, 16px);
      padding: 0 20px 40px;
      box-sizing: border-box;
    `,this.overlay.appendChild(r),this.overlay.addEventListener("click",a=>{a.target===this.overlay&&this.hide()}),document.body.appendChild(this.overlay),this.refresh()}refresh(){if(!this.overlay)return;const t=ys(),e=t.length,n=ii.length,i=this.overlay.querySelector("#gallery-progress-wrap");if(i){i.innerHTML="";const a=document.createElement("div");a.style.cssText=`
        color: #fff; font-size: clamp(13px,3vw,16px);
        font-weight: 700; margin-bottom: 8px;
      `,a.textContent=e>=n?`🏆 FULL COLLECTION — ${e}/${n}`:`Collection: ${e} / ${n}`,i.appendChild(a);const l=document.createElement("div");l.style.cssText=`
        width: 100%; height: 10px; background: rgba(255,255,255,0.1);
        border-radius: 6px; overflow: hidden;
      `;const c=document.createElement("div");c.style.cssText=`
        height: 100%; border-radius: 6px;
        background: ${e>=n?"#FFD700":"#C8B89A"};
        width: ${Math.round(e/n*100)}%;
        transition: width 0.5s ease;
      `,l.appendChild(c),i.appendChild(l)}const o=this.overlay.querySelector("#gallery-grid");o&&(o.innerHTML="",ii.forEach(a=>{const l=t.includes(a.id),c=document.createElement("div");if(c.style.cssText=`
          border-radius: 12px; overflow: hidden;
          position: relative; aspect-ratio: 4/3;
          background: ${l?"#1a1a14":"rgba(255,255,255,0.04)"};
          border: 1.5px solid ${l?"rgba(200,184,154,0.4)":"rgba(255,255,255,0.08)"};
          box-shadow: 0 2px 12px rgba(0,0,0,0.5);
        `,l){const h=document.createElement("img");h.src=a.file,h.alt=a.name,h.style.cssText=`
            width: 100%; height: 100%;
            object-fit: cover;
            filter: blur(1px) brightness(0.75);
            display: block;
          `,c.appendChild(h);const d=document.createElement("div");d.style.cssText=`
            position: absolute; bottom: 0; left: 0; right: 0;
            padding: 8px 10px 10px;
            background: linear-gradient(transparent, rgba(0,0,0,0.85));
            color: #fff; font-size: clamp(11px,2.5vw,14px);
            font-weight: 700; text-align: center;
          `,d.textContent=a.name,c.appendChild(d)}else{const h=document.createElement("div");h.style.cssText=`
            width: 100%; height: 100%;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            gap: 8px;
          `,h.innerHTML=`
            <div style="font-size: clamp(24px,8vw,40px); opacity:0.35;">🔒</div>
            <div style="color:rgba(255,255,255,0.25); font-size:clamp(12px,3vw,16px); font-weight:700;">???</div>
          `,c.appendChild(h)}o.appendChild(c)}));const r=this.overlay.querySelector("#gallery-encourage");r&&(e>=n?r.textContent="🏆 You've scraped them all. Matt's proud. Sort of.":e>=6?r.textContent="🔥 Almost there — keep scraping!":e>=3?r.textContent="💪 Nice collection forming. More plastering to do!":e===0?r.textContent="🪣 No photos yet — complete jobs to reveal TEM work!":r.textContent="✨ Keep scraping to unlock all 8 TEM photos!")}hide(){this.overlay&&(this.overlay.style.display="none")}}const Xl=[15087942,2201331,16757504,5025616,10233776,16739125];function Rg(s){const t=new Ut,e=new j({color:s}),n=new L(new Q(3.5,1.2,6.5),e);n.position.set(0,.6,0),n.castShadow=!0,t.add(n);const i=new j({color:s}),o=new L(new Q(2.5,.9,3.5),i);o.position.set(0,1.65,0),o.castShadow=!0,t.add(o);const r=new j({color:1118481}),a=[[-1.8,.4,2.2],[1.8,.4,2.2],[-1.8,.4,-2.2],[1.8,.4,-2.2]];for(const[d,u,p]of a){const g=new L(new Vt(.5,.5,.4,8),r);g.rotation.z=Math.PI/2,g.position.set(d,u,p),g.castShadow=!0,t.add(g)}const l=new j({color:3359829}),c=new L(new Q(2.3,.7,.1),l);c.position.set(0,1.4,-3.3),t.add(c);const h=new L(new Q(2.3,.7,.1),l);return h.position.set(0,1.4,3.3),t.add(h),t}function Pg(s,t){return s==="x"?t===1?-Math.PI/2:Math.PI/2:t===1?Math.PI:0}class Ig{constructor(t){R(this,"cars",[]);R(this,"scene");this.scene=t,this._spawn()}_spawn(){const t=[-200,-160,-120,-80,-40,0,40,80,120,160,200],e=n=>{const i=Xl[Math.floor(Math.random()*Xl.length)],o=Rg(i),r=t[Math.floor(Math.random()*t.length)],a=Math.random()>.5?2:-2,l=10+Math.random()*10,c=Math.random()>.5?1:-1,h=-200+Math.random()*400;o.rotation.y=Pg(n,c);const d={group:o,axis:n,roadPos:r,laneOffset:a,speed:l,dir:c,pos:h};this.cars.push(d),this.scene.add(o),this._applyPosition(d)};for(let n=0;n<14;n++)e("z");for(let n=0;n<14;n++)e("x")}_applyPosition(t){t.axis==="x"?t.group.position.set(t.pos,0,t.roadPos+t.laneOffset):t.group.position.set(t.roadPos+t.laneOffset,0,t.pos)}update(t,e,n){for(const i of this.cars)i.pos+=i.dir*i.speed*t,i.pos>235&&(i.pos=-235),i.pos<-235&&(i.pos=235),this._applyPosition(i)}resolveVan(t,e,n=1.8){let i=t,o=e,r=!1;for(const a of this.cars){const l=a.group.position.x,c=a.group.position.z,h=(a.axis==="x"?3.25:1.75)+n,d=(a.axis==="x"?1.75:3.25)+n,u=i-l,p=o-c;if(Math.abs(u)<h&&Math.abs(p)<d){const g=h-Math.abs(u),x=d-Math.abs(p);g<x?i+=u<0?-g:g:o+=p<0?-x:x,r=!0}}return{x:i,z:o,hit:r}}checkVanCollision(t,e){const n=this.resolveVan(t,e);return{hit:n.hit,pushX:n.x-t,pushZ:n.z-e}}}const ql=[16032353,15167313,2792847,2508371,15320170,11066076,16739179,7029286],Dg=16767916,Lg=40,Yl=8;function Bg(s){const t=new Ut,e=new j({color:s}),n=new j({color:Dg}),i=new j({color:s}),o=new L(new Vt(.3,.35,1.1,7),e);o.position.set(0,.55,0),t.add(o);const r=new L(new fe(.28,6,5),n);r.position.set(0,1.28,0),t.add(r);const a=new L(new Q(.15,.65,.15),e);a.position.set(-.45,.75,0),a.rotation.z=.15,t.add(a);const l=new L(new Q(.15,.65,.15),e);l.position.set(.45,.75,0),l.rotation.z=-.15,t.add(l);const c=new L(new Q(.18,.55,.18),i);c.position.set(-.18,0,.05),t.add(c);const h=new L(new Q(.18,.55,.18),i);return h.position.set(.18,0,-.05),t.add(h),{group:t,leftArm:a,rightArm:l,leftLeg:c,rightLeg:h}}class Fg{constructor(t){R(this,"pedestrians",[]);R(this,"scene");this.scene=t,this._spawn()}_spawn(){const t=[];for(let n=-200;n<=200;n+=40)t.push(n);const e=n=>{const i=ql[Math.floor(Math.random()*ql.length)],{group:o,leftArm:r,rightArm:a,leftLeg:l,rightLeg:c}=Bg(i),h=t[Math.floor(Math.random()*t.length)],d=Math.random()>.5?5:-5,u=h+d,p=[];for(let I=-240;I<240;I+=40)p.push(I);const g=p[Math.floor(Math.random()*p.length)],x=g+Yl/2,m=g+Lg-Yl/2,f=x+Math.random()*(m-x),b=Math.random()>.5?1:-1,S=2+Math.random()*1.5,y={group:o,axis:n,roadPos:u,segStart:x,segEnd:m,pos:f,dir:b,speed:S,scattering:!1,scatterTimer:0,scatterDirX:0,scatterDirZ:0,walkCycle:Math.random()*Math.PI*2,leftArm:r,rightArm:a,leftLeg:l,rightLeg:c};this.pedestrians.push(y),this.scene.add(o),this._applyPosition(y),this._applyFacing(y)};for(let n=0;n<20;n++)e("x");for(let n=0;n<20;n++)e("z")}_applyPosition(t){t.axis==="x"?t.group.position.set(t.pos,0,t.roadPos):t.group.position.set(t.roadPos,0,t.pos)}_applyFacing(t){if(t.scattering){t.group.rotation.y=Math.atan2(t.scatterDirX,t.scatterDirZ);return}t.axis==="x"?t.group.rotation.y=t.dir===1?-Math.PI/2:Math.PI/2:t.group.rotation.y=t.dir===1?Math.PI:0}update(t,e,n){for(const i of this.pedestrians){const o=i.group.position.x,r=i.group.position.z,a=o-e,l=r-n,c=Math.sqrt(a*a+l*l);if(!i.scattering&&c<7){i.scattering=!0,i.scatterTimer=2.5;const u=Math.max(c,.01);i.scatterDirX=a/u,i.scatterDirZ=l/u}i.scattering?(i.group.position.x+=i.scatterDirX*12*t,i.group.position.z+=i.scatterDirZ*12*t,i.scatterTimer-=t,i.scatterTimer<=0&&(i.scattering=!1,i.axis==="x"?i.pos=Math.max(i.segStart,Math.min(i.segEnd,i.group.position.x)):i.pos=Math.max(i.segStart,Math.min(i.segEnd,i.group.position.z)),this._applyPosition(i))):(i.pos+=i.dir*i.speed*t,i.pos>=i.segEnd?(i.pos=i.segEnd,i.dir=-1):i.pos<=i.segStart&&(i.pos=i.segStart,i.dir=1),this._applyPosition(i)),this._applyFacing(i);const h=i.scattering?12:i.speed;i.walkCycle+=h*t*2;const d=Math.sin(i.walkCycle);i.leftArm.rotation.z=d*.4+.15,i.rightArm.rotation.z=-d*.4-.15,i.leftLeg.rotation.x=d*.5,i.rightLeg.rotation.x=-d*.5}}}const yn=class yn{constructor(t){R(this,"indicator");R(this,"scene");R(this,"lastVisit",-30);this.scene=t,this.indicator=new L(new fe(1.5,10,8),new j({color:13918762,emissive:new yt(10498064),emissiveIntensity:.8})),this.indicator.position.set(yn.POS.x,10,yn.POS.z),this.scene.add(this.indicator)}update(t){this.indicator.position.y=10+Math.sin(Date.now()*.002)*.5,this.indicator.rotation.y+=t*1.5}isNearby(t,e){const n=t-yn.POS.x,i=e-yn.POS.z;return Math.sqrt(n*n+i*i)<yn.TRIGGER_RADIUS}tryVisit(t,e){if(!this.isNearby(t,e))return!1;const n=Date.now()/1e3;return n-this.lastVisit<20?!1:(this.lastVisit=n,!0)}};R(yn,"POS",{x:-60,z:-100}),R(yn,"TRIGGER_RADIUS",12);let jr=yn;class Ug{constructor(){R(this,"level",0);R(this,"isUrgent",!1);R(this,"lastUrgentToast",0);R(this,"caffeinated",!1);R(this,"caffeineTimer",0)}update(t,e){this.caffeinated&&(this.caffeineTimer-=t,this.caffeineTimer<=0&&(this.caffeinated=!1));const n=this.caffeinated?.018:.012;Math.abs(e)>2?this.level=Math.min(1,this.level+t*n):this.level=Math.max(0,this.level-t*.005),this.isUrgent=this.level>.8}drinkCoffee(){this.level=Math.min(1,this.level+.4),this.caffeinated=!0,this.caffeineTimer=30,this.isUrgent=this.level>.8}tryRelief(t,e){const n=t-100,i=e-60;return Math.sqrt(n*n+i*i)>14||this.level===0?!1:(this.level=0,this.isUrgent=!1,this.caffeinated=!1,this.caffeineTimer=0,!0)}get spillMultiplier(){return this.isUrgent?1.8:1}}const is={x:30,z:28},jl=["Got a dollar, mate? 💸","You got a light? 🚬","Nice van. Does it leak?","My brother Jarrad says I'm not qualified. He's right but I don't like it.","These boots were not made for plastering. Yet here we are.","Jump in? No seriously, I need a lift.","Jarrad says he's read the TDS. He hasn't. I've lived with him.","You look like you need a coffee and a toilet. In that order.","Phil owes me fifty bucks. Pass it on.","I plastered that wall. Don't tell Jarrad.","Matt left the primer lid off again. Just letting you know."],hs=class hs{constructor(t){R(this,"wrapper");R(this,"character");R(this,"ropeRing");R(this,"ropePivot");R(this,"lastDialogue",0);R(this,"cooldown",9e3);this.character=new vs(kn.Mikayla),this.character.group.scale.set(2,2,2);const e=this.character.buildJumpRopeClip();this.character.mixer.stopAllAction(),this.character.mixer.clipAction(e).play(),this.ropePivot=new Ut,this.ropePivot.position.set(0,1.3,0),this.ropePivot.rotation.y=Math.PI/2,this.character.group.add(this.ropePivot),this.ropeRing=new L(new fa(1.35,.05,7,28),new j({color:8079902})),this.ropePivot.add(this.ropeRing);const n=this._makeNameBoard();n.position.set(0,8.8,0);const i=new L(new ri(1.2,1.7,32),new He({color:14501e3,side:ze}));i.rotation.x=-Math.PI/2,i.position.y=.05,this.wrapper=new Ut,this.wrapper.add(this.character.group),this.wrapper.add(n),this.wrapper.add(i),this.wrapper.position.set(is.x,0,is.z),t.add(this.wrapper)}_makeNameBoard(){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");e.fillStyle="rgba(190, 40, 90, 0.88)",e.roundRect?e.roundRect(2,2,252,60,8):e.rect(2,2,252,60),e.fill(),e.fillStyle="#fff",e.font="bold 30px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("MIKAYLA",128,32);const n=new xs(t);return new L(new de(2.4,.6),new He({map:n,transparent:!0,depthWrite:!1}))}update(t,e,n,i){this.character.update(t),this.ropeRing.rotation.z+=t*(2*Math.PI/Hc);const o=e-is.x,r=n-is.z;this.character.group.rotation.y=Math.atan2(o,r);const a=Math.sqrt(o*o+r*r),l=Date.now();if(a<hs.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=jl[Math.floor(Math.random()*jl.length)];return i.show(kn.Mikayla,c),this.lastDialogue=l,!0}return!1}dispose(t){t.remove(this.wrapper)}};R(hs,"POS",is),R(hs,"TRIGGER_RADIUS",15);let Zn=hs;const ss={x:-4,z:-6},$l=["Ha ha ha HA HA! You picked up ze buckets! Love it!","I mix ze plaster by hand. Za gloves are for ze weak.","In Germany, zis would be a warm-up. But I like Australia. Ze mud here is good.","I have mud wrestled ze entire Brunswick football club. Zey lost. Badly.","Ze mixing ratio is one part water, two parts product, one part pure power.","Last Saturday I wrestled a man twice my size. Sunday I mixed 50 buckets. Your turn.","Don't let ze hair fool you. I once arm wrestled Phil. He is still talking about it.","Ha HA! You are funny. Not as funny as ze last guy. But funny."],ds=class ds{constructor(t){R(this,"wrapper");R(this,"character");R(this,"lastDialogue",0);R(this,"cooldown",1e4);R(this,"audioCtx",null);this.character=new vs(kn.Connie),this.character.group.scale.set(2,2.35,2);const e=new j({color:15789544}),n=new L(new fe(.16,8,6),e);n.position.set(-.12,1.55,.19);const i=new L(new fe(.16,8,6),e);i.position.set(.12,1.55,.19),this.character.group.add(n),this.character.group.add(i),this.character.setLogoTexture(kc(kn.Connie.shirtColor));const o=this._makeNameBoard();o.position.set(0,8.8,0);const r=new L(new ri(1.2,1.7,32),new He({color:16109664,side:ze}));r.rotation.x=-Math.PI/2,r.position.y=.05,this.wrapper=new Ut,this.wrapper.add(this.character.group),this.wrapper.add(o),this.wrapper.add(r),this.wrapper.position.set(ss.x,0,ss.z),t.add(this.wrapper)}_makeNameBoard(){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");return e.fillStyle="rgba(200, 150, 20, 0.88)",e.roundRect?e.roundRect(2,2,252,60,8):e.rect(2,2,252,60),e.fill(),e.fillStyle="#fff",e.font="bold 30px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("CONNIE",128,32),new L(new de(2.4,.6),new He({map:new xs(t),transparent:!0,depthWrite:!1}))}playLaugh(){try{this.audioCtx||(this.audioCtx=new(window.AudioContext||window.webkitAudioContext));const t=this.audioCtx,e=7;for(let n=0;n<e;n++){const i=t.currentTime+n*.16,o=t.createOscillator(),r=t.createGain(),a=480+n*18+Math.random()*60;o.frequency.setValueAtTime(a,i),o.frequency.exponentialRampToValueAtTime(a*.48,i+.13),r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(.35,i+.03),r.gain.exponentialRampToValueAtTime(.001,i+.15),o.connect(r),r.connect(t.destination),o.start(i),o.stop(i+.17)}}catch{}}update(t,e,n,i){this.character.update(t);const o=e-ss.x,r=n-ss.z;this.character.group.rotation.y=Math.atan2(o,r);const a=Math.sqrt(o*o+r*r),l=Date.now();if(a<ds.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=$l[Math.floor(Math.random()*$l.length)];return i.show(kn.Connie,c),this.lastDialogue=l,!0}return!1}dispose(t){var e;t.remove(this.wrapper),(e=this.audioCtx)==null||e.close()}};R(ds,"POS",ss),R(ds,"TRIGGER_RADIUS",16);let cs=ds;const Ng={Connie:{scale:[2,2.35,2],addGeometry:s=>{const t=new j({color:15789544}),e=new L(new fe(.16,8,6),t);e.position.set(-.12,1.55,.19);const n=new L(new fe(.16,8,6),t);n.position.set(.12,1.55,.19),s.add(e),s.add(n)}},Mikayla:{scale:[1.9,1.9,1.9]}};class Og{constructor(){R(this,"renderer");R(this,"scene");R(this,"camera");R(this,"canvas");R(this,"cache",new Map);this.canvas=document.createElement("canvas"),this.canvas.width=160,this.canvas.height=160,this.renderer=new la({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(160,160),this.renderer.setClearColor(0,0),this.scene=new ca;const t=new pa(16777215,.7);this.scene.add(t);const e=new Ni(16774624,1);e.position.set(2,4,5),this.scene.add(e);const n=new Ni(14741759,.4);n.position.set(-3,2,3),this.scene.add(n),this.camera=new De(38,1,.1,100),this.camera.position.set(1.2,5,5.5),this.camera.lookAt(.1,3.8,0)}renderPortrait(t){var c;if(this.cache.has(t.name))return this.cache.get(t.name);this.scene.children.filter(h=>!(h instanceof _s)).forEach(h=>this.scene.remove(h));const n=Ng[t.name],i=new vs(t),[o,r,a]=(n==null?void 0:n.scale)??[2,2,2];i.group.scale.set(o,r,a),i.group.rotation.y=-Math.PI*.18,(c=n==null?void 0:n.addGeometry)==null||c.call(n,i.group),this.scene.add(i.group),this.renderer.render(this.scene,this.camera);const l=this.canvas.toDataURL("image/png");return this.cache.set(t.name,l),this.scene.remove(i.group),l}dispose(){this.renderer.dispose()}}class kg{constructor(){R(this,"container");R(this,"portrait");R(this,"nameEl");R(this,"textEl");R(this,"portraitRenderer");R(this,"hideTimeout",null);R(this,"visible",!1);this.portraitRenderer=new Og,this._injectStyles(),this._buildDOM()}_injectStyles(){if(document.getElementById("speech-bubble-styles"))return;const t=document.createElement("style");t.id="speech-bubble-styles",t.textContent=`
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
    `,document.head.appendChild(t)}_buildDOM(){this.container=document.createElement("div"),this.container.id="tem-speech-bubble";const t=document.createElement("div");t.className="sb-portrait-wrap",this.portrait=document.createElement("img"),this.portrait.className="sb-portrait-img",t.appendChild(this.portrait);const e=document.createElement("div");e.className="sb-text-area",this.nameEl=document.createElement("span"),this.nameEl.className="sb-name",this.textEl=document.createElement("span"),this.textEl.className="sb-text",e.appendChild(this.nameEl),e.appendChild(this.textEl),this.container.appendChild(t),this.container.appendChild(e),document.body.appendChild(this.container)}show(t,e){this.nameEl.textContent=t.name,this.textEl.textContent=e,this.portrait.src=this.portraitRenderer.renderPortrait(t),this.container.style.display="flex",requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.container.classList.add("sb-visible")})}),this.visible=!0,this.hideTimeout!==null&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(()=>this.hide(),1e4)}setScreenPosition(t,e){this.container.style.left=`${t}px`,this.container.style.top=`${e}px`}hide(){this.container.classList.remove("sb-visible"),this.visible=!1,setTimeout(()=>{this.visible||(this.container.style.display="none")},220)}isVisible(){return this.visible}dispose(){this.portraitRenderer.dispose(),document.body.removeChild(this.container)}}const os=15;class zg{constructor(){R(this,"overlay");R(this,"titleEl");R(this,"bodyEl");R(this,"hintEl");R(this,"progressBar");R(this,"_active",!1);R(this,"_readyToResume",!1);R(this,"_resumeCallback",null);R(this,"_lockTimer",null);R(this,"_countdownInterval",null);R(this,"_autoTimer",null);R(this,"_secondsLeft",os);if(!document.getElementById("dp-styles")){const a=document.createElement("style");a.id="dp-styles",a.textContent=`
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
    `;const t=document.createElement("div");t.style.cssText=`
      width: min(480px, 92vw);
      background: #1A1208;
      border: 2.5px solid #C1666B;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 12px 48px rgba(0,0,0,0.85);
      font-family: system-ui, -apple-system, sans-serif;
      animation: dpSlideUp 0.22s ease-out both;
    `;const e=document.createElement("div");e.style.cssText=`
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
    `;const n=document.createElement("div");n.style.cssText=`
      background: rgba(0,0,0,0.28);
      color: #fff;
      font-size: 15px;
      font-weight: 900;
      border-radius: 50%;
      width: 34px; height: 34px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0; margin-left: 12px;
      font-variant-numeric: tabular-nums;
    `,this.hintEl=n;const i=document.createElement("div");i.style.cssText=`
      height: 4px;
      background: rgba(193,102,107,0.25);
    `,this.progressBar=document.createElement("div"),this.progressBar.style.cssText=`
      height: 100%;
      background: #C1666B;
      width: 100%;
      transform-origin: left;
      transition: none;
    `,i.appendChild(this.progressBar);const o=document.createElement("div");o.style.cssText="padding: 16px 20px 4px;",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText=`
      color: #EEE8E0;
      font-size: 14.5px;
      line-height: 1.65;
      white-space: pre-wrap;
      max-height: 36vh;
      overflow-y: auto;
    `;const r=document.createElement("div");r.style.cssText=`
      color: rgba(193,102,107,0.75);
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      padding: 12px 0 16px;
      letter-spacing: 0.6px;
      animation: dpBlink 1.2s ease-in-out infinite;
    `,r.textContent="▶  TAP GAS or REV to skip",e.appendChild(this.titleEl),e.appendChild(n),o.appendChild(this.bodyEl),t.appendChild(e),t.appendChild(i),t.appendChild(o),t.appendChild(r),this.overlay.appendChild(t),document.body.appendChild(this.overlay),this.overlay.addEventListener("touchstart",a=>{a.preventDefault(),this.tryResume()},{passive:!1}),this.overlay.addEventListener("click",()=>this.tryResume())}show(t,e,n){this._clearTimers(),this._active=!0,this._readyToResume=!1,this._resumeCallback=n,this._secondsLeft=os,this.titleEl.textContent=t,this.bodyEl.textContent=e,this.hintEl.textContent=String(os),this.overlay.style.display="flex",this.progressBar.style.transition="none",this.progressBar.style.width="100%",this.progressBar.offsetWidth,this.progressBar.style.transition=`width ${os}s linear`,this.progressBar.style.width="0%",this._lockTimer=setTimeout(()=>{this._readyToResume=!0},380),this._countdownInterval=setInterval(()=>{this._secondsLeft=Math.max(0,this._secondsLeft-1),this.hintEl.textContent=String(this._secondsLeft)},1e3),this._autoTimer=setTimeout(()=>{this._forceResume()},os*1e3)}tryResume(){!this._active||!this._readyToResume||this._doResume()}_forceResume(){this._active&&this._doResume()}_doResume(){this._active=!1,this._readyToResume=!1,this.overlay.style.display="none",this._clearTimers();const t=this._resumeCallback;this._resumeCallback=null,t==null||t()}_clearTimers(){this._lockTimer&&(clearTimeout(this._lockTimer),this._lockTimer=null),this._autoTimer&&(clearTimeout(this._autoTimer),this._autoTimer=null),this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}get isActive(){return this._active}}const Gg={Matt:`Matt folds himself into the back. "Took your time." He's already on his phone.`,Jose:'Jose appears from nowhere, bucket in hand. "Vámonos — I was getting bored."',Jarrad:`Jarrad adjusts his hard hat. "I've been standing here fifteen minutes." He has.`,Phil:`Phil sips the last of his tea, unhurried. "Right then. Let's go." He fastens his seatbelt twice.`,Tsuyoshi:"Tsuyoshi vaults in without opening the door. His mohawk grazes the roof lining.",Fabio:`Fabio loads in, trowel over his shoulder. "You're late." He's smiling though.`};async function Hg(){await Lm();const s=new Fm;await s.init();const t=new zm(s.scene);t.spawnCrewAtCityPositions();const e=new og,n=new Gm(s.scene),i=new rg,o=new mg,r=new zg,a=new ho,l=new Ym(n,e,M=>{a.activePhase>=2&&i.triggerBump(M)},s.collisionWorld,()=>{a.activePhase>=2&&i.triggerCrash()}),c=new Yr(s.scene),h=new dg(M=>{h.hide(),r.show(`📋 ${M.title}`,`Client: ${M.client}

${M.description}

💰 Pay: $${M.pay.toLocaleString()}

🏭 Head to the TEM workshop to collect supplies.`,()=>{a.acceptJob(M),c.setTarget(ho.WORKSHOP_POS),o.setActiveJob(M,1),o.updateCrewStatus([],[],!1)})});i.onSpill=M=>{a.money=Math.max(0,a.money-M),o.updateMoney(a.money),o.showSpillPenalty(M)};const d=document.createElement("button");d.textContent="📋 JOBS",d.style.cssText=`
    position: fixed;
    top: 16px;
    right: 16px;
    background: rgba(193, 102, 107, 0.9);
    color: #fff;
    border: none;
    border-radius: 12px;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    font-family: system-ui, sans-serif;
    z-index: 1000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    letter-spacing: 0.5px;
    min-height: 48px;
    transition: background 0.15s, transform 0.1s;
    touch-action: manipulation;
  `,d.addEventListener("pointerenter",()=>{d.style.background="rgba(212, 120, 125, 0.95)",d.style.transform="translateY(-2px)"}),d.addEventListener("pointerleave",()=>{d.style.background="rgba(193, 102, 107, 0.9)",d.style.transform=""}),d.addEventListener("click",()=>{h.isVisible()?h.hide():h.show(a.getAvailableJobs())}),document.body.appendChild(d);const u=new Ig(s.scene),p=new Fg(s.scene),g=new jr(s.scene),x=new Ug,m=new Zn(s.scene),f=new cs(s.scene),b=new kg,S=new D(Zn.POS.x,6,Zn.POS.z),y=new Ag,I=new Cg,A=document.createElement("button");A.textContent="📸",A.title="Photo Collection",A.style.cssText=`
    position: fixed; top: 16px; left: 16px;
    z-index: 1000; background: rgba(70,70,70,0.9);
    color: #fff; border: none; border-radius: 50%;
    width: 52px; height: 52px; font-size: 22px;
    cursor: pointer; touch-action: manipulation;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    transition: background 0.15s, transform 0.1s;
  `,A.addEventListener("pointerenter",()=>{A.style.background="rgba(100,100,100,0.95)",A.style.transform="scale(1.1)"}),A.addEventListener("pointerleave",()=>{A.style.background="rgba(70,70,70,0.9)",A.style.transform=""}),A.addEventListener("click",()=>I.show()),document.body.appendChild(A);let T=!1;const P=document.createElement("div");P.style.cssText=`
    position:fixed; top:8px; left:8px; z-index:5000;
    background:rgba(0,0,0,0.6); color:#fff; font-size:11px;
    font-family:monospace; padding:6px 10px; border-radius:6px;
    pointer-events:none; line-height:1.5;
  `,document.body.appendChild(P),s.onUpdate(M=>{const _=n.mesh.position.x,C=n.mesh.position.z;if(r.isActive){(e.forward||e.brake)&&r.tryResume(),t.updateAll(M),m.update(M,_,C,b),f.update(M,_,C,b),s.camera.follow(n.mesh.position,n.velocity,n.heading);{const J=S.clone().project(s.camera.camera),ot=(J.x*.5+.5)*window.innerWidth,mt=(-J.y*.5+.5)*window.innerHeight;b.setScreenPosition(ot,mt)}return}l.update(M),n.updateSuspension(M);const z=a.activeJob!==null&&a.activePhase>=2;if(i.setVisible(z),z?i.update(M):i.level=0,t.updateAll(M),g.update(M),g.tryVisit(_,C)&&(i.level=Math.max(0,i.level-.6),x.drinkCoffee(),x.isUrgent?o.showToast("☕ Coffeed up — now find a toilet, fast!",13918762):o.showToast("☕ Coffee hit! Plaster steady, bladder loading...",13918762)),x.update(M,a.activeJob?l.speed:0),x.tryRelief(_,C)&&o.showToast("🚽 Ahhh! Relief! Ready for the next coffee ☕",2201331),x.isUrgent&&a.activeJob){const J=Date.now();J-x.lastUrgentToast>15e3&&(x.lastUrgentToast=J,o.showToast("🚽 Bursting! Find the toilet before you spill!",16733986))}i.spillRateMultiplier=x.spillMultiplier,m.update(M,_,C,b)&&S.set(Zn.POS.x,6,Zn.POS.z),f.update(M,_,C,b)&&S.set(cs.POS.x,6,cs.POS.z);const k=t.checkProximityDialogue(_,C);k&&(S.set(k.pos.x,6,k.pos.z),b.show(kn[k.name],k.line));{const J=S.clone().project(s.camera.camera),ot=(J.x*.5+.5)*window.innerWidth,mt=(-J.y*.5+.5)*window.innerHeight;b.setScreenPosition(ot,mt)}u.update(M,_,C),p.update(M,_,C);const W=u.resolveVan(_,C);if(W.hit&&(n.mesh.position.x=W.x,n.mesh.position.z=W.z,l.applyImpulse(0,0),a.activePhase>=2&&i.triggerCrash()),c.update(M,_,C),a.activeJob){const J=a.tickTravel(M);o.updateTravelTimer(a.travelTimer),J!=null&&J.failed&&(i.level=0,c.setTarget(null),o.updateTravelTimer(null),o.showTimerFail(15e4),o.setActiveJob(null,1),o.updateMoney(a.money),o.updateCrewStatus([],[],!1),t.showAllCrew(),setTimeout(()=>h.show(a.getAvailableJobs()),3500))}else o.updateTravelTimer(null);if(a.activeJob!==null)if(a.activePhase===1)o.updateJobDistance(a.distanceToWorkshop(_,C));else if(a.activePhase===2){const J=a.nextCrewNeeded();if(J){const ot=t.getCrewPosition(J);o.updateJobDistance(a.distanceToPoint(_,C,ot.x,ot.z))}}else o.updateJobDistance(a.distanceTo(_,C));if(a.activeJob&&a.activePhase===1&&!T&&a.checkPhase1Arrival(_,C)){T=!0,i.level=0,f.playLaugh();const J=a.crewToPickup.join(" + ");r.show("📦 Supplies Loaded!",`Connie's cackle echoes through the factory as the buckets go in.

Now go pick up the crew:
👷 ${J}

They're scattered around the city. Your waypoint will guide you.`,()=>{a.advanceToPhase2();const ot=a.nextCrewNeeded();if(ot){const mt=t.getCrewPosition(ot);c.setTarget(mt)}o.showPhase1Complete(),o.setActiveJob(a.activeJob,2),o.updateCrewStatus(a.crewToPickup,a.crewPickedUp,!0),T=!1})}if(a.activeJob&&a.activePhase===2&&!T)for(const J of a.crewToPickup){if(a.crewPickedUp.includes(J))continue;const ot=t.getCrewPosition(J);if(a.distanceToPoint(_,C,ot.x,ot.z)<10){T=!0,t.hideCrew(J);const Dt=a.pickupCrew(J);o.updateCrewStatus(a.crewToPickup,a.crewPickedUp,!0);const Yt=Gg[J]??`${J} hops in.`;if(Dt)r.show(`🚐 ${J} aboard — Full crew!`,`${Yt}

Full crew loaded. Everyone's in (sort of).

Head to the job site now. Your waypoint is set.`,()=>{a.advanceToPhase3(),c.setTarget(a.activeJob.position),o.showCrewPickup(J,null),o.setActiveJob(a.activeJob,3),T=!1});else{const Y=a.nextCrewNeeded(),it=a.crewToPickup.filter(xt=>!a.crewPickedUp.includes(xt)).join(", ");r.show(`🧑‍🔧 ${J} aboard!`,`${Yt}

Still need to collect:
👷 ${it}`,()=>{if(Y){const xt=t.getCrewPosition(Y);c.setTarget(xt),o.showCrewPickup(J,Y)}o.updateCrewStatus(a.crewToPickup,a.crewPickedUp,!0),T=!1})}break}}if(a.activeJob&&a.activePhase===3&&!T&&!y.isActive()){const J=a.checkArrival(_,C);J!==null&&(T=!0,c.setTarget(null),r.show(`🏗️ ${J.title}`,`${J.client} is waiting.

${J.description}

Time to get to work. Show them what TEM does.`,()=>{o.setActiveJob(null,3),o.updateCrewStatus([],[],!1),y.startRandom(ot=>{const mt=a.completeJob(J,ot.qualityPct);o.showJobComplete(J.title,mt),o.updateMoney(a.money),t.showAllCrew(),T=!1,setTimeout(()=>{const Dt=a.getAvailableJobs();Dt.length>0&&h.show(Dt)},3500)})}))}s.camera.follow(n.mesh.position,n.velocity,n.heading),o.update(l.speed,i.level);const K=a.activeJob,q=K?`P${a.activePhase}`:"idle",et=K?a.activePhase===1?Math.round(a.distanceToWorkshop(_,C)):a.activePhase===2?Math.round(a.distanceToPoint(_,C,...(()=>{const J=a.nextCrewNeeded();if(!J)return[_,C];const ot=t.getCrewPosition(J);return[ot.x,ot.z]})())):Math.round(a.distanceTo(_,C)):0,V=K?`crew:${a.crewPickedUp.length}/${a.crewToPickup.length}`:"";P.textContent=`${q} | dist:${et} | ${V} | lock:${T} | mg:${y.isActive()}`}),setTimeout(()=>{h.show(a.getAvailableJobs())},1e3),s.start()}Hg().catch(s=>{console.error("Game init failed:",s),document.body.style.background="#000";const t=document.createElement("div");t.style.cssText=`
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    color:#fff;font-family:sans-serif;font-size:18px;text-align:center;
    background:rgba(200,40,40,0.9);padding:24px 32px;border-radius:16px;
    max-width:90vw;z-index:9999;
  `,t.innerHTML=`<b>🚨 Game failed to start</b><br><br>${(s==null?void 0:s.message)||String(s)}`,document.body.appendChild(t)});
//# sourceMappingURL=index-ETTo0WsU.js.map
