var eh=Object.defineProperty;var th=(s,e,t)=>e in s?eh(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var C=(s,e,t)=>th(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qr="170",nh=0,Ra=1,ih=2,Zl=1,Ql=2,Mn=3,Hn=0,Pt=1,Ht=2,Tn=0,Ii=1,or=2,Pa=3,Ia=4,sh=5,Zn=100,oh=101,rh=102,ah=103,lh=104,ch=200,hh=201,dh=202,uh=203,rr=204,ar=205,fh=206,ph=207,mh=208,gh=209,_h=210,vh=211,xh=212,yh=213,Mh=214,lr=0,cr=1,hr=2,Fi=3,dr=4,ur=5,fr=6,pr=7,ea=0,bh=1,wh=2,Gn=0,ec=1,tc=2,nc=3,ta=4,Sh=5,ic=6,sc=7,oc=300,Bi=301,Ui=302,mr=303,gr=304,go=306,_r=1e3,ni=1001,vr=1002,on=1003,Th=1004,Es=1005,un=1006,wo=1007,ii=1008,Cn=1009,rc=1010,ac=1011,gs=1012,na=1013,ai=1014,wn=1015,En=1016,ia=1017,sa=1018,Ni=1020,lc=35902,cc=1021,hc=1022,sn=1023,dc=1024,uc=1025,Di=1026,Oi=1027,fc=1028,oa=1029,pc=1030,ra=1031,aa=1033,Zs=33776,Qs=33777,eo=33778,to=33779,xr=35840,yr=35841,Mr=35842,br=35843,wr=36196,Sr=37492,Tr=37496,Er=37808,Ar=37809,Cr=37810,Rr=37811,Pr=37812,Ir=37813,Dr=37814,Lr=37815,Fr=37816,Br=37817,Ur=37818,Nr=37819,Or=37820,kr=37821,no=36492,zr=36494,Gr=36495,mc=36283,Hr=36284,Vr=36285,Wr=36286,Eh=2200,Ah=2201,Ch=2202,oo=2300,Xr=2301,So=2302,Ai=2400,Ci=2401,ro=2402,la=2500,Rh=2501,Ph=3200,Ih=3201,gc=0,Dh=1,kn="",qt="srgb",Gi="srgb-linear",_o="linear",tt="srgb",di=7680,Da=519,Lh=512,Fh=513,Bh=514,_c=515,Uh=516,Nh=517,Oh=518,kh=519,La=35044,Fa="300 es",Sn=2e3,ao=2001;class li{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const o=i.indexOf(t);o!==-1&&i.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let o=0,r=i.length;o<r;o++)i[o].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],To=Math.PI/180,qr=180/Math.PI;function Hi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(At[s&255]+At[s>>8&255]+At[s>>16&255]+At[s>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[n&255]+At[n>>8&255]+At[n>>16&255]+At[n>>24&255]).toLowerCase()}function Ut(s,e,t){return Math.max(e,Math.min(t,s))}function zh(s,e){return(s%e+e)%e}function Eo(s,e,t){return(1-t)*s+t*e}function $i(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Bt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*n-r*i+e.x,this.y=o*i+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ze{constructor(e,t,n,i,o,r,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,r,a,l,c)}set(e,t,n,i,o,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=o,h[5]=l,h[6]=n,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,r=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],S=i[4],v=i[7],P=i[2],E=i[5],A=i[8];return o[0]=r*_+a*b+l*P,o[3]=r*m+a*S+l*E,o[6]=r*p+a*v+l*A,o[1]=c*_+h*b+u*P,o[4]=c*m+h*S+u*E,o[7]=c*p+h*v+u*A,o[2]=d*_+f*b+g*P,o[5]=d*m+f*S+g*E,o[8]=d*p+f*v+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-n*o*h+n*a*l+i*o*c-i*r*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*r-a*c,d=a*l-h*o,f=c*o-r*l,g=t*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(i*c-h*n)*_,e[2]=(a*n-i*r)*_,e[3]=d*_,e[4]=(h*t-i*l)*_,e[5]=(i*o-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(r*t-n*o)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,o,r,a){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*a)+r+e,-i*c,i*l,-i*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ao.makeScale(e,t)),this}rotate(e){return this.premultiply(Ao.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ao.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ao=new ze;function vc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function lo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Gh(){const s=lo("canvas");return s.style.display="block",s}const Ba={};function hs(s){s in Ba||(Ba[s]=!0,console.warn(s))}function Hh(s,e,t){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Vh(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Wh(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qe={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===tt&&(s.r=An(s.r),s.g=An(s.g),s.b=An(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===tt&&(s.r=Li(s.r),s.g=Li(s.g),s.b=Li(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?_o:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function An(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Li(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ua=[.64,.33,.3,.6,.15,.06],Na=[.2126,.7152,.0722],Oa=[.3127,.329],ka=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),za=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qe.define({[Gi]:{primaries:Ua,whitePoint:Oa,transfer:_o,toXYZ:ka,fromXYZ:za,luminanceCoefficients:Na,workingColorSpaceConfig:{unpackColorSpace:qt},outputColorSpaceConfig:{drawingBufferColorSpace:qt}},[qt]:{primaries:Ua,whitePoint:Oa,transfer:tt,toXYZ:ka,fromXYZ:za,luminanceCoefficients:Na,outputColorSpaceConfig:{drawingBufferColorSpace:qt}}});let ui;class Xh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ui===void 0&&(ui=lo("canvas")),ui.width=e.width,ui.height=e.height;const n=ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=lo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),o=i.data;for(let r=0;r<o.length;r++)o[r]=An(o[r]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(An(t[n]/255)*255):t[n]=An(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qh=0;class xc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let r=0,a=i.length;r<a;r++)i[r].isDataTexture?o.push(Co(i[r].image)):o.push(Co(i[r]))}else o=Co(i);n.url=o}return t||(e.images[this.uuid]=n),n}}function Co(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Xh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Yh=0;class Lt extends li{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,n=ni,i=ni,o=un,r=ii,a=sn,l=Cn,c=Lt.DEFAULT_ANISOTROPY,h=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Hi(),this.name="",this.source=new xc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _r:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _r:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=oc;Lt.DEFAULT_ANISOTROPY=1;class it{constructor(e=0,t=0,n=0,i=1){it.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i+r[12]*o,this.y=r[1]*t+r[5]*n+r[9]*i+r[13]*o,this.z=r[2]*t+r[6]*n+r[10]*i+r[14]*o,this.w=r[3]*t+r[7]*n+r[11]*i+r[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,o;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,v=(f+1)/2,P=(p+1)/2,E=(h+d)/4,A=(u+_)/4,I=(g+m)/4;return S>v&&S>P?S<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(S),i=E/n,o=A/n):v>P?v<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(v),n=E/i,o=I/i):P<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(P),n=A/o,i=I/o),this.set(n,i,o,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(d-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jh extends li{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Lt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends jh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class yc extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jh extends Lt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,o,r,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=o[r+0],f=o[r+1],g=o[r+2],_=o[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*_,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const P=Math.sqrt(S),E=Math.atan2(P,p*b);m=Math.sin(m*E)/P,a=Math.sin(a*E)/P}const v=a*b;if(l=l*m+d*v,c=c*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,o,r){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=o[r],d=o[r+1],f=o[r+2],g=o[r+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,o=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(o/2),d=l(n/2),f=l(i/2),g=l(o/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],o=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(o-c)*f,this._z=(r-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+r)/f,this._z=(o+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(o-c)/f,this._x=(i+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-i)/f,this._x=(o+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,o=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+r*a+i*c-o*l,this._y=i*h+r*l+o*a-n*c,this._z=o*h+r*c+n*l-i*a,this._w=r*h-n*a-i*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,o=this._z,r=this._w;let a=r*e._w+n*e._x+i*e._y+o*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=n,this._y=i,this._z=o,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ga.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ga.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*i,this.y=o[1]*t+o[4]*n+o[7]*i,this.z=o[2]*t+o[5]*n+o[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,o=e.elements,r=1/(o[3]*t+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*i+o[12])*r,this.y=(o[1]*t+o[5]*n+o[9]*i+o[13])*r,this.z=(o[2]*t+o[6]*n+o[10]*i+o[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,o=e.x,r=e.y,a=e.z,l=e.w,c=2*(r*i-a*n),h=2*(a*t-o*i),u=2*(o*n-r*t);return this.x=t+l*c+r*u-a*h,this.y=n+l*h+a*c-o*u,this.z=i+l*u+o*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i,this.y=o[1]*t+o[5]*n+o[9]*i,this.z=o[2]*t+o[6]*n+o[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,o=e.z,r=t.x,a=t.y,l=t.z;return this.x=i*l-o*a,this.y=o*r-n*l,this.z=n*a-i*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ro=new D,Ga=new Yt;class ys{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)e.isMesh===!0?e.getVertexPosition(r,Kt):Kt.fromBufferAttribute(o,r),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),As.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(e.matrixWorld),this.union(As)}const i=e.children;for(let o=0,r=i.length;o<r;o++)this.expandByObject(i[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),Cs.subVectors(this.max,Ki),fi.subVectors(e.a,Ki),pi.subVectors(e.b,Ki),mi.subVectors(e.c,Ki),Dn.subVectors(pi,fi),Ln.subVectors(mi,pi),Wn.subVectors(fi,mi);let t=[0,-Dn.z,Dn.y,0,-Ln.z,Ln.y,0,-Wn.z,Wn.y,Dn.z,0,-Dn.x,Ln.z,0,-Ln.x,Wn.z,0,-Wn.x,-Dn.y,Dn.x,0,-Ln.y,Ln.x,0,-Wn.y,Wn.x,0];return!Po(t,fi,pi,mi,Cs)||(t=[1,0,0,0,1,0,0,0,1],!Po(t,fi,pi,mi,Cs))?!1:(Rs.crossVectors(Dn,Ln),t=[Rs.x,Rs.y,Rs.z],Po(t,fi,pi,mi,Cs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const gn=[new D,new D,new D,new D,new D,new D,new D,new D],Kt=new D,As=new ys,fi=new D,pi=new D,mi=new D,Dn=new D,Ln=new D,Wn=new D,Ki=new D,Cs=new D,Rs=new D,Xn=new D;function Po(s,e,t,n,i){for(let o=0,r=s.length-3;o<=r;o+=3){Xn.fromArray(s,o);const a=i.x*Math.abs(Xn.x)+i.y*Math.abs(Xn.y)+i.z*Math.abs(Xn.z),l=e.dot(Xn),c=t.dot(Xn),h=n.dot(Xn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const $h=new ys,Zi=new D,Io=new D;class vo{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$h.setFromPoints(e).getCenter(n);let i=0;for(let o=0,r=e.length;o<r;o++)i=Math.max(i,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zi.subVectors(e,this.center);const t=Zi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Zi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zi.copy(e.center).add(Io)),this.expandByPoint(Zi.copy(e.center).sub(Io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new D,Do=new D,Ps=new D,Fn=new D,Lo=new D,Is=new D,Fo=new D;class Mc{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_n)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_n.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_n.copy(this.origin).addScaledVector(this.direction,t),_n.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Do.copy(e).add(t).multiplyScalar(.5),Ps.copy(t).sub(e).normalize(),Fn.copy(this.origin).sub(Do);const o=e.distanceTo(t)*.5,r=-this.direction.dot(Ps),a=Fn.dot(this.direction),l=-Fn.dot(Ps),c=Fn.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*l-a,d=r*a-l,g=o*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-o,-l),o),f=d*(d+2*l)+c):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-l),o),f=-u*u+d*(d+2*l)+c);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Do).addScaledVector(Ps,d),f}intersectSphere(e,t){_n.subVectors(e.center,this.origin);const n=_n.dot(this.direction),i=_n.dot(_n)-n*n,o=e.radius*e.radius;if(i>o)return null;const r=Math.sqrt(o-i),a=n-r,l=n+r;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,o,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(o=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(o=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),n>r||o>i||((o>n||isNaN(n))&&(n=o),(r<i||isNaN(i))&&(i=r),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_n)!==null}intersectTriangle(e,t,n,i,o){Lo.subVectors(t,e),Is.subVectors(n,e),Fo.crossVectors(Lo,Is);let r=this.direction.dot(Fo),a;if(r>0){if(i)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Fn.subVectors(this.origin,e);const l=a*this.direction.dot(Is.crossVectors(Fn,Is));if(l<0)return null;const c=a*this.direction.dot(Lo.cross(Fn));if(c<0||l+c>r)return null;const h=-a*Fn.dot(Fo);return h<0?null:this.at(h/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,n,i,o,r,a,l,c,h,u,d,f,g,_,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,o,r,a,l,c,h,u,d,f,g,_,m)}set(e,t,n,i,o,r,a,l,c,h,u,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=o,p[5]=r,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/gi.setFromMatrixColumn(e,0).length(),o=1/gi.setFromMatrixColumn(e,1).length(),r=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,o=e.z,r=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(o),u=Math.sin(o);if(e.order==="XYZ"){const d=r*h,f=r*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-a,t[2]=f*a-g,t[6]=_+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-r*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*h,t[9]=_-d*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,f=r*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+f,t[1]=u,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=r*l,f=r*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=r*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kh,e,Zh)}lookAt(e,t,n){const i=this.elements;return kt.subVectors(e,t),kt.lengthSq()===0&&(kt.z=1),kt.normalize(),Bn.crossVectors(n,kt),Bn.lengthSq()===0&&(Math.abs(n.z)===1?kt.x+=1e-4:kt.z+=1e-4,kt.normalize(),Bn.crossVectors(n,kt)),Bn.normalize(),Ds.crossVectors(kt,Bn),i[0]=Bn.x,i[4]=Ds.x,i[8]=kt.x,i[1]=Bn.y,i[5]=Ds.y,i[9]=kt.y,i[2]=Bn.z,i[6]=Ds.z,i[10]=kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,o=this.elements,r=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],S=n[7],v=n[11],P=n[15],E=i[0],A=i[4],I=i[8],M=i[12],x=i[1],R=i[5],z=i[9],k=i[13],W=i[2],$=i[6],q=i[10],ee=i[14],V=i[3],J=i[7],oe=i[11],me=i[15];return o[0]=r*E+a*x+l*W+c*V,o[4]=r*A+a*R+l*$+c*J,o[8]=r*I+a*z+l*q+c*oe,o[12]=r*M+a*k+l*ee+c*me,o[1]=h*E+u*x+d*W+f*V,o[5]=h*A+u*R+d*$+f*J,o[9]=h*I+u*z+d*q+f*oe,o[13]=h*M+u*k+d*ee+f*me,o[2]=g*E+_*x+m*W+p*V,o[6]=g*A+_*R+m*$+p*J,o[10]=g*I+_*z+m*q+p*oe,o[14]=g*M+_*k+m*ee+p*me,o[3]=b*E+S*x+v*W+P*V,o[7]=b*A+S*R+v*$+P*J,o[11]=b*I+S*z+v*q+P*oe,o[15]=b*M+S*k+v*ee+P*me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],o=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+o*l*u-i*c*u-o*a*d+n*c*d+i*a*f-n*l*f)+_*(+t*l*f-t*c*d+o*r*d-i*r*f+i*c*h-o*l*h)+m*(+t*c*u-t*a*f-o*r*u+n*r*f+o*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*r*u-n*r*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],o=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],b=u*m*c-_*d*c+_*l*f-a*m*f-u*l*p+a*d*p,S=g*d*c-h*m*c-g*l*f+r*m*f+h*l*p-r*d*p,v=h*_*c-g*u*c+g*a*f-r*_*f-h*a*p+r*u*p,P=g*u*l-h*_*l-g*a*d+r*_*d+h*a*m-r*u*m,E=t*b+n*S+i*v+o*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=b*A,e[1]=(_*d*o-u*m*o-_*i*f+n*m*f+u*i*p-n*d*p)*A,e[2]=(a*m*o-_*l*o+_*i*c-n*m*c-a*i*p+n*l*p)*A,e[3]=(u*l*o-a*d*o-u*i*c+n*d*c+a*i*f-n*l*f)*A,e[4]=S*A,e[5]=(h*m*o-g*d*o+g*i*f-t*m*f-h*i*p+t*d*p)*A,e[6]=(g*l*o-r*m*o-g*i*c+t*m*c+r*i*p-t*l*p)*A,e[7]=(r*d*o-h*l*o+h*i*c-t*d*c-r*i*f+t*l*f)*A,e[8]=v*A,e[9]=(g*u*o-h*_*o-g*n*f+t*_*f+h*n*p-t*u*p)*A,e[10]=(r*_*o-g*a*o+g*n*c-t*_*c-r*n*p+t*a*p)*A,e[11]=(h*a*o-r*u*o-h*n*c+t*u*c+r*n*f-t*a*f)*A,e[12]=P*A,e[13]=(h*_*i-g*u*i+g*n*d-t*_*d-h*n*m+t*u*m)*A,e[14]=(g*a*i-r*_*i-g*n*l+t*_*l+r*n*m-t*a*m)*A,e[15]=(r*u*i-h*a*i+h*n*l-t*u*l-r*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,o=e.z;return t[0]*=n,t[4]*=i,t[8]*=o,t[1]*=n,t[5]*=i,t[9]*=o,t[2]*=n,t[6]*=i,t[10]*=o,t[3]*=n,t[7]*=i,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),o=1-n,r=e.x,a=e.y,l=e.z,c=o*r,h=o*a;return this.set(c*r+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*r,0,c*l-i*a,h*l+i*r,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,o,r){return this.set(1,n,o,0,e,1,r,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,o=t._x,r=t._y,a=t._z,l=t._w,c=o+o,h=r+r,u=a+a,d=o*c,f=o*h,g=o*u,_=r*h,m=r*u,p=a*u,b=l*c,S=l*h,v=l*u,P=n.x,E=n.y,A=n.z;return i[0]=(1-(_+p))*P,i[1]=(f+v)*P,i[2]=(g-S)*P,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(d+p))*E,i[6]=(m+b)*E,i[7]=0,i[8]=(g+S)*A,i[9]=(m-b)*A,i[10]=(1-(d+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let o=gi.set(i[0],i[1],i[2]).length();const r=gi.set(i[4],i[5],i[6]).length(),a=gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),e.x=i[12],e.y=i[13],e.z=i[14],Zt.copy(this);const c=1/o,h=1/r,u=1/a;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=h,Zt.elements[5]*=h,Zt.elements[6]*=h,Zt.elements[8]*=u,Zt.elements[9]*=u,Zt.elements[10]*=u,t.setFromRotationMatrix(Zt),n.x=o,n.y=r,n.z=a,this}makePerspective(e,t,n,i,o,r,a=Sn){const l=this.elements,c=2*o/(t-e),h=2*o/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,g;if(a===Sn)f=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===ao)f=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,o,r,a=Sn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(r-o),d=(t+e)*c,f=(n+i)*h;let g,_;if(a===Sn)g=(r+o)*u,_=-2*u;else if(a===ao)g=o*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gi=new D,Zt=new ht,Kh=new D(0,0,0),Zh=new D(1,1,1),Bn=new D,Ds=new D,kt=new D,Ha=new ht,Va=new Yt;class Vt{constructor(e=0,t=0,n=0,i=Vt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,o=i[0],r=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ut(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ha.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ha,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Va.setFromEuler(this),this.setFromQuaternion(Va,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vt.DEFAULT_ORDER="XYZ";class bc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qh=0;const Wa=new D,_i=new Yt,vn=new ht,Ls=new D,Qi=new D,ed=new D,td=new Yt,Xa=new D(1,0,0),qa=new D(0,1,0),Ya=new D(0,0,1),ja={type:"added"},nd={type:"removed"},vi={type:"childadded",child:null},Bo={type:"childremoved",child:null};class xt extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xt.DEFAULT_UP.clone();const e=new D,t=new Vt,n=new Yt,i=new D(1,1,1);function o(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ht},normalMatrix:{value:new ze}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=xt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.multiply(_i),this}rotateOnWorldAxis(e,t){return _i.setFromAxisAngle(e,t),this.quaternion.premultiply(_i),this}rotateX(e){return this.rotateOnAxis(Xa,e)}rotateY(e){return this.rotateOnAxis(qa,e)}rotateZ(e){return this.rotateOnAxis(Ya,e)}translateOnAxis(e,t){return Wa.copy(e).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xa,e)}translateY(e){return this.translateOnAxis(qa,e)}translateZ(e){return this.translateOnAxis(Ya,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ls.copy(e):Ls.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt(Qi,Ls,this.up):vn.lookAt(Ls,Qi,this.up),this.quaternion.setFromRotationMatrix(vn),i&&(vn.extractRotation(i.matrixWorld),_i.setFromRotationMatrix(vn),this.quaternion.premultiply(_i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ja),vi.child=e,this.dispatchEvent(vi),vi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nd),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vn.multiply(e.parent.matrixWorld)),e.applyMatrix4(vn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ja),vi.child=e,this.dispatchEvent(vi),vi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,e,ed),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,td,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let o=0,r=i.length;o<r;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];o(e.shapes,u)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(o(e.materials,this.material[l]));i.material=a}else i.material=o(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(o(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}xt.DEFAULT_UP=new D(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new D,xn=new D,Uo=new D,yn=new D,xi=new D,yi=new D,Ja=new D,No=new D,Oo=new D,ko=new D,zo=new it,Go=new it,Ho=new it;class nn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qt.subVectors(e,t),i.cross(Qt);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(e,t,n,i,o){Qt.subVectors(i,t),xn.subVectors(n,t),Uo.subVectors(e,t);const r=Qt.dot(Qt),a=Qt.dot(xn),l=Qt.dot(Uo),c=xn.dot(xn),h=xn.dot(Uo),u=r*c-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(r*h-a*l)*d;return o.set(1-f-g,g,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,yn)===null?!1:yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getInterpolation(e,t,n,i,o,r,a,l){return this.getBarycoord(e,t,n,i,yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,yn.x),l.addScaledVector(r,yn.y),l.addScaledVector(a,yn.z),l)}static getInterpolatedAttribute(e,t,n,i,o,r){return zo.setScalar(0),Go.setScalar(0),Ho.setScalar(0),zo.fromBufferAttribute(e,t),Go.fromBufferAttribute(e,n),Ho.fromBufferAttribute(e,i),r.setScalar(0),r.addScaledVector(zo,o.x),r.addScaledVector(Go,o.y),r.addScaledVector(Ho,o.z),r}static isFrontFacing(e,t,n,i){return Qt.subVectors(n,t),xn.subVectors(e,t),Qt.cross(xn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Qt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,o){return nn.getInterpolation(e,this.a,this.b,this.c,t,n,i,o)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,o=this.c;let r,a;xi.subVectors(i,n),yi.subVectors(o,n),No.subVectors(e,n);const l=xi.dot(No),c=yi.dot(No);if(l<=0&&c<=0)return t.copy(n);Oo.subVectors(e,i);const h=xi.dot(Oo),u=yi.dot(Oo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(n).addScaledVector(xi,r);ko.subVectors(e,o);const f=xi.dot(ko),g=yi.dot(ko);if(g>=0&&f<=g)return t.copy(o);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(yi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ja.subVectors(o,i),a=(u-h)/(u-h+(f-g)),t.copy(i).addScaledVector(Ja,a);const p=1/(m+_+d);return r=_*p,a=d*p,t.copy(n).addScaledVector(xi,r).addScaledVector(yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Fs={h:0,s:0,l:0};function Vo(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,qe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=qe.workingColorSpace){if(e=zh(e,1),t=Ut(t,0,1),n=Ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,r=2*n-o;this.r=Vo(r,o,e+1/3),this.g=Vo(r,o,e),this.b=Vo(r,o,e-1/3)}return qe.toWorkingColorSpace(this,i),this}setStyle(e,t=qt){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=i[1],a=i[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=i[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=qt){const n=wc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=An(e.r),this.g=An(e.g),this.b=An(e.b),this}copyLinearToSRGB(e){return this.r=Li(e.r),this.g=Li(e.g),this.b=Li(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=qt){return qe.fromWorkingColorSpace(Ct.copy(this),e),Math.round(Ut(Ct.r*255,0,255))*65536+Math.round(Ut(Ct.g*255,0,255))*256+Math.round(Ut(Ct.b*255,0,255))}getHexString(e=qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(Ct.copy(this),t);const n=Ct.r,i=Ct.g,o=Ct.b,r=Math.max(n,i,o),a=Math.min(n,i,o);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case n:l=(i-o)/u+(i<o?6:0);break;case i:l=(o-n)/u+2;break;case o:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=qt){qe.fromWorkingColorSpace(Ct.copy(this),e);const t=Ct.r,n=Ct.g,i=Ct.b;return e!==qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(Fs);const n=Eo(Un.h,Fs.h,t),i=Eo(Un.s,Fs.s,t),o=Eo(Un.l,Fs.l,t);return this.setHSL(n,i,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*i,this.g=o[1]*t+o[4]*n+o[7]*i,this.b=o[2]*t+o[5]*n+o[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new ye;ye.NAMES=wc;let id=0;class Vi extends li{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Hi(),this.name="",this.blending=Ii,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rr,this.blendDst=ar,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Fi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Da,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ii&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==rr&&(n.blendSrc=this.blendSrc),this.blendDst!==ar&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Fi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Da&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const r=[];for(const a in o){const l=o[a];delete l.metadata,r.push(l)}return r}if(t){const o=i(e.textures),r=i(e.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class jt extends Vi{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new D,Bs=new Ie;class an{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=La,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bs.fromBufferAttribute(this,t),Bs.applyMatrix3(e),this.setXY(t,Bs.x,Bs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,o){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),n=Bt(n,this.array),i=Bt(i,this.array),o=Bt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==La&&(e.usage=this.usage),e}}class Sc extends an{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tc extends an{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class st extends an{constructor(e,t,n){super(new Float32Array(e),t,n)}}let sd=0;const Xt=new ht,Wo=new xt,Mi=new D,zt=new ys,es=new ys,wt=new D;class It extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vc(e)?Tc:Sc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ze().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return Wo.lookAt(e),Wo.updateMatrix(),this.applyMatrix4(Wo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,o=e.length;i<o;i++){const r=e[i];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new st(n,3))}else{for(let n=0,i=t.count;n<i;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const o=t[n];zt.setFromBufferAttribute(o),this.morphTargetsRelative?(wt.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(wt),wt.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(wt)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const a=t[o];es.setFromBufferAttribute(a),this.morphTargetsRelative?(wt.addVectors(zt.min,es.min),zt.expandByPoint(wt),wt.addVectors(zt.max,es.max),zt.expandByPoint(wt)):(zt.expandByPoint(es.min),zt.expandByPoint(es.max))}zt.getCenter(n);let i=0;for(let o=0,r=e.count;o<r;o++)wt.fromBufferAttribute(e,o),i=Math.max(i,n.distanceToSquared(wt));if(t)for(let o=0,r=t.length;o<r;o++){const a=t[o],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)wt.fromBufferAttribute(a,c),l&&(Mi.fromBufferAttribute(e,c),wt.add(Mi)),i=Math.max(i,n.distanceToSquared(wt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new an(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new D,l[I]=new D;const c=new D,h=new D,u=new D,d=new Ie,f=new Ie,g=new Ie,_=new D,m=new D;function p(I,M,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),d.fromBufferAttribute(o,I),f.fromBufferAttribute(o,M),g.fromBufferAttribute(o,x),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[I].add(_),a[M].add(_),a[x].add(_),l[I].add(m),l[M].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,M=b.length;I<M;++I){const x=b[I],R=x.start,z=x.count;for(let k=R,W=R+z;k<W;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const S=new D,v=new D,P=new D,E=new D;function A(I){P.fromBufferAttribute(i,I),E.copy(P);const M=a[I];S.copy(M),S.sub(P.multiplyScalar(P.dot(M))).normalize(),v.crossVectors(E,M);const R=v.dot(l[I])<0?-1:1;r.setXYZW(I,S.x,S.y,S.z,R)}for(let I=0,M=b.length;I<M;++I){const x=b[I],R=x.start,z=x.count;for(let k=R,W=R+z;k<W;k+=3)A(e.getX(k+0)),A(e.getX(k+1)),A(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new an(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,o=new D,r=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),r.fromBufferAttribute(t,m),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,o),u.subVectors(i,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)wt.fromBufferAttribute(e,t),wt.normalize(),e.setXYZ(t,wt.x,wt.y,wt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new an(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new It,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const o=this.morphAttributes;for(const a in o){const l=[],c=o[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,o=!0)}o&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const o=e.morphAttributes;for(const c in o){const h=[],u=o[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $a=new ht,qn=new Mc,Us=new vo,Ka=new D,Ns=new D,Os=new D,ks=new D,Xo=new D,zs=new D,Za=new D,Gs=new D;class N extends xt{constructor(e=new It,t=new jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(o&&a){zs.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=a[l],u=o[l];h!==0&&(Xo.fromBufferAttribute(u,e),r?zs.addScaledVector(Xo,h):zs.addScaledVector(Xo.sub(t),h))}t.add(zs)}return t}raycast(e,t){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Us.copy(n.boundingSphere),Us.applyMatrix4(o),qn.copy(e.ray).recast(e.near),!(Us.containsPoint(qn.origin)===!1&&(qn.intersectSphere(Us,Ka)===null||qn.origin.distanceToSquared(Ka)>(e.far-e.near)**2))&&($a.copy(o).invert(),qn.copy(e.ray).applyMatrix4($a),!(n.boundingBox!==null&&qn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,qn)))}_computeIntersections(e,t,n){let i;const o=this.geometry,r=this.material,a=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,P=S;v<P;v+=3){const E=a.getX(v),A=a.getX(v+1),I=a.getX(v+2);i=Hs(this,p,e,n,c,h,u,E,A,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=a.getX(m),S=a.getX(m+1),v=a.getX(m+2);i=Hs(this,r,e,n,c,h,u,b,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=r[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,P=S;v<P;v+=3){const E=v,A=v+1,I=v+2;i=Hs(this,p,e,n,c,h,u,E,A,I),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const b=m,S=m+1,v=m+2;i=Hs(this,r,e,n,c,h,u,b,S,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function od(s,e,t,n,i,o,r,a){let l;if(e.side===Pt?l=n.intersectTriangle(r,o,i,!0,a):l=n.intersectTriangle(i,o,r,e.side===Hn,a),l===null)return null;Gs.copy(a),Gs.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Gs);return c<t.near||c>t.far?null:{distance:c,point:Gs.clone(),object:s}}function Hs(s,e,t,n,i,o,r,a,l,c){s.getVertexPosition(a,Ns),s.getVertexPosition(l,Os),s.getVertexPosition(c,ks);const h=od(s,e,t,n,Ns,Os,ks,Za);if(h){const u=new D;nn.getBarycoord(Za,Ns,Os,ks,u),i&&(h.uv=nn.getInterpolatedAttribute(i,a,l,c,u,new Ie)),o&&(h.uv1=nn.getInterpolatedAttribute(o,a,l,c,u,new Ie)),r&&(h.normal=nn.getInterpolatedAttribute(r,a,l,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};nn.getNormal(Ns,Os,ks,d.normal),h.face=d,h.barycoord=u}return h}class ne extends It{constructor(e=1,t=1,n=1,i=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:o,depthSegments:r};const a=this;i=Math.floor(i),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,t,e,r,o,0),g("z","y","x",1,-1,n,t,-e,r,o,1),g("x","z","y",1,1,e,n,t,i,r,2),g("x","z","y",1,-1,e,n,-t,i,r,3),g("x","y","z",1,-1,e,t,n,i,o,4),g("x","y","z",-1,-1,e,t,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new st(c,3)),this.setAttribute("normal",new st(h,3)),this.setAttribute("uv",new st(u,2));function g(_,m,p,b,S,v,P,E,A,I,M){const x=v/A,R=P/I,z=v/2,k=P/2,W=E/2,$=A+1,q=I+1;let ee=0,V=0;const J=new D;for(let oe=0;oe<q;oe++){const me=oe*R-k;for(let Le=0;Le<$;Le++){const Ye=Le*x-z;J[_]=Ye*b,J[m]=me*S,J[p]=W,c.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=E>0?1:-1,h.push(J.x,J.y,J.z),u.push(Le/A),u.push(1-oe/I),ee+=1}}for(let oe=0;oe<I;oe++)for(let me=0;me<A;me++){const Le=d+me+$*oe,Ye=d+me+$*(oe+1),Y=d+(me+1)+$*(oe+1),ie=d+(me+1)+$*oe;l.push(Le,Ye,ie),l.push(Ye,Y,ie),V+=6}a.addGroup(f,V,M),f+=V,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ne(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ki(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Dt(s){const e={};for(let t=0;t<s.length;t++){const n=ki(s[t]);for(const i in n)e[i]=n[i]}return e}function rd(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ec(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const _s={clone:ki,merge:Dt};var ad=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rt extends Vi{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ad,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ki(e.uniforms),this.uniformsGroups=rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?t.uniforms[i]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[i]={type:"m4",value:r.toArray()}:t.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ac extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Sn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nn=new D,Qa=new Ie,el=new Ie;class Nt extends Ac{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(To*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qr*2*Math.atan(Math.tan(To*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Nn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z),Nn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Nn.x,Nn.y).multiplyScalar(-e/Nn.z)}getViewSize(e,t){return this.getViewBounds(e,Qa,el),t.subVectors(el,Qa)}setViewOffset(e,t,n,i,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(To*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,o=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*i/l,t-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const a=this.filmOffset;a!==0&&(o+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bi=-90,wi=1;class cd extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Nt(bi,wi,e,t);i.layers=this.layers,this.add(i);const o=new Nt(bi,wi,e,t);o.layers=this.layers,this.add(o);const r=new Nt(bi,wi,e,t);r.layers=this.layers,this.add(r);const a=new Nt(bi,wi,e,t);a.layers=this.layers,this.add(a);const l=new Nt(bi,wi,e,t);l.layers=this.layers,this.add(l);const c=new Nt(bi,wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,o,r,a,l]=t;for(const c of t)this.remove(c);if(e===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,o),e.setRenderTarget(n,1,i),e.render(t,r),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Cc extends Lt{constructor(e,t,n,i,o,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Bi,super(e,t,n,i,o,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hd extends rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Cc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ne(5,5,5),o=new Rt({name:"CubemapFromEquirect",uniforms:ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:Tn});o.uniforms.tEquirect.value=t;const r=new N(i,o),a=t.minFilter;return t.minFilter===ii&&(t.minFilter=un),new cd(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,n,i){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,i);e.setRenderTarget(o)}}const qo=new D,dd=new D,ud=new ze;class $n{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=qo.subVectors(n,t).cross(dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(qo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ud.getNormalMatrix(e),i=this.coplanarPoint(qo).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yn=new vo,Vs=new D;class ca{constructor(e=new $n,t=new $n,n=new $n,i=new $n,o=new $n,r=new $n){this.planes=[e,t,n,i,o,r]}set(e,t,n,i,o,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(o),a[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sn){const n=this.planes,i=e.elements,o=i[0],r=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],_=i[10],m=i[11],p=i[12],b=i[13],S=i[14],v=i[15];if(n[0].setComponents(l-o,d-c,m-f,v-p).normalize(),n[1].setComponents(l+o,d+c,m+f,v+p).normalize(),n[2].setComponents(l+r,d+h,m+g,v+b).normalize(),n[3].setComponents(l-r,d-h,m-g,v-b).normalize(),n[4].setComponents(l-a,d-u,m-_,v-S).normalize(),t===Sn)n[5].setComponents(l+a,d+u,m+_,v+S).normalize();else if(t===ao)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yn)}intersectsSprite(e){return Yn.center.set(0,0,0),Yn.radius=.7071067811865476,Yn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Vs.x=i.normal.x>0?e.max.x:e.min.x,Vs.y=i.normal.y>0?e.max.y:e.min.y,Vs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rc(){let s=null,e=!1,t=null,n=null;function i(o,r){t(o,r),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){s=o}}}function fd(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function r(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:o,update:r}}class pt extends It{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const o=e/2,r=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const b=p*d-r;for(let S=0;S<c;S++){const v=S*u-o;g.push(v,-b,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<a;b++){const S=b+c*p,v=b+c*(p+1),P=b+1+c*(p+1),E=b+1+c*p;f.push(S,v,E),f.push(v,P,E)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pt(e.width,e.height,e.widthSegments,e.heightSegments)}}var pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
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
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
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
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bd=`#ifdef USE_BATCHING
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
#endif`,wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ad=`#ifdef USE_IRIDESCENCE
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
#endif`,Cd=`#ifdef USE_BUMPMAP
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
#endif`,Rd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nd=`#define PI 3.141592653589793
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
} // validated`,Od=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,kd=`vec3 transformedNormal = objectNormal;
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
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qd=`#ifdef USE_ENVMAP
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
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Jd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,Kd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tu=`#ifdef USE_GRADIENTMAP
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
}`,nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,su=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ou=`uniform bool receiveShadow;
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
#endif`,ru=`#ifdef USE_ENVMAP
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
#endif`,au=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,du=`PhysicalMaterial material;
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
#endif`,uu=`struct PhysicalMaterial {
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
}`,fu=`
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
#endif`,pu=`#if defined( RE_IndirectDiffuse )
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
#endif`,mu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_u=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wu=`#if defined( USE_POINTS_UV )
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
#endif`,Su=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Au=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Cu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ru=`#ifdef USE_MORPHTARGETS
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
#endif`,Pu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Du=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uu=`#ifdef USE_NORMALMAP
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
#endif`,Nu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ku=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hu=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ju=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ku=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zu=`float getShadowMask() {
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
}`,Qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ef=`#ifdef USE_SKINNING
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
#endif`,tf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nf=`#ifdef USE_SKINNING
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
#endif`,sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,of=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,af=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lf=`#ifdef USE_TRANSMISSION
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
#endif`,cf=`#ifdef USE_TRANSMISSION
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
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ff=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mf=`uniform sampler2D t2D;
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
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`#include <common>
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
}`,Mf=`#if DEPTH_PACKING == 3200
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
}`,bf=`#define DISTANCE
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
}`,wf=`#define DISTANCE
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`uniform float scale;
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
}`,Af=`uniform vec3 diffuse;
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
}`,Cf=`#include <common>
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
}`,Rf=`uniform vec3 diffuse;
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
}`,Pf=`#define LAMBERT
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
}`,If=`#define LAMBERT
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
}`,Df=`#define MATCAP
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
}`,Lf=`#define MATCAP
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
}`,Ff=`#define NORMAL
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
}`,Bf=`#define NORMAL
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
}`,Uf=`#define PHONG
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
}`,Nf=`#define PHONG
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
}`,Of=`#define STANDARD
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
}`,kf=`#define STANDARD
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
}`,zf=`#define TOON
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
}`,Gf=`#define TOON
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
}`,Hf=`uniform float size;
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
}`,Vf=`uniform vec3 diffuse;
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
}`,Wf=`#include <common>
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
}`,Xf=`uniform vec3 color;
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
}`,qf=`uniform float rotation;
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
}`,Yf=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:pd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:_d,alphatest_fragment:vd,alphatest_pars_fragment:xd,aomap_fragment:yd,aomap_pars_fragment:Md,batching_pars_vertex:bd,batching_vertex:wd,begin_vertex:Sd,beginnormal_vertex:Td,bsdfs:Ed,iridescence_fragment:Ad,bumpmap_pars_fragment:Cd,clipping_planes_fragment:Rd,clipping_planes_pars_fragment:Pd,clipping_planes_pars_vertex:Id,clipping_planes_vertex:Dd,color_fragment:Ld,color_pars_fragment:Fd,color_pars_vertex:Bd,color_vertex:Ud,common:Nd,cube_uv_reflection_fragment:Od,defaultnormal_vertex:kd,displacementmap_pars_vertex:zd,displacementmap_vertex:Gd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Vd,colorspace_fragment:Wd,colorspace_pars_fragment:Xd,envmap_fragment:qd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:jd,envmap_pars_vertex:Jd,envmap_physical_pars_fragment:ru,envmap_vertex:$d,fog_vertex:Kd,fog_pars_vertex:Zd,fog_fragment:Qd,fog_pars_fragment:eu,gradientmap_pars_fragment:tu,lightmap_pars_fragment:nu,lights_lambert_fragment:iu,lights_lambert_pars_fragment:su,lights_pars_begin:ou,lights_toon_fragment:au,lights_toon_pars_fragment:lu,lights_phong_fragment:cu,lights_phong_pars_fragment:hu,lights_physical_fragment:du,lights_physical_pars_fragment:uu,lights_fragment_begin:fu,lights_fragment_maps:pu,lights_fragment_end:mu,logdepthbuf_fragment:gu,logdepthbuf_pars_fragment:_u,logdepthbuf_pars_vertex:vu,logdepthbuf_vertex:xu,map_fragment:yu,map_pars_fragment:Mu,map_particle_fragment:bu,map_particle_pars_fragment:wu,metalnessmap_fragment:Su,metalnessmap_pars_fragment:Tu,morphinstance_vertex:Eu,morphcolor_vertex:Au,morphnormal_vertex:Cu,morphtarget_pars_vertex:Ru,morphtarget_vertex:Pu,normal_fragment_begin:Iu,normal_fragment_maps:Du,normal_pars_fragment:Lu,normal_pars_vertex:Fu,normal_vertex:Bu,normalmap_pars_fragment:Uu,clearcoat_normal_fragment_begin:Nu,clearcoat_normal_fragment_maps:Ou,clearcoat_pars_fragment:ku,iridescence_pars_fragment:zu,opaque_fragment:Gu,packing:Hu,premultiplied_alpha_fragment:Vu,project_vertex:Wu,dithering_fragment:Xu,dithering_pars_fragment:qu,roughnessmap_fragment:Yu,roughnessmap_pars_fragment:ju,shadowmap_pars_fragment:Ju,shadowmap_pars_vertex:$u,shadowmap_vertex:Ku,shadowmask_pars_fragment:Zu,skinbase_vertex:Qu,skinning_pars_vertex:ef,skinning_vertex:tf,skinnormal_vertex:nf,specularmap_fragment:sf,specularmap_pars_fragment:of,tonemapping_fragment:rf,tonemapping_pars_fragment:af,transmission_fragment:lf,transmission_pars_fragment:cf,uv_pars_fragment:hf,uv_pars_vertex:df,uv_vertex:uf,worldpos_vertex:ff,background_vert:pf,background_frag:mf,backgroundCube_vert:gf,backgroundCube_frag:_f,cube_vert:vf,cube_frag:xf,depth_vert:yf,depth_frag:Mf,distanceRGBA_vert:bf,distanceRGBA_frag:wf,equirect_vert:Sf,equirect_frag:Tf,linedashed_vert:Ef,linedashed_frag:Af,meshbasic_vert:Cf,meshbasic_frag:Rf,meshlambert_vert:Pf,meshlambert_frag:If,meshmatcap_vert:Df,meshmatcap_frag:Lf,meshnormal_vert:Ff,meshnormal_frag:Bf,meshphong_vert:Uf,meshphong_frag:Nf,meshphysical_vert:Of,meshphysical_frag:kf,meshtoon_vert:zf,meshtoon_frag:Gf,points_vert:Hf,points_frag:Vf,shadow_vert:Wf,shadow_frag:Xf,sprite_vert:qf,sprite_frag:Yf},ae={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},dn={basic:{uniforms:Dt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Dt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ye(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Dt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Dt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Dt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new ye(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Dt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Dt([ae.points,ae.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Dt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Dt([ae.common,ae.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Dt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Dt([ae.sprite,ae.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:Dt([ae.common,ae.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:Dt([ae.lights,ae.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};dn.physical={uniforms:Dt([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Ws={r:0,b:0,g:0},jn=new Vt,jf=new ht;function Jf(s,e,t,n,i,o,r){const a=new ye(0);let l=o===!0?0:1,c,h,u=null,d=0,f=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?t:e).get(S)),S}function _(b){let S=!1;const v=g(b);v===null?p(a,l):v&&v.isColor&&(p(v,1),S=!0);const P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===go)?(h===void 0&&(h=new N(new ne(1,1,1),new Rt({name:"BackgroundCubeMaterial",uniforms:ki(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),jn.copy(S.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jf.makeRotationFromEuler(jn)),h.material.toneMapped=qe.getTransfer(v.colorSpace)!==tt,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new N(new pt(2,2),new Rt({name:"BackgroundMaterial",uniforms:ki(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=qe.getTransfer(v.colorSpace)!==tt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(Ws,Ec(s)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,S,r)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:_,addToRenderList:m}}function $f(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let o=i,r=!1;function a(x,R,z,k,W){let $=!1;const q=u(k,z,R);o!==q&&(o=q,c(o.object)),$=f(x,k,z,W),$&&g(x,k,z,W),W!==null&&e.update(W,s.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,v(x,R,z,k),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,R,z){const k=z.wireframe===!0;let W=n[x.id];W===void 0&&(W={},n[x.id]=W);let $=W[R.id];$===void 0&&($={},W[R.id]=$);let q=$[k];return q===void 0&&(q=d(l()),$[k]=q),q}function d(x){const R=[],z=[],k=[];for(let W=0;W<t;W++)R[W]=0,z[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:k,object:x,attributes:{},index:null}}function f(x,R,z,k){const W=o.attributes,$=R.attributes;let q=0;const ee=z.getAttributes();for(const V in ee)if(ee[V].location>=0){const oe=W[V];let me=$[V];if(me===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(me=x.instanceColor)),oe===void 0||oe.attribute!==me||me&&oe.data!==me.data)return!0;q++}return o.attributesNum!==q||o.index!==k}function g(x,R,z,k){const W={},$=R.attributes;let q=0;const ee=z.getAttributes();for(const V in ee)if(ee[V].location>=0){let oe=$[V];oe===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor));const me={};me.attribute=oe,oe&&oe.data&&(me.data=oe.data),W[V]=me,q++}o.attributes=W,o.attributesNum=q,o.index=k}function _(){const x=o.newAttributes;for(let R=0,z=x.length;R<z;R++)x[R]=0}function m(x){p(x,0)}function p(x,R){const z=o.newAttributes,k=o.enabledAttributes,W=o.attributeDivisors;z[x]=1,k[x]===0&&(s.enableVertexAttribArray(x),k[x]=1),W[x]!==R&&(s.vertexAttribDivisor(x,R),W[x]=R)}function b(){const x=o.newAttributes,R=o.enabledAttributes;for(let z=0,k=R.length;z<k;z++)R[z]!==x[z]&&(s.disableVertexAttribArray(z),R[z]=0)}function S(x,R,z,k,W,$,q){q===!0?s.vertexAttribIPointer(x,R,z,W,$):s.vertexAttribPointer(x,R,z,k,W,$)}function v(x,R,z,k){_();const W=k.attributes,$=z.getAttributes(),q=R.defaultAttributeValues;for(const ee in $){const V=$[ee];if(V.location>=0){let J=W[ee];if(J===void 0&&(ee==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),ee==="instanceColor"&&x.instanceColor&&(J=x.instanceColor)),J!==void 0){const oe=J.normalized,me=J.itemSize,Le=e.get(J);if(Le===void 0)continue;const Ye=Le.buffer,Y=Le.type,ie=Le.bytesPerElement,_e=Y===s.INT||Y===s.UNSIGNED_INT||J.gpuType===na;if(J.isInterleavedBufferAttribute){const le=J.data,Re=le.stride,Be=J.offset;if(le.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)p(V.location+Ve,le.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)m(V.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let Ve=0;Ve<V.locationSize;Ve++)S(V.location+Ve,me/V.locationSize,Y,oe,Re*ie,(Be+me/V.locationSize*Ve)*ie,_e)}else{if(J.isInstancedBufferAttribute){for(let le=0;le<V.locationSize;le++)p(V.location+le,J.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let le=0;le<V.locationSize;le++)m(V.location+le);s.bindBuffer(s.ARRAY_BUFFER,Ye);for(let le=0;le<V.locationSize;le++)S(V.location+le,me/V.locationSize,Y,oe,me*ie,me/V.locationSize*le*ie,_e)}}else if(q!==void 0){const oe=q[ee];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(V.location,oe);break;case 3:s.vertexAttrib3fv(V.location,oe);break;case 4:s.vertexAttrib4fv(V.location,oe);break;default:s.vertexAttrib1fv(V.location,oe)}}}}b()}function P(){I();for(const x in n){const R=n[x];for(const z in R){const k=R[z];for(const W in k)h(k[W].object),delete k[W];delete R[z]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const z in R){const k=R[z];for(const W in k)h(k[W].object),delete k[W];delete R[z]}delete n[x.id]}function A(x){for(const R in n){const z=n[R];if(z[x.id]===void 0)continue;const k=z[x.id];for(const W in k)h(k[W].object),delete k[W];delete z[x.id]}}function I(){M(),r=!0,o!==i&&(o=i,c(o.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Kf(s,e,t){let n;function i(c){n=c}function o(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function r(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)r(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zf(s,e,t,n){let i;function o(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){return!(A!==sn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===En&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Cn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==wn&&!I)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:P,maxSamples:E}}function Qf(s){const e=this;let t=null,n=0,i=!1,o=!1;const r=new $n,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||o&&!m)o?h(null):c();else{const b=o?0:n,S=b*4;let v=p.clippingState||null;l.value=v,v=h(g,d,S,f);for(let P=0;P!==S;++P)v[P]=t[P];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=f;S!==_;++S,v+=4)r.copy(u[S]).applyMatrix4(b,a),r.normal.toArray(m,v),m[v+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function ep(s){let e=new WeakMap;function t(r,a){return a===mr?r.mapping=Bi:a===gr&&(r.mapping=Ui),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===mr||a===gr)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new hd(l.height);return c.fromEquirectangularTexture(s,r),e.set(r,c),r.addEventListener("dispose",i),t(c.texture,r.mapping)}else return null}}return r}function i(r){const a=r.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class ha extends Ac{constructor(e=-1,t=1,n=1,i=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-e,r=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Ri=4,tl=[.125,.215,.35,.446,.526,.582],Qn=20,Yo=new ha,nl=new ye;let jo=null,Jo=0,$o=0,Ko=!1;const Kn=(1+Math.sqrt(5))/2,Si=1/Kn,il=[new D(-Kn,Si,0),new D(Kn,Si,0),new D(-Si,0,Kn),new D(Si,0,Kn),new D(0,Kn,-Si),new D(0,Kn,Si),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class sl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){jo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,i,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(jo,Jo,$o),this._renderer.xr.enabled=Ko,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bi||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),jo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Ko=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:En,format:sn,colorSpace:Gi,depthBuffer:!1},i=ol(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ol(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tp(o)),this._blurMaterial=np(o,e,t)}return i}_compileMaterial(e){const t=new N(this._lodPlanes[0],e);this._renderer.compile(t,Yo)}_sceneToCubeUV(e,t,n,i){const a=new Nt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(nl),h.toneMapping=Gn,h.autoClear=!1;const f=new jt({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),g=new N(new ne,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(nl),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):b===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const S=this._cubeSize;Xs(i,b*S,p>2?S:0,S,S),h.setRenderTarget(i),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bi||e.mapping===Ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rl());const o=i?this._cubemapMaterial:this._equirectMaterial,r=new N(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=e;const l=this._cubeSize;Xs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,Yo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=il[(i-o-1)%il.length];this._blur(e,o-1,o,r,a)}t.autoClear=n}_blur(e,t,n,i,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,i,"latitudinal",o),this._halfBlur(r,e,n,n,i,"longitudinal",o)}_halfBlur(e,t,n,i,o,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new N(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Qn-1),_=o/g,m=isFinite(o)?1+Math.floor(h*_):Qn;m>Qn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const p=[];let b=0;for(let A=0;A<Qn;++A){const I=A/_,M=Math.exp(-I*I/2);p.push(M),A===0?b+=M:A<m&&(b+=2*M)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const v=this._sizeLods[i],P=3*v*(i>S-Ri?i-S+Ri:0),E=4*(this._cubeSize-v);Xs(t,P,E,3*v,2*v),l.setRenderTarget(t),l.render(u,Yo)}}function tp(s){const e=[],t=[],n=[];let i=s;const o=s-Ri+1+tl.length;for(let r=0;r<o;r++){const a=Math.pow(2,i);t.push(a);let l=1/a;r>s-Ri?l=tl[r-s+Ri-1]:r===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*f),S=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,I=E>2?0:-1,M=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];b.set(M,_*g*E),S.set(d,m*g*E);const x=[E,E,E,E,E,E];v.set(x,p*g*E)}const P=new It;P.setAttribute("position",new an(b,_)),P.setAttribute("uv",new an(S,m)),P.setAttribute("faceIndex",new an(v,p)),e.push(P),i>Ri&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ol(s,e,t){const n=new rn(s,e,t);return n.texture.mapping=go,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function np(s,e,t){const n=new Float32Array(Qn),i=new D(0,1,0);return new Rt({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:da(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function rl(){return new Rt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:da(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function al(){return new Rt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:da(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function da(){return`

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
	`}function ip(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===mr||l===gr,h=l===Bi||l===Ui;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new sl(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new sl(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function o(a){const l=a.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function sp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&hs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function op(s,e,t,n){const i={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",r),delete i[d.id];const f=o.get(d);f&&(e.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",r),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let S=0,v=b.length;S<v;S+=3){const P=b[S+0],E=b[S+1],A=b[S+2];d.push(P,E,E,A,A,P)}}else if(g!==void 0){const b=g.array;_=g.version;for(let S=0,v=b.length/3-1;S<v;S+=3){const P=S+0,E=S+1,A=S+2;d.push(P,E,E,A,A,P)}}else return;const m=new(vc(d)?Tc:Sc)(d,1);m.version=_;const p=o.get(u);p&&e.remove(p),o.set(u,m)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return o.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function rp(s,e,t){let n;function i(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function l(d,f){s.drawElements(n,f,o,d*r),t.update(f,n,1)}function c(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,o,d*r,g),t.update(f,n,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/r,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*_[b];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ap(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(t.calls++,r){case s.TRIANGLES:t.triangles+=a*(o/3);break;case s.LINES:t.lines+=a*(o/2);break;case s.LINE_STRIP:t.lines+=a*(o-1);break;case s.LINE_LOOP:t.lines+=a*o;break;case s.POINTS:t.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function lp(s,e,t){const n=new WeakMap,i=new it;function o(r,a,l){const c=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let P=a.attributes.position.count*v,E=1;P>e.maxTextureSize&&(E=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const A=new Float32Array(P*E*4*u),I=new yc(A,P,E,u);I.type=wn,I.needsUpdate=!0;const M=v*4;for(let R=0;R<u;R++){const z=p[R],k=b[R],W=S[R],$=P*E*4*R;for(let q=0;q<z.count;q++){const ee=q*M;g===!0&&(i.fromBufferAttribute(z,q),A[$+ee+0]=i.x,A[$+ee+1]=i.y,A[$+ee+2]=i.z,A[$+ee+3]=0),_===!0&&(i.fromBufferAttribute(k,q),A[$+ee+4]=i.x,A[$+ee+5]=i.y,A[$+ee+6]=i.z,A[$+ee+7]=0),m===!0&&(i.fromBufferAttribute(W,q),A[$+ee+8]=i.x,A[$+ee+9]=i.y,A[$+ee+10]=i.z,A[$+ee+11]=W.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new Ie(P,E)},n.set(a,d),a.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",r.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:o}}function cp(s,e,t,n){let i=new WeakMap;function o(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function r(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:r}}class Pc extends Lt{constructor(e,t,n,i,o,r,a,l,c,h=Di){if(h!==Di&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Di&&(n=ai),n===void 0&&h===Oi&&(n=Ni),super(null,i,o,r,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ic=new Lt,ll=new Pc(1,1),Dc=new yc,Lc=new Jh,Fc=new Cc,cl=[],hl=[],dl=new Float32Array(16),ul=new Float32Array(9),fl=new Float32Array(4);function Wi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let o=cl[i];if(o===void 0&&(o=new Float32Array(i),cl[i]=o),e!==0){n.toArray(o,0);for(let r=1,a=0;r!==e;++r)a+=t,s[r].toArray(o,a)}return o}function yt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Mt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function xo(s,e){let t=hl[e];t===void 0&&(t=new Int32Array(e),hl[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function hp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function dp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2fv(this.addr,e),Mt(t,e)}}function up(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(yt(t,e))return;s.uniform3fv(this.addr,e),Mt(t,e)}}function fp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4fv(this.addr,e),Mt(t,e)}}function pp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;fl.set(n),s.uniformMatrix2fv(this.addr,!1,fl),Mt(t,n)}}function mp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;ul.set(n),s.uniformMatrix3fv(this.addr,!1,ul),Mt(t,n)}}function gp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(yt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(yt(t,n))return;dl.set(n),s.uniformMatrix4fv(this.addr,!1,dl),Mt(t,n)}}function _p(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2iv(this.addr,e),Mt(t,e)}}function xp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;s.uniform3iv(this.addr,e),Mt(t,e)}}function yp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4iv(this.addr,e),Mt(t,e)}}function Mp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function bp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(yt(t,e))return;s.uniform2uiv(this.addr,e),Mt(t,e)}}function wp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(yt(t,e))return;s.uniform3uiv(this.addr,e),Mt(t,e)}}function Sp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(yt(t,e))return;s.uniform4uiv(this.addr,e),Mt(t,e)}}function Tp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(ll.compareFunction=_c,o=ll):o=Ic,t.setTexture2D(e||o,i)}function Ep(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Lc,i)}function Ap(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Fc,i)}function Cp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Dc,i)}function Rp(s){switch(s){case 5126:return hp;case 35664:return dp;case 35665:return up;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return _p;case 35667:case 35671:return vp;case 35668:case 35672:return xp;case 35669:case 35673:return yp;case 5125:return Mp;case 36294:return bp;case 36295:return wp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Cp}}function Pp(s,e){s.uniform1fv(this.addr,e)}function Ip(s,e){const t=Wi(e,this.size,2);s.uniform2fv(this.addr,t)}function Dp(s,e){const t=Wi(e,this.size,3);s.uniform3fv(this.addr,t)}function Lp(s,e){const t=Wi(e,this.size,4);s.uniform4fv(this.addr,t)}function Fp(s,e){const t=Wi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Bp(s,e){const t=Wi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Up(s,e){const t=Wi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Np(s,e){s.uniform1iv(this.addr,e)}function Op(s,e){s.uniform2iv(this.addr,e)}function kp(s,e){s.uniform3iv(this.addr,e)}function zp(s,e){s.uniform4iv(this.addr,e)}function Gp(s,e){s.uniform1uiv(this.addr,e)}function Hp(s,e){s.uniform2uiv(this.addr,e)}function Vp(s,e){s.uniform3uiv(this.addr,e)}function Wp(s,e){s.uniform4uiv(this.addr,e)}function Xp(s,e,t){const n=this.cache,i=e.length,o=xo(t,i);yt(n,o)||(s.uniform1iv(this.addr,o),Mt(n,o));for(let r=0;r!==i;++r)t.setTexture2D(e[r]||Ic,o[r])}function qp(s,e,t){const n=this.cache,i=e.length,o=xo(t,i);yt(n,o)||(s.uniform1iv(this.addr,o),Mt(n,o));for(let r=0;r!==i;++r)t.setTexture3D(e[r]||Lc,o[r])}function Yp(s,e,t){const n=this.cache,i=e.length,o=xo(t,i);yt(n,o)||(s.uniform1iv(this.addr,o),Mt(n,o));for(let r=0;r!==i;++r)t.setTextureCube(e[r]||Fc,o[r])}function jp(s,e,t){const n=this.cache,i=e.length,o=xo(t,i);yt(n,o)||(s.uniform1iv(this.addr,o),Mt(n,o));for(let r=0;r!==i;++r)t.setTexture2DArray(e[r]||Dc,o[r])}function Jp(s){switch(s){case 5126:return Pp;case 35664:return Ip;case 35665:return Dp;case 35666:return Lp;case 35674:return Fp;case 35675:return Bp;case 35676:return Up;case 5124:case 35670:return Np;case 35667:case 35671:return Op;case 35668:case 35672:return kp;case 35669:case 35673:return zp;case 5125:return Gp;case 36294:return Hp;case 36295:return Vp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return jp}}class $p{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rp(t.type)}}class Kp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Jp(t.type)}}class Zp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let o=0,r=i.length;o!==r;++o){const a=i[o];a.setValue(e,t[a.id],n)}}}const Zo=/(\w+)(\])?(\[|\.)?/g;function pl(s,e){s.seq.push(e),s.map[e.id]=e}function Qp(s,e,t){const n=s.name,i=n.length;for(Zo.lastIndex=0;;){const o=Zo.exec(n),r=Zo.lastIndex;let a=o[1];const l=o[2]==="]",c=o[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===i){pl(t,c===void 0?new $p(a,s,e):new Kp(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new Zp(a),pl(t,u)),t=u}}}class io{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=e.getActiveUniform(t,i),r=e.getUniformLocation(t,o.name);Qp(o,r,this)}}setValue(e,t,n,i){const o=this.map[t];o!==void 0&&o.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let o=0,r=t.length;o!==r;++o){const a=t[o],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,o=e.length;i!==o;++i){const r=e[i];r.id in t&&n.push(r)}return n}}function ml(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const e0=37297;let t0=0;function n0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=i;r<o;r++){const a=r+1;n.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return n.join(`
`)}const gl=new ze;function i0(s){qe._getMatrix(gl,qe.workingColorSpace,s);const e=`mat3( ${gl.elements.map(t=>t.toFixed(4))} )`;switch(qe.getTransfer(s)){case _o:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function _l(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const r=parseInt(o[1]);return t.toUpperCase()+`

`+i+`

`+n0(s.getShaderSource(e),r)}else return i}function s0(s,e){const t=i0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function o0(s,e){let t;switch(e){case ec:t="Linear";break;case tc:t="Reinhard";break;case nc:t="Cineon";break;case ta:t="ACESFilmic";break;case ic:t="AgX";break;case sc:t="Neutral";break;case Sh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qs=new D;function r0(){qe.getLuminanceCoefficients(qs);const s=qs.x.toFixed(4),e=qs.y.toFixed(4),t=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ds).join(`
`)}function l0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function c0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(e,i),r=o.name;let a=1;o.type===s.FLOAT_MAT2&&(a=2),o.type===s.FLOAT_MAT3&&(a=3),o.type===s.FLOAT_MAT4&&(a=4),t[r]={type:o.type,location:s.getAttribLocation(e,r),locationSize:a}}return t}function ds(s){return s!==""}function vl(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xl(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yr(s){return s.replace(h0,u0)}const d0=new Map;function u0(s,e){let t=He[e];if(t===void 0){const n=d0.get(e);if(n!==void 0)t=He[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Yr(t)}const f0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yl(s){return s.replace(f0,p0)}function p0(s,e,t,n){let i="";for(let o=parseInt(e);o<parseInt(t);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function Ml(s){let e=`precision ${s.precision} float;
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
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function m0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Zl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ql?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Mn&&(e="SHADOWMAP_TYPE_VSM"),e}function g0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bi:case Ui:e="ENVMAP_TYPE_CUBE";break;case go:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _0(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}function v0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ea:e="ENVMAP_BLENDING_MULTIPLY";break;case bh:e="ENVMAP_BLENDING_MIX";break;case wh:e="ENVMAP_BLENDING_ADD";break}return e}function x0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function y0(s,e,t,n){const i=s.getContext(),o=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=m0(t),c=g0(t),h=_0(t),u=v0(t),d=x0(t),f=a0(t),g=l0(o),_=i.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ds).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ds).join(`
`),p.length>0&&(p+=`
`)):(m=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ds).join(`
`),p=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gn?"#define TONE_MAPPING":"",t.toneMapping!==Gn?He.tonemapping_pars_fragment:"",t.toneMapping!==Gn?o0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,s0("linearToOutputTexel",t.outputColorSpace),r0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ds).join(`
`)),r=Yr(r),r=vl(r,t),r=xl(r,t),a=Yr(a),a=vl(a,t),a=xl(a,t),r=yl(r),a=yl(a),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+m+r,v=b+p+a,P=ml(i,i.VERTEX_SHADER,S),E=ml(i,i.FRAGMENT_SHADER,v);i.attachShader(_,P),i.attachShader(_,E),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(R){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),k=i.getShaderInfoLog(P).trim(),W=i.getShaderInfoLog(E).trim();let $=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,P,E);else{const ee=_l(i,P,"vertex"),V=_l(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+z+`
`+ee+`
`+V)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||W==="")&&(q=!1);q&&(R.diagnostics={runnable:$,programLog:z,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:p}})}i.deleteShader(P),i.deleteShader(E),I=new io(i,_),M=c0(i,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,e0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=E,this}let M0=0;class b0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new w0(e),t.set(e,n)),n}}class w0{constructor(e){this.id=M0++,this.code=e,this.usedTimes=0}}function S0(s,e,t,n,i,o,r){const a=new bc,l=new b0,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,R,z,k){const W=z.fog,$=k.geometry,q=M.isMeshStandardMaterial?z.environment:null,ee=(M.isMeshStandardMaterial?t:e).get(M.envMap||q),V=ee&&ee.mapping===go?ee.image.height:null,J=g[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const oe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,me=oe!==void 0?oe.length:0;let Le=0;$.morphAttributes.position!==void 0&&(Le=1),$.morphAttributes.normal!==void 0&&(Le=2),$.morphAttributes.color!==void 0&&(Le=3);let Ye,Y,ie,_e;if(J){const et=dn[J];Ye=et.vertexShader,Y=et.fragmentShader}else Ye=M.vertexShader,Y=M.fragmentShader,l.update(M),ie=l.getVertexShaderID(M),_e=l.getFragmentShaderID(M);const le=s.getRenderTarget(),Re=s.state.buffers.depth.getReversed(),Be=k.isInstancedMesh===!0,Ve=k.isBatchedMesh===!0,at=!!M.map,We=!!M.matcap,dt=!!ee,U=!!M.aoMap,Tt=!!M.lightMap,Te=!!M.bumpMap,de=!!M.normalMap,Se=!!M.displacementMap,Je=!!M.emissiveMap,Ee=!!M.metalnessMap,T=!!M.roughnessMap,y=M.anisotropy>0,O=M.clearcoat>0,K=M.dispersion>0,te=M.iridescence>0,j=M.sheen>0,Ae=M.transmission>0,he=y&&!!M.anisotropyMap,ge=O&&!!M.clearcoatMap,je=O&&!!M.clearcoatNormalMap,se=O&&!!M.clearcoatRoughnessMap,ve=te&&!!M.iridescenceMap,Pe=te&&!!M.iridescenceThicknessMap,Fe=j&&!!M.sheenColorMap,xe=j&&!!M.sheenRoughnessMap,Xe=!!M.specularMap,Ge=!!M.specularColorMap,ot=!!M.specularIntensityMap,L=Ae&&!!M.transmissionMap,ce=Ae&&!!M.thicknessMap,X=!!M.gradientMap,Q=!!M.alphaMap,pe=M.alphaTest>0,ue=!!M.alphaHash,Oe=!!M.extensions;let ut=Gn;M.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ut=s.toneMapping);const Et={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:Ye,fragmentShader:Y,defines:M.defines,customVertexShaderID:ie,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:Ve,batchingColor:Ve&&k._colorsTexture!==null,instancing:Be,instancingColor:Be&&k.instanceColor!==null,instancingMorph:Be&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:le===null?s.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Gi,alphaToCoverage:!!M.alphaToCoverage,map:at,matcap:We,envMap:dt,envMapMode:dt&&ee.mapping,envMapCubeUVHeight:V,aoMap:U,lightMap:Tt,bumpMap:Te,normalMap:de,displacementMap:d&&Se,emissiveMap:Je,normalMapObjectSpace:de&&M.normalMapType===Dh,normalMapTangentSpace:de&&M.normalMapType===gc,metalnessMap:Ee,roughnessMap:T,anisotropy:y,anisotropyMap:he,clearcoat:O,clearcoatMap:ge,clearcoatNormalMap:je,clearcoatRoughnessMap:se,dispersion:K,iridescence:te,iridescenceMap:ve,iridescenceThicknessMap:Pe,sheen:j,sheenColorMap:Fe,sheenRoughnessMap:xe,specularMap:Xe,specularColorMap:Ge,specularIntensityMap:ot,transmission:Ae,transmissionMap:L,thicknessMap:ce,gradientMap:X,opaque:M.transparent===!1&&M.blending===Ii&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:pe,alphaHash:ue,combine:M.combine,mapUv:at&&_(M.map.channel),aoMapUv:U&&_(M.aoMap.channel),lightMapUv:Tt&&_(M.lightMap.channel),bumpMapUv:Te&&_(M.bumpMap.channel),normalMapUv:de&&_(M.normalMap.channel),displacementMapUv:Se&&_(M.displacementMap.channel),emissiveMapUv:Je&&_(M.emissiveMap.channel),metalnessMapUv:Ee&&_(M.metalnessMap.channel),roughnessMapUv:T&&_(M.roughnessMap.channel),anisotropyMapUv:he&&_(M.anisotropyMap.channel),clearcoatMapUv:ge&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:je&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:xe&&_(M.sheenRoughnessMap.channel),specularMapUv:Xe&&_(M.specularMap.channel),specularColorMapUv:Ge&&_(M.specularColorMap.channel),specularIntensityMapUv:ot&&_(M.specularIntensityMap.channel),transmissionMapUv:L&&_(M.transmissionMap.channel),thicknessMapUv:ce&&_(M.thicknessMap.channel),alphaMapUv:Q&&_(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(de||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(at||Q),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Re,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:me,morphTextureStride:Le,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&R.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:at&&M.map.isVideoTexture===!0&&qe.getTransfer(M.map.colorSpace)===tt,decodeVideoTextureEmissive:Je&&M.emissiveMap.isVideoTexture===!0&&qe.getTransfer(M.emissiveMap.colorSpace)===tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ht,flipSided:M.side===Pt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Oe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&M.extensions.multiDraw===!0||Ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Et.vertexUv1s=c.has(1),Et.vertexUv2s=c.has(2),Et.vertexUv3s=c.has(3),c.clear(),Et}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)x.push(R),x.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(b(x,M),S(x,M),x.push(s.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function b(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function S(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const x=g[M.type];let R;if(x){const z=dn[x];R=_s.clone(z.uniforms)}else R=M.uniforms;return R}function P(M,x){let R;for(let z=0,k=h.length;z<k;z++){const W=h[z];if(W.cacheKey===x){R=W,++R.usedTimes;break}}return R===void 0&&(R=new y0(s,x,M,o),h.push(R)),R}function E(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function A(M){l.remove(M)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:P,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:I}}function T0(){let s=new WeakMap;function e(r){return s.has(r)}function t(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function n(r){s.delete(r)}function i(r,a,l){s.get(r)[a]=l}function o(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:o}}function E0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function bl(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function wl(){const s=[];let e=0;const t=[],n=[],i=[];function o(){e=0,t.length=0,n.length=0,i.length=0}function r(u,d,f,g,_,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),e++,p}function a(u,d,f,g,_,m){const p=r(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,g,_,m){const p=r(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||E0),n.length>1&&n.sort(d||bl),i.length>1&&i.sort(d||bl)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:o,push:a,unshift:l,finish:h,sort:c}}function A0(){let s=new WeakMap;function e(n,i){const o=s.get(n);let r;return o===void 0?(r=new wl,s.set(n,[r])):i>=o.length?(r=new wl,o.push(r)):r=o[i],r}function t(){s=new WeakMap}return{get:e,dispose:t}}function C0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new ye};break;case"SpotLight":t={position:new D,direction:new D,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new D,halfWidth:new D,halfHeight:new D};break}return s[e.id]=t,t}}}function R0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let P0=0;function I0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function D0(s){const e=new C0,t=R0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,o=new ht,r=new ht;function a(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,S=0,v=0,P=0,E=0,A=0;c.sort(I0);for(let M=0,x=c.length;M<x;M++){const R=c[M],z=R.color,k=R.intensity,W=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=z.r*k,u+=z.g*k,d+=z.b*k;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],k);A++}else if(R.isDirectionalLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ee=R.shadow,V=t.get(R);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=R.shadow.matrix,b++}n.directional[f]=q,f++}else if(R.isSpotLight){const q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(z).multiplyScalar(k),q.distance=W,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[_]=q;const ee=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,ee.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[_]=ee.matrix,R.castShadow){const V=t.get(R);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=$,v++}_++}else if(R.isRectAreaLight){const q=e.get(R);q.color.copy(z).multiplyScalar(k),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=q,m++}else if(R.isPointLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const ee=R.shadow,V=t.get(R);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=q,g++}else if(R.isHemisphereLight){const q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(k),q.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[p]=q,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ae.LTC_FLOAT_1,n.rectAreaLTC2=ae.LTC_FLOAT_2):(n.rectAreaLTC1=ae.LTC_HALF_1,n.rectAreaLTC2=ae.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==S||I.numSpotShadows!==v||I.numSpotMaps!==P||I.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=S,I.numSpotShadows=v,I.numSpotMaps=P,I.numLightProbes=A,n.version=P0++)}function l(c,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(S.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),r.identity(),o.copy(S.matrixWorld),o.premultiply(m),r.extractRotation(o),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(S.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Sl(s){const e=new D0(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function o(h){t.push(h)}function r(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:o,pushShadow:r}}function L0(s){let e=new WeakMap;function t(i,o=0){const r=e.get(i);let a;return r===void 0?(a=new Sl(s),e.set(i,[a])):o>=r.length?(a=new Sl(s),r.push(a)):a=r[o],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class F0 extends Vi{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class B0 extends Vi{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const U0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,N0=`uniform sampler2D shadow_pass;
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
}`;function O0(s,e,t){let n=new ca;const i=new Ie,o=new Ie,r=new it,a=new F0({depthPacking:Ih}),l=new B0,c={},h=t.maxTextureSize,u={[Hn]:Pt,[Pt]:Hn,[Ht]:Ht},d=new Rt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:U0,fragmentShader:N0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new It;g.setAttribute("position",new an(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new N(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let p=this.type;this.render=function(E,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=s.getRenderTarget(),x=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Tn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=p!==Mn&&this.type===Mn,W=p===Mn&&this.type!==Mn;for(let $=0,q=E.length;$<q;$++){const ee=E[$],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const J=V.getFrameExtents();if(i.multiply(J),o.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(o.x=Math.floor(h/J.x),i.x=o.x*J.x,V.mapSize.x=o.x),i.y>h&&(o.y=Math.floor(h/J.y),i.y=o.y*J.y,V.mapSize.y=o.y)),V.map===null||k===!0||W===!0){const me=this.type!==Mn?{minFilter:on,magFilter:on}:{};V.map!==null&&V.map.dispose(),V.map=new rn(i.x,i.y,me),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const oe=V.getViewportCount();for(let me=0;me<oe;me++){const Le=V.getViewport(me);r.set(o.x*Le.x,o.y*Le.y,o.x*Le.z,o.y*Le.w),z.viewport(r),V.updateMatrices(ee,me),n=V.getFrustum(),v(A,I,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===Mn&&b(V,I),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(M,x,R)};function b(E,A){const I=e.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new rn(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(A,null,I,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(A,null,I,f,_,null)}function S(E,A,I,M){let x=null;const R=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)x=R;else if(x=I.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=x.uuid,k=A.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let $=W[k];$===void 0&&($=x.clone(),W[k]=$,A.addEventListener("dispose",P)),x=$}if(x.visible=A.visible,x.wireframe=A.wireframe,M===Mn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=s.properties.get(x);z.light=I}return x}function v(E,A,I,M,x){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===Mn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const k=e.update(E),W=E.material;if(Array.isArray(W)){const $=k.groups;for(let q=0,ee=$.length;q<ee;q++){const V=$[q],J=W[V.materialIndex];if(J&&J.visible){const oe=S(E,J,M,x);E.onBeforeShadow(s,E,A,I,k,oe,V),s.renderBufferDirect(I,null,k,oe,E,V),E.onAfterShadow(s,E,A,I,k,oe,V)}}}else if(W.visible){const $=S(E,W,M,x);E.onBeforeShadow(s,E,A,I,k,$,null),s.renderBufferDirect(I,null,k,$,E,null),E.onAfterShadow(s,E,A,I,k,$,null)}}const z=E.children;for(let k=0,W=z.length;k<W;k++)v(z[k],A,I,M,x)}function P(E){E.target.removeEventListener("dispose",P);for(const I in c){const M=c[I],x=E.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const k0={[lr]:cr,[hr]:fr,[dr]:pr,[Fi]:ur,[cr]:lr,[fr]:hr,[pr]:dr,[ur]:Fi};function z0(s,e){function t(){let L=!1;const ce=new it;let X=null;const Q=new it(0,0,0,0);return{setMask:function(pe){X!==pe&&!L&&(s.colorMask(pe,pe,pe,pe),X=pe)},setLocked:function(pe){L=pe},setClear:function(pe,ue,Oe,ut,Et){Et===!0&&(pe*=ut,ue*=ut,Oe*=ut),ce.set(pe,ue,Oe,ut),Q.equals(ce)===!1&&(s.clearColor(pe,ue,Oe,ut),Q.copy(ce))},reset:function(){L=!1,X=null,Q.set(-1,0,0,0)}}}function n(){let L=!1,ce=!1,X=null,Q=null,pe=null;return{setReversed:function(ue){if(ce!==ue){const Oe=e.get("EXT_clip_control");ce?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT);const ut=pe;pe=null,this.setClear(ut)}ce=ue},getReversed:function(){return ce},setTest:function(ue){ue?le(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(ue){X!==ue&&!L&&(s.depthMask(ue),X=ue)},setFunc:function(ue){if(ce&&(ue=k0[ue]),Q!==ue){switch(ue){case lr:s.depthFunc(s.NEVER);break;case cr:s.depthFunc(s.ALWAYS);break;case hr:s.depthFunc(s.LESS);break;case Fi:s.depthFunc(s.LEQUAL);break;case dr:s.depthFunc(s.EQUAL);break;case ur:s.depthFunc(s.GEQUAL);break;case fr:s.depthFunc(s.GREATER);break;case pr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Q=ue}},setLocked:function(ue){L=ue},setClear:function(ue){pe!==ue&&(ce&&(ue=1-ue),s.clearDepth(ue),pe=ue)},reset:function(){L=!1,X=null,Q=null,pe=null,ce=!1}}}function i(){let L=!1,ce=null,X=null,Q=null,pe=null,ue=null,Oe=null,ut=null,Et=null;return{setTest:function(et){L||(et?le(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(et){ce!==et&&!L&&(s.stencilMask(et),ce=et)},setFunc:function(et,Jt,pn){(X!==et||Q!==Jt||pe!==pn)&&(s.stencilFunc(et,Jt,pn),X=et,Q=Jt,pe=pn)},setOp:function(et,Jt,pn){(ue!==et||Oe!==Jt||ut!==pn)&&(s.stencilOp(et,Jt,pn),ue=et,Oe=Jt,ut=pn)},setLocked:function(et){L=et},setClear:function(et){Et!==et&&(s.clearStencil(et),Et=et)},reset:function(){L=!1,ce=null,X=null,Q=null,pe=null,ue=null,Oe=null,ut=null,Et=null}}}const o=new t,r=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,S=null,v=null,P=null,E=null,A=new ye(0,0,0),I=0,M=!1,x=null,R=null,z=null,k=null,W=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ee=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=ee>=2);let J=null,oe={};const me=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),Ye=new it().fromArray(me),Y=new it().fromArray(Le);function ie(L,ce,X,Q){const pe=new Uint8Array(4),ue=s.createTexture();s.bindTexture(L,ue),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<X;Oe++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ce,0,s.RGBA,1,1,Q,0,s.RGBA,s.UNSIGNED_BYTE,pe):s.texImage2D(ce+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pe);return ue}const _e={};_e[s.TEXTURE_2D]=ie(s.TEXTURE_2D,s.TEXTURE_2D,1),_e[s.TEXTURE_CUBE_MAP]=ie(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[s.TEXTURE_2D_ARRAY]=ie(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),_e[s.TEXTURE_3D]=ie(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),le(s.DEPTH_TEST),r.setFunc(Fi),Te(!1),de(Ra),le(s.CULL_FACE),U(Tn);function le(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Re(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Be(L,ce){return u[L]!==ce?(s.bindFramebuffer(L,ce),u[L]=ce,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ce),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ve(L,ce){let X=f,Q=!1;if(L){X=d.get(ce),X===void 0&&(X=[],d.set(ce,X));const pe=L.textures;if(X.length!==pe.length||X[0]!==s.COLOR_ATTACHMENT0){for(let ue=0,Oe=pe.length;ue<Oe;ue++)X[ue]=s.COLOR_ATTACHMENT0+ue;X.length=pe.length,Q=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,Q=!0);Q&&s.drawBuffers(X)}function at(L){return g!==L?(s.useProgram(L),g=L,!0):!1}const We={[Zn]:s.FUNC_ADD,[oh]:s.FUNC_SUBTRACT,[rh]:s.FUNC_REVERSE_SUBTRACT};We[ah]=s.MIN,We[lh]=s.MAX;const dt={[ch]:s.ZERO,[hh]:s.ONE,[dh]:s.SRC_COLOR,[rr]:s.SRC_ALPHA,[_h]:s.SRC_ALPHA_SATURATE,[mh]:s.DST_COLOR,[fh]:s.DST_ALPHA,[uh]:s.ONE_MINUS_SRC_COLOR,[ar]:s.ONE_MINUS_SRC_ALPHA,[gh]:s.ONE_MINUS_DST_COLOR,[ph]:s.ONE_MINUS_DST_ALPHA,[vh]:s.CONSTANT_COLOR,[xh]:s.ONE_MINUS_CONSTANT_COLOR,[yh]:s.CONSTANT_ALPHA,[Mh]:s.ONE_MINUS_CONSTANT_ALPHA};function U(L,ce,X,Q,pe,ue,Oe,ut,Et,et){if(L===Tn){_===!0&&(Re(s.BLEND),_=!1);return}if(_===!1&&(le(s.BLEND),_=!0),L!==sh){if(L!==m||et!==M){if((p!==Zn||v!==Zn)&&(s.blendEquation(s.FUNC_ADD),p=Zn,v=Zn),et)switch(L){case Ii:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case or:s.blendFunc(s.ONE,s.ONE);break;case Pa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ia:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ii:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case or:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Pa:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ia:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,S=null,P=null,E=null,A.set(0,0,0),I=0,m=L,M=et}return}pe=pe||ce,ue=ue||X,Oe=Oe||Q,(ce!==p||pe!==v)&&(s.blendEquationSeparate(We[ce],We[pe]),p=ce,v=pe),(X!==b||Q!==S||ue!==P||Oe!==E)&&(s.blendFuncSeparate(dt[X],dt[Q],dt[ue],dt[Oe]),b=X,S=Q,P=ue,E=Oe),(ut.equals(A)===!1||Et!==I)&&(s.blendColor(ut.r,ut.g,ut.b,Et),A.copy(ut),I=Et),m=L,M=!1}function Tt(L,ce){L.side===Ht?Re(s.CULL_FACE):le(s.CULL_FACE);let X=L.side===Pt;ce&&(X=!X),Te(X),L.blending===Ii&&L.transparent===!1?U(Tn):U(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),o.setMask(L.colorWrite);const Q=L.stencilWrite;a.setTest(Q),Q&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Je(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?le(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function Te(L){x!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),x=L)}function de(L){L!==nh?(le(s.CULL_FACE),L!==R&&(L===Ra?s.cullFace(s.BACK):L===ih?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),R=L}function Se(L){L!==z&&(q&&s.lineWidth(L),z=L)}function Je(L,ce,X){L?(le(s.POLYGON_OFFSET_FILL),(k!==ce||W!==X)&&(s.polygonOffset(ce,X),k=ce,W=X)):Re(s.POLYGON_OFFSET_FILL)}function Ee(L){L?le(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function T(L){L===void 0&&(L=s.TEXTURE0+$-1),J!==L&&(s.activeTexture(L),J=L)}function y(L,ce,X){X===void 0&&(J===null?X=s.TEXTURE0+$-1:X=J);let Q=oe[X];Q===void 0&&(Q={type:void 0,texture:void 0},oe[X]=Q),(Q.type!==L||Q.texture!==ce)&&(J!==X&&(s.activeTexture(X),J=X),s.bindTexture(L,ce||_e[L]),Q.type=L,Q.texture=ce)}function O(){const L=oe[J];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ae(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(L){Ye.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Ye.copy(L))}function xe(L){Y.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function Xe(L,ce){let X=c.get(ce);X===void 0&&(X=new WeakMap,c.set(ce,X));let Q=X.get(L);Q===void 0&&(Q=s.getUniformBlockIndex(ce,L.name),X.set(L,Q))}function Ge(L,ce){const Q=c.get(ce).get(L);l.get(ce)!==Q&&(s.uniformBlockBinding(ce,Q,L.__bindingPointIndex),l.set(ce,Q))}function ot(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),r.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},J=null,oe={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,b=null,S=null,v=null,P=null,E=null,A=new ye(0,0,0),I=0,M=!1,x=null,R=null,z=null,k=null,W=null,Ye.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:le,disable:Re,bindFramebuffer:Be,drawBuffers:Ve,useProgram:at,setBlending:U,setMaterial:Tt,setFlipSided:Te,setCullFace:de,setLineWidth:Se,setPolygonOffset:Je,setScissorTest:Ee,activeTexture:T,bindTexture:y,unbindTexture:O,compressedTexImage2D:K,compressedTexImage3D:te,texImage2D:ve,texImage3D:Pe,updateUBOMapping:Xe,uniformBlockBinding:Ge,texStorage2D:je,texStorage3D:se,texSubImage2D:j,texSubImage3D:Ae,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:Fe,viewport:xe,reset:ot}}function Tl(s,e,t,n){const i=G0(n);switch(t){case cc:return s*e;case dc:return s*e;case uc:return s*e*2;case fc:return s*e/i.components*i.byteLength;case oa:return s*e/i.components*i.byteLength;case pc:return s*e*2/i.components*i.byteLength;case ra:return s*e*2/i.components*i.byteLength;case hc:return s*e*3/i.components*i.byteLength;case sn:return s*e*4/i.components*i.byteLength;case aa:return s*e*4/i.components*i.byteLength;case Zs:case Qs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case eo:case to:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yr:case br:return Math.max(s,16)*Math.max(e,8)/4;case xr:case Mr:return Math.max(s,8)*Math.max(e,8)/2;case wr:case Sr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Tr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Er:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ar:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cr:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rr:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Pr:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ir:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Dr:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Lr:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Fr:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Br:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ur:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Nr:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Or:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case kr:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case no:case zr:case Gr:return Math.ceil(s/4)*Math.ceil(e/4)*16;case mc:case Hr:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Vr:case Wr:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function G0(s){switch(s){case Cn:case rc:return{byteLength:1,components:1};case gs:case ac:case En:return{byteLength:2,components:1};case ia:case sa:return{byteLength:2,components:4};case ai:case na:case wn:return{byteLength:4,components:1};case lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function H0(s,e,t,n,i,o,r){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ie,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,y){return f?new OffscreenCanvas(T,y):lo("canvas")}function _(T,y,O){let K=1;const te=Ee(T);if((te.width>O||te.height>O)&&(K=O/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(K*te.width),Ae=Math.floor(K*te.height);u===void 0&&(u=g(j,Ae));const he=y?g(j,Ae):u;return he.width=j,he.height=Ae,he.getContext("2d").drawImage(T,0,0,j,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+j+"x"+Ae+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){s.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?s.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(T,y,O,K,te=!1){if(T!==null){if(s[T]!==void 0)return s[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=y;if(y===s.RED&&(O===s.FLOAT&&(j=s.R32F),O===s.HALF_FLOAT&&(j=s.R16F),O===s.UNSIGNED_BYTE&&(j=s.R8)),y===s.RED_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.R8UI),O===s.UNSIGNED_SHORT&&(j=s.R16UI),O===s.UNSIGNED_INT&&(j=s.R32UI),O===s.BYTE&&(j=s.R8I),O===s.SHORT&&(j=s.R16I),O===s.INT&&(j=s.R32I)),y===s.RG&&(O===s.FLOAT&&(j=s.RG32F),O===s.HALF_FLOAT&&(j=s.RG16F),O===s.UNSIGNED_BYTE&&(j=s.RG8)),y===s.RG_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RG8UI),O===s.UNSIGNED_SHORT&&(j=s.RG16UI),O===s.UNSIGNED_INT&&(j=s.RG32UI),O===s.BYTE&&(j=s.RG8I),O===s.SHORT&&(j=s.RG16I),O===s.INT&&(j=s.RG32I)),y===s.RGB_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGB8UI),O===s.UNSIGNED_SHORT&&(j=s.RGB16UI),O===s.UNSIGNED_INT&&(j=s.RGB32UI),O===s.BYTE&&(j=s.RGB8I),O===s.SHORT&&(j=s.RGB16I),O===s.INT&&(j=s.RGB32I)),y===s.RGBA_INTEGER&&(O===s.UNSIGNED_BYTE&&(j=s.RGBA8UI),O===s.UNSIGNED_SHORT&&(j=s.RGBA16UI),O===s.UNSIGNED_INT&&(j=s.RGBA32UI),O===s.BYTE&&(j=s.RGBA8I),O===s.SHORT&&(j=s.RGBA16I),O===s.INT&&(j=s.RGBA32I)),y===s.RGB&&O===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),y===s.RGBA){const Ae=te?_o:qe.getTransfer(K);O===s.FLOAT&&(j=s.RGBA32F),O===s.HALF_FLOAT&&(j=s.RGBA16F),O===s.UNSIGNED_BYTE&&(j=Ae===tt?s.SRGB8_ALPHA8:s.RGBA8),O===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),O===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function v(T,y){let O;return T?y===null||y===ai||y===Ni?O=s.DEPTH24_STENCIL8:y===wn?O=s.DEPTH32F_STENCIL8:y===gs&&(O=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ai||y===Ni?O=s.DEPTH_COMPONENT24:y===wn?O=s.DEPTH_COMPONENT32F:y===gs&&(O=s.DEPTH_COMPONENT16),O}function P(T,y){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==on&&T.minFilter!==un?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function E(T){const y=T.target;y.removeEventListener("dispose",E),I(y),y.isVideoTexture&&h.delete(y)}function A(T){const y=T.target;y.removeEventListener("dispose",A),x(y)}function I(T){const y=n.get(T);if(y.__webglInit===void 0)return;const O=T.source,K=d.get(O);if(K){const te=K[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&M(T),Object.keys(K).length===0&&d.delete(O)}n.remove(T)}function M(T){const y=n.get(T);s.deleteTexture(y.__webglTexture);const O=T.source,K=d.get(O);delete K[y.__cacheKey],r.memory.textures--}function x(T){const y=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let te=0;te<y.__webglFramebuffer[K].length;te++)s.deleteFramebuffer(y.__webglFramebuffer[K][te]);else s.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)s.deleteFramebuffer(y.__webglFramebuffer[K]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const O=T.textures;for(let K=0,te=O.length;K<te;K++){const j=n.get(O[K]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),r.memory.textures--),n.remove(O[K])}n.remove(T)}let R=0;function z(){R=0}function k(){const T=R;return T>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+i.maxTextures),R+=1,T}function W(T){const y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function $(T,y){const O=n.get(T);if(T.isVideoTexture&&Se(T),T.isRenderTargetTexture===!1&&T.version>0&&O.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(O,T,y);return}}t.bindTexture(s.TEXTURE_2D,O.__webglTexture,s.TEXTURE0+y)}function q(T,y){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,O.__webglTexture,s.TEXTURE0+y)}function ee(T,y){const O=n.get(T);if(T.version>0&&O.__version!==T.version){Y(O,T,y);return}t.bindTexture(s.TEXTURE_3D,O.__webglTexture,s.TEXTURE0+y)}function V(T,y){const O=n.get(T);if(T.version>0&&O.__version!==T.version){ie(O,T,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,O.__webglTexture,s.TEXTURE0+y)}const J={[_r]:s.REPEAT,[ni]:s.CLAMP_TO_EDGE,[vr]:s.MIRRORED_REPEAT},oe={[on]:s.NEAREST,[Th]:s.NEAREST_MIPMAP_NEAREST,[Es]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[wo]:s.LINEAR_MIPMAP_NEAREST,[ii]:s.LINEAR_MIPMAP_LINEAR},me={[Lh]:s.NEVER,[kh]:s.ALWAYS,[Fh]:s.LESS,[_c]:s.LEQUAL,[Bh]:s.EQUAL,[Oh]:s.GEQUAL,[Uh]:s.GREATER,[Nh]:s.NOTEQUAL};function Le(T,y){if(y.type===wn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===un||y.magFilter===wo||y.magFilter===Es||y.magFilter===ii||y.minFilter===un||y.minFilter===wo||y.minFilter===Es||y.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(T,s.TEXTURE_WRAP_S,J[y.wrapS]),s.texParameteri(T,s.TEXTURE_WRAP_T,J[y.wrapT]),(T===s.TEXTURE_3D||T===s.TEXTURE_2D_ARRAY)&&s.texParameteri(T,s.TEXTURE_WRAP_R,J[y.wrapR]),s.texParameteri(T,s.TEXTURE_MAG_FILTER,oe[y.magFilter]),s.texParameteri(T,s.TEXTURE_MIN_FILTER,oe[y.minFilter]),y.compareFunction&&(s.texParameteri(T,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(T,s.TEXTURE_COMPARE_FUNC,me[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===on||y.minFilter!==Es&&y.minFilter!==ii||y.type===wn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");s.texParameterf(T,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ye(T,y){let O=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",E));const K=y.source;let te=d.get(K);te===void 0&&(te={},d.set(K,te));const j=W(y);if(j!==T.__cacheKey){te[j]===void 0&&(te[j]={texture:s.createTexture(),usedTimes:0},r.memory.textures++,O=!0),te[j].usedTimes++;const Ae=te[T.__cacheKey];Ae!==void 0&&(te[T.__cacheKey].usedTimes--,Ae.usedTimes===0&&M(y)),T.__cacheKey=j,T.__webglTexture=te[j].texture}return O}function Y(T,y,O){let K=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(K=s.TEXTURE_3D);const te=Ye(T,y),j=y.source;t.bindTexture(K,T.__webglTexture,s.TEXTURE0+O);const Ae=n.get(j);if(j.version!==Ae.__version||te===!0){t.activeTexture(s.TEXTURE0+O);const he=qe.getPrimaries(qe.workingColorSpace),ge=y.colorSpace===kn?null:qe.getPrimaries(y.colorSpace),je=y.colorSpace===kn||he===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let se=_(y.image,!1,i.maxTextureSize);se=Je(y,se);const ve=o.convert(y.format,y.colorSpace),Pe=o.convert(y.type);let Fe=S(y.internalFormat,ve,Pe,y.colorSpace,y.isVideoTexture);Le(K,y);let xe;const Xe=y.mipmaps,Ge=y.isVideoTexture!==!0,ot=Ae.__version===void 0||te===!0,L=j.dataReady,ce=P(y,se);if(y.isDepthTexture)Fe=v(y.format===Oi,y.type),ot&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,Fe,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Fe,se.width,se.height,0,ve,Pe,null));else if(y.isDataTexture)if(Xe.length>0){Ge&&ot&&t.texStorage2D(s.TEXTURE_2D,ce,Fe,Xe[0].width,Xe[0].height);for(let X=0,Q=Xe.length;X<Q;X++)xe=Xe[X],Ge?L&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,xe.width,xe.height,ve,Pe,xe.data):t.texImage2D(s.TEXTURE_2D,X,Fe,xe.width,xe.height,0,ve,Pe,xe.data);y.generateMipmaps=!1}else Ge?(ot&&t.texStorage2D(s.TEXTURE_2D,ce,Fe,se.width,se.height),L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,se.width,se.height,ve,Pe,se.data)):t.texImage2D(s.TEXTURE_2D,0,Fe,se.width,se.height,0,ve,Pe,se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Fe,Xe[0].width,Xe[0].height,se.depth);for(let X=0,Q=Xe.length;X<Q;X++)if(xe=Xe[X],y.format!==sn)if(ve!==null)if(Ge){if(L)if(y.layerUpdates.size>0){const pe=Tl(xe.width,xe.height,y.format,y.type);for(const ue of y.layerUpdates){const Oe=xe.data.subarray(ue*pe/xe.data.BYTES_PER_ELEMENT,(ue+1)*pe/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,ue,xe.width,xe.height,1,ve,Oe)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,xe.width,xe.height,se.depth,ve,xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Fe,xe.width,xe.height,se.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?L&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,xe.width,xe.height,se.depth,ve,Pe,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,X,Fe,xe.width,xe.height,se.depth,0,ve,Pe,xe.data)}else{Ge&&ot&&t.texStorage2D(s.TEXTURE_2D,ce,Fe,Xe[0].width,Xe[0].height);for(let X=0,Q=Xe.length;X<Q;X++)xe=Xe[X],y.format!==sn?ve!==null?Ge?L&&t.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,xe.width,xe.height,ve,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,X,Fe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?L&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,xe.width,xe.height,ve,Pe,xe.data):t.texImage2D(s.TEXTURE_2D,X,Fe,xe.width,xe.height,0,ve,Pe,xe.data)}else if(y.isDataArrayTexture)if(Ge){if(ot&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ce,Fe,se.width,se.height,se.depth),L)if(y.layerUpdates.size>0){const X=Tl(se.width,se.height,y.format,y.type);for(const Q of y.layerUpdates){const pe=se.data.subarray(Q*X/se.data.BYTES_PER_ELEMENT,(Q+1)*X/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,ve,Pe,pe)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ve,Pe,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,se.width,se.height,se.depth,0,ve,Pe,se.data);else if(y.isData3DTexture)Ge?(ot&&t.texStorage3D(s.TEXTURE_3D,ce,Fe,se.width,se.height,se.depth),L&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ve,Pe,se.data)):t.texImage3D(s.TEXTURE_3D,0,Fe,se.width,se.height,se.depth,0,ve,Pe,se.data);else if(y.isFramebufferTexture){if(ot)if(Ge)t.texStorage2D(s.TEXTURE_2D,ce,Fe,se.width,se.height);else{let X=se.width,Q=se.height;for(let pe=0;pe<ce;pe++)t.texImage2D(s.TEXTURE_2D,pe,Fe,X,Q,0,ve,Pe,null),X>>=1,Q>>=1}}else if(Xe.length>0){if(Ge&&ot){const X=Ee(Xe[0]);t.texStorage2D(s.TEXTURE_2D,ce,Fe,X.width,X.height)}for(let X=0,Q=Xe.length;X<Q;X++)xe=Xe[X],Ge?L&&t.texSubImage2D(s.TEXTURE_2D,X,0,0,ve,Pe,xe):t.texImage2D(s.TEXTURE_2D,X,Fe,ve,Pe,xe);y.generateMipmaps=!1}else if(Ge){if(ot){const X=Ee(se);t.texStorage2D(s.TEXTURE_2D,ce,Fe,X.width,X.height)}L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ve,Pe,se)}else t.texImage2D(s.TEXTURE_2D,0,Fe,ve,Pe,se);m(y)&&p(K),Ae.__version=j.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function ie(T,y,O){if(y.image.length!==6)return;const K=Ye(T,y),te=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,T.__webglTexture,s.TEXTURE0+O);const j=n.get(te);if(te.version!==j.__version||K===!0){t.activeTexture(s.TEXTURE0+O);const Ae=qe.getPrimaries(qe.workingColorSpace),he=y.colorSpace===kn?null:qe.getPrimaries(y.colorSpace),ge=y.colorSpace===kn||Ae===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const je=y.isCompressedTexture||y.image[0].isCompressedTexture,se=y.image[0]&&y.image[0].isDataTexture,ve=[];for(let Q=0;Q<6;Q++)!je&&!se?ve[Q]=_(y.image[Q],!0,i.maxCubemapSize):ve[Q]=se?y.image[Q].image:y.image[Q],ve[Q]=Je(y,ve[Q]);const Pe=ve[0],Fe=o.convert(y.format,y.colorSpace),xe=o.convert(y.type),Xe=S(y.internalFormat,Fe,xe,y.colorSpace),Ge=y.isVideoTexture!==!0,ot=j.__version===void 0||K===!0,L=te.dataReady;let ce=P(y,Pe);Le(s.TEXTURE_CUBE_MAP,y);let X;if(je){Ge&&ot&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,Xe,Pe.width,Pe.height);for(let Q=0;Q<6;Q++){X=ve[Q].mipmaps;for(let pe=0;pe<X.length;pe++){const ue=X[pe];y.format!==sn?Fe!==null?Ge?L&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,ue.width,ue.height,Fe,ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,Xe,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,0,0,ue.width,ue.height,Fe,xe,ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe,Xe,ue.width,ue.height,0,Fe,xe,ue.data)}}}else{if(X=y.mipmaps,Ge&&ot){X.length>0&&ce++;const Q=Ee(ve[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ce,Xe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){Ge?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve[Q].width,ve[Q].height,Fe,xe,ve[Q].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,ve[Q].width,ve[Q].height,0,Fe,xe,ve[Q].data);for(let pe=0;pe<X.length;pe++){const Oe=X[pe].image[Q].image;Ge?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,Oe.width,Oe.height,Fe,xe,Oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,Xe,Oe.width,Oe.height,0,Fe,xe,Oe.data)}}else{Ge?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Fe,xe,ve[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Xe,Fe,xe,ve[Q]);for(let pe=0;pe<X.length;pe++){const ue=X[pe];Ge?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,0,0,Fe,xe,ue.image[Q]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pe+1,Xe,Fe,xe,ue.image[Q])}}}m(y)&&p(s.TEXTURE_CUBE_MAP),j.__version=te.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function _e(T,y,O,K,te,j){const Ae=o.convert(O.format,O.colorSpace),he=o.convert(O.type),ge=S(O.internalFormat,Ae,he,O.colorSpace),je=n.get(y),se=n.get(O);if(se.__renderTarget=y,!je.__hasExternalTextures){const ve=Math.max(1,y.width>>j),Pe=Math.max(1,y.height>>j);te===s.TEXTURE_3D||te===s.TEXTURE_2D_ARRAY?t.texImage3D(te,j,ge,ve,Pe,y.depth,0,Ae,he,null):t.texImage2D(te,j,ge,ve,Pe,0,Ae,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,T),de(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,te,se.__webglTexture,0,Te(y)):(te===s.TEXTURE_2D||te>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,te,se.__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function le(T,y,O){if(s.bindRenderbuffer(s.RENDERBUFFER,T),y.depthBuffer){const K=y.depthTexture,te=K&&K.isDepthTexture?K.type:null,j=v(y.stencilBuffer,te),Ae=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=Te(y);de(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,j,y.width,y.height):O?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,j,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,j,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,T)}else{const K=y.textures;for(let te=0;te<K.length;te++){const j=K[te],Ae=o.convert(j.format,j.colorSpace),he=o.convert(j.type),ge=S(j.internalFormat,Ae,he,j.colorSpace),je=Te(y);O&&de(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,je,ge,y.width,y.height):de(y)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je,ge,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ge,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Re(T,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(y.depthTexture);K.__renderTarget=y,(!K.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const te=K.__webglTexture,j=Te(y);if(y.depthTexture.format===Di)de(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,te,0);else if(y.depthTexture.format===Oi)de(y)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Be(T){const y=n.get(T),O=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),K){const te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=K}if(T.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Re(y.__webglFramebuffer,T)}else if(O){y.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[K]),y.__webglDepthbuffer[K]===void 0)y.__webglDepthbuffer[K]=s.createRenderbuffer(),le(y.__webglDepthbuffer[K],T,!1);else{const te=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=y.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,te,s.RENDERBUFFER,j)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),le(y.__webglDepthbuffer,T,!1);else{const K=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,te=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,te),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,te)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(T,y,O){const K=n.get(T);y!==void 0&&_e(K.__webglFramebuffer,T,T.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),O!==void 0&&Be(T)}function at(T){const y=T.texture,O=n.get(T),K=n.get(y);T.addEventListener("dispose",A);const te=T.textures,j=T.isWebGLCubeRenderTarget===!0,Ae=te.length>1;if(Ae||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=y.version,r.memory.textures++),j){O.__webglFramebuffer=[];for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[he]=[];for(let ge=0;ge<y.mipmaps.length;ge++)O.__webglFramebuffer[he][ge]=s.createFramebuffer()}else O.__webglFramebuffer[he]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let he=0;he<y.mipmaps.length;he++)O.__webglFramebuffer[he]=s.createFramebuffer()}else O.__webglFramebuffer=s.createFramebuffer();if(Ae)for(let he=0,ge=te.length;he<ge;he++){const je=n.get(te[he]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),r.memory.textures++)}if(T.samples>0&&de(T)===!1){O.__webglMultisampledFramebuffer=s.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){const ge=te[he];O.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,O.__webglColorRenderbuffer[he]);const je=o.convert(ge.format,ge.colorSpace),se=o.convert(ge.type),ve=S(ge.internalFormat,je,se,ge.colorSpace,T.isXRRenderTarget===!0),Pe=Te(T);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,ve,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,O.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),T.depthBuffer&&(O.__webglDepthRenderbuffer=s.createRenderbuffer(),le(O.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Le(s.TEXTURE_CUBE_MAP,y);for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)_e(O.__webglFramebuffer[he][ge],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else _e(O.__webglFramebuffer[he],T,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(y)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let he=0,ge=te.length;he<ge;he++){const je=te[he],se=n.get(je);t.bindTexture(s.TEXTURE_2D,se.__webglTexture),Le(s.TEXTURE_2D,je),_e(O.__webglFramebuffer,T,je,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),m(je)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,K.__webglTexture),Le(he,y),y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)_e(O.__webglFramebuffer[ge],T,y,s.COLOR_ATTACHMENT0,he,ge);else _e(O.__webglFramebuffer,T,y,s.COLOR_ATTACHMENT0,he,0);m(y)&&p(he),t.unbindTexture()}T.depthBuffer&&Be(T)}function We(T){const y=T.textures;for(let O=0,K=y.length;O<K;O++){const te=y[O];if(m(te)){const j=b(T),Ae=n.get(te).__webglTexture;t.bindTexture(j,Ae),p(j),t.unbindTexture()}}}const dt=[],U=[];function Tt(T){if(T.samples>0){if(de(T)===!1){const y=T.textures,O=T.width,K=T.height;let te=s.COLOR_BUFFER_BIT;const j=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ae=n.get(T),he=y.length>1;if(he)for(let ge=0;ge<y.length;ge++)t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ge=0;ge<y.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(te|=s.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(te|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[ge]);const je=n.get(y[ge]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,je,0)}s.blitFramebuffer(0,0,O,K,0,0,O,K,te,s.NEAREST),l===!0&&(dt.length=0,U.length=0,dt.push(s.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.resolveDepthBuffer===!1&&(dt.push(j),U.push(j),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,U)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let ge=0;ge<y.length;ge++){t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.RENDERBUFFER,Ae.__webglColorRenderbuffer[ge]);const je=n.get(y[ge]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ge,s.TEXTURE_2D,je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const y=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function Te(T){return Math.min(i.maxSamples,T.samples)}function de(T){const y=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Se(T){const y=r.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function Je(T,y){const O=T.colorSpace,K=T.format,te=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||O!==Gi&&O!==kn&&(qe.getTransfer(O)===tt?(K!==sn||te!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}function Ee(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=Ve,this.setupRenderTarget=at,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=de}function V0(s,e){function t(n,i=kn){let o;const r=qe.getTransfer(i);if(n===Cn)return s.UNSIGNED_BYTE;if(n===ia)return s.UNSIGNED_SHORT_4_4_4_4;if(n===sa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===lc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===rc)return s.BYTE;if(n===ac)return s.SHORT;if(n===gs)return s.UNSIGNED_SHORT;if(n===na)return s.INT;if(n===ai)return s.UNSIGNED_INT;if(n===wn)return s.FLOAT;if(n===En)return s.HALF_FLOAT;if(n===cc)return s.ALPHA;if(n===hc)return s.RGB;if(n===sn)return s.RGBA;if(n===dc)return s.LUMINANCE;if(n===uc)return s.LUMINANCE_ALPHA;if(n===Di)return s.DEPTH_COMPONENT;if(n===Oi)return s.DEPTH_STENCIL;if(n===fc)return s.RED;if(n===oa)return s.RED_INTEGER;if(n===pc)return s.RG;if(n===ra)return s.RG_INTEGER;if(n===aa)return s.RGBA_INTEGER;if(n===Zs||n===Qs||n===eo||n===to)if(r===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Zs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===eo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===to)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Zs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===eo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===to)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xr||n===yr||n===Mr||n===br)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===xr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===yr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Mr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===br)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wr||n===Sr||n===Tr)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===wr||n===Sr)return r===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Tr)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Er||n===Ar||n===Cr||n===Rr||n===Pr||n===Ir||n===Dr||n===Lr||n===Fr||n===Br||n===Ur||n===Nr||n===Or||n===kr)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Er)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ar)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Cr)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Rr)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Pr)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ir)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Dr)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Lr)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fr)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Br)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ur)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Nr)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Or)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kr)return r===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===zr||n===Gr)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===no)return r===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mc||n===Hr||n===Vr||n===Wr)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===no)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Hr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ni?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class W0 extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ne extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const X0={type:"move"};class Qo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,o=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(X0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ne;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y0=`
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

}`;class j0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Lt,o=e.properties.get(i);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rt({vertexShader:q0,fragmentShader:Y0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new N(new pt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J0 extends li{constructor(e,t){super();const n=this;let i=null,o=1,r=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const _=new j0,m=t.getContextAttributes();let p=null,b=null;const S=[],v=[],P=new Ie;let E=null;const A=new Nt;A.viewport=new it;const I=new Nt;I.viewport=new it;const M=[A,I],x=new W0;let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ie=S[Y];return ie===void 0&&(ie=new Qo,S[Y]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Y){let ie=S[Y];return ie===void 0&&(ie=new Qo,S[Y]=ie),ie.getGripSpace()},this.getHand=function(Y){let ie=S[Y];return ie===void 0&&(ie=new Qo,S[Y]=ie),ie.getHandSpace()};function k(Y){const ie=v.indexOf(Y.inputSource);if(ie===-1)return;const _e=S[ie];_e!==void 0&&(_e.update(Y.inputSource,Y.frame,c||r),_e.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",$);for(let Y=0;Y<S.length;Y++){const ie=v[Y];ie!==null&&(v[Y]=null,S[Y].disconnect(ie))}R=null,z=null,_.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,b=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",W),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new rn(f.framebufferWidth,f.framebufferHeight,{format:sn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,_e=null,le=null;m.depth&&(le=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?Oi:Di,_e=m.stencil?Ni:ai);const Re={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:o};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Re),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new rn(d.textureWidth,d.textureHeight,{format:sn,type:Cn,depthTexture:new Pc(d.textureWidth,d.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(a),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(Y){for(let ie=0;ie<Y.removed.length;ie++){const _e=Y.removed[ie],le=v.indexOf(_e);le>=0&&(v[le]=null,S[le].disconnect(_e))}for(let ie=0;ie<Y.added.length;ie++){const _e=Y.added[ie];let le=v.indexOf(_e);if(le===-1){for(let Be=0;Be<S.length;Be++)if(Be>=v.length){v.push(_e),le=Be;break}else if(v[Be]===null){v[Be]=_e,le=Be;break}if(le===-1)break}const Re=S[le];Re&&Re.connect(_e)}}const q=new D,ee=new D;function V(Y,ie,_e){q.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);const le=q.distanceTo(ee),Re=ie.projectionMatrix.elements,Be=_e.projectionMatrix.elements,Ve=Re[14]/(Re[10]-1),at=Re[14]/(Re[10]+1),We=(Re[9]+1)/Re[5],dt=(Re[9]-1)/Re[5],U=(Re[8]-1)/Re[0],Tt=(Be[8]+1)/Be[0],Te=Ve*U,de=Ve*Tt,Se=le/(-U+Tt),Je=Se*-U;if(ie.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Je),Y.translateZ(Se),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Re[10]===-1)Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Ee=Ve+Se,T=at+Se,y=Te-Je,O=de+(le-Je),K=We*at/T*Ee,te=dt*at/T*Ee;Y.projectionMatrix.makePerspective(y,O,K,te,Ee,T),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function J(Y,ie){ie===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ie.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let ie=Y.near,_e=Y.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(_e=_.depthFar)),x.near=I.near=A.near=ie,x.far=I.far=A.far=_e,(R!==x.near||z!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,z=x.far),A.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,x.layers.mask=A.layers.mask|I.layers.mask;const le=Y.parent,Re=x.cameras;J(x,le);for(let Be=0;Be<Re.length;Be++)J(Re[Be],le);Re.length===2?V(x,A,I):x.projectionMatrix.copy(A.projectionMatrix),oe(Y,x,le)};function oe(Y,ie,_e){_e===null?Y.matrix.copy(ie.matrixWorld):(Y.matrix.copy(_e.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ie.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ie.projectionMatrix),Y.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let me=null;function Le(Y,ie){if(h=ie.getViewerPose(c||r),g=ie,h!==null){const _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let le=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,le=!0);for(let Be=0;Be<_e.length;Be++){const Ve=_e[Be];let at=null;if(f!==null)at=f.getViewport(Ve);else{const dt=u.getViewSubImage(d,Ve);at=dt.viewport,Be===0&&(e.setRenderTargetTextures(b,dt.colorTexture,d.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(b))}let We=M[Be];We===void 0&&(We=new Nt,We.layers.enable(Be),We.viewport=new it,M[Be]=We),We.matrix.fromArray(Ve.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ve.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(at.x,at.y,at.width,at.height),Be===0&&(x.matrix.copy(We.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),le===!0&&x.cameras.push(We)}const Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Be=u.getDepthInformation(_e[0]);Be&&Be.isValid&&Be.texture&&_.init(e,Be,i.renderState)}}for(let _e=0;_e<S.length;_e++){const le=v[_e],Re=S[_e];le!==null&&Re!==void 0&&Re.update(le,ie,c||r)}me&&me(Y,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Ye=new Rc;Ye.setAnimationLoop(Le),this.setAnimationLoop=function(Y){me=Y},this.dispose=function(){}}}const Jn=new Vt,$0=new ht;function K0(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Ec(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),h(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),_(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),S=b.envMap,v=b.envMapRotation;S&&(m.envMap.value=S,Jn.copy(v),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),m.envMapRotation.value.setFromMatrix4($0.makeRotationFromEuler(Jn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Z0(s,e,t,n){let i={},o={},r=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,S){const v=S.program;n.uniformBlockBinding(b,v)}function c(b,S){let v=i[b.id];v===void 0&&(g(b),v=h(b),i[b.id]=v,b.addEventListener("dispose",m));const P=S.program;n.updateUBOMapping(b,P);const E=e.render.frame;o[b.id]!==E&&(d(b),o[b.id]=E)}function h(b){const S=u();b.__bindingPointIndex=S;const v=s.createBuffer(),P=b.__size,E=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,P,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,v),v}function u(){for(let b=0;b<a;b++)if(r.indexOf(b)===-1)return r.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const S=i[b.id],v=b.uniforms,P=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,A=v.length;E<A;E++){const I=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,x=I.length;M<x;M++){const R=I[M];if(f(R,E,M,P)===!0){const z=R.__offset,k=Array.isArray(R.value)?R.value:[R.value];let W=0;for(let $=0;$<k.length;$++){const q=k[$],ee=_(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,s.bufferSubData(s.UNIFORM_BUFFER,z+W,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,S,v,P){const E=b.value,A=S+"_"+v;if(P[A]===void 0)return typeof E=="number"||typeof E=="boolean"?P[A]=E:P[A]=E.clone(),!0;{const I=P[A];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return P[A]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(b){const S=b.uniforms;let v=0;const P=16;for(let A=0,I=S.length;A<I;A++){const M=Array.isArray(S[A])?S[A]:[S[A]];for(let x=0,R=M.length;x<R;x++){const z=M[x],k=Array.isArray(z.value)?z.value:[z.value];for(let W=0,$=k.length;W<$;W++){const q=k[W],ee=_(q),V=v%P,J=V%ee.boundary,oe=V+J;v+=J,oe!==0&&P-oe<ee.storage&&(v+=P-oe),z.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=ee.storage}}}const E=v%P;return E>0&&(v+=P-E),b.__size=v,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const v=r.indexOf(S.__bindingPointIndex);r.splice(v,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete o[S.id]}function p(){for(const b in i)s.deleteBuffer(i[b]);r=[],i={},o={}}return{bind:l,update:c,dispose:p}}class Bc{constructor(e={}){const{canvas:t=Gh(),context:n=null,depth:i=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qt,this.toneMapping=Gn,this.toneMappingExposure=1;const v=this;let P=!1,E=0,A=0,I=null,M=-1,x=null;const R=new it,z=new it;let k=null;const W=new ye(0);let $=0,q=t.width,ee=t.height,V=1,J=null,oe=null;const me=new it(0,0,q,ee),Le=new it(0,0,q,ee);let Ye=!1;const Y=new ca;let ie=!1,_e=!1;const le=new ht,Re=new ht,Be=new D,Ve=new it,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function dt(){return I===null?V:1}let U=n;function Tt(w,F){return t.getContext(w,F)}try{const w={alpha:!0,depth:i,stencil:o,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qr}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ue,!1),U===null){const F="webgl2";if(U=Tt(F,w),U===null)throw Tt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Te,de,Se,Je,Ee,T,y,O,K,te,j,Ae,he,ge,je,se,ve,Pe,Fe,xe,Xe,Ge,ot,L;function ce(){Te=new sp(U),Te.init(),Ge=new V0(U,Te),de=new Zf(U,Te,e,Ge),Se=new z0(U,Te),de.reverseDepthBuffer&&d&&Se.buffers.depth.setReversed(!0),Je=new ap(U),Ee=new T0,T=new H0(U,Te,Se,Ee,de,Ge,Je),y=new ep(v),O=new ip(v),K=new fd(U),ot=new $f(U,K),te=new op(U,K,Je,ot),j=new cp(U,te,K,Je),Fe=new lp(U,de,T),se=new Qf(Ee),Ae=new S0(v,y,O,Te,de,ot,se),he=new K0(v,Ee),ge=new A0,je=new L0(Te),Pe=new Jf(v,y,O,Se,j,f,l),ve=new O0(v,j,de),L=new Z0(U,Je,de,Se),xe=new Kf(U,Te,Je),Xe=new rp(U,Te,Je),Je.programs=Ae.programs,v.capabilities=de,v.extensions=Te,v.properties=Ee,v.renderLists=ge,v.shadowMap=ve,v.state=Se,v.info=Je}ce();const X=new J0(v,U);this.xr=X,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const w=Te.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Te.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(w){w!==void 0&&(V=w,this.setSize(q,ee,!1))},this.getSize=function(w){return w.set(q,ee)},this.setSize=function(w,F,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,ee=F,t.width=Math.floor(w*V),t.height=Math.floor(F*V),G===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(q*V,ee*V).floor()},this.setDrawingBufferSize=function(w,F,G){q=w,ee=F,V=G,t.width=Math.floor(w*G),t.height=Math.floor(F*G),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,F,G,H){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,F,G,H),Se.viewport(R.copy(me).multiplyScalar(V).round())},this.getScissor=function(w){return w.copy(Le)},this.setScissor=function(w,F,G,H){w.isVector4?Le.set(w.x,w.y,w.z,w.w):Le.set(w,F,G,H),Se.scissor(z.copy(Le).multiplyScalar(V).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(w){Se.setScissorTest(Ye=w)},this.setOpaqueSort=function(w){J=w},this.setTransparentSort=function(w){oe=w},this.getClearColor=function(w){return w.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(w=!0,F=!0,G=!0){let H=0;if(w){let B=!1;if(I!==null){const re=I.texture.format;B=re===aa||re===ra||re===oa}if(B){const re=I.texture.type,fe=re===Cn||re===ai||re===gs||re===Ni||re===ia||re===sa,Me=Pe.getClearColor(),be=Pe.getClearAlpha(),Ue=Me.r,ke=Me.g,we=Me.b;fe?(g[0]=Ue,g[1]=ke,g[2]=we,g[3]=be,U.clearBufferuiv(U.COLOR,0,g)):(_[0]=Ue,_[1]=ke,_[2]=we,_[3]=be,U.clearBufferiv(U.COLOR,0,_))}else H|=U.COLOR_BUFFER_BIT}F&&(H|=U.DEPTH_BUFFER_BIT),G&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ue,!1),ge.dispose(),je.dispose(),Ee.dispose(),y.dispose(),O.dispose(),j.dispose(),ot.dispose(),L.dispose(),Ae.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ma),X.removeEventListener("sessionend",ba),Vn.stop()};function Q(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=Je.autoReset,F=ve.enabled,G=ve.autoUpdate,H=ve.needsUpdate,B=ve.type;ce(),Je.autoReset=w,ve.enabled=F,ve.autoUpdate=G,ve.needsUpdate=H,ve.type=B}function ue(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Oe(w){const F=w.target;F.removeEventListener("dispose",Oe),ut(F)}function ut(w){Et(w),Ee.remove(w)}function Et(w){const F=Ee.get(w).programs;F!==void 0&&(F.forEach(function(G){Ae.releaseProgram(G)}),w.isShaderMaterial&&Ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,G,H,B,re){F===null&&(F=at);const fe=B.isMesh&&B.matrixWorld.determinant()<0,Me=Kc(w,F,G,H,B);Se.setMaterial(H,fe);let be=G.index,Ue=1;if(H.wireframe===!0){if(be=te.getWireframeAttribute(G),be===void 0)return;Ue=2}const ke=G.drawRange,we=G.attributes.position;let $e=ke.start*Ue,rt=(ke.start+ke.count)*Ue;re!==null&&($e=Math.max($e,re.start*Ue),rt=Math.min(rt,(re.start+re.count)*Ue)),be!==null?($e=Math.max($e,0),rt=Math.min(rt,be.count)):we!=null&&($e=Math.max($e,0),rt=Math.min(rt,we.count));const lt=rt-$e;if(lt<0||lt===1/0)return;ot.setup(B,H,Me,G,be);let Ft,Ze=xe;if(be!==null&&(Ft=K.get(be),Ze=Xe,Ze.setIndex(Ft)),B.isMesh)H.wireframe===!0?(Se.setLineWidth(H.wireframeLinewidth*dt()),Ze.setMode(U.LINES)):Ze.setMode(U.TRIANGLES);else if(B.isLine){let Ce=H.linewidth;Ce===void 0&&(Ce=1),Se.setLineWidth(Ce*dt()),B.isLineSegments?Ze.setMode(U.LINES):B.isLineLoop?Ze.setMode(U.LINE_LOOP):Ze.setMode(U.LINE_STRIP)}else B.isPoints?Ze.setMode(U.POINTS):B.isSprite&&Ze.setMode(U.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ze.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Te.get("WEBGL_multi_draw"))Ze.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ce=B._multiDrawStarts,mn=B._multiDrawCounts,Qe=B._multiDrawCount,$t=be?K.get(be).bytesPerElement:1,hi=Ee.get(H).currentProgram.getUniforms();for(let Ot=0;Ot<Qe;Ot++)hi.setValue(U,"_gl_DrawID",Ot),Ze.render(Ce[Ot]/$t,mn[Ot])}else if(B.isInstancedMesh)Ze.renderInstances($e,lt,B.count);else if(G.isInstancedBufferGeometry){const Ce=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,mn=Math.min(G.instanceCount,Ce);Ze.renderInstances($e,lt,mn)}else Ze.render($e,lt)};function et(w,F,G){w.transparent===!0&&w.side===Ht&&w.forceSinglePass===!1?(w.side=Pt,w.needsUpdate=!0,Ts(w,F,G),w.side=Hn,w.needsUpdate=!0,Ts(w,F,G),w.side=Ht):Ts(w,F,G)}this.compile=function(w,F,G=null){G===null&&(G=w),p=je.get(G),p.init(F),S.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),w!==G&&w.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const H=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const re=B.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const Me=re[fe];et(Me,G,B),H.add(Me)}else et(re,G,B),H.add(re)}),S.pop(),p=null,H},this.compileAsync=function(w,F,G=null){const H=this.compile(w,F,G);return new Promise(B=>{function re(){if(H.forEach(function(fe){Ee.get(fe).currentProgram.isReady()&&H.delete(fe)}),H.size===0){B(w);return}setTimeout(re,10)}Te.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Jt=null;function pn(w){Jt&&Jt(w)}function Ma(){Vn.stop()}function ba(){Vn.start()}const Vn=new Rc;Vn.setAnimationLoop(pn),typeof self<"u"&&Vn.setContext(self),this.setAnimationLoop=function(w){Jt=w,X.setAnimationLoop(w),w===null?Vn.stop():Vn.start()},X.addEventListener("sessionstart",Ma),X.addEventListener("sessionend",ba),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(F),F=X.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,F,I),p=je.get(w,S.length),p.init(F),S.push(p),Re.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Y.setFromProjectionMatrix(Re),_e=this.localClippingEnabled,ie=se.init(this.clippingPlanes,_e),m=ge.get(w,b.length),m.init(),b.push(m),X.enabled===!0&&X.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&bo(re,F,-1/0,v.sortObjects)}bo(w,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(J,oe),We=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,We&&Pe.addToRenderList(m,w),this.info.render.frame++,ie===!0&&se.beginShadows();const G=p.state.shadowsArray;ve.render(G,w,F),ie===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,B=m.transmissive;if(p.setupLights(),F.isArrayCamera){const re=F.cameras;if(B.length>0)for(let fe=0,Me=re.length;fe<Me;fe++){const be=re[fe];Sa(H,B,w,be)}We&&Pe.render(w);for(let fe=0,Me=re.length;fe<Me;fe++){const be=re[fe];wa(m,w,be,be.viewport)}}else B.length>0&&Sa(H,B,w,F),We&&Pe.render(w),wa(m,w,F);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),w.isScene===!0&&w.onAfterRender(v,w,F),ot.resetDefaultState(),M=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],ie===!0&&se.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function bo(w,F,G,H){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Y.intersectsSprite(w)){H&&Ve.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Re);const fe=j.update(w),Me=w.material;Me.visible&&m.push(w,fe,Me,G,Ve.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Y.intersectsObject(w))){const fe=j.update(w),Me=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ve.copy(w.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ve.copy(fe.boundingSphere.center)),Ve.applyMatrix4(w.matrixWorld).applyMatrix4(Re)),Array.isArray(Me)){const be=fe.groups;for(let Ue=0,ke=be.length;Ue<ke;Ue++){const we=be[Ue],$e=Me[we.materialIndex];$e&&$e.visible&&m.push(w,fe,$e,G,Ve.z,we)}}else Me.visible&&m.push(w,fe,Me,G,Ve.z,null)}}const re=w.children;for(let fe=0,Me=re.length;fe<Me;fe++)bo(re[fe],F,G,H)}function wa(w,F,G,H){const B=w.opaque,re=w.transmissive,fe=w.transparent;p.setupLightsView(G),ie===!0&&se.setGlobalState(v.clippingPlanes,G),H&&Se.viewport(R.copy(H)),B.length>0&&Ss(B,F,G),re.length>0&&Ss(re,F,G),fe.length>0&&Ss(fe,F,G),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Sa(w,F,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new rn(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")||Te.has("EXT_color_buffer_float")?En:Cn,minFilter:ii,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const re=p.state.transmissionRenderTarget[H.id],fe=H.viewport||R;re.setSize(fe.z,fe.w);const Me=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(W),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),We&&Pe.render(G);const be=v.toneMapping;v.toneMapping=Gn;const Ue=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ie===!0&&se.setGlobalState(v.clippingPlanes,H),Ss(w,G,H),T.updateMultisampleRenderTarget(re),T.updateRenderTargetMipmap(re),Te.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let we=0,$e=F.length;we<$e;we++){const rt=F[we],lt=rt.object,Ft=rt.geometry,Ze=rt.material,Ce=rt.group;if(Ze.side===Ht&&lt.layers.test(H.layers)){const mn=Ze.side;Ze.side=Pt,Ze.needsUpdate=!0,Ta(lt,G,H,Ft,Ze,Ce),Ze.side=mn,Ze.needsUpdate=!0,ke=!0}}ke===!0&&(T.updateMultisampleRenderTarget(re),T.updateRenderTargetMipmap(re))}v.setRenderTarget(Me),v.setClearColor(W,$),Ue!==void 0&&(H.viewport=Ue),v.toneMapping=be}function Ss(w,F,G){const H=F.isScene===!0?F.overrideMaterial:null;for(let B=0,re=w.length;B<re;B++){const fe=w[B],Me=fe.object,be=fe.geometry,Ue=H===null?fe.material:H,ke=fe.group;Me.layers.test(G.layers)&&Ta(Me,F,G,be,Ue,ke)}}function Ta(w,F,G,H,B,re){w.onBeforeRender(v,F,G,H,B,re),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(v,F,G,H,w,re),B.transparent===!0&&B.side===Ht&&B.forceSinglePass===!1?(B.side=Pt,B.needsUpdate=!0,v.renderBufferDirect(G,F,H,B,w,re),B.side=Hn,B.needsUpdate=!0,v.renderBufferDirect(G,F,H,B,w,re),B.side=Ht):v.renderBufferDirect(G,F,H,B,w,re),w.onAfterRender(v,F,G,H,B,re)}function Ts(w,F,G){F.isScene!==!0&&(F=at);const H=Ee.get(w),B=p.state.lights,re=p.state.shadowsArray,fe=B.state.version,Me=Ae.getParameters(w,B.state,re,F,G),be=Ae.getProgramCacheKey(Me);let Ue=H.programs;H.environment=w.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(w.isMeshStandardMaterial?O:y).get(w.envMap||H.environment),H.envMapRotation=H.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,Ue===void 0&&(w.addEventListener("dispose",Oe),Ue=new Map,H.programs=Ue);let ke=Ue.get(be);if(ke!==void 0){if(H.currentProgram===ke&&H.lightsStateVersion===fe)return Aa(w,Me),ke}else Me.uniforms=Ae.getUniforms(w),w.onBeforeCompile(Me,v),ke=Ae.acquireProgram(Me,be),Ue.set(be,ke),H.uniforms=Me.uniforms;const we=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(we.clippingPlanes=se.uniform),Aa(w,Me),H.needsLights=Qc(w),H.lightsStateVersion=fe,H.needsLights&&(we.ambientLightColor.value=B.state.ambient,we.lightProbe.value=B.state.probe,we.directionalLights.value=B.state.directional,we.directionalLightShadows.value=B.state.directionalShadow,we.spotLights.value=B.state.spot,we.spotLightShadows.value=B.state.spotShadow,we.rectAreaLights.value=B.state.rectArea,we.ltc_1.value=B.state.rectAreaLTC1,we.ltc_2.value=B.state.rectAreaLTC2,we.pointLights.value=B.state.point,we.pointLightShadows.value=B.state.pointShadow,we.hemisphereLights.value=B.state.hemi,we.directionalShadowMap.value=B.state.directionalShadowMap,we.directionalShadowMatrix.value=B.state.directionalShadowMatrix,we.spotShadowMap.value=B.state.spotShadowMap,we.spotLightMatrix.value=B.state.spotLightMatrix,we.spotLightMap.value=B.state.spotLightMap,we.pointShadowMap.value=B.state.pointShadowMap,we.pointShadowMatrix.value=B.state.pointShadowMatrix),H.currentProgram=ke,H.uniformsList=null,ke}function Ea(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=io.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Aa(w,F){const G=Ee.get(w);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Kc(w,F,G,H,B){F.isScene!==!0&&(F=at),T.resetTextureUnits();const re=F.fog,fe=H.isMeshStandardMaterial?F.environment:null,Me=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Gi,be=(H.isMeshStandardMaterial?O:y).get(H.envMap||fe),Ue=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!G.morphAttributes.position,$e=!!G.morphAttributes.normal,rt=!!G.morphAttributes.color;let lt=Gn;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(lt=v.toneMapping);const Ft=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ze=Ft!==void 0?Ft.length:0,Ce=Ee.get(H),mn=p.state.lights;if(ie===!0&&(_e===!0||w!==x)){const Wt=w===x&&H.id===M;se.setState(H,w,Wt)}let Qe=!1;H.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==mn.state.version||Ce.outputColorSpace!==Me||B.isBatchedMesh&&Ce.batching===!1||!B.isBatchedMesh&&Ce.batching===!0||B.isBatchedMesh&&Ce.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ce.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ce.instancing===!1||!B.isInstancedMesh&&Ce.instancing===!0||B.isSkinnedMesh&&Ce.skinning===!1||!B.isSkinnedMesh&&Ce.skinning===!0||B.isInstancedMesh&&Ce.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ce.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ce.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ce.instancingMorph===!1&&B.morphTexture!==null||Ce.envMap!==be||H.fog===!0&&Ce.fog!==re||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==se.numPlanes||Ce.numIntersection!==se.numIntersection)||Ce.vertexAlphas!==Ue||Ce.vertexTangents!==ke||Ce.morphTargets!==we||Ce.morphNormals!==$e||Ce.morphColors!==rt||Ce.toneMapping!==lt||Ce.morphTargetsCount!==Ze)&&(Qe=!0):(Qe=!0,Ce.__version=H.version);let $t=Ce.currentProgram;Qe===!0&&($t=Ts(H,F,B));let hi=!1,Ot=!1,ji=!1;const ct=$t.getUniforms(),ln=Ce.uniforms;if(Se.useProgram($t.program)&&(hi=!0,Ot=!0,ji=!0),H.id!==M&&(M=H.id,Ot=!0),hi||x!==w){Se.buffers.depth.getReversed()?(le.copy(w.projectionMatrix),Vh(le),Wh(le),ct.setValue(U,"projectionMatrix",le)):ct.setValue(U,"projectionMatrix",w.projectionMatrix),ct.setValue(U,"viewMatrix",w.matrixWorldInverse);const Pn=ct.map.cameraPosition;Pn!==void 0&&Pn.setValue(U,Be.setFromMatrixPosition(w.matrixWorld)),de.logarithmicDepthBuffer&&ct.setValue(U,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ct.setValue(U,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,Ot=!0,ji=!0)}if(B.isSkinnedMesh){ct.setOptional(U,B,"bindMatrix"),ct.setOptional(U,B,"bindMatrixInverse");const Wt=B.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),ct.setValue(U,"boneTexture",Wt.boneTexture,T))}B.isBatchedMesh&&(ct.setOptional(U,B,"batchingTexture"),ct.setValue(U,"batchingTexture",B._matricesTexture,T),ct.setOptional(U,B,"batchingIdTexture"),ct.setValue(U,"batchingIdTexture",B._indirectTexture,T),ct.setOptional(U,B,"batchingColorTexture"),B._colorsTexture!==null&&ct.setValue(U,"batchingColorTexture",B._colorsTexture,T));const Ji=G.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&Fe.update(B,G,$t),(Ot||Ce.receiveShadow!==B.receiveShadow)&&(Ce.receiveShadow=B.receiveShadow,ct.setValue(U,"receiveShadow",B.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ln.envMap.value=be,ln.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&F.environment!==null&&(ln.envMapIntensity.value=F.environmentIntensity),Ot&&(ct.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ce.needsLights&&Zc(ln,ji),re&&H.fog===!0&&he.refreshFogUniforms(ln,re),he.refreshMaterialUniforms(ln,H,V,ee,p.state.transmissionRenderTarget[w.id]),io.upload(U,Ea(Ce),ln,T)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(io.upload(U,Ea(Ce),ln,T),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ct.setValue(U,"center",B.center),ct.setValue(U,"modelViewMatrix",B.modelViewMatrix),ct.setValue(U,"normalMatrix",B.normalMatrix),ct.setValue(U,"modelMatrix",B.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Wt=H.uniformsGroups;for(let Pn=0,In=Wt.length;Pn<In;Pn++){const Ca=Wt[Pn];L.update(Ca,$t),L.bind(Ca,$t)}}return $t}function Zc(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Qc(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(w,F,G){Ee.get(w.texture).__webglTexture=F,Ee.get(w.depthTexture).__webglTexture=G;const H=Ee.get(w);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,F){const G=Ee.get(w);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,G=0){I=w,E=F,A=G;let H=!0,B=null,re=!1,fe=!1;if(w){const be=Ee.get(w);if(be.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(U.FRAMEBUFFER,null),H=!1;else if(be.__webglFramebuffer===void 0)T.setupRenderTarget(w);else if(be.__hasExternalTextures)T.rebindTextures(w,Ee.get(w.texture).__webglTexture,Ee.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const we=w.depthTexture;if(be.__boundDepthTexture!==we){if(we!==null&&Ee.has(we)&&(w.width!==we.image.width||w.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(w)}}const Ue=w.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(fe=!0);const ke=Ee.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?B=ke[F][G]:B=ke[F],re=!0):w.samples>0&&T.useMultisampledRTT(w)===!1?B=Ee.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?B=ke[G]:B=ke,R.copy(w.viewport),z.copy(w.scissor),k=w.scissorTest}else R.copy(me).multiplyScalar(V).floor(),z.copy(Le).multiplyScalar(V).floor(),k=Ye;if(Se.bindFramebuffer(U.FRAMEBUFFER,B)&&H&&Se.drawBuffers(w,B),Se.viewport(R),Se.scissor(z),Se.setScissorTest(k),re){const be=Ee.get(w.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,G)}else if(fe){const be=Ee.get(w.texture),Ue=F||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.__webglTexture,G||0,Ue)}M=-1},this.readRenderTargetPixels=function(w,F,G,H,B,re,fe){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){Se.bindFramebuffer(U.FRAMEBUFFER,Me);try{const be=w.texture,Ue=be.format,ke=be.type;if(!de.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!de.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-H&&G>=0&&G<=w.height-B&&U.readPixels(F,G,H,B,Ge.convert(Ue),Ge.convert(ke),re)}finally{const be=I!==null?Ee.get(I).__webglFramebuffer:null;Se.bindFramebuffer(U.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(w,F,G,H,B,re,fe){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ee.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&fe!==void 0&&(Me=Me[fe]),Me){const be=w.texture,Ue=be.format,ke=be.type;if(!de.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!de.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=w.width-H&&G>=0&&G<=w.height-B){Se.bindFramebuffer(U.FRAMEBUFFER,Me);const we=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,we),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(F,G,H,B,Ge.convert(Ue),Ge.convert(ke),0);const $e=I!==null?Ee.get(I).__webglFramebuffer:null;Se.bindFramebuffer(U.FRAMEBUFFER,$e);const rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Hh(U,rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,we),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(we),U.deleteSync(rt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,F=null,G=0){w.isTexture!==!0&&(hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,w=arguments[1]);const H=Math.pow(2,-G),B=Math.floor(w.image.width*H),re=Math.floor(w.image.height*H),fe=F!==null?F.x:0,Me=F!==null?F.y:0;T.setTexture2D(w,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,fe,Me,B,re),Se.unbindTexture()},this.copyTextureToTexture=function(w,F,G=null,H=null,B=0){w.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,w=arguments[1],F=arguments[2],B=arguments[3]||0,G=null);let re,fe,Me,be,Ue,ke,we,$e,rt;const lt=w.isCompressedTexture?w.mipmaps[B]:w.image;G!==null?(re=G.max.x-G.min.x,fe=G.max.y-G.min.y,Me=G.isBox3?G.max.z-G.min.z:1,be=G.min.x,Ue=G.min.y,ke=G.isBox3?G.min.z:0):(re=lt.width,fe=lt.height,Me=lt.depth||1,be=0,Ue=0,ke=0),H!==null?(we=H.x,$e=H.y,rt=H.z):(we=0,$e=0,rt=0);const Ft=Ge.convert(F.format),Ze=Ge.convert(F.type);let Ce;F.isData3DTexture?(T.setTexture3D(F,0),Ce=U.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(T.setTexture2DArray(F,0),Ce=U.TEXTURE_2D_ARRAY):(T.setTexture2D(F,0),Ce=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,F.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,F.unpackAlignment);const mn=U.getParameter(U.UNPACK_ROW_LENGTH),Qe=U.getParameter(U.UNPACK_IMAGE_HEIGHT),$t=U.getParameter(U.UNPACK_SKIP_PIXELS),hi=U.getParameter(U.UNPACK_SKIP_ROWS),Ot=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,lt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,be),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ue),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ke);const ji=w.isDataArrayTexture||w.isData3DTexture,ct=F.isDataArrayTexture||F.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const ln=Ee.get(w),Ji=Ee.get(F),Wt=Ee.get(ln.__renderTarget),Pn=Ee.get(Ji.__renderTarget);Se.bindFramebuffer(U.READ_FRAMEBUFFER,Wt.__webglFramebuffer),Se.bindFramebuffer(U.DRAW_FRAMEBUFFER,Pn.__webglFramebuffer);for(let In=0;In<Me;In++)ji&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.get(w).__webglTexture,B,ke+In),w.isDepthTexture?(ct&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ee.get(F).__webglTexture,B,rt+In),U.blitFramebuffer(be,Ue,re,fe,we,$e,re,fe,U.DEPTH_BUFFER_BIT,U.NEAREST)):ct?U.copyTexSubImage3D(Ce,B,we,$e,rt+In,be,Ue,re,fe):U.copyTexSubImage2D(Ce,B,we,$e,rt+In,be,Ue,re,fe);Se.bindFramebuffer(U.READ_FRAMEBUFFER,null),Se.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ct?w.isDataTexture||w.isData3DTexture?U.texSubImage3D(Ce,B,we,$e,rt,re,fe,Me,Ft,Ze,lt.data):F.isCompressedArrayTexture?U.compressedTexSubImage3D(Ce,B,we,$e,rt,re,fe,Me,Ft,lt.data):U.texSubImage3D(Ce,B,we,$e,rt,re,fe,Me,Ft,Ze,lt):w.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,B,we,$e,re,fe,Ft,Ze,lt.data):w.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,B,we,$e,lt.width,lt.height,Ft,lt.data):U.texSubImage2D(U.TEXTURE_2D,B,we,$e,re,fe,Ft,Ze,lt);U.pixelStorei(U.UNPACK_ROW_LENGTH,mn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qe),U.pixelStorei(U.UNPACK_SKIP_PIXELS,$t),U.pixelStorei(U.UNPACK_SKIP_ROWS,hi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ot),B===0&&F.generateMipmaps&&U.generateMipmap(Ce),Se.unbindTexture()},this.copyTextureToTexture3D=function(w,F,G=null,H=null,B=0){return w.isTexture!==!0&&(hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,w=arguments[2],F=arguments[3],B=arguments[4]||0),hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,F,G,H,B)},this.initRenderTarget=function(w){Ee.get(w).__webglFramebuffer===void 0&&T.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?T.setTextureCube(w,0):w.isData3DTexture?T.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?T.setTexture2DArray(w,0):T.setTexture2D(w,0),Se.unbindTexture()},this.resetState=function(){E=0,A=0,I=null,Se.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=qe._getUnpackColorSpace()}}class ua{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new ua(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uc extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vt,this.environmentIntensity=1,this.environmentRotation=new Vt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class en extends xt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Nc extends Vi{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const co=new D,ho=new D,El=new ht,ts=new Mc,Ys=new vo,er=new D,Al=new D;class Q0 extends xt{constructor(e=new It,t=new Nc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,o=t.count;i<o;i++)co.fromBufferAttribute(t,i-1),ho.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=co.distanceTo(ho);e.setAttribute("lineDistance",new st(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,o=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ys.copy(n.boundingSphere),Ys.applyMatrix4(i),Ys.radius+=o,e.ray.intersectsSphere(Ys)===!1)return;El.copy(i).invert(),ts.copy(e.ray).applyMatrix4(El);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=h.getX(_),b=h.getX(_+1),S=js(this,e,ts,l,p,b);S&&t.push(S)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=js(this,e,ts,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let _=f,m=g-1;_<m;_+=c){const p=js(this,e,ts,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=js(this,e,ts,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=i.length;o<r;o++){const a=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function js(s,e,t,n,i,o){const r=s.geometry.attributes.position;if(co.fromBufferAttribute(r,i),ho.fromBufferAttribute(r,o),t.distanceSqToSegment(co,ho,er,Al)>n)return;er.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(er);if(!(l<e.near||l>e.far))return{distance:l,point:Al.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class Ms extends Lt{constructor(e,t,n,i,o,r,a,l,c){super(e,t,n,i,o,r,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fa extends It{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const o=[],r=[],a=[],l=[],c=new D,h=new Ie;r.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),r.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(r[d]/e+1)/2,h.y=(r[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new st(r,3)),this.setAttribute("normal",new st(a,3)),this.setAttribute("uv",new st(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ke extends It{constructor(e=1,t=1,n=1,i=32,o=1,r=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;b(),r===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new st(u,3)),this.setAttribute("normal",new st(d,3)),this.setAttribute("uv",new st(f,2));function b(){const v=new D,P=new D;let E=0;const A=(t-e)/n;for(let I=0;I<=o;I++){const M=[],x=I/o,R=x*(t-e)+e;for(let z=0;z<=i;z++){const k=z/i,W=k*l+a,$=Math.sin(W),q=Math.cos(W);P.x=R*$,P.y=-x*n+m,P.z=R*q,u.push(P.x,P.y,P.z),v.set($,A,q).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-x),M.push(g++)}_.push(M)}for(let I=0;I<i;I++)for(let M=0;M<o;M++){const x=_[M][I],R=_[M+1][I],z=_[M+1][I+1],k=_[M][I+1];(e>0||M!==0)&&(h.push(x,R,k),E+=3),(t>0||M!==o-1)&&(h.push(R,z,k),E+=3)}c.addGroup(p,E,0),p+=E}function S(v){const P=g,E=new Ie,A=new D;let I=0;const M=v===!0?e:t,x=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const R=g;for(let z=0;z<=i;z++){const W=z/i*l+a,$=Math.cos(W),q=Math.sin(W);A.x=M*q,A.y=m*x,A.z=M*$,u.push(A.x,A.y,A.z),d.push(0,x,0),E.x=$*.5+.5,E.y=q*.5*x+.5,f.push(E.x,E.y),g++}for(let z=0;z<i;z++){const k=P+z,W=R+z;v===!0?h.push(W,W+1,k):h.push(W+1,W,k),I+=3}c.addGroup(p,I,v===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ke(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zn extends Ke{constructor(e=1,t=1,n=32,i=1,o=!1,r=0,a=Math.PI*2){super(0,e,t,n,i,o,r,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(e){return new zn(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pa extends It{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const o=[],r=[];a(i),c(n),h(),this.setAttribute("position",new st(o,3)),this.setAttribute("normal",new st(o.slice(),3)),this.setAttribute("uv",new st(r,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const S=new D,v=new D,P=new D;for(let E=0;E<t.length;E+=3)f(t[E+0],S),f(t[E+1],v),f(t[E+2],P),l(S,v,P,b)}function l(b,S,v,P){const E=P+1,A=[];for(let I=0;I<=E;I++){A[I]=[];const M=b.clone().lerp(v,I/E),x=S.clone().lerp(v,I/E),R=E-I;for(let z=0;z<=R;z++)z===0&&I===E?A[I][z]=M:A[I][z]=M.clone().lerp(x,z/R)}for(let I=0;I<E;I++)for(let M=0;M<2*(E-I)-1;M++){const x=Math.floor(M/2);M%2===0?(d(A[I][x+1]),d(A[I+1][x]),d(A[I][x])):(d(A[I][x+1]),d(A[I+1][x+1]),d(A[I+1][x]))}}function c(b){const S=new D;for(let v=0;v<o.length;v+=3)S.x=o[v+0],S.y=o[v+1],S.z=o[v+2],S.normalize().multiplyScalar(b),o[v+0]=S.x,o[v+1]=S.y,o[v+2]=S.z}function h(){const b=new D;for(let S=0;S<o.length;S+=3){b.x=o[S+0],b.y=o[S+1],b.z=o[S+2];const v=m(b)/2/Math.PI+.5,P=p(b)/Math.PI+.5;r.push(v,1-P)}g(),u()}function u(){for(let b=0;b<r.length;b+=6){const S=r[b+0],v=r[b+2],P=r[b+4],E=Math.max(S,v,P),A=Math.min(S,v,P);E>.9&&A<.1&&(S<.2&&(r[b+0]+=1),v<.2&&(r[b+2]+=1),P<.2&&(r[b+4]+=1))}}function d(b){o.push(b.x,b.y,b.z)}function f(b,S){const v=b*3;S.x=e[v+0],S.y=e[v+1],S.z=e[v+2]}function g(){const b=new D,S=new D,v=new D,P=new D,E=new Ie,A=new Ie,I=new Ie;for(let M=0,x=0;M<o.length;M+=9,x+=6){b.set(o[M+0],o[M+1],o[M+2]),S.set(o[M+3],o[M+4],o[M+5]),v.set(o[M+6],o[M+7],o[M+8]),E.set(r[x+0],r[x+1]),A.set(r[x+2],r[x+3]),I.set(r[x+4],r[x+5]),P.copy(b).add(S).add(v).divideScalar(3);const R=m(P);_(E,x+0,b,R),_(A,x+2,S,R),_(I,x+4,v,R)}}function _(b,S,v,P){P<0&&b.x===1&&(r[S]=b.x-1),v.x===0&&v.z===0&&(r[S]=P/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.vertices,e.indices,e.radius,e.details)}}class ma extends pa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ma(e.radius,e.detail)}}class ci extends It{constructor(e=.5,t=1,n=32,i=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:r},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new D,g=new Ie;for(let _=0;_<=i;_++){for(let m=0;m<=n;m++){const p=o+m/n*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<i;_++){const m=_*(n+1);for(let p=0;p<n;p++){const b=p+m,S=b,v=b+n+1,P=b+n+2,E=b+1;a.push(S,v,E),a.push(v,P,E)}}this.setIndex(a),this.setAttribute("position",new st(l,3)),this.setAttribute("normal",new st(c,3)),this.setAttribute("uv",new st(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ci(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class vt extends It{constructor(e=1,t=32,n=16,i=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:o,thetaStart:r,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+a,Math.PI);let c=0;const h=[],u=new D,d=new D,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],S=p/n;let v=0;p===0&&r===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let P=0;P<=t;P++){const E=P/t;u.x=-e*Math.cos(i+E*o)*Math.sin(r+S*a),u.y=e*Math.cos(r+S*a),u.z=e*Math.sin(i+E*o)*Math.sin(r+S*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(E+v,1-S),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){const S=h[p][b+1],v=h[p][b],P=h[p+1][b],E=h[p+1][b+1];(p!==0||r>0)&&f.push(S,v,E),(p!==n-1||l<Math.PI)&&f.push(v,P,E)}this.setIndex(f),this.setAttribute("position",new st(g,3)),this.setAttribute("normal",new st(_,3)),this.setAttribute("uv",new st(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ga extends It{constructor(e=1,t=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const r=[],a=[],l=[],c=[],h=new D,u=new D,d=new D;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const _=g/i*o,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const _=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,b=(i+1)*f+g;r.push(_,m,b),r.push(m,p,b)}this.setIndex(r),this.setAttribute("position",new st(a,3)),this.setAttribute("normal",new st(l,3)),this.setAttribute("uv",new st(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class em extends Rt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class Z extends Vi{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gc,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Js(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function tm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function nm(s){function e(i,o){return s[i]-s[o]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Cl(s,e,t){const n=s.length,i=new s.constructor(n);for(let o=0,r=0;r!==n;++o){const a=t[o]*e;for(let l=0;l!==e;++l)i[r++]=s[a+l]}return i}function Oc(s,e,t,n){let i=1,o=s[0];for(;o!==void 0&&o[n]===void 0;)o=s[i++];if(o===void 0)return;let r=o[n];if(r!==void 0)if(Array.isArray(r))do r=o[n],r!==void 0&&(e.push(o.time),t.push.apply(t,r)),o=s[i++];while(o!==void 0);else if(r.toArray!==void 0)do r=o[n],r!==void 0&&(e.push(o.time),r.toArray(t,t.length)),o=s[i++];while(o!==void 0);else do r=o[n],r!==void 0&&(e.push(o.time),t.push(r)),o=s[i++];while(o!==void 0)}class yo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],o=t[n-1];e:{t:{let r;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<o)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(o=i,i=t[++n],e<i)break t}r=t.length;break n}if(!(e>=o)){const a=t[1];e<a&&(n=2,o=a);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=o,o=t[--n-1],e>=o)break t}r=n,n=0;break n}break e}for(;n<r;){const a=n+r>>>1;e<t[a]?r=a:n=a+1}if(i=t[n],o=t[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,i)}return this.interpolate_(n,o,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=e*i;for(let r=0;r!==i;++r)t[r]=n[o+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class im extends yo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ai,endingEnd:Ai}}intervalChanged_(e,t,n){const i=this.parameterPositions;let o=e-2,r=e+1,a=i[o],l=i[r];if(a===void 0)switch(this.getSettings_().endingStart){case Ci:o=e,a=2*t-n;break;case ro:o=i.length-2,a=t+i[o]-i[o+1];break;default:o=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ci:r=e,l=2*n-t;break;case ro:r=1,l=n+i[1]-i[0];break;default:r=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=o*h,this._offsetNext=r*h}interpolate_(e,t,n,i){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-d*m+2*d*_-d*g,b=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*_+.5*g,v=f*m-f*_;for(let P=0;P!==a;++P)o[P]=p*r[h+P]+b*r[c+P]+S*r[l+P]+v*r[u+P];return o}}class kc extends yo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)o[d]=r[c+d]*u+r[l+d]*h;return o}}class sm extends yo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class fn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Js(t,this.TimeBufferType),this.values=Js(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Js(e.times,Array),values:Js(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new sm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new im(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case oo:t=this.InterpolantFactoryMethodDiscrete;break;case Xr:t=this.InterpolantFactoryMethodLinear;break;case So:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return oo;case this.InterpolantFactoryMethodLinear:return Xr;case this.InterpolantFactoryMethodSmooth:return So}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let o=0,r=i-1;for(;o!==i&&n[o]<e;)++o;for(;r!==-1&&n[r]>t;)--r;if(++r,o!==0||r!==i){o>=r&&(r=Math.max(r,1),o=r-1);const a=this.getValueSize();this.times=n.slice(o,r),this.values=this.values.slice(o*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==o;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(i!==void 0&&tm(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===So,o=e.length-1;let r=1;for(let a=1;a<o;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[f+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const u=a*n,d=r*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++r}}if(o>0){e[r]=e[o];for(let a=o*n,l=r*n,c=0;c!==n;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=e.slice(0,r),this.values=t.slice(0,r*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Xr;class Xi extends fn{constructor(e,t,n){super(e,t,n)}}Xi.prototype.ValueTypeName="bool";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=oo;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class zc extends fn{}zc.prototype.ValueTypeName="color";class uo extends fn{}uo.prototype.ValueTypeName="number";class om extends yo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const o=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Yt.slerpFlat(o,0,r,c-a,r,c,l);return o}}class mt extends fn{InterpolantFactoryMethodLinear(e){return new om(this.times,this.values,this.getValueSize(),e)}}mt.prototype.ValueTypeName="quaternion";mt.prototype.InterpolantFactoryMethodSmooth=void 0;class qi extends fn{constructor(e,t,n){super(e,t,n)}}qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=oo;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;class si extends fn{}si.prototype.ValueTypeName="vector";class us{constructor(e="",t=-1,n=[],i=la){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Hi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let r=0,a=n.length;r!==a;++r)t.push(am(n[r]).scale(i));const o=new this(e.name,e.duration,t,e.blendMode);return o.uuid=e.uuid,o}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let o=0,r=n.length;o!==r;++o)t.push(fn.toJSON(n[o]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const o=t.length,r=[];for(let a=0;a<o;a++){let l=[],c=[];l.push((a+o-1)%o,a,(a+1)%o),c.push(0,1,0);const h=nm(l);l=Cl(l,1,h),c=Cl(c,1,h),!i&&l[0]===0&&(l.push(o),c.push(c[0])),r.push(new uo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,r)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},o=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(o);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const r=[];for(const a in i)r.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,_){if(f.length!==0){const m=[],p=[];Oc(f,m,p,g),m.length!==0&&_.push(new u(d,m,p))}},i=[],o=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)f[d[g].morphTargets[_]]=-1;for(const _ in f){const m=[],p=[];for(let b=0;b!==d[g].morphTargets.length;++b){const S=d[g];m.push(S.time),p.push(S.morphTarget===_?1:0)}i.push(new uo(".morphTargetInfluence["+_+"]",m,p))}l=f.length*r}else{const f=".bones["+t[u].name+"]";n(si,f+".position",d,"pos",i),n(mt,f+".quaternion",d,"rot",i),n(si,f+".scale",d,"scl",i)}}return i.length===0?null:new this(o,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const o=this.tracks[n];t=Math.max(t,o.times[o.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function rm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return uo;case"vector":case"vector2":case"vector3":case"vector4":return si;case"color":return zc;case"quaternion":return mt;case"bool":case"boolean":return Xi;case"string":return qi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function am(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=rm(s.type);if(s.times===void 0){const t=[],n=[];Oc(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}class bs extends xt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class lm extends bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const tr=new ht,Rl=new D,Pl=new D;class Gc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Rl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Rl),Pl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pl),t.updateMatrixWorld(),tr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Il=new ht,ns=new D,nr=new D;class cm extends Gc{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,o=e.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),ns.setFromMatrixPosition(e.matrixWorld),n.position.copy(ns),nr.copy(n.position),nr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nr),n.updateMatrixWorld(),i.makeTranslation(-ns.x,-ns.y,-ns.z),Il.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Il)}}class hm extends bs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new cm}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dm extends Gc{constructor(){super(new ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fo extends bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new dm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hc extends bs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class um{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Dl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Dl(){return performance.now()}class fm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,o,r;switch(t){case"quaternion":i=this._slerp,o=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,o=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,o=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=o,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,o=e*i+i;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==i;++a)n[o+a]=n[a];r=t}else{r+=t;const a=t/r;this._mixBufferRegion(n,o,0,a,i)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,o=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,o<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-o,t)}r>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let o=n,r=i;o!==r;++o)t[o]=t[i+o%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,o){if(i>=.5)for(let r=0;r!==o;++r)e[t+r]=e[n+r]}_slerp(e,t,n,i){Yt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,o){const r=this._workIndex*o;Yt.multiplyQuaternionsFlat(e,r,e,t,e,n),Yt.slerpFlat(e,t,e,t,e,r,i)}_lerp(e,t,n,i,o){const r=1-i;for(let a=0;a!==o;++a){const l=t+a;e[l]=e[l]*r+e[n+a]*i}}_lerpAdditive(e,t,n,i,o){for(let r=0;r!==o;++r){const a=t+r;e[a]=e[a]+e[n+r]*i}}}const _a="\\[\\]\\.:\\/",pm=new RegExp("["+_a+"]","g"),va="[^"+_a+"]",mm="[^"+_a.replace("\\.","")+"]",gm=/((?:WC+[\/:])*)/.source.replace("WC",va),_m=/(WCOD+)?/.source.replace("WCOD",mm),vm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",va),xm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",va),ym=new RegExp("^"+gm+_m+vm+xm+"$"),Mm=["material","materials","bones","map"];class bm{constructor(e,t,n){const i=n||nt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=n.length;i!==o;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class nt{constructor(e,t,n){this.path=t,this.parsedPath=n||nt.parseTrackName(t),this.node=nt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new nt.Composite(e,t,n):new nt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pm,"")}static parseTrackName(e){const t=ym.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const o=n.nodeName.substring(i+1);Mm.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(o){for(let r=0;r<o.length;r++){const a=o[r];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let o=t.propertyIndex;if(e||(e=nt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[i];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[o]!==void 0&&(o=e.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=o}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}nt.Composite=bm;nt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};nt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};nt.prototype.GetterByBindingType=[nt.prototype._getValue_direct,nt.prototype._getValue_array,nt.prototype._getValue_arrayElement,nt.prototype._getValue_toArray];nt.prototype.SetterByBindingTypeAndVersioning=[[nt.prototype._setValue_direct,nt.prototype._setValue_direct_setNeedsUpdate,nt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_array,nt.prototype._setValue_array_setNeedsUpdate,nt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_arrayElement,nt.prototype._setValue_arrayElement_setNeedsUpdate,nt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[nt.prototype._setValue_fromArray,nt.prototype._setValue_fromArray_setNeedsUpdate,nt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class wm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const o=t.tracks,r=o.length,a=new Array(r),l={endingStart:Ai,endingEnd:Ai};for(let c=0;c!==r;++c){const h=o[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ah,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,o=e._clip.duration,r=o/i,a=i/o;e.warp(1,r,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,o=i.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=o,l[1]=o+n,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const o=this._startTime;if(o!==null){const l=(e-o)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const r=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Rh:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulateAdditive(a);break;case la:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,o=this._loopCount;const r=n===Ch;if(e===0)return o===-1?i:r&&(o&1)===1?t-i:i;if(n===Eh){o===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(o===-1&&(e>=0?(o=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,o+=Math.abs(a);const l=this.repetitions-o;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=o,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(r&&(o&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ci,i.endingEnd=Ci):(e?i.endingStart=this.zeroSlopeAtStart?Ci:Ai:i.endingStart=ro,t?i.endingEnd=this.zeroSlopeAtEnd?Ci:Ai:i.endingEnd=ro)}_scheduleFading(e,t,n){const i=this._mixer,o=i.time;let r=this._weightInterpolant;r===null&&(r=i._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=o,l[0]=t,a[1]=o+e,l[1]=n,this}}const Sm=new Float32Array(1);class Tm extends li{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,o=i.length,r=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==o;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,r[u]=g;else{if(g=r[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=t&&t._propertyBindings[u].binding.parsedPath;g=new fm(nt.create(n,f,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),r[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,o=this._actionsByClip[i];this._bindAction(e,o&&o.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const o=t[n];o.useCount++===0&&(this._lendBinding(o),o.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const o=t[n];--o.useCount===0&&(o.restoreOriginalState(),this._takeBackBinding(o))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,o=this._actionsByClip;let r=o[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,o[t]=r;else{const a=r.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),r.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const o=e._clip.uuid,r=this._actionsByClip,a=r[o],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete r[o],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const o=t[n];--o.referenceCount===0&&this._removeInactiveBinding(o)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,o=t[i];e._cacheIndex=i,t[i]=e,o._cacheIndex=n,t[n]=o}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,o=t[i];e._cacheIndex=i,t[i]=e,o._cacheIndex=n,t[n]=o}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,o=this._bindings;let r=i[t];r===void 0&&(r={},i[t]=r),r[n]=e,e._cacheIndex=o.length,o.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,o=n.path,r=this._bindingsByRootAndName,a=r[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[o],Object.keys(a).length===0&&delete r[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,o=t[i];e._cacheIndex=i,t[i]=e,o._cacheIndex=n,t[n]=o}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,o=t[i];e._cacheIndex=i,t[i]=e,o._cacheIndex=n,t[n]=o}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new kc(new Float32Array(2),new Float32Array(2),1,Sm),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,o=t[i];e.__cacheIndex=i,t[i]=e,o.__cacheIndex=n,t[n]=o}clipAction(e,t,n){const i=t||this._root,o=i.uuid;let r=typeof e=="string"?us.findByName(i,e):e;const a=r!==null?r.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(r!==null?n=r.blendMode:n=la),l!==void 0){const u=l.actionByRoot[o];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const h=new wm(this,r,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,o),h}existingAction(e,t){const n=t||this._root,i=n.uuid,o=typeof e=="string"?us.findByName(n,e):e,r=o?o.uuid:e,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,o=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,o,r);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,o=i[n];if(o!==void 0){const r=o.knownActions;for(let a=0,l=r.length;a!==l;++a){const c=r[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const r in n){const a=n[r].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,o=i[t];if(o!==void 0)for(const r in o){const a=o[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qr);const Vc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Yi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Em=new ha(-1,1,1,-1,0,1);class Am extends It{constructor(){super(),this.setAttribute("position",new st([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new st([0,2,0,0,2,0],2))}}const Cm=new Am;class xa{constructor(e){this._mesh=new N(Cm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Em)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Rm extends Yi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Rt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_s.clone(e.uniforms),this.material=new Rt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new xa(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ll extends Yi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,r,4294967295),o.buffers.stencil.setClear(a),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class Pm extends Yi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Im{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ie);this._width=n.width,this._height=n.height,t=new rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:En}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rm(Vc),this.copyPass.material.blending=Tn,this.clock=new um}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const r=this.passes[i];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ll!==void 0&&(r instanceof Ll?n=!0:r instanceof Pm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Dm extends Yi{constructor(e,t,n=null,i=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ye}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=i}}const Lm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ye(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class zi extends Yi{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Ie(e.x,e.y):new Ie(256,256),this.clearColor=new ye(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new rn(o,r,{type:En}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new rn(o,r,{type:En});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new rn(o,r,{type:En});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),r=Math.round(r/2)}const a=Lm;this.highPassUniforms=_s.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Rt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ie(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Vc;this.copyUniforms=_s.clone(h.uniforms),this.blendMaterial=new Rt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:or,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ye,this.oldClearAlpha=1,this.basic=new jt,this.fsQuad=new xa(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new Ie(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,o){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=zi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=zi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=r}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Rt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ie(.5,.5)},direction:{value:new Ie(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Rt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}zi.BlurDirectionX=new Ie(1,0);zi.BlurDirectionY=new Ie(0,1);const Fm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Bm extends Yi{constructor(){super();const e=Fm;this.uniforms=_s.clone(e.uniforms),this.material=new em({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new xa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},qe.getTransfer(this._outputColorSpace)===tt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ec?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===tc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===nc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ta?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ic?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===sc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const is={fov:35,height:38,rotationSmoothing:.06,positionSmoothing:.1,lookAheadDistance:6};class Um{constructor(){C(this,"camera");C(this,"targetPos",new D);C(this,"cameraAngle",0);this.camera=new Nt(is.fov,window.innerWidth/window.innerHeight,5,800)}follow(e,t,n){let i=n-this.cameraAngle;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;this.cameraAngle+=i*is.rotationSmoothing;const o=Math.sin(this.cameraAngle)*-28,r=-Math.cos(this.cameraAngle)*-28;this.targetPos.set(e.x+o,e.y+is.height,e.z+r),this.camera.position.lerp(this.targetPos,is.positionSmoothing);const l=t.length()>.5?t.clone().normalize().multiplyScalar(is.lookAheadDistance):new D(0,0,0),c=e.clone().add(l);c.y+=2,this.camera.lookAt(c)}}class Nm{constructor(){C(this,"boxes",[])}addBox(e,t,n,i){this.boxes.push({cx:e,cz:t,hw:n,hd:i})}resolveCircle(e,t,n){let i=e,o=t;for(const r of this.boxes){const a=r.hw+n,l=r.hd+n,c=i-r.cx,h=o-r.cz;if(Math.abs(c)<a&&Math.abs(h)<l){const u=a-Math.abs(c),d=l-Math.abs(h);u<d?i+=c<0?-u:u:o+=h<0?-d:d}}return{x:i,z:o}}}let jr=null,vs=null;async function Om(){async function e(t){const n=new Image;return new Promise(i=>{n.onload=()=>i(n.naturalWidth>0?n:null),n.onerror=()=>{console.warn("[LogoLoader] failed:",t),i(null)},n.src=t})}[jr,vs]=await Promise.all([e("./tem-logo.jpg"),e("./tem-logo-white.jpg")]),console.log("[LogoLoader] black-on-white:",!!jr,"| white-on-black:",!!vs)}function Wc(s){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d"),i=s>>16&255,o=s>>8&255,r=s&255,l=.299*i+.587*o+.114*r<128,c=l?vs:jr;if(c){n.drawImage(c,0,0,256,256);const h=n.getImageData(0,0,256,256),u=h.data;for(let d=0;d<u.length;d+=4){const f=.299*u[d]+.587*u[d+1]+.114*u[d+2];l?u[d+3]=Math.round(Math.min(255,f*1.4)):u[d+3]=Math.round(Math.min(255,(255-f)*1.4))}n.putImageData(h,0,0)}else km(n,256,l);return new Ms(t)}function Xc(s=512){const e=document.createElement("canvas");e.width=e.height=s;const t=e.getContext("2d");return t.fillStyle="#000000",t.fillRect(0,0,s,s),vs?t.drawImage(vs,0,0,s,s):(t.strokeStyle="#FFFFFF",t.fillStyle="#FFFFFF",qc(t,s)),new Ms(e)}function km(s,e,t){s.strokeStyle=t?"#FFFFFF":"#111111",s.fillStyle=t?"#FFFFFF":"#111111",qc(s,e)}function qc(s,e){const t=e/256;s.save(),s.scale(t,t),s.lineCap="round",s.lineWidth=6,s.beginPath(),s.arc(128,128,118,0,Math.PI*2),s.stroke(),s.lineWidth=11,s.beginPath(),s.moveTo(128,225),s.lineTo(128,148),s.stroke(),s.lineWidth=7,s.beginPath(),s.moveTo(128,148),s.lineTo(128,96),s.stroke();const n=[[128,178,76,152],[128,178,180,152],[128,160,64,134],[128,160,192,134],[128,142,76,116],[128,142,180,116],[128,124,88,99],[128,124,168,99],[128,110,98,84],[128,110,158,84],[128,98,110,70],[128,98,146,70],[128,88,118,56],[128,88,138,56]];s.lineWidth=4;for(const[i,o,r,a]of n)s.beginPath(),s.moveTo(i,o),s.lineTo(r,a),s.stroke(),s.beginPath(),s.arc(r,a,5,0,Math.PI*2),s.fill();s.restore()}class zm{constructor(){C(this,"renderer");C(this,"scene");C(this,"camera");C(this,"collisionWorld",new Nm);C(this,"composer");C(this,"clouds",[]);C(this,"updateCallbacks",[]);C(this,"lastTime",0);C(this,"C",{modernGrey:13157564,warmGrey:12103846,terracotta:12884602,deepClay:10516568,softWhite:15262940,charcoal:4868682,warmCream:13945272,oliveGreen:9083754,ironRed:12674667})}async init(){this.renderer=new Bc({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ql,this.renderer.toneMapping=ta,this.renderer.toneMappingExposure=1.1,document.body.appendChild(this.renderer.domElement),this.renderer.domElement.style.position="relative",this.renderer.domElement.style.zIndex="1",this.scene=new Uc,this.scene.fog=new ua(8900331,.0025),this.camera=new Um,this.scene.add(this.camera.camera),this.composer=new Im(this.renderer),this.composer.addPass(new Dm(this.scene,this.camera.camera));const e=new zi(new Ie(window.innerWidth,window.innerHeight),.3,.4,.85);this.composer.addPass(e),this.composer.addPass(new Bm);const t=new Hc(16777215,.5);this.scene.add(t);const n=new fo(16774368,1.4);n.position.set(80,120,40),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=.5,n.shadow.camera.far=600,n.shadow.camera.left=-300,n.shadow.camera.right=300,n.shadow.camera.top=300,n.shadow.camera.bottom=-300,n.shadow.bias=-.001,this.scene.add(n);const i=new fo(16771280,.5);i.position.set(-60,40,-80),this.scene.add(i);const o=new lm(8900331,8943462,.3);this.scene.add(o),this.createCityGround(),this.createCity(),this.createTEHouses(),this.buildWorkshop(10,15),this.createZebraCrossings(),this.createRoadCorners(),this.createStreetFurniture(),this.createSkyDome(),this.createClouds(),this.createPuddles(),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),this.camera.camera.aspect=window.innerWidth/window.innerHeight,this.camera.camera.updateProjectionMatrix()})}seed(e,t,n=0){const i=Math.sin(e*127.1+t*311.7+n*74.3)*43758.5453123;return i-Math.floor(i)}getZone(e,t){return Math.abs(e)<80&&Math.abs(t)<80?"cbd":e<-80?"footscray":e>80?"richmond":t<-80?"stkilda":"brunswick"}pickBuildingType(e,t){const n={cbd:[.5,.5,.9,1,1],footscray:[0,.2,.2,.4,1],brunswick:[.3,.6,.6,1,1],richmond:[.3,.3,.6,1,1],stkilda:[0,.3,.3,.7,1]},i=n[e]??n.brunswick,o=["A","B","C","D","E"];for(let r=0;r<i.length;r++)if(t<i[r])return o[r];return"D"}createCityGround(){const o=new Z({color:8947840}),r=new N(new pt(2048,2048),o);r.rotation.x=-Math.PI/2,r.position.y=0,r.receiveShadow=!0,this.scene.add(r);const a={cbd:8947840,footscray:7824981,brunswick:8943462,richmond:8026224,stkilda:9080960};for(let l=-240;l<240;l+=40)for(let c=-240;c<240;c+=40){const h=l+20,u=c+40/2,d=this.getZone(h,u),g=this.seed(l,c,0)<.15?5929546:a[d],_=new Z({color:g}),m=new N(new pt(30,30),_);m.rotation.x=-Math.PI/2,m.position.set(h,.005,u),m.receiveShadow=!0,this.scene.add(m)}}createCity(){const i=new Z({color:2763306}),o=new Z({color:16777215}),r=new Z({color:15777856}),a=new Z({color:13156528}),l=32;for(let c=-240;c<=240;c+=40){const u=new N(new pt(480,8),i);u.rotation.x=-Math.PI/2,u.position.set(0,.01,c),u.receiveShadow=!0,this.scene.add(u);for(let d=-240;d<240;d+=40){const f=d+20;for(const g of[-1,1]){const _=new N(new pt(l,2),a);_.rotation.x=-Math.PI/2,_.position.set(f,.02,c+g*(8/2+1)),_.receiveShadow=!0,this.scene.add(_)}}for(const d of[-1,1]){const f=new N(new pt(480,.2),r);f.rotation.x=-Math.PI/2,f.position.set(0,.03,c+d*(8/2-.3)),this.scene.add(f)}for(let d=-240;d<=240;d+=8){const f=new N(new pt(4,.15),o);f.rotation.x=-Math.PI/2,f.position.set(d,.03,c),this.scene.add(f)}for(let d=-240;d<=240;d+=20)for(const f of[-1,1]){const g=d+(this.seed(d,c,50+f)-.5)*2,_=c+f*5.5,m=(g%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,_,d*10+f,c*10+1)}for(let d=-232;d<240;d+=17){const f=this.seed(d,c,60);if(f>.45){const g=f>.72?1:-1,_=d+(this.seed(d,c,61)-.5)*4,m=c+g*(8/2+2);this.addParkedCar(_,m,d+g*3,c+7,Math.PI/2)}}}for(let c=-240;c<=240;c+=40){const u=new N(new pt(8,480),i);u.rotation.x=-Math.PI/2,u.position.set(c,.01,0),u.receiveShadow=!0,this.scene.add(u);for(let d=-240;d<240;d+=40){const f=d+20;for(const g of[-1,1]){const _=new N(new pt(2,l),a);_.rotation.x=-Math.PI/2,_.position.set(c+g*(8/2+1),.02,f),_.receiveShadow=!0,this.scene.add(_)}}for(const d of[-1,1]){const f=new N(new pt(.2,480),r);f.rotation.x=-Math.PI/2,f.position.set(c+d*(8/2-.3),.03,0),this.scene.add(f)}for(let d=-240;d<=240;d+=8){const f=new N(new pt(.15,4),o);f.rotation.x=-Math.PI/2,f.position.set(c,.03,d),this.scene.add(f)}for(let d=-240;d<=240;d+=20)for(const f of[-1,1]){const g=c+f*5.5,_=d+(this.seed(c,d,52+f)-.5)*2,m=(_%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,_,c*10+2,d*10+f)}for(let d=-232;d<240;d+=17){const f=this.seed(c,d,62);if(f>.45){const g=f>.72?1:-1,_=c+g*(8/2+2),m=d+(this.seed(c,d,63)-.5)*4;this.addParkedCar(_,m,c+9,d+g*3,0)}}}for(let c=-240;c<240;c+=40)for(let h=-240;h<240;h+=40)this.populateBlock(c,h,40,8)}addTree(e,t,n,i){const o=this.seed(n,i,99),r=o<.15?"palm":o<.5?"round":"layered",a=2+o*1.5,l=new Z({color:6045747}),c=new N(new Ke(.25,.35,a,7),l);if(c.position.set(e,a/2,t),c.castShadow=!0,this.scene.add(c),r==="palm"){const h=new N(new Ke(.15,.22,6,6),new Z({color:9139029}));h.position.set(e,3,t),this.scene.add(h);for(let u=0;u<6;u++){const d=u/6*Math.PI*2,f=new N(new ne(.15,.08,2.5),new Z({color:2775578}));f.position.set(e+Math.cos(d)*1.2,6.5,t+Math.sin(d)*1.2),f.rotation.y=d,f.rotation.z=.4,this.scene.add(f)}}else if(r==="layered"){const h=[2973229,3829306,4881994];for(let u=0;u<3;u++){const d=2.2-u*.5,f=new N(new zn(d,2,8),new Z({color:h[u]}));f.position.set(e,a+1+u*1.5,t),f.castShadow=!0,this.scene.add(f)}}else{const h=o>.7?4025917:2973229,u=[[0,0,0],[.8,-.3,.5],[-.7,-.2,.3],[.3,.4,-.6],[-.4,.3,-.5]];for(let d=0;d<u.length;d++){const[f,g,_]=u[d],m=1.8+this.seed(n+d*17,i+d*13,103)*.8,p=new N(new vt(m,7,6),new Z({color:h}));p.position.set(e+f,a+2.5+g,t+_),p.castShadow=!0,this.scene.add(p)}}}addParkedCar(e,t,n,i,o=0){const r=[13382451,3364300,11184810,14540253,2236962],a=Math.floor(this.seed(n,i,20)*r.length),l=new Z({color:r[a]}),c=new N(new ne(1.5,1.2,3),l);c.position.set(e,.6,t),c.rotation.y=o,this.scene.add(c);const h=new Z({color:2241348}),u=new N(new ne(1.4,.5,.1),h),d=-.9*Math.sin(o),f=-.9*Math.cos(o);u.position.set(e+d,1.3,t+f),u.rotation.y=o,this.scene.add(u)}populateBlock(e,t,n,i){const o=n-i-4,r=e+n/2,a=t+n/2,l=this.getZone(r,a),c=1+Math.floor(this.seed(e,t,1)*2);for(let h=0;h<c;h++){const u=this.seed(e+h*3,t+h*7,3),d=this.pickBuildingType(l,u);if(d==="E"){h===0&&this.buildTypeE(r,a,e,t);break}const f=o*.18,g=c>1?h===0?-f:f:0,_=g+(this.seed(e+h*5,t,4)-.5)*f*.3,m=g+(this.seed(e,t+h*5,5)-.5)*f*.3,p=e+h*11,b=t+h*13;switch(d){case"A":this.buildTypeA(r+_,a+m,p,b);break;case"B":this.buildTypeB(r+_,a+m,p,b);break;case"C":this.buildTypeC(r+_,a+m,p,b);break;case"D":this.buildTypeD(r+_,a+m,p,b);break}}}addBox(e,t,n,i,o,r,a,l,c=0,h=0,u=0){const d=new N(new ne(n,i,o),new Z({color:t}));d.position.set(r,a,l),c!==0&&(d.rotation.x=c),h!==0&&(d.rotation.y=h),u!==0&&(d.rotation.z=u),d.castShadow=!0,d.receiveShadow=!0,e.add(d)}addCyl(e,t,n,i,o,r,a,l,c){const h=new N(new Ke(n,i,o,r),new Z({color:t}));h.position.set(a,l,c),h.castShadow=!0,h.receiveShadow=!0,e.add(h)}registerBuildingCollider(e,t,n,i,o,r){const a=Math.floor(this.seed(o,r,101)*4)%4,l=a===1||a===3;this.collisionWorld.addBox(e,t,l?i:n,l?n:i)}buildTypeA(e,t,n,i){const o=this.C,r=new Ne;this.addBox(r,o.modernGrey,16,10,14,0,5,0),this.addBox(r,o.softWhite,16.4,.6,14.4,0,10.3,0);for(const u of[-5,0,5])this.addCyl(r,o.charcoal,.3,.3,3,6,u,1.5,-7);this.addBox(r,o.charcoal,14,.4,.4,0,3,-7);for(const u of[-4.5,0,4.5])this.addGlassBox(r,2241348,2.5,1.8,.15,u,7,-6.93);this.addBox(r,o.deepClay,14,.5,1.2,0,.25,-7.6),this.addBox(r,o.oliveGreen,13,.4,1,0,.7,-7.6);const a=this.seed(n,i,400),l=new Z({color:a>.5?12876352:4876938}),c=new N(new ne(14,.1,1.5),l);c.position.set(0,3.8,-7.75),c.rotation.x=.15,r.add(c);const h=new N(new ne(14,.3,.08),l);h.position.set(0,3.45,-8.45),r.add(h),this.addBox(r,14210252,.8,.5,.08,-6.5,1,-7.05),this.addRooftopDetails(r,16,14,10,n,i),r.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),r.position.set(e,0,t),this.scene.add(r),this.registerBuildingCollider(e,t,8.5,7.5,n,i)}buildTypeB(e,t,n,i){const o=this.C,r=new Ne;this.addBox(r,o.deepClay,14.5,8.2,12.5,.3,4,.3),this.addBox(r,o.terracotta,14,8,12,0,4,0),this.addBox(r,o.terracotta,14.6,1.2,12.6,0,8.6,0),this.addBox(r,o.softWhite,15,.3,13,0,9.35,0);for(const a of[-3,3]){this.addBox(r,o.softWhite,1.6,2.6,.1,a,5,-5.99),this.addGlassBox(r,2241348,1.2,2.2,.2,a,5,-5.75);for(const l of[4.3,5,5.7])this.addBox(r,o.charcoal,1,.08,.12,a,l,-5.68)}this.addBox(r,o.charcoal,2,3,.2,0,1.5,-6.1),this.addBox(r,o.charcoal,1.5,.4,.2,0,3.2,-6.1),this.addBox(r,o.charcoal,1,.4,.2,0,3.7,-6.1),this.addBox(r,o.deepClay,2,.4,.6,0,.2,-6.6),this.addBox(r,o.oliveGreen,1.8,.1,.5,0,.45,-6.6),this.addBox(r,13938826,.8,.5,.08,-5,1,-6.05),this.addRooftopDetails(r,14,12,8,n,i),r.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),r.position.set(e,0,t),this.scene.add(r),this.registerBuildingCollider(e,t,7.5,6.5,n,i)}buildTypeC(e,t,n,i){const o=this.C,r=new Ne,a=30+Math.floor(this.seed(n,i,31)*20);this.addBox(r,o.modernGrey,8,4,8,0,2,0),this.addBox(r,4478310,7.5,3.5,7.5,0,2,0),this.addBox(r,3359829,7,a,7,0,a/2,0);for(let l=4;l<=a;l+=4)this.addBox(r,o.warmGrey,7.3,.2,7.3,0,l,0);this.addBox(r,o.charcoal,4,3,4,0,a+1.5,0),r.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),r.position.set(e,0,t),this.scene.add(r),this.registerBuildingCollider(e,t,4.5,4.5,n,i)}buildTypeD(e,t,n,i){const o=this.C,r=new Ne;this.addBox(r,o.warmCream,13,7,11,0,3.5,0),this.addBox(r,o.softWhite,13.5,.5,11.5,0,7.25,0),this.addBox(r,o.softWhite,2.8,3.8,1.6,0,4,-6.2),this.addBox(r,o.warmCream,2.5,3.5,1.5,0,4,-6.25);for(const a of[-.8,0,.8])this.addGlassBox(r,3359829,.7,2.5,.2,a,4,-7);this.addBox(r,o.deepClay,2.2,3.2,.3,0,1.6,-5.65),this.addBox(r,o.deepClay,1.8,.4,.3,0,3.35,-5.65),this.addBox(r,o.deepClay,1.2,.4,.3,0,3.8,-5.65);for(const a of[-3.5,3.5])this.addBox(r,o.softWhite,1.8,1.5,.1,a,5.5,-5.5),this.addGlassBox(r,3359829,1.5,1.2,.15,a,5.5,-5.55);this.addBox(r,o.deepClay,11,1,.3,0,.5,-6.65),this.addBox(r,14997960,.8,.5,.08,-5,1,-5.55),this.addRooftopDetails(r,13,11,7,n,i),r.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),r.position.set(e,0,t),this.scene.add(r),this.registerBuildingCollider(e,t,7,6,n,i)}buildTypeE(e,t,n,i){this.C;const o=new Ne,r=12*Math.PI/180;this.addBox(o,6974050,22,4,18,0,2,0),this.addBox(o,1710614,22.1,.3,18.1,0,.15,0);const a=new N(new ne(22.5,.3,10),new Z({color:1973786}));a.castShadow=!0,a.receiveShadow=!0,a.rotation.x=r,a.position.set(0,4.5,-4.5),o.add(a);const l=new N(new ne(22.5,.3,10),new Z({color:1973786}));l.castShadow=!0,l.receiveShadow=!0,l.rotation.x=-r,l.position.set(0,4.5,4.5),o.add(l),this.addBox(o,1118480,22.5,.5,.6,0,5.2,0);for(const f of[-2,.5,3])this.addBox(o,1118480,22.2,.08,.1,0,3.5,f);this.addBox(o,1118480,4.5,3.5,.2,0,1.75,-9.1),this.addBox(o,2236960,.15,3.5,.2,-2.4,1.75,-9.1),this.addBox(o,2236960,.15,3.5,.2,2.4,1.75,-9.1),this.addBox(o,3359829,8,.8,.15,-11.075,3.5,0),this.addCyl(o,1118480,.1,.1,4,5,-11,2,-9);const c=this.seed(n,i,401),h=new Z({color:c>.5?12876352:4876938}),u=new N(new ne(8,.1,1.5),h);u.position.set(0,4.2,-9.85),u.rotation.x=.15,o.add(u);const d=new N(new ne(8,.3,.08),h);d.position.set(0,3.85,-10.6),o.add(d);for(const f of[-3.5,3.5]){const g=new N(new Ke(.06,.06,4,5),new Z({color:5592400}));g.position.set(f,2,-10.55),o.add(g)}this.addRooftopDetails(o,22,18,5.2,n,i),o.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),o.position.set(e,0,t),this.scene.add(o),this.registerBuildingCollider(e,t,11.5,9.5,n,i)}createTEHouses(){this.buildHouseMarbellino(20,20),this.collisionWorld.addBox(20,20,10,7.5),this.buildHousePorthole(-60,20),this.collisionWorld.addBox(-60,20,8,6.5),this.buildHouseTerracotta(20,-60),this.collisionWorld.addBox(20,-60,9,7),this.buildHouseLoggia(-60,-60),this.collisionWorld.addBox(-60,-60,10,7.5),this.buildHouseRokka(60,-20),this.collisionWorld.addBox(60,-20,11,8),this.buildHouseTimberStone(100,60),this.collisionWorld.addBox(100,60,11,7),this.buildHouseSculpturalPlaster(-100,-20),this.collisionWorld.addBox(-100,-20,8,6),this.buildHouseHaussmann(60,-100),this.collisionWorld.addBox(60,-100,11,7),this.buildHouseAngularBay(-140,60),this.collisionWorld.addBox(-140,60,9,6.5),this.buildHouseBrutalistCompound(20,100),this.collisionWorld.addBox(20,100,12,5),this.buildHouseTerracottaMonolith(140,20),this.collisionWorld.addBox(140,20,10,5),this.buildHouseCurvedBalcony(-20,-140),this.collisionWorld.addBox(-20,-140,8,6),this.buildHouseCortenPlaster(-140,-60),this.collisionWorld.addBox(-140,-60,10,5.5),this.buildCoffeeShop(-60,-100),this.collisionWorld.addBox(-60,-100,7,5),this.buildToiletBlock(100,60),this.collisionWorld.addBox(100,60,6,5)}buildHouseMarbellino(e,t){const n=new Ne;this.addBox(n,13945786,18,4,14,0,2,0),this.addBox(n,2763306,20,4,15,0,7,0);for(const i of[-8,-5,-2,1,4,7])this.addBox(n,1710618,.15,4,15,i,7,0);this.addBox(n,3355443,20.5,.5,15.5,0,9.25,0),this.addBox(n,3359829,10,.9,.15,0,3.5,-7.1),this.addBox(n,13157564,10.4,1.1,.1,0,3.5,-7.05);for(const i of[-4,0,4]){const o=new N(new ne(1.5,2.5,.15),new Z({color:4478310,emissive:new ye(2241348),emissiveIntensity:.3}));o.position.set(i,7.5,-7.6),n.add(o)}this.addBox(n,1710618,5,3.8,.2,-5.5,1.9,-7.1),this.addBox(n,13157564,2,.3,1,4,.15,-7.5),this.addBox(n,9072736,14,.4,1,0,.2,-8),this.addBox(n,5929546,12,.6,.8,0,.6,-8),n.position.set(e,0,t),this.scene.add(n)}buildHousePorthole(e,t){const n=new Ne;this.addBox(n,12104876,16,5.5,13,0,2.75,0),this.addBox(n,9134144,7,5.5,.3,3.5,2.75,-6.65);for(let i=0;i<5;i++){const o=(i-2)*1.2;this.addBox(n,6965280,7,.2,.4,3.5,2.75+o,-6.55,0,0,Math.PI/7.2)}this.addBox(n,13157564,16.5,.3,13.5,0,5.65,0),this.addBox(n,2763306,17,.5,14,0,5.95,0);{const i=new N(new Ke(1.4,1.4,.15,16),new Z({color:8947848}));i.rotation.x=Math.PI/2,i.position.set(-4,3.5,-6.7),n.add(i)}{const i=new N(new Ke(1.1,1.1,.1,16),new Z({color:2241348,emissive:new ye(1122867),emissiveIntensity:.5}));i.rotation.x=Math.PI/2,i.position.set(-4,3.5,-6.65),n.add(i)}this.addBox(n,3359829,3.5,1.2,.15,1,3.5,-6.7),this.addBox(n,3359829,3.5,1.2,.15,5,3.5,-6.7),this.addBox(n,3811866,1.8,2.8,.3,-6,1.4,-6.8),this.addBox(n,8947848,2.2,3,.2,-6,1.4,-6.65),this.addBox(n,3828282,10,.7,.8,0,.35,-7.5),n.position.set(e,0,t),this.scene.add(n)}buildHouseTerracotta(e,t){const n=new Ne;this.addBox(n,10121296,17.6,7.2,14.6,0,3.5,0),this.addBox(n,12884602,17,7,14,0,3.5,0),this.addBox(n,12884602,17.8,1.5,14.8,0,7.75,0),this.addBox(n,15262940,18.2,.3,15.2,0,8.65,0),this.addBox(n,9068608,2.4,3.5,.3,0,1.75,-7.1),this.addBox(n,9068608,2,.5,.3,0,3.75,-7.1),this.addBox(n,9068608,1.4,.5,.3,0,4.25,-7.1),this.addBox(n,9068608,1.4,2.8,.5,-4,4,-7.2),this.addBox(n,2241348,1,2.4,.15,-4,4,-7.05),this.addBox(n,15262940,1.6,3,.15,-4,4,-6.98);for(const i of[3.2,4,4.8])this.addBox(n,3355443,.9,.08,.15,-4,i,-7.1);this.addBox(n,9068608,1.4,2.8,.5,4,4,-7.2),this.addBox(n,2241348,1,2.4,.15,4,4,-7.05),this.addBox(n,15262940,1.6,3,.15,4,4,-6.98);for(const i of[3.2,4,4.8])this.addBox(n,3355443,.9,.08,.15,4,i,-7.1);for(const i of[-2,2])this.addBox(n,3359829,.15,1.5,1,8.58,4,i),this.addBox(n,3359829,.15,1.5,1,-8.58,4,i);this.addBox(n,10516568,2.5,.5,.8,-4,.25,-7.5),this.addBox(n,10516568,2.5,.5,.8,4,.25,-7.5),this.addBox(n,5933642,2,.5,.6,-4,.65,-7.5),this.addBox(n,5933642,2,.5,.6,4,.65,-7.5);for(const i of[-6,-2,2,6])this.addBox(n,15262940,.8,.8,.2,i,8.4,-7.4);n.position.set(e,0,t),this.scene.add(n)}buildHouseLoggia(e,t){const n=new Ne;this.addBox(n,11578532,20,6,15,0,3,0),this.addBox(n,10131088,20.5,.4,15.5,0,6.2,0),this.addBox(n,10131088,20,.4,3,0,3.2,-10);for(const i of[-7,-3,3,7])this.addCyl(n,8947840,.2,.2,3.2,8,i,1.6,-11);this.addBox(n,3359829,14,2,.2,0,4,-7.5),this.addBox(n,13157564,14.4,2.2,.15,0,4,-7.4);for(const i of[-5,0,5])this.addBox(n,8947840,.15,2,.2,i,4,-7.5);{const i=new N(new ne(2.4,2.8,.2),new Z({color:3359829,emissive:new ye(1120290),emissiveIntensity:.2}));i.position.set(5,1.4,-7.5),n.add(i)}this.addBox(n,8947840,2.8,3,.15,5,1.4,-7.4),this.addBox(n,9074784,18,.5,2.5,0,.25,-9),this.addBox(n,4880970,16,.7,2,0,.65,-9),this.addBox(n,8947840,20,.3,.3,0,3.1,-10.2),this.addBox(n,8947840,20,.3,.3,0,3.1,-11.8),n.position.set(e,0,t),this.scene.add(n)}buildHouseRokka(e,t){const n=new Ne;this.addBox(n,12892314,22,4.5,16,0,2.25,0),this.addBox(n,10128506,22.5,.3,9,0,4.75,-3.5,Math.PI*8/180,0,0),this.addBox(n,10128506,22.5,.3,9,0,4.75,3.5,-Math.PI*8/180,0,0),this.addBox(n,6969928,22.5,.6,.8,0,5.1,0),this.addBox(n,10127472,22.5,1,16.5,0,.5,0);{const i=new N(new ne(6,3.2,.2),new Z({color:3359829,emissive:new ye(1120290),emissiveIntensity:.3}));i.position.set(0,1.6,-8.1),n.add(i)}this.addBox(n,8022618,6.4,3.5,.15,0,1.75,-8);for(const i of[-2,0,2])this.addBox(n,8947824,.1,3.2,.2,i,1.6,-8.1);this.addBox(n,8947824,6,.1,.2,0,2.2,-8.1),this.addBox(n,3359829,2.5,1.5,.2,-7,3,-8.1),this.addBox(n,3359829,2.5,1.5,.2,7,3,-8.1),this.addBox(n,11575432,.8,4.5,.8,-3.5,2.25,-8.2),this.addBox(n,11575432,.8,4.5,.8,3.5,2.25,-8.2),this.addCyl(n,6969928,.1,.1,4.5,5,-11,2.25,-8),this.addCyl(n,6969928,.1,.1,4.5,5,11,2.25,-8),this.addBox(n,11575432,20,.8,.3,0,.4,-10),n.position.set(e,0,t),this.scene.add(n)}buildHouseTimberStone(e,t){const n=new Ne;this.addBox(n,8947840,22,4,14,0,2,0),this.addBox(n,6710880,22.2,.4,14.2,0,.2,0),this.addBox(n,12088362,22,4.5,13,0,6.25,0);for(let i=0;i<8;i++)this.addBox(n,10116634,22.1,.12,13.1,0,4.3+i*.57,0);this.addBox(n,4870229,5,8.5,14.2,8.5,4.25,0);for(let i=0;i<12;i++){const o=i%2===0?3817541:5593696;this.addBox(n,o,5.1,.3,14.3,8.5,.5+i*.65,0)}this.addBox(n,2763306,22.5,.5,14.5,0,8.75,0);for(const i of[-6,-2,2]){this.addBox(n,1710618,2.8,3.2,.2,i,6,-6.6);const o=new N(new ne(2.4,2.9,.15),new Z({color:9087675,emissive:new ye(2770005),emissiveIntensity:.2}));o.position.set(i,6,-6.6),n.add(o)}this.addBox(n,1710618,13,.15,.5,-3,8,-6.8),this.addBox(n,10140364,12.5,.8,.1,-3,7.6,-6.75);for(const i of[-7,-4.5])this.addBox(n,1710618,2.2,1.8,.2,i,2,-7.1),this.addBox(n,3359829,1.8,1.5,.15,i,2,-7);this.addBox(n,6962202,1.8,3.2,.2,2.5,1.6,-7.1),this.addBox(n,12092938,.12,.12,.15,3.1,1.6,-7.1),this.addBox(n,1710618,4,.15,2.5,2.5,3.5,-7.3),this.addCyl(n,1710618,.06,.06,3.5,5,1,1.75,-8.2),this.addCyl(n,1710618,.06,.06,3.5,5,4,1.75,-8.2),this.addBox(n,1710618,8,.18,6,-9,4.1,-5),this.addCyl(n,1118481,.12,.12,4.1,6,-6.5,2.05,-7.8),this.addCyl(n,1118481,.12,.12,4.1,6,-11.5,2.05,-7.8),this.addBox(n,10066329,2,.8,3.5,-9.5,.4,-4.5),this.addBox(n,11184810,1.9,.3,3.4,-9.5,.9,-4.5);for(let i=5;i<=13;i+=.7)this.addBox(n,1710618,.12,1.6,.12,i,.8,-8.5);this.addBox(n,6710880,20,.8,.3,0,.4,-9.5),this.addBox(n,4870229,20,.35,.4,0,.18,-9.5);for(let i=0;i<5;i++)this.addBox(n,14540236,1.4,.08,.7,5,.05,-10.2+i*.9);this.addBox(n,4880954,8,.1,3,5,0,-9.8);for(const[i,o]of[[3.5,-8.5],[6.5,-8]]){this.addCyl(n,5912608,.12,.15,2.5,6,i,1.25,o);const r=new N(new zn(1,2.2,7),new Z({color:3828266}));r.position.set(i,2.8,o),n.add(r)}this.addBox(n,1710618,3.5,1.8,.2,7.5,6.5,-6.6),this.addBox(n,3359829,3,1.5,.15,7.5,6.5,-6.55),n.position.set(e,0,t),this.scene.add(n)}buildHouseSculpturalPlaster(e,t){const n=new Ne,i=8686698,o=6976085,r=11842732,a=1118481;this.addBox(n,i,14,5.5,12,-3,2.75,0),this.addBox(n,i,7,3.5,12,9,1.75,0),this.addBox(n,o,.3,5.6,12,2.85,2.75,0);const l=new N(new ne(11,.35,12.4),new Z({color:i}));l.rotation.z=22*Math.PI/180,l.position.set(.5,8,0),n.add(l);const c=new N(new ne(7.5,.35,12.4),new Z({color:r}));c.rotation.z=-52*Math.PI/180,c.position.set(-6.2,8.2,0),n.add(c),this.addBox(n,o,.6,.6,12.4,-3.2,10,0),this.addBox(n,1710618,2.3,4,.5,-3,2,-6.25),this.addBox(n,a,2.6,4.3,.2,-3,2.1,-6.05);const h=new N(new ne(2,3.6,.12),new Z({color:2767428,emissive:new ye(661538),emissiveIntensity:.3}));h.position.set(-3,2.1,-6.1),n.add(h),this.addBox(n,1710618,1.6,1.6,.4,8.5,2,-6.2),this.addBox(n,a,1.8,1.8,.18,8.5,2,-6.05),this.addBox(n,a,.4,.4,.4,-6.5,4.2,-6.05),this.addBox(n,a,.4,.4,.4,6.5,3.4,-6.05);for(const f of[-6.5,6.5]){const g=new N(new ne(.5,.08,.3),new Z({color:16772812,emissive:new ye(16764040),emissiveIntensity:.6}));g.position.set(f,f===-6.5?3.95:3.15,-6.07),n.add(g)}const u=8.5,d=-11;for(let f=-4;f<=4;f++){const g=f/4*40*Math.PI/180,_=u*Math.sin(g),m=d+u*(Math.cos(g)-1),p=new N(new ne(2,1.2,.35),new Z({color:i}));p.rotation.y=g,p.position.set(_,.6,m),n.add(p);const b=new N(new ne(2,.12,.45),new Z({color:12631720}));b.rotation.y=g,b.position.set(_,1.26,m),n.add(b)}this.addBox(n,o,2.5,.2,1,-3,.1,-7.5),n.position.set(e,0,t),this.scene.add(n)}buildHouseHaussmann(e,t){const n=new Ne,i=15261384,o=15788244,r=13154972,a=1118481;this.addBox(n,i,22,9.5,14,0,4.75,0);for(let h=0;h<5;h++)this.addBox(n,r,22.3,.14,14.3,0,.5+h*.88,0);for(let h=0;h<4;h++)this.addBox(n,r,22.3,.12,14.3,0,5.4+h*.85,0);this.addBox(n,o,22.6,.5,14.6,0,4.75,0),this.addBox(n,r,22.8,.2,14.8,0,5.05,0),this.addBox(n,i,22.5,.3,14.5,0,5.25,0),this.addBox(n,i,23.2,.5,15.2,0,9.75,0),this.addBox(n,o,22.8,.8,14.8,0,10.15,0),this.addBox(n,r,23.4,.25,15.4,0,10.55,0),this.addBox(n,o,4,11.5,4,-10,5.75,-6);for(let h=0;h<6;h++)this.addBox(n,r,4.2,.12,4.2,-10,.5+h*1.75,-6);this.addBox(n,i,4.4,.4,4.4,-10,5,-6),this.addBox(n,i,4.6,.4,4.6,-10,11.3,-6),this.addBox(n,o,4.4,.6,4.4,-10,11.75,-6),this.addBox(n,r,4.8,.25,4.8,-10,12.12,-6),this.addBox(n,i,2.5,1,2.5,-10,12.75,-6);for(const h of[-6.5,-1,4.5]){this.addBox(n,r,2,4.2,.5,h,2.1,-7.25),this.addBox(n,o,1.7,4,.2,h,2.1,-7.05);const u=new N(new ne(1.35,3.5,.12),new Z({color:9087931,emissive:new ye(1714739),emissiveIntensity:.15}));u.position.set(h,2.1,-7),n.add(u),this.addBox(n,o,1.7,.12,.15,h,3.2,-7.05)}for(const h of[-6.5,4.5]){this.addBox(n,r,2,3.8,.5,h,7.5,-7.25),this.addBox(n,o,1.7,3.5,.2,h,7.5,-7.05);const u=new N(new ne(1.35,3,.12),new Z({color:9087931,emissive:new ye(1714739),emissiveIntensity:.15}));u.position.set(h,7.5,-7),n.add(u),this.addBox(n,o,1.7,.12,.15,h,8.5,-7.05),this.addBox(n,i,3.4,.28,1.4,h,5.66,-7.9),this.addBox(n,r,3.5,.45,1.5,h,5.38,-7.95);for(let d=0;d<5;d++){const f=h-1.3+d*.65;this.addBox(n,a,.07,1,.07,f,6.2,-8.4)}this.addBox(n,a,3.2,.09,.09,h,6.72,-8.4),this.addBox(n,a,3.2,.09,.09,h,5.82,-8.4),this.addBox(n,a,.07,1,.07,h-1.3,6.2,-8.4,0,0,.35),this.addBox(n,a,.07,1,.07,h+1.3,6.2,-8.4,0,0,-.35)}this.addBox(n,o,5,6.5,.22,9.5,3.75,-7.05);const l=new N(new ne(4.5,6,.12),new Z({color:9087931,emissive:new ye(1714739),emissiveIntensity:.12}));l.position.set(9.5,3.75,-7),n.add(l);for(let h=0;h<3;h++)this.addBox(n,o,5,.1,.15,9.5,1+h*2,-7);for(const h of[7.5,9.5,11.5])this.addBox(n,o,.1,6,.15,h,3.75,-7);this.addBox(n,r,3.8,5.5,.6,1.5,2.75,-7.4),this.addBox(n,o,2.8,4.8,.2,1.5,2.4,-7.1);const c=new N(new ne(2.2,4.2,.12),new Z({color:9087931,emissive:new ye(660768),emissiveIntensity:.2}));c.position.set(1.5,2.4,-7.05),n.add(c),this.addBox(n,13937232,.1,.1,.1,2.4,2.2,-7.06),this.addBox(n,r,22.5,.3,14.5,0,.15,0),n.position.set(e,0,t),this.scene.add(n)}buildHouseAngularBay(e,t){const n=new Ne,i=15789022,o=12876378,r=3809296,a=1118481;this.addBox(n,i,18,4,13,0,2,0),this.addBox(n,i,18,4,12,0,6,0),this.addBox(n,i,8,4,2.5,5,6,-7.25),this.addBox(n,i,3,10,2.5,6.5,5,-7.5),this.addBox(n,o,10,.5,14,-4.5,8.5,0,0,0,.44),this.addBox(n,o,10,.5,14,4.5,8.5,0,0,0,-.44),this.addBox(n,r,1.5,.5,14.5,0,10.5,0),this.addBox(n,r,19,.3,13.5,0,8.05,0),this.addBox(n,r,19,.2,1.2,0,8.05,-7.3);for(const l of[-6.5,0])this.addBox(n,15658734,2.6,2,.12,l,1.8,-6.56),this.addBox(n,3359829,2.2,1.6,.15,l,1.8,-6.5);for(const l of[-6.5,0])this.addBox(n,15658734,2.6,2,.12,l,5.8,-6.56),this.addBox(n,3359829,2.2,1.6,.15,l,5.8,-6.5);for(let l=0;l<4;l++)this.addBox(n,a,.08,1,.08,-8.5+l*.65,5.5,-6.7);this.addBox(n,a,2.4,.08,.08,-7.02,6.05,-6.7),this.addBox(n,a,2.4,.08,.08,-7.02,5,-6.7),n.position.set(e,0,t),this.scene.add(n)}buildHouseBrutalistCompound(e,t){const n=new Ne,i=10524792,o=8947840;this.addBox(n,i,7,7,11,-8.5,3.5,0),this.addBox(n,i,6,5,10,-1,2.5,.5),this.addBox(n,i,6,6,11,5.5,3,-.5),this.addBox(n,i,5,4,9,11,2,0),this.addBox(n,i,24,1.5,9,0,.75,.5),this.addBox(n,o,4,.25,2.5,-8.5,7.25,-6.2),this.addBox(n,o,4,.25,2.5,5.5,6.25,-6.2),this.addBox(n,2241348,4,5.5,.15,-8.5,3.5,-5.6),this.addBox(n,2241348,3.5,4.5,.15,5.5,3,-5.6),this.addBox(n,i,8,5,.4,2,2.5,-6.5,0,.26,0);const r=14,a=9,l=-Math.PI*.35,c=Math.PI*.35;for(let h=0;h<a;h++){const u=h/(a-1),d=l+(c-l)*u,f=Math.sin(d)*r,g=Math.cos(d)*r-r+4;this.addBox(n,i,3.5,1.5,.4,f,.75,g,0,-d,0)}for(const h of[-3,2.5]){this.addCyl(n,5913114,.15,.2,3,5,h,1.5,-4);const u=new N(new vt(1.2,6,5),new Z({color:3828266}));u.position.set(h,4,-4),n.add(u)}n.position.set(e,0,t),this.scene.add(n)}buildHouseTerracottaMonolith(e,t){const n=new Ne,i=12284e3,o=2759194,r=4880954;this.addBox(n,i,20,3,.5,0,1.5,-9.5),this.addBox(n,o,20.2,.1,.55,0,1,-9.5),this.addBox(n,o,20.2,.1,.55,0,2,-9.5),this.addBox(n,i,20,6,10,0,3,-2),this.addBox(n,o,20.2,.1,10.1,0,2,-2),this.addBox(n,o,20.2,.1,10.1,0,4,-2),this.addBox(n,i,20.3,.4,10.3,0,6.2,-2),this.addBox(n,r,18,.3,1.8,0,.15,-7.5);for(let a=-8;a<=8;a+=2.5){const l=new N(new zn(.2,.8,5),new Z({color:5933642}));l.position.set(a,.55,-7.5),n.add(l)}this.addBox(n,1118481,1.2,3.5,.2,0,3.5,-7.05),this.addBox(n,2241348,.8,3,.15,0,3.5,-7),n.position.set(e,0,t),this.scene.add(n)}buildHouseCurvedBalcony(e,t){const n=new Ne,i=15261900,o=15789544,r=11053216,a=1118481;this.addBox(n,i,16,4,12,0,2,0),this.addBox(n,o,16,4,12,0,6,0),this.addBox(n,o,16.5,.3,12.5,0,8.15,0),this.addBox(n,a,16.6,.2,12.6,0,8.3,0);const l=5,c=14,h=-Math.PI*.5,u=Math.PI*.5;for(let d=0;d<c;d++){const f=d/(c-1),g=h+(u-h)*f,_=Math.sin(g)*l,m=-Math.cos(g)*l-3.5;this.addBox(n,r,1.3,2,.5,_,5.5,m,0,-g,0)}for(const d of[-5,0,5])this.addBox(n,4473924,2.5,2,.15,d,1.8,-6.1),this.addBox(n,2241348,2,1.6,.12,d,1.8,-6);this.addCyl(n,a,.1,.1,8,5,-8,4,-6.1),this.addCyl(n,a,.1,.1,8,5,8,4,-6.1),this.addBox(n,a,.3,.3,.3,-2,2.5,-6.15),this.addBox(n,o,17,.25,1.5,0,8,-7.2,.1,0,0),this.addBox(n,a,17.2,.1,1.6,0,8.12,-7.2,.1,0,0),n.position.set(e,0,t),this.scene.add(n)}buildHouseCortenPlaster(e,t){const n=new Ne,i=4868682,o=12081696,r=3684408,a=9060368;this.addBox(n,i,12,8,11,-7,4,0),this.addBox(n,i,12.3,.4,11.3,-7,8.2,0),this.addBox(n,o,8,8.5,11,5,4.25,0),this.addBox(n,o,8.3,.4,11.3,5,8.7,0),this.addBox(n,r,2,9.5,11,-.5,4.75,0);for(let c=0;c<6;c++)this.addBox(n,a,.15,8.5,11.1,1.5+c*1.2,4.25,0);this.addCyl(n,13421704,.15,.15,.5,6,-5,5,-5.6),this.addCyl(n,13421704,.15,.15,.5,6,-9,5,-5.6),this.addBox(n,1118481,2.5,1.8,.3,-6,4.5,-5.7),this.addBox(n,2241348,2,1.4,.15,-6,4.5,-5.6),this.addBox(n,1118481,2.5,1.8,.3,-10,2.5,-5.7),this.addBox(n,2241348,2,1.4,.15,-10,2.5,-5.6),this.addCyl(n,9132587,.2,.3,8,6,-15,4,-3);const l=new N(new zn(2.5,1.5,8),new Z({color:2775578}));l.position.set(-15,8.75,-3),n.add(l),n.position.set(e,0,t),this.scene.add(n)}buildCoffeeShop(e,t){const n=new Ne;this.addBox(n,15788248,14,4,10,0,2,0),this.addBox(n,15261904,14.2,.18,10.2,0,4.09,0),this.addBox(n,1118481,14.6,.38,10.6,0,4.19,0);for(const o of[-3.8,3.8]){this.addBox(n,1118481,4,3.8,.14,o,2.1,-5.08);const r=new N(new ne(3.5,3.4,.1),new Z({color:13140032,emissive:new ye(10115616),emissiveIntensity:.7}));r.position.set(o,2.1,-5.06),n.add(r)}this.addBox(n,1118481,2,3,.14,0,1.5,-5.08),this.addBox(n,8014368,1.6,2.8,.2,0,1.4,-5.1),this.addBox(n,13410400,.1,.1,.12,.5,1.4,-5.1),this.addBox(n,12876352,13.5,.28,4,0,3.22,-7),this.addBox(n,10770984,13.5,.6,.18,0,2.95,-9.05);for(const o of[-4.5,0,4.5])this.addCyl(n,8947832,.07,.07,3,5,o,1.5,-9.1);this.addBox(n,16777215,5,.36,.12,0,3.06,-8.96);for(const[o,r]of[[-5,-11.5],[0,-11.5],[5,-11.5]]){this.addCyl(n,9068608,.75,.75,.1,12,o,1.12,r),this.addCyl(n,6963232,.07,.07,1.12,6,o,.56,r);for(const a of[-1,1])this.addCyl(n,9068608,.32,.32,.09,8,o+a*.85,.82,r),this.addCyl(n,6963232,.05,.05,.82,5,o+a*.85,.41,r)}for(let o=0;o<5;o++)this.addCyl(n,16777215,.22-o*.008,.24-o*.008,.3,8,7.1,.22+o*.28,-3.5);this.addBox(n,3355445,1.1,1.7,.12,-3.5,1.1,-5.1),this.addBox(n,15658734,.72,.08,.05,-3.5,1.6,-5.04),this.addBox(n,15658734,.55,.08,.05,-3.5,1.42,-5.04),this.addBox(n,15658734,.63,.08,.05,-3.5,1.24,-5.04),this.addBox(n,15658734,.48,.08,.05,-3.5,1.06,-5.04);for(const o of[-4,0,4]){const r=new N(new ne(.25,.25,.25),new Z({color:16764040,emissive:new ye(16755268),emissiveIntensity:.8}));r.position.set(o,3.7,-2),n.add(r)}this.addCyl(n,3355443,.3,.3,12,8,0,6,-8);const i=new N(new ne(10,3,.4),new Z({color:13918762,emissive:new ye(9121808),emissiveIntensity:.6}));i.position.set(0,13,-8),i.castShadow=!0,n.add(i),this.addBox(n,16777215,8,.2,.5,0,14.2,-7.85),this.addBox(n,16777215,8,.2,.5,0,12.8,-7.85),this.addCyl(n,16777215,.8,1,1.5,12,0,15.5,-8),this.addCyl(n,7027242,.4,.4,.3,8,0,16.4,-8),n.position.set(e,0,t),this.scene.add(n)}buildWorkshop(e,t){const n=new Ne,i=4868676,o=2236960,r=15657176,a=3355440,l=1118480;this.addBox(n,i,30,8,20,0,4,0),this.addBox(n,1710616,30.2,.35,20.2,0,.18,0);const c=12*Math.PI/180,h=new Z({color:o}),u=new N(new ne(30.5,.35,11),h);u.castShadow=!0,u.rotation.x=c,u.position.set(0,8.6,-4.5),n.add(u);const d=new N(new ne(30.5,.35,11),h);d.castShadow=!0,d.rotation.x=-c,d.position.set(0,8.6,4.5),n.add(d),this.addBox(n,1118480,30.5,.55,.8,0,9.3,0),this.addBox(n,r,24,3.2,.45,0,7.4,-10.23),this.addBox(n,a,22,2.5,.28,0,7.4,-10.25),this.addBox(n,16775920,24.2,.22,.46,0,9.11,-10.23),this.addBox(n,16775920,24.2,.22,.46,0,5.89,-10.23),this.addBox(n,16775920,.22,3.2,.46,-12.11,7.4,-10.23),this.addBox(n,16775920,.22,3.2,.46,12.11,7.4,-10.23),this.addBox(n,12674667,24,.3,.44,0,5.75,-10.22),this.addBox(n,16763972,8,.65,.35,0,5.5,-10.2),this.addBox(n,2763296,7.5,.42,.38,0,5.5,-10.21),this.addBox(n,l,12,5,.25,0,2.5,-10.15),this.addBox(n,2236960,.2,5,.25,-6.2,2.5,-10.15),this.addBox(n,2236960,.2,5,.25,6.2,2.5,-10.15);for(let v=1;v<=4;v++)this.addBox(n,1710616,11.8,.08,.28,0,v,-10.14);this.addBox(n,2236960,12.6,.4,.28,0,5.2,-10.14);const f=3359829;for(let v=-6;v<=6;v+=4)this.addBox(n,f,.16,1.2,2.8,15.09,7.2,v),this.addBox(n,f,.16,1.2,2.8,-15.09,7.2,v);this.addBox(n,2236960,.2,.18,20,15.1,7.9,0),this.addBox(n,2236960,.2,.18,20,15.1,6.6,0),this.addBox(n,2236960,.2,.18,20,-15.1,7.9,0),this.addBox(n,2236960,.2,.18,20,-15.1,6.6,0),this.addCyl(n,2236960,.12,.12,8,5,-15,4,-10),this.addCyl(n,2236960,.12,.12,8,5,15,4,-10),this.addCyl(n,2236960,.12,.12,8,5,-15,4,10),this.addCyl(n,2236960,.12,.12,8,5,15,4,10),this.addCyl(n,12884602,.85,.9,1.5,10,9.5,.75,-11.5),this.addCyl(n,6974050,.85,.9,1.5,10,9.5,2.35,-11.5),this.addCyl(n,8947840,.92,.92,.12,10,9.5,1.56,-11.5),this.addCyl(n,8947840,.92,.92,.12,10,9.5,3.16,-11.5),this.addCyl(n,12884602,.85,.9,1.5,10,11.2,.75,-12.2),this.addCyl(n,8947840,.92,.92,.12,10,11.2,1.56,-12.2),this.addBox(n,8018488,4.5,.18,2.5,10.2,.09,-11.8),this.addBox(n,9074776,6,1,2.2,0,.5,-9.2),this.addBox(n,13154448,6.3,.18,2.4,0,1.09,-9.2),this.addBox(n,15658700,.8,.05,1,.8,1.19,-9.3),this.addBox(n,4473924,.12,.25,.12,.8,1.22,-9),this.addBox(n,5921362,2.8,1.8,2.8,-8.5,.9,-11.5);const g=new N(new Ke(.75,.75,2.2,10),new Z({color:8947840}));g.rotation.z=35*Math.PI/180,g.position.set(-8.5,1.6,-11.5),g.castShadow=!0,n.add(g),this.addCyl(n,3355440,.4,.4,.3,8,-8.5,.2,-10.8),this.addBox(n,4868676,3.5,2.2,2.5,-11.5,1.1,-13),this.addBox(n,8947840,3,.5,2,-11.5,2.35,-13),this.addBox(n,6710880,2.2,1.2,1.4,-11.5,3.1,-13);const _=new Z({color:10131600}),m=new N(new pt(20,8),_);m.rotation.x=-Math.PI/2,m.position.set(0,.008,-14),m.receiveShadow=!0,n.add(m),this.addBox(n,r,.3,2.5,6,15.16,4,0),this.addBox(n,a,.32,2,5.5,15.17,4,0);const p=Xc(1024),b=new Z({map:p,transparent:!1}),S=new N(new pt(14,14),b);S.position.set(0,4.5,-10.4),n.add(S),n.position.set(e,0,t),this.scene.add(n),this.collisionWorld.addBox(e,t,15.5,10.5)}createZebraCrossings(){const e=new Z({color:15658734}),t=new Z({color:1118481});for(let n=-200;n<=200;n+=40)for(let i=-200;i<=200;i+=40){if(Math.abs(n)>200||Math.abs(i)>200)continue;const o=[-3.2,-1.6,0,1.6,3.2],r=[-2.4,-.8,.8,2.4],a=2;for(const l of o){const c=new N(new ne(.8,.03,a),e);c.position.set(n+l,.05,i-5),this.scene.add(c)}for(const l of r){const c=new N(new ne(.8,.03,a),t);c.position.set(n+l,.04,i-5),this.scene.add(c)}for(const l of o){const c=new N(new ne(.8,.03,a),e);c.position.set(n+l,.05,i+5),this.scene.add(c)}for(const l of r){const c=new N(new ne(.8,.03,a),t);c.position.set(n+l,.04,i+5),this.scene.add(c)}for(const l of o){const c=new N(new ne(a,.03,.8),e);c.position.set(n-5,.05,i+l),this.scene.add(c)}for(const l of r){const c=new N(new ne(a,.03,.8),t);c.position.set(n-5,.04,i+l),this.scene.add(c)}for(const l of o){const c=new N(new ne(a,.03,.8),e);c.position.set(n+5,.05,i+l),this.scene.add(c)}for(const l of r){const c=new N(new ne(a,.03,.8),t);c.position.set(n+5,.04,i+l),this.scene.add(c)}}}createRoadCorners(){const e=new Z({color:13156528}),t=new Z({color:11051160}),n=[{dx:-6,dz:-6,theta:3*Math.PI/2},{dx:6,dz:-6,theta:Math.PI},{dx:-6,dz:6,theta:0},{dx:6,dz:6,theta:Math.PI/2}];for(let i=-200;i<=200;i+=40)for(let o=-200;o<=200;o+=40)for(const{dx:r,dz:a,theta:l}of n){const c=i+r,h=o+a,u=new N(new fa(2,24,l,Math.PI/2),e);u.rotation.x=-Math.PI/2,u.position.set(c,.021,h),u.receiveShadow=!0,this.scene.add(u);const d=new N(new ci(1.8,2,24,1,l,Math.PI/2),t);d.rotation.x=-Math.PI/2,d.position.set(c,.08,h),d.receiveShadow=!0,this.scene.add(d)}}onUpdate(e){this.updateCallbacks.push(e)}createSkyDome(){const e=new vt(800,32,16);e.scale(-1,1,1);const t=new Rt({uniforms:{topColor:{value:new ye(4491468)},bottomColor:{value:new ye(12970229)},offset:{value:100},exponent:{value:.8}},vertexShader:`
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
      `,side:Pt,depthWrite:!1}),n=new N(e,t);this.scene.add(n)}createClouds(){const e=new Z({color:16777215,transparent:!0,opacity:.85});for(let t=0;t<10;t++){const n=new Ne,i=3+Math.floor(Math.random()*4);for(let o=0;o<i;o++){const r=8+Math.random()*12,a=new N(new vt(r,7,5),e);a.position.set(o*15-i*7+(Math.random()-.5)*10,(Math.random()-.5)*8,(Math.random()-.5)*15),n.add(a)}n.position.set((Math.random()-.5)*600,80+Math.random()*60,(Math.random()-.5)*600),this.scene.add(n),this.clouds.push({mesh:n,speed:.3+Math.random()*.7})}}createPuddles(){const e=new Z({color:8952234,transparent:!0,opacity:.35});for(let t=0;t<20;t++){const n=2+Math.random()*4,i=1+Math.random()*2,o=new N(new pt(n,i),e);o.rotation.x=-Math.PI/2,o.position.set((Math.random()-.5)*300,.015,(Math.random()-.5)*300),this.scene.add(o)}}addRooftopDetails(e,t,n,i,o,r){const a=this.seed(o,r,200);if(a>.3){const l=new Ne;this.addBox(l,8947840,1.5,.6,1,0,0,0),this.addBox(l,6710880,1.5,.1,.8,0,.35,.05),l.position.set(t/2-2,i+.3,n/2-2),e.add(l)}if(a>.7&&i>8){const l=new N(new Ke(1,1,1.8,10),new Z({color:9139029}));l.position.set(-t/2+2,i+.9,0),e.add(l);for(const[c,h]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]]){const u=new N(new Ke(.06,.06,1.5,4),new Z({color:5592400}));u.position.set(-t/2+2+c,i+.1,h),e.add(u)}}if(a>.5&&a<.8){const l=new N(new vt(.4,8,4,0,Math.PI*2,0,Math.PI/2),new Z({color:13421772}));l.position.set(t/2-1,i+.2,-n/2+1),l.rotation.x=-Math.PI/4,e.add(l)}if(a<.4){const l=new N(new Ke(.04,.04,3,4),new Z({color:4473924}));l.position.set(0,i+1.5,0),e.add(l),this.addBox(e,4473924,2,.05,.05,0,i+2.5,0)}a>.4&&a<.6&&this.addBox(e,7829360,2,.4,.4,t/4,i+.2,-n/4)}addHydrant(e,t){const n=new Ne,i=new Z({color:13378082}),o=new Z({color:11145489}),r=new N(new Ke(.25,.28,.6,8),i);r.position.set(0,.3,0),n.add(r);const a=new N(new Ke(.18,.18,.12,8),o);a.position.set(0,.66,0),n.add(a);for(const l of[-1,1]){const c=new N(new Ke(.06,.06,.2,6),i);c.rotation.z=Math.PI/2,c.position.set(l*.3,.3,0),n.add(c)}n.position.set(e,0,t),this.scene.add(n)}addBin(e,t){const n=new Ne,i=new Z({color:4473924}),o=new Z({color:5592405}),r=new N(new Ke(.2,.22,.7,8),i);r.position.set(0,.35,0),n.add(r);const a=new N(new Ke(.22,.22,.08,8),o);a.position.set(0,.74,0),n.add(a),n.position.set(e,0,t),this.scene.add(n)}addBollard(e,t){const n=new Ne,i=new Z({color:10066329}),o=new Z({color:7829367}),r=new N(new Ke(.1,.1,.6,8),i);r.position.set(0,.3,0),n.add(r);const a=new N(new Ke(.14,.14,.08,8),o);a.position.set(0,.04,0),n.add(a),n.position.set(e,0,t),this.scene.add(n)}addBench(e,t,n=0){const i=new Ne,o=new Z({color:9134144}),r=new Z({color:5592405}),a=new N(new ne(1.2,.1,.4),o);a.position.set(0,.45,0),i.add(a);for(const c of[-.5,.5]){const h=new N(new ne(.05,.4,.4),r);h.position.set(c,.2,0),i.add(h)}const l=new N(new ne(1.2,.3,.08),o);l.position.set(0,.75,-.16),i.add(l),i.rotation.y=n,i.position.set(e,0,t),this.scene.add(i)}addBusStop(e,t,n=0){const i=new Ne,o=new Z({color:13421772}),r=new Z({color:4482730,transparent:!0,opacity:.7}),a=new N(new Ke(.05,.05,3.5,6),o);a.position.set(0,1.75,0),i.add(a);const l=new N(new ne(2,.05,.8),r);l.position.set(0,3.3,.4),i.add(l);const c=new N(new ne(.05,2.5,.8),r);c.position.set(0,2,0),i.add(c),i.rotation.y=n,i.position.set(e,0,t),this.scene.add(i)}addStreetLight(e,t,n=0,i=!1){const o=new Ne,r=new Z({color:1118481}),a=new Z({color:16771232,transparent:!0,opacity:.06}),l=new N(new Ke(.08,.1,6,6),r);l.position.set(0,3,0),o.add(l);const c=new N(new ne(.08,.08,1.5),r);c.position.set(0,6,-.75),c.rotation.x=-.2,o.add(c);const h=new N(new ne(.4,.15,.3),r);h.position.set(0,5.9,-1.4),o.add(h);const u=new N(new zn(1.5,3,8,1,!0),a);if(u.rotation.x=Math.PI,u.position.set(0,4.4,-1.4),o.add(u),o.rotation.y=n,o.position.set(e,0,t),this.scene.add(o),i){const d=new hm(16771232,.8,15);d.position.set(e+Math.sin(n+Math.PI)*1.4,5.9,t+Math.cos(n+Math.PI)*1.4),this.scene.add(d)}}addTrafficLight(e,t,n=0){const i=new Ne,o=new Z({color:1118481}),r=new N(new Ke(.07,.09,4.5,6),o);r.position.set(0,2.25,0),i.add(r);const a=new N(new ne(.5,1.4,.4),o);a.position.set(0,4.7,0),i.add(a);const l=[16720384,16750848,52292];for(let c=0;c<3;c++){const h=new N(new Ke(.15,.15,.08,8),new Z({color:l[c]}));h.rotation.x=Math.PI/2,h.position.set(0,5.25-c*.45,-.21),i.add(h)}i.rotation.y=n,i.position.set(e,0,t),this.scene.add(i)}createStreetLights(){let n=0;const i=20;for(let o=-160;o<=160;o+=40)for(let r=-160;r<=160;r+=20){const c=Math.sqrt(o*o+r*r)<80&&n<i,h=(r%40+40)%40;Math.min(h,40-h)>6&&(this.addStreetLight(r,o-5.2,0,c),this.addStreetLight(r,o+5.2,Math.PI,c),c&&(n+=2));const u=(r%40+40)%40;if(Math.min(u,40-u)>6&&(this.addStreetLight(o+5.2,r,Math.PI/2,c),this.addStreetLight(o-5.2,r,-Math.PI/2,c),c&&(n+=2)),n>=i)return}}createTrafficLights(){for(let i=-160;i<=160;i+=40)for(let o=-160;o<=160;o+=40)this.addTrafficLight(i-5.2,o-5.2,Math.PI/4),this.addTrafficLight(i+5.2,o-5.2,-Math.PI/4),this.addTrafficLight(i-5.2,o+5.2,3*Math.PI/4),this.addTrafficLight(i+5.2,o+5.2,-3*Math.PI/4)}createStreetFurniture(){for(let n=-160;n<=160;n+=40)for(let i=-160;i<=160;i+=20){const o=this.seed(n,i,300),r=this.seed(n,i,301);if(o>.4){const c=o>.7?1:-1,h=(this.seed(i,n,302)-.5)*4,u=(i%40+40)%40;Math.min(u,40-u)>8&&(r<.3?this.addHydrant(i+h,n+c*5.2):r<.5?this.addBin(i+h,n+c*5.2):r<.65?this.addBollard(i+h,n+c*5.2):r<.75&&this.addBench(i+h,n+c*5.2))}const a=this.seed(i,n,303),l=this.seed(i,n,304);if(a>.4){const c=a>.7?1:-1,h=(this.seed(n,i,305)-.5)*4,u=(i%40+40)%40;Math.min(u,40-u)>8&&(l<.3?this.addHydrant(n+c*5.2,i+h):l<.5?this.addBin(n+c*5.2,i+h):l<.65?this.addBollard(n+c*5.2,i+h):l<.75&&this.addBench(n+c*5.2,i+h,Math.PI/2))}}for(let n=-160;n<=160;n+=40)for(let i=-160;i<=160;i+=160){const o=(i%40+40)%40;Math.min(o,40-o)>8&&this.addBusStop(i,n+5.5,0);const r=(i%40+40)%40;Math.min(r,40-r)>8&&this.addBusStop(n+5.5,i,Math.PI/2)}this.createStreetLights(),this.createTrafficLights()}addGlassBox(e,t,n,i,o,r,a,l){const c=Math.random()>.6?new ye(2241348):new ye(1122867),h=new N(new ne(n,i,o),new Z({color:t,emissive:c,emissiveIntensity:Math.random()*.4}));h.position.set(r,a,l),h.castShadow=!0,h.receiveShadow=!0,e.add(h)}buildToiletBlock(e,t){const n=new Ne;this.addBox(n,11577496,10,3.5,8,0,1.75,0),this.addBox(n,10064008,11,.3,9,0,3.65,0),this.addBox(n,2236960,1.6,2.4,.2,-2.2,1.2,-4.05),this.addBox(n,2236960,1.6,2.4,.2,2.2,1.2,-4.05),this.addBox(n,15263968,10.1,.4,8.1,0,1.8,0),this.addBox(n,3359829,8,.8,.15,0,3.1,-4.05),this.addBox(n,16777215,6,.2,.1,0,3.2,-4.03),this.addCyl(n,4473920,.15,.15,8,6,0,4,-5.5),this.addBox(n,2201331,4,1.5,.3,0,8.75,-5.5),this.addBox(n,16777215,3,.25,.1,0,9,-5.38),this.addBox(n,16777215,3,.25,.1,0,8.5,-5.38);const i=new Z({color:6600182,emissive:new ye(1402304),emissiveIntensity:.4}),o=new N(new vt(.7,8,6),i);o.position.set(0,10.5,-5.5),n.add(o),n.position.set(e,0,t),this.scene.add(n)}start(){const e=t=>{const n=Math.min((t-this.lastTime)/1e3,.05);this.lastTime=t;for(const i of this.updateCallbacks)i(n);for(const i of this.clouds)i.mesh.position.x-=i.speed*n,i.mesh.position.x<-350&&(i.mesh.position.x=350);this.composer.render(),requestAnimationFrame(e)};requestAnimationFrame(e)}}const Yc=.9,oi={Matt:{name:"Matt",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:6044190,hairStyle:"short"},Jose:{name:"Jose",skinColor:12884592,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:657930,hairStyle:"dreadlocks"},Jarrad:{name:"Jarrad",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236976,hairColor:1710618,hairStyle:"short",glassesColor:2236962},Phil:{name:"Phil",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:3821696,hairColor:12632248,hairStyle:"silver",glassesColor:11053216},Tsuyoshi:{name:"Tsuyoshi",skinColor:12093528,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236960,hairColor:657930,hairStyle:"mohawk"},Fabio:{name:"Fabio",skinColor:12488288,shirtColor:1801924,shirtLogoColor:16777215,pantsColor:2631728,hairColor:1708040,hairStyle:"bun",glassesColor:2759176},Joe:{name:"Joe",skinColor:13934704,shirtColor:15777792,shirtLogoColor:1710618,pantsColor:2763320,hairColor:3811866,hairStyle:"short",helmetColor:16119280,hiVisBands:!0},Mikayla:{name:"Mikayla",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:1708064,hairColor:10035780,hairStyle:"bun"},Connie:{name:"Connie",skinColor:15255704,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:2763322,hairColor:16109664,hairStyle:"wildblonde"}};class Mo{constructor(e){C(this,"group");C(this,"mixer");C(this,"walkAction");C(this,"idleAction");C(this,"currentAction");C(this,"logoMesh");this.group=new Ne,this._build(e),this.mixer=new Tm(this.group);const t=this._buildWalkClip(),n=this._buildIdleClip();this.walkAction=this.mixer.clipAction(t),this.idleAction=this.mixer.clipAction(n),this.idleAction.play(),this.currentAction=this.idleAction}_build(e){const t=new en;t.name="Hip",t.position.set(0,1,0);const n=new en;n.name="Spine",n.position.set(0,.55,0);const i=new en;i.name="Head",i.position.set(0,.65,0);const o=new en;o.name="LShoulder",o.position.set(-.4,.38,0);const r=new en;r.name="LForeArm",r.position.set(0,-.36,0);const a=new en;a.name="RShoulder",a.position.set(.4,.38,0);const l=new en;l.name="RForeArm",l.position.set(0,-.36,0);const c=new en;c.name="LHip",c.position.set(-.16,-.05,0);const h=new en;h.name="LKnee",h.position.set(0,-.5,0);const u=new en;u.name="RHip",u.position.set(.16,-.05,0);const d=new en;d.name="RKnee",d.position.set(0,-.5,0),t.add(n),n.add(i),n.add(o),o.add(r),n.add(a),a.add(l),t.add(c),c.add(h),t.add(u),u.add(d),this.group.add(t);const f=S=>new Z({color:S}),g=(S,v,P,E,A,I=0,M=0,x=0)=>{const R=new N(new ne(P,E,A),f(v));R.position.set(I,M,x),R.castShadow=!0,S.add(R)},_=(S,v,P,E,A=0,I=0,M=0)=>{const x=new N(new Ke(P,P,E,8),f(v));x.position.set(A,I,M),x.castShadow=!0,S.add(x)},m=(S,v,P,E=0,A=0,I=0)=>{const M=new N(new vt(P,10,8),f(v));M.position.set(E,A,I),M.castShadow=!0,S.add(M)};g(n,e.shirtColor,.5,.56,.28,0,.02,0),e.hiVisBands&&(g(n,16777215,.52,.06,.3,0,.18,0),g(n,16777215,.52,.06,.3,0,-.1,0));const p=this._makeLogo(e),b=new N(new pt(.44,.5),new jt({map:p,transparent:!0,depthWrite:!1}));b.position.set(0,.02,.145),n.add(b),this.logoMesh=b,g(t,e.pantsColor,.44,.2,.26,0,0,0),_(o,e.shirtColor,.08,.34,0,-.17,0),_(a,e.shirtColor,.08,.34,0,-.17,0),e.hiVisBands&&(g(o,16777215,.18,.06,.18,0,-.1,0),g(a,16777215,.18,.06,.18,0,-.1,0)),_(r,e.skinColor,.07,.3,0,-.15,0),_(l,e.skinColor,.07,.3,0,-.15,0),g(r,e.skinColor,.13,.11,.09,0,-.32,0),g(l,e.skinColor,.13,.11,.09,0,-.32,0),_(c,e.pantsColor,.11,.46,0,-.23,0),_(u,e.pantsColor,.11,.46,0,-.23,0),_(h,e.pantsColor,.09,.42,0,-.21,0),_(d,e.pantsColor,.09,.42,0,-.21,0),g(h,1710616,.19,.12,.24,0,-.46,.03),g(d,1710616,.19,.12,.24,0,-.46,.03),_(i,e.skinColor,.09,.16,0,-.08,0),m(i,e.skinColor,.21,0,.1,0),g(i,2236962,.055,.035,.02,-.07,.12,.2),g(i,2236962,.055,.035,.02,.07,.12,.2),this._buildHair(i,e,f),e.glassesColor!==void 0&&g(i,e.glassesColor,.24,.055,.015,0,.12,.21),e.helmetColor!==void 0&&(g(i,e.helmetColor,.5,.07,.5,0,.25,-.01),g(i,e.helmetColor,.38,.18,.38,0,.34,-.01))}_buildHair(e,t,n){const i=n(t.hairColor),o=(r,a,l,c)=>{const h=new N(r,i);h.position.set(a,l,c),e.add(h)};switch(t.hairStyle){case"short":case"silver":o(new vt(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),t.hairStyle==="silver"&&(o(new ne(.11,.18,.13),-.19,.06,0),o(new ne(.11,.18,.13),.19,.06,0));break;case"dreadlocks":o(new vt(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0);for(const[r,a]of[[-.12,0],[.12,0],[0,-.16],[-.08,-.1],[.08,-.1]])o(new Ke(.035,.022,.38,6),r,-.07,a);break;case"mohawk":o(new ne(.09,.26,.4),0,.28,0);break;case"bun":o(new vt(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),o(new vt(.09,7,6),0,.05,-.19);break;case"wildblonde":{o(new vt(.225,8,5,0,Math.PI*2,0,Math.PI*.55),0,.1,0);const r=[[-.2,-.18,.04,.3,0],[.2,-.18,.04,-.3,0],[-.14,-.22,-.14,.2,.15],[.14,-.22,-.14,-.2,.15],[0,-.26,-.18,0,0],[-.1,-.16,.16,-.15,0],[.1,-.16,.16,.15,0]];for(const[a,l,c,h,u]of r){const d=new N(new Ke(.045,.02,.5,5),i);d.position.set(a,l,c),d.rotation.z=h,d.rotation.x=u,e.add(d)}break}}}setLogoTexture(e){const t=this.logoMesh.material;t.map=e,t.needsUpdate=!0}_makeLogo(e){return Wc(e.shirtColor)}_buildWalkClip(){const e=Math.PI/180,t=.8,n=[0,.2,.4,.6,.8],i=(o,r=0,a=0)=>Array.from(new Yt().setFromEuler(new Vt(o*e,r*e,a*e)).toArray());return new us("walk",t,[new mt("LHip.quaternion",n,[...i(-35),...i(0),...i(35),...i(0),...i(-35)]),new mt("RHip.quaternion",n,[...i(35),...i(0),...i(-35),...i(0),...i(35)]),new mt("LKnee.quaternion",n,[...i(-5),...i(-18),...i(-28),...i(-12),...i(-5)]),new mt("RKnee.quaternion",n,[...i(-28),...i(-12),...i(-5),...i(-18),...i(-28)]),new mt("LShoulder.quaternion",n,[...i(28,0,8),...i(0,0,8),...i(-28,0,8),...i(0,0,8),...i(28,0,8)]),new mt("RShoulder.quaternion",n,[...i(-28,0,-8),...i(0,0,-8),...i(28,0,-8),...i(0,0,-8),...i(-28,0,-8)]),new mt("Hip.quaternion",n,[...i(0,0,4),...i(0,0,0),...i(0,0,-4),...i(0,0,0),...i(0,0,4)]),new si("Hip.position",n,[0,1.02,0,0,1,0,0,1.02,0,0,1,0,0,1.02,0])])}_buildIdleClip(){const e=Math.PI/180,t=2.4,n=[0,.6,1.2,1.8,2.4],i=(o,r=0,a=0)=>Array.from(new Yt().setFromEuler(new Vt(o*e,r*e,a*e)).toArray());return new us("idle",t,[new mt("Spine.quaternion",n,[...i(0,0,1),...i(0,0,0),...i(0,0,-1),...i(0,0,0),...i(0,0,1)]),new si("Hip.position",n,[0,1,0,0,1.01,0,0,1,0,0,.99,0,0,1,0]),new mt("LShoulder.quaternion",[0,2.4],[...i(0,0,8),...i(0,0,8)]),new mt("RShoulder.quaternion",[0,2.4],[...i(0,0,-8),...i(0,0,-8)])])}buildJumpRopeClip(){const e=Math.PI/180,t=Yc,n=[0,.225,.45,.675,.9],i=(o,r=0,a=0)=>Array.from(new Yt().setFromEuler(new Vt(o*e,r*e,a*e)).toArray());return new us("jumprope",t,[new si("Hip.position",n,[0,1,0,0,1.28,0,0,1,0,0,1.28,0,0,1,0]),new mt("LShoulder.quaternion",[0,.5],[...i(0,0,52),...i(0,0,52)]),new mt("RShoulder.quaternion",[0,.5],[...i(0,0,-52),...i(0,0,-52)]),new mt("LForeArm.quaternion",[0,.5],[...i(-20),...i(-20)]),new mt("RForeArm.quaternion",[0,.5],[...i(-20),...i(-20)]),new mt("LKnee.quaternion",n,[...i(-22),...i(-5),...i(-22),...i(-5),...i(-22)]),new mt("RKnee.quaternion",n,[...i(-22),...i(-5),...i(-22),...i(-5),...i(-22)]),new mt("Spine.quaternion",n,[...i(8),...i(2),...i(8),...i(2),...i(8)])])}setWalking(e){const t=e?this.walkAction:this.idleAction;t!==this.currentAction&&(t.reset().play(),this.currentAction.crossFadeTo(t,.2,!1),this.currentAction=t)}update(e){this.mixer.update(e)}}const Gm={Jose:{x:-80,z:-40},Jarrad:{x:40,z:-80},Matt:{x:80,z:40},Phil:{x:-40,z:80},Tsuyoshi:{x:120,z:-40},Fabio:{x:-120,z:40},Joe:{x:0,z:-120}},Hm={Matt:["Troweled Earth is the best product on the market. Full stop. Don't argue.","Jose has a whole music room and a cigar collection but can't reply to a text message. That's the guy.","I've been up since 4am and done 80 square metres. How's your morning?","Jarrad's got opinions on how everyone else lives their life. Zero opinions on his own. Interesting.","Antique Stucco, Hemp Render, Tadelakt — I'll do all three before lunch.","Jose called himself Wall Jesus in front of a client. An actual client. I was standing right there.","Jarrad once sent me a 400-word message about something I said. I read the first line. Seemed about right.","Right. Tools out. Let's get this done."],Jose:["I didn't apply plaster. I gave the wall a soul. Big difference.","Matt is a great man. Big heart. Absolutely no volume control. You can hear him from the next suburb.","I was in my music room last night finishing a track. Then I invented a new finish. Big night.","My cigar costs more than your primer. It is worth it.","Jarrad sends meeting agendas. For conversations. Between two people. In a van.","Wall Jesus doesn't do touch-ups. Wall Jesus does originals.","Matt apologises for nothing. I respect it. Also it is sometimes a problem.","Other plasterers apply product. I apply vision. Light a cigar and watch."],Jarrad:["Did you read the TDS? Because I did. Yes. Moving on.","Jose has a whole spiritual identity built around being mysterious. He's from Footscray.","I'm not micro-managing. I'm preventing the disaster you are about to cause.","Matt once introduced himself to a client by saying 'I don't do small talk'. To their face. At the door.","Have you seen my sister? She's supposed to be here. She's doing jump rope.","I would do it myself but then nothing else would get done.","Jose lights a cigar every time he has a feeling. That man is constantly having feelings.","Mikayla borrowed my trowel again. I have a spare. I'm not lending that one."],Phil:["I've been in this game longer than some of these buildings.","Back in my day we didn't have sealers. We just hoped.","Forty years in plaster. My knees disagree with the timeline.","That's a nice van. My first van had a hole in the floor.","The youngsters think Marbellino is new. I did it before it had a name.","Seven year warranty. I've outlasted three of those already.","If the surface isn't right, no product will fix it. That's wisdom.","I'm too old for emergencies. Call Darren."],Tsuyoshi:["My trowel... she is like samurai sword. Must be respected.","In Japan, we say... actually this is different in Australia. But same feeling.","I study engineering. Also I study this wall. Both are... very complex.","The angle of application is most important. Like blade angle. Very critical.","I think about the wall much. The wall also thinks, I believe.","This surface... it is speaking to me. I will listen before I apply.","My sensei say: good craftsman blame tool. But I never blame my trowel. She is perfect.","One day I will design the building. And also I will plaster it. Both very satisfying."],Fabio:["In Italy, we do not rush the plaster. The plaster knows when it is ready.","I am Fabio. You have heard of me, yes?","This finish — she is like a woman. Gentle, then confident, then gentle again.","I have plastered villas in Tuscany. This job is also... acceptable.","The colour must be chosen with the soul, not the brain.","I put my heart into every wall. This is why I am tired. But beautiful tired.","Madonna mia, this surface... it has potential. Fabio will fix it.","Other men apply plaster. Fabio makes love to the wall. Artistically speaking."],Joe:["Don't judge me by the helmet. I contain multitudes.","Good honest work. That's all any of us can do.","I don't talk politics on site. But I do have a bumper sticker.","Hard work, good product, fair pay. That's the whole philosophy.","Free Palestine. That's all I'll say. Back to work.","I've been boycotting certain brands for three years. You'd be surprised.","The helmet stays on. Most of the opinions stay in.","Solid crew. Good product. Just don't ask me about the news."]},Vm=15,Wm=12e3;class Xm{constructor(e){C(this,"scene");C(this,"crewMap",new Map);C(this,"lastDialogue",new Map);C(this,"dialogueIndex",new Map);this.scene=e}spawnCrewAtCityPositions(){for(const[e,t]of Object.entries(Gm)){const n=oi[e];if(!n)continue;const i=new Mo(n);i.group.scale.set(2,2,2);const o=new Ne;o.add(i.group);const r=new N(new ci(1.2,1.6,32),new jt({color:16763904,side:Ht}));r.rotation.x=-Math.PI/2,r.position.y=.05,o.add(r);const a=document.createElement("canvas");a.width=256,a.height=64;const l=a.getContext("2d");l.fillStyle="rgba(0,0,0,0.75)",l.roundRect?l.roundRect(2,2,252,60,8):l.rect(2,2,252,60),l.fill(),l.fillStyle="#fff",l.font="bold 30px Arial",l.textAlign="center",l.textBaseline="middle",l.fillText(e.toUpperCase(),128,32);const c=new N(new pt(2.2,.55),new jt({map:new Ms(a),transparent:!0,depthWrite:!1}));c.position.set(0,8.5,0),c.renderOrder=1,o.add(c),o.position.set(t.x,0,t.z),this.scene.add(o),this.crewMap.set(e,{character:i,wrapper:o,pos:t}),this.lastDialogue.set(e,0),this.dialogueIndex.set(e,Math.floor(Math.random()*8))}}updateAll(e){for(const{character:t}of this.crewMap.values())t.update(e)}checkProximityDialogue(e,t){const n=Date.now();for(const[i,{wrapper:o,pos:r}]of this.crewMap.entries()){if(!o.visible)continue;const a=e-r.x,l=t-r.z;if(Math.sqrt(a*a+l*l)>Vm)continue;const c=this.lastDialogue.get(i)??0;if(n-c<Wm)continue;const h=Hm[i];if(!h)continue;const u=this.dialogueIndex.get(i)??0,d=h[u%h.length];return this.dialogueIndex.set(i,u+1),this.lastDialogue.set(i,n),{name:i,line:d,pos:r}}return null}hideCrew(e){const t=this.crewMap.get(e);t&&(t.wrapper.visible=!1)}showAllCrew(){for(const{wrapper:e}of this.crewMap.values())e.visible=!0}showCrew(e){const t=this.crewMap.get(e);t&&(t.wrapper.visible=!0)}getCrewPosition(e){var t;return((t=this.crewMap.get(e))==null?void 0:t.pos)??{x:0,z:0}}dispose(){for(const{wrapper:e}of this.crewMap.values())this.scene.remove(e);this.crewMap.clear()}}class qm{constructor(e){C(this,"mesh");C(this,"velocity",new D);C(this,"heading",0);C(this,"bodyGroup");C(this,"suspensionY",0);C(this,"suspensionVel",0);this.mesh=new Ne,this.bodyGroup=new Ne,this.mesh.add(this.bodyGroup);const t=new Z({color:1118481}),n=new N(new ne(2.4,1.6,3.2),t);n.position.set(0,.8,.8),n.castShadow=!0,n.receiveShadow=!0,this.bodyGroup.add(n);const i=new Z({color:1579032}),o=new N(new ne(2.4,1.4,1.6),i);o.position.set(0,.7,-1.6),o.castShadow=!0,o.receiveShadow=!0,this.bodyGroup.add(o);const r=new Z({color:2241348}),a=new N(new ne(2,1,.1),r);a.rotation.x=-.18,a.position.set(0,1.15,-2.36),a.castShadow=!0,a.receiveShadow=!0,this.bodyGroup.add(a);const l=new Z({color:1381653}),c=new N(new ne(2.3,.15,4.6),l);c.position.set(0,1.675,0),c.castShadow=!0,c.receiveShadow=!0,this.bodyGroup.add(c);const h=new Z({color:12674667}),u=new N(new ne(.05,.35,3),h);u.position.set(-1.23,.85,.5),u.castShadow=!0,u.receiveShadow=!0,this.bodyGroup.add(u);const d=new N(new ne(.05,.35,3),h);d.position.set(1.23,.85,.5),d.castShadow=!0,d.receiveShadow=!0,this.bodyGroup.add(d);const f=new Z({color:3359829}),g=new N(new ne(.05,.4,.5),f);g.position.set(-1.22,1.1,-1.7),g.castShadow=!0,g.receiveShadow=!0,this.bodyGroup.add(g);const _=new N(new ne(.05,.4,.5),f);_.position.set(1.22,1.1,-1.7),_.castShadow=!0,_.receiveShadow=!0,this.bodyGroup.add(_);const m=new Z({color:3355443});for(const Te of[-.3,.3]){const de=new N(new ne(.05,1.4,.1),m);de.position.set(Te,.8,2.46),de.castShadow=!0,de.receiveShadow=!0,this.bodyGroup.add(de)}const p=new Z({color:526344}),b=new N(new ne(.04,1.6,.05),p);b.position.set(-1.22,.8,-.8),this.bodyGroup.add(b);const S=new N(new ne(.04,1.6,.05),p);S.position.set(1.22,.8,-.8),this.bodyGroup.add(S);const v=new N(new ne(2.4,.04,.05),p);v.position.set(0,1.58,-.8),this.bodyGroup.add(v);const P=new Z({color:1118481}),E=new Z({color:3359829});for(const Te of[-1,1]){const de=Te*1.3,Se=new N(new ne(.18,.12,.22),P);Se.position.set(de,1.1,-1.7),this.bodyGroup.add(Se);const Je=new N(new ne(.08,.1,.18),E);Je.position.set(de+Te*.05,1.1,-1.7),this.bodyGroup.add(Je)}const A=new Z({color:3355443});for(const Te of[-.15,-.85]){const de=new N(new ne(2.1,.07,.07),A);de.position.set(0,1.78,Te),this.bodyGroup.add(de)}for(const Te of[-.95,.95]){const de=new N(new ne(.05,.05,.7),A);de.position.set(Te,1.78,-.5),this.bodyGroup.add(de)}const I=Xc(512),M=new Z({map:I,transparent:!1}),x=new N(new pt(4.8,4.8),M);x.rotation.x=-Math.PI/2,x.position.set(0,1.79,.3),this.bodyGroup.add(x);const R=new Z({color:8947848});for(const Te of[-.6,.6]){const de=new N(new ne(.06,.06,.14),R);de.position.set(Te,.85,2.52),this.bodyGroup.add(de)}const z=new N(new ne(2.4,.04,.06),p);z.position.set(0,1.2,2.47),this.bodyGroup.add(z);const k=new Z({color:16733440}),W=new Z({color:1118481}),$=new N(new ne(.05,.22,.82),k);$.position.set(-1.255,.86,.36),this.bodyGroup.add($);const q=new N(new ne(.06,.05,.16),W);q.position.set(-1.262,.96,.12),this.bodyGroup.add(q);const ee=new N(new ne(.06,.15,.05),W);ee.position.set(-1.262,.86,.12),this.bodyGroup.add(ee);const V=new N(new ne(.06,.18,.05),W);V.position.set(-1.262,.86,.38),this.bodyGroup.add(V);const J=new N(new ne(.06,.04,.13),W);J.position.set(-1.262,.95,.445),this.bodyGroup.add(J);const oe=new N(new ne(.06,.04,.1),W);oe.position.set(-1.262,.86,.43),this.bodyGroup.add(oe);const me=new N(new ne(.06,.04,.13),W);me.position.set(-1.262,.77,.445),this.bodyGroup.add(me);const Le=new N(new ne(.06,.18,.05),W);Le.position.set(-1.262,.86,.61),this.bodyGroup.add(Le);const Ye=new N(new ne(.06,.18,.05),W);Ye.position.set(-1.262,.86,.73),this.bodyGroup.add(Ye);const Y=new N(new ne(.06,.08,.13),W);Y.position.set(-1.262,.92,.67),this.bodyGroup.add(Y);const ie=new N(new ne(.05,.22,.82),k);ie.position.set(1.255,.86,.36),this.bodyGroup.add(ie);const _e=new Ke(.38,.38,.28,10),le=new Z({color:1118481}),Re=new Z({color:8947848}),Be=[[-1.25,.38,-1.2,-1],[1.25,.38,-1.2,1],[-1.25,.38,1.3,-1],[1.25,.38,1.3,1]];for(const[Te,de,Se,Je]of Be){const Ee=new N(_e,le);Ee.rotation.z=Math.PI/2,Ee.position.set(Te,de,Se),Ee.castShadow=!0,Ee.receiveShadow=!0,this.mesh.add(Ee);const T=new Ke(.2,.2,.06,10),y=new N(T,Re);y.rotation.z=Math.PI/2,y.position.set(Te+Je*.15,de,Se),y.castShadow=!0,y.receiveShadow=!0,this.mesh.add(y);const O=new Z({color:3355443}),K=new N(new Ke(.36,.38,.06,10),O);K.rotation.z=Math.PI/2,K.position.set(Te+Je*.2,de,Se),this.mesh.add(K);const te=new Z({color:1118481}),j=new N(new ne(.14,.1,.82),te);j.position.set(Te+Je*.07,de+.3,Se),this.bodyGroup.add(j)}const Ve=new Z({color:16777181,emissive:16777181,emissiveIntensity:.8});for(const Te of[-.8,.8]){const de=new N(new ne(.35,.2,.08),Ve);de.position.set(Te,.75,-2.41),de.castShadow=!0,de.receiveShadow=!0,this.bodyGroup.add(de)}const at=new jt({color:16777164,transparent:!0,opacity:.08,side:Pt}),We=new zn(1.5,8,8,1,!0);for(const Te of[-.6,.6]){const de=new N(We,at);de.rotation.x=Math.PI/2,de.position.set(Te,.7,-3),this.bodyGroup.add(de)}const dt=new Z({color:16720384,emissive:16720384,emissiveIntensity:.8});for(const Te of[-.8,.8]){const de=new N(new ne(.3,.18,.06),dt);de.position.set(Te,.75,2.47),de.castShadow=!0,de.receiveShadow=!0,this.bodyGroup.add(de)}const U=new Z({color:3355443}),Tt=new N(new ne(2,.08,.8),U);Tt.position.set(0,1.77,-.5),Tt.castShadow=!0,Tt.receiveShadow=!0,this.bodyGroup.add(Tt),this.mesh.position.set(0,0,0),e.add(this.mesh)}triggerBump(e){this.suspensionVel=-e*6}updateSuspension(e){const t=-80*this.suspensionY-10*this.suspensionVel;this.suspensionVel+=t*e,this.suspensionY+=this.suspensionVel*e,this.suspensionY=Math.max(-.35,Math.min(.35,this.suspensionY)),this.bodyGroup.position.y=this.suspensionY,this.bodyGroup.rotation.z=-this.suspensionY*.08}get suspensionMagnitude(){return Math.abs(this.suspensionY)+Math.abs(this.suspensionVel)*.04}}const cn={maxSpeed:80,acceleration:55,reverseForce:45,friction:.985,steerRate:2.8,minSpeedToSteer:.5,gripAtLowSpeed:7,gripAtHighSpeed:1.2},Fl=40,Ym=4,jm=30,Jm=.8;function $m(s){for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s}function Km(s){return Math.round(s/Fl)*Fl}function Bl(s,e){let t=0;const n=Km((s+e)*.5);for(const i of[-1,1]){const o=n+i*Ym;(s-o)*(e-o)<0&&t++}return t}class Zm{constructor(e,t,n,i,o){C(this,"van");C(this,"input");C(this,"_speed",0);C(this,"velocityAngle",0);C(this,"prevPos",new D);C(this,"onBump");C(this,"onBuildingHit");C(this,"collisionWorld");C(this,"COLL_GRID",40);C(this,"COLL_ROAD_HALF",6.5);this.van=e,this.input=t,this.onBump=n,this.collisionWorld=i,this.onBuildingHit=o,this.velocityAngle=this.van.heading,this.prevPos.copy(this.van.mesh.position)}get speed(){return this._speed}update(e){var l;this.prevPos.copy(this.van.mesh.position);const t=Math.abs(this._speed);if(this.input.forward&&(this._speed+=cn.acceleration*e),this.input.brake&&(this._speed-=cn.reverseForce*e),this._speed*=Math.pow(cn.friction,e*60),this._speed=Math.max(-80*.5,Math.min(cn.maxSpeed,this._speed)),t>cn.minSpeedToSteer){const c=this.input.left?-1:this.input.right?1:Math.abs(this.input.steerAxis)>.1?this.input.steerAxis:0,h=Math.min(1,t/15);this.van.heading+=c*cn.steerRate*h*Math.sign(this._speed)*e}const n=Math.min(t/cn.maxSpeed,1),i=cn.gripAtLowSpeed+(cn.gripAtHighSpeed-cn.gripAtLowSpeed)*n,o=$m(this.van.heading-this.velocityAngle);this.velocityAngle+=o*i*e;const r=new D(Math.sin(this.velocityAngle),0,-Math.cos(this.velocityAngle));this.van.velocity.copy(r).multiplyScalar(this._speed),this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(e)),this.van.mesh.rotation.y=-this.van.heading;const a=245;if(this.van.mesh.position.x=Math.max(-a,Math.min(a,this.van.mesh.position.x)),this.van.mesh.position.z=Math.max(-a,Math.min(a,this.van.mesh.position.z)),this.collisionWorld){const c=this.collisionWorld.resolveCircle(this.van.mesh.position.x,this.van.mesh.position.z,1.8);(c.x!==this.van.mesh.position.x||c.z!==this.van.mesh.position.z)&&(this._speed*=.65,(l=this.onBuildingHit)==null||l.call(this),this.van.mesh.position.x=c.x,this.van.mesh.position.z=c.z)}this._checkCurbCrossings()}distToNearestRoad(e){const t=(e%this.COLL_GRID+this.COLL_GRID)%this.COLL_GRID;return Math.min(t,this.COLL_GRID-t)}isOnRoad(e,t){const n=this.distToNearestRoad(e),i=this.distToNearestRoad(t);return n<this.COLL_ROAD_HALF||i<this.COLL_ROAD_HALF}resolveCollision(e,t,n,i){return this.isOnRoad(n,i)?{x:n,z:i}:this.isOnRoad(e,i)?{x:e,z:i}:this.isOnRoad(n,t)?{x:n,z:t}:{x:e,z:t}}applyImpulse(e,t){this._speed*=.5,this.van.mesh.position.x+=e*.1,this.van.mesh.position.z+=t*.1}_checkCurbCrossings(){const e=this.van.mesh.position,t=this.prevPos,n=Bl(t.x,e.x),i=Bl(t.z,e.z);if(n+i===0)return;const a=Math.abs(this._speed)/jm,l=Math.max(Jm,Math.min(1,a));this.van.triggerBump(l),this._speed*=.85,this.onBump&&this.onBump(l)}}const so=(s,e)=>{const t=e.x-s.x,n=e.y-s.y;return Math.sqrt(t*t+n*n)},Qm=(s,e)=>{const t=e.x-s.x,n=e.y-s.y;return tg(Math.atan2(n,t))},eg=(s,e,t)=>{const n={x:0,y:0};return t=Jr(t),n.x=s.x-e*Math.cos(t),n.y=s.y-e*Math.sin(t),n},Jr=s=>s*(Math.PI/180),tg=s=>s*(180/Math.PI),ng=s=>isNaN(s.buttons)?s.pressure!==0:s.buttons!==0,ir=new Map,Ul=s=>{ir.has(s)&&clearTimeout(ir.get(s)),ir.set(s,setTimeout(s,100))},po=(s,e,t)=>{const n=e.split(/[ ,]+/g);let i;for(let o=0;o<n.length;o+=1)i=n[o],s.addEventListener?s.addEventListener(i,t,!1):s.attachEvent&&s.attachEvent(i,t)},Nl=(s,e,t)=>{const n=e.split(/[ ,]+/g);let i;for(let o=0;o<n.length;o+=1)i=n[o],s.removeEventListener?s.removeEventListener(i,t):s.detachEvent&&s.detachEvent(i,t)},jc=s=>(s.preventDefault(),s.type.match(/^touch/)?s.changedTouches:s),Ol=()=>{const s=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:s,y:e}},kl=(s,e)=>{e.top||e.right||e.bottom||e.left?(s.style.top=e.top,s.style.right=e.right,s.style.bottom=e.bottom,s.style.left=e.left):(s.style.left=e.x+"px",s.style.top=e.y+"px")},ya=(s,e,t)=>{const n=Jc(s);for(let i in n)if(n.hasOwnProperty(i))if(typeof e=="string")n[i]=e+" "+t;else{let o="";for(let r=0,a=e.length;r<a;r+=1)o+=e[r]+" "+t+", ";n[i]=o.slice(0,-2)}return n},ig=(s,e)=>{const t=Jc(s);for(let n in t)t.hasOwnProperty(n)&&(t[n]=e);return t},Jc=s=>{const e={};return e[s]="",["webkit","Moz","o"].forEach(function(n){e[n+s.charAt(0).toUpperCase()+s.slice(1)]=""}),e},sr=(s,e)=>{for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s},sg=(s,e)=>{const t={};for(let n in s)s.hasOwnProperty(n)&&e.hasOwnProperty(n)?t[n]=e[n]:s.hasOwnProperty(n)&&(t[n]=s[n]);return t},$r=(s,e)=>{if(s.length)for(let t=0,n=s.length;t<n;t+=1)e(s[t]);else e(s)},og=(s,e,t)=>({x:Math.min(Math.max(s.x,e.x-t),e.x+t),y:Math.min(Math.max(s.y,e.y-t),e.y+t)});var rg="ontouchstart"in window,ag=!!window.PointerEvent,lg=!!window.MSPointerEvent,ss={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},Pi,xs={};ag?Pi=ss.pointer:lg?Pi=ss.MSPointer:rg?(Pi=ss.touch,xs=ss.mouse):Pi=ss.mouse;function Rn(){}Rn.prototype.on=function(s,e){var t=this,n=s.split(/[ ,]+/g),i;t._handlers_=t._handlers_||{};for(var o=0;o<n.length;o+=1)i=n[o],t._handlers_[i]=t._handlers_[i]||[],t._handlers_[i].push(e);return t};Rn.prototype.off=function(s,e){var t=this;return t._handlers_=t._handlers_||{},s===void 0?t._handlers_={}:e===void 0?t._handlers_[s]=null:t._handlers_[s]&&t._handlers_[s].indexOf(e)>=0&&t._handlers_[s].splice(t._handlers_[s].indexOf(e),1),t};Rn.prototype.trigger=function(s,e){var t=this,n=s.split(/[ ,]+/g),i;t._handlers_=t._handlers_||{};for(var o=0;o<n.length;o+=1)i=n[o],t._handlers_[i]&&t._handlers_[i].length&&t._handlers_[i].forEach(function(r){r.call(t,{type:i,target:t},e)})};Rn.prototype.config=function(s){var e=this;e.options=e.defaults||{},s&&(e.options=sg(e.options,s))};Rn.prototype.bindEvt=function(s,e){var t=this;return t._domHandlers_=t._domHandlers_||{},t._domHandlers_[e]=function(){typeof t["on"+e]=="function"?t["on"+e].apply(t,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},po(s,Pi[e],t._domHandlers_[e]),xs[e]&&po(s,xs[e],t._domHandlers_[e]),t};Rn.prototype.unbindEvt=function(s,e){var t=this;return t._domHandlers_=t._domHandlers_||{},Nl(s,Pi[e],t._domHandlers_[e]),xs[e]&&Nl(s,xs[e],t._domHandlers_[e]),delete t._domHandlers_[e],this};function bt(s,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=s,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=bt.id,bt.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}bt.prototype=new Rn;bt.constructor=bt;bt.id=0;bt.prototype.buildEl=function(s){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};bt.prototype.stylize=function(){if(this.options.dataOnly)return this;var s=this.options.fadeTime+"ms",e=ig("borderRadius","50%"),t=ya("transition","opacity",s),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},sr(n.el,t),this.options.shape==="circle"&&sr(n.back,e),sr(n.front,e),this.applyStyles(n),this};bt.prototype.applyStyles=function(s){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var t in s[e])this.ui[e].style[t]=s[e][t];return this};bt.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};bt.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};bt.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};bt.prototype.show=function(s){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof s=="function"&&s.call(this)},e.options.fadeTime)),e};bt.prototype.hide=function(s){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var t=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=t,typeof s=="function"&&s.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){const t=e.options.restJoystick,n={};n.x=t===!0||t.x!==!1?0:e.instance.frontPosition.x,n.y=t===!0||t.y!==!1?0:e.instance.frontPosition.y,e.setPosition(s,n)}return e};bt.prototype.setPosition=function(s,e){var t=this;t.frontPosition={x:e.x,y:e.y};var n=t.options.fadeTime+"ms",i={};i.front=ya("transition",["transform"],n);var o={front:{}};o.front={transform:"translate("+t.frontPosition.x+"px,"+t.frontPosition.y+"px)"},t.applyStyles(i),t.applyStyles(o),t.restTimeout=setTimeout(function(){typeof s=="function"&&s.call(t),t.restCallback()},t.options.fadeTime)};bt.prototype.restCallback=function(){var s=this,e={};e.front=ya("transition","none",""),s.applyStyles(e),s.trigger("rested",s.instance)};bt.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};bt.prototype.computeDirection=function(s){var e=s.angle.radian,t=Math.PI/4,n=Math.PI/2,i,o,r;if(e>t&&e<t*3&&!s.lockX?i="up":e>-t&&e<=t&&!s.lockY?i="left":e>-t*3&&e<=-t&&!s.lockX?i="down":s.lockY||(i="right"),s.lockY||(e>-n&&e<n?o="left":o="right"),s.lockX||(e>0?r="up":r="down"),s.force>this.options.threshold){var a={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(a[l]=this.direction[l]);var c={};this.direction={x:o,y:r,angle:i},s.direction=this.direction;for(l in a)a[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return s;(!c.x||!c.y)&&this.trigger("plain",s),c.x||this.trigger("plain:"+o,s),c.y||this.trigger("plain:"+r,s),c.angle||this.trigger("dir dir:"+i,s)}else this.resetDirection();return s};function gt(s,e){var t=this;t.nipples=[],t.idles=[],t.actives=[],t.ids=[],t.pressureIntervals={},t.manager=s,t.id=gt.id,gt.id+=1,t.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},t.config(e),(t.options.mode==="static"||t.options.mode==="semi")&&(t.options.multitouch=!1),t.options.multitouch||(t.options.maxNumberOfNipples=1);const n=getComputedStyle(t.options.zone.parentElement);return n&&n.display==="flex"&&(t.parentIsFlex=!0),t.updateBox(),t.prepareNipples(),t.bindings(),t.begin(),t.nipples}gt.prototype=new Rn;gt.constructor=gt;gt.id=0;gt.prototype.prepareNipples=function(){var s=this,e=s.nipples;e.on=s.on.bind(s),e.off=s.off.bind(s),e.options=s.options,e.destroy=s.destroy.bind(s),e.ids=s.ids,e.id=s.id,e.processOnMove=s.processOnMove.bind(s),e.processOnEnd=s.processOnEnd.bind(s),e.get=function(t){if(t===void 0)return e[0];for(var n=0,i=e.length;n<i;n+=1)if(e[n].identifier===t)return e[n];return!1}};gt.prototype.bindings=function(){var s=this;s.bindEvt(s.options.zone,"start"),s.options.zone.style.touchAction="none",s.options.zone.style.msTouchAction="none"};gt.prototype.begin=function(){var s=this,e=s.options;if(e.mode==="static"){var t=s.createNipple(e.position,s.manager.getIdentifier());t.add(),s.idles.push(t)}};gt.prototype.createNipple=function(s,e){var t=this,n=t.manager.scroll,i={},o=t.options,r={x:t.parentIsFlex?n.x:n.x+t.box.left,y:t.parentIsFlex?n.y:n.y+t.box.top};if(s.x&&s.y)i={x:s.x-r.x,y:s.y-r.y};else if(s.top||s.right||s.bottom||s.left){var a=document.createElement("DIV");a.style.display="hidden",a.style.top=s.top,a.style.right=s.right,a.style.bottom=s.bottom,a.style.left=s.left,a.style.position="absolute",o.zone.appendChild(a);var l=a.getBoundingClientRect();o.zone.removeChild(a),i=s,s={x:l.left+n.x,y:l.top+n.y}}var c=new bt(t,{color:o.color,size:o.size,threshold:o.threshold,fadeTime:o.fadeTime,dataOnly:o.dataOnly,restJoystick:o.restJoystick,restOpacity:o.restOpacity,mode:o.mode,identifier:e,position:s,zone:o.zone,frontPosition:{x:0,y:0},shape:o.shape});return o.dataOnly||(kl(c.ui.el,i),kl(c.ui.front,c.frontPosition)),t.nipples.push(c),t.trigger("added "+c.identifier+":added",c),t.manager.trigger("added "+c.identifier+":added",c),t.bindNipple(c),c};gt.prototype.updateBox=function(){var s=this;s.box=s.options.zone.getBoundingClientRect()};gt.prototype.bindNipple=function(s){var e=this,t,n=function(i,o){t=i.type+" "+o.id+":"+i.type,e.trigger(t,o)};s.on("destroyed",e.onDestroyed.bind(e)),s.on("shown hidden rested dir plain",n),s.on("dir:up dir:right dir:down dir:left",n),s.on("plain:up plain:right plain:down plain:left",n)};gt.prototype.pressureFn=function(s,e,t){var n=this,i=0;clearInterval(n.pressureIntervals[t]),n.pressureIntervals[t]=setInterval((function(){var o=s.force||s.pressure||s.webkitForce||0;o!==i&&(e.trigger("pressure",o),n.trigger("pressure "+e.identifier+":pressure",o),i=o)}).bind(n),100)};gt.prototype.onstart=function(s){var e=this,t=e.options,n=s;s=jc(s),e.updateBox();var i=function(o){e.actives.length<t.maxNumberOfNipples?e.processOnStart(o):n.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(r){if(Object.values(n.touches).findIndex(function(l){return l.identifier===r})<0){var a=[s[0]];a.identifier=r,e.processOnEnd(a)}}),e.actives.length<t.maxNumberOfNipples&&e.processOnStart(o))};return $r(s,i),e.manager.bindDocument(),!1};gt.prototype.processOnStart=function(s){var e=this,t=e.options,n,i=e.manager.getIdentifier(s),o=s.force||s.pressure||s.webkitForce||0,r={x:s.pageX,y:s.pageY},a=e.getOrCreate(i,r);a.identifier!==i&&e.manager.removeIdentifier(a.identifier),a.identifier=i;var l=function(h){h.trigger("start",h),e.trigger("start "+h.id+":start",h),h.show(),o>0&&e.pressureFn(s,h,h.identifier),e.processOnMove(s)};if((n=e.idles.indexOf(a))>=0&&e.idles.splice(n,1),e.actives.push(a),e.ids.push(a.identifier),t.mode!=="semi")l(a);else{var c=so(r,a.position);if(c<=t.catchDistance)l(a);else{a.destroy(),e.processOnStart(s);return}}return a};gt.prototype.getOrCreate=function(s,e){var t=this,n=t.options,i;return/(semi|static)/.test(n.mode)?(i=t.idles[0],i?(t.idles.splice(0,1),i):n.mode==="semi"?t.createNipple(e,s):(console.warn("Coudln't find the needed nipple."),!1)):(i=t.createNipple(e,s),i)};gt.prototype.processOnMove=function(s){var e=this,t=e.options,n=e.manager.getIdentifier(s),i=e.nipples.get(n),o=e.manager.scroll;if(!ng(s)){this.processOnEnd(s);return}if(!i){console.error("Found zombie joystick with ID "+n),e.manager.removeIdentifier(n);return}if(t.dynamicPage){var r=i.el.getBoundingClientRect();i.position={x:o.x+r.left,y:o.y+r.top}}i.identifier=n;var a=i.options.size/2,l={x:s.pageX,y:s.pageY};t.lockX&&(l.y=i.position.y),t.lockY&&(l.x=i.position.x);var c=so(l,i.position),h=Qm(l,i.position),u=Jr(h),d=c/a,f={distance:c,position:l},g,_;if(i.options.shape==="circle"?(g=Math.min(c,a),_=eg(i.position,g,h)):(_=og(l,i.position,a),g=so(_,i.position)),t.follow){if(c>a){let S=l.x-_.x,v=l.y-_.y;i.position.x+=S,i.position.y+=v,i.el.style.top=i.position.y-(e.box.top+o.y)+"px",i.el.style.left=i.position.x-(e.box.left+o.x)+"px",c=so(l,i.position)}}else l=_,c=g;var m=l.x-i.position.x,p=l.y-i.position.y;i.frontPosition={x:m,y:p},t.dataOnly||(i.ui.front.style.transform="translate("+m+"px,"+p+"px)");var b={identifier:i.identifier,position:l,force:d,pressure:s.force||s.pressure||s.webkitForce||0,distance:c,angle:{radian:u,degree:h},vector:{x:m/a,y:-p/a},raw:f,instance:i,lockX:t.lockX,lockY:t.lockY};b=i.computeDirection(b),b.angle={radian:Jr(180-h),degree:180-h},i.trigger("move",b),e.trigger("move "+i.id+":move",b)};gt.prototype.processOnEnd=function(s){var e=this,t=e.options,n=e.manager.getIdentifier(s),i=e.nipples.get(n),o=e.manager.removeIdentifier(i.identifier);i&&(t.dataOnly||i.hide(function(){t.mode==="dynamic"&&(i.trigger("removed",i),e.trigger("removed "+i.id+":removed",i),e.manager.trigger("removed "+i.id+":removed",i),i.destroy())}),clearInterval(e.pressureIntervals[i.identifier]),i.resetDirection(),i.trigger("end",i),e.trigger("end "+i.id+":end",i),e.ids.indexOf(i.identifier)>=0&&e.ids.splice(e.ids.indexOf(i.identifier),1),e.actives.indexOf(i)>=0&&e.actives.splice(e.actives.indexOf(i),1),/(semi|static)/.test(t.mode)?e.idles.push(i):e.nipples.indexOf(i)>=0&&e.nipples.splice(e.nipples.indexOf(i),1),e.manager.unbindDocument(),/(semi|static)/.test(t.mode)&&(e.manager.ids[o.id]=o.identifier))};gt.prototype.onDestroyed=function(s,e){var t=this;t.nipples.indexOf(e)>=0&&t.nipples.splice(t.nipples.indexOf(e),1),t.actives.indexOf(e)>=0&&t.actives.splice(t.actives.indexOf(e),1),t.idles.indexOf(e)>=0&&t.idles.splice(t.idles.indexOf(e),1),t.ids.indexOf(e.identifier)>=0&&t.ids.splice(t.ids.indexOf(e.identifier),1),t.manager.removeIdentifier(e.identifier),t.manager.unbindDocument()};gt.prototype.destroy=function(){var s=this;s.unbindEvt(s.options.zone,"start"),s.nipples.forEach(function(t){t.destroy()});for(var e in s.pressureIntervals)s.pressureIntervals.hasOwnProperty(e)&&clearInterval(s.pressureIntervals[e]);s.trigger("destroyed",s.nipples),s.manager.unbindDocument(),s.off()};function St(s){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=Ol(),e.config(s),e.prepareCollections();var t=function(){var i;e.collections.forEach(function(o){o.forEach(function(r){i=r.el.getBoundingClientRect(),r.position={x:e.scroll.x+i.left,y:e.scroll.y+i.top}})})};po(window,"resize",function(){Ul(t)});var n=function(){e.scroll=Ol()};return po(window,"scroll",function(){Ul(n)}),e.collections}St.prototype=new Rn;St.constructor=St;St.prototype.prepareCollections=function(){var s=this;s.collections.create=s.create.bind(s),s.collections.on=s.on.bind(s),s.collections.off=s.off.bind(s),s.collections.destroy=s.destroy.bind(s),s.collections.get=function(e){var t;return s.collections.every(function(n){return t=n.get(e),!t}),t}};St.prototype.create=function(s){return this.createCollection(s)};St.prototype.createCollection=function(s){var e=this,t=new gt(e,s);return e.bindCollection(t),e.collections.push(t),t};St.prototype.bindCollection=function(s){var e=this,t,n=function(i,o){t=i.type+" "+o.id+":"+i.type,e.trigger(t,o)};s.on("destroyed",e.onDestroyed.bind(e)),s.on("shown hidden rested dir plain",n),s.on("dir:up dir:right dir:down dir:left",n),s.on("plain:up plain:right plain:down plain:left",n)};St.prototype.bindDocument=function(){var s=this;s.binded||(s.bindEvt(document,"move").bindEvt(document,"end"),s.binded=!0)};St.prototype.unbindDocument=function(s){var e=this;(!Object.keys(e.ids).length||s===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};St.prototype.getIdentifier=function(s){var e;return s?(e=s.identifier===void 0?s.pointerId:s.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};St.prototype.removeIdentifier=function(s){var e={};for(var t in this.ids)if(this.ids[t]===s){e.id=t,e.identifier=this.ids[t],delete this.ids[t];break}return e};St.prototype.onmove=function(s){var e=this;return e.onAny("move",s),!1};St.prototype.onend=function(s){var e=this;return e.onAny("end",s),!1};St.prototype.oncancel=function(s){var e=this;return e.onAny("end",s),!1};St.prototype.onAny=function(s,e){var t=this,n,i="processOn"+s.charAt(0).toUpperCase()+s.slice(1);e=jc(e);var o=function(a,l,c){c.ids.indexOf(l)>=0&&(c[i](a),a._found_=!0)},r=function(a){n=t.getIdentifier(a),$r(t.collections,o.bind(null,a,n)),a._found_||t.removeIdentifier(n)};return $r(e,r),!1};St.prototype.destroy=function(){var s=this;s.unbindDocument(!0),s.ids={},s.index=0,s.collections.forEach(function(e){e.destroy()}),s.off()};St.prototype.onDestroyed=function(s,e){var t=this;if(t.collections.indexOf(e)<0)return!1;t.collections.splice(t.collections.indexOf(e),1)};const zl=new St,cg={create:function(s){return zl.create(s)},factory:zl};class hg{constructor(){C(this,"keys",{});C(this,"steerAxis",0);C(this,"accelerating",!1);C(this,"braking",!1);C(this,"horn",!1);C(this,"joystickManager",null);C(this,"hornTimeout",null);window.addEventListener("keydown",e=>{this.keys[e.code]=!0,e.code==="KeyH"&&this.triggerHorn()}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),this.setupMobileControls()}triggerHorn(){this.horn=!0,this.hornTimeout!==null&&clearTimeout(this.hornTimeout),this.hornTimeout=setTimeout(()=>{this.horn=!1,this.hornTimeout=null},300)}setupMobileControls(){const e=document.createElement("div");e.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 150px;
      height: 150px;
      z-index: 100;
      touch-action: none;
    `,document.body.appendChild(e),this.joystickManager=cg.create({zone:e,mode:"static",position:{left:"75px",bottom:"75px"},color:"rgba(255, 255, 255, 0.6)",size:120,restOpacity:.5}),this.joystickManager.on("move",(o,r)=>{r.vector&&(this.steerAxis=r.vector.x)}),this.joystickManager.on("end",()=>{this.steerAxis=0});const t=document.createElement("div");t.style.cssText=`
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
    `,t.textContent="REV",document.body.appendChild(t),t.addEventListener("touchstart",o=>{o.preventDefault(),this.braking=!0,t.style.background="rgba(220, 50, 50, 0.9)"},{passive:!1}),t.addEventListener("touchend",o=>{o.preventDefault(),this.braking=!1,t.style.background="rgba(220, 50, 50, 0.6)"},{passive:!1});const n=document.createElement("div");n.style.cssText=`
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
    `,i.textContent="📯",document.body.appendChild(i),i.addEventListener("touchstart",o=>{o.preventDefault(),this.triggerHorn(),i.style.background="rgba(255, 200, 50, 0.95)",i.style.transform="scale(1.1)"},{passive:!1}),i.addEventListener("touchend",o=>{o.preventDefault(),i.style.background="rgba(255, 200, 50, 0.6)",i.style.transform="scale(1.0)"},{passive:!1})}get forward(){return this.keys.ArrowUp||this.keys.KeyW||this.accelerating}get backward(){return this.keys.ArrowDown||this.keys.KeyS}get left(){return this.keys.ArrowLeft||this.keys.KeyA||this.steerAxis<-.2}get right(){return this.keys.ArrowRight||this.keys.KeyD||this.steerAxis>.2}get brake(){return this.keys.Space||this.braking}get honk(){return this.horn}}class dg{constructor(){C(this,"level",0);C(this,"spillRateMultiplier",1);C(this,"onSpill");C(this,"container");C(this,"fill");C(this,"bucketEl");C(this,"isShaking",!1);C(this,"spillFlashing",!1);if(!document.getElementById("spill-meter-styles")){const i=document.createElement("style");i.id="spill-meter-styles",i.textContent=`
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
      `,document.head.appendChild(i)}this.container=document.createElement("div"),Object.assign(this.container.style,{position:"fixed",top:"16px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",zIndex:"999",userSelect:"none",pointerEvents:"none"});const e=document.createElement("div");Object.assign(e.style,{display:"flex",alignItems:"center",gap:"8px"}),this.bucketEl=document.createElement("span"),this.bucketEl.textContent="🪣",Object.assign(this.bucketEl.style,{fontSize:"28px",lineHeight:"1"}),e.appendChild(this.bucketEl);const t=document.createElement("div");Object.assign(t.style,{width:"160px",height:"18px",background:"#333",borderRadius:"9px",overflow:"hidden",border:"2px solid rgba(255,255,255,0.25)",boxShadow:"0 2px 6px rgba(0,0,0,0.6)"}),this.fill=document.createElement("div"),Object.assign(this.fill.style,{height:"100%",width:"0%",borderRadius:"9px",transition:"width 0.05s linear",background:"linear-gradient(to right, #4caf50, #ffeb3b)"}),t.appendChild(this.fill),e.appendChild(t),this.container.appendChild(e);const n=document.createElement("div");n.textContent="DON'T SPILL THE PLASTER!",Object.assign(n.style,{color:"#fff",fontSize:"11px",fontWeight:"700",fontFamily:"system-ui, sans-serif",textShadow:"0 1px 4px rgba(0,0,0,0.9)",letterSpacing:"0.5px"}),this.container.appendChild(n),document.body.appendChild(this.container),this.container.style.display="none"}setVisible(e){this.container.style.display=e?"flex":"none"}addSpill(e){this.level=Math.min(1,this.level+e)}update(e){var n;const t=this.level*100;if(this.fill.style.width=`${t}%`,this.level<.5){const i=this.level*2,o=Math.round(76+i*179),r=Math.round(175+i*60);this.fill.style.background=`linear-gradient(to right, rgb(${o},${r},50), rgb(${o},${r},50))`}else{const i=(this.level-.5)*2,o=255,r=Math.round(235-i*235);this.fill.style.background=`linear-gradient(to right, rgb(${o},${r},50), rgb(${o},${Math.round(r*.4)},20))`}this.level>.8&&!this.isShaking?(this.bucketEl.classList.add("bucket-shake"),this.isShaking=!0):this.level<=.8&&this.isShaking&&(this.bucketEl.classList.remove("bucket-shake"),this.isShaking=!1),this.level>=1&&!this.spillFlashing&&(this.spillFlashing=!0,this.level=.5,(n=this.onSpill)==null||n.call(this,5e4),this.container.classList.add("spill-flash"),setTimeout(()=>{this.container.classList.remove("spill-flash"),this.spillFlashing=!1},700))}triggerBump(e){this.addSpill(.025)}triggerCrash(){this.addSpill(.3)}}const ug=[{id:"job_01",type:"commercial",zone:"cbd",position:{x:40,z:-40},title:"Marbellino Boardroom",client:"Brad from Accounts",description:"Brad wants a Marbellino feature wall in the boardroom. Stone-like marbled finish. Brad calls it 'very European'. Brad has never been to Europe.",pay:42e4,timeLimit:0,travelTimeLimit:120,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_02",type:"commercial",zone:"footscray",position:{x:-120,z:60},title:"Hemp Render — Big Kev's Shed",client:"Big Kev",description:"Big Kev wants Hemp Earthen Render on his warehouse. Rammed earth look, hemp fibres, 3–5mm application. He says it's a small shed. It is not a small shed.",pay:68e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_03",type:"residential",zone:"brunswick",position:{x:-80,z:80},title:"Antique Stucco Terrace",client:"Matilda",description:"Matilda wants Antique Stucco throughout — that Southern European aged look. Three rooms. By Thursday. It's Wednesday. She also needs primer coats. Yes, all of them.",pay:55e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_04",type:"heritage",zone:"richmond",position:{x:120,z:40},title:"Antique Stucco Heritage Restore",client:"The Council",description:"Council heritage job. Full 3-coat Antique Stucco system. Primer, stucco, sealer. Nobody told you about the asbestos audit. Nobody.",pay:8e5,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_05",type:"residential",zone:"stkilda",position:{x:40,z:-120},title:"Tadelakt Beachfront Bathroom",client:"Chloe",description:"Chloe wants Tadelakt in the bathroom — polished, waterproof, glossy. Traditional Moroccan technique. She also wants it 'textured but smooth'. You nod and apply the polishing stone.",pay:61e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_06",type:"emergency",zone:"cbd",position:{x:-40,z:20},title:"🚨 Emergency Antique Stucco Patch",client:"Darren (Stressed)",description:"Open home in 4 hours. Actual hole in the Antique Stucco feature wall. Primer, stucco, sealer — in 4 hours. Darren is sweating. You are also sweating.",pay:95e4,timeLimit:240,travelTimeLimit:240,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_07",type:"residential",zone:"brunswick",position:{x:-120,z:-80},title:"Hemp Render Repair — DIY Gone Wrong",client:"Zephyr",description:"Zephyr tried to do his own Hemp Earthen Render. No base coat. No primer. Wrong mix ratio. You strip it back and do it properly. Zephyr watches and takes notes.",pay:39e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_08",type:"commercial",zone:"footscray",position:{x:-160,z:20},title:"Rokka — Kebab Shop Reno",client:"Mustafa",description:"Mustafa wants Rokka on the walls — smooth, rustic, modern. 2–5mm application, sealed and ready before the health inspector comes back. No questions about the old walls.",pay:47e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_09",type:"heritage",zone:"stkilda",position:{x:80,z:-160},title:"Antique Stucco — Edwardian Cottage",client:"Patricia",description:"Patricia wants Antique Stucco — aged Southern European finish, NCC 2022 compliant. She's printed the full TDS. She's highlighted it. She will quiz you on cure times.",pay:72e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_10",type:"residential",zone:"richmond",position:{x:160,z:-40},title:"Tadelino New Build",client:"The Hendersons",description:"Full Tadelino system throughout — polished, modern, glossy finish. Two coats, polishing stone, sealer. The Hendersons want it done before Christmas. You ask which Christmas.",pay:58e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_11",type:"emergency",zone:"brunswick",position:{x:-40,z:120},title:"🚨 Tadelakt Water Damage Repair",client:"Gary",description:"Upstairs left the bath running. Gary's Tadelakt bathroom is destroyed. Strip, reprime, two coats Tadelakt, polish, seal. Gary is not speaking to upstairs. You don't ask.",pay:88e4,timeLimit:300,travelTimeLimit:300,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_12",type:"commercial",zone:"stkilda",position:{x:-20,z:-160},title:"Rokka Feature Wall — Wine Bar",client:"Alejandro",description:"Alejandro wants Rokka on the feature wall. Rustic, modern, subtle undulations. He calls it 'industrial earthen chic'. You write down 'Rokka, sealed, done'.",pay:64e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1}],Gl=["Jose","Jarrad","Matt","Phil","Tsuyoshi","Fabio"],ti=class ti{constructor(){C(this,"jobs",ug.map(e=>({...e})));C(this,"activeJob",null);C(this,"activePhase",1);C(this,"completedJobIds",new Set);C(this,"money",5e5);C(this,"travelTimer",0);C(this,"travelFailed",!1);C(this,"crewToPickup",[]);C(this,"crewPickedUp",[])}getAvailableJobs(){return this.jobs.filter(e=>!this.completedJobIds.has(e.id)&&e!==this.activeJob)}acceptJob(e){this.activeJob=e,this.activePhase=1,this.crewToPickup=this._pickCrew(e.crewNeeded),this.crewPickedUp=[],this.startTravelTimer()}_pickCrew(e){return[...Gl].sort(()=>Math.random()-.5).slice(0,Math.min(e,Gl.length))}startTravelTimer(){this.activeJob&&(this.travelTimer=this.activeJob.travelTimeLimit??120,this.travelFailed=!1)}checkPhase1Arrival(e,t){const n=e-ti.WORKSHOP_POS.x,i=t-ti.WORKSHOP_POS.z;return Math.sqrt(n*n+i*i)<18}advanceToPhase2(){this.activePhase=2,this.startTravelTimer()}advanceToPhase3(){this.activePhase=3,this.startTravelTimer()}pickupCrew(e){return!this.crewPickedUp.includes(e)&&this.crewToPickup.includes(e)&&this.crewPickedUp.push(e),this.allCrewCollected()}allCrewCollected(){return this.crewToPickup.every(e=>this.crewPickedUp.includes(e))}nextCrewNeeded(){for(const e of this.crewToPickup)if(!this.crewPickedUp.includes(e))return e;return null}tickTravel(e){if(!this.activeJob||this.travelFailed)return null;if(this.travelTimer-=e,this.travelTimer<=0){this.travelFailed=!0;const t=15e4;return this.money=Math.max(0,this.money-t),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],{failed:!0,penalty:t}}return null}checkArrival(e,t){if(!this.activeJob||this.activePhase!==3)return null;const n=e-this.activeJob.position.x,i=t-this.activeJob.position.z;return Math.sqrt(n*n+i*i)<this.activeJob.triggerRadius?this.activeJob:null}completeJob(e,t=1){const n=Math.round(e.pay*t);return this.money+=n,this.completedJobIds.add(e.id),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],n}distanceTo(e,t){if(!this.activeJob)return 0;const n=e-this.activeJob.position.x,i=t-this.activeJob.position.z;return Math.sqrt(n*n+i*i)}distanceToWorkshop(e,t){const n=e-ti.WORKSHOP_POS.x,i=t-ti.WORKSHOP_POS.z;return Math.sqrt(n*n+i*i)}distanceToPoint(e,t,n,i){const o=e-n,r=t-i;return Math.sqrt(o*o+r*r)}};C(ti,"WORKSHOP_POS",{x:10,z:15});let mo=ti;const tn=class tn{constructor(e){C(this,"marker");C(this,"diamond");C(this,"ring");C(this,"routeLine",null);C(this,"routeGeom",null);C(this,"scene");C(this,"time",0);C(this,"targetPos",null);this.scene=e,this.marker=new Ne;const t=new ma(1,0),n=new Z({color:tn.MARKER_COLOR,emissive:new ye(tn.MARKER_COLOR),emissiveIntensity:.35});this.diamond=new N(t,n),this.diamond.scale.set(1.2,2,1.2),this.diamond.castShadow=!1,this.marker.add(this.diamond);const i=new ci(.5,2,32),o=new jt({color:tn.MARKER_COLOR,transparent:!0,opacity:.6,side:Ht,depthWrite:!1});this.ring=new N(i,o),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=-8+.3,this.marker.add(this.ring),this.marker.visible=!1,this.scene.add(this.marker)}setTarget(e){if(this.targetPos=e,this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null),e===null){this.marker.visible=!1;return}this.marker.position.set(e.x,tn.BASE_HEIGHT,e.z),this.marker.visible=!0,this.routeGeom=new It;const t=new Float32Array(6);t[0]=e.x,t[1]=.05,t[2]=e.z,t[3]=e.x,t[4]=.05,t[5]=e.z,this.routeGeom.setAttribute("position",new an(t,3));const n=new Nc({color:16777215,transparent:!0,opacity:.75,depthTest:!1});this.routeLine=new Q0(this.routeGeom,n),this.routeLine.renderOrder=999,this.scene.add(this.routeLine)}setJob(e){this.setTarget((e==null?void 0:e.position)??null)}update(e,t,n){if(this.time+=e,!this.targetPos||!this.marker.visible)return;const i=Math.sin(this.time*2.2)*tn.BOB_AMP;this.marker.position.y=tn.BASE_HEIGHT+i,this.diamond.rotation.y=this.time*1.2;const o=this.time*.8%1,r=.5+o*2;this.ring.scale.set(r,r,1);const a=this.ring.material;if(a.opacity=(1-o)*.6,this.routeGeom){const l=this.routeGeom.attributes.position;l.setXYZ(0,t,.05,n),l.setXYZ(1,this.targetPos.x,.05,this.targetPos.z),l.needsUpdate=!0,this.routeGeom.computeBoundingSphere()}}dispose(){this.marker.visible=!1,this.scene.remove(this.marker),this.diamond.geometry.dispose(),this.diamond.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null)}};C(tn,"MARKER_COLOR",12674667),C(tn,"BASE_HEIGHT",8),C(tn,"BOB_AMP",.5);let Kr=tn;function fg(s){return s>=1e6?`${(s/1e6).toFixed(2)}M sats`:s>=1e3?`${(s/1e3).toFixed(0)}K sats`:`${s} sats`}const pg={cbd:"🏙️ CBD",footscray:"🏭 Footscray",brunswick:"🎸 Brunswick",richmond:"🏡 Richmond",stkilda:"🌊 St Kilda"},mg={residential:"🏠 Residential",commercial:"🏢 Commercial",heritage:"🏛️ Heritage",emergency:"🚨 Emergency"};class gg{constructor(e){C(this,"onAccept");C(this,"overlay");C(this,"visible",!1);C(this,"jobs",[]);if(this.onAccept=e,this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,e.appendChild(t);const n=document.createElement("button");if(n.className="jb-close-btn",n.textContent="✕",n.setAttribute("aria-label","Close"),n.addEventListener("click",()=>this.hide()),e.appendChild(n),this.overlay.appendChild(e),this.jobs.length===0){const i=document.createElement("div");i.className="jb-no-jobs",i.textContent="You've smashed all the jobs, legend. 🏆",this.overlay.appendChild(i);return}for(const i of this.jobs){const o=document.createElement("div");o.className="jb-card";const r=document.createElement("div");r.className="jb-card-header";const a=document.createElement("div");a.className="jb-title",a.textContent=i.title,r.appendChild(a);const l=document.createElement("div");l.className="jb-pay",l.textContent=`₿ ${fg(i.pay)}`,r.appendChild(l),o.appendChild(r);const c=document.createElement("div");c.className="jb-meta";const h=document.createElement("span");h.className="jb-badge",h.textContent=pg[i.zone]??i.zone,c.appendChild(h);const u=document.createElement("span");if(u.className=`jb-badge${i.type==="emergency"?" jb-emergency-badge":""}`,u.textContent=mg[i.type]??i.type,c.appendChild(u),i.timeLimit>0){const _=document.createElement("span");_.className="jb-badge jb-emergency-badge",_.textContent=`⏱️ ${Math.round(i.timeLimit/60)} min limit`,c.appendChild(_)}o.appendChild(c);const d=document.createElement("div");d.className="jb-client",d.textContent=`Client: ${i.client}`,o.appendChild(d);const f=document.createElement("div");f.className="jb-desc",f.textContent=i.description,o.appendChild(f);const g=document.createElement("button");g.className="jb-accept-btn",g.textContent="ACCEPT →",g.addEventListener("click",()=>{this.onAccept(i)}),o.appendChild(g),this.overlay.appendChild(o)}}}const _g=1e8;function Ti(s){return s>=1e6?`${(s/1e6).toFixed(2)}M sats`:s>=1e3?`${(s/1e3).toFixed(0)}K sats`:`${s} sats`}function vg(s){const e=Math.max(0,Math.ceil(s)),t=Math.floor(e/60),n=e%60;return`${t}:${n.toString().padStart(2,"0")}`}function xg(s){return s.charAt(0).toUpperCase()}class yg{constructor(){C(this,"btcAchieved",!1);C(this,"speedText");C(this,"moneyEl");C(this,"jobStripEl");C(this,"travelTimerEl");C(this,"flashOverlay");C(this,"timerFailOverlay");C(this,"crewPanelEl");C(this,"activeJob",null);C(this,"activePhase",1);C(this,"flashTimeout",null);C(this,"spillPenaltyTimeout",null);C(this,"currentMoney",5e5);C(this,"timerPulseInterval",null);if(!document.getElementById("hud-styles")){const o=document.createElement("style");o.id="hud-styles",o.textContent=`
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
      `,document.head.appendChild(o)}const e=document.createElement("div");e.style.cssText=`
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
    `,this.moneyEl.textContent="500K sats",t.appendChild(this.moneyEl),this.jobStripEl=document.createElement("div"),this.jobStripEl.style.cssText=`
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
    `,i.textContent="⏰ TOO SLOW! -150K sats",this.timerFailOverlay.appendChild(i),document.body.appendChild(this.timerFailOverlay)}update(e,t){const n=Math.abs(Math.round(e*3.6));this.speedText.textContent=`${n} km/h`}setActiveJob(e,t=2){if(this.activeJob=e,this.activePhase=t,!e){this.jobStripEl.style.display="none",this.crewPanelEl.style.display="none";return}this.jobStripEl.style.display="flex",this._refreshJobStrip(e,null)}updateJobDistance(e){this.activeJob&&this._refreshJobStrip(this.activeJob,e)}updateCrewStatus(e,t,n){if(!n||e.length===0){this.crewPanelEl.style.display="none";return}this.crewPanelEl.style.display="flex",this.crewPanelEl.innerHTML="";const i=document.createElement("div");i.style.cssText=`
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
      `,l.textContent=xg(r),l.title=r,o.appendChild(l)}this.crewPanelEl.appendChild(o)}_refreshJobStrip(e,t){this.jobStripEl.innerHTML="";const n=document.createElement("div");if(n.style.cssText=`
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      text-align: right;
    `,t!==null){const i=t<1e3?`${Math.round(t)}m`:`${(t/1e3).toFixed(1)}km`;this.activePhase===1?(n.textContent=`📦 To workshop: ${i} — ${e.title}`,n.style.color="#FFD700"):this.activePhase===2?(n.textContent=`👥 Pick up crew: ${i} — ${e.title}`,n.style.color="#60AAFF"):(n.textContent=`🧱 To job site: ${i} — ${e.title}`,n.style.color="#C1666B")}else this.activePhase===1?(n.textContent=`📦 Workshop pickup — ${e.title}`,n.style.color="#FFD700"):this.activePhase===2?(n.textContent=`👥 Pick up the crew — ${e.title}`,n.style.color="#60AAFF"):(n.textContent=`🧱 ${e.title}`,n.style.color="#fff");this.jobStripEl.appendChild(n)}updateTravelTimer(e){if(e===null){this.travelTimerEl.style.display="none",this.travelTimerEl.classList.remove("hud-timer-pulse"),this.timerPulseInterval!==null&&(clearInterval(this.timerPulseInterval),this.timerPulseInterval=null);return}this.travelTimerEl.style.display="block",this.travelTimerEl.textContent=`⏱ ${vg(e)}`,e>60?(this.travelTimerEl.style.color="#5EDB7D",this.travelTimerEl.classList.remove("hud-timer-pulse")):e>30?(this.travelTimerEl.style.color="#FFD700",this.travelTimerEl.classList.remove("hud-timer-pulse")):(this.travelTimerEl.style.color="#ff4444",this.travelTimerEl.classList.contains("hud-timer-pulse")||this.travelTimerEl.classList.add("hud-timer-pulse"))}showTimerFail(e){const t=document.getElementById("hud-timer-fail-msg");t&&(t.textContent=`⏰ TOO SLOW! -${Ti(e)}`),this.timerFailOverlay.style.display="flex",setTimeout(()=>{this.timerFailOverlay.style.display="none"},3e3)}showPhase1Complete(){const e=document.getElementById("hud-flash-msg");e&&(e.innerHTML='📦 Materials loaded!<br><span style="font-size:0.65em">Go pick up the crew.</span>',e.style.color="#FFD700"),this.flashOverlay.style.background="rgba(255, 210, 0, 0.10)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2500)}showCrewPickup(e,t){const n=document.getElementById("hud-flash-msg");n&&(t?n.innerHTML=`👤 ${e} on board!<br><span style="font-size:0.65em">Pick up ${t}!</span>`:(n.innerHTML='✅ Crew assembled!<br><span style="font-size:0.65em">Head to the job site.</span>',n.style.color="#5EDB7D"),t&&(n.style.color="#60AAFF")),this.flashOverlay.style.background=t?"rgba(96, 170, 255, 0.08)":"rgba(94, 219, 125, 0.12)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2200)}showSpillPenalty(e){this.spillPenaltyTimeout!==null&&(clearTimeout(this.spillPenaltyTimeout),this.spillPenaltyTimeout=null);const t=`-${Ti(e)}`;this.moneyEl.style.color="#ff4444",this.moneyEl.textContent=`${Ti(this.currentMoney)} ${t}`,this.spillPenaltyTimeout=setTimeout(()=>{this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=Ti(this.currentMoney),this.spillPenaltyTimeout=null},1500)}showJobComplete(e,t){const n=document.getElementById("hud-flash-msg");n&&(n.style.color="#5EDB7D",n.innerHTML=`✅ JOB DONE!<br><span style="font-size:0.7em">+${Ti(t)} — ${e}</span>`),this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashTimeout=null},3e3)}updateMoney(e){this.currentMoney=e,this.spillPenaltyTimeout===null&&(this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=Ti(e)),!this.btcAchieved&&e>=_g&&(this.btcAchieved=!0,this._showBitcoinAchievement())}showToast(e,t=16777215){const n="#"+t.toString(16).padStart(6,"0"),i=document.createElement("div");i.textContent=e,Object.assign(i.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:n,color:"#fff",padding:"14px 24px",borderRadius:"14px",fontSize:"18px",fontWeight:"800",fontFamily:"system-ui, sans-serif",zIndex:"9000",opacity:"1",textShadow:"0 1px 4px rgba(0,0,0,0.5)",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",pointerEvents:"none",whiteSpace:"nowrap",transition:"opacity 0.5s ease"}),document.body.appendChild(i),setTimeout(()=>{i.style.opacity="0"},2e3),setTimeout(()=>i.remove(),2600)}_showBitcoinAchievement(){const e=document.createElement("div");e.style.cssText=`
      position: fixed; inset: 0; z-index: 9999;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      background: rgba(0,0,0,0.85);
      font-family: system-ui, sans-serif;
      animation: btcFadeIn 0.6s ease;
    `;const t=document.createElement("style");t.textContent=`
      @keyframes btcFadeIn { from { opacity:0; transform:scale(0.8); } to { opacity:1; transform:scale(1); } }
      @keyframes btcSpin { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
    `,document.head.appendChild(t),e.innerHTML=`
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
    `,document.body.appendChild(e)}}const ri=[{id:"timber-bluestone",file:"images/270ae674-ae77-46c0-a931-d8b3890bb728.jpg",name:"Timber & Bluestone"},{id:"angular-bay",file:"images/4d5ff18e-1129-4195-9108-a64f3c8e4d34.jpg",name:"Angular Bay House"},{id:"haussmann",file:"images/5c2eabb7-65ce-4f76-b14c-8eb37a3f9537.jpg",name:"Haussmann Mansion"},{id:"brutalist",file:"images/60007f2e-318f-412e-b2ad-4d77445ee417.jpg",name:"Brutalist Compound"},{id:"sculptural-olive",file:"images/787315c4-a661-4dca-8567-b7a18f104665.jpg",name:"Sculptural Olive"},{id:"curved-balcony",file:"images/842fccc6-6bad-4509-81d8-ecb2dc14c80c.jpg",name:"Curved Balcony"},{id:"corten-plaster",file:"images/e3cbd2c9-7944-4074-a439-1033c9f2c166.jpg",name:"Corten & Plaster"},{id:"terracotta-mono",file:"images/f2ed55b5-ba78-4a78-8bad-e57a86b6bcef.jpg",name:"Terracotta Monolith"}],$c="tem-rush-achievements";function ws(){try{return JSON.parse(localStorage.getItem($c)||"[]")}catch{return[]}}function Mg(s){const e=ws();return e.includes(s)?!1:(e.push(s),localStorage.setItem($c,JSON.stringify(e)),!0)}function bg(){return ws().length>=ri.length}function wg(){const s=ws(),e=ri.filter(t=>!s.includes(t.id));return e.length>0?e[Math.floor(Math.random()*e.length)]:ri[Math.floor(Math.random()*ri.length)]}function Sg(s,e,t){s.fillStyle="#C8B89A",s.fillRect(0,0,e,t);for(let n=0;n<800;n++){const i=Math.random()*e,o=Math.random()*t,r=20+Math.random()*60,a=Math.random()*Math.PI,l=Math.floor(180+Math.random()*40);s.strokeStyle=`rgb(${l},${l-10},${l-20})`,s.lineWidth=1+Math.random()*3,s.globalAlpha=.3+Math.random()*.4,s.beginPath(),s.moveTo(i,o),s.lineTo(i+Math.cos(a)*r,o+Math.sin(a)*r),s.stroke()}s.globalAlpha=1,s.font="bold 48px system-ui",s.textAlign="center",s.fillStyle="rgba(180,160,130,0.4)",s.fillText("TROWELED EARTH",e/2,t/2-20),s.font="22px system-ui",s.fillStyle="rgba(180,160,130,0.3)",s.fillText("Scratch to reveal",e/2,t/2+20)}function Tg(s,e,t,n,i,o=45){s.globalCompositeOperation="destination-out",s.strokeStyle="rgba(0,0,0,1)",s.lineCap="round",s.lineJoin="round",s.lineWidth=o*2,s.beginPath(),s.moveTo(e,t),s.lineTo(n,i),s.stroke(),s.globalCompositeOperation="source-over"}function Hl(s,e,t){const n=s.getImageData(0,0,e,t).data;let i=0;const o=e*t;for(let r=3;r<n.length;r+=4)n[r]<128&&i++;return i/o}function Eg(s,e,t){s.save(),s.translate(e,t),s.rotate(Math.PI/4),s.strokeStyle="#8B6914",s.lineWidth=5,s.lineCap="round",s.beginPath(),s.moveTo(0,0),s.lineTo(0,36),s.stroke(),s.fillStyle="#C0C0C0",s.strokeStyle="#888",s.lineWidth=1.5,s.beginPath(),s.moveTo(-14,0),s.lineTo(14,0),s.lineTo(10,-28),s.lineTo(-10,-28),s.closePath(),s.fill(),s.stroke(),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.moveTo(-8,-4),s.lineTo(4,-4),s.lineTo(2,-22),s.lineTo(-6,-22),s.closePath(),s.fill(),s.restore()}function Vl(s,e,t,n){const i=Math.max(t/e.naturalWidth,n/e.naturalHeight),o=e.naturalWidth*i,r=e.naturalHeight*i,a=(t-o)/2,l=(n-r)/2;s.drawImage(e,a,l,o,r)}class Ag{constructor(){C(this,"container",null);C(this,"canvas",null);C(this,"ctx",null);C(this,"scratch",null);C(this,"sctx",null);C(this,"onComplete",null);C(this,"photo",null);C(this,"img",null);C(this,"imgLoaded",!1);C(this,"lastX",0);C(this,"lastY",0);C(this,"pointerDown",!1);C(this,"cursorX",-999);C(this,"cursorY",-999);C(this,"DURATION",30);C(this,"timeLeft",30);C(this,"timerInterval",null);C(this,"rafId",0);C(this,"done",!1);C(this,"revealed",0);C(this,"lastSampleTime",0);C(this,"SAMPLE_INTERVAL",250);C(this,"toastMsg","");C(this,"toastAlpha",0);C(this,"_onMouseMove");C(this,"_onMouseDown");C(this,"_onMouseUp");C(this,"_onTouchStart");C(this,"_onTouchMove");C(this,"_onTouchEnd");this._onMouseMove=this.handleMouseMove.bind(this),this._onMouseDown=this.handleMouseDown.bind(this),this._onMouseUp=()=>{this.pointerDown=!1},this._onTouchStart=this.handleTouchStart.bind(this),this._onTouchMove=this.handleTouchMove.bind(this),this._onTouchEnd=()=>{this.pointerDown=!1}}mount(e,t){if(this.container=e,this.onComplete=t,this.done=!1,this.revealed=0,this.timeLeft=this.DURATION,this.toastMsg="",this.toastAlpha=0,this.photo=wg(),this.canvas=document.createElement("canvas"),this.canvas.width=e.clientWidth||window.innerWidth,this.canvas.height=e.clientHeight||window.innerHeight,this.canvas.style.cssText="position:absolute;inset:0;display:block;cursor:none;touch-action:none;",this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx)throw new Error("Canvas 2D not supported");if(e.appendChild(this.canvas),this.scratch=document.createElement("canvas"),this.scratch.width=this.canvas.width,this.scratch.height=this.canvas.height,this.sctx=this.scratch.getContext("2d",{willReadFrequently:!0}),!this.sctx)throw new Error("Scratch canvas 2D not supported");Sg(this.sctx,this.scratch.width,this.scratch.height),this.img=new Image,this.img.onload=()=>{this.imgLoaded=!0},this.img.onerror=()=>{this.imgLoaded=!0},this.img.src=this.photo.file,this.canvas.addEventListener("mousemove",this._onMouseMove),this.canvas.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),this.canvas.addEventListener("touchstart",this._onTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.canvas.addEventListener("touchend",this._onTouchEnd),this.timerInterval=setInterval(()=>{this.done||(this.timeLeft--,this.timeLeft<=0&&this.finish())},1e3),this.loop()}handleMouseDown(e){this.pointerDown=!0;const t=this.canvas.getBoundingClientRect();this.lastX=e.clientX-t.left,this.lastY=e.clientY-t.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleMouseMove(e){const t=this.canvas.getBoundingClientRect(),n=e.clientX-t.left,i=e.clientY-t.top;this.cursorX=n,this.cursorY=i,this.pointerDown&&!this.done&&(this.scrape(this.lastX,this.lastY,n,i),this.lastX=n,this.lastY=i)}handleTouchStart(e){e.preventDefault(),this.pointerDown=!0;const t=e.touches[0],n=this.canvas.getBoundingClientRect();this.lastX=t.clientX-n.left,this.lastY=t.clientY-n.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleTouchMove(e){if(e.preventDefault(),!this.pointerDown||this.done)return;const t=e.touches[0],n=this.canvas.getBoundingClientRect(),i=t.clientX-n.left,o=t.clientY-n.top;this.cursorX=i,this.cursorY=o,this.scrape(this.lastX,this.lastY,i,o),this.lastX=i,this.lastY=o}scrape(e,t,n,i){if(!this.sctx||!this.scratch||this.done)return;Tg(this.sctx,e,t,n,i,45);const o=performance.now();o-this.lastSampleTime>this.SAMPLE_INTERVAL&&(this.lastSampleTime=o,this.revealed=Hl(this.sctx,this.scratch.width,this.scratch.height),this.revealed>=.85&&this.finish())}loop(){if(this.done&&this.toastAlpha<=0)return;const e=this.ctx,t=this.canvas;if(!e||!t)return;const n=t.width,i=t.height;e.clearRect(0,0,n,i),this.imgLoaded&&this.img&&this.img.naturalWidth>0?Vl(e,this.img,n,i):(e.fillStyle="#2a2a20",e.fillRect(0,0,n,i)),this.scratch&&e.drawImage(this.scratch,0,0),this.done||this.drawHUD(e,n,i),this.cursorX>0&&!this.done&&Eg(e,this.cursorX,this.cursorY),this.toastAlpha>0&&(this.drawToast(e,n,i),this.toastAlpha-=.012),this.rafId=requestAnimationFrame(()=>this.loop())}drawHUD(e,t,n){const i=this.timeLeft/this.DURATION,o=t*.8,r=t*.1,a=16,l=14,c=7;e.fillStyle="rgba(0,0,0,0.4)",this.roundRect(e,r,a,o,l,c),e.fill();const h=i<.33?"#F07070":i<.6?"#F7C948":"#5EDB7D";e.fillStyle=h,this.roundRect(e,r,a,o*i,l,c),e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.round(n*.03)}px system-ui`,e.textAlign="center",e.shadowColor="rgba(0,0,0,0.8)",e.shadowBlur=6,e.fillText(`${Math.ceil(this.timeLeft)}s`,t/2,a+l+22);const u=Math.round(this.revealed*100);e.font=`900 ${Math.round(n*.09)}px system-ui`,e.textAlign="center",e.fillStyle="rgba(255,255,255,0.9)",e.shadowColor="rgba(0,0,0,0.9)",e.shadowBlur=12,e.fillText(`${u}%`,t/2,n-32),e.shadowBlur=0,this.timeLeft>25&&(e.font=`bold ${Math.round(n*.03)}px system-ui`,e.fillStyle="rgba(255,255,255,0.85)",e.textAlign="center",e.fillText("🪣  Scrape away the plaster!",t/2,n/2))}roundRect(e,t,n,i,o,r){i<0||(e.beginPath(),e.moveTo(t+r,n),e.lineTo(t+i-r,n),e.quadraticCurveTo(t+i,n,t+i,n+r),e.lineTo(t+i,n+o-r),e.quadraticCurveTo(t+i,n+o,t+i-r,n+o),e.lineTo(t+r,n+o),e.quadraticCurveTo(t,n+o,t,n+o-r),e.lineTo(t,n+r),e.quadraticCurveTo(t,n,t+r,n),e.closePath())}drawToast(e,t,n){const i=Math.min(1,this.toastAlpha);e.save(),e.globalAlpha=i,e.fillStyle="rgba(0,0,0,0.7)",e.font=`bold ${Math.round(n*.035)}px system-ui`,e.textAlign="center";const o=this.toastMsg.split(`
`),r=Math.round(n*.045),a=o.length*r+24,l=n*.45-a/2,c=t*.85,h=(t-c)/2;this.roundRect(e,h,l,c,a,16),e.fill(),e.fillStyle="#fff",e.shadowColor="rgba(0,0,0,0.6)",e.shadowBlur=8,o.forEach((u,d)=>{e.fillText(u,t/2,l+22+d*r)}),e.restore()}finish(){if(this.done)return;this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.sctx&&this.scratch&&(this.revealed=Hl(this.sctx,this.scratch.width,this.scratch.height));const e=Math.round(this.revealed*100),t=Math.max(20,e),n=t/100,i=this.photo,o=Mg(i.id),r=ws().length,a=bg();this.showResultScreen(t,i,o,r,a,n)}showResultScreen(e,t,n,i,o,r){const a=this.ctx,l=this.canvas;if(!a||!l)return;const c=l.width,h=l.height;a.clearRect(0,0,c,h),this.imgLoaded&&this.img&&this.img.naturalWidth>0?Vl(a,this.img,c,h):(a.fillStyle="#2a2a20",a.fillRect(0,0,c,h)),this.scratch&&a.drawImage(this.scratch,0,0),a.fillStyle="rgba(0,0,0,0.65)",a.fillRect(0,0,c,h);const u=e>=85?"#5EDB7D":e>=60?"#F7C948":"#F07070";a.font=`900 ${Math.round(h*.15)}px system-ui`,a.textAlign="center",a.fillStyle=u,a.shadowColor="rgba(0,0,0,0.8)",a.shadowBlur=20,a.fillText(`${e}%`,c/2,h*.35),a.font=`bold ${Math.round(h*.04)}px system-ui`,a.fillStyle="#fff",a.shadowBlur=10,a.fillText(`📸 ${t.name}`,c/2,h*.47);let d;o?d="🏆 FULL TEM COLLECTION!":n?d="✨ NEW PHOTO UNLOCKED!":d="Already in your collection",a.font=`bold ${Math.round(h*.032)}px system-ui`,a.fillStyle=o?"#FFD700":n?"#5EDB7D":"#aaa",a.shadowBlur=8,a.fillText(d,c/2,h*.56),a.font=`${Math.round(h*.026)}px system-ui`,a.fillStyle="rgba(255,255,255,0.75)",a.shadowBlur=4,a.fillText(`Collection: ${i} / ${ri.length}`,c/2,h*.64),a.shadowBlur=0;const f=o?"🏆 Full TEM Collection complete!":n?`📸 New photo unlocked: ${t.name}`:`${t.name} — already in collection`,g={score:e,qualityPct:r,message:f};setTimeout(()=>{var _;return(_=this.onComplete)==null?void 0:_.call(this,g)},2800)}unmount(){this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.rafId&&cancelAnimationFrame(this.rafId),this.canvas&&(this.canvas.removeEventListener("mousemove",this._onMouseMove),this.canvas.removeEventListener("mousedown",this._onMouseDown),this.canvas.removeEventListener("touchstart",this._onTouchStart),this.canvas.removeEventListener("touchmove",this._onTouchMove),this.canvas.removeEventListener("touchend",this._onTouchEnd),this.canvas.remove()),window.removeEventListener("mouseup",this._onMouseUp),this.canvas=null,this.ctx=null,this.scratch=null,this.sctx=null,this.container=null,this.onComplete=null,this.img=null}}const De=400,ft=700,Cg=800,Wl=-420,$s=140,Xl=100,Rg=600,Pg=.5,Gt=44,Ks=22,Ig=.6,Dg=180,Lg=-200,ql=60,Fg=80,Bg=.8,Ug=100,Ng=1.15,os=3,Og=100,rs=200,Ei=80,hn=270,kg=[{id:"lv1",baseX:80,y:540,width:100,height:8,level:1,type:"normal"},{id:"lv2",baseX:140,y:450,width:120,height:8,level:2,type:"normal"},{id:"lv3a",baseX:80,y:360,width:100,height:8,level:3,type:"normal"},{id:"lv3b",baseX:220,y:360,width:100,height:8,level:3,type:"normal"},{id:"lv4",baseX:125,y:270,width:140,height:8,level:4,type:"moving"},{id:"lv5a",baseX:80,y:185,width:100,height:8,level:5,type:"crumbling"},{id:"lv5b",baseX:220,y:185,width:100,height:8,level:5,type:"normal"},{id:"lv6",baseX:80,y:100,width:240,height:8,level:6,type:"win"}],On={x:190,y:420,w:40,h:30};class zg{constructor(){C(this,"canvas",null);C(this,"ctx",null);C(this,"animFrame",null);C(this,"onComplete",null);C(this,"phase","playing");C(this,"platforms",[]);C(this,"jarrad");C(this,"pigeon");C(this,"gameTime",0);C(this,"tsuyoshiSpeech","I GOT IT!");C(this,"tsuyoshiTimer",0);C(this,"resultTimer",0);C(this,"retried",!1);C(this,"movingPlatTime",0);C(this,"movingPlatX",125);C(this,"crumble5ATimer",0);C(this,"crumble5AState","solid");C(this,"crumble5ARespawn",0);C(this,"ropeAngle",0);C(this,"ropeAngVel",0);C(this,"ropeGrabbed",!1);C(this,"windCycleTimer",0);C(this,"windActive",!1);C(this,"windAlpha",0);C(this,"showGapHint",!0);C(this,"gapHintTimer",8);C(this,"shakeNoise",0);C(this,"comboPhase",0);C(this,"comboTimer",0);C(this,"comboFlashTimer",0);C(this,"vaultFlashTimer",0);C(this,"rewindFlashTimer",0);C(this,"splatParticles",[]);C(this,"frameCount",0);C(this,"prevJarradY",0);C(this,"wallDustParticles",[]);C(this,"hasShimmied",!1);C(this,"keys",{});C(this,"prevKeys",{});C(this,"keyHandler");C(this,"keyUpHandler");C(this,"mobileLeft",!1);C(this,"mobileRight",!1);C(this,"mobileJump",!1);C(this,"mobileDrop",!1);C(this,"mobileRewind",!1);C(this,"mobileRewindFired",!1);C(this,"mobileContainer",null);C(this,"lastTimestamp",0)}mount(e,t){this.onComplete=t,this.platforms=kg.map(i=>({...i})),this.canvas=document.createElement("canvas"),this.canvas.width=De,this.canvas.height=ft,this.canvas.style.cssText=`
      width: 100%; height: 100%; object-fit: contain; display: block; touch-action: none;
    `,this.ctx=this.canvas.getContext("2d");const n=document.createElement("div");n.style.cssText=`
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      background: #000; overflow: hidden;
    `,n.appendChild(this.canvas),e.appendChild(n),this.buildMobileButtons(n),this.initGame(),this.keys={},this.prevKeys={},this.keyHandler=i=>{this.keys[i.code]=!0,["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(i.code)&&i.preventDefault()},this.keyUpHandler=i=>{this.keys[i.code]=!1},window.addEventListener("keydown",this.keyHandler),window.addEventListener("keyup",this.keyUpHandler),this.lastTimestamp=0,this.animFrame=requestAnimationFrame(i=>this.gameLoop(i))}unmount(){this.animFrame!==null&&(cancelAnimationFrame(this.animFrame),this.animFrame=null),window.removeEventListener("keydown",this.keyHandler),window.removeEventListener("keyup",this.keyUpHandler),this.canvas=null,this.ctx=null,this.onComplete=null,this.mobileContainer=null}buildMobileButtons(e){const t=document.createElement("div");t.style.cssText=`
      position: absolute; bottom: 0; left: 0; right: 0;
      display: flex; justify-content: space-between; align-items: flex-end;
      padding: 8px; pointer-events: none; z-index: 50;
    `;const n=(u,d,f)=>{const g=document.createElement("button");return g.textContent=u,g.style.cssText=`
        pointer-events: auto;
        background: rgba(255,255,255,0.18); border: 2px solid rgba(255,255,255,0.4);
        color: #fff; border-radius: 12px; font-size: 22px; font-weight: 900;
        cursor: pointer; touch-action: manipulation; user-select: none;
        -webkit-tap-highlight-color: transparent;
      `,g.addEventListener("touchstart",_=>{_.preventDefault(),d()},{passive:!1}),g.addEventListener("touchend",_=>{_.preventDefault(),f()},{passive:!1}),g.addEventListener("mousedown",()=>d()),g.addEventListener("mouseup",()=>f()),g.addEventListener("mouseleave",()=>f()),g},i=document.createElement("div");i.style.cssText="display:flex; flex-direction:column; gap:4px; pointer-events:none; align-items:flex-start;";const o=n("⏪",()=>{this.mobileRewindFired||(this.mobileRewind=!0,this.mobileRewindFired=!0)},()=>{this.mobileRewind=!1,this.mobileRewindFired=!1});o.style.cssText+="; width:48px; height:40px; font-size:16px;";const r=document.createElement("div");r.style.cssText="display:flex; gap:4px; pointer-events:none;";const a=n("◀",()=>{this.mobileLeft=!0},()=>{this.mobileLeft=!1});a.style.width="64px",a.style.height="64px";const l=n("▶",()=>{this.mobileRight=!0},()=>{this.mobileRight=!1});l.style.width="64px",l.style.height="64px",r.appendChild(a),r.appendChild(l),i.appendChild(o),i.appendChild(r);const c=n("▲",()=>{this.mobileJump=!0},()=>{this.mobileJump=!1});c.style.width="80px",c.style.height="64px";const h=n("▼",()=>{this.mobileDrop=!0},()=>{this.mobileDrop=!1});h.style.width="64px",h.style.height="64px",t.appendChild(i),t.appendChild(c),t.appendChild(h),e.appendChild(t),this.mobileContainer=t}initGame(){this.phase="playing",this.gameTime=0,this.movingPlatTime=0,this.movingPlatX=125,this.tsuyoshiTimer=0,this.tsuyoshiSpeech="I GOT IT!",this.resultTimer=0,this.crumble5ATimer=0,this.crumble5AState="solid",this.crumble5ARespawn=0,this.ropeAngle=0,this.ropeAngVel=0,this.ropeGrabbed=!1,this.windCycleTimer=0,this.windActive=!1,this.windAlpha=0,this.showGapHint=!0,this.gapHintTimer=8,this.comboPhase=0,this.comboTimer=0,this.comboFlashTimer=0,this.vaultFlashTimer=0,this.rewindFlashTimer=0,this.splatParticles=[],this.wallDustParticles=[],this.frameCount=0,this.hasShimmied=!1,this.pigeon={x:240,y:0,vx:60,platformIdx:3,jumpTimer:6,scaredTimer:0,flying:!1,flyTargetX:240,flyTargetY:0},this.snapPigeonToPlatform(),this.spawnAtLevel1()}spawnAtLevel1(){var n;const e=this.platforms[0],t=((n=this.jarrad)==null?void 0:n.lives)??3;this.jarrad={x:e.baseX+10,y:e.y-Gt,vx:0,vy:0,w:18,h:Gt,state:"standing",isCrouching:!1,lives:t,invincTimer:0,deathTimer:0,currentLevel:1,bucketAngle:0,wallRunTimer:0,wallRunDir:0,wallRunUsed:!1,rewindX:e.baseX+10,rewindY:e.y-Gt,rewindAvailable:!0},this.ropeGrabbed=!1,this.prevJarradY=this.jarrad.y,this.splatParticles=[],this.wallDustParticles=[]}gameLoop(e){if(!this.ctx||!this.canvas)return;const t=Math.min((e-(this.lastTimestamp||e))/1e3,.05);this.lastTimestamp=e,this.phase==="playing"&&this.update(t),this.draw(),this.prevKeys={...this.keys},this.animFrame=requestAnimationFrame(n=>this.gameLoop(n))}update(e){this.gameTime+=e,this.frameCount++,this.tsuyoshiTimer+=e,this.tsuyoshiTimer>3&&(this.tsuyoshiTimer=0,this.tsuyoshiSpeech=this.tsuyoshiSpeech==="I GOT IT!"?"HOLD ON!":"I GOT IT!"),this.showGapHint&&(this.gapHintTimer-=e,this.gapHintTimer<=0&&(this.showGapHint=!1)),this.movingPlatTime+=e;const t=this.movingPlatX;if(this.movingPlatX=125+45*Math.sin(2*Math.PI*this.movingPlatTime/3),this.updateWind(e),this.updateCrumble(e),this.updatePigeon(e),this.vaultFlashTimer>0&&(this.vaultFlashTimer-=e),this.rewindFlashTimer>0&&(this.rewindFlashTimer-=e),this.comboFlashTimer>0&&(this.comboFlashTimer-=e),this.comboPhase>0&&(this.comboTimer-=e,this.comboTimer<=0&&(this.comboPhase=0,this.comboTimer=0)),this.updateSplatParticles(e),this.updateWallDust(e),this.jarrad.state==="dead"){this.jarrad.deathTimer-=e,this.jarrad.deathTimer<=0&&this.spawnAtLevel1();return}this.jarrad.invincTimer>0&&(this.jarrad.invincTimer-=e),this.prevJarradY=this.jarrad.y,this.handleInput(e),this.applyPhysics(e,t),this.checkCollisions(),this.checkDeath(),this.checkWin();const n=this.jarrad.vx*.002;this.jarrad.bucketAngle+=(n-this.jarrad.bucketAngle)*8*e,this.jarrad.invincTimer<=0&&this.checkPigeonCollision(),this.jarrad.currentLevel=this.getCurrentLevel()}spawnSplatParticles(e,t){const n=5+Math.floor(Math.random()*2);for(let i=0;i<n;i++){const o=Math.PI*2*i/n+(Math.random()-.5)*.5,r=60+Math.random()*80;this.splatParticles.push({x:e,y:t,vx:Math.cos(o)*r,vy:Math.sin(o)*r-30,alpha:1,radius:3+Math.random()*4})}}updateSplatParticles(e){for(const t of this.splatParticles)t.x+=t.vx*e,t.y+=t.vy*e,t.vy+=200*e,t.alpha-=e/.4;this.splatParticles=this.splatParticles.filter(t=>t.alpha>0)}spawnWallDust(e,t){for(let n=0;n<3;n++)this.wallDustParticles.push({x:e+(Math.random()-.5)*10,y:t+Math.random()*20,alpha:.8,r:3+Math.random()*4})}updateWallDust(e){for(const t of this.wallDustParticles)t.alpha-=e/.4,t.y-=20*e;this.wallDustParticles=this.wallDustParticles.filter(t=>t.alpha>0)}updateWind(e){this.windCycleTimer+=e;const t=4,n=1.5,i=this.windCycleTimer%t;i<n?(this.windActive=!0,i<.3?this.windAlpha=i/.3:i>n-.3?this.windAlpha=(n-i)/.3:this.windAlpha=1):(this.windActive=!1,this.windAlpha=0)}updateCrumble(e){if(this.crumble5AState==="broken"){this.crumble5ARespawn-=e,this.crumble5ARespawn<=0&&(this.crumble5AState="solid",this.crumble5ATimer=0);return}const t=this.jarrad,n=this.platforms[5],i=t.y+t.h;t.state==="standing"&&Math.abs(i-n.y)<5&&t.x+t.w>n.baseX&&t.x<n.baseX+n.width?(this.crumble5ATimer+=e,this.crumble5ATimer>1.5?(this.crumble5AState="broken",this.crumble5ARespawn=8,this.crumble5ATimer=0,t.state==="standing"&&(t.state="falling",t.vy=0)):this.crumble5ATimer>1.2&&(this.crumble5AState="shaking",this.shakeNoise=(Math.random()-.5)*4)):(this.crumble5ATimer=Math.max(0,this.crumble5ATimer-e*2),this.crumble5ATimer<1.2&&(this.crumble5AState="solid"))}handleInput(e){const t=this.jarrad,n=this.keys.ArrowLeft||this.keys.KeyA||this.mobileLeft,i=this.keys.ArrowRight||this.keys.KeyD||this.mobileRight,o=this.isJustPressed("ArrowUp")||this.isJustPressed("KeyW")||this.isJustPressed("Space")||this.mobileJump,r=this.keys.ArrowUp||this.keys.KeyW||this.keys.Space||this.mobileJump,a=this.keys.ArrowDown||this.keys.KeyS||this.mobileDrop;if((this.isJustPressed("ShiftLeft")||this.isJustPressed("ShiftRight")||this.mobileRewind)&&!this.mobileRewindFired&&t.rewindAvailable&&t.state!=="dead"&&(this.mobileRewind&&(this.mobileRewindFired=!0),t.rewindAvailable=!1,t.x=t.rewindX,t.y=t.rewindY,t.vx=0,t.vy=0,t.state="falling",t.invincTimer=Bg,t.wallRunTimer=0,t.wallRunUsed=!1,this.rewindFlashTimer=.3,this.ropeGrabbed=!1),t.state==="wall-running"){t.wallRunTimer-=e,t.wallRunTimer<=0&&(t.vx=-t.wallRunDir*Dg,t.vy=Lg,t.state="jumping");return}if(t.state==="swinging"){if(o){const f=this.ropeAngVel,g=this.ropeAngle;t.vx=hn*f*Math.cos(g),t.vy=-hn*f*Math.sin(g),t.state="jumping",this.ropeGrabbed=!1}return}if((t.state==="jumping"||t.state==="falling")&&!this.ropeGrabbed){const f=t.x+t.w/2,g=t.y+t.h/2,_=Ei+hn*Math.cos(this.ropeAngle);if(Math.abs(f-rs)<15&&g>Ei&&g<_+30){const m=f-rs,p=g-Ei;this.ropeAngle=Math.atan2(m,p),this.ropeAngVel=t.vx/hn,t.state="swinging",this.ropeGrabbed=!0,this.comboPhase===1&&(this.comboPhase=2,this.comboTimer=os);return}}if((t.state==="jumping"||t.state==="falling")&&!t.wallRunUsed){const f=t.x<30&&n,g=t.x+t.w>370&&i;(f||g)&&(t.state="wall-running",t.wallRunDir=g?1:-1,t.wallRunTimer=Ig,t.wallRunUsed=!0,t.vx=0,t.vy=-120)}const c=t.x+t.w/2,h=c>120&&c<145&&t.y>180&&t.y+t.h<555,u=c>260&&c<285&&t.y>180&&t.y+t.h<370,d=h||u;if((t.state==="standing"||t.state==="climbing"||t.state==="falling")&&d){if(r){t.isCrouching=!1,t.h=Gt,t.state="climbing",t.vy=-Xl,t.vx=0;return}if(a){t.isCrouching=!1,t.h=Gt,t.state="climbing",t.vy=Xl,t.vx=0;return}}if(t.state==="climbing"&&(!d||!r&&!a)&&(t.vy=0,t.state="falling"),t.state==="standing"){if(a&&!d){t.isCrouching||(t.isCrouching=!0,t.y+=Gt-Ks,t.h=Ks),t.vx=0;return}else t.isCrouching&&(t.isCrouching=!1,t.y-=Gt-Ks,t.h=Gt);if(t.vx=0,n&&(t.vx=-$s),i&&(t.vx=$s),o){const f=Math.abs(t.vx)>Ug?Ng:1;t.vy=Wl*f,t.state="jumping",t.isCrouching=!1,t.h=Gt,this.comboPhase=1,this.comboTimer=os,this.hasShimmied=!1}}else if(t.state==="jumping"||t.state==="falling")t.vx=0,n&&(t.vx=-$s*.85),i&&(t.vx=$s*.85);else if(t.state==="hanging"){t.vx=0;const f=this.getHangingPlatform();if(f){const g=f.type==="moving"?this.movingPlatX:f.baseX,_=g+f.width;if(n){if(t.x-=ql*e,t.x+t.w<g+4){t.state="falling",t.vy=0;return}!this.hasShimmied&&this.comboPhase===2&&(this.hasShimmied=!0,this.comboPhase=3,this.comboTimer=os)}if(i){if(t.x+=ql*e,t.x>_-4){t.state="falling",t.vy=0;return}!this.hasShimmied&&this.comboPhase===2&&(this.hasShimmied=!0,this.comboPhase=3,this.comboTimer=os)}}r&&(t.y-=18,t.vy=0,t.state="falling",this.comboPhase===3&&(this.comboPhase=4,this.comboFlashTimer=2,this.gameTime=Math.max(0,this.gameTime-3))),a&&(t.y+=5,t.state="falling")}}getHangingPlatform(){const e=this.jarrad,t=e.y;for(let n=0;n<this.platforms.length;n++){const i=this.platforms[n];if(i.type==="crumbling"&&this.crumble5AState==="broken")continue;const o=i.type==="moving"?this.movingPlatX:i.baseX,r=i.y+i.height;if(Math.abs(t-r)<12&&e.x+e.w>o+2&&e.x<o+i.width-2)return i}return null}isJustPressed(e){return!!this.keys[e]&&!this.prevKeys[e]}applyPhysics(e,t){const n=this.jarrad;if(n.state==="wall-running"){n.vy=-120,n.y+=n.vy*e,n.wallRunDir===1?n.x=Math.min(De-n.w-5,Math.max(De-n.w-30,n.x)):n.x=Math.max(5,Math.min(30,n.x)),this.frameCount%4===0&&this.spawnWallDust(n.wallRunDir===1?n.x+n.w:n.x,n.y+n.h/2);return}if(n.state==="swinging"){this.ropeAngVel+=-2.962962962962963*Math.sin(this.ropeAngle)*e,this.ropeAngVel*=.995,this.ropeAngle+=this.ropeAngVel*e,this.ropeAngle=Math.max(-Math.PI*.6,Math.min(Math.PI*.6,this.ropeAngle)),n.x=rs+hn*Math.sin(this.ropeAngle)-n.w/2,n.y=Ei+hn*Math.cos(this.ropeAngle)-n.h;return}if(n.state==="climbing"){n.y+=n.vy*e;return}if(n.state!=="hanging"&&(n.state!=="standing"&&(n.vy=Math.min(n.vy+Cg*e,Rg)),this.windActive&&n.y<270&&n.state!=="standing"?n.vx-=30*e:this.windActive&&n.y<270&&n.state==="standing"&&(n.vx-=15*e),n.x+=n.vx*e,n.y+=n.vy*e,n.x=Math.max(5,Math.min(De-n.w-5,n.x)),n.state==="standing")){const i=this.platforms[4],o=n.y+n.h;if(Math.abs(o-i.y)<5&&n.x+n.w>this.movingPlatX&&n.x<this.movingPlatX+i.width){const r=this.movingPlatX-t;n.x+=r,n.x=Math.max(5,Math.min(De-n.w-5,n.x))}}}checkCollisions(){const e=this.jarrad;if(e.state==="dead"||e.state==="swinging"||e.state==="wall-running")return;this.keys.ArrowLeft||this.keys.KeyA||this.mobileLeft,this.keys.ArrowRight||this.keys.KeyD||this.mobileRight;const t=this.keys.ArrowUp||this.keys.KeyW||this.keys.Space||this.mobileJump;for(let n=0;n<this.platforms.length;n++){const i=this.platforms[n];if(i.type==="crumbling"&&this.crumble5AState==="broken")continue;const o=i.type==="moving"?this.movingPlatX:i.baseX,r=i.y,a=o+i.width,l=r+i.height,c=e.y+e.h,h=e.x,u=e.x+e.w;if((e.state==="jumping"||e.state==="falling"||e.state==="climbing")&&e.vy>=0&&c>=r&&c<=l+12&&u>o+2&&h<a-2){e.y-this.prevJarradY>Og&&this.spawnSplatParticles(e.x+e.w/2,e.y+e.h),e.y=r-e.h,e.vy=0,e.vx=0,e.state="standing",e.isCrouching&&(e.y+=Gt-Ks),e.rewindX=e.x,e.rewindY=e.y,e.wallRunUsed=!1,this.comboPhase<4?(this.comboPhase=0,this.comboTimer=0):this.comboPhase===4&&(this.comboPhase=0);break}const d=e.y;if(e.state==="jumping"&&e.vy<0&&d<=l&&d>=r-10&&u>o+10&&h<a-10){e.vy=0,e.y=l,e.state="hanging",this.comboPhase===1&&(this.comboPhase=2,this.comboTimer=os,this.hasShimmied=!1);break}}if(e.state==="standing"){let n=!1;for(let i=0;i<this.platforms.length;i++){const o=this.platforms[i];if(o.type==="crumbling"&&this.crumble5AState==="broken")continue;const r=o.type==="moving"?this.movingPlatX:o.baseX,a=e.y+e.h;if(Math.abs(a-o.y)<5&&e.x+e.w>r+1&&e.x<r+o.width-1){n=!0;break}}n||(e.state="falling")}if(e.state==="standing"||e.state==="falling"){const n=e.y+e.h,i=this.platforms[1];if(Math.abs(n-i.y)<6){const o=On.x+On.w,r=e.x+e.w,a=e.x,l=e.y,c=r>On.x&&a<o,h=On.y;c&&l<h&&(!e.isCrouching&&Math.abs(e.vx)>=Fg&&t?(e.vy=Wl*.7,e.y-=6,e.state="jumping",this.vaultFlashTimer=1.2):e.isCrouching||(e.vx=e.vx!==0?-e.vx*.5:0,e.x+e.w/2<On.x+On.w/2?e.x=On.x-e.w-1:e.x=o+1))}}}checkDeath(){const e=this.jarrad;e.state!=="dead"&&(e.y+e.h>=640&&this.killJarrad(),e.y<-120&&(e.y=-60,e.vy=0,e.state="falling"))}killJarrad(){const e=this.jarrad;e.state!=="dead"&&(e.lives--,e.state="dead",e.deathTimer=1.2,e.rewindAvailable=!0,this.ropeGrabbed=!1,e.lives<=0&&setTimeout(()=>{this.retried?(this.phase="result",this.finishGame(!1)):this.phase="lost"},1300))}checkWin(){const e=this.jarrad;if(e.state==="dead")return;const t=this.platforms[7],n=e.y+e.h;Math.abs(n-t.y)<6&&e.x+e.w>t.baseX&&e.x<t.baseX+t.width&&(this.phase="won",setTimeout(()=>this.finishGame(!0),100))}getCurrentLevel(){const e=this.jarrad,t=e.y+e.h;let n=1,i=1/0;for(const o of this.platforms){const r=Math.abs(t-o.y);r<i&&(i=r,n=o.level)}return n}snapPigeonToPlatform(){const e=this.platforms[this.pigeon.platformIdx],t=e.type==="moving"?this.movingPlatX:e.baseX;this.pigeon.y=e.y-20,this.pigeon.x=Math.max(t+4,Math.min(t+e.width-20,this.pigeon.x))}updatePigeon(e){const t=this.pigeon;if(t.scaredTimer>0&&(t.scaredTimer-=e),t.flying){const n=t.flyTargetX-t.x,i=t.flyTargetY-t.y,o=Math.sqrt(n*n+i*i);o<10?(t.flying=!1,this.snapPigeonToPlatform()):(t.x+=n/o*120*e,t.y+=i/o*120*e);return}if(t.jumpTimer-=e,t.jumpTimer<=0){const n=this.getJarradPlatformIdx(),i=[1,2,3,4,5,6].filter(d=>!(d===t.platformIdx||d===5&&this.crumble5AState==="broken")),o=i.filter(d=>d!==n),r=o.length>0?o:i,a=r[Math.floor(Math.random()*r.length)],l=this.platforms[a],c=l.type==="moving"?this.movingPlatX:l.baseX,h=this.platforms[t.platformIdx].type==="moving"?this.movingPlatX:this.platforms[t.platformIdx].baseX;h<190&&c>215||h>215&&c<190||Math.random()<.3?(t.flying=!0,t.platformIdx=a,t.flyTargetX=c+20,t.flyTargetY=l.y-20,t.jumpTimer=5+Math.random()*3):(t.platformIdx=a,t.jumpTimer=5+Math.random()*3,this.snapPigeonToPlatform())}if(!t.flying){const n=this.platforms[t.platformIdx],i=n.type==="moving"?this.movingPlatX:n.baseX,o=i+n.width;t.x+=t.vx*e,t.x<=i+2&&(t.x=i+2,t.vx=60),t.x>=o-20&&(t.x=o-20,t.vx=-60),t.y=n.y-20+Math.sin(this.gameTime*3.5+t.platformIdx)*3}}getJarradPlatformIdx(){const e=this.jarrad,t=e.y+e.h;let n=0,i=1/0;for(let o=0;o<this.platforms.length;o++){const r=Math.abs(t-this.platforms[o].y);r<i&&(i=r,n=o)}return n}checkPigeonCollision(){const e=this.jarrad,t=this.pigeon;if(t.scaredTimer>0||t.flying||this.getJarradPlatformIdx()!==t.platformIdx)return;const i=e.y+e.h,o=this.platforms[t.platformIdx];Math.abs(i-o.y)>12||e.x<t.x+18&&e.x+e.w>t.x&&(e.invincTimer=Pg,t.scaredTimer=1.5,t.jumpTimer=0,e.lives--,e.lives<=0&&(e.state="dead",e.deathTimer=1.2,setTimeout(()=>{this.retried?(this.phase="result",this.finishGame(!1)):this.phase="lost"},1300)))}draw(){if(!this.ctx)return;const e=this.ctx;e.clearRect(0,0,De,ft),this.drawBackground(e),this.drawRope(e),this.drawScaffold(e),this.drawPlatforms(e),this.drawDropSheet(e),this.drawGapHint(e),this.drawWindEffect(e),this.drawTsuyoshi(e),this.drawPigeon(e),this.drawWallDust(e),this.drawSplatParticles(e),this.drawJarrad(e),this.drawHUD(e),this.drawFlashTexts(e),this.drawRewindFlash(e),this.phase==="won"?this.drawWinOverlay(e):this.phase==="lost"&&this.drawLostOverlay(e)}drawWallDust(e){for(const t of this.wallDustParticles)e.save(),e.globalAlpha=Math.max(0,t.alpha),e.fillStyle="#E8E0D0",e.beginPath(),e.arc(t.x,t.y,t.r,0,Math.PI*2),e.fill(),e.restore()}drawSplatParticles(e){for(const t of this.splatParticles)e.save(),e.globalAlpha=Math.max(0,t.alpha),e.fillStyle="#FFFFFF",e.beginPath(),e.arc(t.x,t.y,t.radius,0,Math.PI*2),e.fill(),e.restore()}drawFlashTexts(e){if(this.vaultFlashTimer>0){const t=Math.min(1,this.vaultFlashTimer/.4);e.save(),e.globalAlpha=t,e.fillStyle="#FFFF44",e.font="bold 28px system-ui, sans-serif",e.textAlign="center",e.shadowColor="#FF8800",e.shadowBlur=8,e.fillText("VAULT! 🏃",De/2,200),e.restore()}if(this.comboFlashTimer>0){const t=Math.min(1,this.comboFlashTimer/.5);e.save(),e.globalAlpha=t,e.fillStyle="#FF6600",e.font="bold 32px system-ui, sans-serif",e.textAlign="center",e.shadowColor="#FFDD00",e.shadowBlur=12,e.fillText("COMBO! 🔥 +3s",De/2,160),e.restore()}}drawRewindFlash(e){if(this.rewindFlashTimer<=0)return;const t=this.rewindFlashTimer/.3;e.save(),e.globalAlpha=t*.85,e.fillStyle="#FFFFFF",e.fillRect(0,0,De,ft),e.restore()}drawCloud(e,t,n,i,o){e.save(),e.fillStyle="rgba(255,255,255,0.90)";const r=i/2,a=o/2;e.beginPath(),e.ellipse(t+r,n+a,r,a,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(t+r*.35,n+a*1.1,r*.55,a*.7,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(t+r*1.65,n+a*1.1,r*.55,a*.7,0,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(t+r,n+a*.4,r*.5,a*.65,0,0,Math.PI*2),e.fill(),e.restore()}drawBackground(e){const t=e.createLinearGradient(0,0,0,500);t.addColorStop(0,"#1A6DB5"),t.addColorStop(.6,"#4A9ED4"),t.addColorStop(1,"#A8D4ED"),e.fillStyle=t,e.fillRect(0,0,De,ft);const n=this.gameTime*12%(De+130)-65,i=(this.gameTime*8+150)%(De+130)-65,o=(this.gameTime*6+310)%(De+130)-65;this.drawCloud(e,n,28,90,36),this.drawCloud(e,i,52,70,28),this.drawCloud(e,o,14,80,32),e.fillStyle="#9A9790",e.fillRect(0,160,65,465),e.fillStyle="#2A3A50";for(let v=0;v<5;v++)for(let P=0;P<2;P++)e.fillRect(8+P*25,175+v*55,14,20);e.fillStyle="#9A9790",e.fillRect(335,120,65,505),e.fillStyle="#2A3A50";for(let v=0;v<6;v++)for(let P=0;P<2;P++)e.fillRect(342+P*25,135+v*55,14,20);const r=62,a=276,l=88,c=e.createLinearGradient(r,l,r+a,l+537);c.addColorStop(0,"#EAE4DA"),c.addColorStop(.6,"#DED8CE"),c.addColorStop(1,"#D8D0C4"),e.fillStyle=c,e.fillRect(r,l,a,537),e.fillStyle="#E0D8CC",e.fillRect(r-4,l-10,a+8,16),e.fillStyle="#C8C0B4",e.fillRect(r-4,l+4,a+8,4),e.fillStyle="#D0C8BC";for(let v=r+4;v<r+a-4;v+=14)e.fillRect(v,l-8,9,10);const h=[100,185,270,360,450,540];for(const v of h)e.strokeStyle="#C4BDB2",e.lineWidth=2,e.beginPath(),e.moveTo(r,v),e.lineTo(r+a,v),e.stroke(),e.strokeStyle="rgba(0,0,0,0.07)",e.lineWidth=1,e.beginPath(),e.moveTo(r,v+2),e.lineTo(r+a,v+2),e.stroke();const u=[105,192,278,368],d=[70,122,235,287],f=30,g=42;for(const v of u)for(const P of d){e.fillStyle="#C4BDB2",e.fillRect(P-4,v-4,f+8,g+8);const E=e.createLinearGradient(P,v,P+f,v+g);E.addColorStop(0,"#2A4A6A"),E.addColorStop(1,"#3A6080"),e.fillStyle=E,e.fillRect(P,v,f,g),e.strokeStyle="#FFFFFF",e.lineWidth=1.5,e.beginPath(),e.moveTo(P,v+g/2),e.lineTo(P+f,v+g/2),e.stroke(),e.beginPath(),e.moveTo(P+f/2,v),e.lineTo(P+f/2,v+g),e.stroke(),e.fillStyle="rgba(255,255,255,0.12)",e.fillRect(P+1,v+1,f/2-1,g/2-1),e.fillStyle="#D0C8BC",e.fillRect(P-5,v+g,f+10,5)}const _=162,m=462,p=36,b=90;e.fillStyle="#C4BDB2",e.fillRect(_-6,m-6,p+12,b+6),e.fillStyle="#3A2510",e.fillRect(_,m,p,b),e.fillStyle="#C4BDB2",e.beginPath(),e.arc(_+p/2,m,p/2+4,Math.PI,0),e.fill(),e.fillStyle="#4A7090",e.beginPath(),e.arc(_+p/2,m,p/2,Math.PI,0),e.fill(),e.strokeStyle="#FFFFFF",e.lineWidth=1;const S=_+p/2;for(let v=0;v<4;v++){const P=Math.PI+(v+.5)*(Math.PI/4);e.beginPath(),e.moveTo(S,m),e.lineTo(S+Math.cos(P)*p/2,m+Math.sin(P)*p/2),e.stroke()}e.strokeStyle="#5A3820",e.lineWidth=1,e.strokeRect(_+3,m+5,p/2-5,b*.35),e.strokeRect(_+p/2+2,m+5,p/2-5,b*.35),e.strokeRect(_+3,m+b*.42,p/2-5,b*.5),e.strokeRect(_+p/2+2,m+b*.42,p/2-5,b*.5),e.fillStyle="#B8B0A4",e.fillRect(_-8,m+b,p+16,6),e.save(),e.fillStyle="#F0EBE0",e.fillRect(260,l+10,72,100),e.strokeStyle="rgba(200,190,175,0.5)",e.lineWidth=.8;for(let v=l+14;v<l+108;v+=6)e.beginPath(),e.moveTo(262,v),e.lineTo(330,v),e.stroke();e.fillStyle="#8A7860",e.font="bold 7px system-ui",e.textAlign="center",e.fillText("MARBELLINO",296,l+60),e.fillText("IN PROGRESS",296,l+70),e.restore(),e.save(),e.strokeStyle="#2A2A2A",e.lineWidth=1.5,e.beginPath(),e.moveTo(r,460),e.lineTo(r+a,460),e.stroke(),e.beginPath(),e.moveTo(r,490),e.lineTo(r+a,490),e.stroke();for(let v=r+4;v<r+a;v+=8)e.beginPath(),e.moveTo(v,460),e.lineTo(v,490),e.stroke();e.lineWidth=.8,e.strokeStyle="#1A1A1A";for(let v=r+4;v<r+a-8;v+=16)e.beginPath(),e.moveTo(v,460),e.lineTo(v+8,475),e.lineTo(v+16,460),e.stroke(),e.beginPath(),e.moveTo(v,490),e.lineTo(v+8,475),e.lineTo(v+16,490),e.stroke();e.restore(),e.fillStyle="#B0A898",e.fillRect(0,625,De,22),e.strokeStyle="#9A9288",e.lineWidth=1;for(let v=0;v<De;v+=50)e.beginPath(),e.moveTo(v,625),e.lineTo(v,647),e.stroke();e.beginPath(),e.moveTo(0,636),e.lineTo(De,636),e.stroke(),e.save(),e.translate(12,590),e.fillStyle="#D4A044",e.beginPath(),e.moveTo(0,0),e.lineTo(30,0),e.lineTo(26,35),e.lineTo(4,35),e.closePath(),e.fill(),e.strokeStyle="#A07030",e.lineWidth=1,e.stroke(),e.strokeStyle="#888",e.lineWidth=2,e.beginPath(),e.arc(15,-2,10,Math.PI,0),e.stroke(),e.fillStyle="#7A5020",e.font="bold 7px system-ui",e.textAlign="center",e.fillText("TEM",15,20),e.restore(),e.fillStyle="#F0EAD8",e.fillRect(0,647,De,ft-647),e.fillStyle="#C8BEA8",e.fillRect(0,647,De,6),e.strokeStyle="rgba(255,250,240,0.5)",e.lineWidth=1;for(let v=0;v<5;v++){const P=660+v*8,E=Math.sin(this.gameTime*2.5+v*1.2)*6;e.beginPath(),e.moveTo(10+E,P),e.lineTo(De-10+E,P),e.stroke()}e.fillStyle="#8A7860",e.font="bold 10px system-ui",e.textAlign="center",e.fillText("🪣 PLASTER TROUGH",De/2,685)}drawRope(e){const t=rs,n=Ei,i=this.ropeAngle,o=t+hn*Math.sin(i),r=n+hn*Math.cos(i);e.save(),e.strokeStyle="#8B5A2B",e.lineWidth=5,e.lineCap="round",e.beginPath();const a=(t+o)/2+Math.sin(i)*10,l=(n+r)/2+20;e.moveTo(t,n),e.quadraticCurveTo(a,l,o,r),e.stroke(),e.fillStyle="#6B4520",e.strokeStyle="#4A3010",e.lineWidth=1.5,e.beginPath(),e.arc(o,r,5,0,Math.PI*2),e.fill(),e.stroke(),e.restore()}drawScaffold(e){const t=[72,186,214,328],n=[90,100,185,270,360,450,540,625],i=[[72,186],[214,328]];e.save();for(const a of t){const l=e.createLinearGradient(a-2,0,a+2,0);l.addColorStop(0,"#A0A8AC"),l.addColorStop(.35,"#E0E8EC"),l.addColorStop(.65,"#E0E8EC"),l.addColorStop(1,"#A0A8AC"),e.fillStyle=l,e.fillRect(a-2,88,4,537),e.fillStyle="#8A9298",e.fillRect(a-8,622,16,4)}for(const a of n)for(const[l,c]of i){const h=e.createLinearGradient(0,a-1,0,a+3);h.addColorStop(0,"#D8E0E4"),h.addColorStop(1,"#A0A8AC"),e.fillStyle=h,e.fillRect(l-2,a-1,c-l+4,3),e.fillStyle="#7A8890",e.beginPath(),e.arc(l,a+.5,3.5,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(c,a+.5,3.5,0,Math.PI*2),e.fill()}e.strokeStyle="#9AAAB2",e.lineWidth=1.5;const o=[[90,185],[185,270],[270,360],[360,450],[450,540],[540,625]];for(const[a,l]of o)for(const[c,h]of i)e.beginPath(),e.moveTo(c,a),e.lineTo(h,l),e.stroke(),e.beginPath(),e.moveTo(h,a),e.lineTo(c,l),e.stroke();const r=[177,262,352,442,532];for(const a of r)for(const[l,c]of i)e.fillStyle="rgba(192,208,216,0.7)",e.fillRect(l,a,c-l,2);e.restore(),this.drawLadder(e,130,185,540),this.drawLadder(e,270,185,360)}drawLadder(e,t,n,i){e.save(),e.strokeStyle="#B0B8BC",e.lineWidth=2.5,e.beginPath(),e.moveTo(t-5,n),e.lineTo(t-5,i),e.stroke(),e.beginPath(),e.moveTo(t+5,n),e.lineTo(t+5,i),e.stroke();for(let o=n+4;o<=i;o+=18){const r=e.createLinearGradient(t-7,o,t+7,o+3);r.addColorStop(0,"#909898"),r.addColorStop(.4,"#D8E0E4"),r.addColorStop(1,"#909898"),e.fillStyle=r,e.fillRect(t-7,o,14,3)}e.restore()}drawPlatforms(e){for(let t=0;t<this.platforms.length;t++){const n=this.platforms[t];if(n.type==="crumbling"&&this.crumble5AState==="broken")continue;const i=n.type==="moving"?this.movingPlatX:n.baseX;let o=0;n.type==="crumbling"&&this.crumble5AState==="shaking"&&(o=this.shakeNoise);const r=i+o,a=n.y,l=n.width,c=n.height;e.save();const h=4,u=c,d=l/h;let f="#C8A064",g="#D4B07A",_="#9A7848";if(n.type==="moving"&&(f="#B0A8D8",g="#C0BAE8",_="#8880B8"),n.type==="crumbling"&&(f="#A87840",g="#B8885A",_="#785028"),n.type==="win"){const m=e.createLinearGradient(r,a,r+l,a);m.addColorStop(0,"#FFD700"),m.addColorStop(1,"#FFA500"),e.fillStyle=m,e.fillRect(r,a,l,c),f="#FFD700",g="#FFE060",_="#CC8800"}for(let m=0;m<h;m++){const p=r+m*d;e.fillStyle=f,e.fillRect(p,a,d-1,u),e.fillStyle=g,e.fillRect(p+d*.3,a,d*.35,u),e.fillStyle=_,e.fillRect(p+d-1,a,1,u),e.strokeStyle="rgba(0,0,0,0.08)",e.lineWidth=.5;for(let b=1;b<4;b++){const S=p+d/4*b;e.beginPath(),e.moveTo(S,a),e.lineTo(S,a+u),e.stroke()}}n.type==="crumbling"&&(e.strokeStyle="#604020",e.lineWidth=1,e.beginPath(),e.moveTo(r+22,a),e.lineTo(r+30,a+c),e.stroke(),e.beginPath(),e.moveTo(r+58,a),e.lineTo(r+64,a+c),e.stroke(),e.beginPath(),e.moveTo(r+85,a),e.lineTo(r+90,a+c),e.stroke()),e.fillStyle=_,e.fillRect(r,a-8,4,8),e.fillRect(r+l-4,a-8,4,8),e.strokeStyle=_,e.lineWidth=2,e.beginPath(),e.moveTo(r,a-28),e.lineTo(r+l,a-28),e.stroke(),n.type==="moving"&&(e.fillStyle="rgba(240,240,255,0.85)",e.font="bold 9px system-ui",e.textAlign="center",e.fillText("↔",r+l/2,a+c-1)),n.type==="win"&&(e.fillStyle="#333",e.font="bold 9px system-ui, sans-serif",e.textAlign="center",e.fillText("🏁 DELIVER",r+l/2,a+6)),e.restore()}}drawDropSheet(e){const{x:t,y:n,w:i,h:o}=On;e.save(),e.fillStyle="#F0EDE5",e.strokeStyle="#C8C0A0",e.lineWidth=1,e.beginPath(),e.moveTo(t,n),e.lineTo(t+i,n),e.lineTo(t+i,n+o-4),e.quadraticCurveTo(t+i*.75,n+o+3,t+i*.5,n+o),e.quadraticCurveTo(t+i*.25,n+o-3,t,n+o-4),e.closePath(),e.fill(),e.stroke(),e.strokeStyle="rgba(0,0,0,0.12)",e.lineWidth=1;for(let r=1;r<4;r++){const a=t+i/4*r;e.beginPath(),e.moveTo(a,n),e.lineTo(a+2,n+o-6),e.stroke()}e.fillStyle="#888866",e.font="bold 7px system-ui",e.textAlign="center",e.fillText("DUCK ↓ / VAULT →",t+i/2,n-3),e.restore()}drawGapHint(e){if(!this.showGapHint)return;const t=Math.min(1,this.gapHintTimer/2)*Math.abs(Math.sin(this.gameTime*3));e.save(),e.globalAlpha=t,e.fillStyle="#FFEE44",e.font="bold 11px system-ui",e.textAlign="center",e.fillText("→ JUMP! →",200,400),e.strokeStyle="#FFEE44",e.lineWidth=2,e.beginPath(),e.moveTo(183,390),e.lineTo(217,390),e.moveTo(210,385),e.lineTo(217,390),e.lineTo(210,395),e.stroke(),e.restore()}drawWindEffect(e){if(!(!this.windActive||this.windAlpha<=0)){e.save(),e.globalAlpha=this.windAlpha*.35,e.strokeStyle="#AADDFF",e.lineWidth=2;for(let t=0;t<8;t++){const n=130+t*30+Math.sin(this.gameTime*4+t)*5,i=this.gameTime*120%60,o=30+Math.random()*40;e.beginPath(),e.moveTo(De-i,n),e.lineTo(De-i-o,n),e.stroke()}e.restore()}}drawTsuyoshi(e){e.fillStyle="#1A1A18",e.fillRect(81,575,18,30),e.fillStyle="#C8A060",e.save(),e.translate(81,585),e.rotate(-.6),e.fillRect(-4,-18,7,20),e.restore(),e.save(),e.translate(99,585),e.rotate(.3),e.fillRect(-3,-16,7,18),e.restore(),e.fillStyle="#C8A060",this.roundRect(e,83,561,14,14,3),e.fill(),e.fillStyle="#0A0A08",e.fillRect(88,549,4,14),e.fillRect(89,543,2,8),e.fillStyle="#0A0A08",e.fillRect(85,567,3,3),e.fillRect(92,567,3,3);const i=this.tsuyoshiSpeech,o=50,r=525,a=80,l=22;e.fillStyle="#FFFFFFEE",this.roundRect(e,o,r,a,l,6),e.fill(),e.strokeStyle="#CCCCCC",e.lineWidth=1,e.stroke(),e.fillStyle="#FFFFFFEE",e.beginPath(),e.moveTo(85,r+l),e.lineTo(95,r+l),e.lineTo(90,r+l+8),e.closePath(),e.fill(),e.fillStyle="#333333",e.font="bold 8px system-ui, sans-serif",e.textAlign="center",e.fillText(i,o+a/2,r+15)}drawJarrad(e){const t=this.jarrad;if(t.invincTimer>0&&Math.floor(t.invincTimer*10)%2===0&&(e.globalAlpha=.4),t.state==="dead"){e.save(),e.translate(t.x+t.w/2,t.y+t.h),e.rotate(Math.PI/2),this.drawJarradShape(e,0,-Gt/2,!1,!1),e.fillStyle="rgba(70,130,180,0.6)",e.beginPath(),e.arc(-10,8,12,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(10,4,8,0,Math.PI*2),e.fill(),e.restore(),e.globalAlpha=1;return}if(t.state==="swinging"){const i=rs+hn*Math.sin(this.ropeAngle)-t.w/2,o=Ei+hn*Math.cos(this.ropeAngle);e.save(),e.translate(i+t.w/2,o),e.rotate(this.ropeAngle*.3),this.drawJarradShape(e,-t.w/2,-Gt,!1,!1),e.restore()}else if(t.state==="wall-running"){e.save(),e.translate(t.x+t.w/2,t.y+t.h/2);const i=t.wallRunDir;e.rotate(Math.PI/6*i),this.drawJarradShape(e,-t.w/2,-t.h/2,!1,!1),e.restore()}else if(t.state==="hanging"){e.save(),e.translate(t.x+t.w/2,t.y),this.drawJarradShape(e,-t.w/2,0,!1,!1);const i=t.w/2+2,o=Gt*.6;e.save(),e.translate(i,o);const r=Math.sin(this.gameTime*4)*.3;e.rotate(r+t.bucketAngle),e.strokeStyle="#888",e.lineWidth=1,e.beginPath(),e.moveTo(0,0),e.lineTo(0,8),e.stroke(),e.fillStyle="#C49A7A",e.fillRect(-5,8,10,10),e.strokeStyle="#A07050",e.lineWidth=1,e.strokeRect(-5,8,10,10),e.fillStyle="#F0ECE4",e.fillRect(-3,9,6,4),e.restore(),e.restore()}else{const i=t.state==="standing"&&Math.abs(t.vx)>10;this.drawJarradShape(e,t.x,t.y,t.isCrouching,i)}if(e.globalAlpha=1,t.state!=="swinging"&&t.state!=="hanging"){const i=t.x+t.w+2,o=t.y+(t.isCrouching?10:20);e.save(),e.translate(i,o),e.rotate(t.bucketAngle),e.strokeStyle="#888",e.lineWidth=1,e.beginPath(),e.moveTo(0,0),e.lineTo(0,8),e.stroke(),e.fillStyle="#C49A7A",e.fillRect(-5,8,10,10),e.strokeStyle="#A07050",e.lineWidth=1,e.strokeRect(-5,8,10,10),e.fillStyle="#F0ECE4",e.fillRect(-3,9,6,4),e.restore()}}drawJarradShape(e,t,n,i,o){if(i){e.fillStyle="#111111",e.fillRect(t+1,n+12,16,12),e.fillStyle="#FF8C00",e.fillRect(t+1,n+12,5,12),e.fillRect(t+12,n+12,5,12),e.fillStyle="#C8C8C8",e.fillRect(t+1,n+15,16,2),e.fillRect(t+1,n+20,16,2),e.fillStyle="#7A5020",e.fillRect(t+1,n+22,16,3),e.fillStyle="#C8A080",this.roundRect(e,t+2,n+2,14,12,3),e.fill(),e.fillStyle="#FFD700",e.fillRect(t,n-4,18,8),e.fillRect(t-2,n+1,22,3),e.fillStyle="rgba(0,0,0,0.12)",e.fillRect(t+1,n-3,16,3),e.strokeStyle="#1A1A1A",e.lineWidth=1.5,e.strokeRect(t+3,n+5,4,3),e.strokeRect(t+9,n+5,4,3),e.fillStyle="#2A1808",e.fillRect(t+4,n+11,9,3),e.fillStyle="#2A2A2A",e.fillRect(t+1,n+25,7,7),e.fillRect(t+10,n+25,7,7);return}e.fillStyle="#111111",e.fillRect(t+1,n+14,16,24),e.fillStyle="#FF8C00",e.fillRect(t+1,n+14,5,22),e.fillRect(t+12,n+14,5,22),e.fillRect(t+4,n+14,3,8),e.fillRect(t+11,n+14,3,8),e.fillStyle="#C8C8C8",e.fillRect(t+1,n+19,16,2),e.fillRect(t+1,n+27,16,2),e.fillStyle="rgba(255,255,255,0.6)",e.beginPath(),e.arc(t+5,n+23,2,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(t+13,n+32,1.5,0,Math.PI*2),e.fill(),e.fillStyle="#7A5020",e.fillRect(t+1,n+34,16,4),e.fillStyle="#5A3810",e.fillRect(t+2,n+35,4,3),e.fillRect(t+12,n+35,4,3),e.fillStyle="#C8A080",e.fillRect(t-3,n+14,4,16),e.fillRect(t+17,n+14,4,16),e.fillStyle="#C8A080",this.roundRect(e,t+2,n,14,14,3),e.fill(),e.fillStyle="#FFD700",this.roundRect(e,t+1,n-10,16,12,4),e.fill(),e.fillRect(t-2,n,22,3),e.fillStyle="rgba(0,0,0,0.1)",e.fillRect(t+2,n-9,14,4),e.fillStyle="#CC9900",e.font="bold 5px system-ui",e.textAlign="center",e.fillText("TEM",t+9,n-2),e.strokeStyle="#1A1A1A",e.lineWidth=1.5,e.strokeRect(t+3,n+4,4,3),e.strokeRect(t+9,n+4,4,3),e.beginPath(),e.moveTo(t+7,n+5.5),e.lineTo(t+9,n+5.5),e.stroke(),e.fillStyle="#1A1A1A",e.fillRect(t+4,n+5,2,2),e.fillRect(t+10,n+5,2,2),e.fillStyle="#2A1808",e.fillRect(t+4,n+10,9,4),e.fillStyle="#2A2A2A",o?Math.floor(this.frameCount/8)%2===0?(e.fillRect(t+1,n+38,7,14),e.fillRect(t+10,n+44,7,8)):(e.fillRect(t+1,n+44,7,8),e.fillRect(t+10,n+38,7,14)):(e.fillRect(t+2,n+38,7,14),e.fillRect(t+9,n+38,7,14)),e.fillStyle="#1A1A1A",e.fillRect(t+1,n+50,9,3),e.fillRect(t+8,n+50,9,3)}drawPigeon(e){const t=this.pigeon,n=t.vx>=0?1:-1;if(e.save(),e.translate(t.x+9,t.y+10),n<0&&e.scale(-1,1),e.fillStyle="#888888",this.roundRect(e,-8,-6,16,12,6),e.fill(),e.fillStyle="#666666",this.roundRect(e,-6,-4,12,6,4),e.fill(),t.flying){const i=Math.sin(this.gameTime*15)*.4;e.save(),e.rotate(i),e.fillStyle="#777777",e.fillRect(-8,-10,16,5),e.restore()}else{const i=Math.sin(this.gameTime*6)*.12;e.save(),e.rotate(i),e.fillStyle="#777777",e.fillRect(-8,-8,16,4),e.restore()}e.fillStyle="#AAAAAA",this.roundRect(e,4,-10,10,9,4),e.fill(),e.fillStyle="#FF4400",e.beginPath(),e.arc(11,-7,2,0,Math.PI*2),e.fill(),e.fillStyle="#000",e.beginPath(),e.arc(11,-7,1,0,Math.PI*2),e.fill(),e.fillStyle="#CC9900",e.beginPath(),e.moveTo(14,-6),e.lineTo(18,-4),e.lineTo(14,-3),e.closePath(),e.fill(),e.strokeStyle="#CC9900",e.lineWidth=1.5,e.beginPath(),e.moveTo(-2,6),e.lineTo(-2,12),e.stroke(),e.beginPath(),e.moveTo(3,6),e.lineTo(3,12),e.stroke(),e.restore()}drawHUD(e){e.fillStyle="rgba(0,0,0,0.55)",e.fillRect(0,0,De,36),e.textAlign="left";for(let i=0;i<3;i++)this.drawHeart(e,8+i*22,18,8,i<this.jarrad.lives?"#FF4060":"#555555");e.font="14px system-ui",e.textAlign="left",e.globalAlpha=this.jarrad.rewindAvailable?1:.35,e.fillText("🗡️",72,22),e.globalAlpha=1,e.fillStyle="#FFFFFF",e.font="bold 13px system-ui, sans-serif",e.textAlign="center",e.fillText(`LEVEL ${this.jarrad.currentLevel}/6`,De/2,22);const t=Math.floor(this.gameTime/60),n=Math.floor(this.gameTime%60);if(e.textAlign="right",e.fillStyle="#FFFFFF",e.fillText(`${String(t).padStart(2,"0")}:${String(n).padStart(2,"0")}`,De-8,22),this.windActive&&(e.save(),e.globalAlpha=this.windAlpha,e.font="14px system-ui",e.textAlign="right",e.fillText("💨",De-8,35),e.restore()),this.jarrad.state==="wall-running"&&(e.save(),e.fillStyle="#44FFAA",e.font="bold 11px system-ui",e.textAlign="center",e.fillText("🏃 WALL RUN!",De/2,34),e.restore()),this.crumble5AState==="shaking"&&(e.save(),e.fillStyle="#FF8800",e.font="bold 10px system-ui",e.textAlign="center",e.fillText("⚠ PLANK BREAKING!",De/2,34),e.restore()),this.comboPhase>0&&this.comboPhase<4){e.save(),e.textAlign="left",e.font="9px system-ui",e.fillStyle="#AAFFAA";const i=["↑J","🤲G","↔S","↑P"];let o=4;for(let r=0;r<4;r++)e.globalAlpha=r<this.comboPhase?1:.3,e.fillText(i[r],o,ft-8),o+=28;e.restore()}this.drawMiniMap(e)}drawMiniMap(e){const t=De-28,n=42,i=22,o=120;e.fillStyle="rgba(0,0,0,0.35)",this.roundRect(e,t-2,n-2,i+4,o+4,4),e.fill();const r=i/De,a=o/700;for(let u=0;u<this.platforms.length;u++){const d=this.platforms[u];if(d.type==="crumbling"&&this.crumble5AState==="broken")continue;const f=d.type==="moving"?this.movingPlatX:d.baseX,g=t+f*r,_=n+d.y*a,m=d.width*r;let p="#A0A0A0";d.type==="win"&&(p="#FFD700"),d.type==="crumbling"&&(p="#C8A040"),d.type==="moving"&&(p="#8080D0"),e.fillStyle=p,e.fillRect(g,_,Math.max(m,2),2)}const l=this.jarrad,c=t+(l.x+l.w/2)*r,h=n+(l.y+l.h)*a;e.fillStyle="#00FF88",e.beginPath(),e.arc(c,h,2.5,0,Math.PI*2),e.fill()}drawHeart(e,t,n,i,o){e.fillStyle=o,e.beginPath(),e.moveTo(t,n+i*.4),e.bezierCurveTo(t,n-i*.6,t-i*1.2,n-i*.6,t-i*1.2,n),e.bezierCurveTo(t-i*1.2,n+i*.7,t,n+i*1.2,t,n+i*1.4),e.bezierCurveTo(t,n+i*1.2,t+i*1.2,n+i*.7,t+i*1.2,n),e.bezierCurveTo(t+i*1.2,n-i*.6,t,n-i*.6,t,n+i*.4),e.closePath(),e.fill()}drawWinOverlay(e){e.fillStyle="rgba(0,0,0,0.75)",e.fillRect(0,0,De,ft),e.textAlign="center",e.font="bold 52px system-ui",e.fillStyle="#FFD700",e.fillText("🪣 DELIVERED!",De/2,ft/2-40),e.font="bold 22px system-ui",e.fillStyle="#5EDB7D",e.fillText("🏆 Bucket reached the top!",De/2,ft/2+10)}drawLostOverlay(e){var t,n;if(e.fillStyle="rgba(0,0,0,0.80)",e.fillRect(0,0,De,ft),e.textAlign="center",e.font="bold 48px system-ui",e.fillStyle="#F07070",e.fillText("💦 SPLAT!",De/2,ft/2-60),e.font="bold 16px system-ui",e.fillStyle="#FFFFFF",e.fillText("Jarrad's in the pool.",De/2,ft/2-20),!this.retried){e.fillStyle="#C1666B",this.roundRect(e,De/2-70,ft/2+10,140,44,10),e.fill(),e.fillStyle="#FFFFFF",e.font="bold 18px system-ui",e.fillText("🔄 RETRY",De/2,ft/2+38);const i=o=>{const r=this.canvas.getBoundingClientRect();let a,l;o instanceof MouseEvent?(a=(o.clientX-r.left)*(De/r.width),l=(o.clientY-r.top)*(ft/r.height)):(a=(o.changedTouches[0].clientX-r.left)*(De/r.width),l=(o.changedTouches[0].clientY-r.top)*(ft/r.height)),a>De/2-70&&a<De/2+70&&l>ft/2+10&&l<ft/2+54&&(this.canvas.removeEventListener("click",i),this.canvas.removeEventListener("touchend",i),this.retried=!0,this.jarrad.lives=3,this.initGame())};(t=this.canvas)==null||t.addEventListener("click",i,{once:!1}),(n=this.canvas)==null||n.addEventListener("touchend",i,{once:!1})}}finishGame(e){this.phase="result";const t=this.jarrad.lives;let n,i,o;e?t>=3?(n=100,i=1,o="Jarrad didn't spill a drop. Tsuyoshi's still shaking though."):t===2?(n=80,i=.8,o="A pigeon got involved. Classic site visit."):(n=60,i=.6,o="The bucket made it. Jarrad's ego didn't."):(n=0,i=0,o="Jarrad's in the pool. The Marbellino too. Phil's invoice is on the way."),this.ctx&&this.drawResultScreen(this.ctx,e,n,o),setTimeout(()=>{var r;return(r=this.onComplete)==null?void 0:r.call(this,{score:n,qualityPct:i,message:o})},3e3)}drawResultScreen(e,t,n,i){e.fillStyle="rgba(0,0,0,0.82)",e.fillRect(0,0,De,ft),e.textAlign="center",e.font="72px system-ui",e.fillText(t?"🏆":"💀",De/2,ft/2-90);const o=n>=75?"#5EDB7D":n>=50?"#F7C948":"#F07070";e.fillStyle=o,e.font="bold 64px system-ui, sans-serif",e.fillText(`${n}%`,De/2,ft/2-10),e.fillStyle="#FFFFFF",e.font="15px system-ui, sans-serif",this.wrapText(e,i,De/2,ft/2+40,340,22)}wrapText(e,t,n,i,o,r){const a=t.split(" ");let l="",c=i;for(const h of a){const u=l+h+" ";e.measureText(u).width>o&&l!==""?(e.fillText(l,n,c),l=h+" ",c+=r):l=u}e.fillText(l,n,c)}roundRect(e,t,n,i,o,r){e.beginPath(),e.moveTo(t+r,n),e.lineTo(t+i-r,n),e.quadraticCurveTo(t+i,n,t+i,n+r),e.lineTo(t+i,n+o-r),e.quadraticCurveTo(t+i,n+o,t+i-r,n+o),e.lineTo(t+r,n+o),e.quadraticCurveTo(t,n+o,t,n+o-r),e.lineTo(t,n+r),e.quadraticCurveTo(t,n,t+r,n),e.closePath()}}class Gg{constructor(){C(this,"overlay");C(this,"active",!1);C(this,"trowelingGame",null);C(this,"scaffoldGame",null);C(this,"safetyTimer",null);this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,t.addEventListener("click",()=>{this.stop(),e({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(t),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),e({score:70,qualityPct:.7,message:"Time up!"}))},6e4),setTimeout(()=>{if(this.active)try{this.trowelingGame=new Ag,this.trowelingGame.mount(this.overlay,n=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),e(n)})}catch(n){console.error("TrowelingGame init failed:",n);const i=document.createElement("div");i.style.cssText=`
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
    `,t.addEventListener("click",()=>{this.stop(),e({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(t),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),e({score:50,qualityPct:.5,message:"Time up on the scaffold!"}))},9e4),setTimeout(()=>{if(this.active)try{this.scaffoldGame=new zg,this.scaffoldGame.mount(this.overlay,n=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),e(n)})}catch(n){console.error("ScaffoldGame init failed:",n);const i=document.createElement("div");i.style.cssText=`
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; height:100%; color:#fff;
          font-family:system-ui,sans-serif; gap:24px; padding:40px;
          text-align:center;
        `,i.innerHTML=`
          <div style="font-size:60px">🪣</div>
          <div style="font-size:30px; font-weight:800;">SCAFFOLD CLIMBED!</div>
          <div style="font-size:16px; opacity:0.7;">Tap DONE to collect your pay</div>
        `,this.overlay.appendChild(i)}},120)}startRandom(e){Math.random()<.5?this.startTroweling(e):this.startScaffold(e)}stop(){this.safetyTimer&&(clearTimeout(this.safetyTimer),this.safetyTimer=null),this.trowelingGame&&(this.trowelingGame.unmount(),this.trowelingGame=null),this.scaffoldGame&&(this.scaffoldGame.unmount(),this.scaffoldGame=null),this.overlay.style.display="none",this.overlay.innerHTML="",this.active=!1}}class Hg{constructor(){C(this,"overlay",null)}show(){if(this.overlay){this.refresh(),this.overlay.style.display="flex";return}this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,this.overlay.appendChild(r),this.overlay.addEventListener("click",a=>{a.target===this.overlay&&this.hide()}),document.body.appendChild(this.overlay),this.refresh()}refresh(){if(!this.overlay)return;const e=ws(),t=e.length,n=ri.length,i=this.overlay.querySelector("#gallery-progress-wrap");if(i){i.innerHTML="";const a=document.createElement("div");a.style.cssText=`
        color: #fff; font-size: clamp(13px,3vw,16px);
        font-weight: 700; margin-bottom: 8px;
      `,a.textContent=t>=n?`🏆 FULL COLLECTION — ${t}/${n}`:`Collection: ${t} / ${n}`,i.appendChild(a);const l=document.createElement("div");l.style.cssText=`
        width: 100%; height: 10px; background: rgba(255,255,255,0.1);
        border-radius: 6px; overflow: hidden;
      `;const c=document.createElement("div");c.style.cssText=`
        height: 100%; border-radius: 6px;
        background: ${t>=n?"#FFD700":"#C8B89A"};
        width: ${Math.round(t/n*100)}%;
        transition: width 0.5s ease;
      `,l.appendChild(c),i.appendChild(l)}const o=this.overlay.querySelector("#gallery-grid");o&&(o.innerHTML="",ri.forEach(a=>{const l=e.includes(a.id),c=document.createElement("div");if(c.style.cssText=`
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
          `,c.appendChild(h)}o.appendChild(c)}));const r=this.overlay.querySelector("#gallery-encourage");r&&(t>=n?r.textContent="🏆 You've scraped them all. Matt's proud. Sort of.":t>=6?r.textContent="🔥 Almost there — keep scraping!":t>=3?r.textContent="💪 Nice collection forming. More plastering to do!":t===0?r.textContent="🪣 No photos yet — complete jobs to reveal TEM work!":r.textContent="✨ Keep scraping to unlock all 8 TEM photos!")}hide(){this.overlay&&(this.overlay.style.display="none")}}const Yl=[15087942,2201331,16757504,5025616,10233776,16739125];function Vg(s){const e=new Ne,t=new Z({color:s}),n=new N(new ne(3.5,1.2,6.5),t);n.position.set(0,.6,0),n.castShadow=!0,e.add(n);const i=new Z({color:s}),o=new N(new ne(2.5,.9,3.5),i);o.position.set(0,1.65,0),o.castShadow=!0,e.add(o);const r=new Z({color:1118481}),a=[[-1.8,.4,2.2],[1.8,.4,2.2],[-1.8,.4,-2.2],[1.8,.4,-2.2]];for(const[u,d,f]of a){const g=new N(new Ke(.5,.5,.4,8),r);g.rotation.z=Math.PI/2,g.position.set(u,d,f),g.castShadow=!0,e.add(g)}const l=new Z({color:3359829}),c=new N(new ne(2.3,.7,.1),l);c.position.set(0,1.4,-3.3),e.add(c);const h=new N(new ne(2.3,.7,.1),l);return h.position.set(0,1.4,3.3),e.add(h),e}function Wg(s,e){return s==="x"?e===1?-Math.PI/2:Math.PI/2:e===1?Math.PI:0}class Xg{constructor(e){C(this,"cars",[]);C(this,"scene");this.scene=e,this._spawn()}_spawn(){const e=[-200,-160,-120,-80,-40,0,40,80,120,160,200],t=n=>{const i=Yl[Math.floor(Math.random()*Yl.length)],o=Vg(i),r=e[Math.floor(Math.random()*e.length)],a=Math.random()>.5?2:-2,l=10+Math.random()*10,c=Math.random()>.5?1:-1,h=-200+Math.random()*400;o.rotation.y=Wg(n,c);const u={group:o,axis:n,roadPos:r,laneOffset:a,speed:l,dir:c,pos:h};this.cars.push(u),this.scene.add(o),this._applyPosition(u)};for(let n=0;n<14;n++)t("z");for(let n=0;n<14;n++)t("x")}_applyPosition(e){e.axis==="x"?e.group.position.set(e.pos,0,e.roadPos+e.laneOffset):e.group.position.set(e.roadPos+e.laneOffset,0,e.pos)}update(e,t,n){for(const i of this.cars)i.pos+=i.dir*i.speed*e,i.pos>235&&(i.pos=-235),i.pos<-235&&(i.pos=235),this._applyPosition(i)}resolveVan(e,t,n=1.8){let i=e,o=t,r=!1;for(const a of this.cars){const l=a.group.position.x,c=a.group.position.z,h=(a.axis==="x"?3.25:1.75)+n,u=(a.axis==="x"?1.75:3.25)+n,d=i-l,f=o-c;if(Math.abs(d)<h&&Math.abs(f)<u){const g=h-Math.abs(d),_=u-Math.abs(f);g<_?i+=d<0?-g:g:o+=f<0?-_:_,r=!0}}return{x:i,z:o,hit:r}}checkVanCollision(e,t){const n=this.resolveVan(e,t);return{hit:n.hit,pushX:n.x-e,pushZ:n.z-t}}}const jl=[16032353,15167313,2792847,2508371,15320170,11066076,16739179,7029286],qg=16767916,Yg=40,Jl=8;function jg(s){const e=new Ne,t=new Z({color:s}),n=new Z({color:qg}),i=new Z({color:s}),o=new N(new Ke(.3,.35,1.1,7),t);o.position.set(0,.55,0),e.add(o);const r=new N(new vt(.28,6,5),n);r.position.set(0,1.28,0),e.add(r);const a=new N(new ne(.15,.65,.15),t);a.position.set(-.45,.75,0),a.rotation.z=.15,e.add(a);const l=new N(new ne(.15,.65,.15),t);l.position.set(.45,.75,0),l.rotation.z=-.15,e.add(l);const c=new N(new ne(.18,.55,.18),i);c.position.set(-.18,0,.05),e.add(c);const h=new N(new ne(.18,.55,.18),i);return h.position.set(.18,0,-.05),e.add(h),{group:e,leftArm:a,rightArm:l,leftLeg:c,rightLeg:h}}class Jg{constructor(e){C(this,"pedestrians",[]);C(this,"scene");this.scene=e,this._spawn()}_spawn(){const e=[];for(let n=-200;n<=200;n+=40)e.push(n);const t=n=>{const i=jl[Math.floor(Math.random()*jl.length)],{group:o,leftArm:r,rightArm:a,leftLeg:l,rightLeg:c}=jg(i),h=e[Math.floor(Math.random()*e.length)],u=Math.random()>.5?5:-5,d=h+u,f=[];for(let P=-240;P<240;P+=40)f.push(P);const g=f[Math.floor(Math.random()*f.length)],_=g+Jl/2,m=g+Yg-Jl/2,p=_+Math.random()*(m-_),b=Math.random()>.5?1:-1,S=2+Math.random()*1.5,v={group:o,axis:n,roadPos:d,segStart:_,segEnd:m,pos:p,dir:b,speed:S,scattering:!1,scatterTimer:0,scatterDirX:0,scatterDirZ:0,walkCycle:Math.random()*Math.PI*2,leftArm:r,rightArm:a,leftLeg:l,rightLeg:c};this.pedestrians.push(v),this.scene.add(o),this._applyPosition(v),this._applyFacing(v)};for(let n=0;n<20;n++)t("x");for(let n=0;n<20;n++)t("z")}_applyPosition(e){e.axis==="x"?e.group.position.set(e.pos,0,e.roadPos):e.group.position.set(e.roadPos,0,e.pos)}_applyFacing(e){if(e.scattering){e.group.rotation.y=Math.atan2(e.scatterDirX,e.scatterDirZ);return}e.axis==="x"?e.group.rotation.y=e.dir===1?-Math.PI/2:Math.PI/2:e.group.rotation.y=e.dir===1?Math.PI:0}update(e,t,n){for(const i of this.pedestrians){const o=i.group.position.x,r=i.group.position.z,a=o-t,l=r-n,c=Math.sqrt(a*a+l*l);if(!i.scattering&&c<7){i.scattering=!0,i.scatterTimer=2.5;const d=Math.max(c,.01);i.scatterDirX=a/d,i.scatterDirZ=l/d}i.scattering?(i.group.position.x+=i.scatterDirX*12*e,i.group.position.z+=i.scatterDirZ*12*e,i.scatterTimer-=e,i.scatterTimer<=0&&(i.scattering=!1,i.axis==="x"?i.pos=Math.max(i.segStart,Math.min(i.segEnd,i.group.position.x)):i.pos=Math.max(i.segStart,Math.min(i.segEnd,i.group.position.z)),this._applyPosition(i))):(i.pos+=i.dir*i.speed*e,i.pos>=i.segEnd?(i.pos=i.segEnd,i.dir=-1):i.pos<=i.segStart&&(i.pos=i.segStart,i.dir=1),this._applyPosition(i)),this._applyFacing(i);const h=i.scattering?12:i.speed;i.walkCycle+=h*e*2;const u=Math.sin(i.walkCycle);i.leftArm.rotation.z=u*.4+.15,i.rightArm.rotation.z=-u*.4-.15,i.leftLeg.rotation.x=u*.5,i.rightLeg.rotation.x=-u*.5}}}const bn=class bn{constructor(e){C(this,"indicator");C(this,"scene");C(this,"lastVisit",-30);this.scene=e,this.indicator=new N(new vt(1.5,10,8),new Z({color:13918762,emissive:new ye(10498064),emissiveIntensity:.8})),this.indicator.position.set(bn.POS.x,10,bn.POS.z),this.scene.add(this.indicator)}update(e){this.indicator.position.y=10+Math.sin(Date.now()*.002)*.5,this.indicator.rotation.y+=e*1.5}isNearby(e,t){const n=e-bn.POS.x,i=t-bn.POS.z;return Math.sqrt(n*n+i*i)<bn.TRIGGER_RADIUS}tryVisit(e,t){if(!this.isNearby(e,t))return!1;const n=Date.now()/1e3;return n-this.lastVisit<20?!1:(this.lastVisit=n,!0)}};C(bn,"POS",{x:-60,z:-100}),C(bn,"TRIGGER_RADIUS",12);let Zr=bn;class $g{constructor(){C(this,"level",0);C(this,"isUrgent",!1);C(this,"lastUrgentToast",0);C(this,"caffeinated",!1);C(this,"caffeineTimer",0)}update(e,t){this.caffeinated&&(this.caffeineTimer-=e,this.caffeineTimer<=0&&(this.caffeinated=!1));const n=this.caffeinated?.018:.012;Math.abs(t)>2?this.level=Math.min(1,this.level+e*n):this.level=Math.max(0,this.level-e*.005),this.isUrgent=this.level>.8}drinkCoffee(){this.level=Math.min(1,this.level+.4),this.caffeinated=!0,this.caffeineTimer=30,this.isUrgent=this.level>.8}tryRelief(e,t){const n=e-100,i=t-60;return Math.sqrt(n*n+i*i)>14||this.level===0?!1:(this.level=0,this.isUrgent=!1,this.caffeinated=!1,this.caffeineTimer=0,!0)}get spillMultiplier(){return this.isUrgent?1.8:1}}const as={x:30,z:28},$l=["Got a dollar, mate? 💸","You got a light? 🚬","Nice van. Does it leak?","My brother Jarrad says I'm not qualified. He's right but I don't like it.","These boots were not made for plastering. Yet here we are.","Jump in? No seriously, I need a lift.","Jarrad says he's read the TDS. He hasn't. I've lived with him.","You look like you need a coffee and a toilet. In that order.","Phil owes me fifty bucks. Pass it on.","I plastered that wall. Don't tell Jarrad.","Matt left the primer lid off again. Just letting you know."],ps=class ps{constructor(e){C(this,"wrapper");C(this,"character");C(this,"ropeRing");C(this,"ropePivot");C(this,"lastDialogue",0);C(this,"cooldown",9e3);this.character=new Mo(oi.Mikayla),this.character.group.scale.set(2,2,2);const t=this.character.buildJumpRopeClip();this.character.mixer.stopAllAction(),this.character.mixer.clipAction(t).play(),this.ropePivot=new Ne,this.ropePivot.position.set(0,1.3,0),this.ropePivot.rotation.y=Math.PI/2,this.character.group.add(this.ropePivot),this.ropeRing=new N(new ga(1.35,.05,7,28),new Z({color:8079902})),this.ropePivot.add(this.ropeRing);const n=this._makeNameBoard();n.position.set(0,8.8,0);const i=new N(new ci(1.2,1.7,32),new jt({color:14501e3,side:Ht}));i.rotation.x=-Math.PI/2,i.position.y=.05,this.wrapper=new Ne,this.wrapper.add(this.character.group),this.wrapper.add(n),this.wrapper.add(i),this.wrapper.position.set(as.x,0,as.z),e.add(this.wrapper)}_makeNameBoard(){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d");t.fillStyle="rgba(190, 40, 90, 0.88)",t.roundRect?t.roundRect(2,2,252,60,8):t.rect(2,2,252,60),t.fill(),t.fillStyle="#fff",t.font="bold 30px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("MIKAYLA",128,32);const n=new Ms(e);return new N(new pt(2.4,.6),new jt({map:n,transparent:!0,depthWrite:!1}))}update(e,t,n,i){this.character.update(e),this.ropeRing.rotation.z+=e*(2*Math.PI/Yc);const o=t-as.x,r=n-as.z;this.character.group.rotation.y=Math.atan2(o,r);const a=Math.sqrt(o*o+r*r),l=Date.now();if(a<ps.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=$l[Math.floor(Math.random()*$l.length)];return i.show(oi.Mikayla,c),this.lastDialogue=l,!0}return!1}dispose(e){e.remove(this.wrapper)}};C(ps,"POS",as),C(ps,"TRIGGER_RADIUS",15);let ei=ps;const ls={x:-4,z:-6},Kl=["Ha ha ha HA HA! You picked up ze buckets! Love it!","I mix ze plaster by hand. Za gloves are for ze weak.","In Germany, zis would be a warm-up. But I like Australia. Ze mud here is good.","I have mud wrestled ze entire Brunswick football club. Zey lost. Badly.","Ze mixing ratio is one part water, two parts product, one part pure power.","Last Saturday I wrestled a man twice my size. Sunday I mixed 50 buckets. Your turn.","Don't let ze hair fool you. I once arm wrestled Phil. He is still talking about it.","Ha HA! You are funny. Not as funny as ze last guy. But funny."],ms=class ms{constructor(e){C(this,"wrapper");C(this,"character");C(this,"lastDialogue",0);C(this,"cooldown",1e4);C(this,"audioCtx",null);this.character=new Mo(oi.Connie),this.character.group.scale.set(2,2.35,2);const t=new Z({color:15789544}),n=new N(new vt(.16,8,6),t);n.position.set(-.12,1.55,.19);const i=new N(new vt(.16,8,6),t);i.position.set(.12,1.55,.19),this.character.group.add(n),this.character.group.add(i),this.character.setLogoTexture(Wc(oi.Connie.shirtColor));const o=this._makeNameBoard();o.position.set(0,8.8,0);const r=new N(new ci(1.2,1.7,32),new jt({color:16109664,side:Ht}));r.rotation.x=-Math.PI/2,r.position.y=.05,this.wrapper=new Ne,this.wrapper.add(this.character.group),this.wrapper.add(o),this.wrapper.add(r),this.wrapper.position.set(ls.x,0,ls.z),e.add(this.wrapper)}_makeNameBoard(){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d");return t.fillStyle="rgba(200, 150, 20, 0.88)",t.roundRect?t.roundRect(2,2,252,60,8):t.rect(2,2,252,60),t.fill(),t.fillStyle="#fff",t.font="bold 30px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("CONNIE",128,32),new N(new pt(2.4,.6),new jt({map:new Ms(e),transparent:!0,depthWrite:!1}))}playLaugh(){try{this.audioCtx||(this.audioCtx=new(window.AudioContext||window.webkitAudioContext));const e=this.audioCtx,t=7;for(let n=0;n<t;n++){const i=e.currentTime+n*.16,o=e.createOscillator(),r=e.createGain(),a=480+n*18+Math.random()*60;o.frequency.setValueAtTime(a,i),o.frequency.exponentialRampToValueAtTime(a*.48,i+.13),r.gain.setValueAtTime(0,i),r.gain.linearRampToValueAtTime(.35,i+.03),r.gain.exponentialRampToValueAtTime(.001,i+.15),o.connect(r),r.connect(e.destination),o.start(i),o.stop(i+.17)}}catch{}}update(e,t,n,i){this.character.update(e);const o=t-ls.x,r=n-ls.z;this.character.group.rotation.y=Math.atan2(o,r);const a=Math.sqrt(o*o+r*r),l=Date.now();if(a<ms.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=Kl[Math.floor(Math.random()*Kl.length)];return i.show(oi.Connie,c),this.lastDialogue=l,!0}return!1}dispose(e){var t;e.remove(this.wrapper),(t=this.audioCtx)==null||t.close()}};C(ms,"POS",ls),C(ms,"TRIGGER_RADIUS",16);let fs=ms;const Kg={Connie:{scale:[2,2.35,2],addGeometry:s=>{const e=new Z({color:15789544}),t=new N(new vt(.16,8,6),e);t.position.set(-.12,1.55,.19);const n=new N(new vt(.16,8,6),e);n.position.set(.12,1.55,.19),s.add(t),s.add(n)}},Mikayla:{scale:[1.9,1.9,1.9]}};class Zg{constructor(){C(this,"renderer");C(this,"scene");C(this,"camera");C(this,"canvas");C(this,"cache",new Map);this.canvas=document.createElement("canvas"),this.canvas.width=160,this.canvas.height=160,this.renderer=new Bc({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(160,160),this.renderer.setClearColor(0,0),this.scene=new Uc;const e=new Hc(16777215,.7);this.scene.add(e);const t=new fo(16774624,1);t.position.set(2,4,5),this.scene.add(t);const n=new fo(14741759,.4);n.position.set(-3,2,3),this.scene.add(n),this.camera=new Nt(38,1,.1,100),this.camera.position.set(1.2,5,5.5),this.camera.lookAt(.1,3.8,0)}renderPortrait(e){var c;if(this.cache.has(e.name))return this.cache.get(e.name);this.scene.children.filter(h=>!(h instanceof bs)).forEach(h=>this.scene.remove(h));const n=Kg[e.name],i=new Mo(e),[o,r,a]=(n==null?void 0:n.scale)??[2,2,2];i.group.scale.set(o,r,a),i.group.rotation.y=-Math.PI*.18,(c=n==null?void 0:n.addGeometry)==null||c.call(n,i.group),this.scene.add(i.group),this.renderer.render(this.scene,this.camera);const l=this.canvas.toDataURL("image/png");return this.cache.set(e.name,l),this.scene.remove(i.group),l}dispose(){this.renderer.dispose()}}class Qg{constructor(){C(this,"container");C(this,"portrait");C(this,"nameEl");C(this,"textEl");C(this,"portraitRenderer");C(this,"hideTimeout",null);C(this,"visible",!1);this.portraitRenderer=new Zg,this._injectStyles(),this._buildDOM()}_injectStyles(){if(document.getElementById("speech-bubble-styles"))return;const e=document.createElement("style");e.id="speech-bubble-styles",e.textContent=`
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
    `,document.head.appendChild(e)}_buildDOM(){this.container=document.createElement("div"),this.container.id="tem-speech-bubble";const e=document.createElement("div");e.className="sb-portrait-wrap",this.portrait=document.createElement("img"),this.portrait.className="sb-portrait-img",e.appendChild(this.portrait);const t=document.createElement("div");t.className="sb-text-area",this.nameEl=document.createElement("span"),this.nameEl.className="sb-name",this.textEl=document.createElement("span"),this.textEl.className="sb-text",t.appendChild(this.nameEl),t.appendChild(this.textEl),this.container.appendChild(e),this.container.appendChild(t),document.body.appendChild(this.container)}show(e,t){this.nameEl.textContent=e.name,this.textEl.textContent=t,this.portrait.src=this.portraitRenderer.renderPortrait(e),this.container.style.display="flex",requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.container.classList.add("sb-visible")})}),this.visible=!0,this.hideTimeout!==null&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(()=>this.hide(),1e4)}setScreenPosition(e,t){this.container.style.left=`${e}px`,this.container.style.top=`${t}px`}hide(){this.container.classList.remove("sb-visible"),this.visible=!1,setTimeout(()=>{this.visible||(this.container.style.display="none")},220)}isVisible(){return this.visible}dispose(){this.portraitRenderer.dispose(),document.body.removeChild(this.container)}}const cs=15;class e_{constructor(){C(this,"overlay");C(this,"titleEl");C(this,"bodyEl");C(this,"hintEl");C(this,"progressBar");C(this,"_active",!1);C(this,"_readyToResume",!1);C(this,"_resumeCallback",null);C(this,"_lockTimer",null);C(this,"_countdownInterval",null);C(this,"_autoTimer",null);C(this,"_secondsLeft",cs);if(!document.getElementById("dp-styles")){const a=document.createElement("style");a.id="dp-styles",a.textContent=`
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
    `,r.textContent="▶  TAP GAS or REV to skip",t.appendChild(this.titleEl),t.appendChild(n),o.appendChild(this.bodyEl),e.appendChild(t),e.appendChild(i),e.appendChild(o),e.appendChild(r),this.overlay.appendChild(e),document.body.appendChild(this.overlay),this.overlay.addEventListener("touchstart",a=>{a.preventDefault(),this.tryResume()},{passive:!1}),this.overlay.addEventListener("click",()=>this.tryResume())}show(e,t,n){this._clearTimers(),this._active=!0,this._readyToResume=!1,this._resumeCallback=n,this._secondsLeft=cs,this.titleEl.textContent=e,this.bodyEl.textContent=t,this.hintEl.textContent=String(cs),this.overlay.style.display="flex",this.progressBar.style.transition="none",this.progressBar.style.width="100%",this.progressBar.offsetWidth,this.progressBar.style.transition=`width ${cs}s linear`,this.progressBar.style.width="0%",this._lockTimer=setTimeout(()=>{this._readyToResume=!0},380),this._countdownInterval=setInterval(()=>{this._secondsLeft=Math.max(0,this._secondsLeft-1),this.hintEl.textContent=String(this._secondsLeft)},1e3),this._autoTimer=setTimeout(()=>{this._forceResume()},cs*1e3)}tryResume(){!this._active||!this._readyToResume||this._doResume()}_forceResume(){this._active&&this._doResume()}_doResume(){this._active=!1,this._readyToResume=!1,this.overlay.style.display="none",this._clearTimers();const e=this._resumeCallback;this._resumeCallback=null,e==null||e()}_clearTimers(){this._lockTimer&&(clearTimeout(this._lockTimer),this._lockTimer=null),this._autoTimer&&(clearTimeout(this._autoTimer),this._autoTimer=null),this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}get isActive(){return this._active}}const t_={Matt:`Matt folds himself into the back. "Took your time." He's already on his phone.`,Jose:'Jose appears from nowhere, bucket in hand. "Vámonos — I was getting bored."',Jarrad:`Jarrad adjusts his hard hat. "I've been standing here fifteen minutes." He has.`,Phil:`Phil sips the last of his tea, unhurried. "Right then. Let's go." He fastens his seatbelt twice.`,Tsuyoshi:"Tsuyoshi vaults in without opening the door. His mohawk grazes the roof lining.",Fabio:`Fabio loads in, trowel over his shoulder. "You're late." He's smiling though.`};async function n_(){await Om();const s=new zm;await s.init();const e=new Xm(s.scene);e.spawnCrewAtCityPositions();const t=new hg,n=new qm(s.scene),i=new dg,o=new yg,r=new e_,a=new mo,l=new Zm(n,t,M=>{a.activePhase>=2&&i.triggerBump(M)},s.collisionWorld,()=>{a.activePhase>=2&&i.triggerCrash()}),c=new Kr(s.scene),h=new gg(M=>{h.hide(),r.show(`📋 ${M.title}`,`Client: ${M.client}

${M.description}

💰 Pay: $${M.pay.toLocaleString()}

🏭 Head to the TEM workshop to collect supplies.`,()=>{a.acceptJob(M),c.setTarget(mo.WORKSHOP_POS),o.setActiveJob(M,1),o.updateCrewStatus([],[],!1)})});i.onSpill=M=>{a.money=Math.max(0,a.money-M),o.updateMoney(a.money),o.showSpillPenalty(M)};const u=document.createElement("button");u.textContent="📋 JOBS",u.style.cssText=`
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
  `,u.addEventListener("pointerenter",()=>{u.style.background="rgba(212, 120, 125, 0.95)",u.style.transform="translateY(-2px)"}),u.addEventListener("pointerleave",()=>{u.style.background="rgba(193, 102, 107, 0.9)",u.style.transform=""}),u.addEventListener("click",()=>{h.isVisible()?h.hide():h.show(a.getAvailableJobs())}),document.body.appendChild(u);const d=new Xg(s.scene),f=new Jg(s.scene),g=new Zr(s.scene),_=new $g,m=new ei(s.scene),p=new fs(s.scene),b=new Qg,S=new D(ei.POS.x,6,ei.POS.z),v=new Gg,P=new Hg,E=document.createElement("button");E.textContent="📸",E.title="Photo Collection",E.style.cssText=`
    position: fixed; top: 16px; left: 16px;
    z-index: 1000; background: rgba(70,70,70,0.9);
    color: #fff; border: none; border-radius: 50%;
    width: 52px; height: 52px; font-size: 22px;
    cursor: pointer; touch-action: manipulation;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    transition: background 0.15s, transform 0.1s;
  `,E.addEventListener("pointerenter",()=>{E.style.background="rgba(100,100,100,0.95)",E.style.transform="scale(1.1)"}),E.addEventListener("pointerleave",()=>{E.style.background="rgba(70,70,70,0.9)",E.style.transform=""}),E.addEventListener("click",()=>P.show()),document.body.appendChild(E);let A=!1;const I=document.createElement("div");I.style.cssText=`
    position:fixed; top:8px; left:8px; z-index:5000;
    background:rgba(0,0,0,0.6); color:#fff; font-size:11px;
    font-family:monospace; padding:6px 10px; border-radius:6px;
    pointer-events:none; line-height:1.5;
  `,document.body.appendChild(I),s.onUpdate(M=>{const x=n.mesh.position.x,R=n.mesh.position.z;if(r.isActive){(t.forward||t.brake)&&r.tryResume(),e.updateAll(M),m.update(M,x,R,b),p.update(M,x,R,b),s.camera.follow(n.mesh.position,n.velocity,n.heading);{const J=S.clone().project(s.camera.camera),oe=(J.x*.5+.5)*window.innerWidth,me=(-J.y*.5+.5)*window.innerHeight;b.setScreenPosition(oe,me)}return}l.update(M),n.updateSuspension(M);const z=a.activeJob!==null&&a.activePhase>=2;if(i.setVisible(z),z?i.update(M):i.level=0,e.updateAll(M),g.update(M),g.tryVisit(x,R)&&(i.level=Math.max(0,i.level-.6),_.drinkCoffee(),_.isUrgent?o.showToast("☕ Coffeed up — now find a toilet, fast!",13918762):o.showToast("☕ Coffee hit! Plaster steady, bladder loading...",13918762)),_.update(M,a.activeJob?l.speed:0),_.tryRelief(x,R)&&o.showToast("🚽 Ahhh! Relief! Ready for the next coffee ☕",2201331),_.isUrgent&&a.activeJob){const J=Date.now();J-_.lastUrgentToast>15e3&&(_.lastUrgentToast=J,o.showToast("🚽 Bursting! Find the toilet before you spill!",16733986))}i.spillRateMultiplier=_.spillMultiplier,m.update(M,x,R,b)&&S.set(ei.POS.x,6,ei.POS.z),p.update(M,x,R,b)&&S.set(fs.POS.x,6,fs.POS.z);const k=e.checkProximityDialogue(x,R);k&&(S.set(k.pos.x,6,k.pos.z),b.show(oi[k.name],k.line));{const J=S.clone().project(s.camera.camera),oe=(J.x*.5+.5)*window.innerWidth,me=(-J.y*.5+.5)*window.innerHeight;b.setScreenPosition(oe,me)}d.update(M,x,R),f.update(M,x,R);const W=d.resolveVan(x,R);if(W.hit&&(n.mesh.position.x=W.x,n.mesh.position.z=W.z,l.applyImpulse(0,0),a.activePhase>=2&&i.triggerCrash()),c.update(M,x,R),a.activeJob){const J=a.tickTravel(M);o.updateTravelTimer(a.travelTimer),J!=null&&J.failed&&(i.level=0,c.setTarget(null),o.updateTravelTimer(null),o.showTimerFail(15e4),o.setActiveJob(null,1),o.updateMoney(a.money),o.updateCrewStatus([],[],!1),e.showAllCrew(),setTimeout(()=>h.show(a.getAvailableJobs()),3500))}else o.updateTravelTimer(null);if(a.activeJob!==null)if(a.activePhase===1)o.updateJobDistance(a.distanceToWorkshop(x,R));else if(a.activePhase===2){const J=a.nextCrewNeeded();if(J){const oe=e.getCrewPosition(J);o.updateJobDistance(a.distanceToPoint(x,R,oe.x,oe.z))}}else o.updateJobDistance(a.distanceTo(x,R));if(a.activeJob&&a.activePhase===1&&!A&&a.checkPhase1Arrival(x,R)){A=!0,i.level=0,p.playLaugh();const J=a.crewToPickup.join(" + ");r.show("📦 Supplies Loaded!",`Connie's cackle echoes through the factory as the buckets go in.

Now go pick up the crew:
👷 ${J}

They're scattered around the city. Your waypoint will guide you.`,()=>{a.advanceToPhase2();const oe=a.nextCrewNeeded();if(oe){const me=e.getCrewPosition(oe);c.setTarget(me)}o.showPhase1Complete(),o.setActiveJob(a.activeJob,2),o.updateCrewStatus(a.crewToPickup,a.crewPickedUp,!0),A=!1})}if(a.activeJob&&a.activePhase===2&&!A)for(const J of a.crewToPickup){if(a.crewPickedUp.includes(J))continue;const oe=e.getCrewPosition(J);if(a.distanceToPoint(x,R,oe.x,oe.z)<10){A=!0,e.hideCrew(J);const Le=a.pickupCrew(J);o.updateCrewStatus(a.crewToPickup,a.crewPickedUp,!0);const Ye=t_[J]??`${J} hops in.`;if(Le)r.show(`🚐 ${J} aboard — Full crew!`,`${Ye}

Full crew loaded. Everyone's in (sort of).

Head to the job site now. Your waypoint is set.`,()=>{a.advanceToPhase3(),c.setTarget(a.activeJob.position),o.showCrewPickup(J,null),o.setActiveJob(a.activeJob,3),A=!1});else{const Y=a.nextCrewNeeded(),ie=a.crewToPickup.filter(_e=>!a.crewPickedUp.includes(_e)).join(", ");r.show(`🧑‍🔧 ${J} aboard!`,`${Ye}

Still need to collect:
👷 ${ie}`,()=>{if(Y){const _e=e.getCrewPosition(Y);c.setTarget(_e),o.showCrewPickup(J,Y)}o.updateCrewStatus(a.crewToPickup,a.crewPickedUp,!0),A=!1})}break}}if(a.activeJob&&a.activePhase===3&&!A&&!v.isActive()){const J=a.checkArrival(x,R);J!==null&&(A=!0,c.setTarget(null),r.show(`🏗️ ${J.title}`,`${J.client} is waiting.

${J.description}

Time to get to work. Show them what TEM does.`,()=>{o.setActiveJob(null,3),o.updateCrewStatus([],[],!1),v.startRandom(oe=>{const me=a.completeJob(J,oe.qualityPct);o.showJobComplete(J.title,me),o.updateMoney(a.money),e.showAllCrew(),A=!1,setTimeout(()=>{const Le=a.getAvailableJobs();Le.length>0&&h.show(Le)},3500)})}))}s.camera.follow(n.mesh.position,n.velocity,n.heading),o.update(l.speed,i.level);const $=a.activeJob,q=$?`P${a.activePhase}`:"idle",ee=$?a.activePhase===1?Math.round(a.distanceToWorkshop(x,R)):a.activePhase===2?Math.round(a.distanceToPoint(x,R,...(()=>{const J=a.nextCrewNeeded();if(!J)return[x,R];const oe=e.getCrewPosition(J);return[oe.x,oe.z]})())):Math.round(a.distanceTo(x,R)):0,V=$?`crew:${a.crewPickedUp.length}/${a.crewToPickup.length}`:"";I.textContent=`${q} | dist:${ee} | ${V} | lock:${A} | mg:${v.isActive()}`}),setTimeout(()=>{h.show(a.getAvailableJobs())},1e3),s.start()}n_().catch(s=>{console.error("Game init failed:",s),document.body.style.background="#000";const e=document.createElement("div");e.style.cssText=`
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    color:#fff;font-family:sans-serif;font-size:18px;text-align:center;
    background:rgba(200,40,40,0.9);padding:24px 32px;border-radius:16px;
    max-width:90vw;z-index:9999;
  `,e.innerHTML=`<b>🚨 Game failed to start</b><br><br>${(s==null?void 0:s.message)||String(s)}`,document.body.appendChild(e)});
//# sourceMappingURL=index-DCvYgyGy.js.map
