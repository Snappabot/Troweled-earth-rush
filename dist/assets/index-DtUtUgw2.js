var Ec=Object.defineProperty;var Tc=(s,t,e)=>t in s?Ec(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var U=(s,t,e)=>Tc(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bo="170",Ac=0,aa=1,Cc=2,Dl=1,Ll=2,xn=3,zn=0,Ce=1,on=2,Mn=0,Ti=1,Hr=2,la=3,ca=4,Rc=5,$n=100,Pc=101,Dc=102,Lc=103,Ic=104,Fc=200,Bc=201,Uc=202,Nc=203,Vr=204,Wr=205,Oc=206,zc=207,kc=208,Gc=209,Hc=210,Vc=211,Wc=212,Xc=213,Yc=214,Xr=0,Yr=1,qr=2,Ri=3,jr=4,$r=5,Jr=6,Kr=7,Uo=0,qc=1,jc=2,Nn=0,Il=1,Fl=2,Bl=3,No=4,$c=5,Ul=6,Nl=7,Ol=300,Pi=301,Di=302,Zr=303,Qr=304,Qs=306,to=1e3,Zn=1001,eo=1002,Qe=1003,Jc=1004,ds=1005,ln=1006,or=1007,Qn=1008,wn=1009,zl=1010,kl=1011,is=1012,Oo=1013,ei=1014,_n=1015,Sn=1016,zo=1017,ko=1018,Li=1020,Gl=35902,Hl=1021,Vl=1022,Ze=1023,Wl=1024,Xl=1025,Ai=1026,Ii=1027,Yl=1028,Go=1029,ql=1030,Ho=1031,Vo=1033,zs=33776,ks=33777,Gs=33778,Hs=33779,no=35840,io=35841,so=35842,ro=35843,oo=36196,ao=37492,lo=37496,co=37808,ho=37809,uo=37810,fo=37811,po=37812,mo=37813,go=37814,xo=37815,vo=37816,_o=37817,yo=37818,Mo=37819,So=37820,bo=37821,Vs=36492,wo=36494,Eo=36495,jl=36283,To=36284,Ao=36285,Co=36286,Kc=3200,Zc=3201,$l=0,Qc=1,Bn="",He="srgb",Ui="srgb-linear",tr="linear",ne="srgb",si=7680,ha=519,th=512,eh=513,nh=514,Jl=515,ih=516,sh=517,rh=518,oh=519,Ro=35044,da="300 es",yn=2e3,Ys=2001;class Ni{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ar=Math.PI/180,Po=180/Math.PI;function On(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[s&255]+Ee[s>>8&255]+Ee[s>>16&255]+Ee[s>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Fe(s,t,e){return Math.max(t,Math.min(e,s))}function ah(s,t){return(s%t+t)%t}function lr(s,t,e){return(1-e)*s+e*t}function an(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ie(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,i,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=i[0],m=i[3],f=i[6],S=i[1],w=i[4],y=i[7],B=i[2],C=i[5],A=i[8];return r[0]=o*x+a*S+l*B,r[3]=o*m+a*w+l*C,r[6]=o*f+a*y+l*A,r[1]=c*x+h*S+u*B,r[4]=c*m+h*w+u*C,r[7]=c*f+h*y+u*A,r[2]=d*x+p*S+g*B,r[5]=d*m+p*w+g*C,r[8]=d*f+p*y+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(cr.makeScale(t,e)),this}rotate(t){return this.premultiply(cr.makeRotation(-t)),this}translate(t,e){return this.premultiply(cr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const cr=new zt;function Kl(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function qs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function lh(){const s=qs("canvas");return s.style.display="block",s}const ua={};function es(s){s in ua||(ua[s]=!0,console.warn(s))}function ch(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function hh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function dh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(s.r=bn(s.r),s.g=bn(s.g),s.b=bn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(s.r=Ci(s.r),s.g=Ci(s.g),s.b=Ci(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bn?tr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function bn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ci(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const fa=[.64,.33,.3,.6,.15,.06],pa=[.2126,.7152,.0722],ma=[.3127,.329],ga=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xa=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[Ui]:{primaries:fa,whitePoint:ma,transfer:tr,toXYZ:ga,fromXYZ:xa,luminanceCoefficients:pa,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:fa,whitePoint:ma,transfer:ne,toXYZ:ga,fromXYZ:xa,luminanceCoefficients:pa,outputColorSpaceConfig:{drawingBufferColorSpace:He}}});let ri;class uh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ri===void 0&&(ri=qs("canvas")),ri.width=t.width,ri.height=t.height;const n=ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=qs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=bn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bn(e[n]/255)*255):e[n]=bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let fh=0;class Zl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=On(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(hr(i[o].image)):r.push(hr(i[o]))}else r=hr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function hr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?uh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ph=0;class Le extends Ni{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=Zn,i=Zn,r=ln,o=Qn,a=Ze,l=wn,c=Le.DEFAULT_ANISOTROPY,h=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=On(),this.name="",this.source=new Zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ol)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case to:t.x=t.x-Math.floor(t.x);break;case Zn:t.x=t.x<0?0:1;break;case eo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case to:t.y=t.y-Math.floor(t.y);break;case Zn:t.y=t.y<0?0:1;break;case eo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Ol;Le.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,n=0,i=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,y=(p+1)/2,B=(f+1)/2,C=(h+d)/4,A=(u+x)/4,P=(g+m)/4;return w>y&&w>B?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=C/n,r=A/n):y>B?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=C/i,r=P/i):B<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(B),n=A/r,i=P/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mh extends Ni{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tn extends mh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ql extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gh extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Zn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*x,S=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const B=Math.sqrt(w),C=Math.atan2(B,f*S);m=Math.sin(m*C)/B,a=Math.sin(a*C)/B}const y=a*S;if(l=l*m+d*y,c=c*m+p*y,h=h*m+g*y,u=u*m+x*y,m===1-a){const B=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=B,c*=B,h*=B,u*=B}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(va.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(va.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dr.copy(this).projectOnVector(t),this.sub(dr)}reflect(t){return this.sub(dr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dr=new D,va=new os;class as{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=qe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qe):qe.fromBufferAttribute(r,o),qe.applyMatrix4(t.matrixWorld),this.expandByPoint(qe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),us.copy(n.boundingBox)),us.applyMatrix4(t.matrixWorld),this.union(us)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qe),qe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hi),fs.subVectors(this.max,Hi),oi.subVectors(t.a,Hi),ai.subVectors(t.b,Hi),li.subVectors(t.c,Hi),Cn.subVectors(ai,oi),Rn.subVectors(li,ai),Gn.subVectors(oi,li);let e=[0,-Cn.z,Cn.y,0,-Rn.z,Rn.y,0,-Gn.z,Gn.y,Cn.z,0,-Cn.x,Rn.z,0,-Rn.x,Gn.z,0,-Gn.x,-Cn.y,Cn.x,0,-Rn.y,Rn.x,0,-Gn.y,Gn.x,0];return!ur(e,oi,ai,li,fs)||(e=[1,0,0,0,1,0,0,0,1],!ur(e,oi,ai,li,fs))?!1:(ps.crossVectors(Cn,Rn),e=[ps.x,ps.y,ps.z],ur(e,oi,ai,li,fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const un=[new D,new D,new D,new D,new D,new D,new D,new D],qe=new D,us=new as,oi=new D,ai=new D,li=new D,Cn=new D,Rn=new D,Gn=new D,Hi=new D,fs=new D,ps=new D,Hn=new D;function ur(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Hn.fromArray(s,r);const a=i.x*Math.abs(Hn.x)+i.y*Math.abs(Hn.y)+i.z*Math.abs(Hn.z),l=t.dot(Hn),c=e.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const xh=new as,Vi=new D,fr=new D;class er{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):xh.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vi.subVectors(t,this.center);const e=Vi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vi,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(fr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vi.copy(t.center).add(fr)),this.expandByPoint(Vi.copy(t.center).sub(fr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fn=new D,pr=new D,ms=new D,Pn=new D,mr=new D,gs=new D,gr=new D;class tc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fn.copy(this.origin).addScaledVector(this.direction,e),fn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){pr.copy(t).add(e).multiplyScalar(.5),ms.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(pr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ms),a=Pn.dot(this.direction),l=-Pn.dot(ms),c=Pn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(pr).addScaledVector(ms,d),p}intersectSphere(t,e){fn.subVectors(t.center,this.origin);const n=fn.dot(this.direction),i=fn.dot(fn)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,fn)!==null}intersectTriangle(t,e,n,i,r){mr.subVectors(e,t),gs.subVectors(n,t),gr.crossVectors(mr,gs);let o=this.direction.dot(gr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pn.subVectors(this.origin,t);const l=a*this.direction.dot(gs.crossVectors(Pn,gs));if(l<0)return null;const c=a*this.direction.dot(mr.cross(Pn));if(c<0||l+c>o)return null;const h=-a*Pn.dot(gr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,n,i,r,o,a,l,c,h,u,d,p,g,x,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ci.setFromMatrixColumn(t,0).length(),r=1/ci.setFromMatrixColumn(t,1).length(),o=1/ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vh,t,_h)}lookAt(t,e,n){const i=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Dn.crossVectors(n,Ue),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Dn.crossVectors(n,Ue)),Dn.normalize(),xs.crossVectors(Ue,Dn),i[0]=Dn.x,i[4]=xs.x,i[8]=Ue.x,i[1]=Dn.y,i[5]=xs.y,i[9]=Ue.y,i[2]=Dn.z,i[6]=xs.z,i[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],S=n[3],w=n[7],y=n[11],B=n[15],C=i[0],A=i[4],P=i[8],b=i[12],v=i[1],T=i[5],k=i[9],z=i[13],X=i[2],$=i[6],Y=i[10],Q=i[14],V=i[3],ot=i[7],ft=i[11],St=i[15];return r[0]=o*C+a*v+l*X+c*V,r[4]=o*A+a*T+l*$+c*ot,r[8]=o*P+a*k+l*Y+c*ft,r[12]=o*b+a*z+l*Q+c*St,r[1]=h*C+u*v+d*X+p*V,r[5]=h*A+u*T+d*$+p*ot,r[9]=h*P+u*k+d*Y+p*ft,r[13]=h*b+u*z+d*Q+p*St,r[2]=g*C+x*v+m*X+f*V,r[6]=g*A+x*T+m*$+f*ot,r[10]=g*P+x*k+m*Y+f*ft,r[14]=g*b+x*z+m*Q+f*St,r[3]=S*C+w*v+y*X+B*V,r[7]=S*A+w*T+y*$+B*ot,r[11]=S*P+w*k+y*Y+B*ft,r[15]=S*b+w*z+y*Q+B*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+x*(+e*l*p-e*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],S=u*m*c-x*d*c+x*l*p-a*m*p-u*l*f+a*d*f,w=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,y=h*x*c-g*u*c+g*a*p-o*x*p-h*a*f+o*u*f,B=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,C=e*S+n*w+i*y+r*B;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return t[0]=S*A,t[1]=(x*d*r-u*m*r-x*i*p+n*m*p+u*i*f-n*d*f)*A,t[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*f+n*l*f)*A,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*A,t[4]=w*A,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*A,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*f-e*l*f)*A,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*p+e*l*p)*A,t[8]=y*A,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*f-e*u*f)*A,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*f+e*a*f)*A,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*A,t[12]=B*A,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*m+e*u*m)*A,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*m-e*a*m)*A,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*A,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,x=o*h,m=o*u,f=a*u,S=l*c,w=l*h,y=l*u,B=n.x,C=n.y,A=n.z;return i[0]=(1-(x+f))*B,i[1]=(p+y)*B,i[2]=(g-w)*B,i[3]=0,i[4]=(p-y)*C,i[5]=(1-(d+f))*C,i[6]=(m+S)*C,i[7]=0,i[8]=(g+w)*A,i[9]=(m-S)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=ci.set(i[0],i[1],i[2]).length();const o=ci.set(i[4],i[5],i[6]).length(),a=ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],je.copy(this);const c=1/r,h=1/o,u=1/a;return je.elements[0]*=c,je.elements[1]*=c,je.elements[2]*=c,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=yn){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,g;if(a===yn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ys)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=yn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,p=(n+i)*h;let g,x;if(a===yn)g=(o+r)*u,x=-2*u;else if(a===Ys)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ci=new D,je=new he,vh=new D(0,0,0),_h=new D(1,1,1),Dn=new D,xs=new D,Ue=new D,_a=new he,ya=new os;class cn{constructor(t=0,e=0,n=0,i=cn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _a.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_a,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ya.setFromEuler(this),this.setFromQuaternion(ya,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}cn.DEFAULT_ORDER="XYZ";class ec{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yh=0;const Ma=new D,hi=new os,pn=new he,vs=new D,Wi=new D,Mh=new D,Sh=new os,Sa=new D(1,0,0),ba=new D(0,1,0),wa=new D(0,0,1),Ea={type:"added"},bh={type:"removed"},di={type:"childadded",child:null},xr={type:"childremoved",child:null};class ve extends Ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new D,e=new cn,n=new os,i=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new he},normalMatrix:{value:new zt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.multiply(hi),this}rotateOnWorldAxis(t,e){return hi.setFromAxisAngle(t,e),this.quaternion.premultiply(hi),this}rotateX(t){return this.rotateOnAxis(Sa,t)}rotateY(t){return this.rotateOnAxis(ba,t)}rotateZ(t){return this.rotateOnAxis(wa,t)}translateOnAxis(t,e){return Ma.copy(t).applyQuaternion(this.quaternion),this.position.add(Ma.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sa,t)}translateY(t){return this.translateOnAxis(ba,t)}translateZ(t){return this.translateOnAxis(wa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vs.copy(t):vs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(Wi,vs,this.up):pn.lookAt(vs,Wi,this.up),this.quaternion.setFromRotationMatrix(pn),i&&(pn.extractRotation(i.matrixWorld),hi.setFromRotationMatrix(pn),this.quaternion.premultiply(hi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ea),di.child=t,this.dispatchEvent(di),di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bh),xr.child=t,this.dispatchEvent(xr),xr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ea),di.child=t,this.dispatchEvent(di),di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,t,Mh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,Sh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ve.DEFAULT_UP=new D(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $e=new D,mn=new D,vr=new D,gn=new D,ui=new D,fi=new D,Ta=new D,_r=new D,yr=new D,Mr=new D,Sr=new se,br=new se,wr=new se;class Ve{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),$e.subVectors(t,e),i.cross($e);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){$e.subVectors(i,e),mn.subVectors(n,e),vr.subVectors(t,e);const o=$e.dot($e),a=$e.dot(mn),l=$e.dot(vr),c=mn.dot(mn),h=mn.dot(vr),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,gn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gn.x),l.addScaledVector(o,gn.y),l.addScaledVector(a,gn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Sr.setScalar(0),br.setScalar(0),wr.setScalar(0),Sr.fromBufferAttribute(t,e),br.fromBufferAttribute(t,n),wr.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Sr,r.x),o.addScaledVector(br,r.y),o.addScaledVector(wr,r.z),o}static isFrontFacing(t,e,n,i){return $e.subVectors(n,e),mn.subVectors(t,e),$e.cross(mn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $e.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),$e.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ve.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ve.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return Ve.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Ve.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ve.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;ui.subVectors(i,n),fi.subVectors(r,n),_r.subVectors(t,n);const l=ui.dot(_r),c=fi.dot(_r);if(l<=0&&c<=0)return e.copy(n);yr.subVectors(t,i);const h=ui.dot(yr),u=fi.dot(yr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ui,o);Mr.subVectors(t,r);const p=ui.dot(Mr),g=fi.dot(Mr);if(g>=0&&p<=g)return e.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(fi,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ta.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Ta,a);const f=1/(m+x+d);return o=x*f,a=d*f,e.copy(n).addScaledVector(ui,o).addScaledVector(fi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},_s={h:0,s:0,l:0};function Er(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=ah(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Er(o,r,t+1/3),this.g=Er(o,r,t),this.b=Er(o,r,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const n=nc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bn(t.r),this.g=bn(t.g),this.b=bn(t.b),this}copyLinearToSRGB(t){return this.r=Ci(t.r),this.g=Ci(t.g),this.b=Ci(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return qt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Fe(Te.r*255,0,255))*65536+Math.round(Fe(Te.g*255,0,255))*256+Math.round(Fe(Te.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,i=Te.g,r=Te.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=He){qt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,i=Te.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ln),this.setHSL(Ln.h+t,Ln.s+e,Ln.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ln),t.getHSL(_s);const n=lr(Ln.h,_s.h,e),i=lr(Ln.s,_s.s,e),r=lr(Ln.l,_s.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Mt;Mt.NAMES=nc;let wh=0;class ni extends Ni{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=On(),this.name="",this.blending=Ti,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vr,this.blendDst=Wr,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ha,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=si,this.stencilZFail=si,this.stencilZPass=si,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vr&&(n.blendSrc=this.blendSrc),this.blendDst!==Wr&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ha&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==si&&(n.stencilFail=this.stencilFail),this.stencilZFail!==si&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==si&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ke extends ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new D,ys=new Et;class We{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ro,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ys.fromBufferAttribute(this,e),ys.applyMatrix3(t),this.setXY(e,ys.x,ys.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),r=ie(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ro&&(t.usage=this.usage),t}}class ic extends We{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class sc extends We{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends We{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Eh=0;const Ge=new he,Tr=new ve,pi=new D,Ne=new as,Xi=new as,Se=new D;class Re extends Ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kl(t)?sc:ic)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,n){return Ge.makeTranslation(t,e,n),this.applyMatrix4(Ge),this}scale(t,e,n){return Ge.makeScale(t,e,n),this.applyMatrix4(Ge),this}lookAt(t){return Tr.lookAt(t),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(pi).negate(),this.translate(pi.x,pi.y,pi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new as);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Xi.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ne.min,Xi.min),Ne.expandByPoint(Se),Se.addVectors(Ne.max,Xi.max),Ne.expandByPoint(Se)):(Ne.expandByPoint(Xi.min),Ne.expandByPoint(Xi.max))}Ne.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&(pi.fromBufferAttribute(t,c),Se.add(pi)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new We(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new D,l[P]=new D;const c=new D,h=new D,u=new D,d=new Et,p=new Et,g=new Et,x=new D,m=new D;function f(P,b,v){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const T=1/(p.x*g.y-g.x*p.y);isFinite(T)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(T),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(T),a[P].add(x),a[b].add(x),a[v].add(x),l[P].add(m),l[b].add(m),l[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,b=S.length;P<b;++P){const v=S[P],T=v.start,k=v.count;for(let z=T,X=T+k;z<X;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const w=new D,y=new D,B=new D,C=new D;function A(P){B.fromBufferAttribute(i,P),C.copy(B);const b=a[P];w.copy(b),w.sub(B.multiplyScalar(B.dot(b))).normalize(),y.crossVectors(C,b);const T=y.dot(l[P])<0?-1:1;o.setXYZW(P,w.x,w.y,w.z,T)}for(let P=0,b=S.length;P<b;++P){const v=S[P],T=v.start,k=v.count;for(let z=T,X=T+k;z<X;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new We(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new We(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Aa=new he,Vn=new tc,Ms=new er,Ca=new D,Ss=new D,bs=new D,ws=new D,Ar=new D,Es=new D,Ra=new D,Ts=new D;class N extends ve{constructor(t=new Re,e=new Ke){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Es.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ar.fromBufferAttribute(u,t),o?Es.addScaledVector(Ar,h):Es.addScaledVector(Ar.sub(e),h))}e.add(Es)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere),Ms.applyMatrix4(r),Vn.copy(t.ray).recast(t.near),!(Ms.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(Ms,Ca)===null||Vn.origin.distanceToSquared(Ca)>(t.far-t.near)**2))&&(Aa.copy(r).invert(),Vn.copy(t.ray).applyMatrix4(Aa),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,B=w;y<B;y+=3){const C=a.getX(y),A=a.getX(y+1),P=a.getX(y+2);i=As(this,f,t,n,c,h,u,C,A,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const S=a.getX(m),w=a.getX(m+1),y=a.getX(m+2);i=As(this,o,t,n,c,h,u,S,w,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=S,B=w;y<B;y+=3){const C=y,A=y+1,P=y+2;i=As(this,f,t,n,c,h,u,C,A,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const S=m,w=m+1,y=m+2;i=As(this,o,t,n,c,h,u,S,w,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Th(s,t,e,n,i,r,o,a){let l;if(t.side===Ce?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===zn,a),l===null)return null;Ts.copy(a),Ts.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ts);return c<e.near||c>e.far?null:{distance:c,point:Ts.clone(),object:s}}function As(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ss),s.getVertexPosition(l,bs),s.getVertexPosition(c,ws);const h=Th(s,t,e,n,Ss,bs,ws,Ra);if(h){const u=new D;Ve.getBarycoord(Ra,Ss,bs,ws,u),i&&(h.uv=Ve.getInterpolatedAttribute(i,a,l,c,u,new Et)),r&&(h.uv1=Ve.getInterpolatedAttribute(r,a,l,c,u,new Et)),o&&(h.normal=Ve.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};Ve.getNormal(Ss,bs,ws,d.normal),h.face=d,h.barycoord=u}return h}class et extends Re{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(x,m,f,S,w,y,B,C,A,P,b){const v=y/A,T=B/P,k=y/2,z=B/2,X=C/2,$=A+1,Y=P+1;let Q=0,V=0;const ot=new D;for(let ft=0;ft<Y;ft++){const St=ft*T-z;for(let kt=0;kt<$;kt++){const te=kt*v-k;ot[x]=te*S,ot[m]=St*w,ot[f]=X,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[f]=C>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(kt/A),u.push(1-ft/P),Q+=1}}for(let ft=0;ft<P;ft++)for(let St=0;St<A;St++){const kt=d+St+$*ft,te=d+St+$*(ft+1),q=d+(St+1)+$*(ft+1),it=d+(St+1)+$*ft;l.push(kt,te,it),l.push(te,q,it),V+=6}a.addGroup(p,V,b),p+=V,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(s){const t={};for(let e=0;e<s.length;e++){const n=Fi(s[e]);for(const i in n)t[i]=n[i]}return t}function Ah(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function rc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const ss={clone:Fi,merge:De};var Ch=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ae extends ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ch,this.fragmentShader=Rh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=Ah(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class oc extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new D,Pa=new Et,Da=new Et;class ze extends oc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Po*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Po*2*Math.atan(Math.tan(ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,Pa,Da),e.subVectors(Da,Pa)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ar*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const mi=-90,gi=1;class Ph extends ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ze(mi,gi,t,e);i.layers=this.layers,this.add(i);const r=new ze(mi,gi,t,e);r.layers=this.layers,this.add(r);const o=new ze(mi,gi,t,e);o.layers=this.layers,this.add(o);const a=new ze(mi,gi,t,e);a.layers=this.layers,this.add(a);const l=new ze(mi,gi,t,e);l.layers=this.layers,this.add(l);const c=new ze(mi,gi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ac extends Le{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Dh extends tn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ac(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new et(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:Mn});r.uniforms.tEquirect.value=e;const o=new N(i,r),a=e.minFilter;return e.minFilter===Qn&&(e.minFilter=ln),new Ph(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Cr=new D,Lh=new D,Ih=new zt;class qn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Cr.subVectors(n,e).cross(Lh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Cr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ih.getNormalMatrix(t),i=this.coplanarPoint(Cr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new er,Cs=new D;class Wo{constructor(t=new qn,e=new qn,n=new qn,i=new qn,r=new qn,o=new qn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],x=i[10],m=i[11],f=i[12],S=i[13],w=i[14],y=i[15];if(n[0].setComponents(l-r,d-c,m-p,y-f).normalize(),n[1].setComponents(l+r,d+c,m+p,y+f).normalize(),n[2].setComponents(l+o,d+h,m+g,y+S).normalize(),n[3].setComponents(l-o,d-h,m-g,y-S).normalize(),n[4].setComponents(l-a,d-u,m-x,y-w).normalize(),e===yn)n[5].setComponents(l+a,d+u,m+x,y+w).normalize();else if(e===Ys)n[5].setComponents(a,u,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(t){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Cs.x=i.normal.x>0?t.max.x:t.min.x,Cs.y=i.normal.y>0?t.max.y:t.min.y,Cs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lc(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Fh(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class pe extends Re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const S=f*d-o;for(let w=0;w<c;w++){const y=w*u-r;g.push(y,-S,0),x.push(0,0,1),m.push(w/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){const w=S+c*f,y=S+c*(f+1),B=S+1+c*(f+1),C=S+1+c*f;p.push(w,y,C),p.push(y,B,C)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uh=`#ifdef USE_ALPHAHASH
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
#endif`,Nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gh=`#ifdef USE_AOMAP
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
#endif`,Hh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vh=`#ifdef USE_BATCHING
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
#endif`,Wh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jh=`#ifdef USE_IRIDESCENCE
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
#endif`,$h=`#ifdef USE_BUMPMAP
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
#endif`,Jh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sd=`#define PI 3.141592653589793
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
} // validated`,rd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,od=`vec3 transformedNormal = objectNormal;
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
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ld=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dd="gl_FragColor = linearToOutputTexel( gl_FragColor );",ud=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fd=`#ifdef USE_ENVMAP
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
#endif`,pd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_d=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Sd=`#ifdef USE_GRADIENTMAP
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
}`,bd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wd=`LambertMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Td=`uniform bool receiveShadow;
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
#endif`,Ad=`#ifdef USE_ENVMAP
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
#endif`,Cd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ld=`PhysicalMaterial material;
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
#endif`,Id=`struct PhysicalMaterial {
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
}`,Fd=`
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
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Od=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hd=`#ifdef USE_MAP
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
#endif`,Wd=`#if defined( USE_POINTS_UV )
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
#endif`,Xd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$d=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jd=`#ifdef USE_MORPHTARGETS
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
#endif`,Zd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iu=`#ifdef USE_NORMALMAP
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
#endif`,su=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ru=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ou=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,au=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,du=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_u=`float getShadowMask() {
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
}`,yu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mu=`#ifdef USE_SKINNING
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
#endif`,Su=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bu=`#ifdef USE_SKINNING
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
#endif`,wu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eu=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Au=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cu=`#ifdef USE_TRANSMISSION
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
#endif`,Ru=`#ifdef USE_TRANSMISSION
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
#endif`,Pu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Du=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bu=`uniform sampler2D t2D;
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
}`,Uu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ku=`#include <common>
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
}`,Gu=`#if DEPTH_PACKING == 3200
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
}`,Hu=`#define DISTANCE
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
}`,Vu=`#define DISTANCE
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
}`,Wu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yu=`uniform float scale;
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
}`,qu=`uniform vec3 diffuse;
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
}`,ju=`#include <common>
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
}`,$u=`uniform vec3 diffuse;
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
}`,Ju=`#define LAMBERT
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
}`,Ku=`#define LAMBERT
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
}`,Zu=`#define MATCAP
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
}`,Qu=`#define MATCAP
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
}`,tf=`#define NORMAL
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
}`,ef=`#define NORMAL
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
}`,nf=`#define PHONG
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
}`,sf=`#define PHONG
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
}`,rf=`#define STANDARD
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
}`,of=`#define STANDARD
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
}`,af=`#define TOON
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
}`,lf=`#define TOON
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
}`,cf=`uniform float size;
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
}`,hf=`uniform vec3 diffuse;
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
}`,df=`#include <common>
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
}`,uf=`uniform vec3 color;
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
}`,ff=`uniform float rotation;
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
}`,pf=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Bh,alphahash_pars_fragment:Uh,alphamap_fragment:Nh,alphamap_pars_fragment:Oh,alphatest_fragment:zh,alphatest_pars_fragment:kh,aomap_fragment:Gh,aomap_pars_fragment:Hh,batching_pars_vertex:Vh,batching_vertex:Wh,begin_vertex:Xh,beginnormal_vertex:Yh,bsdfs:qh,iridescence_fragment:jh,bumpmap_pars_fragment:$h,clipping_planes_fragment:Jh,clipping_planes_pars_fragment:Kh,clipping_planes_pars_vertex:Zh,clipping_planes_vertex:Qh,color_fragment:td,color_pars_fragment:ed,color_pars_vertex:nd,color_vertex:id,common:sd,cube_uv_reflection_fragment:rd,defaultnormal_vertex:od,displacementmap_pars_vertex:ad,displacementmap_vertex:ld,emissivemap_fragment:cd,emissivemap_pars_fragment:hd,colorspace_fragment:dd,colorspace_pars_fragment:ud,envmap_fragment:fd,envmap_common_pars_fragment:pd,envmap_pars_fragment:md,envmap_pars_vertex:gd,envmap_physical_pars_fragment:Ad,envmap_vertex:xd,fog_vertex:vd,fog_pars_vertex:_d,fog_fragment:yd,fog_pars_fragment:Md,gradientmap_pars_fragment:Sd,lightmap_pars_fragment:bd,lights_lambert_fragment:wd,lights_lambert_pars_fragment:Ed,lights_pars_begin:Td,lights_toon_fragment:Cd,lights_toon_pars_fragment:Rd,lights_phong_fragment:Pd,lights_phong_pars_fragment:Dd,lights_physical_fragment:Ld,lights_physical_pars_fragment:Id,lights_fragment_begin:Fd,lights_fragment_maps:Bd,lights_fragment_end:Ud,logdepthbuf_fragment:Nd,logdepthbuf_pars_fragment:Od,logdepthbuf_pars_vertex:zd,logdepthbuf_vertex:kd,map_fragment:Gd,map_pars_fragment:Hd,map_particle_fragment:Vd,map_particle_pars_fragment:Wd,metalnessmap_fragment:Xd,metalnessmap_pars_fragment:Yd,morphinstance_vertex:qd,morphcolor_vertex:jd,morphnormal_vertex:$d,morphtarget_pars_vertex:Jd,morphtarget_vertex:Kd,normal_fragment_begin:Zd,normal_fragment_maps:Qd,normal_pars_fragment:tu,normal_pars_vertex:eu,normal_vertex:nu,normalmap_pars_fragment:iu,clearcoat_normal_fragment_begin:su,clearcoat_normal_fragment_maps:ru,clearcoat_pars_fragment:ou,iridescence_pars_fragment:au,opaque_fragment:lu,packing:cu,premultiplied_alpha_fragment:hu,project_vertex:du,dithering_fragment:uu,dithering_pars_fragment:fu,roughnessmap_fragment:pu,roughnessmap_pars_fragment:mu,shadowmap_pars_fragment:gu,shadowmap_pars_vertex:xu,shadowmap_vertex:vu,shadowmask_pars_fragment:_u,skinbase_vertex:yu,skinning_pars_vertex:Mu,skinning_vertex:Su,skinnormal_vertex:bu,specularmap_fragment:wu,specularmap_pars_fragment:Eu,tonemapping_fragment:Tu,tonemapping_pars_fragment:Au,transmission_fragment:Cu,transmission_pars_fragment:Ru,uv_pars_fragment:Pu,uv_pars_vertex:Du,uv_vertex:Lu,worldpos_vertex:Iu,background_vert:Fu,background_frag:Bu,backgroundCube_vert:Uu,backgroundCube_frag:Nu,cube_vert:Ou,cube_frag:zu,depth_vert:ku,depth_frag:Gu,distanceRGBA_vert:Hu,distanceRGBA_frag:Vu,equirect_vert:Wu,equirect_frag:Xu,linedashed_vert:Yu,linedashed_frag:qu,meshbasic_vert:ju,meshbasic_frag:$u,meshlambert_vert:Ju,meshlambert_frag:Ku,meshmatcap_vert:Zu,meshmatcap_frag:Qu,meshnormal_vert:tf,meshnormal_frag:ef,meshphong_vert:nf,meshphong_frag:sf,meshphysical_vert:rf,meshphysical_frag:of,meshtoon_vert:af,meshtoon_frag:lf,points_vert:cf,points_frag:hf,shadow_vert:df,shadow_frag:uf,sprite_vert:ff,sprite_frag:pf},rt={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},rn={basic:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:De([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:De([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:De([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:De([rt.points,rt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:De([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:De([rt.common,rt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:De([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:De([rt.sprite,rt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:De([rt.common,rt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:De([rt.lights,rt.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};rn.physical={uniforms:De([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Rs={r:0,b:0,g:0},Xn=new cn,mf=new he;function gf(s,t,e,n,i,r,o){const a=new Mt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(S){let w=S.isScene===!0?S.background:null;return w&&w.isTexture&&(w=(S.backgroundBlurriness>0?e:t).get(w)),w}function x(S){let w=!1;const y=g(S);y===null?f(a,l):y&&y.isColor&&(f(y,1),w=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,o):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,w){const y=g(w);y&&(y.isCubeTexture||y.mapping===Qs)?(h===void 0&&(h=new N(new et(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Fi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(B,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Xn.copy(w.backgroundRotation),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(mf.makeRotationFromEuler(Xn)),h.material.toneMapped=qt.getTransfer(y.colorSpace)!==ne,(u!==y||d!==y.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new N(new pe(2,2),new Ae({name:"BackgroundMaterial",uniforms:Fi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=qt.getTransfer(y.colorSpace)!==ne,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,p=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,w){S.getRGB(Rs,rc(s)),n.buffers.color.setClear(Rs.r,Rs.g,Rs.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),l=w,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:x,addToRenderList:m}}function xf(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(v,T,k,z,X){let $=!1;const Y=u(z,k,T);r!==Y&&(r=Y,c(r.object)),$=p(v,z,k,X),$&&g(v,z,k,X),X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(v,T,k,z),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return s.createVertexArray()}function c(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,T,k){const z=k.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let $=X[T.id];$===void 0&&($={},X[T.id]=$);let Y=$[z];return Y===void 0&&(Y=d(l()),$[z]=Y),Y}function d(v){const T=[],k=[],z=[];for(let X=0;X<e;X++)T[X]=0,k[X]=0,z[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:k,attributeDivisors:z,object:v,attributes:{},index:null}}function p(v,T,k,z){const X=r.attributes,$=T.attributes;let Y=0;const Q=k.getAttributes();for(const V in Q)if(Q[V].location>=0){const ft=X[V];let St=$[V];if(St===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(St=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(St=v.instanceColor)),ft===void 0||ft.attribute!==St||St&&ft.data!==St.data)return!0;Y++}return r.attributesNum!==Y||r.index!==z}function g(v,T,k,z){const X={},$=T.attributes;let Y=0;const Q=k.getAttributes();for(const V in Q)if(Q[V].location>=0){let ft=$[V];ft===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ft=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ft=v.instanceColor));const St={};St.attribute=ft,ft&&ft.data&&(St.data=ft.data),X[V]=St,Y++}r.attributes=X,r.attributesNum=Y,r.index=z}function x(){const v=r.newAttributes;for(let T=0,k=v.length;T<k;T++)v[T]=0}function m(v){f(v,0)}function f(v,T){const k=r.newAttributes,z=r.enabledAttributes,X=r.attributeDivisors;k[v]=1,z[v]===0&&(s.enableVertexAttribArray(v),z[v]=1),X[v]!==T&&(s.vertexAttribDivisor(v,T),X[v]=T)}function S(){const v=r.newAttributes,T=r.enabledAttributes;for(let k=0,z=T.length;k<z;k++)T[k]!==v[k]&&(s.disableVertexAttribArray(k),T[k]=0)}function w(v,T,k,z,X,$,Y){Y===!0?s.vertexAttribIPointer(v,T,k,X,$):s.vertexAttribPointer(v,T,k,z,X,$)}function y(v,T,k,z){x();const X=z.attributes,$=k.getAttributes(),Y=T.defaultAttributeValues;for(const Q in $){const V=$[Q];if(V.location>=0){let ot=X[Q];if(ot===void 0&&(Q==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),Q==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),ot!==void 0){const ft=ot.normalized,St=ot.itemSize,kt=t.get(ot);if(kt===void 0)continue;const te=kt.buffer,q=kt.type,it=kt.bytesPerElement,xt=q===s.INT||q===s.UNSIGNED_INT||ot.gpuType===Oo;if(ot.isInterleavedBufferAttribute){const at=ot.data,Ct=at.stride,Lt=ot.offset;if(at.isInstancedInterleavedBuffer){for(let Wt=0;Wt<V.locationSize;Wt++)f(V.location+Wt,at.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Wt=0;Wt<V.locationSize;Wt++)m(V.location+Wt);s.bindBuffer(s.ARRAY_BUFFER,te);for(let Wt=0;Wt<V.locationSize;Wt++)w(V.location+Wt,St/V.locationSize,q,ft,Ct*it,(Lt+St/V.locationSize*Wt)*it,xt)}else{if(ot.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)f(V.location+at,ot.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let at=0;at<V.locationSize;at++)m(V.location+at);s.bindBuffer(s.ARRAY_BUFFER,te);for(let at=0;at<V.locationSize;at++)w(V.location+at,St/V.locationSize,q,ft,St*it,St/V.locationSize*at*it,xt)}}else if(Y!==void 0){const ft=Y[Q];if(ft!==void 0)switch(ft.length){case 2:s.vertexAttrib2fv(V.location,ft);break;case 3:s.vertexAttrib3fv(V.location,ft);break;case 4:s.vertexAttrib4fv(V.location,ft);break;default:s.vertexAttrib1fv(V.location,ft)}}}}S()}function B(){P();for(const v in n){const T=n[v];for(const k in T){const z=T[k];for(const X in z)h(z[X].object),delete z[X];delete T[k]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const k in T){const z=T[k];for(const X in z)h(z[X].object),delete z[X];delete T[k]}delete n[v.id]}function A(v){for(const T in n){const k=n[T];if(k[v.id]===void 0)continue;const z=k[v.id];for(const X in z)h(z[X].object),delete z[X];delete k[v.id]}}function P(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:B,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function vf(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function _f(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Ze&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==wn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==_n&&!P)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=g>0,C=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:B,maxSamples:C}}function yf(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new qn,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const S=r?0:n,w=S*4;let y=f.clippingState||null;l.value=y,y=h(g,d,w,p);for(let B=0;B!==w;++B)y[B]=e[B];f.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,y=p;w!==x;++w,y+=4)o.copy(u[w]).applyMatrix4(S,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Mf(s){let t=new WeakMap;function e(o,a){return a===Zr?o.mapping=Pi:a===Qr&&(o.mapping=Di),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zr||a===Qr)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Dh(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Xo extends oc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const wi=4,La=[.125,.215,.35,.446,.526,.582],Jn=20,Rr=new Xo,Ia=new Mt;let Pr=null,Dr=0,Lr=0,Ir=!1;const jn=(1+Math.sqrt(5))/2,xi=1/jn,Fa=[new D(-jn,xi,0),new D(jn,xi,0),new D(-xi,0,jn),new D(xi,0,jn),new D(0,jn,-xi),new D(0,jn,xi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Ba{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Pr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Na(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Pr,Dr,Lr),this._renderer.xr.enabled=Ir,t.scissorTest=!1,Ps(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Pr=this._renderer.getRenderTarget(),Dr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Sn,format:Ze,colorSpace:Ui,depthBuffer:!1},i=Ua(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ua(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sf(r)),this._blurMaterial=bf(r,t,e)}return i}_compileMaterial(t){const e=new N(this._lodPlanes[0],t);this._renderer.compile(e,Rr)}_sceneToCubeUV(t,e,n,i){const a=new ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ia),h.toneMapping=Nn,h.autoClear=!1;const p=new Ke({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new N(new et,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Ia),x=!0);for(let f=0;f<6;f++){const S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const w=this._cubeSize;Ps(i,S*w,f>2?w:0,w,w),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Pi||t.mapping===Di;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oa()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Na());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new N(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ps(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Rr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fa[(i-r-1)%Fa.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new N(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Jn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Jn;m>Jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Jn}`);const f=[];let S=0;for(let A=0;A<Jn;++A){const P=A/x,b=Math.exp(-P*P/2);f.push(b),A===0?S+=b:A<m&&(S+=2*b)}for(let A=0;A<f.length;A++)f[A]=f[A]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;const y=this._sizeLods[i],B=3*y*(i>w-wi?i-w+wi:0),C=4*(this._cubeSize-y);Ps(e,B,C,3*y,2*y),l.setRenderTarget(e),l.render(u,Rr)}}function Sf(s){const t=[],e=[],n=[];let i=s;const r=s-wi+1+La.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-wi?l=La[o-s+wi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,S=new Float32Array(x*g*p),w=new Float32Array(m*g*p),y=new Float32Array(f*g*p);for(let C=0;C<p;C++){const A=C%3*2/3-1,P=C>2?0:-1,b=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];S.set(b,x*g*C),w.set(d,m*g*C);const v=[C,C,C,C,C,C];y.set(v,f*g*C)}const B=new Re;B.setAttribute("position",new We(S,x)),B.setAttribute("uv",new We(w,m)),B.setAttribute("faceIndex",new We(y,f)),t.push(B),i>wi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ua(s,t,e){const n=new tn(s,t,e);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ps(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function bf(s,t,e){const n=new Float32Array(Jn),i=new D(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:Jn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Na(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yo(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Oa(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Yo(){return`

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
	`}function wf(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zr||l===Qr,h=l===Pi||l===Di;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ba(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Ba(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ef(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&es("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Tf(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const S=p.array;x=p.version;for(let w=0,y=S.length;w<y;w+=3){const B=S[w+0],C=S[w+1],A=S[w+2];d.push(B,C,C,A,A,B)}}else if(g!==void 0){const S=g.array;x=g.version;for(let w=0,y=S.length/3-1;w<y;w+=3){const B=w+0,C=w+1,A=w+2;d.push(B,C,C,A,A,B)}}else return;const m=new(Kl(d)?sc:ic)(d,1);m.version=x;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Af(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*x[S];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Cf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Rf(s,t,e){const n=new WeakMap,i=new se;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let v=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let B=a.attributes.position.count*y,C=1;B>t.maxTextureSize&&(C=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const A=new Float32Array(B*C*4*u),P=new Ql(A,B,C,u);P.type=_n,P.needsUpdate=!0;const b=y*4;for(let T=0;T<u;T++){const k=f[T],z=S[T],X=w[T],$=B*C*4*T;for(let Y=0;Y<k.count;Y++){const Q=Y*b;g===!0&&(i.fromBufferAttribute(k,Y),A[$+Q+0]=i.x,A[$+Q+1]=i.y,A[$+Q+2]=i.z,A[$+Q+3]=0),x===!0&&(i.fromBufferAttribute(z,Y),A[$+Q+4]=i.x,A[$+Q+5]=i.y,A[$+Q+6]=i.z,A[$+Q+7]=0),m===!0&&(i.fromBufferAttribute(X,Y),A[$+Q+8]=i.x,A[$+Q+9]=i.y,A[$+Q+10]=i.z,A[$+Q+11]=X.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new Et(B,C)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Pf(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class cc extends Le{constructor(t,e,n,i,r,o,a,l,c,h=Ai){if(h!==Ai&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ai&&(n=ei),n===void 0&&h===Ii&&(n=Li),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=l!==void 0?l:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const hc=new Le,za=new cc(1,1),dc=new Ql,uc=new gh,fc=new ac,ka=[],Ga=[],Ha=new Float32Array(16),Va=new Float32Array(9),Wa=new Float32Array(4);function Oi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=ka[i];if(r===void 0&&(r=new Float32Array(i),ka[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function _e(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function nr(s,t){let e=Ga[t];e===void 0&&(e=new Int32Array(t),Ga[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Df(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Lf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function If(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function Ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function Bf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;Wa.set(n),s.uniformMatrix2fv(this.addr,!1,Wa),ye(e,n)}}function Uf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;Va.set(n),s.uniformMatrix3fv(this.addr,!1,Va),ye(e,n)}}function Nf(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,n))return;Ha.set(n),s.uniformMatrix4fv(this.addr,!1,Ha),ye(e,n)}}function Of(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function zf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function kf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function Gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function Hf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function Wf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function Xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function Yf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(za.compareFunction=Jl,r=za):r=hc,e.setTexture2D(t||r,i)}function qf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||uc,i)}function jf(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||fc,i)}function $f(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||dc,i)}function Jf(s){switch(s){case 5126:return Df;case 35664:return Lf;case 35665:return If;case 35666:return Ff;case 35674:return Bf;case 35675:return Uf;case 35676:return Nf;case 5124:case 35670:return Of;case 35667:case 35671:return zf;case 35668:case 35672:return kf;case 35669:case 35673:return Gf;case 5125:return Hf;case 36294:return Vf;case 36295:return Wf;case 36296:return Xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Yf;case 35679:case 36299:case 36307:return qf;case 35680:case 36300:case 36308:case 36293:return jf;case 36289:case 36303:case 36311:case 36292:return $f}}function Kf(s,t){s.uniform1fv(this.addr,t)}function Zf(s,t){const e=Oi(t,this.size,2);s.uniform2fv(this.addr,e)}function Qf(s,t){const e=Oi(t,this.size,3);s.uniform3fv(this.addr,e)}function tp(s,t){const e=Oi(t,this.size,4);s.uniform4fv(this.addr,e)}function ep(s,t){const e=Oi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function np(s,t){const e=Oi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function ip(s,t){const e=Oi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function sp(s,t){s.uniform1iv(this.addr,t)}function rp(s,t){s.uniform2iv(this.addr,t)}function op(s,t){s.uniform3iv(this.addr,t)}function ap(s,t){s.uniform4iv(this.addr,t)}function lp(s,t){s.uniform1uiv(this.addr,t)}function cp(s,t){s.uniform2uiv(this.addr,t)}function hp(s,t){s.uniform3uiv(this.addr,t)}function dp(s,t){s.uniform4uiv(this.addr,t)}function up(s,t,e){const n=this.cache,i=t.length,r=nr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||hc,r[o])}function fp(s,t,e){const n=this.cache,i=t.length,r=nr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||uc,r[o])}function pp(s,t,e){const n=this.cache,i=t.length,r=nr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||fc,r[o])}function mp(s,t,e){const n=this.cache,i=t.length,r=nr(e,i);_e(n,r)||(s.uniform1iv(this.addr,r),ye(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||dc,r[o])}function gp(s){switch(s){case 5126:return Kf;case 35664:return Zf;case 35665:return Qf;case 35666:return tp;case 35674:return ep;case 35675:return np;case 35676:return ip;case 5124:case 35670:return sp;case 35667:case 35671:return rp;case 35668:case 35672:return op;case 35669:case 35673:return ap;case 5125:return lp;case 36294:return cp;case 36295:return hp;case 36296:return dp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return fp;case 35680:case 36300:case 36308:case 36293:return pp;case 36289:case 36303:case 36311:case 36292:return mp}}class xp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jf(e.type)}}class vp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=gp(e.type)}}class _p{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function Xa(s,t){s.seq.push(t),s.map[t.id]=t}function yp(s,t,e){const n=s.name,i=n.length;for(Fr.lastIndex=0;;){const r=Fr.exec(n),o=Fr.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Xa(e,c===void 0?new xp(a,s,t):new vp(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new _p(a),Xa(e,u)),e=u}}}class Ws{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);yp(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ya(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Mp=37297;let Sp=0;function bp(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const qa=new zt;function wp(s){qt._getMatrix(qa,qt.workingColorSpace,s);const t=`mat3( ${qa.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(s)){case tr:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ja(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+bp(s.getShaderSource(t),o)}else return i}function Ep(s,t){const e=wp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Tp(s,t){let e;switch(t){case Il:e="Linear";break;case Fl:e="Reinhard";break;case Bl:e="Cineon";break;case No:e="ACESFilmic";break;case Ul:e="AgX";break;case Nl:e="Neutral";break;case $c:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ds=new D;function Ap(){qt.getLuminanceCoefficients(Ds);const s=Ds.x.toFixed(4),t=Ds.y.toFixed(4),e=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Cp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function Rp(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Pp(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ns(s){return s!==""}function $a(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ja(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Dp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(s){return s.replace(Dp,Ip)}const Lp=new Map;function Ip(s,t){let e=Vt[t];if(e===void 0){const n=Lp.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Do(e)}const Fp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ka(s){return s.replace(Fp,Bp)}function Bp(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Za(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Up(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ll?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Np(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Pi:case Di:t="ENVMAP_TYPE_CUBE";break;case Qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Op(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Di:t="ENVMAP_MODE_REFRACTION";break}return t}function zp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Uo:t="ENVMAP_BLENDING_MULTIPLY";break;case qc:t="ENVMAP_BLENDING_MIX";break;case jc:t="ENVMAP_BLENDING_ADD";break}return t}function kp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Gp(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Up(e),c=Np(e),h=Op(e),u=zp(e),d=kp(e),p=Cp(e),g=Rp(r),x=i.createProgram();let m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ns).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ns).join(`
`),f.length>0&&(f+=`
`)):(m=[Za(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),f=[Za(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?Tp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Ep("linearToOutputTexel",e.outputColorSpace),Ap(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),o=Do(o),o=$a(o,e),o=Ja(o,e),a=Do(a),a=$a(a,e),a=Ja(a,e),o=Ka(o),a=Ka(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===da?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===da?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=S+m+o,y=S+f+a,B=Ya(i,i.VERTEX_SHADER,w),C=Ya(i,i.FRAGMENT_SHADER,y);i.attachShader(x,B),i.attachShader(x,C),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(T){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(x).trim(),z=i.getShaderInfoLog(B).trim(),X=i.getShaderInfoLog(C).trim();let $=!0,Y=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,B,C);else{const Q=ja(i,B,"vertex"),V=ja(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+k+`
`+Q+`
`+V)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(z===""||X==="")&&(Y=!1);Y&&(T.diagnostics={runnable:$,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:X,prefix:f}})}i.deleteShader(B),i.deleteShader(C),P=new Ws(i,x),b=Pp(i,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(x,Mp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Sp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=B,this.fragmentShader=C,this}let Hp=0;class Vp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Wp(t),e.set(t,n)),n}}class Wp{constructor(t){this.id=Hp++,this.code=t,this.usedTimes=0}}function Xp(s,t,e,n,i,r,o){const a=new ec,l=new Vp,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,v,T,k,z){const X=k.fog,$=z.geometry,Y=b.isMeshStandardMaterial?k.environment:null,Q=(b.isMeshStandardMaterial?e:t).get(b.envMap||Y),V=Q&&Q.mapping===Qs?Q.image.height:null,ot=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const ft=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,St=ft!==void 0?ft.length:0;let kt=0;$.morphAttributes.position!==void 0&&(kt=1),$.morphAttributes.normal!==void 0&&(kt=2),$.morphAttributes.color!==void 0&&(kt=3);let te,q,it,xt;if(ot){const ee=rn[ot];te=ee.vertexShader,q=ee.fragmentShader}else te=b.vertexShader,q=b.fragmentShader,l.update(b),it=l.getVertexShaderID(b),xt=l.getFragmentShaderID(b);const at=s.getRenderTarget(),Ct=s.state.buffers.depth.getReversed(),Lt=z.isInstancedMesh===!0,Wt=z.isBatchedMesh===!0,ae=!!b.map,Xt=!!b.matcap,Ft=!!Q,R=!!b.aoMap,ge=!!b.lightMap,Bt=!!b.bumpMap,Gt=!!b.normalMap,At=!!b.displacementMap,Jt=!!b.emissiveMap,Tt=!!b.metalnessMap,E=!!b.roughnessMap,_=b.anisotropy>0,O=b.clearcoat>0,J=b.dispersion>0,tt=b.iridescence>0,j=b.sheen>0,bt=b.transmission>0,ct=_&&!!b.anisotropyMap,pt=O&&!!b.clearcoatMap,jt=O&&!!b.clearcoatNormalMap,nt=O&&!!b.clearcoatRoughnessMap,mt=tt&&!!b.iridescenceMap,Rt=tt&&!!b.iridescenceThicknessMap,Pt=j&&!!b.sheenColorMap,gt=j&&!!b.sheenRoughnessMap,Yt=!!b.specularMap,Ht=!!b.specularColorMap,re=!!b.specularIntensityMap,L=bt&&!!b.transmissionMap,lt=bt&&!!b.thicknessMap,W=!!b.gradientMap,K=!!b.alphaMap,ut=b.alphaTest>0,ht=!!b.alphaHash,Ut=!!b.extensions;let fe=Nn;b.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(fe=s.toneMapping);const we={shaderID:ot,shaderType:b.type,shaderName:b.name,vertexShader:te,fragmentShader:q,defines:b.defines,customVertexShaderID:it,customFragmentShaderID:xt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Wt,batchingColor:Wt&&z._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&z.instanceColor!==null,instancingMorph:Lt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Ui,alphaToCoverage:!!b.alphaToCoverage,map:ae,matcap:Xt,envMap:Ft,envMapMode:Ft&&Q.mapping,envMapCubeUVHeight:V,aoMap:R,lightMap:ge,bumpMap:Bt,normalMap:Gt,displacementMap:d&&At,emissiveMap:Jt,normalMapObjectSpace:Gt&&b.normalMapType===Qc,normalMapTangentSpace:Gt&&b.normalMapType===$l,metalnessMap:Tt,roughnessMap:E,anisotropy:_,anisotropyMap:ct,clearcoat:O,clearcoatMap:pt,clearcoatNormalMap:jt,clearcoatRoughnessMap:nt,dispersion:J,iridescence:tt,iridescenceMap:mt,iridescenceThicknessMap:Rt,sheen:j,sheenColorMap:Pt,sheenRoughnessMap:gt,specularMap:Yt,specularColorMap:Ht,specularIntensityMap:re,transmission:bt,transmissionMap:L,thicknessMap:lt,gradientMap:W,opaque:b.transparent===!1&&b.blending===Ti&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:ht,combine:b.combine,mapUv:ae&&x(b.map.channel),aoMapUv:R&&x(b.aoMap.channel),lightMapUv:ge&&x(b.lightMap.channel),bumpMapUv:Bt&&x(b.bumpMap.channel),normalMapUv:Gt&&x(b.normalMap.channel),displacementMapUv:At&&x(b.displacementMap.channel),emissiveMapUv:Jt&&x(b.emissiveMap.channel),metalnessMapUv:Tt&&x(b.metalnessMap.channel),roughnessMapUv:E&&x(b.roughnessMap.channel),anisotropyMapUv:ct&&x(b.anisotropyMap.channel),clearcoatMapUv:pt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:jt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:gt&&x(b.sheenRoughnessMap.channel),specularMapUv:Yt&&x(b.specularMap.channel),specularColorMapUv:Ht&&x(b.specularColorMap.channel),specularIntensityMapUv:re&&x(b.specularIntensityMap.channel),transmissionMapUv:L&&x(b.transmissionMap.channel),thicknessMapUv:lt&&x(b.thicknessMap.channel),alphaMapUv:K&&x(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Gt||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(ae||K),fog:!!X,useFog:b.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ct,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:kt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&T.length>0,shadowMapType:s.shadowMap.type,toneMapping:fe,decodeVideoTexture:ae&&b.map.isVideoTexture===!0&&qt.getTransfer(b.map.colorSpace)===ne,decodeVideoTextureEmissive:Jt&&b.emissiveMap.isVideoTexture===!0&&qt.getTransfer(b.emissiveMap.colorSpace)===ne,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===on,flipSided:b.side===Ce,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ut&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&b.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function f(b){const v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(const T in b.defines)v.push(T),v.push(b.defines[T]);return b.isRawShaderMaterial===!1&&(S(v,b),w(v,b),v.push(s.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function S(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function w(b,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const v=g[b.type];let T;if(v){const k=rn[v];T=ss.clone(k.uniforms)}else T=b.uniforms;return T}function B(b,v){let T;for(let k=0,z=h.length;k<z;k++){const X=h[k];if(X.cacheKey===v){T=X,++T.usedTimes;break}}return T===void 0&&(T=new Gp(s,v,b,r),h.push(T)),T}function C(b){if(--b.usedTimes===0){const v=h.indexOf(b);h[v]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:B,releaseProgram:C,releaseShaderCache:A,programs:h,dispose:P}}function Yp(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function qp(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Qa(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function tl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,x,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function a(u,d,p,g,x,m){const f=o(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,x,m){const f=o(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||qp),n.length>1&&n.sort(d||Qa),i.length>1&&i.sort(d||Qa)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function jp(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new tl,s.set(n,[o])):i>=r.length?(o=new tl,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function $p(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Mt};break;case"SpotLight":e={position:new D,direction:new D,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Jp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Kp=0;function Zp(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Qp(s){const t=new $p,e=Jp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,r=new he,o=new he;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,S=0,w=0,y=0,B=0,C=0,A=0;c.sort(Zp);for(let b=0,v=c.length;b<v;b++){const T=c[b],k=T.color,z=T.intensity,X=T.distance,$=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=k.r*z,u+=k.g*z,d+=k.b*z;else if(T.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(T.sh.coefficients[Y],z);A++}else if(T.isDirectionalLight){const Y=t.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const Q=T.shadow,V=e.get(T);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=T.shadow.matrix,S++}n.directional[p]=Y,p++}else if(T.isSpotLight){const Y=t.get(T);Y.position.setFromMatrixPosition(T.matrixWorld),Y.color.copy(k).multiplyScalar(z),Y.distance=X,Y.coneCos=Math.cos(T.angle),Y.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),Y.decay=T.decay,n.spot[x]=Y;const Q=T.shadow;if(T.map&&(n.spotLightMap[B]=T.map,B++,Q.updateMatrices(T),T.castShadow&&C++),n.spotLightMatrix[x]=Q.matrix,T.castShadow){const V=e.get(T);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=$,y++}x++}else if(T.isRectAreaLight){const Y=t.get(T);Y.color.copy(k).multiplyScalar(z),Y.halfWidth.set(T.width*.5,0,0),Y.halfHeight.set(0,T.height*.5,0),n.rectArea[m]=Y,m++}else if(T.isPointLight){const Y=t.get(T);if(Y.color.copy(T.color).multiplyScalar(T.intensity),Y.distance=T.distance,Y.decay=T.decay,T.castShadow){const Q=T.shadow,V=e.get(T);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=T.shadow.matrix,w++}n.point[g]=Y,g++}else if(T.isHemisphereLight){const Y=t.get(T);Y.skyColor.copy(T.color).multiplyScalar(z),Y.groundColor.copy(T.groundColor).multiplyScalar(z),n.hemi[f]=Y,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=rt.LTC_FLOAT_1,n.rectAreaLTC2=rt.LTC_FLOAT_2):(n.rectAreaLTC1=rt.LTC_HALF_1,n.rectAreaLTC2=rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==S||P.numPointShadows!==w||P.numSpotShadows!==y||P.numSpotMaps!==B||P.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=y+B-C,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=S,P.numPointShadows=w,P.numSpotShadows=y,P.numSpotMaps=B,P.numLightProbes=A,n.version=Kp++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){const w=c[f];if(w.isDirectionalLight){const y=n.directional[u];y.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(w.isSpotLight){const y=n.spot[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function el(s){const t=new Qp(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function t0(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new el(s),t.set(i,[a])):r>=o.length?(a=new el(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class e0 extends ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Kc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class n0 extends ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const i0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s0=`uniform sampler2D shadow_pass;
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
}`;function r0(s,t,e){let n=new Wo;const i=new Et,r=new Et,o=new se,a=new e0({depthPacking:Zc}),l=new n0,c={},h=e.maxTextureSize,u={[zn]:Ce,[Ce]:zn,[on]:on},d=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:i0,fragmentShader:s0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Re;g.setAttribute("position",new We(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new N(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let f=this.type;this.render=function(C,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=s.getRenderTarget(),v=s.getActiveCubeFace(),T=s.getActiveMipmapLevel(),k=s.state;k.setBlending(Mn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const z=f!==xn&&this.type===xn,X=f===xn&&this.type!==xn;for(let $=0,Y=C.length;$<Y;$++){const Q=C[$],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const ot=V.getFrameExtents();if(i.multiply(ot),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ot.x),i.x=r.x*ot.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ot.y),i.y=r.y*ot.y,V.mapSize.y=r.y)),V.map===null||z===!0||X===!0){const St=this.type!==xn?{minFilter:Qe,magFilter:Qe}:{};V.map!==null&&V.map.dispose(),V.map=new tn(i.x,i.y,St),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ft=V.getViewportCount();for(let St=0;St<ft;St++){const kt=V.getViewport(St);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),k.viewport(o),V.updateMatrices(Q,St),n=V.getFrustum(),y(A,P,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===xn&&S(V,P),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(b,v,T)};function S(C,A){const P=t.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new tn(i.x,i.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(A,null,P,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(A,null,P,p,x,null)}function w(C,A,P,b){let v=null;const T=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(T!==void 0)v=T;else if(v=P.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=v.uuid,z=A.uuid;let X=c[k];X===void 0&&(X={},c[k]=X);let $=X[z];$===void 0&&($=v.clone(),X[z]=$,A.addEventListener("dispose",B)),v=$}if(v.visible=A.visible,v.wireframe=A.wireframe,b===xn?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:u[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const k=s.properties.get(v);k.light=P}return v}function y(C,A,P,b,v){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===xn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const z=t.update(C),X=C.material;if(Array.isArray(X)){const $=z.groups;for(let Y=0,Q=$.length;Y<Q;Y++){const V=$[Y],ot=X[V.materialIndex];if(ot&&ot.visible){const ft=w(C,ot,b,v);C.onBeforeShadow(s,C,A,P,z,ft,V),s.renderBufferDirect(P,null,z,ft,C,V),C.onAfterShadow(s,C,A,P,z,ft,V)}}}else if(X.visible){const $=w(C,X,b,v);C.onBeforeShadow(s,C,A,P,z,$,null),s.renderBufferDirect(P,null,z,$,C,null),C.onAfterShadow(s,C,A,P,z,$,null)}}const k=C.children;for(let z=0,X=k.length;z<X;z++)y(k[z],A,P,b,v)}function B(C){C.target.removeEventListener("dispose",B);for(const P in c){const b=c[P],v=C.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}const o0={[Xr]:Yr,[qr]:Jr,[jr]:Kr,[Ri]:$r,[Yr]:Xr,[Jr]:qr,[Kr]:jr,[$r]:Ri};function a0(s,t){function e(){let L=!1;const lt=new se;let W=null;const K=new se(0,0,0,0);return{setMask:function(ut){W!==ut&&!L&&(s.colorMask(ut,ut,ut,ut),W=ut)},setLocked:function(ut){L=ut},setClear:function(ut,ht,Ut,fe,we){we===!0&&(ut*=fe,ht*=fe,Ut*=fe),lt.set(ut,ht,Ut,fe),K.equals(lt)===!1&&(s.clearColor(ut,ht,Ut,fe),K.copy(lt))},reset:function(){L=!1,W=null,K.set(-1,0,0,0)}}}function n(){let L=!1,lt=!1,W=null,K=null,ut=null;return{setReversed:function(ht){if(lt!==ht){const Ut=t.get("EXT_clip_control");lt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const fe=ut;ut=null,this.setClear(fe)}lt=ht},getReversed:function(){return lt},setTest:function(ht){ht?at(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(ht){W!==ht&&!L&&(s.depthMask(ht),W=ht)},setFunc:function(ht){if(lt&&(ht=o0[ht]),K!==ht){switch(ht){case Xr:s.depthFunc(s.NEVER);break;case Yr:s.depthFunc(s.ALWAYS);break;case qr:s.depthFunc(s.LESS);break;case Ri:s.depthFunc(s.LEQUAL);break;case jr:s.depthFunc(s.EQUAL);break;case $r:s.depthFunc(s.GEQUAL);break;case Jr:s.depthFunc(s.GREATER);break;case Kr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=ht}},setLocked:function(ht){L=ht},setClear:function(ht){ut!==ht&&(lt&&(ht=1-ht),s.clearDepth(ht),ut=ht)},reset:function(){L=!1,W=null,K=null,ut=null,lt=!1}}}function i(){let L=!1,lt=null,W=null,K=null,ut=null,ht=null,Ut=null,fe=null,we=null;return{setTest:function(ee){L||(ee?at(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(ee){lt!==ee&&!L&&(s.stencilMask(ee),lt=ee)},setFunc:function(ee,Xe,hn){(W!==ee||K!==Xe||ut!==hn)&&(s.stencilFunc(ee,Xe,hn),W=ee,K=Xe,ut=hn)},setOp:function(ee,Xe,hn){(ht!==ee||Ut!==Xe||fe!==hn)&&(s.stencilOp(ee,Xe,hn),ht=ee,Ut=Xe,fe=hn)},setLocked:function(ee){L=ee},setClear:function(ee){we!==ee&&(s.clearStencil(ee),we=ee)},reset:function(){L=!1,lt=null,W=null,K=null,ut=null,ht=null,Ut=null,fe=null,we=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,S=null,w=null,y=null,B=null,C=null,A=new Mt(0,0,0),P=0,b=!1,v=null,T=null,k=null,z=null,X=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,Q=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),Y=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Y=Q>=2);let ot=null,ft={};const St=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),te=new se().fromArray(St),q=new se().fromArray(kt);function it(L,lt,W,K){const ut=new Uint8Array(4),ht=s.createTexture();s.bindTexture(L,ht),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<W;Ut++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(lt+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return ht}const xt={};xt[s.TEXTURE_2D]=it(s.TEXTURE_2D,s.TEXTURE_2D,1),xt[s.TEXTURE_CUBE_MAP]=it(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[s.TEXTURE_2D_ARRAY]=it(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),xt[s.TEXTURE_3D]=it(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(s.DEPTH_TEST),o.setFunc(Ri),Bt(!1),Gt(aa),at(s.CULL_FACE),R(Mn);function at(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Ct(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Lt(L,lt){return u[L]!==lt?(s.bindFramebuffer(L,lt),u[L]=lt,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=lt),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function Wt(L,lt){let W=p,K=!1;if(L){W=d.get(lt),W===void 0&&(W=[],d.set(lt,W));const ut=L.textures;if(W.length!==ut.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,Ut=ut.length;ht<Ut;ht++)W[ht]=s.COLOR_ATTACHMENT0+ht;W.length=ut.length,K=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,K=!0);K&&s.drawBuffers(W)}function ae(L){return g!==L?(s.useProgram(L),g=L,!0):!1}const Xt={[$n]:s.FUNC_ADD,[Pc]:s.FUNC_SUBTRACT,[Dc]:s.FUNC_REVERSE_SUBTRACT};Xt[Lc]=s.MIN,Xt[Ic]=s.MAX;const Ft={[Fc]:s.ZERO,[Bc]:s.ONE,[Uc]:s.SRC_COLOR,[Vr]:s.SRC_ALPHA,[Hc]:s.SRC_ALPHA_SATURATE,[kc]:s.DST_COLOR,[Oc]:s.DST_ALPHA,[Nc]:s.ONE_MINUS_SRC_COLOR,[Wr]:s.ONE_MINUS_SRC_ALPHA,[Gc]:s.ONE_MINUS_DST_COLOR,[zc]:s.ONE_MINUS_DST_ALPHA,[Vc]:s.CONSTANT_COLOR,[Wc]:s.ONE_MINUS_CONSTANT_COLOR,[Xc]:s.CONSTANT_ALPHA,[Yc]:s.ONE_MINUS_CONSTANT_ALPHA};function R(L,lt,W,K,ut,ht,Ut,fe,we,ee){if(L===Mn){x===!0&&(Ct(s.BLEND),x=!1);return}if(x===!1&&(at(s.BLEND),x=!0),L!==Rc){if(L!==m||ee!==b){if((f!==$n||y!==$n)&&(s.blendEquation(s.FUNC_ADD),f=$n,y=$n),ee)switch(L){case Ti:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hr:s.blendFunc(s.ONE,s.ONE);break;case la:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ca:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ti:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Hr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case la:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ca:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,w=null,B=null,C=null,A.set(0,0,0),P=0,m=L,b=ee}return}ut=ut||lt,ht=ht||W,Ut=Ut||K,(lt!==f||ut!==y)&&(s.blendEquationSeparate(Xt[lt],Xt[ut]),f=lt,y=ut),(W!==S||K!==w||ht!==B||Ut!==C)&&(s.blendFuncSeparate(Ft[W],Ft[K],Ft[ht],Ft[Ut]),S=W,w=K,B=ht,C=Ut),(fe.equals(A)===!1||we!==P)&&(s.blendColor(fe.r,fe.g,fe.b,we),A.copy(fe),P=we),m=L,b=!1}function ge(L,lt){L.side===on?Ct(s.CULL_FACE):at(s.CULL_FACE);let W=L.side===Ce;lt&&(W=!W),Bt(W),L.blending===Ti&&L.transparent===!1?R(Mn):R(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Jt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(L){v!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),v=L)}function Gt(L){L!==Ac?(at(s.CULL_FACE),L!==T&&(L===aa?s.cullFace(s.BACK):L===Cc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),T=L}function At(L){L!==k&&(Y&&s.lineWidth(L),k=L)}function Jt(L,lt,W){L?(at(s.POLYGON_OFFSET_FILL),(z!==lt||X!==W)&&(s.polygonOffset(lt,W),z=lt,X=W)):Ct(s.POLYGON_OFFSET_FILL)}function Tt(L){L?at(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function E(L){L===void 0&&(L=s.TEXTURE0+$-1),ot!==L&&(s.activeTexture(L),ot=L)}function _(L,lt,W){W===void 0&&(ot===null?W=s.TEXTURE0+$-1:W=ot);let K=ft[W];K===void 0&&(K={type:void 0,texture:void 0},ft[W]=K),(K.type!==L||K.texture!==lt)&&(ot!==W&&(s.activeTexture(W),ot=W),s.bindTexture(L,lt||xt[L]),K.type=L,K.texture=lt)}function O(){const L=ft[ot];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function jt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function nt(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Rt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pt(L){te.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),te.copy(L))}function gt(L){q.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function Yt(L,lt){let W=c.get(lt);W===void 0&&(W=new WeakMap,c.set(lt,W));let K=W.get(L);K===void 0&&(K=s.getUniformBlockIndex(lt,L.name),W.set(L,K))}function Ht(L,lt){const K=c.get(lt).get(L);l.get(lt)!==K&&(s.uniformBlockBinding(lt,K,L.__bindingPointIndex),l.set(lt,K))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ot=null,ft={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,S=null,w=null,y=null,B=null,C=null,A=new Mt(0,0,0),P=0,b=!1,v=null,T=null,k=null,z=null,X=null,te.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Ct,bindFramebuffer:Lt,drawBuffers:Wt,useProgram:ae,setBlending:R,setMaterial:ge,setFlipSided:Bt,setCullFace:Gt,setLineWidth:At,setPolygonOffset:Jt,setScissorTest:Tt,activeTexture:E,bindTexture:_,unbindTexture:O,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:mt,texImage3D:Rt,updateUBOMapping:Yt,uniformBlockBinding:Ht,texStorage2D:jt,texStorage3D:nt,texSubImage2D:j,texSubImage3D:bt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Pt,viewport:gt,reset:re}}function nl(s,t,e,n){const i=l0(n);switch(e){case Hl:return s*t;case Wl:return s*t;case Xl:return s*t*2;case Yl:return s*t/i.components*i.byteLength;case Go:return s*t/i.components*i.byteLength;case ql:return s*t*2/i.components*i.byteLength;case Ho:return s*t*2/i.components*i.byteLength;case Vl:return s*t*3/i.components*i.byteLength;case Ze:return s*t*4/i.components*i.byteLength;case Vo:return s*t*4/i.components*i.byteLength;case zs:case ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Gs:case Hs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case io:case ro:return Math.max(s,16)*Math.max(t,8)/4;case no:case so:return Math.max(s,8)*Math.max(t,8)/2;case oo:case ao:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case lo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case uo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case fo:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case po:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case mo:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case go:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case xo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case vo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case _o:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case yo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case So:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case bo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Vs:case wo:case Eo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case jl:case To:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Ao:case Co:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l0(s){switch(s){case wn:case zl:return{byteLength:1,components:1};case is:case kl:case Sn:return{byteLength:2,components:1};case zo:case ko:return{byteLength:2,components:4};case ei:case Oo:case _n:return{byteLength:4,components:1};case Gl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function c0(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):qs("canvas")}function x(E,_,O){let J=1;const tt=Tt(E);if((tt.width>O||tt.height>O)&&(J=O/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const j=Math.floor(J*tt.width),bt=Math.floor(J*tt.height);u===void 0&&(u=g(j,bt));const ct=_?g(j,bt):u;return ct.width=j,ct.height=bt,ct.getContext("2d").drawImage(E,0,0,j,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+j+"x"+bt+")."),ct}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){s.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(E,_,O,J,tt=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let j=_;if(_===s.RED&&(O===s.FLOAT&&(j=s.R32F),O===s.HALF_FLOAT&&(j=s.R16F),O===s.UNSIGNED_BYTE&&(j=s.R8)),_===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.R8UI),O===s.UNSIGNED_SHORT&&(j=s.R16UI),O===s.UNSIGNED_INT&&(j=s.R32UI),O===s.BYTE&&(j=s.R8I),O===s.SHORT&&(j=s.R16I),O===s.INT&&(j=s.R32I)),_===s.RG&&(O===s.FLOAT&&(j=s.RG32F),O===s.HALF_FLOAT&&(j=s.RG16F),O===s.UNSIGNED_BYTE&&(j=s.RG8)),_===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RG8UI),O===s.UNSIGNED_SHORT&&(j=s.RG16UI),O===s.UNSIGNED_INT&&(j=s.RG32UI),O===s.BYTE&&(j=s.RG8I),O===s.SHORT&&(j=s.RG16I),O===s.INT&&(j=s.RG32I)),_===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGB8UI),O===s.UNSIGNED_SHORT&&(j=s.RGB16UI),O===s.UNSIGNED_INT&&(j=s.RGB32UI),O===s.BYTE&&(j=s.RGB8I),O===s.SHORT&&(j=s.RGB16I),O===s.INT&&(j=s.RGB32I)),_===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),O===s.UNSIGNED_INT&&(j=s.RGBA32UI),O===s.BYTE&&(j=s.RGBA8I),O===s.SHORT&&(j=s.RGBA16I),O===s.INT&&(j=s.RGBA32I)),_===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),_===s.RGBA){const bt=tt?tr:qt.getTransfer(J);O===s.FLOAT&&(j=s.RGBA32F),O===s.HALF_FLOAT&&(j=s.RGBA16F),O===s.UNSIGNED_BYTE&&(j=bt===ne?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function y(E,_){let O;return E?_===null||_===ei||_===Li?O=s.DEPTH24_STENCIL8:_===_n?O=s.DEPTH32F_STENCIL8:_===is&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ei||_===Li?O=s.DEPTH_COMPONENT24:_===_n?O=s.DEPTH_COMPONENT32F:_===is&&(O=s.DEPTH_COMPONENT16),O}function B(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==Qe&&E.minFilter!==ln?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function C(E){const _=E.target;_.removeEventListener("dispose",C),P(_),_.isVideoTexture&&h.delete(_)}function A(E){const _=E.target;_.removeEventListener("dispose",A),v(_)}function P(E){const _=n.get(E);if(_.__webglInit===void 0)return;const O=E.source,J=d.get(O);if(J){const tt=J[_.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&b(E),Object.keys(J).length===0&&d.delete(O)}n.remove(E)}function b(E){const _=n.get(E);s.deleteTexture(_.__webglTexture);const O=E.source,J=d.get(O);delete J[_.__cacheKey],o.memory.textures--}function v(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let tt=0;tt<_.__webglFramebuffer[J].length;tt++)s.deleteFramebuffer(_.__webglFramebuffer[J][tt]);else s.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)s.deleteFramebuffer(_.__webglFramebuffer[J]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=E.textures;for(let J=0,tt=O.length;J<tt;J++){const j=n.get(O[J]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(O[J])}n.remove(E)}let T=0;function k(){T=0}function z(){const E=T;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),T+=1,E}function X(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function $(E,_){const O=n.get(E);if(E.isVideoTexture&&At(E),E.isRenderTargetTexture===!1&&E.version>0&&O.__version!==E.version){const J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,E,_);return}}e.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+_)}function Y(E,_){const O=n.get(E);if(E.version>0&&O.__version!==E.version){q(O,E,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+_)}function Q(E,_){const O=n.get(E);if(E.version>0&&O.__version!==E.version){q(O,E,_);return}e.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+_)}function V(E,_){const O=n.get(E);if(E.version>0&&O.__version!==E.version){it(O,E,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+_)}const ot={[to]:s.REPEAT,[Zn]:s.CLAMP_TO_EDGE,[eo]:s.MIRRORED_REPEAT},ft={[Qe]:s.NEAREST,[Jc]:s.NEAREST_MIPMAP_NEAREST,[ds]:s.NEAREST_MIPMAP_LINEAR,[ln]:s.LINEAR,[or]:s.LINEAR_MIPMAP_NEAREST,[Qn]:s.LINEAR_MIPMAP_LINEAR},St={[th]:s.NEVER,[oh]:s.ALWAYS,[eh]:s.LESS,[Jl]:s.LEQUAL,[nh]:s.EQUAL,[rh]:s.GEQUAL,[ih]:s.GREATER,[sh]:s.NOTEQUAL};function kt(E,_){if(_.type===_n&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ln||_.magFilter===or||_.magFilter===ds||_.magFilter===Qn||_.minFilter===ln||_.minFilter===or||_.minFilter===ds||_.minFilter===Qn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,ot[_.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,ot[_.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,ot[_.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ft[_.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ft[_.minFilter]),_.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,St[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Qe||_.minFilter!==ds&&_.minFilter!==Qn||_.type===_n&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const O=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function te(E,_){let O=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",C));const J=_.source;let tt=d.get(J);tt===void 0&&(tt={},d.set(J,tt));const j=X(_);if(j!==E.__cacheKey){tt[j]===void 0&&(tt[j]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,O=!0),tt[j].usedTimes++;const bt=tt[E.__cacheKey];bt!==void 0&&(tt[E.__cacheKey].usedTimes--,bt.usedTimes===0&&b(_)),E.__cacheKey=j,E.__webglTexture=tt[j].texture}return O}function q(E,_,O){let J=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=s.TEXTURE_3D);const tt=te(E,_),j=_.source;e.bindTexture(J,E.__webglTexture,s.TEXTURE0+O);const bt=n.get(j);if(j.version!==bt.__version||tt===!0){e.activeTexture(s.TEXTURE0+O);const ct=qt.getPrimaries(qt.workingColorSpace),pt=_.colorSpace===Bn?null:qt.getPrimaries(_.colorSpace),jt=_.colorSpace===Bn||ct===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let nt=x(_.image,!1,i.maxTextureSize);nt=Jt(_,nt);const mt=r.convert(_.format,_.colorSpace),Rt=r.convert(_.type);let Pt=w(_.internalFormat,mt,Rt,_.colorSpace,_.isVideoTexture);kt(J,_);let gt;const Yt=_.mipmaps,Ht=_.isVideoTexture!==!0,re=bt.__version===void 0||tt===!0,L=j.dataReady,lt=B(_,nt);if(_.isDepthTexture)Pt=y(_.format===Ii,_.type),re&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,Pt,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,Pt,nt.width,nt.height,0,mt,Rt,null));else if(_.isDataTexture)if(Yt.length>0){Ht&&re&&e.texStorage2D(s.TEXTURE_2D,lt,Pt,Yt[0].width,Yt[0].height);for(let W=0,K=Yt.length;W<K;W++)gt=Yt[W],Ht?L&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(s.TEXTURE_2D,W,Pt,gt.width,gt.height,0,mt,Rt,gt.data);_.generateMipmaps=!1}else Ht?(re&&e.texStorage2D(s.TEXTURE_2D,lt,Pt,nt.width,nt.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,nt.width,nt.height,mt,Rt,nt.data)):e.texImage2D(s.TEXTURE_2D,0,Pt,nt.width,nt.height,0,mt,Rt,nt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ht&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Pt,Yt[0].width,Yt[0].height,nt.depth);for(let W=0,K=Yt.length;W<K;W++)if(gt=Yt[W],_.format!==Ze)if(mt!==null)if(Ht){if(L)if(_.layerUpdates.size>0){const ut=nl(gt.width,gt.height,_.format,_.type);for(const ht of _.layerUpdates){const Ut=gt.data.subarray(ht*ut/gt.data.BYTES_PER_ELEMENT,(ht+1)*ut/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,ht,gt.width,gt.height,1,mt,Ut)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,nt.depth,mt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Pt,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,nt.depth,mt,Rt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,W,Pt,gt.width,gt.height,nt.depth,0,mt,Rt,gt.data)}else{Ht&&re&&e.texStorage2D(s.TEXTURE_2D,lt,Pt,Yt[0].width,Yt[0].height);for(let W=0,K=Yt.length;W<K;W++)gt=Yt[W],_.format!==Ze?mt!==null?Ht?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,W,Pt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?L&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(s.TEXTURE_2D,W,Pt,gt.width,gt.height,0,mt,Rt,gt.data)}else if(_.isDataArrayTexture)if(Ht){if(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Pt,nt.width,nt.height,nt.depth),L)if(_.layerUpdates.size>0){const W=nl(nt.width,nt.height,_.format,_.type);for(const K of _.layerUpdates){const ut=nt.data.subarray(K*W/nt.data.BYTES_PER_ELEMENT,(K+1)*W/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,nt.width,nt.height,1,mt,Rt,ut)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,mt,Rt,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Pt,nt.width,nt.height,nt.depth,0,mt,Rt,nt.data);else if(_.isData3DTexture)Ht?(re&&e.texStorage3D(s.TEXTURE_3D,lt,Pt,nt.width,nt.height,nt.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,mt,Rt,nt.data)):e.texImage3D(s.TEXTURE_3D,0,Pt,nt.width,nt.height,nt.depth,0,mt,Rt,nt.data);else if(_.isFramebufferTexture){if(re)if(Ht)e.texStorage2D(s.TEXTURE_2D,lt,Pt,nt.width,nt.height);else{let W=nt.width,K=nt.height;for(let ut=0;ut<lt;ut++)e.texImage2D(s.TEXTURE_2D,ut,Pt,W,K,0,mt,Rt,null),W>>=1,K>>=1}}else if(Yt.length>0){if(Ht&&re){const W=Tt(Yt[0]);e.texStorage2D(s.TEXTURE_2D,lt,Pt,W.width,W.height)}for(let W=0,K=Yt.length;W<K;W++)gt=Yt[W],Ht?L&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,mt,Rt,gt):e.texImage2D(s.TEXTURE_2D,W,Pt,mt,Rt,gt);_.generateMipmaps=!1}else if(Ht){if(re){const W=Tt(nt);e.texStorage2D(s.TEXTURE_2D,lt,Pt,W.width,W.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Rt,nt)}else e.texImage2D(s.TEXTURE_2D,0,Pt,mt,Rt,nt);m(_)&&f(J),bt.__version=j.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function it(E,_,O){if(_.image.length!==6)return;const J=te(E,_),tt=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+O);const j=n.get(tt);if(tt.version!==j.__version||J===!0){e.activeTexture(s.TEXTURE0+O);const bt=qt.getPrimaries(qt.workingColorSpace),ct=_.colorSpace===Bn?null:qt.getPrimaries(_.colorSpace),pt=_.colorSpace===Bn||bt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const jt=_.isCompressedTexture||_.image[0].isCompressedTexture,nt=_.image[0]&&_.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!jt&&!nt?mt[K]=x(_.image[K],!0,i.maxCubemapSize):mt[K]=nt?_.image[K].image:_.image[K],mt[K]=Jt(_,mt[K]);const Rt=mt[0],Pt=r.convert(_.format,_.colorSpace),gt=r.convert(_.type),Yt=w(_.internalFormat,Pt,gt,_.colorSpace),Ht=_.isVideoTexture!==!0,re=j.__version===void 0||J===!0,L=tt.dataReady;let lt=B(_,Rt);kt(s.TEXTURE_CUBE_MAP,_);let W;if(jt){Ht&&re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Yt,Rt.width,Rt.height);for(let K=0;K<6;K++){W=mt[K].mipmaps;for(let ut=0;ut<W.length;ut++){const ht=W[ut];_.format!==Ze?Pt!==null?Ht?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ht.width,ht.height,Pt,ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Yt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ht.width,ht.height,Pt,gt,ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Yt,ht.width,ht.height,0,Pt,gt,ht.data)}}}else{if(W=_.mipmaps,Ht&&re){W.length>0&&lt++;const K=Tt(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Yt,K.width,K.height)}for(let K=0;K<6;K++)if(nt){Ht?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,Pt,gt,mt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,mt[K].width,mt[K].height,0,Pt,gt,mt[K].data);for(let ut=0;ut<W.length;ut++){const Ut=W[ut].image[K].image;Ht?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Ut.width,Ut.height,Pt,gt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Yt,Ut.width,Ut.height,0,Pt,gt,Ut.data)}}else{Ht?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pt,gt,mt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,Pt,gt,mt[K]);for(let ut=0;ut<W.length;ut++){const ht=W[ut];Ht?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Pt,gt,ht.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Yt,Pt,gt,ht.image[K])}}}m(_)&&f(s.TEXTURE_CUBE_MAP),j.__version=tt.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function xt(E,_,O,J,tt,j){const bt=r.convert(O.format,O.colorSpace),ct=r.convert(O.type),pt=w(O.internalFormat,bt,ct,O.colorSpace),jt=n.get(_),nt=n.get(O);if(nt.__renderTarget=_,!jt.__hasExternalTextures){const mt=Math.max(1,_.width>>j),Rt=Math.max(1,_.height>>j);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,j,pt,mt,Rt,_.depth,0,bt,ct,null):e.texImage2D(tt,j,pt,mt,Rt,0,bt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),Gt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,tt,nt.__webglTexture,0,Bt(_)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,tt,nt.__webglTexture,j),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(E,_,O){if(s.bindRenderbuffer(s.RENDERBUFFER,E),_.depthBuffer){const J=_.depthTexture,tt=J&&J.isDepthTexture?J.type:null,j=y(_.stencilBuffer,tt),bt=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=Bt(_);Gt(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,j,_.width,_.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,j,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,j,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,E)}else{const J=_.textures;for(let tt=0;tt<J.length;tt++){const j=J[tt],bt=r.convert(j.format,j.colorSpace),ct=r.convert(j.type),pt=w(j.internalFormat,bt,ct,j.colorSpace),jt=Bt(_);O&&Gt(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,pt,_.width,_.height):Gt(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,pt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,pt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(_.depthTexture);J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),$(_.depthTexture,0);const tt=J.__webglTexture,j=Bt(_);if(_.depthTexture.format===Ai)Gt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(_.depthTexture.format===Ii)Gt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Lt(E){const _=n.get(E),O=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const J=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){const tt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),_.__depthDisposeCallback=tt}_.__boundDepthTexture=J}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Ct(_.__webglFramebuffer,E)}else if(O){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=s.createRenderbuffer(),at(_.__webglDepthbuffer[J],E,!1);else{const tt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,j)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),at(_.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(E,_,O){const J=n.get(E);_!==void 0&&xt(J.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Lt(E)}function ae(E){const _=E.texture,O=n.get(E),J=n.get(_);E.addEventListener("dispose",A);const tt=E.textures,j=E.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=_.version,o.memory.textures++),j){O.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[ct]=[];for(let pt=0;pt<_.mipmaps.length;pt++)O.__webglFramebuffer[ct][pt]=s.createFramebuffer()}else O.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let ct=0;ct<_.mipmaps.length;ct++)O.__webglFramebuffer[ct]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(bt)for(let ct=0,pt=tt.length;ct<pt;ct++){const jt=n.get(tt[ct]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&Gt(E)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<tt.length;ct++){const pt=tt[ct];O.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);const jt=r.convert(pt.format,pt.colorSpace),nt=r.convert(pt.type),mt=w(pt.internalFormat,jt,nt,pt.colorSpace,E.isXRRenderTarget===!0),Rt=Bt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,mt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),at(O.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),kt(s.TEXTURE_CUBE_MAP,_);for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0)for(let pt=0;pt<_.mipmaps.length;pt++)xt(O.__webglFramebuffer[ct][pt],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else xt(O.__webglFramebuffer[ct],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(_)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ct=0,pt=tt.length;ct<pt;ct++){const jt=tt[ct],nt=n.get(jt);e.bindTexture(s.TEXTURE_2D,nt.__webglTexture),kt(s.TEXTURE_2D,jt),xt(O.__webglFramebuffer,E,jt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),m(jt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,J.__webglTexture),kt(ct,_),_.mipmaps&&_.mipmaps.length>0)for(let pt=0;pt<_.mipmaps.length;pt++)xt(O.__webglFramebuffer[pt],E,_,s.COLOR_ATTACHMENT0,ct,pt);else xt(O.__webglFramebuffer,E,_,s.COLOR_ATTACHMENT0,ct,0);m(_)&&f(ct),e.unbindTexture()}E.depthBuffer&&Lt(E)}function Xt(E){const _=E.textures;for(let O=0,J=_.length;O<J;O++){const tt=_[O];if(m(tt)){const j=S(E),bt=n.get(tt).__webglTexture;e.bindTexture(j,bt),f(j),e.unbindTexture()}}}const Ft=[],R=[];function ge(E){if(E.samples>0){if(Gt(E)===!1){const _=E.textures,O=E.width,J=E.height;let tt=s.COLOR_BUFFER_BIT;const j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=n.get(E),ct=_.length>1;if(ct)for(let pt=0;pt<_.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let pt=0;pt<_.length;pt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[pt]);const jt=n.get(_[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,jt,0)}s.blitFramebuffer(0,0,O,J,0,0,O,J,tt,s.NEAREST),l===!0&&(Ft.length=0,R.length=0,Ft.push(s.COLOR_ATTACHMENT0+pt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ft.push(j),R.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,R)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<_.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[pt]);const jt=n.get(_[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const _=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Bt(E){return Math.min(i.maxSamples,E.samples)}function Gt(E){const _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function At(E){const _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function Jt(E,_){const O=E.colorSpace,J=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||O!==Ui&&O!==Bn&&(qt.getTransfer(O)===ne?(J!==Ze||tt!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),_}function Tt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Wt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Gt}function h0(s,t){function e(n,i=Bn){let r;const o=qt.getTransfer(i);if(n===wn)return s.UNSIGNED_BYTE;if(n===zo)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ko)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Gl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===zl)return s.BYTE;if(n===kl)return s.SHORT;if(n===is)return s.UNSIGNED_SHORT;if(n===Oo)return s.INT;if(n===ei)return s.UNSIGNED_INT;if(n===_n)return s.FLOAT;if(n===Sn)return s.HALF_FLOAT;if(n===Hl)return s.ALPHA;if(n===Vl)return s.RGB;if(n===Ze)return s.RGBA;if(n===Wl)return s.LUMINANCE;if(n===Xl)return s.LUMINANCE_ALPHA;if(n===Ai)return s.DEPTH_COMPONENT;if(n===Ii)return s.DEPTH_STENCIL;if(n===Yl)return s.RED;if(n===Go)return s.RED_INTEGER;if(n===ql)return s.RG;if(n===Ho)return s.RG_INTEGER;if(n===Vo)return s.RGBA_INTEGER;if(n===zs||n===ks||n===Gs||n===Hs)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ks)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===no||n===io||n===so||n===ro)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===no)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===io)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===so)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oo||n===ao||n===lo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oo||n===ao)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===xo||n===vo||n===_o||n===yo||n===Mo||n===So||n===bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===co)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ho)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===po)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===go)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===vo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===_o)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===So)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bo)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vs||n===wo||n===Eo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vs)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Eo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jl||n===To||n===Ao||n===Co)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vs)return r.COMPRESSED_RED_RGTC1_EXT;if(n===To)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Li?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class d0 extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Dt extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u0={type:"move"};class Br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(u0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const f0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p0=`
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

}`;class m0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Le,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ae({vertexShader:f0,fragmentShader:p0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new N(new pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g0 extends Ni{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const x=new m0,m=e.getContextAttributes();let f=null,S=null;const w=[],y=[],B=new Et;let C=null;const A=new ze;A.viewport=new se;const P=new ze;P.viewport=new se;const b=[A,P],v=new d0;let T=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let it=w[q];return it===void 0&&(it=new Br,w[q]=it),it.getTargetRaySpace()},this.getControllerGrip=function(q){let it=w[q];return it===void 0&&(it=new Br,w[q]=it),it.getGripSpace()},this.getHand=function(q){let it=w[q];return it===void 0&&(it=new Br,w[q]=it),it.getHandSpace()};function z(q){const it=y.indexOf(q.inputSource);if(it===-1)return;const xt=w[it];xt!==void 0&&(xt.update(q.inputSource,q.frame,c||o),xt.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",$);for(let q=0;q<w.length;q++){const it=y[q];it!==null&&(y[q]=null,w[q].disconnect(it))}T=null,k=null,x.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,S=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",X),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(B),i.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,it),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new tn(p.framebufferWidth,p.framebufferHeight,{format:Ze,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,xt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Ii:Ai,xt=m.stencil?Li:ei);const Ct={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Ct),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new tn(d.textureWidth,d.textureHeight,{format:Ze,type:wn,depthTexture:new cc(d.textureWidth,d.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),te.setContext(i),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(q){for(let it=0;it<q.removed.length;it++){const xt=q.removed[it],at=y.indexOf(xt);at>=0&&(y[at]=null,w[at].disconnect(xt))}for(let it=0;it<q.added.length;it++){const xt=q.added[it];let at=y.indexOf(xt);if(at===-1){for(let Lt=0;Lt<w.length;Lt++)if(Lt>=y.length){y.push(xt),at=Lt;break}else if(y[Lt]===null){y[Lt]=xt,at=Lt;break}if(at===-1)break}const Ct=w[at];Ct&&Ct.connect(xt)}}const Y=new D,Q=new D;function V(q,it,xt){Y.setFromMatrixPosition(it.matrixWorld),Q.setFromMatrixPosition(xt.matrixWorld);const at=Y.distanceTo(Q),Ct=it.projectionMatrix.elements,Lt=xt.projectionMatrix.elements,Wt=Ct[14]/(Ct[10]-1),ae=Ct[14]/(Ct[10]+1),Xt=(Ct[9]+1)/Ct[5],Ft=(Ct[9]-1)/Ct[5],R=(Ct[8]-1)/Ct[0],ge=(Lt[8]+1)/Lt[0],Bt=Wt*R,Gt=Wt*ge,At=at/(-R+ge),Jt=At*-R;if(it.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Jt),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ct[10]===-1)q.projectionMatrix.copy(it.projectionMatrix),q.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Tt=Wt+At,E=ae+At,_=Bt-Jt,O=Gt+(at-Jt),J=Xt*ae/E*Tt,tt=Ft*ae/E*Tt;q.projectionMatrix.makePerspective(_,O,J,tt,Tt,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ot(q,it){it===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(it.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let it=q.near,xt=q.far;x.texture!==null&&(x.depthNear>0&&(it=x.depthNear),x.depthFar>0&&(xt=x.depthFar)),v.near=P.near=A.near=it,v.far=P.far=A.far=xt,(T!==v.near||k!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,k=v.far),A.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,v.layers.mask=A.layers.mask|P.layers.mask;const at=q.parent,Ct=v.cameras;ot(v,at);for(let Lt=0;Lt<Ct.length;Lt++)ot(Ct[Lt],at);Ct.length===2?V(v,A,P):v.projectionMatrix.copy(A.projectionMatrix),ft(q,v,at)};function ft(q,it,xt){xt===null?q.matrix.copy(it.matrixWorld):(q.matrix.copy(xt.matrixWorld),q.matrix.invert(),q.matrix.multiply(it.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(it.projectionMatrix),q.projectionMatrixInverse.copy(it.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Po*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let St=null;function kt(q,it){if(h=it.getViewerPose(c||o),g=it,h!==null){const xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let at=!1;xt.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let Lt=0;Lt<xt.length;Lt++){const Wt=xt[Lt];let ae=null;if(p!==null)ae=p.getViewport(Wt);else{const Ft=u.getViewSubImage(d,Wt);ae=Ft.viewport,Lt===0&&(t.setRenderTargetTextures(S,Ft.colorTexture,d.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(S))}let Xt=b[Lt];Xt===void 0&&(Xt=new ze,Xt.layers.enable(Lt),Xt.viewport=new se,b[Lt]=Xt),Xt.matrix.fromArray(Wt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Wt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ae.x,ae.y,ae.width,ae.height),Lt===0&&(v.matrix.copy(Xt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(Xt)}const Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Lt=u.getDepthInformation(xt[0]);Lt&&Lt.isValid&&Lt.texture&&x.init(t,Lt,i.renderState)}}for(let xt=0;xt<w.length;xt++){const at=y[xt],Ct=w[xt];at!==null&&Ct!==void 0&&Ct.update(at,it,c||o)}St&&St(q,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const te=new lc;te.setAnimationLoop(kt),this.setAnimationLoop=function(q){St=q},this.dispose=function(){}}}const Yn=new cn,x0=new he;function v0(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,rc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,S,w,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,S,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ce&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ce&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const S=t.get(f),w=S.envMap,y=S.envMapRotation;w&&(m.envMap.value=w,Yn.copy(y),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(x0.makeRotationFromEuler(Yn)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ce&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function _0(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){const y=w.program;n.uniformBlockBinding(S,y)}function c(S,w){let y=i[S.id];y===void 0&&(g(S),y=h(S),i[S.id]=y,S.addEventListener("dispose",m));const B=w.program;n.updateUBOMapping(S,B);const C=t.render.frame;r[S.id]!==C&&(d(S),r[S.id]=C)}function h(S){const w=u();S.__bindingPointIndex=w;const y=s.createBuffer(),B=S.__size,C=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,B,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,y),y}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const w=i[S.id],y=S.uniforms,B=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let C=0,A=y.length;C<A;C++){const P=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,v=P.length;b<v;b++){const T=P[b];if(p(T,C,b,B)===!0){const k=T.__offset,z=Array.isArray(T.value)?T.value:[T.value];let X=0;for(let $=0;$<z.length;$++){const Y=z[$],Q=x(Y);typeof Y=="number"||typeof Y=="boolean"?(T.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,k+X,T.__data)):Y.isMatrix3?(T.__data[0]=Y.elements[0],T.__data[1]=Y.elements[1],T.__data[2]=Y.elements[2],T.__data[3]=0,T.__data[4]=Y.elements[3],T.__data[5]=Y.elements[4],T.__data[6]=Y.elements[5],T.__data[7]=0,T.__data[8]=Y.elements[6],T.__data[9]=Y.elements[7],T.__data[10]=Y.elements[8],T.__data[11]=0):(Y.toArray(T.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,T.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,w,y,B){const C=S.value,A=w+"_"+y;if(B[A]===void 0)return typeof C=="number"||typeof C=="boolean"?B[A]=C:B[A]=C.clone(),!0;{const P=B[A];if(typeof C=="number"||typeof C=="boolean"){if(P!==C)return B[A]=C,!0}else if(P.equals(C)===!1)return P.copy(C),!0}return!1}function g(S){const w=S.uniforms;let y=0;const B=16;for(let A=0,P=w.length;A<P;A++){const b=Array.isArray(w[A])?w[A]:[w[A]];for(let v=0,T=b.length;v<T;v++){const k=b[v],z=Array.isArray(k.value)?k.value:[k.value];for(let X=0,$=z.length;X<$;X++){const Y=z[X],Q=x(Y),V=y%B,ot=V%Q.boundary,ft=V+ot;y+=ot,ft!==0&&B-ft<Q.storage&&(y+=B-ft),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=y,y+=Q.storage}}}const C=y%B;return C>0&&(y+=B-C),S.__size=y,S.__cache={},this}function x(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){const w=S.target;w.removeEventListener("dispose",m);const y=o.indexOf(w.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function f(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class y0{constructor(t={}){const{canvas:e=lh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const S=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=Nn,this.toneMappingExposure=1;const y=this;let B=!1,C=0,A=0,P=null,b=-1,v=null;const T=new se,k=new se;let z=null;const X=new Mt(0);let $=0,Y=e.width,Q=e.height,V=1,ot=null,ft=null;const St=new se(0,0,Y,Q),kt=new se(0,0,Y,Q);let te=!1;const q=new Wo;let it=!1,xt=!1;const at=new he,Ct=new he,Lt=new D,Wt=new se,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function Ft(){return P===null?V:1}let R=n;function ge(M,I){return e.getContext(M,I)}try{const M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bo}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ht,!1),R===null){const I="webgl2";if(R=ge(I,M),R===null)throw ge(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Bt,Gt,At,Jt,Tt,E,_,O,J,tt,j,bt,ct,pt,jt,nt,mt,Rt,Pt,gt,Yt,Ht,re,L;function lt(){Bt=new Ef(R),Bt.init(),Ht=new h0(R,Bt),Gt=new _f(R,Bt,t,Ht),At=new a0(R,Bt),Gt.reverseDepthBuffer&&d&&At.buffers.depth.setReversed(!0),Jt=new Cf(R),Tt=new Yp,E=new c0(R,Bt,At,Tt,Gt,Ht,Jt),_=new Mf(y),O=new wf(y),J=new Fh(R),re=new xf(R,J),tt=new Tf(R,J,Jt,re),j=new Pf(R,tt,J,Jt),Pt=new Rf(R,Gt,E),nt=new yf(Tt),bt=new Xp(y,_,O,Bt,Gt,re,nt),ct=new v0(y,Tt),pt=new jp,jt=new t0(Bt),Rt=new gf(y,_,O,At,j,p,l),mt=new r0(y,j,Gt),L=new _0(R,Jt,Gt,At),gt=new vf(R,Bt,Jt),Yt=new Af(R,Bt,Jt),Jt.programs=bt.programs,y.capabilities=Gt,y.extensions=Bt,y.properties=Tt,y.renderLists=pt,y.shadowMap=mt,y.state=At,y.info=Jt}lt();const W=new g0(y,R);this.xr=W,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Bt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Bt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(Y,Q,!1))},this.getSize=function(M){return M.set(Y,Q)},this.setSize=function(M,I,G=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,Q=I,e.width=Math.floor(M*V),e.height=Math.floor(I*V),G===!0&&(e.style.width=M+"px",e.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(Y*V,Q*V).floor()},this.setDrawingBufferSize=function(M,I,G){Y=M,Q=I,V=G,e.width=Math.floor(M*G),e.height=Math.floor(I*G),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(T)},this.getViewport=function(M){return M.copy(St)},this.setViewport=function(M,I,G,H){M.isVector4?St.set(M.x,M.y,M.z,M.w):St.set(M,I,G,H),At.viewport(T.copy(St).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(kt)},this.setScissor=function(M,I,G,H){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,I,G,H),At.scissor(k.copy(kt).multiplyScalar(V).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(M){At.setScissorTest(te=M)},this.setOpaqueSort=function(M){ot=M},this.setTransparentSort=function(M){ft=M},this.getClearColor=function(M){return M.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(M=!0,I=!0,G=!0){let H=0;if(M){let F=!1;if(P!==null){const st=P.texture.format;F=st===Vo||st===Ho||st===Go}if(F){const st=P.texture.type,dt=st===wn||st===ei||st===is||st===Li||st===zo||st===ko,vt=Rt.getClearColor(),_t=Rt.getClearAlpha(),It=vt.r,Nt=vt.g,yt=vt.b;dt?(g[0]=It,g[1]=Nt,g[2]=yt,g[3]=_t,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=It,x[1]=Nt,x[2]=yt,x[3]=_t,R.clearBufferiv(R.COLOR,0,x))}else H|=R.COLOR_BUFFER_BIT}I&&(H|=R.DEPTH_BUFFER_BIT),G&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),jt.dispose(),Tt.dispose(),_.dispose(),O.dispose(),j.dispose(),re.dispose(),L.dispose(),bt.dispose(),W.dispose(),W.removeEventListener("sessionstart",Qo),W.removeEventListener("sessionend",ta),kn.stop()};function K(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const M=Jt.autoReset,I=mt.enabled,G=mt.autoUpdate,H=mt.needsUpdate,F=mt.type;lt(),Jt.autoReset=M,mt.enabled=I,mt.autoUpdate=G,mt.needsUpdate=H,mt.type=F}function ht(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ut(M){const I=M.target;I.removeEventListener("dispose",Ut),fe(I)}function fe(M){we(M),Tt.remove(M)}function we(M){const I=Tt.get(M).programs;I!==void 0&&(I.forEach(function(G){bt.releaseProgram(G)}),M.isShaderMaterial&&bt.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,G,H,F,st){I===null&&(I=ae);const dt=F.isMesh&&F.matrixWorld.determinant()<0,vt=Sc(M,I,G,H,F);At.setMaterial(H,dt);let _t=G.index,It=1;if(H.wireframe===!0){if(_t=tt.getWireframeAttribute(G),_t===void 0)return;It=2}const Nt=G.drawRange,yt=G.attributes.position;let $t=Nt.start*It,oe=(Nt.start+Nt.count)*It;st!==null&&($t=Math.max($t,st.start*It),oe=Math.min(oe,(st.start+st.count)*It)),_t!==null?($t=Math.max($t,0),oe=Math.min(oe,_t.count)):yt!=null&&($t=Math.max($t,0),oe=Math.min(oe,yt.count));const le=oe-$t;if(le<0||le===1/0)return;re.setup(F,H,vt,G,_t);let Ie,Kt=gt;if(_t!==null&&(Ie=J.get(_t),Kt=Yt,Kt.setIndex(Ie)),F.isMesh)H.wireframe===!0?(At.setLineWidth(H.wireframeLinewidth*Ft()),Kt.setMode(R.LINES)):Kt.setMode(R.TRIANGLES);else if(F.isLine){let wt=H.linewidth;wt===void 0&&(wt=1),At.setLineWidth(wt*Ft()),F.isLineSegments?Kt.setMode(R.LINES):F.isLineLoop?Kt.setMode(R.LINE_LOOP):Kt.setMode(R.LINE_STRIP)}else F.isPoints?Kt.setMode(R.POINTS):F.isSprite&&Kt.setMode(R.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Kt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const wt=F._multiDrawStarts,dn=F._multiDrawCounts,Zt=F._multiDrawCount,Ye=_t?J.get(_t).bytesPerElement:1,ii=Tt.get(H).currentProgram.getUniforms();for(let Be=0;Be<Zt;Be++)ii.setValue(R,"_gl_DrawID",Be),Kt.render(wt[Be]/Ye,dn[Be])}else if(F.isInstancedMesh)Kt.renderInstances($t,le,F.count);else if(G.isInstancedBufferGeometry){const wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,dn=Math.min(G.instanceCount,wt);Kt.renderInstances($t,le,dn)}else Kt.render($t,le)};function ee(M,I,G){M.transparent===!0&&M.side===on&&M.forceSinglePass===!1?(M.side=Ce,M.needsUpdate=!0,hs(M,I,G),M.side=zn,M.needsUpdate=!0,hs(M,I,G),M.side=on):hs(M,I,G)}this.compile=function(M,I,G=null){G===null&&(G=M),f=jt.get(G),f.init(I),w.push(f),G.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),M!==G&&M.traverseVisible(function(F){F.isLight&&F.layers.test(I.layers)&&(f.pushLight(F),F.castShadow&&f.pushShadow(F))}),f.setupLights();const H=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const st=F.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){const vt=st[dt];ee(vt,G,F),H.add(vt)}else ee(st,G,F),H.add(st)}),w.pop(),f=null,H},this.compileAsync=function(M,I,G=null){const H=this.compile(M,I,G);return new Promise(F=>{function st(){if(H.forEach(function(dt){Tt.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){F(M);return}setTimeout(st,10)}Bt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Xe=null;function hn(M){Xe&&Xe(M)}function Qo(){kn.stop()}function ta(){kn.start()}const kn=new lc;kn.setAnimationLoop(hn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(M){Xe=M,W.setAnimationLoop(M),M===null?kn.stop():kn.start()},W.addEventListener("sessionstart",Qo),W.addEventListener("sessionend",ta),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(I),I=W.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,I,P),f=jt.get(M,w.length),f.init(I),w.push(f),Ct.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),q.setFromProjectionMatrix(Ct),xt=this.localClippingEnabled,it=nt.init(this.clippingPlanes,xt),m=pt.get(M,S.length),m.init(),S.push(m),W.enabled===!0&&W.isPresenting===!0){const st=y.xr.getDepthSensingMesh();st!==null&&rr(st,I,-1/0,y.sortObjects)}rr(M,I,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ot,ft),Xt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Xt&&Rt.addToRenderList(m,M),this.info.render.frame++,it===!0&&nt.beginShadows();const G=f.state.shadowsArray;mt.render(G,M,I),it===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,F=m.transmissive;if(f.setupLights(),I.isArrayCamera){const st=I.cameras;if(F.length>0)for(let dt=0,vt=st.length;dt<vt;dt++){const _t=st[dt];na(H,F,M,_t)}Xt&&Rt.render(M);for(let dt=0,vt=st.length;dt<vt;dt++){const _t=st[dt];ea(m,M,_t,_t.viewport)}}else F.length>0&&na(H,F,M,I),Xt&&Rt.render(M),ea(m,M,I);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(y,M,I),re.resetDefaultState(),b=-1,v=null,w.pop(),w.length>0?(f=w[w.length-1],it===!0&&nt.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function rr(M,I,G,H){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){H&&Wt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ct);const dt=j.update(M),vt=M.material;vt.visible&&m.push(M,dt,vt,G,Wt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){const dt=j.update(M),vt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Wt.copy(M.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Wt.copy(dt.boundingSphere.center)),Wt.applyMatrix4(M.matrixWorld).applyMatrix4(Ct)),Array.isArray(vt)){const _t=dt.groups;for(let It=0,Nt=_t.length;It<Nt;It++){const yt=_t[It],$t=vt[yt.materialIndex];$t&&$t.visible&&m.push(M,dt,$t,G,Wt.z,yt)}}else vt.visible&&m.push(M,dt,vt,G,Wt.z,null)}}const st=M.children;for(let dt=0,vt=st.length;dt<vt;dt++)rr(st[dt],I,G,H)}function ea(M,I,G,H){const F=M.opaque,st=M.transmissive,dt=M.transparent;f.setupLightsView(G),it===!0&&nt.setGlobalState(y.clippingPlanes,G),H&&At.viewport(T.copy(H)),F.length>0&&cs(F,I,G),st.length>0&&cs(st,I,G),dt.length>0&&cs(dt,I,G),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function na(M,I,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new tn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Sn:wn,minFilter:Qn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const st=f.state.transmissionRenderTarget[H.id],dt=H.viewport||T;st.setSize(dt.z,dt.w);const vt=y.getRenderTarget();y.setRenderTarget(st),y.getClearColor(X),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),Xt&&Rt.render(G);const _t=y.toneMapping;y.toneMapping=Nn;const It=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),it===!0&&nt.setGlobalState(y.clippingPlanes,H),cs(M,G,H),E.updateMultisampleRenderTarget(st),E.updateRenderTargetMipmap(st),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let yt=0,$t=I.length;yt<$t;yt++){const oe=I[yt],le=oe.object,Ie=oe.geometry,Kt=oe.material,wt=oe.group;if(Kt.side===on&&le.layers.test(H.layers)){const dn=Kt.side;Kt.side=Ce,Kt.needsUpdate=!0,ia(le,G,H,Ie,Kt,wt),Kt.side=dn,Kt.needsUpdate=!0,Nt=!0}}Nt===!0&&(E.updateMultisampleRenderTarget(st),E.updateRenderTargetMipmap(st))}y.setRenderTarget(vt),y.setClearColor(X,$),It!==void 0&&(H.viewport=It),y.toneMapping=_t}function cs(M,I,G){const H=I.isScene===!0?I.overrideMaterial:null;for(let F=0,st=M.length;F<st;F++){const dt=M[F],vt=dt.object,_t=dt.geometry,It=H===null?dt.material:H,Nt=dt.group;vt.layers.test(G.layers)&&ia(vt,I,G,_t,It,Nt)}}function ia(M,I,G,H,F,st){M.onBeforeRender(y,I,G,H,F,st),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(y,I,G,H,M,st),F.transparent===!0&&F.side===on&&F.forceSinglePass===!1?(F.side=Ce,F.needsUpdate=!0,y.renderBufferDirect(G,I,H,F,M,st),F.side=zn,F.needsUpdate=!0,y.renderBufferDirect(G,I,H,F,M,st),F.side=on):y.renderBufferDirect(G,I,H,F,M,st),M.onAfterRender(y,I,G,H,F,st)}function hs(M,I,G){I.isScene!==!0&&(I=ae);const H=Tt.get(M),F=f.state.lights,st=f.state.shadowsArray,dt=F.state.version,vt=bt.getParameters(M,F.state,st,I,G),_t=bt.getProgramCacheKey(vt);let It=H.programs;H.environment=M.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(M.isMeshStandardMaterial?O:_).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?I.environmentRotation:M.envMapRotation,It===void 0&&(M.addEventListener("dispose",Ut),It=new Map,H.programs=It);let Nt=It.get(_t);if(Nt!==void 0){if(H.currentProgram===Nt&&H.lightsStateVersion===dt)return ra(M,vt),Nt}else vt.uniforms=bt.getUniforms(M),M.onBeforeCompile(vt,y),Nt=bt.acquireProgram(vt,_t),It.set(_t,Nt),H.uniforms=vt.uniforms;const yt=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(yt.clippingPlanes=nt.uniform),ra(M,vt),H.needsLights=wc(M),H.lightsStateVersion=dt,H.needsLights&&(yt.ambientLightColor.value=F.state.ambient,yt.lightProbe.value=F.state.probe,yt.directionalLights.value=F.state.directional,yt.directionalLightShadows.value=F.state.directionalShadow,yt.spotLights.value=F.state.spot,yt.spotLightShadows.value=F.state.spotShadow,yt.rectAreaLights.value=F.state.rectArea,yt.ltc_1.value=F.state.rectAreaLTC1,yt.ltc_2.value=F.state.rectAreaLTC2,yt.pointLights.value=F.state.point,yt.pointLightShadows.value=F.state.pointShadow,yt.hemisphereLights.value=F.state.hemi,yt.directionalShadowMap.value=F.state.directionalShadowMap,yt.directionalShadowMatrix.value=F.state.directionalShadowMatrix,yt.spotShadowMap.value=F.state.spotShadowMap,yt.spotLightMatrix.value=F.state.spotLightMatrix,yt.spotLightMap.value=F.state.spotLightMap,yt.pointShadowMap.value=F.state.pointShadowMap,yt.pointShadowMatrix.value=F.state.pointShadowMatrix),H.currentProgram=Nt,H.uniformsList=null,Nt}function sa(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Ws.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function ra(M,I){const G=Tt.get(M);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function Sc(M,I,G,H,F){I.isScene!==!0&&(I=ae),E.resetTextureUnits();const st=I.fog,dt=H.isMeshStandardMaterial?I.environment:null,vt=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ui,_t=(H.isMeshStandardMaterial?O:_).get(H.envMap||dt),It=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Nt=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),yt=!!G.morphAttributes.position,$t=!!G.morphAttributes.normal,oe=!!G.morphAttributes.color;let le=Nn;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(le=y.toneMapping);const Ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Kt=Ie!==void 0?Ie.length:0,wt=Tt.get(H),dn=f.state.lights;if(it===!0&&(xt===!0||M!==v)){const ke=M===v&&H.id===b;nt.setState(H,M,ke)}let Zt=!1;H.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==dn.state.version||wt.outputColorSpace!==vt||F.isBatchedMesh&&wt.batching===!1||!F.isBatchedMesh&&wt.batching===!0||F.isBatchedMesh&&wt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&wt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&wt.instancing===!1||!F.isInstancedMesh&&wt.instancing===!0||F.isSkinnedMesh&&wt.skinning===!1||!F.isSkinnedMesh&&wt.skinning===!0||F.isInstancedMesh&&wt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&wt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&wt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&wt.instancingMorph===!1&&F.morphTexture!==null||wt.envMap!==_t||H.fog===!0&&wt.fog!==st||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==nt.numPlanes||wt.numIntersection!==nt.numIntersection)||wt.vertexAlphas!==It||wt.vertexTangents!==Nt||wt.morphTargets!==yt||wt.morphNormals!==$t||wt.morphColors!==oe||wt.toneMapping!==le||wt.morphTargetsCount!==Kt)&&(Zt=!0):(Zt=!0,wt.__version=H.version);let Ye=wt.currentProgram;Zt===!0&&(Ye=hs(H,I,F));let ii=!1,Be=!1,ki=!1;const ce=Ye.getUniforms(),en=wt.uniforms;if(At.useProgram(Ye.program)&&(ii=!0,Be=!0,ki=!0),H.id!==b&&(b=H.id,Be=!0),ii||v!==M){At.buffers.depth.getReversed()?(at.copy(M.projectionMatrix),hh(at),dh(at),ce.setValue(R,"projectionMatrix",at)):ce.setValue(R,"projectionMatrix",M.projectionMatrix),ce.setValue(R,"viewMatrix",M.matrixWorldInverse);const Tn=ce.map.cameraPosition;Tn!==void 0&&Tn.setValue(R,Lt.setFromMatrixPosition(M.matrixWorld)),Gt.logarithmicDepthBuffer&&ce.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ce.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),v!==M&&(v=M,Be=!0,ki=!0)}if(F.isSkinnedMesh){ce.setOptional(R,F,"bindMatrix"),ce.setOptional(R,F,"bindMatrixInverse");const ke=F.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),ce.setValue(R,"boneTexture",ke.boneTexture,E))}F.isBatchedMesh&&(ce.setOptional(R,F,"batchingTexture"),ce.setValue(R,"batchingTexture",F._matricesTexture,E),ce.setOptional(R,F,"batchingIdTexture"),ce.setValue(R,"batchingIdTexture",F._indirectTexture,E),ce.setOptional(R,F,"batchingColorTexture"),F._colorsTexture!==null&&ce.setValue(R,"batchingColorTexture",F._colorsTexture,E));const Gi=G.morphAttributes;if((Gi.position!==void 0||Gi.normal!==void 0||Gi.color!==void 0)&&Pt.update(F,G,Ye),(Be||wt.receiveShadow!==F.receiveShadow)&&(wt.receiveShadow=F.receiveShadow,ce.setValue(R,"receiveShadow",F.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(en.envMap.value=_t,en.flipEnvMap.value=_t.isCubeTexture&&_t.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(en.envMapIntensity.value=I.environmentIntensity),Be&&(ce.setValue(R,"toneMappingExposure",y.toneMappingExposure),wt.needsLights&&bc(en,ki),st&&H.fog===!0&&ct.refreshFogUniforms(en,st),ct.refreshMaterialUniforms(en,H,V,Q,f.state.transmissionRenderTarget[M.id]),Ws.upload(R,sa(wt),en,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ws.upload(R,sa(wt),en,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ce.setValue(R,"center",F.center),ce.setValue(R,"modelViewMatrix",F.modelViewMatrix),ce.setValue(R,"normalMatrix",F.normalMatrix),ce.setValue(R,"modelMatrix",F.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const ke=H.uniformsGroups;for(let Tn=0,An=ke.length;Tn<An;Tn++){const oa=ke[Tn];L.update(oa,Ye),L.bind(oa,Ye)}}return Ye}function bc(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function wc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,I,G){Tt.get(M.texture).__webglTexture=I,Tt.get(M.depthTexture).__webglTexture=G;const H=Tt.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,I){const G=Tt.get(M);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,G=0){P=M,C=I,A=G;let H=!0,F=null,st=!1,dt=!1;if(M){const _t=Tt.get(M);if(_t.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(R.FRAMEBUFFER,null),H=!1;else if(_t.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(_t.__hasExternalTextures)E.rebindTextures(M,Tt.get(M.texture).__webglTexture,Tt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const yt=M.depthTexture;if(_t.__boundDepthTexture!==yt){if(yt!==null&&Tt.has(yt)&&(M.width!==yt.image.width||M.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const It=M.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(dt=!0);const Nt=Tt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Nt[I])?F=Nt[I][G]:F=Nt[I],st=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?F=Tt.get(M).__webglMultisampledFramebuffer:Array.isArray(Nt)?F=Nt[G]:F=Nt,T.copy(M.viewport),k.copy(M.scissor),z=M.scissorTest}else T.copy(St).multiplyScalar(V).floor(),k.copy(kt).multiplyScalar(V).floor(),z=te;if(At.bindFramebuffer(R.FRAMEBUFFER,F)&&H&&At.drawBuffers(M,F),At.viewport(T),At.scissor(k),At.setScissorTest(z),st){const _t=Tt.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,_t.__webglTexture,G)}else if(dt){const _t=Tt.get(M.texture),It=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,_t.__webglTexture,G||0,It)}b=-1},this.readRenderTargetPixels=function(M,I,G,H,F,st,dt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Tt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt){At.bindFramebuffer(R.FRAMEBUFFER,vt);try{const _t=M.texture,It=_t.format,Nt=_t.type;if(!Gt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-H&&G>=0&&G<=M.height-F&&R.readPixels(I,G,H,F,Ht.convert(It),Ht.convert(Nt),st)}finally{const _t=P!==null?Tt.get(P).__webglFramebuffer:null;At.bindFramebuffer(R.FRAMEBUFFER,_t)}}},this.readRenderTargetPixelsAsync=async function(M,I,G,H,F,st,dt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Tt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(vt=vt[dt]),vt){const _t=M.texture,It=_t.format,Nt=_t.type;if(!Gt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=M.width-H&&G>=0&&G<=M.height-F){At.bindFramebuffer(R.FRAMEBUFFER,vt);const yt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,yt),R.bufferData(R.PIXEL_PACK_BUFFER,st.byteLength,R.STREAM_READ),R.readPixels(I,G,H,F,Ht.convert(It),Ht.convert(Nt),0);const $t=P!==null?Tt.get(P).__webglFramebuffer:null;At.bindFramebuffer(R.FRAMEBUFFER,$t);const oe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await ch(R,oe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,yt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,st),R.deleteBuffer(yt),R.deleteSync(oe),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,I=null,G=0){M.isTexture!==!0&&(es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,M=arguments[1]);const H=Math.pow(2,-G),F=Math.floor(M.image.width*H),st=Math.floor(M.image.height*H),dt=I!==null?I.x:0,vt=I!==null?I.y:0;E.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,dt,vt,F,st),At.unbindTexture()},this.copyTextureToTexture=function(M,I,G=null,H=null,F=0){M.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1],I=arguments[2],F=arguments[3]||0,G=null);let st,dt,vt,_t,It,Nt,yt,$t,oe;const le=M.isCompressedTexture?M.mipmaps[F]:M.image;G!==null?(st=G.max.x-G.min.x,dt=G.max.y-G.min.y,vt=G.isBox3?G.max.z-G.min.z:1,_t=G.min.x,It=G.min.y,Nt=G.isBox3?G.min.z:0):(st=le.width,dt=le.height,vt=le.depth||1,_t=0,It=0,Nt=0),H!==null?(yt=H.x,$t=H.y,oe=H.z):(yt=0,$t=0,oe=0);const Ie=Ht.convert(I.format),Kt=Ht.convert(I.type);let wt;I.isData3DTexture?(E.setTexture3D(I,0),wt=R.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(E.setTexture2DArray(I,0),wt=R.TEXTURE_2D_ARRAY):(E.setTexture2D(I,0),wt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const dn=R.getParameter(R.UNPACK_ROW_LENGTH),Zt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ye=R.getParameter(R.UNPACK_SKIP_PIXELS),ii=R.getParameter(R.UNPACK_SKIP_ROWS),Be=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,le.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,le.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,_t),R.pixelStorei(R.UNPACK_SKIP_ROWS,It),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Nt);const ki=M.isDataArrayTexture||M.isData3DTexture,ce=I.isDataArrayTexture||I.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const en=Tt.get(M),Gi=Tt.get(I),ke=Tt.get(en.__renderTarget),Tn=Tt.get(Gi.__renderTarget);At.bindFramebuffer(R.READ_FRAMEBUFFER,ke.__webglFramebuffer),At.bindFramebuffer(R.DRAW_FRAMEBUFFER,Tn.__webglFramebuffer);for(let An=0;An<vt;An++)ki&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Tt.get(M).__webglTexture,F,Nt+An),M.isDepthTexture?(ce&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Tt.get(I).__webglTexture,F,oe+An),R.blitFramebuffer(_t,It,st,dt,yt,$t,st,dt,R.DEPTH_BUFFER_BIT,R.NEAREST)):ce?R.copyTexSubImage3D(wt,F,yt,$t,oe+An,_t,It,st,dt):R.copyTexSubImage2D(wt,F,yt,$t,oe+An,_t,It,st,dt);At.bindFramebuffer(R.READ_FRAMEBUFFER,null),At.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ce?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(wt,F,yt,$t,oe,st,dt,vt,Ie,Kt,le.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(wt,F,yt,$t,oe,st,dt,vt,Ie,le.data):R.texSubImage3D(wt,F,yt,$t,oe,st,dt,vt,Ie,Kt,le):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,F,yt,$t,st,dt,Ie,Kt,le.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,F,yt,$t,le.width,le.height,Ie,le.data):R.texSubImage2D(R.TEXTURE_2D,F,yt,$t,st,dt,Ie,Kt,le);R.pixelStorei(R.UNPACK_ROW_LENGTH,dn),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Zt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ye),R.pixelStorei(R.UNPACK_SKIP_ROWS,ii),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Be),F===0&&I.generateMipmaps&&R.generateMipmap(wt),At.unbindTexture()},this.copyTextureToTexture3D=function(M,I,G=null,H=null,F=0){return M.isTexture!==!0&&(es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,M=arguments[2],I=arguments[3],F=arguments[4]||0),es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,I,G,H,F)},this.initRenderTarget=function(M){Tt.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),At.unbindTexture()},this.resetState=function(){C=0,A=0,P=null,At.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class qo{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(t),this.density=e}clone(){return new qo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class M0 extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new cn,this.environmentIntensity=1,this.environmentRotation=new cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class S0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ro,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new D;class js{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=an(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ie(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ie(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=an(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=an(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=an(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=an(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ie(e,this.array),n=ie(n,this.array),i=ie(i,this.array),r=ie(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new We(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new js(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pc extends ni{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let vi;const Yi=new D,_i=new D,yi=new D,Mi=new Et,qi=new Et,mc=new he,Ls=new D,ji=new D,Is=new D,il=new Et,Ur=new Et,sl=new Et;class b0 extends ve{constructor(t=new pc){if(super(),this.isSprite=!0,this.type="Sprite",vi===void 0){vi=new Re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new S0(e,5);vi.setIndex([0,1,2,0,2,3]),vi.setAttribute("position",new js(n,3,0,!1)),vi.setAttribute("uv",new js(n,2,3,!1))}this.geometry=vi,this.material=t,this.center=new Et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_i.setFromMatrixScale(this.matrixWorld),mc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),yi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_i.multiplyScalar(-yi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Fs(Ls.set(-.5,-.5,0),yi,o,_i,i,r),Fs(ji.set(.5,-.5,0),yi,o,_i,i,r),Fs(Is.set(.5,.5,0),yi,o,_i,i,r),il.set(0,0),Ur.set(1,0),sl.set(1,1);let a=t.ray.intersectTriangle(Ls,ji,Is,!1,Yi);if(a===null&&(Fs(ji.set(-.5,.5,0),yi,o,_i,i,r),Ur.set(0,1),a=t.ray.intersectTriangle(Ls,Is,ji,!1,Yi),a===null))return;const l=t.ray.origin.distanceTo(Yi);l<t.near||l>t.far||e.push({distance:l,point:Yi.clone(),uv:Ve.getInterpolation(Yi,Ls,ji,Is,il,Ur,sl,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Fs(s,t,e,n,i,r){Mi.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(qi.x=r*Mi.x-i*Mi.y,qi.y=i*Mi.x+r*Mi.y):qi.copy(Mi),s.copy(t),s.x+=qi.x,s.y+=qi.y,s.applyMatrix4(mc)}class gc extends ni{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const $s=new D,Js=new D,rl=new he,$i=new tc,Bs=new er,Nr=new D,ol=new D;class w0 extends ve{constructor(t=new Re,e=new gc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)$s.fromBufferAttribute(e,i-1),Js.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=$s.distanceTo(Js);t.setAttribute("lineDistance",new de(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(i),Bs.radius+=r,t.ray.intersectsSphere(Bs)===!1)return;rl.copy(i).invert(),$i.copy(t.ray).applyMatrix4(rl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=h.getX(x),S=h.getX(x+1),w=Us(this,t,$i,l,f,S);w&&e.push(w)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),f=Us(this,t,$i,l,x,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=Us(this,t,$i,l,x,x+1);f&&e.push(f)}if(this.isLineLoop){const x=Us(this,t,$i,l,g-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Us(s,t,e,n,i,r){const o=s.geometry.attributes.position;if($s.fromBufferAttribute(o,i),Js.fromBufferAttribute(o,r),e.distanceSqToSegment($s,Js,Nr,ol)>n)return;Nr.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Nr);if(!(l<t.near||l>t.far))return{distance:l,point:ol.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class al extends Le{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jo extends Re{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new D,h=new Et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qt extends Re{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const x=[],m=n/2;let f=0;S(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(p,2));function S(){const y=new D,B=new D;let C=0;const A=(e-t)/n;for(let P=0;P<=r;P++){const b=[],v=P/r,T=v*(e-t)+t;for(let k=0;k<=i;k++){const z=k/i,X=z*l+a,$=Math.sin(X),Y=Math.cos(X);B.x=T*$,B.y=-v*n+m,B.z=T*Y,u.push(B.x,B.y,B.z),y.set($,A,Y).normalize(),d.push(y.x,y.y,y.z),p.push(z,1-v),b.push(g++)}x.push(b)}for(let P=0;P<i;P++)for(let b=0;b<r;b++){const v=x[b][P],T=x[b+1][P],k=x[b+1][P+1],z=x[b][P+1];(t>0||b!==0)&&(h.push(v,T,z),C+=3),(e>0||b!==r-1)&&(h.push(T,k,z),C+=3)}c.addGroup(f,C,0),f+=C}function w(y){const B=g,C=new Et,A=new D;let P=0;const b=y===!0?t:e,v=y===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*v,0),d.push(0,v,0),p.push(.5,.5),g++;const T=g;for(let k=0;k<=i;k++){const X=k/i*l+a,$=Math.cos(X),Y=Math.sin(X);A.x=b*Y,A.y=m*v,A.z=b*$,u.push(A.x,A.y,A.z),d.push(0,v,0),C.x=$*.5+.5,C.y=Y*.5*v+.5,p.push(C.x,C.y),g++}for(let k=0;k<i;k++){const z=B+k,X=T+k;y===!0?h.push(X,X+1,z):h.push(X+1,X,z),P+=3}c.addGroup(f,P,y===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Un extends Qt{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Un(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class $o extends Re{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const r=[],o=[];a(i),c(n),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const w=new D,y=new D,B=new D;for(let C=0;C<e.length;C+=3)p(e[C+0],w),p(e[C+1],y),p(e[C+2],B),l(w,y,B,S)}function l(S,w,y,B){const C=B+1,A=[];for(let P=0;P<=C;P++){A[P]=[];const b=S.clone().lerp(y,P/C),v=w.clone().lerp(y,P/C),T=C-P;for(let k=0;k<=T;k++)k===0&&P===C?A[P][k]=b:A[P][k]=b.clone().lerp(v,k/T)}for(let P=0;P<C;P++)for(let b=0;b<2*(C-P)-1;b++){const v=Math.floor(b/2);b%2===0?(d(A[P][v+1]),d(A[P+1][v]),d(A[P][v])):(d(A[P][v+1]),d(A[P+1][v+1]),d(A[P+1][v]))}}function c(S){const w=new D;for(let y=0;y<r.length;y+=3)w.x=r[y+0],w.y=r[y+1],w.z=r[y+2],w.normalize().multiplyScalar(S),r[y+0]=w.x,r[y+1]=w.y,r[y+2]=w.z}function h(){const S=new D;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];const y=m(S)/2/Math.PI+.5,B=f(S)/Math.PI+.5;o.push(y,1-B)}g(),u()}function u(){for(let S=0;S<o.length;S+=6){const w=o[S+0],y=o[S+2],B=o[S+4],C=Math.max(w,y,B),A=Math.min(w,y,B);C>.9&&A<.1&&(w<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),B<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function p(S,w){const y=S*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function g(){const S=new D,w=new D,y=new D,B=new D,C=new Et,A=new Et,P=new Et;for(let b=0,v=0;b<r.length;b+=9,v+=6){S.set(r[b+0],r[b+1],r[b+2]),w.set(r[b+3],r[b+4],r[b+5]),y.set(r[b+6],r[b+7],r[b+8]),C.set(o[v+0],o[v+1]),A.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),B.copy(S).add(w).add(y).divideScalar(3);const T=m(B);x(C,v+0,S,T),x(A,v+2,w,T),x(P,v+4,y,T)}}function x(S,w,y,B){B<0&&S.x===1&&(o[w]=S.x-1),y.x===0&&y.z===0&&(o[w]=B/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function f(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.vertices,t.indices,t.radius,t.details)}}class Jo extends $o{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Jo(t.radius,t.detail)}}class ir extends Re{constructor(t=.5,e=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/i,p=new D,g=new Et;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<i;x++){const m=x*(n+1);for(let f=0;f<n;f++){const S=f+m,w=S,y=S+n+1,B=S+n+2,C=S+1;a.push(w,y,C),a.push(y,B,C)}}this.setIndex(a),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ir(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class vn extends Re{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,d=new D,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const S=[],w=f/n;let y=0;f===0&&o===0?y=.5/e:f===n&&l===Math.PI&&(y=-.5/e);for(let B=0;B<=e;B++){const C=B/e;u.x=-t*Math.cos(i+C*r)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(i+C*r)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(C+y,1-w),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){const w=h[f][S+1],y=h[f][S],B=h[f+1][S],C=h[f+1][S+1];(f!==0||o>0)&&p.push(w,y,C),(f!==n-1||l<Math.PI)&&p.push(y,B,C)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class E0 extends Ae{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Z extends ni{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$l,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new cn,this.combine=Uo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sr extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class T0 extends sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Or=new he,ll=new D,cl=new D;class xc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ll.setFromMatrixPosition(t.matrixWorld),e.position.copy(ll),cl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cl),e.updateMatrixWorld(),Or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Or),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Or)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const hl=new he,Ji=new D,zr=new D;class A0 extends xc{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ji.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ji),zr.copy(n.position),zr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(zr),n.updateMatrixWorld(),i.makeTranslation(-Ji.x,-Ji.y,-Ji.z),hl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl)}}class C0 extends sr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new A0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class R0 extends xc{constructor(){super(new Xo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dl extends sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new R0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class P0 extends sr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class D0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ul(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ul();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ul(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bo);const vc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class zi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const L0=new Xo(-1,1,1,-1,0,1);class I0 extends Re{constructor(){super(),this.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new de([0,2,0,0,2,0],2))}}const F0=new I0;class Ko{constructor(t){this._mesh=new N(F0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,L0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class B0 extends zi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ss.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ko(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class fl extends zi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class U0 extends zi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class N0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Et);this._width=n.width,this._height=n.height,e=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new B0(vc),this.copyPass.material.blending=Mn,this.clock=new D0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}fl!==void 0&&(o instanceof fl?n=!0:o instanceof U0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class O0 extends zi{constructor(t,e,n=null,i=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Mt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const z0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Bi extends zi{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Et(t.x,t.y):new Et(256,256),this.clearColor=new Mt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new tn(r,o,{type:Sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new tn(r,o,{type:Sn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new tn(r,o,{type:Sn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=z0;this.highPassUniforms=ss.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Et(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=vc;this.copyUniforms=ss.clone(h.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Hr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Mt,this.oldClearAlpha=1,this.basic=new Ke,this.fsQuad=new Ko(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Et(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Bi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Bi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Et(.5,.5)},direction:{value:new Et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ae({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Bi.BlurDirectionX=new Et(1,0);Bi.BlurDirectionY=new Et(0,1);const k0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class G0 extends zi{constructor(){super();const t=k0;this.uniforms=ss.clone(t.uniforms),this.material=new E0({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ko(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===ne&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Il?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===No?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ul?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ki={fov:35,height:38,rotationSmoothing:.06,positionSmoothing:.1,lookAheadDistance:6};class H0{constructor(){U(this,"camera");U(this,"targetPos",new D);U(this,"cameraAngle",0);this.camera=new ze(Ki.fov,window.innerWidth/window.innerHeight,5,800)}follow(t,e,n){let i=n-this.cameraAngle;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;this.cameraAngle+=i*Ki.rotationSmoothing;const r=Math.sin(this.cameraAngle)*-28,o=-Math.cos(this.cameraAngle)*-28;this.targetPos.set(t.x+r,t.y+Ki.height,t.z+o),this.camera.position.lerp(this.targetPos,Ki.positionSmoothing);const l=e.length()>.5?e.clone().normalize().multiplyScalar(Ki.lookAheadDistance):new D(0,0,0),c=t.clone().add(l);c.y+=2,this.camera.lookAt(c)}}class V0{constructor(){U(this,"boxes",[])}addBox(t,e,n,i){this.boxes.push({cx:t,cz:e,hw:n,hd:i})}resolveCircle(t,e,n){let i=t,r=e;for(const o of this.boxes){const a=o.hw+n,l=o.hd+n,c=i-o.cx,h=r-o.cz;if(Math.abs(c)<a&&Math.abs(h)<l){const u=a-Math.abs(c),d=l-Math.abs(h);u<d?i+=c<0?-u:u:r+=h<0?-d:d}}return{x:i,z:r}}}class W0{constructor(){U(this,"renderer");U(this,"scene");U(this,"camera");U(this,"collisionWorld",new V0);U(this,"composer");U(this,"clouds",[]);U(this,"updateCallbacks",[]);U(this,"lastTime",0);U(this,"C",{modernGrey:13157564,warmGrey:12103846,terracotta:12884602,deepClay:10516568,softWhite:15262940,charcoal:4868682,warmCream:13945272,oliveGreen:9083754,ironRed:12674667})}async init(){this.renderer=new y0({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ll,this.renderer.toneMapping=No,this.renderer.toneMappingExposure=1.1,document.body.appendChild(this.renderer.domElement),this.renderer.domElement.style.position="relative",this.renderer.domElement.style.zIndex="1",this.scene=new M0,this.scene.fog=new qo(8900331,.0025),this.camera=new H0,this.scene.add(this.camera.camera),this.composer=new N0(this.renderer),this.composer.addPass(new O0(this.scene,this.camera.camera));const t=new Bi(new Et(window.innerWidth,window.innerHeight),.3,.4,.85);this.composer.addPass(t),this.composer.addPass(new G0);const e=new P0(16777215,.5);this.scene.add(e);const n=new dl(16774368,1.4);n.position.set(80,120,40),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=.5,n.shadow.camera.far=600,n.shadow.camera.left=-300,n.shadow.camera.right=300,n.shadow.camera.top=300,n.shadow.camera.bottom=-300,n.shadow.bias=-.001,this.scene.add(n);const i=new dl(16771280,.5);i.position.set(-60,40,-80),this.scene.add(i);const r=new T0(8900331,8943462,.3);this.scene.add(r),this.createCityGround(),this.createCity(),this.createTEHouses(),this.buildWorkshop(10,15),this.createZebraCrossings(),this.createRoadCorners(),this.createStreetFurniture(),this.createSkyDome(),this.createClouds(),this.createPuddles(),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),this.camera.camera.aspect=window.innerWidth/window.innerHeight,this.camera.camera.updateProjectionMatrix()})}seed(t,e,n=0){const i=Math.sin(t*127.1+e*311.7+n*74.3)*43758.5453123;return i-Math.floor(i)}getZone(t,e){return Math.abs(t)<80&&Math.abs(e)<80?"cbd":t<-80?"footscray":t>80?"richmond":e<-80?"stkilda":"brunswick"}pickBuildingType(t,e){const n={cbd:[.5,.5,.9,1,1],footscray:[0,.2,.2,.4,1],brunswick:[.3,.6,.6,1,1],richmond:[.3,.3,.6,1,1],stkilda:[0,.3,.3,.7,1]},i=n[t]??n.brunswick,r=["A","B","C","D","E"];for(let o=0;o<i.length;o++)if(e<i[o])return r[o];return"D"}createCityGround(){const r=new Z({color:8947840}),o=new N(new pe(2048,2048),r);o.rotation.x=-Math.PI/2,o.position.y=0,o.receiveShadow=!0,this.scene.add(o);const a={cbd:8947840,footscray:7824981,brunswick:8943462,richmond:8026224,stkilda:9080960};for(let l=-240;l<240;l+=40)for(let c=-240;c<240;c+=40){const h=l+20,u=c+40/2,d=this.getZone(h,u),g=this.seed(l,c,0)<.15?5929546:a[d],x=new Z({color:g}),m=new N(new pe(30,30),x);m.rotation.x=-Math.PI/2,m.position.set(h,.005,u),m.receiveShadow=!0,this.scene.add(m)}}createCity(){const i=new Z({color:2763306}),r=new Z({color:16777215}),o=new Z({color:15777856}),a=new Z({color:13156528}),l=32;for(let c=-240;c<=240;c+=40){const u=new N(new pe(480,8),i);u.rotation.x=-Math.PI/2,u.position.set(0,.01,c),u.receiveShadow=!0,this.scene.add(u);for(let d=-240;d<240;d+=40){const p=d+20;for(const g of[-1,1]){const x=new N(new pe(l,2),a);x.rotation.x=-Math.PI/2,x.position.set(p,.02,c+g*(8/2+1)),x.receiveShadow=!0,this.scene.add(x)}}for(const d of[-1,1]){const p=new N(new pe(480,.2),o);p.rotation.x=-Math.PI/2,p.position.set(0,.03,c+d*(8/2-.3)),this.scene.add(p)}for(let d=-240;d<=240;d+=8){const p=new N(new pe(4,.15),r);p.rotation.x=-Math.PI/2,p.position.set(d,.03,c),this.scene.add(p)}for(let d=-240;d<=240;d+=20)for(const p of[-1,1]){const g=d+(this.seed(d,c,50+p)-.5)*2,x=c+p*5.5,m=(g%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,x,d*10+p,c*10+1)}for(let d=-232;d<240;d+=17){const p=this.seed(d,c,60);if(p>.45){const g=p>.72?1:-1,x=d+(this.seed(d,c,61)-.5)*4,m=c+g*(8/2+1.1);this.addParkedCar(x,m,d+g*3,c+7)}}}for(let c=-240;c<=240;c+=40){const u=new N(new pe(8,480),i);u.rotation.x=-Math.PI/2,u.position.set(c,.01,0),u.receiveShadow=!0,this.scene.add(u);for(let d=-240;d<240;d+=40){const p=d+20;for(const g of[-1,1]){const x=new N(new pe(2,l),a);x.rotation.x=-Math.PI/2,x.position.set(c+g*(8/2+1),.02,p),x.receiveShadow=!0,this.scene.add(x)}}for(const d of[-1,1]){const p=new N(new pe(.2,480),o);p.rotation.x=-Math.PI/2,p.position.set(c+d*(8/2-.3),.03,0),this.scene.add(p)}for(let d=-240;d<=240;d+=8){const p=new N(new pe(.15,4),r);p.rotation.x=-Math.PI/2,p.position.set(c,.03,d),this.scene.add(p)}for(let d=-240;d<=240;d+=20)for(const p of[-1,1]){const g=c+p*5.5,x=d+(this.seed(c,d,52+p)-.5)*2,m=(x%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,x,c*10+2,d*10+p)}for(let d=-232;d<240;d+=17){const p=this.seed(c,d,62);if(p>.45){const g=p>.72?1:-1,x=c+g*(8/2+1.1),m=d+(this.seed(c,d,63)-.5)*4;this.addParkedCar(x,m,c+9,d+g*3)}}}for(let c=-240;c<240;c+=40)for(let h=-240;h<240;h+=40)this.populateBlock(c,h,40,8)}addTree(t,e,n,i){const r=this.seed(n,i,99),o=r<.15?"palm":r<.5?"round":"layered",a=2+r*1.5,l=new Z({color:6045747}),c=new N(new Qt(.25,.35,a,7),l);if(c.position.set(t,a/2,e),c.castShadow=!0,this.scene.add(c),o==="palm"){const h=new N(new Qt(.15,.22,6,6),new Z({color:9139029}));h.position.set(t,3,e),this.scene.add(h);for(let u=0;u<6;u++){const d=u/6*Math.PI*2,p=new N(new et(.15,.08,2.5),new Z({color:2775578}));p.position.set(t+Math.cos(d)*1.2,6.5,e+Math.sin(d)*1.2),p.rotation.y=d,p.rotation.z=.4,this.scene.add(p)}}else if(o==="layered"){const h=[2973229,3829306,4881994];for(let u=0;u<3;u++){const d=2.2-u*.5,p=new N(new Un(d,2,8),new Z({color:h[u]}));p.position.set(t,a+1+u*1.5,e),p.castShadow=!0,this.scene.add(p)}}else{const h=r>.7?4025917:2973229,u=[[0,0,0],[.8,-.3,.5],[-.7,-.2,.3],[.3,.4,-.6],[-.4,.3,-.5]];for(let d=0;d<u.length;d++){const[p,g,x]=u[d],m=1.8+this.seed(n+d*17,i+d*13,103)*.8,f=new N(new vn(m,7,6),new Z({color:h}));f.position.set(t+p,a+2.5+g,e+x),f.castShadow=!0,this.scene.add(f)}}}addParkedCar(t,e,n,i){const r=[13382451,3364300,11184810,14540253,2236962],o=Math.floor(this.seed(n,i,20)*r.length),a=new Z({color:r[o]}),l=new N(new et(1.5,1.2,3),a);l.position.set(t,.6,e),this.scene.add(l);const c=new Z({color:2241348}),h=new N(new et(1.4,.5,.1),c);h.position.set(t,1.3,e-.9),this.scene.add(h)}populateBlock(t,e,n,i){const r=n-i-4,o=t+n/2,a=e+n/2,l=this.getZone(o,a),c=1+Math.floor(this.seed(t,e,1)*2);for(let h=0;h<c;h++){const u=this.seed(t+h*3,e+h*7,3),d=this.pickBuildingType(l,u);if(d==="E"){h===0&&this.buildTypeE(o,a,t,e);break}const p=r*.18,g=c>1?h===0?-p:p:0,x=g+(this.seed(t+h*5,e,4)-.5)*p*.3,m=g+(this.seed(t,e+h*5,5)-.5)*p*.3,f=t+h*11,S=e+h*13;switch(d){case"A":this.buildTypeA(o+x,a+m,f,S);break;case"B":this.buildTypeB(o+x,a+m,f,S);break;case"C":this.buildTypeC(o+x,a+m,f,S);break;case"D":this.buildTypeD(o+x,a+m,f,S);break}}}addBox(t,e,n,i,r,o,a,l,c=0,h=0,u=0){const d=new N(new et(n,i,r),new Z({color:e}));d.position.set(o,a,l),c!==0&&(d.rotation.x=c),h!==0&&(d.rotation.y=h),u!==0&&(d.rotation.z=u),d.castShadow=!0,d.receiveShadow=!0,t.add(d)}addCyl(t,e,n,i,r,o,a,l,c){const h=new N(new Qt(n,i,r,o),new Z({color:e}));h.position.set(a,l,c),h.castShadow=!0,h.receiveShadow=!0,t.add(h)}registerBuildingCollider(t,e,n,i,r,o){const a=Math.floor(this.seed(r,o,101)*4)%4,l=a===1||a===3;this.collisionWorld.addBox(t,e,l?i:n,l?n:i)}buildTypeA(t,e,n,i){const r=this.C,o=new Dt;this.addBox(o,r.modernGrey,16,10,14,0,5,0),this.addBox(o,r.softWhite,16.4,.6,14.4,0,10.3,0);for(const u of[-5,0,5])this.addCyl(o,r.charcoal,.3,.3,3,6,u,1.5,-7);this.addBox(o,r.charcoal,14,.4,.4,0,3,-7);for(const u of[-4.5,0,4.5])this.addGlassBox(o,2241348,2.5,1.8,.15,u,7,-6.93);this.addBox(o,r.deepClay,14,.5,1.2,0,.25,-7.6),this.addBox(o,r.oliveGreen,13,.4,1,0,.7,-7.6);const a=this.seed(n,i,400),l=new Z({color:a>.5?12876352:4876938}),c=new N(new et(14,.1,1.5),l);c.position.set(0,3.8,-7.75),c.rotation.x=.15,o.add(c);const h=new N(new et(14,.3,.08),l);h.position.set(0,3.45,-8.45),o.add(h),this.addBox(o,14210252,.8,.5,.08,-6.5,1,-7.05),this.addRooftopDetails(o,16,14,10,n,i),o.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),o.position.set(t,0,e),this.scene.add(o),this.registerBuildingCollider(t,e,8.5,7.5,n,i)}buildTypeB(t,e,n,i){const r=this.C,o=new Dt;this.addBox(o,r.deepClay,14.5,8.2,12.5,.3,4,.3),this.addBox(o,r.terracotta,14,8,12,0,4,0),this.addBox(o,r.terracotta,14.6,1.2,12.6,0,8.6,0),this.addBox(o,r.softWhite,15,.3,13,0,9.35,0);for(const a of[-3,3]){this.addBox(o,r.softWhite,1.6,2.6,.1,a,5,-5.99),this.addGlassBox(o,2241348,1.2,2.2,.2,a,5,-5.75);for(const l of[4.3,5,5.7])this.addBox(o,r.charcoal,1,.08,.12,a,l,-5.68)}this.addBox(o,r.charcoal,2,3,.2,0,1.5,-6.1),this.addBox(o,r.charcoal,1.5,.4,.2,0,3.2,-6.1),this.addBox(o,r.charcoal,1,.4,.2,0,3.7,-6.1),this.addBox(o,r.deepClay,2,.4,.6,0,.2,-6.6),this.addBox(o,r.oliveGreen,1.8,.1,.5,0,.45,-6.6),this.addBox(o,13938826,.8,.5,.08,-5,1,-6.05),this.addRooftopDetails(o,14,12,8,n,i),o.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),o.position.set(t,0,e),this.scene.add(o),this.registerBuildingCollider(t,e,7.5,6.5,n,i)}buildTypeC(t,e,n,i){const r=this.C,o=new Dt,a=30+Math.floor(this.seed(n,i,31)*20);this.addBox(o,r.modernGrey,8,4,8,0,2,0),this.addBox(o,4478310,7.5,3.5,7.5,0,2,0),this.addBox(o,3359829,7,a,7,0,a/2,0);for(let l=4;l<=a;l+=4)this.addBox(o,r.warmGrey,7.3,.2,7.3,0,l,0);this.addBox(o,r.charcoal,4,3,4,0,a+1.5,0),o.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),o.position.set(t,0,e),this.scene.add(o),this.registerBuildingCollider(t,e,4.5,4.5,n,i)}buildTypeD(t,e,n,i){const r=this.C,o=new Dt;this.addBox(o,r.warmCream,13,7,11,0,3.5,0),this.addBox(o,r.softWhite,13.5,.5,11.5,0,7.25,0),this.addBox(o,r.softWhite,2.8,3.8,1.6,0,4,-6.2),this.addBox(o,r.warmCream,2.5,3.5,1.5,0,4,-6.25);for(const a of[-.8,0,.8])this.addGlassBox(o,3359829,.7,2.5,.2,a,4,-7);this.addBox(o,r.deepClay,2.2,3.2,.3,0,1.6,-5.65),this.addBox(o,r.deepClay,1.8,.4,.3,0,3.35,-5.65),this.addBox(o,r.deepClay,1.2,.4,.3,0,3.8,-5.65);for(const a of[-3.5,3.5])this.addBox(o,r.softWhite,1.8,1.5,.1,a,5.5,-5.5),this.addGlassBox(o,3359829,1.5,1.2,.15,a,5.5,-5.55);this.addBox(o,r.deepClay,11,1,.3,0,.5,-6.65),this.addBox(o,14997960,.8,.5,.08,-5,1,-5.55),this.addRooftopDetails(o,13,11,7,n,i),o.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),o.position.set(t,0,e),this.scene.add(o),this.registerBuildingCollider(t,e,7,6,n,i)}buildTypeE(t,e,n,i){this.C;const r=new Dt,o=12*Math.PI/180;this.addBox(r,6974050,22,4,18,0,2,0),this.addBox(r,1710614,22.1,.3,18.1,0,.15,0);const a=new N(new et(22.5,.3,10),new Z({color:1973786}));a.castShadow=!0,a.receiveShadow=!0,a.rotation.x=o,a.position.set(0,4.5,-4.5),r.add(a);const l=new N(new et(22.5,.3,10),new Z({color:1973786}));l.castShadow=!0,l.receiveShadow=!0,l.rotation.x=-o,l.position.set(0,4.5,4.5),r.add(l),this.addBox(r,1118480,22.5,.5,.6,0,5.2,0);for(const p of[-2,.5,3])this.addBox(r,1118480,22.2,.08,.1,0,3.5,p);this.addBox(r,1118480,4.5,3.5,.2,0,1.75,-9.1),this.addBox(r,2236960,.15,3.5,.2,-2.4,1.75,-9.1),this.addBox(r,2236960,.15,3.5,.2,2.4,1.75,-9.1),this.addBox(r,3359829,8,.8,.15,-11.075,3.5,0),this.addCyl(r,1118480,.1,.1,4,5,-11,2,-9);const c=this.seed(n,i,401),h=new Z({color:c>.5?12876352:4876938}),u=new N(new et(8,.1,1.5),h);u.position.set(0,4.2,-9.85),u.rotation.x=.15,r.add(u);const d=new N(new et(8,.3,.08),h);d.position.set(0,3.85,-10.6),r.add(d);for(const p of[-3.5,3.5]){const g=new N(new Qt(.06,.06,4,5),new Z({color:5592400}));g.position.set(p,2,-10.55),r.add(g)}this.addRooftopDetails(r,22,18,5.2,n,i),r.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),r.position.set(t,0,e),this.scene.add(r),this.registerBuildingCollider(t,e,11.5,9.5,n,i)}createTEHouses(){this.buildHouseMarbellino(20,20),this.collisionWorld.addBox(20,20,10,7.5),this.buildHousePorthole(-60,20),this.collisionWorld.addBox(-60,20,8,6.5),this.buildHouseTerracotta(20,-60),this.collisionWorld.addBox(20,-60,9,7),this.buildHouseLoggia(-60,-60),this.collisionWorld.addBox(-60,-60,10,7.5),this.buildHouseRokka(60,-20),this.collisionWorld.addBox(60,-20,11,8),this.buildHouseTimberStone(100,60),this.collisionWorld.addBox(100,60,11,7),this.buildHouseSculpturalPlaster(-100,-20),this.collisionWorld.addBox(-100,-20,8,6),this.buildHouseHaussmann(60,-100),this.collisionWorld.addBox(60,-100,11,7),this.buildHouseAngularBay(-140,60),this.collisionWorld.addBox(-140,60,9,6.5),this.buildHouseBrutalistCompound(20,100),this.collisionWorld.addBox(20,100,12,5),this.buildHouseTerracottaMonolith(140,20),this.collisionWorld.addBox(140,20,10,5),this.buildHouseCurvedBalcony(-20,-140),this.collisionWorld.addBox(-20,-140,8,6),this.buildHouseCortenPlaster(-140,-60),this.collisionWorld.addBox(-140,-60,10,5.5),this.buildCoffeeShop(-60,-100),this.collisionWorld.addBox(-60,-100,7,5)}buildHouseMarbellino(t,e){const n=new Dt;this.addBox(n,13945786,18,4,14,0,2,0),this.addBox(n,2763306,20,4,15,0,7,0);for(const i of[-8,-5,-2,1,4,7])this.addBox(n,1710618,.15,4,15,i,7,0);this.addBox(n,3355443,20.5,.5,15.5,0,9.25,0),this.addBox(n,3359829,10,.9,.15,0,3.5,-7.1),this.addBox(n,13157564,10.4,1.1,.1,0,3.5,-7.05);for(const i of[-4,0,4]){const r=new N(new et(1.5,2.5,.15),new Z({color:4478310,emissive:new Mt(2241348),emissiveIntensity:.3}));r.position.set(i,7.5,-7.6),n.add(r)}this.addBox(n,1710618,5,3.8,.2,-5.5,1.9,-7.1),this.addBox(n,13157564,2,.3,1,4,.15,-7.5),this.addBox(n,9072736,14,.4,1,0,.2,-8),this.addBox(n,5929546,12,.6,.8,0,.6,-8),n.position.set(t,0,e),this.scene.add(n)}buildHousePorthole(t,e){const n=new Dt;this.addBox(n,12104876,16,5.5,13,0,2.75,0),this.addBox(n,9134144,7,5.5,.3,3.5,2.75,-6.65);for(let i=0;i<5;i++){const r=(i-2)*1.2;this.addBox(n,6965280,7,.2,.4,3.5,2.75+r,-6.55,0,0,Math.PI/7.2)}this.addBox(n,13157564,16.5,.3,13.5,0,5.65,0),this.addBox(n,2763306,17,.5,14,0,5.95,0);{const i=new N(new Qt(1.4,1.4,.15,16),new Z({color:8947848}));i.rotation.x=Math.PI/2,i.position.set(-4,3.5,-6.7),n.add(i)}{const i=new N(new Qt(1.1,1.1,.1,16),new Z({color:2241348,emissive:new Mt(1122867),emissiveIntensity:.5}));i.rotation.x=Math.PI/2,i.position.set(-4,3.5,-6.65),n.add(i)}this.addBox(n,3359829,3.5,1.2,.15,1,3.5,-6.7),this.addBox(n,3359829,3.5,1.2,.15,5,3.5,-6.7),this.addBox(n,3811866,1.8,2.8,.3,-6,1.4,-6.8),this.addBox(n,8947848,2.2,3,.2,-6,1.4,-6.65),this.addBox(n,3828282,10,.7,.8,0,.35,-7.5),n.position.set(t,0,e),this.scene.add(n)}buildHouseTerracotta(t,e){const n=new Dt;this.addBox(n,10121296,17.6,7.2,14.6,0,3.5,0),this.addBox(n,12884602,17,7,14,0,3.5,0),this.addBox(n,12884602,17.8,1.5,14.8,0,7.75,0),this.addBox(n,15262940,18.2,.3,15.2,0,8.65,0),this.addBox(n,9068608,2.4,3.5,.3,0,1.75,-7.1),this.addBox(n,9068608,2,.5,.3,0,3.75,-7.1),this.addBox(n,9068608,1.4,.5,.3,0,4.25,-7.1),this.addBox(n,9068608,1.4,2.8,.5,-4,4,-7.2),this.addBox(n,2241348,1,2.4,.15,-4,4,-7.05),this.addBox(n,15262940,1.6,3,.15,-4,4,-6.98);for(const i of[3.2,4,4.8])this.addBox(n,3355443,.9,.08,.15,-4,i,-7.1);this.addBox(n,9068608,1.4,2.8,.5,4,4,-7.2),this.addBox(n,2241348,1,2.4,.15,4,4,-7.05),this.addBox(n,15262940,1.6,3,.15,4,4,-6.98);for(const i of[3.2,4,4.8])this.addBox(n,3355443,.9,.08,.15,4,i,-7.1);for(const i of[-2,2])this.addBox(n,3359829,.15,1.5,1,8.58,4,i),this.addBox(n,3359829,.15,1.5,1,-8.58,4,i);this.addBox(n,10516568,2.5,.5,.8,-4,.25,-7.5),this.addBox(n,10516568,2.5,.5,.8,4,.25,-7.5),this.addBox(n,5933642,2,.5,.6,-4,.65,-7.5),this.addBox(n,5933642,2,.5,.6,4,.65,-7.5);for(const i of[-6,-2,2,6])this.addBox(n,15262940,.8,.8,.2,i,8.4,-7.4);n.position.set(t,0,e),this.scene.add(n)}buildHouseLoggia(t,e){const n=new Dt;this.addBox(n,11578532,20,6,15,0,3,0),this.addBox(n,10131088,20.5,.4,15.5,0,6.2,0),this.addBox(n,10131088,20,.4,3,0,3.2,-10);for(const i of[-7,-3,3,7])this.addCyl(n,8947840,.2,.2,3.2,8,i,1.6,-11);this.addBox(n,3359829,14,2,.2,0,4,-7.5),this.addBox(n,13157564,14.4,2.2,.15,0,4,-7.4);for(const i of[-5,0,5])this.addBox(n,8947840,.15,2,.2,i,4,-7.5);{const i=new N(new et(2.4,2.8,.2),new Z({color:3359829,emissive:new Mt(1120290),emissiveIntensity:.2}));i.position.set(5,1.4,-7.5),n.add(i)}this.addBox(n,8947840,2.8,3,.15,5,1.4,-7.4),this.addBox(n,9074784,18,.5,2.5,0,.25,-9),this.addBox(n,4880970,16,.7,2,0,.65,-9),this.addBox(n,8947840,20,.3,.3,0,3.1,-10.2),this.addBox(n,8947840,20,.3,.3,0,3.1,-11.8),n.position.set(t,0,e),this.scene.add(n)}buildHouseRokka(t,e){const n=new Dt;this.addBox(n,12892314,22,4.5,16,0,2.25,0),this.addBox(n,10128506,22.5,.3,9,0,4.75,-3.5,Math.PI*8/180,0,0),this.addBox(n,10128506,22.5,.3,9,0,4.75,3.5,-Math.PI*8/180,0,0),this.addBox(n,6969928,22.5,.6,.8,0,5.1,0),this.addBox(n,10127472,22.5,1,16.5,0,.5,0);{const i=new N(new et(6,3.2,.2),new Z({color:3359829,emissive:new Mt(1120290),emissiveIntensity:.3}));i.position.set(0,1.6,-8.1),n.add(i)}this.addBox(n,8022618,6.4,3.5,.15,0,1.75,-8);for(const i of[-2,0,2])this.addBox(n,8947824,.1,3.2,.2,i,1.6,-8.1);this.addBox(n,8947824,6,.1,.2,0,2.2,-8.1),this.addBox(n,3359829,2.5,1.5,.2,-7,3,-8.1),this.addBox(n,3359829,2.5,1.5,.2,7,3,-8.1),this.addBox(n,11575432,.8,4.5,.8,-3.5,2.25,-8.2),this.addBox(n,11575432,.8,4.5,.8,3.5,2.25,-8.2),this.addCyl(n,6969928,.1,.1,4.5,5,-11,2.25,-8),this.addCyl(n,6969928,.1,.1,4.5,5,11,2.25,-8),this.addBox(n,11575432,20,.8,.3,0,.4,-10),n.position.set(t,0,e),this.scene.add(n)}buildHouseTimberStone(t,e){const n=new Dt;this.addBox(n,8947840,22,4,14,0,2,0),this.addBox(n,6710880,22.2,.4,14.2,0,.2,0),this.addBox(n,12088362,22,4.5,13,0,6.25,0);for(let i=0;i<8;i++)this.addBox(n,10116634,22.1,.12,13.1,0,4.3+i*.57,0);this.addBox(n,4870229,5,8.5,14.2,8.5,4.25,0);for(let i=0;i<12;i++){const r=i%2===0?3817541:5593696;this.addBox(n,r,5.1,.3,14.3,8.5,.5+i*.65,0)}this.addBox(n,2763306,22.5,.5,14.5,0,8.75,0);for(const i of[-6,-2,2]){this.addBox(n,1710618,2.8,3.2,.2,i,6,-6.6);const r=new N(new et(2.4,2.9,.15),new Z({color:9087675,emissive:new Mt(2770005),emissiveIntensity:.2}));r.position.set(i,6,-6.6),n.add(r)}this.addBox(n,1710618,13,.15,.5,-3,8,-6.8),this.addBox(n,10140364,12.5,.8,.1,-3,7.6,-6.75);for(const i of[-7,-4.5])this.addBox(n,1710618,2.2,1.8,.2,i,2,-7.1),this.addBox(n,3359829,1.8,1.5,.15,i,2,-7);this.addBox(n,6962202,1.8,3.2,.2,2.5,1.6,-7.1),this.addBox(n,12092938,.12,.12,.15,3.1,1.6,-7.1),this.addBox(n,1710618,4,.15,2.5,2.5,3.5,-7.3),this.addCyl(n,1710618,.06,.06,3.5,5,1,1.75,-8.2),this.addCyl(n,1710618,.06,.06,3.5,5,4,1.75,-8.2),this.addBox(n,1710618,8,.18,6,-9,4.1,-5),this.addCyl(n,1118481,.12,.12,4.1,6,-6.5,2.05,-7.8),this.addCyl(n,1118481,.12,.12,4.1,6,-11.5,2.05,-7.8),this.addBox(n,10066329,2,.8,3.5,-9.5,.4,-4.5),this.addBox(n,11184810,1.9,.3,3.4,-9.5,.9,-4.5);for(let i=5;i<=13;i+=.7)this.addBox(n,1710618,.12,1.6,.12,i,.8,-8.5);this.addBox(n,6710880,20,.8,.3,0,.4,-9.5),this.addBox(n,4870229,20,.35,.4,0,.18,-9.5);for(let i=0;i<5;i++)this.addBox(n,14540236,1.4,.08,.7,5,.05,-10.2+i*.9);this.addBox(n,4880954,8,.1,3,5,0,-9.8);for(const[i,r]of[[3.5,-8.5],[6.5,-8]]){this.addCyl(n,5912608,.12,.15,2.5,6,i,1.25,r);const o=new N(new Un(1,2.2,7),new Z({color:3828266}));o.position.set(i,2.8,r),n.add(o)}this.addBox(n,1710618,3.5,1.8,.2,7.5,6.5,-6.6),this.addBox(n,3359829,3,1.5,.15,7.5,6.5,-6.55),n.position.set(t,0,e),this.scene.add(n)}buildHouseSculpturalPlaster(t,e){const n=new Dt,i=8686698,r=6976085,o=11842732,a=1118481;this.addBox(n,i,14,5.5,12,-3,2.75,0),this.addBox(n,i,7,3.5,12,9,1.75,0),this.addBox(n,r,.3,5.6,12,2.85,2.75,0);const l=new N(new et(11,.35,12.4),new Z({color:i}));l.rotation.z=22*Math.PI/180,l.position.set(.5,8,0),n.add(l);const c=new N(new et(7.5,.35,12.4),new Z({color:o}));c.rotation.z=-52*Math.PI/180,c.position.set(-6.2,8.2,0),n.add(c),this.addBox(n,r,.6,.6,12.4,-3.2,10,0),this.addBox(n,1710618,2.3,4,.5,-3,2,-6.25),this.addBox(n,a,2.6,4.3,.2,-3,2.1,-6.05);const h=new N(new et(2,3.6,.12),new Z({color:2767428,emissive:new Mt(661538),emissiveIntensity:.3}));h.position.set(-3,2.1,-6.1),n.add(h),this.addBox(n,1710618,1.6,1.6,.4,8.5,2,-6.2),this.addBox(n,a,1.8,1.8,.18,8.5,2,-6.05),this.addBox(n,a,.4,.4,.4,-6.5,4.2,-6.05),this.addBox(n,a,.4,.4,.4,6.5,3.4,-6.05);for(const p of[-6.5,6.5]){const g=new N(new et(.5,.08,.3),new Z({color:16772812,emissive:new Mt(16764040),emissiveIntensity:.6}));g.position.set(p,p===-6.5?3.95:3.15,-6.07),n.add(g)}const u=8.5,d=-11;for(let p=-4;p<=4;p++){const g=p/4*40*Math.PI/180,x=u*Math.sin(g),m=d+u*(Math.cos(g)-1),f=new N(new et(2,1.2,.35),new Z({color:i}));f.rotation.y=g,f.position.set(x,.6,m),n.add(f);const S=new N(new et(2,.12,.45),new Z({color:12631720}));S.rotation.y=g,S.position.set(x,1.26,m),n.add(S)}this.addBox(n,r,2.5,.2,1,-3,.1,-7.5),n.position.set(t,0,e),this.scene.add(n)}buildHouseHaussmann(t,e){const n=new Dt,i=15261384,r=15788244,o=13154972,a=1118481;this.addBox(n,i,22,9.5,14,0,4.75,0);for(let h=0;h<5;h++)this.addBox(n,o,22.3,.14,14.3,0,.5+h*.88,0);for(let h=0;h<4;h++)this.addBox(n,o,22.3,.12,14.3,0,5.4+h*.85,0);this.addBox(n,r,22.6,.5,14.6,0,4.75,0),this.addBox(n,o,22.8,.2,14.8,0,5.05,0),this.addBox(n,i,22.5,.3,14.5,0,5.25,0),this.addBox(n,i,23.2,.5,15.2,0,9.75,0),this.addBox(n,r,22.8,.8,14.8,0,10.15,0),this.addBox(n,o,23.4,.25,15.4,0,10.55,0),this.addBox(n,r,4,11.5,4,-10,5.75,-6);for(let h=0;h<6;h++)this.addBox(n,o,4.2,.12,4.2,-10,.5+h*1.75,-6);this.addBox(n,i,4.4,.4,4.4,-10,5,-6),this.addBox(n,i,4.6,.4,4.6,-10,11.3,-6),this.addBox(n,r,4.4,.6,4.4,-10,11.75,-6),this.addBox(n,o,4.8,.25,4.8,-10,12.12,-6),this.addBox(n,i,2.5,1,2.5,-10,12.75,-6);for(const h of[-6.5,-1,4.5]){this.addBox(n,o,2,4.2,.5,h,2.1,-7.25),this.addBox(n,r,1.7,4,.2,h,2.1,-7.05);const u=new N(new et(1.35,3.5,.12),new Z({color:9087931,emissive:new Mt(1714739),emissiveIntensity:.15}));u.position.set(h,2.1,-7),n.add(u),this.addBox(n,r,1.7,.12,.15,h,3.2,-7.05)}for(const h of[-6.5,4.5]){this.addBox(n,o,2,3.8,.5,h,7.5,-7.25),this.addBox(n,r,1.7,3.5,.2,h,7.5,-7.05);const u=new N(new et(1.35,3,.12),new Z({color:9087931,emissive:new Mt(1714739),emissiveIntensity:.15}));u.position.set(h,7.5,-7),n.add(u),this.addBox(n,r,1.7,.12,.15,h,8.5,-7.05),this.addBox(n,i,3.4,.28,1.4,h,5.66,-7.9),this.addBox(n,o,3.5,.45,1.5,h,5.38,-7.95);for(let d=0;d<5;d++){const p=h-1.3+d*.65;this.addBox(n,a,.07,1,.07,p,6.2,-8.4)}this.addBox(n,a,3.2,.09,.09,h,6.72,-8.4),this.addBox(n,a,3.2,.09,.09,h,5.82,-8.4),this.addBox(n,a,.07,1,.07,h-1.3,6.2,-8.4,0,0,.35),this.addBox(n,a,.07,1,.07,h+1.3,6.2,-8.4,0,0,-.35)}this.addBox(n,r,5,6.5,.22,9.5,3.75,-7.05);const l=new N(new et(4.5,6,.12),new Z({color:9087931,emissive:new Mt(1714739),emissiveIntensity:.12}));l.position.set(9.5,3.75,-7),n.add(l);for(let h=0;h<3;h++)this.addBox(n,r,5,.1,.15,9.5,1+h*2,-7);for(const h of[7.5,9.5,11.5])this.addBox(n,r,.1,6,.15,h,3.75,-7);this.addBox(n,o,3.8,5.5,.6,1.5,2.75,-7.4),this.addBox(n,r,2.8,4.8,.2,1.5,2.4,-7.1);const c=new N(new et(2.2,4.2,.12),new Z({color:9087931,emissive:new Mt(660768),emissiveIntensity:.2}));c.position.set(1.5,2.4,-7.05),n.add(c),this.addBox(n,13937232,.1,.1,.1,2.4,2.2,-7.06),this.addBox(n,o,22.5,.3,14.5,0,.15,0),n.position.set(t,0,e),this.scene.add(n)}buildHouseAngularBay(t,e){const n=new Dt,i=15789022,r=12876378,o=3809296,a=1118481;this.addBox(n,i,18,4,13,0,2,0),this.addBox(n,i,18,4,12,0,6,0),this.addBox(n,i,8,4,2.5,5,6,-7.25),this.addBox(n,i,3,10,2.5,6.5,5,-7.5),this.addBox(n,r,10,.5,14,-4.5,8.5,0,0,0,.44),this.addBox(n,r,10,.5,14,4.5,8.5,0,0,0,-.44),this.addBox(n,o,1.5,.5,14.5,0,10.5,0),this.addBox(n,o,19,.3,13.5,0,8.05,0),this.addBox(n,o,19,.2,1.2,0,8.05,-7.3);for(const l of[-6.5,0])this.addBox(n,15658734,2.6,2,.12,l,1.8,-6.56),this.addBox(n,3359829,2.2,1.6,.15,l,1.8,-6.5);for(const l of[-6.5,0])this.addBox(n,15658734,2.6,2,.12,l,5.8,-6.56),this.addBox(n,3359829,2.2,1.6,.15,l,5.8,-6.5);for(let l=0;l<4;l++)this.addBox(n,a,.08,1,.08,-8.5+l*.65,5.5,-6.7);this.addBox(n,a,2.4,.08,.08,-7.02,6.05,-6.7),this.addBox(n,a,2.4,.08,.08,-7.02,5,-6.7),n.position.set(t,0,e),this.scene.add(n)}buildHouseBrutalistCompound(t,e){const n=new Dt,i=10524792,r=8947840;this.addBox(n,i,7,7,11,-8.5,3.5,0),this.addBox(n,i,6,5,10,-1,2.5,.5),this.addBox(n,i,6,6,11,5.5,3,-.5),this.addBox(n,i,5,4,9,11,2,0),this.addBox(n,i,24,1.5,9,0,.75,.5),this.addBox(n,r,4,.25,2.5,-8.5,7.25,-6.2),this.addBox(n,r,4,.25,2.5,5.5,6.25,-6.2),this.addBox(n,2241348,4,5.5,.15,-8.5,3.5,-5.6),this.addBox(n,2241348,3.5,4.5,.15,5.5,3,-5.6),this.addBox(n,i,8,5,.4,2,2.5,-6.5,0,.26,0);const o=14,a=9,l=-Math.PI*.35,c=Math.PI*.35;for(let h=0;h<a;h++){const u=h/(a-1),d=l+(c-l)*u,p=Math.sin(d)*o,g=Math.cos(d)*o-o+4;this.addBox(n,i,3.5,1.5,.4,p,.75,g,0,-d,0)}for(const h of[-3,2.5]){this.addCyl(n,5913114,.15,.2,3,5,h,1.5,-4);const u=new N(new vn(1.2,6,5),new Z({color:3828266}));u.position.set(h,4,-4),n.add(u)}n.position.set(t,0,e),this.scene.add(n)}buildHouseTerracottaMonolith(t,e){const n=new Dt,i=12284e3,r=2759194,o=4880954;this.addBox(n,i,20,3,.5,0,1.5,-9.5),this.addBox(n,r,20.2,.1,.55,0,1,-9.5),this.addBox(n,r,20.2,.1,.55,0,2,-9.5),this.addBox(n,i,20,6,10,0,3,-2),this.addBox(n,r,20.2,.1,10.1,0,2,-2),this.addBox(n,r,20.2,.1,10.1,0,4,-2),this.addBox(n,i,20.3,.4,10.3,0,6.2,-2),this.addBox(n,o,18,.3,1.8,0,.15,-7.5);for(let a=-8;a<=8;a+=2.5){const l=new N(new Un(.2,.8,5),new Z({color:5933642}));l.position.set(a,.55,-7.5),n.add(l)}this.addBox(n,1118481,1.2,3.5,.2,0,3.5,-7.05),this.addBox(n,2241348,.8,3,.15,0,3.5,-7),n.position.set(t,0,e),this.scene.add(n)}buildHouseCurvedBalcony(t,e){const n=new Dt,i=15261900,r=15789544,o=11053216,a=1118481;this.addBox(n,i,16,4,12,0,2,0),this.addBox(n,r,16,4,12,0,6,0),this.addBox(n,r,16.5,.3,12.5,0,8.15,0),this.addBox(n,a,16.6,.2,12.6,0,8.3,0);const l=5,c=14,h=-Math.PI*.5,u=Math.PI*.5;for(let d=0;d<c;d++){const p=d/(c-1),g=h+(u-h)*p,x=Math.sin(g)*l,m=-Math.cos(g)*l-3.5;this.addBox(n,o,1.3,2,.5,x,5.5,m,0,-g,0)}for(const d of[-5,0,5])this.addBox(n,4473924,2.5,2,.15,d,1.8,-6.1),this.addBox(n,2241348,2,1.6,.12,d,1.8,-6);this.addCyl(n,a,.1,.1,8,5,-8,4,-6.1),this.addCyl(n,a,.1,.1,8,5,8,4,-6.1),this.addBox(n,a,.3,.3,.3,-2,2.5,-6.15),this.addBox(n,r,17,.25,1.5,0,8,-7.2,.1,0,0),this.addBox(n,a,17.2,.1,1.6,0,8.12,-7.2,.1,0,0),n.position.set(t,0,e),this.scene.add(n)}buildHouseCortenPlaster(t,e){const n=new Dt,i=4868682,r=12081696,o=3684408,a=9060368;this.addBox(n,i,12,8,11,-7,4,0),this.addBox(n,i,12.3,.4,11.3,-7,8.2,0),this.addBox(n,r,8,8.5,11,5,4.25,0),this.addBox(n,r,8.3,.4,11.3,5,8.7,0),this.addBox(n,o,2,9.5,11,-.5,4.75,0);for(let c=0;c<6;c++)this.addBox(n,a,.15,8.5,11.1,1.5+c*1.2,4.25,0);this.addCyl(n,13421704,.15,.15,.5,6,-5,5,-5.6),this.addCyl(n,13421704,.15,.15,.5,6,-9,5,-5.6),this.addBox(n,1118481,2.5,1.8,.3,-6,4.5,-5.7),this.addBox(n,2241348,2,1.4,.15,-6,4.5,-5.6),this.addBox(n,1118481,2.5,1.8,.3,-10,2.5,-5.7),this.addBox(n,2241348,2,1.4,.15,-10,2.5,-5.6),this.addCyl(n,9132587,.2,.3,8,6,-15,4,-3);const l=new N(new Un(2.5,1.5,8),new Z({color:2775578}));l.position.set(-15,8.75,-3),n.add(l),n.position.set(t,0,e),this.scene.add(n)}buildCoffeeShop(t,e){const n=new Dt;this.addBox(n,15788248,14,4,10,0,2,0),this.addBox(n,15261904,14.2,.18,10.2,0,4.09,0),this.addBox(n,1118481,14.6,.38,10.6,0,4.19,0);for(const i of[-3.8,3.8]){this.addBox(n,1118481,4,3.8,.14,i,2.1,-5.08);const r=new N(new et(3.5,3.4,.1),new Z({color:13140032,emissive:new Mt(10115616),emissiveIntensity:.7}));r.position.set(i,2.1,-5.06),n.add(r)}this.addBox(n,1118481,2,3,.14,0,1.5,-5.08),this.addBox(n,8014368,1.6,2.8,.2,0,1.4,-5.1),this.addBox(n,13410400,.1,.1,.12,.5,1.4,-5.1),this.addBox(n,12876352,13.5,.28,4,0,3.22,-7),this.addBox(n,10770984,13.5,.6,.18,0,2.95,-9.05);for(const i of[-4.5,0,4.5])this.addCyl(n,8947832,.07,.07,3,5,i,1.5,-9.1);this.addBox(n,16777215,5,.36,.12,0,3.06,-8.96);for(const[i,r]of[[-5,-11.5],[0,-11.5],[5,-11.5]]){this.addCyl(n,9068608,.75,.75,.1,12,i,1.12,r),this.addCyl(n,6963232,.07,.07,1.12,6,i,.56,r);for(const o of[-1,1])this.addCyl(n,9068608,.32,.32,.09,8,i+o*.85,.82,r),this.addCyl(n,6963232,.05,.05,.82,5,i+o*.85,.41,r)}for(let i=0;i<5;i++)this.addCyl(n,16777215,.22-i*.008,.24-i*.008,.3,8,7.1,.22+i*.28,-3.5);this.addBox(n,3355445,1.1,1.7,.12,-3.5,1.1,-5.1),this.addBox(n,15658734,.72,.08,.05,-3.5,1.6,-5.04),this.addBox(n,15658734,.55,.08,.05,-3.5,1.42,-5.04),this.addBox(n,15658734,.63,.08,.05,-3.5,1.24,-5.04),this.addBox(n,15658734,.48,.08,.05,-3.5,1.06,-5.04);for(const i of[-4,0,4]){const r=new N(new et(.25,.25,.25),new Z({color:16764040,emissive:new Mt(16755268),emissiveIntensity:.8}));r.position.set(i,3.7,-2),n.add(r)}n.position.set(t,0,e),this.scene.add(n)}buildWorkshop(t,e){const n=new Dt,i=4868676,r=2236960,o=15657176,a=3355440,l=1118480;this.addBox(n,i,30,8,20,0,4,0),this.addBox(n,1710616,30.2,.35,20.2,0,.18,0);const c=12*Math.PI/180,h=new Z({color:r}),u=new N(new et(30.5,.35,11),h);u.castShadow=!0,u.rotation.x=c,u.position.set(0,8.6,-4.5),n.add(u);const d=new N(new et(30.5,.35,11),h);d.castShadow=!0,d.rotation.x=-c,d.position.set(0,8.6,4.5),n.add(d),this.addBox(n,1118480,30.5,.55,.8,0,9.3,0),this.addBox(n,o,24,3.2,.45,0,7.4,-10.23),this.addBox(n,a,22,2.5,.28,0,7.4,-10.25),this.addBox(n,16775920,24.2,.22,.46,0,9.11,-10.23),this.addBox(n,16775920,24.2,.22,.46,0,5.89,-10.23),this.addBox(n,16775920,.22,3.2,.46,-12.11,7.4,-10.23),this.addBox(n,16775920,.22,3.2,.46,12.11,7.4,-10.23),this.addBox(n,12674667,24,.3,.44,0,5.75,-10.22),this.addBox(n,16763972,8,.65,.35,0,5.5,-10.2),this.addBox(n,2763296,7.5,.42,.38,0,5.5,-10.21),this.addBox(n,l,12,5,.25,0,2.5,-10.15),this.addBox(n,2236960,.2,5,.25,-6.2,2.5,-10.15),this.addBox(n,2236960,.2,5,.25,6.2,2.5,-10.15);for(let f=1;f<=4;f++)this.addBox(n,1710616,11.8,.08,.28,0,f,-10.14);this.addBox(n,2236960,12.6,.4,.28,0,5.2,-10.14);const p=3359829;for(let f=-6;f<=6;f+=4)this.addBox(n,p,.16,1.2,2.8,15.09,7.2,f),this.addBox(n,p,.16,1.2,2.8,-15.09,7.2,f);this.addBox(n,2236960,.2,.18,20,15.1,7.9,0),this.addBox(n,2236960,.2,.18,20,15.1,6.6,0),this.addBox(n,2236960,.2,.18,20,-15.1,7.9,0),this.addBox(n,2236960,.2,.18,20,-15.1,6.6,0),this.addCyl(n,2236960,.12,.12,8,5,-15,4,-10),this.addCyl(n,2236960,.12,.12,8,5,15,4,-10),this.addCyl(n,2236960,.12,.12,8,5,-15,4,10),this.addCyl(n,2236960,.12,.12,8,5,15,4,10),this.addCyl(n,12884602,.85,.9,1.5,10,9.5,.75,-11.5),this.addCyl(n,6974050,.85,.9,1.5,10,9.5,2.35,-11.5),this.addCyl(n,8947840,.92,.92,.12,10,9.5,1.56,-11.5),this.addCyl(n,8947840,.92,.92,.12,10,9.5,3.16,-11.5),this.addCyl(n,12884602,.85,.9,1.5,10,11.2,.75,-12.2),this.addCyl(n,8947840,.92,.92,.12,10,11.2,1.56,-12.2),this.addBox(n,8018488,4.5,.18,2.5,10.2,.09,-11.8),this.addBox(n,9074776,6,1,2.2,0,.5,-9.2),this.addBox(n,13154448,6.3,.18,2.4,0,1.09,-9.2),this.addBox(n,15658700,.8,.05,1,.8,1.19,-9.3),this.addBox(n,4473924,.12,.25,.12,.8,1.22,-9),this.addBox(n,5921362,2.8,1.8,2.8,-8.5,.9,-11.5);const g=new N(new Qt(.75,.75,2.2,10),new Z({color:8947840}));g.rotation.z=35*Math.PI/180,g.position.set(-8.5,1.6,-11.5),g.castShadow=!0,n.add(g),this.addCyl(n,3355440,.4,.4,.3,8,-8.5,.2,-10.8),this.addBox(n,4868676,3.5,2.2,2.5,-11.5,1.1,-13),this.addBox(n,8947840,3,.5,2,-11.5,2.35,-13),this.addBox(n,6710880,2.2,1.2,1.4,-11.5,3.1,-13);const x=new Z({color:10131600}),m=new N(new pe(20,8),x);m.rotation.x=-Math.PI/2,m.position.set(0,.008,-14),m.receiveShadow=!0,n.add(m),this.addBox(n,o,.3,2.5,6,15.16,4,0),this.addBox(n,a,.32,2,5.5,15.17,4,0),n.position.set(t,0,e),this.scene.add(n),this.collisionWorld.addBox(t,e,15.5,10.5)}createZebraCrossings(){const t=new Z({color:15658734}),e=new Z({color:1118481});for(let n=-200;n<=200;n+=40)for(let i=-200;i<=200;i+=40){if(Math.abs(n)>200||Math.abs(i)>200)continue;const r=[-3.2,-1.6,0,1.6,3.2],o=[-2.4,-.8,.8,2.4],a=2;for(const l of r){const c=new N(new et(.8,.03,a),t);c.position.set(n+l,.05,i-5),this.scene.add(c)}for(const l of o){const c=new N(new et(.8,.03,a),e);c.position.set(n+l,.04,i-5),this.scene.add(c)}for(const l of r){const c=new N(new et(.8,.03,a),t);c.position.set(n+l,.05,i+5),this.scene.add(c)}for(const l of o){const c=new N(new et(.8,.03,a),e);c.position.set(n+l,.04,i+5),this.scene.add(c)}for(const l of r){const c=new N(new et(a,.03,.8),t);c.position.set(n-5,.05,i+l),this.scene.add(c)}for(const l of o){const c=new N(new et(a,.03,.8),e);c.position.set(n-5,.04,i+l),this.scene.add(c)}for(const l of r){const c=new N(new et(a,.03,.8),t);c.position.set(n+5,.05,i+l),this.scene.add(c)}for(const l of o){const c=new N(new et(a,.03,.8),e);c.position.set(n+5,.04,i+l),this.scene.add(c)}}}createRoadCorners(){const t=new Z({color:13156528}),e=new Z({color:11051160}),n=[{dx:-6,dz:-6,theta:3*Math.PI/2},{dx:6,dz:-6,theta:Math.PI},{dx:-6,dz:6,theta:0},{dx:6,dz:6,theta:Math.PI/2}];for(let i=-200;i<=200;i+=40)for(let r=-200;r<=200;r+=40)for(const{dx:o,dz:a,theta:l}of n){const c=i+o,h=r+a,u=new N(new jo(2,24,l,Math.PI/2),t);u.rotation.x=-Math.PI/2,u.position.set(c,.021,h),u.receiveShadow=!0,this.scene.add(u);const d=new N(new ir(1.8,2,24,1,l,Math.PI/2),e);d.rotation.x=-Math.PI/2,d.position.set(c,.08,h),d.receiveShadow=!0,this.scene.add(d)}}onUpdate(t){this.updateCallbacks.push(t)}createSkyDome(){const t=new vn(800,32,16);t.scale(-1,1,1);const e=new Ae({uniforms:{topColor:{value:new Mt(4491468)},bottomColor:{value:new Mt(12970229)},offset:{value:100},exponent:{value:.8}},vertexShader:`
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
      `,side:Ce,depthWrite:!1}),n=new N(t,e);this.scene.add(n)}createClouds(){const t=new Z({color:16777215,transparent:!0,opacity:.85});for(let e=0;e<10;e++){const n=new Dt,i=3+Math.floor(Math.random()*4);for(let r=0;r<i;r++){const o=8+Math.random()*12,a=new N(new vn(o,7,5),t);a.position.set(r*15-i*7+(Math.random()-.5)*10,(Math.random()-.5)*8,(Math.random()-.5)*15),n.add(a)}n.position.set((Math.random()-.5)*600,80+Math.random()*60,(Math.random()-.5)*600),this.scene.add(n),this.clouds.push({mesh:n,speed:.3+Math.random()*.7})}}createPuddles(){const t=new Z({color:8952234,transparent:!0,opacity:.35});for(let e=0;e<20;e++){const n=2+Math.random()*4,i=1+Math.random()*2,r=new N(new pe(n,i),t);r.rotation.x=-Math.PI/2,r.position.set((Math.random()-.5)*300,.015,(Math.random()-.5)*300),this.scene.add(r)}}addRooftopDetails(t,e,n,i,r,o){const a=this.seed(r,o,200);if(a>.3){const l=new Dt;this.addBox(l,8947840,1.5,.6,1,0,0,0),this.addBox(l,6710880,1.5,.1,.8,0,.35,.05),l.position.set(e/2-2,i+.3,n/2-2),t.add(l)}if(a>.7&&i>8){const l=new N(new Qt(1,1,1.8,10),new Z({color:9139029}));l.position.set(-e/2+2,i+.9,0),t.add(l);for(const[c,h]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]]){const u=new N(new Qt(.06,.06,1.5,4),new Z({color:5592400}));u.position.set(-e/2+2+c,i+.1,h),t.add(u)}}if(a>.5&&a<.8){const l=new N(new vn(.4,8,4,0,Math.PI*2,0,Math.PI/2),new Z({color:13421772}));l.position.set(e/2-1,i+.2,-n/2+1),l.rotation.x=-Math.PI/4,t.add(l)}if(a<.4){const l=new N(new Qt(.04,.04,3,4),new Z({color:4473924}));l.position.set(0,i+1.5,0),t.add(l),this.addBox(t,4473924,2,.05,.05,0,i+2.5,0)}a>.4&&a<.6&&this.addBox(t,7829360,2,.4,.4,e/4,i+.2,-n/4)}addHydrant(t,e){const n=new Dt,i=new Z({color:13378082}),r=new Z({color:11145489}),o=new N(new Qt(.25,.28,.6,8),i);o.position.set(0,.3,0),n.add(o);const a=new N(new Qt(.18,.18,.12,8),r);a.position.set(0,.66,0),n.add(a);for(const l of[-1,1]){const c=new N(new Qt(.06,.06,.2,6),i);c.rotation.z=Math.PI/2,c.position.set(l*.3,.3,0),n.add(c)}n.position.set(t,0,e),this.scene.add(n)}addBin(t,e){const n=new Dt,i=new Z({color:4473924}),r=new Z({color:5592405}),o=new N(new Qt(.2,.22,.7,8),i);o.position.set(0,.35,0),n.add(o);const a=new N(new Qt(.22,.22,.08,8),r);a.position.set(0,.74,0),n.add(a),n.position.set(t,0,e),this.scene.add(n)}addBollard(t,e){const n=new Dt,i=new Z({color:10066329}),r=new Z({color:7829367}),o=new N(new Qt(.1,.1,.6,8),i);o.position.set(0,.3,0),n.add(o);const a=new N(new Qt(.14,.14,.08,8),r);a.position.set(0,.04,0),n.add(a),n.position.set(t,0,e),this.scene.add(n)}addBench(t,e,n=0){const i=new Dt,r=new Z({color:9134144}),o=new Z({color:5592405}),a=new N(new et(1.2,.1,.4),r);a.position.set(0,.45,0),i.add(a);for(const c of[-.5,.5]){const h=new N(new et(.05,.4,.4),o);h.position.set(c,.2,0),i.add(h)}const l=new N(new et(1.2,.3,.08),r);l.position.set(0,.75,-.16),i.add(l),i.rotation.y=n,i.position.set(t,0,e),this.scene.add(i)}addBusStop(t,e,n=0){const i=new Dt,r=new Z({color:13421772}),o=new Z({color:4482730,transparent:!0,opacity:.7}),a=new N(new Qt(.05,.05,3.5,6),r);a.position.set(0,1.75,0),i.add(a);const l=new N(new et(2,.05,.8),o);l.position.set(0,3.3,.4),i.add(l);const c=new N(new et(.05,2.5,.8),o);c.position.set(0,2,0),i.add(c),i.rotation.y=n,i.position.set(t,0,e),this.scene.add(i)}addStreetLight(t,e,n=0,i=!1){const r=new Dt,o=new Z({color:1118481}),a=new Z({color:16771232,transparent:!0,opacity:.06}),l=new N(new Qt(.08,.1,6,6),o);l.position.set(0,3,0),r.add(l);const c=new N(new et(.08,.08,1.5),o);c.position.set(0,6,-.75),c.rotation.x=-.2,r.add(c);const h=new N(new et(.4,.15,.3),o);h.position.set(0,5.9,-1.4),r.add(h);const u=new N(new Un(1.5,3,8,1,!0),a);if(u.rotation.x=Math.PI,u.position.set(0,4.4,-1.4),r.add(u),r.rotation.y=n,r.position.set(t,0,e),this.scene.add(r),i){const d=new C0(16771232,.8,15);d.position.set(t+Math.sin(n+Math.PI)*1.4,5.9,e+Math.cos(n+Math.PI)*1.4),this.scene.add(d)}}addTrafficLight(t,e,n=0){const i=new Dt,r=new Z({color:1118481}),o=new N(new Qt(.07,.09,4.5,6),r);o.position.set(0,2.25,0),i.add(o);const a=new N(new et(.5,1.4,.4),r);a.position.set(0,4.7,0),i.add(a);const l=[16720384,16750848,52292];for(let c=0;c<3;c++){const h=new N(new Qt(.15,.15,.08,8),new Z({color:l[c]}));h.rotation.x=Math.PI/2,h.position.set(0,5.25-c*.45,-.21),i.add(h)}i.rotation.y=n,i.position.set(t,0,e),this.scene.add(i)}createStreetLights(){let n=0;const i=20;for(let r=-160;r<=160;r+=40)for(let o=-160;o<=160;o+=20){const c=Math.sqrt(r*r+o*o)<80&&n<i,h=(o%40+40)%40;Math.min(h,40-h)>6&&(this.addStreetLight(o,r-5.2,0,c),this.addStreetLight(o,r+5.2,Math.PI,c),c&&(n+=2));const u=(o%40+40)%40;if(Math.min(u,40-u)>6&&(this.addStreetLight(r+5.2,o,Math.PI/2,c),this.addStreetLight(r-5.2,o,-Math.PI/2,c),c&&(n+=2)),n>=i)return}}createTrafficLights(){for(let i=-160;i<=160;i+=40)for(let r=-160;r<=160;r+=40)this.addTrafficLight(i-5.2,r-5.2,Math.PI/4),this.addTrafficLight(i+5.2,r-5.2,-Math.PI/4),this.addTrafficLight(i-5.2,r+5.2,3*Math.PI/4),this.addTrafficLight(i+5.2,r+5.2,-3*Math.PI/4)}createStreetFurniture(){for(let n=-160;n<=160;n+=40)for(let i=-160;i<=160;i+=20){const r=this.seed(n,i,300),o=this.seed(n,i,301);if(r>.4){const c=r>.7?1:-1,h=(this.seed(i,n,302)-.5)*4,u=(i%40+40)%40;Math.min(u,40-u)>8&&(o<.3?this.addHydrant(i+h,n+c*5.2):o<.5?this.addBin(i+h,n+c*5.2):o<.65?this.addBollard(i+h,n+c*5.2):o<.75&&this.addBench(i+h,n+c*5.2))}const a=this.seed(i,n,303),l=this.seed(i,n,304);if(a>.4){const c=a>.7?1:-1,h=(this.seed(n,i,305)-.5)*4,u=(i%40+40)%40;Math.min(u,40-u)>8&&(l<.3?this.addHydrant(n+c*5.2,i+h):l<.5?this.addBin(n+c*5.2,i+h):l<.65?this.addBollard(n+c*5.2,i+h):l<.75&&this.addBench(n+c*5.2,i+h,Math.PI/2))}}for(let n=-160;n<=160;n+=40)for(let i=-160;i<=160;i+=160){const r=(i%40+40)%40;Math.min(r,40-r)>8&&this.addBusStop(i,n+5.5,0);const o=(i%40+40)%40;Math.min(o,40-o)>8&&this.addBusStop(n+5.5,i,Math.PI/2)}this.createStreetLights(),this.createTrafficLights()}addGlassBox(t,e,n,i,r,o,a,l){const c=Math.random()>.6?new Mt(2241348):new Mt(1122867),h=new N(new et(n,i,r),new Z({color:e,emissive:c,emissiveIntensity:Math.random()*.4}));h.position.set(o,a,l),h.castShadow=!0,h.receiveShadow=!0,t.add(h)}start(){const t=e=>{const n=Math.min((e-this.lastTime)/1e3,.05);this.lastTime=e;for(const i of this.updateCallbacks)i(n);for(const i of this.clouds)i.mesh.position.x-=i.speed*n,i.mesh.position.x<-350&&(i.mesh.position.x=350);this.composer.render(),requestAnimationFrame(t)};requestAnimationFrame(t)}}const pl={Jose:{x:-80,z:-40},Jarrad:{x:40,z:-80},Matt:{x:80,z:40},Phil:{x:-40,z:80},Tsuyoshi:{x:120,z:-40},Fabio:{x:-120,z:40}};class X0{constructor(t){U(this,"scene");U(this,"crewGroups",new Map);this.scene=t}spawnCrewAtCityPositions(){const t={Jose:()=>this.buildJose(),Jarrad:()=>this.buildJarrad(),Matt:()=>this.buildMatt(),Phil:()=>this.buildPhil(),Tsuyoshi:()=>this.buildTsuyoshi(),Fabio:()=>this.buildFabio()};for(const[e,n]of Object.entries(pl)){const i=new Dt,r=t[e]();r.scale.set(2,2,2),i.add(r);const o=this._buildPickupIndicator();o.position.set(0,.05,0),i.add(o);const a=document.createElement("canvas");a.width=256,a.height=64;const l=a.getContext("2d");l.fillStyle="rgba(0,0,0,0.7)",l.roundRect(4,4,248,56,10),l.fill(),l.fillStyle="#FFE566",l.font="bold 36px Arial, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText(e,128,32);const c=new al(a),h=new pc({map:c,transparent:!0,depthTest:!1}),u=new b0(h);u.scale.set(4,1,1),u.position.set(0,8,0),i.add(u),i.position.set(n.x,0,n.z),i.rotation.y=0,this.scene.add(i),this.crewGroups.set(e,i)}}getCrewPosition(t){return pl[t]??{x:0,z:0}}hideCrew(t){const e=this.crewGroups.get(t);e&&(e.visible=!1)}showAllCrew(){for(const t of this.crewGroups.values())t.visible=!0}_buildPickupIndicator(){const t=new Qt(2.2,2.2,.08,20),e=new Z({color:16766720,transparent:!0,opacity:.85});return new N(t,e)}createShirtTexture(t,e){const n=document.createElement("canvas");n.width=512,n.height=512;const i=n.getContext("2d");i.fillStyle=`#${e.toString(16).padStart(6,"0")}`,i.fillRect(0,0,512,512),i.strokeStyle="#FFFFFF",i.lineWidth=8,i.beginPath(),i.moveTo(256,380),i.lineTo(256,220),i.stroke();const r=[[256,320,160,240],[256,320,352,240],[256,270,180,200],[256,270,332,200],[256,240,200,170],[256,240,312,170],[256,215,230,155],[256,215,282,155]];for(const[a,l,c,h]of r)i.beginPath(),i.moveTo(a,l),i.lineTo(c,h),i.stroke();i.fillStyle="#FFFFFF";const o=[[160,240],[352,240],[180,200],[332,200],[200,170],[312,170],[230,155],[282,155],[256,145]];for(const[a,l]of o)i.beginPath(),i.arc(a,l,10,0,Math.PI*2),i.fill();return i.fillStyle="#FFFFFF",i.font="bold 44px Arial, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText("TROWELED",256,430),i.fillText("EARTH",256,480),i.font="28px Arial, sans-serif",i.fillStyle="rgba(255,255,255,0.6)",i.fillText(t.toUpperCase(),256,395),new al(n)}buildJose(){const t=new Dt,e=12884592,n=657930,i=2763306,r=1709072;this.addBox(t,i,.38,.9,.32,-.16,.45,0),this.addBox(t,i,.38,.9,.32,.16,.45,0),this.addBox(t,n,.72,1,.42,0,1.4,0),this.addBox(t,14540253,.22,.22,.05,-.05,1.42,.22),this.addBox(t,n,.21,.82,.21,-.5,1.22,0),this.addBox(t,n,.21,.82,.21,.5,1.22,0),this.addBox(t,e,.18,.18,.18,-.5,.78,0),this.addBox(t,e,.18,.18,.18,.5,.78,0),this.addBox(t,e,.22,.22,.22,0,2.01,0),this.addSphere(t,e,.38,0,2.5,0),this.addSphere(t,r,.46,0,2.58,0),this.addBox(t,r,.38,.6,.38,0,2.22,-.08),this.addBox(t,r,.22,.55,.22,-.3,2.2,-.04),this.addBox(t,r,.22,.5,.22,.28,2.18,-.04),this.addBox(t,r,.16,.4,.16,.1,2.1,.1),this.addBox(t,r,.14,.3,.14,-.1,2.05,.08),this.addBox(t,2792080,.22,.11,.04,-.13,2.52,.37),this.addBox(t,2792080,.22,.11,.04,.13,2.52,.37),this.addBox(t,2792080,.07,.06,.03,0,2.52,.38),this.addBox(t,8947848,.06,.06,.55,0,2.1,0),this.addBox(t,5592405,.1,.1,.1,-.22,2.04,.25),this.addBox(t,5592405,.1,.1,.1,.22,2.04,.25),this.addBox(t,2236962,.42,.15,.52,-.16,.06,.08),this.addBox(t,2236962,.42,.15,.52,.16,.06,.08),this.addBox(t,16777215,.12,.08,.02,.2,1.7,.22),this.addSphere(t,16119285,.04,-.15,1.55,.215),this.addSphere(t,16119285,.04,.1,1.3,.215),this.addSphere(t,16119285,.04,.2,1.65,.215);const o=this.createShirtTexture("Jose",n),a=new Ke({map:o,transparent:!1}),l=new N(new pe(.68,.92),a);return l.position.set(0,1.4,.215),t.add(l),t}buildJarrad(){const t=new Dt,e=13148288,n=1118481,i=2763306,r=1970184;this.addBox(t,i,.4,.9,.33,-.17,.45,0),this.addBox(t,i,.4,.9,.33,.17,.45,0),this.addBox(t,n,.76,1,.43,0,1.4,0),this.addBox(t,14540253,.22,.22,.05,-.05,1.48,.23),this.addBox(t,e,.21,.8,.21,-.52,1.22,0),this.addBox(t,e,.21,.8,.21,.52,1.22,0),this.addBox(t,e,.22,.22,.22,0,2.01,0),this.addSphere(t,e,.38,0,2.5,0),this.addBox(t,r,.72,.2,.72,0,2.84,-.02),this.addBox(t,r,.2,.28,.2,-.36,2.68,-.02),this.addBox(t,r,.2,.28,.2,.36,2.68,-.02),this.addBox(t,r,.6,.16,.25,0,2.72,-.24),this.addBox(t,2758664,.36,.22,.07,0,2.36,.35),this.addBox(t,1710618,.24,.13,.04,-.13,2.52,.37),this.addBox(t,1710618,.24,.13,.04,.13,2.52,.37),this.addBox(t,1710618,.07,.07,.03,0,2.52,.38),this.addBox(t,1710618,.04,.08,.26,-.32,2.52,.25),this.addBox(t,1710618,.04,.08,.26,.32,2.52,.25),this.addBox(t,2236962,.42,.15,.52,-.17,.06,.08),this.addBox(t,2236962,.42,.15,.52,.17,.06,.08),this.addBox(t,16777215,.12,.08,.02,.2,1.7,.23),this.addSphere(t,16119285,.04,-.18,1.58,.22),this.addSphere(t,16119285,.04,.12,1.32,.22),this.addSphere(t,16119285,.04,.22,1.68,.22);const o=this.createShirtTexture("Jarrad",n),a=new Ke({map:o,transparent:!1}),l=new N(new pe(.72,.92),a);return l.position.set(0,1.4,.22),t.add(l),t}buildMatt(){const t=new Dt,e=13145450,n=3355440,i=2631720,r=3809296,o=3022350;this.addBox(t,i,.44,.95,.34,-.19,.475,0),this.addBox(t,i,.44,.95,.34,.19,.475,0),this.addBox(t,n,.88,1.05,.46,0,1.475,0),this.addBox(t,15262940,.08,.08,.05,.2,1.6,.24),this.addBox(t,15262940,.12,.06,.05,-.15,1.3,.24),this.addBox(t,e,.23,.82,.22,-.58,1.26,0),this.addBox(t,e,.23,.82,.22,.58,1.26,0),this.addBox(t,e,.24,.22,.23,0,2.08,0),this.addSphere(t,e,.4,0,2.58,0),this.addBox(t,o,.76,.16,.78,0,2.94,-.02),this.addBox(t,o,.72,.22,.3,0,2.88,-.28),this.addBox(t,o,.25,.3,.22,-.38,2.72,-.05),this.addBox(t,o,.25,.3,.22,.38,2.72,-.05),this.addBox(t,r,.44,.32,.1,0,2.42,.36),this.addBox(t,r,.4,.2,.09,0,2.58,.38),this.addBox(t,r,.2,.4,.1,-.34,2.46,.28),this.addBox(t,r,.2,.4,.1,.34,2.46,.28),this.addBox(t,1118481,.06,.06,.88,0,3.05,0),this.addSphere(t,1118481,.18,-.54,2.72,0),this.addBox(t,2236962,.28,.28,.1,-.54,2.72,0),this.addSphere(t,1118481,.18,.54,2.72,0),this.addBox(t,2236962,.28,.28,.1,.54,2.72,0),this.addBox(t,1118481,.06,.38,.06,-.5,2.89,0),this.addBox(t,1118481,.06,.38,.06,.5,2.89,0),this.addBox(t,2236962,.46,.15,.54,-.19,.06,.08),this.addBox(t,2236962,.46,.15,.54,.19,.06,.08),this.addBox(t,16777215,.12,.08,.02,.2,1.7,.235),this.addSphere(t,16119285,.04,-.2,1.6,.235),this.addSphere(t,16119285,.04,.15,1.35,.235),this.addSphere(t,16119285,.04,.25,1.7,.235);const a=this.createShirtTexture("Matt",n),l=new Ke({map:a,transparent:!1}),c=new N(new pe(.84,.97),l);return c.position.set(0,1.475,.235),t.add(c),t}buildPhil(){const t=new Dt,e=13936768,n=15789544,i=3821696,r=12632248;this.addBox(t,i,.5,1,.38,-.22,.5,0),this.addBox(t,i,.5,1,.38,.22,.5,0),this.addBox(t,n,1,1.1,.52,0,1.55,0),this.addBox(t,3355443,.24,.22,.05,-.05,1.58,.27),this.addBox(t,e,.26,.82,.24,-.66,1.36,0),this.addBox(t,e,.26,.82,.24,.66,1.36,0),this.addBox(t,e,.28,.24,.26,0,2.21,0),this.addSphere(t,e,.44,0,2.72,0),this.addBox(t,r,.8,.18,.8,0,3.08,-.02),this.addBox(t,r,.28,.3,.26,-.42,2.88,-.02),this.addBox(t,r,.28,.3,.26,.42,2.88,-.02),this.addBox(t,r,.7,.18,.3,0,2.82,-.28),this.addBox(t,11053216,.26,.13,.04,-.14,2.74,.42),this.addBox(t,11053216,.26,.13,.04,.14,2.74,.42),this.addBox(t,11053216,.08,.07,.03,0,2.74,.43),this.addBox(t,11053216,.04,.08,.3,-.36,2.74,.28),this.addBox(t,11053216,.04,.08,.3,.36,2.74,.28),this.addBox(t,12615776,.28,.08,.05,0,2.56,.43),this.addBox(t,15658728,.52,.16,.58,-.22,.06,.09),this.addBox(t,15658728,.52,.16,.58,.22,.06,.09),this.addBox(t,3355443,.12,.08,.02,.2,1.75,.265),this.addSphere(t,13420736,.04,-.22,1.65,.265),this.addSphere(t,13420736,.04,.18,1.4,.265),this.addSphere(t,13420736,.04,.28,1.75,.265);const o=this.createShirtTexture("Phil",n),a=new Ke({map:o,transparent:!1}),l=new N(new pe(.96,1.02),a);return l.position.set(0,1.55,.265),t.add(l),t}buildTsuyoshi(){const t=new Dt,e=12093528,n=1710616,i=2236960,r=657928;this.addBox(t,i,.4,.92,.34,-.17,.46,0),this.addBox(t,i,.4,.92,.34,.17,.46,0),this.addBox(t,n,.78,1,.44,0,1.42,0),this.addBox(t,14540253,.22,.22,.05,-.05,1.52,.23),this.addBox(t,n,.21,.82,.21,-.52,1.24,0),this.addBox(t,n,.21,.82,.21,.52,1.24,0),this.addBox(t,e,.19,.18,.19,-.52,.8,0),this.addBox(t,e,.19,.18,.19,.52,.8,0),this.addBox(t,e,.22,.22,.22,0,2.03,0),this.addSphere(t,e,.38,0,2.52,0),this.addBox(t,1710616,.06,.35,.72,-.38,2.6,0),this.addBox(t,1710616,.06,.35,.72,.38,2.6,0),this.addBox(t,r,.22,.18,.72,0,2.88,0),this.addBox(t,r,.16,.6,.18,0,3.18,0),this.addBox(t,r,.12,.5,.14,-.08,3.12,-.14),this.addBox(t,r,.12,.5,.14,.08,3.12,-.14),this.addBox(t,r,.14,.42,.14,0,3.08,.18),this.addBox(t,r,.1,.35,.12,-.06,3,.22),this.addBox(t,r,.1,.35,.12,.06,3,.22),this.addBox(t,2236962,.42,.15,.52,-.17,.06,.08),this.addBox(t,2236962,.42,.15,.52,.17,.06,.08),this.addBox(t,16777215,.12,.08,.02,.2,1.7,.225),this.addSphere(t,16119285,.04,-.16,1.56,.225),this.addSphere(t,16119285,.04,.1,1.32,.225),this.addSphere(t,16119285,.04,.2,1.65,.225);const o=this.createShirtTexture("Tsuyoshi",n),a=new Ke({map:o,transparent:!1}),l=new N(new pe(.74,.92),a);return l.position.set(0,1.42,.225),t.add(l),t}buildFabio(){const t=new Dt,e=12488288,n=6320256,i=2631728;this.addBox(t,i,.44,.95,.36,-.19,.475,0),this.addBox(t,i,.44,.95,.36,.19,.475,0),this.addBox(t,n,.84,1,.46,0,1.42,0),this.addBox(t,14210252,.1,.1,.05,.18,1.6,.24),this.addBox(t,14210252,.16,.08,.05,-.2,1.3,.24),this.addBox(t,14210252,.08,.14,.05,.05,1.48,.24),this.addBox(t,e,.25,.82,.24,-.57,1.24,0),this.addBox(t,e,.25,.82,.24,.57,1.24,0),this.addBox(t,4874400,.27,.24,.26,.57,1.52,0),this.addBox(t,12609600,.27,.14,.26,.57,1.36,0),this.addBox(t,e,.26,.24,.24,0,2.07,0),this.addSphere(t,e,.41,0,2.58,0),this.addBox(t,1708040,.72,.06,.76,0,2.96,0),this.addBox(t,2759176,.38,.2,.08,0,2.42,.37),this.addBox(t,2759176,.34,.12,.07,0,2.56,.38),this.addBox(t,15251608,.26,.07,.05,0,2.48,.41),this.addBox(t,16777215,.18,.05,.04,0,2.49,.42),this.addBox(t,1972240,.46,.18,.56,-.19,.06,.1),this.addBox(t,1972240,.46,.18,.56,.19,.06,.1),this.addBox(t,16777215,.12,.08,.02,.2,1.7,.235),this.addSphere(t,16119285,.04,-.18,1.58,.235),this.addSphere(t,16119285,.04,.12,1.33,.235),this.addSphere(t,16119285,.04,.22,1.68,.235);const r=this.createShirtTexture("Fabio",n),o=new Ke({map:r,transparent:!1}),a=new N(new pe(.8,.92),o);return a.position.set(0,1.42,.235),t.add(a),t}addBox(t,e,n,i,r,o,a,l){const c=new N(new et(n,i,r),new Z({color:e}));c.position.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,t.add(c)}addSphere(t,e,n,i,r,o){const a=new N(new vn(n,10,8),new Z({color:e}));a.position.set(i,r,o),a.castShadow=!0,t.add(a)}dispose(){for(const t of this.crewGroups.values())this.scene.remove(t);this.crewGroups.clear()}}class Y0{constructor(t){U(this,"mesh");U(this,"velocity",new D);U(this,"heading",0);U(this,"bodyGroup");U(this,"suspensionY",0);U(this,"suspensionVel",0);this.mesh=new Dt,this.bodyGroup=new Dt,this.mesh.add(this.bodyGroup);const e=new Z({color:1118481}),n=new N(new et(2.4,1.6,3.2),e);n.position.set(0,.8,.8),n.castShadow=!0,n.receiveShadow=!0,this.bodyGroup.add(n);const i=new Z({color:1579032}),r=new N(new et(2.4,1.4,1.6),i);r.position.set(0,.7,-1.6),r.castShadow=!0,r.receiveShadow=!0,this.bodyGroup.add(r);const o=new Z({color:2241348}),a=new N(new et(2,1,.1),o);a.rotation.x=-.18,a.position.set(0,1.15,-2.36),a.castShadow=!0,a.receiveShadow=!0,this.bodyGroup.add(a);const l=new Z({color:1381653}),c=new N(new et(2.3,.15,4.6),l);c.position.set(0,1.675,0),c.castShadow=!0,c.receiveShadow=!0,this.bodyGroup.add(c);const h=new Z({color:12674667}),u=new N(new et(.05,.35,3),h);u.position.set(-1.23,.85,.5),u.castShadow=!0,u.receiveShadow=!0,this.bodyGroup.add(u);const d=new N(new et(.05,.35,3),h);d.position.set(1.23,.85,.5),d.castShadow=!0,d.receiveShadow=!0,this.bodyGroup.add(d);const p=new Z({color:3359829}),g=new N(new et(.05,.4,.5),p);g.position.set(-1.22,1.1,-1.7),g.castShadow=!0,g.receiveShadow=!0,this.bodyGroup.add(g);const x=new N(new et(.05,.4,.5),p);x.position.set(1.22,1.1,-1.7),x.castShadow=!0,x.receiveShadow=!0,this.bodyGroup.add(x);const m=new Z({color:3355443});for(const Ft of[-.3,.3]){const R=new N(new et(.05,1.4,.1),m);R.position.set(Ft,.8,2.46),R.castShadow=!0,R.receiveShadow=!0,this.bodyGroup.add(R)}const f=new Z({color:526344}),S=new N(new et(.04,1.6,.05),f);S.position.set(-1.22,.8,-.8),this.bodyGroup.add(S);const w=new N(new et(.04,1.6,.05),f);w.position.set(1.22,.8,-.8),this.bodyGroup.add(w);const y=new N(new et(2.4,.04,.05),f);y.position.set(0,1.58,-.8),this.bodyGroup.add(y);const B=new Z({color:1118481}),C=new Z({color:3359829});for(const Ft of[-1,1]){const R=Ft*1.3,ge=new N(new et(.18,.12,.22),B);ge.position.set(R,1.1,-1.7),this.bodyGroup.add(ge);const Bt=new N(new et(.08,.1,.18),C);Bt.position.set(R+Ft*.05,1.1,-1.7),this.bodyGroup.add(Bt)}const A=new Z({color:3355443});for(const Ft of[-.15,-.85]){const R=new N(new et(2.1,.07,.07),A);R.position.set(0,1.78,Ft),this.bodyGroup.add(R)}for(const Ft of[-.95,.95]){const R=new N(new et(.05,.05,.7),A);R.position.set(Ft,1.78,-.5),this.bodyGroup.add(R)}const P=new Z({color:8947848});for(const Ft of[-.6,.6]){const R=new N(new et(.06,.06,.14),P);R.position.set(Ft,.85,2.52),this.bodyGroup.add(R)}const b=new N(new et(2.4,.04,.06),f);b.position.set(0,1.2,2.47),this.bodyGroup.add(b);const v=new Z({color:16733440}),T=new Z({color:1118481}),k=new N(new et(.05,.22,.82),v);k.position.set(-1.255,.86,.36),this.bodyGroup.add(k);const z=new N(new et(.06,.05,.16),T);z.position.set(-1.262,.96,.12),this.bodyGroup.add(z);const X=new N(new et(.06,.15,.05),T);X.position.set(-1.262,.86,.12),this.bodyGroup.add(X);const $=new N(new et(.06,.18,.05),T);$.position.set(-1.262,.86,.38),this.bodyGroup.add($);const Y=new N(new et(.06,.04,.13),T);Y.position.set(-1.262,.95,.445),this.bodyGroup.add(Y);const Q=new N(new et(.06,.04,.1),T);Q.position.set(-1.262,.86,.43),this.bodyGroup.add(Q);const V=new N(new et(.06,.04,.13),T);V.position.set(-1.262,.77,.445),this.bodyGroup.add(V);const ot=new N(new et(.06,.18,.05),T);ot.position.set(-1.262,.86,.61),this.bodyGroup.add(ot);const ft=new N(new et(.06,.18,.05),T);ft.position.set(-1.262,.86,.73),this.bodyGroup.add(ft);const St=new N(new et(.06,.08,.13),T);St.position.set(-1.262,.92,.67),this.bodyGroup.add(St);const kt=new N(new et(.05,.22,.82),v);kt.position.set(1.255,.86,.36),this.bodyGroup.add(kt);const te=new Qt(.38,.38,.28,10),q=new Z({color:1118481}),it=new Z({color:8947848}),xt=[[-1.25,.38,-1.2,-1],[1.25,.38,-1.2,1],[-1.25,.38,1.3,-1],[1.25,.38,1.3,1]];for(const[Ft,R,ge,Bt]of xt){const Gt=new N(te,q);Gt.rotation.z=Math.PI/2,Gt.position.set(Ft,R,ge),Gt.castShadow=!0,Gt.receiveShadow=!0,this.mesh.add(Gt);const At=new Qt(.2,.2,.06,10),Jt=new N(At,it);Jt.rotation.z=Math.PI/2,Jt.position.set(Ft+Bt*.15,R,ge),Jt.castShadow=!0,Jt.receiveShadow=!0,this.mesh.add(Jt);const Tt=new Z({color:3355443}),E=new N(new Qt(.36,.38,.06,10),Tt);E.rotation.z=Math.PI/2,E.position.set(Ft+Bt*.2,R,ge),this.mesh.add(E);const _=new Z({color:1118481}),O=new N(new et(.14,.1,.82),_);O.position.set(Ft+Bt*.07,R+.3,ge),this.bodyGroup.add(O)}const at=new Z({color:16777181,emissive:16777181,emissiveIntensity:.8});for(const Ft of[-.8,.8]){const R=new N(new et(.35,.2,.08),at);R.position.set(Ft,.75,-2.41),R.castShadow=!0,R.receiveShadow=!0,this.bodyGroup.add(R)}const Ct=new Ke({color:16777164,transparent:!0,opacity:.08,side:Ce}),Lt=new Un(1.5,8,8,1,!0);for(const Ft of[-.6,.6]){const R=new N(Lt,Ct);R.rotation.x=Math.PI/2,R.position.set(Ft,.7,-3),this.bodyGroup.add(R)}const Wt=new Z({color:16720384,emissive:16720384,emissiveIntensity:.8});for(const Ft of[-.8,.8]){const R=new N(new et(.3,.18,.06),Wt);R.position.set(Ft,.75,2.47),R.castShadow=!0,R.receiveShadow=!0,this.bodyGroup.add(R)}const ae=new Z({color:3355443}),Xt=new N(new et(2,.08,.8),ae);Xt.position.set(0,1.77,-.5),Xt.castShadow=!0,Xt.receiveShadow=!0,this.bodyGroup.add(Xt),this.mesh.position.set(0,0,0),t.add(this.mesh)}triggerBump(t){this.suspensionVel=-t*6}updateSuspension(t){const e=-80*this.suspensionY-10*this.suspensionVel;this.suspensionVel+=e*t,this.suspensionY+=this.suspensionVel*t,this.suspensionY=Math.max(-.35,Math.min(.35,this.suspensionY)),this.bodyGroup.position.y=this.suspensionY,this.bodyGroup.rotation.z=-this.suspensionY*.08}get suspensionMagnitude(){return Math.abs(this.suspensionY)+Math.abs(this.suspensionVel)*.04}}const nn={maxSpeed:80,acceleration:55,reverseForce:45,friction:.985,steerRate:2.8,minSpeedToSteer:.5,gripAtLowSpeed:7,gripAtHighSpeed:1.2},ml=40,q0=4,j0=30,$0=.8;function J0(s){for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s}function K0(s){return Math.round(s/ml)*ml}function gl(s,t){let e=0;const n=K0((s+t)*.5);for(const i of[-1,1]){const r=n+i*q0;(s-r)*(t-r)<0&&e++}return e}class Z0{constructor(t,e,n,i){U(this,"van");U(this,"input");U(this,"_speed",0);U(this,"velocityAngle",0);U(this,"prevPos",new D);U(this,"onBump");U(this,"collisionWorld");U(this,"COLL_GRID",40);U(this,"COLL_ROAD_HALF",6.5);this.van=t,this.input=e,this.onBump=n,this.collisionWorld=i,this.velocityAngle=this.van.heading,this.prevPos.copy(this.van.mesh.position)}get speed(){return this._speed}update(t){this.prevPos.copy(this.van.mesh.position);const e=Math.abs(this._speed);if(this.input.forward&&(this._speed+=nn.acceleration*t),this.input.brake&&(this._speed-=nn.reverseForce*t),this._speed*=Math.pow(nn.friction,t*60),this._speed=Math.max(-80*.5,Math.min(nn.maxSpeed,this._speed)),e>nn.minSpeedToSteer){const l=this.input.left?-1:this.input.right?1:Math.abs(this.input.steerAxis)>.1?this.input.steerAxis:0,c=Math.min(1,e/15);this.van.heading+=l*nn.steerRate*c*Math.sign(this._speed)*t}const n=Math.min(e/nn.maxSpeed,1),i=nn.gripAtLowSpeed+(nn.gripAtHighSpeed-nn.gripAtLowSpeed)*n,r=J0(this.van.heading-this.velocityAngle);this.velocityAngle+=r*i*t;const o=new D(Math.sin(this.velocityAngle),0,-Math.cos(this.velocityAngle));this.van.velocity.copy(o).multiplyScalar(this._speed),this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(t)),this.van.mesh.rotation.y=-this.van.heading;const a=245;if(this.van.mesh.position.x=Math.max(-a,Math.min(a,this.van.mesh.position.x)),this.van.mesh.position.z=Math.max(-a,Math.min(a,this.van.mesh.position.z)),this.collisionWorld){const l=this.collisionWorld.resolveCircle(this.van.mesh.position.x,this.van.mesh.position.z,1.8);(l.x!==this.van.mesh.position.x||l.z!==this.van.mesh.position.z)&&(this._speed*=.65,this.van.mesh.position.x=l.x,this.van.mesh.position.z=l.z)}this._checkCurbCrossings()}distToNearestRoad(t){const e=(t%this.COLL_GRID+this.COLL_GRID)%this.COLL_GRID;return Math.min(e,this.COLL_GRID-e)}isOnRoad(t,e){const n=this.distToNearestRoad(t),i=this.distToNearestRoad(e);return n<this.COLL_ROAD_HALF||i<this.COLL_ROAD_HALF}resolveCollision(t,e,n,i){return this.isOnRoad(n,i)?{x:n,z:i}:this.isOnRoad(t,i)?{x:t,z:i}:this.isOnRoad(n,e)?{x:n,z:e}:{x:t,z:e}}applyImpulse(t,e){this._speed*=.5,this.van.mesh.position.x+=t*.1,this.van.mesh.position.z+=e*.1}_checkCurbCrossings(){const t=this.van.mesh.position,e=this.prevPos,n=gl(e.x,t.x),i=gl(e.z,t.z);if(n+i===0)return;const a=Math.abs(this._speed)/j0,l=Math.max($0,Math.min(1,a));this.van.triggerBump(l),this._speed*=.85,this.onBump&&this.onBump(l)}}const Xs=(s,t)=>{const e=t.x-s.x,n=t.y-s.y;return Math.sqrt(e*e+n*n)},Q0=(s,t)=>{const e=t.x-s.x,n=t.y-s.y;return em(Math.atan2(n,e))},tm=(s,t,e)=>{const n={x:0,y:0};return e=Lo(e),n.x=s.x-t*Math.cos(e),n.y=s.y-t*Math.sin(e),n},Lo=s=>s*(Math.PI/180),em=s=>s*(180/Math.PI),nm=s=>isNaN(s.buttons)?s.pressure!==0:s.buttons!==0,kr=new Map,xl=s=>{kr.has(s)&&clearTimeout(kr.get(s)),kr.set(s,setTimeout(s,100))},Ks=(s,t,e)=>{const n=t.split(/[ ,]+/g);let i;for(let r=0;r<n.length;r+=1)i=n[r],s.addEventListener?s.addEventListener(i,e,!1):s.attachEvent&&s.attachEvent(i,e)},vl=(s,t,e)=>{const n=t.split(/[ ,]+/g);let i;for(let r=0;r<n.length;r+=1)i=n[r],s.removeEventListener?s.removeEventListener(i,e):s.detachEvent&&s.detachEvent(i,e)},_c=s=>(s.preventDefault(),s.type.match(/^touch/)?s.changedTouches:s),_l=()=>{const s=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,t=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:s,y:t}},yl=(s,t)=>{t.top||t.right||t.bottom||t.left?(s.style.top=t.top,s.style.right=t.right,s.style.bottom=t.bottom,s.style.left=t.left):(s.style.left=t.x+"px",s.style.top=t.y+"px")},Zo=(s,t,e)=>{const n=yc(s);for(let i in n)if(n.hasOwnProperty(i))if(typeof t=="string")n[i]=t+" "+e;else{let r="";for(let o=0,a=t.length;o<a;o+=1)r+=t[o]+" "+e+", ";n[i]=r.slice(0,-2)}return n},im=(s,t)=>{const e=yc(s);for(let n in e)e.hasOwnProperty(n)&&(e[n]=t);return e},yc=s=>{const t={};return t[s]="",["webkit","Moz","o"].forEach(function(n){t[n+s.charAt(0).toUpperCase()+s.slice(1)]=""}),t},Gr=(s,t)=>{for(let e in t)t.hasOwnProperty(e)&&(s[e]=t[e]);return s},sm=(s,t)=>{const e={};for(let n in s)s.hasOwnProperty(n)&&t.hasOwnProperty(n)?e[n]=t[n]:s.hasOwnProperty(n)&&(e[n]=s[n]);return e},Io=(s,t)=>{if(s.length)for(let e=0,n=s.length;e<n;e+=1)t(s[e]);else t(s)},rm=(s,t,e)=>({x:Math.min(Math.max(s.x,t.x-e),t.x+e),y:Math.min(Math.max(s.y,t.y-e),t.y+e)});var om="ontouchstart"in window,am=!!window.PointerEvent,lm=!!window.MSPointerEvent,Zi={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},Ei,rs={};am?Ei=Zi.pointer:lm?Ei=Zi.MSPointer:om?(Ei=Zi.touch,rs=Zi.mouse):Ei=Zi.mouse;function En(){}En.prototype.on=function(s,t){var e=this,n=s.split(/[ ,]+/g),i;e._handlers_=e._handlers_||{};for(var r=0;r<n.length;r+=1)i=n[r],e._handlers_[i]=e._handlers_[i]||[],e._handlers_[i].push(t);return e};En.prototype.off=function(s,t){var e=this;return e._handlers_=e._handlers_||{},s===void 0?e._handlers_={}:t===void 0?e._handlers_[s]=null:e._handlers_[s]&&e._handlers_[s].indexOf(t)>=0&&e._handlers_[s].splice(e._handlers_[s].indexOf(t),1),e};En.prototype.trigger=function(s,t){var e=this,n=s.split(/[ ,]+/g),i;e._handlers_=e._handlers_||{};for(var r=0;r<n.length;r+=1)i=n[r],e._handlers_[i]&&e._handlers_[i].length&&e._handlers_[i].forEach(function(o){o.call(e,{type:i,target:e},t)})};En.prototype.config=function(s){var t=this;t.options=t.defaults||{},s&&(t.options=sm(t.options,s))};En.prototype.bindEvt=function(s,t){var e=this;return e._domHandlers_=e._domHandlers_||{},e._domHandlers_[t]=function(){typeof e["on"+t]=="function"?e["on"+t].apply(e,arguments):console.warn('[WARNING] : Missing "on'+t+'" handler.')},Ks(s,Ei[t],e._domHandlers_[t]),rs[t]&&Ks(s,rs[t],e._domHandlers_[t]),e};En.prototype.unbindEvt=function(s,t){var e=this;return e._domHandlers_=e._domHandlers_||{},vl(s,Ei[t],e._domHandlers_[t]),rs[t]&&vl(s,rs[t],e._domHandlers_[t]),delete e._domHandlers_[t],this};function Me(s,t){return this.identifier=t.identifier,this.position=t.position,this.frontPosition=t.frontPosition,this.collection=s,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(t),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=Me.id,Me.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}Me.prototype=new En;Me.constructor=Me;Me.id=0;Me.prototype.buildEl=function(s){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};Me.prototype.stylize=function(){if(this.options.dataOnly)return this;var s=this.options.fadeTime+"ms",t=im("borderRadius","50%"),e=Zo("transition","opacity",s),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},Gr(n.el,e),this.options.shape==="circle"&&Gr(n.back,t),Gr(n.front,t),this.applyStyles(n),this};Me.prototype.applyStyles=function(s){for(var t in this.ui)if(this.ui.hasOwnProperty(t))for(var e in s[t])this.ui[t].style[e]=s[t][e];return this};Me.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};Me.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};Me.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};Me.prototype.show=function(s){var t=this;return t.options.dataOnly||(clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.addToDom(),t.restCallback(),setTimeout(function(){t.ui.el.style.opacity=1},0),t.showTimeout=setTimeout(function(){t.trigger("shown",t.instance),typeof s=="function"&&s.call(this)},t.options.fadeTime)),t};Me.prototype.hide=function(s){var t=this;if(t.options.dataOnly)return t;if(t.ui.el.style.opacity=t.options.restOpacity,clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.removeTimeout=setTimeout(function(){var e=t.options.mode==="dynamic"?"none":"block";t.ui.el.style.display=e,typeof s=="function"&&s.call(t),t.trigger("hidden",t.instance)},t.options.fadeTime),t.options.restJoystick){const e=t.options.restJoystick,n={};n.x=e===!0||e.x!==!1?0:t.instance.frontPosition.x,n.y=e===!0||e.y!==!1?0:t.instance.frontPosition.y,t.setPosition(s,n)}return t};Me.prototype.setPosition=function(s,t){var e=this;e.frontPosition={x:t.x,y:t.y};var n=e.options.fadeTime+"ms",i={};i.front=Zo("transition",["transform"],n);var r={front:{}};r.front={transform:"translate("+e.frontPosition.x+"px,"+e.frontPosition.y+"px)"},e.applyStyles(i),e.applyStyles(r),e.restTimeout=setTimeout(function(){typeof s=="function"&&s.call(e),e.restCallback()},e.options.fadeTime)};Me.prototype.restCallback=function(){var s=this,t={};t.front=Zo("transition","none",""),s.applyStyles(t),s.trigger("rested",s.instance)};Me.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};Me.prototype.computeDirection=function(s){var t=s.angle.radian,e=Math.PI/4,n=Math.PI/2,i,r,o;if(t>e&&t<e*3&&!s.lockX?i="up":t>-e&&t<=e&&!s.lockY?i="left":t>-e*3&&t<=-e&&!s.lockX?i="down":s.lockY||(i="right"),s.lockY||(t>-n&&t<n?r="left":r="right"),s.lockX||(t>0?o="up":o="down"),s.force>this.options.threshold){var a={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(a[l]=this.direction[l]);var c={};this.direction={x:r,y:o,angle:i},s.direction=this.direction;for(l in a)a[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return s;(!c.x||!c.y)&&this.trigger("plain",s),c.x||this.trigger("plain:"+r,s),c.y||this.trigger("plain:"+o,s),c.angle||this.trigger("dir dir:"+i,s)}else this.resetDirection();return s};function me(s,t){var e=this;e.nipples=[],e.idles=[],e.actives=[],e.ids=[],e.pressureIntervals={},e.manager=s,e.id=me.id,me.id+=1,e.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},e.config(t),(e.options.mode==="static"||e.options.mode==="semi")&&(e.options.multitouch=!1),e.options.multitouch||(e.options.maxNumberOfNipples=1);const n=getComputedStyle(e.options.zone.parentElement);return n&&n.display==="flex"&&(e.parentIsFlex=!0),e.updateBox(),e.prepareNipples(),e.bindings(),e.begin(),e.nipples}me.prototype=new En;me.constructor=me;me.id=0;me.prototype.prepareNipples=function(){var s=this,t=s.nipples;t.on=s.on.bind(s),t.off=s.off.bind(s),t.options=s.options,t.destroy=s.destroy.bind(s),t.ids=s.ids,t.id=s.id,t.processOnMove=s.processOnMove.bind(s),t.processOnEnd=s.processOnEnd.bind(s),t.get=function(e){if(e===void 0)return t[0];for(var n=0,i=t.length;n<i;n+=1)if(t[n].identifier===e)return t[n];return!1}};me.prototype.bindings=function(){var s=this;s.bindEvt(s.options.zone,"start"),s.options.zone.style.touchAction="none",s.options.zone.style.msTouchAction="none"};me.prototype.begin=function(){var s=this,t=s.options;if(t.mode==="static"){var e=s.createNipple(t.position,s.manager.getIdentifier());e.add(),s.idles.push(e)}};me.prototype.createNipple=function(s,t){var e=this,n=e.manager.scroll,i={},r=e.options,o={x:e.parentIsFlex?n.x:n.x+e.box.left,y:e.parentIsFlex?n.y:n.y+e.box.top};if(s.x&&s.y)i={x:s.x-o.x,y:s.y-o.y};else if(s.top||s.right||s.bottom||s.left){var a=document.createElement("DIV");a.style.display="hidden",a.style.top=s.top,a.style.right=s.right,a.style.bottom=s.bottom,a.style.left=s.left,a.style.position="absolute",r.zone.appendChild(a);var l=a.getBoundingClientRect();r.zone.removeChild(a),i=s,s={x:l.left+n.x,y:l.top+n.y}}var c=new Me(e,{color:r.color,size:r.size,threshold:r.threshold,fadeTime:r.fadeTime,dataOnly:r.dataOnly,restJoystick:r.restJoystick,restOpacity:r.restOpacity,mode:r.mode,identifier:t,position:s,zone:r.zone,frontPosition:{x:0,y:0},shape:r.shape});return r.dataOnly||(yl(c.ui.el,i),yl(c.ui.front,c.frontPosition)),e.nipples.push(c),e.trigger("added "+c.identifier+":added",c),e.manager.trigger("added "+c.identifier+":added",c),e.bindNipple(c),c};me.prototype.updateBox=function(){var s=this;s.box=s.options.zone.getBoundingClientRect()};me.prototype.bindNipple=function(s){var t=this,e,n=function(i,r){e=i.type+" "+r.id+":"+i.type,t.trigger(e,r)};s.on("destroyed",t.onDestroyed.bind(t)),s.on("shown hidden rested dir plain",n),s.on("dir:up dir:right dir:down dir:left",n),s.on("plain:up plain:right plain:down plain:left",n)};me.prototype.pressureFn=function(s,t,e){var n=this,i=0;clearInterval(n.pressureIntervals[e]),n.pressureIntervals[e]=setInterval((function(){var r=s.force||s.pressure||s.webkitForce||0;r!==i&&(t.trigger("pressure",r),n.trigger("pressure "+t.identifier+":pressure",r),i=r)}).bind(n),100)};me.prototype.onstart=function(s){var t=this,e=t.options,n=s;s=_c(s),t.updateBox();var i=function(r){t.actives.length<e.maxNumberOfNipples?t.processOnStart(r):n.type.match(/^touch/)&&(Object.keys(t.manager.ids).forEach(function(o){if(Object.values(n.touches).findIndex(function(l){return l.identifier===o})<0){var a=[s[0]];a.identifier=o,t.processOnEnd(a)}}),t.actives.length<e.maxNumberOfNipples&&t.processOnStart(r))};return Io(s,i),t.manager.bindDocument(),!1};me.prototype.processOnStart=function(s){var t=this,e=t.options,n,i=t.manager.getIdentifier(s),r=s.force||s.pressure||s.webkitForce||0,o={x:s.pageX,y:s.pageY},a=t.getOrCreate(i,o);a.identifier!==i&&t.manager.removeIdentifier(a.identifier),a.identifier=i;var l=function(h){h.trigger("start",h),t.trigger("start "+h.id+":start",h),h.show(),r>0&&t.pressureFn(s,h,h.identifier),t.processOnMove(s)};if((n=t.idles.indexOf(a))>=0&&t.idles.splice(n,1),t.actives.push(a),t.ids.push(a.identifier),e.mode!=="semi")l(a);else{var c=Xs(o,a.position);if(c<=e.catchDistance)l(a);else{a.destroy(),t.processOnStart(s);return}}return a};me.prototype.getOrCreate=function(s,t){var e=this,n=e.options,i;return/(semi|static)/.test(n.mode)?(i=e.idles[0],i?(e.idles.splice(0,1),i):n.mode==="semi"?e.createNipple(t,s):(console.warn("Coudln't find the needed nipple."),!1)):(i=e.createNipple(t,s),i)};me.prototype.processOnMove=function(s){var t=this,e=t.options,n=t.manager.getIdentifier(s),i=t.nipples.get(n),r=t.manager.scroll;if(!nm(s)){this.processOnEnd(s);return}if(!i){console.error("Found zombie joystick with ID "+n),t.manager.removeIdentifier(n);return}if(e.dynamicPage){var o=i.el.getBoundingClientRect();i.position={x:r.x+o.left,y:r.y+o.top}}i.identifier=n;var a=i.options.size/2,l={x:s.pageX,y:s.pageY};e.lockX&&(l.y=i.position.y),e.lockY&&(l.x=i.position.x);var c=Xs(l,i.position),h=Q0(l,i.position),u=Lo(h),d=c/a,p={distance:c,position:l},g,x;if(i.options.shape==="circle"?(g=Math.min(c,a),x=tm(i.position,g,h)):(x=rm(l,i.position,a),g=Xs(x,i.position)),e.follow){if(c>a){let w=l.x-x.x,y=l.y-x.y;i.position.x+=w,i.position.y+=y,i.el.style.top=i.position.y-(t.box.top+r.y)+"px",i.el.style.left=i.position.x-(t.box.left+r.x)+"px",c=Xs(l,i.position)}}else l=x,c=g;var m=l.x-i.position.x,f=l.y-i.position.y;i.frontPosition={x:m,y:f},e.dataOnly||(i.ui.front.style.transform="translate("+m+"px,"+f+"px)");var S={identifier:i.identifier,position:l,force:d,pressure:s.force||s.pressure||s.webkitForce||0,distance:c,angle:{radian:u,degree:h},vector:{x:m/a,y:-f/a},raw:p,instance:i,lockX:e.lockX,lockY:e.lockY};S=i.computeDirection(S),S.angle={radian:Lo(180-h),degree:180-h},i.trigger("move",S),t.trigger("move "+i.id+":move",S)};me.prototype.processOnEnd=function(s){var t=this,e=t.options,n=t.manager.getIdentifier(s),i=t.nipples.get(n),r=t.manager.removeIdentifier(i.identifier);i&&(e.dataOnly||i.hide(function(){e.mode==="dynamic"&&(i.trigger("removed",i),t.trigger("removed "+i.id+":removed",i),t.manager.trigger("removed "+i.id+":removed",i),i.destroy())}),clearInterval(t.pressureIntervals[i.identifier]),i.resetDirection(),i.trigger("end",i),t.trigger("end "+i.id+":end",i),t.ids.indexOf(i.identifier)>=0&&t.ids.splice(t.ids.indexOf(i.identifier),1),t.actives.indexOf(i)>=0&&t.actives.splice(t.actives.indexOf(i),1),/(semi|static)/.test(e.mode)?t.idles.push(i):t.nipples.indexOf(i)>=0&&t.nipples.splice(t.nipples.indexOf(i),1),t.manager.unbindDocument(),/(semi|static)/.test(e.mode)&&(t.manager.ids[r.id]=r.identifier))};me.prototype.onDestroyed=function(s,t){var e=this;e.nipples.indexOf(t)>=0&&e.nipples.splice(e.nipples.indexOf(t),1),e.actives.indexOf(t)>=0&&e.actives.splice(e.actives.indexOf(t),1),e.idles.indexOf(t)>=0&&e.idles.splice(e.idles.indexOf(t),1),e.ids.indexOf(t.identifier)>=0&&e.ids.splice(e.ids.indexOf(t.identifier),1),e.manager.removeIdentifier(t.identifier),e.manager.unbindDocument()};me.prototype.destroy=function(){var s=this;s.unbindEvt(s.options.zone,"start"),s.nipples.forEach(function(e){e.destroy()});for(var t in s.pressureIntervals)s.pressureIntervals.hasOwnProperty(t)&&clearInterval(s.pressureIntervals[t]);s.trigger("destroyed",s.nipples),s.manager.unbindDocument(),s.off()};function be(s){var t=this;t.ids={},t.index=0,t.collections=[],t.scroll=_l(),t.config(s),t.prepareCollections();var e=function(){var i;t.collections.forEach(function(r){r.forEach(function(o){i=o.el.getBoundingClientRect(),o.position={x:t.scroll.x+i.left,y:t.scroll.y+i.top}})})};Ks(window,"resize",function(){xl(e)});var n=function(){t.scroll=_l()};return Ks(window,"scroll",function(){xl(n)}),t.collections}be.prototype=new En;be.constructor=be;be.prototype.prepareCollections=function(){var s=this;s.collections.create=s.create.bind(s),s.collections.on=s.on.bind(s),s.collections.off=s.off.bind(s),s.collections.destroy=s.destroy.bind(s),s.collections.get=function(t){var e;return s.collections.every(function(n){return e=n.get(t),!e}),e}};be.prototype.create=function(s){return this.createCollection(s)};be.prototype.createCollection=function(s){var t=this,e=new me(t,s);return t.bindCollection(e),t.collections.push(e),e};be.prototype.bindCollection=function(s){var t=this,e,n=function(i,r){e=i.type+" "+r.id+":"+i.type,t.trigger(e,r)};s.on("destroyed",t.onDestroyed.bind(t)),s.on("shown hidden rested dir plain",n),s.on("dir:up dir:right dir:down dir:left",n),s.on("plain:up plain:right plain:down plain:left",n)};be.prototype.bindDocument=function(){var s=this;s.binded||(s.bindEvt(document,"move").bindEvt(document,"end"),s.binded=!0)};be.prototype.unbindDocument=function(s){var t=this;(!Object.keys(t.ids).length||s===!0)&&(t.unbindEvt(document,"move").unbindEvt(document,"end"),t.binded=!1)};be.prototype.getIdentifier=function(s){var t;return s?(t=s.identifier===void 0?s.pointerId:s.identifier,t===void 0&&(t=this.latest||0)):t=this.index,this.ids[t]===void 0&&(this.ids[t]=this.index,this.index+=1),this.latest=t,this.ids[t]};be.prototype.removeIdentifier=function(s){var t={};for(var e in this.ids)if(this.ids[e]===s){t.id=e,t.identifier=this.ids[e],delete this.ids[e];break}return t};be.prototype.onmove=function(s){var t=this;return t.onAny("move",s),!1};be.prototype.onend=function(s){var t=this;return t.onAny("end",s),!1};be.prototype.oncancel=function(s){var t=this;return t.onAny("end",s),!1};be.prototype.onAny=function(s,t){var e=this,n,i="processOn"+s.charAt(0).toUpperCase()+s.slice(1);t=_c(t);var r=function(a,l,c){c.ids.indexOf(l)>=0&&(c[i](a),a._found_=!0)},o=function(a){n=e.getIdentifier(a),Io(e.collections,r.bind(null,a,n)),a._found_||e.removeIdentifier(n)};return Io(t,o),!1};be.prototype.destroy=function(){var s=this;s.unbindDocument(!0),s.ids={},s.index=0,s.collections.forEach(function(t){t.destroy()}),s.off()};be.prototype.onDestroyed=function(s,t){var e=this;if(e.collections.indexOf(t)<0)return!1;e.collections.splice(e.collections.indexOf(t),1)};const Ml=new be,cm={create:function(s){return Ml.create(s)},factory:Ml};class hm{constructor(){U(this,"keys",{});U(this,"steerAxis",0);U(this,"accelerating",!1);U(this,"braking",!1);U(this,"horn",!1);U(this,"joystickManager",null);U(this,"hornTimeout",null);window.addEventListener("keydown",t=>{this.keys[t.code]=!0,t.code==="KeyH"&&this.triggerHorn()}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1}),this.setupMobileControls()}triggerHorn(){this.horn=!0,this.hornTimeout!==null&&clearTimeout(this.hornTimeout),this.hornTimeout=setTimeout(()=>{this.horn=!1,this.hornTimeout=null},300)}setupMobileControls(){const t=document.createElement("div");t.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 150px;
      height: 150px;
      z-index: 100;
      touch-action: none;
    `,document.body.appendChild(t),this.joystickManager=cm.create({zone:t,mode:"static",position:{left:"75px",bottom:"75px"},color:"rgba(255, 255, 255, 0.6)",size:120,restOpacity:.5}),this.joystickManager.on("move",(r,o)=>{o.vector&&(this.steerAxis=o.vector.x)}),this.joystickManager.on("end",()=>{this.steerAxis=0});const e=document.createElement("div");e.style.cssText=`
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
    `,e.textContent="REV",document.body.appendChild(e),e.addEventListener("touchstart",r=>{r.preventDefault(),this.braking=!0,e.style.background="rgba(220, 50, 50, 0.9)"},{passive:!1}),e.addEventListener("touchend",r=>{r.preventDefault(),this.braking=!1,e.style.background="rgba(220, 50, 50, 0.6)"},{passive:!1});const n=document.createElement("div");n.style.cssText=`
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
    `,n.textContent="GAS",document.body.appendChild(n),n.addEventListener("touchstart",r=>{r.preventDefault(),this.accelerating=!0,n.style.background="rgba(50, 200, 50, 0.9)"},{passive:!1}),n.addEventListener("touchend",r=>{r.preventDefault(),this.accelerating=!1,n.style.background="rgba(50, 200, 50, 0.6)"},{passive:!1});const i=document.createElement("div");i.style.cssText=`
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
    `,i.textContent="📯",document.body.appendChild(i),i.addEventListener("touchstart",r=>{r.preventDefault(),this.triggerHorn(),i.style.background="rgba(255, 200, 50, 0.95)",i.style.transform="scale(1.1)"},{passive:!1}),i.addEventListener("touchend",r=>{r.preventDefault(),i.style.background="rgba(255, 200, 50, 0.6)",i.style.transform="scale(1.0)"},{passive:!1})}get forward(){return this.keys.ArrowUp||this.keys.KeyW||this.accelerating}get backward(){return this.keys.ArrowDown||this.keys.KeyS}get left(){return this.keys.ArrowLeft||this.keys.KeyA||this.steerAxis<-.2}get right(){return this.keys.ArrowRight||this.keys.KeyD||this.steerAxis>.2}get brake(){return this.keys.Space||this.braking}get honk(){return this.horn}}class dm{constructor(){U(this,"level",0);U(this,"onSpill");U(this,"container");U(this,"fill");U(this,"bucketEl");U(this,"isShaking",!1);U(this,"spillFlashing",!1);if(!document.getElementById("spill-meter-styles")){const i=document.createElement("style");i.id="spill-meter-styles",i.textContent=`
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
      `,document.head.appendChild(i)}this.container=document.createElement("div"),Object.assign(this.container.style,{position:"fixed",top:"16px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",zIndex:"999",userSelect:"none",pointerEvents:"none"});const t=document.createElement("div");Object.assign(t.style,{display:"flex",alignItems:"center",gap:"8px"}),this.bucketEl=document.createElement("span"),this.bucketEl.textContent="🪣",Object.assign(this.bucketEl.style,{fontSize:"28px",lineHeight:"1"}),t.appendChild(this.bucketEl);const e=document.createElement("div");Object.assign(e.style,{width:"160px",height:"18px",background:"#333",borderRadius:"9px",overflow:"hidden",border:"2px solid rgba(255,255,255,0.25)",boxShadow:"0 2px 6px rgba(0,0,0,0.6)"}),this.fill=document.createElement("div"),Object.assign(this.fill.style,{height:"100%",width:"0%",borderRadius:"9px",transition:"width 0.05s linear",background:"linear-gradient(to right, #4caf50, #ffeb3b)"}),e.appendChild(this.fill),t.appendChild(e),this.container.appendChild(t);const n=document.createElement("div");n.textContent="DON'T SPILL THE PLASTER!",Object.assign(n.style,{color:"#fff",fontSize:"11px",fontWeight:"700",fontFamily:"system-ui, sans-serif",textShadow:"0 1px 4px rgba(0,0,0,0.9)",letterSpacing:"0.5px"}),this.container.appendChild(n),document.body.appendChild(this.container)}addSpill(t){this.level=Math.min(1,this.level+t)}update(t){var n;this.level=Math.max(0,this.level-t*.05);const e=this.level*100;if(this.fill.style.width=`${e}%`,this.level<.5){const i=this.level*2,r=Math.round(76+i*179),o=Math.round(175+i*60);this.fill.style.background=`linear-gradient(to right, rgb(${r},${o},50), rgb(${r},${o},50))`}else{const i=(this.level-.5)*2,r=255,o=Math.round(235-i*235);this.fill.style.background=`linear-gradient(to right, rgb(${r},${o},50), rgb(${r},${Math.round(o*.4)},20))`}this.level>.8&&!this.isShaking?(this.bucketEl.classList.add("bucket-shake"),this.isShaking=!0):this.level<=.8&&this.isShaking&&(this.bucketEl.classList.remove("bucket-shake"),this.isShaking=!1),this.level>=1&&!this.spillFlashing&&(this.spillFlashing=!0,this.level=.5,(n=this.onSpill)==null||n.call(this,5e4),this.container.classList.add("spill-flash"),setTimeout(()=>{this.container.classList.remove("spill-flash"),this.spillFlashing=!1},700))}triggerBump(t){this.addSpill(t*.3)}}const um=[{id:"job_01",type:"commercial",zone:"cbd",position:{x:40,z:-40},title:"Office Render Touch-Up",client:"Brad from Accounts",description:"Brad wants the boardroom feature wall to look expensive. It doesn't.",pay:42e4,timeLimit:0,travelTimeLimit:120,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_02",type:"commercial",zone:"footscray",position:{x:-120,z:60},title:"Warehouse Render",client:"Big Kev",description:"Big Kev's got a massive shed. Bigger than he let on over the phone.",pay:68e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_03",type:"residential",zone:"brunswick",position:{x:-80,z:80},title:"Terrace Renovation",client:"Matilda",description:"Matilda's doing a reno and needs three rooms done by Thursday. It's Wednesday.",pay:55e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_04",type:"heritage",zone:"richmond",position:{x:120,z:40},title:"Heritage Restoration",client:"The Council",description:"Council heritage job. Nobody told you about the asbestos audit. Nobody.",pay:8e5,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_05",type:"residential",zone:"stkilda",position:{x:40,z:-120},title:"Beachfront Apartment",client:"Chloe",description:"Chloe wants 'something textured but also smooth'. Good luck with that, mate.",pay:61e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_06",type:"emergency",zone:"cbd",position:{x:-40,z:20},title:"Emergency Patch Job",client:"Darren (Stressed)",description:"Darren's got an open home in 4 hours and a hole in his feature wall. Actual hole.",pay:95e4,timeLimit:240,travelTimeLimit:240,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_07",type:"residential",zone:"brunswick",position:{x:-120,z:-80},title:"Mudbrick Repair",client:"Zephyr",description:"Zephyr built a mudbrick wall himself. He was not qualified to do that.",pay:39e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_08",type:"commercial",zone:"footscray",position:{x:-160,z:20},title:"Kebab Shop Freshen-Up",client:"Mustafa",description:"Mustafa wants the walls done before the health inspector returns. No questions.",pay:47e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_09",type:"heritage",zone:"stkilda",position:{x:80,z:-160},title:"Edwardian Cottage Reno",client:"Patricia",description:"Patricia insists on lime render only. She's printed 11 pages of Wikipedia to prove it.",pay:72e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_10",type:"residential",zone:"richmond",position:{x:160,z:-40},title:"New Build Render",client:"The Hendersons",description:"The Hendersons want it done before Christmas. You ask which Christmas.",pay:58e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_11",type:"emergency",zone:"brunswick",position:{x:-40,z:120},title:"Water Damage Repair",client:"Gary",description:"Gary's upstairs neighbor left the bath running. Gary is not speaking to upstairs.",pay:88e4,timeLimit:300,travelTimeLimit:300,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_12",type:"commercial",zone:"stkilda",position:{x:-20,z:-160},title:"Wine Bar Feature Wall",description:"The owner wants 'industrial rustic chic'. You write down 'grey with bumps'.",client:"Alejandro",pay:64e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1}],Sl=["Jose","Jarrad","Matt","Phil","Tsuyoshi","Fabio"],Kn=class Kn{constructor(){U(this,"jobs",um.map(t=>({...t})));U(this,"activeJob",null);U(this,"activePhase",1);U(this,"completedJobIds",new Set);U(this,"money",5e5);U(this,"travelTimer",0);U(this,"travelFailed",!1);U(this,"crewToPickup",[]);U(this,"crewPickedUp",[])}getAvailableJobs(){return this.jobs.filter(t=>!this.completedJobIds.has(t.id)&&t!==this.activeJob)}acceptJob(t){this.activeJob=t,this.activePhase=1,this.crewToPickup=this._pickCrew(t.crewNeeded),this.crewPickedUp=[],this.startTravelTimer()}_pickCrew(t){return[...Sl].sort(()=>Math.random()-.5).slice(0,Math.min(t,Sl.length))}startTravelTimer(){this.activeJob&&(this.travelTimer=this.activeJob.travelTimeLimit??120,this.travelFailed=!1)}checkPhase1Arrival(t,e){const n=t-Kn.WORKSHOP_POS.x,i=e-Kn.WORKSHOP_POS.z;return Math.sqrt(n*n+i*i)<18}advanceToPhase2(){this.activePhase=2,this.startTravelTimer()}advanceToPhase3(){this.activePhase=3,this.startTravelTimer()}pickupCrew(t){return!this.crewPickedUp.includes(t)&&this.crewToPickup.includes(t)&&this.crewPickedUp.push(t),this.allCrewCollected()}allCrewCollected(){return this.crewToPickup.every(t=>this.crewPickedUp.includes(t))}nextCrewNeeded(){for(const t of this.crewToPickup)if(!this.crewPickedUp.includes(t))return t;return null}tickTravel(t){if(!this.activeJob||this.travelFailed)return null;if(this.travelTimer-=t,this.travelTimer<=0){this.travelFailed=!0;const e=15e4;return this.money=Math.max(0,this.money-e),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],{failed:!0,penalty:e}}return null}checkArrival(t,e){if(!this.activeJob||this.activePhase!==3)return null;const n=t-this.activeJob.position.x,i=e-this.activeJob.position.z;return Math.sqrt(n*n+i*i)<this.activeJob.triggerRadius?this.activeJob:null}completeJob(t,e=1){const n=Math.round(t.pay*e);return this.money+=n,this.completedJobIds.add(t.id),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],n}distanceTo(t,e){if(!this.activeJob)return 0;const n=t-this.activeJob.position.x,i=e-this.activeJob.position.z;return Math.sqrt(n*n+i*i)}distanceToWorkshop(t,e){const n=t-Kn.WORKSHOP_POS.x,i=e-Kn.WORKSHOP_POS.z;return Math.sqrt(n*n+i*i)}distanceToPoint(t,e,n,i){const r=t-n,o=e-i;return Math.sqrt(r*r+o*o)}};U(Kn,"WORKSHOP_POS",{x:10,z:15});let Zs=Kn;const Je=class Je{constructor(t){U(this,"marker");U(this,"diamond");U(this,"ring");U(this,"routeLine",null);U(this,"routeGeom",null);U(this,"scene");U(this,"time",0);U(this,"targetPos",null);this.scene=t,this.marker=new Dt;const e=new Jo(1,0),n=new Z({color:Je.MARKER_COLOR,emissive:new Mt(Je.MARKER_COLOR),emissiveIntensity:.35});this.diamond=new N(e,n),this.diamond.scale.set(1.2,2,1.2),this.diamond.castShadow=!1,this.marker.add(this.diamond);const i=new ir(.5,2,32),r=new Ke({color:Je.MARKER_COLOR,transparent:!0,opacity:.6,side:on,depthWrite:!1});this.ring=new N(i,r),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=-8+.3,this.marker.add(this.ring),this.marker.visible=!1,this.scene.add(this.marker)}setTarget(t){if(this.targetPos=t,this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null),t===null){this.marker.visible=!1;return}this.marker.position.set(t.x,Je.BASE_HEIGHT,t.z),this.marker.visible=!0,this.routeGeom=new Re;const e=new Float32Array(6);e[0]=t.x,e[1]=.05,e[2]=t.z,e[3]=t.x,e[4]=.05,e[5]=t.z,this.routeGeom.setAttribute("position",new We(e,3));const n=new gc({color:16777215,transparent:!0,opacity:.75,depthTest:!1});this.routeLine=new w0(this.routeGeom,n),this.routeLine.renderOrder=999,this.scene.add(this.routeLine)}setJob(t){this.setTarget((t==null?void 0:t.position)??null)}update(t,e,n){if(this.time+=t,!this.targetPos||!this.marker.visible)return;const i=Math.sin(this.time*2.2)*Je.BOB_AMP;this.marker.position.y=Je.BASE_HEIGHT+i,this.diamond.rotation.y=this.time*1.2;const r=this.time*.8%1,o=.5+r*2;this.ring.scale.set(o,o,1);const a=this.ring.material;if(a.opacity=(1-r)*.6,this.routeGeom){const l=this.routeGeom.attributes.position;l.setXYZ(0,e,.05,n),l.setXYZ(1,this.targetPos.x,.05,this.targetPos.z),l.needsUpdate=!0,this.routeGeom.computeBoundingSphere()}}dispose(){this.marker.visible=!1,this.scene.remove(this.marker),this.diamond.geometry.dispose(),this.diamond.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null)}};U(Je,"MARKER_COLOR",12674667),U(Je,"BASE_HEIGHT",8),U(Je,"BOB_AMP",.5);let Fo=Je;function fm(s){return s>=1e6?`${(s/1e6).toFixed(2)}M sats`:s>=1e3?`${(s/1e3).toFixed(0)}K sats`:`${s} sats`}const pm={cbd:"🏙️ CBD",footscray:"🏭 Footscray",brunswick:"🎸 Brunswick",richmond:"🏡 Richmond",stkilda:"🌊 St Kilda"},mm={residential:"🏠 Residential",commercial:"🏢 Commercial",heritage:"🏛️ Heritage",emergency:"🚨 Emergency"};class gm{constructor(t){U(this,"onAccept");U(this,"overlay");U(this,"visible",!1);U(this,"jobs",[]);if(this.onAccept=t,this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,t.appendChild(e);const n=document.createElement("button");if(n.className="jb-close-btn",n.textContent="✕",n.setAttribute("aria-label","Close"),n.addEventListener("click",()=>this.hide()),t.appendChild(n),this.overlay.appendChild(t),this.jobs.length===0){const i=document.createElement("div");i.className="jb-no-jobs",i.textContent="You've smashed all the jobs, legend. 🏆",this.overlay.appendChild(i);return}for(const i of this.jobs){const r=document.createElement("div");r.className="jb-card";const o=document.createElement("div");o.className="jb-card-header";const a=document.createElement("div");a.className="jb-title",a.textContent=i.title,o.appendChild(a);const l=document.createElement("div");l.className="jb-pay",l.textContent=`₿ ${fm(i.pay)}`,o.appendChild(l),r.appendChild(o);const c=document.createElement("div");c.className="jb-meta";const h=document.createElement("span");h.className="jb-badge",h.textContent=pm[i.zone]??i.zone,c.appendChild(h);const u=document.createElement("span");if(u.className=`jb-badge${i.type==="emergency"?" jb-emergency-badge":""}`,u.textContent=mm[i.type]??i.type,c.appendChild(u),i.timeLimit>0){const x=document.createElement("span");x.className="jb-badge jb-emergency-badge",x.textContent=`⏱️ ${Math.round(i.timeLimit/60)} min limit`,c.appendChild(x)}r.appendChild(c);const d=document.createElement("div");d.className="jb-client",d.textContent=`Client: ${i.client}`,r.appendChild(d);const p=document.createElement("div");p.className="jb-desc",p.textContent=i.description,r.appendChild(p);const g=document.createElement("button");g.className="jb-accept-btn",g.textContent="ACCEPT →",g.addEventListener("click",()=>{this.onAccept(i)}),r.appendChild(g),this.overlay.appendChild(r)}}}const xm=1e8;function Si(s){return s>=1e6?`${(s/1e6).toFixed(2)}M sats`:s>=1e3?`${(s/1e3).toFixed(0)}K sats`:`${s} sats`}function vm(s){const t=Math.max(0,Math.ceil(s)),e=Math.floor(t/60),n=t%60;return`${e}:${n.toString().padStart(2,"0")}`}function _m(s){return s.charAt(0).toUpperCase()}class ym{constructor(){U(this,"btcAchieved",!1);U(this,"speedText");U(this,"moneyEl");U(this,"jobStripEl");U(this,"travelTimerEl");U(this,"flashOverlay");U(this,"timerFailOverlay");U(this,"crewPanelEl");U(this,"activeJob",null);U(this,"activePhase",1);U(this,"flashTimeout",null);U(this,"spillPenaltyTimeout",null);U(this,"currentMoney",5e5);U(this,"timerPulseInterval",null);if(!document.getElementById("hud-styles")){const r=document.createElement("style");r.id="hud-styles",r.textContent=`
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
      `,document.head.appendChild(r)}const t=document.createElement("div");t.style.cssText=`
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
    `,i.textContent="Crew",this.crewPanelEl.appendChild(i);const r=document.createElement("div");r.style.cssText=`
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: center;
    `;for(const o of t){const a=e.includes(o),l=document.createElement("div");l.style.cssText=`
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
      `,l.textContent=_m(o),l.title=o,r.appendChild(l)}this.crewPanelEl.appendChild(r)}_refreshJobStrip(t,e){this.jobStripEl.innerHTML="";const n=document.createElement("div");if(n.style.cssText=`
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      text-align: right;
    `,e!==null){const i=e<1e3?`${Math.round(e)}m`:`${(e/1e3).toFixed(1)}km`;this.activePhase===1?(n.textContent=`📦 To workshop: ${i} — ${t.title}`,n.style.color="#FFD700"):this.activePhase===2?(n.textContent=`👥 Pick up crew: ${i} — ${t.title}`,n.style.color="#60AAFF"):(n.textContent=`🧱 To job site: ${i} — ${t.title}`,n.style.color="#C1666B")}else this.activePhase===1?(n.textContent=`📦 Workshop pickup — ${t.title}`,n.style.color="#FFD700"):this.activePhase===2?(n.textContent=`👥 Pick up the crew — ${t.title}`,n.style.color="#60AAFF"):(n.textContent=`🧱 ${t.title}`,n.style.color="#fff");this.jobStripEl.appendChild(n)}updateTravelTimer(t){if(t===null){this.travelTimerEl.style.display="none",this.travelTimerEl.classList.remove("hud-timer-pulse"),this.timerPulseInterval!==null&&(clearInterval(this.timerPulseInterval),this.timerPulseInterval=null);return}this.travelTimerEl.style.display="block",this.travelTimerEl.textContent=`⏱ ${vm(t)}`,t>60?(this.travelTimerEl.style.color="#5EDB7D",this.travelTimerEl.classList.remove("hud-timer-pulse")):t>30?(this.travelTimerEl.style.color="#FFD700",this.travelTimerEl.classList.remove("hud-timer-pulse")):(this.travelTimerEl.style.color="#ff4444",this.travelTimerEl.classList.contains("hud-timer-pulse")||this.travelTimerEl.classList.add("hud-timer-pulse"))}showTimerFail(t){const e=document.getElementById("hud-timer-fail-msg");e&&(e.textContent=`⏰ TOO SLOW! -${Si(t)}`),this.timerFailOverlay.style.display="flex",setTimeout(()=>{this.timerFailOverlay.style.display="none"},3e3)}showPhase1Complete(){const t=document.getElementById("hud-flash-msg");t&&(t.innerHTML='📦 Materials loaded!<br><span style="font-size:0.65em">Go pick up the crew.</span>',t.style.color="#FFD700"),this.flashOverlay.style.background="rgba(255, 210, 0, 0.10)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2500)}showCrewPickup(t,e){const n=document.getElementById("hud-flash-msg");n&&(e?n.innerHTML=`👤 ${t} on board!<br><span style="font-size:0.65em">Pick up ${e}!</span>`:(n.innerHTML='✅ Crew assembled!<br><span style="font-size:0.65em">Head to the job site.</span>',n.style.color="#5EDB7D"),e&&(n.style.color="#60AAFF")),this.flashOverlay.style.background=e?"rgba(96, 170, 255, 0.08)":"rgba(94, 219, 125, 0.12)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2200)}showSpillPenalty(t){this.spillPenaltyTimeout!==null&&(clearTimeout(this.spillPenaltyTimeout),this.spillPenaltyTimeout=null);const e=`-${Si(t)}`;this.moneyEl.style.color="#ff4444",this.moneyEl.textContent=`${Si(this.currentMoney)} ${e}`,this.spillPenaltyTimeout=setTimeout(()=>{this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=Si(this.currentMoney),this.spillPenaltyTimeout=null},1500)}showJobComplete(t,e){const n=document.getElementById("hud-flash-msg");n&&(n.style.color="#5EDB7D",n.innerHTML=`✅ JOB DONE!<br><span style="font-size:0.7em">+${Si(e)} — ${t}</span>`),this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashTimeout=null},3e3)}updateMoney(t){this.currentMoney=t,this.spillPenaltyTimeout===null&&(this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=Si(t)),!this.btcAchieved&&t>=xm&&(this.btcAchieved=!0,this._showBitcoinAchievement())}_showBitcoinAchievement(){const t=document.createElement("div");t.style.cssText=`
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
    `,document.body.appendChild(t)}}const ti=[{id:"timber-bluestone",file:"images/270ae674-ae77-46c0-a931-d8b3890bb728.jpg",name:"Timber & Bluestone"},{id:"angular-bay",file:"images/4d5ff18e-1129-4195-9108-a64f3c8e4d34.jpg",name:"Angular Bay House"},{id:"haussmann",file:"images/5c2eabb7-65ce-4f76-b14c-8eb37a3f9537.jpg",name:"Haussmann Mansion"},{id:"brutalist",file:"images/60007f2e-318f-412e-b2ad-4d77445ee417.jpg",name:"Brutalist Compound"},{id:"sculptural-olive",file:"images/787315c4-a661-4dca-8567-b7a18f104665.jpg",name:"Sculptural Olive"},{id:"curved-balcony",file:"images/842fccc6-6bad-4509-81d8-ecb2dc14c80c.jpg",name:"Curved Balcony"},{id:"corten-plaster",file:"images/e3cbd2c9-7944-4074-a439-1033c9f2c166.jpg",name:"Corten & Plaster"},{id:"terracotta-mono",file:"images/f2ed55b5-ba78-4a78-8bad-e57a86b6bcef.jpg",name:"Terracotta Monolith"}],Mc="tem-rush-achievements";function ls(){try{return JSON.parse(localStorage.getItem(Mc)||"[]")}catch{return[]}}function Mm(s){const t=ls();return t.includes(s)?!1:(t.push(s),localStorage.setItem(Mc,JSON.stringify(t)),!0)}function Sm(){return ls().length>=ti.length}function bm(){const s=ls(),t=ti.filter(e=>!s.includes(e.id));return t.length>0?t[Math.floor(Math.random()*t.length)]:ti[Math.floor(Math.random()*ti.length)]}function wm(s,t,e){s.fillStyle="#C8B89A",s.fillRect(0,0,t,e);for(let n=0;n<800;n++){const i=Math.random()*t,r=Math.random()*e,o=20+Math.random()*60,a=Math.random()*Math.PI,l=Math.floor(180+Math.random()*40);s.strokeStyle=`rgb(${l},${l-10},${l-20})`,s.lineWidth=1+Math.random()*3,s.globalAlpha=.3+Math.random()*.4,s.beginPath(),s.moveTo(i,r),s.lineTo(i+Math.cos(a)*o,r+Math.sin(a)*o),s.stroke()}s.globalAlpha=1,s.font="bold 48px system-ui",s.textAlign="center",s.fillStyle="rgba(180,160,130,0.4)",s.fillText("TROWELED EARTH",t/2,e/2-20),s.font="22px system-ui",s.fillStyle="rgba(180,160,130,0.3)",s.fillText("Scratch to reveal",t/2,e/2+20)}function Em(s,t,e,n,i,r=45){s.globalCompositeOperation="destination-out",s.strokeStyle="rgba(0,0,0,1)",s.lineCap="round",s.lineJoin="round",s.lineWidth=r*2,s.beginPath(),s.moveTo(t,e),s.lineTo(n,i),s.stroke(),s.globalCompositeOperation="source-over"}function bl(s,t,e){const n=s.getImageData(0,0,t,e).data;let i=0;const r=t*e;for(let o=3;o<n.length;o+=4)n[o]<128&&i++;return i/r}function Tm(s,t,e){s.save(),s.translate(t,e),s.rotate(Math.PI/4),s.strokeStyle="#8B6914",s.lineWidth=5,s.lineCap="round",s.beginPath(),s.moveTo(0,0),s.lineTo(0,36),s.stroke(),s.fillStyle="#C0C0C0",s.strokeStyle="#888",s.lineWidth=1.5,s.beginPath(),s.moveTo(-14,0),s.lineTo(14,0),s.lineTo(10,-28),s.lineTo(-10,-28),s.closePath(),s.fill(),s.stroke(),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.moveTo(-8,-4),s.lineTo(4,-4),s.lineTo(2,-22),s.lineTo(-6,-22),s.closePath(),s.fill(),s.restore()}function wl(s,t,e,n){const i=Math.max(e/t.naturalWidth,n/t.naturalHeight),r=t.naturalWidth*i,o=t.naturalHeight*i,a=(e-r)/2,l=(n-o)/2;s.drawImage(t,a,l,r,o)}class Am{constructor(){U(this,"container",null);U(this,"canvas",null);U(this,"ctx",null);U(this,"scratch",null);U(this,"sctx",null);U(this,"onComplete",null);U(this,"photo",null);U(this,"img",null);U(this,"imgLoaded",!1);U(this,"lastX",0);U(this,"lastY",0);U(this,"pointerDown",!1);U(this,"cursorX",-999);U(this,"cursorY",-999);U(this,"DURATION",30);U(this,"timeLeft",30);U(this,"timerInterval",null);U(this,"rafId",0);U(this,"done",!1);U(this,"revealed",0);U(this,"lastSampleTime",0);U(this,"SAMPLE_INTERVAL",250);U(this,"toastMsg","");U(this,"toastAlpha",0);U(this,"_onMouseMove");U(this,"_onMouseDown");U(this,"_onMouseUp");U(this,"_onTouchStart");U(this,"_onTouchMove");U(this,"_onTouchEnd");this._onMouseMove=this.handleMouseMove.bind(this),this._onMouseDown=this.handleMouseDown.bind(this),this._onMouseUp=()=>{this.pointerDown=!1},this._onTouchStart=this.handleTouchStart.bind(this),this._onTouchMove=this.handleTouchMove.bind(this),this._onTouchEnd=()=>{this.pointerDown=!1}}mount(t,e){if(this.container=t,this.onComplete=e,this.done=!1,this.revealed=0,this.timeLeft=this.DURATION,this.toastMsg="",this.toastAlpha=0,this.photo=bm(),this.canvas=document.createElement("canvas"),this.canvas.width=t.clientWidth||window.innerWidth,this.canvas.height=t.clientHeight||window.innerHeight,this.canvas.style.cssText="position:absolute;inset:0;display:block;cursor:none;touch-action:none;",this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx)throw new Error("Canvas 2D not supported");if(t.appendChild(this.canvas),this.scratch=document.createElement("canvas"),this.scratch.width=this.canvas.width,this.scratch.height=this.canvas.height,this.sctx=this.scratch.getContext("2d",{willReadFrequently:!0}),!this.sctx)throw new Error("Scratch canvas 2D not supported");wm(this.sctx,this.scratch.width,this.scratch.height),this.img=new Image,this.img.onload=()=>{this.imgLoaded=!0},this.img.onerror=()=>{this.imgLoaded=!0},this.img.src=this.photo.file,this.canvas.addEventListener("mousemove",this._onMouseMove),this.canvas.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),this.canvas.addEventListener("touchstart",this._onTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.canvas.addEventListener("touchend",this._onTouchEnd),this.timerInterval=setInterval(()=>{this.done||(this.timeLeft--,this.timeLeft<=0&&this.finish())},1e3),this.loop()}handleMouseDown(t){this.pointerDown=!0;const e=this.canvas.getBoundingClientRect();this.lastX=t.clientX-e.left,this.lastY=t.clientY-e.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleMouseMove(t){const e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top;this.cursorX=n,this.cursorY=i,this.pointerDown&&!this.done&&(this.scrape(this.lastX,this.lastY,n,i),this.lastX=n,this.lastY=i)}handleTouchStart(t){t.preventDefault(),this.pointerDown=!0;const e=t.touches[0],n=this.canvas.getBoundingClientRect();this.lastX=e.clientX-n.left,this.lastY=e.clientY-n.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleTouchMove(t){if(t.preventDefault(),!this.pointerDown||this.done)return;const e=t.touches[0],n=this.canvas.getBoundingClientRect(),i=e.clientX-n.left,r=e.clientY-n.top;this.cursorX=i,this.cursorY=r,this.scrape(this.lastX,this.lastY,i,r),this.lastX=i,this.lastY=r}scrape(t,e,n,i){if(!this.sctx||!this.scratch||this.done)return;Em(this.sctx,t,e,n,i,45);const r=performance.now();r-this.lastSampleTime>this.SAMPLE_INTERVAL&&(this.lastSampleTime=r,this.revealed=bl(this.sctx,this.scratch.width,this.scratch.height),this.revealed>=.85&&this.finish())}loop(){if(this.done&&this.toastAlpha<=0)return;const t=this.ctx,e=this.canvas;if(!t||!e)return;const n=e.width,i=e.height;t.clearRect(0,0,n,i),this.imgLoaded&&this.img&&this.img.naturalWidth>0?wl(t,this.img,n,i):(t.fillStyle="#2a2a20",t.fillRect(0,0,n,i)),this.scratch&&t.drawImage(this.scratch,0,0),this.done||this.drawHUD(t,n,i),this.cursorX>0&&!this.done&&Tm(t,this.cursorX,this.cursorY),this.toastAlpha>0&&(this.drawToast(t,n,i),this.toastAlpha-=.012),this.rafId=requestAnimationFrame(()=>this.loop())}drawHUD(t,e,n){const i=this.timeLeft/this.DURATION,r=e*.8,o=e*.1,a=16,l=14,c=7;t.fillStyle="rgba(0,0,0,0.4)",this.roundRect(t,o,a,r,l,c),t.fill();const h=i<.33?"#F07070":i<.6?"#F7C948":"#5EDB7D";t.fillStyle=h,this.roundRect(t,o,a,r*i,l,c),t.fill(),t.fillStyle="#fff",t.font=`bold ${Math.round(n*.03)}px system-ui`,t.textAlign="center",t.shadowColor="rgba(0,0,0,0.8)",t.shadowBlur=6,t.fillText(`${Math.ceil(this.timeLeft)}s`,e/2,a+l+22);const u=Math.round(this.revealed*100);t.font=`900 ${Math.round(n*.09)}px system-ui`,t.textAlign="center",t.fillStyle="rgba(255,255,255,0.9)",t.shadowColor="rgba(0,0,0,0.9)",t.shadowBlur=12,t.fillText(`${u}%`,e/2,n-32),t.shadowBlur=0,this.timeLeft>25&&(t.font=`bold ${Math.round(n*.03)}px system-ui`,t.fillStyle="rgba(255,255,255,0.85)",t.textAlign="center",t.fillText("🪣  Scrape away the plaster!",e/2,n/2))}roundRect(t,e,n,i,r,o){i<0||(t.beginPath(),t.moveTo(e+o,n),t.lineTo(e+i-o,n),t.quadraticCurveTo(e+i,n,e+i,n+o),t.lineTo(e+i,n+r-o),t.quadraticCurveTo(e+i,n+r,e+i-o,n+r),t.lineTo(e+o,n+r),t.quadraticCurveTo(e,n+r,e,n+r-o),t.lineTo(e,n+o),t.quadraticCurveTo(e,n,e+o,n),t.closePath())}drawToast(t,e,n){const i=Math.min(1,this.toastAlpha);t.save(),t.globalAlpha=i,t.fillStyle="rgba(0,0,0,0.7)",t.font=`bold ${Math.round(n*.035)}px system-ui`,t.textAlign="center";const r=this.toastMsg.split(`
`),o=Math.round(n*.045),a=r.length*o+24,l=n*.45-a/2,c=e*.85,h=(e-c)/2;this.roundRect(t,h,l,c,a,16),t.fill(),t.fillStyle="#fff",t.shadowColor="rgba(0,0,0,0.6)",t.shadowBlur=8,r.forEach((u,d)=>{t.fillText(u,e/2,l+22+d*o)}),t.restore()}finish(){if(this.done)return;this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.sctx&&this.scratch&&(this.revealed=bl(this.sctx,this.scratch.width,this.scratch.height));const t=Math.round(this.revealed*100),e=Math.max(20,t),n=e/100,i=this.photo,r=Mm(i.id),o=ls().length,a=Sm();this.showResultScreen(e,i,r,o,a,n)}showResultScreen(t,e,n,i,r,o){const a=this.ctx,l=this.canvas;if(!a||!l)return;const c=l.width,h=l.height;a.clearRect(0,0,c,h),this.imgLoaded&&this.img&&this.img.naturalWidth>0?wl(a,this.img,c,h):(a.fillStyle="#2a2a20",a.fillRect(0,0,c,h)),this.scratch&&a.drawImage(this.scratch,0,0),a.fillStyle="rgba(0,0,0,0.65)",a.fillRect(0,0,c,h);const u=t>=85?"#5EDB7D":t>=60?"#F7C948":"#F07070";a.font=`900 ${Math.round(h*.15)}px system-ui`,a.textAlign="center",a.fillStyle=u,a.shadowColor="rgba(0,0,0,0.8)",a.shadowBlur=20,a.fillText(`${t}%`,c/2,h*.35),a.font=`bold ${Math.round(h*.04)}px system-ui`,a.fillStyle="#fff",a.shadowBlur=10,a.fillText(`📸 ${e.name}`,c/2,h*.47);let d;r?d="🏆 FULL TEM COLLECTION!":n?d="✨ NEW PHOTO UNLOCKED!":d="Already in your collection",a.font=`bold ${Math.round(h*.032)}px system-ui`,a.fillStyle=r?"#FFD700":n?"#5EDB7D":"#aaa",a.shadowBlur=8,a.fillText(d,c/2,h*.56),a.font=`${Math.round(h*.026)}px system-ui`,a.fillStyle="rgba(255,255,255,0.75)",a.shadowBlur=4,a.fillText(`Collection: ${i} / ${ti.length}`,c/2,h*.64),a.shadowBlur=0;const p=r?"🏆 Full TEM Collection complete!":n?`📸 New photo unlocked: ${e.name}`:`${e.name} — already in collection`,g={score:t,qualityPct:o,message:p};setTimeout(()=>{var x;return(x=this.onComplete)==null?void 0:x.call(this,g)},2800)}unmount(){this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.rafId&&cancelAnimationFrame(this.rafId),this.canvas&&(this.canvas.removeEventListener("mousemove",this._onMouseMove),this.canvas.removeEventListener("mousedown",this._onMouseDown),this.canvas.removeEventListener("touchstart",this._onTouchStart),this.canvas.removeEventListener("touchmove",this._onTouchMove),this.canvas.removeEventListener("touchend",this._onTouchEnd),this.canvas.remove()),window.removeEventListener("mouseup",this._onMouseUp),this.canvas=null,this.ctx=null,this.scratch=null,this.sctx=null,this.container=null,this.onComplete=null,this.img=null}}const Ot=400,ue=700,Cm=800,El=-420,Ns=140,Tl=100,Rm=600,Pm=.5,Oe=44,Os=22,Dm=.6,Lm=180,Im=-200,Al=60,Fm=80,Bm=.8,Um=100,Nm=1.15,Qi=3,Om=100,ts=200,bi=80,sn=270,zm=[{id:"lv1",baseX:80,y:540,width:100,height:8,level:1,type:"normal"},{id:"lv2",baseX:140,y:450,width:120,height:8,level:2,type:"normal"},{id:"lv3a",baseX:80,y:360,width:100,height:8,level:3,type:"normal"},{id:"lv3b",baseX:220,y:360,width:100,height:8,level:3,type:"normal"},{id:"lv4",baseX:125,y:270,width:140,height:8,level:4,type:"moving"},{id:"lv5a",baseX:80,y:185,width:100,height:8,level:5,type:"crumbling"},{id:"lv5b",baseX:220,y:185,width:100,height:8,level:5,type:"normal"},{id:"lv6",baseX:80,y:100,width:240,height:8,level:6,type:"win"}],Fn={x:190,y:420,w:40,h:30};class km{constructor(){U(this,"canvas",null);U(this,"ctx",null);U(this,"animFrame",null);U(this,"onComplete",null);U(this,"phase","playing");U(this,"platforms",[]);U(this,"jarrad");U(this,"pigeon");U(this,"gameTime",0);U(this,"tsuyoshiSpeech","I GOT IT!");U(this,"tsuyoshiTimer",0);U(this,"resultTimer",0);U(this,"retried",!1);U(this,"movingPlatTime",0);U(this,"movingPlatX",125);U(this,"crumble5ATimer",0);U(this,"crumble5AState","solid");U(this,"crumble5ARespawn",0);U(this,"ropeAngle",0);U(this,"ropeAngVel",0);U(this,"ropeGrabbed",!1);U(this,"windCycleTimer",0);U(this,"windActive",!1);U(this,"windAlpha",0);U(this,"showGapHint",!0);U(this,"gapHintTimer",8);U(this,"shakeNoise",0);U(this,"comboPhase",0);U(this,"comboTimer",0);U(this,"comboFlashTimer",0);U(this,"vaultFlashTimer",0);U(this,"rewindFlashTimer",0);U(this,"splatParticles",[]);U(this,"frameCount",0);U(this,"prevJarradY",0);U(this,"wallDustParticles",[]);U(this,"hasShimmied",!1);U(this,"keys",{});U(this,"prevKeys",{});U(this,"keyHandler");U(this,"keyUpHandler");U(this,"mobileLeft",!1);U(this,"mobileRight",!1);U(this,"mobileJump",!1);U(this,"mobileDrop",!1);U(this,"mobileRewind",!1);U(this,"mobileRewindFired",!1);U(this,"mobileContainer",null);U(this,"lastTimestamp",0)}mount(t,e){this.onComplete=e,this.platforms=zm.map(i=>({...i})),this.canvas=document.createElement("canvas"),this.canvas.width=Ot,this.canvas.height=ue,this.canvas.style.cssText=`
      width: 100%; height: 100%; object-fit: contain; display: block; touch-action: none;
    `,this.ctx=this.canvas.getContext("2d");const n=document.createElement("div");n.style.cssText=`
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      background: #000; overflow: hidden;
    `,n.appendChild(this.canvas),t.appendChild(n),this.buildMobileButtons(n),this.initGame(),this.keys={},this.prevKeys={},this.keyHandler=i=>{this.keys[i.code]=!0,["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(i.code)&&i.preventDefault()},this.keyUpHandler=i=>{this.keys[i.code]=!1},window.addEventListener("keydown",this.keyHandler),window.addEventListener("keyup",this.keyUpHandler),this.lastTimestamp=0,this.animFrame=requestAnimationFrame(i=>this.gameLoop(i))}unmount(){this.animFrame!==null&&(cancelAnimationFrame(this.animFrame),this.animFrame=null),window.removeEventListener("keydown",this.keyHandler),window.removeEventListener("keyup",this.keyUpHandler),this.canvas=null,this.ctx=null,this.onComplete=null,this.mobileContainer=null}buildMobileButtons(t){const e=document.createElement("div");e.style.cssText=`
      position: absolute; bottom: 0; left: 0; right: 0;
      display: flex; justify-content: space-between; align-items: flex-end;
      padding: 8px; pointer-events: none; z-index: 50;
    `;const n=(u,d,p)=>{const g=document.createElement("button");return g.textContent=u,g.style.cssText=`
        pointer-events: auto;
        background: rgba(255,255,255,0.18); border: 2px solid rgba(255,255,255,0.4);
        color: #fff; border-radius: 12px; font-size: 22px; font-weight: 900;
        cursor: pointer; touch-action: manipulation; user-select: none;
        -webkit-tap-highlight-color: transparent;
      `,g.addEventListener("touchstart",x=>{x.preventDefault(),d()},{passive:!1}),g.addEventListener("touchend",x=>{x.preventDefault(),p()},{passive:!1}),g.addEventListener("mousedown",()=>d()),g.addEventListener("mouseup",()=>p()),g.addEventListener("mouseleave",()=>p()),g},i=document.createElement("div");i.style.cssText="display:flex; flex-direction:column; gap:4px; pointer-events:none; align-items:flex-start;";const r=n("⏪",()=>{this.mobileRewindFired||(this.mobileRewind=!0,this.mobileRewindFired=!0)},()=>{this.mobileRewind=!1,this.mobileRewindFired=!1});r.style.cssText+="; width:48px; height:40px; font-size:16px;";const o=document.createElement("div");o.style.cssText="display:flex; gap:4px; pointer-events:none;";const a=n("◀",()=>{this.mobileLeft=!0},()=>{this.mobileLeft=!1});a.style.width="64px",a.style.height="64px";const l=n("▶",()=>{this.mobileRight=!0},()=>{this.mobileRight=!1});l.style.width="64px",l.style.height="64px",o.appendChild(a),o.appendChild(l),i.appendChild(r),i.appendChild(o);const c=n("▲",()=>{this.mobileJump=!0},()=>{this.mobileJump=!1});c.style.width="80px",c.style.height="64px";const h=n("▼",()=>{this.mobileDrop=!0},()=>{this.mobileDrop=!1});h.style.width="64px",h.style.height="64px",e.appendChild(i),e.appendChild(c),e.appendChild(h),t.appendChild(e),this.mobileContainer=e}initGame(){this.phase="playing",this.gameTime=0,this.movingPlatTime=0,this.movingPlatX=125,this.tsuyoshiTimer=0,this.tsuyoshiSpeech="I GOT IT!",this.resultTimer=0,this.crumble5ATimer=0,this.crumble5AState="solid",this.crumble5ARespawn=0,this.ropeAngle=0,this.ropeAngVel=0,this.ropeGrabbed=!1,this.windCycleTimer=0,this.windActive=!1,this.windAlpha=0,this.showGapHint=!0,this.gapHintTimer=8,this.comboPhase=0,this.comboTimer=0,this.comboFlashTimer=0,this.vaultFlashTimer=0,this.rewindFlashTimer=0,this.splatParticles=[],this.wallDustParticles=[],this.frameCount=0,this.hasShimmied=!1,this.pigeon={x:240,y:0,vx:60,platformIdx:3,jumpTimer:6,scaredTimer:0,flying:!1,flyTargetX:240,flyTargetY:0},this.snapPigeonToPlatform(),this.spawnAtLevel1()}spawnAtLevel1(){var n;const t=this.platforms[0],e=((n=this.jarrad)==null?void 0:n.lives)??3;this.jarrad={x:t.baseX+10,y:t.y-Oe,vx:0,vy:0,w:18,h:Oe,state:"standing",isCrouching:!1,lives:e,invincTimer:0,deathTimer:0,currentLevel:1,bucketAngle:0,wallRunTimer:0,wallRunDir:0,wallRunUsed:!1,rewindX:t.baseX+10,rewindY:t.y-Oe,rewindAvailable:!0},this.ropeGrabbed=!1,this.prevJarradY=this.jarrad.y,this.splatParticles=[],this.wallDustParticles=[]}gameLoop(t){if(!this.ctx||!this.canvas)return;const e=Math.min((t-(this.lastTimestamp||t))/1e3,.05);this.lastTimestamp=t,this.phase==="playing"&&this.update(e),this.draw(),this.prevKeys={...this.keys},this.animFrame=requestAnimationFrame(n=>this.gameLoop(n))}update(t){this.gameTime+=t,this.frameCount++,this.tsuyoshiTimer+=t,this.tsuyoshiTimer>3&&(this.tsuyoshiTimer=0,this.tsuyoshiSpeech=this.tsuyoshiSpeech==="I GOT IT!"?"HOLD ON!":"I GOT IT!"),this.showGapHint&&(this.gapHintTimer-=t,this.gapHintTimer<=0&&(this.showGapHint=!1)),this.movingPlatTime+=t;const e=this.movingPlatX;if(this.movingPlatX=125+45*Math.sin(2*Math.PI*this.movingPlatTime/3),this.updateWind(t),this.updateCrumble(t),this.updatePigeon(t),this.vaultFlashTimer>0&&(this.vaultFlashTimer-=t),this.rewindFlashTimer>0&&(this.rewindFlashTimer-=t),this.comboFlashTimer>0&&(this.comboFlashTimer-=t),this.comboPhase>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.comboPhase=0,this.comboTimer=0)),this.updateSplatParticles(t),this.updateWallDust(t),this.jarrad.state==="dead"){this.jarrad.deathTimer-=t,this.jarrad.deathTimer<=0&&this.spawnAtLevel1();return}this.jarrad.invincTimer>0&&(this.jarrad.invincTimer-=t),this.prevJarradY=this.jarrad.y,this.handleInput(t),this.applyPhysics(t,e),this.checkCollisions(),this.checkDeath(),this.checkWin();const n=this.jarrad.vx*.002;this.jarrad.bucketAngle+=(n-this.jarrad.bucketAngle)*8*t,this.jarrad.invincTimer<=0&&this.checkPigeonCollision(),this.jarrad.currentLevel=this.getCurrentLevel()}spawnSplatParticles(t,e){const n=5+Math.floor(Math.random()*2);for(let i=0;i<n;i++){const r=Math.PI*2*i/n+(Math.random()-.5)*.5,o=60+Math.random()*80;this.splatParticles.push({x:t,y:e,vx:Math.cos(r)*o,vy:Math.sin(r)*o-30,alpha:1,radius:3+Math.random()*4})}}updateSplatParticles(t){for(const e of this.splatParticles)e.x+=e.vx*t,e.y+=e.vy*t,e.vy+=200*t,e.alpha-=t/.4;this.splatParticles=this.splatParticles.filter(e=>e.alpha>0)}spawnWallDust(t,e){for(let n=0;n<3;n++)this.wallDustParticles.push({x:t+(Math.random()-.5)*10,y:e+Math.random()*20,alpha:.8,r:3+Math.random()*4})}updateWallDust(t){for(const e of this.wallDustParticles)e.alpha-=t/.4,e.y-=20*t;this.wallDustParticles=this.wallDustParticles.filter(e=>e.alpha>0)}updateWind(t){this.windCycleTimer+=t;const e=4,n=1.5,i=this.windCycleTimer%e;i<n?(this.windActive=!0,i<.3?this.windAlpha=i/.3:i>n-.3?this.windAlpha=(n-i)/.3:this.windAlpha=1):(this.windActive=!1,this.windAlpha=0)}updateCrumble(t){if(this.crumble5AState==="broken"){this.crumble5ARespawn-=t,this.crumble5ARespawn<=0&&(this.crumble5AState="solid",this.crumble5ATimer=0);return}const e=this.jarrad,n=this.platforms[5],i=e.y+e.h;e.state==="standing"&&Math.abs(i-n.y)<5&&e.x+e.w>n.baseX&&e.x<n.baseX+n.width?(this.crumble5ATimer+=t,this.crumble5ATimer>1.5?(this.crumble5AState="broken",this.crumble5ARespawn=8,this.crumble5ATimer=0,e.state==="standing"&&(e.state="falling",e.vy=0)):this.crumble5ATimer>1.2&&(this.crumble5AState="shaking",this.shakeNoise=(Math.random()-.5)*4)):(this.crumble5ATimer=Math.max(0,this.crumble5ATimer-t*2),this.crumble5ATimer<1.2&&(this.crumble5AState="solid"))}handleInput(t){const e=this.jarrad,n=this.keys.ArrowLeft||this.keys.KeyA||this.mobileLeft,i=this.keys.ArrowRight||this.keys.KeyD||this.mobileRight,r=this.isJustPressed("ArrowUp")||this.isJustPressed("KeyW")||this.isJustPressed("Space")||this.mobileJump,o=this.keys.ArrowUp||this.keys.KeyW||this.keys.Space||this.mobileJump,a=this.keys.ArrowDown||this.keys.KeyS||this.mobileDrop;if((this.isJustPressed("ShiftLeft")||this.isJustPressed("ShiftRight")||this.mobileRewind)&&!this.mobileRewindFired&&e.rewindAvailable&&e.state!=="dead"&&(this.mobileRewind&&(this.mobileRewindFired=!0),e.rewindAvailable=!1,e.x=e.rewindX,e.y=e.rewindY,e.vx=0,e.vy=0,e.state="falling",e.invincTimer=Bm,e.wallRunTimer=0,e.wallRunUsed=!1,this.rewindFlashTimer=.3,this.ropeGrabbed=!1),e.state==="wall-running"){e.wallRunTimer-=t,e.wallRunTimer<=0&&(e.vx=-e.wallRunDir*Lm,e.vy=Im,e.state="jumping");return}if(e.state==="swinging"){if(r){const p=this.ropeAngVel,g=this.ropeAngle;e.vx=sn*p*Math.cos(g),e.vy=-sn*p*Math.sin(g),e.state="jumping",this.ropeGrabbed=!1}return}if((e.state==="jumping"||e.state==="falling")&&!this.ropeGrabbed){const p=e.x+e.w/2,g=e.y+e.h/2,x=bi+sn*Math.cos(this.ropeAngle);if(Math.abs(p-ts)<15&&g>bi&&g<x+30){const m=p-ts,f=g-bi;this.ropeAngle=Math.atan2(m,f),this.ropeAngVel=e.vx/sn,e.state="swinging",this.ropeGrabbed=!0,this.comboPhase===1&&(this.comboPhase=2,this.comboTimer=Qi);return}}if((e.state==="jumping"||e.state==="falling")&&!e.wallRunUsed){const p=e.x<30&&n,g=e.x+e.w>370&&i;(p||g)&&(e.state="wall-running",e.wallRunDir=g?1:-1,e.wallRunTimer=Dm,e.wallRunUsed=!0,e.vx=0,e.vy=-120)}const c=e.x+e.w/2,h=c>120&&c<145&&e.y>180&&e.y+e.h<555,u=c>260&&c<285&&e.y>180&&e.y+e.h<370,d=h||u;if((e.state==="standing"||e.state==="climbing"||e.state==="falling")&&d){if(o){e.isCrouching=!1,e.h=Oe,e.state="climbing",e.vy=-Tl,e.vx=0;return}if(a){e.isCrouching=!1,e.h=Oe,e.state="climbing",e.vy=Tl,e.vx=0;return}}if(e.state==="climbing"&&(!d||!o&&!a)&&(e.vy=0,e.state="falling"),e.state==="standing"){if(a&&!d){e.isCrouching||(e.isCrouching=!0,e.y+=Oe-Os,e.h=Os),e.vx=0;return}else e.isCrouching&&(e.isCrouching=!1,e.y-=Oe-Os,e.h=Oe);if(e.vx=0,n&&(e.vx=-Ns),i&&(e.vx=Ns),r){const p=Math.abs(e.vx)>Um?Nm:1;e.vy=El*p,e.state="jumping",e.isCrouching=!1,e.h=Oe,this.comboPhase=1,this.comboTimer=Qi,this.hasShimmied=!1}}else if(e.state==="jumping"||e.state==="falling")e.vx=0,n&&(e.vx=-Ns*.85),i&&(e.vx=Ns*.85);else if(e.state==="hanging"){e.vx=0;const p=this.getHangingPlatform();if(p){const g=p.type==="moving"?this.movingPlatX:p.baseX,x=g+p.width;if(n){if(e.x-=Al*t,e.x+e.w<g+4){e.state="falling",e.vy=0;return}!this.hasShimmied&&this.comboPhase===2&&(this.hasShimmied=!0,this.comboPhase=3,this.comboTimer=Qi)}if(i){if(e.x+=Al*t,e.x>x-4){e.state="falling",e.vy=0;return}!this.hasShimmied&&this.comboPhase===2&&(this.hasShimmied=!0,this.comboPhase=3,this.comboTimer=Qi)}}o&&(e.y-=18,e.vy=0,e.state="falling",this.comboPhase===3&&(this.comboPhase=4,this.comboFlashTimer=2,this.gameTime=Math.max(0,this.gameTime-3))),a&&(e.y+=5,e.state="falling")}}getHangingPlatform(){const t=this.jarrad,e=t.y;for(let n=0;n<this.platforms.length;n++){const i=this.platforms[n];if(i.type==="crumbling"&&this.crumble5AState==="broken")continue;const r=i.type==="moving"?this.movingPlatX:i.baseX,o=i.y+i.height;if(Math.abs(e-o)<12&&t.x+t.w>r+2&&t.x<r+i.width-2)return i}return null}isJustPressed(t){return!!this.keys[t]&&!this.prevKeys[t]}applyPhysics(t,e){const n=this.jarrad;if(n.state==="wall-running"){n.vy=-120,n.y+=n.vy*t,n.wallRunDir===1?n.x=Math.min(Ot-n.w-5,Math.max(Ot-n.w-30,n.x)):n.x=Math.max(5,Math.min(30,n.x)),this.frameCount%4===0&&this.spawnWallDust(n.wallRunDir===1?n.x+n.w:n.x,n.y+n.h/2);return}if(n.state==="swinging"){this.ropeAngVel+=-2.962962962962963*Math.sin(this.ropeAngle)*t,this.ropeAngVel*=.995,this.ropeAngle+=this.ropeAngVel*t,this.ropeAngle=Math.max(-Math.PI*.6,Math.min(Math.PI*.6,this.ropeAngle)),n.x=ts+sn*Math.sin(this.ropeAngle)-n.w/2,n.y=bi+sn*Math.cos(this.ropeAngle)-n.h;return}if(n.state==="climbing"){n.y+=n.vy*t;return}if(n.state!=="hanging"&&(n.state!=="standing"&&(n.vy=Math.min(n.vy+Cm*t,Rm)),this.windActive&&n.y<270&&n.state!=="standing"?n.vx-=30*t:this.windActive&&n.y<270&&n.state==="standing"&&(n.vx-=15*t),n.x+=n.vx*t,n.y+=n.vy*t,n.x=Math.max(5,Math.min(Ot-n.w-5,n.x)),n.state==="standing")){const i=this.platforms[4],r=n.y+n.h;if(Math.abs(r-i.y)<5&&n.x+n.w>this.movingPlatX&&n.x<this.movingPlatX+i.width){const o=this.movingPlatX-e;n.x+=o,n.x=Math.max(5,Math.min(Ot-n.w-5,n.x))}}}checkCollisions(){const t=this.jarrad;if(t.state==="dead"||t.state==="swinging"||t.state==="wall-running")return;this.keys.ArrowLeft||this.keys.KeyA||this.mobileLeft,this.keys.ArrowRight||this.keys.KeyD||this.mobileRight;const e=this.keys.ArrowUp||this.keys.KeyW||this.keys.Space||this.mobileJump;for(let n=0;n<this.platforms.length;n++){const i=this.platforms[n];if(i.type==="crumbling"&&this.crumble5AState==="broken")continue;const r=i.type==="moving"?this.movingPlatX:i.baseX,o=i.y,a=r+i.width,l=o+i.height,c=t.y+t.h,h=t.x,u=t.x+t.w;if((t.state==="jumping"||t.state==="falling"||t.state==="climbing")&&t.vy>=0&&c>=o&&c<=l+12&&u>r+2&&h<a-2){t.y-this.prevJarradY>Om&&this.spawnSplatParticles(t.x+t.w/2,t.y+t.h),t.y=o-t.h,t.vy=0,t.vx=0,t.state="standing",t.isCrouching&&(t.y+=Oe-Os),t.rewindX=t.x,t.rewindY=t.y,t.wallRunUsed=!1,this.comboPhase<4?(this.comboPhase=0,this.comboTimer=0):this.comboPhase===4&&(this.comboPhase=0);break}const d=t.y;if(t.state==="jumping"&&t.vy<0&&d<=l&&d>=o-10&&u>r+10&&h<a-10){t.vy=0,t.y=l,t.state="hanging",this.comboPhase===1&&(this.comboPhase=2,this.comboTimer=Qi,this.hasShimmied=!1);break}}if(t.state==="standing"){let n=!1;for(let i=0;i<this.platforms.length;i++){const r=this.platforms[i];if(r.type==="crumbling"&&this.crumble5AState==="broken")continue;const o=r.type==="moving"?this.movingPlatX:r.baseX,a=t.y+t.h;if(Math.abs(a-r.y)<5&&t.x+t.w>o+1&&t.x<o+r.width-1){n=!0;break}}n||(t.state="falling")}if(t.state==="standing"||t.state==="falling"){const n=t.y+t.h,i=this.platforms[1];if(Math.abs(n-i.y)<6){const r=Fn.x+Fn.w,o=t.x+t.w,a=t.x,l=t.y,c=o>Fn.x&&a<r,h=Fn.y;c&&l<h&&(!t.isCrouching&&Math.abs(t.vx)>=Fm&&e?(t.vy=El*.7,t.y-=6,t.state="jumping",this.vaultFlashTimer=1.2):t.isCrouching||(t.vx=t.vx!==0?-t.vx*.5:0,t.x+t.w/2<Fn.x+Fn.w/2?t.x=Fn.x-t.w-1:t.x=r+1))}}}checkDeath(){const t=this.jarrad;t.state!=="dead"&&(t.y+t.h>=640&&this.killJarrad(),t.y<-120&&(t.y=-60,t.vy=0,t.state="falling"))}killJarrad(){const t=this.jarrad;t.state!=="dead"&&(t.lives--,t.state="dead",t.deathTimer=1.2,t.rewindAvailable=!0,this.ropeGrabbed=!1,t.lives<=0&&setTimeout(()=>{this.retried?(this.phase="result",this.finishGame(!1)):this.phase="lost"},1300))}checkWin(){const t=this.jarrad;if(t.state==="dead")return;const e=this.platforms[7],n=t.y+t.h;Math.abs(n-e.y)<6&&t.x+t.w>e.baseX&&t.x<e.baseX+e.width&&(this.phase="won",setTimeout(()=>this.finishGame(!0),100))}getCurrentLevel(){const t=this.jarrad,e=t.y+t.h;let n=1,i=1/0;for(const r of this.platforms){const o=Math.abs(e-r.y);o<i&&(i=o,n=r.level)}return n}snapPigeonToPlatform(){const t=this.platforms[this.pigeon.platformIdx],e=t.type==="moving"?this.movingPlatX:t.baseX;this.pigeon.y=t.y-20,this.pigeon.x=Math.max(e+4,Math.min(e+t.width-20,this.pigeon.x))}updatePigeon(t){const e=this.pigeon;if(e.scaredTimer>0&&(e.scaredTimer-=t),e.flying){const n=e.flyTargetX-e.x,i=e.flyTargetY-e.y,r=Math.sqrt(n*n+i*i);r<10?(e.flying=!1,this.snapPigeonToPlatform()):(e.x+=n/r*120*t,e.y+=i/r*120*t);return}if(e.jumpTimer-=t,e.jumpTimer<=0){const n=this.getJarradPlatformIdx(),i=[1,2,3,4,5,6].filter(d=>!(d===e.platformIdx||d===5&&this.crumble5AState==="broken")),r=i.filter(d=>d!==n),o=r.length>0?r:i,a=o[Math.floor(Math.random()*o.length)],l=this.platforms[a],c=l.type==="moving"?this.movingPlatX:l.baseX,h=this.platforms[e.platformIdx].type==="moving"?this.movingPlatX:this.platforms[e.platformIdx].baseX;h<190&&c>215||h>215&&c<190||Math.random()<.3?(e.flying=!0,e.platformIdx=a,e.flyTargetX=c+20,e.flyTargetY=l.y-20,e.jumpTimer=5+Math.random()*3):(e.platformIdx=a,e.jumpTimer=5+Math.random()*3,this.snapPigeonToPlatform())}if(!e.flying){const n=this.platforms[e.platformIdx],i=n.type==="moving"?this.movingPlatX:n.baseX,r=i+n.width;e.x+=e.vx*t,e.x<=i+2&&(e.x=i+2,e.vx=60),e.x>=r-20&&(e.x=r-20,e.vx=-60),e.y=n.y-20+Math.sin(this.gameTime*3.5+e.platformIdx)*3}}getJarradPlatformIdx(){const t=this.jarrad,e=t.y+t.h;let n=0,i=1/0;for(let r=0;r<this.platforms.length;r++){const o=Math.abs(e-this.platforms[r].y);o<i&&(i=o,n=r)}return n}checkPigeonCollision(){const t=this.jarrad,e=this.pigeon;if(e.scaredTimer>0||e.flying||this.getJarradPlatformIdx()!==e.platformIdx)return;const i=t.y+t.h,r=this.platforms[e.platformIdx];Math.abs(i-r.y)>12||t.x<e.x+18&&t.x+t.w>e.x&&(t.invincTimer=Pm,e.scaredTimer=1.5,e.jumpTimer=0,t.lives--,t.lives<=0&&(t.state="dead",t.deathTimer=1.2,setTimeout(()=>{this.retried?(this.phase="result",this.finishGame(!1)):this.phase="lost"},1300)))}draw(){if(!this.ctx)return;const t=this.ctx;t.clearRect(0,0,Ot,ue),this.drawBackground(t),this.drawRope(t),this.drawScaffold(t),this.drawPlatforms(t),this.drawDropSheet(t),this.drawGapHint(t),this.drawWindEffect(t),this.drawTsuyoshi(t),this.drawPigeon(t),this.drawWallDust(t),this.drawSplatParticles(t),this.drawJarrad(t),this.drawHUD(t),this.drawFlashTexts(t),this.drawRewindFlash(t),this.phase==="won"?this.drawWinOverlay(t):this.phase==="lost"&&this.drawLostOverlay(t)}drawWallDust(t){for(const e of this.wallDustParticles)t.save(),t.globalAlpha=Math.max(0,e.alpha),t.fillStyle="#E8E0D0",t.beginPath(),t.arc(e.x,e.y,e.r,0,Math.PI*2),t.fill(),t.restore()}drawSplatParticles(t){for(const e of this.splatParticles)t.save(),t.globalAlpha=Math.max(0,e.alpha),t.fillStyle="#FFFFFF",t.beginPath(),t.arc(e.x,e.y,e.radius,0,Math.PI*2),t.fill(),t.restore()}drawFlashTexts(t){if(this.vaultFlashTimer>0){const e=Math.min(1,this.vaultFlashTimer/.4);t.save(),t.globalAlpha=e,t.fillStyle="#FFFF44",t.font="bold 28px system-ui, sans-serif",t.textAlign="center",t.shadowColor="#FF8800",t.shadowBlur=8,t.fillText("VAULT! 🏃",Ot/2,200),t.restore()}if(this.comboFlashTimer>0){const e=Math.min(1,this.comboFlashTimer/.5);t.save(),t.globalAlpha=e,t.fillStyle="#FF6600",t.font="bold 32px system-ui, sans-serif",t.textAlign="center",t.shadowColor="#FFDD00",t.shadowBlur=12,t.fillText("COMBO! 🔥 +3s",Ot/2,160),t.restore()}}drawRewindFlash(t){if(this.rewindFlashTimer<=0)return;const e=this.rewindFlashTimer/.3;t.save(),t.globalAlpha=e*.85,t.fillStyle="#FFFFFF",t.fillRect(0,0,Ot,ue),t.restore()}drawBackground(t){const e=t.createLinearGradient(0,0,0,ue);e.addColorStop(0,"#87CEEB"),e.addColorStop(1,"#C5E8F5"),t.fillStyle=e,t.fillRect(0,0,Ot,ue),t.fillStyle="#C2BEB6",this.roundRect(t,72,60,120,540,12),t.fill(),t.fillStyle="#CAC6BE",this.roundRect(t,212,60,120,540,12),t.fill(),t.fillStyle="rgba(0,0,0,0.07)",this.roundRect(t,72,60,18,540,10),t.fill(),this.roundRect(t,212,60,18,540,10),t.fill(),t.fillStyle="#FFFFFF",t.fillRect(0,635,Ot,8);const n=t.createLinearGradient(0,643,0,ue);n.addColorStop(0,"#48B8C8"),n.addColorStop(1,"#2A9AAD"),t.fillStyle=n,t.fillRect(0,643,Ot,ue-643),t.strokeStyle="rgba(255,255,255,0.25)",t.lineWidth=1.5;for(let i=0;i<5;i++){const r=660+i*8,o=Math.sin(this.gameTime*2+i)*5;t.beginPath(),t.moveTo(10+o,r),t.lineTo(Ot-10+o,r),t.stroke()}t.fillStyle="#8B7355",t.fillRect(0,625,Ot,15),t.fillStyle="#7A6345",t.fillRect(0,627,Ot,4)}drawRope(t){const e=ts,n=bi,i=this.ropeAngle,r=e+sn*Math.sin(i),o=n+sn*Math.cos(i);t.save(),t.strokeStyle="#8B5A2B",t.lineWidth=5,t.lineCap="round",t.beginPath();const a=(e+r)/2+Math.sin(i)*10,l=(n+o)/2+20;t.moveTo(e,n),t.quadraticCurveTo(a,l,r,o),t.stroke(),t.fillStyle="#6B4520",t.strokeStyle="#4A3010",t.lineWidth=1.5,t.beginPath(),t.arc(r,o,5,0,Math.PI*2),t.fill(),t.stroke(),t.restore()}drawScaffold(t){const e=(n,i)=>{t.strokeStyle="#B8B8B8",t.lineWidth=5,t.beginPath(),t.moveTo(n,80),t.lineTo(n,560),t.stroke(),t.beginPath(),t.moveTo(i,80),t.lineTo(i,560),t.stroke();const a=[80,185,270,360,450,540,560];t.strokeStyle="#A0A0A0",t.lineWidth=2;for(let l=0;l<a.length-1;l++){const c=a[l],h=a[l+1];t.beginPath(),t.moveTo(n,c),t.lineTo(i,h),t.stroke(),t.beginPath(),t.moveTo(i,c),t.lineTo(n,h),t.stroke()}};e(80,180),e(220,320),this.drawLadder(t,130,185,540),this.drawLadder(t,270,185,360)}drawLadder(t,e,n,i){t.strokeStyle="#909090",t.lineWidth=2.5,t.beginPath(),t.moveTo(e,n),t.lineTo(e,i),t.stroke(),t.lineWidth=1.5,t.strokeStyle="#A0A0A0";for(let r=n;r<=i;r+=20)t.beginPath(),t.moveTo(e-8,r),t.lineTo(e+8,r),t.stroke()}drawPlatforms(t){for(let e=0;e<this.platforms.length;e++){const n=this.platforms[e];if(n.type==="crumbling"&&this.crumble5AState==="broken")continue;const i=n.type==="moving"?this.movingPlatX:n.baseX;let r=0;n.type==="crumbling"&&this.crumble5AState==="shaking"&&(r=this.shakeNoise);const o=i+r,a=n.y,l=n.width,c=n.height;if(t.save(),n.type==="win"){const h=t.createLinearGradient(o,a,o+l,a);h.addColorStop(0,"#FFD700"),h.addColorStop(1,"#FFA500"),t.fillStyle=h}else n.type==="crumbling"?t.fillStyle="#C8A040":n.type==="moving"?t.fillStyle="#8080D0":t.fillStyle="#B0B0B0";this.roundRect(t,o,a,l,c,2),t.fill(),t.strokeStyle=n.type==="win"?"#FFE57A":n.type==="crumbling"?"#E8C060":"#D8D8D8",t.lineWidth=1.5,t.beginPath(),t.moveTo(o+3,a+1.5),t.lineTo(o+l-3,a+1.5),t.stroke(),n.type==="crumbling"&&(t.strokeStyle="#7A5010",t.lineWidth=1.5,t.beginPath(),t.moveTo(o+20,a+1),t.lineTo(o+28,a+7),t.lineTo(o+35,a+2),t.stroke(),t.beginPath(),t.moveTo(o+55,a+2),t.lineTo(o+60,a+7),t.lineTo(o+68,a+1),t.stroke(),t.beginPath(),t.moveTo(o+80,a+3),t.lineTo(o+87,a+6),t.lineTo(o+93,a+1),t.stroke()),n.type==="moving"&&(t.strokeStyle="#F0F080",t.lineWidth=1.5,t.setLineDash([4,3]),t.strokeRect(o,a,l,c),t.setLineDash([]),t.fillStyle="rgba(255,255,200,0.7)",t.font="bold 7px system-ui",t.textAlign="center",t.fillText("↔ MOVING",o+l/2,a+c-1)),n.type==="win"&&(t.fillStyle="#333",t.font="bold 9px system-ui, sans-serif",t.textAlign="center",t.fillText("🏁 DELIVER",o+l/2,a+6)),t.restore()}}drawDropSheet(t){const{x:e,y:n,w:i,h:r}=Fn;t.save(),t.fillStyle="#F0EDE5",t.strokeStyle="#C8C0A0",t.lineWidth=1,t.beginPath(),t.moveTo(e,n),t.lineTo(e+i,n),t.lineTo(e+i,n+r-4),t.quadraticCurveTo(e+i*.75,n+r+3,e+i*.5,n+r),t.quadraticCurveTo(e+i*.25,n+r-3,e,n+r-4),t.closePath(),t.fill(),t.stroke(),t.strokeStyle="rgba(0,0,0,0.12)",t.lineWidth=1;for(let o=1;o<4;o++){const a=e+i/4*o;t.beginPath(),t.moveTo(a,n),t.lineTo(a+2,n+r-6),t.stroke()}t.fillStyle="#888866",t.font="bold 7px system-ui",t.textAlign="center",t.fillText("DUCK ↓ / VAULT →",e+i/2,n-3),t.restore()}drawGapHint(t){if(!this.showGapHint)return;const e=Math.min(1,this.gapHintTimer/2)*Math.abs(Math.sin(this.gameTime*3));t.save(),t.globalAlpha=e,t.fillStyle="#FFEE44",t.font="bold 11px system-ui",t.textAlign="center",t.fillText("→ JUMP! →",200,400),t.strokeStyle="#FFEE44",t.lineWidth=2,t.beginPath(),t.moveTo(183,390),t.lineTo(217,390),t.moveTo(210,385),t.lineTo(217,390),t.lineTo(210,395),t.stroke(),t.restore()}drawWindEffect(t){if(!(!this.windActive||this.windAlpha<=0)){t.save(),t.globalAlpha=this.windAlpha*.35,t.strokeStyle="#AADDFF",t.lineWidth=2;for(let e=0;e<8;e++){const n=130+e*30+Math.sin(this.gameTime*4+e)*5,i=this.gameTime*120%60,r=30+Math.random()*40;t.beginPath(),t.moveTo(Ot-i,n),t.lineTo(Ot-i-r,n),t.stroke()}t.restore()}}drawTsuyoshi(t){t.fillStyle="#1A1A18",t.fillRect(81,575,18,30),t.fillStyle="#C8A060",t.save(),t.translate(81,585),t.rotate(-.6),t.fillRect(-4,-18,7,20),t.restore(),t.save(),t.translate(99,585),t.rotate(.3),t.fillRect(-3,-16,7,18),t.restore(),t.fillStyle="#C8A060",this.roundRect(t,83,561,14,14,3),t.fill(),t.fillStyle="#0A0A08",t.fillRect(88,549,4,14),t.fillRect(89,543,2,8),t.fillStyle="#0A0A08",t.fillRect(85,567,3,3),t.fillRect(92,567,3,3);const i=this.tsuyoshiSpeech,r=50,o=525,a=80,l=22;t.fillStyle="#FFFFFFEE",this.roundRect(t,r,o,a,l,6),t.fill(),t.strokeStyle="#CCCCCC",t.lineWidth=1,t.stroke(),t.fillStyle="#FFFFFFEE",t.beginPath(),t.moveTo(85,o+l),t.lineTo(95,o+l),t.lineTo(90,o+l+8),t.closePath(),t.fill(),t.fillStyle="#333333",t.font="bold 8px system-ui, sans-serif",t.textAlign="center",t.fillText(i,r+a/2,o+15)}drawJarrad(t){const e=this.jarrad;if(e.invincTimer>0&&Math.floor(e.invincTimer*10)%2===0&&(t.globalAlpha=.4),e.state==="dead"){t.save(),t.translate(e.x+e.w/2,e.y+e.h),t.rotate(Math.PI/2),this.drawJarradShape(t,0,-Oe/2,!1,!1),t.fillStyle="rgba(70,130,180,0.6)",t.beginPath(),t.arc(-10,8,12,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(10,4,8,0,Math.PI*2),t.fill(),t.restore(),t.globalAlpha=1;return}if(e.state==="swinging"){const i=ts+sn*Math.sin(this.ropeAngle)-e.w/2,r=bi+sn*Math.cos(this.ropeAngle);t.save(),t.translate(i+e.w/2,r),t.rotate(this.ropeAngle*.3),this.drawJarradShape(t,-e.w/2,-Oe,!1,!1),t.restore()}else if(e.state==="wall-running"){t.save(),t.translate(e.x+e.w/2,e.y+e.h/2);const i=e.wallRunDir;t.rotate(Math.PI/6*i),this.drawJarradShape(t,-e.w/2,-e.h/2,!1,!1),t.restore()}else if(e.state==="hanging"){t.save(),t.translate(e.x+e.w/2,e.y),this.drawJarradShape(t,-e.w/2,0,!1,!1);const i=e.w/2+2,r=Oe*.6;t.save(),t.translate(i,r);const o=Math.sin(this.gameTime*4)*.3;t.rotate(o+e.bucketAngle),t.strokeStyle="#888",t.lineWidth=1,t.beginPath(),t.moveTo(0,0),t.lineTo(0,8),t.stroke(),t.fillStyle="#C49A7A",t.fillRect(-5,8,10,10),t.strokeStyle="#A07050",t.lineWidth=1,t.strokeRect(-5,8,10,10),t.fillStyle="#F0ECE4",t.fillRect(-3,9,6,4),t.restore(),t.restore()}else{const i=e.state==="standing"&&Math.abs(e.vx)>10;this.drawJarradShape(t,e.x,e.y,e.isCrouching,i)}if(t.globalAlpha=1,e.state!=="swinging"&&e.state!=="hanging"){const i=e.x+e.w+2,r=e.y+(e.isCrouching?10:20);t.save(),t.translate(i,r),t.rotate(e.bucketAngle),t.strokeStyle="#888",t.lineWidth=1,t.beginPath(),t.moveTo(0,0),t.lineTo(0,8),t.stroke(),t.fillStyle="#C49A7A",t.fillRect(-5,8,10,10),t.strokeStyle="#A07050",t.lineWidth=1,t.strokeRect(-5,8,10,10),t.fillStyle="#F0ECE4",t.fillRect(-3,9,6,4),t.restore()}}drawJarradShape(t,e,n,i,r){if(i){t.fillStyle="#111111",t.fillRect(e,n+8,18,14),t.fillStyle="#FFFFFF",t.beginPath(),t.arc(e+5,n+12,2,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(e+13,n+16,2,0,Math.PI*2),t.fill(),t.fillStyle="#C8A080",this.roundRect(t,e+2,n,14,12,3),t.fill(),t.fillStyle="#1E1008",t.fillRect(e+1,n-5,16,6),t.strokeStyle="#1A1A1A",t.lineWidth=1.5,t.strokeRect(e+3,n+3,4,3),t.strokeRect(e+9,n+3,4,3),t.fillStyle="#2A1808",t.fillRect(e+4,n+9,9,3),t.fillStyle="#2A2A2A",t.fillRect(e+1,n+22,7,5),t.fillRect(e+10,n+22,7,5);return}t.fillStyle="#111111",t.fillRect(e,n+14,18,30),t.fillStyle="#FFFFFF",t.beginPath(),t.arc(e+5,n+22,2.5,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(e+12,n+28,2,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(e+7,n+35,1.5,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(e+14,n+19,2,0,Math.PI*2),t.fill(),t.fillStyle="#C8A080",this.roundRect(t,e+2,n,14,14,3),t.fill(),t.fillStyle="#1E1008",t.fillRect(e+1,n-7,16,8),t.fillRect(e+2,n-9,5,4),t.fillRect(e+10,n-8,4,3),t.strokeStyle="#1A1A1A",t.lineWidth=1.5,t.strokeRect(e+3,n+4,4,3),t.strokeRect(e+9,n+4,4,3),t.beginPath(),t.moveTo(e+7,n+5.5),t.lineTo(e+9,n+5.5),t.stroke(),t.fillStyle="#1A1A1A",t.fillRect(e+4,n+5,2,2),t.fillRect(e+10,n+5,2,2),t.fillStyle="#2A1808",t.fillRect(e+4,n+10,9,4),t.fillStyle="#2A2A2A",r?Math.floor(this.frameCount/8)%2===0?(t.fillRect(e+1,n+38,6,14),t.fillRect(e+11,n+44,6,8)):(t.fillRect(e+1,n+44,6,8),t.fillRect(e+11,n+38,6,14)):(t.fillRect(e+2,n+44,6,8),t.fillRect(e+10,n+44,6,8))}drawPigeon(t){const e=this.pigeon,n=e.vx>=0?1:-1;if(t.save(),t.translate(e.x+9,e.y+10),n<0&&t.scale(-1,1),t.fillStyle="#888888",this.roundRect(t,-8,-6,16,12,6),t.fill(),t.fillStyle="#666666",this.roundRect(t,-6,-4,12,6,4),t.fill(),e.flying){const i=Math.sin(this.gameTime*15)*.4;t.save(),t.rotate(i),t.fillStyle="#777777",t.fillRect(-8,-10,16,5),t.restore()}else{const i=Math.sin(this.gameTime*6)*.12;t.save(),t.rotate(i),t.fillStyle="#777777",t.fillRect(-8,-8,16,4),t.restore()}t.fillStyle="#AAAAAA",this.roundRect(t,4,-10,10,9,4),t.fill(),t.fillStyle="#FF4400",t.beginPath(),t.arc(11,-7,2,0,Math.PI*2),t.fill(),t.fillStyle="#000",t.beginPath(),t.arc(11,-7,1,0,Math.PI*2),t.fill(),t.fillStyle="#CC9900",t.beginPath(),t.moveTo(14,-6),t.lineTo(18,-4),t.lineTo(14,-3),t.closePath(),t.fill(),t.strokeStyle="#CC9900",t.lineWidth=1.5,t.beginPath(),t.moveTo(-2,6),t.lineTo(-2,12),t.stroke(),t.beginPath(),t.moveTo(3,6),t.lineTo(3,12),t.stroke(),t.restore()}drawHUD(t){t.fillStyle="rgba(0,0,0,0.55)",t.fillRect(0,0,Ot,36),t.textAlign="left";for(let i=0;i<3;i++)this.drawHeart(t,8+i*22,18,8,i<this.jarrad.lives?"#FF4060":"#555555");t.font="14px system-ui",t.textAlign="left",t.globalAlpha=this.jarrad.rewindAvailable?1:.35,t.fillText("🗡️",72,22),t.globalAlpha=1,t.fillStyle="#FFFFFF",t.font="bold 13px system-ui, sans-serif",t.textAlign="center",t.fillText(`LEVEL ${this.jarrad.currentLevel}/6`,Ot/2,22);const e=Math.floor(this.gameTime/60),n=Math.floor(this.gameTime%60);if(t.textAlign="right",t.fillStyle="#FFFFFF",t.fillText(`${String(e).padStart(2,"0")}:${String(n).padStart(2,"0")}`,Ot-8,22),this.windActive&&(t.save(),t.globalAlpha=this.windAlpha,t.font="14px system-ui",t.textAlign="right",t.fillText("💨",Ot-8,35),t.restore()),this.jarrad.state==="wall-running"&&(t.save(),t.fillStyle="#44FFAA",t.font="bold 11px system-ui",t.textAlign="center",t.fillText("🏃 WALL RUN!",Ot/2,34),t.restore()),this.crumble5AState==="shaking"&&(t.save(),t.fillStyle="#FF8800",t.font="bold 10px system-ui",t.textAlign="center",t.fillText("⚠ PLANK BREAKING!",Ot/2,34),t.restore()),this.comboPhase>0&&this.comboPhase<4){t.save(),t.textAlign="left",t.font="9px system-ui",t.fillStyle="#AAFFAA";const i=["↑J","🤲G","↔S","↑P"];let r=4;for(let o=0;o<4;o++)t.globalAlpha=o<this.comboPhase?1:.3,t.fillText(i[o],r,ue-8),r+=28;t.restore()}this.drawMiniMap(t)}drawMiniMap(t){const e=Ot-28,n=42,i=22,r=120;t.fillStyle="rgba(0,0,0,0.35)",this.roundRect(t,e-2,n-2,i+4,r+4,4),t.fill();const o=i/Ot,a=r/700;for(let u=0;u<this.platforms.length;u++){const d=this.platforms[u];if(d.type==="crumbling"&&this.crumble5AState==="broken")continue;const p=d.type==="moving"?this.movingPlatX:d.baseX,g=e+p*o,x=n+d.y*a,m=d.width*o;let f="#A0A0A0";d.type==="win"&&(f="#FFD700"),d.type==="crumbling"&&(f="#C8A040"),d.type==="moving"&&(f="#8080D0"),t.fillStyle=f,t.fillRect(g,x,Math.max(m,2),2)}const l=this.jarrad,c=e+(l.x+l.w/2)*o,h=n+(l.y+l.h)*a;t.fillStyle="#00FF88",t.beginPath(),t.arc(c,h,2.5,0,Math.PI*2),t.fill()}drawHeart(t,e,n,i,r){t.fillStyle=r,t.beginPath(),t.moveTo(e,n+i*.4),t.bezierCurveTo(e,n-i*.6,e-i*1.2,n-i*.6,e-i*1.2,n),t.bezierCurveTo(e-i*1.2,n+i*.7,e,n+i*1.2,e,n+i*1.4),t.bezierCurveTo(e,n+i*1.2,e+i*1.2,n+i*.7,e+i*1.2,n),t.bezierCurveTo(e+i*1.2,n-i*.6,e,n-i*.6,e,n+i*.4),t.closePath(),t.fill()}drawWinOverlay(t){t.fillStyle="rgba(0,0,0,0.75)",t.fillRect(0,0,Ot,ue),t.textAlign="center",t.font="bold 52px system-ui",t.fillStyle="#FFD700",t.fillText("🪣 DELIVERED!",Ot/2,ue/2-40),t.font="bold 22px system-ui",t.fillStyle="#5EDB7D",t.fillText("🏆 Bucket reached the top!",Ot/2,ue/2+10)}drawLostOverlay(t){var e,n;if(t.fillStyle="rgba(0,0,0,0.80)",t.fillRect(0,0,Ot,ue),t.textAlign="center",t.font="bold 48px system-ui",t.fillStyle="#F07070",t.fillText("💦 SPLAT!",Ot/2,ue/2-60),t.font="bold 16px system-ui",t.fillStyle="#FFFFFF",t.fillText("Jarrad's in the pool.",Ot/2,ue/2-20),!this.retried){t.fillStyle="#C1666B",this.roundRect(t,Ot/2-70,ue/2+10,140,44,10),t.fill(),t.fillStyle="#FFFFFF",t.font="bold 18px system-ui",t.fillText("🔄 RETRY",Ot/2,ue/2+38);const i=r=>{const o=this.canvas.getBoundingClientRect();let a,l;r instanceof MouseEvent?(a=(r.clientX-o.left)*(Ot/o.width),l=(r.clientY-o.top)*(ue/o.height)):(a=(r.changedTouches[0].clientX-o.left)*(Ot/o.width),l=(r.changedTouches[0].clientY-o.top)*(ue/o.height)),a>Ot/2-70&&a<Ot/2+70&&l>ue/2+10&&l<ue/2+54&&(this.canvas.removeEventListener("click",i),this.canvas.removeEventListener("touchend",i),this.retried=!0,this.jarrad.lives=3,this.initGame())};(e=this.canvas)==null||e.addEventListener("click",i,{once:!1}),(n=this.canvas)==null||n.addEventListener("touchend",i,{once:!1})}}finishGame(t){this.phase="result";const e=this.jarrad.lives;let n,i,r;t?e>=3?(n=100,i=1,r="Jarrad didn't spill a drop. Tsuyoshi's still shaking though."):e===2?(n=80,i=.8,r="A pigeon got involved. Classic site visit."):(n=60,i=.6,r="The bucket made it. Jarrad's ego didn't."):(n=0,i=0,r="Jarrad's in the pool. The Marbellino too. Phil's invoice is on the way."),this.ctx&&this.drawResultScreen(this.ctx,t,n,r),setTimeout(()=>{var o;return(o=this.onComplete)==null?void 0:o.call(this,{score:n,qualityPct:i,message:r})},3e3)}drawResultScreen(t,e,n,i){t.fillStyle="rgba(0,0,0,0.82)",t.fillRect(0,0,Ot,ue),t.textAlign="center",t.font="72px system-ui",t.fillText(e?"🏆":"💀",Ot/2,ue/2-90);const r=n>=75?"#5EDB7D":n>=50?"#F7C948":"#F07070";t.fillStyle=r,t.font="bold 64px system-ui, sans-serif",t.fillText(`${n}%`,Ot/2,ue/2-10),t.fillStyle="#FFFFFF",t.font="15px system-ui, sans-serif",this.wrapText(t,i,Ot/2,ue/2+40,340,22)}wrapText(t,e,n,i,r,o){const a=e.split(" ");let l="",c=i;for(const h of a){const u=l+h+" ";t.measureText(u).width>r&&l!==""?(t.fillText(l,n,c),l=h+" ",c+=o):l=u}t.fillText(l,n,c)}roundRect(t,e,n,i,r,o){t.beginPath(),t.moveTo(e+o,n),t.lineTo(e+i-o,n),t.quadraticCurveTo(e+i,n,e+i,n+o),t.lineTo(e+i,n+r-o),t.quadraticCurveTo(e+i,n+r,e+i-o,n+r),t.lineTo(e+o,n+r),t.quadraticCurveTo(e,n+r,e,n+r-o),t.lineTo(e,n+o),t.quadraticCurveTo(e,n,e+o,n),t.closePath()}}class Gm{constructor(){U(this,"overlay");U(this,"active",!1);U(this,"trowelingGame",null);U(this,"scaffoldGame",null);U(this,"safetyTimer",null);this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,e.addEventListener("click",()=>{this.stop(),t({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(e),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),t({score:70,qualityPct:.7,message:"Time up!"}))},6e4),setTimeout(()=>{if(this.active)try{this.trowelingGame=new Am,this.trowelingGame.mount(this.overlay,n=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),t(n)})}catch(n){console.error("TrowelingGame init failed:",n);const i=document.createElement("div");i.style.cssText=`
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
    `,e.addEventListener("click",()=>{this.stop(),t({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(e),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),t({score:50,qualityPct:.5,message:"Time up on the scaffold!"}))},9e4),setTimeout(()=>{if(this.active)try{this.scaffoldGame=new km,this.scaffoldGame.mount(this.overlay,n=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),t(n)})}catch(n){console.error("ScaffoldGame init failed:",n);const i=document.createElement("div");i.style.cssText=`
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; height:100%; color:#fff;
          font-family:system-ui,sans-serif; gap:24px; padding:40px;
          text-align:center;
        `,i.innerHTML=`
          <div style="font-size:60px">🪣</div>
          <div style="font-size:30px; font-weight:800;">SCAFFOLD CLIMBED!</div>
          <div style="font-size:16px; opacity:0.7;">Tap DONE to collect your pay</div>
        `,this.overlay.appendChild(i)}},120)}startRandom(t){Math.random()<.5?this.startTroweling(t):this.startScaffold(t)}stop(){this.safetyTimer&&(clearTimeout(this.safetyTimer),this.safetyTimer=null),this.trowelingGame&&(this.trowelingGame.unmount(),this.trowelingGame=null),this.scaffoldGame&&(this.scaffoldGame.unmount(),this.scaffoldGame=null),this.overlay.style.display="none",this.overlay.innerHTML="",this.active=!1}}class Hm{constructor(){U(this,"overlay",null)}show(){if(this.overlay){this.refresh(),this.overlay.style.display="flex";return}this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,this.overlay.appendChild(i);const r=document.createElement("div");r.id="gallery-grid",r.style.cssText=`
      width: 100%; max-width: 600px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      padding: 8px 20px 32px;
      box-sizing: border-box;
    `,this.overlay.appendChild(r);const o=document.createElement("div");o.id="gallery-encourage",o.style.cssText=`
      width: 100%; max-width: 600px;
      text-align: center;
      color: rgba(200,184,154,0.7);
      font-size: clamp(13px, 3vw, 16px);
      padding: 0 20px 40px;
      box-sizing: border-box;
    `,this.overlay.appendChild(o),this.overlay.addEventListener("click",a=>{a.target===this.overlay&&this.hide()}),document.body.appendChild(this.overlay),this.refresh()}refresh(){if(!this.overlay)return;const t=ls(),e=t.length,n=ti.length,i=this.overlay.querySelector("#gallery-progress-wrap");if(i){i.innerHTML="";const a=document.createElement("div");a.style.cssText=`
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
      `,l.appendChild(c),i.appendChild(l)}const r=this.overlay.querySelector("#gallery-grid");r&&(r.innerHTML="",ti.forEach(a=>{const l=t.includes(a.id),c=document.createElement("div");if(c.style.cssText=`
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
          `,c.appendChild(h);const u=document.createElement("div");u.style.cssText=`
            position: absolute; bottom: 0; left: 0; right: 0;
            padding: 8px 10px 10px;
            background: linear-gradient(transparent, rgba(0,0,0,0.85));
            color: #fff; font-size: clamp(11px,2.5vw,14px);
            font-weight: 700; text-align: center;
          `,u.textContent=a.name,c.appendChild(u)}else{const h=document.createElement("div");h.style.cssText=`
            width: 100%; height: 100%;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            gap: 8px;
          `,h.innerHTML=`
            <div style="font-size: clamp(24px,8vw,40px); opacity:0.35;">🔒</div>
            <div style="color:rgba(255,255,255,0.25); font-size:clamp(12px,3vw,16px); font-weight:700;">???</div>
          `,c.appendChild(h)}r.appendChild(c)}));const o=this.overlay.querySelector("#gallery-encourage");o&&(e>=n?o.textContent="🏆 You've scraped them all. Matt's proud. Sort of.":e>=6?o.textContent="🔥 Almost there — keep scraping!":e>=3?o.textContent="💪 Nice collection forming. More plastering to do!":e===0?o.textContent="🪣 No photos yet — complete jobs to reveal TEM work!":o.textContent="✨ Keep scraping to unlock all 8 TEM photos!")}hide(){this.overlay&&(this.overlay.style.display="none")}}const Cl=[15087942,2201331,16757504,5025616,10233776,16739125];function Vm(s){const t=new Dt,e=new Z({color:s}),n=new N(new et(3.5,1.2,6.5),e);n.position.set(0,.6,0),n.castShadow=!0,t.add(n);const i=new Z({color:s}),r=new N(new et(2.5,.9,3.5),i);r.position.set(0,1.65,0),r.castShadow=!0,t.add(r);const o=new Z({color:1118481}),a=[[-1.8,.4,2.2],[1.8,.4,2.2],[-1.8,.4,-2.2],[1.8,.4,-2.2]];for(const[u,d,p]of a){const g=new N(new Qt(.5,.5,.4,8),o);g.rotation.z=Math.PI/2,g.position.set(u,d,p),g.castShadow=!0,t.add(g)}const l=new Z({color:3359829}),c=new N(new et(2.3,.7,.1),l);c.position.set(0,1.4,-3.3),t.add(c);const h=new N(new et(2.3,.7,.1),l);return h.position.set(0,1.4,3.3),t.add(h),t}function Wm(s,t){return s==="x"?t===1?-Math.PI/2:Math.PI/2:t===1?Math.PI:0}class Xm{constructor(t){U(this,"cars",[]);U(this,"scene");this.scene=t,this._spawn()}_spawn(){const t=[-200,-160,-120,-80,-40,0,40,80,120,160,200],e=n=>{const i=Cl[Math.floor(Math.random()*Cl.length)],r=Vm(i),o=t[Math.floor(Math.random()*t.length)],a=Math.random()>.5?2:-2,l=10+Math.random()*10,c=Math.random()>.5?1:-1,h=-200+Math.random()*400;r.rotation.y=Wm(n,c);const u={group:r,axis:n,roadPos:o,laneOffset:a,speed:l,dir:c,pos:h};this.cars.push(u),this.scene.add(r),this._applyPosition(u)};for(let n=0;n<14;n++)e("z");for(let n=0;n<14;n++)e("x")}_applyPosition(t){t.axis==="x"?t.group.position.set(t.pos,0,t.roadPos+t.laneOffset):t.group.position.set(t.roadPos+t.laneOffset,0,t.pos)}update(t,e,n){for(const i of this.cars)i.pos+=i.dir*i.speed*t,i.pos>235&&(i.pos=-235),i.pos<-235&&(i.pos=235),this._applyPosition(i)}resolveVan(t,e,n=1.8){let i=t,r=e,o=!1;for(const a of this.cars){const l=a.group.position.x,c=a.group.position.z,h=(a.axis==="x"?3.25:1.75)+n,u=(a.axis==="x"?1.75:3.25)+n,d=i-l,p=r-c;if(Math.abs(d)<h&&Math.abs(p)<u){const g=h-Math.abs(d),x=u-Math.abs(p);g<x?i+=d<0?-g:g:r+=p<0?-x:x,o=!0}}return{x:i,z:r,hit:o}}checkVanCollision(t,e){const n=this.resolveVan(t,e);return{hit:n.hit,pushX:n.x-t,pushZ:n.z-e}}}const Rl=[16032353,15167313,2792847,2508371,15320170,11066076,16739179,7029286],Ym=16767916,qm=40,Pl=8;function jm(s){const t=new Dt,e=new Z({color:s}),n=new Z({color:Ym}),i=new Z({color:s}),r=new N(new Qt(.3,.35,1.1,7),e);r.position.set(0,.55,0),t.add(r);const o=new N(new vn(.28,6,5),n);o.position.set(0,1.28,0),t.add(o);const a=new N(new et(.15,.65,.15),e);a.position.set(-.45,.75,0),a.rotation.z=.15,t.add(a);const l=new N(new et(.15,.65,.15),e);l.position.set(.45,.75,0),l.rotation.z=-.15,t.add(l);const c=new N(new et(.18,.55,.18),i);c.position.set(-.18,0,.05),t.add(c);const h=new N(new et(.18,.55,.18),i);return h.position.set(.18,0,-.05),t.add(h),{group:t,leftArm:a,rightArm:l,leftLeg:c,rightLeg:h}}class $m{constructor(t){U(this,"pedestrians",[]);U(this,"scene");this.scene=t,this._spawn()}_spawn(){const t=[];for(let n=-200;n<=200;n+=40)t.push(n);const e=n=>{const i=Rl[Math.floor(Math.random()*Rl.length)],{group:r,leftArm:o,rightArm:a,leftLeg:l,rightLeg:c}=jm(i),h=t[Math.floor(Math.random()*t.length)],u=Math.random()>.5?5:-5,d=h+u,p=[];for(let B=-240;B<240;B+=40)p.push(B);const g=p[Math.floor(Math.random()*p.length)],x=g+Pl/2,m=g+qm-Pl/2,f=x+Math.random()*(m-x),S=Math.random()>.5?1:-1,w=2+Math.random()*1.5,y={group:r,axis:n,roadPos:d,segStart:x,segEnd:m,pos:f,dir:S,speed:w,scattering:!1,scatterTimer:0,scatterDirX:0,scatterDirZ:0,walkCycle:Math.random()*Math.PI*2,leftArm:o,rightArm:a,leftLeg:l,rightLeg:c};this.pedestrians.push(y),this.scene.add(r),this._applyPosition(y),this._applyFacing(y)};for(let n=0;n<20;n++)e("x");for(let n=0;n<20;n++)e("z")}_applyPosition(t){t.axis==="x"?t.group.position.set(t.pos,0,t.roadPos):t.group.position.set(t.roadPos,0,t.pos)}_applyFacing(t){if(t.scattering){t.group.rotation.y=Math.atan2(t.scatterDirX,t.scatterDirZ);return}t.axis==="x"?t.group.rotation.y=t.dir===1?-Math.PI/2:Math.PI/2:t.group.rotation.y=t.dir===1?Math.PI:0}update(t,e,n){for(const i of this.pedestrians){const r=i.group.position.x,o=i.group.position.z,a=r-e,l=o-n,c=Math.sqrt(a*a+l*l);if(!i.scattering&&c<7){i.scattering=!0,i.scatterTimer=2.5;const d=Math.max(c,.01);i.scatterDirX=a/d,i.scatterDirZ=l/d}i.scattering?(i.group.position.x+=i.scatterDirX*12*t,i.group.position.z+=i.scatterDirZ*12*t,i.scatterTimer-=t,i.scatterTimer<=0&&(i.scattering=!1,i.axis==="x"?i.pos=Math.max(i.segStart,Math.min(i.segEnd,i.group.position.x)):i.pos=Math.max(i.segStart,Math.min(i.segEnd,i.group.position.z)),this._applyPosition(i))):(i.pos+=i.dir*i.speed*t,i.pos>=i.segEnd?(i.pos=i.segEnd,i.dir=-1):i.pos<=i.segStart&&(i.pos=i.segStart,i.dir=1),this._applyPosition(i)),this._applyFacing(i);const h=i.scattering?12:i.speed;i.walkCycle+=h*t*2;const u=Math.sin(i.walkCycle);i.leftArm.rotation.z=u*.4+.15,i.rightArm.rotation.z=-u*.4-.15,i.leftLeg.rotation.x=u*.5,i.rightLeg.rotation.x=-u*.5}}}async function Jm(){const s=new W0;await s.init();const t=new X0(s.scene);t.spawnCrewAtCityPositions();const e=new hm,n=new Y0(s.scene),i=new dm,r=new ym,o=new Z0(n,e,S=>{i.triggerBump(S)},s.collisionWorld),a=new Zs,l=new Fo(s.scene),c=new gm(S=>{a.acceptJob(S),l.setTarget(Zs.WORKSHOP_POS),c.hide(),r.setActiveJob(S,1),r.updateCrewStatus([],[],!1)});i.onSpill=S=>{a.money=Math.max(0,a.money-S),r.updateMoney(a.money),r.showSpillPenalty(S)};const h=document.createElement("button");h.textContent="📋 JOBS",h.style.cssText=`
    position: fixed;
    bottom: 20px;
    right: 20px;
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
  `,h.addEventListener("pointerenter",()=>{h.style.background="rgba(212, 120, 125, 0.95)",h.style.transform="translateY(-2px)"}),h.addEventListener("pointerleave",()=>{h.style.background="rgba(193, 102, 107, 0.9)",h.style.transform=""}),h.addEventListener("click",()=>{c.isVisible()?c.hide():c.show(a.getAvailableJobs())}),document.body.appendChild(h);const u=new Xm(s.scene),d=new $m(s.scene),p=new Gm,g=new Hm,x=document.createElement("button");x.textContent="📸",x.title="Photo Collection",x.style.cssText=`
    position: fixed; bottom: 20px; left: 20px;
    z-index: 1000; background: rgba(70,70,70,0.9);
    color: #fff; border: none; border-radius: 50%;
    width: 52px; height: 52px; font-size: 22px;
    cursor: pointer; touch-action: manipulation;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    transition: background 0.15s, transform 0.1s;
  `,x.addEventListener("pointerenter",()=>{x.style.background="rgba(100,100,100,0.95)",x.style.transform="scale(1.1)"}),x.addEventListener("pointerleave",()=>{x.style.background="rgba(70,70,70,0.9)",x.style.transform=""}),x.addEventListener("click",()=>g.show()),document.body.appendChild(x);let m=!1;const f=document.createElement("div");f.style.cssText=`
    position:fixed; top:8px; left:8px; z-index:5000;
    background:rgba(0,0,0,0.6); color:#fff; font-size:11px;
    font-family:monospace; padding:6px 10px; border-radius:6px;
    pointer-events:none; line-height:1.5;
  `,document.body.appendChild(f),s.onUpdate(S=>{o.update(S),n.updateSuspension(S),i.update(S);const w=n.mesh.position.x,y=n.mesh.position.z;u.update(S,w,y),d.update(S,w,y);const B=u.resolveVan(w,y);if(B.hit&&(n.mesh.position.x=B.x,n.mesh.position.z=B.z,o.applyImpulse(0,0)),l.update(S,w,y),a.activeJob){const v=a.tickTravel(S);r.updateTravelTimer(a.travelTimer),v!=null&&v.failed&&(l.setTarget(null),r.updateTravelTimer(null),r.showTimerFail(15e4),r.setActiveJob(null,1),r.updateMoney(a.money),r.updateCrewStatus([],[],!1),t.showAllCrew(),setTimeout(()=>c.show(a.getAvailableJobs()),3500))}else r.updateTravelTimer(null);if(a.activeJob!==null)if(a.activePhase===1)r.updateJobDistance(a.distanceToWorkshop(w,y));else if(a.activePhase===2){const v=a.nextCrewNeeded();if(v){const T=t.getCrewPosition(v);r.updateJobDistance(a.distanceToPoint(w,y,T.x,T.z))}}else r.updateJobDistance(a.distanceTo(w,y));if(a.activeJob&&a.activePhase===1&&!m&&a.checkPhase1Arrival(w,y)){m=!0,a.advanceToPhase2();const v=a.nextCrewNeeded();if(v){const T=t.getCrewPosition(v);l.setTarget(T)}r.showPhase1Complete(),r.setActiveJob(a.activeJob,2),r.updateCrewStatus(a.crewToPickup,a.crewPickedUp,!0),setTimeout(()=>{m=!1},2e3)}if(a.activeJob&&a.activePhase===2&&!m)for(const v of a.crewToPickup){if(a.crewPickedUp.includes(v))continue;const T=t.getCrewPosition(v);if(a.distanceToPoint(w,y,T.x,T.z)<10){m=!0,t.hideCrew(v);const z=a.pickupCrew(v);if(r.updateCrewStatus(a.crewToPickup,a.crewPickedUp,!0),z)a.advanceToPhase3(),l.setTarget(a.activeJob.position),r.showCrewPickup(v,null),r.setActiveJob(a.activeJob,3);else{const X=a.nextCrewNeeded();if(X){const $=t.getCrewPosition(X);l.setTarget($),r.showCrewPickup(v,X)}}setTimeout(()=>{m=!1},1500);break}}if(a.activeJob&&a.activePhase===3&&!m&&!p.isActive()){const v=a.checkArrival(w,y);v!==null&&(m=!0,l.setTarget(null),r.setActiveJob(null,3),r.updateCrewStatus([],[],!1),p.startRandom(T=>{const k=a.completeJob(v,T.qualityPct);r.showJobComplete(v.title,k),r.updateMoney(a.money),t.showAllCrew(),m=!1,setTimeout(()=>{const z=a.getAvailableJobs();z.length>0&&c.show(z)},3500)}))}s.camera.follow(n.mesh.position,n.velocity,n.heading),r.update(o.speed,i.level);const C=a.activeJob,A=C?`P${a.activePhase}`:"idle",P=C?a.activePhase===1?Math.round(a.distanceToWorkshop(w,y)):a.activePhase===2?Math.round(a.distanceToPoint(w,y,...(()=>{const v=a.nextCrewNeeded();if(!v)return[w,y];const T=t.getCrewPosition(v);return[T.x,T.z]})())):Math.round(a.distanceTo(w,y)):0,b=C?`crew:${a.crewPickedUp.length}/${a.crewToPickup.length}`:"";f.textContent=`${A} | dist:${P} | ${b} | lock:${m} | mg:${p.isActive()}`}),setTimeout(()=>{c.show(a.getAvailableJobs())},1e3),s.start()}Jm();
//# sourceMappingURL=index-DtUtUgw2.js.map
