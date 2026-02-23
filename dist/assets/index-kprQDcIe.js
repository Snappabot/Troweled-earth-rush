var mh=Object.defineProperty;var gh=(o,e,t)=>e in o?mh(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var E=(o,e,t)=>gh(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oa="170",xh=0,Ua=1,vh=2,pc=1,mc=2,_n=3,Gn=0,Rt=1,zt=2,Mn=0,Di=1,dr=2,Na=3,Oa=4,_h=5,ei=100,yh=101,bh=102,wh=103,Mh=104,Sh=200,Eh=201,Th=202,Ah=203,ur=204,fr=205,Ch=206,Rh=207,Ph=208,Ih=209,Dh=210,Lh=211,Fh=212,Bh=213,Uh=214,pr=0,mr=1,gr=2,Bi=3,xr=4,vr=5,_r=6,yr=7,ra=0,Nh=1,Oh=2,kn=0,gc=1,xc=2,vc=3,aa=4,kh=5,_c=6,yc=7,bc=300,Ui=301,Ni=302,br=303,wr=304,vo=306,Mr=1e3,si=1001,Sr=1002,nn=1003,zh=1004,Cs=1005,cn=1006,To=1007,oi=1008,Tn=1009,wc=1010,Mc=1011,gs=1012,la=1013,li=1014,bn=1015,Sn=1016,ca=1017,ha=1018,Oi=1020,Sc=35902,Ec=1021,Tc=1022,tn=1023,Ac=1024,Cc=1025,Li=1026,ki=1027,Rc=1028,da=1029,Pc=1030,ua=1031,fa=1033,eo=33776,to=33777,no=33778,io=33779,Er=35840,Tr=35841,Ar=35842,Cr=35843,Rr=36196,Pr=37492,Ir=37496,Dr=37808,Lr=37809,Fr=37810,Br=37811,Ur=37812,Nr=37813,Or=37814,kr=37815,zr=37816,Gr=37817,Hr=37818,Vr=37819,Wr=37820,Xr=37821,so=36492,qr=36494,Yr=36495,Ic=36283,jr=36284,$r=36285,Jr=36286,Gh=2200,Hh=2201,Vh=2202,lo=2300,Kr=2301,Ao=2302,Ci=2400,Ri=2401,co=2402,pa=2500,Wh=2501,Xh=3200,qh=3201,Dc=0,Yh=1,Un="",Xt="srgb",Vi="srgb-linear",_o="linear",tt="srgb",ui=7680,ka=519,jh=512,$h=513,Jh=514,Lc=515,Kh=516,Zh=517,Qh=518,ed=519,za=35044,Ga="300 es",wn=2e3,ho=2001;class ci{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Co=Math.PI/180,Zr=180/Math.PI;function Wi(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[o&255]+Tt[o>>8&255]+Tt[o>>16&255]+Tt[o>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function Ut(o,e,t){return Math.max(e,Math.min(t,o))}function td(o,e){return(o%e+e)%e}function Ro(o,e,t){return(1-t)*o+t*e}function Zi(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bt(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Le{constructor(e=0,t=0){Le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,n,i,s,a,r,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,r,l,c)}set(e,t,n,i,s,a,r,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=r,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=i[0],m=i[3],p=i[6],w=i[1],S=i[4],v=i[7],I=i[2],A=i[5],C=i[8];return s[0]=a*x+r*w+l*I,s[3]=a*m+r*S+l*A,s[6]=a*p+r*v+l*C,s[1]=c*x+h*w+d*I,s[4]=c*m+h*S+d*A,s[7]=c*p+h*v+d*C,s[2]=u*x+f*w+g*I,s[5]=u*m+f*S+g*A,s[8]=u*p+f*v+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*r*c-n*s*h+n*r*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8],d=h*a-r*c,u=r*l-h*s,f=c*s-a*l,g=t*d+n*u+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(i*c-h*n)*x,e[2]=(r*n-i*a)*x,e[3]=u*x,e[4]=(h*t-i*l)*x,e[5]=(i*s-r*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,r){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*r)+a+e,-i*c,i*l,-i*(-c*a+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(Po.makeScale(e,t)),this}rotate(e){return this.premultiply(Po.makeRotation(-e)),this}translate(e,t){return this.premultiply(Po.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Po=new Ge;function Fc(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function uo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function nd(){const o=uo("canvas");return o.style.display="block",o}const Ha={};function hs(o){o in Ha||(Ha[o]=!0,console.warn(o))}function id(o,e,t){return new Promise(function(n,i){function s(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:i();break;case o.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function sd(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function od(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:Vi,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tt&&(o.r=En(o.r),o.g=En(o.g),o.b=En(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(o.r=Fi(o.r),o.g=Fi(o.g),o.b=Fi(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Un?_o:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function En(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Fi(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const Va=[.64,.33,.3,.6,.15,.06],Wa=[.2126,.7152,.0722],Xa=[.3127,.329],qa=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ya=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[Vi]:{primaries:Va,whitePoint:Xa,transfer:_o,toXYZ:qa,fromXYZ:Ya,luminanceCoefficients:Wa,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:Va,whitePoint:Xa,transfer:tt,toXYZ:qa,fromXYZ:Ya,luminanceCoefficients:Wa,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}});let fi;class rd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=uo("canvas")),fi.width=e.width,fi.height=e.height;const n=fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=uo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=En(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(En(t[n]/255)*255):t[n]=En(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ad=0;class Bc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ad++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?s.push(Io(i[a].image)):s.push(Io(i[a]))}else s=Io(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Io(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?rd.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ld=0;class Lt extends ci{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=si,i=si,s=cn,a=oi,r=tn,l=Tn,c=Lt.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=Wi(),this.name="",this.source=new Bc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mr:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Sr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mr:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Sr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=bc;Lt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(f+1)/2,I=(p+1)/2,A=(h+u)/4,C=(d+x)/4,R=(g+m)/4;return S>v&&S>I?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=A/n,s=C/n):v>I?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=A/i,s=R/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=C/s,i=R/s),this.set(n,i,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-x)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cd extends ci{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Bc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends cd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Uc extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class hd extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,r){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=s[a+0],f=s[a+1],g=s[a+2],x=s[a+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(r===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==u||c!==f||h!==g){let m=1-r;const p=l*u+c*f+h*g+d*x,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const I=Math.sqrt(S),A=Math.atan2(I,p*w);m=Math.sin(m*A)/I,r=Math.sin(r*A)/I}const v=r*w;if(l=l*m+u*v,c=c*m+f*v,h=h*m+g*v,d=d*m+x*v,m===1-r){const I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const r=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return e[t]=r*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-r*f,e[t+2]=c*g+h*f+r*u-l*d,e[t+3]=h*g-r*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,r=Math.cos,l=Math.sin,c=r(n/2),h=r(i/2),d=r(s/2),u=l(n/2),f=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],r=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+r+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>r&&n>d){const f=2*Math.sqrt(1+n-r-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(r>d){const f=2*Math.sqrt(1+r-n-d);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-r);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,r=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*r+i*c-s*l,this._y=i*h+a*l+s*r-n*c,this._z=s*h+a*c+n*l-i*r,this._w=a*h-n*r-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let r=a*e._w+n*e._x+i*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ja.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ja.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,r=e.z,l=e.w,c=2*(a*i-r*n),h=2*(r*t-s*i),d=2*(s*n-a*t);return this.x=t+l*c+a*d-r*h,this.y=n+l*h+r*c-s*d,this.z=i+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,r=t.y,l=t.z;return this.x=i*l-s*r,this.y=s*a-n*l,this.z=n*r-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Do.copy(this).projectOnVector(e),this.sub(Do)}reflect(e){return this.sub(Do.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new L,ja=new qt;class bs{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,r=s.count;a<r;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(s,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rs.copy(n.boundingBox)),Rs.applyMatrix4(e.matrixWorld),this.union(Rs)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qi),Ps.subVectors(this.max,Qi),pi.subVectors(e.a,Qi),mi.subVectors(e.b,Qi),gi.subVectors(e.c,Qi),Pn.subVectors(mi,pi),In.subVectors(gi,mi),Vn.subVectors(pi,gi);let t=[0,-Pn.z,Pn.y,0,-In.z,In.y,0,-Vn.z,Vn.y,Pn.z,0,-Pn.x,In.z,0,-In.x,Vn.z,0,-Vn.x,-Pn.y,Pn.x,0,-In.y,In.x,0,-Vn.y,Vn.x,0];return!Lo(t,pi,mi,gi,Ps)||(t=[1,0,0,0,1,0,0,0,1],!Lo(t,pi,mi,gi,Ps))?!1:(Is.crossVectors(Pn,In),t=[Is.x,Is.y,Is.z],Lo(t,pi,mi,gi,Ps))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new L,new L,new L,new L,new L,new L,new L,new L],$t=new L,Rs=new bs,pi=new L,mi=new L,gi=new L,Pn=new L,In=new L,Vn=new L,Qi=new L,Ps=new L,Is=new L,Wn=new L;function Lo(o,e,t,n,i){for(let s=0,a=o.length-3;s<=a;s+=3){Wn.fromArray(o,s);const r=i.x*Math.abs(Wn.x)+i.y*Math.abs(Wn.y)+i.z*Math.abs(Wn.z),l=e.dot(Wn),c=t.dot(Wn),h=n.dot(Wn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const dd=new bs,es=new L,Fo=new L;class yo{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dd.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;es.subVectors(e,this.center);const t=es.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(es,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(es.copy(e.center).add(Fo)),this.expandByPoint(es.copy(e.center).sub(Fo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new L,Bo=new L,Ds=new L,Dn=new L,Uo=new L,Ls=new L,No=new L;class Nc{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bo.copy(e).add(t).multiplyScalar(.5),Ds.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(Bo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ds),r=Dn.dot(this.direction),l=-Dn.dot(Ds),c=Dn.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-r,u=a*r-l,g=s*h,d>=0)if(u>=-g)if(u<=g){const x=1/h;d*=x,u*=x,f=d*(d+a*u+2*r)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+r)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+r)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+r)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+r)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+r)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Bo).addScaledVector(Ds,u),f}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,i=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,i=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(r=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(r=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,i,s){Uo.subVectors(t,e),Ls.subVectors(n,e),No.crossVectors(Uo,Ls);let a=this.direction.dot(No),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Dn.subVectors(this.origin,e);const l=r*this.direction.dot(Ls.crossVectors(Dn,Ls));if(l<0)return null;const c=r*this.direction.dot(Uo.cross(Dn));if(c<0||l+c>a)return null;const h=-r*Dn.dot(No);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,i,s,a,r,l,c,h,d,u,f,g,x,m){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,r,l,c,h,d,u,f,g,x,m)}set(e,t,n,i,s,a,r,l,c,h,d,u,f,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=r,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/xi.setFromMatrixColumn(e,0).length(),s=1/xi.setFromMatrixColumn(e,1).length(),a=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const u=a*h,f=a*d,g=r*h,x=r*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-x*c,t[9]=-r*l,t[2]=x-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u+x*r,t[4]=g*r-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-r,t[2]=f*r-g,t[6]=x+u*r,t[10]=a*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u-x*r,t[4]=-a*d,t[8]=g+f*r,t[1]=f+g*r,t[5]=a*h,t[9]=x-u*r,t[2]=-a*c,t[6]=r,t[10]=a*l}else if(e.order==="ZYX"){const u=a*h,f=a*d,g=r*h,x=r*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-g,t[2]=-c,t[6]=r*l,t[10]=a*l}else if(e.order==="YZX"){const u=a*l,f=a*c,g=r*l,x=r*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-r*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){const u=a*l,f=a*c,g=r*l,x=r*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=r*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ud,e,fd)}lookAt(e,t,n){const i=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Ln.crossVectors(n,Ot),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Ln.crossVectors(n,Ot)),Ln.normalize(),Fs.crossVectors(Ot,Ln),i[0]=Ln.x,i[4]=Fs.x,i[8]=Ot.x,i[1]=Ln.y,i[5]=Fs.y,i[9]=Ot.y,i[2]=Ln.z,i[6]=Fs.z,i[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],w=n[3],S=n[7],v=n[11],I=n[15],A=i[0],C=i[4],R=i[8],b=i[12],y=i[1],P=i[5],G=i[9],k=i[13],W=i[2],q=i[6],X=i[10],ee=i[14],O=i[3],te=i[7],ie=i[11],we=i[15];return s[0]=a*A+r*y+l*W+c*O,s[4]=a*C+r*P+l*q+c*te,s[8]=a*R+r*G+l*X+c*ie,s[12]=a*b+r*k+l*ee+c*we,s[1]=h*A+d*y+u*W+f*O,s[5]=h*C+d*P+u*q+f*te,s[9]=h*R+d*G+u*X+f*ie,s[13]=h*b+d*k+u*ee+f*we,s[2]=g*A+x*y+m*W+p*O,s[6]=g*C+x*P+m*q+p*te,s[10]=g*R+x*G+m*X+p*ie,s[14]=g*b+x*k+m*ee+p*we,s[3]=w*A+S*y+v*W+I*O,s[7]=w*C+S*P+v*q+I*te,s[11]=w*R+S*G+v*X+I*ie,s[15]=w*b+S*k+v*ee+I*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],r=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*l*d-i*c*d-s*r*u+n*c*u+i*r*f-n*l*f)+x*(+t*l*f-t*c*u+s*a*u-i*a*f+i*c*h-s*l*h)+m*(+t*c*d-t*r*f-s*a*d+n*a*f+s*r*h-n*c*h)+p*(-i*r*h-t*l*d+t*r*u+i*a*d-n*a*u+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],w=d*m*c-x*u*c+x*l*f-r*m*f-d*l*p+r*u*p,S=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,v=h*x*c-g*d*c+g*r*f-a*x*f-h*r*p+a*d*p,I=g*d*l-h*x*l-g*r*u+a*x*u+h*r*m-a*d*m,A=t*w+n*S+i*v+s*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=w*C,e[1]=(x*u*s-d*m*s-x*i*f+n*m*f+d*i*p-n*u*p)*C,e[2]=(r*m*s-x*l*s+x*i*c-n*m*c-r*i*p+n*l*p)*C,e[3]=(d*l*s-r*u*s-d*i*c+n*u*c+r*i*f-n*l*f)*C,e[4]=S*C,e[5]=(h*m*s-g*u*s+g*i*f-t*m*f-h*i*p+t*u*p)*C,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*C,e[7]=(a*u*s-h*l*s+h*i*c-t*u*c-a*i*f+t*l*f)*C,e[8]=v*C,e[9]=(g*d*s-h*x*s-g*n*f+t*x*f+h*n*p-t*d*p)*C,e[10]=(a*x*s-g*r*s+g*n*c-t*x*c-a*n*p+t*r*p)*C,e[11]=(h*r*s-a*d*s-h*n*c+t*d*c+a*n*f-t*r*f)*C,e[12]=I*C,e[13]=(h*x*i-g*d*i+g*n*u-t*x*u-h*n*m+t*d*m)*C,e[14]=(g*r*i-a*x*i-g*n*l+t*x*l+a*n*m-t*r*m)*C,e[15]=(a*d*i-h*r*i+h*n*l-t*d*l-a*n*u+t*r*u)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,r=e.y,l=e.z,c=s*a,h=s*r;return this.set(c*a+n,c*r-i*l,c*l+i*r,0,c*r+i*l,h*r+n,h*l-i*a,0,c*l-i*r,h*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,r=t._z,l=t._w,c=s+s,h=a+a,d=r+r,u=s*c,f=s*h,g=s*d,x=a*h,m=a*d,p=r*d,w=l*c,S=l*h,v=l*d,I=n.x,A=n.y,C=n.z;return i[0]=(1-(x+p))*I,i[1]=(f+v)*I,i[2]=(g-S)*I,i[3]=0,i[4]=(f-v)*A,i[5]=(1-(u+p))*A,i[6]=(m+w)*A,i[7]=0,i[8]=(g+S)*C,i[9]=(m-w)*C,i[10]=(1-(u+x))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=xi.set(i[0],i[1],i[2]).length();const a=xi.set(i[4],i[5],i[6]).length(),r=xi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Jt.copy(this);const c=1/s,h=1/a,d=1/r;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=h,Jt.elements[5]*=h,Jt.elements[6]*=h,Jt.elements[8]*=d,Jt.elements[9]*=d,Jt.elements[10]*=d,t.setFromRotationMatrix(Jt),n.x=s,n.y=a,n.z=r,this}makePerspective(e,t,n,i,s,a,r=wn){const l=this.elements,c=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let f,g;if(r===wn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(r===ho)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,r=wn){const l=this.elements,c=1/(t-e),h=1/(n-i),d=1/(a-s),u=(t+e)*c,f=(n+i)*h;let g,x;if(r===wn)g=(a+s)*d,x=-2*d;else if(r===ho)g=s*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const xi=new L,Jt=new ut,ud=new L(0,0,0),fd=new L(1,1,1),Ln=new L,Fs=new L,Ot=new L,$a=new ut,Ja=new qt;class Gt{constructor(e=0,t=0,n=0,i=Gt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],r=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ut(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return $a.makeRotationFromQuaternion(e),this.setFromRotationMatrix($a,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ja.setFromEuler(this),this.setFromQuaternion(Ja,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gt.DEFAULT_ORDER="XYZ";class Oc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pd=0;const Ka=new L,vi=new qt,mn=new ut,Bs=new L,ts=new L,md=new L,gd=new qt,Za=new L(1,0,0),Qa=new L(0,1,0),el=new L(0,0,1),tl={type:"added"},xd={type:"removed"},_i={type:"childadded",child:null},Oo={type:"childremoved",child:null};class _t extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new L,t=new Gt,n=new qt,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ge}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(Za,e)}rotateY(e){return this.rotateOnAxis(Qa,e)}rotateZ(e){return this.rotateOnAxis(el,e)}translateOnAxis(e,t){return Ka.copy(e).applyQuaternion(this.quaternion),this.position.add(Ka.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Za,e)}translateY(e){return this.translateOnAxis(Qa,e)}translateZ(e){return this.translateOnAxis(el,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Bs.copy(e):Bs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(ts,Bs,this.up):mn.lookAt(Bs,ts,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),vi.setFromRotationMatrix(mn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tl),_i.child=e,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xd),Oo.child=e,this.dispatchEvent(Oo),Oo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tl),_i.child=e,this.dispatchEvent(_i),_i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,e,md),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,gd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(e.materials,this.material[l]));i.material=r}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];i.animations.push(s(e.animations,l))}}if(t){const r=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}_t.DEFAULT_UP=new L(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Kt=new L,gn=new L,ko=new L,xn=new L,yi=new L,bi=new L,nl=new L,zo=new L,Go=new L,Ho=new L,Vo=new it,Wo=new it,Xo=new it;class en{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Kt.subVectors(e,t),i.cross(Kt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Kt.subVectors(i,t),gn.subVectors(n,t),ko.subVectors(e,t);const a=Kt.dot(Kt),r=Kt.dot(gn),l=Kt.dot(ko),c=gn.dot(gn),h=gn.dot(ko),d=a*c-r*r;if(d===0)return s.set(0,0,0),null;const u=1/d,f=(c*l-r*h)*u,g=(a*h-r*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(e,t,n,i,s,a,r,l){return this.getBarycoord(e,t,n,i,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(r,xn.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Vo.setScalar(0),Wo.setScalar(0),Xo.setScalar(0),Vo.fromBufferAttribute(e,t),Wo.fromBufferAttribute(e,n),Xo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Vo,s.x),a.addScaledVector(Wo,s.y),a.addScaledVector(Xo,s.z),a}static isFrontFacing(e,t,n,i){return Kt.subVectors(n,t),gn.subVectors(e,t),Kt.cross(gn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Kt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return en.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,r;yi.subVectors(i,n),bi.subVectors(s,n),zo.subVectors(e,n);const l=yi.dot(zo),c=bi.dot(zo);if(l<=0&&c<=0)return t.copy(n);Go.subVectors(e,i);const h=yi.dot(Go),d=bi.dot(Go);if(h>=0&&d<=h)return t.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(yi,a);Ho.subVectors(e,s);const f=yi.dot(Ho),g=bi.dot(Ho);if(g>=0&&f<=g)return t.copy(s);const x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(n).addScaledVector(bi,r);const m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return nl.subVectors(s,i),r=(d-h)/(d-h+(f-g)),t.copy(i).addScaledVector(nl,r);const p=1/(m+x+u);return a=x*p,r=u*p,t.copy(n).addScaledVector(yi,a).addScaledVector(bi,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function qo(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ye.workingColorSpace){if(e=td(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=qo(a,s,e+1/3),this.g=qo(a,s,e),this.b=qo(a,s,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=kc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=En(e.r),this.g=En(e.g),this.b=En(e.b),this}copyLinearToSRGB(e){return this.r=Fi(e.r),this.g=Fi(e.g),this.b=Fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ye.fromWorkingColorSpace(At.copy(this),e),Math.round(Ut(At.r*255,0,255))*65536+Math.round(Ut(At.g*255,0,255))*256+Math.round(Ut(At.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(At.copy(this),t);const n=At.r,i=At.g,s=At.b,a=Math.max(n,i,s),r=Math.min(n,i,s);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const d=a-r;switch(c=h<=.5?d/(a+r):d/(2-a-r),a){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(At.copy(this),t),e.r=At.r,e.g=At.g,e.b=At.b,e}getStyle(e=Xt){Ye.fromWorkingColorSpace(At.copy(this),e);const t=At.r,n=At.g,i=At.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Fn),this.setHSL(Fn.h+e,Fn.s+t,Fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Fn),e.getHSL(Us);const n=Ro(Fn.h,Us.h,t),i=Ro(Fn.s,Us.s,t),s=Ro(Fn.l,Us.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const At=new be;be.NAMES=kc;let vd=0;class Xi extends ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=Wi(),this.name="",this.blending=Di,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ur,this.blendDst=fr,this.blendEquation=ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new be(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ka,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==Gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ur&&(n.blendSrc=this.blendSrc),this.blendDst!==fr&&(n.blendDst=this.blendDst),this.blendEquation!==ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ka&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const r in s){const l=s[r];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ht extends Xi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new L,Ns=new Le;class on{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=za,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ns.fromBufferAttribute(this,t),Ns.applyMatrix3(e),this.setXY(t,Ns.x,Ns.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==za&&(e.usage=this.usage),e}}class zc extends on{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Gc extends on{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends on{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _d=0;const Wt=new ut,Yo=new _t,wi=new L,kt=new bs,ns=new bs,Mt=new L;class Pt extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fc(e)?Gc:zc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wt.makeRotationFromQuaternion(e),this.applyMatrix4(Wt),this}rotateX(e){return Wt.makeRotationX(e),this.applyMatrix4(Wt),this}rotateY(e){return Wt.makeRotationY(e),this.applyMatrix4(Wt),this}rotateZ(e){return Wt.makeRotationZ(e),this.applyMatrix4(Wt),this}translate(e,t,n){return Wt.makeTranslation(e,t,n),this.applyMatrix4(Wt),this}scale(e,t,n){return Wt.makeScale(e,t,n),this.applyMatrix4(Wt),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new st(n,3))}else{for(let n=0,i=t.count;n<i;n++){const s=e[n];t.setXYZ(n,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const r=t[s];ns.setFromBufferAttribute(r),this.morphTargetsRelative?(Mt.addVectors(kt.min,ns.min),kt.expandByPoint(Mt),Mt.addVectors(kt.max,ns.max),kt.expandByPoint(Mt)):(kt.expandByPoint(ns.min),kt.expandByPoint(ns.max))}kt.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const r=t[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)Mt.fromBufferAttribute(r,c),l&&(wi.fromBufferAttribute(e,c),Mt.add(wi)),i=Math.max(i,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let R=0;R<n.count;R++)r[R]=new L,l[R]=new L;const c=new L,h=new L,d=new L,u=new Le,f=new Le,g=new Le,x=new L,m=new L;function p(R,b,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,y),u.fromBufferAttribute(s,R),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,y),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),r[R].add(x),r[b].add(x),r[y].add(x),l[R].add(m),l[b].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let R=0,b=w.length;R<b;++R){const y=w[R],P=y.start,G=y.count;for(let k=P,W=P+G;k<W;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new L,v=new L,I=new L,A=new L;function C(R){I.fromBufferAttribute(i,R),A.copy(I);const b=r[R];S.copy(b),S.sub(I.multiplyScalar(I.dot(b))).normalize(),v.crossVectors(A,b);const P=v.dot(l[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,P)}for(let R=0,b=w.length;R<b;++R){const y=w[R],P=y.start,G=y.count;for(let k=P,W=P+G;k<W;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const i=new L,s=new L,a=new L,r=new L,l=new L,c=new L,h=new L,d=new L;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),x=e.getX(u+1),m=e.getX(u+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),r.add(h),l.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)i.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(r,l){const c=r.array,h=r.itemSize,d=r.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let x=0,m=l.length;x<m;x++){r.isInterleavedBufferAttribute?f=l[x]*r.data.stride+r.offset:f=l[x]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new on(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pt,n=this.index.array,i=this.attributes;for(const r in i){const l=i[r],c=e(l,n);t.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const il=new ut,Xn=new Nc,Os=new yo,sl=new L,ks=new L,zs=new L,Gs=new L,jo=new L,Hs=new L,ol=new L,Vs=new L;class D extends _t{constructor(e=new Pt,t=new Ht){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const r=this.morphTargetInfluences;if(s&&r){Hs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=r[l],d=s[l];h!==0&&(jo.fromBufferAttribute(d,e),a?Hs.addScaledVector(jo,h):Hs.addScaledVector(jo.sub(t),h))}t.add(Hs)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(s),Xn.copy(e.ray).recast(e.near),!(Os.containsPoint(Xn.origin)===!1&&(Xn.intersectSphere(Os,sl)===null||Xn.origin.distanceToSquared(sl)>(e.far-e.near)**2))&&(il.copy(s).invert(),Xn.copy(e.ray).applyMatrix4(il),!(n.boundingBox!==null&&Xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xn)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,r=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),S=Math.min(r.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,I=S;v<I;v+=3){const A=r.getX(v),C=r.getX(v+1),R=r.getX(v+2);i=Ws(this,p,e,n,c,h,d,A,C,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(r.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const w=r.getX(m),S=r.getX(m+1),v=r.getX(m+2);i=Ws(this,a,e,n,c,h,d,w,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,I=S;v<I;v+=3){const A=v,C=v+1,R=v+2;i=Ws(this,p,e,n,c,h,d,A,C,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){const w=m,S=m+1,v=m+2;i=Ws(this,a,e,n,c,h,d,w,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function yd(o,e,t,n,i,s,a,r){let l;if(e.side===Rt?l=n.intersectTriangle(a,s,i,!0,r):l=n.intersectTriangle(i,s,a,e.side===Gn,r),l===null)return null;Vs.copy(r),Vs.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Vs);return c<t.near||c>t.far?null:{distance:c,point:Vs.clone(),object:o}}function Ws(o,e,t,n,i,s,a,r,l,c){o.getVertexPosition(r,ks),o.getVertexPosition(l,zs),o.getVertexPosition(c,Gs);const h=yd(o,e,t,n,ks,zs,Gs,ol);if(h){const d=new L;en.getBarycoord(ol,ks,zs,Gs,d),i&&(h.uv=en.getInterpolatedAttribute(i,r,l,c,d,new Le)),s&&(h.uv1=en.getInterpolatedAttribute(s,r,l,c,d,new Le)),a&&(h.normal=en.getInterpolatedAttribute(a,r,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:r,b:l,c,normal:new L,materialIndex:0};en.getNormal(ks,zs,Gs,u.normal),h.face=u,h.barycoord=d}return h}class K extends Pt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const r=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(d,2));function g(x,m,p,w,S,v,I,A,C,R,b){const y=v/C,P=I/R,G=v/2,k=I/2,W=A/2,q=C+1,X=R+1;let ee=0,O=0;const te=new L;for(let ie=0;ie<X;ie++){const we=ie*P-k;for(let Fe=0;Fe<q;Fe++){const Xe=Fe*y-G;te[x]=Xe*w,te[m]=we*S,te[p]=W,c.push(te.x,te.y,te.z),te[x]=0,te[m]=0,te[p]=A>0?1:-1,h.push(te.x,te.y,te.z),d.push(Fe/C),d.push(1-ie/R),ee+=1}}for(let ie=0;ie<R;ie++)for(let we=0;we<C;we++){const Fe=u+we+q*ie,Xe=u+we+q*(ie+1),$=u+(we+1)+q*(ie+1),oe=u+(we+1)+q*ie;l.push(Fe,Xe,oe),l.push(Xe,$,oe),O+=6}r.addGroup(f,O,b),f+=O,u+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new K(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zi(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function It(o){const e={};for(let t=0;t<o.length;t++){const n=zi(o[t]);for(const i in n)e[i]=n[i]}return e}function bd(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Hc(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const xs={clone:zi,merge:It};var wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Md=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ct extends Xi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Md,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zi(e.uniforms),this.uniformsGroups=bd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vc extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=wn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new L,rl=new Le,al=new Le;class Dt extends Vc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zr*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-e/Bn.z)}getViewSize(e,t){return this.getViewBounds(e,rl,al),t.subVectors(al,rl)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Co*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Mi=-90,Si=1;class Sd extends _t{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Dt(Mi,Si,e,t);i.layers=this.layers,this.add(i);const s=new Dt(Mi,Si,e,t);s.layers=this.layers,this.add(s);const a=new Dt(Mi,Si,e,t);a.layers=this.layers,this.add(a);const r=new Dt(Mi,Si,e,t);r.layers=this.layers,this.add(r);const l=new Dt(Mi,Si,e,t);l.layers=this.layers,this.add(l);const c=new Dt(Mi,Si,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,r,l]=t;for(const c of t)this.remove(c);if(e===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,r,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,r),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Wc extends Lt{constructor(e,t,n,i,s,a,r,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ui,super(e,t,n,i,s,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ed extends sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new K(5,5,5),s=new Ct({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rt,blending:Mn});s.uniforms.tEquirect.value=t;const a=new D(i,s),r=t.minFilter;return t.minFilter===oi&&(t.minFilter=cn),new Sd(1,10,this).update(e,a),t.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const $o=new L,Td=new L,Ad=new Ge;class Zn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=$o.subVectors(n,t).cross(Td.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($o),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ad.getNormalMatrix(e),i=this.coplanarPoint($o).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new yo,Xs=new L;class ma{constructor(e=new Zn,t=new Zn,n=new Zn,i=new Zn,s=new Zn,a=new Zn){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wn){const n=this.planes,i=e.elements,s=i[0],a=i[1],r=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],g=i[9],x=i[10],m=i[11],p=i[12],w=i[13],S=i[14],v=i[15];if(n[0].setComponents(l-s,u-c,m-f,v-p).normalize(),n[1].setComponents(l+s,u+c,m+f,v+p).normalize(),n[2].setComponents(l+a,u+h,m+g,v+w).normalize(),n[3].setComponents(l-a,u-h,m-g,v-w).normalize(),n[4].setComponents(l-r,u-d,m-x,v-S).normalize(),t===wn)n[5].setComponents(l+r,u+d,m+x,v+S).normalize();else if(t===ho)n[5].setComponents(r,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xs.x=i.normal.x>0?e.max.x:e.min.x,Xs.y=i.normal.y>0?e.max.y:e.min.y,Xs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xc(){let o=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function Cd(o){const e=new WeakMap;function t(r,l){const c=r.array,h=r.usage,d=c.byteLength,u=o.createBuffer();o.bindBuffer(l,u),o.bufferData(l,c,h),r.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:d}}function n(r,l,c){const h=l.array,d=l.updateRanges;if(o.bindBuffer(c,r),d.length===0)o.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const x=d[f];o.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(o.deleteBuffer(l.buffer),e.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=e.get(r);(!h||h.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:i,remove:s,update:a}}class ht extends Pt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,r=Math.floor(n),l=Math.floor(i),c=r+1,h=l+1,d=e/r,u=t/l,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){const w=p*u-a;for(let S=0;S<c;S++){const v=S*d-s;g.push(v,-w,0),x.push(0,0,1),m.push(S/r),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<r;w++){const S=w+c*p,v=w+c*(p+1),I=w+1+c*(p+1),A=w+1+c*p;f.push(S,v,A),f.push(v,I,A)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ht(e.width,e.height,e.widthSegments,e.heightSegments)}}var Rd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pd=`#ifdef USE_ALPHAHASH
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
#endif`,Id=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bd=`#ifdef USE_AOMAP
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
#endif`,Ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nd=`#ifdef USE_BATCHING
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
#endif`,Od=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hd=`#ifdef USE_IRIDESCENCE
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
#endif`,Vd=`#ifdef USE_BUMPMAP
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
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zd=`#define PI 3.141592653589793
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
} // validated`,Qd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eu=`vec3 transformedNormal = objectNormal;
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
#endif`,tu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,su=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ou="gl_FragColor = linearToOutputTexel( gl_FragColor );",ru=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,au=`#ifdef USE_ENVMAP
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
#endif`,lu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cu=`#ifdef USE_ENVMAP
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
#endif`,hu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,du=`#ifdef USE_ENVMAP
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
#endif`,uu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gu=`#ifdef USE_GRADIENTMAP
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
}`,xu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yu=`uniform bool receiveShadow;
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
#endif`,bu=`#ifdef USE_ENVMAP
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
#endif`,wu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Su=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tu=`PhysicalMaterial material;
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
#endif`,Au=`struct PhysicalMaterial {
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
}`,Cu=`
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
#endif`,Ru=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Du=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Uu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ou=`#if defined( USE_POINTS_UV )
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
#endif`,ku=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wu=`#ifdef USE_MORPHTARGETS
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
#endif`,Xu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ju=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$u=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ju=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ku=`#ifdef USE_NORMALMAP
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
#endif`,Zu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ef=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,of=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pf=`float getShadowMask() {
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
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
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
#endif`,xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vf=`#ifdef USE_SKINNING
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
#endif`,_f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mf=`#ifdef USE_TRANSMISSION
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
#endif`,Sf=`#ifdef USE_TRANSMISSION
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
#endif`,Ef=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pf=`uniform sampler2D t2D;
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
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ff=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bf=`#include <common>
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
}`,Uf=`#if DEPTH_PACKING == 3200
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
}`,Nf=`#define DISTANCE
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
}`,Of=`#define DISTANCE
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
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gf=`uniform float scale;
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
}`,Hf=`uniform vec3 diffuse;
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
}`,Vf=`#include <common>
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
}`,Wf=`uniform vec3 diffuse;
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
}`,Xf=`#define LAMBERT
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
}`,qf=`#define LAMBERT
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
}`,Yf=`#define MATCAP
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
}`,jf=`#define MATCAP
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
}`,$f=`#define NORMAL
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
}`,Jf=`#define NORMAL
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
}`,Kf=`#define PHONG
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
}`,Zf=`#define PHONG
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
}`,Qf=`#define STANDARD
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
}`,ep=`#define STANDARD
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
}`,tp=`#define TOON
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
}`,np=`#define TOON
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
}`,ip=`uniform float size;
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
}`,sp=`uniform vec3 diffuse;
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
}`,op=`#include <common>
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
}`,rp=`uniform vec3 color;
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
}`,ap=`uniform float rotation;
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
}`,lp=`uniform vec3 diffuse;
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
}`,Ve={alphahash_fragment:Rd,alphahash_pars_fragment:Pd,alphamap_fragment:Id,alphamap_pars_fragment:Dd,alphatest_fragment:Ld,alphatest_pars_fragment:Fd,aomap_fragment:Bd,aomap_pars_fragment:Ud,batching_pars_vertex:Nd,batching_vertex:Od,begin_vertex:kd,beginnormal_vertex:zd,bsdfs:Gd,iridescence_fragment:Hd,bumpmap_pars_fragment:Vd,clipping_planes_fragment:Wd,clipping_planes_pars_fragment:Xd,clipping_planes_pars_vertex:qd,clipping_planes_vertex:Yd,color_fragment:jd,color_pars_fragment:$d,color_pars_vertex:Jd,color_vertex:Kd,common:Zd,cube_uv_reflection_fragment:Qd,defaultnormal_vertex:eu,displacementmap_pars_vertex:tu,displacementmap_vertex:nu,emissivemap_fragment:iu,emissivemap_pars_fragment:su,colorspace_fragment:ou,colorspace_pars_fragment:ru,envmap_fragment:au,envmap_common_pars_fragment:lu,envmap_pars_fragment:cu,envmap_pars_vertex:hu,envmap_physical_pars_fragment:bu,envmap_vertex:du,fog_vertex:uu,fog_pars_vertex:fu,fog_fragment:pu,fog_pars_fragment:mu,gradientmap_pars_fragment:gu,lightmap_pars_fragment:xu,lights_lambert_fragment:vu,lights_lambert_pars_fragment:_u,lights_pars_begin:yu,lights_toon_fragment:wu,lights_toon_pars_fragment:Mu,lights_phong_fragment:Su,lights_phong_pars_fragment:Eu,lights_physical_fragment:Tu,lights_physical_pars_fragment:Au,lights_fragment_begin:Cu,lights_fragment_maps:Ru,lights_fragment_end:Pu,logdepthbuf_fragment:Iu,logdepthbuf_pars_fragment:Du,logdepthbuf_pars_vertex:Lu,logdepthbuf_vertex:Fu,map_fragment:Bu,map_pars_fragment:Uu,map_particle_fragment:Nu,map_particle_pars_fragment:Ou,metalnessmap_fragment:ku,metalnessmap_pars_fragment:zu,morphinstance_vertex:Gu,morphcolor_vertex:Hu,morphnormal_vertex:Vu,morphtarget_pars_vertex:Wu,morphtarget_vertex:Xu,normal_fragment_begin:qu,normal_fragment_maps:Yu,normal_pars_fragment:ju,normal_pars_vertex:$u,normal_vertex:Ju,normalmap_pars_fragment:Ku,clearcoat_normal_fragment_begin:Zu,clearcoat_normal_fragment_maps:Qu,clearcoat_pars_fragment:ef,iridescence_pars_fragment:tf,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:of,project_vertex:rf,dithering_fragment:af,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:df,shadowmap_pars_vertex:uf,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:xf,skinnormal_vertex:vf,specularmap_fragment:_f,specularmap_pars_fragment:yf,tonemapping_fragment:bf,tonemapping_pars_fragment:wf,transmission_fragment:Mf,transmission_pars_fragment:Sf,uv_pars_fragment:Ef,uv_pars_vertex:Tf,uv_vertex:Af,worldpos_vertex:Cf,background_vert:Rf,background_frag:Pf,backgroundCube_vert:If,backgroundCube_frag:Df,cube_vert:Lf,cube_frag:Ff,depth_vert:Bf,depth_frag:Uf,distanceRGBA_vert:Nf,distanceRGBA_frag:Of,equirect_vert:kf,equirect_frag:zf,linedashed_vert:Gf,linedashed_frag:Hf,meshbasic_vert:Vf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:qf,meshmatcap_vert:Yf,meshmatcap_frag:jf,meshnormal_vert:$f,meshnormal_frag:Jf,meshphong_vert:Kf,meshphong_frag:Zf,meshphysical_vert:Qf,meshphysical_frag:ep,meshtoon_vert:tp,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:op,shadow_frag:rp,sprite_vert:ap,sprite_frag:lp},ce={common:{diffuse:{value:new be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new be(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ln={basic:{uniforms:It([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:It([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new be(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:It([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new be(0)},specular:{value:new be(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:It([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:It([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new be(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:It([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:It([ce.points,ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:It([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:It([ce.common,ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:It([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:It([ce.sprite,ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:It([ce.common,ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:It([ce.lights,ce.fog,{color:{value:new be(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ln.physical={uniforms:It([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new be(0)},specularColor:{value:new be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const qs={r:0,b:0,g:0},Yn=new Gt,cp=new ut;function hp(o,e,t,n,i,s,a){const r=new be(0);let l=s===!0?0:1,c,h,d=null,u=0,f=null;function g(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?t:e).get(S)),S}function x(w){let S=!1;const v=g(w);v===null?p(r,l):v&&v.isColor&&(p(v,1),S=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(o.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function m(w,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===vo)?(h===void 0&&(h=new D(new K(1,1,1),new Ct({name:"BackgroundCubeMaterial",uniforms:zi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Rt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Yn.copy(S.backgroundRotation),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(Yn)),h.material.toneMapped=Ye.getTransfer(v.colorSpace)!==tt,(d!==v||u!==v.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,d=v,u=v.version,f=o.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new D(new ht(2,2),new Ct({name:"BackgroundMaterial",uniforms:zi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||u!==v.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,d=v,u=v.version,f=o.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,S){w.getRGB(qs,Hc(o)),n.buffers.color.setClear(qs.r,qs.g,qs.b,S,a)}return{getClearColor:function(){return r},setClearColor:function(w,S=1){r.set(w),l=S,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(r,l)},render:x,addToRenderList:m}}function dp(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),n={},i=u(null);let s=i,a=!1;function r(y,P,G,k,W){let q=!1;const X=d(k,G,P);s!==X&&(s=X,c(s.object)),q=f(y,k,G,W),q&&g(y,k,G,W),W!==null&&e.update(W,o.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(y,P,G,k),W!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return o.createVertexArray()}function c(y){return o.bindVertexArray(y)}function h(y){return o.deleteVertexArray(y)}function d(y,P,G){const k=G.wireframe===!0;let W=n[y.id];W===void 0&&(W={},n[y.id]=W);let q=W[P.id];q===void 0&&(q={},W[P.id]=q);let X=q[k];return X===void 0&&(X=u(l()),q[k]=X),X}function u(y){const P=[],G=[],k=[];for(let W=0;W<t;W++)P[W]=0,G[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:k,object:y,attributes:{},index:null}}function f(y,P,G,k){const W=s.attributes,q=P.attributes;let X=0;const ee=G.getAttributes();for(const O in ee)if(ee[O].location>=0){const ie=W[O];let we=q[O];if(we===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(we=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(we=y.instanceColor)),ie===void 0||ie.attribute!==we||we&&ie.data!==we.data)return!0;X++}return s.attributesNum!==X||s.index!==k}function g(y,P,G,k){const W={},q=P.attributes;let X=0;const ee=G.getAttributes();for(const O in ee)if(ee[O].location>=0){let ie=q[O];ie===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor));const we={};we.attribute=ie,ie&&ie.data&&(we.data=ie.data),W[O]=we,X++}s.attributes=W,s.attributesNum=X,s.index=k}function x(){const y=s.newAttributes;for(let P=0,G=y.length;P<G;P++)y[P]=0}function m(y){p(y,0)}function p(y,P){const G=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;G[y]=1,k[y]===0&&(o.enableVertexAttribArray(y),k[y]=1),W[y]!==P&&(o.vertexAttribDivisor(y,P),W[y]=P)}function w(){const y=s.newAttributes,P=s.enabledAttributes;for(let G=0,k=P.length;G<k;G++)P[G]!==y[G]&&(o.disableVertexAttribArray(G),P[G]=0)}function S(y,P,G,k,W,q,X){X===!0?o.vertexAttribIPointer(y,P,G,W,q):o.vertexAttribPointer(y,P,G,k,W,q)}function v(y,P,G,k){x();const W=k.attributes,q=G.getAttributes(),X=P.defaultAttributeValues;for(const ee in q){const O=q[ee];if(O.location>=0){let te=W[ee];if(te===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(te=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(te=y.instanceColor)),te!==void 0){const ie=te.normalized,we=te.itemSize,Fe=e.get(te);if(Fe===void 0)continue;const Xe=Fe.buffer,$=Fe.type,oe=Fe.bytesPerElement,ye=$===o.INT||$===o.UNSIGNED_INT||te.gpuType===la;if(te.isInterleavedBufferAttribute){const le=te.data,se=le.stride,ge=te.offset;if(le.isInstancedInterleavedBuffer){for(let Ie=0;Ie<O.locationSize;Ie++)p(O.location+Ie,le.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ie=0;Ie<O.locationSize;Ie++)m(O.location+Ie);o.bindBuffer(o.ARRAY_BUFFER,Xe);for(let Ie=0;Ie<O.locationSize;Ie++)S(O.location+Ie,we/O.locationSize,$,ie,se*oe,(ge+we/O.locationSize*Ie)*oe,ye)}else{if(te.isInstancedBufferAttribute){for(let le=0;le<O.locationSize;le++)p(O.location+le,te.meshPerAttribute);y.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let le=0;le<O.locationSize;le++)m(O.location+le);o.bindBuffer(o.ARRAY_BUFFER,Xe);for(let le=0;le<O.locationSize;le++)S(O.location+le,we/O.locationSize,$,ie,we*oe,we/O.locationSize*le*oe,ye)}}else if(X!==void 0){const ie=X[ee];if(ie!==void 0)switch(ie.length){case 2:o.vertexAttrib2fv(O.location,ie);break;case 3:o.vertexAttrib3fv(O.location,ie);break;case 4:o.vertexAttrib4fv(O.location,ie);break;default:o.vertexAttrib1fv(O.location,ie)}}}}w()}function I(){R();for(const y in n){const P=n[y];for(const G in P){const k=P[G];for(const W in k)h(k[W].object),delete k[W];delete P[G]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const G in P){const k=P[G];for(const W in k)h(k[W].object),delete k[W];delete P[G]}delete n[y.id]}function C(y){for(const P in n){const G=n[P];if(G[y.id]===void 0)continue;const k=G[y.id];for(const W in k)h(k[W].object),delete k[W];delete G[y.id]}}function R(){b(),a=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:r,reset:R,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function up(o,e,t){let n;function i(c){n=c}function s(c,h){o.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(o.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function r(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,n,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*u[x];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function fp(o,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==tn&&n.convert(C)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(C){const R=C===Sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Tn&&n.convert(C)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==bn&&!R)}function l(C){if(C==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=o.getParameter(o.MAX_TEXTURE_SIZE),m=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),S=o.getParameter(o.MAX_VARYING_VECTORS),v=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:I,maxSamples:A}}function pp(o){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Zn,r=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=o.get(d);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const w=s?0:n,S=w*4;let v=p.clippingState||null;l.value=v,v=h(g,u,S,f);for(let I=0;I!==S;++I)v[I]=t[I];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=f+x*4,w=u.matrixWorldInverse;r.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==x;++S,v+=4)a.copy(d[S]).applyMatrix4(w,r),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function mp(o){let e=new WeakMap;function t(a,r){return r===br?a.mapping=Ui:r===wr&&(a.mapping=Ni),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===br||r===wr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ed(l.height);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class ga extends Vc{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,r=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Pi=4,ll=[.125,.215,.35,.446,.526,.582],ti=20,Jo=new ga,cl=new be;let Ko=null,Zo=0,Qo=0,er=!1;const Qn=(1+Math.sqrt(5))/2,Ei=1/Qn,hl=[new L(-Qn,Ei,0),new L(Qn,Ei,0),new L(-Ei,0,Qn),new L(Ei,0,Qn),new L(0,Qn,-Ei),new L(0,Qn,Ei),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class dl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ko,Zo,Qo),this._renderer.xr.enabled=er,e.scissorTest=!1,Ys(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ui||e.mapping===Ni?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ko=this._renderer.getRenderTarget(),Zo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Sn,format:tn,colorSpace:Vi,depthBuffer:!1},i=ul(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ul(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gp(s)),this._blurMaterial=xp(s,e,t)}return i}_compileMaterial(e){const t=new D(this._lodPlanes[0],e);this._renderer.compile(t,Jo)}_sceneToCubeUV(e,t,n,i){const r=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(cl),h.toneMapping=kn,h.autoClear=!1;const f=new Ht({name:"PMREM.Background",side:Rt,depthWrite:!1,depthTest:!1}),g=new D(new K,f);let x=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,x=!0):(f.color.copy(cl),x=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(r.up.set(0,l[p],0),r.lookAt(c[p],0,0)):w===1?(r.up.set(0,0,l[p]),r.lookAt(0,c[p],0)):(r.up.set(0,l[p],0),r.lookAt(0,0,c[p]));const S=this._cubeSize;Ys(i,w*S,p>2?S:0,S,S),h.setRenderTarget(i),x&&h.render(g,r),h.render(e,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ui||e.mapping===Ni;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fl());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new D(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const l=this._cubeSize;Ys(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Jo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=hl[(i-s-1)%hl.length];this._blur(e,s-1,s,a,r)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new D(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ti-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):ti;m>ti&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ti}`);const p=[];let w=0;for(let C=0;C<ti;++C){const R=C/x,b=Math.exp(-R*R/2);p.push(b),C===0?w+=b:C<m&&(w+=2*b)}for(let C=0;C<p.length;C++)p[C]=p[C]/w;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const v=this._sizeLods[i],I=3*v*(i>S-Pi?i-S+Pi:0),A=4*(this._cubeSize-v);Ys(t,I,A,3*v,2*v),l.setRenderTarget(t),l.render(d,Jo)}}function gp(o){const e=[],t=[],n=[];let i=o;const s=o-Pi+1+ll.length;for(let a=0;a<s;a++){const r=Math.pow(2,i);t.push(r);let l=1/r;a>o-Pi?l=ll[a-o+Pi-1]:a===0&&(l=0),n.push(l);const c=1/(r-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,m=2,p=1,w=new Float32Array(x*g*f),S=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let A=0;A<f;A++){const C=A%3*2/3-1,R=A>2?0:-1,b=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];w.set(b,x*g*A),S.set(u,m*g*A);const y=[A,A,A,A,A,A];v.set(y,p*g*A)}const I=new Pt;I.setAttribute("position",new on(w,x)),I.setAttribute("uv",new on(S,m)),I.setAttribute("faceIndex",new on(v,p)),e.push(I),i>Pi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ul(o,e,t){const n=new sn(o,e,t);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ys(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function xp(o,e,t){const n=new Float32Array(ti),i=new L(0,1,0);return new Ct({name:"SphericalGaussianBlur",defines:{n:ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:xa(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function fl(){return new Ct({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

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
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function pl(){return new Ct({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function xa(){return`

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
	`}function vp(o){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===br||l===wr,h=l===Ui||l===Ni;if(c||h){let d=e.get(r);const u=d!==void 0?d.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==u)return t===null&&(t=new dl(o)),d=c?t.fromEquirectangular(r,d):t.fromCubemap(r,d),d.texture.pmremVersion=r.pmremVersion,e.set(r,d),d.texture;if(d!==void 0)return d.texture;{const f=r.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new dl(o)),d=c?t.fromEquirectangular(r):t.fromCubemap(r),d.texture.pmremVersion=r.pmremVersion,e.set(r,d),r.addEventListener("dispose",s),d.texture):null}}}return r}function i(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function _p(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&hs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function yp(o,e,t,n){const i={},s=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)e.remove(x[m])}u.removeEventListener("dispose",a),delete i[u.id];const f=s.get(u);f&&(e.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function r(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],o.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const x=f[g];for(let m=0,p=x.length;m<p;m++)e.update(x[m],o.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let x=0;if(f!==null){const w=f.array;x=f.version;for(let S=0,v=w.length;S<v;S+=3){const I=w[S+0],A=w[S+1],C=w[S+2];u.push(I,A,A,C,C,I)}}else if(g!==void 0){const w=g.array;x=g.version;for(let S=0,v=w.length/3-1;S<v;S+=3){const I=S+0,A=S+1,C=S+2;u.push(I,A,A,C,C,I)}}else return;const m=new(Fc(u)?Gc:zc)(u,1);m.version=x;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function h(d){const u=s.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:r,update:l,getWireframeAttribute:h}}function bp(o,e,t){let n;function i(u){n=u}let s,a;function r(u){s=u.type,a=u.bytesPerElement}function l(u,f){o.drawElements(n,f,s,u*a),t.update(f,n,1)}function c(u,f,g){g!==0&&(o.drawElementsInstanced(n,f,s,u*a,g),t.update(f,n,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function d(u,f,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,x,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*x[w];t.update(p,n,1)}}this.setMode=i,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function wp(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,r){switch(t.calls++,a){case o.TRIANGLES:t.triangles+=r*(s/3);break;case o.LINES:t.lines+=r*(s/2);break;case o.LINE_STRIP:t.lines+=r*(s-1);break;case o.LINE_LOOP:t.lines+=r*s;break;case o.POINTS:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Mp(o,e,t){const n=new WeakMap,i=new it;function s(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(r);if(u===void 0||u.count!==d){let y=function(){R.dispose(),n.delete(r),r.removeEventListener("dispose",y)};var f=y;u!==void 0&&u.texture.dispose();const g=r.morphAttributes.position!==void 0,x=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],w=r.morphAttributes.normal||[],S=r.morphAttributes.color||[];let v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let I=r.attributes.position.count*v,A=1;I>e.maxTextureSize&&(A=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const C=new Float32Array(I*A*4*d),R=new Uc(C,I,A,d);R.type=bn,R.needsUpdate=!0;const b=v*4;for(let P=0;P<d;P++){const G=p[P],k=w[P],W=S[P],q=I*A*4*P;for(let X=0;X<G.count;X++){const ee=X*b;g===!0&&(i.fromBufferAttribute(G,X),C[q+ee+0]=i.x,C[q+ee+1]=i.y,C[q+ee+2]=i.z,C[q+ee+3]=0),x===!0&&(i.fromBufferAttribute(k,X),C[q+ee+4]=i.x,C[q+ee+5]=i.y,C[q+ee+6]=i.z,C[q+ee+7]=0),m===!0&&(i.fromBufferAttribute(W,X),C[q+ee+8]=i.x,C[q+ee+9]=i.y,C[q+ee+10]=i.z,C[q+ee+11]=W.itemSize===4?i.w:1)}}u={count:d,texture:R,size:new Le(I,A)},n.set(r,u),r.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(o,"morphTargetBaseInfluence",x),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(o,"morphTargetsTextureSize",u.size)}return{update:s}}function Sp(o,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=e.get(l,h);if(i.get(d)!==c&&(e.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),i.get(l)!==c&&(t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function a(){i=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class qc extends Lt{constructor(e,t,n,i,s,a,r,l,c,h=Li){if(h!==Li&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Li&&(n=li),n===void 0&&h===ki&&(n=Oi),super(null,i,s,a,r,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Yc=new Lt,ml=new qc(1,1),jc=new Uc,$c=new hd,Jc=new Wc,gl=[],xl=[],vl=new Float32Array(16),_l=new Float32Array(9),yl=new Float32Array(4);function qi(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let s=gl[i];if(s===void 0&&(s=new Float32Array(i),gl[i]=s),e!==0){n.toArray(s,0);for(let a=1,r=0;a!==e;++a)r+=t,o[a].toArray(s,r)}return s}function yt(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function bt(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function bo(o,e){let t=xl[e];t===void 0&&(t=new Int32Array(e),xl[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function Ep(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function Tp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;o.uniform2fv(this.addr,e),bt(t,e)}}function Ap(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;o.uniform3fv(this.addr,e),bt(t,e)}}function Cp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;o.uniform4fv(this.addr,e),bt(t,e)}}function Rp(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;yl.set(n),o.uniformMatrix2fv(this.addr,!1,yl),bt(t,n)}}function Pp(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;_l.set(n),o.uniformMatrix3fv(this.addr,!1,_l),bt(t,n)}}function Ip(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),bt(t,e)}else{if(yt(t,n))return;vl.set(n),o.uniformMatrix4fv(this.addr,!1,vl),bt(t,n)}}function Dp(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Lp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;o.uniform2iv(this.addr,e),bt(t,e)}}function Fp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;o.uniform3iv(this.addr,e),bt(t,e)}}function Bp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;o.uniform4iv(this.addr,e),bt(t,e)}}function Up(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function Np(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;o.uniform2uiv(this.addr,e),bt(t,e)}}function Op(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;o.uniform3uiv(this.addr,e),bt(t,e)}}function kp(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;o.uniform4uiv(this.addr,e),bt(t,e)}}function zp(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i);let s;this.type===o.SAMPLER_2D_SHADOW?(ml.compareFunction=Lc,s=ml):s=Yc,t.setTexture2D(e||s,i)}function Gp(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$c,i)}function Hp(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jc,i)}function Vp(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||jc,i)}function Wp(o){switch(o){case 5126:return Ep;case 35664:return Tp;case 35665:return Ap;case 35666:return Cp;case 35674:return Rp;case 35675:return Pp;case 35676:return Ip;case 5124:case 35670:return Dp;case 35667:case 35671:return Lp;case 35668:case 35672:return Fp;case 35669:case 35673:return Bp;case 5125:return Up;case 36294:return Np;case 36295:return Op;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return zp;case 35679:case 36299:case 36307:return Gp;case 35680:case 36300:case 36308:case 36293:return Hp;case 36289:case 36303:case 36311:case 36292:return Vp}}function Xp(o,e){o.uniform1fv(this.addr,e)}function qp(o,e){const t=qi(e,this.size,2);o.uniform2fv(this.addr,t)}function Yp(o,e){const t=qi(e,this.size,3);o.uniform3fv(this.addr,t)}function jp(o,e){const t=qi(e,this.size,4);o.uniform4fv(this.addr,t)}function $p(o,e){const t=qi(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Jp(o,e){const t=qi(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Kp(o,e){const t=qi(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Zp(o,e){o.uniform1iv(this.addr,e)}function Qp(o,e){o.uniform2iv(this.addr,e)}function e0(o,e){o.uniform3iv(this.addr,e)}function t0(o,e){o.uniform4iv(this.addr,e)}function n0(o,e){o.uniform1uiv(this.addr,e)}function i0(o,e){o.uniform2uiv(this.addr,e)}function s0(o,e){o.uniform3uiv(this.addr,e)}function o0(o,e){o.uniform4uiv(this.addr,e)}function r0(o,e,t){const n=this.cache,i=e.length,s=bo(t,i);yt(n,s)||(o.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Yc,s[a])}function a0(o,e,t){const n=this.cache,i=e.length,s=bo(t,i);yt(n,s)||(o.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||$c,s[a])}function l0(o,e,t){const n=this.cache,i=e.length,s=bo(t,i);yt(n,s)||(o.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Jc,s[a])}function c0(o,e,t){const n=this.cache,i=e.length,s=bo(t,i);yt(n,s)||(o.uniform1iv(this.addr,s),bt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||jc,s[a])}function h0(o){switch(o){case 5126:return Xp;case 35664:return qp;case 35665:return Yp;case 35666:return jp;case 35674:return $p;case 35675:return Jp;case 35676:return Kp;case 5124:case 35670:return Zp;case 35667:case 35671:return Qp;case 35668:case 35672:return e0;case 35669:case 35673:return t0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return o0;case 35678:case 36198:case 36298:case 36306:case 35682:return r0;case 35679:case 36299:case 36307:return a0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}class d0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Wp(t.type)}}class u0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=h0(t.type)}}class f0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const r=i[s];r.setValue(e,t[r.id],n)}}}const tr=/(\w+)(\])?(\[|\.)?/g;function bl(o,e){o.seq.push(e),o.map[e.id]=e}function p0(o,e,t){const n=o.name,i=n.length;for(tr.lastIndex=0;;){const s=tr.exec(n),a=tr.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===i){bl(t,c===void 0?new d0(r,o,e):new u0(r,o,e));break}else{let d=t.map[r];d===void 0&&(d=new f0(r),bl(t,d)),t=d}}}class oo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);p0(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const r=t[s],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function wl(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}const m0=37297;let g0=0;function x0(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const r=a+1;n.push(`${r===e?">":" "} ${r}: ${t[a]}`)}return n.join(`
`)}const Ml=new Ge;function v0(o){Ye._getMatrix(Ml,Ye.workingColorSpace,o);const e=`mat3( ${Ml.elements.map(t=>t.toFixed(4))} )`;switch(Ye.getTransfer(o)){case _o:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Sl(o,e,t){const n=o.getShaderParameter(e,o.COMPILE_STATUS),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+x0(o.getShaderSource(e),a)}else return i}function _0(o,e){const t=v0(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function y0(o,e){let t;switch(e){case gc:t="Linear";break;case xc:t="Reinhard";break;case vc:t="Cineon";break;case aa:t="ACESFilmic";break;case _c:t="AgX";break;case yc:t="Neutral";break;case kh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const js=new L;function b0(){Ye.getLuminanceCoefficients(js);const o=js.x.toFixed(4),e=js.y.toFixed(4),t=js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function w0(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function M0(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function S0(o,e){const t={},n=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=o.getActiveAttrib(e,i),a=s.name;let r=1;s.type===o.FLOAT_MAT2&&(r=2),s.type===o.FLOAT_MAT3&&(r=3),s.type===o.FLOAT_MAT4&&(r=4),t[a]={type:s.type,location:o.getAttribLocation(e,a),locationSize:r}}return t}function ds(o){return o!==""}function El(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tl(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const E0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qr(o){return o.replace(E0,A0)}const T0=new Map;function A0(o,e){let t=Ve[e];if(t===void 0){const n=T0.get(e);if(n!==void 0)t=Ve[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Qr(t)}const C0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Al(o){return o.replace(C0,R0)}function R0(o,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Cl(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function P0(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===pc?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===mc?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===_n&&(e="SHADOWMAP_TYPE_VSM"),e}function I0(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ui:case Ni:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function D0(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ni:e="ENVMAP_MODE_REFRACTION";break}return e}function L0(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ra:e="ENVMAP_BLENDING_MULTIPLY";break;case Nh:e="ENVMAP_BLENDING_MIX";break;case Oh:e="ENVMAP_BLENDING_ADD";break}return e}function F0(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function B0(o,e,t,n){const i=o.getContext(),s=t.defines;let a=t.vertexShader,r=t.fragmentShader;const l=P0(t),c=I0(t),h=D0(t),d=L0(t),u=F0(t),f=w0(t),g=M0(s),x=i.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ds).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ds).join(`
`),p.length>0&&(p+=`
`)):(m=[Cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),p=[Cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==kn?"#define TONE_MAPPING":"",t.toneMapping!==kn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==kn?y0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,_0("linearToOutputTexel",t.outputColorSpace),b0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),a=Qr(a),a=El(a,t),a=Tl(a,t),r=Qr(r),r=El(r,t),r=Tl(r,t),a=Al(a),r=Al(r),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=w+m+a,v=w+p+r,I=wl(i,i.VERTEX_SHADER,S),A=wl(i,i.FRAGMENT_SHADER,v);i.attachShader(x,I),i.attachShader(x,A),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(P){if(o.debug.checkShaderErrors){const G=i.getProgramInfoLog(x).trim(),k=i.getShaderInfoLog(I).trim(),W=i.getShaderInfoLog(A).trim();let q=!0,X=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(i,x,I,A);else{const ee=Sl(i,I,"vertex"),O=Sl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+ee+`
`+O)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||W==="")&&(X=!1);X&&(P.diagnostics={runnable:q,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(I),i.deleteShader(A),R=new oo(i,x),b=S0(i,x)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,m0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=g0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=A,this}let U0=0;class N0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new O0(e),t.set(e,n)),n}}class O0{constructor(e){this.id=U0++,this.code=e,this.usedTimes=0}}function k0(o,e,t,n,i,s,a){const r=new Oc,l=new N0,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,P,G,k){const W=G.fog,q=k.geometry,X=b.isMeshStandardMaterial?G.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),O=ee&&ee.mapping===vo?ee.image.height:null,te=g[b.type];b.precision!==null&&(f=i.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ie=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,we=ie!==void 0?ie.length:0;let Fe=0;q.morphAttributes.position!==void 0&&(Fe=1),q.morphAttributes.normal!==void 0&&(Fe=2),q.morphAttributes.color!==void 0&&(Fe=3);let Xe,$,oe,ye;if(te){const et=ln[te];Xe=et.vertexShader,$=et.fragmentShader}else Xe=b.vertexShader,$=b.fragmentShader,l.update(b),oe=l.getVertexShaderID(b),ye=l.getFragmentShaderID(b);const le=o.getRenderTarget(),se=o.state.buffers.depth.getReversed(),ge=k.isInstancedMesh===!0,Ie=k.isBatchedMesh===!0,$e=!!b.map,Oe=!!b.matcap,ot=!!ee,B=!!b.aoMap,pt=!!b.lightMap,Ae=!!b.bumpMap,ue=!!b.normalMap,Te=!!b.displacementMap,Je=!!b.emissiveMap,Ce=!!b.metalnessMap,T=!!b.roughnessMap,_=b.anisotropy>0,z=b.clearcoat>0,Z=b.dispersion>0,ne=b.iridescence>0,J=b.sheen>0,Re=b.transmission>0,de=_&&!!b.anisotropyMap,xe=z&&!!b.clearcoatMap,je=z&&!!b.clearcoatNormalMap,re=z&&!!b.clearcoatRoughnessMap,ve=ne&&!!b.iridescenceMap,De=ne&&!!b.iridescenceThicknessMap,Be=J&&!!b.sheenColorMap,_e=J&&!!b.sheenRoughnessMap,qe=!!b.specularMap,He=!!b.specularColorMap,rt=!!b.specularIntensityMap,F=Re&&!!b.transmissionMap,he=Re&&!!b.thicknessMap,Y=!!b.gradientMap,Q=!!b.alphaMap,me=b.alphaTest>0,fe=!!b.alphaHash,ke=!!b.extensions;let ft=kn;b.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ft=o.toneMapping);const Et={shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:Xe,fragmentShader:$,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:ye,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Ie,batchingColor:Ie&&k._colorsTexture!==null,instancing:ge,instancingColor:ge&&k.instanceColor!==null,instancingMorph:ge&&k.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:le===null?o.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Vi,alphaToCoverage:!!b.alphaToCoverage,map:$e,matcap:Oe,envMap:ot,envMapMode:ot&&ee.mapping,envMapCubeUVHeight:O,aoMap:B,lightMap:pt,bumpMap:Ae,normalMap:ue,displacementMap:u&&Te,emissiveMap:Je,normalMapObjectSpace:ue&&b.normalMapType===Yh,normalMapTangentSpace:ue&&b.normalMapType===Dc,metalnessMap:Ce,roughnessMap:T,anisotropy:_,anisotropyMap:de,clearcoat:z,clearcoatMap:xe,clearcoatNormalMap:je,clearcoatRoughnessMap:re,dispersion:Z,iridescence:ne,iridescenceMap:ve,iridescenceThicknessMap:De,sheen:J,sheenColorMap:Be,sheenRoughnessMap:_e,specularMap:qe,specularColorMap:He,specularIntensityMap:rt,transmission:Re,transmissionMap:F,thicknessMap:he,gradientMap:Y,opaque:b.transparent===!1&&b.blending===Di&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:me,alphaHash:fe,combine:b.combine,mapUv:$e&&x(b.map.channel),aoMapUv:B&&x(b.aoMap.channel),lightMapUv:pt&&x(b.lightMap.channel),bumpMapUv:Ae&&x(b.bumpMap.channel),normalMapUv:ue&&x(b.normalMap.channel),displacementMapUv:Te&&x(b.displacementMap.channel),emissiveMapUv:Je&&x(b.emissiveMap.channel),metalnessMapUv:Ce&&x(b.metalnessMap.channel),roughnessMapUv:T&&x(b.roughnessMap.channel),anisotropyMapUv:de&&x(b.anisotropyMap.channel),clearcoatMapUv:xe&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:je&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:De&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:_e&&x(b.sheenRoughnessMap.channel),specularMapUv:qe&&x(b.specularMap.channel),specularColorMapUv:He&&x(b.specularColorMap.channel),specularIntensityMapUv:rt&&x(b.specularIntensityMap.channel),transmissionMapUv:F&&x(b.transmissionMap.channel),thicknessMapUv:he&&x(b.thicknessMap.channel),alphaMapUv:Q&&x(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(ue||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&($e||Q),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:se,skinning:k.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:Fe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:ft,decodeVideoTexture:$e&&b.map.isVideoTexture===!0&&Ye.getTransfer(b.map.colorSpace)===tt,decodeVideoTextureEmissive:Je&&b.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(b.emissiveMap.colorSpace)===tt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===zt,flipSided:b.side===Rt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ke&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&b.extensions.multiDraw===!0||Ie)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function p(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)y.push(P),y.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(w(y,b),S(y,b),y.push(o.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function w(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function S(b,y){r.disableAll(),y.supportsVertexTextures&&r.enable(0),y.instancing&&r.enable(1),y.instancingColor&&r.enable(2),y.instancingMorph&&r.enable(3),y.matcap&&r.enable(4),y.envMap&&r.enable(5),y.normalMapObjectSpace&&r.enable(6),y.normalMapTangentSpace&&r.enable(7),y.clearcoat&&r.enable(8),y.iridescence&&r.enable(9),y.alphaTest&&r.enable(10),y.vertexColors&&r.enable(11),y.vertexAlphas&&r.enable(12),y.vertexUv1s&&r.enable(13),y.vertexUv2s&&r.enable(14),y.vertexUv3s&&r.enable(15),y.vertexTangents&&r.enable(16),y.anisotropy&&r.enable(17),y.alphaHash&&r.enable(18),y.batching&&r.enable(19),y.dispersion&&r.enable(20),y.batchingColor&&r.enable(21),b.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.reverseDepthBuffer&&r.enable(4),y.skinning&&r.enable(5),y.morphTargets&&r.enable(6),y.morphNormals&&r.enable(7),y.morphColors&&r.enable(8),y.premultipliedAlpha&&r.enable(9),y.shadowMapEnabled&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),y.decodeVideoTextureEmissive&&r.enable(20),y.alphaToCoverage&&r.enable(21),b.push(r.mask)}function v(b){const y=g[b.type];let P;if(y){const G=ln[y];P=xs.clone(G.uniforms)}else P=b.uniforms;return P}function I(b,y){let P;for(let G=0,k=h.length;G<k;G++){const W=h[G];if(W.cacheKey===y){P=W,++P.usedTimes;break}}return P===void 0&&(P=new B0(o,y,b,s),h.push(P)),P}function A(b){if(--b.usedTimes===0){const y=h.indexOf(b);h[y]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:I,releaseProgram:A,releaseShaderCache:C,programs:h,dispose:R}}function z0(){let o=new WeakMap;function e(a){return o.has(a)}function t(a){let r=o.get(a);return r===void 0&&(r={},o.set(a,r)),r}function n(a){o.delete(a)}function i(a,r,l){o.get(a)[r]=l}function s(){o=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function G0(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Rl(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Pl(){const o=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,f,g,x,m){let p=o[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},o[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=x,p.group=m),e++,p}function r(d,u,f,g,x,m){const p=a(d,u,f,g,x,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(d,u,f,g,x,m){const p=a(d,u,f,g,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||G0),n.length>1&&n.sort(u||Rl),i.length>1&&i.sort(u||Rl)}function h(){for(let d=e,u=o.length;d<u;d++){const f=o[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:r,unshift:l,finish:h,sort:c}}function H0(){let o=new WeakMap;function e(n,i){const s=o.get(n);let a;return s===void 0?(a=new Pl,o.set(n,[a])):i>=s.length?(a=new Pl,s.push(a)):a=s[i],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function V0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new be};break;case"SpotLight":t={position:new L,direction:new L,color:new be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new be,groundColor:new be};break;case"RectAreaLight":t={color:new be,position:new L,halfWidth:new L,halfHeight:new L};break}return o[e.id]=t,t}}}function W0(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let X0=0;function q0(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Y0(o){const e=new V0,t=W0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,s=new ut,a=new ut;function r(c){let h=0,d=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,w=0,S=0,v=0,I=0,A=0,C=0;c.sort(q0);for(let b=0,y=c.length;b<y;b++){const P=c[b],G=P.color,k=P.intensity,W=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=G.r*k,d+=G.g*k,u+=G.b*k;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],k);C++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,O=t.get(P);O.shadowIntensity=ee.intensity,O.shadowBias=ee.bias,O.shadowNormalBias=ee.normalBias,O.shadowRadius=ee.radius,O.shadowMapSize=ee.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=P.shadow.matrix,w++}n.directional[f]=X,f++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(G).multiplyScalar(k),X.distance=W,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[x]=X;const ee=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,ee.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[x]=ee.matrix,P.castShadow){const O=t.get(P);O.shadowIntensity=ee.intensity,O.shadowBias=ee.bias,O.shadowNormalBias=ee.normalBias,O.shadowRadius=ee.radius,O.shadowMapSize=ee.mapSize,n.spotShadow[x]=O,n.spotShadowMap[x]=q,v++}x++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(G).multiplyScalar(k),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=X,m++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const ee=P.shadow,O=t.get(P);O.shadowIntensity=ee.intensity,O.shadowBias=ee.bias,O.shadowNormalBias=ee.normalBias,O.shadowRadius=ee.radius,O.shadowMapSize=ee.mapSize,O.shadowCameraNear=ee.camera.near,O.shadowCameraFar=ee.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=X,g++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(k),X.groundColor.copy(P.groundColor).multiplyScalar(k),n.hemi[p]=X,p++}}m>0&&(o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==f||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==w||R.numPointShadows!==S||R.numSpotShadows!==v||R.numSpotMaps!==I||R.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=C,R.directionalLength=f,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=w,R.numPointShadows=S,R.numSpotShadows=v,R.numSpotMaps=I,R.numLightProbes=C,n.version=X0++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0;const m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const v=n.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:r,setupView:l,state:n}}function Il(o){const e=new Y0(o),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function a(h){n.push(h)}function r(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:r,setupLightsView:l,pushLight:s,pushShadow:a}}function j0(o){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let r;return a===void 0?(r=new Il(o),e.set(i,[r])):s>=a.length?(r=new Il(o),a.push(r)):r=a[s],r}function n(){e=new WeakMap}return{get:t,dispose:n}}class $0 extends Xi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Xh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class J0 extends Xi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
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
}`;function Q0(o,e,t){let n=new ma;const i=new Le,s=new Le,a=new it,r=new $0({depthPacking:qh}),l=new J0,c={},h=t.maxTextureSize,d={[Gn]:Rt,[Rt]:Gn,[zt]:zt},u=new Ct({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:K0,fragmentShader:Z0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pt;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new D(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let p=this.type;this.render=function(A,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=o.getRenderTarget(),y=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),G=o.state;G.setBlending(Mn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const k=p!==_n&&this.type===_n,W=p===_n&&this.type!==_n;for(let q=0,X=A.length;q<X;q++){const ee=A[q],O=ee.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const te=O.getFrameExtents();if(i.multiply(te),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/te.x),i.x=s.x*te.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/te.y),i.y=s.y*te.y,O.mapSize.y=s.y)),O.map===null||k===!0||W===!0){const we=this.type!==_n?{minFilter:nn,magFilter:nn}:{};O.map!==null&&O.map.dispose(),O.map=new sn(i.x,i.y,we),O.map.texture.name=ee.name+".shadowMap",O.camera.updateProjectionMatrix()}o.setRenderTarget(O.map),o.clear();const ie=O.getViewportCount();for(let we=0;we<ie;we++){const Fe=O.getViewport(we);a.set(s.x*Fe.x,s.y*Fe.y,s.x*Fe.z,s.y*Fe.w),G.viewport(a),O.updateMatrices(ee,we),n=O.getFrustum(),v(C,R,O.camera,ee,this.type)}O.isPointLightShadow!==!0&&this.type===_n&&w(O,R),O.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(b,y,P)};function w(A,C){const R=e.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new sn(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,o.setRenderTarget(A.mapPass),o.clear(),o.renderBufferDirect(C,null,R,u,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,o.setRenderTarget(A.map),o.clear(),o.renderBufferDirect(C,null,R,f,x,null)}function S(A,C,R,b){let y=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?l:r,o.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const G=y.uuid,k=C.uuid;let W=c[G];W===void 0&&(W={},c[G]=W);let q=W[k];q===void 0&&(q=y.clone(),W[k]=q,C.addEventListener("dispose",I)),y=q}if(y.visible=C.visible,y.wireframe=C.wireframe,b===_n?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=o.properties.get(y);G.light=R}return y}function v(A,C,R,b,y){if(A.visible===!1)return;if(A.layers.test(C.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===_n)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const k=e.update(A),W=A.material;if(Array.isArray(W)){const q=k.groups;for(let X=0,ee=q.length;X<ee;X++){const O=q[X],te=W[O.materialIndex];if(te&&te.visible){const ie=S(A,te,b,y);A.onBeforeShadow(o,A,C,R,k,ie,O),o.renderBufferDirect(R,null,k,ie,A,O),A.onAfterShadow(o,A,C,R,k,ie,O)}}}else if(W.visible){const q=S(A,W,b,y);A.onBeforeShadow(o,A,C,R,k,q,null),o.renderBufferDirect(R,null,k,q,A,null),A.onAfterShadow(o,A,C,R,k,q,null)}}const G=A.children;for(let k=0,W=G.length;k<W;k++)v(G[k],C,R,b,y)}function I(A){A.target.removeEventListener("dispose",I);for(const R in c){const b=c[R],y=A.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const em={[pr]:mr,[gr]:_r,[xr]:yr,[Bi]:vr,[mr]:pr,[_r]:gr,[yr]:xr,[vr]:Bi};function tm(o,e){function t(){let F=!1;const he=new it;let Y=null;const Q=new it(0,0,0,0);return{setMask:function(me){Y!==me&&!F&&(o.colorMask(me,me,me,me),Y=me)},setLocked:function(me){F=me},setClear:function(me,fe,ke,ft,Et){Et===!0&&(me*=ft,fe*=ft,ke*=ft),he.set(me,fe,ke,ft),Q.equals(he)===!1&&(o.clearColor(me,fe,ke,ft),Q.copy(he))},reset:function(){F=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let F=!1,he=!1,Y=null,Q=null,me=null;return{setReversed:function(fe){if(he!==fe){const ke=e.get("EXT_clip_control");he?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT);const ft=me;me=null,this.setClear(ft)}he=fe},getReversed:function(){return he},setTest:function(fe){fe?le(o.DEPTH_TEST):se(o.DEPTH_TEST)},setMask:function(fe){Y!==fe&&!F&&(o.depthMask(fe),Y=fe)},setFunc:function(fe){if(he&&(fe=em[fe]),Q!==fe){switch(fe){case pr:o.depthFunc(o.NEVER);break;case mr:o.depthFunc(o.ALWAYS);break;case gr:o.depthFunc(o.LESS);break;case Bi:o.depthFunc(o.LEQUAL);break;case xr:o.depthFunc(o.EQUAL);break;case vr:o.depthFunc(o.GEQUAL);break;case _r:o.depthFunc(o.GREATER);break;case yr:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Q=fe}},setLocked:function(fe){F=fe},setClear:function(fe){me!==fe&&(he&&(fe=1-fe),o.clearDepth(fe),me=fe)},reset:function(){F=!1,Y=null,Q=null,me=null,he=!1}}}function i(){let F=!1,he=null,Y=null,Q=null,me=null,fe=null,ke=null,ft=null,Et=null;return{setTest:function(et){F||(et?le(o.STENCIL_TEST):se(o.STENCIL_TEST))},setMask:function(et){he!==et&&!F&&(o.stencilMask(et),he=et)},setFunc:function(et,Yt,dn){(Y!==et||Q!==Yt||me!==dn)&&(o.stencilFunc(et,Yt,dn),Y=et,Q=Yt,me=dn)},setOp:function(et,Yt,dn){(fe!==et||ke!==Yt||ft!==dn)&&(o.stencilOp(et,Yt,dn),fe=et,ke=Yt,ft=dn)},setLocked:function(et){F=et},setClear:function(et){Et!==et&&(o.clearStencil(et),Et=et)},reset:function(){F=!1,he=null,Y=null,Q=null,me=null,fe=null,ke=null,ft=null,Et=null}}}const s=new t,a=new n,r=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,S=null,v=null,I=null,A=null,C=new be(0,0,0),R=0,b=!1,y=null,P=null,G=null,k=null,W=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,ee=0;const O=o.getParameter(o.VERSION);O.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(O)[1]),X=ee>=1):O.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),X=ee>=2);let te=null,ie={};const we=o.getParameter(o.SCISSOR_BOX),Fe=o.getParameter(o.VIEWPORT),Xe=new it().fromArray(we),$=new it().fromArray(Fe);function oe(F,he,Y,Q){const me=new Uint8Array(4),fe=o.createTexture();o.bindTexture(F,fe),o.texParameteri(F,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(F,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ke=0;ke<Y;ke++)F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY?o.texImage3D(he,0,o.RGBA,1,1,Q,0,o.RGBA,o.UNSIGNED_BYTE,me):o.texImage2D(he+ke,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,me);return fe}const ye={};ye[o.TEXTURE_2D]=oe(o.TEXTURE_2D,o.TEXTURE_2D,1),ye[o.TEXTURE_CUBE_MAP]=oe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[o.TEXTURE_2D_ARRAY]=oe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ye[o.TEXTURE_3D]=oe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),r.setClear(0),le(o.DEPTH_TEST),a.setFunc(Bi),Ae(!1),ue(Ua),le(o.CULL_FACE),B(Mn);function le(F){h[F]!==!0&&(o.enable(F),h[F]=!0)}function se(F){h[F]!==!1&&(o.disable(F),h[F]=!1)}function ge(F,he){return d[F]!==he?(o.bindFramebuffer(F,he),d[F]=he,F===o.DRAW_FRAMEBUFFER&&(d[o.FRAMEBUFFER]=he),F===o.FRAMEBUFFER&&(d[o.DRAW_FRAMEBUFFER]=he),!0):!1}function Ie(F,he){let Y=f,Q=!1;if(F){Y=u.get(he),Y===void 0&&(Y=[],u.set(he,Y));const me=F.textures;if(Y.length!==me.length||Y[0]!==o.COLOR_ATTACHMENT0){for(let fe=0,ke=me.length;fe<ke;fe++)Y[fe]=o.COLOR_ATTACHMENT0+fe;Y.length=me.length,Q=!0}}else Y[0]!==o.BACK&&(Y[0]=o.BACK,Q=!0);Q&&o.drawBuffers(Y)}function $e(F){return g!==F?(o.useProgram(F),g=F,!0):!1}const Oe={[ei]:o.FUNC_ADD,[yh]:o.FUNC_SUBTRACT,[bh]:o.FUNC_REVERSE_SUBTRACT};Oe[wh]=o.MIN,Oe[Mh]=o.MAX;const ot={[Sh]:o.ZERO,[Eh]:o.ONE,[Th]:o.SRC_COLOR,[ur]:o.SRC_ALPHA,[Dh]:o.SRC_ALPHA_SATURATE,[Ph]:o.DST_COLOR,[Ch]:o.DST_ALPHA,[Ah]:o.ONE_MINUS_SRC_COLOR,[fr]:o.ONE_MINUS_SRC_ALPHA,[Ih]:o.ONE_MINUS_DST_COLOR,[Rh]:o.ONE_MINUS_DST_ALPHA,[Lh]:o.CONSTANT_COLOR,[Fh]:o.ONE_MINUS_CONSTANT_COLOR,[Bh]:o.CONSTANT_ALPHA,[Uh]:o.ONE_MINUS_CONSTANT_ALPHA};function B(F,he,Y,Q,me,fe,ke,ft,Et,et){if(F===Mn){x===!0&&(se(o.BLEND),x=!1);return}if(x===!1&&(le(o.BLEND),x=!0),F!==_h){if(F!==m||et!==b){if((p!==ei||v!==ei)&&(o.blendEquation(o.FUNC_ADD),p=ei,v=ei),et)switch(F){case Di:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case dr:o.blendFunc(o.ONE,o.ONE);break;case Na:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Oa:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Di:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case dr:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Na:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Oa:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,S=null,I=null,A=null,C.set(0,0,0),R=0,m=F,b=et}return}me=me||he,fe=fe||Y,ke=ke||Q,(he!==p||me!==v)&&(o.blendEquationSeparate(Oe[he],Oe[me]),p=he,v=me),(Y!==w||Q!==S||fe!==I||ke!==A)&&(o.blendFuncSeparate(ot[Y],ot[Q],ot[fe],ot[ke]),w=Y,S=Q,I=fe,A=ke),(ft.equals(C)===!1||Et!==R)&&(o.blendColor(ft.r,ft.g,ft.b,Et),C.copy(ft),R=Et),m=F,b=!1}function pt(F,he){F.side===zt?se(o.CULL_FACE):le(o.CULL_FACE);let Y=F.side===Rt;he&&(Y=!Y),Ae(Y),F.blending===Di&&F.transparent===!1?B(Mn):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Q=F.stencilWrite;r.setTest(Q),Q&&(r.setMask(F.stencilWriteMask),r.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),r.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Je(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(o.SAMPLE_ALPHA_TO_COVERAGE):se(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(F){y!==F&&(F?o.frontFace(o.CW):o.frontFace(o.CCW),y=F)}function ue(F){F!==xh?(le(o.CULL_FACE),F!==P&&(F===Ua?o.cullFace(o.BACK):F===vh?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):se(o.CULL_FACE),P=F}function Te(F){F!==G&&(X&&o.lineWidth(F),G=F)}function Je(F,he,Y){F?(le(o.POLYGON_OFFSET_FILL),(k!==he||W!==Y)&&(o.polygonOffset(he,Y),k=he,W=Y)):se(o.POLYGON_OFFSET_FILL)}function Ce(F){F?le(o.SCISSOR_TEST):se(o.SCISSOR_TEST)}function T(F){F===void 0&&(F=o.TEXTURE0+q-1),te!==F&&(o.activeTexture(F),te=F)}function _(F,he,Y){Y===void 0&&(te===null?Y=o.TEXTURE0+q-1:Y=te);let Q=ie[Y];Q===void 0&&(Q={type:void 0,texture:void 0},ie[Y]=Q),(Q.type!==F||Q.texture!==he)&&(te!==Y&&(o.activeTexture(Y),te=Y),o.bindTexture(F,he||ye[F]),Q.type=F,Q.texture=he)}function z(){const F=ie[te];F!==void 0&&F.type!==void 0&&(o.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{o.compressedTexImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{o.compressedTexImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{o.texSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Re(){try{o.texSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function de(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xe(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function je(){try{o.texStorage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{o.texStorage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ve(){try{o.texImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{o.texImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(F){Xe.equals(F)===!1&&(o.scissor(F.x,F.y,F.z,F.w),Xe.copy(F))}function _e(F){$.equals(F)===!1&&(o.viewport(F.x,F.y,F.z,F.w),$.copy(F))}function qe(F,he){let Y=c.get(he);Y===void 0&&(Y=new WeakMap,c.set(he,Y));let Q=Y.get(F);Q===void 0&&(Q=o.getUniformBlockIndex(he,F.name),Y.set(F,Q))}function He(F,he){const Q=c.get(he).get(F);l.get(he)!==Q&&(o.uniformBlockBinding(he,Q,F.__bindingPointIndex),l.set(he,Q))}function rt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),a.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},te=null,ie={},d={},u=new WeakMap,f=[],g=null,x=!1,m=null,p=null,w=null,S=null,v=null,I=null,A=null,C=new be(0,0,0),R=0,b=!1,y=null,P=null,G=null,k=null,W=null,Xe.set(0,0,o.canvas.width,o.canvas.height),$.set(0,0,o.canvas.width,o.canvas.height),s.reset(),a.reset(),r.reset()}return{buffers:{color:s,depth:a,stencil:r},enable:le,disable:se,bindFramebuffer:ge,drawBuffers:Ie,useProgram:$e,setBlending:B,setMaterial:pt,setFlipSided:Ae,setCullFace:ue,setLineWidth:Te,setPolygonOffset:Je,setScissorTest:Ce,activeTexture:T,bindTexture:_,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:ne,texImage2D:ve,texImage3D:De,updateUBOMapping:qe,uniformBlockBinding:He,texStorage2D:je,texStorage3D:re,texSubImage2D:J,texSubImage3D:Re,compressedTexSubImage2D:de,compressedTexSubImage3D:xe,scissor:Be,viewport:_e,reset:rt}}function Dl(o,e,t,n){const i=nm(n);switch(t){case Ec:return o*e;case Ac:return o*e;case Cc:return o*e*2;case Rc:return o*e/i.components*i.byteLength;case da:return o*e/i.components*i.byteLength;case Pc:return o*e*2/i.components*i.byteLength;case ua:return o*e*2/i.components*i.byteLength;case Tc:return o*e*3/i.components*i.byteLength;case tn:return o*e*4/i.components*i.byteLength;case fa:return o*e*4/i.components*i.byteLength;case eo:case to:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Tr:case Cr:return Math.max(o,16)*Math.max(e,8)/4;case Er:case Ar:return Math.max(o,8)*Math.max(e,8)/2;case Rr:case Pr:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ir:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Dr:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Lr:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Fr:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Br:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Ur:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Nr:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Or:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case kr:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case zr:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Gr:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Hr:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Vr:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Wr:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Xr:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case so:case qr:case Yr:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ic:case jr:return Math.ceil(o/4)*Math.ceil(e/4)*8;case $r:case Jr:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nm(o){switch(o){case Tn:case wc:return{byteLength:1,components:1};case gs:case Mc:case Sn:return{byteLength:2,components:1};case ca:case ha:return{byteLength:2,components:4};case li:case la:case bn:return{byteLength:4,components:1};case Sc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function im(o,e,t,n,i,s,a){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Le,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return f?new OffscreenCanvas(T,_):uo("canvas")}function x(T,_,z){let Z=1;const ne=Ce(T);if((ne.width>z||ne.height>z)&&(Z=z/Math.max(ne.width,ne.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const J=Math.floor(Z*ne.width),Re=Math.floor(Z*ne.height);d===void 0&&(d=g(J,Re));const de=_?g(J,Re):d;return de.width=J,de.height=Re,de.getContext("2d").drawImage(T,0,0,J,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+Re+")."),de}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){o.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?o.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function S(T,_,z,Z,ne=!1){if(T!==null){if(o[T]!==void 0)return o[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let J=_;if(_===o.RED&&(z===o.FLOAT&&(J=o.R32F),z===o.HALF_FLOAT&&(J=o.R16F),z===o.UNSIGNED_BYTE&&(J=o.R8)),_===o.RED_INTEGER&&(z===o.UNSIGNED_BYTE&&(J=o.R8UI),z===o.UNSIGNED_SHORT&&(J=o.R16UI),z===o.UNSIGNED_INT&&(J=o.R32UI),z===o.BYTE&&(J=o.R8I),z===o.SHORT&&(J=o.R16I),z===o.INT&&(J=o.R32I)),_===o.RG&&(z===o.FLOAT&&(J=o.RG32F),z===o.HALF_FLOAT&&(J=o.RG16F),z===o.UNSIGNED_BYTE&&(J=o.RG8)),_===o.RG_INTEGER&&(z===o.UNSIGNED_BYTE&&(J=o.RG8UI),z===o.UNSIGNED_SHORT&&(J=o.RG16UI),z===o.UNSIGNED_INT&&(J=o.RG32UI),z===o.BYTE&&(J=o.RG8I),z===o.SHORT&&(J=o.RG16I),z===o.INT&&(J=o.RG32I)),_===o.RGB_INTEGER&&(z===o.UNSIGNED_BYTE&&(J=o.RGB8UI),z===o.UNSIGNED_SHORT&&(J=o.RGB16UI),z===o.UNSIGNED_INT&&(J=o.RGB32UI),z===o.BYTE&&(J=o.RGB8I),z===o.SHORT&&(J=o.RGB16I),z===o.INT&&(J=o.RGB32I)),_===o.RGBA_INTEGER&&(z===o.UNSIGNED_BYTE&&(J=o.RGBA8UI),z===o.UNSIGNED_SHORT&&(J=o.RGBA16UI),z===o.UNSIGNED_INT&&(J=o.RGBA32UI),z===o.BYTE&&(J=o.RGBA8I),z===o.SHORT&&(J=o.RGBA16I),z===o.INT&&(J=o.RGBA32I)),_===o.RGB&&z===o.UNSIGNED_INT_5_9_9_9_REV&&(J=o.RGB9_E5),_===o.RGBA){const Re=ne?_o:Ye.getTransfer(Z);z===o.FLOAT&&(J=o.RGBA32F),z===o.HALF_FLOAT&&(J=o.RGBA16F),z===o.UNSIGNED_BYTE&&(J=Re===tt?o.SRGB8_ALPHA8:o.RGBA8),z===o.UNSIGNED_SHORT_4_4_4_4&&(J=o.RGBA4),z===o.UNSIGNED_SHORT_5_5_5_1&&(J=o.RGB5_A1)}return(J===o.R16F||J===o.R32F||J===o.RG16F||J===o.RG32F||J===o.RGBA16F||J===o.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(T,_){let z;return T?_===null||_===li||_===Oi?z=o.DEPTH24_STENCIL8:_===bn?z=o.DEPTH32F_STENCIL8:_===gs&&(z=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===li||_===Oi?z=o.DEPTH_COMPONENT24:_===bn?z=o.DEPTH_COMPONENT32F:_===gs&&(z=o.DEPTH_COMPONENT16),z}function I(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==nn&&T.minFilter!==cn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function A(T){const _=T.target;_.removeEventListener("dispose",A),R(_),_.isVideoTexture&&h.delete(_)}function C(T){const _=T.target;_.removeEventListener("dispose",C),y(_)}function R(T){const _=n.get(T);if(_.__webglInit===void 0)return;const z=T.source,Z=u.get(z);if(Z){const ne=Z[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&b(T),Object.keys(Z).length===0&&u.delete(z)}n.remove(T)}function b(T){const _=n.get(T);o.deleteTexture(_.__webglTexture);const z=T.source,Z=u.get(z);delete Z[_.__cacheKey],a.memory.textures--}function y(T){const _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let ne=0;ne<_.__webglFramebuffer[Z].length;ne++)o.deleteFramebuffer(_.__webglFramebuffer[Z][ne]);else o.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&o.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)o.deleteFramebuffer(_.__webglFramebuffer[Z]);else o.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&o.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&o.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&o.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&o.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=T.textures;for(let Z=0,ne=z.length;Z<ne;Z++){const J=n.get(z[Z]);J.__webglTexture&&(o.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(z[Z])}n.remove(T)}let P=0;function G(){P=0}function k(){const T=P;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),P+=1,T}function W(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function q(T,_){const z=n.get(T);if(T.isVideoTexture&&Te(T),T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,T,_);return}}t.bindTexture(o.TEXTURE_2D,z.__webglTexture,o.TEXTURE0+_)}function X(T,_){const z=n.get(T);if(T.version>0&&z.__version!==T.version){$(z,T,_);return}t.bindTexture(o.TEXTURE_2D_ARRAY,z.__webglTexture,o.TEXTURE0+_)}function ee(T,_){const z=n.get(T);if(T.version>0&&z.__version!==T.version){$(z,T,_);return}t.bindTexture(o.TEXTURE_3D,z.__webglTexture,o.TEXTURE0+_)}function O(T,_){const z=n.get(T);if(T.version>0&&z.__version!==T.version){oe(z,T,_);return}t.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+_)}const te={[Mr]:o.REPEAT,[si]:o.CLAMP_TO_EDGE,[Sr]:o.MIRRORED_REPEAT},ie={[nn]:o.NEAREST,[zh]:o.NEAREST_MIPMAP_NEAREST,[Cs]:o.NEAREST_MIPMAP_LINEAR,[cn]:o.LINEAR,[To]:o.LINEAR_MIPMAP_NEAREST,[oi]:o.LINEAR_MIPMAP_LINEAR},we={[jh]:o.NEVER,[ed]:o.ALWAYS,[$h]:o.LESS,[Lc]:o.LEQUAL,[Jh]:o.EQUAL,[Qh]:o.GEQUAL,[Kh]:o.GREATER,[Zh]:o.NOTEQUAL};function Fe(T,_){if(_.type===bn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===cn||_.magFilter===To||_.magFilter===Cs||_.magFilter===oi||_.minFilter===cn||_.minFilter===To||_.minFilter===Cs||_.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(T,o.TEXTURE_WRAP_S,te[_.wrapS]),o.texParameteri(T,o.TEXTURE_WRAP_T,te[_.wrapT]),(T===o.TEXTURE_3D||T===o.TEXTURE_2D_ARRAY)&&o.texParameteri(T,o.TEXTURE_WRAP_R,te[_.wrapR]),o.texParameteri(T,o.TEXTURE_MAG_FILTER,ie[_.magFilter]),o.texParameteri(T,o.TEXTURE_MIN_FILTER,ie[_.minFilter]),_.compareFunction&&(o.texParameteri(T,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(T,o.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===nn||_.minFilter!==Cs&&_.minFilter!==oi||_.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Xe(T,_){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",A));const Z=_.source;let ne=u.get(Z);ne===void 0&&(ne={},u.set(Z,ne));const J=W(_);if(J!==T.__cacheKey){ne[J]===void 0&&(ne[J]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ne[J].usedTimes++;const Re=ne[T.__cacheKey];Re!==void 0&&(ne[T.__cacheKey].usedTimes--,Re.usedTimes===0&&b(_)),T.__cacheKey=J,T.__webglTexture=ne[J].texture}return z}function $(T,_,z){let Z=o.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=o.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=o.TEXTURE_3D);const ne=Xe(T,_),J=_.source;t.bindTexture(Z,T.__webglTexture,o.TEXTURE0+z);const Re=n.get(J);if(J.version!==Re.__version||ne===!0){t.activeTexture(o.TEXTURE0+z);const de=Ye.getPrimaries(Ye.workingColorSpace),xe=_.colorSpace===Un?null:Ye.getPrimaries(_.colorSpace),je=_.colorSpace===Un||de===xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,_.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,_.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let re=x(_.image,!1,i.maxTextureSize);re=Je(_,re);const ve=s.convert(_.format,_.colorSpace),De=s.convert(_.type);let Be=S(_.internalFormat,ve,De,_.colorSpace,_.isVideoTexture);Fe(Z,_);let _e;const qe=_.mipmaps,He=_.isVideoTexture!==!0,rt=Re.__version===void 0||ne===!0,F=J.dataReady,he=I(_,re);if(_.isDepthTexture)Be=v(_.format===ki,_.type),rt&&(He?t.texStorage2D(o.TEXTURE_2D,1,Be,re.width,re.height):t.texImage2D(o.TEXTURE_2D,0,Be,re.width,re.height,0,ve,De,null));else if(_.isDataTexture)if(qe.length>0){He&&rt&&t.texStorage2D(o.TEXTURE_2D,he,Be,qe[0].width,qe[0].height);for(let Y=0,Q=qe.length;Y<Q;Y++)_e=qe[Y],He?F&&t.texSubImage2D(o.TEXTURE_2D,Y,0,0,_e.width,_e.height,ve,De,_e.data):t.texImage2D(o.TEXTURE_2D,Y,Be,_e.width,_e.height,0,ve,De,_e.data);_.generateMipmaps=!1}else He?(rt&&t.texStorage2D(o.TEXTURE_2D,he,Be,re.width,re.height),F&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,re.width,re.height,ve,De,re.data)):t.texImage2D(o.TEXTURE_2D,0,Be,re.width,re.height,0,ve,De,re.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){He&&rt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,he,Be,qe[0].width,qe[0].height,re.depth);for(let Y=0,Q=qe.length;Y<Q;Y++)if(_e=qe[Y],_.format!==tn)if(ve!==null)if(He){if(F)if(_.layerUpdates.size>0){const me=Dl(_e.width,_e.height,_.format,_.type);for(const fe of _.layerUpdates){const ke=_e.data.subarray(fe*me/_e.data.BYTES_PER_ELEMENT,(fe+1)*me/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Y,0,0,fe,_e.width,_e.height,1,ve,ke)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,re.depth,ve,_e.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Y,Be,_e.width,_e.height,re.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?F&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,re.depth,ve,De,_e.data):t.texImage3D(o.TEXTURE_2D_ARRAY,Y,Be,_e.width,_e.height,re.depth,0,ve,De,_e.data)}else{He&&rt&&t.texStorage2D(o.TEXTURE_2D,he,Be,qe[0].width,qe[0].height);for(let Y=0,Q=qe.length;Y<Q;Y++)_e=qe[Y],_.format!==tn?ve!==null?He?F&&t.compressedTexSubImage2D(o.TEXTURE_2D,Y,0,0,_e.width,_e.height,ve,_e.data):t.compressedTexImage2D(o.TEXTURE_2D,Y,Be,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?F&&t.texSubImage2D(o.TEXTURE_2D,Y,0,0,_e.width,_e.height,ve,De,_e.data):t.texImage2D(o.TEXTURE_2D,Y,Be,_e.width,_e.height,0,ve,De,_e.data)}else if(_.isDataArrayTexture)if(He){if(rt&&t.texStorage3D(o.TEXTURE_2D_ARRAY,he,Be,re.width,re.height,re.depth),F)if(_.layerUpdates.size>0){const Y=Dl(re.width,re.height,_.format,_.type);for(const Q of _.layerUpdates){const me=re.data.subarray(Q*Y/re.data.BYTES_PER_ELEMENT,(Q+1)*Y/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,ve,De,me)}_.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ve,De,re.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Be,re.width,re.height,re.depth,0,ve,De,re.data);else if(_.isData3DTexture)He?(rt&&t.texStorage3D(o.TEXTURE_3D,he,Be,re.width,re.height,re.depth),F&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ve,De,re.data)):t.texImage3D(o.TEXTURE_3D,0,Be,re.width,re.height,re.depth,0,ve,De,re.data);else if(_.isFramebufferTexture){if(rt)if(He)t.texStorage2D(o.TEXTURE_2D,he,Be,re.width,re.height);else{let Y=re.width,Q=re.height;for(let me=0;me<he;me++)t.texImage2D(o.TEXTURE_2D,me,Be,Y,Q,0,ve,De,null),Y>>=1,Q>>=1}}else if(qe.length>0){if(He&&rt){const Y=Ce(qe[0]);t.texStorage2D(o.TEXTURE_2D,he,Be,Y.width,Y.height)}for(let Y=0,Q=qe.length;Y<Q;Y++)_e=qe[Y],He?F&&t.texSubImage2D(o.TEXTURE_2D,Y,0,0,ve,De,_e):t.texImage2D(o.TEXTURE_2D,Y,Be,ve,De,_e);_.generateMipmaps=!1}else if(He){if(rt){const Y=Ce(re);t.texStorage2D(o.TEXTURE_2D,he,Be,Y.width,Y.height)}F&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,ve,De,re)}else t.texImage2D(o.TEXTURE_2D,0,Be,ve,De,re);m(_)&&p(Z),Re.__version=J.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function oe(T,_,z){if(_.image.length!==6)return;const Z=Xe(T,_),ne=_.source;t.bindTexture(o.TEXTURE_CUBE_MAP,T.__webglTexture,o.TEXTURE0+z);const J=n.get(ne);if(ne.version!==J.__version||Z===!0){t.activeTexture(o.TEXTURE0+z);const Re=Ye.getPrimaries(Ye.workingColorSpace),de=_.colorSpace===Un?null:Ye.getPrimaries(_.colorSpace),xe=_.colorSpace===Un||Re===de?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,_.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,_.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const je=_.isCompressedTexture||_.image[0].isCompressedTexture,re=_.image[0]&&_.image[0].isDataTexture,ve=[];for(let Q=0;Q<6;Q++)!je&&!re?ve[Q]=x(_.image[Q],!0,i.maxCubemapSize):ve[Q]=re?_.image[Q].image:_.image[Q],ve[Q]=Je(_,ve[Q]);const De=ve[0],Be=s.convert(_.format,_.colorSpace),_e=s.convert(_.type),qe=S(_.internalFormat,Be,_e,_.colorSpace),He=_.isVideoTexture!==!0,rt=J.__version===void 0||Z===!0,F=ne.dataReady;let he=I(_,De);Fe(o.TEXTURE_CUBE_MAP,_);let Y;if(je){He&&rt&&t.texStorage2D(o.TEXTURE_CUBE_MAP,he,qe,De.width,De.height);for(let Q=0;Q<6;Q++){Y=ve[Q].mipmaps;for(let me=0;me<Y.length;me++){const fe=Y[me];_.format!==tn?Be!==null?He?F&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,fe.width,fe.height,Be,fe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,qe,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?F&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,0,0,fe.width,fe.height,Be,_e,fe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me,qe,fe.width,fe.height,0,Be,_e,fe.data)}}}else{if(Y=_.mipmaps,He&&rt){Y.length>0&&he++;const Q=Ce(ve[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,he,qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){He?F&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve[Q].width,ve[Q].height,Be,_e,ve[Q].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,ve[Q].width,ve[Q].height,0,Be,_e,ve[Q].data);for(let me=0;me<Y.length;me++){const ke=Y[me].image[Q].image;He?F&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,ke.width,ke.height,Be,_e,ke.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,qe,ke.width,ke.height,0,Be,_e,ke.data)}}else{He?F&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Be,_e,ve[Q]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,Be,_e,ve[Q]);for(let me=0;me<Y.length;me++){const fe=Y[me];He?F&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,0,0,Be,_e,fe.image[Q]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Q,me+1,qe,Be,_e,fe.image[Q])}}}m(_)&&p(o.TEXTURE_CUBE_MAP),J.__version=ne.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ye(T,_,z,Z,ne,J){const Re=s.convert(z.format,z.colorSpace),de=s.convert(z.type),xe=S(z.internalFormat,Re,de,z.colorSpace),je=n.get(_),re=n.get(z);if(re.__renderTarget=_,!je.__hasExternalTextures){const ve=Math.max(1,_.width>>J),De=Math.max(1,_.height>>J);ne===o.TEXTURE_3D||ne===o.TEXTURE_2D_ARRAY?t.texImage3D(ne,J,xe,ve,De,_.depth,0,Re,de,null):t.texImage2D(ne,J,xe,ve,De,0,Re,de,null)}t.bindFramebuffer(o.FRAMEBUFFER,T),ue(_)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Z,ne,re.__webglTexture,0,Ae(_)):(ne===o.TEXTURE_2D||ne>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Z,ne,re.__webglTexture,J),t.bindFramebuffer(o.FRAMEBUFFER,null)}function le(T,_,z){if(o.bindRenderbuffer(o.RENDERBUFFER,T),_.depthBuffer){const Z=_.depthTexture,ne=Z&&Z.isDepthTexture?Z.type:null,J=v(_.stencilBuffer,ne),Re=_.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,de=Ae(_);ue(_)?r.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,de,J,_.width,_.height):z?o.renderbufferStorageMultisample(o.RENDERBUFFER,de,J,_.width,_.height):o.renderbufferStorage(o.RENDERBUFFER,J,_.width,_.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Re,o.RENDERBUFFER,T)}else{const Z=_.textures;for(let ne=0;ne<Z.length;ne++){const J=Z[ne],Re=s.convert(J.format,J.colorSpace),de=s.convert(J.type),xe=S(J.internalFormat,Re,de,J.colorSpace),je=Ae(_);z&&ue(_)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,je,xe,_.width,_.height):ue(_)?r.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,je,xe,_.width,_.height):o.renderbufferStorage(o.RENDERBUFFER,xe,_.width,_.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function se(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const ne=Z.__webglTexture,J=Ae(_);if(_.depthTexture.format===Li)ue(_)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ne,0,J):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ne,0);else if(_.depthTexture.format===ki)ue(_)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ne,0,J):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ge(T){const _=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",ne)};Z.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=Z}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");se(_.__webglFramebuffer,T)}else if(z){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(o.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=o.createRenderbuffer(),le(_.__webglDepthbuffer[Z],T,!1);else{const ne=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,J=_.__webglDepthbuffer[Z];o.bindRenderbuffer(o.RENDERBUFFER,J),o.framebufferRenderbuffer(o.FRAMEBUFFER,ne,o.RENDERBUFFER,J)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=o.createRenderbuffer(),le(_.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ne=_.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ne),o.framebufferRenderbuffer(o.FRAMEBUFFER,Z,o.RENDERBUFFER,ne)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Ie(T,_,z){const Z=n.get(T);_!==void 0&&ye(Z.__webglFramebuffer,T,T.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),z!==void 0&&ge(T)}function $e(T){const _=T.texture,z=n.get(T),Z=n.get(_);T.addEventListener("dispose",C);const ne=T.textures,J=T.isWebGLCubeRenderTarget===!0,Re=ne.length>1;if(Re||(Z.__webglTexture===void 0&&(Z.__webglTexture=o.createTexture()),Z.__version=_.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let xe=0;xe<_.mipmaps.length;xe++)z.__webglFramebuffer[de][xe]=o.createFramebuffer()}else z.__webglFramebuffer[de]=o.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<_.mipmaps.length;de++)z.__webglFramebuffer[de]=o.createFramebuffer()}else z.__webglFramebuffer=o.createFramebuffer();if(Re)for(let de=0,xe=ne.length;de<xe;de++){const je=n.get(ne[de]);je.__webglTexture===void 0&&(je.__webglTexture=o.createTexture(),a.memory.textures++)}if(T.samples>0&&ue(T)===!1){z.__webglMultisampledFramebuffer=o.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const xe=ne[de];z.__webglColorRenderbuffer[de]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,z.__webglColorRenderbuffer[de]);const je=s.convert(xe.format,xe.colorSpace),re=s.convert(xe.type),ve=S(xe.internalFormat,je,re,xe.colorSpace,T.isXRRenderTarget===!0),De=Ae(T);o.renderbufferStorageMultisample(o.RENDERBUFFER,De,ve,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+de,o.RENDERBUFFER,z.__webglColorRenderbuffer[de])}o.bindRenderbuffer(o.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=o.createRenderbuffer(),le(z.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(J){t.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture),Fe(o.TEXTURE_CUBE_MAP,_);for(let de=0;de<6;de++)if(_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)ye(z.__webglFramebuffer[de][xe],T,_,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else ye(z.__webglFramebuffer[de],T,_,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(_)&&p(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let de=0,xe=ne.length;de<xe;de++){const je=ne[de],re=n.get(je);t.bindTexture(o.TEXTURE_2D,re.__webglTexture),Fe(o.TEXTURE_2D,je),ye(z.__webglFramebuffer,T,je,o.COLOR_ATTACHMENT0+de,o.TEXTURE_2D,0),m(je)&&p(o.TEXTURE_2D)}t.unbindTexture()}else{let de=o.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(de,Z.__webglTexture),Fe(de,_),_.mipmaps&&_.mipmaps.length>0)for(let xe=0;xe<_.mipmaps.length;xe++)ye(z.__webglFramebuffer[xe],T,_,o.COLOR_ATTACHMENT0,de,xe);else ye(z.__webglFramebuffer,T,_,o.COLOR_ATTACHMENT0,de,0);m(_)&&p(de),t.unbindTexture()}T.depthBuffer&&ge(T)}function Oe(T){const _=T.textures;for(let z=0,Z=_.length;z<Z;z++){const ne=_[z];if(m(ne)){const J=w(T),Re=n.get(ne).__webglTexture;t.bindTexture(J,Re),p(J),t.unbindTexture()}}}const ot=[],B=[];function pt(T){if(T.samples>0){if(ue(T)===!1){const _=T.textures,z=T.width,Z=T.height;let ne=o.COLOR_BUFFER_BIT;const J=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Re=n.get(T),de=_.length>1;if(de)for(let xe=0;xe<_.length;xe++)t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let xe=0;xe<_.length;xe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(ne|=o.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(ne|=o.STENCIL_BUFFER_BIT)),de){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Re.__webglColorRenderbuffer[xe]);const je=n.get(_[xe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,je,0)}o.blitFramebuffer(0,0,z,Z,0,0,z,Z,ne,o.NEAREST),l===!0&&(ot.length=0,B.length=0,ot.push(o.COLOR_ATTACHMENT0+xe),T.depthBuffer&&T.resolveDepthBuffer===!1&&(ot.push(J),B.push(J),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,B)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ot))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<_.length;xe++){t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.RENDERBUFFER,Re.__webglColorRenderbuffer[xe]);const je=n.get(_[xe]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Re.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+xe,o.TEXTURE_2D,je,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[_])}}}function Ae(T){return Math.min(i.maxSamples,T.samples)}function ue(T){const _=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Te(T){const _=a.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function Je(T,_){const z=T.colorSpace,Z=T.format,ne=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Vi&&z!==Un&&(Ye.getTransfer(z)===tt?(Z!==tn||ne!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function Ce(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=G,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=ee,this.setTextureCube=O,this.rebindTextures=Ie,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Oe,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ue}function sm(o,e){function t(n,i=Un){let s;const a=Ye.getTransfer(i);if(n===Tn)return o.UNSIGNED_BYTE;if(n===ca)return o.UNSIGNED_SHORT_4_4_4_4;if(n===ha)return o.UNSIGNED_SHORT_5_5_5_1;if(n===Sc)return o.UNSIGNED_INT_5_9_9_9_REV;if(n===wc)return o.BYTE;if(n===Mc)return o.SHORT;if(n===gs)return o.UNSIGNED_SHORT;if(n===la)return o.INT;if(n===li)return o.UNSIGNED_INT;if(n===bn)return o.FLOAT;if(n===Sn)return o.HALF_FLOAT;if(n===Ec)return o.ALPHA;if(n===Tc)return o.RGB;if(n===tn)return o.RGBA;if(n===Ac)return o.LUMINANCE;if(n===Cc)return o.LUMINANCE_ALPHA;if(n===Li)return o.DEPTH_COMPONENT;if(n===ki)return o.DEPTH_STENCIL;if(n===Rc)return o.RED;if(n===da)return o.RED_INTEGER;if(n===Pc)return o.RG;if(n===ua)return o.RG_INTEGER;if(n===fa)return o.RGBA_INTEGER;if(n===eo||n===to||n===no||n===io)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===eo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===eo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Er||n===Tr||n===Ar||n===Cr)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Er)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Tr)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ar)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cr)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rr||n===Pr||n===Ir)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Rr||n===Pr)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ir)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Dr||n===Lr||n===Fr||n===Br||n===Ur||n===Nr||n===Or||n===kr||n===zr||n===Gr||n===Hr||n===Vr||n===Wr||n===Xr)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Dr)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lr)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fr)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Br)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ur)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nr)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Or)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===kr)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zr)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gr)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hr)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vr)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wr)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Xr)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===qr||n===Yr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===so)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ic||n===jr||n===$r||n===Jr)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===so)return s.COMPRESSED_RED_RGTC1_EXT;if(n===jr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$r)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Jr)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oi?o.UNSIGNED_INT_24_8:o[n]!==void 0?o[n]:null}return{convert:t}}class om extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ne extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rm={type:"move"};class nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(rm)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const am=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lm=`
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

}`;class cm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Lt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ct({vertexShader:am,fragmentShader:lm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new D(new ht(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hm extends ci{constructor(e,t){super();const n=this;let i=null,s=1,a=null,r="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const x=new cm,m=t.getContextAttributes();let p=null,w=null;const S=[],v=[],I=new Le;let A=null;const C=new Dt;C.viewport=new it;const R=new Dt;R.viewport=new it;const b=[C,R],y=new om;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let oe=S[$];return oe===void 0&&(oe=new nr,S[$]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function($){let oe=S[$];return oe===void 0&&(oe=new nr,S[$]=oe),oe.getGripSpace()},this.getHand=function($){let oe=S[$];return oe===void 0&&(oe=new nr,S[$]=oe),oe.getHandSpace()};function k($){const oe=v.indexOf($.inputSource);if(oe===-1)return;const ye=S[oe];ye!==void 0&&(ye.update($.inputSource,$.frame,c||a),ye.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",q);for(let $=0;$<S.length;$++){const oe=v[$];oe!==null&&(v[$]=null,S[$].disconnect(oe))}P=null,G=null,x.reset(),e.setRenderTarget(p),f=null,u=null,d=null,i=null,w=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",W),i.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),i.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new sn(f.framebufferWidth,f.framebufferHeight,{format:tn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,ye=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?ki:Li,ye=m.stencil?Oi:li);const se={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:s};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(se),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new sn(u.textureWidth,u.textureHeight,{format:tn,type:Tn,depthTexture:new qc(u.textureWidth,u.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(r),Xe.setContext(i),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q($){for(let oe=0;oe<$.removed.length;oe++){const ye=$.removed[oe],le=v.indexOf(ye);le>=0&&(v[le]=null,S[le].disconnect(ye))}for(let oe=0;oe<$.added.length;oe++){const ye=$.added[oe];let le=v.indexOf(ye);if(le===-1){for(let ge=0;ge<S.length;ge++)if(ge>=v.length){v.push(ye),le=ge;break}else if(v[ge]===null){v[ge]=ye,le=ge;break}if(le===-1)break}const se=S[le];se&&se.connect(ye)}}const X=new L,ee=new L;function O($,oe,ye){X.setFromMatrixPosition(oe.matrixWorld),ee.setFromMatrixPosition(ye.matrixWorld);const le=X.distanceTo(ee),se=oe.projectionMatrix.elements,ge=ye.projectionMatrix.elements,Ie=se[14]/(se[10]-1),$e=se[14]/(se[10]+1),Oe=(se[9]+1)/se[5],ot=(se[9]-1)/se[5],B=(se[8]-1)/se[0],pt=(ge[8]+1)/ge[0],Ae=Ie*B,ue=Ie*pt,Te=le/(-B+pt),Je=Te*-B;if(oe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Je),$.translateZ(Te),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),se[10]===-1)$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Ce=Ie+Te,T=$e+Te,_=Ae-Je,z=ue+(le-Je),Z=Oe*$e/T*Ce,ne=ot*$e/T*Ce;$.projectionMatrix.makePerspective(_,z,Z,ne,Ce,T),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function te($,oe){oe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(oe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let oe=$.near,ye=$.far;x.texture!==null&&(x.depthNear>0&&(oe=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),y.near=R.near=C.near=oe,y.far=R.far=C.far=ye,(P!==y.near||G!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,G=y.far),C.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,y.layers.mask=C.layers.mask|R.layers.mask;const le=$.parent,se=y.cameras;te(y,le);for(let ge=0;ge<se.length;ge++)te(se[ge],le);se.length===2?O(y,C,R):y.projectionMatrix.copy(C.projectionMatrix),ie($,y,le)};function ie($,oe,ye){ye===null?$.matrix.copy(oe.matrixWorld):($.matrix.copy(ye.matrixWorld),$.matrix.invert(),$.matrix.multiply(oe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(oe.projectionMatrix),$.projectionMatrixInverse.copy(oe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Zr*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function($){l=$,u!==null&&(u.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let we=null;function Fe($,oe){if(h=oe.getViewerPose(c||a),g=oe,h!==null){const ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let le=!1;ye.length!==y.cameras.length&&(y.cameras.length=0,le=!0);for(let ge=0;ge<ye.length;ge++){const Ie=ye[ge];let $e=null;if(f!==null)$e=f.getViewport(Ie);else{const ot=d.getViewSubImage(u,Ie);$e=ot.viewport,ge===0&&(e.setRenderTargetTextures(w,ot.colorTexture,u.ignoreDepthValues?void 0:ot.depthStencilTexture),e.setRenderTarget(w))}let Oe=b[ge];Oe===void 0&&(Oe=new Dt,Oe.layers.enable(ge),Oe.viewport=new it,b[ge]=Oe),Oe.matrix.fromArray(Ie.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ie.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set($e.x,$e.y,$e.width,$e.height),ge===0&&(y.matrix.copy(Oe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),le===!0&&y.cameras.push(Oe)}const se=i.enabledFeatures;if(se&&se.includes("depth-sensing")){const ge=d.getDepthInformation(ye[0]);ge&&ge.isValid&&ge.texture&&x.init(e,ge,i.renderState)}}for(let ye=0;ye<S.length;ye++){const le=v[ye],se=S[ye];le!==null&&se!==void 0&&se.update(le,oe,c||a)}we&&we($,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}const Xe=new Xc;Xe.setAnimationLoop(Fe),this.setAnimationLoop=function($){we=$},this.dispose=function(){}}}const jn=new Gt,dm=new ut;function um(o,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Hc(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,w,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?l(m,p,w,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Rt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Rt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),S=w.envMap,v=w.envMapRotation;S&&(m.envMap.value=S,jn.copy(v),jn.x*=-1,jn.y*=-1,jn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),m.envMapRotation.value.setFromMatrix4(dm.makeRotationFromEuler(jn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function fm(o,e,t,n){let i={},s={},a=[];const r=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){const v=S.program;n.uniformBlockBinding(w,v)}function c(w,S){let v=i[w.id];v===void 0&&(g(w),v=h(w),i[w.id]=v,w.addEventListener("dispose",m));const I=S.program;n.updateUBOMapping(w,I);const A=e.render.frame;s[w.id]!==A&&(u(w),s[w.id]=A)}function h(w){const S=d();w.__bindingPointIndex=S;const v=o.createBuffer(),I=w.__size,A=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,v),o.bufferData(o.UNIFORM_BUFFER,I,A),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,S,v),v}function d(){for(let w=0;w<r;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const S=i[w.id],v=w.uniforms,I=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,S);for(let A=0,C=v.length;A<C;A++){const R=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,y=R.length;b<y;b++){const P=R[b];if(f(P,A,b,I)===!0){const G=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let q=0;q<k.length;q++){const X=k[q],ee=x(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,o.bufferSubData(o.UNIFORM_BUFFER,G+W,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,G,P.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(w,S,v,I){const A=w.value,C=S+"_"+v;if(I[C]===void 0)return typeof A=="number"||typeof A=="boolean"?I[C]=A:I[C]=A.clone(),!0;{const R=I[C];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return I[C]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(w){const S=w.uniforms;let v=0;const I=16;for(let C=0,R=S.length;C<R;C++){const b=Array.isArray(S[C])?S[C]:[S[C]];for(let y=0,P=b.length;y<P;y++){const G=b[y],k=Array.isArray(G.value)?G.value:[G.value];for(let W=0,q=k.length;W<q;W++){const X=k[W],ee=x(X),O=v%I,te=O%ee.boundary,ie=O+te;v+=te,ie!==0&&I-ie<ee.storage&&(v+=I-ie),G.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=v,v+=ee.storage}}}const A=v%I;return A>0&&(v+=I-A),w.__size=v,w.__cache={},this}function x(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){const S=w.target;S.removeEventListener("dispose",m);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),o.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(const w in i)o.deleteBuffer(i[w]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}class va{constructor(e={}){const{canvas:t=nd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const w=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=kn,this.toneMappingExposure=1;const v=this;let I=!1,A=0,C=0,R=null,b=-1,y=null;const P=new it,G=new it;let k=null;const W=new be(0);let q=0,X=t.width,ee=t.height,O=1,te=null,ie=null;const we=new it(0,0,X,ee),Fe=new it(0,0,X,ee);let Xe=!1;const $=new ma;let oe=!1,ye=!1;const le=new ut,se=new ut,ge=new L,Ie=new it,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function ot(){return R===null?O:1}let B=n;function pt(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${oa}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",fe,!1),B===null){const U="webgl2";if(B=pt(U,M),B===null)throw pt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ae,ue,Te,Je,Ce,T,_,z,Z,ne,J,Re,de,xe,je,re,ve,De,Be,_e,qe,He,rt,F;function he(){Ae=new _p(B),Ae.init(),He=new sm(B,Ae),ue=new fp(B,Ae,e,He),Te=new tm(B,Ae),ue.reverseDepthBuffer&&u&&Te.buffers.depth.setReversed(!0),Je=new wp(B),Ce=new z0,T=new im(B,Ae,Te,Ce,ue,He,Je),_=new mp(v),z=new vp(v),Z=new Cd(B),rt=new dp(B,Z),ne=new yp(B,Z,Je,rt),J=new Sp(B,ne,Z,Je),Be=new Mp(B,ue,T),re=new pp(Ce),Re=new k0(v,_,z,Ae,ue,rt,re),de=new um(v,Ce),xe=new H0,je=new j0(Ae),De=new hp(v,_,z,Te,J,f,l),ve=new Q0(v,J,ue),F=new fm(B,Je,ue,Te),_e=new up(B,Ae,Je),qe=new bp(B,Ae,Je),Je.programs=Re.programs,v.capabilities=ue,v.extensions=Ae,v.properties=Ce,v.renderLists=xe,v.shadowMap=ve,v.state=Te,v.info=Je}he();const Y=new hm(v,B);this.xr=Y,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const M=Ae.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ae.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(M){M!==void 0&&(O=M,this.setSize(X,ee,!1))},this.getSize=function(M){return M.set(X,ee)},this.setSize=function(M,U,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,ee=U,t.width=Math.floor(M*O),t.height=Math.floor(U*O),H===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(X*O,ee*O).floor()},this.setDrawingBufferSize=function(M,U,H){X=M,ee=U,O=H,t.width=Math.floor(M*H),t.height=Math.floor(U*H),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(we)},this.setViewport=function(M,U,H,V){M.isVector4?we.set(M.x,M.y,M.z,M.w):we.set(M,U,H,V),Te.viewport(P.copy(we).multiplyScalar(O).round())},this.getScissor=function(M){return M.copy(Fe)},this.setScissor=function(M,U,H,V){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,U,H,V),Te.scissor(G.copy(Fe).multiplyScalar(O).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(M){Te.setScissorTest(Xe=M)},this.setOpaqueSort=function(M){te=M},this.setTransparentSort=function(M){ie=M},this.getClearColor=function(M){return M.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(M=!0,U=!0,H=!0){let V=0;if(M){let N=!1;if(R!==null){const ae=R.texture.format;N=ae===fa||ae===ua||ae===da}if(N){const ae=R.texture.type,pe=ae===Tn||ae===li||ae===gs||ae===Oi||ae===ca||ae===ha,Me=De.getClearColor(),Se=De.getClearAlpha(),Ue=Me.r,ze=Me.g,Ee=Me.b;pe?(g[0]=Ue,g[1]=ze,g[2]=Ee,g[3]=Se,B.clearBufferuiv(B.COLOR,0,g)):(x[0]=Ue,x[1]=ze,x[2]=Ee,x[3]=Se,B.clearBufferiv(B.COLOR,0,x))}else V|=B.COLOR_BUFFER_BIT}U&&(V|=B.DEPTH_BUFFER_BIT),H&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),xe.dispose(),je.dispose(),Ce.dispose(),_.dispose(),z.dispose(),J.dispose(),rt.dispose(),F.dispose(),Re.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",Ca),Y.removeEventListener("sessionend",Ra),Hn.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const M=Je.autoReset,U=ve.enabled,H=ve.autoUpdate,V=ve.needsUpdate,N=ve.type;he(),Je.autoReset=M,ve.enabled=U,ve.autoUpdate=H,ve.needsUpdate=V,ve.type=N}function fe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ke(M){const U=M.target;U.removeEventListener("dispose",ke),ft(U)}function ft(M){Et(M),Ce.remove(M)}function Et(M){const U=Ce.get(M).programs;U!==void 0&&(U.forEach(function(H){Re.releaseProgram(H)}),M.isShaderMaterial&&Re.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,H,V,N,ae){U===null&&(U=$e);const pe=N.isMesh&&N.matrixWorld.determinant()<0,Me=uh(M,U,H,V,N);Te.setMaterial(V,pe);let Se=H.index,Ue=1;if(V.wireframe===!0){if(Se=ne.getWireframeAttribute(H),Se===void 0)return;Ue=2}const ze=H.drawRange,Ee=H.attributes.position;let Ke=ze.start*Ue,at=(ze.start+ze.count)*Ue;ae!==null&&(Ke=Math.max(Ke,ae.start*Ue),at=Math.min(at,(ae.start+ae.count)*Ue)),Se!==null?(Ke=Math.max(Ke,0),at=Math.min(at,Se.count)):Ee!=null&&(Ke=Math.max(Ke,0),at=Math.min(at,Ee.count));const lt=at-Ke;if(lt<0||lt===1/0)return;rt.setup(N,V,Me,H,Se);let Ft,Ze=_e;if(Se!==null&&(Ft=Z.get(Se),Ze=qe,Ze.setIndex(Ft)),N.isMesh)V.wireframe===!0?(Te.setLineWidth(V.wireframeLinewidth*ot()),Ze.setMode(B.LINES)):Ze.setMode(B.TRIANGLES);else if(N.isLine){let Pe=V.linewidth;Pe===void 0&&(Pe=1),Te.setLineWidth(Pe*ot()),N.isLineSegments?Ze.setMode(B.LINES):N.isLineLoop?Ze.setMode(B.LINE_LOOP):Ze.setMode(B.LINE_STRIP)}else N.isPoints?Ze.setMode(B.POINTS):N.isSprite&&Ze.setMode(B.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Ze.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))Ze.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pe=N._multiDrawStarts,un=N._multiDrawCounts,Qe=N._multiDrawCount,jt=Se?Z.get(Se).bytesPerElement:1,di=Ce.get(V).currentProgram.getUniforms();for(let Nt=0;Nt<Qe;Nt++)di.setValue(B,"_gl_DrawID",Nt),Ze.render(Pe[Nt]/jt,un[Nt])}else if(N.isInstancedMesh)Ze.renderInstances(Ke,lt,N.count);else if(H.isInstancedBufferGeometry){const Pe=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,un=Math.min(H.instanceCount,Pe);Ze.renderInstances(Ke,lt,un)}else Ze.render(Ke,lt)};function et(M,U,H){M.transparent===!0&&M.side===zt&&M.forceSinglePass===!1?(M.side=Rt,M.needsUpdate=!0,As(M,U,H),M.side=Gn,M.needsUpdate=!0,As(M,U,H),M.side=zt):As(M,U,H)}this.compile=function(M,U,H=null){H===null&&(H=M),p=je.get(H),p.init(U),S.push(p),H.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==H&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const V=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ae=N.material;if(ae)if(Array.isArray(ae))for(let pe=0;pe<ae.length;pe++){const Me=ae[pe];et(Me,H,N),V.add(Me)}else et(ae,H,N),V.add(ae)}),S.pop(),p=null,V},this.compileAsync=function(M,U,H=null){const V=this.compile(M,U,H);return new Promise(N=>{function ae(){if(V.forEach(function(pe){Ce.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){N(M);return}setTimeout(ae,10)}Ae.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Yt=null;function dn(M){Yt&&Yt(M)}function Ca(){Hn.stop()}function Ra(){Hn.start()}const Hn=new Xc;Hn.setAnimationLoop(dn),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(M){Yt=M,Y.setAnimationLoop(M),M===null?Hn.stop():Hn.start()},Y.addEventListener("sessionstart",Ca),Y.addEventListener("sessionend",Ra),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,U,R),p=je.get(M,S.length),p.init(U),S.push(p),se.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(se),ye=this.localClippingEnabled,oe=re.init(this.clippingPlanes,ye),m=xe.get(M,w.length),m.init(),w.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ae=v.xr.getDepthSensingMesh();ae!==null&&Eo(ae,U,-1/0,v.sortObjects)}Eo(M,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(te,ie),Oe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Oe&&De.addToRenderList(m,M),this.info.render.frame++,oe===!0&&re.beginShadows();const H=p.state.shadowsArray;ve.render(H,M,U),oe===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(p.setupLights(),U.isArrayCamera){const ae=U.cameras;if(N.length>0)for(let pe=0,Me=ae.length;pe<Me;pe++){const Se=ae[pe];Ia(V,N,M,Se)}Oe&&De.render(M);for(let pe=0,Me=ae.length;pe<Me;pe++){const Se=ae[pe];Pa(m,M,Se,Se.viewport)}}else N.length>0&&Ia(V,N,M,U),Oe&&De.render(M),Pa(m,M,U);R!==null&&(T.updateMultisampleRenderTarget(R),T.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(v,M,U),rt.resetDefaultState(),b=-1,y=null,S.pop(),S.length>0?(p=S[S.length-1],oe===!0&&re.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Eo(M,U,H,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||$.intersectsSprite(M)){V&&Ie.setFromMatrixPosition(M.matrixWorld).applyMatrix4(se);const pe=J.update(M),Me=M.material;Me.visible&&m.push(M,pe,Me,H,Ie.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||$.intersectsObject(M))){const pe=J.update(M),Me=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ie.copy(M.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ie.copy(pe.boundingSphere.center)),Ie.applyMatrix4(M.matrixWorld).applyMatrix4(se)),Array.isArray(Me)){const Se=pe.groups;for(let Ue=0,ze=Se.length;Ue<ze;Ue++){const Ee=Se[Ue],Ke=Me[Ee.materialIndex];Ke&&Ke.visible&&m.push(M,pe,Ke,H,Ie.z,Ee)}}else Me.visible&&m.push(M,pe,Me,H,Ie.z,null)}}const ae=M.children;for(let pe=0,Me=ae.length;pe<Me;pe++)Eo(ae[pe],U,H,V)}function Pa(M,U,H,V){const N=M.opaque,ae=M.transmissive,pe=M.transparent;p.setupLightsView(H),oe===!0&&re.setGlobalState(v.clippingPlanes,H),V&&Te.viewport(P.copy(V)),N.length>0&&Ts(N,U,H),ae.length>0&&Ts(ae,U,H),pe.length>0&&Ts(pe,U,H),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Ia(M,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new sn(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?Sn:Tn,minFilter:oi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const ae=p.state.transmissionRenderTarget[V.id],pe=V.viewport||P;ae.setSize(pe.z,pe.w);const Me=v.getRenderTarget();v.setRenderTarget(ae),v.getClearColor(W),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear(),Oe&&De.render(H);const Se=v.toneMapping;v.toneMapping=kn;const Ue=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),oe===!0&&re.setGlobalState(v.clippingPlanes,V),Ts(M,H,V),T.updateMultisampleRenderTarget(ae),T.updateRenderTargetMipmap(ae),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Ee=0,Ke=U.length;Ee<Ke;Ee++){const at=U[Ee],lt=at.object,Ft=at.geometry,Ze=at.material,Pe=at.group;if(Ze.side===zt&&lt.layers.test(V.layers)){const un=Ze.side;Ze.side=Rt,Ze.needsUpdate=!0,Da(lt,H,V,Ft,Ze,Pe),Ze.side=un,Ze.needsUpdate=!0,ze=!0}}ze===!0&&(T.updateMultisampleRenderTarget(ae),T.updateRenderTargetMipmap(ae))}v.setRenderTarget(Me),v.setClearColor(W,q),Ue!==void 0&&(V.viewport=Ue),v.toneMapping=Se}function Ts(M,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ae=M.length;N<ae;N++){const pe=M[N],Me=pe.object,Se=pe.geometry,Ue=V===null?pe.material:V,ze=pe.group;Me.layers.test(H.layers)&&Da(Me,U,H,Se,Ue,ze)}}function Da(M,U,H,V,N,ae){M.onBeforeRender(v,U,H,V,N,ae),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(v,U,H,V,M,ae),N.transparent===!0&&N.side===zt&&N.forceSinglePass===!1?(N.side=Rt,N.needsUpdate=!0,v.renderBufferDirect(H,U,V,N,M,ae),N.side=Gn,N.needsUpdate=!0,v.renderBufferDirect(H,U,V,N,M,ae),N.side=zt):v.renderBufferDirect(H,U,V,N,M,ae),M.onAfterRender(v,U,H,V,N,ae)}function As(M,U,H){U.isScene!==!0&&(U=$e);const V=Ce.get(M),N=p.state.lights,ae=p.state.shadowsArray,pe=N.state.version,Me=Re.getParameters(M,N.state,ae,U,H),Se=Re.getProgramCacheKey(Me);let Ue=V.programs;V.environment=M.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(M.isMeshStandardMaterial?z:_).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",ke),Ue=new Map,V.programs=Ue);let ze=Ue.get(Se);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===pe)return Fa(M,Me),ze}else Me.uniforms=Re.getUniforms(M),M.onBeforeCompile(Me,v),ze=Re.acquireProgram(Me,Se),Ue.set(Se,ze),V.uniforms=Me.uniforms;const Ee=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ee.clippingPlanes=re.uniform),Fa(M,Me),V.needsLights=ph(M),V.lightsStateVersion=pe,V.needsLights&&(Ee.ambientLightColor.value=N.state.ambient,Ee.lightProbe.value=N.state.probe,Ee.directionalLights.value=N.state.directional,Ee.directionalLightShadows.value=N.state.directionalShadow,Ee.spotLights.value=N.state.spot,Ee.spotLightShadows.value=N.state.spotShadow,Ee.rectAreaLights.value=N.state.rectArea,Ee.ltc_1.value=N.state.rectAreaLTC1,Ee.ltc_2.value=N.state.rectAreaLTC2,Ee.pointLights.value=N.state.point,Ee.pointLightShadows.value=N.state.pointShadow,Ee.hemisphereLights.value=N.state.hemi,Ee.directionalShadowMap.value=N.state.directionalShadowMap,Ee.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ee.spotShadowMap.value=N.state.spotShadowMap,Ee.spotLightMatrix.value=N.state.spotLightMatrix,Ee.spotLightMap.value=N.state.spotLightMap,Ee.pointShadowMap.value=N.state.pointShadowMap,Ee.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=ze,V.uniformsList=null,ze}function La(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=oo.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Fa(M,U){const H=Ce.get(M);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function uh(M,U,H,V,N){U.isScene!==!0&&(U=$e),T.resetTextureUnits();const ae=U.fog,pe=V.isMeshStandardMaterial?U.environment:null,Me=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Vi,Se=(V.isMeshStandardMaterial?z:_).get(V.envMap||pe),Ue=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ze=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ee=!!H.morphAttributes.position,Ke=!!H.morphAttributes.normal,at=!!H.morphAttributes.color;let lt=kn;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(lt=v.toneMapping);const Ft=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ze=Ft!==void 0?Ft.length:0,Pe=Ce.get(V),un=p.state.lights;if(oe===!0&&(ye===!0||M!==y)){const Vt=M===y&&V.id===b;re.setState(V,M,Vt)}let Qe=!1;V.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==un.state.version||Pe.outputColorSpace!==Me||N.isBatchedMesh&&Pe.batching===!1||!N.isBatchedMesh&&Pe.batching===!0||N.isBatchedMesh&&Pe.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pe.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pe.instancing===!1||!N.isInstancedMesh&&Pe.instancing===!0||N.isSkinnedMesh&&Pe.skinning===!1||!N.isSkinnedMesh&&Pe.skinning===!0||N.isInstancedMesh&&Pe.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pe.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pe.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pe.instancingMorph===!1&&N.morphTexture!==null||Pe.envMap!==Se||V.fog===!0&&Pe.fog!==ae||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==re.numPlanes||Pe.numIntersection!==re.numIntersection)||Pe.vertexAlphas!==Ue||Pe.vertexTangents!==ze||Pe.morphTargets!==Ee||Pe.morphNormals!==Ke||Pe.morphColors!==at||Pe.toneMapping!==lt||Pe.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Pe.__version=V.version);let jt=Pe.currentProgram;Qe===!0&&(jt=As(V,U,N));let di=!1,Nt=!1,Ji=!1;const ct=jt.getUniforms(),rn=Pe.uniforms;if(Te.useProgram(jt.program)&&(di=!0,Nt=!0,Ji=!0),V.id!==b&&(b=V.id,Nt=!0),di||y!==M){Te.buffers.depth.getReversed()?(le.copy(M.projectionMatrix),sd(le),od(le),ct.setValue(B,"projectionMatrix",le)):ct.setValue(B,"projectionMatrix",M.projectionMatrix),ct.setValue(B,"viewMatrix",M.matrixWorldInverse);const Cn=ct.map.cameraPosition;Cn!==void 0&&Cn.setValue(B,ge.setFromMatrixPosition(M.matrixWorld)),ue.logarithmicDepthBuffer&&ct.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ct.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Nt=!0,Ji=!0)}if(N.isSkinnedMesh){ct.setOptional(B,N,"bindMatrix"),ct.setOptional(B,N,"bindMatrixInverse");const Vt=N.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),ct.setValue(B,"boneTexture",Vt.boneTexture,T))}N.isBatchedMesh&&(ct.setOptional(B,N,"batchingTexture"),ct.setValue(B,"batchingTexture",N._matricesTexture,T),ct.setOptional(B,N,"batchingIdTexture"),ct.setValue(B,"batchingIdTexture",N._indirectTexture,T),ct.setOptional(B,N,"batchingColorTexture"),N._colorsTexture!==null&&ct.setValue(B,"batchingColorTexture",N._colorsTexture,T));const Ki=H.morphAttributes;if((Ki.position!==void 0||Ki.normal!==void 0||Ki.color!==void 0)&&Be.update(N,H,jt),(Nt||Pe.receiveShadow!==N.receiveShadow)&&(Pe.receiveShadow=N.receiveShadow,ct.setValue(B,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(rn.envMap.value=Se,rn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(rn.envMapIntensity.value=U.environmentIntensity),Nt&&(ct.setValue(B,"toneMappingExposure",v.toneMappingExposure),Pe.needsLights&&fh(rn,Ji),ae&&V.fog===!0&&de.refreshFogUniforms(rn,ae),de.refreshMaterialUniforms(rn,V,O,ee,p.state.transmissionRenderTarget[M.id]),oo.upload(B,La(Pe),rn,T)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(oo.upload(B,La(Pe),rn,T),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ct.setValue(B,"center",N.center),ct.setValue(B,"modelViewMatrix",N.modelViewMatrix),ct.setValue(B,"normalMatrix",N.normalMatrix),ct.setValue(B,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Vt=V.uniformsGroups;for(let Cn=0,Rn=Vt.length;Cn<Rn;Cn++){const Ba=Vt[Cn];F.update(Ba,jt),F.bind(Ba,jt)}}return jt}function fh(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function ph(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,U,H){Ce.get(M.texture).__webglTexture=U,Ce.get(M.depthTexture).__webglTexture=H;const V=Ce.get(M);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const H=Ce.get(M);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,H=0){R=M,A=U,C=H;let V=!0,N=null,ae=!1,pe=!1;if(M){const Se=Ce.get(M);if(Se.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(B.FRAMEBUFFER,null),V=!1;else if(Se.__webglFramebuffer===void 0)T.setupRenderTarget(M);else if(Se.__hasExternalTextures)T.rebindTextures(M,Ce.get(M.texture).__webglTexture,Ce.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ee=M.depthTexture;if(Se.__boundDepthTexture!==Ee){if(Ee!==null&&Ce.has(Ee)&&(M.width!==Ee.image.width||M.height!==Ee.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(M)}}const Ue=M.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(pe=!0);const ze=Ce.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ze[U])?N=ze[U][H]:N=ze[U],ae=!0):M.samples>0&&T.useMultisampledRTT(M)===!1?N=Ce.get(M).__webglMultisampledFramebuffer:Array.isArray(ze)?N=ze[H]:N=ze,P.copy(M.viewport),G.copy(M.scissor),k=M.scissorTest}else P.copy(we).multiplyScalar(O).floor(),G.copy(Fe).multiplyScalar(O).floor(),k=Xe;if(Te.bindFramebuffer(B.FRAMEBUFFER,N)&&V&&Te.drawBuffers(M,N),Te.viewport(P),Te.scissor(G),Te.setScissorTest(k),ae){const Se=Ce.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,H)}else if(pe){const Se=Ce.get(M.texture),Ue=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Se.__webglTexture,H||0,Ue)}b=-1},this.readRenderTargetPixels=function(M,U,H,V,N,ae,pe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ce.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){Te.bindFramebuffer(B.FRAMEBUFFER,Me);try{const Se=M.texture,Ue=Se.format,ze=Se.type;if(!ue.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&H>=0&&H<=M.height-N&&B.readPixels(U,H,V,N,He.convert(Ue),He.convert(ze),ae)}finally{const Se=R!==null?Ce.get(R).__webglFramebuffer:null;Te.bindFramebuffer(B.FRAMEBUFFER,Se)}}},this.readRenderTargetPixelsAsync=async function(M,U,H,V,N,ae,pe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ce.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pe!==void 0&&(Me=Me[pe]),Me){const Se=M.texture,Ue=Se.format,ze=Se.type;if(!ue.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-V&&H>=0&&H<=M.height-N){Te.bindFramebuffer(B.FRAMEBUFFER,Me);const Ee=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.bufferData(B.PIXEL_PACK_BUFFER,ae.byteLength,B.STREAM_READ),B.readPixels(U,H,V,N,He.convert(Ue),He.convert(ze),0);const Ke=R!==null?Ce.get(R).__webglFramebuffer:null;Te.bindFramebuffer(B.FRAMEBUFFER,Ke);const at=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await id(B,at,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Ee),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ae),B.deleteBuffer(Ee),B.deleteSync(at),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,H=0){M.isTexture!==!0&&(hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const V=Math.pow(2,-H),N=Math.floor(M.image.width*V),ae=Math.floor(M.image.height*V),pe=U!==null?U.x:0,Me=U!==null?U.y:0;T.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,H,0,0,pe,Me,N,ae),Te.unbindTexture()},this.copyTextureToTexture=function(M,U,H=null,V=null,N=0){M.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,M=arguments[1],U=arguments[2],N=arguments[3]||0,H=null);let ae,pe,Me,Se,Ue,ze,Ee,Ke,at;const lt=M.isCompressedTexture?M.mipmaps[N]:M.image;H!==null?(ae=H.max.x-H.min.x,pe=H.max.y-H.min.y,Me=H.isBox3?H.max.z-H.min.z:1,Se=H.min.x,Ue=H.min.y,ze=H.isBox3?H.min.z:0):(ae=lt.width,pe=lt.height,Me=lt.depth||1,Se=0,Ue=0,ze=0),V!==null?(Ee=V.x,Ke=V.y,at=V.z):(Ee=0,Ke=0,at=0);const Ft=He.convert(U.format),Ze=He.convert(U.type);let Pe;U.isData3DTexture?(T.setTexture3D(U,0),Pe=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(T.setTexture2DArray(U,0),Pe=B.TEXTURE_2D_ARRAY):(T.setTexture2D(U,0),Pe=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);const un=B.getParameter(B.UNPACK_ROW_LENGTH),Qe=B.getParameter(B.UNPACK_IMAGE_HEIGHT),jt=B.getParameter(B.UNPACK_SKIP_PIXELS),di=B.getParameter(B.UNPACK_SKIP_ROWS),Nt=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,lt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,lt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Se),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ue),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ze);const Ji=M.isDataArrayTexture||M.isData3DTexture,ct=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const rn=Ce.get(M),Ki=Ce.get(U),Vt=Ce.get(rn.__renderTarget),Cn=Ce.get(Ki.__renderTarget);Te.bindFramebuffer(B.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Te.bindFramebuffer(B.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Rn=0;Rn<Me;Rn++)Ji&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ce.get(M).__webglTexture,N,ze+Rn),M.isDepthTexture?(ct&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ce.get(U).__webglTexture,N,at+Rn),B.blitFramebuffer(Se,Ue,ae,pe,Ee,Ke,ae,pe,B.DEPTH_BUFFER_BIT,B.NEAREST)):ct?B.copyTexSubImage3D(Pe,N,Ee,Ke,at+Rn,Se,Ue,ae,pe):B.copyTexSubImage2D(Pe,N,Ee,Ke,at+Rn,Se,Ue,ae,pe);Te.bindFramebuffer(B.READ_FRAMEBUFFER,null),Te.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ct?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(Pe,N,Ee,Ke,at,ae,pe,Me,Ft,Ze,lt.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Pe,N,Ee,Ke,at,ae,pe,Me,Ft,lt.data):B.texSubImage3D(Pe,N,Ee,Ke,at,ae,pe,Me,Ft,Ze,lt):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,N,Ee,Ke,ae,pe,Ft,Ze,lt.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,N,Ee,Ke,lt.width,lt.height,Ft,lt.data):B.texSubImage2D(B.TEXTURE_2D,N,Ee,Ke,ae,pe,Ft,Ze,lt);B.pixelStorei(B.UNPACK_ROW_LENGTH,un),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qe),B.pixelStorei(B.UNPACK_SKIP_PIXELS,jt),B.pixelStorei(B.UNPACK_SKIP_ROWS,di),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Nt),N===0&&U.generateMipmaps&&B.generateMipmap(Pe),Te.unbindTexture()},this.copyTextureToTexture3D=function(M,U,H=null,V=null,N=0){return M.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,M=arguments[2],U=arguments[3],N=arguments[4]||0),hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,H,V,N)},this.initRenderTarget=function(M){Ce.get(M).__webglFramebuffer===void 0&&T.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?T.setTextureCube(M,0):M.isData3DTexture?T.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?T.setTexture2DArray(M,0):T.setTexture2D(M,0),Te.unbindTexture()},this.resetState=function(){A=0,C=0,R=null,Te.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ye._getUnpackColorSpace()}}class wo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new be(e),this.density=t}clone(){return new wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class _a extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentIntensity=1,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zt extends _t{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Kc extends Xi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const fo=new L,po=new L,Ll=new ut,is=new Nc,$s=new yo,ir=new L,Fl=new L;class pm extends _t{constructor(e=new Pt,t=new Kc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)fo.fromBufferAttribute(t,i-1),po.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=fo.distanceTo(po);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=s,e.ray.intersectsSphere($s)===!1)return;Ll.copy(i).invert(),is.copy(e.ray).applyMatrix4(Ll);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=h.getX(x),w=h.getX(x+1),S=Js(this,e,is,l,p,w);S&&t.push(S)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(f),p=Js(this,e,is,l,x,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=c){const p=Js(this,e,is,l,x,x+1);p&&t.push(p)}if(this.isLineLoop){const x=Js(this,e,is,l,g-1,f);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function Js(o,e,t,n,i,s){const a=o.geometry.attributes.position;if(fo.fromBufferAttribute(a,i),po.fromBufferAttribute(a,s),t.distanceSqToSegment(fo,po,ir,Fl)>n)return;ir.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(ir);if(!(l<e.near||l>e.far))return{distance:l,point:Fl.clone().applyMatrix4(o.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:o}}class ws extends Lt{constructor(e,t,n,i,s,a,r,l,c){super(e,t,n,i,s,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ya extends Pt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],r=[],l=[],c=new L,h=new Le;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){const f=n+d/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(r,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ya(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class We extends Pt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],d=[],u=[],f=[];let g=0;const x=[],m=n/2;let p=0;w(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new st(d,3)),this.setAttribute("normal",new st(u,3)),this.setAttribute("uv",new st(f,2));function w(){const v=new L,I=new L;let A=0;const C=(t-e)/n;for(let R=0;R<=s;R++){const b=[],y=R/s,P=y*(t-e)+e;for(let G=0;G<=i;G++){const k=G/i,W=k*l+r,q=Math.sin(W),X=Math.cos(W);I.x=P*q,I.y=-y*n+m,I.z=P*X,d.push(I.x,I.y,I.z),v.set(q,C,X).normalize(),u.push(v.x,v.y,v.z),f.push(k,1-y),b.push(g++)}x.push(b)}for(let R=0;R<i;R++)for(let b=0;b<s;b++){const y=x[b][R],P=x[b+1][R],G=x[b+1][R+1],k=x[b][R+1];(e>0||b!==0)&&(h.push(y,P,k),A+=3),(t>0||b!==s-1)&&(h.push(P,G,k),A+=3)}c.addGroup(p,A,0),p+=A}function S(v){const I=g,A=new Le,C=new L;let R=0;const b=v===!0?e:t,y=v===!0?1:-1;for(let G=1;G<=i;G++)d.push(0,m*y,0),u.push(0,y,0),f.push(.5,.5),g++;const P=g;for(let G=0;G<=i;G++){const W=G/i*l+r,q=Math.cos(W),X=Math.sin(W);C.x=b*X,C.y=m*y,C.z=b*q,d.push(C.x,C.y,C.z),u.push(0,y,0),A.x=q*.5+.5,A.y=X*.5*y+.5,f.push(A.x,A.y),g++}for(let G=0;G<i;G++){const k=I+G,W=P+G;v===!0?h.push(W,W+1,k):h.push(W+1,W,k),R+=3}c.addGroup(p,R,v===!0?1:2),p+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new We(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Nn extends We{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,r=Math.PI*2){super(0,e,t,n,i,s,a,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:r}}static fromJSON(e){return new Nn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ba extends Pt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const s=[],a=[];r(i),c(n),h(),this.setAttribute("position",new st(s,3)),this.setAttribute("normal",new st(s.slice(),3)),this.setAttribute("uv",new st(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(w){const S=new L,v=new L,I=new L;for(let A=0;A<t.length;A+=3)f(t[A+0],S),f(t[A+1],v),f(t[A+2],I),l(S,v,I,w)}function l(w,S,v,I){const A=I+1,C=[];for(let R=0;R<=A;R++){C[R]=[];const b=w.clone().lerp(v,R/A),y=S.clone().lerp(v,R/A),P=A-R;for(let G=0;G<=P;G++)G===0&&R===A?C[R][G]=b:C[R][G]=b.clone().lerp(y,G/P)}for(let R=0;R<A;R++)for(let b=0;b<2*(A-R)-1;b++){const y=Math.floor(b/2);b%2===0?(u(C[R][y+1]),u(C[R+1][y]),u(C[R][y])):(u(C[R][y+1]),u(C[R+1][y+1]),u(C[R+1][y]))}}function c(w){const S=new L;for(let v=0;v<s.length;v+=3)S.x=s[v+0],S.y=s[v+1],S.z=s[v+2],S.normalize().multiplyScalar(w),s[v+0]=S.x,s[v+1]=S.y,s[v+2]=S.z}function h(){const w=new L;for(let S=0;S<s.length;S+=3){w.x=s[S+0],w.y=s[S+1],w.z=s[S+2];const v=m(w)/2/Math.PI+.5,I=p(w)/Math.PI+.5;a.push(v,1-I)}g(),d()}function d(){for(let w=0;w<a.length;w+=6){const S=a[w+0],v=a[w+2],I=a[w+4],A=Math.max(S,v,I),C=Math.min(S,v,I);A>.9&&C<.1&&(S<.2&&(a[w+0]+=1),v<.2&&(a[w+2]+=1),I<.2&&(a[w+4]+=1))}}function u(w){s.push(w.x,w.y,w.z)}function f(w,S){const v=w*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){const w=new L,S=new L,v=new L,I=new L,A=new Le,C=new Le,R=new Le;for(let b=0,y=0;b<s.length;b+=9,y+=6){w.set(s[b+0],s[b+1],s[b+2]),S.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),A.set(a[y+0],a[y+1]),C.set(a[y+2],a[y+3]),R.set(a[y+4],a[y+5]),I.copy(w).add(S).add(v).divideScalar(3);const P=m(I);x(A,y+0,w,P),x(C,y+2,S,P),x(R,y+4,v,P)}}function x(w,S,v,I){I<0&&w.x===1&&(a[S]=w.x-1),v.x===0&&v.z===0&&(a[S]=I/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.vertices,e.indices,e.radius,e.details)}}class wa extends ba{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new wa(e.radius,e.detail)}}class hi extends Pt{constructor(e=.5,t=1,n=32,i=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const r=[],l=[],c=[],h=[];let d=e;const u=(t-e)/i,f=new L,g=new Le;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const p=s+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<i;x++){const m=x*(n+1);for(let p=0;p<n;p++){const w=p+m,S=w,v=w+n+1,I=w+n+2,A=w+1;r.push(S,v,A),r.push(v,I,A)}}this.setIndex(r),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class dt extends Pt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const h=[],d=new L,u=new L,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const w=[],S=p/n;let v=0;p===0&&a===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let I=0;I<=t;I++){const A=I/t;d.x=-e*Math.cos(i+A*s)*Math.sin(a+S*r),d.y=e*Math.cos(a+S*r),d.z=e*Math.sin(i+A*s)*Math.sin(a+S*r),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(A+v,1-S),w.push(c++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<t;w++){const S=h[p][w+1],v=h[p][w],I=h[p+1][w],A=h[p+1][w+1];(p!==0||a>0)&&f.push(S,v,A),(p!==n-1||l<Math.PI)&&f.push(v,I,A)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(x,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mo extends Pt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],r=[],l=[],c=[],h=new L,d=new L,u=new L;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const x=g/i*s,m=f/n*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(x),d.y=(e+t*Math.cos(m))*Math.sin(x),d.z=t*Math.sin(m),r.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const x=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,w=(i+1)*f+g;a.push(x,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class mm extends Ct{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class j extends Xi{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dc,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=ra,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ks(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function gm(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function xm(o){function e(i,s){return o[i]-o[s]}const t=o.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Bl(o,e,t){const n=o.length,i=new o.constructor(n);for(let s=0,a=0;a!==n;++s){const r=t[s]*e;for(let l=0;l!==e;++l)i[a++]=o[r+l]}return i}function Zc(o,e,t,n){let i=1,s=o[0];for(;s!==void 0&&s[n]===void 0;)s=o[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=o[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=o[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=o[i++];while(s!==void 0)}class So{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let r=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===r)break;if(s=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=s)){const r=t[1];e<r&&(n=2,s=r);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const r=n+a>>>1;e<t[r]?a=r:n=r+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class vm extends So{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ci,endingEnd:Ci}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,r=i[s],l=i[a];if(r===void 0)switch(this.getSettings_().endingStart){case Ri:s=e,r=2*t-n;break;case co:s=i.length-2,r=t+i[s]-i[s+1];break;default:s=e,r=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ri:a=e,l=2*n-t;break;case co:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-r),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,w=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,S=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let I=0;I!==r;++I)s[I]=p*a[h+I]+w*a[c+I]+S*a[l+I]+v*a[d+I];return s}}class Qc extends So{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,h=(n-t)/(i-t),d=1-h;for(let u=0;u!==r;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}}class _m extends So{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class hn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ks(t,this.TimeBufferType),this.values=Ks(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ks(e.times,Array),values:Ks(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new _m(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Qc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new vm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case lo:t=this.InterpolantFactoryMethodDiscrete;break;case Kr:t=this.InterpolantFactoryMethodLinear;break;case Ao:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lo;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return Ao}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const r=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*r,a*r)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let r=0;r!==s;r++){const l=n[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,a),e=!1;break}a=l}if(i!==void 0&&gm(i))for(let r=0,l=i.length;r!==l;++r){const c=i[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Ao,s=e.length-1;let a=1;for(let r=1;r<s;++r){let l=!1;const c=e[r],h=e[r+1];if(c!==h&&(r!==1||c!==e[0]))if(i)l=!0;else{const d=r*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){l=!0;break}}}if(l){if(r!==a){e[a]=e[r];const d=r*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let r=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[r+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Kr;class Yi extends hn{constructor(e,t,n){super(e,t,n)}}Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=lo;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class eh extends hn{}eh.prototype.ValueTypeName="color";class mo extends hn{}mo.prototype.ValueTypeName="number";class ym extends So{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=(n-t)/(i-t);let c=e*r;for(let h=c+r;c!==h;c+=4)qt.slerpFlat(s,0,a,c-r,a,c,l);return s}}class mt extends hn{InterpolantFactoryMethodLinear(e){return new ym(this.times,this.values,this.getValueSize(),e)}}mt.prototype.ValueTypeName="quaternion";mt.prototype.InterpolantFactoryMethodSmooth=void 0;class ji extends hn{constructor(e,t,n){super(e,t,n)}}ji.prototype.ValueTypeName="string";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=lo;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;class ri extends hn{}ri.prototype.ValueTypeName="vector";class us{constructor(e="",t=-1,n=[],i=pa){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Wi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,r=n.length;a!==r;++a)t.push(wm(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(hn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let r=0;r<s;r++){let l=[],c=[];l.push((r+s-1)%s,r,(r+1)%s),c.push(0,1,0);const h=xm(l);l=Bl(l,1,h),c=Bl(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new mo(".morphTargetInfluences["+t[r].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let r=0,l=e.length;r<l;r++){const c=e[r],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let u=i[d];u||(i[d]=u=[]),u.push(c)}}const a=[];for(const r in i)a.push(this.CreateFromMorphTargetSequence(r,i[r],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,x){if(f.length!==0){const m=[],p=[];Zc(f,m,p,g),m.length!==0&&x.push(new d(u,m,p))}},i=[],s=e.name||"default",a=e.fps||30,r=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let x=0;x<u[g].morphTargets.length;x++)f[u[g].morphTargets[x]]=-1;for(const x in f){const m=[],p=[];for(let w=0;w!==u[g].morphTargets.length;++w){const S=u[g];m.push(S.time),p.push(S.morphTarget===x?1:0)}i.push(new mo(".morphTargetInfluence["+x+"]",m,p))}l=f.length*a}else{const f=".bones["+t[d].name+"]";n(ri,f+".position",u,"pos",i),n(mt,f+".quaternion",u,"rot",i),n(ri,f+".scale",u,"scl",i)}}return i.length===0?null:new this(s,l,i,r)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function bm(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mo;case"vector":case"vector2":case"vector3":case"vector4":return ri;case"color":return eh;case"quaternion":return mt;case"bool":case"boolean":return Yi;case"string":return ji}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function wm(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=bm(o.type);if(o.times===void 0){const t=[],n=[];Zc(o.keys,t,n,"value"),o.times=t,o.values=n}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}class Ms extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Mm extends Ms{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const sr=new ut,Ul=new L,Nl=new L;class th{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ma,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ul.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ul),Nl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Nl),t.updateMatrixWorld(),sr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ol=new ut,ss=new L,or=new L;class Sm extends th{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Le(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ss.setFromMatrixPosition(e.matrixWorld),n.position.copy(ss),or.copy(n.position),or.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(or),n.updateMatrixWorld(),i.makeTranslation(-ss.x,-ss.y,-ss.z),Ol.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol)}}class Em extends Ms{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Tm extends th{constructor(){super(new ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gi extends Ms{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new Tm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Ma extends Ms{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Am{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=kl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=kl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function kl(){return performance.now()}class Cm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,a;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let r=0;r!==i;++r)n[s+r]=n[r];a=t}else{a+=t;const r=t/a;this._mixBufferRegion(n,s,0,r,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,r=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){r.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,a=i;s!==a;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){qt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const a=this._workIndex*s;qt.multiplyQuaternionsFlat(e,a,e,t,e,n),qt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,s){const a=1-i;for(let r=0;r!==s;++r){const l=t+r;e[l]=e[l]*a+e[n+r]*i}}_lerpAdditive(e,t,n,i,s){for(let a=0;a!==s;++a){const r=t+a;e[r]=e[r]+e[n+a]*i}}}const Sa="\\[\\]\\.:\\/",Rm=new RegExp("["+Sa+"]","g"),Ea="[^"+Sa+"]",Pm="[^"+Sa.replace("\\.","")+"]",Im=/((?:WC+[\/:])*)/.source.replace("WC",Ea),Dm=/(WCOD+)?/.source.replace("WCOD",Pm),Lm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ea),Fm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ea),Bm=new RegExp("^"+Im+Dm+Lm+Fm+"$"),Um=["material","materials","bones","map"];class Nm{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Rm,"")}static parseTrackName(e){const t=Bm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Um.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const r=s[a];if(r.name===t||r.uuid===t)return r;const l=n(r.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let r=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=Nm;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Om{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,a=s.length,r=new Array(a),l={endingStart:Ci,endingEnd:Ci};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);r[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=r,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Hh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,a=s/i,r=i/s;e.warp(1,a,t),this.warp(r,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,a=this.timeScale;let r=this._timeScaleInterpolant;r===null&&(r=i._lendControlInterpolant(),this._timeScaleInterpolant=r);const l=r.parameterPositions,c=r.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),r=this._updateWeight(e);if(r>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Wh:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(r);break;case pa:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(i,r)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const a=n===Vh;if(e===0)return s===-1?i:a&&(s&1)===1?t-i:i;if(n===Gh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const r=Math.floor(i/t);i-=t*r,s+=Math.abs(r);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:r})}}else this.time=i;if(a&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ri,i.endingEnd=Ri):(e?i.endingStart=this.zeroSlopeAtStart?Ri:Ci:i.endingStart=co,t?i.endingEnd=this.zeroSlopeAtEnd?Ri:Ci:i.endingEnd=co)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const r=a.parameterPositions,l=a.sampleValues;return r[0]=s,l[0]=t,r[1]=s+e,l[1]=n,this}}const km=new Float32Array(1);class zm extends ci{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,a=e._propertyBindings,r=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==s;++d){const u=i[d],f=u.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[d]=g;else{if(g=a[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const x=t&&t._propertyBindings[d].binding.parsedPath;g=new Cm(nt.create(n,f,x),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[d]=g}r[d].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const r=a.knownActions;e._byClipCacheIndex=r.length,r.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,r=a[s],l=r.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const d=r.actionByRoot,u=(e._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,r=a[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete r[s],Object.keys(r).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Qc(new Float32Array(2),new Float32Array(2),1,km),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let a=typeof e=="string"?us.findByName(i,e):e;const r=a!==null?a.uuid:e,l=this._actionsByClip[r];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=pa),l!==void 0){const d=l.actionByRoot[s];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Om(this,a,t,n);return this._bindAction(h,c),this._addInactiveAction(h,r,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?us.findByName(n,e):e,a=s?s.uuid:e,r=this._actionsByClip[a];return r!==void 0&&r.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,a);const r=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)r[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const a=s.knownActions;for(let r=0,l=a.length;r!==l;++r){const c=a[r];this._deactivateAction(c);const h=c._cacheIndex,d=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,t[h]=d,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const r=n[a].actionByRoot,l=r[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const a in s){const r=s[a];r.restoreOriginalState(),this._removeInactiveBinding(r)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oa);const nh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class $i{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gm=new ga(-1,1,1,-1,0,1);class Hm extends Pt{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}}const Vm=new Hm;class Ta{constructor(e){this._mesh=new D(Vm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Wm extends $i{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Ct?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xs.clone(e.uniforms),this.material=new Ct({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ta(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class zl extends $i{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(r),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class Xm extends $i{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class qm{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Le);this._width=n.width,this._height=n.height,t=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wm(nh),this.copyPass.material.blending=Mn,this.clock=new Am}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}zl!==void 0&&(a instanceof zl?n=!0:a instanceof Xm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ym extends $i{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new be}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const jm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new be(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Hi extends $i{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Le(e.x,e.y):new Le(256,256),this.clearColor=new be(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(s,a,{type:Sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new sn(s,a,{type:Sn});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new sn(s,a,{type:Sn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const r=jm;this.highPassUniforms=xs.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ct({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Le(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=nh;this.copyUniforms=xs.clone(h.uniforms),this.blendMaterial=new Ct({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:dr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new be,this.oldClearAlpha=1,this.basic=new Ht,this.fsQuad=new Ta(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Le(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=Hi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Hi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Ct({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Le(.5,.5)},direction:{value:new Le(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}Hi.BlurDirectionX=new Le(1,0);Hi.BlurDirectionY=new Le(0,1);const $m={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Jm extends $i{constructor(){super();const e=$m;this.uniforms=xs.clone(e.uniforms),this.material=new mm({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ta(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ye.getTransfer(this._outputColorSpace)===tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===gc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===xc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===aa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===_c?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===yc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const os={fov:35,height:38,rotationSmoothing:.06,positionSmoothing:.1,lookAheadDistance:6};class Km{constructor(){E(this,"camera");E(this,"targetPos",new L);E(this,"cameraAngle",0);this.camera=new Dt(os.fov,window.innerWidth/window.innerHeight,5,800)}follow(e,t,n){let i=n-this.cameraAngle;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;this.cameraAngle+=i*os.rotationSmoothing;const s=Math.sin(this.cameraAngle)*-28,a=-Math.cos(this.cameraAngle)*-28;this.targetPos.set(e.x+s,e.y+os.height,e.z+a),this.camera.position.lerp(this.targetPos,os.positionSmoothing);const l=t.length()>.5?t.clone().normalize().multiplyScalar(os.lookAheadDistance):new L(0,0,0),c=e.clone().add(l);c.y+=2,this.camera.lookAt(c)}}class Zm{constructor(){E(this,"boxes",[])}addBox(e,t,n,i){this.boxes.push({cx:e,cz:t,hw:n,hd:i})}resolveCircle(e,t,n){let i=e,s=t;for(const a of this.boxes){const r=a.hw+n,l=a.hd+n,c=i-a.cx,h=s-a.cz;if(Math.abs(c)<r&&Math.abs(h)<l){const d=r-Math.abs(c),u=l-Math.abs(h);d<u?i+=c<0?-d:d:s+=h<0?-u:u}}return{x:i,z:s}}}let ea=null,vs=null;async function Qm(){async function e(t){const n=new Image;return new Promise(i=>{n.onload=()=>i(n.naturalWidth>0?n:null),n.onerror=()=>{console.warn("[LogoLoader] failed:",t),i(null)},n.src=t})}[ea,vs]=await Promise.all([e("./tem-logo.jpg"),e("./tem-logo-white.jpg")]),console.log("[LogoLoader] black-on-white:",!!ea,"| white-on-black:",!!vs)}function ih(o){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d"),i=o>>16&255,s=o>>8&255,a=o&255,l=.299*i+.587*s+.114*a<128,c=l?vs:ea;if(c){n.drawImage(c,0,0,256,256);const h=n.getImageData(0,0,256,256),d=h.data;for(let u=0;u<d.length;u+=4){const f=.299*d[u]+.587*d[u+1]+.114*d[u+2];l?d[u+3]=Math.round(Math.min(255,f*1.4)):d[u+3]=Math.round(Math.min(255,(255-f)*1.4))}n.putImageData(h,0,0)}else eg(n,256,l);return new ws(t)}function sh(o=512){const e=document.createElement("canvas");e.width=e.height=o;const t=e.getContext("2d");if(vs){t.drawImage(vs,0,0,o,o);const n=t.getImageData(0,0,o,o),i=n.data;for(let s=0;s<i.length;s+=4){const a=.299*i[s]+.587*i[s+1]+.114*i[s+2];i[s+3]=Math.round(Math.min(255,a*1.5))}t.putImageData(n,0,0)}else t.strokeStyle="#FFFFFF",t.fillStyle="#FFFFFF",oh(t,o);return new ws(e)}function eg(o,e,t){o.strokeStyle=t?"#FFFFFF":"#111111",o.fillStyle=t?"#FFFFFF":"#111111",oh(o,e)}function oh(o,e){const t=e/256;o.save(),o.scale(t,t),o.lineCap="round",o.lineWidth=6,o.beginPath(),o.arc(128,128,118,0,Math.PI*2),o.stroke(),o.lineWidth=11,o.beginPath(),o.moveTo(128,225),o.lineTo(128,148),o.stroke(),o.lineWidth=7,o.beginPath(),o.moveTo(128,148),o.lineTo(128,96),o.stroke();const n=[[128,178,76,152],[128,178,180,152],[128,160,64,134],[128,160,192,134],[128,142,76,116],[128,142,180,116],[128,124,88,99],[128,124,168,99],[128,110,98,84],[128,110,158,84],[128,98,110,70],[128,98,146,70],[128,88,118,56],[128,88,138,56]];o.lineWidth=4;for(const[i,s,a,r]of n)o.beginPath(),o.moveTo(i,s),o.lineTo(a,r),o.stroke(),o.beginPath(),o.arc(a,r,5,0,Math.PI*2),o.fill();o.restore()}class tg{constructor(){E(this,"renderer");E(this,"scene");E(this,"camera");E(this,"collisionWorld",new Zm);E(this,"composer");E(this,"clouds",[]);E(this,"updateCallbacks",[]);E(this,"lastTime",0);E(this,"C",{modernGrey:13157564,warmGrey:12103846,terracotta:12884602,deepClay:10516568,softWhite:15262940,charcoal:4868682,warmCream:13945272,oliveGreen:9083754,ironRed:12674667})}async init(){this.renderer=new va({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=mc,this.renderer.toneMapping=aa,this.renderer.toneMappingExposure=1.1,document.body.appendChild(this.renderer.domElement),this.renderer.domElement.style.position="relative",this.renderer.domElement.style.zIndex="1",this.scene=new _a,this.scene.fog=new wo(8900331,.0025),this.camera=new Km,this.scene.add(this.camera.camera),this.composer=new qm(this.renderer),this.composer.addPass(new Ym(this.scene,this.camera.camera));const e=new Hi(new Le(window.innerWidth,window.innerHeight),.3,.4,.85);this.composer.addPass(e),this.composer.addPass(new Jm);const t=new Ma(16777215,.5);this.scene.add(t);const n=new Gi(16774368,1.4);n.position.set(80,120,40),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=.5,n.shadow.camera.far=600,n.shadow.camera.left=-300,n.shadow.camera.right=300,n.shadow.camera.top=300,n.shadow.camera.bottom=-300,n.shadow.bias=-.001,this.scene.add(n);const i=new Gi(16771280,.5);i.position.set(-60,40,-80),this.scene.add(i);const s=new Mm(8900331,8943462,.3);this.scene.add(s),this.createCityGround(),this.createCity(),this.createTEHouses(),this.buildWorkshop(10,15),this.createZebraCrossings(),this.createRoadCorners(),this.createStreetFurniture(),this.createSkyDome(),this.createClouds(),this.createPuddles(),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),this.camera.camera.aspect=window.innerWidth/window.innerHeight,this.camera.camera.updateProjectionMatrix()})}seed(e,t,n=0){const i=Math.sin(e*127.1+t*311.7+n*74.3)*43758.5453123;return i-Math.floor(i)}getZone(e,t){return Math.abs(e)<80&&Math.abs(t)<80?"cbd":e<-80?"footscray":e>80?"richmond":t<-80?"stkilda":"brunswick"}pickBuildingType(e,t){const n={cbd:[.5,.5,.9,1,1],footscray:[0,.2,.2,.4,1],brunswick:[.3,.6,.6,1,1],richmond:[.3,.3,.6,1,1],stkilda:[0,.3,.3,.7,1]},i=n[e]??n.brunswick,s=["A","B","C","D","E"];for(let a=0;a<i.length;a++)if(t<i[a])return s[a];return"D"}createCityGround(){const s=new j({color:8947840}),a=new D(new ht(2048,2048),s);a.rotation.x=-Math.PI/2,a.position.y=0,a.receiveShadow=!0,this.scene.add(a);const r={cbd:8947840,footscray:7824981,brunswick:8943462,richmond:8026224,stkilda:9080960};for(let l=-240;l<240;l+=40)for(let c=-240;c<240;c+=40){const h=l+20,d=c+40/2,u=this.getZone(h,d),g=this.seed(l,c,0)<.15?5929546:r[u],x=new j({color:g}),m=new D(new ht(30,30),x);m.rotation.x=-Math.PI/2,m.position.set(h,.005,d),m.receiveShadow=!0,this.scene.add(m)}}createCity(){const i=new j({color:2763306}),s=new j({color:16777215}),a=new j({color:15777856}),r=new j({color:13156528}),l=32;for(let c=-240;c<=240;c+=40){const d=new D(new ht(480,8),i);d.rotation.x=-Math.PI/2,d.position.set(0,.01,c),d.receiveShadow=!0,this.scene.add(d);for(let u=-240;u<240;u+=40){const f=u+20;for(const g of[-1,1]){const x=new D(new ht(l,2),r);x.rotation.x=-Math.PI/2,x.position.set(f,.02,c+g*(8/2+1)),x.receiveShadow=!0,this.scene.add(x)}}for(const u of[-1,1]){const f=new D(new ht(480,.2),a);f.rotation.x=-Math.PI/2,f.position.set(0,.03,c+u*(8/2-.3)),this.scene.add(f)}for(let u=-240;u<=240;u+=8){const f=new D(new ht(4,.15),s);f.rotation.x=-Math.PI/2,f.position.set(u,.03,c),this.scene.add(f)}for(let u=-240;u<=240;u+=20)for(const f of[-1,1]){const g=u+(this.seed(u,c,50+f)-.5)*2,x=c+f*5.5,m=(g%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,x,u*10+f,c*10+1)}for(let u=-232;u<240;u+=17){const f=this.seed(u,c,60);if(f>.45){const g=f>.72?1:-1,x=u+(this.seed(u,c,61)-.5)*4,m=c+g*(8/2+2);this.addParkedCar(x,m,u+g*3,c+7,Math.PI/2)}}}for(let c=-240;c<=240;c+=40){const d=new D(new ht(8,480),i);d.rotation.x=-Math.PI/2,d.position.set(c,.01,0),d.receiveShadow=!0,this.scene.add(d);for(let u=-240;u<240;u+=40){const f=u+20;for(const g of[-1,1]){const x=new D(new ht(2,l),r);x.rotation.x=-Math.PI/2,x.position.set(c+g*(8/2+1),.02,f),x.receiveShadow=!0,this.scene.add(x)}}for(const u of[-1,1]){const f=new D(new ht(.2,480),a);f.rotation.x=-Math.PI/2,f.position.set(c+u*(8/2-.3),.03,0),this.scene.add(f)}for(let u=-240;u<=240;u+=8){const f=new D(new ht(.15,4),s);f.rotation.x=-Math.PI/2,f.position.set(c,.03,u),this.scene.add(f)}for(let u=-240;u<=240;u+=20)for(const f of[-1,1]){const g=c+f*5.5,x=u+(this.seed(c,u,52+f)-.5)*2,m=(x%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,x,c*10+2,u*10+f)}for(let u=-232;u<240;u+=17){const f=this.seed(c,u,62);if(f>.45){const g=f>.72?1:-1,x=c+g*(8/2+2),m=u+(this.seed(c,u,63)-.5)*4;this.addParkedCar(x,m,c+9,u+g*3,0)}}}for(let c=-240;c<240;c+=40)for(let h=-240;h<240;h+=40)this.populateBlock(c,h,40,8)}addTree(e,t,n,i){const s=this.seed(n,i,99),a=s<.15?"palm":s<.5?"round":"layered",r=2+s*1.5,l=new j({color:6045747}),c=new D(new We(.25,.35,r,7),l);if(c.position.set(e,r/2,t),c.castShadow=!0,this.scene.add(c),a==="palm"){const h=new D(new We(.15,.22,6,6),new j({color:9139029}));h.position.set(e,3,t),this.scene.add(h);for(let d=0;d<6;d++){const u=d/6*Math.PI*2,f=new D(new K(.15,.08,2.5),new j({color:2775578}));f.position.set(e+Math.cos(u)*1.2,6.5,t+Math.sin(u)*1.2),f.rotation.y=u,f.rotation.z=.4,this.scene.add(f)}}else if(a==="layered"){const h=[2973229,3829306,4881994];for(let d=0;d<3;d++){const u=2.2-d*.5,f=new D(new Nn(u,2,8),new j({color:h[d]}));f.position.set(e,r+1+d*1.5,t),f.castShadow=!0,this.scene.add(f)}}else{const h=s>.7?4025917:2973229,d=[[0,0,0],[.8,-.3,.5],[-.7,-.2,.3],[.3,.4,-.6],[-.4,.3,-.5]];for(let u=0;u<d.length;u++){const[f,g,x]=d[u],m=1.8+this.seed(n+u*17,i+u*13,103)*.8,p=new D(new dt(m,7,6),new j({color:h}));p.position.set(e+f,r+2.5+g,t+x),p.castShadow=!0,this.scene.add(p)}}}addParkedCar(e,t,n,i,s=0){const a=[13382451,3364300,11184810,14540253,2236962],r=Math.floor(this.seed(n,i,20)*a.length),l=new j({color:a[r]}),c=new D(new K(1.5,1.2,3),l);c.position.set(e,.6,t),c.rotation.y=s,this.scene.add(c);const h=new j({color:2241348}),d=new D(new K(1.4,.5,.1),h),u=-.9*Math.sin(s),f=-.9*Math.cos(s);d.position.set(e+u,1.3,t+f),d.rotation.y=s,this.scene.add(d)}populateBlock(e,t,n,i){const s=n-i-4,a=e+n/2,r=t+n/2,l=this.getZone(a,r),c=1+Math.floor(this.seed(e,t,1)*2);for(let h=0;h<c;h++){const d=this.seed(e+h*3,t+h*7,3),u=this.pickBuildingType(l,d);if(u==="E"){h===0&&this.buildTypeE(a,r,e,t);break}const f=s*.18,g=c>1?h===0?-f:f:0,x=g+(this.seed(e+h*5,t,4)-.5)*f*.3,m=g+(this.seed(e,t+h*5,5)-.5)*f*.3,p=e+h*11,w=t+h*13;switch(u){case"A":this.buildTypeA(a+x,r+m,p,w);break;case"B":this.buildTypeB(a+x,r+m,p,w);break;case"C":this.buildTypeC(a+x,r+m,p,w);break;case"D":this.buildTypeD(a+x,r+m,p,w);break}}}addBox(e,t,n,i,s,a,r,l,c=0,h=0,d=0){const u=new D(new K(n,i,s),new j({color:t}));u.position.set(a,r,l),c!==0&&(u.rotation.x=c),h!==0&&(u.rotation.y=h),d!==0&&(u.rotation.z=d),u.castShadow=!0,u.receiveShadow=!0,e.add(u)}addCyl(e,t,n,i,s,a,r,l,c){const h=new D(new We(n,i,s,a),new j({color:t}));h.position.set(r,l,c),h.castShadow=!0,h.receiveShadow=!0,e.add(h)}registerBuildingCollider(e,t,n,i,s,a){const r=Math.floor(this.seed(s,a,101)*4)%4,l=r===1||r===3;this.collisionWorld.addBox(e,t,l?i:n,l?n:i)}buildTypeA(e,t,n,i){const s=this.C,a=new Ne;this.addBox(a,s.modernGrey,16,10,14,0,5,0),this.addBox(a,s.softWhite,16.4,.6,14.4,0,10.3,0);for(const d of[-5,0,5])this.addCyl(a,s.charcoal,.3,.3,3,6,d,1.5,-7);this.addBox(a,s.charcoal,14,.4,.4,0,3,-7);for(const d of[-4.5,0,4.5])this.addGlassBox(a,2241348,2.5,1.8,.15,d,7,-6.93);this.addBox(a,s.deepClay,14,.5,1.2,0,.25,-7.6),this.addBox(a,s.oliveGreen,13,.4,1,0,.7,-7.6);const r=this.seed(n,i,400),l=new j({color:r>.5?12876352:4876938}),c=new D(new K(14,.1,1.5),l);c.position.set(0,3.8,-7.75),c.rotation.x=.15,a.add(c);const h=new D(new K(14,.3,.08),l);h.position.set(0,3.45,-8.45),a.add(h),this.addBox(a,14210252,.8,.5,.08,-6.5,1,-7.05),this.addRooftopDetails(a,16,14,10,n,i),a.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),a.position.set(e,0,t),this.scene.add(a),this.registerBuildingCollider(e,t,8.5,7.5,n,i)}buildTypeB(e,t,n,i){const s=this.C,a=new Ne;this.addBox(a,s.deepClay,14.5,8.2,12.5,.3,4,.3),this.addBox(a,s.terracotta,14,8,12,0,4,0),this.addBox(a,s.terracotta,14.6,1.2,12.6,0,8.6,0),this.addBox(a,s.softWhite,15,.3,13,0,9.35,0);for(const r of[-3,3]){this.addBox(a,s.softWhite,1.6,2.6,.1,r,5,-5.99),this.addGlassBox(a,2241348,1.2,2.2,.2,r,5,-5.75);for(const l of[4.3,5,5.7])this.addBox(a,s.charcoal,1,.08,.12,r,l,-5.68)}this.addBox(a,s.charcoal,2,3,.2,0,1.5,-6.1),this.addBox(a,s.charcoal,1.5,.4,.2,0,3.2,-6.1),this.addBox(a,s.charcoal,1,.4,.2,0,3.7,-6.1),this.addBox(a,s.deepClay,2,.4,.6,0,.2,-6.6),this.addBox(a,s.oliveGreen,1.8,.1,.5,0,.45,-6.6),this.addBox(a,13938826,.8,.5,.08,-5,1,-6.05),this.addRooftopDetails(a,14,12,8,n,i),a.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),a.position.set(e,0,t),this.scene.add(a),this.registerBuildingCollider(e,t,7.5,6.5,n,i)}buildTypeC(e,t,n,i){const s=this.C,a=new Ne,r=30+Math.floor(this.seed(n,i,31)*20);this.addBox(a,s.modernGrey,8,4,8,0,2,0),this.addBox(a,4478310,7.5,3.5,7.5,0,2,0),this.addBox(a,3359829,7,r,7,0,r/2,0);for(let l=4;l<=r;l+=4)this.addBox(a,s.warmGrey,7.3,.2,7.3,0,l,0);this.addBox(a,s.charcoal,4,3,4,0,r+1.5,0),a.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),a.position.set(e,0,t),this.scene.add(a),this.registerBuildingCollider(e,t,4.5,4.5,n,i)}buildTypeD(e,t,n,i){const s=this.C,a=new Ne;this.addBox(a,s.warmCream,13,7,11,0,3.5,0),this.addBox(a,s.softWhite,13.5,.5,11.5,0,7.25,0),this.addBox(a,s.softWhite,2.8,3.8,1.6,0,4,-6.2),this.addBox(a,s.warmCream,2.5,3.5,1.5,0,4,-6.25);for(const r of[-.8,0,.8])this.addGlassBox(a,3359829,.7,2.5,.2,r,4,-7);this.addBox(a,s.deepClay,2.2,3.2,.3,0,1.6,-5.65),this.addBox(a,s.deepClay,1.8,.4,.3,0,3.35,-5.65),this.addBox(a,s.deepClay,1.2,.4,.3,0,3.8,-5.65);for(const r of[-3.5,3.5])this.addBox(a,s.softWhite,1.8,1.5,.1,r,5.5,-5.5),this.addGlassBox(a,3359829,1.5,1.2,.15,r,5.5,-5.55);this.addBox(a,s.deepClay,11,1,.3,0,.5,-6.65),this.addBox(a,14997960,.8,.5,.08,-5,1,-5.55),this.addRooftopDetails(a,13,11,7,n,i),a.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),a.position.set(e,0,t),this.scene.add(a),this.registerBuildingCollider(e,t,7,6,n,i)}buildTypeE(e,t,n,i){this.C;const s=new Ne,a=12*Math.PI/180;this.addBox(s,6974050,22,4,18,0,2,0),this.addBox(s,1710614,22.1,.3,18.1,0,.15,0);const r=new D(new K(22.5,.3,10),new j({color:1973786}));r.castShadow=!0,r.receiveShadow=!0,r.rotation.x=a,r.position.set(0,4.5,-4.5),s.add(r);const l=new D(new K(22.5,.3,10),new j({color:1973786}));l.castShadow=!0,l.receiveShadow=!0,l.rotation.x=-a,l.position.set(0,4.5,4.5),s.add(l),this.addBox(s,1118480,22.5,.5,.6,0,5.2,0);for(const f of[-2,.5,3])this.addBox(s,1118480,22.2,.08,.1,0,3.5,f);this.addBox(s,1118480,4.5,3.5,.2,0,1.75,-9.1),this.addBox(s,2236960,.15,3.5,.2,-2.4,1.75,-9.1),this.addBox(s,2236960,.15,3.5,.2,2.4,1.75,-9.1),this.addBox(s,3359829,8,.8,.15,-11.075,3.5,0),this.addCyl(s,1118480,.1,.1,4,5,-11,2,-9);const c=this.seed(n,i,401),h=new j({color:c>.5?12876352:4876938}),d=new D(new K(8,.1,1.5),h);d.position.set(0,4.2,-9.85),d.rotation.x=.15,s.add(d);const u=new D(new K(8,.3,.08),h);u.position.set(0,3.85,-10.6),s.add(u);for(const f of[-3.5,3.5]){const g=new D(new We(.06,.06,4,5),new j({color:5592400}));g.position.set(f,2,-10.55),s.add(g)}this.addRooftopDetails(s,22,18,5.2,n,i),s.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),s.position.set(e,0,t),this.scene.add(s),this.registerBuildingCollider(e,t,11.5,9.5,n,i)}createTEHouses(){this.buildHouseMarbellino(20,20),this.collisionWorld.addBox(20,20,10,7.5),this.buildHousePorthole(-60,20),this.collisionWorld.addBox(-60,20,8,6.5),this.buildHouseTerracotta(20,-60),this.collisionWorld.addBox(20,-60,9,7),this.buildHouseLoggia(-60,-60),this.collisionWorld.addBox(-60,-60,10,7.5),this.buildHouseRokka(60,-20),this.collisionWorld.addBox(60,-20,11,8),this.buildHouseTimberStone(100,60),this.collisionWorld.addBox(100,60,11,7),this.buildHouseSculpturalPlaster(-100,-20),this.collisionWorld.addBox(-100,-20,8,6),this.buildHouseHaussmann(60,-100),this.collisionWorld.addBox(60,-100,11,7),this.buildHouseAngularBay(-140,60),this.collisionWorld.addBox(-140,60,9,6.5),this.buildHouseBrutalistCompound(20,100),this.collisionWorld.addBox(20,100,12,5),this.buildHouseTerracottaMonolith(140,20),this.collisionWorld.addBox(140,20,10,5),this.buildHouseCurvedBalcony(-20,-140),this.collisionWorld.addBox(-20,-140,8,6),this.buildHouseCortenPlaster(-140,-60),this.collisionWorld.addBox(-140,-60,10,5.5),this.buildCoffeeShop(-60,-100),this.collisionWorld.addBox(-60,-100,7,5),this.buildToiletBlock(100,60),this.collisionWorld.addBox(100,60,6,5)}buildHouseMarbellino(e,t){const n=new Ne;this.addBox(n,13945786,18,4,14,0,2,0),this.addBox(n,2763306,20,4,15,0,7,0);for(const i of[-8,-5,-2,1,4,7])this.addBox(n,1710618,.15,4,15,i,7,0);this.addBox(n,3355443,20.5,.5,15.5,0,9.25,0),this.addBox(n,3359829,10,.9,.15,0,3.5,-7.1),this.addBox(n,13157564,10.4,1.1,.1,0,3.5,-7.05);for(const i of[-4,0,4]){const s=new D(new K(1.5,2.5,.15),new j({color:4478310,emissive:new be(2241348),emissiveIntensity:.3}));s.position.set(i,7.5,-7.6),n.add(s)}this.addBox(n,1710618,5,3.8,.2,-5.5,1.9,-7.1),this.addBox(n,13157564,2,.3,1,4,.15,-7.5),this.addBox(n,9072736,14,.4,1,0,.2,-8),this.addBox(n,5929546,12,.6,.8,0,.6,-8),n.position.set(e,0,t),this.scene.add(n)}buildHousePorthole(e,t){const n=new Ne;this.addBox(n,12104876,16,5.5,13,0,2.75,0),this.addBox(n,9134144,7,5.5,.3,3.5,2.75,-6.65);for(let i=0;i<5;i++){const s=(i-2)*1.2;this.addBox(n,6965280,7,.2,.4,3.5,2.75+s,-6.55,0,0,Math.PI/7.2)}this.addBox(n,13157564,16.5,.3,13.5,0,5.65,0),this.addBox(n,2763306,17,.5,14,0,5.95,0);{const i=new D(new We(1.4,1.4,.15,16),new j({color:8947848}));i.rotation.x=Math.PI/2,i.position.set(-4,3.5,-6.7),n.add(i)}{const i=new D(new We(1.1,1.1,.1,16),new j({color:2241348,emissive:new be(1122867),emissiveIntensity:.5}));i.rotation.x=Math.PI/2,i.position.set(-4,3.5,-6.65),n.add(i)}this.addBox(n,3359829,3.5,1.2,.15,1,3.5,-6.7),this.addBox(n,3359829,3.5,1.2,.15,5,3.5,-6.7),this.addBox(n,3811866,1.8,2.8,.3,-6,1.4,-6.8),this.addBox(n,8947848,2.2,3,.2,-6,1.4,-6.65),this.addBox(n,3828282,10,.7,.8,0,.35,-7.5),n.position.set(e,0,t),this.scene.add(n)}buildHouseTerracotta(e,t){const n=new Ne;this.addBox(n,10121296,17.6,7.2,14.6,0,3.5,0),this.addBox(n,12884602,17,7,14,0,3.5,0),this.addBox(n,12884602,17.8,1.5,14.8,0,7.75,0),this.addBox(n,15262940,18.2,.3,15.2,0,8.65,0),this.addBox(n,9068608,2.4,3.5,.3,0,1.75,-7.1),this.addBox(n,9068608,2,.5,.3,0,3.75,-7.1),this.addBox(n,9068608,1.4,.5,.3,0,4.25,-7.1),this.addBox(n,9068608,1.4,2.8,.5,-4,4,-7.2),this.addBox(n,2241348,1,2.4,.15,-4,4,-7.05),this.addBox(n,15262940,1.6,3,.15,-4,4,-6.98);for(const i of[3.2,4,4.8])this.addBox(n,3355443,.9,.08,.15,-4,i,-7.1);this.addBox(n,9068608,1.4,2.8,.5,4,4,-7.2),this.addBox(n,2241348,1,2.4,.15,4,4,-7.05),this.addBox(n,15262940,1.6,3,.15,4,4,-6.98);for(const i of[3.2,4,4.8])this.addBox(n,3355443,.9,.08,.15,4,i,-7.1);for(const i of[-2,2])this.addBox(n,3359829,.15,1.5,1,8.58,4,i),this.addBox(n,3359829,.15,1.5,1,-8.58,4,i);this.addBox(n,10516568,2.5,.5,.8,-4,.25,-7.5),this.addBox(n,10516568,2.5,.5,.8,4,.25,-7.5),this.addBox(n,5933642,2,.5,.6,-4,.65,-7.5),this.addBox(n,5933642,2,.5,.6,4,.65,-7.5);for(const i of[-6,-2,2,6])this.addBox(n,15262940,.8,.8,.2,i,8.4,-7.4);n.position.set(e,0,t),this.scene.add(n)}buildHouseLoggia(e,t){const n=new Ne;this.addBox(n,11578532,20,6,15,0,3,0),this.addBox(n,10131088,20.5,.4,15.5,0,6.2,0),this.addBox(n,10131088,20,.4,3,0,3.2,-10);for(const i of[-7,-3,3,7])this.addCyl(n,8947840,.2,.2,3.2,8,i,1.6,-11);this.addBox(n,3359829,14,2,.2,0,4,-7.5),this.addBox(n,13157564,14.4,2.2,.15,0,4,-7.4);for(const i of[-5,0,5])this.addBox(n,8947840,.15,2,.2,i,4,-7.5);{const i=new D(new K(2.4,2.8,.2),new j({color:3359829,emissive:new be(1120290),emissiveIntensity:.2}));i.position.set(5,1.4,-7.5),n.add(i)}this.addBox(n,8947840,2.8,3,.15,5,1.4,-7.4),this.addBox(n,9074784,18,.5,2.5,0,.25,-9),this.addBox(n,4880970,16,.7,2,0,.65,-9),this.addBox(n,8947840,20,.3,.3,0,3.1,-10.2),this.addBox(n,8947840,20,.3,.3,0,3.1,-11.8),n.position.set(e,0,t),this.scene.add(n)}buildHouseRokka(e,t){const n=new Ne;this.addBox(n,12892314,22,4.5,16,0,2.25,0),this.addBox(n,10128506,22.5,.3,9,0,4.75,-3.5,Math.PI*8/180,0,0),this.addBox(n,10128506,22.5,.3,9,0,4.75,3.5,-Math.PI*8/180,0,0),this.addBox(n,6969928,22.5,.6,.8,0,5.1,0),this.addBox(n,10127472,22.5,1,16.5,0,.5,0);{const i=new D(new K(6,3.2,.2),new j({color:3359829,emissive:new be(1120290),emissiveIntensity:.3}));i.position.set(0,1.6,-8.1),n.add(i)}this.addBox(n,8022618,6.4,3.5,.15,0,1.75,-8);for(const i of[-2,0,2])this.addBox(n,8947824,.1,3.2,.2,i,1.6,-8.1);this.addBox(n,8947824,6,.1,.2,0,2.2,-8.1),this.addBox(n,3359829,2.5,1.5,.2,-7,3,-8.1),this.addBox(n,3359829,2.5,1.5,.2,7,3,-8.1),this.addBox(n,11575432,.8,4.5,.8,-3.5,2.25,-8.2),this.addBox(n,11575432,.8,4.5,.8,3.5,2.25,-8.2),this.addCyl(n,6969928,.1,.1,4.5,5,-11,2.25,-8),this.addCyl(n,6969928,.1,.1,4.5,5,11,2.25,-8),this.addBox(n,11575432,20,.8,.3,0,.4,-10),n.position.set(e,0,t),this.scene.add(n)}buildHouseTimberStone(e,t){const n=new Ne;this.addBox(n,8947840,22,4,14,0,2,0),this.addBox(n,6710880,22.2,.4,14.2,0,.2,0),this.addBox(n,12088362,22,4.5,13,0,6.25,0);for(let i=0;i<8;i++)this.addBox(n,10116634,22.1,.12,13.1,0,4.3+i*.57,0);this.addBox(n,4870229,5,8.5,14.2,8.5,4.25,0);for(let i=0;i<12;i++){const s=i%2===0?3817541:5593696;this.addBox(n,s,5.1,.3,14.3,8.5,.5+i*.65,0)}this.addBox(n,2763306,22.5,.5,14.5,0,8.75,0);for(const i of[-6,-2,2]){this.addBox(n,1710618,2.8,3.2,.2,i,6,-6.6);const s=new D(new K(2.4,2.9,.15),new j({color:9087675,emissive:new be(2770005),emissiveIntensity:.2}));s.position.set(i,6,-6.6),n.add(s)}this.addBox(n,1710618,13,.15,.5,-3,8,-6.8),this.addBox(n,10140364,12.5,.8,.1,-3,7.6,-6.75);for(const i of[-7,-4.5])this.addBox(n,1710618,2.2,1.8,.2,i,2,-7.1),this.addBox(n,3359829,1.8,1.5,.15,i,2,-7);this.addBox(n,6962202,1.8,3.2,.2,2.5,1.6,-7.1),this.addBox(n,12092938,.12,.12,.15,3.1,1.6,-7.1),this.addBox(n,1710618,4,.15,2.5,2.5,3.5,-7.3),this.addCyl(n,1710618,.06,.06,3.5,5,1,1.75,-8.2),this.addCyl(n,1710618,.06,.06,3.5,5,4,1.75,-8.2),this.addBox(n,1710618,8,.18,6,-9,4.1,-5),this.addCyl(n,1118481,.12,.12,4.1,6,-6.5,2.05,-7.8),this.addCyl(n,1118481,.12,.12,4.1,6,-11.5,2.05,-7.8),this.addBox(n,10066329,2,.8,3.5,-9.5,.4,-4.5),this.addBox(n,11184810,1.9,.3,3.4,-9.5,.9,-4.5);for(let i=5;i<=13;i+=.7)this.addBox(n,1710618,.12,1.6,.12,i,.8,-8.5);this.addBox(n,6710880,20,.8,.3,0,.4,-9.5),this.addBox(n,4870229,20,.35,.4,0,.18,-9.5);for(let i=0;i<5;i++)this.addBox(n,14540236,1.4,.08,.7,5,.05,-10.2+i*.9);this.addBox(n,4880954,8,.1,3,5,0,-9.8);for(const[i,s]of[[3.5,-8.5],[6.5,-8]]){this.addCyl(n,5912608,.12,.15,2.5,6,i,1.25,s);const a=new D(new Nn(1,2.2,7),new j({color:3828266}));a.position.set(i,2.8,s),n.add(a)}this.addBox(n,1710618,3.5,1.8,.2,7.5,6.5,-6.6),this.addBox(n,3359829,3,1.5,.15,7.5,6.5,-6.55),n.position.set(e,0,t),this.scene.add(n)}buildHouseSculpturalPlaster(e,t){const n=new Ne,i=8686698,s=6976085,a=11842732,r=1118481;this.addBox(n,i,14,5.5,12,-3,2.75,0),this.addBox(n,i,7,3.5,12,9,1.75,0),this.addBox(n,s,.3,5.6,12,2.85,2.75,0);const l=new D(new K(11,.35,12.4),new j({color:i}));l.rotation.z=22*Math.PI/180,l.position.set(.5,8,0),n.add(l);const c=new D(new K(7.5,.35,12.4),new j({color:a}));c.rotation.z=-52*Math.PI/180,c.position.set(-6.2,8.2,0),n.add(c),this.addBox(n,s,.6,.6,12.4,-3.2,10,0),this.addBox(n,1710618,2.3,4,.5,-3,2,-6.25),this.addBox(n,r,2.6,4.3,.2,-3,2.1,-6.05);const h=new D(new K(2,3.6,.12),new j({color:2767428,emissive:new be(661538),emissiveIntensity:.3}));h.position.set(-3,2.1,-6.1),n.add(h),this.addBox(n,1710618,1.6,1.6,.4,8.5,2,-6.2),this.addBox(n,r,1.8,1.8,.18,8.5,2,-6.05),this.addBox(n,r,.4,.4,.4,-6.5,4.2,-6.05),this.addBox(n,r,.4,.4,.4,6.5,3.4,-6.05);for(const f of[-6.5,6.5]){const g=new D(new K(.5,.08,.3),new j({color:16772812,emissive:new be(16764040),emissiveIntensity:.6}));g.position.set(f,f===-6.5?3.95:3.15,-6.07),n.add(g)}const d=8.5,u=-11;for(let f=-4;f<=4;f++){const g=f/4*40*Math.PI/180,x=d*Math.sin(g),m=u+d*(Math.cos(g)-1),p=new D(new K(2,1.2,.35),new j({color:i}));p.rotation.y=g,p.position.set(x,.6,m),n.add(p);const w=new D(new K(2,.12,.45),new j({color:12631720}));w.rotation.y=g,w.position.set(x,1.26,m),n.add(w)}this.addBox(n,s,2.5,.2,1,-3,.1,-7.5),n.position.set(e,0,t),this.scene.add(n)}buildHouseHaussmann(e,t){const n=new Ne,i=15261384,s=15788244,a=13154972,r=1118481;this.addBox(n,i,22,9.5,14,0,4.75,0);for(let h=0;h<5;h++)this.addBox(n,a,22.3,.14,14.3,0,.5+h*.88,0);for(let h=0;h<4;h++)this.addBox(n,a,22.3,.12,14.3,0,5.4+h*.85,0);this.addBox(n,s,22.6,.5,14.6,0,4.75,0),this.addBox(n,a,22.8,.2,14.8,0,5.05,0),this.addBox(n,i,22.5,.3,14.5,0,5.25,0),this.addBox(n,i,23.2,.5,15.2,0,9.75,0),this.addBox(n,s,22.8,.8,14.8,0,10.15,0),this.addBox(n,a,23.4,.25,15.4,0,10.55,0),this.addBox(n,s,4,11.5,4,-10,5.75,-6);for(let h=0;h<6;h++)this.addBox(n,a,4.2,.12,4.2,-10,.5+h*1.75,-6);this.addBox(n,i,4.4,.4,4.4,-10,5,-6),this.addBox(n,i,4.6,.4,4.6,-10,11.3,-6),this.addBox(n,s,4.4,.6,4.4,-10,11.75,-6),this.addBox(n,a,4.8,.25,4.8,-10,12.12,-6),this.addBox(n,i,2.5,1,2.5,-10,12.75,-6);for(const h of[-6.5,-1,4.5]){this.addBox(n,a,2,4.2,.5,h,2.1,-7.25),this.addBox(n,s,1.7,4,.2,h,2.1,-7.05);const d=new D(new K(1.35,3.5,.12),new j({color:9087931,emissive:new be(1714739),emissiveIntensity:.15}));d.position.set(h,2.1,-7),n.add(d),this.addBox(n,s,1.7,.12,.15,h,3.2,-7.05)}for(const h of[-6.5,4.5]){this.addBox(n,a,2,3.8,.5,h,7.5,-7.25),this.addBox(n,s,1.7,3.5,.2,h,7.5,-7.05);const d=new D(new K(1.35,3,.12),new j({color:9087931,emissive:new be(1714739),emissiveIntensity:.15}));d.position.set(h,7.5,-7),n.add(d),this.addBox(n,s,1.7,.12,.15,h,8.5,-7.05),this.addBox(n,i,3.4,.28,1.4,h,5.66,-7.9),this.addBox(n,a,3.5,.45,1.5,h,5.38,-7.95);for(let u=0;u<5;u++){const f=h-1.3+u*.65;this.addBox(n,r,.07,1,.07,f,6.2,-8.4)}this.addBox(n,r,3.2,.09,.09,h,6.72,-8.4),this.addBox(n,r,3.2,.09,.09,h,5.82,-8.4),this.addBox(n,r,.07,1,.07,h-1.3,6.2,-8.4,0,0,.35),this.addBox(n,r,.07,1,.07,h+1.3,6.2,-8.4,0,0,-.35)}this.addBox(n,s,5,6.5,.22,9.5,3.75,-7.05);const l=new D(new K(4.5,6,.12),new j({color:9087931,emissive:new be(1714739),emissiveIntensity:.12}));l.position.set(9.5,3.75,-7),n.add(l);for(let h=0;h<3;h++)this.addBox(n,s,5,.1,.15,9.5,1+h*2,-7);for(const h of[7.5,9.5,11.5])this.addBox(n,s,.1,6,.15,h,3.75,-7);this.addBox(n,a,3.8,5.5,.6,1.5,2.75,-7.4),this.addBox(n,s,2.8,4.8,.2,1.5,2.4,-7.1);const c=new D(new K(2.2,4.2,.12),new j({color:9087931,emissive:new be(660768),emissiveIntensity:.2}));c.position.set(1.5,2.4,-7.05),n.add(c),this.addBox(n,13937232,.1,.1,.1,2.4,2.2,-7.06),this.addBox(n,a,22.5,.3,14.5,0,.15,0),n.position.set(e,0,t),this.scene.add(n)}buildHouseAngularBay(e,t){const n=new Ne,i=15789022,s=12876378,a=3809296,r=1118481;this.addBox(n,i,18,4,13,0,2,0),this.addBox(n,i,18,4,12,0,6,0),this.addBox(n,i,8,4,2.5,5,6,-7.25),this.addBox(n,i,3,10,2.5,6.5,5,-7.5),this.addBox(n,s,10,.5,14,-4.5,8.5,0,0,0,.44),this.addBox(n,s,10,.5,14,4.5,8.5,0,0,0,-.44),this.addBox(n,a,1.5,.5,14.5,0,10.5,0),this.addBox(n,a,19,.3,13.5,0,8.05,0),this.addBox(n,a,19,.2,1.2,0,8.05,-7.3);for(const l of[-6.5,0])this.addBox(n,15658734,2.6,2,.12,l,1.8,-6.56),this.addBox(n,3359829,2.2,1.6,.15,l,1.8,-6.5);for(const l of[-6.5,0])this.addBox(n,15658734,2.6,2,.12,l,5.8,-6.56),this.addBox(n,3359829,2.2,1.6,.15,l,5.8,-6.5);for(let l=0;l<4;l++)this.addBox(n,r,.08,1,.08,-8.5+l*.65,5.5,-6.7);this.addBox(n,r,2.4,.08,.08,-7.02,6.05,-6.7),this.addBox(n,r,2.4,.08,.08,-7.02,5,-6.7),n.position.set(e,0,t),this.scene.add(n)}buildHouseBrutalistCompound(e,t){const n=new Ne,i=10524792,s=8947840;this.addBox(n,i,7,7,11,-8.5,3.5,0),this.addBox(n,i,6,5,10,-1,2.5,.5),this.addBox(n,i,6,6,11,5.5,3,-.5),this.addBox(n,i,5,4,9,11,2,0),this.addBox(n,i,24,1.5,9,0,.75,.5),this.addBox(n,s,4,.25,2.5,-8.5,7.25,-6.2),this.addBox(n,s,4,.25,2.5,5.5,6.25,-6.2),this.addBox(n,2241348,4,5.5,.15,-8.5,3.5,-5.6),this.addBox(n,2241348,3.5,4.5,.15,5.5,3,-5.6),this.addBox(n,i,8,5,.4,2,2.5,-6.5,0,.26,0);const a=14,r=9,l=-Math.PI*.35,c=Math.PI*.35;for(let h=0;h<r;h++){const d=h/(r-1),u=l+(c-l)*d,f=Math.sin(u)*a,g=Math.cos(u)*a-a+4;this.addBox(n,i,3.5,1.5,.4,f,.75,g,0,-u,0)}for(const h of[-3,2.5]){this.addCyl(n,5913114,.15,.2,3,5,h,1.5,-4);const d=new D(new dt(1.2,6,5),new j({color:3828266}));d.position.set(h,4,-4),n.add(d)}n.position.set(e,0,t),this.scene.add(n)}buildHouseTerracottaMonolith(e,t){const n=new Ne,i=12284e3,s=2759194,a=4880954;this.addBox(n,i,20,3,.5,0,1.5,-9.5),this.addBox(n,s,20.2,.1,.55,0,1,-9.5),this.addBox(n,s,20.2,.1,.55,0,2,-9.5),this.addBox(n,i,20,6,10,0,3,-2),this.addBox(n,s,20.2,.1,10.1,0,2,-2),this.addBox(n,s,20.2,.1,10.1,0,4,-2),this.addBox(n,i,20.3,.4,10.3,0,6.2,-2),this.addBox(n,a,18,.3,1.8,0,.15,-7.5);for(let r=-8;r<=8;r+=2.5){const l=new D(new Nn(.2,.8,5),new j({color:5933642}));l.position.set(r,.55,-7.5),n.add(l)}this.addBox(n,1118481,1.2,3.5,.2,0,3.5,-7.05),this.addBox(n,2241348,.8,3,.15,0,3.5,-7),n.position.set(e,0,t),this.scene.add(n)}buildHouseCurvedBalcony(e,t){const n=new Ne,i=15261900,s=15789544,a=11053216,r=1118481;this.addBox(n,i,16,4,12,0,2,0),this.addBox(n,s,16,4,12,0,6,0),this.addBox(n,s,16.5,.3,12.5,0,8.15,0),this.addBox(n,r,16.6,.2,12.6,0,8.3,0);const l=5,c=14,h=-Math.PI*.5,d=Math.PI*.5;for(let u=0;u<c;u++){const f=u/(c-1),g=h+(d-h)*f,x=Math.sin(g)*l,m=-Math.cos(g)*l-3.5;this.addBox(n,a,1.3,2,.5,x,5.5,m,0,-g,0)}for(const u of[-5,0,5])this.addBox(n,4473924,2.5,2,.15,u,1.8,-6.1),this.addBox(n,2241348,2,1.6,.12,u,1.8,-6);this.addCyl(n,r,.1,.1,8,5,-8,4,-6.1),this.addCyl(n,r,.1,.1,8,5,8,4,-6.1),this.addBox(n,r,.3,.3,.3,-2,2.5,-6.15),this.addBox(n,s,17,.25,1.5,0,8,-7.2,.1,0,0),this.addBox(n,r,17.2,.1,1.6,0,8.12,-7.2,.1,0,0),n.position.set(e,0,t),this.scene.add(n)}buildHouseCortenPlaster(e,t){const n=new Ne,i=4868682,s=12081696,a=3684408,r=9060368;this.addBox(n,i,12,8,11,-7,4,0),this.addBox(n,i,12.3,.4,11.3,-7,8.2,0),this.addBox(n,s,8,8.5,11,5,4.25,0),this.addBox(n,s,8.3,.4,11.3,5,8.7,0),this.addBox(n,a,2,9.5,11,-.5,4.75,0);for(let c=0;c<6;c++)this.addBox(n,r,.15,8.5,11.1,1.5+c*1.2,4.25,0);this.addCyl(n,13421704,.15,.15,.5,6,-5,5,-5.6),this.addCyl(n,13421704,.15,.15,.5,6,-9,5,-5.6),this.addBox(n,1118481,2.5,1.8,.3,-6,4.5,-5.7),this.addBox(n,2241348,2,1.4,.15,-6,4.5,-5.6),this.addBox(n,1118481,2.5,1.8,.3,-10,2.5,-5.7),this.addBox(n,2241348,2,1.4,.15,-10,2.5,-5.6),this.addCyl(n,9132587,.2,.3,8,6,-15,4,-3);const l=new D(new Nn(2.5,1.5,8),new j({color:2775578}));l.position.set(-15,8.75,-3),n.add(l),n.position.set(e,0,t),this.scene.add(n)}buildCoffeeShop(e,t){const n=new Ne;this.addBox(n,15788248,14,4,10,0,2,0),this.addBox(n,15261904,14.2,.18,10.2,0,4.09,0),this.addBox(n,1118481,14.6,.38,10.6,0,4.19,0);for(const s of[-3.8,3.8]){this.addBox(n,1118481,4,3.8,.14,s,2.1,-5.08);const a=new D(new K(3.5,3.4,.1),new j({color:13140032,emissive:new be(10115616),emissiveIntensity:.7}));a.position.set(s,2.1,-5.06),n.add(a)}this.addBox(n,1118481,2,3,.14,0,1.5,-5.08),this.addBox(n,8014368,1.6,2.8,.2,0,1.4,-5.1),this.addBox(n,13410400,.1,.1,.12,.5,1.4,-5.1),this.addBox(n,12876352,13.5,.28,4,0,3.22,-7),this.addBox(n,10770984,13.5,.6,.18,0,2.95,-9.05);for(const s of[-4.5,0,4.5])this.addCyl(n,8947832,.07,.07,3,5,s,1.5,-9.1);this.addBox(n,16777215,5,.36,.12,0,3.06,-8.96);for(const[s,a]of[[-5,-11.5],[0,-11.5],[5,-11.5]]){this.addCyl(n,9068608,.75,.75,.1,12,s,1.12,a),this.addCyl(n,6963232,.07,.07,1.12,6,s,.56,a);for(const r of[-1,1])this.addCyl(n,9068608,.32,.32,.09,8,s+r*.85,.82,a),this.addCyl(n,6963232,.05,.05,.82,5,s+r*.85,.41,a)}for(let s=0;s<5;s++)this.addCyl(n,16777215,.22-s*.008,.24-s*.008,.3,8,7.1,.22+s*.28,-3.5);this.addBox(n,3355445,1.1,1.7,.12,-3.5,1.1,-5.1),this.addBox(n,15658734,.72,.08,.05,-3.5,1.6,-5.04),this.addBox(n,15658734,.55,.08,.05,-3.5,1.42,-5.04),this.addBox(n,15658734,.63,.08,.05,-3.5,1.24,-5.04),this.addBox(n,15658734,.48,.08,.05,-3.5,1.06,-5.04);for(const s of[-4,0,4]){const a=new D(new K(.25,.25,.25),new j({color:16764040,emissive:new be(16755268),emissiveIntensity:.8}));a.position.set(s,3.7,-2),n.add(a)}this.addCyl(n,3355443,.3,.3,12,8,0,6,-8);const i=new D(new K(10,3,.4),new j({color:13918762,emissive:new be(9121808),emissiveIntensity:.6}));i.position.set(0,13,-8),i.castShadow=!0,n.add(i),this.addBox(n,16777215,8,.2,.5,0,14.2,-7.85),this.addBox(n,16777215,8,.2,.5,0,12.8,-7.85),this.addCyl(n,16777215,.8,1,1.5,12,0,15.5,-8),this.addCyl(n,7027242,.4,.4,.3,8,0,16.4,-8),n.position.set(e,0,t),this.scene.add(n)}buildWorkshop(e,t){const n=new Ne,i=4868676,s=2236960,a=15657176,r=3355440,l=1118480;this.addBox(n,i,30,8,20,0,4,0),this.addBox(n,1710616,30.2,.35,20.2,0,.18,0);const c=12*Math.PI/180,h=new j({color:s}),d=new D(new K(30.5,.35,11),h);d.castShadow=!0,d.rotation.x=c,d.position.set(0,8.6,-4.5),n.add(d);const u=new D(new K(30.5,.35,11),h);u.castShadow=!0,u.rotation.x=-c,u.position.set(0,8.6,4.5),n.add(u),this.addBox(n,1118480,30.5,.55,.8,0,9.3,0),this.addBox(n,a,24,3.2,.45,0,7.4,-10.23),this.addBox(n,r,22,2.5,.28,0,7.4,-10.25),this.addBox(n,16775920,24.2,.22,.46,0,9.11,-10.23),this.addBox(n,16775920,24.2,.22,.46,0,5.89,-10.23),this.addBox(n,16775920,.22,3.2,.46,-12.11,7.4,-10.23),this.addBox(n,16775920,.22,3.2,.46,12.11,7.4,-10.23),this.addBox(n,12674667,24,.3,.44,0,5.75,-10.22),this.addBox(n,16763972,8,.65,.35,0,5.5,-10.2),this.addBox(n,2763296,7.5,.42,.38,0,5.5,-10.21),this.addBox(n,l,12,5,.25,0,2.5,-10.15),this.addBox(n,2236960,.2,5,.25,-6.2,2.5,-10.15),this.addBox(n,2236960,.2,5,.25,6.2,2.5,-10.15);for(let v=1;v<=4;v++)this.addBox(n,1710616,11.8,.08,.28,0,v,-10.14);this.addBox(n,2236960,12.6,.4,.28,0,5.2,-10.14);const f=3359829;for(let v=-6;v<=6;v+=4)this.addBox(n,f,.16,1.2,2.8,15.09,7.2,v),this.addBox(n,f,.16,1.2,2.8,-15.09,7.2,v);this.addBox(n,2236960,.2,.18,20,15.1,7.9,0),this.addBox(n,2236960,.2,.18,20,15.1,6.6,0),this.addBox(n,2236960,.2,.18,20,-15.1,7.9,0),this.addBox(n,2236960,.2,.18,20,-15.1,6.6,0),this.addCyl(n,2236960,.12,.12,8,5,-15,4,-10),this.addCyl(n,2236960,.12,.12,8,5,15,4,-10),this.addCyl(n,2236960,.12,.12,8,5,-15,4,10),this.addCyl(n,2236960,.12,.12,8,5,15,4,10),this.addCyl(n,12884602,.85,.9,1.5,10,9.5,.75,-11.5),this.addCyl(n,6974050,.85,.9,1.5,10,9.5,2.35,-11.5),this.addCyl(n,8947840,.92,.92,.12,10,9.5,1.56,-11.5),this.addCyl(n,8947840,.92,.92,.12,10,9.5,3.16,-11.5),this.addCyl(n,12884602,.85,.9,1.5,10,11.2,.75,-12.2),this.addCyl(n,8947840,.92,.92,.12,10,11.2,1.56,-12.2),this.addBox(n,8018488,4.5,.18,2.5,10.2,.09,-11.8),this.addBox(n,9074776,6,1,2.2,0,.5,-9.2),this.addBox(n,13154448,6.3,.18,2.4,0,1.09,-9.2),this.addBox(n,15658700,.8,.05,1,.8,1.19,-9.3),this.addBox(n,4473924,.12,.25,.12,.8,1.22,-9),this.addBox(n,5921362,2.8,1.8,2.8,-8.5,.9,-11.5);const g=new D(new We(.75,.75,2.2,10),new j({color:8947840}));g.rotation.z=35*Math.PI/180,g.position.set(-8.5,1.6,-11.5),g.castShadow=!0,n.add(g),this.addCyl(n,3355440,.4,.4,.3,8,-8.5,.2,-10.8),this.addBox(n,4868676,3.5,2.2,2.5,-11.5,1.1,-13),this.addBox(n,8947840,3,.5,2,-11.5,2.35,-13),this.addBox(n,6710880,2.2,1.2,1.4,-11.5,3.1,-13);const x=new j({color:10131600}),m=new D(new ht(20,8),x);m.rotation.x=-Math.PI/2,m.position.set(0,.008,-14),m.receiveShadow=!0,n.add(m),this.addBox(n,a,.3,2.5,6,15.16,4,0),this.addBox(n,r,.32,2,5.5,15.17,4,0);const p=sh(1024),w=new j({map:p,transparent:!0,depthWrite:!1}),S=new D(new ht(14,14),w);S.position.set(0,4.5,-10.4),n.add(S),n.position.set(e,0,t),this.scene.add(n),this.collisionWorld.addBox(e,t,15.5,10.5)}createZebraCrossings(){const e=new j({color:15658734}),t=new j({color:1118481});for(let n=-200;n<=200;n+=40)for(let i=-200;i<=200;i+=40){if(Math.abs(n)>200||Math.abs(i)>200)continue;const s=[-3.2,-1.6,0,1.6,3.2],a=[-2.4,-.8,.8,2.4],r=2;for(const l of s){const c=new D(new K(.8,.03,r),e);c.position.set(n+l,.05,i-5),this.scene.add(c)}for(const l of a){const c=new D(new K(.8,.03,r),t);c.position.set(n+l,.04,i-5),this.scene.add(c)}for(const l of s){const c=new D(new K(.8,.03,r),e);c.position.set(n+l,.05,i+5),this.scene.add(c)}for(const l of a){const c=new D(new K(.8,.03,r),t);c.position.set(n+l,.04,i+5),this.scene.add(c)}for(const l of s){const c=new D(new K(r,.03,.8),e);c.position.set(n-5,.05,i+l),this.scene.add(c)}for(const l of a){const c=new D(new K(r,.03,.8),t);c.position.set(n-5,.04,i+l),this.scene.add(c)}for(const l of s){const c=new D(new K(r,.03,.8),e);c.position.set(n+5,.05,i+l),this.scene.add(c)}for(const l of a){const c=new D(new K(r,.03,.8),t);c.position.set(n+5,.04,i+l),this.scene.add(c)}}}createRoadCorners(){const e=new j({color:13156528}),t=new j({color:11051160}),n=[{dx:-6,dz:-6,theta:3*Math.PI/2},{dx:6,dz:-6,theta:Math.PI},{dx:-6,dz:6,theta:0},{dx:6,dz:6,theta:Math.PI/2}];for(let i=-200;i<=200;i+=40)for(let s=-200;s<=200;s+=40)for(const{dx:a,dz:r,theta:l}of n){const c=i+a,h=s+r,d=new D(new ya(2,24,l,Math.PI/2),e);d.rotation.x=-Math.PI/2,d.position.set(c,.021,h),d.receiveShadow=!0,this.scene.add(d);const u=new D(new hi(1.8,2,24,1,l,Math.PI/2),t);u.rotation.x=-Math.PI/2,u.position.set(c,.08,h),u.receiveShadow=!0,this.scene.add(u)}}onUpdate(e){this.updateCallbacks.push(e)}createSkyDome(){const e=new dt(800,32,16);e.scale(-1,1,1);const t=new Ct({uniforms:{topColor:{value:new be(4491468)},bottomColor:{value:new be(12970229)},offset:{value:100},exponent:{value:.8}},vertexShader:`
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
      `,side:Rt,depthWrite:!1}),n=new D(e,t);this.scene.add(n)}createClouds(){const e=new j({color:16777215,transparent:!0,opacity:.85});for(let t=0;t<10;t++){const n=new Ne,i=3+Math.floor(Math.random()*4);for(let s=0;s<i;s++){const a=8+Math.random()*12,r=new D(new dt(a,7,5),e);r.position.set(s*15-i*7+(Math.random()-.5)*10,(Math.random()-.5)*8,(Math.random()-.5)*15),n.add(r)}n.position.set((Math.random()-.5)*600,80+Math.random()*60,(Math.random()-.5)*600),this.scene.add(n),this.clouds.push({mesh:n,speed:.3+Math.random()*.7})}}createPuddles(){const e=new j({color:8952234,transparent:!0,opacity:.35});for(let t=0;t<20;t++){const n=2+Math.random()*4,i=1+Math.random()*2,s=new D(new ht(n,i),e);s.rotation.x=-Math.PI/2,s.position.set((Math.random()-.5)*300,.015,(Math.random()-.5)*300),this.scene.add(s)}}addRooftopDetails(e,t,n,i,s,a){const r=this.seed(s,a,200);if(r>.3){const l=new Ne;this.addBox(l,8947840,1.5,.6,1,0,0,0),this.addBox(l,6710880,1.5,.1,.8,0,.35,.05),l.position.set(t/2-2,i+.3,n/2-2),e.add(l)}if(r>.7&&i>8){const l=new D(new We(1,1,1.8,10),new j({color:9139029}));l.position.set(-t/2+2,i+.9,0),e.add(l);for(const[c,h]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]]){const d=new D(new We(.06,.06,1.5,4),new j({color:5592400}));d.position.set(-t/2+2+c,i+.1,h),e.add(d)}}if(r>.5&&r<.8){const l=new D(new dt(.4,8,4,0,Math.PI*2,0,Math.PI/2),new j({color:13421772}));l.position.set(t/2-1,i+.2,-n/2+1),l.rotation.x=-Math.PI/4,e.add(l)}if(r<.4){const l=new D(new We(.04,.04,3,4),new j({color:4473924}));l.position.set(0,i+1.5,0),e.add(l),this.addBox(e,4473924,2,.05,.05,0,i+2.5,0)}r>.4&&r<.6&&this.addBox(e,7829360,2,.4,.4,t/4,i+.2,-n/4)}addHydrant(e,t){const n=new Ne,i=new j({color:13378082}),s=new j({color:11145489}),a=new D(new We(.25,.28,.6,8),i);a.position.set(0,.3,0),n.add(a);const r=new D(new We(.18,.18,.12,8),s);r.position.set(0,.66,0),n.add(r);for(const l of[-1,1]){const c=new D(new We(.06,.06,.2,6),i);c.rotation.z=Math.PI/2,c.position.set(l*.3,.3,0),n.add(c)}n.position.set(e,0,t),this.scene.add(n)}addBin(e,t){const n=new Ne,i=new j({color:4473924}),s=new j({color:5592405}),a=new D(new We(.2,.22,.7,8),i);a.position.set(0,.35,0),n.add(a);const r=new D(new We(.22,.22,.08,8),s);r.position.set(0,.74,0),n.add(r),n.position.set(e,0,t),this.scene.add(n)}addBollard(e,t){const n=new Ne,i=new j({color:10066329}),s=new j({color:7829367}),a=new D(new We(.1,.1,.6,8),i);a.position.set(0,.3,0),n.add(a);const r=new D(new We(.14,.14,.08,8),s);r.position.set(0,.04,0),n.add(r),n.position.set(e,0,t),this.scene.add(n)}addBench(e,t,n=0){const i=new Ne,s=new j({color:9134144}),a=new j({color:5592405}),r=new D(new K(1.2,.1,.4),s);r.position.set(0,.45,0),i.add(r);for(const c of[-.5,.5]){const h=new D(new K(.05,.4,.4),a);h.position.set(c,.2,0),i.add(h)}const l=new D(new K(1.2,.3,.08),s);l.position.set(0,.75,-.16),i.add(l),i.rotation.y=n,i.position.set(e,0,t),this.scene.add(i)}addBusStop(e,t,n=0){const i=new Ne,s=new j({color:13421772}),a=new j({color:4482730,transparent:!0,opacity:.7}),r=new D(new We(.05,.05,3.5,6),s);r.position.set(0,1.75,0),i.add(r);const l=new D(new K(2,.05,.8),a);l.position.set(0,3.3,.4),i.add(l);const c=new D(new K(.05,2.5,.8),a);c.position.set(0,2,0),i.add(c),i.rotation.y=n,i.position.set(e,0,t),this.scene.add(i)}addStreetLight(e,t,n=0,i=!1){const s=new Ne,a=new j({color:1118481}),r=new j({color:16771232,transparent:!0,opacity:.06}),l=new D(new We(.08,.1,6,6),a);l.position.set(0,3,0),s.add(l);const c=new D(new K(.08,.08,1.5),a);c.position.set(0,6,-.75),c.rotation.x=-.2,s.add(c);const h=new D(new K(.4,.15,.3),a);h.position.set(0,5.9,-1.4),s.add(h);const d=new D(new Nn(1.5,3,8,1,!0),r);if(d.rotation.x=Math.PI,d.position.set(0,4.4,-1.4),s.add(d),s.rotation.y=n,s.position.set(e,0,t),this.scene.add(s),i){const u=new Em(16771232,.8,15);u.position.set(e+Math.sin(n+Math.PI)*1.4,5.9,t+Math.cos(n+Math.PI)*1.4),this.scene.add(u)}}addTrafficLight(e,t,n=0){const i=new Ne,s=new j({color:1118481}),a=new D(new We(.07,.09,4.5,6),s);a.position.set(0,2.25,0),i.add(a);const r=new D(new K(.5,1.4,.4),s);r.position.set(0,4.7,0),i.add(r);const l=[16720384,16750848,52292];for(let c=0;c<3;c++){const h=new D(new We(.15,.15,.08,8),new j({color:l[c]}));h.rotation.x=Math.PI/2,h.position.set(0,5.25-c*.45,-.21),i.add(h)}i.rotation.y=n,i.position.set(e,0,t),this.scene.add(i)}createStreetLights(){let n=0;const i=20;for(let s=-160;s<=160;s+=40)for(let a=-160;a<=160;a+=20){const c=Math.sqrt(s*s+a*a)<80&&n<i,h=(a%40+40)%40;Math.min(h,40-h)>6&&(this.addStreetLight(a,s-5.2,0,c),this.addStreetLight(a,s+5.2,Math.PI,c),c&&(n+=2));const d=(a%40+40)%40;if(Math.min(d,40-d)>6&&(this.addStreetLight(s+5.2,a,Math.PI/2,c),this.addStreetLight(s-5.2,a,-Math.PI/2,c),c&&(n+=2)),n>=i)return}}createTrafficLights(){for(let i=-160;i<=160;i+=40)for(let s=-160;s<=160;s+=40)this.addTrafficLight(i-5.2,s-5.2,Math.PI/4),this.addTrafficLight(i+5.2,s-5.2,-Math.PI/4),this.addTrafficLight(i-5.2,s+5.2,3*Math.PI/4),this.addTrafficLight(i+5.2,s+5.2,-3*Math.PI/4)}createStreetFurniture(){for(let n=-160;n<=160;n+=40)for(let i=-160;i<=160;i+=20){const s=this.seed(n,i,300),a=this.seed(n,i,301);if(s>.4){const c=s>.7?1:-1,h=(this.seed(i,n,302)-.5)*4,d=(i%40+40)%40;Math.min(d,40-d)>8&&(a<.3?this.addHydrant(i+h,n+c*5.2):a<.5?this.addBin(i+h,n+c*5.2):a<.65?this.addBollard(i+h,n+c*5.2):a<.75&&this.addBench(i+h,n+c*5.2))}const r=this.seed(i,n,303),l=this.seed(i,n,304);if(r>.4){const c=r>.7?1:-1,h=(this.seed(n,i,305)-.5)*4,d=(i%40+40)%40;Math.min(d,40-d)>8&&(l<.3?this.addHydrant(n+c*5.2,i+h):l<.5?this.addBin(n+c*5.2,i+h):l<.65?this.addBollard(n+c*5.2,i+h):l<.75&&this.addBench(n+c*5.2,i+h,Math.PI/2))}}for(let n=-160;n<=160;n+=40)for(let i=-160;i<=160;i+=160){const s=(i%40+40)%40;Math.min(s,40-s)>8&&this.addBusStop(i,n+5.5,0);const a=(i%40+40)%40;Math.min(a,40-a)>8&&this.addBusStop(n+5.5,i,Math.PI/2)}this.createStreetLights(),this.createTrafficLights()}addGlassBox(e,t,n,i,s,a,r,l){const c=Math.random()>.6?new be(2241348):new be(1122867),h=new D(new K(n,i,s),new j({color:t,emissive:c,emissiveIntensity:Math.random()*.4}));h.position.set(a,r,l),h.castShadow=!0,h.receiveShadow=!0,e.add(h)}buildToiletBlock(e,t){const n=new Ne;this.addBox(n,11577496,10,3.5,8,0,1.75,0),this.addBox(n,10064008,11,.3,9,0,3.65,0),this.addBox(n,2236960,1.6,2.4,.2,-2.2,1.2,-4.05),this.addBox(n,2236960,1.6,2.4,.2,2.2,1.2,-4.05),this.addBox(n,15263968,10.1,.4,8.1,0,1.8,0),this.addBox(n,3359829,8,.8,.15,0,3.1,-4.05),this.addBox(n,16777215,6,.2,.1,0,3.2,-4.03),this.addCyl(n,4473920,.15,.15,8,6,0,4,-5.5),this.addBox(n,2201331,4,1.5,.3,0,8.75,-5.5),this.addBox(n,16777215,3,.25,.1,0,9,-5.38),this.addBox(n,16777215,3,.25,.1,0,8.5,-5.38);const i=new j({color:6600182,emissive:new be(1402304),emissiveIntensity:.4}),s=new D(new dt(.7,8,6),i);s.position.set(0,10.5,-5.5),n.add(s),n.position.set(e,0,t),this.scene.add(n)}start(){const e=t=>{const n=Math.min((t-this.lastTime)/1e3,.05);this.lastTime=t;for(const i of this.updateCallbacks)i(n);for(const i of this.clouds)i.mesh.position.x-=i.speed*n,i.mesh.position.x<-350&&(i.mesh.position.x=350);this.composer.render(),requestAnimationFrame(e)};requestAnimationFrame(e)}}const rh=.9,zn={Matt:{name:"Matt",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:6044190,hairStyle:"short"},Jose:{name:"Jose",skinColor:12884592,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:657930,hairStyle:"dreadlocks"},Jarrad:{name:"Jarrad",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236976,hairColor:1710618,hairStyle:"topknot",glassesColor:2236962,hasPhone:!0},Phil:{name:"Phil",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:3821696,hairColor:12632248,hairStyle:"silver",glassesColor:11053216},Tsuyoshi:{name:"Tsuyoshi",skinColor:12093528,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236960,hairColor:657930,hairStyle:"mohawk"},Fabio:{name:"Fabio",skinColor:12488288,shirtColor:1801924,shirtLogoColor:16777215,pantsColor:2631728,hairColor:1708040,hairStyle:"bun",glassesColor:2759176},Joe:{name:"Joe",skinColor:13934704,shirtColor:15777792,shirtLogoColor:1710618,pantsColor:2763320,hairColor:3811866,hairStyle:"short",helmetColor:16119280,hiVisBands:!0},Mikayla:{name:"Mikayla",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:1708064,hairColor:10035780,hairStyle:"bun"},Connie:{name:"Connie",skinColor:15255704,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:2763322,hairColor:16109664,hairStyle:"wildblonde"}};class Ss{constructor(e){E(this,"group");E(this,"mixer");E(this,"walkAction");E(this,"idleAction");E(this,"currentAction");E(this,"logoMesh");this.group=new Ne,this._build(e),this.mixer=new zm(this.group);const t=this._buildWalkClip(),n=this._buildIdleClip();this.walkAction=this.mixer.clipAction(t),this.idleAction=this.mixer.clipAction(n),this.idleAction.play(),this.currentAction=this.idleAction}_build(e){const t=new Zt;t.name="Hip",t.position.set(0,1,0);const n=new Zt;n.name="Spine",n.position.set(0,.55,0);const i=new Zt;i.name="Head",i.position.set(0,.65,0);const s=new Zt;s.name="LShoulder",s.position.set(-.4,.38,0);const a=new Zt;a.name="LForeArm",a.position.set(0,-.36,0);const r=new Zt;r.name="RShoulder",r.position.set(.4,.38,0);const l=new Zt;l.name="RForeArm",l.position.set(0,-.36,0);const c=new Zt;c.name="LHip",c.position.set(-.16,-.05,0);const h=new Zt;h.name="LKnee",h.position.set(0,-.5,0);const d=new Zt;d.name="RHip",d.position.set(.16,-.05,0);const u=new Zt;u.name="RKnee",u.position.set(0,-.5,0),t.add(n),n.add(i),n.add(s),s.add(a),n.add(r),r.add(l),t.add(c),c.add(h),t.add(d),d.add(u),this.group.add(t);const f=S=>new j({color:S}),g=(S,v,I,A,C,R=0,b=0,y=0)=>{const P=new D(new K(I,A,C),f(v));P.position.set(R,b,y),P.castShadow=!0,S.add(P)},x=(S,v,I,A,C=0,R=0,b=0)=>{const y=new D(new We(I,I,A,8),f(v));y.position.set(C,R,b),y.castShadow=!0,S.add(y)},m=(S,v,I,A=0,C=0,R=0)=>{const b=new D(new dt(I,10,8),f(v));b.position.set(A,C,R),b.castShadow=!0,S.add(b)};g(n,e.shirtColor,.5,.56,.28,0,.02,0),e.hiVisBands&&(g(n,16777215,.52,.06,.3,0,.18,0),g(n,16777215,.52,.06,.3,0,-.1,0));const p=this._makeLogo(e),w=new D(new ht(.44,.5),new Ht({map:p,transparent:!0,depthWrite:!1}));if(w.position.set(0,.02,.145),n.add(w),this.logoMesh=w,g(t,e.pantsColor,.44,.2,.26,0,0,0),x(s,e.shirtColor,.08,.34,0,-.17,0),x(r,e.shirtColor,.08,.34,0,-.17,0),e.hiVisBands&&(g(s,16777215,.18,.06,.18,0,-.1,0),g(r,16777215,.18,.06,.18,0,-.1,0)),x(a,e.skinColor,.07,.3,0,-.15,0),x(l,e.skinColor,.07,.3,0,-.15,0),g(a,e.skinColor,.13,.11,.09,0,-.32,0),g(l,e.skinColor,.13,.11,.09,0,-.32,0),e.hasPhone){const S=new j({color:1118484}),v=new D(new K(.11,.19,.013),S);v.position.set(.01,-.38,.05),l.add(v);const I=new j({color:2767445,emissive:1714756}),A=new D(new ht(.085,.15),I);A.position.set(0,0,.008),v.add(A)}x(c,e.pantsColor,.11,.46,0,-.23,0),x(d,e.pantsColor,.11,.46,0,-.23,0),x(h,e.pantsColor,.09,.42,0,-.21,0),x(u,e.pantsColor,.09,.42,0,-.21,0),g(h,1710616,.19,.12,.24,0,-.46,.03),g(u,1710616,.19,.12,.24,0,-.46,.03),x(i,e.skinColor,.09,.16,0,-.08,0),m(i,e.skinColor,.21,0,.1,0),g(i,2236962,.055,.035,.02,-.07,.12,.2),g(i,2236962,.055,.035,.02,.07,.12,.2),this._buildHair(i,e,f),e.glassesColor!==void 0&&g(i,e.glassesColor,.24,.055,.015,0,.12,.21),e.helmetColor!==void 0&&(g(i,e.helmetColor,.5,.07,.5,0,.25,-.01),g(i,e.helmetColor,.38,.18,.38,0,.34,-.01))}_buildHair(e,t,n){const i=n(t.hairColor),s=(a,r,l,c)=>{const h=new D(a,i);h.position.set(r,l,c),e.add(h)};switch(t.hairStyle){case"short":case"silver":s(new dt(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),t.hairStyle==="silver"&&(s(new K(.11,.18,.13),-.19,.06,0),s(new K(.11,.18,.13),.19,.06,0));break;case"dreadlocks":s(new dt(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0);for(const[a,r]of[[-.12,0],[.12,0],[0,-.16],[-.08,-.1],[.08,-.1]])s(new We(.035,.022,.38,6),a,-.07,r);break;case"mohawk":s(new K(.09,.26,.4),0,.28,0);break;case"bun":s(new dt(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),s(new dt(.09,7,6),0,.05,-.19);break;case"topknot":{s(new dt(.215,8,5,0,Math.PI*2,0,Math.PI*.45),0,.08,0);const a=new D(new We(.06,.08,.18,7),i);a.position.set(0,.3,0),e.add(a),s(new dt(.085,7,6),0,.41,0);const r=new j({color:1118481}),l=new D(new Mo(.075,.018,6,10),r);l.rotation.x=Math.PI/2,l.position.set(0,.29,0),e.add(l);break}case"wildblonde":{s(new dt(.225,8,5,0,Math.PI*2,0,Math.PI*.55),0,.1,0);const a=[[-.2,-.18,.04,.3,0],[.2,-.18,.04,-.3,0],[-.14,-.22,-.14,.2,.15],[.14,-.22,-.14,-.2,.15],[0,-.26,-.18,0,0],[-.1,-.16,.16,-.15,0],[.1,-.16,.16,.15,0]];for(const[r,l,c,h,d]of a){const u=new D(new We(.045,.02,.5,5),i);u.position.set(r,l,c),u.rotation.z=h,u.rotation.x=d,e.add(u)}break}}}setLogoTexture(e){const t=this.logoMesh.material;t.map=e,t.needsUpdate=!0}_makeLogo(e){return ih(e.shirtColor)}_buildWalkClip(){const e=Math.PI/180,t=.8,n=[0,.2,.4,.6,.8],i=(s,a=0,r=0)=>Array.from(new qt().setFromEuler(new Gt(s*e,a*e,r*e)).toArray());return new us("walk",t,[new mt("LHip.quaternion",n,[...i(-35),...i(0),...i(35),...i(0),...i(-35)]),new mt("RHip.quaternion",n,[...i(35),...i(0),...i(-35),...i(0),...i(35)]),new mt("LKnee.quaternion",n,[...i(-5),...i(-18),...i(-28),...i(-12),...i(-5)]),new mt("RKnee.quaternion",n,[...i(-28),...i(-12),...i(-5),...i(-18),...i(-28)]),new mt("LShoulder.quaternion",n,[...i(28,0,8),...i(0,0,8),...i(-28,0,8),...i(0,0,8),...i(28,0,8)]),new mt("RShoulder.quaternion",n,[...i(-28,0,-8),...i(0,0,-8),...i(28,0,-8),...i(0,0,-8),...i(-28,0,-8)]),new mt("Hip.quaternion",n,[...i(0,0,4),...i(0,0,0),...i(0,0,-4),...i(0,0,0),...i(0,0,4)]),new ri("Hip.position",n,[0,1.02,0,0,1,0,0,1.02,0,0,1,0,0,1.02,0])])}_buildIdleClip(){const e=Math.PI/180,t=2.4,n=[0,.6,1.2,1.8,2.4],i=(s,a=0,r=0)=>Array.from(new qt().setFromEuler(new Gt(s*e,a*e,r*e)).toArray());return new us("idle",t,[new mt("Spine.quaternion",n,[...i(0,0,1),...i(0,0,0),...i(0,0,-1),...i(0,0,0),...i(0,0,1)]),new ri("Hip.position",n,[0,1,0,0,1.01,0,0,1,0,0,.99,0,0,1,0]),new mt("LShoulder.quaternion",[0,2.4],[...i(0,0,8),...i(0,0,8)]),new mt("RShoulder.quaternion",[0,2.4],[...i(0,0,-8),...i(0,0,-8)])])}buildJumpRopeClip(){const e=Math.PI/180,t=rh,n=[0,.225,.45,.675,.9],i=(s,a=0,r=0)=>Array.from(new qt().setFromEuler(new Gt(s*e,a*e,r*e)).toArray());return new us("jumprope",t,[new ri("Hip.position",n,[0,1,0,0,1.28,0,0,1,0,0,1.28,0,0,1,0]),new mt("LShoulder.quaternion",[0,.5],[...i(0,0,52),...i(0,0,52)]),new mt("RShoulder.quaternion",[0,.5],[...i(0,0,-52),...i(0,0,-52)]),new mt("LForeArm.quaternion",[0,.5],[...i(-20),...i(-20)]),new mt("RForeArm.quaternion",[0,.5],[...i(-20),...i(-20)]),new mt("LKnee.quaternion",n,[...i(-22),...i(-5),...i(-22),...i(-5),...i(-22)]),new mt("RKnee.quaternion",n,[...i(-22),...i(-5),...i(-22),...i(-5),...i(-22)]),new mt("Spine.quaternion",n,[...i(8),...i(2),...i(8),...i(2),...i(8)])])}setWalking(e){const t=e?this.walkAction:this.idleAction;t!==this.currentAction&&(t.reset().play(),this.currentAction.crossFadeTo(t,.2,!1),this.currentAction=t)}update(e){this.mixer.update(e)}}const ng={Jose:{x:-80,z:-40},Jarrad:{x:40,z:-80},Matt:{x:80,z:40},Phil:{x:-40,z:80},Tsuyoshi:{x:120,z:-40},Fabio:{x:-120,z:40},Joe:{x:0,z:-120}},ig={Matt:["Troweled Earth is the best product on the market. Full stop. Don't argue.","Jose has a whole music room and a cigar collection but can't reply to a text message. That's the guy.","I've been up since 4am and done 80 square metres. How's your morning?","Jarrad's got opinions on how everyone else lives their life. Zero opinions on his own. Interesting.","Antique Stucco, Hemp Render, Tadelakt — I'll do all three before lunch.","Jose called himself Wall Jesus in front of a client. An actual client. I was standing right there.","Jarrad once sent me a 400-word message about something I said. I read the first line. Seemed about right.","Right. Tools out. Let's get this done."],Jose:["I didn't apply plaster. I gave the wall a soul. Big difference.","Matt is a great man. Big heart. Absolutely no volume control. You can hear him from the next suburb.","I was in my music room last night finishing a track. Then I invented a new finish. Big night.","My cigar costs more than your primer. It is worth it.","Jarrad sends meeting agendas. For conversations. Between two people. In a van.","Wall Jesus doesn't do touch-ups. Wall Jesus does originals.","Matt apologises for nothing. I respect it. Also it is sometimes a problem.","Other plasterers apply product. I apply vision. Light a cigar and watch."],Jarrad:["Been waiting fifteen minutes. Did you read the TDS? Because I did. Twice.","Hang on — just finishing something.","Jose has a whole spiritual identity built around being mysterious. He's from Footscray. I looked it up.","I'm not micro-managing. I'm preventing the disaster you are about to cause.","Matt once introduced himself to a client by saying 'I don't do small talk'. To their face. At the door.","Have you seen my sister? She's supposed to be here. She's doing jump rope.","I would do it myself but then nothing else would get done. Look, I've already typed up a plan.","Mikayla borrowed my trowel again. I have a spare. I'm not lending that one either.","This is interesting. Have you heard of this Epstein list thing?","Who designed this waypoint system? Actually — don't answer that. I'll figure it out."],Phil:["I've been in this game longer than some of these buildings.","Back in my day we didn't have sealers. We just hoped.","Forty years in plaster. My knees disagree with the timeline.","That's a nice van. My first van had a hole in the floor.","The youngsters think Marbellino is new. I did it before it had a name.","Seven year warranty. I've outlasted three of those already.","If the surface isn't right, no product will fix it. That's wisdom.","I'm too old for emergencies. Call Darren."],Tsuyoshi:["My trowel... she is like samurai sword. Must be respected.","In Japan, we say... actually this is different in Australia. But same feeling.","I study engineering. Also I study this wall. Both are... very complex.","The angle of application is most important. Like blade angle. Very critical.","I think about the wall much. The wall also thinks, I believe.","This surface... it is speaking to me. I will listen before I apply.","My sensei say: good craftsman blame tool. But I never blame my trowel. She is perfect.","One day I will design the building. And also I will plaster it. Both very satisfying."],Fabio:["Ehhhh — in Italy, we do not rush the plaster. She knows when she is ready.","I am Fabio. You have heard of me, yes? Ehhhh — of course you have.","Last night I find a pizza place — thin base, wood fire, proper San Marzano. Ehhhh. I almost cry.","I have plastered villas in Tuscany. This job is also... acceptable. Ehhhh.","The colour must be chosen with the soul, not the brain. Ehhhh — the brain is for pizza toppings.","I put my heart into every wall. Same as I put my heart into a good margherita. Ehhhh.","Madonna mia, this surface has potential. Not as much potential as a good pizza, but still.","Other men apply plaster. Fabio makes love to the wall. Artistically speaking. Ehhhh.","You want to know the secret of perfect render? Patience. Same as perfect pizza dough. Ehhhh — same thing.","I carry my trowel like a man carries his last slice. With respect. With both hands."],Joe:["Don't judge me by the helmet. I contain multitudes.","Good honest work. That's all any of us can do.","I don't talk politics on site. But I do have a bumper sticker.","Hard work, good product, fair pay. That's the whole philosophy.","Free Palestine. That's all I'll say. Back to work.","I've been boycotting certain brands for three years. You'd be surprised.","The helmet stays on. Most of the opinions stay in.","Solid crew. Good product. Just don't ask me about the news."]},sg=15,og=12e3;class rg{constructor(e){E(this,"scene");E(this,"crewMap",new Map);E(this,"lastDialogue",new Map);E(this,"dialogueIndex",new Map);this.scene=e}spawnCrewAtCityPositions(){for(const[e,t]of Object.entries(ng)){const n=zn[e];if(!n)continue;const i=new Ss(n);i.group.scale.set(2,2,2);const s=new Ne;s.add(i.group);const a=new D(new hi(1.2,1.6,32),new Ht({color:16763904,side:zt}));a.rotation.x=-Math.PI/2,a.position.y=.05,s.add(a);const r=document.createElement("canvas");r.width=256,r.height=64;const l=r.getContext("2d");l.fillStyle="rgba(0,0,0,0.75)",l.roundRect?l.roundRect(2,2,252,60,8):l.rect(2,2,252,60),l.fill(),l.fillStyle="#fff",l.font="bold 30px Arial",l.textAlign="center",l.textBaseline="middle",l.fillText(e.toUpperCase(),128,32);const c=new D(new ht(2.2,.55),new Ht({map:new ws(r),transparent:!0,depthWrite:!1}));c.position.set(0,8.5,0),c.renderOrder=1,s.add(c),s.position.set(t.x,0,t.z),this.scene.add(s),this.crewMap.set(e,{character:i,wrapper:s,pos:t}),this.lastDialogue.set(e,0),this.dialogueIndex.set(e,Math.floor(Math.random()*8))}}updateAll(e){for(const{character:t}of this.crewMap.values())t.update(e)}checkProximityDialogue(e,t){const n=Date.now();for(const[i,{wrapper:s,pos:a}]of this.crewMap.entries()){if(!s.visible)continue;const r=e-a.x,l=t-a.z;if(Math.sqrt(r*r+l*l)>sg)continue;const c=this.lastDialogue.get(i)??0;if(n-c<og)continue;const h=ig[i];if(!h)continue;const d=this.dialogueIndex.get(i)??0,u=h[d%h.length];return this.dialogueIndex.set(i,d+1),this.lastDialogue.set(i,n),{name:i,line:u,pos:a}}return null}hideCrew(e){const t=this.crewMap.get(e);t&&(t.wrapper.visible=!1)}showAllCrew(){for(const{wrapper:e}of this.crewMap.values())e.visible=!0}showCrew(e){const t=this.crewMap.get(e);t&&(t.wrapper.visible=!0)}getCrewPosition(e){var t;return((t=this.crewMap.get(e))==null?void 0:t.pos)??{x:0,z:0}}dispose(){for(const{wrapper:e}of this.crewMap.values())this.scene.remove(e);this.crewMap.clear()}}class ag{constructor(e){E(this,"mesh");E(this,"velocity",new L);E(this,"heading",0);E(this,"bodyGroup");E(this,"suspensionY",0);E(this,"suspensionVel",0);this.mesh=new Ne,this.bodyGroup=new Ne,this.mesh.add(this.bodyGroup);const t=new j({color:1118481}),n=new D(new K(2.4,1.6,3.2),t);n.position.set(0,.8,.8),n.castShadow=!0,n.receiveShadow=!0,this.bodyGroup.add(n);const i=new j({color:1579032}),s=new D(new K(2.4,1.4,1.6),i);s.position.set(0,.7,-1.6),s.castShadow=!0,s.receiveShadow=!0,this.bodyGroup.add(s);const a=new j({color:2241348}),r=new D(new K(2,1,.1),a);r.rotation.x=-.18,r.position.set(0,1.15,-2.36),r.castShadow=!0,r.receiveShadow=!0,this.bodyGroup.add(r);const l=new j({color:1381653}),c=new D(new K(2.3,.15,4.6),l);c.position.set(0,1.675,0),c.castShadow=!0,c.receiveShadow=!0,this.bodyGroup.add(c);const h=new j({color:12674667}),d=new D(new K(.05,.35,3),h);d.position.set(-1.23,.85,.5),d.castShadow=!0,d.receiveShadow=!0,this.bodyGroup.add(d);const u=new D(new K(.05,.35,3),h);u.position.set(1.23,.85,.5),u.castShadow=!0,u.receiveShadow=!0,this.bodyGroup.add(u);const f=new j({color:3359829}),g=new D(new K(.05,.4,.5),f);g.position.set(-1.22,1.1,-1.7),g.castShadow=!0,g.receiveShadow=!0,this.bodyGroup.add(g);const x=new D(new K(.05,.4,.5),f);x.position.set(1.22,1.1,-1.7),x.castShadow=!0,x.receiveShadow=!0,this.bodyGroup.add(x);const m=new j({color:3355443});for(const Ae of[-.3,.3]){const ue=new D(new K(.05,1.4,.1),m);ue.position.set(Ae,.8,2.46),ue.castShadow=!0,ue.receiveShadow=!0,this.bodyGroup.add(ue)}const p=new j({color:526344}),w=new D(new K(.04,1.6,.05),p);w.position.set(-1.22,.8,-.8),this.bodyGroup.add(w);const S=new D(new K(.04,1.6,.05),p);S.position.set(1.22,.8,-.8),this.bodyGroup.add(S);const v=new D(new K(2.4,.04,.05),p);v.position.set(0,1.58,-.8),this.bodyGroup.add(v);const I=new j({color:1118481}),A=new j({color:3359829});for(const Ae of[-1,1]){const ue=Ae*1.3,Te=new D(new K(.18,.12,.22),I);Te.position.set(ue,1.1,-1.7),this.bodyGroup.add(Te);const Je=new D(new K(.08,.1,.18),A);Je.position.set(ue+Ae*.05,1.1,-1.7),this.bodyGroup.add(Je)}const C=new j({color:3355443});for(const Ae of[-.15,-.85]){const ue=new D(new K(2.1,.07,.07),C);ue.position.set(0,1.78,Ae),this.bodyGroup.add(ue)}for(const Ae of[-.95,.95]){const ue=new D(new K(.05,.05,.7),C);ue.position.set(Ae,1.78,-.5),this.bodyGroup.add(ue)}const R=sh(512),b=new j({map:R,transparent:!0,depthWrite:!1}),y=new D(new ht(2,3.8),b);y.rotation.x=-Math.PI/2,y.position.set(0,1.8,.9),this.bodyGroup.add(y);const P=new j({color:8947848});for(const Ae of[-.6,.6]){const ue=new D(new K(.06,.06,.14),P);ue.position.set(Ae,.85,2.52),this.bodyGroup.add(ue)}const G=new D(new K(2.4,.04,.06),p);G.position.set(0,1.2,2.47),this.bodyGroup.add(G);const k=new j({color:16733440}),W=new j({color:1118481}),q=new D(new K(.05,.22,.82),k);q.position.set(-1.255,.86,.36),this.bodyGroup.add(q);const X=new D(new K(.06,.05,.16),W);X.position.set(-1.262,.96,.12),this.bodyGroup.add(X);const ee=new D(new K(.06,.15,.05),W);ee.position.set(-1.262,.86,.12),this.bodyGroup.add(ee);const O=new D(new K(.06,.18,.05),W);O.position.set(-1.262,.86,.38),this.bodyGroup.add(O);const te=new D(new K(.06,.04,.13),W);te.position.set(-1.262,.95,.445),this.bodyGroup.add(te);const ie=new D(new K(.06,.04,.1),W);ie.position.set(-1.262,.86,.43),this.bodyGroup.add(ie);const we=new D(new K(.06,.04,.13),W);we.position.set(-1.262,.77,.445),this.bodyGroup.add(we);const Fe=new D(new K(.06,.18,.05),W);Fe.position.set(-1.262,.86,.61),this.bodyGroup.add(Fe);const Xe=new D(new K(.06,.18,.05),W);Xe.position.set(-1.262,.86,.73),this.bodyGroup.add(Xe);const $=new D(new K(.06,.08,.13),W);$.position.set(-1.262,.92,.67),this.bodyGroup.add($);const oe=new D(new K(.05,.22,.82),k);oe.position.set(1.255,.86,.36),this.bodyGroup.add(oe);const ye=new We(.38,.38,.28,10),le=new j({color:1118481}),se=new j({color:8947848}),ge=[[-1.25,.38,-1.2,-1],[1.25,.38,-1.2,1],[-1.25,.38,1.3,-1],[1.25,.38,1.3,1]];for(const[Ae,ue,Te,Je]of ge){const Ce=new D(ye,le);Ce.rotation.z=Math.PI/2,Ce.position.set(Ae,ue,Te),Ce.castShadow=!0,Ce.receiveShadow=!0,this.mesh.add(Ce);const T=new We(.2,.2,.06,10),_=new D(T,se);_.rotation.z=Math.PI/2,_.position.set(Ae+Je*.15,ue,Te),_.castShadow=!0,_.receiveShadow=!0,this.mesh.add(_);const z=new j({color:3355443}),Z=new D(new We(.36,.38,.06,10),z);Z.rotation.z=Math.PI/2,Z.position.set(Ae+Je*.2,ue,Te),this.mesh.add(Z);const ne=new j({color:1118481}),J=new D(new K(.14,.1,.82),ne);J.position.set(Ae+Je*.07,ue+.3,Te),this.bodyGroup.add(J)}const Ie=new j({color:16777181,emissive:16777181,emissiveIntensity:.8});for(const Ae of[-.8,.8]){const ue=new D(new K(.35,.2,.08),Ie);ue.position.set(Ae,.75,-2.41),ue.castShadow=!0,ue.receiveShadow=!0,this.bodyGroup.add(ue)}const $e=new Ht({color:16777164,transparent:!0,opacity:.08,side:Rt}),Oe=new Nn(1.5,8,8,1,!0);for(const Ae of[-.6,.6]){const ue=new D(Oe,$e);ue.rotation.x=Math.PI/2,ue.position.set(Ae,.7,-3),this.bodyGroup.add(ue)}const ot=new j({color:16720384,emissive:16720384,emissiveIntensity:.8});for(const Ae of[-.8,.8]){const ue=new D(new K(.3,.18,.06),ot);ue.position.set(Ae,.75,2.47),ue.castShadow=!0,ue.receiveShadow=!0,this.bodyGroup.add(ue)}const B=new j({color:3355443}),pt=new D(new K(2,.08,.8),B);pt.position.set(0,1.77,-.5),pt.castShadow=!0,pt.receiveShadow=!0,this.bodyGroup.add(pt),this.mesh.position.set(0,0,0),e.add(this.mesh)}triggerBump(e){this.suspensionVel=-e*6}updateSuspension(e){const t=-80*this.suspensionY-10*this.suspensionVel;this.suspensionVel+=t*e,this.suspensionY+=this.suspensionVel*e,this.suspensionY=Math.max(-.35,Math.min(.35,this.suspensionY)),this.bodyGroup.position.y=this.suspensionY,this.bodyGroup.rotation.z=-this.suspensionY*.08}get suspensionMagnitude(){return Math.abs(this.suspensionY)+Math.abs(this.suspensionVel)*.04}}const an={maxSpeed:80,acceleration:55,reverseForce:45,friction:.985,steerRate:2.8,minSpeedToSteer:.5,gripAtLowSpeed:7,gripAtHighSpeed:1.2},Gl=40,lg=4,cg=30,hg=.8;function dg(o){for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;return o}function ug(o){return Math.round(o/Gl)*Gl}function Hl(o,e){let t=0;const n=ug((o+e)*.5);for(const i of[-1,1]){const s=n+i*lg;(o-s)*(e-s)<0&&t++}return t}class fg{constructor(e,t,n,i,s){E(this,"van");E(this,"input");E(this,"_speed",0);E(this,"velocityAngle",0);E(this,"prevPos",new L);E(this,"onBump");E(this,"onBuildingHit");E(this,"collisionWorld");E(this,"COLL_GRID",40);E(this,"COLL_ROAD_HALF",6.5);this.van=e,this.input=t,this.onBump=n,this.collisionWorld=i,this.onBuildingHit=s,this.velocityAngle=this.van.heading,this.prevPos.copy(this.van.mesh.position)}get speed(){return this._speed}update(e){var l;this.prevPos.copy(this.van.mesh.position);const t=Math.abs(this._speed);if(this.input.forward&&(this._speed+=an.acceleration*e),this.input.brake&&(this._speed-=an.reverseForce*e),this._speed*=Math.pow(an.friction,e*60),this._speed=Math.max(-80*.5,Math.min(an.maxSpeed,this._speed)),t>an.minSpeedToSteer){const c=this.input.left?-1:this.input.right?1:Math.abs(this.input.steerAxis)>.1?this.input.steerAxis:0,h=Math.min(1,t/15);this.van.heading+=c*an.steerRate*h*Math.sign(this._speed)*e}const n=Math.min(t/an.maxSpeed,1),i=an.gripAtLowSpeed+(an.gripAtHighSpeed-an.gripAtLowSpeed)*n,s=dg(this.van.heading-this.velocityAngle);this.velocityAngle+=s*i*e;const a=new L(Math.sin(this.velocityAngle),0,-Math.cos(this.velocityAngle));this.van.velocity.copy(a).multiplyScalar(this._speed),this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(e)),this.van.mesh.rotation.y=-this.van.heading;const r=245;if(this.van.mesh.position.x=Math.max(-r,Math.min(r,this.van.mesh.position.x)),this.van.mesh.position.z=Math.max(-r,Math.min(r,this.van.mesh.position.z)),this.collisionWorld){const c=this.collisionWorld.resolveCircle(this.van.mesh.position.x,this.van.mesh.position.z,1.8);(c.x!==this.van.mesh.position.x||c.z!==this.van.mesh.position.z)&&(this._speed*=.65,(l=this.onBuildingHit)==null||l.call(this),this.van.mesh.position.x=c.x,this.van.mesh.position.z=c.z)}this._checkCurbCrossings()}distToNearestRoad(e){const t=(e%this.COLL_GRID+this.COLL_GRID)%this.COLL_GRID;return Math.min(t,this.COLL_GRID-t)}isOnRoad(e,t){const n=this.distToNearestRoad(e),i=this.distToNearestRoad(t);return n<this.COLL_ROAD_HALF||i<this.COLL_ROAD_HALF}resolveCollision(e,t,n,i){return this.isOnRoad(n,i)?{x:n,z:i}:this.isOnRoad(e,i)?{x:e,z:i}:this.isOnRoad(n,t)?{x:n,z:t}:{x:e,z:t}}applyImpulse(e,t){this._speed*=.5,this.van.mesh.position.x+=e*.1,this.van.mesh.position.z+=t*.1}_checkCurbCrossings(){const e=this.van.mesh.position,t=this.prevPos,n=Hl(t.x,e.x),i=Hl(t.z,e.z);if(n+i===0)return;const r=Math.abs(this._speed)/cg,l=Math.max(hg,Math.min(1,r));this.van.triggerBump(l),this._speed*=.85,this.onBump&&this.onBump(l)}}const ro=(o,e)=>{const t=e.x-o.x,n=e.y-o.y;return Math.sqrt(t*t+n*n)},pg=(o,e)=>{const t=e.x-o.x,n=e.y-o.y;return gg(Math.atan2(n,t))},mg=(o,e,t)=>{const n={x:0,y:0};return t=ta(t),n.x=o.x-e*Math.cos(t),n.y=o.y-e*Math.sin(t),n},ta=o=>o*(Math.PI/180),gg=o=>o*(180/Math.PI),xg=o=>isNaN(o.buttons)?o.pressure!==0:o.buttons!==0,rr=new Map,Vl=o=>{rr.has(o)&&clearTimeout(rr.get(o)),rr.set(o,setTimeout(o,100))},go=(o,e,t)=>{const n=e.split(/[ ,]+/g);let i;for(let s=0;s<n.length;s+=1)i=n[s],o.addEventListener?o.addEventListener(i,t,!1):o.attachEvent&&o.attachEvent(i,t)},Wl=(o,e,t)=>{const n=e.split(/[ ,]+/g);let i;for(let s=0;s<n.length;s+=1)i=n[s],o.removeEventListener?o.removeEventListener(i,t):o.detachEvent&&o.detachEvent(i,t)},ah=o=>(o.preventDefault(),o.type.match(/^touch/)?o.changedTouches:o),Xl=()=>{const o=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:o,y:e}},ql=(o,e)=>{e.top||e.right||e.bottom||e.left?(o.style.top=e.top,o.style.right=e.right,o.style.bottom=e.bottom,o.style.left=e.left):(o.style.left=e.x+"px",o.style.top=e.y+"px")},Aa=(o,e,t)=>{const n=lh(o);for(let i in n)if(n.hasOwnProperty(i))if(typeof e=="string")n[i]=e+" "+t;else{let s="";for(let a=0,r=e.length;a<r;a+=1)s+=e[a]+" "+t+", ";n[i]=s.slice(0,-2)}return n},vg=(o,e)=>{const t=lh(o);for(let n in t)t.hasOwnProperty(n)&&(t[n]=e);return t},lh=o=>{const e={};return e[o]="",["webkit","Moz","o"].forEach(function(n){e[n+o.charAt(0).toUpperCase()+o.slice(1)]=""}),e},ar=(o,e)=>{for(let t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o},_g=(o,e)=>{const t={};for(let n in o)o.hasOwnProperty(n)&&e.hasOwnProperty(n)?t[n]=e[n]:o.hasOwnProperty(n)&&(t[n]=o[n]);return t},na=(o,e)=>{if(o.length)for(let t=0,n=o.length;t<n;t+=1)e(o[t]);else e(o)},yg=(o,e,t)=>({x:Math.min(Math.max(o.x,e.x-t),e.x+t),y:Math.min(Math.max(o.y,e.y-t),e.y+t)});var bg="ontouchstart"in window,wg=!!window.PointerEvent,Mg=!!window.MSPointerEvent,rs={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},Ii,_s={};wg?Ii=rs.pointer:Mg?Ii=rs.MSPointer:bg?(Ii=rs.touch,_s=rs.mouse):Ii=rs.mouse;function An(){}An.prototype.on=function(o,e){var t=this,n=o.split(/[ ,]+/g),i;t._handlers_=t._handlers_||{};for(var s=0;s<n.length;s+=1)i=n[s],t._handlers_[i]=t._handlers_[i]||[],t._handlers_[i].push(e);return t};An.prototype.off=function(o,e){var t=this;return t._handlers_=t._handlers_||{},o===void 0?t._handlers_={}:e===void 0?t._handlers_[o]=null:t._handlers_[o]&&t._handlers_[o].indexOf(e)>=0&&t._handlers_[o].splice(t._handlers_[o].indexOf(e),1),t};An.prototype.trigger=function(o,e){var t=this,n=o.split(/[ ,]+/g),i;t._handlers_=t._handlers_||{};for(var s=0;s<n.length;s+=1)i=n[s],t._handlers_[i]&&t._handlers_[i].length&&t._handlers_[i].forEach(function(a){a.call(t,{type:i,target:t},e)})};An.prototype.config=function(o){var e=this;e.options=e.defaults||{},o&&(e.options=_g(e.options,o))};An.prototype.bindEvt=function(o,e){var t=this;return t._domHandlers_=t._domHandlers_||{},t._domHandlers_[e]=function(){typeof t["on"+e]=="function"?t["on"+e].apply(t,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},go(o,Ii[e],t._domHandlers_[e]),_s[e]&&go(o,_s[e],t._domHandlers_[e]),t};An.prototype.unbindEvt=function(o,e){var t=this;return t._domHandlers_=t._domHandlers_||{},Wl(o,Ii[e],t._domHandlers_[e]),_s[e]&&Wl(o,_s[e],t._domHandlers_[e]),delete t._domHandlers_[e],this};function wt(o,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=o,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=wt.id,wt.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}wt.prototype=new An;wt.constructor=wt;wt.id=0;wt.prototype.buildEl=function(o){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};wt.prototype.stylize=function(){if(this.options.dataOnly)return this;var o=this.options.fadeTime+"ms",e=vg("borderRadius","50%"),t=Aa("transition","opacity",o),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},ar(n.el,t),this.options.shape==="circle"&&ar(n.back,e),ar(n.front,e),this.applyStyles(n),this};wt.prototype.applyStyles=function(o){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var t in o[e])this.ui[e].style[t]=o[e][t];return this};wt.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};wt.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};wt.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};wt.prototype.show=function(o){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof o=="function"&&o.call(this)},e.options.fadeTime)),e};wt.prototype.hide=function(o){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var t=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=t,typeof o=="function"&&o.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){const t=e.options.restJoystick,n={};n.x=t===!0||t.x!==!1?0:e.instance.frontPosition.x,n.y=t===!0||t.y!==!1?0:e.instance.frontPosition.y,e.setPosition(o,n)}return e};wt.prototype.setPosition=function(o,e){var t=this;t.frontPosition={x:e.x,y:e.y};var n=t.options.fadeTime+"ms",i={};i.front=Aa("transition",["transform"],n);var s={front:{}};s.front={transform:"translate("+t.frontPosition.x+"px,"+t.frontPosition.y+"px)"},t.applyStyles(i),t.applyStyles(s),t.restTimeout=setTimeout(function(){typeof o=="function"&&o.call(t),t.restCallback()},t.options.fadeTime)};wt.prototype.restCallback=function(){var o=this,e={};e.front=Aa("transition","none",""),o.applyStyles(e),o.trigger("rested",o.instance)};wt.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};wt.prototype.computeDirection=function(o){var e=o.angle.radian,t=Math.PI/4,n=Math.PI/2,i,s,a;if(e>t&&e<t*3&&!o.lockX?i="up":e>-t&&e<=t&&!o.lockY?i="left":e>-t*3&&e<=-t&&!o.lockX?i="down":o.lockY||(i="right"),o.lockY||(e>-n&&e<n?s="left":s="right"),o.lockX||(e>0?a="up":a="down"),o.force>this.options.threshold){var r={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(r[l]=this.direction[l]);var c={};this.direction={x:s,y:a,angle:i},o.direction=this.direction;for(l in r)r[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return o;(!c.x||!c.y)&&this.trigger("plain",o),c.x||this.trigger("plain:"+s,o),c.y||this.trigger("plain:"+a,o),c.angle||this.trigger("dir dir:"+i,o)}else this.resetDirection();return o};function gt(o,e){var t=this;t.nipples=[],t.idles=[],t.actives=[],t.ids=[],t.pressureIntervals={},t.manager=o,t.id=gt.id,gt.id+=1,t.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},t.config(e),(t.options.mode==="static"||t.options.mode==="semi")&&(t.options.multitouch=!1),t.options.multitouch||(t.options.maxNumberOfNipples=1);const n=getComputedStyle(t.options.zone.parentElement);return n&&n.display==="flex"&&(t.parentIsFlex=!0),t.updateBox(),t.prepareNipples(),t.bindings(),t.begin(),t.nipples}gt.prototype=new An;gt.constructor=gt;gt.id=0;gt.prototype.prepareNipples=function(){var o=this,e=o.nipples;e.on=o.on.bind(o),e.off=o.off.bind(o),e.options=o.options,e.destroy=o.destroy.bind(o),e.ids=o.ids,e.id=o.id,e.processOnMove=o.processOnMove.bind(o),e.processOnEnd=o.processOnEnd.bind(o),e.get=function(t){if(t===void 0)return e[0];for(var n=0,i=e.length;n<i;n+=1)if(e[n].identifier===t)return e[n];return!1}};gt.prototype.bindings=function(){var o=this;o.bindEvt(o.options.zone,"start"),o.options.zone.style.touchAction="none",o.options.zone.style.msTouchAction="none"};gt.prototype.begin=function(){var o=this,e=o.options;if(e.mode==="static"){var t=o.createNipple(e.position,o.manager.getIdentifier());t.add(),o.idles.push(t)}};gt.prototype.createNipple=function(o,e){var t=this,n=t.manager.scroll,i={},s=t.options,a={x:t.parentIsFlex?n.x:n.x+t.box.left,y:t.parentIsFlex?n.y:n.y+t.box.top};if(o.x&&o.y)i={x:o.x-a.x,y:o.y-a.y};else if(o.top||o.right||o.bottom||o.left){var r=document.createElement("DIV");r.style.display="hidden",r.style.top=o.top,r.style.right=o.right,r.style.bottom=o.bottom,r.style.left=o.left,r.style.position="absolute",s.zone.appendChild(r);var l=r.getBoundingClientRect();s.zone.removeChild(r),i=o,o={x:l.left+n.x,y:l.top+n.y}}var c=new wt(t,{color:s.color,size:s.size,threshold:s.threshold,fadeTime:s.fadeTime,dataOnly:s.dataOnly,restJoystick:s.restJoystick,restOpacity:s.restOpacity,mode:s.mode,identifier:e,position:o,zone:s.zone,frontPosition:{x:0,y:0},shape:s.shape});return s.dataOnly||(ql(c.ui.el,i),ql(c.ui.front,c.frontPosition)),t.nipples.push(c),t.trigger("added "+c.identifier+":added",c),t.manager.trigger("added "+c.identifier+":added",c),t.bindNipple(c),c};gt.prototype.updateBox=function(){var o=this;o.box=o.options.zone.getBoundingClientRect()};gt.prototype.bindNipple=function(o){var e=this,t,n=function(i,s){t=i.type+" "+s.id+":"+i.type,e.trigger(t,s)};o.on("destroyed",e.onDestroyed.bind(e)),o.on("shown hidden rested dir plain",n),o.on("dir:up dir:right dir:down dir:left",n),o.on("plain:up plain:right plain:down plain:left",n)};gt.prototype.pressureFn=function(o,e,t){var n=this,i=0;clearInterval(n.pressureIntervals[t]),n.pressureIntervals[t]=setInterval((function(){var s=o.force||o.pressure||o.webkitForce||0;s!==i&&(e.trigger("pressure",s),n.trigger("pressure "+e.identifier+":pressure",s),i=s)}).bind(n),100)};gt.prototype.onstart=function(o){var e=this,t=e.options,n=o;o=ah(o),e.updateBox();var i=function(s){e.actives.length<t.maxNumberOfNipples?e.processOnStart(s):n.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(a){if(Object.values(n.touches).findIndex(function(l){return l.identifier===a})<0){var r=[o[0]];r.identifier=a,e.processOnEnd(r)}}),e.actives.length<t.maxNumberOfNipples&&e.processOnStart(s))};return na(o,i),e.manager.bindDocument(),!1};gt.prototype.processOnStart=function(o){var e=this,t=e.options,n,i=e.manager.getIdentifier(o),s=o.force||o.pressure||o.webkitForce||0,a={x:o.pageX,y:o.pageY},r=e.getOrCreate(i,a);r.identifier!==i&&e.manager.removeIdentifier(r.identifier),r.identifier=i;var l=function(h){h.trigger("start",h),e.trigger("start "+h.id+":start",h),h.show(),s>0&&e.pressureFn(o,h,h.identifier),e.processOnMove(o)};if((n=e.idles.indexOf(r))>=0&&e.idles.splice(n,1),e.actives.push(r),e.ids.push(r.identifier),t.mode!=="semi")l(r);else{var c=ro(a,r.position);if(c<=t.catchDistance)l(r);else{r.destroy(),e.processOnStart(o);return}}return r};gt.prototype.getOrCreate=function(o,e){var t=this,n=t.options,i;return/(semi|static)/.test(n.mode)?(i=t.idles[0],i?(t.idles.splice(0,1),i):n.mode==="semi"?t.createNipple(e,o):(console.warn("Coudln't find the needed nipple."),!1)):(i=t.createNipple(e,o),i)};gt.prototype.processOnMove=function(o){var e=this,t=e.options,n=e.manager.getIdentifier(o),i=e.nipples.get(n),s=e.manager.scroll;if(!xg(o)){this.processOnEnd(o);return}if(!i){console.error("Found zombie joystick with ID "+n),e.manager.removeIdentifier(n);return}if(t.dynamicPage){var a=i.el.getBoundingClientRect();i.position={x:s.x+a.left,y:s.y+a.top}}i.identifier=n;var r=i.options.size/2,l={x:o.pageX,y:o.pageY};t.lockX&&(l.y=i.position.y),t.lockY&&(l.x=i.position.x);var c=ro(l,i.position),h=pg(l,i.position),d=ta(h),u=c/r,f={distance:c,position:l},g,x;if(i.options.shape==="circle"?(g=Math.min(c,r),x=mg(i.position,g,h)):(x=yg(l,i.position,r),g=ro(x,i.position)),t.follow){if(c>r){let S=l.x-x.x,v=l.y-x.y;i.position.x+=S,i.position.y+=v,i.el.style.top=i.position.y-(e.box.top+s.y)+"px",i.el.style.left=i.position.x-(e.box.left+s.x)+"px",c=ro(l,i.position)}}else l=x,c=g;var m=l.x-i.position.x,p=l.y-i.position.y;i.frontPosition={x:m,y:p},t.dataOnly||(i.ui.front.style.transform="translate("+m+"px,"+p+"px)");var w={identifier:i.identifier,position:l,force:u,pressure:o.force||o.pressure||o.webkitForce||0,distance:c,angle:{radian:d,degree:h},vector:{x:m/r,y:-p/r},raw:f,instance:i,lockX:t.lockX,lockY:t.lockY};w=i.computeDirection(w),w.angle={radian:ta(180-h),degree:180-h},i.trigger("move",w),e.trigger("move "+i.id+":move",w)};gt.prototype.processOnEnd=function(o){var e=this,t=e.options,n=e.manager.getIdentifier(o),i=e.nipples.get(n),s=e.manager.removeIdentifier(i.identifier);i&&(t.dataOnly||i.hide(function(){t.mode==="dynamic"&&(i.trigger("removed",i),e.trigger("removed "+i.id+":removed",i),e.manager.trigger("removed "+i.id+":removed",i),i.destroy())}),clearInterval(e.pressureIntervals[i.identifier]),i.resetDirection(),i.trigger("end",i),e.trigger("end "+i.id+":end",i),e.ids.indexOf(i.identifier)>=0&&e.ids.splice(e.ids.indexOf(i.identifier),1),e.actives.indexOf(i)>=0&&e.actives.splice(e.actives.indexOf(i),1),/(semi|static)/.test(t.mode)?e.idles.push(i):e.nipples.indexOf(i)>=0&&e.nipples.splice(e.nipples.indexOf(i),1),e.manager.unbindDocument(),/(semi|static)/.test(t.mode)&&(e.manager.ids[s.id]=s.identifier))};gt.prototype.onDestroyed=function(o,e){var t=this;t.nipples.indexOf(e)>=0&&t.nipples.splice(t.nipples.indexOf(e),1),t.actives.indexOf(e)>=0&&t.actives.splice(t.actives.indexOf(e),1),t.idles.indexOf(e)>=0&&t.idles.splice(t.idles.indexOf(e),1),t.ids.indexOf(e.identifier)>=0&&t.ids.splice(t.ids.indexOf(e.identifier),1),t.manager.removeIdentifier(e.identifier),t.manager.unbindDocument()};gt.prototype.destroy=function(){var o=this;o.unbindEvt(o.options.zone,"start"),o.nipples.forEach(function(t){t.destroy()});for(var e in o.pressureIntervals)o.pressureIntervals.hasOwnProperty(e)&&clearInterval(o.pressureIntervals[e]);o.trigger("destroyed",o.nipples),o.manager.unbindDocument(),o.off()};function St(o){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=Xl(),e.config(o),e.prepareCollections();var t=function(){var i;e.collections.forEach(function(s){s.forEach(function(a){i=a.el.getBoundingClientRect(),a.position={x:e.scroll.x+i.left,y:e.scroll.y+i.top}})})};go(window,"resize",function(){Vl(t)});var n=function(){e.scroll=Xl()};return go(window,"scroll",function(){Vl(n)}),e.collections}St.prototype=new An;St.constructor=St;St.prototype.prepareCollections=function(){var o=this;o.collections.create=o.create.bind(o),o.collections.on=o.on.bind(o),o.collections.off=o.off.bind(o),o.collections.destroy=o.destroy.bind(o),o.collections.get=function(e){var t;return o.collections.every(function(n){return t=n.get(e),!t}),t}};St.prototype.create=function(o){return this.createCollection(o)};St.prototype.createCollection=function(o){var e=this,t=new gt(e,o);return e.bindCollection(t),e.collections.push(t),t};St.prototype.bindCollection=function(o){var e=this,t,n=function(i,s){t=i.type+" "+s.id+":"+i.type,e.trigger(t,s)};o.on("destroyed",e.onDestroyed.bind(e)),o.on("shown hidden rested dir plain",n),o.on("dir:up dir:right dir:down dir:left",n),o.on("plain:up plain:right plain:down plain:left",n)};St.prototype.bindDocument=function(){var o=this;o.binded||(o.bindEvt(document,"move").bindEvt(document,"end"),o.binded=!0)};St.prototype.unbindDocument=function(o){var e=this;(!Object.keys(e.ids).length||o===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};St.prototype.getIdentifier=function(o){var e;return o?(e=o.identifier===void 0?o.pointerId:o.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};St.prototype.removeIdentifier=function(o){var e={};for(var t in this.ids)if(this.ids[t]===o){e.id=t,e.identifier=this.ids[t],delete this.ids[t];break}return e};St.prototype.onmove=function(o){var e=this;return e.onAny("move",o),!1};St.prototype.onend=function(o){var e=this;return e.onAny("end",o),!1};St.prototype.oncancel=function(o){var e=this;return e.onAny("end",o),!1};St.prototype.onAny=function(o,e){var t=this,n,i="processOn"+o.charAt(0).toUpperCase()+o.slice(1);e=ah(e);var s=function(r,l,c){c.ids.indexOf(l)>=0&&(c[i](r),r._found_=!0)},a=function(r){n=t.getIdentifier(r),na(t.collections,s.bind(null,r,n)),r._found_||t.removeIdentifier(n)};return na(e,a),!1};St.prototype.destroy=function(){var o=this;o.unbindDocument(!0),o.ids={},o.index=0,o.collections.forEach(function(e){e.destroy()}),o.off()};St.prototype.onDestroyed=function(o,e){var t=this;if(t.collections.indexOf(e)<0)return!1;t.collections.splice(t.collections.indexOf(e),1)};const Yl=new St,Sg={create:function(o){return Yl.create(o)},factory:Yl};class Eg{constructor(){E(this,"keys",{});E(this,"steerAxis",0);E(this,"accelerating",!1);E(this,"braking",!1);E(this,"horn",!1);E(this,"joystickManager",null);E(this,"hornTimeout",null);window.addEventListener("keydown",e=>{this.keys[e.code]=!0,e.code==="KeyH"&&this.triggerHorn()}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),this.setupMobileControls()}triggerHorn(){this.horn=!0,this.hornTimeout!==null&&clearTimeout(this.hornTimeout),this.hornTimeout=setTimeout(()=>{this.horn=!1,this.hornTimeout=null},300)}setupMobileControls(){const e=document.createElement("div");e.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 150px;
      height: 150px;
      z-index: 100;
      touch-action: none;
    `,document.body.appendChild(e),this.joystickManager=Sg.create({zone:e,mode:"static",position:{left:"75px",bottom:"75px"},color:"rgba(255, 255, 255, 0.6)",size:120,restOpacity:.5}),this.joystickManager.on("move",(s,a)=>{a.vector&&(this.steerAxis=a.vector.x)}),this.joystickManager.on("end",()=>{this.steerAxis=0});const t=document.createElement("div");t.style.cssText=`
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
    `,t.textContent="REV",document.body.appendChild(t),t.addEventListener("touchstart",s=>{s.preventDefault(),this.braking=!0,t.style.background="rgba(220, 50, 50, 0.9)"},{passive:!1}),t.addEventListener("touchend",s=>{s.preventDefault(),this.braking=!1,t.style.background="rgba(220, 50, 50, 0.6)"},{passive:!1});const n=document.createElement("div");n.style.cssText=`
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
    `,n.textContent="GAS",document.body.appendChild(n),n.addEventListener("touchstart",s=>{s.preventDefault(),this.accelerating=!0,n.style.background="rgba(50, 200, 50, 0.9)"},{passive:!1}),n.addEventListener("touchend",s=>{s.preventDefault(),this.accelerating=!1,n.style.background="rgba(50, 200, 50, 0.6)"},{passive:!1});const i=document.createElement("div");i.style.cssText=`
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
    `,i.textContent="📯",document.body.appendChild(i),i.addEventListener("touchstart",s=>{s.preventDefault(),this.triggerHorn(),i.style.background="rgba(255, 200, 50, 0.95)",i.style.transform="scale(1.1)"},{passive:!1}),i.addEventListener("touchend",s=>{s.preventDefault(),i.style.background="rgba(255, 200, 50, 0.6)",i.style.transform="scale(1.0)"},{passive:!1})}get forward(){return this.keys.ArrowUp||this.keys.KeyW||this.accelerating}get backward(){return this.keys.ArrowDown||this.keys.KeyS}get left(){return this.keys.ArrowLeft||this.keys.KeyA||this.steerAxis<-.2}get right(){return this.keys.ArrowRight||this.keys.KeyD||this.steerAxis>.2}get brake(){return this.keys.Space||this.braking}get honk(){return this.horn}}class Tg{constructor(){E(this,"level",0);E(this,"spillRateMultiplier",1);E(this,"onSpill");E(this,"container");E(this,"fill");E(this,"bucketEl");E(this,"isShaking",!1);E(this,"spillFlashing",!1);if(!document.getElementById("spill-meter-styles")){const i=document.createElement("style");i.id="spill-meter-styles",i.textContent=`
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
      `,document.head.appendChild(i)}this.container=document.createElement("div"),Object.assign(this.container.style,{position:"fixed",top:"16px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",zIndex:"999",userSelect:"none",pointerEvents:"none"});const e=document.createElement("div");Object.assign(e.style,{display:"flex",alignItems:"center",gap:"8px"}),this.bucketEl=document.createElement("span"),this.bucketEl.textContent="🪣",Object.assign(this.bucketEl.style,{fontSize:"28px",lineHeight:"1"}),e.appendChild(this.bucketEl);const t=document.createElement("div");Object.assign(t.style,{width:"160px",height:"18px",background:"#333",borderRadius:"9px",overflow:"hidden",border:"2px solid rgba(255,255,255,0.25)",boxShadow:"0 2px 6px rgba(0,0,0,0.6)"}),this.fill=document.createElement("div"),Object.assign(this.fill.style,{height:"100%",width:"0%",borderRadius:"9px",transition:"width 0.05s linear",background:"linear-gradient(to right, #4caf50, #ffeb3b)"}),t.appendChild(this.fill),e.appendChild(t),this.container.appendChild(e);const n=document.createElement("div");n.textContent="DON'T SPILL THE PLASTER!",Object.assign(n.style,{color:"#fff",fontSize:"11px",fontWeight:"700",fontFamily:"system-ui, sans-serif",textShadow:"0 1px 4px rgba(0,0,0,0.9)",letterSpacing:"0.5px"}),this.container.appendChild(n),document.body.appendChild(this.container),this.container.style.display="none"}setVisible(e){this.container.style.display=e?"flex":"none"}addSpill(e){this.level=Math.min(1,this.level+e)}update(e){var n;const t=this.level*100;if(this.fill.style.width=`${t}%`,this.level<.5){const i=this.level*2,s=Math.round(76+i*179),a=Math.round(175+i*60);this.fill.style.background=`linear-gradient(to right, rgb(${s},${a},50), rgb(${s},${a},50))`}else{const i=(this.level-.5)*2,s=255,a=Math.round(235-i*235);this.fill.style.background=`linear-gradient(to right, rgb(${s},${a},50), rgb(${s},${Math.round(a*.4)},20))`}this.level>.8&&!this.isShaking?(this.bucketEl.classList.add("bucket-shake"),this.isShaking=!0):this.level<=.8&&this.isShaking&&(this.bucketEl.classList.remove("bucket-shake"),this.isShaking=!1),this.level>=1&&!this.spillFlashing&&(this.spillFlashing=!0,this.level=.5,(n=this.onSpill)==null||n.call(this,5e4),this.container.classList.add("spill-flash"),setTimeout(()=>{this.container.classList.remove("spill-flash"),this.spillFlashing=!1},700))}triggerBump(e){this.addSpill(.025)}triggerCrash(){this.addSpill(.3)}}const Ag=[{id:"job_01",type:"commercial",zone:"cbd",position:{x:40,z:-40},title:"Marbellino Boardroom",client:"Brad from Accounts",description:"Brad wants a Marbellino feature wall in the boardroom. Stone-like marbled finish. Brad calls it 'very European'. Brad has never been to Europe.",pay:42e4,timeLimit:0,travelTimeLimit:120,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_02",type:"commercial",zone:"footscray",position:{x:-120,z:60},title:"Hemp Render — Big Kev's Shed",client:"Big Kev",description:"Big Kev wants Hemp Earthen Render on his warehouse. Rammed earth look, hemp fibres, 3–5mm application. He says it's a small shed. It is not a small shed.",pay:68e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_03",type:"residential",zone:"brunswick",position:{x:-80,z:80},title:"Antique Stucco Terrace",client:"Matilda",description:"Matilda wants Antique Stucco throughout — that Southern European aged look. Three rooms. By Thursday. It's Wednesday. She also needs primer coats. Yes, all of them.",pay:55e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_04",type:"heritage",zone:"richmond",position:{x:120,z:40},title:"Antique Stucco Heritage Restore",client:"The Council",description:"Council heritage job. Full 3-coat Antique Stucco system. Primer, stucco, sealer. Nobody told you about the asbestos audit. Nobody.",pay:8e5,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_05",type:"residential",zone:"stkilda",position:{x:40,z:-120},title:"Tadelakt Beachfront Bathroom",client:"Chloe",description:"Chloe wants Tadelakt in the bathroom — polished, waterproof, glossy. Traditional Moroccan technique. She also wants it 'textured but smooth'. You nod and apply the polishing stone.",pay:61e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_06",type:"emergency",zone:"cbd",position:{x:-40,z:20},title:"🚨 Emergency Antique Stucco Patch",client:"Darren (Stressed)",description:"Open home in 4 hours. Actual hole in the Antique Stucco feature wall. Primer, stucco, sealer — in 4 hours. Darren is sweating. You are also sweating.",pay:95e4,timeLimit:240,travelTimeLimit:240,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_07",type:"residential",zone:"brunswick",position:{x:-120,z:-80},title:"Hemp Render Repair — DIY Gone Wrong",client:"Zephyr",description:"Zephyr tried to do his own Hemp Earthen Render. No base coat. No primer. Wrong mix ratio. You strip it back and do it properly. Zephyr watches and takes notes.",pay:39e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_08",type:"commercial",zone:"footscray",position:{x:-160,z:20},title:"Rokka — Kebab Shop Reno",client:"Mustafa",description:"Mustafa wants Rokka on the walls — smooth, rustic, modern. 2–5mm application, sealed and ready before the health inspector comes back. No questions about the old walls.",pay:47e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_09",type:"heritage",zone:"stkilda",position:{x:80,z:-160},title:"Antique Stucco — Edwardian Cottage",client:"Patricia",description:"Patricia wants Antique Stucco — aged Southern European finish, NCC 2022 compliant. She's printed the full TDS. She's highlighted it. She will quiz you on cure times.",pay:72e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_10",type:"residential",zone:"richmond",position:{x:160,z:-40},title:"Tadelino New Build",client:"The Hendersons",description:"Full Tadelino system throughout — polished, modern, glossy finish. Two coats, polishing stone, sealer. The Hendersons want it done before Christmas. You ask which Christmas.",pay:58e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_11",type:"emergency",zone:"brunswick",position:{x:-40,z:120},title:"🚨 Tadelakt Water Damage Repair",client:"Gary",description:"Upstairs left the bath running. Gary's Tadelakt bathroom is destroyed. Strip, reprime, two coats Tadelakt, polish, seal. Gary is not speaking to upstairs. You don't ask.",pay:88e4,timeLimit:300,travelTimeLimit:300,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_12",type:"commercial",zone:"stkilda",position:{x:-20,z:-160},title:"Rokka Feature Wall — Wine Bar",client:"Alejandro",description:"Alejandro wants Rokka on the feature wall. Rustic, modern, subtle undulations. He calls it 'industrial earthen chic'. You write down 'Rokka, sealed, done'.",pay:64e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1}],jl=["Jose","Jarrad","Matt","Phil","Tsuyoshi","Fabio"],ii=class ii{constructor(){E(this,"jobs",Ag.map(e=>({...e})));E(this,"activeJob",null);E(this,"activePhase",1);E(this,"completedJobIds",new Set);E(this,"money",5e5);E(this,"travelTimer",0);E(this,"travelFailed",!1);E(this,"crewToPickup",[]);E(this,"crewPickedUp",[])}getAvailableJobs(){return this.jobs.filter(e=>!this.completedJobIds.has(e.id)&&e!==this.activeJob)}acceptJob(e){this.activeJob=e,this.activePhase=1,this.crewToPickup=this._pickCrew(e.crewNeeded),this.crewPickedUp=[],this.startTravelTimer()}_pickCrew(e){return[...jl].sort(()=>Math.random()-.5).slice(0,Math.min(e,jl.length))}startTravelTimer(){this.activeJob&&(this.travelTimer=this.activeJob.travelTimeLimit??120,this.travelFailed=!1)}checkPhase1Arrival(e,t){const n=e-ii.WORKSHOP_POS.x,i=t-ii.WORKSHOP_POS.z;return Math.sqrt(n*n+i*i)<18}advanceToPhase2(){this.activePhase=2,this.startTravelTimer()}advanceToPhase3(){this.activePhase=3,this.startTravelTimer()}pickupCrew(e){return!this.crewPickedUp.includes(e)&&this.crewToPickup.includes(e)&&this.crewPickedUp.push(e),this.allCrewCollected()}allCrewCollected(){return this.crewToPickup.every(e=>this.crewPickedUp.includes(e))}nextCrewNeeded(){for(const e of this.crewToPickup)if(!this.crewPickedUp.includes(e))return e;return null}tickTravel(e){if(!this.activeJob||this.travelFailed)return null;if(this.travelTimer-=e,this.travelTimer<=0){this.travelFailed=!0;const t=15e4;return this.money=Math.max(0,this.money-t),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],{failed:!0,penalty:t}}return null}checkArrival(e,t){if(!this.activeJob||this.activePhase!==3)return null;const n=e-this.activeJob.position.x,i=t-this.activeJob.position.z;return Math.sqrt(n*n+i*i)<this.activeJob.triggerRadius?this.activeJob:null}completeJob(e,t=1){const n=Math.round(e.pay*t);return this.money=Math.max(0,this.money+n),this.completedJobIds.add(e.id),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],n}distanceTo(e,t){if(!this.activeJob)return 0;const n=e-this.activeJob.position.x,i=t-this.activeJob.position.z;return Math.sqrt(n*n+i*i)}distanceToWorkshop(e,t){const n=e-ii.WORKSHOP_POS.x,i=t-ii.WORKSHOP_POS.z;return Math.sqrt(n*n+i*i)}distanceToPoint(e,t,n,i){const s=e-n,a=t-i;return Math.sqrt(s*s+a*a)}};E(ii,"WORKSHOP_POS",{x:10,z:15});let xo=ii;const Qt=class Qt{constructor(e){E(this,"marker");E(this,"diamond");E(this,"ring");E(this,"routeLine",null);E(this,"routeGeom",null);E(this,"scene");E(this,"time",0);E(this,"targetPos",null);this.scene=e,this.marker=new Ne;const t=new wa(1,0),n=new j({color:Qt.MARKER_COLOR,emissive:new be(Qt.MARKER_COLOR),emissiveIntensity:.35});this.diamond=new D(t,n),this.diamond.scale.set(1.2,2,1.2),this.diamond.castShadow=!1,this.marker.add(this.diamond);const i=new hi(.5,2,32),s=new Ht({color:Qt.MARKER_COLOR,transparent:!0,opacity:.6,side:zt,depthWrite:!1});this.ring=new D(i,s),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=-8+.3,this.marker.add(this.ring),this.marker.visible=!1,this.scene.add(this.marker)}setTarget(e){if(this.targetPos=e,this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null),e===null){this.marker.visible=!1;return}this.marker.position.set(e.x,Qt.BASE_HEIGHT,e.z),this.marker.visible=!0,this.routeGeom=new Pt;const t=new Float32Array(6);t[0]=e.x,t[1]=.05,t[2]=e.z,t[3]=e.x,t[4]=.05,t[5]=e.z,this.routeGeom.setAttribute("position",new on(t,3));const n=new Kc({color:16777215,transparent:!0,opacity:.75,depthTest:!1});this.routeLine=new pm(this.routeGeom,n),this.routeLine.renderOrder=999,this.scene.add(this.routeLine)}setJob(e){this.setTarget((e==null?void 0:e.position)??null)}get currentTarget(){return this.targetPos?{...this.targetPos}:null}update(e,t,n){if(this.time+=e,!this.targetPos||!this.marker.visible)return;const i=Math.sin(this.time*2.2)*Qt.BOB_AMP;this.marker.position.y=Qt.BASE_HEIGHT+i,this.diamond.rotation.y=this.time*1.2;const s=this.time*.8%1,a=.5+s*2;this.ring.scale.set(a,a,1);const r=this.ring.material;if(r.opacity=(1-s)*.6,this.routeGeom){const l=this.routeGeom.attributes.position;l.setXYZ(0,t,.05,n),l.setXYZ(1,this.targetPos.x,.05,this.targetPos.z),l.needsUpdate=!0,this.routeGeom.computeBoundingSphere()}}dispose(){this.marker.visible=!1,this.scene.remove(this.marker),this.diamond.geometry.dispose(),this.diamond.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null)}};E(Qt,"MARKER_COLOR",12674667),E(Qt,"BASE_HEIGHT",8),E(Qt,"BOB_AMP",.5);let ia=Qt;function Cg(o){return o>=1e6?`${(o/1e6).toFixed(2)}M sats`:o>=1e3?`${(o/1e3).toFixed(0)}K sats`:`${o} sats`}const Rg={cbd:"🏙️ CBD",footscray:"🏭 Footscray",brunswick:"🎸 Brunswick",richmond:"🏡 Richmond",stkilda:"🌊 St Kilda"},Pg={residential:"🏠 Residential",commercial:"🏢 Commercial",heritage:"🏛️ Heritage",emergency:"🚨 Emergency"};class Ig{constructor(e){E(this,"onAccept");E(this,"overlay");E(this,"visible",!1);E(this,"jobs",[]);if(this.onAccept=e,this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,e.appendChild(t);const n=document.createElement("button");if(n.className="jb-close-btn",n.textContent="✕",n.setAttribute("aria-label","Close"),n.addEventListener("click",()=>this.hide()),e.appendChild(n),this.overlay.appendChild(e),this.jobs.length===0){const i=document.createElement("div");i.className="jb-no-jobs",i.textContent="You've smashed all the jobs, legend. 🏆",this.overlay.appendChild(i);return}for(const i of this.jobs){const s=document.createElement("div");s.className="jb-card";const a=document.createElement("div");a.className="jb-card-header";const r=document.createElement("div");r.className="jb-title",r.textContent=i.title,a.appendChild(r);const l=document.createElement("div");l.className="jb-pay",l.textContent=`₿ ${Cg(i.pay)}`,a.appendChild(l),s.appendChild(a);const c=document.createElement("div");c.className="jb-meta";const h=document.createElement("span");h.className="jb-badge",h.textContent=Rg[i.zone]??i.zone,c.appendChild(h);const d=document.createElement("span");if(d.className=`jb-badge${i.type==="emergency"?" jb-emergency-badge":""}`,d.textContent=Pg[i.type]??i.type,c.appendChild(d),i.timeLimit>0){const x=document.createElement("span");x.className="jb-badge jb-emergency-badge",x.textContent=`⏱️ ${Math.round(i.timeLimit/60)} min limit`,c.appendChild(x)}s.appendChild(c);const u=document.createElement("div");u.className="jb-client",u.textContent=`Client: ${i.client}`,s.appendChild(u);const f=document.createElement("div");f.className="jb-desc",f.textContent=i.description,s.appendChild(f);const g=document.createElement("button");g.className="jb-accept-btn",g.textContent="ACCEPT →",g.addEventListener("click",()=>{this.onAccept(i)}),s.appendChild(g),this.overlay.appendChild(s)}}}const $l=1e8;function $n(o){return o>=1e6?`${(o/1e6).toFixed(2)}M sats`:o>=1e3?`${(o/1e3).toFixed(0)}K sats`:`${o} sats`}function Dg(o){const e=Math.max(0,Math.ceil(o)),t=Math.floor(e/60),n=e%60;return`${t}:${n.toString().padStart(2,"0")}`}function Lg(o){return o.charAt(0).toUpperCase()}class Fg{constructor(){E(this,"btcAchieved",!1);E(this,"speedText");E(this,"moneyEl");E(this,"btcBarFill");E(this,"btcLabelEl");E(this,"jobStripEl");E(this,"travelTimerEl");E(this,"flashOverlay");E(this,"timerFailOverlay");E(this,"crewPanelEl");E(this,"activeJob",null);E(this,"activePhase",1);E(this,"flashTimeout",null);E(this,"spillPenaltyTimeout",null);E(this,"currentMoney",5e5);E(this,"timerPulseInterval",null);if(!document.getElementById("hud-styles")){const r=document.createElement("style");r.id="hud-styles",r.textContent=`
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
      `,document.head.appendChild(r)}const e=document.createElement("div");e.style.cssText=`
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
    `,this.speedText.textContent="0 km/h",e.appendChild(this.speedText),document.body.appendChild(e);const t=document.createElement("div");t.style.cssText=`
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
    `,this.moneyEl.textContent="500K sats",t.appendChild(this.moneyEl);const n=document.createElement("div");n.style.cssText=`
      width: 160px; display: flex; flex-direction: column; align-items: flex-end; gap: 3px;
    `,this.btcLabelEl=document.createElement("div"),this.btcLabelEl.style.cssText=`
      color: rgba(247,147,26,0.85); font-size: 11px; font-weight: 700;
      letter-spacing: 0.5px; font-family: monospace;
    `,this.btcLabelEl.textContent="₿ GOAL: 0%";const i=document.createElement("div");i.style.cssText=`
      width: 100%; height: 5px; background: rgba(247,147,26,0.18);
      border-radius: 3px; overflow: hidden;
    `,this.btcBarFill=document.createElement("div"),this.btcBarFill.style.cssText=`
      height: 100%; background: #F7931A; width: 0%;
      border-radius: 3px; transition: width 0.6s ease;
    `,i.appendChild(this.btcBarFill),n.appendChild(this.btcLabelEl),n.appendChild(i),t.appendChild(n),this.jobStripEl=document.createElement("div"),this.jobStripEl.style.cssText=`
      display: none;
      flex-direction: column;
      align-items: flex-end;
      gap: 2px;
      background: rgba(0,0,0,0.55);
      border-radius: 10px;
      padding: 8px 12px;
      border-left: 3px solid #C1666B;
    `,t.appendChild(this.jobStripEl),this.travelTimerEl=document.createElement("div"),this.travelTimerEl.style.cssText=`
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
    `,t.appendChild(this.travelTimerEl),document.body.appendChild(t),this.crewPanelEl=document.createElement("div"),this.crewPanelEl.style.cssText=`
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
    `;const a=document.createElement("div");a.id="hud-timer-fail-msg",a.style.cssText=`
      color: #ff4444;
      font-size: clamp(28px, 6vw, 52px);
      font-weight: 900;
      font-family: system-ui, sans-serif;
      text-shadow: 0 2px 12px rgba(0,0,0,0.9);
      text-align: center;
      padding: 0 24px;
      line-height: 1.4;
    `,a.textContent="⏰ TOO SLOW! -150K sats",this.timerFailOverlay.appendChild(a),document.body.appendChild(this.timerFailOverlay)}update(e,t){const n=Math.abs(Math.round(e*3.6));this.speedText.textContent=`${n} km/h`}setActiveJob(e,t=2){if(this.activeJob=e,this.activePhase=t,!e){this.jobStripEl.style.display="none",this.crewPanelEl.style.display="none";return}this.jobStripEl.style.display="flex",this._refreshJobStrip(e,null)}updateJobDistance(e){this.activeJob&&this._refreshJobStrip(this.activeJob,e)}updateCrewStatus(e,t,n){if(!n||e.length===0){this.crewPanelEl.style.display="none";return}this.crewPanelEl.style.display="flex",this.crewPanelEl.innerHTML="";const i=document.createElement("div");i.style.cssText=`
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      letter-spacing: 0.5px;
      text-transform: uppercase;
    `,i.textContent="Crew",this.crewPanelEl.appendChild(i);const s=document.createElement("div");s.style.cssText=`
      display: flex;
      flex-direction: row;
      gap: 6px;
      align-items: center;
    `;for(const a of e){const r=t.includes(a),l=document.createElement("div");l.style.cssText=`
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: ${r?"#5EDB7D":"#555"};
        border: 2px solid ${r?"#3AC060":"#888"};
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 13px;
        font-weight: 900;
        color: ${r?"#003318":"#bbb"};
        text-shadow: none;
        box-shadow: 0 1px 4px rgba(0,0,0,0.6);
        transition: background 0.2s, border-color 0.2s;
      `,l.textContent=Lg(a),l.title=a,s.appendChild(l)}this.crewPanelEl.appendChild(s)}_refreshJobStrip(e,t){this.jobStripEl.innerHTML="";const n=document.createElement("div");if(n.style.cssText=`
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      text-align: right;
    `,t!==null){const i=t<1e3?`${Math.round(t)}m`:`${(t/1e3).toFixed(1)}km`;this.activePhase===1?(n.textContent=`📦 To workshop: ${i} — ${e.title}`,n.style.color="#FFD700"):this.activePhase===2?(n.textContent=`👥 Pick up crew: ${i} — ${e.title}`,n.style.color="#60AAFF"):(n.textContent=`🧱 To job site: ${i} — ${e.title}`,n.style.color="#C1666B")}else this.activePhase===1?(n.textContent=`📦 Workshop pickup — ${e.title}`,n.style.color="#FFD700"):this.activePhase===2?(n.textContent=`👥 Pick up the crew — ${e.title}`,n.style.color="#60AAFF"):(n.textContent=`🧱 ${e.title}`,n.style.color="#fff");this.jobStripEl.appendChild(n)}updateTravelTimer(e){if(e===null){this.travelTimerEl.style.display="none",this.travelTimerEl.classList.remove("hud-timer-pulse"),this.timerPulseInterval!==null&&(clearInterval(this.timerPulseInterval),this.timerPulseInterval=null);return}this.travelTimerEl.style.display="block",this.travelTimerEl.textContent=`⏱ ${Dg(e)}`,e>60?(this.travelTimerEl.style.color="#5EDB7D",this.travelTimerEl.classList.remove("hud-timer-pulse")):e>30?(this.travelTimerEl.style.color="#FFD700",this.travelTimerEl.classList.remove("hud-timer-pulse")):(this.travelTimerEl.style.color="#ff4444",this.travelTimerEl.classList.contains("hud-timer-pulse")||this.travelTimerEl.classList.add("hud-timer-pulse"))}showTimerFail(e){const t=document.getElementById("hud-timer-fail-msg");t&&(t.textContent=`⏰ TOO SLOW! -${$n(e)}`),this.timerFailOverlay.style.display="flex",setTimeout(()=>{this.timerFailOverlay.style.display="none"},3e3)}showPhase1Complete(){const e=document.getElementById("hud-flash-msg");e&&(e.innerHTML='📦 Materials loaded!<br><span style="font-size:0.65em">Go pick up the crew.</span>',e.style.color="#FFD700"),this.flashOverlay.style.background="rgba(255, 210, 0, 0.10)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2500)}showCrewPickup(e,t){const n=document.getElementById("hud-flash-msg");n&&(t?n.innerHTML=`👤 ${e} on board!<br><span style="font-size:0.65em">Pick up ${t}!</span>`:(n.innerHTML='✅ Crew assembled!<br><span style="font-size:0.65em">Head to the job site.</span>',n.style.color="#5EDB7D"),t&&(n.style.color="#60AAFF")),this.flashOverlay.style.background=t?"rgba(96, 170, 255, 0.08)":"rgba(94, 219, 125, 0.12)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2200)}showSpillPenalty(e){this.spillPenaltyTimeout!==null&&(clearTimeout(this.spillPenaltyTimeout),this.spillPenaltyTimeout=null);const t=`-${$n(e)}`;this.moneyEl.style.color="#ff4444",this.moneyEl.textContent=`${$n(this.currentMoney)} ${t}`,this.spillPenaltyTimeout=setTimeout(()=>{this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=$n(this.currentMoney),this.spillPenaltyTimeout=null},1500)}showJobComplete(e,t){const n=document.getElementById("hud-flash-msg");n&&(n.style.color="#5EDB7D",n.innerHTML=`✅ JOB DONE!<br><span style="font-size:0.7em">+${$n(t)} — ${e}</span>`),this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashTimeout=null},3e3)}updateMoney(e){this.currentMoney=e,this.spillPenaltyTimeout===null&&(this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=$n(e));const t=Math.min(1,e/$l);this.btcBarFill.style.width=`${(t*100).toFixed(1)}%`,t>=1?(this.btcLabelEl.textContent="₿ GOAL: ACHIEVED! 🚀",this.btcBarFill.style.background="#FFD700"):this.btcLabelEl.textContent=`₿ GOAL: ${(t*100).toFixed(1)}%`,!this.btcAchieved&&e>=$l&&(this.btcAchieved=!0,this._showBitcoinAchievement())}showPenalty(e,t){this.flashTimeout&&clearTimeout(this.flashTimeout),this.flashOverlay.style.display="block";const n=this.flashOverlay.querySelector("div");n&&(n.innerHTML=`⚠️ SCAFFOLD FAIL<br><span style="font-size:0.7em">−${$n(t)} penalty — ${e}</span>`),this.flashOverlay.style.animation="none",this.flashOverlay.offsetWidth,this.flashOverlay.style.animation="hudRedFlash 2.5s ease forwards",this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none"},2600)}showToast(e,t=16777215){const n="#"+t.toString(16).padStart(6,"0"),i=document.createElement("div");i.textContent=e,Object.assign(i.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:n,color:"#fff",padding:"14px 24px",borderRadius:"14px",fontSize:"18px",fontWeight:"800",fontFamily:"system-ui, sans-serif",zIndex:"9000",opacity:"1",textShadow:"0 1px 4px rgba(0,0,0,0.5)",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",pointerEvents:"none",whiteSpace:"nowrap",transition:"opacity 0.5s ease"}),document.body.appendChild(i),setTimeout(()=>{i.style.opacity="0"},2e3),setTimeout(()=>i.remove(),2600)}_showBitcoinAchievement(){if(localStorage.setItem("tem-rush-btc-achieved","1"),!document.getElementById("btc-anim-styles")){const c=document.createElement("style");c.id="btc-anim-styles",c.textContent=`
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
    `;const t=document.createElement("div");t.style.cssText="width:100%; max-width:480px; display:flex; flex-direction:column; align-items:center; gap:18px;";const n=document.createElement("div");n.style.cssText="width:100%; display:flex; justify-content:flex-end;";const i=document.createElement("button");i.textContent="✕",i.style.cssText=`background:rgba(255,255,255,0.1);border:none;color:#fff;
      font-size:18px;width:38px;height:38px;border-radius:50%;cursor:pointer;`,i.onclick=()=>e.remove(),n.appendChild(i),t.appendChild(n),t.innerHTML+=`
      <div style="font-size:72px;animation:btcSpin 4s linear infinite;display:inline-block;">₿</div>
      <div style="color:#F7931A;font-size:clamp(28px,8vw,52px);font-weight:900;
                  animation:btcGlow 2s ease-in-out infinite;text-align:center;">1 BITCOIN</div>
      <div style="color:#FFD700;font-size:clamp(15px,4vw,22px);font-weight:800;letter-spacing:2px;">ACHIEVED</div>
      <div style="color:rgba(255,255,255,0.5);font-size:13px;text-align:center;line-height:1.6;max-width:360px;">
        100,000,000 sats earned plastering Melbourne.<br>
        <em>Jarrad wants his cut. You pretend not to hear him.</em>
      </div>
    `;const s=Jl("🎽  REWARD — MERCH STORE","rgba(247,147,26,0.18)","rgba(247,147,26,0.55)","10% off all TEM merch.<br>Show this at checkout or use the code online.","BTCPLASTER10");t.appendChild(s);const a=Jl("🪣  REWARD — MATERIAL SALES","rgba(94,219,125,0.14)","rgba(94,219,125,0.45)","5% off TEM materials at participating retail stores.<br>Present your in-app certificate.","BTCMAT5");t.appendChild(a);const r=document.createElement("div");r.style.cssText=`
      width:100%; background:rgba(200,168,106,0.1);
      border:1px solid rgba(200,168,106,0.35); border-radius:14px;
      padding:16px 18px; color:rgba(240,232,216,0.75);
      font-size:13px; line-height:1.6; text-align:center;
    `,r.innerHTML=`
      📜 Both rewards have been added to your<br>
      <strong style="color:#C8A86A;">TEM Rush Certificate</strong> —
      open the 📸 gallery to view &amp; save it.
    `,t.appendChild(r);const l=document.createElement("button");l.textContent="HODL 🚀",l.style.cssText=`
      padding:14px 48px; background:#F7931A; color:#000;
      border:none; border-radius:50px; font-size:18px; font-weight:900;
      cursor:pointer; letter-spacing:1px; margin-top:8px;
    `,l.onclick=()=>e.remove(),t.appendChild(l),e.appendChild(t),document.body.appendChild(e)}}function Jl(o,e,t,n,i){const s=document.createElement("div");s.style.cssText=`
    width:100%; background:${e}; border:1.5px solid ${t};
    border-radius:16px; padding:18px; display:flex; flex-direction:column; gap:10px;
  `,s.innerHTML=`
    <div style="color:#F7931A;font-size:11px;font-weight:700;letter-spacing:2px;">${o}</div>
    <div style="color:#F0E8D8;font-size:14px;line-height:1.6;">${n}</div>
    <div style="background:rgba(0,0,0,0.4);border:1px solid rgba(247,147,26,0.3);
                border-radius:10px;padding:12px;text-align:center;">
      <div style="color:rgba(247,147,26,0.7);font-size:10px;letter-spacing:2px;
                  font-family:monospace;margin-bottom:4px;">PROMO CODE</div>
      <div style="color:#FFD97A;font-size:clamp(18px,5vw,26px);font-weight:900;
                  letter-spacing:3px;font-family:monospace;">${i}</div>
    </div>
    <button data-code="${i}" style="
      background:rgba(247,147,26,0.15);border:1px solid rgba(247,147,26,0.4);
      color:#F7931A;font-size:13px;font-weight:700;border-radius:8px;
      padding:10px;cursor:pointer;touch-action:manipulation;width:100%;
    ">📋 Copy Code</button>
  `;const a=s.querySelector("button");return a.addEventListener("click",()=>{var r;(r=navigator.clipboard)==null||r.writeText(i).then(()=>{a.textContent="✓ Copied!",setTimeout(()=>{a.textContent="📋 Copy Code"},2e3)})}),s}const ai=[{id:"timber-bluestone",file:"images/270ae674-ae77-46c0-a931-d8b3890bb728.jpg",name:"Timber & Bluestone"},{id:"angular-bay",file:"images/4d5ff18e-1129-4195-9108-a64f3c8e4d34.jpg",name:"Angular Bay House"},{id:"haussmann",file:"images/5c2eabb7-65ce-4f76-b14c-8eb37a3f9537.jpg",name:"Haussmann Mansion"},{id:"brutalist",file:"images/60007f2e-318f-412e-b2ad-4d77445ee417.jpg",name:"Brutalist Compound"},{id:"sculptural-olive",file:"images/787315c4-a661-4dca-8567-b7a18f104665.jpg",name:"Sculptural Olive"},{id:"curved-balcony",file:"images/842fccc6-6bad-4509-81d8-ecb2dc14c80c.jpg",name:"Curved Balcony"},{id:"corten-plaster",file:"images/e3cbd2c9-7944-4074-a439-1033c9f2c166.jpg",name:"Corten & Plaster"},{id:"terracotta-mono",file:"images/f2ed55b5-ba78-4a78-8bad-e57a86b6bcef.jpg",name:"Terracotta Monolith"}],ch="tem-rush-achievements";function Es(){try{return JSON.parse(localStorage.getItem(ch)||"[]")}catch{return[]}}function Bg(o){const e=Es();return e.includes(o)?!1:(e.push(o),localStorage.setItem(ch,JSON.stringify(e)),!0)}function hh(){return Es().length>=ai.length}function Ug(){const o=Es(),e=ai.filter(t=>!o.includes(t.id));return e.length>0?e[Math.floor(Math.random()*e.length)]:ai[Math.floor(Math.random()*ai.length)]}function Ng(o,e,t){o.fillStyle="#C8B89A",o.fillRect(0,0,e,t);for(let n=0;n<800;n++){const i=Math.random()*e,s=Math.random()*t,a=20+Math.random()*60,r=Math.random()*Math.PI,l=Math.floor(180+Math.random()*40);o.strokeStyle=`rgb(${l},${l-10},${l-20})`,o.lineWidth=1+Math.random()*3,o.globalAlpha=.3+Math.random()*.4,o.beginPath(),o.moveTo(i,s),o.lineTo(i+Math.cos(r)*a,s+Math.sin(r)*a),o.stroke()}o.globalAlpha=1,o.font="bold 48px system-ui",o.textAlign="center",o.fillStyle="rgba(180,160,130,0.4)",o.fillText("TROWELED EARTH",e/2,t/2-20),o.font="22px system-ui",o.fillStyle="rgba(180,160,130,0.3)",o.fillText("Scratch to reveal",e/2,t/2+20)}function Og(o,e,t,n,i,s=45){o.globalCompositeOperation="destination-out",o.strokeStyle="rgba(0,0,0,1)",o.lineCap="round",o.lineJoin="round",o.lineWidth=s*2,o.beginPath(),o.moveTo(e,t),o.lineTo(n,i),o.stroke(),o.globalCompositeOperation="source-over"}function Kl(o,e,t){const n=o.getImageData(0,0,e,t).data;let i=0;const s=e*t;for(let a=3;a<n.length;a+=4)n[a]<128&&i++;return i/s}function kg(o,e,t){o.save(),o.translate(e,t),o.rotate(Math.PI/4),o.strokeStyle="#8B6914",o.lineWidth=5,o.lineCap="round",o.beginPath(),o.moveTo(0,0),o.lineTo(0,36),o.stroke(),o.fillStyle="#C0C0C0",o.strokeStyle="#888",o.lineWidth=1.5,o.beginPath(),o.moveTo(-14,0),o.lineTo(14,0),o.lineTo(10,-28),o.lineTo(-10,-28),o.closePath(),o.fill(),o.stroke(),o.fillStyle="rgba(255,255,255,0.35)",o.beginPath(),o.moveTo(-8,-4),o.lineTo(4,-4),o.lineTo(2,-22),o.lineTo(-6,-22),o.closePath(),o.fill(),o.restore()}function Zl(o,e,t,n){const i=Math.max(t/e.naturalWidth,n/e.naturalHeight),s=e.naturalWidth*i,a=e.naturalHeight*i,r=(t-s)/2,l=(n-a)/2;o.drawImage(e,r,l,s,a)}class zg{constructor(){E(this,"container",null);E(this,"canvas",null);E(this,"ctx",null);E(this,"scratch",null);E(this,"sctx",null);E(this,"onComplete",null);E(this,"photo",null);E(this,"img",null);E(this,"imgLoaded",!1);E(this,"lastX",0);E(this,"lastY",0);E(this,"pointerDown",!1);E(this,"cursorX",-999);E(this,"cursorY",-999);E(this,"DURATION",30);E(this,"timeLeft",30);E(this,"timerInterval",null);E(this,"rafId",0);E(this,"done",!1);E(this,"revealed",0);E(this,"lastSampleTime",0);E(this,"SAMPLE_INTERVAL",250);E(this,"toastMsg","");E(this,"toastAlpha",0);E(this,"_onMouseMove");E(this,"_onMouseDown");E(this,"_onMouseUp");E(this,"_onTouchStart");E(this,"_onTouchMove");E(this,"_onTouchEnd");this._onMouseMove=this.handleMouseMove.bind(this),this._onMouseDown=this.handleMouseDown.bind(this),this._onMouseUp=()=>{this.pointerDown=!1},this._onTouchStart=this.handleTouchStart.bind(this),this._onTouchMove=this.handleTouchMove.bind(this),this._onTouchEnd=()=>{this.pointerDown=!1}}mount(e,t){if(this.container=e,this.onComplete=t,this.done=!1,this.revealed=0,this.timeLeft=this.DURATION,this.toastMsg="",this.toastAlpha=0,this.photo=Ug(),this.canvas=document.createElement("canvas"),this.canvas.width=e.clientWidth||window.innerWidth,this.canvas.height=e.clientHeight||window.innerHeight,this.canvas.style.cssText="position:absolute;inset:0;display:block;cursor:none;touch-action:none;",this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx)throw new Error("Canvas 2D not supported");if(e.appendChild(this.canvas),this.scratch=document.createElement("canvas"),this.scratch.width=this.canvas.width,this.scratch.height=this.canvas.height,this.sctx=this.scratch.getContext("2d",{willReadFrequently:!0}),!this.sctx)throw new Error("Scratch canvas 2D not supported");Ng(this.sctx,this.scratch.width,this.scratch.height),this.img=new Image,this.img.onload=()=>{this.imgLoaded=!0},this.img.onerror=()=>{this.imgLoaded=!0},this.img.src=this.photo.file,this.canvas.addEventListener("mousemove",this._onMouseMove),this.canvas.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),this.canvas.addEventListener("touchstart",this._onTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.canvas.addEventListener("touchend",this._onTouchEnd),this.timerInterval=setInterval(()=>{this.done||(this.timeLeft--,this.timeLeft<=0&&this.finish())},1e3),this.loop()}handleMouseDown(e){this.pointerDown=!0;const t=this.canvas.getBoundingClientRect();this.lastX=e.clientX-t.left,this.lastY=e.clientY-t.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleMouseMove(e){const t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top;this.cursorX=n,this.cursorY=i,this.pointerDown&&!this.done&&(this.scrape(this.lastX,this.lastY,n,i),this.lastX=n,this.lastY=i)}handleTouchStart(e){e.preventDefault(),this.pointerDown=!0;const t=e.touches[0],n=this.canvas.getBoundingClientRect();this.lastX=t.clientX-n.left,this.lastY=t.clientY-n.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleTouchMove(e){if(e.preventDefault(),!this.pointerDown||this.done)return;const t=e.touches[0],n=this.canvas.getBoundingClientRect(),i=t.clientX-n.left,s=t.clientY-n.top;this.cursorX=i,this.cursorY=s,this.scrape(this.lastX,this.lastY,i,s),this.lastX=i,this.lastY=s}scrape(e,t,n,i){if(!this.sctx||!this.scratch||this.done)return;Og(this.sctx,e,t,n,i,45);const s=performance.now();s-this.lastSampleTime>this.SAMPLE_INTERVAL&&(this.lastSampleTime=s,this.revealed=Kl(this.sctx,this.scratch.width,this.scratch.height),this.revealed>=.85&&this.finish())}loop(){if(this.done&&this.toastAlpha<=0)return;const e=this.ctx,t=this.canvas;if(!e||!t)return;const n=t.width,i=t.height;e.clearRect(0,0,n,i),this.imgLoaded&&this.img&&this.img.naturalWidth>0?Zl(e,this.img,n,i):(e.fillStyle="#2a2a20",e.fillRect(0,0,n,i)),this.scratch&&e.drawImage(this.scratch,0,0),this.done||this.drawHUD(e,n,i),this.cursorX>0&&!this.done&&kg(e,this.cursorX,this.cursorY),this.toastAlpha>0&&(this.drawToast(e,n,i),this.toastAlpha-=.012),this.rafId=requestAnimationFrame(()=>this.loop())}drawHUD(e,t,n){const i=this.timeLeft/this.DURATION,s=t*.8,a=t*.1,r=16,l=14,c=7;e.fillStyle="rgba(0,0,0,0.4)",this.roundRect(e,a,r,s,l,c),e.fill();const h=i<.33?"#F07070":i<.6?"#F7C948":"#5EDB7D";e.fillStyle=h,this.roundRect(e,a,r,s*i,l,c),e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.round(n*.03)}px system-ui`,e.textAlign="center",e.shadowColor="rgba(0,0,0,0.8)",e.shadowBlur=6,e.fillText(`${Math.ceil(this.timeLeft)}s`,t/2,r+l+22);const d=Math.round(this.revealed*100);e.font=`900 ${Math.round(n*.09)}px system-ui`,e.textAlign="center",e.fillStyle="rgba(255,255,255,0.9)",e.shadowColor="rgba(0,0,0,0.9)",e.shadowBlur=12,e.fillText(`${d}%`,t/2,n-32),e.shadowBlur=0,this.timeLeft>25&&(e.font=`bold ${Math.round(n*.03)}px system-ui`,e.fillStyle="rgba(255,255,255,0.85)",e.textAlign="center",e.fillText("🪣  Scrape away the plaster!",t/2,n/2))}roundRect(e,t,n,i,s,a){i<0||(e.beginPath(),e.moveTo(t+a,n),e.lineTo(t+i-a,n),e.quadraticCurveTo(t+i,n,t+i,n+a),e.lineTo(t+i,n+s-a),e.quadraticCurveTo(t+i,n+s,t+i-a,n+s),e.lineTo(t+a,n+s),e.quadraticCurveTo(t,n+s,t,n+s-a),e.lineTo(t,n+a),e.quadraticCurveTo(t,n,t+a,n),e.closePath())}drawToast(e,t,n){const i=Math.min(1,this.toastAlpha);e.save(),e.globalAlpha=i,e.fillStyle="rgba(0,0,0,0.7)",e.font=`bold ${Math.round(n*.035)}px system-ui`,e.textAlign="center";const s=this.toastMsg.split(`
`),a=Math.round(n*.045),r=s.length*a+24,l=n*.45-r/2,c=t*.85,h=(t-c)/2;this.roundRect(e,h,l,c,r,16),e.fill(),e.fillStyle="#fff",e.shadowColor="rgba(0,0,0,0.6)",e.shadowBlur=8,s.forEach((d,u)=>{e.fillText(d,t/2,l+22+u*a)}),e.restore()}finish(){if(this.done)return;this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.sctx&&this.scratch&&(this.revealed=Kl(this.sctx,this.scratch.width,this.scratch.height));const e=Math.round(this.revealed*100),t=Math.max(20,e),n=t/100,i=this.photo,s=Bg(i.id),a=Es().length,r=hh();this.showResultScreen(t,i,s,a,r,n)}showResultScreen(e,t,n,i,s,a){const r=this.ctx,l=this.canvas;if(!r||!l)return;const c=l.width,h=l.height;r.clearRect(0,0,c,h),this.imgLoaded&&this.img&&this.img.naturalWidth>0?Zl(r,this.img,c,h):(r.fillStyle="#2a2a20",r.fillRect(0,0,c,h)),this.scratch&&r.drawImage(this.scratch,0,0),r.fillStyle="rgba(0,0,0,0.65)",r.fillRect(0,0,c,h);const d=e>=85?"#5EDB7D":e>=60?"#F7C948":"#F07070";r.font=`900 ${Math.round(h*.15)}px system-ui`,r.textAlign="center",r.fillStyle=d,r.shadowColor="rgba(0,0,0,0.8)",r.shadowBlur=20,r.fillText(`${e}%`,c/2,h*.35),r.font=`bold ${Math.round(h*.04)}px system-ui`,r.fillStyle="#fff",r.shadowBlur=10,r.fillText(`📸 ${t.name}`,c/2,h*.47);let u;s?u="🏆 FULL TEM COLLECTION!":n?u="✨ NEW PHOTO UNLOCKED!":u="Already in your collection",r.font=`bold ${Math.round(h*.032)}px system-ui`,r.fillStyle=s?"#FFD700":n?"#5EDB7D":"#aaa",r.shadowBlur=8,r.fillText(u,c/2,h*.56),r.font=`${Math.round(h*.026)}px system-ui`,r.fillStyle="rgba(255,255,255,0.75)",r.shadowBlur=4,r.fillText(`Collection: ${i} / ${ai.length}`,c/2,h*.64),r.shadowBlur=0;const f=s?"🏆 Full TEM Collection complete!":n?`📸 New photo unlocked: ${t.name}`:`${t.name} — already in collection`,g={score:e,qualityPct:a,message:f};setTimeout(()=>{var x;return(x=this.onComplete)==null?void 0:x.call(this,g)},2800)}unmount(){this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.rafId&&cancelAnimationFrame(this.rafId),this.canvas&&(this.canvas.removeEventListener("mousemove",this._onMouseMove),this.canvas.removeEventListener("mousedown",this._onMouseDown),this.canvas.removeEventListener("touchstart",this._onTouchStart),this.canvas.removeEventListener("touchmove",this._onTouchMove),this.canvas.removeEventListener("touchend",this._onTouchEnd),this.canvas.remove()),window.removeEventListener("mouseup",this._onMouseUp),this.canvas=null,this.ctx=null,this.scratch=null,this.sctx=null,this.container=null,this.onComplete=null,this.img=null}}const vt=7,ao=5,vn=ao*vt,Gg=[-6,6],Hg=26,Zs=5,Ql=13,ec=11,tc=3.5,Vg=-30,Ti=.4;class Wg{constructor(){E(this,"overlay");E(this,"renderer");E(this,"scene");E(this,"camera");E(this,"rafId",0);E(this,"lastTs",0);E(this,"px",0);E(this,"py",0);E(this,"vx",0);E(this,"vy",0);E(this,"onGround",!1);E(this,"jumpsLeft",2);E(this,"climbPole",null);E(this,"swingBar",null);E(this,"swingAngle",0);E(this,"swingOmega",0);E(this,"char");E(this,"charGroup");E(this,"facingRight",!0);E(this,"platforms",[]);E(this,"poles",[]);E(this,"swingBars",[]);E(this,"heartsEl");E(this,"timerEl");E(this,"lives",3);E(this,"timer",90);E(this,"gameOver",!1);E(this,"delivered",!1);E(this,"keys",{left:!1,right:!1,up:!1,down:!1});E(this,"jumpTap",!1);E(this,"onCompleteFn")}start(e){this.onCompleteFn=e,this._createOverlay(),this._createScene(),this._buildBackground(),this._buildLevel(),this._buildHUD(),this._buildControls(),this.px=0,this.py=.5,this.lastTs=performance.now(),this.rafId=requestAnimationFrame(t=>this._loop(t))}_createOverlay(){this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position:fixed; inset:0; z-index:10000; overflow:hidden; touch-action:none;
      background:#87CEEB;
    `,document.body.appendChild(this.overlay)}_createScene(){const e=window.innerWidth,t=window.innerHeight,n=document.createElement("canvas");n.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;",this.overlay.appendChild(n),this.renderer=new va({canvas:n,antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setSize(e,t),this.renderer.shadowMap.enabled=!0,this.scene=new _a,this.scene.background=new be(8900331),this.scene.fog=new wo(8900331,.018),this.camera=new Dt(42,e/t,.1,200),this.camera.position.set(0,12,20),this.camera.lookAt(0,10,0);const i=new Ma(16777215,.6);this.scene.add(i);const s=new Gi(16775400,1.1);s.position.set(8,30,15),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),s.shadow.camera.near=.5,s.shadow.camera.far=80,s.shadow.camera.left=-15,s.shadow.camera.right=15,s.shadow.camera.top=40,s.shadow.camera.bottom=-5,this.scene.add(s);const a=new Gi(12638463,.4);a.position.set(-5,10,5),this.scene.add(a),this.char=new Ss(zn.Jarrad),this.charGroup=this.char.group,this.charGroup.scale.setScalar(1),this.scene.add(this.charGroup)}_buildBackground(){const e=(i,s,a,r,l)=>{const c=new D(i,new j({color:s}));return c.position.set(a,r,l),c.receiveShadow=!0,this.scene.add(c),c};e(new ht(80,60),11589872,0,22,-12);const t=[[-14,10],[-10,14],[-6,8],[8,16],[12,11],[16,9]];for(const[i,s]of t)e(new K(4,s,1),6975632,i,s/2-1,-9);const n=vn+4;e(new K(12,n,.6),15260864,0,n/2-1,-1.5),e(new K(12.6,.5,.9),13945e3,0,n-1,-1.4),e(new K(12,.4,.7),13681824,0,0,-1.4);for(let i=0;i<ao;i++){const s=i*vt+2.5;for(const a of[-3.5,0,3.5])e(new K(2.2,3.2,.2),3359846,a,s,-1.1),e(new K(2,.15,.25),12300432,a,s+1.7,-1.05)}e(new K(20,.5,5),3815474,0,-.25,.5),e(new K(10,.5,1.2),13154440,0,.25,1),e(new K(10,1.2,.15),12101752,0,.6,1.57),e(new K(.15,1.2,1.2),12101752,-5,.6,1),e(new K(.15,1.2,1.2),12101752,5,.6,1)}_buildLevel(){for(const e of Gg)this._addScaffoldPole(e,0,vn+3),this.poles.push({x:e,y1:0,y2:vn+3});this._addScaffoldPole(-2.5,0,vn+3),this._addScaffoldPole(2.5,0,vn+3);for(let e=0;e<=ao;e++){const t=e*vt;this._addTube(-6,6,t,10066346,.07)}for(let e=0;e<ao;e++){const t=e*vt,n=(e+1)*vt;this._addDiag(-6,t,6,n),this._addDiag(6,t,-6,n)}this._addPlat(-5.5,5.5,0,"normal"),this._addPlat(-5.5,-.8,vt*1,"normal"),this._addPlat(.8,5.5,vt*1,"normal"),this._addPlat(-5.5,-1,vt*2,"normal"),this._addPlat(1.5,4.5,vt*2,"crumble"),this._addPlat(-5.5,-1.8,vt*3,"normal"),this._addPlat(1.8,5.5,vt*3,"normal"),this._addPlat(-1.5,1.5,vt*3,"moving"),this._addPlat(-5.5,-2.5,vt*4,"normal"),this._addPlat(-.8,.8,vt*4+1.2,"normal"),this._addPlat(2.5,5.5,vt*4,"normal"),this._addSwingBar(0,vt*1+3.5,2.5),this._addSwingBar(0,vt*3+3.5,2.5),this._addPlat(-5.5,5.5,vn,"win"),this._addSign(0,vn+1.8,"⭐ DELIVER HERE ⭐",16746496),this._addBucket(-3.5,.8)}_addScaffoldPole(e,t,n){const i=n-t,s=new We(.07,.07,i,8),a=new j({color:10526896}),r=new D(s,a);r.position.set(e,t+i/2,.3),r.castShadow=!0,this.scene.add(r);for(let l=t;l<=n;l+=vt){const c=new dt(.12,6,5),h=new D(c,a);h.position.set(e,l,.3),this.scene.add(h)}}_addTube(e,t,n,i,s){const a=t-e,r=new We(s,s,a,7),l=new j({color:i}),c=new D(r,l);c.rotation.z=Math.PI/2,c.position.set((e+t)/2,n,.3),this.scene.add(c)}_addDiag(e,t,n,i){const s=n-e,a=i-t,r=Math.sqrt(s*s+a*a),l=new We(.04,.04,r,6),c=new j({color:8947872}),h=new D(l,c);h.rotation.z=Math.atan2(a,s)-Math.PI/2,h.position.set((e+n)/2,(t+i)/2,.3),this.scene.add(h)}_addPlat(e,t,n,i){const s=t-e,a={normal:9134608,moving:13918224,crumble:8939042,win:16763904}[i],r=new K(s,.28,.8),l=new j({color:a}),c=new D(r,l);c.position.set((e+t)/2,n+.14,.3),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);for(let h=e+.6;h<t;h+=.9){const d=new K(.06,.3,.82),u=new j({color:a-1118464}),f=new D(d,u);f.position.set(h-(e+t)/2,0,0),c.add(f)}this.platforms.push({x1:e,x2:t,y:n,mesh:c,type:i,moveDir:1,crumbleTimer:0,crumbled:!1})}_addSwingBar(e,t,n){const i=new We(.09,.09,3,8),s=new j({color:16755200,emissive:8930304,emissiveIntensity:.5}),a=new D(i,s);a.rotation.z=Math.PI/2,a.position.set(e,t,.5),this.scene.add(a);const r=new dt(.22,8,8),l=new Ht({color:16772608,transparent:!0,opacity:.7}),c=new D(r,l);c.position.set(e,t,.6),this.scene.add(c),this.swingBars.push({anchorX:e,anchorY:t,radius:n,mesh:a})}_addSign(e,t,n,i){const s=new K(6,.8,.15),a=new j({color:i,emissive:i,emissiveIntensity:.3}),r=new D(s,a);r.position.set(e,t,.5),this.scene.add(r)}_addBucket(e,t){const n=new We(.25,.2,.5,8),i=new j({color:12674667,emissive:6684689,emissiveIntensity:.3}),s=new D(n,i);s.position.set(e,t,.5),this.scene.add(s)}_buildHUD(){const e=document.createElement("div");e.style.cssText=`
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
    `;const t=document.createElement("div");t.style.cssText="display:grid; grid-template-columns:70px 70px 70px; grid-template-rows:70px 70px; gap:6px;";const n=(g,x,m,p)=>{const w=document.createElement("div");return w.style.cssText=`
        grid-row:${m}; grid-column:${p};
        background:${x}; border-radius:50%; color:#fff;
        font-size:22px; display:flex; align-items:center; justify-content:center;
        box-shadow:0 4px 10px rgba(0,0,0,0.4); touch-action:none; user-select:none;
        cursor:pointer;
      `,w.textContent=g,w},i=n("▲","rgba(60,60,160,0.88)",1,2),s=n("◀","rgba(70,70,70,0.88)",2,1),a=n("▼","rgba(60,60,160,0.88)",2,2),r=n("▶","rgba(70,70,70,0.88)",2,3);t.appendChild(i),t.appendChild(s),t.appendChild(a),t.appendChild(r);const l=document.createElement("div");l.style.cssText=`
      width:92px; height:92px; border-radius:50%;
      background:rgba(30,180,30,0.9); color:#fff;
      font-size:13px; font-weight:900; letter-spacing:0.5px;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 5px 15px rgba(0,0,0,0.45); touch-action:none; user-select:none;
      cursor:pointer;
    `,l.textContent="JUMP";const c=(g,x,m)=>{g.addEventListener("touchstart",p=>{p.preventDefault(),x()},{passive:!1}),g.addEventListener("touchend",p=>{p.preventDefault(),m()},{passive:!1}),g.addEventListener("mousedown",x),g.addEventListener("mouseup",m)};c(s,()=>this.keys.left=!0,()=>this.keys.left=!1),c(r,()=>this.keys.right=!0,()=>this.keys.right=!1),c(i,()=>this.keys.up=!0,()=>this.keys.up=!1),c(a,()=>this.keys.down=!0,()=>this.keys.down=!1);const h=()=>{this.jumpTap=!0};l.addEventListener("touchstart",g=>{g.preventDefault(),h()},{passive:!1}),l.addEventListener("mousedown",h);const d={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down",KeyA:"left",KeyD:"right",KeyW:"up",KeyS:"down"},u=g=>{if(d[g.code]){const x=d[g.code];x==="jump"?this.jumpTap=!0:this.keys[x]=!0}(g.code==="Space"||g.code==="KeyZ")&&(this.jumpTap=!0)},f=g=>{const x=d[g.code];x&&x!=="jump"&&(this.keys[x]=!1)};window.addEventListener("keydown",u),window.addEventListener("keyup",f),this.overlay.addEventListener("remove",()=>{window.removeEventListener("keydown",u),window.removeEventListener("keyup",f)}),e.appendChild(t),e.appendChild(l),this.overlay.appendChild(e)}_loop(e){if(this.gameOver)return;this.rafId=requestAnimationFrame(n=>this._loop(n));const t=Math.min((e-this.lastTs)/1e3,.05);this.lastTs=e,this._update(t),this.renderer.render(this.scene,this.camera),this.jumpTap=!1}_update(e){if(this.timer=Math.max(0,this.timer-e),this.timerEl.textContent=`⏱ ${Math.ceil(this.timer)}s`,this.timer<=0&&!this.delivered){this._end(!1);return}this.char.update(e);for(const n of this.platforms)if(n.type==="moving"&&(n.x1+=2.5*(n.moveDir??1)*e,n.x2+=2.5*(n.moveDir??1)*e,n.mesh.position.x=(n.x1+n.x2)/2,(n.x2>5.2||n.x1<-1.8)&&(n.moveDir=-(n.moveDir??1))),n.type==="crumble"&&!n.crumbled)if(this.onGround&&this.px>=n.x1-Ti&&this.px<=n.x2+Ti&&Math.abs(this.py-n.y)<.3){n.crumbleTimer=(n.crumbleTimer??0)+e;const s=Math.sin(n.crumbleTimer*40)*.06*Math.min(1,n.crumbleTimer);n.mesh.position.z=.3+s,n.crumbleTimer>1.2&&(n.crumbled=!0,n.mesh.visible=!1)}else(n.crumbleTimer??0)>0&&!n.crumbled&&(n.crumbleTimer=0);this.swingBar?this._physicsSwing(e):this.climbPole?this._physicsClimb(e):this._physicsPlatform(e),this.charGroup.position.set(this.px,this.py,.3),this.charGroup.rotation.y=this.facingRight?-.15:Math.PI+.15;const t=Math.max(8,Math.min(this.py+6,vn+2));if(this.camera.position.y+=(t-this.camera.position.y)*.07,this.camera.lookAt(0,this.camera.position.y-4,0),this.py<-3.5){this._loseLife();return}!this.delivered&&this.py>=vn-.5&&Math.abs(this.px)<5&&(this.delivered=!0,this._end(!0))}_physicsPlatform(e){if(!this.onGround){for(const t of this.poles)if(Math.abs(this.px-t.x)<.5&&this.py>=t.y1-.5&&this.py<=t.y2&&this.keys.up){this.climbPole=t,this.px=t.x,this.vx=0,this.vy=0;return}}if(this.onGround||(this.vy=Math.max(this.vy-Hg*e,Vg)),this.keys.left?(this.vx=-Zs,this.facingRight=!1):this.keys.right?(this.vx=Zs,this.facingRight=!0):this.vx*=.6,this.jumpTap)if(this.onGround)this.vy=Ql,this.onGround=!1,this.jumpsLeft=1;else if(this.jumpsLeft>0)this.vy=ec,this.jumpsLeft--;else for(const t of this.swingBars){const n=this.px-t.anchorX,i=this.py-t.anchorY,s=Math.sqrt(n*n+i*i);if(s<t.radius+1.5&&this.py<t.anchorY+.5){this.swingBar=t;const a=Math.max(s,t.radius);this.swingAngle=Math.atan2(n,-i),this.swingOmega=this.vx/a,this.vx=0,this.vy=0;return}}if(!this.onGround)for(const t of this.swingBars){const n=Math.abs(this.py-t.anchorY),i=Math.abs(this.px-t.anchorX);if(n<.6&&i<t.radius&&this.vy<0){this.swingBar=t,this.swingAngle=Math.atan2(this.px-t.anchorX,-(this.py-t.anchorY)),this.swingOmega=this.vx/t.radius,this.vx=0,this.vy=0;return}}this.px+=this.vx*e,this.py+=this.vy*e,this.px=Math.max(-6.2,Math.min(6.2,this.px)),this.onGround=!1;for(const t of this.platforms)if(!t.crumbled&&this.px+Ti>t.x1&&this.px-Ti<t.x2&&this.py>t.y-.5&&this.py<t.y+1&&this.vy<=0){this.py=t.y,this.vy=0,this.onGround=!0,this.jumpsLeft=2;break}}_physicsClimb(e){const t=this.climbPole;this.keys.up&&(this.py+=tc*e),this.keys.down&&(this.py-=tc*e);for(const n of this.platforms)if(!n.crumbled&&Math.abs(this.py-n.y)<.4&&this.px>=n.x1&&this.px<=n.x2){this.climbPole=null,this.py=n.y,this.onGround=!0,this.jumpsLeft=2;return}(this.py<t.y1||this.py>t.y2)&&(this.climbPole=null),this.jumpTap&&(this.climbPole=null,this.vy=Ql*.85,this.jumpsLeft=1,this.keys.left?(this.vx=-Zs*1.3,this.facingRight=!1):this.keys.right&&(this.vx=Zs*1.3,this.facingRight=!0))}_physicsSwing(e){const t=this.swingBar,n=t.radius;if(this.swingOmega+=-(9.8/n)*Math.sin(this.swingAngle)*e,this.keys.left&&(this.swingOmega-=4*e),this.keys.right&&(this.swingOmega+=4*e),this.swingOmega*=.993,this.swingAngle+=this.swingOmega*e,this.px=t.anchorX+n*Math.sin(this.swingAngle),this.py=t.anchorY-n*Math.cos(this.swingAngle),this.facingRight=this.swingOmega>0,this.jumpTap){this.swingBar=null;const i=this.swingOmega*n;this.vx=i*Math.cos(this.swingAngle)*1.4,this.vy=Math.max(ec*.75,Math.abs(i)*.8+4),this.jumpsLeft=1,this.onGround=!1}for(const i of this.platforms)!i.crumbled&&this.px+Ti>i.x1&&this.px-Ti<i.x2&&Math.abs(this.py-i.y)<.4&&this.swingOmega<1.5&&(this.swingBar=null,this.py=i.y,this.vx=0,this.vy=0,this.onGround=!0,this.jumpsLeft=2)}_loseLife(){if(this.lives--,this._updateHearts(),this.lives<=0){this._end(!1);return}const e=Math.max(0,Math.floor(this.py/vt)-1);this.px=0,this.py=e*vt,this.vx=0,this.vy=0,this.onGround=!1,this.jumpsLeft=2,this.climbPole=null,this.swingBar=null}_end(e){if(this.gameOver)return;this.gameOver=!0,cancelAnimationFrame(this.rafId);const t=e?1:-.3,n=document.createElement("div");n.style.cssText=`
      position:absolute; top:50%; left:50%; transform:translate(-50%,-55%);
      background:rgba(0,0,0,0.88); padding:32px 40px;
      border-radius:22px; font-size:26px; font-weight:900; text-align:center;
      font-family:system-ui,sans-serif; z-index:200;
      box-shadow:0 8px 32px rgba(0,0,0,0.6);
      border:2px solid ${e?"#FFD700":"#C1666B"};
      color: ${e?"#FFD97A":"#FF6B6B"};
    `,n.innerHTML=e?'🏆 DELIVERED!<br><small style="font-size:15px;font-weight:500;color:#ccc;">Full pay — nice work, Jarrad.</small>':`💀 SCAFFOLD FAIL<br><small style="font-size:15px;font-weight:500;color:#ccc;">−30% penalty. Jarrad's blaming his phone.</small>`,this.overlay.appendChild(n),setTimeout(()=>{this._cleanup(),this.onCompleteFn({score:e?100:0,qualityPct:t,message:e?"Scaffold conquered!":"Scaffold failed — 30% deducted."})},e?1800:2200)}_cleanup(){cancelAnimationFrame(this.rafId),this.renderer.dispose(),this.overlay.dispatchEvent(new Event("remove")),this.overlay.remove()}mount(e,t){this.start(t)}unmount(){this.gameOver||(this.gameOver=!0,this._cleanup())}}class Xg{constructor(){E(this,"overlay");E(this,"active",!1);E(this,"trowelingGame",null);E(this,"scaffoldGame",null);E(this,"safetyTimer",null);this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,t.addEventListener("click",()=>{this.stop(),e({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(t),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),e({score:70,qualityPct:.7,message:"Time up!"}))},6e4),setTimeout(()=>{if(this.active)try{this.trowelingGame=new zg,this.trowelingGame.mount(this.overlay,n=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),e(n)})}catch(n){console.error("TrowelingGame init failed:",n);const i=document.createElement("div");i.style.cssText=`
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; height:100%; color:#fff;
          font-family:system-ui,sans-serif; gap:24px; padding:40px;
          text-align:center;
        `,i.innerHTML=`
          <div style="font-size:60px">🪣</div>
          <div style="font-size:30px; font-weight:800;">PLASTER APPLIED!</div>
          <div style="font-size:16px; opacity:0.7;">Tap DONE to collect your pay</div>
        `,this.overlay.appendChild(i)}},120)}startScaffold(e){this.stop(),this.active=!0,this.overlay.style.display="block",this.overlay.innerHTML="";const t=document.createElement("button");t.textContent="✓ DONE",t.style.cssText=`
      position: absolute; top: 16px; right: 16px;
      z-index: 10001;
      background: rgba(193,102,107,0.95);
      color: #fff; border: none; border-radius: 10px;
      padding: 12px 22px; font-size: 16px; font-weight: 800;
      cursor: pointer; font-family: system-ui, sans-serif;
      touch-action: manipulation;
    `,t.addEventListener("click",()=>{this.stop(),e({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(t),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),e({score:50,qualityPct:.5,message:"Time up on the scaffold!"}))},9e4),setTimeout(()=>{if(this.active)try{this.scaffoldGame=new Wg,this.scaffoldGame.mount(this.overlay,n=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),e(n)})}catch(n){console.error("ScaffoldGame init failed:",n);const i=document.createElement("div");i.style.cssText=`
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; height:100%; color:#fff;
          font-family:system-ui,sans-serif; gap:24px; padding:40px;
          text-align:center;
        `,i.innerHTML=`
          <div style="font-size:60px">🪣</div>
          <div style="font-size:30px; font-weight:800;">SCAFFOLD CLIMBED!</div>
          <div style="font-size:16px; opacity:0.7;">Tap DONE to collect your pay</div>
        `,this.overlay.appendChild(i)}},120)}startRandom(e){Math.random()<.5?this.startTroweling(e):this.startScaffold(e)}stop(){this.safetyTimer&&(clearTimeout(this.safetyTimer),this.safetyTimer=null),this.trowelingGame&&(this.trowelingGame.unmount(),this.trowelingGame=null),this.scaffoldGame&&(this.scaffoldGame.unmount(),this.scaffoldGame=null),this.overlay.style.display="none",this.overlay.innerHTML="",this.active=!1}}function dh(){return localStorage.getItem("tem-rush-btc-achieved")==="1"}function qg(o={}){const e=o.recipientName??"Apprentice Plasterer",t=o.dateStr??new Date().toLocaleDateString("en-AU",{day:"numeric",month:"long",year:"numeric"}),n=o.btcAchieved??dh(),i=900,s=n?820:640,a=document.createElement("canvas");a.width=i,a.height=s;const r=a.getContext("2d");r.fillStyle="#0D0B08",r.fillRect(0,0,i,s);const l=r.createLinearGradient(0,0,i,s);l.addColorStop(0,"rgba(40,32,20,0.95)"),l.addColorStop(.5,"rgba(28,22,14,0.98)"),l.addColorStop(1,"rgba(40,32,20,0.95)"),r.fillStyle=l,r.fillRect(0,0,i,s),r.strokeStyle="#C8A86A",r.lineWidth=3,r.strokeRect(18,18,i-36,s-36),r.strokeStyle="rgba(200,168,106,0.35)",r.lineWidth=1,r.strokeRect(26,26,i-52,s-52);const c=[[36,36],[i-36,36],[36,s-36],[i-36,s-36]];for(const[I,A]of c)r.strokeStyle="#C8A86A",r.lineWidth=1.5,r.beginPath(),r.arc(I,A,10,0,Math.PI*2),r.stroke(),r.beginPath(),r.arc(I,A,5,0,Math.PI*2),r.fillStyle="#C8A86A",r.fill();const h=i/2,d=74;r.fillStyle="#C8A86A",r.fillRect(h-3,d,6,22);for(let I=0;I<3;I++){const A=20-I*4,C=d-I*14;r.beginPath(),r.arc(h,C,A,0,Math.PI*2),r.fill()}r.textAlign="center",r.fillStyle="#C8A86A",r.font="700 11px 'Courier New', monospace",r.letterSpacing="4px",r.fillText("TROWELED EARTH MELBOURNE",i/2,148),r.fillStyle="rgba(200,168,106,0.45)",r.fillRect(i/2-180,158,360,1),r.fillStyle="#F0E8D8",r.font="900 34px system-ui, sans-serif",r.letterSpacing="0px",r.fillText("Certificate of Completion",i/2,200),r.fillStyle="rgba(200,168,106,0.45)",r.fillRect(i/2-220,214,440,1),r.fillStyle="rgba(240,232,216,0.55)",r.font="400 15px system-ui, sans-serif",r.fillText("This certifies that",i/2,258),r.fillStyle="#FFD97A",r.font="700 28px system-ui, sans-serif",r.fillText(e,i/2,300),r.fillStyle="rgba(200,168,106,0.45)",r.fillRect(i/2-200,312,400,1),r.fillStyle="rgba(240,232,216,0.55)",r.font="400 15px system-ui, sans-serif",r.fillText("has completed all TEM Rush training missions",i/2,348),r.fillText("and achieved full collection of Troweled Earth works.",i/2,372);const u=i/2-200,f=394,g=400,x=58;r.fillStyle="rgba(200,168,106,0.08)",r.strokeStyle="rgba(200,168,106,0.3)",r.lineWidth=1,r.beginPath(),r.roundRect(u,f,g,x,8),r.fill(),r.stroke(),r.fillStyle="#C8A86A",r.font="700 11px 'Courier New', monospace",r.letterSpacing="2px",r.fillText("QUALIFICATION",i/2,f+20),r.fillStyle="#F0E8D8",r.font="700 17px system-ui, sans-serif",r.letterSpacing="0px",r.fillText("TEM Rush — Plasterer's Apprentice",i/2,f+44);const m=i/2-160,p=466,w=320,S=52;r.fillStyle="rgba(193,102,107,0.15)",r.strokeStyle="rgba(193,102,107,0.5)",r.lineWidth=1.5,r.beginPath(),r.roundRect(m,p,w,S,8),r.fill(),r.stroke(),r.fillStyle="#C1666B",r.font="700 11px 'Courier New', monospace",r.letterSpacing="2px",r.fillText("5% OFF TEM STORE — USE CODE:",i/2,p+20),r.fillStyle="#FFD97A",r.font="900 20px system-ui, sans-serif",r.letterSpacing="3px",r.fillText("TEMRUSH5",i/2,p+41),r.letterSpacing="0px";const v=556;if(r.strokeStyle="rgba(200,168,106,0.4)",r.lineWidth=1,r.beginPath(),r.moveTo(i/2-260,v),r.lineTo(i/2-80,v),r.stroke(),r.beginPath(),r.moveTo(i/2+80,v),r.lineTo(i/2+260,v),r.stroke(),r.fillStyle="rgba(240,232,216,0.5)",r.font="400 12px system-ui, sans-serif",r.fillText("Matt Maloy",i/2-170,v+16),r.fillText(t,i/2+170,v+16),r.fillStyle="rgba(200,168,106,0.45)",r.font="400 10px 'Courier New', monospace",r.fillText("Director, Troweled Earth Melbourne",i/2-170,v+32),r.fillText("Date of Completion",i/2+170,v+32),r.fillStyle="rgba(200,168,106,0.06)",r.font="900 90px system-ui, sans-serif",r.save(),r.translate(i/2,s/2+20),r.rotate(-.18),r.fillText("CERTIFIED",0,0),r.restore(),n){r.strokeStyle="rgba(247,147,26,0.35)",r.lineWidth=1,r.beginPath(),r.moveTo(36,602),r.lineTo(i-36,602),r.stroke(),r.fillStyle="#F7931A",r.font="900 14px monospace",r.letterSpacing="2px",r.textAlign="center",r.fillText("₿  1 BITCOIN ACHIEVEMENT — BONUS REWARDS",i/2,624);const A=360,C=90,R=20,b=i/2-A-R/2,y=i/2+R/2,P=638,G=(k,W,q,X,ee)=>{r.fillStyle="rgba(247,147,26,0.10)",r.strokeStyle="rgba(247,147,26,0.40)",r.lineWidth=1,r.beginPath(),r.roundRect(k,W,A,C,8),r.fill(),r.stroke(),r.textAlign="center",r.fillStyle="#F7931A",r.font="700 11px monospace",r.letterSpacing="1px",r.fillText(`${q}  ${X}`,k+A/2,W+22),r.fillStyle="rgba(240,232,216,0.5)",r.font="400 11px system-ui",r.letterSpacing="0px",r.fillText("USE CODE AT CHECKOUT:",k+A/2,W+46),r.fillStyle="#FFD97A",r.font="900 18px monospace",r.letterSpacing="2px",r.fillText(ee,k+A/2,W+72)};G(b,P,"🎽","10% OFF TEM MERCH STORE","BTCPLASTER10"),G(y,P,"🪣","5% OFF MATERIAL SALES","BTCMAT5"),r.letterSpacing="0px",r.textAlign="center",r.fillStyle="rgba(200,168,106,0.4)",r.font="400 10px monospace",r.fillText("Present this certificate at participating TEM retail stores",i/2,746)}return a.toDataURL("image/png")}const Yg="https://troweledearthmelbourne.com.au",nc="TEMRUSH5",ic="tem-rush-cert-unlocked";class ys{constructor(){E(this,"overlay",null);E(this,"certDataUrl",null)}static isUnlocked(){return localStorage.getItem(ic)==="1"}trigger(){localStorage.setItem(ic,"1"),this._show(!0)}open(){ys.isUnlocked()&&this._show(!1)}_show(e){this.overlay&&(this.overlay.remove(),this.overlay=null),this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,this.overlay.appendChild(t);const n=document.createElement("div");n.style.cssText="display:flex; justify-content:flex-end;";const i=document.createElement("button");if(i.textContent="✕",i.style.cssText=`
      background: rgba(255,255,255,0.1); border: none;
      color: #fff; font-size: 18px; width: 38px; height: 38px;
      border-radius: 50%; cursor: pointer; touch-action: manipulation;
    `,i.addEventListener("click",()=>this._close()),n.appendChild(i),t.appendChild(n),e){const l=document.createElement("div");l.style.cssText=`
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
        <a href="${Yg}" target="_blank"
           style="color:#C8A86A; font-weight:700; text-decoration:none;">troweledearthmelbourne.com.au</a>
      </div>
      <div style="background:rgba(0,0,0,0.4); border:1px solid rgba(200,168,106,0.4); border-radius:10px;
                  padding:14px; text-align:center;">
        <div style="color:rgba(200,168,106,0.7); font-size:11px; letter-spacing:2px; margin-bottom:6px; font-family:monospace;">
          USE PROMO CODE AT CHECKOUT
        </div>
        <div style="color:#FFD97A; font-size:clamp(22px,7vw,32px); font-weight:900; letter-spacing:4px; font-family:monospace;">
          ${nc}
        </div>
      </div>
      <button id="copy-code-btn" style="
        background:rgba(200,168,106,0.15); border:1px solid rgba(200,168,106,0.4);
        color:#C8A86A; font-size:13px; font-weight:700; border-radius:8px;
        padding:10px; cursor:pointer; touch-action:manipulation; width:100%;
      ">📋 Copy Code</button>
    `,t.appendChild(s),setTimeout(()=>{const l=document.getElementById("copy-code-btn");l&&l.addEventListener("click",()=>{var c;(c=navigator.clipboard)==null||c.writeText(nc).then(()=>{l.textContent="✓ Copied!",setTimeout(()=>{l.textContent="📋 Copy Code"},2e3)})})},0);const a=document.createElement("div");a.style.cssText=`
      background: linear-gradient(135deg, rgba(200,168,106,0.12) 0%, rgba(200,168,106,0.05) 100%);
      border: 1.5px solid rgba(200,168,106,0.4);
      border-radius: 16px; padding: 20px;
      display: flex; flex-direction: column; gap: 12px;
    `,a.innerHTML=`
      <div style="color:#C8A86A; font-size:12px; font-weight:700; letter-spacing:2px;">📜  REWARD #2 — CERTIFICATE</div>
      <div style="color:#F0E8D8; font-size:clamp(14px,4vw,17px); line-height:1.6;">
        TEM Rush — Plasterer's Apprentice<br>
        <span style="color:rgba(240,232,216,0.55); font-size:13px;">Added to your TEM licence profile in-app.</span>
      </div>
    `;try{this.certDataUrl=qg({btcAchieved:dh()});const l=document.createElement("img");l.src=this.certDataUrl,l.style.cssText=`
        width:100%; border-radius:10px;
        border:1px solid rgba(200,168,106,0.3);
        cursor:pointer; touch-action:manipulation;
        box-shadow: 0 4px 20px rgba(0,0,0,0.6);
      `,l.title="Tap to view full certificate",l.addEventListener("click",()=>this._openCertFull()),a.appendChild(l)}catch(l){console.warn("Certificate render failed:",l)}const r=document.createElement("div");if(r.style.cssText="display:flex; gap:10px;",r.innerHTML=`
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
    `,a.appendChild(r),t.appendChild(a),setTimeout(()=>{var l,c;(l=document.getElementById("view-cert-btn"))==null||l.addEventListener("click",()=>this._openCertFull()),(c=document.getElementById("save-cert-btn"))==null||c.addEventListener("click",()=>this._downloadCert())},0),!document.getElementById("reward-styles")){const l=document.createElement("style");l.id="reward-styles",l.textContent=`
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
    `;const n=document.createElement("button");n.textContent="✕ Close",n.style.cssText=`
      margin-top: 16px; background: rgba(255,255,255,0.1); border: none;
      color: #fff; font-size: 15px; font-weight: 700;
      border-radius: 8px; padding: 10px 24px; cursor: pointer;
      touch-action: manipulation;
    `,n.addEventListener("click",()=>e.remove()),e.addEventListener("click",i=>{i.target===e&&e.remove()}),e.appendChild(t),e.appendChild(n),document.body.appendChild(e)}_downloadCert(){if(!this.certDataUrl)return;const e=document.createElement("a");e.href=this.certDataUrl,e.download="TEM-Rush-Certificate.png",e.click()}_close(){this.overlay&&(this.overlay.remove(),this.overlay=null)}}class jg{constructor(){E(this,"overlay",null);E(this,"rewardScreen",new ys)}show(){if(this.overlay){this.refresh(),this.overlay.style.display="flex";return}this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,t.textContent="📸 TEM PHOTO COLLECTION";const n=document.createElement("button");n.textContent="✕",n.style.cssText=`
      background: rgba(255,255,255,0.1); border: none;
      color: #fff; font-size: 20px; font-weight: 700;
      width: 40px; height: 40px; border-radius: 50%;
      cursor: pointer; flex-shrink: 0;
      touch-action: manipulation;
    `,n.addEventListener("click",()=>this.hide()),e.appendChild(t),e.appendChild(n),this.overlay.appendChild(e);const i=document.createElement("div");i.id="gallery-progress-wrap",i.style.cssText=`
      width: 100%; max-width: 600px;
      padding: 16px 20px 8px; box-sizing: border-box;
    `,this.overlay.appendChild(i);const s=document.createElement("div");s.id="gallery-grid",s.style.cssText=`
      width: 100%; max-width: 600px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      padding: 8px 20px 32px;
      box-sizing: border-box;
    `,this.overlay.appendChild(s);const a=document.createElement("div");a.id="gallery-encourage",a.style.cssText=`
      width: 100%; max-width: 600px;
      text-align: center;
      color: rgba(200,184,154,0.7);
      font-size: clamp(13px, 3vw, 16px);
      padding: 0 20px 40px;
      box-sizing: border-box;
    `,this.overlay.appendChild(a),this.overlay.addEventListener("click",r=>{r.target===this.overlay&&this.hide()}),document.body.appendChild(this.overlay),this.refresh()}refresh(){if(!this.overlay)return;const e=Es(),t=e.length,n=ai.length,i=this.overlay.querySelector("#gallery-progress-wrap");if(i){i.innerHTML="";const r=document.createElement("div");r.style.cssText=`
        color: #fff; font-size: clamp(13px,3vw,16px);
        font-weight: 700; margin-bottom: 8px;
      `,r.textContent=t>=n?`🏆 FULL COLLECTION — ${t}/${n}`:`Collection: ${t} / ${n}`,i.appendChild(r);const l=document.createElement("div");l.style.cssText=`
        width: 100%; height: 10px; background: rgba(255,255,255,0.1);
        border-radius: 6px; overflow: hidden;
      `;const c=document.createElement("div");c.style.cssText=`
        height: 100%; border-radius: 6px;
        background: ${t>=n?"#FFD700":"#C8B89A"};
        width: ${Math.round(t/n*100)}%;
        transition: width 0.5s ease;
      `,l.appendChild(c),i.appendChild(l)}const s=this.overlay.querySelector("#gallery-grid");s&&(s.innerHTML="",ai.forEach(r=>{const l=e.includes(r.id),c=document.createElement("div");if(c.style.cssText=`
          border-radius: 12px; overflow: hidden;
          position: relative; aspect-ratio: 4/3;
          background: ${l?"#1a1a14":"rgba(255,255,255,0.04)"};
          border: 1.5px solid ${l?"rgba(200,184,154,0.4)":"rgba(255,255,255,0.08)"};
          box-shadow: 0 2px 12px rgba(0,0,0,0.5);
        `,l){const h=document.createElement("img");h.src=r.file,h.alt=r.name,h.style.cssText=`
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
          `,d.textContent=r.name,c.appendChild(d)}else{const h=document.createElement("div");h.style.cssText=`
            width: 100%; height: 100%;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            gap: 8px;
          `,h.innerHTML=`
            <div style="font-size: clamp(24px,8vw,40px); opacity:0.35;">🔒</div>
            <div style="color:rgba(255,255,255,0.25); font-size:clamp(12px,3vw,16px); font-weight:700;">???</div>
          `,c.appendChild(h)}s.appendChild(c)}));const a=this.overlay.querySelector("#gallery-encourage");a&&(t>=n?(a.innerHTML=`
          <div style="margin-bottom:12px;">🏆 You've scraped them all. Matt's proud. Sort of.</div>
          <button id="gallery-rewards-btn" style="
            background: linear-gradient(135deg,#C8A86A,#A07840);
            color:#0D0B08; border:none; border-radius:12px;
            padding:14px 28px; font-size:15px; font-weight:900;
            cursor:pointer; touch-action:manipulation;
            letter-spacing:0.5px; box-shadow:0 4px 16px rgba(200,168,106,0.35);
          ">🎁 View Rewards &amp; Certificate</button>
        `,setTimeout(()=>{var r;(r=document.getElementById("gallery-rewards-btn"))==null||r.addEventListener("click",()=>{this.hide(),this.rewardScreen.open()})},0)):t>=6?a.textContent="🔥 Almost there — keep scraping!":t>=3?a.textContent="💪 Nice collection forming. More plastering to do!":t===0?a.textContent="🪣 No photos yet — complete jobs to reveal TEM work!":a.textContent="✨ Keep scraping to unlock all 8 TEM photos!")}hide(){this.overlay&&(this.overlay.style.display="none")}}const sc=[15087942,2201331,16757504,5025616,10233776,16739125],oc=14,rc=8,$g=6,ac=.6;function Jg(o){const e=new Ne,t=new j({color:o}),n=new D(new K(3.5,1.2,6.5),t);n.position.set(0,.6,0),n.castShadow=!0,e.add(n);const i=new j({color:o}),s=new D(new K(2.5,.9,3.5),i);s.position.set(0,1.65,0),s.castShadow=!0,e.add(s);const a=new j({color:1118481}),r=[[-1.8,.4,2.2],[1.8,.4,2.2],[-1.8,.4,-2.2],[1.8,.4,-2.2]];for(const[d,u,f]of r){const g=new D(new We(.5,.5,.4,8),a);g.rotation.z=Math.PI/2,g.position.set(d,u,f),g.castShadow=!0,e.add(g)}const l=new j({color:3359829}),c=new D(new K(2.3,.7,.1),l);c.position.set(0,1.4,-3.3),e.add(c);const h=new D(new K(2.3,.7,.1),l);return h.position.set(0,1.4,3.3),e.add(h),e}function Kg(o,e){return o==="x"?e===1?-Math.PI/2:Math.PI/2:e===1?Math.PI:0}class Zg{constructor(e){E(this,"cars",[]);E(this,"scene");this.scene=e,this._spawn()}_spawn(){const e=[-200,-160,-120,-80,-40,0,40,80,120,160,200],t=n=>{const i=sc[Math.floor(Math.random()*sc.length)],s=Jg(i),a=e[Math.floor(Math.random()*e.length)],r=Math.random()>.5?2:-2,l=10+Math.random()*10,c=Math.random()>.5?1:-1,h=-200+Math.random()*400;s.rotation.y=Kg(n,c);const d={group:s,axis:n,roadPos:a,laneOffset:r,baseSpeed:l,currentSpeed:l,dir:c,pos:h,nudgeVel:0};this.cars.push(d),this.scene.add(s),this._applyPosition(d)};for(let n=0;n<14;n++)t("z");for(let n=0;n<14;n++)t("x")}_applyPosition(e){e.axis==="x"?e.group.position.set(e.pos,0,e.roadPos+e.laneOffset):e.group.position.set(e.roadPos+e.laneOffset,0,e.pos)}update(e,t,n){for(const i of this.cars){const s=i.group.position.x,a=i.group.position.z;let r=1/0,l=1/0;if(i.axis==="x"){const d=(t-s)*i.dir;l=Math.abs(n-a),r=d}else{const d=(n-a)*i.dir;l=Math.abs(t-s),r=d}const c=l<5,h=r>0&&r<oc;if(c&&h){const d=Math.max(0,(r-rc)/(oc-rc));i.currentSpeed=i.baseSpeed*d}else i.currentSpeed=Math.min(i.baseSpeed,i.currentSpeed+$g*e);Math.abs(i.nudgeVel)>.05?(i.pos+=i.nudgeVel*e,i.nudgeVel*=Math.max(0,1-6*e)):i.nudgeVel=0,i.pos+=i.dir*i.currentSpeed*e,i.pos>235&&(i.pos=-235),i.pos<-235&&(i.pos=235),this._applyPosition(i)}}resolveVan(e,t,n=1.8){let i=e,s=t,a=!1;for(const r of this.cars){const l=r.group.position.x,c=r.group.position.z,h=(r.axis==="x"?3.25:1.75)+n,d=(r.axis==="x"?1.75:3.25)+n,u=i-l,f=s-c;if(Math.abs(u)<h&&Math.abs(f)<d){const g=h-Math.abs(u),x=d-Math.abs(f);if(g<x){const m=u<0?-1:1;i+=m*g,r.axis==="x"&&(r.nudgeVel+=m*ac*-1*r.dir)}else{const m=f<0?-1:1;s+=m*x,r.axis==="z"&&(r.nudgeVel+=m*ac*-1*r.dir)}r.currentSpeed=0,a=!0}}return{x:i,z:s,hit:a}}checkVanCollision(e,t){const n=this.resolveVan(e,t);return{hit:n.hit,pushX:n.x-e,pushZ:n.z-t}}}const lc=[16032353,15167313,2792847,2508371,15320170,11066076,16739179,7029286],Qg=16767916,ex=40,cc=8;function tx(o){const e=new Ne,t=new j({color:o}),n=new j({color:Qg}),i=new j({color:o}),s=new D(new We(.3,.35,1.1,7),t);s.position.set(0,.55,0),e.add(s);const a=new D(new dt(.28,6,5),n);a.position.set(0,1.28,0),e.add(a);const r=new D(new K(.15,.65,.15),t);r.position.set(-.45,.75,0),r.rotation.z=.15,e.add(r);const l=new D(new K(.15,.65,.15),t);l.position.set(.45,.75,0),l.rotation.z=-.15,e.add(l);const c=new D(new K(.18,.55,.18),i);c.position.set(-.18,0,.05),e.add(c);const h=new D(new K(.18,.55,.18),i);return h.position.set(.18,0,-.05),e.add(h),{group:e,leftArm:r,rightArm:l,leftLeg:c,rightLeg:h}}class nx{constructor(e){E(this,"pedestrians",[]);E(this,"scene");this.scene=e,this._spawn()}_spawn(){const e=[];for(let n=-200;n<=200;n+=40)e.push(n);const t=n=>{const i=lc[Math.floor(Math.random()*lc.length)],{group:s,leftArm:a,rightArm:r,leftLeg:l,rightLeg:c}=tx(i),h=e[Math.floor(Math.random()*e.length)],d=Math.random()>.5?5:-5,u=h+d,f=[];for(let I=-240;I<240;I+=40)f.push(I);const g=f[Math.floor(Math.random()*f.length)],x=g+cc/2,m=g+ex-cc/2,p=x+Math.random()*(m-x),w=Math.random()>.5?1:-1,S=2+Math.random()*1.5,v={group:s,axis:n,roadPos:u,segStart:x,segEnd:m,pos:p,dir:w,speed:S,scattering:!1,scatterTimer:0,scatterDirX:0,scatterDirZ:0,walkCycle:Math.random()*Math.PI*2,leftArm:a,rightArm:r,leftLeg:l,rightLeg:c};this.pedestrians.push(v),this.scene.add(s),this._applyPosition(v),this._applyFacing(v)};for(let n=0;n<20;n++)t("x");for(let n=0;n<20;n++)t("z")}_applyPosition(e){e.axis==="x"?e.group.position.set(e.pos,0,e.roadPos):e.group.position.set(e.roadPos,0,e.pos)}_applyFacing(e){if(e.scattering){e.group.rotation.y=Math.atan2(e.scatterDirX,e.scatterDirZ);return}e.axis==="x"?e.group.rotation.y=e.dir===1?-Math.PI/2:Math.PI/2:e.group.rotation.y=e.dir===1?Math.PI:0}update(e,t,n){for(const i of this.pedestrians){const s=i.group.position.x,a=i.group.position.z,r=s-t,l=a-n,c=Math.sqrt(r*r+l*l);if(!i.scattering&&c<7){i.scattering=!0,i.scatterTimer=2.5;const u=Math.max(c,.01);i.scatterDirX=r/u,i.scatterDirZ=l/u}i.scattering?(i.group.position.x+=i.scatterDirX*12*e,i.group.position.z+=i.scatterDirZ*12*e,i.scatterTimer-=e,i.scatterTimer<=0&&(i.scattering=!1,i.axis==="x"?i.pos=Math.max(i.segStart,Math.min(i.segEnd,i.group.position.x)):i.pos=Math.max(i.segStart,Math.min(i.segEnd,i.group.position.z)),this._applyPosition(i))):(i.pos+=i.dir*i.speed*e,i.pos>=i.segEnd?(i.pos=i.segEnd,i.dir=-1):i.pos<=i.segStart&&(i.pos=i.segStart,i.dir=1),this._applyPosition(i)),this._applyFacing(i);const h=i.scattering?12:i.speed;i.walkCycle+=h*e*2;const d=Math.sin(i.walkCycle);i.leftArm.rotation.z=d*.4+.15,i.rightArm.rotation.z=-d*.4-.15,i.leftLeg.rotation.x=d*.5,i.rightLeg.rotation.x=-d*.5}}}const yn=class yn{constructor(e){E(this,"indicator");E(this,"scene");E(this,"lastVisit",-30);this.scene=e,this.indicator=new D(new dt(1.5,10,8),new j({color:13918762,emissive:new be(10498064),emissiveIntensity:.8})),this.indicator.position.set(yn.POS.x,10,yn.POS.z),this.scene.add(this.indicator)}update(e){this.indicator.position.y=10+Math.sin(Date.now()*.002)*.5,this.indicator.rotation.y+=e*1.5}isNearby(e,t){const n=e-yn.POS.x,i=t-yn.POS.z;return Math.sqrt(n*n+i*i)<yn.TRIGGER_RADIUS}tryVisit(e,t){if(!this.isNearby(e,t))return!1;const n=Date.now()/1e3;return n-this.lastVisit<20?!1:(this.lastVisit=n,!0)}};E(yn,"POS",{x:-60,z:-100}),E(yn,"TRIGGER_RADIUS",12);let sa=yn;class ix{constructor(){E(this,"level",0);E(this,"isUrgent",!1);E(this,"lastUrgentToast",0);E(this,"caffeinated",!1);E(this,"caffeineTimer",0)}update(e,t){this.caffeinated&&(this.caffeineTimer-=e,this.caffeineTimer<=0&&(this.caffeinated=!1));const n=this.caffeinated?.018:.012;Math.abs(t)>2?this.level=Math.min(1,this.level+e*n):this.level=Math.max(0,this.level-e*.005),this.isUrgent=this.level>.8}drinkCoffee(){this.level=Math.min(1,this.level+.4),this.caffeinated=!0,this.caffeineTimer=30,this.isUrgent=this.level>.8}tryRelief(e,t){const n=e-100,i=t-60;return Math.sqrt(n*n+i*i)>14||this.level===0?!1:(this.level=0,this.isUrgent=!1,this.caffeinated=!1,this.caffeineTimer=0,!0)}get spillMultiplier(){return this.isUrgent?1.8:1}}const as={x:30,z:28},hc=["Got a dollar, mate? 💸","You got a light? 🚬","Nice van. Does it leak?","My brother Jarrad says I'm not qualified. He's right but I don't like it.","These boots were not made for plastering. Yet here we are.","Jump in? No seriously, I need a lift.","Jarrad says he's read the TDS. He hasn't. I've lived with him.","You look like you need a coffee and a toilet. In that order.","Phil owes me fifty bucks. Pass it on.","I plastered that wall. Don't tell Jarrad.","Matt left the primer lid off again. Just letting you know."],ps=class ps{constructor(e){E(this,"wrapper");E(this,"character");E(this,"ropeRing");E(this,"ropePivot");E(this,"lastDialogue",0);E(this,"cooldown",9e3);this.character=new Ss(zn.Mikayla),this.character.group.scale.set(2,2,2);const t=this.character.buildJumpRopeClip();this.character.mixer.stopAllAction(),this.character.mixer.clipAction(t).play(),this.ropePivot=new Ne,this.ropePivot.position.set(0,1.3,0),this.ropePivot.rotation.y=Math.PI/2,this.character.group.add(this.ropePivot),this.ropeRing=new D(new Mo(1.35,.05,7,28),new j({color:8079902})),this.ropePivot.add(this.ropeRing);const n=this._makeNameBoard();n.position.set(0,8.8,0);const i=new D(new hi(1.2,1.7,32),new Ht({color:14501e3,side:zt}));i.rotation.x=-Math.PI/2,i.position.y=.05,this.wrapper=new Ne,this.wrapper.add(this.character.group),this.wrapper.add(n),this.wrapper.add(i),this.wrapper.position.set(as.x,0,as.z),e.add(this.wrapper)}_makeNameBoard(){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d");t.fillStyle="rgba(190, 40, 90, 0.88)",t.roundRect?t.roundRect(2,2,252,60,8):t.rect(2,2,252,60),t.fill(),t.fillStyle="#fff",t.font="bold 30px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("MIKAYLA",128,32);const n=new ws(e);return new D(new ht(2.4,.6),new Ht({map:n,transparent:!0,depthWrite:!1}))}update(e,t,n,i){this.character.update(e),this.ropeRing.rotation.z+=e*(2*Math.PI/rh);const s=t-as.x,a=n-as.z;this.character.group.rotation.y=Math.atan2(s,a);const r=Math.sqrt(s*s+a*a),l=Date.now();if(r<ps.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=hc[Math.floor(Math.random()*hc.length)];return i.show(zn.Mikayla,c),this.lastDialogue=l,!0}return!1}dispose(e){e.remove(this.wrapper)}};E(ps,"POS",as),E(ps,"TRIGGER_RADIUS",15);let ni=ps;const ls={x:-4,z:-6},dc=["Ha ha ha HA HA! You picked up ze buckets! Love it!","I mix ze plaster by hand. Za gloves are for ze weak.","In Germany, zis would be a warm-up. But I like Australia. Ze mud here is good.","I have mud wrestled ze entire Brunswick football club. Zey lost. Badly.","Ze mixing ratio is one part water, two parts product, one part pure power.","Last Saturday I wrestled a man twice my size. Sunday I mixed 50 buckets. Your turn.","Don't let ze hair fool you. I once arm wrestled Phil. He is still talking about it.","Ha HA! You are funny. Not as funny as ze last guy. But funny."],ms=class ms{constructor(e){E(this,"wrapper");E(this,"character");E(this,"lastDialogue",0);E(this,"cooldown",1e4);E(this,"audioCtx",null);this.character=new Ss(zn.Connie),this.character.group.scale.set(2,2.35,2);const t=new j({color:15789544}),n=new D(new dt(.16,8,6),t);n.position.set(-.12,1.55,.19);const i=new D(new dt(.16,8,6),t);i.position.set(.12,1.55,.19),this.character.group.add(n),this.character.group.add(i),this.character.setLogoTexture(ih(zn.Connie.shirtColor));const s=this._makeNameBoard();s.position.set(0,8.8,0);const a=new D(new hi(1.2,1.7,32),new Ht({color:16109664,side:zt}));a.rotation.x=-Math.PI/2,a.position.y=.05,this.wrapper=new Ne,this.wrapper.add(this.character.group),this.wrapper.add(s),this.wrapper.add(a),this.wrapper.position.set(ls.x,0,ls.z),e.add(this.wrapper)}_makeNameBoard(){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d");return t.fillStyle="rgba(200, 150, 20, 0.88)",t.roundRect?t.roundRect(2,2,252,60,8):t.rect(2,2,252,60),t.fill(),t.fillStyle="#fff",t.font="bold 30px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("CONNIE",128,32),new D(new ht(2.4,.6),new Ht({map:new ws(e),transparent:!0,depthWrite:!1}))}playLaugh(){try{this.audioCtx||(this.audioCtx=new(window.AudioContext||window.webkitAudioContext));const e=this.audioCtx,t=7;for(let n=0;n<t;n++){const i=e.currentTime+n*.16,s=e.createOscillator(),a=e.createGain(),r=480+n*18+Math.random()*60;s.frequency.setValueAtTime(r,i),s.frequency.exponentialRampToValueAtTime(r*.48,i+.13),a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(.35,i+.03),a.gain.exponentialRampToValueAtTime(.001,i+.15),s.connect(a),a.connect(e.destination),s.start(i),s.stop(i+.17)}}catch{}}update(e,t,n,i){this.character.update(e);const s=t-ls.x,a=n-ls.z;this.character.group.rotation.y=Math.atan2(s,a);const r=Math.sqrt(s*s+a*a),l=Date.now();if(r<ms.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=dc[Math.floor(Math.random()*dc.length)];return i.show(zn.Connie,c),this.lastDialogue=l,!0}return!1}dispose(e){var t;e.remove(this.wrapper),(t=this.audioCtx)==null||t.close()}};E(ms,"POS",ls),E(ms,"TRIGGER_RADIUS",16);let fs=ms;const sx={Connie:{scale:[2,2.35,2],addGeometry:o=>{const e=new j({color:15789544}),t=new D(new dt(.16,8,6),e);t.position.set(-.12,1.55,.19);const n=new D(new dt(.16,8,6),e);n.position.set(.12,1.55,.19),o.add(t),o.add(n)}},Mikayla:{scale:[1.9,1.9,1.9]}};class ox{constructor(){E(this,"renderer");E(this,"scene");E(this,"camera");E(this,"canvas");E(this,"cache",new Map);this.canvas=document.createElement("canvas"),this.canvas.width=160,this.canvas.height=160,this.renderer=new va({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(160,160),this.renderer.setClearColor(0,0),this.scene=new _a;const e=new Ma(16777215,.7);this.scene.add(e);const t=new Gi(16774624,1);t.position.set(2,4,5),this.scene.add(t);const n=new Gi(14741759,.4);n.position.set(-3,2,3),this.scene.add(n),this.camera=new Dt(38,1,.1,100),this.camera.position.set(1.2,5,5.5),this.camera.lookAt(.1,3.8,0)}renderPortrait(e){var c;if(this.cache.has(e.name))return this.cache.get(e.name);this.scene.children.filter(h=>!(h instanceof Ms)).forEach(h=>this.scene.remove(h));const n=sx[e.name],i=new Ss(e),[s,a,r]=(n==null?void 0:n.scale)??[2,2,2];i.group.scale.set(s,a,r),i.group.rotation.y=-Math.PI*.18,(c=n==null?void 0:n.addGeometry)==null||c.call(n,i.group),this.scene.add(i.group),this.renderer.render(this.scene,this.camera);const l=this.canvas.toDataURL("image/png");return this.cache.set(e.name,l),this.scene.remove(i.group),l}dispose(){this.renderer.dispose()}}class rx{constructor(){E(this,"container");E(this,"portrait");E(this,"nameEl");E(this,"textEl");E(this,"portraitRenderer");E(this,"hideTimeout",null);E(this,"visible",!1);this.portraitRenderer=new ox,this._injectStyles(),this._buildDOM()}_injectStyles(){if(document.getElementById("speech-bubble-styles"))return;const e=document.createElement("style");e.id="speech-bubble-styles",e.textContent=`
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
    `,document.head.appendChild(e)}_buildDOM(){this.container=document.createElement("div"),this.container.id="tem-speech-bubble";const e=document.createElement("div");e.className="sb-portrait-wrap",this.portrait=document.createElement("img"),this.portrait.className="sb-portrait-img",e.appendChild(this.portrait);const t=document.createElement("div");t.className="sb-text-area",this.nameEl=document.createElement("span"),this.nameEl.className="sb-name",this.textEl=document.createElement("span"),this.textEl.className="sb-text",t.appendChild(this.nameEl),t.appendChild(this.textEl),this.container.appendChild(e),this.container.appendChild(t),document.body.appendChild(this.container)}show(e,t){this.nameEl.textContent=e.name,this.textEl.textContent=t,this.portrait.src=this.portraitRenderer.renderPortrait(e),this.container.style.display="flex",requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.container.classList.add("sb-visible")})}),this.visible=!0,this.hideTimeout!==null&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(()=>this.hide(),1e4)}setScreenPosition(e,t){this.container.style.left=`${e}px`,this.container.style.top=`${t}px`}hide(){this.container.classList.remove("sb-visible"),this.visible=!1,setTimeout(()=>{this.visible||(this.container.style.display="none")},220)}isVisible(){return this.visible}dispose(){this.portraitRenderer.dispose(),document.body.removeChild(this.container)}}const cs=15;class ax{constructor(){E(this,"overlay");E(this,"titleEl");E(this,"bodyEl");E(this,"sloganEl");E(this,"hintEl");E(this,"progressBar");E(this,"_active",!1);E(this,"_readyToResume",!1);E(this,"_resumeCallback",null);E(this,"_lockTimer",null);E(this,"_countdownInterval",null);E(this,"_autoTimer",null);E(this,"_secondsLeft",cs);if(!document.getElementById("dp-styles")){const r=document.createElement("style");r.id="dp-styles",r.textContent=`
        @keyframes dpBlink { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes dpSlideUp { from{transform:translateY(36px);opacity:0} to{transform:translateY(0);opacity:1} }
        @keyframes dpDrain { from{width:100%} to{width:0%} }
      `,document.head.appendChild(r)}this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,i.appendChild(this.progressBar);const s=document.createElement("div");s.style.cssText="padding: 16px 20px 4px;",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText=`
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
    `;const a=document.createElement("div");a.style.cssText=`
      color: rgba(193,102,107,0.75);
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      padding: 10px 0 16px;
      letter-spacing: 0.6px;
      animation: dpBlink 1.2s ease-in-out infinite;
    `,a.textContent="▶  TAP GAS or REV to skip",t.appendChild(this.titleEl),t.appendChild(n),s.appendChild(this.bodyEl),e.appendChild(t),e.appendChild(i),e.appendChild(s),e.appendChild(this.sloganEl),e.appendChild(a),this.overlay.appendChild(e),document.body.appendChild(this.overlay),this.overlay.addEventListener("touchstart",r=>{r.preventDefault(),this.tryResume()},{passive:!1}),this.overlay.addEventListener("click",()=>this.tryResume())}show(e,t,n,i,s){this._clearTimers(),this._active=!0,this._readyToResume=!1,this._resumeCallback=n,this._secondsLeft=cs,this.titleEl.textContent=e,this.bodyEl.textContent=t,this.sloganEl.textContent=i??"",this.sloganEl.style.display=i?"block":"none",this.hintEl.textContent=String(cs),this.overlay.style.display="flex",this.progressBar.style.transition="none",this.progressBar.style.width="100%",this.progressBar.offsetWidth,this.progressBar.style.transition=`width ${cs}s linear`,this.progressBar.style.width="0%",this._lockTimer=setTimeout(()=>{this._readyToResume=!0},380),this._countdownInterval=setInterval(()=>{this._secondsLeft=Math.max(0,this._secondsLeft-1),this.hintEl.textContent=String(this._secondsLeft)},1e3),this._autoTimer=setTimeout(()=>{this._forceResume()},cs*1e3)}tryResume(){!this._active||!this._readyToResume||this._doResume()}_forceResume(){this._active&&this._doResume()}_doResume(){this._active=!1,this._readyToResume=!1,this.overlay.style.display="none",this._clearTimers();const e=this._resumeCallback;this._resumeCallback=null,e==null||e()}_clearTimers(){this._lockTimer&&(clearTimeout(this._lockTimer),this._lockTimer=null),this._autoTimer&&(clearTimeout(this._autoTimer),this._autoTimer=null),this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}get isActive(){return this._active}}const lr=[`Our finishes don't copy the earth.
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
We're on our way.`],cr=["DRIVING TIP: The spill meter doesn't care about your excuses. Neither does the road.","DRIVING TIP: Traffic in Melbourne has never once moved for a plastering van. You are not the exception.","DRIVING TIP: Hitting a car at speed is, technically, texture development. We do not recommend it.","DRIVING TIP: The crew will comment on your driving. They are not wrong.","DRIVING TIP: Every bump is just the plaster finding its character. That's what you're telling yourself.","CREW TIP: Tsuyoshi once vaulted into a moving van. He's done it again. You weren't watching.","CREW TIP: Phil will finish his tea before he gets in. Always. Plan for this.","CREW TIP: Jose was ready before you left the workshop. He's been ready since Tuesday.","CREW TIP: Jarrad has been standing there fifteen minutes. He will mention it.","CREW TIP: Fabio is smiling. He's also judging your gearwork. Smile back.","CLIENT TIP: Brad has never been to Europe. The wall will be 'very European' regardless.","CLIENT TIP: Darren is stressed. Darren is always stressed. The wall is fine. Darren is not.","CLIENT TIP: Patricia has read the full TDS. She's highlighted it. She will quiz you.","CLIENT TIP: Zephyr tried to do it himself. You're not here to judge. You are here to fix it.","CLIENT TIP: Mustafa's health inspector doesn't ask questions. You shouldn't either.","HEALTH TIP: Coffee steadies the trowel. What it does to the bladder is your problem.","HEALTH TIP: The toilet block is 100 metres east of the intersection. You know this now.","HEALTH TIP: Hydration is important. Timing is more important.","HEALTH TIP: The barista knows your order. So does your bladder.","BUSINESS TIP: TEM has been in business since before your GPS was a thing. Follow the waypoint anyway.","BUSINESS TIP: Quality render takes time. So does finding parking. Plan accordingly.","BUSINESS TIP: A finish that breathes with the wall is worth more than one that cracks by Thursday. Ask Zephyr.","BUSINESS TIP: Authenticity cannot be rushed. Darren is rushing you. Do your best.","The road to perfection runs through three crew pickups, a coffee stop, and a very urgent toilet.","Connie has seen everything. She is still laughing.","The van has been in worse situations. The plaster has not.","This city has 240 square units of roads and exactly one decent flat white. Find it.",`The walls remember every hand that shaped them.
The van remembers nothing. Drive carefully.`],lx=["One wall. One chance. The render decides everything.","A surface waiting to become something real.","From bare substrate to finished art — this is the job.",`The craft doesn't care about the deadline.
You do. Get there.`,"Clients don't buy plaster. They buy the moment the wall changes everything.",`Not every wall gets a second coat.
This one does. Make it count.`,"The difference between ordinary and extraordinary is one hand-applied layer.","Somewhere between the bucket and the wall, something real happens.",`They called TEM because they want it done right.
Don't prove them wrong.`,"This isn't a wall. It's a surface waiting to breathe."];function Jn(o){return o[Math.floor(Math.random()*o.length)]}const Ai="./",On={theme:`${Ai}audio/credits.m4a`,theme2:`${Ai}audio/theme2.aac`,credits:`${Ai}audio/theme.m4a`,radio1:`${Ai}audio/radio1.m4a`,radio2:`${Ai}audio/radio2.m4a`,radio3:`${Ai}audio/radio3.m4a`},Kn=[{id:"tem-fm",name:"TEM FM",freq:"88.3",tagline:"Melbourne's Most Refined",songs:["★ Troweled Earth (The Anthem) [LIVE]","Fresh Plaster Dreams","Tadelakt Sunrise","Ochre & Ochre","Marbellino Midnight","Render Slowly (feat. Phil)"],dj:["TEM FM — opening tonight with the anthem. Turn it up.","That was Troweled Earth — The Anthem. Written on site, finished in the van.","You're listening to TEM FM. Don't spill.","Smooth surfaces. Smoother sounds. TEM FM 88.3.","That was a certified classic. Like a three-coat stucco system.","Blood red clay to concrete's cold embrace... TEM FM."],bpm:68,rootHz:220,vibe:"ambient",color:"#C8A86A",audioFile:On.theme},{id:"connie-gold",name:"CONNIE'S GOLD",freq:"103.7",tagline:"For the Craft, Darling",songs:["Quando Quando Quando (In the Van)","Bella Ciao Bella Render","Volare Trowel","Arrivederci Deadline","O Sole Mio Stucco"],dj:["Ehhhh — welcome to Connie's Gold! Ha ha ha ha!","You're listening to the best station. Connie said so. She's right.","Connie's Gold 103.7 — music to plaster by, darling.","Next up: another classic. Just like our Antique Stucco. Ha!"],bpm:92,rootHz:261.63,vibe:"italian",color:"#E8A050",audioFile:On.radio1},{id:"brunswick-beats",name:"BRUNSWICK BEATS",freq:"99.9",tagline:"Lo-Fi for Lo-Fi People",songs:["study playlist #47","plaster & chill","waiting for jarrad (again)","lost my trowel","bladder full, waypoint far"],dj:["Brunswick Beats. For people who get it.","That was a vibe. This is also a vibe. 99.9.","We don't talk. We just play the music. Brunswick Beats.","Jarrad submitted this playlist. He says it slaps. It does."],bpm:80,rootHz:196,vibe:"lofi",color:"#8B9EC8",audioFile:On.radio2},{id:"the-scaffold",name:"THE SCAFFOLD",freq:"107.1",tagline:"Tune In, Fall Off",songs:["30% Penalty (Acoustic)","Epstein Was Right (Radio Edit)","Topknot Thunder","Hard Hat? Never Heard of Her","Five Floors No Fear"],dj:["THE SCAFFOLD. 107.1. You WILL survive the jump.","That riff goes harder than Tsuyoshi vaulting the van door.","Tune in. Fall off. THE SCAFFOLD.","Jarrad called in. Said he's been waiting fifteen minutes. Legend."],bpm:140,rootHz:164.81,vibe:"rock",color:"#C1666B"},{id:"fabio-pizza",name:"FABIO'S PIZZA RADIO",freq:"92.5",tagline:"Music for Real Men",songs:['Ehhhh (12" Extended Mix)',"San Marzano Morning","La Dolce Trowel","One Slice, Two Slice","Thin Base, Wood Fire (feat. Fabio)"],dj:["Fabio's Pizza Radio — ehhhh. That is all.","You're listening to 92.5. The pizza is coming. Be patient. Ehhhh.","That song — like a perfect margherita. Simple. Honest. Ehhhh.","Fabio's Pizza Radio. For men with trowels and good taste."],bpm:108,rootHz:246.94,vibe:"italian",color:"#D4602A",audioFile:On.radio3},{id:"tem-talk",name:"TEM TALK",freq:"91.1",tagline:"Conversations From the Site",songs:["★ The Troweled Earth Podcast [LIVE]","Deep Dive: Blood Red Clay vs Venetian","Interview: Matt on the Warlord Method","Ask Connie — Running a Crew in Melbourne","Five Years of Tadelakt with Tsuyoshi"],dj:["TEM Talk 91.1 — real conversations from the trade.","You're listening to Melbourne's only plastering podcast. TEM Talk.","That was a conversation worth replaying. 91.1 FM.","Next up: more from the TEM crew. Stick around."],bpm:70,rootHz:180,vibe:"ambient",color:"#90B0C0",audioFile:On.theme2}];class cx{constructor(){E(this,"ctx",null);E(this,"masterGain");E(this,"scheduleAhead",.1);E(this,"scheduleInterval",.05);E(this,"nextBeatTime",0);E(this,"beatCount",0);E(this,"currentStation",null);E(this,"nodes",[]);E(this,"schedulerTimer",0);E(this,"compressor");E(this,"realAudioEl",null);E(this,"realAudioActive",!1)}init(){try{return this.ctx=new(window.AudioContext||window.webkitAudioContext),this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.ratio.value=4,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.18,this.masterGain.connect(this.compressor),this.compressor.connect(this.ctx.destination),!0}catch{return!1}}setVolume(e){this.masterGain&&(this.masterGain.gain.value=e),this.realAudioEl&&(this.realAudioEl.volume=Math.min(1,e*4))}play(e){var t;if(this.stop(),this.currentStation=e,this.beatCount=0,e.audioFile){const n=Math.min(1,(((t=this.masterGain)==null?void 0:t.gain.value)??.18)*4.5),i=new Audio;i.src=e.audioFile,i.loop=!0,i.volume=n;const s=i.play();s!==void 0?s.then(()=>{this.realAudioEl=i,this.realAudioActive=!0}).catch(()=>{this.realAudioActive=!1,this._startGenerative()}):(this.realAudioEl=i,this.realAudioActive=!0)}else this._startGenerative()}_startGenerative(){!this.ctx||!this.currentStation||(this.ctx.state==="suspended"&&this.ctx.resume(),this.nextBeatTime=this.ctx.currentTime+.05,this.schedulerTimer=window.setInterval(()=>this._schedule(),this.scheduleInterval*1e3))}stop(){clearInterval(this.schedulerTimer),this.nodes.forEach(e=>{var t;try{(t=e.stop)==null||t.call(e),e.disconnect()}catch{}}),this.nodes=[],this.currentStation=null,this.realAudioEl&&(this.realAudioEl.pause(),this.realAudioEl.src="",this.realAudioEl=null),this.realAudioActive=!1}_schedule(){if(!this.ctx||!this.currentStation)return;const e=this.ctx.currentTime+this.scheduleAhead;for(;this.nextBeatTime<e;){this._scheduleBeat(this.nextBeatTime,this.beatCount,this.currentStation);const t=this.currentStation.bpm/60;this.nextBeatTime+=1/t,this.beatCount++}}_scheduleBeat(e,t,n){const i=Math.floor(t/4),s=t%4,a=n.rootHz;switch(n.vibe){case"ambient":this._ambientBeat(e,t,a);break;case"lofi":this._lofiBeat(e,s,a);break;case"rock":this._rockBeat(e,s,i,a);break;case"italian":this._italianBeat(e,s,i,a);break;case"electronic":this._electronicBeat(e,s,a);break}}_ambientBeat(e,t,n){if(this.ctx&&(t%4===0&&[n,n*1.25,n*1.5,n*2].forEach((s,a)=>{const r=this.ctx.createOscillator(),l=this.ctx.createGain(),c=this.ctx.createBiquadFilter();r.type="sine",r.frequency.value=s*.5,c.type="lowpass",c.frequency.value=800,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.06-a*.01,e+.4),l.gain.linearRampToValueAtTime(0,e+3.5),r.connect(c),c.connect(l),l.connect(this.masterGain),r.start(e),r.stop(e+4),this.nodes.push(r,l)}),t%8===5)){const i=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",i.frequency.value=n*4,s.gain.setValueAtTime(.04,e),s.gain.exponentialRampToValueAtTime(.001,e+.8),i.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+.9),this.nodes.push(i,s)}}_lofiBeat(e,t,n){if(!this.ctx)return;(t===0||t===2)&&this._kick(e,n*.5),(t===1||t===3)&&this._snare(e,.04),this._hihat(e,.025);const i=[n*.5,n*.5,n*.5*.75,n*.5*.9];this._bass(e,i[t],.25)}_rockBeat(e,t,n,i){if(!this.ctx)return;(t===0||t===2)&&this._kick(e,i*.4),(t===1||t===3)&&this._snare(e,.07),this._hihat(e,.05);const s=[i*.5,i*.5,i*.5*.8,i*.5];this._distBass(e,s[t%4]),t===0&&n%2===0&&[i,i*1.5,i*2].forEach(a=>{const r=this.ctx.createOscillator(),l=this.ctx.createGain();r.type="sawtooth",r.frequency.value=a,l.gain.setValueAtTime(.035,e),l.gain.linearRampToValueAtTime(0,e+.5),r.connect(l),l.connect(this.masterGain),r.start(e),r.stop(e+.55),this.nodes.push(r,l)})}_italianBeat(e,t,n,i){if(this.ctx&&(t===0&&this._bass(e,i*.5,.3),(t===1||t===2||t===3)&&this._bass(e,i*.75,.12),t===0&&this._kick(e,i*.5),t===0||t===2)){const s=[i,i*1.122,i*1.26,i*1.498,i*1.682],a=s[n%s.length],r=this.ctx.createOscillator(),l=this.ctx.createGain();r.type="triangle",r.frequency.value=a;const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.frequency.value=5.5,h.gain.value=3,c.connect(h),h.connect(r.frequency),l.gain.setValueAtTime(.04,e),l.gain.linearRampToValueAtTime(0,e+.8),r.connect(l),l.connect(this.masterGain),c.start(e),r.start(e),c.stop(e+.9),r.stop(e+.9),this.nodes.push(r,c,l,h)}}_electronicBeat(e,t,n){this.ctx&&((t===0||t===2)&&this._kick(e,n*.5),(t===1||t===3)&&this._snare(e,.05),this._hihat(e,.03),t===0&&this._bass(e,n*.5,.25),t===2&&this._bass(e,n*.375,.2))}_kick(e,t){if(!this.ctx)return;const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.frequency.setValueAtTime(t,e),n.frequency.exponentialRampToValueAtTime(20,e+.12),i.gain.setValueAtTime(.5,e),i.gain.exponentialRampToValueAtTime(.001,e+.25),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+.3),this.nodes.push(n,i)}_snare(e,t){if(!this.ctx)return;const n=Math.floor(this.ctx.sampleRate*.18),i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=i.getChannelData(0);for(let c=0;c<n;c++)s[c]=Math.random()*2-1;const a=this.ctx.createBufferSource();a.buffer=i;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=1800,r.Q.value=.8;const l=this.ctx.createGain();l.gain.setValueAtTime(t,e),l.gain.exponentialRampToValueAtTime(.001,e+.18),a.connect(r),r.connect(l),l.connect(this.masterGain),a.start(e),a.stop(e+.2),this.nodes.push(a,l)}_hihat(e,t){if(!this.ctx)return;const n=Math.floor(this.ctx.sampleRate*.06),i=this.ctx.createBuffer(1,n,this.ctx.sampleRate),s=i.getChannelData(0);for(let c=0;c<n;c++)s[c]=Math.random()*2-1;const a=this.ctx.createBufferSource();a.buffer=i;const r=this.ctx.createBiquadFilter();r.type="highpass",r.frequency.value=7e3;const l=this.ctx.createGain();l.gain.setValueAtTime(t,e),l.gain.exponentialRampToValueAtTime(.001,e+.06),a.connect(r),r.connect(l),l.connect(this.masterGain),a.start(e),a.stop(e+.08),this.nodes.push(a,l)}_bass(e,t,n){if(!this.ctx)return;const i=this.ctx.createOscillator(),s=this.ctx.createBiquadFilter(),a=this.ctx.createGain();i.type="sawtooth",i.frequency.value=t,s.type="lowpass",s.frequency.value=350,a.gain.setValueAtTime(n,e),a.gain.exponentialRampToValueAtTime(.001,e+.35),i.connect(s),s.connect(a),a.connect(this.masterGain),i.start(e),i.stop(e+.4),this.nodes.push(i,a)}_distBass(e,t){if(!this.ctx)return;const n=this.ctx.createOscillator(),i=this.ctx.createWaveShaper(),s=this.ctx.createGain();n.type="sawtooth",n.frequency.value=t;const a=new Float32Array(256);for(let r=0;r<256;r++){const l=r*2/256-1;a[r]=Math.max(-.6,Math.min(.6,l*3))}i.curve=a,s.gain.setValueAtTime(.08,e),s.gain.exponentialRampToValueAtTime(.001,e+.3),n.connect(i),i.connect(s),s.connect(this.masterGain),n.start(e),n.stop(e+.35),this.nodes.push(n,s)}}class hx{constructor(){E(this,"container");E(this,"stationIdx",0);E(this,"on",!1);E(this,"songIdx",0);E(this,"djIdx",0);E(this,"songTimer",0);E(this,"djTimer",0);E(this,"nameEl");E(this,"songEl");E(this,"djEl");E(this,"iconEl");E(this,"freqEl");E(this,"engine",new cx);E(this,"engineReady",!1);E(this,"volumeSlider");E(this,"rafId",0);E(this,"lastUpdateTs",0);this._buildUI(),this.lastUpdateTs=performance.now(),this._tick()}_buildUI(){this.container=document.createElement("div"),this.container.style.cssText=`
      position: fixed; bottom: 110px; left: 50%; transform: translateX(-50%);
      z-index: 2000; font-family: system-ui, sans-serif;
      display: flex; flex-direction: column; align-items: center; gap: 6px;
      pointer-events: none; user-select: none;
      transition: opacity 0.4s;
    `;const e=document.createElement("div");e.style.cssText=`
      display: flex; align-items: center; gap: 10px;
      background: rgba(8,6,4,0.84); backdrop-filter: blur(10px);
      border: 1px solid rgba(200,168,106,0.3); border-radius: 40px;
      padding: 8px 16px 8px 12px;
      box-shadow: 0 4px 24px rgba(0,0,0,0.6);
      pointer-events: auto; touch-action: manipulation;
    `,this.iconEl=document.createElement("span"),this.iconEl.textContent="📻",this.iconEl.style.cssText="font-size:18px; cursor:pointer; opacity:0.5;",this.iconEl.addEventListener("click",()=>this._togglePower());const t=document.createElement("span");t.textContent="◀",t.style.cssText="color:rgba(200,168,106,0.7); font-size:13px; cursor:pointer; padding:0 2px;",t.addEventListener("click",()=>this._changeStation(-1));const n=document.createElement("div");n.style.cssText="display:flex; flex-direction:column; align-items:center; min-width:130px;",this.nameEl=document.createElement("span"),this.nameEl.style.cssText=`
      color: #C8A86A; font-size: 11px; font-weight: 900;
      letter-spacing: 1.5px; text-transform: uppercase;
    `,this.freqEl=document.createElement("span"),this.freqEl.style.cssText="color: rgba(200,168,106,0.5); font-size: 9px; letter-spacing: 0.5px;",n.appendChild(this.nameEl),n.appendChild(this.freqEl);const i=document.createElement("span");i.textContent="▶",i.style.cssText="color:rgba(200,168,106,0.7); font-size:13px; cursor:pointer; padding:0 2px;",i.addEventListener("click",()=>this._changeStation(1)),this.volumeSlider=document.createElement("input"),this.volumeSlider.type="range",this.volumeSlider.min="0",this.volumeSlider.max="100",this.volumeSlider.value="55",this.volumeSlider.style.cssText=`
      width: 52px; height: 3px; accent-color: #C8A86A; cursor: pointer;
      opacity: 0.6;
    `,this.volumeSlider.addEventListener("input",()=>{const s=Number(this.volumeSlider.value)/100;this.engine.setVolume(s*.18)}),e.appendChild(this.iconEl),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(this.volumeSlider),this.songEl=document.createElement("div"),this.songEl.style.cssText=`
      color: rgba(255,255,255,0.55); font-size: 11px;
      background: rgba(0,0,0,0.5); border-radius: 20px;
      padding: 3px 12px; max-width: 280px;
      text-overflow: ellipsis; white-space: nowrap; overflow: hidden;
      transition: opacity 0.4s;
    `,this.djEl=document.createElement("div"),this.djEl.style.cssText=`
      color: rgba(200,168,106,0.6); font-size: 10px; font-style: italic;
      text-align: center; max-width: 300px;
      opacity: 0; transition: opacity 0.6s;
      pointer-events: none;
    `,this.container.appendChild(e),this.container.appendChild(this.songEl),this.container.appendChild(this.djEl),document.body.appendChild(this.container),this._renderStation()}_renderStation(){const e=Kn[this.stationIdx];this.nameEl.textContent=e.name,this.nameEl.style.color=e.color,this.freqEl.textContent=`${e.freq} FM`,this.songEl.textContent=this.on?`♫  ${e.songs[this.songIdx%e.songs.length]}`:"— OFF —",this.iconEl.style.opacity=this.on?"1":"0.4"}_togglePower(){this.engineReady||(this.engineReady=this.engine.init()),this.on=!this.on,this.on?(this.engine.play(Kn[this.stationIdx]),this._showDJ()):this.engine.stop(),this._renderStation()}_changeStation(e){this.stationIdx=(this.stationIdx+e+Kn.length)%Kn.length,this.songIdx=0,this.songTimer=0,this.on&&(this.engineReady||(this.engineReady=this.engine.init()),this.engine.play(Kn[this.stationIdx]),this._showDJ()),this._renderStation()}_showDJ(){const e=Kn[this.stationIdx],t=e.dj[this.djIdx%e.dj.length];this.djEl.textContent=`"${t}"`,this.djEl.style.opacity="1",setTimeout(()=>{this.djEl.style.opacity="0"},4500),this.djIdx++}_tick(){const e=performance.now(),t=(e-this.lastUpdateTs)/1e3;if(this.lastUpdateTs=e,this.on){Kn[this.stationIdx];const n=45+this.songIdx%3*10;this.songTimer+=t,this.songTimer>=n&&(this.songTimer=0,this.songIdx++,this._renderStation()),this.djTimer+=t,this.djTimer>=30&&(this.djTimer=0,this._showDJ())}this.rafId=requestAnimationFrame(()=>this._tick())}setVisible(e){this.container.style.opacity=e?"1":"0",this.container.style.pointerEvents=e?"auto":"none"}destroy(){cancelAnimationFrame(this.rafId),this.engine.stop(),this.container.remove()}}const dx="./",hr=`${dx}tem-logo-white.jpg`,Qs=[{id:"melbourne",name:"TROWELED EARTH MELBOURNE",role:"presents",line:"",accentColor:"#C8A86A",skyTop:"#040810",skyBot:"#102040",particleColor:"#C8A86A",particleKind:"dust",buildingTint:"#182840",spotColor:"#C8A86A33",voiceChar:"Narrator"},{id:"jose",name:"JOSE GARCIA",role:"The Spaniard · Master of Clay",line:"Vámonos — I was getting bored.",accentColor:"#FF7040",skyTop:"#7A1800",skyBot:"#CC3300",particleColor:"#FF9040",particleKind:"sparks",buildingTint:"#3A0C00",spotColor:"#FF704055",voiceChar:"Jose"},{id:"matt",name:"MATT",role:"The Warlord · Lead Plasterer",line:"Took your time.",accentColor:"#FF3355",skyTop:"#8A0010",skyBot:"#CC0030",particleColor:"#FF5070",particleKind:"sparks",buildingTint:"#440010",spotColor:"#FF335555",voiceChar:"Matt"},{id:"tsuyoshi",name:"TSUYOSHI",role:"The Samurai · Tadelakt Specialist",line:"Positions master. Always.",accentColor:"#00DD88",skyTop:"#005530",skyBot:"#009958",particleColor:"#60FFB0",particleKind:"dust",buildingTint:"#003322",spotColor:"#00DD8855",voiceChar:"Tsuyoshi"},{id:"connie",name:"CONNIE",role:"Operations Queen · Born in Germany",line:"Ha ha ha ha!",accentColor:"#FFB030",skyTop:"#884400",skyBot:"#CC7700",particleColor:"#FFD060",particleKind:"smoke",buildingTint:"#442200",spotColor:"#FFB03055",voiceChar:"Connie"},{id:"jarrad",name:"JARRAD",role:"Scaffold Specialist · Topknot Philosopher",line:"I've been waiting fifteen minutes.",accentColor:"#8866FF",skyTop:"#220066",skyBot:"#4400AA",particleColor:"#AA88FF",particleKind:"dust",buildingTint:"#110033",spotColor:"#8866FF55",voiceChar:"Jarrad"},{id:"fabio",name:"FABIO",role:"Plasterer · Pizza Consultant",line:"Ehhhh.",accentColor:"#FF7722",skyTop:"#883300",skyBot:"#CC5500",particleColor:"#FFAa40",particleKind:"smoke",buildingTint:"#441A00",spotColor:"#FF772255",voiceChar:"Fabio"},{id:"phil",name:"PHIL",role:"The Quiet Legend · Renders",line:"Right then. Let's go.",accentColor:"#44CCCC",skyTop:"#004444",skyBot:"#007777",particleColor:"#88FFFF",particleKind:"dust",buildingTint:"#002222",spotColor:"#44CCCC55",voiceChar:"Phil"}],ux=8e3,fx=8e3,px=5e3,uc=350;class mx{constructor(){E(this,"overlay");E(this,"canvas");E(this,"ctx2d");E(this,"textLayer");E(this,"themeAudio",null);E(this,"done",!1);E(this,"rafId",0);E(this,"timers",[]);E(this,"particles",[]);E(this,"panX",0);E(this,"camShake",0);E(this,"currentScene",null);E(this,"sceneT",0);E(this,"buildings",[])}play(){return new Promise(e=>this._tapThenBuild(e))}_tapThenBuild(e){this._injectStyles();const t=document.createElement("div");t.style.cssText=`
      position:fixed; inset:0; z-index:50001; background:#000;
      display:flex; flex-direction:column; align-items:center; justify-content:center;
      font-family:system-ui,sans-serif; cursor:pointer; touch-action:manipulation;
    `,t.innerHTML=`
      <img src="${hr}" alt="TEM"
        style="height:clamp(60px,14vw,100px); width:auto; object-fit:contain;
               filter:brightness(0.85); margin-bottom:24px;"
        onerror="this.style.display='none'">
      <div style="color:#C8A86A; font-size:clamp(18px,5vw,28px); font-weight:900;
                  letter-spacing:4px; text-shadow:0 0 40px rgba(200,168,106,0.5);">
        TROWELED EARTH RUSH
      </div>
      <div style="color:rgba(200,168,106,0.55); font-size:clamp(12px,3vw,16px);
                  margin-top:36px; letter-spacing:3px; animation:tapPulse 1.4s ease-in-out infinite;">
        TAP TO BEGIN
      </div>
    `,document.body.appendChild(t);const n=()=>{t.remove(),this._build(e)};t.addEventListener("click",n,{once:!0}),t.addEventListener("touchstart",n,{once:!0,passive:!0})}_build(e){this.overlay=document.createElement("div"),this.overlay.id="intro-overlay",this.overlay.style.cssText=`
      position:fixed; inset:0; z-index:50000; background:#000; overflow:hidden;
      font-family: system-ui, -apple-system, sans-serif;
    `,this.canvas=document.createElement("canvas"),this.canvas.style.cssText=`
      position:absolute; inset:0; width:100%; height:100%;
      image-rendering:crisp-edges;
    `,this._resizeCanvas(),window.addEventListener("resize",()=>this._resizeCanvas()),this.ctx2d=this.canvas.getContext("2d");const t=document.createElement("div");t.className="intro-bar intro-bar-top";const n=document.createElement("div");n.className="intro-bar intro-bar-bot",this.textLayer=document.createElement("div"),this.textLayer.style.cssText=`
      position:absolute; inset:0; z-index:10;
      display:flex; flex-direction:column;
      justify-content:flex-end;
      padding: 0 clamp(20px,6vw,60px) clamp(60px,12vh,110px);
      pointer-events:none;
    `;const i=document.createElement("div");i.id="intro-grain",i.style.cssText=`
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
    `,s.addEventListener("click",()=>this._finish(e)),this.overlay.appendChild(this.canvas),this.overlay.appendChild(i),this.overlay.appendChild(t),this.overlay.appendChild(n),this.overlay.appendChild(this.textLayer),this.overlay.appendChild(s),document.body.appendChild(this.overlay),this._genBuildings(),this._startAudio(),this._startScene(Qs[0]);let a=fx;for(let c=1;c<Qs.length;c++){const h=Qs[c];this._after(a,()=>this._startScene(h)),a+=ux}this._after(a,()=>this._showTitle(e));let r=performance.now();const l=c=>{if(this.done)return;const h=Math.min((c-r)/1e3,.05);r=c,this.sceneT+=h,this._update(h),this._draw(),this.rafId=requestAnimationFrame(l)};this.rafId=requestAnimationFrame(l)}_startScene(e){this.done||(this.currentScene=e,this.sceneT=0,this.panX=0,this.particles=[],this.camShake=e.id==="matt"||e.id==="jose"?.5:0,this._updateText(e))}_updateText(e){if(!this.textLayer)return;const t=e.id==="melbourne";this.textLayer.innerHTML=`
      <div style="animation: introSlideUp 0.5s ease both;">
        ${t?`
          <div style="color:rgba(200,168,106,0.6); font-size:clamp(9px,2.5vw,12px);
                      font-weight:700; letter-spacing:4px; margin-bottom:12px;">
            TROWELED EARTH MELBOURNE PRESENTS
          </div>
          <img src="${hr}" alt="TEM"
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
    `}_update(e){const t=this.currentScene;if(t){this.panX+=e*18,this.camShake>0&&(this.camShake=Math.max(0,this.camShake-e*.8)),t.particleKind!=="none"&&this._spawnParticles(t,e);for(let n=this.particles.length-1;n>=0;n--){const i=this.particles[n];i.x+=i.vx*e,i.y+=i.vy*e,i.life-=e,i.alpha=Math.max(0,i.life/i.maxLife),i.life<=0&&this.particles.splice(n,1)}}}_spawnParticles(e,t){const n=this.canvas.width,i=this.canvas.height,s=e.particleKind==="sparks"?12:4;for(let a=0;a<s*t;a++){const r=Math.random()*n,l=i*.62;let c;e.particleKind==="sparks"?c={x:r,y:l-Math.random()*i*.15,vx:(Math.random()-.5)*80,vy:-Math.random()*120-40,life:.4+Math.random()*.4,maxLife:.8,size:1.5+Math.random()*2,alpha:1}:e.particleKind==="smoke"?c={x:r,y:l,vx:(Math.random()-.5)*20,vy:-Math.random()*30-10,life:1.5+Math.random(),maxLife:2.5,size:20+Math.random()*40,alpha:.3}:c={x:r,y:l+Math.random()*i*.1,vx:(Math.random()-.5)*15,vy:-Math.random()*15,life:1+Math.random()*1.5,maxLife:2.5,size:2+Math.random()*5,alpha:.5},this.particles.push(c)}}_draw(){const e=this.canvas.width,t=this.canvas.height,n=this.currentScene;if(!n)return;const i=this.ctx2d,s=this.camShake>0?(Math.random()-.5)*this.camShake*4:0;i.save(),i.translate(s,s*.5);const a=i.createLinearGradient(0,0,0,t*.65);a.addColorStop(0,n.skyTop),a.addColorStop(1,n.skyBot),i.fillStyle=a,i.fillRect(0,0,e,t),this._drawStars(i,e,t,n),this._drawCity(i,e,t,n);const r=i.createLinearGradient(0,t*.62,0,t);r.addColorStop(0,n.spotColor),r.addColorStop(.3,"#000000CC"),r.addColorStop(1,"#000000"),i.fillStyle=r,i.fillRect(0,t*.62,e,t*.38),this._drawRoad(i,e,t,n),this._drawParticles(i,n),n.id!=="melbourne"&&this._drawCharSilhouette(i,e,t,n),n.id!=="melbourne"&&n.line&&this.sceneT>2&&this._drawSpeechBubble(i,e,t,n);const l=i.createRadialGradient(e/2,t/2,t*.1,e/2,t/2,t*.8);if(l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,0.72)"),i.fillStyle=l,i.fillRect(0,0,e,t),n.id!=="melbourne"&&this.sceneT<.6){const c=Math.max(0,.6-this.sceneT)*.4;i.fillStyle=n.accentColor+Math.round(c*255).toString(16).padStart(2,"0"),i.fillRect(0,0,e,t)}i.restore()}_drawStars(e,t,n,i){const s=i.id.charCodeAt(0)*31;e.fillStyle="rgba(255,255,255,0.7)";for(let a=0;a<60;a++){const r=(s*(a+1)*1234567%t+t)%t,l=(s*(a+7)*765432%(n*.5)+n*.01)%(n*.5),c=.5+s*a*11%10/10,h=(this.sceneT*.8+a*.3)%(Math.PI*2);e.globalAlpha=.3+Math.sin(h)*.3,e.beginPath(),e.arc(r,l,c,0,Math.PI*2),e.fill()}e.globalAlpha=1}_drawCity(e,t,n,i){const s=n*.62,a=this.panX*.3%t;for(let r=-1;r<=1;r++){const l=r*t-a;for(const c of this.buildings){const h=c.x+l;if(h+c.w<-50||h>t+50)continue;e.fillStyle=i.buildingTint,e.fillRect(h,s-c.h,c.w,c.h),e.fillStyle=i.accentColor+"55";const d=Math.floor(c.w/10),u=Math.floor(c.h/14);for(let f=0;f<d;f++)for(let g=0;g<u;g++){if(!(Math.sin((c.x+f*17+g*13)*.618)>.1))continue;const m=h+f*10+2,p=s-c.h+g*14+3,w=Math.sin(this.sceneT*2+f+g)>.95;e.fillStyle=w?"#fff4":i.accentColor+"66",e.fillRect(m,p,5,7)}e.strokeStyle=i.accentColor+"22",e.lineWidth=1,e.strokeRect(h,s-c.h,c.w,c.h)}}}_drawRoad(e,t,n,i){const s=n*.72,a=this.panX*1.5;if(e.fillStyle="#0a0a0a",e.fillRect(0,s,t,n-s),e.strokeStyle=i.accentColor+"30",e.lineWidth=2,e.setLineDash([30,40]),e.lineDashOffset=-a%70,e.beginPath(),e.moveTo(0,s+20),e.lineTo(t,s+20),e.stroke(),e.setLineDash([]),i.id==="melbourne"){const r=this.panX*60%(t+200)-100;this._drawVan(e,r,s+5)}}_drawVan(e,t,n){e.save(),e.translate(t,n),e.fillStyle="#C1660A",e.beginPath(),e.roundRect(0,0,90*.8,42*.8,4*.8),e.fill(),e.fillStyle="#A04A00",e.beginPath(),e.roundRect(60*.8,4*.8,30*.8,32*.8,3*.8),e.fill(),e.fillStyle="#6090D080",e.fillRect(64*.8,7*.8,22*.8,16*.8),e.fillStyle="#111",e.beginPath(),e.arc(18*.8,42*.8,8*.8,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(72*.8,42*.8,8*.8,0,Math.PI*2),e.fill(),e.fillStyle="#FFFF8088",e.fillRect(88*.8,16*.8,3*.8,8*.8),e.restore()}_drawCharSilhouette(e,t,n,i){const s=n*.62,a=t*.68,r=Math.min(1,this.sceneT*2);e.save(),e.globalAlpha=r;const l=e.createRadialGradient(a,s-80,10,a,s-80,160);l.addColorStop(0,i.accentColor+"50"),l.addColorStop(1,"transparent"),e.fillStyle=l,e.beginPath(),e.ellipse(a,s-80,160,220,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(0,0,0,0.45)",e.beginPath(),e.ellipse(a,s+6,40,9,0,0,Math.PI*2),e.fill();const c=Math.min(n*.52,240),d={jose:"#C8856A",matt:"#E8C0A0",tsuyoshi:"#F0D4B0",connie:"#F0C8A0",jarrad:"#E0B090",fabio:"#D4A070",phil:"#D8A888"}[i.id]??"#D0A080",u="#111111",f="#1a1a2a";e.fillStyle="#0a0a0a",e.fillRect(a-19,s-22,16,22),e.fillRect(a+3,s-22,16,22),e.fillStyle=f,e.fillRect(a-18,s-c*.44,16,c*.44-20),e.fillRect(a+2,s-c*.44,16,c*.44-20),e.fillStyle=u,e.fillRect(a-20,s-c*.8,40,c*.37),this._drawTEMLogoOnShirt(e,a,s-c*.7),e.fillStyle=d,e.fillRect(a-5,s-c*.84,10,c*.06),e.fillStyle=u,e.fillRect(a-32,s-c*.78,13,c*.32),e.fillRect(a+19,s-c*.78,13,c*.28),e.fillStyle=d,e.beginPath(),e.ellipse(a-26,s-c*.46,7,9,.2,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(a+26,s-c*.5,7,9,-.2,0,Math.PI*2),e.fill(),e.fillStyle=d,e.beginPath(),e.ellipse(a,s-c*.87,c*.075,c*.09,0,0,Math.PI*2),e.fill(),this._drawHairAndProp(e,i,a,s,c,d),e.strokeStyle=i.accentColor,e.lineWidth=3,e.globalAlpha=r*.8,e.beginPath(),e.moveTo(a-20,s-c*.44),e.lineTo(a-20,s-c*.8),e.lineTo(a-10,s-c*.84),e.stroke(),e.restore()}_drawTEMLogoOnShirt(e,t,n){e.save(),e.fillStyle="rgba(255,255,255,0.75)";const i=.6;e.fillRect(t-2*i,n+8*i,4*i,8*i);const s=(a,r,l,c)=>{e.beginPath(),e.moveTo(a,r+c),e.lineTo(a-l/2,r+c),e.lineTo(a,r),e.lineTo(a+l/2,r+c),e.closePath(),e.fill()};s(t,n+8*i,18*i,9*i),s(t,n+2*i,14*i,8*i),s(t,n-3*i,10*i,7*i),e.restore()}_drawHairAndProp(e,t,n,i,s,a){const l={jose:{color:"#1a0800",kind:"short"},matt:{color:"#2a1a00",kind:"short"},tsuyoshi:{color:"#111",kind:"mohawk"},connie:{color:"#E8D080",kind:"long"},jarrad:{color:"#3a2000",kind:"topknot"},fabio:{color:"#1a0800",kind:"short"},phil:{color:"#CCCCCC",kind:"short"}}[t.id]??{color:"#1a0800",kind:"short"};e.fillStyle=l.color;const c=i-s*.87,h=s*.075;switch(l.kind==="short"?(e.beginPath(),e.arc(n,c-h*.7,h*1.1,Math.PI,0),e.fill()):l.kind==="mohawk"?(e.fillRect(n-4,c-h*2.2,8,h*1.6),e.fillStyle="#FF3A00",e.fillRect(n-3,c-h*2.4,6,h*.6)):l.kind==="long"?(e.beginPath(),e.arc(n,c-h*.5,h*1.1,Math.PI,0),e.fill(),e.fillRect(n-h*1.2,c,h*2.4,s*.18)):l.kind==="topknot"&&(e.beginPath(),e.arc(n,c-h*.5,h,Math.PI,0),e.fill(),e.beginPath(),e.arc(n,c-h*1.6,h*.7,0,Math.PI*2),e.fill()),(t.id==="jose"||t.id==="matt"||t.id==="tsuyoshi")&&(e.fillStyle="#F5C842",e.beginPath(),e.ellipse(n,c-h*.9,h*1.4,h*.5,0,Math.PI,0),e.fill(),e.fillRect(n-h*1.4,c-h*1,h*2.8,h*.4)),t.id){case"jose":case"matt":{e.fillStyle=a,e.fillRect(n+19,i-s*.62,28,8),e.fillStyle="#A0B8CC",e.save(),e.translate(n+52,i-s*.63),e.rotate(-.3),e.fillRect(0,-4,28,10),e.fillStyle="#6A7A88",e.fillRect(24,-5,6,12),e.restore();break}case"tsuyoshi":{e.fillStyle=a,e.fillRect(n-33,i-s*.44,8,s*.22),e.fillStyle="#446688",e.beginPath(),e.moveTo(n-44,i-s*.22),e.lineTo(n-28,i-s*.22),e.lineTo(n-30,i-s*.04),e.lineTo(n-42,i-s*.04),e.fill(),e.strokeStyle="#88AACC",e.lineWidth=2,e.strokeRect(n-44,i-s*.22,16,2);break}case"connie":{e.fillStyle=a,e.fillRect(n+19,i-s*.68,10,s*.2),e.fillStyle="#E8E0C0",e.fillRect(n+28,i-s*.72,26,34),e.fillStyle="#C8A86A",e.fillRect(n+34,i-s*.74,14,6),e.fillStyle="#88778866";for(let d=0;d<4;d++)e.fillRect(n+30,i-s*.66+d*6,20,3);break}case"jarrad":{e.fillStyle=a,e.fillRect(n+19,i-s*.7,10,s*.22),e.fillStyle="#1a1a2a",e.fillRect(n+28,i-s*.73,18,28),e.fillStyle="#4488FF",e.shadowColor="#4488FF",e.shadowBlur=18,e.fillRect(n+30,i-s*.71,14,24),e.shadowBlur=0,e.fillStyle="#4488FF18",e.beginPath(),e.ellipse(n+20,i-s*.87,30,40,0,0,Math.PI*2),e.fill();break}case"fabio":{e.fillStyle=a,e.fillRect(n-32,i-s*.78,10,s*.1),e.fillStyle="#B8904A",e.fillRect(n-46,i-s*.86,38,6),e.fillRect(n-46,i-s*.84,38,20),e.fillStyle="#FF5533",e.fillRect(n-43,i-s*.82,32,14),e.fillStyle="#FFDD44";for(let d=0;d<5;d++)e.beginPath(),e.arc(n-38+d*6,i-s*.78+d%2*4,3,0,Math.PI*2),e.fill();break}case"phil":{e.fillStyle=a,e.fillRect(n-33,i-s*.52,8,s*.1),e.fillStyle="#8899AA",e.fillRect(n-40,i-s*.44,14,20),e.fillStyle="#AAC0CC",e.fillRect(n-39,i-s*.46,12,8),e.strokeStyle="#AAAAAA60",e.lineWidth=2;for(let d=0;d<3;d++)e.beginPath(),e.moveTo(n-36+d*4,i-s*.46),e.quadraticCurveTo(n-34+d*4,i-s*.5,n-36+d*4,i-s*.54),e.stroke();break}}}_drawParticles(e,t){for(const n of this.particles)if(e.globalAlpha=n.alpha*.85,t.particleKind==="sparks")e.fillStyle=t.particleColor,e.shadowColor=t.particleColor,e.shadowBlur=4,e.beginPath(),e.arc(n.x,n.y,n.size,0,Math.PI*2),e.fill(),e.shadowBlur=0;else{const i=e.createRadialGradient(n.x,n.y,0,n.x,n.y,n.size);i.addColorStop(0,t.particleColor+"60"),i.addColorStop(1,"transparent"),e.fillStyle=i,e.beginPath(),e.arc(n.x,n.y,n.size,0,Math.PI*2),e.fill()}e.globalAlpha=1}_drawSpeechBubble(e,t,n,i){const s=Math.min(1,(this.sceneT-2)*1.5);if(s<=0)return;const a=Math.sin(this.sceneT*1.8)*5,r=Math.min(t*.42,280),l=72,c=t*.04,h=n*.38+a,d=14,u=c+r;e.save(),e.globalAlpha=s,e.shadowColor="rgba(0,0,0,0.45)",e.shadowBlur=12,e.shadowOffsetY=4,e.fillStyle="rgba(255,255,255,0.94)",e.beginPath(),e.moveTo(c+d,h),e.lineTo(c+r-d,h),e.quadraticCurveTo(c+r,h,c+r,h+d),e.lineTo(c+r,h+l-d),e.quadraticCurveTo(c+r,h+l,c+r-d,h+l),e.lineTo(c+d,h+l),e.quadraticCurveTo(c,h+l,c,h+l-d),e.lineTo(c,h+d),e.quadraticCurveTo(c,h,c+d,h),e.closePath(),e.fill(),e.shadowBlur=0,e.shadowOffsetY=0,e.beginPath(),e.moveTo(u,h+l*.42),e.lineTo(u+20,h+l*.55),e.lineTo(u,h+l*.68),e.closePath(),e.fill(),e.fillStyle=i.accentColor,e.fillRect(c+d,h,r-d*2,4),e.shadowBlur=0;const f=Math.max(12,Math.min(16,r/16));e.font=`italic ${f}px system-ui, sans-serif`,e.fillStyle="#111",e.textBaseline="middle";const g=r-24,x=`"${i.line}"`.split(" "),m=[];let p="";for(const I of x){const A=p?`${p} ${I}`:I;e.measureText(A).width>g&&p?(m.push(p),p=I):p=A}p&&m.push(p);const w=f+5,S=m.length*w,v=h+(l-S)/2+w/2+2;m.forEach((I,A)=>{e.fillText(I,c+12,v+A*w,g)}),e.restore()}_showTitle(e){this.done||(this.particles=[],this.currentScene={...Qs[0],id:"title",name:"",role:"",line:""},this.textLayer.innerHTML=`
      <div style="animation:introSlideUp 0.7s ease both; text-align:center; width:100%;">
        <img src="${hr}" alt="TEM"
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
    `,this.textLayer.style.justifyContent="center",this.textLayer.style.alignItems="center",this._after(px,()=>{this.overlay.style.transition=`opacity ${uc}ms ease`,this.overlay.style.opacity="0",this._after(uc+50,()=>this._finish(e))}))}_startAudio(){try{const e=new Audio;e.src=On.theme,e.volume=.75,this.themeAudio=e,e.play().catch(()=>{this.themeAudio=null})}catch{}}_finish(e){var t;if(!this.done){if(this.done=!0,this.timers.forEach(clearTimeout),cancelAnimationFrame(this.rafId),this.themeAudio){const n=this.themeAudio;let i=n.volume;const s=setInterval(()=>{i=Math.max(0,i-.06),n.volume=i,i<=0&&(clearInterval(s),n.pause(),n.src="")},60)}(t=this.overlay)==null||t.remove(),e()}}_after(e,t){this.timers.push(setTimeout(t,e))}_genBuildings(){let t=0;this.buildings=[];for(let n=0;n<28;n++){const i=30+Math.floor(Math.sin(n*2.1)*15+Math.cos(n*1.3)*12+40),s=60+Math.abs(Math.sin(n*1.7)*140+Math.cos(n*2.3)*80);this.buildings.push({x:t,w:i,h:s}),t+=i+4+Math.floor(Math.sin(n*3.7)*6)}}_resizeCanvas(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}_injectStyles(){if(document.getElementById("intro-styles"))return;const e=document.createElement("style");e.id="intro-styles",e.textContent=`
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
    `,document.head.appendChild(e)}}const gx=[{character:"Jose",label:"JOSE GARCIA",color:"#8B6A3A",lines:["Jose Garcia — the Spaniard cloaked in shadows, grim veil","An artist of chaos where darkness and dreams prevail","With brutal hands he sculpts the earth's unyielding core","His trowel, a weapon — top class, none can ignore","From blood red clay to concrete's cold, unfeeling embrace","He molds the void to find foundations of time"]},{character:null,label:"CHORUS",color:"#C8A86A",lines:["Troweled Earth — where shadows fall","Unyielding — it calls to all","This spirit's rise beneath the skies","The spark of architects' darkest dreams"]},{character:"Matt",label:"MATT",color:"#C1666B",lines:["Matt, the warlord — fire raging deep in his veins","Charismatic, don't matter, wielding hearts in unyielding chains","From Marbellino's wrath to metallic's cold, cruel, clean","His energy — tempest, relentless, untamed and wild","Unyielding strokes cut deep and true","His trowel carved dark — Troweled Earth's anchor bold"]},{character:"Tsuyoshi",label:"TSUYOSHI",color:"#4A8A6A",lines:["A samurai — perfect engineer","Crafts Tadelakt with a blade's cold glare","Positions master, slicing through despair","The future's written in shadows he's claimed as his own"]},{character:"Connie",label:"CONNIE",color:"#E8A050",lines:["Connie — tight on wheels, a trowel school might","Turning more queen, driving through the night"]},{character:"Jarrad",label:"JARRAD",color:"#8080C0",lines:["Jarrad — iron-forged, a time built in flame","His strength runs deep, no force can break or tame","He etches the earth with hands of steel","His honour worn in fire"]},{character:"Fabio",label:"FABIO",color:"#D4602A",lines:['Like fire among the wise — "you have no power here, Gandalf the Grey"',"Conjuring dark nights, his lore makes the unwilling pay"]},{character:null,label:"BRIDGE — MELBOURNE",color:"#8B9EC8",lines:["St Kilda confined — Fitzroy, raw forms rise","No facade — let the heavy stone speak","Trowel the fruit of beauty, cold and true","Polish scars are steel in all grids and grooves","Good dreams forged in the fire of steel","Tadelakt stone lit sheen — custom strokes, no polish","Just the fight in every scene"]},{character:null,label:"FINAL CHORUS",color:"#C8A86A",lines:["Melbourne's concrete sonnet — unyielding, profound","Trowel dust builds the goal on hallowed ground","Troweled Earth — we shatter the stone","Crafting brutal spaces — this is home"]}],fc=gx.flatMap(o=>o.lines),xx=[{text:"🌳",size:64,color:"#C8A86A",gap:12},{text:"TROWELED EARTH RUSH",size:32,color:"#C8A86A",weight:900,spacing:4,gap:8},{text:"A TROWELED EARTH MELBOURNE PRODUCTION",size:11,color:"rgba(200,168,106,0.5)",spacing:2,gap:48},{text:"CREW",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"MATT",size:16,color:"#C1666B",weight:800,gap:4},{text:"LEAD PLASTERER · THE WARLORD",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"JOSE GARCIA",size:16,color:"#8B6A3A",weight:800,gap:4},{text:"THE SPANIARD · MASTER OF CLAY",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"TSUYOSHI",size:16,color:"#4A8A6A",weight:800,gap:4},{text:"SAMURAI ENGINEER · TADELAKT SPECIALIST",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"CONNIE",size:16,color:"#E8A050",weight:800,gap:4},{text:"OPERATIONS QUEEN · BORN IN GERMANY",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"JARRAD",size:16,color:"#8080C0",weight:800,gap:4},{text:"SCAFFOLD SPECIALIST · TOPKNOT PHILOSOPHER",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"FABIO",size:16,color:"#D4602A",weight:800,gap:4},{text:'PLASTERER · PIZZA CONSULTANT · "EHHHH"',size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"PHIL",size:16,color:"#A0B8A0",weight:800,gap:4},{text:"RENDERS · QUIET LEGEND",size:11,color:"rgba(240,232,216,0.5)",gap:40},{text:"SUPPORTING CAST",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"MIKAYLA",size:16,color:"#FF9DC4",weight:800,gap:4},{text:"WORKSHOP MANAGER · JUMP ROPE CHAMPION",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"JOE",size:16,color:"#C8A86A",weight:800,gap:4},{text:"SUPPLIES · MAN OF FEW WORDS",size:11,color:"rgba(240,232,216,0.5)",gap:40},{text:"PRODUCTS FEATURED",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"Blood Red Clay · Marbellino · Tadelakt",size:14,color:"rgba(240,232,216,0.7)",gap:8},{text:"Antique Stucco · Metallic · Sgraffito",size:14,color:"rgba(240,232,216,0.7)",gap:8},{text:"Concrete Polish · Venetian Plaster · Limewash",size:14,color:"rgba(240,232,216,0.7)",gap:40},{text:"RADIO STATIONS",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"TEM FM 88.3 · Brunswick Beats 99.9",size:13,color:"rgba(240,232,216,0.6)",gap:8},{text:"Connie's Gold 103.7 · The Scaffold 107.1",size:13,color:"rgba(240,232,216,0.6)",gap:8},{text:"Fabio's Pizza Radio 92.5",size:13,color:"rgba(240,232,216,0.6)",gap:40},{text:"CITY LOCATIONS",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"Melbourne CBD · Fitzroy · Brunswick",size:13,color:"rgba(240,232,216,0.6)",gap:8},{text:"Richmond · St Kilda · Footscray",size:13,color:"rgba(240,232,216,0.6)",gap:40},{text:"GAME DESIGN & DEVELOPMENT",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"Snappabot",size:18,color:"rgba(240,232,216,0.9)",weight:800,gap:4},{text:"Three.js · TypeScript · Vite",size:11,color:"rgba(200,168,106,0.4)",gap:40},{text:"MADE WITH 🌳 IN MELBOURNE",size:14,color:"#C8A86A",spacing:2,gap:40},{text:'"The walls remember every hand that shaped them."',size:14,color:"rgba(200,168,106,0.6)",italic:!0,gap:60},{text:"TROWELED EARTH MELBOURNE",size:14,color:"#C8A86A",spacing:2,gap:8},{text:"troweledearthmelbourne.com.au",size:12,color:"rgba(200,168,106,0.4)",gap:80}];class vx{constructor(){E(this,"overlay");E(this,"creditsAudio",null);E(this,"rafId",0)}show(){return new Promise(e=>this._build(e))}_build(e){this._injectStyles(),this.overlay=document.createElement("div"),this.overlay.id="credits-overlay",this.overlay.style.cssText=`
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
    `,t.addEventListener("click",()=>this._finish(e));const n=document.createElement("div");n.id="credits-scroller",n.style.cssText=`
      position:absolute; left:50%; transform:translateX(-50%);
      width:100%; max-width:600px;
      top:100vh;
      text-align:center;
      padding:0 32px;
      box-sizing:border-box;
    `;let i=0;xx.forEach(d=>{const u=document.createElement("div"),f=d.size||14;u.textContent=d.text,u.style.cssText=`
        color: ${d.color||"rgba(240,232,216,0.8)"};
        font-size: ${f}px;
        font-weight: ${d.weight||400};
        letter-spacing: ${d.spacing||0}px;
        font-style: ${d.italic?"italic":"normal"};
        margin-bottom: ${d.gap||16}px;
        line-height: 1.4;
      `,n.appendChild(u),i+=f*1.4+(d.gap||16)});const s=document.createElement("div");s.style.height="100vh",n.appendChild(s);const a=document.createElement("div");a.style.cssText=`
      position:absolute; inset:0; z-index:5; pointer-events:none;
      background: linear-gradient(
        180deg,
        rgba(5,4,2,1) 0%,
        rgba(5,4,2,0) 8%,
        rgba(5,4,2,0) 92%,
        rgba(5,4,2,1) 100%
      );
    `,this.overlay.appendChild(t),this.overlay.appendChild(n),this.overlay.appendChild(a),document.body.appendChild(this.overlay),this._startAudio();const r=.6;let l=-window.innerHeight;const c=i+window.innerHeight,h=()=>{if(this.overlay.isConnected){if(l+=r,n.style.transform=`translateX(-50%) translateY(-${l}px)`,l>c){this._finish(e);return}this.rafId=requestAnimationFrame(h)}};this.rafId=requestAnimationFrame(h)}_startAudio(){try{const e=new Audio;e.src=On.credits,e.volume=0,e.play().then(()=>{this.creditsAudio=e;let t=0;const n=setInterval(()=>{t=Math.min(t+.02,.65),e.volume=t,t>=.65&&clearInterval(n)},80)}).catch(()=>{})}catch{}}_finish(e){if(cancelAnimationFrame(this.rafId),this.creditsAudio){const t=this.creditsAudio;let n=t.volume;const i=setInterval(()=>{n=Math.max(0,n-.04),t.volume=n,n<=0&&(clearInterval(i),t.pause(),t.src="")},60)}this.overlay.style.transition="opacity 0.8s",this.overlay.style.opacity="0",setTimeout(()=>{this.overlay.remove(),e()},850)}_injectStyles(){if(document.getElementById("credits-styles"))return;const e=document.createElement("style");e.id="credits-styles",e.textContent=`
      #credits-overlay {
        background: linear-gradient(180deg, #050402 0%, #080604 50%, #050402 100%);
      }
    `,document.head.appendChild(e)}}const _x="./",yx=`${_x}tem-logo-white.jpg`;class bx{constructor(){E(this,"overlay");E(this,"scrollTimer",0);E(this,"ctx",null);E(this,"masterGain",null);E(this,"themeAudio",null)}show(){return new Promise(e=>{this._build(e)})}_build(e){this._injectStyles(),this.overlay=document.createElement("div"),this.overlay.id="start-menu",this.overlay.style.cssText=`
      position:fixed; inset:0; z-index:40000;
      background:#07050302;
      display:flex; flex-direction:column;
      align-items:center; justify-content:center;
      font-family: system-ui, -apple-system, sans-serif;
      overflow:hidden;
    `;const t=document.createElement("div");t.className="sm-lyrics-back";const n=document.createElement("div");n.id="sm-lyrics-inner";const i=[...fc,...fc];i.forEach(d=>{const u=document.createElement("div");u.className="sm-lyric-line",u.textContent=d,n.appendChild(u)}),t.appendChild(n),this.overlay.appendChild(t);const s=document.createElement("div");s.className="sm-gradient",this.overlay.appendChild(s);const a=document.createElement("div");a.className="sm-content",a.innerHTML=`
      <img src="${yx}" alt="Troweled Earth" class="sm-logo-img"
        onerror="this.outerHTML='<div class=sm-logo>🌳</div>'">
      <div class="sm-title">TROWELED EARTH RUSH</div>
      <div class="sm-tagline">"The walls remember every hand that shaped them."</div>
    `;const r=document.createElement("div");r.className="sm-btn-row";const l=this._btn("▶  PLAY","#C1666B","#9E4A50");l.style.fontSize="18px",l.style.padding="18px 48px",l.addEventListener("click",()=>{this._stopAudio(),this.overlay.style.transition="opacity 0.5s",this.overlay.style.opacity="0",setTimeout(()=>{this.overlay.remove(),e()},520)});const c=this._btn("📋  HOW TO PLAY","rgba(200,168,106,0.18)","rgba(200,168,106,0.28)");c.style.border="1.5px solid rgba(200,168,106,0.4)",c.addEventListener("click",()=>this._showHowToPlay());const h=this._btn("🎬  CREDITS","rgba(255,255,255,0.06)","rgba(255,255,255,0.12)");h.style.border="1.5px solid rgba(255,255,255,0.15)",h.style.color="rgba(255,255,255,0.55)",h.addEventListener("click",()=>{this._killAudio(),this.overlay.style.opacity="0",this.overlay.style.transition="opacity 0.3s",setTimeout(async()=>{await new vx().show(),this.overlay.style.opacity="1",this._startAudio()},320)}),r.appendChild(l),r.appendChild(c),r.appendChild(h),a.appendChild(r),this.overlay.appendChild(a),document.body.appendChild(this.overlay),this._startScroll(n,i.length),this.overlay.addEventListener("click",()=>this._startAudio(),{once:!0})}_btn(e,t,n){const i=document.createElement("button");return i.innerHTML=e,i.style.cssText=`
      background:${t}; border:none; color:#fff;
      font-size:14px; font-weight:800; letter-spacing:1px;
      padding:14px 32px; border-radius:50px; cursor:pointer;
      touch-action:manipulation; transition:background 0.15s, transform 0.1s;
      font-family:system-ui,sans-serif;
      box-shadow:0 4px 20px rgba(0,0,0,0.4);
    `,i.addEventListener("mouseenter",()=>{i.style.background=n,i.style.transform="translateY(-2px)"}),i.addEventListener("mouseleave",()=>{i.style.background=t,i.style.transform=""}),i}_startScroll(e,t){let n=0;const a=t*38/2,r=()=>{n+=.35,n>=a&&(n=0),e.style.transform=`translateY(-${n}px)`,this.scrollTimer=requestAnimationFrame(r)};this.scrollTimer=requestAnimationFrame(r)}_startAudio(){try{const e=new Audio;e.src=On.theme,e.volume=0,e.loop=!0,this.themeAudio=e,e.play().then(()=>{let t=0;const n=setInterval(()=>{if(!this.themeAudio){clearInterval(n);return}t=Math.min(t+.02,.6),e.volume=t,t>=.6&&clearInterval(n)},100)}).catch(()=>{this.themeAudio=null,this._startSynthAudio()});return}catch{}this._startSynthAudio()}_startSynthAudio(){try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=0,this.masterGain.connect(this.ctx.destination),this.masterGain.gain.linearRampToValueAtTime(.1,this.ctx.currentTime+2);const e=76,t=e/60;let n=this.ctx.currentTime+.5;const i=this.ctx.createOscillator(),s=this.ctx.createGain(),a=this.ctx.createBiquadFilter();i.type="sine",i.frequency.value=55,a.type="lowpass",a.frequency.value=180,s.gain.value=.5,i.connect(a),a.connect(s),s.connect(this.masterGain),i.start(n);for(let r=0;r<180;r++){const l=n+r/t,c=r%4;c===0&&this._kick(l,55),(c===1||c===3)&&this._snare(l),this._hihat(l),c===0&&this._bass(l,55),r%8===0&&this._pad(l,220*(r%16<8?1:1.5))}}catch{}}_killAudio(){this.themeAudio&&(this.themeAudio.pause(),this.themeAudio.src="",this.themeAudio=null);try{this.ctx&&(this.ctx.close(),this.ctx=null,this.masterGain=null)}catch{}}_stopAudio(){if(this.themeAudio){const e=this.themeAudio;let t=e.volume;const n=setInterval(()=>{t=Math.max(0,t-.05),e.volume=t,t<=0&&(clearInterval(n),e.pause(),e.src="")},50)}try{this.masterGain&&this.ctx&&(this.masterGain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.5),setTimeout(()=>{var e;try{(e=this.ctx)==null||e.close()}catch{}},600))}catch{}}_kick(e,t){if(!(!this.ctx||!this.masterGain))try{const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.frequency.setValueAtTime(t,e),n.frequency.exponentialRampToValueAtTime(20,e+.15),i.gain.setValueAtTime(.5,e),i.gain.exponentialRampToValueAtTime(.001,e+.28),n.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+.32)}catch{}}_snare(e){if(!(!this.ctx||!this.masterGain))try{const t=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*.18),this.ctx.sampleRate),n=t.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=Math.random()*2-1;const i=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),a=this.ctx.createGain();i.buffer=t,s.type="bandpass",s.frequency.value=1800,a.gain.setValueAtTime(.055,e),a.gain.exponentialRampToValueAtTime(.001,e+.18),i.connect(s),s.connect(a),a.connect(this.masterGain),i.start(e),i.stop(e+.2)}catch{}}_hihat(e){if(!(!this.ctx||!this.masterGain))try{const t=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*.04),this.ctx.sampleRate),n=t.getChannelData(0);for(let r=0;r<n.length;r++)n[r]=Math.random()*2-1;const i=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),a=this.ctx.createGain();i.buffer=t,s.type="highpass",s.frequency.value=9e3,a.gain.setValueAtTime(.016,e),a.gain.exponentialRampToValueAtTime(.001,e+.04),i.connect(s),s.connect(a),a.connect(this.masterGain),i.start(e),i.stop(e+.05)}catch{}}_bass(e,t){if(!(!this.ctx||!this.masterGain))try{const n=this.ctx.createOscillator(),i=this.ctx.createBiquadFilter(),s=this.ctx.createGain();n.type="sawtooth",n.frequency.value=t,i.type="lowpass",i.frequency.value=280,s.gain.setValueAtTime(.3,e),s.gain.exponentialRampToValueAtTime(.001,e+.45),n.connect(i),i.connect(s),s.connect(this.masterGain),n.start(e),n.stop(e+.5)}catch{}}_pad(e,t){if(!(!this.ctx||!this.masterGain))try{const n=this.ctx.createOscillator(),i=this.ctx.createGain(),s=this.ctx.createBiquadFilter();n.type="triangle",n.frequency.value=t,s.type="lowpass",s.frequency.value=1e3,i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.07,e+.6),i.gain.linearRampToValueAtTime(0,e+4),n.connect(s),s.connect(i),i.connect(this.masterGain),n.start(e),n.stop(e+4.5)}catch{}}_showHowToPlay(){const e=document.createElement("div");e.style.cssText=`
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
    `,document.head.appendChild(e)}}const wx={Matt:`Matt folds himself into the back. "Took your time." He's already on his phone.`,Jose:'Jose appears from nowhere, bucket in hand. "Vámonos — I was getting bored."',Jarrad:`Jarrad adjusts his hard hat. "I've been standing here fifteen minutes." He has.`,Phil:`Phil sips the last of his tea, unhurried. "Right then. Let's go." He fastens his seatbelt twice.`,Tsuyoshi:"Tsuyoshi vaults in without opening the door. His mohawk grazes the roof lining.",Fabio:`Fabio loads in, trowel over his shoulder. "You're late. Ehhhh —" he waves it off. "I found a pizza place nearby. Very acceptable."`};async function Mx(){await Qm(),await new mx().play(),await new bx().show();const o=new tg;await o.init();const e=new rg(o.scene);e.spawnCrewAtCityPositions();const t=new Eg,n=new ag(o.scene),i=new Tg,s=new Fg,a=new ax,r=new xo,l=new fg(n,t,O=>{r.activePhase>=2&&i.triggerBump(O)},o.collisionWorld,()=>{r.activePhase>=2&&i.triggerCrash()}),c=new ia(o.scene),h=new Ig(O=>{h.hide(),a.show(`📋 ${O.title}`,`Client: ${O.client}

${O.description}

💰 Pay: $${O.pay.toLocaleString()}

🏭 Head to the TEM workshop to collect supplies.`,()=>{r.acceptJob(O),c.setTarget(xo.WORKSHOP_POS),s.setActiveJob(O,1),s.updateCrewStatus([],[],!1),G=0;const te=20+Math.random()*60,ie=te+20+Math.random()*50;Math.random()>.5?(k=te,W=ie):(W=te,k=ie),q=null,X=null},Jn(lx))});i.onSpill=O=>{r.money=Math.max(0,r.money-O),s.updateMoney(r.money),s.showSpillPenalty(O)};const d=document.createElement("button");d.textContent="📋 JOBS",d.style.cssText=`
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
  `,d.addEventListener("pointerenter",()=>{d.style.background="rgba(212, 120, 125, 0.95)",d.style.transform="translateY(-2px)"}),d.addEventListener("pointerleave",()=>{d.style.background="rgba(193, 102, 107, 0.9)",d.style.transform=""}),d.addEventListener("click",()=>{h.isVisible()?h.hide():h.show(r.getAvailableJobs())}),document.body.appendChild(d);const u=new Zg(o.scene),f=new nx(o.scene),g=new sa(o.scene),x=new ix,m=new ni(o.scene),p=new fs(o.scene),w=new rx,S=new L(ni.POS.x,6,ni.POS.z),v=new Xg,I=new jg,A=new ys,C=new hx,R=document.createElement("button");R.textContent="📸",R.title="Photo Collection",R.style.cssText=`
    position: fixed; top: 16px; left: 16px;
    z-index: 1000; background: rgba(70,70,70,0.9);
    color: #fff; border: none; border-radius: 50%;
    width: 52px; height: 52px; font-size: 22px;
    cursor: pointer; touch-action: manipulation;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    transition: background 0.15s, transform 0.1s;
  `,R.addEventListener("pointerenter",()=>{R.style.background="rgba(100,100,100,0.95)",R.style.transform="scale(1.1)"}),R.addEventListener("pointerleave",()=>{R.style.background="rgba(70,70,70,0.9)",R.style.transform=""}),R.addEventListener("click",()=>I.show()),document.body.appendChild(R);let b=!1;const y={x:-60,z:-100},P={x:100,z:60};let G=0,k=-1,W=-1,q=null,X=null;const ee=document.createElement("div");ee.style.cssText=`
    position:fixed; top:8px; left:8px; z-index:5000;
    background:rgba(0,0,0,0.6); color:#fff; font-size:11px;
    font-family:monospace; padding:6px 10px; border-radius:6px;
    pointer-events:none; line-height:1.5;
  `,document.body.appendChild(ee),o.onUpdate(O=>{const te=n.mesh.position.x,ie=n.mesh.position.z;if(a.isActive){(t.forward||t.brake)&&a.tryResume(),e.updateAll(O),m.update(O,te,ie,w),p.update(O,te,ie,w),o.camera.follow(n.mesh.position,n.velocity,n.heading);{const se=S.clone().project(o.camera.camera),ge=(se.x*.5+.5)*window.innerWidth,Ie=(-se.y*.5+.5)*window.innerHeight;w.setScreenPosition(ge,Ie)}return}l.update(O),n.updateSuspension(O);const we=r.activeJob!==null&&r.activePhase>=2;if(i.setVisible(we),we?i.update(O):i.level=0,e.updateAll(O),g.update(O),g.tryVisit(te,ie)&&q!=="coffee"&&(i.level=Math.max(0,i.level-.6),x.drinkCoffee(),x.isUrgent?s.showToast("☕ Coffeed up — now find a toilet, fast!",13918762):s.showToast("☕ Coffee hit! Plaster steady, bladder loading...",13918762)),x.update(O,r.activeJob?l.speed:0),x.tryRelief(te,ie)&&q!=="toilet"&&s.showToast("🚽 Ahhh! Relief! Ready for the next coffee ☕",2201331),x.isUrgent&&r.activeJob){const se=Date.now();se-x.lastUrgentToast>15e3&&(x.lastUrgentToast=se,s.showToast("🚽 Bursting! Find the toilet before you spill!",16733986))}i.spillRateMultiplier=x.spillMultiplier,m.update(O,te,ie,w)&&S.set(ni.POS.x,6,ni.POS.z),p.update(O,te,ie,w)&&S.set(fs.POS.x,6,fs.POS.z);const Fe=e.checkProximityDialogue(te,ie);Fe&&(S.set(Fe.pos.x,6,Fe.pos.z),w.show(zn[Fe.name],Fe.line));{const se=S.clone().project(o.camera.camera),ge=(se.x*.5+.5)*window.innerWidth,Ie=(-se.y*.5+.5)*window.innerHeight;w.setScreenPosition(ge,Ie)}u.update(O,te,ie),f.update(O,te,ie);const Xe=u.resolveVan(te,ie);if(Xe.hit&&(n.mesh.position.x=Xe.x,n.mesh.position.z=Xe.z,l.applyImpulse(0,0),r.activePhase>=2&&i.triggerCrash()),c.update(O,te,ie),r.activeJob){const se=r.tickTravel(O);s.updateTravelTimer(r.travelTimer),se!=null&&se.failed&&(i.level=0,q=null,X=null,k=-1,W=-1,c.setTarget(null),s.updateTravelTimer(null),s.showTimerFail(15e4),s.setActiveJob(null,1),s.updateMoney(r.money),s.updateCrewStatus([],[],!1),e.showAllCrew(),setTimeout(()=>h.show(r.getAvailableJobs()),3500))}else s.updateTravelTimer(null);if(r.activeJob!==null)if(r.activePhase===1)s.updateJobDistance(r.distanceToWorkshop(te,ie));else if(r.activePhase===2){const se=r.nextCrewNeeded();if(se){const ge=e.getCrewPosition(se);s.updateJobDistance(r.distanceToPoint(te,ie,ge.x,ge.z))}}else s.updateJobDistance(r.distanceTo(te,ie));if(r.activeJob&&!q&&!b&&(G+=O,k>0&&G>=k?(k=-1,q="coffee",X=c.currentTarget,c.setTarget(y),s.showToast("☕ Gagging for a coffee — hit the cafe NOW!",13918762)):W>0&&G>=W&&(W=-1,q="toilet",x.level=.88,x.isUrgent=!0,X=c.currentTarget,c.setTarget(P),s.showToast("🚽 Bursting! Find the toilet before you ruin the plastering!",16733986))),r.activeJob&&q&&!b){const se=q==="coffee"?y:P,ge=te-se.x,Ie=ie-se.z;if(Math.sqrt(ge*ge+Ie*Ie)<14){b=!0;const $e=q;q=null;const Oe=X;X=null,$e==="coffee"?(x.drinkCoffee(),a.show("☕ Coffee Break!",`You grab a flat white. The barista nods — they know the order.

Bladder's loading... don't take too long.

Back on the road.`,()=>{c.setTarget(Oe),b=!1},Jn(cr))):(x.level=0,x.isUrgent=!1,x.caffeinated=!1,a.show("🚽 Phew — Crisis Averted!",`Barely made it. Not a word to the crew.

Back on the road.`,()=>{c.setTarget(Oe),b=!1},Jn(cr)))}}if(r.activeJob&&r.activePhase===1&&!q&&!b&&r.checkPhase1Arrival(te,ie)){b=!0,i.level=0,p.playLaugh();const se=r.crewToPickup.join(" + ");a.show("📦 Supplies Loaded!",`Connie's cackle echoes through the factory as the buckets go in.

Now go pick up the crew:
👷 ${se}

They're scattered around the city. Your waypoint will guide you.`,()=>{r.advanceToPhase2();const ge=r.nextCrewNeeded();if(ge){const Ie=e.getCrewPosition(ge);c.setTarget(Ie)}s.showPhase1Complete(),s.setActiveJob(r.activeJob,2),s.updateCrewStatus(r.crewToPickup,r.crewPickedUp,!0),b=!1},Jn(lr))}if(r.activeJob&&r.activePhase===2&&!q&&!b)for(const se of r.crewToPickup){if(r.crewPickedUp.includes(se))continue;const ge=e.getCrewPosition(se);if(r.distanceToPoint(te,ie,ge.x,ge.z)<10){b=!0,e.hideCrew(se);const $e=r.pickupCrew(se);s.updateCrewStatus(r.crewToPickup,r.crewPickedUp,!0);const Oe=wx[se]??`${se} hops in.`;if($e)a.show(`🚐 ${se} aboard — Full crew!`,`${Oe}

Full crew loaded. Everyone's in (sort of).

Head to the job site now. Your waypoint is set.`,()=>{r.advanceToPhase3(),c.setTarget(r.activeJob.position),s.showCrewPickup(se,null),s.setActiveJob(r.activeJob,3),b=!1},Jn(lr));else{const ot=r.nextCrewNeeded(),B=r.crewToPickup.filter(pt=>!r.crewPickedUp.includes(pt)).join(", ");a.show(`🧑‍🔧 ${se} aboard!`,`${Oe}

Still need to collect:
👷 ${B}`,()=>{if(ot){const pt=e.getCrewPosition(ot);c.setTarget(pt),s.showCrewPickup(se,ot)}s.updateCrewStatus(r.crewToPickup,r.crewPickedUp,!0),b=!1},Jn(cr))}break}}if(r.activeJob&&r.activePhase===3&&!q&&!b&&!v.isActive()){const se=r.checkArrival(te,ie);se!==null&&(b=!0,c.setTarget(null),a.show(`🏗️ ${se.title}`,`${se.client} is waiting.

${se.description}

Time to get to work. Show them what TEM does.`,()=>{s.setActiveJob(null,3),s.updateCrewStatus([],[],!1),C.setVisible(!1),v.startRandom(ge=>{C.setVisible(!0);const Ie=r.completeJob(se,ge.qualityPct);Ie<0?s.showPenalty(se.title,Math.abs(Ie)):s.showJobComplete(se.title,Ie),s.updateMoney(r.money),e.showAllCrew(),q=null,X=null,k=-1,W=-1,b=!1,hh()&&!ys.isUnlocked()?setTimeout(()=>A.trigger(),2e3):setTimeout(()=>{const $e=r.getAvailableJobs();$e.length>0&&h.show($e)},3500)})},Jn(lr)))}o.camera.follow(n.mesh.position,n.velocity,n.heading),s.update(l.speed,i.level);const $=r.activeJob,oe=$?`P${r.activePhase}`:"idle",ye=$?r.activePhase===1?Math.round(r.distanceToWorkshop(te,ie)):r.activePhase===2?Math.round(r.distanceToPoint(te,ie,...(()=>{const se=r.nextCrewNeeded();if(!se)return[te,ie];const ge=e.getCrewPosition(se);return[ge.x,ge.z]})())):Math.round(r.distanceTo(te,ie)):0,le=$?`crew:${r.crewPickedUp.length}/${r.crewToPickup.length}`:"";ee.textContent=`${oe} | dist:${ye} | ${le} | lock:${b} | mg:${v.isActive()}`}),setTimeout(()=>{h.show(r.getAvailableJobs())},1e3),o.start()}Mx().catch(o=>{console.error("Game init failed:",o),document.body.style.background="#000";const e=document.createElement("div");e.style.cssText=`
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    color:#fff;font-family:sans-serif;font-size:18px;text-align:center;
    background:rgba(200,40,40,0.9);padding:24px 32px;border-radius:16px;
    max-width:90vw;z-index:9999;
  `,e.innerHTML=`<b>🚨 Game failed to start</b><br><br>${(o==null?void 0:o.message)||String(o)}`,document.body.appendChild(e)});
//# sourceMappingURL=index-kprQDcIe.js.map
