var ih=Object.defineProperty;var nh=(o,e,t)=>e in o?ih(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var x=(o,e,t)=>nh(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ir="170",sh=0,fl=1,oh=2,$c=1,Jc=2,Ci=3,Ki=0,Bt=1,Ut=2,Li=0,Wn=1,Fa=2,pl=3,ml=4,ah=5,un=100,rh=101,lh=102,ch=103,dh=104,hh=200,uh=201,fh=202,ph=203,ka=204,Na=205,mh=206,gh=207,vh=208,yh=209,xh=210,_h=211,bh=212,wh=213,Mh=214,Ua=0,Oa=1,za=2,jn=3,Ga=4,Ha=5,Va=6,Wa=7,Lr=0,Th=1,Sh=2,Ji=0,Kc=1,Zc=2,Qc=3,Dr=4,Eh=5,ed=6,td=7,id=300,qn=301,$n=302,Xa=303,Ya=304,zo=306,ja=1e3,gn=1001,qa=1002,hi=1003,Ch=1004,Ys=1005,yi=1006,qo=1007,vn=1008,ki=1009,nd=1010,sd=1011,Ds=1012,Br=1013,_n=1014,Pi=1015,Di=1016,Fr=1017,kr=1018,Jn=1020,od=35902,ad=1021,rd=1022,di=1023,ld=1024,cd=1025,Xn=1026,Kn=1027,dd=1028,Nr=1029,hd=1030,Ur=1031,Or=1033,Mo=33776,To=33777,So=33778,Eo=33779,$a=35840,Ja=35841,Ka=35842,Za=35843,Qa=36196,er=37492,tr=37496,ir=37808,nr=37809,sr=37810,or=37811,ar=37812,rr=37813,lr=37814,cr=37815,dr=37816,hr=37817,ur=37818,fr=37819,pr=37820,mr=37821,Co=36492,gr=36494,vr=36495,ud=36283,yr=36284,xr=36285,_r=36286,Ah=2200,Rh=2201,Ph=2202,Io=2300,br=2301,$o=2302,zn=2400,Gn=2401,Lo=2402,zr=2500,Ih=2501,Lh=3200,Dh=3201,fd=0,Bh=1,qi="",Qt="srgb",ns="srgb-linear",Go="linear",ot="srgb",Mn=7680,gl=519,Fh=512,kh=513,Nh=514,pd=515,Uh=516,Oh=517,zh=518,Gh=519,vl=35044,yl="300 es",Ii=2e3,Do=2001;class bn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Jo=Math.PI/180,wr=180/Math.PI;function ss(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[o&255]+It[o>>8&255]+It[o>>16&255]+It[o>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Wt(o,e,t){return Math.max(e,Math.min(t,o))}function Hh(o,e){return(o%e+e)%e}function Ko(o,e,t){return(1-t)*o+t*e}function us(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ht(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,n,s,a,r,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,r,l,c)}set(e,t,i,n,s,a,r,l,c){const d=this.elements;return d[0]=e,d[1]=n,d[2]=r,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],r=i[3],l=i[6],c=i[1],d=i[4],u=i[7],h=i[2],f=i[5],g=i[8],v=n[0],m=n[3],p=n[6],b=n[1],M=n[4],y=n[7],R=n[2],E=n[5],A=n[8];return s[0]=a*v+r*b+l*R,s[3]=a*m+r*M+l*E,s[6]=a*p+r*y+l*A,s[1]=c*v+d*b+u*R,s[4]=c*m+d*M+u*E,s[7]=c*p+d*y+u*A,s[2]=h*v+f*b+g*R,s[5]=h*m+f*M+g*E,s[8]=h*p+f*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],r=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*r*c-i*s*d+i*r*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],r=e[5],l=e[6],c=e[7],d=e[8],u=d*a-r*c,h=r*l-d*s,f=c*s-a*l,g=t*u+i*h+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(n*c-d*i)*v,e[2]=(r*i-n*a)*v,e[3]=h*v,e[4]=(d*t-n*l)*v,e[5]=(n*s-r*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,r){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*r)+a+e,-n*c,n*l,-n*(-c*a+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(Zo.makeScale(e,t)),this}rotate(e){return this.premultiply(Zo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zo=new We;function md(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Bo(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Vh(){const o=Bo("canvas");return o.style.display="block",o}const xl={};function Ts(o){o in xl||(xl[o]=!0,console.warn(o))}function Wh(o,e,t){return new Promise(function(i,n){function s(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:n();break;case o.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Xh(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Yh(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(o.r=Bi(o.r),o.g=Bi(o.g),o.b=Bi(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(o.r=Yn(o.r),o.g=Yn(o.g),o.b=Yn(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===qi?Go:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Bi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Yn(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const _l=[.64,.33,.3,.6,.15,.06],bl=[.2126,.7152,.0722],wl=[.3127,.329],Ml=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[ns]:{primaries:_l,whitePoint:wl,transfer:Go,toXYZ:Ml,fromXYZ:Tl,luminanceCoefficients:bl,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:_l,whitePoint:wl,transfer:ot,toXYZ:Ml,fromXYZ:Tl,luminanceCoefficients:bl,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}});let Tn;class jh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tn===void 0&&(Tn=Bo("canvas")),Tn.width=e.width,Tn.height=e.height;const i=Tn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Tn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Bo("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Bi(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bi(t[i]/255)*255):t[i]=Bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qh=0;class gd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,r=n.length;a<r;a++)n[a].isDataTexture?s.push(Qo(n[a].image)):s.push(Qo(n[a]))}else s=Qo(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Qo(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?jh.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $h=0;class Ot extends bn{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=gn,n=gn,s=yi,a=vn,r=di,l=ki,c=Ot.DEFAULT_ANISOTROPY,d=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=ss(),this.name="",this.source=new gd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==id)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=id;Ot.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,n=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],d=l[4],u=l[8],h=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(d-h)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(f+1)/2,R=(p+1)/2,E=(d+h)/4,A=(u+v)/4,I=(g+m)/4;return M>y&&M>R?M<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(M),n=E/i,s=A/i):y>R?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=E/n,s=I/n):R<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(R),i=A/s,n=I/s),this.set(i,n,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(h-d)*(h-d));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-v)/b,this.z=(h-d)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jh extends bn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ot(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let r=0;r<a;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new gd(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends Jh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vd extends Ot{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=hi,this.minFilter=hi,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Kh extends Ot{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=hi,this.minFilter=hi,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,r){let l=i[n+0],c=i[n+1],d=i[n+2],u=i[n+3];const h=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(r===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==h||c!==f||d!==g){let m=1-r;const p=l*h+c*f+d*g+u*v,b=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),E=Math.atan2(R,p*b);m=Math.sin(m*E)/R,r=Math.sin(r*E)/R}const y=r*b;if(l=l*m+h*y,c=c*m+f*y,d=d*m+g*y,u=u*m+v*y,m===1-r){const R=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=R,c*=R,d*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){const r=i[n],l=i[n+1],c=i[n+2],d=i[n+3],u=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=r*g+d*u+l*f-c*h,e[t+1]=l*g+d*h+c*u-r*f,e[t+2]=c*g+d*f+r*h-l*u,e[t+3]=d*g-r*u-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,a=e._order,r=Math.cos,l=Math.sin,c=r(i/2),d=r(n/2),u=r(s/2),h=l(i/2),f=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"YXZ":this._x=h*d*u+c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"ZXY":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u-h*f*g;break;case"ZYX":this._x=h*d*u-c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u+h*f*g;break;case"YZX":this._x=h*d*u+c*f*g,this._y=c*f*u+h*d*g,this._z=c*d*g-h*f*u,this._w=c*d*u-h*f*g;break;case"XZY":this._x=h*d*u-c*f*g,this._y=c*f*u-h*d*g,this._z=c*d*g+h*f*u,this._w=c*d*u+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],r=t[5],l=t[9],c=t[2],d=t[6],u=t[10],h=i+r+u;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>r&&i>u){const f=2*Math.sqrt(1+i-r-u);this._w=(d-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(r>u){const f=2*Math.sqrt(1+r-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+d)/f}else{const f=2*Math.sqrt(1+u-i-r);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,r=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+a*r+n*c-s*l,this._y=n*d+a*l+s*r-i*c,this._z=s*d+a*c+i*l-n*r,this._w=a*d-i*r-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,a=this._w;let r=a*e._w+i*e._x+n*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,r),u=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=a*u+this._w*h,this._x=i*u+this._x*h,this._y=n*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,r=e.z,l=e.w,c=2*(a*n-r*i),d=2*(r*t-s*n),u=2*(s*i-a*t);return this.x=t+l*c+a*u-r*d,this.y=i+l*d+r*c-s*u,this.z=n+l*u+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,r=t.y,l=t.z;return this.x=n*l-s*r,this.y=s*a-i*l,this.z=i*r-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ea.copy(this).projectOnVector(e),this.sub(ea)}reflect(e){return this.sub(ea.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ea=new D,Sl=new ei;class Os{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,r=s.count;a<r;a++)e.isMesh===!0?e.getVertexPosition(a,ni):ni.fromBufferAttribute(s,a),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),js.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),js.copy(i.boundingBox)),js.applyMatrix4(e.matrixWorld),this.union(js)}const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),qs.subVectors(this.max,fs),Sn.subVectors(e.a,fs),En.subVectors(e.b,fs),Cn.subVectors(e.c,fs),zi.subVectors(En,Sn),Gi.subVectors(Cn,En),en.subVectors(Sn,Cn);let t=[0,-zi.z,zi.y,0,-Gi.z,Gi.y,0,-en.z,en.y,zi.z,0,-zi.x,Gi.z,0,-Gi.x,en.z,0,-en.x,-zi.y,zi.x,0,-Gi.y,Gi.x,0,-en.y,en.x,0];return!ta(t,Sn,En,Cn,qs)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,Sn,En,Cn,qs))?!1:($s.crossVectors(zi,Gi),t=[$s.x,$s.y,$s.z],ta(t,Sn,En,Cn,qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new D,new D,new D,new D,new D,new D,new D,new D],ni=new D,js=new Os,Sn=new D,En=new D,Cn=new D,zi=new D,Gi=new D,en=new D,fs=new D,qs=new D,$s=new D,tn=new D;function ta(o,e,t,i,n){for(let s=0,a=o.length-3;s<=a;s+=3){tn.fromArray(o,s);const r=n.x*Math.abs(tn.x)+n.y*Math.abs(tn.y)+n.z*Math.abs(tn.z),l=e.dot(tn),c=t.dot(tn),d=i.dot(tn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>r)return!1}return!0}const Zh=new Os,ps=new D,ia=new D;class Ho{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Zh.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ps,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ia.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(ia)),this.expandByPoint(ps.copy(e.center).sub(ia))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new D,na=new D,Js=new D,Hi=new D,sa=new D,Ks=new D,oa=new D;class yd{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){na.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(na);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Js),r=Hi.dot(this.direction),l=-Hi.dot(Js),c=Hi.lengthSq(),d=Math.abs(1-a*a);let u,h,f,g;if(d>0)if(u=a*l-r,h=a*r-l,g=s*d,u>=0)if(h>=-g)if(h<=g){const v=1/d;u*=v,h*=v,f=u*(u+a*h+2*r)+h*(a*u+h+2*l)+c}else h=s,u=Math.max(0,-(a*h+r)),f=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(a*h+r)),f=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-a*s+r)),h=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(u=Math.max(0,-(a*s+r)),h=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+h*(h+2*l)+c);else h=a>0?-s:s,u=Math.max(0,-(a*h+r)),f=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(na).addScaledVector(Js,h),f}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),n=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),r=i-a,l=i+a;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,r,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,n=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,n=(e.min.x-h.x)*c),d>=0?(s=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(s=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(r=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(r=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||r>n)||((r>i||i!==i)&&(i=r),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,i,n,s){sa.subVectors(t,e),Ks.subVectors(i,e),oa.crossVectors(sa,Ks);let a=this.direction.dot(oa),r;if(a>0){if(n)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Hi.subVectors(this.origin,e);const l=r*this.direction.dot(Ks.crossVectors(Hi,Ks));if(l<0)return null;const c=r*this.direction.dot(sa.cross(Hi));if(c<0||l+c>a)return null;const d=-r*Hi.dot(oa);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,n,s,a,r,l,c,d,u,h,f,g,v,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,r,l,c,d,u,h,f,g,v,m)}set(e,t,i,n,s,a,r,l,c,d,u,h,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=r,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=h,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/An.setFromMatrixColumn(e,0).length(),s=1/An.setFromMatrixColumn(e,1).length(),a=1/An.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),r=Math.sin(i),l=Math.cos(n),c=Math.sin(n),d=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=a*d,f=a*u,g=r*d,v=r*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=h-v*c,t[9]=-r*l,t[2]=v-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,f=l*u,g=c*d,v=c*u;t[0]=h+v*r,t[4]=g*r-f,t[8]=a*c,t[1]=a*u,t[5]=a*d,t[9]=-r,t[2]=f*r-g,t[6]=v+h*r,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,f=l*u,g=c*d,v=c*u;t[0]=h-v*r,t[4]=-a*u,t[8]=g+f*r,t[1]=f+g*r,t[5]=a*d,t[9]=v-h*r,t[2]=-a*c,t[6]=r,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,f=a*u,g=r*d,v=r*u;t[0]=l*d,t[4]=g*c-f,t[8]=h*c+v,t[1]=l*u,t[5]=v*c+h,t[9]=f*c-g,t[2]=-c,t[6]=r*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=r*l,v=r*c;t[0]=l*d,t[4]=v-h*u,t[8]=g*u+f,t[1]=u,t[5]=a*d,t[9]=-r*d,t[2]=-c*d,t[6]=f*u+g,t[10]=h-v*u}else if(e.order==="XZY"){const h=a*l,f=a*c,g=r*l,v=r*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=h*u+v,t[5]=a*d,t[9]=f*u-g,t[2]=g*u-f,t[6]=r*d,t[10]=v*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qh,e,eu)}lookAt(e,t,i){const n=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Vi.crossVectors(i,Yt),Vi.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Vi.crossVectors(i,Yt)),Vi.normalize(),Zs.crossVectors(Yt,Vi),n[0]=Vi.x,n[4]=Zs.x,n[8]=Yt.x,n[1]=Vi.y,n[5]=Zs.y,n[9]=Yt.y,n[2]=Vi.z,n[6]=Zs.z,n[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],r=i[4],l=i[8],c=i[12],d=i[1],u=i[5],h=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],b=i[3],M=i[7],y=i[11],R=i[15],E=n[0],A=n[4],I=n[8],T=n[12],_=n[1],P=n[5],G=n[9],U=n[13],O=n[2],W=n[6],j=n[10],K=n[14],X=n[3],ae=n[7],he=n[11],xe=n[15];return s[0]=a*E+r*_+l*O+c*X,s[4]=a*A+r*P+l*W+c*ae,s[8]=a*I+r*G+l*j+c*he,s[12]=a*T+r*U+l*K+c*xe,s[1]=d*E+u*_+h*O+f*X,s[5]=d*A+u*P+h*W+f*ae,s[9]=d*I+u*G+h*j+f*he,s[13]=d*T+u*U+h*K+f*xe,s[2]=g*E+v*_+m*O+p*X,s[6]=g*A+v*P+m*W+p*ae,s[10]=g*I+v*G+m*j+p*he,s[14]=g*T+v*U+m*K+p*xe,s[3]=b*E+M*_+y*O+R*X,s[7]=b*A+M*P+y*W+R*ae,s[11]=b*I+M*G+y*j+R*he,s[15]=b*T+M*U+y*K+R*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],r=e[5],l=e[9],c=e[13],d=e[2],u=e[6],h=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*u-n*c*u-s*r*h+i*c*h+n*r*f-i*l*f)+v*(+t*l*f-t*c*h+s*a*h-n*a*f+n*c*d-s*l*d)+m*(+t*c*u-t*r*f-s*a*u+i*a*f+s*r*d-i*c*d)+p*(-n*r*d-t*l*u+t*r*h+n*a*u-i*a*h+i*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],r=e[5],l=e[6],c=e[7],d=e[8],u=e[9],h=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=u*m*c-v*h*c+v*l*f-r*m*f-u*l*p+r*h*p,M=g*h*c-d*m*c-g*l*f+a*m*f+d*l*p-a*h*p,y=d*v*c-g*u*c+g*r*f-a*v*f-d*r*p+a*u*p,R=g*u*l-d*v*l-g*r*h+a*v*h+d*r*m-a*u*m,E=t*b+i*M+n*y+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=b*A,e[1]=(v*h*s-u*m*s-v*n*f+i*m*f+u*n*p-i*h*p)*A,e[2]=(r*m*s-v*l*s+v*n*c-i*m*c-r*n*p+i*l*p)*A,e[3]=(u*l*s-r*h*s-u*n*c+i*h*c+r*n*f-i*l*f)*A,e[4]=M*A,e[5]=(d*m*s-g*h*s+g*n*f-t*m*f-d*n*p+t*h*p)*A,e[6]=(g*l*s-a*m*s-g*n*c+t*m*c+a*n*p-t*l*p)*A,e[7]=(a*h*s-d*l*s+d*n*c-t*h*c-a*n*f+t*l*f)*A,e[8]=y*A,e[9]=(g*u*s-d*v*s-g*i*f+t*v*f+d*i*p-t*u*p)*A,e[10]=(a*v*s-g*r*s+g*i*c-t*v*c-a*i*p+t*r*p)*A,e[11]=(d*r*s-a*u*s-d*i*c+t*u*c+a*i*f-t*r*f)*A,e[12]=R*A,e[13]=(d*v*n-g*u*n+g*i*h-t*v*h-d*i*m+t*u*m)*A,e[14]=(g*r*n-a*v*n-g*i*l+t*v*l+a*i*m-t*r*m)*A,e[15]=(a*u*n-d*r*n+d*i*l-t*u*l-a*i*h+t*r*h)*A,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,r=e.y,l=e.z,c=s*a,d=s*r;return this.set(c*a+i,c*r-n*l,c*l+n*r,0,c*r+n*l,d*r+i,d*l-n*a,0,c*l-n*r,d*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,r=t._z,l=t._w,c=s+s,d=a+a,u=r+r,h=s*c,f=s*d,g=s*u,v=a*d,m=a*u,p=r*u,b=l*c,M=l*d,y=l*u,R=i.x,E=i.y,A=i.z;return n[0]=(1-(v+p))*R,n[1]=(f+y)*R,n[2]=(g-M)*R,n[3]=0,n[4]=(f-y)*E,n[5]=(1-(h+p))*E,n[6]=(m+b)*E,n[7]=0,n[8]=(g+M)*A,n[9]=(m-b)*A,n[10]=(1-(h+v))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=An.set(n[0],n[1],n[2]).length();const a=An.set(n[4],n[5],n[6]).length(),r=An.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],si.copy(this);const c=1/s,d=1/a,u=1/r;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=d,si.elements[5]*=d,si.elements[6]*=d,si.elements[8]*=u,si.elements[9]*=u,si.elements[10]*=u,t.setFromRotationMatrix(si),i.x=s,i.y=a,i.z=r,this}makePerspective(e,t,i,n,s,a,r=Ii){const l=this.elements,c=2*s/(t-e),d=2*s/(i-n),u=(t+e)/(t-e),h=(i+n)/(i-n);let f,g;if(r===Ii)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(r===Do)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,r=Ii){const l=this.elements,c=1/(t-e),d=1/(i-n),u=1/(a-s),h=(t+e)*c,f=(i+n)*d;let g,v;if(r===Ii)g=(a+s)*u,v=-2*u;else if(r===Do)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const An=new D,si=new gt,Qh=new D(0,0,0),eu=new D(1,1,1),Vi=new D,Zs=new D,Yt=new D,El=new gt,Cl=new ei;class $t{constructor(e=0,t=0,i=0,n=$t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],r=n[8],l=n[1],c=n[5],d=n[9],u=n[2],h=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Wt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return El.makeRotationFromQuaternion(e),this.setFromRotationMatrix(El,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$t.DEFAULT_ORDER="XYZ";class xd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tu=0;const Al=new D,Rn=new ei,Ti=new gt,Qs=new D,ms=new D,iu=new D,nu=new ei,Rl=new D(1,0,0),Pl=new D(0,1,0),Il=new D(0,0,1),Ll={type:"added"},su={type:"removed"},Pn={type:"childadded",child:null},aa={type:"childremoved",child:null};class Mt extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tu++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new D,t=new $t,i=new ei,n=new D(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new gt},normalMatrix:{value:new We}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rn.setFromAxisAngle(e,t),this.quaternion.multiply(Rn),this}rotateOnWorldAxis(e,t){return Rn.setFromAxisAngle(e,t),this.quaternion.premultiply(Rn),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qs.copy(e):Qs.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(ms,Qs,this.up):Ti.lookAt(Qs,ms,this.up),this.quaternion.setFromRotationMatrix(Ti),n&&(Ti.extractRotation(n.matrixWorld),Rn.setFromRotationMatrix(Ti),this.quaternion.premultiply(Rn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ll),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(su),aa.child=e,this.dispatchEvent(aa),aa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ll),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,iu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,nu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(e.materials,this.material[l]));n.material=r}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];n.animations.push(s(e.animations,l))}}if(t){const r=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),u=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(r){const l=[];for(const c in r){const d=r[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Mt.DEFAULT_UP=new D(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new D,Si=new D,ra=new D,Ei=new D,In=new D,Ln=new D,Dl=new D,la=new D,ca=new D,da=new D,ha=new rt,ua=new rt,fa=new rt;class ci{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),oi.subVectors(e,t),n.cross(oi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){oi.subVectors(n,t),Si.subVectors(i,t),ra.subVectors(e,t);const a=oi.dot(oi),r=oi.dot(Si),l=oi.dot(ra),c=Si.dot(Si),d=Si.dot(ra),u=a*c-r*r;if(u===0)return s.set(0,0,0),null;const h=1/u,f=(c*l-r*d)*h,g=(a*d-r*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,n,s,a,r,l){return this.getBarycoord(e,t,i,n,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(r,Ei.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return ha.setScalar(0),ua.setScalar(0),fa.setScalar(0),ha.fromBufferAttribute(e,t),ua.fromBufferAttribute(e,i),fa.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(ha,s.x),a.addScaledVector(ua,s.y),a.addScaledVector(fa,s.z),a}static isFrontFacing(e,t,i,n){return oi.subVectors(i,t),Si.subVectors(e,t),oi.cross(Si).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),oi.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,r;In.subVectors(n,i),Ln.subVectors(s,i),la.subVectors(e,i);const l=In.dot(la),c=Ln.dot(la);if(l<=0&&c<=0)return t.copy(i);ca.subVectors(e,n);const d=In.dot(ca),u=Ln.dot(ca);if(d>=0&&u<=d)return t.copy(n);const h=l*u-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(i).addScaledVector(In,a);da.subVectors(e,s);const f=In.dot(da),g=Ln.dot(da);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(i).addScaledVector(Ln,r);const m=d*g-f*u;if(m<=0&&u-d>=0&&f-g>=0)return Dl.subVectors(s,n),r=(u-d)/(u-d+(f-g)),t.copy(n).addScaledVector(Dl,r);const p=1/(m+v+h);return a=v*p,r=h*p,t.copy(i).addScaledVector(In,a).addScaledVector(Ln,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},eo={h:0,s:0,l:0};function pa(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class Se{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Je.workingColorSpace){if(e=Hh(e,1),t=Wt(t,0,1),i=Wt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=pa(a,s,e+1/3),this.g=pa(a,s,e),this.b=pa(a,s,e-1/3)}return Je.toWorkingColorSpace(this,n),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],r=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=_d[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Je.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Wt(Lt.r*255,0,255))*65536+Math.round(Wt(Lt.g*255,0,255))*256+Math.round(Wt(Lt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,n=Lt.g,s=Lt.b,a=Math.max(i,n,s),r=Math.min(i,n,s);let l,c;const d=(r+a)/2;if(r===a)l=0,c=0;else{const u=a-r;switch(c=d<=.5?u/(a+r):u/(2-a-r),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Qt){Je.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,n=Lt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(eo);const i=Ko(Wi.h,eo.h,t),n=Ko(Wi.s,eo.s,t),s=Ko(Wi.l,eo.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new Se;Se.NAMES=_d;let ou=0;class os extends bn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=ss(),this.name="",this.blending=Wn,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Na,this.blendEquation=un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=jn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mn,this.stencilZFail=Mn,this.stencilZPass=Mn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wn&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ka&&(i.blendSrc=this.blendSrc),this.blendDst!==Na&&(i.blendDst=this.blendDst),this.blendEquation!==un&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const r in s){const l=s[r];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zt extends os{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new D,to=new Ne;class fi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vl,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=us(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=us(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=us(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=us(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}}class bd extends fi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wd extends fi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class lt extends fi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let au=0;const Kt=new gt,ma=new Mt,Dn=new D,jt=new Os,gs=new Os,Ct=new D;class Ft extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:au++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(md(e)?wd:bd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return ma.lookAt(e),ma.updateMatrix(),this.applyMatrix4(ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dn).negate(),this.translate(Dn.x,Dn.y,Dn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(i,3))}else{for(let i=0,n=t.count;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ho);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const r=t[s];gs.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(jt.min,gs.min),jt.expandByPoint(Ct),Ct.addVectors(jt.max,gs.max),jt.expandByPoint(Ct)):(jt.expandByPoint(gs.min),jt.expandByPoint(gs.max))}jt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){const r=t[s],l=this.morphTargetsRelative;for(let c=0,d=r.count;c<d;c++)Ct.fromBufferAttribute(r,c),l&&(Dn.fromBufferAttribute(e,c),Ct.add(Dn)),n=Math.max(n,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let I=0;I<i.count;I++)r[I]=new D,l[I]=new D;const c=new D,d=new D,u=new D,h=new Ne,f=new Ne,g=new Ne,v=new D,m=new D;function p(I,T,_){c.fromBufferAttribute(i,I),d.fromBufferAttribute(i,T),u.fromBufferAttribute(i,_),h.fromBufferAttribute(s,I),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,_),d.sub(c),u.sub(c),f.sub(h),g.sub(h);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(d,-g.x).multiplyScalar(P),r[I].add(v),r[T].add(v),r[_].add(v),l[I].add(m),l[T].add(m),l[_].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,T=b.length;I<T;++I){const _=b[I],P=_.start,G=_.count;for(let U=P,O=P+G;U<O;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const M=new D,y=new D,R=new D,E=new D;function A(I){R.fromBufferAttribute(n,I),E.copy(R);const T=r[I];M.copy(T),M.sub(R.multiplyScalar(R.dot(T))).normalize(),y.crossVectors(E,T);const P=y.dot(l[I])<0?-1:1;a.setXYZW(I,M.x,M.y,M.z,P)}for(let I=0,T=b.length;I<T;++I){const _=b[I],P=_.start,G=_.count;for(let U=P,O=P+G;U<O;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const n=new D,s=new D,a=new D,r=new D,l=new D,c=new D,d=new D,u=new D;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),d.subVectors(a,s),u.subVectors(n,s),d.cross(u),r.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),r.add(d),l.add(d),c.add(d),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)n.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,s),u.subVectors(n,s),d.cross(u),i.setXYZ(h+0,d.x,d.y,d.z),i.setXYZ(h+1,d.x,d.y,d.z),i.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(r,l){const c=r.array,d=r.itemSize,u=r.normalized,h=new c.constructor(l.length*d);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){r.isInterleavedBufferAttribute?f=l[v]*r.data.stride+r.offset:f=l[v]*d;for(let p=0;p<d;p++)h[g++]=c[f++]}return new fi(h,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,i=this.index.array,n=this.attributes;for(const r in n){const l=n[r],c=e(l,i);t.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let d=0,u=c.length;d<u;d++){const h=c[d],f=e(h,i);l.push(f)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,h=c.length;u<h;u++){const f=c[u];d.push(f.toJSON(e.data))}d.length>0&&(n[l]=d,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const d=n[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],u=s[c];for(let h=0,f=u.length;h<f;h++)d.push(u[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bl=new gt,nn=new yd,io=new Ho,Fl=new D,no=new D,so=new D,oo=new D,ga=new D,ao=new D,kl=new D,ro=new D;class B extends Mt{constructor(e=new Ft,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const r=this.morphTargetInfluences;if(s&&r){ao.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=r[l],u=s[l];d!==0&&(ga.fromBufferAttribute(u,e),a?ao.addScaledVector(ga,d):ao.addScaledVector(ga.sub(t),d))}t.add(ao)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),nn.copy(e.ray).recast(e.near),!(io.containsPoint(nn.origin)===!1&&(nn.intersectSphere(io,Fl)===null||nn.origin.distanceToSquared(Fl)>(e.far-e.near)**2))&&(Bl.copy(s).invert(),nn.copy(e.ray).applyMatrix4(Bl),!(i.boundingBox!==null&&nn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,nn)))}_computeIntersections(e,t,i){let n;const s=this.geometry,a=this.material,r=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,u=s.attributes.normal,h=s.groups,f=s.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(r.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,R=M;y<R;y+=3){const E=r.getX(y),A=r.getX(y+1),I=r.getX(y+2);n=lo(this,p,e,i,c,d,u,E,A,I),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(r.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const b=r.getX(m),M=r.getX(m+1),y=r.getX(m+2);n=lo(this,a,e,i,c,d,u,b,M,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,R=M;y<R;y+=3){const E=y,A=y+1,I=y+2;n=lo(this,p,e,i,c,d,u,E,A,I),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const b=m,M=m+1,y=m+2;n=lo(this,a,e,i,c,d,u,b,M,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function ru(o,e,t,i,n,s,a,r){let l;if(e.side===Bt?l=i.intersectTriangle(a,s,n,!0,r):l=i.intersectTriangle(n,s,a,e.side===Ki,r),l===null)return null;ro.copy(r),ro.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(ro);return c<t.near||c>t.far?null:{distance:c,point:ro.clone(),object:o}}function lo(o,e,t,i,n,s,a,r,l,c){o.getVertexPosition(r,no),o.getVertexPosition(l,so),o.getVertexPosition(c,oo);const d=ru(o,e,t,i,no,so,oo,kl);if(d){const u=new D;ci.getBarycoord(kl,no,so,oo,u),n&&(d.uv=ci.getInterpolatedAttribute(n,r,l,c,u,new Ne)),s&&(d.uv1=ci.getInterpolatedAttribute(s,r,l,c,u,new Ne)),a&&(d.normal=ci.getInterpolatedAttribute(a,r,l,c,u,new D),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:r,b:l,c,normal:new D,materialIndex:0};ci.getNormal(no,so,oo,h.normal),d.face=h,d.barycoord=u}return d}class Q extends Ft{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const r=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],u=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(u,2));function g(v,m,p,b,M,y,R,E,A,I,T){const _=y/A,P=R/I,G=y/2,U=R/2,O=E/2,W=A+1,j=I+1;let K=0,X=0;const ae=new D;for(let he=0;he<j;he++){const xe=he*P-U;for(let Re=0;Re<W;Re++){const Ue=Re*_-G;ae[v]=Ue*b,ae[m]=xe*M,ae[p]=O,c.push(ae.x,ae.y,ae.z),ae[v]=0,ae[m]=0,ae[p]=E>0?1:-1,d.push(ae.x,ae.y,ae.z),u.push(Re/A),u.push(1-he/I),K+=1}}for(let he=0;he<I;he++)for(let xe=0;xe<A;xe++){const Re=h+xe+W*he,Ue=h+xe+W*(he+1),Y=h+(xe+1)+W*(he+1),ne=h+(xe+1)+W*he;l.push(Re,Ue,ne),l.push(Ue,Y,ne),X+=6}r.addGroup(f,X,T),f+=X,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Q(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zn(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const n=o[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function kt(o){const e={};for(let t=0;t<o.length;t++){const i=Zn(o[t]);for(const n in i)e[n]=i[n]}return e}function lu(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function Md(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Bs={clone:Zn,merge:kt};var cu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,du=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends os{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cu,this.fragmentShader=du,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zn(e.uniforms),this.uniformsGroups=lu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Td extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new D,Nl=new Ne,Ul=new Ne;class Nt extends Td{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan(Jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Nl,Ul),t.subVectors(Ul,Nl)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jo*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bn=-90,Fn=1;class hu extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Nt(Bn,Fn,e,t);n.layers=this.layers,this.add(n);const s=new Nt(Bn,Fn,e,t);s.layers=this.layers,this.add(s);const a=new Nt(Bn,Fn,e,t);a.layers=this.layers,this.add(a);const r=new Nt(Bn,Fn,e,t);r.layers=this.layers,this.add(r);const l=new Nt(Bn,Fn,e,t);l.layers=this.layers,this.add(l);const c=new Nt(Bn,Fn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,r,l]=t;for(const c of t)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Do)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,r,l,c,d]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,r),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,d),e.setRenderTarget(u,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sd extends Ot{constructor(e,t,i,n,s,a,r,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:qn,super(e,t,i,n,s,a,r,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uu extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Sd(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Q(5,5,5),s=new Dt({name:"CubemapFromEquirect",uniforms:Zn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Li});s.uniforms.tEquirect.value=t;const a=new B(n,s),r=t.minFilter;return t.minFilter===vn&&(t.minFilter=yi),new hu(1,10,this).update(e,a),t.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}const va=new D,fu=new D,pu=new We;class dn{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=va.subVectors(i,t).cross(fu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(va),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||pu.getNormalMatrix(e),n=this.coplanarPoint(va).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sn=new Ho,co=new D;class Gr{constructor(e=new dn,t=new dn,i=new dn,n=new dn,s=new dn,a=new dn){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(i),r[3].copy(n),r[4].copy(s),r[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii){const i=this.planes,n=e.elements,s=n[0],a=n[1],r=n[2],l=n[3],c=n[4],d=n[5],u=n[6],h=n[7],f=n[8],g=n[9],v=n[10],m=n[11],p=n[12],b=n[13],M=n[14],y=n[15];if(i[0].setComponents(l-s,h-c,m-f,y-p).normalize(),i[1].setComponents(l+s,h+c,m+f,y+p).normalize(),i[2].setComponents(l+a,h+d,m+g,y+b).normalize(),i[3].setComponents(l-a,h-d,m-g,y-b).normalize(),i[4].setComponents(l-r,h-u,m-v,y-M).normalize(),t===Ii)i[5].setComponents(l+r,h+u,m+v,y+M).normalize();else if(t===Do)i[5].setComponents(r,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),sn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sn)}intersectsSprite(e){return sn.center.set(0,0,0),sn.radius=.7071067811865476,sn.applyMatrix4(e.matrixWorld),this.intersectsSphere(sn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(co.x=n.normal.x>0?e.max.x:e.min.x,co.y=n.normal.y>0?e.max.y:e.min.y,co.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ed(){let o=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=o.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(n),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function mu(o){const e=new WeakMap;function t(r,l){const c=r.array,d=r.usage,u=c.byteLength,h=o.createBuffer();o.bindBuffer(l,h),o.bufferData(l,c,d),r.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function i(r,l,c){const d=l.array,u=l.updateRanges;if(o.bindBuffer(c,r),u.length===0)o.bufferSubData(c,0,d);else{u.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<u.length;f++){const g=u[h],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,u[h]=v)}u.length=h+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];o.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(o.deleteBuffer(l.buffer),e.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const d=e.get(r);(!d||d.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,r,l),c.version=r.version}}return{get:n,remove:s,update:a}}class mt extends Ft{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,r=Math.floor(i),l=Math.floor(n),c=r+1,d=l+1,u=e/r,h=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<d;p++){const b=p*h-a;for(let M=0;M<c;M++){const y=M*u-s;g.push(y,-b,0),v.push(0,0,1),m.push(M/r),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<r;b++){const M=b+c*p,y=b+c*(p+1),R=b+1+c*(p+1),E=b+1+c*p;f.push(M,y,E),f.push(y,R,E)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.width,e.height,e.widthSegments,e.heightSegments)}}var gu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vu=`#ifdef USE_ALPHAHASH
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
#endif`,yu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wu=`#ifdef USE_AOMAP
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
#endif`,Mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tu=`#ifdef USE_BATCHING
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
#endif`,Su=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Au=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ru=`#ifdef USE_IRIDESCENCE
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
#endif`,Pu=`#ifdef USE_BUMPMAP
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
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Uu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ou=`#define PI 3.141592653589793
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
} // validated`,zu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gu=`vec3 transformedNormal = objectNormal;
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
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ju=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qu=`#ifdef USE_ENVMAP
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
#endif`,$u=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ju=`#ifdef USE_ENVMAP
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
#endif`,Ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zu=`#ifdef USE_ENVMAP
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
#endif`,Qu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ef=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sf=`#ifdef USE_GRADIENTMAP
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
}`,of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lf=`uniform bool receiveShadow;
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
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pf=`PhysicalMaterial material;
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
#endif`,mf=`struct PhysicalMaterial {
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
}`,gf=`
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
#endif`,vf=`#if defined( RE_IndirectDiffuse )
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
#endif`,yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_f=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ef=`#if defined( USE_POINTS_UV )
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
#endif`,Cf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Af=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,If=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lf=`#ifdef USE_MORPHTARGETS
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
#endif`,Df=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ff=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Of=`#ifdef USE_NORMALMAP
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
#endif`,zf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$f=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ep=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tp=`float getShadowMask() {
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
}`,ip=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,sp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,op=`#ifdef USE_SKINNING
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
#endif`,ap=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,hp=`#ifdef USE_TRANSMISSION
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vp=`uniform sampler2D t2D;
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
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wp=`#include <common>
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
}`,Mp=`#if DEPTH_PACKING == 3200
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
}`,Tp=`#define DISTANCE
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
}`,Sp=`#define DISTANCE
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
}`,Ep=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ap=`uniform float scale;
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Lp=`#define LAMBERT
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
}`,Dp=`#define LAMBERT
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
}`,Bp=`#define MATCAP
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
}`,Fp=`#define MATCAP
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
}`,kp=`#define NORMAL
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
}`,Np=`#define NORMAL
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
}`,Up=`#define PHONG
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
}`,Op=`#define PHONG
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
}`,zp=`#define STANDARD
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
}`,Gp=`#define STANDARD
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
}`,Hp=`#define TOON
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
}`,Vp=`#define TOON
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
}`,Wp=`uniform float size;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,jp=`uniform vec3 color;
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
}`,qp=`uniform float rotation;
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
}`,$p=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:gu,alphahash_pars_fragment:vu,alphamap_fragment:yu,alphamap_pars_fragment:xu,alphatest_fragment:_u,alphatest_pars_fragment:bu,aomap_fragment:wu,aomap_pars_fragment:Mu,batching_pars_vertex:Tu,batching_vertex:Su,begin_vertex:Eu,beginnormal_vertex:Cu,bsdfs:Au,iridescence_fragment:Ru,bumpmap_pars_fragment:Pu,clipping_planes_fragment:Iu,clipping_planes_pars_fragment:Lu,clipping_planes_pars_vertex:Du,clipping_planes_vertex:Bu,color_fragment:Fu,color_pars_fragment:ku,color_pars_vertex:Nu,color_vertex:Uu,common:Ou,cube_uv_reflection_fragment:zu,defaultnormal_vertex:Gu,displacementmap_pars_vertex:Hu,displacementmap_vertex:Vu,emissivemap_fragment:Wu,emissivemap_pars_fragment:Xu,colorspace_fragment:Yu,colorspace_pars_fragment:ju,envmap_fragment:qu,envmap_common_pars_fragment:$u,envmap_pars_fragment:Ju,envmap_pars_vertex:Ku,envmap_physical_pars_fragment:cf,envmap_vertex:Zu,fog_vertex:Qu,fog_pars_vertex:ef,fog_fragment:tf,fog_pars_fragment:nf,gradientmap_pars_fragment:sf,lightmap_pars_fragment:of,lights_lambert_fragment:af,lights_lambert_pars_fragment:rf,lights_pars_begin:lf,lights_toon_fragment:df,lights_toon_pars_fragment:hf,lights_phong_fragment:uf,lights_phong_pars_fragment:ff,lights_physical_fragment:pf,lights_physical_pars_fragment:mf,lights_fragment_begin:gf,lights_fragment_maps:vf,lights_fragment_end:yf,logdepthbuf_fragment:xf,logdepthbuf_pars_fragment:_f,logdepthbuf_pars_vertex:bf,logdepthbuf_vertex:wf,map_fragment:Mf,map_pars_fragment:Tf,map_particle_fragment:Sf,map_particle_pars_fragment:Ef,metalnessmap_fragment:Cf,metalnessmap_pars_fragment:Af,morphinstance_vertex:Rf,morphcolor_vertex:Pf,morphnormal_vertex:If,morphtarget_pars_vertex:Lf,morphtarget_vertex:Df,normal_fragment_begin:Bf,normal_fragment_maps:Ff,normal_pars_fragment:kf,normal_pars_vertex:Nf,normal_vertex:Uf,normalmap_pars_fragment:Of,clearcoat_normal_fragment_begin:zf,clearcoat_normal_fragment_maps:Gf,clearcoat_pars_fragment:Hf,iridescence_pars_fragment:Vf,opaque_fragment:Wf,packing:Xf,premultiplied_alpha_fragment:Yf,project_vertex:jf,dithering_fragment:qf,dithering_pars_fragment:$f,roughnessmap_fragment:Jf,roughnessmap_pars_fragment:Kf,shadowmap_pars_fragment:Zf,shadowmap_pars_vertex:Qf,shadowmap_vertex:ep,shadowmask_pars_fragment:tp,skinbase_vertex:ip,skinning_pars_vertex:np,skinning_vertex:sp,skinnormal_vertex:op,specularmap_fragment:ap,specularmap_pars_fragment:rp,tonemapping_fragment:lp,tonemapping_pars_fragment:cp,transmission_fragment:dp,transmission_pars_fragment:hp,uv_pars_fragment:up,uv_pars_vertex:fp,uv_vertex:pp,worldpos_vertex:mp,background_vert:gp,background_frag:vp,backgroundCube_vert:yp,backgroundCube_frag:xp,cube_vert:_p,cube_frag:bp,depth_vert:wp,depth_frag:Mp,distanceRGBA_vert:Tp,distanceRGBA_frag:Sp,equirect_vert:Ep,equirect_frag:Cp,linedashed_vert:Ap,linedashed_frag:Rp,meshbasic_vert:Pp,meshbasic_frag:Ip,meshlambert_vert:Lp,meshlambert_frag:Dp,meshmatcap_vert:Bp,meshmatcap_frag:Fp,meshnormal_vert:kp,meshnormal_frag:Np,meshphong_vert:Up,meshphong_frag:Op,meshphysical_vert:zp,meshphysical_frag:Gp,meshtoon_vert:Hp,meshtoon_frag:Vp,points_vert:Wp,points_frag:Xp,shadow_vert:Yp,shadow_frag:jp,sprite_vert:qp,sprite_frag:$p},ce={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},vi={basic:{uniforms:kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Se(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Se(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:kt([ce.points,ce.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:kt([ce.common,ce.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:kt([ce.sprite,ce.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:kt([ce.common,ce.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:kt([ce.lights,ce.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};vi.physical={uniforms:kt([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ho={r:0,b:0,g:0},on=new $t,Jp=new gt;function Kp(o,e,t,i,n,s,a){const r=new Se(0);let l=s===!0?0:1,c,d,u=null,h=0,f=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function v(b){let M=!1;const y=g(b);y===null?p(r,l):y&&y.isColor&&(p(y,1),M=!0);const R=o.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(o.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function m(b,M){const y=g(M);y&&(y.isCubeTexture||y.mapping===zo)?(d===void 0&&(d=new B(new Q(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Zn(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(R,E,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(d)),on.copy(M.backgroundRotation),on.x*=-1,on.y*=-1,on.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(on.y*=-1,on.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Jp.makeRotationFromEuler(on)),d.material.toneMapped=Je.getTransfer(y.colorSpace)!==ot,(u!==y||h!==y.version||f!==o.toneMapping)&&(d.material.needsUpdate=!0,u=y,h=y.version,f=o.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new B(new mt(2,2),new Dt({name:"BackgroundMaterial",uniforms:Zn(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Je.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=o.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,M){b.getRGB(ho,Md(o)),i.buffers.color.setClear(ho.r,ho.g,ho.b,M,a)}return{getClearColor:function(){return r},setClearColor:function(b,M=1){r.set(b),l=M,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(r,l)},render:v,addToRenderList:m}}function Zp(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},n=h(null);let s=n,a=!1;function r(_,P,G,U,O){let W=!1;const j=u(U,G,P);s!==j&&(s=j,c(s.object)),W=f(_,U,G,O),W&&g(_,U,G,O),O!==null&&e.update(O,o.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(_,P,G,U),O!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return o.createVertexArray()}function c(_){return o.bindVertexArray(_)}function d(_){return o.deleteVertexArray(_)}function u(_,P,G){const U=G.wireframe===!0;let O=i[_.id];O===void 0&&(O={},i[_.id]=O);let W=O[P.id];W===void 0&&(W={},O[P.id]=W);let j=W[U];return j===void 0&&(j=h(l()),W[U]=j),j}function h(_){const P=[],G=[],U=[];for(let O=0;O<t;O++)P[O]=0,G[O]=0,U[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:U,object:_,attributes:{},index:null}}function f(_,P,G,U){const O=s.attributes,W=P.attributes;let j=0;const K=G.getAttributes();for(const X in K)if(K[X].location>=0){const he=O[X];let xe=W[X];if(xe===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(xe=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(xe=_.instanceColor)),he===void 0||he.attribute!==xe||xe&&he.data!==xe.data)return!0;j++}return s.attributesNum!==j||s.index!==U}function g(_,P,G,U){const O={},W=P.attributes;let j=0;const K=G.getAttributes();for(const X in K)if(K[X].location>=0){let he=W[X];he===void 0&&(X==="instanceMatrix"&&_.instanceMatrix&&(he=_.instanceMatrix),X==="instanceColor"&&_.instanceColor&&(he=_.instanceColor));const xe={};xe.attribute=he,he&&he.data&&(xe.data=he.data),O[X]=xe,j++}s.attributes=O,s.attributesNum=j,s.index=U}function v(){const _=s.newAttributes;for(let P=0,G=_.length;P<G;P++)_[P]=0}function m(_){p(_,0)}function p(_,P){const G=s.newAttributes,U=s.enabledAttributes,O=s.attributeDivisors;G[_]=1,U[_]===0&&(o.enableVertexAttribArray(_),U[_]=1),O[_]!==P&&(o.vertexAttribDivisor(_,P),O[_]=P)}function b(){const _=s.newAttributes,P=s.enabledAttributes;for(let G=0,U=P.length;G<U;G++)P[G]!==_[G]&&(o.disableVertexAttribArray(G),P[G]=0)}function M(_,P,G,U,O,W,j){j===!0?o.vertexAttribIPointer(_,P,G,O,W):o.vertexAttribPointer(_,P,G,U,O,W)}function y(_,P,G,U){v();const O=U.attributes,W=G.getAttributes(),j=P.defaultAttributeValues;for(const K in W){const X=W[K];if(X.location>=0){let ae=O[K];if(ae===void 0&&(K==="instanceMatrix"&&_.instanceMatrix&&(ae=_.instanceMatrix),K==="instanceColor"&&_.instanceColor&&(ae=_.instanceColor)),ae!==void 0){const he=ae.normalized,xe=ae.itemSize,Re=e.get(ae);if(Re===void 0)continue;const Ue=Re.buffer,Y=Re.type,ne=Re.bytesPerElement,te=Y===o.INT||Y===o.UNSIGNED_INT||ae.gpuType===Br;if(ae.isInterleavedBufferAttribute){const se=ae.data,pe=se.stride,De=ae.offset;if(se.isInstancedInterleavedBuffer){for(let Fe=0;Fe<X.locationSize;Fe++)p(X.location+Fe,se.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Fe=0;Fe<X.locationSize;Fe++)m(X.location+Fe);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let Fe=0;Fe<X.locationSize;Fe++)M(X.location+Fe,xe/X.locationSize,Y,he,pe*ne,(De+xe/X.locationSize*Fe)*ne,te)}else{if(ae.isInstancedBufferAttribute){for(let se=0;se<X.locationSize;se++)p(X.location+se,ae.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let se=0;se<X.locationSize;se++)m(X.location+se);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let se=0;se<X.locationSize;se++)M(X.location+se,xe/X.locationSize,Y,he,xe*ne,xe/X.locationSize*se*ne,te)}}else if(j!==void 0){const he=j[K];if(he!==void 0)switch(he.length){case 2:o.vertexAttrib2fv(X.location,he);break;case 3:o.vertexAttrib3fv(X.location,he);break;case 4:o.vertexAttrib4fv(X.location,he);break;default:o.vertexAttrib1fv(X.location,he)}}}}b()}function R(){I();for(const _ in i){const P=i[_];for(const G in P){const U=P[G];for(const O in U)d(U[O].object),delete U[O];delete P[G]}delete i[_]}}function E(_){if(i[_.id]===void 0)return;const P=i[_.id];for(const G in P){const U=P[G];for(const O in U)d(U[O].object),delete U[O];delete P[G]}delete i[_.id]}function A(_){for(const P in i){const G=i[P];if(G[_.id]===void 0)continue;const U=G[_.id];for(const O in U)d(U[O].object),delete U[O];delete G[_.id]}}function I(){T(),a=!0,s!==n&&(s=n,c(s.object))}function T(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:r,reset:I,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Qp(o,e,t){let i;function n(c){i=c}function s(c,d){o.drawArrays(i,c,d),t.update(d,i,1)}function a(c,d,u){u!==0&&(o.drawArraysInstanced(i,c,d,u),t.update(d,i,u))}function r(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,u);let f=0;for(let g=0;g<u;g++)f+=d[g];t.update(f,i,1)}function l(c,d,u,h){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],d[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,d,0,h,0,u);let g=0;for(let v=0;v<u;v++)g+=d[v]*h[v];t.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function e0(o,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==di&&i.convert(A)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(A){const I=A===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ki&&i.convert(A)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pi&&!I)}function l(A){if(A==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_TEXTURE_SIZE),m=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),b=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),M=o.getParameter(o.MAX_VARYING_VECTORS),y=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:R,maxSamples:E}}function t0(o){const e=this;let t=null,i=0,n=!1,s=!1;const a=new dn,r=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const f=u.length!==0||h||i!==0||n;return n=h,i=u.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=d(u,h,0)},this.setState=function(u,h,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=o.get(u);if(!n||g===null||g.length===0||s&&!m)s?d(null):c();else{const b=s?0:i,M=b*4;let y=p.clippingState||null;l.value=y,y=d(g,h,M,f);for(let R=0;R!==M;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(u,h,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,b=h.matrixWorldInverse;r.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=f;M!==v;++M,y+=4)a.copy(u[M]).applyMatrix4(b,r),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function i0(o){let e=new WeakMap;function t(a,r){return r===Xa?a.mapping=qn:r===Ya&&(a.mapping=$n),a}function i(a){if(a&&a.isTexture){const r=a.mapping;if(r===Xa||r===Ya)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new uu(l.height);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const r=a.target;r.removeEventListener("dispose",n);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Hr extends Td{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,r=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,r-=d*this.view.offsetY,l=r-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hn=4,Ol=[.125,.215,.35,.446,.526,.582],fn=20,ya=new Hr,zl=new Se;let xa=null,_a=0,ba=0,wa=!1;const hn=(1+Math.sqrt(5))/2,kn=1/hn,Gl=[new D(-hn,kn,0),new D(hn,kn,0),new D(-kn,0,hn),new D(kn,0,hn),new D(0,hn,-kn),new D(0,hn,kn),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Hl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){xa=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(xa,_a,ba),this._renderer.xr.enabled=wa,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xa=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),ba=this._renderer.getActiveMipmapLevel(),wa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Di,format:di,colorSpace:ns,depthBuffer:!1},n=Vl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=n0(s)),this._blurMaterial=s0(s,e,t)}return n}_compileMaterial(e){const t=new B(this._lodPlanes[0],e);this._renderer.compile(t,ya)}_sceneToCubeUV(e,t,i,n){const r=new Nt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,h=d.toneMapping;d.getClearColor(zl),d.toneMapping=Ji,d.autoClear=!1;const f=new zt({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new B(new Q,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(zl),v=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(r.up.set(0,l[p],0),r.lookAt(c[p],0,0)):b===1?(r.up.set(0,0,l[p]),r.lookAt(0,c[p],0)):(r.up.set(0,l[p],0),r.lookAt(0,0,c[p]));const M=this._cubeSize;uo(n,b*M,p>2?M:0,M,M),d.setRenderTarget(n),v&&d.render(g,r),d.render(e,r)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=h,d.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===qn||e.mapping===$n;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new B(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const l=this._cubeSize;uo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,ya)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=Gl[(n-s-1)%Gl.length];this._blur(e,s-1,s,a,r)}t.autoClear=i}_blur(e,t,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new B(this._lodPlanes[n],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*fn-1),v=s/g,m=isFinite(s)?1+Math.floor(d*v):fn;m>fn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fn}`);const p=[];let b=0;for(let A=0;A<fn;++A){const I=A/v,T=Math.exp(-I*I/2);p.push(T),A===0?b+=T:A<m&&(b+=2*T)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",r&&(h.poleAxis.value=r);const{_lodMax:M}=this;h.dTheta.value=g,h.mipInt.value=M-i;const y=this._sizeLods[n],R=3*y*(n>M-Hn?n-M+Hn:0),E=4*(this._cubeSize-y);uo(t,R,E,3*y,2*y),l.setRenderTarget(t),l.render(u,ya)}}function n0(o){const e=[],t=[],i=[];let n=o;const s=o-Hn+1+Ol.length;for(let a=0;a<s;a++){const r=Math.pow(2,n);t.push(r);let l=1/r;a>o-Hn?l=Ol[a-o+Hn-1]:a===0&&(l=0),i.push(l);const c=1/(r-2),d=-c,u=1+c,h=[d,d,u,d,u,u,d,d,u,u,d,u],f=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*f),M=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let E=0;E<f;E++){const A=E%3*2/3-1,I=E>2?0:-1,T=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];b.set(T,v*g*E),M.set(h,m*g*E);const _=[E,E,E,E,E,E];y.set(_,p*g*E)}const R=new Ft;R.setAttribute("position",new fi(b,v)),R.setAttribute("uv",new fi(M,m)),R.setAttribute("faceIndex",new fi(y,p)),e.push(R),n>Hn&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vl(o,e,t){const i=new ui(o,e,t);return i.texture.mapping=zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(o,e,t,i,n){o.viewport.set(e,t,i,n),o.scissor.set(e,t,i,n)}function s0(o,e,t){const i=new Float32Array(fn),n=new D(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Vr(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Wl(){return new Dt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vr(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Xl(){return new Dt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Vr(){return`

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
	`}function o0(o){let e=new WeakMap,t=null;function i(r){if(r&&r.isTexture){const l=r.mapping,c=l===Xa||l===Ya,d=l===qn||l===$n;if(c||d){let u=e.get(r);const h=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==h)return t===null&&(t=new Hl(o)),u=c?t.fromEquirectangular(r,u):t.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),u.texture;if(u!==void 0)return u.texture;{const f=r.image;return c&&f&&f.height>0||d&&f&&n(f)?(t===null&&(t=new Hl(o)),u=c?t.fromEquirectangular(r):t.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),r.addEventListener("dispose",s),u.texture):null}}}return r}function n(r){let l=0;const c=6;for(let d=0;d<c;d++)r[d]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function a0(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&Ts("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function r0(o,e,t,i){const n={},s=new WeakMap;function a(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}h.removeEventListener("dispose",a),delete n[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function r(u,h){return n[h.id]===!0||(h.addEventListener("dispose",a),n[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const g in h)e.update(h[g],o.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],o.ARRAY_BUFFER)}}function c(u){const h=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const b=f.array;v=f.version;for(let M=0,y=b.length;M<y;M+=3){const R=b[M+0],E=b[M+1],A=b[M+2];h.push(R,E,E,A,A,R)}}else if(g!==void 0){const b=g.array;v=g.version;for(let M=0,y=b.length/3-1;M<y;M+=3){const R=M+0,E=M+1,A=M+2;h.push(R,E,E,A,A,R)}}else return;const m=new(md(h)?wd:bd)(h,1);m.version=v;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function d(u){const h=s.get(u);if(h){const f=u.index;f!==null&&h.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:r,update:l,getWireframeAttribute:d}}function l0(o,e,t){let i;function n(h){i=h}let s,a;function r(h){s=h.type,a=h.bytesPerElement}function l(h,f){o.drawElements(i,f,s,h*a),t.update(f,i,1)}function c(h,f,g){g!==0&&(o.drawElementsInstanced(i,f,s,h*a,g),t.update(f,i,g))}function d(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(h,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b]*v[b];t.update(p,i,1)}}this.setMode=n,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function c0(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,r){switch(t.calls++,a){case o.TRIANGLES:t.triangles+=r*(s/3);break;case o.LINES:t.lines+=r*(s/2);break;case o.LINE_STRIP:t.lines+=r*(s-1);break;case o.LINE_LOOP:t.lines+=r*s;break;case o.POINTS:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function d0(o,e,t){const i=new WeakMap,n=new rt;function s(a,r,l){const c=a.morphTargetInfluences,d=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=d!==void 0?d.length:0;let h=i.get(r);if(h===void 0||h.count!==u){let _=function(){I.dispose(),i.delete(r),r.removeEventListener("dispose",_)};var f=_;h!==void 0&&h.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],b=r.morphAttributes.normal||[],M=r.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let R=r.attributes.position.count*y,E=1;R>e.maxTextureSize&&(E=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*E*4*u),I=new vd(A,R,E,u);I.type=Pi,I.needsUpdate=!0;const T=y*4;for(let P=0;P<u;P++){const G=p[P],U=b[P],O=M[P],W=R*E*4*P;for(let j=0;j<G.count;j++){const K=j*T;g===!0&&(n.fromBufferAttribute(G,j),A[W+K+0]=n.x,A[W+K+1]=n.y,A[W+K+2]=n.z,A[W+K+3]=0),v===!0&&(n.fromBufferAttribute(U,j),A[W+K+4]=n.x,A[W+K+5]=n.y,A[W+K+6]=n.z,A[W+K+7]=0),m===!0&&(n.fromBufferAttribute(O,j),A[W+K+8]=n.x,A[W+K+9]=n.y,A[W+K+10]=n.z,A[W+K+11]=O.itemSize===4?n.w:1)}}h={count:u,texture:I,size:new Ne(R,E)},i.set(r,h),r.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(o,"morphTargetBaseInfluence",v),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(o,"morphTargetsTextureSize",h.size)}return{update:s}}function h0(o,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,u=e.get(l,d);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),n.get(l)!==c&&(t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;n.get(h)!==c&&(h.update(),n.set(h,c))}return u}function a(){n=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Cd extends Ot{constructor(e,t,i,n,s,a,r,l,c,d=Xn){if(d!==Xn&&d!==Kn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Xn&&(i=_n),i===void 0&&d===Kn&&(i=Jn),super(null,n,s,a,r,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:hi,this.minFilter=l!==void 0?l:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ad=new Ot,Yl=new Cd(1,1),Rd=new vd,Pd=new Kh,Id=new Sd,jl=[],ql=[],$l=new Float32Array(16),Jl=new Float32Array(9),Kl=new Float32Array(4);function as(o,e,t){const i=o[0];if(i<=0||i>0)return o;const n=e*t;let s=jl[n];if(s===void 0&&(s=new Float32Array(n),jl[n]=s),e!==0){i.toArray(s,0);for(let a=1,r=0;a!==e;++a)r+=t,o[a].toArray(s,r)}return s}function Tt(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function St(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Vo(o,e){let t=ql[e];t===void 0&&(t=new Int32Array(e),ql[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function u0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function f0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;o.uniform2fv(this.addr,e),St(t,e)}}function p0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;o.uniform3fv(this.addr,e),St(t,e)}}function m0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;o.uniform4fv(this.addr,e),St(t,e)}}function g0(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Tt(t,i))return;Kl.set(i),o.uniformMatrix2fv(this.addr,!1,Kl),St(t,i)}}function v0(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Tt(t,i))return;Jl.set(i),o.uniformMatrix3fv(this.addr,!1,Jl),St(t,i)}}function y0(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Tt(t,i))return;$l.set(i),o.uniformMatrix4fv(this.addr,!1,$l),St(t,i)}}function x0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function _0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;o.uniform2iv(this.addr,e),St(t,e)}}function b0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;o.uniform3iv(this.addr,e),St(t,e)}}function w0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;o.uniform4iv(this.addr,e),St(t,e)}}function M0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function T0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;o.uniform2uiv(this.addr,e),St(t,e)}}function S0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;o.uniform3uiv(this.addr,e),St(t,e)}}function E0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;o.uniform4uiv(this.addr,e),St(t,e)}}function C0(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n);let s;this.type===o.SAMPLER_2D_SHADOW?(Yl.compareFunction=pd,s=Yl):s=Ad,t.setTexture2D(e||s,n)}function A0(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Pd,n)}function R0(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Id,n)}function P0(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Rd,n)}function I0(o){switch(o){case 5126:return u0;case 35664:return f0;case 35665:return p0;case 35666:return m0;case 35674:return g0;case 35675:return v0;case 35676:return y0;case 5124:case 35670:return x0;case 35667:case 35671:return _0;case 35668:case 35672:return b0;case 35669:case 35673:return w0;case 5125:return M0;case 36294:return T0;case 36295:return S0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return C0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return P0}}function L0(o,e){o.uniform1fv(this.addr,e)}function D0(o,e){const t=as(e,this.size,2);o.uniform2fv(this.addr,t)}function B0(o,e){const t=as(e,this.size,3);o.uniform3fv(this.addr,t)}function F0(o,e){const t=as(e,this.size,4);o.uniform4fv(this.addr,t)}function k0(o,e){const t=as(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function N0(o,e){const t=as(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function U0(o,e){const t=as(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function O0(o,e){o.uniform1iv(this.addr,e)}function z0(o,e){o.uniform2iv(this.addr,e)}function G0(o,e){o.uniform3iv(this.addr,e)}function H0(o,e){o.uniform4iv(this.addr,e)}function V0(o,e){o.uniform1uiv(this.addr,e)}function W0(o,e){o.uniform2uiv(this.addr,e)}function X0(o,e){o.uniform3uiv(this.addr,e)}function Y0(o,e){o.uniform4uiv(this.addr,e)}function j0(o,e,t){const i=this.cache,n=e.length,s=Vo(t,n);Tt(i,s)||(o.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Ad,s[a])}function q0(o,e,t){const i=this.cache,n=e.length,s=Vo(t,n);Tt(i,s)||(o.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Pd,s[a])}function $0(o,e,t){const i=this.cache,n=e.length,s=Vo(t,n);Tt(i,s)||(o.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Id,s[a])}function J0(o,e,t){const i=this.cache,n=e.length,s=Vo(t,n);Tt(i,s)||(o.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Rd,s[a])}function K0(o){switch(o){case 5126:return L0;case 35664:return D0;case 35665:return B0;case 35666:return F0;case 35674:return k0;case 35675:return N0;case 35676:return U0;case 5124:case 35670:return O0;case 35667:case 35671:return z0;case 35668:case 35672:return G0;case 35669:case 35673:return H0;case 5125:return V0;case 36294:return W0;case 36295:return X0;case 36296:return Y0;case 35678:case 36198:case 36298:case 36306:case 35682:return j0;case 35679:case 36299:case 36307:return q0;case 35680:case 36300:case 36308:case 36293:return $0;case 36289:case 36303:case 36311:case 36292:return J0}}class Z0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=I0(t.type)}}class Q0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K0(t.type)}}class em{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const r=n[s];r.setValue(e,t[r.id],i)}}}const Ma=/(\w+)(\])?(\[|\.)?/g;function Zl(o,e){o.seq.push(e),o.map[e.id]=e}function tm(o,e,t){const i=o.name,n=i.length;for(Ma.lastIndex=0;;){const s=Ma.exec(i),a=Ma.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===n){Zl(t,c===void 0?new Z0(r,o,e):new Q0(r,o,e));break}else{let u=t.map[r];u===void 0&&(u=new em(r),Zl(t,u)),t=u}}}class Ao{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),a=e.getUniformLocation(t,s.name);tm(s,a,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){const r=t[s],l=i[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Ql(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const im=37297;let nm=0;function sm(o,e){const t=o.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){const r=a+1;i.push(`${r===e?">":" "} ${r}: ${t[a]}`)}return i.join(`
`)}const ec=new We;function om(o){Je._getMatrix(ec,Je.workingColorSpace,o);const e=`mat3( ${ec.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(o)){case Go:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function tc(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),n=o.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+sm(o.getShaderSource(e),a)}else return n}function am(o,e){const t=om(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function rm(o,e){let t;switch(e){case Kc:t="Linear";break;case Zc:t="Reinhard";break;case Qc:t="Cineon";break;case Dr:t="ACESFilmic";break;case ed:t="AgX";break;case td:t="Neutral";break;case Eh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fo=new D;function lm(){Je.getLuminanceCoefficients(fo);const o=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cm(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function dm(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hm(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=o.getActiveAttrib(e,n),a=s.name;let r=1;s.type===o.FLOAT_MAT2&&(r=2),s.type===o.FLOAT_MAT3&&(r=3),s.type===o.FLOAT_MAT4&&(r=4),t[a]={type:s.type,location:o.getAttribLocation(e,a),locationSize:r}}return t}function Ss(o){return o!==""}function ic(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nc(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mr(o){return o.replace(um,pm)}const fm=new Map;function pm(o,e){let t=je[e];if(t===void 0){const i=fm.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mr(t)}const mm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sc(o){return o.replace(mm,gm)}function gm(o,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function oc(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function vm(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===$c?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Jc?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function ym(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case qn:case $n:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function xm(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case $n:e="ENVMAP_MODE_REFRACTION";break}return e}function _m(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Lr:e="ENVMAP_BLENDING_MULTIPLY";break;case Th:e="ENVMAP_BLENDING_MIX";break;case Sh:e="ENVMAP_BLENDING_ADD";break}return e}function bm(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function wm(o,e,t,i){const n=o.getContext(),s=t.defines;let a=t.vertexShader,r=t.fragmentShader;const l=vm(t),c=ym(t),d=xm(t),u=_m(t),h=bm(t),f=cm(t),g=dm(s),v=n.createProgram();let m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),p.length>0&&(p+=`
`)):(m=[oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ji?"#define TONE_MAPPING":"",t.toneMapping!==Ji?je.tonemapping_pars_fragment:"",t.toneMapping!==Ji?rm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,am("linearToOutputTexel",t.outputColorSpace),lm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),a=Mr(a),a=ic(a,t),a=nc(a,t),r=Mr(r),r=ic(r,t),r=nc(r,t),a=sc(a),r=sc(r),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=b+m+a,y=b+p+r,R=Ql(n,n.VERTEX_SHADER,M),E=Ql(n,n.FRAGMENT_SHADER,y);n.attachShader(v,R),n.attachShader(v,E),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function A(P){if(o.debug.checkShaderErrors){const G=n.getProgramInfoLog(v).trim(),U=n.getShaderInfoLog(R).trim(),O=n.getShaderInfoLog(E).trim();let W=!0,j=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(W=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(n,v,R,E);else{const K=tc(n,R,"vertex"),X=tc(n,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+K+`
`+X)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(U===""||O==="")&&(j=!1);j&&(P.diagnostics={runnable:W,programLog:G,vertexShader:{log:U,prefix:m},fragmentShader:{log:O,prefix:p}})}n.deleteShader(R),n.deleteShader(E),I=new Ao(n,v),T=hm(n,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=n.getProgramParameter(v,im)),_},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=nm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=E,this}let Mm=0;class Tm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Sm(e),t.set(e,i)),i}}class Sm{constructor(e){this.id=Mm++,this.code=e,this.usedTimes=0}}function Em(o,e,t,i,n,s,a){const r=new xd,l=new Tm,c=new Set,d=[],u=n.logarithmicDepthBuffer,h=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,_,P,G,U){const O=G.fog,W=U.geometry,j=T.isMeshStandardMaterial?G.environment:null,K=(T.isMeshStandardMaterial?t:e).get(T.envMap||j),X=K&&K.mapping===zo?K.image.height:null,ae=g[T.type];T.precision!==null&&(f=n.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const he=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xe=he!==void 0?he.length:0;let Re=0;W.morphAttributes.position!==void 0&&(Re=1),W.morphAttributes.normal!==void 0&&(Re=2),W.morphAttributes.color!==void 0&&(Re=3);let Ue,Y,ne,te;if(ae){const nt=vi[ae];Ue=nt.vertexShader,Y=nt.fragmentShader}else Ue=T.vertexShader,Y=T.fragmentShader,l.update(T),ne=l.getVertexShaderID(T),te=l.getFragmentShaderID(T);const se=o.getRenderTarget(),pe=o.state.buffers.depth.getReversed(),De=U.isInstancedMesh===!0,Fe=U.isBatchedMesh===!0,de=!!T.map,Me=!!T.matcap,Xe=!!K,L=!!T.aoMap,it=!!T.lightMap,ye=!!T.bumpMap,le=!!T.normalMap,Te=!!T.displacementMap,Ze=!!T.emissiveMap,Pe=!!T.metalnessMap,C=!!T.roughnessMap,w=T.anisotropy>0,z=T.clearcoat>0,Z=T.dispersion>0,ie=T.iridescence>0,J=T.sheen>0,Ie=T.transmission>0,fe=w&&!!T.anisotropyMap,_e=z&&!!T.clearcoatMap,Ke=z&&!!T.clearcoatNormalMap,oe=z&&!!T.clearcoatRoughnessMap,be=ie&&!!T.iridescenceMap,ke=ie&&!!T.iridescenceThicknessMap,Oe=J&&!!T.sheenColorMap,we=J&&!!T.sheenRoughnessMap,$e=!!T.specularMap,Ye=!!T.specularColorMap,ct=!!T.specularIntensityMap,F=Ie&&!!T.transmissionMap,ue=Ie&&!!T.thicknessMap,q=!!T.gradientMap,ee=!!T.alphaMap,ve=T.alphaTest>0,me=!!T.alphaHash,He=!!T.extensions;let vt=Ji;T.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(vt=o.toneMapping);const Pt={shaderID:ae,shaderType:T.type,shaderName:T.name,vertexShader:Ue,fragmentShader:Y,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Fe,batchingColor:Fe&&U._colorsTexture!==null,instancing:De,instancingColor:De&&U.instanceColor!==null,instancingMorph:De&&U.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:se===null?o.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:ns,alphaToCoverage:!!T.alphaToCoverage,map:de,matcap:Me,envMap:Xe,envMapMode:Xe&&K.mapping,envMapCubeUVHeight:X,aoMap:L,lightMap:it,bumpMap:ye,normalMap:le,displacementMap:h&&Te,emissiveMap:Ze,normalMapObjectSpace:le&&T.normalMapType===Bh,normalMapTangentSpace:le&&T.normalMapType===fd,metalnessMap:Pe,roughnessMap:C,anisotropy:w,anisotropyMap:fe,clearcoat:z,clearcoatMap:_e,clearcoatNormalMap:Ke,clearcoatRoughnessMap:oe,dispersion:Z,iridescence:ie,iridescenceMap:be,iridescenceThicknessMap:ke,sheen:J,sheenColorMap:Oe,sheenRoughnessMap:we,specularMap:$e,specularColorMap:Ye,specularIntensityMap:ct,transmission:Ie,transmissionMap:F,thicknessMap:ue,gradientMap:q,opaque:T.transparent===!1&&T.blending===Wn&&T.alphaToCoverage===!1,alphaMap:ee,alphaTest:ve,alphaHash:me,combine:T.combine,mapUv:de&&v(T.map.channel),aoMapUv:L&&v(T.aoMap.channel),lightMapUv:it&&v(T.lightMap.channel),bumpMapUv:ye&&v(T.bumpMap.channel),normalMapUv:le&&v(T.normalMap.channel),displacementMapUv:Te&&v(T.displacementMap.channel),emissiveMapUv:Ze&&v(T.emissiveMap.channel),metalnessMapUv:Pe&&v(T.metalnessMap.channel),roughnessMapUv:C&&v(T.roughnessMap.channel),anisotropyMapUv:fe&&v(T.anisotropyMap.channel),clearcoatMapUv:_e&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:be&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(T.sheenRoughnessMap.channel),specularMapUv:$e&&v(T.specularMap.channel),specularColorMapUv:Ye&&v(T.specularColorMap.channel),specularIntensityMapUv:ct&&v(T.specularIntensityMap.channel),transmissionMapUv:F&&v(T.transmissionMap.channel),thicknessMapUv:ue&&v(T.thicknessMap.channel),alphaMapUv:ee&&v(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(le||w),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!W.attributes.uv&&(de||ee),fog:!!O,useFog:T.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:pe,skinning:U.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Re,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:vt,decodeVideoTexture:de&&T.map.isVideoTexture===!0&&Je.getTransfer(T.map.colorSpace)===ot,decodeVideoTextureEmissive:Ze&&T.emissiveMap.isVideoTexture===!0&&Je.getTransfer(T.emissiveMap.colorSpace)===ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ut,flipSided:T.side===Bt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(T){const _=[];if(T.shaderID?_.push(T.shaderID):(_.push(T.customVertexShaderID),_.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)_.push(P),_.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(b(_,T),M(_,T),_.push(o.outputColorSpace)),_.push(T.customProgramCacheKey),_.join()}function b(T,_){T.push(_.precision),T.push(_.outputColorSpace),T.push(_.envMapMode),T.push(_.envMapCubeUVHeight),T.push(_.mapUv),T.push(_.alphaMapUv),T.push(_.lightMapUv),T.push(_.aoMapUv),T.push(_.bumpMapUv),T.push(_.normalMapUv),T.push(_.displacementMapUv),T.push(_.emissiveMapUv),T.push(_.metalnessMapUv),T.push(_.roughnessMapUv),T.push(_.anisotropyMapUv),T.push(_.clearcoatMapUv),T.push(_.clearcoatNormalMapUv),T.push(_.clearcoatRoughnessMapUv),T.push(_.iridescenceMapUv),T.push(_.iridescenceThicknessMapUv),T.push(_.sheenColorMapUv),T.push(_.sheenRoughnessMapUv),T.push(_.specularMapUv),T.push(_.specularColorMapUv),T.push(_.specularIntensityMapUv),T.push(_.transmissionMapUv),T.push(_.thicknessMapUv),T.push(_.combine),T.push(_.fogExp2),T.push(_.sizeAttenuation),T.push(_.morphTargetsCount),T.push(_.morphAttributeCount),T.push(_.numDirLights),T.push(_.numPointLights),T.push(_.numSpotLights),T.push(_.numSpotLightMaps),T.push(_.numHemiLights),T.push(_.numRectAreaLights),T.push(_.numDirLightShadows),T.push(_.numPointLightShadows),T.push(_.numSpotLightShadows),T.push(_.numSpotLightShadowsWithMaps),T.push(_.numLightProbes),T.push(_.shadowMapType),T.push(_.toneMapping),T.push(_.numClippingPlanes),T.push(_.numClipIntersection),T.push(_.depthPacking)}function M(T,_){r.disableAll(),_.supportsVertexTextures&&r.enable(0),_.instancing&&r.enable(1),_.instancingColor&&r.enable(2),_.instancingMorph&&r.enable(3),_.matcap&&r.enable(4),_.envMap&&r.enable(5),_.normalMapObjectSpace&&r.enable(6),_.normalMapTangentSpace&&r.enable(7),_.clearcoat&&r.enable(8),_.iridescence&&r.enable(9),_.alphaTest&&r.enable(10),_.vertexColors&&r.enable(11),_.vertexAlphas&&r.enable(12),_.vertexUv1s&&r.enable(13),_.vertexUv2s&&r.enable(14),_.vertexUv3s&&r.enable(15),_.vertexTangents&&r.enable(16),_.anisotropy&&r.enable(17),_.alphaHash&&r.enable(18),_.batching&&r.enable(19),_.dispersion&&r.enable(20),_.batchingColor&&r.enable(21),T.push(r.mask),r.disableAll(),_.fog&&r.enable(0),_.useFog&&r.enable(1),_.flatShading&&r.enable(2),_.logarithmicDepthBuffer&&r.enable(3),_.reverseDepthBuffer&&r.enable(4),_.skinning&&r.enable(5),_.morphTargets&&r.enable(6),_.morphNormals&&r.enable(7),_.morphColors&&r.enable(8),_.premultipliedAlpha&&r.enable(9),_.shadowMapEnabled&&r.enable(10),_.doubleSided&&r.enable(11),_.flipSided&&r.enable(12),_.useDepthPacking&&r.enable(13),_.dithering&&r.enable(14),_.transmission&&r.enable(15),_.sheen&&r.enable(16),_.opaque&&r.enable(17),_.pointsUvs&&r.enable(18),_.decodeVideoTexture&&r.enable(19),_.decodeVideoTextureEmissive&&r.enable(20),_.alphaToCoverage&&r.enable(21),T.push(r.mask)}function y(T){const _=g[T.type];let P;if(_){const G=vi[_];P=Bs.clone(G.uniforms)}else P=T.uniforms;return P}function R(T,_){let P;for(let G=0,U=d.length;G<U;G++){const O=d[G];if(O.cacheKey===_){P=O,++P.usedTimes;break}}return P===void 0&&(P=new wm(o,_,T,s),d.push(P)),P}function E(T){if(--T.usedTimes===0){const _=d.indexOf(T);d[_]=d[d.length-1],d.pop(),T.destroy()}}function A(T){l.remove(T)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:E,releaseShaderCache:A,programs:d,dispose:I}}function Cm(){let o=new WeakMap;function e(a){return o.has(a)}function t(a){let r=o.get(a);return r===void 0&&(r={},o.set(a,r)),r}function i(a){o.delete(a)}function n(a,r,l){o.get(a)[r]=l}function s(){o=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function Am(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ac(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function rc(){const o=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(u,h,f,g,v,m){let p=o[e];return p===void 0?(p={id:u.id,object:u,geometry:h,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},o[e]=p):(p.id=u.id,p.object=u,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function r(u,h,f,g,v,m){const p=a(u,h,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,h,f,g,v,m){const p=a(u,h,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,h){t.length>1&&t.sort(u||Am),i.length>1&&i.sort(h||ac),n.length>1&&n.sort(h||ac)}function d(){for(let u=e,h=o.length;u<h;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:r,unshift:l,finish:d,sort:c}}function Rm(){let o=new WeakMap;function e(i,n){const s=o.get(i);let a;return s===void 0?(a=new rc,o.set(i,[a])):n>=s.length?(a=new rc,s.push(a)):a=s[n],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function Pm(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Se};break;case"SpotLight":t={position:new D,direction:new D,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new D,halfWidth:new D,halfHeight:new D};break}return o[e.id]=t,t}}}function Im(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Lm=0;function Dm(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Bm(o){const e=new Pm,t=Im(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const n=new D,s=new gt,a=new gt;function r(c){let d=0,u=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,b=0,M=0,y=0,R=0,E=0,A=0;c.sort(Dm);for(let T=0,_=c.length;T<_;T++){const P=c[T],G=P.color,U=P.intensity,O=P.distance,W=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=G.r*U,u+=G.g*U,h+=G.b*U;else if(P.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(P.sh.coefficients[j],U);A++}else if(P.isDirectionalLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,X=t.get(P);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,i.directionalShadow[f]=X,i.directionalShadowMap[f]=W,i.directionalShadowMatrix[f]=P.shadow.matrix,b++}i.directional[f]=j,f++}else if(P.isSpotLight){const j=e.get(P);j.position.setFromMatrixPosition(P.matrixWorld),j.color.copy(G).multiplyScalar(U),j.distance=O,j.coneCos=Math.cos(P.angle),j.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),j.decay=P.decay,i.spot[v]=j;const K=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,K.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[v]=K.matrix,P.castShadow){const X=t.get(P);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,i.spotShadow[v]=X,i.spotShadowMap[v]=W,y++}v++}else if(P.isRectAreaLight){const j=e.get(P);j.color.copy(G).multiplyScalar(U),j.halfWidth.set(P.width*.5,0,0),j.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=j,m++}else if(P.isPointLight){const j=e.get(P);if(j.color.copy(P.color).multiplyScalar(P.intensity),j.distance=P.distance,j.decay=P.decay,P.castShadow){const K=P.shadow,X=t.get(P);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,i.pointShadow[g]=X,i.pointShadowMap[g]=W,i.pointShadowMatrix[g]=P.shadow.matrix,M++}i.point[g]=j,g++}else if(P.isHemisphereLight){const j=e.get(P);j.skyColor.copy(P.color).multiplyScalar(U),j.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[p]=j,p++}}m>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=u,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==M||I.numSpotShadows!==y||I.numSpotMaps!==R||I.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+R-E,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=A,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=M,I.numSpotShadows=y,I.numSpotMaps=R,I.numLightProbes=A,i.version=Lm++)}function l(c,d){let u=0,h=0,f=0,g=0,v=0;const m=d.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const M=c[p];if(M.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),u++}else if(M.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),h++}else if(M.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:r,setupView:l,state:i}}function lc(o){const e=new Bm(o),t=[],i=[];function n(d){c.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function a(d){i.push(d)}function r(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:r,setupLightsView:l,pushLight:s,pushShadow:a}}function Fm(o){let e=new WeakMap;function t(n,s=0){const a=e.get(n);let r;return a===void 0?(r=new lc(o),e.set(n,[r])):s>=a.length?(r=new lc(o),a.push(r)):r=a[s],r}function i(){e=new WeakMap}return{get:t,dispose:i}}class km extends os{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Nm extends os{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Um=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Om=`uniform sampler2D shadow_pass;
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
}`;function zm(o,e,t){let i=new Gr;const n=new Ne,s=new Ne,a=new rt,r=new km({depthPacking:Dh}),l=new Nm,c={},d=t.maxTextureSize,u={[Ki]:Bt,[Bt]:Ki,[Ut]:Ut},h=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Um,fragmentShader:Om}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new B(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$c;let p=this.type;this.render=function(E,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const T=o.getRenderTarget(),_=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),G=o.state;G.setBlending(Li),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const U=p!==Ci&&this.type===Ci,O=p===Ci&&this.type!==Ci;for(let W=0,j=E.length;W<j;W++){const K=E[W],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;n.copy(X.mapSize);const ae=X.getFrameExtents();if(n.multiply(ae),s.copy(X.mapSize),(n.x>d||n.y>d)&&(n.x>d&&(s.x=Math.floor(d/ae.x),n.x=s.x*ae.x,X.mapSize.x=s.x),n.y>d&&(s.y=Math.floor(d/ae.y),n.y=s.y*ae.y,X.mapSize.y=s.y)),X.map===null||U===!0||O===!0){const xe=this.type!==Ci?{minFilter:hi,magFilter:hi}:{};X.map!==null&&X.map.dispose(),X.map=new ui(n.x,n.y,xe),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}o.setRenderTarget(X.map),o.clear();const he=X.getViewportCount();for(let xe=0;xe<he;xe++){const Re=X.getViewport(xe);a.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),G.viewport(a),X.updateMatrices(K,xe),i=X.getFrustum(),y(A,I,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===Ci&&b(X,I),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(T,_,P)};function b(E,A){const I=e.update(v);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ui(n.x,n.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,o.setRenderTarget(E.mapPass),o.clear(),o.renderBufferDirect(A,null,I,h,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,o.setRenderTarget(E.map),o.clear(),o.renderBufferDirect(A,null,I,f,v,null)}function M(E,A,I,T){let _=null;const P=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)_=P;else if(_=I.isPointLight===!0?l:r,o.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=_.uuid,U=A.uuid;let O=c[G];O===void 0&&(O={},c[G]=O);let W=O[U];W===void 0&&(W=_.clone(),O[U]=W,A.addEventListener("dispose",R)),_=W}if(_.visible=A.visible,_.wireframe=A.wireframe,T===Ci?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:u[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const G=o.properties.get(_);G.light=I}return _}function y(E,A,I,T,_){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Ci)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const U=e.update(E),O=E.material;if(Array.isArray(O)){const W=U.groups;for(let j=0,K=W.length;j<K;j++){const X=W[j],ae=O[X.materialIndex];if(ae&&ae.visible){const he=M(E,ae,T,_);E.onBeforeShadow(o,E,A,I,U,he,X),o.renderBufferDirect(I,null,U,he,E,X),E.onAfterShadow(o,E,A,I,U,he,X)}}}else if(O.visible){const W=M(E,O,T,_);E.onBeforeShadow(o,E,A,I,U,W,null),o.renderBufferDirect(I,null,U,W,E,null),E.onAfterShadow(o,E,A,I,U,W,null)}}const G=E.children;for(let U=0,O=G.length;U<O;U++)y(G[U],A,I,T,_)}function R(E){E.target.removeEventListener("dispose",R);for(const I in c){const T=c[I],_=E.target.uuid;_ in T&&(T[_].dispose(),delete T[_])}}}const Gm={[Ua]:Oa,[za]:Va,[Ga]:Wa,[jn]:Ha,[Oa]:Ua,[Va]:za,[Wa]:Ga,[Ha]:jn};function Hm(o,e){function t(){let F=!1;const ue=new rt;let q=null;const ee=new rt(0,0,0,0);return{setMask:function(ve){q!==ve&&!F&&(o.colorMask(ve,ve,ve,ve),q=ve)},setLocked:function(ve){F=ve},setClear:function(ve,me,He,vt,Pt){Pt===!0&&(ve*=vt,me*=vt,He*=vt),ue.set(ve,me,He,vt),ee.equals(ue)===!1&&(o.clearColor(ve,me,He,vt),ee.copy(ue))},reset:function(){F=!1,q=null,ee.set(-1,0,0,0)}}}function i(){let F=!1,ue=!1,q=null,ee=null,ve=null;return{setReversed:function(me){if(ue!==me){const He=e.get("EXT_clip_control");ue?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const vt=ve;ve=null,this.setClear(vt)}ue=me},getReversed:function(){return ue},setTest:function(me){me?se(o.DEPTH_TEST):pe(o.DEPTH_TEST)},setMask:function(me){q!==me&&!F&&(o.depthMask(me),q=me)},setFunc:function(me){if(ue&&(me=Gm[me]),ee!==me){switch(me){case Ua:o.depthFunc(o.NEVER);break;case Oa:o.depthFunc(o.ALWAYS);break;case za:o.depthFunc(o.LESS);break;case jn:o.depthFunc(o.LEQUAL);break;case Ga:o.depthFunc(o.EQUAL);break;case Ha:o.depthFunc(o.GEQUAL);break;case Va:o.depthFunc(o.GREATER);break;case Wa:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ee=me}},setLocked:function(me){F=me},setClear:function(me){ve!==me&&(ue&&(me=1-me),o.clearDepth(me),ve=me)},reset:function(){F=!1,q=null,ee=null,ve=null,ue=!1}}}function n(){let F=!1,ue=null,q=null,ee=null,ve=null,me=null,He=null,vt=null,Pt=null;return{setTest:function(nt){F||(nt?se(o.STENCIL_TEST):pe(o.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!F&&(o.stencilMask(nt),ue=nt)},setFunc:function(nt,ti,_i){(q!==nt||ee!==ti||ve!==_i)&&(o.stencilFunc(nt,ti,_i),q=nt,ee=ti,ve=_i)},setOp:function(nt,ti,_i){(me!==nt||He!==ti||vt!==_i)&&(o.stencilOp(nt,ti,_i),me=nt,He=ti,vt=_i)},setLocked:function(nt){F=nt},setClear:function(nt){Pt!==nt&&(o.clearStencil(nt),Pt=nt)},reset:function(){F=!1,ue=null,q=null,ee=null,ve=null,me=null,He=null,vt=null,Pt=null}}}const s=new t,a=new i,r=new n,l=new WeakMap,c=new WeakMap;let d={},u={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,b=null,M=null,y=null,R=null,E=null,A=new Se(0,0,0),I=0,T=!1,_=null,P=null,G=null,U=null,O=null;const W=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,K=0;const X=o.getParameter(o.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),j=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),j=K>=2);let ae=null,he={};const xe=o.getParameter(o.SCISSOR_BOX),Re=o.getParameter(o.VIEWPORT),Ue=new rt().fromArray(xe),Y=new rt().fromArray(Re);function ne(F,ue,q,ee){const ve=new Uint8Array(4),me=o.createTexture();o.bindTexture(F,me),o.texParameteri(F,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(F,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let He=0;He<q;He++)F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY?o.texImage3D(ue,0,o.RGBA,1,1,ee,0,o.RGBA,o.UNSIGNED_BYTE,ve):o.texImage2D(ue+He,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ve);return me}const te={};te[o.TEXTURE_2D]=ne(o.TEXTURE_2D,o.TEXTURE_2D,1),te[o.TEXTURE_CUBE_MAP]=ne(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[o.TEXTURE_2D_ARRAY]=ne(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),te[o.TEXTURE_3D]=ne(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),r.setClear(0),se(o.DEPTH_TEST),a.setFunc(jn),ye(!1),le(fl),se(o.CULL_FACE),L(Li);function se(F){d[F]!==!0&&(o.enable(F),d[F]=!0)}function pe(F){d[F]!==!1&&(o.disable(F),d[F]=!1)}function De(F,ue){return u[F]!==ue?(o.bindFramebuffer(F,ue),u[F]=ue,F===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=ue),F===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=ue),!0):!1}function Fe(F,ue){let q=f,ee=!1;if(F){q=h.get(ue),q===void 0&&(q=[],h.set(ue,q));const ve=F.textures;if(q.length!==ve.length||q[0]!==o.COLOR_ATTACHMENT0){for(let me=0,He=ve.length;me<He;me++)q[me]=o.COLOR_ATTACHMENT0+me;q.length=ve.length,ee=!0}}else q[0]!==o.BACK&&(q[0]=o.BACK,ee=!0);ee&&o.drawBuffers(q)}function de(F){return g!==F?(o.useProgram(F),g=F,!0):!1}const Me={[un]:o.FUNC_ADD,[rh]:o.FUNC_SUBTRACT,[lh]:o.FUNC_REVERSE_SUBTRACT};Me[ch]=o.MIN,Me[dh]=o.MAX;const Xe={[hh]:o.ZERO,[uh]:o.ONE,[fh]:o.SRC_COLOR,[ka]:o.SRC_ALPHA,[xh]:o.SRC_ALPHA_SATURATE,[vh]:o.DST_COLOR,[mh]:o.DST_ALPHA,[ph]:o.ONE_MINUS_SRC_COLOR,[Na]:o.ONE_MINUS_SRC_ALPHA,[yh]:o.ONE_MINUS_DST_COLOR,[gh]:o.ONE_MINUS_DST_ALPHA,[_h]:o.CONSTANT_COLOR,[bh]:o.ONE_MINUS_CONSTANT_COLOR,[wh]:o.CONSTANT_ALPHA,[Mh]:o.ONE_MINUS_CONSTANT_ALPHA};function L(F,ue,q,ee,ve,me,He,vt,Pt,nt){if(F===Li){v===!0&&(pe(o.BLEND),v=!1);return}if(v===!1&&(se(o.BLEND),v=!0),F!==ah){if(F!==m||nt!==T){if((p!==un||y!==un)&&(o.blendEquation(o.FUNC_ADD),p=un,y=un),nt)switch(F){case Wn:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fa:o.blendFunc(o.ONE,o.ONE);break;case pl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ml:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Wn:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fa:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case pl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ml:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}b=null,M=null,R=null,E=null,A.set(0,0,0),I=0,m=F,T=nt}return}ve=ve||ue,me=me||q,He=He||ee,(ue!==p||ve!==y)&&(o.blendEquationSeparate(Me[ue],Me[ve]),p=ue,y=ve),(q!==b||ee!==M||me!==R||He!==E)&&(o.blendFuncSeparate(Xe[q],Xe[ee],Xe[me],Xe[He]),b=q,M=ee,R=me,E=He),(vt.equals(A)===!1||Pt!==I)&&(o.blendColor(vt.r,vt.g,vt.b,Pt),A.copy(vt),I=Pt),m=F,T=!1}function it(F,ue){F.side===Ut?pe(o.CULL_FACE):se(o.CULL_FACE);let q=F.side===Bt;ue&&(q=!q),ye(q),F.blending===Wn&&F.transparent===!1?L(Li):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ee=F.stencilWrite;r.setTest(ee),ee&&(r.setMask(F.stencilWriteMask),r.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),r.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ze(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?se(o.SAMPLE_ALPHA_TO_COVERAGE):pe(o.SAMPLE_ALPHA_TO_COVERAGE)}function ye(F){_!==F&&(F?o.frontFace(o.CW):o.frontFace(o.CCW),_=F)}function le(F){F!==sh?(se(o.CULL_FACE),F!==P&&(F===fl?o.cullFace(o.BACK):F===oh?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):pe(o.CULL_FACE),P=F}function Te(F){F!==G&&(j&&o.lineWidth(F),G=F)}function Ze(F,ue,q){F?(se(o.POLYGON_OFFSET_FILL),(U!==ue||O!==q)&&(o.polygonOffset(ue,q),U=ue,O=q)):pe(o.POLYGON_OFFSET_FILL)}function Pe(F){F?se(o.SCISSOR_TEST):pe(o.SCISSOR_TEST)}function C(F){F===void 0&&(F=o.TEXTURE0+W-1),ae!==F&&(o.activeTexture(F),ae=F)}function w(F,ue,q){q===void 0&&(ae===null?q=o.TEXTURE0+W-1:q=ae);let ee=he[q];ee===void 0&&(ee={type:void 0,texture:void 0},he[q]=ee),(ee.type!==F||ee.texture!==ue)&&(ae!==q&&(o.activeTexture(q),ae=q),o.bindTexture(F,ue||te[F]),ee.type=F,ee.texture=ue)}function z(){const F=he[ae];F!==void 0&&F.type!==void 0&&(o.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{o.compressedTexImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{o.compressedTexImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{o.texSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{o.texSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ke(){try{o.texStorage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{o.texStorage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{o.texImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{o.texImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(F){Ue.equals(F)===!1&&(o.scissor(F.x,F.y,F.z,F.w),Ue.copy(F))}function we(F){Y.equals(F)===!1&&(o.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function $e(F,ue){let q=c.get(ue);q===void 0&&(q=new WeakMap,c.set(ue,q));let ee=q.get(F);ee===void 0&&(ee=o.getUniformBlockIndex(ue,F.name),q.set(F,ee))}function Ye(F,ue){const ee=c.get(ue).get(F);l.get(ue)!==ee&&(o.uniformBlockBinding(ue,ee,F.__bindingPointIndex),l.set(ue,ee))}function ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),a.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},ae=null,he={},u={},h=new WeakMap,f=[],g=null,v=!1,m=null,p=null,b=null,M=null,y=null,R=null,E=null,A=new Se(0,0,0),I=0,T=!1,_=null,P=null,G=null,U=null,O=null,Ue.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),s.reset(),a.reset(),r.reset()}return{buffers:{color:s,depth:a,stencil:r},enable:se,disable:pe,bindFramebuffer:De,drawBuffers:Fe,useProgram:de,setBlending:L,setMaterial:it,setFlipSided:ye,setCullFace:le,setLineWidth:Te,setPolygonOffset:Ze,setScissorTest:Pe,activeTexture:C,bindTexture:w,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:ie,texImage2D:be,texImage3D:ke,updateUBOMapping:$e,uniformBlockBinding:Ye,texStorage2D:Ke,texStorage3D:oe,texSubImage2D:J,texSubImage3D:Ie,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:Oe,viewport:we,reset:ct}}function cc(o,e,t,i){const n=Vm(i);switch(t){case ad:return o*e;case ld:return o*e;case cd:return o*e*2;case dd:return o*e/n.components*n.byteLength;case Nr:return o*e/n.components*n.byteLength;case hd:return o*e*2/n.components*n.byteLength;case Ur:return o*e*2/n.components*n.byteLength;case rd:return o*e*3/n.components*n.byteLength;case di:return o*e*4/n.components*n.byteLength;case Or:return o*e*4/n.components*n.byteLength;case Mo:case To:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case So:case Eo:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ja:case Za:return Math.max(o,16)*Math.max(e,8)/4;case $a:case Ka:return Math.max(o,8)*Math.max(e,8)/2;case Qa:case er:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case tr:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ir:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case nr:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case sr:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case or:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ar:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case rr:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case lr:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case cr:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case dr:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case hr:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case ur:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case fr:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case pr:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case mr:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Co:case gr:case vr:return Math.ceil(o/4)*Math.ceil(e/4)*16;case ud:case yr:return Math.ceil(o/4)*Math.ceil(e/4)*8;case xr:case _r:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Vm(o){switch(o){case ki:case nd:return{byteLength:1,components:1};case Ds:case sd:case Di:return{byteLength:2,components:1};case Fr:case kr:return{byteLength:2,components:4};case _n:case Br:case Pi:return{byteLength:4,components:1};case od:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function Wm(o,e,t,i,n,s,a){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,d=new WeakMap;let u;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,w){return f?new OffscreenCanvas(C,w):Bo("canvas")}function v(C,w,z){let Z=1;const ie=Pe(C);if((ie.width>z||ie.height>z)&&(Z=z/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Z*ie.width),Ie=Math.floor(Z*ie.height);u===void 0&&(u=g(J,Ie));const fe=w?g(J,Ie):u;return fe.width=J,fe.height=Ie,fe.getContext("2d").drawImage(C,0,0,J,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Ie+")."),fe}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){o.generateMipmap(C)}function b(C){return C.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?o.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function M(C,w,z,Z,ie=!1){if(C!==null){if(o[C]!==void 0)return o[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=w;if(w===o.RED&&(z===o.FLOAT&&(J=o.R32F),z===o.HALF_FLOAT&&(J=o.R16F),z===o.UNSIGNED_BYTE&&(J=o.R8)),w===o.RED_INTEGER&&(z===o.UNSIGNED_BYTE&&(J=o.R8UI),z===o.UNSIGNED_SHORT&&(J=o.R16UI),z===o.UNSIGNED_INT&&(J=o.R32UI),z===o.BYTE&&(J=o.R8I),z===o.SHORT&&(J=o.R16I),z===o.INT&&(J=o.R32I)),w===o.RG&&(z===o.FLOAT&&(J=o.RG32F),z===o.HALF_FLOAT&&(J=o.RG16F),z===o.UNSIGNED_BYTE&&(J=o.RG8)),w===o.RG_INTEGER&&(z===o.UNSIGNED_BYTE&&(J=o.RG8UI),z===o.UNSIGNED_SHORT&&(J=o.RG16UI),z===o.UNSIGNED_INT&&(J=o.RG32UI),z===o.BYTE&&(J=o.RG8I),z===o.SHORT&&(J=o.RG16I),z===o.INT&&(J=o.RG32I)),w===o.RGB_INTEGER&&(z===o.UNSIGNED_BYTE&&(J=o.RGB8UI),z===o.UNSIGNED_SHORT&&(J=o.RGB16UI),z===o.UNSIGNED_INT&&(J=o.RGB32UI),z===o.BYTE&&(J=o.RGB8I),z===o.SHORT&&(J=o.RGB16I),z===o.INT&&(J=o.RGB32I)),w===o.RGBA_INTEGER&&(z===o.UNSIGNED_BYTE&&(J=o.RGBA8UI),z===o.UNSIGNED_SHORT&&(J=o.RGBA16UI),z===o.UNSIGNED_INT&&(J=o.RGBA32UI),z===o.BYTE&&(J=o.RGBA8I),z===o.SHORT&&(J=o.RGBA16I),z===o.INT&&(J=o.RGBA32I)),w===o.RGB&&z===o.UNSIGNED_INT_5_9_9_9_REV&&(J=o.RGB9_E5),w===o.RGBA){const Ie=ie?Go:Je.getTransfer(Z);z===o.FLOAT&&(J=o.RGBA32F),z===o.HALF_FLOAT&&(J=o.RGBA16F),z===o.UNSIGNED_BYTE&&(J=Ie===ot?o.SRGB8_ALPHA8:o.RGBA8),z===o.UNSIGNED_SHORT_4_4_4_4&&(J=o.RGBA4),z===o.UNSIGNED_SHORT_5_5_5_1&&(J=o.RGB5_A1)}return(J===o.R16F||J===o.R32F||J===o.RG16F||J===o.RG32F||J===o.RGBA16F||J===o.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(C,w){let z;return C?w===null||w===_n||w===Jn?z=o.DEPTH24_STENCIL8:w===Pi?z=o.DEPTH32F_STENCIL8:w===Ds&&(z=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===_n||w===Jn?z=o.DEPTH_COMPONENT24:w===Pi?z=o.DEPTH_COMPONENT32F:w===Ds&&(z=o.DEPTH_COMPONENT16),z}function R(C,w){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==hi&&C.minFilter!==yi?Math.log2(Math.max(w.width,w.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?w.mipmaps.length:1}function E(C){const w=C.target;w.removeEventListener("dispose",E),I(w),w.isVideoTexture&&d.delete(w)}function A(C){const w=C.target;w.removeEventListener("dispose",A),_(w)}function I(C){const w=i.get(C);if(w.__webglInit===void 0)return;const z=C.source,Z=h.get(z);if(Z){const ie=Z[w.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(C),Object.keys(Z).length===0&&h.delete(z)}i.remove(C)}function T(C){const w=i.get(C);o.deleteTexture(w.__webglTexture);const z=C.source,Z=h.get(z);delete Z[w.__cacheKey],a.memory.textures--}function _(C){const w=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(w.__webglFramebuffer[Z]))for(let ie=0;ie<w.__webglFramebuffer[Z].length;ie++)o.deleteFramebuffer(w.__webglFramebuffer[Z][ie]);else o.deleteFramebuffer(w.__webglFramebuffer[Z]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[Z])}else{if(Array.isArray(w.__webglFramebuffer))for(let Z=0;Z<w.__webglFramebuffer.length;Z++)o.deleteFramebuffer(w.__webglFramebuffer[Z]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Z=0;Z<w.__webglColorRenderbuffer.length;Z++)w.__webglColorRenderbuffer[Z]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[Z]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const z=C.textures;for(let Z=0,ie=z.length;Z<ie;Z++){const J=i.get(z[Z]);J.__webglTexture&&(o.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(z[Z])}i.remove(C)}let P=0;function G(){P=0}function U(){const C=P;return C>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+n.maxTextures),P+=1,C}function O(C){const w=[];return w.push(C.wrapS),w.push(C.wrapT),w.push(C.wrapR||0),w.push(C.magFilter),w.push(C.minFilter),w.push(C.anisotropy),w.push(C.internalFormat),w.push(C.format),w.push(C.type),w.push(C.generateMipmaps),w.push(C.premultiplyAlpha),w.push(C.flipY),w.push(C.unpackAlignment),w.push(C.colorSpace),w.join()}function W(C,w){const z=i.get(C);if(C.isVideoTexture&&Te(C),C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,C,w);return}}t.bindTexture(o.TEXTURE_2D,z.__webglTexture,o.TEXTURE0+w)}function j(C,w){const z=i.get(C);if(C.version>0&&z.__version!==C.version){Y(z,C,w);return}t.bindTexture(o.TEXTURE_2D_ARRAY,z.__webglTexture,o.TEXTURE0+w)}function K(C,w){const z=i.get(C);if(C.version>0&&z.__version!==C.version){Y(z,C,w);return}t.bindTexture(o.TEXTURE_3D,z.__webglTexture,o.TEXTURE0+w)}function X(C,w){const z=i.get(C);if(C.version>0&&z.__version!==C.version){ne(z,C,w);return}t.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+w)}const ae={[ja]:o.REPEAT,[gn]:o.CLAMP_TO_EDGE,[qa]:o.MIRRORED_REPEAT},he={[hi]:o.NEAREST,[Ch]:o.NEAREST_MIPMAP_NEAREST,[Ys]:o.NEAREST_MIPMAP_LINEAR,[yi]:o.LINEAR,[qo]:o.LINEAR_MIPMAP_NEAREST,[vn]:o.LINEAR_MIPMAP_LINEAR},xe={[Fh]:o.NEVER,[Gh]:o.ALWAYS,[kh]:o.LESS,[pd]:o.LEQUAL,[Nh]:o.EQUAL,[zh]:o.GEQUAL,[Uh]:o.GREATER,[Oh]:o.NOTEQUAL};function Re(C,w){if(w.type===Pi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===yi||w.magFilter===qo||w.magFilter===Ys||w.magFilter===vn||w.minFilter===yi||w.minFilter===qo||w.minFilter===Ys||w.minFilter===vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(C,o.TEXTURE_WRAP_S,ae[w.wrapS]),o.texParameteri(C,o.TEXTURE_WRAP_T,ae[w.wrapT]),(C===o.TEXTURE_3D||C===o.TEXTURE_2D_ARRAY)&&o.texParameteri(C,o.TEXTURE_WRAP_R,ae[w.wrapR]),o.texParameteri(C,o.TEXTURE_MAG_FILTER,he[w.magFilter]),o.texParameteri(C,o.TEXTURE_MIN_FILTER,he[w.minFilter]),w.compareFunction&&(o.texParameteri(C,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(C,o.TEXTURE_COMPARE_FUNC,xe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===hi||w.minFilter!==Ys&&w.minFilter!==vn||w.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");o.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function Ue(C,w){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,w.addEventListener("dispose",E));const Z=w.source;let ie=h.get(Z);ie===void 0&&(ie={},h.set(Z,ie));const J=O(w);if(J!==C.__cacheKey){ie[J]===void 0&&(ie[J]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ie[J].usedTimes++;const Ie=ie[C.__cacheKey];Ie!==void 0&&(ie[C.__cacheKey].usedTimes--,Ie.usedTimes===0&&T(w)),C.__cacheKey=J,C.__webglTexture=ie[J].texture}return z}function Y(C,w,z){let Z=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Z=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Z=o.TEXTURE_3D);const ie=Ue(C,w),J=w.source;t.bindTexture(Z,C.__webglTexture,o.TEXTURE0+z);const Ie=i.get(J);if(J.version!==Ie.__version||ie===!0){t.activeTexture(o.TEXTURE0+z);const fe=Je.getPrimaries(Je.workingColorSpace),_e=w.colorSpace===qi?null:Je.getPrimaries(w.colorSpace),Ke=w.colorSpace===qi||fe===_e?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let oe=v(w.image,!1,n.maxTextureSize);oe=Ze(w,oe);const be=s.convert(w.format,w.colorSpace),ke=s.convert(w.type);let Oe=M(w.internalFormat,be,ke,w.colorSpace,w.isVideoTexture);Re(Z,w);let we;const $e=w.mipmaps,Ye=w.isVideoTexture!==!0,ct=Ie.__version===void 0||ie===!0,F=J.dataReady,ue=R(w,oe);if(w.isDepthTexture)Oe=y(w.format===Kn,w.type),ct&&(Ye?t.texStorage2D(o.TEXTURE_2D,1,Oe,oe.width,oe.height):t.texImage2D(o.TEXTURE_2D,0,Oe,oe.width,oe.height,0,be,ke,null));else if(w.isDataTexture)if($e.length>0){Ye&&ct&&t.texStorage2D(o.TEXTURE_2D,ue,Oe,$e[0].width,$e[0].height);for(let q=0,ee=$e.length;q<ee;q++)we=$e[q],Ye?F&&t.texSubImage2D(o.TEXTURE_2D,q,0,0,we.width,we.height,be,ke,we.data):t.texImage2D(o.TEXTURE_2D,q,Oe,we.width,we.height,0,be,ke,we.data);w.generateMipmaps=!1}else Ye?(ct&&t.texStorage2D(o.TEXTURE_2D,ue,Oe,oe.width,oe.height),F&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,oe.width,oe.height,be,ke,oe.data)):t.texImage2D(o.TEXTURE_2D,0,Oe,oe.width,oe.height,0,be,ke,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ye&&ct&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ue,Oe,$e[0].width,$e[0].height,oe.depth);for(let q=0,ee=$e.length;q<ee;q++)if(we=$e[q],w.format!==di)if(be!==null)if(Ye){if(F)if(w.layerUpdates.size>0){const ve=cc(we.width,we.height,w.format,w.type);for(const me of w.layerUpdates){const He=we.data.subarray(me*ve/we.data.BYTES_PER_ELEMENT,(me+1)*ve/we.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,q,0,0,me,we.width,we.height,1,be,He)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,q,0,0,0,we.width,we.height,oe.depth,be,we.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,q,Oe,we.width,we.height,oe.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?F&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,q,0,0,0,we.width,we.height,oe.depth,be,ke,we.data):t.texImage3D(o.TEXTURE_2D_ARRAY,q,Oe,we.width,we.height,oe.depth,0,be,ke,we.data)}else{Ye&&ct&&t.texStorage2D(o.TEXTURE_2D,ue,Oe,$e[0].width,$e[0].height);for(let q=0,ee=$e.length;q<ee;q++)we=$e[q],w.format!==di?be!==null?Ye?F&&t.compressedTexSubImage2D(o.TEXTURE_2D,q,0,0,we.width,we.height,be,we.data):t.compressedTexImage2D(o.TEXTURE_2D,q,Oe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?F&&t.texSubImage2D(o.TEXTURE_2D,q,0,0,we.width,we.height,be,ke,we.data):t.texImage2D(o.TEXTURE_2D,q,Oe,we.width,we.height,0,be,ke,we.data)}else if(w.isDataArrayTexture)if(Ye){if(ct&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ue,Oe,oe.width,oe.height,oe.depth),F)if(w.layerUpdates.size>0){const q=cc(oe.width,oe.height,w.format,w.type);for(const ee of w.layerUpdates){const ve=oe.data.subarray(ee*q/oe.data.BYTES_PER_ELEMENT,(ee+1)*q/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,be,ke,ve)}w.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,be,ke,oe.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Oe,oe.width,oe.height,oe.depth,0,be,ke,oe.data);else if(w.isData3DTexture)Ye?(ct&&t.texStorage3D(o.TEXTURE_3D,ue,Oe,oe.width,oe.height,oe.depth),F&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,be,ke,oe.data)):t.texImage3D(o.TEXTURE_3D,0,Oe,oe.width,oe.height,oe.depth,0,be,ke,oe.data);else if(w.isFramebufferTexture){if(ct)if(Ye)t.texStorage2D(o.TEXTURE_2D,ue,Oe,oe.width,oe.height);else{let q=oe.width,ee=oe.height;for(let ve=0;ve<ue;ve++)t.texImage2D(o.TEXTURE_2D,ve,Oe,q,ee,0,be,ke,null),q>>=1,ee>>=1}}else if($e.length>0){if(Ye&&ct){const q=Pe($e[0]);t.texStorage2D(o.TEXTURE_2D,ue,Oe,q.width,q.height)}for(let q=0,ee=$e.length;q<ee;q++)we=$e[q],Ye?F&&t.texSubImage2D(o.TEXTURE_2D,q,0,0,be,ke,we):t.texImage2D(o.TEXTURE_2D,q,Oe,be,ke,we);w.generateMipmaps=!1}else if(Ye){if(ct){const q=Pe(oe);t.texStorage2D(o.TEXTURE_2D,ue,Oe,q.width,q.height)}F&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,be,ke,oe)}else t.texImage2D(o.TEXTURE_2D,0,Oe,be,ke,oe);m(w)&&p(Z),Ie.__version=J.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function ne(C,w,z){if(w.image.length!==6)return;const Z=Ue(C,w),ie=w.source;t.bindTexture(o.TEXTURE_CUBE_MAP,C.__webglTexture,o.TEXTURE0+z);const J=i.get(ie);if(ie.version!==J.__version||Z===!0){t.activeTexture(o.TEXTURE0+z);const Ie=Je.getPrimaries(Je.workingColorSpace),fe=w.colorSpace===qi?null:Je.getPrimaries(w.colorSpace),_e=w.colorSpace===qi||Ie===fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ke=w.isCompressedTexture||w.image[0].isCompressedTexture,oe=w.image[0]&&w.image[0].isDataTexture,be=[];for(let ee=0;ee<6;ee++)!Ke&&!oe?be[ee]=v(w.image[ee],!0,n.maxCubemapSize):be[ee]=oe?w.image[ee].image:w.image[ee],be[ee]=Ze(w,be[ee]);const ke=be[0],Oe=s.convert(w.format,w.colorSpace),we=s.convert(w.type),$e=M(w.internalFormat,Oe,we,w.colorSpace),Ye=w.isVideoTexture!==!0,ct=J.__version===void 0||Z===!0,F=ie.dataReady;let ue=R(w,ke);Re(o.TEXTURE_CUBE_MAP,w);let q;if(Ke){Ye&&ct&&t.texStorage2D(o.TEXTURE_CUBE_MAP,ue,$e,ke.width,ke.height);for(let ee=0;ee<6;ee++){q=be[ee].mipmaps;for(let ve=0;ve<q.length;ve++){const me=q[ve];w.format!==di?Oe!==null?Ye?F&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,me.width,me.height,Oe,me.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,$e,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?F&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,0,0,me.width,me.height,Oe,we,me.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve,$e,me.width,me.height,0,Oe,we,me.data)}}}else{if(q=w.mipmaps,Ye&&ct){q.length>0&&ue++;const ee=Pe(be[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,ue,$e,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){Ye?F&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,be[ee].width,be[ee].height,Oe,we,be[ee].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,be[ee].width,be[ee].height,0,Oe,we,be[ee].data);for(let ve=0;ve<q.length;ve++){const He=q[ve].image[ee].image;Ye?F&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,He.width,He.height,Oe,we,He.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,$e,He.width,He.height,0,Oe,we,He.data)}}else{Ye?F&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Oe,we,be[ee]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,Oe,we,be[ee]);for(let ve=0;ve<q.length;ve++){const me=q[ve];Ye?F&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,0,0,Oe,we,me.image[ee]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ve+1,$e,Oe,we,me.image[ee])}}}m(w)&&p(o.TEXTURE_CUBE_MAP),J.__version=ie.version,w.onUpdate&&w.onUpdate(w)}C.__version=w.version}function te(C,w,z,Z,ie,J){const Ie=s.convert(z.format,z.colorSpace),fe=s.convert(z.type),_e=M(z.internalFormat,Ie,fe,z.colorSpace),Ke=i.get(w),oe=i.get(z);if(oe.__renderTarget=w,!Ke.__hasExternalTextures){const be=Math.max(1,w.width>>J),ke=Math.max(1,w.height>>J);ie===o.TEXTURE_3D||ie===o.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,_e,be,ke,w.depth,0,Ie,fe,null):t.texImage2D(ie,J,_e,be,ke,0,Ie,fe,null)}t.bindFramebuffer(o.FRAMEBUFFER,C),le(w)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Z,ie,oe.__webglTexture,0,ye(w)):(ie===o.TEXTURE_2D||ie>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Z,ie,oe.__webglTexture,J),t.bindFramebuffer(o.FRAMEBUFFER,null)}function se(C,w,z){if(o.bindRenderbuffer(o.RENDERBUFFER,C),w.depthBuffer){const Z=w.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,J=y(w.stencilBuffer,ie),Ie=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=ye(w);le(w)?r.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,fe,J,w.width,w.height):z?o.renderbufferStorageMultisample(o.RENDERBUFFER,fe,J,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,J,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ie,o.RENDERBUFFER,C)}else{const Z=w.textures;for(let ie=0;ie<Z.length;ie++){const J=Z[ie],Ie=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),_e=M(J.internalFormat,Ie,fe,J.colorSpace),Ke=ye(w);z&&le(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ke,_e,w.width,w.height):le(w)?r.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ke,_e,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,_e,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function pe(C,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,C),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(w.depthTexture);Z.__renderTarget=w,(!Z.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),W(w.depthTexture,0);const ie=Z.__webglTexture,J=ye(w);if(w.depthTexture.format===Xn)le(w)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ie,0,J):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ie,0);else if(w.depthTexture.format===Kn)le(w)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ie,0,J):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function De(C){const w=i.get(C),z=C.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Z){const ie=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),w.__depthDisposeCallback=ie}w.__boundDepthTexture=Z}if(C.depthTexture&&!w.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");pe(w.__webglFramebuffer,C)}else if(z){w.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[Z]),w.__webglDepthbuffer[Z]===void 0)w.__webglDepthbuffer[Z]=o.createRenderbuffer(),se(w.__webglDepthbuffer[Z],C,!1);else{const ie=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,J=w.__webglDepthbuffer[Z];o.bindRenderbuffer(o.RENDERBUFFER,J),o.framebufferRenderbuffer(o.FRAMEBUFFER,ie,o.RENDERBUFFER,J)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),se(w.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ie=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ie),o.framebufferRenderbuffer(o.FRAMEBUFFER,Z,o.RENDERBUFFER,ie)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function Fe(C,w,z){const Z=i.get(C);w!==void 0&&te(Z.__webglFramebuffer,C,C.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),z!==void 0&&De(C)}function de(C){const w=C.texture,z=i.get(C),Z=i.get(w);C.addEventListener("dispose",A);const ie=C.textures,J=C.isWebGLCubeRenderTarget===!0,Ie=ie.length>1;if(Ie||(Z.__webglTexture===void 0&&(Z.__webglTexture=o.createTexture()),Z.__version=w.version,a.memory.textures++),J){z.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer[fe]=[];for(let _e=0;_e<w.mipmaps.length;_e++)z.__webglFramebuffer[fe][_e]=o.createFramebuffer()}else z.__webglFramebuffer[fe]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){z.__webglFramebuffer=[];for(let fe=0;fe<w.mipmaps.length;fe++)z.__webglFramebuffer[fe]=o.createFramebuffer()}else z.__webglFramebuffer=o.createFramebuffer();if(Ie)for(let fe=0,_e=ie.length;fe<_e;fe++){const Ke=i.get(ie[fe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=o.createTexture(),a.memory.textures++)}if(C.samples>0&&le(C)===!1){z.__webglMultisampledFramebuffer=o.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const _e=ie[fe];z.__webglColorRenderbuffer[fe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,z.__webglColorRenderbuffer[fe]);const Ke=s.convert(_e.format,_e.colorSpace),oe=s.convert(_e.type),be=M(_e.internalFormat,Ke,oe,_e.colorSpace,C.isXRRenderTarget===!0),ke=ye(C);o.renderbufferStorageMultisample(o.RENDERBUFFER,ke,be,C.width,C.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+fe,o.RENDERBUFFER,z.__webglColorRenderbuffer[fe])}o.bindRenderbuffer(o.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=o.createRenderbuffer(),se(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(J){t.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture),Re(o.TEXTURE_CUBE_MAP,w);for(let fe=0;fe<6;fe++)if(w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)te(z.__webglFramebuffer[fe][_e],C,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else te(z.__webglFramebuffer[fe],C,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(w)&&p(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let fe=0,_e=ie.length;fe<_e;fe++){const Ke=ie[fe],oe=i.get(Ke);t.bindTexture(o.TEXTURE_2D,oe.__webglTexture),Re(o.TEXTURE_2D,Ke),te(z.__webglFramebuffer,C,Ke,o.COLOR_ATTACHMENT0+fe,o.TEXTURE_2D,0),m(Ke)&&p(o.TEXTURE_2D)}t.unbindTexture()}else{let fe=o.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(fe,Z.__webglTexture),Re(fe,w),w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)te(z.__webglFramebuffer[_e],C,w,o.COLOR_ATTACHMENT0,fe,_e);else te(z.__webglFramebuffer,C,w,o.COLOR_ATTACHMENT0,fe,0);m(w)&&p(fe),t.unbindTexture()}C.depthBuffer&&De(C)}function Me(C){const w=C.textures;for(let z=0,Z=w.length;z<Z;z++){const ie=w[z];if(m(ie)){const J=b(C),Ie=i.get(ie).__webglTexture;t.bindTexture(J,Ie),p(J),t.unbindTexture()}}}const Xe=[],L=[];function it(C){if(C.samples>0){if(le(C)===!1){const w=C.textures,z=C.width,Z=C.height;let ie=o.COLOR_BUFFER_BIT;const J=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=i.get(C),fe=w.length>1;if(fe)for(let _e=0;_e<w.length;_e++)t.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_e,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+_e,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let _e=0;_e<w.length;_e++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ie|=o.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ie|=o.STENCIL_BUFFER_BIT)),fe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[_e]);const Ke=i.get(w[_e]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ke,0)}o.blitFramebuffer(0,0,z,Z,0,0,z,Z,ie,o.NEAREST),l===!0&&(Xe.length=0,L.length=0,Xe.push(o.COLOR_ATTACHMENT0+_e),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Xe.push(J),L.push(J),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,L)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),fe)for(let _e=0;_e<w.length;_e++){t.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+_e,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[_e]);const Ke=i.get(w[_e]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+_e,o.TEXTURE_2D,Ke,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const w=C.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function ye(C){return Math.min(n.maxSamples,C.samples)}function le(C){const w=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Te(C){const w=a.render.frame;d.get(C)!==w&&(d.set(C,w),C.update())}function Ze(C,w){const z=C.colorSpace,Z=C.format,ie=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==ns&&z!==qi&&(Je.getTransfer(z)===ot?(Z!==di||ie!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),w}function Pe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=G,this.setTexture2D=W,this.setTexture2DArray=j,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=Fe,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=it,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=te,this.useMultisampledRTT=le}function Xm(o,e){function t(i,n=qi){let s;const a=Je.getTransfer(n);if(i===ki)return o.UNSIGNED_BYTE;if(i===Fr)return o.UNSIGNED_SHORT_4_4_4_4;if(i===kr)return o.UNSIGNED_SHORT_5_5_5_1;if(i===od)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===nd)return o.BYTE;if(i===sd)return o.SHORT;if(i===Ds)return o.UNSIGNED_SHORT;if(i===Br)return o.INT;if(i===_n)return o.UNSIGNED_INT;if(i===Pi)return o.FLOAT;if(i===Di)return o.HALF_FLOAT;if(i===ad)return o.ALPHA;if(i===rd)return o.RGB;if(i===di)return o.RGBA;if(i===ld)return o.LUMINANCE;if(i===cd)return o.LUMINANCE_ALPHA;if(i===Xn)return o.DEPTH_COMPONENT;if(i===Kn)return o.DEPTH_STENCIL;if(i===dd)return o.RED;if(i===Nr)return o.RED_INTEGER;if(i===hd)return o.RG;if(i===Ur)return o.RG_INTEGER;if(i===Or)return o.RGBA_INTEGER;if(i===Mo||i===To||i===So||i===Eo)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===To)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$a||i===Ja||i===Ka||i===Za)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$a)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ka)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Za)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qa||i===er||i===tr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qa||i===er)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===tr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ir||i===nr||i===sr||i===or||i===ar||i===rr||i===lr||i===cr||i===dr||i===hr||i===ur||i===fr||i===pr||i===mr)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ir)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===or)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ar)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ur)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Co||i===gr||i===vr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Co)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ud||i===yr||i===xr||i===_r)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Co)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_r)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jn?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}class Ym extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ge extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jm={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=d.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return r!==null&&(r.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ge;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const qm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$m=`
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

}`;class Jm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Ot,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Dt({vertexShader:qm,fragmentShader:$m,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new B(new mt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Km extends bn{constructor(e,t){super();const i=this;let n=null,s=1,a=null,r="local-floor",l=1,c=null,d=null,u=null,h=null,f=null,g=null;const v=new Jm,m=t.getContextAttributes();let p=null,b=null;const M=[],y=[],R=new Ne;let E=null;const A=new Nt;A.viewport=new rt;const I=new Nt;I.viewport=new rt;const T=[A,I],_=new Ym;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ne=M[Y];return ne===void 0&&(ne=new Ta,M[Y]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(Y){let ne=M[Y];return ne===void 0&&(ne=new Ta,M[Y]=ne),ne.getGripSpace()},this.getHand=function(Y){let ne=M[Y];return ne===void 0&&(ne=new Ta,M[Y]=ne),ne.getHandSpace()};function U(Y){const ne=y.indexOf(Y.inputSource);if(ne===-1)return;const te=M[ne];te!==void 0&&(te.update(Y.inputSource,Y.frame,c||a),te.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){n.removeEventListener("select",U),n.removeEventListener("selectstart",U),n.removeEventListener("selectend",U),n.removeEventListener("squeeze",U),n.removeEventListener("squeezestart",U),n.removeEventListener("squeezeend",U),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",W);for(let Y=0;Y<M.length;Y++){const ne=y[Y];ne!==null&&(y[Y]=null,M[Y].disconnect(ne))}P=null,G=null,v.reset(),e.setRenderTarget(p),f=null,h=null,u=null,n=null,b=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",U),n.addEventListener("selectstart",U),n.addEventListener("selectend",U),n.addEventListener("squeeze",U),n.addEventListener("squeezestart",U),n.addEventListener("squeezeend",U),n.addEventListener("end",O),n.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),n.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,ne),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ui(f.framebufferWidth,f.framebufferHeight,{format:di,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,te=null,se=null;m.depth&&(se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Kn:Xn,te=m.stencil?Jn:_n);const pe={colorFormat:t.RGBA8,depthFormat:se,scaleFactor:s};u=new XRWebGLBinding(n,t),h=u.createProjectionLayer(pe),n.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),b=new ui(h.textureWidth,h.textureHeight,{format:di,type:ki,depthTexture:new Cd(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(r),Ue.setContext(n),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(Y){for(let ne=0;ne<Y.removed.length;ne++){const te=Y.removed[ne],se=y.indexOf(te);se>=0&&(y[se]=null,M[se].disconnect(te))}for(let ne=0;ne<Y.added.length;ne++){const te=Y.added[ne];let se=y.indexOf(te);if(se===-1){for(let De=0;De<M.length;De++)if(De>=y.length){y.push(te),se=De;break}else if(y[De]===null){y[De]=te,se=De;break}if(se===-1)break}const pe=M[se];pe&&pe.connect(te)}}const j=new D,K=new D;function X(Y,ne,te){j.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(te.matrixWorld);const se=j.distanceTo(K),pe=ne.projectionMatrix.elements,De=te.projectionMatrix.elements,Fe=pe[14]/(pe[10]-1),de=pe[14]/(pe[10]+1),Me=(pe[9]+1)/pe[5],Xe=(pe[9]-1)/pe[5],L=(pe[8]-1)/pe[0],it=(De[8]+1)/De[0],ye=Fe*L,le=Fe*it,Te=se/(-L+it),Ze=Te*-L;if(ne.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ze),Y.translateZ(Te),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),pe[10]===-1)Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Pe=Fe+Te,C=de+Te,w=ye-Ze,z=le+(se-Ze),Z=Me*de/C*Pe,ie=Xe*de/C*Pe;Y.projectionMatrix.makePerspective(w,z,Z,ie,Pe,C),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ae(Y,ne){ne===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ne.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let ne=Y.near,te=Y.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(te=v.depthFar)),_.near=I.near=A.near=ne,_.far=I.far=A.far=te,(P!==_.near||G!==_.far)&&(n.updateRenderState({depthNear:_.near,depthFar:_.far}),P=_.near,G=_.far),A.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,_.layers.mask=A.layers.mask|I.layers.mask;const se=Y.parent,pe=_.cameras;ae(_,se);for(let De=0;De<pe.length;De++)ae(pe[De],se);pe.length===2?X(_,A,I):_.projectionMatrix.copy(A.projectionMatrix),he(Y,_,se)};function he(Y,ne,te){te===null?Y.matrix.copy(ne.matrixWorld):(Y.matrix.copy(te.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ne.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ne.projectionMatrix),Y.projectionMatrixInverse.copy(ne.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=wr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let xe=null;function Re(Y,ne){if(d=ne.getViewerPose(c||a),g=ne,d!==null){const te=d.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let se=!1;te.length!==_.cameras.length&&(_.cameras.length=0,se=!0);for(let De=0;De<te.length;De++){const Fe=te[De];let de=null;if(f!==null)de=f.getViewport(Fe);else{const Xe=u.getViewSubImage(h,Fe);de=Xe.viewport,De===0&&(e.setRenderTargetTextures(b,Xe.colorTexture,h.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(b))}let Me=T[De];Me===void 0&&(Me=new Nt,Me.layers.enable(De),Me.viewport=new rt,T[De]=Me),Me.matrix.fromArray(Fe.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Fe.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(de.x,de.y,de.width,de.height),De===0&&(_.matrix.copy(Me.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),se===!0&&_.cameras.push(Me)}const pe=n.enabledFeatures;if(pe&&pe.includes("depth-sensing")){const De=u.getDepthInformation(te[0]);De&&De.isValid&&De.texture&&v.init(e,De,n.renderState)}}for(let te=0;te<M.length;te++){const se=y[te],pe=M[te];se!==null&&pe!==void 0&&pe.update(se,ne,c||a)}xe&&xe(Y,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),g=null}const Ue=new Ed;Ue.setAnimationLoop(Re),this.setAnimationLoop=function(Y){xe=Y},this.dispose=function(){}}}const an=new $t,Zm=new gt;function Qm(o,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Md(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,b,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),d(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?l(m,p,b,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=e.get(p),M=b.envMap,y=b.envMapRotation;M&&(m.envMap.value=M,an.copy(y),an.x*=-1,an.y*=-1,an.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(an.y*=-1,an.z*=-1),m.envMapRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(an)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function eg(o,e,t,i){let n={},s={},a=[];const r=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const y=M.program;i.uniformBlockBinding(b,y)}function c(b,M){let y=n[b.id];y===void 0&&(g(b),y=d(b),n[b.id]=y,b.addEventListener("dispose",m));const R=M.program;i.updateUBOMapping(b,R);const E=e.render.frame;s[b.id]!==E&&(h(b),s[b.id]=E)}function d(b){const M=u();b.__bindingPointIndex=M;const y=o.createBuffer(),R=b.__size,E=b.usage;return o.bindBuffer(o.UNIFORM_BUFFER,y),o.bufferData(o.UNIFORM_BUFFER,R,E),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,M,y),y}function u(){for(let b=0;b<r;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(b){const M=n[b.id],y=b.uniforms,R=b.__cache;o.bindBuffer(o.UNIFORM_BUFFER,M);for(let E=0,A=y.length;E<A;E++){const I=Array.isArray(y[E])?y[E]:[y[E]];for(let T=0,_=I.length;T<_;T++){const P=I[T];if(f(P,E,T,R)===!0){const G=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let O=0;for(let W=0;W<U.length;W++){const j=U[W],K=v(j);typeof j=="number"||typeof j=="boolean"?(P.__data[0]=j,o.bufferSubData(o.UNIFORM_BUFFER,G+O,P.__data)):j.isMatrix3?(P.__data[0]=j.elements[0],P.__data[1]=j.elements[1],P.__data[2]=j.elements[2],P.__data[3]=0,P.__data[4]=j.elements[3],P.__data[5]=j.elements[4],P.__data[6]=j.elements[5],P.__data[7]=0,P.__data[8]=j.elements[6],P.__data[9]=j.elements[7],P.__data[10]=j.elements[8],P.__data[11]=0):(j.toArray(P.__data,O),O+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,G,P.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(b,M,y,R){const E=b.value,A=M+"_"+y;if(R[A]===void 0)return typeof E=="number"||typeof E=="boolean"?R[A]=E:R[A]=E.clone(),!0;{const I=R[A];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return R[A]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(b){const M=b.uniforms;let y=0;const R=16;for(let A=0,I=M.length;A<I;A++){const T=Array.isArray(M[A])?M[A]:[M[A]];for(let _=0,P=T.length;_<P;_++){const G=T[_],U=Array.isArray(G.value)?G.value:[G.value];for(let O=0,W=U.length;O<W;O++){const j=U[O],K=v(j),X=y%R,ae=X%K.boundary,he=X+ae;y+=ae,he!==0&&R-he<K.storage&&(y+=R-he),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=y,y+=K.storage}}}const E=y%R;return E>0&&(y+=R-E),b.__size=y,b.__cache={},this}function v(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),o.deleteBuffer(n[M.id]),delete n[M.id],delete s[M.id]}function p(){for(const b in n)o.deleteBuffer(n[b]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}class Wr{constructor(e={}){const{canvas:t=Vh(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const b=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=Ji,this.toneMappingExposure=1;const y=this;let R=!1,E=0,A=0,I=null,T=-1,_=null;const P=new rt,G=new rt;let U=null;const O=new Se(0);let W=0,j=t.width,K=t.height,X=1,ae=null,he=null;const xe=new rt(0,0,j,K),Re=new rt(0,0,j,K);let Ue=!1;const Y=new Gr;let ne=!1,te=!1;const se=new gt,pe=new gt,De=new D,Fe=new rt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Me=!1;function Xe(){return I===null?X:1}let L=i;function it(S,k){return t.getContext(S,k)}try{const S={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ir}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ve,!1),t.addEventListener("webglcontextcreationerror",me,!1),L===null){const k="webgl2";if(L=it(k,S),L===null)throw it(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ye,le,Te,Ze,Pe,C,w,z,Z,ie,J,Ie,fe,_e,Ke,oe,be,ke,Oe,we,$e,Ye,ct,F;function ue(){ye=new a0(L),ye.init(),Ye=new Xm(L,ye),le=new e0(L,ye,e,Ye),Te=new Hm(L,ye),le.reverseDepthBuffer&&h&&Te.buffers.depth.setReversed(!0),Ze=new c0(L),Pe=new Cm,C=new Wm(L,ye,Te,Pe,le,Ye,Ze),w=new i0(y),z=new o0(y),Z=new mu(L),ct=new Zp(L,Z),ie=new r0(L,Z,Ze,ct),J=new h0(L,ie,Z,Ze),Oe=new d0(L,le,C),oe=new t0(Pe),Ie=new Em(y,w,z,ye,le,ct,oe),fe=new Qm(y,Pe),_e=new Rm,Ke=new Fm(ye),ke=new Kp(y,w,z,Te,J,f,l),be=new zm(y,J,le),F=new eg(L,Ze,le,Te),we=new Qp(L,ye,Ze),$e=new l0(L,ye,Ze),Ze.programs=Ie.programs,y.capabilities=le,y.extensions=ye,y.properties=Pe,y.renderLists=_e,y.shadowMap=be,y.state=Te,y.info=Ze}ue();const q=new Km(y,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const S=ye.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ye.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(S){S!==void 0&&(X=S,this.setSize(j,K,!1))},this.getSize=function(S){return S.set(j,K)},this.setSize=function(S,k,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=S,K=k,t.width=Math.floor(S*X),t.height=Math.floor(k*X),H===!0&&(t.style.width=S+"px",t.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(j*X,K*X).floor()},this.setDrawingBufferSize=function(S,k,H){j=S,K=k,X=H,t.width=Math.floor(S*H),t.height=Math.floor(k*H),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(xe)},this.setViewport=function(S,k,H,V){S.isVector4?xe.set(S.x,S.y,S.z,S.w):xe.set(S,k,H,V),Te.viewport(P.copy(xe).multiplyScalar(X).round())},this.getScissor=function(S){return S.copy(Re)},this.setScissor=function(S,k,H,V){S.isVector4?Re.set(S.x,S.y,S.z,S.w):Re.set(S,k,H,V),Te.scissor(G.copy(Re).multiplyScalar(X).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(S){Te.setScissorTest(Ue=S)},this.setOpaqueSort=function(S){ae=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(S=!0,k=!0,H=!0){let V=0;if(S){let N=!1;if(I!==null){const re=I.texture.format;N=re===Or||re===Ur||re===Nr}if(N){const re=I.texture.type,ge=re===ki||re===_n||re===Ds||re===Jn||re===Fr||re===kr,Ee=ke.getClearColor(),Ce=ke.getClearAlpha(),ze=Ee.r,Ve=Ee.g,Ae=Ee.b;ge?(g[0]=ze,g[1]=Ve,g[2]=Ae,g[3]=Ce,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=ze,v[1]=Ve,v[2]=Ae,v[3]=Ce,L.clearBufferiv(L.COLOR,0,v))}else V|=L.COLOR_BUFFER_BIT}k&&(V|=L.DEPTH_BUFFER_BIT),H&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ve,!1),t.removeEventListener("webglcontextcreationerror",me,!1),_e.dispose(),Ke.dispose(),Pe.dispose(),w.dispose(),z.dispose(),J.dispose(),ct.dispose(),F.dispose(),Ie.dispose(),q.dispose(),q.removeEventListener("sessionstart",ol),q.removeEventListener("sessionend",al),Qi.stop()};function ee(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=Ze.autoReset,k=be.enabled,H=be.autoUpdate,V=be.needsUpdate,N=be.type;ue(),Ze.autoReset=S,be.enabled=k,be.autoUpdate=H,be.needsUpdate=V,be.type=N}function me(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function He(S){const k=S.target;k.removeEventListener("dispose",He),vt(k)}function vt(S){Pt(S),Pe.remove(S)}function Pt(S){const k=Pe.get(S).programs;k!==void 0&&(k.forEach(function(H){Ie.releaseProgram(H)}),S.isShaderMaterial&&Ie.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,H,V,N,re){k===null&&(k=de);const ge=N.isMesh&&N.matrixWorld.determinant()<0,Ee=Qd(S,k,H,V,N);Te.setMaterial(V,ge);let Ce=H.index,ze=1;if(V.wireframe===!0){if(Ce=ie.getWireframeAttribute(H),Ce===void 0)return;ze=2}const Ve=H.drawRange,Ae=H.attributes.position;let Qe=Ve.start*ze,dt=(Ve.start+Ve.count)*ze;re!==null&&(Qe=Math.max(Qe,re.start*ze),dt=Math.min(dt,(re.start+re.count)*ze)),Ce!==null?(Qe=Math.max(Qe,0),dt=Math.min(dt,Ce.count)):Ae!=null&&(Qe=Math.max(Qe,0),dt=Math.min(dt,Ae.count));const ht=dt-Qe;if(ht<0||ht===1/0)return;ct.setup(N,V,Ee,H,Ce);let Gt,et=we;if(Ce!==null&&(Gt=Z.get(Ce),et=$e,et.setIndex(Gt)),N.isMesh)V.wireframe===!0?(Te.setLineWidth(V.wireframeLinewidth*Xe()),et.setMode(L.LINES)):et.setMode(L.TRIANGLES);else if(N.isLine){let Le=V.linewidth;Le===void 0&&(Le=1),Te.setLineWidth(Le*Xe()),N.isLineSegments?et.setMode(L.LINES):N.isLineLoop?et.setMode(L.LINE_LOOP):et.setMode(L.LINE_STRIP)}else N.isPoints?et.setMode(L.POINTS):N.isSprite&&et.setMode(L.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)et.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(ye.get("WEBGL_multi_draw"))et.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Le=N._multiDrawStarts,bi=N._multiDrawCounts,tt=N._multiDrawCount,ii=Ce?Z.get(Ce).bytesPerElement:1,wn=Pe.get(V).currentProgram.getUniforms();for(let Xt=0;Xt<tt;Xt++)wn.setValue(L,"_gl_DrawID",Xt),et.render(Le[Xt]/ii,bi[Xt])}else if(N.isInstancedMesh)et.renderInstances(Qe,ht,N.count);else if(H.isInstancedBufferGeometry){const Le=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,bi=Math.min(H.instanceCount,Le);et.renderInstances(Qe,ht,bi)}else et.render(Qe,ht)};function nt(S,k,H){S.transparent===!0&&S.side===Ut&&S.forceSinglePass===!1?(S.side=Bt,S.needsUpdate=!0,Xs(S,k,H),S.side=Ki,S.needsUpdate=!0,Xs(S,k,H),S.side=Ut):Xs(S,k,H)}this.compile=function(S,k,H=null){H===null&&(H=S),p=Ke.get(H),p.init(k),M.push(p),H.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==H&&S.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const V=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const re=N.material;if(re)if(Array.isArray(re))for(let ge=0;ge<re.length;ge++){const Ee=re[ge];nt(Ee,H,N),V.add(Ee)}else nt(re,H,N),V.add(re)}),M.pop(),p=null,V},this.compileAsync=function(S,k,H=null){const V=this.compile(S,k,H);return new Promise(N=>{function re(){if(V.forEach(function(ge){Pe.get(ge).currentProgram.isReady()&&V.delete(ge)}),V.size===0){N(S);return}setTimeout(re,10)}ye.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let ti=null;function _i(S){ti&&ti(S)}function ol(){Qi.stop()}function al(){Qi.start()}const Qi=new Ed;Qi.setAnimationLoop(_i),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(S){ti=S,q.setAnimationLoop(S),S===null?Qi.stop():Qi.start()},q.addEventListener("sessionstart",ol),q.addEventListener("sessionend",al),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(k),k=q.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,k,I),p=Ke.get(S,M.length),p.init(k),M.push(p),pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(pe),te=this.localClippingEnabled,ne=oe.init(this.clippingPlanes,te),m=_e.get(S,b.length),m.init(),b.push(m),q.enabled===!0&&q.isPresenting===!0){const re=y.xr.getDepthSensingMesh();re!==null&&jo(re,k,-1/0,y.sortObjects)}jo(S,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ae,he),Me=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Me&&ke.addToRenderList(m,S),this.info.render.frame++,ne===!0&&oe.beginShadows();const H=p.state.shadowsArray;be.render(H,S,k),ne===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(p.setupLights(),k.isArrayCamera){const re=k.cameras;if(N.length>0)for(let ge=0,Ee=re.length;ge<Ee;ge++){const Ce=re[ge];ll(V,N,S,Ce)}Me&&ke.render(S);for(let ge=0,Ee=re.length;ge<Ee;ge++){const Ce=re[ge];rl(m,S,Ce,Ce.viewport)}}else N.length>0&&ll(V,N,S,k),Me&&ke.render(S),rl(m,S,k);I!==null&&(C.updateMultisampleRenderTarget(I),C.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(y,S,k),ct.resetDefaultState(),T=-1,_=null,M.pop(),M.length>0?(p=M[M.length-1],ne===!0&&oe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function jo(S,k,H,V){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){V&&Fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(pe);const ge=J.update(S),Ee=S.material;Ee.visible&&m.push(S,ge,Ee,H,Fe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){const ge=J.update(S),Ee=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Fe.copy(S.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Fe.copy(ge.boundingSphere.center)),Fe.applyMatrix4(S.matrixWorld).applyMatrix4(pe)),Array.isArray(Ee)){const Ce=ge.groups;for(let ze=0,Ve=Ce.length;ze<Ve;ze++){const Ae=Ce[ze],Qe=Ee[Ae.materialIndex];Qe&&Qe.visible&&m.push(S,ge,Qe,H,Fe.z,Ae)}}else Ee.visible&&m.push(S,ge,Ee,H,Fe.z,null)}}const re=S.children;for(let ge=0,Ee=re.length;ge<Ee;ge++)jo(re[ge],k,H,V)}function rl(S,k,H,V){const N=S.opaque,re=S.transmissive,ge=S.transparent;p.setupLightsView(H),ne===!0&&oe.setGlobalState(y.clippingPlanes,H),V&&Te.viewport(P.copy(V)),N.length>0&&Ws(N,k,H),re.length>0&&Ws(re,k,H),ge.length>0&&Ws(ge,k,H),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function ll(S,k,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new ui(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?Di:ki,minFilter:vn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const re=p.state.transmissionRenderTarget[V.id],ge=V.viewport||P;re.setSize(ge.z,ge.w);const Ee=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(O),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),Me&&ke.render(H);const Ce=y.toneMapping;y.toneMapping=Ji;const ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),ne===!0&&oe.setGlobalState(y.clippingPlanes,V),Ws(S,H,V),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Ae=0,Qe=k.length;Ae<Qe;Ae++){const dt=k[Ae],ht=dt.object,Gt=dt.geometry,et=dt.material,Le=dt.group;if(et.side===Ut&&ht.layers.test(V.layers)){const bi=et.side;et.side=Bt,et.needsUpdate=!0,cl(ht,H,V,Gt,et,Le),et.side=bi,et.needsUpdate=!0,Ve=!0}}Ve===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re))}y.setRenderTarget(Ee),y.setClearColor(O,W),ze!==void 0&&(V.viewport=ze),y.toneMapping=Ce}function Ws(S,k,H){const V=k.isScene===!0?k.overrideMaterial:null;for(let N=0,re=S.length;N<re;N++){const ge=S[N],Ee=ge.object,Ce=ge.geometry,ze=V===null?ge.material:V,Ve=ge.group;Ee.layers.test(H.layers)&&cl(Ee,k,H,Ce,ze,Ve)}}function cl(S,k,H,V,N,re){S.onBeforeRender(y,k,H,V,N,re),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(y,k,H,V,S,re),N.transparent===!0&&N.side===Ut&&N.forceSinglePass===!1?(N.side=Bt,N.needsUpdate=!0,y.renderBufferDirect(H,k,V,N,S,re),N.side=Ki,N.needsUpdate=!0,y.renderBufferDirect(H,k,V,N,S,re),N.side=Ut):y.renderBufferDirect(H,k,V,N,S,re),S.onAfterRender(y,k,H,V,N,re)}function Xs(S,k,H){k.isScene!==!0&&(k=de);const V=Pe.get(S),N=p.state.lights,re=p.state.shadowsArray,ge=N.state.version,Ee=Ie.getParameters(S,N.state,re,k,H),Ce=Ie.getProgramCacheKey(Ee);let ze=V.programs;V.environment=S.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(S.isMeshStandardMaterial?z:w).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,ze===void 0&&(S.addEventListener("dispose",He),ze=new Map,V.programs=ze);let Ve=ze.get(Ce);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===ge)return hl(S,Ee),Ve}else Ee.uniforms=Ie.getUniforms(S),S.onBeforeCompile(Ee,y),Ve=Ie.acquireProgram(Ee,Ce),ze.set(Ce,Ve),V.uniforms=Ee.uniforms;const Ae=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ae.clippingPlanes=oe.uniform),hl(S,Ee),V.needsLights=th(S),V.lightsStateVersion=ge,V.needsLights&&(Ae.ambientLightColor.value=N.state.ambient,Ae.lightProbe.value=N.state.probe,Ae.directionalLights.value=N.state.directional,Ae.directionalLightShadows.value=N.state.directionalShadow,Ae.spotLights.value=N.state.spot,Ae.spotLightShadows.value=N.state.spotShadow,Ae.rectAreaLights.value=N.state.rectArea,Ae.ltc_1.value=N.state.rectAreaLTC1,Ae.ltc_2.value=N.state.rectAreaLTC2,Ae.pointLights.value=N.state.point,Ae.pointLightShadows.value=N.state.pointShadow,Ae.hemisphereLights.value=N.state.hemi,Ae.directionalShadowMap.value=N.state.directionalShadowMap,Ae.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ae.spotShadowMap.value=N.state.spotShadowMap,Ae.spotLightMatrix.value=N.state.spotLightMatrix,Ae.spotLightMap.value=N.state.spotLightMap,Ae.pointShadowMap.value=N.state.pointShadowMap,Ae.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ve,V.uniformsList=null,Ve}function dl(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=Ao.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function hl(S,k){const H=Pe.get(S);H.outputColorSpace=k.outputColorSpace,H.batching=k.batching,H.batchingColor=k.batchingColor,H.instancing=k.instancing,H.instancingColor=k.instancingColor,H.instancingMorph=k.instancingMorph,H.skinning=k.skinning,H.morphTargets=k.morphTargets,H.morphNormals=k.morphNormals,H.morphColors=k.morphColors,H.morphTargetsCount=k.morphTargetsCount,H.numClippingPlanes=k.numClippingPlanes,H.numIntersection=k.numClipIntersection,H.vertexAlphas=k.vertexAlphas,H.vertexTangents=k.vertexTangents,H.toneMapping=k.toneMapping}function Qd(S,k,H,V,N){k.isScene!==!0&&(k=de),C.resetTextureUnits();const re=k.fog,ge=V.isMeshStandardMaterial?k.environment:null,Ee=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ns,Ce=(V.isMeshStandardMaterial?z:w).get(V.envMap||ge),ze=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ve=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!H.morphAttributes.position,Qe=!!H.morphAttributes.normal,dt=!!H.morphAttributes.color;let ht=Ji;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(ht=y.toneMapping);const Gt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,et=Gt!==void 0?Gt.length:0,Le=Pe.get(V),bi=p.state.lights;if(ne===!0&&(te===!0||S!==_)){const Jt=S===_&&V.id===T;oe.setState(V,S,Jt)}let tt=!1;V.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==bi.state.version||Le.outputColorSpace!==Ee||N.isBatchedMesh&&Le.batching===!1||!N.isBatchedMesh&&Le.batching===!0||N.isBatchedMesh&&Le.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Le.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Le.instancing===!1||!N.isInstancedMesh&&Le.instancing===!0||N.isSkinnedMesh&&Le.skinning===!1||!N.isSkinnedMesh&&Le.skinning===!0||N.isInstancedMesh&&Le.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Le.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Le.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Le.instancingMorph===!1&&N.morphTexture!==null||Le.envMap!==Ce||V.fog===!0&&Le.fog!==re||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==oe.numPlanes||Le.numIntersection!==oe.numIntersection)||Le.vertexAlphas!==ze||Le.vertexTangents!==Ve||Le.morphTargets!==Ae||Le.morphNormals!==Qe||Le.morphColors!==dt||Le.toneMapping!==ht||Le.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Le.__version=V.version);let ii=Le.currentProgram;tt===!0&&(ii=Xs(V,k,N));let wn=!1,Xt=!1,ds=!1;const ut=ii.getUniforms(),pi=Le.uniforms;if(Te.useProgram(ii.program)&&(wn=!0,Xt=!0,ds=!0),V.id!==T&&(T=V.id,Xt=!0),wn||_!==S){Te.buffers.depth.getReversed()?(se.copy(S.projectionMatrix),Xh(se),Yh(se),ut.setValue(L,"projectionMatrix",se)):ut.setValue(L,"projectionMatrix",S.projectionMatrix),ut.setValue(L,"viewMatrix",S.matrixWorldInverse);const Ui=ut.map.cameraPosition;Ui!==void 0&&Ui.setValue(L,De.setFromMatrixPosition(S.matrixWorld)),le.logarithmicDepthBuffer&&ut.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ut.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),_!==S&&(_=S,Xt=!0,ds=!0)}if(N.isSkinnedMesh){ut.setOptional(L,N,"bindMatrix"),ut.setOptional(L,N,"bindMatrixInverse");const Jt=N.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),ut.setValue(L,"boneTexture",Jt.boneTexture,C))}N.isBatchedMesh&&(ut.setOptional(L,N,"batchingTexture"),ut.setValue(L,"batchingTexture",N._matricesTexture,C),ut.setOptional(L,N,"batchingIdTexture"),ut.setValue(L,"batchingIdTexture",N._indirectTexture,C),ut.setOptional(L,N,"batchingColorTexture"),N._colorsTexture!==null&&ut.setValue(L,"batchingColorTexture",N._colorsTexture,C));const hs=H.morphAttributes;if((hs.position!==void 0||hs.normal!==void 0||hs.color!==void 0)&&Oe.update(N,H,ii),(Xt||Le.receiveShadow!==N.receiveShadow)&&(Le.receiveShadow=N.receiveShadow,ut.setValue(L,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(pi.envMap.value=Ce,pi.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&k.environment!==null&&(pi.envMapIntensity.value=k.environmentIntensity),Xt&&(ut.setValue(L,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&eh(pi,ds),re&&V.fog===!0&&fe.refreshFogUniforms(pi,re),fe.refreshMaterialUniforms(pi,V,X,K,p.state.transmissionRenderTarget[S.id]),Ao.upload(L,dl(Le),pi,C)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ao.upload(L,dl(Le),pi,C),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ut.setValue(L,"center",N.center),ut.setValue(L,"modelViewMatrix",N.modelViewMatrix),ut.setValue(L,"normalMatrix",N.normalMatrix),ut.setValue(L,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Jt=V.uniformsGroups;for(let Ui=0,Oi=Jt.length;Ui<Oi;Ui++){const ul=Jt[Ui];F.update(ul,ii),F.bind(ul,ii)}}return ii}function eh(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function th(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,k,H){Pe.get(S.texture).__webglTexture=k,Pe.get(S.depthTexture).__webglTexture=H;const V=Pe.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,k){const H=Pe.get(S);H.__webglFramebuffer=k,H.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,H=0){I=S,E=k,A=H;let V=!0,N=null,re=!1,ge=!1;if(S){const Ce=Pe.get(S);if(Ce.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(Ce.__webglFramebuffer===void 0)C.setupRenderTarget(S);else if(Ce.__hasExternalTextures)C.rebindTextures(S,Pe.get(S.texture).__webglTexture,Pe.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Ae=S.depthTexture;if(Ce.__boundDepthTexture!==Ae){if(Ae!==null&&Pe.has(Ae)&&(S.width!==Ae.image.width||S.height!==Ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(S)}}const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ge=!0);const Ve=Pe.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?N=Ve[k][H]:N=Ve[k],re=!0):S.samples>0&&C.useMultisampledRTT(S)===!1?N=Pe.get(S).__webglMultisampledFramebuffer:Array.isArray(Ve)?N=Ve[H]:N=Ve,P.copy(S.viewport),G.copy(S.scissor),U=S.scissorTest}else P.copy(xe).multiplyScalar(X).floor(),G.copy(Re).multiplyScalar(X).floor(),U=Ue;if(Te.bindFramebuffer(L.FRAMEBUFFER,N)&&V&&Te.drawBuffers(S,N),Te.viewport(P),Te.scissor(G),Te.setScissorTest(U),re){const Ce=Pe.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ce.__webglTexture,H)}else if(ge){const Ce=Pe.get(S.texture),ze=k||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ce.__webglTexture,H||0,ze)}T=-1},this.readRenderTargetPixels=function(S,k,H,V,N,re,ge){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){Te.bindFramebuffer(L.FRAMEBUFFER,Ee);try{const Ce=S.texture,ze=Ce.format,Ve=Ce.type;if(!le.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-V&&H>=0&&H<=S.height-N&&L.readPixels(k,H,V,N,Ye.convert(ze),Ye.convert(Ve),re)}finally{const Ce=I!==null?Pe.get(I).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(S,k,H,V,N,re,ge){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Pe.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ge!==void 0&&(Ee=Ee[ge]),Ee){const Ce=S.texture,ze=Ce.format,Ve=Ce.type;if(!le.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=S.width-V&&H>=0&&H<=S.height-N){Te.bindFramebuffer(L.FRAMEBUFFER,Ee);const Ae=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.bufferData(L.PIXEL_PACK_BUFFER,re.byteLength,L.STREAM_READ),L.readPixels(k,H,V,N,Ye.convert(ze),Ye.convert(Ve),0);const Qe=I!==null?Pe.get(I).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,Qe);const dt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Wh(L,dt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ae),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,re),L.deleteBuffer(Ae),L.deleteSync(dt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,k=null,H=0){S.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-H),N=Math.floor(S.image.width*V),re=Math.floor(S.image.height*V),ge=k!==null?k.x:0,Ee=k!==null?k.y:0;C.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,H,0,0,ge,Ee,N,re),Te.unbindTexture()},this.copyTextureToTexture=function(S,k,H=null,V=null,N=0){S.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],k=arguments[2],N=arguments[3]||0,H=null);let re,ge,Ee,Ce,ze,Ve,Ae,Qe,dt;const ht=S.isCompressedTexture?S.mipmaps[N]:S.image;H!==null?(re=H.max.x-H.min.x,ge=H.max.y-H.min.y,Ee=H.isBox3?H.max.z-H.min.z:1,Ce=H.min.x,ze=H.min.y,Ve=H.isBox3?H.min.z:0):(re=ht.width,ge=ht.height,Ee=ht.depth||1,Ce=0,ze=0,Ve=0),V!==null?(Ae=V.x,Qe=V.y,dt=V.z):(Ae=0,Qe=0,dt=0);const Gt=Ye.convert(k.format),et=Ye.convert(k.type);let Le;k.isData3DTexture?(C.setTexture3D(k,0),Le=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(C.setTexture2DArray(k,0),Le=L.TEXTURE_2D_ARRAY):(C.setTexture2D(k,0),Le=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);const bi=L.getParameter(L.UNPACK_ROW_LENGTH),tt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ii=L.getParameter(L.UNPACK_SKIP_PIXELS),wn=L.getParameter(L.UNPACK_SKIP_ROWS),Xt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ht.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ce),L.pixelStorei(L.UNPACK_SKIP_ROWS,ze),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve);const ds=S.isDataArrayTexture||S.isData3DTexture,ut=k.isDataArrayTexture||k.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const pi=Pe.get(S),hs=Pe.get(k),Jt=Pe.get(pi.__renderTarget),Ui=Pe.get(hs.__renderTarget);Te.bindFramebuffer(L.READ_FRAMEBUFFER,Jt.__webglFramebuffer),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Oi=0;Oi<Ee;Oi++)ds&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pe.get(S).__webglTexture,N,Ve+Oi),S.isDepthTexture?(ut&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Pe.get(k).__webglTexture,N,dt+Oi),L.blitFramebuffer(Ce,ze,re,ge,Ae,Qe,re,ge,L.DEPTH_BUFFER_BIT,L.NEAREST)):ut?L.copyTexSubImage3D(Le,N,Ae,Qe,dt+Oi,Ce,ze,re,ge):L.copyTexSubImage2D(Le,N,Ae,Qe,dt+Oi,Ce,ze,re,ge);Te.bindFramebuffer(L.READ_FRAMEBUFFER,null),Te.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ut?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Le,N,Ae,Qe,dt,re,ge,Ee,Gt,et,ht.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(Le,N,Ae,Qe,dt,re,ge,Ee,Gt,ht.data):L.texSubImage3D(Le,N,Ae,Qe,dt,re,ge,Ee,Gt,et,ht):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,N,Ae,Qe,re,ge,Gt,et,ht.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,N,Ae,Qe,ht.width,ht.height,Gt,ht.data):L.texSubImage2D(L.TEXTURE_2D,N,Ae,Qe,re,ge,Gt,et,ht);L.pixelStorei(L.UNPACK_ROW_LENGTH,bi),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,tt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ii),L.pixelStorei(L.UNPACK_SKIP_ROWS,wn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Xt),N===0&&k.generateMipmaps&&L.generateMipmap(Le),Te.unbindTexture()},this.copyTextureToTexture3D=function(S,k,H=null,V=null,N=0){return S.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,S=arguments[2],k=arguments[3],N=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,k,H,V,N)},this.initRenderTarget=function(S){Pe.get(S).__webglFramebuffer===void 0&&C.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?C.setTextureCube(S,0):S.isData3DTexture?C.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?C.setTexture2DArray(S,0):C.setTexture2D(S,0),Te.unbindTexture()},this.resetState=function(){E=0,A=0,I=null,Te.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class Wo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Se(e),this.density=t}clone(){return new Wo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xr extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $t,this.environmentIntensity=1,this.environmentRotation=new $t,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ai extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ld extends os{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Fo=new D,ko=new D,dc=new gt,vs=new yd,po=new Ho,Sa=new D,hc=new D;class tg extends Mt{constructor(e=new Ft,t=new Ld){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Fo.fromBufferAttribute(t,n-1),ko.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Fo.distanceTo(ko);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(n),po.radius+=s,e.ray.intersectsSphere(po)===!1)return;dc.copy(n).invert(),vs.copy(e.ray).applyMatrix4(dc);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=this.isLineSegments?2:1,d=i.index,h=i.attributes.position;if(d!==null){const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=d.getX(v),b=d.getX(v+1),M=mo(this,e,vs,l,p,b);M&&t.push(M)}if(this.isLineLoop){const v=d.getX(g-1),m=d.getX(f),p=mo(this,e,vs,l,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=mo(this,e,vs,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=mo(this,e,vs,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function mo(o,e,t,i,n,s){const a=o.geometry.attributes.position;if(Fo.fromBufferAttribute(a,n),ko.fromBufferAttribute(a,s),t.distanceSqToSegment(Fo,ko,Sa,hc)>i)return;Sa.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(Sa);if(!(l<e.near||l>e.far))return{distance:l,point:hc.clone().applyMatrix4(o.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:o}}class zs extends Ot{constructor(e,t,i,n,s,a,r,l,c){super(e,t,i,n,s,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yr extends Ft{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],a=[],r=[],l=[],c=new D,d=new Ne;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=t;u++,h+=3){const f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),r.push(0,0,1),d.x=(a[h]/e+1)/2,d.y=(a[h+1]/e+1)/2,l.push(d.x,d.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(r,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class qe extends Ft{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const d=[],u=[],h=[],f=[];let g=0;const v=[],m=i/2;let p=0;b(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(d),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(f,2));function b(){const y=new D,R=new D;let E=0;const A=(t-e)/i;for(let I=0;I<=s;I++){const T=[],_=I/s,P=_*(t-e)+e;for(let G=0;G<=n;G++){const U=G/n,O=U*l+r,W=Math.sin(O),j=Math.cos(O);R.x=P*W,R.y=-_*i+m,R.z=P*j,u.push(R.x,R.y,R.z),y.set(W,A,j).normalize(),h.push(y.x,y.y,y.z),f.push(U,1-_),T.push(g++)}v.push(T)}for(let I=0;I<n;I++)for(let T=0;T<s;T++){const _=v[T][I],P=v[T+1][I],G=v[T+1][I+1],U=v[T][I+1];(e>0||T!==0)&&(d.push(_,P,U),E+=3),(t>0||T!==s-1)&&(d.push(P,G,U),E+=3)}c.addGroup(p,E,0),p+=E}function M(y){const R=g,E=new Ne,A=new D;let I=0;const T=y===!0?e:t,_=y===!0?1:-1;for(let G=1;G<=n;G++)u.push(0,m*_,0),h.push(0,_,0),f.push(.5,.5),g++;const P=g;for(let G=0;G<=n;G++){const O=G/n*l+r,W=Math.cos(O),j=Math.sin(O);A.x=T*j,A.y=m*_,A.z=T*W,u.push(A.x,A.y,A.z),h.push(0,_,0),E.x=W*.5+.5,E.y=j*.5*_+.5,f.push(E.x,E.y),g++}for(let G=0;G<n;G++){const U=R+G,O=P+G;y===!0?d.push(O,O+1,U):d.push(O+1,O,U),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $i extends qe{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,r=Math.PI*2){super(0,e,t,i,n,s,a,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:r}}static fromJSON(e){return new $i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jr extends Ft{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],a=[];r(n),c(i),d(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function r(b){const M=new D,y=new D,R=new D;for(let E=0;E<t.length;E+=3)f(t[E+0],M),f(t[E+1],y),f(t[E+2],R),l(M,y,R,b)}function l(b,M,y,R){const E=R+1,A=[];for(let I=0;I<=E;I++){A[I]=[];const T=b.clone().lerp(y,I/E),_=M.clone().lerp(y,I/E),P=E-I;for(let G=0;G<=P;G++)G===0&&I===E?A[I][G]=T:A[I][G]=T.clone().lerp(_,G/P)}for(let I=0;I<E;I++)for(let T=0;T<2*(E-I)-1;T++){const _=Math.floor(T/2);T%2===0?(h(A[I][_+1]),h(A[I+1][_]),h(A[I][_])):(h(A[I][_+1]),h(A[I+1][_+1]),h(A[I+1][_]))}}function c(b){const M=new D;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(b),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function d(){const b=new D;for(let M=0;M<s.length;M+=3){b.x=s[M+0],b.y=s[M+1],b.z=s[M+2];const y=m(b)/2/Math.PI+.5,R=p(b)/Math.PI+.5;a.push(y,1-R)}g(),u()}function u(){for(let b=0;b<a.length;b+=6){const M=a[b+0],y=a[b+2],R=a[b+4],E=Math.max(M,y,R),A=Math.min(M,y,R);E>.9&&A<.1&&(M<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),R<.2&&(a[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function f(b,M){const y=b*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){const b=new D,M=new D,y=new D,R=new D,E=new Ne,A=new Ne,I=new Ne;for(let T=0,_=0;T<s.length;T+=9,_+=6){b.set(s[T+0],s[T+1],s[T+2]),M.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),E.set(a[_+0],a[_+1]),A.set(a[_+2],a[_+3]),I.set(a[_+4],a[_+5]),R.copy(b).add(M).add(y).divideScalar(3);const P=m(R);v(E,_+0,b,P),v(A,_+2,M,P),v(I,_+4,y,P)}}function v(b,M,y,R){R<0&&b.x===1&&(a[M]=b.x-1),y.x===0&&y.z===0&&(a[M]=R/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.vertices,e.indices,e.radius,e.details)}}class qr extends jr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qr(e.radius,e.detail)}}class Zi extends Ft{constructor(e=.5,t=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const r=[],l=[],c=[],d=[];let u=e;const h=(t-e)/n,f=new D,g=new Ne;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const p=s+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,d.push(g.x,g.y)}u+=h}for(let v=0;v<n;v++){const m=v*(i+1);for(let p=0;p<i;p++){const b=p+m,M=b,y=b+i+1,R=b+i+2,E=b+1;r.push(M,y,E),r.push(y,R,E)}}this.setIndex(r),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ft extends Ft{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:r},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+r,Math.PI);let c=0;const d=[],u=new D,h=new D,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const b=[],M=p/i;let y=0;p===0&&a===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const E=R/t;u.x=-e*Math.cos(n+E*s)*Math.sin(a+M*r),u.y=e*Math.cos(a+M*r),u.z=e*Math.sin(n+E*s)*Math.sin(a+M*r),g.push(u.x,u.y,u.z),h.copy(u).normalize(),v.push(h.x,h.y,h.z),m.push(E+y,1-M),b.push(c++)}d.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){const M=d[p][b+1],y=d[p][b],R=d[p+1][b],E=d[p+1][b+1];(p!==0||a>0)&&f.push(M,y,E),(p!==i-1||l<Math.PI)&&f.push(y,R,E)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xo extends Ft{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const a=[],r=[],l=[],c=[],d=new D,u=new D,h=new D;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const v=g/n*s,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),r.push(u.x,u.y,u.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),h.subVectors(u,d).normalize(),l.push(h.x,h.y,h.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const v=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,b=(n+1)*f+g;a.push(v,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ig extends Dt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class $ extends os{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fd,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $t,this.combine=Lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function go(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function ng(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function sg(o){function e(n,s){return o[n]-o[s]}const t=o.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function uc(o,e,t){const i=o.length,n=new o.constructor(i);for(let s=0,a=0;a!==i;++s){const r=t[s]*e;for(let l=0;l!==e;++l)n[a++]=o[r+l]}return n}function Dd(o,e,t,i){let n=1,s=o[0];for(;s!==void 0&&s[i]===void 0;)s=o[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=o[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=o[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=o[n++];while(s!==void 0)}class Yo{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let r=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===r)break;if(s=n,n=t[++i],e<n)break t}a=t.length;break i}if(!(e>=s)){const r=t[1];e<r&&(i=2,s=r);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}a=i,i=0;break i}break e}for(;i<a;){const r=i+a>>>1;e<t[r]?a=r:i=r+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class og extends Yo{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zn,endingEnd:zn}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,a=e+1,r=n[s],l=n[a];if(r===void 0)switch(this.getSettings_().endingStart){case Gn:s=e,r=2*t-i;break;case Lo:s=n.length-2,r=t+n[s]-n[s+1];break;default:s=e,r=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Gn:a=e,l=2*i-t;break;case Lo:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-r),this._weightNext=c/(l-i),this._offsetPrev=s*d,this._offsetNext=a*d}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,d=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,b=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,M=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let R=0;R!==r;++R)s[R]=p*a[d+R]+b*a[c+R]+M*a[l+R]+y*a[u+R];return s}}class Bd extends Yo{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,d=(i-t)/(n-t),u=1-d;for(let h=0;h!==r;++h)s[h]=a[c+h]*u+a[l+h]*d;return s}}class ag extends Yo{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class xi{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=go(t,this.TimeBufferType),this.values=go(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:go(e.times,Array),values:go(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ag(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new og(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Io:t=this.InterpolantFactoryMethodDiscrete;break;case br:t=this.InterpolantFactoryMethodLinear;break;case $o:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Io;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return $o}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const r=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*r,a*r)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let r=0;r!==s;r++){const l=i[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,a),e=!1;break}a=l}if(n!==void 0&&ng(n))for(let r=0,l=n.length;r!==l;++r){const c=n[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===$o,s=e.length-1;let a=1;for(let r=1;r<s;++r){let l=!1;const c=e[r],d=e[r+1];if(c!==d&&(r!==1||c!==e[0]))if(n)l=!0;else{const u=r*i,h=u-i,f=u+i;for(let g=0;g!==i;++g){const v=t[u+g];if(v!==t[h+g]||v!==t[f+g]){l=!0;break}}}if(l){if(r!==a){e[a]=e[r];const u=r*i,h=a*i;for(let f=0;f!==i;++f)t[h+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let r=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[r+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=br;class rs extends xi{constructor(e,t,i){super(e,t,i)}}rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Io;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Fd extends xi{}Fd.prototype.ValueTypeName="color";class No extends xi{}No.prototype.ValueTypeName="number";class rg extends Yo{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=(i-t)/(n-t);let c=e*r;for(let d=c+r;c!==d;c+=4)ei.slerpFlat(s,0,a,c-r,a,c,l);return s}}class xt extends xi{InterpolantFactoryMethodLinear(e){return new rg(this.times,this.values,this.getValueSize(),e)}}xt.prototype.ValueTypeName="quaternion";xt.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends xi{constructor(e,t,i){super(e,t,i)}}ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Io;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class yn extends xi{}yn.prototype.ValueTypeName="vector";class As{constructor(e="",t=-1,i=[],n=zr){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=ss(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,r=i.length;a!==r;++a)t.push(cg(i[a]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(xi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,a=[];for(let r=0;r<s;r++){let l=[],c=[];l.push((r+s-1)%s,r,(r+1)%s),c.push(0,1,0);const d=sg(l);l=uc(l,1,d),c=uc(c,1,d),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new No(".morphTargetInfluences["+t[r].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let r=0,l=e.length;r<l;r++){const c=e[r],d=c.name.match(s);if(d&&d.length>1){const u=d[1];let h=n[u];h||(n[u]=h=[]),h.push(c)}}const a=[];for(const r in n)a.push(this.CreateFromMorphTargetSequence(r,n[r],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,h,f,g,v){if(f.length!==0){const m=[],p=[];Dd(f,m,p,g),m.length!==0&&v.push(new u(h,m,p))}},n=[],s=e.name||"default",a=e.fps||30,r=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const f={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let v=0;v<h[g].morphTargets.length;v++)f[h[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let b=0;b!==h[g].morphTargets.length;++b){const M=h[g];m.push(M.time),p.push(M.morphTarget===v?1:0)}n.push(new No(".morphTargetInfluence["+v+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";i(yn,f+".position",h,"pos",n),i(xt,f+".quaternion",h,"rot",n),i(yn,f+".scale",h,"scl",n)}}return n.length===0?null:new this(s,l,n,r)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function lg(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return No;case"vector":case"vector2":case"vector3":case"vector4":return yn;case"color":return Fd;case"quaternion":return xt;case"bool":case"boolean":return rs;case"string":return ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function cg(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=lg(o.type);if(o.times===void 0){const t=[],i=[];Dd(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}class Gs extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class dg extends Gs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ea=new gt,fc=new D,pc=new D;class kd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(fc),pc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pc),t.updateMatrixWorld(),Ea.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ea)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mc=new gt,ys=new D,Ca=new D;class hg extends kd{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ys.setFromMatrixPosition(e.matrixWorld),i.position.copy(ys),Ca.copy(i.position),Ca.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ca),i.updateMatrixWorld(),n.makeTranslation(-ys.x,-ys.y,-ys.z),mc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc)}}class Nd extends Gs{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new hg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ug extends kd{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qn extends Gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new ug}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $r extends Gs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class fg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gc(){return performance.now()}class pg{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,a;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let a=this.cumulativeWeight;if(a===0){for(let r=0;r!==n;++r)i[s+r]=i[r];a=t}else{a+=t;const r=t/a;this._mixBufferRegion(i,s,0,r,n)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,r=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){r.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,a=n;s!==a;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){ei.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const a=this._workIndex*s;ei.multiplyQuaternionsFlat(e,a,e,t,e,i),ei.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,s){const a=1-n;for(let r=0;r!==s;++r){const l=t+r;e[l]=e[l]*a+e[i+r]*n}}_lerpAdditive(e,t,i,n,s){for(let a=0;a!==s;++a){const r=t+a;e[r]=e[r]+e[i+a]*n}}}const Jr="\\[\\]\\.:\\/",mg=new RegExp("["+Jr+"]","g"),Kr="[^"+Jr+"]",gg="[^"+Jr.replace("\\.","")+"]",vg=/((?:WC+[\/:])*)/.source.replace("WC",Kr),yg=/(WCOD+)?/.source.replace("WCOD",gg),xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kr),_g=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kr),bg=new RegExp("^"+vg+yg+xg+_g+"$"),wg=["material","materials","bones","map"];class Mg{constructor(e,t,i){const n=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class at{constructor(e,t,i){this.path=t,this.parsedPath=i||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,i):new at(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mg,"")}static parseTrackName(e){const t=bg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);wg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const r=s[a];if(r.name===t||r.uuid===t)return r;const l=i(r.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let r=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=Mg;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Tg{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,a=s.length,r=new Array(a),l={endingStart:zn,endingEnd:zn};for(let c=0;c!==a;++c){const d=s[c].createInterpolant(null);r[c]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=r,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Rh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,s=e._clip.duration,a=s/n,r=n/s;e.warp(1,a,t),this.warp(r,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,a=this.timeScale;let r=this._timeScaleInterpolant;r===null&&(r=n._lendControlInterpolant(),this._timeScaleInterpolant=r);const l=r.parameterPositions,c=r.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),r=this._updateWeight(e);if(r>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Ih:for(let d=0,u=l.length;d!==u;++d)l[d].evaluate(a),c[d].accumulateAdditive(r);break;case zr:default:for(let d=0,u=l.length;d!==u;++d)l[d].evaluate(a),c[d].accumulate(n,r)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const a=i===Ph;if(e===0)return s===-1?n:a&&(s&1)===1?t-n:n;if(i===Ah){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){const r=Math.floor(n/t);n-=t*r,s+=Math.abs(r);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:r})}}else this.time=n;if(a&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=Gn,n.endingEnd=Gn):(e?n.endingStart=this.zeroSlopeAtStart?Gn:zn:n.endingStart=Lo,t?n.endingEnd=this.zeroSlopeAtEnd?Gn:zn:n.endingEnd=Lo)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const r=a.parameterPositions,l=a.sampleValues;return r[0]=s,l[0]=t,r[1]=s+e,l[1]=i,this}}const Sg=new Float32Array(1);class Eg extends bn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,a=e._propertyBindings,r=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let d=c[l];d===void 0&&(d={},c[l]=d);for(let u=0;u!==s;++u){const h=n[u],f=h.name;let g=d[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;g=new pg(at.create(i,f,v),h.ValueTypeName,h.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[u]=g}r[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const r=a.knownActions;e._byClipCacheIndex=r.length,r.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,r=a[s],l=r.knownActions,c=l[l.length-1],d=e._byClipCacheIndex;c._byClipCacheIndex=d,l[d]=c,l.pop(),e._byClipCacheIndex=null;const u=r.actionByRoot,h=(e._localRoot||this._root).uuid;delete u[h],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,s=this._bindings;let a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,r=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete r[s],Object.keys(r).length===0&&delete a[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Bd(new Float32Array(2),new Float32Array(2),1,Sg),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const n=t||this._root,s=n.uuid;let a=typeof e=="string"?As.findByName(n,e):e;const r=a!==null?a.uuid:e,l=this._actionsByClip[r];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=zr),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const d=new Tg(this,a,t,i);return this._bindAction(d,c),this._addInactiveAction(d,r,s),d}existingAction(e,t){const i=t||this._root,n=i.uuid,s=typeof e=="string"?As.findByName(i,e):e,a=s?s.uuid:e,r=this._actionsByClip[a];return r!==void 0&&r.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,a);const r=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)r[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const a=s.knownActions;for(let r=0,l=a.length;r!==l;++r){const c=a[r];this._deactivateAction(c);const d=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=d,t[d]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const r=i[a].actionByRoot,l=r[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(const a in s){const r=s[a];r.restoreOriginalState(),this._removeInactiveBinding(r)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ir}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ir);const Ud={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class cs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Cg=new Hr(-1,1,1,-1,0,1);class Ag extends Ft{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}}const Rg=new Ag;class Zr{constructor(e){this._mesh=new B(Rg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Cg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Pg extends cs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bs.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Zr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vc extends cs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(r),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Ig extends cs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Lg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ne);this._width=i.width,this._height=i.height,t=new ui(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Di}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pg(Ud),this.copyPass.material.blending=Li,this.clock=new fg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}vc!==void 0&&(a instanceof vc?i=!0:a instanceof Ig&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Dg extends cs{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Se}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}}const Bg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class es extends cs{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new Se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ui(s,a,{type:Di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const h=new ui(s,a,{type:Di});h.texture.name="UnrealBloomPass.h"+u,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new ui(s,a,{type:Di});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const r=Bg;this.highPassUniforms=Bs.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dt({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ne(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=Ud;this.copyUniforms=Bs.clone(d.uniforms),this.blendMaterial=new Dt({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:Fa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Se,this.oldClearAlpha=1,this.basic=new zt,this.fsQuad=new Zr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Ne(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=es.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=es.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Dt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Dt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}es.BlurDirectionX=new Ne(1,0);es.BlurDirectionY=new Ne(0,1);const Fg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class kg extends cs{constructor(){super();const e=Fg;this.uniforms=Bs.clone(e.uniforms),this.material=new ig({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Zr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Kc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Qc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Dr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ed?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===td&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const xs={fov:35,height:38,rotationSmoothing:.06,positionSmoothing:.1,lookAheadDistance:6};class Ng{constructor(){x(this,"camera");x(this,"targetPos",new D);x(this,"cameraAngle",0);this.camera=new Nt(xs.fov,window.innerWidth/window.innerHeight,5,800)}follow(e,t,i){let n=i-this.cameraAngle;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;this.cameraAngle+=n*xs.rotationSmoothing;const s=Math.sin(this.cameraAngle)*-28,a=-Math.cos(this.cameraAngle)*-28;this.targetPos.set(e.x+s,e.y+xs.height,e.z+a),this.camera.position.lerp(this.targetPos,xs.positionSmoothing);const l=t.length()>.5?t.clone().normalize().multiplyScalar(xs.lookAheadDistance):new D(0,0,0),c=e.clone().add(l);c.y+=2,this.camera.lookAt(c)}}class Ug{constructor(){x(this,"boxes",[])}addBox(e,t,i,n){this.boxes.push({cx:e,cz:t,hw:i,hd:n})}resolveCircle(e,t,i){let n=e,s=t;for(const a of this.boxes){const r=a.hw+i,l=a.hd+i,c=n-a.cx,d=s-a.cz;if(Math.abs(c)<r&&Math.abs(d)<l){const u=r-Math.abs(c),h=l-Math.abs(d);u<h?n+=c<0?-u:u:s+=d<0?-h:h}}return{x:n,z:s}}}let Tr=null,Fs=null;async function Og(){async function e(t){const i=new Image;return new Promise(n=>{i.onload=()=>n(i.naturalWidth>0?i:null),i.onerror=()=>{console.warn("[LogoLoader] failed:",t),n(null)},i.src=t})}[Tr,Fs]=await Promise.all([e("./tem-logo.jpg"),e("./tem-logo-white.jpg")]),console.log("[LogoLoader] black-on-white:",!!Tr,"| white-on-black:",!!Fs)}function Od(o){const t=document.createElement("canvas");t.width=t.height=256;const i=t.getContext("2d"),n=o>>16&255,s=o>>8&255,a=o&255,l=.299*n+.587*s+.114*a<128,c=l?Fs:Tr;if(c){i.drawImage(c,0,0,256,256);const d=i.getImageData(0,0,256,256),u=d.data;for(let h=0;h<u.length;h+=4){const f=.299*u[h]+.587*u[h+1]+.114*u[h+2];l?u[h+3]=Math.round(Math.min(255,f*1.4)):u[h+3]=Math.round(Math.min(255,(255-f)*1.4))}i.putImageData(d,0,0)}else zg(i,256,l);return new zs(t)}function zd(o=512){const e=document.createElement("canvas");e.width=e.height=o;const t=e.getContext("2d");if(Fs){t.drawImage(Fs,0,0,o,o);const i=t.getImageData(0,0,o,o),n=i.data;for(let s=0;s<n.length;s+=4){const a=.299*n[s]+.587*n[s+1]+.114*n[s+2];n[s+3]=Math.round(Math.min(255,a*1.5))}t.putImageData(i,0,0)}else t.strokeStyle="#FFFFFF",t.fillStyle="#FFFFFF",Gd(t,o);return new zs(e)}function zg(o,e,t){o.strokeStyle=t?"#FFFFFF":"#111111",o.fillStyle=t?"#FFFFFF":"#111111",Gd(o,e)}function Gd(o,e){const t=e/256;o.save(),o.scale(t,t),o.lineCap="round",o.lineWidth=6,o.beginPath(),o.arc(128,128,118,0,Math.PI*2),o.stroke(),o.lineWidth=11,o.beginPath(),o.moveTo(128,225),o.lineTo(128,148),o.stroke(),o.lineWidth=7,o.beginPath(),o.moveTo(128,148),o.lineTo(128,96),o.stroke();const i=[[128,178,76,152],[128,178,180,152],[128,160,64,134],[128,160,192,134],[128,142,76,116],[128,142,180,116],[128,124,88,99],[128,124,168,99],[128,110,98,84],[128,110,158,84],[128,98,110,70],[128,98,146,70],[128,88,118,56],[128,88,138,56]];o.lineWidth=4;for(const[n,s,a,r]of i)o.beginPath(),o.moveTo(n,s),o.lineTo(a,r),o.stroke(),o.beginPath(),o.arc(a,r,5,0,Math.PI*2),o.fill();o.restore()}class Gg{constructor(){x(this,"renderer");x(this,"scene");x(this,"camera");x(this,"collisionWorld",new Ug);x(this,"composer");x(this,"clouds",[]);x(this,"updateCallbacks",[]);x(this,"lastTime",0);x(this,"C",{modernGrey:13157564,warmGrey:12103846,terracotta:12884602,deepClay:10516568,softWhite:15262940,charcoal:4868682,warmCream:13945272,oliveGreen:9083754,ironRed:12674667})}async init(){this.renderer=new Wr({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Jc,this.renderer.toneMapping=Dr,this.renderer.toneMappingExposure=1.1,document.body.appendChild(this.renderer.domElement),this.renderer.domElement.style.position="relative",this.renderer.domElement.style.zIndex="1",this.scene=new Xr,this.scene.fog=new Wo(8900331,.0025),this.camera=new Ng,this.scene.add(this.camera.camera),this.composer=new Lg(this.renderer),this.composer.addPass(new Dg(this.scene,this.camera.camera));const e=new es(new Ne(window.innerWidth,window.innerHeight),.3,.4,.85);this.composer.addPass(e),this.composer.addPass(new kg);const t=new $r(16777215,.5);this.scene.add(t);const i=new Qn(16774368,1.4);i.position.set(80,120,40),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=.5,i.shadow.camera.far=600,i.shadow.camera.left=-300,i.shadow.camera.right=300,i.shadow.camera.top=300,i.shadow.camera.bottom=-300,i.shadow.bias=-.001,this.scene.add(i);const n=new Qn(16771280,.5);n.position.set(-60,40,-80),this.scene.add(n);const s=new dg(8900331,8943462,.3);this.scene.add(s),this.createCityGround(),this.createCity(),this.createTEHouses(),this.buildWorkshop(10,15),this.createZebraCrossings(),this.createRoadCorners(),this.createStreetFurniture(),this.createSkyDome(),this.createClouds(),this.createPuddles(),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),this.camera.camera.aspect=window.innerWidth/window.innerHeight,this.camera.camera.updateProjectionMatrix()})}seed(e,t,i=0){const n=Math.sin(e*127.1+t*311.7+i*74.3)*43758.5453123;return n-Math.floor(n)}getZone(e,t){return Math.abs(e)<80&&Math.abs(t)<80?"cbd":e<-80?"footscray":e>80?"richmond":t<-80?"stkilda":"brunswick"}pickBuildingType(e,t){const i={cbd:[.5,.5,.9,1,1],footscray:[0,.2,.2,.4,1],brunswick:[.3,.6,.6,1,1],richmond:[.3,.3,.6,1,1],stkilda:[0,.3,.3,.7,1]},n=i[e]??i.brunswick,s=["A","B","C","D","E"];for(let a=0;a<n.length;a++)if(t<n[a])return s[a];return"D"}createCityGround(){const s=new $({color:8947840}),a=new B(new mt(2048,2048),s);a.rotation.x=-Math.PI/2,a.position.y=0,a.receiveShadow=!0,this.scene.add(a);const r={cbd:8947840,footscray:7824981,brunswick:8943462,richmond:8026224,stkilda:9080960};for(let l=-240;l<240;l+=40)for(let c=-240;c<240;c+=40){const d=l+20,u=c+40/2,h=this.getZone(d,u),g=this.seed(l,c,0)<.15?5929546:r[h],v=new $({color:g}),m=new B(new mt(30,30),v);m.rotation.x=-Math.PI/2,m.position.set(d,.005,u),m.receiveShadow=!0,this.scene.add(m)}}createCity(){const n=new $({color:2763306}),s=new $({color:16777215}),a=new $({color:15777856}),r=new $({color:13156528}),l=32;for(let c=-240;c<=240;c+=40){const u=new B(new mt(480,8),n);u.rotation.x=-Math.PI/2,u.position.set(0,.01,c),u.receiveShadow=!0,this.scene.add(u);for(let h=-240;h<240;h+=40){const f=h+20;for(const g of[-1,1]){const v=new B(new mt(l,2),r);v.rotation.x=-Math.PI/2,v.position.set(f,.02,c+g*(8/2+1)),v.receiveShadow=!0,this.scene.add(v)}}for(const h of[-1,1]){const f=new B(new mt(480,.2),a);f.rotation.x=-Math.PI/2,f.position.set(0,.03,c+h*(8/2-.3)),this.scene.add(f)}for(let h=-240;h<=240;h+=8){const f=new B(new mt(4,.15),s);f.rotation.x=-Math.PI/2,f.position.set(h,.03,c),this.scene.add(f)}for(let h=-240;h<=240;h+=20)for(const f of[-1,1]){const g=h+(this.seed(h,c,50+f)-.5)*2,v=c+f*5.5,m=(g%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,v,h*10+f,c*10+1)}for(let h=-232;h<240;h+=17){const f=this.seed(h,c,60);if(f>.45){const g=f>.72?1:-1,v=h+(this.seed(h,c,61)-.5)*4,m=c+g*(8/2+2);this.addParkedCar(v,m,h+g*3,c+7,Math.PI/2)}}}for(let c=-240;c<=240;c+=40){const u=new B(new mt(8,480),n);u.rotation.x=-Math.PI/2,u.position.set(c,.01,0),u.receiveShadow=!0,this.scene.add(u);for(let h=-240;h<240;h+=40){const f=h+20;for(const g of[-1,1]){const v=new B(new mt(2,l),r);v.rotation.x=-Math.PI/2,v.position.set(c+g*(8/2+1),.02,f),v.receiveShadow=!0,this.scene.add(v)}}for(const h of[-1,1]){const f=new B(new mt(.2,480),a);f.rotation.x=-Math.PI/2,f.position.set(c+h*(8/2-.3),.03,0),this.scene.add(f)}for(let h=-240;h<=240;h+=8){const f=new B(new mt(.15,4),s);f.rotation.x=-Math.PI/2,f.position.set(c,.03,h),this.scene.add(f)}for(let h=-240;h<=240;h+=20)for(const f of[-1,1]){const g=c+f*5.5,v=h+(this.seed(c,h,52+f)-.5)*2,m=(v%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,v,c*10+2,h*10+f)}for(let h=-232;h<240;h+=17){const f=this.seed(c,h,62);if(f>.45){const g=f>.72?1:-1,v=c+g*(8/2+2),m=h+(this.seed(c,h,63)-.5)*4;this.addParkedCar(v,m,c+9,h+g*3,0)}}}for(let c=-240;c<240;c+=40)for(let d=-240;d<240;d+=40)this.populateBlock(c,d,40,8)}addTree(e,t,i,n){const s=this.seed(i,n,99),a=s<.15?"palm":s<.5?"round":"layered",r=2+s*1.5,l=new $({color:6045747}),c=new B(new qe(.25,.35,r,7),l);if(c.position.set(e,r/2,t),c.castShadow=!0,this.scene.add(c),a==="palm"){const d=new B(new qe(.15,.22,6,6),new $({color:9139029}));d.position.set(e,3,t),this.scene.add(d);for(let u=0;u<6;u++){const h=u/6*Math.PI*2,f=new B(new Q(.15,.08,2.5),new $({color:2775578}));f.position.set(e+Math.cos(h)*1.2,6.5,t+Math.sin(h)*1.2),f.rotation.y=h,f.rotation.z=.4,this.scene.add(f)}}else if(a==="layered"){const d=[2973229,3829306,4881994];for(let u=0;u<3;u++){const h=2.2-u*.5,f=new B(new $i(h,2,8),new $({color:d[u]}));f.position.set(e,r+1+u*1.5,t),f.castShadow=!0,this.scene.add(f)}}else{const d=s>.7?4025917:2973229,u=[[0,0,0],[.8,-.3,.5],[-.7,-.2,.3],[.3,.4,-.6],[-.4,.3,-.5]];for(let h=0;h<u.length;h++){const[f,g,v]=u[h],m=1.8+this.seed(i+h*17,n+h*13,103)*.8,p=new B(new ft(m,7,6),new $({color:d}));p.position.set(e+f,r+2.5+g,t+v),p.castShadow=!0,this.scene.add(p)}}}addParkedCar(e,t,i,n,s=0){const a=[13382451,3364300,11184810,14540253,2236962],r=Math.floor(this.seed(i,n,20)*a.length),l=new $({color:a[r]}),c=new B(new Q(1.5,1.2,3),l);c.position.set(e,.6,t),c.rotation.y=s,this.scene.add(c);const d=new $({color:2241348}),u=new B(new Q(1.4,.5,.1),d),h=-.9*Math.sin(s),f=-.9*Math.cos(s);u.position.set(e+h,1.3,t+f),u.rotation.y=s,this.scene.add(u)}populateBlock(e,t,i,n){const s=i-n-4,a=e+i/2,r=t+i/2,l=this.getZone(a,r),c=1+Math.floor(this.seed(e,t,1)*2);for(let d=0;d<c;d++){const u=this.seed(e+d*3,t+d*7,3),h=this.pickBuildingType(l,u);if(h==="E"){d===0&&this.buildTypeE(a,r,e,t);break}const f=s*.18,g=c>1?d===0?-f:f:0,v=g+(this.seed(e+d*5,t,4)-.5)*f*.3,m=g+(this.seed(e,t+d*5,5)-.5)*f*.3,p=e+d*11,b=t+d*13;switch(h){case"A":this.buildTypeA(a+v,r+m,p,b);break;case"B":this.buildTypeB(a+v,r+m,p,b);break;case"C":this.buildTypeC(a+v,r+m,p,b);break;case"D":this.buildTypeD(a+v,r+m,p,b);break}}}addBox(e,t,i,n,s,a,r,l,c=0,d=0,u=0){const h=new B(new Q(i,n,s),new $({color:t}));h.position.set(a,r,l),c!==0&&(h.rotation.x=c),d!==0&&(h.rotation.y=d),u!==0&&(h.rotation.z=u),h.castShadow=!0,h.receiveShadow=!0,e.add(h)}addCyl(e,t,i,n,s,a,r,l,c){const d=new B(new qe(i,n,s,a),new $({color:t}));d.position.set(r,l,c),d.castShadow=!0,d.receiveShadow=!0,e.add(d)}registerBuildingCollider(e,t,i,n,s,a){const r=Math.floor(this.seed(s,a,101)*4)%4,l=r===1||r===3;this.collisionWorld.addBox(e,t,l?n:i,l?i:n)}buildTypeA(e,t,i,n){const s=this.C,a=new Ge;this.addBox(a,s.modernGrey,16,10,14,0,5,0),this.addBox(a,s.softWhite,16.4,.6,14.4,0,10.3,0);for(const u of[-5,0,5])this.addCyl(a,s.charcoal,.3,.3,3,6,u,1.5,-7);this.addBox(a,s.charcoal,14,.4,.4,0,3,-7);for(const u of[-4.5,0,4.5])this.addGlassBox(a,2241348,2.5,1.8,.15,u,7,-6.93);this.addBox(a,s.deepClay,14,.5,1.2,0,.25,-7.6),this.addBox(a,s.oliveGreen,13,.4,1,0,.7,-7.6);const r=this.seed(i,n,400),l=new $({color:r>.5?12876352:4876938}),c=new B(new Q(14,.1,1.5),l);c.position.set(0,3.8,-7.75),c.rotation.x=.15,a.add(c);const d=new B(new Q(14,.3,.08),l);d.position.set(0,3.45,-8.45),a.add(d),this.addBox(a,14210252,.8,.5,.08,-6.5,1,-7.05),this.addRooftopDetails(a,16,14,10,i,n),a.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),a.position.set(e,0,t),this.scene.add(a),this.registerBuildingCollider(e,t,8.5,7.5,i,n)}buildTypeB(e,t,i,n){const s=this.C,a=new Ge;this.addBox(a,s.deepClay,14.5,8.2,12.5,.3,4,.3),this.addBox(a,s.terracotta,14,8,12,0,4,0),this.addBox(a,s.terracotta,14.6,1.2,12.6,0,8.6,0),this.addBox(a,s.softWhite,15,.3,13,0,9.35,0);for(const r of[-3,3]){this.addBox(a,s.softWhite,1.6,2.6,.1,r,5,-5.99),this.addGlassBox(a,2241348,1.2,2.2,.2,r,5,-5.75);for(const l of[4.3,5,5.7])this.addBox(a,s.charcoal,1,.08,.12,r,l,-5.68)}this.addBox(a,s.charcoal,2,3,.2,0,1.5,-6.1),this.addBox(a,s.charcoal,1.5,.4,.2,0,3.2,-6.1),this.addBox(a,s.charcoal,1,.4,.2,0,3.7,-6.1),this.addBox(a,s.deepClay,2,.4,.6,0,.2,-6.6),this.addBox(a,s.oliveGreen,1.8,.1,.5,0,.45,-6.6),this.addBox(a,13938826,.8,.5,.08,-5,1,-6.05),this.addRooftopDetails(a,14,12,8,i,n),a.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),a.position.set(e,0,t),this.scene.add(a),this.registerBuildingCollider(e,t,7.5,6.5,i,n)}buildTypeC(e,t,i,n){const s=this.C,a=new Ge,r=30+Math.floor(this.seed(i,n,31)*20);this.addBox(a,s.modernGrey,8,4,8,0,2,0),this.addBox(a,4478310,7.5,3.5,7.5,0,2,0),this.addBox(a,3359829,7,r,7,0,r/2,0);for(let l=4;l<=r;l+=4)this.addBox(a,s.warmGrey,7.3,.2,7.3,0,l,0);this.addBox(a,s.charcoal,4,3,4,0,r+1.5,0),a.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),a.position.set(e,0,t),this.scene.add(a),this.registerBuildingCollider(e,t,4.5,4.5,i,n)}buildTypeD(e,t,i,n){const s=this.C,a=new Ge;this.addBox(a,s.warmCream,13,7,11,0,3.5,0),this.addBox(a,s.softWhite,13.5,.5,11.5,0,7.25,0),this.addBox(a,s.softWhite,2.8,3.8,1.6,0,4,-6.2),this.addBox(a,s.warmCream,2.5,3.5,1.5,0,4,-6.25);for(const r of[-.8,0,.8])this.addGlassBox(a,3359829,.7,2.5,.2,r,4,-7);this.addBox(a,s.deepClay,2.2,3.2,.3,0,1.6,-5.65),this.addBox(a,s.deepClay,1.8,.4,.3,0,3.35,-5.65),this.addBox(a,s.deepClay,1.2,.4,.3,0,3.8,-5.65);for(const r of[-3.5,3.5])this.addBox(a,s.softWhite,1.8,1.5,.1,r,5.5,-5.5),this.addGlassBox(a,3359829,1.5,1.2,.15,r,5.5,-5.55);this.addBox(a,s.deepClay,11,1,.3,0,.5,-6.65),this.addBox(a,14997960,.8,.5,.08,-5,1,-5.55),this.addRooftopDetails(a,13,11,7,i,n),a.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),a.position.set(e,0,t),this.scene.add(a),this.registerBuildingCollider(e,t,7,6,i,n)}buildTypeE(e,t,i,n){this.C;const s=new Ge,a=12*Math.PI/180;this.addBox(s,6974050,22,4,18,0,2,0),this.addBox(s,1710614,22.1,.3,18.1,0,.15,0);const r=new B(new Q(22.5,.3,10),new $({color:1973786}));r.castShadow=!0,r.receiveShadow=!0,r.rotation.x=a,r.position.set(0,4.5,-4.5),s.add(r);const l=new B(new Q(22.5,.3,10),new $({color:1973786}));l.castShadow=!0,l.receiveShadow=!0,l.rotation.x=-a,l.position.set(0,4.5,4.5),s.add(l),this.addBox(s,1118480,22.5,.5,.6,0,5.2,0);for(const f of[-2,.5,3])this.addBox(s,1118480,22.2,.08,.1,0,3.5,f);this.addBox(s,1118480,4.5,3.5,.2,0,1.75,-9.1),this.addBox(s,2236960,.15,3.5,.2,-2.4,1.75,-9.1),this.addBox(s,2236960,.15,3.5,.2,2.4,1.75,-9.1),this.addBox(s,3359829,8,.8,.15,-11.075,3.5,0),this.addCyl(s,1118480,.1,.1,4,5,-11,2,-9);const c=this.seed(i,n,401),d=new $({color:c>.5?12876352:4876938}),u=new B(new Q(8,.1,1.5),d);u.position.set(0,4.2,-9.85),u.rotation.x=.15,s.add(u);const h=new B(new Q(8,.3,.08),d);h.position.set(0,3.85,-10.6),s.add(h);for(const f of[-3.5,3.5]){const g=new B(new qe(.06,.06,4,5),new $({color:5592400}));g.position.set(f,2,-10.55),s.add(g)}this.addRooftopDetails(s,22,18,5.2,i,n),s.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),s.position.set(e,0,t),this.scene.add(s),this.registerBuildingCollider(e,t,11.5,9.5,i,n)}createTEHouses(){this.buildHouseMarbellino(20,20),this.collisionWorld.addBox(20,20,10,7.5),this.buildHousePorthole(-60,20),this.collisionWorld.addBox(-60,20,8,6.5),this.buildHouseTerracotta(20,-60),this.collisionWorld.addBox(20,-60,9,7),this.buildHouseLoggia(-60,-60),this.collisionWorld.addBox(-60,-60,10,7.5),this.buildHouseRokka(60,-20),this.collisionWorld.addBox(60,-20,11,8),this.buildHouseTimberStone(100,60),this.collisionWorld.addBox(100,60,11,7),this.buildHouseSculpturalPlaster(-100,-20),this.collisionWorld.addBox(-100,-20,8,6),this.buildHouseHaussmann(60,-100),this.collisionWorld.addBox(60,-100,11,7),this.buildHouseAngularBay(-140,60),this.collisionWorld.addBox(-140,60,9,6.5),this.buildHouseBrutalistCompound(20,100),this.collisionWorld.addBox(20,100,12,5),this.buildHouseTerracottaMonolith(140,20),this.collisionWorld.addBox(140,20,10,5),this.buildHouseCurvedBalcony(-20,-140),this.collisionWorld.addBox(-20,-140,8,6),this.buildHouseCortenPlaster(-140,-60),this.collisionWorld.addBox(-140,-60,10,5.5),this.buildCoffeeShop(-60,-100),this.collisionWorld.addBox(-60,-100,7,5),this.buildToiletBlock(100,60),this.collisionWorld.addBox(100,60,6,5)}buildHouseMarbellino(e,t){const i=new Ge;this.addBox(i,13945786,18,4,14,0,2,0),this.addBox(i,2763306,20,4,15,0,7,0);for(const n of[-8,-5,-2,1,4,7])this.addBox(i,1710618,.15,4,15,n,7,0);this.addBox(i,3355443,20.5,.5,15.5,0,9.25,0),this.addBox(i,3359829,10,.9,.15,0,3.5,-7.1),this.addBox(i,13157564,10.4,1.1,.1,0,3.5,-7.05);for(const n of[-4,0,4]){const s=new B(new Q(1.5,2.5,.15),new $({color:4478310,emissive:new Se(2241348),emissiveIntensity:.3}));s.position.set(n,7.5,-7.6),i.add(s)}this.addBox(i,1710618,5,3.8,.2,-5.5,1.9,-7.1),this.addBox(i,13157564,2,.3,1,4,.15,-7.5),this.addBox(i,9072736,14,.4,1,0,.2,-8),this.addBox(i,5929546,12,.6,.8,0,.6,-8),i.position.set(e,0,t),this.scene.add(i)}buildHousePorthole(e,t){const i=new Ge;this.addBox(i,12104876,16,5.5,13,0,2.75,0),this.addBox(i,9134144,7,5.5,.3,3.5,2.75,-6.65);for(let n=0;n<5;n++){const s=(n-2)*1.2;this.addBox(i,6965280,7,.2,.4,3.5,2.75+s,-6.55,0,0,Math.PI/7.2)}this.addBox(i,13157564,16.5,.3,13.5,0,5.65,0),this.addBox(i,2763306,17,.5,14,0,5.95,0);{const n=new B(new qe(1.4,1.4,.15,16),new $({color:8947848}));n.rotation.x=Math.PI/2,n.position.set(-4,3.5,-6.7),i.add(n)}{const n=new B(new qe(1.1,1.1,.1,16),new $({color:2241348,emissive:new Se(1122867),emissiveIntensity:.5}));n.rotation.x=Math.PI/2,n.position.set(-4,3.5,-6.65),i.add(n)}this.addBox(i,3359829,3.5,1.2,.15,1,3.5,-6.7),this.addBox(i,3359829,3.5,1.2,.15,5,3.5,-6.7),this.addBox(i,3811866,1.8,2.8,.3,-6,1.4,-6.8),this.addBox(i,8947848,2.2,3,.2,-6,1.4,-6.65),this.addBox(i,3828282,10,.7,.8,0,.35,-7.5),i.position.set(e,0,t),this.scene.add(i)}buildHouseTerracotta(e,t){const i=new Ge;this.addBox(i,10121296,17.6,7.2,14.6,0,3.5,0),this.addBox(i,12884602,17,7,14,0,3.5,0),this.addBox(i,12884602,17.8,1.5,14.8,0,7.75,0),this.addBox(i,15262940,18.2,.3,15.2,0,8.65,0),this.addBox(i,9068608,2.4,3.5,.3,0,1.75,-7.1),this.addBox(i,9068608,2,.5,.3,0,3.75,-7.1),this.addBox(i,9068608,1.4,.5,.3,0,4.25,-7.1),this.addBox(i,9068608,1.4,2.8,.5,-4,4,-7.2),this.addBox(i,2241348,1,2.4,.15,-4,4,-7.05),this.addBox(i,15262940,1.6,3,.15,-4,4,-6.98);for(const n of[3.2,4,4.8])this.addBox(i,3355443,.9,.08,.15,-4,n,-7.1);this.addBox(i,9068608,1.4,2.8,.5,4,4,-7.2),this.addBox(i,2241348,1,2.4,.15,4,4,-7.05),this.addBox(i,15262940,1.6,3,.15,4,4,-6.98);for(const n of[3.2,4,4.8])this.addBox(i,3355443,.9,.08,.15,4,n,-7.1);for(const n of[-2,2])this.addBox(i,3359829,.15,1.5,1,8.58,4,n),this.addBox(i,3359829,.15,1.5,1,-8.58,4,n);this.addBox(i,10516568,2.5,.5,.8,-4,.25,-7.5),this.addBox(i,10516568,2.5,.5,.8,4,.25,-7.5),this.addBox(i,5933642,2,.5,.6,-4,.65,-7.5),this.addBox(i,5933642,2,.5,.6,4,.65,-7.5);for(const n of[-6,-2,2,6])this.addBox(i,15262940,.8,.8,.2,n,8.4,-7.4);i.position.set(e,0,t),this.scene.add(i)}buildHouseLoggia(e,t){const i=new Ge;this.addBox(i,11578532,20,6,15,0,3,0),this.addBox(i,10131088,20.5,.4,15.5,0,6.2,0),this.addBox(i,10131088,20,.4,3,0,3.2,-10);for(const n of[-7,-3,3,7])this.addCyl(i,8947840,.2,.2,3.2,8,n,1.6,-11);this.addBox(i,3359829,14,2,.2,0,4,-7.5),this.addBox(i,13157564,14.4,2.2,.15,0,4,-7.4);for(const n of[-5,0,5])this.addBox(i,8947840,.15,2,.2,n,4,-7.5);{const n=new B(new Q(2.4,2.8,.2),new $({color:3359829,emissive:new Se(1120290),emissiveIntensity:.2}));n.position.set(5,1.4,-7.5),i.add(n)}this.addBox(i,8947840,2.8,3,.15,5,1.4,-7.4),this.addBox(i,9074784,18,.5,2.5,0,.25,-9),this.addBox(i,4880970,16,.7,2,0,.65,-9),this.addBox(i,8947840,20,.3,.3,0,3.1,-10.2),this.addBox(i,8947840,20,.3,.3,0,3.1,-11.8),i.position.set(e,0,t),this.scene.add(i)}buildHouseRokka(e,t){const i=new Ge;this.addBox(i,12892314,22,4.5,16,0,2.25,0),this.addBox(i,10128506,22.5,.3,9,0,4.75,-3.5,Math.PI*8/180,0,0),this.addBox(i,10128506,22.5,.3,9,0,4.75,3.5,-Math.PI*8/180,0,0),this.addBox(i,6969928,22.5,.6,.8,0,5.1,0),this.addBox(i,10127472,22.5,1,16.5,0,.5,0);{const n=new B(new Q(6,3.2,.2),new $({color:3359829,emissive:new Se(1120290),emissiveIntensity:.3}));n.position.set(0,1.6,-8.1),i.add(n)}this.addBox(i,8022618,6.4,3.5,.15,0,1.75,-8);for(const n of[-2,0,2])this.addBox(i,8947824,.1,3.2,.2,n,1.6,-8.1);this.addBox(i,8947824,6,.1,.2,0,2.2,-8.1),this.addBox(i,3359829,2.5,1.5,.2,-7,3,-8.1),this.addBox(i,3359829,2.5,1.5,.2,7,3,-8.1),this.addBox(i,11575432,.8,4.5,.8,-3.5,2.25,-8.2),this.addBox(i,11575432,.8,4.5,.8,3.5,2.25,-8.2),this.addCyl(i,6969928,.1,.1,4.5,5,-11,2.25,-8),this.addCyl(i,6969928,.1,.1,4.5,5,11,2.25,-8),this.addBox(i,11575432,20,.8,.3,0,.4,-10),i.position.set(e,0,t),this.scene.add(i)}buildHouseTimberStone(e,t){const i=new Ge;this.addBox(i,8947840,22,4,14,0,2,0),this.addBox(i,6710880,22.2,.4,14.2,0,.2,0),this.addBox(i,12088362,22,4.5,13,0,6.25,0);for(let n=0;n<8;n++)this.addBox(i,10116634,22.1,.12,13.1,0,4.3+n*.57,0);this.addBox(i,4870229,5,8.5,14.2,8.5,4.25,0);for(let n=0;n<12;n++){const s=n%2===0?3817541:5593696;this.addBox(i,s,5.1,.3,14.3,8.5,.5+n*.65,0)}this.addBox(i,2763306,22.5,.5,14.5,0,8.75,0);for(const n of[-6,-2,2]){this.addBox(i,1710618,2.8,3.2,.2,n,6,-6.6);const s=new B(new Q(2.4,2.9,.15),new $({color:9087675,emissive:new Se(2770005),emissiveIntensity:.2}));s.position.set(n,6,-6.6),i.add(s)}this.addBox(i,1710618,13,.15,.5,-3,8,-6.8),this.addBox(i,10140364,12.5,.8,.1,-3,7.6,-6.75);for(const n of[-7,-4.5])this.addBox(i,1710618,2.2,1.8,.2,n,2,-7.1),this.addBox(i,3359829,1.8,1.5,.15,n,2,-7);this.addBox(i,6962202,1.8,3.2,.2,2.5,1.6,-7.1),this.addBox(i,12092938,.12,.12,.15,3.1,1.6,-7.1),this.addBox(i,1710618,4,.15,2.5,2.5,3.5,-7.3),this.addCyl(i,1710618,.06,.06,3.5,5,1,1.75,-8.2),this.addCyl(i,1710618,.06,.06,3.5,5,4,1.75,-8.2),this.addBox(i,1710618,8,.18,6,-9,4.1,-5),this.addCyl(i,1118481,.12,.12,4.1,6,-6.5,2.05,-7.8),this.addCyl(i,1118481,.12,.12,4.1,6,-11.5,2.05,-7.8),this.addBox(i,10066329,2,.8,3.5,-9.5,.4,-4.5),this.addBox(i,11184810,1.9,.3,3.4,-9.5,.9,-4.5);for(let n=5;n<=13;n+=.7)this.addBox(i,1710618,.12,1.6,.12,n,.8,-8.5);this.addBox(i,6710880,20,.8,.3,0,.4,-9.5),this.addBox(i,4870229,20,.35,.4,0,.18,-9.5);for(let n=0;n<5;n++)this.addBox(i,14540236,1.4,.08,.7,5,.05,-10.2+n*.9);this.addBox(i,4880954,8,.1,3,5,0,-9.8);for(const[n,s]of[[3.5,-8.5],[6.5,-8]]){this.addCyl(i,5912608,.12,.15,2.5,6,n,1.25,s);const a=new B(new $i(1,2.2,7),new $({color:3828266}));a.position.set(n,2.8,s),i.add(a)}this.addBox(i,1710618,3.5,1.8,.2,7.5,6.5,-6.6),this.addBox(i,3359829,3,1.5,.15,7.5,6.5,-6.55),i.position.set(e,0,t),this.scene.add(i)}buildHouseSculpturalPlaster(e,t){const i=new Ge,n=8686698,s=6976085,a=11842732,r=1118481;this.addBox(i,n,14,5.5,12,-3,2.75,0),this.addBox(i,n,7,3.5,12,9,1.75,0),this.addBox(i,s,.3,5.6,12,2.85,2.75,0);const l=new B(new Q(11,.35,12.4),new $({color:n}));l.rotation.z=22*Math.PI/180,l.position.set(.5,8,0),i.add(l);const c=new B(new Q(7.5,.35,12.4),new $({color:a}));c.rotation.z=-52*Math.PI/180,c.position.set(-6.2,8.2,0),i.add(c),this.addBox(i,s,.6,.6,12.4,-3.2,10,0),this.addBox(i,1710618,2.3,4,.5,-3,2,-6.25),this.addBox(i,r,2.6,4.3,.2,-3,2.1,-6.05);const d=new B(new Q(2,3.6,.12),new $({color:2767428,emissive:new Se(661538),emissiveIntensity:.3}));d.position.set(-3,2.1,-6.1),i.add(d),this.addBox(i,1710618,1.6,1.6,.4,8.5,2,-6.2),this.addBox(i,r,1.8,1.8,.18,8.5,2,-6.05),this.addBox(i,r,.4,.4,.4,-6.5,4.2,-6.05),this.addBox(i,r,.4,.4,.4,6.5,3.4,-6.05);for(const f of[-6.5,6.5]){const g=new B(new Q(.5,.08,.3),new $({color:16772812,emissive:new Se(16764040),emissiveIntensity:.6}));g.position.set(f,f===-6.5?3.95:3.15,-6.07),i.add(g)}const u=8.5,h=-11;for(let f=-4;f<=4;f++){const g=f/4*40*Math.PI/180,v=u*Math.sin(g),m=h+u*(Math.cos(g)-1),p=new B(new Q(2,1.2,.35),new $({color:n}));p.rotation.y=g,p.position.set(v,.6,m),i.add(p);const b=new B(new Q(2,.12,.45),new $({color:12631720}));b.rotation.y=g,b.position.set(v,1.26,m),i.add(b)}this.addBox(i,s,2.5,.2,1,-3,.1,-7.5),i.position.set(e,0,t),this.scene.add(i)}buildHouseHaussmann(e,t){const i=new Ge,n=15261384,s=15788244,a=13154972,r=1118481;this.addBox(i,n,22,9.5,14,0,4.75,0);for(let d=0;d<5;d++)this.addBox(i,a,22.3,.14,14.3,0,.5+d*.88,0);for(let d=0;d<4;d++)this.addBox(i,a,22.3,.12,14.3,0,5.4+d*.85,0);this.addBox(i,s,22.6,.5,14.6,0,4.75,0),this.addBox(i,a,22.8,.2,14.8,0,5.05,0),this.addBox(i,n,22.5,.3,14.5,0,5.25,0),this.addBox(i,n,23.2,.5,15.2,0,9.75,0),this.addBox(i,s,22.8,.8,14.8,0,10.15,0),this.addBox(i,a,23.4,.25,15.4,0,10.55,0),this.addBox(i,s,4,11.5,4,-10,5.75,-6);for(let d=0;d<6;d++)this.addBox(i,a,4.2,.12,4.2,-10,.5+d*1.75,-6);this.addBox(i,n,4.4,.4,4.4,-10,5,-6),this.addBox(i,n,4.6,.4,4.6,-10,11.3,-6),this.addBox(i,s,4.4,.6,4.4,-10,11.75,-6),this.addBox(i,a,4.8,.25,4.8,-10,12.12,-6),this.addBox(i,n,2.5,1,2.5,-10,12.75,-6);for(const d of[-6.5,-1,4.5]){this.addBox(i,a,2,4.2,.5,d,2.1,-7.25),this.addBox(i,s,1.7,4,.2,d,2.1,-7.05);const u=new B(new Q(1.35,3.5,.12),new $({color:9087931,emissive:new Se(1714739),emissiveIntensity:.15}));u.position.set(d,2.1,-7),i.add(u),this.addBox(i,s,1.7,.12,.15,d,3.2,-7.05)}for(const d of[-6.5,4.5]){this.addBox(i,a,2,3.8,.5,d,7.5,-7.25),this.addBox(i,s,1.7,3.5,.2,d,7.5,-7.05);const u=new B(new Q(1.35,3,.12),new $({color:9087931,emissive:new Se(1714739),emissiveIntensity:.15}));u.position.set(d,7.5,-7),i.add(u),this.addBox(i,s,1.7,.12,.15,d,8.5,-7.05),this.addBox(i,n,3.4,.28,1.4,d,5.66,-7.9),this.addBox(i,a,3.5,.45,1.5,d,5.38,-7.95);for(let h=0;h<5;h++){const f=d-1.3+h*.65;this.addBox(i,r,.07,1,.07,f,6.2,-8.4)}this.addBox(i,r,3.2,.09,.09,d,6.72,-8.4),this.addBox(i,r,3.2,.09,.09,d,5.82,-8.4),this.addBox(i,r,.07,1,.07,d-1.3,6.2,-8.4,0,0,.35),this.addBox(i,r,.07,1,.07,d+1.3,6.2,-8.4,0,0,-.35)}this.addBox(i,s,5,6.5,.22,9.5,3.75,-7.05);const l=new B(new Q(4.5,6,.12),new $({color:9087931,emissive:new Se(1714739),emissiveIntensity:.12}));l.position.set(9.5,3.75,-7),i.add(l);for(let d=0;d<3;d++)this.addBox(i,s,5,.1,.15,9.5,1+d*2,-7);for(const d of[7.5,9.5,11.5])this.addBox(i,s,.1,6,.15,d,3.75,-7);this.addBox(i,a,3.8,5.5,.6,1.5,2.75,-7.4),this.addBox(i,s,2.8,4.8,.2,1.5,2.4,-7.1);const c=new B(new Q(2.2,4.2,.12),new $({color:9087931,emissive:new Se(660768),emissiveIntensity:.2}));c.position.set(1.5,2.4,-7.05),i.add(c),this.addBox(i,13937232,.1,.1,.1,2.4,2.2,-7.06),this.addBox(i,a,22.5,.3,14.5,0,.15,0),i.position.set(e,0,t),this.scene.add(i)}buildHouseAngularBay(e,t){const i=new Ge,n=15789022,s=12876378,a=3809296,r=1118481;this.addBox(i,n,18,4,13,0,2,0),this.addBox(i,n,18,4,12,0,6,0),this.addBox(i,n,8,4,2.5,5,6,-7.25),this.addBox(i,n,3,10,2.5,6.5,5,-7.5),this.addBox(i,s,10,.5,14,-4.5,8.5,0,0,0,.44),this.addBox(i,s,10,.5,14,4.5,8.5,0,0,0,-.44),this.addBox(i,a,1.5,.5,14.5,0,10.5,0),this.addBox(i,a,19,.3,13.5,0,8.05,0),this.addBox(i,a,19,.2,1.2,0,8.05,-7.3);for(const l of[-6.5,0])this.addBox(i,15658734,2.6,2,.12,l,1.8,-6.56),this.addBox(i,3359829,2.2,1.6,.15,l,1.8,-6.5);for(const l of[-6.5,0])this.addBox(i,15658734,2.6,2,.12,l,5.8,-6.56),this.addBox(i,3359829,2.2,1.6,.15,l,5.8,-6.5);for(let l=0;l<4;l++)this.addBox(i,r,.08,1,.08,-8.5+l*.65,5.5,-6.7);this.addBox(i,r,2.4,.08,.08,-7.02,6.05,-6.7),this.addBox(i,r,2.4,.08,.08,-7.02,5,-6.7),i.position.set(e,0,t),this.scene.add(i)}buildHouseBrutalistCompound(e,t){const i=new Ge,n=10524792,s=8947840;this.addBox(i,n,7,7,11,-8.5,3.5,0),this.addBox(i,n,6,5,10,-1,2.5,.5),this.addBox(i,n,6,6,11,5.5,3,-.5),this.addBox(i,n,5,4,9,11,2,0),this.addBox(i,n,24,1.5,9,0,.75,.5),this.addBox(i,s,4,.25,2.5,-8.5,7.25,-6.2),this.addBox(i,s,4,.25,2.5,5.5,6.25,-6.2),this.addBox(i,2241348,4,5.5,.15,-8.5,3.5,-5.6),this.addBox(i,2241348,3.5,4.5,.15,5.5,3,-5.6),this.addBox(i,n,8,5,.4,2,2.5,-6.5,0,.26,0);const a=14,r=9,l=-Math.PI*.35,c=Math.PI*.35;for(let d=0;d<r;d++){const u=d/(r-1),h=l+(c-l)*u,f=Math.sin(h)*a,g=Math.cos(h)*a-a+4;this.addBox(i,n,3.5,1.5,.4,f,.75,g,0,-h,0)}for(const d of[-3,2.5]){this.addCyl(i,5913114,.15,.2,3,5,d,1.5,-4);const u=new B(new ft(1.2,6,5),new $({color:3828266}));u.position.set(d,4,-4),i.add(u)}i.position.set(e,0,t),this.scene.add(i)}buildHouseTerracottaMonolith(e,t){const i=new Ge,n=12284e3,s=2759194,a=4880954;this.addBox(i,n,20,3,.5,0,1.5,-9.5),this.addBox(i,s,20.2,.1,.55,0,1,-9.5),this.addBox(i,s,20.2,.1,.55,0,2,-9.5),this.addBox(i,n,20,6,10,0,3,-2),this.addBox(i,s,20.2,.1,10.1,0,2,-2),this.addBox(i,s,20.2,.1,10.1,0,4,-2),this.addBox(i,n,20.3,.4,10.3,0,6.2,-2),this.addBox(i,a,18,.3,1.8,0,.15,-7.5);for(let r=-8;r<=8;r+=2.5){const l=new B(new $i(.2,.8,5),new $({color:5933642}));l.position.set(r,.55,-7.5),i.add(l)}this.addBox(i,1118481,1.2,3.5,.2,0,3.5,-7.05),this.addBox(i,2241348,.8,3,.15,0,3.5,-7),i.position.set(e,0,t),this.scene.add(i)}buildHouseCurvedBalcony(e,t){const i=new Ge,n=15261900,s=15789544,a=11053216,r=1118481;this.addBox(i,n,16,4,12,0,2,0),this.addBox(i,s,16,4,12,0,6,0),this.addBox(i,s,16.5,.3,12.5,0,8.15,0),this.addBox(i,r,16.6,.2,12.6,0,8.3,0);const l=5,c=14,d=-Math.PI*.5,u=Math.PI*.5;for(let h=0;h<c;h++){const f=h/(c-1),g=d+(u-d)*f,v=Math.sin(g)*l,m=-Math.cos(g)*l-3.5;this.addBox(i,a,1.3,2,.5,v,5.5,m,0,-g,0)}for(const h of[-5,0,5])this.addBox(i,4473924,2.5,2,.15,h,1.8,-6.1),this.addBox(i,2241348,2,1.6,.12,h,1.8,-6);this.addCyl(i,r,.1,.1,8,5,-8,4,-6.1),this.addCyl(i,r,.1,.1,8,5,8,4,-6.1),this.addBox(i,r,.3,.3,.3,-2,2.5,-6.15),this.addBox(i,s,17,.25,1.5,0,8,-7.2,.1,0,0),this.addBox(i,r,17.2,.1,1.6,0,8.12,-7.2,.1,0,0),i.position.set(e,0,t),this.scene.add(i)}buildHouseCortenPlaster(e,t){const i=new Ge,n=4868682,s=12081696,a=3684408,r=9060368;this.addBox(i,n,12,8,11,-7,4,0),this.addBox(i,n,12.3,.4,11.3,-7,8.2,0),this.addBox(i,s,8,8.5,11,5,4.25,0),this.addBox(i,s,8.3,.4,11.3,5,8.7,0),this.addBox(i,a,2,9.5,11,-.5,4.75,0);for(let c=0;c<6;c++)this.addBox(i,r,.15,8.5,11.1,1.5+c*1.2,4.25,0);this.addCyl(i,13421704,.15,.15,.5,6,-5,5,-5.6),this.addCyl(i,13421704,.15,.15,.5,6,-9,5,-5.6),this.addBox(i,1118481,2.5,1.8,.3,-6,4.5,-5.7),this.addBox(i,2241348,2,1.4,.15,-6,4.5,-5.6),this.addBox(i,1118481,2.5,1.8,.3,-10,2.5,-5.7),this.addBox(i,2241348,2,1.4,.15,-10,2.5,-5.6),this.addCyl(i,9132587,.2,.3,8,6,-15,4,-3);const l=new B(new $i(2.5,1.5,8),new $({color:2775578}));l.position.set(-15,8.75,-3),i.add(l),i.position.set(e,0,t),this.scene.add(i)}buildCoffeeShop(e,t){const i=new Ge;this.addBox(i,15788248,14,4,10,0,2,0),this.addBox(i,15261904,14.2,.18,10.2,0,4.09,0),this.addBox(i,1118481,14.6,.38,10.6,0,4.19,0);for(const s of[-3.8,3.8]){this.addBox(i,1118481,4,3.8,.14,s,2.1,-5.08);const a=new B(new Q(3.5,3.4,.1),new $({color:13140032,emissive:new Se(10115616),emissiveIntensity:.7}));a.position.set(s,2.1,-5.06),i.add(a)}this.addBox(i,1118481,2,3,.14,0,1.5,-5.08),this.addBox(i,8014368,1.6,2.8,.2,0,1.4,-5.1),this.addBox(i,13410400,.1,.1,.12,.5,1.4,-5.1),this.addBox(i,12876352,13.5,.28,4,0,3.22,-7),this.addBox(i,10770984,13.5,.6,.18,0,2.95,-9.05);for(const s of[-4.5,0,4.5])this.addCyl(i,8947832,.07,.07,3,5,s,1.5,-9.1);this.addBox(i,16777215,5,.36,.12,0,3.06,-8.96);for(const[s,a]of[[-5,-11.5],[0,-11.5],[5,-11.5]]){this.addCyl(i,9068608,.75,.75,.1,12,s,1.12,a),this.addCyl(i,6963232,.07,.07,1.12,6,s,.56,a);for(const r of[-1,1])this.addCyl(i,9068608,.32,.32,.09,8,s+r*.85,.82,a),this.addCyl(i,6963232,.05,.05,.82,5,s+r*.85,.41,a)}for(let s=0;s<5;s++)this.addCyl(i,16777215,.22-s*.008,.24-s*.008,.3,8,7.1,.22+s*.28,-3.5);this.addBox(i,3355445,1.1,1.7,.12,-3.5,1.1,-5.1),this.addBox(i,15658734,.72,.08,.05,-3.5,1.6,-5.04),this.addBox(i,15658734,.55,.08,.05,-3.5,1.42,-5.04),this.addBox(i,15658734,.63,.08,.05,-3.5,1.24,-5.04),this.addBox(i,15658734,.48,.08,.05,-3.5,1.06,-5.04);for(const s of[-4,0,4]){const a=new B(new Q(.25,.25,.25),new $({color:16764040,emissive:new Se(16755268),emissiveIntensity:.8}));a.position.set(s,3.7,-2),i.add(a)}this.addCyl(i,3355443,.3,.3,12,8,0,6,-8);const n=new B(new Q(10,3,.4),new $({color:13918762,emissive:new Se(9121808),emissiveIntensity:.6}));n.position.set(0,13,-8),n.castShadow=!0,i.add(n),this.addBox(i,16777215,8,.2,.5,0,14.2,-7.85),this.addBox(i,16777215,8,.2,.5,0,12.8,-7.85),this.addCyl(i,16777215,.8,1,1.5,12,0,15.5,-8),this.addCyl(i,7027242,.4,.4,.3,8,0,16.4,-8),i.position.set(e,0,t),this.scene.add(i)}buildWorkshop(e,t){const i=new Ge,n=4868676,s=2236960,a=15657176,r=3355440,l=1118480;this.addBox(i,n,30,8,20,0,4,0),this.addBox(i,1710616,30.2,.35,20.2,0,.18,0);const c=12*Math.PI/180,d=new $({color:s}),u=new B(new Q(30.5,.35,11),d);u.castShadow=!0,u.rotation.x=c,u.position.set(0,8.6,-4.5),i.add(u);const h=new B(new Q(30.5,.35,11),d);h.castShadow=!0,h.rotation.x=-c,h.position.set(0,8.6,4.5),i.add(h),this.addBox(i,1118480,30.5,.55,.8,0,9.3,0),this.addBox(i,a,24,3.2,.45,0,7.4,-10.23),this.addBox(i,r,22,2.5,.28,0,7.4,-10.25),this.addBox(i,16775920,24.2,.22,.46,0,9.11,-10.23),this.addBox(i,16775920,24.2,.22,.46,0,5.89,-10.23),this.addBox(i,16775920,.22,3.2,.46,-12.11,7.4,-10.23),this.addBox(i,16775920,.22,3.2,.46,12.11,7.4,-10.23),this.addBox(i,12674667,24,.3,.44,0,5.75,-10.22),this.addBox(i,16763972,8,.65,.35,0,5.5,-10.2),this.addBox(i,2763296,7.5,.42,.38,0,5.5,-10.21),this.addBox(i,l,12,5,.25,0,2.5,-10.15),this.addBox(i,2236960,.2,5,.25,-6.2,2.5,-10.15),this.addBox(i,2236960,.2,5,.25,6.2,2.5,-10.15);for(let y=1;y<=4;y++)this.addBox(i,1710616,11.8,.08,.28,0,y,-10.14);this.addBox(i,2236960,12.6,.4,.28,0,5.2,-10.14);const f=3359829;for(let y=-6;y<=6;y+=4)this.addBox(i,f,.16,1.2,2.8,15.09,7.2,y),this.addBox(i,f,.16,1.2,2.8,-15.09,7.2,y);this.addBox(i,2236960,.2,.18,20,15.1,7.9,0),this.addBox(i,2236960,.2,.18,20,15.1,6.6,0),this.addBox(i,2236960,.2,.18,20,-15.1,7.9,0),this.addBox(i,2236960,.2,.18,20,-15.1,6.6,0),this.addCyl(i,2236960,.12,.12,8,5,-15,4,-10),this.addCyl(i,2236960,.12,.12,8,5,15,4,-10),this.addCyl(i,2236960,.12,.12,8,5,-15,4,10),this.addCyl(i,2236960,.12,.12,8,5,15,4,10),this.addCyl(i,12884602,.85,.9,1.5,10,9.5,.75,-11.5),this.addCyl(i,6974050,.85,.9,1.5,10,9.5,2.35,-11.5),this.addCyl(i,8947840,.92,.92,.12,10,9.5,1.56,-11.5),this.addCyl(i,8947840,.92,.92,.12,10,9.5,3.16,-11.5),this.addCyl(i,12884602,.85,.9,1.5,10,11.2,.75,-12.2),this.addCyl(i,8947840,.92,.92,.12,10,11.2,1.56,-12.2),this.addBox(i,8018488,4.5,.18,2.5,10.2,.09,-11.8),this.addBox(i,9074776,6,1,2.2,0,.5,-9.2),this.addBox(i,13154448,6.3,.18,2.4,0,1.09,-9.2),this.addBox(i,15658700,.8,.05,1,.8,1.19,-9.3),this.addBox(i,4473924,.12,.25,.12,.8,1.22,-9),this.addBox(i,5921362,2.8,1.8,2.8,-8.5,.9,-11.5);const g=new B(new qe(.75,.75,2.2,10),new $({color:8947840}));g.rotation.z=35*Math.PI/180,g.position.set(-8.5,1.6,-11.5),g.castShadow=!0,i.add(g),this.addCyl(i,3355440,.4,.4,.3,8,-8.5,.2,-10.8),this.addBox(i,4868676,3.5,2.2,2.5,-11.5,1.1,-13),this.addBox(i,8947840,3,.5,2,-11.5,2.35,-13),this.addBox(i,6710880,2.2,1.2,1.4,-11.5,3.1,-13);const v=new $({color:10131600}),m=new B(new mt(20,8),v);m.rotation.x=-Math.PI/2,m.position.set(0,.008,-14),m.receiveShadow=!0,i.add(m),this.addBox(i,a,.3,2.5,6,15.16,4,0),this.addBox(i,r,.32,2,5.5,15.17,4,0);const p=zd(1024),b=new zt({map:p,transparent:!0,depthWrite:!1,side:Ut}),M=new B(new mt(7,4.5),b);M.position.set(0,2.5,-10.29),i.add(M),i.position.set(e,0,t),this.scene.add(i),this.collisionWorld.addBox(e,t,15.5,10.5)}createZebraCrossings(){const e=new $({color:15658734}),t=new $({color:1118481});for(let i=-200;i<=200;i+=40)for(let n=-200;n<=200;n+=40){if(Math.abs(i)>200||Math.abs(n)>200)continue;const s=[-3.2,-1.6,0,1.6,3.2],a=[-2.4,-.8,.8,2.4],r=2;for(const l of s){const c=new B(new Q(.8,.03,r),e);c.position.set(i+l,.05,n-5),this.scene.add(c)}for(const l of a){const c=new B(new Q(.8,.03,r),t);c.position.set(i+l,.04,n-5),this.scene.add(c)}for(const l of s){const c=new B(new Q(.8,.03,r),e);c.position.set(i+l,.05,n+5),this.scene.add(c)}for(const l of a){const c=new B(new Q(.8,.03,r),t);c.position.set(i+l,.04,n+5),this.scene.add(c)}for(const l of s){const c=new B(new Q(r,.03,.8),e);c.position.set(i-5,.05,n+l),this.scene.add(c)}for(const l of a){const c=new B(new Q(r,.03,.8),t);c.position.set(i-5,.04,n+l),this.scene.add(c)}for(const l of s){const c=new B(new Q(r,.03,.8),e);c.position.set(i+5,.05,n+l),this.scene.add(c)}for(const l of a){const c=new B(new Q(r,.03,.8),t);c.position.set(i+5,.04,n+l),this.scene.add(c)}}}createRoadCorners(){const e=new $({color:13156528}),t=new $({color:11051160}),i=[{dx:-6,dz:-6,theta:3*Math.PI/2},{dx:6,dz:-6,theta:Math.PI},{dx:-6,dz:6,theta:0},{dx:6,dz:6,theta:Math.PI/2}];for(let n=-200;n<=200;n+=40)for(let s=-200;s<=200;s+=40)for(const{dx:a,dz:r,theta:l}of i){const c=n+a,d=s+r,u=new B(new Yr(2,24,l,Math.PI/2),e);u.rotation.x=-Math.PI/2,u.position.set(c,.021,d),u.receiveShadow=!0,this.scene.add(u);const h=new B(new Zi(1.8,2,24,1,l,Math.PI/2),t);h.rotation.x=-Math.PI/2,h.position.set(c,.08,d),h.receiveShadow=!0,this.scene.add(h)}}onUpdate(e){this.updateCallbacks.push(e)}createSkyDome(){const e=new ft(800,32,16);e.scale(-1,1,1);const t=new Dt({uniforms:{topColor:{value:new Se(4491468)},bottomColor:{value:new Se(12970229)},offset:{value:100},exponent:{value:.8}},vertexShader:`
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
      `,side:Bt,depthWrite:!1}),i=new B(e,t);this.scene.add(i)}createClouds(){const e=new $({color:16777215,transparent:!0,opacity:.85});for(let t=0;t<10;t++){const i=new Ge,n=3+Math.floor(Math.random()*4);for(let s=0;s<n;s++){const a=8+Math.random()*12,r=new B(new ft(a,7,5),e);r.position.set(s*15-n*7+(Math.random()-.5)*10,(Math.random()-.5)*8,(Math.random()-.5)*15),i.add(r)}i.position.set((Math.random()-.5)*600,80+Math.random()*60,(Math.random()-.5)*600),this.scene.add(i),this.clouds.push({mesh:i,speed:.3+Math.random()*.7})}}createPuddles(){const e=new $({color:8952234,transparent:!0,opacity:.35});for(let t=0;t<20;t++){const i=2+Math.random()*4,n=1+Math.random()*2,s=new B(new mt(i,n),e);s.rotation.x=-Math.PI/2,s.position.set((Math.random()-.5)*300,.015,(Math.random()-.5)*300),this.scene.add(s)}}addRooftopDetails(e,t,i,n,s,a){const r=this.seed(s,a,200);if(r>.3){const l=new Ge;this.addBox(l,8947840,1.5,.6,1,0,0,0),this.addBox(l,6710880,1.5,.1,.8,0,.35,.05),l.position.set(t/2-2,n+.3,i/2-2),e.add(l)}if(r>.7&&n>8){const l=new B(new qe(1,1,1.8,10),new $({color:9139029}));l.position.set(-t/2+2,n+.9,0),e.add(l);for(const[c,d]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]]){const u=new B(new qe(.06,.06,1.5,4),new $({color:5592400}));u.position.set(-t/2+2+c,n+.1,d),e.add(u)}}if(r>.5&&r<.8){const l=new B(new ft(.4,8,4,0,Math.PI*2,0,Math.PI/2),new $({color:13421772}));l.position.set(t/2-1,n+.2,-i/2+1),l.rotation.x=-Math.PI/4,e.add(l)}if(r<.4){const l=new B(new qe(.04,.04,3,4),new $({color:4473924}));l.position.set(0,n+1.5,0),e.add(l),this.addBox(e,4473924,2,.05,.05,0,n+2.5,0)}r>.4&&r<.6&&this.addBox(e,7829360,2,.4,.4,t/4,n+.2,-i/4)}addHydrant(e,t){const i=new Ge,n=new $({color:13378082}),s=new $({color:11145489}),a=new B(new qe(.25,.28,.6,8),n);a.position.set(0,.3,0),i.add(a);const r=new B(new qe(.18,.18,.12,8),s);r.position.set(0,.66,0),i.add(r);for(const l of[-1,1]){const c=new B(new qe(.06,.06,.2,6),n);c.rotation.z=Math.PI/2,c.position.set(l*.3,.3,0),i.add(c)}i.position.set(e,0,t),this.scene.add(i)}addBin(e,t){const i=new Ge,n=new $({color:4473924}),s=new $({color:5592405}),a=new B(new qe(.2,.22,.7,8),n);a.position.set(0,.35,0),i.add(a);const r=new B(new qe(.22,.22,.08,8),s);r.position.set(0,.74,0),i.add(r),i.position.set(e,0,t),this.scene.add(i)}addBollard(e,t){const i=new Ge,n=new $({color:10066329}),s=new $({color:7829367}),a=new B(new qe(.1,.1,.6,8),n);a.position.set(0,.3,0),i.add(a);const r=new B(new qe(.14,.14,.08,8),s);r.position.set(0,.04,0),i.add(r),i.position.set(e,0,t),this.scene.add(i)}addBench(e,t,i=0){const n=new Ge,s=new $({color:9134144}),a=new $({color:5592405}),r=new B(new Q(1.2,.1,.4),s);r.position.set(0,.45,0),n.add(r);for(const c of[-.5,.5]){const d=new B(new Q(.05,.4,.4),a);d.position.set(c,.2,0),n.add(d)}const l=new B(new Q(1.2,.3,.08),s);l.position.set(0,.75,-.16),n.add(l),n.rotation.y=i,n.position.set(e,0,t),this.scene.add(n)}addBusStop(e,t,i=0){const n=new Ge,s=new $({color:13421772}),a=new $({color:4482730,transparent:!0,opacity:.7}),r=new B(new qe(.05,.05,3.5,6),s);r.position.set(0,1.75,0),n.add(r);const l=new B(new Q(2,.05,.8),a);l.position.set(0,3.3,.4),n.add(l);const c=new B(new Q(.05,2.5,.8),a);c.position.set(0,2,0),n.add(c),n.rotation.y=i,n.position.set(e,0,t),this.scene.add(n)}addStreetLight(e,t,i=0,n=!1){const s=new Ge,a=new $({color:1118481}),r=new $({color:16771232,transparent:!0,opacity:.06}),l=new B(new qe(.08,.1,6,6),a);l.position.set(0,3,0),s.add(l);const c=new B(new Q(.08,.08,1.5),a);c.position.set(0,6,-.75),c.rotation.x=-.2,s.add(c);const d=new B(new Q(.4,.15,.3),a);d.position.set(0,5.9,-1.4),s.add(d);const u=new B(new $i(1.5,3,8,1,!0),r);if(u.rotation.x=Math.PI,u.position.set(0,4.4,-1.4),s.add(u),s.rotation.y=i,s.position.set(e,0,t),this.scene.add(s),n){const h=new Nd(16771232,.8,15);h.position.set(e+Math.sin(i+Math.PI)*1.4,5.9,t+Math.cos(i+Math.PI)*1.4),this.scene.add(h)}}addTrafficLight(e,t,i=0){const n=new Ge,s=new $({color:1118481}),a=new B(new qe(.07,.09,4.5,6),s);a.position.set(0,2.25,0),n.add(a);const r=new B(new Q(.5,1.4,.4),s);r.position.set(0,4.7,0),n.add(r);const l=[16720384,16750848,52292];for(let c=0;c<3;c++){const d=new B(new qe(.15,.15,.08,8),new $({color:l[c]}));d.rotation.x=Math.PI/2,d.position.set(0,5.25-c*.45,-.21),n.add(d)}n.rotation.y=i,n.position.set(e,0,t),this.scene.add(n)}createStreetLights(){let i=0;const n=20;for(let s=-160;s<=160;s+=40)for(let a=-160;a<=160;a+=20){const c=Math.sqrt(s*s+a*a)<80&&i<n,d=(a%40+40)%40;Math.min(d,40-d)>6&&(this.addStreetLight(a,s-5.2,0,c),this.addStreetLight(a,s+5.2,Math.PI,c),c&&(i+=2));const u=(a%40+40)%40;if(Math.min(u,40-u)>6&&(this.addStreetLight(s+5.2,a,Math.PI/2,c),this.addStreetLight(s-5.2,a,-Math.PI/2,c),c&&(i+=2)),i>=n)return}}createTrafficLights(){for(let n=-160;n<=160;n+=40)for(let s=-160;s<=160;s+=40)this.addTrafficLight(n-5.2,s-5.2,Math.PI/4),this.addTrafficLight(n+5.2,s-5.2,-Math.PI/4),this.addTrafficLight(n-5.2,s+5.2,3*Math.PI/4),this.addTrafficLight(n+5.2,s+5.2,-3*Math.PI/4)}createStreetFurniture(){for(let i=-160;i<=160;i+=40)for(let n=-160;n<=160;n+=20){const s=this.seed(i,n,300),a=this.seed(i,n,301);if(s>.4){const c=s>.7?1:-1,d=(this.seed(n,i,302)-.5)*4,u=(n%40+40)%40;Math.min(u,40-u)>8&&(a<.3?this.addHydrant(n+d,i+c*5.2):a<.5?this.addBin(n+d,i+c*5.2):a<.65?this.addBollard(n+d,i+c*5.2):a<.75&&this.addBench(n+d,i+c*5.2))}const r=this.seed(n,i,303),l=this.seed(n,i,304);if(r>.4){const c=r>.7?1:-1,d=(this.seed(i,n,305)-.5)*4,u=(n%40+40)%40;Math.min(u,40-u)>8&&(l<.3?this.addHydrant(i+c*5.2,n+d):l<.5?this.addBin(i+c*5.2,n+d):l<.65?this.addBollard(i+c*5.2,n+d):l<.75&&this.addBench(i+c*5.2,n+d,Math.PI/2))}}for(let i=-160;i<=160;i+=40)for(let n=-160;n<=160;n+=160){const s=(n%40+40)%40;Math.min(s,40-s)>8&&this.addBusStop(n,i+5.5,0);const a=(n%40+40)%40;Math.min(a,40-a)>8&&this.addBusStop(i+5.5,n,Math.PI/2)}this.createStreetLights(),this.createTrafficLights()}addGlassBox(e,t,i,n,s,a,r,l){const c=Math.random()>.6?new Se(2241348):new Se(1122867),d=new B(new Q(i,n,s),new $({color:t,emissive:c,emissiveIntensity:Math.random()*.4}));d.position.set(a,r,l),d.castShadow=!0,d.receiveShadow=!0,e.add(d)}buildToiletBlock(e,t){const i=new Ge;this.addBox(i,11577496,10,3.5,8,0,1.75,0),this.addBox(i,10064008,11,.3,9,0,3.65,0),this.addBox(i,2236960,1.6,2.4,.2,-2.2,1.2,-4.05),this.addBox(i,2236960,1.6,2.4,.2,2.2,1.2,-4.05),this.addBox(i,15263968,10.1,.4,8.1,0,1.8,0),this.addBox(i,3359829,8,.8,.15,0,3.1,-4.05),this.addBox(i,16777215,6,.2,.1,0,3.2,-4.03),this.addCyl(i,4473920,.15,.15,8,6,0,4,-5.5),this.addBox(i,2201331,4,1.5,.3,0,8.75,-5.5),this.addBox(i,16777215,3,.25,.1,0,9,-5.38),this.addBox(i,16777215,3,.25,.1,0,8.5,-5.38);const n=new $({color:6600182,emissive:new Se(1402304),emissiveIntensity:.4}),s=new B(new ft(.7,8,6),n);s.position.set(0,10.5,-5.5),i.add(s),i.position.set(e,0,t),this.scene.add(i)}start(){const e=t=>{const i=Math.min((t-this.lastTime)/1e3,.05);this.lastTime=t;for(const n of this.updateCallbacks)n(i);for(const n of this.clouds)n.mesh.position.x-=n.speed*i,n.mesh.position.x<-350&&(n.mesh.position.x=350);this.composer.render(),requestAnimationFrame(e)};requestAnimationFrame(e)}}const Hd=.9,Fi={Matt:{name:"Matt",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:6044190,hairStyle:"short"},Jose:{name:"Jose",skinColor:12884592,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:657930,hairStyle:"dreadlocks"},Jarrad:{name:"Jarrad",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236976,hairColor:1710618,hairStyle:"topknot",glassesColor:2236962,hasPhone:!0},Phil:{name:"Phil",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:3821696,hairColor:12632248,hairStyle:"silver",glassesColor:11053216},Tsuyoshi:{name:"Tsuyoshi",skinColor:12093528,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236960,hairColor:657930,hairStyle:"mohawk"},Fabio:{name:"Fabio",skinColor:12488288,shirtColor:1801924,shirtLogoColor:16777215,pantsColor:2631728,hairColor:1708040,hairStyle:"bun",glassesColor:2759176},Joe:{name:"Joe",skinColor:13934704,shirtColor:15777792,shirtLogoColor:1710618,pantsColor:2763320,hairColor:3811866,hairStyle:"short",helmetColor:16119280,hiVisBands:!0},Mikayla:{name:"Mikayla",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:1708064,hairColor:10035780,hairStyle:"bun"},Connie:{name:"Connie",skinColor:15255704,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:2763322,hairColor:16109664,hairStyle:"wildblonde"}};class ts{constructor(e){x(this,"group");x(this,"mixer");x(this,"walkAction");x(this,"idleAction");x(this,"currentAction");x(this,"logoMesh");this.group=new Ge,this._build(e),this.mixer=new Eg(this.group);const t=this._buildWalkClip(),i=this._buildIdleClip();this.walkAction=this.mixer.clipAction(t),this.idleAction=this.mixer.clipAction(i),this.idleAction.play(),this.currentAction=this.idleAction}_build(e){const t=new ai;t.name="Hip",t.position.set(0,1,0);const i=new ai;i.name="Spine",i.position.set(0,.55,0);const n=new ai;n.name="Head",n.position.set(0,.65,0);const s=new ai;s.name="LShoulder",s.position.set(-.4,.38,0);const a=new ai;a.name="LForeArm",a.position.set(0,-.36,0);const r=new ai;r.name="RShoulder",r.position.set(.4,.38,0);const l=new ai;l.name="RForeArm",l.position.set(0,-.36,0);const c=new ai;c.name="LHip",c.position.set(-.16,-.05,0);const d=new ai;d.name="LKnee",d.position.set(0,-.5,0);const u=new ai;u.name="RHip",u.position.set(.16,-.05,0);const h=new ai;h.name="RKnee",h.position.set(0,-.5,0),t.add(i),i.add(n),i.add(s),s.add(a),i.add(r),r.add(l),t.add(c),c.add(d),t.add(u),u.add(h),this.group.add(t);const f=M=>new $({color:M}),g=(M,y,R,E,A,I=0,T=0,_=0)=>{const P=new B(new Q(R,E,A),f(y));P.position.set(I,T,_),P.castShadow=!0,M.add(P)},v=(M,y,R,E,A=0,I=0,T=0)=>{const _=new B(new qe(R,R,E,8),f(y));_.position.set(A,I,T),_.castShadow=!0,M.add(_)},m=(M,y,R,E=0,A=0,I=0)=>{const T=new B(new ft(R,10,8),f(y));T.position.set(E,A,I),T.castShadow=!0,M.add(T)};g(i,e.shirtColor,.5,.56,.28,0,.02,0),e.hiVisBands&&(g(i,16777215,.52,.06,.3,0,.18,0),g(i,16777215,.52,.06,.3,0,-.1,0));const p=this._makeLogo(e),b=new B(new mt(.44,.5),new zt({map:p,transparent:!0,depthWrite:!1}));if(b.position.set(0,.02,.145),i.add(b),this.logoMesh=b,g(t,e.pantsColor,.44,.2,.26,0,0,0),v(s,e.shirtColor,.08,.34,0,-.17,0),v(r,e.shirtColor,.08,.34,0,-.17,0),e.hiVisBands&&(g(s,16777215,.18,.06,.18,0,-.1,0),g(r,16777215,.18,.06,.18,0,-.1,0)),v(a,e.skinColor,.07,.3,0,-.15,0),v(l,e.skinColor,.07,.3,0,-.15,0),g(a,e.skinColor,.13,.11,.09,0,-.32,0),g(l,e.skinColor,.13,.11,.09,0,-.32,0),e.hasPhone){const M=new $({color:1118484}),y=new B(new Q(.11,.19,.013),M);y.position.set(.01,-.38,.05),l.add(y);const R=new $({color:2767445,emissive:1714756}),E=new B(new mt(.085,.15),R);E.position.set(0,0,.008),y.add(E)}v(c,e.pantsColor,.11,.46,0,-.23,0),v(u,e.pantsColor,.11,.46,0,-.23,0),v(d,e.pantsColor,.09,.42,0,-.21,0),v(h,e.pantsColor,.09,.42,0,-.21,0),g(d,1710616,.19,.12,.24,0,-.46,.03),g(h,1710616,.19,.12,.24,0,-.46,.03),v(n,e.skinColor,.09,.16,0,-.08,0),m(n,e.skinColor,.21,0,.1,0),g(n,2236962,.055,.035,.02,-.07,.12,.2),g(n,2236962,.055,.035,.02,.07,.12,.2),this._buildHair(n,e,f),e.glassesColor!==void 0&&g(n,e.glassesColor,.24,.055,.015,0,.12,.21),e.helmetColor!==void 0&&(g(n,e.helmetColor,.5,.07,.5,0,.25,-.01),g(n,e.helmetColor,.38,.18,.38,0,.34,-.01))}_buildHair(e,t,i){const n=i(t.hairColor),s=(a,r,l,c)=>{const d=new B(a,n);d.position.set(r,l,c),e.add(d)};switch(t.hairStyle){case"short":case"silver":s(new ft(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),t.hairStyle==="silver"&&(s(new Q(.11,.18,.13),-.19,.06,0),s(new Q(.11,.18,.13),.19,.06,0));break;case"dreadlocks":s(new ft(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0);for(const[a,r]of[[-.12,0],[.12,0],[0,-.16],[-.08,-.1],[.08,-.1]])s(new qe(.035,.022,.38,6),a,-.07,r);break;case"mohawk":s(new Q(.09,.26,.4),0,.28,0);break;case"bun":s(new ft(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),s(new ft(.09,7,6),0,.05,-.19);break;case"topknot":{s(new ft(.215,8,5,0,Math.PI*2,0,Math.PI*.45),0,.08,0);const a=new B(new qe(.06,.08,.18,7),n);a.position.set(0,.3,0),e.add(a),s(new ft(.085,7,6),0,.41,0);const r=new $({color:1118481}),l=new B(new Xo(.075,.018,6,10),r);l.rotation.x=Math.PI/2,l.position.set(0,.29,0),e.add(l);break}case"wildblonde":{s(new ft(.225,8,5,0,Math.PI*2,0,Math.PI*.55),0,.1,0);const a=[[-.2,-.18,.04,.3,0],[.2,-.18,.04,-.3,0],[-.14,-.22,-.14,.2,.15],[.14,-.22,-.14,-.2,.15],[0,-.26,-.18,0,0],[-.1,-.16,.16,-.15,0],[.1,-.16,.16,.15,0]];for(const[r,l,c,d,u]of a){const h=new B(new qe(.045,.02,.5,5),n);h.position.set(r,l,c),h.rotation.z=d,h.rotation.x=u,e.add(h)}break}}}setLogoTexture(e){const t=this.logoMesh.material;t.map=e,t.needsUpdate=!0}_makeLogo(e){return Od(e.shirtColor)}_buildWalkClip(){const e=Math.PI/180,t=.8,i=[0,.2,.4,.6,.8],n=(s,a=0,r=0)=>Array.from(new ei().setFromEuler(new $t(s*e,a*e,r*e)).toArray());return new As("walk",t,[new xt("LHip.quaternion",i,[...n(-35),...n(0),...n(35),...n(0),...n(-35)]),new xt("RHip.quaternion",i,[...n(35),...n(0),...n(-35),...n(0),...n(35)]),new xt("LKnee.quaternion",i,[...n(-5),...n(-18),...n(-28),...n(-12),...n(-5)]),new xt("RKnee.quaternion",i,[...n(-28),...n(-12),...n(-5),...n(-18),...n(-28)]),new xt("LShoulder.quaternion",i,[...n(28,0,8),...n(0,0,8),...n(-28,0,8),...n(0,0,8),...n(28,0,8)]),new xt("RShoulder.quaternion",i,[...n(-28,0,-8),...n(0,0,-8),...n(28,0,-8),...n(0,0,-8),...n(-28,0,-8)]),new xt("Hip.quaternion",i,[...n(0,0,4),...n(0,0,0),...n(0,0,-4),...n(0,0,0),...n(0,0,4)]),new yn("Hip.position",i,[0,1.02,0,0,1,0,0,1.02,0,0,1,0,0,1.02,0])])}_buildIdleClip(){const e=Math.PI/180,t=2.4,i=[0,.6,1.2,1.8,2.4],n=(s,a=0,r=0)=>Array.from(new ei().setFromEuler(new $t(s*e,a*e,r*e)).toArray());return new As("idle",t,[new xt("Spine.quaternion",i,[...n(0,0,1),...n(0,0,0),...n(0,0,-1),...n(0,0,0),...n(0,0,1)]),new yn("Hip.position",i,[0,1,0,0,1.01,0,0,1,0,0,.99,0,0,1,0]),new xt("LShoulder.quaternion",[0,2.4],[...n(0,0,8),...n(0,0,8)]),new xt("RShoulder.quaternion",[0,2.4],[...n(0,0,-8),...n(0,0,-8)])])}buildJumpRopeClip(){const e=Math.PI/180,t=Hd,i=[0,.225,.45,.675,.9],n=(s,a=0,r=0)=>Array.from(new ei().setFromEuler(new $t(s*e,a*e,r*e)).toArray());return new As("jumprope",t,[new yn("Hip.position",i,[0,1,0,0,1.28,0,0,1,0,0,1.28,0,0,1,0]),new xt("LShoulder.quaternion",[0,.5],[...n(0,0,52),...n(0,0,52)]),new xt("RShoulder.quaternion",[0,.5],[...n(0,0,-52),...n(0,0,-52)]),new xt("LForeArm.quaternion",[0,.5],[...n(-20),...n(-20)]),new xt("RForeArm.quaternion",[0,.5],[...n(-20),...n(-20)]),new xt("LKnee.quaternion",i,[...n(-22),...n(-5),...n(-22),...n(-5),...n(-22)]),new xt("RKnee.quaternion",i,[...n(-22),...n(-5),...n(-22),...n(-5),...n(-22)]),new xt("Spine.quaternion",i,[...n(8),...n(2),...n(8),...n(2),...n(8)])])}setWalking(e){const t=e?this.walkAction:this.idleAction;t!==this.currentAction&&(t.reset().play(),this.currentAction.crossFadeTo(t,.2,!1),this.currentAction=t)}update(e){this.mixer.update(e)}}const Hg={Jose:{x:-80,z:-40},Jarrad:{x:40,z:-80},Matt:{x:80,z:40},Phil:{x:-40,z:80},Tsuyoshi:{x:120,z:-40},Fabio:{x:-120,z:40},Joe:{x:0,z:-120}},Vg={Matt:["Troweled Earth is the best product on the market. Full stop. Don't argue.","Jose has a whole music room and a cigar collection but can't reply to a text message. That's the guy.","I've been up since 4am and done 80 square metres. How's your morning?","Jarrad's got opinions on how everyone else lives their life. Zero opinions on his own. Interesting.","Antique Stucco, Hemp Render, Tadelakt — I'll do all three before lunch.","Jose called himself Wall Jesus in front of a client. An actual client. I was standing right there.","Jarrad once sent me a 400-word message about something I said. I read the first line. Seemed about right.","Right. Tools out. Let's get this done."],Jose:["I didn't apply plaster. I gave the wall a soul. Big difference.","Matt is a great man. Big heart. Absolutely no volume control. You can hear him from the next suburb.","I was in my music room last night finishing a track. Then I invented a new finish. Big night.","My cigar costs more than your primer. It is worth it.","Jarrad sends meeting agendas. For conversations. Between two people. In a van.","Wall Jesus doesn't do touch-ups. Wall Jesus does originals.","Matt apologises for nothing. I respect it. Also it is sometimes a problem.","Other plasterers apply product. I apply vision. Light a cigar and watch."],Jarrad:["Been waiting fifteen minutes. Did you read the TDS? Because I did. Twice.","Hang on — just finishing something.","Jose has a whole spiritual identity built around being mysterious. He's from Footscray. I looked it up.","I'm not micro-managing. I'm preventing the disaster you are about to cause.","Matt once introduced himself to a client by saying 'I don't do small talk'. To their face. At the door.","Have you seen my sister? She's supposed to be here. She's doing jump rope.","I would do it myself but then nothing else would get done. Look, I've already typed up a plan.","Mikayla borrowed my trowel again. I have a spare. I'm not lending that one either.","This is interesting. Have you heard of this Epstein list thing?","Who designed this waypoint system? Actually — don't answer that. I'll figure it out."],Phil:["I've been in this game longer than some of these buildings.","Back in my day we didn't have sealers. We just hoped.","Forty years in plaster. My knees disagree with the timeline.","That's a nice van. My first van had a hole in the floor.","The youngsters think Marbellino is new. I did it before it had a name.","Seven year warranty. I've outlasted three of those already.","If the surface isn't right, no product will fix it. That's wisdom.","I'm too old for emergencies. Call Darren."],Tsuyoshi:["My trowel... she is like samurai sword. Must be respected.","In Japan, we say... actually this is different in Australia. But same feeling.","I study engineering. Also I study this wall. Both are... very complex.","The angle of application is most important. Like blade angle. Very critical.","I think about the wall much. The wall also thinks, I believe.","This surface... it is speaking to me. I will listen before I apply.","My sensei say: good craftsman blame tool. But I never blame my trowel. She is perfect.","One day I will design the building. And also I will plaster it. Both very satisfying."],Fabio:["Ehhhh — in Italy, we do not rush the plaster. She knows when she is ready.","I am Fabio. You have heard of me, yes? Ehhhh — of course you have.","Last night I find a pizza place — thin base, wood fire, proper San Marzano. Ehhhh. I almost cry.","I have plastered villas in Tuscany. This job is also... acceptable. Ehhhh.","The colour must be chosen with the soul, not the brain. Ehhhh — the brain is for pizza toppings.","I put my heart into every wall. Same as I put my heart into a good margherita. Ehhhh.","Madonna mia, this surface has potential. Not as much potential as a good pizza, but still.","Other men apply plaster. Fabio makes love to the wall. Artistically speaking. Ehhhh.","You want to know the secret of perfect render? Patience. Same as perfect pizza dough. Ehhhh — same thing.","I carry my trowel like a man carries his last slice. With respect. With both hands."],Joe:["Don't judge me by the helmet. I contain multitudes.","Good honest work. That's all any of us can do.","I don't talk politics on site. But I do have a bumper sticker.","Hard work, good product, fair pay. That's the whole philosophy.","Free Palestine. That's all I'll say. Back to work.","I've been boycotting certain brands for three years. You'd be surprised.","The helmet stays on. Most of the opinions stay in.","Solid crew. Good product. Just don't ask me about the news."]},Wg=15,Xg=12e3;class Yg{constructor(e){x(this,"scene");x(this,"crewMap",new Map);x(this,"lastDialogue",new Map);x(this,"dialogueIndex",new Map);this.scene=e}spawnCrewAtCityPositions(){for(const[e,t]of Object.entries(Hg)){const i=Fi[e];if(!i)continue;const n=new ts(i);n.group.scale.set(2,2,2);const s=new Ge;s.add(n.group);const a=new B(new Zi(1.2,1.6,32),new zt({color:16763904,side:Ut}));a.rotation.x=-Math.PI/2,a.position.y=.05,s.add(a);const r=document.createElement("canvas");r.width=256,r.height=64;const l=r.getContext("2d");l.fillStyle="rgba(0,0,0,0.75)",l.roundRect?l.roundRect(2,2,252,60,8):l.rect(2,2,252,60),l.fill(),l.fillStyle="#fff",l.font="bold 30px Arial",l.textAlign="center",l.textBaseline="middle",l.fillText(e.toUpperCase(),128,32);const c=new B(new mt(2.2,.55),new zt({map:new zs(r),transparent:!0,depthWrite:!1}));c.position.set(0,8.5,0),c.renderOrder=1,s.add(c),s.position.set(t.x,0,t.z),this.scene.add(s),this.crewMap.set(e,{character:n,wrapper:s,pos:t}),this.lastDialogue.set(e,0),this.dialogueIndex.set(e,Math.floor(Math.random()*8))}}updateAll(e){for(const{character:t}of this.crewMap.values())t.update(e)}checkProximityDialogue(e,t){const i=Date.now();for(const[n,{wrapper:s,pos:a}]of this.crewMap.entries()){if(!s.visible)continue;const r=e-a.x,l=t-a.z;if(Math.sqrt(r*r+l*l)>Wg)continue;const c=this.lastDialogue.get(n)??0;if(i-c<Xg)continue;const d=Vg[n];if(!d)continue;const u=this.dialogueIndex.get(n)??0,h=d[u%d.length];return this.dialogueIndex.set(n,u+1),this.lastDialogue.set(n,i),{name:n,line:h,pos:a}}return null}hideCrew(e){const t=this.crewMap.get(e);t&&(t.wrapper.visible=!1)}showAllCrew(){for(const{wrapper:e}of this.crewMap.values())e.visible=!0}showCrew(e){const t=this.crewMap.get(e);t&&(t.wrapper.visible=!0)}getCrewPosition(e){var t;return((t=this.crewMap.get(e))==null?void 0:t.pos)??{x:0,z:0}}dispose(){for(const{wrapper:e}of this.crewMap.values())this.scene.remove(e);this.crewMap.clear()}}class jg{constructor(e){x(this,"mesh");x(this,"velocity",new D);x(this,"heading",0);x(this,"bodyGroup");x(this,"suspensionY",0);x(this,"suspensionVel",0);this.mesh=new Ge,this.bodyGroup=new Ge,this.mesh.add(this.bodyGroup);const t=new $({color:1118481}),i=new B(new Q(2.4,1.6,3.2),t);i.position.set(0,.8,.8),i.castShadow=!0,i.receiveShadow=!0,this.bodyGroup.add(i);const n=new $({color:1579032}),s=new B(new Q(2.4,1.4,1.6),n);s.position.set(0,.7,-1.6),s.castShadow=!0,s.receiveShadow=!0,this.bodyGroup.add(s);const a=new $({color:2241348}),r=new B(new Q(2,1,.1),a);r.rotation.x=-.18,r.position.set(0,1.15,-2.36),r.castShadow=!0,r.receiveShadow=!0,this.bodyGroup.add(r);const l=new $({color:1381653}),c=new B(new Q(2.3,.15,4.6),l);c.position.set(0,1.675,0),c.castShadow=!0,c.receiveShadow=!0,this.bodyGroup.add(c);const d=new $({color:12674667}),u=new B(new Q(.05,.35,3),d);u.position.set(-1.23,.85,.5),u.castShadow=!0,u.receiveShadow=!0,this.bodyGroup.add(u);const h=new B(new Q(.05,.35,3),d);h.position.set(1.23,.85,.5),h.castShadow=!0,h.receiveShadow=!0,this.bodyGroup.add(h);const f=new $({color:3359829}),g=new B(new Q(.05,.4,.5),f);g.position.set(-1.22,1.1,-1.7),g.castShadow=!0,g.receiveShadow=!0,this.bodyGroup.add(g);const v=new B(new Q(.05,.4,.5),f);v.position.set(1.22,1.1,-1.7),v.castShadow=!0,v.receiveShadow=!0,this.bodyGroup.add(v);const m=new $({color:3355443});for(const ye of[-.3,.3]){const le=new B(new Q(.05,1.4,.1),m);le.position.set(ye,.8,2.46),le.castShadow=!0,le.receiveShadow=!0,this.bodyGroup.add(le)}const p=new $({color:526344}),b=new B(new Q(.04,1.6,.05),p);b.position.set(-1.22,.8,-.8),this.bodyGroup.add(b);const M=new B(new Q(.04,1.6,.05),p);M.position.set(1.22,.8,-.8),this.bodyGroup.add(M);const y=new B(new Q(2.4,.04,.05),p);y.position.set(0,1.58,-.8),this.bodyGroup.add(y);const R=new $({color:1118481}),E=new $({color:3359829});for(const ye of[-1,1]){const le=ye*1.3,Te=new B(new Q(.18,.12,.22),R);Te.position.set(le,1.1,-1.7),this.bodyGroup.add(Te);const Ze=new B(new Q(.08,.1,.18),E);Ze.position.set(le+ye*.05,1.1,-1.7),this.bodyGroup.add(Ze)}const A=new $({color:3355443});for(const ye of[-.15,-.85]){const le=new B(new Q(2.1,.07,.07),A);le.position.set(0,1.78,ye),this.bodyGroup.add(le)}for(const ye of[-.95,.95]){const le=new B(new Q(.05,.05,.7),A);le.position.set(ye,1.78,-.5),this.bodyGroup.add(le)}const I=zd(512),T=new $({map:I,transparent:!0,depthWrite:!1}),_=new B(new mt(2,3.8),T);_.rotation.x=-Math.PI/2,_.position.set(0,1.8,.9),this.bodyGroup.add(_);const P=new $({color:8947848});for(const ye of[-.6,.6]){const le=new B(new Q(.06,.06,.14),P);le.position.set(ye,.85,2.52),this.bodyGroup.add(le)}const G=new B(new Q(2.4,.04,.06),p);G.position.set(0,1.2,2.47),this.bodyGroup.add(G);const U=new $({color:16733440}),O=new $({color:1118481}),W=new B(new Q(.05,.22,.82),U);W.position.set(-1.255,.86,.36),this.bodyGroup.add(W);const j=new B(new Q(.06,.05,.16),O);j.position.set(-1.262,.96,.12),this.bodyGroup.add(j);const K=new B(new Q(.06,.15,.05),O);K.position.set(-1.262,.86,.12),this.bodyGroup.add(K);const X=new B(new Q(.06,.18,.05),O);X.position.set(-1.262,.86,.38),this.bodyGroup.add(X);const ae=new B(new Q(.06,.04,.13),O);ae.position.set(-1.262,.95,.445),this.bodyGroup.add(ae);const he=new B(new Q(.06,.04,.1),O);he.position.set(-1.262,.86,.43),this.bodyGroup.add(he);const xe=new B(new Q(.06,.04,.13),O);xe.position.set(-1.262,.77,.445),this.bodyGroup.add(xe);const Re=new B(new Q(.06,.18,.05),O);Re.position.set(-1.262,.86,.61),this.bodyGroup.add(Re);const Ue=new B(new Q(.06,.18,.05),O);Ue.position.set(-1.262,.86,.73),this.bodyGroup.add(Ue);const Y=new B(new Q(.06,.08,.13),O);Y.position.set(-1.262,.92,.67),this.bodyGroup.add(Y);const ne=new B(new Q(.05,.22,.82),U);ne.position.set(1.255,.86,.36),this.bodyGroup.add(ne);const te=new qe(.38,.38,.28,10),se=new $({color:1118481}),pe=new $({color:8947848}),De=[[-1.25,.38,-1.2,-1],[1.25,.38,-1.2,1],[-1.25,.38,1.3,-1],[1.25,.38,1.3,1]];for(const[ye,le,Te,Ze]of De){const Pe=new B(te,se);Pe.rotation.z=Math.PI/2,Pe.position.set(ye,le,Te),Pe.castShadow=!0,Pe.receiveShadow=!0,this.mesh.add(Pe);const C=new qe(.2,.2,.06,10),w=new B(C,pe);w.rotation.z=Math.PI/2,w.position.set(ye+Ze*.15,le,Te),w.castShadow=!0,w.receiveShadow=!0,this.mesh.add(w);const z=new $({color:3355443}),Z=new B(new qe(.36,.38,.06,10),z);Z.rotation.z=Math.PI/2,Z.position.set(ye+Ze*.2,le,Te),this.mesh.add(Z);const ie=new $({color:1118481}),J=new B(new Q(.14,.1,.82),ie);J.position.set(ye+Ze*.07,le+.3,Te),this.bodyGroup.add(J)}const Fe=new $({color:16777181,emissive:16777181,emissiveIntensity:.8});for(const ye of[-.8,.8]){const le=new B(new Q(.35,.2,.08),Fe);le.position.set(ye,.75,-2.41),le.castShadow=!0,le.receiveShadow=!0,this.bodyGroup.add(le)}const de=new zt({color:16777164,transparent:!0,opacity:.08,side:Bt}),Me=new $i(1.5,8,8,1,!0);for(const ye of[-.6,.6]){const le=new B(Me,de);le.rotation.x=Math.PI/2,le.position.set(ye,.7,-3),this.bodyGroup.add(le)}const Xe=new $({color:16720384,emissive:16720384,emissiveIntensity:.8});for(const ye of[-.8,.8]){const le=new B(new Q(.3,.18,.06),Xe);le.position.set(ye,.75,2.47),le.castShadow=!0,le.receiveShadow=!0,this.bodyGroup.add(le)}const L=new $({color:3355443}),it=new B(new Q(2,.08,.8),L);it.position.set(0,1.77,-.5),it.castShadow=!0,it.receiveShadow=!0,this.bodyGroup.add(it),this.mesh.position.set(0,0,0),e.add(this.mesh)}triggerBump(e){this.suspensionVel=-e*6}updateSuspension(e){const t=-80*this.suspensionY-10*this.suspensionVel;this.suspensionVel+=t*e,this.suspensionY+=this.suspensionVel*e,this.suspensionY=Math.max(-.35,Math.min(.35,this.suspensionY)),this.bodyGroup.position.y=this.suspensionY,this.bodyGroup.rotation.z=-this.suspensionY*.08}get suspensionMagnitude(){return Math.abs(this.suspensionY)+Math.abs(this.suspensionVel)*.04}}const mi={maxSpeed:80,acceleration:55,reverseForce:45,friction:.985,steerRate:2.8,minSpeedToSteer:.5,gripAtLowSpeed:7,gripAtHighSpeed:1.2},yc=40,qg=4,$g=30,Jg=.8;function Kg(o){for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;return o}function Zg(o){return Math.round(o/yc)*yc}function xc(o,e){let t=0;const i=Zg((o+e)*.5);for(const n of[-1,1]){const s=i+n*qg;(o-s)*(e-s)<0&&t++}return t}class Qg{constructor(e,t,i,n,s){x(this,"van");x(this,"input");x(this,"_speed",0);x(this,"velocityAngle",0);x(this,"prevPos",new D);x(this,"onBump");x(this,"onBuildingHit");x(this,"collisionWorld");x(this,"COLL_GRID",40);x(this,"COLL_ROAD_HALF",6.5);this.van=e,this.input=t,this.onBump=i,this.collisionWorld=n,this.onBuildingHit=s,this.velocityAngle=this.van.heading,this.prevPos.copy(this.van.mesh.position)}get speed(){return this._speed}update(e){var l;this.prevPos.copy(this.van.mesh.position);const t=Math.abs(this._speed);if(this.input.forward&&(this._speed+=mi.acceleration*e),this.input.brake&&(this._speed-=mi.reverseForce*e),this._speed*=Math.pow(mi.friction,e*60),this._speed=Math.max(-80*.5,Math.min(mi.maxSpeed,this._speed)),t>mi.minSpeedToSteer){const c=this.input.left?-1:this.input.right?1:Math.abs(this.input.steerAxis)>.1?this.input.steerAxis:0,d=Math.min(1,t/15);this.van.heading+=c*mi.steerRate*d*Math.sign(this._speed)*e}const i=Math.min(t/mi.maxSpeed,1),n=mi.gripAtLowSpeed+(mi.gripAtHighSpeed-mi.gripAtLowSpeed)*i,s=Kg(this.van.heading-this.velocityAngle);this.velocityAngle+=s*n*e;const a=new D(Math.sin(this.velocityAngle),0,-Math.cos(this.velocityAngle));this.van.velocity.copy(a).multiplyScalar(this._speed),this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(e)),this.van.mesh.rotation.y=-this.van.heading;const r=245;if(this.van.mesh.position.x=Math.max(-r,Math.min(r,this.van.mesh.position.x)),this.van.mesh.position.z=Math.max(-r,Math.min(r,this.van.mesh.position.z)),this.collisionWorld){const c=this.collisionWorld.resolveCircle(this.van.mesh.position.x,this.van.mesh.position.z,1.8);(c.x!==this.van.mesh.position.x||c.z!==this.van.mesh.position.z)&&(this._speed*=.65,(l=this.onBuildingHit)==null||l.call(this),this.van.mesh.position.x=c.x,this.van.mesh.position.z=c.z)}this._checkCurbCrossings()}distToNearestRoad(e){const t=(e%this.COLL_GRID+this.COLL_GRID)%this.COLL_GRID;return Math.min(t,this.COLL_GRID-t)}isOnRoad(e,t){const i=this.distToNearestRoad(e),n=this.distToNearestRoad(t);return i<this.COLL_ROAD_HALF||n<this.COLL_ROAD_HALF}resolveCollision(e,t,i,n){return this.isOnRoad(i,n)?{x:i,z:n}:this.isOnRoad(e,n)?{x:e,z:n}:this.isOnRoad(i,t)?{x:i,z:t}:{x:e,z:t}}applyImpulse(e,t){this._speed*=.5,this.van.mesh.position.x+=e*.1,this.van.mesh.position.z+=t*.1}_checkCurbCrossings(){const e=this.van.mesh.position,t=this.prevPos,i=xc(t.x,e.x),n=xc(t.z,e.z);if(i+n===0)return;const r=Math.abs(this._speed)/$g,l=Math.max(Jg,Math.min(1,r));this.van.triggerBump(l),this._speed*=.85,this.onBump&&this.onBump(l)}}const Ro=(o,e)=>{const t=e.x-o.x,i=e.y-o.y;return Math.sqrt(t*t+i*i)},e1=(o,e)=>{const t=e.x-o.x,i=e.y-o.y;return i1(Math.atan2(i,t))},t1=(o,e,t)=>{const i={x:0,y:0};return t=Sr(t),i.x=o.x-e*Math.cos(t),i.y=o.y-e*Math.sin(t),i},Sr=o=>o*(Math.PI/180),i1=o=>o*(180/Math.PI),n1=o=>isNaN(o.buttons)?o.pressure!==0:o.buttons!==0,Aa=new Map,_c=o=>{Aa.has(o)&&clearTimeout(Aa.get(o)),Aa.set(o,setTimeout(o,100))},Uo=(o,e,t)=>{const i=e.split(/[ ,]+/g);let n;for(let s=0;s<i.length;s+=1)n=i[s],o.addEventListener?o.addEventListener(n,t,!1):o.attachEvent&&o.attachEvent(n,t)},bc=(o,e,t)=>{const i=e.split(/[ ,]+/g);let n;for(let s=0;s<i.length;s+=1)n=i[s],o.removeEventListener?o.removeEventListener(n,t):o.detachEvent&&o.detachEvent(n,t)},Vd=o=>(o.preventDefault(),o.type.match(/^touch/)?o.changedTouches:o),wc=()=>{const o=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:o,y:e}},Mc=(o,e)=>{e.top||e.right||e.bottom||e.left?(o.style.top=e.top,o.style.right=e.right,o.style.bottom=e.bottom,o.style.left=e.left):(o.style.left=e.x+"px",o.style.top=e.y+"px")},Qr=(o,e,t)=>{const i=Wd(o);for(let n in i)if(i.hasOwnProperty(n))if(typeof e=="string")i[n]=e+" "+t;else{let s="";for(let a=0,r=e.length;a<r;a+=1)s+=e[a]+" "+t+", ";i[n]=s.slice(0,-2)}return i},s1=(o,e)=>{const t=Wd(o);for(let i in t)t.hasOwnProperty(i)&&(t[i]=e);return t},Wd=o=>{const e={};return e[o]="",["webkit","Moz","o"].forEach(function(i){e[i+o.charAt(0).toUpperCase()+o.slice(1)]=""}),e},Ra=(o,e)=>{for(let t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o},o1=(o,e)=>{const t={};for(let i in o)o.hasOwnProperty(i)&&e.hasOwnProperty(i)?t[i]=e[i]:o.hasOwnProperty(i)&&(t[i]=o[i]);return t},Er=(o,e)=>{if(o.length)for(let t=0,i=o.length;t<i;t+=1)e(o[t]);else e(o)},a1=(o,e,t)=>({x:Math.min(Math.max(o.x,e.x-t),e.x+t),y:Math.min(Math.max(o.y,e.y-t),e.y+t)});var r1="ontouchstart"in window,l1=!!window.PointerEvent,c1=!!window.MSPointerEvent,_s={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},Vn,ks={};l1?Vn=_s.pointer:c1?Vn=_s.MSPointer:r1?(Vn=_s.touch,ks=_s.mouse):Vn=_s.mouse;function Ni(){}Ni.prototype.on=function(o,e){var t=this,i=o.split(/[ ,]+/g),n;t._handlers_=t._handlers_||{};for(var s=0;s<i.length;s+=1)n=i[s],t._handlers_[n]=t._handlers_[n]||[],t._handlers_[n].push(e);return t};Ni.prototype.off=function(o,e){var t=this;return t._handlers_=t._handlers_||{},o===void 0?t._handlers_={}:e===void 0?t._handlers_[o]=null:t._handlers_[o]&&t._handlers_[o].indexOf(e)>=0&&t._handlers_[o].splice(t._handlers_[o].indexOf(e),1),t};Ni.prototype.trigger=function(o,e){var t=this,i=o.split(/[ ,]+/g),n;t._handlers_=t._handlers_||{};for(var s=0;s<i.length;s+=1)n=i[s],t._handlers_[n]&&t._handlers_[n].length&&t._handlers_[n].forEach(function(a){a.call(t,{type:n,target:t},e)})};Ni.prototype.config=function(o){var e=this;e.options=e.defaults||{},o&&(e.options=o1(e.options,o))};Ni.prototype.bindEvt=function(o,e){var t=this;return t._domHandlers_=t._domHandlers_||{},t._domHandlers_[e]=function(){typeof t["on"+e]=="function"?t["on"+e].apply(t,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},Uo(o,Vn[e],t._domHandlers_[e]),ks[e]&&Uo(o,ks[e],t._domHandlers_[e]),t};Ni.prototype.unbindEvt=function(o,e){var t=this;return t._domHandlers_=t._domHandlers_||{},bc(o,Vn[e],t._domHandlers_[e]),ks[e]&&bc(o,ks[e],t._domHandlers_[e]),delete t._domHandlers_[e],this};function Et(o,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=o,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=Et.id,Et.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}Et.prototype=new Ni;Et.constructor=Et;Et.id=0;Et.prototype.buildEl=function(o){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};Et.prototype.stylize=function(){if(this.options.dataOnly)return this;var o=this.options.fadeTime+"ms",e=s1("borderRadius","50%"),t=Qr("transition","opacity",o),i={};return i.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},i.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},i.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},Ra(i.el,t),this.options.shape==="circle"&&Ra(i.back,e),Ra(i.front,e),this.applyStyles(i),this};Et.prototype.applyStyles=function(o){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var t in o[e])this.ui[e].style[t]=o[e][t];return this};Et.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};Et.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};Et.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};Et.prototype.show=function(o){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof o=="function"&&o.call(this)},e.options.fadeTime)),e};Et.prototype.hide=function(o){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var t=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=t,typeof o=="function"&&o.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){const t=e.options.restJoystick,i={};i.x=t===!0||t.x!==!1?0:e.instance.frontPosition.x,i.y=t===!0||t.y!==!1?0:e.instance.frontPosition.y,e.setPosition(o,i)}return e};Et.prototype.setPosition=function(o,e){var t=this;t.frontPosition={x:e.x,y:e.y};var i=t.options.fadeTime+"ms",n={};n.front=Qr("transition",["transform"],i);var s={front:{}};s.front={transform:"translate("+t.frontPosition.x+"px,"+t.frontPosition.y+"px)"},t.applyStyles(n),t.applyStyles(s),t.restTimeout=setTimeout(function(){typeof o=="function"&&o.call(t),t.restCallback()},t.options.fadeTime)};Et.prototype.restCallback=function(){var o=this,e={};e.front=Qr("transition","none",""),o.applyStyles(e),o.trigger("rested",o.instance)};Et.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};Et.prototype.computeDirection=function(o){var e=o.angle.radian,t=Math.PI/4,i=Math.PI/2,n,s,a;if(e>t&&e<t*3&&!o.lockX?n="up":e>-t&&e<=t&&!o.lockY?n="left":e>-t*3&&e<=-t&&!o.lockX?n="down":o.lockY||(n="right"),o.lockY||(e>-i&&e<i?s="left":s="right"),o.lockX||(e>0?a="up":a="down"),o.force>this.options.threshold){var r={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(r[l]=this.direction[l]);var c={};this.direction={x:s,y:a,angle:n},o.direction=this.direction;for(l in r)r[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return o;(!c.x||!c.y)&&this.trigger("plain",o),c.x||this.trigger("plain:"+s,o),c.y||this.trigger("plain:"+a,o),c.angle||this.trigger("dir dir:"+n,o)}else this.resetDirection();return o};function _t(o,e){var t=this;t.nipples=[],t.idles=[],t.actives=[],t.ids=[],t.pressureIntervals={},t.manager=o,t.id=_t.id,_t.id+=1,t.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},t.config(e),(t.options.mode==="static"||t.options.mode==="semi")&&(t.options.multitouch=!1),t.options.multitouch||(t.options.maxNumberOfNipples=1);const i=getComputedStyle(t.options.zone.parentElement);return i&&i.display==="flex"&&(t.parentIsFlex=!0),t.updateBox(),t.prepareNipples(),t.bindings(),t.begin(),t.nipples}_t.prototype=new Ni;_t.constructor=_t;_t.id=0;_t.prototype.prepareNipples=function(){var o=this,e=o.nipples;e.on=o.on.bind(o),e.off=o.off.bind(o),e.options=o.options,e.destroy=o.destroy.bind(o),e.ids=o.ids,e.id=o.id,e.processOnMove=o.processOnMove.bind(o),e.processOnEnd=o.processOnEnd.bind(o),e.get=function(t){if(t===void 0)return e[0];for(var i=0,n=e.length;i<n;i+=1)if(e[i].identifier===t)return e[i];return!1}};_t.prototype.bindings=function(){var o=this;o.bindEvt(o.options.zone,"start"),o.options.zone.style.touchAction="none",o.options.zone.style.msTouchAction="none"};_t.prototype.begin=function(){var o=this,e=o.options;if(e.mode==="static"){var t=o.createNipple(e.position,o.manager.getIdentifier());t.add(),o.idles.push(t)}};_t.prototype.createNipple=function(o,e){var t=this,i=t.manager.scroll,n={},s=t.options,a={x:t.parentIsFlex?i.x:i.x+t.box.left,y:t.parentIsFlex?i.y:i.y+t.box.top};if(o.x&&o.y)n={x:o.x-a.x,y:o.y-a.y};else if(o.top||o.right||o.bottom||o.left){var r=document.createElement("DIV");r.style.display="hidden",r.style.top=o.top,r.style.right=o.right,r.style.bottom=o.bottom,r.style.left=o.left,r.style.position="absolute",s.zone.appendChild(r);var l=r.getBoundingClientRect();s.zone.removeChild(r),n=o,o={x:l.left+i.x,y:l.top+i.y}}var c=new Et(t,{color:s.color,size:s.size,threshold:s.threshold,fadeTime:s.fadeTime,dataOnly:s.dataOnly,restJoystick:s.restJoystick,restOpacity:s.restOpacity,mode:s.mode,identifier:e,position:o,zone:s.zone,frontPosition:{x:0,y:0},shape:s.shape});return s.dataOnly||(Mc(c.ui.el,n),Mc(c.ui.front,c.frontPosition)),t.nipples.push(c),t.trigger("added "+c.identifier+":added",c),t.manager.trigger("added "+c.identifier+":added",c),t.bindNipple(c),c};_t.prototype.updateBox=function(){var o=this;o.box=o.options.zone.getBoundingClientRect()};_t.prototype.bindNipple=function(o){var e=this,t,i=function(n,s){t=n.type+" "+s.id+":"+n.type,e.trigger(t,s)};o.on("destroyed",e.onDestroyed.bind(e)),o.on("shown hidden rested dir plain",i),o.on("dir:up dir:right dir:down dir:left",i),o.on("plain:up plain:right plain:down plain:left",i)};_t.prototype.pressureFn=function(o,e,t){var i=this,n=0;clearInterval(i.pressureIntervals[t]),i.pressureIntervals[t]=setInterval((function(){var s=o.force||o.pressure||o.webkitForce||0;s!==n&&(e.trigger("pressure",s),i.trigger("pressure "+e.identifier+":pressure",s),n=s)}).bind(i),100)};_t.prototype.onstart=function(o){var e=this,t=e.options,i=o;o=Vd(o),e.updateBox();var n=function(s){e.actives.length<t.maxNumberOfNipples?e.processOnStart(s):i.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(a){if(Object.values(i.touches).findIndex(function(l){return l.identifier===a})<0){var r=[o[0]];r.identifier=a,e.processOnEnd(r)}}),e.actives.length<t.maxNumberOfNipples&&e.processOnStart(s))};return Er(o,n),e.manager.bindDocument(),!1};_t.prototype.processOnStart=function(o){var e=this,t=e.options,i,n=e.manager.getIdentifier(o),s=o.force||o.pressure||o.webkitForce||0,a={x:o.pageX,y:o.pageY},r=e.getOrCreate(n,a);r.identifier!==n&&e.manager.removeIdentifier(r.identifier),r.identifier=n;var l=function(d){d.trigger("start",d),e.trigger("start "+d.id+":start",d),d.show(),s>0&&e.pressureFn(o,d,d.identifier),e.processOnMove(o)};if((i=e.idles.indexOf(r))>=0&&e.idles.splice(i,1),e.actives.push(r),e.ids.push(r.identifier),t.mode!=="semi")l(r);else{var c=Ro(a,r.position);if(c<=t.catchDistance)l(r);else{r.destroy(),e.processOnStart(o);return}}return r};_t.prototype.getOrCreate=function(o,e){var t=this,i=t.options,n;return/(semi|static)/.test(i.mode)?(n=t.idles[0],n?(t.idles.splice(0,1),n):i.mode==="semi"?t.createNipple(e,o):(console.warn("Coudln't find the needed nipple."),!1)):(n=t.createNipple(e,o),n)};_t.prototype.processOnMove=function(o){var e=this,t=e.options,i=e.manager.getIdentifier(o),n=e.nipples.get(i),s=e.manager.scroll;if(!n1(o)){this.processOnEnd(o);return}if(!n){console.error("Found zombie joystick with ID "+i),e.manager.removeIdentifier(i);return}if(t.dynamicPage){var a=n.el.getBoundingClientRect();n.position={x:s.x+a.left,y:s.y+a.top}}n.identifier=i;var r=n.options.size/2,l={x:o.pageX,y:o.pageY};t.lockX&&(l.y=n.position.y),t.lockY&&(l.x=n.position.x);var c=Ro(l,n.position),d=e1(l,n.position),u=Sr(d),h=c/r,f={distance:c,position:l},g,v;if(n.options.shape==="circle"?(g=Math.min(c,r),v=t1(n.position,g,d)):(v=a1(l,n.position,r),g=Ro(v,n.position)),t.follow){if(c>r){let M=l.x-v.x,y=l.y-v.y;n.position.x+=M,n.position.y+=y,n.el.style.top=n.position.y-(e.box.top+s.y)+"px",n.el.style.left=n.position.x-(e.box.left+s.x)+"px",c=Ro(l,n.position)}}else l=v,c=g;var m=l.x-n.position.x,p=l.y-n.position.y;n.frontPosition={x:m,y:p},t.dataOnly||(n.ui.front.style.transform="translate("+m+"px,"+p+"px)");var b={identifier:n.identifier,position:l,force:h,pressure:o.force||o.pressure||o.webkitForce||0,distance:c,angle:{radian:u,degree:d},vector:{x:m/r,y:-p/r},raw:f,instance:n,lockX:t.lockX,lockY:t.lockY};b=n.computeDirection(b),b.angle={radian:Sr(180-d),degree:180-d},n.trigger("move",b),e.trigger("move "+n.id+":move",b)};_t.prototype.processOnEnd=function(o){var e=this,t=e.options,i=e.manager.getIdentifier(o),n=e.nipples.get(i),s=e.manager.removeIdentifier(n.identifier);n&&(t.dataOnly||n.hide(function(){t.mode==="dynamic"&&(n.trigger("removed",n),e.trigger("removed "+n.id+":removed",n),e.manager.trigger("removed "+n.id+":removed",n),n.destroy())}),clearInterval(e.pressureIntervals[n.identifier]),n.resetDirection(),n.trigger("end",n),e.trigger("end "+n.id+":end",n),e.ids.indexOf(n.identifier)>=0&&e.ids.splice(e.ids.indexOf(n.identifier),1),e.actives.indexOf(n)>=0&&e.actives.splice(e.actives.indexOf(n),1),/(semi|static)/.test(t.mode)?e.idles.push(n):e.nipples.indexOf(n)>=0&&e.nipples.splice(e.nipples.indexOf(n),1),e.manager.unbindDocument(),/(semi|static)/.test(t.mode)&&(e.manager.ids[s.id]=s.identifier))};_t.prototype.onDestroyed=function(o,e){var t=this;t.nipples.indexOf(e)>=0&&t.nipples.splice(t.nipples.indexOf(e),1),t.actives.indexOf(e)>=0&&t.actives.splice(t.actives.indexOf(e),1),t.idles.indexOf(e)>=0&&t.idles.splice(t.idles.indexOf(e),1),t.ids.indexOf(e.identifier)>=0&&t.ids.splice(t.ids.indexOf(e.identifier),1),t.manager.removeIdentifier(e.identifier),t.manager.unbindDocument()};_t.prototype.destroy=function(){var o=this;o.unbindEvt(o.options.zone,"start"),o.nipples.forEach(function(t){t.destroy()});for(var e in o.pressureIntervals)o.pressureIntervals.hasOwnProperty(e)&&clearInterval(o.pressureIntervals[e]);o.trigger("destroyed",o.nipples),o.manager.unbindDocument(),o.off()};function At(o){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=wc(),e.config(o),e.prepareCollections();var t=function(){var n;e.collections.forEach(function(s){s.forEach(function(a){n=a.el.getBoundingClientRect(),a.position={x:e.scroll.x+n.left,y:e.scroll.y+n.top}})})};Uo(window,"resize",function(){_c(t)});var i=function(){e.scroll=wc()};return Uo(window,"scroll",function(){_c(i)}),e.collections}At.prototype=new Ni;At.constructor=At;At.prototype.prepareCollections=function(){var o=this;o.collections.create=o.create.bind(o),o.collections.on=o.on.bind(o),o.collections.off=o.off.bind(o),o.collections.destroy=o.destroy.bind(o),o.collections.get=function(e){var t;return o.collections.every(function(i){return t=i.get(e),!t}),t}};At.prototype.create=function(o){return this.createCollection(o)};At.prototype.createCollection=function(o){var e=this,t=new _t(e,o);return e.bindCollection(t),e.collections.push(t),t};At.prototype.bindCollection=function(o){var e=this,t,i=function(n,s){t=n.type+" "+s.id+":"+n.type,e.trigger(t,s)};o.on("destroyed",e.onDestroyed.bind(e)),o.on("shown hidden rested dir plain",i),o.on("dir:up dir:right dir:down dir:left",i),o.on("plain:up plain:right plain:down plain:left",i)};At.prototype.bindDocument=function(){var o=this;o.binded||(o.bindEvt(document,"move").bindEvt(document,"end"),o.binded=!0)};At.prototype.unbindDocument=function(o){var e=this;(!Object.keys(e.ids).length||o===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};At.prototype.getIdentifier=function(o){var e;return o?(e=o.identifier===void 0?o.pointerId:o.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};At.prototype.removeIdentifier=function(o){var e={};for(var t in this.ids)if(this.ids[t]===o){e.id=t,e.identifier=this.ids[t],delete this.ids[t];break}return e};At.prototype.onmove=function(o){var e=this;return e.onAny("move",o),!1};At.prototype.onend=function(o){var e=this;return e.onAny("end",o),!1};At.prototype.oncancel=function(o){var e=this;return e.onAny("end",o),!1};At.prototype.onAny=function(o,e){var t=this,i,n="processOn"+o.charAt(0).toUpperCase()+o.slice(1);e=Vd(e);var s=function(r,l,c){c.ids.indexOf(l)>=0&&(c[n](r),r._found_=!0)},a=function(r){i=t.getIdentifier(r),Er(t.collections,s.bind(null,r,i)),r._found_||t.removeIdentifier(i)};return Er(e,a),!1};At.prototype.destroy=function(){var o=this;o.unbindDocument(!0),o.ids={},o.index=0,o.collections.forEach(function(e){e.destroy()}),o.off()};At.prototype.onDestroyed=function(o,e){var t=this;if(t.collections.indexOf(e)<0)return!1;t.collections.splice(t.collections.indexOf(e),1)};const Tc=new At,d1={create:function(o){return Tc.create(o)},factory:Tc};class h1{constructor(){x(this,"keys",{});x(this,"steerAxis",0);x(this,"accelerating",!1);x(this,"braking",!1);x(this,"horn",!1);x(this,"joystickManager",null);x(this,"hornTimeout",null);window.addEventListener("keydown",e=>{this.keys[e.code]=!0,e.code==="KeyH"&&this.triggerHorn()}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),this.setupMobileControls()}triggerHorn(){this.horn=!0,this.hornTimeout!==null&&clearTimeout(this.hornTimeout),this.hornTimeout=setTimeout(()=>{this.horn=!1,this.hornTimeout=null},300)}setupMobileControls(){const e=document.createElement("div");e.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 150px;
      height: 150px;
      z-index: 100;
      touch-action: none;
    `,document.body.appendChild(e),this.joystickManager=d1.create({zone:e,mode:"static",position:{left:"75px",bottom:"75px"},color:"rgba(255, 255, 255, 0.6)",size:120,restOpacity:.5}),this.joystickManager.on("move",(s,a)=>{a.vector&&(this.steerAxis=a.vector.x)}),this.joystickManager.on("end",()=>{this.steerAxis=0});const t=document.createElement("div");t.style.cssText=`
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
    `,n.textContent="📯",document.body.appendChild(n),n.addEventListener("touchstart",s=>{s.preventDefault(),this.triggerHorn(),n.style.background="rgba(255, 200, 50, 0.95)",n.style.transform="scale(1.1)"},{passive:!1}),n.addEventListener("touchend",s=>{s.preventDefault(),n.style.background="rgba(255, 200, 50, 0.6)",n.style.transform="scale(1.0)"},{passive:!1})}get forward(){return this.keys.ArrowUp||this.keys.KeyW||this.accelerating}get backward(){return this.keys.ArrowDown||this.keys.KeyS}get left(){return this.keys.ArrowLeft||this.keys.KeyA||this.steerAxis<-.2}get right(){return this.keys.ArrowRight||this.keys.KeyD||this.steerAxis>.2}get brake(){return this.keys.Space||this.braking}get honk(){return this.horn}}class u1{constructor(){x(this,"level",0);x(this,"spillRateMultiplier",1);x(this,"onSpill");x(this,"container");x(this,"fill");x(this,"bucketEl");x(this,"_warningIcon");x(this,"isShaking",!1);x(this,"spillFlashing",!1);if(!document.getElementById("spill-meter-styles")){const i=document.createElement("style");i.id="spill-meter-styles",i.textContent=`
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
      `,document.head.appendChild(i)}this.container=document.createElement("div"),Object.assign(this.container.style,{position:"fixed",left:"10px",top:"50%",transform:"translateY(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",zIndex:"999",userSelect:"none",pointerEvents:"none"}),this.bucketEl=document.createElement("span"),this.bucketEl.textContent="🪣",Object.assign(this.bucketEl.style,{fontSize:"26px",lineHeight:"1"}),this.container.appendChild(this.bucketEl);const e=document.createElement("div");Object.assign(e.style,{position:"relative",width:"16px",height:"130px",background:"rgba(40,40,40,0.85)",borderRadius:"8px",overflow:"hidden",border:"1.5px solid rgba(255,255,255,0.2)",boxShadow:"0 2px 8px rgba(0,0,0,0.6)"}),this.fill=document.createElement("div"),Object.assign(this.fill.style,{position:"absolute",bottom:"0",left:"0",width:"100%",height:"0%",borderRadius:"8px",transition:"height 0.05s linear",background:"#4caf50"}),e.appendChild(this.fill),this.container.appendChild(e);const t=document.createElement("div");t.textContent="🚨",Object.assign(t.style,{fontSize:"16px",lineHeight:"1",opacity:"0",transition:"opacity 0.3s"}),t._isWarning=!0,this.container.appendChild(t),this._warningIcon=t,document.body.appendChild(this.container),this.container.style.display="none"}setVisible(e){this.container.style.display=e?"flex":"none"}addSpill(e){this.level=Math.min(1,this.level+e)}update(e){var i;const t=this.level*100;if(this.fill.style.height=`${t}%`,this.level<.5){const n=this.level*2,s=Math.round(76+n*179),a=Math.round(175+n*60);this.fill.style.background=`linear-gradient(to right, rgb(${s},${a},50), rgb(${s},${a},50))`}else{const n=(this.level-.5)*2,s=255,a=Math.round(235-n*235);this.fill.style.background=`linear-gradient(to right, rgb(${s},${a},50), rgb(${s},${Math.round(a*.4)},20))`}this.level>.8&&!this.isShaking?(this.bucketEl.classList.add("bucket-shake"),this._warningIcon.style.opacity="1",this.isShaking=!0):this.level<=.8&&this.isShaking&&(this.bucketEl.classList.remove("bucket-shake"),this._warningIcon.style.opacity="0",this.isShaking=!1),this.level>=1&&!this.spillFlashing&&(this.spillFlashing=!0,this.level=.5,(i=this.onSpill)==null||i.call(this,5e4),this.container.classList.add("spill-flash"),setTimeout(()=>{this.container.classList.remove("spill-flash"),this.spillFlashing=!1},700))}triggerBump(e){this.addSpill(.025)}triggerCrash(){this.addSpill(.3)}}const Pa=[{id:"job_01",type:"commercial",zone:"cbd",position:{x:40,z:-40},title:"Marbellino Boardroom",client:"Brad from Accounts",description:"Brad wants a Marbellino feature wall in the boardroom. Stone-like marbled finish. Brad calls it 'very European'. Brad has never been to Europe.",pay:42e4,timeLimit:0,travelTimeLimit:120,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_02",type:"commercial",zone:"footscray",position:{x:-120,z:60},title:"Hemp Render — Big Kev's Shed",client:"Big Kev",description:"Big Kev wants Hemp Earthen Render on his warehouse. Rammed earth look, hemp fibres, 3–5mm application. He says it's a small shed. It is not a small shed.",pay:68e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_03",type:"residential",zone:"brunswick",position:{x:-80,z:80},title:"Antique Stucco Terrace",client:"Matilda",description:"Matilda wants Antique Stucco throughout — that Southern European aged look. Three rooms. By Thursday. It's Wednesday. She also needs primer coats. Yes, all of them.",pay:55e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_04",type:"heritage",zone:"richmond",position:{x:120,z:40},title:"Antique Stucco Heritage Restore",client:"The Council",description:"Council heritage job. Full 3-coat Antique Stucco system. Primer, stucco, sealer. Nobody told you about the asbestos audit. Nobody.",pay:8e5,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_05",type:"residential",zone:"stkilda",position:{x:40,z:-120},title:"Tadelakt Beachfront Bathroom",client:"Chloe",description:"Chloe wants Tadelakt in the bathroom — polished, waterproof, glossy. Traditional Moroccan technique. She also wants it 'textured but smooth'. You nod and apply the polishing stone.",pay:61e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_06",type:"emergency",zone:"cbd",position:{x:-40,z:20},title:"🚨 Emergency Antique Stucco Patch",client:"Darren (Stressed)",description:"Open home in 4 hours. Actual hole in the Antique Stucco feature wall. Primer, stucco, sealer — in 4 hours. Darren is sweating. You are also sweating.",pay:95e4,timeLimit:240,travelTimeLimit:240,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_07",type:"residential",zone:"brunswick",position:{x:-120,z:-80},title:"Hemp Render Repair — DIY Gone Wrong",client:"Zephyr",description:"Zephyr tried to do his own Hemp Earthen Render. No base coat. No primer. Wrong mix ratio. You strip it back and do it properly. Zephyr watches and takes notes.",pay:39e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_08",type:"commercial",zone:"footscray",position:{x:-160,z:20},title:"Rokka — Kebab Shop Reno",client:"Mustafa",description:"Mustafa wants Rokka on the walls — smooth, rustic, modern. 2–5mm application, sealed and ready before the health inspector comes back. No questions about the old walls.",pay:47e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_09",type:"heritage",zone:"stkilda",position:{x:80,z:-160},title:"Antique Stucco — Edwardian Cottage",client:"Patricia",description:"Patricia wants Antique Stucco — aged Southern European finish, NCC 2022 compliant. She's printed the full TDS. She's highlighted it. She will quiz you on cure times.",pay:72e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_10",type:"residential",zone:"richmond",position:{x:160,z:-40},title:"Tadelino New Build",client:"The Hendersons",description:"Full Tadelino system throughout — polished, modern, glossy finish. Two coats, polishing stone, sealer. The Hendersons want it done before Christmas. You ask which Christmas.",pay:58e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_11",type:"emergency",zone:"brunswick",position:{x:-40,z:120},title:"🚨 Tadelakt Water Damage Repair",client:"Gary",description:"Upstairs left the bath running. Gary's Tadelakt bathroom is destroyed. Strip, reprime, two coats Tadelakt, polish, seal. Gary is not speaking to upstairs. You don't ask.",pay:88e4,timeLimit:300,travelTimeLimit:300,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_12",type:"commercial",zone:"stkilda",position:{x:-20,z:-160},title:"Rokka Feature Wall — Wine Bar",client:"Alejandro",description:"Alejandro wants Rokka on the feature wall. Rustic, modern, subtle undulations. He calls it 'industrial earthen chic'. You write down 'Rokka, sealed, done'.",pay:64e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1}],Sc=["Jose","Jarrad","Matt","Phil","Tsuyoshi","Fabio"],mn=class mn{constructor(){x(this,"jobs",Pa.map(e=>({...e})));x(this,"activeJob",null);x(this,"activePhase",1);x(this,"completedJobIds",new Set);x(this,"money",5e5);x(this,"travelTimer",0);x(this,"travelFailed",!1);x(this,"crewToPickup",[]);x(this,"crewPickedUp",[])}getAvailableJobs(){return this.jobs.filter(e=>!this.completedJobIds.has(e.id)&&e!==this.activeJob).map(e=>({...e,isContested:!0}))}acceptJob(e,t){e.isContested=!0,this.activeJob=e,this.activePhase=1,this.crewToPickup=t&&t.length>0?t:this._pickCrew(e.crewNeeded),this.crewPickedUp=[],this.startTravelTimer()}_pickCrew(e){return[...Sc].sort(()=>Math.random()-.5).slice(0,Math.min(e,Sc.length))}startTravelTimer(){this.activeJob&&(this.travelTimer=this.activeJob.travelTimeLimit??120,this.travelFailed=!1)}checkPhase1Arrival(e,t){const i=e-mn.WORKSHOP_POS.x,n=t-mn.WORKSHOP_POS.z;return Math.sqrt(i*i+n*n)<18}advanceToPhase2(){this.activePhase=2,this.startTravelTimer()}advanceToPhase3(){this.activePhase=3,this.startTravelTimer()}pickupCrew(e){return!this.crewPickedUp.includes(e)&&this.crewToPickup.includes(e)&&this.crewPickedUp.push(e),this.allCrewCollected()}allCrewCollected(){return this.crewToPickup.every(e=>this.crewPickedUp.includes(e))}nextCrewNeeded(){for(const e of this.crewToPickup)if(!this.crewPickedUp.includes(e))return e;return null}tickTravel(e){if(!this.activeJob||this.travelFailed)return null;if(this.travelTimer-=e,this.travelTimer<=0){this.travelFailed=!0;const t=15e4;return this.money=Math.max(0,this.money-t),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],{failed:!0,penalty:t}}return null}checkArrival(e,t){if(!this.activeJob||this.activePhase!==3)return null;const i=e-this.activeJob.position.x,n=t-this.activeJob.position.z;return Math.sqrt(i*i+n*n)<this.activeJob.triggerRadius?this.activeJob:null}completeJob(e,t=1){const i=Math.round(e.pay*t);return this.money=Math.max(0,this.money+i),this.completedJobIds.add(e.id),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],i}distanceTo(e,t){if(!this.activeJob)return 0;const i=e-this.activeJob.position.x,n=t-this.activeJob.position.z;return Math.sqrt(i*i+n*n)}distanceToWorkshop(e,t){const i=e-mn.WORKSHOP_POS.x,n=t-mn.WORKSHOP_POS.z;return Math.sqrt(i*i+n*n)}distanceToPoint(e,t,i,n){const s=e-i,a=t-n;return Math.sqrt(s*s+a*a)}generateContestedJob(){const e=this.getAvailableJobs(),t=e.length>0?e[Math.floor(Math.random()*e.length)]:Pa[Math.floor(Math.random()*Pa.length)];return{...t,id:`contested_${Date.now()}_${Math.floor(Math.random()*9999)}`,title:`⚔️ ${t.title}`,pay:Math.round(t.pay*1.5),isContested:!0,completed:!1}}getContestedJobs(){const e=[];return e.push(this.generateContestedJob()),Math.random()<.4&&e.push(this.generateContestedJob()),e}};x(mn,"WORKSHOP_POS",{x:-60,z:30});let Oo=mn;const li=class li{constructor(e){x(this,"marker");x(this,"diamond");x(this,"ring");x(this,"routeLine",null);x(this,"routeGeom",null);x(this,"scene");x(this,"time",0);x(this,"targetPos",null);this.scene=e,this.marker=new Ge;const t=new qr(1,0),i=new $({color:li.MARKER_COLOR,emissive:new Se(li.MARKER_COLOR),emissiveIntensity:.35});this.diamond=new B(t,i),this.diamond.scale.set(1.2,2,1.2),this.diamond.castShadow=!1,this.marker.add(this.diamond);const n=new Zi(.5,2,32),s=new zt({color:li.MARKER_COLOR,transparent:!0,opacity:.6,side:Ut,depthWrite:!1});this.ring=new B(n,s),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=-8+.3,this.marker.add(this.ring),this.marker.visible=!1,this.scene.add(this.marker)}setTarget(e){if(this.targetPos=e,this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null),e===null){this.marker.visible=!1;return}this.marker.position.set(e.x,li.BASE_HEIGHT,e.z),this.marker.visible=!0,this.routeGeom=new Ft;const t=new Float32Array(6);t[0]=e.x,t[1]=.05,t[2]=e.z,t[3]=e.x,t[4]=.05,t[5]=e.z,this.routeGeom.setAttribute("position",new fi(t,3));const i=new Ld({color:16777215,transparent:!0,opacity:.75,depthTest:!1});this.routeLine=new tg(this.routeGeom,i),this.routeLine.renderOrder=999,this.scene.add(this.routeLine)}setJob(e){this.setTarget((e==null?void 0:e.position)??null)}get currentTarget(){return this.targetPos?{...this.targetPos}:null}update(e,t,i){if(this.time+=e,!this.targetPos||!this.marker.visible)return;const n=Math.sin(this.time*2.2)*li.BOB_AMP;this.marker.position.y=li.BASE_HEIGHT+n,this.diamond.rotation.y=this.time*1.2;const s=this.time*.8%1,a=.5+s*2;this.ring.scale.set(a,a,1);const r=this.ring.material;if(r.opacity=(1-s)*.6,this.routeGeom){const l=this.routeGeom.attributes.position;l.setXYZ(0,t,.05,i),l.setXYZ(1,this.targetPos.x,.05,this.targetPos.z),l.needsUpdate=!0,this.routeGeom.computeBoundingSphere()}}dispose(){this.marker.visible=!1,this.scene.remove(this.marker),this.diamond.geometry.dispose(),this.diamond.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null)}};x(li,"MARKER_COLOR",12674667),x(li,"BASE_HEIGHT",8),x(li,"BOB_AMP",.5);let Cr=li;const Ec=[{id:"perth_plasterers",name:"Perth Plasterers",tagline:"They drove 3000km just to lose.",color:"#FF4444",difficulty:.45,speed:.55,members:[{name:"Barry",skinTone:"#D4B090",hairColor:"#444444",hairStyle:"buzz",accentColor:"#FF4444"},{name:"Dazza",skinTone:"#E8C8A0",hairColor:"#8B4513",hairStyle:"short",accentColor:"#FF4444"},{name:"Shazza",skinTone:"#FDDBB4",hairColor:"#C4832A",hairStyle:"long",accentColor:"#FF4444"}]},{id:"sydney_stucco",name:"Sydney Stucco",tagline:"Fancy tools, slow hands.",color:"#4488FF",difficulty:.6,speed:.65,members:[{name:"Blake",skinTone:"#E0B090",hairColor:"#1a0e00",hairStyle:"slicked",accentColor:"#4488FF"},{name:"Jaxon",skinTone:"#D4A070",hairColor:"#2a1800",hairStyle:"bun",accentColor:"#4488FF"},{name:"Tiffany",skinTone:"#F5DEB3",hairColor:"#C8A060",hairStyle:"ponytail",accentColor:"#4488FF"}]},{id:"brisbane_brushmen",name:"Brisbane Brushmen",tagline:"Rough as guts, twice as slow.",color:"#FF8C00",difficulty:.35,speed:.42,members:[{name:"Cobber",skinTone:"#D4A060",hairColor:"#888888",hairStyle:"bald",accentColor:"#FF8C00"},{name:"Mozzie",skinTone:"#C89050",hairColor:"#2a1000",hairStyle:"afro",accentColor:"#FF8C00"},{name:"Bazza",skinTone:"#E0C090",hairColor:"#5a3010",hairStyle:"short",accentColor:"#FF8C00"}]},{id:"melbourne_mafia",name:"Melbourne Mafia",tagline:"They know this city. So does Jose.",color:"#9B59B6",difficulty:.8,speed:.82,members:[{name:"Dante",skinTone:"#B07040",hairColor:"#1a0e00",hairStyle:"slick",accentColor:"#9B59B6"},{name:"Viktor",skinTone:"#C08060",hairColor:"#333333",hairStyle:"buzz",accentColor:"#9B59B6"},{name:"Rosa",skinTone:"#E8C0A0",hairColor:"#4a2010",hairStyle:"long",accentColor:"#9B59B6"}]},{id:"adelaide_arches",name:"Adelaide Arches",tagline:"Church Hall heroes. Still lost.",color:"#E74C3C",difficulty:.55,speed:.58,members:[{name:"Murray",skinTone:"#D4A878",hairColor:"#5a3010",hairStyle:"short",accentColor:"#E74C3C"},{name:"Cheryl",skinTone:"#F0D0A8",hairColor:"#C87040",hairStyle:"bun",accentColor:"#E74C3C"},{name:"Wazza",skinTone:"#C89060",hairColor:"#222222",hairStyle:"buzz",accentColor:"#E74C3C"}]},{id:"gold_coast_grinders",name:"Gold Coast Grinders",tagline:"All tan, no technique.",color:"#F1C40F",difficulty:.5,speed:.52,members:[{name:"Bryce",skinTone:"#E8C090",hairColor:"#D4A840",hairStyle:"slicked",accentColor:"#F1C40F"},{name:"Kylie",skinTone:"#F5D8B0",hairColor:"#E0B040",hairStyle:"long",accentColor:"#F1C40F"},{name:"Damo",skinTone:"#D09060",hairColor:"#6a4020",hairStyle:"short",accentColor:"#F1C40F"}]},{id:"tazzy_devils",name:"Tazzy Devils",tagline:"Remote. Feral. Surprisingly fast.",color:"#1ABC9C",difficulty:.7,speed:.75,members:[{name:"Reg",skinTone:"#C88858",hairColor:"#333333",hairStyle:"bald",accentColor:"#1ABC9C"},{name:"Shelby",skinTone:"#E0B888",hairColor:"#8B4513",hairStyle:"ponytail",accentColor:"#1ABC9C"},{name:"Dozer",skinTone:"#B87848",hairColor:"#1a0e00",hairStyle:"afro",accentColor:"#1ABC9C"}]}];function Ar(){return Ec[Math.floor(Math.random()*Ec.length)]}function Cc(o){return o>=1e6?`${(o/1e6).toFixed(2)}M sats`:o>=1e3?`${(o/1e3).toFixed(0)}K sats`:`${o} sats`}const Ac={cbd:"🏙️ CBD",footscray:"🏭 Footscray",brunswick:"🎸 Brunswick",richmond:"🏡 Richmond",stkilda:"🌊 St Kilda"},Rc={residential:"🏠 Residential",commercial:"🏢 Commercial",heritage:"🏛️ Heritage",emergency:"🚨 Emergency"};class f1{constructor(e){x(this,"overlay");x(this,"visible",!1);x(this,"jobs",[]);if(this.onAccept=e,this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
        .jb-card-contested {
          background: linear-gradient(135deg, rgba(40,20,5,0.95), rgba(25,10,0,0.98));
          border: 2px solid #E8A830;
          border-radius: 14px;
          padding: 0;
          width: 100%;
          max-width: 480px;
          margin-bottom: 14px;
          box-sizing: border-box;
          box-shadow: 0 0 24px rgba(232,168,48,0.25), inset 0 0 40px rgba(232,168,48,0.04);
          animation: jbContestPulse 2.5s ease-in-out infinite;
          overflow: hidden;
        }
        @keyframes jbContestPulse {
          0%, 100% { box-shadow: 0 0 18px rgba(232,168,48,0.22), inset 0 0 40px rgba(232,168,48,0.04); }
          50%       { box-shadow: 0 0 36px rgba(232,168,48,0.45), inset 0 0 40px rgba(232,168,48,0.08); }
        }
        .jb-war-banner {
          background: linear-gradient(90deg, #B8840A, #E8A830, #B8840A);
          padding: 6px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
        }
        .jb-war-label {
          color: #000;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 3px;
        }
        .jb-war-rival {
          color: #000;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          opacity: 0.8;
        }
        .jb-card-contested-body {
          padding: 14px 16px 16px;
        }
        .jb-battle-btn {
          background: linear-gradient(135deg, #E8A830, #C87010);
          color: #000;
          border: none;
          border-radius: 10px;
          padding: 13px 24px;
          font-size: 16px;
          font-weight: 900;
          cursor: pointer;
          width: 100%;
          letter-spacing: 1px;
          transition: opacity 0.15s, transform 0.1s;
          min-height: 48px;
          text-transform: uppercase;
        }
        .jb-battle-btn:hover { opacity: 0.88; transform: translateY(-1px); }
        .jb-battle-btn:active { transform: translateY(0); opacity: 1; }
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
      `,document.head.appendChild(t)}document.body.appendChild(this.overlay)}show(e){this.jobs=e.slice(0,8),this.visible=!0,this._render(),this.overlay.style.display="flex"}hide(){this.visible=!1,this.overlay.style.display="none"}isVisible(){return this.visible}_makeContestedCard(e){var a;const t=Ar(),i="★".repeat(Math.round(t.difficulty*5))+"☆".repeat(5-Math.round(t.difficulty*5)),n=e.title.replace(/^⚔️\s*/,""),s=document.createElement("div");return s.style.cssText=`
      width:100%; max-width:480px; box-sizing:border-box;
      background:linear-gradient(160deg,#1a0e00,#120900);
      border:2px solid #E8A830; border-radius:16px;
      margin-bottom:16px; overflow:visible;
      box-shadow:0 0 20px rgba(232,168,48,0.2);
      font-family:system-ui,sans-serif;
    `,s.innerHTML=`
      <!-- Gold banner -->
      <div style="
        background:linear-gradient(90deg,#B8840A,#E8A830,#B8840A);
        border-radius:13px 13px 0 0;
        padding:8px 14px;
        display:flex; align-items:center; justify-content:space-between;
      ">
        <span style="color:#000;font-size:12px;font-weight:900;
          letter-spacing:2px;font-family:'Arial Black',Arial,sans-serif;">
          ⚔️ CONTRACT WAR
        </span>
        <span style="color:#000;font-size:11px;font-weight:800;">vs ${t.name}</span>
      </div>

      <!-- Body -->
      <div style="padding:14px 16px 16px;">

        <!-- Title + pay row -->
        <div style="display:flex;justify-content:space-between;
          align-items:flex-start;gap:8px;margin-bottom:10px;">
          <div style="color:#FFD880;font-size:16px;font-weight:900;
            line-height:1.25;flex:1;">${n}</div>
          <div style="color:#E8A830;font-size:17px;font-weight:900;
            white-space:nowrap;">₿ ${Cc(e.pay)}</div>
        </div>

        <!-- Rival + difficulty strip -->
        <div style="
          display:flex;align-items:center;gap:10px;
          background:rgba(232,168,48,0.08);
          border:1px solid rgba(232,168,48,0.18);
          border-radius:8px;padding:8px 12px;margin-bottom:10px;
        ">
          <div style="font-size:20px;flex-shrink:0;">🥊</div>
          <div style="flex:1;">
            <div style="color:#E8A830;font-size:10px;font-weight:900;letter-spacing:1px;">
              RIVAL CREW
            </div>
            <div style="color:#fff;font-size:13px;font-weight:800;">${t.name}</div>
            <div style="color:#aaa;font-size:10px;">${i}</div>
          </div>
          <div style="text-align:right;">
            <div style="color:#2ECC40;font-size:10px;font-weight:700;">FULL PAY</div>
            <div style="color:#2ECC40;font-size:13px;font-weight:900;">WIN = 100%</div>
          </div>
        </div>

        <!-- Zone + type badges -->
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;">
          <span style="
            color:#aaa;font-size:11px;font-weight:600;
            background:rgba(255,255,255,0.08);
            border-radius:6px;padding:3px 8px;
          ">${Ac[e.zone]??e.zone}</span>
          <span style="
            color:${e.type==="emergency"?"#ff6b6b":"#aaa"};
            font-size:11px;font-weight:600;
            background:${e.type==="emergency"?"rgba(255,80,80,0.14)":"rgba(255,255,255,0.08)"};
            border-radius:6px;padding:3px 8px;
          ">${Rc[e.type]??e.type}</span>
          <span style="color:#888;font-size:11px;font-weight:600;
            background:rgba(255,255,255,0.06);
            border-radius:6px;padding:3px 8px;">
            👤 ${e.client}
          </span>
        </div>

        <!-- Description -->
        <div style="
          color:#bbb;font-size:13px;line-height:1.5;
          margin-bottom:14px;
        ">${e.description}</div>

        <!-- Battle button -->
        <button id="battle-btn-${e.id}" style="
          width:100%;
          background:linear-gradient(135deg,#E8A830,#C07010);
          color:#000;border:none;border-radius:12px;
          padding:15px 24px;font-size:16px;font-weight:900;
          letter-spacing:1px;cursor:pointer;
          font-family:'Arial Black',Arial,sans-serif;
          min-height:52px;touch-action:manipulation;
          box-shadow:0 4px 16px rgba(232,168,48,0.3);
        ">⚔️ BATTLE FOR THIS JOB</button>
      </div>
    `,(a=s.querySelector(`#battle-btn-${e.id}`))==null||a.addEventListener("click",()=>this.onAccept(e)),s}_makeRegularCard(e){const t=document.createElement("div");t.className="jb-card";const i=document.createElement("div");i.className="jb-card-header";const n=document.createElement("div");n.className="jb-title",n.textContent=e.title,i.appendChild(n);const s=document.createElement("div");s.className="jb-pay",s.textContent=`₿ ${Cc(e.pay)}`,i.appendChild(s),t.appendChild(i);const a=document.createElement("div");a.className="jb-meta";const r=document.createElement("span");r.className="jb-badge",r.textContent=Ac[e.zone]??e.zone,a.appendChild(r);const l=document.createElement("span");if(l.className=`jb-badge${e.type==="emergency"?" jb-emergency-badge":""}`,l.textContent=Rc[e.type]??e.type,a.appendChild(l),e.timeLimit>0){const h=document.createElement("span");h.className="jb-badge jb-emergency-badge",h.textContent=`⏱️ ${Math.round(e.timeLimit/60)} min limit`,a.appendChild(h)}t.appendChild(a);const c=document.createElement("div");c.className="jb-client",c.textContent=`Client: ${e.client}`,t.appendChild(c);const d=document.createElement("div");d.className="jb-desc",d.textContent=e.description,t.appendChild(d);const u=document.createElement("button");return u.className="jb-accept-btn",u.textContent="ACCEPT →",u.addEventListener("click",()=>this.onAccept(e)),t.appendChild(u),t}_render(){this.overlay.innerHTML="";const e=document.createElement("div");e.style.cssText=`
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
    `,e.appendChild(t);const i=document.createElement("button");if(i.className="jb-close-btn",i.textContent="✕",i.setAttribute("aria-label","Close"),i.addEventListener("click",()=>this.hide()),e.appendChild(i),this.overlay.appendChild(e),this.jobs.length===0){const a=document.createElement("div");a.className="jb-no-jobs",a.textContent="You've smashed all the jobs, legend. 🏆",this.overlay.appendChild(a);return}const n=this.jobs.filter(a=>a.isContested),s=this.jobs.filter(a=>!a.isContested);if(n.length>0){const a=this._sectionHeading("⚔️ CONTRACT WARS","linear-gradient(90deg,#E8A830,#FF6600)","rgba(232,168,48,0.12)","rgba(232,168,48,0.3)"),r=document.createElement("div");r.style.cssText=`
        color:#ccc; font-size:11px; font-family:system-ui,sans-serif;
        margin:-10px 0 12px; width:100%; max-width:480px; text-align:center;
      `,r.textContent="Beat the rival crew — Scaffold + Tower Defence — fastest time wins",this.overlay.appendChild(a),this.overlay.appendChild(r);for(const l of n)this.overlay.appendChild(this._makeContestedCard(l))}if(s.length>0){const a=this._sectionHeading("📋 AVAILABLE JOBS","linear-gradient(90deg,#5EDB7D,#3BAA5A)","rgba(94,219,125,0.08)","rgba(94,219,125,0.2)");this.overlay.appendChild(a);for(const r of s)this.overlay.appendChild(this._makeRegularCard(r))}}_sectionHeading(e,t,i,n){const s=document.createElement("div");return s.style.cssText=`
      width:100%; max-width:480px;
      display:flex; align-items:center; gap:10px;
      margin-bottom:12px; margin-top:4px;
      background:${i};
      border:1px solid ${n};
      border-radius:10px; padding:8px 14px;
      box-sizing:border-box;
    `,s.innerHTML=`
      <div style="
        font-size:clamp(12px,3.5vw,15px); font-weight:900; letter-spacing:2px;
        background:${t};
        -webkit-background-clip:text; -webkit-text-fill-color:transparent;
        background-clip:text; white-space:nowrap;
      ">${e}</div>
      <div style="flex:1;height:1px;background:${n};opacity:0.5;"></div>
    `,s}}const Pc=1e8;function rn(o){return o>=1e6?`${(o/1e6).toFixed(2)}M sats`:o>=1e3?`${(o/1e3).toFixed(0)}K sats`:`${o} sats`}function p1(o){const e=Math.max(0,Math.ceil(o)),t=Math.floor(e/60),i=e%60;return`${t}:${i.toString().padStart(2,"0")}`}function m1(o){return o.charAt(0).toUpperCase()}class g1{constructor(){x(this,"btcAchieved",!1);x(this,"speedText");x(this,"moneyEl");x(this,"btcBarFill");x(this,"btcLabelEl");x(this,"jobStripEl");x(this,"travelTimerEl");x(this,"flashOverlay");x(this,"timerFailOverlay");x(this,"crewPanelEl");x(this,"moneyPanel");x(this,"activeJob",null);x(this,"activePhase",1);x(this,"flashTimeout",null);x(this,"spillPenaltyTimeout",null);x(this,"currentMoney",5e5);x(this,"timerPulseInterval",null);if(!document.getElementById("hud-styles")){const r=document.createElement("style");r.id="hud-styles",r.textContent=`
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
    `;const a=document.createElement("div");a.id="hud-timer-fail-msg",a.style.cssText=`
      color: #ff4444;
      font-size: clamp(28px, 6vw, 52px);
      font-weight: 900;
      font-family: system-ui, sans-serif;
      text-shadow: 0 2px 12px rgba(0,0,0,0.9);
      text-align: center;
      padding: 0 24px;
      line-height: 1.4;
    `,a.textContent="⏰ TOO SLOW! -150K sats",this.timerFailOverlay.appendChild(a),document.body.appendChild(this.timerFailOverlay)}getMoneyPanel(){return this.moneyPanel}update(e,t){const i=Math.abs(Math.round(e*3.6));this.speedText.textContent=`${i} km/h`}setActiveJob(e,t=2){if(this.activeJob=e,this.activePhase=t,!e){this.jobStripEl.style.display="none",this.crewPanelEl.style.display="none";return}this.jobStripEl.style.display="flex",this._refreshJobStrip(e,null)}updateJobDistance(e){this.activeJob&&this._refreshJobStrip(this.activeJob,e)}updateCrewStatus(e,t,i){if(!i||e.length===0){this.crewPanelEl.style.display="none";return}this.crewPanelEl.style.display="flex",this.crewPanelEl.innerHTML="";const n=document.createElement("div");n.style.cssText=`
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
      `,l.textContent=m1(a),l.title=a,s.appendChild(l)}this.crewPanelEl.appendChild(s)}_refreshJobStrip(e,t){this.jobStripEl.innerHTML="";const i=document.createElement("div");if(i.style.cssText=`
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      text-align: right;
    `,t!==null){const n=t<1e3?`${Math.round(t)}m`:`${(t/1e3).toFixed(1)}km`;this.activePhase===1?(i.textContent=`📦 To workshop: ${n} — ${e.title}`,i.style.color="#FFD700"):this.activePhase===2?(i.textContent=`👥 Pick up crew: ${n} — ${e.title}`,i.style.color="#60AAFF"):(i.textContent=`🧱 To job site: ${n} — ${e.title}`,i.style.color="#C1666B")}else this.activePhase===1?(i.textContent=`📦 Workshop pickup — ${e.title}`,i.style.color="#FFD700"):this.activePhase===2?(i.textContent=`👥 Pick up the crew — ${e.title}`,i.style.color="#60AAFF"):(i.textContent=`🧱 ${e.title}`,i.style.color="#fff");this.jobStripEl.appendChild(i)}updateTravelTimer(e){if(e===null){this.travelTimerEl.style.display="none",this.travelTimerEl.classList.remove("hud-timer-pulse"),this.timerPulseInterval!==null&&(clearInterval(this.timerPulseInterval),this.timerPulseInterval=null);return}this.travelTimerEl.style.display="block",this.travelTimerEl.textContent=`⏱ ${p1(e)}`,e>60?(this.travelTimerEl.style.color="#5EDB7D",this.travelTimerEl.classList.remove("hud-timer-pulse")):e>30?(this.travelTimerEl.style.color="#FFD700",this.travelTimerEl.classList.remove("hud-timer-pulse")):(this.travelTimerEl.style.color="#ff4444",this.travelTimerEl.classList.contains("hud-timer-pulse")||this.travelTimerEl.classList.add("hud-timer-pulse"))}showTimerFail(e){const t=document.getElementById("hud-timer-fail-msg");t&&(t.textContent=`⏰ TOO SLOW! -${rn(e)}`),this.timerFailOverlay.style.display="flex",setTimeout(()=>{this.timerFailOverlay.style.display="none"},3e3)}showPhase1Complete(){const e=document.getElementById("hud-flash-msg");e&&(e.innerHTML='📦 Materials loaded!<br><span style="font-size:0.65em">Go pick up the crew.</span>',e.style.color="#FFD700"),this.flashOverlay.style.background="rgba(255, 210, 0, 0.10)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2500)}showCrewPickup(e,t){const i=document.getElementById("hud-flash-msg");i&&(t?i.innerHTML=`👤 ${e} on board!<br><span style="font-size:0.65em">Pick up ${t}!</span>`:(i.innerHTML='✅ Crew assembled!<br><span style="font-size:0.65em">Head to the job site.</span>',i.style.color="#5EDB7D"),t&&(i.style.color="#60AAFF")),this.flashOverlay.style.background=t?"rgba(96, 170, 255, 0.08)":"rgba(94, 219, 125, 0.12)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2200)}showSpillPenalty(e){this.spillPenaltyTimeout!==null&&(clearTimeout(this.spillPenaltyTimeout),this.spillPenaltyTimeout=null);const t=`-${rn(e)}`;this.moneyEl.style.color="#ff4444",this.moneyEl.textContent=`${rn(this.currentMoney)} ${t}`,this.spillPenaltyTimeout=setTimeout(()=>{this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=rn(this.currentMoney),this.spillPenaltyTimeout=null},1500)}showJobComplete(e,t){const i=document.getElementById("hud-flash-msg");i&&(i.style.color="#5EDB7D",i.innerHTML=`✅ JOB DONE!<br><span style="font-size:0.7em">+${rn(t)} — ${e}</span>`),this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashTimeout=null},3e3)}updateMoney(e){this.currentMoney=e,this.spillPenaltyTimeout===null&&(this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=rn(e));const t=Math.min(1,e/Pc);this.btcBarFill.style.width=`${(t*100).toFixed(1)}%`,t>=1?(this.btcLabelEl.textContent="₿ GOAL: ACHIEVED! 🚀",this.btcBarFill.style.background="#FFD700"):this.btcLabelEl.textContent=`₿ GOAL: ${(t*100).toFixed(1)}%`,!this.btcAchieved&&e>=Pc&&(this.btcAchieved=!0,this._showBitcoinAchievement())}showPenalty(e,t){this.flashTimeout&&clearTimeout(this.flashTimeout),this.flashOverlay.style.display="block";const i=this.flashOverlay.querySelector("div");i&&(i.innerHTML=`⚠️ SCAFFOLD FAIL<br><span style="font-size:0.7em">−${rn(t)} penalty — ${e}</span>`),this.flashOverlay.style.animation="none",this.flashOverlay.offsetWidth,this.flashOverlay.style.animation="hudRedFlash 2.5s ease forwards",this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none"},2600)}showToast(e,t=16777215){const i="#"+t.toString(16).padStart(6,"0"),n=document.createElement("div");n.textContent=e,Object.assign(n.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:i,color:"#fff",padding:"14px 24px",borderRadius:"14px",fontSize:"18px",fontWeight:"800",fontFamily:"system-ui, sans-serif",zIndex:"9000",opacity:"1",textShadow:"0 1px 4px rgba(0,0,0,0.5)",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",pointerEvents:"none",whiteSpace:"nowrap",transition:"opacity 0.5s ease"}),document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0"},2e3),setTimeout(()=>n.remove(),2600)}_showBitcoinAchievement(){if(localStorage.setItem("tem-rush-btc-achieved","1"),!document.getElementById("btc-anim-styles")){const c=document.createElement("style");c.id="btc-anim-styles",c.textContent=`
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
    `;const s=Ic("🎽  REWARD — MERCH STORE","rgba(247,147,26,0.18)","rgba(247,147,26,0.55)","10% off all TEM merch.<br>Show this at checkout or use the code online.","BTCPLASTER10");t.appendChild(s);const a=Ic("🪣  REWARD — MATERIAL SALES","rgba(94,219,125,0.14)","rgba(94,219,125,0.45)","5% off TEM materials at participating retail stores.<br>Present your in-app certificate.","BTCMAT5");t.appendChild(a);const r=document.createElement("div");r.style.cssText=`
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
    `,l.onclick=()=>e.remove(),t.appendChild(l),e.appendChild(t),document.body.appendChild(e)}}function Ic(o,e,t,i,n){const s=document.createElement("div");s.style.cssText=`
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
  `;const a=s.querySelector("button");return a.addEventListener("click",()=>{var r;(r=navigator.clipboard)==null||r.writeText(n).then(()=>{a.textContent="✓ Copied!",setTimeout(()=>{a.textContent="📋 Copy Code"},2e3)})}),s}const xn=[{id:"timber-bluestone",file:"images/270ae674-ae77-46c0-a931-d8b3890bb728.jpg",name:"Timber & Bluestone"},{id:"angular-bay",file:"images/4d5ff18e-1129-4195-9108-a64f3c8e4d34.jpg",name:"Angular Bay House"},{id:"haussmann",file:"images/5c2eabb7-65ce-4f76-b14c-8eb37a3f9537.jpg",name:"Haussmann Mansion"},{id:"brutalist",file:"images/60007f2e-318f-412e-b2ad-4d77445ee417.jpg",name:"Brutalist Compound"},{id:"sculptural-olive",file:"images/787315c4-a661-4dca-8567-b7a18f104665.jpg",name:"Sculptural Olive"},{id:"curved-balcony",file:"images/842fccc6-6bad-4509-81d8-ecb2dc14c80c.jpg",name:"Curved Balcony"},{id:"corten-plaster",file:"images/e3cbd2c9-7944-4074-a439-1033c9f2c166.jpg",name:"Corten & Plaster"},{id:"terracotta-mono",file:"images/f2ed55b5-ba78-4a78-8bad-e57a86b6bcef.jpg",name:"Terracotta Monolith"}],Xd="tem-rush-achievements";function Hs(){try{return JSON.parse(localStorage.getItem(Xd)||"[]")}catch{return[]}}function v1(o){const e=Hs();return e.includes(o)?!1:(e.push(o),localStorage.setItem(Xd,JSON.stringify(e)),!0)}function Yd(){return Hs().length>=xn.length}function y1(){const o=Hs(),e=xn.filter(t=>!o.includes(t.id));return e.length>0?e[Math.floor(Math.random()*e.length)]:xn[Math.floor(Math.random()*xn.length)]}function x1(o,e,t){o.fillStyle="#C8B89A",o.fillRect(0,0,e,t);for(let i=0;i<800;i++){const n=Math.random()*e,s=Math.random()*t,a=20+Math.random()*60,r=Math.random()*Math.PI,l=Math.floor(180+Math.random()*40);o.strokeStyle=`rgb(${l},${l-10},${l-20})`,o.lineWidth=1+Math.random()*3,o.globalAlpha=.3+Math.random()*.4,o.beginPath(),o.moveTo(n,s),o.lineTo(n+Math.cos(r)*a,s+Math.sin(r)*a),o.stroke()}o.globalAlpha=1,o.font="bold 48px system-ui",o.textAlign="center",o.fillStyle="rgba(180,160,130,0.4)",o.fillText("TROWELED EARTH",e/2,t/2-20),o.font="22px system-ui",o.fillStyle="rgba(180,160,130,0.3)",o.fillText("Scratch to reveal",e/2,t/2+20)}function _1(o,e,t,i,n,s=45){o.globalCompositeOperation="destination-out",o.strokeStyle="rgba(0,0,0,1)",o.lineCap="round",o.lineJoin="round",o.lineWidth=s*2,o.beginPath(),o.moveTo(e,t),o.lineTo(i,n),o.stroke(),o.globalCompositeOperation="source-over"}function Lc(o,e,t){const i=o.getImageData(0,0,e,t).data;let n=0;const s=e*t;for(let a=3;a<i.length;a+=4)i[a]<128&&n++;return n/s}function b1(o,e,t){o.save(),o.translate(e,t),o.rotate(Math.PI/4),o.strokeStyle="#8B6914",o.lineWidth=5,o.lineCap="round",o.beginPath(),o.moveTo(0,0),o.lineTo(0,36),o.stroke(),o.fillStyle="#C0C0C0",o.strokeStyle="#888",o.lineWidth=1.5,o.beginPath(),o.moveTo(-14,0),o.lineTo(14,0),o.lineTo(10,-28),o.lineTo(-10,-28),o.closePath(),o.fill(),o.stroke(),o.fillStyle="rgba(255,255,255,0.35)",o.beginPath(),o.moveTo(-8,-4),o.lineTo(4,-4),o.lineTo(2,-22),o.lineTo(-6,-22),o.closePath(),o.fill(),o.restore()}function Dc(o,e,t,i){const n=Math.max(t/e.naturalWidth,i/e.naturalHeight),s=e.naturalWidth*n,a=e.naturalHeight*n,r=(t-s)/2,l=(i-a)/2;o.drawImage(e,r,l,s,a)}class w1{constructor(){x(this,"container",null);x(this,"canvas",null);x(this,"ctx",null);x(this,"scratch",null);x(this,"sctx",null);x(this,"onComplete",null);x(this,"photo",null);x(this,"img",null);x(this,"imgLoaded",!1);x(this,"lastX",0);x(this,"lastY",0);x(this,"pointerDown",!1);x(this,"cursorX",-999);x(this,"cursorY",-999);x(this,"DURATION",30);x(this,"timeLeft",30);x(this,"timerInterval",null);x(this,"rafId",0);x(this,"done",!1);x(this,"revealed",0);x(this,"lastSampleTime",0);x(this,"SAMPLE_INTERVAL",250);x(this,"toastMsg","");x(this,"toastAlpha",0);x(this,"_onMouseMove");x(this,"_onMouseDown");x(this,"_onMouseUp");x(this,"_onTouchStart");x(this,"_onTouchMove");x(this,"_onTouchEnd");this._onMouseMove=this.handleMouseMove.bind(this),this._onMouseDown=this.handleMouseDown.bind(this),this._onMouseUp=()=>{this.pointerDown=!1},this._onTouchStart=this.handleTouchStart.bind(this),this._onTouchMove=this.handleTouchMove.bind(this),this._onTouchEnd=()=>{this.pointerDown=!1}}mount(e,t){if(this.container=e,this.onComplete=t,this.done=!1,this.revealed=0,this.timeLeft=this.DURATION,this.toastMsg="",this.toastAlpha=0,this.photo=y1(),this.canvas=document.createElement("canvas"),this.canvas.width=e.clientWidth||window.innerWidth,this.canvas.height=e.clientHeight||window.innerHeight,this.canvas.style.cssText="position:absolute;inset:0;display:block;cursor:none;touch-action:none;",this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx)throw new Error("Canvas 2D not supported");if(e.appendChild(this.canvas),this.scratch=document.createElement("canvas"),this.scratch.width=this.canvas.width,this.scratch.height=this.canvas.height,this.sctx=this.scratch.getContext("2d",{willReadFrequently:!0}),!this.sctx)throw new Error("Scratch canvas 2D not supported");x1(this.sctx,this.scratch.width,this.scratch.height),this.img=new Image,this.img.onload=()=>{this.imgLoaded=!0},this.img.onerror=()=>{this.imgLoaded=!0},this.img.src=this.photo.file,this.canvas.addEventListener("mousemove",this._onMouseMove),this.canvas.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),this.canvas.addEventListener("touchstart",this._onTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.canvas.addEventListener("touchend",this._onTouchEnd),this.timerInterval=setInterval(()=>{this.done||(this.timeLeft--,this.timeLeft<=0&&this.finish())},1e3),this.loop()}handleMouseDown(e){this.pointerDown=!0;const t=this.canvas.getBoundingClientRect();this.lastX=e.clientX-t.left,this.lastY=e.clientY-t.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleMouseMove(e){const t=this.canvas.getBoundingClientRect(),i=e.clientX-t.left,n=e.clientY-t.top;this.cursorX=i,this.cursorY=n,this.pointerDown&&!this.done&&(this.scrape(this.lastX,this.lastY,i,n),this.lastX=i,this.lastY=n)}handleTouchStart(e){e.preventDefault(),this.pointerDown=!0;const t=e.touches[0],i=this.canvas.getBoundingClientRect();this.lastX=t.clientX-i.left,this.lastY=t.clientY-i.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleTouchMove(e){if(e.preventDefault(),!this.pointerDown||this.done)return;const t=e.touches[0],i=this.canvas.getBoundingClientRect(),n=t.clientX-i.left,s=t.clientY-i.top;this.cursorX=n,this.cursorY=s,this.scrape(this.lastX,this.lastY,n,s),this.lastX=n,this.lastY=s}scrape(e,t,i,n){if(!this.sctx||!this.scratch||this.done)return;_1(this.sctx,e,t,i,n,45);const s=performance.now();s-this.lastSampleTime>this.SAMPLE_INTERVAL&&(this.lastSampleTime=s,this.revealed=Lc(this.sctx,this.scratch.width,this.scratch.height),this.revealed>=.85&&this.finish())}loop(){if(this.done&&this.toastAlpha<=0)return;const e=this.ctx,t=this.canvas;if(!e||!t)return;const i=t.width,n=t.height;e.clearRect(0,0,i,n),this.imgLoaded&&this.img&&this.img.naturalWidth>0?Dc(e,this.img,i,n):(e.fillStyle="#2a2a20",e.fillRect(0,0,i,n)),this.scratch&&e.drawImage(this.scratch,0,0),this.done||this.drawHUD(e,i,n),this.cursorX>0&&!this.done&&b1(e,this.cursorX,this.cursorY),this.toastAlpha>0&&(this.drawToast(e,i,n),this.toastAlpha-=.012),this.rafId=requestAnimationFrame(()=>this.loop())}drawHUD(e,t,i){const n=this.timeLeft/this.DURATION,s=t*.8,a=t*.1,r=16,l=14,c=7;e.fillStyle="rgba(0,0,0,0.4)",this.roundRect(e,a,r,s,l,c),e.fill();const d=n<.33?"#F07070":n<.6?"#F7C948":"#5EDB7D";e.fillStyle=d,this.roundRect(e,a,r,s*n,l,c),e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.round(i*.03)}px system-ui`,e.textAlign="center",e.shadowColor="rgba(0,0,0,0.8)",e.shadowBlur=6,e.fillText(`${Math.ceil(this.timeLeft)}s`,t/2,r+l+22);const u=Math.round(this.revealed*100);e.font=`900 ${Math.round(i*.09)}px system-ui`,e.textAlign="center",e.fillStyle="rgba(255,255,255,0.9)",e.shadowColor="rgba(0,0,0,0.9)",e.shadowBlur=12,e.fillText(`${u}%`,t/2,i-32),e.shadowBlur=0,this.timeLeft>25&&(e.font=`bold ${Math.round(i*.03)}px system-ui`,e.fillStyle="rgba(255,255,255,0.85)",e.textAlign="center",e.fillText("🪣  Scrape away the plaster!",t/2,i/2))}roundRect(e,t,i,n,s,a){n<0||(e.beginPath(),e.moveTo(t+a,i),e.lineTo(t+n-a,i),e.quadraticCurveTo(t+n,i,t+n,i+a),e.lineTo(t+n,i+s-a),e.quadraticCurveTo(t+n,i+s,t+n-a,i+s),e.lineTo(t+a,i+s),e.quadraticCurveTo(t,i+s,t,i+s-a),e.lineTo(t,i+a),e.quadraticCurveTo(t,i,t+a,i),e.closePath())}drawToast(e,t,i){const n=Math.min(1,this.toastAlpha);e.save(),e.globalAlpha=n,e.fillStyle="rgba(0,0,0,0.7)",e.font=`bold ${Math.round(i*.035)}px system-ui`,e.textAlign="center";const s=this.toastMsg.split(`
`),a=Math.round(i*.045),r=s.length*a+24,l=i*.45-r/2,c=t*.85,d=(t-c)/2;this.roundRect(e,d,l,c,r,16),e.fill(),e.fillStyle="#fff",e.shadowColor="rgba(0,0,0,0.6)",e.shadowBlur=8,s.forEach((u,h)=>{e.fillText(u,t/2,l+22+h*a)}),e.restore()}finish(){if(this.done)return;this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.sctx&&this.scratch&&(this.revealed=Lc(this.sctx,this.scratch.width,this.scratch.height));const e=Math.round(this.revealed*100),t=Math.max(20,e),i=t/100,n=this.photo,s=v1(n.id),a=Hs().length,r=Yd();this.showResultScreen(t,n,s,a,r,i)}showResultScreen(e,t,i,n,s,a){const r=this.ctx,l=this.canvas;if(!r||!l)return;const c=l.width,d=l.height;r.clearRect(0,0,c,d),this.imgLoaded&&this.img&&this.img.naturalWidth>0?Dc(r,this.img,c,d):(r.fillStyle="#2a2a20",r.fillRect(0,0,c,d)),this.scratch&&r.drawImage(this.scratch,0,0),r.fillStyle="rgba(0,0,0,0.65)",r.fillRect(0,0,c,d);const u=e>=85?"#5EDB7D":e>=60?"#F7C948":"#F07070";r.font=`900 ${Math.round(d*.15)}px system-ui`,r.textAlign="center",r.fillStyle=u,r.shadowColor="rgba(0,0,0,0.8)",r.shadowBlur=20,r.fillText(`${e}%`,c/2,d*.35),r.font=`bold ${Math.round(d*.04)}px system-ui`,r.fillStyle="#fff",r.shadowBlur=10,r.fillText(`📸 ${t.name}`,c/2,d*.47);let h;s?h="🏆 FULL TEM COLLECTION!":i?h="✨ NEW PHOTO UNLOCKED!":h="Already in your collection",r.font=`bold ${Math.round(d*.032)}px system-ui`,r.fillStyle=s?"#FFD700":i?"#5EDB7D":"#aaa",r.shadowBlur=8,r.fillText(h,c/2,d*.56),r.font=`${Math.round(d*.026)}px system-ui`,r.fillStyle="rgba(255,255,255,0.75)",r.shadowBlur=4,r.fillText(`Collection: ${n} / ${xn.length}`,c/2,d*.64),r.shadowBlur=0;const f=s?"🏆 Full TEM Collection complete!":i?`📸 New photo unlocked: ${t.name}`:`${t.name} — already in collection`,g={score:e,qualityPct:a,message:f};setTimeout(()=>{var v;return(v=this.onComplete)==null?void 0:v.call(this,g)},2800)}unmount(){this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.rafId&&cancelAnimationFrame(this.rafId),this.canvas&&(this.canvas.removeEventListener("mousemove",this._onMouseMove),this.canvas.removeEventListener("mousedown",this._onMouseDown),this.canvas.removeEventListener("touchstart",this._onTouchStart),this.canvas.removeEventListener("touchmove",this._onTouchMove),this.canvas.removeEventListener("touchend",this._onTouchEnd),this.canvas.remove()),window.removeEventListener("mouseup",this._onMouseUp),this.canvas=null,this.ctx=null,this.scratch=null,this.sctx=null,this.container=null,this.onComplete=null,this.img=null}}const st=5,Po=8,Vt=Po*st,M1=[-8,8],Bc=20,vo=5.5,Fc=14,kc=11,Nc=4,Uc=-30,ln=.4,T1=2.1;class S1{constructor(){x(this,"overlay");x(this,"renderer");x(this,"scene");x(this,"camera");x(this,"rafId",0);x(this,"lastTs",0);x(this,"px",0);x(this,"py",0);x(this,"vx",0);x(this,"vy",0);x(this,"onGround",!1);x(this,"jumpsLeft",2);x(this,"climbPole",null);x(this,"swingBar",null);x(this,"swingAngle",0);x(this,"swingOmega",0);x(this,"char");x(this,"charGroup");x(this,"facingRight",!0);x(this,"platforms",[]);x(this,"poles",[]);x(this,"swingBars",[]);x(this,"globs",[]);x(this,"globSpawnTimer",3.5);x(this,"connTopX",0);x(this,"connTopDir",1);x(this,"CONN_TOP_SPD",2.8);x(this,"connTopMesh",null);x(this,"warnT",0);x(this,"warningEl",null);x(this,"throwCount",0);x(this,"bionichipActive",!1);x(this,"bionichipBurstLeft",0);x(this,"invincT",0);x(this,"CONNIE_TAUNTS",["🪣 Watch the silicone!","⚡ Metal hip, no miss!","🦾 Bionic arm activated!","💀 Duck, Jarrad!","🪣 Plasterin' from above!","😈 Try me, hardhat!"]);x(this,"BIONIC_WARNING","⚡⚡ BIONIC BURST!!");x(this,"heartsEl");x(this,"timerEl");x(this,"lives",3);x(this,"timer",120);x(this,"gameOver",!1);x(this,"delivered",!1);x(this,"keys",{left:!1,right:!1,up:!1,down:!1});x(this,"jumpTap",!1);x(this,"onCompleteFn")}start(e){this.onCompleteFn=e,this._createOverlay(),this._createScene(),this._buildBackground(),this._buildLevel(),this._buildHUD(),this._buildControls(),this.px=0,this.py=.5,this.lastTs=performance.now(),this.rafId=requestAnimationFrame(t=>this._loop(t))}_createOverlay(){this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position:fixed; inset:0; z-index:10000; overflow:hidden; touch-action:none;
      background:#87CEEB;
    `,document.body.appendChild(this.overlay)}_createScene(){const e=window.innerWidth,t=window.innerHeight,i=document.createElement("canvas");i.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;",this.overlay.appendChild(i),this.renderer=new Wr({canvas:i,antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setSize(e,t),this.renderer.shadowMap.enabled=!0,this.scene=new Xr,this.scene.background=new Se(8900331),this.scene.fog=new Wo(8900331,.018),this.camera=new Nt(44,e/t,.1,200),this.camera.position.set(0,12,26),this.camera.lookAt(0,10,0);const n=new $r(16777215,.6);this.scene.add(n);const s=new Qn(16775400,1.1);s.position.set(8,30,15),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),s.shadow.camera.near=.5,s.shadow.camera.far=120,s.shadow.camera.left=-20,s.shadow.camera.right=20,s.shadow.camera.top=55,s.shadow.camera.bottom=-5,this.scene.add(s);const a=new Qn(12638463,.4);a.position.set(-5,10,5),this.scene.add(a),this.char=new ts(Fi.Jarrad),this.charGroup=this.char.group,this.charGroup.scale.setScalar(1),this.scene.add(this.charGroup);const r=new ts(Fi.Connie);this.connTopMesh=r.group,this.connTopMesh.scale.setScalar(.85),this.connTopMesh.position.set(0,Vt+.5,.3),this.scene.add(this.connTopMesh);const l=new Nd(8930559,0,6);l.name="bionichipLight",this.connTopMesh.add(l)}_buildBackground(){const e=(n,s,a,r,l)=>{const c=new B(n,new $({color:s}));return c.position.set(a,r,l),c.receiveShadow=!0,this.scene.add(c),c};e(new mt(80,60),11589872,0,22,-12);const t=[[-14,10],[-10,14],[-6,8],[8,16],[12,11],[16,9]];for(const[n,s]of t)e(new Q(4,s,1),6975632,n,s/2-1,-9);const i=Vt+5;e(new Q(16,i,.6),15260864,0,i/2-1,-1.5),e(new Q(16.6,.5,.9),13945e3,0,i-1,-1.4),e(new Q(16,.4,.7),13681824,0,0,-1.4);for(let n=0;n<Po;n++){const s=n*st+2;for(const a of[-5.5,-1.8,1.8,5.5])e(new Q(2,2.8,.2),3359846,a,s,-1.1),e(new Q(1.8,.15,.25),12300432,a,s+1.5,-1.05)}e(new Q(24,.5,5),3815474,0,-.25,.5),e(new Q(14,.5,1.2),13154440,0,.25,1),e(new Q(14,1.2,.15),12101752,0,.6,1.57),e(new Q(.15,1.2,1.2),12101752,-7,.6,1),e(new Q(.15,1.2,1.2),12101752,7,.6,1)}_buildLevel(){for(const t of M1)this._addScaffoldPole(t,0,Vt+3),this.poles.push({x:t,y1:0,y2:Vt+3});for(const t of[-3.5,3.5])this._addScaffoldPole(t,0,Vt+3),this.poles.push({x:t,y1:0,y2:Vt+3});this._addScaffoldPole(-1,0,Vt+3),this._addScaffoldPole(1,0,Vt+3);for(let t=0;t<=Po;t++){const i=t*st;this._addTube(-8,8,i,10066346,.07)}for(let t=0;t<Po;t++){const i=t*st,n=(t+1)*st;this._addDiag(-8,i,8,n),this._addDiag(8,i,-8,n)}this._addPlat(-4.5,4.5,0,"normal"),this._addPlat(-7.5,-2.5,st*1,"normal"),this._addPlat(2.5,7.5,st*1,"normal"),this._addPlat(-7.5,-2,st*2,"crumble"),this._addPlat(3.5,7.5,st*2,"normal"),this._addPlat(-7.5,-4.5,st*3,"normal"),this._addPlat(-1.5,1.5,st*3,"moving"),this._addPlat(4.5,7.5,st*3,"normal"),this._addPlat(-7.5,-3.5,st*4,"crumble"),this._addPlat(4,7.5,st*4,"normal"),this._addPlat(-7.5,-5,st*5,"normal"),this._addPlat(-1.2,1.2,st*5+1,"moving"),this._addPlat(5,7.5,st*5,"crumble"),this._addPlat(-7.5,-5.5,st*6,"crumble"),this._addPlat(-2.5,2.5,st*6,"moving"),this._addPlat(5.5,7.5,st*6,"crumble"),this._addPlat(-7.5,-5,st*7,"crumble"),this._addPlat(5,7.5,st*7,"crumble"),this._addSwingBar(0,st*1+2.5,2.8),this._addSwingBar(0,st*3+2.5,2.8),this._addSwingBar(-4,st*5+2.5,2.2),this._addSwingBar(4,st*6+2.5,2.2),this._addPlat(-7.5,7.5,Vt,"win"),this._addSign(0,Vt+1.8,"⭐ DELIVER HERE ⭐",16746496),this._addBucket(-5,.8),this._addBucket(5,.8)}_addScaffoldPole(e,t,i){const n=i-t,s=new qe(.07,.07,n,8),a=new $({color:10526896}),r=new B(s,a);r.position.set(e,t+n/2,.3),r.castShadow=!0,this.scene.add(r);for(let l=t;l<=i;l+=st){const c=new ft(.12,6,5),d=new B(c,a);d.position.set(e,l,.3),this.scene.add(d)}}_addTube(e,t,i,n,s){const a=t-e,r=new qe(s,s,a,7),l=new $({color:n}),c=new B(r,l);c.rotation.z=Math.PI/2,c.position.set((e+t)/2,i,.3),this.scene.add(c)}_addDiag(e,t,i,n){const s=i-e,a=n-t,r=Math.sqrt(s*s+a*a),l=new qe(.04,.04,r,6),c=new $({color:8947872}),d=new B(l,c);d.rotation.z=Math.atan2(a,s)-Math.PI/2,d.position.set((e+i)/2,(t+n)/2,.3),this.scene.add(d)}_addPlat(e,t,i,n){const s=t-e,a={normal:9134608,moving:13918224,crumble:8939042,win:16763904}[n],r=new Q(s,.28,.8),l=new $({color:a}),c=new B(r,l);c.position.set((e+t)/2,i+.14,.3),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);for(let d=e+.6;d<t;d+=.9){const u=new Q(.06,.3,.82),h=new $({color:a-1118464}),f=new B(u,h);f.position.set(d-(e+t)/2,0,0),c.add(f)}this.platforms.push({x1:e,x2:t,y:i,mesh:c,type:n,moveDir:1,crumbleTimer:0,crumbled:!1})}_addSwingBar(e,t,i){const n=new qe(.09,.09,3,8),s=new $({color:16755200,emissive:8930304,emissiveIntensity:.5}),a=new B(n,s);a.rotation.z=Math.PI/2,a.position.set(e,t,.5),this.scene.add(a);const r=new ft(.22,8,8),l=new zt({color:16772608,transparent:!0,opacity:.7}),c=new B(r,l);c.position.set(e,t,.6),this.scene.add(c),this.swingBars.push({anchorX:e,anchorY:t,radius:i,mesh:a})}_addSign(e,t,i,n){const s=new Q(6,.8,.15),a=new $({color:n,emissive:n,emissiveIntensity:.3}),r=new B(s,a);r.position.set(e,t,.5),this.scene.add(r)}_addBucket(e,t){const i=new qe(.25,.2,.5,8),n=new $({color:12674667,emissive:6684689,emissiveIntensity:.3}),s=new B(i,n);s.position.set(e,t,.5),this.scene.add(s)}_spawnGlob(){const e=this.camera.position.y+11,t=Math.min(e,Vt),i=this.connTopX+(Math.random()-.5)*4,n=new ft(.85,10,10),s=new $({color:16737826,emissive:13382400,emissiveIntensity:.9}),a=new B(n,s);a.position.set(i,t,.5),a.castShadow=!0,this.scene.add(a);const r=new Zi(.6,1.1,20),l=new zt({color:16720384,transparent:!0,opacity:.75,side:Ut}),c=new B(r,l);c.rotation.x=-Math.PI/2,c.position.set(i,.3,.5),this.scene.add(c),this.globs.push({x:i,y:t,vx:(Math.random()-.5)*3.5,vy:-4,r:.85,mesh:a,shadowRing:c,dead:!1})}_buildHUD(){const e=document.createElement("div");e.style.cssText=`
      position:absolute; top:0; left:0; right:0; z-index:100;
      display:flex; justify-content:space-between; align-items:center;
      padding:14px 18px; font-family:system-ui,sans-serif; pointer-events:none;
    `,this.heartsEl=document.createElement("div"),this.heartsEl.style.fontSize="22px",this._updateHearts();const t=document.createElement("div");t.style.cssText=`
      background:rgba(0,0,0,0.55); color:#fff; padding:6px 14px;
      border-radius:20px; font-size:13px; font-weight:800; letter-spacing:1px;
    `,t.textContent="🏗️ SCAFFOLD CLIMB",this.timerEl=document.createElement("div"),this.timerEl.style.cssText=`
      background:rgba(0,0,0,0.55); color:#fff; padding:6px 14px;
      border-radius:20px; font-size:14px; font-weight:800; min-width:52px; text-align:center;
    `,e.appendChild(this.heartsEl),e.appendChild(t),e.appendChild(this.timerEl),this.overlay.appendChild(e),this.warningEl=document.createElement("div"),this.warningEl.style.cssText=`
      position:absolute; top:58px; left:50%; transform:translateX(-50%);
      background:rgba(200,0,0,0.85); color:#fff; padding:5px 18px;
      border-radius:16px; font-size:14px; font-weight:900; letter-spacing:1px;
      z-index:110; display:none; pointer-events:none;
    `,this.warningEl.textContent="🪣 Watch the silicone!",this.overlay.appendChild(this.warningEl)}_updateHearts(){this.heartsEl.textContent="❤️".repeat(this.lives)+"🖤".repeat(Math.max(0,3-this.lives))}_buildControls(){const e=document.createElement("div");e.style.cssText=`
      position:absolute; bottom:12px; left:0; right:0; z-index:100;
      display:flex; justify-content:space-between; align-items:flex-end;
      padding:0 20px 8px;
    `;const t=document.createElement("div");t.style.cssText="display:grid; grid-template-columns:70px 70px 70px; grid-template-rows:70px 70px; gap:6px;";const i=(g,v,m,p)=>{const b=document.createElement("div");return b.style.cssText=`
        grid-row:${m}; grid-column:${p};
        background:${v}; border-radius:50%; color:#fff;
        font-size:22px; display:flex; align-items:center; justify-content:center;
        box-shadow:0 4px 10px rgba(0,0,0,0.4); touch-action:none; user-select:none;
        cursor:pointer;
      `,b.textContent=g,b},n=i("▲","rgba(60,60,160,0.88)",1,2),s=i("◀","rgba(70,70,70,0.88)",2,1),a=i("▼","rgba(60,60,160,0.88)",2,2),r=i("▶","rgba(70,70,70,0.88)",2,3);t.appendChild(n),t.appendChild(s),t.appendChild(a),t.appendChild(r);const l=document.createElement("div");l.style.cssText=`
      width:92px; height:92px; border-radius:50%;
      background:rgba(30,180,30,0.9); color:#fff;
      font-size:13px; font-weight:900; letter-spacing:0.5px;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 5px 15px rgba(0,0,0,0.45); touch-action:none; user-select:none;
      cursor:pointer;
    `,l.textContent="JUMP";const c=(g,v,m)=>{g.addEventListener("touchstart",p=>{p.preventDefault(),v()},{passive:!1}),g.addEventListener("touchend",p=>{p.preventDefault(),m()},{passive:!1}),g.addEventListener("mousedown",v),g.addEventListener("mouseup",m)};c(s,()=>this.keys.left=!0,()=>this.keys.left=!1),c(r,()=>this.keys.right=!0,()=>this.keys.right=!1),c(n,()=>this.keys.up=!0,()=>this.keys.up=!1),c(a,()=>this.keys.down=!0,()=>this.keys.down=!1);const d=()=>{this.jumpTap=!0};l.addEventListener("touchstart",g=>{g.preventDefault(),d()},{passive:!1}),l.addEventListener("mousedown",d);const u={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down",KeyA:"left",KeyD:"right",KeyW:"up",KeyS:"down"},h=g=>{if(u[g.code]){const v=u[g.code];v==="jump"?this.jumpTap=!0:this.keys[v]=!0}(g.code==="Space"||g.code==="KeyZ")&&(this.jumpTap=!0)},f=g=>{const v=u[g.code];v&&v!=="jump"&&(this.keys[v]=!1)};window.addEventListener("keydown",h),window.addEventListener("keyup",f),this.overlay.addEventListener("remove",()=>{window.removeEventListener("keydown",h),window.removeEventListener("keyup",f)}),e.appendChild(t),e.appendChild(l),this.overlay.appendChild(e)}_loop(e){if(this.gameOver)return;this.rafId=requestAnimationFrame(i=>this._loop(i));const t=Math.min((e-this.lastTs)/1e3,.05);this.lastTs=e;try{this._update(t),this.renderer.render(this.scene,this.camera)}catch{}this.jumpTap=!1}_update(e){if(this.timer=Math.max(0,this.timer-e),this.timerEl.textContent=`⏱ ${Math.ceil(this.timer)}s`,this.timer<=0&&!this.delivered){this._end(!1);return}this.char.update(e);for(const i of this.platforms)if(i.type==="moving"&&(i.x1+=2.5*(i.moveDir??1)*e,i.x2+=2.5*(i.moveDir??1)*e,i.mesh.position.x=(i.x1+i.x2)/2,(i.x2>5.2||i.x1<-1.8)&&(i.moveDir=-(i.moveDir??1))),i.type==="crumble"&&!i.crumbled)if(this.onGround&&this.px>=i.x1-ln&&this.px<=i.x2+ln&&Math.abs(this.py-i.y)<.3){i.crumbleTimer=(i.crumbleTimer??0)+e;const s=Math.sin(i.crumbleTimer*40)*.06*Math.min(1,i.crumbleTimer);i.mesh.position.z=.3+s,i.crumbleTimer>1.2&&(i.crumbled=!0,i.mesh.visible=!1)}else(i.crumbleTimer??0)>0&&!i.crumbled&&(i.crumbleTimer=0);if(this.connTopX+=this.CONN_TOP_SPD*this.connTopDir*e,this.connTopX>6.5&&(this.connTopX=6.5,this.connTopDir=-1),this.connTopX<-6.5&&(this.connTopX=-6.5,this.connTopDir=1),this.connTopMesh){this.connTopMesh.position.x=this.connTopX,this.connTopMesh.rotation.y=this.connTopDir>0?-.2:Math.PI+.2;const i=this.connTopMesh.getObjectByName("bionichipLight");i&&(i.intensity=this.bionichipActive?2.5+Math.sin(performance.now()*.02)*1.5:0),this.bionichipActive&&(this.connTopX+=this.CONN_TOP_SPD*2.5*this.connTopDir*e)}if(this.globSpawnTimer-=e,this.globSpawnTimer<=1.5&&this.warningEl&&(this.warningEl.style.display="block"),this.globSpawnTimer<=0){this.throwCount++;const i=this.throwCount%4===0;this.warningEl&&(this.warningEl.style.display="none",this.warningEl.style.background="rgba(200,0,0,0.85)"),i?(this.bionichipActive=!0,this.bionichipBurstLeft=2,this._spawnGlob(),setTimeout(()=>{this.gameOver||this._spawnGlob()},250),setTimeout(()=>{this.gameOver||this._spawnGlob()},500),setTimeout(()=>{this.bionichipActive=!1},600)):this._spawnGlob();const n=Math.max(.55,this.timer/120);if(this.globSpawnTimer=(1.5+Math.random()*1.5)*n,this.warningEl)if(this.throwCount%4===3)this.warningEl.textContent=this.BIONIC_WARNING,this.warningEl.style.background="rgba(80,0,180,0.92)";else{const s=this.CONNIE_TAUNTS[Math.floor(Math.random()*this.CONNIE_TAUNTS.length)];this.warningEl.textContent=s,this.warningEl.style.background="rgba(200,0,0,0.85)"}}this.invincT>0?(this.invincT-=e,this.charGroup.visible=Math.sin(this.invincT*25)>0):this.charGroup.visible=!0;for(const i of this.globs)if(!i.dead){if(i.vy=Math.max(i.vy-Bc*e,Uc),i.x+=i.vx*e,i.y+=i.vy*e,i.mesh.position.set(i.x,i.y,.5),i.mesh.rotation.z+=4*e,i.shadowRing){const n=Math.max(0,Math.min(1,i.y/(Vt+5))),s=1+(1-n)*1.2,a=.4+(1-n)*.55;i.shadowRing.position.x=i.x,i.shadowRing.scale.setScalar(s),i.shadowRing.material.opacity=a}if(!this.delivered&&this.invincT<=0){const n=Math.abs(this.px-i.x),s=i.y-this.py;if(n<ln+i.r+.15&&s>-.5&&s<T1+i.r){if(i.dead=!0,this.scene.remove(i.mesh),this.scene.remove(i.shadowRing),this.lives--,this._updateHearts(),this.lives<=0){this._end(!1);return}this.vy=-18,this.vx=(this.px>i.x?1:-1)*5,this.onGround=!1,this.jumpsLeft=1,this.climbPole=null,this.swingBar=null,this.invincT=1.2;continue}}if(!i.dead){for(const n of this.platforms)if(!n.crumbled&&i.x>n.x1&&i.x<n.x2&&Math.abs(i.y-n.y)<.5&&i.vy<=0){i.dead=!0,this.scene.remove(i.mesh),this.scene.remove(i.shadowRing);break}!i.dead&&i.y<-2&&(i.dead=!0,this.scene.remove(i.mesh),this.scene.remove(i.shadowRing))}}this.globs=this.globs.filter(i=>!i.dead),this.swingBar?this._physicsSwing(e):this.climbPole?this._physicsClimb(e):this._physicsPlatform(e),this.charGroup.position.set(this.px,this.py,.3),this.charGroup.rotation.y=this.facingRight?-.15:Math.PI+.15;const t=Math.max(8,Math.min(this.py+6,Vt+2));if(this.camera.position.y+=(t-this.camera.position.y)*.07,this.camera.lookAt(0,this.camera.position.y-4,0),this.py<-3.5){this._loseLife();return}!this.delivered&&this.py>=Vt-.5&&Math.abs(this.px)<5&&(this.delivered=!0,this._end(!0))}_physicsPlatform(e){for(const t of this.poles)if(Math.abs(this.px-t.x)<.6&&this.py>=t.y1-.5&&this.py<=t.y2&&this.keys.up){this.climbPole=t,this.px=t.x,this.vx=0,this.vy=0,this.onGround=!1;return}if(this.onGround||(this.vy=Math.max(this.vy-Bc*e,Uc)),this.keys.left?(this.vx=-vo,this.facingRight=!1):this.keys.right?(this.vx=vo,this.facingRight=!0):this.vx*=.6,this.jumpTap)if(this.onGround)this.vy=Fc,this.onGround=!1,this.jumpsLeft=1;else if(this.jumpsLeft>0)this.vy=kc,this.jumpsLeft--;else for(const t of this.swingBars){const i=this.px-t.anchorX,n=this.py-t.anchorY,s=Math.sqrt(i*i+n*n);if(s<t.radius+1.5&&this.py<t.anchorY+.5){this.swingBar=t;const a=Math.max(s,t.radius);this.swingAngle=Math.atan2(i,-n),this.swingOmega=this.vx/a,this.vx=0,this.vy=0;return}}if(!this.onGround)for(const t of this.swingBars){const i=Math.abs(this.py-t.anchorY),n=Math.abs(this.px-t.anchorX);if(i<.6&&n<t.radius&&this.vy<0){this.swingBar=t,this.swingAngle=Math.atan2(this.px-t.anchorX,-(this.py-t.anchorY)),this.swingOmega=this.vx/t.radius,this.vx=0,this.vy=0;return}}this.px+=this.vx*e,this.py+=this.vy*e,this.px=Math.max(-8.2,Math.min(8.2,this.px)),this.onGround=!1;for(const t of this.platforms)if(!t.crumbled&&this.px+ln>t.x1&&this.px-ln<t.x2&&this.py>t.y-.5&&this.py<t.y+1&&this.vy<=0){this.py=t.y,this.vy=0,this.onGround=!0,this.jumpsLeft=2;break}}_physicsClimb(e){const t=this.climbPole;this.keys.up&&(this.py+=Nc*e),this.keys.down&&(this.py-=Nc*e);for(const i of this.platforms)if(!i.crumbled&&Math.abs(this.py-i.y)<.4&&this.px>=i.x1&&this.px<=i.x2){this.climbPole=null,this.py=i.y,this.onGround=!0,this.jumpsLeft=2;return}(this.py<t.y1||this.py>t.y2)&&(this.climbPole=null),this.jumpTap&&(this.climbPole=null,this.vy=Fc*.85,this.jumpsLeft=1,this.keys.left?(this.vx=-vo*1.3,this.facingRight=!1):this.keys.right&&(this.vx=vo*1.3,this.facingRight=!0))}_physicsSwing(e){const t=this.swingBar,i=t.radius;if(this.swingOmega+=-(9.8/i)*Math.sin(this.swingAngle)*e,this.keys.left&&(this.swingOmega-=4*e),this.keys.right&&(this.swingOmega+=4*e),this.swingOmega*=.993,this.swingAngle+=this.swingOmega*e,this.px=t.anchorX+i*Math.sin(this.swingAngle),this.py=t.anchorY-i*Math.cos(this.swingAngle),this.facingRight=this.swingOmega>0,this.jumpTap){this.swingBar=null;const n=this.swingOmega*i;this.vx=n*Math.cos(this.swingAngle)*1.4,this.vy=Math.max(kc*.75,Math.abs(n)*.8+4),this.jumpsLeft=1,this.onGround=!1}for(const n of this.platforms)!n.crumbled&&this.px+ln>n.x1&&this.px-ln<n.x2&&Math.abs(this.py-n.y)<.4&&this.swingOmega<1.5&&(this.swingBar=null,this.py=n.y,this.vx=0,this.vy=0,this.onGround=!0,this.jumpsLeft=2)}_loseLife(){if(this.lives--,this._updateHearts(),this.lives<=0){this._end(!1);return}const e=Math.max(0,Math.floor(this.py/st)-1);this.px=0,this.py=e*st,this.vx=0,this.vy=0,this.onGround=!1,this.jumpsLeft=2,this.climbPole=null,this.swingBar=null}_end(e){if(this.gameOver)return;this.gameOver=!0,cancelAnimationFrame(this.rafId);const t=e?1:-.3,i=document.createElement("div");i.style.cssText=`
      position:absolute; top:50%; left:50%; transform:translate(-50%,-55%);
      background:rgba(0,0,0,0.88); padding:32px 40px;
      border-radius:22px; font-size:26px; font-weight:900; text-align:center;
      font-family:system-ui,sans-serif; z-index:200;
      box-shadow:0 8px 32px rgba(0,0,0,0.6);
      border:2px solid ${e?"#FFD700":"#C1666B"};
      color: ${e?"#FFD97A":"#FF6B6B"};
    `,i.innerHTML=e?'🏆 DELIVERED!<br><small style="font-size:15px;font-weight:500;color:#ccc;">Full pay — nice work, Jarrad.</small>':`💀 SCAFFOLD FAIL<br><small style="font-size:15px;font-weight:500;color:#ccc;">−30% penalty. Jarrad's blaming his phone.</small>`,this.overlay.appendChild(i),setTimeout(()=>{const n={score:e?100:0,qualityPct:t,message:e?"Scaffold conquered!":"Scaffold failed — 30% deducted."};try{this._cleanup()}catch{}try{this.onCompleteFn(n)}catch{}},e?1800:2200)}_cleanup(){cancelAnimationFrame(this.rafId);for(const e of this.globs){try{this.scene.remove(e.mesh)}catch{}try{e.shadowRing&&this.scene.remove(e.shadowRing)}catch{}}this.globs=[],this.renderer.dispose(),this.overlay.dispatchEvent(new Event("remove")),this.overlay.remove()}mount(e,t){this.start(t)}unmount(){this.gameOver||(this.gameOver=!0,this._cleanup())}}class E1{constructor(){x(this,"overlay");x(this,"active",!1);x(this,"trowelingGame",null);x(this,"scaffoldGame",null);x(this,"safetyTimer",null);this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,t.addEventListener("click",()=>{this.stop(),e({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(t),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),e({score:70,qualityPct:.7,message:"Time up!"}))},6e4),setTimeout(()=>{if(this.active)try{this.trowelingGame=new w1,this.trowelingGame.mount(this.overlay,i=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),e(i)})}catch(i){console.error("TrowelingGame init failed:",i);const n=document.createElement("div");n.style.cssText=`
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
    `,t.addEventListener("click",()=>{this.stop(),e({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(t),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),e({score:50,qualityPct:.5,message:"Time up on the scaffold!"}))},9e4),setTimeout(()=>{if(this.active)try{this.scaffoldGame=new S1,this.scaffoldGame.mount(this.overlay,i=>{this.safetyTimer&&clearTimeout(this.safetyTimer);try{this.stop()}catch{this.active=!1}e(i)})}catch(i){console.error("ScaffoldGame init failed:",i);const n=document.createElement("div");n.style.cssText=`
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; height:100%; color:#fff;
          font-family:system-ui,sans-serif; gap:24px; padding:40px;
          text-align:center;
        `,n.innerHTML=`
          <div style="font-size:60px">🪣</div>
          <div style="font-size:30px; font-weight:800;">SCAFFOLD CLIMBED!</div>
          <div style="font-size:16px; opacity:0.7;">Tap DONE to collect your pay</div>
        `,this.overlay.appendChild(n)}},120)}startRandom(e){Math.random()<.5?this.startTroweling(e):this.startScaffold(e)}stop(){this.safetyTimer&&(clearTimeout(this.safetyTimer),this.safetyTimer=null),this.trowelingGame&&(this.trowelingGame.unmount(),this.trowelingGame=null),this.scaffoldGame&&(this.scaffoldGame.unmount(),this.scaffoldGame=null),this.overlay.style.display="none",this.overlay.innerHTML="",this.active=!1}}function jd(){return localStorage.getItem("tem-rush-btc-achieved")==="1"}function C1(o={}){const e=o.recipientName??"Apprentice Plasterer",t=o.dateStr??new Date().toLocaleDateString("en-AU",{day:"numeric",month:"long",year:"numeric"}),i=o.btcAchieved??jd(),n=900,s=i?820:640,a=document.createElement("canvas");a.width=n,a.height=s;const r=a.getContext("2d");r.fillStyle="#0D0B08",r.fillRect(0,0,n,s);const l=r.createLinearGradient(0,0,n,s);l.addColorStop(0,"rgba(40,32,20,0.95)"),l.addColorStop(.5,"rgba(28,22,14,0.98)"),l.addColorStop(1,"rgba(40,32,20,0.95)"),r.fillStyle=l,r.fillRect(0,0,n,s),r.strokeStyle="#C8A86A",r.lineWidth=3,r.strokeRect(18,18,n-36,s-36),r.strokeStyle="rgba(200,168,106,0.35)",r.lineWidth=1,r.strokeRect(26,26,n-52,s-52);const c=[[36,36],[n-36,36],[36,s-36],[n-36,s-36]];for(const[R,E]of c)r.strokeStyle="#C8A86A",r.lineWidth=1.5,r.beginPath(),r.arc(R,E,10,0,Math.PI*2),r.stroke(),r.beginPath(),r.arc(R,E,5,0,Math.PI*2),r.fillStyle="#C8A86A",r.fill();const d=n/2,u=74;r.fillStyle="#C8A86A",r.fillRect(d-3,u,6,22);for(let R=0;R<3;R++){const E=20-R*4,A=u-R*14;r.beginPath(),r.arc(d,A,E,0,Math.PI*2),r.fill()}r.textAlign="center",r.fillStyle="#C8A86A",r.font="700 11px 'Courier New', monospace",r.letterSpacing="4px",r.fillText("TROWELED EARTH MELBOURNE",n/2,148),r.fillStyle="rgba(200,168,106,0.45)",r.fillRect(n/2-180,158,360,1),r.fillStyle="#F0E8D8",r.font="900 34px system-ui, sans-serif",r.letterSpacing="0px",r.fillText("Certificate of Completion",n/2,200),r.fillStyle="rgba(200,168,106,0.45)",r.fillRect(n/2-220,214,440,1),r.fillStyle="rgba(240,232,216,0.55)",r.font="400 15px system-ui, sans-serif",r.fillText("This certifies that",n/2,258),r.fillStyle="#FFD97A",r.font="700 28px system-ui, sans-serif",r.fillText(e,n/2,300),r.fillStyle="rgba(200,168,106,0.45)",r.fillRect(n/2-200,312,400,1),r.fillStyle="rgba(240,232,216,0.55)",r.font="400 15px system-ui, sans-serif",r.fillText("has completed all TEM Rush training missions",n/2,348),r.fillText("and achieved full collection of Troweled Earth works.",n/2,372);const h=n/2-200,f=394,g=400,v=58;r.fillStyle="rgba(200,168,106,0.08)",r.strokeStyle="rgba(200,168,106,0.3)",r.lineWidth=1,r.beginPath(),r.roundRect(h,f,g,v,8),r.fill(),r.stroke(),r.fillStyle="#C8A86A",r.font="700 11px 'Courier New', monospace",r.letterSpacing="2px",r.fillText("QUALIFICATION",n/2,f+20),r.fillStyle="#F0E8D8",r.font="700 17px system-ui, sans-serif",r.letterSpacing="0px",r.fillText("TEM Rush — Plasterer's Apprentice",n/2,f+44);const m=n/2-160,p=466,b=320,M=52;r.fillStyle="rgba(193,102,107,0.15)",r.strokeStyle="rgba(193,102,107,0.5)",r.lineWidth=1.5,r.beginPath(),r.roundRect(m,p,b,M,8),r.fill(),r.stroke(),r.fillStyle="#C1666B",r.font="700 11px 'Courier New', monospace",r.letterSpacing="2px",r.fillText("5% OFF TEM STORE — USE CODE:",n/2,p+20),r.fillStyle="#FFD97A",r.font="900 20px system-ui, sans-serif",r.letterSpacing="3px",r.fillText("TEMRUSH5",n/2,p+41),r.letterSpacing="0px";const y=556;if(r.strokeStyle="rgba(200,168,106,0.4)",r.lineWidth=1,r.beginPath(),r.moveTo(n/2-260,y),r.lineTo(n/2-80,y),r.stroke(),r.beginPath(),r.moveTo(n/2+80,y),r.lineTo(n/2+260,y),r.stroke(),r.fillStyle="rgba(240,232,216,0.5)",r.font="400 12px system-ui, sans-serif",r.fillText("Matt Maloy",n/2-170,y+16),r.fillText(t,n/2+170,y+16),r.fillStyle="rgba(200,168,106,0.45)",r.font="400 10px 'Courier New', monospace",r.fillText("Director, Troweled Earth Melbourne",n/2-170,y+32),r.fillText("Date of Completion",n/2+170,y+32),r.fillStyle="rgba(200,168,106,0.06)",r.font="900 90px system-ui, sans-serif",r.save(),r.translate(n/2,s/2+20),r.rotate(-.18),r.fillText("CERTIFIED",0,0),r.restore(),i){r.strokeStyle="rgba(247,147,26,0.35)",r.lineWidth=1,r.beginPath(),r.moveTo(36,602),r.lineTo(n-36,602),r.stroke(),r.fillStyle="#F7931A",r.font="900 14px monospace",r.letterSpacing="2px",r.textAlign="center",r.fillText("₿  1 BITCOIN ACHIEVEMENT — BONUS REWARDS",n/2,624);const E=360,A=90,I=20,T=n/2-E-I/2,_=n/2+I/2,P=638,G=(U,O,W,j,K)=>{r.fillStyle="rgba(247,147,26,0.10)",r.strokeStyle="rgba(247,147,26,0.40)",r.lineWidth=1,r.beginPath(),r.roundRect(U,O,E,A,8),r.fill(),r.stroke(),r.textAlign="center",r.fillStyle="#F7931A",r.font="700 11px monospace",r.letterSpacing="1px",r.fillText(`${W}  ${j}`,U+E/2,O+22),r.fillStyle="rgba(240,232,216,0.5)",r.font="400 11px system-ui",r.letterSpacing="0px",r.fillText("USE CODE AT CHECKOUT:",U+E/2,O+46),r.fillStyle="#FFD97A",r.font="900 18px monospace",r.letterSpacing="2px",r.fillText(K,U+E/2,O+72)};G(T,P,"🎽","10% OFF TEM MERCH STORE","BTCPLASTER10"),G(_,P,"🪣","5% OFF MATERIAL SALES","BTCMAT5"),r.letterSpacing="0px",r.textAlign="center",r.fillStyle="rgba(200,168,106,0.4)",r.font="400 10px monospace",r.fillText("Present this certificate at participating TEM retail stores",n/2,746)}return a.toDataURL("image/png")}const A1="https://troweledearthmelbourne.com.au",Oc="TEMRUSH5",zc="tem-rush-cert-unlocked";class Ns{constructor(){x(this,"overlay",null);x(this,"certDataUrl",null)}static isUnlocked(){return localStorage.getItem(zc)==="1"}trigger(){localStorage.setItem(zc,"1"),this._show(!0)}open(){Ns.isUnlocked()&&this._show(!1)}_show(e){this.overlay&&(this.overlay.remove(),this.overlay=null),this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
        <a href="${A1}" target="_blank"
           style="color:#C8A86A; font-weight:700; text-decoration:none;">troweledearthmelbourne.com.au</a>
      </div>
      <div style="background:rgba(0,0,0,0.4); border:1px solid rgba(200,168,106,0.4); border-radius:10px;
                  padding:14px; text-align:center;">
        <div style="color:rgba(200,168,106,0.7); font-size:11px; letter-spacing:2px; margin-bottom:6px; font-family:monospace;">
          USE PROMO CODE AT CHECKOUT
        </div>
        <div style="color:#FFD97A; font-size:clamp(22px,7vw,32px); font-weight:900; letter-spacing:4px; font-family:monospace;">
          ${Oc}
        </div>
      </div>
      <button id="copy-code-btn" style="
        background:rgba(200,168,106,0.15); border:1px solid rgba(200,168,106,0.4);
        color:#C8A86A; font-size:13px; font-weight:700; border-radius:8px;
        padding:10px; cursor:pointer; touch-action:manipulation; width:100%;
      ">📋 Copy Code</button>
    `,t.appendChild(s),setTimeout(()=>{const l=document.getElementById("copy-code-btn");l&&l.addEventListener("click",()=>{var c;(c=navigator.clipboard)==null||c.writeText(Oc).then(()=>{l.textContent="✓ Copied!",setTimeout(()=>{l.textContent="📋 Copy Code"},2e3)})})},0);const a=document.createElement("div");a.style.cssText=`
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
    `;try{this.certDataUrl=C1({btcAchieved:jd()});const l=document.createElement("img");l.src=this.certDataUrl,l.style.cssText=`
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
    `;const i=document.createElement("button");i.textContent="✕ Close",i.style.cssText=`
      margin-top: 16px; background: rgba(255,255,255,0.1); border: none;
      color: #fff; font-size: 15px; font-weight: 700;
      border-radius: 8px; padding: 10px 24px; cursor: pointer;
      touch-action: manipulation;
    `,i.addEventListener("click",()=>e.remove()),e.addEventListener("click",n=>{n.target===e&&e.remove()}),e.appendChild(t),e.appendChild(i),document.body.appendChild(e)}_downloadCert(){if(!this.certDataUrl)return;const e=document.createElement("a");e.href=this.certDataUrl,e.download="TEM-Rush-Certificate.png",e.click()}_close(){this.overlay&&(this.overlay.remove(),this.overlay=null)}}class R1{constructor(){x(this,"overlay",null);x(this,"rewardScreen",new Ns)}show(){if(this.overlay){this.refresh(),this.overlay.style.display="flex";return}this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,this.overlay.appendChild(s);const a=document.createElement("div");a.id="gallery-encourage",a.style.cssText=`
      width: 100%; max-width: 600px;
      text-align: center;
      color: rgba(200,184,154,0.7);
      font-size: clamp(13px, 3vw, 16px);
      padding: 0 20px 40px;
      box-sizing: border-box;
    `,this.overlay.appendChild(a),this.overlay.addEventListener("click",r=>{r.target===this.overlay&&this.hide()}),document.body.appendChild(this.overlay),this.refresh()}refresh(){if(!this.overlay)return;const e=Hs(),t=e.length,i=xn.length,n=this.overlay.querySelector("#gallery-progress-wrap");if(n){n.innerHTML="";const r=document.createElement("div");r.style.cssText=`
        color: #fff; font-size: clamp(13px,3vw,16px);
        font-weight: 700; margin-bottom: 8px;
      `,r.textContent=t>=i?`🏆 FULL COLLECTION — ${t}/${i}`:`Collection: ${t} / ${i}`,n.appendChild(r);const l=document.createElement("div");l.style.cssText=`
        width: 100%; height: 10px; background: rgba(255,255,255,0.1);
        border-radius: 6px; overflow: hidden;
      `;const c=document.createElement("div");c.style.cssText=`
        height: 100%; border-radius: 6px;
        background: ${t>=i?"#FFD700":"#C8B89A"};
        width: ${Math.round(t/i*100)}%;
        transition: width 0.5s ease;
      `,l.appendChild(c),n.appendChild(l)}const s=this.overlay.querySelector("#gallery-grid");s&&(s.innerHTML="",xn.forEach(r=>{const l=e.includes(r.id),c=document.createElement("div");if(c.style.cssText=`
          border-radius: 12px; overflow: hidden;
          position: relative; aspect-ratio: 4/3;
          background: ${l?"#1a1a14":"rgba(255,255,255,0.04)"};
          border: 1.5px solid ${l?"rgba(200,184,154,0.4)":"rgba(255,255,255,0.08)"};
          box-shadow: 0 2px 12px rgba(0,0,0,0.5);
        `,l){const d=document.createElement("img");d.src=r.file,d.alt=r.name,d.style.cssText=`
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
          `,u.textContent=r.name,c.appendChild(u);const h=document.createElement("div");h.style.cssText=`
            position: absolute; top: 8px; right: 8px;
            font-size: 16px; opacity: 0.6; pointer-events: none;
          `,h.textContent="🔍",c.appendChild(h),c.style.cursor="pointer",c.addEventListener("click",()=>this._openLightbox(r.file,r.name)),c.addEventListener("mouseenter",()=>{d.style.filter="blur(0px) brightness(0.9)"}),c.addEventListener("mouseleave",()=>{d.style.filter="blur(1px) brightness(0.75)"})}else{const d=document.createElement("div");d.style.cssText=`
            width: 100%; height: 100%;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            gap: 8px;
          `,d.innerHTML=`
            <div style="font-size: clamp(24px,8vw,40px); opacity:0.35;">🔒</div>
            <div style="color:rgba(255,255,255,0.25); font-size:clamp(12px,3vw,16px); font-weight:700;">???</div>
          `,c.appendChild(d)}s.appendChild(c)}));const a=this.overlay.querySelector("#gallery-encourage");a&&(t>=i?(a.innerHTML=`
          <div style="margin-bottom:12px;">🏆 You've scraped them all. Matt's proud. Sort of.</div>
          <button id="gallery-rewards-btn" style="
            background: linear-gradient(135deg,#C8A86A,#A07840);
            color:#0D0B08; border:none; border-radius:12px;
            padding:14px 28px; font-size:15px; font-weight:900;
            cursor:pointer; touch-action:manipulation;
            letter-spacing:0.5px; box-shadow:0 4px 16px rgba(200,168,106,0.35);
          ">🎁 View Rewards &amp; Certificate</button>
        `,setTimeout(()=>{var r;(r=document.getElementById("gallery-rewards-btn"))==null||r.addEventListener("click",()=>{this.hide(),this.rewardScreen.open()})},0)):t>=6?a.textContent="🔥 Almost there — keep scraping!":t>=3?a.textContent="💪 Nice collection forming. More plastering to do!":t===0?a.textContent="🪣 No photos yet — complete jobs to reveal TEM work!":a.textContent="✨ Keep scraping to unlock all 8 TEM photos!")}_openLightbox(e,t){const i=document.createElement("div");if(i.style.cssText=`
      position: fixed; inset: 0; z-index: 30000;
      background: rgba(0,0,0,0.97);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      cursor: pointer; touch-action: manipulation;
      animation: lbFadeIn 0.2s ease;
    `,!document.getElementById("lb-styles")){const r=document.createElement("style");r.id="lb-styles",r.textContent=`
        @keyframes lbFadeIn { from { opacity:0; } to { opacity:1; } }
        @keyframes lbImgIn  { from { transform:scale(0.92); opacity:0; } to { transform:scale(1); opacity:1; } }
      `,document.head.appendChild(r)}const n=document.createElement("img");n.src=e,n.alt=t,n.style.cssText=`
      max-width: 100vw; max-height: 85vh;
      object-fit: contain; display: block;
      animation: lbImgIn 0.25s ease;
      border-radius: 4px;
    `,i.appendChild(n);const s=document.createElement("div");s.style.cssText=`
      color: rgba(200,184,154,0.85); font-size: 14px; font-weight: 700;
      margin-top: 16px; letter-spacing: 0.5px;
      font-family: system-ui, sans-serif;
    `,s.textContent=t,i.appendChild(s);const a=document.createElement("div");a.style.cssText=`
      color: rgba(255,255,255,0.3); font-size: 12px;
      margin-top: 10px; font-family: system-ui, sans-serif;
    `,a.textContent="Tap anywhere to close",i.appendChild(a),i.addEventListener("click",()=>i.remove()),document.body.appendChild(i)}hide(){this.overlay&&(this.overlay.style.display="none")}}const Gc=[16032353,15167313,2792847,2508371,15320170,11066076,16739179,7029286],P1=16767916,I1=40,Hc=8;function L1(o){const e=new Ge,t=new $({color:o}),i=new $({color:P1}),n=new $({color:o}),s=new B(new qe(.3,.35,1.1,7),t);s.position.set(0,.55,0),e.add(s);const a=new B(new ft(.28,6,5),i);a.position.set(0,1.28,0),e.add(a);const r=new B(new Q(.15,.65,.15),t);r.position.set(-.45,.75,0),r.rotation.z=.15,e.add(r);const l=new B(new Q(.15,.65,.15),t);l.position.set(.45,.75,0),l.rotation.z=-.15,e.add(l);const c=new B(new Q(.18,.55,.18),n);c.position.set(-.18,0,.05),e.add(c);const d=new B(new Q(.18,.55,.18),n);return d.position.set(.18,0,-.05),e.add(d),{group:e,leftArm:r,rightArm:l,leftLeg:c,rightLeg:d}}class D1{constructor(e){x(this,"pedestrians",[]);x(this,"scene");this.scene=e,this._spawn()}_spawn(){const e=[];for(let i=-200;i<=200;i+=40)e.push(i);const t=i=>{const n=Gc[Math.floor(Math.random()*Gc.length)],{group:s,leftArm:a,rightArm:r,leftLeg:l,rightLeg:c}=L1(n),d=e[Math.floor(Math.random()*e.length)],u=Math.random()>.5?5:-5,h=d+u,f=[];for(let R=-240;R<240;R+=40)f.push(R);const g=f[Math.floor(Math.random()*f.length)],v=g+Hc/2,m=g+I1-Hc/2,p=v+Math.random()*(m-v),b=Math.random()>.5?1:-1,M=2+Math.random()*1.5,y={group:s,axis:i,roadPos:h,segStart:v,segEnd:m,pos:p,dir:b,speed:M,scattering:!1,scatterTimer:0,scatterDirX:0,scatterDirZ:0,walkCycle:Math.random()*Math.PI*2,leftArm:a,rightArm:r,leftLeg:l,rightLeg:c};this.pedestrians.push(y),this.scene.add(s),this._applyPosition(y),this._applyFacing(y)};for(let i=0;i<20;i++)t("x");for(let i=0;i<20;i++)t("z")}_applyPosition(e){e.axis==="x"?e.group.position.set(e.pos,0,e.roadPos):e.group.position.set(e.roadPos,0,e.pos)}_applyFacing(e){if(e.scattering){e.group.rotation.y=Math.atan2(e.scatterDirX,e.scatterDirZ);return}e.axis==="x"?e.group.rotation.y=e.dir===1?-Math.PI/2:Math.PI/2:e.group.rotation.y=e.dir===1?Math.PI:0}update(e,t,i){for(const n of this.pedestrians){const s=n.group.position.x,a=n.group.position.z,r=s-t,l=a-i,c=Math.sqrt(r*r+l*l);if(!n.scattering&&c<7){n.scattering=!0,n.scatterTimer=2.5;const h=Math.max(c,.01);n.scatterDirX=r/h,n.scatterDirZ=l/h}n.scattering?(n.group.position.x+=n.scatterDirX*12*e,n.group.position.z+=n.scatterDirZ*12*e,n.scatterTimer-=e,n.scatterTimer<=0&&(n.scattering=!1,n.axis==="x"?n.pos=Math.max(n.segStart,Math.min(n.segEnd,n.group.position.x)):n.pos=Math.max(n.segStart,Math.min(n.segEnd,n.group.position.z)),this._applyPosition(n))):(n.pos+=n.dir*n.speed*e,n.pos>=n.segEnd?(n.pos=n.segEnd,n.dir=-1):n.pos<=n.segStart&&(n.pos=n.segStart,n.dir=1),this._applyPosition(n)),this._applyFacing(n);const d=n.scattering?12:n.speed;n.walkCycle+=d*e*2;const u=Math.sin(n.walkCycle);n.leftArm.rotation.z=u*.4+.15,n.rightArm.rotation.z=-u*.4-.15,n.leftLeg.rotation.x=u*.5,n.rightLeg.rotation.x=-u*.5}}}const Ri=class Ri{constructor(e){x(this,"indicator");x(this,"scene");x(this,"lastVisit",-30);this.scene=e,this.indicator=new B(new ft(1.5,10,8),new $({color:13918762,emissive:new Se(10498064),emissiveIntensity:.8})),this.indicator.position.set(Ri.POS.x,10,Ri.POS.z),this.scene.add(this.indicator)}update(e){this.indicator.position.y=10+Math.sin(Date.now()*.002)*.5,this.indicator.rotation.y+=e*1.5}isNearby(e,t){const i=e-Ri.POS.x,n=t-Ri.POS.z;return Math.sqrt(i*i+n*n)<Ri.TRIGGER_RADIUS}tryVisit(e,t){if(!this.isNearby(e,t))return!1;const i=Date.now()/1e3;return i-this.lastVisit<20?!1:(this.lastVisit=i,!0)}};x(Ri,"POS",{x:-60,z:-100}),x(Ri,"TRIGGER_RADIUS",12);let Rr=Ri;class B1{constructor(){x(this,"level",0);x(this,"isUrgent",!1);x(this,"lastUrgentToast",0);x(this,"caffeinated",!1);x(this,"caffeineTimer",0)}update(e,t){this.caffeinated&&(this.caffeineTimer-=e,this.caffeineTimer<=0&&(this.caffeinated=!1));const i=this.caffeinated?.018:.012;Math.abs(t)>2?this.level=Math.min(1,this.level+e*i):this.level=Math.max(0,this.level-e*.005),this.isUrgent=this.level>.8}drinkCoffee(){this.level=Math.min(1,this.level+.4),this.caffeinated=!0,this.caffeineTimer=30,this.isUrgent=this.level>.8}tryRelief(e,t){const i=e-100,n=t-60;return Math.sqrt(i*i+n*n)>14||this.level===0?!1:(this.level=0,this.isUrgent=!1,this.caffeinated=!1,this.caffeineTimer=0,!0)}get spillMultiplier(){return this.isUrgent?1.8:1}}const bs={x:30,z:28},Vc=["Got a dollar, mate? 💸","You got a light? 🚬","Nice van. Does it leak?","My brother Jarrad says I'm not qualified. He's right but I don't like it.","These boots were not made for plastering. Yet here we are.","Jump in? No seriously, I need a lift.","Jarrad says he's read the TDS. He hasn't. I've lived with him.","You look like you need a coffee and a toilet. In that order.","Phil owes me fifty bucks. Pass it on.","I plastered that wall. Don't tell Jarrad.","Matt left the primer lid off again. Just letting you know."],Ps=class Ps{constructor(e){x(this,"wrapper");x(this,"character");x(this,"ropeRing");x(this,"ropePivot");x(this,"lastDialogue",0);x(this,"cooldown",9e3);this.character=new ts(Fi.Mikayla),this.character.group.scale.set(2,2,2);const t=this.character.buildJumpRopeClip();this.character.mixer.stopAllAction(),this.character.mixer.clipAction(t).play(),this.ropePivot=new Ge,this.ropePivot.position.set(0,1.3,0),this.ropePivot.rotation.y=Math.PI/2,this.character.group.add(this.ropePivot),this.ropeRing=new B(new Xo(1.35,.05,7,28),new $({color:8079902})),this.ropePivot.add(this.ropeRing);const i=this._makeNameBoard();i.position.set(0,8.8,0);const n=new B(new Zi(1.2,1.7,32),new zt({color:14501e3,side:Ut}));n.rotation.x=-Math.PI/2,n.position.y=.05,this.wrapper=new Ge,this.wrapper.add(this.character.group),this.wrapper.add(i),this.wrapper.add(n),this.wrapper.position.set(bs.x,0,bs.z),e.add(this.wrapper)}_makeNameBoard(){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d");t.fillStyle="rgba(190, 40, 90, 0.88)",t.roundRect?t.roundRect(2,2,252,60,8):t.rect(2,2,252,60),t.fill(),t.fillStyle="#fff",t.font="bold 30px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("MIKAYLA",128,32);const i=new zs(e);return new B(new mt(2.4,.6),new zt({map:i,transparent:!0,depthWrite:!1}))}update(e,t,i,n){this.character.update(e),this.ropeRing.rotation.z+=e*(2*Math.PI/Hd);const s=t-bs.x,a=i-bs.z;this.character.group.rotation.y=Math.atan2(s,a);const r=Math.sqrt(s*s+a*a),l=Date.now();if(r<Ps.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=Vc[Math.floor(Math.random()*Vc.length)];return n.show(Fi.Mikayla,c),this.lastDialogue=l,!0}return!1}dispose(e){e.remove(this.wrapper)}};x(Ps,"POS",bs),x(Ps,"TRIGGER_RADIUS",15);let pn=Ps;const ws={x:-4,z:-6},Wc=["Ha ha ha HA HA! You picked up ze buckets! Love it!","I mix ze plaster by hand. Za gloves are for ze weak.","In Germany, zis would be a warm-up. But I like Australia. Ze mud here is good.","I have mud wrestled ze entire Brunswick football club. Zey lost. Badly.","Ze mixing ratio is one part water, two parts product, one part pure power.","Last Saturday I wrestled a man twice my size. Sunday I mixed 50 buckets. Your turn.","Don't let ze hair fool you. I once arm wrestled Phil. He is still talking about it.","Ha HA! You are funny. Not as funny as ze last guy. But funny."],Is=class Is{constructor(e){x(this,"wrapper");x(this,"character");x(this,"lastDialogue",0);x(this,"cooldown",1e4);x(this,"audioCtx",null);this.character=new ts(Fi.Connie),this.character.group.scale.set(2,2.35,2);const t=new $({color:15789544}),i=new B(new ft(.16,8,6),t);i.position.set(-.12,1.55,.19);const n=new B(new ft(.16,8,6),t);n.position.set(.12,1.55,.19),this.character.group.add(i),this.character.group.add(n),this.character.setLogoTexture(Od(Fi.Connie.shirtColor));const s=this._makeNameBoard();s.position.set(0,8.8,0);const a=new B(new Zi(1.2,1.7,32),new zt({color:16109664,side:Ut}));a.rotation.x=-Math.PI/2,a.position.y=.05,this.wrapper=new Ge,this.wrapper.add(this.character.group),this.wrapper.add(s),this.wrapper.add(a),this.wrapper.position.set(ws.x,0,ws.z),e.add(this.wrapper)}_makeNameBoard(){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d");return t.fillStyle="rgba(200, 150, 20, 0.88)",t.roundRect?t.roundRect(2,2,252,60,8):t.rect(2,2,252,60),t.fill(),t.fillStyle="#fff",t.font="bold 30px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("CONNIE",128,32),new B(new mt(2.4,.6),new zt({map:new zs(e),transparent:!0,depthWrite:!1}))}playLaugh(){try{this.audioCtx||(this.audioCtx=new(window.AudioContext||window.webkitAudioContext));const e=this.audioCtx,t=7;for(let i=0;i<t;i++){const n=e.currentTime+i*.16,s=e.createOscillator(),a=e.createGain(),r=480+i*18+Math.random()*60;s.frequency.setValueAtTime(r,n),s.frequency.exponentialRampToValueAtTime(r*.48,n+.13),a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.35,n+.03),a.gain.exponentialRampToValueAtTime(.001,n+.15),s.connect(a),a.connect(e.destination),s.start(n),s.stop(n+.17)}}catch{}}update(e,t,i,n){this.character.update(e);const s=t-ws.x,a=i-ws.z;this.character.group.rotation.y=Math.atan2(s,a);const r=Math.sqrt(s*s+a*a),l=Date.now();if(r<Is.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=Wc[Math.floor(Math.random()*Wc.length)];return n.show(Fi.Connie,c),this.lastDialogue=l,!0}return!1}dispose(e){var t;e.remove(this.wrapper),(t=this.audioCtx)==null||t.close()}};x(Is,"POS",ws),x(Is,"TRIGGER_RADIUS",16);let Rs=Is;const F1={Connie:{scale:[2,2.35,2],addGeometry:o=>{const e=new $({color:15789544}),t=new B(new ft(.16,8,6),e);t.position.set(-.12,1.55,.19);const i=new B(new ft(.16,8,6),e);i.position.set(.12,1.55,.19),o.add(t),o.add(i)}},Mikayla:{scale:[1.9,1.9,1.9]}};class k1{constructor(){x(this,"renderer");x(this,"scene");x(this,"camera");x(this,"canvas");x(this,"cache",new Map);this.canvas=document.createElement("canvas"),this.canvas.width=160,this.canvas.height=160,this.renderer=new Wr({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(160,160),this.renderer.setClearColor(0,0),this.scene=new Xr;const e=new $r(16777215,.7);this.scene.add(e);const t=new Qn(16774624,1);t.position.set(2,4,5),this.scene.add(t);const i=new Qn(14741759,.4);i.position.set(-3,2,3),this.scene.add(i),this.camera=new Nt(38,1,.1,100),this.camera.position.set(1.2,5,5.5),this.camera.lookAt(.1,3.8,0)}renderPortrait(e){var c;if(this.cache.has(e.name))return this.cache.get(e.name);this.scene.children.filter(d=>!(d instanceof Gs)).forEach(d=>this.scene.remove(d));const i=F1[e.name],n=new ts(e),[s,a,r]=(i==null?void 0:i.scale)??[2,2,2];n.group.scale.set(s,a,r),n.group.rotation.y=-Math.PI*.18,(c=i==null?void 0:i.addGeometry)==null||c.call(i,n.group),this.scene.add(n.group),this.renderer.render(this.scene,this.camera);const l=this.canvas.toDataURL("image/png");return this.cache.set(e.name,l),this.scene.remove(n.group),l}dispose(){this.renderer.dispose()}}class N1{constructor(){x(this,"container");x(this,"portrait");x(this,"nameEl");x(this,"textEl");x(this,"portraitRenderer");x(this,"hideTimeout",null);x(this,"visible",!1);this.portraitRenderer=new k1,this._injectStyles(),this._buildDOM()}_injectStyles(){if(document.getElementById("speech-bubble-styles"))return;const e=document.createElement("style");e.id="speech-bubble-styles",e.textContent=`
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
    `,document.head.appendChild(e)}_buildDOM(){this.container=document.createElement("div"),this.container.id="tem-speech-bubble";const e=document.createElement("div");e.className="sb-portrait-wrap",this.portrait=document.createElement("img"),this.portrait.className="sb-portrait-img",e.appendChild(this.portrait);const t=document.createElement("div");t.className="sb-text-area",this.nameEl=document.createElement("span"),this.nameEl.className="sb-name",this.textEl=document.createElement("span"),this.textEl.className="sb-text",t.appendChild(this.nameEl),t.appendChild(this.textEl),this.container.appendChild(e),this.container.appendChild(t),document.body.appendChild(this.container)}show(e,t){this.nameEl.textContent=e.name,this.textEl.textContent=t,this.portrait.src=this.portraitRenderer.renderPortrait(e),this.container.style.display="flex",requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.container.classList.add("sb-visible")})}),this.visible=!0,this.hideTimeout!==null&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(()=>this.hide(),1e4)}setScreenPosition(e,t){this.container.style.left=`${e}px`,this.container.style.top=`${t}px`}hide(){this.container.classList.remove("sb-visible"),this.visible=!1,setTimeout(()=>{this.visible||(this.container.style.display="none")},220)}isVisible(){return this.visible}dispose(){this.portraitRenderer.dispose(),document.body.removeChild(this.container)}}const Ms=15;class U1{constructor(){x(this,"overlay");x(this,"titleEl");x(this,"bodyEl");x(this,"sloganEl");x(this,"hintEl");x(this,"progressBar");x(this,"_active",!1);x(this,"_readyToResume",!1);x(this,"_resumeCallback",null);x(this,"_lockTimer",null);x(this,"_countdownInterval",null);x(this,"_autoTimer",null);x(this,"_secondsLeft",Ms);if(!document.getElementById("dp-styles")){const r=document.createElement("style");r.id="dp-styles",r.textContent=`
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
    `;const a=document.createElement("div");a.style.cssText=`
      color: rgba(193,102,107,0.75);
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      padding: 10px 0 16px;
      letter-spacing: 0.6px;
      animation: dpBlink 1.2s ease-in-out infinite;
    `,a.textContent="▶  TAP GAS or REV to skip",t.appendChild(this.titleEl),t.appendChild(i),s.appendChild(this.bodyEl),e.appendChild(t),e.appendChild(n),e.appendChild(s),e.appendChild(this.sloganEl),e.appendChild(a),this.overlay.appendChild(e),document.body.appendChild(this.overlay),this.overlay.addEventListener("touchstart",r=>{r.preventDefault(),this.tryResume()},{passive:!1}),this.overlay.addEventListener("click",()=>this.tryResume())}show(e,t,i,n,s){this._clearTimers(),this._active=!0,this._readyToResume=!1,this._resumeCallback=i,this._secondsLeft=Ms,this.titleEl.textContent=e,this.bodyEl.textContent=t,this.sloganEl.textContent=n??"",this.sloganEl.style.display=n?"block":"none",this.hintEl.textContent=String(Ms),this.overlay.style.display="flex",this.progressBar.style.transition="none",this.progressBar.style.width="100%",this.progressBar.offsetWidth,this.progressBar.style.transition=`width ${Ms}s linear`,this.progressBar.style.width="0%",this._lockTimer=setTimeout(()=>{this._readyToResume=!0},380),this._countdownInterval=setInterval(()=>{this._secondsLeft=Math.max(0,this._secondsLeft-1),this.hintEl.textContent=String(this._secondsLeft)},1e3),this._autoTimer=setTimeout(()=>{this._forceResume()},Ms*1e3)}tryResume(){!this._active||!this._readyToResume||this._doResume()}_forceResume(){this._active&&this._doResume()}_doResume(){this._active=!1,this._readyToResume=!1,this.overlay.style.display="none",this._clearTimers();const e=this._resumeCallback;this._resumeCallback=null,e==null||e()}_clearTimers(){this._lockTimer&&(clearTimeout(this._lockTimer),this._lockTimer=null),this._autoTimer&&(clearTimeout(this._autoTimer),this._autoTimer=null),this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}get isActive(){return this._active}}const yo=[`Our finishes don't copy the earth.
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
We're on our way.`],Ia=["DRIVING TIP: The spill meter doesn't care about your excuses. Neither does the road.","DRIVING TIP: Traffic in Melbourne has never once moved for a plastering van. You are not the exception.","DRIVING TIP: Hitting a car at speed is, technically, texture development. We do not recommend it.","DRIVING TIP: The crew will comment on your driving. They are not wrong.","DRIVING TIP: Every bump is just the plaster finding its character. That's what you're telling yourself.","CREW TIP: Tsuyoshi once vaulted into a moving van. He's done it again. You weren't watching.","CREW TIP: Phil will finish his tea before he gets in. Always. Plan for this.","CREW TIP: Jose was ready before you left the workshop. He's been ready since Tuesday.","CREW TIP: Jarrad has been standing there fifteen minutes. He will mention it.","CREW TIP: Fabio is smiling. He's also judging your gearwork. Smile back.","CLIENT TIP: Brad has never been to Europe. The wall will be 'very European' regardless.","CLIENT TIP: Darren is stressed. Darren is always stressed. The wall is fine. Darren is not.","CLIENT TIP: Patricia has read the full TDS. She's highlighted it. She will quiz you.","CLIENT TIP: Zephyr tried to do it himself. You're not here to judge. You are here to fix it.","CLIENT TIP: Mustafa's health inspector doesn't ask questions. You shouldn't either.","HEALTH TIP: Coffee steadies the trowel. What it does to the bladder is your problem.","HEALTH TIP: The toilet block is 100 metres east of the intersection. You know this now.","HEALTH TIP: Hydration is important. Timing is more important.","HEALTH TIP: The barista knows your order. So does your bladder.","BUSINESS TIP: TEM has been in business since before your GPS was a thing. Follow the waypoint anyway.","BUSINESS TIP: Quality render takes time. So does finding parking. Plan accordingly.","BUSINESS TIP: A finish that breathes with the wall is worth more than one that cracks by Thursday. Ask Zephyr.","BUSINESS TIP: Authenticity cannot be rushed. Darren is rushing you. Do your best.","The road to perfection runs through three crew pickups, a coffee stop, and a very urgent toilet.","Connie has seen everything. She is still laughing.","The van has been in worse situations. The plaster has not.","This city has 240 square units of roads and exactly one decent flat white. Find it.",`The walls remember every hand that shaped them.
The van remembers nothing. Drive carefully.`],O1=["One wall. One chance. The render decides everything.","A surface waiting to become something real.","From bare substrate to finished art — this is the job.",`The craft doesn't care about the deadline.
You do. Get there.`,"Clients don't buy plaster. They buy the moment the wall changes everything.",`Not every wall gets a second coat.
This one does. Make it count.`,"The difference between ordinary and extraordinary is one hand-applied layer.","Somewhere between the bucket and the wall, something real happens.",`They called TEM because they want it done right.
Don't prove them wrong.`,"This isn't a wall. It's a surface waiting to breathe."];function Yi(o){return o[Math.floor(Math.random()*o.length)]}const ri="./",Zt={theme:`${ri}audio/theme.aac`,theme2:`${ri}audio/theme2.aac`,credits:`${ri}audio/credits.m4a`,radio1:`${ri}audio/radio1.m4a`,radio2:`${ri}audio/radio2.m4a`,radio3:`${ri}audio/radio3.m4a`,radio4:`${ri}audio/theme.m4a`,radio5:`${ri}audio/radio5.m4a`,radio6:`${ri}audio/radio6.aac`,radio7:`${ri}audio/radio7.aac`,radio8:`${ri}audio/radio8.m4a`},cn=[{id:"tem-fm",name:"TEM FM",freq:"88.3",tagline:"Melbourne's Most Refined",songs:["★ Troweled Earth (The Anthem) [LIVE]","Fresh Plaster Dreams","Tadelakt Sunrise","Ochre & Ochre","Marbellino Midnight","Render Slowly (feat. Phil)"],dj:["TEM FM — opening tonight with the anthem. Turn it up.","That was Troweled Earth — The Anthem. Written on site, finished in the van.","You're listening to TEM FM. Don't spill.","Smooth surfaces. Smoother sounds. TEM FM 88.3.","That was a certified classic. Like a three-coat stucco system.","Blood red clay to concrete's cold embrace... TEM FM."],bpm:68,rootHz:220,vibe:"ambient",color:"#C8A86A",audioFile:Zt.theme},{id:"connie-gold",name:"CONNIE'S GOLD",freq:"103.7",tagline:"For the Craft, Darling",songs:["Quando Quando Quando (In the Van)","Bella Ciao Bella Render","Volare Trowel","Arrivederci Deadline","O Sole Mio Stucco"],dj:["Ehhhh — welcome to Connie's Gold! Ha ha ha ha!","You're listening to the best station. Connie said so. She's right.","Connie's Gold 103.7 — music to plaster by, darling.","Next up: another classic. Just like our Antique Stucco. Ha!"],bpm:92,rootHz:261.63,vibe:"italian",color:"#E8A050"},{id:"brunswick-beats",name:"BRUNSWICK BEATS",freq:"99.9",tagline:"Lo-Fi for Lo-Fi People",songs:["study playlist #47","plaster & chill","waiting for jarrad (again)","lost my trowel","bladder full, waypoint far"],dj:["Brunswick Beats. For people who get it.","That was a vibe. This is also a vibe. 99.9.","We don't talk. We just play the music. Brunswick Beats.","Jarrad submitted this playlist. He says it slaps. It does."],bpm:80,rootHz:196,vibe:"lofi",color:"#8B9EC8",audioFile:Zt.radio2},{id:"the-scaffold",name:"THE SCAFFOLD",freq:"107.1",tagline:"Tune In, Fall Off",songs:["30% Penalty (Acoustic)","Epstein Was Right (Radio Edit)","Topknot Thunder","Hard Hat? Never Heard of Her","Five Floors No Fear"],dj:["THE SCAFFOLD. 107.1. You WILL survive the jump.","That riff goes harder than Tsuyoshi vaulting the van door.","Tune in. Fall off. THE SCAFFOLD.","Jarrad called in. Said he's been waiting fifteen minutes. Legend."],bpm:140,rootHz:164.81,vibe:"rock",color:"#C1666B"},{id:"fabio-pizza",name:"FABIO'S PIZZA RADIO",freq:"92.5",tagline:"Music for Real Men",songs:['Ehhhh (12" Extended Mix)',"San Marzano Morning","La Dolce Trowel","One Slice, Two Slice","Thin Base, Wood Fire (feat. Fabio)"],dj:["Fabio's Pizza Radio — ehhhh. That is all.","You're listening to 92.5. The pizza is coming. Be patient. Ehhhh.","That song — like a perfect margherita. Simple. Honest. Ehhhh.","Fabio's Pizza Radio. For men with trowels and good taste."],bpm:108,rootHz:246.94,vibe:"italian",color:"#D4602A",audioFile:Zt.radio3},{id:"jarrad-fm",name:"JARRAD FM",freq:"105.9",tagline:"He's Running Late But He's Here",songs:["★ Five Floors No Fear [Radio Cut]","Topknot Thunder","Scaffold or Die","Left My Phone on Level 4","Running Late (Again)"],dj:["Jarrad FM 105.9 — yeah nah yeah nah yeah.","That was Jarrad. He submitted it from the scaffold. Mid-climb.","105.9 — for the ones who take the stairs AND the poles.","Jarrad called in. Said he's almost there. That was 40 minutes ago."],bpm:128,rootHz:174.61,vibe:"rock",color:"#E8A830",audioFile:Zt.radio8},{id:"tsuyoshi-fm",name:"TSUYOSHI FM",freq:"104.5",tagline:"Precision. Focus. Plaster.",songs:["★ Five Coat Finish [Live Session]","Venetian Nights","Tadelakt & Silence","The Quiet Climb","Zero Defects (feat. Tsuyoshi)"],dj:["Tsuyoshi FM 104.5 — play it perfectly or don't play it.","That was flawless. Like Tsuyoshi's tadelakt. 104.5.","No mistakes. No shortcuts. Tsuyoshi FM.","You are listening to the most precise station in Melbourne."],bpm:76,rootHz:220,vibe:"lofi",color:"#78C8A8",audioFile:Zt.radio7},{id:"warlord-sessions",name:"WARLORD SESSIONS",freq:"101.5",tagline:"Deep Cuts from the Site",songs:["★ The Warlord Method [Extended Mix]","Forty Coats, One Wall","Blood Red Clay (Long Version)","Marbellino Deep Session","The Matt Maloy Experience"],dj:["Warlord Sessions 101.5 — long-form. No fillers.","You're in deep now. Warlord Sessions.","Matt approved this personally. Says it captures the vibe.","101.5 — for the ones who stay on site after dark."],bpm:72,rootHz:207.65,vibe:"ambient",color:"#A07840",audioFile:Zt.radio6},{id:"joses-mix",name:"JOSE'S MIX",freq:"96.1",tagline:"From the Van. For the Van.",songs:["★ Late Night Render [LIVE]","BTC Stack (Instrumental)","Marbellino Midnight Run","Van Life Vol. II","Gold Sky Reprise"],dj:["Jose's Mix 96.1 — playing what Jose wants, when Jose wants.","You're listening to the only station that matters. 96.1.","That was a banger. Jose approved it personally.","No requests. Jose already chose the perfect song."],bpm:95,rootHz:233.08,vibe:"electronic",color:"#FFD700",audioFile:Zt.radio5},{id:"tem-talk",name:"TEM TALK",freq:"91.1",tagline:"Conversations From the Site",songs:["★ The Troweled Earth Podcast [LIVE]","Deep Dive: Blood Red Clay vs Venetian","Interview: Matt on the Warlord Method","Ask Connie — Running a Crew in Melbourne","Five Years of Tadelakt with Tsuyoshi"],dj:["TEM Talk 91.1 — real conversations from the trade.","You're listening to Melbourne's only plastering podcast. TEM Talk.","That was a conversation worth replaying. 91.1 FM.","Next up: more from the TEM crew. Stick around."],bpm:70,rootHz:180,vibe:"ambient",color:"#90B0C0",audioFile:Zt.theme2}];class z1{constructor(){x(this,"ctx",null);x(this,"masterGain");x(this,"scheduleAhead",.1);x(this,"scheduleInterval",.05);x(this,"nextBeatTime",0);x(this,"beatCount",0);x(this,"currentStation",null);x(this,"nodes",[]);x(this,"schedulerTimer",0);x(this,"compressor");x(this,"realAudioEl",null);x(this,"realAudioActive",!1)}init(){try{return this.ctx=new(window.AudioContext||window.webkitAudioContext),this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.ratio.value=4,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.18,this.masterGain.connect(this.compressor),this.compressor.connect(this.ctx.destination),!0}catch{return!1}}setVolume(e){this.masterGain&&(this.masterGain.gain.value=e),this.realAudioEl&&(this.realAudioEl.volume=Math.min(1,e*4))}play(e){var t;if(this.stop(),this.currentStation=e,this.beatCount=0,e.audioFile){const i=Math.min(1,(((t=this.masterGain)==null?void 0:t.gain.value)??.18)*4.5),n=new Audio;n.src=e.audioFile,n.loop=!0,n.volume=i;const s=n.play();s!==void 0?s.then(()=>{this.realAudioEl=n,this.realAudioActive=!0}).catch(()=>{this.realAudioActive=!1,this._startGenerative()}):(this.realAudioEl=n,this.realAudioActive=!0)}else this._startGenerative()}_startGenerative(){!this.ctx||!this.currentStation||(this.ctx.state==="suspended"&&this.ctx.resume(),this.nextBeatTime=this.ctx.currentTime+.05,this.schedulerTimer=window.setInterval(()=>this._schedule(),this.scheduleInterval*1e3))}stop(){clearInterval(this.schedulerTimer),this.nodes.forEach(e=>{var t;try{(t=e.stop)==null||t.call(e),e.disconnect()}catch{}}),this.nodes=[],this.currentStation=null,this.realAudioEl&&(this.realAudioEl.pause(),this.realAudioEl.src="",this.realAudioEl=null),this.realAudioActive=!1}_schedule(){if(!this.ctx||!this.currentStation)return;const e=this.ctx.currentTime+this.scheduleAhead;for(;this.nextBeatTime<e;){this._scheduleBeat(this.nextBeatTime,this.beatCount,this.currentStation);const t=this.currentStation.bpm/60;this.nextBeatTime+=1/t,this.beatCount++}}_scheduleBeat(e,t,i){const n=Math.floor(t/4),s=t%4,a=i.rootHz;switch(i.vibe){case"ambient":this._ambientBeat(e,t,a);break;case"lofi":this._lofiBeat(e,s,a);break;case"rock":this._rockBeat(e,s,n,a);break;case"italian":this._italianBeat(e,s,n,a);break;case"electronic":this._electronicBeat(e,s,a);break}}_ambientBeat(e,t,i){if(this.ctx&&(t%4===0&&[i,i*1.25,i*1.5,i*2].forEach((s,a)=>{const r=this.ctx.createOscillator(),l=this.ctx.createGain(),c=this.ctx.createBiquadFilter();r.type="sine",r.frequency.value=s*.5,c.type="lowpass",c.frequency.value=800,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.06-a*.01,e+.4),l.gain.linearRampToValueAtTime(0,e+3.5),r.connect(c),c.connect(l),l.connect(this.masterGain),r.start(e),r.stop(e+4),this.nodes.push(r,l)}),t%8===5)){const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="triangle",n.frequency.value=i*4,s.gain.setValueAtTime(.04,e),s.gain.exponentialRampToValueAtTime(.001,e+.8),n.connect(s),s.connect(this.masterGain),n.start(e),n.stop(e+.9),this.nodes.push(n,s)}}_lofiBeat(e,t,i){if(!this.ctx)return;(t===0||t===2)&&this._kick(e,i*.5),(t===1||t===3)&&this._snare(e,.04),this._hihat(e,.025);const n=[i*.5,i*.5,i*.5*.75,i*.5*.9];this._bass(e,n[t],.25)}_rockBeat(e,t,i,n){if(!this.ctx)return;(t===0||t===2)&&this._kick(e,n*.4),(t===1||t===3)&&this._snare(e,.07),this._hihat(e,.05);const s=[n*.5,n*.5,n*.5*.8,n*.5];this._distBass(e,s[t%4]),t===0&&i%2===0&&[n,n*1.5,n*2].forEach(a=>{const r=this.ctx.createOscillator(),l=this.ctx.createGain();r.type="sawtooth",r.frequency.value=a,l.gain.setValueAtTime(.035,e),l.gain.linearRampToValueAtTime(0,e+.5),r.connect(l),l.connect(this.masterGain),r.start(e),r.stop(e+.55),this.nodes.push(r,l)})}_italianBeat(e,t,i,n){if(this.ctx&&(t===0&&this._bass(e,n*.5,.3),(t===1||t===2||t===3)&&this._bass(e,n*.75,.12),t===0&&this._kick(e,n*.5),t===0||t===2)){const s=[n,n*1.122,n*1.26,n*1.498,n*1.682],a=s[i%s.length],r=this.ctx.createOscillator(),l=this.ctx.createGain();r.type="triangle",r.frequency.value=a;const c=this.ctx.createOscillator(),d=this.ctx.createGain();c.frequency.value=5.5,d.gain.value=3,c.connect(d),d.connect(r.frequency),l.gain.setValueAtTime(.04,e),l.gain.linearRampToValueAtTime(0,e+.8),r.connect(l),l.connect(this.masterGain),c.start(e),r.start(e),c.stop(e+.9),r.stop(e+.9),this.nodes.push(r,c,l,d)}}_electronicBeat(e,t,i){this.ctx&&((t===0||t===2)&&this._kick(e,i*.5),(t===1||t===3)&&this._snare(e,.05),this._hihat(e,.03),t===0&&this._bass(e,i*.5,.25),t===2&&this._bass(e,i*.375,.2))}_kick(e,t){if(!this.ctx)return;const i=this.ctx.createOscillator(),n=this.ctx.createGain();i.frequency.setValueAtTime(t,e),i.frequency.exponentialRampToValueAtTime(20,e+.12),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.25),i.connect(n),n.connect(this.masterGain),i.start(e),i.stop(e+.3),this.nodes.push(i,n)}_snare(e,t){if(!this.ctx)return;const i=Math.floor(this.ctx.sampleRate*.18),n=this.ctx.createBuffer(1,i,this.ctx.sampleRate),s=n.getChannelData(0);for(let c=0;c<i;c++)s[c]=Math.random()*2-1;const a=this.ctx.createBufferSource();a.buffer=n;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=1800,r.Q.value=.8;const l=this.ctx.createGain();l.gain.setValueAtTime(t,e),l.gain.exponentialRampToValueAtTime(.001,e+.18),a.connect(r),r.connect(l),l.connect(this.masterGain),a.start(e),a.stop(e+.2),this.nodes.push(a,l)}_hihat(e,t){if(!this.ctx)return;const i=Math.floor(this.ctx.sampleRate*.06),n=this.ctx.createBuffer(1,i,this.ctx.sampleRate),s=n.getChannelData(0);for(let c=0;c<i;c++)s[c]=Math.random()*2-1;const a=this.ctx.createBufferSource();a.buffer=n;const r=this.ctx.createBiquadFilter();r.type="highpass",r.frequency.value=7e3;const l=this.ctx.createGain();l.gain.setValueAtTime(t,e),l.gain.exponentialRampToValueAtTime(.001,e+.06),a.connect(r),r.connect(l),l.connect(this.masterGain),a.start(e),a.stop(e+.08),this.nodes.push(a,l)}_bass(e,t,i){if(!this.ctx)return;const n=this.ctx.createOscillator(),s=this.ctx.createBiquadFilter(),a=this.ctx.createGain();n.type="sawtooth",n.frequency.value=t,s.type="lowpass",s.frequency.value=350,a.gain.setValueAtTime(i,e),a.gain.exponentialRampToValueAtTime(.001,e+.35),n.connect(s),s.connect(a),a.connect(this.masterGain),n.start(e),n.stop(e+.4),this.nodes.push(n,a)}_distBass(e,t){if(!this.ctx)return;const i=this.ctx.createOscillator(),n=this.ctx.createWaveShaper(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.value=t;const a=new Float32Array(256);for(let r=0;r<256;r++){const l=r*2/256-1;a[r]=Math.max(-.6,Math.min(.6,l*3))}n.curve=a,s.gain.setValueAtTime(.08,e),s.gain.exponentialRampToValueAtTime(.001,e+.3),i.connect(n),n.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+.35),this.nodes.push(i,s)}}class G1{constructor(){x(this,"container");x(this,"stationIdx",0);x(this,"on",!1);x(this,"songIdx",0);x(this,"djIdx",0);x(this,"songTimer",0);x(this,"djTimer",0);x(this,"nameEl");x(this,"songEl");x(this,"djEl");x(this,"iconEl");x(this,"freqEl");x(this,"engine",new z1);x(this,"engineReady",!1);x(this,"volumeSlider");x(this,"rafId",0);x(this,"lastUpdateTs",0);x(this,"_volOpen",!1);this._buildUI(),this.lastUpdateTs=performance.now(),this._tick()}_buildUI(){this.container=document.createElement("div"),this.container.style.cssText=`
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
    `,this.freqEl=document.createElement("span"),this.freqEl.style.cssText="color: rgba(200,168,106,0.5); font-size: 9px; letter-spacing: 0.5px;",i.appendChild(this.nameEl),i.appendChild(this.freqEl);const n=document.createElement("span");n.textContent="▶",n.style.cssText="color:rgba(200,168,106,0.8); font-size:12px; cursor:pointer; padding:0 2px; line-height:1;",n.addEventListener("click",()=>this._changeStation(1));const s=document.createElement("span");s.textContent="🔊",s.title="Volume",s.style.cssText="font-size:14px; cursor:pointer; opacity:0.8; line-height:1; padding:0 1px;",s.addEventListener("click",d=>{d.stopPropagation(),this._volOpen=!this._volOpen,r.style.display=this._volOpen?"flex":"none"});const a=document.createElement("span");a.textContent="⏻",a.title=this.on?"Turn Off":"Turn On",a.style.cssText=`
      font-size:14px; cursor:pointer; line-height:1; padding:0 1px;
      color: rgba(200,168,106,0.8); font-weight:bold;
    `,a.addEventListener("click",()=>{this._togglePower(),a.title=this.on?"Turn Off":"Turn On",a.style.color=this.on?"#ff6b6b":"rgba(200,168,106,0.8)"}),e.appendChild(this.iconEl),e.appendChild(t),e.appendChild(i),e.appendChild(n),e.appendChild(s),e.appendChild(a);const r=document.createElement("div");r.style.cssText=`
      display: none; align-items: center; gap: 6px;
      background: rgba(8,6,4,0.88); backdrop-filter: blur(12px);
      border: 1px solid rgba(200,168,106,0.25); border-radius: 20px;
      padding: 5px 12px;
      pointer-events: auto; touch-action: manipulation;
    `;const l=document.createElement("span");l.textContent="🔈",l.style.cssText="font-size:12px; opacity:0.7;",this.volumeSlider=document.createElement("input"),this.volumeSlider.type="range",this.volumeSlider.min="0",this.volumeSlider.max="100",this.volumeSlider.value="55",this.volumeSlider.style.cssText=`
      width: 80px; height: 3px; accent-color: #C8A86A; cursor: pointer;
    `,this.volumeSlider.addEventListener("input",()=>{const d=Number(this.volumeSlider.value)/100;this.engine.setVolume(d*.18),l.textContent=d===0?"🔇":d<.4?"🔈":"🔊"});const c=document.createElement("span");c.style.cssText="color:rgba(200,168,106,0.6); font-size:9px; min-width:22px; text-align:right;",this.volumeSlider.addEventListener("input",()=>{c.textContent=this.volumeSlider.value+"%"}),c.textContent="55%",r.appendChild(l),r.appendChild(this.volumeSlider),r.appendChild(c),this.songEl=document.createElement("div"),this.songEl.style.cssText=`
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
    `,this.container.appendChild(e),this.container.appendChild(r),this.container.appendChild(this.songEl),this.container.appendChild(this.djEl),this._renderStation()}getEl(){return this.container}_renderStation(){const e=cn[this.stationIdx];this.nameEl.textContent=e.name,this.nameEl.style.color=e.color,this.freqEl.textContent=`${e.freq} FM`,this.songEl.textContent=this.on?`♫  ${e.songs[this.songIdx%e.songs.length]}`:"— OFF —",this.iconEl.style.opacity=this.on?"1":"0.55"}_togglePower(){this.engineReady||(this.engineReady=this.engine.init()),this.on=!this.on,this.on?(this.engine.play(cn[this.stationIdx]),this._showDJ()):this.engine.stop(),this._renderStation()}_changeStation(e){this.stationIdx=(this.stationIdx+e+cn.length)%cn.length,this.songIdx=0,this.songTimer=0,this.on&&(this.engineReady||(this.engineReady=this.engine.init()),this.engine.play(cn[this.stationIdx]),this._showDJ()),this._renderStation()}_showDJ(){const e=cn[this.stationIdx],t=e.dj[this.djIdx%e.dj.length];this.djEl.textContent=`"${t}"`,this.djEl.style.opacity="1",setTimeout(()=>{this.djEl.style.opacity="0"},4500),this.djIdx++}_tick(){const e=performance.now(),t=(e-this.lastUpdateTs)/1e3;if(this.lastUpdateTs=e,this.on){cn[this.stationIdx];const i=45+this.songIdx%3*10;this.songTimer+=t,this.songTimer>=i&&(this.songTimer=0,this.songIdx++,this._renderStation()),this.djTimer+=t,this.djTimer>=30&&(this.djTimer=0,this._showDJ())}this.rafId=requestAnimationFrame(()=>this._tick())}setVisible(e){this.container.style.opacity=e?"1":"0",this.container.style.pointerEvents=e?"auto":"none"}destroy(){cancelAnimationFrame(this.rafId),this.engine.stop(),this.container.remove()}}const H1="./",xo=`${H1}tem-logo-white.jpg`,_o=[{id:"melbourne",name:"TROWELED EARTH MELBOURNE",role:"presents",line:"",accentColor:"#C8A86A",skyTop:"#040810",skyBot:"#102040",particleColor:"#C8A86A",particleKind:"dust",buildingTint:"#182840",spotColor:"#C8A86A33",voiceChar:"Narrator"},{id:"matt",name:"MATT",role:"The Warlord · Lead Plasterer",line:"I can be any type of Matt, but I prefer the Diplomatt!",accentColor:"#FF3355",skyTop:"#8A0010",skyBot:"#CC0030",particleColor:"#FF5070",particleKind:"sparks",buildingTint:"#440010",spotColor:"#FF335555",voiceChar:"Matt"},{id:"tsuyoshi",name:"TSUYOSHI",role:"The Samurai · Tadelakt Specialist",line:"I no like bug. Where is... da respect!",accentColor:"#00DD88",skyTop:"#005530",skyBot:"#009958",particleColor:"#60FFB0",particleKind:"dust",buildingTint:"#003322",spotColor:"#00DD8855",voiceChar:"Tsuyoshi"},{id:"connie",name:"CONNIE",role:"Operations Queen · Born in Germany",line:"I'll crush all of you!!! Hahahahahaha!",accentColor:"#FFB030",skyTop:"#884400",skyBot:"#CC7700",particleColor:"#FFD060",particleKind:"smoke",buildingTint:"#442200",spotColor:"#FFB03055",voiceChar:"Connie"},{id:"jarrad",name:"JARRAD",role:"Scaffold Specialist · Topknot Philosopher",line:"My plan is convince everyone I have a plan, tho I do not.... Did you get any of that?",accentColor:"#8866FF",skyTop:"#220066",skyBot:"#4400AA",particleColor:"#AA88FF",particleKind:"dust",buildingTint:"#110033",spotColor:"#8866FF55",voiceChar:"Jarrad"},{id:"fabio",name:"FABIO",role:"Plasterer · Pizza Consultant",line:"Come, we can have pizza. Andiamo, fa presto!",accentColor:"#FF7722",skyTop:"#883300",skyBot:"#CC5500",particleColor:"#FFAa40",particleKind:"smoke",buildingTint:"#441A00",spotColor:"#FF772255",voiceChar:"Fabio"},{id:"joe",name:"JOE",role:"The Wildcard · Knows Too Much",line:"Y'all seen that Epstein list? So many chosen people! And Trump!",accentColor:"#F0C000",skyTop:"#3A3000",skyBot:"#887700",particleColor:"#FFE040",particleKind:"sparks",buildingTint:"#1A1600",spotColor:"#F0C00055",voiceChar:"Joe"},{id:"phil",name:"PHIL",role:"The Quiet Legend · Renders",line:"I get asked to 'fill me crack in?' I don't get it...",accentColor:"#44CCCC",skyTop:"#004444",skyBot:"#007777",particleColor:"#88FFFF",particleKind:"dust",buildingTint:"#002222",spotColor:"#44CCCC55",voiceChar:"Phil"},{id:"jose",name:"JOSE GARCIA",role:"THE HEART OF TROWELED EARTH · El Maestro",line:"Some people call me Wall Jesus... They're not wrong.",accentColor:"#FFD700",skyTop:"#1A0040",skyBot:"#FF8C00",particleColor:"#FFD700",particleKind:"sparks",buildingTint:"#1A0020",spotColor:"#FFD70066",voiceChar:"Jose",durationMs:14e3,heroReveal:!0}],V1=8e3,W1=8e3,X1=5e3,Xc=350;class Y1{constructor(){x(this,"overlay");x(this,"canvas");x(this,"ctx2d");x(this,"textLayer");x(this,"themeAudio",null);x(this,"logoImg",null);x(this,"done",!1);x(this,"rafId",0);x(this,"timers",[]);x(this,"particles",[]);x(this,"panX",0);x(this,"camShake",0);x(this,"currentScene",null);x(this,"sceneT",0);x(this,"buildings",[])}play(){return new Promise(e=>this._tapThenBuild(e))}_tapThenBuild(e){this._injectStyles();const t=new Image;t.src=xo,t.onload=()=>{this.logoImg=t};const i=document.createElement("div");i.style.cssText=`
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

      <img src="${xo}" alt="TEM"
        style="height:clamp(80px,18vw,130px); width:auto; object-fit:contain;
               filter:brightness(0.9) drop-shadow(0 0 20px rgba(200,168,106,0.4));
               animation:tapPulse 3s ease-in-out infinite;"
        onerror="this.style.display='none'">
    `;const n=new Audio;n.src=Zt.theme,n.volume=.75,n.loop=!0,n.preload="auto",this.themeAudio=n,document.body.appendChild(i);let s=!1;const a=()=>{s||(s=!0,n.play().catch(()=>{this.themeAudio=null}),i.remove(),this._build(e))};i.addEventListener("pointerup",a,{once:!0})}_build(e){this.overlay=document.createElement("div"),this.overlay.id="intro-overlay",this.overlay.style.cssText=`
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
    `,s.addEventListener("click",()=>this._finish(e)),this.overlay.appendChild(this.canvas),this.overlay.appendChild(n),this.overlay.appendChild(t),this.overlay.appendChild(i),this.overlay.appendChild(this.textLayer),this.overlay.appendChild(s),document.body.appendChild(this.overlay),this._genBuildings(),this._startScene(_o[0]);let a=W1;for(let c=1;c<_o.length;c++){const d=_o[c];this._after(a,()=>this._startScene(d)),a+=d.durationMs??V1}this._after(a,()=>this._showTitle(e));let r=performance.now();const l=c=>{if(this.done)return;const d=Math.min((c-r)/1e3,.05);r=c,this.sceneT+=d,this._update(d),this._draw(),this.rafId=requestAnimationFrame(l)};this.rafId=requestAnimationFrame(l)}_startScene(e){this.done||(this.currentScene=e,this.sceneT=0,this.panX=0,this.particles=[],this.camShake=e.id==="matt"||e.id==="jose"?.5:0,this._updateText(e))}_updateText(e){if(!this.textLayer)return;const t=e.id==="melbourne";this.textLayer.innerHTML=`
      <div style="animation: introSlideUp 0.5s ease both;">
        ${t?`
          <div style="color:rgba(200,168,106,0.6); font-size:clamp(9px,2.5vw,12px);
                      font-weight:700; letter-spacing:4px; margin-bottom:12px;">
            TROWELED EARTH MELBOURNE PRESENTS
          </div>
          <img src="${xo}" alt="TEM"
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
    `}_update(e){const t=this.currentScene;if(t){this.panX+=e*18,this.camShake>0&&(this.camShake=Math.max(0,this.camShake-e*.8)),t.particleKind!=="none"&&this._spawnParticles(t,e);for(let i=this.particles.length-1;i>=0;i--){const n=this.particles[i];n.x+=n.vx*e,n.y+=n.vy*e,n.life-=e,n.alpha=Math.max(0,n.life/n.maxLife),n.life<=0&&this.particles.splice(i,1)}}}_spawnParticles(e,t){const i=this.canvas.width,n=this.canvas.height,s=e.particleKind==="sparks"?12:4;for(let a=0;a<s*t;a++){const r=Math.random()*i,l=n*.62;let c;e.particleKind==="sparks"?c={x:r,y:l-Math.random()*n*.15,vx:(Math.random()-.5)*80,vy:-Math.random()*120-40,life:.4+Math.random()*.4,maxLife:.8,size:1.5+Math.random()*2,alpha:1}:e.particleKind==="smoke"?c={x:r,y:l,vx:(Math.random()-.5)*20,vy:-Math.random()*30-10,life:1.5+Math.random(),maxLife:2.5,size:20+Math.random()*40,alpha:.3}:c={x:r,y:l+Math.random()*n*.1,vx:(Math.random()-.5)*15,vy:-Math.random()*15,life:1+Math.random()*1.5,maxLife:2.5,size:2+Math.random()*5,alpha:.5},this.particles.push(c)}}_draw(){const e=this.canvas.width,t=this.canvas.height,i=this.currentScene;if(!i)return;const n=this.ctx2d,s=this.camShake>0?(Math.random()-.5)*this.camShake*4:0;n.save(),n.translate(s,s*.5);const a=n.createLinearGradient(0,0,0,t*.65);a.addColorStop(0,i.skyTop),a.addColorStop(1,i.skyBot),n.fillStyle=a,n.fillRect(0,0,e,t),this._drawStars(n,e,t,i),this._drawCity(n,e,t,i);const r=n.createLinearGradient(0,t*.62,0,t);r.addColorStop(0,i.spotColor),r.addColorStop(.3,"#000000CC"),r.addColorStop(1,"#000000"),n.fillStyle=r,n.fillRect(0,t*.62,e,t*.38),this._drawRoad(n,e,t,i),this._drawParticles(n,i),this._drawBuckets(n,e,t,i),i.id!=="melbourne"&&this._drawCharSilhouette(n,e,t,i),i.id!=="melbourne"&&i.line&&this.sceneT>2&&this._drawSpeechBubble(n,e,t,i);const l=n.createRadialGradient(e/2,t/2,t*.1,e/2,t/2,t*.8);if(l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,0.72)"),n.fillStyle=l,n.fillRect(0,0,e,t),i.id!=="melbourne"&&this.sceneT<.6){const c=Math.max(0,.6-this.sceneT)*.4;n.fillStyle=i.accentColor+Math.round(c*255).toString(16).padStart(2,"0"),n.fillRect(0,0,e,t)}n.restore()}_drawStars(e,t,i,n){const s=n.id.charCodeAt(0)*31;e.fillStyle="rgba(255,255,255,0.7)";for(let a=0;a<60;a++){const r=(s*(a+1)*1234567%t+t)%t,l=(s*(a+7)*765432%(i*.5)+i*.01)%(i*.5),c=.5+s*a*11%10/10,d=(this.sceneT*.8+a*.3)%(Math.PI*2);e.globalAlpha=.3+Math.sin(d)*.3,e.beginPath(),e.arc(r,l,c,0,Math.PI*2),e.fill()}e.globalAlpha=1}_drawCity(e,t,i,n){const s=i*.62,a=this.panX*.3%t;for(let r=-1;r<=1;r++){const l=r*t-a;for(const c of this.buildings){const d=c.x+l;if(d+c.w<-50||d>t+50)continue;e.fillStyle=n.buildingTint,e.fillRect(d,s-c.h,c.w,c.h),e.fillStyle=n.accentColor+"55";const u=Math.floor(c.w/10),h=Math.floor(c.h/14);for(let f=0;f<u;f++)for(let g=0;g<h;g++){if(!(Math.sin((c.x+f*17+g*13)*.618)>.1))continue;const m=d+f*10+2,p=s-c.h+g*14+3,b=Math.sin(this.sceneT*2+f+g)>.95;e.fillStyle=b?"#fff4":n.accentColor+"66",e.fillRect(m,p,5,7)}e.strokeStyle=n.accentColor+"22",e.lineWidth=1,e.strokeRect(d,s-c.h,c.w,c.h)}}}_drawRoad(e,t,i,n){const s=i*.72,a=this.panX*1.5;if(e.fillStyle="#0a0a0a",e.fillRect(0,s,t,i-s),e.strokeStyle=n.accentColor+"30",e.lineWidth=2,e.setLineDash([30,40]),e.lineDashOffset=-a%70,e.beginPath(),e.moveTo(0,s+20),e.lineTo(t,s+20),e.stroke(),e.setLineDash([]),n.id==="melbourne"){const r=this.panX*60%(t+200)-100;this._drawVan(e,r,s+5)}}_drawVan(e,t,i){e.save(),e.translate(t,i),e.fillStyle="#C1660A",e.beginPath(),e.roundRect(0,0,90*.8,42*.8,4*.8),e.fill(),e.fillStyle="#A04A00",e.beginPath(),e.roundRect(60*.8,4*.8,30*.8,32*.8,3*.8),e.fill(),e.fillStyle="#6090D080",e.fillRect(64*.8,7*.8,22*.8,16*.8),e.fillStyle="#111",e.beginPath(),e.arc(18*.8,42*.8,8*.8,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(72*.8,42*.8,8*.8,0,Math.PI*2),e.fill(),e.fillStyle="#FFFF8088",e.fillRect(88*.8,16*.8,3*.8,8*.8),e.restore()}_drawCharSilhouette(e,t,i,n){if(n.id==="connie"){this._drawConnieBond(e,t,i,n);return}const s=i*.62,a=t*.68,r=Math.min(1,this.sceneT*2);e.save(),e.globalAlpha=r;const l=e.createRadialGradient(a,s-80,10,a,s-80,160);l.addColorStop(0,n.accentColor+"50"),l.addColorStop(1,"transparent"),e.fillStyle=l,e.beginPath(),e.ellipse(a,s-80,160,220,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(0,0,0,0.45)",e.beginPath(),e.ellipse(a,s+6,40,9,0,0,Math.PI*2),e.fill();const c=Math.min(i*.52,240),u={jose:"#C8856A",matt:"#E8C0A0",tsuyoshi:"#F0D4B0",connie:"#F0C8A0",jarrad:"#E0B090",fabio:"#D4A070",joe:"#EED8C0",phil:"#D8A888"}[n.id]??"#D0A080",h="#111111",f="#1a1a2a";e.fillStyle="#0a0a0a",e.fillRect(a-19,s-22,16,22),e.fillRect(a+3,s-22,16,22),e.fillStyle=f,e.fillRect(a-18,s-c*.44,16,c*.44-20),e.fillRect(a+2,s-c*.44,16,c*.44-20),e.fillStyle=h,e.fillRect(a-20,s-c*.8,40,c*.37),this._drawTEMLogoOnShirt(e,a,s-c*.7),e.fillStyle=u,e.fillRect(a-5,s-c*.84,10,c*.06),e.fillStyle=h,e.fillRect(a-32,s-c*.78,13,c*.32),e.fillRect(a+19,s-c*.78,13,c*.28),e.fillStyle=u,e.beginPath(),e.ellipse(a-26,s-c*.46,7,9,.2,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(a+26,s-c*.5,7,9,-.2,0,Math.PI*2),e.fill(),e.fillStyle=u,e.beginPath(),e.ellipse(a,s-c*.87,c*.075,c*.09,0,0,Math.PI*2),e.fill(),this._drawHairAndProp(e,n,a,s,c,u),e.strokeStyle=n.accentColor,e.lineWidth=3,e.globalAlpha=r*.8,e.beginPath(),e.moveTo(a-20,s-c*.44),e.lineTo(a-20,s-c*.8),e.lineTo(a-10,s-c*.84),e.stroke(),e.restore()}_drawTEMLogoOnShirt(e,t,i){if(!this.logoImg)return;const n=20,s=n*(1504/688);e.save(),e.globalAlpha=.85,e.drawImage(this.logoImg,t-n/2,i-s/2,n,s),e.restore()}_drawConnieBond(e,t,i,n){const s=i*.62,a=t*.6,r=Math.min(1,this.sceneT*2),l=Math.min(i*.52,240),c="#F0C8A0",d=n.accentColor;e.save(),e.globalAlpha=r;const u=e.createRadialGradient(a,s-90,10,a,s-90,180);u.addColorStop(0,d+"55"),u.addColorStop(1,"transparent"),e.fillStyle=u,e.beginPath(),e.ellipse(a,s-90,180,230,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(0,0,0,0.4)",e.beginPath(),e.ellipse(a,s+5,30,7,0,0,Math.PI*2),e.fill();const h=s,f=h-l,g=h-l*.5;e.fillStyle="#D4B840",e.beginPath(),e.moveTo(a-8,f+l*.06),e.bezierCurveTo(a-40,f+l*.18,a-55,g-l*.06,a-35,h-l*.2),e.bezierCurveTo(a-28,h-l*.18,a-14,f+l*.3,a-2,f+l*.12),e.closePath(),e.fill(),e.strokeStyle="#FFE878",e.lineWidth=3,e.beginPath(),e.moveTo(a-4,f+l*.08),e.bezierCurveTo(a-30,f+l*.22,a-45,g,a-28,h-l*.22),e.stroke(),e.fillStyle="#111122",e.beginPath(),e.moveTo(a-8,h-l*.43),e.lineTo(a-14,h),e.lineTo(a-6,h),e.lineTo(a+4,h-l*.43),e.closePath(),e.fill(),e.beginPath(),e.moveTo(a-2,h-l*.43),e.lineTo(a+6,h),e.lineTo(a+16,h),e.lineTo(a+10,h-l*.43),e.closePath(),e.fill(),e.fillStyle="#111",e.fillRect(a-16,h-4,12,4),e.fillRect(a-13,h-10,2,10),e.fillRect(a+4,h-4,14,4),e.fillRect(a+15,h-10,2,10),e.fillStyle="#111111",e.beginPath(),e.moveTo(a+16,h-l*.8),e.bezierCurveTo(a+44,h-l*.79,a+58,h-l*.7,a+26,h-l*.58),e.bezierCurveTo(a+12,h-l*.51,a+8,h-l*.46,a+15,h-l*.42),e.bezierCurveTo(a+20,h-l*.39,a+15,h-l*.33,a+6,h-l*.27),e.lineTo(a-2,h-l*.42),e.bezierCurveTo(a-6,h-l*.5,a-4,h-l*.56,a+2,h-l*.66),e.bezierCurveTo(a+4,h-l*.73,a+0,h-l*.78,a+6,h-l*.82),e.closePath(),e.fill(),e.fillStyle=c,e.beginPath(),e.moveTo(a+10,h-l*.84),e.bezierCurveTo(a+30,h-l*.82,a+50,h-l*.79,a+44,h-l*.79),e.lineTo(a+16,h-l*.8),e.closePath(),e.fill(),e.fillStyle=c,e.fillRect(a+8,f+l*.12,8,l*.05);const v=l*.09;e.beginPath(),e.arc(a+12,f+l*.07,v,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(a+12+v*.85,f+l*.08,v*.22,-.4,.9),e.fill(),e.beginPath(),e.arc(a+12+v*.5,f+l*.1+v*.7,v*.3,0,Math.PI),e.fill(),e.fillStyle="#D4B840",e.beginPath(),e.arc(a+12,f+l*.04,v*1.05,Math.PI*.9,Math.PI*1.9),e.fill(),e.beginPath(),e.arc(a+12+v*.3,f+l*.02,v*.6,Math.PI,Math.PI*1.7),e.fill(),e.fillStyle="#CC2244",e.beginPath(),e.ellipse(a+12+v*.8,f+l*.09,4,2.5,.2,0,Math.PI*2),e.fill();const m=a+22,p=h-l*.76,b=-.38,M=l*.36,y=m+Math.cos(b)*M,R=p+Math.sin(b)*M;e.strokeStyle=c,e.lineWidth=l*.045,e.lineCap="round",e.beginPath(),e.moveTo(m,p),e.lineTo(y,R),e.stroke();const E=b-.08,A=l*.14,I=y+Math.cos(E)*A,T=R+Math.sin(E)*A;if(e.fillStyle="#1a1a1a",e.save(),e.translate(y,R),e.rotate(E),e.fillRect(-4,-4,10,18),e.restore(),e.strokeStyle="#2a2a2a",e.lineWidth=5,e.lineCap="square",e.beginPath(),e.moveTo(y,R),e.lineTo(I,T),e.stroke(),e.strokeStyle="#666",e.lineWidth=1.5,e.beginPath(),e.moveTo(y,R-1),e.lineTo(I,T-1),e.stroke(),this.sceneT>2.5){e.save(),e.globalAlpha=r*.6*(.5+Math.sin(this.sceneT*8)*.5);const _=e.createRadialGradient(I,T,0,I,T,14);_.addColorStop(0,"#FFFF88CC"),_.addColorStop(1,"transparent"),e.fillStyle=_,e.beginPath(),e.arc(I,T,14,0,Math.PI*2),e.fill(),e.restore()}e.strokeStyle="#FFD700",e.lineWidth=2.5,e.beginPath(),e.arc(y+6,R,4,0,Math.PI*2),e.stroke(),e.strokeStyle=d,e.lineWidth=3,e.globalAlpha=r*.7,e.beginPath(),e.moveTo(a-2,h-l*.43),e.bezierCurveTo(a-6,h-l*.5,a-4,h-l*.78,a+6,h-l*.83),e.stroke(),e.restore()}_drawHairAndProp(e,t,i,n,s,a){const r=n-s*.87,l=s*.075;switch(e.save(),e.lineCap="round",t.id){case"jose":{const c="#1e0d00",d="#3a1e00",u="#5a3500";[{dx:-14,swing:-7,len:s*.3,w:6,color:c},{dx:-9,swing:-4,len:s*.35,w:7,color:d},{dx:-4,swing:-1,len:s*.38,w:6,color:c},{dx:1,swing:2,len:s*.36,w:7,color:d},{dx:6,swing:4,len:s*.33,w:6,color:u},{dx:11,swing:5,len:s*.28,w:5,color:u},{dx:-12,swing:-5,len:s*.22,w:4,color:d},{dx:8,swing:3,len:s*.2,w:4,color:c}].forEach(m=>{e.strokeStyle=m.color,e.lineWidth=m.w,e.beginPath(),e.moveTo(i+m.dx,r-l*.05),e.bezierCurveTo(i+m.dx+m.swing*.35,r+m.len*.32,i+m.dx+m.swing*.85,r+m.len*.65,i+m.dx+m.swing*.65,r+m.len),e.stroke(),e.beginPath(),e.arc(i+m.dx+m.swing*.65,r+m.len,m.w*.6,0,Math.PI*2),e.fillStyle=m.color,e.fill()}),e.fillStyle=c,e.beginPath(),e.arc(i,r-l*.55,l*1.08,Math.PI,0),e.fill(),e.strokeStyle="#7B4A10",e.lineWidth=3.5,e.beginPath(),e.arc(i,r-l*.15,l*1.14,Math.PI*.75,Math.PI*1.95),e.stroke(),e.fillStyle="#2a1000",e.beginPath(),e.ellipse(i,r+l*.6,l*.65,l*.35,0,0,Math.PI),e.fill(),e.strokeStyle="rgba(210,210,210,0.85)",e.lineWidth=2.2,e.fillStyle="rgba(180,220,255,0.12)";const f=l*.95,g=l*.5,v=r-l*.12;e.beginPath(),e.roundRect(i-f-1,v-g/2,f,g,2),e.fill(),e.stroke(),e.beginPath(),e.roundRect(i+1,v-g/2,f,g,2),e.fill(),e.stroke(),e.beginPath(),e.moveTo(i-1,v),e.lineTo(i+1,v),e.stroke();break}case"matt":{const c="#5a3010";e.fillStyle=c,e.beginPath(),e.arc(i,r-l*.7,l*1.15,Math.PI,0),e.fill(),e.beginPath(),e.ellipse(i-l*.3,r-l*1.5,l*.9,l*.55,-.3,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(i+l*.4,r-l*1.4,l*.75,l*.5,.2,0,Math.PI*2),e.fill(),e.strokeStyle=c,e.lineWidth=4,e.beginPath(),e.moveTo(i-l*1.05,r-l*.3),e.quadraticCurveTo(i-l*1.3,r+l*.3,i-l*1,r+l*.5),e.stroke(),e.beginPath(),e.moveTo(i+l*1.05,r-l*.3),e.quadraticCurveTo(i+l*1.3,r+l*.3,i+l*1,r+l*.5),e.stroke(),e.fillStyle="#3a1a08",e.beginPath(),e.ellipse(i,r+l*.55,l*.75,l*.42,0,0,Math.PI),e.fill(),e.fillStyle="#3a1a08",e.beginPath(),e.ellipse(i,r+l*.18,l*.52,l*.18,0,0,Math.PI),e.fill();break}case"tsuyoshi":{const c="#080808",d=l*.52,u=r-l*.2;e.fillStyle=a,e.beginPath(),e.arc(i-l*.85,r-l*.5,l*.55,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(i+l*.85,r-l*.5,l*.55,0,Math.PI*2),e.fill(),e.fillStyle=c,e.fillRect(i-d/2,u-l*.3,d,l*.55);const h=[{ox:-.28,h:l*1.55,tw:.22,tilt:-.18},{ox:-.1,h:l*2.1,tw:.2,tilt:-.06},{ox:.06,h:l*2.4,tw:.22,tilt:.04},{ox:.2,h:l*1.9,tw:.19,tilt:.12},{ox:.32,h:l*1.4,tw:.18,tilt:.2}];e.fillStyle=c,h.forEach(f=>{const g=i+f.ox*d*3,v=f.tw*d*2.5;e.beginPath(),e.moveTo(g-v/2,u),e.lineTo(g+v/2,u),e.lineTo(g+Math.sin(f.tilt)*f.h*.5,u-f.h),e.closePath(),e.fill()}),e.fillStyle="rgba(80,80,160,0.18)",e.beginPath(),e.moveTo(i-1,u),e.lineTo(i+3,u),e.lineTo(i+2,u-l*2),e.closePath(),e.fill();break}case"jarrad":{const c="#1a1208";e.fillStyle=c,e.beginPath(),e.arc(i,r-l*.65,l*1.08,Math.PI,0),e.fill(),e.beginPath(),e.ellipse(i-l*.2,r-l*1.45,l*.7,l*.38,-.15,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(i+l*.3,r-l*1.35,l*.55,l*.32,.15,0,Math.PI*2),e.fill(),e.fillStyle="#2a1e08",e.beginPath(),e.ellipse(i,r+l*.52,l*.65,l*.3,0,0,Math.PI),e.fill(),e.strokeStyle="#111",e.lineWidth=2.5,e.fillStyle="rgba(160,200,240,0.18)";const d=l*1,u=l*.52,h=r-l*.15;e.beginPath(),e.roundRect(i-d-1,h-u/2,d,u,2),e.fill(),e.stroke(),e.beginPath(),e.roundRect(i+1,h-u/2,d,u,2),e.fill(),e.stroke(),e.beginPath(),e.moveTo(i-1,h),e.lineTo(i+1,h),e.stroke(),e.beginPath(),e.moveTo(i-d-1,h),e.lineTo(i-d-l*.4,h-1),e.stroke(),e.beginPath(),e.moveTo(i+d+1,h),e.lineTo(i+d+l*.4,h-1),e.stroke();break}case"fabio":{e.fillStyle="#1a0e00",e.beginPath(),e.arc(i,r-l*.68,l*1.1,Math.PI,0),e.fill(),e.beginPath(),e.ellipse(i-l*.1,r-l*1.42,l*.8,l*.38,.1,0,Math.PI*2),e.fill(),e.fillStyle="#2e1800",e.beginPath(),e.ellipse(i,r+l*.5,l*.6,l*.26,0,0,Math.PI),e.fill();break}case"joe":{e.fillStyle="#3a2510",e.beginPath(),e.arc(i,r-l*.68,l*1.08,Math.PI,0),e.fill(),e.beginPath(),e.ellipse(i-l*.15,r-l*1.35,l*.6,l*.3,-.1,0,Math.PI*2),e.fill(),e.fillStyle="#D4E800",e.fillRect(i-22,n-s*.58,44,s*.06),e.fillStyle="#B8CC00",e.fillRect(i-22,n-s*.52,44,s*.03);break}case"phil":{const c="#C8C8C4",d="#A8A8A2";e.fillStyle=c,e.beginPath(),e.arc(i,r-l*.72,l*1.12,Math.PI,0),e.fill(),e.fillStyle=d,e.beginPath(),e.arc(i,r-l*.5,l*1.08,Math.PI*.85,Math.PI*1.15),e.fill(),e.fillStyle="#DDDDD8",e.beginPath(),e.ellipse(i,r-l*1.1,l*.7,l*.35,0,0,Math.PI*2),e.fill(),e.strokeStyle="#111",e.lineWidth=2.2,e.fillStyle="rgba(160,200,240,0.15)";const u=l*.95,h=l*.48,f=r-l*.12;e.beginPath(),e.roundRect(i-u-1,f-h/2,u,h,2),e.fill(),e.stroke(),e.beginPath(),e.roundRect(i+1,f-h/2,u,h,2),e.fill(),e.stroke(),e.beginPath(),e.moveTo(i-1,f),e.lineTo(i+1,f),e.stroke(),e.beginPath(),e.moveTo(i-u-1,f),e.lineTo(i-u-l*.4,f-1),e.stroke(),e.beginPath(),e.moveTo(i+u+1,f),e.lineTo(i+u+l*.4,f-1),e.stroke();break}case"connie":{e.fillStyle="#E8D080",e.beginPath(),e.arc(i,r-l*.5,l*1.1,Math.PI,0),e.fill(),e.fillRect(i-l*1.2,r,l*2.4,s*.18);break}}switch(e.lineCap="butt",e.restore(),t.id){case"jose":case"matt":{e.fillStyle=a,e.fillRect(i+19,n-s*.62,28,8),e.fillStyle="#A0B8CC",e.save(),e.translate(i+52,n-s*.63),e.rotate(-.3),e.fillRect(0,-4,28,10),e.fillStyle="#6A7A88",e.fillRect(24,-5,6,12),e.restore();break}case"tsuyoshi":{e.fillStyle=a,e.fillRect(i-33,n-s*.44,8,s*.22),e.fillStyle="#446688",e.beginPath(),e.moveTo(i-44,n-s*.22),e.lineTo(i-28,n-s*.22),e.lineTo(i-30,n-s*.04),e.lineTo(i-42,n-s*.04),e.fill(),e.strokeStyle="#88AACC",e.lineWidth=2,e.strokeRect(i-44,n-s*.22,16,2);break}case"connie":{e.fillStyle=a,e.fillRect(i+19,n-s*.68,10,s*.2),e.fillStyle="#E8E0C0",e.fillRect(i+28,n-s*.72,26,34),e.fillStyle="#C8A86A",e.fillRect(i+34,n-s*.74,14,6),e.fillStyle="#88778866";for(let c=0;c<4;c++)e.fillRect(i+30,n-s*.66+c*6,20,3);break}case"jarrad":{e.fillStyle=a,e.fillRect(i+19,n-s*.7,10,s*.22),e.fillStyle="#1a1a2a",e.fillRect(i+28,n-s*.73,18,28),e.fillStyle="#4488FF",e.shadowColor="#4488FF",e.shadowBlur=18,e.fillRect(i+30,n-s*.71,14,24),e.shadowBlur=0,e.fillStyle="#4488FF18",e.beginPath(),e.ellipse(i+20,n-s*.87,30,40,0,0,Math.PI*2),e.fill();break}case"fabio":{e.fillStyle=a,e.fillRect(i-32,n-s*.78,10,s*.1),e.fillStyle="#B8904A",e.fillRect(i-46,n-s*.86,38,6),e.fillRect(i-46,n-s*.84,38,20),e.fillStyle="#FF5533",e.fillRect(i-43,n-s*.82,32,14),e.fillStyle="#FFDD44";for(let c=0;c<5;c++)e.beginPath(),e.arc(i-38+c*6,n-s*.78+c%2*4,3,0,Math.PI*2),e.fill();break}case"phil":{e.fillStyle=a,e.fillRect(i-33,n-s*.52,8,s*.1),e.fillStyle="#8899AA",e.fillRect(i-40,n-s*.44,14,20),e.fillStyle="#AAC0CC",e.fillRect(i-39,n-s*.46,12,8),e.strokeStyle="#AAAAAA60",e.lineWidth=2;for(let c=0;c<3;c++)e.beginPath(),e.moveTo(i-36+c*4,n-s*.46),e.quadraticCurveTo(i-34+c*4,n-s*.5,i-36+c*4,n-s*.54),e.stroke();break}}}_drawParticles(e,t){for(const i of this.particles)if(e.globalAlpha=i.alpha*.85,t.particleKind==="sparks")e.fillStyle=t.particleColor,e.shadowColor=t.particleColor,e.shadowBlur=4,e.beginPath(),e.arc(i.x,i.y,i.size,0,Math.PI*2),e.fill(),e.shadowBlur=0;else{const n=e.createRadialGradient(i.x,i.y,0,i.x,i.y,i.size);n.addColorStop(0,t.particleColor+"60"),n.addColorStop(1,"transparent"),e.fillStyle=n,e.beginPath(),e.arc(i.x,i.y,i.size,0,Math.PI*2),e.fill()}e.globalAlpha=1}_drawBuckets(e,t,i,n){const s=i*.62,a=(r,l,c,d=1)=>{const u=c*1.2,h=c,f=c*.72,g=r-h/2,v=r-f/2;e.save(),e.globalAlpha=d,e.fillStyle="rgba(0,0,0,0.3)",e.beginPath(),e.ellipse(r,l+u+3,c*.42,5,0,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(g,l),e.lineTo(g+h,l),e.lineTo(v+f,l+u),e.lineTo(v,l+u),e.closePath(),e.fillStyle="#F8F6F0",e.fill(),e.strokeStyle="#C8A86A",e.lineWidth=Math.max(1,c*.04),e.stroke(),e.beginPath(),e.ellipse(r,l,h/2,h*.1,0,0,Math.PI*2),e.fillStyle="#E8E4DC",e.fill(),e.strokeStyle="#C8A86A",e.lineWidth=Math.max(1,c*.03),e.stroke(),e.beginPath(),e.arc(r,l-h*.06,h*.3,Math.PI,0),e.strokeStyle="#B0966A",e.lineWidth=Math.max(1.5,c*.05),e.stroke();const m=c*.55,p=r-m/2,b=l+u*.18;this.logoImg?(e.globalCompositeOperation="multiply",e.globalAlpha=d*.6,e.drawImage(this.logoImg,p,b,m,m*(1504/688)),e.globalCompositeOperation="source-over",e.globalAlpha=d):(e.fillStyle="#C8A86A",e.font=`bold ${Math.max(7,c*.18)}px system-ui`,e.textAlign="center",e.fillText("TEM",r,l+u*.55),e.textAlign="start"),e.restore()};if(n.id==="melbourne")a(t*.1,s-48,46,.92),a(t*.165,s-38,36,.78),a(t*.8,s-44,42,.88),a(t*.87,s-32,30,.68);else{const r=Math.min(1,this.sceneT*1.5);a(t*.16,s-52,48,r*.95),a(t*.25,s-40,36,r*.82)}}_drawSpeechBubble(e,t,i,n){const s=Math.min(1,(this.sceneT-2)*1.5);if(s<=0)return;const a=Math.sin(this.sceneT*1.8)*5,r=Math.min(t*.42,280),l=72,c=t*.04,d=i*.38+a,u=14,h=c+r;e.save(),e.globalAlpha=s,e.shadowColor="rgba(0,0,0,0.45)",e.shadowBlur=12,e.shadowOffsetY=4,e.fillStyle="rgba(255,255,255,0.94)",e.beginPath(),e.moveTo(c+u,d),e.lineTo(c+r-u,d),e.quadraticCurveTo(c+r,d,c+r,d+u),e.lineTo(c+r,d+l-u),e.quadraticCurveTo(c+r,d+l,c+r-u,d+l),e.lineTo(c+u,d+l),e.quadraticCurveTo(c,d+l,c,d+l-u),e.lineTo(c,d+u),e.quadraticCurveTo(c,d,c+u,d),e.closePath(),e.fill(),e.shadowBlur=0,e.shadowOffsetY=0,e.beginPath(),e.moveTo(h,d+l*.42),e.lineTo(h+20,d+l*.55),e.lineTo(h,d+l*.68),e.closePath(),e.fill(),e.fillStyle=n.accentColor,e.fillRect(c+u,d,r-u*2,4),e.shadowBlur=0;const f=Math.max(12,Math.min(16,r/16));e.font=`italic ${f}px system-ui, sans-serif`,e.fillStyle="#111",e.textBaseline="middle";const g=r-24,v=`"${n.line}"`.split(" "),m=[];let p="";for(const R of v){const E=p?`${p} ${R}`:R;e.measureText(E).width>g&&p?(m.push(p),p=R):p=E}p&&m.push(p);const b=f+5,M=m.length*b,y=d+(l-M)/2+b/2+2;m.forEach((R,E)=>{e.fillText(R,c+12,y+E*b,g)}),e.restore()}_showTitle(e){this.done||(this.particles=[],this.currentScene={..._o[0],id:"title",name:"",role:"",line:""},this.textLayer.innerHTML=`
      <div style="animation:introSlideUp 0.7s ease both; text-align:center; width:100%;">
        <img src="${xo}" alt="TEM"
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
    `,this.textLayer.style.justifyContent="center",this.textLayer.style.alignItems="center",this._after(X1,()=>{this.overlay.style.transition=`opacity ${Xc}ms ease`,this.overlay.style.opacity="0",this._after(Xc+50,()=>this._finish(e))}))}_startAudio(){try{const e=new Audio;e.src=Zt.theme,e.volume=.75,this.themeAudio=e,e.play().catch(()=>{this.themeAudio=null})}catch{}}_finish(e){var i;if(this.done)return;this.done=!0,this.timers.forEach(clearTimeout),cancelAnimationFrame(this.rafId);const t=this.themeAudio;this.themeAudio=null,(i=this.overlay)==null||i.remove(),e(t)}_after(e,t){this.timers.push(setTimeout(t,e))}_genBuildings(){let t=0;this.buildings=[];for(let i=0;i<28;i++){const n=30+Math.floor(Math.sin(i*2.1)*15+Math.cos(i*1.3)*12+40),s=60+Math.abs(Math.sin(i*1.7)*140+Math.cos(i*2.3)*80);this.buildings.push({x:t,w:n,h:s}),t+=n+4+Math.floor(Math.sin(i*3.7)*6)}}_resizeCanvas(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}_injectStyles(){if(document.getElementById("intro-styles"))return;const e=document.createElement("style");e.id="intro-styles",e.textContent=`
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
    `,document.head.appendChild(e)}}const j1=[{character:"Jose",label:"JOSE GARCIA",color:"#8B6A3A",lines:["Jose Garcia — the Spaniard cloaked in shadows, grim veil","An artist of chaos where darkness and dreams prevail","With brutal hands he sculpts the earth's unyielding core","His trowel, a weapon — top class, none can ignore","From blood red clay to concrete's cold, unfeeling embrace","He molds the void to find foundations of time"]},{character:null,label:"CHORUS",color:"#C8A86A",lines:["Troweled Earth — where shadows fall","Unyielding — it calls to all","This spirit's rise beneath the skies","The spark of architects' darkest dreams"]},{character:"Matt",label:"MATT",color:"#C1666B",lines:["Matt, the warlord — fire raging deep in his veins","Charismatic, don't matter, wielding hearts in unyielding chains","From Marbellino's wrath to metallic's cold, cruel, clean","His energy — tempest, relentless, untamed and wild","Unyielding strokes cut deep and true","His trowel carved dark — Troweled Earth's anchor bold"]},{character:"Tsuyoshi",label:"TSUYOSHI",color:"#4A8A6A",lines:["A samurai — perfect engineer","Crafts Tadelakt with a blade's cold glare","Positions master, slicing through despair","The future's written in shadows he's claimed as his own"]},{character:"Connie",label:"CONNIE",color:"#E8A050",lines:["Connie — tight on wheels, a trowel school might","Turning more queen, driving through the night"]},{character:"Jarrad",label:"JARRAD",color:"#8080C0",lines:["Jarrad — iron-forged, a time built in flame","His strength runs deep, no force can break or tame","He etches the earth with hands of steel","His honour worn in fire"]},{character:"Fabio",label:"FABIO",color:"#D4602A",lines:['Like fire among the wise — "you have no power here, Gandalf the Grey"',"Conjuring dark nights, his lore makes the unwilling pay"]},{character:null,label:"BRIDGE — MELBOURNE",color:"#8B9EC8",lines:["St Kilda confined — Fitzroy, raw forms rise","No facade — let the heavy stone speak","Trowel the fruit of beauty, cold and true","Polish scars are steel in all grids and grooves","Good dreams forged in the fire of steel","Tadelakt stone lit sheen — custom strokes, no polish","Just the fight in every scene"]},{character:null,label:"FINAL CHORUS",color:"#C8A86A",lines:["Melbourne's concrete sonnet — unyielding, profound","Trowel dust builds the goal on hallowed ground","Troweled Earth — we shatter the stone","Crafting brutal spaces — this is home"]}],Yc=j1.flatMap(o=>o.lines),q1=[{text:"🌳",size:64,color:"#C8A86A",gap:12},{text:"TROWELED EARTH RUSH",size:32,color:"#C8A86A",weight:900,spacing:4,gap:8},{text:"A TROWELED EARTH MELBOURNE PRODUCTION",size:11,color:"rgba(200,168,106,0.5)",spacing:2,gap:48},{text:"CREW",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"MATT",size:16,color:"#C1666B",weight:800,gap:4},{text:"LEAD PLASTERER · THE WARLORD",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"JOSE GARCIA",size:16,color:"#8B6A3A",weight:800,gap:4},{text:"THE SPANIARD · MASTER OF CLAY",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"TSUYOSHI",size:16,color:"#4A8A6A",weight:800,gap:4},{text:"SAMURAI ENGINEER · TADELAKT SPECIALIST",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"CONNIE",size:16,color:"#E8A050",weight:800,gap:4},{text:"OPERATIONS QUEEN · BORN IN GERMANY",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"JARRAD",size:16,color:"#8080C0",weight:800,gap:4},{text:"SCAFFOLD SPECIALIST · TOPKNOT PHILOSOPHER",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"FABIO",size:16,color:"#D4602A",weight:800,gap:4},{text:'PLASTERER · PIZZA CONSULTANT · "EHHHH"',size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"PHIL",size:16,color:"#A0B8A0",weight:800,gap:4},{text:"RENDERS · QUIET LEGEND",size:11,color:"rgba(240,232,216,0.5)",gap:40},{text:"SUPPORTING CAST",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"MIKAYLA",size:16,color:"#FF9DC4",weight:800,gap:4},{text:"WORKSHOP MANAGER · JUMP ROPE CHAMPION",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"JOE",size:16,color:"#C8A86A",weight:800,gap:4},{text:"SUPPLIES · MAN OF FEW WORDS",size:11,color:"rgba(240,232,216,0.5)",gap:40},{text:"PRODUCTS FEATURED",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"Blood Red Clay · Marbellino · Tadelakt",size:14,color:"rgba(240,232,216,0.7)",gap:8},{text:"Antique Stucco · Metallic · Sgraffito",size:14,color:"rgba(240,232,216,0.7)",gap:8},{text:"Concrete Polish · Venetian Plaster · Limewash",size:14,color:"rgba(240,232,216,0.7)",gap:40},{text:"RADIO STATIONS",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"TEM FM 88.3 · Brunswick Beats 99.9",size:13,color:"rgba(240,232,216,0.6)",gap:8},{text:"Connie's Gold 103.7 · The Scaffold 107.1",size:13,color:"rgba(240,232,216,0.6)",gap:8},{text:"Fabio's Pizza Radio 92.5",size:13,color:"rgba(240,232,216,0.6)",gap:40},{text:"CITY LOCATIONS",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"Melbourne CBD · Fitzroy · Brunswick",size:13,color:"rgba(240,232,216,0.6)",gap:8},{text:"Richmond · St Kilda · Footscray",size:13,color:"rgba(240,232,216,0.6)",gap:40},{text:"GAME DESIGN & DEVELOPMENT",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"Snappabot",size:18,color:"rgba(240,232,216,0.9)",weight:800,gap:4},{text:"Three.js · TypeScript · Vite",size:11,color:"rgba(200,168,106,0.4)",gap:40},{text:"MADE WITH 🌳 IN MELBOURNE",size:14,color:"#C8A86A",spacing:2,gap:40},{text:'"The walls remember every hand that shaped them."',size:14,color:"rgba(200,168,106,0.6)",italic:!0,gap:60},{text:"TROWELED EARTH MELBOURNE",size:14,color:"#C8A86A",spacing:2,gap:8},{text:"troweledearthmelbourne.com.au",size:12,color:"rgba(200,168,106,0.4)",gap:80}];class $1{constructor(){x(this,"overlay");x(this,"creditsAudio",null);x(this,"rafId",0)}show(){return new Promise(e=>this._build(e))}_build(e){this._injectStyles(),this.overlay=document.createElement("div"),this.overlay.id="credits-overlay",this.overlay.style.cssText=`
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
    `;let n=0;q1.forEach(u=>{const h=document.createElement("div"),f=u.size||14;h.textContent=u.text,h.style.cssText=`
        color: ${u.color||"rgba(240,232,216,0.8)"};
        font-size: ${f}px;
        font-weight: ${u.weight||400};
        letter-spacing: ${u.spacing||0}px;
        font-style: ${u.italic?"italic":"normal"};
        margin-bottom: ${u.gap||16}px;
        line-height: 1.4;
      `,i.appendChild(h),n+=f*1.4+(u.gap||16)});const s=document.createElement("div");s.style.height="100vh",i.appendChild(s);const a=document.createElement("div");a.style.cssText=`
      position:absolute; inset:0; z-index:5; pointer-events:none;
      background: linear-gradient(
        180deg,
        rgba(5,4,2,1) 0%,
        rgba(5,4,2,0) 8%,
        rgba(5,4,2,0) 92%,
        rgba(5,4,2,1) 100%
      );
    `,this.overlay.appendChild(t),this.overlay.appendChild(i),this.overlay.appendChild(a),document.body.appendChild(this.overlay),this._startAudio();const r=.6;let l=-window.innerHeight;const c=n+window.innerHeight,d=()=>{if(this.overlay.isConnected){if(l+=r,i.style.transform=`translateX(-50%) translateY(-${l}px)`,l>c){this._finish(e);return}this.rafId=requestAnimationFrame(d)}};this.rafId=requestAnimationFrame(d)}_startAudio(){try{const e=new Audio;e.src=Zt.credits,e.volume=0,e.play().then(()=>{this.creditsAudio=e;let t=0;const i=setInterval(()=>{t=Math.min(t+.02,.65),e.volume=t,t>=.65&&clearInterval(i)},80)}).catch(()=>{})}catch{}}_finish(e){if(cancelAnimationFrame(this.rafId),this.creditsAudio){const t=this.creditsAudio;let i=t.volume;const n=setInterval(()=>{i=Math.max(0,i-.04),t.volume=i,i<=0&&(clearInterval(n),t.pause(),t.src="")},60)}this.overlay.style.transition="opacity 0.8s",this.overlay.style.opacity="0",setTimeout(()=>{this.overlay.remove(),e()},850)}_injectStyles(){if(document.getElementById("credits-styles"))return;const e=document.createElement("style");e.id="credits-styles",e.textContent=`
      #credits-overlay {
        background: linear-gradient(180deg, #050402 0%, #080604 50%, #050402 100%);
      }
    `,document.head.appendChild(e)}}const J1="./",K1=`${J1}tem-logo-white.jpg`;class Z1{constructor(){x(this,"overlay");x(this,"scrollTimer",0);x(this,"ctx",null);x(this,"masterGain",null);x(this,"themeAudio",null)}show(e){return new Promise(t=>{this._build(t,e)})}_build(e,t){this._injectStyles(),this.overlay=document.createElement("div"),this.overlay.id="start-menu",this.overlay.style.cssText=`
      position:fixed; inset:0; z-index:40000;
      background:#07050302;
      display:flex; flex-direction:column;
      align-items:center; justify-content:center;
      font-family: system-ui, -apple-system, sans-serif;
      overflow:hidden;
    `;const i=document.createElement("div");i.className="sm-lyrics-back";const n=document.createElement("div");n.id="sm-lyrics-inner";const s=[...Yc,...Yc];s.forEach(h=>{const f=document.createElement("div");f.className="sm-lyric-line",f.textContent=h,n.appendChild(f)}),i.appendChild(n),this.overlay.appendChild(i);const a=document.createElement("div");a.className="sm-gradient",this.overlay.appendChild(a);const r=document.createElement("div");r.className="sm-content",r.innerHTML=`
      <img src="${K1}" alt="Troweled Earth" class="sm-logo-img"
        onerror="this.outerHTML='<div class=sm-logo>🌳</div>'">
      <div class="sm-title">TROWELED EARTH RUSH</div>
      <div class="sm-tagline">"The walls remember every hand that shaped them."</div>
    `;const l=document.createElement("div");l.className="sm-btn-row";const c=this._btn("▶  PLAY","#C1666B","#9E4A50");c.style.fontSize="18px",c.style.padding="18px 48px",c.addEventListener("click",h=>{h.stopPropagation(),this._stopAudio(),this.overlay.style.transition="opacity 0.5s",this.overlay.style.opacity="0",setTimeout(()=>{this.overlay.remove(),e()},520)});const d=this._btn("📋  HOW TO PLAY","rgba(200,168,106,0.18)","rgba(200,168,106,0.28)");d.style.border="1.5px solid rgba(200,168,106,0.4)",d.addEventListener("click",h=>{h.stopPropagation(),this._showHowToPlay()});const u=this._btn("🎬  CREDITS","rgba(255,255,255,0.06)","rgba(255,255,255,0.12)");u.style.border="1.5px solid rgba(255,255,255,0.15)",u.style.color="rgba(255,255,255,0.55)",u.addEventListener("click",h=>{h.stopPropagation(),this._killAudio(),this.overlay.style.opacity="0",this.overlay.style.transition="opacity 0.3s",setTimeout(async()=>{await new $1().show(),this.overlay.style.opacity="1",this._startAudio()},320)}),l.appendChild(c),l.appendChild(d),l.appendChild(u),r.appendChild(l),this.overlay.appendChild(r),document.body.appendChild(this.overlay),this._startScroll(n,s.length),t?(this.themeAudio=t,t.loop=!0,t.volume=.6):this.overlay.addEventListener("click",()=>this._startAudio(),{once:!0})}_btn(e,t,i){const n=document.createElement("button");return n.innerHTML=e,n.style.cssText=`
      background:${t}; border:none; color:#fff;
      font-size:14px; font-weight:800; letter-spacing:1px;
      padding:14px 32px; border-radius:50px; cursor:pointer;
      touch-action:manipulation; transition:background 0.15s, transform 0.1s;
      font-family:system-ui,sans-serif;
      box-shadow:0 4px 20px rgba(0,0,0,0.4);
    `,n.addEventListener("mouseenter",()=>{n.style.background=i,n.style.transform="translateY(-2px)"}),n.addEventListener("mouseleave",()=>{n.style.background=t,n.style.transform=""}),n}_startScroll(e,t){let i=0;const a=t*38/2,r=()=>{i+=.35,i>=a&&(i=0),e.style.transform=`translateY(-${i}px)`,this.scrollTimer=requestAnimationFrame(r)};this.scrollTimer=requestAnimationFrame(r)}_startAudio(){try{const e=new Audio;e.src=Zt.theme,e.volume=0,e.loop=!0,this.themeAudio=e,e.play().then(()=>{let t=0;const i=setInterval(()=>{if(!this.themeAudio){clearInterval(i);return}t=Math.min(t+.02,.6),e.volume=t,t>=.6&&clearInterval(i)},100)}).catch(()=>{this.themeAudio=null,this._startSynthAudio()});return}catch{}this._startSynthAudio()}_startSynthAudio(){try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=0,this.masterGain.connect(this.ctx.destination),this.masterGain.gain.linearRampToValueAtTime(.1,this.ctx.currentTime+2);const e=76,t=e/60;let i=this.ctx.currentTime+.5;const n=this.ctx.createOscillator(),s=this.ctx.createGain(),a=this.ctx.createBiquadFilter();n.type="sine",n.frequency.value=55,a.type="lowpass",a.frequency.value=180,s.gain.value=.5,n.connect(a),a.connect(s),s.connect(this.masterGain),n.start(i);for(let r=0;r<180;r++){const l=i+r/t,c=r%4;c===0&&this._kick(l,55),(c===1||c===3)&&this._snare(l),this._hihat(l),c===0&&this._bass(l,55),r%8===0&&this._pad(l,220*(r%16<8?1:1.5))}}catch{}}_killAudio(){this.themeAudio&&(this.themeAudio.pause(),this.themeAudio.src="",this.themeAudio=null);try{this.ctx&&(this.ctx.close(),this.ctx=null,this.masterGain=null)}catch{}}_stopAudio(){if(this.themeAudio){const e=this.themeAudio;let t=e.volume;const i=setInterval(()=>{t=Math.max(0,t-.05),e.volume=t,t<=0&&(clearInterval(i),e.pause(),e.src="")},50)}try{this.masterGain&&this.ctx&&(this.masterGain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.5),setTimeout(()=>{var e;try{(e=this.ctx)==null||e.close()}catch{}},600))}catch{}}_kick(e,t){if(!(!this.ctx||!this.masterGain))try{const i=this.ctx.createOscillator(),n=this.ctx.createGain();i.frequency.setValueAtTime(t,e),i.frequency.exponentialRampToValueAtTime(20,e+.15),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.28),i.connect(n),n.connect(this.masterGain),i.start(e),i.stop(e+.32)}catch{}}_snare(e){if(!(!this.ctx||!this.masterGain))try{const t=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*.18),this.ctx.sampleRate),i=t.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;const n=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),a=this.ctx.createGain();n.buffer=t,s.type="bandpass",s.frequency.value=1800,a.gain.setValueAtTime(.055,e),a.gain.exponentialRampToValueAtTime(.001,e+.18),n.connect(s),s.connect(a),a.connect(this.masterGain),n.start(e),n.stop(e+.2)}catch{}}_hihat(e){if(!(!this.ctx||!this.masterGain))try{const t=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*.04),this.ctx.sampleRate),i=t.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;const n=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),a=this.ctx.createGain();n.buffer=t,s.type="highpass",s.frequency.value=9e3,a.gain.setValueAtTime(.016,e),a.gain.exponentialRampToValueAtTime(.001,e+.04),n.connect(s),s.connect(a),a.connect(this.masterGain),n.start(e),n.stop(e+.05)}catch{}}_bass(e,t){if(!(!this.ctx||!this.masterGain))try{const i=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.value=t,n.type="lowpass",n.frequency.value=280,s.gain.setValueAtTime(.3,e),s.gain.exponentialRampToValueAtTime(.001,e+.45),i.connect(n),n.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+.5)}catch{}}_pad(e,t){if(!(!this.ctx||!this.masterGain))try{const i=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.createBiquadFilter();i.type="triangle",i.frequency.value=t,s.type="lowpass",s.frequency.value=1e3,n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(.07,e+.6),n.gain.linearRampToValueAtTime(0,e+4),i.connect(s),s.connect(n),n.connect(this.masterGain),i.start(e),i.stop(e+4.5)}catch{}}_showHowToPlay(){const e=document.createElement("div");e.style.cssText=`
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
    `,document.head.appendChild(e)}}class Q1{constructor(e,t,i,n){x(this,"btn");x(this,"panel");x(this,"radioSlot");x(this,"moneySlot");x(this,"_open",!1);this._build(e,t,i,n)}_build(e,t,i,n){this.btn=document.createElement("button"),this.btn.textContent="☰",this.btn.style.cssText=`
      position: fixed; top: 10px; right: 12px; z-index: 3100;
      background: rgba(8,6,4,0.88); backdrop-filter: blur(10px);
      border: 1px solid rgba(200,168,106,0.4); border-radius: 12px;
      color: #C8A86A; font-size: 20px; font-weight: 900;
      width: 44px; height: 44px; line-height: 1;
      cursor: pointer; touch-action: manipulation;
      box-shadow: 0 2px 12px rgba(0,0,0,0.55);
      transition: background 0.15s, color 0.15s;
    `,this.btn.addEventListener("click",l=>{l.stopPropagation(),this._toggle()}),document.body.appendChild(this.btn),this.panel=document.createElement("div"),this.panel.style.cssText=`
      position: fixed; top: 62px; right: 10px; z-index: 3099;
      background: rgba(8,6,4,0.95); backdrop-filter: blur(18px);
      border: 1px solid rgba(200,168,106,0.22); border-radius: 18px;
      padding: 16px 14px; width: min(300px, calc(100vw - 24px));
      display: none; flex-direction: column; gap: 12px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.75);
      font-family: system-ui, sans-serif;
      max-height: calc(100vh - 80px); overflow-y: auto;
    `,this.moneySlot=document.createElement("div"),this.panel.appendChild(this.moneySlot),this.panel.appendChild(this._divider()),this.radioSlot=document.createElement("div"),this.panel.appendChild(this.radioSlot),this.panel.appendChild(this._divider());const s=document.createElement("div");s.style.cssText="display: flex; gap: 10px;";const a=this._actionBtn("🪣  Collection","rgba(70,60,30,0.9)",()=>{this._close(),e()}),r=this._actionBtn("📋  JOBS","rgba(193,102,107,0.9)",()=>{this._close(),t()});if(s.appendChild(a),s.appendChild(r),this.panel.appendChild(s),i){const l=this._actionBtn("🎨  MARBELLINO MIXER","rgba(30,50,40,0.9)",()=>{this._close(),i()});l.style.cssText+=`
        width:100%; margin-top:2px;
        background:linear-gradient(135deg, rgba(40,70,50,0.95), rgba(20,40,30,0.95));
        border:1px solid rgba(68,221,136,0.2);
        color:#88FFBB; font-size:13px;
      `,this.panel.appendChild(l)}if(n){const l=this._actionBtn("⚔️  CONTRACT WARS","rgba(40,20,5,0.9)",()=>{this._close(),n()});l.style.cssText+=`
        width:100%; margin-top:2px;
        background:linear-gradient(135deg, rgba(60,30,5,0.95), rgba(35,15,3,0.95));
        border:1px solid rgba(255,180,0,0.25);
        color:#FFD700; font-size:13px; letter-spacing:1px;
      `,this.panel.appendChild(l)}document.body.appendChild(this.panel),document.addEventListener("pointerdown",l=>{this._open&&!this.panel.contains(l.target)&&l.target!==this.btn&&this._close()},{passive:!0})}_toggle(){this._open?this._close():this._openPanel()}_openPanel(){this._open=!0,this.panel.style.display="flex",this.btn.textContent="✕",this.btn.style.color="#ff9999"}_close(){this._open=!1,this.panel.style.display="none",this.btn.textContent="☰",this.btn.style.color="#C8A86A"}mountMoneyPanel(e){e.style.cssText+="position:relative; top:auto; right:auto; align-items:flex-start;",this.moneySlot.appendChild(e)}mountRadio(e){e.style.cssText+="position:relative; top:auto; left:auto; transform:none; width:100%;",this.radioSlot.appendChild(e)}_actionBtn(e,t,i){const n=document.createElement("button");return n.innerHTML=e,n.style.cssText=`
      flex: 1; background: ${t}; border: none; color: #fff;
      font-size: 14px; font-weight: 800; letter-spacing: 0.5px;
      padding: 13px 14px; border-radius: 12px; cursor: pointer;
      touch-action: manipulation; box-shadow: 0 2px 8px rgba(0,0,0,0.4);
      font-family: system-ui, sans-serif;
    `,n.addEventListener("click",s=>{s.stopPropagation(),i()}),n}_divider(){const e=document.createElement("div");return e.style.cssText="height: 1px; background: rgba(200,168,106,0.12); margin: 0 -4px;",e}}const el=[{id:"jose",name:"Jose",title:"Wall Jesus 🙏",color:"#E8A830",skinTone:"#C8856A",hairColor:"#1e0d00",locked:!1,passive:{name:"Touch of God",desc:"Wall jobs pay +15%. Spill meter drains 20% slower."},active:{name:"Wall Jesus Mode",desc:"Instant wall prep — skip the prep phase on any job."},perkTag:"Always in. He IS the mission.",payMult:1.15,speedMult:1,spillGuard:.2,breakImmune:!1,btcBoost:1,timerBonus:0},{id:"jarrad",name:"Jarrad",title:"Plan/No Plan 🎲",color:"#9B59B6",skinTone:"#E0B090",hairColor:"#1a1208",locked:!1,passive:{name:"Coin Flip",desc:"50/50: reveals best job OR chaos job with 2× payout."},active:{name:"Blueprint",desc:"Pause mid-job. Get +15 seconds back on the clock."},perkTag:"High risk. High reward.",payMult:1,speedMult:1,spillGuard:0,breakImmune:!1,btcBoost:1,timerBonus:15},{id:"matt",name:"Matt",title:"Diplomatt 💼",color:"#4A90D9",skinTone:"#E8C0A0",hairColor:"#5a3010",locked:!1,passive:{name:"The Pitch",desc:"Unlocks premium jobs. +10% base pay on all work."},active:{name:"Renegotiate",desc:"Push for up to 30% bonus payout mid-job."},perkTag:"+10% pay. He talks money.",payMult:1.1,speedMult:1,spillGuard:0,breakImmune:!1,btcBoost:1,timerBonus:0},{id:"tsuyoshi",name:"Tsuyoshi",title:"Mohawk Rush ⚡",color:"#FF4444",skinTone:"#F0D4B0",hairColor:"#080808",locked:!1,passive:{name:"Defect Detect",desc:"Spots hidden defects — prevents penalty deductions."},active:{name:"RUSH MODE",desc:"Van speed +30% for 20 seconds. ANYTIME."},perkTag:"+30% van speed. Does not stop.",payMult:1,speedMult:1.3,spillGuard:0,breakImmune:!1,btcBoost:1,timerBonus:5},{id:"fabio",name:"Fabio",title:"Andiamo! 🍕",color:"#27AE60",skinTone:"#D4A070",hairColor:"#1a0e00",locked:!1,passive:{name:"Pressure Play",desc:"Speed +20% when job timer drops below 30 seconds."},active:{name:"Pizza Break",desc:"Full bladder reset + +10 seconds added to timer."},perkTag:"Clutch. Best under pressure.",payMult:1,speedMult:1.2,spillGuard:0,breakImmune:!1,btcBoost:1,timerBonus:10},{id:"phil",name:"Phil",title:"The Veteran 🧱",color:"#7F8C8D",skinTone:"#D8B89A",hairColor:"#C8C8C4",locked:!1,passive:{name:"Seen It All",desc:"Immune to random break interrupts. No forced stops."},active:{name:"Fill Me Crack",desc:"Auto-completes prep stage on any job. Instant."},perkTag:"No interruptions. Pure focus.",payMult:1,speedMult:1,spillGuard:.15,breakImmune:!0,btcBoost:1,timerBonus:0},{id:"joe",name:"Joe",title:"Knows Too Much 👁️",color:"#E67E22",skinTone:"#EED8C0",hairColor:"#3a2510",locked:!1,passive:{name:"Intel Drop",desc:"Random secret high-pay jobs appear only with Joe."},active:{name:"Off the Books",desc:"Next job's full payout goes direct to BTC. No cut."},perkTag:"Off the books. Sats to stack.",payMult:1,speedMult:1,spillGuard:0,breakImmune:!1,btcBoost:1.25,timerBonus:0},{id:"connie",name:"Connie",title:"German Efficiency 🔩",color:"#E74C3C",skinTone:"#F0C8A0",hairColor:"#E8D080",locked:!1,passive:{name:"Zero Tolerance",desc:"Failed job penalties cut by 50%. She handles it."},active:{name:"Drill Sergeant",desc:"Whole crew works 40% faster for one full job."},perkTag:"Penalty shield. She will not let you fail.",payMult:1,speedMult:1,spillGuard:.1,breakImmune:!1,btcBoost:1,timerBonus:0},{id:"mikayla",name:"Mikayla",title:"Books Full 📞",color:"#1ABC9C",skinTone:"#FDDBB4",hairColor:"#8B4513",locked:!1,passive:{name:"Full Board",desc:"Always 3+ jobs on the board. She keeps it stacked."},active:{name:"Priority Book",desc:"Summons a premium job to your nearest location."},perkTag:"More jobs. More sats. Always.",payMult:1.05,speedMult:1,spillGuard:0,breakImmune:!1,btcBoost:1,timerBonus:0}];let Vs=[];function ev(o){Vs=[...o]}function bo(){return Vs}function tl(o){return el.find(e=>e.id===o)}function tv(){return Vs.reduce((o,e)=>{const t=tl(e);return t?o*t.payMult:o},1)}function iv(){return Vs.some(o=>{var e;return(e=tl(o))==null?void 0:e.breakImmune})}function nv(){return Vs.reduce((o,e)=>{const t=tl(e);return t?o+t.timerBonus:o},0)}const Ls=class Ls{constructor(){x(this,"_el",null);x(this,"_selected",new Set)}show(e,t,i){this.hide(),this._selected=new Set;const n=document.createElement("div");n.id="crew-sel-ov",n.style.cssText=`
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
      <div style="color:#aaa;font-size:11px;margin-top:4px;">Pick <strong style="color:#fff;">any 3 crew</strong> to roll with.</div>
    `,n.appendChild(s);const a=document.createElement("div");a.id="crew-synergy",a.style.cssText=`
      color:#2ECC40; font-size:11px; min-height:18px;
      text-align:center; padding:6px 16px; transition:opacity 0.3s;
      width:100%; max-width:420px; box-sizing:border-box;
    `,n.appendChild(a);const r=document.createElement("div");r.style.cssText=`
      display:grid; grid-template-columns:repeat(3,1fr);
      gap:10px; padding:8px 12px; width:100%;
      max-width:420px; box-sizing:border-box;
    `;const l=document.createElement("button");l.id="crew-confirm",l.style.cssText=`
      background:#555; color:#888; border:none;
      padding:14px 28px; font-size:15px; font-weight:900;
      border-radius:8px; cursor:not-allowed; flex:1;
      font-family:'Arial Black',Arial,sans-serif;
      letter-spacing:1px; transition:all 0.2s;
    `,l.textContent="🚐 ROLL OUT",l.disabled=!0,el.forEach(u=>{const h=this._makeCard(u,a,()=>this._updateConfirm(l));r.appendChild(h)}),n.appendChild(r);const c=document.createElement("div");c.style.cssText=`
      position:fixed; bottom:0; left:0; right:0;
      background:linear-gradient(0deg,#0a0a0a,rgba(0,0,0,0.9));
      padding:12px 16px; display:flex; align-items:center;
      justify-content:space-between; z-index:13000; gap:10px;
    `;const d=document.createElement("div");d.id="crew-count",d.style.cssText="color:#aaa;font-size:12px;font-weight:700;min-width:100px;",d.textContent="0 / 3 picked",c.appendChild(d),c.appendChild(l),n.appendChild(c),l.addEventListener("click",()=>{ev([...this._selected]),this.hide(),i([...this._selected])}),document.body.appendChild(n),this._el=n}hide(){var e;(e=this._el)==null||e.remove(),this._el=null}_makeCard(e,t,i){const n=document.createElement("div");n.dataset.id=e.id;const s=e.id==="jose";if(n.style.cssText=`
      background:${s?"#1a0e00":"#111"}; 
      border:2px solid ${s?"#E8A83066":"#333"};
      border-radius:10px; padding:10px 8px;
      display:flex; flex-direction:column; align-items:center;
      gap:5px; cursor:pointer; transition:all 0.18s;
      user-select:none; -webkit-tap-highlight-color:transparent;
      position:relative;
    `,s){const u=document.createElement("div");u.style.cssText=`
        position:absolute; top:4px; right:4px;
        background:#E8A830; color:#000;
        font-size:7px; font-weight:900;
        padding:1px 4px; border-radius:4px;
        letter-spacing:0.5px;
      `,u.textContent="★",n.appendChild(u)}const a=this._makeAvatar(e,52);n.appendChild(a);const r=document.createElement("div");r.style.cssText="color:#fff;font-size:12px;font-weight:900;text-align:center;",r.textContent=e.name,n.appendChild(r);const l=document.createElement("div");l.style.cssText=`color:${e.color};font-size:9px;font-weight:700;text-align:center;`,l.textContent=e.title,n.appendChild(l);const c=document.createElement("div");c.style.cssText=`
      color:#aaa;font-size:8.5px;text-align:center;
      line-height:1.3; margin-top:2px;
    `,c.textContent=e.passive.desc,n.appendChild(c);const d=document.createElement("div");return d.style.cssText=`
      background:${e.color}22; border:1px solid ${e.color}66;
      color:${e.color}; font-size:8px; font-weight:700;
      padding:2px 6px; border-radius:8px; text-align:center;
      margin-top:2px;
    `,d.textContent=e.passive.name.toUpperCase(),n.appendChild(d),n.addEventListener("click",()=>{const u=e.id;if(this._selected.has(u))this._selected.delete(u),n.style.border=`2px solid ${s?"#E8A83066":"#333"}`,n.style.background=s?"#1a0e00":"#111",n.style.boxShadow="",n.style.transform="";else{if(this._selected.size>=Ls.MAX_PICKS)return;this._selected.add(u),n.style.border=`2px solid ${e.color}`,n.style.background=`${e.color}18`,n.style.boxShadow=`0 0 14px ${e.color}60`,n.style.transform="scale(1.04)"}this._updateSynergy(t),i()}),n}_updateConfirm(e){const t=this._selected.size,i=document.getElementById("crew-count");i&&(i.textContent=`${t} / 3 picked`),t===Ls.MAX_PICKS?(e.style.background="#2ECC40",e.style.color="#000",e.style.cursor="pointer",e.style.boxShadow="0 0 18px #2ECC4080",e.disabled=!1):(e.style.background="#555",e.style.color="#888",e.style.cursor="not-allowed",e.style.boxShadow="",e.disabled=!0)}_updateSynergy(e){const t=n=>this._selected.has(n);let i="";t("jose")&&t("phil")&&(i="⚡ Wall Jesus + Veteran — zero interruptions, pure flow"),t("fabio")&&t("tsuyoshi")&&(i="🔥 Speed squad — clock-out crunch kings"),t("joe")&&t("matt")&&(i="💰 Off-books premium — BTC rockets this run"),t("connie")&&t("jarrad")&&(i="🎲 Penalty shield + chaos — high risk, protected"),t("jose")&&t("connie")&&(i="💼 Wall Jesus + Efficiency — unstoppable combo"),t("mikayla")&&t("matt")&&(i="📈 Full board + pay boost — maximum earning run"),t("jose")&&t("matt")&&t("connie")&&(i="👑 THE DREAM TEAM — Jose + Diplomatt + German Efficiency"),e.textContent=i,e.style.opacity=i?"1":"0"}_makeAvatar(e,t){const i=document.createElement("canvas");i.width=t,i.height=t,i.style.cssText="border-radius:50%; display:block;";const n=i.getContext("2d"),s=t/2;n.fillStyle=e.id==="jose"?"#1a0800":"#1a1a1a",n.beginPath(),n.arc(s,s,s,0,Math.PI*2),n.fill();const a=t*.14,r=t*.62;n.fillStyle=e.skinTone,n.fillRect(s-a/2,r,a,t*.22);const l=t*.44,c=t*.22;switch(n.fillStyle=e.skinTone,n.beginPath(),n.ellipse(s,l,c*.88,c,0,0,Math.PI*2),n.fill(),n.fillStyle=e.hairColor,n.strokeStyle=e.hairColor,e.id){case"jose":{n.lineCap="round",[{dx:-10,len:t*.34,w:2.5},{dx:-5,len:t*.38,w:3},{dx:1,len:t*.36,w:2.5},{dx:6,len:t*.3,w:2},{dx:10,len:t*.26,w:2}].forEach(g=>{n.lineWidth=g.w,n.beginPath(),n.moveTo(s+g.dx,l-c*.1),n.bezierCurveTo(s+g.dx-2,l+g.len*.5,s+g.dx+2,l+g.len*.8,s+g.dx,l+g.len),n.stroke()}),n.fillStyle=e.hairColor,n.beginPath(),n.arc(s,l-c*.55,c*1.02,Math.PI,0),n.fill(),n.strokeStyle="rgba(200,200,200,0.7)",n.lineWidth=1.2;const u=c*.85,h=c*.44,f=l-c*.1;n.beginPath(),n.roundRect(s-u-.5,f-h/2,u,h,1.5),n.stroke(),n.beginPath(),n.roundRect(s+.5,f-h/2,u,h,1.5),n.stroke();break}case"matt":{n.beginPath(),n.arc(s,l-c*.55,c*1.08,Math.PI,0),n.fill(),n.beginPath(),n.ellipse(s-c*.3,l-c*1.2,c*.65,c*.38,-.2,0,Math.PI*2),n.fill(),n.fillStyle="#3a1a08",n.beginPath(),n.ellipse(s,l+c*.45,c*.65,c*.32,0,0,Math.PI),n.fill();break}case"tsuyoshi":{const d=t*.12,u=l-c*.05;n.fillStyle=e.hairColor,n.fillRect(s-d/2,u-c*.2,d,c*.35),[{ox:-.3,h:t*.28,t:-.15},{ox:0,h:t*.36,t:0},{ox:.3,h:t*.26,t:.15}].forEach(h=>{const f=s+h.ox*d*2;n.beginPath(),n.moveTo(f-2.5,u),n.lineTo(f+2.5,u),n.lineTo(f+Math.sin(h.t)*h.h*.4,u-h.h),n.closePath(),n.fill()});break}case"jarrad":{n.beginPath(),n.arc(s,l-c*.6,c*1.05,Math.PI,0),n.fill(),n.beginPath(),n.ellipse(s-c*.1,l-c*1.3,c*.6,c*.28,-.1,0,Math.PI*2),n.fill(),n.fillStyle="#2a1e08",n.beginPath(),n.ellipse(s,l+c*.42,c*.6,c*.26,0,0,Math.PI),n.fill(),n.strokeStyle="#111",n.lineWidth=1.2,n.fillStyle="rgba(160,200,240,0.15)";const d=c*.82,u=l-c*.1;n.beginPath(),n.roundRect(s-d-.5,u-c*.22,d,c*.44,1.5),n.fill(),n.stroke(),n.beginPath(),n.roundRect(s+.5,u-c*.22,d,c*.44,1.5),n.fill(),n.stroke();break}case"fabio":{n.beginPath(),n.arc(s,l-c*.6,c*1.05,Math.PI,0),n.fill(),n.beginPath(),n.ellipse(s,l-c*1.28,c*.65,c*.28,.1,0,Math.PI*2),n.fill(),n.fillStyle="#2e1800",n.beginPath(),n.ellipse(s,l+c*.4,c*.55,c*.22,0,0,Math.PI),n.fill();break}case"phil":{n.fillStyle="#C8C8C4",n.beginPath(),n.arc(s,l-c*.6,c*1.08,Math.PI,0),n.fill(),n.fillStyle="#DDDDD8",n.beginPath(),n.ellipse(s,l-c*1.1,c*.55,c*.28,0,0,Math.PI*2),n.fill(),n.strokeStyle="#111",n.lineWidth=1.2,n.fillStyle="rgba(160,200,240,0.15)";const d=c*.82,u=l-c*.1;n.beginPath(),n.roundRect(s-d-.5,u-c*.22,d,c*.44,1.5),n.fill(),n.stroke(),n.beginPath(),n.roundRect(s+.5,u-c*.22,d,c*.44,1.5),n.fill(),n.stroke();break}case"joe":{n.beginPath(),n.arc(s,l-c*.6,c*1.05,Math.PI,0),n.fill(),n.beginPath(),n.ellipse(s-c*.1,l-c*1.3,c*.55,c*.26,-.1,0,Math.PI*2),n.fill(),n.fillStyle="#D4E800",n.fillRect(s-t*.25,t*.82,t*.5,t*.06);break}case"connie":{n.fillStyle="#E8D080",n.beginPath(),n.arc(s,l-c*.45,c*1.08,Math.PI,0),n.fill(),n.fillRect(s-c*1,l+c*.1,c*2,t*.16);break}case"mikayla":{n.fillStyle="#8B4513",n.beginPath(),n.arc(s,l-c*.45,c*1.05,Math.PI,0),n.fill(),n.fillRect(s-c*.9,l+c*.1,c*1.8,t*.14);break}}return n.strokeStyle=e.id==="jose"?"#E8A830":e.color+"99",n.lineWidth=e.id==="jose"?2.5:1.5,n.beginPath(),n.arc(s,s,s-1.5,0,Math.PI*2),n.stroke(),i}};x(Ls,"MAX_PICKS",3);let Pr=Ls;const il="https://tyqlcqhbxbbikvnjmqak.supabase.co",is="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5cWxjcWhieGJiaWt2bmptcWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4OTc4NjMsImV4cCI6MjA4NzQ3Mzg2M30.1_5ZGZI4if2p0egGTaSPae_igodEpex-lj5ZkernuuA",nl="tem_scores",qd="tem-leaderboard-v1",jc=100;async function sv(o){lv(o);try{await fetch(`${il}/rest/v1/${nl}`,{method:"POST",headers:{apikey:is,Authorization:`Bearer ${is}`,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(o)})}catch(e){console.warn("[Leaderboard] submit failed (offline?)",e)}}async function ov(o,e=5){try{const t=encodeURIComponent(o.replace(/^⚔️\s*/,"").trim()),i=await fetch(`${il}/rest/v1/${nl}?job_title=ilike.*${t}*&order=completion_time_s.asc&limit=${e}`,{headers:{apikey:is,Authorization:`Bearer ${is}`}});if(i.ok){const n=await i.json();if(n.length>0)return n}}catch(t){console.warn("[Leaderboard] fetch failed (offline?)",t)}return sl().filter(t=>t.job_title.toLowerCase().includes(o.replace(/^⚔️\s*/,"").trim().toLowerCase())).sort((t,i)=>t.completion_time_s-i.completion_time_s).slice(0,e)}async function av(o=10){try{const e=await fetch(`${il}/rest/v1/${nl}?order=payout.desc&limit=${o}`,{headers:{apikey:is,Authorization:`Bearer ${is}`}});if(e.ok){const t=await e.json();if(t.length>0)return t}}catch(e){console.warn("[Leaderboard] global fetch failed",e)}return sl().sort((e,t)=>t.payout-e.payout).slice(0,o)}const $d="tem-player-name";function Jd(){return localStorage.getItem($d)}function rv(o){localStorage.setItem($d,o.trim().slice(0,20))}function sl(){try{return JSON.parse(localStorage.getItem(qd)??"[]")}catch{return[]}}function lv(o){const e=sl();e.unshift({...o,id:crypto.randomUUID(),created_at:new Date().toISOString()}),e.length>jc&&(e.length=jc),localStorage.setItem(qd,JSON.stringify(e))}class cv{show(e){const t=Jd();if(t){e(t);return}const i=document.createElement("div");i.style.cssText=`
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
    `,document.body.appendChild(i);const n=i.querySelector("#pn-input"),s=i.querySelector("#pn-btn");setTimeout(()=>n.focus(),100);const a=()=>{const r=n.value.trim()||"TEM Crew";rv(r),i.remove(),e(r)};s.addEventListener("click",a),n.addEventListener("keydown",r=>{r.key==="Enter"&&a()})}}const Nn=[{name:"Spanish White",shots:{B:1,Y:1,L:0,R:0,G:0},hex:"#F8F4EC",difficulty:1,hint:"Minimal — barely any pigment"},{name:"Papercut",shots:{B:1,Y:2,L:1,R:0,G:0},hex:"#F0E8D0",difficulty:1,hint:"Double the Yellow, everything even"},{name:"Tranquil",shots:{B:2,Y:2,L:2,R:0,G:0},hex:"#E4DAC0",difficulty:1,hint:"All three equal — balanced warm white"},{name:"Sage Mist",shots:{B:1,Y:1,L:1,R:0,G:2},hex:"#DDE8D8",difficulty:1,hint:"Mostly base with a touch of Green"},{name:"Ivory",shots:{B:3,Y:3,L:3,R:0,G:0},hex:"#EDE0BC",difficulty:2,hint:"Classic — three equal shots each"},{name:"Bones",shots:{B:3,Y:1,L:3,R:0,G:0},hex:"#E8DFC8",difficulty:2,hint:"Like Ivory but drop Yellow to 1"},{name:"Bohemian",shots:{B:3,Y:2,L:3,R:0,G:0},hex:"#DDD0B0",difficulty:2,hint:"Between Ivory and Bones — Y at 2"},{name:"Terracotta",shots:{B:2,Y:3,L:2,R:3,G:0},hex:"#D4906A",difficulty:2,hint:"Add Red to warm it right up"},{name:"Dusty Adobe",shots:{B:3,Y:4,L:3,R:2,G:0},hex:"#C8A07A",difficulty:2,hint:"Yellow-forward with a red accent"},{name:"Sage Brush",shots:{B:3,Y:1,L:1,R:0,G:4},hex:"#A8B898",difficulty:2,hint:"Green forward, light on Yellow and Umber"},{name:"Sawtooth",shots:{B:6,Y:2,L:6,R:0,G:0},hex:"#D4C8A8",difficulty:3,hint:"Double the Black and Umber from Bones"},{name:"Atlas",shots:{B:5,Y:10,L:5,R:0,G:0},hex:"#D4B87A",difficulty:3,hint:"Heavy on Yellow — most of anything"},{name:"Raw Clay",shots:{B:3,Y:2,L:3,R:4,G:0},hex:"#C07850",difficulty:3,hint:"More Red than anything else"},{name:"Olive Drab",shots:{B:4,Y:3,L:3,R:0,G:4},hex:"#A0A870",difficulty:3,hint:"Even Green and Black, balanced Yellow+Umber"},{name:"Iron Rust",shots:{B:5,Y:2,L:4,R:5,G:0},hex:"#A86040",difficulty:3,hint:"Heavy Black and Red, light Yellow"},{name:"River Reed",shots:{B:4,Y:2,L:2,R:0,G:5},hex:"#889878",difficulty:3,hint:"Green dominant, Black second, minimal Yellow"}],gi=[{key:"B",label:"Black",color:"#2a2a2a",dot:"#666666",max:8},{key:"Y",label:"Dirty Yellow",color:"#C8A020",dot:"#E8C040",max:12},{key:"L",label:"Raw Umber",color:"#8B5E30",dot:"#AA7848",max:8},{key:"R",label:"Dirty Red",color:"#A04030",dot:"#CC5542",max:6},{key:"G",label:"Green",color:"#3A6030",dot:"#5A8850",max:8}];function Us(o){const e=parseInt(o.replace("#",""),16);return[e>>16&255,e>>8&255,e&255]}function Kd(o,e,t){return"#"+[o,e,t].map(i=>Math.max(0,Math.min(255,Math.round(i))).toString(16).padStart(2,"0")).join("")}function dv(o,e){const[t,i,n]=Us(o),[s,a,r]=Us(e);return Math.sqrt((t-s)**2+(i-a)**2+(n-r)**2)}function hv(o,e){return Math.max(0,Math.round(100-dv(o,e)*.45))}function La(o){const e={B:o.B??0,Y:o.Y??0,L:o.L??0,R:(o.R??0)*.1,G:o.G??0},t={B:e.B/8,Y:e.Y/12,L:e.L/8,R:e.R/.6,G:e.G/8};let i=0,n=0,s=0,a=0;for(const r of Nn){const l={B:r.shots.B/8,Y:r.shots.Y/12,L:r.shots.L/8,R:r.shots.R*.1/.6,G:r.shots.G/8},d=1/(Math.sqrt((t.B-l.B)**2+(t.Y-l.Y)**2+(t.L-l.L)**2+(t.R-l.R)**2+(t.G-l.G)**2)+.003),[u,h,f]=Us(r.hex);i+=u*d,n+=h*d,s+=f*d,a+=d}return Kd(i/a,n/a,s/a)}const Zd="tem-mixer-v4";function Es(){try{return new Set(JSON.parse(localStorage.getItem(Zd)||"[]"))}catch{return new Set}}function uv(o){try{const e=Es();e.add(o),localStorage.setItem(Zd,JSON.stringify([...e]))}catch{}}class fv{constructor(){x(this,"overlay",null);x(this,"canvas",null);x(this,"ctx",null);x(this,"rafId",0);x(this,"shots",{B:0,Y:0,L:0,R:0,G:0});x(this,"sel","B");x(this,"target",null);x(this,"timer",90);x(this,"timerInt",null);x(this,"solved",!1);x(this,"onDone",null);x(this,"W",400);x(this,"H",240);x(this,"jX",58);x(this,"jY",218);x(this,"bkX",200);x(this,"bkTopY",105);x(this,"bkBotY",168);x(this,"cnX",265);x(this,"cnY",218);x(this,"GRAVITY",520);x(this,"connX",265);x(this,"connDir",-1);x(this,"connSpeed",0);x(this,"connPauseT",0);x(this,"connMinX",0);x(this,"connMaxX",0);x(this,"cannonTipX",0);x(this,"cannonTipY",0);x(this,"aimAngle",-.78);x(this,"aimPower",360);x(this,"isAiming",!1);x(this,"hasFired",!1);x(this,"ball",null);x(this,"splats",[]);x(this,"connieHitT",0);x(this,"bucketFlashT",0);x(this,"bionichipTimer",10+Math.random()*6);x(this,"bionichipActive",!1);x(this,"bionichipT",0);x(this,"BIONIC_DURATION",2.2);x(this,"currentMix","#F8F6F0");x(this,"displayMix","#F8F6F0");x(this,"mixedResult","");x(this,"matchValue",0);x(this,"mixState","idle");x(this,"mixT",0);x(this,"dotEls",{B:[],Y:[],L:[],R:[],G:[]});x(this,"timerEl",null);x(this,"fireBtn",null);x(this,"mixBtn",null);x(this,"pigBtns",{})}show(e){this._cleanup(),this.solved=!1,this.timer=90,this.shots={B:0,Y:0,L:0,R:0,G:0},this.sel="B",this.ball=null,this.splats=[],this.connieHitT=0,this.bucketFlashT=0,this.bionichipActive=!1,this.bionichipT=0,this.bionichipTimer=10+Math.random()*6,this.currentMix="#F8F6F0",this.displayMix="#F8F6F0",this.mixState="idle",this.mixT=0,this.matchValue=0,this.mixedResult="",this.isAiming=!1,this.hasFired=!1,this.onDone=e??null;const t=Es(),i=Nn.filter(n=>!t.has(n.name));this.target=(i.length>0?i:Nn)[Math.floor(Math.random()*(i.length||Nn.length))],this._injectStyles(),this._buildUI(),this._selectPig("B"),this._startTimer(),this._startLoop()}hide(){this._cleanup()}_buildUI(){const e=document.createElement("div");e.id="mmv4-ov",e.style.cssText="position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,0.92);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;animation:mm4Fade 0.2s ease both;",document.body.appendChild(e),this.overlay=e;const t=document.createElement("div");t.style.cssText="background:linear-gradient(170deg,#1c1814,#0e0c0a);border:1px solid rgba(200,168,106,0.22);border-radius:22px;width:min(440px,97vw);max-height:97vh;overflow-y:auto;box-shadow:0 24px 80px rgba(0,0,0,0.95);animation:mm4Slide 0.28s cubic-bezier(.4,0,.2,1) both;",e.appendChild(t);const i=document.createElement("div");i.style.cssText="display:flex;align-items:flex-start;justify-content:space-between;padding:14px 16px 0;",i.innerHTML=`<div>
      <div style="color:#C8A86A;font-size:10px;font-weight:800;letter-spacing:4px;opacity:0.7;">TEM WORKSHOP</div>
      <div style="color:#fff;font-size:18px;font-weight:900;">🎨 MARBELLINO MIXER</div>
      <div style="color:rgba(200,168,106,0.5);font-size:11px;margin-top:2px;">Metal hip. Silicone. Bionic powers. Good luck.</div>
    </div>`;const n=document.createElement("button");n.textContent="✕",n.style.cssText="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.45);font-size:16px;width:34px;height:34px;border-radius:50%;cursor:pointer;flex-shrink:0;",n.addEventListener("click",()=>{this._cleanup(),this._fireOnDone(0)}),i.appendChild(n),t.appendChild(i);const s=document.createElement("div");s.style.cssText="display:flex;align-items:flex-start;gap:10px;padding:10px 16px 0;";const a=document.createElement("div");a.style.cssText="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;";const r=document.createElement("div");r.style.cssText=`width:56px;height:56px;border-radius:12px;border:2.5px solid rgba(200,168,106,0.5);background:${this.target.hex};box-shadow:0 4px 18px rgba(0,0,0,0.4);flex-shrink:0;`;const l="★".repeat(this.target.difficulty)+"☆".repeat(3-this.target.difficulty),c=document.createElement("div"),d=Object.entries(this.target.shots).filter(([,M])=>M>0).map(([M,y])=>`${M}:${y}`).join(" · ");c.innerHTML=`<div style="color:rgba(255,255,255,0.3);font-size:9px;font-weight:700;letter-spacing:2px;text-align:center;">TARGET</div><div id="mmv4-name" style="color:#fff;font-size:13px;font-weight:900;text-align:center;">${this.target.name}</div><div style="color:#FFD080;font-size:10px;font-weight:900;text-align:center;margin-top:2px;letter-spacing:0.5px;">${d}</div><div style="color:#C8A86A;font-size:10px;text-align:center;">${l}</div>`,a.appendChild(r),a.appendChild(c);const u=document.createElement("div");u.style.cssText="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;flex:1;",Nn.forEach(M=>{const y=document.createElement("div"),R=M.name===this.target.name;if(y.style.cssText=`height:22px;border-radius:5px;background:${M.hex};border:${R?"2px solid #FFD700":"1.5px solid rgba(255,255,255,0.12)"};box-shadow:${R?"0 0 8px #FFD70099":"none"};transition:all 0.15s;cursor:default;position:relative;`,y.title=Es().has(M.name)?M.name:"???",Es().has(M.name)&&M.name!==this.target.name){y.style.opacity="0.55";const E=document.createElement("div");E.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:9px;",E.textContent="✓",y.appendChild(E)}u.appendChild(y)}),s.appendChild(a),s.appendChild(u),t.appendChild(s);const h=document.createElement("div");h.style.cssText="padding:10px 16px 0;position:relative;",this.canvas=document.createElement("canvas"),this.canvas.style.cssText="width:100%;border-radius:14px;border:1px solid rgba(255,255,255,0.07);background:#0a0806;box-shadow:inset 0 2px 20px rgba(0,0,0,0.8);touch-action:none;cursor:crosshair;display:block;",this._resizeCanvas(),h.appendChild(this.canvas),t.appendChild(h),this.ctx=this.canvas.getContext("2d");const f=document.createElement("div");f.style.cssText="text-align:center;color:rgba(255,120,50,0.7);font-size:10px;font-weight:700;padding:3px 16px 0;letter-spacing:1px;",f.textContent="🎯 MATCH THE RECIPE — skill of the shot counts!",t.appendChild(f),this.canvas.addEventListener("pointerdown",M=>{M.preventDefault(),!(this.ball||this.mixState==="mixing"||this.solved)&&(this.isAiming=!0,this._updateAim(M))},{passive:!1}),this.canvas.addEventListener("pointermove",M=>{this.isAiming&&this._updateAim(M)},{passive:!0}),this.canvas.addEventListener("pointerup",()=>{this.isAiming=!1});const g=document.createElement("div");g.style.cssText="display:flex;flex-direction:column;gap:6px;padding:8px 16px 0;";for(const M of gi){const y=M.key,R=document.createElement("div");R.id=`mmv4-pig-${y}`,R.style.cssText="display:flex;align-items:center;gap:9px;cursor:pointer;padding:4px 8px;border-radius:10px;border:1.5px solid transparent;transition:all 0.12s;";const E=document.createElement("div");E.style.cssText=`width:16px;height:16px;border-radius:4px;background:${M.color};border:1.5px solid rgba(255,255,255,0.15);flex-shrink:0;`;const A=document.createElement("div");A.style.cssText="color:rgba(255,255,255,0.7);font-size:11px;font-weight:700;width:80px;flex-shrink:0;",A.textContent=M.label;const I=document.createElement("div");I.style.cssText="display:flex;gap:3px;flex:1;align-items:center;flex-wrap:wrap;",this.dotEls[y]=[];for(let _=0;_<Math.min(M.max,12);_++){const P=document.createElement("div");P.style.cssText="width:10px;height:10px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.1);background:transparent;transition:background 0.1s;flex-shrink:0;",I.appendChild(P),this.dotEls[y].push(P)}const T=document.createElement("div");T.id=`mmv4-cnt-${y}`,T.style.cssText=`color:${M.dot};font-size:12px;font-weight:900;min-width:24px;text-align:right;font-variant-numeric:tabular-nums;`,T.textContent="0",R.appendChild(E),R.appendChild(A),R.appendChild(I),R.appendChild(T),R.addEventListener("click",()=>this._selectPig(y)),g.appendChild(R),this.pigBtns[y]=R}t.appendChild(g);const v=document.createElement("div");v.style.cssText="padding:7px 16px 0;",v.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
        <span style="color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:2px;">MATCH</span>
        <span id="mmv4-pct" style="color:#C8A86A;font-size:14px;font-weight:900;">—</span>
      </div>
      <div style="background:rgba(255,255,255,0.06);border-radius:99px;height:7px;overflow:hidden;">
        <div id="mmv4-bar" style="height:100%;width:0%;border-radius:99px;background:linear-gradient(90deg,#C8A86A,#FFD080);transition:width 0.3s,background 0.3s;"></div>
      </div>
      <div id="mmv4-hint" style="color:rgba(200,168,106,0.4);font-size:11px;text-align:center;margin-top:3px;min-height:14px;"></div>
    `,t.appendChild(v);const m=document.createElement("div");m.style.cssText="display:flex;gap:9px;padding:8px 16px 14px;align-items:center;";const p=document.createElement("button");p.textContent="⌫",p.title="Remove last shot",p.style.cssText="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.4);font-size:17px;width:46px;height:48px;border-radius:12px;cursor:pointer;flex-shrink:0;touch-action:manipulation;",p.addEventListener("click",()=>this._undoShot()),this.fireBtn=document.createElement("button"),this.fireBtn.style.cssText="flex:1;height:48px;border:none;border-radius:12px;font-size:13px;font-weight:900;letter-spacing:0.5px;cursor:pointer;touch-action:manipulation;background:linear-gradient(135deg,#8B2020,#5a1010);color:#FFaaaa;box-shadow:0 4px 16px rgba(200,30,30,0.25);transition:transform 0.1s;",this.fireBtn.textContent="🔴 AIM FIRST",this.fireBtn.addEventListener("pointerdown",()=>{this.fireBtn.style.transform="scale(0.97)"}),this.fireBtn.addEventListener("pointerup",()=>{this.fireBtn.style.transform="",this._fire()}),this.mixBtn=document.createElement("button"),this.mixBtn.style.cssText="width:68px;height:48px;border:none;border-radius:12px;font-size:12px;font-weight:900;cursor:pointer;touch-action:manipulation;background:linear-gradient(135deg,#8B4A00,#5A3000);color:#FFD080;flex-shrink:0;box-shadow:0 4px 12px rgba(200,100,0,0.2);transition:transform 0.1s;",this.mixBtn.textContent="🔩 MIX",this.mixBtn.addEventListener("pointerdown",()=>{this.mixBtn.style.transform="scale(0.97)"}),this.mixBtn.addEventListener("pointerup",()=>{this.mixBtn.style.transform="",this._triggerMix()});const b=document.createElement("div");b.style.cssText="display:flex;flex-direction:column;align-items:center;gap:1px;flex-shrink:0;",b.innerHTML='<span style="color:rgba(255,255,255,0.3);font-size:9px;letter-spacing:1px;">TIME</span>',this.timerEl=document.createElement("span"),this.timerEl.style.cssText="color:#fff;font-size:16px;font-weight:900;font-variant-numeric:tabular-nums;",this.timerEl.textContent="1:30",b.appendChild(this.timerEl),m.appendChild(p),m.appendChild(this.fireBtn),m.appendChild(this.mixBtn),m.appendChild(b),t.appendChild(m)}_updateAim(e){if(!this.canvas)return;const t=this.canvas.getBoundingClientRect(),i=this.canvas.width/t.width,n=this.canvas.height/t.height,s=(e.clientX-t.left)*i,a=(e.clientY-t.top)*n,r=s-this.jX,l=a-this.jY;if(this.aimAngle=Math.max(-1.25,Math.min(-.1,Math.atan2(l,r))),this.aimPower=Math.max(220,Math.min(500,Math.sqrt(r*r+l*l)*2.2)),this.fireBtn&&!this.hasFired){const c=gi.find(d=>d.key===this.sel);this.fireBtn.textContent=`💥 FIRE ${c.label.slice(0,3).toUpperCase()}`,this.fireBtn.style.background="linear-gradient(135deg,#CC2222,#882020)",this.fireBtn.style.color="#fff"}}_fire(){if(this.ball||this.mixState==="mixing"||this.solved)return;if(!this.hasFired&&Math.abs(this.aimAngle+.78)<.05&&this.aimPower===360){this.fireBtn&&(this.fireBtn.textContent="← Drag canvas to aim!");return}const e=gi.find(r=>r.key===this.sel);if(this.shots[this.sel]>=e.max){if(this.fireBtn){const r=this.fireBtn.textContent;this.fireBtn.textContent=`MAX ${e.max}!`,setTimeout(()=>{this.fireBtn&&(this.fireBtn.textContent=r||"💥 FIRE")},1200)}return}const t=34,i=this.jX+t*Math.cos(this.aimAngle),n=this.jY-52+t*Math.sin(this.aimAngle);this.cannonTipX=i,this.cannonTipY=n;const s=this.aimPower*Math.cos(this.aimAngle),a=this.aimPower*Math.sin(this.aimAngle);this.ball={x:i,y:n,vx:s,vy:a,r:7,color:gi.find(r=>r.key===this.sel).dot,pigKey:this.sel},this.hasFired=!0,this.fireBtn&&(this.fireBtn.textContent="🔴 IN FLIGHT…")}_selectPig(e){this.sel=e;const t=gi.find(i=>i.key===e);for(const i of gi){const n=this.pigBtns[i.key];n&&(i.key===e?(n.style.borderColor=t.dot,n.style.background=t.color+"22"):(n.style.borderColor="transparent",n.style.background="transparent"))}this.fireBtn&&!this.ball&&(this.fireBtn.textContent=`💥 FIRE ${t.label.slice(0,3).toUpperCase()}`,this.fireBtn.style.background="linear-gradient(135deg,#CC2222,#882020)",this.fireBtn.style.color="#fff")}_undoShot(){this.ball||this.mixState==="mixing"||this.shots[this.sel]>0&&(this.shots[this.sel]--,this._refreshDots(),this.currentMix=La(this.shots))}_refreshDots(){for(const e of gi){const t=e.key,i=this.shots[t];this.dotEls[t].forEach((s,a)=>{s.style.background=a<i?e.dot:"transparent",s.style.borderColor=a<i?e.dot+"88":"rgba(255,255,255,0.1)"});const n=document.getElementById(`mmv4-cnt-${t}`);n&&(n.textContent=String(i))}}_update(e){!this.solved&&this.mixState!=="success"&&(this.connPauseT>0?this.connPauseT-=e:(this.connX+=this.connDir*this.connSpeed*e,this.connX>=this.connMaxX&&(this.connX=this.connMaxX,this.connDir=-1,this.connPauseT=.25+Math.random()*.6),this.connX<=this.connMinX&&(this.connX=this.connMinX,this.connDir=1,this.connPauseT=.25+Math.random()*.6),!this.bionichipActive&&Math.random()<e*.3&&(this.connSpeed=(55+Math.random()*50)*(this.W/400)),this.bionichipTimer-=e,this.bionichipTimer<=0&&!this.bionichipActive&&(this.bionichipActive=!0,this.bionichipT=this.BIONIC_DURATION,this.connSpeed=(220+Math.random()*80)*(this.W/400)),this.bionichipActive&&(this.bionichipT-=e,this.bionichipT<=0&&(this.bionichipActive=!1,this.bionichipTimer=8+Math.random()*7,this.connSpeed=(55+Math.random()*50)*(this.W/400)))),this.cnX=Math.round(this.connX),this.bkX=Math.round(this.connX-62*(this.W/400)));const[t,i,n]=Us(this.currentMix),[s,a,r]=Us(this.displayMix),l=this.mixState==="mixing"?5:1.8;this.displayMix=Kd(s+(t-s)*l*e,a+(i-a)*l*e,r+(n-r)*l*e);for(let v=this.splats.length-1;v>=0;v--)this.splats[v].t+=e,this.splats[v].t>this.splats[v].maxT&&this.splats.splice(v,1);if(this.connieHitT>0&&(this.connieHitT-=e),this.bucketFlashT>0&&(this.bucketFlashT-=e),this.mixState==="mixing"&&(this.mixT+=e,this.mixT>2.2&&this._onMixDone()),(this.mixState==="success"||this.mixState==="fail")&&(this.mixT+=e),!this.ball)return;this.ball.x+=this.ball.vx*e,this.ball.y+=this.ball.vy*e,this.ball.vy+=this.GRAVITY*e;const c=54*(this.W/400),d=this.bkX,u=Math.abs(this.ball.x-d)<c/2,h=this.ball.y>this.bkTopY&&this.ball.y<this.bkBotY;if(u&&h){this._hitBucket();return}const f=Math.abs(this.ball.x-this.cnX)<18,g=this.ball.y>this.cnY-95&&this.ball.y<this.cnY;if(f&&g){this._hitConnie();return}(this.ball.y>this.H+10||this.ball.x>this.W+10||this.ball.y<-20)&&(this.ball=null,this._resetFireBtn())}_hitBucket(){if(!this.ball)return;const e=this.ball.pigKey,t=gi.find(i=>i.key===e);this.shots[e]<t.max&&(this.shots[e]++,this._refreshDots(),this.currentMix=La(this.shots),this.bucketFlashT=.5);for(let i=0;i<12;i++)this.splats.push({x:this.bkX+(Math.random()-.5)*30,y:this.bkTopY+10+Math.random()*20,color:this.ball.color,t:0,maxT:.8+Math.random()*.4});this.ball=null,this._resetFireBtn()}_hitConnie(){if(!this.ball)return;this.connieHitT=1.8;for(let t=0;t<18;t++)this.splats.push({x:this.ball.x+(Math.random()-.5)*25,y:this.ball.y+(Math.random()-.5)*25,color:this.ball.color,t:0,maxT:1+Math.random()*.5});const e=document.getElementById("mmv4-hint");if(e){const t=["JOSE!!! 😤","WATCH IT!!! 😡","OMG!!! 🤬","MY UNIFORM! 😤","YOU GOT IT ON MY TITS!!! 😤","JOSE YOU IDIOT!!! 😡"];e.textContent=t[Math.floor(Math.random()*t.length)],e.style.color="#FF6644",setTimeout(()=>{e&&(e.textContent="",e.style.color="rgba(200,168,106,0.4)")},2e3)}this.ball=null,this._resetFireBtn()}_resetFireBtn(){if(this.fireBtn){const e=gi.find(t=>t.key===this.sel);this.fireBtn.textContent=`💥 FIRE ${e.label.slice(0,3).toUpperCase()}`}}_triggerMix(){if(this.mixState==="mixing"||this.mixState==="success"||this.solved)return;if(Object.values(this.shots).reduce((t,i)=>t+i,0)===0){const t=document.getElementById("mmv4-hint");t&&(t.textContent="Get some shots in the bucket first!",setTimeout(()=>{t&&(t.textContent="")},1800));return}this.ball=null,this.mixState="mixing",this.mixT=0,this.mixedResult=La(this.shots),this.matchValue=hv(this.mixedResult,this.target.hex),this.mixBtn&&(this.mixBtn.style.background="linear-gradient(135deg,#226622,#144414)",this.mixBtn.style.color="#88FFcc",this.mixBtn.textContent="⚙️ …"),this.fireBtn&&(this.fireBtn.disabled=!0)}_onMixDone(){const e=this.matchValue,t=document.getElementById("mmv4-bar"),i=document.getElementById("mmv4-pct"),n=document.getElementById("mmv4-hint");t&&(t.style.width=`${e}%`,t.style.background=e>=82?"linear-gradient(90deg,#44DD88,#88FFCC)":e>=55?"linear-gradient(90deg,#C8A86A,#FFD080)":"linear-gradient(90deg,#882222,#CC4433)"),i&&(i.textContent=`${e}%`,i.style.color=e>=82?"#44DD88":e>=55?"#C8A86A":"#FF6644"),e>=82?this._triggerSuccess(e):(this.mixState="idle",n&&(n.textContent=e>=65?"Getting close — adjust the mix":"Way off — clear and start again"),this.mixBtn&&(this.mixBtn.style.background="linear-gradient(135deg,#8B4A00,#5A3000)",this.mixBtn.style.color="#FFD080",this.mixBtn.textContent="🔩 MIX"),this.fireBtn&&(this.fireBtn.disabled=!1))}_triggerSuccess(e){if(this.solved)return;this.solved=!0,this._stopTimer(),uv(this.target.name),this.mixState="success",this.mixT=0;const t=document.getElementById("mmv4-name");t&&(t.style.color="#44DD88");const i=document.getElementById("mmv4-hint");i&&(i.textContent=`✓ Cracked! (${Es().size}/${Nn.length} done)`,i.style.color="#44DD8888"),this.mixBtn&&(this.mixBtn.textContent="🏆 CRACKED!",this.mixBtn.style.background="linear-gradient(135deg,#2a8a44,#1a6030)",this.mixBtn.style.color="#88FFcc",this.mixBtn.disabled=!0),this.fireBtn&&(this.fireBtn.disabled=!0);const n=Math.round((e-82)/18*40);setTimeout(()=>{this._cleanup(),this._fireOnDone(n)},4500)}_triggerTimeout(){if(this.solved)return;this._stopTimer(),this.mixState="fail",this.mixT=0,this.timerEl&&(this.timerEl.textContent="0:00",this.timerEl.style.color="#FF4444");const e=document.getElementById("mmv4-name");e&&(e.style.color="#FF8866"),this.mixBtn&&(this.mixBtn.disabled=!1,this.mixBtn.style.background="rgba(100,30,20,0.9)",this.mixBtn.style.color="#FF9988",this.mixBtn.textContent="Close",this.mixBtn.addEventListener("click",()=>{this._cleanup(),this._fireOnDone(0)},{once:!0}))}_startLoop(){let e=performance.now();const t=i=>{if(!this.canvas)return;const n=Math.min((i-e)/1e3,.05);e=i,this._update(n),this._drawScene(),this.rafId=requestAnimationFrame(t)};this.rafId=requestAnimationFrame(t)}_drawScene(){if(!this.canvas||!this.ctx)return;const e=this.ctx,t=this.W,i=this.H;e.clearRect(0,0,t,i);const n=e.createLinearGradient(0,0,0,i);n.addColorStop(0,"#1e1610"),n.addColorStop(1,"#090704"),e.fillStyle=n,e.fillRect(0,0,t,i),e.strokeStyle="rgba(255,255,255,0.03)",e.lineWidth=1;for(let s=20;s<i;s+=22)e.beginPath(),e.moveTo(0,s),e.lineTo(t,s),e.stroke();e.fillStyle="rgba(200,168,106,0.08)",e.fillRect(0,i-18,t,18),e.strokeStyle="rgba(200,168,106,0.2)",e.lineWidth=1,e.beginPath(),e.moveTo(0,i-18),e.lineTo(t,i-18),e.stroke(),e.save(),e.setLineDash([4,6]),e.strokeStyle="rgba(200,100,30,0.15)",e.lineWidth=1,e.beginPath(),e.moveTo(this.connMinX,i-14),e.lineTo(this.connMaxX,i-14),e.stroke(),e.setLineDash([]),e.restore(),this._drawBucket(e),this._drawConnie(e),this._drawJose(e),this.isAiming&&!this.ball&&this._drawArcPreview(e),this.ball&&this._drawBall(e),this._drawSplats(e)}_drawBucket(e){const t=this.bkX,i=this.bkTopY,n=this.bkBotY,s=n-i,a=this.W/400,r=54*a,l=38*a;e.save(),e.beginPath(),e.moveTo(t-r/2,i),e.lineTo(t+r/2,i),e.lineTo(t+l/2,n),e.lineTo(t-l/2,n),e.closePath(),e.clip(),e.fillStyle="#F5F0E8",e.fill();const c=Object.values(this.shots).reduce((h,f)=>h+f,0),d=Math.min(1,c/22);if(d>0){const h=n-s*d,f=l+(r-l)*d;e.beginPath(),e.moveTo(t-f/2,h),e.lineTo(t+f/2,h),e.lineTo(t+l/2,n),e.lineTo(t-l/2,n),e.closePath(),e.fillStyle=this.displayMix,e.fill(),e.strokeStyle="rgba(255,255,255,0.28)",e.lineWidth=2,e.beginPath();const g=performance.now()/1e3;e.moveTo(t-f/2+4,h+2),e.bezierCurveTo(t-f/4,h-2+Math.sin(g*2)*2,t+f/4,h+3+Math.sin(g*2+1)*2,t+f/2-4,h+2),e.stroke()}if(this.mixState==="mixing"){const h=this.mixT;for(let f=0;f<4;f++){const g=h*8+f*(Math.PI*2/4),v=12+Math.sin(h*4+f)*5;e.beginPath(),e.arc(t+Math.cos(g)*v,n-s*.35+Math.sin(g)*v*.35,4,0,Math.PI*2),e.fillStyle=`rgba(255,255,255,${.12+Math.sin(g)*.06})`,e.fill()}}e.restore();const u=this.bucketFlashT>0?.7+Math.sin(this.bucketFlashT*30)*.3:.5;e.save(),e.beginPath(),e.moveTo(t-r/2,i),e.lineTo(t+r/2,i),e.lineTo(t+l/2,n),e.lineTo(t-l/2,n),e.closePath(),e.strokeStyle=this.mixState==="success"?`rgba(68,221,136,${u})`:`rgba(200,168,106,${u})`,e.lineWidth=2.5,e.stroke(),e.beginPath(),e.ellipse(t,i,r/2,5.5*a,0,0,Math.PI*2),e.strokeStyle="rgba(200,168,106,0.65)",e.lineWidth=2,e.stroke(),e.fillStyle="rgba(220,190,140,0.12)",e.fill(),e.beginPath(),e.arc(t,i-3*a,r/2-5*a,Math.PI,0),e.strokeStyle="#A08050",e.lineWidth=3,e.stroke(),e.font=`bold ${Math.round(10*a)}px system-ui`,e.fillStyle="rgba(200,168,106,0.5)",e.textAlign="center",e.fillText("TEM",t,n-s*.4),e.textAlign="start",e.restore()}_drawConnie(e){const t=this.cnX,i=this.cnY,n="#F0C8A0",s="#111",a=88*(this.W/400),r=this.connieHitT>0,l=r?Math.sin(this.connieHitT*20)*4:0,c=this.mixState==="mixing",d=this.mixState==="success",u=Math.abs(this.connDir)>0&&this.connPauseT<=0;e.save(),e.translate(l,0),e.fillStyle="#111",e.fillRect(t-10*(this.W/400),i-12*(this.W/400),10*(this.W/400),12*(this.W/400)),e.fillRect(t+2*(this.W/400),i-12*(this.W/400),10*(this.W/400),12*(this.W/400)),e.fillStyle="#1a1a2a",e.fillRect(t-9*(this.W/400),i-a*.44,9*(this.W/400),a*.44-10*(this.W/400)),e.fillRect(t+2*(this.W/400),i-a*.44,9*(this.W/400),a*.44-10*(this.W/400)),e.fillStyle=s,e.fillRect(t-12*(this.W/400),i-a*.8,24*(this.W/400),a*.37),e.fillStyle=n,e.fillRect(t-4*(this.W/400),i-a*.84,8*(this.W/400),a*.055),e.beginPath(),e.arc(t,i-a*.87,a*.08,0,Math.PI*2),e.fill(),e.fillStyle="#D4B840",e.beginPath(),e.arc(t,i-a*.87-a*.04,a*.1,Math.PI,0),e.fill(),e.fillRect(t-a*.1,i-a*.87,a*.2,a*.13),e.strokeStyle="#FFE070",e.lineWidth=2.5*(this.W/400),e.lineCap="round";const h=(u?1.8:1)*this.connDir;e.beginPath(),e.moveTo(t-8*(this.W/400),i-a*.87),e.quadraticCurveTo(t-18*(this.W/400)+h*4,i-a*.92,t-14*(this.W/400)+h*6,i-a*.98),e.stroke(),e.beginPath(),e.moveTo(t+6*(this.W/400),i-a*.87),e.quadraticCurveTo(t+16*(this.W/400)+h*4,i-a*.91,t+12*(this.W/400)+h*6,i-a*.96),e.stroke(),e.lineCap="butt";const f=this.bkX-t,g=this.bkTopY-(i-a*.7),v=Math.atan2(g,f);if(c||d){e.strokeStyle=s,e.lineWidth=8*(this.W/400),e.lineCap="round",e.beginPath(),e.moveTo(t-10*(this.W/400),i-a*.72),e.quadraticCurveTo(t-20*(this.W/400),i-a*.6,this.bkX+20*(this.W/400),this.bkTopY+5*(this.W/400)),e.stroke();const m=performance.now()/80;e.save(),e.translate(this.bkX+18*(this.W/400),this.bkTopY+4*(this.W/400)),e.rotate(v),e.fillStyle="#333",e.strokeStyle="#666",e.lineWidth=1,e.beginPath(),e.roundRect(-26*(this.W/400),-6*(this.W/400),34*(this.W/400),12*(this.W/400),3),e.fill(),e.stroke(),e.save(),e.translate(-30*(this.W/400),0),e.rotate(m);const p=e.createRadialGradient(0,0,0,0,0,11*(this.W/400));p.addColorStop(0,"rgba(200,168,106,0.7)"),p.addColorStop(1,"transparent"),e.fillStyle=p,e.beginPath(),e.arc(0,0,11*(this.W/400),0,Math.PI*2),e.fill(),e.restore(),e.restore()}else e.strokeStyle=s,e.lineWidth=8*(this.W/400),e.lineCap="round",e.beginPath(),e.moveTo(t-10*(this.W/400),i-a*.72),e.quadraticCurveTo(t-20*(this.W/400),i-a*.55,this.bkX+16*(this.W/400),this.bkTopY-2*(this.W/400)),e.stroke(),e.beginPath(),e.arc(this.bkX+14*(this.W/400),this.bkTopY-4*(this.W/400),4.5*(this.W/400),0,Math.PI*2),e.fillStyle=n,e.fill();if(e.strokeStyle=s,e.lineWidth=8*(this.W/400),e.beginPath(),e.moveTo(t+10*(this.W/400),i-a*.72),e.lineTo(t+16*(this.W/400),i-a*.48),e.stroke(),e.beginPath(),e.arc(t+16*(this.W/400),i-a*.47,4.5*(this.W/400),0,Math.PI*2),e.fillStyle=n,e.fill(),e.lineCap="butt",this.bionichipActive){const m=performance.now()/120,p=.35+Math.sin(m)*.2,b=i-a*.35,M=e.createRadialGradient(t,b,2*(this.W/400),t,b,22*(this.W/400));M.addColorStop(0,`rgba(160,80,255,${p*1.2})`),M.addColorStop(.5,`rgba(100,40,200,${p})`),M.addColorStop(1,"transparent"),e.fillStyle=M,e.beginPath(),e.ellipse(t,b,22*(this.W/400),14*(this.W/400),0,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle=`rgba(200,140,255,${.6+Math.sin(m*3)*.3})`,e.lineWidth=1.5*(this.W/400),e.lineCap="round";for(let y=0;y<4;y++){const R=m+y*Math.PI/2,E=14*(this.W/400),A=t+Math.cos(R)*E,I=b+Math.sin(R)*E*.6;e.beginPath(),e.moveTo(t+Math.cos(R+.3)*6*(this.W/400),b+Math.sin(R+.3)*4*(this.W/400)),e.lineTo(A,I),e.stroke()}e.restore()}r&&(e.font=`bold ${Math.round(11*(this.W/400))}px system-ui`,e.fillStyle="#FF4422",e.textAlign="center",e.fillText(this.bionichipActive?"OW MY SILICONE!! 😱":"JOSE!!! 😤",t,i-a-6*(this.W/400)),e.textAlign="start"),this.bionichipActive?(e.save(),e.globalAlpha=.85+Math.sin(performance.now()/80)*.15,e.font=`bold ${Math.round(11*(this.W/400))}px system-ui`,e.fillStyle="#CC88FF",e.textAlign="center",e.fillText("⚡ BIONIC HIP!",t,i-a-4*(this.W/400)),e.restore()):u&&this.connSpeed>80*(this.W/400)&&(e.save(),e.globalAlpha=.5,e.fillStyle="#FF9944",e.font=`bold ${Math.round(10*(this.W/400))}px system-ui`,e.textAlign="center",e.fillText(this.connDir<0?"←":"→",t,i-a-2*(this.W/400)),e.restore()),e.font=`bold ${Math.round(8*(this.W/400))}px system-ui`,e.fillStyle="rgba(255,200,80,0.65)",e.textAlign="center",e.fillText("CONNIE",t,i+10*(this.W/400)),e.textAlign="start",e.restore()}_drawJose(e){const t=this.jX,i=this.jY,n="#C88060",s="#111",a=90*(this.W/400),r=34*(this.W/400),l=this.W/400,c=t+r*Math.cos(this.aimAngle),d=i-52*l+r*Math.sin(this.aimAngle);this.cannonTipX=c,this.cannonTipY=d,e.save(),e.translate(t,i-52*l),e.rotate(this.aimAngle);const u=e.createLinearGradient(0,-9*l,0,9*l);u.addColorStop(0,"#444"),u.addColorStop(.5,"#777"),u.addColorStop(1,"#333"),e.fillStyle=u,e.beginPath(),e.roundRect(0,-9*l,r,18*l,4),e.fill(),e.strokeStyle="#222",e.lineWidth=1.5,e.beginPath(),e.roundRect(0,-9*l,r,18*l,4),e.stroke(),e.fillStyle="#888",e.beginPath(),e.ellipse(r,0,5*l,9*l,0,0,Math.PI*2),e.fill(),e.strokeStyle="#555",e.lineWidth=3*l,[10,20].forEach(v=>{e.beginPath(),e.moveTo(v*l,-9*l),e.lineTo(v*l,9*l),e.stroke()}),e.restore(),e.fillStyle="#3a2a1a",e.beginPath(),e.roundRect(t-6*l,i-62*l,16*l,18*l,3),e.fill(),e.beginPath(),e.arc(t+4*l,i-50*l,8*l,0,Math.PI*2),e.fillStyle="#555",e.fill(),e.strokeStyle="#888",e.lineWidth=1.5,e.stroke(),e.strokeStyle="#333",e.lineWidth=1.5;for(let v=0;v<Math.PI*2;v+=Math.PI/3)e.beginPath(),e.moveTo(t+4*l,i-50*l),e.lineTo(t+4*l+Math.cos(v)*7*l,i-50*l+Math.sin(v)*7*l),e.stroke();if(this.ball&&Math.sqrt((this.ball.x-c)**2+(this.ball.y-d)**2)<40*l){e.save(),e.globalAlpha=.8;const v=e.createRadialGradient(c,d,0,c,d,18*l);v.addColorStop(0,"rgba(255,200,50,0.9)"),v.addColorStop(1,"transparent"),e.fillStyle=v,e.beginPath(),e.arc(c,d,18*l,0,Math.PI*2),e.fill(),e.restore()}e.fillStyle="#0a0a0a",e.fillRect(t-10*l,i-12*l,10*l,12*l),e.fillRect(t+2*l,i-12*l,10*l,12*l),e.fillStyle="#1a1a2a",e.fillRect(t-9*l,i-a*.44,9*l,a*.44-10*l),e.fillRect(t+2*l,i-a*.44,9*l,a*.44-10*l),e.fillStyle=s,e.fillRect(t-12*l,i-a*.8,24*l,a*.37),e.fillStyle=n,e.fillRect(t-4*l,i-a*.84,8*l,a*.055);const h=i-a*.88,f=a*.08,g=[{dx:-9,swing:-4,len:32},{dx:-5,swing:-2,len:38},{dx:-1,swing:2,len:35},{dx:3,swing:3,len:28},{dx:7,swing:1,len:24},{dx:-12,swing:-6,len:22}];e.lineCap="round",g.forEach((v,m)=>{e.strokeStyle=m%2===0?"#2a1000":"#3a1a00",e.lineWidth=5*l,e.beginPath(),e.moveTo(t+v.dx*l,h-f*.3),e.bezierCurveTo(t+v.dx*l+v.swing*l*.5,h+v.len*l*.35,t+v.dx*l+v.swing*l,h+v.len*l*.7,t+v.dx*l+v.swing*l*.8+Math.sin(m)*2*l,h+v.len*l),e.stroke()}),e.lineCap="butt",e.fillStyle=n,e.beginPath(),e.arc(t,h,f,0,Math.PI*2),e.fill(),e.fillStyle="#3a1a00",e.beginPath(),e.arc(t-3*l,h-2*l,2*l,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(t+3*l,h-2*l,2*l,0,Math.PI*2),e.fill(),e.strokeStyle="#8a4820",e.lineWidth=1.5,e.beginPath(),e.arc(t,h+2*l,4*l,.2,Math.PI-.2),e.stroke(),e.strokeStyle="#8B4A00",e.lineWidth=3.5*l,e.beginPath(),e.arc(t,h,f*1.05,Math.PI*.75,Math.PI*1.85),e.stroke(),e.strokeStyle=s,e.lineWidth=8*l,e.lineCap="round",e.beginPath(),e.moveTo(t+10*l,i-a*.72),e.quadraticCurveTo(t+16*l,i-a*.58,t+10*l,i-52*l+4*l),e.stroke(),e.beginPath(),e.arc(t+10*l,i-49*l,4.5*l,0,Math.PI*2),e.fillStyle=n,e.fill(),e.strokeStyle=s,e.lineWidth=8*l,e.beginPath(),e.moveTo(t-10*l,i-a*.72),e.lineTo(t-16*l,i-a*.48),e.stroke(),e.beginPath(),e.arc(t-16*l,i-a*.47,4.5*l,0,Math.PI*2),e.fillStyle=n,e.fill(),e.lineCap="butt",e.font=`bold ${Math.round(8*l)}px system-ui`,e.fillStyle="rgba(255,220,100,0.65)",e.textAlign="center",e.fillText("JOSE",t,i+10*l),e.textAlign="start"}_drawArcPreview(e){const t=gi.find(r=>r.key===this.sel),i=this.aimPower*Math.cos(this.aimAngle),n=this.aimPower*Math.sin(this.aimAngle),s=this.cannonTipX,a=this.cannonTipY;e.save();for(let r=0;r<28;r++){const l=r*.055,c=s+i*l,d=a+n*l+.5*this.GRAVITY*l*l;if(d>this.H||c>this.W)break;e.globalAlpha=Math.max(0,.7-r*.022),e.fillStyle=t.dot,e.shadowColor=t.dot,e.shadowBlur=6,e.beginPath(),e.arc(c,d,3-r*.06,0,Math.PI*2),e.fill()}e.shadowBlur=0,e.globalAlpha=1,e.restore()}_drawBall(e){if(!this.ball)return;const t=this.ball;e.save(),e.shadowColor=t.color,e.shadowBlur=12,e.fillStyle=t.color,e.beginPath(),e.arc(t.x,t.y,t.r,0,Math.PI*2),e.fill(),e.globalAlpha=.5,e.fillStyle="rgba(255,255,255,0.7)",e.beginPath(),e.arc(t.x-2,t.y-2,t.r*.4,0,Math.PI*2),e.fill(),e.shadowBlur=0,e.globalAlpha=1,e.restore()}_drawSplats(e){for(const t of this.splats)e.save(),e.globalAlpha=Math.max(0,(1-t.t/t.maxT)*.8),e.fillStyle=t.color,e.beginPath(),e.arc(t.x,t.y,4+t.t*8,0,Math.PI*2),e.fill(),e.restore()}_startTimer(){this.timerInt=setInterval(()=>{if(!this.solved){if(this.timer--,this.timerEl){const e=Math.floor(this.timer/60),t=this.timer%60;this.timerEl.textContent=`${e}:${t.toString().padStart(2,"0")}`,this.timer<=20&&(this.timerEl.style.color="#FF6644"),this.timer<=10&&(this.timerEl.style.animation="mm4TimerPulse 0.5s ease infinite alternate")}this.timer<=0&&this._triggerTimeout()}},1e3)}_stopTimer(){this.timerInt&&(clearInterval(this.timerInt),this.timerInt=null)}_resizeCanvas(){var n;if(!this.canvas)return;const e=Math.min(440,window.innerWidth*.97)-32,t=e/400;this.W=Math.round(e),this.H=Math.round(240*t),this.canvas.width=this.W,this.canvas.height=this.H,this.jX=Math.round(58*t),this.jY=Math.round(218*t),this.bkTopY=Math.round(105*t),this.bkBotY=Math.round(168*t),this.cnY=Math.round(218*t),this.connMinX=Math.round(200*t),this.connMaxX=Math.round(355*t),this.connX=Math.round(300*t),this.cnX=Math.round(this.connX),this.bkX=Math.round(this.connX-62*t);const i=((n=this.target)==null?void 0:n.difficulty)??1;this.connSpeed=(50+i*22)*t}_fireOnDone(e){const t=this.onDone;this.onDone=null,t==null||t(e)}_cleanup(){var e;this._stopTimer(),cancelAnimationFrame(this.rafId),(e=document.getElementById("mmv4-ov"))==null||e.remove(),this.overlay=null,this.canvas=null,this.ctx=null}_injectStyles(){if(document.getElementById("mmv4-styles"))return;const e=document.createElement("style");e.id="mmv4-styles",e.textContent=`
      @keyframes mm4Fade  { from{opacity:0}to{opacity:1} }
      @keyframes mm4Slide { from{opacity:0;transform:translateY(28px)scale(0.96)}to{opacity:1;transform:translateY(0)scale(1)} }
      @keyframes mm4TimerPulse { from{opacity:1}to{opacity:0.3} }
    `,document.head.appendChild(e)}}class pv{constructor(){x(this,"_el",null);x(this,"_timer",null)}show(e,t,i){this.hide();const n=document.createElement("div");n.id="battle-screen-ov",n.style.cssText=`
      position:fixed; inset:0; z-index:15000;
      background:rgba(0,0,0,0.95);
      display:flex; flex-direction:column; align-items:center;
      justify-content:space-between;
      font-family:'Arial Black',Arial,sans-serif;
      overflow:hidden;
      padding: 0;
    `;const s=document.createElement("canvas");s.style.cssText=`
      position:absolute; inset:0; width:100%; height:100%; pointer-events:none;
    `,n.appendChild(s),this._animateSparks(s);const a=document.createElement("div");a.style.cssText=`
      width:100%; text-align:center; padding:20px 0 8px;
      position:relative; z-index:2;
    `,a.innerHTML=`
      <div style="font-size:clamp(28px,8vw,52px);font-weight:900;
        background:linear-gradient(180deg,#FFD700,#FF4400);
        -webkit-background-clip:text;-webkit-text-fill-color:transparent;
        background-clip:text;letter-spacing:3px;text-shadow:none;
        line-height:1.1;">⚔️ CONTRACT WAR</div>
      <div style="color:#aaa;font-size:clamp(11px,3vw,15px);letter-spacing:1px;
        margin-top:6px;font-weight:700;">FIRST CREW TO FINISH WINS THE CONTRACT</div>
    `,n.appendChild(a);const r=document.createElement("div");r.style.cssText=`
      display:flex; flex-direction:row; align-items:center;
      justify-content:center; gap:clamp(10px,4vw,32px);
      width:100%; padding:0 12px; box-sizing:border-box;
      flex:1; position:relative; z-index:2;
    `;const l=this._makeCrewPanel("YOUR CREW",e,"#2ECC40",!1);r.appendChild(l);const c=document.createElement("div");if(c.style.cssText=`
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
      `,document.head.appendChild(f)}r.appendChild(c);const d=this._makeRivalPanel(t);r.appendChild(d),n.appendChild(r);const u=document.createElement("div");u.style.cssText=`
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
    `;const a=document.createElement("div");a.style.cssText=`
      color:${i}; font-size:clamp(9px,2.5vw,13px); font-weight:900;
      letter-spacing:2px; text-align:center;
    `,a.textContent=e,s.appendChild(a);const r=el,l=[],c=r.find(d=>d.id==="jose");return c&&l.push(c),t.filter(d=>d!=="jose").forEach(d=>{const u=r.find(h=>h.id===d);u&&l.push(u)}),l.slice(0,3).forEach((d,u)=>{const h=document.createElement("div");h.style.cssText="display:flex;flex-direction:column;align-items:center;gap:3px;";const f=this._makePlayerAvatar(d,60);h.appendChild(f);const g=document.createElement("div");if(g.style.cssText="color:#fff;font-size:clamp(8px,2vw,11px);font-weight:900;text-align:center;",g.textContent=d.name,h.appendChild(g),u===0){const v=document.createElement("div");v.style.cssText=`
          background:#E8A830;color:#000;font-size:7px;font-weight:900;
          padding:1px 5px;border-radius:8px;
        `,v.textContent="MASCOT",h.appendChild(v)}s.appendChild(h)}),s}_makeRivalPanel(e){const t=document.createElement("div");t.style.cssText=`
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
    `,n.textContent=`"${e.tagline}"`,t.appendChild(n),e.members.forEach(s=>{const a=document.createElement("div");a.style.cssText="display:flex;flex-direction:column;align-items:center;gap:3px;";const r=this._makeRivalAvatar(s,60);a.appendChild(r);const l=document.createElement("div");l.style.cssText="color:#fff;font-size:clamp(8px,2vw,11px);font-weight:900;text-align:center;",l.textContent=s.name,a.appendChild(l),t.appendChild(a)}),t}_makePlayerAvatar(e,t){const i=document.createElement("canvas");i.width=t,i.height=t,i.style.cssText="border-radius:50%;display:block;";const n=i.getContext("2d"),s=t/2;n.fillStyle=e.locked?"#1a0800":"#1a1a2a",n.beginPath(),n.arc(s,s,s,0,Math.PI*2),n.fill();const a=t*.44,r=t*.22;switch(n.fillStyle=e.skinTone,n.fillRect(s-t*.07,t*.62,t*.14,t*.22),n.fillStyle=e.skinTone,n.beginPath(),n.ellipse(s,a,r*.88,r,0,0,Math.PI*2),n.fill(),n.fillStyle=e.hairColor,n.strokeStyle=e.hairColor,e.id){case"jose":{n.lineCap="round",[{dx:-10,len:t*.3,w:2.5},{dx:-4,len:t*.34,w:3},{dx:2,len:t*.32,w:2.5},{dx:7,len:t*.28,w:2}].forEach(c=>{n.lineWidth=c.w,n.beginPath(),n.moveTo(s+c.dx,a-r*.1),n.bezierCurveTo(s+c.dx-2,a+c.len*.5,s+c.dx+2,a+c.len*.8,s+c.dx,a+c.len),n.stroke()}),n.fillStyle=e.hairColor,n.beginPath(),n.arc(s,a-r*.55,r*1.02,Math.PI,0),n.fill();break}default:{n.beginPath(),n.arc(s,a-r*.55,r*1.05,Math.PI,0),n.fill(),n.beginPath(),n.ellipse(s,a-r*1.2,r*.6,r*.28,0,0,Math.PI*2),n.fill();break}}return n.strokeStyle="#2ECC4099",n.lineWidth=2,n.beginPath(),n.arc(s,s,s-1.5,0,Math.PI*2),n.stroke(),i}_makeRivalAvatar(e,t){const i=document.createElement("canvas");i.width=t,i.height=t,i.style.cssText="border-radius:50%;display:block;";const n=i.getContext("2d"),s=t/2,a=t*.44,r=t*.22;return n.fillStyle="#1a0a0a",n.beginPath(),n.arc(s,s,s,0,Math.PI*2),n.fill(),n.fillStyle=e.skinTone,n.fillRect(s-t*.07,t*.62,t*.14,t*.22),n.fillStyle=e.skinTone,n.beginPath(),n.ellipse(s,a,r*.88,r,0,0,Math.PI*2),n.fill(),this._drawRivalHair(n,e.hairStyle,e.hairColor,s,a,r,t),n.strokeStyle=e.accentColor+"99",n.lineWidth=2,n.beginPath(),n.arc(s,s,s-1.5,0,Math.PI*2),n.stroke(),i}_drawRivalHair(e,t,i,n,s,a,r){switch(e.fillStyle=i,e.strokeStyle=i,t){case"buzz":{e.beginPath(),e.arc(n,s-a*.45,a*1.04,Math.PI,0),e.fill(),e.fillStyle=i+"aa";for(let l=-3;l<=3;l++)e.fillRect(n+l*4-1,s-a*1.25,2,a*.32);break}case"afro":{e.beginPath(),e.arc(n,s-a*.5,a*1.6,0,Math.PI*2),e.fill(),e.fillStyle=i+"44",e.beginPath(),e.arc(n-a*.3,s-a*1.2,a*.5,0,Math.PI*2),e.fill();break}case"bald":{e.fillStyle="rgba(255,255,255,0.12)",e.beginPath(),e.ellipse(n-a*.15,s-a*.85,a*.35,a*.18,-.3,0,Math.PI*2),e.fill();break}case"long":{e.beginPath(),e.arc(n,s-a*.5,a*1.05,Math.PI,0),e.fill(),e.beginPath(),e.moveTo(n-a*.9,s-a*.1),e.bezierCurveTo(n-a*1.1,s+a*.5,n-a*1,s+a*1.2,n-a*.7,s+a*1.5),e.lineTo(n-a*.3,s+a*1.5),e.bezierCurveTo(n-a*.6,s+a*1,n-a*.5,s+a*.4,n-a*.7,s),e.fill(),e.beginPath(),e.moveTo(n+a*.9,s-a*.1),e.bezierCurveTo(n+a*1.1,s+a*.5,n+a*1,s+a*1.2,n+a*.7,s+a*1.5),e.lineTo(n+a*.3,s+a*1.5),e.bezierCurveTo(n+a*.6,s+a*1,n+a*.5,s+a*.4,n+a*.7,s),e.fill();break}case"short":{e.beginPath(),e.arc(n,s-a*.55,a*1.05,Math.PI,0),e.fill(),e.beginPath(),e.ellipse(n-a*.1,s-a*1.3,a*.58,a*.26,-.1,0,Math.PI*2),e.fill();break}case"slicked":case"slick":{e.beginPath(),e.arc(n,s-a*.55,a*1.05,Math.PI,0),e.fill(),e.strokeStyle="#00000044",e.lineWidth=1.5,e.beginPath(),e.moveTo(n-a*.2,s-a*1.4),e.lineTo(n-a*.2,s-a*.6),e.stroke(),e.fillStyle=i+"55",e.beginPath(),e.ellipse(n+a*.2,s-a*1.1,a*.35,a*.12,.2,0,Math.PI*2),e.fill();break}case"bun":{e.beginPath(),e.arc(n,s-a*.55,a*1.02,Math.PI,0),e.fill(),e.beginPath(),e.arc(n,s-a*1.55,a*.55,0,Math.PI*2),e.fill(),e.fillStyle=i+"66",e.beginPath(),e.arc(n-a*.15,s-a*1.7,a*.18,0,Math.PI*2),e.fill();break}case"ponytail":{e.fillStyle=i,e.beginPath(),e.arc(n,s-a*.55,a*1.02,Math.PI,0),e.fill(),e.beginPath(),e.moveTo(n+a*.5,s-a*.8),e.bezierCurveTo(n+a*1.4,s-a*.4,n+a*1.5,s+a*.6,n+a*.8,s+a*1.4),e.lineTo(n+a*.5,s+a*1.4),e.bezierCurveTo(n+a*1,s+a*.5,n+a*.9,s-a*.2,n+a*.2,s-a*.7),e.fill();break}}}_animateSparks(e){const t=e.getContext("2d");let i;const n=[],s=["#FFD700","#FF4444","#FF8800","#FFFFFF","#FF6600"];(()=>{e.width=window.innerWidth,e.height=window.innerHeight})();const r=()=>{const c=window.innerWidth/2,d=window.innerHeight/2,u=Math.random()*Math.PI*2,h=1+Math.random()*4;n.push({x:c+(Math.random()-.5)*60,y:d+(Math.random()-.5)*60,vx:Math.cos(u)*h,vy:Math.sin(u)*h-1,life:0,maxLife:30+Math.random()*40,color:s[Math.floor(Math.random()*s.length)],size:1+Math.random()*3})},l=()=>{if(!document.getElementById("battle-screen-ov")){cancelAnimationFrame(i);return}t.clearRect(0,0,e.width,e.height),Math.random()<.4&&r();for(let c=n.length-1;c>=0;c--){const d=n[c];d.x+=d.vx,d.y+=d.vy,d.vy+=.05,d.life++;const u=1-d.life/d.maxLife;if(u<=0){n.splice(c,1);continue}t.globalAlpha=u,t.fillStyle=d.color,t.beginPath(),t.arc(d.x,d.y,d.size,0,Math.PI*2),t.fill()}t.globalAlpha=1,i=requestAnimationFrame(l)};i=requestAnimationFrame(l)}async injectLeaderboard(e){const t=document.getElementById("battle-screen-ov");if(!t)return;const i=e.replace(/^⚔️\s*/,"").trim(),n=await ov(i,5),s=document.createElement("div");if(s.style.cssText=`
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
      `;else{const a=n.map((r,l)=>{const c=l===0?"🥇":l===1?"🥈":l===2?"🥉":`${l+1}.`,d=Math.floor(r.completion_time_s/60),u=String(Math.round(r.completion_time_s%60)).padStart(2,"0");return`
          <div style="display:flex;justify-content:space-between;align-items:center;
                      padding:3px 0;border-bottom:1px solid #ffffff10;">
            <span style="color:#FFD700;font-size:10px;">${c}</span>
            <span style="color:#fff;font-size:10px;font-weight:700;flex:1;margin:0 8px;
                         white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
              ${r.player_name}
            </span>
            <span style="color:#2ECC40;font-size:10px;font-weight:700;">
              ${d}:${u}
            </span>
          </div>
        `}).join("");s.innerHTML=`
        <div style="color:#FFD700;font-size:10px;font-weight:900;letter-spacing:2px;
                    text-align:center;margin-bottom:6px;">⚡ FASTEST CREWS — BEAT THEM</div>
        ${a}
      `}t.appendChild(s)}}const Be=400,Rt=600,pt=55,Ai=80,Un=Rt-pt-Ai,On=10,Cs=7,wt=Be/On,yt=Un/Cs,ji=3,mv=55,qt={jose:{name:"Wall Maestro",damage:35,range:3,fireRate:1.2,cost:6e4,color:"#E8A830",special:"slow"},matt:{name:"Negotiator",damage:20,range:4,fireRate:.8,cost:8e4,color:"#4A90D9",special:"payout"},tsuyoshi:{name:"Rush Tower",damage:15,range:2,fireRate:3,cost:5e4,color:"#FF4444",special:"none"},jarrad:{name:"Blueprint",damage:25,range:3,fireRate:1,cost:7e4,color:"#9B59B6",special:"double"},fabio:{name:"Pressure",damage:30,range:2.5,fireRate:1.5,cost:65e3,color:"#27AE60",special:"boost"},phil:{name:"Veteran Wall",damage:50,range:2,fireRate:.5,cost:9e4,color:"#7F8C8D",special:"block"},joe:{name:"Intel",damage:10,range:5,fireRate:2,cost:55e3,color:"#E67E22",special:"loot"},connie:{name:"Command",damage:40,range:3.5,fireRate:1,cost:1e5,color:"#E74C3C",special:"aoe"},mikayla:{name:"Admin",damage:5,range:1,fireRate:.3,cost:4e4,color:"#1ABC9C",special:"income"}},gv={grunt:{hp:80,spd:1,reward:3e3,radius:12},runner:{hp:40,spd:2,reward:2e3,radius:10},tanker:{hp:300,spd:.5,reward:8e3,radius:18},boss:{hp:1e3,spd:.8,reward:5e4,radius:24}};function Da(o){const e=[[{type:"grunt",count:8,interval:1.5,start:0}],[{type:"grunt",count:6,interval:1.5,start:0},{type:"runner",count:3,interval:2,start:1}],[{type:"grunt",count:4,interval:1.5,start:0},{type:"runner",count:4,interval:2,start:1},{type:"tanker",count:1,interval:0,start:8}],[{type:"grunt",count:3,interval:1.5,start:0},{type:"runner",count:3,interval:1.8,start:.8},{type:"tanker",count:2,interval:5,start:5}],[{type:"grunt",count:2,interval:2,start:0},{type:"runner",count:2,interval:2,start:1},{type:"tanker",count:2,interval:5,start:6},{type:"boss",count:1,interval:0,start:14}]],t=e[Math.min(o,e.length-1)],i=[];for(const n of t)for(let s=0;s<n.count;s++)i.push({type:n.type,t:n.start+s*n.interval});return i.sort((n,s)=>n.t-s.t)}function vv(o,e){return{x:o*wt+wt/2,y:pt+e*yt+yt/2}}function Ba(o){return o*Math.min(wt,yt)}function yv(o,e,t,i){return(o-t)**2+(e-i)**2}function wo(o,e,t,i){return Math.sqrt(yv(o,e,t,i))}class xv{constructor(){x(this,"_ov",null);x(this,"_cv",null);x(this,"_ctx",null);x(this,"_raf",0);x(this,"_last",0);x(this,"_done",null);x(this,"_cfg");x(this,"_phase","announce");x(this,"_waveIdx",0);x(this,"_lives",5);x(this,"_sats",0);x(this,"_towers",[]);x(this,"_enemies",[]);x(this,"_projs",[]);x(this,"_texts",[]);x(this,"_selectedCrew",null);x(this,"_selectedTower",null);x(this,"_nextId",0);x(this,"_spawnQueue",[]);x(this,"_spawnTime",0);x(this,"_spawnIdx",0);x(this,"_allSpawned",!1);x(this,"_waveSpeedMult",1);x(this,"_announceTimer",3);x(this,"_prepTimer",10);x(this,"_betweenTimer",3);x(this,"_endTimer",4);x(this,"_payoutBonus",0);x(this,"_totalEarned",0);x(this,"_wavesCleared",0)}show(e,t){this.hide(),this._cfg=e,this._done=t,this._sats=e.payout,this._totalEarned=e.payout,this._buildUI(),this._reset(),this._loop()}hide(){var e;this._raf&&(cancelAnimationFrame(this._raf),this._raf=0),(e=this._ov)==null||e.remove(),this._ov=null,this._cv=null,this._ctx=null,this._done=null}_buildUI(){const e=document.createElement("div");e.id="td-overlay",e.style.cssText=`
      position:fixed;inset:0;z-index:14000;background:#0d0d18;
      display:flex;align-items:center;justify-content:center;
      touch-action:none;user-select:none;
    `;const t=document.createElement("canvas");t.width=Be,t.height=Rt,t.style.cssText=`
      display:block;
      width:min(100vw, ${Be/Rt*100}vh);
      max-width:${Be}px;
      height:auto;
      cursor:pointer;
    `;const i=(n,s)=>{const a=t.getBoundingClientRect();return{x:(n-a.left)*(Be/a.width),y:(s-a.top)*(Rt/a.height)}};t.addEventListener("click",n=>this._click(i(n.clientX,n.clientY))),t.addEventListener("touchend",n=>{n.preventDefault(),n.changedTouches.length&&this._click(i(n.changedTouches[0].clientX,n.changedTouches[0].clientY))},{passive:!1}),e.appendChild(t),document.body.appendChild(e),this._ov=e,this._cv=t,this._ctx=t.getContext("2d")}_reset(){this._phase="announce",this._waveIdx=0,this._lives=5,this._towers=[],this._enemies=[],this._projs=[],this._texts=[],this._selectedCrew=null,this._selectedTower=null,this._nextId=0,this._wavesCleared=0,this._payoutBonus=0,this._announceTimer=3,this._prepTimer=10,this._betweenTimer=3,this._endTimer=4,this._allSpawned=!1,this._spawnIdx=0,this._spawnTime=0,this._waveSpeedMult=1,this._spawnQueue=Da(0)}_loop(){this._last=performance.now();const e=t=>{if(!this._ov)return;const i=Math.min((t-this._last)/1e3,.05);this._last=t;try{this._update(i),this._draw()}catch(n){if(console.error("[TowerDefence] loop crash:",n),this._ov){const s=document.createElement("div");s.style.cssText=`
            position:absolute;inset:0;background:rgba(0,0,0,0.9);
            display:flex;flex-direction:column;align-items:center;
            justify-content:center;gap:12px;z-index:20;
            font-family:system-ui,sans-serif;padding:24px;text-align:center;
          `,s.innerHTML=`
            <div style="font-size:40px">⚠️</div>
            <div style="color:#FFD700;font-size:18px;font-weight:900;">TD CRASHED</div>
            <div style="color:#aaa;font-size:12px;max-width:300px;">${String(n)}</div>
          `;const a=document.createElement("button");a.textContent="SKIP TO PHOTO REVEAL",a.style.cssText=`
            background:#E8A830;color:#000;border:none;
            padding:14px 28px;border-radius:12px;font-size:15px;
            font-weight:900;cursor:pointer;margin-top:8px;
          `,a.addEventListener("click",()=>{var r,l;this.hide(),(l=this._done)==null||l.call(this,{won:!0,earned:((r=this._cfg)==null?void 0:r.payout)??0,wavesCleared:0,qualityPct:1})}),s.appendChild(a),this._ov.appendChild(s)}cancelAnimationFrame(this._raf);return}this._raf=requestAnimationFrame(e)};this._raf=requestAnimationFrame(e)}_update(e){switch(this._updateTexts(e),this._phase){case"announce":this._announceTimer-=e,this._announceTimer<=0&&(this._phase="prep",this._prepTimer=10);break;case"prep":this._prepTimer-=e,this._updateMikayla(e),this._prepTimer<=0&&this._beginWave();break;case"wave":this._updateSpawn(e),this._updateEnemies(e),this._updateTowers(e),this._updateProjectiles(e),this._updateMikayla(e),this._checkWaveDone();break;case"between":if(this._betweenTimer-=e,this._betweenTimer<=0){const t=this._waveIdx+1;t>=5?(this._phase="win",this._endTimer=4.5,this._wavesCleared=5):(this._waveIdx=t,this._phase="announce",this._announceTimer=3,this._spawnQueue=Da(this._waveIdx),this._spawnIdx=0,this._spawnTime=0,this._allSpawned=!1,this._waveSpeedMult=this._waveIdx>=3?1.2:1)}break;case"win":case"lose":this._endTimer-=e,this._endTimer<=0&&this._finish();break}}_beginWave(){this._phase="wave",this._spawnQueue=Da(this._waveIdx),this._spawnIdx=0,this._spawnTime=0,this._allSpawned=!1,this._waveSpeedMult=this._waveIdx>=3?1.2:1}_updateSpawn(e){if(!this._allSpawned){for(this._spawnTime+=e;this._spawnIdx<this._spawnQueue.length&&this._spawnTime>=this._spawnQueue[this._spawnIdx].t;)this._spawnEnemy(this._spawnQueue[this._spawnIdx].type),this._spawnIdx++;this._spawnIdx>=this._spawnQueue.length&&(this._allSpawned=!0)}}_spawnEnemy(e){const t=gv[e],i=pt+ji*yt+yt/2,n=t.spd*mv*this._waveSpeedMult;this._enemies.push({id:this._nextId++,type:e,x:-t.radius-8,y:i,hp:t.hp,maxHp:t.hp,speed:n,reward:t.reward,radius:t.radius,slowed:0,color:this._cfg.rival.color})}_updateEnemies(e){for(const t of this._towers)if(!(t.crewId!=="phil"||t.row!==ji))for(const i of this._enemies)Math.abs(i.x-t.x)<wt*1.2&&(i.slowed=Math.max(i.slowed,1.5));for(let t=this._enemies.length-1;t>=0;t--){const i=this._enemies[t];i.slowed>0&&(i.slowed-=e,i.slowed<0&&(i.slowed=0));const n=i.slowed>0?i.speed*.4:i.speed;i.x+=n*e,i.x>Be+i.radius+10&&(this._enemies.splice(t,1),this._lives=Math.max(0,this._lives-1),this._addText(Be-40,pt+ji*yt+yt/2,"-1 ❤️","#FF2244"),this._lives<=0&&(this._phase="lose",this._endTimer=4.5,this._wavesCleared=this._waveIdx))}}_updateTowers(e){for(const t of this._towers){const i=qt[t.crewId];if(!i||(t.fireTimer-=e,t.fireTimer>0))continue;const n=t.level===1?1:t.level===2?1.5:2,a=1/(i.fireRate*n*this._fabioBoost(t)),r=Ba(i.range)*(1+.15*(t.level-1)),l=i.damage*n,c=this._findTarget(t.x,t.y,r);if(!c){t.fireTimer=.1;continue}if(t.fireTimer=a,i.special==="aoe")for(const d of this._enemies)wo(t.x,t.y,d.x,d.y)<=r&&this._shoot(t.id,t.x,t.y,d,l,t.crewId,!0);else{let d=l;i.special==="double"&&Math.random()<.5&&(d*=2,this._addText(t.x,t.y-16,"DOUBLE! ✦","#9B59B6")),this._shoot(t.id,t.x,t.y,c,d,t.crewId,!1)}}}_fabioBoost(e){for(const t of this._towers){if(t.crewId!=="fabio"||t.id===e.id)continue;const i=Ba(qt.fabio.range)*(1+.15*(t.level-1));if(wo(e.x,e.y,t.x,t.y)<=i)return 1+.3*t.level}return 1}_updateMikayla(e){var t;for(const i of this._towers)if(((t=qt[i.crewId])==null?void 0:t.special)==="income"&&(i.incomeTimer-=e,i.incomeTimer<=0)){const n=2e3*i.level;this._sats+=n,this._totalEarned+=n,this._addText(i.x,i.y-20,`+${n/1e3}k 💰`,"#1ABC9C"),i.incomeTimer=10}}_findTarget(e,t,i){let n=null;for(const s of this._enemies)wo(e,t,s.x,s.y)>i||(!n||s.x>n.x)&&(n=s);return n}_shoot(e,t,i,n,s,a,r){const l=Math.atan2(n.y-i,n.x-t),c=300;this._projs.push({id:this._nextId++,x:t,y:i,vx:Math.cos(l)*c,vy:Math.sin(l)*c,damage:s,crewId:a,targetId:n.id,aoe:r})}_updateProjectiles(e){for(let t=this._projs.length-1;t>=0;t--){const i=this._projs[t];if(i.x+=i.vx*e,i.y+=i.vy*e,i.x<-60||i.x>Be+60||i.y<-60||i.y>Rt+60){this._projs.splice(t,1);continue}const n=this._enemies.find(s=>s.id===i.targetId);if(!n){this._projs.splice(t,1);continue}wo(i.x,i.y,n.x,n.y)>14||(this._projs.splice(t,1),this._hit(i,n))}}_hit(e,t){if(e.crewId==="jose"&&(t.slowed=2.5,this._addText(t.x,t.y-18,"SLOW ❄","#88AAFF")),t.hp-=e.damage,t.hp<=0){let i=t.reward;e.crewId==="joe"&&(i*=2,this._addText(t.x,t.y-22,"INTEL BONUS!","#E67E22")),e.crewId==="matt"&&(this._payoutBonus=Math.min(this._payoutBonus+.005,.5),this._addText(t.x,t.y-18,"+0.5% 💼","#4A90D9")),this._sats+=i,this._totalEarned+=i,this._addText(t.x,t.y-22,`+${(i/1e3).toFixed(0)}k`,"#FFD700");const n=this._enemies.findIndex(s=>s.id===t.id);n>=0&&this._enemies.splice(n,1)}else this._addText(t.x,t.y-14,`-${Math.floor(e.damage)}`,"#FF7777")}_checkWaveDone(){!this._allSpawned||this._enemies.length>0||this._phase!=="wave"||(this._wavesCleared=this._waveIdx+1,this._phase="between",this._betweenTimer=3,this._addText(Be/2,pt+Un/2-20,`WAVE ${this._waveIdx+1} CLEAR! 🎉`,"#2ECC40"))}_addText(e,t,i,n){this._texts.push({x:e,y:t,text:i,life:1.6,max:1.6,color:n})}_updateTexts(e){for(let t=this._texts.length-1;t>=0;t--)this._texts[t].life-=e,this._texts[t].life<=0&&this._texts.splice(t,1)}_click(e){const{x:t,y:i}=e;if(i>=Rt-Ai){this._clickTray(t);return}if(i<pt)return;if(this._selectedTower!==null){const u=this._towers.find(h=>h.id===this._selectedTower);if(u&&this._clickPanel(t,i,u))return;this._selectedTower=null}const n=Math.floor(t/wt),s=Math.floor((i-pt)/yt);if(n<0||n>=On||s<0||s>=Cs)return;const a=this._towers.find(u=>u.col===n&&u.row===s);if(a){this._selectedTower=a.id,this._selectedCrew=null;return}if(!this._selectedCrew||this._phase==="win"||this._phase==="lose")return;const r=this._selectedCrew==="phil";if(s===ji&&!r){this._addText(t,i,"PATH! 🚫","#FF4444");return}const l=qt[this._selectedCrew];if(!l)return;if(this._sats<l.cost){this._addText(t,i,"NOT ENOUGH SATS!","#FF4444");return}const{x:c,y:d}=vv(n,s);this._towers.push({id:this._nextId++,crewId:this._selectedCrew,col:n,row:s,level:1,fireTimer:0,x:c,y:d,incomeTimer:10}),this._sats-=l.cost,this._addText(c,d-20,"📍 PLACED",l.color)}_clickTray(e){const t=this._cfg.crewIds.filter(s=>qt[s]),i=Math.min(72,Be/t.length),n=(Be-i*t.length)/2;for(let s=0;s<t.length;s++){const a=n+s*i;if(e>=a&&e<a+i){const r=t[s];this._selectedCrew=this._selectedCrew===r?null:r,this._selectedTower=null;return}}this._selectedCrew=null}_clickPanel(e,t,i){const n=qt[i.crewId],s=Math.min(Math.max(i.x,80),Be-80),a=Math.min(Math.max(i.y-55,pt+5),Rt-Ai-110),r=Math.round(n.cost*(i.level===1?1.5:2)),l=Math.round(n.cost*(.5+.25*(i.level-1))),c=a+34,d=a+58;if(e>=s-58&&e<=s-4&&t>=c&&t<=d)return i.level<3&&(this._sats>=r?(this._sats-=r,i.level++,this._addText(i.x,i.y-20,`⬆ LVL ${i.level}!`,"#FFD700")):this._addText(i.x,i.y,"NOT ENOUGH SATS","#FF4444")),!0;if(e>=s+4&&e<=s+58&&t>=c&&t<=d){this._sats+=l,this._addText(i.x,i.y,`SOLD +${(l/1e3).toFixed(0)}k`,"#2ECC40");const u=this._towers.findIndex(h=>h.id===i.id);return u>=0&&this._towers.splice(u,1),this._selectedTower=null,!0}return!1}_finish(){if(!this._done)return;const e=this._phase==="win",t=e?Math.min(1,.2+.16*this._lives):0,i=e?Math.round(this._cfg.payout*t*(1+this._payoutBonus)):0,n={won:e,earned:i,wavesCleared:this._wavesCleared,qualityPct:t},s=this._done;this.hide(),s(n)}_draw(){const e=this._ctx;e&&(e.clearRect(0,0,Be,Rt),this._drawGrid(e),this._drawPath(e),this._drawTowers(e),this._drawEnemies(e),this._drawProjectiles(e),this._drawTexts(e),this._drawHUD(e),this._drawTray(e),this._drawUpgradePanel(e),this._phase==="announce"&&this._drawAnnounce(e),this._phase==="prep"&&this._drawPrepHint(e),this._phase==="between"&&this._drawBetween(e),this._phase==="win"&&this._drawWin(e),this._phase==="lose"&&this._drawLose(e))}_drawGrid(e){var t,i;e.fillStyle="#14141f",e.fillRect(0,pt,Be,Un);for(let n=0;n<Cs;n++)if(n!==ji)for(let s=0;s<On;s++){const a=(s+n)%2===0?"#1a1a2a":"#161622";e.fillStyle=a,e.fillRect(s*wt,pt+n*yt,wt,yt)}e.strokeStyle="rgba(255,255,255,0.05)",e.lineWidth=1;for(let n=0;n<=On;n++)e.beginPath(),e.moveTo(n*wt,pt),e.lineTo(n*wt,pt+Un),e.stroke();for(let n=0;n<=Cs;n++)e.beginPath(),e.moveTo(0,pt+n*yt),e.lineTo(Be,pt+n*yt),e.stroke();if(this._selectedCrew){e.fillStyle=(((t=qt[this._selectedCrew])==null?void 0:t.color)??"#ffffff")+"15";for(let n=0;n<Cs;n++){if(n===ji&&this._selectedCrew!=="phil")continue;const s=n===ji&&this._selectedCrew==="phil";for(let a=0;a<On;a++)this._towers.find(r=>r.col===a&&r.row===n)||(e.fillStyle=s?"#7F8C8D22":(((i=qt[this._selectedCrew])==null?void 0:i.color)??"#ffffff")+"18",e.fillRect(a*wt+1,pt+n*yt+1,wt-2,yt-2))}}}_drawPath(e){const t=pt+ji*yt;e.fillStyle="#2a1e10",e.fillRect(0,t,Be,yt),e.fillStyle="rgba(255,220,150,0.12)";for(let i=0;i<On;i++){const n=i*wt+wt/2,s=t+yt/2;e.beginPath(),e.moveTo(n-9,s-5),e.lineTo(n+2,s-5),e.lineTo(n+2,s-9),e.lineTo(n+11,s),e.lineTo(n+2,s+9),e.lineTo(n+2,s+5),e.lineTo(n-9,s+5),e.closePath(),e.fill()}e.font="bold 8px Arial",e.textAlign="center",e.fillStyle="#2ECC40",e.fillText("▶ START",wt/2+2,t+12),e.fillStyle="#FF4444",e.fillText("🏚 BASE",Be-wt/2,t+12)}_drawTowers(e){for(const t of this._towers){const i=qt[t.crewId];if(!i)continue;const n=this._selectedTower===t.id,s=13+t.level*2;e.fillStyle=i.color+"25",e.fillRect(t.col*wt+1,pt+t.row*yt+1,wt-2,yt-2),e.beginPath(),e.arc(t.x,t.y,s,0,Math.PI*2),e.fillStyle=i.color,e.fill();for(let r=1;r<t.level;r++)e.beginPath(),e.arc(t.x,t.y,s+1+r*2,0,Math.PI*2),e.strokeStyle="#FFD700",e.lineWidth=1.5,e.stroke();if(n){e.strokeStyle="#FFD700",e.lineWidth=2.5,e.strokeRect(t.col*wt+1,pt+t.row*yt+1,wt-2,yt-2);const r=Ba(i.range)*(1+.15*(t.level-1));e.beginPath(),e.arc(t.x,t.y,r,0,Math.PI*2),e.strokeStyle=i.color+"70",e.lineWidth=1,e.setLineDash([5,4]),e.stroke(),e.setLineDash([])}e.fillStyle="#fff",e.font=`bold ${t.level>1?7:8}px Arial`,e.textAlign="center";const a=i.name.split(" ")[0].slice(0,5);e.fillText(a,t.x,t.y+s+10),t.level>1&&(e.fillStyle="#FFD700",e.font="bold 7px Arial",e.fillText(`L${t.level}`,t.x,t.y+4))}}_drawEnemies(e){for(const t of this._enemies){const i=t.radius;if(t.type==="boss"){const c=e.createRadialGradient(t.x,t.y,0,t.x,t.y,i*2.2);c.addColorStop(0,t.color+"88"),c.addColorStop(1,"transparent"),e.fillStyle=c,e.beginPath(),e.arc(t.x,t.y,i*2.2,0,Math.PI*2),e.fill()}e.beginPath(),e.arc(t.x,t.y,i,0,Math.PI*2),e.fillStyle=t.slowed>0?"#8899DD":t.color,e.fill(),e.beginPath(),e.arc(t.x-i*.25,t.y-i*.25,i*.38,0,Math.PI*2),e.fillStyle="rgba(255,255,255,0.18)",e.fill();const n={grunt:"G",runner:"R",tanker:"T",boss:"★"};e.fillStyle="#fff",e.font=`bold ${Math.floor(i*.88)}px Arial`,e.textAlign="center",e.fillText(n[t.type],t.x,t.y+i*.34);const s=i*2.4,a=t.x-s/2,r=t.y-i-7;e.fillStyle="#222",e.fillRect(a,r,s,4);const l=t.hp/t.maxHp;e.fillStyle=l>.5?"#2ECC40":l>.25?"#FF8C00":"#FF2244",e.fillRect(a,r,s*l,4)}}_drawProjectiles(e){var t;for(const i of this._projs){const n=((t=qt[i.crewId])==null?void 0:t.color)??"#FFD700";e.beginPath(),e.arc(i.x,i.y,4.5,0,Math.PI*2),e.fillStyle=n,e.fill(),e.beginPath(),e.arc(i.x,i.y,7,0,Math.PI*2),e.fillStyle=n+"44",e.fill()}}_drawTexts(e){for(const t of this._texts){const i=t.life/t.max,n=(1-t.life/t.max)*28;e.globalAlpha=i,e.fillStyle=t.color,e.font="bold 11px Arial Black, Arial",e.textAlign="center",e.fillText(t.text,t.x,t.y-n)}e.globalAlpha=1}_drawHUD(e){e.fillStyle="#0a0a18",e.fillRect(0,0,Be,pt),e.fillStyle="rgba(255,255,255,0.07)",e.fillRect(0,pt-1,Be,1),e.font="bold 13px Arial Black, Arial",e.textAlign="left",e.fillStyle="#FFD700";const t=this._phase==="win"?"COMPLETE!":this._phase==="lose"?"STOLEN 😤":`WAVE ${this._waveIdx+1}/5`;e.fillText(t,8,22),e.font="9px Arial",e.fillStyle="#888";const i=this._phase==="announce"?"GET READY...":this._phase==="prep"?`PREP — ${Math.ceil(this._prepTimer)}s`:this._phase==="wave"?"DEFENDING...":this._phase==="between"?"WAVE CLEAR!":"";e.fillText(i,8,37),e.font="bold 9px Arial",e.textAlign="center",e.fillStyle=this._cfg.rival.color,e.fillText(`⚔️ vs ${this._cfg.rival.name}`,Be/2,18),e.font="13px Arial",e.textAlign="right",e.fillStyle=this._lives>2?"#FF4466":"#FF0000",e.fillText("♥".repeat(this._lives)+"♡".repeat(Math.max(0,5-this._lives)),Be-8,22),e.font="bold 11px Arial",e.fillStyle="#FFD700",e.fillText(`💰 ${(this._sats/1e3).toFixed(0)}k`,Be-8,39)}_drawTray(e){e.fillStyle="#080812",e.fillRect(0,Rt-Ai,Be,Ai),e.fillStyle="rgba(255,255,255,0.07)",e.fillRect(0,Rt-Ai,Be,1);const t=this._cfg.crewIds.filter(r=>qt[r]),i=Math.min(74,(Be-8)/t.length),n=(Be-i*t.length)/2,s=Rt-Ai+5,a=Ai-16;for(let r=0;r<t.length;r++){const l=t[r],c=qt[l];if(!c)continue;const d=n+r*i+2,u=i-4,h=this._selectedCrew===l,f=this._sats>=c.cost;e.fillStyle=h?c.color+"40":"#0d0d22",this._rrect(e,d,s,u,a,7),e.fill(),e.strokeStyle=h?"#FFD700":c.color+"50",e.lineWidth=h?2:1,this._rrect(e,d,s,u,a,7),e.stroke();const g=d+u/2,v=s+20;e.beginPath(),e.arc(g,v,13,0,Math.PI*2),e.fillStyle=f?c.color:"#333",e.fill(),e.fillStyle=f?"#fff":"#777",e.font="bold 11px Arial",e.textAlign="center",e.fillText(c.name[0],g,v+4),e.fillStyle=f?"#ccc":"#555",e.font="7px Arial";const m=c.name.split(" ")[0].slice(0,7);e.fillText(m,g,s+41),e.fillStyle=f?"#FFD700":"#774400",e.font="bold 8px Arial",e.fillText(`${(c.cost/1e3).toFixed(0)}k`,g,s+53)}e.fillStyle="#444",e.font="8px Arial",e.textAlign="center",e.fillText(this._selectedCrew?"Tap grid cell to place • Tap again to deselect":"Tap a crew member to select",Be/2,Rt-3)}_drawUpgradePanel(e){if(this._selectedTower===null)return;const t=this._towers.find(d=>d.id===this._selectedTower);if(!t)return;const i=qt[t.crewId],n=Math.min(Math.max(t.x,80),Be-80),s=Math.min(Math.max(t.y-55,pt+5),Rt-Ai-110),a=Math.round(i.cost*(t.level===1?1.5:2)),r=Math.round(i.cost*(.5+.25*(t.level-1))),l=t.level>=3,c=!l&&this._sats>=a;e.fillStyle="rgba(8,8,25,0.97)",e.strokeStyle=i.color,e.lineWidth=2,this._rrect(e,n-64,s,128,68,9),e.fill(),e.stroke(),e.fillStyle=i.color,e.font="bold 9px Arial Black, Arial",e.textAlign="center",e.fillText(`${i.name}  Lv.${t.level}`,n,s+14),e.fillStyle="#888",e.font="8px Arial",e.fillText(`✦ ${i.special}`,n,s+26),e.fillStyle=c?"#0e3010":"#1a1a1a",e.strokeStyle=c?"#2ECC40":"#444",e.lineWidth=1,this._rrect(e,n-60,s+32,55,26,5),e.fill(),e.stroke(),e.fillStyle=c?"#2ECC40":"#555",e.font="bold 8px Arial",e.fillText(l?"MAX":`↑ ${(a/1e3).toFixed(0)}k`,n-32,s+48),e.fillStyle="#2d0a00",e.strokeStyle="#E67E22",e.lineWidth=1,this._rrect(e,n+5,s+32,55,26,5),e.fill(),e.stroke(),e.fillStyle="#E67E22",e.font="bold 8px Arial",e.fillText(`Sell ${(r/1e3).toFixed(0)}k`,n+32,s+48)}_drawAnnounce(e){const t=pt+Un/2;e.fillStyle="rgba(0,0,0,0.78)",e.fillRect(0,t-58,Be,116),e.strokeStyle=this._cfg.rival.color+"80",e.lineWidth=2,e.strokeRect(0,t-58,Be,116),e.font="bold 19px Arial Black, Arial",e.textAlign="center",e.fillStyle=this._cfg.rival.color,e.fillText(`⚔ WAVE ${this._waveIdx+1} INCOMING`,Be/2,t-24),e.fillStyle="#fff",e.font="bold 13px Arial",e.fillText(`— ${this._cfg.rival.name.toUpperCase()} —`,Be/2,t-4),e.fillStyle="#FFD700",e.font="bold 26px Arial Black, Arial",e.fillText(`${Math.ceil(this._announceTimer)}`,Be/2,t+30),e.fillStyle="#888",e.font="9px Arial",e.fillText("Place your towers while you can!",Be/2,t+48)}_drawPrepHint(e){e.fillStyle="rgba(255,215,0,0.92)",e.font="bold 10px Arial Black, Arial",e.textAlign="center",e.fillText(`⏱ PREP: ${Math.ceil(this._prepTimer)}s — PLACE YOUR TOWERS!`,Be/2,pt+14)}_drawBetween(e){const t=pt+Un/2;e.fillStyle="rgba(0,25,8,0.78)",e.fillRect(0,t-36,Be,72),e.fillStyle="#2ECC40",e.font="bold 18px Arial Black, Arial",e.textAlign="center",e.fillText(`WAVE ${this._waveIdx+1} CLEAR! 🎉`,Be/2,t+4),e.fillStyle="#aaa",e.font="10px Arial",e.fillText(`Next wave in ${Math.ceil(this._betweenTimer)}s`,Be/2,t+22)}_drawWin(e){e.fillStyle="rgba(0,16,4,0.92)",e.fillRect(0,0,Be,Rt);const t=Rt/2;e.font="bold 26px Arial Black, Arial",e.textAlign="center",e.fillStyle="#2ECC40",e.fillText("CONTRACT SECURED! 🏆",Be/2,t-55),e.fillStyle="#FFD700",e.font="bold 14px Arial",e.fillText("All 5 waves cleared!",Be/2,t-26),e.fillStyle="#FF4466",e.font="bold 13px Arial",e.fillText(`Lives remaining: ${"❤️".repeat(this._lives)}`,Be/2,t+2);const i=Math.round(Math.min(1,.2+.16*this._lives)*100);e.fillStyle="#aaa",e.font="12px Arial",e.fillText(`Quality: ${i}%  •  Sats: ${(this._totalEarned/1e3).toFixed(0)}k`,Be/2,t+28),e.fillStyle="#555",e.font="10px Arial",e.fillText("Heading to the job site...",Be/2,t+52)}_drawLose(e){e.fillStyle="rgba(30,0,0,0.92)",e.fillRect(0,0,Be,Rt);const t=Rt/2;e.font="bold 24px Arial Black, Arial",e.textAlign="center",e.fillStyle="#FF2244",e.fillText("CONTRACT STOLEN 😤",Be/2,t-50),e.fillStyle=this._cfg.rival.color,e.font="bold 13px Arial",e.fillText(`${this._cfg.rival.name} won the contract.`,Be/2,t-22),e.fillStyle="#aaa",e.font="12px Arial",e.fillText(`Waves cleared: ${this._wavesCleared} / 5`,Be/2,t+4),e.fillText("Better luck next time, mate.",Be/2,t+26)}_rrect(e,t,i,n,s,a){a=Math.min(a,n/2,s/2),e.beginPath(),e.moveTo(t+a,i),e.lineTo(t+n-a,i),e.arcTo(t+n,i,t+n,i+a,a),e.lineTo(t+n,i+s-a),e.arcTo(t+n,i+s,t+n-a,i+s,a),e.lineTo(t+a,i+s),e.arcTo(t,i+s,t,i+s-a,a),e.lineTo(t,i+a),e.arcTo(t,i,t+a,i,a),e.closePath()}}class _v{constructor(){x(this,"_el",null)}show(){this.hide();const e=document.createElement("div");e.id="contract-wars-panel",e.style.cssText=`
      position:fixed; inset:0; z-index:13000;
      background:rgba(0,0,0,0.92);
      display:flex; flex-direction:column; align-items:center;
      justify-content:flex-start;
      font-family:'Arial Black',Arial,sans-serif;
      overflow-y:auto; padding:20px 12px 32px;
      box-sizing:border-box;
    `;const t=document.createElement("div");t.style.cssText=`
      width:100%; max-width:420px;
      display:flex; flex-direction:column; align-items:center; gap:4px;
      margin-bottom:20px;
    `,t.innerHTML=`
      <div style="
        font-size:clamp(26px,8vw,44px); font-weight:900; letter-spacing:4px;
        background:linear-gradient(180deg,#FFD700,#FF6600);
        -webkit-background-clip:text; -webkit-text-fill-color:transparent;
        background-clip:text; line-height:1.1; text-align:center;
      ">⚔️ CONTRACT WARS</div>
      <div style="
        color:#888; font-size:clamp(10px,2.8vw,13px); letter-spacing:2px;
        font-weight:700; text-transform:uppercase; text-align:center;
      ">The ultimate crew challenge</div>
      <div style="
        width:80%; height:2px; margin-top:8px;
        background:linear-gradient(90deg,transparent,#FFD700,transparent);
      "></div>
    `,e.appendChild(t);const i=document.createElement("div");i.style.cssText=`
      width:100%; max-width:420px;
      display:flex; flex-direction:column; gap:16px;
    `,i.appendChild(this._sectionHeading("📖 HOW TO PLAY"));const n=[{icon:"⚔️",title:"Spot a Contested Job",desc:"On the Job Board, look for gold-bordered cards marked ⚔️ CONTRACT WAR. These are contested — a rival crew wants the same gig."},{icon:"🏗️",title:"Beat The Scaffold",desc:"Accept the job and race up the scaffold before time runs out. Dodge Connie's plaster globs — she's armed, bionic, and merciless."},{icon:"🗼",title:"Defend Your Territory",desc:"After the scaffold, drop into Tower Defence mode. Place your crew as towers along the path and hold off the rival attack. Towers auto-fire — position matters."},{icon:"⏱️",title:"Fastest Crew Wins",desc:"Your combined scaffold + tower defence time is your score. Beat the existing record to top the leaderboard. The contract — and the BTC — goes to the fastest."},{icon:"💡",title:"Pick Your Crew Wisely",desc:"Each crew member has unique perks that boost scaffold speed, tower range, or damage. Mix and match before accepting a contested job."}],s=document.createElement("div");s.style.cssText=`
      background:rgba(255,255,255,0.04); border:1px solid rgba(255,215,0,0.15);
      border-radius:14px; padding:14px 12px;
      display:flex; flex-direction:column; gap:12px;
    `,n.forEach((h,f)=>{const g=document.createElement("div");g.style.cssText="display:flex; gap:12px; align-items:flex-start;",g.innerHTML=`
        <div style="
          font-size:22px; flex-shrink:0; width:32px; text-align:center;
          margin-top:2px;
        ">${h.icon}</div>
        <div>
          <div style="
            color:#FFD700; font-size:clamp(11px,3vw,13px); font-weight:900;
            margin-bottom:3px; letter-spacing:0.5px;
          ">${f+1}. ${h.title}</div>
          <div style="
            color:#ccc; font-size:clamp(10px,2.6vw,12px); line-height:1.5;
            font-family:system-ui,sans-serif; font-weight:400;
          ">${h.desc}</div>
        </div>
      `,f<n.length-1&&(g.style.paddingBottom="12px",g.style.borderBottom="1px solid rgba(255,255,255,0.06)"),s.appendChild(g)}),i.appendChild(s),i.appendChild(this._sectionHeading("🗼 TOWER DEFENCE TIPS"));const a=document.createElement("div");a.style.cssText=`
      background:rgba(30,15,50,0.6); border:1px solid rgba(180,100,255,0.2);
      border-radius:14px; padding:12px 14px;
      display:grid; grid-template-columns:1fr 1fr; gap:8px;
    `,[["⚡ Chokepoints","Stack towers at bends — enemies slow down near corners."],["🎯 Range > Damage","Long-range towers hit enemies before they reach your base."],["🛡️ Jose = Tank","Jose has the most HP. Put him at the front line."],["💨 Speed kills","Early waves are fast. Cover the entry path first."],["🔋 Tsuyoshi","Precision perk — highest damage per shot."],["🏃 Jarrad","Speed perk — attacks faster than any other crew member."]].forEach(([h,f])=>{const g=document.createElement("div");g.style.cssText=`
        background:rgba(255,255,255,0.04); border-radius:10px; padding:8px 9px;
      `,g.innerHTML=`
        <div style="color:#CC88FF;font-size:clamp(9px,2.4vw,11px);font-weight:900;margin-bottom:3px;">${h}</div>
        <div style="color:#aaa;font-size:clamp(9px,2.2vw,10px);line-height:1.4;font-family:system-ui,sans-serif;font-weight:400;">${f}</div>
      `,a.appendChild(g)}),i.appendChild(a),i.appendChild(this._sectionHeading("🏆 GLOBAL LEADERBOARD"));const l=document.createElement("div");l.id="cw-leaderboard-wrap",l.style.cssText=`
      background:rgba(255,215,0,0.04); border:1px solid rgba(255,215,0,0.18);
      border-radius:14px; padding:12px 14px;
      min-height:80px; display:flex; flex-direction:column; gap:0;
    `,l.innerHTML=`
      <div style="color:#888;font-size:11px;text-align:center;font-family:system-ui,sans-serif;">
        Loading records...
      </div>
    `,i.appendChild(l),this._loadLeaderboard(l),i.appendChild(this._sectionHeading("👥 CREW PERKS"));const c=document.createElement("div");c.style.cssText=`
      background:rgba(20,30,20,0.7); border:1px solid rgba(46,204,64,0.15);
      border-radius:14px; padding:12px 14px;
      display:flex; flex-direction:column; gap:6px;
    `,[{name:"Jose",icon:"👑",color:"#FFD700",perk:"Mascot — morale boost; +20% payout on all contested jobs"},{name:"Matt",icon:"🔨",color:"#E0B494",perk:"Foreman — scaffold time bonus; +15% base"},{name:"Connie",icon:"⚡",color:"#F0C8A0",perk:"Bionic — tower attack speed ×1.4"},{name:"Jarrad",icon:"🏃",color:"#D8A878",perk:"Speedster — fastest tower attack rate"},{name:"Tsuyoshi",icon:"🎯",color:"#F0D4B0",perk:"Precision — highest tower damage"},{name:"Fabio",icon:"🍕",color:"#D4A070",perk:"Sustain — towers regenerate HP"},{name:"Phil",icon:"🛠️",color:"#D8B89A",perk:"Repair — fixes damaged towers mid-wave"},{name:"Joe",icon:"🔭",color:"#EED8C0",perk:"Scout — reveals enemy health bars"},{name:"Mikayla",icon:"📐",color:"#F0C8A0",perk:"Architect — tower range +25%"}].forEach(h=>{const f=document.createElement("div");f.style.cssText=`
        display:flex; gap:10px; align-items:center;
        padding:5px 0; border-bottom:1px solid rgba(255,255,255,0.05);
      `,f.innerHTML=`
        <div style="font-size:16px;flex-shrink:0;">${h.icon}</div>
        <div style="color:${h.color};font-size:clamp(10px,2.8vw,12px);font-weight:900;
                    width:62px;flex-shrink:0;">${h.name}</div>
        <div style="color:#bbb;font-size:clamp(9px,2.4vw,11px);line-height:1.4;
                    font-family:system-ui,sans-serif;font-weight:400;">${h.perk}</div>
      `,c.appendChild(f)}),i.appendChild(c),e.appendChild(i);const u=document.createElement("button");u.textContent="✕ CLOSE",u.style.cssText=`
      position:sticky; bottom:16px; margin-top:20px;
      background:linear-gradient(135deg,#1a1a1a,#2a2a2a);
      border:1px solid rgba(255,215,0,0.3);
      color:#FFD700; font-size:13px; font-weight:900;
      letter-spacing:2px; padding:12px 40px;
      border-radius:30px; cursor:pointer;
      width:100%; max-width:420px; display:block;
      touch-action:manipulation;
    `,u.addEventListener("click",()=>this.hide()),e.appendChild(u),e.addEventListener("click",h=>{h.target===e&&this.hide()}),document.body.appendChild(e),this._el=e}hide(){var e;(e=this._el)==null||e.remove(),this._el=null}async _loadLeaderboard(e){try{const t=await av(10);if(t.length===0){e.innerHTML=`
          <div style="color:#666;font-size:12px;text-align:center;font-style:italic;
                      padding:16px 0;font-family:system-ui,sans-serif;">
            No records yet — complete a Contract War to claim the top spot!
          </div>
        `;return}e.innerHTML=this._renderLeaderboard(t)}catch{e.innerHTML=`
        <div style="color:#666;font-size:11px;text-align:center;font-family:system-ui,sans-serif;">
          Could not load leaderboard (offline?)
        </div>
      `}}_renderLeaderboard(e){const t=`
      <div style="
        display:grid; grid-template-columns:28px 1fr 110px 70px;
        gap:6px; padding:0 2px 6px; border-bottom:1px solid rgba(255,215,0,0.2);
        margin-bottom:6px;
      ">
        <div style="color:#666;font-size:9px;font-weight:900;letter-spacing:1px;">#</div>
        <div style="color:#666;font-size:9px;font-weight:900;letter-spacing:1px;">CREW</div>
        <div style="color:#666;font-size:9px;font-weight:900;letter-spacing:1px;text-align:center;">JOB</div>
        <div style="color:#666;font-size:9px;font-weight:900;letter-spacing:1px;text-align:right;">PAYOUT</div>
      </div>
    `,i=e.map((n,s)=>{const a=s===0?"🥇":s===1?"🥈":s===2?"🥉":`${s+1}`,r=n.payout>=1e6?`${(n.payout/1e6).toFixed(2)}M`:`${(n.payout/1e3).toFixed(0)}K`,l=n.job_title.replace(/^⚔️\s*/,"").slice(0,14),c=n.player_name.slice(0,14);return`
        <div style="
          display:grid; grid-template-columns:28px 1fr 110px 70px;
          gap:6px; padding:5px 2px; align-items:center;
          background:${s<3?"rgba(255,215,0,0.06)":"rgba(255,255,255,0.02)"}; border-radius:6px; margin-bottom:2px;
        ">
          <div style="color:#FFD700;font-size:11px;font-weight:900;text-align:center;">${a}</div>
          <div style="color:#fff;font-size:11px;font-weight:800;
                      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${c}</div>
          <div style="color:#aaa;font-size:9px;font-weight:600;text-align:center;
                      white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${l}</div>
          <div style="color:#2ECC40;font-size:11px;font-weight:900;text-align:right;">₿ ${r}</div>
        </div>
      `}).join("");return t+i}_sectionHeading(e){const t=document.createElement("div");return t.style.cssText=`
      display:flex; align-items:center; gap:10px; margin-top:4px;
    `,t.innerHTML=`
      <div style="
        color:#FFD700; font-size:clamp(11px,3vw,14px); font-weight:900;
        letter-spacing:2px; white-space:nowrap;
      ">${e}</div>
      <div style="flex:1;height:1px;background:linear-gradient(90deg,rgba(255,215,0,0.4),transparent);"></div>
    `,t}}const qc=[{name:"Marbellino",bg1:"#D4C4A8",bg2:"#A8905A",vein:"#C8B48A",label:"#5A3A1A"},{name:"Tadelakt",bg1:"#D8CEBA",bg2:"#9A7A5A",vein:"#C0A880",label:"#4A2A0A"},{name:"Antique Stucco",bg1:"#E4D8BC",bg2:"#B89060",vein:"#D0BC9A",label:"#5A3A10"},{name:"Hemp Render",bg1:"#CEC8A8",bg2:"#9A8A60",vein:"#BAB090",label:"#4A3A10"},{name:"Rokka",bg1:"#D4C4AC",bg2:"#B08060",vein:"#C0A888",label:"#503018"},{name:"Tadelino",bg1:"#DCD4BC",bg2:"#AA8C64",vein:"#C8B898",label:"#4A3020"}];class bv{constructor(){x(this,"_el",null)}show(e,t){this.hide();const i=qc[Math.floor(Math.random()*qc.length)],n=e.replace(/^[⚔️🚨]\s*/,"").trim(),s=document.createElement("div");s.id="photo-reveal-ov",s.style.cssText=`
      position:fixed; inset:0; z-index:14500;
      background:#0a0a12; display:flex; flex-direction:column;
      align-items:center; font-family:'Arial Black',Arial,sans-serif;
      overflow:hidden; touch-action:none; user-select:none;
    `;const a=document.createElement("div");a.style.cssText=`
      width:100%; padding:14px 16px 10px; box-sizing:border-box;
      text-align:center; flex-shrink:0; position:relative; z-index:5;
    `,a.innerHTML=`
      <div style="color:#FFD700;font-size:clamp(10px,2.8vw,13px);
        letter-spacing:3px;font-weight:900;margin-bottom:3px;">
        📸 JOB DONE — FINISH THE WALL
      </div>
      <div style="color:#fff;font-size:clamp(15px,4.5vw,22px);
        font-weight:900;line-height:1.2;">${n}</div>
      <div id="pr-hint" style="color:#aaa;font-size:clamp(10px,2.6vw,12px);
        font-family:system-ui,sans-serif;margin-top:3px;">
        🖌️ SWIPE TO APPLY THE FINISH
      </div>
    `,s.appendChild(a);const r=document.createElement("div");r.style.cssText=`
      flex:1; width:100%; position:relative; overflow:hidden;
    `;const l=document.createElement("canvas");l.style.cssText=`
      position:absolute; inset:0; width:100%; height:100%;
      display:block; cursor:crosshair;
    `,r.appendChild(l),s.appendChild(r);const c=document.createElement("div");c.style.cssText=`
      width:100%; padding:10px 16px 8px; box-sizing:border-box;
      flex-shrink:0; position:relative; z-index:5;
    `,c.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;
        margin-bottom:5px;">
        <span style="color:#aaa;font-size:10px;font-weight:900;
          letter-spacing:1px;font-family:system-ui,sans-serif;">
          ${i.name.toUpperCase()} APPLIED
        </span>
        <span id="pr-pct" style="color:#FFD700;font-size:11px;font-weight:900;">0%</span>
      </div>
      <div style="width:100%;height:8px;background:rgba(255,255,255,0.1);
        border-radius:4px;overflow:hidden;">
        <div id="pr-bar" style="width:0%;height:100%;
          background:linear-gradient(90deg,${i.bg2},${i.bg1});
          border-radius:4px;transition:width 0.2s;"></div>
      </div>
    `,s.appendChild(c);const d=document.createElement("button");d.id="pr-collect-btn",d.textContent="💰 COLLECT PAYMENT",d.style.cssText=`
      display:none; width:calc(100% - 32px); margin:0 16px 20px;
      background:linear-gradient(135deg,#2ECC40,#1AA830);
      border:none; color:#fff; font-size:clamp(14px,4vw,18px);
      font-weight:900; letter-spacing:1px; padding:16px 40px;
      border-radius:30px; cursor:pointer; touch-action:manipulation;
      box-shadow:0 4px 20px rgba(46,204,64,0.4); flex-shrink:0;
    `,d.addEventListener("click",()=>{this.hide(),t()}),s.appendChild(d),document.body.appendChild(s),this._el=s,requestAnimationFrame(()=>{const u=l.offsetWidth||window.innerWidth,h=l.offsetHeight||window.innerHeight*.65;l.width=u,l.height=h;const f=l.getContext("2d");this._drawBeforeWall(f,u,h);const g=document.createElement("canvas");g.width=u,g.height=h;const v=g.getContext("2d");this._drawAfterWall(v,u,h,i);const m=document.createElement("canvas");m.width=u,m.height=h;const p=m.getContext("2d");p.fillStyle="#000",p.fillRect(0,0,u,h);const b=u*h;let M=!1;const y=Math.max(60,u*.18),R=(U,O)=>{if(M)return;p.fillStyle="#fff",p.beginPath(),p.ellipse(U,O,y,y*.5,0,0,Math.PI*2),p.fill(),f.clearRect(0,0,u,h),this._drawBeforeWall(f,u,h),f.save();const W=document.createElement("canvas");W.width=u,W.height=h;const j=W.getContext("2d");j.drawImage(m,0,0),j.globalCompositeOperation="source-in",j.drawImage(g,0,0),f.drawImage(W,0,0),f.restore(),f.save();const K=f.createRadialGradient(U,O,0,U,O,y);K.addColorStop(0,i.bg1+"cc"),K.addColorStop(.6,i.bg1+"44"),K.addColorStop(1,"transparent"),f.fillStyle=K,f.beginPath(),f.ellipse(U,O,y*1.15,y*.65,0,0,Math.PI*2),f.fill(),f.restore();const X=p.getImageData(0,0,u,h);let ae=0;for(let ne=0;ne<X.data.length;ne+=160)X.data[ne]>128&&ae++;const he=Math.ceil(b/40),xe=Math.min(100,Math.round(ae/he*100)),Re=document.getElementById("pr-bar"),Ue=document.getElementById("pr-pct");Re&&(Re.style.width=`${xe}%`),Ue&&(Ue.textContent=`${xe}%`);const Y=document.getElementById("pr-hint");xe>=80&&!M?(M=!0,f.clearRect(0,0,u,h),f.drawImage(g,0,0),Y&&(Y.textContent="✅ BEAUTIFUL — Collect your pay!"),Ue&&(Ue.textContent="100%",Ue.style.color="#2ECC40"),Re&&(Re.style.width="100%",Re.style.background="#2ECC40"),this._showStars(s,i,n),setTimeout(()=>{d.style.display="block"},1200)):xe>=50&&Y&&(Y.textContent="🎨 Almost there — keep going!")};let E=!1,A=0,I=0;const T=U=>{const O=l.getBoundingClientRect(),W=u/O.width,j=h/O.height;if("touches"in U&&U.touches.length>0)return{x:(U.touches[0].clientX-O.left)*W,y:(U.touches[0].clientY-O.top)*j};const K=U;return{x:(K.clientX-O.left)*W,y:(K.clientY-O.top)*j}},_=U=>{U.preventDefault(),E=!0;const O=T(U);A=O.x,I=O.y,R(O.x,O.y)},P=U=>{if(!E)return;U.preventDefault();const O=T(U),W=O.x-A,j=O.y-I,K=Math.sqrt(W*W+j*j),X=Math.max(1,Math.floor(K/(y*.4)));for(let ae=1;ae<=X;ae++)R(A+W*ae/X,I+j*ae/X);A=O.x,I=O.y},G=()=>{E=!1};l.addEventListener("mousedown",_,{passive:!1}),l.addEventListener("mousemove",P,{passive:!1}),l.addEventListener("mouseup",G),l.addEventListener("touchstart",_,{passive:!1}),l.addEventListener("touchmove",P,{passive:!1}),l.addEventListener("touchend",G,{passive:!1})})}hide(){var e;(e=this._el)==null||e.remove(),this._el=null}_drawBeforeWall(e,t,i){const n=e.createLinearGradient(0,0,t,i);n.addColorStop(0,"#888880"),n.addColorStop(.5,"#7A7A74"),n.addColorStop(1,"#848480"),e.fillStyle=n,e.fillRect(0,0,t,i),e.strokeStyle="rgba(50,50,40,0.45)",e.lineWidth=1.5;for(let s=0;s<12;s++){const a=s*137%t,r=s*89%i;e.beginPath(),e.moveTo(a,r);for(let l=0;l<4;l++){const c=a+(s*37+l*61)%80-40,d=r+(s*53+l*73)%60-10;e.lineTo(c,d)}e.stroke()}for(let s=0;s<6;s++){const a=s*181%t,r=s*113%i,l=20+s*23%30,c=e.createRadialGradient(a,r,0,a,r,l);c.addColorStop(0,"rgba(60,50,30,0.25)"),c.addColorStop(1,"transparent"),e.fillStyle=c,e.beginPath(),e.arc(a,r,l,0,Math.PI*2),e.fill()}e.fillStyle="rgba(255,255,255,0.18)",e.font=`bold ${Math.round(i*.06)}px Arial Black, Arial`,e.textAlign="center",e.fillText("BEFORE",t/2,i/2)}_drawAfterWall(e,t,i,n){var r;const s=e.createLinearGradient(0,0,t,i);s.addColorStop(0,n.bg1),s.addColorStop(.4,n.bg2),s.addColorStop(.7,n.vein),s.addColorStop(1,n.bg1),e.fillStyle=s,e.fillRect(0,0,t,i),e.globalAlpha=.18;for(let l=0;l<8;l++){e.strokeStyle=n.vein,e.lineWidth=1+l%3,e.beginPath();const c=l*71%t,d=l*43%i;e.moveTo(c,d),e.bezierCurveTo(c+40+l*17%80,d-20,c+80+l*23%60,d+30,c+120+l*13%100,d+l*7%60),e.stroke()}e.globalAlpha=1;const a=e.createLinearGradient(0,0,t*.6,i*.3);a.addColorStop(0,"rgba(255,255,255,0.22)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.fillRect(0,0,t,i),e.globalAlpha=.09,e.strokeStyle=n.bg2,e.lineWidth=2;for(let l=0;l<5;l++){const c=i*.15+l*i*.17;e.beginPath(),e.moveTo(0,c),e.lineTo(t,c+(l%2===0?8:-8)),e.stroke()}e.globalAlpha=1,e.fillStyle=`rgba(${(r=n.label.replace("#","").match(/.{2}/g))==null?void 0:r.map(l=>parseInt(l,16)).join(",")},0.25)`,e.font=`bold ${Math.round(i*.06)}px Arial Black, Arial`,e.textAlign="center",e.fillText("AFTER",t/2,i/2)}_showStars(e,t,i){const n=document.createElement("div");if(n.style.cssText=`
      position:absolute; inset:0; z-index:10;
      display:flex; flex-direction:column; align-items:center;
      justify-content:center; gap:10px; pointer-events:none;
      background:rgba(0,0,0,0.55);
      animation:pr-reveal-fade 0.5s ease both;
    `,!document.getElementById("pr-styles")){const s=document.createElement("style");s.id="pr-styles",s.textContent=`
        @keyframes pr-reveal-fade {
          from { opacity:0; transform:scale(0.96); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes pr-star-bounce {
          0%   { transform:scale(0) rotate(-20deg); opacity:0; }
          60%  { transform:scale(1.3) rotate(5deg); opacity:1; }
          100% { transform:scale(1) rotate(0deg); opacity:1; }
        }
      `,document.head.appendChild(s)}n.innerHTML=`
      <div style="font-size:clamp(28px,8vw,48px);font-weight:900;
        color:#FFD700;letter-spacing:2px;text-align:center;
        text-shadow:0 2px 20px #FFD70066;">🏆 FINISHED!</div>
      <div style="color:#fff;font-size:clamp(14px,4vw,20px);
        font-weight:700;text-align:center;opacity:0.9;">${i}</div>
      <div style="background:${t.bg1};color:${t.label};
        font-size:clamp(11px,3vw,14px);font-weight:900;
        padding:5px 16px;border-radius:20px;letter-spacing:1px;">
        ${t.name.toUpperCase()} ✓
      </div>
      <div style="display:flex;gap:6px;margin-top:4px;">
        ${"⭐".repeat(5).split("").map((s,a)=>`<span style="font-size:28px;animation:pr-star-bounce 0.4s ${a*.1}s cubic-bezier(.34,1.56,.64,1) both;">${s}</span>`).join("")}
      </div>
    `,e.appendChild(n)}}const wv={Matt:`Matt folds himself into the back. "Took your time." He's already on his phone.`,Jose:'Jose appears from nowhere, bucket in hand. "Vámonos — I was getting bored."',Jarrad:`Jarrad adjusts his hard hat. "I've been standing here fifteen minutes." He has.`,Phil:`Phil sips the last of his tea, unhurried. "Right then. Let's go." He fastens his seatbelt twice.`,Tsuyoshi:"Tsuyoshi vaults in without opening the door. His mohawk grazes the roof lining.",Fabio:`Fabio loads in, trowel over his shoulder. "You're late. Ehhhh —" he waves it off. "I found a pizza place nearby. Very acceptable."`};async function Mv(){await Og();const o=await new Y1().play();await new Z1().show(o);const e=new Gg;await e.init();const t=new Yg(e.scene);t.spawnCrewAtCityPositions();const i=new h1,n=new jg(e.scene),s=new u1,a=new g1,r=new U1,l=new Oo,c=new Qg(n,i,te=>{l.activePhase>=2&&s.triggerBump(te)},e.collisionWorld,()=>{l.activePhase>=2&&s.triggerCrash()}),d=new Cr(e.scene),u=new Pr,h=new pv,f=new xv;let g=Ar();const v=new f1(te=>{v.hide(),u.show(te.title,te.pay,se=>{const pe=Math.round(te.pay*tv()),De=nv(),Fe=()=>{r.show(`📋 ${te.title}`,`Client: ${te.client}

${te.description}

💰 Pay: ${pe.toLocaleString()} sats${pe!==te.pay?" ✦ crew bonus!":""}

🏭 Head to the TEM workshop to collect supplies.`,()=>{te.pay=pe;const de=bo().map(Me=>Me.charAt(0).toUpperCase()+Me.slice(1));if(l.acceptJob(te,de),d.setTarget(Oo.WORKSHOP_POS),a.setActiveJob(te,1),a.updateCrewStatus([],[],!1),xe=0,iv())Re=1/0,Ue=1/0;else{const Me=20+Math.random()*60+De,Xe=Me+20+Math.random()*50;Math.random()>.5?(Re=Me,Ue=Xe):(Ue=Me,Re=Xe)}Y=null,ne=null},Yi(O1))};te.isContested?X.show(de=>{g=Ar(),j=te.title,h.show(bo(),g,()=>{Fe()}),setTimeout(()=>h.injectLeaderboard(te.title),50)}):Fe()})});s.onSpill=te=>{l.money=Math.max(0,l.money-te),a.updateMoney(l.money),a.showSpillPenalty(te)};const m=new D1(e.scene),p=new Rr(e.scene),b=new B1,M=new pn(e.scene),y=new Rs(e.scene),R=new N1,E=new D(pn.POS.x,6,pn.POS.z),A=new E1,I=new R1,T=new Ns,_=new fv,P=new G1,G=new _v,U=new bv,O=new Q1(()=>I.show(),()=>{if(v.isVisible())v.hide();else{const te=l.getAvailableJobs();v.show(te)}},()=>_.show(te=>{te>0&&(l.money+=te*1e3,a.updateMoney(l.money),a.showToast(`🎨 Formula cracked! +${(te*1e3).toLocaleString()} sats`,4513160))}),()=>G.show());O.mountMoneyPanel(a.getMoneyPanel()),O.mountRadio(P.getEl());let W=!1,j="",K=0;const X=new cv,ae={x:-60,z:-100},he={x:100,z:60};let xe=0,Re=-1,Ue=-1,Y=null,ne=null;e.onUpdate(te=>{const se=n.mesh.position.x,pe=n.mesh.position.z;if(r.isActive){(i.forward||i.brake)&&r.tryResume(),t.updateAll(te),M.update(te,se,pe,R),y.update(te,se,pe,R),e.camera.follow(n.mesh.position,n.velocity,n.heading);{const de=E.clone().project(e.camera.camera),Me=(de.x*.5+.5)*window.innerWidth,Xe=(-de.y*.5+.5)*window.innerHeight;R.setScreenPosition(Me,Xe)}return}c.update(te),n.updateSuspension(te);const De=l.activeJob!==null&&l.activePhase>=2;if(s.setVisible(De),De?s.update(te):s.level=0,t.updateAll(te),p.update(te),p.tryVisit(se,pe)&&Y!=="coffee"&&(s.level=Math.max(0,s.level-.6),b.drinkCoffee(),b.isUrgent?a.showToast("☕ Coffeed up — now find a toilet, fast!",13918762):a.showToast("☕ Coffee hit! Plaster steady, bladder loading...",13918762)),b.update(te,l.activeJob?c.speed:0),b.tryRelief(se,pe)&&Y!=="toilet"&&a.showToast("🚽 Ahhh! Relief! Ready for the next coffee ☕",2201331),b.isUrgent&&l.activeJob){const de=Date.now();de-b.lastUrgentToast>15e3&&(b.lastUrgentToast=de,a.showToast("🚽 Bursting! Find the toilet before you spill!",16733986))}s.spillRateMultiplier=b.spillMultiplier,M.update(te,se,pe,R)&&E.set(pn.POS.x,6,pn.POS.z),y.update(te,se,pe,R)&&E.set(Rs.POS.x,6,Rs.POS.z);const Fe=t.checkProximityDialogue(se,pe);Fe&&(E.set(Fe.pos.x,6,Fe.pos.z),R.show(Fi[Fe.name],Fe.line));{const de=E.clone().project(e.camera.camera),Me=(de.x*.5+.5)*window.innerWidth,Xe=(-de.y*.5+.5)*window.innerHeight;R.setScreenPosition(Me,Xe)}if(m.update(te,se,pe),d.update(te,se,pe),l.activeJob){const de=l.tickTravel(te);a.updateTravelTimer(l.travelTimer),de!=null&&de.failed&&(s.level=0,Y=null,ne=null,Re=-1,Ue=-1,d.setTarget(null),a.updateTravelTimer(null),a.showTimerFail(15e4),a.setActiveJob(null,1),a.updateMoney(l.money),a.updateCrewStatus([],[],!1),t.showAllCrew(),setTimeout(()=>{const Me=l.getAvailableJobs();v.show(Me)},3500))}else a.updateTravelTimer(null);if(l.activeJob!==null)if(l.activePhase===1)a.updateJobDistance(l.distanceToWorkshop(se,pe));else if(l.activePhase===2){const de=l.nextCrewNeeded();if(de){const Me=t.getCrewPosition(de);a.updateJobDistance(l.distanceToPoint(se,pe,Me.x,Me.z))}}else a.updateJobDistance(l.distanceTo(se,pe));if(l.activeJob&&!Y&&!W&&(xe+=te,Re>0&&xe>=Re?(Re=-1,Y="coffee",ne=d.currentTarget,d.setTarget(ae),a.showToast("☕ Gagging for a coffee — hit the cafe NOW!",13918762)):Ue>0&&xe>=Ue&&(Ue=-1,Y="toilet",b.level=.88,b.isUrgent=!0,ne=d.currentTarget,d.setTarget(he),a.showToast("🚽 Bursting! Find the toilet before you ruin the plastering!",16733986))),l.activeJob&&Y&&!W){const de=Y==="coffee"?ae:he,Me=se-de.x,Xe=pe-de.z;if(Math.sqrt(Me*Me+Xe*Xe)<14){W=!0;const L=Y;Y=null;const it=ne;ne=null,L==="coffee"?(b.drinkCoffee(),r.show("☕ Coffee Break!",`You grab a flat white. The barista nods — they know the order.

Bladder's loading... don't take too long.

Back on the road.`,()=>{d.setTarget(it),W=!1},Yi(Ia))):(b.level=0,b.isUrgent=!1,b.caffeinated=!1,r.show("🚽 Phew — Crisis Averted!",`Barely made it. Not a word to the crew.

Back on the road.`,()=>{d.setTarget(it),W=!1},Yi(Ia)))}}if(l.activeJob&&l.activePhase===1&&!Y&&!W&&l.checkPhase1Arrival(se,pe)&&(W=!0,s.level=0,y.playLaugh(),r.show("🎨 Mix The Plaster!",`Jose and Connie are at the depot. The colour formula is up on the board.

Mix it right and load the van — then we go get the crew.`,()=>{_.show(de=>{y.playLaugh();const Me=l.crewToPickup.join(" + ");r.show("📦 Materials Loaded!",`Perfect mix. Buckets in the van.

Now go pick up the crew:
👷 ${Me}

Your waypoint will guide you.`,()=>{l.advanceToPhase2();const Xe=l.nextCrewNeeded();if(Xe){const L=t.getCrewPosition(Xe);d.setTarget(L)}a.showPhase1Complete(),a.setActiveJob(l.activeJob,2),a.updateCrewStatus(l.crewToPickup,l.crewPickedUp,!0),W=!1},Yi(yo))})},Yi(yo))),l.activeJob&&l.activePhase===2&&!Y&&!W)for(const de of l.crewToPickup){if(l.crewPickedUp.includes(de))continue;const Me=t.getCrewPosition(de);if(l.distanceToPoint(se,pe,Me.x,Me.z)<10){W=!0,t.hideCrew(de);const L=l.pickupCrew(de);a.updateCrewStatus(l.crewToPickup,l.crewPickedUp,!0);const it=wv[de]??`${de} hops in.`;if(L)r.show(`🚐 ${de} aboard — Full crew!`,`${it}

Full crew loaded. Everyone's in (sort of).

Head to the job site now. Your waypoint is set.`,()=>{l.advanceToPhase3(),d.setTarget(l.activeJob.position),a.showCrewPickup(de,null),a.setActiveJob(l.activeJob,3),W=!1},Yi(yo));else{const ye=l.nextCrewNeeded(),le=l.crewToPickup.filter(Te=>!l.crewPickedUp.includes(Te)).join(", ");r.show(`🧑‍🔧 ${de} aboard!`,`${it}

Still need to collect:
👷 ${le}`,()=>{if(ye){const Te=t.getCrewPosition(ye);d.setTarget(Te),a.showCrewPickup(de,ye)}a.updateCrewStatus(l.crewToPickup,l.crewPickedUp,!0),W=!1},Yi(Ia))}break}}if(l.activeJob&&l.activePhase===3&&!Y&&!W&&!A.isActive()){const de=l.checkArrival(se,pe);de!==null&&(W=!0,d.setTarget(null),r.show(`🏗️ ${de.title}`,`${de.client} is waiting.

${de.description}

Time to get to work. Show them what TEM does.`,()=>{a.setActiveJob(null,3),a.updateCrewStatus([],[],!1),P.setVisible(!1),K=Date.now();const Me=(Xe,L=!1)=>{U.show(de.title,()=>{if(P.setVisible(!0),L){const ye=(Date.now()-K)/1e3;sv({player_name:Jd()??"TEM Crew",job_title:j.replace(/^⚔️\s*/,"").trim(),crew_ids:bo(),completion_time_s:Math.round(ye),payout:Math.max(0,de.pay)})}const it=l.completeJob(de,Xe);it<0?a.showPenalty(de.title,Math.abs(it)):a.showJobComplete(de.title,it),a.updateMoney(l.money),t.showAllCrew(),Y=null,ne=null,Re=-1,Ue=-1,W=!1,Yd()&&!Ns.isUnlocked()?setTimeout(()=>T.trigger(),2e3):setTimeout(()=>{const ye=l.getAvailableJobs();ye.length>0&&v.show(ye)},3500)})};A.startScaffold(Xe=>{if(de.isContested){const L=document.createElement("div");L.style.cssText=`
                  position:fixed;inset:0;z-index:13999;
                  background:rgba(0,0,0,0.94);
                  display:flex;flex-direction:column;align-items:center;justify-content:center;
                  font-family:system-ui,sans-serif;animation:none;
                `,L.innerHTML=`
                  <div style="font-size:46px;margin-bottom:12px;">⚔️</div>
                  <div style="color:#FFD700;font-size:24px;font-weight:900;letter-spacing:2px;">CONTRACT WARS</div>
                  <div style="color:#fff;font-size:15px;margin-top:8px;opacity:0.8;">PHASE 2 — TOWER DEFENCE</div>
                  <div style="color:#aaa;font-size:12px;margin-top:6px;">vs ${g.name}</div>
                  <div style="color:#FFD700;font-size:13px;margin-top:18px;opacity:0.6;">loading...</div>
                `,document.body.appendChild(L);const it={jobTitle:de.title,payout:de.pay,crewIds:bo(),rival:{name:g.name,color:g.color,difficulty:g.difficulty}};setTimeout(()=>{L.remove(),f.show(it,ye=>{ye.won?Me(1,!0):(P.setVisible(!0),a.showToast("⚔️ CONTRACT STOLEN — Better crew next time 😤",16724787),t.showAllCrew(),Y=null,ne=null,Re=-1,Ue=-1,W=!1,l.completeJob(de,0),a.updateMoney(l.money),setTimeout(()=>{const le=l.getAvailableJobs();le.length>0&&v.show(le)},3500))})},1800)}else Me(1,!1)})},Yi(yo)))}e.camera.follow(n.mesh.position,n.velocity,n.heading),a.update(c.speed,s.level)}),setTimeout(()=>{const te=l.getAvailableJobs();v.show(te)},1e3),e.start()}Mv().catch(o=>{console.error("Game init failed:",o),document.body.style.background="#000";const e=document.createElement("div");e.style.cssText=`
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    color:#fff;font-family:sans-serif;font-size:18px;text-align:center;
    background:rgba(200,40,40,0.9);padding:24px 32px;border-radius:16px;
    max-width:90vw;z-index:9999;
  `,e.innerHTML=`<b>🚨 Game failed to start</b><br><br>${(o==null?void 0:o.message)||String(o)}`,document.body.appendChild(e)});
//# sourceMappingURL=index-BExdb0ZR.js.map
