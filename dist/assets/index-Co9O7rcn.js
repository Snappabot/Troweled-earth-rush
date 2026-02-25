var td=Object.defineProperty;var id=(o,e,t)=>e in o?td(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var _=(o,e,t)=>id(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ir="170",nd=0,fl=1,sd=2,qc=1,$c=2,Ci=3,Ji=0,Bt=1,Ut=2,Li=0,Wn=1,Fa=2,pl=3,ml=4,od=5,un=100,ad=101,rd=102,ld=103,cd=104,hd=200,dd=201,ud=202,fd=203,ka=204,Na=205,pd=206,md=207,gd=208,vd=209,yd=210,_d=211,xd=212,bd=213,wd=214,Ua=0,Oa=1,za=2,Yn=3,Ga=4,Ha=5,Va=6,Wa=7,Lr=0,Md=1,Td=2,$i=0,Jc=1,Kc=2,Zc=3,Dr=4,Sd=5,Qc=6,eh=7,th=300,qn=301,$n=302,Xa=303,ja=304,Oo=306,Ya=1e3,gn=1001,qa=1002,di=1003,Ed=1004,js=1005,yi=1006,Yo=1007,vn=1008,ki=1009,ih=1010,nh=1011,Ds=1012,Br=1013,xn=1014,Pi=1015,Di=1016,Fr=1017,kr=1018,Jn=1020,sh=35902,oh=1021,ah=1022,hi=1023,rh=1024,lh=1025,Xn=1026,Kn=1027,ch=1028,Nr=1029,hh=1030,Ur=1031,Or=1033,wo=33776,Mo=33777,To=33778,So=33779,$a=35840,Ja=35841,Ka=35842,Za=35843,Qa=36196,er=37492,tr=37496,ir=37808,nr=37809,sr=37810,or=37811,ar=37812,rr=37813,lr=37814,cr=37815,hr=37816,dr=37817,ur=37818,fr=37819,pr=37820,mr=37821,Eo=36492,gr=36494,vr=36495,dh=36283,yr=36284,_r=36285,xr=36286,Cd=2200,Ad=2201,Rd=2202,Po=2300,br=2301,qo=2302,zn=2400,Gn=2401,Io=2402,zr=2500,Pd=2501,Id=3200,Ld=3201,uh=0,Dd=1,Yi="",Qt="srgb",ns="srgb-linear",zo="linear",ot="srgb",Mn=7680,gl=519,Bd=512,Fd=513,kd=514,fh=515,Nd=516,Ud=517,Od=518,zd=519,vl=35044,yl="300 es",Ii=2e3,Lo=2001;class bn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$o=Math.PI/180,wr=180/Math.PI;function ss(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[o&255]+It[o>>8&255]+It[o>>16&255]+It[o>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Xt(o,e,t){return Math.max(e,Math.min(t,o))}function Gd(o,e){return(o%e+e)%e}function Jo(o,e,t){return(1-t)*o+t*e}function us(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Ht(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,n,s,a,r,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,r,l,c)}set(e,t,i,n,s,a,r,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=r,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],r=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],v=n[0],m=n[3],p=n[6],w=n[1],M=n[4],y=n[7],R=n[2],C=n[5],A=n[8];return s[0]=a*v+r*w+l*R,s[3]=a*m+r*M+l*C,s[6]=a*p+r*y+l*A,s[1]=c*v+h*w+u*R,s[4]=c*m+h*M+u*C,s[7]=c*p+h*y+u*A,s[2]=d*v+f*w+g*R,s[5]=d*m+f*M+g*C,s[8]=d*p+f*y+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*r*c-i*s*h+i*r*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8],u=h*a-r*c,d=r*l-h*s,f=c*s-a*l,g=t*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=u*v,e[1]=(n*c-h*i)*v,e[2]=(r*i-n*a)*v,e[3]=d*v,e[4]=(h*t-n*l)*v,e[5]=(n*s-r*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,r){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*r)+a+e,-n*c,n*l,-n*(-c*a+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(Ko.makeScale(e,t)),this}rotate(e){return this.premultiply(Ko.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ko.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ko=new We;function ph(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Do(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Hd(){const o=Do("canvas");return o.style.display="block",o}const _l={};function Ts(o){o in _l||(_l[o]=!0,console.warn(o))}function Vd(o,e,t){return new Promise(function(i,n){function s(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:n();break;case o.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Wd(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Xd(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(o,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===ot&&(o.r=Bi(o.r),o.g=Bi(o.g),o.b=Bi(o.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(o.applyMatrix3(this.spaces[e].toXYZ),o.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===ot&&(o.r=jn(o.r),o.g=jn(o.g),o.b=jn(o.b))),o},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Yi?zo:this.spaces[o].transfer},getLuminanceCoefficients:function(o,e=this.workingColorSpace){return o.fromArray(this.spaces[e].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,e,t){return o.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}};function Bi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function jn(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const xl=[.64,.33,.3,.6,.15,.06],bl=[.2126,.7152,.0722],wl=[.3127,.329],Ml=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tl=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[ns]:{primaries:xl,whitePoint:wl,transfer:zo,toXYZ:Ml,fromXYZ:Tl,luminanceCoefficients:bl,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:xl,whitePoint:wl,transfer:ot,toXYZ:Ml,fromXYZ:Tl,luminanceCoefficients:bl,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}});let Tn;class jd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tn===void 0&&(Tn=Do("canvas")),Tn.width=e.width,Tn.height=e.height;const i=Tn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Tn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Do("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=Bi(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bi(t[i]/255)*255):t[i]=Bi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yd=0;class mh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,r=n.length;a<r;a++)n[a].isDataTexture?s.push(Zo(n[a].image)):s.push(Zo(n[a]))}else s=Zo(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function Zo(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?jd.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qd=0;class Ot extends bn{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,i=gn,n=gn,s=yi,a=vn,r=hi,l=ki,c=Ot.DEFAULT_ANISOTROPY,h=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=ss(),this.name="",this.source=new mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ya:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ya:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=th;Ot.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,n=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(c+1)/2,y=(f+1)/2,R=(p+1)/2,C=(h+d)/4,A=(u+v)/4,I=(g+m)/4;return M>y&&M>R?M<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(M),n=C/i,s=A/i):y>R?y<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),i=C/n,s=I/n):R<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(R),i=A/s,n=I/s),this.set(i,n,s,t),this}let w=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-v)/w,this.z=(d-h)/w,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $d extends bn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ot(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let r=0;r<a;r++)this.textures[r]=s.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new mh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends $d{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class gh extends Ot{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=di,this.minFilter=di,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jd extends Ot{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=di,this.minFilter=di,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ei{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,r){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(r===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-r;const p=l*d+c*f+h*g+u*v,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const R=Math.sqrt(M),C=Math.atan2(R,p*w);m=Math.sin(m*C)/R,r=Math.sin(r*C)/R}const y=r*w;if(l=l*m+d*y,c=c*m+f*y,h=h*m+g*y,u=u*m+v*y,m===1-r){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){const r=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=r*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-r*f,e[t+2]=c*g+h*f+r*d-l*u,e[t+3]=h*g-r*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,a=e._order,r=Math.cos,l=Math.sin,c=r(i/2),h=r(n/2),u=r(s/2),d=l(i/2),f=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],r=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+r+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-n)*f}else if(i>r&&i>u){const f=2*Math.sqrt(1+i-r-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(s+c)/f}else if(r>u){const f=2*Math.sqrt(1+r-i-u);this._w=(s-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-r);this._w=(a-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,r=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*r+n*c-s*l,this._y=n*h+a*l+s*r-i*c,this._z=s*h+a*c+i*l-n*r,this._w=a*h-i*r-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,a=this._w;let r=a*e._w+i*e._x+n*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-r*r;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,r),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,i=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,r=e.z,l=e.w,c=2*(a*n-r*i),h=2*(r*t-s*n),u=2*(s*i-a*t);return this.x=t+l*c+a*u-r*h,this.y=i+l*h+r*c-s*u,this.z=n+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,r=t.y,l=t.z;return this.x=n*l-s*r,this.y=s*a-i*l,this.z=i*r-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qo.copy(this).projectOnVector(e),this.sub(Qo)}reflect(e){return this.sub(Qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Xt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qo=new L,Sl=new ei;class Os{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,r=s.count;a<r;a++)e.isMesh===!0?e.getVertexPosition(a,ni):ni.fromBufferAttribute(s,a),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ys.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ys.copy(i.boundingBox)),Ys.applyMatrix4(e.matrixWorld),this.union(Ys)}const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),qs.subVectors(this.max,fs),Sn.subVectors(e.a,fs),En.subVectors(e.b,fs),Cn.subVectors(e.c,fs),zi.subVectors(En,Sn),Gi.subVectors(Cn,En),Qi.subVectors(Sn,Cn);let t=[0,-zi.z,zi.y,0,-Gi.z,Gi.y,0,-Qi.z,Qi.y,zi.z,0,-zi.x,Gi.z,0,-Gi.x,Qi.z,0,-Qi.x,-zi.y,zi.x,0,-Gi.y,Gi.x,0,-Qi.y,Qi.x,0];return!ea(t,Sn,En,Cn,qs)||(t=[1,0,0,0,1,0,0,0,1],!ea(t,Sn,En,Cn,qs))?!1:($s.crossVectors(zi,Gi),t=[$s.x,$s.y,$s.z],ea(t,Sn,En,Cn,qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new L,new L,new L,new L,new L,new L,new L,new L],ni=new L,Ys=new Os,Sn=new L,En=new L,Cn=new L,zi=new L,Gi=new L,Qi=new L,fs=new L,qs=new L,$s=new L,en=new L;function ea(o,e,t,i,n){for(let s=0,a=o.length-3;s<=a;s+=3){en.fromArray(o,s);const r=n.x*Math.abs(en.x)+n.y*Math.abs(en.y)+n.z*Math.abs(en.z),l=e.dot(en),c=t.dot(en),h=i.dot(en);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>r)return!1}return!0}const Kd=new Os,ps=new L,ta=new L;class Go{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kd.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const t=ps.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ps,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ta.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(ta)),this.expandByPoint(ps.copy(e.center).sub(ta))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new L,ia=new L,Js=new L,Hi=new L,na=new L,Ks=new L,sa=new L;class vh{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,t),Mi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){ia.copy(e).add(t).multiplyScalar(.5),Js.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(ia);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Js),r=Hi.dot(this.direction),l=-Hi.dot(Js),c=Hi.lengthSq(),h=Math.abs(1-a*a);let u,d,f,g;if(h>0)if(u=a*l-r,d=a*r-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+a*d+2*r)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+r)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(a*s+r)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+r)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(ia).addScaledVector(Js,d),f}intersectSphere(e,t){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),n=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),r=i-a,l=i+a;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,r,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(r=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(r=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||r>n)||((r>i||i!==i)&&(i=r),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,t,i,n,s){na.subVectors(t,e),Ks.subVectors(i,e),sa.crossVectors(na,Ks);let a=this.direction.dot(sa),r;if(a>0){if(n)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Hi.subVectors(this.origin,e);const l=r*this.direction.dot(Ks.crossVectors(Hi,Ks));if(l<0)return null;const c=r*this.direction.dot(na.cross(Hi));if(c<0||l+c>a)return null;const h=-r*Hi.dot(sa);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class gt{constructor(e,t,i,n,s,a,r,l,c,h,u,d,f,g,v,m){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,r,l,c,h,u,d,f,g,v,m)}set(e,t,i,n,s,a,r,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=s,p[5]=a,p[9]=r,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/An.setFromMatrixColumn(e,0).length(),s=1/An.setFromMatrixColumn(e,1).length(),a=1/An.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),r=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,f=a*u,g=r*h,v=r*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-r*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d+v*r,t[4]=g*r-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-r,t[2]=f*r-g,t[6]=v+d*r,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;t[0]=d-v*r,t[4]=-a*u,t[8]=g+f*r,t[1]=f+g*r,t[5]=a*h,t[9]=v-d*r,t[2]=-a*c,t[6]=r,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,f=a*u,g=r*h,v=r*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*u,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=r*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=r*l,v=r*c;t[0]=l*h,t[4]=v-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-r*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-v*u}else if(e.order==="XZY"){const d=a*l,f=a*c,g=r*l,v=r*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+v,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=r*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zd,e,Qd)}lookAt(e,t,i){const n=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),Vi.crossVectors(i,Yt),Vi.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),Vi.crossVectors(i,Yt)),Vi.normalize(),Zs.crossVectors(Yt,Vi),n[0]=Vi.x,n[4]=Zs.x,n[8]=Yt.x,n[1]=Vi.y,n[5]=Zs.y,n[9]=Yt.y,n[2]=Vi.z,n[6]=Zs.z,n[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],r=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],w=i[3],M=i[7],y=i[11],R=i[15],C=n[0],A=n[4],I=n[8],T=n[12],b=n[1],P=n[5],z=n[9],O=n[13],G=n[2],K=n[6],q=n[10],te=n[14],W=n[3],re=n[7],de=n[11],ve=n[15];return s[0]=a*C+r*b+l*G+c*W,s[4]=a*A+r*P+l*K+c*re,s[8]=a*I+r*z+l*q+c*de,s[12]=a*T+r*O+l*te+c*ve,s[1]=h*C+u*b+d*G+f*W,s[5]=h*A+u*P+d*K+f*re,s[9]=h*I+u*z+d*q+f*de,s[13]=h*T+u*O+d*te+f*ve,s[2]=g*C+v*b+m*G+p*W,s[6]=g*A+v*P+m*K+p*re,s[10]=g*I+v*z+m*q+p*de,s[14]=g*T+v*O+m*te+p*ve,s[3]=w*C+M*b+y*G+R*W,s[7]=w*A+M*P+y*K+R*re,s[11]=w*I+M*z+y*q+R*de,s[15]=w*T+M*O+y*te+R*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],r=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*u-n*c*u-s*r*d+i*c*d+n*r*f-i*l*f)+v*(+t*l*f-t*c*d+s*a*d-n*a*f+n*c*h-s*l*h)+m*(+t*c*u-t*r*f-s*a*u+i*a*f+s*r*h-i*c*h)+p*(-n*r*h-t*l*u+t*r*d+n*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],r=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],w=u*m*c-v*d*c+v*l*f-r*m*f-u*l*p+r*d*p,M=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,y=h*v*c-g*u*c+g*r*f-a*v*f-h*r*p+a*u*p,R=g*u*l-h*v*l-g*r*d+a*v*d+h*r*m-a*u*m,C=t*w+i*M+n*y+s*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=w*A,e[1]=(v*d*s-u*m*s-v*n*f+i*m*f+u*n*p-i*d*p)*A,e[2]=(r*m*s-v*l*s+v*n*c-i*m*c-r*n*p+i*l*p)*A,e[3]=(u*l*s-r*d*s-u*n*c+i*d*c+r*n*f-i*l*f)*A,e[4]=M*A,e[5]=(h*m*s-g*d*s+g*n*f-t*m*f-h*n*p+t*d*p)*A,e[6]=(g*l*s-a*m*s-g*n*c+t*m*c+a*n*p-t*l*p)*A,e[7]=(a*d*s-h*l*s+h*n*c-t*d*c-a*n*f+t*l*f)*A,e[8]=y*A,e[9]=(g*u*s-h*v*s-g*i*f+t*v*f+h*i*p-t*u*p)*A,e[10]=(a*v*s-g*r*s+g*i*c-t*v*c-a*i*p+t*r*p)*A,e[11]=(h*r*s-a*u*s-h*i*c+t*u*c+a*i*f-t*r*f)*A,e[12]=R*A,e[13]=(h*v*n-g*u*n+g*i*d-t*v*d-h*i*m+t*u*m)*A,e[14]=(g*r*n-a*v*n-g*i*l+t*v*l+a*i*m-t*r*m)*A,e[15]=(a*u*n-h*r*n+h*i*l-t*u*l-a*i*d+t*r*d)*A,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,r=e.y,l=e.z,c=s*a,h=s*r;return this.set(c*a+i,c*r-n*l,c*l+n*r,0,c*r+n*l,h*r+i,h*l-n*a,0,c*l-n*r,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,r=t._z,l=t._w,c=s+s,h=a+a,u=r+r,d=s*c,f=s*h,g=s*u,v=a*h,m=a*u,p=r*u,w=l*c,M=l*h,y=l*u,R=i.x,C=i.y,A=i.z;return n[0]=(1-(v+p))*R,n[1]=(f+y)*R,n[2]=(g-M)*R,n[3]=0,n[4]=(f-y)*C,n[5]=(1-(d+p))*C,n[6]=(m+w)*C,n[7]=0,n[8]=(g+M)*A,n[9]=(m-w)*A,n[10]=(1-(d+v))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=An.set(n[0],n[1],n[2]).length();const a=An.set(n[4],n[5],n[6]).length(),r=An.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],si.copy(this);const c=1/s,h=1/a,u=1/r;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=h,si.elements[5]*=h,si.elements[6]*=h,si.elements[8]*=u,si.elements[9]*=u,si.elements[10]*=u,t.setFromRotationMatrix(si),i.x=s,i.y=a,i.z=r,this}makePerspective(e,t,i,n,s,a,r=Ii){const l=this.elements,c=2*s/(t-e),h=2*s/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n);let f,g;if(r===Ii)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(r===Lo)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,r=Ii){const l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(a-s),d=(t+e)*c,f=(i+n)*h;let g,v;if(r===Ii)g=(a+s)*u,v=-2*u;else if(r===Lo)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const An=new L,si=new gt,Zd=new L(0,0,0),Qd=new L(1,1,1),Vi=new L,Zs=new L,Yt=new L,El=new gt,Cl=new ei;class Jt{constructor(e=0,t=0,i=0,n=Jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],r=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Xt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(r,f));break;case"XZY":this._z=Math.asin(-Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return El.makeRotationFromQuaternion(e),this.setFromRotationMatrix(El,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jt.DEFAULT_ORDER="XYZ";class yh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let eu=0;const Al=new L,Rn=new ei,Ti=new gt,Qs=new L,ms=new L,tu=new L,iu=new ei,Rl=new L(1,0,0),Pl=new L(0,1,0),Il=new L(0,0,1),Ll={type:"added"},nu={type:"removed"},Pn={type:"childadded",child:null},oa={type:"childremoved",child:null};class Mt extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new L,t=new Jt,i=new ei,n=new L(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new gt},normalMatrix:{value:new We}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Rn.setFromAxisAngle(e,t),this.quaternion.multiply(Rn),this}rotateOnWorldAxis(e,t){return Rn.setFromAxisAngle(e,t),this.quaternion.premultiply(Rn),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(Pl,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Al.copy(e).applyQuaternion(this.quaternion),this.position.add(Al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(Pl,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ti.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Qs.copy(e):Qs.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),ms.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ti.lookAt(ms,Qs,this.up):Ti.lookAt(Qs,ms,this.up),this.quaternion.setFromRotationMatrix(Ti),n&&(Ti.extractRotation(n.matrixWorld),Rn.setFromRotationMatrix(Ti),this.quaternion.premultiply(Rn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ll),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nu),oa.child=e,this.dispatchEvent(oa),oa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ll),Pn.child=e,this.dispatchEvent(Pn),Pn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,e,tu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ms,iu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(s(e.materials,this.material[l]));n.material=r}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let r=0;r<this.children.length;r++)n.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];n.animations.push(s(e.animations,l))}}if(t){const r=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);r.length>0&&(i.geometries=r),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(r){const l=[];for(const c in r){const h=r[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Mt.DEFAULT_UP=new L(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new L,Si=new L,aa=new L,Ei=new L,In=new L,Ln=new L,Dl=new L,ra=new L,la=new L,ca=new L,ha=new rt,da=new rt,ua=new rt;class ci{constructor(e=new L,t=new L,i=new L){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),oi.subVectors(e,t),n.cross(oi);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){oi.subVectors(n,t),Si.subVectors(i,t),aa.subVectors(e,t);const a=oi.dot(oi),r=oi.dot(Si),l=oi.dot(aa),c=Si.dot(Si),h=Si.dot(aa),u=a*c-r*r;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-r*h)*d,g=(a*h-r*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,i,n,s,a,r,l){return this.getBarycoord(e,t,i,n,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(r,Ei.z),l)}static getInterpolatedAttribute(e,t,i,n,s,a){return ha.setScalar(0),da.setScalar(0),ua.setScalar(0),ha.fromBufferAttribute(e,t),da.fromBufferAttribute(e,i),ua.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(ha,s.x),a.addScaledVector(da,s.y),a.addScaledVector(ua,s.z),a}static isFrontFacing(e,t,i,n){return oi.subVectors(i,t),Si.subVectors(e,t),oi.cross(Si).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),oi.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,r;In.subVectors(n,i),Ln.subVectors(s,i),ra.subVectors(e,i);const l=In.dot(ra),c=Ln.dot(ra);if(l<=0&&c<=0)return t.copy(i);la.subVectors(e,n);const h=In.dot(la),u=Ln.dot(la);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(In,a);ca.subVectors(e,s);const f=In.dot(ca),g=Ln.dot(ca);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(i).addScaledVector(Ln,r);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Dl.subVectors(s,n),r=(u-h)/(u-h+(f-g)),t.copy(n).addScaledVector(Dl,r);const p=1/(m+v+d);return a=v*p,r=d*p,t.copy(i).addScaledVector(In,a).addScaledVector(Ln,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},eo={h:0,s:0,l:0};function fa(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}class we{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Je.workingColorSpace){return this.r=e,this.g=t,this.b=i,Je.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Je.workingColorSpace){if(e=Gd(e,1),t=Xt(t,0,1),i=Xt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=fa(a,s,e+1/3),this.g=fa(a,s,e),this.b=fa(a,s,e-1/3)}return Je.toWorkingColorSpace(this,n),this}setStyle(e,t=Qt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],r=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const i=_h[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=jn(e.r),this.g=jn(e.g),this.b=jn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return Je.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Xt(Lt.r*255,0,255))*65536+Math.round(Xt(Lt.g*255,0,255))*256+Math.round(Xt(Lt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Lt.copy(this),t);const i=Lt.r,n=Lt.g,s=Lt.b,a=Math.max(i,n,s),r=Math.min(i,n,s);let l,c;const h=(r+a)/2;if(r===a)l=0,c=0;else{const u=a-r;switch(c=h<=.5?u/(a+r):u/(2-a-r),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Qt){Je.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,i=Lt.g,n=Lt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(eo);const i=Jo(Wi.h,eo.h,t),n=Jo(Wi.s,eo.s,t),s=Jo(Wi.l,eo.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new we;we.NAMES=_h;let su=0;class os extends bn{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:su++}),this.uuid=ss(),this.name="",this.blending=Wn,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Na,this.blendEquation=un,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=Yn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mn,this.stencilZFail=Mn,this.stencilZPass=Mn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wn&&(i.blending=this.blending),this.side!==Ji&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ka&&(i.blendSrc=this.blendSrc),this.blendDst!==Na&&(i.blendDst=this.blendDst),this.blendEquation!==un&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const r in s){const l=s[r];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class zt extends os{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=Lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new L,to=new Ne;class fi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=vl,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)to.fromBufferAttribute(this,t),to.applyMatrix3(e),this.setXY(t,to.x,to.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=us(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=us(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=us(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=us(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=us(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vl&&(e.usage=this.usage),e}}class xh extends fi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class bh extends fi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class lt extends fi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ou=0;const Zt=new gt,pa=new Mt,Dn=new L,qt=new Os,gs=new Os,Ct=new L;class Ft extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ou++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ph(e)?bh:xh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,i){return Zt.makeTranslation(e,t,i),this.applyMatrix4(Zt),this}scale(e,t,i){return Zt.makeScale(e,t,i),this.applyMatrix4(Zt),this}lookAt(e){return pa.lookAt(e),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dn).negate(),this.translate(Dn.x,Dn.y,Dn.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,s=e.length;n<s;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new lt(i,3))}else{for(let i=0,n=t.count;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Os);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];qt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Go);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const i=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const r=t[s];gs.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(qt.min,gs.min),qt.expandByPoint(Ct),Ct.addVectors(qt.max,gs.max),qt.expandByPoint(Ct)):(qt.expandByPoint(gs.min),qt.expandByPoint(gs.max))}qt.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){const r=t[s],l=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)Ct.fromBufferAttribute(r,c),l&&(Dn.fromBufferAttribute(e,c),Ct.add(Dn)),n=Math.max(n,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let I=0;I<i.count;I++)r[I]=new L,l[I]=new L;const c=new L,h=new L,u=new L,d=new Ne,f=new Ne,g=new Ne,v=new L,m=new L;function p(I,T,b){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,b),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,T),g.fromBufferAttribute(s,b),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(P),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),r[I].add(v),r[T].add(v),r[b].add(v),l[I].add(m),l[T].add(m),l[b].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,T=w.length;I<T;++I){const b=w[I],P=b.start,z=b.count;for(let O=P,G=P+z;O<G;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const M=new L,y=new L,R=new L,C=new L;function A(I){R.fromBufferAttribute(n,I),C.copy(R);const T=r[I];M.copy(T),M.sub(R.multiplyScalar(R.dot(T))).normalize(),y.crossVectors(C,T);const P=y.dot(l[I])<0?-1:1;a.setXYZW(I,M.x,M.y,M.z,P)}for(let I=0,T=w.length;I<T;++I){const b=w[I],P=b.start,z=b.count;for(let O=P,G=P+z;O<G;O+=3)A(e.getX(O+0)),A(e.getX(O+1)),A(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new L,s=new L,a=new L,r=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),r.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),r.add(h),l.add(h),c.add(h),i.setXYZ(g,r.x,r.y,r.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(r,l){const c=r.array,h=r.itemSize,u=r.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){r.isInterleavedBufferAttribute?f=l[v]*r.data.stride+r.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new fi(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,i=this.index.array,n=this.attributes;for(const r in n){const l=n[r],c=e(l,i);t.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const l=[],c=s[r];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bl=new gt,tn=new vh,io=new Go,Fl=new L,no=new L,so=new L,oo=new L,ma=new L,ao=new L,kl=new L,ro=new L;class B extends Mt{constructor(e=new Ft,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const r=this.morphTargetInfluences;if(s&&r){ao.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=r[l],u=s[l];h!==0&&(ma.fromBufferAttribute(u,e),a?ao.addScaledVector(ma,h):ao.addScaledVector(ma.sub(t),h))}t.add(ao)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(s),tn.copy(e.ray).recast(e.near),!(io.containsPoint(tn.origin)===!1&&(tn.intersectSphere(io,Fl)===null||tn.origin.distanceToSquared(Fl)>(e.far-e.near)**2))&&(Bl.copy(s).invert(),tn.copy(e.ray).applyMatrix4(Bl),!(i.boundingBox!==null&&tn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,tn)))}_computeIntersections(e,t,i){let n;const s=this.geometry,a=this.material,r=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(r.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,R=M;y<R;y+=3){const C=r.getX(y),A=r.getX(y+1),I=r.getX(y+2);n=lo(this,p,e,i,c,h,u,C,A,I),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(r.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=r.getX(m),M=r.getX(m+1),y=r.getX(m+2);n=lo(this,a,e,i,c,h,u,w,M,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=w,R=M;y<R;y+=3){const C=y,A=y+1,I=y+2;n=lo(this,p,e,i,c,h,u,C,A,I),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const w=m,M=m+1,y=m+2;n=lo(this,a,e,i,c,h,u,w,M,y),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function au(o,e,t,i,n,s,a,r){let l;if(e.side===Bt?l=i.intersectTriangle(a,s,n,!0,r):l=i.intersectTriangle(n,s,a,e.side===Ji,r),l===null)return null;ro.copy(r),ro.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(ro);return c<t.near||c>t.far?null:{distance:c,point:ro.clone(),object:o}}function lo(o,e,t,i,n,s,a,r,l,c){o.getVertexPosition(r,no),o.getVertexPosition(l,so),o.getVertexPosition(c,oo);const h=au(o,e,t,i,no,so,oo,kl);if(h){const u=new L;ci.getBarycoord(kl,no,so,oo,u),n&&(h.uv=ci.getInterpolatedAttribute(n,r,l,c,u,new Ne)),s&&(h.uv1=ci.getInterpolatedAttribute(s,r,l,c,u,new Ne)),a&&(h.normal=ci.getInterpolatedAttribute(a,r,l,c,u,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:l,c,normal:new L,materialIndex:0};ci.getNormal(no,so,oo,d.normal),h.face=d,h.barycoord=u}return h}class Q extends Ft{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const r=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(v,m,p,w,M,y,R,C,A,I,T){const b=y/A,P=R/I,z=y/2,O=R/2,G=C/2,K=A+1,q=I+1;let te=0,W=0;const re=new L;for(let de=0;de<q;de++){const ve=de*P-O;for(let Be=0;Be<K;Be++){const Ue=Be*b-z;re[v]=Ue*w,re[m]=ve*M,re[p]=G,c.push(re.x,re.y,re.z),re[v]=0,re[m]=0,re[p]=C>0?1:-1,h.push(re.x,re.y,re.z),u.push(Be/A),u.push(1-de/I),te+=1}}for(let de=0;de<I;de++)for(let ve=0;ve<A;ve++){const Be=d+ve+K*de,Ue=d+ve+K*(de+1),Y=d+(ve+1)+K*(de+1),X=d+(ve+1)+K*de;l.push(Be,Ue,X),l.push(Ue,Y,X),W+=6}r.addGroup(f,W,T),f+=W,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Q(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zn(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const n=o[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function kt(o){const e={};for(let t=0;t<o.length;t++){const i=Zn(o[t]);for(const n in i)e[n]=i[n]}return e}function ru(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function wh(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Bs={clone:Zn,merge:kt};var lu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dt extends os{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lu,this.fragmentShader=cu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zn(e.uniforms),this.uniformsGroups=ru(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Mh extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new L,Nl=new Ne,Ul=new Ne;class Nt extends Mh{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wr*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Nl,Ul),t.subVectors(Ul,Nl)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($o*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bn=-90,Fn=1;class hu extends Mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Nt(Bn,Fn,e,t);n.layers=this.layers,this.add(n);const s=new Nt(Bn,Fn,e,t);s.layers=this.layers,this.add(s);const a=new Nt(Bn,Fn,e,t);a.layers=this.layers,this.add(a);const r=new Nt(Bn,Fn,e,t);r.layers=this.layers,this.add(r);const l=new Nt(Bn,Fn,e,t);l.layers=this.layers,this.add(l);const c=new Nt(Bn,Fn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,r,l]=t;for(const c of t)this.remove(c);if(e===Ii)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Lo)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,r,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,r),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Th extends Ot{constructor(e,t,i,n,s,a,r,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:qn,super(e,t,i,n,s,a,r,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class du extends ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Th(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new Q(5,5,5),s=new Dt({name:"CubemapFromEquirect",uniforms:Zn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Bt,blending:Li});s.uniforms.tEquirect.value=t;const a=new B(n,s),r=t.minFilter;return t.minFilter===vn&&(t.minFilter=yi),new hu(1,10,this).update(e,a),t.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}const ga=new L,uu=new L,fu=new We;class hn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=ga.subVectors(i,t).cross(uu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ga),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||fu.getNormalMatrix(e),n=this.coplanarPoint(ga).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const nn=new Go,co=new L;class Gr{constructor(e=new hn,t=new hn,i=new hn,n=new hn,s=new hn,a=new hn){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(i),r[3].copy(n),r[4].copy(s),r[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ii){const i=this.planes,n=e.elements,s=n[0],a=n[1],r=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],f=n[8],g=n[9],v=n[10],m=n[11],p=n[12],w=n[13],M=n[14],y=n[15];if(i[0].setComponents(l-s,d-c,m-f,y-p).normalize(),i[1].setComponents(l+s,d+c,m+f,y+p).normalize(),i[2].setComponents(l+a,d+h,m+g,y+w).normalize(),i[3].setComponents(l-a,d-h,m-g,y-w).normalize(),i[4].setComponents(l-r,d-u,m-v,y-M).normalize(),t===Ii)i[5].setComponents(l+r,d+u,m+v,y+M).normalize();else if(t===Lo)i[5].setComponents(r,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(nn)}intersectsSprite(e){return nn.center.set(0,0,0),nn.radius=.7071067811865476,nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(nn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(co.x=n.normal.x>0?e.max.x:e.min.x,co.y=n.normal.y>0?e.max.y:e.min.y,co.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(co)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sh(){let o=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=o.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(n),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function pu(o){const e=new WeakMap;function t(r,l){const c=r.array,h=r.usage,u=c.byteLength,d=o.createBuffer();o.bindBuffer(l,d),o.bufferData(l,c,h),r.onUploadCallback();let f;if(c instanceof Float32Array)f=o.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?f=o.HALF_FLOAT:f=o.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=o.SHORT;else if(c instanceof Uint32Array)f=o.UNSIGNED_INT;else if(c instanceof Int32Array)f=o.INT;else if(c instanceof Int8Array)f=o.BYTE;else if(c instanceof Uint8Array)f=o.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function i(r,l,c){const h=l.array,u=l.updateRanges;if(o.bindBuffer(c,r),u.length===0)o.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];o.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function s(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(o.deleteBuffer(l.buffer),e.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const h=e.get(r);(!h||h.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,r,l),c.version=r.version}}return{get:n,remove:s,update:a}}class mt extends Ft{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,r=Math.floor(i),l=Math.floor(n),c=r+1,h=l+1,u=e/r,d=t/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const w=p*d-a;for(let M=0;M<c;M++){const y=M*u-s;g.push(y,-w,0),v.push(0,0,1),m.push(M/r),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<r;w++){const M=w+c*p,y=w+c*(p+1),R=w+1+c*(p+1),C=w+1+c*p;f.push(M,y,C),f.push(y,R,C)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.width,e.height,e.widthSegments,e.heightSegments)}}var mu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gu=`#ifdef USE_ALPHAHASH
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
#endif`,vu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_u=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bu=`#ifdef USE_AOMAP
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
#endif`,wu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mu=`#ifdef USE_BATCHING
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
#endif`,Tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Au=`#ifdef USE_IRIDESCENCE
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
#endif`,Ru=`#ifdef USE_BUMPMAP
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
#endif`,Pu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Du=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ku=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Uu=`#define PI 3.141592653589793
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
} // validated`,Ou=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zu=`vec3 transformedNormal = objectNormal;
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
#endif`,Gu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xu="gl_FragColor = linearToOutputTexel( gl_FragColor );",ju=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yu=`#ifdef USE_ENVMAP
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
#endif`,qu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$u=`#ifdef USE_ENVMAP
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
#endif`,Ju=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ku=`#ifdef USE_ENVMAP
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
#endif`,Zu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nf=`#ifdef USE_GRADIENTMAP
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
}`,sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,of=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rf=`uniform bool receiveShadow;
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
#endif`,lf=`#ifdef USE_ENVMAP
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
#endif`,cf=`ToonMaterial material;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,df=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ff=`PhysicalMaterial material;
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
#endif`,pf=`struct PhysicalMaterial {
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
}`,mf=`
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
#endif`,gf=`#if defined( RE_IndirectDiffuse )
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
#endif`,vf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_f=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sf=`#if defined( USE_POINTS_UV )
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
#endif`,Ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Af=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,If=`#ifdef USE_MORPHTARGETS
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
#endif`,Lf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Df=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Uf=`#ifdef USE_NORMALMAP
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
#endif`,Of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ep=`float getShadowMask() {
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
}`,tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sp=`#ifdef USE_SKINNING
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
#endif`,op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const mp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gp=`uniform sampler2D t2D;
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
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`#include <common>
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
}`,wp=`#if DEPTH_PACKING == 3200
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
}`,Mp=`#define DISTANCE
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
}`,Tp=`#define DISTANCE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cp=`uniform float scale;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Rp=`#include <common>
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
}`,Pp=`uniform vec3 diffuse;
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
}`,Ip=`#define LAMBERT
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
}`,Lp=`#define LAMBERT
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
}`,Dp=`#define MATCAP
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
}`,Bp=`#define MATCAP
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
}`,Fp=`#define NORMAL
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
}`,kp=`#define NORMAL
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
}`,Np=`#define PHONG
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
}`,Up=`#define PHONG
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
}`,Op=`#define STANDARD
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
}`,zp=`#define STANDARD
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
}`,Gp=`#define TOON
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
}`,Hp=`#define TOON
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
}`,Vp=`uniform float size;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,Yp=`uniform float rotation;
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
}`,qp=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:mu,alphahash_pars_fragment:gu,alphamap_fragment:vu,alphamap_pars_fragment:yu,alphatest_fragment:_u,alphatest_pars_fragment:xu,aomap_fragment:bu,aomap_pars_fragment:wu,batching_pars_vertex:Mu,batching_vertex:Tu,begin_vertex:Su,beginnormal_vertex:Eu,bsdfs:Cu,iridescence_fragment:Au,bumpmap_pars_fragment:Ru,clipping_planes_fragment:Pu,clipping_planes_pars_fragment:Iu,clipping_planes_pars_vertex:Lu,clipping_planes_vertex:Du,color_fragment:Bu,color_pars_fragment:Fu,color_pars_vertex:ku,color_vertex:Nu,common:Uu,cube_uv_reflection_fragment:Ou,defaultnormal_vertex:zu,displacementmap_pars_vertex:Gu,displacementmap_vertex:Hu,emissivemap_fragment:Vu,emissivemap_pars_fragment:Wu,colorspace_fragment:Xu,colorspace_pars_fragment:ju,envmap_fragment:Yu,envmap_common_pars_fragment:qu,envmap_pars_fragment:$u,envmap_pars_vertex:Ju,envmap_physical_pars_fragment:lf,envmap_vertex:Ku,fog_vertex:Zu,fog_pars_vertex:Qu,fog_fragment:ef,fog_pars_fragment:tf,gradientmap_pars_fragment:nf,lightmap_pars_fragment:sf,lights_lambert_fragment:of,lights_lambert_pars_fragment:af,lights_pars_begin:rf,lights_toon_fragment:cf,lights_toon_pars_fragment:hf,lights_phong_fragment:df,lights_phong_pars_fragment:uf,lights_physical_fragment:ff,lights_physical_pars_fragment:pf,lights_fragment_begin:mf,lights_fragment_maps:gf,lights_fragment_end:vf,logdepthbuf_fragment:yf,logdepthbuf_pars_fragment:_f,logdepthbuf_pars_vertex:xf,logdepthbuf_vertex:bf,map_fragment:wf,map_pars_fragment:Mf,map_particle_fragment:Tf,map_particle_pars_fragment:Sf,metalnessmap_fragment:Ef,metalnessmap_pars_fragment:Cf,morphinstance_vertex:Af,morphcolor_vertex:Rf,morphnormal_vertex:Pf,morphtarget_pars_vertex:If,morphtarget_vertex:Lf,normal_fragment_begin:Df,normal_fragment_maps:Bf,normal_pars_fragment:Ff,normal_pars_vertex:kf,normal_vertex:Nf,normalmap_pars_fragment:Uf,clearcoat_normal_fragment_begin:Of,clearcoat_normal_fragment_maps:zf,clearcoat_pars_fragment:Gf,iridescence_pars_fragment:Hf,opaque_fragment:Vf,packing:Wf,premultiplied_alpha_fragment:Xf,project_vertex:jf,dithering_fragment:Yf,dithering_pars_fragment:qf,roughnessmap_fragment:$f,roughnessmap_pars_fragment:Jf,shadowmap_pars_fragment:Kf,shadowmap_pars_vertex:Zf,shadowmap_vertex:Qf,shadowmask_pars_fragment:ep,skinbase_vertex:tp,skinning_pars_vertex:ip,skinning_vertex:np,skinnormal_vertex:sp,specularmap_fragment:op,specularmap_pars_fragment:ap,tonemapping_fragment:rp,tonemapping_pars_fragment:lp,transmission_fragment:cp,transmission_pars_fragment:hp,uv_pars_fragment:dp,uv_pars_vertex:up,uv_vertex:fp,worldpos_vertex:pp,background_vert:mp,background_frag:gp,backgroundCube_vert:vp,backgroundCube_frag:yp,cube_vert:_p,cube_frag:xp,depth_vert:bp,depth_frag:wp,distanceRGBA_vert:Mp,distanceRGBA_frag:Tp,equirect_vert:Sp,equirect_frag:Ep,linedashed_vert:Cp,linedashed_frag:Ap,meshbasic_vert:Rp,meshbasic_frag:Pp,meshlambert_vert:Ip,meshlambert_frag:Lp,meshmatcap_vert:Dp,meshmatcap_frag:Bp,meshnormal_vert:Fp,meshnormal_frag:kp,meshphong_vert:Np,meshphong_frag:Up,meshphysical_vert:Op,meshphysical_frag:zp,meshtoon_vert:Gp,meshtoon_frag:Hp,points_vert:Vp,points_frag:Wp,shadow_vert:Xp,shadow_frag:jp,sprite_vert:Yp,sprite_frag:qp},ce={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},vi={basic:{uniforms:kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new we(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:kt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:kt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:kt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new we(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:kt([ce.points,ce.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:kt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:kt([ce.common,ce.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:kt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:kt([ce.sprite,ce.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:kt([ce.common,ce.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:kt([ce.lights,ce.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};vi.physical={uniforms:kt([vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const ho={r:0,b:0,g:0},sn=new Jt,$p=new gt;function Jp(o,e,t,i,n,s,a){const r=new we(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?t:e).get(M)),M}function v(w){let M=!1;const y=g(w);y===null?p(r,l):y&&y.isColor&&(p(y,1),M=!0);const R=o.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(o.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function m(w,M){const y=g(M);y&&(y.isCubeTexture||y.mapping===Oo)?(h===void 0&&(h=new B(new Q(1,1,1),new Dt({name:"BackgroundCubeMaterial",uniforms:Zn(vi.backgroundCube.uniforms),vertexShader:vi.backgroundCube.vertexShader,fragmentShader:vi.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),sn.copy(M.backgroundRotation),sn.x*=-1,sn.y*=-1,sn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(sn.y*=-1,sn.z*=-1),h.material.uniforms.envMap.value=y,h.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4($p.makeRotationFromEuler(sn)),h.material.toneMapped=Je.getTransfer(y.colorSpace)!==ot,(u!==y||d!==y.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=y,d=y.version,f=o.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new B(new mt(2,2),new Dt({name:"BackgroundMaterial",uniforms:Zn(vi.background.uniforms),vertexShader:vi.background.vertexShader,fragmentShader:vi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Je.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=o.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function p(w,M){w.getRGB(ho,wh(o)),i.buffers.color.setClear(ho.r,ho.g,ho.b,M,a)}return{getClearColor:function(){return r},setClearColor:function(w,M=1){r.set(w),l=M,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,p(r,l)},render:v,addToRenderList:m}}function Kp(o,e){const t=o.getParameter(o.MAX_VERTEX_ATTRIBS),i={},n=d(null);let s=n,a=!1;function r(b,P,z,O,G){let K=!1;const q=u(O,z,P);s!==q&&(s=q,c(s.object)),K=f(b,O,z,G),K&&g(b,O,z,G),G!==null&&e.update(G,o.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(b,P,z,O),G!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return o.createVertexArray()}function c(b){return o.bindVertexArray(b)}function h(b){return o.deleteVertexArray(b)}function u(b,P,z){const O=z.wireframe===!0;let G=i[b.id];G===void 0&&(G={},i[b.id]=G);let K=G[P.id];K===void 0&&(K={},G[P.id]=K);let q=K[O];return q===void 0&&(q=d(l()),K[O]=q),q}function d(b){const P=[],z=[],O=[];for(let G=0;G<t;G++)P[G]=0,z[G]=0,O[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:O,object:b,attributes:{},index:null}}function f(b,P,z,O){const G=s.attributes,K=P.attributes;let q=0;const te=z.getAttributes();for(const W in te)if(te[W].location>=0){const de=G[W];let ve=K[W];if(ve===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ve=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ve=b.instanceColor)),de===void 0||de.attribute!==ve||ve&&de.data!==ve.data)return!0;q++}return s.attributesNum!==q||s.index!==O}function g(b,P,z,O){const G={},K=P.attributes;let q=0;const te=z.getAttributes();for(const W in te)if(te[W].location>=0){let de=K[W];de===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(de=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(de=b.instanceColor));const ve={};ve.attribute=de,de&&de.data&&(ve.data=de.data),G[W]=ve,q++}s.attributes=G,s.attributesNum=q,s.index=O}function v(){const b=s.newAttributes;for(let P=0,z=b.length;P<z;P++)b[P]=0}function m(b){p(b,0)}function p(b,P){const z=s.newAttributes,O=s.enabledAttributes,G=s.attributeDivisors;z[b]=1,O[b]===0&&(o.enableVertexAttribArray(b),O[b]=1),G[b]!==P&&(o.vertexAttribDivisor(b,P),G[b]=P)}function w(){const b=s.newAttributes,P=s.enabledAttributes;for(let z=0,O=P.length;z<O;z++)P[z]!==b[z]&&(o.disableVertexAttribArray(z),P[z]=0)}function M(b,P,z,O,G,K,q){q===!0?o.vertexAttribIPointer(b,P,z,G,K):o.vertexAttribPointer(b,P,z,O,G,K)}function y(b,P,z,O){v();const G=O.attributes,K=z.getAttributes(),q=P.defaultAttributeValues;for(const te in K){const W=K[te];if(W.location>=0){let re=G[te];if(re===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){const de=re.normalized,ve=re.itemSize,Be=e.get(re);if(Be===void 0)continue;const Ue=Be.buffer,Y=Be.type,X=Be.bytesPerElement,le=Y===o.INT||Y===o.UNSIGNED_INT||re.gpuType===Br;if(re.isInterleavedBufferAttribute){const ne=re.data,Pe=ne.stride,Le=re.offset;if(ne.isInstancedInterleavedBuffer){for(let se=0;se<W.locationSize;se++)p(W.location+se,ne.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let se=0;se<W.locationSize;se++)m(W.location+se);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let se=0;se<W.locationSize;se++)M(W.location+se,ve/W.locationSize,Y,de,Pe*X,(Le+ve/W.locationSize*se)*X,le)}else{if(re.isInstancedBufferAttribute){for(let ne=0;ne<W.locationSize;ne++)p(W.location+ne,re.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ne=0;ne<W.locationSize;ne++)m(W.location+ne);o.bindBuffer(o.ARRAY_BUFFER,Ue);for(let ne=0;ne<W.locationSize;ne++)M(W.location+ne,ve/W.locationSize,Y,de,ve*X,ve/W.locationSize*ne*X,le)}}else if(q!==void 0){const de=q[te];if(de!==void 0)switch(de.length){case 2:o.vertexAttrib2fv(W.location,de);break;case 3:o.vertexAttrib3fv(W.location,de);break;case 4:o.vertexAttrib4fv(W.location,de);break;default:o.vertexAttrib1fv(W.location,de)}}}}w()}function R(){I();for(const b in i){const P=i[b];for(const z in P){const O=P[z];for(const G in O)h(O[G].object),delete O[G];delete P[z]}delete i[b]}}function C(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const z in P){const O=P[z];for(const G in O)h(O[G].object),delete O[G];delete P[z]}delete i[b.id]}function A(b){for(const P in i){const z=i[P];if(z[b.id]===void 0)continue;const O=z[b.id];for(const G in O)h(O[G].object),delete O[G];delete z[b.id]}}function I(){T(),a=!0,s!==n&&(s=n,c(s.object))}function T(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:r,reset:I,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Zp(o,e,t){let i;function n(c){i=c}function s(c,h){o.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(o.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function r(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];t.update(g,i,1)}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function Qp(o,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==hi&&i.convert(A)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(A){const I=A===Di&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ki&&i.convert(A)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Pi&&!I)}function l(A){if(A==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),g=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=o.getParameter(o.MAX_TEXTURE_SIZE),m=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),p=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),M=o.getParameter(o.MAX_VARYING_VECTORS),y=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,C=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:R,maxSamples:C}}function e0(o){const e=this;let t=null,i=0,n=!1,s=!1;const a=new hn,r=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=o.get(u);if(!n||g===null||g.length===0||s&&!m)s?h(null):c();else{const w=s?0:i,M=w*4;let y=p.clippingState||null;l.value=y,y=h(g,d,M,f);for(let R=0;R!==M;++R)y[R]=t[R];p.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,w=d.matrixWorldInverse;r.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,y=f;M!==v;++M,y+=4)a.copy(u[M]).applyMatrix4(w,r),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function t0(o){let e=new WeakMap;function t(a,r){return r===Xa?a.mapping=qn:r===ja&&(a.mapping=$n),a}function i(a){if(a&&a.isTexture){const r=a.mapping;if(r===Xa||r===ja)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new du(l.height);return c.fromEquirectangularTexture(o,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const r=a.target;r.removeEventListener("dispose",n);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Hr extends Mh{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,r=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,r-=h*this.view.offsetY,l=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Hn=4,Ol=[.125,.215,.35,.446,.526,.582],fn=20,va=new Hr,zl=new we;let ya=null,_a=0,xa=0,ba=!1;const dn=(1+Math.sqrt(5))/2,kn=1/dn,Gl=[new L(-dn,kn,0),new L(dn,kn,0),new L(-kn,0,dn),new L(kn,0,dn),new L(0,dn,-kn),new L(0,dn,kn),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Hl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){ya=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ya,_a,xa),this._renderer.xr.enabled=ba,e.scissorTest=!1,uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qn||e.mapping===$n?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ya=this._renderer.getRenderTarget(),_a=this._renderer.getActiveCubeFace(),xa=this._renderer.getActiveMipmapLevel(),ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:yi,minFilter:yi,generateMipmaps:!1,type:Di,format:hi,colorSpace:ns,depthBuffer:!1},n=Vl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i0(s)),this._blurMaterial=n0(s,e,t)}return n}_compileMaterial(e){const t=new B(this._lodPlanes[0],e);this._renderer.compile(t,va)}_sceneToCubeUV(e,t,i,n){const r=new Nt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(zl),h.toneMapping=$i,h.autoClear=!1;const f=new zt({name:"PMREM.Background",side:Bt,depthWrite:!1,depthTest:!1}),g=new B(new Q,f);let v=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,v=!0):(f.color.copy(zl),v=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(r.up.set(0,l[p],0),r.lookAt(c[p],0,0)):w===1?(r.up.set(0,0,l[p]),r.lookAt(0,c[p],0)):(r.up.set(0,l[p],0),r.lookAt(0,0,c[p]));const M=this._cubeSize;uo(n,w*M,p>2?M:0,M,M),h.setRenderTarget(n),v&&h.render(g,r),h.render(e,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===qn||e.mapping===$n;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Wl());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new B(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const l=this._cubeSize;uo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,va)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),r=Gl[(n-s-1)%Gl.length];this._blur(e,s-1,s,a,r)}t.autoClear=i}_blur(e,t,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new B(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*fn-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):fn;m>fn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fn}`);const p=[];let w=0;for(let A=0;A<fn;++A){const I=A/v,T=Math.exp(-I*I/2);p.push(T),A===0?w+=T:A<m&&(w+=2*T)}for(let A=0;A<p.length;A++)p[A]=p[A]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",r&&(d.poleAxis.value=r);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-i;const y=this._sizeLods[n],R=3*y*(n>M-Hn?n-M+Hn:0),C=4*(this._cubeSize-y);uo(t,R,C,3*y,2*y),l.setRenderTarget(t),l.render(u,va)}}function i0(o){const e=[],t=[],i=[];let n=o;const s=o-Hn+1+Ol.length;for(let a=0;a<s;a++){const r=Math.pow(2,n);t.push(r);let l=1/r;a>o-Hn?l=Ol[a-o+Hn-1]:a===0&&(l=0),i.push(l);const c=1/(r-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*f),M=new Float32Array(m*g*f),y=new Float32Array(p*g*f);for(let C=0;C<f;C++){const A=C%3*2/3-1,I=C>2?0:-1,T=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];w.set(T,v*g*C),M.set(d,m*g*C);const b=[C,C,C,C,C,C];y.set(b,p*g*C)}const R=new Ft;R.setAttribute("position",new fi(w,v)),R.setAttribute("uv",new fi(M,m)),R.setAttribute("faceIndex",new fi(y,p)),e.push(R),n>Hn&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Vl(o,e,t){const i=new ui(o,e,t);return i.texture.mapping=Oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function uo(o,e,t,i,n){o.viewport.set(e,t,i,n),o.scissor.set(e,t,i,n)}function n0(o,e,t){const i=new Float32Array(fn),n=new L(0,1,0);return new Dt({name:"SphericalGaussianBlur",defines:{n:fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Vr(),fragmentShader:`

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
	`}function s0(o){let e=new WeakMap,t=null;function i(r){if(r&&r.isTexture){const l=r.mapping,c=l===Xa||l===ja,h=l===qn||l===$n;if(c||h){let u=e.get(r);const d=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==d)return t===null&&(t=new Hl(o)),u=c?t.fromEquirectangular(r,u):t.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),u.texture;if(u!==void 0)return u.texture;{const f=r.image;return c&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new Hl(o)),u=c?t.fromEquirectangular(r):t.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),r.addEventListener("dispose",s),u.texture):null}}}return r}function n(r){let l=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&l++;return l===c}function s(r){const l=r.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function o0(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&Ts("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function a0(o,e,t,i){const n={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",a),delete n[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function r(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],o.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],o.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const w=f.array;v=f.version;for(let M=0,y=w.length;M<y;M+=3){const R=w[M+0],C=w[M+1],A=w[M+2];d.push(R,C,C,A,A,R)}}else if(g!==void 0){const w=g.array;v=g.version;for(let M=0,y=w.length/3-1;M<y;M+=3){const R=M+0,C=M+1,A=M+2;d.push(R,C,C,A,A,R)}}else return;const m=new(ph(d)?bh:xh)(d,1);m.version=v;const p=s.get(u);p&&e.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:r,update:l,getWireframeAttribute:h}}function r0(o,e,t){let i;function n(d){i=d}let s,a;function r(d){s=d.type,a=d.bytesPerElement}function l(d,f){o.drawElements(i,f,s,d*a),t.update(f,i,1)}function c(d,f,g){g!==0&&(o.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*v[w];t.update(p,i,1)}}this.setMode=n,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function l0(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,r){switch(t.calls++,a){case o.TRIANGLES:t.triangles+=r*(s/3);break;case o.LINES:t.lines+=r*(s/2);break;case o.LINE_STRIP:t.lines+=r*(s-1);break;case o.LINE_LOOP:t.lines+=r*s;break;case o.POINTS:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function c0(o,e,t){const i=new WeakMap,n=new rt;function s(a,r,l){const c=a.morphTargetInfluences,h=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(r);if(d===void 0||d.count!==u){let b=function(){I.dispose(),i.delete(r),r.removeEventListener("dispose",b)};var f=b;d!==void 0&&d.texture.dispose();const g=r.morphAttributes.position!==void 0,v=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],w=r.morphAttributes.normal||[],M=r.morphAttributes.color||[];let y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let R=r.attributes.position.count*y,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const A=new Float32Array(R*C*4*u),I=new gh(A,R,C,u);I.type=Pi,I.needsUpdate=!0;const T=y*4;for(let P=0;P<u;P++){const z=p[P],O=w[P],G=M[P],K=R*C*4*P;for(let q=0;q<z.count;q++){const te=q*T;g===!0&&(n.fromBufferAttribute(z,q),A[K+te+0]=n.x,A[K+te+1]=n.y,A[K+te+2]=n.z,A[K+te+3]=0),v===!0&&(n.fromBufferAttribute(O,q),A[K+te+4]=n.x,A[K+te+5]=n.y,A[K+te+6]=n.z,A[K+te+7]=0),m===!0&&(n.fromBufferAttribute(G,q),A[K+te+8]=n.x,A[K+te+9]=n.y,A[K+te+10]=n.z,A[K+te+11]=G.itemSize===4?n.w:1)}}d={count:u,texture:I,size:new Ne(R,C)},i.set(r,d),r.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(o,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(o,"morphTargetBaseInfluence",v),l.getUniforms().setValue(o,"morphTargetInfluences",c)}l.getUniforms().setValue(o,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(o,"morphTargetsTextureSize",d.size)}return{update:s}}function h0(o,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),n.get(l)!==c&&(t.update(l.instanceMatrix,o.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,o.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Eh extends Ot{constructor(e,t,i,n,s,a,r,l,c,h=Xn){if(h!==Xn&&h!==Kn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Xn&&(i=xn),i===void 0&&h===Kn&&(i=Jn),super(null,n,s,a,r,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:di,this.minFilter=l!==void 0?l:di,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ch=new Ot,jl=new Eh(1,1),Ah=new gh,Rh=new Jd,Ph=new Th,Yl=[],ql=[],$l=new Float32Array(16),Jl=new Float32Array(9),Kl=new Float32Array(4);function as(o,e,t){const i=o[0];if(i<=0||i>0)return o;const n=e*t;let s=Yl[n];if(s===void 0&&(s=new Float32Array(n),Yl[n]=s),e!==0){i.toArray(s,0);for(let a=1,r=0;a!==e;++a)r+=t,o[a].toArray(s,r)}return s}function Tt(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function St(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function Ho(o,e){let t=ql[e];t===void 0&&(t=new Int32Array(e),ql[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function d0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function u0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;o.uniform2fv(this.addr,e),St(t,e)}}function f0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;o.uniform3fv(this.addr,e),St(t,e)}}function p0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;o.uniform4fv(this.addr,e),St(t,e)}}function m0(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),St(t,e)}else{if(Tt(t,i))return;Kl.set(i),o.uniformMatrix2fv(this.addr,!1,Kl),St(t,i)}}function g0(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),St(t,e)}else{if(Tt(t,i))return;Jl.set(i),o.uniformMatrix3fv(this.addr,!1,Jl),St(t,i)}}function v0(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),St(t,e)}else{if(Tt(t,i))return;$l.set(i),o.uniformMatrix4fv(this.addr,!1,$l),St(t,i)}}function y0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function _0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;o.uniform2iv(this.addr,e),St(t,e)}}function x0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;o.uniform3iv(this.addr,e),St(t,e)}}function b0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;o.uniform4iv(this.addr,e),St(t,e)}}function w0(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function M0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;o.uniform2uiv(this.addr,e),St(t,e)}}function T0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;o.uniform3uiv(this.addr,e),St(t,e)}}function S0(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;o.uniform4uiv(this.addr,e),St(t,e)}}function E0(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n);let s;this.type===o.SAMPLER_2D_SHADOW?(jl.compareFunction=fh,s=jl):s=Ch,t.setTexture2D(e||s,n)}function C0(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Rh,n)}function A0(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Ph,n)}function R0(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Ah,n)}function P0(o){switch(o){case 5126:return d0;case 35664:return u0;case 35665:return f0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return v0;case 5124:case 35670:return y0;case 35667:case 35671:return _0;case 35668:case 35672:return x0;case 35669:case 35673:return b0;case 5125:return w0;case 36294:return M0;case 36295:return T0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return E0;case 35679:case 36299:case 36307:return C0;case 35680:case 36300:case 36308:case 36293:return A0;case 36289:case 36303:case 36311:case 36292:return R0}}function I0(o,e){o.uniform1fv(this.addr,e)}function L0(o,e){const t=as(e,this.size,2);o.uniform2fv(this.addr,t)}function D0(o,e){const t=as(e,this.size,3);o.uniform3fv(this.addr,t)}function B0(o,e){const t=as(e,this.size,4);o.uniform4fv(this.addr,t)}function F0(o,e){const t=as(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function k0(o,e){const t=as(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function N0(o,e){const t=as(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function U0(o,e){o.uniform1iv(this.addr,e)}function O0(o,e){o.uniform2iv(this.addr,e)}function z0(o,e){o.uniform3iv(this.addr,e)}function G0(o,e){o.uniform4iv(this.addr,e)}function H0(o,e){o.uniform1uiv(this.addr,e)}function V0(o,e){o.uniform2uiv(this.addr,e)}function W0(o,e){o.uniform3uiv(this.addr,e)}function X0(o,e){o.uniform4uiv(this.addr,e)}function j0(o,e,t){const i=this.cache,n=e.length,s=Ho(t,n);Tt(i,s)||(o.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Ch,s[a])}function Y0(o,e,t){const i=this.cache,n=e.length,s=Ho(t,n);Tt(i,s)||(o.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Rh,s[a])}function q0(o,e,t){const i=this.cache,n=e.length,s=Ho(t,n);Tt(i,s)||(o.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Ph,s[a])}function $0(o,e,t){const i=this.cache,n=e.length,s=Ho(t,n);Tt(i,s)||(o.uniform1iv(this.addr,s),St(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Ah,s[a])}function J0(o){switch(o){case 5126:return I0;case 35664:return L0;case 35665:return D0;case 35666:return B0;case 35674:return F0;case 35675:return k0;case 35676:return N0;case 5124:case 35670:return U0;case 35667:case 35671:return O0;case 35668:case 35672:return z0;case 35669:case 35673:return G0;case 5125:return H0;case 36294:return V0;case 36295:return W0;case 36296:return X0;case 35678:case 36198:case 36298:case 36306:case 35682:return j0;case 35679:case 36299:case 36307:return Y0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return $0}}class K0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=P0(t.type)}}class Z0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J0(t.type)}}class Q0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const r=n[s];r.setValue(e,t[r.id],i)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function Zl(o,e){o.seq.push(e),o.map[e.id]=e}function em(o,e,t){const i=o.name,n=i.length;for(wa.lastIndex=0;;){const s=wa.exec(i),a=wa.lastIndex;let r=s[1];const l=s[2]==="]",c=s[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===n){Zl(t,c===void 0?new K0(r,o,e):new Z0(r,o,e));break}else{let u=t.map[r];u===void 0&&(u=new Q0(r),Zl(t,u)),t=u}}}class Co{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),a=e.getUniformLocation(t,s.name);em(s,a,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){const r=t[s],l=i[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Ql(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}const tm=37297;let im=0;function nm(o,e){const t=o.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){const r=a+1;i.push(`${r===e?">":" "} ${r}: ${t[a]}`)}return i.join(`
`)}const ec=new We;function sm(o){Je._getMatrix(ec,Je.workingColorSpace,o);const e=`mat3( ${ec.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(o)){case zo:return[e,"LinearTransferOETF"];case ot:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function tc(o,e,t){const i=o.getShaderParameter(e,o.COMPILE_STATUS),n=o.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+nm(o.getShaderSource(e),a)}else return n}function om(o,e){const t=sm(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function am(o,e){let t;switch(e){case Jc:t="Linear";break;case Kc:t="Reinhard";break;case Zc:t="Cineon";break;case Dr:t="ACESFilmic";break;case Qc:t="AgX";break;case eh:t="Neutral";break;case Sd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const fo=new L;function rm(){Je.getLuminanceCoefficients(fo);const o=fo.x.toFixed(4),e=fo.y.toFixed(4),t=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lm(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function cm(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function hm(o,e){const t={},i=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=o.getActiveAttrib(e,n),a=s.name;let r=1;s.type===o.FLOAT_MAT2&&(r=2),s.type===o.FLOAT_MAT3&&(r=3),s.type===o.FLOAT_MAT4&&(r=4),t[a]={type:s.type,location:o.getAttribLocation(e,a),locationSize:r}}return t}function Ss(o){return o!==""}function ic(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nc(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mr(o){return o.replace(dm,fm)}const um=new Map;function fm(o,e){let t=je[e];if(t===void 0){const i=um.get(e);if(i!==void 0)t=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mr(t)}const pm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sc(o){return o.replace(pm,mm)}function mm(o,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function oc(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function gm(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===qc?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===$c?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ci&&(e="SHADOWMAP_TYPE_VSM"),e}function vm(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case qn:case $n:e="ENVMAP_TYPE_CUBE";break;case Oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ym(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case $n:e="ENVMAP_MODE_REFRACTION";break}return e}function _m(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Lr:e="ENVMAP_BLENDING_MULTIPLY";break;case Md:e="ENVMAP_BLENDING_MIX";break;case Td:e="ENVMAP_BLENDING_ADD";break}return e}function xm(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function bm(o,e,t,i){const n=o.getContext(),s=t.defines;let a=t.vertexShader,r=t.fragmentShader;const l=gm(t),c=vm(t),h=ym(t),u=_m(t),d=xm(t),f=lm(t),g=cm(s),v=n.createProgram();let m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),p.length>0&&(p+=`
`)):(m=[oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[oc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?je.tonemapping_pars_fragment:"",t.toneMapping!==$i?am("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,om("linearToOutputTexel",t.outputColorSpace),rm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),a=Mr(a),a=ic(a,t),a=nc(a,t),r=Mr(r),r=ic(r,t),r=nc(r,t),a=sc(a),r=sc(r),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=w+m+a,y=w+p+r,R=Ql(n,n.VERTEX_SHADER,M),C=Ql(n,n.FRAGMENT_SHADER,y);n.attachShader(v,R),n.attachShader(v,C),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function A(P){if(o.debug.checkShaderErrors){const z=n.getProgramInfoLog(v).trim(),O=n.getShaderInfoLog(R).trim(),G=n.getShaderInfoLog(C).trim();let K=!0,q=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(n,v,R,C);else{const te=tc(n,R,"vertex"),W=tc(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+te+`
`+W)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(O===""||G==="")&&(q=!1);q&&(P.diagnostics={runnable:K,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:G,prefix:p}})}n.deleteShader(R),n.deleteShader(C),I=new Co(n,v),T=hm(n,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=n.getProgramParameter(v,tm)),b},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=im++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=C,this}let wm=0;class Mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Tm(e),t.set(e,i)),i}}class Tm{constructor(e){this.id=wm++,this.code=e,this.usedTimes=0}}function Sm(o,e,t,i,n,s,a){const r=new yh,l=new Mm,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,b,P,z,O){const G=z.fog,K=O.geometry,q=T.isMeshStandardMaterial?z.environment:null,te=(T.isMeshStandardMaterial?t:e).get(T.envMap||q),W=te&&te.mapping===Oo?te.image.height:null,re=g[T.type];T.precision!==null&&(f=n.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const de=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ve=de!==void 0?de.length:0;let Be=0;K.morphAttributes.position!==void 0&&(Be=1),K.morphAttributes.normal!==void 0&&(Be=2),K.morphAttributes.color!==void 0&&(Be=3);let Ue,Y,X,le;if(re){const nt=vi[re];Ue=nt.vertexShader,Y=nt.fragmentShader}else Ue=T.vertexShader,Y=T.fragmentShader,l.update(T),X=l.getVertexShaderID(T),le=l.getFragmentShaderID(T);const ne=o.getRenderTarget(),Pe=o.state.buffers.depth.getReversed(),Le=O.isInstancedMesh===!0,se=O.isBatchedMesh===!0,Ie=!!T.map,De=!!T.matcap,qe=!!te,D=!!T.aoMap,et=!!T.lightMap,be=!!T.bumpMap,he=!!T.normalMap,Ee=!!T.displacementMap,Ze=!!T.emissiveMap,Ce=!!T.metalnessMap,E=!!T.roughnessMap,x=T.anisotropy>0,U=T.clearcoat>0,Z=T.dispersion>0,ie=T.iridescence>0,J=T.sheen>0,Ae=T.transmission>0,fe=x&&!!T.anisotropyMap,ye=U&&!!T.clearcoatMap,Ke=U&&!!T.clearcoatNormalMap,oe=U&&!!T.clearcoatRoughnessMap,_e=ie&&!!T.iridescenceMap,ke=ie&&!!T.iridescenceThicknessMap,Oe=J&&!!T.sheenColorMap,xe=J&&!!T.sheenRoughnessMap,$e=!!T.specularMap,Xe=!!T.specularColorMap,ct=!!T.specularIntensityMap,F=Ae&&!!T.transmissionMap,ue=Ae&&!!T.thicknessMap,j=!!T.gradientMap,ee=!!T.alphaMap,ge=T.alphaTest>0,pe=!!T.alphaHash,He=!!T.extensions;let vt=$i;T.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(vt=o.toneMapping);const Pt={shaderID:re,shaderType:T.type,shaderName:T.name,vertexShader:Ue,fragmentShader:Y,defines:T.defines,customVertexShaderID:X,customFragmentShaderID:le,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:se,batchingColor:se&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?o.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:ns,alphaToCoverage:!!T.alphaToCoverage,map:Ie,matcap:De,envMap:qe,envMapMode:qe&&te.mapping,envMapCubeUVHeight:W,aoMap:D,lightMap:et,bumpMap:be,normalMap:he,displacementMap:d&&Ee,emissiveMap:Ze,normalMapObjectSpace:he&&T.normalMapType===Dd,normalMapTangentSpace:he&&T.normalMapType===uh,metalnessMap:Ce,roughnessMap:E,anisotropy:x,anisotropyMap:fe,clearcoat:U,clearcoatMap:ye,clearcoatNormalMap:Ke,clearcoatRoughnessMap:oe,dispersion:Z,iridescence:ie,iridescenceMap:_e,iridescenceThicknessMap:ke,sheen:J,sheenColorMap:Oe,sheenRoughnessMap:xe,specularMap:$e,specularColorMap:Xe,specularIntensityMap:ct,transmission:Ae,transmissionMap:F,thicknessMap:ue,gradientMap:j,opaque:T.transparent===!1&&T.blending===Wn&&T.alphaToCoverage===!1,alphaMap:ee,alphaTest:ge,alphaHash:pe,combine:T.combine,mapUv:Ie&&v(T.map.channel),aoMapUv:D&&v(T.aoMap.channel),lightMapUv:et&&v(T.lightMap.channel),bumpMapUv:be&&v(T.bumpMap.channel),normalMapUv:he&&v(T.normalMap.channel),displacementMapUv:Ee&&v(T.displacementMap.channel),emissiveMapUv:Ze&&v(T.emissiveMap.channel),metalnessMapUv:Ce&&v(T.metalnessMap.channel),roughnessMapUv:E&&v(T.roughnessMap.channel),anisotropyMapUv:fe&&v(T.anisotropyMap.channel),clearcoatMapUv:ye&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(T.sheenRoughnessMap.channel),specularMapUv:$e&&v(T.specularMap.channel),specularColorMapUv:Xe&&v(T.specularColorMap.channel),specularIntensityMapUv:ct&&v(T.specularIntensityMap.channel),transmissionMapUv:F&&v(T.transmissionMap.channel),thicknessMapUv:ue&&v(T.thicknessMap.channel),alphaMapUv:ee&&v(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(he||x),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(Ie||ee),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Pe,skinning:O.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&P.length>0,shadowMapType:o.shadowMap.type,toneMapping:vt,decodeVideoTexture:Ie&&T.map.isVideoTexture===!0&&Je.getTransfer(T.map.colorSpace)===ot,decodeVideoTextureEmissive:Ze&&T.emissiveMap.isVideoTexture===!0&&Je.getTransfer(T.emissiveMap.colorSpace)===ot,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ut,flipSided:T.side===Bt,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:He&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&T.extensions.multiDraw===!0||se)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pt.vertexUv1s=c.has(1),Pt.vertexUv2s=c.has(2),Pt.vertexUv3s=c.has(3),c.clear(),Pt}function p(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)b.push(P),b.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(w(b,T),M(b,T),b.push(o.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function w(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function M(T,b){r.disableAll(),b.supportsVertexTextures&&r.enable(0),b.instancing&&r.enable(1),b.instancingColor&&r.enable(2),b.instancingMorph&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),b.dispersion&&r.enable(20),b.batchingColor&&r.enable(21),T.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reverseDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),T.push(r.mask)}function y(T){const b=g[T.type];let P;if(b){const z=vi[b];P=Bs.clone(z.uniforms)}else P=T.uniforms;return P}function R(T,b){let P;for(let z=0,O=h.length;z<O;z++){const G=h[z];if(G.cacheKey===b){P=G,++P.usedTimes;break}}return P===void 0&&(P=new bm(o,b,T,s),h.push(P)),P}function C(T){if(--T.usedTimes===0){const b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function A(T){l.remove(T)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:R,releaseProgram:C,releaseShaderCache:A,programs:h,dispose:I}}function Em(){let o=new WeakMap;function e(a){return o.has(a)}function t(a){let r=o.get(a);return r===void 0&&(r={},o.set(a,r)),r}function i(a){o.delete(a)}function n(a,r,l){o.get(a)[r]=l}function s(){o=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:s}}function Cm(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ac(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function rc(){const o=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(u,d,f,g,v,m){let p=o[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},o[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),e++,p}function r(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?i.push(p):f.transparent===!0?n.push(p):t.push(p)}function l(u,d,f,g,v,m){const p=a(u,d,f,g,v,m);f.transmission>0?i.unshift(p):f.transparent===!0?n.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Cm),i.length>1&&i.sort(d||ac),n.length>1&&n.sort(d||ac)}function h(){for(let u=e,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:r,unshift:l,finish:h,sort:c}}function Am(){let o=new WeakMap;function e(i,n){const s=o.get(i);let a;return s===void 0?(a=new rc,o.set(i,[a])):n>=s.length?(a=new rc,s.push(a)):a=s[n],a}function t(){o=new WeakMap}return{get:e,dispose:t}}function Rm(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new we};break;case"SpotLight":t={position:new L,direction:new L,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new L,halfWidth:new L,halfHeight:new L};break}return o[e.id]=t,t}}}function Pm(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Im=0;function Lm(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Dm(o){const e=new Rm,t=Pm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new L);const n=new L,s=new gt,a=new gt;function r(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,w=0,M=0,y=0,R=0,C=0,A=0;c.sort(Lm);for(let T=0,b=c.length;T<b;T++){const P=c[T],z=P.color,O=P.intensity,G=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=z.r*O,u+=z.g*O,d+=z.b*O;else if(P.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(P.sh.coefficients[q],O);A++}else if(P.isDirectionalLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const te=P.shadow,W=t.get(P);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=K,i.directionalShadowMatrix[f]=P.shadow.matrix,w++}i.directional[f]=q,f++}else if(P.isSpotLight){const q=e.get(P);q.position.setFromMatrixPosition(P.matrixWorld),q.color.copy(z).multiplyScalar(O),q.distance=G,q.coneCos=Math.cos(P.angle),q.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),q.decay=P.decay,i.spot[v]=q;const te=P.shadow;if(P.map&&(i.spotLightMap[R]=P.map,R++,te.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[v]=te.matrix,P.castShadow){const W=t.get(P);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=K,y++}v++}else if(P.isRectAreaLight){const q=e.get(P);q.color.copy(z).multiplyScalar(O),q.halfWidth.set(P.width*.5,0,0),q.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=q,m++}else if(P.isPointLight){const q=e.get(P);if(q.color.copy(P.color).multiplyScalar(P.intensity),q.distance=P.distance,q.decay=P.decay,P.castShadow){const te=P.shadow,W=t.get(P);W.shadowIntensity=te.intensity,W.shadowBias=te.bias,W.shadowNormalBias=te.normalBias,W.shadowRadius=te.radius,W.shadowMapSize=te.mapSize,W.shadowCameraNear=te.camera.near,W.shadowCameraFar=te.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=P.shadow.matrix,M++}i.point[g]=q,g++}else if(P.isHemisphereLight){const q=e.get(P);q.skyColor.copy(P.color).multiplyScalar(O),q.groundColor.copy(P.groundColor).multiplyScalar(O),i.hemi[p]=q,p++}}m>0&&(o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==w||I.numPointShadows!==M||I.numSpotShadows!==y||I.numSpotMaps!==R||I.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=y+R-C,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=A,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=w,I.numPointShadows=M,I.numSpotShadows=y,I.numSpotMaps=R,I.numLightProbes=A,i.version=Im++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const M=c[p];if(M.isDirectionalLight){const y=i.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),u++}else if(M.isSpotLight){const y=i.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(n),y.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),a.identity(),s.copy(M.matrixWorld),s.premultiply(m),a.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),g++}else if(M.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(m),v++}}}return{setup:r,setupView:l,state:i}}function lc(o){const e=new Dm(o),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function r(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:r,setupLightsView:l,pushLight:s,pushShadow:a}}function Bm(o){let e=new WeakMap;function t(n,s=0){const a=e.get(n);let r;return a===void 0?(r=new lc(o),e.set(n,[r])):s>=a.length?(r=new lc(o),a.push(r)):r=a[s],r}function i(){e=new WeakMap}return{get:t,dispose:i}}class Fm extends os{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class km extends os{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
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
}`;function Om(o,e,t){let i=new Gr;const n=new Ne,s=new Ne,a=new rt,r=new Fm({depthPacking:Ld}),l=new km,c={},h=t.maxTextureSize,u={[Ji]:Bt,[Bt]:Ji,[Ut]:Ut},d=new Dt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Nm,fragmentShader:Um}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ft;g.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new B(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qc;let p=this.type;this.render=function(C,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=o.getRenderTarget(),b=o.getActiveCubeFace(),P=o.getActiveMipmapLevel(),z=o.state;z.setBlending(Li),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const O=p!==Ci&&this.type===Ci,G=p===Ci&&this.type!==Ci;for(let K=0,q=C.length;K<q;K++){const te=C[K],W=te.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);const re=W.getFrameExtents();if(n.multiply(re),s.copy(W.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/re.x),n.x=s.x*re.x,W.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/re.y),n.y=s.y*re.y,W.mapSize.y=s.y)),W.map===null||O===!0||G===!0){const ve=this.type!==Ci?{minFilter:di,magFilter:di}:{};W.map!==null&&W.map.dispose(),W.map=new ui(n.x,n.y,ve),W.map.texture.name=te.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const de=W.getViewportCount();for(let ve=0;ve<de;ve++){const Be=W.getViewport(ve);a.set(s.x*Be.x,s.y*Be.y,s.x*Be.z,s.y*Be.w),z.viewport(a),W.updateMatrices(te,ve),i=W.getFrustum(),y(A,I,W.camera,te,this.type)}W.isPointLightShadow!==!0&&this.type===Ci&&w(W,I),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,o.setRenderTarget(T,b,P)};function w(C,A){const I=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,f.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ui(n.x,n.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,o.setRenderTarget(C.mapPass),o.clear(),o.renderBufferDirect(A,null,I,d,v,null),f.uniforms.shadow_pass.value=C.mapPass.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,o.setRenderTarget(C.map),o.clear(),o.renderBufferDirect(A,null,I,f,v,null)}function M(C,A,I,T){let b=null;const P=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)b=P;else if(b=I.isPointLight===!0?l:r,o.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const z=b.uuid,O=A.uuid;let G=c[z];G===void 0&&(G={},c[z]=G);let K=G[O];K===void 0&&(K=b.clone(),G[O]=K,A.addEventListener("dispose",R)),b=K}if(b.visible=A.visible,b.wireframe=A.wireframe,T===Ci?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,I.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const z=o.properties.get(b);z.light=I}return b}function y(C,A,I,T,b){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===Ci)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const O=e.update(C),G=C.material;if(Array.isArray(G)){const K=O.groups;for(let q=0,te=K.length;q<te;q++){const W=K[q],re=G[W.materialIndex];if(re&&re.visible){const de=M(C,re,T,b);C.onBeforeShadow(o,C,A,I,O,de,W),o.renderBufferDirect(I,null,O,de,C,W),C.onAfterShadow(o,C,A,I,O,de,W)}}}else if(G.visible){const K=M(C,G,T,b);C.onBeforeShadow(o,C,A,I,O,K,null),o.renderBufferDirect(I,null,O,K,C,null),C.onAfterShadow(o,C,A,I,O,K,null)}}const z=C.children;for(let O=0,G=z.length;O<G;O++)y(z[O],A,I,T,b)}function R(C){C.target.removeEventListener("dispose",R);for(const I in c){const T=c[I],b=C.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const zm={[Ua]:Oa,[za]:Va,[Ga]:Wa,[Yn]:Ha,[Oa]:Ua,[Va]:za,[Wa]:Ga,[Ha]:Yn};function Gm(o,e){function t(){let F=!1;const ue=new rt;let j=null;const ee=new rt(0,0,0,0);return{setMask:function(ge){j!==ge&&!F&&(o.colorMask(ge,ge,ge,ge),j=ge)},setLocked:function(ge){F=ge},setClear:function(ge,pe,He,vt,Pt){Pt===!0&&(ge*=vt,pe*=vt,He*=vt),ue.set(ge,pe,He,vt),ee.equals(ue)===!1&&(o.clearColor(ge,pe,He,vt),ee.copy(ue))},reset:function(){F=!1,j=null,ee.set(-1,0,0,0)}}}function i(){let F=!1,ue=!1,j=null,ee=null,ge=null;return{setReversed:function(pe){if(ue!==pe){const He=e.get("EXT_clip_control");ue?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const vt=ge;ge=null,this.setClear(vt)}ue=pe},getReversed:function(){return ue},setTest:function(pe){pe?ne(o.DEPTH_TEST):Pe(o.DEPTH_TEST)},setMask:function(pe){j!==pe&&!F&&(o.depthMask(pe),j=pe)},setFunc:function(pe){if(ue&&(pe=zm[pe]),ee!==pe){switch(pe){case Ua:o.depthFunc(o.NEVER);break;case Oa:o.depthFunc(o.ALWAYS);break;case za:o.depthFunc(o.LESS);break;case Yn:o.depthFunc(o.LEQUAL);break;case Ga:o.depthFunc(o.EQUAL);break;case Ha:o.depthFunc(o.GEQUAL);break;case Va:o.depthFunc(o.GREATER);break;case Wa:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ee=pe}},setLocked:function(pe){F=pe},setClear:function(pe){ge!==pe&&(ue&&(pe=1-pe),o.clearDepth(pe),ge=pe)},reset:function(){F=!1,j=null,ee=null,ge=null,ue=!1}}}function n(){let F=!1,ue=null,j=null,ee=null,ge=null,pe=null,He=null,vt=null,Pt=null;return{setTest:function(nt){F||(nt?ne(o.STENCIL_TEST):Pe(o.STENCIL_TEST))},setMask:function(nt){ue!==nt&&!F&&(o.stencilMask(nt),ue=nt)},setFunc:function(nt,ti,xi){(j!==nt||ee!==ti||ge!==xi)&&(o.stencilFunc(nt,ti,xi),j=nt,ee=ti,ge=xi)},setOp:function(nt,ti,xi){(pe!==nt||He!==ti||vt!==xi)&&(o.stencilOp(nt,ti,xi),pe=nt,He=ti,vt=xi)},setLocked:function(nt){F=nt},setClear:function(nt){Pt!==nt&&(o.clearStencil(nt),Pt=nt)},reset:function(){F=!1,ue=null,j=null,ee=null,ge=null,pe=null,He=null,vt=null,Pt=null}}}const s=new t,a=new i,r=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,M=null,y=null,R=null,C=null,A=new we(0,0,0),I=0,T=!1,b=null,P=null,z=null,O=null,G=null;const K=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,te=0;const W=o.getParameter(o.VERSION);W.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=te>=1):W.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=te>=2);let re=null,de={};const ve=o.getParameter(o.SCISSOR_BOX),Be=o.getParameter(o.VIEWPORT),Ue=new rt().fromArray(ve),Y=new rt().fromArray(Be);function X(F,ue,j,ee){const ge=new Uint8Array(4),pe=o.createTexture();o.bindTexture(F,pe),o.texParameteri(F,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(F,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let He=0;He<j;He++)F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY?o.texImage3D(ue,0,o.RGBA,1,1,ee,0,o.RGBA,o.UNSIGNED_BYTE,ge):o.texImage2D(ue+He,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ge);return pe}const le={};le[o.TEXTURE_2D]=X(o.TEXTURE_2D,o.TEXTURE_2D,1),le[o.TEXTURE_CUBE_MAP]=X(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[o.TEXTURE_2D_ARRAY]=X(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),le[o.TEXTURE_3D]=X(o.TEXTURE_3D,o.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),r.setClear(0),ne(o.DEPTH_TEST),a.setFunc(Yn),be(!1),he(fl),ne(o.CULL_FACE),D(Li);function ne(F){h[F]!==!0&&(o.enable(F),h[F]=!0)}function Pe(F){h[F]!==!1&&(o.disable(F),h[F]=!1)}function Le(F,ue){return u[F]!==ue?(o.bindFramebuffer(F,ue),u[F]=ue,F===o.DRAW_FRAMEBUFFER&&(u[o.FRAMEBUFFER]=ue),F===o.FRAMEBUFFER&&(u[o.DRAW_FRAMEBUFFER]=ue),!0):!1}function se(F,ue){let j=f,ee=!1;if(F){j=d.get(ue),j===void 0&&(j=[],d.set(ue,j));const ge=F.textures;if(j.length!==ge.length||j[0]!==o.COLOR_ATTACHMENT0){for(let pe=0,He=ge.length;pe<He;pe++)j[pe]=o.COLOR_ATTACHMENT0+pe;j.length=ge.length,ee=!0}}else j[0]!==o.BACK&&(j[0]=o.BACK,ee=!0);ee&&o.drawBuffers(j)}function Ie(F){return g!==F?(o.useProgram(F),g=F,!0):!1}const De={[un]:o.FUNC_ADD,[ad]:o.FUNC_SUBTRACT,[rd]:o.FUNC_REVERSE_SUBTRACT};De[ld]=o.MIN,De[cd]=o.MAX;const qe={[hd]:o.ZERO,[dd]:o.ONE,[ud]:o.SRC_COLOR,[ka]:o.SRC_ALPHA,[yd]:o.SRC_ALPHA_SATURATE,[gd]:o.DST_COLOR,[pd]:o.DST_ALPHA,[fd]:o.ONE_MINUS_SRC_COLOR,[Na]:o.ONE_MINUS_SRC_ALPHA,[vd]:o.ONE_MINUS_DST_COLOR,[md]:o.ONE_MINUS_DST_ALPHA,[_d]:o.CONSTANT_COLOR,[xd]:o.ONE_MINUS_CONSTANT_COLOR,[bd]:o.CONSTANT_ALPHA,[wd]:o.ONE_MINUS_CONSTANT_ALPHA};function D(F,ue,j,ee,ge,pe,He,vt,Pt,nt){if(F===Li){v===!0&&(Pe(o.BLEND),v=!1);return}if(v===!1&&(ne(o.BLEND),v=!0),F!==od){if(F!==m||nt!==T){if((p!==un||y!==un)&&(o.blendEquation(o.FUNC_ADD),p=un,y=un),nt)switch(F){case Wn:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fa:o.blendFunc(o.ONE,o.ONE);break;case pl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ml:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Wn:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Fa:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case pl:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ml:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,M=null,R=null,C=null,A.set(0,0,0),I=0,m=F,T=nt}return}ge=ge||ue,pe=pe||j,He=He||ee,(ue!==p||ge!==y)&&(o.blendEquationSeparate(De[ue],De[ge]),p=ue,y=ge),(j!==w||ee!==M||pe!==R||He!==C)&&(o.blendFuncSeparate(qe[j],qe[ee],qe[pe],qe[He]),w=j,M=ee,R=pe,C=He),(vt.equals(A)===!1||Pt!==I)&&(o.blendColor(vt.r,vt.g,vt.b,Pt),A.copy(vt),I=Pt),m=F,T=!1}function et(F,ue){F.side===Ut?Pe(o.CULL_FACE):ne(o.CULL_FACE);let j=F.side===Bt;ue&&(j=!j),be(j),F.blending===Wn&&F.transparent===!1?D(Li):D(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const ee=F.stencilWrite;r.setTest(ee),ee&&(r.setMask(F.stencilWriteMask),r.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),r.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ze(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ne(o.SAMPLE_ALPHA_TO_COVERAGE):Pe(o.SAMPLE_ALPHA_TO_COVERAGE)}function be(F){b!==F&&(F?o.frontFace(o.CW):o.frontFace(o.CCW),b=F)}function he(F){F!==nd?(ne(o.CULL_FACE),F!==P&&(F===fl?o.cullFace(o.BACK):F===sd?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Pe(o.CULL_FACE),P=F}function Ee(F){F!==z&&(q&&o.lineWidth(F),z=F)}function Ze(F,ue,j){F?(ne(o.POLYGON_OFFSET_FILL),(O!==ue||G!==j)&&(o.polygonOffset(ue,j),O=ue,G=j)):Pe(o.POLYGON_OFFSET_FILL)}function Ce(F){F?ne(o.SCISSOR_TEST):Pe(o.SCISSOR_TEST)}function E(F){F===void 0&&(F=o.TEXTURE0+K-1),re!==F&&(o.activeTexture(F),re=F)}function x(F,ue,j){j===void 0&&(re===null?j=o.TEXTURE0+K-1:j=re);let ee=de[j];ee===void 0&&(ee={type:void 0,texture:void 0},de[j]=ee),(ee.type!==F||ee.texture!==ue)&&(re!==j&&(o.activeTexture(j),re=j),o.bindTexture(F,ue||le[F]),ee.type=F,ee.texture=ue)}function U(){const F=de[re];F!==void 0&&F.type!==void 0&&(o.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{o.compressedTexImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ie(){try{o.compressedTexImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{o.texSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ae(){try{o.texSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ye(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ke(){try{o.texStorage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{o.texStorage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{o.texImage2D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{o.texImage3D.apply(o,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(F){Ue.equals(F)===!1&&(o.scissor(F.x,F.y,F.z,F.w),Ue.copy(F))}function xe(F){Y.equals(F)===!1&&(o.viewport(F.x,F.y,F.z,F.w),Y.copy(F))}function $e(F,ue){let j=c.get(ue);j===void 0&&(j=new WeakMap,c.set(ue,j));let ee=j.get(F);ee===void 0&&(ee=o.getUniformBlockIndex(ue,F.name),j.set(F,ee))}function Xe(F,ue){const ee=c.get(ue).get(F);l.get(ue)!==ee&&(o.uniformBlockBinding(ue,ee,F.__bindingPointIndex),l.set(ue,ee))}function ct(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),a.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),h={},re=null,de={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,w=null,M=null,y=null,R=null,C=null,A=new we(0,0,0),I=0,T=!1,b=null,P=null,z=null,O=null,G=null,Ue.set(0,0,o.canvas.width,o.canvas.height),Y.set(0,0,o.canvas.width,o.canvas.height),s.reset(),a.reset(),r.reset()}return{buffers:{color:s,depth:a,stencil:r},enable:ne,disable:Pe,bindFramebuffer:Le,drawBuffers:se,useProgram:Ie,setBlending:D,setMaterial:et,setFlipSided:be,setCullFace:he,setLineWidth:Ee,setPolygonOffset:Ze,setScissorTest:Ce,activeTexture:E,bindTexture:x,unbindTexture:U,compressedTexImage2D:Z,compressedTexImage3D:ie,texImage2D:_e,texImage3D:ke,updateUBOMapping:$e,uniformBlockBinding:Xe,texStorage2D:Ke,texStorage3D:oe,texSubImage2D:J,texSubImage3D:Ae,compressedTexSubImage2D:fe,compressedTexSubImage3D:ye,scissor:Oe,viewport:xe,reset:ct}}function cc(o,e,t,i){const n=Hm(i);switch(t){case oh:return o*e;case rh:return o*e;case lh:return o*e*2;case ch:return o*e/n.components*n.byteLength;case Nr:return o*e/n.components*n.byteLength;case hh:return o*e*2/n.components*n.byteLength;case Ur:return o*e*2/n.components*n.byteLength;case ah:return o*e*3/n.components*n.byteLength;case hi:return o*e*4/n.components*n.byteLength;case Or:return o*e*4/n.components*n.byteLength;case wo:case Mo:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case To:case So:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ja:case Za:return Math.max(o,16)*Math.max(e,8)/4;case $a:case Ka:return Math.max(o,8)*Math.max(e,8)/2;case Qa:case er:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case tr:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ir:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case nr:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case sr:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case or:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case ar:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case rr:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case lr:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case cr:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case hr:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case dr:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case ur:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case fr:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case pr:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case mr:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Eo:case gr:case vr:return Math.ceil(o/4)*Math.ceil(e/4)*16;case dh:case yr:return Math.ceil(o/4)*Math.ceil(e/4)*8;case _r:case xr:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Hm(o){switch(o){case ki:case ih:return{byteLength:1,components:1};case Ds:case nh:case Di:return{byteLength:2,components:1};case Fr:case kr:return{byteLength:2,components:4};case xn:case Br:case Pi:return{byteLength:4,components:1};case sh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}function Vm(o,e,t,i,n,s,a){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return f?new OffscreenCanvas(E,x):Do("canvas")}function v(E,x,U){let Z=1;const ie=Ce(E);if((ie.width>U||ie.height>U)&&(Z=U/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const J=Math.floor(Z*ie.width),Ae=Math.floor(Z*ie.height);u===void 0&&(u=g(J,Ae));const fe=x?g(J,Ae):u;return fe.width=J,fe.height=Ae,fe.getContext("2d").drawImage(E,0,0,J,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Ae+")."),fe}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){o.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?o.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function M(E,x,U,Z,ie=!1){if(E!==null){if(o[E]!==void 0)return o[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let J=x;if(x===o.RED&&(U===o.FLOAT&&(J=o.R32F),U===o.HALF_FLOAT&&(J=o.R16F),U===o.UNSIGNED_BYTE&&(J=o.R8)),x===o.RED_INTEGER&&(U===o.UNSIGNED_BYTE&&(J=o.R8UI),U===o.UNSIGNED_SHORT&&(J=o.R16UI),U===o.UNSIGNED_INT&&(J=o.R32UI),U===o.BYTE&&(J=o.R8I),U===o.SHORT&&(J=o.R16I),U===o.INT&&(J=o.R32I)),x===o.RG&&(U===o.FLOAT&&(J=o.RG32F),U===o.HALF_FLOAT&&(J=o.RG16F),U===o.UNSIGNED_BYTE&&(J=o.RG8)),x===o.RG_INTEGER&&(U===o.UNSIGNED_BYTE&&(J=o.RG8UI),U===o.UNSIGNED_SHORT&&(J=o.RG16UI),U===o.UNSIGNED_INT&&(J=o.RG32UI),U===o.BYTE&&(J=o.RG8I),U===o.SHORT&&(J=o.RG16I),U===o.INT&&(J=o.RG32I)),x===o.RGB_INTEGER&&(U===o.UNSIGNED_BYTE&&(J=o.RGB8UI),U===o.UNSIGNED_SHORT&&(J=o.RGB16UI),U===o.UNSIGNED_INT&&(J=o.RGB32UI),U===o.BYTE&&(J=o.RGB8I),U===o.SHORT&&(J=o.RGB16I),U===o.INT&&(J=o.RGB32I)),x===o.RGBA_INTEGER&&(U===o.UNSIGNED_BYTE&&(J=o.RGBA8UI),U===o.UNSIGNED_SHORT&&(J=o.RGBA16UI),U===o.UNSIGNED_INT&&(J=o.RGBA32UI),U===o.BYTE&&(J=o.RGBA8I),U===o.SHORT&&(J=o.RGBA16I),U===o.INT&&(J=o.RGBA32I)),x===o.RGB&&U===o.UNSIGNED_INT_5_9_9_9_REV&&(J=o.RGB9_E5),x===o.RGBA){const Ae=ie?zo:Je.getTransfer(Z);U===o.FLOAT&&(J=o.RGBA32F),U===o.HALF_FLOAT&&(J=o.RGBA16F),U===o.UNSIGNED_BYTE&&(J=Ae===ot?o.SRGB8_ALPHA8:o.RGBA8),U===o.UNSIGNED_SHORT_4_4_4_4&&(J=o.RGBA4),U===o.UNSIGNED_SHORT_5_5_5_1&&(J=o.RGB5_A1)}return(J===o.R16F||J===o.R32F||J===o.RG16F||J===o.RG32F||J===o.RGBA16F||J===o.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(E,x){let U;return E?x===null||x===xn||x===Jn?U=o.DEPTH24_STENCIL8:x===Pi?U=o.DEPTH32F_STENCIL8:x===Ds&&(U=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xn||x===Jn?U=o.DEPTH_COMPONENT24:x===Pi?U=o.DEPTH_COMPONENT32F:x===Ds&&(U=o.DEPTH_COMPONENT16),U}function R(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==di&&E.minFilter!==yi?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function C(E){const x=E.target;x.removeEventListener("dispose",C),I(x),x.isVideoTexture&&h.delete(x)}function A(E){const x=E.target;x.removeEventListener("dispose",A),b(x)}function I(E){const x=i.get(E);if(x.__webglInit===void 0)return;const U=E.source,Z=d.get(U);if(Z){const ie=Z[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&T(E),Object.keys(Z).length===0&&d.delete(U)}i.remove(E)}function T(E){const x=i.get(E);o.deleteTexture(x.__webglTexture);const U=E.source,Z=d.get(U);delete Z[x.__cacheKey],a.memory.textures--}function b(E){const x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let ie=0;ie<x.__webglFramebuffer[Z].length;ie++)o.deleteFramebuffer(x.__webglFramebuffer[Z][ie]);else o.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&o.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)o.deleteFramebuffer(x.__webglFramebuffer[Z]);else o.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&o.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&o.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&o.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&o.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=E.textures;for(let Z=0,ie=U.length;Z<ie;Z++){const J=i.get(U[Z]);J.__webglTexture&&(o.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(U[Z])}i.remove(E)}let P=0;function z(){P=0}function O(){const E=P;return E>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+n.maxTextures),P+=1,E}function G(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function K(E,x){const U=i.get(E);if(E.isVideoTexture&&Ee(E),E.isRenderTargetTexture===!1&&E.version>0&&U.__version!==E.version){const Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(U,E,x);return}}t.bindTexture(o.TEXTURE_2D,U.__webglTexture,o.TEXTURE0+x)}function q(E,x){const U=i.get(E);if(E.version>0&&U.__version!==E.version){Y(U,E,x);return}t.bindTexture(o.TEXTURE_2D_ARRAY,U.__webglTexture,o.TEXTURE0+x)}function te(E,x){const U=i.get(E);if(E.version>0&&U.__version!==E.version){Y(U,E,x);return}t.bindTexture(o.TEXTURE_3D,U.__webglTexture,o.TEXTURE0+x)}function W(E,x){const U=i.get(E);if(E.version>0&&U.__version!==E.version){X(U,E,x);return}t.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+x)}const re={[Ya]:o.REPEAT,[gn]:o.CLAMP_TO_EDGE,[qa]:o.MIRRORED_REPEAT},de={[di]:o.NEAREST,[Ed]:o.NEAREST_MIPMAP_NEAREST,[js]:o.NEAREST_MIPMAP_LINEAR,[yi]:o.LINEAR,[Yo]:o.LINEAR_MIPMAP_NEAREST,[vn]:o.LINEAR_MIPMAP_LINEAR},ve={[Bd]:o.NEVER,[zd]:o.ALWAYS,[Fd]:o.LESS,[fh]:o.LEQUAL,[kd]:o.EQUAL,[Od]:o.GEQUAL,[Nd]:o.GREATER,[Ud]:o.NOTEQUAL};function Be(E,x){if(x.type===Pi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===yi||x.magFilter===Yo||x.magFilter===js||x.magFilter===vn||x.minFilter===yi||x.minFilter===Yo||x.minFilter===js||x.minFilter===vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(E,o.TEXTURE_WRAP_S,re[x.wrapS]),o.texParameteri(E,o.TEXTURE_WRAP_T,re[x.wrapT]),(E===o.TEXTURE_3D||E===o.TEXTURE_2D_ARRAY)&&o.texParameteri(E,o.TEXTURE_WRAP_R,re[x.wrapR]),o.texParameteri(E,o.TEXTURE_MAG_FILTER,de[x.magFilter]),o.texParameteri(E,o.TEXTURE_MIN_FILTER,de[x.minFilter]),x.compareFunction&&(o.texParameteri(E,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(E,o.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===di||x.minFilter!==js&&x.minFilter!==vn||x.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");o.texParameterf(E,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ue(E,x){let U=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",C));const Z=x.source;let ie=d.get(Z);ie===void 0&&(ie={},d.set(Z,ie));const J=G(x);if(J!==E.__cacheKey){ie[J]===void 0&&(ie[J]={texture:o.createTexture(),usedTimes:0},a.memory.textures++,U=!0),ie[J].usedTimes++;const Ae=ie[E.__cacheKey];Ae!==void 0&&(ie[E.__cacheKey].usedTimes--,Ae.usedTimes===0&&T(x)),E.__cacheKey=J,E.__webglTexture=ie[J].texture}return U}function Y(E,x,U){let Z=o.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=o.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=o.TEXTURE_3D);const ie=Ue(E,x),J=x.source;t.bindTexture(Z,E.__webglTexture,o.TEXTURE0+U);const Ae=i.get(J);if(J.version!==Ae.__version||ie===!0){t.activeTexture(o.TEXTURE0+U);const fe=Je.getPrimaries(Je.workingColorSpace),ye=x.colorSpace===Yi?null:Je.getPrimaries(x.colorSpace),Ke=x.colorSpace===Yi||fe===ye?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,x.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,x.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let oe=v(x.image,!1,n.maxTextureSize);oe=Ze(x,oe);const _e=s.convert(x.format,x.colorSpace),ke=s.convert(x.type);let Oe=M(x.internalFormat,_e,ke,x.colorSpace,x.isVideoTexture);Be(Z,x);let xe;const $e=x.mipmaps,Xe=x.isVideoTexture!==!0,ct=Ae.__version===void 0||ie===!0,F=J.dataReady,ue=R(x,oe);if(x.isDepthTexture)Oe=y(x.format===Kn,x.type),ct&&(Xe?t.texStorage2D(o.TEXTURE_2D,1,Oe,oe.width,oe.height):t.texImage2D(o.TEXTURE_2D,0,Oe,oe.width,oe.height,0,_e,ke,null));else if(x.isDataTexture)if($e.length>0){Xe&&ct&&t.texStorage2D(o.TEXTURE_2D,ue,Oe,$e[0].width,$e[0].height);for(let j=0,ee=$e.length;j<ee;j++)xe=$e[j],Xe?F&&t.texSubImage2D(o.TEXTURE_2D,j,0,0,xe.width,xe.height,_e,ke,xe.data):t.texImage2D(o.TEXTURE_2D,j,Oe,xe.width,xe.height,0,_e,ke,xe.data);x.generateMipmaps=!1}else Xe?(ct&&t.texStorage2D(o.TEXTURE_2D,ue,Oe,oe.width,oe.height),F&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,oe.width,oe.height,_e,ke,oe.data)):t.texImage2D(o.TEXTURE_2D,0,Oe,oe.width,oe.height,0,_e,ke,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Xe&&ct&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ue,Oe,$e[0].width,$e[0].height,oe.depth);for(let j=0,ee=$e.length;j<ee;j++)if(xe=$e[j],x.format!==hi)if(_e!==null)if(Xe){if(F)if(x.layerUpdates.size>0){const ge=cc(xe.width,xe.height,x.format,x.type);for(const pe of x.layerUpdates){const He=xe.data.subarray(pe*ge/xe.data.BYTES_PER_ELEMENT,(pe+1)*ge/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,j,0,0,pe,xe.width,xe.height,1,_e,He)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,oe.depth,_e,xe.data)}else t.compressedTexImage3D(o.TEXTURE_2D_ARRAY,j,Oe,xe.width,xe.height,oe.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?F&&t.texSubImage3D(o.TEXTURE_2D_ARRAY,j,0,0,0,xe.width,xe.height,oe.depth,_e,ke,xe.data):t.texImage3D(o.TEXTURE_2D_ARRAY,j,Oe,xe.width,xe.height,oe.depth,0,_e,ke,xe.data)}else{Xe&&ct&&t.texStorage2D(o.TEXTURE_2D,ue,Oe,$e[0].width,$e[0].height);for(let j=0,ee=$e.length;j<ee;j++)xe=$e[j],x.format!==hi?_e!==null?Xe?F&&t.compressedTexSubImage2D(o.TEXTURE_2D,j,0,0,xe.width,xe.height,_e,xe.data):t.compressedTexImage2D(o.TEXTURE_2D,j,Oe,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?F&&t.texSubImage2D(o.TEXTURE_2D,j,0,0,xe.width,xe.height,_e,ke,xe.data):t.texImage2D(o.TEXTURE_2D,j,Oe,xe.width,xe.height,0,_e,ke,xe.data)}else if(x.isDataArrayTexture)if(Xe){if(ct&&t.texStorage3D(o.TEXTURE_2D_ARRAY,ue,Oe,oe.width,oe.height,oe.depth),F)if(x.layerUpdates.size>0){const j=cc(oe.width,oe.height,x.format,x.type);for(const ee of x.layerUpdates){const ge=oe.data.subarray(ee*j/oe.data.BYTES_PER_ELEMENT,(ee+1)*j/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ee,oe.width,oe.height,1,_e,ke,ge)}x.clearLayerUpdates()}else t.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,_e,ke,oe.data)}else t.texImage3D(o.TEXTURE_2D_ARRAY,0,Oe,oe.width,oe.height,oe.depth,0,_e,ke,oe.data);else if(x.isData3DTexture)Xe?(ct&&t.texStorage3D(o.TEXTURE_3D,ue,Oe,oe.width,oe.height,oe.depth),F&&t.texSubImage3D(o.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,_e,ke,oe.data)):t.texImage3D(o.TEXTURE_3D,0,Oe,oe.width,oe.height,oe.depth,0,_e,ke,oe.data);else if(x.isFramebufferTexture){if(ct)if(Xe)t.texStorage2D(o.TEXTURE_2D,ue,Oe,oe.width,oe.height);else{let j=oe.width,ee=oe.height;for(let ge=0;ge<ue;ge++)t.texImage2D(o.TEXTURE_2D,ge,Oe,j,ee,0,_e,ke,null),j>>=1,ee>>=1}}else if($e.length>0){if(Xe&&ct){const j=Ce($e[0]);t.texStorage2D(o.TEXTURE_2D,ue,Oe,j.width,j.height)}for(let j=0,ee=$e.length;j<ee;j++)xe=$e[j],Xe?F&&t.texSubImage2D(o.TEXTURE_2D,j,0,0,_e,ke,xe):t.texImage2D(o.TEXTURE_2D,j,Oe,_e,ke,xe);x.generateMipmaps=!1}else if(Xe){if(ct){const j=Ce(oe);t.texStorage2D(o.TEXTURE_2D,ue,Oe,j.width,j.height)}F&&t.texSubImage2D(o.TEXTURE_2D,0,0,0,_e,ke,oe)}else t.texImage2D(o.TEXTURE_2D,0,Oe,_e,ke,oe);m(x)&&p(Z),Ae.__version=J.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function X(E,x,U){if(x.image.length!==6)return;const Z=Ue(E,x),ie=x.source;t.bindTexture(o.TEXTURE_CUBE_MAP,E.__webglTexture,o.TEXTURE0+U);const J=i.get(ie);if(ie.version!==J.__version||Z===!0){t.activeTexture(o.TEXTURE0+U);const Ae=Je.getPrimaries(Je.workingColorSpace),fe=x.colorSpace===Yi?null:Je.getPrimaries(x.colorSpace),ye=x.colorSpace===Yi||Ae===fe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,x.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,x.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const Ke=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,_e=[];for(let ee=0;ee<6;ee++)!Ke&&!oe?_e[ee]=v(x.image[ee],!0,n.maxCubemapSize):_e[ee]=oe?x.image[ee].image:x.image[ee],_e[ee]=Ze(x,_e[ee]);const ke=_e[0],Oe=s.convert(x.format,x.colorSpace),xe=s.convert(x.type),$e=M(x.internalFormat,Oe,xe,x.colorSpace),Xe=x.isVideoTexture!==!0,ct=J.__version===void 0||Z===!0,F=ie.dataReady;let ue=R(x,ke);Be(o.TEXTURE_CUBE_MAP,x);let j;if(Ke){Xe&&ct&&t.texStorage2D(o.TEXTURE_CUBE_MAP,ue,$e,ke.width,ke.height);for(let ee=0;ee<6;ee++){j=_e[ee].mipmaps;for(let ge=0;ge<j.length;ge++){const pe=j[ge];x.format!==hi?Oe!==null?Xe?F&&t.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,pe.width,pe.height,Oe,pe.data):t.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,$e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?F&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,pe.width,pe.height,Oe,xe,pe.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,$e,pe.width,pe.height,0,Oe,xe,pe.data)}}}else{if(j=x.mipmaps,Xe&&ct){j.length>0&&ue++;const ee=Ce(_e[0]);t.texStorage2D(o.TEXTURE_CUBE_MAP,ue,$e,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(oe){Xe?F&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,_e[ee].width,_e[ee].height,Oe,xe,_e[ee].data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,_e[ee].width,_e[ee].height,0,Oe,xe,_e[ee].data);for(let ge=0;ge<j.length;ge++){const He=j[ge].image[ee].image;Xe?F&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,He.width,He.height,Oe,xe,He.data):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,$e,He.width,He.height,0,Oe,xe,He.data)}}else{Xe?F&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Oe,xe,_e[ee]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,$e,Oe,xe,_e[ee]);for(let ge=0;ge<j.length;ge++){const pe=j[ge];Xe?F&&t.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,Oe,xe,pe.image[ee]):t.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,$e,Oe,xe,pe.image[ee])}}}m(x)&&p(o.TEXTURE_CUBE_MAP),J.__version=ie.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function le(E,x,U,Z,ie,J){const Ae=s.convert(U.format,U.colorSpace),fe=s.convert(U.type),ye=M(U.internalFormat,Ae,fe,U.colorSpace),Ke=i.get(x),oe=i.get(U);if(oe.__renderTarget=x,!Ke.__hasExternalTextures){const _e=Math.max(1,x.width>>J),ke=Math.max(1,x.height>>J);ie===o.TEXTURE_3D||ie===o.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,ye,_e,ke,x.depth,0,Ae,fe,null):t.texImage2D(ie,J,ye,_e,ke,0,Ae,fe,null)}t.bindFramebuffer(o.FRAMEBUFFER,E),he(x)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Z,ie,oe.__webglTexture,0,be(x)):(ie===o.TEXTURE_2D||ie>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Z,ie,oe.__webglTexture,J),t.bindFramebuffer(o.FRAMEBUFFER,null)}function ne(E,x,U){if(o.bindRenderbuffer(o.RENDERBUFFER,E),x.depthBuffer){const Z=x.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,J=y(x.stencilBuffer,ie),Ae=x.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,fe=be(x);he(x)?r.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,fe,J,x.width,x.height):U?o.renderbufferStorageMultisample(o.RENDERBUFFER,fe,J,x.width,x.height):o.renderbufferStorage(o.RENDERBUFFER,J,x.width,x.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ae,o.RENDERBUFFER,E)}else{const Z=x.textures;for(let ie=0;ie<Z.length;ie++){const J=Z[ie],Ae=s.convert(J.format,J.colorSpace),fe=s.convert(J.type),ye=M(J.internalFormat,Ae,fe,J.colorSpace),Ke=be(x);U&&he(x)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ke,ye,x.width,x.height):he(x)?r.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ke,ye,x.width,x.height):o.renderbufferStorage(o.RENDERBUFFER,ye,x.width,x.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Pe(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(o.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K(x.depthTexture,0);const ie=Z.__webglTexture,J=be(x);if(x.depthTexture.format===Xn)he(x)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ie,0,J):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ie,0);else if(x.depthTexture.format===Kn)he(x)?r.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ie,0,J):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Le(E){const x=i.get(E),U=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const Z=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const ie=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),x.__depthDisposeCallback=ie}x.__boundDepthTexture=Z}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Pe(x.__webglFramebuffer,E)}else if(U){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(o.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=o.createRenderbuffer(),ne(x.__webglDepthbuffer[Z],E,!1);else{const ie=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[Z];o.bindRenderbuffer(o.RENDERBUFFER,J),o.framebufferRenderbuffer(o.FRAMEBUFFER,ie,o.RENDERBUFFER,J)}}else if(t.bindFramebuffer(o.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=o.createRenderbuffer(),ne(x.__webglDepthbuffer,E,!1);else{const Z=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ie),o.framebufferRenderbuffer(o.FRAMEBUFFER,Z,o.RENDERBUFFER,ie)}t.bindFramebuffer(o.FRAMEBUFFER,null)}function se(E,x,U){const Z=i.get(E);x!==void 0&&le(Z.__webglFramebuffer,E,E.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),U!==void 0&&Le(E)}function Ie(E){const x=E.texture,U=i.get(E),Z=i.get(x);E.addEventListener("dispose",A);const ie=E.textures,J=E.isWebGLCubeRenderTarget===!0,Ae=ie.length>1;if(Ae||(Z.__webglTexture===void 0&&(Z.__webglTexture=o.createTexture()),Z.__version=x.version,a.memory.textures++),J){U.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[fe]=[];for(let ye=0;ye<x.mipmaps.length;ye++)U.__webglFramebuffer[fe][ye]=o.createFramebuffer()}else U.__webglFramebuffer[fe]=o.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let fe=0;fe<x.mipmaps.length;fe++)U.__webglFramebuffer[fe]=o.createFramebuffer()}else U.__webglFramebuffer=o.createFramebuffer();if(Ae)for(let fe=0,ye=ie.length;fe<ye;fe++){const Ke=i.get(ie[fe]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=o.createTexture(),a.memory.textures++)}if(E.samples>0&&he(E)===!1){U.__webglMultisampledFramebuffer=o.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(o.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let fe=0;fe<ie.length;fe++){const ye=ie[fe];U.__webglColorRenderbuffer[fe]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,U.__webglColorRenderbuffer[fe]);const Ke=s.convert(ye.format,ye.colorSpace),oe=s.convert(ye.type),_e=M(ye.internalFormat,Ke,oe,ye.colorSpace,E.isXRRenderTarget===!0),ke=be(E);o.renderbufferStorageMultisample(o.RENDERBUFFER,ke,_e,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+fe,o.RENDERBUFFER,U.__webglColorRenderbuffer[fe])}o.bindRenderbuffer(o.RENDERBUFFER,null),E.depthBuffer&&(U.__webglDepthRenderbuffer=o.createRenderbuffer(),ne(U.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(o.FRAMEBUFFER,null)}}if(J){t.bindTexture(o.TEXTURE_CUBE_MAP,Z.__webglTexture),Be(o.TEXTURE_CUBE_MAP,x);for(let fe=0;fe<6;fe++)if(x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)le(U.__webglFramebuffer[fe][ye],E,x,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ye);else le(U.__webglFramebuffer[fe],E,x,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);m(x)&&p(o.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let fe=0,ye=ie.length;fe<ye;fe++){const Ke=ie[fe],oe=i.get(Ke);t.bindTexture(o.TEXTURE_2D,oe.__webglTexture),Be(o.TEXTURE_2D,Ke),le(U.__webglFramebuffer,E,Ke,o.COLOR_ATTACHMENT0+fe,o.TEXTURE_2D,0),m(Ke)&&p(o.TEXTURE_2D)}t.unbindTexture()}else{let fe=o.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(fe=E.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),t.bindTexture(fe,Z.__webglTexture),Be(fe,x),x.mipmaps&&x.mipmaps.length>0)for(let ye=0;ye<x.mipmaps.length;ye++)le(U.__webglFramebuffer[ye],E,x,o.COLOR_ATTACHMENT0,fe,ye);else le(U.__webglFramebuffer,E,x,o.COLOR_ATTACHMENT0,fe,0);m(x)&&p(fe),t.unbindTexture()}E.depthBuffer&&Le(E)}function De(E){const x=E.textures;for(let U=0,Z=x.length;U<Z;U++){const ie=x[U];if(m(ie)){const J=w(E),Ae=i.get(ie).__webglTexture;t.bindTexture(J,Ae),p(J),t.unbindTexture()}}}const qe=[],D=[];function et(E){if(E.samples>0){if(he(E)===!1){const x=E.textures,U=E.width,Z=E.height;let ie=o.COLOR_BUFFER_BIT;const J=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ae=i.get(E),fe=x.length>1;if(fe)for(let ye=0;ye<x.length;ye++)t.bindFramebuffer(o.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ye,o.RENDERBUFFER,null),t.bindFramebuffer(o.FRAMEBUFFER,Ae.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ye,o.TEXTURE_2D,null,0);t.bindFramebuffer(o.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ye=0;ye<x.length;ye++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ie|=o.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ie|=o.STENCIL_BUFFER_BIT)),fe){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ae.__webglColorRenderbuffer[ye]);const Ke=i.get(x[ye]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ke,0)}o.blitFramebuffer(0,0,U,Z,0,0,U,Z,ie,o.NEAREST),l===!0&&(qe.length=0,D.length=0,qe.push(o.COLOR_ATTACHMENT0+ye),E.depthBuffer&&E.resolveDepthBuffer===!1&&(qe.push(J),D.push(J),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,D)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(o.READ_FRAMEBUFFER,null),t.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),fe)for(let ye=0;ye<x.length;ye++){t.bindFramebuffer(o.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ye,o.RENDERBUFFER,Ae.__webglColorRenderbuffer[ye]);const Ke=i.get(x[ye]).__webglTexture;t.bindFramebuffer(o.FRAMEBUFFER,Ae.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ye,o.TEXTURE_2D,Ke,0)}t.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[x])}}}function be(E){return Math.min(n.maxSamples,E.samples)}function he(E){const x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ee(E){const x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Ze(E,x){const U=E.colorSpace,Z=E.format,ie=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||U!==ns&&U!==Yi&&(Je.getTransfer(U)===ot?(Z!==hi||ie!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function Ce(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=te,this.setTextureCube=W,this.rebindTextures=se,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=De,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=le,this.useMultisampledRTT=he}function Wm(o,e){function t(i,n=Yi){let s;const a=Je.getTransfer(n);if(i===ki)return o.UNSIGNED_BYTE;if(i===Fr)return o.UNSIGNED_SHORT_4_4_4_4;if(i===kr)return o.UNSIGNED_SHORT_5_5_5_1;if(i===sh)return o.UNSIGNED_INT_5_9_9_9_REV;if(i===ih)return o.BYTE;if(i===nh)return o.SHORT;if(i===Ds)return o.UNSIGNED_SHORT;if(i===Br)return o.INT;if(i===xn)return o.UNSIGNED_INT;if(i===Pi)return o.FLOAT;if(i===Di)return o.HALF_FLOAT;if(i===oh)return o.ALPHA;if(i===ah)return o.RGB;if(i===hi)return o.RGBA;if(i===rh)return o.LUMINANCE;if(i===lh)return o.LUMINANCE_ALPHA;if(i===Xn)return o.DEPTH_COMPONENT;if(i===Kn)return o.DEPTH_STENCIL;if(i===ch)return o.RED;if(i===Nr)return o.RED_INTEGER;if(i===hh)return o.RG;if(i===Ur)return o.RG_INTEGER;if(i===Or)return o.RGBA_INTEGER;if(i===wo||i===Mo||i===To||i===So)if(a===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===wo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===wo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===To)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$a||i===Ja||i===Ka||i===Za)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$a)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ka)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Za)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Qa||i===er||i===tr)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Qa||i===er)return a===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===tr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ir||i===nr||i===sr||i===or||i===ar||i===rr||i===lr||i===cr||i===hr||i===dr||i===ur||i===fr||i===pr||i===mr)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ir)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===or)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ar)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ur)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===fr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mr)return a===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Eo||i===gr||i===vr)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Eo)return a===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gr)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vr)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===dh||i===yr||i===_r||i===xr)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===yr)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_r)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xr)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Jn?o.UNSIGNED_INT_24_8:o[i]!==void 0?o[i]:null}return{convert:t}}class Xm extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ge extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jm={type:"move"};class Ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ge,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ge,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ge,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(r.matrix.fromArray(n.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,n.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(n.linearVelocity)):r.hasLinearVelocity=!1,n.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(n.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(jm)))}return r!==null&&(r.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ge;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qm=`
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

}`;class $m{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Ot,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Dt({vertexShader:Ym,fragmentShader:qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new B(new mt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jm extends bn{constructor(e,t){super();const i=this;let n=null,s=1,a=null,r="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new $m,m=t.getContextAttributes();let p=null,w=null;const M=[],y=[],R=new Ne;let C=null;const A=new Nt;A.viewport=new rt;const I=new Nt;I.viewport=new rt;const T=[A,I],b=new Xm;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let X=M[Y];return X===void 0&&(X=new Ma,M[Y]=X),X.getTargetRaySpace()},this.getControllerGrip=function(Y){let X=M[Y];return X===void 0&&(X=new Ma,M[Y]=X),X.getGripSpace()},this.getHand=function(Y){let X=M[Y];return X===void 0&&(X=new Ma,M[Y]=X),X.getHandSpace()};function O(Y){const X=y.indexOf(Y.inputSource);if(X===-1)return;const le=M[X];le!==void 0&&(le.update(Y.inputSource,Y.frame,c||a),le.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){n.removeEventListener("select",O),n.removeEventListener("selectstart",O),n.removeEventListener("selectend",O),n.removeEventListener("squeeze",O),n.removeEventListener("squeezestart",O),n.removeEventListener("squeezeend",O),n.removeEventListener("end",G),n.removeEventListener("inputsourceschange",K);for(let Y=0;Y<M.length;Y++){const X=y[Y];X!==null&&(y[Y]=null,M[Y].disconnect(X))}P=null,z=null,v.reset(),e.setRenderTarget(p),f=null,d=null,u=null,n=null,w=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){r=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(Y){if(n=Y,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",O),n.addEventListener("selectstart",O),n.addEventListener("selectend",O),n.addEventListener("squeeze",O),n.addEventListener("squeezestart",O),n.addEventListener("squeezeend",O),n.addEventListener("end",G),n.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(R),n.renderState.layers===void 0){const X={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(n,t,X),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new ui(f.framebufferWidth,f.framebufferHeight,{format:hi,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let X=null,le=null,ne=null;m.depth&&(ne=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=m.stencil?Kn:Xn,le=m.stencil?Jn:xn);const Pe={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(Pe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new ui(d.textureWidth,d.textureHeight,{format:hi,type:ki,depthTexture:new Eh(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(r),Ue.setContext(n),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(Y){for(let X=0;X<Y.removed.length;X++){const le=Y.removed[X],ne=y.indexOf(le);ne>=0&&(y[ne]=null,M[ne].disconnect(le))}for(let X=0;X<Y.added.length;X++){const le=Y.added[X];let ne=y.indexOf(le);if(ne===-1){for(let Le=0;Le<M.length;Le++)if(Le>=y.length){y.push(le),ne=Le;break}else if(y[Le]===null){y[Le]=le,ne=Le;break}if(ne===-1)break}const Pe=M[ne];Pe&&Pe.connect(le)}}const q=new L,te=new L;function W(Y,X,le){q.setFromMatrixPosition(X.matrixWorld),te.setFromMatrixPosition(le.matrixWorld);const ne=q.distanceTo(te),Pe=X.projectionMatrix.elements,Le=le.projectionMatrix.elements,se=Pe[14]/(Pe[10]-1),Ie=Pe[14]/(Pe[10]+1),De=(Pe[9]+1)/Pe[5],qe=(Pe[9]-1)/Pe[5],D=(Pe[8]-1)/Pe[0],et=(Le[8]+1)/Le[0],be=se*D,he=se*et,Ee=ne/(-D+et),Ze=Ee*-D;if(X.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ze),Y.translateZ(Ee),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Pe[10]===-1)Y.projectionMatrix.copy(X.projectionMatrix),Y.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const Ce=se+Ee,E=Ie+Ee,x=be-Ze,U=he+(ne-Ze),Z=De*Ie/E*Ce,ie=qe*Ie/E*Ce;Y.projectionMatrix.makePerspective(x,U,Z,ie,Ce,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function re(Y,X){X===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(X.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(n===null)return;let X=Y.near,le=Y.far;v.texture!==null&&(v.depthNear>0&&(X=v.depthNear),v.depthFar>0&&(le=v.depthFar)),b.near=I.near=A.near=X,b.far=I.far=A.far=le,(P!==b.near||z!==b.far)&&(n.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,z=b.far),A.layers.mask=Y.layers.mask|2,I.layers.mask=Y.layers.mask|4,b.layers.mask=A.layers.mask|I.layers.mask;const ne=Y.parent,Pe=b.cameras;re(b,ne);for(let Le=0;Le<Pe.length;Le++)re(Pe[Le],ne);Pe.length===2?W(b,A,I):b.projectionMatrix.copy(A.projectionMatrix),de(Y,b,ne)};function de(Y,X,le){le===null?Y.matrix.copy(X.matrixWorld):(Y.matrix.copy(le.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(X.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(X.projectionMatrix),Y.projectionMatrixInverse.copy(X.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=wr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(b)};let ve=null;function Be(Y,X){if(h=X.getViewerPose(c||a),g=X,h!==null){const le=h.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let ne=!1;le.length!==b.cameras.length&&(b.cameras.length=0,ne=!0);for(let Le=0;Le<le.length;Le++){const se=le[Le];let Ie=null;if(f!==null)Ie=f.getViewport(se);else{const qe=u.getViewSubImage(d,se);Ie=qe.viewport,Le===0&&(e.setRenderTargetTextures(w,qe.colorTexture,d.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(w))}let De=T[Le];De===void 0&&(De=new Nt,De.layers.enable(Le),De.viewport=new rt,T[Le]=De),De.matrix.fromArray(se.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(se.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),Le===0&&(b.matrix.copy(De.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ne===!0&&b.cameras.push(De)}const Pe=n.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")){const Le=u.getDepthInformation(le[0]);Le&&Le.isValid&&Le.texture&&v.init(e,Le,n.renderState)}}for(let le=0;le<M.length;le++){const ne=y[le],Pe=M[le];ne!==null&&Pe!==void 0&&Pe.update(ne,X,c||a)}ve&&ve(Y,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),g=null}const Ue=new Sh;Ue.setAnimationLoop(Be),this.setAnimationLoop=function(Y){ve=Y},this.dispose=function(){}}}const on=new Jt,Km=new gt;function Zm(o,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,wh(o)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,w,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?l(m,p,w,M):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Bt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Bt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),M=w.envMap,y=w.envMapRotation;M&&(m.envMap.value=M,on.copy(y),on.x*=-1,on.y*=-1,on.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(on.y*=-1,on.z*=-1),m.envMapRotation.value.setFromMatrix4(Km.makeRotationFromEuler(on)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Bt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function Qm(o,e,t,i){let n={},s={},a=[];const r=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,M){const y=M.program;i.uniformBlockBinding(w,y)}function c(w,M){let y=n[w.id];y===void 0&&(g(w),y=h(w),n[w.id]=y,w.addEventListener("dispose",m));const R=M.program;i.updateUBOMapping(w,R);const C=e.render.frame;s[w.id]!==C&&(d(w),s[w.id]=C)}function h(w){const M=u();w.__bindingPointIndex=M;const y=o.createBuffer(),R=w.__size,C=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,y),o.bufferData(o.UNIFORM_BUFFER,R,C),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,M,y),y}function u(){for(let w=0;w<r;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const M=n[w.id],y=w.uniforms,R=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,M);for(let C=0,A=y.length;C<A;C++){const I=Array.isArray(y[C])?y[C]:[y[C]];for(let T=0,b=I.length;T<b;T++){const P=I[T];if(f(P,C,T,R)===!0){const z=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let K=0;K<O.length;K++){const q=O[K],te=v(q);typeof q=="number"||typeof q=="boolean"?(P.__data[0]=q,o.bufferSubData(o.UNIFORM_BUFFER,z+G,P.__data)):q.isMatrix3?(P.__data[0]=q.elements[0],P.__data[1]=q.elements[1],P.__data[2]=q.elements[2],P.__data[3]=0,P.__data[4]=q.elements[3],P.__data[5]=q.elements[4],P.__data[6]=q.elements[5],P.__data[7]=0,P.__data[8]=q.elements[6],P.__data[9]=q.elements[7],P.__data[10]=q.elements[8],P.__data[11]=0):(q.toArray(P.__data,G),G+=te.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,z,P.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function f(w,M,y,R){const C=w.value,A=M+"_"+y;if(R[A]===void 0)return typeof C=="number"||typeof C=="boolean"?R[A]=C:R[A]=C.clone(),!0;{const I=R[A];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return R[A]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function g(w){const M=w.uniforms;let y=0;const R=16;for(let A=0,I=M.length;A<I;A++){const T=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,P=T.length;b<P;b++){const z=T[b],O=Array.isArray(z.value)?z.value:[z.value];for(let G=0,K=O.length;G<K;G++){const q=O[G],te=v(q),W=y%R,re=W%te.boundary,de=W+re;y+=re,de!==0&&R-de<te.storage&&(y+=R-de),z.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=te.storage}}}const C=y%R;return C>0&&(y+=R-C),w.__size=y,w.__cache={},this}function v(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const y=a.indexOf(M.__bindingPointIndex);a.splice(y,1),o.deleteBuffer(n[M.id]),delete n[M.id],delete s[M.id]}function p(){for(const w in n)o.deleteBuffer(n[w]);a=[],n={},s={}}return{bind:l,update:c,dispose:p}}class Wr{constructor(e={}){const{canvas:t=Hd(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const w=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qt,this.toneMapping=$i,this.toneMappingExposure=1;const y=this;let R=!1,C=0,A=0,I=null,T=-1,b=null;const P=new rt,z=new rt;let O=null;const G=new we(0);let K=0,q=t.width,te=t.height,W=1,re=null,de=null;const ve=new rt(0,0,q,te),Be=new rt(0,0,q,te);let Ue=!1;const Y=new Gr;let X=!1,le=!1;const ne=new gt,Pe=new gt,Le=new L,se=new rt,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function qe(){return I===null?W:1}let D=i;function et(S,k){return t.getContext(S,k)}try{const S={alpha:!0,depth:n,stencil:s,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ir}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",pe,!1),D===null){const k="webgl2";if(D=et(k,S),D===null)throw et(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let be,he,Ee,Ze,Ce,E,x,U,Z,ie,J,Ae,fe,ye,Ke,oe,_e,ke,Oe,xe,$e,Xe,ct,F;function ue(){be=new o0(D),be.init(),Xe=new Wm(D,be),he=new Qp(D,be,e,Xe),Ee=new Gm(D,be),he.reverseDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),Ze=new l0(D),Ce=new Em,E=new Vm(D,be,Ee,Ce,he,Xe,Ze),x=new t0(y),U=new s0(y),Z=new pu(D),ct=new Kp(D,Z),ie=new a0(D,Z,Ze,ct),J=new h0(D,ie,Z,Ze),Oe=new c0(D,he,E),oe=new e0(Ce),Ae=new Sm(y,x,U,be,he,ct,oe),fe=new Zm(y,Ce),ye=new Am,Ke=new Bm(be),ke=new Jp(y,x,U,Ee,J,f,l),_e=new Om(y,J,he),F=new Qm(D,Ze,he,Ee),xe=new Zp(D,be,Ze),$e=new r0(D,be,Ze),Ze.programs=Ae.programs,y.capabilities=he,y.extensions=be,y.properties=Ce,y.renderLists=ye,y.shadowMap=_e,y.state=Ee,y.info=Ze}ue();const j=new Jm(y,D);this.xr=j,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const S=be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(S){S!==void 0&&(W=S,this.setSize(q,te,!1))},this.getSize=function(S){return S.set(q,te)},this.setSize=function(S,k,H=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,te=k,t.width=Math.floor(S*W),t.height=Math.floor(k*W),H===!0&&(t.style.width=S+"px",t.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set(q*W,te*W).floor()},this.setDrawingBufferSize=function(S,k,H){q=S,te=k,W=H,t.width=Math.floor(S*H),t.height=Math.floor(k*H),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(P)},this.getViewport=function(S){return S.copy(ve)},this.setViewport=function(S,k,H,V){S.isVector4?ve.set(S.x,S.y,S.z,S.w):ve.set(S,k,H,V),Ee.viewport(P.copy(ve).multiplyScalar(W).round())},this.getScissor=function(S){return S.copy(Be)},this.setScissor=function(S,k,H,V){S.isVector4?Be.set(S.x,S.y,S.z,S.w):Be.set(S,k,H,V),Ee.scissor(z.copy(Be).multiplyScalar(W).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(S){Ee.setScissorTest(Ue=S)},this.setOpaqueSort=function(S){re=S},this.setTransparentSort=function(S){de=S},this.getClearColor=function(S){return S.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor.apply(ke,arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha.apply(ke,arguments)},this.clear=function(S=!0,k=!0,H=!0){let V=0;if(S){let N=!1;if(I!==null){const ae=I.texture.format;N=ae===Or||ae===Ur||ae===Nr}if(N){const ae=I.texture.type,me=ae===ki||ae===xn||ae===Ds||ae===Jn||ae===Fr||ae===kr,Me=ke.getClearColor(),Te=ke.getClearAlpha(),ze=Me.r,Ve=Me.g,Se=Me.b;me?(g[0]=ze,g[1]=Ve,g[2]=Se,g[3]=Te,D.clearBufferuiv(D.COLOR,0,g)):(v[0]=ze,v[1]=Ve,v[2]=Se,v[3]=Te,D.clearBufferiv(D.COLOR,0,v))}else V|=D.COLOR_BUFFER_BIT}k&&(V|=D.DEPTH_BUFFER_BIT),H&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),ye.dispose(),Ke.dispose(),Ce.dispose(),x.dispose(),U.dispose(),J.dispose(),ct.dispose(),F.dispose(),Ae.dispose(),j.dispose(),j.removeEventListener("sessionstart",ol),j.removeEventListener("sessionend",al),Zi.stop()};function ee(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const S=Ze.autoReset,k=_e.enabled,H=_e.autoUpdate,V=_e.needsUpdate,N=_e.type;ue(),Ze.autoReset=S,_e.enabled=k,_e.autoUpdate=H,_e.needsUpdate=V,_e.type=N}function pe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function He(S){const k=S.target;k.removeEventListener("dispose",He),vt(k)}function vt(S){Pt(S),Ce.remove(S)}function Pt(S){const k=Ce.get(S).programs;k!==void 0&&(k.forEach(function(H){Ae.releaseProgram(H)}),S.isShaderMaterial&&Ae.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,H,V,N,ae){k===null&&(k=Ie);const me=N.isMesh&&N.matrixWorld.determinant()<0,Me=Zh(S,k,H,V,N);Ee.setMaterial(V,me);let Te=H.index,ze=1;if(V.wireframe===!0){if(Te=ie.getWireframeAttribute(H),Te===void 0)return;ze=2}const Ve=H.drawRange,Se=H.attributes.position;let Qe=Ve.start*ze,ht=(Ve.start+Ve.count)*ze;ae!==null&&(Qe=Math.max(Qe,ae.start*ze),ht=Math.min(ht,(ae.start+ae.count)*ze)),Te!==null?(Qe=Math.max(Qe,0),ht=Math.min(ht,Te.count)):Se!=null&&(Qe=Math.max(Qe,0),ht=Math.min(ht,Se.count));const dt=ht-Qe;if(dt<0||dt===1/0)return;ct.setup(N,V,Me,H,Te);let Gt,tt=xe;if(Te!==null&&(Gt=Z.get(Te),tt=$e,tt.setIndex(Gt)),N.isMesh)V.wireframe===!0?(Ee.setLineWidth(V.wireframeLinewidth*qe()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(N.isLine){let Re=V.linewidth;Re===void 0&&(Re=1),Ee.setLineWidth(Re*qe()),N.isLineSegments?tt.setMode(D.LINES):N.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else N.isPoints?tt.setMode(D.POINTS):N.isSprite&&tt.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)tt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))tt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Re=N._multiDrawStarts,bi=N._multiDrawCounts,it=N._multiDrawCount,ii=Te?Z.get(Te).bytesPerElement:1,wn=Ce.get(V).currentProgram.getUniforms();for(let jt=0;jt<it;jt++)wn.setValue(D,"_gl_DrawID",jt),tt.render(Re[jt]/ii,bi[jt])}else if(N.isInstancedMesh)tt.renderInstances(Qe,dt,N.count);else if(H.isInstancedBufferGeometry){const Re=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,bi=Math.min(H.instanceCount,Re);tt.renderInstances(Qe,dt,bi)}else tt.render(Qe,dt)};function nt(S,k,H){S.transparent===!0&&S.side===Ut&&S.forceSinglePass===!1?(S.side=Bt,S.needsUpdate=!0,Xs(S,k,H),S.side=Ji,S.needsUpdate=!0,Xs(S,k,H),S.side=Ut):Xs(S,k,H)}this.compile=function(S,k,H=null){H===null&&(H=S),p=Ke.get(H),p.init(k),M.push(p),H.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),S!==H&&S.traverseVisible(function(N){N.isLight&&N.layers.test(k.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const V=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ae=N.material;if(ae)if(Array.isArray(ae))for(let me=0;me<ae.length;me++){const Me=ae[me];nt(Me,H,N),V.add(Me)}else nt(ae,H,N),V.add(ae)}),M.pop(),p=null,V},this.compileAsync=function(S,k,H=null){const V=this.compile(S,k,H);return new Promise(N=>{function ae(){if(V.forEach(function(me){Ce.get(me).currentProgram.isReady()&&V.delete(me)}),V.size===0){N(S);return}setTimeout(ae,10)}be.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let ti=null;function xi(S){ti&&ti(S)}function ol(){Zi.stop()}function al(){Zi.start()}const Zi=new Sh;Zi.setAnimationLoop(xi),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(S){ti=S,j.setAnimationLoop(S),S===null?Zi.stop():Zi.start()},j.addEventListener("sessionstart",ol),j.addEventListener("sessionend",al),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,k,I),p=Ke.get(S,M.length),p.init(k),M.push(p),Pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Y.setFromProjectionMatrix(Pe),le=this.localClippingEnabled,X=oe.init(this.clippingPlanes,le),m=ye.get(S,w.length),m.init(),w.push(m),j.enabled===!0&&j.isPresenting===!0){const ae=y.xr.getDepthSensingMesh();ae!==null&&jo(ae,k,-1/0,y.sortObjects)}jo(S,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(re,de),De=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,De&&ke.addToRenderList(m,S),this.info.render.frame++,X===!0&&oe.beginShadows();const H=p.state.shadowsArray;_e.render(H,S,k),X===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=m.opaque,N=m.transmissive;if(p.setupLights(),k.isArrayCamera){const ae=k.cameras;if(N.length>0)for(let me=0,Me=ae.length;me<Me;me++){const Te=ae[me];ll(V,N,S,Te)}De&&ke.render(S);for(let me=0,Me=ae.length;me<Me;me++){const Te=ae[me];rl(m,S,Te,Te.viewport)}}else N.length>0&&ll(V,N,S,k),De&&ke.render(S),rl(m,S,k);I!==null&&(E.updateMultisampleRenderTarget(I),E.updateRenderTargetMipmap(I)),S.isScene===!0&&S.onAfterRender(y,S,k),ct.resetDefaultState(),T=-1,b=null,M.pop(),M.length>0?(p=M[M.length-1],X===!0&&oe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function jo(S,k,H,V){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Y.intersectsSprite(S)){V&&se.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Pe);const me=J.update(S),Me=S.material;Me.visible&&m.push(S,me,Me,H,se.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Y.intersectsObject(S))){const me=J.update(S),Me=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),se.copy(S.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),se.copy(me.boundingSphere.center)),se.applyMatrix4(S.matrixWorld).applyMatrix4(Pe)),Array.isArray(Me)){const Te=me.groups;for(let ze=0,Ve=Te.length;ze<Ve;ze++){const Se=Te[ze],Qe=Me[Se.materialIndex];Qe&&Qe.visible&&m.push(S,me,Qe,H,se.z,Se)}}else Me.visible&&m.push(S,me,Me,H,se.z,null)}}const ae=S.children;for(let me=0,Me=ae.length;me<Me;me++)jo(ae[me],k,H,V)}function rl(S,k,H,V){const N=S.opaque,ae=S.transmissive,me=S.transparent;p.setupLightsView(H),X===!0&&oe.setGlobalState(y.clippingPlanes,H),V&&Ee.viewport(P.copy(V)),N.length>0&&Ws(N,k,H),ae.length>0&&Ws(ae,k,H),me.length>0&&Ws(me,k,H),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ll(S,k,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new ui(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float")?Di:ki,minFilter:vn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ae=p.state.transmissionRenderTarget[V.id],me=V.viewport||P;ae.setSize(me.z,me.w);const Me=y.getRenderTarget();y.setRenderTarget(ae),y.getClearColor(G),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),De&&ke.render(H);const Te=y.toneMapping;y.toneMapping=$i;const ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),X===!0&&oe.setGlobalState(y.clippingPlanes,V),Ws(S,H,V),E.updateMultisampleRenderTarget(ae),E.updateRenderTargetMipmap(ae),be.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Se=0,Qe=k.length;Se<Qe;Se++){const ht=k[Se],dt=ht.object,Gt=ht.geometry,tt=ht.material,Re=ht.group;if(tt.side===Ut&&dt.layers.test(V.layers)){const bi=tt.side;tt.side=Bt,tt.needsUpdate=!0,cl(dt,H,V,Gt,tt,Re),tt.side=bi,tt.needsUpdate=!0,Ve=!0}}Ve===!0&&(E.updateMultisampleRenderTarget(ae),E.updateRenderTargetMipmap(ae))}y.setRenderTarget(Me),y.setClearColor(G,K),ze!==void 0&&(V.viewport=ze),y.toneMapping=Te}function Ws(S,k,H){const V=k.isScene===!0?k.overrideMaterial:null;for(let N=0,ae=S.length;N<ae;N++){const me=S[N],Me=me.object,Te=me.geometry,ze=V===null?me.material:V,Ve=me.group;Me.layers.test(H.layers)&&cl(Me,k,H,Te,ze,Ve)}}function cl(S,k,H,V,N,ae){S.onBeforeRender(y,k,H,V,N,ae),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(y,k,H,V,S,ae),N.transparent===!0&&N.side===Ut&&N.forceSinglePass===!1?(N.side=Bt,N.needsUpdate=!0,y.renderBufferDirect(H,k,V,N,S,ae),N.side=Ji,N.needsUpdate=!0,y.renderBufferDirect(H,k,V,N,S,ae),N.side=Ut):y.renderBufferDirect(H,k,V,N,S,ae),S.onAfterRender(y,k,H,V,N,ae)}function Xs(S,k,H){k.isScene!==!0&&(k=Ie);const V=Ce.get(S),N=p.state.lights,ae=p.state.shadowsArray,me=N.state.version,Me=Ae.getParameters(S,N.state,ae,k,H),Te=Ae.getProgramCacheKey(Me);let ze=V.programs;V.environment=S.isMeshStandardMaterial?k.environment:null,V.fog=k.fog,V.envMap=(S.isMeshStandardMaterial?U:x).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,ze===void 0&&(S.addEventListener("dispose",He),ze=new Map,V.programs=ze);let Ve=ze.get(Te);if(Ve!==void 0){if(V.currentProgram===Ve&&V.lightsStateVersion===me)return dl(S,Me),Ve}else Me.uniforms=Ae.getUniforms(S),S.onBeforeCompile(Me,y),Ve=Ae.acquireProgram(Me,Te),ze.set(Te,Ve),V.uniforms=Me.uniforms;const Se=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Se.clippingPlanes=oe.uniform),dl(S,Me),V.needsLights=ed(S),V.lightsStateVersion=me,V.needsLights&&(Se.ambientLightColor.value=N.state.ambient,Se.lightProbe.value=N.state.probe,Se.directionalLights.value=N.state.directional,Se.directionalLightShadows.value=N.state.directionalShadow,Se.spotLights.value=N.state.spot,Se.spotLightShadows.value=N.state.spotShadow,Se.rectAreaLights.value=N.state.rectArea,Se.ltc_1.value=N.state.rectAreaLTC1,Se.ltc_2.value=N.state.rectAreaLTC2,Se.pointLights.value=N.state.point,Se.pointLightShadows.value=N.state.pointShadow,Se.hemisphereLights.value=N.state.hemi,Se.directionalShadowMap.value=N.state.directionalShadowMap,Se.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Se.spotShadowMap.value=N.state.spotShadowMap,Se.spotLightMatrix.value=N.state.spotLightMatrix,Se.spotLightMap.value=N.state.spotLightMap,Se.pointShadowMap.value=N.state.pointShadowMap,Se.pointShadowMatrix.value=N.state.pointShadowMatrix),V.currentProgram=Ve,V.uniformsList=null,Ve}function hl(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=Co.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function dl(S,k){const H=Ce.get(S);H.outputColorSpace=k.outputColorSpace,H.batching=k.batching,H.batchingColor=k.batchingColor,H.instancing=k.instancing,H.instancingColor=k.instancingColor,H.instancingMorph=k.instancingMorph,H.skinning=k.skinning,H.morphTargets=k.morphTargets,H.morphNormals=k.morphNormals,H.morphColors=k.morphColors,H.morphTargetsCount=k.morphTargetsCount,H.numClippingPlanes=k.numClippingPlanes,H.numIntersection=k.numClipIntersection,H.vertexAlphas=k.vertexAlphas,H.vertexTangents=k.vertexTangents,H.toneMapping=k.toneMapping}function Zh(S,k,H,V,N){k.isScene!==!0&&(k=Ie),E.resetTextureUnits();const ae=k.fog,me=V.isMeshStandardMaterial?k.environment:null,Me=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ns,Te=(V.isMeshStandardMaterial?U:x).get(V.envMap||me),ze=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ve=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!H.morphAttributes.position,Qe=!!H.morphAttributes.normal,ht=!!H.morphAttributes.color;let dt=$i;V.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(dt=y.toneMapping);const Gt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,tt=Gt!==void 0?Gt.length:0,Re=Ce.get(V),bi=p.state.lights;if(X===!0&&(le===!0||S!==b)){const Kt=S===b&&V.id===T;oe.setState(V,S,Kt)}let it=!1;V.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==bi.state.version||Re.outputColorSpace!==Me||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==Te||V.fog===!0&&Re.fog!==ae||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==oe.numPlanes||Re.numIntersection!==oe.numIntersection)||Re.vertexAlphas!==ze||Re.vertexTangents!==Ve||Re.morphTargets!==Se||Re.morphNormals!==Qe||Re.morphColors!==ht||Re.toneMapping!==dt||Re.morphTargetsCount!==tt)&&(it=!0):(it=!0,Re.__version=V.version);let ii=Re.currentProgram;it===!0&&(ii=Xs(V,k,N));let wn=!1,jt=!1,hs=!1;const ut=ii.getUniforms(),pi=Re.uniforms;if(Ee.useProgram(ii.program)&&(wn=!0,jt=!0,hs=!0),V.id!==T&&(T=V.id,jt=!0),wn||b!==S){Ee.buffers.depth.getReversed()?(ne.copy(S.projectionMatrix),Wd(ne),Xd(ne),ut.setValue(D,"projectionMatrix",ne)):ut.setValue(D,"projectionMatrix",S.projectionMatrix),ut.setValue(D,"viewMatrix",S.matrixWorldInverse);const Ui=ut.map.cameraPosition;Ui!==void 0&&Ui.setValue(D,Le.setFromMatrixPosition(S.matrixWorld)),he.logarithmicDepthBuffer&&ut.setValue(D,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ut.setValue(D,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,jt=!0,hs=!0)}if(N.isSkinnedMesh){ut.setOptional(D,N,"bindMatrix"),ut.setOptional(D,N,"bindMatrixInverse");const Kt=N.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),ut.setValue(D,"boneTexture",Kt.boneTexture,E))}N.isBatchedMesh&&(ut.setOptional(D,N,"batchingTexture"),ut.setValue(D,"batchingTexture",N._matricesTexture,E),ut.setOptional(D,N,"batchingIdTexture"),ut.setValue(D,"batchingIdTexture",N._indirectTexture,E),ut.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&ut.setValue(D,"batchingColorTexture",N._colorsTexture,E));const ds=H.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&Oe.update(N,H,ii),(jt||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,ut.setValue(D,"receiveShadow",N.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(pi.envMap.value=Te,pi.flipEnvMap.value=Te.isCubeTexture&&Te.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&k.environment!==null&&(pi.envMapIntensity.value=k.environmentIntensity),jt&&(ut.setValue(D,"toneMappingExposure",y.toneMappingExposure),Re.needsLights&&Qh(pi,hs),ae&&V.fog===!0&&fe.refreshFogUniforms(pi,ae),fe.refreshMaterialUniforms(pi,V,W,te,p.state.transmissionRenderTarget[S.id]),Co.upload(D,hl(Re),pi,E)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Co.upload(D,hl(Re),pi,E),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ut.setValue(D,"center",N.center),ut.setValue(D,"modelViewMatrix",N.modelViewMatrix),ut.setValue(D,"normalMatrix",N.normalMatrix),ut.setValue(D,"modelMatrix",N.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Kt=V.uniformsGroups;for(let Ui=0,Oi=Kt.length;Ui<Oi;Ui++){const ul=Kt[Ui];F.update(ul,ii),F.bind(ul,ii)}}return ii}function Qh(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function ed(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(S,k,H){Ce.get(S.texture).__webglTexture=k,Ce.get(S.depthTexture).__webglTexture=H;const V=Ce.get(S);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,k){const H=Ce.get(S);H.__webglFramebuffer=k,H.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,H=0){I=S,C=k,A=H;let V=!0,N=null,ae=!1,me=!1;if(S){const Te=Ce.get(S);if(Te.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(D.FRAMEBUFFER,null),V=!1;else if(Te.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(Te.__hasExternalTextures)E.rebindTextures(S,Ce.get(S.texture).__webglTexture,Ce.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Se=S.depthTexture;if(Te.__boundDepthTexture!==Se){if(Se!==null&&Ce.has(Se)&&(S.width!==Se.image.width||S.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(me=!0);const Ve=Ce.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?N=Ve[k][H]:N=Ve[k],ae=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?N=Ce.get(S).__webglMultisampledFramebuffer:Array.isArray(Ve)?N=Ve[H]:N=Ve,P.copy(S.viewport),z.copy(S.scissor),O=S.scissorTest}else P.copy(ve).multiplyScalar(W).floor(),z.copy(Be).multiplyScalar(W).floor(),O=Ue;if(Ee.bindFramebuffer(D.FRAMEBUFFER,N)&&V&&Ee.drawBuffers(S,N),Ee.viewport(P),Ee.scissor(z),Ee.setScissorTest(O),ae){const Te=Ce.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Te.__webglTexture,H)}else if(me){const Te=Ce.get(S.texture),ze=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Te.__webglTexture,H||0,ze)}T=-1},this.readRenderTargetPixels=function(S,k,H,V,N,ae,me){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){Ee.bindFramebuffer(D.FRAMEBUFFER,Me);try{const Te=S.texture,ze=Te.format,Ve=Te.type;if(!he.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-V&&H>=0&&H<=S.height-N&&D.readPixels(k,H,V,N,Xe.convert(ze),Xe.convert(Ve),ae)}finally{const Te=I!==null?Ce.get(I).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(S,k,H,V,N,ae,me){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(Me=Me[me]),Me){const Te=S.texture,ze=Te.format,Ve=Te.type;if(!he.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=S.width-V&&H>=0&&H<=S.height-N){Ee.bindFramebuffer(D.FRAMEBUFFER,Me);const Se=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.bufferData(D.PIXEL_PACK_BUFFER,ae.byteLength,D.STREAM_READ),D.readPixels(k,H,V,N,Xe.convert(ze),Xe.convert(Ve),0);const Qe=I!==null?Ce.get(I).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Qe);const ht=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Vd(D,ht,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Se),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ae),D.deleteBuffer(Se),D.deleteSync(ht),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,k=null,H=0){S.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1]);const V=Math.pow(2,-H),N=Math.floor(S.image.width*V),ae=Math.floor(S.image.height*V),me=k!==null?k.x:0,Me=k!==null?k.y:0;E.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,me,Me,N,ae),Ee.unbindTexture()},this.copyTextureToTexture=function(S,k,H=null,V=null,N=0){S.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,S=arguments[1],k=arguments[2],N=arguments[3]||0,H=null);let ae,me,Me,Te,ze,Ve,Se,Qe,ht;const dt=S.isCompressedTexture?S.mipmaps[N]:S.image;H!==null?(ae=H.max.x-H.min.x,me=H.max.y-H.min.y,Me=H.isBox3?H.max.z-H.min.z:1,Te=H.min.x,ze=H.min.y,Ve=H.isBox3?H.min.z:0):(ae=dt.width,me=dt.height,Me=dt.depth||1,Te=0,ze=0,Ve=0),V!==null?(Se=V.x,Qe=V.y,ht=V.z):(Se=0,Qe=0,ht=0);const Gt=Xe.convert(k.format),tt=Xe.convert(k.type);let Re;k.isData3DTexture?(E.setTexture3D(k,0),Re=D.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(E.setTexture2DArray(k,0),Re=D.TEXTURE_2D_ARRAY):(E.setTexture2D(k,0),Re=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const bi=D.getParameter(D.UNPACK_ROW_LENGTH),it=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ii=D.getParameter(D.UNPACK_SKIP_PIXELS),wn=D.getParameter(D.UNPACK_SKIP_ROWS),jt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,dt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),D.pixelStorei(D.UNPACK_SKIP_ROWS,ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ve);const hs=S.isDataArrayTexture||S.isData3DTexture,ut=k.isDataArrayTexture||k.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const pi=Ce.get(S),ds=Ce.get(k),Kt=Ce.get(pi.__renderTarget),Ui=Ce.get(ds.__renderTarget);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,Kt.__webglFramebuffer),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Oi=0;Oi<Me;Oi++)hs&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.get(S).__webglTexture,N,Ve+Oi),S.isDepthTexture?(ut&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ce.get(k).__webglTexture,N,ht+Oi),D.blitFramebuffer(Te,ze,ae,me,Se,Qe,ae,me,D.DEPTH_BUFFER_BIT,D.NEAREST)):ut?D.copyTexSubImage3D(Re,N,Se,Qe,ht+Oi,Te,ze,ae,me):D.copyTexSubImage2D(Re,N,Se,Qe,ht+Oi,Te,ze,ae,me);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ut?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(Re,N,Se,Qe,ht,ae,me,Me,Gt,tt,dt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,N,Se,Qe,ht,ae,me,Me,Gt,dt.data):D.texSubImage3D(Re,N,Se,Qe,ht,ae,me,Me,Gt,tt,dt):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,N,Se,Qe,ae,me,Gt,tt,dt.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,N,Se,Qe,dt.width,dt.height,Gt,dt.data):D.texSubImage2D(D.TEXTURE_2D,N,Se,Qe,ae,me,Gt,tt,dt);D.pixelStorei(D.UNPACK_ROW_LENGTH,bi),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,it),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ii),D.pixelStorei(D.UNPACK_SKIP_ROWS,wn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,jt),N===0&&k.generateMipmaps&&D.generateMipmap(Re),Ee.unbindTexture()},this.copyTextureToTexture3D=function(S,k,H=null,V=null,N=0){return S.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,S=arguments[2],k=arguments[3],N=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,k,H,V,N)},this.initRenderTarget=function(S){Ce.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),Ee.unbindTexture()},this.resetState=function(){C=0,A=0,I=null,Ee.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class Vo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new we(e),this.density=t}clone(){return new Vo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Xr extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ai extends Mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ih extends os{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Bo=new L,Fo=new L,hc=new gt,vs=new vh,po=new Go,Ta=new L,dc=new L;class eg extends Mt{constructor(e=new Ft,t=new Ih){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)Bo.fromBufferAttribute(t,n-1),Fo.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Bo.distanceTo(Fo);e.setAttribute("lineDistance",new lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(n),po.radius+=s,e.ray.intersectsSphere(po)===!1)return;hc.copy(n).invert(),vs.copy(e.ray).applyMatrix4(hc);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=h.getX(v),w=h.getX(v+1),M=mo(this,e,vs,l,p,w);M&&t.push(M)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),p=mo(this,e,vs,l,v,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){const p=mo(this,e,vs,l,v,v+1);p&&t.push(p)}if(this.isLineLoop){const v=mo(this,e,vs,l,g-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const r=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function mo(o,e,t,i,n,s){const a=o.geometry.attributes.position;if(Bo.fromBufferAttribute(a,n),Fo.fromBufferAttribute(a,s),t.distanceSqToSegment(Bo,Fo,Ta,dc)>i)return;Ta.applyMatrix4(o.matrixWorld);const l=e.ray.origin.distanceTo(Ta);if(!(l<e.near||l>e.far))return{distance:l,point:dc.clone().applyMatrix4(o.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:o}}class zs extends Ot{constructor(e,t,i,n,s,a,r,l,c){super(e,t,i,n,s,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class jr extends Ft{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const s=[],a=[],r=[],l=[],c=new L,h=new Ne;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=i+u/t*n;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),r.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(r,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Ye extends Ft{constructor(e=1,t=1,i=1,n=32,s=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:r,thetaLength:l};const c=this;n=Math.floor(n),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=i/2;let p=0;w(),a===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function w(){const y=new L,R=new L;let C=0;const A=(t-e)/i;for(let I=0;I<=s;I++){const T=[],b=I/s,P=b*(t-e)+e;for(let z=0;z<=n;z++){const O=z/n,G=O*l+r,K=Math.sin(G),q=Math.cos(G);R.x=P*K,R.y=-b*i+m,R.z=P*q,u.push(R.x,R.y,R.z),y.set(K,A,q).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-b),T.push(g++)}v.push(T)}for(let I=0;I<n;I++)for(let T=0;T<s;T++){const b=v[T][I],P=v[T+1][I],z=v[T+1][I+1],O=v[T][I+1];(e>0||T!==0)&&(h.push(b,P,O),C+=3),(t>0||T!==s-1)&&(h.push(P,z,O),C+=3)}c.addGroup(p,C,0),p+=C}function M(y){const R=g,C=new Ne,A=new L;let I=0;const T=y===!0?e:t,b=y===!0?1:-1;for(let z=1;z<=n;z++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),g++;const P=g;for(let z=0;z<=n;z++){const G=z/n*l+r,K=Math.cos(G),q=Math.sin(G);A.x=T*q,A.y=m*b,A.z=T*K,u.push(A.x,A.y,A.z),d.push(0,b,0),C.x=K*.5+.5,C.y=q*.5*b+.5,f.push(C.x,C.y),g++}for(let z=0;z<n;z++){const O=R+z,G=P+z;y===!0?h.push(G,G+1,O):h.push(G+1,G,O),I+=3}c.addGroup(p,I,y===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ye(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class qi extends Ye{constructor(e=1,t=1,i=32,n=1,s=!1,a=0,r=Math.PI*2){super(0,e,t,i,n,s,a,r),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:r}}static fromJSON(e){return new qi(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Yr extends Ft{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const s=[],a=[];r(n),c(i),h(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function r(w){const M=new L,y=new L,R=new L;for(let C=0;C<t.length;C+=3)f(t[C+0],M),f(t[C+1],y),f(t[C+2],R),l(M,y,R,w)}function l(w,M,y,R){const C=R+1,A=[];for(let I=0;I<=C;I++){A[I]=[];const T=w.clone().lerp(y,I/C),b=M.clone().lerp(y,I/C),P=C-I;for(let z=0;z<=P;z++)z===0&&I===C?A[I][z]=T:A[I][z]=T.clone().lerp(b,z/P)}for(let I=0;I<C;I++)for(let T=0;T<2*(C-I)-1;T++){const b=Math.floor(T/2);T%2===0?(d(A[I][b+1]),d(A[I+1][b]),d(A[I][b])):(d(A[I][b+1]),d(A[I+1][b+1]),d(A[I+1][b]))}}function c(w){const M=new L;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(w),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function h(){const w=new L;for(let M=0;M<s.length;M+=3){w.x=s[M+0],w.y=s[M+1],w.z=s[M+2];const y=m(w)/2/Math.PI+.5,R=p(w)/Math.PI+.5;a.push(y,1-R)}g(),u()}function u(){for(let w=0;w<a.length;w+=6){const M=a[w+0],y=a[w+2],R=a[w+4],C=Math.max(M,y,R),A=Math.min(M,y,R);C>.9&&A<.1&&(M<.2&&(a[w+0]+=1),y<.2&&(a[w+2]+=1),R<.2&&(a[w+4]+=1))}}function d(w){s.push(w.x,w.y,w.z)}function f(w,M){const y=w*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){const w=new L,M=new L,y=new L,R=new L,C=new Ne,A=new Ne,I=new Ne;for(let T=0,b=0;T<s.length;T+=9,b+=6){w.set(s[T+0],s[T+1],s[T+2]),M.set(s[T+3],s[T+4],s[T+5]),y.set(s[T+6],s[T+7],s[T+8]),C.set(a[b+0],a[b+1]),A.set(a[b+2],a[b+3]),I.set(a[b+4],a[b+5]),R.copy(w).add(M).add(y).divideScalar(3);const P=m(R);v(C,b+0,w,P),v(A,b+2,M,P),v(I,b+4,y,P)}}function v(w,M,y,R){R<0&&w.x===1&&(a[M]=w.x-1),y.x===0&&y.z===0&&(a[M]=R/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.vertices,e.indices,e.radius,e.details)}}class qr extends Yr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new qr(e.radius,e.detail)}}class Ki extends Ft{constructor(e=.5,t=1,i=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:s,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const r=[],l=[],c=[],h=[];let u=e;const d=(t-e)/n,f=new L,g=new Ne;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const p=s+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<n;v++){const m=v*(i+1);for(let p=0;p<i;p++){const w=p+m,M=w,y=w+i+1,R=w+i+2,C=w+1;r.push(M,y,C),r.push(y,R,C)}}this.setIndex(r),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ft extends Ft{constructor(e=1,t=32,i=16,n=0,s=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:s,thetaStart:a,thetaLength:r},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+r,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const w=[],M=p/i;let y=0;p===0&&a===0?y=.5/t:p===i&&l===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const C=R/t;u.x=-e*Math.cos(n+C*s)*Math.sin(a+M*r),u.y=e*Math.cos(a+M*r),u.z=e*Math.sin(n+C*s)*Math.sin(a+M*r),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(C+y,1-M),w.push(c++)}h.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){const M=h[p][w+1],y=h[p][w],R=h[p+1][w],C=h[p+1][w+1];(p!==0||a>0)&&f.push(M,y,C),(p!==i-1||l<Math.PI)&&f.push(y,R,C)}this.setIndex(f),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(v,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ft(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wo extends Ft{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const a=[],r=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=i;f++)for(let g=0;g<=n;g++){const v=g/n*s,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),r.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=n;g++){const v=(n+1)*f+g-1,m=(n+1)*(f-1)+g-1,p=(n+1)*(f-1)+g,w=(n+1)*f+g;a.push(v,m,w),a.push(m,p,w)}this.setIndex(a),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class tg extends Dt{static get type(){return"RawShaderMaterial"}constructor(e){super(e),this.isRawShaderMaterial=!0}}class $ extends os{static get type(){return"MeshLambertMaterial"}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uh,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=Lr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function go(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function ig(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function ng(o){function e(n,s){return o[n]-o[s]}const t=o.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function uc(o,e,t){const i=o.length,n=new o.constructor(i);for(let s=0,a=0;a!==i;++s){const r=t[s]*e;for(let l=0;l!==e;++l)n[a++]=o[r+l]}return n}function Lh(o,e,t,i){let n=1,s=o[0];for(;s!==void 0&&s[i]===void 0;)s=o[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=o[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=o[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=o[n++];while(s!==void 0)}class Xo{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let r=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===r)break;if(s=n,n=t[++i],e<n)break t}a=t.length;break i}if(!(e>=s)){const r=t[1];e<r&&(i=2,s=r);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}a=i,i=0;break i}break e}for(;i<a;){const r=i+a>>>1;e<t[r]?a=r:i=r+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class sg extends Xo{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zn,endingEnd:zn}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,a=e+1,r=n[s],l=n[a];if(r===void 0)switch(this.getSettings_().endingStart){case Gn:s=e,r=2*t-i;break;case Io:s=n.length-2,r=t+n[s]-n[s+1];break;default:s=e,r=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Gn:a=e,l=2*i-t;break;case Io:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-r),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,w=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,M=(-1-f)*m+(1.5+f)*v+.5*g,y=f*m-f*v;for(let R=0;R!==r;++R)s[R]=p*a[h+R]+w*a[c+R]+M*a[l+R]+y*a[u+R];return s}}class Dh extends Xo{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=e*r,c=l-r,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==r;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class og extends Xo{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class _i{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=go(t,this.TimeBufferType),this.values=go(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:go(e.times,Array),values:go(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new og(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Dh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new sg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Po:t=this.InterpolantFactoryMethodDiscrete;break;case br:t=this.InterpolantFactoryMethodLinear;break;case qo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return br;case this.InterpolantFactoryMethodSmooth:return qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const r=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*r,a*r)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let r=0;r!==s;r++){const l=i[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,a),e=!1;break}a=l}if(n!==void 0&&ig(n))for(let r=0,l=n.length;r!==l;++r){const c=n[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===qo,s=e.length-1;let a=1;for(let r=1;r<s;++r){let l=!1;const c=e[r],h=e[r+1];if(c!==h&&(r!==1||c!==e[0]))if(n)l=!0;else{const u=r*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){const v=t[u+g];if(v!==t[d+g]||v!==t[f+g]){l=!0;break}}}if(l){if(r!==a){e[a]=e[r];const u=r*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(s>0){e[a]=e[s];for(let r=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[r+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=br;class rs extends _i{constructor(e,t,i){super(e,t,i)}}rs.prototype.ValueTypeName="bool";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Po;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class Bh extends _i{}Bh.prototype.ValueTypeName="color";class ko extends _i{}ko.prototype.ValueTypeName="number";class ag extends Xo{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=(i-t)/(n-t);let c=e*r;for(let h=c+r;c!==h;c+=4)ei.slerpFlat(s,0,a,c-r,a,c,l);return s}}class _t extends _i{InterpolantFactoryMethodLinear(e){return new ag(this.times,this.values,this.getValueSize(),e)}}_t.prototype.ValueTypeName="quaternion";_t.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends _i{constructor(e,t,i){super(e,t,i)}}ls.prototype.ValueTypeName="string";ls.prototype.ValueBufferType=Array;ls.prototype.DefaultInterpolation=Po;ls.prototype.InterpolantFactoryMethodLinear=void 0;ls.prototype.InterpolantFactoryMethodSmooth=void 0;class yn extends _i{}yn.prototype.ValueTypeName="vector";class As{constructor(e="",t=-1,i=[],n=zr){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=ss(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,r=i.length;a!==r;++a)t.push(lg(i[a]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(_i.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,a=[];for(let r=0;r<s;r++){let l=[],c=[];l.push((r+s-1)%s,r,(r+1)%s),c.push(0,1,0);const h=ng(l);l=uc(l,1,h),c=uc(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ko(".morphTargetInfluences["+t[r].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let r=0,l=e.length;r<l;r++){const c=e[r],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const a=[];for(const r in n)a.push(this.CreateFromMorphTargetSequence(r,n[r],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,g,v){if(f.length!==0){const m=[],p=[];Lh(f,m,p,g),m.length!==0&&v.push(new u(d,m,p))}},n=[],s=e.name||"default",a=e.fps||30,r=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)f[d[g].morphTargets[v]]=-1;for(const v in f){const m=[],p=[];for(let w=0;w!==d[g].morphTargets.length;++w){const M=d[g];m.push(M.time),p.push(M.morphTarget===v?1:0)}n.push(new ko(".morphTargetInfluence["+v+"]",m,p))}l=f.length*a}else{const f=".bones["+t[u].name+"]";i(yn,f+".position",d,"pos",n),i(_t,f+".quaternion",d,"rot",n),i(yn,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,r)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function rg(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ko;case"vector":case"vector2":case"vector3":case"vector4":return yn;case"color":return Bh;case"quaternion":return _t;case"bool":case"boolean":return rs;case"string":return ls}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function lg(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=rg(o.type);if(o.times===void 0){const t=[],i=[];Lh(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}class Gs extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class cg extends Gs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new we(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Sa=new gt,fc=new L,pc=new L;class Fh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gr,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;fc.setFromMatrixPosition(e.matrixWorld),t.position.copy(fc),pc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pc),t.updateMatrixWorld(),Sa.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Sa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mc=new gt,ys=new L,Ea=new L;class hg extends Fh{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ys.setFromMatrixPosition(e.matrixWorld),i.position.copy(ys),Ea.copy(i.position),Ea.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ea),i.updateMatrixWorld(),n.makeTranslation(-ys.x,-ys.y,-ys.z),mc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc)}}class kh extends Gs{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new hg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class dg extends Fh{constructor(){super(new Hr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Qn extends Gs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new dg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $r extends Gs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ug{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=gc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=gc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function gc(){return performance.now()}class fg{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,a;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let a=this.cumulativeWeight;if(a===0){for(let r=0;r!==n;++r)i[s+r]=i[r];a=t}else{a+=t;const r=t/a;this._mixBufferRegion(i,s,0,r,n)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,r=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){r.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,a=n;s!==a;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let a=0;a!==s;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){ei.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const a=this._workIndex*s;ei.multiplyQuaternionsFlat(e,a,e,t,e,i),ei.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,s){const a=1-n;for(let r=0;r!==s;++r){const l=t+r;e[l]=e[l]*a+e[i+r]*n}}_lerpAdditive(e,t,i,n,s){for(let a=0;a!==s;++a){const r=t+a;e[r]=e[r]+e[i+a]*n}}}const Jr="\\[\\]\\.:\\/",pg=new RegExp("["+Jr+"]","g"),Kr="[^"+Jr+"]",mg="[^"+Jr.replace("\\.","")+"]",gg=/((?:WC+[\/:])*)/.source.replace("WC",Kr),vg=/(WCOD+)?/.source.replace("WCOD",mg),yg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Kr),_g=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Kr),xg=new RegExp("^"+gg+vg+yg+_g+"$"),bg=["material","materials","bones","map"];class wg{constructor(e,t,i){const n=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class at{constructor(e,t,i){this.path=t,this.parsedPath=i||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,i):new at(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pg,"")}static parseTrackName(e){const t=xg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);bg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const r=s[a];if(r.name===t||r.uuid===t)return r;const l=i(r.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let r=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=wg;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Mg{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,a=s.length,r=new Array(a),l={endingStart:zn,endingEnd:zn};for(let c=0;c!==a;++c){const h=s[c].createInterpolant(null);r[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=r,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ad,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,s=e._clip.duration,a=s/n,r=n/s;e.warp(1,a,t),this.warp(r,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,a=this.timeScale;let r=this._timeScaleInterpolant;r===null&&(r=n._lendControlInterpolant(),this._timeScaleInterpolant=r);const l=r.parameterPositions,c=r.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),r=this._updateWeight(e);if(r>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Pd:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(r);break;case zr:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,r)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const a=i===Rd;if(e===0)return s===-1?n:a&&(s&1)===1?t-n:n;if(i===Cd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){const r=Math.floor(n/t);n-=t*r,s+=Math.abs(r);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:r})}}else this.time=n;if(a&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=Gn,n.endingEnd=Gn):(e?n.endingStart=this.zeroSlopeAtStart?Gn:zn:n.endingStart=Io,t?n.endingEnd=this.zeroSlopeAtEnd?Gn:zn:n.endingEnd=Io)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const r=a.parameterPositions,l=a.sampleValues;return r[0]=s,l[0]=t,r[1]=s+e,l[1]=i,this}}const Tg=new Float32Array(1);class Sg extends bn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,a=e._propertyBindings,r=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=n[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;g=new fg(at.create(i,f,v),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[u]=g}r[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const r=a.knownActions;e._byClipCacheIndex=r.length,r.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,r=a[s],l=r.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=r.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,s=this._bindings;let a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,a=this._bindingsByRootAndName,r=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete r[s],Object.keys(r).length===0&&delete a[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Dh(new Float32Array(2),new Float32Array(2),1,Tg),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const n=t||this._root,s=n.uuid;let a=typeof e=="string"?As.findByName(n,e):e;const r=a!==null?a.uuid:e,l=this._actionsByClip[r];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=zr),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Mg(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,r,s),h}existingAction(e,t){const i=t||this._root,n=i.uuid,s=typeof e=="string"?As.findByName(i,e):e,a=s?s.uuid:e,r=this._actionsByClip[a];return r!==void 0&&r.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,a);const r=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)r[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const a=s.knownActions;for(let r=0,l=a.length;r!==l;++r){const c=a[r];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const r=i[a].actionByRoot,l=r[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(const a in s){const r=s[a];r.restoreOriginalState(),this._removeInactiveBinding(r)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ir}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ir);const Nh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class cs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Eg=new Hr(-1,1,1,-1,0,1);class Cg extends Ft{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}}const Ag=new Cg;class Zr{constructor(e){this._mesh=new B(Ag,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Eg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Rg extends cs{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Dt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Bs.clone(e.uniforms),this.material=new Dt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Zr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vc extends cs{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(r),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Pg extends cs{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ig{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ne);this._width=i.width,this._height=i.height,t=new ui(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Di}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rg(Nh),this.copyPass.material.blending=Li,this.clock=new ug}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}vc!==void 0&&(a instanceof vc?i=!0:a instanceof Pg&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Lg extends cs{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new we}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}}const Dg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new we(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class es extends cs{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Ne(e.x,e.y):new Ne(256,256),this.clearColor=new we(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ui(s,a,{type:Di}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new ui(s,a,{type:Di});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new ui(s,a,{type:Di});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const r=Dg;this.highPassUniforms=Bs.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Dt({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ne(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Nh;this.copyUniforms=Bs.clone(h.uniforms),this.blendMaterial=new Dt({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Fa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new we,this.oldClearAlpha=1,this.basic=new zt,this.fsQuad=new Zr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Ne(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=es.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=es.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new Dt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ne(.5,.5)},direction:{value:new Ne(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}es.BlurDirectionX=new Ne(1,0);es.BlurDirectionY=new Ne(0,1);const Bg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Fg extends cs{constructor(){super();const e=Bg;this.uniforms=Bs.clone(e.uniforms),this.material=new tg({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Zr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Jc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Kc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Dr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===eh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const _s={fov:35,height:38,rotationSmoothing:.06,positionSmoothing:.1,lookAheadDistance:6};class kg{constructor(){_(this,"camera");_(this,"targetPos",new L);_(this,"cameraAngle",0);this.camera=new Nt(_s.fov,window.innerWidth/window.innerHeight,5,800)}follow(e,t,i){let n=i-this.cameraAngle;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;this.cameraAngle+=n*_s.rotationSmoothing;const s=Math.sin(this.cameraAngle)*-28,a=-Math.cos(this.cameraAngle)*-28;this.targetPos.set(e.x+s,e.y+_s.height,e.z+a),this.camera.position.lerp(this.targetPos,_s.positionSmoothing);const l=t.length()>.5?t.clone().normalize().multiplyScalar(_s.lookAheadDistance):new L(0,0,0),c=e.clone().add(l);c.y+=2,this.camera.lookAt(c)}}class Ng{constructor(){_(this,"boxes",[])}addBox(e,t,i,n){this.boxes.push({cx:e,cz:t,hw:i,hd:n})}resolveCircle(e,t,i){let n=e,s=t;for(const a of this.boxes){const r=a.hw+i,l=a.hd+i,c=n-a.cx,h=s-a.cz;if(Math.abs(c)<r&&Math.abs(h)<l){const u=r-Math.abs(c),d=l-Math.abs(h);u<d?n+=c<0?-u:u:s+=h<0?-d:d}}return{x:n,z:s}}}let Tr=null,Fs=null;async function Ug(){async function e(t){const i=new Image;return new Promise(n=>{i.onload=()=>n(i.naturalWidth>0?i:null),i.onerror=()=>{console.warn("[LogoLoader] failed:",t),n(null)},i.src=t})}[Tr,Fs]=await Promise.all([e("./tem-logo.jpg"),e("./tem-logo-white.jpg")]),console.log("[LogoLoader] black-on-white:",!!Tr,"| white-on-black:",!!Fs)}function Uh(o){const t=document.createElement("canvas");t.width=t.height=256;const i=t.getContext("2d"),n=o>>16&255,s=o>>8&255,a=o&255,l=.299*n+.587*s+.114*a<128,c=l?Fs:Tr;if(c){i.drawImage(c,0,0,256,256);const h=i.getImageData(0,0,256,256),u=h.data;for(let d=0;d<u.length;d+=4){const f=.299*u[d]+.587*u[d+1]+.114*u[d+2];l?u[d+3]=Math.round(Math.min(255,f*1.4)):u[d+3]=Math.round(Math.min(255,(255-f)*1.4))}i.putImageData(h,0,0)}else Og(i,256,l);return new zs(t)}function Oh(o=512){const e=document.createElement("canvas");e.width=e.height=o;const t=e.getContext("2d");if(Fs){t.drawImage(Fs,0,0,o,o);const i=t.getImageData(0,0,o,o),n=i.data;for(let s=0;s<n.length;s+=4){const a=.299*n[s]+.587*n[s+1]+.114*n[s+2];n[s+3]=Math.round(Math.min(255,a*1.5))}t.putImageData(i,0,0)}else t.strokeStyle="#FFFFFF",t.fillStyle="#FFFFFF",zh(t,o);return new zs(e)}function Og(o,e,t){o.strokeStyle=t?"#FFFFFF":"#111111",o.fillStyle=t?"#FFFFFF":"#111111",zh(o,e)}function zh(o,e){const t=e/256;o.save(),o.scale(t,t),o.lineCap="round",o.lineWidth=6,o.beginPath(),o.arc(128,128,118,0,Math.PI*2),o.stroke(),o.lineWidth=11,o.beginPath(),o.moveTo(128,225),o.lineTo(128,148),o.stroke(),o.lineWidth=7,o.beginPath(),o.moveTo(128,148),o.lineTo(128,96),o.stroke();const i=[[128,178,76,152],[128,178,180,152],[128,160,64,134],[128,160,192,134],[128,142,76,116],[128,142,180,116],[128,124,88,99],[128,124,168,99],[128,110,98,84],[128,110,158,84],[128,98,110,70],[128,98,146,70],[128,88,118,56],[128,88,138,56]];o.lineWidth=4;for(const[n,s,a,r]of i)o.beginPath(),o.moveTo(n,s),o.lineTo(a,r),o.stroke(),o.beginPath(),o.arc(a,r,5,0,Math.PI*2),o.fill();o.restore()}class zg{constructor(){_(this,"renderer");_(this,"scene");_(this,"camera");_(this,"collisionWorld",new Ng);_(this,"composer");_(this,"clouds",[]);_(this,"updateCallbacks",[]);_(this,"lastTime",0);_(this,"C",{modernGrey:13157564,warmGrey:12103846,terracotta:12884602,deepClay:10516568,softWhite:15262940,charcoal:4868682,warmCream:13945272,oliveGreen:9083754,ironRed:12674667})}async init(){this.renderer=new Wr({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=$c,this.renderer.toneMapping=Dr,this.renderer.toneMappingExposure=1.1,document.body.appendChild(this.renderer.domElement),this.renderer.domElement.style.position="relative",this.renderer.domElement.style.zIndex="1",this.scene=new Xr,this.scene.fog=new Vo(8900331,.0025),this.camera=new kg,this.scene.add(this.camera.camera),this.composer=new Ig(this.renderer),this.composer.addPass(new Lg(this.scene,this.camera.camera));const e=new es(new Ne(window.innerWidth,window.innerHeight),.3,.4,.85);this.composer.addPass(e),this.composer.addPass(new Fg);const t=new $r(16777215,.5);this.scene.add(t);const i=new Qn(16774368,1.4);i.position.set(80,120,40),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=.5,i.shadow.camera.far=600,i.shadow.camera.left=-300,i.shadow.camera.right=300,i.shadow.camera.top=300,i.shadow.camera.bottom=-300,i.shadow.bias=-.001,this.scene.add(i);const n=new Qn(16771280,.5);n.position.set(-60,40,-80),this.scene.add(n);const s=new cg(8900331,8943462,.3);this.scene.add(s),this.createCityGround(),this.createCity(),this.createTEHouses(),this.buildWorkshop(10,15),this.createZebraCrossings(),this.createRoadCorners(),this.createStreetFurniture(),this.createSkyDome(),this.createClouds(),this.createPuddles(),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),this.camera.camera.aspect=window.innerWidth/window.innerHeight,this.camera.camera.updateProjectionMatrix()})}seed(e,t,i=0){const n=Math.sin(e*127.1+t*311.7+i*74.3)*43758.5453123;return n-Math.floor(n)}getZone(e,t){return Math.abs(e)<80&&Math.abs(t)<80?"cbd":e<-80?"footscray":e>80?"richmond":t<-80?"stkilda":"brunswick"}pickBuildingType(e,t){const i={cbd:[.5,.5,.9,1,1],footscray:[0,.2,.2,.4,1],brunswick:[.3,.6,.6,1,1],richmond:[.3,.3,.6,1,1],stkilda:[0,.3,.3,.7,1]},n=i[e]??i.brunswick,s=["A","B","C","D","E"];for(let a=0;a<n.length;a++)if(t<n[a])return s[a];return"D"}createCityGround(){const s=new $({color:8947840}),a=new B(new mt(2048,2048),s);a.rotation.x=-Math.PI/2,a.position.y=0,a.receiveShadow=!0,this.scene.add(a);const r={cbd:8947840,footscray:7824981,brunswick:8943462,richmond:8026224,stkilda:9080960};for(let l=-240;l<240;l+=40)for(let c=-240;c<240;c+=40){const h=l+20,u=c+40/2,d=this.getZone(h,u),g=this.seed(l,c,0)<.15?5929546:r[d],v=new $({color:g}),m=new B(new mt(30,30),v);m.rotation.x=-Math.PI/2,m.position.set(h,.005,u),m.receiveShadow=!0,this.scene.add(m)}}createCity(){const n=new $({color:2763306}),s=new $({color:16777215}),a=new $({color:15777856}),r=new $({color:13156528}),l=32;for(let c=-240;c<=240;c+=40){const u=new B(new mt(480,8),n);u.rotation.x=-Math.PI/2,u.position.set(0,.01,c),u.receiveShadow=!0,this.scene.add(u);for(let d=-240;d<240;d+=40){const f=d+20;for(const g of[-1,1]){const v=new B(new mt(l,2),r);v.rotation.x=-Math.PI/2,v.position.set(f,.02,c+g*(8/2+1)),v.receiveShadow=!0,this.scene.add(v)}}for(const d of[-1,1]){const f=new B(new mt(480,.2),a);f.rotation.x=-Math.PI/2,f.position.set(0,.03,c+d*(8/2-.3)),this.scene.add(f)}for(let d=-240;d<=240;d+=8){const f=new B(new mt(4,.15),s);f.rotation.x=-Math.PI/2,f.position.set(d,.03,c),this.scene.add(f)}for(let d=-240;d<=240;d+=20)for(const f of[-1,1]){const g=d+(this.seed(d,c,50+f)-.5)*2,v=c+f*5.5,m=(g%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,v,d*10+f,c*10+1)}for(let d=-232;d<240;d+=17){const f=this.seed(d,c,60);if(f>.45){const g=f>.72?1:-1,v=d+(this.seed(d,c,61)-.5)*4,m=c+g*(8/2+2);this.addParkedCar(v,m,d+g*3,c+7,Math.PI/2)}}}for(let c=-240;c<=240;c+=40){const u=new B(new mt(8,480),n);u.rotation.x=-Math.PI/2,u.position.set(c,.01,0),u.receiveShadow=!0,this.scene.add(u);for(let d=-240;d<240;d+=40){const f=d+20;for(const g of[-1,1]){const v=new B(new mt(2,l),r);v.rotation.x=-Math.PI/2,v.position.set(c+g*(8/2+1),.02,f),v.receiveShadow=!0,this.scene.add(v)}}for(const d of[-1,1]){const f=new B(new mt(.2,480),a);f.rotation.x=-Math.PI/2,f.position.set(c+d*(8/2-.3),.03,0),this.scene.add(f)}for(let d=-240;d<=240;d+=8){const f=new B(new mt(.15,4),s);f.rotation.x=-Math.PI/2,f.position.set(c,.03,d),this.scene.add(f)}for(let d=-240;d<=240;d+=20)for(const f of[-1,1]){const g=c+f*5.5,v=d+(this.seed(c,d,52+f)-.5)*2,m=(v%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,v,c*10+2,d*10+f)}for(let d=-232;d<240;d+=17){const f=this.seed(c,d,62);if(f>.45){const g=f>.72?1:-1,v=c+g*(8/2+2),m=d+(this.seed(c,d,63)-.5)*4;this.addParkedCar(v,m,c+9,d+g*3,0)}}}for(let c=-240;c<240;c+=40)for(let h=-240;h<240;h+=40)this.populateBlock(c,h,40,8)}addTree(e,t,i,n){const s=this.seed(i,n,99),a=s<.15?"palm":s<.5?"round":"layered",r=2+s*1.5,l=new $({color:6045747}),c=new B(new Ye(.25,.35,r,7),l);if(c.position.set(e,r/2,t),c.castShadow=!0,this.scene.add(c),a==="palm"){const h=new B(new Ye(.15,.22,6,6),new $({color:9139029}));h.position.set(e,3,t),this.scene.add(h);for(let u=0;u<6;u++){const d=u/6*Math.PI*2,f=new B(new Q(.15,.08,2.5),new $({color:2775578}));f.position.set(e+Math.cos(d)*1.2,6.5,t+Math.sin(d)*1.2),f.rotation.y=d,f.rotation.z=.4,this.scene.add(f)}}else if(a==="layered"){const h=[2973229,3829306,4881994];for(let u=0;u<3;u++){const d=2.2-u*.5,f=new B(new qi(d,2,8),new $({color:h[u]}));f.position.set(e,r+1+u*1.5,t),f.castShadow=!0,this.scene.add(f)}}else{const h=s>.7?4025917:2973229,u=[[0,0,0],[.8,-.3,.5],[-.7,-.2,.3],[.3,.4,-.6],[-.4,.3,-.5]];for(let d=0;d<u.length;d++){const[f,g,v]=u[d],m=1.8+this.seed(i+d*17,n+d*13,103)*.8,p=new B(new ft(m,7,6),new $({color:h}));p.position.set(e+f,r+2.5+g,t+v),p.castShadow=!0,this.scene.add(p)}}}addParkedCar(e,t,i,n,s=0){const a=[13382451,3364300,11184810,14540253,2236962],r=Math.floor(this.seed(i,n,20)*a.length),l=new $({color:a[r]}),c=new B(new Q(1.5,1.2,3),l);c.position.set(e,.6,t),c.rotation.y=s,this.scene.add(c);const h=new $({color:2241348}),u=new B(new Q(1.4,.5,.1),h),d=-.9*Math.sin(s),f=-.9*Math.cos(s);u.position.set(e+d,1.3,t+f),u.rotation.y=s,this.scene.add(u)}populateBlock(e,t,i,n){const s=i-n-4,a=e+i/2,r=t+i/2,l=this.getZone(a,r),c=1+Math.floor(this.seed(e,t,1)*2);for(let h=0;h<c;h++){const u=this.seed(e+h*3,t+h*7,3),d=this.pickBuildingType(l,u);if(d==="E"){h===0&&this.buildTypeE(a,r,e,t);break}const f=s*.18,g=c>1?h===0?-f:f:0,v=g+(this.seed(e+h*5,t,4)-.5)*f*.3,m=g+(this.seed(e,t+h*5,5)-.5)*f*.3,p=e+h*11,w=t+h*13;switch(d){case"A":this.buildTypeA(a+v,r+m,p,w);break;case"B":this.buildTypeB(a+v,r+m,p,w);break;case"C":this.buildTypeC(a+v,r+m,p,w);break;case"D":this.buildTypeD(a+v,r+m,p,w);break}}}addBox(e,t,i,n,s,a,r,l,c=0,h=0,u=0){const d=new B(new Q(i,n,s),new $({color:t}));d.position.set(a,r,l),c!==0&&(d.rotation.x=c),h!==0&&(d.rotation.y=h),u!==0&&(d.rotation.z=u),d.castShadow=!0,d.receiveShadow=!0,e.add(d)}addCyl(e,t,i,n,s,a,r,l,c){const h=new B(new Ye(i,n,s,a),new $({color:t}));h.position.set(r,l,c),h.castShadow=!0,h.receiveShadow=!0,e.add(h)}registerBuildingCollider(e,t,i,n,s,a){const r=Math.floor(this.seed(s,a,101)*4)%4,l=r===1||r===3;this.collisionWorld.addBox(e,t,l?n:i,l?i:n)}buildTypeA(e,t,i,n){const s=this.C,a=new Ge;this.addBox(a,s.modernGrey,16,10,14,0,5,0),this.addBox(a,s.softWhite,16.4,.6,14.4,0,10.3,0);for(const u of[-5,0,5])this.addCyl(a,s.charcoal,.3,.3,3,6,u,1.5,-7);this.addBox(a,s.charcoal,14,.4,.4,0,3,-7);for(const u of[-4.5,0,4.5])this.addGlassBox(a,2241348,2.5,1.8,.15,u,7,-6.93);this.addBox(a,s.deepClay,14,.5,1.2,0,.25,-7.6),this.addBox(a,s.oliveGreen,13,.4,1,0,.7,-7.6);const r=this.seed(i,n,400),l=new $({color:r>.5?12876352:4876938}),c=new B(new Q(14,.1,1.5),l);c.position.set(0,3.8,-7.75),c.rotation.x=.15,a.add(c);const h=new B(new Q(14,.3,.08),l);h.position.set(0,3.45,-8.45),a.add(h),this.addBox(a,14210252,.8,.5,.08,-6.5,1,-7.05),this.addRooftopDetails(a,16,14,10,i,n),a.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),a.position.set(e,0,t),this.scene.add(a),this.registerBuildingCollider(e,t,8.5,7.5,i,n)}buildTypeB(e,t,i,n){const s=this.C,a=new Ge;this.addBox(a,s.deepClay,14.5,8.2,12.5,.3,4,.3),this.addBox(a,s.terracotta,14,8,12,0,4,0),this.addBox(a,s.terracotta,14.6,1.2,12.6,0,8.6,0),this.addBox(a,s.softWhite,15,.3,13,0,9.35,0);for(const r of[-3,3]){this.addBox(a,s.softWhite,1.6,2.6,.1,r,5,-5.99),this.addGlassBox(a,2241348,1.2,2.2,.2,r,5,-5.75);for(const l of[4.3,5,5.7])this.addBox(a,s.charcoal,1,.08,.12,r,l,-5.68)}this.addBox(a,s.charcoal,2,3,.2,0,1.5,-6.1),this.addBox(a,s.charcoal,1.5,.4,.2,0,3.2,-6.1),this.addBox(a,s.charcoal,1,.4,.2,0,3.7,-6.1),this.addBox(a,s.deepClay,2,.4,.6,0,.2,-6.6),this.addBox(a,s.oliveGreen,1.8,.1,.5,0,.45,-6.6),this.addBox(a,13938826,.8,.5,.08,-5,1,-6.05),this.addRooftopDetails(a,14,12,8,i,n),a.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),a.position.set(e,0,t),this.scene.add(a),this.registerBuildingCollider(e,t,7.5,6.5,i,n)}buildTypeC(e,t,i,n){const s=this.C,a=new Ge,r=30+Math.floor(this.seed(i,n,31)*20);this.addBox(a,s.modernGrey,8,4,8,0,2,0),this.addBox(a,4478310,7.5,3.5,7.5,0,2,0),this.addBox(a,3359829,7,r,7,0,r/2,0);for(let l=4;l<=r;l+=4)this.addBox(a,s.warmGrey,7.3,.2,7.3,0,l,0);this.addBox(a,s.charcoal,4,3,4,0,r+1.5,0),a.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),a.position.set(e,0,t),this.scene.add(a),this.registerBuildingCollider(e,t,4.5,4.5,i,n)}buildTypeD(e,t,i,n){const s=this.C,a=new Ge;this.addBox(a,s.warmCream,13,7,11,0,3.5,0),this.addBox(a,s.softWhite,13.5,.5,11.5,0,7.25,0),this.addBox(a,s.softWhite,2.8,3.8,1.6,0,4,-6.2),this.addBox(a,s.warmCream,2.5,3.5,1.5,0,4,-6.25);for(const r of[-.8,0,.8])this.addGlassBox(a,3359829,.7,2.5,.2,r,4,-7);this.addBox(a,s.deepClay,2.2,3.2,.3,0,1.6,-5.65),this.addBox(a,s.deepClay,1.8,.4,.3,0,3.35,-5.65),this.addBox(a,s.deepClay,1.2,.4,.3,0,3.8,-5.65);for(const r of[-3.5,3.5])this.addBox(a,s.softWhite,1.8,1.5,.1,r,5.5,-5.5),this.addGlassBox(a,3359829,1.5,1.2,.15,r,5.5,-5.55);this.addBox(a,s.deepClay,11,1,.3,0,.5,-6.65),this.addBox(a,14997960,.8,.5,.08,-5,1,-5.55),this.addRooftopDetails(a,13,11,7,i,n),a.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),a.position.set(e,0,t),this.scene.add(a),this.registerBuildingCollider(e,t,7,6,i,n)}buildTypeE(e,t,i,n){this.C;const s=new Ge,a=12*Math.PI/180;this.addBox(s,6974050,22,4,18,0,2,0),this.addBox(s,1710614,22.1,.3,18.1,0,.15,0);const r=new B(new Q(22.5,.3,10),new $({color:1973786}));r.castShadow=!0,r.receiveShadow=!0,r.rotation.x=a,r.position.set(0,4.5,-4.5),s.add(r);const l=new B(new Q(22.5,.3,10),new $({color:1973786}));l.castShadow=!0,l.receiveShadow=!0,l.rotation.x=-a,l.position.set(0,4.5,4.5),s.add(l),this.addBox(s,1118480,22.5,.5,.6,0,5.2,0);for(const f of[-2,.5,3])this.addBox(s,1118480,22.2,.08,.1,0,3.5,f);this.addBox(s,1118480,4.5,3.5,.2,0,1.75,-9.1),this.addBox(s,2236960,.15,3.5,.2,-2.4,1.75,-9.1),this.addBox(s,2236960,.15,3.5,.2,2.4,1.75,-9.1),this.addBox(s,3359829,8,.8,.15,-11.075,3.5,0),this.addCyl(s,1118480,.1,.1,4,5,-11,2,-9);const c=this.seed(i,n,401),h=new $({color:c>.5?12876352:4876938}),u=new B(new Q(8,.1,1.5),h);u.position.set(0,4.2,-9.85),u.rotation.x=.15,s.add(u);const d=new B(new Q(8,.3,.08),h);d.position.set(0,3.85,-10.6),s.add(d);for(const f of[-3.5,3.5]){const g=new B(new Ye(.06,.06,4,5),new $({color:5592400}));g.position.set(f,2,-10.55),s.add(g)}this.addRooftopDetails(s,22,18,5.2,i,n),s.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),s.position.set(e,0,t),this.scene.add(s),this.registerBuildingCollider(e,t,11.5,9.5,i,n)}createTEHouses(){this.buildHouseMarbellino(20,20),this.collisionWorld.addBox(20,20,10,7.5),this.buildHousePorthole(-60,20),this.collisionWorld.addBox(-60,20,8,6.5),this.buildHouseTerracotta(20,-60),this.collisionWorld.addBox(20,-60,9,7),this.buildHouseLoggia(-60,-60),this.collisionWorld.addBox(-60,-60,10,7.5),this.buildHouseRokka(60,-20),this.collisionWorld.addBox(60,-20,11,8),this.buildHouseTimberStone(100,60),this.collisionWorld.addBox(100,60,11,7),this.buildHouseSculpturalPlaster(-100,-20),this.collisionWorld.addBox(-100,-20,8,6),this.buildHouseHaussmann(60,-100),this.collisionWorld.addBox(60,-100,11,7),this.buildHouseAngularBay(-140,60),this.collisionWorld.addBox(-140,60,9,6.5),this.buildHouseBrutalistCompound(20,100),this.collisionWorld.addBox(20,100,12,5),this.buildHouseTerracottaMonolith(140,20),this.collisionWorld.addBox(140,20,10,5),this.buildHouseCurvedBalcony(-20,-140),this.collisionWorld.addBox(-20,-140,8,6),this.buildHouseCortenPlaster(-140,-60),this.collisionWorld.addBox(-140,-60,10,5.5),this.buildCoffeeShop(-60,-100),this.collisionWorld.addBox(-60,-100,7,5),this.buildToiletBlock(100,60),this.collisionWorld.addBox(100,60,6,5)}buildHouseMarbellino(e,t){const i=new Ge;this.addBox(i,13945786,18,4,14,0,2,0),this.addBox(i,2763306,20,4,15,0,7,0);for(const n of[-8,-5,-2,1,4,7])this.addBox(i,1710618,.15,4,15,n,7,0);this.addBox(i,3355443,20.5,.5,15.5,0,9.25,0),this.addBox(i,3359829,10,.9,.15,0,3.5,-7.1),this.addBox(i,13157564,10.4,1.1,.1,0,3.5,-7.05);for(const n of[-4,0,4]){const s=new B(new Q(1.5,2.5,.15),new $({color:4478310,emissive:new we(2241348),emissiveIntensity:.3}));s.position.set(n,7.5,-7.6),i.add(s)}this.addBox(i,1710618,5,3.8,.2,-5.5,1.9,-7.1),this.addBox(i,13157564,2,.3,1,4,.15,-7.5),this.addBox(i,9072736,14,.4,1,0,.2,-8),this.addBox(i,5929546,12,.6,.8,0,.6,-8),i.position.set(e,0,t),this.scene.add(i)}buildHousePorthole(e,t){const i=new Ge;this.addBox(i,12104876,16,5.5,13,0,2.75,0),this.addBox(i,9134144,7,5.5,.3,3.5,2.75,-6.65);for(let n=0;n<5;n++){const s=(n-2)*1.2;this.addBox(i,6965280,7,.2,.4,3.5,2.75+s,-6.55,0,0,Math.PI/7.2)}this.addBox(i,13157564,16.5,.3,13.5,0,5.65,0),this.addBox(i,2763306,17,.5,14,0,5.95,0);{const n=new B(new Ye(1.4,1.4,.15,16),new $({color:8947848}));n.rotation.x=Math.PI/2,n.position.set(-4,3.5,-6.7),i.add(n)}{const n=new B(new Ye(1.1,1.1,.1,16),new $({color:2241348,emissive:new we(1122867),emissiveIntensity:.5}));n.rotation.x=Math.PI/2,n.position.set(-4,3.5,-6.65),i.add(n)}this.addBox(i,3359829,3.5,1.2,.15,1,3.5,-6.7),this.addBox(i,3359829,3.5,1.2,.15,5,3.5,-6.7),this.addBox(i,3811866,1.8,2.8,.3,-6,1.4,-6.8),this.addBox(i,8947848,2.2,3,.2,-6,1.4,-6.65),this.addBox(i,3828282,10,.7,.8,0,.35,-7.5),i.position.set(e,0,t),this.scene.add(i)}buildHouseTerracotta(e,t){const i=new Ge;this.addBox(i,10121296,17.6,7.2,14.6,0,3.5,0),this.addBox(i,12884602,17,7,14,0,3.5,0),this.addBox(i,12884602,17.8,1.5,14.8,0,7.75,0),this.addBox(i,15262940,18.2,.3,15.2,0,8.65,0),this.addBox(i,9068608,2.4,3.5,.3,0,1.75,-7.1),this.addBox(i,9068608,2,.5,.3,0,3.75,-7.1),this.addBox(i,9068608,1.4,.5,.3,0,4.25,-7.1),this.addBox(i,9068608,1.4,2.8,.5,-4,4,-7.2),this.addBox(i,2241348,1,2.4,.15,-4,4,-7.05),this.addBox(i,15262940,1.6,3,.15,-4,4,-6.98);for(const n of[3.2,4,4.8])this.addBox(i,3355443,.9,.08,.15,-4,n,-7.1);this.addBox(i,9068608,1.4,2.8,.5,4,4,-7.2),this.addBox(i,2241348,1,2.4,.15,4,4,-7.05),this.addBox(i,15262940,1.6,3,.15,4,4,-6.98);for(const n of[3.2,4,4.8])this.addBox(i,3355443,.9,.08,.15,4,n,-7.1);for(const n of[-2,2])this.addBox(i,3359829,.15,1.5,1,8.58,4,n),this.addBox(i,3359829,.15,1.5,1,-8.58,4,n);this.addBox(i,10516568,2.5,.5,.8,-4,.25,-7.5),this.addBox(i,10516568,2.5,.5,.8,4,.25,-7.5),this.addBox(i,5933642,2,.5,.6,-4,.65,-7.5),this.addBox(i,5933642,2,.5,.6,4,.65,-7.5);for(const n of[-6,-2,2,6])this.addBox(i,15262940,.8,.8,.2,n,8.4,-7.4);i.position.set(e,0,t),this.scene.add(i)}buildHouseLoggia(e,t){const i=new Ge;this.addBox(i,11578532,20,6,15,0,3,0),this.addBox(i,10131088,20.5,.4,15.5,0,6.2,0),this.addBox(i,10131088,20,.4,3,0,3.2,-10);for(const n of[-7,-3,3,7])this.addCyl(i,8947840,.2,.2,3.2,8,n,1.6,-11);this.addBox(i,3359829,14,2,.2,0,4,-7.5),this.addBox(i,13157564,14.4,2.2,.15,0,4,-7.4);for(const n of[-5,0,5])this.addBox(i,8947840,.15,2,.2,n,4,-7.5);{const n=new B(new Q(2.4,2.8,.2),new $({color:3359829,emissive:new we(1120290),emissiveIntensity:.2}));n.position.set(5,1.4,-7.5),i.add(n)}this.addBox(i,8947840,2.8,3,.15,5,1.4,-7.4),this.addBox(i,9074784,18,.5,2.5,0,.25,-9),this.addBox(i,4880970,16,.7,2,0,.65,-9),this.addBox(i,8947840,20,.3,.3,0,3.1,-10.2),this.addBox(i,8947840,20,.3,.3,0,3.1,-11.8),i.position.set(e,0,t),this.scene.add(i)}buildHouseRokka(e,t){const i=new Ge;this.addBox(i,12892314,22,4.5,16,0,2.25,0),this.addBox(i,10128506,22.5,.3,9,0,4.75,-3.5,Math.PI*8/180,0,0),this.addBox(i,10128506,22.5,.3,9,0,4.75,3.5,-Math.PI*8/180,0,0),this.addBox(i,6969928,22.5,.6,.8,0,5.1,0),this.addBox(i,10127472,22.5,1,16.5,0,.5,0);{const n=new B(new Q(6,3.2,.2),new $({color:3359829,emissive:new we(1120290),emissiveIntensity:.3}));n.position.set(0,1.6,-8.1),i.add(n)}this.addBox(i,8022618,6.4,3.5,.15,0,1.75,-8);for(const n of[-2,0,2])this.addBox(i,8947824,.1,3.2,.2,n,1.6,-8.1);this.addBox(i,8947824,6,.1,.2,0,2.2,-8.1),this.addBox(i,3359829,2.5,1.5,.2,-7,3,-8.1),this.addBox(i,3359829,2.5,1.5,.2,7,3,-8.1),this.addBox(i,11575432,.8,4.5,.8,-3.5,2.25,-8.2),this.addBox(i,11575432,.8,4.5,.8,3.5,2.25,-8.2),this.addCyl(i,6969928,.1,.1,4.5,5,-11,2.25,-8),this.addCyl(i,6969928,.1,.1,4.5,5,11,2.25,-8),this.addBox(i,11575432,20,.8,.3,0,.4,-10),i.position.set(e,0,t),this.scene.add(i)}buildHouseTimberStone(e,t){const i=new Ge;this.addBox(i,8947840,22,4,14,0,2,0),this.addBox(i,6710880,22.2,.4,14.2,0,.2,0),this.addBox(i,12088362,22,4.5,13,0,6.25,0);for(let n=0;n<8;n++)this.addBox(i,10116634,22.1,.12,13.1,0,4.3+n*.57,0);this.addBox(i,4870229,5,8.5,14.2,8.5,4.25,0);for(let n=0;n<12;n++){const s=n%2===0?3817541:5593696;this.addBox(i,s,5.1,.3,14.3,8.5,.5+n*.65,0)}this.addBox(i,2763306,22.5,.5,14.5,0,8.75,0);for(const n of[-6,-2,2]){this.addBox(i,1710618,2.8,3.2,.2,n,6,-6.6);const s=new B(new Q(2.4,2.9,.15),new $({color:9087675,emissive:new we(2770005),emissiveIntensity:.2}));s.position.set(n,6,-6.6),i.add(s)}this.addBox(i,1710618,13,.15,.5,-3,8,-6.8),this.addBox(i,10140364,12.5,.8,.1,-3,7.6,-6.75);for(const n of[-7,-4.5])this.addBox(i,1710618,2.2,1.8,.2,n,2,-7.1),this.addBox(i,3359829,1.8,1.5,.15,n,2,-7);this.addBox(i,6962202,1.8,3.2,.2,2.5,1.6,-7.1),this.addBox(i,12092938,.12,.12,.15,3.1,1.6,-7.1),this.addBox(i,1710618,4,.15,2.5,2.5,3.5,-7.3),this.addCyl(i,1710618,.06,.06,3.5,5,1,1.75,-8.2),this.addCyl(i,1710618,.06,.06,3.5,5,4,1.75,-8.2),this.addBox(i,1710618,8,.18,6,-9,4.1,-5),this.addCyl(i,1118481,.12,.12,4.1,6,-6.5,2.05,-7.8),this.addCyl(i,1118481,.12,.12,4.1,6,-11.5,2.05,-7.8),this.addBox(i,10066329,2,.8,3.5,-9.5,.4,-4.5),this.addBox(i,11184810,1.9,.3,3.4,-9.5,.9,-4.5);for(let n=5;n<=13;n+=.7)this.addBox(i,1710618,.12,1.6,.12,n,.8,-8.5);this.addBox(i,6710880,20,.8,.3,0,.4,-9.5),this.addBox(i,4870229,20,.35,.4,0,.18,-9.5);for(let n=0;n<5;n++)this.addBox(i,14540236,1.4,.08,.7,5,.05,-10.2+n*.9);this.addBox(i,4880954,8,.1,3,5,0,-9.8);for(const[n,s]of[[3.5,-8.5],[6.5,-8]]){this.addCyl(i,5912608,.12,.15,2.5,6,n,1.25,s);const a=new B(new qi(1,2.2,7),new $({color:3828266}));a.position.set(n,2.8,s),i.add(a)}this.addBox(i,1710618,3.5,1.8,.2,7.5,6.5,-6.6),this.addBox(i,3359829,3,1.5,.15,7.5,6.5,-6.55),i.position.set(e,0,t),this.scene.add(i)}buildHouseSculpturalPlaster(e,t){const i=new Ge,n=8686698,s=6976085,a=11842732,r=1118481;this.addBox(i,n,14,5.5,12,-3,2.75,0),this.addBox(i,n,7,3.5,12,9,1.75,0),this.addBox(i,s,.3,5.6,12,2.85,2.75,0);const l=new B(new Q(11,.35,12.4),new $({color:n}));l.rotation.z=22*Math.PI/180,l.position.set(.5,8,0),i.add(l);const c=new B(new Q(7.5,.35,12.4),new $({color:a}));c.rotation.z=-52*Math.PI/180,c.position.set(-6.2,8.2,0),i.add(c),this.addBox(i,s,.6,.6,12.4,-3.2,10,0),this.addBox(i,1710618,2.3,4,.5,-3,2,-6.25),this.addBox(i,r,2.6,4.3,.2,-3,2.1,-6.05);const h=new B(new Q(2,3.6,.12),new $({color:2767428,emissive:new we(661538),emissiveIntensity:.3}));h.position.set(-3,2.1,-6.1),i.add(h),this.addBox(i,1710618,1.6,1.6,.4,8.5,2,-6.2),this.addBox(i,r,1.8,1.8,.18,8.5,2,-6.05),this.addBox(i,r,.4,.4,.4,-6.5,4.2,-6.05),this.addBox(i,r,.4,.4,.4,6.5,3.4,-6.05);for(const f of[-6.5,6.5]){const g=new B(new Q(.5,.08,.3),new $({color:16772812,emissive:new we(16764040),emissiveIntensity:.6}));g.position.set(f,f===-6.5?3.95:3.15,-6.07),i.add(g)}const u=8.5,d=-11;for(let f=-4;f<=4;f++){const g=f/4*40*Math.PI/180,v=u*Math.sin(g),m=d+u*(Math.cos(g)-1),p=new B(new Q(2,1.2,.35),new $({color:n}));p.rotation.y=g,p.position.set(v,.6,m),i.add(p);const w=new B(new Q(2,.12,.45),new $({color:12631720}));w.rotation.y=g,w.position.set(v,1.26,m),i.add(w)}this.addBox(i,s,2.5,.2,1,-3,.1,-7.5),i.position.set(e,0,t),this.scene.add(i)}buildHouseHaussmann(e,t){const i=new Ge,n=15261384,s=15788244,a=13154972,r=1118481;this.addBox(i,n,22,9.5,14,0,4.75,0);for(let h=0;h<5;h++)this.addBox(i,a,22.3,.14,14.3,0,.5+h*.88,0);for(let h=0;h<4;h++)this.addBox(i,a,22.3,.12,14.3,0,5.4+h*.85,0);this.addBox(i,s,22.6,.5,14.6,0,4.75,0),this.addBox(i,a,22.8,.2,14.8,0,5.05,0),this.addBox(i,n,22.5,.3,14.5,0,5.25,0),this.addBox(i,n,23.2,.5,15.2,0,9.75,0),this.addBox(i,s,22.8,.8,14.8,0,10.15,0),this.addBox(i,a,23.4,.25,15.4,0,10.55,0),this.addBox(i,s,4,11.5,4,-10,5.75,-6);for(let h=0;h<6;h++)this.addBox(i,a,4.2,.12,4.2,-10,.5+h*1.75,-6);this.addBox(i,n,4.4,.4,4.4,-10,5,-6),this.addBox(i,n,4.6,.4,4.6,-10,11.3,-6),this.addBox(i,s,4.4,.6,4.4,-10,11.75,-6),this.addBox(i,a,4.8,.25,4.8,-10,12.12,-6),this.addBox(i,n,2.5,1,2.5,-10,12.75,-6);for(const h of[-6.5,-1,4.5]){this.addBox(i,a,2,4.2,.5,h,2.1,-7.25),this.addBox(i,s,1.7,4,.2,h,2.1,-7.05);const u=new B(new Q(1.35,3.5,.12),new $({color:9087931,emissive:new we(1714739),emissiveIntensity:.15}));u.position.set(h,2.1,-7),i.add(u),this.addBox(i,s,1.7,.12,.15,h,3.2,-7.05)}for(const h of[-6.5,4.5]){this.addBox(i,a,2,3.8,.5,h,7.5,-7.25),this.addBox(i,s,1.7,3.5,.2,h,7.5,-7.05);const u=new B(new Q(1.35,3,.12),new $({color:9087931,emissive:new we(1714739),emissiveIntensity:.15}));u.position.set(h,7.5,-7),i.add(u),this.addBox(i,s,1.7,.12,.15,h,8.5,-7.05),this.addBox(i,n,3.4,.28,1.4,h,5.66,-7.9),this.addBox(i,a,3.5,.45,1.5,h,5.38,-7.95);for(let d=0;d<5;d++){const f=h-1.3+d*.65;this.addBox(i,r,.07,1,.07,f,6.2,-8.4)}this.addBox(i,r,3.2,.09,.09,h,6.72,-8.4),this.addBox(i,r,3.2,.09,.09,h,5.82,-8.4),this.addBox(i,r,.07,1,.07,h-1.3,6.2,-8.4,0,0,.35),this.addBox(i,r,.07,1,.07,h+1.3,6.2,-8.4,0,0,-.35)}this.addBox(i,s,5,6.5,.22,9.5,3.75,-7.05);const l=new B(new Q(4.5,6,.12),new $({color:9087931,emissive:new we(1714739),emissiveIntensity:.12}));l.position.set(9.5,3.75,-7),i.add(l);for(let h=0;h<3;h++)this.addBox(i,s,5,.1,.15,9.5,1+h*2,-7);for(const h of[7.5,9.5,11.5])this.addBox(i,s,.1,6,.15,h,3.75,-7);this.addBox(i,a,3.8,5.5,.6,1.5,2.75,-7.4),this.addBox(i,s,2.8,4.8,.2,1.5,2.4,-7.1);const c=new B(new Q(2.2,4.2,.12),new $({color:9087931,emissive:new we(660768),emissiveIntensity:.2}));c.position.set(1.5,2.4,-7.05),i.add(c),this.addBox(i,13937232,.1,.1,.1,2.4,2.2,-7.06),this.addBox(i,a,22.5,.3,14.5,0,.15,0),i.position.set(e,0,t),this.scene.add(i)}buildHouseAngularBay(e,t){const i=new Ge,n=15789022,s=12876378,a=3809296,r=1118481;this.addBox(i,n,18,4,13,0,2,0),this.addBox(i,n,18,4,12,0,6,0),this.addBox(i,n,8,4,2.5,5,6,-7.25),this.addBox(i,n,3,10,2.5,6.5,5,-7.5),this.addBox(i,s,10,.5,14,-4.5,8.5,0,0,0,.44),this.addBox(i,s,10,.5,14,4.5,8.5,0,0,0,-.44),this.addBox(i,a,1.5,.5,14.5,0,10.5,0),this.addBox(i,a,19,.3,13.5,0,8.05,0),this.addBox(i,a,19,.2,1.2,0,8.05,-7.3);for(const l of[-6.5,0])this.addBox(i,15658734,2.6,2,.12,l,1.8,-6.56),this.addBox(i,3359829,2.2,1.6,.15,l,1.8,-6.5);for(const l of[-6.5,0])this.addBox(i,15658734,2.6,2,.12,l,5.8,-6.56),this.addBox(i,3359829,2.2,1.6,.15,l,5.8,-6.5);for(let l=0;l<4;l++)this.addBox(i,r,.08,1,.08,-8.5+l*.65,5.5,-6.7);this.addBox(i,r,2.4,.08,.08,-7.02,6.05,-6.7),this.addBox(i,r,2.4,.08,.08,-7.02,5,-6.7),i.position.set(e,0,t),this.scene.add(i)}buildHouseBrutalistCompound(e,t){const i=new Ge,n=10524792,s=8947840;this.addBox(i,n,7,7,11,-8.5,3.5,0),this.addBox(i,n,6,5,10,-1,2.5,.5),this.addBox(i,n,6,6,11,5.5,3,-.5),this.addBox(i,n,5,4,9,11,2,0),this.addBox(i,n,24,1.5,9,0,.75,.5),this.addBox(i,s,4,.25,2.5,-8.5,7.25,-6.2),this.addBox(i,s,4,.25,2.5,5.5,6.25,-6.2),this.addBox(i,2241348,4,5.5,.15,-8.5,3.5,-5.6),this.addBox(i,2241348,3.5,4.5,.15,5.5,3,-5.6),this.addBox(i,n,8,5,.4,2,2.5,-6.5,0,.26,0);const a=14,r=9,l=-Math.PI*.35,c=Math.PI*.35;for(let h=0;h<r;h++){const u=h/(r-1),d=l+(c-l)*u,f=Math.sin(d)*a,g=Math.cos(d)*a-a+4;this.addBox(i,n,3.5,1.5,.4,f,.75,g,0,-d,0)}for(const h of[-3,2.5]){this.addCyl(i,5913114,.15,.2,3,5,h,1.5,-4);const u=new B(new ft(1.2,6,5),new $({color:3828266}));u.position.set(h,4,-4),i.add(u)}i.position.set(e,0,t),this.scene.add(i)}buildHouseTerracottaMonolith(e,t){const i=new Ge,n=12284e3,s=2759194,a=4880954;this.addBox(i,n,20,3,.5,0,1.5,-9.5),this.addBox(i,s,20.2,.1,.55,0,1,-9.5),this.addBox(i,s,20.2,.1,.55,0,2,-9.5),this.addBox(i,n,20,6,10,0,3,-2),this.addBox(i,s,20.2,.1,10.1,0,2,-2),this.addBox(i,s,20.2,.1,10.1,0,4,-2),this.addBox(i,n,20.3,.4,10.3,0,6.2,-2),this.addBox(i,a,18,.3,1.8,0,.15,-7.5);for(let r=-8;r<=8;r+=2.5){const l=new B(new qi(.2,.8,5),new $({color:5933642}));l.position.set(r,.55,-7.5),i.add(l)}this.addBox(i,1118481,1.2,3.5,.2,0,3.5,-7.05),this.addBox(i,2241348,.8,3,.15,0,3.5,-7),i.position.set(e,0,t),this.scene.add(i)}buildHouseCurvedBalcony(e,t){const i=new Ge,n=15261900,s=15789544,a=11053216,r=1118481;this.addBox(i,n,16,4,12,0,2,0),this.addBox(i,s,16,4,12,0,6,0),this.addBox(i,s,16.5,.3,12.5,0,8.15,0),this.addBox(i,r,16.6,.2,12.6,0,8.3,0);const l=5,c=14,h=-Math.PI*.5,u=Math.PI*.5;for(let d=0;d<c;d++){const f=d/(c-1),g=h+(u-h)*f,v=Math.sin(g)*l,m=-Math.cos(g)*l-3.5;this.addBox(i,a,1.3,2,.5,v,5.5,m,0,-g,0)}for(const d of[-5,0,5])this.addBox(i,4473924,2.5,2,.15,d,1.8,-6.1),this.addBox(i,2241348,2,1.6,.12,d,1.8,-6);this.addCyl(i,r,.1,.1,8,5,-8,4,-6.1),this.addCyl(i,r,.1,.1,8,5,8,4,-6.1),this.addBox(i,r,.3,.3,.3,-2,2.5,-6.15),this.addBox(i,s,17,.25,1.5,0,8,-7.2,.1,0,0),this.addBox(i,r,17.2,.1,1.6,0,8.12,-7.2,.1,0,0),i.position.set(e,0,t),this.scene.add(i)}buildHouseCortenPlaster(e,t){const i=new Ge,n=4868682,s=12081696,a=3684408,r=9060368;this.addBox(i,n,12,8,11,-7,4,0),this.addBox(i,n,12.3,.4,11.3,-7,8.2,0),this.addBox(i,s,8,8.5,11,5,4.25,0),this.addBox(i,s,8.3,.4,11.3,5,8.7,0),this.addBox(i,a,2,9.5,11,-.5,4.75,0);for(let c=0;c<6;c++)this.addBox(i,r,.15,8.5,11.1,1.5+c*1.2,4.25,0);this.addCyl(i,13421704,.15,.15,.5,6,-5,5,-5.6),this.addCyl(i,13421704,.15,.15,.5,6,-9,5,-5.6),this.addBox(i,1118481,2.5,1.8,.3,-6,4.5,-5.7),this.addBox(i,2241348,2,1.4,.15,-6,4.5,-5.6),this.addBox(i,1118481,2.5,1.8,.3,-10,2.5,-5.7),this.addBox(i,2241348,2,1.4,.15,-10,2.5,-5.6),this.addCyl(i,9132587,.2,.3,8,6,-15,4,-3);const l=new B(new qi(2.5,1.5,8),new $({color:2775578}));l.position.set(-15,8.75,-3),i.add(l),i.position.set(e,0,t),this.scene.add(i)}buildCoffeeShop(e,t){const i=new Ge;this.addBox(i,15788248,14,4,10,0,2,0),this.addBox(i,15261904,14.2,.18,10.2,0,4.09,0),this.addBox(i,1118481,14.6,.38,10.6,0,4.19,0);for(const s of[-3.8,3.8]){this.addBox(i,1118481,4,3.8,.14,s,2.1,-5.08);const a=new B(new Q(3.5,3.4,.1),new $({color:13140032,emissive:new we(10115616),emissiveIntensity:.7}));a.position.set(s,2.1,-5.06),i.add(a)}this.addBox(i,1118481,2,3,.14,0,1.5,-5.08),this.addBox(i,8014368,1.6,2.8,.2,0,1.4,-5.1),this.addBox(i,13410400,.1,.1,.12,.5,1.4,-5.1),this.addBox(i,12876352,13.5,.28,4,0,3.22,-7),this.addBox(i,10770984,13.5,.6,.18,0,2.95,-9.05);for(const s of[-4.5,0,4.5])this.addCyl(i,8947832,.07,.07,3,5,s,1.5,-9.1);this.addBox(i,16777215,5,.36,.12,0,3.06,-8.96);for(const[s,a]of[[-5,-11.5],[0,-11.5],[5,-11.5]]){this.addCyl(i,9068608,.75,.75,.1,12,s,1.12,a),this.addCyl(i,6963232,.07,.07,1.12,6,s,.56,a);for(const r of[-1,1])this.addCyl(i,9068608,.32,.32,.09,8,s+r*.85,.82,a),this.addCyl(i,6963232,.05,.05,.82,5,s+r*.85,.41,a)}for(let s=0;s<5;s++)this.addCyl(i,16777215,.22-s*.008,.24-s*.008,.3,8,7.1,.22+s*.28,-3.5);this.addBox(i,3355445,1.1,1.7,.12,-3.5,1.1,-5.1),this.addBox(i,15658734,.72,.08,.05,-3.5,1.6,-5.04),this.addBox(i,15658734,.55,.08,.05,-3.5,1.42,-5.04),this.addBox(i,15658734,.63,.08,.05,-3.5,1.24,-5.04),this.addBox(i,15658734,.48,.08,.05,-3.5,1.06,-5.04);for(const s of[-4,0,4]){const a=new B(new Q(.25,.25,.25),new $({color:16764040,emissive:new we(16755268),emissiveIntensity:.8}));a.position.set(s,3.7,-2),i.add(a)}this.addCyl(i,3355443,.3,.3,12,8,0,6,-8);const n=new B(new Q(10,3,.4),new $({color:13918762,emissive:new we(9121808),emissiveIntensity:.6}));n.position.set(0,13,-8),n.castShadow=!0,i.add(n),this.addBox(i,16777215,8,.2,.5,0,14.2,-7.85),this.addBox(i,16777215,8,.2,.5,0,12.8,-7.85),this.addCyl(i,16777215,.8,1,1.5,12,0,15.5,-8),this.addCyl(i,7027242,.4,.4,.3,8,0,16.4,-8),i.position.set(e,0,t),this.scene.add(i)}buildWorkshop(e,t){const i=new Ge,n=4868676,s=2236960,a=15657176,r=3355440,l=1118480;this.addBox(i,n,30,8,20,0,4,0),this.addBox(i,1710616,30.2,.35,20.2,0,.18,0);const c=12*Math.PI/180,h=new $({color:s}),u=new B(new Q(30.5,.35,11),h);u.castShadow=!0,u.rotation.x=c,u.position.set(0,8.6,-4.5),i.add(u);const d=new B(new Q(30.5,.35,11),h);d.castShadow=!0,d.rotation.x=-c,d.position.set(0,8.6,4.5),i.add(d),this.addBox(i,1118480,30.5,.55,.8,0,9.3,0),this.addBox(i,a,24,3.2,.45,0,7.4,-10.23),this.addBox(i,r,22,2.5,.28,0,7.4,-10.25),this.addBox(i,16775920,24.2,.22,.46,0,9.11,-10.23),this.addBox(i,16775920,24.2,.22,.46,0,5.89,-10.23),this.addBox(i,16775920,.22,3.2,.46,-12.11,7.4,-10.23),this.addBox(i,16775920,.22,3.2,.46,12.11,7.4,-10.23),this.addBox(i,12674667,24,.3,.44,0,5.75,-10.22),this.addBox(i,16763972,8,.65,.35,0,5.5,-10.2),this.addBox(i,2763296,7.5,.42,.38,0,5.5,-10.21),this.addBox(i,l,12,5,.25,0,2.5,-10.15),this.addBox(i,2236960,.2,5,.25,-6.2,2.5,-10.15),this.addBox(i,2236960,.2,5,.25,6.2,2.5,-10.15);for(let y=1;y<=4;y++)this.addBox(i,1710616,11.8,.08,.28,0,y,-10.14);this.addBox(i,2236960,12.6,.4,.28,0,5.2,-10.14);const f=3359829;for(let y=-6;y<=6;y+=4)this.addBox(i,f,.16,1.2,2.8,15.09,7.2,y),this.addBox(i,f,.16,1.2,2.8,-15.09,7.2,y);this.addBox(i,2236960,.2,.18,20,15.1,7.9,0),this.addBox(i,2236960,.2,.18,20,15.1,6.6,0),this.addBox(i,2236960,.2,.18,20,-15.1,7.9,0),this.addBox(i,2236960,.2,.18,20,-15.1,6.6,0),this.addCyl(i,2236960,.12,.12,8,5,-15,4,-10),this.addCyl(i,2236960,.12,.12,8,5,15,4,-10),this.addCyl(i,2236960,.12,.12,8,5,-15,4,10),this.addCyl(i,2236960,.12,.12,8,5,15,4,10),this.addCyl(i,12884602,.85,.9,1.5,10,9.5,.75,-11.5),this.addCyl(i,6974050,.85,.9,1.5,10,9.5,2.35,-11.5),this.addCyl(i,8947840,.92,.92,.12,10,9.5,1.56,-11.5),this.addCyl(i,8947840,.92,.92,.12,10,9.5,3.16,-11.5),this.addCyl(i,12884602,.85,.9,1.5,10,11.2,.75,-12.2),this.addCyl(i,8947840,.92,.92,.12,10,11.2,1.56,-12.2),this.addBox(i,8018488,4.5,.18,2.5,10.2,.09,-11.8),this.addBox(i,9074776,6,1,2.2,0,.5,-9.2),this.addBox(i,13154448,6.3,.18,2.4,0,1.09,-9.2),this.addBox(i,15658700,.8,.05,1,.8,1.19,-9.3),this.addBox(i,4473924,.12,.25,.12,.8,1.22,-9),this.addBox(i,5921362,2.8,1.8,2.8,-8.5,.9,-11.5);const g=new B(new Ye(.75,.75,2.2,10),new $({color:8947840}));g.rotation.z=35*Math.PI/180,g.position.set(-8.5,1.6,-11.5),g.castShadow=!0,i.add(g),this.addCyl(i,3355440,.4,.4,.3,8,-8.5,.2,-10.8),this.addBox(i,4868676,3.5,2.2,2.5,-11.5,1.1,-13),this.addBox(i,8947840,3,.5,2,-11.5,2.35,-13),this.addBox(i,6710880,2.2,1.2,1.4,-11.5,3.1,-13);const v=new $({color:10131600}),m=new B(new mt(20,8),v);m.rotation.x=-Math.PI/2,m.position.set(0,.008,-14),m.receiveShadow=!0,i.add(m),this.addBox(i,a,.3,2.5,6,15.16,4,0),this.addBox(i,r,.32,2,5.5,15.17,4,0);const p=Oh(1024),w=new zt({map:p,transparent:!0,depthWrite:!1,side:Ut}),M=new B(new mt(7,4.5),w);M.position.set(0,2.5,-10.29),i.add(M),i.position.set(e,0,t),this.scene.add(i),this.collisionWorld.addBox(e,t,15.5,10.5)}createZebraCrossings(){const e=new $({color:15658734}),t=new $({color:1118481});for(let i=-200;i<=200;i+=40)for(let n=-200;n<=200;n+=40){if(Math.abs(i)>200||Math.abs(n)>200)continue;const s=[-3.2,-1.6,0,1.6,3.2],a=[-2.4,-.8,.8,2.4],r=2;for(const l of s){const c=new B(new Q(.8,.03,r),e);c.position.set(i+l,.05,n-5),this.scene.add(c)}for(const l of a){const c=new B(new Q(.8,.03,r),t);c.position.set(i+l,.04,n-5),this.scene.add(c)}for(const l of s){const c=new B(new Q(.8,.03,r),e);c.position.set(i+l,.05,n+5),this.scene.add(c)}for(const l of a){const c=new B(new Q(.8,.03,r),t);c.position.set(i+l,.04,n+5),this.scene.add(c)}for(const l of s){const c=new B(new Q(r,.03,.8),e);c.position.set(i-5,.05,n+l),this.scene.add(c)}for(const l of a){const c=new B(new Q(r,.03,.8),t);c.position.set(i-5,.04,n+l),this.scene.add(c)}for(const l of s){const c=new B(new Q(r,.03,.8),e);c.position.set(i+5,.05,n+l),this.scene.add(c)}for(const l of a){const c=new B(new Q(r,.03,.8),t);c.position.set(i+5,.04,n+l),this.scene.add(c)}}}createRoadCorners(){const e=new $({color:13156528}),t=new $({color:11051160}),i=[{dx:-6,dz:-6,theta:3*Math.PI/2},{dx:6,dz:-6,theta:Math.PI},{dx:-6,dz:6,theta:0},{dx:6,dz:6,theta:Math.PI/2}];for(let n=-200;n<=200;n+=40)for(let s=-200;s<=200;s+=40)for(const{dx:a,dz:r,theta:l}of i){const c=n+a,h=s+r,u=new B(new jr(2,24,l,Math.PI/2),e);u.rotation.x=-Math.PI/2,u.position.set(c,.021,h),u.receiveShadow=!0,this.scene.add(u);const d=new B(new Ki(1.8,2,24,1,l,Math.PI/2),t);d.rotation.x=-Math.PI/2,d.position.set(c,.08,h),d.receiveShadow=!0,this.scene.add(d)}}onUpdate(e){this.updateCallbacks.push(e)}createSkyDome(){const e=new ft(800,32,16);e.scale(-1,1,1);const t=new Dt({uniforms:{topColor:{value:new we(4491468)},bottomColor:{value:new we(12970229)},offset:{value:100},exponent:{value:.8}},vertexShader:`
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
      `,side:Bt,depthWrite:!1}),i=new B(e,t);this.scene.add(i)}createClouds(){const e=new $({color:16777215,transparent:!0,opacity:.85});for(let t=0;t<10;t++){const i=new Ge,n=3+Math.floor(Math.random()*4);for(let s=0;s<n;s++){const a=8+Math.random()*12,r=new B(new ft(a,7,5),e);r.position.set(s*15-n*7+(Math.random()-.5)*10,(Math.random()-.5)*8,(Math.random()-.5)*15),i.add(r)}i.position.set((Math.random()-.5)*600,80+Math.random()*60,(Math.random()-.5)*600),this.scene.add(i),this.clouds.push({mesh:i,speed:.3+Math.random()*.7})}}createPuddles(){const e=new $({color:8952234,transparent:!0,opacity:.35});for(let t=0;t<20;t++){const i=2+Math.random()*4,n=1+Math.random()*2,s=new B(new mt(i,n),e);s.rotation.x=-Math.PI/2,s.position.set((Math.random()-.5)*300,.015,(Math.random()-.5)*300),this.scene.add(s)}}addRooftopDetails(e,t,i,n,s,a){const r=this.seed(s,a,200);if(r>.3){const l=new Ge;this.addBox(l,8947840,1.5,.6,1,0,0,0),this.addBox(l,6710880,1.5,.1,.8,0,.35,.05),l.position.set(t/2-2,n+.3,i/2-2),e.add(l)}if(r>.7&&n>8){const l=new B(new Ye(1,1,1.8,10),new $({color:9139029}));l.position.set(-t/2+2,n+.9,0),e.add(l);for(const[c,h]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]]){const u=new B(new Ye(.06,.06,1.5,4),new $({color:5592400}));u.position.set(-t/2+2+c,n+.1,h),e.add(u)}}if(r>.5&&r<.8){const l=new B(new ft(.4,8,4,0,Math.PI*2,0,Math.PI/2),new $({color:13421772}));l.position.set(t/2-1,n+.2,-i/2+1),l.rotation.x=-Math.PI/4,e.add(l)}if(r<.4){const l=new B(new Ye(.04,.04,3,4),new $({color:4473924}));l.position.set(0,n+1.5,0),e.add(l),this.addBox(e,4473924,2,.05,.05,0,n+2.5,0)}r>.4&&r<.6&&this.addBox(e,7829360,2,.4,.4,t/4,n+.2,-i/4)}addHydrant(e,t){const i=new Ge,n=new $({color:13378082}),s=new $({color:11145489}),a=new B(new Ye(.25,.28,.6,8),n);a.position.set(0,.3,0),i.add(a);const r=new B(new Ye(.18,.18,.12,8),s);r.position.set(0,.66,0),i.add(r);for(const l of[-1,1]){const c=new B(new Ye(.06,.06,.2,6),n);c.rotation.z=Math.PI/2,c.position.set(l*.3,.3,0),i.add(c)}i.position.set(e,0,t),this.scene.add(i)}addBin(e,t){const i=new Ge,n=new $({color:4473924}),s=new $({color:5592405}),a=new B(new Ye(.2,.22,.7,8),n);a.position.set(0,.35,0),i.add(a);const r=new B(new Ye(.22,.22,.08,8),s);r.position.set(0,.74,0),i.add(r),i.position.set(e,0,t),this.scene.add(i)}addBollard(e,t){const i=new Ge,n=new $({color:10066329}),s=new $({color:7829367}),a=new B(new Ye(.1,.1,.6,8),n);a.position.set(0,.3,0),i.add(a);const r=new B(new Ye(.14,.14,.08,8),s);r.position.set(0,.04,0),i.add(r),i.position.set(e,0,t),this.scene.add(i)}addBench(e,t,i=0){const n=new Ge,s=new $({color:9134144}),a=new $({color:5592405}),r=new B(new Q(1.2,.1,.4),s);r.position.set(0,.45,0),n.add(r);for(const c of[-.5,.5]){const h=new B(new Q(.05,.4,.4),a);h.position.set(c,.2,0),n.add(h)}const l=new B(new Q(1.2,.3,.08),s);l.position.set(0,.75,-.16),n.add(l),n.rotation.y=i,n.position.set(e,0,t),this.scene.add(n)}addBusStop(e,t,i=0){const n=new Ge,s=new $({color:13421772}),a=new $({color:4482730,transparent:!0,opacity:.7}),r=new B(new Ye(.05,.05,3.5,6),s);r.position.set(0,1.75,0),n.add(r);const l=new B(new Q(2,.05,.8),a);l.position.set(0,3.3,.4),n.add(l);const c=new B(new Q(.05,2.5,.8),a);c.position.set(0,2,0),n.add(c),n.rotation.y=i,n.position.set(e,0,t),this.scene.add(n)}addStreetLight(e,t,i=0,n=!1){const s=new Ge,a=new $({color:1118481}),r=new $({color:16771232,transparent:!0,opacity:.06}),l=new B(new Ye(.08,.1,6,6),a);l.position.set(0,3,0),s.add(l);const c=new B(new Q(.08,.08,1.5),a);c.position.set(0,6,-.75),c.rotation.x=-.2,s.add(c);const h=new B(new Q(.4,.15,.3),a);h.position.set(0,5.9,-1.4),s.add(h);const u=new B(new qi(1.5,3,8,1,!0),r);if(u.rotation.x=Math.PI,u.position.set(0,4.4,-1.4),s.add(u),s.rotation.y=i,s.position.set(e,0,t),this.scene.add(s),n){const d=new kh(16771232,.8,15);d.position.set(e+Math.sin(i+Math.PI)*1.4,5.9,t+Math.cos(i+Math.PI)*1.4),this.scene.add(d)}}addTrafficLight(e,t,i=0){const n=new Ge,s=new $({color:1118481}),a=new B(new Ye(.07,.09,4.5,6),s);a.position.set(0,2.25,0),n.add(a);const r=new B(new Q(.5,1.4,.4),s);r.position.set(0,4.7,0),n.add(r);const l=[16720384,16750848,52292];for(let c=0;c<3;c++){const h=new B(new Ye(.15,.15,.08,8),new $({color:l[c]}));h.rotation.x=Math.PI/2,h.position.set(0,5.25-c*.45,-.21),n.add(h)}n.rotation.y=i,n.position.set(e,0,t),this.scene.add(n)}createStreetLights(){let i=0;const n=20;for(let s=-160;s<=160;s+=40)for(let a=-160;a<=160;a+=20){const c=Math.sqrt(s*s+a*a)<80&&i<n,h=(a%40+40)%40;Math.min(h,40-h)>6&&(this.addStreetLight(a,s-5.2,0,c),this.addStreetLight(a,s+5.2,Math.PI,c),c&&(i+=2));const u=(a%40+40)%40;if(Math.min(u,40-u)>6&&(this.addStreetLight(s+5.2,a,Math.PI/2,c),this.addStreetLight(s-5.2,a,-Math.PI/2,c),c&&(i+=2)),i>=n)return}}createTrafficLights(){for(let n=-160;n<=160;n+=40)for(let s=-160;s<=160;s+=40)this.addTrafficLight(n-5.2,s-5.2,Math.PI/4),this.addTrafficLight(n+5.2,s-5.2,-Math.PI/4),this.addTrafficLight(n-5.2,s+5.2,3*Math.PI/4),this.addTrafficLight(n+5.2,s+5.2,-3*Math.PI/4)}createStreetFurniture(){for(let i=-160;i<=160;i+=40)for(let n=-160;n<=160;n+=20){const s=this.seed(i,n,300),a=this.seed(i,n,301);if(s>.4){const c=s>.7?1:-1,h=(this.seed(n,i,302)-.5)*4,u=(n%40+40)%40;Math.min(u,40-u)>8&&(a<.3?this.addHydrant(n+h,i+c*5.2):a<.5?this.addBin(n+h,i+c*5.2):a<.65?this.addBollard(n+h,i+c*5.2):a<.75&&this.addBench(n+h,i+c*5.2))}const r=this.seed(n,i,303),l=this.seed(n,i,304);if(r>.4){const c=r>.7?1:-1,h=(this.seed(i,n,305)-.5)*4,u=(n%40+40)%40;Math.min(u,40-u)>8&&(l<.3?this.addHydrant(i+c*5.2,n+h):l<.5?this.addBin(i+c*5.2,n+h):l<.65?this.addBollard(i+c*5.2,n+h):l<.75&&this.addBench(i+c*5.2,n+h,Math.PI/2))}}for(let i=-160;i<=160;i+=40)for(let n=-160;n<=160;n+=160){const s=(n%40+40)%40;Math.min(s,40-s)>8&&this.addBusStop(n,i+5.5,0);const a=(n%40+40)%40;Math.min(a,40-a)>8&&this.addBusStop(i+5.5,n,Math.PI/2)}this.createStreetLights(),this.createTrafficLights()}addGlassBox(e,t,i,n,s,a,r,l){const c=Math.random()>.6?new we(2241348):new we(1122867),h=new B(new Q(i,n,s),new $({color:t,emissive:c,emissiveIntensity:Math.random()*.4}));h.position.set(a,r,l),h.castShadow=!0,h.receiveShadow=!0,e.add(h)}buildToiletBlock(e,t){const i=new Ge;this.addBox(i,11577496,10,3.5,8,0,1.75,0),this.addBox(i,10064008,11,.3,9,0,3.65,0),this.addBox(i,2236960,1.6,2.4,.2,-2.2,1.2,-4.05),this.addBox(i,2236960,1.6,2.4,.2,2.2,1.2,-4.05),this.addBox(i,15263968,10.1,.4,8.1,0,1.8,0),this.addBox(i,3359829,8,.8,.15,0,3.1,-4.05),this.addBox(i,16777215,6,.2,.1,0,3.2,-4.03),this.addCyl(i,4473920,.15,.15,8,6,0,4,-5.5),this.addBox(i,2201331,4,1.5,.3,0,8.75,-5.5),this.addBox(i,16777215,3,.25,.1,0,9,-5.38),this.addBox(i,16777215,3,.25,.1,0,8.5,-5.38);const n=new $({color:6600182,emissive:new we(1402304),emissiveIntensity:.4}),s=new B(new ft(.7,8,6),n);s.position.set(0,10.5,-5.5),i.add(s),i.position.set(e,0,t),this.scene.add(i)}start(){const e=t=>{const i=Math.min((t-this.lastTime)/1e3,.05);this.lastTime=t;for(const n of this.updateCallbacks)n(i);for(const n of this.clouds)n.mesh.position.x-=n.speed*i,n.mesh.position.x<-350&&(n.mesh.position.x=350);this.composer.render(),requestAnimationFrame(e)};requestAnimationFrame(e)}}const Gh=.9,Fi={Matt:{name:"Matt",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:6044190,hairStyle:"short"},Jose:{name:"Jose",skinColor:12884592,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:657930,hairStyle:"dreadlocks"},Jarrad:{name:"Jarrad",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236976,hairColor:1710618,hairStyle:"topknot",glassesColor:2236962,hasPhone:!0},Phil:{name:"Phil",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:3821696,hairColor:12632248,hairStyle:"silver",glassesColor:11053216},Tsuyoshi:{name:"Tsuyoshi",skinColor:12093528,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236960,hairColor:657930,hairStyle:"mohawk"},Fabio:{name:"Fabio",skinColor:12488288,shirtColor:1801924,shirtLogoColor:16777215,pantsColor:2631728,hairColor:1708040,hairStyle:"bun",glassesColor:2759176},Joe:{name:"Joe",skinColor:13934704,shirtColor:15777792,shirtLogoColor:1710618,pantsColor:2763320,hairColor:3811866,hairStyle:"short",helmetColor:16119280,hiVisBands:!0},Mikayla:{name:"Mikayla",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:1708064,hairColor:10035780,hairStyle:"bun"},Connie:{name:"Connie",skinColor:15255704,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:2763322,hairColor:16109664,hairStyle:"wildblonde"}};class ts{constructor(e){_(this,"group");_(this,"mixer");_(this,"walkAction");_(this,"idleAction");_(this,"currentAction");_(this,"logoMesh");this.group=new Ge,this._build(e),this.mixer=new Sg(this.group);const t=this._buildWalkClip(),i=this._buildIdleClip();this.walkAction=this.mixer.clipAction(t),this.idleAction=this.mixer.clipAction(i),this.idleAction.play(),this.currentAction=this.idleAction}_build(e){const t=new ai;t.name="Hip",t.position.set(0,1,0);const i=new ai;i.name="Spine",i.position.set(0,.55,0);const n=new ai;n.name="Head",n.position.set(0,.65,0);const s=new ai;s.name="LShoulder",s.position.set(-.4,.38,0);const a=new ai;a.name="LForeArm",a.position.set(0,-.36,0);const r=new ai;r.name="RShoulder",r.position.set(.4,.38,0);const l=new ai;l.name="RForeArm",l.position.set(0,-.36,0);const c=new ai;c.name="LHip",c.position.set(-.16,-.05,0);const h=new ai;h.name="LKnee",h.position.set(0,-.5,0);const u=new ai;u.name="RHip",u.position.set(.16,-.05,0);const d=new ai;d.name="RKnee",d.position.set(0,-.5,0),t.add(i),i.add(n),i.add(s),s.add(a),i.add(r),r.add(l),t.add(c),c.add(h),t.add(u),u.add(d),this.group.add(t);const f=M=>new $({color:M}),g=(M,y,R,C,A,I=0,T=0,b=0)=>{const P=new B(new Q(R,C,A),f(y));P.position.set(I,T,b),P.castShadow=!0,M.add(P)},v=(M,y,R,C,A=0,I=0,T=0)=>{const b=new B(new Ye(R,R,C,8),f(y));b.position.set(A,I,T),b.castShadow=!0,M.add(b)},m=(M,y,R,C=0,A=0,I=0)=>{const T=new B(new ft(R,10,8),f(y));T.position.set(C,A,I),T.castShadow=!0,M.add(T)};g(i,e.shirtColor,.5,.56,.28,0,.02,0),e.hiVisBands&&(g(i,16777215,.52,.06,.3,0,.18,0),g(i,16777215,.52,.06,.3,0,-.1,0));const p=this._makeLogo(e),w=new B(new mt(.44,.5),new zt({map:p,transparent:!0,depthWrite:!1}));if(w.position.set(0,.02,.145),i.add(w),this.logoMesh=w,g(t,e.pantsColor,.44,.2,.26,0,0,0),v(s,e.shirtColor,.08,.34,0,-.17,0),v(r,e.shirtColor,.08,.34,0,-.17,0),e.hiVisBands&&(g(s,16777215,.18,.06,.18,0,-.1,0),g(r,16777215,.18,.06,.18,0,-.1,0)),v(a,e.skinColor,.07,.3,0,-.15,0),v(l,e.skinColor,.07,.3,0,-.15,0),g(a,e.skinColor,.13,.11,.09,0,-.32,0),g(l,e.skinColor,.13,.11,.09,0,-.32,0),e.hasPhone){const M=new $({color:1118484}),y=new B(new Q(.11,.19,.013),M);y.position.set(.01,-.38,.05),l.add(y);const R=new $({color:2767445,emissive:1714756}),C=new B(new mt(.085,.15),R);C.position.set(0,0,.008),y.add(C)}v(c,e.pantsColor,.11,.46,0,-.23,0),v(u,e.pantsColor,.11,.46,0,-.23,0),v(h,e.pantsColor,.09,.42,0,-.21,0),v(d,e.pantsColor,.09,.42,0,-.21,0),g(h,1710616,.19,.12,.24,0,-.46,.03),g(d,1710616,.19,.12,.24,0,-.46,.03),v(n,e.skinColor,.09,.16,0,-.08,0),m(n,e.skinColor,.21,0,.1,0),g(n,2236962,.055,.035,.02,-.07,.12,.2),g(n,2236962,.055,.035,.02,.07,.12,.2),this._buildHair(n,e,f),e.glassesColor!==void 0&&g(n,e.glassesColor,.24,.055,.015,0,.12,.21),e.helmetColor!==void 0&&(g(n,e.helmetColor,.5,.07,.5,0,.25,-.01),g(n,e.helmetColor,.38,.18,.38,0,.34,-.01))}_buildHair(e,t,i){const n=i(t.hairColor),s=(a,r,l,c)=>{const h=new B(a,n);h.position.set(r,l,c),e.add(h)};switch(t.hairStyle){case"short":case"silver":s(new ft(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),t.hairStyle==="silver"&&(s(new Q(.11,.18,.13),-.19,.06,0),s(new Q(.11,.18,.13),.19,.06,0));break;case"dreadlocks":s(new ft(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0);for(const[a,r]of[[-.12,0],[.12,0],[0,-.16],[-.08,-.1],[.08,-.1]])s(new Ye(.035,.022,.38,6),a,-.07,r);break;case"mohawk":s(new Q(.09,.26,.4),0,.28,0);break;case"bun":s(new ft(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),s(new ft(.09,7,6),0,.05,-.19);break;case"topknot":{s(new ft(.215,8,5,0,Math.PI*2,0,Math.PI*.45),0,.08,0);const a=new B(new Ye(.06,.08,.18,7),n);a.position.set(0,.3,0),e.add(a),s(new ft(.085,7,6),0,.41,0);const r=new $({color:1118481}),l=new B(new Wo(.075,.018,6,10),r);l.rotation.x=Math.PI/2,l.position.set(0,.29,0),e.add(l);break}case"wildblonde":{s(new ft(.225,8,5,0,Math.PI*2,0,Math.PI*.55),0,.1,0);const a=[[-.2,-.18,.04,.3,0],[.2,-.18,.04,-.3,0],[-.14,-.22,-.14,.2,.15],[.14,-.22,-.14,-.2,.15],[0,-.26,-.18,0,0],[-.1,-.16,.16,-.15,0],[.1,-.16,.16,.15,0]];for(const[r,l,c,h,u]of a){const d=new B(new Ye(.045,.02,.5,5),n);d.position.set(r,l,c),d.rotation.z=h,d.rotation.x=u,e.add(d)}break}}}setLogoTexture(e){const t=this.logoMesh.material;t.map=e,t.needsUpdate=!0}_makeLogo(e){return Uh(e.shirtColor)}_buildWalkClip(){const e=Math.PI/180,t=.8,i=[0,.2,.4,.6,.8],n=(s,a=0,r=0)=>Array.from(new ei().setFromEuler(new Jt(s*e,a*e,r*e)).toArray());return new As("walk",t,[new _t("LHip.quaternion",i,[...n(-35),...n(0),...n(35),...n(0),...n(-35)]),new _t("RHip.quaternion",i,[...n(35),...n(0),...n(-35),...n(0),...n(35)]),new _t("LKnee.quaternion",i,[...n(-5),...n(-18),...n(-28),...n(-12),...n(-5)]),new _t("RKnee.quaternion",i,[...n(-28),...n(-12),...n(-5),...n(-18),...n(-28)]),new _t("LShoulder.quaternion",i,[...n(28,0,8),...n(0,0,8),...n(-28,0,8),...n(0,0,8),...n(28,0,8)]),new _t("RShoulder.quaternion",i,[...n(-28,0,-8),...n(0,0,-8),...n(28,0,-8),...n(0,0,-8),...n(-28,0,-8)]),new _t("Hip.quaternion",i,[...n(0,0,4),...n(0,0,0),...n(0,0,-4),...n(0,0,0),...n(0,0,4)]),new yn("Hip.position",i,[0,1.02,0,0,1,0,0,1.02,0,0,1,0,0,1.02,0])])}_buildIdleClip(){const e=Math.PI/180,t=2.4,i=[0,.6,1.2,1.8,2.4],n=(s,a=0,r=0)=>Array.from(new ei().setFromEuler(new Jt(s*e,a*e,r*e)).toArray());return new As("idle",t,[new _t("Spine.quaternion",i,[...n(0,0,1),...n(0,0,0),...n(0,0,-1),...n(0,0,0),...n(0,0,1)]),new yn("Hip.position",i,[0,1,0,0,1.01,0,0,1,0,0,.99,0,0,1,0]),new _t("LShoulder.quaternion",[0,2.4],[...n(0,0,8),...n(0,0,8)]),new _t("RShoulder.quaternion",[0,2.4],[...n(0,0,-8),...n(0,0,-8)])])}buildJumpRopeClip(){const e=Math.PI/180,t=Gh,i=[0,.225,.45,.675,.9],n=(s,a=0,r=0)=>Array.from(new ei().setFromEuler(new Jt(s*e,a*e,r*e)).toArray());return new As("jumprope",t,[new yn("Hip.position",i,[0,1,0,0,1.28,0,0,1,0,0,1.28,0,0,1,0]),new _t("LShoulder.quaternion",[0,.5],[...n(0,0,52),...n(0,0,52)]),new _t("RShoulder.quaternion",[0,.5],[...n(0,0,-52),...n(0,0,-52)]),new _t("LForeArm.quaternion",[0,.5],[...n(-20),...n(-20)]),new _t("RForeArm.quaternion",[0,.5],[...n(-20),...n(-20)]),new _t("LKnee.quaternion",i,[...n(-22),...n(-5),...n(-22),...n(-5),...n(-22)]),new _t("RKnee.quaternion",i,[...n(-22),...n(-5),...n(-22),...n(-5),...n(-22)]),new _t("Spine.quaternion",i,[...n(8),...n(2),...n(8),...n(2),...n(8)])])}setWalking(e){const t=e?this.walkAction:this.idleAction;t!==this.currentAction&&(t.reset().play(),this.currentAction.crossFadeTo(t,.2,!1),this.currentAction=t)}update(e){this.mixer.update(e)}}const Gg={Jose:{x:-80,z:-40},Jarrad:{x:40,z:-80},Matt:{x:80,z:40},Phil:{x:-40,z:80},Tsuyoshi:{x:120,z:-40},Fabio:{x:-120,z:40},Joe:{x:0,z:-120}},Hg={Matt:["Troweled Earth is the best product on the market. Full stop. Don't argue.","Jose has a whole music room and a cigar collection but can't reply to a text message. That's the guy.","I've been up since 4am and done 80 square metres. How's your morning?","Jarrad's got opinions on how everyone else lives their life. Zero opinions on his own. Interesting.","Antique Stucco, Hemp Render, Tadelakt — I'll do all three before lunch.","Jose called himself Wall Jesus in front of a client. An actual client. I was standing right there.","Jarrad once sent me a 400-word message about something I said. I read the first line. Seemed about right.","Right. Tools out. Let's get this done."],Jose:["I didn't apply plaster. I gave the wall a soul. Big difference.","Matt is a great man. Big heart. Absolutely no volume control. You can hear him from the next suburb.","I was in my music room last night finishing a track. Then I invented a new finish. Big night.","My cigar costs more than your primer. It is worth it.","Jarrad sends meeting agendas. For conversations. Between two people. In a van.","Wall Jesus doesn't do touch-ups. Wall Jesus does originals.","Matt apologises for nothing. I respect it. Also it is sometimes a problem.","Other plasterers apply product. I apply vision. Light a cigar and watch."],Jarrad:["Been waiting fifteen minutes. Did you read the TDS? Because I did. Twice.","Hang on — just finishing something.","Jose has a whole spiritual identity built around being mysterious. He's from Footscray. I looked it up.","I'm not micro-managing. I'm preventing the disaster you are about to cause.","Matt once introduced himself to a client by saying 'I don't do small talk'. To their face. At the door.","Have you seen my sister? She's supposed to be here. She's doing jump rope.","I would do it myself but then nothing else would get done. Look, I've already typed up a plan.","Mikayla borrowed my trowel again. I have a spare. I'm not lending that one either.","This is interesting. Have you heard of this Epstein list thing?","Who designed this waypoint system? Actually — don't answer that. I'll figure it out."],Phil:["I've been in this game longer than some of these buildings.","Back in my day we didn't have sealers. We just hoped.","Forty years in plaster. My knees disagree with the timeline.","That's a nice van. My first van had a hole in the floor.","The youngsters think Marbellino is new. I did it before it had a name.","Seven year warranty. I've outlasted three of those already.","If the surface isn't right, no product will fix it. That's wisdom.","I'm too old for emergencies. Call Darren."],Tsuyoshi:["My trowel... she is like samurai sword. Must be respected.","In Japan, we say... actually this is different in Australia. But same feeling.","I study engineering. Also I study this wall. Both are... very complex.","The angle of application is most important. Like blade angle. Very critical.","I think about the wall much. The wall also thinks, I believe.","This surface... it is speaking to me. I will listen before I apply.","My sensei say: good craftsman blame tool. But I never blame my trowel. She is perfect.","One day I will design the building. And also I will plaster it. Both very satisfying."],Fabio:["Ehhhh — in Italy, we do not rush the plaster. She knows when she is ready.","I am Fabio. You have heard of me, yes? Ehhhh — of course you have.","Last night I find a pizza place — thin base, wood fire, proper San Marzano. Ehhhh. I almost cry.","I have plastered villas in Tuscany. This job is also... acceptable. Ehhhh.","The colour must be chosen with the soul, not the brain. Ehhhh — the brain is for pizza toppings.","I put my heart into every wall. Same as I put my heart into a good margherita. Ehhhh.","Madonna mia, this surface has potential. Not as much potential as a good pizza, but still.","Other men apply plaster. Fabio makes love to the wall. Artistically speaking. Ehhhh.","You want to know the secret of perfect render? Patience. Same as perfect pizza dough. Ehhhh — same thing.","I carry my trowel like a man carries his last slice. With respect. With both hands."],Joe:["Don't judge me by the helmet. I contain multitudes.","Good honest work. That's all any of us can do.","I don't talk politics on site. But I do have a bumper sticker.","Hard work, good product, fair pay. That's the whole philosophy.","Free Palestine. That's all I'll say. Back to work.","I've been boycotting certain brands for three years. You'd be surprised.","The helmet stays on. Most of the opinions stay in.","Solid crew. Good product. Just don't ask me about the news."]},Vg=15,Wg=12e3;class Xg{constructor(e){_(this,"scene");_(this,"crewMap",new Map);_(this,"lastDialogue",new Map);_(this,"dialogueIndex",new Map);this.scene=e}spawnCrewAtCityPositions(){for(const[e,t]of Object.entries(Gg)){const i=Fi[e];if(!i)continue;const n=new ts(i);n.group.scale.set(2,2,2);const s=new Ge;s.add(n.group);const a=new B(new Ki(1.2,1.6,32),new zt({color:16763904,side:Ut}));a.rotation.x=-Math.PI/2,a.position.y=.05,s.add(a);const r=document.createElement("canvas");r.width=256,r.height=64;const l=r.getContext("2d");l.fillStyle="rgba(0,0,0,0.75)",l.roundRect?l.roundRect(2,2,252,60,8):l.rect(2,2,252,60),l.fill(),l.fillStyle="#fff",l.font="bold 30px Arial",l.textAlign="center",l.textBaseline="middle",l.fillText(e.toUpperCase(),128,32);const c=new B(new mt(2.2,.55),new zt({map:new zs(r),transparent:!0,depthWrite:!1}));c.position.set(0,8.5,0),c.renderOrder=1,s.add(c),s.position.set(t.x,0,t.z),this.scene.add(s),this.crewMap.set(e,{character:n,wrapper:s,pos:t}),this.lastDialogue.set(e,0),this.dialogueIndex.set(e,Math.floor(Math.random()*8))}}updateAll(e){for(const{character:t}of this.crewMap.values())t.update(e)}checkProximityDialogue(e,t){const i=Date.now();for(const[n,{wrapper:s,pos:a}]of this.crewMap.entries()){if(!s.visible)continue;const r=e-a.x,l=t-a.z;if(Math.sqrt(r*r+l*l)>Vg)continue;const c=this.lastDialogue.get(n)??0;if(i-c<Wg)continue;const h=Hg[n];if(!h)continue;const u=this.dialogueIndex.get(n)??0,d=h[u%h.length];return this.dialogueIndex.set(n,u+1),this.lastDialogue.set(n,i),{name:n,line:d,pos:a}}return null}hideCrew(e){const t=this.crewMap.get(e);t&&(t.wrapper.visible=!1)}showAllCrew(){for(const{wrapper:e}of this.crewMap.values())e.visible=!0}showCrew(e){const t=this.crewMap.get(e);t&&(t.wrapper.visible=!0)}getCrewPosition(e){var t;return((t=this.crewMap.get(e))==null?void 0:t.pos)??{x:0,z:0}}dispose(){for(const{wrapper:e}of this.crewMap.values())this.scene.remove(e);this.crewMap.clear()}}class jg{constructor(e){_(this,"mesh");_(this,"velocity",new L);_(this,"heading",0);_(this,"bodyGroup");_(this,"suspensionY",0);_(this,"suspensionVel",0);this.mesh=new Ge,this.bodyGroup=new Ge,this.mesh.add(this.bodyGroup);const t=new $({color:1118481}),i=new B(new Q(2.4,1.6,3.2),t);i.position.set(0,.8,.8),i.castShadow=!0,i.receiveShadow=!0,this.bodyGroup.add(i);const n=new $({color:1579032}),s=new B(new Q(2.4,1.4,1.6),n);s.position.set(0,.7,-1.6),s.castShadow=!0,s.receiveShadow=!0,this.bodyGroup.add(s);const a=new $({color:2241348}),r=new B(new Q(2,1,.1),a);r.rotation.x=-.18,r.position.set(0,1.15,-2.36),r.castShadow=!0,r.receiveShadow=!0,this.bodyGroup.add(r);const l=new $({color:1381653}),c=new B(new Q(2.3,.15,4.6),l);c.position.set(0,1.675,0),c.castShadow=!0,c.receiveShadow=!0,this.bodyGroup.add(c);const h=new $({color:12674667}),u=new B(new Q(.05,.35,3),h);u.position.set(-1.23,.85,.5),u.castShadow=!0,u.receiveShadow=!0,this.bodyGroup.add(u);const d=new B(new Q(.05,.35,3),h);d.position.set(1.23,.85,.5),d.castShadow=!0,d.receiveShadow=!0,this.bodyGroup.add(d);const f=new $({color:3359829}),g=new B(new Q(.05,.4,.5),f);g.position.set(-1.22,1.1,-1.7),g.castShadow=!0,g.receiveShadow=!0,this.bodyGroup.add(g);const v=new B(new Q(.05,.4,.5),f);v.position.set(1.22,1.1,-1.7),v.castShadow=!0,v.receiveShadow=!0,this.bodyGroup.add(v);const m=new $({color:3355443});for(const be of[-.3,.3]){const he=new B(new Q(.05,1.4,.1),m);he.position.set(be,.8,2.46),he.castShadow=!0,he.receiveShadow=!0,this.bodyGroup.add(he)}const p=new $({color:526344}),w=new B(new Q(.04,1.6,.05),p);w.position.set(-1.22,.8,-.8),this.bodyGroup.add(w);const M=new B(new Q(.04,1.6,.05),p);M.position.set(1.22,.8,-.8),this.bodyGroup.add(M);const y=new B(new Q(2.4,.04,.05),p);y.position.set(0,1.58,-.8),this.bodyGroup.add(y);const R=new $({color:1118481}),C=new $({color:3359829});for(const be of[-1,1]){const he=be*1.3,Ee=new B(new Q(.18,.12,.22),R);Ee.position.set(he,1.1,-1.7),this.bodyGroup.add(Ee);const Ze=new B(new Q(.08,.1,.18),C);Ze.position.set(he+be*.05,1.1,-1.7),this.bodyGroup.add(Ze)}const A=new $({color:3355443});for(const be of[-.15,-.85]){const he=new B(new Q(2.1,.07,.07),A);he.position.set(0,1.78,be),this.bodyGroup.add(he)}for(const be of[-.95,.95]){const he=new B(new Q(.05,.05,.7),A);he.position.set(be,1.78,-.5),this.bodyGroup.add(he)}const I=Oh(512),T=new $({map:I,transparent:!0,depthWrite:!1}),b=new B(new mt(2,3.8),T);b.rotation.x=-Math.PI/2,b.position.set(0,1.8,.9),this.bodyGroup.add(b);const P=new $({color:8947848});for(const be of[-.6,.6]){const he=new B(new Q(.06,.06,.14),P);he.position.set(be,.85,2.52),this.bodyGroup.add(he)}const z=new B(new Q(2.4,.04,.06),p);z.position.set(0,1.2,2.47),this.bodyGroup.add(z);const O=new $({color:16733440}),G=new $({color:1118481}),K=new B(new Q(.05,.22,.82),O);K.position.set(-1.255,.86,.36),this.bodyGroup.add(K);const q=new B(new Q(.06,.05,.16),G);q.position.set(-1.262,.96,.12),this.bodyGroup.add(q);const te=new B(new Q(.06,.15,.05),G);te.position.set(-1.262,.86,.12),this.bodyGroup.add(te);const W=new B(new Q(.06,.18,.05),G);W.position.set(-1.262,.86,.38),this.bodyGroup.add(W);const re=new B(new Q(.06,.04,.13),G);re.position.set(-1.262,.95,.445),this.bodyGroup.add(re);const de=new B(new Q(.06,.04,.1),G);de.position.set(-1.262,.86,.43),this.bodyGroup.add(de);const ve=new B(new Q(.06,.04,.13),G);ve.position.set(-1.262,.77,.445),this.bodyGroup.add(ve);const Be=new B(new Q(.06,.18,.05),G);Be.position.set(-1.262,.86,.61),this.bodyGroup.add(Be);const Ue=new B(new Q(.06,.18,.05),G);Ue.position.set(-1.262,.86,.73),this.bodyGroup.add(Ue);const Y=new B(new Q(.06,.08,.13),G);Y.position.set(-1.262,.92,.67),this.bodyGroup.add(Y);const X=new B(new Q(.05,.22,.82),O);X.position.set(1.255,.86,.36),this.bodyGroup.add(X);const le=new Ye(.38,.38,.28,10),ne=new $({color:1118481}),Pe=new $({color:8947848}),Le=[[-1.25,.38,-1.2,-1],[1.25,.38,-1.2,1],[-1.25,.38,1.3,-1],[1.25,.38,1.3,1]];for(const[be,he,Ee,Ze]of Le){const Ce=new B(le,ne);Ce.rotation.z=Math.PI/2,Ce.position.set(be,he,Ee),Ce.castShadow=!0,Ce.receiveShadow=!0,this.mesh.add(Ce);const E=new Ye(.2,.2,.06,10),x=new B(E,Pe);x.rotation.z=Math.PI/2,x.position.set(be+Ze*.15,he,Ee),x.castShadow=!0,x.receiveShadow=!0,this.mesh.add(x);const U=new $({color:3355443}),Z=new B(new Ye(.36,.38,.06,10),U);Z.rotation.z=Math.PI/2,Z.position.set(be+Ze*.2,he,Ee),this.mesh.add(Z);const ie=new $({color:1118481}),J=new B(new Q(.14,.1,.82),ie);J.position.set(be+Ze*.07,he+.3,Ee),this.bodyGroup.add(J)}const se=new $({color:16777181,emissive:16777181,emissiveIntensity:.8});for(const be of[-.8,.8]){const he=new B(new Q(.35,.2,.08),se);he.position.set(be,.75,-2.41),he.castShadow=!0,he.receiveShadow=!0,this.bodyGroup.add(he)}const Ie=new zt({color:16777164,transparent:!0,opacity:.08,side:Bt}),De=new qi(1.5,8,8,1,!0);for(const be of[-.6,.6]){const he=new B(De,Ie);he.rotation.x=Math.PI/2,he.position.set(be,.7,-3),this.bodyGroup.add(he)}const qe=new $({color:16720384,emissive:16720384,emissiveIntensity:.8});for(const be of[-.8,.8]){const he=new B(new Q(.3,.18,.06),qe);he.position.set(be,.75,2.47),he.castShadow=!0,he.receiveShadow=!0,this.bodyGroup.add(he)}const D=new $({color:3355443}),et=new B(new Q(2,.08,.8),D);et.position.set(0,1.77,-.5),et.castShadow=!0,et.receiveShadow=!0,this.bodyGroup.add(et),this.mesh.position.set(0,0,0),e.add(this.mesh)}triggerBump(e){this.suspensionVel=-e*6}updateSuspension(e){const t=-80*this.suspensionY-10*this.suspensionVel;this.suspensionVel+=t*e,this.suspensionY+=this.suspensionVel*e,this.suspensionY=Math.max(-.35,Math.min(.35,this.suspensionY)),this.bodyGroup.position.y=this.suspensionY,this.bodyGroup.rotation.z=-this.suspensionY*.08}get suspensionMagnitude(){return Math.abs(this.suspensionY)+Math.abs(this.suspensionVel)*.04}}const mi={maxSpeed:80,acceleration:55,reverseForce:45,friction:.985,steerRate:2.8,minSpeedToSteer:.5,gripAtLowSpeed:7,gripAtHighSpeed:1.2},yc=40,Yg=4,qg=30,$g=.8;function Jg(o){for(;o>Math.PI;)o-=Math.PI*2;for(;o<-Math.PI;)o+=Math.PI*2;return o}function Kg(o){return Math.round(o/yc)*yc}function _c(o,e){let t=0;const i=Kg((o+e)*.5);for(const n of[-1,1]){const s=i+n*Yg;(o-s)*(e-s)<0&&t++}return t}class Zg{constructor(e,t,i,n,s){_(this,"van");_(this,"input");_(this,"_speed",0);_(this,"velocityAngle",0);_(this,"prevPos",new L);_(this,"onBump");_(this,"onBuildingHit");_(this,"collisionWorld");_(this,"COLL_GRID",40);_(this,"COLL_ROAD_HALF",6.5);this.van=e,this.input=t,this.onBump=i,this.collisionWorld=n,this.onBuildingHit=s,this.velocityAngle=this.van.heading,this.prevPos.copy(this.van.mesh.position)}get speed(){return this._speed}update(e){var l;this.prevPos.copy(this.van.mesh.position);const t=Math.abs(this._speed);if(this.input.forward&&(this._speed+=mi.acceleration*e),this.input.brake&&(this._speed-=mi.reverseForce*e),this._speed*=Math.pow(mi.friction,e*60),this._speed=Math.max(-80*.5,Math.min(mi.maxSpeed,this._speed)),t>mi.minSpeedToSteer){const c=this.input.left?-1:this.input.right?1:Math.abs(this.input.steerAxis)>.1?this.input.steerAxis:0,h=Math.min(1,t/15);this.van.heading+=c*mi.steerRate*h*Math.sign(this._speed)*e}const i=Math.min(t/mi.maxSpeed,1),n=mi.gripAtLowSpeed+(mi.gripAtHighSpeed-mi.gripAtLowSpeed)*i,s=Jg(this.van.heading-this.velocityAngle);this.velocityAngle+=s*n*e;const a=new L(Math.sin(this.velocityAngle),0,-Math.cos(this.velocityAngle));this.van.velocity.copy(a).multiplyScalar(this._speed),this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(e)),this.van.mesh.rotation.y=-this.van.heading;const r=245;if(this.van.mesh.position.x=Math.max(-r,Math.min(r,this.van.mesh.position.x)),this.van.mesh.position.z=Math.max(-r,Math.min(r,this.van.mesh.position.z)),this.collisionWorld){const c=this.collisionWorld.resolveCircle(this.van.mesh.position.x,this.van.mesh.position.z,1.8);(c.x!==this.van.mesh.position.x||c.z!==this.van.mesh.position.z)&&(this._speed*=.65,(l=this.onBuildingHit)==null||l.call(this),this.van.mesh.position.x=c.x,this.van.mesh.position.z=c.z)}this._checkCurbCrossings()}distToNearestRoad(e){const t=(e%this.COLL_GRID+this.COLL_GRID)%this.COLL_GRID;return Math.min(t,this.COLL_GRID-t)}isOnRoad(e,t){const i=this.distToNearestRoad(e),n=this.distToNearestRoad(t);return i<this.COLL_ROAD_HALF||n<this.COLL_ROAD_HALF}resolveCollision(e,t,i,n){return this.isOnRoad(i,n)?{x:i,z:n}:this.isOnRoad(e,n)?{x:e,z:n}:this.isOnRoad(i,t)?{x:i,z:t}:{x:e,z:t}}applyImpulse(e,t){this._speed*=.5,this.van.mesh.position.x+=e*.1,this.van.mesh.position.z+=t*.1}_checkCurbCrossings(){const e=this.van.mesh.position,t=this.prevPos,i=_c(t.x,e.x),n=_c(t.z,e.z);if(i+n===0)return;const r=Math.abs(this._speed)/qg,l=Math.max($g,Math.min(1,r));this.van.triggerBump(l),this._speed*=.85,this.onBump&&this.onBump(l)}}const Ao=(o,e)=>{const t=e.x-o.x,i=e.y-o.y;return Math.sqrt(t*t+i*i)},Qg=(o,e)=>{const t=e.x-o.x,i=e.y-o.y;return t1(Math.atan2(i,t))},e1=(o,e,t)=>{const i={x:0,y:0};return t=Sr(t),i.x=o.x-e*Math.cos(t),i.y=o.y-e*Math.sin(t),i},Sr=o=>o*(Math.PI/180),t1=o=>o*(180/Math.PI),i1=o=>isNaN(o.buttons)?o.pressure!==0:o.buttons!==0,Ca=new Map,xc=o=>{Ca.has(o)&&clearTimeout(Ca.get(o)),Ca.set(o,setTimeout(o,100))},No=(o,e,t)=>{const i=e.split(/[ ,]+/g);let n;for(let s=0;s<i.length;s+=1)n=i[s],o.addEventListener?o.addEventListener(n,t,!1):o.attachEvent&&o.attachEvent(n,t)},bc=(o,e,t)=>{const i=e.split(/[ ,]+/g);let n;for(let s=0;s<i.length;s+=1)n=i[s],o.removeEventListener?o.removeEventListener(n,t):o.detachEvent&&o.detachEvent(n,t)},Hh=o=>(o.preventDefault(),o.type.match(/^touch/)?o.changedTouches:o),wc=()=>{const o=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,e=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:o,y:e}},Mc=(o,e)=>{e.top||e.right||e.bottom||e.left?(o.style.top=e.top,o.style.right=e.right,o.style.bottom=e.bottom,o.style.left=e.left):(o.style.left=e.x+"px",o.style.top=e.y+"px")},Qr=(o,e,t)=>{const i=Vh(o);for(let n in i)if(i.hasOwnProperty(n))if(typeof e=="string")i[n]=e+" "+t;else{let s="";for(let a=0,r=e.length;a<r;a+=1)s+=e[a]+" "+t+", ";i[n]=s.slice(0,-2)}return i},n1=(o,e)=>{const t=Vh(o);for(let i in t)t.hasOwnProperty(i)&&(t[i]=e);return t},Vh=o=>{const e={};return e[o]="",["webkit","Moz","o"].forEach(function(i){e[i+o.charAt(0).toUpperCase()+o.slice(1)]=""}),e},Aa=(o,e)=>{for(let t in e)e.hasOwnProperty(t)&&(o[t]=e[t]);return o},s1=(o,e)=>{const t={};for(let i in o)o.hasOwnProperty(i)&&e.hasOwnProperty(i)?t[i]=e[i]:o.hasOwnProperty(i)&&(t[i]=o[i]);return t},Er=(o,e)=>{if(o.length)for(let t=0,i=o.length;t<i;t+=1)e(o[t]);else e(o)},o1=(o,e,t)=>({x:Math.min(Math.max(o.x,e.x-t),e.x+t),y:Math.min(Math.max(o.y,e.y-t),e.y+t)});var a1="ontouchstart"in window,r1=!!window.PointerEvent,l1=!!window.MSPointerEvent,xs={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},Vn,ks={};r1?Vn=xs.pointer:l1?Vn=xs.MSPointer:a1?(Vn=xs.touch,ks=xs.mouse):Vn=xs.mouse;function Ni(){}Ni.prototype.on=function(o,e){var t=this,i=o.split(/[ ,]+/g),n;t._handlers_=t._handlers_||{};for(var s=0;s<i.length;s+=1)n=i[s],t._handlers_[n]=t._handlers_[n]||[],t._handlers_[n].push(e);return t};Ni.prototype.off=function(o,e){var t=this;return t._handlers_=t._handlers_||{},o===void 0?t._handlers_={}:e===void 0?t._handlers_[o]=null:t._handlers_[o]&&t._handlers_[o].indexOf(e)>=0&&t._handlers_[o].splice(t._handlers_[o].indexOf(e),1),t};Ni.prototype.trigger=function(o,e){var t=this,i=o.split(/[ ,]+/g),n;t._handlers_=t._handlers_||{};for(var s=0;s<i.length;s+=1)n=i[s],t._handlers_[n]&&t._handlers_[n].length&&t._handlers_[n].forEach(function(a){a.call(t,{type:n,target:t},e)})};Ni.prototype.config=function(o){var e=this;e.options=e.defaults||{},o&&(e.options=s1(e.options,o))};Ni.prototype.bindEvt=function(o,e){var t=this;return t._domHandlers_=t._domHandlers_||{},t._domHandlers_[e]=function(){typeof t["on"+e]=="function"?t["on"+e].apply(t,arguments):console.warn('[WARNING] : Missing "on'+e+'" handler.')},No(o,Vn[e],t._domHandlers_[e]),ks[e]&&No(o,ks[e],t._domHandlers_[e]),t};Ni.prototype.unbindEvt=function(o,e){var t=this;return t._domHandlers_=t._domHandlers_||{},bc(o,Vn[e],t._domHandlers_[e]),ks[e]&&bc(o,ks[e],t._domHandlers_[e]),delete t._domHandlers_[e],this};function Et(o,e){return this.identifier=e.identifier,this.position=e.position,this.frontPosition=e.frontPosition,this.collection=o,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(e),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=Et.id,Et.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}Et.prototype=new Ni;Et.constructor=Et;Et.id=0;Et.prototype.buildEl=function(o){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};Et.prototype.stylize=function(){if(this.options.dataOnly)return this;var o=this.options.fadeTime+"ms",e=n1("borderRadius","50%"),t=Qr("transition","opacity",o),i={};return i.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},i.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},i.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},Aa(i.el,t),this.options.shape==="circle"&&Aa(i.back,e),Aa(i.front,e),this.applyStyles(i),this};Et.prototype.applyStyles=function(o){for(var e in this.ui)if(this.ui.hasOwnProperty(e))for(var t in o[e])this.ui[e].style[t]=o[e][t];return this};Et.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};Et.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};Et.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};Et.prototype.show=function(o){var e=this;return e.options.dataOnly||(clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.addToDom(),e.restCallback(),setTimeout(function(){e.ui.el.style.opacity=1},0),e.showTimeout=setTimeout(function(){e.trigger("shown",e.instance),typeof o=="function"&&o.call(this)},e.options.fadeTime)),e};Et.prototype.hide=function(o){var e=this;if(e.options.dataOnly)return e;if(e.ui.el.style.opacity=e.options.restOpacity,clearTimeout(e.removeTimeout),clearTimeout(e.showTimeout),clearTimeout(e.restTimeout),e.removeTimeout=setTimeout(function(){var t=e.options.mode==="dynamic"?"none":"block";e.ui.el.style.display=t,typeof o=="function"&&o.call(e),e.trigger("hidden",e.instance)},e.options.fadeTime),e.options.restJoystick){const t=e.options.restJoystick,i={};i.x=t===!0||t.x!==!1?0:e.instance.frontPosition.x,i.y=t===!0||t.y!==!1?0:e.instance.frontPosition.y,e.setPosition(o,i)}return e};Et.prototype.setPosition=function(o,e){var t=this;t.frontPosition={x:e.x,y:e.y};var i=t.options.fadeTime+"ms",n={};n.front=Qr("transition",["transform"],i);var s={front:{}};s.front={transform:"translate("+t.frontPosition.x+"px,"+t.frontPosition.y+"px)"},t.applyStyles(n),t.applyStyles(s),t.restTimeout=setTimeout(function(){typeof o=="function"&&o.call(t),t.restCallback()},t.options.fadeTime)};Et.prototype.restCallback=function(){var o=this,e={};e.front=Qr("transition","none",""),o.applyStyles(e),o.trigger("rested",o.instance)};Et.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};Et.prototype.computeDirection=function(o){var e=o.angle.radian,t=Math.PI/4,i=Math.PI/2,n,s,a;if(e>t&&e<t*3&&!o.lockX?n="up":e>-t&&e<=t&&!o.lockY?n="left":e>-t*3&&e<=-t&&!o.lockX?n="down":o.lockY||(n="right"),o.lockY||(e>-i&&e<i?s="left":s="right"),o.lockX||(e>0?a="up":a="down"),o.force>this.options.threshold){var r={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(r[l]=this.direction[l]);var c={};this.direction={x:s,y:a,angle:n},o.direction=this.direction;for(l in r)r[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return o;(!c.x||!c.y)&&this.trigger("plain",o),c.x||this.trigger("plain:"+s,o),c.y||this.trigger("plain:"+a,o),c.angle||this.trigger("dir dir:"+n,o)}else this.resetDirection();return o};function xt(o,e){var t=this;t.nipples=[],t.idles=[],t.actives=[],t.ids=[],t.pressureIntervals={},t.manager=o,t.id=xt.id,xt.id+=1,t.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},t.config(e),(t.options.mode==="static"||t.options.mode==="semi")&&(t.options.multitouch=!1),t.options.multitouch||(t.options.maxNumberOfNipples=1);const i=getComputedStyle(t.options.zone.parentElement);return i&&i.display==="flex"&&(t.parentIsFlex=!0),t.updateBox(),t.prepareNipples(),t.bindings(),t.begin(),t.nipples}xt.prototype=new Ni;xt.constructor=xt;xt.id=0;xt.prototype.prepareNipples=function(){var o=this,e=o.nipples;e.on=o.on.bind(o),e.off=o.off.bind(o),e.options=o.options,e.destroy=o.destroy.bind(o),e.ids=o.ids,e.id=o.id,e.processOnMove=o.processOnMove.bind(o),e.processOnEnd=o.processOnEnd.bind(o),e.get=function(t){if(t===void 0)return e[0];for(var i=0,n=e.length;i<n;i+=1)if(e[i].identifier===t)return e[i];return!1}};xt.prototype.bindings=function(){var o=this;o.bindEvt(o.options.zone,"start"),o.options.zone.style.touchAction="none",o.options.zone.style.msTouchAction="none"};xt.prototype.begin=function(){var o=this,e=o.options;if(e.mode==="static"){var t=o.createNipple(e.position,o.manager.getIdentifier());t.add(),o.idles.push(t)}};xt.prototype.createNipple=function(o,e){var t=this,i=t.manager.scroll,n={},s=t.options,a={x:t.parentIsFlex?i.x:i.x+t.box.left,y:t.parentIsFlex?i.y:i.y+t.box.top};if(o.x&&o.y)n={x:o.x-a.x,y:o.y-a.y};else if(o.top||o.right||o.bottom||o.left){var r=document.createElement("DIV");r.style.display="hidden",r.style.top=o.top,r.style.right=o.right,r.style.bottom=o.bottom,r.style.left=o.left,r.style.position="absolute",s.zone.appendChild(r);var l=r.getBoundingClientRect();s.zone.removeChild(r),n=o,o={x:l.left+i.x,y:l.top+i.y}}var c=new Et(t,{color:s.color,size:s.size,threshold:s.threshold,fadeTime:s.fadeTime,dataOnly:s.dataOnly,restJoystick:s.restJoystick,restOpacity:s.restOpacity,mode:s.mode,identifier:e,position:o,zone:s.zone,frontPosition:{x:0,y:0},shape:s.shape});return s.dataOnly||(Mc(c.ui.el,n),Mc(c.ui.front,c.frontPosition)),t.nipples.push(c),t.trigger("added "+c.identifier+":added",c),t.manager.trigger("added "+c.identifier+":added",c),t.bindNipple(c),c};xt.prototype.updateBox=function(){var o=this;o.box=o.options.zone.getBoundingClientRect()};xt.prototype.bindNipple=function(o){var e=this,t,i=function(n,s){t=n.type+" "+s.id+":"+n.type,e.trigger(t,s)};o.on("destroyed",e.onDestroyed.bind(e)),o.on("shown hidden rested dir plain",i),o.on("dir:up dir:right dir:down dir:left",i),o.on("plain:up plain:right plain:down plain:left",i)};xt.prototype.pressureFn=function(o,e,t){var i=this,n=0;clearInterval(i.pressureIntervals[t]),i.pressureIntervals[t]=setInterval((function(){var s=o.force||o.pressure||o.webkitForce||0;s!==n&&(e.trigger("pressure",s),i.trigger("pressure "+e.identifier+":pressure",s),n=s)}).bind(i),100)};xt.prototype.onstart=function(o){var e=this,t=e.options,i=o;o=Hh(o),e.updateBox();var n=function(s){e.actives.length<t.maxNumberOfNipples?e.processOnStart(s):i.type.match(/^touch/)&&(Object.keys(e.manager.ids).forEach(function(a){if(Object.values(i.touches).findIndex(function(l){return l.identifier===a})<0){var r=[o[0]];r.identifier=a,e.processOnEnd(r)}}),e.actives.length<t.maxNumberOfNipples&&e.processOnStart(s))};return Er(o,n),e.manager.bindDocument(),!1};xt.prototype.processOnStart=function(o){var e=this,t=e.options,i,n=e.manager.getIdentifier(o),s=o.force||o.pressure||o.webkitForce||0,a={x:o.pageX,y:o.pageY},r=e.getOrCreate(n,a);r.identifier!==n&&e.manager.removeIdentifier(r.identifier),r.identifier=n;var l=function(h){h.trigger("start",h),e.trigger("start "+h.id+":start",h),h.show(),s>0&&e.pressureFn(o,h,h.identifier),e.processOnMove(o)};if((i=e.idles.indexOf(r))>=0&&e.idles.splice(i,1),e.actives.push(r),e.ids.push(r.identifier),t.mode!=="semi")l(r);else{var c=Ao(a,r.position);if(c<=t.catchDistance)l(r);else{r.destroy(),e.processOnStart(o);return}}return r};xt.prototype.getOrCreate=function(o,e){var t=this,i=t.options,n;return/(semi|static)/.test(i.mode)?(n=t.idles[0],n?(t.idles.splice(0,1),n):i.mode==="semi"?t.createNipple(e,o):(console.warn("Coudln't find the needed nipple."),!1)):(n=t.createNipple(e,o),n)};xt.prototype.processOnMove=function(o){var e=this,t=e.options,i=e.manager.getIdentifier(o),n=e.nipples.get(i),s=e.manager.scroll;if(!i1(o)){this.processOnEnd(o);return}if(!n){console.error("Found zombie joystick with ID "+i),e.manager.removeIdentifier(i);return}if(t.dynamicPage){var a=n.el.getBoundingClientRect();n.position={x:s.x+a.left,y:s.y+a.top}}n.identifier=i;var r=n.options.size/2,l={x:o.pageX,y:o.pageY};t.lockX&&(l.y=n.position.y),t.lockY&&(l.x=n.position.x);var c=Ao(l,n.position),h=Qg(l,n.position),u=Sr(h),d=c/r,f={distance:c,position:l},g,v;if(n.options.shape==="circle"?(g=Math.min(c,r),v=e1(n.position,g,h)):(v=o1(l,n.position,r),g=Ao(v,n.position)),t.follow){if(c>r){let M=l.x-v.x,y=l.y-v.y;n.position.x+=M,n.position.y+=y,n.el.style.top=n.position.y-(e.box.top+s.y)+"px",n.el.style.left=n.position.x-(e.box.left+s.x)+"px",c=Ao(l,n.position)}}else l=v,c=g;var m=l.x-n.position.x,p=l.y-n.position.y;n.frontPosition={x:m,y:p},t.dataOnly||(n.ui.front.style.transform="translate("+m+"px,"+p+"px)");var w={identifier:n.identifier,position:l,force:d,pressure:o.force||o.pressure||o.webkitForce||0,distance:c,angle:{radian:u,degree:h},vector:{x:m/r,y:-p/r},raw:f,instance:n,lockX:t.lockX,lockY:t.lockY};w=n.computeDirection(w),w.angle={radian:Sr(180-h),degree:180-h},n.trigger("move",w),e.trigger("move "+n.id+":move",w)};xt.prototype.processOnEnd=function(o){var e=this,t=e.options,i=e.manager.getIdentifier(o),n=e.nipples.get(i),s=e.manager.removeIdentifier(n.identifier);n&&(t.dataOnly||n.hide(function(){t.mode==="dynamic"&&(n.trigger("removed",n),e.trigger("removed "+n.id+":removed",n),e.manager.trigger("removed "+n.id+":removed",n),n.destroy())}),clearInterval(e.pressureIntervals[n.identifier]),n.resetDirection(),n.trigger("end",n),e.trigger("end "+n.id+":end",n),e.ids.indexOf(n.identifier)>=0&&e.ids.splice(e.ids.indexOf(n.identifier),1),e.actives.indexOf(n)>=0&&e.actives.splice(e.actives.indexOf(n),1),/(semi|static)/.test(t.mode)?e.idles.push(n):e.nipples.indexOf(n)>=0&&e.nipples.splice(e.nipples.indexOf(n),1),e.manager.unbindDocument(),/(semi|static)/.test(t.mode)&&(e.manager.ids[s.id]=s.identifier))};xt.prototype.onDestroyed=function(o,e){var t=this;t.nipples.indexOf(e)>=0&&t.nipples.splice(t.nipples.indexOf(e),1),t.actives.indexOf(e)>=0&&t.actives.splice(t.actives.indexOf(e),1),t.idles.indexOf(e)>=0&&t.idles.splice(t.idles.indexOf(e),1),t.ids.indexOf(e.identifier)>=0&&t.ids.splice(t.ids.indexOf(e.identifier),1),t.manager.removeIdentifier(e.identifier),t.manager.unbindDocument()};xt.prototype.destroy=function(){var o=this;o.unbindEvt(o.options.zone,"start"),o.nipples.forEach(function(t){t.destroy()});for(var e in o.pressureIntervals)o.pressureIntervals.hasOwnProperty(e)&&clearInterval(o.pressureIntervals[e]);o.trigger("destroyed",o.nipples),o.manager.unbindDocument(),o.off()};function At(o){var e=this;e.ids={},e.index=0,e.collections=[],e.scroll=wc(),e.config(o),e.prepareCollections();var t=function(){var n;e.collections.forEach(function(s){s.forEach(function(a){n=a.el.getBoundingClientRect(),a.position={x:e.scroll.x+n.left,y:e.scroll.y+n.top}})})};No(window,"resize",function(){xc(t)});var i=function(){e.scroll=wc()};return No(window,"scroll",function(){xc(i)}),e.collections}At.prototype=new Ni;At.constructor=At;At.prototype.prepareCollections=function(){var o=this;o.collections.create=o.create.bind(o),o.collections.on=o.on.bind(o),o.collections.off=o.off.bind(o),o.collections.destroy=o.destroy.bind(o),o.collections.get=function(e){var t;return o.collections.every(function(i){return t=i.get(e),!t}),t}};At.prototype.create=function(o){return this.createCollection(o)};At.prototype.createCollection=function(o){var e=this,t=new xt(e,o);return e.bindCollection(t),e.collections.push(t),t};At.prototype.bindCollection=function(o){var e=this,t,i=function(n,s){t=n.type+" "+s.id+":"+n.type,e.trigger(t,s)};o.on("destroyed",e.onDestroyed.bind(e)),o.on("shown hidden rested dir plain",i),o.on("dir:up dir:right dir:down dir:left",i),o.on("plain:up plain:right plain:down plain:left",i)};At.prototype.bindDocument=function(){var o=this;o.binded||(o.bindEvt(document,"move").bindEvt(document,"end"),o.binded=!0)};At.prototype.unbindDocument=function(o){var e=this;(!Object.keys(e.ids).length||o===!0)&&(e.unbindEvt(document,"move").unbindEvt(document,"end"),e.binded=!1)};At.prototype.getIdentifier=function(o){var e;return o?(e=o.identifier===void 0?o.pointerId:o.identifier,e===void 0&&(e=this.latest||0)):e=this.index,this.ids[e]===void 0&&(this.ids[e]=this.index,this.index+=1),this.latest=e,this.ids[e]};At.prototype.removeIdentifier=function(o){var e={};for(var t in this.ids)if(this.ids[t]===o){e.id=t,e.identifier=this.ids[t],delete this.ids[t];break}return e};At.prototype.onmove=function(o){var e=this;return e.onAny("move",o),!1};At.prototype.onend=function(o){var e=this;return e.onAny("end",o),!1};At.prototype.oncancel=function(o){var e=this;return e.onAny("end",o),!1};At.prototype.onAny=function(o,e){var t=this,i,n="processOn"+o.charAt(0).toUpperCase()+o.slice(1);e=Hh(e);var s=function(r,l,c){c.ids.indexOf(l)>=0&&(c[n](r),r._found_=!0)},a=function(r){i=t.getIdentifier(r),Er(t.collections,s.bind(null,r,i)),r._found_||t.removeIdentifier(i)};return Er(e,a),!1};At.prototype.destroy=function(){var o=this;o.unbindDocument(!0),o.ids={},o.index=0,o.collections.forEach(function(e){e.destroy()}),o.off()};At.prototype.onDestroyed=function(o,e){var t=this;if(t.collections.indexOf(e)<0)return!1;t.collections.splice(t.collections.indexOf(e),1)};const Tc=new At,c1={create:function(o){return Tc.create(o)},factory:Tc};class h1{constructor(){_(this,"keys",{});_(this,"steerAxis",0);_(this,"accelerating",!1);_(this,"braking",!1);_(this,"horn",!1);_(this,"joystickManager",null);_(this,"hornTimeout",null);window.addEventListener("keydown",e=>{this.keys[e.code]=!0,e.code==="KeyH"&&this.triggerHorn()}),window.addEventListener("keyup",e=>{this.keys[e.code]=!1}),this.setupMobileControls()}triggerHorn(){this.horn=!0,this.hornTimeout!==null&&clearTimeout(this.hornTimeout),this.hornTimeout=setTimeout(()=>{this.horn=!1,this.hornTimeout=null},300)}setupMobileControls(){const e=document.createElement("div");e.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 150px;
      height: 150px;
      z-index: 100;
      touch-action: none;
    `,document.body.appendChild(e),this.joystickManager=c1.create({zone:e,mode:"static",position:{left:"75px",bottom:"75px"},color:"rgba(255, 255, 255, 0.6)",size:120,restOpacity:.5}),this.joystickManager.on("move",(s,a)=>{a.vector&&(this.steerAxis=a.vector.x)}),this.joystickManager.on("end",()=>{this.steerAxis=0});const t=document.createElement("div");t.style.cssText=`
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
    `,n.textContent="📯",document.body.appendChild(n),n.addEventListener("touchstart",s=>{s.preventDefault(),this.triggerHorn(),n.style.background="rgba(255, 200, 50, 0.95)",n.style.transform="scale(1.1)"},{passive:!1}),n.addEventListener("touchend",s=>{s.preventDefault(),n.style.background="rgba(255, 200, 50, 0.6)",n.style.transform="scale(1.0)"},{passive:!1})}get forward(){return this.keys.ArrowUp||this.keys.KeyW||this.accelerating}get backward(){return this.keys.ArrowDown||this.keys.KeyS}get left(){return this.keys.ArrowLeft||this.keys.KeyA||this.steerAxis<-.2}get right(){return this.keys.ArrowRight||this.keys.KeyD||this.steerAxis>.2}get brake(){return this.keys.Space||this.braking}get honk(){return this.horn}}class d1{constructor(){_(this,"level",0);_(this,"spillRateMultiplier",1);_(this,"onSpill");_(this,"container");_(this,"fill");_(this,"bucketEl");_(this,"_warningIcon");_(this,"isShaking",!1);_(this,"spillFlashing",!1);if(!document.getElementById("spill-meter-styles")){const i=document.createElement("style");i.id="spill-meter-styles",i.textContent=`
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
      `,document.head.appendChild(i)}this.container=document.createElement("div"),Object.assign(this.container.style,{position:"fixed",left:"10px",top:"50%",transform:"translateY(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"6px",zIndex:"999",userSelect:"none",pointerEvents:"none"}),this.bucketEl=document.createElement("span"),this.bucketEl.textContent="🪣",Object.assign(this.bucketEl.style,{fontSize:"26px",lineHeight:"1"}),this.container.appendChild(this.bucketEl);const e=document.createElement("div");Object.assign(e.style,{position:"relative",width:"16px",height:"130px",background:"rgba(40,40,40,0.85)",borderRadius:"8px",overflow:"hidden",border:"1.5px solid rgba(255,255,255,0.2)",boxShadow:"0 2px 8px rgba(0,0,0,0.6)"}),this.fill=document.createElement("div"),Object.assign(this.fill.style,{position:"absolute",bottom:"0",left:"0",width:"100%",height:"0%",borderRadius:"8px",transition:"height 0.05s linear",background:"#4caf50"}),e.appendChild(this.fill),this.container.appendChild(e);const t=document.createElement("div");t.textContent="🚨",Object.assign(t.style,{fontSize:"16px",lineHeight:"1",opacity:"0",transition:"opacity 0.3s"}),t._isWarning=!0,this.container.appendChild(t),this._warningIcon=t,document.body.appendChild(this.container),this.container.style.display="none"}setVisible(e){this.container.style.display=e?"flex":"none"}addSpill(e){this.level=Math.min(1,this.level+e)}update(e){var i;const t=this.level*100;if(this.fill.style.height=`${t}%`,this.level<.5){const n=this.level*2,s=Math.round(76+n*179),a=Math.round(175+n*60);this.fill.style.background=`linear-gradient(to right, rgb(${s},${a},50), rgb(${s},${a},50))`}else{const n=(this.level-.5)*2,s=255,a=Math.round(235-n*235);this.fill.style.background=`linear-gradient(to right, rgb(${s},${a},50), rgb(${s},${Math.round(a*.4)},20))`}this.level>.8&&!this.isShaking?(this.bucketEl.classList.add("bucket-shake"),this._warningIcon.style.opacity="1",this.isShaking=!0):this.level<=.8&&this.isShaking&&(this.bucketEl.classList.remove("bucket-shake"),this._warningIcon.style.opacity="0",this.isShaking=!1),this.level>=1&&!this.spillFlashing&&(this.spillFlashing=!0,this.level=.5,(i=this.onSpill)==null||i.call(this,5e4),this.container.classList.add("spill-flash"),setTimeout(()=>{this.container.classList.remove("spill-flash"),this.spillFlashing=!1},700))}triggerBump(e){this.addSpill(.025)}triggerCrash(){this.addSpill(.3)}}const Ra=[{id:"job_01",type:"commercial",zone:"cbd",position:{x:40,z:-40},title:"Marbellino Boardroom",client:"Brad from Accounts",description:"Brad wants a Marbellino feature wall in the boardroom. Stone-like marbled finish. Brad calls it 'very European'. Brad has never been to Europe.",pay:42e4,timeLimit:0,travelTimeLimit:120,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_02",type:"commercial",zone:"footscray",position:{x:-120,z:60},title:"Hemp Render — Big Kev's Shed",client:"Big Kev",description:"Big Kev wants Hemp Earthen Render on his warehouse. Rammed earth look, hemp fibres, 3–5mm application. He says it's a small shed. It is not a small shed.",pay:68e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_03",type:"residential",zone:"brunswick",position:{x:-80,z:80},title:"Antique Stucco Terrace",client:"Matilda",description:"Matilda wants Antique Stucco throughout — that Southern European aged look. Three rooms. By Thursday. It's Wednesday. She also needs primer coats. Yes, all of them.",pay:55e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_04",type:"heritage",zone:"richmond",position:{x:120,z:40},title:"Antique Stucco Heritage Restore",client:"The Council",description:"Council heritage job. Full 3-coat Antique Stucco system. Primer, stucco, sealer. Nobody told you about the asbestos audit. Nobody.",pay:8e5,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_05",type:"residential",zone:"stkilda",position:{x:40,z:-120},title:"Tadelakt Beachfront Bathroom",client:"Chloe",description:"Chloe wants Tadelakt in the bathroom — polished, waterproof, glossy. Traditional Moroccan technique. She also wants it 'textured but smooth'. You nod and apply the polishing stone.",pay:61e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_06",type:"emergency",zone:"cbd",position:{x:-40,z:20},title:"🚨 Emergency Antique Stucco Patch",client:"Darren (Stressed)",description:"Open home in 4 hours. Actual hole in the Antique Stucco feature wall. Primer, stucco, sealer — in 4 hours. Darren is sweating. You are also sweating.",pay:95e4,timeLimit:240,travelTimeLimit:240,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_07",type:"residential",zone:"brunswick",position:{x:-120,z:-80},title:"Hemp Render Repair — DIY Gone Wrong",client:"Zephyr",description:"Zephyr tried to do his own Hemp Earthen Render. No base coat. No primer. Wrong mix ratio. You strip it back and do it properly. Zephyr watches and takes notes.",pay:39e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_08",type:"commercial",zone:"footscray",position:{x:-160,z:20},title:"Rokka — Kebab Shop Reno",client:"Mustafa",description:"Mustafa wants Rokka on the walls — smooth, rustic, modern. 2–5mm application, sealed and ready before the health inspector comes back. No questions about the old walls.",pay:47e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_09",type:"heritage",zone:"stkilda",position:{x:80,z:-160},title:"Antique Stucco — Edwardian Cottage",client:"Patricia",description:"Patricia wants Antique Stucco — aged Southern European finish, NCC 2022 compliant. She's printed the full TDS. She's highlighted it. She will quiz you on cure times.",pay:72e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_10",type:"residential",zone:"richmond",position:{x:160,z:-40},title:"Tadelino New Build",client:"The Hendersons",description:"Full Tadelino system throughout — polished, modern, glossy finish. Two coats, polishing stone, sealer. The Hendersons want it done before Christmas. You ask which Christmas.",pay:58e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_11",type:"emergency",zone:"brunswick",position:{x:-40,z:120},title:"🚨 Tadelakt Water Damage Repair",client:"Gary",description:"Upstairs left the bath running. Gary's Tadelakt bathroom is destroyed. Strip, reprime, two coats Tadelakt, polish, seal. Gary is not speaking to upstairs. You don't ask.",pay:88e4,timeLimit:300,travelTimeLimit:300,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_12",type:"commercial",zone:"stkilda",position:{x:-20,z:-160},title:"Rokka Feature Wall — Wine Bar",client:"Alejandro",description:"Alejandro wants Rokka on the feature wall. Rustic, modern, subtle undulations. He calls it 'industrial earthen chic'. You write down 'Rokka, sealed, done'.",pay:64e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1}],Sc=["Jose","Jarrad","Matt","Phil","Tsuyoshi","Fabio"],mn=class mn{constructor(){_(this,"jobs",Ra.map(e=>({...e})));_(this,"activeJob",null);_(this,"activePhase",1);_(this,"completedJobIds",new Set);_(this,"money",5e5);_(this,"travelTimer",0);_(this,"travelFailed",!1);_(this,"crewToPickup",[]);_(this,"crewPickedUp",[])}getAvailableJobs(){return this.jobs.filter(e=>!this.completedJobIds.has(e.id)&&e!==this.activeJob)}acceptJob(e,t){this.activeJob=e,this.activePhase=1,this.crewToPickup=t&&t.length>0?t:this._pickCrew(e.crewNeeded),this.crewPickedUp=[],this.startTravelTimer()}_pickCrew(e){return[...Sc].sort(()=>Math.random()-.5).slice(0,Math.min(e,Sc.length))}startTravelTimer(){this.activeJob&&(this.travelTimer=this.activeJob.travelTimeLimit??120,this.travelFailed=!1)}checkPhase1Arrival(e,t){const i=e-mn.WORKSHOP_POS.x,n=t-mn.WORKSHOP_POS.z;return Math.sqrt(i*i+n*n)<18}advanceToPhase2(){this.activePhase=2,this.startTravelTimer()}advanceToPhase3(){this.activePhase=3,this.startTravelTimer()}pickupCrew(e){return!this.crewPickedUp.includes(e)&&this.crewToPickup.includes(e)&&this.crewPickedUp.push(e),this.allCrewCollected()}allCrewCollected(){return this.crewToPickup.every(e=>this.crewPickedUp.includes(e))}nextCrewNeeded(){for(const e of this.crewToPickup)if(!this.crewPickedUp.includes(e))return e;return null}tickTravel(e){if(!this.activeJob||this.travelFailed)return null;if(this.travelTimer-=e,this.travelTimer<=0){this.travelFailed=!0;const t=15e4;return this.money=Math.max(0,this.money-t),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],{failed:!0,penalty:t}}return null}checkArrival(e,t){if(!this.activeJob||this.activePhase!==3)return null;const i=e-this.activeJob.position.x,n=t-this.activeJob.position.z;return Math.sqrt(i*i+n*n)<this.activeJob.triggerRadius?this.activeJob:null}completeJob(e,t=1){const i=Math.round(e.pay*t);return this.money=Math.max(0,this.money+i),this.completedJobIds.add(e.id),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],i}distanceTo(e,t){if(!this.activeJob)return 0;const i=e-this.activeJob.position.x,n=t-this.activeJob.position.z;return Math.sqrt(i*i+n*n)}distanceToWorkshop(e,t){const i=e-mn.WORKSHOP_POS.x,n=t-mn.WORKSHOP_POS.z;return Math.sqrt(i*i+n*n)}distanceToPoint(e,t,i,n){const s=e-i,a=t-n;return Math.sqrt(s*s+a*a)}generateContestedJob(){const e=this.getAvailableJobs(),t=e.length>0?e[Math.floor(Math.random()*e.length)]:Ra[Math.floor(Math.random()*Ra.length)];return{...t,id:`contested_${Date.now()}_${Math.floor(Math.random()*9999)}`,title:`⚔️ ${t.title}`,pay:Math.round(t.pay*1.5),isContested:!0,completed:!1}}getContestedJobs(){const e=[];return e.push(this.generateContestedJob()),Math.random()<.4&&e.push(this.generateContestedJob()),e}};_(mn,"WORKSHOP_POS",{x:10,z:15});let Uo=mn;const li=class li{constructor(e){_(this,"marker");_(this,"diamond");_(this,"ring");_(this,"routeLine",null);_(this,"routeGeom",null);_(this,"scene");_(this,"time",0);_(this,"targetPos",null);this.scene=e,this.marker=new Ge;const t=new qr(1,0),i=new $({color:li.MARKER_COLOR,emissive:new we(li.MARKER_COLOR),emissiveIntensity:.35});this.diamond=new B(t,i),this.diamond.scale.set(1.2,2,1.2),this.diamond.castShadow=!1,this.marker.add(this.diamond);const n=new Ki(.5,2,32),s=new zt({color:li.MARKER_COLOR,transparent:!0,opacity:.6,side:Ut,depthWrite:!1});this.ring=new B(n,s),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=-8+.3,this.marker.add(this.ring),this.marker.visible=!1,this.scene.add(this.marker)}setTarget(e){if(this.targetPos=e,this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null),e===null){this.marker.visible=!1;return}this.marker.position.set(e.x,li.BASE_HEIGHT,e.z),this.marker.visible=!0,this.routeGeom=new Ft;const t=new Float32Array(6);t[0]=e.x,t[1]=.05,t[2]=e.z,t[3]=e.x,t[4]=.05,t[5]=e.z,this.routeGeom.setAttribute("position",new fi(t,3));const i=new Ih({color:16777215,transparent:!0,opacity:.75,depthTest:!1});this.routeLine=new eg(this.routeGeom,i),this.routeLine.renderOrder=999,this.scene.add(this.routeLine)}setJob(e){this.setTarget((e==null?void 0:e.position)??null)}get currentTarget(){return this.targetPos?{...this.targetPos}:null}update(e,t,i){if(this.time+=e,!this.targetPos||!this.marker.visible)return;const n=Math.sin(this.time*2.2)*li.BOB_AMP;this.marker.position.y=li.BASE_HEIGHT+n,this.diamond.rotation.y=this.time*1.2;const s=this.time*.8%1,a=.5+s*2;this.ring.scale.set(a,a,1);const r=this.ring.material;if(r.opacity=(1-s)*.6,this.routeGeom){const l=this.routeGeom.attributes.position;l.setXYZ(0,t,.05,i),l.setXYZ(1,this.targetPos.x,.05,this.targetPos.z),l.needsUpdate=!0,this.routeGeom.computeBoundingSphere()}}dispose(){this.marker.visible=!1,this.scene.remove(this.marker),this.diamond.geometry.dispose(),this.diamond.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null)}};_(li,"MARKER_COLOR",12674667),_(li,"BASE_HEIGHT",8),_(li,"BOB_AMP",.5);let Cr=li;const Ec=[{id:"perth_plasterers",name:"Perth Plasterers",tagline:"They drove 3000km just to lose.",color:"#FF4444",difficulty:.45,speed:.55,members:[{name:"Barry",skinTone:"#D4B090",hairColor:"#444444",hairStyle:"buzz",accentColor:"#FF4444"},{name:"Dazza",skinTone:"#E8C8A0",hairColor:"#8B4513",hairStyle:"short",accentColor:"#FF4444"},{name:"Shazza",skinTone:"#FDDBB4",hairColor:"#C4832A",hairStyle:"long",accentColor:"#FF4444"}]},{id:"sydney_stucco",name:"Sydney Stucco",tagline:"Fancy tools, slow hands.",color:"#4488FF",difficulty:.6,speed:.65,members:[{name:"Blake",skinTone:"#E0B090",hairColor:"#1a0e00",hairStyle:"slicked",accentColor:"#4488FF"},{name:"Jaxon",skinTone:"#D4A070",hairColor:"#2a1800",hairStyle:"bun",accentColor:"#4488FF"},{name:"Tiffany",skinTone:"#F5DEB3",hairColor:"#C8A060",hairStyle:"ponytail",accentColor:"#4488FF"}]},{id:"brisbane_brushmen",name:"Brisbane Brushmen",tagline:"Rough as guts, twice as slow.",color:"#FF8C00",difficulty:.35,speed:.42,members:[{name:"Cobber",skinTone:"#D4A060",hairColor:"#888888",hairStyle:"bald",accentColor:"#FF8C00"},{name:"Mozzie",skinTone:"#C89050",hairColor:"#2a1000",hairStyle:"afro",accentColor:"#FF8C00"},{name:"Bazza",skinTone:"#E0C090",hairColor:"#5a3010",hairStyle:"short",accentColor:"#FF8C00"}]},{id:"melbourne_mafia",name:"Melbourne Mafia",tagline:"They know this city. So does Jose.",color:"#9B59B6",difficulty:.8,speed:.82,members:[{name:"Dante",skinTone:"#B07040",hairColor:"#1a0e00",hairStyle:"slick",accentColor:"#9B59B6"},{name:"Viktor",skinTone:"#C08060",hairColor:"#333333",hairStyle:"buzz",accentColor:"#9B59B6"},{name:"Rosa",skinTone:"#E8C0A0",hairColor:"#4a2010",hairStyle:"long",accentColor:"#9B59B6"}]}];function Ar(){return Ec[Math.floor(Math.random()*Ec.length)]}function Cc(o){return o>=1e6?`${(o/1e6).toFixed(2)}M sats`:o>=1e3?`${(o/1e3).toFixed(0)}K sats`:`${o} sats`}const Ac={cbd:"🏙️ CBD",footscray:"🏭 Footscray",brunswick:"🎸 Brunswick",richmond:"🏡 Richmond",stkilda:"🌊 St Kilda"},Rc={residential:"🏠 Residential",commercial:"🏢 Commercial",heritage:"🏛️ Heritage",emergency:"🚨 Emergency"};class u1{constructor(e){_(this,"overlay");_(this,"visible",!1);_(this,"jobs",[]);if(this.onAccept=e,this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
      `,document.head.appendChild(t)}document.body.appendChild(this.overlay)}show(e){this.jobs=e.slice(0,8),this.visible=!0,this._render(),this.overlay.style.display="flex"}hide(){this.visible=!1,this.overlay.style.display="none"}isVisible(){return this.visible}_makeContestedCard(e){const t=Ar(),i=document.createElement("div");i.className="jb-card-contested";const n=document.createElement("div");n.className="jb-war-banner",n.innerHTML=`
      <span class="jb-war-label">⚔️ CONTRACT WAR</span>
      <span class="jb-war-rival">vs ${t.name}</span>
    `,i.appendChild(n);const s=document.createElement("div");s.className="jb-card-contested-body";const a=document.createElement("div");a.className="jb-card-header",a.style.marginBottom="6px";const r=document.createElement("div");r.className="jb-title",r.style.color="#FFD880",r.textContent=e.title.replace(/^⚔️\s*/,""),a.appendChild(r);const l=document.createElement("div");l.className="jb-pay",l.style.color="#E8A830",l.textContent=`₿ ${Cc(e.pay)}`,a.appendChild(l),s.appendChild(a);const c=document.createElement("div");c.style.cssText=`
      display:flex; align-items:center; gap:10px;
      background:rgba(232,168,48,0.08); border:1px solid rgba(232,168,48,0.2);
      border-radius:8px; padding:8px 12px; margin-bottom:10px;
    `,c.innerHTML=`
      <div style="font-size:22px">🥊</div>
      <div>
        <div style="color:#E8A830;font-size:12px;font-weight:900;letter-spacing:1px;">RIVAL CREW</div>
        <div style="color:#fff;font-size:14px;font-weight:800;">${t.name}</div>
        <div style="color:#aaa;font-size:11px;">Difficulty: ${"★".repeat(Math.round(t.difficulty*5))}${"☆".repeat(5-Math.round(t.difficulty*5))}</div>
      </div>
      <div style="margin-left:auto;text-align:right;">
        <div style="color:#2ECC40;font-size:11px;font-weight:700;">BONUS PAY</div>
        <div style="color:#2ECC40;font-size:13px;font-weight:900;">1.5×</div>
      </div>
    `,s.appendChild(c);const h=document.createElement("div");h.className="jb-meta",h.style.marginBottom="8px";const u=document.createElement("span");u.className="jb-badge",u.textContent=Ac[e.zone]??e.zone,h.appendChild(u);const d=document.createElement("span");d.className=`jb-badge${e.type==="emergency"?" jb-emergency-badge":""}`,d.textContent=Rc[e.type]??e.type,h.appendChild(d),s.appendChild(h);const f=document.createElement("div");f.className="jb-desc",f.style.color="#ccc",f.textContent=e.description,s.appendChild(f);const g=document.createElement("button");return g.className="jb-battle-btn",g.textContent="⚔️ BATTLE FOR THIS JOB",g.addEventListener("click",()=>this.onAccept(e)),s.appendChild(g),i.appendChild(s),i}_makeRegularCard(e){const t=document.createElement("div");t.className="jb-card";const i=document.createElement("div");i.className="jb-card-header";const n=document.createElement("div");n.className="jb-title",n.textContent=e.title,i.appendChild(n);const s=document.createElement("div");s.className="jb-pay",s.textContent=`₿ ${Cc(e.pay)}`,i.appendChild(s),t.appendChild(i);const a=document.createElement("div");a.className="jb-meta";const r=document.createElement("span");r.className="jb-badge",r.textContent=Ac[e.zone]??e.zone,a.appendChild(r);const l=document.createElement("span");if(l.className=`jb-badge${e.type==="emergency"?" jb-emergency-badge":""}`,l.textContent=Rc[e.type]??e.type,a.appendChild(l),e.timeLimit>0){const d=document.createElement("span");d.className="jb-badge jb-emergency-badge",d.textContent=`⏱️ ${Math.round(e.timeLimit/60)} min limit`,a.appendChild(d)}t.appendChild(a);const c=document.createElement("div");c.className="jb-client",c.textContent=`Client: ${e.client}`,t.appendChild(c);const h=document.createElement("div");h.className="jb-desc",h.textContent=e.description,t.appendChild(h);const u=document.createElement("button");return u.className="jb-accept-btn",u.textContent="ACCEPT →",u.addEventListener("click",()=>this.onAccept(e)),t.appendChild(u),t}_render(){this.overlay.innerHTML="";const e=document.createElement("div");e.style.cssText=`
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
    `,s}}const Pc=1e8;function an(o){return o>=1e6?`${(o/1e6).toFixed(2)}M sats`:o>=1e3?`${(o/1e3).toFixed(0)}K sats`:`${o} sats`}function f1(o){const e=Math.max(0,Math.ceil(o)),t=Math.floor(e/60),i=e%60;return`${t}:${i.toString().padStart(2,"0")}`}function p1(o){return o.charAt(0).toUpperCase()}class m1{constructor(){_(this,"btcAchieved",!1);_(this,"speedText");_(this,"moneyEl");_(this,"btcBarFill");_(this,"btcLabelEl");_(this,"jobStripEl");_(this,"travelTimerEl");_(this,"flashOverlay");_(this,"timerFailOverlay");_(this,"crewPanelEl");_(this,"moneyPanel");_(this,"activeJob",null);_(this,"activePhase",1);_(this,"flashTimeout",null);_(this,"spillPenaltyTimeout",null);_(this,"currentMoney",5e5);_(this,"timerPulseInterval",null);if(!document.getElementById("hud-styles")){const r=document.createElement("style");r.id="hud-styles",r.textContent=`
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
      `,l.textContent=p1(a),l.title=a,s.appendChild(l)}this.crewPanelEl.appendChild(s)}_refreshJobStrip(e,t){this.jobStripEl.innerHTML="";const i=document.createElement("div");if(i.style.cssText=`
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      text-align: right;
    `,t!==null){const n=t<1e3?`${Math.round(t)}m`:`${(t/1e3).toFixed(1)}km`;this.activePhase===1?(i.textContent=`📦 To workshop: ${n} — ${e.title}`,i.style.color="#FFD700"):this.activePhase===2?(i.textContent=`👥 Pick up crew: ${n} — ${e.title}`,i.style.color="#60AAFF"):(i.textContent=`🧱 To job site: ${n} — ${e.title}`,i.style.color="#C1666B")}else this.activePhase===1?(i.textContent=`📦 Workshop pickup — ${e.title}`,i.style.color="#FFD700"):this.activePhase===2?(i.textContent=`👥 Pick up the crew — ${e.title}`,i.style.color="#60AAFF"):(i.textContent=`🧱 ${e.title}`,i.style.color="#fff");this.jobStripEl.appendChild(i)}updateTravelTimer(e){if(e===null){this.travelTimerEl.style.display="none",this.travelTimerEl.classList.remove("hud-timer-pulse"),this.timerPulseInterval!==null&&(clearInterval(this.timerPulseInterval),this.timerPulseInterval=null);return}this.travelTimerEl.style.display="block",this.travelTimerEl.textContent=`⏱ ${f1(e)}`,e>60?(this.travelTimerEl.style.color="#5EDB7D",this.travelTimerEl.classList.remove("hud-timer-pulse")):e>30?(this.travelTimerEl.style.color="#FFD700",this.travelTimerEl.classList.remove("hud-timer-pulse")):(this.travelTimerEl.style.color="#ff4444",this.travelTimerEl.classList.contains("hud-timer-pulse")||this.travelTimerEl.classList.add("hud-timer-pulse"))}showTimerFail(e){const t=document.getElementById("hud-timer-fail-msg");t&&(t.textContent=`⏰ TOO SLOW! -${an(e)}`),this.timerFailOverlay.style.display="flex",setTimeout(()=>{this.timerFailOverlay.style.display="none"},3e3)}showPhase1Complete(){const e=document.getElementById("hud-flash-msg");e&&(e.innerHTML='📦 Materials loaded!<br><span style="font-size:0.65em">Go pick up the crew.</span>',e.style.color="#FFD700"),this.flashOverlay.style.background="rgba(255, 210, 0, 0.10)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2500)}showCrewPickup(e,t){const i=document.getElementById("hud-flash-msg");i&&(t?i.innerHTML=`👤 ${e} on board!<br><span style="font-size:0.65em">Pick up ${t}!</span>`:(i.innerHTML='✅ Crew assembled!<br><span style="font-size:0.65em">Head to the job site.</span>',i.style.color="#5EDB7D"),t&&(i.style.color="#60AAFF")),this.flashOverlay.style.background=t?"rgba(96, 170, 255, 0.08)":"rgba(94, 219, 125, 0.12)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2200)}showSpillPenalty(e){this.spillPenaltyTimeout!==null&&(clearTimeout(this.spillPenaltyTimeout),this.spillPenaltyTimeout=null);const t=`-${an(e)}`;this.moneyEl.style.color="#ff4444",this.moneyEl.textContent=`${an(this.currentMoney)} ${t}`,this.spillPenaltyTimeout=setTimeout(()=>{this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=an(this.currentMoney),this.spillPenaltyTimeout=null},1500)}showJobComplete(e,t){const i=document.getElementById("hud-flash-msg");i&&(i.style.color="#5EDB7D",i.innerHTML=`✅ JOB DONE!<br><span style="font-size:0.7em">+${an(t)} — ${e}</span>`),this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashTimeout=null},3e3)}updateMoney(e){this.currentMoney=e,this.spillPenaltyTimeout===null&&(this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=an(e));const t=Math.min(1,e/Pc);this.btcBarFill.style.width=`${(t*100).toFixed(1)}%`,t>=1?(this.btcLabelEl.textContent="₿ GOAL: ACHIEVED! 🚀",this.btcBarFill.style.background="#FFD700"):this.btcLabelEl.textContent=`₿ GOAL: ${(t*100).toFixed(1)}%`,!this.btcAchieved&&e>=Pc&&(this.btcAchieved=!0,this._showBitcoinAchievement())}showPenalty(e,t){this.flashTimeout&&clearTimeout(this.flashTimeout),this.flashOverlay.style.display="block";const i=this.flashOverlay.querySelector("div");i&&(i.innerHTML=`⚠️ SCAFFOLD FAIL<br><span style="font-size:0.7em">−${an(t)} penalty — ${e}</span>`),this.flashOverlay.style.animation="none",this.flashOverlay.offsetWidth,this.flashOverlay.style.animation="hudRedFlash 2.5s ease forwards",this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none"},2600)}showToast(e,t=16777215){const i="#"+t.toString(16).padStart(6,"0"),n=document.createElement("div");n.textContent=e,Object.assign(n.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:i,color:"#fff",padding:"14px 24px",borderRadius:"14px",fontSize:"18px",fontWeight:"800",fontFamily:"system-ui, sans-serif",zIndex:"9000",opacity:"1",textShadow:"0 1px 4px rgba(0,0,0,0.5)",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",pointerEvents:"none",whiteSpace:"nowrap",transition:"opacity 0.5s ease"}),document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0"},2e3),setTimeout(()=>n.remove(),2600)}_showBitcoinAchievement(){if(localStorage.setItem("tem-rush-btc-achieved","1"),!document.getElementById("btc-anim-styles")){const c=document.createElement("style");c.id="btc-anim-styles",c.textContent=`
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
  `;const a=s.querySelector("button");return a.addEventListener("click",()=>{var r;(r=navigator.clipboard)==null||r.writeText(n).then(()=>{a.textContent="✓ Copied!",setTimeout(()=>{a.textContent="📋 Copy Code"},2e3)})}),s}const _n=[{id:"timber-bluestone",file:"images/270ae674-ae77-46c0-a931-d8b3890bb728.jpg",name:"Timber & Bluestone"},{id:"angular-bay",file:"images/4d5ff18e-1129-4195-9108-a64f3c8e4d34.jpg",name:"Angular Bay House"},{id:"haussmann",file:"images/5c2eabb7-65ce-4f76-b14c-8eb37a3f9537.jpg",name:"Haussmann Mansion"},{id:"brutalist",file:"images/60007f2e-318f-412e-b2ad-4d77445ee417.jpg",name:"Brutalist Compound"},{id:"sculptural-olive",file:"images/787315c4-a661-4dca-8567-b7a18f104665.jpg",name:"Sculptural Olive"},{id:"curved-balcony",file:"images/842fccc6-6bad-4509-81d8-ecb2dc14c80c.jpg",name:"Curved Balcony"},{id:"corten-plaster",file:"images/e3cbd2c9-7944-4074-a439-1033c9f2c166.jpg",name:"Corten & Plaster"},{id:"terracotta-mono",file:"images/f2ed55b5-ba78-4a78-8bad-e57a86b6bcef.jpg",name:"Terracotta Monolith"}],Wh="tem-rush-achievements";function Hs(){try{return JSON.parse(localStorage.getItem(Wh)||"[]")}catch{return[]}}function g1(o){const e=Hs();return e.includes(o)?!1:(e.push(o),localStorage.setItem(Wh,JSON.stringify(e)),!0)}function Xh(){return Hs().length>=_n.length}function v1(){const o=Hs(),e=_n.filter(t=>!o.includes(t.id));return e.length>0?e[Math.floor(Math.random()*e.length)]:_n[Math.floor(Math.random()*_n.length)]}function y1(o,e,t){o.fillStyle="#C8B89A",o.fillRect(0,0,e,t);for(let i=0;i<800;i++){const n=Math.random()*e,s=Math.random()*t,a=20+Math.random()*60,r=Math.random()*Math.PI,l=Math.floor(180+Math.random()*40);o.strokeStyle=`rgb(${l},${l-10},${l-20})`,o.lineWidth=1+Math.random()*3,o.globalAlpha=.3+Math.random()*.4,o.beginPath(),o.moveTo(n,s),o.lineTo(n+Math.cos(r)*a,s+Math.sin(r)*a),o.stroke()}o.globalAlpha=1,o.font="bold 48px system-ui",o.textAlign="center",o.fillStyle="rgba(180,160,130,0.4)",o.fillText("TROWELED EARTH",e/2,t/2-20),o.font="22px system-ui",o.fillStyle="rgba(180,160,130,0.3)",o.fillText("Scratch to reveal",e/2,t/2+20)}function _1(o,e,t,i,n,s=45){o.globalCompositeOperation="destination-out",o.strokeStyle="rgba(0,0,0,1)",o.lineCap="round",o.lineJoin="round",o.lineWidth=s*2,o.beginPath(),o.moveTo(e,t),o.lineTo(i,n),o.stroke(),o.globalCompositeOperation="source-over"}function Lc(o,e,t){const i=o.getImageData(0,0,e,t).data;let n=0;const s=e*t;for(let a=3;a<i.length;a+=4)i[a]<128&&n++;return n/s}function x1(o,e,t){o.save(),o.translate(e,t),o.rotate(Math.PI/4),o.strokeStyle="#8B6914",o.lineWidth=5,o.lineCap="round",o.beginPath(),o.moveTo(0,0),o.lineTo(0,36),o.stroke(),o.fillStyle="#C0C0C0",o.strokeStyle="#888",o.lineWidth=1.5,o.beginPath(),o.moveTo(-14,0),o.lineTo(14,0),o.lineTo(10,-28),o.lineTo(-10,-28),o.closePath(),o.fill(),o.stroke(),o.fillStyle="rgba(255,255,255,0.35)",o.beginPath(),o.moveTo(-8,-4),o.lineTo(4,-4),o.lineTo(2,-22),o.lineTo(-6,-22),o.closePath(),o.fill(),o.restore()}function Dc(o,e,t,i){const n=Math.max(t/e.naturalWidth,i/e.naturalHeight),s=e.naturalWidth*n,a=e.naturalHeight*n,r=(t-s)/2,l=(i-a)/2;o.drawImage(e,r,l,s,a)}class b1{constructor(){_(this,"container",null);_(this,"canvas",null);_(this,"ctx",null);_(this,"scratch",null);_(this,"sctx",null);_(this,"onComplete",null);_(this,"photo",null);_(this,"img",null);_(this,"imgLoaded",!1);_(this,"lastX",0);_(this,"lastY",0);_(this,"pointerDown",!1);_(this,"cursorX",-999);_(this,"cursorY",-999);_(this,"DURATION",30);_(this,"timeLeft",30);_(this,"timerInterval",null);_(this,"rafId",0);_(this,"done",!1);_(this,"revealed",0);_(this,"lastSampleTime",0);_(this,"SAMPLE_INTERVAL",250);_(this,"toastMsg","");_(this,"toastAlpha",0);_(this,"_onMouseMove");_(this,"_onMouseDown");_(this,"_onMouseUp");_(this,"_onTouchStart");_(this,"_onTouchMove");_(this,"_onTouchEnd");this._onMouseMove=this.handleMouseMove.bind(this),this._onMouseDown=this.handleMouseDown.bind(this),this._onMouseUp=()=>{this.pointerDown=!1},this._onTouchStart=this.handleTouchStart.bind(this),this._onTouchMove=this.handleTouchMove.bind(this),this._onTouchEnd=()=>{this.pointerDown=!1}}mount(e,t){if(this.container=e,this.onComplete=t,this.done=!1,this.revealed=0,this.timeLeft=this.DURATION,this.toastMsg="",this.toastAlpha=0,this.photo=v1(),this.canvas=document.createElement("canvas"),this.canvas.width=e.clientWidth||window.innerWidth,this.canvas.height=e.clientHeight||window.innerHeight,this.canvas.style.cssText="position:absolute;inset:0;display:block;cursor:none;touch-action:none;",this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx)throw new Error("Canvas 2D not supported");if(e.appendChild(this.canvas),this.scratch=document.createElement("canvas"),this.scratch.width=this.canvas.width,this.scratch.height=this.canvas.height,this.sctx=this.scratch.getContext("2d",{willReadFrequently:!0}),!this.sctx)throw new Error("Scratch canvas 2D not supported");y1(this.sctx,this.scratch.width,this.scratch.height),this.img=new Image,this.img.onload=()=>{this.imgLoaded=!0},this.img.onerror=()=>{this.imgLoaded=!0},this.img.src=this.photo.file,this.canvas.addEventListener("mousemove",this._onMouseMove),this.canvas.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),this.canvas.addEventListener("touchstart",this._onTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.canvas.addEventListener("touchend",this._onTouchEnd),this.timerInterval=setInterval(()=>{this.done||(this.timeLeft--,this.timeLeft<=0&&this.finish())},1e3),this.loop()}handleMouseDown(e){this.pointerDown=!0;const t=this.canvas.getBoundingClientRect();this.lastX=e.clientX-t.left,this.lastY=e.clientY-t.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleMouseMove(e){const t=this.canvas.getBoundingClientRect(),i=e.clientX-t.left,n=e.clientY-t.top;this.cursorX=i,this.cursorY=n,this.pointerDown&&!this.done&&(this.scrape(this.lastX,this.lastY,i,n),this.lastX=i,this.lastY=n)}handleTouchStart(e){e.preventDefault(),this.pointerDown=!0;const t=e.touches[0],i=this.canvas.getBoundingClientRect();this.lastX=t.clientX-i.left,this.lastY=t.clientY-i.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleTouchMove(e){if(e.preventDefault(),!this.pointerDown||this.done)return;const t=e.touches[0],i=this.canvas.getBoundingClientRect(),n=t.clientX-i.left,s=t.clientY-i.top;this.cursorX=n,this.cursorY=s,this.scrape(this.lastX,this.lastY,n,s),this.lastX=n,this.lastY=s}scrape(e,t,i,n){if(!this.sctx||!this.scratch||this.done)return;_1(this.sctx,e,t,i,n,45);const s=performance.now();s-this.lastSampleTime>this.SAMPLE_INTERVAL&&(this.lastSampleTime=s,this.revealed=Lc(this.sctx,this.scratch.width,this.scratch.height),this.revealed>=.85&&this.finish())}loop(){if(this.done&&this.toastAlpha<=0)return;const e=this.ctx,t=this.canvas;if(!e||!t)return;const i=t.width,n=t.height;e.clearRect(0,0,i,n),this.imgLoaded&&this.img&&this.img.naturalWidth>0?Dc(e,this.img,i,n):(e.fillStyle="#2a2a20",e.fillRect(0,0,i,n)),this.scratch&&e.drawImage(this.scratch,0,0),this.done||this.drawHUD(e,i,n),this.cursorX>0&&!this.done&&x1(e,this.cursorX,this.cursorY),this.toastAlpha>0&&(this.drawToast(e,i,n),this.toastAlpha-=.012),this.rafId=requestAnimationFrame(()=>this.loop())}drawHUD(e,t,i){const n=this.timeLeft/this.DURATION,s=t*.8,a=t*.1,r=16,l=14,c=7;e.fillStyle="rgba(0,0,0,0.4)",this.roundRect(e,a,r,s,l,c),e.fill();const h=n<.33?"#F07070":n<.6?"#F7C948":"#5EDB7D";e.fillStyle=h,this.roundRect(e,a,r,s*n,l,c),e.fill(),e.fillStyle="#fff",e.font=`bold ${Math.round(i*.03)}px system-ui`,e.textAlign="center",e.shadowColor="rgba(0,0,0,0.8)",e.shadowBlur=6,e.fillText(`${Math.ceil(this.timeLeft)}s`,t/2,r+l+22);const u=Math.round(this.revealed*100);e.font=`900 ${Math.round(i*.09)}px system-ui`,e.textAlign="center",e.fillStyle="rgba(255,255,255,0.9)",e.shadowColor="rgba(0,0,0,0.9)",e.shadowBlur=12,e.fillText(`${u}%`,t/2,i-32),e.shadowBlur=0,this.timeLeft>25&&(e.font=`bold ${Math.round(i*.03)}px system-ui`,e.fillStyle="rgba(255,255,255,0.85)",e.textAlign="center",e.fillText("🪣  Scrape away the plaster!",t/2,i/2))}roundRect(e,t,i,n,s,a){n<0||(e.beginPath(),e.moveTo(t+a,i),e.lineTo(t+n-a,i),e.quadraticCurveTo(t+n,i,t+n,i+a),e.lineTo(t+n,i+s-a),e.quadraticCurveTo(t+n,i+s,t+n-a,i+s),e.lineTo(t+a,i+s),e.quadraticCurveTo(t,i+s,t,i+s-a),e.lineTo(t,i+a),e.quadraticCurveTo(t,i,t+a,i),e.closePath())}drawToast(e,t,i){const n=Math.min(1,this.toastAlpha);e.save(),e.globalAlpha=n,e.fillStyle="rgba(0,0,0,0.7)",e.font=`bold ${Math.round(i*.035)}px system-ui`,e.textAlign="center";const s=this.toastMsg.split(`
`),a=Math.round(i*.045),r=s.length*a+24,l=i*.45-r/2,c=t*.85,h=(t-c)/2;this.roundRect(e,h,l,c,r,16),e.fill(),e.fillStyle="#fff",e.shadowColor="rgba(0,0,0,0.6)",e.shadowBlur=8,s.forEach((u,d)=>{e.fillText(u,t/2,l+22+d*a)}),e.restore()}finish(){if(this.done)return;this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.sctx&&this.scratch&&(this.revealed=Lc(this.sctx,this.scratch.width,this.scratch.height));const e=Math.round(this.revealed*100),t=Math.max(20,e),i=t/100,n=this.photo,s=g1(n.id),a=Hs().length,r=Xh();this.showResultScreen(t,n,s,a,r,i)}showResultScreen(e,t,i,n,s,a){const r=this.ctx,l=this.canvas;if(!r||!l)return;const c=l.width,h=l.height;r.clearRect(0,0,c,h),this.imgLoaded&&this.img&&this.img.naturalWidth>0?Dc(r,this.img,c,h):(r.fillStyle="#2a2a20",r.fillRect(0,0,c,h)),this.scratch&&r.drawImage(this.scratch,0,0),r.fillStyle="rgba(0,0,0,0.65)",r.fillRect(0,0,c,h);const u=e>=85?"#5EDB7D":e>=60?"#F7C948":"#F07070";r.font=`900 ${Math.round(h*.15)}px system-ui`,r.textAlign="center",r.fillStyle=u,r.shadowColor="rgba(0,0,0,0.8)",r.shadowBlur=20,r.fillText(`${e}%`,c/2,h*.35),r.font=`bold ${Math.round(h*.04)}px system-ui`,r.fillStyle="#fff",r.shadowBlur=10,r.fillText(`📸 ${t.name}`,c/2,h*.47);let d;s?d="🏆 FULL TEM COLLECTION!":i?d="✨ NEW PHOTO UNLOCKED!":d="Already in your collection",r.font=`bold ${Math.round(h*.032)}px system-ui`,r.fillStyle=s?"#FFD700":i?"#5EDB7D":"#aaa",r.shadowBlur=8,r.fillText(d,c/2,h*.56),r.font=`${Math.round(h*.026)}px system-ui`,r.fillStyle="rgba(255,255,255,0.75)",r.shadowBlur=4,r.fillText(`Collection: ${n} / ${_n.length}`,c/2,h*.64),r.shadowBlur=0;const f=s?"🏆 Full TEM Collection complete!":i?`📸 New photo unlocked: ${t.name}`:`${t.name} — already in collection`,g={score:e,qualityPct:a,message:f};setTimeout(()=>{var v;return(v=this.onComplete)==null?void 0:v.call(this,g)},2800)}unmount(){this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.rafId&&cancelAnimationFrame(this.rafId),this.canvas&&(this.canvas.removeEventListener("mousemove",this._onMouseMove),this.canvas.removeEventListener("mousedown",this._onMouseDown),this.canvas.removeEventListener("touchstart",this._onTouchStart),this.canvas.removeEventListener("touchmove",this._onTouchMove),this.canvas.removeEventListener("touchend",this._onTouchEnd),this.canvas.remove()),window.removeEventListener("mouseup",this._onMouseUp),this.canvas=null,this.ctx=null,this.scratch=null,this.sctx=null,this.container=null,this.onComplete=null,this.img=null}}const st=5,Ro=8,Vt=Ro*st,w1=[-8,8],Bc=20,vo=5.5,Fc=14,kc=11,Nc=4,Uc=-30,rn=.4,M1=2.1;class T1{constructor(){_(this,"overlay");_(this,"renderer");_(this,"scene");_(this,"camera");_(this,"rafId",0);_(this,"lastTs",0);_(this,"px",0);_(this,"py",0);_(this,"vx",0);_(this,"vy",0);_(this,"onGround",!1);_(this,"jumpsLeft",2);_(this,"climbPole",null);_(this,"swingBar",null);_(this,"swingAngle",0);_(this,"swingOmega",0);_(this,"char");_(this,"charGroup");_(this,"facingRight",!0);_(this,"platforms",[]);_(this,"poles",[]);_(this,"swingBars",[]);_(this,"globs",[]);_(this,"globSpawnTimer",3.5);_(this,"connTopX",0);_(this,"connTopDir",1);_(this,"CONN_TOP_SPD",2.8);_(this,"connTopMesh",null);_(this,"warnT",0);_(this,"warningEl",null);_(this,"throwCount",0);_(this,"bionichipActive",!1);_(this,"bionichipBurstLeft",0);_(this,"invincT",0);_(this,"CONNIE_TAUNTS",["🪣 Watch the silicone!","⚡ Metal hip, no miss!","🦾 Bionic arm activated!","💀 Duck, Jarrad!","🪣 Plasterin' from above!","😈 Try me, hardhat!"]);_(this,"BIONIC_WARNING","⚡⚡ BIONIC BURST!!");_(this,"heartsEl");_(this,"timerEl");_(this,"lives",3);_(this,"timer",120);_(this,"gameOver",!1);_(this,"delivered",!1);_(this,"keys",{left:!1,right:!1,up:!1,down:!1});_(this,"jumpTap",!1);_(this,"onCompleteFn")}start(e){this.onCompleteFn=e,this._createOverlay(),this._createScene(),this._buildBackground(),this._buildLevel(),this._buildHUD(),this._buildControls(),this.px=0,this.py=.5,this.lastTs=performance.now(),this.rafId=requestAnimationFrame(t=>this._loop(t))}_createOverlay(){this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position:fixed; inset:0; z-index:10000; overflow:hidden; touch-action:none;
      background:#87CEEB;
    `,document.body.appendChild(this.overlay)}_createScene(){const e=window.innerWidth,t=window.innerHeight,i=document.createElement("canvas");i.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;",this.overlay.appendChild(i),this.renderer=new Wr({canvas:i,antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setSize(e,t),this.renderer.shadowMap.enabled=!0,this.scene=new Xr,this.scene.background=new we(8900331),this.scene.fog=new Vo(8900331,.018),this.camera=new Nt(44,e/t,.1,200),this.camera.position.set(0,12,26),this.camera.lookAt(0,10,0);const n=new $r(16777215,.6);this.scene.add(n);const s=new Qn(16775400,1.1);s.position.set(8,30,15),s.castShadow=!0,s.shadow.mapSize.set(1024,1024),s.shadow.camera.near=.5,s.shadow.camera.far=120,s.shadow.camera.left=-20,s.shadow.camera.right=20,s.shadow.camera.top=55,s.shadow.camera.bottom=-5,this.scene.add(s);const a=new Qn(12638463,.4);a.position.set(-5,10,5),this.scene.add(a),this.char=new ts(Fi.Jarrad),this.charGroup=this.char.group,this.charGroup.scale.setScalar(1),this.scene.add(this.charGroup);const r=new ts(Fi.Connie);this.connTopMesh=r.group,this.connTopMesh.scale.setScalar(.85),this.connTopMesh.position.set(0,Vt+.5,.3),this.scene.add(this.connTopMesh);const l=new kh(8930559,0,6);l.name="bionichipLight",this.connTopMesh.add(l)}_buildBackground(){const e=(n,s,a,r,l)=>{const c=new B(n,new $({color:s}));return c.position.set(a,r,l),c.receiveShadow=!0,this.scene.add(c),c};e(new mt(80,60),11589872,0,22,-12);const t=[[-14,10],[-10,14],[-6,8],[8,16],[12,11],[16,9]];for(const[n,s]of t)e(new Q(4,s,1),6975632,n,s/2-1,-9);const i=Vt+5;e(new Q(16,i,.6),15260864,0,i/2-1,-1.5),e(new Q(16.6,.5,.9),13945e3,0,i-1,-1.4),e(new Q(16,.4,.7),13681824,0,0,-1.4);for(let n=0;n<Ro;n++){const s=n*st+2;for(const a of[-5.5,-1.8,1.8,5.5])e(new Q(2,2.8,.2),3359846,a,s,-1.1),e(new Q(1.8,.15,.25),12300432,a,s+1.5,-1.05)}e(new Q(24,.5,5),3815474,0,-.25,.5),e(new Q(14,.5,1.2),13154440,0,.25,1),e(new Q(14,1.2,.15),12101752,0,.6,1.57),e(new Q(.15,1.2,1.2),12101752,-7,.6,1),e(new Q(.15,1.2,1.2),12101752,7,.6,1)}_buildLevel(){for(const t of w1)this._addScaffoldPole(t,0,Vt+3),this.poles.push({x:t,y1:0,y2:Vt+3});for(const t of[-3.5,3.5])this._addScaffoldPole(t,0,Vt+3),this.poles.push({x:t,y1:0,y2:Vt+3});this._addScaffoldPole(-1,0,Vt+3),this._addScaffoldPole(1,0,Vt+3);for(let t=0;t<=Ro;t++){const i=t*st;this._addTube(-8,8,i,10066346,.07)}for(let t=0;t<Ro;t++){const i=t*st,n=(t+1)*st;this._addDiag(-8,i,8,n),this._addDiag(8,i,-8,n)}this._addPlat(-4.5,4.5,0,"normal"),this._addPlat(-7.5,-2.5,st*1,"normal"),this._addPlat(2.5,7.5,st*1,"normal"),this._addPlat(-7.5,-2,st*2,"crumble"),this._addPlat(3.5,7.5,st*2,"normal"),this._addPlat(-7.5,-4.5,st*3,"normal"),this._addPlat(-1.5,1.5,st*3,"moving"),this._addPlat(4.5,7.5,st*3,"normal"),this._addPlat(-7.5,-3.5,st*4,"crumble"),this._addPlat(4,7.5,st*4,"normal"),this._addPlat(-7.5,-5,st*5,"normal"),this._addPlat(-1.2,1.2,st*5+1,"moving"),this._addPlat(5,7.5,st*5,"crumble"),this._addPlat(-7.5,-5.5,st*6,"crumble"),this._addPlat(-2.5,2.5,st*6,"moving"),this._addPlat(5.5,7.5,st*6,"crumble"),this._addPlat(-7.5,-5,st*7,"crumble"),this._addPlat(5,7.5,st*7,"crumble"),this._addSwingBar(0,st*1+2.5,2.8),this._addSwingBar(0,st*3+2.5,2.8),this._addSwingBar(-4,st*5+2.5,2.2),this._addSwingBar(4,st*6+2.5,2.2),this._addPlat(-7.5,7.5,Vt,"win"),this._addSign(0,Vt+1.8,"⭐ DELIVER HERE ⭐",16746496),this._addBucket(-5,.8),this._addBucket(5,.8)}_addScaffoldPole(e,t,i){const n=i-t,s=new Ye(.07,.07,n,8),a=new $({color:10526896}),r=new B(s,a);r.position.set(e,t+n/2,.3),r.castShadow=!0,this.scene.add(r);for(let l=t;l<=i;l+=st){const c=new ft(.12,6,5),h=new B(c,a);h.position.set(e,l,.3),this.scene.add(h)}}_addTube(e,t,i,n,s){const a=t-e,r=new Ye(s,s,a,7),l=new $({color:n}),c=new B(r,l);c.rotation.z=Math.PI/2,c.position.set((e+t)/2,i,.3),this.scene.add(c)}_addDiag(e,t,i,n){const s=i-e,a=n-t,r=Math.sqrt(s*s+a*a),l=new Ye(.04,.04,r,6),c=new $({color:8947872}),h=new B(l,c);h.rotation.z=Math.atan2(a,s)-Math.PI/2,h.position.set((e+i)/2,(t+n)/2,.3),this.scene.add(h)}_addPlat(e,t,i,n){const s=t-e,a={normal:9134608,moving:13918224,crumble:8939042,win:16763904}[n],r=new Q(s,.28,.8),l=new $({color:a}),c=new B(r,l);c.position.set((e+t)/2,i+.14,.3),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);for(let h=e+.6;h<t;h+=.9){const u=new Q(.06,.3,.82),d=new $({color:a-1118464}),f=new B(u,d);f.position.set(h-(e+t)/2,0,0),c.add(f)}this.platforms.push({x1:e,x2:t,y:i,mesh:c,type:n,moveDir:1,crumbleTimer:0,crumbled:!1})}_addSwingBar(e,t,i){const n=new Ye(.09,.09,3,8),s=new $({color:16755200,emissive:8930304,emissiveIntensity:.5}),a=new B(n,s);a.rotation.z=Math.PI/2,a.position.set(e,t,.5),this.scene.add(a);const r=new ft(.22,8,8),l=new zt({color:16772608,transparent:!0,opacity:.7}),c=new B(r,l);c.position.set(e,t,.6),this.scene.add(c),this.swingBars.push({anchorX:e,anchorY:t,radius:i,mesh:a})}_addSign(e,t,i,n){const s=new Q(6,.8,.15),a=new $({color:n,emissive:n,emissiveIntensity:.3}),r=new B(s,a);r.position.set(e,t,.5),this.scene.add(r)}_addBucket(e,t){const i=new Ye(.25,.2,.5,8),n=new $({color:12674667,emissive:6684689,emissiveIntensity:.3}),s=new B(i,n);s.position.set(e,t,.5),this.scene.add(s)}_spawnGlob(){const e=this.camera.position.y+11,t=Math.min(e,Vt),i=this.connTopX+(Math.random()-.5)*4,n=new ft(.85,10,10),s=new $({color:16737826,emissive:13382400,emissiveIntensity:.9}),a=new B(n,s);a.position.set(i,t,.5),a.castShadow=!0,this.scene.add(a);const r=new Ki(.6,1.1,20),l=new zt({color:16720384,transparent:!0,opacity:.75,side:Ut}),c=new B(r,l);c.rotation.x=-Math.PI/2,c.position.set(i,.3,.5),this.scene.add(c),this.globs.push({x:i,y:t,vx:(Math.random()-.5)*3.5,vy:-4,r:.85,mesh:a,shadowRing:c,dead:!1})}_buildHUD(){const e=document.createElement("div");e.style.cssText=`
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
    `;const t=document.createElement("div");t.style.cssText="display:grid; grid-template-columns:70px 70px 70px; grid-template-rows:70px 70px; gap:6px;";const i=(g,v,m,p)=>{const w=document.createElement("div");return w.style.cssText=`
        grid-row:${m}; grid-column:${p};
        background:${v}; border-radius:50%; color:#fff;
        font-size:22px; display:flex; align-items:center; justify-content:center;
        box-shadow:0 4px 10px rgba(0,0,0,0.4); touch-action:none; user-select:none;
        cursor:pointer;
      `,w.textContent=g,w},n=i("▲","rgba(60,60,160,0.88)",1,2),s=i("◀","rgba(70,70,70,0.88)",2,1),a=i("▼","rgba(60,60,160,0.88)",2,2),r=i("▶","rgba(70,70,70,0.88)",2,3);t.appendChild(n),t.appendChild(s),t.appendChild(a),t.appendChild(r);const l=document.createElement("div");l.style.cssText=`
      width:92px; height:92px; border-radius:50%;
      background:rgba(30,180,30,0.9); color:#fff;
      font-size:13px; font-weight:900; letter-spacing:0.5px;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 5px 15px rgba(0,0,0,0.45); touch-action:none; user-select:none;
      cursor:pointer;
    `,l.textContent="JUMP";const c=(g,v,m)=>{g.addEventListener("touchstart",p=>{p.preventDefault(),v()},{passive:!1}),g.addEventListener("touchend",p=>{p.preventDefault(),m()},{passive:!1}),g.addEventListener("mousedown",v),g.addEventListener("mouseup",m)};c(s,()=>this.keys.left=!0,()=>this.keys.left=!1),c(r,()=>this.keys.right=!0,()=>this.keys.right=!1),c(n,()=>this.keys.up=!0,()=>this.keys.up=!1),c(a,()=>this.keys.down=!0,()=>this.keys.down=!1);const h=()=>{this.jumpTap=!0};l.addEventListener("touchstart",g=>{g.preventDefault(),h()},{passive:!1}),l.addEventListener("mousedown",h);const u={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down",KeyA:"left",KeyD:"right",KeyW:"up",KeyS:"down"},d=g=>{if(u[g.code]){const v=u[g.code];v==="jump"?this.jumpTap=!0:this.keys[v]=!0}(g.code==="Space"||g.code==="KeyZ")&&(this.jumpTap=!0)},f=g=>{const v=u[g.code];v&&v!=="jump"&&(this.keys[v]=!1)};window.addEventListener("keydown",d),window.addEventListener("keyup",f),this.overlay.addEventListener("remove",()=>{window.removeEventListener("keydown",d),window.removeEventListener("keyup",f)}),e.appendChild(t),e.appendChild(l),this.overlay.appendChild(e)}_loop(e){if(this.gameOver)return;this.rafId=requestAnimationFrame(i=>this._loop(i));const t=Math.min((e-this.lastTs)/1e3,.05);this.lastTs=e;try{this._update(t),this.renderer.render(this.scene,this.camera)}catch{}this.jumpTap=!1}_update(e){if(this.timer=Math.max(0,this.timer-e),this.timerEl.textContent=`⏱ ${Math.ceil(this.timer)}s`,this.timer<=0&&!this.delivered){this._end(!1);return}this.char.update(e);for(const i of this.platforms)if(i.type==="moving"&&(i.x1+=2.5*(i.moveDir??1)*e,i.x2+=2.5*(i.moveDir??1)*e,i.mesh.position.x=(i.x1+i.x2)/2,(i.x2>5.2||i.x1<-1.8)&&(i.moveDir=-(i.moveDir??1))),i.type==="crumble"&&!i.crumbled)if(this.onGround&&this.px>=i.x1-rn&&this.px<=i.x2+rn&&Math.abs(this.py-i.y)<.3){i.crumbleTimer=(i.crumbleTimer??0)+e;const s=Math.sin(i.crumbleTimer*40)*.06*Math.min(1,i.crumbleTimer);i.mesh.position.z=.3+s,i.crumbleTimer>1.2&&(i.crumbled=!0,i.mesh.visible=!1)}else(i.crumbleTimer??0)>0&&!i.crumbled&&(i.crumbleTimer=0);if(this.connTopX+=this.CONN_TOP_SPD*this.connTopDir*e,this.connTopX>6.5&&(this.connTopX=6.5,this.connTopDir=-1),this.connTopX<-6.5&&(this.connTopX=-6.5,this.connTopDir=1),this.connTopMesh){this.connTopMesh.position.x=this.connTopX,this.connTopMesh.rotation.y=this.connTopDir>0?-.2:Math.PI+.2;const i=this.connTopMesh.getObjectByName("bionichipLight");i&&(i.intensity=this.bionichipActive?2.5+Math.sin(performance.now()*.02)*1.5:0),this.bionichipActive&&(this.connTopX+=this.CONN_TOP_SPD*2.5*this.connTopDir*e)}if(this.globSpawnTimer-=e,this.globSpawnTimer<=1.5&&this.warningEl&&(this.warningEl.style.display="block"),this.globSpawnTimer<=0){this.throwCount++;const i=this.throwCount%4===0;this.warningEl&&(this.warningEl.style.display="none",this.warningEl.style.background="rgba(200,0,0,0.85)"),i?(this.bionichipActive=!0,this.bionichipBurstLeft=2,this._spawnGlob(),setTimeout(()=>{this.gameOver||this._spawnGlob()},250),setTimeout(()=>{this.gameOver||this._spawnGlob()},500),setTimeout(()=>{this.bionichipActive=!1},600)):this._spawnGlob();const n=Math.max(.55,this.timer/120);if(this.globSpawnTimer=(1.5+Math.random()*1.5)*n,this.warningEl)if(this.throwCount%4===3)this.warningEl.textContent=this.BIONIC_WARNING,this.warningEl.style.background="rgba(80,0,180,0.92)";else{const s=this.CONNIE_TAUNTS[Math.floor(Math.random()*this.CONNIE_TAUNTS.length)];this.warningEl.textContent=s,this.warningEl.style.background="rgba(200,0,0,0.85)"}}this.invincT>0?(this.invincT-=e,this.charGroup.visible=Math.sin(this.invincT*25)>0):this.charGroup.visible=!0;for(const i of this.globs)if(!i.dead){if(i.vy=Math.max(i.vy-Bc*e,Uc),i.x+=i.vx*e,i.y+=i.vy*e,i.mesh.position.set(i.x,i.y,.5),i.mesh.rotation.z+=4*e,i.shadowRing){const n=Math.max(0,Math.min(1,i.y/(Vt+5))),s=1+(1-n)*1.2,a=.4+(1-n)*.55;i.shadowRing.position.x=i.x,i.shadowRing.scale.setScalar(s),i.shadowRing.material.opacity=a}if(!this.delivered&&this.invincT<=0){const n=Math.abs(this.px-i.x),s=i.y-this.py;if(n<rn+i.r+.15&&s>-.5&&s<M1+i.r){if(i.dead=!0,this.scene.remove(i.mesh),this.scene.remove(i.shadowRing),this.lives--,this._updateHearts(),this.lives<=0){this._end(!1);return}this.vy=-18,this.vx=(this.px>i.x?1:-1)*5,this.onGround=!1,this.jumpsLeft=1,this.climbPole=null,this.swingBar=null,this.invincT=1.2;continue}}if(!i.dead){for(const n of this.platforms)if(!n.crumbled&&i.x>n.x1&&i.x<n.x2&&Math.abs(i.y-n.y)<.5&&i.vy<=0){i.dead=!0,this.scene.remove(i.mesh),this.scene.remove(i.shadowRing);break}!i.dead&&i.y<-2&&(i.dead=!0,this.scene.remove(i.mesh),this.scene.remove(i.shadowRing))}}this.globs=this.globs.filter(i=>!i.dead),this.swingBar?this._physicsSwing(e):this.climbPole?this._physicsClimb(e):this._physicsPlatform(e),this.charGroup.position.set(this.px,this.py,.3),this.charGroup.rotation.y=this.facingRight?-.15:Math.PI+.15;const t=Math.max(8,Math.min(this.py+6,Vt+2));if(this.camera.position.y+=(t-this.camera.position.y)*.07,this.camera.lookAt(0,this.camera.position.y-4,0),this.py<-3.5){this._loseLife();return}!this.delivered&&this.py>=Vt-.5&&Math.abs(this.px)<5&&(this.delivered=!0,this._end(!0))}_physicsPlatform(e){for(const t of this.poles)if(Math.abs(this.px-t.x)<.6&&this.py>=t.y1-.5&&this.py<=t.y2&&this.keys.up){this.climbPole=t,this.px=t.x,this.vx=0,this.vy=0,this.onGround=!1;return}if(this.onGround||(this.vy=Math.max(this.vy-Bc*e,Uc)),this.keys.left?(this.vx=-vo,this.facingRight=!1):this.keys.right?(this.vx=vo,this.facingRight=!0):this.vx*=.6,this.jumpTap)if(this.onGround)this.vy=Fc,this.onGround=!1,this.jumpsLeft=1;else if(this.jumpsLeft>0)this.vy=kc,this.jumpsLeft--;else for(const t of this.swingBars){const i=this.px-t.anchorX,n=this.py-t.anchorY,s=Math.sqrt(i*i+n*n);if(s<t.radius+1.5&&this.py<t.anchorY+.5){this.swingBar=t;const a=Math.max(s,t.radius);this.swingAngle=Math.atan2(i,-n),this.swingOmega=this.vx/a,this.vx=0,this.vy=0;return}}if(!this.onGround)for(const t of this.swingBars){const i=Math.abs(this.py-t.anchorY),n=Math.abs(this.px-t.anchorX);if(i<.6&&n<t.radius&&this.vy<0){this.swingBar=t,this.swingAngle=Math.atan2(this.px-t.anchorX,-(this.py-t.anchorY)),this.swingOmega=this.vx/t.radius,this.vx=0,this.vy=0;return}}this.px+=this.vx*e,this.py+=this.vy*e,this.px=Math.max(-8.2,Math.min(8.2,this.px)),this.onGround=!1;for(const t of this.platforms)if(!t.crumbled&&this.px+rn>t.x1&&this.px-rn<t.x2&&this.py>t.y-.5&&this.py<t.y+1&&this.vy<=0){this.py=t.y,this.vy=0,this.onGround=!0,this.jumpsLeft=2;break}}_physicsClimb(e){const t=this.climbPole;this.keys.up&&(this.py+=Nc*e),this.keys.down&&(this.py-=Nc*e);for(const i of this.platforms)if(!i.crumbled&&Math.abs(this.py-i.y)<.4&&this.px>=i.x1&&this.px<=i.x2){this.climbPole=null,this.py=i.y,this.onGround=!0,this.jumpsLeft=2;return}(this.py<t.y1||this.py>t.y2)&&(this.climbPole=null),this.jumpTap&&(this.climbPole=null,this.vy=Fc*.85,this.jumpsLeft=1,this.keys.left?(this.vx=-vo*1.3,this.facingRight=!1):this.keys.right&&(this.vx=vo*1.3,this.facingRight=!0))}_physicsSwing(e){const t=this.swingBar,i=t.radius;if(this.swingOmega+=-(9.8/i)*Math.sin(this.swingAngle)*e,this.keys.left&&(this.swingOmega-=4*e),this.keys.right&&(this.swingOmega+=4*e),this.swingOmega*=.993,this.swingAngle+=this.swingOmega*e,this.px=t.anchorX+i*Math.sin(this.swingAngle),this.py=t.anchorY-i*Math.cos(this.swingAngle),this.facingRight=this.swingOmega>0,this.jumpTap){this.swingBar=null;const n=this.swingOmega*i;this.vx=n*Math.cos(this.swingAngle)*1.4,this.vy=Math.max(kc*.75,Math.abs(n)*.8+4),this.jumpsLeft=1,this.onGround=!1}for(const n of this.platforms)!n.crumbled&&this.px+rn>n.x1&&this.px-rn<n.x2&&Math.abs(this.py-n.y)<.4&&this.swingOmega<1.5&&(this.swingBar=null,this.py=n.y,this.vx=0,this.vy=0,this.onGround=!0,this.jumpsLeft=2)}_loseLife(){if(this.lives--,this._updateHearts(),this.lives<=0){this._end(!1);return}const e=Math.max(0,Math.floor(this.py/st)-1);this.px=0,this.py=e*st,this.vx=0,this.vy=0,this.onGround=!1,this.jumpsLeft=2,this.climbPole=null,this.swingBar=null}_end(e){if(this.gameOver)return;this.gameOver=!0,cancelAnimationFrame(this.rafId);const t=e?1:-.3,i=document.createElement("div");i.style.cssText=`
      position:absolute; top:50%; left:50%; transform:translate(-50%,-55%);
      background:rgba(0,0,0,0.88); padding:32px 40px;
      border-radius:22px; font-size:26px; font-weight:900; text-align:center;
      font-family:system-ui,sans-serif; z-index:200;
      box-shadow:0 8px 32px rgba(0,0,0,0.6);
      border:2px solid ${e?"#FFD700":"#C1666B"};
      color: ${e?"#FFD97A":"#FF6B6B"};
    `,i.innerHTML=e?'🏆 DELIVERED!<br><small style="font-size:15px;font-weight:500;color:#ccc;">Full pay — nice work, Jarrad.</small>':`💀 SCAFFOLD FAIL<br><small style="font-size:15px;font-weight:500;color:#ccc;">−30% penalty. Jarrad's blaming his phone.</small>`,this.overlay.appendChild(i),setTimeout(()=>{const n={score:e?100:0,qualityPct:t,message:e?"Scaffold conquered!":"Scaffold failed — 30% deducted."};try{this._cleanup()}catch{}try{this.onCompleteFn(n)}catch{}},e?1800:2200)}_cleanup(){cancelAnimationFrame(this.rafId);for(const e of this.globs){try{this.scene.remove(e.mesh)}catch{}try{e.shadowRing&&this.scene.remove(e.shadowRing)}catch{}}this.globs=[],this.renderer.dispose(),this.overlay.dispatchEvent(new Event("remove")),this.overlay.remove()}mount(e,t){this.start(t)}unmount(){this.gameOver||(this.gameOver=!0,this._cleanup())}}class S1{constructor(){_(this,"overlay");_(this,"active",!1);_(this,"trowelingGame",null);_(this,"scaffoldGame",null);_(this,"safetyTimer",null);this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,t.addEventListener("click",()=>{this.stop(),e({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(t),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),e({score:70,qualityPct:.7,message:"Time up!"}))},6e4),setTimeout(()=>{if(this.active)try{this.trowelingGame=new b1,this.trowelingGame.mount(this.overlay,i=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),e(i)})}catch(i){console.error("TrowelingGame init failed:",i);const n=document.createElement("div");n.style.cssText=`
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
    `,t.addEventListener("click",()=>{this.stop(),e({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(t),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),e({score:50,qualityPct:.5,message:"Time up on the scaffold!"}))},9e4),setTimeout(()=>{if(this.active)try{this.scaffoldGame=new T1,this.scaffoldGame.mount(this.overlay,i=>{this.safetyTimer&&clearTimeout(this.safetyTimer);try{this.stop()}catch{this.active=!1}e(i)})}catch(i){console.error("ScaffoldGame init failed:",i);const n=document.createElement("div");n.style.cssText=`
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; height:100%; color:#fff;
          font-family:system-ui,sans-serif; gap:24px; padding:40px;
          text-align:center;
        `,n.innerHTML=`
          <div style="font-size:60px">🪣</div>
          <div style="font-size:30px; font-weight:800;">SCAFFOLD CLIMBED!</div>
          <div style="font-size:16px; opacity:0.7;">Tap DONE to collect your pay</div>
        `,this.overlay.appendChild(n)}},120)}startRandom(e){Math.random()<.5?this.startTroweling(e):this.startScaffold(e)}stop(){this.safetyTimer&&(clearTimeout(this.safetyTimer),this.safetyTimer=null),this.trowelingGame&&(this.trowelingGame.unmount(),this.trowelingGame=null),this.scaffoldGame&&(this.scaffoldGame.unmount(),this.scaffoldGame=null),this.overlay.style.display="none",this.overlay.innerHTML="",this.active=!1}}function jh(){return localStorage.getItem("tem-rush-btc-achieved")==="1"}function E1(o={}){const e=o.recipientName??"Apprentice Plasterer",t=o.dateStr??new Date().toLocaleDateString("en-AU",{day:"numeric",month:"long",year:"numeric"}),i=o.btcAchieved??jh(),n=900,s=i?820:640,a=document.createElement("canvas");a.width=n,a.height=s;const r=a.getContext("2d");r.fillStyle="#0D0B08",r.fillRect(0,0,n,s);const l=r.createLinearGradient(0,0,n,s);l.addColorStop(0,"rgba(40,32,20,0.95)"),l.addColorStop(.5,"rgba(28,22,14,0.98)"),l.addColorStop(1,"rgba(40,32,20,0.95)"),r.fillStyle=l,r.fillRect(0,0,n,s),r.strokeStyle="#C8A86A",r.lineWidth=3,r.strokeRect(18,18,n-36,s-36),r.strokeStyle="rgba(200,168,106,0.35)",r.lineWidth=1,r.strokeRect(26,26,n-52,s-52);const c=[[36,36],[n-36,36],[36,s-36],[n-36,s-36]];for(const[R,C]of c)r.strokeStyle="#C8A86A",r.lineWidth=1.5,r.beginPath(),r.arc(R,C,10,0,Math.PI*2),r.stroke(),r.beginPath(),r.arc(R,C,5,0,Math.PI*2),r.fillStyle="#C8A86A",r.fill();const h=n/2,u=74;r.fillStyle="#C8A86A",r.fillRect(h-3,u,6,22);for(let R=0;R<3;R++){const C=20-R*4,A=u-R*14;r.beginPath(),r.arc(h,A,C,0,Math.PI*2),r.fill()}r.textAlign="center",r.fillStyle="#C8A86A",r.font="700 11px 'Courier New', monospace",r.letterSpacing="4px",r.fillText("TROWELED EARTH MELBOURNE",n/2,148),r.fillStyle="rgba(200,168,106,0.45)",r.fillRect(n/2-180,158,360,1),r.fillStyle="#F0E8D8",r.font="900 34px system-ui, sans-serif",r.letterSpacing="0px",r.fillText("Certificate of Completion",n/2,200),r.fillStyle="rgba(200,168,106,0.45)",r.fillRect(n/2-220,214,440,1),r.fillStyle="rgba(240,232,216,0.55)",r.font="400 15px system-ui, sans-serif",r.fillText("This certifies that",n/2,258),r.fillStyle="#FFD97A",r.font="700 28px system-ui, sans-serif",r.fillText(e,n/2,300),r.fillStyle="rgba(200,168,106,0.45)",r.fillRect(n/2-200,312,400,1),r.fillStyle="rgba(240,232,216,0.55)",r.font="400 15px system-ui, sans-serif",r.fillText("has completed all TEM Rush training missions",n/2,348),r.fillText("and achieved full collection of Troweled Earth works.",n/2,372);const d=n/2-200,f=394,g=400,v=58;r.fillStyle="rgba(200,168,106,0.08)",r.strokeStyle="rgba(200,168,106,0.3)",r.lineWidth=1,r.beginPath(),r.roundRect(d,f,g,v,8),r.fill(),r.stroke(),r.fillStyle="#C8A86A",r.font="700 11px 'Courier New', monospace",r.letterSpacing="2px",r.fillText("QUALIFICATION",n/2,f+20),r.fillStyle="#F0E8D8",r.font="700 17px system-ui, sans-serif",r.letterSpacing="0px",r.fillText("TEM Rush — Plasterer's Apprentice",n/2,f+44);const m=n/2-160,p=466,w=320,M=52;r.fillStyle="rgba(193,102,107,0.15)",r.strokeStyle="rgba(193,102,107,0.5)",r.lineWidth=1.5,r.beginPath(),r.roundRect(m,p,w,M,8),r.fill(),r.stroke(),r.fillStyle="#C1666B",r.font="700 11px 'Courier New', monospace",r.letterSpacing="2px",r.fillText("5% OFF TEM STORE — USE CODE:",n/2,p+20),r.fillStyle="#FFD97A",r.font="900 20px system-ui, sans-serif",r.letterSpacing="3px",r.fillText("TEMRUSH5",n/2,p+41),r.letterSpacing="0px";const y=556;if(r.strokeStyle="rgba(200,168,106,0.4)",r.lineWidth=1,r.beginPath(),r.moveTo(n/2-260,y),r.lineTo(n/2-80,y),r.stroke(),r.beginPath(),r.moveTo(n/2+80,y),r.lineTo(n/2+260,y),r.stroke(),r.fillStyle="rgba(240,232,216,0.5)",r.font="400 12px system-ui, sans-serif",r.fillText("Matt Maloy",n/2-170,y+16),r.fillText(t,n/2+170,y+16),r.fillStyle="rgba(200,168,106,0.45)",r.font="400 10px 'Courier New', monospace",r.fillText("Director, Troweled Earth Melbourne",n/2-170,y+32),r.fillText("Date of Completion",n/2+170,y+32),r.fillStyle="rgba(200,168,106,0.06)",r.font="900 90px system-ui, sans-serif",r.save(),r.translate(n/2,s/2+20),r.rotate(-.18),r.fillText("CERTIFIED",0,0),r.restore(),i){r.strokeStyle="rgba(247,147,26,0.35)",r.lineWidth=1,r.beginPath(),r.moveTo(36,602),r.lineTo(n-36,602),r.stroke(),r.fillStyle="#F7931A",r.font="900 14px monospace",r.letterSpacing="2px",r.textAlign="center",r.fillText("₿  1 BITCOIN ACHIEVEMENT — BONUS REWARDS",n/2,624);const C=360,A=90,I=20,T=n/2-C-I/2,b=n/2+I/2,P=638,z=(O,G,K,q,te)=>{r.fillStyle="rgba(247,147,26,0.10)",r.strokeStyle="rgba(247,147,26,0.40)",r.lineWidth=1,r.beginPath(),r.roundRect(O,G,C,A,8),r.fill(),r.stroke(),r.textAlign="center",r.fillStyle="#F7931A",r.font="700 11px monospace",r.letterSpacing="1px",r.fillText(`${K}  ${q}`,O+C/2,G+22),r.fillStyle="rgba(240,232,216,0.5)",r.font="400 11px system-ui",r.letterSpacing="0px",r.fillText("USE CODE AT CHECKOUT:",O+C/2,G+46),r.fillStyle="#FFD97A",r.font="900 18px monospace",r.letterSpacing="2px",r.fillText(te,O+C/2,G+72)};z(T,P,"🎽","10% OFF TEM MERCH STORE","BTCPLASTER10"),z(b,P,"🪣","5% OFF MATERIAL SALES","BTCMAT5"),r.letterSpacing="0px",r.textAlign="center",r.fillStyle="rgba(200,168,106,0.4)",r.font="400 10px monospace",r.fillText("Present this certificate at participating TEM retail stores",n/2,746)}return a.toDataURL("image/png")}const C1="https://troweledearthmelbourne.com.au",Oc="TEMRUSH5",zc="tem-rush-cert-unlocked";class Ns{constructor(){_(this,"overlay",null);_(this,"certDataUrl",null)}static isUnlocked(){return localStorage.getItem(zc)==="1"}trigger(){localStorage.setItem(zc,"1"),this._show(!0)}open(){Ns.isUnlocked()&&this._show(!1)}_show(e){this.overlay&&(this.overlay.remove(),this.overlay=null),this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
        <a href="${C1}" target="_blank"
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
    `;try{this.certDataUrl=E1({btcAchieved:jh()});const l=document.createElement("img");l.src=this.certDataUrl,l.style.cssText=`
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
    `,i.addEventListener("click",()=>e.remove()),e.addEventListener("click",n=>{n.target===e&&e.remove()}),e.appendChild(t),e.appendChild(i),document.body.appendChild(e)}_downloadCert(){if(!this.certDataUrl)return;const e=document.createElement("a");e.href=this.certDataUrl,e.download="TEM-Rush-Certificate.png",e.click()}_close(){this.overlay&&(this.overlay.remove(),this.overlay=null)}}class A1{constructor(){_(this,"overlay",null);_(this,"rewardScreen",new Ns)}show(){if(this.overlay){this.refresh(),this.overlay.style.display="flex";return}this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,this.overlay.appendChild(a),this.overlay.addEventListener("click",r=>{r.target===this.overlay&&this.hide()}),document.body.appendChild(this.overlay),this.refresh()}refresh(){if(!this.overlay)return;const e=Hs(),t=e.length,i=_n.length,n=this.overlay.querySelector("#gallery-progress-wrap");if(n){n.innerHTML="";const r=document.createElement("div");r.style.cssText=`
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
      `,l.appendChild(c),n.appendChild(l)}const s=this.overlay.querySelector("#gallery-grid");s&&(s.innerHTML="",_n.forEach(r=>{const l=e.includes(r.id),c=document.createElement("div");if(c.style.cssText=`
          border-radius: 12px; overflow: hidden;
          position: relative; aspect-ratio: 4/3;
          background: ${l?"#1a1a14":"rgba(255,255,255,0.04)"};
          border: 1.5px solid ${l?"rgba(200,184,154,0.4)":"rgba(255,255,255,0.08)"};
          box-shadow: 0 2px 12px rgba(0,0,0,0.5);
        `,l){const h=document.createElement("img");h.src=r.file,h.alt=r.name,h.style.cssText=`
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
          `,u.textContent=r.name,c.appendChild(u);const d=document.createElement("div");d.style.cssText=`
            position: absolute; top: 8px; right: 8px;
            font-size: 16px; opacity: 0.6; pointer-events: none;
          `,d.textContent="🔍",c.appendChild(d),c.style.cursor="pointer",c.addEventListener("click",()=>this._openLightbox(r.file,r.name)),c.addEventListener("mouseenter",()=>{h.style.filter="blur(0px) brightness(0.9)"}),c.addEventListener("mouseleave",()=>{h.style.filter="blur(1px) brightness(0.75)"})}else{const h=document.createElement("div");h.style.cssText=`
            width: 100%; height: 100%;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            gap: 8px;
          `,h.innerHTML=`
            <div style="font-size: clamp(24px,8vw,40px); opacity:0.35;">🔒</div>
            <div style="color:rgba(255,255,255,0.25); font-size:clamp(12px,3vw,16px); font-weight:700;">???</div>
          `,c.appendChild(h)}s.appendChild(c)}));const a=this.overlay.querySelector("#gallery-encourage");a&&(t>=i?(a.innerHTML=`
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
    `,a.textContent="Tap anywhere to close",i.appendChild(a),i.addEventListener("click",()=>i.remove()),document.body.appendChild(i)}hide(){this.overlay&&(this.overlay.style.display="none")}}const Gc=[16032353,15167313,2792847,2508371,15320170,11066076,16739179,7029286],R1=16767916,P1=40,Hc=8;function I1(o){const e=new Ge,t=new $({color:o}),i=new $({color:R1}),n=new $({color:o}),s=new B(new Ye(.3,.35,1.1,7),t);s.position.set(0,.55,0),e.add(s);const a=new B(new ft(.28,6,5),i);a.position.set(0,1.28,0),e.add(a);const r=new B(new Q(.15,.65,.15),t);r.position.set(-.45,.75,0),r.rotation.z=.15,e.add(r);const l=new B(new Q(.15,.65,.15),t);l.position.set(.45,.75,0),l.rotation.z=-.15,e.add(l);const c=new B(new Q(.18,.55,.18),n);c.position.set(-.18,0,.05),e.add(c);const h=new B(new Q(.18,.55,.18),n);return h.position.set(.18,0,-.05),e.add(h),{group:e,leftArm:r,rightArm:l,leftLeg:c,rightLeg:h}}class L1{constructor(e){_(this,"pedestrians",[]);_(this,"scene");this.scene=e,this._spawn()}_spawn(){const e=[];for(let i=-200;i<=200;i+=40)e.push(i);const t=i=>{const n=Gc[Math.floor(Math.random()*Gc.length)],{group:s,leftArm:a,rightArm:r,leftLeg:l,rightLeg:c}=I1(n),h=e[Math.floor(Math.random()*e.length)],u=Math.random()>.5?5:-5,d=h+u,f=[];for(let R=-240;R<240;R+=40)f.push(R);const g=f[Math.floor(Math.random()*f.length)],v=g+Hc/2,m=g+P1-Hc/2,p=v+Math.random()*(m-v),w=Math.random()>.5?1:-1,M=2+Math.random()*1.5,y={group:s,axis:i,roadPos:d,segStart:v,segEnd:m,pos:p,dir:w,speed:M,scattering:!1,scatterTimer:0,scatterDirX:0,scatterDirZ:0,walkCycle:Math.random()*Math.PI*2,leftArm:a,rightArm:r,leftLeg:l,rightLeg:c};this.pedestrians.push(y),this.scene.add(s),this._applyPosition(y),this._applyFacing(y)};for(let i=0;i<20;i++)t("x");for(let i=0;i<20;i++)t("z")}_applyPosition(e){e.axis==="x"?e.group.position.set(e.pos,0,e.roadPos):e.group.position.set(e.roadPos,0,e.pos)}_applyFacing(e){if(e.scattering){e.group.rotation.y=Math.atan2(e.scatterDirX,e.scatterDirZ);return}e.axis==="x"?e.group.rotation.y=e.dir===1?-Math.PI/2:Math.PI/2:e.group.rotation.y=e.dir===1?Math.PI:0}update(e,t,i){for(const n of this.pedestrians){const s=n.group.position.x,a=n.group.position.z,r=s-t,l=a-i,c=Math.sqrt(r*r+l*l);if(!n.scattering&&c<7){n.scattering=!0,n.scatterTimer=2.5;const d=Math.max(c,.01);n.scatterDirX=r/d,n.scatterDirZ=l/d}n.scattering?(n.group.position.x+=n.scatterDirX*12*e,n.group.position.z+=n.scatterDirZ*12*e,n.scatterTimer-=e,n.scatterTimer<=0&&(n.scattering=!1,n.axis==="x"?n.pos=Math.max(n.segStart,Math.min(n.segEnd,n.group.position.x)):n.pos=Math.max(n.segStart,Math.min(n.segEnd,n.group.position.z)),this._applyPosition(n))):(n.pos+=n.dir*n.speed*e,n.pos>=n.segEnd?(n.pos=n.segEnd,n.dir=-1):n.pos<=n.segStart&&(n.pos=n.segStart,n.dir=1),this._applyPosition(n)),this._applyFacing(n);const h=n.scattering?12:n.speed;n.walkCycle+=h*e*2;const u=Math.sin(n.walkCycle);n.leftArm.rotation.z=u*.4+.15,n.rightArm.rotation.z=-u*.4-.15,n.leftLeg.rotation.x=u*.5,n.rightLeg.rotation.x=-u*.5}}}const Ri=class Ri{constructor(e){_(this,"indicator");_(this,"scene");_(this,"lastVisit",-30);this.scene=e,this.indicator=new B(new ft(1.5,10,8),new $({color:13918762,emissive:new we(10498064),emissiveIntensity:.8})),this.indicator.position.set(Ri.POS.x,10,Ri.POS.z),this.scene.add(this.indicator)}update(e){this.indicator.position.y=10+Math.sin(Date.now()*.002)*.5,this.indicator.rotation.y+=e*1.5}isNearby(e,t){const i=e-Ri.POS.x,n=t-Ri.POS.z;return Math.sqrt(i*i+n*n)<Ri.TRIGGER_RADIUS}tryVisit(e,t){if(!this.isNearby(e,t))return!1;const i=Date.now()/1e3;return i-this.lastVisit<20?!1:(this.lastVisit=i,!0)}};_(Ri,"POS",{x:-60,z:-100}),_(Ri,"TRIGGER_RADIUS",12);let Rr=Ri;class D1{constructor(){_(this,"level",0);_(this,"isUrgent",!1);_(this,"lastUrgentToast",0);_(this,"caffeinated",!1);_(this,"caffeineTimer",0)}update(e,t){this.caffeinated&&(this.caffeineTimer-=e,this.caffeineTimer<=0&&(this.caffeinated=!1));const i=this.caffeinated?.018:.012;Math.abs(t)>2?this.level=Math.min(1,this.level+e*i):this.level=Math.max(0,this.level-e*.005),this.isUrgent=this.level>.8}drinkCoffee(){this.level=Math.min(1,this.level+.4),this.caffeinated=!0,this.caffeineTimer=30,this.isUrgent=this.level>.8}tryRelief(e,t){const i=e-100,n=t-60;return Math.sqrt(i*i+n*n)>14||this.level===0?!1:(this.level=0,this.isUrgent=!1,this.caffeinated=!1,this.caffeineTimer=0,!0)}get spillMultiplier(){return this.isUrgent?1.8:1}}const bs={x:30,z:28},Vc=["Got a dollar, mate? 💸","You got a light? 🚬","Nice van. Does it leak?","My brother Jarrad says I'm not qualified. He's right but I don't like it.","These boots were not made for plastering. Yet here we are.","Jump in? No seriously, I need a lift.","Jarrad says he's read the TDS. He hasn't. I've lived with him.","You look like you need a coffee and a toilet. In that order.","Phil owes me fifty bucks. Pass it on.","I plastered that wall. Don't tell Jarrad.","Matt left the primer lid off again. Just letting you know."],Ps=class Ps{constructor(e){_(this,"wrapper");_(this,"character");_(this,"ropeRing");_(this,"ropePivot");_(this,"lastDialogue",0);_(this,"cooldown",9e3);this.character=new ts(Fi.Mikayla),this.character.group.scale.set(2,2,2);const t=this.character.buildJumpRopeClip();this.character.mixer.stopAllAction(),this.character.mixer.clipAction(t).play(),this.ropePivot=new Ge,this.ropePivot.position.set(0,1.3,0),this.ropePivot.rotation.y=Math.PI/2,this.character.group.add(this.ropePivot),this.ropeRing=new B(new Wo(1.35,.05,7,28),new $({color:8079902})),this.ropePivot.add(this.ropeRing);const i=this._makeNameBoard();i.position.set(0,8.8,0);const n=new B(new Ki(1.2,1.7,32),new zt({color:14501e3,side:Ut}));n.rotation.x=-Math.PI/2,n.position.y=.05,this.wrapper=new Ge,this.wrapper.add(this.character.group),this.wrapper.add(i),this.wrapper.add(n),this.wrapper.position.set(bs.x,0,bs.z),e.add(this.wrapper)}_makeNameBoard(){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d");t.fillStyle="rgba(190, 40, 90, 0.88)",t.roundRect?t.roundRect(2,2,252,60,8):t.rect(2,2,252,60),t.fill(),t.fillStyle="#fff",t.font="bold 30px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("MIKAYLA",128,32);const i=new zs(e);return new B(new mt(2.4,.6),new zt({map:i,transparent:!0,depthWrite:!1}))}update(e,t,i,n){this.character.update(e),this.ropeRing.rotation.z+=e*(2*Math.PI/Gh);const s=t-bs.x,a=i-bs.z;this.character.group.rotation.y=Math.atan2(s,a);const r=Math.sqrt(s*s+a*a),l=Date.now();if(r<Ps.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=Vc[Math.floor(Math.random()*Vc.length)];return n.show(Fi.Mikayla,c),this.lastDialogue=l,!0}return!1}dispose(e){e.remove(this.wrapper)}};_(Ps,"POS",bs),_(Ps,"TRIGGER_RADIUS",15);let pn=Ps;const ws={x:-4,z:-6},Wc=["Ha ha ha HA HA! You picked up ze buckets! Love it!","I mix ze plaster by hand. Za gloves are for ze weak.","In Germany, zis would be a warm-up. But I like Australia. Ze mud here is good.","I have mud wrestled ze entire Brunswick football club. Zey lost. Badly.","Ze mixing ratio is one part water, two parts product, one part pure power.","Last Saturday I wrestled a man twice my size. Sunday I mixed 50 buckets. Your turn.","Don't let ze hair fool you. I once arm wrestled Phil. He is still talking about it.","Ha HA! You are funny. Not as funny as ze last guy. But funny."],Is=class Is{constructor(e){_(this,"wrapper");_(this,"character");_(this,"lastDialogue",0);_(this,"cooldown",1e4);_(this,"audioCtx",null);this.character=new ts(Fi.Connie),this.character.group.scale.set(2,2.35,2);const t=new $({color:15789544}),i=new B(new ft(.16,8,6),t);i.position.set(-.12,1.55,.19);const n=new B(new ft(.16,8,6),t);n.position.set(.12,1.55,.19),this.character.group.add(i),this.character.group.add(n),this.character.setLogoTexture(Uh(Fi.Connie.shirtColor));const s=this._makeNameBoard();s.position.set(0,8.8,0);const a=new B(new Ki(1.2,1.7,32),new zt({color:16109664,side:Ut}));a.rotation.x=-Math.PI/2,a.position.y=.05,this.wrapper=new Ge,this.wrapper.add(this.character.group),this.wrapper.add(s),this.wrapper.add(a),this.wrapper.position.set(ws.x,0,ws.z),e.add(this.wrapper)}_makeNameBoard(){const e=document.createElement("canvas");e.width=256,e.height=64;const t=e.getContext("2d");return t.fillStyle="rgba(200, 150, 20, 0.88)",t.roundRect?t.roundRect(2,2,252,60,8):t.rect(2,2,252,60),t.fill(),t.fillStyle="#fff",t.font="bold 30px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("CONNIE",128,32),new B(new mt(2.4,.6),new zt({map:new zs(e),transparent:!0,depthWrite:!1}))}playLaugh(){try{this.audioCtx||(this.audioCtx=new(window.AudioContext||window.webkitAudioContext));const e=this.audioCtx,t=7;for(let i=0;i<t;i++){const n=e.currentTime+i*.16,s=e.createOscillator(),a=e.createGain(),r=480+i*18+Math.random()*60;s.frequency.setValueAtTime(r,n),s.frequency.exponentialRampToValueAtTime(r*.48,n+.13),a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(.35,n+.03),a.gain.exponentialRampToValueAtTime(.001,n+.15),s.connect(a),a.connect(e.destination),s.start(n),s.stop(n+.17)}}catch{}}update(e,t,i,n){this.character.update(e);const s=t-ws.x,a=i-ws.z;this.character.group.rotation.y=Math.atan2(s,a);const r=Math.sqrt(s*s+a*a),l=Date.now();if(r<Is.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=Wc[Math.floor(Math.random()*Wc.length)];return n.show(Fi.Connie,c),this.lastDialogue=l,!0}return!1}dispose(e){var t;e.remove(this.wrapper),(t=this.audioCtx)==null||t.close()}};_(Is,"POS",ws),_(Is,"TRIGGER_RADIUS",16);let Rs=Is;const B1={Connie:{scale:[2,2.35,2],addGeometry:o=>{const e=new $({color:15789544}),t=new B(new ft(.16,8,6),e);t.position.set(-.12,1.55,.19);const i=new B(new ft(.16,8,6),e);i.position.set(.12,1.55,.19),o.add(t),o.add(i)}},Mikayla:{scale:[1.9,1.9,1.9]}};class F1{constructor(){_(this,"renderer");_(this,"scene");_(this,"camera");_(this,"canvas");_(this,"cache",new Map);this.canvas=document.createElement("canvas"),this.canvas.width=160,this.canvas.height=160,this.renderer=new Wr({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(160,160),this.renderer.setClearColor(0,0),this.scene=new Xr;const e=new $r(16777215,.7);this.scene.add(e);const t=new Qn(16774624,1);t.position.set(2,4,5),this.scene.add(t);const i=new Qn(14741759,.4);i.position.set(-3,2,3),this.scene.add(i),this.camera=new Nt(38,1,.1,100),this.camera.position.set(1.2,5,5.5),this.camera.lookAt(.1,3.8,0)}renderPortrait(e){var c;if(this.cache.has(e.name))return this.cache.get(e.name);this.scene.children.filter(h=>!(h instanceof Gs)).forEach(h=>this.scene.remove(h));const i=B1[e.name],n=new ts(e),[s,a,r]=(i==null?void 0:i.scale)??[2,2,2];n.group.scale.set(s,a,r),n.group.rotation.y=-Math.PI*.18,(c=i==null?void 0:i.addGeometry)==null||c.call(i,n.group),this.scene.add(n.group),this.renderer.render(this.scene,this.camera);const l=this.canvas.toDataURL("image/png");return this.cache.set(e.name,l),this.scene.remove(n.group),l}dispose(){this.renderer.dispose()}}class k1{constructor(){_(this,"container");_(this,"portrait");_(this,"nameEl");_(this,"textEl");_(this,"portraitRenderer");_(this,"hideTimeout",null);_(this,"visible",!1);this.portraitRenderer=new F1,this._injectStyles(),this._buildDOM()}_injectStyles(){if(document.getElementById("speech-bubble-styles"))return;const e=document.createElement("style");e.id="speech-bubble-styles",e.textContent=`
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
    `,document.head.appendChild(e)}_buildDOM(){this.container=document.createElement("div"),this.container.id="tem-speech-bubble";const e=document.createElement("div");e.className="sb-portrait-wrap",this.portrait=document.createElement("img"),this.portrait.className="sb-portrait-img",e.appendChild(this.portrait);const t=document.createElement("div");t.className="sb-text-area",this.nameEl=document.createElement("span"),this.nameEl.className="sb-name",this.textEl=document.createElement("span"),this.textEl.className="sb-text",t.appendChild(this.nameEl),t.appendChild(this.textEl),this.container.appendChild(e),this.container.appendChild(t),document.body.appendChild(this.container)}show(e,t){this.nameEl.textContent=e.name,this.textEl.textContent=t,this.portrait.src=this.portraitRenderer.renderPortrait(e),this.container.style.display="flex",requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.container.classList.add("sb-visible")})}),this.visible=!0,this.hideTimeout!==null&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(()=>this.hide(),1e4)}setScreenPosition(e,t){this.container.style.left=`${e}px`,this.container.style.top=`${t}px`}hide(){this.container.classList.remove("sb-visible"),this.visible=!1,setTimeout(()=>{this.visible||(this.container.style.display="none")},220)}isVisible(){return this.visible}dispose(){this.portraitRenderer.dispose(),document.body.removeChild(this.container)}}const Ms=15;class N1{constructor(){_(this,"overlay");_(this,"titleEl");_(this,"bodyEl");_(this,"sloganEl");_(this,"hintEl");_(this,"progressBar");_(this,"_active",!1);_(this,"_readyToResume",!1);_(this,"_resumeCallback",null);_(this,"_lockTimer",null);_(this,"_countdownInterval",null);_(this,"_autoTimer",null);_(this,"_secondsLeft",Ms);if(!document.getElementById("dp-styles")){const r=document.createElement("style");r.id="dp-styles",r.textContent=`
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
    `,a.textContent="▶  TAP GAS or REV to skip",t.appendChild(this.titleEl),t.appendChild(i),s.appendChild(this.bodyEl),e.appendChild(t),e.appendChild(n),e.appendChild(s),e.appendChild(this.sloganEl),e.appendChild(a),this.overlay.appendChild(e),document.body.appendChild(this.overlay),this.overlay.addEventListener("touchstart",r=>{r.preventDefault(),this.tryResume()},{passive:!1}),this.overlay.addEventListener("click",()=>this.tryResume())}show(e,t,i,n,s){this._clearTimers(),this._active=!0,this._readyToResume=!1,this._resumeCallback=i,this._secondsLeft=Ms,this.titleEl.textContent=e,this.bodyEl.textContent=t,this.sloganEl.textContent=n??"",this.sloganEl.style.display=n?"block":"none",this.hintEl.textContent=String(Ms),this.overlay.style.display="flex",this.progressBar.style.transition="none",this.progressBar.style.width="100%",this.progressBar.offsetWidth,this.progressBar.style.transition=`width ${Ms}s linear`,this.progressBar.style.width="0%",this._lockTimer=setTimeout(()=>{this._readyToResume=!0},380),this._countdownInterval=setInterval(()=>{this._secondsLeft=Math.max(0,this._secondsLeft-1),this.hintEl.textContent=String(this._secondsLeft)},1e3),this._autoTimer=setTimeout(()=>{this._forceResume()},Ms*1e3)}tryResume(){!this._active||!this._readyToResume||this._doResume()}_forceResume(){this._active&&this._doResume()}_doResume(){this._active=!1,this._readyToResume=!1,this.overlay.style.display="none",this._clearTimers();const e=this._resumeCallback;this._resumeCallback=null,e==null||e()}_clearTimers(){this._lockTimer&&(clearTimeout(this._lockTimer),this._lockTimer=null),this._autoTimer&&(clearTimeout(this._autoTimer),this._autoTimer=null),this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}get isActive(){return this._active}}const Pa=[`Our finishes don't copy the earth.
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
The van remembers nothing. Drive carefully.`],U1=["One wall. One chance. The render decides everything.","A surface waiting to become something real.","From bare substrate to finished art — this is the job.",`The craft doesn't care about the deadline.
You do. Get there.`,"Clients don't buy plaster. They buy the moment the wall changes everything.",`Not every wall gets a second coat.
This one does. Make it count.`,"The difference between ordinary and extraordinary is one hand-applied layer.","Somewhere between the bucket and the wall, something real happens.",`They called TEM because they want it done right.
Don't prove them wrong.`,"This isn't a wall. It's a surface waiting to breathe."];function ln(o){return o[Math.floor(Math.random()*o.length)]}const ri="./",Wt={theme:`${ri}audio/theme.aac`,theme2:`${ri}audio/theme2.aac`,credits:`${ri}audio/credits.m4a`,radio1:`${ri}audio/radio1.m4a`,radio2:`${ri}audio/radio2.m4a`,radio3:`${ri}audio/radio3.m4a`,radio4:`${ri}audio/theme.m4a`,radio5:`${ri}audio/radio5.m4a`,radio6:`${ri}audio/radio6.aac`,radio7:`${ri}audio/radio7.aac`,radio8:`${ri}audio/radio8.m4a`},cn=[{id:"tem-fm",name:"TEM FM",freq:"88.3",tagline:"Melbourne's Most Refined",songs:["★ Troweled Earth (The Anthem) [LIVE]","Fresh Plaster Dreams","Tadelakt Sunrise","Ochre & Ochre","Marbellino Midnight","Render Slowly (feat. Phil)"],dj:["TEM FM — opening tonight with the anthem. Turn it up.","That was Troweled Earth — The Anthem. Written on site, finished in the van.","You're listening to TEM FM. Don't spill.","Smooth surfaces. Smoother sounds. TEM FM 88.3.","That was a certified classic. Like a three-coat stucco system.","Blood red clay to concrete's cold embrace... TEM FM."],bpm:68,rootHz:220,vibe:"ambient",color:"#C8A86A",audioFile:Wt.theme},{id:"connie-gold",name:"CONNIE'S GOLD",freq:"103.7",tagline:"For the Craft, Darling",songs:["Quando Quando Quando (In the Van)","Bella Ciao Bella Render","Volare Trowel","Arrivederci Deadline","O Sole Mio Stucco"],dj:["Ehhhh — welcome to Connie's Gold! Ha ha ha ha!","You're listening to the best station. Connie said so. She's right.","Connie's Gold 103.7 — music to plaster by, darling.","Next up: another classic. Just like our Antique Stucco. Ha!"],bpm:92,rootHz:261.63,vibe:"italian",color:"#E8A050",audioFile:Wt.radio1},{id:"brunswick-beats",name:"BRUNSWICK BEATS",freq:"99.9",tagline:"Lo-Fi for Lo-Fi People",songs:["study playlist #47","plaster & chill","waiting for jarrad (again)","lost my trowel","bladder full, waypoint far"],dj:["Brunswick Beats. For people who get it.","That was a vibe. This is also a vibe. 99.9.","We don't talk. We just play the music. Brunswick Beats.","Jarrad submitted this playlist. He says it slaps. It does."],bpm:80,rootHz:196,vibe:"lofi",color:"#8B9EC8",audioFile:Wt.radio2},{id:"the-scaffold",name:"THE SCAFFOLD",freq:"107.1",tagline:"Tune In, Fall Off",songs:["30% Penalty (Acoustic)","Epstein Was Right (Radio Edit)","Topknot Thunder","Hard Hat? Never Heard of Her","Five Floors No Fear"],dj:["THE SCAFFOLD. 107.1. You WILL survive the jump.","That riff goes harder than Tsuyoshi vaulting the van door.","Tune in. Fall off. THE SCAFFOLD.","Jarrad called in. Said he's been waiting fifteen minutes. Legend."],bpm:140,rootHz:164.81,vibe:"rock",color:"#C1666B",audioFile:Wt.radio4},{id:"fabio-pizza",name:"FABIO'S PIZZA RADIO",freq:"92.5",tagline:"Music for Real Men",songs:['Ehhhh (12" Extended Mix)',"San Marzano Morning","La Dolce Trowel","One Slice, Two Slice","Thin Base, Wood Fire (feat. Fabio)"],dj:["Fabio's Pizza Radio — ehhhh. That is all.","You're listening to 92.5. The pizza is coming. Be patient. Ehhhh.","That song — like a perfect margherita. Simple. Honest. Ehhhh.","Fabio's Pizza Radio. For men with trowels and good taste."],bpm:108,rootHz:246.94,vibe:"italian",color:"#D4602A",audioFile:Wt.radio3},{id:"jarrad-fm",name:"JARRAD FM",freq:"105.9",tagline:"He's Running Late But He's Here",songs:["★ Five Floors No Fear [Radio Cut]","Topknot Thunder","Scaffold or Die","Left My Phone on Level 4","Running Late (Again)"],dj:["Jarrad FM 105.9 — yeah nah yeah nah yeah.","That was Jarrad. He submitted it from the scaffold. Mid-climb.","105.9 — for the ones who take the stairs AND the poles.","Jarrad called in. Said he's almost there. That was 40 minutes ago."],bpm:128,rootHz:174.61,vibe:"rock",color:"#E8A830",audioFile:Wt.radio8},{id:"tsuyoshi-fm",name:"TSUYOSHI FM",freq:"104.5",tagline:"Precision. Focus. Plaster.",songs:["★ Five Coat Finish [Live Session]","Venetian Nights","Tadelakt & Silence","The Quiet Climb","Zero Defects (feat. Tsuyoshi)"],dj:["Tsuyoshi FM 104.5 — play it perfectly or don't play it.","That was flawless. Like Tsuyoshi's tadelakt. 104.5.","No mistakes. No shortcuts. Tsuyoshi FM.","You are listening to the most precise station in Melbourne."],bpm:76,rootHz:220,vibe:"lofi",color:"#78C8A8",audioFile:Wt.radio7},{id:"warlord-sessions",name:"WARLORD SESSIONS",freq:"101.5",tagline:"Deep Cuts from the Site",songs:["★ The Warlord Method [Extended Mix]","Forty Coats, One Wall","Blood Red Clay (Long Version)","Marbellino Deep Session","The Matt Maloy Experience"],dj:["Warlord Sessions 101.5 — long-form. No fillers.","You're in deep now. Warlord Sessions.","Matt approved this personally. Says it captures the vibe.","101.5 — for the ones who stay on site after dark."],bpm:72,rootHz:207.65,vibe:"ambient",color:"#A07840",audioFile:Wt.radio6},{id:"joses-mix",name:"JOSE'S MIX",freq:"96.1",tagline:"From the Van. For the Van.",songs:["★ Late Night Render [LIVE]","BTC Stack (Instrumental)","Marbellino Midnight Run","Van Life Vol. II","Gold Sky Reprise"],dj:["Jose's Mix 96.1 — playing what Jose wants, when Jose wants.","You're listening to the only station that matters. 96.1.","That was a banger. Jose approved it personally.","No requests. Jose already chose the perfect song."],bpm:95,rootHz:233.08,vibe:"electronic",color:"#FFD700",audioFile:Wt.radio5},{id:"tem-talk",name:"TEM TALK",freq:"91.1",tagline:"Conversations From the Site",songs:["★ The Troweled Earth Podcast [LIVE]","Deep Dive: Blood Red Clay vs Venetian","Interview: Matt on the Warlord Method","Ask Connie — Running a Crew in Melbourne","Five Years of Tadelakt with Tsuyoshi"],dj:["TEM Talk 91.1 — real conversations from the trade.","You're listening to Melbourne's only plastering podcast. TEM Talk.","That was a conversation worth replaying. 91.1 FM.","Next up: more from the TEM crew. Stick around."],bpm:70,rootHz:180,vibe:"ambient",color:"#90B0C0",audioFile:Wt.theme2}];class O1{constructor(){_(this,"ctx",null);_(this,"masterGain");_(this,"scheduleAhead",.1);_(this,"scheduleInterval",.05);_(this,"nextBeatTime",0);_(this,"beatCount",0);_(this,"currentStation",null);_(this,"nodes",[]);_(this,"schedulerTimer",0);_(this,"compressor");_(this,"realAudioEl",null);_(this,"realAudioActive",!1)}init(){try{return this.ctx=new(window.AudioContext||window.webkitAudioContext),this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-18,this.compressor.ratio.value=4,this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=.18,this.masterGain.connect(this.compressor),this.compressor.connect(this.ctx.destination),!0}catch{return!1}}setVolume(e){this.masterGain&&(this.masterGain.gain.value=e),this.realAudioEl&&(this.realAudioEl.volume=Math.min(1,e*4))}play(e){var t;if(this.stop(),this.currentStation=e,this.beatCount=0,e.audioFile){const i=Math.min(1,(((t=this.masterGain)==null?void 0:t.gain.value)??.18)*4.5),n=new Audio;n.src=e.audioFile,n.loop=!0,n.volume=i;const s=n.play();s!==void 0?s.then(()=>{this.realAudioEl=n,this.realAudioActive=!0}).catch(()=>{this.realAudioActive=!1,this._startGenerative()}):(this.realAudioEl=n,this.realAudioActive=!0)}else this._startGenerative()}_startGenerative(){!this.ctx||!this.currentStation||(this.ctx.state==="suspended"&&this.ctx.resume(),this.nextBeatTime=this.ctx.currentTime+.05,this.schedulerTimer=window.setInterval(()=>this._schedule(),this.scheduleInterval*1e3))}stop(){clearInterval(this.schedulerTimer),this.nodes.forEach(e=>{var t;try{(t=e.stop)==null||t.call(e),e.disconnect()}catch{}}),this.nodes=[],this.currentStation=null,this.realAudioEl&&(this.realAudioEl.pause(),this.realAudioEl.src="",this.realAudioEl=null),this.realAudioActive=!1}_schedule(){if(!this.ctx||!this.currentStation)return;const e=this.ctx.currentTime+this.scheduleAhead;for(;this.nextBeatTime<e;){this._scheduleBeat(this.nextBeatTime,this.beatCount,this.currentStation);const t=this.currentStation.bpm/60;this.nextBeatTime+=1/t,this.beatCount++}}_scheduleBeat(e,t,i){const n=Math.floor(t/4),s=t%4,a=i.rootHz;switch(i.vibe){case"ambient":this._ambientBeat(e,t,a);break;case"lofi":this._lofiBeat(e,s,a);break;case"rock":this._rockBeat(e,s,n,a);break;case"italian":this._italianBeat(e,s,n,a);break;case"electronic":this._electronicBeat(e,s,a);break}}_ambientBeat(e,t,i){if(this.ctx&&(t%4===0&&[i,i*1.25,i*1.5,i*2].forEach((s,a)=>{const r=this.ctx.createOscillator(),l=this.ctx.createGain(),c=this.ctx.createBiquadFilter();r.type="sine",r.frequency.value=s*.5,c.type="lowpass",c.frequency.value=800,l.gain.setValueAtTime(0,e),l.gain.linearRampToValueAtTime(.06-a*.01,e+.4),l.gain.linearRampToValueAtTime(0,e+3.5),r.connect(c),c.connect(l),l.connect(this.masterGain),r.start(e),r.stop(e+4),this.nodes.push(r,l)}),t%8===5)){const n=this.ctx.createOscillator(),s=this.ctx.createGain();n.type="triangle",n.frequency.value=i*4,s.gain.setValueAtTime(.04,e),s.gain.exponentialRampToValueAtTime(.001,e+.8),n.connect(s),s.connect(this.masterGain),n.start(e),n.stop(e+.9),this.nodes.push(n,s)}}_lofiBeat(e,t,i){if(!this.ctx)return;(t===0||t===2)&&this._kick(e,i*.5),(t===1||t===3)&&this._snare(e,.04),this._hihat(e,.025);const n=[i*.5,i*.5,i*.5*.75,i*.5*.9];this._bass(e,n[t],.25)}_rockBeat(e,t,i,n){if(!this.ctx)return;(t===0||t===2)&&this._kick(e,n*.4),(t===1||t===3)&&this._snare(e,.07),this._hihat(e,.05);const s=[n*.5,n*.5,n*.5*.8,n*.5];this._distBass(e,s[t%4]),t===0&&i%2===0&&[n,n*1.5,n*2].forEach(a=>{const r=this.ctx.createOscillator(),l=this.ctx.createGain();r.type="sawtooth",r.frequency.value=a,l.gain.setValueAtTime(.035,e),l.gain.linearRampToValueAtTime(0,e+.5),r.connect(l),l.connect(this.masterGain),r.start(e),r.stop(e+.55),this.nodes.push(r,l)})}_italianBeat(e,t,i,n){if(this.ctx&&(t===0&&this._bass(e,n*.5,.3),(t===1||t===2||t===3)&&this._bass(e,n*.75,.12),t===0&&this._kick(e,n*.5),t===0||t===2)){const s=[n,n*1.122,n*1.26,n*1.498,n*1.682],a=s[i%s.length],r=this.ctx.createOscillator(),l=this.ctx.createGain();r.type="triangle",r.frequency.value=a;const c=this.ctx.createOscillator(),h=this.ctx.createGain();c.frequency.value=5.5,h.gain.value=3,c.connect(h),h.connect(r.frequency),l.gain.setValueAtTime(.04,e),l.gain.linearRampToValueAtTime(0,e+.8),r.connect(l),l.connect(this.masterGain),c.start(e),r.start(e),c.stop(e+.9),r.stop(e+.9),this.nodes.push(r,c,l,h)}}_electronicBeat(e,t,i){this.ctx&&((t===0||t===2)&&this._kick(e,i*.5),(t===1||t===3)&&this._snare(e,.05),this._hihat(e,.03),t===0&&this._bass(e,i*.5,.25),t===2&&this._bass(e,i*.375,.2))}_kick(e,t){if(!this.ctx)return;const i=this.ctx.createOscillator(),n=this.ctx.createGain();i.frequency.setValueAtTime(t,e),i.frequency.exponentialRampToValueAtTime(20,e+.12),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.25),i.connect(n),n.connect(this.masterGain),i.start(e),i.stop(e+.3),this.nodes.push(i,n)}_snare(e,t){if(!this.ctx)return;const i=Math.floor(this.ctx.sampleRate*.18),n=this.ctx.createBuffer(1,i,this.ctx.sampleRate),s=n.getChannelData(0);for(let c=0;c<i;c++)s[c]=Math.random()*2-1;const a=this.ctx.createBufferSource();a.buffer=n;const r=this.ctx.createBiquadFilter();r.type="bandpass",r.frequency.value=1800,r.Q.value=.8;const l=this.ctx.createGain();l.gain.setValueAtTime(t,e),l.gain.exponentialRampToValueAtTime(.001,e+.18),a.connect(r),r.connect(l),l.connect(this.masterGain),a.start(e),a.stop(e+.2),this.nodes.push(a,l)}_hihat(e,t){if(!this.ctx)return;const i=Math.floor(this.ctx.sampleRate*.06),n=this.ctx.createBuffer(1,i,this.ctx.sampleRate),s=n.getChannelData(0);for(let c=0;c<i;c++)s[c]=Math.random()*2-1;const a=this.ctx.createBufferSource();a.buffer=n;const r=this.ctx.createBiquadFilter();r.type="highpass",r.frequency.value=7e3;const l=this.ctx.createGain();l.gain.setValueAtTime(t,e),l.gain.exponentialRampToValueAtTime(.001,e+.06),a.connect(r),r.connect(l),l.connect(this.masterGain),a.start(e),a.stop(e+.08),this.nodes.push(a,l)}_bass(e,t,i){if(!this.ctx)return;const n=this.ctx.createOscillator(),s=this.ctx.createBiquadFilter(),a=this.ctx.createGain();n.type="sawtooth",n.frequency.value=t,s.type="lowpass",s.frequency.value=350,a.gain.setValueAtTime(i,e),a.gain.exponentialRampToValueAtTime(.001,e+.35),n.connect(s),s.connect(a),a.connect(this.masterGain),n.start(e),n.stop(e+.4),this.nodes.push(n,a)}_distBass(e,t){if(!this.ctx)return;const i=this.ctx.createOscillator(),n=this.ctx.createWaveShaper(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.value=t;const a=new Float32Array(256);for(let r=0;r<256;r++){const l=r*2/256-1;a[r]=Math.max(-.6,Math.min(.6,l*3))}n.curve=a,s.gain.setValueAtTime(.08,e),s.gain.exponentialRampToValueAtTime(.001,e+.3),i.connect(n),n.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+.35),this.nodes.push(i,s)}}class z1{constructor(){_(this,"container");_(this,"stationIdx",0);_(this,"on",!1);_(this,"songIdx",0);_(this,"djIdx",0);_(this,"songTimer",0);_(this,"djTimer",0);_(this,"nameEl");_(this,"songEl");_(this,"djEl");_(this,"iconEl");_(this,"freqEl");_(this,"engine",new O1);_(this,"engineReady",!1);_(this,"volumeSlider");_(this,"rafId",0);_(this,"lastUpdateTs",0);_(this,"_volOpen",!1);this._buildUI(),this.lastUpdateTs=performance.now(),this._tick()}_buildUI(){this.container=document.createElement("div"),this.container.style.cssText=`
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
    `,this.freqEl=document.createElement("span"),this.freqEl.style.cssText="color: rgba(200,168,106,0.5); font-size: 9px; letter-spacing: 0.5px;",i.appendChild(this.nameEl),i.appendChild(this.freqEl);const n=document.createElement("span");n.textContent="▶",n.style.cssText="color:rgba(200,168,106,0.8); font-size:12px; cursor:pointer; padding:0 2px; line-height:1;",n.addEventListener("click",()=>this._changeStation(1));const s=document.createElement("span");s.textContent="🔊",s.title="Volume",s.style.cssText="font-size:14px; cursor:pointer; opacity:0.8; line-height:1; padding:0 1px;",s.addEventListener("click",h=>{h.stopPropagation(),this._volOpen=!this._volOpen,r.style.display=this._volOpen?"flex":"none"});const a=document.createElement("span");a.textContent="⏻",a.title=this.on?"Turn Off":"Turn On",a.style.cssText=`
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
    `,this.volumeSlider.addEventListener("input",()=>{const h=Number(this.volumeSlider.value)/100;this.engine.setVolume(h*.18),l.textContent=h===0?"🔇":h<.4?"🔈":"🔊"});const c=document.createElement("span");c.style.cssText="color:rgba(200,168,106,0.6); font-size:9px; min-width:22px; text-align:right;",this.volumeSlider.addEventListener("input",()=>{c.textContent=this.volumeSlider.value+"%"}),c.textContent="55%",r.appendChild(l),r.appendChild(this.volumeSlider),r.appendChild(c),this.songEl=document.createElement("div"),this.songEl.style.cssText=`
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
    `,this.container.appendChild(e),this.container.appendChild(r),this.container.appendChild(this.songEl),this.container.appendChild(this.djEl),this._renderStation()}getEl(){return this.container}_renderStation(){const e=cn[this.stationIdx];this.nameEl.textContent=e.name,this.nameEl.style.color=e.color,this.freqEl.textContent=`${e.freq} FM`,this.songEl.textContent=this.on?`♫  ${e.songs[this.songIdx%e.songs.length]}`:"— OFF —",this.iconEl.style.opacity=this.on?"1":"0.55"}_togglePower(){this.engineReady||(this.engineReady=this.engine.init()),this.on=!this.on,this.on?(this.engine.play(cn[this.stationIdx]),this._showDJ()):this.engine.stop(),this._renderStation()}_changeStation(e){this.stationIdx=(this.stationIdx+e+cn.length)%cn.length,this.songIdx=0,this.songTimer=0,this.on&&(this.engineReady||(this.engineReady=this.engine.init()),this.engine.play(cn[this.stationIdx]),this._showDJ()),this._renderStation()}_showDJ(){const e=cn[this.stationIdx],t=e.dj[this.djIdx%e.dj.length];this.djEl.textContent=`"${t}"`,this.djEl.style.opacity="1",setTimeout(()=>{this.djEl.style.opacity="0"},4500),this.djIdx++}_tick(){const e=performance.now(),t=(e-this.lastUpdateTs)/1e3;if(this.lastUpdateTs=e,this.on){cn[this.stationIdx];const i=45+this.songIdx%3*10;this.songTimer+=t,this.songTimer>=i&&(this.songTimer=0,this.songIdx++,this._renderStation()),this.djTimer+=t,this.djTimer>=30&&(this.djTimer=0,this._showDJ())}this.rafId=requestAnimationFrame(()=>this._tick())}setVisible(e){this.container.style.opacity=e?"1":"0",this.container.style.pointerEvents=e?"auto":"none"}destroy(){cancelAnimationFrame(this.rafId),this.engine.stop(),this.container.remove()}}const G1="./",yo=`${G1}tem-logo-white.jpg`,_o=[{id:"melbourne",name:"TROWELED EARTH MELBOURNE",role:"presents",line:"",accentColor:"#C8A86A",skyTop:"#040810",skyBot:"#102040",particleColor:"#C8A86A",particleKind:"dust",buildingTint:"#182840",spotColor:"#C8A86A33",voiceChar:"Narrator"},{id:"matt",name:"MATT",role:"The Warlord · Lead Plasterer",line:"I can be any type of Matt, but I prefer the Diplomatt!",accentColor:"#FF3355",skyTop:"#8A0010",skyBot:"#CC0030",particleColor:"#FF5070",particleKind:"sparks",buildingTint:"#440010",spotColor:"#FF335555",voiceChar:"Matt"},{id:"tsuyoshi",name:"TSUYOSHI",role:"The Samurai · Tadelakt Specialist",line:"I no like bug. Where is... da respect!",accentColor:"#00DD88",skyTop:"#005530",skyBot:"#009958",particleColor:"#60FFB0",particleKind:"dust",buildingTint:"#003322",spotColor:"#00DD8855",voiceChar:"Tsuyoshi"},{id:"connie",name:"CONNIE",role:"Operations Queen · Born in Germany",line:"I'll crush all of you!!! Hahahahahaha!",accentColor:"#FFB030",skyTop:"#884400",skyBot:"#CC7700",particleColor:"#FFD060",particleKind:"smoke",buildingTint:"#442200",spotColor:"#FFB03055",voiceChar:"Connie"},{id:"jarrad",name:"JARRAD",role:"Scaffold Specialist · Topknot Philosopher",line:"My plan is convince everyone I have a plan, tho I do not.... Did you get any of that?",accentColor:"#8866FF",skyTop:"#220066",skyBot:"#4400AA",particleColor:"#AA88FF",particleKind:"dust",buildingTint:"#110033",spotColor:"#8866FF55",voiceChar:"Jarrad"},{id:"fabio",name:"FABIO",role:"Plasterer · Pizza Consultant",line:"Come, we can have pizza. Andiamo, fa presto!",accentColor:"#FF7722",skyTop:"#883300",skyBot:"#CC5500",particleColor:"#FFAa40",particleKind:"smoke",buildingTint:"#441A00",spotColor:"#FF772255",voiceChar:"Fabio"},{id:"joe",name:"JOE",role:"The Wildcard · Knows Too Much",line:"Y'all seen that Epstein list? So many chosen people! And Trump!",accentColor:"#F0C000",skyTop:"#3A3000",skyBot:"#887700",particleColor:"#FFE040",particleKind:"sparks",buildingTint:"#1A1600",spotColor:"#F0C00055",voiceChar:"Joe"},{id:"phil",name:"PHIL",role:"The Quiet Legend · Renders",line:"I get asked to 'fill me crack in?' I don't get it...",accentColor:"#44CCCC",skyTop:"#004444",skyBot:"#007777",particleColor:"#88FFFF",particleKind:"dust",buildingTint:"#002222",spotColor:"#44CCCC55",voiceChar:"Phil"},{id:"jose",name:"JOSE GARCIA",role:"THE HEART OF TROWELED EARTH · El Maestro",line:"Some people call me Wall Jesus... They're not wrong.",accentColor:"#FFD700",skyTop:"#1A0040",skyBot:"#FF8C00",particleColor:"#FFD700",particleKind:"sparks",buildingTint:"#1A0020",spotColor:"#FFD70066",voiceChar:"Jose",durationMs:14e3,heroReveal:!0}],H1=8e3,V1=8e3,W1=5e3,Xc=350;class X1{constructor(){_(this,"overlay");_(this,"canvas");_(this,"ctx2d");_(this,"textLayer");_(this,"themeAudio",null);_(this,"logoImg",null);_(this,"done",!1);_(this,"rafId",0);_(this,"timers",[]);_(this,"particles",[]);_(this,"panX",0);_(this,"camShake",0);_(this,"currentScene",null);_(this,"sceneT",0);_(this,"buildings",[])}play(){return new Promise(e=>this._tapThenBuild(e))}_tapThenBuild(e){this._injectStyles();const t=new Image;t.src=yo,t.onload=()=>{this.logoImg=t};const i=document.createElement("div");i.style.cssText=`
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

      <img src="${yo}" alt="TEM"
        style="height:clamp(80px,18vw,130px); width:auto; object-fit:contain;
               filter:brightness(0.9) drop-shadow(0 0 20px rgba(200,168,106,0.4));
               animation:tapPulse 3s ease-in-out infinite;"
        onerror="this.style.display='none'">
    `;const n=new Audio;n.src=Wt.theme,n.volume=.75,n.loop=!0,n.preload="auto",this.themeAudio=n,document.body.appendChild(i);let s=!1;const a=()=>{s||(s=!0,n.play().catch(()=>{this.themeAudio=null}),i.remove(),this._build(e))};i.addEventListener("pointerup",a,{once:!0})}_build(e){this.overlay=document.createElement("div"),this.overlay.id="intro-overlay",this.overlay.style.cssText=`
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
    `,s.addEventListener("click",()=>this._finish(e)),this.overlay.appendChild(this.canvas),this.overlay.appendChild(n),this.overlay.appendChild(t),this.overlay.appendChild(i),this.overlay.appendChild(this.textLayer),this.overlay.appendChild(s),document.body.appendChild(this.overlay),this._genBuildings(),this._startScene(_o[0]);let a=V1;for(let c=1;c<_o.length;c++){const h=_o[c];this._after(a,()=>this._startScene(h)),a+=h.durationMs??H1}this._after(a,()=>this._showTitle(e));let r=performance.now();const l=c=>{if(this.done)return;const h=Math.min((c-r)/1e3,.05);r=c,this.sceneT+=h,this._update(h),this._draw(),this.rafId=requestAnimationFrame(l)};this.rafId=requestAnimationFrame(l)}_startScene(e){this.done||(this.currentScene=e,this.sceneT=0,this.panX=0,this.particles=[],this.camShake=e.id==="matt"||e.id==="jose"?.5:0,this._updateText(e))}_updateText(e){if(!this.textLayer)return;const t=e.id==="melbourne";this.textLayer.innerHTML=`
      <div style="animation: introSlideUp 0.5s ease both;">
        ${t?`
          <div style="color:rgba(200,168,106,0.6); font-size:clamp(9px,2.5vw,12px);
                      font-weight:700; letter-spacing:4px; margin-bottom:12px;">
            TROWELED EARTH MELBOURNE PRESENTS
          </div>
          <img src="${yo}" alt="TEM"
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
    `}_update(e){const t=this.currentScene;if(t){this.panX+=e*18,this.camShake>0&&(this.camShake=Math.max(0,this.camShake-e*.8)),t.particleKind!=="none"&&this._spawnParticles(t,e);for(let i=this.particles.length-1;i>=0;i--){const n=this.particles[i];n.x+=n.vx*e,n.y+=n.vy*e,n.life-=e,n.alpha=Math.max(0,n.life/n.maxLife),n.life<=0&&this.particles.splice(i,1)}}}_spawnParticles(e,t){const i=this.canvas.width,n=this.canvas.height,s=e.particleKind==="sparks"?12:4;for(let a=0;a<s*t;a++){const r=Math.random()*i,l=n*.62;let c;e.particleKind==="sparks"?c={x:r,y:l-Math.random()*n*.15,vx:(Math.random()-.5)*80,vy:-Math.random()*120-40,life:.4+Math.random()*.4,maxLife:.8,size:1.5+Math.random()*2,alpha:1}:e.particleKind==="smoke"?c={x:r,y:l,vx:(Math.random()-.5)*20,vy:-Math.random()*30-10,life:1.5+Math.random(),maxLife:2.5,size:20+Math.random()*40,alpha:.3}:c={x:r,y:l+Math.random()*n*.1,vx:(Math.random()-.5)*15,vy:-Math.random()*15,life:1+Math.random()*1.5,maxLife:2.5,size:2+Math.random()*5,alpha:.5},this.particles.push(c)}}_draw(){const e=this.canvas.width,t=this.canvas.height,i=this.currentScene;if(!i)return;const n=this.ctx2d,s=this.camShake>0?(Math.random()-.5)*this.camShake*4:0;n.save(),n.translate(s,s*.5);const a=n.createLinearGradient(0,0,0,t*.65);a.addColorStop(0,i.skyTop),a.addColorStop(1,i.skyBot),n.fillStyle=a,n.fillRect(0,0,e,t),this._drawStars(n,e,t,i),this._drawCity(n,e,t,i);const r=n.createLinearGradient(0,t*.62,0,t);r.addColorStop(0,i.spotColor),r.addColorStop(.3,"#000000CC"),r.addColorStop(1,"#000000"),n.fillStyle=r,n.fillRect(0,t*.62,e,t*.38),this._drawRoad(n,e,t,i),this._drawParticles(n,i),this._drawBuckets(n,e,t,i),i.id!=="melbourne"&&this._drawCharSilhouette(n,e,t,i),i.id!=="melbourne"&&i.line&&this.sceneT>2&&this._drawSpeechBubble(n,e,t,i);const l=n.createRadialGradient(e/2,t/2,t*.1,e/2,t/2,t*.8);if(l.addColorStop(0,"rgba(0,0,0,0)"),l.addColorStop(1,"rgba(0,0,0,0.72)"),n.fillStyle=l,n.fillRect(0,0,e,t),i.id!=="melbourne"&&this.sceneT<.6){const c=Math.max(0,.6-this.sceneT)*.4;n.fillStyle=i.accentColor+Math.round(c*255).toString(16).padStart(2,"0"),n.fillRect(0,0,e,t)}n.restore()}_drawStars(e,t,i,n){const s=n.id.charCodeAt(0)*31;e.fillStyle="rgba(255,255,255,0.7)";for(let a=0;a<60;a++){const r=(s*(a+1)*1234567%t+t)%t,l=(s*(a+7)*765432%(i*.5)+i*.01)%(i*.5),c=.5+s*a*11%10/10,h=(this.sceneT*.8+a*.3)%(Math.PI*2);e.globalAlpha=.3+Math.sin(h)*.3,e.beginPath(),e.arc(r,l,c,0,Math.PI*2),e.fill()}e.globalAlpha=1}_drawCity(e,t,i,n){const s=i*.62,a=this.panX*.3%t;for(let r=-1;r<=1;r++){const l=r*t-a;for(const c of this.buildings){const h=c.x+l;if(h+c.w<-50||h>t+50)continue;e.fillStyle=n.buildingTint,e.fillRect(h,s-c.h,c.w,c.h),e.fillStyle=n.accentColor+"55";const u=Math.floor(c.w/10),d=Math.floor(c.h/14);for(let f=0;f<u;f++)for(let g=0;g<d;g++){if(!(Math.sin((c.x+f*17+g*13)*.618)>.1))continue;const m=h+f*10+2,p=s-c.h+g*14+3,w=Math.sin(this.sceneT*2+f+g)>.95;e.fillStyle=w?"#fff4":n.accentColor+"66",e.fillRect(m,p,5,7)}e.strokeStyle=n.accentColor+"22",e.lineWidth=1,e.strokeRect(h,s-c.h,c.w,c.h)}}}_drawRoad(e,t,i,n){const s=i*.72,a=this.panX*1.5;if(e.fillStyle="#0a0a0a",e.fillRect(0,s,t,i-s),e.strokeStyle=n.accentColor+"30",e.lineWidth=2,e.setLineDash([30,40]),e.lineDashOffset=-a%70,e.beginPath(),e.moveTo(0,s+20),e.lineTo(t,s+20),e.stroke(),e.setLineDash([]),n.id==="melbourne"){const r=this.panX*60%(t+200)-100;this._drawVan(e,r,s+5)}}_drawVan(e,t,i){e.save(),e.translate(t,i),e.fillStyle="#C1660A",e.beginPath(),e.roundRect(0,0,90*.8,42*.8,4*.8),e.fill(),e.fillStyle="#A04A00",e.beginPath(),e.roundRect(60*.8,4*.8,30*.8,32*.8,3*.8),e.fill(),e.fillStyle="#6090D080",e.fillRect(64*.8,7*.8,22*.8,16*.8),e.fillStyle="#111",e.beginPath(),e.arc(18*.8,42*.8,8*.8,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(72*.8,42*.8,8*.8,0,Math.PI*2),e.fill(),e.fillStyle="#FFFF8088",e.fillRect(88*.8,16*.8,3*.8,8*.8),e.restore()}_drawCharSilhouette(e,t,i,n){if(n.id==="connie"){this._drawConnieBond(e,t,i,n);return}const s=i*.62,a=t*.68,r=Math.min(1,this.sceneT*2);e.save(),e.globalAlpha=r;const l=e.createRadialGradient(a,s-80,10,a,s-80,160);l.addColorStop(0,n.accentColor+"50"),l.addColorStop(1,"transparent"),e.fillStyle=l,e.beginPath(),e.ellipse(a,s-80,160,220,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(0,0,0,0.45)",e.beginPath(),e.ellipse(a,s+6,40,9,0,0,Math.PI*2),e.fill();const c=Math.min(i*.52,240),u={jose:"#C8856A",matt:"#E8C0A0",tsuyoshi:"#F0D4B0",connie:"#F0C8A0",jarrad:"#E0B090",fabio:"#D4A070",joe:"#EED8C0",phil:"#D8A888"}[n.id]??"#D0A080",d="#111111",f="#1a1a2a";e.fillStyle="#0a0a0a",e.fillRect(a-19,s-22,16,22),e.fillRect(a+3,s-22,16,22),e.fillStyle=f,e.fillRect(a-18,s-c*.44,16,c*.44-20),e.fillRect(a+2,s-c*.44,16,c*.44-20),e.fillStyle=d,e.fillRect(a-20,s-c*.8,40,c*.37),this._drawTEMLogoOnShirt(e,a,s-c*.7),e.fillStyle=u,e.fillRect(a-5,s-c*.84,10,c*.06),e.fillStyle=d,e.fillRect(a-32,s-c*.78,13,c*.32),e.fillRect(a+19,s-c*.78,13,c*.28),e.fillStyle=u,e.beginPath(),e.ellipse(a-26,s-c*.46,7,9,.2,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(a+26,s-c*.5,7,9,-.2,0,Math.PI*2),e.fill(),e.fillStyle=u,e.beginPath(),e.ellipse(a,s-c*.87,c*.075,c*.09,0,0,Math.PI*2),e.fill(),this._drawHairAndProp(e,n,a,s,c,u),e.strokeStyle=n.accentColor,e.lineWidth=3,e.globalAlpha=r*.8,e.beginPath(),e.moveTo(a-20,s-c*.44),e.lineTo(a-20,s-c*.8),e.lineTo(a-10,s-c*.84),e.stroke(),e.restore()}_drawTEMLogoOnShirt(e,t,i){if(!this.logoImg)return;const n=20,s=n*(1504/688);e.save(),e.globalAlpha=.85,e.drawImage(this.logoImg,t-n/2,i-s/2,n,s),e.restore()}_drawConnieBond(e,t,i,n){const s=i*.62,a=t*.6,r=Math.min(1,this.sceneT*2),l=Math.min(i*.52,240),c="#F0C8A0",h=n.accentColor;e.save(),e.globalAlpha=r;const u=e.createRadialGradient(a,s-90,10,a,s-90,180);u.addColorStop(0,h+"55"),u.addColorStop(1,"transparent"),e.fillStyle=u,e.beginPath(),e.ellipse(a,s-90,180,230,0,0,Math.PI*2),e.fill(),e.fillStyle="rgba(0,0,0,0.4)",e.beginPath(),e.ellipse(a,s+5,30,7,0,0,Math.PI*2),e.fill();const d=s,f=d-l,g=d-l*.5;e.fillStyle="#D4B840",e.beginPath(),e.moveTo(a-8,f+l*.06),e.bezierCurveTo(a-40,f+l*.18,a-55,g-l*.06,a-35,d-l*.2),e.bezierCurveTo(a-28,d-l*.18,a-14,f+l*.3,a-2,f+l*.12),e.closePath(),e.fill(),e.strokeStyle="#FFE878",e.lineWidth=3,e.beginPath(),e.moveTo(a-4,f+l*.08),e.bezierCurveTo(a-30,f+l*.22,a-45,g,a-28,d-l*.22),e.stroke(),e.fillStyle="#111122",e.beginPath(),e.moveTo(a-8,d-l*.43),e.lineTo(a-14,d),e.lineTo(a-6,d),e.lineTo(a+4,d-l*.43),e.closePath(),e.fill(),e.beginPath(),e.moveTo(a-2,d-l*.43),e.lineTo(a+6,d),e.lineTo(a+16,d),e.lineTo(a+10,d-l*.43),e.closePath(),e.fill(),e.fillStyle="#111",e.fillRect(a-16,d-4,12,4),e.fillRect(a-13,d-10,2,10),e.fillRect(a+4,d-4,14,4),e.fillRect(a+15,d-10,2,10),e.fillStyle="#111111",e.beginPath(),e.moveTo(a+16,d-l*.8),e.bezierCurveTo(a+44,d-l*.79,a+58,d-l*.7,a+26,d-l*.58),e.bezierCurveTo(a+12,d-l*.51,a+8,d-l*.46,a+15,d-l*.42),e.bezierCurveTo(a+20,d-l*.39,a+15,d-l*.33,a+6,d-l*.27),e.lineTo(a-2,d-l*.42),e.bezierCurveTo(a-6,d-l*.5,a-4,d-l*.56,a+2,d-l*.66),e.bezierCurveTo(a+4,d-l*.73,a+0,d-l*.78,a+6,d-l*.82),e.closePath(),e.fill(),e.fillStyle=c,e.beginPath(),e.moveTo(a+10,d-l*.84),e.bezierCurveTo(a+30,d-l*.82,a+50,d-l*.79,a+44,d-l*.79),e.lineTo(a+16,d-l*.8),e.closePath(),e.fill(),e.fillStyle=c,e.fillRect(a+8,f+l*.12,8,l*.05);const v=l*.09;e.beginPath(),e.arc(a+12,f+l*.07,v,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(a+12+v*.85,f+l*.08,v*.22,-.4,.9),e.fill(),e.beginPath(),e.arc(a+12+v*.5,f+l*.1+v*.7,v*.3,0,Math.PI),e.fill(),e.fillStyle="#D4B840",e.beginPath(),e.arc(a+12,f+l*.04,v*1.05,Math.PI*.9,Math.PI*1.9),e.fill(),e.beginPath(),e.arc(a+12+v*.3,f+l*.02,v*.6,Math.PI,Math.PI*1.7),e.fill(),e.fillStyle="#CC2244",e.beginPath(),e.ellipse(a+12+v*.8,f+l*.09,4,2.5,.2,0,Math.PI*2),e.fill();const m=a+22,p=d-l*.76,w=-.38,M=l*.36,y=m+Math.cos(w)*M,R=p+Math.sin(w)*M;e.strokeStyle=c,e.lineWidth=l*.045,e.lineCap="round",e.beginPath(),e.moveTo(m,p),e.lineTo(y,R),e.stroke();const C=w-.08,A=l*.14,I=y+Math.cos(C)*A,T=R+Math.sin(C)*A;if(e.fillStyle="#1a1a1a",e.save(),e.translate(y,R),e.rotate(C),e.fillRect(-4,-4,10,18),e.restore(),e.strokeStyle="#2a2a2a",e.lineWidth=5,e.lineCap="square",e.beginPath(),e.moveTo(y,R),e.lineTo(I,T),e.stroke(),e.strokeStyle="#666",e.lineWidth=1.5,e.beginPath(),e.moveTo(y,R-1),e.lineTo(I,T-1),e.stroke(),this.sceneT>2.5){e.save(),e.globalAlpha=r*.6*(.5+Math.sin(this.sceneT*8)*.5);const b=e.createRadialGradient(I,T,0,I,T,14);b.addColorStop(0,"#FFFF88CC"),b.addColorStop(1,"transparent"),e.fillStyle=b,e.beginPath(),e.arc(I,T,14,0,Math.PI*2),e.fill(),e.restore()}e.strokeStyle="#FFD700",e.lineWidth=2.5,e.beginPath(),e.arc(y+6,R,4,0,Math.PI*2),e.stroke(),e.strokeStyle=h,e.lineWidth=3,e.globalAlpha=r*.7,e.beginPath(),e.moveTo(a-2,d-l*.43),e.bezierCurveTo(a-6,d-l*.5,a-4,d-l*.78,a+6,d-l*.83),e.stroke(),e.restore()}_drawHairAndProp(e,t,i,n,s,a){const r=n-s*.87,l=s*.075;switch(e.save(),e.lineCap="round",t.id){case"jose":{const c="#1e0d00",h="#3a1e00",u="#5a3500";[{dx:-14,swing:-7,len:s*.3,w:6,color:c},{dx:-9,swing:-4,len:s*.35,w:7,color:h},{dx:-4,swing:-1,len:s*.38,w:6,color:c},{dx:1,swing:2,len:s*.36,w:7,color:h},{dx:6,swing:4,len:s*.33,w:6,color:u},{dx:11,swing:5,len:s*.28,w:5,color:u},{dx:-12,swing:-5,len:s*.22,w:4,color:h},{dx:8,swing:3,len:s*.2,w:4,color:c}].forEach(m=>{e.strokeStyle=m.color,e.lineWidth=m.w,e.beginPath(),e.moveTo(i+m.dx,r-l*.05),e.bezierCurveTo(i+m.dx+m.swing*.35,r+m.len*.32,i+m.dx+m.swing*.85,r+m.len*.65,i+m.dx+m.swing*.65,r+m.len),e.stroke(),e.beginPath(),e.arc(i+m.dx+m.swing*.65,r+m.len,m.w*.6,0,Math.PI*2),e.fillStyle=m.color,e.fill()}),e.fillStyle=c,e.beginPath(),e.arc(i,r-l*.55,l*1.08,Math.PI,0),e.fill(),e.strokeStyle="#7B4A10",e.lineWidth=3.5,e.beginPath(),e.arc(i,r-l*.15,l*1.14,Math.PI*.75,Math.PI*1.95),e.stroke(),e.fillStyle="#2a1000",e.beginPath(),e.ellipse(i,r+l*.6,l*.65,l*.35,0,0,Math.PI),e.fill(),e.strokeStyle="rgba(210,210,210,0.85)",e.lineWidth=2.2,e.fillStyle="rgba(180,220,255,0.12)";const f=l*.95,g=l*.5,v=r-l*.12;e.beginPath(),e.roundRect(i-f-1,v-g/2,f,g,2),e.fill(),e.stroke(),e.beginPath(),e.roundRect(i+1,v-g/2,f,g,2),e.fill(),e.stroke(),e.beginPath(),e.moveTo(i-1,v),e.lineTo(i+1,v),e.stroke();break}case"matt":{const c="#5a3010";e.fillStyle=c,e.beginPath(),e.arc(i,r-l*.7,l*1.15,Math.PI,0),e.fill(),e.beginPath(),e.ellipse(i-l*.3,r-l*1.5,l*.9,l*.55,-.3,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(i+l*.4,r-l*1.4,l*.75,l*.5,.2,0,Math.PI*2),e.fill(),e.strokeStyle=c,e.lineWidth=4,e.beginPath(),e.moveTo(i-l*1.05,r-l*.3),e.quadraticCurveTo(i-l*1.3,r+l*.3,i-l*1,r+l*.5),e.stroke(),e.beginPath(),e.moveTo(i+l*1.05,r-l*.3),e.quadraticCurveTo(i+l*1.3,r+l*.3,i+l*1,r+l*.5),e.stroke(),e.fillStyle="#3a1a08",e.beginPath(),e.ellipse(i,r+l*.55,l*.75,l*.42,0,0,Math.PI),e.fill(),e.fillStyle="#3a1a08",e.beginPath(),e.ellipse(i,r+l*.18,l*.52,l*.18,0,0,Math.PI),e.fill();break}case"tsuyoshi":{const c="#080808",h=l*.52,u=r-l*.2;e.fillStyle=a,e.beginPath(),e.arc(i-l*.85,r-l*.5,l*.55,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(i+l*.85,r-l*.5,l*.55,0,Math.PI*2),e.fill(),e.fillStyle=c,e.fillRect(i-h/2,u-l*.3,h,l*.55);const d=[{ox:-.28,h:l*1.55,tw:.22,tilt:-.18},{ox:-.1,h:l*2.1,tw:.2,tilt:-.06},{ox:.06,h:l*2.4,tw:.22,tilt:.04},{ox:.2,h:l*1.9,tw:.19,tilt:.12},{ox:.32,h:l*1.4,tw:.18,tilt:.2}];e.fillStyle=c,d.forEach(f=>{const g=i+f.ox*h*3,v=f.tw*h*2.5;e.beginPath(),e.moveTo(g-v/2,u),e.lineTo(g+v/2,u),e.lineTo(g+Math.sin(f.tilt)*f.h*.5,u-f.h),e.closePath(),e.fill()}),e.fillStyle="rgba(80,80,160,0.18)",e.beginPath(),e.moveTo(i-1,u),e.lineTo(i+3,u),e.lineTo(i+2,u-l*2),e.closePath(),e.fill();break}case"jarrad":{const c="#1a1208";e.fillStyle=c,e.beginPath(),e.arc(i,r-l*.65,l*1.08,Math.PI,0),e.fill(),e.beginPath(),e.ellipse(i-l*.2,r-l*1.45,l*.7,l*.38,-.15,0,Math.PI*2),e.fill(),e.beginPath(),e.ellipse(i+l*.3,r-l*1.35,l*.55,l*.32,.15,0,Math.PI*2),e.fill(),e.fillStyle="#2a1e08",e.beginPath(),e.ellipse(i,r+l*.52,l*.65,l*.3,0,0,Math.PI),e.fill(),e.strokeStyle="#111",e.lineWidth=2.5,e.fillStyle="rgba(160,200,240,0.18)";const h=l*1,u=l*.52,d=r-l*.15;e.beginPath(),e.roundRect(i-h-1,d-u/2,h,u,2),e.fill(),e.stroke(),e.beginPath(),e.roundRect(i+1,d-u/2,h,u,2),e.fill(),e.stroke(),e.beginPath(),e.moveTo(i-1,d),e.lineTo(i+1,d),e.stroke(),e.beginPath(),e.moveTo(i-h-1,d),e.lineTo(i-h-l*.4,d-1),e.stroke(),e.beginPath(),e.moveTo(i+h+1,d),e.lineTo(i+h+l*.4,d-1),e.stroke();break}case"fabio":{e.fillStyle="#1a0e00",e.beginPath(),e.arc(i,r-l*.68,l*1.1,Math.PI,0),e.fill(),e.beginPath(),e.ellipse(i-l*.1,r-l*1.42,l*.8,l*.38,.1,0,Math.PI*2),e.fill(),e.fillStyle="#2e1800",e.beginPath(),e.ellipse(i,r+l*.5,l*.6,l*.26,0,0,Math.PI),e.fill();break}case"joe":{e.fillStyle="#3a2510",e.beginPath(),e.arc(i,r-l*.68,l*1.08,Math.PI,0),e.fill(),e.beginPath(),e.ellipse(i-l*.15,r-l*1.35,l*.6,l*.3,-.1,0,Math.PI*2),e.fill(),e.fillStyle="#D4E800",e.fillRect(i-22,n-s*.58,44,s*.06),e.fillStyle="#B8CC00",e.fillRect(i-22,n-s*.52,44,s*.03);break}case"phil":{const c="#C8C8C4",h="#A8A8A2";e.fillStyle=c,e.beginPath(),e.arc(i,r-l*.72,l*1.12,Math.PI,0),e.fill(),e.fillStyle=h,e.beginPath(),e.arc(i,r-l*.5,l*1.08,Math.PI*.85,Math.PI*1.15),e.fill(),e.fillStyle="#DDDDD8",e.beginPath(),e.ellipse(i,r-l*1.1,l*.7,l*.35,0,0,Math.PI*2),e.fill(),e.strokeStyle="#111",e.lineWidth=2.2,e.fillStyle="rgba(160,200,240,0.15)";const u=l*.95,d=l*.48,f=r-l*.12;e.beginPath(),e.roundRect(i-u-1,f-d/2,u,d,2),e.fill(),e.stroke(),e.beginPath(),e.roundRect(i+1,f-d/2,u,d,2),e.fill(),e.stroke(),e.beginPath(),e.moveTo(i-1,f),e.lineTo(i+1,f),e.stroke(),e.beginPath(),e.moveTo(i-u-1,f),e.lineTo(i-u-l*.4,f-1),e.stroke(),e.beginPath(),e.moveTo(i+u+1,f),e.lineTo(i+u+l*.4,f-1),e.stroke();break}case"connie":{e.fillStyle="#E8D080",e.beginPath(),e.arc(i,r-l*.5,l*1.1,Math.PI,0),e.fill(),e.fillRect(i-l*1.2,r,l*2.4,s*.18);break}}switch(e.lineCap="butt",e.restore(),t.id){case"jose":case"matt":{e.fillStyle=a,e.fillRect(i+19,n-s*.62,28,8),e.fillStyle="#A0B8CC",e.save(),e.translate(i+52,n-s*.63),e.rotate(-.3),e.fillRect(0,-4,28,10),e.fillStyle="#6A7A88",e.fillRect(24,-5,6,12),e.restore();break}case"tsuyoshi":{e.fillStyle=a,e.fillRect(i-33,n-s*.44,8,s*.22),e.fillStyle="#446688",e.beginPath(),e.moveTo(i-44,n-s*.22),e.lineTo(i-28,n-s*.22),e.lineTo(i-30,n-s*.04),e.lineTo(i-42,n-s*.04),e.fill(),e.strokeStyle="#88AACC",e.lineWidth=2,e.strokeRect(i-44,n-s*.22,16,2);break}case"connie":{e.fillStyle=a,e.fillRect(i+19,n-s*.68,10,s*.2),e.fillStyle="#E8E0C0",e.fillRect(i+28,n-s*.72,26,34),e.fillStyle="#C8A86A",e.fillRect(i+34,n-s*.74,14,6),e.fillStyle="#88778866";for(let c=0;c<4;c++)e.fillRect(i+30,n-s*.66+c*6,20,3);break}case"jarrad":{e.fillStyle=a,e.fillRect(i+19,n-s*.7,10,s*.22),e.fillStyle="#1a1a2a",e.fillRect(i+28,n-s*.73,18,28),e.fillStyle="#4488FF",e.shadowColor="#4488FF",e.shadowBlur=18,e.fillRect(i+30,n-s*.71,14,24),e.shadowBlur=0,e.fillStyle="#4488FF18",e.beginPath(),e.ellipse(i+20,n-s*.87,30,40,0,0,Math.PI*2),e.fill();break}case"fabio":{e.fillStyle=a,e.fillRect(i-32,n-s*.78,10,s*.1),e.fillStyle="#B8904A",e.fillRect(i-46,n-s*.86,38,6),e.fillRect(i-46,n-s*.84,38,20),e.fillStyle="#FF5533",e.fillRect(i-43,n-s*.82,32,14),e.fillStyle="#FFDD44";for(let c=0;c<5;c++)e.beginPath(),e.arc(i-38+c*6,n-s*.78+c%2*4,3,0,Math.PI*2),e.fill();break}case"phil":{e.fillStyle=a,e.fillRect(i-33,n-s*.52,8,s*.1),e.fillStyle="#8899AA",e.fillRect(i-40,n-s*.44,14,20),e.fillStyle="#AAC0CC",e.fillRect(i-39,n-s*.46,12,8),e.strokeStyle="#AAAAAA60",e.lineWidth=2;for(let c=0;c<3;c++)e.beginPath(),e.moveTo(i-36+c*4,n-s*.46),e.quadraticCurveTo(i-34+c*4,n-s*.5,i-36+c*4,n-s*.54),e.stroke();break}}}_drawParticles(e,t){for(const i of this.particles)if(e.globalAlpha=i.alpha*.85,t.particleKind==="sparks")e.fillStyle=t.particleColor,e.shadowColor=t.particleColor,e.shadowBlur=4,e.beginPath(),e.arc(i.x,i.y,i.size,0,Math.PI*2),e.fill(),e.shadowBlur=0;else{const n=e.createRadialGradient(i.x,i.y,0,i.x,i.y,i.size);n.addColorStop(0,t.particleColor+"60"),n.addColorStop(1,"transparent"),e.fillStyle=n,e.beginPath(),e.arc(i.x,i.y,i.size,0,Math.PI*2),e.fill()}e.globalAlpha=1}_drawBuckets(e,t,i,n){const s=i*.62,a=(r,l,c,h=1)=>{const u=c*1.2,d=c,f=c*.72,g=r-d/2,v=r-f/2;e.save(),e.globalAlpha=h,e.fillStyle="rgba(0,0,0,0.3)",e.beginPath(),e.ellipse(r,l+u+3,c*.42,5,0,0,Math.PI*2),e.fill(),e.beginPath(),e.moveTo(g,l),e.lineTo(g+d,l),e.lineTo(v+f,l+u),e.lineTo(v,l+u),e.closePath(),e.fillStyle="#F8F6F0",e.fill(),e.strokeStyle="#C8A86A",e.lineWidth=Math.max(1,c*.04),e.stroke(),e.beginPath(),e.ellipse(r,l,d/2,d*.1,0,0,Math.PI*2),e.fillStyle="#E8E4DC",e.fill(),e.strokeStyle="#C8A86A",e.lineWidth=Math.max(1,c*.03),e.stroke(),e.beginPath(),e.arc(r,l-d*.06,d*.3,Math.PI,0),e.strokeStyle="#B0966A",e.lineWidth=Math.max(1.5,c*.05),e.stroke();const m=c*.55,p=r-m/2,w=l+u*.18;this.logoImg?(e.globalCompositeOperation="multiply",e.globalAlpha=h*.6,e.drawImage(this.logoImg,p,w,m,m*(1504/688)),e.globalCompositeOperation="source-over",e.globalAlpha=h):(e.fillStyle="#C8A86A",e.font=`bold ${Math.max(7,c*.18)}px system-ui`,e.textAlign="center",e.fillText("TEM",r,l+u*.55),e.textAlign="start"),e.restore()};if(n.id==="melbourne")a(t*.1,s-48,46,.92),a(t*.165,s-38,36,.78),a(t*.8,s-44,42,.88),a(t*.87,s-32,30,.68);else{const r=Math.min(1,this.sceneT*1.5);a(t*.16,s-52,48,r*.95),a(t*.25,s-40,36,r*.82)}}_drawSpeechBubble(e,t,i,n){const s=Math.min(1,(this.sceneT-2)*1.5);if(s<=0)return;const a=Math.sin(this.sceneT*1.8)*5,r=Math.min(t*.42,280),l=72,c=t*.04,h=i*.38+a,u=14,d=c+r;e.save(),e.globalAlpha=s,e.shadowColor="rgba(0,0,0,0.45)",e.shadowBlur=12,e.shadowOffsetY=4,e.fillStyle="rgba(255,255,255,0.94)",e.beginPath(),e.moveTo(c+u,h),e.lineTo(c+r-u,h),e.quadraticCurveTo(c+r,h,c+r,h+u),e.lineTo(c+r,h+l-u),e.quadraticCurveTo(c+r,h+l,c+r-u,h+l),e.lineTo(c+u,h+l),e.quadraticCurveTo(c,h+l,c,h+l-u),e.lineTo(c,h+u),e.quadraticCurveTo(c,h,c+u,h),e.closePath(),e.fill(),e.shadowBlur=0,e.shadowOffsetY=0,e.beginPath(),e.moveTo(d,h+l*.42),e.lineTo(d+20,h+l*.55),e.lineTo(d,h+l*.68),e.closePath(),e.fill(),e.fillStyle=n.accentColor,e.fillRect(c+u,h,r-u*2,4),e.shadowBlur=0;const f=Math.max(12,Math.min(16,r/16));e.font=`italic ${f}px system-ui, sans-serif`,e.fillStyle="#111",e.textBaseline="middle";const g=r-24,v=`"${n.line}"`.split(" "),m=[];let p="";for(const R of v){const C=p?`${p} ${R}`:R;e.measureText(C).width>g&&p?(m.push(p),p=R):p=C}p&&m.push(p);const w=f+5,M=m.length*w,y=h+(l-M)/2+w/2+2;m.forEach((R,C)=>{e.fillText(R,c+12,y+C*w,g)}),e.restore()}_showTitle(e){this.done||(this.particles=[],this.currentScene={..._o[0],id:"title",name:"",role:"",line:""},this.textLayer.innerHTML=`
      <div style="animation:introSlideUp 0.7s ease both; text-align:center; width:100%;">
        <img src="${yo}" alt="TEM"
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
    `,this.textLayer.style.justifyContent="center",this.textLayer.style.alignItems="center",this._after(W1,()=>{this.overlay.style.transition=`opacity ${Xc}ms ease`,this.overlay.style.opacity="0",this._after(Xc+50,()=>this._finish(e))}))}_startAudio(){try{const e=new Audio;e.src=Wt.theme,e.volume=.75,this.themeAudio=e,e.play().catch(()=>{this.themeAudio=null})}catch{}}_finish(e){var i;if(this.done)return;this.done=!0,this.timers.forEach(clearTimeout),cancelAnimationFrame(this.rafId);const t=this.themeAudio;this.themeAudio=null,(i=this.overlay)==null||i.remove(),e(t)}_after(e,t){this.timers.push(setTimeout(t,e))}_genBuildings(){let t=0;this.buildings=[];for(let i=0;i<28;i++){const n=30+Math.floor(Math.sin(i*2.1)*15+Math.cos(i*1.3)*12+40),s=60+Math.abs(Math.sin(i*1.7)*140+Math.cos(i*2.3)*80);this.buildings.push({x:t,w:n,h:s}),t+=n+4+Math.floor(Math.sin(i*3.7)*6)}}_resizeCanvas(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}_injectStyles(){if(document.getElementById("intro-styles"))return;const e=document.createElement("style");e.id="intro-styles",e.textContent=`
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
    `,document.head.appendChild(e)}}const j1=[{character:"Jose",label:"JOSE GARCIA",color:"#8B6A3A",lines:["Jose Garcia — the Spaniard cloaked in shadows, grim veil","An artist of chaos where darkness and dreams prevail","With brutal hands he sculpts the earth's unyielding core","His trowel, a weapon — top class, none can ignore","From blood red clay to concrete's cold, unfeeling embrace","He molds the void to find foundations of time"]},{character:null,label:"CHORUS",color:"#C8A86A",lines:["Troweled Earth — where shadows fall","Unyielding — it calls to all","This spirit's rise beneath the skies","The spark of architects' darkest dreams"]},{character:"Matt",label:"MATT",color:"#C1666B",lines:["Matt, the warlord — fire raging deep in his veins","Charismatic, don't matter, wielding hearts in unyielding chains","From Marbellino's wrath to metallic's cold, cruel, clean","His energy — tempest, relentless, untamed and wild","Unyielding strokes cut deep and true","His trowel carved dark — Troweled Earth's anchor bold"]},{character:"Tsuyoshi",label:"TSUYOSHI",color:"#4A8A6A",lines:["A samurai — perfect engineer","Crafts Tadelakt with a blade's cold glare","Positions master, slicing through despair","The future's written in shadows he's claimed as his own"]},{character:"Connie",label:"CONNIE",color:"#E8A050",lines:["Connie — tight on wheels, a trowel school might","Turning more queen, driving through the night"]},{character:"Jarrad",label:"JARRAD",color:"#8080C0",lines:["Jarrad — iron-forged, a time built in flame","His strength runs deep, no force can break or tame","He etches the earth with hands of steel","His honour worn in fire"]},{character:"Fabio",label:"FABIO",color:"#D4602A",lines:['Like fire among the wise — "you have no power here, Gandalf the Grey"',"Conjuring dark nights, his lore makes the unwilling pay"]},{character:null,label:"BRIDGE — MELBOURNE",color:"#8B9EC8",lines:["St Kilda confined — Fitzroy, raw forms rise","No facade — let the heavy stone speak","Trowel the fruit of beauty, cold and true","Polish scars are steel in all grids and grooves","Good dreams forged in the fire of steel","Tadelakt stone lit sheen — custom strokes, no polish","Just the fight in every scene"]},{character:null,label:"FINAL CHORUS",color:"#C8A86A",lines:["Melbourne's concrete sonnet — unyielding, profound","Trowel dust builds the goal on hallowed ground","Troweled Earth — we shatter the stone","Crafting brutal spaces — this is home"]}],jc=j1.flatMap(o=>o.lines),Y1=[{text:"🌳",size:64,color:"#C8A86A",gap:12},{text:"TROWELED EARTH RUSH",size:32,color:"#C8A86A",weight:900,spacing:4,gap:8},{text:"A TROWELED EARTH MELBOURNE PRODUCTION",size:11,color:"rgba(200,168,106,0.5)",spacing:2,gap:48},{text:"CREW",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"MATT",size:16,color:"#C1666B",weight:800,gap:4},{text:"LEAD PLASTERER · THE WARLORD",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"JOSE GARCIA",size:16,color:"#8B6A3A",weight:800,gap:4},{text:"THE SPANIARD · MASTER OF CLAY",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"TSUYOSHI",size:16,color:"#4A8A6A",weight:800,gap:4},{text:"SAMURAI ENGINEER · TADELAKT SPECIALIST",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"CONNIE",size:16,color:"#E8A050",weight:800,gap:4},{text:"OPERATIONS QUEEN · BORN IN GERMANY",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"JARRAD",size:16,color:"#8080C0",weight:800,gap:4},{text:"SCAFFOLD SPECIALIST · TOPKNOT PHILOSOPHER",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"FABIO",size:16,color:"#D4602A",weight:800,gap:4},{text:'PLASTERER · PIZZA CONSULTANT · "EHHHH"',size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"PHIL",size:16,color:"#A0B8A0",weight:800,gap:4},{text:"RENDERS · QUIET LEGEND",size:11,color:"rgba(240,232,216,0.5)",gap:40},{text:"SUPPORTING CAST",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"MIKAYLA",size:16,color:"#FF9DC4",weight:800,gap:4},{text:"WORKSHOP MANAGER · JUMP ROPE CHAMPION",size:11,color:"rgba(240,232,216,0.5)",gap:20},{text:"JOE",size:16,color:"#C8A86A",weight:800,gap:4},{text:"SUPPLIES · MAN OF FEW WORDS",size:11,color:"rgba(240,232,216,0.5)",gap:40},{text:"PRODUCTS FEATURED",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"Blood Red Clay · Marbellino · Tadelakt",size:14,color:"rgba(240,232,216,0.7)",gap:8},{text:"Antique Stucco · Metallic · Sgraffito",size:14,color:"rgba(240,232,216,0.7)",gap:8},{text:"Concrete Polish · Venetian Plaster · Limewash",size:14,color:"rgba(240,232,216,0.7)",gap:40},{text:"RADIO STATIONS",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"TEM FM 88.3 · Brunswick Beats 99.9",size:13,color:"rgba(240,232,216,0.6)",gap:8},{text:"Connie's Gold 103.7 · The Scaffold 107.1",size:13,color:"rgba(240,232,216,0.6)",gap:8},{text:"Fabio's Pizza Radio 92.5",size:13,color:"rgba(240,232,216,0.6)",gap:40},{text:"CITY LOCATIONS",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"Melbourne CBD · Fitzroy · Brunswick",size:13,color:"rgba(240,232,216,0.6)",gap:8},{text:"Richmond · St Kilda · Footscray",size:13,color:"rgba(240,232,216,0.6)",gap:40},{text:"GAME DESIGN & DEVELOPMENT",size:13,color:"#C8A86A",weight:700,spacing:3,gap:20},{text:"Snappabot",size:18,color:"rgba(240,232,216,0.9)",weight:800,gap:4},{text:"Three.js · TypeScript · Vite",size:11,color:"rgba(200,168,106,0.4)",gap:40},{text:"MADE WITH 🌳 IN MELBOURNE",size:14,color:"#C8A86A",spacing:2,gap:40},{text:'"The walls remember every hand that shaped them."',size:14,color:"rgba(200,168,106,0.6)",italic:!0,gap:60},{text:"TROWELED EARTH MELBOURNE",size:14,color:"#C8A86A",spacing:2,gap:8},{text:"troweledearthmelbourne.com.au",size:12,color:"rgba(200,168,106,0.4)",gap:80}];class q1{constructor(){_(this,"overlay");_(this,"creditsAudio",null);_(this,"rafId",0)}show(){return new Promise(e=>this._build(e))}_build(e){this._injectStyles(),this.overlay=document.createElement("div"),this.overlay.id="credits-overlay",this.overlay.style.cssText=`
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
    `;let n=0;Y1.forEach(u=>{const d=document.createElement("div"),f=u.size||14;d.textContent=u.text,d.style.cssText=`
        color: ${u.color||"rgba(240,232,216,0.8)"};
        font-size: ${f}px;
        font-weight: ${u.weight||400};
        letter-spacing: ${u.spacing||0}px;
        font-style: ${u.italic?"italic":"normal"};
        margin-bottom: ${u.gap||16}px;
        line-height: 1.4;
      `,i.appendChild(d),n+=f*1.4+(u.gap||16)});const s=document.createElement("div");s.style.height="100vh",i.appendChild(s);const a=document.createElement("div");a.style.cssText=`
      position:absolute; inset:0; z-index:5; pointer-events:none;
      background: linear-gradient(
        180deg,
        rgba(5,4,2,1) 0%,
        rgba(5,4,2,0) 8%,
        rgba(5,4,2,0) 92%,
        rgba(5,4,2,1) 100%
      );
    `,this.overlay.appendChild(t),this.overlay.appendChild(i),this.overlay.appendChild(a),document.body.appendChild(this.overlay),this._startAudio();const r=.6;let l=-window.innerHeight;const c=n+window.innerHeight,h=()=>{if(this.overlay.isConnected){if(l+=r,i.style.transform=`translateX(-50%) translateY(-${l}px)`,l>c){this._finish(e);return}this.rafId=requestAnimationFrame(h)}};this.rafId=requestAnimationFrame(h)}_startAudio(){try{const e=new Audio;e.src=Wt.credits,e.volume=0,e.play().then(()=>{this.creditsAudio=e;let t=0;const i=setInterval(()=>{t=Math.min(t+.02,.65),e.volume=t,t>=.65&&clearInterval(i)},80)}).catch(()=>{})}catch{}}_finish(e){if(cancelAnimationFrame(this.rafId),this.creditsAudio){const t=this.creditsAudio;let i=t.volume;const n=setInterval(()=>{i=Math.max(0,i-.04),t.volume=i,i<=0&&(clearInterval(n),t.pause(),t.src="")},60)}this.overlay.style.transition="opacity 0.8s",this.overlay.style.opacity="0",setTimeout(()=>{this.overlay.remove(),e()},850)}_injectStyles(){if(document.getElementById("credits-styles"))return;const e=document.createElement("style");e.id="credits-styles",e.textContent=`
      #credits-overlay {
        background: linear-gradient(180deg, #050402 0%, #080604 50%, #050402 100%);
      }
    `,document.head.appendChild(e)}}const $1="./",J1=`${$1}tem-logo-white.jpg`;class K1{constructor(){_(this,"overlay");_(this,"scrollTimer",0);_(this,"ctx",null);_(this,"masterGain",null);_(this,"themeAudio",null)}show(e){return new Promise(t=>{this._build(t,e)})}_build(e,t){this._injectStyles(),this.overlay=document.createElement("div"),this.overlay.id="start-menu",this.overlay.style.cssText=`
      position:fixed; inset:0; z-index:40000;
      background:#07050302;
      display:flex; flex-direction:column;
      align-items:center; justify-content:center;
      font-family: system-ui, -apple-system, sans-serif;
      overflow:hidden;
    `;const i=document.createElement("div");i.className="sm-lyrics-back";const n=document.createElement("div");n.id="sm-lyrics-inner";const s=[...jc,...jc];s.forEach(d=>{const f=document.createElement("div");f.className="sm-lyric-line",f.textContent=d,n.appendChild(f)}),i.appendChild(n),this.overlay.appendChild(i);const a=document.createElement("div");a.className="sm-gradient",this.overlay.appendChild(a);const r=document.createElement("div");r.className="sm-content",r.innerHTML=`
      <img src="${J1}" alt="Troweled Earth" class="sm-logo-img"
        onerror="this.outerHTML='<div class=sm-logo>🌳</div>'">
      <div class="sm-title">TROWELED EARTH RUSH</div>
      <div class="sm-tagline">"The walls remember every hand that shaped them."</div>
    `;const l=document.createElement("div");l.className="sm-btn-row";const c=this._btn("▶  PLAY","#C1666B","#9E4A50");c.style.fontSize="18px",c.style.padding="18px 48px",c.addEventListener("click",d=>{d.stopPropagation(),this._stopAudio(),this.overlay.style.transition="opacity 0.5s",this.overlay.style.opacity="0",setTimeout(()=>{this.overlay.remove(),e()},520)});const h=this._btn("📋  HOW TO PLAY","rgba(200,168,106,0.18)","rgba(200,168,106,0.28)");h.style.border="1.5px solid rgba(200,168,106,0.4)",h.addEventListener("click",d=>{d.stopPropagation(),this._showHowToPlay()});const u=this._btn("🎬  CREDITS","rgba(255,255,255,0.06)","rgba(255,255,255,0.12)");u.style.border="1.5px solid rgba(255,255,255,0.15)",u.style.color="rgba(255,255,255,0.55)",u.addEventListener("click",d=>{d.stopPropagation(),this._killAudio(),this.overlay.style.opacity="0",this.overlay.style.transition="opacity 0.3s",setTimeout(async()=>{await new q1().show(),this.overlay.style.opacity="1",this._startAudio()},320)}),l.appendChild(c),l.appendChild(h),l.appendChild(u),r.appendChild(l),this.overlay.appendChild(r),document.body.appendChild(this.overlay),this._startScroll(n,s.length),t?(this.themeAudio=t,t.loop=!0,t.volume=.6):this.overlay.addEventListener("click",()=>this._startAudio(),{once:!0})}_btn(e,t,i){const n=document.createElement("button");return n.innerHTML=e,n.style.cssText=`
      background:${t}; border:none; color:#fff;
      font-size:14px; font-weight:800; letter-spacing:1px;
      padding:14px 32px; border-radius:50px; cursor:pointer;
      touch-action:manipulation; transition:background 0.15s, transform 0.1s;
      font-family:system-ui,sans-serif;
      box-shadow:0 4px 20px rgba(0,0,0,0.4);
    `,n.addEventListener("mouseenter",()=>{n.style.background=i,n.style.transform="translateY(-2px)"}),n.addEventListener("mouseleave",()=>{n.style.background=t,n.style.transform=""}),n}_startScroll(e,t){let i=0;const a=t*38/2,r=()=>{i+=.35,i>=a&&(i=0),e.style.transform=`translateY(-${i}px)`,this.scrollTimer=requestAnimationFrame(r)};this.scrollTimer=requestAnimationFrame(r)}_startAudio(){try{const e=new Audio;e.src=Wt.theme,e.volume=0,e.loop=!0,this.themeAudio=e,e.play().then(()=>{let t=0;const i=setInterval(()=>{if(!this.themeAudio){clearInterval(i);return}t=Math.min(t+.02,.6),e.volume=t,t>=.6&&clearInterval(i)},100)}).catch(()=>{this.themeAudio=null,this._startSynthAudio()});return}catch{}this._startSynthAudio()}_startSynthAudio(){try{this.ctx=new(window.AudioContext||window.webkitAudioContext),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=0,this.masterGain.connect(this.ctx.destination),this.masterGain.gain.linearRampToValueAtTime(.1,this.ctx.currentTime+2);const e=76,t=e/60;let i=this.ctx.currentTime+.5;const n=this.ctx.createOscillator(),s=this.ctx.createGain(),a=this.ctx.createBiquadFilter();n.type="sine",n.frequency.value=55,a.type="lowpass",a.frequency.value=180,s.gain.value=.5,n.connect(a),a.connect(s),s.connect(this.masterGain),n.start(i);for(let r=0;r<180;r++){const l=i+r/t,c=r%4;c===0&&this._kick(l,55),(c===1||c===3)&&this._snare(l),this._hihat(l),c===0&&this._bass(l,55),r%8===0&&this._pad(l,220*(r%16<8?1:1.5))}}catch{}}_killAudio(){this.themeAudio&&(this.themeAudio.pause(),this.themeAudio.src="",this.themeAudio=null);try{this.ctx&&(this.ctx.close(),this.ctx=null,this.masterGain=null)}catch{}}_stopAudio(){if(this.themeAudio){const e=this.themeAudio;let t=e.volume;const i=setInterval(()=>{t=Math.max(0,t-.05),e.volume=t,t<=0&&(clearInterval(i),e.pause(),e.src="")},50)}try{this.masterGain&&this.ctx&&(this.masterGain.gain.linearRampToValueAtTime(0,this.ctx.currentTime+.5),setTimeout(()=>{var e;try{(e=this.ctx)==null||e.close()}catch{}},600))}catch{}}_kick(e,t){if(!(!this.ctx||!this.masterGain))try{const i=this.ctx.createOscillator(),n=this.ctx.createGain();i.frequency.setValueAtTime(t,e),i.frequency.exponentialRampToValueAtTime(20,e+.15),n.gain.setValueAtTime(.5,e),n.gain.exponentialRampToValueAtTime(.001,e+.28),i.connect(n),n.connect(this.masterGain),i.start(e),i.stop(e+.32)}catch{}}_snare(e){if(!(!this.ctx||!this.masterGain))try{const t=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*.18),this.ctx.sampleRate),i=t.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;const n=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),a=this.ctx.createGain();n.buffer=t,s.type="bandpass",s.frequency.value=1800,a.gain.setValueAtTime(.055,e),a.gain.exponentialRampToValueAtTime(.001,e+.18),n.connect(s),s.connect(a),a.connect(this.masterGain),n.start(e),n.stop(e+.2)}catch{}}_hihat(e){if(!(!this.ctx||!this.masterGain))try{const t=this.ctx.createBuffer(1,Math.floor(this.ctx.sampleRate*.04),this.ctx.sampleRate),i=t.getChannelData(0);for(let r=0;r<i.length;r++)i[r]=Math.random()*2-1;const n=this.ctx.createBufferSource(),s=this.ctx.createBiquadFilter(),a=this.ctx.createGain();n.buffer=t,s.type="highpass",s.frequency.value=9e3,a.gain.setValueAtTime(.016,e),a.gain.exponentialRampToValueAtTime(.001,e+.04),n.connect(s),s.connect(a),a.connect(this.masterGain),n.start(e),n.stop(e+.05)}catch{}}_bass(e,t){if(!(!this.ctx||!this.masterGain))try{const i=this.ctx.createOscillator(),n=this.ctx.createBiquadFilter(),s=this.ctx.createGain();i.type="sawtooth",i.frequency.value=t,n.type="lowpass",n.frequency.value=280,s.gain.setValueAtTime(.3,e),s.gain.exponentialRampToValueAtTime(.001,e+.45),i.connect(n),n.connect(s),s.connect(this.masterGain),i.start(e),i.stop(e+.5)}catch{}}_pad(e,t){if(!(!this.ctx||!this.masterGain))try{const i=this.ctx.createOscillator(),n=this.ctx.createGain(),s=this.ctx.createBiquadFilter();i.type="triangle",i.frequency.value=t,s.type="lowpass",s.frequency.value=1e3,n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(.07,e+.6),n.gain.linearRampToValueAtTime(0,e+4),i.connect(s),s.connect(n),n.connect(this.masterGain),i.start(e),i.stop(e+4.5)}catch{}}_showHowToPlay(){const e=document.createElement("div");e.style.cssText=`
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
    `,document.head.appendChild(e)}}class Z1{constructor(e,t,i,n){_(this,"btn");_(this,"panel");_(this,"radioSlot");_(this,"moneySlot");_(this,"_open",!1);this._build(e,t,i,n)}_build(e,t,i,n){this.btn=document.createElement("button"),this.btn.textContent="☰",this.btn.style.cssText=`
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
    `,n.addEventListener("click",s=>{s.stopPropagation(),i()}),n}_divider(){const e=document.createElement("div");return e.style.cssText="height: 1px; background: rgba(200,168,106,0.12); margin: 0 -4px;",e}}const el=[{id:"jose",name:"Jose",title:"Wall Jesus 🙏",color:"#E8A830",skinTone:"#C8856A",hairColor:"#1e0d00",locked:!1,passive:{name:"Touch of God",desc:"Wall jobs pay +15%. Spill meter drains 20% slower."},active:{name:"Wall Jesus Mode",desc:"Instant wall prep — skip the prep phase on any job."},perkTag:"Always in. He IS the mission.",payMult:1.15,speedMult:1,spillGuard:.2,breakImmune:!1,btcBoost:1,timerBonus:0},{id:"jarrad",name:"Jarrad",title:"Plan/No Plan 🎲",color:"#9B59B6",skinTone:"#E0B090",hairColor:"#1a1208",locked:!1,passive:{name:"Coin Flip",desc:"50/50: reveals best job OR chaos job with 2× payout."},active:{name:"Blueprint",desc:"Pause mid-job. Get +15 seconds back on the clock."},perkTag:"High risk. High reward.",payMult:1,speedMult:1,spillGuard:0,breakImmune:!1,btcBoost:1,timerBonus:15},{id:"matt",name:"Matt",title:"Diplomatt 💼",color:"#4A90D9",skinTone:"#E8C0A0",hairColor:"#5a3010",locked:!1,passive:{name:"The Pitch",desc:"Unlocks premium jobs. +10% base pay on all work."},active:{name:"Renegotiate",desc:"Push for up to 30% bonus payout mid-job."},perkTag:"+10% pay. He talks money.",payMult:1.1,speedMult:1,spillGuard:0,breakImmune:!1,btcBoost:1,timerBonus:0},{id:"tsuyoshi",name:"Tsuyoshi",title:"Mohawk Rush ⚡",color:"#FF4444",skinTone:"#F0D4B0",hairColor:"#080808",locked:!1,passive:{name:"Defect Detect",desc:"Spots hidden defects — prevents penalty deductions."},active:{name:"RUSH MODE",desc:"Van speed +30% for 20 seconds. ANYTIME."},perkTag:"+30% van speed. Does not stop.",payMult:1,speedMult:1.3,spillGuard:0,breakImmune:!1,btcBoost:1,timerBonus:5},{id:"fabio",name:"Fabio",title:"Andiamo! 🍕",color:"#27AE60",skinTone:"#D4A070",hairColor:"#1a0e00",locked:!1,passive:{name:"Pressure Play",desc:"Speed +20% when job timer drops below 30 seconds."},active:{name:"Pizza Break",desc:"Full bladder reset + +10 seconds added to timer."},perkTag:"Clutch. Best under pressure.",payMult:1,speedMult:1.2,spillGuard:0,breakImmune:!1,btcBoost:1,timerBonus:10},{id:"phil",name:"Phil",title:"The Veteran 🧱",color:"#7F8C8D",skinTone:"#D8B89A",hairColor:"#C8C8C4",locked:!1,passive:{name:"Seen It All",desc:"Immune to random break interrupts. No forced stops."},active:{name:"Fill Me Crack",desc:"Auto-completes prep stage on any job. Instant."},perkTag:"No interruptions. Pure focus.",payMult:1,speedMult:1,spillGuard:.15,breakImmune:!0,btcBoost:1,timerBonus:0},{id:"joe",name:"Joe",title:"Knows Too Much 👁️",color:"#E67E22",skinTone:"#EED8C0",hairColor:"#3a2510",locked:!1,passive:{name:"Intel Drop",desc:"Random secret high-pay jobs appear only with Joe."},active:{name:"Off the Books",desc:"Next job's full payout goes direct to BTC. No cut."},perkTag:"Off the books. Sats to stack.",payMult:1,speedMult:1,spillGuard:0,breakImmune:!1,btcBoost:1.25,timerBonus:0},{id:"connie",name:"Connie",title:"German Efficiency 🔩",color:"#E74C3C",skinTone:"#F0C8A0",hairColor:"#E8D080",locked:!1,passive:{name:"Zero Tolerance",desc:"Failed job penalties cut by 50%. She handles it."},active:{name:"Drill Sergeant",desc:"Whole crew works 40% faster for one full job."},perkTag:"Penalty shield. She will not let you fail.",payMult:1,speedMult:1,spillGuard:.1,breakImmune:!1,btcBoost:1,timerBonus:0},{id:"mikayla",name:"Mikayla",title:"Books Full 📞",color:"#1ABC9C",skinTone:"#FDDBB4",hairColor:"#8B4513",locked:!1,passive:{name:"Full Board",desc:"Always 3+ jobs on the board. She keeps it stacked."},active:{name:"Priority Book",desc:"Summons a premium job to your nearest location."},perkTag:"More jobs. More sats. Always.",payMult:1.05,speedMult:1,spillGuard:0,breakImmune:!1,btcBoost:1,timerBonus:0}];let Vs=[];function Q1(o){Vs=[...o]}function xo(){return Vs}function tl(o){return el.find(e=>e.id===o)}function ev(){return Vs.reduce((o,e)=>{const t=tl(e);return t?o*t.payMult:o},1)}function tv(){return Vs.some(o=>{var e;return(e=tl(o))==null?void 0:e.breakImmune})}function iv(){return Vs.reduce((o,e)=>{const t=tl(e);return t?o+t.timerBonus:o},0)}const Ls=class Ls{constructor(){_(this,"_el",null);_(this,"_selected",new Set)}show(e,t,i){this.hide(),this._selected=new Set;const n=document.createElement("div");n.id="crew-sel-ov",n.style.cssText=`
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
    `,l.textContent="🚐 ROLL OUT",l.disabled=!0,el.forEach(u=>{const d=this._makeCard(u,a,()=>this._updateConfirm(l));r.appendChild(d)}),n.appendChild(r);const c=document.createElement("div");c.style.cssText=`
      position:fixed; bottom:0; left:0; right:0;
      background:linear-gradient(0deg,#0a0a0a,rgba(0,0,0,0.9));
      padding:12px 16px; display:flex; align-items:center;
      justify-content:space-between; z-index:13000; gap:10px;
    `;const h=document.createElement("div");h.id="crew-count",h.style.cssText="color:#aaa;font-size:12px;font-weight:700;min-width:100px;",h.textContent="0 / 3 picked",c.appendChild(h),c.appendChild(l),n.appendChild(c),l.addEventListener("click",()=>{Q1([...this._selected]),this.hide(),i([...this._selected])}),document.body.appendChild(n),this._el=n}hide(){var e;(e=this._el)==null||e.remove(),this._el=null}_makeCard(e,t,i){const n=document.createElement("div");n.dataset.id=e.id;const s=e.id==="jose";if(n.style.cssText=`
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
    `,c.textContent=e.passive.desc,n.appendChild(c);const h=document.createElement("div");return h.style.cssText=`
      background:${e.color}22; border:1px solid ${e.color}66;
      color:${e.color}; font-size:8px; font-weight:700;
      padding:2px 6px; border-radius:8px; text-align:center;
      margin-top:2px;
    `,h.textContent=e.passive.name.toUpperCase(),n.appendChild(h),n.addEventListener("click",()=>{const u=e.id;if(this._selected.has(u))this._selected.delete(u),n.style.border=`2px solid ${s?"#E8A83066":"#333"}`,n.style.background=s?"#1a0e00":"#111",n.style.boxShadow="",n.style.transform="";else{if(this._selected.size>=Ls.MAX_PICKS)return;this._selected.add(u),n.style.border=`2px solid ${e.color}`,n.style.background=`${e.color}18`,n.style.boxShadow=`0 0 14px ${e.color}60`,n.style.transform="scale(1.04)"}this._updateSynergy(t),i()}),n}_updateConfirm(e){const t=this._selected.size,i=document.getElementById("crew-count");i&&(i.textContent=`${t} / 3 picked`),t===Ls.MAX_PICKS?(e.style.background="#2ECC40",e.style.color="#000",e.style.cursor="pointer",e.style.boxShadow="0 0 18px #2ECC4080",e.disabled=!1):(e.style.background="#555",e.style.color="#888",e.style.cursor="not-allowed",e.style.boxShadow="",e.disabled=!0)}_updateSynergy(e){const t=n=>this._selected.has(n);let i="";t("jose")&&t("phil")&&(i="⚡ Wall Jesus + Veteran — zero interruptions, pure flow"),t("fabio")&&t("tsuyoshi")&&(i="🔥 Speed squad — clock-out crunch kings"),t("joe")&&t("matt")&&(i="💰 Off-books premium — BTC rockets this run"),t("connie")&&t("jarrad")&&(i="🎲 Penalty shield + chaos — high risk, protected"),t("jose")&&t("connie")&&(i="💼 Wall Jesus + Efficiency — unstoppable combo"),t("mikayla")&&t("matt")&&(i="📈 Full board + pay boost — maximum earning run"),t("jose")&&t("matt")&&t("connie")&&(i="👑 THE DREAM TEAM — Jose + Diplomatt + German Efficiency"),e.textContent=i,e.style.opacity=i?"1":"0"}_makeAvatar(e,t){const i=document.createElement("canvas");i.width=t,i.height=t,i.style.cssText="border-radius:50%; display:block;";const n=i.getContext("2d"),s=t/2;n.fillStyle=e.id==="jose"?"#1a0800":"#1a1a1a",n.beginPath(),n.arc(s,s,s,0,Math.PI*2),n.fill();const a=t*.14,r=t*.62;n.fillStyle=e.skinTone,n.fillRect(s-a/2,r,a,t*.22);const l=t*.44,c=t*.22;switch(n.fillStyle=e.skinTone,n.beginPath(),n.ellipse(s,l,c*.88,c,0,0,Math.PI*2),n.fill(),n.fillStyle=e.hairColor,n.strokeStyle=e.hairColor,e.id){case"jose":{n.lineCap="round",[{dx:-10,len:t*.34,w:2.5},{dx:-5,len:t*.38,w:3},{dx:1,len:t*.36,w:2.5},{dx:6,len:t*.3,w:2},{dx:10,len:t*.26,w:2}].forEach(g=>{n.lineWidth=g.w,n.beginPath(),n.moveTo(s+g.dx,l-c*.1),n.bezierCurveTo(s+g.dx-2,l+g.len*.5,s+g.dx+2,l+g.len*.8,s+g.dx,l+g.len),n.stroke()}),n.fillStyle=e.hairColor,n.beginPath(),n.arc(s,l-c*.55,c*1.02,Math.PI,0),n.fill(),n.strokeStyle="rgba(200,200,200,0.7)",n.lineWidth=1.2;const u=c*.85,d=c*.44,f=l-c*.1;n.beginPath(),n.roundRect(s-u-.5,f-d/2,u,d,1.5),n.stroke(),n.beginPath(),n.roundRect(s+.5,f-d/2,u,d,1.5),n.stroke();break}case"matt":{n.beginPath(),n.arc(s,l-c*.55,c*1.08,Math.PI,0),n.fill(),n.beginPath(),n.ellipse(s-c*.3,l-c*1.2,c*.65,c*.38,-.2,0,Math.PI*2),n.fill(),n.fillStyle="#3a1a08",n.beginPath(),n.ellipse(s,l+c*.45,c*.65,c*.32,0,0,Math.PI),n.fill();break}case"tsuyoshi":{const h=t*.12,u=l-c*.05;n.fillStyle=e.hairColor,n.fillRect(s-h/2,u-c*.2,h,c*.35),[{ox:-.3,h:t*.28,t:-.15},{ox:0,h:t*.36,t:0},{ox:.3,h:t*.26,t:.15}].forEach(d=>{const f=s+d.ox*h*2;n.beginPath(),n.moveTo(f-2.5,u),n.lineTo(f+2.5,u),n.lineTo(f+Math.sin(d.t)*d.h*.4,u-d.h),n.closePath(),n.fill()});break}case"jarrad":{n.beginPath(),n.arc(s,l-c*.6,c*1.05,Math.PI,0),n.fill(),n.beginPath(),n.ellipse(s-c*.1,l-c*1.3,c*.6,c*.28,-.1,0,Math.PI*2),n.fill(),n.fillStyle="#2a1e08",n.beginPath(),n.ellipse(s,l+c*.42,c*.6,c*.26,0,0,Math.PI),n.fill(),n.strokeStyle="#111",n.lineWidth=1.2,n.fillStyle="rgba(160,200,240,0.15)";const h=c*.82,u=l-c*.1;n.beginPath(),n.roundRect(s-h-.5,u-c*.22,h,c*.44,1.5),n.fill(),n.stroke(),n.beginPath(),n.roundRect(s+.5,u-c*.22,h,c*.44,1.5),n.fill(),n.stroke();break}case"fabio":{n.beginPath(),n.arc(s,l-c*.6,c*1.05,Math.PI,0),n.fill(),n.beginPath(),n.ellipse(s,l-c*1.28,c*.65,c*.28,.1,0,Math.PI*2),n.fill(),n.fillStyle="#2e1800",n.beginPath(),n.ellipse(s,l+c*.4,c*.55,c*.22,0,0,Math.PI),n.fill();break}case"phil":{n.fillStyle="#C8C8C4",n.beginPath(),n.arc(s,l-c*.6,c*1.08,Math.PI,0),n.fill(),n.fillStyle="#DDDDD8",n.beginPath(),n.ellipse(s,l-c*1.1,c*.55,c*.28,0,0,Math.PI*2),n.fill(),n.strokeStyle="#111",n.lineWidth=1.2,n.fillStyle="rgba(160,200,240,0.15)";const h=c*.82,u=l-c*.1;n.beginPath(),n.roundRect(s-h-.5,u-c*.22,h,c*.44,1.5),n.fill(),n.stroke(),n.beginPath(),n.roundRect(s+.5,u-c*.22,h,c*.44,1.5),n.fill(),n.stroke();break}case"joe":{n.beginPath(),n.arc(s,l-c*.6,c*1.05,Math.PI,0),n.fill(),n.beginPath(),n.ellipse(s-c*.1,l-c*1.3,c*.55,c*.26,-.1,0,Math.PI*2),n.fill(),n.fillStyle="#D4E800",n.fillRect(s-t*.25,t*.82,t*.5,t*.06);break}case"connie":{n.fillStyle="#E8D080",n.beginPath(),n.arc(s,l-c*.45,c*1.08,Math.PI,0),n.fill(),n.fillRect(s-c*1,l+c*.1,c*2,t*.16);break}case"mikayla":{n.fillStyle="#8B4513",n.beginPath(),n.arc(s,l-c*.45,c*1.05,Math.PI,0),n.fill(),n.fillRect(s-c*.9,l+c*.1,c*1.8,t*.14);break}}return n.strokeStyle=e.id==="jose"?"#E8A830":e.color+"99",n.lineWidth=e.id==="jose"?2.5:1.5,n.beginPath(),n.arc(s,s,s-1.5,0,Math.PI*2),n.stroke(),i}};_(Ls,"MAX_PICKS",3);let Pr=Ls;const il="https://tyqlcqhbxbbikvnjmqak.supabase.co",is="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR5cWxjcWhieGJiaWt2bmptcWFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4OTc4NjMsImV4cCI6MjA4NzQ3Mzg2M30.1_5ZGZI4if2p0egGTaSPae_igodEpex-lj5ZkernuuA",nl="tem_scores",Yh="tem-leaderboard-v1",Yc=100;async function nv(o){rv(o);try{await fetch(`${il}/rest/v1/${nl}`,{method:"POST",headers:{apikey:is,Authorization:`Bearer ${is}`,"Content-Type":"application/json",Prefer:"return=minimal"},body:JSON.stringify(o)})}catch(e){console.warn("[Leaderboard] submit failed (offline?)",e)}}async function sv(o,e=5){try{const t=encodeURIComponent(o.replace(/^⚔️\s*/,"").trim()),i=await fetch(`${il}/rest/v1/${nl}?job_title=ilike.*${t}*&order=completion_time_s.asc&limit=${e}`,{headers:{apikey:is,Authorization:`Bearer ${is}`}});if(i.ok){const n=await i.json();if(n.length>0)return n}}catch(t){console.warn("[Leaderboard] fetch failed (offline?)",t)}return sl().filter(t=>t.job_title.toLowerCase().includes(o.replace(/^⚔️\s*/,"").trim().toLowerCase())).sort((t,i)=>t.completion_time_s-i.completion_time_s).slice(0,e)}async function ov(o=10){try{const e=await fetch(`${il}/rest/v1/${nl}?order=payout.desc&limit=${o}`,{headers:{apikey:is,Authorization:`Bearer ${is}`}});if(e.ok){const t=await e.json();if(t.length>0)return t}}catch(e){console.warn("[Leaderboard] global fetch failed",e)}return sl().sort((e,t)=>t.payout-e.payout).slice(0,o)}const qh="tem-player-name";function $h(){return localStorage.getItem(qh)}function av(o){localStorage.setItem(qh,o.trim().slice(0,20))}function sl(){try{return JSON.parse(localStorage.getItem(Yh)??"[]")}catch{return[]}}function rv(o){const e=sl();e.unshift({...o,id:crypto.randomUUID(),created_at:new Date().toISOString()}),e.length>Yc&&(e.length=Yc),localStorage.setItem(Yh,JSON.stringify(e))}class lv{show(e){const t=$h();if(t){e(t);return}const i=document.createElement("div");i.style.cssText=`
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
    `,document.body.appendChild(i);const n=i.querySelector("#pn-input"),s=i.querySelector("#pn-btn");setTimeout(()=>n.focus(),100);const a=()=>{const r=n.value.trim()||"TEM Crew";av(r),i.remove(),e(r)};s.addEventListener("click",a),n.addEventListener("keydown",r=>{r.key==="Enter"&&a()})}}const Nn=[{name:"Spanish White",shots:{B:1,Y:1,L:0,R:0,G:0},hex:"#F8F4EC",difficulty:1,hint:"Minimal — barely any pigment"},{name:"Papercut",shots:{B:1,Y:2,L:1,R:0,G:0},hex:"#F0E8D0",difficulty:1,hint:"Double the Yellow, everything even"},{name:"Tranquil",shots:{B:2,Y:2,L:2,R:0,G:0},hex:"#E4DAC0",difficulty:1,hint:"All three equal — balanced warm white"},{name:"Sage Mist",shots:{B:1,Y:1,L:1,R:0,G:2},hex:"#DDE8D8",difficulty:1,hint:"Mostly base with a touch of Green"},{name:"Ivory",shots:{B:3,Y:3,L:3,R:0,G:0},hex:"#EDE0BC",difficulty:2,hint:"Classic — three equal shots each"},{name:"Bones",shots:{B:3,Y:1,L:3,R:0,G:0},hex:"#E8DFC8",difficulty:2,hint:"Like Ivory but drop Yellow to 1"},{name:"Bohemian",shots:{B:3,Y:2,L:3,R:0,G:0},hex:"#DDD0B0",difficulty:2,hint:"Between Ivory and Bones — Y at 2"},{name:"Terracotta",shots:{B:2,Y:3,L:2,R:3,G:0},hex:"#D4906A",difficulty:2,hint:"Add Red to warm it right up"},{name:"Dusty Adobe",shots:{B:3,Y:4,L:3,R:2,G:0},hex:"#C8A07A",difficulty:2,hint:"Yellow-forward with a red accent"},{name:"Sage Brush",shots:{B:3,Y:1,L:1,R:0,G:4},hex:"#A8B898",difficulty:2,hint:"Green forward, light on Yellow and Umber"},{name:"Sawtooth",shots:{B:6,Y:2,L:6,R:0,G:0},hex:"#D4C8A8",difficulty:3,hint:"Double the Black and Umber from Bones"},{name:"Atlas",shots:{B:5,Y:10,L:5,R:0,G:0},hex:"#D4B87A",difficulty:3,hint:"Heavy on Yellow — most of anything"},{name:"Raw Clay",shots:{B:3,Y:2,L:3,R:4,G:0},hex:"#C07850",difficulty:3,hint:"More Red than anything else"},{name:"Olive Drab",shots:{B:4,Y:3,L:3,R:0,G:4},hex:"#A0A870",difficulty:3,hint:"Even Green and Black, balanced Yellow+Umber"},{name:"Iron Rust",shots:{B:5,Y:2,L:4,R:5,G:0},hex:"#A86040",difficulty:3,hint:"Heavy Black and Red, light Yellow"},{name:"River Reed",shots:{B:4,Y:2,L:2,R:0,G:5},hex:"#889878",difficulty:3,hint:"Green dominant, Black second, minimal Yellow"}],gi=[{key:"B",label:"Black",color:"#2a2a2a",dot:"#666666",max:8},{key:"Y",label:"Dirty Yellow",color:"#C8A020",dot:"#E8C040",max:12},{key:"L",label:"Raw Umber",color:"#8B5E30",dot:"#AA7848",max:8},{key:"R",label:"Dirty Red",color:"#A04030",dot:"#CC5542",max:6},{key:"G",label:"Green",color:"#3A6030",dot:"#5A8850",max:8}];function Us(o){const e=parseInt(o.replace("#",""),16);return[e>>16&255,e>>8&255,e&255]}function Jh(o,e,t){return"#"+[o,e,t].map(i=>Math.max(0,Math.min(255,Math.round(i))).toString(16).padStart(2,"0")).join("")}function cv(o,e){const[t,i,n]=Us(o),[s,a,r]=Us(e);return Math.sqrt((t-s)**2+(i-a)**2+(n-r)**2)}function hv(o,e){return Math.max(0,Math.round(100-cv(o,e)*.45))}function La(o){const e={B:o.B??0,Y:o.Y??0,L:o.L??0,R:(o.R??0)*.1,G:o.G??0},t={B:e.B/8,Y:e.Y/12,L:e.L/8,R:e.R/.6,G:e.G/8};let i=0,n=0,s=0,a=0;for(const r of Nn){const l={B:r.shots.B/8,Y:r.shots.Y/12,L:r.shots.L/8,R:r.shots.R*.1/.6,G:r.shots.G/8},h=1/(Math.sqrt((t.B-l.B)**2+(t.Y-l.Y)**2+(t.L-l.L)**2+(t.R-l.R)**2+(t.G-l.G)**2)+.003),[u,d,f]=Us(r.hex);i+=u*h,n+=d*h,s+=f*h,a+=h}return Jh(i/a,n/a,s/a)}const Kh="tem-mixer-v4";function Es(){try{return new Set(JSON.parse(localStorage.getItem(Kh)||"[]"))}catch{return new Set}}function dv(o){try{const e=Es();e.add(o),localStorage.setItem(Kh,JSON.stringify([...e]))}catch{}}class uv{constructor(){_(this,"overlay",null);_(this,"canvas",null);_(this,"ctx",null);_(this,"rafId",0);_(this,"shots",{B:0,Y:0,L:0,R:0,G:0});_(this,"sel","B");_(this,"target",null);_(this,"timer",90);_(this,"timerInt",null);_(this,"solved",!1);_(this,"onDone",null);_(this,"W",400);_(this,"H",240);_(this,"jX",58);_(this,"jY",218);_(this,"bkX",200);_(this,"bkTopY",105);_(this,"bkBotY",168);_(this,"cnX",265);_(this,"cnY",218);_(this,"GRAVITY",520);_(this,"connX",265);_(this,"connDir",-1);_(this,"connSpeed",0);_(this,"connPauseT",0);_(this,"connMinX",0);_(this,"connMaxX",0);_(this,"cannonTipX",0);_(this,"cannonTipY",0);_(this,"aimAngle",-.78);_(this,"aimPower",360);_(this,"isAiming",!1);_(this,"hasFired",!1);_(this,"ball",null);_(this,"splats",[]);_(this,"connieHitT",0);_(this,"bucketFlashT",0);_(this,"bionichipTimer",10+Math.random()*6);_(this,"bionichipActive",!1);_(this,"bionichipT",0);_(this,"BIONIC_DURATION",2.2);_(this,"currentMix","#F8F6F0");_(this,"displayMix","#F8F6F0");_(this,"mixedResult","");_(this,"matchValue",0);_(this,"mixState","idle");_(this,"mixT",0);_(this,"dotEls",{B:[],Y:[],L:[],R:[],G:[]});_(this,"timerEl",null);_(this,"fireBtn",null);_(this,"mixBtn",null);_(this,"pigBtns",{})}show(e){this._cleanup(),this.solved=!1,this.timer=90,this.shots={B:0,Y:0,L:0,R:0,G:0},this.sel="B",this.ball=null,this.splats=[],this.connieHitT=0,this.bucketFlashT=0,this.bionichipActive=!1,this.bionichipT=0,this.bionichipTimer=10+Math.random()*6,this.currentMix="#F8F6F0",this.displayMix="#F8F6F0",this.mixState="idle",this.mixT=0,this.matchValue=0,this.mixedResult="",this.isAiming=!1,this.hasFired=!1,this.onDone=e??null;const t=Es(),i=Nn.filter(n=>!t.has(n.name));this.target=(i.length>0?i:Nn)[Math.floor(Math.random()*(i.length||Nn.length))],this._injectStyles(),this._buildUI(),this._selectPig("B"),this._startTimer(),this._startLoop()}hide(){this._cleanup()}_buildUI(){const e=document.createElement("div");e.id="mmv4-ov",e.style.cssText="position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,0.92);backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:center;font-family:system-ui,sans-serif;animation:mm4Fade 0.2s ease both;",document.body.appendChild(e),this.overlay=e;const t=document.createElement("div");t.style.cssText="background:linear-gradient(170deg,#1c1814,#0e0c0a);border:1px solid rgba(200,168,106,0.22);border-radius:22px;width:min(440px,97vw);max-height:97vh;overflow-y:auto;box-shadow:0 24px 80px rgba(0,0,0,0.95);animation:mm4Slide 0.28s cubic-bezier(.4,0,.2,1) both;",e.appendChild(t);const i=document.createElement("div");i.style.cssText="display:flex;align-items:flex-start;justify-content:space-between;padding:14px 16px 0;",i.innerHTML=`<div>
      <div style="color:#C8A86A;font-size:10px;font-weight:800;letter-spacing:4px;opacity:0.7;">TEM WORKSHOP</div>
      <div style="color:#fff;font-size:18px;font-weight:900;">🎨 MARBELLINO MIXER</div>
      <div style="color:rgba(200,168,106,0.5);font-size:11px;margin-top:2px;">Metal hip. Silicone. Bionic powers. Good luck.</div>
    </div>`;const n=document.createElement("button");n.textContent="✕",n.style.cssText="background:rgba(255,255,255,0.07);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.45);font-size:16px;width:34px;height:34px;border-radius:50%;cursor:pointer;flex-shrink:0;",n.addEventListener("click",()=>this._cleanup()),i.appendChild(n),t.appendChild(i);const s=document.createElement("div");s.style.cssText="display:flex;align-items:flex-start;gap:10px;padding:10px 16px 0;";const a=document.createElement("div");a.style.cssText="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;";const r=document.createElement("div");r.style.cssText=`width:56px;height:56px;border-radius:12px;border:2.5px solid rgba(200,168,106,0.5);background:${this.target.hex};box-shadow:0 4px 18px rgba(0,0,0,0.4);flex-shrink:0;`;const l="★".repeat(this.target.difficulty)+"☆".repeat(3-this.target.difficulty),c=document.createElement("div"),h=Object.entries(this.target.shots).filter(([,M])=>M>0).map(([M,y])=>`${M}:${y}`).join(" · ");c.innerHTML=`<div style="color:rgba(255,255,255,0.3);font-size:9px;font-weight:700;letter-spacing:2px;text-align:center;">TARGET</div><div id="mmv4-name" style="color:#fff;font-size:13px;font-weight:900;text-align:center;">${this.target.name}</div><div style="color:#FFD080;font-size:10px;font-weight:900;text-align:center;margin-top:2px;letter-spacing:0.5px;">${h}</div><div style="color:#C8A86A;font-size:10px;text-align:center;">${l}</div>`,a.appendChild(r),a.appendChild(c);const u=document.createElement("div");u.style.cssText="display:grid;grid-template-columns:repeat(4,1fr);gap:4px;flex:1;",Nn.forEach(M=>{const y=document.createElement("div"),R=M.name===this.target.name;if(y.style.cssText=`height:22px;border-radius:5px;background:${M.hex};border:${R?"2px solid #FFD700":"1.5px solid rgba(255,255,255,0.12)"};box-shadow:${R?"0 0 8px #FFD70099":"none"};transition:all 0.15s;cursor:default;position:relative;`,y.title=Es().has(M.name)?M.name:"???",Es().has(M.name)&&M.name!==this.target.name){y.style.opacity="0.55";const C=document.createElement("div");C.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:9px;",C.textContent="✓",y.appendChild(C)}u.appendChild(y)}),s.appendChild(a),s.appendChild(u),t.appendChild(s);const d=document.createElement("div");d.style.cssText="padding:10px 16px 0;position:relative;",this.canvas=document.createElement("canvas"),this.canvas.style.cssText="width:100%;border-radius:14px;border:1px solid rgba(255,255,255,0.07);background:#0a0806;box-shadow:inset 0 2px 20px rgba(0,0,0,0.8);touch-action:none;cursor:crosshair;display:block;",this._resizeCanvas(),d.appendChild(this.canvas),t.appendChild(d),this.ctx=this.canvas.getContext("2d");const f=document.createElement("div");f.style.cssText="text-align:center;color:rgba(255,120,50,0.7);font-size:10px;font-weight:700;padding:3px 16px 0;letter-spacing:1px;",f.textContent="🎯 MATCH THE RECIPE — skill of the shot counts!",t.appendChild(f),this.canvas.addEventListener("pointerdown",M=>{M.preventDefault(),!(this.ball||this.mixState==="mixing"||this.solved)&&(this.isAiming=!0,this._updateAim(M))},{passive:!1}),this.canvas.addEventListener("pointermove",M=>{this.isAiming&&this._updateAim(M)},{passive:!0}),this.canvas.addEventListener("pointerup",()=>{this.isAiming=!1});const g=document.createElement("div");g.style.cssText="display:flex;flex-direction:column;gap:6px;padding:8px 16px 0;";for(const M of gi){const y=M.key,R=document.createElement("div");R.id=`mmv4-pig-${y}`,R.style.cssText="display:flex;align-items:center;gap:9px;cursor:pointer;padding:4px 8px;border-radius:10px;border:1.5px solid transparent;transition:all 0.12s;";const C=document.createElement("div");C.style.cssText=`width:16px;height:16px;border-radius:4px;background:${M.color};border:1.5px solid rgba(255,255,255,0.15);flex-shrink:0;`;const A=document.createElement("div");A.style.cssText="color:rgba(255,255,255,0.7);font-size:11px;font-weight:700;width:80px;flex-shrink:0;",A.textContent=M.label;const I=document.createElement("div");I.style.cssText="display:flex;gap:3px;flex:1;align-items:center;flex-wrap:wrap;",this.dotEls[y]=[];for(let b=0;b<Math.min(M.max,12);b++){const P=document.createElement("div");P.style.cssText="width:10px;height:10px;border-radius:50%;border:1.5px solid rgba(255,255,255,0.1);background:transparent;transition:background 0.1s;flex-shrink:0;",I.appendChild(P),this.dotEls[y].push(P)}const T=document.createElement("div");T.id=`mmv4-cnt-${y}`,T.style.cssText=`color:${M.dot};font-size:12px;font-weight:900;min-width:24px;text-align:right;font-variant-numeric:tabular-nums;`,T.textContent="0",R.appendChild(C),R.appendChild(A),R.appendChild(I),R.appendChild(T),R.addEventListener("click",()=>this._selectPig(y)),g.appendChild(R),this.pigBtns[y]=R}t.appendChild(g);const v=document.createElement("div");v.style.cssText="padding:7px 16px 0;",v.innerHTML=`
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
        <span style="color:rgba(255,255,255,0.35);font-size:10px;font-weight:700;letter-spacing:2px;">MATCH</span>
        <span id="mmv4-pct" style="color:#C8A86A;font-size:14px;font-weight:900;">—</span>
      </div>
      <div style="background:rgba(255,255,255,0.06);border-radius:99px;height:7px;overflow:hidden;">
        <div id="mmv4-bar" style="height:100%;width:0%;border-radius:99px;background:linear-gradient(90deg,#C8A86A,#FFD080);transition:width 0.3s,background 0.3s;"></div>
      </div>
      <div id="mmv4-hint" style="color:rgba(200,168,106,0.4);font-size:11px;text-align:center;margin-top:3px;min-height:14px;"></div>
    `,t.appendChild(v);const m=document.createElement("div");m.style.cssText="display:flex;gap:9px;padding:8px 16px 14px;align-items:center;";const p=document.createElement("button");p.textContent="⌫",p.title="Remove last shot",p.style.cssText="background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:rgba(255,255,255,0.4);font-size:17px;width:46px;height:48px;border-radius:12px;cursor:pointer;flex-shrink:0;touch-action:manipulation;",p.addEventListener("click",()=>this._undoShot()),this.fireBtn=document.createElement("button"),this.fireBtn.style.cssText="flex:1;height:48px;border:none;border-radius:12px;font-size:13px;font-weight:900;letter-spacing:0.5px;cursor:pointer;touch-action:manipulation;background:linear-gradient(135deg,#8B2020,#5a1010);color:#FFaaaa;box-shadow:0 4px 16px rgba(200,30,30,0.25);transition:transform 0.1s;",this.fireBtn.textContent="🔴 AIM FIRST",this.fireBtn.addEventListener("pointerdown",()=>{this.fireBtn.style.transform="scale(0.97)"}),this.fireBtn.addEventListener("pointerup",()=>{this.fireBtn.style.transform="",this._fire()}),this.mixBtn=document.createElement("button"),this.mixBtn.style.cssText="width:68px;height:48px;border:none;border-radius:12px;font-size:12px;font-weight:900;cursor:pointer;touch-action:manipulation;background:linear-gradient(135deg,#8B4A00,#5A3000);color:#FFD080;flex-shrink:0;box-shadow:0 4px 12px rgba(200,100,0,0.2);transition:transform 0.1s;",this.mixBtn.textContent="🔩 MIX",this.mixBtn.addEventListener("pointerdown",()=>{this.mixBtn.style.transform="scale(0.97)"}),this.mixBtn.addEventListener("pointerup",()=>{this.mixBtn.style.transform="",this._triggerMix()});const w=document.createElement("div");w.style.cssText="display:flex;flex-direction:column;align-items:center;gap:1px;flex-shrink:0;",w.innerHTML='<span style="color:rgba(255,255,255,0.3);font-size:9px;letter-spacing:1px;">TIME</span>',this.timerEl=document.createElement("span"),this.timerEl.style.cssText="color:#fff;font-size:16px;font-weight:900;font-variant-numeric:tabular-nums;",this.timerEl.textContent="1:30",w.appendChild(this.timerEl),m.appendChild(p),m.appendChild(this.fireBtn),m.appendChild(this.mixBtn),m.appendChild(w),t.appendChild(m)}_updateAim(e){if(!this.canvas)return;const t=this.canvas.getBoundingClientRect(),i=this.canvas.width/t.width,n=this.canvas.height/t.height,s=(e.clientX-t.left)*i,a=(e.clientY-t.top)*n,r=s-this.jX,l=a-this.jY;if(this.aimAngle=Math.max(-1.25,Math.min(-.1,Math.atan2(l,r))),this.aimPower=Math.max(220,Math.min(500,Math.sqrt(r*r+l*l)*2.2)),this.fireBtn&&!this.hasFired){const c=gi.find(h=>h.key===this.sel);this.fireBtn.textContent=`💥 FIRE ${c.label.slice(0,3).toUpperCase()}`,this.fireBtn.style.background="linear-gradient(135deg,#CC2222,#882020)",this.fireBtn.style.color="#fff"}}_fire(){if(this.ball||this.mixState==="mixing"||this.solved)return;if(!this.hasFired&&Math.abs(this.aimAngle+.78)<.05&&this.aimPower===360){this.fireBtn&&(this.fireBtn.textContent="← Drag canvas to aim!");return}const e=gi.find(r=>r.key===this.sel);if(this.shots[this.sel]>=e.max){if(this.fireBtn){const r=this.fireBtn.textContent;this.fireBtn.textContent=`MAX ${e.max}!`,setTimeout(()=>{this.fireBtn&&(this.fireBtn.textContent=r||"💥 FIRE")},1200)}return}const t=34,i=this.jX+t*Math.cos(this.aimAngle),n=this.jY-52+t*Math.sin(this.aimAngle);this.cannonTipX=i,this.cannonTipY=n;const s=this.aimPower*Math.cos(this.aimAngle),a=this.aimPower*Math.sin(this.aimAngle);this.ball={x:i,y:n,vx:s,vy:a,r:7,color:gi.find(r=>r.key===this.sel).dot,pigKey:this.sel},this.hasFired=!0,this.fireBtn&&(this.fireBtn.textContent="🔴 IN FLIGHT…")}_selectPig(e){this.sel=e;const t=gi.find(i=>i.key===e);for(const i of gi){const n=this.pigBtns[i.key];n&&(i.key===e?(n.style.borderColor=t.dot,n.style.background=t.color+"22"):(n.style.borderColor="transparent",n.style.background="transparent"))}this.fireBtn&&!this.ball&&(this.fireBtn.textContent=`💥 FIRE ${t.label.slice(0,3).toUpperCase()}`,this.fireBtn.style.background="linear-gradient(135deg,#CC2222,#882020)",this.fireBtn.style.color="#fff")}_undoShot(){this.ball||this.mixState==="mixing"||this.shots[this.sel]>0&&(this.shots[this.sel]--,this._refreshDots(),this.currentMix=La(this.shots))}_refreshDots(){for(const e of gi){const t=e.key,i=this.shots[t];this.dotEls[t].forEach((s,a)=>{s.style.background=a<i?e.dot:"transparent",s.style.borderColor=a<i?e.dot+"88":"rgba(255,255,255,0.1)"});const n=document.getElementById(`mmv4-cnt-${t}`);n&&(n.textContent=String(i))}}_update(e){!this.solved&&this.mixState!=="success"&&(this.connPauseT>0?this.connPauseT-=e:(this.connX+=this.connDir*this.connSpeed*e,this.connX>=this.connMaxX&&(this.connX=this.connMaxX,this.connDir=-1,this.connPauseT=.25+Math.random()*.6),this.connX<=this.connMinX&&(this.connX=this.connMinX,this.connDir=1,this.connPauseT=.25+Math.random()*.6),!this.bionichipActive&&Math.random()<e*.3&&(this.connSpeed=(55+Math.random()*50)*(this.W/400)),this.bionichipTimer-=e,this.bionichipTimer<=0&&!this.bionichipActive&&(this.bionichipActive=!0,this.bionichipT=this.BIONIC_DURATION,this.connSpeed=(220+Math.random()*80)*(this.W/400)),this.bionichipActive&&(this.bionichipT-=e,this.bionichipT<=0&&(this.bionichipActive=!1,this.bionichipTimer=8+Math.random()*7,this.connSpeed=(55+Math.random()*50)*(this.W/400)))),this.cnX=Math.round(this.connX),this.bkX=Math.round(this.connX-62*(this.W/400)));const[t,i,n]=Us(this.currentMix),[s,a,r]=Us(this.displayMix),l=this.mixState==="mixing"?5:1.8;this.displayMix=Jh(s+(t-s)*l*e,a+(i-a)*l*e,r+(n-r)*l*e);for(let v=this.splats.length-1;v>=0;v--)this.splats[v].t+=e,this.splats[v].t>this.splats[v].maxT&&this.splats.splice(v,1);if(this.connieHitT>0&&(this.connieHitT-=e),this.bucketFlashT>0&&(this.bucketFlashT-=e),this.mixState==="mixing"&&(this.mixT+=e,this.mixT>2.2&&this._onMixDone()),(this.mixState==="success"||this.mixState==="fail")&&(this.mixT+=e),!this.ball)return;this.ball.x+=this.ball.vx*e,this.ball.y+=this.ball.vy*e,this.ball.vy+=this.GRAVITY*e;const c=54*(this.W/400),h=this.bkX,u=Math.abs(this.ball.x-h)<c/2,d=this.ball.y>this.bkTopY&&this.ball.y<this.bkBotY;if(u&&d){this._hitBucket();return}const f=Math.abs(this.ball.x-this.cnX)<18,g=this.ball.y>this.cnY-95&&this.ball.y<this.cnY;if(f&&g){this._hitConnie();return}(this.ball.y>this.H+10||this.ball.x>this.W+10||this.ball.y<-20)&&(this.ball=null,this._resetFireBtn())}_hitBucket(){if(!this.ball)return;const e=this.ball.pigKey,t=gi.find(i=>i.key===e);this.shots[e]<t.max&&(this.shots[e]++,this._refreshDots(),this.currentMix=La(this.shots),this.bucketFlashT=.5);for(let i=0;i<12;i++)this.splats.push({x:this.bkX+(Math.random()-.5)*30,y:this.bkTopY+10+Math.random()*20,color:this.ball.color,t:0,maxT:.8+Math.random()*.4});this.ball=null,this._resetFireBtn()}_hitConnie(){if(!this.ball)return;this.connieHitT=1.8;for(let t=0;t<18;t++)this.splats.push({x:this.ball.x+(Math.random()-.5)*25,y:this.ball.y+(Math.random()-.5)*25,color:this.ball.color,t:0,maxT:1+Math.random()*.5});const e=document.getElementById("mmv4-hint");if(e){const t=["JOSE!!! 😤","WATCH IT!!! 😡","OMG!!! 🤬","MY UNIFORM! 😤","YOU GOT IT ON MY TITS!!! 😤","JOSE YOU IDIOT!!! 😡"];e.textContent=t[Math.floor(Math.random()*t.length)],e.style.color="#FF6644",setTimeout(()=>{e&&(e.textContent="",e.style.color="rgba(200,168,106,0.4)")},2e3)}this.ball=null,this._resetFireBtn()}_resetFireBtn(){if(this.fireBtn){const e=gi.find(t=>t.key===this.sel);this.fireBtn.textContent=`💥 FIRE ${e.label.slice(0,3).toUpperCase()}`}}_triggerMix(){if(this.mixState==="mixing"||this.mixState==="success"||this.solved)return;if(Object.values(this.shots).reduce((t,i)=>t+i,0)===0){const t=document.getElementById("mmv4-hint");t&&(t.textContent="Get some shots in the bucket first!",setTimeout(()=>{t&&(t.textContent="")},1800));return}this.ball=null,this.mixState="mixing",this.mixT=0,this.mixedResult=La(this.shots),this.matchValue=hv(this.mixedResult,this.target.hex),this.mixBtn&&(this.mixBtn.style.background="linear-gradient(135deg,#226622,#144414)",this.mixBtn.style.color="#88FFcc",this.mixBtn.textContent="⚙️ …"),this.fireBtn&&(this.fireBtn.disabled=!0)}_onMixDone(){const e=this.matchValue,t=document.getElementById("mmv4-bar"),i=document.getElementById("mmv4-pct"),n=document.getElementById("mmv4-hint");t&&(t.style.width=`${e}%`,t.style.background=e>=82?"linear-gradient(90deg,#44DD88,#88FFCC)":e>=55?"linear-gradient(90deg,#C8A86A,#FFD080)":"linear-gradient(90deg,#882222,#CC4433)"),i&&(i.textContent=`${e}%`,i.style.color=e>=82?"#44DD88":e>=55?"#C8A86A":"#FF6644"),e>=82?this._triggerSuccess(e):(this.mixState="idle",n&&(n.textContent=e>=65?"Getting close — adjust the mix":"Way off — clear and start again"),this.mixBtn&&(this.mixBtn.style.background="linear-gradient(135deg,#8B4A00,#5A3000)",this.mixBtn.style.color="#FFD080",this.mixBtn.textContent="🔩 MIX"),this.fireBtn&&(this.fireBtn.disabled=!1))}_triggerSuccess(e){if(this.solved)return;this.solved=!0,this._stopTimer(),dv(this.target.name),this.mixState="success",this.mixT=0;const t=document.getElementById("mmv4-name");t&&(t.style.color="#44DD88");const i=document.getElementById("mmv4-hint");i&&(i.textContent=`✓ Cracked! (${Es().size}/${Nn.length} done)`,i.style.color="#44DD8888"),this.mixBtn&&(this.mixBtn.textContent="🏆 CRACKED!",this.mixBtn.style.background="linear-gradient(135deg,#2a8a44,#1a6030)",this.mixBtn.style.color="#88FFcc",this.mixBtn.disabled=!0),this.fireBtn&&(this.fireBtn.disabled=!0);const n=Math.round((e-82)/18*40);setTimeout(()=>{var s;this._cleanup(),(s=this.onDone)==null||s.call(this,n)},4500)}_triggerTimeout(){if(this.solved)return;this._stopTimer(),this.mixState="fail",this.mixT=0,this.timerEl&&(this.timerEl.textContent="0:00",this.timerEl.style.color="#FF4444");const e=document.getElementById("mmv4-name");e&&(e.style.color="#FF8866"),this.mixBtn&&(this.mixBtn.disabled=!1,this.mixBtn.style.background="rgba(100,30,20,0.9)",this.mixBtn.style.color="#FF9988",this.mixBtn.textContent="Close",this.mixBtn.addEventListener("click",()=>{var t;this._cleanup(),(t=this.onDone)==null||t.call(this,0)},{once:!0}))}_startLoop(){let e=performance.now();const t=i=>{if(!this.canvas)return;const n=Math.min((i-e)/1e3,.05);e=i,this._update(n),this._drawScene(),this.rafId=requestAnimationFrame(t)};this.rafId=requestAnimationFrame(t)}_drawScene(){if(!this.canvas||!this.ctx)return;const e=this.ctx,t=this.W,i=this.H;e.clearRect(0,0,t,i);const n=e.createLinearGradient(0,0,0,i);n.addColorStop(0,"#1e1610"),n.addColorStop(1,"#090704"),e.fillStyle=n,e.fillRect(0,0,t,i),e.strokeStyle="rgba(255,255,255,0.03)",e.lineWidth=1;for(let s=20;s<i;s+=22)e.beginPath(),e.moveTo(0,s),e.lineTo(t,s),e.stroke();e.fillStyle="rgba(200,168,106,0.08)",e.fillRect(0,i-18,t,18),e.strokeStyle="rgba(200,168,106,0.2)",e.lineWidth=1,e.beginPath(),e.moveTo(0,i-18),e.lineTo(t,i-18),e.stroke(),e.save(),e.setLineDash([4,6]),e.strokeStyle="rgba(200,100,30,0.15)",e.lineWidth=1,e.beginPath(),e.moveTo(this.connMinX,i-14),e.lineTo(this.connMaxX,i-14),e.stroke(),e.setLineDash([]),e.restore(),this._drawBucket(e),this._drawConnie(e),this._drawJose(e),this.isAiming&&!this.ball&&this._drawArcPreview(e),this.ball&&this._drawBall(e),this._drawSplats(e)}_drawBucket(e){const t=this.bkX,i=this.bkTopY,n=this.bkBotY,s=n-i,a=this.W/400,r=54*a,l=38*a;e.save(),e.beginPath(),e.moveTo(t-r/2,i),e.lineTo(t+r/2,i),e.lineTo(t+l/2,n),e.lineTo(t-l/2,n),e.closePath(),e.clip(),e.fillStyle="#F5F0E8",e.fill();const c=Object.values(this.shots).reduce((d,f)=>d+f,0),h=Math.min(1,c/22);if(h>0){const d=n-s*h,f=l+(r-l)*h;e.beginPath(),e.moveTo(t-f/2,d),e.lineTo(t+f/2,d),e.lineTo(t+l/2,n),e.lineTo(t-l/2,n),e.closePath(),e.fillStyle=this.displayMix,e.fill(),e.strokeStyle="rgba(255,255,255,0.28)",e.lineWidth=2,e.beginPath();const g=performance.now()/1e3;e.moveTo(t-f/2+4,d+2),e.bezierCurveTo(t-f/4,d-2+Math.sin(g*2)*2,t+f/4,d+3+Math.sin(g*2+1)*2,t+f/2-4,d+2),e.stroke()}if(this.mixState==="mixing"){const d=this.mixT;for(let f=0;f<4;f++){const g=d*8+f*(Math.PI*2/4),v=12+Math.sin(d*4+f)*5;e.beginPath(),e.arc(t+Math.cos(g)*v,n-s*.35+Math.sin(g)*v*.35,4,0,Math.PI*2),e.fillStyle=`rgba(255,255,255,${.12+Math.sin(g)*.06})`,e.fill()}}e.restore();const u=this.bucketFlashT>0?.7+Math.sin(this.bucketFlashT*30)*.3:.5;e.save(),e.beginPath(),e.moveTo(t-r/2,i),e.lineTo(t+r/2,i),e.lineTo(t+l/2,n),e.lineTo(t-l/2,n),e.closePath(),e.strokeStyle=this.mixState==="success"?`rgba(68,221,136,${u})`:`rgba(200,168,106,${u})`,e.lineWidth=2.5,e.stroke(),e.beginPath(),e.ellipse(t,i,r/2,5.5*a,0,0,Math.PI*2),e.strokeStyle="rgba(200,168,106,0.65)",e.lineWidth=2,e.stroke(),e.fillStyle="rgba(220,190,140,0.12)",e.fill(),e.beginPath(),e.arc(t,i-3*a,r/2-5*a,Math.PI,0),e.strokeStyle="#A08050",e.lineWidth=3,e.stroke(),e.font=`bold ${Math.round(10*a)}px system-ui`,e.fillStyle="rgba(200,168,106,0.5)",e.textAlign="center",e.fillText("TEM",t,n-s*.4),e.textAlign="start",e.restore()}_drawConnie(e){const t=this.cnX,i=this.cnY,n="#F0C8A0",s="#111",a=88*(this.W/400),r=this.connieHitT>0,l=r?Math.sin(this.connieHitT*20)*4:0,c=this.mixState==="mixing",h=this.mixState==="success",u=Math.abs(this.connDir)>0&&this.connPauseT<=0;e.save(),e.translate(l,0),e.fillStyle="#111",e.fillRect(t-10*(this.W/400),i-12*(this.W/400),10*(this.W/400),12*(this.W/400)),e.fillRect(t+2*(this.W/400),i-12*(this.W/400),10*(this.W/400),12*(this.W/400)),e.fillStyle="#1a1a2a",e.fillRect(t-9*(this.W/400),i-a*.44,9*(this.W/400),a*.44-10*(this.W/400)),e.fillRect(t+2*(this.W/400),i-a*.44,9*(this.W/400),a*.44-10*(this.W/400)),e.fillStyle=s,e.fillRect(t-12*(this.W/400),i-a*.8,24*(this.W/400),a*.37),e.fillStyle=n,e.fillRect(t-4*(this.W/400),i-a*.84,8*(this.W/400),a*.055),e.beginPath(),e.arc(t,i-a*.87,a*.08,0,Math.PI*2),e.fill(),e.fillStyle="#D4B840",e.beginPath(),e.arc(t,i-a*.87-a*.04,a*.1,Math.PI,0),e.fill(),e.fillRect(t-a*.1,i-a*.87,a*.2,a*.13),e.strokeStyle="#FFE070",e.lineWidth=2.5*(this.W/400),e.lineCap="round";const d=(u?1.8:1)*this.connDir;e.beginPath(),e.moveTo(t-8*(this.W/400),i-a*.87),e.quadraticCurveTo(t-18*(this.W/400)+d*4,i-a*.92,t-14*(this.W/400)+d*6,i-a*.98),e.stroke(),e.beginPath(),e.moveTo(t+6*(this.W/400),i-a*.87),e.quadraticCurveTo(t+16*(this.W/400)+d*4,i-a*.91,t+12*(this.W/400)+d*6,i-a*.96),e.stroke(),e.lineCap="butt";const f=this.bkX-t,g=this.bkTopY-(i-a*.7),v=Math.atan2(g,f);if(c||h){e.strokeStyle=s,e.lineWidth=8*(this.W/400),e.lineCap="round",e.beginPath(),e.moveTo(t-10*(this.W/400),i-a*.72),e.quadraticCurveTo(t-20*(this.W/400),i-a*.6,this.bkX+20*(this.W/400),this.bkTopY+5*(this.W/400)),e.stroke();const m=performance.now()/80;e.save(),e.translate(this.bkX+18*(this.W/400),this.bkTopY+4*(this.W/400)),e.rotate(v),e.fillStyle="#333",e.strokeStyle="#666",e.lineWidth=1,e.beginPath(),e.roundRect(-26*(this.W/400),-6*(this.W/400),34*(this.W/400),12*(this.W/400),3),e.fill(),e.stroke(),e.save(),e.translate(-30*(this.W/400),0),e.rotate(m);const p=e.createRadialGradient(0,0,0,0,0,11*(this.W/400));p.addColorStop(0,"rgba(200,168,106,0.7)"),p.addColorStop(1,"transparent"),e.fillStyle=p,e.beginPath(),e.arc(0,0,11*(this.W/400),0,Math.PI*2),e.fill(),e.restore(),e.restore()}else e.strokeStyle=s,e.lineWidth=8*(this.W/400),e.lineCap="round",e.beginPath(),e.moveTo(t-10*(this.W/400),i-a*.72),e.quadraticCurveTo(t-20*(this.W/400),i-a*.55,this.bkX+16*(this.W/400),this.bkTopY-2*(this.W/400)),e.stroke(),e.beginPath(),e.arc(this.bkX+14*(this.W/400),this.bkTopY-4*(this.W/400),4.5*(this.W/400),0,Math.PI*2),e.fillStyle=n,e.fill();if(e.strokeStyle=s,e.lineWidth=8*(this.W/400),e.beginPath(),e.moveTo(t+10*(this.W/400),i-a*.72),e.lineTo(t+16*(this.W/400),i-a*.48),e.stroke(),e.beginPath(),e.arc(t+16*(this.W/400),i-a*.47,4.5*(this.W/400),0,Math.PI*2),e.fillStyle=n,e.fill(),e.lineCap="butt",this.bionichipActive){const m=performance.now()/120,p=.35+Math.sin(m)*.2,w=i-a*.35,M=e.createRadialGradient(t,w,2*(this.W/400),t,w,22*(this.W/400));M.addColorStop(0,`rgba(160,80,255,${p*1.2})`),M.addColorStop(.5,`rgba(100,40,200,${p})`),M.addColorStop(1,"transparent"),e.fillStyle=M,e.beginPath(),e.ellipse(t,w,22*(this.W/400),14*(this.W/400),0,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle=`rgba(200,140,255,${.6+Math.sin(m*3)*.3})`,e.lineWidth=1.5*(this.W/400),e.lineCap="round";for(let y=0;y<4;y++){const R=m+y*Math.PI/2,C=14*(this.W/400),A=t+Math.cos(R)*C,I=w+Math.sin(R)*C*.6;e.beginPath(),e.moveTo(t+Math.cos(R+.3)*6*(this.W/400),w+Math.sin(R+.3)*4*(this.W/400)),e.lineTo(A,I),e.stroke()}e.restore()}r&&(e.font=`bold ${Math.round(11*(this.W/400))}px system-ui`,e.fillStyle="#FF4422",e.textAlign="center",e.fillText(this.bionichipActive?"OW MY SILICONE!! 😱":"JOSE!!! 😤",t,i-a-6*(this.W/400)),e.textAlign="start"),this.bionichipActive?(e.save(),e.globalAlpha=.85+Math.sin(performance.now()/80)*.15,e.font=`bold ${Math.round(11*(this.W/400))}px system-ui`,e.fillStyle="#CC88FF",e.textAlign="center",e.fillText("⚡ BIONIC HIP!",t,i-a-4*(this.W/400)),e.restore()):u&&this.connSpeed>80*(this.W/400)&&(e.save(),e.globalAlpha=.5,e.fillStyle="#FF9944",e.font=`bold ${Math.round(10*(this.W/400))}px system-ui`,e.textAlign="center",e.fillText(this.connDir<0?"←":"→",t,i-a-2*(this.W/400)),e.restore()),e.font=`bold ${Math.round(8*(this.W/400))}px system-ui`,e.fillStyle="rgba(255,200,80,0.65)",e.textAlign="center",e.fillText("CONNIE",t,i+10*(this.W/400)),e.textAlign="start",e.restore()}_drawJose(e){const t=this.jX,i=this.jY,n="#C88060",s="#111",a=90*(this.W/400),r=34*(this.W/400),l=this.W/400,c=t+r*Math.cos(this.aimAngle),h=i-52*l+r*Math.sin(this.aimAngle);this.cannonTipX=c,this.cannonTipY=h,e.save(),e.translate(t,i-52*l),e.rotate(this.aimAngle);const u=e.createLinearGradient(0,-9*l,0,9*l);u.addColorStop(0,"#444"),u.addColorStop(.5,"#777"),u.addColorStop(1,"#333"),e.fillStyle=u,e.beginPath(),e.roundRect(0,-9*l,r,18*l,4),e.fill(),e.strokeStyle="#222",e.lineWidth=1.5,e.beginPath(),e.roundRect(0,-9*l,r,18*l,4),e.stroke(),e.fillStyle="#888",e.beginPath(),e.ellipse(r,0,5*l,9*l,0,0,Math.PI*2),e.fill(),e.strokeStyle="#555",e.lineWidth=3*l,[10,20].forEach(v=>{e.beginPath(),e.moveTo(v*l,-9*l),e.lineTo(v*l,9*l),e.stroke()}),e.restore(),e.fillStyle="#3a2a1a",e.beginPath(),e.roundRect(t-6*l,i-62*l,16*l,18*l,3),e.fill(),e.beginPath(),e.arc(t+4*l,i-50*l,8*l,0,Math.PI*2),e.fillStyle="#555",e.fill(),e.strokeStyle="#888",e.lineWidth=1.5,e.stroke(),e.strokeStyle="#333",e.lineWidth=1.5;for(let v=0;v<Math.PI*2;v+=Math.PI/3)e.beginPath(),e.moveTo(t+4*l,i-50*l),e.lineTo(t+4*l+Math.cos(v)*7*l,i-50*l+Math.sin(v)*7*l),e.stroke();if(this.ball&&Math.sqrt((this.ball.x-c)**2+(this.ball.y-h)**2)<40*l){e.save(),e.globalAlpha=.8;const v=e.createRadialGradient(c,h,0,c,h,18*l);v.addColorStop(0,"rgba(255,200,50,0.9)"),v.addColorStop(1,"transparent"),e.fillStyle=v,e.beginPath(),e.arc(c,h,18*l,0,Math.PI*2),e.fill(),e.restore()}e.fillStyle="#0a0a0a",e.fillRect(t-10*l,i-12*l,10*l,12*l),e.fillRect(t+2*l,i-12*l,10*l,12*l),e.fillStyle="#1a1a2a",e.fillRect(t-9*l,i-a*.44,9*l,a*.44-10*l),e.fillRect(t+2*l,i-a*.44,9*l,a*.44-10*l),e.fillStyle=s,e.fillRect(t-12*l,i-a*.8,24*l,a*.37),e.fillStyle=n,e.fillRect(t-4*l,i-a*.84,8*l,a*.055);const d=i-a*.88,f=a*.08,g=[{dx:-9,swing:-4,len:32},{dx:-5,swing:-2,len:38},{dx:-1,swing:2,len:35},{dx:3,swing:3,len:28},{dx:7,swing:1,len:24},{dx:-12,swing:-6,len:22}];e.lineCap="round",g.forEach((v,m)=>{e.strokeStyle=m%2===0?"#2a1000":"#3a1a00",e.lineWidth=5*l,e.beginPath(),e.moveTo(t+v.dx*l,d-f*.3),e.bezierCurveTo(t+v.dx*l+v.swing*l*.5,d+v.len*l*.35,t+v.dx*l+v.swing*l,d+v.len*l*.7,t+v.dx*l+v.swing*l*.8+Math.sin(m)*2*l,d+v.len*l),e.stroke()}),e.lineCap="butt",e.fillStyle=n,e.beginPath(),e.arc(t,d,f,0,Math.PI*2),e.fill(),e.fillStyle="#3a1a00",e.beginPath(),e.arc(t-3*l,d-2*l,2*l,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(t+3*l,d-2*l,2*l,0,Math.PI*2),e.fill(),e.strokeStyle="#8a4820",e.lineWidth=1.5,e.beginPath(),e.arc(t,d+2*l,4*l,.2,Math.PI-.2),e.stroke(),e.strokeStyle="#8B4A00",e.lineWidth=3.5*l,e.beginPath(),e.arc(t,d,f*1.05,Math.PI*.75,Math.PI*1.85),e.stroke(),e.strokeStyle=s,e.lineWidth=8*l,e.lineCap="round",e.beginPath(),e.moveTo(t+10*l,i-a*.72),e.quadraticCurveTo(t+16*l,i-a*.58,t+10*l,i-52*l+4*l),e.stroke(),e.beginPath(),e.arc(t+10*l,i-49*l,4.5*l,0,Math.PI*2),e.fillStyle=n,e.fill(),e.strokeStyle=s,e.lineWidth=8*l,e.beginPath(),e.moveTo(t-10*l,i-a*.72),e.lineTo(t-16*l,i-a*.48),e.stroke(),e.beginPath(),e.arc(t-16*l,i-a*.47,4.5*l,0,Math.PI*2),e.fillStyle=n,e.fill(),e.lineCap="butt",e.font=`bold ${Math.round(8*l)}px system-ui`,e.fillStyle="rgba(255,220,100,0.65)",e.textAlign="center",e.fillText("JOSE",t,i+10*l),e.textAlign="start"}_drawArcPreview(e){const t=gi.find(r=>r.key===this.sel),i=this.aimPower*Math.cos(this.aimAngle),n=this.aimPower*Math.sin(this.aimAngle),s=this.cannonTipX,a=this.cannonTipY;e.save();for(let r=0;r<28;r++){const l=r*.055,c=s+i*l,h=a+n*l+.5*this.GRAVITY*l*l;if(h>this.H||c>this.W)break;e.globalAlpha=Math.max(0,.7-r*.022),e.fillStyle=t.dot,e.shadowColor=t.dot,e.shadowBlur=6,e.beginPath(),e.arc(c,h,3-r*.06,0,Math.PI*2),e.fill()}e.shadowBlur=0,e.globalAlpha=1,e.restore()}_drawBall(e){if(!this.ball)return;const t=this.ball;e.save(),e.shadowColor=t.color,e.shadowBlur=12,e.fillStyle=t.color,e.beginPath(),e.arc(t.x,t.y,t.r,0,Math.PI*2),e.fill(),e.globalAlpha=.5,e.fillStyle="rgba(255,255,255,0.7)",e.beginPath(),e.arc(t.x-2,t.y-2,t.r*.4,0,Math.PI*2),e.fill(),e.shadowBlur=0,e.globalAlpha=1,e.restore()}_drawSplats(e){for(const t of this.splats)e.save(),e.globalAlpha=Math.max(0,(1-t.t/t.maxT)*.8),e.fillStyle=t.color,e.beginPath(),e.arc(t.x,t.y,4+t.t*8,0,Math.PI*2),e.fill(),e.restore()}_startTimer(){this.timerInt=setInterval(()=>{if(!this.solved){if(this.timer--,this.timerEl){const e=Math.floor(this.timer/60),t=this.timer%60;this.timerEl.textContent=`${e}:${t.toString().padStart(2,"0")}`,this.timer<=20&&(this.timerEl.style.color="#FF6644"),this.timer<=10&&(this.timerEl.style.animation="mm4TimerPulse 0.5s ease infinite alternate")}this.timer<=0&&this._triggerTimeout()}},1e3)}_stopTimer(){this.timerInt&&(clearInterval(this.timerInt),this.timerInt=null)}_resizeCanvas(){var n;if(!this.canvas)return;const e=Math.min(440,window.innerWidth*.97)-32,t=e/400;this.W=Math.round(e),this.H=Math.round(240*t),this.canvas.width=this.W,this.canvas.height=this.H,this.jX=Math.round(58*t),this.jY=Math.round(218*t),this.bkTopY=Math.round(105*t),this.bkBotY=Math.round(168*t),this.cnY=Math.round(218*t),this.connMinX=Math.round(200*t),this.connMaxX=Math.round(355*t),this.connX=Math.round(300*t),this.cnX=Math.round(this.connX),this.bkX=Math.round(this.connX-62*t);const i=((n=this.target)==null?void 0:n.difficulty)??1;this.connSpeed=(50+i*22)*t}_cleanup(){var e;this._stopTimer(),cancelAnimationFrame(this.rafId),(e=document.getElementById("mmv4-ov"))==null||e.remove(),this.overlay=null,this.canvas=null,this.ctx=null}_injectStyles(){if(document.getElementById("mmv4-styles"))return;const e=document.createElement("style");e.id="mmv4-styles",e.textContent=`
      @keyframes mm4Fade  { from{opacity:0}to{opacity:1} }
      @keyframes mm4Slide { from{opacity:0;transform:translateY(28px)scale(0.96)}to{opacity:1;transform:translateY(0)scale(1)} }
      @keyframes mm4TimerPulse { from{opacity:1}to{opacity:0.3} }
    `,document.head.appendChild(e)}}class fv{constructor(){_(this,"_el",null);_(this,"_timer",null)}show(e,t,i){this.hide();const n=document.createElement("div");n.id="battle-screen-ov",n.style.cssText=`
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
      `,document.head.appendChild(f)}r.appendChild(c);const h=this._makeRivalPanel(t);r.appendChild(h),n.appendChild(r);const u=document.createElement("div");u.style.cssText=`
      width:100%; text-align:center;
      padding:16px 0 24px; position:relative; z-index:2;
    `;const d=document.createElement("div");d.id="battle-countdown",d.style.cssText=`
      font-size:clamp(18px,5vw,28px); font-weight:900; color:#FFD700;
      letter-spacing:2px;
    `,d.textContent="⚔️ BATTLE STARTS IN 3...",u.appendChild(d),n.appendChild(u),document.body.appendChild(n),this._el=n,this._timer=setTimeout(()=>{d.style.animation="battle-countdown-pulse 0.6s ease",d.textContent="⚔️ BATTLE STARTS IN 2...",this._timer=setTimeout(()=>{d.style.animation="battle-countdown-pulse 0.6s ease",d.textContent="⚔️ BATTLE STARTS IN 1...",this._timer=setTimeout(()=>{d.style.animation="",d.style.color="#FF4444",d.style.fontSize="clamp(22px,6vw,36px)",d.textContent="🚨 GO GO GO!",this._timer=setTimeout(()=>{this.hide(),i()},600)},1e3)},1e3)},1e3)}hide(){var e;this._timer&&(clearTimeout(this._timer),this._timer=null),(e=this._el)==null||e.remove(),this._el=null}_makeCrewPanel(e,t,i,n){const s=document.createElement("div");s.style.cssText=`
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
    `,a.textContent=e,s.appendChild(a);const r=el,l=[],c=r.find(h=>h.id==="jose");return c&&l.push(c),t.filter(h=>h!=="jose").forEach(h=>{const u=r.find(d=>d.id===h);u&&l.push(u)}),l.slice(0,3).forEach((h,u)=>{const d=document.createElement("div");d.style.cssText="display:flex;flex-direction:column;align-items:center;gap:3px;";const f=this._makePlayerAvatar(h,60);d.appendChild(f);const g=document.createElement("div");if(g.style.cssText="color:#fff;font-size:clamp(8px,2vw,11px);font-weight:900;text-align:center;",g.textContent=h.name,d.appendChild(g),u===0){const v=document.createElement("div");v.style.cssText=`
          background:#E8A830;color:#000;font-size:7px;font-weight:900;
          padding:1px 5px;border-radius:8px;
        `,v.textContent="MASCOT",d.appendChild(v)}s.appendChild(d)}),s}_makeRivalPanel(e){const t=document.createElement("div");t.style.cssText=`
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
    `,n.textContent=`"${e.tagline}"`,t.appendChild(n),e.members.forEach(s=>{const a=document.createElement("div");a.style.cssText="display:flex;flex-direction:column;align-items:center;gap:3px;";const r=this._makeRivalAvatar(s,60);a.appendChild(r);const l=document.createElement("div");l.style.cssText="color:#fff;font-size:clamp(8px,2vw,11px);font-weight:900;text-align:center;",l.textContent=s.name,a.appendChild(l),t.appendChild(a)}),t}_makePlayerAvatar(e,t){const i=document.createElement("canvas");i.width=t,i.height=t,i.style.cssText="border-radius:50%;display:block;";const n=i.getContext("2d"),s=t/2;n.fillStyle=e.locked?"#1a0800":"#1a1a2a",n.beginPath(),n.arc(s,s,s,0,Math.PI*2),n.fill();const a=t*.44,r=t*.22;switch(n.fillStyle=e.skinTone,n.fillRect(s-t*.07,t*.62,t*.14,t*.22),n.fillStyle=e.skinTone,n.beginPath(),n.ellipse(s,a,r*.88,r,0,0,Math.PI*2),n.fill(),n.fillStyle=e.hairColor,n.strokeStyle=e.hairColor,e.id){case"jose":{n.lineCap="round",[{dx:-10,len:t*.3,w:2.5},{dx:-4,len:t*.34,w:3},{dx:2,len:t*.32,w:2.5},{dx:7,len:t*.28,w:2}].forEach(c=>{n.lineWidth=c.w,n.beginPath(),n.moveTo(s+c.dx,a-r*.1),n.bezierCurveTo(s+c.dx-2,a+c.len*.5,s+c.dx+2,a+c.len*.8,s+c.dx,a+c.len),n.stroke()}),n.fillStyle=e.hairColor,n.beginPath(),n.arc(s,a-r*.55,r*1.02,Math.PI,0),n.fill();break}default:{n.beginPath(),n.arc(s,a-r*.55,r*1.05,Math.PI,0),n.fill(),n.beginPath(),n.ellipse(s,a-r*1.2,r*.6,r*.28,0,0,Math.PI*2),n.fill();break}}return n.strokeStyle="#2ECC4099",n.lineWidth=2,n.beginPath(),n.arc(s,s,s-1.5,0,Math.PI*2),n.stroke(),i}_makeRivalAvatar(e,t){const i=document.createElement("canvas");i.width=t,i.height=t,i.style.cssText="border-radius:50%;display:block;";const n=i.getContext("2d"),s=t/2,a=t*.44,r=t*.22;return n.fillStyle="#1a0a0a",n.beginPath(),n.arc(s,s,s,0,Math.PI*2),n.fill(),n.fillStyle=e.skinTone,n.fillRect(s-t*.07,t*.62,t*.14,t*.22),n.fillStyle=e.skinTone,n.beginPath(),n.ellipse(s,a,r*.88,r,0,0,Math.PI*2),n.fill(),this._drawRivalHair(n,e.hairStyle,e.hairColor,s,a,r,t),n.strokeStyle=e.accentColor+"99",n.lineWidth=2,n.beginPath(),n.arc(s,s,s-1.5,0,Math.PI*2),n.stroke(),i}_drawRivalHair(e,t,i,n,s,a,r){switch(e.fillStyle=i,e.strokeStyle=i,t){case"buzz":{e.beginPath(),e.arc(n,s-a*.45,a*1.04,Math.PI,0),e.fill(),e.fillStyle=i+"aa";for(let l=-3;l<=3;l++)e.fillRect(n+l*4-1,s-a*1.25,2,a*.32);break}case"afro":{e.beginPath(),e.arc(n,s-a*.5,a*1.6,0,Math.PI*2),e.fill(),e.fillStyle=i+"44",e.beginPath(),e.arc(n-a*.3,s-a*1.2,a*.5,0,Math.PI*2),e.fill();break}case"bald":{e.fillStyle="rgba(255,255,255,0.12)",e.beginPath(),e.ellipse(n-a*.15,s-a*.85,a*.35,a*.18,-.3,0,Math.PI*2),e.fill();break}case"long":{e.beginPath(),e.arc(n,s-a*.5,a*1.05,Math.PI,0),e.fill(),e.beginPath(),e.moveTo(n-a*.9,s-a*.1),e.bezierCurveTo(n-a*1.1,s+a*.5,n-a*1,s+a*1.2,n-a*.7,s+a*1.5),e.lineTo(n-a*.3,s+a*1.5),e.bezierCurveTo(n-a*.6,s+a*1,n-a*.5,s+a*.4,n-a*.7,s),e.fill(),e.beginPath(),e.moveTo(n+a*.9,s-a*.1),e.bezierCurveTo(n+a*1.1,s+a*.5,n+a*1,s+a*1.2,n+a*.7,s+a*1.5),e.lineTo(n+a*.3,s+a*1.5),e.bezierCurveTo(n+a*.6,s+a*1,n+a*.5,s+a*.4,n+a*.7,s),e.fill();break}case"short":{e.beginPath(),e.arc(n,s-a*.55,a*1.05,Math.PI,0),e.fill(),e.beginPath(),e.ellipse(n-a*.1,s-a*1.3,a*.58,a*.26,-.1,0,Math.PI*2),e.fill();break}case"slicked":case"slick":{e.beginPath(),e.arc(n,s-a*.55,a*1.05,Math.PI,0),e.fill(),e.strokeStyle="#00000044",e.lineWidth=1.5,e.beginPath(),e.moveTo(n-a*.2,s-a*1.4),e.lineTo(n-a*.2,s-a*.6),e.stroke(),e.fillStyle=i+"55",e.beginPath(),e.ellipse(n+a*.2,s-a*1.1,a*.35,a*.12,.2,0,Math.PI*2),e.fill();break}case"bun":{e.beginPath(),e.arc(n,s-a*.55,a*1.02,Math.PI,0),e.fill(),e.beginPath(),e.arc(n,s-a*1.55,a*.55,0,Math.PI*2),e.fill(),e.fillStyle=i+"66",e.beginPath(),e.arc(n-a*.15,s-a*1.7,a*.18,0,Math.PI*2),e.fill();break}case"ponytail":{e.fillStyle=i,e.beginPath(),e.arc(n,s-a*.55,a*1.02,Math.PI,0),e.fill(),e.beginPath(),e.moveTo(n+a*.5,s-a*.8),e.bezierCurveTo(n+a*1.4,s-a*.4,n+a*1.5,s+a*.6,n+a*.8,s+a*1.4),e.lineTo(n+a*.5,s+a*1.4),e.bezierCurveTo(n+a*1,s+a*.5,n+a*.9,s-a*.2,n+a*.2,s-a*.7),e.fill();break}}}_animateSparks(e){const t=e.getContext("2d");let i;const n=[],s=["#FFD700","#FF4444","#FF8800","#FFFFFF","#FF6600"];(()=>{e.width=window.innerWidth,e.height=window.innerHeight})();const r=()=>{const c=window.innerWidth/2,h=window.innerHeight/2,u=Math.random()*Math.PI*2,d=1+Math.random()*4;n.push({x:c+(Math.random()-.5)*60,y:h+(Math.random()-.5)*60,vx:Math.cos(u)*d,vy:Math.sin(u)*d-1,life:0,maxLife:30+Math.random()*40,color:s[Math.floor(Math.random()*s.length)],size:1+Math.random()*3})},l=()=>{if(!document.getElementById("battle-screen-ov")){cancelAnimationFrame(i);return}t.clearRect(0,0,e.width,e.height),Math.random()<.4&&r();for(let c=n.length-1;c>=0;c--){const h=n[c];h.x+=h.vx,h.y+=h.vy,h.vy+=.05,h.life++;const u=1-h.life/h.maxLife;if(u<=0){n.splice(c,1);continue}t.globalAlpha=u,t.fillStyle=h.color,t.beginPath(),t.arc(h.x,h.y,h.size,0,Math.PI*2),t.fill()}t.globalAlpha=1,i=requestAnimationFrame(l)};i=requestAnimationFrame(l)}async injectLeaderboard(e){const t=document.getElementById("battle-screen-ov");if(!t)return;const i=e.replace(/^⚔️\s*/,"").trim(),n=await sv(i,5),s=document.createElement("div");if(s.style.cssText=`
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
      `;else{const a=n.map((r,l)=>{const c=l===0?"🥇":l===1?"🥈":l===2?"🥉":`${l+1}.`,h=Math.floor(r.completion_time_s/60),u=String(Math.round(r.completion_time_s%60)).padStart(2,"0");return`
          <div style="display:flex;justify-content:space-between;align-items:center;
                      padding:3px 0;border-bottom:1px solid #ffffff10;">
            <span style="color:#FFD700;font-size:10px;">${c}</span>
            <span style="color:#fff;font-size:10px;font-weight:700;flex:1;margin:0 8px;
                         white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">
              ${r.player_name}
            </span>
            <span style="color:#2ECC40;font-size:10px;font-weight:700;">
              ${h}:${u}
            </span>
          </div>
        `}).join("");s.innerHTML=`
        <div style="color:#FFD700;font-size:10px;font-weight:900;letter-spacing:2px;
                    text-align:center;margin-bottom:6px;">⚡ FASTEST CREWS — BEAT THEM</div>
        ${a}
      `}t.appendChild(s)}}const Fe=400,Rt=600,pt=55,Ai=80,Un=Rt-pt-Ai,On=10,Cs=7,wt=Fe/On,yt=Un/Cs,ji=3,pv=55,$t={jose:{name:"Wall Maestro",damage:35,range:3,fireRate:1.2,cost:6e4,color:"#E8A830",special:"slow"},matt:{name:"Negotiator",damage:20,range:4,fireRate:.8,cost:8e4,color:"#4A90D9",special:"payout"},tsuyoshi:{name:"Rush Tower",damage:15,range:2,fireRate:3,cost:5e4,color:"#FF4444",special:"none"},jarrad:{name:"Blueprint",damage:25,range:3,fireRate:1,cost:7e4,color:"#9B59B6",special:"double"},fabio:{name:"Pressure",damage:30,range:2.5,fireRate:1.5,cost:65e3,color:"#27AE60",special:"boost"},phil:{name:"Veteran Wall",damage:50,range:2,fireRate:.5,cost:9e4,color:"#7F8C8D",special:"block"},joe:{name:"Intel",damage:10,range:5,fireRate:2,cost:55e3,color:"#E67E22",special:"loot"},connie:{name:"Command",damage:40,range:3.5,fireRate:1,cost:1e5,color:"#E74C3C",special:"aoe"},mikayla:{name:"Admin",damage:5,range:1,fireRate:.3,cost:4e4,color:"#1ABC9C",special:"income"}},mv={grunt:{hp:80,spd:1,reward:3e3,radius:12},runner:{hp:40,spd:2,reward:2e3,radius:10},tanker:{hp:300,spd:.5,reward:8e3,radius:18},boss:{hp:1e3,spd:.8,reward:5e4,radius:24}};function Da(o){const e=[[{type:"grunt",count:8,interval:1.5,start:0}],[{type:"grunt",count:6,interval:1.5,start:0},{type:"runner",count:3,interval:2,start:1}],[{type:"grunt",count:4,interval:1.5,start:0},{type:"runner",count:4,interval:2,start:1},{type:"tanker",count:1,interval:0,start:8}],[{type:"grunt",count:3,interval:1.5,start:0},{type:"runner",count:3,interval:1.8,start:.8},{type:"tanker",count:2,interval:5,start:5}],[{type:"grunt",count:2,interval:2,start:0},{type:"runner",count:2,interval:2,start:1},{type:"tanker",count:2,interval:5,start:6},{type:"boss",count:1,interval:0,start:14}]],t=e[Math.min(o,e.length-1)],i=[];for(const n of t)for(let s=0;s<n.count;s++)i.push({type:n.type,t:n.start+s*n.interval});return i.sort((n,s)=>n.t-s.t)}function gv(o,e){return{x:o*wt+wt/2,y:pt+e*yt+yt/2}}function Ba(o){return o*Math.min(wt,yt)}function vv(o,e,t,i){return(o-t)**2+(e-i)**2}function bo(o,e,t,i){return Math.sqrt(vv(o,e,t,i))}class yv{constructor(){_(this,"_ov",null);_(this,"_cv",null);_(this,"_ctx",null);_(this,"_raf",0);_(this,"_last",0);_(this,"_done",null);_(this,"_cfg");_(this,"_phase","announce");_(this,"_waveIdx",0);_(this,"_lives",5);_(this,"_sats",0);_(this,"_towers",[]);_(this,"_enemies",[]);_(this,"_projs",[]);_(this,"_texts",[]);_(this,"_selectedCrew",null);_(this,"_selectedTower",null);_(this,"_nextId",0);_(this,"_spawnQueue",[]);_(this,"_spawnTime",0);_(this,"_spawnIdx",0);_(this,"_allSpawned",!1);_(this,"_waveSpeedMult",1);_(this,"_announceTimer",3);_(this,"_prepTimer",10);_(this,"_betweenTimer",3);_(this,"_endTimer",4);_(this,"_payoutBonus",0);_(this,"_totalEarned",0);_(this,"_wavesCleared",0)}show(e,t){this.hide(),this._cfg=e,this._done=t,this._sats=e.payout,this._totalEarned=e.payout,this._buildUI(),this._reset(),this._loop()}hide(){var e;this._raf&&(cancelAnimationFrame(this._raf),this._raf=0),(e=this._ov)==null||e.remove(),this._ov=null,this._cv=null,this._ctx=null,this._done=null}_buildUI(){const e=document.createElement("div");e.id="td-overlay",e.style.cssText=`
      position:fixed;inset:0;z-index:14000;background:#0d0d18;
      display:flex;align-items:center;justify-content:center;
      touch-action:none;user-select:none;
    `;const t=document.createElement("canvas");t.width=Fe,t.height=Rt,t.style.cssText=`
      display:block;
      width:min(100vw, ${Fe/Rt*100}vh);
      max-width:${Fe}px;
      height:auto;
      cursor:pointer;
    `;const i=(n,s)=>{const a=t.getBoundingClientRect();return{x:(n-a.left)*(Fe/a.width),y:(s-a.top)*(Rt/a.height)}};t.addEventListener("click",n=>this._click(i(n.clientX,n.clientY))),t.addEventListener("touchend",n=>{n.preventDefault(),n.changedTouches.length&&this._click(i(n.changedTouches[0].clientX,n.changedTouches[0].clientY))},{passive:!1}),e.appendChild(t),document.body.appendChild(e),this._ov=e,this._cv=t,this._ctx=t.getContext("2d")}_reset(){this._phase="announce",this._waveIdx=0,this._lives=5,this._towers=[],this._enemies=[],this._projs=[],this._texts=[],this._selectedCrew=null,this._selectedTower=null,this._nextId=0,this._wavesCleared=0,this._payoutBonus=0,this._announceTimer=3,this._prepTimer=10,this._betweenTimer=3,this._endTimer=4,this._allSpawned=!1,this._spawnIdx=0,this._spawnTime=0,this._waveSpeedMult=1,this._spawnQueue=Da(0)}_loop(){this._last=performance.now();const e=t=>{if(!this._ov)return;const i=Math.min((t-this._last)/1e3,.05);this._last=t,this._update(i),this._draw(),this._raf=requestAnimationFrame(e)};this._raf=requestAnimationFrame(e)}_update(e){switch(this._updateTexts(e),this._phase){case"announce":this._announceTimer-=e,this._announceTimer<=0&&(this._phase="prep",this._prepTimer=10);break;case"prep":this._prepTimer-=e,this._updateMikayla(e),this._prepTimer<=0&&this._beginWave();break;case"wave":this._updateSpawn(e),this._updateEnemies(e),this._updateTowers(e),this._updateProjectiles(e),this._updateMikayla(e),this._checkWaveDone();break;case"between":if(this._betweenTimer-=e,this._betweenTimer<=0){const t=this._waveIdx+1;t>=5?(this._phase="win",this._endTimer=4.5,this._wavesCleared=5):(this._waveIdx=t,this._phase="announce",this._announceTimer=3,this._spawnQueue=Da(this._waveIdx),this._spawnIdx=0,this._spawnTime=0,this._allSpawned=!1,this._waveSpeedMult=this._waveIdx>=3?1.2:1)}break;case"win":case"lose":this._endTimer-=e,this._endTimer<=0&&this._finish();break}}_beginWave(){this._phase="wave",this._spawnQueue=Da(this._waveIdx),this._spawnIdx=0,this._spawnTime=0,this._allSpawned=!1,this._waveSpeedMult=this._waveIdx>=3?1.2:1}_updateSpawn(e){if(!this._allSpawned){for(this._spawnTime+=e;this._spawnIdx<this._spawnQueue.length&&this._spawnTime>=this._spawnQueue[this._spawnIdx].t;)this._spawnEnemy(this._spawnQueue[this._spawnIdx].type),this._spawnIdx++;this._spawnIdx>=this._spawnQueue.length&&(this._allSpawned=!0)}}_spawnEnemy(e){const t=mv[e],i=pt+ji*yt+yt/2,n=t.spd*pv*this._waveSpeedMult;this._enemies.push({id:this._nextId++,type:e,x:-t.radius-8,y:i,hp:t.hp,maxHp:t.hp,speed:n,reward:t.reward,radius:t.radius,slowed:0,color:this._cfg.rival.color})}_updateEnemies(e){for(const t of this._towers)if(!(t.crewId!=="phil"||t.row!==ji))for(const i of this._enemies)Math.abs(i.x-t.x)<wt*1.2&&(i.slowed=Math.max(i.slowed,1.5));for(let t=this._enemies.length-1;t>=0;t--){const i=this._enemies[t];i.slowed>0&&(i.slowed-=e,i.slowed<0&&(i.slowed=0));const n=i.slowed>0?i.speed*.4:i.speed;i.x+=n*e,i.x>Fe+i.radius+10&&(this._enemies.splice(t,1),this._lives=Math.max(0,this._lives-1),this._addText(Fe-40,pt+ji*yt+yt/2,"-1 ❤️","#FF2244"),this._lives<=0&&(this._phase="lose",this._endTimer=4.5,this._wavesCleared=this._waveIdx))}}_updateTowers(e){for(const t of this._towers){const i=$t[t.crewId];if(!i||(t.fireTimer-=e,t.fireTimer>0))continue;const n=t.level===1?1:t.level===2?1.5:2,a=1/(i.fireRate*n*this._fabioBoost(t)),r=Ba(i.range)*(1+.15*(t.level-1)),l=i.damage*n,c=this._findTarget(t.x,t.y,r);if(!c){t.fireTimer=.1;continue}if(t.fireTimer=a,i.special==="aoe")for(const h of this._enemies)bo(t.x,t.y,h.x,h.y)<=r&&this._shoot(t.id,t.x,t.y,h,l,t.crewId,!0);else{let h=l;i.special==="double"&&Math.random()<.5&&(h*=2,this._addText(t.x,t.y-16,"DOUBLE! ✦","#9B59B6")),this._shoot(t.id,t.x,t.y,c,h,t.crewId,!1)}}}_fabioBoost(e){for(const t of this._towers){if(t.crewId!=="fabio"||t.id===e.id)continue;const i=Ba($t.fabio.range)*(1+.15*(t.level-1));if(bo(e.x,e.y,t.x,t.y)<=i)return 1+.3*t.level}return 1}_updateMikayla(e){var t;for(const i of this._towers)if(((t=$t[i.crewId])==null?void 0:t.special)==="income"&&(i.incomeTimer-=e,i.incomeTimer<=0)){const n=2e3*i.level;this._sats+=n,this._totalEarned+=n,this._addText(i.x,i.y-20,`+${n/1e3}k 💰`,"#1ABC9C"),i.incomeTimer=10}}_findTarget(e,t,i){let n=null;for(const s of this._enemies)bo(e,t,s.x,s.y)>i||(!n||s.x>n.x)&&(n=s);return n}_shoot(e,t,i,n,s,a,r){const l=Math.atan2(n.y-i,n.x-t),c=300;this._projs.push({id:this._nextId++,x:t,y:i,vx:Math.cos(l)*c,vy:Math.sin(l)*c,damage:s,crewId:a,targetId:n.id,aoe:r})}_updateProjectiles(e){for(let t=this._projs.length-1;t>=0;t--){const i=this._projs[t];if(i.x+=i.vx*e,i.y+=i.vy*e,i.x<-60||i.x>Fe+60||i.y<-60||i.y>Rt+60){this._projs.splice(t,1);continue}const n=this._enemies.find(s=>s.id===i.targetId);if(!n){this._projs.splice(t,1);continue}bo(i.x,i.y,n.x,n.y)>14||(this._projs.splice(t,1),this._hit(i,n))}}_hit(e,t){if(e.crewId==="jose"&&(t.slowed=2.5,this._addText(t.x,t.y-18,"SLOW ❄","#88AAFF")),t.hp-=e.damage,t.hp<=0){let i=t.reward;e.crewId==="joe"&&(i*=2,this._addText(t.x,t.y-22,"INTEL BONUS!","#E67E22")),e.crewId==="matt"&&(this._payoutBonus=Math.min(this._payoutBonus+.005,.5),this._addText(t.x,t.y-18,"+0.5% 💼","#4A90D9")),this._sats+=i,this._totalEarned+=i,this._addText(t.x,t.y-22,`+${(i/1e3).toFixed(0)}k`,"#FFD700");const n=this._enemies.findIndex(s=>s.id===t.id);n>=0&&this._enemies.splice(n,1)}else this._addText(t.x,t.y-14,`-${Math.floor(e.damage)}`,"#FF7777")}_checkWaveDone(){!this._allSpawned||this._enemies.length>0||this._phase!=="wave"||(this._wavesCleared=this._waveIdx+1,this._phase="between",this._betweenTimer=3,this._addText(Fe/2,pt+Un/2-20,`WAVE ${this._waveIdx+1} CLEAR! 🎉`,"#2ECC40"))}_addText(e,t,i,n){this._texts.push({x:e,y:t,text:i,life:1.6,max:1.6,color:n})}_updateTexts(e){for(let t=this._texts.length-1;t>=0;t--)this._texts[t].life-=e,this._texts[t].life<=0&&this._texts.splice(t,1)}_click(e){const{x:t,y:i}=e;if(i>=Rt-Ai){this._clickTray(t);return}if(i<pt)return;if(this._selectedTower!==null){const u=this._towers.find(d=>d.id===this._selectedTower);if(u&&this._clickPanel(t,i,u))return;this._selectedTower=null}const n=Math.floor(t/wt),s=Math.floor((i-pt)/yt);if(n<0||n>=On||s<0||s>=Cs)return;const a=this._towers.find(u=>u.col===n&&u.row===s);if(a){this._selectedTower=a.id,this._selectedCrew=null;return}if(!this._selectedCrew||this._phase==="win"||this._phase==="lose")return;const r=this._selectedCrew==="phil";if(s===ji&&!r){this._addText(t,i,"PATH! 🚫","#FF4444");return}const l=$t[this._selectedCrew];if(!l)return;if(this._sats<l.cost){this._addText(t,i,"NOT ENOUGH SATS!","#FF4444");return}const{x:c,y:h}=gv(n,s);this._towers.push({id:this._nextId++,crewId:this._selectedCrew,col:n,row:s,level:1,fireTimer:0,x:c,y:h,incomeTimer:10}),this._sats-=l.cost,this._addText(c,h-20,"📍 PLACED",l.color)}_clickTray(e){const t=this._cfg.crewIds.filter(s=>$t[s]),i=Math.min(72,Fe/t.length),n=(Fe-i*t.length)/2;for(let s=0;s<t.length;s++){const a=n+s*i;if(e>=a&&e<a+i){const r=t[s];this._selectedCrew=this._selectedCrew===r?null:r,this._selectedTower=null;return}}this._selectedCrew=null}_clickPanel(e,t,i){const n=$t[i.crewId],s=Math.min(Math.max(i.x,80),Fe-80),a=Math.min(Math.max(i.y-55,pt+5),Rt-Ai-110),r=Math.round(n.cost*(i.level===1?1.5:2)),l=Math.round(n.cost*(.5+.25*(i.level-1))),c=a+34,h=a+58;if(e>=s-58&&e<=s-4&&t>=c&&t<=h)return i.level<3&&(this._sats>=r?(this._sats-=r,i.level++,this._addText(i.x,i.y-20,`⬆ LVL ${i.level}!`,"#FFD700")):this._addText(i.x,i.y,"NOT ENOUGH SATS","#FF4444")),!0;if(e>=s+4&&e<=s+58&&t>=c&&t<=h){this._sats+=l,this._addText(i.x,i.y,`SOLD +${(l/1e3).toFixed(0)}k`,"#2ECC40");const u=this._towers.findIndex(d=>d.id===i.id);return u>=0&&this._towers.splice(u,1),this._selectedTower=null,!0}return!1}_finish(){if(!this._done)return;const e=this._phase==="win",t=e?Math.min(1,.2+.16*this._lives):0,i=e?Math.round(this._cfg.payout*t*(1+this._payoutBonus)):0,n={won:e,earned:i,wavesCleared:this._wavesCleared,qualityPct:t},s=this._done;this.hide(),s(n)}_draw(){const e=this._ctx;e&&(e.clearRect(0,0,Fe,Rt),this._drawGrid(e),this._drawPath(e),this._drawTowers(e),this._drawEnemies(e),this._drawProjectiles(e),this._drawTexts(e),this._drawHUD(e),this._drawTray(e),this._drawUpgradePanel(e),this._phase==="announce"&&this._drawAnnounce(e),this._phase==="prep"&&this._drawPrepHint(e),this._phase==="between"&&this._drawBetween(e),this._phase==="win"&&this._drawWin(e),this._phase==="lose"&&this._drawLose(e))}_drawGrid(e){var t,i;e.fillStyle="#14141f",e.fillRect(0,pt,Fe,Un);for(let n=0;n<Cs;n++)if(n!==ji)for(let s=0;s<On;s++){const a=(s+n)%2===0?"#1a1a2a":"#161622";e.fillStyle=a,e.fillRect(s*wt,pt+n*yt,wt,yt)}e.strokeStyle="rgba(255,255,255,0.05)",e.lineWidth=1;for(let n=0;n<=On;n++)e.beginPath(),e.moveTo(n*wt,pt),e.lineTo(n*wt,pt+Un),e.stroke();for(let n=0;n<=Cs;n++)e.beginPath(),e.moveTo(0,pt+n*yt),e.lineTo(Fe,pt+n*yt),e.stroke();if(this._selectedCrew){e.fillStyle=(((t=$t[this._selectedCrew])==null?void 0:t.color)??"#ffffff")+"15";for(let n=0;n<Cs;n++){if(n===ji&&this._selectedCrew!=="phil")continue;const s=n===ji&&this._selectedCrew==="phil";for(let a=0;a<On;a++)this._towers.find(r=>r.col===a&&r.row===n)||(e.fillStyle=s?"#7F8C8D22":(((i=$t[this._selectedCrew])==null?void 0:i.color)??"#ffffff")+"18",e.fillRect(a*wt+1,pt+n*yt+1,wt-2,yt-2))}}}_drawPath(e){const t=pt+ji*yt;e.fillStyle="#2a1e10",e.fillRect(0,t,Fe,yt),e.fillStyle="rgba(255,220,150,0.12)";for(let i=0;i<On;i++){const n=i*wt+wt/2,s=t+yt/2;e.beginPath(),e.moveTo(n-9,s-5),e.lineTo(n+2,s-5),e.lineTo(n+2,s-9),e.lineTo(n+11,s),e.lineTo(n+2,s+9),e.lineTo(n+2,s+5),e.lineTo(n-9,s+5),e.closePath(),e.fill()}e.font="bold 8px Arial",e.textAlign="center",e.fillStyle="#2ECC40",e.fillText("▶ START",wt/2+2,t+12),e.fillStyle="#FF4444",e.fillText("🏚 BASE",Fe-wt/2,t+12)}_drawTowers(e){for(const t of this._towers){const i=$t[t.crewId];if(!i)continue;const n=this._selectedTower===t.id,s=13+t.level*2;e.fillStyle=i.color+"25",e.fillRect(t.col*wt+1,pt+t.row*yt+1,wt-2,yt-2),e.beginPath(),e.arc(t.x,t.y,s,0,Math.PI*2),e.fillStyle=i.color,e.fill();for(let r=1;r<t.level;r++)e.beginPath(),e.arc(t.x,t.y,s+1+r*2,0,Math.PI*2),e.strokeStyle="#FFD700",e.lineWidth=1.5,e.stroke();if(n){e.strokeStyle="#FFD700",e.lineWidth=2.5,e.strokeRect(t.col*wt+1,pt+t.row*yt+1,wt-2,yt-2);const r=Ba(i.range)*(1+.15*(t.level-1));e.beginPath(),e.arc(t.x,t.y,r,0,Math.PI*2),e.strokeStyle=i.color+"70",e.lineWidth=1,e.setLineDash([5,4]),e.stroke(),e.setLineDash([])}e.fillStyle="#fff",e.font=`bold ${t.level>1?7:8}px Arial`,e.textAlign="center";const a=i.name.split(" ")[0].slice(0,5);e.fillText(a,t.x,t.y+s+10),t.level>1&&(e.fillStyle="#FFD700",e.font="bold 7px Arial",e.fillText(`L${t.level}`,t.x,t.y+4))}}_drawEnemies(e){for(const t of this._enemies){const i=t.radius;if(t.type==="boss"){const c=e.createRadialGradient(t.x,t.y,0,t.x,t.y,i*2.2);c.addColorStop(0,t.color+"88"),c.addColorStop(1,"transparent"),e.fillStyle=c,e.beginPath(),e.arc(t.x,t.y,i*2.2,0,Math.PI*2),e.fill()}e.beginPath(),e.arc(t.x,t.y,i,0,Math.PI*2),e.fillStyle=t.slowed>0?"#8899DD":t.color,e.fill(),e.beginPath(),e.arc(t.x-i*.25,t.y-i*.25,i*.38,0,Math.PI*2),e.fillStyle="rgba(255,255,255,0.18)",e.fill();const n={grunt:"G",runner:"R",tanker:"T",boss:"★"};e.fillStyle="#fff",e.font=`bold ${Math.floor(i*.88)}px Arial`,e.textAlign="center",e.fillText(n[t.type],t.x,t.y+i*.34);const s=i*2.4,a=t.x-s/2,r=t.y-i-7;e.fillStyle="#222",e.fillRect(a,r,s,4);const l=t.hp/t.maxHp;e.fillStyle=l>.5?"#2ECC40":l>.25?"#FF8C00":"#FF2244",e.fillRect(a,r,s*l,4)}}_drawProjectiles(e){var t;for(const i of this._projs){const n=((t=$t[i.crewId])==null?void 0:t.color)??"#FFD700";e.beginPath(),e.arc(i.x,i.y,4.5,0,Math.PI*2),e.fillStyle=n,e.fill(),e.beginPath(),e.arc(i.x,i.y,7,0,Math.PI*2),e.fillStyle=n+"44",e.fill()}}_drawTexts(e){for(const t of this._texts){const i=t.life/t.max,n=(1-t.life/t.max)*28;e.globalAlpha=i,e.fillStyle=t.color,e.font="bold 11px Arial Black, Arial",e.textAlign="center",e.fillText(t.text,t.x,t.y-n)}e.globalAlpha=1}_drawHUD(e){e.fillStyle="#0a0a18",e.fillRect(0,0,Fe,pt),e.fillStyle="rgba(255,255,255,0.07)",e.fillRect(0,pt-1,Fe,1),e.font="bold 13px Arial Black, Arial",e.textAlign="left",e.fillStyle="#FFD700";const t=this._phase==="win"?"COMPLETE!":this._phase==="lose"?"STOLEN 😤":`WAVE ${this._waveIdx+1}/5`;e.fillText(t,8,22),e.font="9px Arial",e.fillStyle="#888";const i=this._phase==="announce"?"GET READY...":this._phase==="prep"?`PREP — ${Math.ceil(this._prepTimer)}s`:this._phase==="wave"?"DEFENDING...":this._phase==="between"?"WAVE CLEAR!":"";e.fillText(i,8,37),e.font="bold 9px Arial",e.textAlign="center",e.fillStyle=this._cfg.rival.color,e.fillText(`⚔️ vs ${this._cfg.rival.name}`,Fe/2,18),e.font="13px Arial",e.textAlign="right",e.fillStyle=this._lives>2?"#FF4466":"#FF0000",e.fillText("♥".repeat(this._lives)+"♡".repeat(Math.max(0,5-this._lives)),Fe-8,22),e.font="bold 11px Arial",e.fillStyle="#FFD700",e.fillText(`💰 ${(this._sats/1e3).toFixed(0)}k`,Fe-8,39)}_drawTray(e){e.fillStyle="#080812",e.fillRect(0,Rt-Ai,Fe,Ai),e.fillStyle="rgba(255,255,255,0.07)",e.fillRect(0,Rt-Ai,Fe,1);const t=this._cfg.crewIds.filter(r=>$t[r]),i=Math.min(74,(Fe-8)/t.length),n=(Fe-i*t.length)/2,s=Rt-Ai+5,a=Ai-16;for(let r=0;r<t.length;r++){const l=t[r],c=$t[l];if(!c)continue;const h=n+r*i+2,u=i-4,d=this._selectedCrew===l,f=this._sats>=c.cost;e.fillStyle=d?c.color+"40":"#0d0d22",this._rrect(e,h,s,u,a,7),e.fill(),e.strokeStyle=d?"#FFD700":c.color+"50",e.lineWidth=d?2:1,this._rrect(e,h,s,u,a,7),e.stroke();const g=h+u/2,v=s+20;e.beginPath(),e.arc(g,v,13,0,Math.PI*2),e.fillStyle=f?c.color:"#333",e.fill(),e.fillStyle=f?"#fff":"#777",e.font="bold 11px Arial",e.textAlign="center",e.fillText(c.name[0],g,v+4),e.fillStyle=f?"#ccc":"#555",e.font="7px Arial";const m=c.name.split(" ")[0].slice(0,7);e.fillText(m,g,s+41),e.fillStyle=f?"#FFD700":"#774400",e.font="bold 8px Arial",e.fillText(`${(c.cost/1e3).toFixed(0)}k`,g,s+53)}e.fillStyle="#444",e.font="8px Arial",e.textAlign="center",e.fillText(this._selectedCrew?"Tap grid cell to place • Tap again to deselect":"Tap a crew member to select",Fe/2,Rt-3)}_drawUpgradePanel(e){if(this._selectedTower===null)return;const t=this._towers.find(h=>h.id===this._selectedTower);if(!t)return;const i=$t[t.crewId],n=Math.min(Math.max(t.x,80),Fe-80),s=Math.min(Math.max(t.y-55,pt+5),Rt-Ai-110),a=Math.round(i.cost*(t.level===1?1.5:2)),r=Math.round(i.cost*(.5+.25*(t.level-1))),l=t.level>=3,c=!l&&this._sats>=a;e.fillStyle="rgba(8,8,25,0.97)",e.strokeStyle=i.color,e.lineWidth=2,this._rrect(e,n-64,s,128,68,9),e.fill(),e.stroke(),e.fillStyle=i.color,e.font="bold 9px Arial Black, Arial",e.textAlign="center",e.fillText(`${i.name}  Lv.${t.level}`,n,s+14),e.fillStyle="#888",e.font="8px Arial",e.fillText(`✦ ${i.special}`,n,s+26),e.fillStyle=c?"#0e3010":"#1a1a1a",e.strokeStyle=c?"#2ECC40":"#444",e.lineWidth=1,this._rrect(e,n-60,s+32,55,26,5),e.fill(),e.stroke(),e.fillStyle=c?"#2ECC40":"#555",e.font="bold 8px Arial",e.fillText(l?"MAX":`↑ ${(a/1e3).toFixed(0)}k`,n-32,s+48),e.fillStyle="#2d0a00",e.strokeStyle="#E67E22",e.lineWidth=1,this._rrect(e,n+5,s+32,55,26,5),e.fill(),e.stroke(),e.fillStyle="#E67E22",e.font="bold 8px Arial",e.fillText(`Sell ${(r/1e3).toFixed(0)}k`,n+32,s+48)}_drawAnnounce(e){const t=pt+Un/2;e.fillStyle="rgba(0,0,0,0.78)",e.fillRect(0,t-58,Fe,116),e.strokeStyle=this._cfg.rival.color+"80",e.lineWidth=2,e.strokeRect(0,t-58,Fe,116),e.font="bold 19px Arial Black, Arial",e.textAlign="center",e.fillStyle=this._cfg.rival.color,e.fillText(`⚔ WAVE ${this._waveIdx+1} INCOMING`,Fe/2,t-24),e.fillStyle="#fff",e.font="bold 13px Arial",e.fillText(`— ${this._cfg.rival.name.toUpperCase()} —`,Fe/2,t-4),e.fillStyle="#FFD700",e.font="bold 26px Arial Black, Arial",e.fillText(`${Math.ceil(this._announceTimer)}`,Fe/2,t+30),e.fillStyle="#888",e.font="9px Arial",e.fillText("Place your towers while you can!",Fe/2,t+48)}_drawPrepHint(e){e.fillStyle="rgba(255,215,0,0.92)",e.font="bold 10px Arial Black, Arial",e.textAlign="center",e.fillText(`⏱ PREP: ${Math.ceil(this._prepTimer)}s — PLACE YOUR TOWERS!`,Fe/2,pt+14)}_drawBetween(e){const t=pt+Un/2;e.fillStyle="rgba(0,25,8,0.78)",e.fillRect(0,t-36,Fe,72),e.fillStyle="#2ECC40",e.font="bold 18px Arial Black, Arial",e.textAlign="center",e.fillText(`WAVE ${this._waveIdx+1} CLEAR! 🎉`,Fe/2,t+4),e.fillStyle="#aaa",e.font="10px Arial",e.fillText(`Next wave in ${Math.ceil(this._betweenTimer)}s`,Fe/2,t+22)}_drawWin(e){e.fillStyle="rgba(0,16,4,0.92)",e.fillRect(0,0,Fe,Rt);const t=Rt/2;e.font="bold 26px Arial Black, Arial",e.textAlign="center",e.fillStyle="#2ECC40",e.fillText("CONTRACT SECURED! 🏆",Fe/2,t-55),e.fillStyle="#FFD700",e.font="bold 14px Arial",e.fillText("All 5 waves cleared!",Fe/2,t-26),e.fillStyle="#FF4466",e.font="bold 13px Arial",e.fillText(`Lives remaining: ${"❤️".repeat(this._lives)}`,Fe/2,t+2);const i=Math.round(Math.min(1,.2+.16*this._lives)*100);e.fillStyle="#aaa",e.font="12px Arial",e.fillText(`Quality: ${i}%  •  Sats: ${(this._totalEarned/1e3).toFixed(0)}k`,Fe/2,t+28),e.fillStyle="#555",e.font="10px Arial",e.fillText("Heading to the job site...",Fe/2,t+52)}_drawLose(e){e.fillStyle="rgba(30,0,0,0.92)",e.fillRect(0,0,Fe,Rt);const t=Rt/2;e.font="bold 24px Arial Black, Arial",e.textAlign="center",e.fillStyle="#FF2244",e.fillText("CONTRACT STOLEN 😤",Fe/2,t-50),e.fillStyle=this._cfg.rival.color,e.font="bold 13px Arial",e.fillText(`${this._cfg.rival.name} won the contract.`,Fe/2,t-22),e.fillStyle="#aaa",e.font="12px Arial",e.fillText(`Waves cleared: ${this._wavesCleared} / 5`,Fe/2,t+4),e.fillText("Better luck next time, mate.",Fe/2,t+26)}_rrect(e,t,i,n,s,a){a=Math.min(a,n/2,s/2),e.beginPath(),e.moveTo(t+a,i),e.lineTo(t+n-a,i),e.arcTo(t+n,i,t+n,i+a,a),e.lineTo(t+n,i+s-a),e.arcTo(t+n,i+s,t+n-a,i+s,a),e.lineTo(t+a,i+s),e.arcTo(t,i+s,t,i+s-a,a),e.lineTo(t,i+a),e.arcTo(t,i,t+a,i,a),e.closePath()}}class _v{constructor(){_(this,"_el",null)}show(){this.hide();const e=document.createElement("div");e.id="contract-wars-panel",e.style.cssText=`
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
    `,n.forEach((d,f)=>{const g=document.createElement("div");g.style.cssText="display:flex; gap:12px; align-items:flex-start;",g.innerHTML=`
        <div style="
          font-size:22px; flex-shrink:0; width:32px; text-align:center;
          margin-top:2px;
        ">${d.icon}</div>
        <div>
          <div style="
            color:#FFD700; font-size:clamp(11px,3vw,13px); font-weight:900;
            margin-bottom:3px; letter-spacing:0.5px;
          ">${f+1}. ${d.title}</div>
          <div style="
            color:#ccc; font-size:clamp(10px,2.6vw,12px); line-height:1.5;
            font-family:system-ui,sans-serif; font-weight:400;
          ">${d.desc}</div>
        </div>
      `,f<n.length-1&&(g.style.paddingBottom="12px",g.style.borderBottom="1px solid rgba(255,255,255,0.06)"),s.appendChild(g)}),i.appendChild(s),i.appendChild(this._sectionHeading("🗼 TOWER DEFENCE TIPS"));const a=document.createElement("div");a.style.cssText=`
      background:rgba(30,15,50,0.6); border:1px solid rgba(180,100,255,0.2);
      border-radius:14px; padding:12px 14px;
      display:grid; grid-template-columns:1fr 1fr; gap:8px;
    `,[["⚡ Chokepoints","Stack towers at bends — enemies slow down near corners."],["🎯 Range > Damage","Long-range towers hit enemies before they reach your base."],["🛡️ Jose = Tank","Jose has the most HP. Put him at the front line."],["💨 Speed kills","Early waves are fast. Cover the entry path first."],["🔋 Tsuyoshi","Precision perk — highest damage per shot."],["🏃 Jarrad","Speed perk — attacks faster than any other crew member."]].forEach(([d,f])=>{const g=document.createElement("div");g.style.cssText=`
        background:rgba(255,255,255,0.04); border-radius:10px; padding:8px 9px;
      `,g.innerHTML=`
        <div style="color:#CC88FF;font-size:clamp(9px,2.4vw,11px);font-weight:900;margin-bottom:3px;">${d}</div>
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
    `,[{name:"Jose",icon:"👑",color:"#FFD700",perk:"Mascot — morale boost; +20% payout on all contested jobs"},{name:"Matt",icon:"🔨",color:"#E0B494",perk:"Foreman — scaffold time bonus; +15% base"},{name:"Connie",icon:"⚡",color:"#F0C8A0",perk:"Bionic — tower attack speed ×1.4"},{name:"Jarrad",icon:"🏃",color:"#D8A878",perk:"Speedster — fastest tower attack rate"},{name:"Tsuyoshi",icon:"🎯",color:"#F0D4B0",perk:"Precision — highest tower damage"},{name:"Fabio",icon:"🍕",color:"#D4A070",perk:"Sustain — towers regenerate HP"},{name:"Phil",icon:"🛠️",color:"#D8B89A",perk:"Repair — fixes damaged towers mid-wave"},{name:"Joe",icon:"🔭",color:"#EED8C0",perk:"Scout — reveals enemy health bars"},{name:"Mikayla",icon:"📐",color:"#F0C8A0",perk:"Architect — tower range +25%"}].forEach(d=>{const f=document.createElement("div");f.style.cssText=`
        display:flex; gap:10px; align-items:center;
        padding:5px 0; border-bottom:1px solid rgba(255,255,255,0.05);
      `,f.innerHTML=`
        <div style="font-size:16px;flex-shrink:0;">${d.icon}</div>
        <div style="color:${d.color};font-size:clamp(10px,2.8vw,12px);font-weight:900;
                    width:62px;flex-shrink:0;">${d.name}</div>
        <div style="color:#bbb;font-size:clamp(9px,2.4vw,11px);line-height:1.4;
                    font-family:system-ui,sans-serif;font-weight:400;">${d.perk}</div>
      `,c.appendChild(f)}),i.appendChild(c),e.appendChild(i);const u=document.createElement("button");u.textContent="✕ CLOSE",u.style.cssText=`
      position:sticky; bottom:16px; margin-top:20px;
      background:linear-gradient(135deg,#1a1a1a,#2a2a2a);
      border:1px solid rgba(255,215,0,0.3);
      color:#FFD700; font-size:13px; font-weight:900;
      letter-spacing:2px; padding:12px 40px;
      border-radius:30px; cursor:pointer;
      width:100%; max-width:420px; display:block;
      touch-action:manipulation;
    `,u.addEventListener("click",()=>this.hide()),e.appendChild(u),e.addEventListener("click",d=>{d.target===e&&this.hide()}),document.body.appendChild(e),this._el=e}hide(){var e;(e=this._el)==null||e.remove(),this._el=null}async _loadLeaderboard(e){try{const t=await ov(10);if(t.length===0){e.innerHTML=`
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
    `,t}}const xv={Matt:`Matt folds himself into the back. "Took your time." He's already on his phone.`,Jose:'Jose appears from nowhere, bucket in hand. "Vámonos — I was getting bored."',Jarrad:`Jarrad adjusts his hard hat. "I've been standing here fifteen minutes." He has.`,Phil:`Phil sips the last of his tea, unhurried. "Right then. Let's go." He fastens his seatbelt twice.`,Tsuyoshi:"Tsuyoshi vaults in without opening the door. His mohawk grazes the roof lining.",Fabio:`Fabio loads in, trowel over his shoulder. "You're late. Ehhhh —" he waves it off. "I found a pizza place nearby. Very acceptable."`};async function bv(){await Ug();const o=await new X1().play();await new K1().show(o);const e=new zg;await e.init();const t=new Xg(e.scene);t.spawnCrewAtCityPositions();const i=new h1,n=new jg(e.scene),s=new d1,a=new m1,r=new N1,l=new Uo,c=new Zg(n,i,X=>{l.activePhase>=2&&s.triggerBump(X)},e.collisionWorld,()=>{l.activePhase>=2&&s.triggerCrash()}),h=new Cr(e.scene),u=new Pr,d=new fv,f=new yv;let g=Ar();const v=new u1(X=>{v.hide(),u.show(X.title,X.pay,le=>{const ne=Math.round(X.pay*ev()),Pe=iv(),Le=()=>{r.show(`📋 ${X.title}`,`Client: ${X.client}

${X.description}

💰 Pay: ${ne.toLocaleString()} sats${ne!==X.pay?" ✦ crew bonus!":""}

🏭 Head to the TEM workshop to collect supplies.`,()=>{X.pay=ne;const se=xo().map(Ie=>Ie.charAt(0).toUpperCase()+Ie.slice(1));if(l.acceptJob(X,se),h.setTarget(Uo.WORKSHOP_POS),a.setActiveJob(X,1),a.updateCrewStatus([],[],!1),de=0,tv())ve=1/0,Be=1/0;else{const Ie=20+Math.random()*60+Pe,De=Ie+20+Math.random()*50;Math.random()>.5?(ve=Ie,Be=De):(Be=Ie,ve=De)}Ue=null,Y=null},ln(U1))};X.isContested?te.show(se=>{g=Ar(),K=X.title,d.show(xo(),g,()=>{Le()}),setTimeout(()=>d.injectLeaderboard(X.title),50)}):Le()})});s.onSpill=X=>{l.money=Math.max(0,l.money-X),a.updateMoney(l.money),a.showSpillPenalty(X)};const m=new L1(e.scene),p=new Rr(e.scene),w=new D1,M=new pn(e.scene),y=new Rs(e.scene),R=new k1,C=new L(pn.POS.x,6,pn.POS.z),A=new S1,I=new A1,T=new Ns,b=new uv,P=new z1,z=new _v,O=new Z1(()=>I.show(),()=>{if(v.isVisible())v.hide();else{const X=[...l.getContestedJobs(),...l.getAvailableJobs()];v.show(X)}},()=>b.show(X=>{X>0&&(l.money+=X*1e3,a.updateMoney(l.money),a.showToast(`🎨 Formula cracked! +${(X*1e3).toLocaleString()} sats`,4513160))}),()=>z.show());O.mountMoneyPanel(a.getMoneyPanel()),O.mountRadio(P.getEl());let G=!1,K="",q=0;const te=new lv,W={x:-60,z:-100},re={x:100,z:60};let de=0,ve=-1,Be=-1,Ue=null,Y=null;e.onUpdate(X=>{const le=n.mesh.position.x,ne=n.mesh.position.z;if(r.isActive){(i.forward||i.brake)&&r.tryResume(),t.updateAll(X),M.update(X,le,ne,R),y.update(X,le,ne,R),e.camera.follow(n.mesh.position,n.velocity,n.heading);{const se=C.clone().project(e.camera.camera),Ie=(se.x*.5+.5)*window.innerWidth,De=(-se.y*.5+.5)*window.innerHeight;R.setScreenPosition(Ie,De)}return}c.update(X),n.updateSuspension(X);const Pe=l.activeJob!==null&&l.activePhase>=2;if(s.setVisible(Pe),Pe?s.update(X):s.level=0,t.updateAll(X),p.update(X),p.tryVisit(le,ne)&&Ue!=="coffee"&&(s.level=Math.max(0,s.level-.6),w.drinkCoffee(),w.isUrgent?a.showToast("☕ Coffeed up — now find a toilet, fast!",13918762):a.showToast("☕ Coffee hit! Plaster steady, bladder loading...",13918762)),w.update(X,l.activeJob?c.speed:0),w.tryRelief(le,ne)&&Ue!=="toilet"&&a.showToast("🚽 Ahhh! Relief! Ready for the next coffee ☕",2201331),w.isUrgent&&l.activeJob){const se=Date.now();se-w.lastUrgentToast>15e3&&(w.lastUrgentToast=se,a.showToast("🚽 Bursting! Find the toilet before you spill!",16733986))}s.spillRateMultiplier=w.spillMultiplier,M.update(X,le,ne,R)&&C.set(pn.POS.x,6,pn.POS.z),y.update(X,le,ne,R)&&C.set(Rs.POS.x,6,Rs.POS.z);const Le=t.checkProximityDialogue(le,ne);Le&&(C.set(Le.pos.x,6,Le.pos.z),R.show(Fi[Le.name],Le.line));{const se=C.clone().project(e.camera.camera),Ie=(se.x*.5+.5)*window.innerWidth,De=(-se.y*.5+.5)*window.innerHeight;R.setScreenPosition(Ie,De)}if(m.update(X,le,ne),h.update(X,le,ne),l.activeJob){const se=l.tickTravel(X);a.updateTravelTimer(l.travelTimer),se!=null&&se.failed&&(s.level=0,Ue=null,Y=null,ve=-1,Be=-1,h.setTarget(null),a.updateTravelTimer(null),a.showTimerFail(15e4),a.setActiveJob(null,1),a.updateMoney(l.money),a.updateCrewStatus([],[],!1),t.showAllCrew(),setTimeout(()=>{const Ie=[...l.getContestedJobs(),...l.getAvailableJobs()];v.show(Ie)},3500))}else a.updateTravelTimer(null);if(l.activeJob!==null)if(l.activePhase===1)a.updateJobDistance(l.distanceToWorkshop(le,ne));else if(l.activePhase===2){const se=l.nextCrewNeeded();if(se){const Ie=t.getCrewPosition(se);a.updateJobDistance(l.distanceToPoint(le,ne,Ie.x,Ie.z))}}else a.updateJobDistance(l.distanceTo(le,ne));if(l.activeJob&&!Ue&&!G&&(de+=X,ve>0&&de>=ve?(ve=-1,Ue="coffee",Y=h.currentTarget,h.setTarget(W),a.showToast("☕ Gagging for a coffee — hit the cafe NOW!",13918762)):Be>0&&de>=Be&&(Be=-1,Ue="toilet",w.level=.88,w.isUrgent=!0,Y=h.currentTarget,h.setTarget(re),a.showToast("🚽 Bursting! Find the toilet before you ruin the plastering!",16733986))),l.activeJob&&Ue&&!G){const se=Ue==="coffee"?W:re,Ie=le-se.x,De=ne-se.z;if(Math.sqrt(Ie*Ie+De*De)<14){G=!0;const qe=Ue;Ue=null;const D=Y;Y=null,qe==="coffee"?(w.drinkCoffee(),r.show("☕ Coffee Break!",`You grab a flat white. The barista nods — they know the order.

Bladder's loading... don't take too long.

Back on the road.`,()=>{h.setTarget(D),G=!1},ln(Ia))):(w.level=0,w.isUrgent=!1,w.caffeinated=!1,r.show("🚽 Phew — Crisis Averted!",`Barely made it. Not a word to the crew.

Back on the road.`,()=>{h.setTarget(D),G=!1},ln(Ia)))}}if(l.activeJob&&l.activePhase===1&&!Ue&&!G&&l.checkPhase1Arrival(le,ne)){G=!0,s.level=0,y.playLaugh();const se=l.crewToPickup.join(" + ");r.show("📦 Supplies Loaded!",`Connie's cackle echoes through the factory as the buckets go in.

Now go pick up the crew:
👷 ${se}

They're scattered around the city. Your waypoint will guide you.`,()=>{l.advanceToPhase2();const Ie=l.nextCrewNeeded();if(Ie){const De=t.getCrewPosition(Ie);h.setTarget(De)}a.showPhase1Complete(),a.setActiveJob(l.activeJob,2),a.updateCrewStatus(l.crewToPickup,l.crewPickedUp,!0),G=!1},ln(Pa))}if(l.activeJob&&l.activePhase===2&&!Ue&&!G)for(const se of l.crewToPickup){if(l.crewPickedUp.includes(se))continue;const Ie=t.getCrewPosition(se);if(l.distanceToPoint(le,ne,Ie.x,Ie.z)<10){G=!0,t.hideCrew(se);const qe=l.pickupCrew(se);a.updateCrewStatus(l.crewToPickup,l.crewPickedUp,!0);const D=xv[se]??`${se} hops in.`;if(qe)r.show(`🚐 ${se} aboard — Full crew!`,`${D}

Full crew loaded. Everyone's in (sort of).

Head to the job site now. Your waypoint is set.`,()=>{l.advanceToPhase3(),h.setTarget(l.activeJob.position),a.showCrewPickup(se,null),a.setActiveJob(l.activeJob,3),G=!1},ln(Pa));else{const et=l.nextCrewNeeded(),be=l.crewToPickup.filter(he=>!l.crewPickedUp.includes(he)).join(", ");r.show(`🧑‍🔧 ${se} aboard!`,`${D}

Still need to collect:
👷 ${be}`,()=>{if(et){const he=t.getCrewPosition(et);h.setTarget(he),a.showCrewPickup(se,et)}a.updateCrewStatus(l.crewToPickup,l.crewPickedUp,!0),G=!1},ln(Ia))}break}}if(l.activeJob&&l.activePhase===3&&!Ue&&!G&&!A.isActive()){const se=l.checkArrival(le,ne);se!==null&&(G=!0,h.setTarget(null),r.show(`🏗️ ${se.title}`,`${se.client} is waiting.

${se.description}

Time to get to work. Show them what TEM does.`,()=>{a.setActiveJob(null,3),a.updateCrewStatus([],[],!1),P.setVisible(!1),q=Date.now();const Ie=(De,qe=!1)=>{if(P.setVisible(!0),qe){const et=(Date.now()-q)/1e3;nv({player_name:$h()??"TEM Crew",job_title:K.replace(/^⚔️\s*/,"").trim(),crew_ids:xo(),completion_time_s:Math.round(et),payout:Math.max(0,se.pay)})}const D=l.completeJob(se,De);D<0?a.showPenalty(se.title,Math.abs(D)):a.showJobComplete(se.title,D),a.updateMoney(l.money),t.showAllCrew(),Ue=null,Y=null,ve=-1,Be=-1,G=!1,Xh()&&!Ns.isUnlocked()?setTimeout(()=>T.trigger(),2e3):setTimeout(()=>{const et=[...l.getContestedJobs(),...l.getAvailableJobs()];et.length>0&&v.show(et)},3500)};A.startScaffold(De=>{if(se.isContested){const qe=document.createElement("div");qe.style.cssText=`
                  position:fixed;inset:0;z-index:13999;
                  background:rgba(0,0,0,0.94);
                  display:flex;flex-direction:column;align-items:center;justify-content:center;
                  font-family:system-ui,sans-serif;animation:none;
                `,qe.innerHTML=`
                  <div style="font-size:46px;margin-bottom:12px;">⚔️</div>
                  <div style="color:#FFD700;font-size:24px;font-weight:900;letter-spacing:2px;">CONTRACT WARS</div>
                  <div style="color:#fff;font-size:15px;margin-top:8px;opacity:0.8;">PHASE 2 — TOWER DEFENCE</div>
                  <div style="color:#aaa;font-size:12px;margin-top:6px;">vs ${g.name}</div>
                  <div style="color:#FFD700;font-size:13px;margin-top:18px;opacity:0.6;">loading...</div>
                `,document.body.appendChild(qe);const D={jobTitle:se.title,payout:se.pay,crewIds:xo(),rival:{name:g.name,color:g.color,difficulty:g.difficulty}};setTimeout(()=>{qe.remove();try{f.show(D,et=>{et.won?Ie(1,!0):(P.setVisible(!0),a.showToast("⚔️ CONTRACT STOLEN — Better crew next time 😤",16724787),t.showAllCrew(),Ue=null,Y=null,ve=-1,Be=-1,G=!1,l.completeJob(se,0),a.updateMoney(l.money),setTimeout(()=>{const be=[...l.getContestedJobs(),...l.getAvailableJobs()];be.length>0&&v.show(be)},3500))})}catch(et){console.error("TowerDefence init failed:",et),Ie(1,!0)}},1800)}else Ie(1,!1)})},ln(Pa)))}e.camera.follow(n.mesh.position,n.velocity,n.heading),a.update(c.speed,s.level)}),setTimeout(()=>{const X=[...l.getContestedJobs(),...l.getAvailableJobs()];v.show(X)},1e3),e.start()}bv().catch(o=>{console.error("Game init failed:",o),document.body.style.background="#000";const e=document.createElement("div");e.style.cssText=`
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    color:#fff;font-family:sans-serif;font-size:18px;text-align:center;
    background:rgba(200,40,40,0.9);padding:24px 32px;border-radius:16px;
    max-width:90vw;z-index:9999;
  `,e.innerHTML=`<b>🚨 Game failed to start</b><br><br>${(o==null?void 0:o.message)||String(o)}`,document.body.appendChild(e)});
//# sourceMappingURL=index-Co9O7rcn.js.map
