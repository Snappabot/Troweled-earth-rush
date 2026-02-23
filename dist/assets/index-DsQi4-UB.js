var ld=Object.defineProperty;var cd=(s,t,e)=>t in s?ld(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var C=(s,t,e)=>cd(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ta="170",dd=0,Ia=1,hd=2,ac=1,lc=2,vn=3,zn=0,Re=1,ze=2,bn=0,Ri=1,rr=2,Da=3,La=4,ud=5,Zn=100,fd=101,pd=102,md=103,gd=104,xd=200,_d=201,vd=202,yd=203,ar=204,lr=205,Md=206,wd=207,bd=208,Sd=209,Ed=210,Td=211,Ad=212,Cd=213,Rd=214,cr=0,dr=1,hr=2,Di=3,ur=4,fr=5,pr=6,mr=7,ea=0,Pd=1,Id=2,On=0,cc=1,dc=2,hc=3,na=4,Dd=5,uc=6,fc=7,pc=300,Li=301,Fi=302,gr=303,xr=304,po=306,_r=1e3,ni=1001,vr=1002,nn=1003,Ld=1004,Es=1005,cn=1006,wo=1007,ii=1008,Tn=1009,mc=1010,gc=1011,fs=1012,ia=1013,ri=1014,Mn=1015,Sn=1016,sa=1017,oa=1018,Bi=1020,xc=35902,_c=1021,vc=1022,en=1023,yc=1024,Mc=1025,Pi=1026,Ui=1027,wc=1028,ra=1029,bc=1030,aa=1031,la=1033,Js=33776,Ks=33777,Zs=33778,Qs=33779,yr=35840,Mr=35841,wr=35842,br=35843,Sr=36196,Er=37492,Tr=37496,Ar=37808,Cr=37809,Rr=37810,Pr=37811,Ir=37812,Dr=37813,Lr=37814,Fr=37815,Br=37816,Ur=37817,Nr=37818,Or=37819,kr=37820,zr=37821,to=36492,Gr=36494,Hr=36495,Sc=36283,Vr=36284,Wr=36285,Xr=36286,Fd=2200,Bd=2201,Ud=2202,so=2300,qr=2301,bo=2302,Ei=2400,Ti=2401,oo=2402,ca=2500,Nd=2501,Od=3200,kd=3201,Ec=0,zd=1,Un="",Xe="srgb",zi="srgb-linear",mo="linear",ee="srgb",di=7680,Fa=519,Gd=512,Hd=513,Vd=514,Tc=515,Wd=516,Xd=517,qd=518,Yd=519,Ba=35044,Ua="300 es",wn=2e3,ro=2001;class ai{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const o=i.indexOf(e);o!==-1&&i.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let o=0,a=i.length;o<a;o++)i[o].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],So=Math.PI/180,Yr=180/Math.PI;function Gi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[s&255]+Te[s>>8&255]+Te[s>>16&255]+Te[s>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ue(s,t,e){return Math.max(t,Math.min(e,s))}function jd(s,t){return(s%t+t)%t}function Eo(s,t,e){return(1-e)*s+e*t}function $i(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Be(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*n-a*i+t.x,this.y=o*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,i,o,a,r,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,l,c)}set(t,e,n,i,o,a,r,l,c){const d=this.elements;return d[0]=t,d[1]=i,d[2]=r,d[3]=e,d[4]=o,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[3],l=n[6],c=n[1],d=n[4],h=n[7],u=n[2],p=n[5],g=n[8],x=i[0],m=i[3],f=i[6],w=i[1],S=i[4],_=i[7],I=i[2],A=i[5],T=i[8];return o[0]=a*x+r*w+l*I,o[3]=a*m+r*S+l*A,o[6]=a*f+r*_+l*T,o[1]=c*x+d*w+h*I,o[4]=c*m+d*S+h*A,o[7]=c*f+d*_+h*T,o[2]=u*x+p*w+g*I,o[5]=u*m+p*S+g*A,o[8]=u*f+p*_+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],d=t[8];return e*a*d-e*r*c-n*o*d+n*r*l+i*o*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],d=t[8],h=d*a-r*c,u=r*l-d*o,p=c*o-a*l,g=e*h+n*u+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=h*x,t[1]=(i*c-d*n)*x,t[2]=(r*n-i*a)*x,t[3]=u*x,t[4]=(d*e-i*l)*x,t[5]=(i*o-r*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,o,a,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*a+c*r)+a+t,-i*c,i*l,-i*(-c*a+l*r)+r+e,0,0,1),this}scale(t,e){return this.premultiply(To.makeScale(t,e)),this}rotate(t){return this.premultiply(To.makeRotation(-t)),this}translate(t,e){return this.premultiply(To.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const To=new zt;function Ac(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ao(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function $d(){const s=ao("canvas");return s.style.display="block",s}const Na={};function as(s){s in Na||(Na[s]=!0,console.warn(s))}function Jd(s,t,e){return new Promise(function(n,i){function o(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Kd(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Zd(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:zi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ee&&(s.r=En(s.r),s.g=En(s.g),s.b=En(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ee&&(s.r=Ii(s.r),s.g=Ii(s.g),s.b=Ii(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Un?mo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function En(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ii(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Oa=[.64,.33,.3,.6,.15,.06],ka=[.2126,.7152,.0722],za=[.3127,.329],Ga=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ha=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[zi]:{primaries:Oa,whitePoint:za,transfer:mo,toXYZ:Ga,fromXYZ:Ha,luminanceCoefficients:ka,workingColorSpaceConfig:{unpackColorSpace:Xe},outputColorSpaceConfig:{drawingBufferColorSpace:Xe}},[Xe]:{primaries:Oa,whitePoint:za,transfer:ee,toXYZ:Ga,fromXYZ:Ha,luminanceCoefficients:ka,outputColorSpaceConfig:{drawingBufferColorSpace:Xe}}});let hi;class Qd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hi===void 0&&(hi=ao("canvas")),hi.width=t.width,hi.height=t.height;const n=hi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ao("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),o=i.data;for(let a=0;a<o.length;a++)o[a]=En(o[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(En(e[n]/255)*255):e[n]=En(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let th=0;class Cc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:th++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let o;if(Array.isArray(i)){o=[];for(let a=0,r=i.length;a<r;a++)i[a].isDataTexture?o.push(Ao(i[a].image)):o.push(Ao(i[a]))}else o=Ao(i);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ao(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Qd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eh=0;class Le extends ai{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=ni,i=ni,o=cn,a=ii,r=en,l=Tn,c=Le.DEFAULT_ANISOTROPY,d=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Gi(),this.name="",this.source=new Cc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _r:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case vr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _r:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case vr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=pc;Le.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,n=0,i=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*o,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*o,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*o,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,o;const l=t.elements,c=l[0],d=l[4],h=l[8],u=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(d-u)<.01&&Math.abs(h-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+u)<.1&&Math.abs(h+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,_=(p+1)/2,I=(f+1)/2,A=(d+u)/4,T=(h+x)/4,R=(g+m)/4;return S>_&&S>I?S<.01?(n=0,i=.707106781,o=.707106781):(n=Math.sqrt(S),i=A/n,o=T/n):_>I?_<.01?(n=.707106781,i=0,o=.707106781):(i=Math.sqrt(_),n=A/i,o=R/i):I<.01?(n=.707106781,i=.707106781,o=0):(o=Math.sqrt(I),n=T/o,i=R/o),this.set(n,i,o,e),this}let w=Math.sqrt((m-g)*(m-g)+(h-x)*(h-x)+(u-d)*(u-d));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(h-x)/w,this.z=(u-d)/w,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nh extends ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Le(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let r=0;r<a;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,o=this.textures.length;i<o;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sn extends nh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Rc extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ih extends Le{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=nn,this.minFilter=nn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qe{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,o,a,r){let l=n[i+0],c=n[i+1],d=n[i+2],h=n[i+3];const u=o[a+0],p=o[a+1],g=o[a+2],x=o[a+3];if(r===0){t[e+0]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h;return}if(r===1){t[e+0]=u,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(h!==x||l!==u||c!==p||d!==g){let m=1-r;const f=l*u+c*p+d*g+h*x,w=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const I=Math.sqrt(S),A=Math.atan2(I,f*w);m=Math.sin(m*A)/I,r=Math.sin(r*A)/I}const _=r*w;if(l=l*m+u*_,c=c*m+p*_,d=d*m+g*_,h=h*m+x*_,m===1-r){const I=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=I,c*=I,d*=I,h*=I}}t[e]=l,t[e+1]=c,t[e+2]=d,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,o,a){const r=n[i],l=n[i+1],c=n[i+2],d=n[i+3],h=o[a],u=o[a+1],p=o[a+2],g=o[a+3];return t[e]=r*g+d*h+l*p-c*u,t[e+1]=l*g+d*u+c*h-r*p,t[e+2]=c*g+d*p+r*u-l*h,t[e+3]=d*g-r*h-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,o=t._z,a=t._order,r=Math.cos,l=Math.sin,c=r(n/2),d=r(i/2),h=r(o/2),u=l(n/2),p=l(i/2),g=l(o/2);switch(a){case"XYZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"YXZ":this._x=u*d*h+c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"ZXY":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h-u*p*g;break;case"ZYX":this._x=u*d*h-c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h+u*p*g;break;case"YZX":this._x=u*d*h+c*p*g,this._y=c*p*h+u*d*g,this._z=c*d*g-u*p*h,this._w=c*d*h-u*p*g;break;case"XZY":this._x=u*d*h-c*p*g,this._y=c*p*h-u*d*g,this._z=c*d*g+u*p*h,this._w=c*d*h+u*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],o=e[8],a=e[1],r=e[5],l=e[9],c=e[2],d=e[6],h=e[10],u=n+r+h;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(o-c)*p,this._z=(a-i)*p}else if(n>r&&n>h){const p=2*Math.sqrt(1+n-r-h);this._w=(d-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(o+c)/p}else if(r>h){const p=2*Math.sqrt(1+r-n-h);this._w=(o-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+h-n-r);this._w=(a-i)/p,this._x=(o+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ue(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,o=t._z,a=t._w,r=e._x,l=e._y,c=e._z,d=e._w;return this._x=n*d+a*r+i*c-o*l,this._y=i*d+a*l+o*r-n*c,this._z=o*d+a*c+n*l-i*r,this._w=a*d-n*r-i*l-o*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,o=this._z,a=this._w;let r=a*t._w+n*t._x+i*t._y+o*t._z;if(r<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,r=-r):this.copy(t),r>=1)return this._w=a,this._x=n,this._y=i,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,r),h=Math.sin((1-e)*d)/c,u=Math.sin(e*d)/c;return this._w=a*h+this._w*u,this._x=n*h+this._x*u,this._y=i*h+this._y*u,this._z=o*h+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Va.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Va.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*i,this.y=o[1]*e+o[4]*n+o[7]*i,this.z=o[2]*e+o[5]*n+o[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,o=t.elements,a=1/(o[3]*e+o[7]*n+o[11]*i+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*i+o[12])*a,this.y=(o[1]*e+o[5]*n+o[9]*i+o[13])*a,this.z=(o[2]*e+o[6]*n+o[10]*i+o[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,o=t.x,a=t.y,r=t.z,l=t.w,c=2*(a*i-r*n),d=2*(r*e-o*i),h=2*(o*n-a*e);return this.x=e+l*c+a*h-r*d,this.y=n+l*d+r*c-o*h,this.z=i+l*h+o*d-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i,this.y=o[1]*e+o[5]*n+o[9]*i,this.z=o[2]*e+o[6]*n+o[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,o=t.z,a=e.x,r=e.y,l=e.z;return this.x=i*l-o*r,this.y=o*a-n*l,this.z=n*r-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Co.copy(this).projectOnVector(t),this.sub(Co)}reflect(t){return this.sub(Co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Co=new L,Va=new qe;class _s{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,r=o.count;a<r;a++)t.isMesh===!0?t.getVertexPosition(a,$e):$e.fromBufferAttribute(o,a),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ts.copy(n.boundingBox)),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}const i=t.children;for(let o=0,a=i.length;o<a;o++)this.expandByObject(i[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ji),As.subVectors(this.max,Ji),ui.subVectors(t.a,Ji),fi.subVectors(t.b,Ji),pi.subVectors(t.c,Ji),Pn.subVectors(fi,ui),In.subVectors(pi,fi),Hn.subVectors(ui,pi);let e=[0,-Pn.z,Pn.y,0,-In.z,In.y,0,-Hn.z,Hn.y,Pn.z,0,-Pn.x,In.z,0,-In.x,Hn.z,0,-Hn.x,-Pn.y,Pn.x,0,-In.y,In.x,0,-Hn.y,Hn.x,0];return!Ro(e,ui,fi,pi,As)||(e=[1,0,0,0,1,0,0,0,1],!Ro(e,ui,fi,pi,As))?!1:(Cs.crossVectors(Pn,In),e=[Cs.x,Cs.y,Cs.z],Ro(e,ui,fi,pi,As))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const fn=[new L,new L,new L,new L,new L,new L,new L,new L],$e=new L,Ts=new _s,ui=new L,fi=new L,pi=new L,Pn=new L,In=new L,Hn=new L,Ji=new L,As=new L,Cs=new L,Vn=new L;function Ro(s,t,e,n,i){for(let o=0,a=s.length-3;o<=a;o+=3){Vn.fromArray(s,o);const r=i.x*Math.abs(Vn.x)+i.y*Math.abs(Vn.y)+i.z*Math.abs(Vn.z),l=t.dot(Vn),c=e.dot(Vn),d=n.dot(Vn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>r)return!1}return!0}const sh=new _s,Ki=new L,Po=new L;class go{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):sh.setFromPoints(t).getCenter(n);let i=0;for(let o=0,a=t.length;o<a;o++)i=Math.max(i,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ki.subVectors(t,this.center);const e=Ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ki,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Po.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ki.copy(t.center).add(Po)),this.expandByPoint(Ki.copy(t.center).sub(Po))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new L,Io=new L,Rs=new L,Dn=new L,Do=new L,Ps=new L,Lo=new L;class Pc{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Io.copy(t).add(e).multiplyScalar(.5),Rs.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(Io);const o=t.distanceTo(e)*.5,a=-this.direction.dot(Rs),r=Dn.dot(this.direction),l=-Dn.dot(Rs),c=Dn.lengthSq(),d=Math.abs(1-a*a);let h,u,p,g;if(d>0)if(h=a*l-r,u=a*r-l,g=o*d,h>=0)if(u>=-g)if(u<=g){const x=1/d;h*=x,u*=x,p=h*(h+a*u+2*r)+u*(a*h+u+2*l)+c}else u=o,h=Math.max(0,-(a*u+r)),p=-h*h+u*(u+2*l)+c;else u=-o,h=Math.max(0,-(a*u+r)),p=-h*h+u*(u+2*l)+c;else u<=-g?(h=Math.max(0,-(-a*o+r)),u=h>0?-o:Math.min(Math.max(-o,-l),o),p=-h*h+u*(u+2*l)+c):u<=g?(h=0,u=Math.min(Math.max(-o,-l),o),p=u*(u+2*l)+c):(h=Math.max(0,-(a*o+r)),u=h>0?o:Math.min(Math.max(-o,-l),o),p=-h*h+u*(u+2*l)+c);else u=a>0?-o:o,h=Math.max(0,-(a*u+r)),p=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Io).addScaledVector(Rs,u),p}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),i=pn.dot(pn)-n*n,o=t.radius*t.radius;if(i>o)return null;const a=Math.sqrt(o-i),r=n-a,l=n+a;return l<0?null:r<0?this.at(l,e):this.at(r,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,o,a,r,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),d>=0?(o=(t.min.y-u.y)*d,a=(t.max.y-u.y)*d):(o=(t.max.y-u.y)*d,a=(t.min.y-u.y)*d),n>a||o>i||((o>n||isNaN(n))&&(n=o),(a<i||isNaN(i))&&(i=a),h>=0?(r=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(r=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||r>i)||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,i,o){Do.subVectors(e,t),Ps.subVectors(n,t),Lo.crossVectors(Do,Ps);let a=this.direction.dot(Lo),r;if(a>0){if(i)return null;r=1}else if(a<0)r=-1,a=-a;else return null;Dn.subVectors(this.origin,t);const l=r*this.direction.dot(Ps.crossVectors(Dn,Ps));if(l<0)return null;const c=r*this.direction.dot(Do.cross(Dn));if(c<0||l+c>a)return null;const d=-r*Dn.dot(Lo);return d<0?null:this.at(d/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,n,i,o,a,r,l,c,d,h,u,p,g,x,m){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,o,a,r,l,c,d,h,u,p,g,x,m)}set(t,e,n,i,o,a,r,l,c,d,h,u,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=o,f[5]=a,f[9]=r,f[13]=l,f[2]=c,f[6]=d,f[10]=h,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/mi.setFromMatrixColumn(t,0).length(),o=1/mi.setFromMatrixColumn(t,1).length(),a=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,o=t.z,a=Math.cos(n),r=Math.sin(n),l=Math.cos(i),c=Math.sin(i),d=Math.cos(o),h=Math.sin(o);if(t.order==="XYZ"){const u=a*d,p=a*h,g=r*d,x=r*h;e[0]=l*d,e[4]=-l*h,e[8]=c,e[1]=p+g*c,e[5]=u-x*c,e[9]=-r*l,e[2]=x-u*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*d,p=l*h,g=c*d,x=c*h;e[0]=u+x*r,e[4]=g*r-p,e[8]=a*c,e[1]=a*h,e[5]=a*d,e[9]=-r,e[2]=p*r-g,e[6]=x+u*r,e[10]=a*l}else if(t.order==="ZXY"){const u=l*d,p=l*h,g=c*d,x=c*h;e[0]=u-x*r,e[4]=-a*h,e[8]=g+p*r,e[1]=p+g*r,e[5]=a*d,e[9]=x-u*r,e[2]=-a*c,e[6]=r,e[10]=a*l}else if(t.order==="ZYX"){const u=a*d,p=a*h,g=r*d,x=r*h;e[0]=l*d,e[4]=g*c-p,e[8]=u*c+x,e[1]=l*h,e[5]=x*c+u,e[9]=p*c-g,e[2]=-c,e[6]=r*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,p=a*c,g=r*l,x=r*c;e[0]=l*d,e[4]=x-u*h,e[8]=g*h+p,e[1]=h,e[5]=a*d,e[9]=-r*d,e[2]=-c*d,e[6]=p*h+g,e[10]=u-x*h}else if(t.order==="XZY"){const u=a*l,p=a*c,g=r*l,x=r*c;e[0]=l*d,e[4]=-h,e[8]=c*d,e[1]=u*h+x,e[5]=a*d,e[9]=p*h-g,e[2]=g*h-p,e[6]=r*d,e[10]=x*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(oh,t,rh)}lookAt(t,e,n){const i=this.elements;return Oe.subVectors(t,e),Oe.lengthSq()===0&&(Oe.z=1),Oe.normalize(),Ln.crossVectors(n,Oe),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Oe.x+=1e-4:Oe.z+=1e-4,Oe.normalize(),Ln.crossVectors(n,Oe)),Ln.normalize(),Is.crossVectors(Oe,Ln),i[0]=Ln.x,i[4]=Is.x,i[8]=Oe.x,i[1]=Ln.y,i[5]=Is.y,i[9]=Oe.y,i[2]=Ln.z,i[6]=Is.z,i[10]=Oe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,o=this.elements,a=n[0],r=n[4],l=n[8],c=n[12],d=n[1],h=n[5],u=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],w=n[3],S=n[7],_=n[11],I=n[15],A=i[0],T=i[4],R=i[8],b=i[12],y=i[1],P=i[5],G=i[9],O=i[13],H=i[2],$=i[6],Y=i[10],X=i[14],k=i[3],nt=i[7],dt=i[11],vt=i[15];return o[0]=a*A+r*y+l*H+c*k,o[4]=a*T+r*P+l*$+c*nt,o[8]=a*R+r*G+l*Y+c*dt,o[12]=a*b+r*O+l*X+c*vt,o[1]=d*A+h*y+u*H+p*k,o[5]=d*T+h*P+u*$+p*nt,o[9]=d*R+h*G+u*Y+p*dt,o[13]=d*b+h*O+u*X+p*vt,o[2]=g*A+x*y+m*H+f*k,o[6]=g*T+x*P+m*$+f*nt,o[10]=g*R+x*G+m*Y+f*dt,o[14]=g*b+x*O+m*X+f*vt,o[3]=w*A+S*y+_*H+I*k,o[7]=w*T+S*P+_*$+I*nt,o[11]=w*R+S*G+_*Y+I*dt,o[15]=w*b+S*O+_*X+I*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],o=t[12],a=t[1],r=t[5],l=t[9],c=t[13],d=t[2],h=t[6],u=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+o*l*h-i*c*h-o*r*u+n*c*u+i*r*p-n*l*p)+x*(+e*l*p-e*c*u+o*a*u-i*a*p+i*c*d-o*l*d)+m*(+e*c*h-e*r*p-o*a*h+n*a*p+o*r*d-n*c*d)+f*(-i*r*d-e*l*h+e*r*u+i*a*h-n*a*u+n*l*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],o=t[3],a=t[4],r=t[5],l=t[6],c=t[7],d=t[8],h=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],w=h*m*c-x*u*c+x*l*p-r*m*p-h*l*f+r*u*f,S=g*u*c-d*m*c-g*l*p+a*m*p+d*l*f-a*u*f,_=d*x*c-g*h*c+g*r*p-a*x*p-d*r*f+a*h*f,I=g*h*l-d*x*l-g*r*u+a*x*u+d*r*m-a*h*m,A=e*w+n*S+i*_+o*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=w*T,t[1]=(x*u*o-h*m*o-x*i*p+n*m*p+h*i*f-n*u*f)*T,t[2]=(r*m*o-x*l*o+x*i*c-n*m*c-r*i*f+n*l*f)*T,t[3]=(h*l*o-r*u*o-h*i*c+n*u*c+r*i*p-n*l*p)*T,t[4]=S*T,t[5]=(d*m*o-g*u*o+g*i*p-e*m*p-d*i*f+e*u*f)*T,t[6]=(g*l*o-a*m*o-g*i*c+e*m*c+a*i*f-e*l*f)*T,t[7]=(a*u*o-d*l*o+d*i*c-e*u*c-a*i*p+e*l*p)*T,t[8]=_*T,t[9]=(g*h*o-d*x*o-g*n*p+e*x*p+d*n*f-e*h*f)*T,t[10]=(a*x*o-g*r*o+g*n*c-e*x*c-a*n*f+e*r*f)*T,t[11]=(d*r*o-a*h*o-d*n*c+e*h*c+a*n*p-e*r*p)*T,t[12]=I*T,t[13]=(d*x*i-g*h*i+g*n*u-e*x*u-d*n*m+e*h*m)*T,t[14]=(g*r*i-a*x*i-g*n*l+e*x*l+a*n*m-e*r*m)*T,t[15]=(a*h*i-d*r*i+d*n*l-e*h*l-a*n*u+e*r*u)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,o=t.z;return e[0]*=n,e[4]*=i,e[8]*=o,e[1]*=n,e[5]*=i,e[9]*=o,e[2]*=n,e[6]*=i,e[10]*=o,e[3]*=n,e[7]*=i,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),o=1-n,a=t.x,r=t.y,l=t.z,c=o*a,d=o*r;return this.set(c*a+n,c*r-i*l,c*l+i*r,0,c*r+i*l,d*r+n,d*l-i*a,0,c*l-i*r,d*l+i*a,o*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,o,a){return this.set(1,n,o,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,o=e._x,a=e._y,r=e._z,l=e._w,c=o+o,d=a+a,h=r+r,u=o*c,p=o*d,g=o*h,x=a*d,m=a*h,f=r*h,w=l*c,S=l*d,_=l*h,I=n.x,A=n.y,T=n.z;return i[0]=(1-(x+f))*I,i[1]=(p+_)*I,i[2]=(g-S)*I,i[3]=0,i[4]=(p-_)*A,i[5]=(1-(u+f))*A,i[6]=(m+w)*A,i[7]=0,i[8]=(g+S)*T,i[9]=(m-w)*T,i[10]=(1-(u+x))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let o=mi.set(i[0],i[1],i[2]).length();const a=mi.set(i[4],i[5],i[6]).length(),r=mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(o=-o),t.x=i[12],t.y=i[13],t.z=i[14],Je.copy(this);const c=1/o,d=1/a,h=1/r;return Je.elements[0]*=c,Je.elements[1]*=c,Je.elements[2]*=c,Je.elements[4]*=d,Je.elements[5]*=d,Je.elements[6]*=d,Je.elements[8]*=h,Je.elements[9]*=h,Je.elements[10]*=h,e.setFromRotationMatrix(Je),n.x=o,n.y=a,n.z=r,this}makePerspective(t,e,n,i,o,a,r=wn){const l=this.elements,c=2*o/(e-t),d=2*o/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i);let p,g;if(r===wn)p=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(r===ro)p=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,o,a,r=wn){const l=this.elements,c=1/(e-t),d=1/(n-i),h=1/(a-o),u=(e+t)*c,p=(n+i)*d;let g,x;if(r===wn)g=(a+o)*h,x=-2*h;else if(r===ro)g=o*h,x=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const mi=new L,Je=new ue,oh=new L(0,0,0),rh=new L(1,1,1),Ln=new L,Is=new L,Oe=new L,Wa=new ue,Xa=new qe;class Ge{constructor(t=0,e=0,n=0,i=Ge.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,o=i[0],a=i[4],r=i[8],l=i[1],c=i[5],d=i[9],h=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ue(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ue(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-Ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-Ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xa.setFromEuler(this),this.setFromQuaternion(Xa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ge.DEFAULT_ORDER="XYZ";class Ic{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ah=0;const qa=new L,gi=new qe,mn=new ue,Ds=new L,Zi=new L,lh=new L,ch=new qe,Ya=new L(1,0,0),ja=new L(0,1,0),$a=new L(0,0,1),Ja={type:"added"},dh={type:"removed"},xi={type:"childadded",child:null},Fo={type:"childremoved",child:null};class _e extends ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new L,e=new Ge,n=new qe,i=new L(1,1,1);function o(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new zt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(Ya,t)}rotateY(t){return this.rotateOnAxis(ja,t)}rotateZ(t){return this.rotateOnAxis($a,t)}translateOnAxis(t,e){return qa.copy(t).applyQuaternion(this.quaternion),this.position.add(qa.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ya,t)}translateY(t){return this.translateOnAxis(ja,t)}translateZ(t){return this.translateOnAxis($a,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ds.copy(t):Ds.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Zi,Ds,this.up):mn.lookAt(Ds,Zi,this.up),this.quaternion.setFromRotationMatrix(mn),i&&(mn.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(mn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ja),xi.child=t,this.dispatchEvent(xi),xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dh),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ja),xi.child=t,this.dispatchEvent(xi),xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,t,lh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,ch,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let o=0,a=i.length;o<a;o++)i[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(r=>({boxInitialized:r.boxInitialized,boxMin:r.box.min.toArray(),boxMax:r.box.max.toArray(),sphereInitialized:r.sphereInitialized,sphereRadius:r.sphere.radius,sphereCenter:r.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=o(t.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(t.materials,this.material[l]));i.material=r}else i.material=o(t.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];i.animations.push(o(t.animations,l))}}if(e){const r=a(t.geometries),l=a(t.materials),c=a(t.textures),d=a(t.images),h=a(t.shapes),u=a(t.skeletons),p=a(t.animations),g=a(t.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(r){const l=[];for(const c in r){const d=r[c];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}_e.DEFAULT_UP=new L(0,1,0);_e.DEFAULT_MATRIX_AUTO_UPDATE=!0;_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new L,gn=new L,Bo=new L,xn=new L,_i=new L,vi=new L,Ka=new L,Uo=new L,No=new L,Oo=new L,ko=new ie,zo=new ie,Go=new ie;class tn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const o=i.lengthSq();return o>0?i.multiplyScalar(1/Math.sqrt(o)):i.set(0,0,0)}static getBarycoord(t,e,n,i,o){Ke.subVectors(i,e),gn.subVectors(n,e),Bo.subVectors(t,e);const a=Ke.dot(Ke),r=Ke.dot(gn),l=Ke.dot(Bo),c=gn.dot(gn),d=gn.dot(Bo),h=a*c-r*r;if(h===0)return o.set(0,0,0),null;const u=1/h,p=(c*l-r*d)*u,g=(a*d-r*l)*u;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,n,i,o,a,r,l){return this.getBarycoord(t,e,n,i,xn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,xn.x),l.addScaledVector(a,xn.y),l.addScaledVector(r,xn.z),l)}static getInterpolatedAttribute(t,e,n,i,o,a){return ko.setScalar(0),zo.setScalar(0),Go.setScalar(0),ko.fromBufferAttribute(t,e),zo.fromBufferAttribute(t,n),Go.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(ko,o.x),a.addScaledVector(zo,o.y),a.addScaledVector(Go,o.z),a}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),gn.subVectors(t,e),Ke.cross(gn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Ke.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,o){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,o)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,o=this.c;let a,r;_i.subVectors(i,n),vi.subVectors(o,n),Uo.subVectors(t,n);const l=_i.dot(Uo),c=vi.dot(Uo);if(l<=0&&c<=0)return e.copy(n);No.subVectors(t,i);const d=_i.dot(No),h=vi.dot(No);if(d>=0&&h<=d)return e.copy(i);const u=l*h-d*c;if(u<=0&&l>=0&&d<=0)return a=l/(l-d),e.copy(n).addScaledVector(_i,a);Oo.subVectors(t,o);const p=_i.dot(Oo),g=vi.dot(Oo);if(g>=0&&p<=g)return e.copy(o);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return r=c/(c-g),e.copy(n).addScaledVector(vi,r);const m=d*g-p*h;if(m<=0&&h-d>=0&&p-g>=0)return Ka.subVectors(o,i),r=(h-d)/(h-d+(p-g)),e.copy(i).addScaledVector(Ka,r);const f=1/(m+x+u);return a=x*f,r=u*f,e.copy(n).addScaledVector(_i,a).addScaledVector(vi,r)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function Ho(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Yt.workingColorSpace){if(t=jd(t,1),e=Ue(e,0,1),n=Ue(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,a=2*n-o;this.r=Ho(a,o,t+1/3),this.g=Ho(a,o,t),this.b=Ho(a,o,t-1/3)}return Yt.toWorkingColorSpace(this,i),this}setStyle(t,e=Xe){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=i[1],r=i[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=i[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Xe){const n=Dc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=En(t.r),this.g=En(t.g),this.b=En(t.b),this}copyLinearToSRGB(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xe){return Yt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Ue(Ae.r*255,0,255))*65536+Math.round(Ue(Ae.g*255,0,255))*256+Math.round(Ue(Ae.b*255,0,255))}getHexString(t=Xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,o=Ae.b,a=Math.max(n,i,o),r=Math.min(n,i,o);let l,c;const d=(r+a)/2;if(r===a)l=0,c=0;else{const h=a-r;switch(c=d<=.5?h/(a+r):h/(2-a-r),a){case n:l=(i-o)/h+(i<o?6:0);break;case i:l=(o-n)/h+2;break;case o:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=d,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Xe){Yt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==Xe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Ls);const n=Eo(Fn.h,Ls.h,e),i=Eo(Fn.s,Ls.s,e),o=Eo(Fn.l,Ls.l,e);return this.setHSL(n,i,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*i,this.g=o[1]*e+o[4]*n+o[7]*i,this.b=o[2]*e+o[5]*n+o[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Mt;Mt.NAMES=Dc;let hh=0;class Hi extends ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Gi(),this.name="",this.blending=Ri,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ar,this.blendDst=lr,this.blendEquation=Zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=di,this.stencilZFail=di,this.stencilZPass=di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ar&&(n.blendSrc=this.blendSrc),this.blendDst!==lr&&(n.blendDst=this.blendDst),this.blendEquation!==Zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Di&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(o){const a=[];for(const r in o){const l=o[r];delete l.metadata,a.push(l)}return a}if(e){const o=i(t.textures),a=i(t.images);o.length>0&&(n.textures=o),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let o=0;o!==i;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class He extends Hi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ge=new L,Fs=new Dt;class on{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ba,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,o=this.itemSize;i<o;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fs.fromBufferAttribute(this,e),Fs.applyMatrix3(t),this.setXY(e,Fs.x,Fs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Be(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,o){return t*=this.itemSize,this.normalized&&(e=Be(e,this.array),n=Be(n,this.array),i=Be(i,this.array),o=Be(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ba&&(t.usage=this.usage),t}}class Lc extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Fc extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}}let uh=0;const We=new ue,Vo=new _e,yi=new L,ke=new _s,Qi=new _s,we=new L;class Pe extends ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ac(t)?Fc:Lc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new zt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return Vo.lookAt(t),Vo.updateMatrix(),this.applyMatrix4(Vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yi).negate(),this.translate(yi.x,yi.y,yi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,o=t.length;i<o;i++){const a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new se(n,3))}else{for(let n=0,i=e.count;n<i;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _s);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const o=e[n];ke.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new go);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const r=e[o];Qi.setFromBufferAttribute(r),this.morphTargetsRelative?(we.addVectors(ke.min,Qi.min),ke.expandByPoint(we),we.addVectors(ke.max,Qi.max),ke.expandByPoint(we)):(ke.expandByPoint(Qi.min),ke.expandByPoint(Qi.max))}ke.getCenter(n);let i=0;for(let o=0,a=t.count;o<a;o++)we.fromBufferAttribute(t,o),i=Math.max(i,n.distanceToSquared(we));if(e)for(let o=0,a=e.length;o<a;o++){const r=e[o],l=this.morphTargetsRelative;for(let c=0,d=r.count;c<d;c++)we.fromBufferAttribute(r,c),l&&(yi.fromBufferAttribute(t,c),we.add(yi)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),r=[],l=[];for(let R=0;R<n.count;R++)r[R]=new L,l[R]=new L;const c=new L,d=new L,h=new L,u=new Dt,p=new Dt,g=new Dt,x=new L,m=new L;function f(R,b,y){c.fromBufferAttribute(n,R),d.fromBufferAttribute(n,b),h.fromBufferAttribute(n,y),u.fromBufferAttribute(o,R),p.fromBufferAttribute(o,b),g.fromBufferAttribute(o,y),d.sub(c),h.sub(c),p.sub(u),g.sub(u);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(P),r[R].add(x),r[b].add(x),r[y].add(x),l[R].add(m),l[b].add(m),l[y].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let R=0,b=w.length;R<b;++R){const y=w[R],P=y.start,G=y.count;for(let O=P,H=P+G;O<H;O+=3)f(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new L,_=new L,I=new L,A=new L;function T(R){I.fromBufferAttribute(i,R),A.copy(I);const b=r[R];S.copy(b),S.sub(I.multiplyScalar(I.dot(b))).normalize(),_.crossVectors(A,b);const P=_.dot(l[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,P)}for(let R=0,b=w.length;R<b;++R){const y=w[R],P=y.start,G=y.count;for(let O=P,H=P+G;O<H;O+=3)T(t.getX(O+0)),T(t.getX(O+1)),T(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new L,o=new L,a=new L,r=new L,l=new L,c=new L,d=new L,h=new L;if(t)for(let u=0,p=t.count;u<p;u+=3){const g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),a.fromBufferAttribute(e,m),d.subVectors(a,o),h.subVectors(i,o),d.cross(h),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),r.add(d),l.add(d),c.add(d),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),d.subVectors(a,o),h.subVectors(i,o),d.cross(h),n.setXYZ(u+0,d.x,d.y,d.z),n.setXYZ(u+1,d.x,d.y,d.z),n.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(r,l){const c=r.array,d=r.itemSize,h=r.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){r.isInterleavedBufferAttribute?p=l[x]*r.data.stride+r.offset:p=l[x]*d;for(let f=0;f<d;f++)u[g++]=c[p++]}return new on(u,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,i=this.attributes;for(const r in i){const l=i[r],c=t(l,n);e.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let d=0,h=c.length;d<h;d++){const u=c[d],p=t(u,n);l.push(p)}e.morphAttributes[r]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let r=0,l=a.length;r<l;r++){const c=a[r];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,u=c.length;h<u;h++){const p=c[h];d.push(p.toJSON(t.data))}d.length>0&&(i[l]=d,o=!0)}o&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const r=this.boundingSphere;return r!==null&&(t.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const d=i[c];this.setAttribute(c,d.clone(e))}const o=t.morphAttributes;for(const c in o){const d=[],h=o[c];for(let u=0,p=h.length;u<p;u++)d.push(h[u].clone(e));this.morphAttributes[c]=d}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const r=t.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Za=new ue,Wn=new Pc,Bs=new go,Qa=new L,Us=new L,Ns=new L,Os=new L,Wo=new L,ks=new L,tl=new L,zs=new L;class D extends _e{constructor(t=new Pe,e=new He){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,o=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const r=this.morphTargetInfluences;if(o&&r){ks.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const d=r[l],h=o[l];d!==0&&(Wo.fromBufferAttribute(h,t),a?ks.addScaledVector(Wo,d):ks.addScaledVector(Wo.sub(e),d))}e.add(ks)}return e}raycast(t,e){const n=this.geometry,i=this.material,o=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bs.copy(n.boundingSphere),Bs.applyMatrix4(o),Wn.copy(t.ray).recast(t.near),!(Bs.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Bs,Qa)===null||Wn.origin.distanceToSquared(Qa)>(t.far-t.near)**2))&&(Za.copy(o).invert(),Wn.copy(t.ray).applyMatrix4(Za),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let i;const o=this.geometry,a=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,d=o.attributes.uv1,h=o.attributes.normal,u=o.groups,p=o.drawRange;if(r!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),S=Math.min(r.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,I=S;_<I;_+=3){const A=r.getX(_),T=r.getX(_+1),R=r.getX(_+2);i=Gs(this,f,t,n,c,d,h,A,T,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(r.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const w=r.getX(m),S=r.getX(m+1),_=r.getX(m+2);i=Gs(this,a,t,n,c,d,h,w,S,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){const m=u[g],f=a[m.materialIndex],w=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=w,I=S;_<I;_+=3){const A=_,T=_+1,R=_+2;i=Gs(this,f,t,n,c,d,h,A,T,R),i&&(i.faceIndex=Math.floor(_/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const w=m,S=m+1,_=m+2;i=Gs(this,a,t,n,c,d,h,w,S,_),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function fh(s,t,e,n,i,o,a,r){let l;if(t.side===Re?l=n.intersectTriangle(a,o,i,!0,r):l=n.intersectTriangle(i,o,a,t.side===zn,r),l===null)return null;zs.copy(r),zs.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(zs);return c<e.near||c>e.far?null:{distance:c,point:zs.clone(),object:s}}function Gs(s,t,e,n,i,o,a,r,l,c){s.getVertexPosition(r,Us),s.getVertexPosition(l,Ns),s.getVertexPosition(c,Os);const d=fh(s,t,e,n,Us,Ns,Os,tl);if(d){const h=new L;tn.getBarycoord(tl,Us,Ns,Os,h),i&&(d.uv=tn.getInterpolatedAttribute(i,r,l,c,h,new Dt)),o&&(d.uv1=tn.getInterpolatedAttribute(o,r,l,c,h,new Dt)),a&&(d.normal=tn.getInterpolatedAttribute(a,r,l,c,h,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const u={a:r,b:l,c,normal:new L,materialIndex:0};tn.getNormal(Us,Ns,Os,u.normal),d.face=u,d.barycoord=h}return d}class Q extends Pe{constructor(t=1,e=1,n=1,i=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:o,depthSegments:a};const r=this;i=Math.floor(i),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],d=[],h=[];let u=0,p=0;g("z","y","x",-1,-1,n,e,t,a,o,0),g("z","y","x",1,-1,n,e,-t,a,o,1),g("x","z","y",1,1,t,n,e,i,a,2),g("x","z","y",1,-1,t,n,-e,i,a,3),g("x","y","z",1,-1,t,e,n,i,o,4),g("x","y","z",-1,-1,t,e,-n,i,o,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(d,3)),this.setAttribute("uv",new se(h,2));function g(x,m,f,w,S,_,I,A,T,R,b){const y=_/T,P=I/R,G=_/2,O=I/2,H=A/2,$=T+1,Y=R+1;let X=0,k=0;const nt=new L;for(let dt=0;dt<Y;dt++){const vt=dt*P-O;for(let Bt=0;Bt<$;Bt++){const Xt=Bt*y-G;nt[x]=Xt*w,nt[m]=vt*S,nt[f]=H,c.push(nt.x,nt.y,nt.z),nt[x]=0,nt[m]=0,nt[f]=A>0?1:-1,d.push(nt.x,nt.y,nt.z),h.push(Bt/T),h.push(1-dt/R),X+=1}}for(let dt=0;dt<R;dt++)for(let vt=0;vt<T;vt++){const Bt=u+vt+$*dt,Xt=u+vt+$*(dt+1),K=u+(vt+1)+$*(dt+1),st=u+(vt+1)+$*dt;l.push(Bt,Xt,st),l.push(Xt,K,st),k+=6}r.addGroup(p,k,b),p+=k,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Q(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ni(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ie(s){const t={};for(let e=0;e<s.length;e++){const n=Ni(s[e]);for(const i in n)t[i]=n[i]}return t}function ph(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Bc(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const ps={clone:Ni,merge:Ie};var mh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ce extends Hi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mh,this.fragmentShader=gh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=ph(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Uc extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new L,el=new Dt,nl=new Dt;class De extends Uc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(So*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(So*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,el,nl),e.subVectors(nl,el)}setViewOffset(t,e,n,i,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(So*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,o=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const r=this.filmOffset;r!==0&&(o+=t*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Mi=-90,wi=1;class xh extends _e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new De(Mi,wi,t,e);i.layers=this.layers,this.add(i);const o=new De(Mi,wi,t,e);o.layers=this.layers,this.add(o);const a=new De(Mi,wi,t,e);a.layers=this.layers,this.add(a);const r=new De(Mi,wi,t,e);r.layers=this.layers,this.add(r);const l=new De(Mi,wi,t,e);l.layers=this.layers,this.add(l);const c=new De(Mi,wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,o,a,r,l]=e;for(const c of e)this.remove(c);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ro)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,r,l,c,d]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,o),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,r),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,d),t.setRenderTarget(h,u,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Nc extends Le{constructor(t,e,n,i,o,a,r,l,c,d){t=t!==void 0?t:[],e=e!==void 0?e:Li,super(t,e,n,i,o,a,r,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _h extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Nc(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Q(5,5,5),o=new Ce({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:bn});o.uniforms.tEquirect.value=e;const a=new D(i,o),r=e.minFilter;return e.minFilter===ii&&(e.minFilter=cn),new xh(1,10,this).update(t,a),e.minFilter=r,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(o)}}const Xo=new L,vh=new L,yh=new zt;class Jn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Xo.subVectors(n,e).cross(vh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xo),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/i;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||yh.getNormalMatrix(t),i=this.coplanarPoint(Xo).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new go,Hs=new L;class da{constructor(t=new Jn,e=new Jn,n=new Jn,i=new Jn,o=new Jn,a=new Jn){this.planes=[t,e,n,i,o,a]}set(t,e,n,i,o,a){const r=this.planes;return r[0].copy(t),r[1].copy(e),r[2].copy(n),r[3].copy(i),r[4].copy(o),r[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn){const n=this.planes,i=t.elements,o=i[0],a=i[1],r=i[2],l=i[3],c=i[4],d=i[5],h=i[6],u=i[7],p=i[8],g=i[9],x=i[10],m=i[11],f=i[12],w=i[13],S=i[14],_=i[15];if(n[0].setComponents(l-o,u-c,m-p,_-f).normalize(),n[1].setComponents(l+o,u+c,m+p,_+f).normalize(),n[2].setComponents(l+a,u+d,m+g,_+w).normalize(),n[3].setComponents(l-a,u-d,m-g,_-w).normalize(),n[4].setComponents(l-r,u-h,m-x,_-S).normalize(),e===wn)n[5].setComponents(l+r,u+h,m+x,_+S).normalize();else if(e===ro)n[5].setComponents(r,h,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(t){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Hs.x=i.normal.x>0?t.max.x:t.min.x,Hs.y=i.normal.y>0?t.max.y:t.min.y,Hs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Oc(){let s=null,t=!1,e=null,n=null;function i(o,a){e(o,a),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){s=o}}}function Mh(s){const t=new WeakMap;function e(r,l){const c=r.array,d=r.usage,h=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,d),r.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:h}}function n(r,l,c){const d=l.array,h=l.updateRanges;if(s.bindBuffer(c,r),h.length===0)s.bufferSubData(c,0,d);else{h.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<h.length;p++){const g=h[u],x=h[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,h[u]=x)}h.length=u+1;for(let p=0,g=h.length;p<g;p++){const x=h[p];s.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(r){return r.isInterleavedBufferAttribute&&(r=r.data),t.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=t.get(r);l&&(s.deleteBuffer(l.buffer),t.delete(r))}function a(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const d=t.get(r);(!d||d.version<r.version)&&t.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=t.get(r);if(c===void 0)t.set(r,e(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:i,remove:o,update:a}}class de extends Pe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const o=t/2,a=e/2,r=Math.floor(n),l=Math.floor(i),c=r+1,d=l+1,h=t/r,u=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<d;f++){const w=f*u-a;for(let S=0;S<c;S++){const _=S*h-o;g.push(_,-w,0),x.push(0,0,1),m.push(S/r),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<r;w++){const S=w+c*f,_=w+c*(f+1),I=w+1+c*(f+1),A=w+1+c*f;p.push(S,_,A),p.push(_,I,A)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new de(t.width,t.height,t.widthSegments,t.heightSegments)}}var wh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bh=`#ifdef USE_ALPHAHASH
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
#endif`,Sh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Th=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ah=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ch=`#ifdef USE_AOMAP
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
#endif`,Rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ph=`#ifdef USE_BATCHING
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
#endif`,Ih=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Dh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Bh=`#ifdef USE_IRIDESCENCE
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
#endif`,Uh=`#ifdef USE_BUMPMAP
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
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Oh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xh=`#define PI 3.141592653589793
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
} // validated`,qh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yh=`vec3 transformedNormal = objectNormal;
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
#endif`,jh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$h=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tu=`#ifdef USE_ENVMAP
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
#endif`,eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,nu=`#ifdef USE_ENVMAP
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
#endif`,iu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,su=`#ifdef USE_ENVMAP
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
#endif`,ou=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ru=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,au=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cu=`#ifdef USE_GRADIENTMAP
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
}`,du=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fu=`uniform bool receiveShadow;
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
#endif`,pu=`#ifdef USE_ENVMAP
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
#endif`,mu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vu=`PhysicalMaterial material;
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
#endif`,yu=`struct PhysicalMaterial {
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
}`,Mu=`
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
#endif`,wu=`#if defined( RE_IndirectDiffuse )
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
#endif`,bu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Su=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Au=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ru=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Iu=`#if defined( USE_POINTS_UV )
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
#endif`,Du=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nu=`#ifdef USE_MORPHTARGETS
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
#endif`,Ou=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ku=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wu=`#ifdef USE_NORMALMAP
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
#endif`,Xu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ju=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$u=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ju=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ku=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ef=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,af=`float getShadowMask() {
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
}`,lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cf=`#ifdef USE_SKINNING
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
#endif`,df=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hf=`#ifdef USE_SKINNING
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
#endif`,uf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gf=`#ifdef USE_TRANSMISSION
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
#endif`,xf=`#ifdef USE_TRANSMISSION
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
#endif`,_f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bf=`uniform sampler2D t2D;
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
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ef=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Tf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Af=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cf=`#include <common>
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
}`,Rf=`#if DEPTH_PACKING == 3200
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
}`,Pf=`#define DISTANCE
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
}`,If=`#define DISTANCE
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
}`,Df=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Lf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ff=`uniform float scale;
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
}`,Bf=`uniform vec3 diffuse;
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
}`,Uf=`#include <common>
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
}`,Nf=`uniform vec3 diffuse;
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
}`,Of=`#define LAMBERT
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
}`,kf=`#define LAMBERT
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
}`,zf=`#define MATCAP
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
}`,Gf=`#define MATCAP
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
}`,Hf=`#define NORMAL
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
}`,Vf=`#define NORMAL
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
}`,Wf=`#define PHONG
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
}`,Xf=`#define PHONG
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
}`,qf=`#define STANDARD
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
}`,Yf=`#define STANDARD
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
}`,jf=`#define TOON
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
}`,$f=`#define TOON
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
}`,Jf=`uniform float size;
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
}`,Kf=`uniform vec3 diffuse;
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
}`,Zf=`#include <common>
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
}`,Qf=`uniform vec3 color;
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
}`,tp=`uniform float rotation;
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
}`,ep=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:wh,alphahash_pars_fragment:bh,alphamap_fragment:Sh,alphamap_pars_fragment:Eh,alphatest_fragment:Th,alphatest_pars_fragment:Ah,aomap_fragment:Ch,aomap_pars_fragment:Rh,batching_pars_vertex:Ph,batching_vertex:Ih,begin_vertex:Dh,beginnormal_vertex:Lh,bsdfs:Fh,iridescence_fragment:Bh,bumpmap_pars_fragment:Uh,clipping_planes_fragment:Nh,clipping_planes_pars_fragment:Oh,clipping_planes_pars_vertex:kh,clipping_planes_vertex:zh,color_fragment:Gh,color_pars_fragment:Hh,color_pars_vertex:Vh,color_vertex:Wh,common:Xh,cube_uv_reflection_fragment:qh,defaultnormal_vertex:Yh,displacementmap_pars_vertex:jh,displacementmap_vertex:$h,emissivemap_fragment:Jh,emissivemap_pars_fragment:Kh,colorspace_fragment:Zh,colorspace_pars_fragment:Qh,envmap_fragment:tu,envmap_common_pars_fragment:eu,envmap_pars_fragment:nu,envmap_pars_vertex:iu,envmap_physical_pars_fragment:pu,envmap_vertex:su,fog_vertex:ou,fog_pars_vertex:ru,fog_fragment:au,fog_pars_fragment:lu,gradientmap_pars_fragment:cu,lightmap_pars_fragment:du,lights_lambert_fragment:hu,lights_lambert_pars_fragment:uu,lights_pars_begin:fu,lights_toon_fragment:mu,lights_toon_pars_fragment:gu,lights_phong_fragment:xu,lights_phong_pars_fragment:_u,lights_physical_fragment:vu,lights_physical_pars_fragment:yu,lights_fragment_begin:Mu,lights_fragment_maps:wu,lights_fragment_end:bu,logdepthbuf_fragment:Su,logdepthbuf_pars_fragment:Eu,logdepthbuf_pars_vertex:Tu,logdepthbuf_vertex:Au,map_fragment:Cu,map_pars_fragment:Ru,map_particle_fragment:Pu,map_particle_pars_fragment:Iu,metalnessmap_fragment:Du,metalnessmap_pars_fragment:Lu,morphinstance_vertex:Fu,morphcolor_vertex:Bu,morphnormal_vertex:Uu,morphtarget_pars_vertex:Nu,morphtarget_vertex:Ou,normal_fragment_begin:ku,normal_fragment_maps:zu,normal_pars_fragment:Gu,normal_pars_vertex:Hu,normal_vertex:Vu,normalmap_pars_fragment:Wu,clearcoat_normal_fragment_begin:Xu,clearcoat_normal_fragment_maps:qu,clearcoat_pars_fragment:Yu,iridescence_pars_fragment:ju,opaque_fragment:$u,packing:Ju,premultiplied_alpha_fragment:Ku,project_vertex:Zu,dithering_fragment:Qu,dithering_pars_fragment:tf,roughnessmap_fragment:ef,roughnessmap_pars_fragment:nf,shadowmap_pars_fragment:sf,shadowmap_pars_vertex:of,shadowmap_vertex:rf,shadowmask_pars_fragment:af,skinbase_vertex:lf,skinning_pars_vertex:cf,skinning_vertex:df,skinnormal_vertex:hf,specularmap_fragment:uf,specularmap_pars_fragment:ff,tonemapping_fragment:pf,tonemapping_pars_fragment:mf,transmission_fragment:gf,transmission_pars_fragment:xf,uv_pars_fragment:_f,uv_pars_vertex:vf,uv_vertex:yf,worldpos_vertex:Mf,background_vert:wf,background_frag:bf,backgroundCube_vert:Sf,backgroundCube_frag:Ef,cube_vert:Tf,cube_frag:Af,depth_vert:Cf,depth_frag:Rf,distanceRGBA_vert:Pf,distanceRGBA_frag:If,equirect_vert:Df,equirect_frag:Lf,linedashed_vert:Ff,linedashed_frag:Bf,meshbasic_vert:Uf,meshbasic_frag:Nf,meshlambert_vert:Of,meshlambert_frag:kf,meshmatcap_vert:zf,meshmatcap_frag:Gf,meshnormal_vert:Hf,meshnormal_frag:Vf,meshphong_vert:Wf,meshphong_frag:Xf,meshphysical_vert:qf,meshphysical_frag:Yf,meshtoon_vert:jf,meshtoon_frag:$f,points_vert:Jf,points_frag:Kf,shadow_vert:Zf,shadow_frag:Qf,sprite_vert:tp,sprite_frag:ep},at={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},ln={basic:{uniforms:Ie([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ie([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ie([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ie([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ie([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ie([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ie([at.points,at.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ie([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ie([at.common,at.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ie([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ie([at.sprite,at.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ie([at.common,at.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ie([at.lights,at.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};ln.physical={uniforms:Ie([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Vs={r:0,b:0,g:0},qn=new Ge,np=new ue;function ip(s,t,e,n,i,o,a){const r=new Mt(0);let l=o===!0?0:1,c,d,h=null,u=0,p=null;function g(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function x(w){let S=!1;const _=g(w);_===null?f(r,l):_&&_.isColor&&(f(_,1),S=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(w,S){const _=g(S);_&&(_.isCubeTexture||_.mapping===po)?(d===void 0&&(d=new D(new Q(1,1,1),new Ce({name:"BackgroundCubeMaterial",uniforms:Ni(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(d)),qn.copy(S.backgroundRotation),qn.x*=-1,qn.y*=-1,qn.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(qn.y*=-1,qn.z*=-1),d.material.uniforms.envMap.value=_,d.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(np.makeRotationFromEuler(qn)),d.material.toneMapped=Yt.getTransfer(_.colorSpace)!==ee,(h!==_||u!==_.version||p!==s.toneMapping)&&(d.material.needsUpdate=!0,h=_,u=_.version,p=s.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new D(new de(2,2),new Ce({name:"BackgroundMaterial",uniforms:Ni(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(_.colorSpace)!==ee,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,p=s.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,S){w.getRGB(Vs,Bc(s)),n.buffers.color.setClear(Vs.r,Vs.g,Vs.b,S,a)}return{getClearColor:function(){return r},setClearColor:function(w,S=1){r.set(w),l=S,f(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(r,l)},render:x,addToRenderList:m}}function sp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let o=i,a=!1;function r(y,P,G,O,H){let $=!1;const Y=h(O,G,P);o!==Y&&(o=Y,c(o.object)),$=p(y,O,G,H),$&&g(y,O,G,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,_(y,P,G,O),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function d(y){return s.deleteVertexArray(y)}function h(y,P,G){const O=G.wireframe===!0;let H=n[y.id];H===void 0&&(H={},n[y.id]=H);let $=H[P.id];$===void 0&&($={},H[P.id]=$);let Y=$[O];return Y===void 0&&(Y=u(l()),$[O]=Y),Y}function u(y){const P=[],G=[],O=[];for(let H=0;H<e;H++)P[H]=0,G[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:G,attributeDivisors:O,object:y,attributes:{},index:null}}function p(y,P,G,O){const H=o.attributes,$=P.attributes;let Y=0;const X=G.getAttributes();for(const k in X)if(X[k].location>=0){const dt=H[k];let vt=$[k];if(vt===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(vt=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(vt=y.instanceColor)),dt===void 0||dt.attribute!==vt||vt&&dt.data!==vt.data)return!0;Y++}return o.attributesNum!==Y||o.index!==O}function g(y,P,G,O){const H={},$=P.attributes;let Y=0;const X=G.getAttributes();for(const k in X)if(X[k].location>=0){let dt=$[k];dt===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(dt=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(dt=y.instanceColor));const vt={};vt.attribute=dt,dt&&dt.data&&(vt.data=dt.data),H[k]=vt,Y++}o.attributes=H,o.attributesNum=Y,o.index=O}function x(){const y=o.newAttributes;for(let P=0,G=y.length;P<G;P++)y[P]=0}function m(y){f(y,0)}function f(y,P){const G=o.newAttributes,O=o.enabledAttributes,H=o.attributeDivisors;G[y]=1,O[y]===0&&(s.enableVertexAttribArray(y),O[y]=1),H[y]!==P&&(s.vertexAttribDivisor(y,P),H[y]=P)}function w(){const y=o.newAttributes,P=o.enabledAttributes;for(let G=0,O=P.length;G<O;G++)P[G]!==y[G]&&(s.disableVertexAttribArray(G),P[G]=0)}function S(y,P,G,O,H,$,Y){Y===!0?s.vertexAttribIPointer(y,P,G,H,$):s.vertexAttribPointer(y,P,G,O,H,$)}function _(y,P,G,O){x();const H=O.attributes,$=G.getAttributes(),Y=P.defaultAttributeValues;for(const X in $){const k=$[X];if(k.location>=0){let nt=H[X];if(nt===void 0&&(X==="instanceMatrix"&&y.instanceMatrix&&(nt=y.instanceMatrix),X==="instanceColor"&&y.instanceColor&&(nt=y.instanceColor)),nt!==void 0){const dt=nt.normalized,vt=nt.itemSize,Bt=t.get(nt);if(Bt===void 0)continue;const Xt=Bt.buffer,K=Bt.type,st=Bt.bytesPerElement,yt=K===s.INT||K===s.UNSIGNED_INT||nt.gpuType===ia;if(nt.isInterleavedBufferAttribute){const J=nt.data,ht=J.stride,wt=nt.offset;if(J.isInstancedInterleavedBuffer){for(let Lt=0;Lt<k.locationSize;Lt++)f(k.location+Lt,J.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Lt=0;Lt<k.locationSize;Lt++)m(k.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let Lt=0;Lt<k.locationSize;Lt++)S(k.location+Lt,vt/k.locationSize,K,dt,ht*st,(wt+vt/k.locationSize*Lt)*st,yt)}else{if(nt.isInstancedBufferAttribute){for(let J=0;J<k.locationSize;J++)f(k.location+J,nt.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let J=0;J<k.locationSize;J++)m(k.location+J);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let J=0;J<k.locationSize;J++)S(k.location+J,vt/k.locationSize,K,dt,vt*st,vt/k.locationSize*J*st,yt)}}else if(Y!==void 0){const dt=Y[X];if(dt!==void 0)switch(dt.length){case 2:s.vertexAttrib2fv(k.location,dt);break;case 3:s.vertexAttrib3fv(k.location,dt);break;case 4:s.vertexAttrib4fv(k.location,dt);break;default:s.vertexAttrib1fv(k.location,dt)}}}}w()}function I(){R();for(const y in n){const P=n[y];for(const G in P){const O=P[G];for(const H in O)d(O[H].object),delete O[H];delete P[G]}delete n[y]}}function A(y){if(n[y.id]===void 0)return;const P=n[y.id];for(const G in P){const O=P[G];for(const H in O)d(O[H].object),delete O[H];delete P[G]}delete n[y.id]}function T(y){for(const P in n){const G=n[P];if(G[y.id]===void 0)continue;const O=G[y.id];for(const H in O)d(O[H].object),delete O[H];delete G[y.id]}}function R(){b(),a=!0,o!==i&&(o=i,c(o.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:r,reset:R,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function op(s,t,e){let n;function i(c){n=c}function o(c,d){s.drawArrays(n,c,d),e.update(d,n,1)}function a(c,d,h){h!==0&&(s.drawArraysInstanced(n,c,d,h),e.update(d,n,h))}function r(c,d,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,h);let p=0;for(let g=0;g<h;g++)p+=d[g];e.update(p,n,1)}function l(c,d,h,u){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],d[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,u,0,h);let g=0;for(let x=0;x<h;x++)g+=d[x]*u[x];e.update(g,n,1)}}this.setMode=i,this.render=o,this.renderInstances=a,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function rp(s,t,e,n){let i;function o(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==en&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(T){const R=T===Sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Tn&&n.convert(T)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Mn&&!R)}function l(T){if(T==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),w=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:_,vertexTextures:I,maxSamples:A}}function ap(s){const t=this;let e=null,n=0,i=!1,o=!1;const a=new Jn,r=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const p=h.length!==0||u||n!==0||i;return i=u,n=h.length,p},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(h,u){e=d(h,u,0)},this.setState=function(h,u,p){const g=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||o&&!m)o?d(null):c();else{const w=o?0:n,S=w*4;let _=f.clippingState||null;l.value=_,_=d(g,u,S,p);for(let I=0;I!==S;++I)_[I]=e[I];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(h,u,p,g){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,w=u.matrixWorldInverse;r.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,_=p;S!==x;++S,_+=4)a.copy(h[S]).applyMatrix4(w,r),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function lp(s){let t=new WeakMap;function e(a,r){return r===gr?a.mapping=Li:r===xr&&(a.mapping=Fi),a}function n(a){if(a&&a.isTexture){const r=a.mapping;if(r===gr||r===xr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new _h(l.height);return c.fromEquirectangularTexture(s,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const r=a.target;r.removeEventListener("dispose",i);const l=t.get(r);l!==void 0&&(t.delete(r),l.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class ha extends Uc{constructor(t=-1,e=1,n=1,i=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let o=n-t,a=n+t,r=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,r-=d*this.view.offsetY,l=r-d*this.view.height}this.projectionMatrix.makeOrthographic(o,a,r,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ai=4,il=[.125,.215,.35,.446,.526,.582],Qn=20,qo=new ha,sl=new Mt;let Yo=null,jo=0,$o=0,Jo=!1;const Kn=(1+Math.sqrt(5))/2,bi=1/Kn,ol=[new L(-Kn,bi,0),new L(Kn,bi,0),new L(-bi,0,Kn),new L(bi,0,Kn),new L(0,Kn,-bi),new L(0,Kn,bi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class rl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Yo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ll(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yo,jo,$o),this._renderer.xr.enabled=Jo,t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Li||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yo=this._renderer.getRenderTarget(),jo=this._renderer.getActiveCubeFace(),$o=this._renderer.getActiveMipmapLevel(),Jo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:Sn,format:en,colorSpace:zi,depthBuffer:!1},i=al(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=al(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cp(o)),this._blurMaterial=dp(o,t,e)}return i}_compileMaterial(t){const e=new D(this._lodPlanes[0],t);this._renderer.compile(e,qo)}_sceneToCubeUV(t,e,n,i){const r=new De(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(sl),d.toneMapping=On,d.autoClear=!1;const p=new He({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new D(new Q,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(sl),x=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(r.up.set(0,l[f],0),r.lookAt(c[f],0,0)):w===1?(r.up.set(0,0,l[f]),r.lookAt(0,c[f],0)):(r.up.set(0,l[f],0),r.lookAt(0,0,c[f]));const S=this._cubeSize;Ws(i,w*S,f>2?S:0,S,S),d.setRenderTarget(i),x&&d.render(g,r),d.render(t,r)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=u,d.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Li||t.mapping===Fi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ll());const o=i?this._cubemapMaterial:this._equirectMaterial,a=new D(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=t;const l=this._cubeSize;Ws(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,qo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let o=1;o<i;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=ol[(i-o-1)%ol.length];this._blur(t,o-1,o,a,r)}e.autoClear=n}_blur(t,e,n,i,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",o),this._halfBlur(a,t,n,n,i,"longitudinal",o)}_halfBlur(t,e,n,i,o,a,r){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new D(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Qn-1),x=o/g,m=isFinite(o)?1+Math.floor(d*x):Qn;m>Qn&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qn}`);const f=[];let w=0;for(let T=0;T<Qn;++T){const R=T/x,b=Math.exp(-R*R/2);f.push(b),T===0?w+=b:T<m&&(w+=2*b)}for(let T=0;T<f.length;T++)f[T]=f[T]/w;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=f,u.latitudinal.value=a==="latitudinal",r&&(u.poleAxis.value=r);const{_lodMax:S}=this;u.dTheta.value=g,u.mipInt.value=S-n;const _=this._sizeLods[i],I=3*_*(i>S-Ai?i-S+Ai:0),A=4*(this._cubeSize-_);Ws(e,I,A,3*_,2*_),l.setRenderTarget(e),l.render(h,qo)}}function cp(s){const t=[],e=[],n=[];let i=s;const o=s-Ai+1+il.length;for(let a=0;a<o;a++){const r=Math.pow(2,i);e.push(r);let l=1/r;a>s-Ai?l=il[a-s+Ai-1]:a===0&&(l=0),n.push(l);const c=1/(r-2),d=-c,h=1+c,u=[d,d,h,d,h,h,d,d,h,h,d,h],p=6,g=6,x=3,m=2,f=1,w=new Float32Array(x*g*p),S=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,R=A>2?0:-1,b=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];w.set(b,x*g*A),S.set(u,m*g*A);const y=[A,A,A,A,A,A];_.set(y,f*g*A)}const I=new Pe;I.setAttribute("position",new on(w,x)),I.setAttribute("uv",new on(S,m)),I.setAttribute("faceIndex",new on(_,f)),t.push(I),i>Ai&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function al(s,t,e){const n=new sn(s,t,e);return n.texture.mapping=po,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ws(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function dp(s,t,e){const n=new Float32Array(Qn),i=new L(0,1,0);return new Ce({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ua(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ll(){return new Ce({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function cl(){return new Ce({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function ua(){return`

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
	`}function hp(s){let t=new WeakMap,e=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===gr||l===xr,d=l===Li||l===Fi;if(c||d){let h=t.get(r);const u=h!==void 0?h.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==u)return e===null&&(e=new rl(s)),h=c?e.fromEquirectangular(r,h):e.fromCubemap(r,h),h.texture.pmremVersion=r.pmremVersion,t.set(r,h),h.texture;if(h!==void 0)return h.texture;{const p=r.image;return c&&p&&p.height>0||d&&p&&i(p)?(e===null&&(e=new rl(s)),h=c?e.fromEquirectangular(r):e.fromCubemap(r),h.texture.pmremVersion=r.pmremVersion,t.set(r,h),r.addEventListener("dispose",o),h.texture):null}}}return r}function i(r){let l=0;const c=6;for(let d=0;d<c;d++)r[d]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function up(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&as("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fp(s,t,e,n){const i={},o=new WeakMap;function a(h){const u=h.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const x=u.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}u.removeEventListener("dispose",a),delete i[u.id];const p=o.get(u);p&&(t.remove(p),o.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function r(h,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,e.memory.geometries++),u}function l(h){const u=h.attributes;for(const g in u)t.update(u[g],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(h){const u=[],p=h.index,g=h.attributes.position;let x=0;if(p!==null){const w=p.array;x=p.version;for(let S=0,_=w.length;S<_;S+=3){const I=w[S+0],A=w[S+1],T=w[S+2];u.push(I,A,A,T,T,I)}}else if(g!==void 0){const w=g.array;x=g.version;for(let S=0,_=w.length/3-1;S<_;S+=3){const I=S+0,A=S+1,T=S+2;u.push(I,A,A,T,T,I)}}else return;const m=new(Ac(u)?Fc:Lc)(u,1);m.version=x;const f=o.get(h);f&&t.remove(f),o.set(h,m)}function d(h){const u=o.get(h);if(u){const p=h.index;p!==null&&u.version<p.version&&c(h)}else c(h);return o.get(h)}return{get:r,update:l,getWireframeAttribute:d}}function pp(s,t,e){let n;function i(u){n=u}let o,a;function r(u){o=u.type,a=u.bytesPerElement}function l(u,p){s.drawElements(n,p,o,u*a),e.update(p,n,1)}function c(u,p,g){g!==0&&(s.drawElementsInstanced(n,p,o,u*a,g),e.update(p,n,g))}function d(u,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,u,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function h(u,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<u.length;f++)c(u[f]/a,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,o,u,0,x,0,g);let f=0;for(let w=0;w<g;w++)f+=p[w]*x[w];e.update(f,n,1)}}this.setMode=i,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function mp(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,a,r){switch(e.calls++,a){case s.TRIANGLES:e.triangles+=r*(o/3);break;case s.LINES:e.lines+=r*(o/2);break;case s.LINE_STRIP:e.lines+=r*(o-1);break;case s.LINE_LOOP:e.lines+=r*o;break;case s.POINTS:e.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function gp(s,t,e){const n=new WeakMap,i=new ie;function o(a,r,l){const c=a.morphTargetInfluences,d=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,h=d!==void 0?d.length:0;let u=n.get(r);if(u===void 0||u.count!==h){let y=function(){R.dispose(),n.delete(r),r.removeEventListener("dispose",y)};var p=y;u!==void 0&&u.texture.dispose();const g=r.morphAttributes.position!==void 0,x=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,f=r.morphAttributes.position||[],w=r.morphAttributes.normal||[],S=r.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let I=r.attributes.position.count*_,A=1;I>t.maxTextureSize&&(A=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const T=new Float32Array(I*A*4*h),R=new Rc(T,I,A,h);R.type=Mn,R.needsUpdate=!0;const b=_*4;for(let P=0;P<h;P++){const G=f[P],O=w[P],H=S[P],$=I*A*4*P;for(let Y=0;Y<G.count;Y++){const X=Y*b;g===!0&&(i.fromBufferAttribute(G,Y),T[$+X+0]=i.x,T[$+X+1]=i.y,T[$+X+2]=i.z,T[$+X+3]=0),x===!0&&(i.fromBufferAttribute(O,Y),T[$+X+4]=i.x,T[$+X+5]=i.y,T[$+X+6]=i.z,T[$+X+7]=0),m===!0&&(i.fromBufferAttribute(H,Y),T[$+X+8]=i.x,T[$+X+9]=i.y,T[$+X+10]=i.z,T[$+X+11]=H.itemSize===4?i.w:1)}}u={count:h,texture:R,size:new Dt(I,A)},n.set(r,u),r.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:o}}function xp(s,t,e,n){let i=new WeakMap;function o(l){const c=n.render.frame,d=l.geometry,h=t.get(l,d);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return h}function a(){i=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}class kc extends Le{constructor(t,e,n,i,o,a,r,l,c,d=Pi){if(d!==Pi&&d!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Pi&&(n=ri),n===void 0&&d===Ui&&(n=Bi),super(null,i,o,a,r,l,d,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=r!==void 0?r:nn,this.minFilter=l!==void 0?l:nn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const zc=new Le,dl=new kc(1,1),Gc=new Rc,Hc=new ih,Vc=new Nc,hl=[],ul=[],fl=new Float32Array(16),pl=new Float32Array(9),ml=new Float32Array(4);function Vi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let o=hl[i];if(o===void 0&&(o=new Float32Array(i),hl[i]=o),t!==0){n.toArray(o,0);for(let a=1,r=0;a!==t;++a)r+=e,s[a].toArray(o,r)}return o}function ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function xo(s,t){let e=ul[t];e===void 0&&(e=new Int32Array(t),ul[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function _p(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function vp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function yp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ve(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function Mp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function wp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;ml.set(n),s.uniformMatrix2fv(this.addr,!1,ml),ye(e,n)}}function bp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;pl.set(n),s.uniformMatrix3fv(this.addr,!1,pl),ye(e,n)}}function Sp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(ve(e,n))return;fl.set(n),s.uniformMatrix4fv(this.addr,!1,fl),ye(e,n)}}function Ep(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Tp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function Ap(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function Cp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function Rp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Pp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ve(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function Ip(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ve(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function Dp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ve(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function Lp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let o;this.type===s.SAMPLER_2D_SHADOW?(dl.compareFunction=Tc,o=dl):o=zc,e.setTexture2D(t||o,i)}function Fp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Hc,i)}function Bp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Vc,i)}function Up(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Gc,i)}function Np(s){switch(s){case 5126:return _p;case 35664:return vp;case 35665:return yp;case 35666:return Mp;case 35674:return wp;case 35675:return bp;case 35676:return Sp;case 5124:case 35670:return Ep;case 35667:case 35671:return Tp;case 35668:case 35672:return Ap;case 35669:case 35673:return Cp;case 5125:return Rp;case 36294:return Pp;case 36295:return Ip;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Lp;case 35679:case 36299:case 36307:return Fp;case 35680:case 36300:case 36308:case 36293:return Bp;case 36289:case 36303:case 36311:case 36292:return Up}}function Op(s,t){s.uniform1fv(this.addr,t)}function kp(s,t){const e=Vi(t,this.size,2);s.uniform2fv(this.addr,e)}function zp(s,t){const e=Vi(t,this.size,3);s.uniform3fv(this.addr,e)}function Gp(s,t){const e=Vi(t,this.size,4);s.uniform4fv(this.addr,e)}function Hp(s,t){const e=Vi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Vp(s,t){const e=Vi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Wp(s,t){const e=Vi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Xp(s,t){s.uniform1iv(this.addr,t)}function qp(s,t){s.uniform2iv(this.addr,t)}function Yp(s,t){s.uniform3iv(this.addr,t)}function jp(s,t){s.uniform4iv(this.addr,t)}function $p(s,t){s.uniform1uiv(this.addr,t)}function Jp(s,t){s.uniform2uiv(this.addr,t)}function Kp(s,t){s.uniform3uiv(this.addr,t)}function Zp(s,t){s.uniform4uiv(this.addr,t)}function Qp(s,t,e){const n=this.cache,i=t.length,o=xo(e,i);ve(n,o)||(s.uniform1iv(this.addr,o),ye(n,o));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||zc,o[a])}function t0(s,t,e){const n=this.cache,i=t.length,o=xo(e,i);ve(n,o)||(s.uniform1iv(this.addr,o),ye(n,o));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Hc,o[a])}function e0(s,t,e){const n=this.cache,i=t.length,o=xo(e,i);ve(n,o)||(s.uniform1iv(this.addr,o),ye(n,o));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||Vc,o[a])}function n0(s,t,e){const n=this.cache,i=t.length,o=xo(e,i);ve(n,o)||(s.uniform1iv(this.addr,o),ye(n,o));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||Gc,o[a])}function i0(s){switch(s){case 5126:return Op;case 35664:return kp;case 35665:return zp;case 35666:return Gp;case 35674:return Hp;case 35675:return Vp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return jp;case 5125:return $p;case 36294:return Jp;case 36295:return Kp;case 36296:return Zp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return n0}}class s0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Np(e.type)}}class o0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=i0(e.type)}}class r0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let o=0,a=i.length;o!==a;++o){const r=i[o];r.setValue(t,e[r.id],n)}}}const Ko=/(\w+)(\])?(\[|\.)?/g;function gl(s,t){s.seq.push(t),s.map[t.id]=t}function a0(s,t,e){const n=s.name,i=n.length;for(Ko.lastIndex=0;;){const o=Ko.exec(n),a=Ko.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&a+2===i){gl(e,c===void 0?new s0(r,s,t):new o0(r,s,t));break}else{let h=e.map[r];h===void 0&&(h=new r0(r),gl(e,h)),e=h}}}class eo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const o=t.getActiveUniform(e,i),a=t.getUniformLocation(e,o.name);a0(o,a,this)}}setValue(t,e,n,i){const o=this.map[e];o!==void 0&&o.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let o=0,a=e.length;o!==a;++o){const r=e[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,o=t.length;i!==o;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function xl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const l0=37297;let c0=0;function d0(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=i;a<o;a++){const r=a+1;n.push(`${r===t?">":" "} ${r}: ${e[a]}`)}return n.join(`
`)}const _l=new zt;function h0(s){Yt._getMatrix(_l,Yt.workingColorSpace,s);const t=`mat3( ${_l.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(s)){case mo:return[t,"LinearTransferOETF"];case ee:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function vl(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const o=/ERROR: 0:(\d+)/.exec(i);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+i+`

`+d0(s.getShaderSource(t),a)}else return i}function u0(s,t){const e=h0(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function f0(s,t){let e;switch(t){case cc:e="Linear";break;case dc:e="Reinhard";break;case hc:e="Cineon";break;case na:e="ACESFilmic";break;case uc:e="AgX";break;case fc:e="Neutral";break;case Dd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Xs=new L;function p0(){Yt.getLuminanceCoefficients(Xs);const s=Xs.x.toFixed(4),t=Xs.y.toFixed(4),e=Xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ls).join(`
`)}function g0(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function x0(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const o=s.getActiveAttrib(t,i),a=o.name;let r=1;o.type===s.FLOAT_MAT2&&(r=2),o.type===s.FLOAT_MAT3&&(r=3),o.type===s.FLOAT_MAT4&&(r=4),e[a]={type:o.type,location:s.getAttribLocation(t,a),locationSize:r}}return e}function ls(s){return s!==""}function yl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ml(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _0=/^[ \t]*#include +<([\w\d./]+)>/gm;function jr(s){return s.replace(_0,y0)}const v0=new Map;function y0(s,t){let e=Ht[t];if(e===void 0){const n=v0.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jr(e)}const M0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wl(s){return s.replace(M0,w0)}function w0(s,t,e,n){let i="";for(let o=parseInt(t);o<parseInt(e);o++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return i}function bl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function b0(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ac?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===lc?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function S0(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Li:case Fi:t="ENVMAP_TYPE_CUBE";break;case po:t="ENVMAP_TYPE_CUBE_UV";break}return t}function E0(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function T0(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case ea:t="ENVMAP_BLENDING_MULTIPLY";break;case Pd:t="ENVMAP_BLENDING_MIX";break;case Id:t="ENVMAP_BLENDING_ADD";break}return t}function A0(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function C0(s,t,e,n){const i=s.getContext(),o=e.defines;let a=e.vertexShader,r=e.fragmentShader;const l=b0(e),c=S0(e),d=E0(e),h=T0(e),u=A0(e),p=m0(e),g=g0(o),x=i.createProgram();let m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ls).join(`
`),f.length>0&&(f+=`
`)):(m=[bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ls).join(`
`),f=[bl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Ht.tonemapping_pars_fragment:"",e.toneMapping!==On?f0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,u0("linearToOutputTexel",e.outputColorSpace),p0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ls).join(`
`)),a=jr(a),a=yl(a,e),a=Ml(a,e),r=jr(r),r=yl(r,e),r=Ml(r,e),a=wl(a),r=wl(r),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Ua?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ua?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=w+m+a,_=w+f+r,I=xl(i,i.VERTEX_SHADER,S),A=xl(i,i.FRAGMENT_SHADER,_);i.attachShader(x,I),i.attachShader(x,A),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function T(P){if(s.debug.checkShaderErrors){const G=i.getProgramInfoLog(x).trim(),O=i.getShaderInfoLog(I).trim(),H=i.getShaderInfoLog(A).trim();let $=!0,Y=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,I,A);else{const X=vl(i,I,"vertex"),k=vl(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+X+`
`+k)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(O===""||H==="")&&(Y=!1);Y&&(P.diagnostics={runnable:$,programLog:G,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:f}})}i.deleteShader(I),i.deleteShader(A),R=new eo(i,x),b=x0(i,x)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,l0)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=c0++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=A,this}let R0=0;class P0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),o=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new I0(t),e.set(t,n)),n}}class I0{constructor(t){this.id=R0++,this.code=t,this.usedTimes=0}}function D0(s,t,e,n,i,o,a){const r=new Ic,l=new P0,c=new Set,d=[],h=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,y,P,G,O){const H=G.fog,$=O.geometry,Y=b.isMeshStandardMaterial?G.environment:null,X=(b.isMeshStandardMaterial?e:t).get(b.envMap||Y),k=X&&X.mapping===po?X.image.height:null,nt=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,vt=dt!==void 0?dt.length:0;let Bt=0;$.morphAttributes.position!==void 0&&(Bt=1),$.morphAttributes.normal!==void 0&&(Bt=2),$.morphAttributes.color!==void 0&&(Bt=3);let Xt,K,st,yt;if(nt){const te=ln[nt];Xt=te.vertexShader,K=te.fragmentShader}else Xt=b.vertexShader,K=b.fragmentShader,l.update(b),st=l.getVertexShaderID(b),yt=l.getFragmentShaderID(b);const J=s.getRenderTarget(),ht=s.state.buffers.depth.getReversed(),wt=O.isInstancedMesh===!0,Lt=O.isBatchedMesh===!0,Kt=!!b.map,Vt=!!b.matcap,ae=!!X,B=!!b.aoMap,Se=!!b.lightMap,At=!!b.bumpMap,ut=!!b.normalMap,Tt=!!b.displacementMap,$t=!!b.emissiveMap,Ct=!!b.metalnessMap,E=!!b.roughnessMap,v=b.anisotropy>0,z=b.clearcoat>0,tt=b.dispersion>0,it=b.iridescence>0,Z=b.sheen>0,Rt=b.transmission>0,ct=v&&!!b.anisotropyMap,gt=z&&!!b.clearcoatMap,jt=z&&!!b.clearcoatNormalMap,ot=z&&!!b.clearcoatRoughnessMap,xt=it&&!!b.iridescenceMap,It=it&&!!b.iridescenceThicknessMap,Ft=Z&&!!b.sheenColorMap,_t=Z&&!!b.sheenRoughnessMap,qt=!!b.specularMap,Gt=!!b.specularColorMap,oe=!!b.specularIntensityMap,F=Rt&&!!b.transmissionMap,lt=Rt&&!!b.thicknessMap,q=!!b.gradientMap,et=!!b.alphaMap,mt=b.alphaTest>0,ft=!!b.alphaHash,Ot=!!b.extensions;let fe=On;b.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(fe=s.toneMapping);const Ee={shaderID:nt,shaderType:b.type,shaderName:b.name,vertexShader:Xt,fragmentShader:K,defines:b.defines,customVertexShaderID:st,customFragmentShaderID:yt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Lt,batchingColor:Lt&&O._colorsTexture!==null,instancing:wt,instancingColor:wt&&O.instanceColor!==null,instancingMorph:wt&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:J===null?s.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:zi,alphaToCoverage:!!b.alphaToCoverage,map:Kt,matcap:Vt,envMap:ae,envMapMode:ae&&X.mapping,envMapCubeUVHeight:k,aoMap:B,lightMap:Se,bumpMap:At,normalMap:ut,displacementMap:u&&Tt,emissiveMap:$t,normalMapObjectSpace:ut&&b.normalMapType===zd,normalMapTangentSpace:ut&&b.normalMapType===Ec,metalnessMap:Ct,roughnessMap:E,anisotropy:v,anisotropyMap:ct,clearcoat:z,clearcoatMap:gt,clearcoatNormalMap:jt,clearcoatRoughnessMap:ot,dispersion:tt,iridescence:it,iridescenceMap:xt,iridescenceThicknessMap:It,sheen:Z,sheenColorMap:Ft,sheenRoughnessMap:_t,specularMap:qt,specularColorMap:Gt,specularIntensityMap:oe,transmission:Rt,transmissionMap:F,thicknessMap:lt,gradientMap:q,opaque:b.transparent===!1&&b.blending===Ri&&b.alphaToCoverage===!1,alphaMap:et,alphaTest:mt,alphaHash:ft,combine:b.combine,mapUv:Kt&&x(b.map.channel),aoMapUv:B&&x(b.aoMap.channel),lightMapUv:Se&&x(b.lightMap.channel),bumpMapUv:At&&x(b.bumpMap.channel),normalMapUv:ut&&x(b.normalMap.channel),displacementMapUv:Tt&&x(b.displacementMap.channel),emissiveMapUv:$t&&x(b.emissiveMap.channel),metalnessMapUv:Ct&&x(b.metalnessMap.channel),roughnessMapUv:E&&x(b.roughnessMap.channel),anisotropyMapUv:ct&&x(b.anisotropyMap.channel),clearcoatMapUv:gt&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:jt&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:It&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:_t&&x(b.sheenRoughnessMap.channel),specularMapUv:qt&&x(b.specularMap.channel),specularColorMapUv:Gt&&x(b.specularColorMap.channel),specularIntensityMapUv:oe&&x(b.specularIntensityMap.channel),transmissionMapUv:F&&x(b.transmissionMap.channel),thicknessMapUv:lt&&x(b.thicknessMap.channel),alphaMapUv:et&&x(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ut||v),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(Kt||et),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:ht,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:vt,morphTextureStride:Bt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:fe,decodeVideoTexture:Kt&&b.map.isVideoTexture===!0&&Yt.getTransfer(b.map.colorSpace)===ee,decodeVideoTextureEmissive:$t&&b.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(b.emissiveMap.colorSpace)===ee,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ze,flipSided:b.side===Re,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ot&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&b.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function f(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)y.push(P),y.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(w(y,b),S(y,b),y.push(s.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function w(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function S(b,y){r.disableAll(),y.supportsVertexTextures&&r.enable(0),y.instancing&&r.enable(1),y.instancingColor&&r.enable(2),y.instancingMorph&&r.enable(3),y.matcap&&r.enable(4),y.envMap&&r.enable(5),y.normalMapObjectSpace&&r.enable(6),y.normalMapTangentSpace&&r.enable(7),y.clearcoat&&r.enable(8),y.iridescence&&r.enable(9),y.alphaTest&&r.enable(10),y.vertexColors&&r.enable(11),y.vertexAlphas&&r.enable(12),y.vertexUv1s&&r.enable(13),y.vertexUv2s&&r.enable(14),y.vertexUv3s&&r.enable(15),y.vertexTangents&&r.enable(16),y.anisotropy&&r.enable(17),y.alphaHash&&r.enable(18),y.batching&&r.enable(19),y.dispersion&&r.enable(20),y.batchingColor&&r.enable(21),b.push(r.mask),r.disableAll(),y.fog&&r.enable(0),y.useFog&&r.enable(1),y.flatShading&&r.enable(2),y.logarithmicDepthBuffer&&r.enable(3),y.reverseDepthBuffer&&r.enable(4),y.skinning&&r.enable(5),y.morphTargets&&r.enable(6),y.morphNormals&&r.enable(7),y.morphColors&&r.enable(8),y.premultipliedAlpha&&r.enable(9),y.shadowMapEnabled&&r.enable(10),y.doubleSided&&r.enable(11),y.flipSided&&r.enable(12),y.useDepthPacking&&r.enable(13),y.dithering&&r.enable(14),y.transmission&&r.enable(15),y.sheen&&r.enable(16),y.opaque&&r.enable(17),y.pointsUvs&&r.enable(18),y.decodeVideoTexture&&r.enable(19),y.decodeVideoTextureEmissive&&r.enable(20),y.alphaToCoverage&&r.enable(21),b.push(r.mask)}function _(b){const y=g[b.type];let P;if(y){const G=ln[y];P=ps.clone(G.uniforms)}else P=b.uniforms;return P}function I(b,y){let P;for(let G=0,O=d.length;G<O;G++){const H=d[G];if(H.cacheKey===y){P=H,++P.usedTimes;break}}return P===void 0&&(P=new C0(s,y,b,o),d.push(P)),P}function A(b){if(--b.usedTimes===0){const y=d.indexOf(b);d[y]=d[d.length-1],d.pop(),b.destroy()}}function T(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:I,releaseProgram:A,releaseShaderCache:T,programs:d,dispose:R}}function L0(){let s=new WeakMap;function t(a){return s.has(a)}function e(a){let r=s.get(a);return r===void 0&&(r={},s.set(a,r)),r}function n(a){s.delete(a)}function i(a,r,l){s.get(a)[r]=l}function o(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:o}}function F0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Sl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function El(){const s=[];let t=0;const e=[],n=[],i=[];function o(){t=0,e.length=0,n.length=0,i.length=0}function a(h,u,p,g,x,m){let f=s[t];return f===void 0?(f={id:h.id,object:h,geometry:u,material:p,groupOrder:g,renderOrder:h.renderOrder,z:x,group:m},s[t]=f):(f.id=h.id,f.object=h,f.geometry=u,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=x,f.group=m),t++,f}function r(h,u,p,g,x,m){const f=a(h,u,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(h,u,p,g,x,m){const f=a(h,u,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(h,u){e.length>1&&e.sort(h||F0),n.length>1&&n.sort(u||Sl),i.length>1&&i.sort(u||Sl)}function d(){for(let h=t,u=s.length;h<u;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:o,push:r,unshift:l,finish:d,sort:c}}function B0(){let s=new WeakMap;function t(n,i){const o=s.get(n);let a;return o===void 0?(a=new El,s.set(n,[a])):i>=o.length?(a=new El,o.push(a)):a=o[i],a}function e(){s=new WeakMap}return{get:t,dispose:e}}function U0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Mt};break;case"SpotLight":e={position:new L,direction:new L,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function N0(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let O0=0;function k0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function z0(s){const t=new U0,e=N0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,o=new ue,a=new ue;function r(c){let d=0,h=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,w=0,S=0,_=0,I=0,A=0,T=0;c.sort(k0);for(let b=0,y=c.length;b<y;b++){const P=c[b],G=P.color,O=P.intensity,H=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)d+=G.r*O,h+=G.g*O,u+=G.b*O;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(P.sh.coefficients[Y],O);T++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const X=P.shadow,k=e.get(P);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=P.shadow.matrix,w++}n.directional[p]=Y,p++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(G).multiplyScalar(O),Y.distance=H,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,n.spot[x]=Y;const X=P.shadow;if(P.map&&(n.spotLightMap[I]=P.map,I++,X.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[x]=X.matrix,P.castShadow){const k=e.get(P);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=$,_++}x++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(G).multiplyScalar(O),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const X=P.shadow,k=e.get(P);k.shadowIntensity=X.intensity,k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,S++}n.point[g]=Y,g++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(O),Y.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[f]=Y,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=h,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==w||R.numPointShadows!==S||R.numSpotShadows!==_||R.numSpotMaps!==I||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=_+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=w,R.numPointShadows=S,R.numSpotShadows=_,R.numSpotMaps=I,R.numLightProbes=T,n.version=O0++)}function l(c,d){let h=0,u=0,p=0,g=0,x=0;const m=d.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const S=c[f];if(S.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),h++}else if(S.isSpotLight){const _=n.spot[p];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),_.direction.sub(i),_.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const _=n.rectArea[g];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),a.identity(),o.copy(S.matrixWorld),o.premultiply(m),a.extractRotation(o),_.halfWidth.set(S.width*.5,0,0),_.halfHeight.set(0,S.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const _=n.point[u];_.position.setFromMatrixPosition(S.matrixWorld),_.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){const _=n.hemi[x];_.direction.setFromMatrixPosition(S.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:r,setupView:l,state:n}}function Tl(s){const t=new z0(s),e=[],n=[];function i(d){c.camera=d,e.length=0,n.length=0}function o(d){e.push(d)}function a(d){n.push(d)}function r(){t.setup(e)}function l(d){t.setupView(e,d)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:a}}function G0(s){let t=new WeakMap;function e(i,o=0){const a=t.get(i);let r;return a===void 0?(r=new Tl(s),t.set(i,[r])):o>=a.length?(r=new Tl(s),a.push(r)):r=a[o],r}function n(){t=new WeakMap}return{get:e,dispose:n}}class H0 extends Hi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Od,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class V0 extends Hi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const W0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X0=`uniform sampler2D shadow_pass;
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
}`;function q0(s,t,e){let n=new da;const i=new Dt,o=new Dt,a=new ie,r=new H0({depthPacking:kd}),l=new V0,c={},d=e.maxTextureSize,h={[zn]:Re,[Re]:zn,[ze]:ze},u=new Ce({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:W0,fragmentShader:X0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new D(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let f=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const b=s.getRenderTarget(),y=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),G=s.state;G.setBlending(bn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const O=f!==vn&&this.type===vn,H=f===vn&&this.type!==vn;for(let $=0,Y=A.length;$<Y;$++){const X=A[$],k=X.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const nt=k.getFrameExtents();if(i.multiply(nt),o.copy(k.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(o.x=Math.floor(d/nt.x),i.x=o.x*nt.x,k.mapSize.x=o.x),i.y>d&&(o.y=Math.floor(d/nt.y),i.y=o.y*nt.y,k.mapSize.y=o.y)),k.map===null||O===!0||H===!0){const vt=this.type!==vn?{minFilter:nn,magFilter:nn}:{};k.map!==null&&k.map.dispose(),k.map=new sn(i.x,i.y,vt),k.map.texture.name=X.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();const dt=k.getViewportCount();for(let vt=0;vt<dt;vt++){const Bt=k.getViewport(vt);a.set(o.x*Bt.x,o.y*Bt.y,o.x*Bt.z,o.y*Bt.w),G.viewport(a),k.updateMatrices(X,vt),n=k.getFrustum(),_(T,R,k.camera,X,this.type)}k.isPointLightShadow!==!0&&this.type===vn&&w(k,R),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(b,y,P)};function w(A,T){const R=t.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new sn(i.x,i.y)),u.uniforms.shadow_pass.value=A.map.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(T,null,R,u,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(T,null,R,p,x,null)}function S(A,T,R,b){let y=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)y=P;else if(y=R.isPointLight===!0?l:r,s.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const G=y.uuid,O=T.uuid;let H=c[G];H===void 0&&(H={},c[G]=H);let $=H[O];$===void 0&&($=y.clone(),H[O]=$,T.addEventListener("dispose",I)),y=$}if(y.visible=T.visible,y.wireframe=T.wireframe,b===vn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const G=s.properties.get(y);G.light=R}return y}function _(A,T,R,b,y){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&y===vn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const O=t.update(A),H=A.material;if(Array.isArray(H)){const $=O.groups;for(let Y=0,X=$.length;Y<X;Y++){const k=$[Y],nt=H[k.materialIndex];if(nt&&nt.visible){const dt=S(A,nt,b,y);A.onBeforeShadow(s,A,T,R,O,dt,k),s.renderBufferDirect(R,null,O,dt,A,k),A.onAfterShadow(s,A,T,R,O,dt,k)}}}else if(H.visible){const $=S(A,H,b,y);A.onBeforeShadow(s,A,T,R,O,$,null),s.renderBufferDirect(R,null,O,$,A,null),A.onAfterShadow(s,A,T,R,O,$,null)}}const G=A.children;for(let O=0,H=G.length;O<H;O++)_(G[O],T,R,b,y)}function I(A){A.target.removeEventListener("dispose",I);for(const R in c){const b=c[R],y=A.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const Y0={[cr]:dr,[hr]:pr,[ur]:mr,[Di]:fr,[dr]:cr,[pr]:hr,[mr]:ur,[fr]:Di};function j0(s,t){function e(){let F=!1;const lt=new ie;let q=null;const et=new ie(0,0,0,0);return{setMask:function(mt){q!==mt&&!F&&(s.colorMask(mt,mt,mt,mt),q=mt)},setLocked:function(mt){F=mt},setClear:function(mt,ft,Ot,fe,Ee){Ee===!0&&(mt*=fe,ft*=fe,Ot*=fe),lt.set(mt,ft,Ot,fe),et.equals(lt)===!1&&(s.clearColor(mt,ft,Ot,fe),et.copy(lt))},reset:function(){F=!1,q=null,et.set(-1,0,0,0)}}}function n(){let F=!1,lt=!1,q=null,et=null,mt=null;return{setReversed:function(ft){if(lt!==ft){const Ot=t.get("EXT_clip_control");lt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);const fe=mt;mt=null,this.setClear(fe)}lt=ft},getReversed:function(){return lt},setTest:function(ft){ft?J(s.DEPTH_TEST):ht(s.DEPTH_TEST)},setMask:function(ft){q!==ft&&!F&&(s.depthMask(ft),q=ft)},setFunc:function(ft){if(lt&&(ft=Y0[ft]),et!==ft){switch(ft){case cr:s.depthFunc(s.NEVER);break;case dr:s.depthFunc(s.ALWAYS);break;case hr:s.depthFunc(s.LESS);break;case Di:s.depthFunc(s.LEQUAL);break;case ur:s.depthFunc(s.EQUAL);break;case fr:s.depthFunc(s.GEQUAL);break;case pr:s.depthFunc(s.GREATER);break;case mr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}et=ft}},setLocked:function(ft){F=ft},setClear:function(ft){mt!==ft&&(lt&&(ft=1-ft),s.clearDepth(ft),mt=ft)},reset:function(){F=!1,q=null,et=null,mt=null,lt=!1}}}function i(){let F=!1,lt=null,q=null,et=null,mt=null,ft=null,Ot=null,fe=null,Ee=null;return{setTest:function(te){F||(te?J(s.STENCIL_TEST):ht(s.STENCIL_TEST))},setMask:function(te){lt!==te&&!F&&(s.stencilMask(te),lt=te)},setFunc:function(te,Ye,hn){(q!==te||et!==Ye||mt!==hn)&&(s.stencilFunc(te,Ye,hn),q=te,et=Ye,mt=hn)},setOp:function(te,Ye,hn){(ft!==te||Ot!==Ye||fe!==hn)&&(s.stencilOp(te,Ye,hn),ft=te,Ot=Ye,fe=hn)},setLocked:function(te){F=te},setClear:function(te){Ee!==te&&(s.clearStencil(te),Ee=te)},reset:function(){F=!1,lt=null,q=null,et=null,mt=null,ft=null,Ot=null,fe=null,Ee=null}}}const o=new e,a=new n,r=new i,l=new WeakMap,c=new WeakMap;let d={},h={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,w=null,S=null,_=null,I=null,A=null,T=new Mt(0,0,0),R=0,b=!1,y=null,P=null,G=null,O=null,H=null;const $=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,X=0;const k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),Y=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),Y=X>=2);let nt=null,dt={};const vt=s.getParameter(s.SCISSOR_BOX),Bt=s.getParameter(s.VIEWPORT),Xt=new ie().fromArray(vt),K=new ie().fromArray(Bt);function st(F,lt,q,et){const mt=new Uint8Array(4),ft=s.createTexture();s.bindTexture(F,ft),s.texParameteri(F,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(F,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ot=0;Ot<q;Ot++)F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,et,0,s.RGBA,s.UNSIGNED_BYTE,mt):s.texImage2D(lt+Ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,mt);return ft}const yt={};yt[s.TEXTURE_2D]=st(s.TEXTURE_2D,s.TEXTURE_2D,1),yt[s.TEXTURE_CUBE_MAP]=st(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[s.TEXTURE_2D_ARRAY]=st(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),yt[s.TEXTURE_3D]=st(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),r.setClear(0),J(s.DEPTH_TEST),a.setFunc(Di),At(!1),ut(Ia),J(s.CULL_FACE),B(bn);function J(F){d[F]!==!0&&(s.enable(F),d[F]=!0)}function ht(F){d[F]!==!1&&(s.disable(F),d[F]=!1)}function wt(F,lt){return h[F]!==lt?(s.bindFramebuffer(F,lt),h[F]=lt,F===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=lt),F===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function Lt(F,lt){let q=p,et=!1;if(F){q=u.get(lt),q===void 0&&(q=[],u.set(lt,q));const mt=F.textures;if(q.length!==mt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Ot=mt.length;ft<Ot;ft++)q[ft]=s.COLOR_ATTACHMENT0+ft;q.length=mt.length,et=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,et=!0);et&&s.drawBuffers(q)}function Kt(F){return g!==F?(s.useProgram(F),g=F,!0):!1}const Vt={[Zn]:s.FUNC_ADD,[fd]:s.FUNC_SUBTRACT,[pd]:s.FUNC_REVERSE_SUBTRACT};Vt[md]=s.MIN,Vt[gd]=s.MAX;const ae={[xd]:s.ZERO,[_d]:s.ONE,[vd]:s.SRC_COLOR,[ar]:s.SRC_ALPHA,[Ed]:s.SRC_ALPHA_SATURATE,[bd]:s.DST_COLOR,[Md]:s.DST_ALPHA,[yd]:s.ONE_MINUS_SRC_COLOR,[lr]:s.ONE_MINUS_SRC_ALPHA,[Sd]:s.ONE_MINUS_DST_COLOR,[wd]:s.ONE_MINUS_DST_ALPHA,[Td]:s.CONSTANT_COLOR,[Ad]:s.ONE_MINUS_CONSTANT_COLOR,[Cd]:s.CONSTANT_ALPHA,[Rd]:s.ONE_MINUS_CONSTANT_ALPHA};function B(F,lt,q,et,mt,ft,Ot,fe,Ee,te){if(F===bn){x===!0&&(ht(s.BLEND),x=!1);return}if(x===!1&&(J(s.BLEND),x=!0),F!==ud){if(F!==m||te!==b){if((f!==Zn||_!==Zn)&&(s.blendEquation(s.FUNC_ADD),f=Zn,_=Zn),te)switch(F){case Ri:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rr:s.blendFunc(s.ONE,s.ONE);break;case Da:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case La:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Ri:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case rr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Da:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case La:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,S=null,I=null,A=null,T.set(0,0,0),R=0,m=F,b=te}return}mt=mt||lt,ft=ft||q,Ot=Ot||et,(lt!==f||mt!==_)&&(s.blendEquationSeparate(Vt[lt],Vt[mt]),f=lt,_=mt),(q!==w||et!==S||ft!==I||Ot!==A)&&(s.blendFuncSeparate(ae[q],ae[et],ae[ft],ae[Ot]),w=q,S=et,I=ft,A=Ot),(fe.equals(T)===!1||Ee!==R)&&(s.blendColor(fe.r,fe.g,fe.b,Ee),T.copy(fe),R=Ee),m=F,b=!1}function Se(F,lt){F.side===ze?ht(s.CULL_FACE):J(s.CULL_FACE);let q=F.side===Re;lt&&(q=!q),At(q),F.blending===Ri&&F.transparent===!1?B(bn):B(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),o.setMask(F.colorWrite);const et=F.stencilWrite;r.setTest(et),et&&(r.setMask(F.stencilWriteMask),r.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),r.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),$t(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?J(s.SAMPLE_ALPHA_TO_COVERAGE):ht(s.SAMPLE_ALPHA_TO_COVERAGE)}function At(F){y!==F&&(F?s.frontFace(s.CW):s.frontFace(s.CCW),y=F)}function ut(F){F!==dd?(J(s.CULL_FACE),F!==P&&(F===Ia?s.cullFace(s.BACK):F===hd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ht(s.CULL_FACE),P=F}function Tt(F){F!==G&&(Y&&s.lineWidth(F),G=F)}function $t(F,lt,q){F?(J(s.POLYGON_OFFSET_FILL),(O!==lt||H!==q)&&(s.polygonOffset(lt,q),O=lt,H=q)):ht(s.POLYGON_OFFSET_FILL)}function Ct(F){F?J(s.SCISSOR_TEST):ht(s.SCISSOR_TEST)}function E(F){F===void 0&&(F=s.TEXTURE0+$-1),nt!==F&&(s.activeTexture(F),nt=F)}function v(F,lt,q){q===void 0&&(nt===null?q=s.TEXTURE0+$-1:q=nt);let et=dt[q];et===void 0&&(et={type:void 0,texture:void 0},dt[q]=et),(et.type!==F||et.texture!==lt)&&(nt!==q&&(s.activeTexture(q),nt=q),s.bindTexture(F,lt||yt[F]),et.type=F,et.texture=lt)}function z(){const F=dt[nt];F!==void 0&&F.type!==void 0&&(s.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function tt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{s.compressedTexImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{s.texSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{s.texSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function jt(){try{s.texStorage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{s.texStorage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{s.texImage2D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(F){Xt.equals(F)===!1&&(s.scissor(F.x,F.y,F.z,F.w),Xt.copy(F))}function _t(F){K.equals(F)===!1&&(s.viewport(F.x,F.y,F.z,F.w),K.copy(F))}function qt(F,lt){let q=c.get(lt);q===void 0&&(q=new WeakMap,c.set(lt,q));let et=q.get(F);et===void 0&&(et=s.getUniformBlockIndex(lt,F.name),q.set(F,et))}function Gt(F,lt){const et=c.get(lt).get(F);l.get(lt)!==et&&(s.uniformBlockBinding(lt,et,F.__bindingPointIndex),l.set(lt,et))}function oe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},nt=null,dt={},h={},u=new WeakMap,p=[],g=null,x=!1,m=null,f=null,w=null,S=null,_=null,I=null,A=null,T=new Mt(0,0,0),R=0,b=!1,y=null,P=null,G=null,O=null,H=null,Xt.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),o.reset(),a.reset(),r.reset()}return{buffers:{color:o,depth:a,stencil:r},enable:J,disable:ht,bindFramebuffer:wt,drawBuffers:Lt,useProgram:Kt,setBlending:B,setMaterial:Se,setFlipSided:At,setCullFace:ut,setLineWidth:Tt,setPolygonOffset:$t,setScissorTest:Ct,activeTexture:E,bindTexture:v,unbindTexture:z,compressedTexImage2D:tt,compressedTexImage3D:it,texImage2D:xt,texImage3D:It,updateUBOMapping:qt,uniformBlockBinding:Gt,texStorage2D:jt,texStorage3D:ot,texSubImage2D:Z,texSubImage3D:Rt,compressedTexSubImage2D:ct,compressedTexSubImage3D:gt,scissor:Ft,viewport:_t,reset:oe}}function Al(s,t,e,n){const i=$0(n);switch(e){case _c:return s*t;case yc:return s*t;case Mc:return s*t*2;case wc:return s*t/i.components*i.byteLength;case ra:return s*t/i.components*i.byteLength;case bc:return s*t*2/i.components*i.byteLength;case aa:return s*t*2/i.components*i.byteLength;case vc:return s*t*3/i.components*i.byteLength;case en:return s*t*4/i.components*i.byteLength;case la:return s*t*4/i.components*i.byteLength;case Js:case Ks:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Zs:case Qs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mr:case br:return Math.max(s,16)*Math.max(t,8)/4;case yr:case wr:return Math.max(s,8)*Math.max(t,8)/2;case Sr:case Er:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Tr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cr:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Rr:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Pr:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ir:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Dr:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Lr:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Fr:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Br:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Ur:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Nr:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Or:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case kr:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case zr:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case to:case Gr:case Hr:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Sc:case Vr:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Wr:case Xr:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function $0(s){switch(s){case Tn:case mc:return{byteLength:1,components:1};case fs:case gc:case Sn:return{byteLength:2,components:1};case sa:case oa:return{byteLength:2,components:4};case ri:case ia:case Mn:return{byteLength:4,components:1};case xc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function J0(s,t,e,n,i,o,a){const r=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,d=new WeakMap;let h;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return p?new OffscreenCanvas(E,v):ao("canvas")}function x(E,v,z){let tt=1;const it=Ct(E);if((it.width>z||it.height>z)&&(tt=z/Math.max(it.width,it.height)),tt<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Z=Math.floor(tt*it.width),Rt=Math.floor(tt*it.height);h===void 0&&(h=g(Z,Rt));const ct=v?g(Z,Rt):h;return ct.width=Z,ct.height=Rt,ct.getContext("2d").drawImage(E,0,0,Z,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+Z+"x"+Rt+")."),ct}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){s.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function S(E,v,z,tt,it=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=v;if(v===s.RED&&(z===s.FLOAT&&(Z=s.R32F),z===s.HALF_FLOAT&&(Z=s.R16F),z===s.UNSIGNED_BYTE&&(Z=s.R8)),v===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.R8UI),z===s.UNSIGNED_SHORT&&(Z=s.R16UI),z===s.UNSIGNED_INT&&(Z=s.R32UI),z===s.BYTE&&(Z=s.R8I),z===s.SHORT&&(Z=s.R16I),z===s.INT&&(Z=s.R32I)),v===s.RG&&(z===s.FLOAT&&(Z=s.RG32F),z===s.HALF_FLOAT&&(Z=s.RG16F),z===s.UNSIGNED_BYTE&&(Z=s.RG8)),v===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RG8UI),z===s.UNSIGNED_SHORT&&(Z=s.RG16UI),z===s.UNSIGNED_INT&&(Z=s.RG32UI),z===s.BYTE&&(Z=s.RG8I),z===s.SHORT&&(Z=s.RG16I),z===s.INT&&(Z=s.RG32I)),v===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGB8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGB16UI),z===s.UNSIGNED_INT&&(Z=s.RGB32UI),z===s.BYTE&&(Z=s.RGB8I),z===s.SHORT&&(Z=s.RGB16I),z===s.INT&&(Z=s.RGB32I)),v===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&(Z=s.RGBA8UI),z===s.UNSIGNED_SHORT&&(Z=s.RGBA16UI),z===s.UNSIGNED_INT&&(Z=s.RGBA32UI),z===s.BYTE&&(Z=s.RGBA8I),z===s.SHORT&&(Z=s.RGBA16I),z===s.INT&&(Z=s.RGBA32I)),v===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&(Z=s.RGB9_E5),v===s.RGBA){const Rt=it?mo:Yt.getTransfer(tt);z===s.FLOAT&&(Z=s.RGBA32F),z===s.HALF_FLOAT&&(Z=s.RGBA16F),z===s.UNSIGNED_BYTE&&(Z=Rt===ee?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(E,v){let z;return E?v===null||v===ri||v===Bi?z=s.DEPTH24_STENCIL8:v===Mn?z=s.DEPTH32F_STENCIL8:v===fs&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ri||v===Bi?z=s.DEPTH_COMPONENT24:v===Mn?z=s.DEPTH_COMPONENT32F:v===fs&&(z=s.DEPTH_COMPONENT16),z}function I(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==nn&&E.minFilter!==cn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function A(E){const v=E.target;v.removeEventListener("dispose",A),R(v),v.isVideoTexture&&d.delete(v)}function T(E){const v=E.target;v.removeEventListener("dispose",T),y(v)}function R(E){const v=n.get(E);if(v.__webglInit===void 0)return;const z=E.source,tt=u.get(z);if(tt){const it=tt[v.__cacheKey];it.usedTimes--,it.usedTimes===0&&b(E),Object.keys(tt).length===0&&u.delete(z)}n.remove(E)}function b(E){const v=n.get(E);s.deleteTexture(v.__webglTexture);const z=E.source,tt=u.get(z);delete tt[v.__cacheKey],a.memory.textures--}function y(E){const v=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(v.__webglFramebuffer[tt]))for(let it=0;it<v.__webglFramebuffer[tt].length;it++)s.deleteFramebuffer(v.__webglFramebuffer[tt][it]);else s.deleteFramebuffer(v.__webglFramebuffer[tt]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[tt])}else{if(Array.isArray(v.__webglFramebuffer))for(let tt=0;tt<v.__webglFramebuffer.length;tt++)s.deleteFramebuffer(v.__webglFramebuffer[tt]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let tt=0;tt<v.__webglColorRenderbuffer.length;tt++)v.__webglColorRenderbuffer[tt]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[tt]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=E.textures;for(let tt=0,it=z.length;tt<it;tt++){const Z=n.get(z[tt]);Z.__webglTexture&&(s.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(z[tt])}n.remove(E)}let P=0;function G(){P=0}function O(){const E=P;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),P+=1,E}function H(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function $(E,v){const z=n.get(E);if(E.isVideoTexture&&Tt(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){const tt=E.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(z,E,v);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+v)}function Y(E,v){const z=n.get(E);if(E.version>0&&z.__version!==E.version){K(z,E,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+v)}function X(E,v){const z=n.get(E);if(E.version>0&&z.__version!==E.version){K(z,E,v);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+v)}function k(E,v){const z=n.get(E);if(E.version>0&&z.__version!==E.version){st(z,E,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+v)}const nt={[_r]:s.REPEAT,[ni]:s.CLAMP_TO_EDGE,[vr]:s.MIRRORED_REPEAT},dt={[nn]:s.NEAREST,[Ld]:s.NEAREST_MIPMAP_NEAREST,[Es]:s.NEAREST_MIPMAP_LINEAR,[cn]:s.LINEAR,[wo]:s.LINEAR_MIPMAP_NEAREST,[ii]:s.LINEAR_MIPMAP_LINEAR},vt={[Gd]:s.NEVER,[Yd]:s.ALWAYS,[Hd]:s.LESS,[Tc]:s.LEQUAL,[Vd]:s.EQUAL,[qd]:s.GEQUAL,[Wd]:s.GREATER,[Xd]:s.NOTEQUAL};function Bt(E,v){if(v.type===Mn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===cn||v.magFilter===wo||v.magFilter===Es||v.magFilter===ii||v.minFilter===cn||v.minFilter===wo||v.minFilter===Es||v.minFilter===ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,nt[v.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,nt[v.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,nt[v.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,dt[v.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,dt[v.minFilter]),v.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,vt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===nn||v.minFilter!==Es&&v.minFilter!==ii||v.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Xt(E,v){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",A));const tt=v.source;let it=u.get(tt);it===void 0&&(it={},u.set(tt,it));const Z=H(v);if(Z!==E.__cacheKey){it[Z]===void 0&&(it[Z]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,z=!0),it[Z].usedTimes++;const Rt=it[E.__cacheKey];Rt!==void 0&&(it[E.__cacheKey].usedTimes--,Rt.usedTimes===0&&b(v)),E.__cacheKey=Z,E.__webglTexture=it[Z].texture}return z}function K(E,v,z){let tt=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(tt=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(tt=s.TEXTURE_3D);const it=Xt(E,v),Z=v.source;e.bindTexture(tt,E.__webglTexture,s.TEXTURE0+z);const Rt=n.get(Z);if(Z.version!==Rt.__version||it===!0){e.activeTexture(s.TEXTURE0+z);const ct=Yt.getPrimaries(Yt.workingColorSpace),gt=v.colorSpace===Un?null:Yt.getPrimaries(v.colorSpace),jt=v.colorSpace===Un||ct===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let ot=x(v.image,!1,i.maxTextureSize);ot=$t(v,ot);const xt=o.convert(v.format,v.colorSpace),It=o.convert(v.type);let Ft=S(v.internalFormat,xt,It,v.colorSpace,v.isVideoTexture);Bt(tt,v);let _t;const qt=v.mipmaps,Gt=v.isVideoTexture!==!0,oe=Rt.__version===void 0||it===!0,F=Z.dataReady,lt=I(v,ot);if(v.isDepthTexture)Ft=_(v.format===Ui,v.type),oe&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,Ft,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,Ft,ot.width,ot.height,0,xt,It,null));else if(v.isDataTexture)if(qt.length>0){Gt&&oe&&e.texStorage2D(s.TEXTURE_2D,lt,Ft,qt[0].width,qt[0].height);for(let q=0,et=qt.length;q<et;q++)_t=qt[q],Gt?F&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,xt,It,_t.data):e.texImage2D(s.TEXTURE_2D,q,Ft,_t.width,_t.height,0,xt,It,_t.data);v.generateMipmaps=!1}else Gt?(oe&&e.texStorage2D(s.TEXTURE_2D,lt,Ft,ot.width,ot.height),F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot.width,ot.height,xt,It,ot.data)):e.texImage2D(s.TEXTURE_2D,0,Ft,ot.width,ot.height,0,xt,It,ot.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Gt&&oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Ft,qt[0].width,qt[0].height,ot.depth);for(let q=0,et=qt.length;q<et;q++)if(_t=qt[q],v.format!==en)if(xt!==null)if(Gt){if(F)if(v.layerUpdates.size>0){const mt=Al(_t.width,_t.height,v.format,v.type);for(const ft of v.layerUpdates){const Ot=_t.data.subarray(ft*mt/_t.data.BYTES_PER_ELEMENT,(ft+1)*mt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,ft,_t.width,_t.height,1,xt,Ot)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,ot.depth,xt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ft,_t.width,_t.height,ot.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?F&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,ot.depth,xt,It,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Ft,_t.width,_t.height,ot.depth,0,xt,It,_t.data)}else{Gt&&oe&&e.texStorage2D(s.TEXTURE_2D,lt,Ft,qt[0].width,qt[0].height);for(let q=0,et=qt.length;q<et;q++)_t=qt[q],v.format!==en?xt!==null?Gt?F&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Ft,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?F&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,xt,It,_t.data):e.texImage2D(s.TEXTURE_2D,q,Ft,_t.width,_t.height,0,xt,It,_t.data)}else if(v.isDataArrayTexture)if(Gt){if(oe&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Ft,ot.width,ot.height,ot.depth),F)if(v.layerUpdates.size>0){const q=Al(ot.width,ot.height,v.format,v.type);for(const et of v.layerUpdates){const mt=ot.data.subarray(et*q/ot.data.BYTES_PER_ELEMENT,(et+1)*q/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,et,ot.width,ot.height,1,xt,It,mt)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,xt,It,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,ot.width,ot.height,ot.depth,0,xt,It,ot.data);else if(v.isData3DTexture)Gt?(oe&&e.texStorage3D(s.TEXTURE_3D,lt,Ft,ot.width,ot.height,ot.depth),F&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,xt,It,ot.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,ot.width,ot.height,ot.depth,0,xt,It,ot.data);else if(v.isFramebufferTexture){if(oe)if(Gt)e.texStorage2D(s.TEXTURE_2D,lt,Ft,ot.width,ot.height);else{let q=ot.width,et=ot.height;for(let mt=0;mt<lt;mt++)e.texImage2D(s.TEXTURE_2D,mt,Ft,q,et,0,xt,It,null),q>>=1,et>>=1}}else if(qt.length>0){if(Gt&&oe){const q=Ct(qt[0]);e.texStorage2D(s.TEXTURE_2D,lt,Ft,q.width,q.height)}for(let q=0,et=qt.length;q<et;q++)_t=qt[q],Gt?F&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,xt,It,_t):e.texImage2D(s.TEXTURE_2D,q,Ft,xt,It,_t);v.generateMipmaps=!1}else if(Gt){if(oe){const q=Ct(ot);e.texStorage2D(s.TEXTURE_2D,lt,Ft,q.width,q.height)}F&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,It,ot)}else e.texImage2D(s.TEXTURE_2D,0,Ft,xt,It,ot);m(v)&&f(tt),Rt.__version=Z.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function st(E,v,z){if(v.image.length!==6)return;const tt=Xt(E,v),it=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+z);const Z=n.get(it);if(it.version!==Z.__version||tt===!0){e.activeTexture(s.TEXTURE0+z);const Rt=Yt.getPrimaries(Yt.workingColorSpace),ct=v.colorSpace===Un?null:Yt.getPrimaries(v.colorSpace),gt=v.colorSpace===Un||Rt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const jt=v.isCompressedTexture||v.image[0].isCompressedTexture,ot=v.image[0]&&v.image[0].isDataTexture,xt=[];for(let et=0;et<6;et++)!jt&&!ot?xt[et]=x(v.image[et],!0,i.maxCubemapSize):xt[et]=ot?v.image[et].image:v.image[et],xt[et]=$t(v,xt[et]);const It=xt[0],Ft=o.convert(v.format,v.colorSpace),_t=o.convert(v.type),qt=S(v.internalFormat,Ft,_t,v.colorSpace),Gt=v.isVideoTexture!==!0,oe=Z.__version===void 0||tt===!0,F=it.dataReady;let lt=I(v,It);Bt(s.TEXTURE_CUBE_MAP,v);let q;if(jt){Gt&&oe&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,qt,It.width,It.height);for(let et=0;et<6;et++){q=xt[et].mipmaps;for(let mt=0;mt<q.length;mt++){const ft=q[mt];v.format!==en?Ft!==null?Gt?F&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt,0,0,ft.width,ft.height,Ft,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt,qt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt,0,0,ft.width,ft.height,Ft,_t,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt,qt,ft.width,ft.height,0,Ft,_t,ft.data)}}}else{if(q=v.mipmaps,Gt&&oe){q.length>0&&lt++;const et=Ct(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,qt,et.width,et.height)}for(let et=0;et<6;et++)if(ot){Gt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,xt[et].width,xt[et].height,Ft,_t,xt[et].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,qt,xt[et].width,xt[et].height,0,Ft,_t,xt[et].data);for(let mt=0;mt<q.length;mt++){const Ot=q[mt].image[et].image;Gt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt+1,0,0,Ot.width,Ot.height,Ft,_t,Ot.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt+1,qt,Ot.width,Ot.height,0,Ft,_t,Ot.data)}}else{Gt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ft,_t,xt[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,qt,Ft,_t,xt[et]);for(let mt=0;mt<q.length;mt++){const ft=q[mt];Gt?F&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt+1,0,0,Ft,_t,ft.image[et]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+et,mt+1,qt,Ft,_t,ft.image[et])}}}m(v)&&f(s.TEXTURE_CUBE_MAP),Z.__version=it.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function yt(E,v,z,tt,it,Z){const Rt=o.convert(z.format,z.colorSpace),ct=o.convert(z.type),gt=S(z.internalFormat,Rt,ct,z.colorSpace),jt=n.get(v),ot=n.get(z);if(ot.__renderTarget=v,!jt.__hasExternalTextures){const xt=Math.max(1,v.width>>Z),It=Math.max(1,v.height>>Z);it===s.TEXTURE_3D||it===s.TEXTURE_2D_ARRAY?e.texImage3D(it,Z,gt,xt,It,v.depth,0,Rt,ct,null):e.texImage2D(it,Z,gt,xt,It,0,Rt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),ut(v)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,tt,it,ot.__webglTexture,0,At(v)):(it===s.TEXTURE_2D||it>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,tt,it,ot.__webglTexture,Z),e.bindFramebuffer(s.FRAMEBUFFER,null)}function J(E,v,z){if(s.bindRenderbuffer(s.RENDERBUFFER,E),v.depthBuffer){const tt=v.depthTexture,it=tt&&tt.isDepthTexture?tt.type:null,Z=_(v.stencilBuffer,it),Rt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=At(v);ut(v)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,Z,v.width,v.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,Z,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,Z,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Rt,s.RENDERBUFFER,E)}else{const tt=v.textures;for(let it=0;it<tt.length;it++){const Z=tt[it],Rt=o.convert(Z.format,Z.colorSpace),ct=o.convert(Z.type),gt=S(Z.internalFormat,Rt,ct,Z.colorSpace),jt=At(v);z&&ut(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,gt,v.width,v.height):ut(v)?r.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,gt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,gt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ht(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=n.get(v.depthTexture);tt.__renderTarget=v,(!tt.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const it=tt.__webglTexture,Z=At(v);if(v.depthTexture.format===Pi)ut(v)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,it,0);else if(v.depthTexture.format===Ui)ut(v)?r.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0,Z):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function wt(E){const v=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const tt=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),tt){const it=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,tt.removeEventListener("dispose",it)};tt.addEventListener("dispose",it),v.__depthDisposeCallback=it}v.__boundDepthTexture=tt}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");ht(v.__webglFramebuffer,E)}else if(z){v.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[tt]),v.__webglDepthbuffer[tt]===void 0)v.__webglDepthbuffer[tt]=s.createRenderbuffer(),J(v.__webglDepthbuffer[tt],E,!1);else{const it=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[tt];s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,it,s.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),J(v.__webglDepthbuffer,E,!1);else{const tt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,it=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,it),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,it)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Lt(E,v,z){const tt=n.get(E);v!==void 0&&yt(tt.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&wt(E)}function Kt(E){const v=E.texture,z=n.get(E),tt=n.get(v);E.addEventListener("dispose",T);const it=E.textures,Z=E.isWebGLCubeRenderTarget===!0,Rt=it.length>1;if(Rt||(tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture()),tt.__version=v.version,a.memory.textures++),Z){z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[ct]=[];for(let gt=0;gt<v.mipmaps.length;gt++)z.__webglFramebuffer[ct][gt]=s.createFramebuffer()}else z.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)z.__webglFramebuffer[ct]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(Rt)for(let ct=0,gt=it.length;ct<gt;ct++){const jt=n.get(it[ct]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),a.memory.textures++)}if(E.samples>0&&ut(E)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ct=0;ct<it.length;ct++){const gt=it[ct];z.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ct]);const jt=o.convert(gt.format,gt.colorSpace),ot=o.convert(gt.type),xt=S(gt.internalFormat,jt,ot,gt.colorSpace,E.isXRRenderTarget===!0),It=At(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,xt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,z.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),J(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Z){e.bindTexture(s.TEXTURE_CUBE_MAP,tt.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)yt(z.__webglFramebuffer[ct][gt],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,gt);else yt(z.__webglFramebuffer[ct],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ct=0,gt=it.length;ct<gt;ct++){const jt=it[ct],ot=n.get(jt);e.bindTexture(s.TEXTURE_2D,ot.__webglTexture),Bt(s.TEXTURE_2D,jt),yt(z.__webglFramebuffer,E,jt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),m(jt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,tt.__webglTexture),Bt(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let gt=0;gt<v.mipmaps.length;gt++)yt(z.__webglFramebuffer[gt],E,v,s.COLOR_ATTACHMENT0,ct,gt);else yt(z.__webglFramebuffer,E,v,s.COLOR_ATTACHMENT0,ct,0);m(v)&&f(ct),e.unbindTexture()}E.depthBuffer&&wt(E)}function Vt(E){const v=E.textures;for(let z=0,tt=v.length;z<tt;z++){const it=v[z];if(m(it)){const Z=w(E),Rt=n.get(it).__webglTexture;e.bindTexture(Z,Rt),f(Z),e.unbindTexture()}}}const ae=[],B=[];function Se(E){if(E.samples>0){if(ut(E)===!1){const v=E.textures,z=E.width,tt=E.height;let it=s.COLOR_BUFFER_BIT;const Z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=n.get(E),ct=v.length>1;if(ct)for(let gt=0;gt<v.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let gt=0;gt<v.length;gt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(it|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(it|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[gt]);const jt=n.get(v[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,jt,0)}s.blitFramebuffer(0,0,z,tt,0,0,z,tt,it,s.NEAREST),l===!0&&(ae.length=0,B.length=0,ae.push(s.COLOR_ATTACHMENT0+gt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ae.push(Z),B.push(Z),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,B)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let gt=0;gt<v.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[gt]);const jt=n.get(v[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function At(E){return Math.min(i.maxSamples,E.samples)}function ut(E){const v=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Tt(E){const v=a.render.frame;d.get(E)!==v&&(d.set(E,v),E.update())}function $t(E,v){const z=E.colorSpace,tt=E.format,it=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==zi&&z!==Un&&(Yt.getTransfer(z)===ee?(tt!==en||it!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),v}function Ct(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=G,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=X,this.setTextureCube=k,this.rebindTextures=Lt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=ut}function K0(s,t){function e(n,i=Un){let o;const a=Yt.getTransfer(i);if(n===Tn)return s.UNSIGNED_BYTE;if(n===sa)return s.UNSIGNED_SHORT_4_4_4_4;if(n===oa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===xc)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===mc)return s.BYTE;if(n===gc)return s.SHORT;if(n===fs)return s.UNSIGNED_SHORT;if(n===ia)return s.INT;if(n===ri)return s.UNSIGNED_INT;if(n===Mn)return s.FLOAT;if(n===Sn)return s.HALF_FLOAT;if(n===_c)return s.ALPHA;if(n===vc)return s.RGB;if(n===en)return s.RGBA;if(n===yc)return s.LUMINANCE;if(n===Mc)return s.LUMINANCE_ALPHA;if(n===Pi)return s.DEPTH_COMPONENT;if(n===Ui)return s.DEPTH_STENCIL;if(n===wc)return s.RED;if(n===ra)return s.RED_INTEGER;if(n===bc)return s.RG;if(n===aa)return s.RG_INTEGER;if(n===la)return s.RGBA_INTEGER;if(n===Js||n===Ks||n===Zs||n===Qs)if(a===ee)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Js)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ks)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Js)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ks)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Zs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yr||n===Mr||n===wr||n===br)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===yr)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mr)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wr)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===br)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sr||n===Er||n===Tr)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Sr||n===Er)return a===ee?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Tr)return a===ee?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ar||n===Cr||n===Rr||n===Pr||n===Ir||n===Dr||n===Lr||n===Fr||n===Br||n===Ur||n===Nr||n===Or||n===kr||n===zr)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ar)return a===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cr)return a===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rr)return a===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pr)return a===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ir)return a===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Dr)return a===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lr)return a===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fr)return a===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Br)return a===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ur)return a===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Nr)return a===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Or)return a===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kr)return a===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zr)return a===ee?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===to||n===Gr||n===Hr)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===to)return a===ee?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Gr)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hr)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Sc||n===Vr||n===Wr||n===Xr)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===to)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Vr)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wr)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xr)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class Z0 extends De{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Nt extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q0={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,o=null,a=null;const r=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=d.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&o!==null&&(i=o),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Q0)))}return r!==null&&(r.visible=i!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Nt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const tm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,em=`
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

}`;class nm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Le,o=t.properties.get(i);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ce({vertexShader:tm,fragmentShader:em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new D(new de(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class im extends ai{constructor(t,e){super();const n=this;let i=null,o=1,a=null,r="local-floor",l=1,c=null,d=null,h=null,u=null,p=null,g=null;const x=new nm,m=e.getContextAttributes();let f=null,w=null;const S=[],_=[],I=new Dt;let A=null;const T=new De;T.viewport=new ie;const R=new De;R.viewport=new ie;const b=[T,R],y=new Z0;let P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let st=S[K];return st===void 0&&(st=new Zo,S[K]=st),st.getTargetRaySpace()},this.getControllerGrip=function(K){let st=S[K];return st===void 0&&(st=new Zo,S[K]=st),st.getGripSpace()},this.getHand=function(K){let st=S[K];return st===void 0&&(st=new Zo,S[K]=st),st.getHandSpace()};function O(K){const st=_.indexOf(K.inputSource);if(st===-1)return;const yt=S[st];yt!==void 0&&(yt.update(K.inputSource,K.frame,c||a),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function H(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",$);for(let K=0;K<S.length;K++){const st=_[K];st!==null&&(_[K]=null,S[K].disconnect(st))}P=null,G=null,x.reset(),t.setRenderTarget(f),p=null,u=null,h=null,i=null,w=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",H),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){const st={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(i,e,st),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new sn(p.framebufferWidth,p.framebufferHeight,{format:en,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let st=null,yt=null,J=null;m.depth&&(J=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=m.stencil?Ui:Pi,yt=m.stencil?Bi:ri);const ht={colorFormat:e.RGBA8,depthFormat:J,scaleFactor:o};h=new XRWebGLBinding(i,e),u=h.createProjectionLayer(ht),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),w=new sn(u.textureWidth,u.textureHeight,{format:en,type:Tn,depthTexture:new kc(u.textureWidth,u.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(r),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(K){for(let st=0;st<K.removed.length;st++){const yt=K.removed[st],J=_.indexOf(yt);J>=0&&(_[J]=null,S[J].disconnect(yt))}for(let st=0;st<K.added.length;st++){const yt=K.added[st];let J=_.indexOf(yt);if(J===-1){for(let wt=0;wt<S.length;wt++)if(wt>=_.length){_.push(yt),J=wt;break}else if(_[wt]===null){_[wt]=yt,J=wt;break}if(J===-1)break}const ht=S[J];ht&&ht.connect(yt)}}const Y=new L,X=new L;function k(K,st,yt){Y.setFromMatrixPosition(st.matrixWorld),X.setFromMatrixPosition(yt.matrixWorld);const J=Y.distanceTo(X),ht=st.projectionMatrix.elements,wt=yt.projectionMatrix.elements,Lt=ht[14]/(ht[10]-1),Kt=ht[14]/(ht[10]+1),Vt=(ht[9]+1)/ht[5],ae=(ht[9]-1)/ht[5],B=(ht[8]-1)/ht[0],Se=(wt[8]+1)/wt[0],At=Lt*B,ut=Lt*Se,Tt=J/(-B+Se),$t=Tt*-B;if(st.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX($t),K.translateZ(Tt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),ht[10]===-1)K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const Ct=Lt+Tt,E=Kt+Tt,v=At-$t,z=ut+(J-$t),tt=Vt*Kt/E*Ct,it=ae*Kt/E*Ct;K.projectionMatrix.makePerspective(v,z,tt,it,Ct,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function nt(K,st){st===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(st.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let st=K.near,yt=K.far;x.texture!==null&&(x.depthNear>0&&(st=x.depthNear),x.depthFar>0&&(yt=x.depthFar)),y.near=R.near=T.near=st,y.far=R.far=T.far=yt,(P!==y.near||G!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),P=y.near,G=y.far),T.layers.mask=K.layers.mask|2,R.layers.mask=K.layers.mask|4,y.layers.mask=T.layers.mask|R.layers.mask;const J=K.parent,ht=y.cameras;nt(y,J);for(let wt=0;wt<ht.length;wt++)nt(ht[wt],J);ht.length===2?k(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),dt(K,y,J)};function dt(K,st,yt){yt===null?K.matrix.copy(st.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(st.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(st.projectionMatrix),K.projectionMatrixInverse.copy(st.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Yr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let vt=null;function Bt(K,st){if(d=st.getViewerPose(c||a),g=st,d!==null){const yt=d.views;p!==null&&(t.setRenderTargetFramebuffer(w,p.framebuffer),t.setRenderTarget(w));let J=!1;yt.length!==y.cameras.length&&(y.cameras.length=0,J=!0);for(let wt=0;wt<yt.length;wt++){const Lt=yt[wt];let Kt=null;if(p!==null)Kt=p.getViewport(Lt);else{const ae=h.getViewSubImage(u,Lt);Kt=ae.viewport,wt===0&&(t.setRenderTargetTextures(w,ae.colorTexture,u.ignoreDepthValues?void 0:ae.depthStencilTexture),t.setRenderTarget(w))}let Vt=b[wt];Vt===void 0&&(Vt=new De,Vt.layers.enable(wt),Vt.viewport=new ie,b[wt]=Vt),Vt.matrix.fromArray(Lt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Lt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),wt===0&&(y.matrix.copy(Vt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),J===!0&&y.cameras.push(Vt)}const ht=i.enabledFeatures;if(ht&&ht.includes("depth-sensing")){const wt=h.getDepthInformation(yt[0]);wt&&wt.isValid&&wt.texture&&x.init(t,wt,i.renderState)}}for(let yt=0;yt<S.length;yt++){const J=_[yt],ht=S[yt];J!==null&&ht!==void 0&&ht.update(J,st,c||a)}vt&&vt(K,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}const Xt=new Oc;Xt.setAnimationLoop(Bt),this.setAnimationLoop=function(K){vt=K},this.dispose=function(){}}}const Yn=new Ge,sm=new ue;function om(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Bc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,w,S,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),h(m,f)):f.isMeshPhongMaterial?(o(m,f),d(m,f)):f.isMeshStandardMaterial?(o(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(o(m,f),g(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),x(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&r(m,f)):f.isPointsMaterial?l(m,f,w,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Re&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Re&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const w=t.get(f),S=w.envMap,_=w.envMapRotation;S&&(m.envMap.value=S,Yn.copy(_),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),m.envMapRotation.value.setFromMatrix4(sm.makeRotationFromEuler(Yn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function r(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,w,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=S*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function d(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Re&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function rm(s,t,e,n){let i={},o={},a=[];const r=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){const _=S.program;n.uniformBlockBinding(w,_)}function c(w,S){let _=i[w.id];_===void 0&&(g(w),_=d(w),i[w.id]=_,w.addEventListener("dispose",m));const I=S.program;n.updateUBOMapping(w,I);const A=t.render.frame;o[w.id]!==A&&(u(w),o[w.id]=A)}function d(w){const S=h();w.__bindingPointIndex=S;const _=s.createBuffer(),I=w.__size,A=w.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,_),_}function h(){for(let w=0;w<r;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){const S=i[w.id],_=w.uniforms,I=w.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let A=0,T=_.length;A<T;A++){const R=Array.isArray(_[A])?_[A]:[_[A]];for(let b=0,y=R.length;b<y;b++){const P=R[b];if(p(P,A,b,I)===!0){const G=P.__offset,O=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let $=0;$<O.length;$++){const Y=O[$],X=x(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,s.bufferSubData(s.UNIFORM_BUFFER,G+H,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,H),H+=X.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(w,S,_,I){const A=w.value,T=S+"_"+_;if(I[T]===void 0)return typeof A=="number"||typeof A=="boolean"?I[T]=A:I[T]=A.clone(),!0;{const R=I[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return I[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(w){const S=w.uniforms;let _=0;const I=16;for(let T=0,R=S.length;T<R;T++){const b=Array.isArray(S[T])?S[T]:[S[T]];for(let y=0,P=b.length;y<P;y++){const G=b[y],O=Array.isArray(G.value)?G.value:[G.value];for(let H=0,$=O.length;H<$;H++){const Y=O[H],X=x(Y),k=_%I,nt=k%X.boundary,dt=k+nt;_+=nt,dt!==0&&I-dt<X.storage&&(_+=I-dt),G.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=_,_+=X.storage}}}const A=_%I;return A>0&&(_+=I-A),w.__size=_,w.__cache={},this}function x(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){const S=w.target;S.removeEventListener("dispose",m);const _=a.indexOf(S.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete o[S.id]}function f(){for(const w in i)s.deleteBuffer(i[w]);a=[],i={},o={}}return{bind:l,update:c,dispose:f}}class fa{constructor(t={}){const{canvas:e=$d(),context:n=null,depth:i=!0,stencil:o=!1,alpha:a=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const w=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xe,this.toneMapping=On,this.toneMappingExposure=1;const _=this;let I=!1,A=0,T=0,R=null,b=-1,y=null;const P=new ie,G=new ie;let O=null;const H=new Mt(0);let $=0,Y=e.width,X=e.height,k=1,nt=null,dt=null;const vt=new ie(0,0,Y,X),Bt=new ie(0,0,Y,X);let Xt=!1;const K=new da;let st=!1,yt=!1;const J=new ue,ht=new ue,wt=new L,Lt=new ie,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function ae(){return R===null?k:1}let B=n;function Se(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:i,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ta}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),B===null){const U="webgl2";if(B=Se(U,M),B===null)throw Se(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let At,ut,Tt,$t,Ct,E,v,z,tt,it,Z,Rt,ct,gt,jt,ot,xt,It,Ft,_t,qt,Gt,oe,F;function lt(){At=new up(B),At.init(),Gt=new K0(B,At),ut=new rp(B,At,t,Gt),Tt=new j0(B,At),ut.reverseDepthBuffer&&u&&Tt.buffers.depth.setReversed(!0),$t=new mp(B),Ct=new L0,E=new J0(B,At,Tt,Ct,ut,Gt,$t),v=new lp(_),z=new hp(_),tt=new Mh(B),oe=new sp(B,tt),it=new fp(B,tt,$t,oe),Z=new xp(B,it,tt,$t),Ft=new gp(B,ut,E),ot=new ap(Ct),Rt=new D0(_,v,z,At,ut,oe,ot),ct=new om(_,Ct),gt=new B0,jt=new G0(At),It=new ip(_,v,z,Tt,Z,p,l),xt=new q0(_,Z,ut),F=new rm(B,$t,ut,Tt),_t=new op(B,At,$t),qt=new pp(B,At,$t),$t.programs=Rt.programs,_.capabilities=ut,_.extensions=At,_.properties=Ct,_.renderLists=gt,_.shadowMap=xt,_.state=Tt,_.info=$t}lt();const q=new im(_,B);this.xr=q,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const M=At.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=At.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(M){M!==void 0&&(k=M,this.setSize(Y,X,!1))},this.getSize=function(M){return M.set(Y,X)},this.setSize=function(M,U,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=M,X=U,e.width=Math.floor(M*k),e.height=Math.floor(U*k),V===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Y*k,X*k).floor()},this.setDrawingBufferSize=function(M,U,V){Y=M,X=U,k=V,e.width=Math.floor(M*V),e.height=Math.floor(U*V),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(vt)},this.setViewport=function(M,U,V,W){M.isVector4?vt.set(M.x,M.y,M.z,M.w):vt.set(M,U,V,W),Tt.viewport(P.copy(vt).multiplyScalar(k).round())},this.getScissor=function(M){return M.copy(Bt)},this.setScissor=function(M,U,V,W){M.isVector4?Bt.set(M.x,M.y,M.z,M.w):Bt.set(M,U,V,W),Tt.scissor(G.copy(Bt).multiplyScalar(k).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(M){Tt.setScissorTest(Xt=M)},this.setOpaqueSort=function(M){nt=M},this.setTransparentSort=function(M){dt=M},this.getClearColor=function(M){return M.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(M=!0,U=!0,V=!0){let W=0;if(M){let N=!1;if(R!==null){const rt=R.texture.format;N=rt===la||rt===aa||rt===ra}if(N){const rt=R.texture.type,pt=rt===Tn||rt===ri||rt===fs||rt===Bi||rt===sa||rt===oa,bt=It.getClearColor(),St=It.getClearAlpha(),Ut=bt.r,kt=bt.g,Et=bt.b;pt?(g[0]=Ut,g[1]=kt,g[2]=Et,g[3]=St,B.clearBufferuiv(B.COLOR,0,g)):(x[0]=Ut,x[1]=kt,x[2]=Et,x[3]=St,B.clearBufferiv(B.COLOR,0,x))}else W|=B.COLOR_BUFFER_BIT}U&&(W|=B.DEPTH_BUFFER_BIT),V&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),gt.dispose(),jt.dispose(),Ct.dispose(),v.dispose(),z.dispose(),Z.dispose(),oe.dispose(),F.dispose(),Rt.dispose(),q.dispose(),q.removeEventListener("sessionstart",ba),q.removeEventListener("sessionend",Sa),Gn.stop()};function et(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const M=$t.autoReset,U=xt.enabled,V=xt.autoUpdate,W=xt.needsUpdate,N=xt.type;lt(),$t.autoReset=M,xt.enabled=U,xt.autoUpdate=V,xt.needsUpdate=W,xt.type=N}function ft(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ot(M){const U=M.target;U.removeEventListener("dispose",Ot),fe(U)}function fe(M){Ee(M),Ct.remove(M)}function Ee(M){const U=Ct.get(M).programs;U!==void 0&&(U.forEach(function(V){Rt.releaseProgram(V)}),M.isShaderMaterial&&Rt.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,V,W,N,rt){U===null&&(U=Kt);const pt=N.isMesh&&N.matrixWorld.determinant()<0,bt=od(M,U,V,W,N);Tt.setMaterial(W,pt);let St=V.index,Ut=1;if(W.wireframe===!0){if(St=it.getWireframeAttribute(V),St===void 0)return;Ut=2}const kt=V.drawRange,Et=V.attributes.position;let Jt=kt.start*Ut,re=(kt.start+kt.count)*Ut;rt!==null&&(Jt=Math.max(Jt,rt.start*Ut),re=Math.min(re,(rt.start+rt.count)*Ut)),St!==null?(Jt=Math.max(Jt,0),re=Math.min(re,St.count)):Et!=null&&(Jt=Math.max(Jt,0),re=Math.min(re,Et.count));const le=re-Jt;if(le<0||le===1/0)return;oe.setup(N,W,bt,V,St);let Fe,Zt=_t;if(St!==null&&(Fe=tt.get(St),Zt=qt,Zt.setIndex(Fe)),N.isMesh)W.wireframe===!0?(Tt.setLineWidth(W.wireframeLinewidth*ae()),Zt.setMode(B.LINES)):Zt.setMode(B.TRIANGLES);else if(N.isLine){let Pt=W.linewidth;Pt===void 0&&(Pt=1),Tt.setLineWidth(Pt*ae()),N.isLineSegments?Zt.setMode(B.LINES):N.isLineLoop?Zt.setMode(B.LINE_LOOP):Zt.setMode(B.LINE_STRIP)}else N.isPoints?Zt.setMode(B.POINTS):N.isSprite&&Zt.setMode(B.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Zt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))Zt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Pt=N._multiDrawStarts,un=N._multiDrawCounts,Qt=N._multiDrawCount,je=St?tt.get(St).bytesPerElement:1,ci=Ct.get(W).currentProgram.getUniforms();for(let Ne=0;Ne<Qt;Ne++)ci.setValue(B,"_gl_DrawID",Ne),Zt.render(Pt[Ne]/je,un[Ne])}else if(N.isInstancedMesh)Zt.renderInstances(Jt,le,N.count);else if(V.isInstancedBufferGeometry){const Pt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,un=Math.min(V.instanceCount,Pt);Zt.renderInstances(Jt,le,un)}else Zt.render(Jt,le)};function te(M,U,V){M.transparent===!0&&M.side===ze&&M.forceSinglePass===!1?(M.side=Re,M.needsUpdate=!0,Ss(M,U,V),M.side=zn,M.needsUpdate=!0,Ss(M,U,V),M.side=ze):Ss(M,U,V)}this.compile=function(M,U,V=null){V===null&&(V=M),f=jt.get(V),f.init(U),S.push(f),V.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),M!==V&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const W=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const rt=N.material;if(rt)if(Array.isArray(rt))for(let pt=0;pt<rt.length;pt++){const bt=rt[pt];te(bt,V,N),W.add(bt)}else te(rt,V,N),W.add(rt)}),S.pop(),f=null,W},this.compileAsync=function(M,U,V=null){const W=this.compile(M,U,V);return new Promise(N=>{function rt(){if(W.forEach(function(pt){Ct.get(pt).currentProgram.isReady()&&W.delete(pt)}),W.size===0){N(M);return}setTimeout(rt,10)}At.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Ye=null;function hn(M){Ye&&Ye(M)}function ba(){Gn.stop()}function Sa(){Gn.start()}const Gn=new Oc;Gn.setAnimationLoop(hn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(M){Ye=M,q.setAnimationLoop(M),M===null?Gn.stop():Gn.start()},q.addEventListener("sessionstart",ba),q.addEventListener("sessionend",Sa),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(U),U=q.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,U,R),f=jt.get(M,S.length),f.init(U),S.push(f),ht.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),K.setFromProjectionMatrix(ht),yt=this.localClippingEnabled,st=ot.init(this.clippingPlanes,yt),m=gt.get(M,w.length),m.init(),w.push(m),q.enabled===!0&&q.isPresenting===!0){const rt=_.xr.getDepthSensingMesh();rt!==null&&Mo(rt,U,-1/0,_.sortObjects)}Mo(M,U,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(nt,dt),Vt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Vt&&It.addToRenderList(m,M),this.info.render.frame++,st===!0&&ot.beginShadows();const V=f.state.shadowsArray;xt.render(V,M,U),st===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=m.opaque,N=m.transmissive;if(f.setupLights(),U.isArrayCamera){const rt=U.cameras;if(N.length>0)for(let pt=0,bt=rt.length;pt<bt;pt++){const St=rt[pt];Ta(W,N,M,St)}Vt&&It.render(M);for(let pt=0,bt=rt.length;pt<bt;pt++){const St=rt[pt];Ea(m,M,St,St.viewport)}}else N.length>0&&Ta(W,N,M,U),Vt&&It.render(M),Ea(m,M,U);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(_,M,U),oe.resetDefaultState(),b=-1,y=null,S.pop(),S.length>0?(f=S[S.length-1],st===!0&&ot.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Mo(M,U,V,W){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||K.intersectsSprite(M)){W&&Lt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(ht);const pt=Z.update(M),bt=M.material;bt.visible&&m.push(M,pt,bt,V,Lt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||K.intersectsObject(M))){const pt=Z.update(M),bt=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Lt.copy(M.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),Lt.copy(pt.boundingSphere.center)),Lt.applyMatrix4(M.matrixWorld).applyMatrix4(ht)),Array.isArray(bt)){const St=pt.groups;for(let Ut=0,kt=St.length;Ut<kt;Ut++){const Et=St[Ut],Jt=bt[Et.materialIndex];Jt&&Jt.visible&&m.push(M,pt,Jt,V,Lt.z,Et)}}else bt.visible&&m.push(M,pt,bt,V,Lt.z,null)}}const rt=M.children;for(let pt=0,bt=rt.length;pt<bt;pt++)Mo(rt[pt],U,V,W)}function Ea(M,U,V,W){const N=M.opaque,rt=M.transmissive,pt=M.transparent;f.setupLightsView(V),st===!0&&ot.setGlobalState(_.clippingPlanes,V),W&&Tt.viewport(P.copy(W)),N.length>0&&bs(N,U,V),rt.length>0&&bs(rt,U,V),pt.length>0&&bs(pt,U,V),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function Ta(M,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new sn(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?Sn:Tn,minFilter:ii,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const rt=f.state.transmissionRenderTarget[W.id],pt=W.viewport||P;rt.setSize(pt.z,pt.w);const bt=_.getRenderTarget();_.setRenderTarget(rt),_.getClearColor(H),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),Vt&&It.render(V);const St=_.toneMapping;_.toneMapping=On;const Ut=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),st===!0&&ot.setGlobalState(_.clippingPlanes,W),bs(M,V,W),E.updateMultisampleRenderTarget(rt),E.updateRenderTargetMipmap(rt),At.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Et=0,Jt=U.length;Et<Jt;Et++){const re=U[Et],le=re.object,Fe=re.geometry,Zt=re.material,Pt=re.group;if(Zt.side===ze&&le.layers.test(W.layers)){const un=Zt.side;Zt.side=Re,Zt.needsUpdate=!0,Aa(le,V,W,Fe,Zt,Pt),Zt.side=un,Zt.needsUpdate=!0,kt=!0}}kt===!0&&(E.updateMultisampleRenderTarget(rt),E.updateRenderTargetMipmap(rt))}_.setRenderTarget(bt),_.setClearColor(H,$),Ut!==void 0&&(W.viewport=Ut),_.toneMapping=St}function bs(M,U,V){const W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,rt=M.length;N<rt;N++){const pt=M[N],bt=pt.object,St=pt.geometry,Ut=W===null?pt.material:W,kt=pt.group;bt.layers.test(V.layers)&&Aa(bt,U,V,St,Ut,kt)}}function Aa(M,U,V,W,N,rt){M.onBeforeRender(_,U,V,W,N,rt),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(_,U,V,W,M,rt),N.transparent===!0&&N.side===ze&&N.forceSinglePass===!1?(N.side=Re,N.needsUpdate=!0,_.renderBufferDirect(V,U,W,N,M,rt),N.side=zn,N.needsUpdate=!0,_.renderBufferDirect(V,U,W,N,M,rt),N.side=ze):_.renderBufferDirect(V,U,W,N,M,rt),M.onAfterRender(_,U,V,W,N,rt)}function Ss(M,U,V){U.isScene!==!0&&(U=Kt);const W=Ct.get(M),N=f.state.lights,rt=f.state.shadowsArray,pt=N.state.version,bt=Rt.getParameters(M,N.state,rt,U,V),St=Rt.getProgramCacheKey(bt);let Ut=W.programs;W.environment=M.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(M.isMeshStandardMaterial?z:v).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ut===void 0&&(M.addEventListener("dispose",Ot),Ut=new Map,W.programs=Ut);let kt=Ut.get(St);if(kt!==void 0){if(W.currentProgram===kt&&W.lightsStateVersion===pt)return Ra(M,bt),kt}else bt.uniforms=Rt.getUniforms(M),M.onBeforeCompile(bt,_),kt=Rt.acquireProgram(bt,St),Ut.set(St,kt),W.uniforms=bt.uniforms;const Et=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Et.clippingPlanes=ot.uniform),Ra(M,bt),W.needsLights=ad(M),W.lightsStateVersion=pt,W.needsLights&&(Et.ambientLightColor.value=N.state.ambient,Et.lightProbe.value=N.state.probe,Et.directionalLights.value=N.state.directional,Et.directionalLightShadows.value=N.state.directionalShadow,Et.spotLights.value=N.state.spot,Et.spotLightShadows.value=N.state.spotShadow,Et.rectAreaLights.value=N.state.rectArea,Et.ltc_1.value=N.state.rectAreaLTC1,Et.ltc_2.value=N.state.rectAreaLTC2,Et.pointLights.value=N.state.point,Et.pointLightShadows.value=N.state.pointShadow,Et.hemisphereLights.value=N.state.hemi,Et.directionalShadowMap.value=N.state.directionalShadowMap,Et.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Et.spotShadowMap.value=N.state.spotShadowMap,Et.spotLightMatrix.value=N.state.spotLightMatrix,Et.spotLightMap.value=N.state.spotLightMap,Et.pointShadowMap.value=N.state.pointShadowMap,Et.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=kt,W.uniformsList=null,kt}function Ca(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=eo.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Ra(M,U){const V=Ct.get(M);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function od(M,U,V,W,N){U.isScene!==!0&&(U=Kt),E.resetTextureUnits();const rt=U.fog,pt=W.isMeshStandardMaterial?U.environment:null,bt=R===null?_.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:zi,St=(W.isMeshStandardMaterial?z:v).get(W.envMap||pt),Ut=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,kt=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Et=!!V.morphAttributes.position,Jt=!!V.morphAttributes.normal,re=!!V.morphAttributes.color;let le=On;W.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(le=_.toneMapping);const Fe=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Zt=Fe!==void 0?Fe.length:0,Pt=Ct.get(W),un=f.state.lights;if(st===!0&&(yt===!0||M!==y)){const Ve=M===y&&W.id===b;ot.setState(W,M,Ve)}let Qt=!1;W.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==un.state.version||Pt.outputColorSpace!==bt||N.isBatchedMesh&&Pt.batching===!1||!N.isBatchedMesh&&Pt.batching===!0||N.isBatchedMesh&&Pt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Pt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Pt.instancing===!1||!N.isInstancedMesh&&Pt.instancing===!0||N.isSkinnedMesh&&Pt.skinning===!1||!N.isSkinnedMesh&&Pt.skinning===!0||N.isInstancedMesh&&Pt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Pt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Pt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Pt.instancingMorph===!1&&N.morphTexture!==null||Pt.envMap!==St||W.fog===!0&&Pt.fog!==rt||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==ot.numPlanes||Pt.numIntersection!==ot.numIntersection)||Pt.vertexAlphas!==Ut||Pt.vertexTangents!==kt||Pt.morphTargets!==Et||Pt.morphNormals!==Jt||Pt.morphColors!==re||Pt.toneMapping!==le||Pt.morphTargetsCount!==Zt)&&(Qt=!0):(Qt=!0,Pt.__version=W.version);let je=Pt.currentProgram;Qt===!0&&(je=Ss(W,U,N));let ci=!1,Ne=!1,Yi=!1;const ce=je.getUniforms(),rn=Pt.uniforms;if(Tt.useProgram(je.program)&&(ci=!0,Ne=!0,Yi=!0),W.id!==b&&(b=W.id,Ne=!0),ci||y!==M){Tt.buffers.depth.getReversed()?(J.copy(M.projectionMatrix),Kd(J),Zd(J),ce.setValue(B,"projectionMatrix",J)):ce.setValue(B,"projectionMatrix",M.projectionMatrix),ce.setValue(B,"viewMatrix",M.matrixWorldInverse);const Cn=ce.map.cameraPosition;Cn!==void 0&&Cn.setValue(B,wt.setFromMatrixPosition(M.matrixWorld)),ut.logarithmicDepthBuffer&&ce.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ce.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Ne=!0,Yi=!0)}if(N.isSkinnedMesh){ce.setOptional(B,N,"bindMatrix"),ce.setOptional(B,N,"bindMatrixInverse");const Ve=N.skeleton;Ve&&(Ve.boneTexture===null&&Ve.computeBoneTexture(),ce.setValue(B,"boneTexture",Ve.boneTexture,E))}N.isBatchedMesh&&(ce.setOptional(B,N,"batchingTexture"),ce.setValue(B,"batchingTexture",N._matricesTexture,E),ce.setOptional(B,N,"batchingIdTexture"),ce.setValue(B,"batchingIdTexture",N._indirectTexture,E),ce.setOptional(B,N,"batchingColorTexture"),N._colorsTexture!==null&&ce.setValue(B,"batchingColorTexture",N._colorsTexture,E));const ji=V.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Ft.update(N,V,je),(Ne||Pt.receiveShadow!==N.receiveShadow)&&(Pt.receiveShadow=N.receiveShadow,ce.setValue(B,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(rn.envMap.value=St,rn.flipEnvMap.value=St.isCubeTexture&&St.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(rn.envMapIntensity.value=U.environmentIntensity),Ne&&(ce.setValue(B,"toneMappingExposure",_.toneMappingExposure),Pt.needsLights&&rd(rn,Yi),rt&&W.fog===!0&&ct.refreshFogUniforms(rn,rt),ct.refreshMaterialUniforms(rn,W,k,X,f.state.transmissionRenderTarget[M.id]),eo.upload(B,Ca(Pt),rn,E)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(eo.upload(B,Ca(Pt),rn,E),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ce.setValue(B,"center",N.center),ce.setValue(B,"modelViewMatrix",N.modelViewMatrix),ce.setValue(B,"normalMatrix",N.normalMatrix),ce.setValue(B,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ve=W.uniformsGroups;for(let Cn=0,Rn=Ve.length;Cn<Rn;Cn++){const Pa=Ve[Cn];F.update(Pa,je),F.bind(Pa,je)}}return je}function rd(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function ad(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,U,V){Ct.get(M.texture).__webglTexture=U,Ct.get(M.depthTexture).__webglTexture=V;const W=Ct.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const V=Ct.get(M);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,V=0){R=M,A=U,T=V;let W=!0,N=null,rt=!1,pt=!1;if(M){const St=Ct.get(M);if(St.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(B.FRAMEBUFFER,null),W=!1;else if(St.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(St.__hasExternalTextures)E.rebindTextures(M,Ct.get(M.texture).__webglTexture,Ct.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Et=M.depthTexture;if(St.__boundDepthTexture!==Et){if(Et!==null&&Ct.has(Et)&&(M.width!==Et.image.width||M.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const Ut=M.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(pt=!0);const kt=Ct.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(kt[U])?N=kt[U][V]:N=kt[U],rt=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?N=Ct.get(M).__webglMultisampledFramebuffer:Array.isArray(kt)?N=kt[V]:N=kt,P.copy(M.viewport),G.copy(M.scissor),O=M.scissorTest}else P.copy(vt).multiplyScalar(k).floor(),G.copy(Bt).multiplyScalar(k).floor(),O=Xt;if(Tt.bindFramebuffer(B.FRAMEBUFFER,N)&&W&&Tt.drawBuffers(M,N),Tt.viewport(P),Tt.scissor(G),Tt.setScissorTest(O),rt){const St=Ct.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,St.__webglTexture,V)}else if(pt){const St=Ct.get(M.texture),Ut=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,St.__webglTexture,V||0,Ut)}b=-1},this.readRenderTargetPixels=function(M,U,V,W,N,rt,pt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ct.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pt!==void 0&&(bt=bt[pt]),bt){Tt.bindFramebuffer(B.FRAMEBUFFER,bt);try{const St=M.texture,Ut=St.format,kt=St.type;if(!ut.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-W&&V>=0&&V<=M.height-N&&B.readPixels(U,V,W,N,Gt.convert(Ut),Gt.convert(kt),rt)}finally{const St=R!==null?Ct.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(B.FRAMEBUFFER,St)}}},this.readRenderTargetPixelsAsync=async function(M,U,V,W,N,rt,pt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ct.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&pt!==void 0&&(bt=bt[pt]),bt){const St=M.texture,Ut=St.format,kt=St.type;if(!ut.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-W&&V>=0&&V<=M.height-N){Tt.bindFramebuffer(B.FRAMEBUFFER,bt);const Et=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Et),B.bufferData(B.PIXEL_PACK_BUFFER,rt.byteLength,B.STREAM_READ),B.readPixels(U,V,W,N,Gt.convert(Ut),Gt.convert(kt),0);const Jt=R!==null?Ct.get(R).__webglFramebuffer:null;Tt.bindFramebuffer(B.FRAMEBUFFER,Jt);const re=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await Jd(B,re,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Et),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,rt),B.deleteBuffer(Et),B.deleteSync(re),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,V=0){M.isTexture!==!0&&(as("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const W=Math.pow(2,-V),N=Math.floor(M.image.width*W),rt=Math.floor(M.image.height*W),pt=U!==null?U.x:0,bt=U!==null?U.y:0;E.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,V,0,0,pt,bt,N,rt),Tt.unbindTexture()},this.copyTextureToTexture=function(M,U,V=null,W=null,N=0){M.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,M=arguments[1],U=arguments[2],N=arguments[3]||0,V=null);let rt,pt,bt,St,Ut,kt,Et,Jt,re;const le=M.isCompressedTexture?M.mipmaps[N]:M.image;V!==null?(rt=V.max.x-V.min.x,pt=V.max.y-V.min.y,bt=V.isBox3?V.max.z-V.min.z:1,St=V.min.x,Ut=V.min.y,kt=V.isBox3?V.min.z:0):(rt=le.width,pt=le.height,bt=le.depth||1,St=0,Ut=0,kt=0),W!==null?(Et=W.x,Jt=W.y,re=W.z):(Et=0,Jt=0,re=0);const Fe=Gt.convert(U.format),Zt=Gt.convert(U.type);let Pt;U.isData3DTexture?(E.setTexture3D(U,0),Pt=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(E.setTexture2DArray(U,0),Pt=B.TEXTURE_2D_ARRAY):(E.setTexture2D(U,0),Pt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);const un=B.getParameter(B.UNPACK_ROW_LENGTH),Qt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),je=B.getParameter(B.UNPACK_SKIP_PIXELS),ci=B.getParameter(B.UNPACK_SKIP_ROWS),Ne=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,le.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,le.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,St),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ut),B.pixelStorei(B.UNPACK_SKIP_IMAGES,kt);const Yi=M.isDataArrayTexture||M.isData3DTexture,ce=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const rn=Ct.get(M),ji=Ct.get(U),Ve=Ct.get(rn.__renderTarget),Cn=Ct.get(ji.__renderTarget);Tt.bindFramebuffer(B.READ_FRAMEBUFFER,Ve.__webglFramebuffer),Tt.bindFramebuffer(B.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Rn=0;Rn<bt;Rn++)Yi&&B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(M).__webglTexture,N,kt+Rn),M.isDepthTexture?(ce&&B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ct.get(U).__webglTexture,N,re+Rn),B.blitFramebuffer(St,Ut,rt,pt,Et,Jt,rt,pt,B.DEPTH_BUFFER_BIT,B.NEAREST)):ce?B.copyTexSubImage3D(Pt,N,Et,Jt,re+Rn,St,Ut,rt,pt):B.copyTexSubImage2D(Pt,N,Et,Jt,re+Rn,St,Ut,rt,pt);Tt.bindFramebuffer(B.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ce?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(Pt,N,Et,Jt,re,rt,pt,bt,Fe,Zt,le.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(Pt,N,Et,Jt,re,rt,pt,bt,Fe,le.data):B.texSubImage3D(Pt,N,Et,Jt,re,rt,pt,bt,Fe,Zt,le):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,N,Et,Jt,rt,pt,Fe,Zt,le.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,N,Et,Jt,le.width,le.height,Fe,le.data):B.texSubImage2D(B.TEXTURE_2D,N,Et,Jt,rt,pt,Fe,Zt,le);B.pixelStorei(B.UNPACK_ROW_LENGTH,un),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,je),B.pixelStorei(B.UNPACK_SKIP_ROWS,ci),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ne),N===0&&U.generateMipmaps&&B.generateMipmap(Pt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(M,U,V=null,W=null,N=0){return M.isTexture!==!0&&(as("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,M=arguments[2],U=arguments[3],N=arguments[4]||0),as('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,V,W,N)},this.initRenderTarget=function(M){Ct.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),Tt.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,Tt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class _o{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(t),this.density=e}clone(){return new _o(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class pa extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ze extends _e{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Wc extends Hi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const lo=new L,co=new L,Cl=new ue,ts=new Pc,qs=new go,Qo=new L,Rl=new L;class am extends _e{constructor(t=new Pe,e=new Wc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,o=e.count;i<o;i++)lo.fromBufferAttribute(e,i-1),co.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=lo.distanceTo(co);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,o=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(i),qs.radius+=o,t.ray.intersectsSphere(qs)===!1)return;Cl.copy(i).invert(),ts.copy(t.ray).applyMatrix4(Cl);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=this.isLineSegments?2:1,d=n.index,u=n.attributes.position;if(d!==null){const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const f=d.getX(x),w=d.getX(x+1),S=Ys(this,t,ts,l,f,w);S&&e.push(S)}if(this.isLineLoop){const x=d.getX(g-1),m=d.getX(p),f=Ys(this,t,ts,l,x,m);f&&e.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const f=Ys(this,t,ts,l,x,x+1);f&&e.push(f)}if(this.isLineLoop){const x=Ys(this,t,ts,l,g-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=i.length;o<a;o++){const r=i[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function Ys(s,t,e,n,i,o){const a=s.geometry.attributes.position;if(lo.fromBufferAttribute(a,i),co.fromBufferAttribute(a,o),e.distanceSqToSegment(lo,co,Qo,Rl)>n)return;Qo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Qo);if(!(l<t.near||l>t.far))return{distance:l,point:Rl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}class vs extends Le{constructor(t,e,n,i,o,a,r,l,c){super(t,e,n,i,o,a,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ma extends Pe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const o=[],a=[],r=[],l=[],c=new L,d=new Dt;a.push(0,0,0),r.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){const p=n+h/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),a.push(c.x,c.y,c.z),r.push(0,0,1),d.x=(a[u]/t+1)/2,d.y=(a[u+1]/t+1)/2,l.push(d.x,d.y)}for(let h=1;h<=e;h++)o.push(h,h+1,0);this.setIndex(o),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(r,3)),this.setAttribute("uv",new se(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Wt extends Pe{constructor(t=1,e=1,n=1,i=32,o=1,a=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:o,openEnded:a,thetaStart:r,thetaLength:l};const c=this;i=Math.floor(i),o=Math.floor(o);const d=[],h=[],u=[],p=[];let g=0;const x=[],m=n/2;let f=0;w(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(d),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(u,3)),this.setAttribute("uv",new se(p,2));function w(){const _=new L,I=new L;let A=0;const T=(e-t)/n;for(let R=0;R<=o;R++){const b=[],y=R/o,P=y*(e-t)+t;for(let G=0;G<=i;G++){const O=G/i,H=O*l+r,$=Math.sin(H),Y=Math.cos(H);I.x=P*$,I.y=-y*n+m,I.z=P*Y,h.push(I.x,I.y,I.z),_.set($,T,Y).normalize(),u.push(_.x,_.y,_.z),p.push(O,1-y),b.push(g++)}x.push(b)}for(let R=0;R<i;R++)for(let b=0;b<o;b++){const y=x[b][R],P=x[b+1][R],G=x[b+1][R+1],O=x[b][R+1];(t>0||b!==0)&&(d.push(y,P,O),A+=3),(e>0||b!==o-1)&&(d.push(P,G,O),A+=3)}c.addGroup(f,A,0),f+=A}function S(_){const I=g,A=new Dt,T=new L;let R=0;const b=_===!0?t:e,y=_===!0?1:-1;for(let G=1;G<=i;G++)h.push(0,m*y,0),u.push(0,y,0),p.push(.5,.5),g++;const P=g;for(let G=0;G<=i;G++){const H=G/i*l+r,$=Math.cos(H),Y=Math.sin(H);T.x=b*Y,T.y=m*y,T.z=b*$,h.push(T.x,T.y,T.z),u.push(0,y,0),A.x=$*.5+.5,A.y=Y*.5*y+.5,p.push(A.x,A.y),g++}for(let G=0;G<i;G++){const O=I+G,H=P+G;_===!0?d.push(H,H+1,O):d.push(H+1,H,O),R+=3}c.addGroup(f,R,_===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nn extends Wt{constructor(t=1,e=1,n=32,i=1,o=!1,a=0,r=Math.PI*2){super(0,t,e,n,i,o,a,r),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:o,thetaStart:a,thetaLength:r}}static fromJSON(t){return new Nn(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ga extends Pe{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const o=[],a=[];r(i),c(n),d(),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(o.slice(),3)),this.setAttribute("uv",new se(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function r(w){const S=new L,_=new L,I=new L;for(let A=0;A<e.length;A+=3)p(e[A+0],S),p(e[A+1],_),p(e[A+2],I),l(S,_,I,w)}function l(w,S,_,I){const A=I+1,T=[];for(let R=0;R<=A;R++){T[R]=[];const b=w.clone().lerp(_,R/A),y=S.clone().lerp(_,R/A),P=A-R;for(let G=0;G<=P;G++)G===0&&R===A?T[R][G]=b:T[R][G]=b.clone().lerp(y,G/P)}for(let R=0;R<A;R++)for(let b=0;b<2*(A-R)-1;b++){const y=Math.floor(b/2);b%2===0?(u(T[R][y+1]),u(T[R+1][y]),u(T[R][y])):(u(T[R][y+1]),u(T[R+1][y+1]),u(T[R+1][y]))}}function c(w){const S=new L;for(let _=0;_<o.length;_+=3)S.x=o[_+0],S.y=o[_+1],S.z=o[_+2],S.normalize().multiplyScalar(w),o[_+0]=S.x,o[_+1]=S.y,o[_+2]=S.z}function d(){const w=new L;for(let S=0;S<o.length;S+=3){w.x=o[S+0],w.y=o[S+1],w.z=o[S+2];const _=m(w)/2/Math.PI+.5,I=f(w)/Math.PI+.5;a.push(_,1-I)}g(),h()}function h(){for(let w=0;w<a.length;w+=6){const S=a[w+0],_=a[w+2],I=a[w+4],A=Math.max(S,_,I),T=Math.min(S,_,I);A>.9&&T<.1&&(S<.2&&(a[w+0]+=1),_<.2&&(a[w+2]+=1),I<.2&&(a[w+4]+=1))}}function u(w){o.push(w.x,w.y,w.z)}function p(w,S){const _=w*3;S.x=t[_+0],S.y=t[_+1],S.z=t[_+2]}function g(){const w=new L,S=new L,_=new L,I=new L,A=new Dt,T=new Dt,R=new Dt;for(let b=0,y=0;b<o.length;b+=9,y+=6){w.set(o[b+0],o[b+1],o[b+2]),S.set(o[b+3],o[b+4],o[b+5]),_.set(o[b+6],o[b+7],o[b+8]),A.set(a[y+0],a[y+1]),T.set(a[y+2],a[y+3]),R.set(a[y+4],a[y+5]),I.copy(w).add(S).add(_).divideScalar(3);const P=m(I);x(A,y+0,w,P),x(T,y+2,S,P),x(R,y+4,_,P)}}function x(w,S,_,I){I<0&&w.x===1&&(a[S]=w.x-1),_.x===0&&_.z===0&&(a[S]=I/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ga(t.vertices,t.indices,t.radius,t.details)}}class xa extends ga{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new xa(t.radius,t.detail)}}class li extends Pe{constructor(t=.5,e=1,n=32,i=1,o=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:o,thetaLength:a},n=Math.max(3,n),i=Math.max(1,i);const r=[],l=[],c=[],d=[];let h=t;const u=(e-t)/i,p=new L,g=new Dt;for(let x=0;x<=i;x++){for(let m=0;m<=n;m++){const f=o+m/n*a;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,d.push(g.x,g.y)}h+=u}for(let x=0;x<i;x++){const m=x*(n+1);for(let f=0;f<n;f++){const w=f+m,S=w,_=w+n+1,I=w+n+2,A=w+1;r.push(S,_,A),r.push(_,I,A)}}this.setIndex(r),this.setAttribute("position",new se(l,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class he extends Pe{constructor(t=1,e=32,n=16,i=0,o=Math.PI*2,a=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:o,thetaStart:a,thetaLength:r},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+r,Math.PI);let c=0;const d=[],h=new L,u=new L,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){const w=[],S=f/n;let _=0;f===0&&a===0?_=.5/e:f===n&&l===Math.PI&&(_=-.5/e);for(let I=0;I<=e;I++){const A=I/e;h.x=-t*Math.cos(i+A*o)*Math.sin(a+S*r),h.y=t*Math.cos(a+S*r),h.z=t*Math.sin(i+A*o)*Math.sin(a+S*r),g.push(h.x,h.y,h.z),u.copy(h).normalize(),x.push(u.x,u.y,u.z),m.push(A+_,1-S),w.push(c++)}d.push(w)}for(let f=0;f<n;f++)for(let w=0;w<e;w++){const S=d[f][w+1],_=d[f][w],I=d[f+1][w],A=d[f+1][w+1];(f!==0||a>0)&&p.push(S,_,A),(f!==n-1||l<Math.PI)&&p.push(_,I,A)}this.setIndex(p),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(x,3)),this.setAttribute("uv",new se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new he(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class vo extends Pe{constructor(t=1,e=.4,n=12,i=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:o},n=Math.floor(n),i=Math.floor(i);const a=[],r=[],l=[],c=[],d=new L,h=new L,u=new L;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const x=g/i*o,m=p/n*Math.PI*2;h.x=(t+e*Math.cos(m))*Math.cos(x),h.y=(t+e*Math.cos(m))*Math.sin(x),h.z=e*Math.sin(m),r.push(h.x,h.y,h.z),d.x=t*Math.cos(x),d.y=t*Math.sin(x),u.subVectors(h,d).normalize(),l.push(u.x,u.y,u.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const x=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,w=(i+1)*p+g;a.push(x,m,w),a.push(m,f,w)}this.setIndex(a),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vo(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class lm extends Ce{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class j extends Hi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=ea,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function js(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function cm(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function dm(s){function t(i,o){return s[i]-s[o]}const e=s.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Pl(s,t,e){const n=s.length,i=new s.constructor(n);for(let o=0,a=0;a!==n;++o){const r=e[o]*t;for(let l=0;l!==t;++l)i[a++]=s[r+l]}return i}function Xc(s,t,e,n){let i=1,o=s[0];for(;o!==void 0&&o[n]===void 0;)o=s[i++];if(o===void 0)return;let a=o[n];if(a!==void 0)if(Array.isArray(a))do a=o[n],a!==void 0&&(t.push(o.time),e.push.apply(e,a)),o=s[i++];while(o!==void 0);else if(a.toArray!==void 0)do a=o[n],a!==void 0&&(t.push(o.time),a.toArray(e,e.length)),o=s[i++];while(o!==void 0);else do a=o[n],a!==void 0&&(t.push(o.time),e.push(a)),o=s[i++];while(o!==void 0)}class yo{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],o=e[n-1];t:{e:{let a;n:{i:if(!(t<i)){for(let r=n+2;;){if(i===void 0){if(t<o)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===r)break;if(o=i,i=e[++n],t<i)break e}a=e.length;break n}if(!(t>=o)){const r=e[1];t<r&&(n=2,o=r);for(let l=n-2;;){if(o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=o,o=e[--n-1],t>=o)break e}a=n,n=0;break n}break t}for(;n<a;){const r=n+a>>>1;t<e[r]?a=r:n=r+1}if(i=e[n],o=e[n-1],o===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,o,i)}return this.interpolate_(n,o,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,o=t*i;for(let a=0;a!==i;++a)e[a]=n[o+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hm extends yo{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ei,endingEnd:Ei}}intervalChanged_(t,e,n){const i=this.parameterPositions;let o=t-2,a=t+1,r=i[o],l=i[a];if(r===void 0)switch(this.getSettings_().endingStart){case Ti:o=t,r=2*e-n;break;case oo:o=i.length-2,r=e+i[o]-i[o+1];break;default:o=t,r=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ti:a=t,l=2*n-e;break;case oo:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,d=this.valueSize;this._weightPrev=c/(e-r),this._weightNext=c/(l-n),this._offsetPrev=o*d,this._offsetNext=a*d}interpolate_(t,e,n,i){const o=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,d=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,f=-u*m+2*u*x-u*g,w=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,S=(-1-p)*m+(1.5+p)*x+.5*g,_=p*m-p*x;for(let I=0;I!==r;++I)o[I]=f*a[d+I]+w*a[c+I]+S*a[l+I]+_*a[h+I];return o}}class qc extends yo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const o=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=t*r,c=l-r,d=(n-e)/(i-e),h=1-d;for(let u=0;u!==r;++u)o[u]=a[c+u]*h+a[l+u]*d;return o}}class um extends yo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class dn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=js(e,this.TimeBufferType),this.values=js(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:js(t.times,Array),values:js(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new um(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hm(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case so:e=this.InterpolantFactoryMethodDiscrete;break;case qr:e=this.InterpolantFactoryMethodLinear;break;case bo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return so;case this.InterpolantFactoryMethodLinear:return qr;case this.InterpolantFactoryMethodSmooth:return bo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let o=0,a=i-1;for(;o!==i&&n[o]<t;)++o;for(;a!==-1&&n[a]>e;)--a;if(++a,o!==0||a!==i){o>=a&&(a=Math.max(a,1),o=a-1);const r=this.getValueSize();this.times=n.slice(o,a),this.values=this.values.slice(o*r,a*r)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,o=n.length;o===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let r=0;r!==o;r++){const l=n[r];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,l,a),t=!1;break}a=l}if(i!==void 0&&cm(i))for(let r=0,l=i.length;r!==l;++r){const c=i[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bo,o=t.length-1;let a=1;for(let r=1;r<o;++r){let l=!1;const c=t[r],d=t[r+1];if(c!==d&&(r!==1||c!==t[0]))if(i)l=!0;else{const h=r*n,u=h-n,p=h+n;for(let g=0;g!==n;++g){const x=e[h+g];if(x!==e[u+g]||x!==e[p+g]){l=!0;break}}}if(l){if(r!==a){t[a]=t[r];const h=r*n,u=a*n;for(let p=0;p!==n;++p)e[u+p]=e[h+p]}++a}}if(o>0){t[a]=t[o];for(let r=o*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[r+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=qr;class Wi extends dn{constructor(t,e,n){super(t,e,n)}}Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=so;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Yc extends dn{}Yc.prototype.ValueTypeName="color";class ho extends dn{}ho.prototype.ValueTypeName="number";class fm extends yo{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const o=this.resultBuffer,a=this.sampleValues,r=this.valueSize,l=(n-e)/(i-e);let c=t*r;for(let d=c+r;c!==d;c+=4)qe.slerpFlat(o,0,a,c-r,a,c,l);return o}}class pe extends dn{InterpolantFactoryMethodLinear(t){return new fm(this.times,this.values,this.getValueSize(),t)}}pe.prototype.ValueTypeName="quaternion";pe.prototype.InterpolantFactoryMethodSmooth=void 0;class Xi extends dn{constructor(t,e,n){super(t,e,n)}}Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=so;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;class si extends dn{}si.prototype.ValueTypeName="vector";class cs{constructor(t="",e=-1,n=[],i=ca){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=Gi(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,r=n.length;a!==r;++a)e.push(mm(n[a]).scale(i));const o=new this(t.name,t.duration,e,t.blendMode);return o.uuid=t.uuid,o}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let o=0,a=n.length;o!==a;++o)e.push(dn.toJSON(n[o]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const o=e.length,a=[];for(let r=0;r<o;r++){let l=[],c=[];l.push((r+o-1)%o,r,(r+1)%o),c.push(0,1,0);const d=dm(l);l=Pl(l,1,d),c=Pl(c,1,d),!i&&l[0]===0&&(l.push(o),c.push(c[0])),a.push(new ho(".morphTargetInfluences["+e[r].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},o=/^([\w-]*?)([\d]+)$/;for(let r=0,l=t.length;r<l;r++){const c=t[r],d=c.name.match(o);if(d&&d.length>1){const h=d[1];let u=i[h];u||(i[h]=u=[]),u.push(c)}}const a=[];for(const r in i)a.push(this.CreateFromMorphTargetSequence(r,i[r],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,u,p,g,x){if(p.length!==0){const m=[],f=[];Xc(p,m,f,g),m.length!==0&&x.push(new h(u,m,f))}},i=[],o=t.name||"default",a=t.fps||30,r=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let h=0;h<c.length;h++){const u=c[h].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let x=0;x<u[g].morphTargets.length;x++)p[u[g].morphTargets[x]]=-1;for(const x in p){const m=[],f=[];for(let w=0;w!==u[g].morphTargets.length;++w){const S=u[g];m.push(S.time),f.push(S.morphTarget===x?1:0)}i.push(new ho(".morphTargetInfluence["+x+"]",m,f))}l=p.length*a}else{const p=".bones["+e[h].name+"]";n(si,p+".position",u,"pos",i),n(pe,p+".quaternion",u,"rot",i),n(si,p+".scale",u,"scl",i)}}return i.length===0?null:new this(o,l,i,r)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const o=this.tracks[n];e=Math.max(e,o.times[o.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function pm(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ho;case"vector":case"vector2":case"vector3":case"vector4":return si;case"color":return Yc;case"quaternion":return pe;case"bool":case"boolean":return Wi;case"string":return Xi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function mm(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=pm(s.type);if(s.times===void 0){const e=[],n=[];Xc(s.keys,e,n,"value"),s.times=e,s.values=n}return t.parse!==void 0?t.parse(s):new t(s.name,s.times,s.values,s.interpolation)}class ys extends _e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class gm extends ys{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const tr=new ue,Il=new L,Dl=new L;class jc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Il.setFromMatrixPosition(t.matrixWorld),e.position.copy(Il),Dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dl),e.updateMatrixWorld(),tr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(tr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ll=new ue,es=new L,er=new L;class xm extends jc{constructor(){super(new De(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new ie(2,1,1,1),new ie(0,1,1,1),new ie(3,1,1,1),new ie(1,1,1,1),new ie(3,0,1,1),new ie(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),es.setFromMatrixPosition(t.matrixWorld),n.position.copy(es),er.copy(n.position),er.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(er),n.updateMatrixWorld(),i.makeTranslation(-es.x,-es.y,-es.z),Ll.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ll)}}class _m extends ys{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xm}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class vm extends jc{constructor(){super(new ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oi extends ys{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_e.DEFAULT_UP),this.updateMatrix(),this.target=new _e,this.shadow=new vm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _a extends ys{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class ym{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Fl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Fl(){return performance.now()}class Mm{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,o,a;switch(e){case"quaternion":i=this._slerp,o=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,o=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,o=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=o,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,o=t*i+i;let a=this.cumulativeWeight;if(a===0){for(let r=0;r!==i;++r)n[o+r]=n[r];a=e}else{a+=e;const r=e/a;this._mixBufferRegion(n,o,0,r,i)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,o=this.cumulativeWeight,a=this.cumulativeWeightAdditive,r=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,o<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-o,e)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){r.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let o=n,a=i;o!==a;++o)e[o]=e[i+o%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,o){if(i>=.5)for(let a=0;a!==o;++a)t[e+a]=t[n+a]}_slerp(t,e,n,i){qe.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,o){const a=this._workIndex*o;qe.multiplyQuaternionsFlat(t,a,t,e,t,n),qe.slerpFlat(t,e,t,e,t,a,i)}_lerp(t,e,n,i,o){const a=1-i;for(let r=0;r!==o;++r){const l=e+r;t[l]=t[l]*a+t[n+r]*i}}_lerpAdditive(t,e,n,i,o){for(let a=0;a!==o;++a){const r=e+a;t[r]=t[r]+t[n+a]*i}}}const va="\\[\\]\\.:\\/",wm=new RegExp("["+va+"]","g"),ya="[^"+va+"]",bm="[^"+va.replace("\\.","")+"]",Sm=/((?:WC+[\/:])*)/.source.replace("WC",ya),Em=/(WCOD+)?/.source.replace("WCOD",bm),Tm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ya),Am=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ya),Cm=new RegExp("^"+Sm+Em+Tm+Am+"$"),Rm=["material","materials","bones","map"];class Pm{constructor(t,e,n){const i=n||ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,o=n.length;i!==o;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class ne{constructor(t,e,n){this.path=e,this.parsedPath=n||ne.parseTrackName(e),this.node=ne.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new ne.Composite(t,e,n):new ne(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(wm,"")}static parseTrackName(t){const e=Cm.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const o=n.nodeName.substring(i+1);Rm.indexOf(o)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=o)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(o){for(let a=0;a<o.length;a++){const r=o[a];if(r.name===e||r.uuid===e)return r;const l=n(r.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,o=n.length;i!==o;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let o=e.propertyIndex;if(t||(t=ne.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===c){c=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let r=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ne.Composite=Pm;ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ne.prototype.GetterByBindingType=[ne.prototype._getValue_direct,ne.prototype._getValue_array,ne.prototype._getValue_arrayElement,ne.prototype._getValue_toArray];ne.prototype.SetterByBindingTypeAndVersioning=[[ne.prototype._setValue_direct,ne.prototype._setValue_direct_setNeedsUpdate,ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_array,ne.prototype._setValue_array_setNeedsUpdate,ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_arrayElement,ne.prototype._setValue_arrayElement_setNeedsUpdate,ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ne.prototype._setValue_fromArray,ne.prototype._setValue_fromArray_setNeedsUpdate,ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Im{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const o=e.tracks,a=o.length,r=new Array(a),l={endingStart:Ei,endingEnd:Ei};for(let c=0;c!==a;++c){const d=o[c].createInterpolant(null);r[c]=d,d.settings=l}this._interpolantSettings=l,this._interpolants=r,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Bd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,o=t._clip.duration,a=o/i,r=i/o;t.warp(1,a,e),this.warp(r,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,o=i.time,a=this.timeScale;let r=this._timeScaleInterpolant;r===null&&(r=i._lendControlInterpolant(),this._timeScaleInterpolant=r);const l=r.parameterPositions,c=r.sampleValues;return l[0]=o,l[1]=o+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const o=this._startTime;if(o!==null){const l=(t-o)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),r=this._updateWeight(t);if(r>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Nd:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(a),c[d].accumulateAdditive(r);break;case ca:default:for(let d=0,h=l.length;d!==h;++d)l[d].evaluate(a),c[d].accumulate(i,r)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,o=this._loopCount;const a=n===Ud;if(t===0)return o===-1?i:a&&(o&1)===1?e-i:i;if(n===Fd){o===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(o===-1&&(t>=0?(o=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=e||i<0){const r=Math.floor(i/e);i-=e*r,o+=Math.abs(r);const l=this.repetitions-o;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=o,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:r})}}else this.time=i;if(a&&(o&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Ti,i.endingEnd=Ti):(t?i.endingStart=this.zeroSlopeAtStart?Ti:Ei:i.endingStart=oo,e?i.endingEnd=this.zeroSlopeAtEnd?Ti:Ei:i.endingEnd=oo)}_scheduleFading(t,e,n){const i=this._mixer,o=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const r=a.parameterPositions,l=a.sampleValues;return r[0]=o,l[0]=e,r[1]=o+t,l[1]=n,this}}const Dm=new Float32Array(1);class Lm extends ai{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,o=i.length,a=t._propertyBindings,r=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let d=c[l];d===void 0&&(d={},c[l]=d);for(let h=0;h!==o;++h){const u=i[h],p=u.name;let g=d[p];if(g!==void 0)++g.referenceCount,a[h]=g;else{if(g=a[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const x=e&&e._propertyBindings[h].binding.parsedPath;g=new Mm(ne.create(n,p,x),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),a[h]=g}r[h].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,o=this._actionsByClip[i];this._bindAction(t,o&&o.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const o=e[n];o.useCount++===0&&(this._lendBinding(o),o.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const o=e[n];--o.useCount===0&&(o.restoreOriginalState(),this._takeBackBinding(o))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,o=this._actionsByClip;let a=o[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,o[e]=a;else{const r=a.knownActions;t._byClipCacheIndex=r.length,r.push(t)}t._cacheIndex=i.length,i.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const o=t._clip.uuid,a=this._actionsByClip,r=a[o],l=r.knownActions,c=l[l.length-1],d=t._byClipCacheIndex;c._byClipCacheIndex=d,l[d]=c,l.pop(),t._byClipCacheIndex=null;const h=r.actionByRoot,u=(t._localRoot||this._root).uuid;delete h[u],l.length===0&&delete a[o],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const o=e[n];--o.referenceCount===0&&this._removeInactiveBinding(o)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,o=e[i];t._cacheIndex=i,e[i]=t,o._cacheIndex=n,e[n]=o}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,o=e[i];t._cacheIndex=i,e[i]=t,o._cacheIndex=n,e[n]=o}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,o=this._bindings;let a=i[e];a===void 0&&(a={},i[e]=a),a[n]=t,t._cacheIndex=o.length,o.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,o=n.path,a=this._bindingsByRootAndName,r=a[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete r[o],Object.keys(r).length===0&&delete a[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,o=e[i];t._cacheIndex=i,e[i]=t,o._cacheIndex=n,e[n]=o}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,o=e[i];t._cacheIndex=i,e[i]=t,o._cacheIndex=n,e[n]=o}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new qc(new Float32Array(2),new Float32Array(2),1,Dm),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,o=e[i];t.__cacheIndex=i,e[i]=t,o.__cacheIndex=n,e[n]=o}clipAction(t,e,n){const i=e||this._root,o=i.uuid;let a=typeof t=="string"?cs.findByName(i,t):t;const r=a!==null?a.uuid:t,l=this._actionsByClip[r];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=ca),l!==void 0){const h=l.actionByRoot[o];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const d=new Im(this,a,e,n);return this._bindAction(d,c),this._addInactiveAction(d,r,o),d}existingAction(t,e){const n=e||this._root,i=n.uuid,o=typeof t=="string"?cs.findByName(n,t):t,a=o?o.uuid:t,r=this._actionsByClip[a];return r!==void 0&&r.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,o=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,o,a);const r=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)r[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,o=i[n];if(o!==void 0){const a=o.knownActions;for(let r=0,l=a.length;r!==l;++r){const c=a[r];this._deactivateAction(c);const d=c._cacheIndex,h=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=d,e[d]=h,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const r=n[a].actionByRoot,l=r[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,o=i[e];if(o!==void 0)for(const a in o){const r=o[a];r.restoreOriginalState(),this._removeInactiveBinding(r)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ta);const $c={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class qi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Fm=new ha(-1,1,1,-1,0,1);class Bm extends Pe{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}}const Um=new Bm;class Ma{constructor(t){this._mesh=new D(Um,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Fm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Nm extends qi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ce?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ps.clone(t.uniforms),this.material=new Ce({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ma(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Bl extends qi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,r;this.inverse?(a=0,r=1):(a=1,r=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),o.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),o.buffers.stencil.setClear(r),o.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(i.EQUAL,1,4294967295),o.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),o.buffers.stencil.setLocked(!0)}}class Om extends qi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class km{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Dt);this._width=n.width,this._height=n.height,e=new sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Nm($c),this.copyPass.material.blending=bn,this.clock=new ym}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,o=this.passes.length;i<o;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Bl!==void 0&&(a instanceof Bl?n=!0:a instanceof Om&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class zm extends qi{constructor(t,e,n=null,i=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Mt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=i}}const Gm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Mt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ki extends qi{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Dt(t.x,t.y):new Dt(256,256),this.clearColor=new Mt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new sn(o,a,{type:Sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new sn(o,a,{type:Sn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const p=new sn(o,a,{type:Sn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),o=Math.round(o/2),a=Math.round(a/2)}const r=Gm;this.highPassUniforms=ps.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ce({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Dt(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=$c;this.copyUniforms=ps.clone(d.uniforms),this.blendMaterial=new Ce({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:rr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Mt,this.oldClearAlpha=1,this.basic=new He,this.fsQuad=new Ma(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,i),this.renderTargetsVertical[o].setSize(n,i),this.separableBlurMaterials[o].uniforms.invSize.value=new Dt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=ki.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=ki.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),r=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ce({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Dt(.5,.5)},direction:{value:new Dt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}ki.BlurDirectionX=new Dt(1,0);ki.BlurDirectionY=new Dt(0,1);const Hm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Vm extends qi{constructor(){super();const t=Hm;this.uniforms=ps.clone(t.uniforms),this.material=new lm({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ma(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Yt.getTransfer(this._outputColorSpace)===ee&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===cc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===dc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===hc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===na?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===uc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ns={fov:35,height:38,rotationSmoothing:.06,positionSmoothing:.1,lookAheadDistance:6};class Wm{constructor(){C(this,"camera");C(this,"targetPos",new L);C(this,"cameraAngle",0);this.camera=new De(ns.fov,window.innerWidth/window.innerHeight,5,800)}follow(t,e,n){let i=n-this.cameraAngle;for(;i>Math.PI;)i-=Math.PI*2;for(;i<-Math.PI;)i+=Math.PI*2;this.cameraAngle+=i*ns.rotationSmoothing;const o=Math.sin(this.cameraAngle)*-28,a=-Math.cos(this.cameraAngle)*-28;this.targetPos.set(t.x+o,t.y+ns.height,t.z+a),this.camera.position.lerp(this.targetPos,ns.positionSmoothing);const l=e.length()>.5?e.clone().normalize().multiplyScalar(ns.lookAheadDistance):new L(0,0,0),c=t.clone().add(l);c.y+=2,this.camera.lookAt(c)}}class Xm{constructor(){C(this,"boxes",[])}addBox(t,e,n,i){this.boxes.push({cx:t,cz:e,hw:n,hd:i})}resolveCircle(t,e,n){let i=t,o=e;for(const a of this.boxes){const r=a.hw+n,l=a.hd+n,c=i-a.cx,d=o-a.cz;if(Math.abs(c)<r&&Math.abs(d)<l){const h=r-Math.abs(c),u=l-Math.abs(d);h<u?i+=c<0?-h:h:o+=d<0?-u:u}}return{x:i,z:o}}}let $r=null,ms=null;async function qm(){async function t(e){const n=new Image;return new Promise(i=>{n.onload=()=>i(n.naturalWidth>0?n:null),n.onerror=()=>{console.warn("[LogoLoader] failed:",e),i(null)},n.src=e})}[$r,ms]=await Promise.all([t("./tem-logo.jpg"),t("./tem-logo-white.jpg")]),console.log("[LogoLoader] black-on-white:",!!$r,"| white-on-black:",!!ms)}function Jc(s){const e=document.createElement("canvas");e.width=e.height=256;const n=e.getContext("2d"),i=s>>16&255,o=s>>8&255,a=s&255,l=.299*i+.587*o+.114*a<128,c=l?ms:$r;if(c){n.drawImage(c,0,0,256,256);const d=n.getImageData(0,0,256,256),h=d.data;for(let u=0;u<h.length;u+=4){const p=.299*h[u]+.587*h[u+1]+.114*h[u+2];l?h[u+3]=Math.round(Math.min(255,p*1.4)):h[u+3]=Math.round(Math.min(255,(255-p)*1.4))}n.putImageData(d,0,0)}else Ym(n,256,l);return new vs(e)}function Kc(s=512){const t=document.createElement("canvas");t.width=t.height=s;const e=t.getContext("2d");if(ms){e.drawImage(ms,0,0,s,s);const n=e.getImageData(0,0,s,s),i=n.data;for(let o=0;o<i.length;o+=4){const a=.299*i[o]+.587*i[o+1]+.114*i[o+2];i[o+3]=Math.round(Math.min(255,a*1.5))}e.putImageData(n,0,0)}else e.strokeStyle="#FFFFFF",e.fillStyle="#FFFFFF",Zc(e,s);return new vs(t)}function Ym(s,t,e){s.strokeStyle=e?"#FFFFFF":"#111111",s.fillStyle=e?"#FFFFFF":"#111111",Zc(s,t)}function Zc(s,t){const e=t/256;s.save(),s.scale(e,e),s.lineCap="round",s.lineWidth=6,s.beginPath(),s.arc(128,128,118,0,Math.PI*2),s.stroke(),s.lineWidth=11,s.beginPath(),s.moveTo(128,225),s.lineTo(128,148),s.stroke(),s.lineWidth=7,s.beginPath(),s.moveTo(128,148),s.lineTo(128,96),s.stroke();const n=[[128,178,76,152],[128,178,180,152],[128,160,64,134],[128,160,192,134],[128,142,76,116],[128,142,180,116],[128,124,88,99],[128,124,168,99],[128,110,98,84],[128,110,158,84],[128,98,110,70],[128,98,146,70],[128,88,118,56],[128,88,138,56]];s.lineWidth=4;for(const[i,o,a,r]of n)s.beginPath(),s.moveTo(i,o),s.lineTo(a,r),s.stroke(),s.beginPath(),s.arc(a,r,5,0,Math.PI*2),s.fill();s.restore()}class jm{constructor(){C(this,"renderer");C(this,"scene");C(this,"camera");C(this,"collisionWorld",new Xm);C(this,"composer");C(this,"clouds",[]);C(this,"updateCallbacks",[]);C(this,"lastTime",0);C(this,"C",{modernGrey:13157564,warmGrey:12103846,terracotta:12884602,deepClay:10516568,softWhite:15262940,charcoal:4868682,warmCream:13945272,oliveGreen:9083754,ironRed:12674667})}async init(){this.renderer=new fa({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=lc,this.renderer.toneMapping=na,this.renderer.toneMappingExposure=1.1,document.body.appendChild(this.renderer.domElement),this.renderer.domElement.style.position="relative",this.renderer.domElement.style.zIndex="1",this.scene=new pa,this.scene.fog=new _o(8900331,.0025),this.camera=new Wm,this.scene.add(this.camera.camera),this.composer=new km(this.renderer),this.composer.addPass(new zm(this.scene,this.camera.camera));const t=new ki(new Dt(window.innerWidth,window.innerHeight),.3,.4,.85);this.composer.addPass(t),this.composer.addPass(new Vm);const e=new _a(16777215,.5);this.scene.add(e);const n=new Oi(16774368,1.4);n.position.set(80,120,40),n.castShadow=!0,n.shadow.mapSize.width=2048,n.shadow.mapSize.height=2048,n.shadow.camera.near=.5,n.shadow.camera.far=600,n.shadow.camera.left=-300,n.shadow.camera.right=300,n.shadow.camera.top=300,n.shadow.camera.bottom=-300,n.shadow.bias=-.001,this.scene.add(n);const i=new Oi(16771280,.5);i.position.set(-60,40,-80),this.scene.add(i);const o=new gm(8900331,8943462,.3);this.scene.add(o),this.createCityGround(),this.createCity(),this.createTEHouses(),this.buildWorkshop(10,15),this.createZebraCrossings(),this.createRoadCorners(),this.createStreetFurniture(),this.createSkyDome(),this.createClouds(),this.createPuddles(),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),this.camera.camera.aspect=window.innerWidth/window.innerHeight,this.camera.camera.updateProjectionMatrix()})}seed(t,e,n=0){const i=Math.sin(t*127.1+e*311.7+n*74.3)*43758.5453123;return i-Math.floor(i)}getZone(t,e){return Math.abs(t)<80&&Math.abs(e)<80?"cbd":t<-80?"footscray":t>80?"richmond":e<-80?"stkilda":"brunswick"}pickBuildingType(t,e){const n={cbd:[.5,.5,.9,1,1],footscray:[0,.2,.2,.4,1],brunswick:[.3,.6,.6,1,1],richmond:[.3,.3,.6,1,1],stkilda:[0,.3,.3,.7,1]},i=n[t]??n.brunswick,o=["A","B","C","D","E"];for(let a=0;a<i.length;a++)if(e<i[a])return o[a];return"D"}createCityGround(){const o=new j({color:8947840}),a=new D(new de(2048,2048),o);a.rotation.x=-Math.PI/2,a.position.y=0,a.receiveShadow=!0,this.scene.add(a);const r={cbd:8947840,footscray:7824981,brunswick:8943462,richmond:8026224,stkilda:9080960};for(let l=-240;l<240;l+=40)for(let c=-240;c<240;c+=40){const d=l+20,h=c+40/2,u=this.getZone(d,h),g=this.seed(l,c,0)<.15?5929546:r[u],x=new j({color:g}),m=new D(new de(30,30),x);m.rotation.x=-Math.PI/2,m.position.set(d,.005,h),m.receiveShadow=!0,this.scene.add(m)}}createCity(){const i=new j({color:2763306}),o=new j({color:16777215}),a=new j({color:15777856}),r=new j({color:13156528}),l=32;for(let c=-240;c<=240;c+=40){const h=new D(new de(480,8),i);h.rotation.x=-Math.PI/2,h.position.set(0,.01,c),h.receiveShadow=!0,this.scene.add(h);for(let u=-240;u<240;u+=40){const p=u+20;for(const g of[-1,1]){const x=new D(new de(l,2),r);x.rotation.x=-Math.PI/2,x.position.set(p,.02,c+g*(8/2+1)),x.receiveShadow=!0,this.scene.add(x)}}for(const u of[-1,1]){const p=new D(new de(480,.2),a);p.rotation.x=-Math.PI/2,p.position.set(0,.03,c+u*(8/2-.3)),this.scene.add(p)}for(let u=-240;u<=240;u+=8){const p=new D(new de(4,.15),o);p.rotation.x=-Math.PI/2,p.position.set(u,.03,c),this.scene.add(p)}for(let u=-240;u<=240;u+=20)for(const p of[-1,1]){const g=u+(this.seed(u,c,50+p)-.5)*2,x=c+p*5.5,m=(g%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,x,u*10+p,c*10+1)}for(let u=-232;u<240;u+=17){const p=this.seed(u,c,60);if(p>.45){const g=p>.72?1:-1,x=u+(this.seed(u,c,61)-.5)*4,m=c+g*(8/2+2);this.addParkedCar(x,m,u+g*3,c+7,Math.PI/2)}}}for(let c=-240;c<=240;c+=40){const h=new D(new de(8,480),i);h.rotation.x=-Math.PI/2,h.position.set(c,.01,0),h.receiveShadow=!0,this.scene.add(h);for(let u=-240;u<240;u+=40){const p=u+20;for(const g of[-1,1]){const x=new D(new de(2,l),r);x.rotation.x=-Math.PI/2,x.position.set(c+g*(8/2+1),.02,p),x.receiveShadow=!0,this.scene.add(x)}}for(const u of[-1,1]){const p=new D(new de(.2,480),a);p.rotation.x=-Math.PI/2,p.position.set(c+u*(8/2-.3),.03,0),this.scene.add(p)}for(let u=-240;u<=240;u+=8){const p=new D(new de(.15,4),o);p.rotation.x=-Math.PI/2,p.position.set(c,.03,u),this.scene.add(p)}for(let u=-240;u<=240;u+=20)for(const p of[-1,1]){const g=c+p*5.5,x=u+(this.seed(c,u,52+p)-.5)*2,m=(x%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,x,c*10+2,u*10+p)}for(let u=-232;u<240;u+=17){const p=this.seed(c,u,62);if(p>.45){const g=p>.72?1:-1,x=c+g*(8/2+2),m=u+(this.seed(c,u,63)-.5)*4;this.addParkedCar(x,m,c+9,u+g*3,0)}}}for(let c=-240;c<240;c+=40)for(let d=-240;d<240;d+=40)this.populateBlock(c,d,40,8)}addTree(t,e,n,i){const o=this.seed(n,i,99),a=o<.15?"palm":o<.5?"round":"layered",r=2+o*1.5,l=new j({color:6045747}),c=new D(new Wt(.25,.35,r,7),l);if(c.position.set(t,r/2,e),c.castShadow=!0,this.scene.add(c),a==="palm"){const d=new D(new Wt(.15,.22,6,6),new j({color:9139029}));d.position.set(t,3,e),this.scene.add(d);for(let h=0;h<6;h++){const u=h/6*Math.PI*2,p=new D(new Q(.15,.08,2.5),new j({color:2775578}));p.position.set(t+Math.cos(u)*1.2,6.5,e+Math.sin(u)*1.2),p.rotation.y=u,p.rotation.z=.4,this.scene.add(p)}}else if(a==="layered"){const d=[2973229,3829306,4881994];for(let h=0;h<3;h++){const u=2.2-h*.5,p=new D(new Nn(u,2,8),new j({color:d[h]}));p.position.set(t,r+1+h*1.5,e),p.castShadow=!0,this.scene.add(p)}}else{const d=o>.7?4025917:2973229,h=[[0,0,0],[.8,-.3,.5],[-.7,-.2,.3],[.3,.4,-.6],[-.4,.3,-.5]];for(let u=0;u<h.length;u++){const[p,g,x]=h[u],m=1.8+this.seed(n+u*17,i+u*13,103)*.8,f=new D(new he(m,7,6),new j({color:d}));f.position.set(t+p,r+2.5+g,e+x),f.castShadow=!0,this.scene.add(f)}}}addParkedCar(t,e,n,i,o=0){const a=[13382451,3364300,11184810,14540253,2236962],r=Math.floor(this.seed(n,i,20)*a.length),l=new j({color:a[r]}),c=new D(new Q(1.5,1.2,3),l);c.position.set(t,.6,e),c.rotation.y=o,this.scene.add(c);const d=new j({color:2241348}),h=new D(new Q(1.4,.5,.1),d),u=-.9*Math.sin(o),p=-.9*Math.cos(o);h.position.set(t+u,1.3,e+p),h.rotation.y=o,this.scene.add(h)}populateBlock(t,e,n,i){const o=n-i-4,a=t+n/2,r=e+n/2,l=this.getZone(a,r),c=1+Math.floor(this.seed(t,e,1)*2);for(let d=0;d<c;d++){const h=this.seed(t+d*3,e+d*7,3),u=this.pickBuildingType(l,h);if(u==="E"){d===0&&this.buildTypeE(a,r,t,e);break}const p=o*.18,g=c>1?d===0?-p:p:0,x=g+(this.seed(t+d*5,e,4)-.5)*p*.3,m=g+(this.seed(t,e+d*5,5)-.5)*p*.3,f=t+d*11,w=e+d*13;switch(u){case"A":this.buildTypeA(a+x,r+m,f,w);break;case"B":this.buildTypeB(a+x,r+m,f,w);break;case"C":this.buildTypeC(a+x,r+m,f,w);break;case"D":this.buildTypeD(a+x,r+m,f,w);break}}}addBox(t,e,n,i,o,a,r,l,c=0,d=0,h=0){const u=new D(new Q(n,i,o),new j({color:e}));u.position.set(a,r,l),c!==0&&(u.rotation.x=c),d!==0&&(u.rotation.y=d),h!==0&&(u.rotation.z=h),u.castShadow=!0,u.receiveShadow=!0,t.add(u)}addCyl(t,e,n,i,o,a,r,l,c){const d=new D(new Wt(n,i,o,a),new j({color:e}));d.position.set(r,l,c),d.castShadow=!0,d.receiveShadow=!0,t.add(d)}registerBuildingCollider(t,e,n,i,o,a){const r=Math.floor(this.seed(o,a,101)*4)%4,l=r===1||r===3;this.collisionWorld.addBox(t,e,l?i:n,l?n:i)}buildTypeA(t,e,n,i){const o=this.C,a=new Nt;this.addBox(a,o.modernGrey,16,10,14,0,5,0),this.addBox(a,o.softWhite,16.4,.6,14.4,0,10.3,0);for(const h of[-5,0,5])this.addCyl(a,o.charcoal,.3,.3,3,6,h,1.5,-7);this.addBox(a,o.charcoal,14,.4,.4,0,3,-7);for(const h of[-4.5,0,4.5])this.addGlassBox(a,2241348,2.5,1.8,.15,h,7,-6.93);this.addBox(a,o.deepClay,14,.5,1.2,0,.25,-7.6),this.addBox(a,o.oliveGreen,13,.4,1,0,.7,-7.6);const r=this.seed(n,i,400),l=new j({color:r>.5?12876352:4876938}),c=new D(new Q(14,.1,1.5),l);c.position.set(0,3.8,-7.75),c.rotation.x=.15,a.add(c);const d=new D(new Q(14,.3,.08),l);d.position.set(0,3.45,-8.45),a.add(d),this.addBox(a,14210252,.8,.5,.08,-6.5,1,-7.05),this.addRooftopDetails(a,16,14,10,n,i),a.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),a.position.set(t,0,e),this.scene.add(a),this.registerBuildingCollider(t,e,8.5,7.5,n,i)}buildTypeB(t,e,n,i){const o=this.C,a=new Nt;this.addBox(a,o.deepClay,14.5,8.2,12.5,.3,4,.3),this.addBox(a,o.terracotta,14,8,12,0,4,0),this.addBox(a,o.terracotta,14.6,1.2,12.6,0,8.6,0),this.addBox(a,o.softWhite,15,.3,13,0,9.35,0);for(const r of[-3,3]){this.addBox(a,o.softWhite,1.6,2.6,.1,r,5,-5.99),this.addGlassBox(a,2241348,1.2,2.2,.2,r,5,-5.75);for(const l of[4.3,5,5.7])this.addBox(a,o.charcoal,1,.08,.12,r,l,-5.68)}this.addBox(a,o.charcoal,2,3,.2,0,1.5,-6.1),this.addBox(a,o.charcoal,1.5,.4,.2,0,3.2,-6.1),this.addBox(a,o.charcoal,1,.4,.2,0,3.7,-6.1),this.addBox(a,o.deepClay,2,.4,.6,0,.2,-6.6),this.addBox(a,o.oliveGreen,1.8,.1,.5,0,.45,-6.6),this.addBox(a,13938826,.8,.5,.08,-5,1,-6.05),this.addRooftopDetails(a,14,12,8,n,i),a.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),a.position.set(t,0,e),this.scene.add(a),this.registerBuildingCollider(t,e,7.5,6.5,n,i)}buildTypeC(t,e,n,i){const o=this.C,a=new Nt,r=30+Math.floor(this.seed(n,i,31)*20);this.addBox(a,o.modernGrey,8,4,8,0,2,0),this.addBox(a,4478310,7.5,3.5,7.5,0,2,0),this.addBox(a,3359829,7,r,7,0,r/2,0);for(let l=4;l<=r;l+=4)this.addBox(a,o.warmGrey,7.3,.2,7.3,0,l,0);this.addBox(a,o.charcoal,4,3,4,0,r+1.5,0),a.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),a.position.set(t,0,e),this.scene.add(a),this.registerBuildingCollider(t,e,4.5,4.5,n,i)}buildTypeD(t,e,n,i){const o=this.C,a=new Nt;this.addBox(a,o.warmCream,13,7,11,0,3.5,0),this.addBox(a,o.softWhite,13.5,.5,11.5,0,7.25,0),this.addBox(a,o.softWhite,2.8,3.8,1.6,0,4,-6.2),this.addBox(a,o.warmCream,2.5,3.5,1.5,0,4,-6.25);for(const r of[-.8,0,.8])this.addGlassBox(a,3359829,.7,2.5,.2,r,4,-7);this.addBox(a,o.deepClay,2.2,3.2,.3,0,1.6,-5.65),this.addBox(a,o.deepClay,1.8,.4,.3,0,3.35,-5.65),this.addBox(a,o.deepClay,1.2,.4,.3,0,3.8,-5.65);for(const r of[-3.5,3.5])this.addBox(a,o.softWhite,1.8,1.5,.1,r,5.5,-5.5),this.addGlassBox(a,3359829,1.5,1.2,.15,r,5.5,-5.55);this.addBox(a,o.deepClay,11,1,.3,0,.5,-6.65),this.addBox(a,14997960,.8,.5,.08,-5,1,-5.55),this.addRooftopDetails(a,13,11,7,n,i),a.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),a.position.set(t,0,e),this.scene.add(a),this.registerBuildingCollider(t,e,7,6,n,i)}buildTypeE(t,e,n,i){this.C;const o=new Nt,a=12*Math.PI/180;this.addBox(o,6974050,22,4,18,0,2,0),this.addBox(o,1710614,22.1,.3,18.1,0,.15,0);const r=new D(new Q(22.5,.3,10),new j({color:1973786}));r.castShadow=!0,r.receiveShadow=!0,r.rotation.x=a,r.position.set(0,4.5,-4.5),o.add(r);const l=new D(new Q(22.5,.3,10),new j({color:1973786}));l.castShadow=!0,l.receiveShadow=!0,l.rotation.x=-a,l.position.set(0,4.5,4.5),o.add(l),this.addBox(o,1118480,22.5,.5,.6,0,5.2,0);for(const p of[-2,.5,3])this.addBox(o,1118480,22.2,.08,.1,0,3.5,p);this.addBox(o,1118480,4.5,3.5,.2,0,1.75,-9.1),this.addBox(o,2236960,.15,3.5,.2,-2.4,1.75,-9.1),this.addBox(o,2236960,.15,3.5,.2,2.4,1.75,-9.1),this.addBox(o,3359829,8,.8,.15,-11.075,3.5,0),this.addCyl(o,1118480,.1,.1,4,5,-11,2,-9);const c=this.seed(n,i,401),d=new j({color:c>.5?12876352:4876938}),h=new D(new Q(8,.1,1.5),d);h.position.set(0,4.2,-9.85),h.rotation.x=.15,o.add(h);const u=new D(new Q(8,.3,.08),d);u.position.set(0,3.85,-10.6),o.add(u);for(const p of[-3.5,3.5]){const g=new D(new Wt(.06,.06,4,5),new j({color:5592400}));g.position.set(p,2,-10.55),o.add(g)}this.addRooftopDetails(o,22,18,5.2,n,i),o.rotation.y=Math.floor(this.seed(n,i,101)*4)*(Math.PI/2),o.position.set(t,0,e),this.scene.add(o),this.registerBuildingCollider(t,e,11.5,9.5,n,i)}createTEHouses(){this.buildHouseMarbellino(20,20),this.collisionWorld.addBox(20,20,10,7.5),this.buildHousePorthole(-60,20),this.collisionWorld.addBox(-60,20,8,6.5),this.buildHouseTerracotta(20,-60),this.collisionWorld.addBox(20,-60,9,7),this.buildHouseLoggia(-60,-60),this.collisionWorld.addBox(-60,-60,10,7.5),this.buildHouseRokka(60,-20),this.collisionWorld.addBox(60,-20,11,8),this.buildHouseTimberStone(100,60),this.collisionWorld.addBox(100,60,11,7),this.buildHouseSculpturalPlaster(-100,-20),this.collisionWorld.addBox(-100,-20,8,6),this.buildHouseHaussmann(60,-100),this.collisionWorld.addBox(60,-100,11,7),this.buildHouseAngularBay(-140,60),this.collisionWorld.addBox(-140,60,9,6.5),this.buildHouseBrutalistCompound(20,100),this.collisionWorld.addBox(20,100,12,5),this.buildHouseTerracottaMonolith(140,20),this.collisionWorld.addBox(140,20,10,5),this.buildHouseCurvedBalcony(-20,-140),this.collisionWorld.addBox(-20,-140,8,6),this.buildHouseCortenPlaster(-140,-60),this.collisionWorld.addBox(-140,-60,10,5.5),this.buildCoffeeShop(-60,-100),this.collisionWorld.addBox(-60,-100,7,5),this.buildToiletBlock(100,60),this.collisionWorld.addBox(100,60,6,5)}buildHouseMarbellino(t,e){const n=new Nt;this.addBox(n,13945786,18,4,14,0,2,0),this.addBox(n,2763306,20,4,15,0,7,0);for(const i of[-8,-5,-2,1,4,7])this.addBox(n,1710618,.15,4,15,i,7,0);this.addBox(n,3355443,20.5,.5,15.5,0,9.25,0),this.addBox(n,3359829,10,.9,.15,0,3.5,-7.1),this.addBox(n,13157564,10.4,1.1,.1,0,3.5,-7.05);for(const i of[-4,0,4]){const o=new D(new Q(1.5,2.5,.15),new j({color:4478310,emissive:new Mt(2241348),emissiveIntensity:.3}));o.position.set(i,7.5,-7.6),n.add(o)}this.addBox(n,1710618,5,3.8,.2,-5.5,1.9,-7.1),this.addBox(n,13157564,2,.3,1,4,.15,-7.5),this.addBox(n,9072736,14,.4,1,0,.2,-8),this.addBox(n,5929546,12,.6,.8,0,.6,-8),n.position.set(t,0,e),this.scene.add(n)}buildHousePorthole(t,e){const n=new Nt;this.addBox(n,12104876,16,5.5,13,0,2.75,0),this.addBox(n,9134144,7,5.5,.3,3.5,2.75,-6.65);for(let i=0;i<5;i++){const o=(i-2)*1.2;this.addBox(n,6965280,7,.2,.4,3.5,2.75+o,-6.55,0,0,Math.PI/7.2)}this.addBox(n,13157564,16.5,.3,13.5,0,5.65,0),this.addBox(n,2763306,17,.5,14,0,5.95,0);{const i=new D(new Wt(1.4,1.4,.15,16),new j({color:8947848}));i.rotation.x=Math.PI/2,i.position.set(-4,3.5,-6.7),n.add(i)}{const i=new D(new Wt(1.1,1.1,.1,16),new j({color:2241348,emissive:new Mt(1122867),emissiveIntensity:.5}));i.rotation.x=Math.PI/2,i.position.set(-4,3.5,-6.65),n.add(i)}this.addBox(n,3359829,3.5,1.2,.15,1,3.5,-6.7),this.addBox(n,3359829,3.5,1.2,.15,5,3.5,-6.7),this.addBox(n,3811866,1.8,2.8,.3,-6,1.4,-6.8),this.addBox(n,8947848,2.2,3,.2,-6,1.4,-6.65),this.addBox(n,3828282,10,.7,.8,0,.35,-7.5),n.position.set(t,0,e),this.scene.add(n)}buildHouseTerracotta(t,e){const n=new Nt;this.addBox(n,10121296,17.6,7.2,14.6,0,3.5,0),this.addBox(n,12884602,17,7,14,0,3.5,0),this.addBox(n,12884602,17.8,1.5,14.8,0,7.75,0),this.addBox(n,15262940,18.2,.3,15.2,0,8.65,0),this.addBox(n,9068608,2.4,3.5,.3,0,1.75,-7.1),this.addBox(n,9068608,2,.5,.3,0,3.75,-7.1),this.addBox(n,9068608,1.4,.5,.3,0,4.25,-7.1),this.addBox(n,9068608,1.4,2.8,.5,-4,4,-7.2),this.addBox(n,2241348,1,2.4,.15,-4,4,-7.05),this.addBox(n,15262940,1.6,3,.15,-4,4,-6.98);for(const i of[3.2,4,4.8])this.addBox(n,3355443,.9,.08,.15,-4,i,-7.1);this.addBox(n,9068608,1.4,2.8,.5,4,4,-7.2),this.addBox(n,2241348,1,2.4,.15,4,4,-7.05),this.addBox(n,15262940,1.6,3,.15,4,4,-6.98);for(const i of[3.2,4,4.8])this.addBox(n,3355443,.9,.08,.15,4,i,-7.1);for(const i of[-2,2])this.addBox(n,3359829,.15,1.5,1,8.58,4,i),this.addBox(n,3359829,.15,1.5,1,-8.58,4,i);this.addBox(n,10516568,2.5,.5,.8,-4,.25,-7.5),this.addBox(n,10516568,2.5,.5,.8,4,.25,-7.5),this.addBox(n,5933642,2,.5,.6,-4,.65,-7.5),this.addBox(n,5933642,2,.5,.6,4,.65,-7.5);for(const i of[-6,-2,2,6])this.addBox(n,15262940,.8,.8,.2,i,8.4,-7.4);n.position.set(t,0,e),this.scene.add(n)}buildHouseLoggia(t,e){const n=new Nt;this.addBox(n,11578532,20,6,15,0,3,0),this.addBox(n,10131088,20.5,.4,15.5,0,6.2,0),this.addBox(n,10131088,20,.4,3,0,3.2,-10);for(const i of[-7,-3,3,7])this.addCyl(n,8947840,.2,.2,3.2,8,i,1.6,-11);this.addBox(n,3359829,14,2,.2,0,4,-7.5),this.addBox(n,13157564,14.4,2.2,.15,0,4,-7.4);for(const i of[-5,0,5])this.addBox(n,8947840,.15,2,.2,i,4,-7.5);{const i=new D(new Q(2.4,2.8,.2),new j({color:3359829,emissive:new Mt(1120290),emissiveIntensity:.2}));i.position.set(5,1.4,-7.5),n.add(i)}this.addBox(n,8947840,2.8,3,.15,5,1.4,-7.4),this.addBox(n,9074784,18,.5,2.5,0,.25,-9),this.addBox(n,4880970,16,.7,2,0,.65,-9),this.addBox(n,8947840,20,.3,.3,0,3.1,-10.2),this.addBox(n,8947840,20,.3,.3,0,3.1,-11.8),n.position.set(t,0,e),this.scene.add(n)}buildHouseRokka(t,e){const n=new Nt;this.addBox(n,12892314,22,4.5,16,0,2.25,0),this.addBox(n,10128506,22.5,.3,9,0,4.75,-3.5,Math.PI*8/180,0,0),this.addBox(n,10128506,22.5,.3,9,0,4.75,3.5,-Math.PI*8/180,0,0),this.addBox(n,6969928,22.5,.6,.8,0,5.1,0),this.addBox(n,10127472,22.5,1,16.5,0,.5,0);{const i=new D(new Q(6,3.2,.2),new j({color:3359829,emissive:new Mt(1120290),emissiveIntensity:.3}));i.position.set(0,1.6,-8.1),n.add(i)}this.addBox(n,8022618,6.4,3.5,.15,0,1.75,-8);for(const i of[-2,0,2])this.addBox(n,8947824,.1,3.2,.2,i,1.6,-8.1);this.addBox(n,8947824,6,.1,.2,0,2.2,-8.1),this.addBox(n,3359829,2.5,1.5,.2,-7,3,-8.1),this.addBox(n,3359829,2.5,1.5,.2,7,3,-8.1),this.addBox(n,11575432,.8,4.5,.8,-3.5,2.25,-8.2),this.addBox(n,11575432,.8,4.5,.8,3.5,2.25,-8.2),this.addCyl(n,6969928,.1,.1,4.5,5,-11,2.25,-8),this.addCyl(n,6969928,.1,.1,4.5,5,11,2.25,-8),this.addBox(n,11575432,20,.8,.3,0,.4,-10),n.position.set(t,0,e),this.scene.add(n)}buildHouseTimberStone(t,e){const n=new Nt;this.addBox(n,8947840,22,4,14,0,2,0),this.addBox(n,6710880,22.2,.4,14.2,0,.2,0),this.addBox(n,12088362,22,4.5,13,0,6.25,0);for(let i=0;i<8;i++)this.addBox(n,10116634,22.1,.12,13.1,0,4.3+i*.57,0);this.addBox(n,4870229,5,8.5,14.2,8.5,4.25,0);for(let i=0;i<12;i++){const o=i%2===0?3817541:5593696;this.addBox(n,o,5.1,.3,14.3,8.5,.5+i*.65,0)}this.addBox(n,2763306,22.5,.5,14.5,0,8.75,0);for(const i of[-6,-2,2]){this.addBox(n,1710618,2.8,3.2,.2,i,6,-6.6);const o=new D(new Q(2.4,2.9,.15),new j({color:9087675,emissive:new Mt(2770005),emissiveIntensity:.2}));o.position.set(i,6,-6.6),n.add(o)}this.addBox(n,1710618,13,.15,.5,-3,8,-6.8),this.addBox(n,10140364,12.5,.8,.1,-3,7.6,-6.75);for(const i of[-7,-4.5])this.addBox(n,1710618,2.2,1.8,.2,i,2,-7.1),this.addBox(n,3359829,1.8,1.5,.15,i,2,-7);this.addBox(n,6962202,1.8,3.2,.2,2.5,1.6,-7.1),this.addBox(n,12092938,.12,.12,.15,3.1,1.6,-7.1),this.addBox(n,1710618,4,.15,2.5,2.5,3.5,-7.3),this.addCyl(n,1710618,.06,.06,3.5,5,1,1.75,-8.2),this.addCyl(n,1710618,.06,.06,3.5,5,4,1.75,-8.2),this.addBox(n,1710618,8,.18,6,-9,4.1,-5),this.addCyl(n,1118481,.12,.12,4.1,6,-6.5,2.05,-7.8),this.addCyl(n,1118481,.12,.12,4.1,6,-11.5,2.05,-7.8),this.addBox(n,10066329,2,.8,3.5,-9.5,.4,-4.5),this.addBox(n,11184810,1.9,.3,3.4,-9.5,.9,-4.5);for(let i=5;i<=13;i+=.7)this.addBox(n,1710618,.12,1.6,.12,i,.8,-8.5);this.addBox(n,6710880,20,.8,.3,0,.4,-9.5),this.addBox(n,4870229,20,.35,.4,0,.18,-9.5);for(let i=0;i<5;i++)this.addBox(n,14540236,1.4,.08,.7,5,.05,-10.2+i*.9);this.addBox(n,4880954,8,.1,3,5,0,-9.8);for(const[i,o]of[[3.5,-8.5],[6.5,-8]]){this.addCyl(n,5912608,.12,.15,2.5,6,i,1.25,o);const a=new D(new Nn(1,2.2,7),new j({color:3828266}));a.position.set(i,2.8,o),n.add(a)}this.addBox(n,1710618,3.5,1.8,.2,7.5,6.5,-6.6),this.addBox(n,3359829,3,1.5,.15,7.5,6.5,-6.55),n.position.set(t,0,e),this.scene.add(n)}buildHouseSculpturalPlaster(t,e){const n=new Nt,i=8686698,o=6976085,a=11842732,r=1118481;this.addBox(n,i,14,5.5,12,-3,2.75,0),this.addBox(n,i,7,3.5,12,9,1.75,0),this.addBox(n,o,.3,5.6,12,2.85,2.75,0);const l=new D(new Q(11,.35,12.4),new j({color:i}));l.rotation.z=22*Math.PI/180,l.position.set(.5,8,0),n.add(l);const c=new D(new Q(7.5,.35,12.4),new j({color:a}));c.rotation.z=-52*Math.PI/180,c.position.set(-6.2,8.2,0),n.add(c),this.addBox(n,o,.6,.6,12.4,-3.2,10,0),this.addBox(n,1710618,2.3,4,.5,-3,2,-6.25),this.addBox(n,r,2.6,4.3,.2,-3,2.1,-6.05);const d=new D(new Q(2,3.6,.12),new j({color:2767428,emissive:new Mt(661538),emissiveIntensity:.3}));d.position.set(-3,2.1,-6.1),n.add(d),this.addBox(n,1710618,1.6,1.6,.4,8.5,2,-6.2),this.addBox(n,r,1.8,1.8,.18,8.5,2,-6.05),this.addBox(n,r,.4,.4,.4,-6.5,4.2,-6.05),this.addBox(n,r,.4,.4,.4,6.5,3.4,-6.05);for(const p of[-6.5,6.5]){const g=new D(new Q(.5,.08,.3),new j({color:16772812,emissive:new Mt(16764040),emissiveIntensity:.6}));g.position.set(p,p===-6.5?3.95:3.15,-6.07),n.add(g)}const h=8.5,u=-11;for(let p=-4;p<=4;p++){const g=p/4*40*Math.PI/180,x=h*Math.sin(g),m=u+h*(Math.cos(g)-1),f=new D(new Q(2,1.2,.35),new j({color:i}));f.rotation.y=g,f.position.set(x,.6,m),n.add(f);const w=new D(new Q(2,.12,.45),new j({color:12631720}));w.rotation.y=g,w.position.set(x,1.26,m),n.add(w)}this.addBox(n,o,2.5,.2,1,-3,.1,-7.5),n.position.set(t,0,e),this.scene.add(n)}buildHouseHaussmann(t,e){const n=new Nt,i=15261384,o=15788244,a=13154972,r=1118481;this.addBox(n,i,22,9.5,14,0,4.75,0);for(let d=0;d<5;d++)this.addBox(n,a,22.3,.14,14.3,0,.5+d*.88,0);for(let d=0;d<4;d++)this.addBox(n,a,22.3,.12,14.3,0,5.4+d*.85,0);this.addBox(n,o,22.6,.5,14.6,0,4.75,0),this.addBox(n,a,22.8,.2,14.8,0,5.05,0),this.addBox(n,i,22.5,.3,14.5,0,5.25,0),this.addBox(n,i,23.2,.5,15.2,0,9.75,0),this.addBox(n,o,22.8,.8,14.8,0,10.15,0),this.addBox(n,a,23.4,.25,15.4,0,10.55,0),this.addBox(n,o,4,11.5,4,-10,5.75,-6);for(let d=0;d<6;d++)this.addBox(n,a,4.2,.12,4.2,-10,.5+d*1.75,-6);this.addBox(n,i,4.4,.4,4.4,-10,5,-6),this.addBox(n,i,4.6,.4,4.6,-10,11.3,-6),this.addBox(n,o,4.4,.6,4.4,-10,11.75,-6),this.addBox(n,a,4.8,.25,4.8,-10,12.12,-6),this.addBox(n,i,2.5,1,2.5,-10,12.75,-6);for(const d of[-6.5,-1,4.5]){this.addBox(n,a,2,4.2,.5,d,2.1,-7.25),this.addBox(n,o,1.7,4,.2,d,2.1,-7.05);const h=new D(new Q(1.35,3.5,.12),new j({color:9087931,emissive:new Mt(1714739),emissiveIntensity:.15}));h.position.set(d,2.1,-7),n.add(h),this.addBox(n,o,1.7,.12,.15,d,3.2,-7.05)}for(const d of[-6.5,4.5]){this.addBox(n,a,2,3.8,.5,d,7.5,-7.25),this.addBox(n,o,1.7,3.5,.2,d,7.5,-7.05);const h=new D(new Q(1.35,3,.12),new j({color:9087931,emissive:new Mt(1714739),emissiveIntensity:.15}));h.position.set(d,7.5,-7),n.add(h),this.addBox(n,o,1.7,.12,.15,d,8.5,-7.05),this.addBox(n,i,3.4,.28,1.4,d,5.66,-7.9),this.addBox(n,a,3.5,.45,1.5,d,5.38,-7.95);for(let u=0;u<5;u++){const p=d-1.3+u*.65;this.addBox(n,r,.07,1,.07,p,6.2,-8.4)}this.addBox(n,r,3.2,.09,.09,d,6.72,-8.4),this.addBox(n,r,3.2,.09,.09,d,5.82,-8.4),this.addBox(n,r,.07,1,.07,d-1.3,6.2,-8.4,0,0,.35),this.addBox(n,r,.07,1,.07,d+1.3,6.2,-8.4,0,0,-.35)}this.addBox(n,o,5,6.5,.22,9.5,3.75,-7.05);const l=new D(new Q(4.5,6,.12),new j({color:9087931,emissive:new Mt(1714739),emissiveIntensity:.12}));l.position.set(9.5,3.75,-7),n.add(l);for(let d=0;d<3;d++)this.addBox(n,o,5,.1,.15,9.5,1+d*2,-7);for(const d of[7.5,9.5,11.5])this.addBox(n,o,.1,6,.15,d,3.75,-7);this.addBox(n,a,3.8,5.5,.6,1.5,2.75,-7.4),this.addBox(n,o,2.8,4.8,.2,1.5,2.4,-7.1);const c=new D(new Q(2.2,4.2,.12),new j({color:9087931,emissive:new Mt(660768),emissiveIntensity:.2}));c.position.set(1.5,2.4,-7.05),n.add(c),this.addBox(n,13937232,.1,.1,.1,2.4,2.2,-7.06),this.addBox(n,a,22.5,.3,14.5,0,.15,0),n.position.set(t,0,e),this.scene.add(n)}buildHouseAngularBay(t,e){const n=new Nt,i=15789022,o=12876378,a=3809296,r=1118481;this.addBox(n,i,18,4,13,0,2,0),this.addBox(n,i,18,4,12,0,6,0),this.addBox(n,i,8,4,2.5,5,6,-7.25),this.addBox(n,i,3,10,2.5,6.5,5,-7.5),this.addBox(n,o,10,.5,14,-4.5,8.5,0,0,0,.44),this.addBox(n,o,10,.5,14,4.5,8.5,0,0,0,-.44),this.addBox(n,a,1.5,.5,14.5,0,10.5,0),this.addBox(n,a,19,.3,13.5,0,8.05,0),this.addBox(n,a,19,.2,1.2,0,8.05,-7.3);for(const l of[-6.5,0])this.addBox(n,15658734,2.6,2,.12,l,1.8,-6.56),this.addBox(n,3359829,2.2,1.6,.15,l,1.8,-6.5);for(const l of[-6.5,0])this.addBox(n,15658734,2.6,2,.12,l,5.8,-6.56),this.addBox(n,3359829,2.2,1.6,.15,l,5.8,-6.5);for(let l=0;l<4;l++)this.addBox(n,r,.08,1,.08,-8.5+l*.65,5.5,-6.7);this.addBox(n,r,2.4,.08,.08,-7.02,6.05,-6.7),this.addBox(n,r,2.4,.08,.08,-7.02,5,-6.7),n.position.set(t,0,e),this.scene.add(n)}buildHouseBrutalistCompound(t,e){const n=new Nt,i=10524792,o=8947840;this.addBox(n,i,7,7,11,-8.5,3.5,0),this.addBox(n,i,6,5,10,-1,2.5,.5),this.addBox(n,i,6,6,11,5.5,3,-.5),this.addBox(n,i,5,4,9,11,2,0),this.addBox(n,i,24,1.5,9,0,.75,.5),this.addBox(n,o,4,.25,2.5,-8.5,7.25,-6.2),this.addBox(n,o,4,.25,2.5,5.5,6.25,-6.2),this.addBox(n,2241348,4,5.5,.15,-8.5,3.5,-5.6),this.addBox(n,2241348,3.5,4.5,.15,5.5,3,-5.6),this.addBox(n,i,8,5,.4,2,2.5,-6.5,0,.26,0);const a=14,r=9,l=-Math.PI*.35,c=Math.PI*.35;for(let d=0;d<r;d++){const h=d/(r-1),u=l+(c-l)*h,p=Math.sin(u)*a,g=Math.cos(u)*a-a+4;this.addBox(n,i,3.5,1.5,.4,p,.75,g,0,-u,0)}for(const d of[-3,2.5]){this.addCyl(n,5913114,.15,.2,3,5,d,1.5,-4);const h=new D(new he(1.2,6,5),new j({color:3828266}));h.position.set(d,4,-4),n.add(h)}n.position.set(t,0,e),this.scene.add(n)}buildHouseTerracottaMonolith(t,e){const n=new Nt,i=12284e3,o=2759194,a=4880954;this.addBox(n,i,20,3,.5,0,1.5,-9.5),this.addBox(n,o,20.2,.1,.55,0,1,-9.5),this.addBox(n,o,20.2,.1,.55,0,2,-9.5),this.addBox(n,i,20,6,10,0,3,-2),this.addBox(n,o,20.2,.1,10.1,0,2,-2),this.addBox(n,o,20.2,.1,10.1,0,4,-2),this.addBox(n,i,20.3,.4,10.3,0,6.2,-2),this.addBox(n,a,18,.3,1.8,0,.15,-7.5);for(let r=-8;r<=8;r+=2.5){const l=new D(new Nn(.2,.8,5),new j({color:5933642}));l.position.set(r,.55,-7.5),n.add(l)}this.addBox(n,1118481,1.2,3.5,.2,0,3.5,-7.05),this.addBox(n,2241348,.8,3,.15,0,3.5,-7),n.position.set(t,0,e),this.scene.add(n)}buildHouseCurvedBalcony(t,e){const n=new Nt,i=15261900,o=15789544,a=11053216,r=1118481;this.addBox(n,i,16,4,12,0,2,0),this.addBox(n,o,16,4,12,0,6,0),this.addBox(n,o,16.5,.3,12.5,0,8.15,0),this.addBox(n,r,16.6,.2,12.6,0,8.3,0);const l=5,c=14,d=-Math.PI*.5,h=Math.PI*.5;for(let u=0;u<c;u++){const p=u/(c-1),g=d+(h-d)*p,x=Math.sin(g)*l,m=-Math.cos(g)*l-3.5;this.addBox(n,a,1.3,2,.5,x,5.5,m,0,-g,0)}for(const u of[-5,0,5])this.addBox(n,4473924,2.5,2,.15,u,1.8,-6.1),this.addBox(n,2241348,2,1.6,.12,u,1.8,-6);this.addCyl(n,r,.1,.1,8,5,-8,4,-6.1),this.addCyl(n,r,.1,.1,8,5,8,4,-6.1),this.addBox(n,r,.3,.3,.3,-2,2.5,-6.15),this.addBox(n,o,17,.25,1.5,0,8,-7.2,.1,0,0),this.addBox(n,r,17.2,.1,1.6,0,8.12,-7.2,.1,0,0),n.position.set(t,0,e),this.scene.add(n)}buildHouseCortenPlaster(t,e){const n=new Nt,i=4868682,o=12081696,a=3684408,r=9060368;this.addBox(n,i,12,8,11,-7,4,0),this.addBox(n,i,12.3,.4,11.3,-7,8.2,0),this.addBox(n,o,8,8.5,11,5,4.25,0),this.addBox(n,o,8.3,.4,11.3,5,8.7,0),this.addBox(n,a,2,9.5,11,-.5,4.75,0);for(let c=0;c<6;c++)this.addBox(n,r,.15,8.5,11.1,1.5+c*1.2,4.25,0);this.addCyl(n,13421704,.15,.15,.5,6,-5,5,-5.6),this.addCyl(n,13421704,.15,.15,.5,6,-9,5,-5.6),this.addBox(n,1118481,2.5,1.8,.3,-6,4.5,-5.7),this.addBox(n,2241348,2,1.4,.15,-6,4.5,-5.6),this.addBox(n,1118481,2.5,1.8,.3,-10,2.5,-5.7),this.addBox(n,2241348,2,1.4,.15,-10,2.5,-5.6),this.addCyl(n,9132587,.2,.3,8,6,-15,4,-3);const l=new D(new Nn(2.5,1.5,8),new j({color:2775578}));l.position.set(-15,8.75,-3),n.add(l),n.position.set(t,0,e),this.scene.add(n)}buildCoffeeShop(t,e){const n=new Nt;this.addBox(n,15788248,14,4,10,0,2,0),this.addBox(n,15261904,14.2,.18,10.2,0,4.09,0),this.addBox(n,1118481,14.6,.38,10.6,0,4.19,0);for(const o of[-3.8,3.8]){this.addBox(n,1118481,4,3.8,.14,o,2.1,-5.08);const a=new D(new Q(3.5,3.4,.1),new j({color:13140032,emissive:new Mt(10115616),emissiveIntensity:.7}));a.position.set(o,2.1,-5.06),n.add(a)}this.addBox(n,1118481,2,3,.14,0,1.5,-5.08),this.addBox(n,8014368,1.6,2.8,.2,0,1.4,-5.1),this.addBox(n,13410400,.1,.1,.12,.5,1.4,-5.1),this.addBox(n,12876352,13.5,.28,4,0,3.22,-7),this.addBox(n,10770984,13.5,.6,.18,0,2.95,-9.05);for(const o of[-4.5,0,4.5])this.addCyl(n,8947832,.07,.07,3,5,o,1.5,-9.1);this.addBox(n,16777215,5,.36,.12,0,3.06,-8.96);for(const[o,a]of[[-5,-11.5],[0,-11.5],[5,-11.5]]){this.addCyl(n,9068608,.75,.75,.1,12,o,1.12,a),this.addCyl(n,6963232,.07,.07,1.12,6,o,.56,a);for(const r of[-1,1])this.addCyl(n,9068608,.32,.32,.09,8,o+r*.85,.82,a),this.addCyl(n,6963232,.05,.05,.82,5,o+r*.85,.41,a)}for(let o=0;o<5;o++)this.addCyl(n,16777215,.22-o*.008,.24-o*.008,.3,8,7.1,.22+o*.28,-3.5);this.addBox(n,3355445,1.1,1.7,.12,-3.5,1.1,-5.1),this.addBox(n,15658734,.72,.08,.05,-3.5,1.6,-5.04),this.addBox(n,15658734,.55,.08,.05,-3.5,1.42,-5.04),this.addBox(n,15658734,.63,.08,.05,-3.5,1.24,-5.04),this.addBox(n,15658734,.48,.08,.05,-3.5,1.06,-5.04);for(const o of[-4,0,4]){const a=new D(new Q(.25,.25,.25),new j({color:16764040,emissive:new Mt(16755268),emissiveIntensity:.8}));a.position.set(o,3.7,-2),n.add(a)}this.addCyl(n,3355443,.3,.3,12,8,0,6,-8);const i=new D(new Q(10,3,.4),new j({color:13918762,emissive:new Mt(9121808),emissiveIntensity:.6}));i.position.set(0,13,-8),i.castShadow=!0,n.add(i),this.addBox(n,16777215,8,.2,.5,0,14.2,-7.85),this.addBox(n,16777215,8,.2,.5,0,12.8,-7.85),this.addCyl(n,16777215,.8,1,1.5,12,0,15.5,-8),this.addCyl(n,7027242,.4,.4,.3,8,0,16.4,-8),n.position.set(t,0,e),this.scene.add(n)}buildWorkshop(t,e){const n=new Nt,i=4868676,o=2236960,a=15657176,r=3355440,l=1118480;this.addBox(n,i,30,8,20,0,4,0),this.addBox(n,1710616,30.2,.35,20.2,0,.18,0);const c=12*Math.PI/180,d=new j({color:o}),h=new D(new Q(30.5,.35,11),d);h.castShadow=!0,h.rotation.x=c,h.position.set(0,8.6,-4.5),n.add(h);const u=new D(new Q(30.5,.35,11),d);u.castShadow=!0,u.rotation.x=-c,u.position.set(0,8.6,4.5),n.add(u),this.addBox(n,1118480,30.5,.55,.8,0,9.3,0),this.addBox(n,a,24,3.2,.45,0,7.4,-10.23),this.addBox(n,r,22,2.5,.28,0,7.4,-10.25),this.addBox(n,16775920,24.2,.22,.46,0,9.11,-10.23),this.addBox(n,16775920,24.2,.22,.46,0,5.89,-10.23),this.addBox(n,16775920,.22,3.2,.46,-12.11,7.4,-10.23),this.addBox(n,16775920,.22,3.2,.46,12.11,7.4,-10.23),this.addBox(n,12674667,24,.3,.44,0,5.75,-10.22),this.addBox(n,16763972,8,.65,.35,0,5.5,-10.2),this.addBox(n,2763296,7.5,.42,.38,0,5.5,-10.21),this.addBox(n,l,12,5,.25,0,2.5,-10.15),this.addBox(n,2236960,.2,5,.25,-6.2,2.5,-10.15),this.addBox(n,2236960,.2,5,.25,6.2,2.5,-10.15);for(let _=1;_<=4;_++)this.addBox(n,1710616,11.8,.08,.28,0,_,-10.14);this.addBox(n,2236960,12.6,.4,.28,0,5.2,-10.14);const p=3359829;for(let _=-6;_<=6;_+=4)this.addBox(n,p,.16,1.2,2.8,15.09,7.2,_),this.addBox(n,p,.16,1.2,2.8,-15.09,7.2,_);this.addBox(n,2236960,.2,.18,20,15.1,7.9,0),this.addBox(n,2236960,.2,.18,20,15.1,6.6,0),this.addBox(n,2236960,.2,.18,20,-15.1,7.9,0),this.addBox(n,2236960,.2,.18,20,-15.1,6.6,0),this.addCyl(n,2236960,.12,.12,8,5,-15,4,-10),this.addCyl(n,2236960,.12,.12,8,5,15,4,-10),this.addCyl(n,2236960,.12,.12,8,5,-15,4,10),this.addCyl(n,2236960,.12,.12,8,5,15,4,10),this.addCyl(n,12884602,.85,.9,1.5,10,9.5,.75,-11.5),this.addCyl(n,6974050,.85,.9,1.5,10,9.5,2.35,-11.5),this.addCyl(n,8947840,.92,.92,.12,10,9.5,1.56,-11.5),this.addCyl(n,8947840,.92,.92,.12,10,9.5,3.16,-11.5),this.addCyl(n,12884602,.85,.9,1.5,10,11.2,.75,-12.2),this.addCyl(n,8947840,.92,.92,.12,10,11.2,1.56,-12.2),this.addBox(n,8018488,4.5,.18,2.5,10.2,.09,-11.8),this.addBox(n,9074776,6,1,2.2,0,.5,-9.2),this.addBox(n,13154448,6.3,.18,2.4,0,1.09,-9.2),this.addBox(n,15658700,.8,.05,1,.8,1.19,-9.3),this.addBox(n,4473924,.12,.25,.12,.8,1.22,-9),this.addBox(n,5921362,2.8,1.8,2.8,-8.5,.9,-11.5);const g=new D(new Wt(.75,.75,2.2,10),new j({color:8947840}));g.rotation.z=35*Math.PI/180,g.position.set(-8.5,1.6,-11.5),g.castShadow=!0,n.add(g),this.addCyl(n,3355440,.4,.4,.3,8,-8.5,.2,-10.8),this.addBox(n,4868676,3.5,2.2,2.5,-11.5,1.1,-13),this.addBox(n,8947840,3,.5,2,-11.5,2.35,-13),this.addBox(n,6710880,2.2,1.2,1.4,-11.5,3.1,-13);const x=new j({color:10131600}),m=new D(new de(20,8),x);m.rotation.x=-Math.PI/2,m.position.set(0,.008,-14),m.receiveShadow=!0,n.add(m),this.addBox(n,a,.3,2.5,6,15.16,4,0),this.addBox(n,r,.32,2,5.5,15.17,4,0);const f=Kc(1024),w=new j({map:f,transparent:!0,depthWrite:!1}),S=new D(new de(14,14),w);S.position.set(0,4.5,-10.4),n.add(S),n.position.set(t,0,e),this.scene.add(n),this.collisionWorld.addBox(t,e,15.5,10.5)}createZebraCrossings(){const t=new j({color:15658734}),e=new j({color:1118481});for(let n=-200;n<=200;n+=40)for(let i=-200;i<=200;i+=40){if(Math.abs(n)>200||Math.abs(i)>200)continue;const o=[-3.2,-1.6,0,1.6,3.2],a=[-2.4,-.8,.8,2.4],r=2;for(const l of o){const c=new D(new Q(.8,.03,r),t);c.position.set(n+l,.05,i-5),this.scene.add(c)}for(const l of a){const c=new D(new Q(.8,.03,r),e);c.position.set(n+l,.04,i-5),this.scene.add(c)}for(const l of o){const c=new D(new Q(.8,.03,r),t);c.position.set(n+l,.05,i+5),this.scene.add(c)}for(const l of a){const c=new D(new Q(.8,.03,r),e);c.position.set(n+l,.04,i+5),this.scene.add(c)}for(const l of o){const c=new D(new Q(r,.03,.8),t);c.position.set(n-5,.05,i+l),this.scene.add(c)}for(const l of a){const c=new D(new Q(r,.03,.8),e);c.position.set(n-5,.04,i+l),this.scene.add(c)}for(const l of o){const c=new D(new Q(r,.03,.8),t);c.position.set(n+5,.05,i+l),this.scene.add(c)}for(const l of a){const c=new D(new Q(r,.03,.8),e);c.position.set(n+5,.04,i+l),this.scene.add(c)}}}createRoadCorners(){const t=new j({color:13156528}),e=new j({color:11051160}),n=[{dx:-6,dz:-6,theta:3*Math.PI/2},{dx:6,dz:-6,theta:Math.PI},{dx:-6,dz:6,theta:0},{dx:6,dz:6,theta:Math.PI/2}];for(let i=-200;i<=200;i+=40)for(let o=-200;o<=200;o+=40)for(const{dx:a,dz:r,theta:l}of n){const c=i+a,d=o+r,h=new D(new ma(2,24,l,Math.PI/2),t);h.rotation.x=-Math.PI/2,h.position.set(c,.021,d),h.receiveShadow=!0,this.scene.add(h);const u=new D(new li(1.8,2,24,1,l,Math.PI/2),e);u.rotation.x=-Math.PI/2,u.position.set(c,.08,d),u.receiveShadow=!0,this.scene.add(u)}}onUpdate(t){this.updateCallbacks.push(t)}createSkyDome(){const t=new he(800,32,16);t.scale(-1,1,1);const e=new Ce({uniforms:{topColor:{value:new Mt(4491468)},bottomColor:{value:new Mt(12970229)},offset:{value:100},exponent:{value:.8}},vertexShader:`
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
      `,side:Re,depthWrite:!1}),n=new D(t,e);this.scene.add(n)}createClouds(){const t=new j({color:16777215,transparent:!0,opacity:.85});for(let e=0;e<10;e++){const n=new Nt,i=3+Math.floor(Math.random()*4);for(let o=0;o<i;o++){const a=8+Math.random()*12,r=new D(new he(a,7,5),t);r.position.set(o*15-i*7+(Math.random()-.5)*10,(Math.random()-.5)*8,(Math.random()-.5)*15),n.add(r)}n.position.set((Math.random()-.5)*600,80+Math.random()*60,(Math.random()-.5)*600),this.scene.add(n),this.clouds.push({mesh:n,speed:.3+Math.random()*.7})}}createPuddles(){const t=new j({color:8952234,transparent:!0,opacity:.35});for(let e=0;e<20;e++){const n=2+Math.random()*4,i=1+Math.random()*2,o=new D(new de(n,i),t);o.rotation.x=-Math.PI/2,o.position.set((Math.random()-.5)*300,.015,(Math.random()-.5)*300),this.scene.add(o)}}addRooftopDetails(t,e,n,i,o,a){const r=this.seed(o,a,200);if(r>.3){const l=new Nt;this.addBox(l,8947840,1.5,.6,1,0,0,0),this.addBox(l,6710880,1.5,.1,.8,0,.35,.05),l.position.set(e/2-2,i+.3,n/2-2),t.add(l)}if(r>.7&&i>8){const l=new D(new Wt(1,1,1.8,10),new j({color:9139029}));l.position.set(-e/2+2,i+.9,0),t.add(l);for(const[c,d]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]]){const h=new D(new Wt(.06,.06,1.5,4),new j({color:5592400}));h.position.set(-e/2+2+c,i+.1,d),t.add(h)}}if(r>.5&&r<.8){const l=new D(new he(.4,8,4,0,Math.PI*2,0,Math.PI/2),new j({color:13421772}));l.position.set(e/2-1,i+.2,-n/2+1),l.rotation.x=-Math.PI/4,t.add(l)}if(r<.4){const l=new D(new Wt(.04,.04,3,4),new j({color:4473924}));l.position.set(0,i+1.5,0),t.add(l),this.addBox(t,4473924,2,.05,.05,0,i+2.5,0)}r>.4&&r<.6&&this.addBox(t,7829360,2,.4,.4,e/4,i+.2,-n/4)}addHydrant(t,e){const n=new Nt,i=new j({color:13378082}),o=new j({color:11145489}),a=new D(new Wt(.25,.28,.6,8),i);a.position.set(0,.3,0),n.add(a);const r=new D(new Wt(.18,.18,.12,8),o);r.position.set(0,.66,0),n.add(r);for(const l of[-1,1]){const c=new D(new Wt(.06,.06,.2,6),i);c.rotation.z=Math.PI/2,c.position.set(l*.3,.3,0),n.add(c)}n.position.set(t,0,e),this.scene.add(n)}addBin(t,e){const n=new Nt,i=new j({color:4473924}),o=new j({color:5592405}),a=new D(new Wt(.2,.22,.7,8),i);a.position.set(0,.35,0),n.add(a);const r=new D(new Wt(.22,.22,.08,8),o);r.position.set(0,.74,0),n.add(r),n.position.set(t,0,e),this.scene.add(n)}addBollard(t,e){const n=new Nt,i=new j({color:10066329}),o=new j({color:7829367}),a=new D(new Wt(.1,.1,.6,8),i);a.position.set(0,.3,0),n.add(a);const r=new D(new Wt(.14,.14,.08,8),o);r.position.set(0,.04,0),n.add(r),n.position.set(t,0,e),this.scene.add(n)}addBench(t,e,n=0){const i=new Nt,o=new j({color:9134144}),a=new j({color:5592405}),r=new D(new Q(1.2,.1,.4),o);r.position.set(0,.45,0),i.add(r);for(const c of[-.5,.5]){const d=new D(new Q(.05,.4,.4),a);d.position.set(c,.2,0),i.add(d)}const l=new D(new Q(1.2,.3,.08),o);l.position.set(0,.75,-.16),i.add(l),i.rotation.y=n,i.position.set(t,0,e),this.scene.add(i)}addBusStop(t,e,n=0){const i=new Nt,o=new j({color:13421772}),a=new j({color:4482730,transparent:!0,opacity:.7}),r=new D(new Wt(.05,.05,3.5,6),o);r.position.set(0,1.75,0),i.add(r);const l=new D(new Q(2,.05,.8),a);l.position.set(0,3.3,.4),i.add(l);const c=new D(new Q(.05,2.5,.8),a);c.position.set(0,2,0),i.add(c),i.rotation.y=n,i.position.set(t,0,e),this.scene.add(i)}addStreetLight(t,e,n=0,i=!1){const o=new Nt,a=new j({color:1118481}),r=new j({color:16771232,transparent:!0,opacity:.06}),l=new D(new Wt(.08,.1,6,6),a);l.position.set(0,3,0),o.add(l);const c=new D(new Q(.08,.08,1.5),a);c.position.set(0,6,-.75),c.rotation.x=-.2,o.add(c);const d=new D(new Q(.4,.15,.3),a);d.position.set(0,5.9,-1.4),o.add(d);const h=new D(new Nn(1.5,3,8,1,!0),r);if(h.rotation.x=Math.PI,h.position.set(0,4.4,-1.4),o.add(h),o.rotation.y=n,o.position.set(t,0,e),this.scene.add(o),i){const u=new _m(16771232,.8,15);u.position.set(t+Math.sin(n+Math.PI)*1.4,5.9,e+Math.cos(n+Math.PI)*1.4),this.scene.add(u)}}addTrafficLight(t,e,n=0){const i=new Nt,o=new j({color:1118481}),a=new D(new Wt(.07,.09,4.5,6),o);a.position.set(0,2.25,0),i.add(a);const r=new D(new Q(.5,1.4,.4),o);r.position.set(0,4.7,0),i.add(r);const l=[16720384,16750848,52292];for(let c=0;c<3;c++){const d=new D(new Wt(.15,.15,.08,8),new j({color:l[c]}));d.rotation.x=Math.PI/2,d.position.set(0,5.25-c*.45,-.21),i.add(d)}i.rotation.y=n,i.position.set(t,0,e),this.scene.add(i)}createStreetLights(){let n=0;const i=20;for(let o=-160;o<=160;o+=40)for(let a=-160;a<=160;a+=20){const c=Math.sqrt(o*o+a*a)<80&&n<i,d=(a%40+40)%40;Math.min(d,40-d)>6&&(this.addStreetLight(a,o-5.2,0,c),this.addStreetLight(a,o+5.2,Math.PI,c),c&&(n+=2));const h=(a%40+40)%40;if(Math.min(h,40-h)>6&&(this.addStreetLight(o+5.2,a,Math.PI/2,c),this.addStreetLight(o-5.2,a,-Math.PI/2,c),c&&(n+=2)),n>=i)return}}createTrafficLights(){for(let i=-160;i<=160;i+=40)for(let o=-160;o<=160;o+=40)this.addTrafficLight(i-5.2,o-5.2,Math.PI/4),this.addTrafficLight(i+5.2,o-5.2,-Math.PI/4),this.addTrafficLight(i-5.2,o+5.2,3*Math.PI/4),this.addTrafficLight(i+5.2,o+5.2,-3*Math.PI/4)}createStreetFurniture(){for(let n=-160;n<=160;n+=40)for(let i=-160;i<=160;i+=20){const o=this.seed(n,i,300),a=this.seed(n,i,301);if(o>.4){const c=o>.7?1:-1,d=(this.seed(i,n,302)-.5)*4,h=(i%40+40)%40;Math.min(h,40-h)>8&&(a<.3?this.addHydrant(i+d,n+c*5.2):a<.5?this.addBin(i+d,n+c*5.2):a<.65?this.addBollard(i+d,n+c*5.2):a<.75&&this.addBench(i+d,n+c*5.2))}const r=this.seed(i,n,303),l=this.seed(i,n,304);if(r>.4){const c=r>.7?1:-1,d=(this.seed(n,i,305)-.5)*4,h=(i%40+40)%40;Math.min(h,40-h)>8&&(l<.3?this.addHydrant(n+c*5.2,i+d):l<.5?this.addBin(n+c*5.2,i+d):l<.65?this.addBollard(n+c*5.2,i+d):l<.75&&this.addBench(n+c*5.2,i+d,Math.PI/2))}}for(let n=-160;n<=160;n+=40)for(let i=-160;i<=160;i+=160){const o=(i%40+40)%40;Math.min(o,40-o)>8&&this.addBusStop(i,n+5.5,0);const a=(i%40+40)%40;Math.min(a,40-a)>8&&this.addBusStop(n+5.5,i,Math.PI/2)}this.createStreetLights(),this.createTrafficLights()}addGlassBox(t,e,n,i,o,a,r,l){const c=Math.random()>.6?new Mt(2241348):new Mt(1122867),d=new D(new Q(n,i,o),new j({color:e,emissive:c,emissiveIntensity:Math.random()*.4}));d.position.set(a,r,l),d.castShadow=!0,d.receiveShadow=!0,t.add(d)}buildToiletBlock(t,e){const n=new Nt;this.addBox(n,11577496,10,3.5,8,0,1.75,0),this.addBox(n,10064008,11,.3,9,0,3.65,0),this.addBox(n,2236960,1.6,2.4,.2,-2.2,1.2,-4.05),this.addBox(n,2236960,1.6,2.4,.2,2.2,1.2,-4.05),this.addBox(n,15263968,10.1,.4,8.1,0,1.8,0),this.addBox(n,3359829,8,.8,.15,0,3.1,-4.05),this.addBox(n,16777215,6,.2,.1,0,3.2,-4.03),this.addCyl(n,4473920,.15,.15,8,6,0,4,-5.5),this.addBox(n,2201331,4,1.5,.3,0,8.75,-5.5),this.addBox(n,16777215,3,.25,.1,0,9,-5.38),this.addBox(n,16777215,3,.25,.1,0,8.5,-5.38);const i=new j({color:6600182,emissive:new Mt(1402304),emissiveIntensity:.4}),o=new D(new he(.7,8,6),i);o.position.set(0,10.5,-5.5),n.add(o),n.position.set(t,0,e),this.scene.add(n)}start(){const t=e=>{const n=Math.min((e-this.lastTime)/1e3,.05);this.lastTime=e;for(const i of this.updateCallbacks)i(n);for(const i of this.clouds)i.mesh.position.x-=i.speed*n,i.mesh.position.x<-350&&(i.mesh.position.x=350);this.composer.render(),requestAnimationFrame(t)};requestAnimationFrame(t)}}const Qc=.9,kn={Matt:{name:"Matt",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:6044190,hairStyle:"short"},Jose:{name:"Jose",skinColor:12884592,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2763306,hairColor:657930,hairStyle:"dreadlocks"},Jarrad:{name:"Jarrad",skinColor:13936768,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236976,hairColor:1710618,hairStyle:"topknot",glassesColor:2236962,hasPhone:!0},Phil:{name:"Phil",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:3821696,hairColor:12632248,hairStyle:"silver",glassesColor:11053216},Tsuyoshi:{name:"Tsuyoshi",skinColor:12093528,shirtColor:657930,shirtLogoColor:16777215,pantsColor:2236960,hairColor:657930,hairStyle:"mohawk"},Fabio:{name:"Fabio",skinColor:12488288,shirtColor:1801924,shirtLogoColor:16777215,pantsColor:2631728,hairColor:1708040,hairStyle:"bun",glassesColor:2759176},Joe:{name:"Joe",skinColor:13934704,shirtColor:15777792,shirtLogoColor:1710618,pantsColor:2763320,hairColor:3811866,hairStyle:"short",helmetColor:16119280,hiVisBands:!0},Mikayla:{name:"Mikayla",skinColor:13936768,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:1708064,hairColor:10035780,hairStyle:"bun"},Connie:{name:"Connie",skinColor:15255704,shirtColor:15789544,shirtLogoColor:1118481,pantsColor:2763322,hairColor:16109664,hairStyle:"wildblonde"}};class Ms{constructor(t){C(this,"group");C(this,"mixer");C(this,"walkAction");C(this,"idleAction");C(this,"currentAction");C(this,"logoMesh");this.group=new Nt,this._build(t),this.mixer=new Lm(this.group);const e=this._buildWalkClip(),n=this._buildIdleClip();this.walkAction=this.mixer.clipAction(e),this.idleAction=this.mixer.clipAction(n),this.idleAction.play(),this.currentAction=this.idleAction}_build(t){const e=new Ze;e.name="Hip",e.position.set(0,1,0);const n=new Ze;n.name="Spine",n.position.set(0,.55,0);const i=new Ze;i.name="Head",i.position.set(0,.65,0);const o=new Ze;o.name="LShoulder",o.position.set(-.4,.38,0);const a=new Ze;a.name="LForeArm",a.position.set(0,-.36,0);const r=new Ze;r.name="RShoulder",r.position.set(.4,.38,0);const l=new Ze;l.name="RForeArm",l.position.set(0,-.36,0);const c=new Ze;c.name="LHip",c.position.set(-.16,-.05,0);const d=new Ze;d.name="LKnee",d.position.set(0,-.5,0);const h=new Ze;h.name="RHip",h.position.set(.16,-.05,0);const u=new Ze;u.name="RKnee",u.position.set(0,-.5,0),e.add(n),n.add(i),n.add(o),o.add(a),n.add(r),r.add(l),e.add(c),c.add(d),e.add(h),h.add(u),this.group.add(e);const p=S=>new j({color:S}),g=(S,_,I,A,T,R=0,b=0,y=0)=>{const P=new D(new Q(I,A,T),p(_));P.position.set(R,b,y),P.castShadow=!0,S.add(P)},x=(S,_,I,A,T=0,R=0,b=0)=>{const y=new D(new Wt(I,I,A,8),p(_));y.position.set(T,R,b),y.castShadow=!0,S.add(y)},m=(S,_,I,A=0,T=0,R=0)=>{const b=new D(new he(I,10,8),p(_));b.position.set(A,T,R),b.castShadow=!0,S.add(b)};g(n,t.shirtColor,.5,.56,.28,0,.02,0),t.hiVisBands&&(g(n,16777215,.52,.06,.3,0,.18,0),g(n,16777215,.52,.06,.3,0,-.1,0));const f=this._makeLogo(t),w=new D(new de(.44,.5),new He({map:f,transparent:!0,depthWrite:!1}));if(w.position.set(0,.02,.145),n.add(w),this.logoMesh=w,g(e,t.pantsColor,.44,.2,.26,0,0,0),x(o,t.shirtColor,.08,.34,0,-.17,0),x(r,t.shirtColor,.08,.34,0,-.17,0),t.hiVisBands&&(g(o,16777215,.18,.06,.18,0,-.1,0),g(r,16777215,.18,.06,.18,0,-.1,0)),x(a,t.skinColor,.07,.3,0,-.15,0),x(l,t.skinColor,.07,.3,0,-.15,0),g(a,t.skinColor,.13,.11,.09,0,-.32,0),g(l,t.skinColor,.13,.11,.09,0,-.32,0),t.hasPhone){const S=new j({color:1118484}),_=new D(new Q(.11,.19,.013),S);_.position.set(.01,-.38,.05),l.add(_);const I=new j({color:2767445,emissive:1714756}),A=new D(new de(.085,.15),I);A.position.set(0,0,.008),_.add(A)}x(c,t.pantsColor,.11,.46,0,-.23,0),x(h,t.pantsColor,.11,.46,0,-.23,0),x(d,t.pantsColor,.09,.42,0,-.21,0),x(u,t.pantsColor,.09,.42,0,-.21,0),g(d,1710616,.19,.12,.24,0,-.46,.03),g(u,1710616,.19,.12,.24,0,-.46,.03),x(i,t.skinColor,.09,.16,0,-.08,0),m(i,t.skinColor,.21,0,.1,0),g(i,2236962,.055,.035,.02,-.07,.12,.2),g(i,2236962,.055,.035,.02,.07,.12,.2),this._buildHair(i,t,p),t.glassesColor!==void 0&&g(i,t.glassesColor,.24,.055,.015,0,.12,.21),t.helmetColor!==void 0&&(g(i,t.helmetColor,.5,.07,.5,0,.25,-.01),g(i,t.helmetColor,.38,.18,.38,0,.34,-.01))}_buildHair(t,e,n){const i=n(e.hairColor),o=(a,r,l,c)=>{const d=new D(a,i);d.position.set(r,l,c),t.add(d)};switch(e.hairStyle){case"short":case"silver":o(new he(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),e.hairStyle==="silver"&&(o(new Q(.11,.18,.13),-.19,.06,0),o(new Q(.11,.18,.13),.19,.06,0));break;case"dreadlocks":o(new he(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0);for(const[a,r]of[[-.12,0],[.12,0],[0,-.16],[-.08,-.1],[.08,-.1]])o(new Wt(.035,.022,.38,6),a,-.07,r);break;case"mohawk":o(new Q(.09,.26,.4),0,.28,0);break;case"bun":o(new he(.215,8,5,0,Math.PI*2,0,Math.PI*.5),0,.1,0),o(new he(.09,7,6),0,.05,-.19);break;case"topknot":{o(new he(.215,8,5,0,Math.PI*2,0,Math.PI*.45),0,.08,0);const a=new D(new Wt(.06,.08,.18,7),i);a.position.set(0,.3,0),t.add(a),o(new he(.085,7,6),0,.41,0);const r=new j({color:1118481}),l=new D(new vo(.075,.018,6,10),r);l.rotation.x=Math.PI/2,l.position.set(0,.29,0),t.add(l);break}case"wildblonde":{o(new he(.225,8,5,0,Math.PI*2,0,Math.PI*.55),0,.1,0);const a=[[-.2,-.18,.04,.3,0],[.2,-.18,.04,-.3,0],[-.14,-.22,-.14,.2,.15],[.14,-.22,-.14,-.2,.15],[0,-.26,-.18,0,0],[-.1,-.16,.16,-.15,0],[.1,-.16,.16,.15,0]];for(const[r,l,c,d,h]of a){const u=new D(new Wt(.045,.02,.5,5),i);u.position.set(r,l,c),u.rotation.z=d,u.rotation.x=h,t.add(u)}break}}}setLogoTexture(t){const e=this.logoMesh.material;e.map=t,e.needsUpdate=!0}_makeLogo(t){return Jc(t.shirtColor)}_buildWalkClip(){const t=Math.PI/180,e=.8,n=[0,.2,.4,.6,.8],i=(o,a=0,r=0)=>Array.from(new qe().setFromEuler(new Ge(o*t,a*t,r*t)).toArray());return new cs("walk",e,[new pe("LHip.quaternion",n,[...i(-35),...i(0),...i(35),...i(0),...i(-35)]),new pe("RHip.quaternion",n,[...i(35),...i(0),...i(-35),...i(0),...i(35)]),new pe("LKnee.quaternion",n,[...i(-5),...i(-18),...i(-28),...i(-12),...i(-5)]),new pe("RKnee.quaternion",n,[...i(-28),...i(-12),...i(-5),...i(-18),...i(-28)]),new pe("LShoulder.quaternion",n,[...i(28,0,8),...i(0,0,8),...i(-28,0,8),...i(0,0,8),...i(28,0,8)]),new pe("RShoulder.quaternion",n,[...i(-28,0,-8),...i(0,0,-8),...i(28,0,-8),...i(0,0,-8),...i(-28,0,-8)]),new pe("Hip.quaternion",n,[...i(0,0,4),...i(0,0,0),...i(0,0,-4),...i(0,0,0),...i(0,0,4)]),new si("Hip.position",n,[0,1.02,0,0,1,0,0,1.02,0,0,1,0,0,1.02,0])])}_buildIdleClip(){const t=Math.PI/180,e=2.4,n=[0,.6,1.2,1.8,2.4],i=(o,a=0,r=0)=>Array.from(new qe().setFromEuler(new Ge(o*t,a*t,r*t)).toArray());return new cs("idle",e,[new pe("Spine.quaternion",n,[...i(0,0,1),...i(0,0,0),...i(0,0,-1),...i(0,0,0),...i(0,0,1)]),new si("Hip.position",n,[0,1,0,0,1.01,0,0,1,0,0,.99,0,0,1,0]),new pe("LShoulder.quaternion",[0,2.4],[...i(0,0,8),...i(0,0,8)]),new pe("RShoulder.quaternion",[0,2.4],[...i(0,0,-8),...i(0,0,-8)])])}buildJumpRopeClip(){const t=Math.PI/180,e=Qc,n=[0,.225,.45,.675,.9],i=(o,a=0,r=0)=>Array.from(new qe().setFromEuler(new Ge(o*t,a*t,r*t)).toArray());return new cs("jumprope",e,[new si("Hip.position",n,[0,1,0,0,1.28,0,0,1,0,0,1.28,0,0,1,0]),new pe("LShoulder.quaternion",[0,.5],[...i(0,0,52),...i(0,0,52)]),new pe("RShoulder.quaternion",[0,.5],[...i(0,0,-52),...i(0,0,-52)]),new pe("LForeArm.quaternion",[0,.5],[...i(-20),...i(-20)]),new pe("RForeArm.quaternion",[0,.5],[...i(-20),...i(-20)]),new pe("LKnee.quaternion",n,[...i(-22),...i(-5),...i(-22),...i(-5),...i(-22)]),new pe("RKnee.quaternion",n,[...i(-22),...i(-5),...i(-22),...i(-5),...i(-22)]),new pe("Spine.quaternion",n,[...i(8),...i(2),...i(8),...i(2),...i(8)])])}setWalking(t){const e=t?this.walkAction:this.idleAction;e!==this.currentAction&&(e.reset().play(),this.currentAction.crossFadeTo(e,.2,!1),this.currentAction=e)}update(t){this.mixer.update(t)}}const $m={Jose:{x:-80,z:-40},Jarrad:{x:40,z:-80},Matt:{x:80,z:40},Phil:{x:-40,z:80},Tsuyoshi:{x:120,z:-40},Fabio:{x:-120,z:40},Joe:{x:0,z:-120}},Jm={Matt:["Troweled Earth is the best product on the market. Full stop. Don't argue.","Jose has a whole music room and a cigar collection but can't reply to a text message. That's the guy.","I've been up since 4am and done 80 square metres. How's your morning?","Jarrad's got opinions on how everyone else lives their life. Zero opinions on his own. Interesting.","Antique Stucco, Hemp Render, Tadelakt — I'll do all three before lunch.","Jose called himself Wall Jesus in front of a client. An actual client. I was standing right there.","Jarrad once sent me a 400-word message about something I said. I read the first line. Seemed about right.","Right. Tools out. Let's get this done."],Jose:["I didn't apply plaster. I gave the wall a soul. Big difference.","Matt is a great man. Big heart. Absolutely no volume control. You can hear him from the next suburb.","I was in my music room last night finishing a track. Then I invented a new finish. Big night.","My cigar costs more than your primer. It is worth it.","Jarrad sends meeting agendas. For conversations. Between two people. In a van.","Wall Jesus doesn't do touch-ups. Wall Jesus does originals.","Matt apologises for nothing. I respect it. Also it is sometimes a problem.","Other plasterers apply product. I apply vision. Light a cigar and watch."],Jarrad:["Been waiting fifteen minutes. Did you read the TDS? Because I did. Twice.","Hang on — just finishing something.","Jose has a whole spiritual identity built around being mysterious. He's from Footscray. I looked it up.","I'm not micro-managing. I'm preventing the disaster you are about to cause.","Matt once introduced himself to a client by saying 'I don't do small talk'. To their face. At the door.","Have you seen my sister? She's supposed to be here. She's doing jump rope.","I would do it myself but then nothing else would get done. Look, I've already typed up a plan.","Mikayla borrowed my trowel again. I have a spare. I'm not lending that one either.","This is interesting. Have you heard of this Epstein list thing?","Who designed this waypoint system? Actually — don't answer that. I'll figure it out."],Phil:["I've been in this game longer than some of these buildings.","Back in my day we didn't have sealers. We just hoped.","Forty years in plaster. My knees disagree with the timeline.","That's a nice van. My first van had a hole in the floor.","The youngsters think Marbellino is new. I did it before it had a name.","Seven year warranty. I've outlasted three of those already.","If the surface isn't right, no product will fix it. That's wisdom.","I'm too old for emergencies. Call Darren."],Tsuyoshi:["My trowel... she is like samurai sword. Must be respected.","In Japan, we say... actually this is different in Australia. But same feeling.","I study engineering. Also I study this wall. Both are... very complex.","The angle of application is most important. Like blade angle. Very critical.","I think about the wall much. The wall also thinks, I believe.","This surface... it is speaking to me. I will listen before I apply.","My sensei say: good craftsman blame tool. But I never blame my trowel. She is perfect.","One day I will design the building. And also I will plaster it. Both very satisfying."],Fabio:["Ehhhh — in Italy, we do not rush the plaster. She knows when she is ready.","I am Fabio. You have heard of me, yes? Ehhhh — of course you have.","Last night I find a pizza place — thin base, wood fire, proper San Marzano. Ehhhh. I almost cry.","I have plastered villas in Tuscany. This job is also... acceptable. Ehhhh.","The colour must be chosen with the soul, not the brain. Ehhhh — the brain is for pizza toppings.","I put my heart into every wall. Same as I put my heart into a good margherita. Ehhhh.","Madonna mia, this surface has potential. Not as much potential as a good pizza, but still.","Other men apply plaster. Fabio makes love to the wall. Artistically speaking. Ehhhh.","You want to know the secret of perfect render? Patience. Same as perfect pizza dough. Ehhhh — same thing.","I carry my trowel like a man carries his last slice. With respect. With both hands."],Joe:["Don't judge me by the helmet. I contain multitudes.","Good honest work. That's all any of us can do.","I don't talk politics on site. But I do have a bumper sticker.","Hard work, good product, fair pay. That's the whole philosophy.","Free Palestine. That's all I'll say. Back to work.","I've been boycotting certain brands for three years. You'd be surprised.","The helmet stays on. Most of the opinions stay in.","Solid crew. Good product. Just don't ask me about the news."]},Km=15,Zm=12e3;class Qm{constructor(t){C(this,"scene");C(this,"crewMap",new Map);C(this,"lastDialogue",new Map);C(this,"dialogueIndex",new Map);this.scene=t}spawnCrewAtCityPositions(){for(const[t,e]of Object.entries($m)){const n=kn[t];if(!n)continue;const i=new Ms(n);i.group.scale.set(2,2,2);const o=new Nt;o.add(i.group);const a=new D(new li(1.2,1.6,32),new He({color:16763904,side:ze}));a.rotation.x=-Math.PI/2,a.position.y=.05,o.add(a);const r=document.createElement("canvas");r.width=256,r.height=64;const l=r.getContext("2d");l.fillStyle="rgba(0,0,0,0.75)",l.roundRect?l.roundRect(2,2,252,60,8):l.rect(2,2,252,60),l.fill(),l.fillStyle="#fff",l.font="bold 30px Arial",l.textAlign="center",l.textBaseline="middle",l.fillText(t.toUpperCase(),128,32);const c=new D(new de(2.2,.55),new He({map:new vs(r),transparent:!0,depthWrite:!1}));c.position.set(0,8.5,0),c.renderOrder=1,o.add(c),o.position.set(e.x,0,e.z),this.scene.add(o),this.crewMap.set(t,{character:i,wrapper:o,pos:e}),this.lastDialogue.set(t,0),this.dialogueIndex.set(t,Math.floor(Math.random()*8))}}updateAll(t){for(const{character:e}of this.crewMap.values())e.update(t)}checkProximityDialogue(t,e){const n=Date.now();for(const[i,{wrapper:o,pos:a}]of this.crewMap.entries()){if(!o.visible)continue;const r=t-a.x,l=e-a.z;if(Math.sqrt(r*r+l*l)>Km)continue;const c=this.lastDialogue.get(i)??0;if(n-c<Zm)continue;const d=Jm[i];if(!d)continue;const h=this.dialogueIndex.get(i)??0,u=d[h%d.length];return this.dialogueIndex.set(i,h+1),this.lastDialogue.set(i,n),{name:i,line:u,pos:a}}return null}hideCrew(t){const e=this.crewMap.get(t);e&&(e.wrapper.visible=!1)}showAllCrew(){for(const{wrapper:t}of this.crewMap.values())t.visible=!0}showCrew(t){const e=this.crewMap.get(t);e&&(e.wrapper.visible=!0)}getCrewPosition(t){var e;return((e=this.crewMap.get(t))==null?void 0:e.pos)??{x:0,z:0}}dispose(){for(const{wrapper:t}of this.crewMap.values())this.scene.remove(t);this.crewMap.clear()}}class tg{constructor(t){C(this,"mesh");C(this,"velocity",new L);C(this,"heading",0);C(this,"bodyGroup");C(this,"suspensionY",0);C(this,"suspensionVel",0);this.mesh=new Nt,this.bodyGroup=new Nt,this.mesh.add(this.bodyGroup);const e=new j({color:1118481}),n=new D(new Q(2.4,1.6,3.2),e);n.position.set(0,.8,.8),n.castShadow=!0,n.receiveShadow=!0,this.bodyGroup.add(n);const i=new j({color:1579032}),o=new D(new Q(2.4,1.4,1.6),i);o.position.set(0,.7,-1.6),o.castShadow=!0,o.receiveShadow=!0,this.bodyGroup.add(o);const a=new j({color:2241348}),r=new D(new Q(2,1,.1),a);r.rotation.x=-.18,r.position.set(0,1.15,-2.36),r.castShadow=!0,r.receiveShadow=!0,this.bodyGroup.add(r);const l=new j({color:1381653}),c=new D(new Q(2.3,.15,4.6),l);c.position.set(0,1.675,0),c.castShadow=!0,c.receiveShadow=!0,this.bodyGroup.add(c);const d=new j({color:12674667}),h=new D(new Q(.05,.35,3),d);h.position.set(-1.23,.85,.5),h.castShadow=!0,h.receiveShadow=!0,this.bodyGroup.add(h);const u=new D(new Q(.05,.35,3),d);u.position.set(1.23,.85,.5),u.castShadow=!0,u.receiveShadow=!0,this.bodyGroup.add(u);const p=new j({color:3359829}),g=new D(new Q(.05,.4,.5),p);g.position.set(-1.22,1.1,-1.7),g.castShadow=!0,g.receiveShadow=!0,this.bodyGroup.add(g);const x=new D(new Q(.05,.4,.5),p);x.position.set(1.22,1.1,-1.7),x.castShadow=!0,x.receiveShadow=!0,this.bodyGroup.add(x);const m=new j({color:3355443});for(const At of[-.3,.3]){const ut=new D(new Q(.05,1.4,.1),m);ut.position.set(At,.8,2.46),ut.castShadow=!0,ut.receiveShadow=!0,this.bodyGroup.add(ut)}const f=new j({color:526344}),w=new D(new Q(.04,1.6,.05),f);w.position.set(-1.22,.8,-.8),this.bodyGroup.add(w);const S=new D(new Q(.04,1.6,.05),f);S.position.set(1.22,.8,-.8),this.bodyGroup.add(S);const _=new D(new Q(2.4,.04,.05),f);_.position.set(0,1.58,-.8),this.bodyGroup.add(_);const I=new j({color:1118481}),A=new j({color:3359829});for(const At of[-1,1]){const ut=At*1.3,Tt=new D(new Q(.18,.12,.22),I);Tt.position.set(ut,1.1,-1.7),this.bodyGroup.add(Tt);const $t=new D(new Q(.08,.1,.18),A);$t.position.set(ut+At*.05,1.1,-1.7),this.bodyGroup.add($t)}const T=new j({color:3355443});for(const At of[-.15,-.85]){const ut=new D(new Q(2.1,.07,.07),T);ut.position.set(0,1.78,At),this.bodyGroup.add(ut)}for(const At of[-.95,.95]){const ut=new D(new Q(.05,.05,.7),T);ut.position.set(At,1.78,-.5),this.bodyGroup.add(ut)}const R=Kc(512),b=new j({map:R,transparent:!0,depthWrite:!1}),y=new D(new de(2,3.8),b);y.rotation.x=-Math.PI/2,y.position.set(0,1.8,.9),this.bodyGroup.add(y);const P=new j({color:8947848});for(const At of[-.6,.6]){const ut=new D(new Q(.06,.06,.14),P);ut.position.set(At,.85,2.52),this.bodyGroup.add(ut)}const G=new D(new Q(2.4,.04,.06),f);G.position.set(0,1.2,2.47),this.bodyGroup.add(G);const O=new j({color:16733440}),H=new j({color:1118481}),$=new D(new Q(.05,.22,.82),O);$.position.set(-1.255,.86,.36),this.bodyGroup.add($);const Y=new D(new Q(.06,.05,.16),H);Y.position.set(-1.262,.96,.12),this.bodyGroup.add(Y);const X=new D(new Q(.06,.15,.05),H);X.position.set(-1.262,.86,.12),this.bodyGroup.add(X);const k=new D(new Q(.06,.18,.05),H);k.position.set(-1.262,.86,.38),this.bodyGroup.add(k);const nt=new D(new Q(.06,.04,.13),H);nt.position.set(-1.262,.95,.445),this.bodyGroup.add(nt);const dt=new D(new Q(.06,.04,.1),H);dt.position.set(-1.262,.86,.43),this.bodyGroup.add(dt);const vt=new D(new Q(.06,.04,.13),H);vt.position.set(-1.262,.77,.445),this.bodyGroup.add(vt);const Bt=new D(new Q(.06,.18,.05),H);Bt.position.set(-1.262,.86,.61),this.bodyGroup.add(Bt);const Xt=new D(new Q(.06,.18,.05),H);Xt.position.set(-1.262,.86,.73),this.bodyGroup.add(Xt);const K=new D(new Q(.06,.08,.13),H);K.position.set(-1.262,.92,.67),this.bodyGroup.add(K);const st=new D(new Q(.05,.22,.82),O);st.position.set(1.255,.86,.36),this.bodyGroup.add(st);const yt=new Wt(.38,.38,.28,10),J=new j({color:1118481}),ht=new j({color:8947848}),wt=[[-1.25,.38,-1.2,-1],[1.25,.38,-1.2,1],[-1.25,.38,1.3,-1],[1.25,.38,1.3,1]];for(const[At,ut,Tt,$t]of wt){const Ct=new D(yt,J);Ct.rotation.z=Math.PI/2,Ct.position.set(At,ut,Tt),Ct.castShadow=!0,Ct.receiveShadow=!0,this.mesh.add(Ct);const E=new Wt(.2,.2,.06,10),v=new D(E,ht);v.rotation.z=Math.PI/2,v.position.set(At+$t*.15,ut,Tt),v.castShadow=!0,v.receiveShadow=!0,this.mesh.add(v);const z=new j({color:3355443}),tt=new D(new Wt(.36,.38,.06,10),z);tt.rotation.z=Math.PI/2,tt.position.set(At+$t*.2,ut,Tt),this.mesh.add(tt);const it=new j({color:1118481}),Z=new D(new Q(.14,.1,.82),it);Z.position.set(At+$t*.07,ut+.3,Tt),this.bodyGroup.add(Z)}const Lt=new j({color:16777181,emissive:16777181,emissiveIntensity:.8});for(const At of[-.8,.8]){const ut=new D(new Q(.35,.2,.08),Lt);ut.position.set(At,.75,-2.41),ut.castShadow=!0,ut.receiveShadow=!0,this.bodyGroup.add(ut)}const Kt=new He({color:16777164,transparent:!0,opacity:.08,side:Re}),Vt=new Nn(1.5,8,8,1,!0);for(const At of[-.6,.6]){const ut=new D(Vt,Kt);ut.rotation.x=Math.PI/2,ut.position.set(At,.7,-3),this.bodyGroup.add(ut)}const ae=new j({color:16720384,emissive:16720384,emissiveIntensity:.8});for(const At of[-.8,.8]){const ut=new D(new Q(.3,.18,.06),ae);ut.position.set(At,.75,2.47),ut.castShadow=!0,ut.receiveShadow=!0,this.bodyGroup.add(ut)}const B=new j({color:3355443}),Se=new D(new Q(2,.08,.8),B);Se.position.set(0,1.77,-.5),Se.castShadow=!0,Se.receiveShadow=!0,this.bodyGroup.add(Se),this.mesh.position.set(0,0,0),t.add(this.mesh)}triggerBump(t){this.suspensionVel=-t*6}updateSuspension(t){const e=-80*this.suspensionY-10*this.suspensionVel;this.suspensionVel+=e*t,this.suspensionY+=this.suspensionVel*t,this.suspensionY=Math.max(-.35,Math.min(.35,this.suspensionY)),this.bodyGroup.position.y=this.suspensionY,this.bodyGroup.rotation.z=-this.suspensionY*.08}get suspensionMagnitude(){return Math.abs(this.suspensionY)+Math.abs(this.suspensionVel)*.04}}const an={maxSpeed:80,acceleration:55,reverseForce:45,friction:.985,steerRate:2.8,minSpeedToSteer:.5,gripAtLowSpeed:7,gripAtHighSpeed:1.2},Ul=40,eg=4,ng=30,ig=.8;function sg(s){for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s}function og(s){return Math.round(s/Ul)*Ul}function Nl(s,t){let e=0;const n=og((s+t)*.5);for(const i of[-1,1]){const o=n+i*eg;(s-o)*(t-o)<0&&e++}return e}class rg{constructor(t,e,n,i,o){C(this,"van");C(this,"input");C(this,"_speed",0);C(this,"velocityAngle",0);C(this,"prevPos",new L);C(this,"onBump");C(this,"onBuildingHit");C(this,"collisionWorld");C(this,"COLL_GRID",40);C(this,"COLL_ROAD_HALF",6.5);this.van=t,this.input=e,this.onBump=n,this.collisionWorld=i,this.onBuildingHit=o,this.velocityAngle=this.van.heading,this.prevPos.copy(this.van.mesh.position)}get speed(){return this._speed}update(t){var l;this.prevPos.copy(this.van.mesh.position);const e=Math.abs(this._speed);if(this.input.forward&&(this._speed+=an.acceleration*t),this.input.brake&&(this._speed-=an.reverseForce*t),this._speed*=Math.pow(an.friction,t*60),this._speed=Math.max(-80*.5,Math.min(an.maxSpeed,this._speed)),e>an.minSpeedToSteer){const c=this.input.left?-1:this.input.right?1:Math.abs(this.input.steerAxis)>.1?this.input.steerAxis:0,d=Math.min(1,e/15);this.van.heading+=c*an.steerRate*d*Math.sign(this._speed)*t}const n=Math.min(e/an.maxSpeed,1),i=an.gripAtLowSpeed+(an.gripAtHighSpeed-an.gripAtLowSpeed)*n,o=sg(this.van.heading-this.velocityAngle);this.velocityAngle+=o*i*t;const a=new L(Math.sin(this.velocityAngle),0,-Math.cos(this.velocityAngle));this.van.velocity.copy(a).multiplyScalar(this._speed),this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(t)),this.van.mesh.rotation.y=-this.van.heading;const r=245;if(this.van.mesh.position.x=Math.max(-r,Math.min(r,this.van.mesh.position.x)),this.van.mesh.position.z=Math.max(-r,Math.min(r,this.van.mesh.position.z)),this.collisionWorld){const c=this.collisionWorld.resolveCircle(this.van.mesh.position.x,this.van.mesh.position.z,1.8);(c.x!==this.van.mesh.position.x||c.z!==this.van.mesh.position.z)&&(this._speed*=.65,(l=this.onBuildingHit)==null||l.call(this),this.van.mesh.position.x=c.x,this.van.mesh.position.z=c.z)}this._checkCurbCrossings()}distToNearestRoad(t){const e=(t%this.COLL_GRID+this.COLL_GRID)%this.COLL_GRID;return Math.min(e,this.COLL_GRID-e)}isOnRoad(t,e){const n=this.distToNearestRoad(t),i=this.distToNearestRoad(e);return n<this.COLL_ROAD_HALF||i<this.COLL_ROAD_HALF}resolveCollision(t,e,n,i){return this.isOnRoad(n,i)?{x:n,z:i}:this.isOnRoad(t,i)?{x:t,z:i}:this.isOnRoad(n,e)?{x:n,z:e}:{x:t,z:e}}applyImpulse(t,e){this._speed*=.5,this.van.mesh.position.x+=t*.1,this.van.mesh.position.z+=e*.1}_checkCurbCrossings(){const t=this.van.mesh.position,e=this.prevPos,n=Nl(e.x,t.x),i=Nl(e.z,t.z);if(n+i===0)return;const r=Math.abs(this._speed)/ng,l=Math.max(ig,Math.min(1,r));this.van.triggerBump(l),this._speed*=.85,this.onBump&&this.onBump(l)}}const no=(s,t)=>{const e=t.x-s.x,n=t.y-s.y;return Math.sqrt(e*e+n*n)},ag=(s,t)=>{const e=t.x-s.x,n=t.y-s.y;return cg(Math.atan2(n,e))},lg=(s,t,e)=>{const n={x:0,y:0};return e=Jr(e),n.x=s.x-t*Math.cos(e),n.y=s.y-t*Math.sin(e),n},Jr=s=>s*(Math.PI/180),cg=s=>s*(180/Math.PI),dg=s=>isNaN(s.buttons)?s.pressure!==0:s.buttons!==0,nr=new Map,Ol=s=>{nr.has(s)&&clearTimeout(nr.get(s)),nr.set(s,setTimeout(s,100))},uo=(s,t,e)=>{const n=t.split(/[ ,]+/g);let i;for(let o=0;o<n.length;o+=1)i=n[o],s.addEventListener?s.addEventListener(i,e,!1):s.attachEvent&&s.attachEvent(i,e)},kl=(s,t,e)=>{const n=t.split(/[ ,]+/g);let i;for(let o=0;o<n.length;o+=1)i=n[o],s.removeEventListener?s.removeEventListener(i,e):s.detachEvent&&s.detachEvent(i,e)},td=s=>(s.preventDefault(),s.type.match(/^touch/)?s.changedTouches:s),zl=()=>{const s=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,t=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:s,y:t}},Gl=(s,t)=>{t.top||t.right||t.bottom||t.left?(s.style.top=t.top,s.style.right=t.right,s.style.bottom=t.bottom,s.style.left=t.left):(s.style.left=t.x+"px",s.style.top=t.y+"px")},wa=(s,t,e)=>{const n=ed(s);for(let i in n)if(n.hasOwnProperty(i))if(typeof t=="string")n[i]=t+" "+e;else{let o="";for(let a=0,r=t.length;a<r;a+=1)o+=t[a]+" "+e+", ";n[i]=o.slice(0,-2)}return n},hg=(s,t)=>{const e=ed(s);for(let n in e)e.hasOwnProperty(n)&&(e[n]=t);return e},ed=s=>{const t={};return t[s]="",["webkit","Moz","o"].forEach(function(n){t[n+s.charAt(0).toUpperCase()+s.slice(1)]=""}),t},ir=(s,t)=>{for(let e in t)t.hasOwnProperty(e)&&(s[e]=t[e]);return s},ug=(s,t)=>{const e={};for(let n in s)s.hasOwnProperty(n)&&t.hasOwnProperty(n)?e[n]=t[n]:s.hasOwnProperty(n)&&(e[n]=s[n]);return e},Kr=(s,t)=>{if(s.length)for(let e=0,n=s.length;e<n;e+=1)t(s[e]);else t(s)},fg=(s,t,e)=>({x:Math.min(Math.max(s.x,t.x-e),t.x+e),y:Math.min(Math.max(s.y,t.y-e),t.y+e)});var pg="ontouchstart"in window,mg=!!window.PointerEvent,gg=!!window.MSPointerEvent,is={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},Ci,gs={};mg?Ci=is.pointer:gg?Ci=is.MSPointer:pg?(Ci=is.touch,gs=is.mouse):Ci=is.mouse;function An(){}An.prototype.on=function(s,t){var e=this,n=s.split(/[ ,]+/g),i;e._handlers_=e._handlers_||{};for(var o=0;o<n.length;o+=1)i=n[o],e._handlers_[i]=e._handlers_[i]||[],e._handlers_[i].push(t);return e};An.prototype.off=function(s,t){var e=this;return e._handlers_=e._handlers_||{},s===void 0?e._handlers_={}:t===void 0?e._handlers_[s]=null:e._handlers_[s]&&e._handlers_[s].indexOf(t)>=0&&e._handlers_[s].splice(e._handlers_[s].indexOf(t),1),e};An.prototype.trigger=function(s,t){var e=this,n=s.split(/[ ,]+/g),i;e._handlers_=e._handlers_||{};for(var o=0;o<n.length;o+=1)i=n[o],e._handlers_[i]&&e._handlers_[i].length&&e._handlers_[i].forEach(function(a){a.call(e,{type:i,target:e},t)})};An.prototype.config=function(s){var t=this;t.options=t.defaults||{},s&&(t.options=ug(t.options,s))};An.prototype.bindEvt=function(s,t){var e=this;return e._domHandlers_=e._domHandlers_||{},e._domHandlers_[t]=function(){typeof e["on"+t]=="function"?e["on"+t].apply(e,arguments):console.warn('[WARNING] : Missing "on'+t+'" handler.')},uo(s,Ci[t],e._domHandlers_[t]),gs[t]&&uo(s,gs[t],e._domHandlers_[t]),e};An.prototype.unbindEvt=function(s,t){var e=this;return e._domHandlers_=e._domHandlers_||{},kl(s,Ci[t],e._domHandlers_[t]),gs[t]&&kl(s,gs[t],e._domHandlers_[t]),delete e._domHandlers_[t],this};function Me(s,t){return this.identifier=t.identifier,this.position=t.position,this.frontPosition=t.frontPosition,this.collection=s,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(t),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=Me.id,Me.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}Me.prototype=new An;Me.constructor=Me;Me.id=0;Me.prototype.buildEl=function(s){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};Me.prototype.stylize=function(){if(this.options.dataOnly)return this;var s=this.options.fadeTime+"ms",t=hg("borderRadius","50%"),e=wa("transition","opacity",s),n={};return n.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},n.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},n.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},ir(n.el,e),this.options.shape==="circle"&&ir(n.back,t),ir(n.front,t),this.applyStyles(n),this};Me.prototype.applyStyles=function(s){for(var t in this.ui)if(this.ui.hasOwnProperty(t))for(var e in s[t])this.ui[t].style[e]=s[t][e];return this};Me.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};Me.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};Me.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};Me.prototype.show=function(s){var t=this;return t.options.dataOnly||(clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.addToDom(),t.restCallback(),setTimeout(function(){t.ui.el.style.opacity=1},0),t.showTimeout=setTimeout(function(){t.trigger("shown",t.instance),typeof s=="function"&&s.call(this)},t.options.fadeTime)),t};Me.prototype.hide=function(s){var t=this;if(t.options.dataOnly)return t;if(t.ui.el.style.opacity=t.options.restOpacity,clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.removeTimeout=setTimeout(function(){var e=t.options.mode==="dynamic"?"none":"block";t.ui.el.style.display=e,typeof s=="function"&&s.call(t),t.trigger("hidden",t.instance)},t.options.fadeTime),t.options.restJoystick){const e=t.options.restJoystick,n={};n.x=e===!0||e.x!==!1?0:t.instance.frontPosition.x,n.y=e===!0||e.y!==!1?0:t.instance.frontPosition.y,t.setPosition(s,n)}return t};Me.prototype.setPosition=function(s,t){var e=this;e.frontPosition={x:t.x,y:t.y};var n=e.options.fadeTime+"ms",i={};i.front=wa("transition",["transform"],n);var o={front:{}};o.front={transform:"translate("+e.frontPosition.x+"px,"+e.frontPosition.y+"px)"},e.applyStyles(i),e.applyStyles(o),e.restTimeout=setTimeout(function(){typeof s=="function"&&s.call(e),e.restCallback()},e.options.fadeTime)};Me.prototype.restCallback=function(){var s=this,t={};t.front=wa("transition","none",""),s.applyStyles(t),s.trigger("rested",s.instance)};Me.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};Me.prototype.computeDirection=function(s){var t=s.angle.radian,e=Math.PI/4,n=Math.PI/2,i,o,a;if(t>e&&t<e*3&&!s.lockX?i="up":t>-e&&t<=e&&!s.lockY?i="left":t>-e*3&&t<=-e&&!s.lockX?i="down":s.lockY||(i="right"),s.lockY||(t>-n&&t<n?o="left":o="right"),s.lockX||(t>0?a="up":a="down"),s.force>this.options.threshold){var r={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(r[l]=this.direction[l]);var c={};this.direction={x:o,y:a,angle:i},s.direction=this.direction;for(l in r)r[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return s;(!c.x||!c.y)&&this.trigger("plain",s),c.x||this.trigger("plain:"+o,s),c.y||this.trigger("plain:"+a,s),c.angle||this.trigger("dir dir:"+i,s)}else this.resetDirection();return s};function me(s,t){var e=this;e.nipples=[],e.idles=[],e.actives=[],e.ids=[],e.pressureIntervals={},e.manager=s,e.id=me.id,me.id+=1,e.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},e.config(t),(e.options.mode==="static"||e.options.mode==="semi")&&(e.options.multitouch=!1),e.options.multitouch||(e.options.maxNumberOfNipples=1);const n=getComputedStyle(e.options.zone.parentElement);return n&&n.display==="flex"&&(e.parentIsFlex=!0),e.updateBox(),e.prepareNipples(),e.bindings(),e.begin(),e.nipples}me.prototype=new An;me.constructor=me;me.id=0;me.prototype.prepareNipples=function(){var s=this,t=s.nipples;t.on=s.on.bind(s),t.off=s.off.bind(s),t.options=s.options,t.destroy=s.destroy.bind(s),t.ids=s.ids,t.id=s.id,t.processOnMove=s.processOnMove.bind(s),t.processOnEnd=s.processOnEnd.bind(s),t.get=function(e){if(e===void 0)return t[0];for(var n=0,i=t.length;n<i;n+=1)if(t[n].identifier===e)return t[n];return!1}};me.prototype.bindings=function(){var s=this;s.bindEvt(s.options.zone,"start"),s.options.zone.style.touchAction="none",s.options.zone.style.msTouchAction="none"};me.prototype.begin=function(){var s=this,t=s.options;if(t.mode==="static"){var e=s.createNipple(t.position,s.manager.getIdentifier());e.add(),s.idles.push(e)}};me.prototype.createNipple=function(s,t){var e=this,n=e.manager.scroll,i={},o=e.options,a={x:e.parentIsFlex?n.x:n.x+e.box.left,y:e.parentIsFlex?n.y:n.y+e.box.top};if(s.x&&s.y)i={x:s.x-a.x,y:s.y-a.y};else if(s.top||s.right||s.bottom||s.left){var r=document.createElement("DIV");r.style.display="hidden",r.style.top=s.top,r.style.right=s.right,r.style.bottom=s.bottom,r.style.left=s.left,r.style.position="absolute",o.zone.appendChild(r);var l=r.getBoundingClientRect();o.zone.removeChild(r),i=s,s={x:l.left+n.x,y:l.top+n.y}}var c=new Me(e,{color:o.color,size:o.size,threshold:o.threshold,fadeTime:o.fadeTime,dataOnly:o.dataOnly,restJoystick:o.restJoystick,restOpacity:o.restOpacity,mode:o.mode,identifier:t,position:s,zone:o.zone,frontPosition:{x:0,y:0},shape:o.shape});return o.dataOnly||(Gl(c.ui.el,i),Gl(c.ui.front,c.frontPosition)),e.nipples.push(c),e.trigger("added "+c.identifier+":added",c),e.manager.trigger("added "+c.identifier+":added",c),e.bindNipple(c),c};me.prototype.updateBox=function(){var s=this;s.box=s.options.zone.getBoundingClientRect()};me.prototype.bindNipple=function(s){var t=this,e,n=function(i,o){e=i.type+" "+o.id+":"+i.type,t.trigger(e,o)};s.on("destroyed",t.onDestroyed.bind(t)),s.on("shown hidden rested dir plain",n),s.on("dir:up dir:right dir:down dir:left",n),s.on("plain:up plain:right plain:down plain:left",n)};me.prototype.pressureFn=function(s,t,e){var n=this,i=0;clearInterval(n.pressureIntervals[e]),n.pressureIntervals[e]=setInterval((function(){var o=s.force||s.pressure||s.webkitForce||0;o!==i&&(t.trigger("pressure",o),n.trigger("pressure "+t.identifier+":pressure",o),i=o)}).bind(n),100)};me.prototype.onstart=function(s){var t=this,e=t.options,n=s;s=td(s),t.updateBox();var i=function(o){t.actives.length<e.maxNumberOfNipples?t.processOnStart(o):n.type.match(/^touch/)&&(Object.keys(t.manager.ids).forEach(function(a){if(Object.values(n.touches).findIndex(function(l){return l.identifier===a})<0){var r=[s[0]];r.identifier=a,t.processOnEnd(r)}}),t.actives.length<e.maxNumberOfNipples&&t.processOnStart(o))};return Kr(s,i),t.manager.bindDocument(),!1};me.prototype.processOnStart=function(s){var t=this,e=t.options,n,i=t.manager.getIdentifier(s),o=s.force||s.pressure||s.webkitForce||0,a={x:s.pageX,y:s.pageY},r=t.getOrCreate(i,a);r.identifier!==i&&t.manager.removeIdentifier(r.identifier),r.identifier=i;var l=function(d){d.trigger("start",d),t.trigger("start "+d.id+":start",d),d.show(),o>0&&t.pressureFn(s,d,d.identifier),t.processOnMove(s)};if((n=t.idles.indexOf(r))>=0&&t.idles.splice(n,1),t.actives.push(r),t.ids.push(r.identifier),e.mode!=="semi")l(r);else{var c=no(a,r.position);if(c<=e.catchDistance)l(r);else{r.destroy(),t.processOnStart(s);return}}return r};me.prototype.getOrCreate=function(s,t){var e=this,n=e.options,i;return/(semi|static)/.test(n.mode)?(i=e.idles[0],i?(e.idles.splice(0,1),i):n.mode==="semi"?e.createNipple(t,s):(console.warn("Coudln't find the needed nipple."),!1)):(i=e.createNipple(t,s),i)};me.prototype.processOnMove=function(s){var t=this,e=t.options,n=t.manager.getIdentifier(s),i=t.nipples.get(n),o=t.manager.scroll;if(!dg(s)){this.processOnEnd(s);return}if(!i){console.error("Found zombie joystick with ID "+n),t.manager.removeIdentifier(n);return}if(e.dynamicPage){var a=i.el.getBoundingClientRect();i.position={x:o.x+a.left,y:o.y+a.top}}i.identifier=n;var r=i.options.size/2,l={x:s.pageX,y:s.pageY};e.lockX&&(l.y=i.position.y),e.lockY&&(l.x=i.position.x);var c=no(l,i.position),d=ag(l,i.position),h=Jr(d),u=c/r,p={distance:c,position:l},g,x;if(i.options.shape==="circle"?(g=Math.min(c,r),x=lg(i.position,g,d)):(x=fg(l,i.position,r),g=no(x,i.position)),e.follow){if(c>r){let S=l.x-x.x,_=l.y-x.y;i.position.x+=S,i.position.y+=_,i.el.style.top=i.position.y-(t.box.top+o.y)+"px",i.el.style.left=i.position.x-(t.box.left+o.x)+"px",c=no(l,i.position)}}else l=x,c=g;var m=l.x-i.position.x,f=l.y-i.position.y;i.frontPosition={x:m,y:f},e.dataOnly||(i.ui.front.style.transform="translate("+m+"px,"+f+"px)");var w={identifier:i.identifier,position:l,force:u,pressure:s.force||s.pressure||s.webkitForce||0,distance:c,angle:{radian:h,degree:d},vector:{x:m/r,y:-f/r},raw:p,instance:i,lockX:e.lockX,lockY:e.lockY};w=i.computeDirection(w),w.angle={radian:Jr(180-d),degree:180-d},i.trigger("move",w),t.trigger("move "+i.id+":move",w)};me.prototype.processOnEnd=function(s){var t=this,e=t.options,n=t.manager.getIdentifier(s),i=t.nipples.get(n),o=t.manager.removeIdentifier(i.identifier);i&&(e.dataOnly||i.hide(function(){e.mode==="dynamic"&&(i.trigger("removed",i),t.trigger("removed "+i.id+":removed",i),t.manager.trigger("removed "+i.id+":removed",i),i.destroy())}),clearInterval(t.pressureIntervals[i.identifier]),i.resetDirection(),i.trigger("end",i),t.trigger("end "+i.id+":end",i),t.ids.indexOf(i.identifier)>=0&&t.ids.splice(t.ids.indexOf(i.identifier),1),t.actives.indexOf(i)>=0&&t.actives.splice(t.actives.indexOf(i),1),/(semi|static)/.test(e.mode)?t.idles.push(i):t.nipples.indexOf(i)>=0&&t.nipples.splice(t.nipples.indexOf(i),1),t.manager.unbindDocument(),/(semi|static)/.test(e.mode)&&(t.manager.ids[o.id]=o.identifier))};me.prototype.onDestroyed=function(s,t){var e=this;e.nipples.indexOf(t)>=0&&e.nipples.splice(e.nipples.indexOf(t),1),e.actives.indexOf(t)>=0&&e.actives.splice(e.actives.indexOf(t),1),e.idles.indexOf(t)>=0&&e.idles.splice(e.idles.indexOf(t),1),e.ids.indexOf(t.identifier)>=0&&e.ids.splice(e.ids.indexOf(t.identifier),1),e.manager.removeIdentifier(t.identifier),e.manager.unbindDocument()};me.prototype.destroy=function(){var s=this;s.unbindEvt(s.options.zone,"start"),s.nipples.forEach(function(e){e.destroy()});for(var t in s.pressureIntervals)s.pressureIntervals.hasOwnProperty(t)&&clearInterval(s.pressureIntervals[t]);s.trigger("destroyed",s.nipples),s.manager.unbindDocument(),s.off()};function be(s){var t=this;t.ids={},t.index=0,t.collections=[],t.scroll=zl(),t.config(s),t.prepareCollections();var e=function(){var i;t.collections.forEach(function(o){o.forEach(function(a){i=a.el.getBoundingClientRect(),a.position={x:t.scroll.x+i.left,y:t.scroll.y+i.top}})})};uo(window,"resize",function(){Ol(e)});var n=function(){t.scroll=zl()};return uo(window,"scroll",function(){Ol(n)}),t.collections}be.prototype=new An;be.constructor=be;be.prototype.prepareCollections=function(){var s=this;s.collections.create=s.create.bind(s),s.collections.on=s.on.bind(s),s.collections.off=s.off.bind(s),s.collections.destroy=s.destroy.bind(s),s.collections.get=function(t){var e;return s.collections.every(function(n){return e=n.get(t),!e}),e}};be.prototype.create=function(s){return this.createCollection(s)};be.prototype.createCollection=function(s){var t=this,e=new me(t,s);return t.bindCollection(e),t.collections.push(e),e};be.prototype.bindCollection=function(s){var t=this,e,n=function(i,o){e=i.type+" "+o.id+":"+i.type,t.trigger(e,o)};s.on("destroyed",t.onDestroyed.bind(t)),s.on("shown hidden rested dir plain",n),s.on("dir:up dir:right dir:down dir:left",n),s.on("plain:up plain:right plain:down plain:left",n)};be.prototype.bindDocument=function(){var s=this;s.binded||(s.bindEvt(document,"move").bindEvt(document,"end"),s.binded=!0)};be.prototype.unbindDocument=function(s){var t=this;(!Object.keys(t.ids).length||s===!0)&&(t.unbindEvt(document,"move").unbindEvt(document,"end"),t.binded=!1)};be.prototype.getIdentifier=function(s){var t;return s?(t=s.identifier===void 0?s.pointerId:s.identifier,t===void 0&&(t=this.latest||0)):t=this.index,this.ids[t]===void 0&&(this.ids[t]=this.index,this.index+=1),this.latest=t,this.ids[t]};be.prototype.removeIdentifier=function(s){var t={};for(var e in this.ids)if(this.ids[e]===s){t.id=e,t.identifier=this.ids[e],delete this.ids[e];break}return t};be.prototype.onmove=function(s){var t=this;return t.onAny("move",s),!1};be.prototype.onend=function(s){var t=this;return t.onAny("end",s),!1};be.prototype.oncancel=function(s){var t=this;return t.onAny("end",s),!1};be.prototype.onAny=function(s,t){var e=this,n,i="processOn"+s.charAt(0).toUpperCase()+s.slice(1);t=td(t);var o=function(r,l,c){c.ids.indexOf(l)>=0&&(c[i](r),r._found_=!0)},a=function(r){n=e.getIdentifier(r),Kr(e.collections,o.bind(null,r,n)),r._found_||e.removeIdentifier(n)};return Kr(t,a),!1};be.prototype.destroy=function(){var s=this;s.unbindDocument(!0),s.ids={},s.index=0,s.collections.forEach(function(t){t.destroy()}),s.off()};be.prototype.onDestroyed=function(s,t){var e=this;if(e.collections.indexOf(t)<0)return!1;e.collections.splice(e.collections.indexOf(t),1)};const Hl=new be,xg={create:function(s){return Hl.create(s)},factory:Hl};class _g{constructor(){C(this,"keys",{});C(this,"steerAxis",0);C(this,"accelerating",!1);C(this,"braking",!1);C(this,"horn",!1);C(this,"joystickManager",null);C(this,"hornTimeout",null);window.addEventListener("keydown",t=>{this.keys[t.code]=!0,t.code==="KeyH"&&this.triggerHorn()}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1}),this.setupMobileControls()}triggerHorn(){this.horn=!0,this.hornTimeout!==null&&clearTimeout(this.hornTimeout),this.hornTimeout=setTimeout(()=>{this.horn=!1,this.hornTimeout=null},300)}setupMobileControls(){const t=document.createElement("div");t.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 150px;
      height: 150px;
      z-index: 100;
      touch-action: none;
    `,document.body.appendChild(t),this.joystickManager=xg.create({zone:t,mode:"static",position:{left:"75px",bottom:"75px"},color:"rgba(255, 255, 255, 0.6)",size:120,restOpacity:.5}),this.joystickManager.on("move",(o,a)=>{a.vector&&(this.steerAxis=a.vector.x)}),this.joystickManager.on("end",()=>{this.steerAxis=0});const e=document.createElement("div");e.style.cssText=`
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
    `,i.textContent="📯",document.body.appendChild(i),i.addEventListener("touchstart",o=>{o.preventDefault(),this.triggerHorn(),i.style.background="rgba(255, 200, 50, 0.95)",i.style.transform="scale(1.1)"},{passive:!1}),i.addEventListener("touchend",o=>{o.preventDefault(),i.style.background="rgba(255, 200, 50, 0.6)",i.style.transform="scale(1.0)"},{passive:!1})}get forward(){return this.keys.ArrowUp||this.keys.KeyW||this.accelerating}get backward(){return this.keys.ArrowDown||this.keys.KeyS}get left(){return this.keys.ArrowLeft||this.keys.KeyA||this.steerAxis<-.2}get right(){return this.keys.ArrowRight||this.keys.KeyD||this.steerAxis>.2}get brake(){return this.keys.Space||this.braking}get honk(){return this.horn}}class vg{constructor(){C(this,"level",0);C(this,"spillRateMultiplier",1);C(this,"onSpill");C(this,"container");C(this,"fill");C(this,"bucketEl");C(this,"isShaking",!1);C(this,"spillFlashing",!1);if(!document.getElementById("spill-meter-styles")){const i=document.createElement("style");i.id="spill-meter-styles",i.textContent=`
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
      `,document.head.appendChild(i)}this.container=document.createElement("div"),Object.assign(this.container.style,{position:"fixed",top:"16px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",zIndex:"999",userSelect:"none",pointerEvents:"none"});const t=document.createElement("div");Object.assign(t.style,{display:"flex",alignItems:"center",gap:"8px"}),this.bucketEl=document.createElement("span"),this.bucketEl.textContent="🪣",Object.assign(this.bucketEl.style,{fontSize:"28px",lineHeight:"1"}),t.appendChild(this.bucketEl);const e=document.createElement("div");Object.assign(e.style,{width:"160px",height:"18px",background:"#333",borderRadius:"9px",overflow:"hidden",border:"2px solid rgba(255,255,255,0.25)",boxShadow:"0 2px 6px rgba(0,0,0,0.6)"}),this.fill=document.createElement("div"),Object.assign(this.fill.style,{height:"100%",width:"0%",borderRadius:"9px",transition:"width 0.05s linear",background:"linear-gradient(to right, #4caf50, #ffeb3b)"}),e.appendChild(this.fill),t.appendChild(e),this.container.appendChild(t);const n=document.createElement("div");n.textContent="DON'T SPILL THE PLASTER!",Object.assign(n.style,{color:"#fff",fontSize:"11px",fontWeight:"700",fontFamily:"system-ui, sans-serif",textShadow:"0 1px 4px rgba(0,0,0,0.9)",letterSpacing:"0.5px"}),this.container.appendChild(n),document.body.appendChild(this.container),this.container.style.display="none"}setVisible(t){this.container.style.display=t?"flex":"none"}addSpill(t){this.level=Math.min(1,this.level+t)}update(t){var n;const e=this.level*100;if(this.fill.style.width=`${e}%`,this.level<.5){const i=this.level*2,o=Math.round(76+i*179),a=Math.round(175+i*60);this.fill.style.background=`linear-gradient(to right, rgb(${o},${a},50), rgb(${o},${a},50))`}else{const i=(this.level-.5)*2,o=255,a=Math.round(235-i*235);this.fill.style.background=`linear-gradient(to right, rgb(${o},${a},50), rgb(${o},${Math.round(a*.4)},20))`}this.level>.8&&!this.isShaking?(this.bucketEl.classList.add("bucket-shake"),this.isShaking=!0):this.level<=.8&&this.isShaking&&(this.bucketEl.classList.remove("bucket-shake"),this.isShaking=!1),this.level>=1&&!this.spillFlashing&&(this.spillFlashing=!0,this.level=.5,(n=this.onSpill)==null||n.call(this,5e4),this.container.classList.add("spill-flash"),setTimeout(()=>{this.container.classList.remove("spill-flash"),this.spillFlashing=!1},700))}triggerBump(t){this.addSpill(.025)}triggerCrash(){this.addSpill(.3)}}const yg=[{id:"job_01",type:"commercial",zone:"cbd",position:{x:40,z:-40},title:"Marbellino Boardroom",client:"Brad from Accounts",description:"Brad wants a Marbellino feature wall in the boardroom. Stone-like marbled finish. Brad calls it 'very European'. Brad has never been to Europe.",pay:42e4,timeLimit:0,travelTimeLimit:120,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_02",type:"commercial",zone:"footscray",position:{x:-120,z:60},title:"Hemp Render — Big Kev's Shed",client:"Big Kev",description:"Big Kev wants Hemp Earthen Render on his warehouse. Rammed earth look, hemp fibres, 3–5mm application. He says it's a small shed. It is not a small shed.",pay:68e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_03",type:"residential",zone:"brunswick",position:{x:-80,z:80},title:"Antique Stucco Terrace",client:"Matilda",description:"Matilda wants Antique Stucco throughout — that Southern European aged look. Three rooms. By Thursday. It's Wednesday. She also needs primer coats. Yes, all of them.",pay:55e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_04",type:"heritage",zone:"richmond",position:{x:120,z:40},title:"Antique Stucco Heritage Restore",client:"The Council",description:"Council heritage job. Full 3-coat Antique Stucco system. Primer, stucco, sealer. Nobody told you about the asbestos audit. Nobody.",pay:8e5,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_05",type:"residential",zone:"stkilda",position:{x:40,z:-120},title:"Tadelakt Beachfront Bathroom",client:"Chloe",description:"Chloe wants Tadelakt in the bathroom — polished, waterproof, glossy. Traditional Moroccan technique. She also wants it 'textured but smooth'. You nod and apply the polishing stone.",pay:61e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_06",type:"emergency",zone:"cbd",position:{x:-40,z:20},title:"🚨 Emergency Antique Stucco Patch",client:"Darren (Stressed)",description:"Open home in 4 hours. Actual hole in the Antique Stucco feature wall. Primer, stucco, sealer — in 4 hours. Darren is sweating. You are also sweating.",pay:95e4,timeLimit:240,travelTimeLimit:240,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_07",type:"residential",zone:"brunswick",position:{x:-120,z:-80},title:"Hemp Render Repair — DIY Gone Wrong",client:"Zephyr",description:"Zephyr tried to do his own Hemp Earthen Render. No base coat. No primer. Wrong mix ratio. You strip it back and do it properly. Zephyr watches and takes notes.",pay:39e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_08",type:"commercial",zone:"footscray",position:{x:-160,z:20},title:"Rokka — Kebab Shop Reno",client:"Mustafa",description:"Mustafa wants Rokka on the walls — smooth, rustic, modern. 2–5mm application, sealed and ready before the health inspector comes back. No questions about the old walls.",pay:47e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_09",type:"heritage",zone:"stkilda",position:{x:80,z:-160},title:"Antique Stucco — Edwardian Cottage",client:"Patricia",description:"Patricia wants Antique Stucco — aged Southern European finish, NCC 2022 compliant. She's printed the full TDS. She's highlighted it. She will quiz you on cure times.",pay:72e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_10",type:"residential",zone:"richmond",position:{x:160,z:-40},title:"Tadelino New Build",client:"The Hendersons",description:"Full Tadelino system throughout — polished, modern, glossy finish. Two coats, polishing stone, sealer. The Hendersons want it done before Christmas. You ask which Christmas.",pay:58e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_11",type:"emergency",zone:"brunswick",position:{x:-40,z:120},title:"🚨 Tadelakt Water Damage Repair",client:"Gary",description:"Upstairs left the bath running. Gary's Tadelakt bathroom is destroyed. Strip, reprime, two coats Tadelakt, polish, seal. Gary is not speaking to upstairs. You don't ask.",pay:88e4,timeLimit:300,travelTimeLimit:300,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_12",type:"commercial",zone:"stkilda",position:{x:-20,z:-160},title:"Rokka Feature Wall — Wine Bar",client:"Alejandro",description:"Alejandro wants Rokka on the feature wall. Rustic, modern, subtle undulations. He calls it 'industrial earthen chic'. You write down 'Rokka, sealed, done'.",pay:64e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1}],Vl=["Jose","Jarrad","Matt","Phil","Tsuyoshi","Fabio"],ei=class ei{constructor(){C(this,"jobs",yg.map(t=>({...t})));C(this,"activeJob",null);C(this,"activePhase",1);C(this,"completedJobIds",new Set);C(this,"money",5e5);C(this,"travelTimer",0);C(this,"travelFailed",!1);C(this,"crewToPickup",[]);C(this,"crewPickedUp",[])}getAvailableJobs(){return this.jobs.filter(t=>!this.completedJobIds.has(t.id)&&t!==this.activeJob)}acceptJob(t){this.activeJob=t,this.activePhase=1,this.crewToPickup=this._pickCrew(t.crewNeeded),this.crewPickedUp=[],this.startTravelTimer()}_pickCrew(t){return[...Vl].sort(()=>Math.random()-.5).slice(0,Math.min(t,Vl.length))}startTravelTimer(){this.activeJob&&(this.travelTimer=this.activeJob.travelTimeLimit??120,this.travelFailed=!1)}checkPhase1Arrival(t,e){const n=t-ei.WORKSHOP_POS.x,i=e-ei.WORKSHOP_POS.z;return Math.sqrt(n*n+i*i)<18}advanceToPhase2(){this.activePhase=2,this.startTravelTimer()}advanceToPhase3(){this.activePhase=3,this.startTravelTimer()}pickupCrew(t){return!this.crewPickedUp.includes(t)&&this.crewToPickup.includes(t)&&this.crewPickedUp.push(t),this.allCrewCollected()}allCrewCollected(){return this.crewToPickup.every(t=>this.crewPickedUp.includes(t))}nextCrewNeeded(){for(const t of this.crewToPickup)if(!this.crewPickedUp.includes(t))return t;return null}tickTravel(t){if(!this.activeJob||this.travelFailed)return null;if(this.travelTimer-=t,this.travelTimer<=0){this.travelFailed=!0;const e=15e4;return this.money=Math.max(0,this.money-e),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],{failed:!0,penalty:e}}return null}checkArrival(t,e){if(!this.activeJob||this.activePhase!==3)return null;const n=t-this.activeJob.position.x,i=e-this.activeJob.position.z;return Math.sqrt(n*n+i*i)<this.activeJob.triggerRadius?this.activeJob:null}completeJob(t,e=1){const n=Math.round(t.pay*e);return this.money=Math.max(0,this.money+n),this.completedJobIds.add(t.id),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],n}distanceTo(t,e){if(!this.activeJob)return 0;const n=t-this.activeJob.position.x,i=e-this.activeJob.position.z;return Math.sqrt(n*n+i*i)}distanceToWorkshop(t,e){const n=t-ei.WORKSHOP_POS.x,i=e-ei.WORKSHOP_POS.z;return Math.sqrt(n*n+i*i)}distanceToPoint(t,e,n,i){const o=t-n,a=e-i;return Math.sqrt(o*o+a*a)}};C(ei,"WORKSHOP_POS",{x:10,z:15});let fo=ei;const Qe=class Qe{constructor(t){C(this,"marker");C(this,"diamond");C(this,"ring");C(this,"routeLine",null);C(this,"routeGeom",null);C(this,"scene");C(this,"time",0);C(this,"targetPos",null);this.scene=t,this.marker=new Nt;const e=new xa(1,0),n=new j({color:Qe.MARKER_COLOR,emissive:new Mt(Qe.MARKER_COLOR),emissiveIntensity:.35});this.diamond=new D(e,n),this.diamond.scale.set(1.2,2,1.2),this.diamond.castShadow=!1,this.marker.add(this.diamond);const i=new li(.5,2,32),o=new He({color:Qe.MARKER_COLOR,transparent:!0,opacity:.6,side:ze,depthWrite:!1});this.ring=new D(i,o),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=-8+.3,this.marker.add(this.ring),this.marker.visible=!1,this.scene.add(this.marker)}setTarget(t){if(this.targetPos=t,this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null),t===null){this.marker.visible=!1;return}this.marker.position.set(t.x,Qe.BASE_HEIGHT,t.z),this.marker.visible=!0,this.routeGeom=new Pe;const e=new Float32Array(6);e[0]=t.x,e[1]=.05,e[2]=t.z,e[3]=t.x,e[4]=.05,e[5]=t.z,this.routeGeom.setAttribute("position",new on(e,3));const n=new Wc({color:16777215,transparent:!0,opacity:.75,depthTest:!1});this.routeLine=new am(this.routeGeom,n),this.routeLine.renderOrder=999,this.scene.add(this.routeLine)}setJob(t){this.setTarget((t==null?void 0:t.position)??null)}get currentTarget(){return this.targetPos?{...this.targetPos}:null}update(t,e,n){if(this.time+=t,!this.targetPos||!this.marker.visible)return;const i=Math.sin(this.time*2.2)*Qe.BOB_AMP;this.marker.position.y=Qe.BASE_HEIGHT+i,this.diamond.rotation.y=this.time*1.2;const o=this.time*.8%1,a=.5+o*2;this.ring.scale.set(a,a,1);const r=this.ring.material;if(r.opacity=(1-o)*.6,this.routeGeom){const l=this.routeGeom.attributes.position;l.setXYZ(0,e,.05,n),l.setXYZ(1,this.targetPos.x,.05,this.targetPos.z),l.needsUpdate=!0,this.routeGeom.computeBoundingSphere()}}dispose(){this.marker.visible=!1,this.scene.remove(this.marker),this.diamond.geometry.dispose(),this.diamond.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null)}};C(Qe,"MARKER_COLOR",12674667),C(Qe,"BASE_HEIGHT",8),C(Qe,"BOB_AMP",.5);let Zr=Qe;function Mg(s){return s>=1e6?`${(s/1e6).toFixed(2)}M sats`:s>=1e3?`${(s/1e3).toFixed(0)}K sats`:`${s} sats`}const wg={cbd:"🏙️ CBD",footscray:"🏭 Footscray",brunswick:"🎸 Brunswick",richmond:"🏡 Richmond",stkilda:"🌊 St Kilda"},bg={residential:"🏠 Residential",commercial:"🏢 Commercial",heritage:"🏛️ Heritage",emergency:"🚨 Emergency"};class Sg{constructor(t){C(this,"onAccept");C(this,"overlay");C(this,"visible",!1);C(this,"jobs",[]);if(this.onAccept=t,this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,t.appendChild(e);const n=document.createElement("button");if(n.className="jb-close-btn",n.textContent="✕",n.setAttribute("aria-label","Close"),n.addEventListener("click",()=>this.hide()),t.appendChild(n),this.overlay.appendChild(t),this.jobs.length===0){const i=document.createElement("div");i.className="jb-no-jobs",i.textContent="You've smashed all the jobs, legend. 🏆",this.overlay.appendChild(i);return}for(const i of this.jobs){const o=document.createElement("div");o.className="jb-card";const a=document.createElement("div");a.className="jb-card-header";const r=document.createElement("div");r.className="jb-title",r.textContent=i.title,a.appendChild(r);const l=document.createElement("div");l.className="jb-pay",l.textContent=`₿ ${Mg(i.pay)}`,a.appendChild(l),o.appendChild(a);const c=document.createElement("div");c.className="jb-meta";const d=document.createElement("span");d.className="jb-badge",d.textContent=wg[i.zone]??i.zone,c.appendChild(d);const h=document.createElement("span");if(h.className=`jb-badge${i.type==="emergency"?" jb-emergency-badge":""}`,h.textContent=bg[i.type]??i.type,c.appendChild(h),i.timeLimit>0){const x=document.createElement("span");x.className="jb-badge jb-emergency-badge",x.textContent=`⏱️ ${Math.round(i.timeLimit/60)} min limit`,c.appendChild(x)}o.appendChild(c);const u=document.createElement("div");u.className="jb-client",u.textContent=`Client: ${i.client}`,o.appendChild(u);const p=document.createElement("div");p.className="jb-desc",p.textContent=i.description,o.appendChild(p);const g=document.createElement("button");g.className="jb-accept-btn",g.textContent="ACCEPT →",g.addEventListener("click",()=>{this.onAccept(i)}),o.appendChild(g),this.overlay.appendChild(o)}}}const Wl=1e8;function jn(s){return s>=1e6?`${(s/1e6).toFixed(2)}M sats`:s>=1e3?`${(s/1e3).toFixed(0)}K sats`:`${s} sats`}function Eg(s){const t=Math.max(0,Math.ceil(s)),e=Math.floor(t/60),n=t%60;return`${e}:${n.toString().padStart(2,"0")}`}function Tg(s){return s.charAt(0).toUpperCase()}class Ag{constructor(){C(this,"btcAchieved",!1);C(this,"speedText");C(this,"moneyEl");C(this,"btcBarFill");C(this,"btcLabelEl");C(this,"jobStripEl");C(this,"travelTimerEl");C(this,"flashOverlay");C(this,"timerFailOverlay");C(this,"crewPanelEl");C(this,"activeJob",null);C(this,"activePhase",1);C(this,"flashTimeout",null);C(this,"spillPenaltyTimeout",null);C(this,"currentMoney",5e5);C(this,"timerPulseInterval",null);if(!document.getElementById("hud-styles")){const r=document.createElement("style");r.id="hud-styles",r.textContent=`
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
    `,this.moneyEl.textContent="500K sats",e.appendChild(this.moneyEl);const n=document.createElement("div");n.style.cssText=`
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
    `,i.appendChild(this.btcBarFill),n.appendChild(this.btcLabelEl),n.appendChild(i),e.appendChild(n),this.jobStripEl=document.createElement("div"),this.jobStripEl.style.cssText=`
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
    `;const o=document.createElement("div");o.id="hud-flash-msg",o.style.cssText=`
      color: #5EDB7D;
      font-size: clamp(28px, 6vw, 52px);
      font-weight: 900;
      font-family: system-ui, sans-serif;
      text-shadow: 0 2px 12px rgba(0,0,0,0.9);
      text-align: center;
      padding: 0 24px;
      line-height: 1.3;
    `,this.flashOverlay.appendChild(o),document.body.appendChild(this.flashOverlay),this.timerFailOverlay=document.createElement("div"),this.timerFailOverlay.style.cssText=`
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
    `,a.textContent="⏰ TOO SLOW! -150K sats",this.timerFailOverlay.appendChild(a),document.body.appendChild(this.timerFailOverlay)}update(t,e){const n=Math.abs(Math.round(t*3.6));this.speedText.textContent=`${n} km/h`}setActiveJob(t,e=2){if(this.activeJob=t,this.activePhase=e,!t){this.jobStripEl.style.display="none",this.crewPanelEl.style.display="none";return}this.jobStripEl.style.display="flex",this._refreshJobStrip(t,null)}updateJobDistance(t){this.activeJob&&this._refreshJobStrip(this.activeJob,t)}updateCrewStatus(t,e,n){if(!n||t.length===0){this.crewPanelEl.style.display="none";return}this.crewPanelEl.style.display="flex",this.crewPanelEl.innerHTML="";const i=document.createElement("div");i.style.cssText=`
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
    `;for(const a of t){const r=e.includes(a),l=document.createElement("div");l.style.cssText=`
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
      `,l.textContent=Tg(a),l.title=a,o.appendChild(l)}this.crewPanelEl.appendChild(o)}_refreshJobStrip(t,e){this.jobStripEl.innerHTML="";const n=document.createElement("div");if(n.style.cssText=`
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      text-align: right;
    `,e!==null){const i=e<1e3?`${Math.round(e)}m`:`${(e/1e3).toFixed(1)}km`;this.activePhase===1?(n.textContent=`📦 To workshop: ${i} — ${t.title}`,n.style.color="#FFD700"):this.activePhase===2?(n.textContent=`👥 Pick up crew: ${i} — ${t.title}`,n.style.color="#60AAFF"):(n.textContent=`🧱 To job site: ${i} — ${t.title}`,n.style.color="#C1666B")}else this.activePhase===1?(n.textContent=`📦 Workshop pickup — ${t.title}`,n.style.color="#FFD700"):this.activePhase===2?(n.textContent=`👥 Pick up the crew — ${t.title}`,n.style.color="#60AAFF"):(n.textContent=`🧱 ${t.title}`,n.style.color="#fff");this.jobStripEl.appendChild(n)}updateTravelTimer(t){if(t===null){this.travelTimerEl.style.display="none",this.travelTimerEl.classList.remove("hud-timer-pulse"),this.timerPulseInterval!==null&&(clearInterval(this.timerPulseInterval),this.timerPulseInterval=null);return}this.travelTimerEl.style.display="block",this.travelTimerEl.textContent=`⏱ ${Eg(t)}`,t>60?(this.travelTimerEl.style.color="#5EDB7D",this.travelTimerEl.classList.remove("hud-timer-pulse")):t>30?(this.travelTimerEl.style.color="#FFD700",this.travelTimerEl.classList.remove("hud-timer-pulse")):(this.travelTimerEl.style.color="#ff4444",this.travelTimerEl.classList.contains("hud-timer-pulse")||this.travelTimerEl.classList.add("hud-timer-pulse"))}showTimerFail(t){const e=document.getElementById("hud-timer-fail-msg");e&&(e.textContent=`⏰ TOO SLOW! -${jn(t)}`),this.timerFailOverlay.style.display="flex",setTimeout(()=>{this.timerFailOverlay.style.display="none"},3e3)}showPhase1Complete(){const t=document.getElementById("hud-flash-msg");t&&(t.innerHTML='📦 Materials loaded!<br><span style="font-size:0.65em">Go pick up the crew.</span>',t.style.color="#FFD700"),this.flashOverlay.style.background="rgba(255, 210, 0, 0.10)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2500)}showCrewPickup(t,e){const n=document.getElementById("hud-flash-msg");n&&(e?n.innerHTML=`👤 ${t} on board!<br><span style="font-size:0.65em">Pick up ${e}!</span>`:(n.innerHTML='✅ Crew assembled!<br><span style="font-size:0.65em">Head to the job site.</span>',n.style.color="#5EDB7D"),e&&(n.style.color="#60AAFF")),this.flashOverlay.style.background=e?"rgba(96, 170, 255, 0.08)":"rgba(94, 219, 125, 0.12)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2200)}showSpillPenalty(t){this.spillPenaltyTimeout!==null&&(clearTimeout(this.spillPenaltyTimeout),this.spillPenaltyTimeout=null);const e=`-${jn(t)}`;this.moneyEl.style.color="#ff4444",this.moneyEl.textContent=`${jn(this.currentMoney)} ${e}`,this.spillPenaltyTimeout=setTimeout(()=>{this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=jn(this.currentMoney),this.spillPenaltyTimeout=null},1500)}showJobComplete(t,e){const n=document.getElementById("hud-flash-msg");n&&(n.style.color="#5EDB7D",n.innerHTML=`✅ JOB DONE!<br><span style="font-size:0.7em">+${jn(e)} — ${t}</span>`),this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashTimeout=null},3e3)}updateMoney(t){this.currentMoney=t,this.spillPenaltyTimeout===null&&(this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=jn(t));const e=Math.min(1,t/Wl);this.btcBarFill.style.width=`${(e*100).toFixed(1)}%`,e>=1?(this.btcLabelEl.textContent="₿ GOAL: ACHIEVED! 🚀",this.btcBarFill.style.background="#FFD700"):this.btcLabelEl.textContent=`₿ GOAL: ${(e*100).toFixed(1)}%`,!this.btcAchieved&&t>=Wl&&(this.btcAchieved=!0,this._showBitcoinAchievement())}showPenalty(t,e){this.flashTimeout&&clearTimeout(this.flashTimeout),this.flashOverlay.style.display="block";const n=this.flashOverlay.querySelector("div");n&&(n.innerHTML=`⚠️ SCAFFOLD FAIL<br><span style="font-size:0.7em">−${jn(e)} penalty — ${t}</span>`),this.flashOverlay.style.animation="none",this.flashOverlay.offsetWidth,this.flashOverlay.style.animation="hudRedFlash 2.5s ease forwards",this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none"},2600)}showToast(t,e=16777215){const n="#"+e.toString(16).padStart(6,"0"),i=document.createElement("div");i.textContent=t,Object.assign(i.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:n,color:"#fff",padding:"14px 24px",borderRadius:"14px",fontSize:"18px",fontWeight:"800",fontFamily:"system-ui, sans-serif",zIndex:"9000",opacity:"1",textShadow:"0 1px 4px rgba(0,0,0,0.5)",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",pointerEvents:"none",whiteSpace:"nowrap",transition:"opacity 0.5s ease"}),document.body.appendChild(i),setTimeout(()=>{i.style.opacity="0"},2e3),setTimeout(()=>i.remove(),2600)}_showBitcoinAchievement(){if(localStorage.setItem("tem-rush-btc-achieved","1"),!document.getElementById("btc-anim-styles")){const c=document.createElement("style");c.id="btc-anim-styles",c.textContent=`
        @keyframes btcFadeIn { from{opacity:0;transform:scale(0.85)} to{opacity:1;transform:scale(1)} }
        @keyframes btcSpin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes btcGlow   { 0%,100%{text-shadow:0 0 20px #F7931A} 50%{text-shadow:0 0 60px #FFD700,0 0 80px #F7931A} }
      `,document.head.appendChild(c)}const t=document.createElement("div");t.style.cssText=`
      position:fixed; inset:0; z-index:29999;
      background:rgba(5,3,0,0.96);
      display:flex; flex-direction:column; align-items:center;
      overflow-y:auto; font-family:system-ui,sans-serif;
      animation:btcFadeIn 0.5s ease;
      padding:32px 20px 60px; box-sizing:border-box;
    `;const e=document.createElement("div");e.style.cssText="width:100%; max-width:480px; display:flex; flex-direction:column; align-items:center; gap:18px;";const n=document.createElement("div");n.style.cssText="width:100%; display:flex; justify-content:flex-end;";const i=document.createElement("button");i.textContent="✕",i.style.cssText=`background:rgba(255,255,255,0.1);border:none;color:#fff;
      font-size:18px;width:38px;height:38px;border-radius:50%;cursor:pointer;`,i.onclick=()=>t.remove(),n.appendChild(i),e.appendChild(n),e.innerHTML+=`
      <div style="font-size:72px;animation:btcSpin 4s linear infinite;display:inline-block;">₿</div>
      <div style="color:#F7931A;font-size:clamp(28px,8vw,52px);font-weight:900;
                  animation:btcGlow 2s ease-in-out infinite;text-align:center;">1 BITCOIN</div>
      <div style="color:#FFD700;font-size:clamp(15px,4vw,22px);font-weight:800;letter-spacing:2px;">ACHIEVED</div>
      <div style="color:rgba(255,255,255,0.5);font-size:13px;text-align:center;line-height:1.6;max-width:360px;">
        100,000,000 sats earned plastering Melbourne.<br>
        <em>Jarrad wants his cut. You pretend not to hear him.</em>
      </div>
    `;const o=Xl("🎽  REWARD — MERCH STORE","rgba(247,147,26,0.18)","rgba(247,147,26,0.55)","10% off all TEM merch.<br>Show this at checkout or use the code online.","BTCPLASTER10");e.appendChild(o);const a=Xl("🪣  REWARD — MATERIAL SALES","rgba(94,219,125,0.14)","rgba(94,219,125,0.45)","5% off TEM materials at participating retail stores.<br>Present your in-app certificate.","BTCMAT5");e.appendChild(a);const r=document.createElement("div");r.style.cssText=`
      width:100%; background:rgba(200,168,106,0.1);
      border:1px solid rgba(200,168,106,0.35); border-radius:14px;
      padding:16px 18px; color:rgba(240,232,216,0.75);
      font-size:13px; line-height:1.6; text-align:center;
    `,r.innerHTML=`
      📜 Both rewards have been added to your<br>
      <strong style="color:#C8A86A;">TEM Rush Certificate</strong> —
      open the 📸 gallery to view &amp; save it.
    `,e.appendChild(r);const l=document.createElement("button");l.textContent="HODL 🚀",l.style.cssText=`
      padding:14px 48px; background:#F7931A; color:#000;
      border:none; border-radius:50px; font-size:18px; font-weight:900;
      cursor:pointer; letter-spacing:1px; margin-top:8px;
    `,l.onclick=()=>t.remove(),e.appendChild(l),t.appendChild(e),document.body.appendChild(t)}}function Xl(s,t,e,n,i){const o=document.createElement("div");o.style.cssText=`
    width:100%; background:${t}; border:1.5px solid ${e};
    border-radius:16px; padding:18px; display:flex; flex-direction:column; gap:10px;
  `,o.innerHTML=`
    <div style="color:#F7931A;font-size:11px;font-weight:700;letter-spacing:2px;">${s}</div>
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
  `;const a=o.querySelector("button");return a.addEventListener("click",()=>{var r;(r=navigator.clipboard)==null||r.writeText(i).then(()=>{a.textContent="✓ Copied!",setTimeout(()=>{a.textContent="📋 Copy Code"},2e3)})}),o}const oi=[{id:"timber-bluestone",file:"images/270ae674-ae77-46c0-a931-d8b3890bb728.jpg",name:"Timber & Bluestone"},{id:"angular-bay",file:"images/4d5ff18e-1129-4195-9108-a64f3c8e4d34.jpg",name:"Angular Bay House"},{id:"haussmann",file:"images/5c2eabb7-65ce-4f76-b14c-8eb37a3f9537.jpg",name:"Haussmann Mansion"},{id:"brutalist",file:"images/60007f2e-318f-412e-b2ad-4d77445ee417.jpg",name:"Brutalist Compound"},{id:"sculptural-olive",file:"images/787315c4-a661-4dca-8567-b7a18f104665.jpg",name:"Sculptural Olive"},{id:"curved-balcony",file:"images/842fccc6-6bad-4509-81d8-ecb2dc14c80c.jpg",name:"Curved Balcony"},{id:"corten-plaster",file:"images/e3cbd2c9-7944-4074-a439-1033c9f2c166.jpg",name:"Corten & Plaster"},{id:"terracotta-mono",file:"images/f2ed55b5-ba78-4a78-8bad-e57a86b6bcef.jpg",name:"Terracotta Monolith"}],nd="tem-rush-achievements";function ws(){try{return JSON.parse(localStorage.getItem(nd)||"[]")}catch{return[]}}function Cg(s){const t=ws();return t.includes(s)?!1:(t.push(s),localStorage.setItem(nd,JSON.stringify(t)),!0)}function id(){return ws().length>=oi.length}function Rg(){const s=ws(),t=oi.filter(e=>!s.includes(e.id));return t.length>0?t[Math.floor(Math.random()*t.length)]:oi[Math.floor(Math.random()*oi.length)]}function Pg(s,t,e){s.fillStyle="#C8B89A",s.fillRect(0,0,t,e);for(let n=0;n<800;n++){const i=Math.random()*t,o=Math.random()*e,a=20+Math.random()*60,r=Math.random()*Math.PI,l=Math.floor(180+Math.random()*40);s.strokeStyle=`rgb(${l},${l-10},${l-20})`,s.lineWidth=1+Math.random()*3,s.globalAlpha=.3+Math.random()*.4,s.beginPath(),s.moveTo(i,o),s.lineTo(i+Math.cos(r)*a,o+Math.sin(r)*a),s.stroke()}s.globalAlpha=1,s.font="bold 48px system-ui",s.textAlign="center",s.fillStyle="rgba(180,160,130,0.4)",s.fillText("TROWELED EARTH",t/2,e/2-20),s.font="22px system-ui",s.fillStyle="rgba(180,160,130,0.3)",s.fillText("Scratch to reveal",t/2,e/2+20)}function Ig(s,t,e,n,i,o=45){s.globalCompositeOperation="destination-out",s.strokeStyle="rgba(0,0,0,1)",s.lineCap="round",s.lineJoin="round",s.lineWidth=o*2,s.beginPath(),s.moveTo(t,e),s.lineTo(n,i),s.stroke(),s.globalCompositeOperation="source-over"}function ql(s,t,e){const n=s.getImageData(0,0,t,e).data;let i=0;const o=t*e;for(let a=3;a<n.length;a+=4)n[a]<128&&i++;return i/o}function Dg(s,t,e){s.save(),s.translate(t,e),s.rotate(Math.PI/4),s.strokeStyle="#8B6914",s.lineWidth=5,s.lineCap="round",s.beginPath(),s.moveTo(0,0),s.lineTo(0,36),s.stroke(),s.fillStyle="#C0C0C0",s.strokeStyle="#888",s.lineWidth=1.5,s.beginPath(),s.moveTo(-14,0),s.lineTo(14,0),s.lineTo(10,-28),s.lineTo(-10,-28),s.closePath(),s.fill(),s.stroke(),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.moveTo(-8,-4),s.lineTo(4,-4),s.lineTo(2,-22),s.lineTo(-6,-22),s.closePath(),s.fill(),s.restore()}function Yl(s,t,e,n){const i=Math.max(e/t.naturalWidth,n/t.naturalHeight),o=t.naturalWidth*i,a=t.naturalHeight*i,r=(e-o)/2,l=(n-a)/2;s.drawImage(t,r,l,o,a)}class Lg{constructor(){C(this,"container",null);C(this,"canvas",null);C(this,"ctx",null);C(this,"scratch",null);C(this,"sctx",null);C(this,"onComplete",null);C(this,"photo",null);C(this,"img",null);C(this,"imgLoaded",!1);C(this,"lastX",0);C(this,"lastY",0);C(this,"pointerDown",!1);C(this,"cursorX",-999);C(this,"cursorY",-999);C(this,"DURATION",30);C(this,"timeLeft",30);C(this,"timerInterval",null);C(this,"rafId",0);C(this,"done",!1);C(this,"revealed",0);C(this,"lastSampleTime",0);C(this,"SAMPLE_INTERVAL",250);C(this,"toastMsg","");C(this,"toastAlpha",0);C(this,"_onMouseMove");C(this,"_onMouseDown");C(this,"_onMouseUp");C(this,"_onTouchStart");C(this,"_onTouchMove");C(this,"_onTouchEnd");this._onMouseMove=this.handleMouseMove.bind(this),this._onMouseDown=this.handleMouseDown.bind(this),this._onMouseUp=()=>{this.pointerDown=!1},this._onTouchStart=this.handleTouchStart.bind(this),this._onTouchMove=this.handleTouchMove.bind(this),this._onTouchEnd=()=>{this.pointerDown=!1}}mount(t,e){if(this.container=t,this.onComplete=e,this.done=!1,this.revealed=0,this.timeLeft=this.DURATION,this.toastMsg="",this.toastAlpha=0,this.photo=Rg(),this.canvas=document.createElement("canvas"),this.canvas.width=t.clientWidth||window.innerWidth,this.canvas.height=t.clientHeight||window.innerHeight,this.canvas.style.cssText="position:absolute;inset:0;display:block;cursor:none;touch-action:none;",this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx)throw new Error("Canvas 2D not supported");if(t.appendChild(this.canvas),this.scratch=document.createElement("canvas"),this.scratch.width=this.canvas.width,this.scratch.height=this.canvas.height,this.sctx=this.scratch.getContext("2d",{willReadFrequently:!0}),!this.sctx)throw new Error("Scratch canvas 2D not supported");Pg(this.sctx,this.scratch.width,this.scratch.height),this.img=new Image,this.img.onload=()=>{this.imgLoaded=!0},this.img.onerror=()=>{this.imgLoaded=!0},this.img.src=this.photo.file,this.canvas.addEventListener("mousemove",this._onMouseMove),this.canvas.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),this.canvas.addEventListener("touchstart",this._onTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.canvas.addEventListener("touchend",this._onTouchEnd),this.timerInterval=setInterval(()=>{this.done||(this.timeLeft--,this.timeLeft<=0&&this.finish())},1e3),this.loop()}handleMouseDown(t){this.pointerDown=!0;const e=this.canvas.getBoundingClientRect();this.lastX=t.clientX-e.left,this.lastY=t.clientY-e.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleMouseMove(t){const e=this.canvas.getBoundingClientRect(),n=t.clientX-e.left,i=t.clientY-e.top;this.cursorX=n,this.cursorY=i,this.pointerDown&&!this.done&&(this.scrape(this.lastX,this.lastY,n,i),this.lastX=n,this.lastY=i)}handleTouchStart(t){t.preventDefault(),this.pointerDown=!0;const e=t.touches[0],n=this.canvas.getBoundingClientRect();this.lastX=e.clientX-n.left,this.lastY=e.clientY-n.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleTouchMove(t){if(t.preventDefault(),!this.pointerDown||this.done)return;const e=t.touches[0],n=this.canvas.getBoundingClientRect(),i=e.clientX-n.left,o=e.clientY-n.top;this.cursorX=i,this.cursorY=o,this.scrape(this.lastX,this.lastY,i,o),this.lastX=i,this.lastY=o}scrape(t,e,n,i){if(!this.sctx||!this.scratch||this.done)return;Ig(this.sctx,t,e,n,i,45);const o=performance.now();o-this.lastSampleTime>this.SAMPLE_INTERVAL&&(this.lastSampleTime=o,this.revealed=ql(this.sctx,this.scratch.width,this.scratch.height),this.revealed>=.85&&this.finish())}loop(){if(this.done&&this.toastAlpha<=0)return;const t=this.ctx,e=this.canvas;if(!t||!e)return;const n=e.width,i=e.height;t.clearRect(0,0,n,i),this.imgLoaded&&this.img&&this.img.naturalWidth>0?Yl(t,this.img,n,i):(t.fillStyle="#2a2a20",t.fillRect(0,0,n,i)),this.scratch&&t.drawImage(this.scratch,0,0),this.done||this.drawHUD(t,n,i),this.cursorX>0&&!this.done&&Dg(t,this.cursorX,this.cursorY),this.toastAlpha>0&&(this.drawToast(t,n,i),this.toastAlpha-=.012),this.rafId=requestAnimationFrame(()=>this.loop())}drawHUD(t,e,n){const i=this.timeLeft/this.DURATION,o=e*.8,a=e*.1,r=16,l=14,c=7;t.fillStyle="rgba(0,0,0,0.4)",this.roundRect(t,a,r,o,l,c),t.fill();const d=i<.33?"#F07070":i<.6?"#F7C948":"#5EDB7D";t.fillStyle=d,this.roundRect(t,a,r,o*i,l,c),t.fill(),t.fillStyle="#fff",t.font=`bold ${Math.round(n*.03)}px system-ui`,t.textAlign="center",t.shadowColor="rgba(0,0,0,0.8)",t.shadowBlur=6,t.fillText(`${Math.ceil(this.timeLeft)}s`,e/2,r+l+22);const h=Math.round(this.revealed*100);t.font=`900 ${Math.round(n*.09)}px system-ui`,t.textAlign="center",t.fillStyle="rgba(255,255,255,0.9)",t.shadowColor="rgba(0,0,0,0.9)",t.shadowBlur=12,t.fillText(`${h}%`,e/2,n-32),t.shadowBlur=0,this.timeLeft>25&&(t.font=`bold ${Math.round(n*.03)}px system-ui`,t.fillStyle="rgba(255,255,255,0.85)",t.textAlign="center",t.fillText("🪣  Scrape away the plaster!",e/2,n/2))}roundRect(t,e,n,i,o,a){i<0||(t.beginPath(),t.moveTo(e+a,n),t.lineTo(e+i-a,n),t.quadraticCurveTo(e+i,n,e+i,n+a),t.lineTo(e+i,n+o-a),t.quadraticCurveTo(e+i,n+o,e+i-a,n+o),t.lineTo(e+a,n+o),t.quadraticCurveTo(e,n+o,e,n+o-a),t.lineTo(e,n+a),t.quadraticCurveTo(e,n,e+a,n),t.closePath())}drawToast(t,e,n){const i=Math.min(1,this.toastAlpha);t.save(),t.globalAlpha=i,t.fillStyle="rgba(0,0,0,0.7)",t.font=`bold ${Math.round(n*.035)}px system-ui`,t.textAlign="center";const o=this.toastMsg.split(`
`),a=Math.round(n*.045),r=o.length*a+24,l=n*.45-r/2,c=e*.85,d=(e-c)/2;this.roundRect(t,d,l,c,r,16),t.fill(),t.fillStyle="#fff",t.shadowColor="rgba(0,0,0,0.6)",t.shadowBlur=8,o.forEach((h,u)=>{t.fillText(h,e/2,l+22+u*a)}),t.restore()}finish(){if(this.done)return;this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.sctx&&this.scratch&&(this.revealed=ql(this.sctx,this.scratch.width,this.scratch.height));const t=Math.round(this.revealed*100),e=Math.max(20,t),n=e/100,i=this.photo,o=Cg(i.id),a=ws().length,r=id();this.showResultScreen(e,i,o,a,r,n)}showResultScreen(t,e,n,i,o,a){const r=this.ctx,l=this.canvas;if(!r||!l)return;const c=l.width,d=l.height;r.clearRect(0,0,c,d),this.imgLoaded&&this.img&&this.img.naturalWidth>0?Yl(r,this.img,c,d):(r.fillStyle="#2a2a20",r.fillRect(0,0,c,d)),this.scratch&&r.drawImage(this.scratch,0,0),r.fillStyle="rgba(0,0,0,0.65)",r.fillRect(0,0,c,d);const h=t>=85?"#5EDB7D":t>=60?"#F7C948":"#F07070";r.font=`900 ${Math.round(d*.15)}px system-ui`,r.textAlign="center",r.fillStyle=h,r.shadowColor="rgba(0,0,0,0.8)",r.shadowBlur=20,r.fillText(`${t}%`,c/2,d*.35),r.font=`bold ${Math.round(d*.04)}px system-ui`,r.fillStyle="#fff",r.shadowBlur=10,r.fillText(`📸 ${e.name}`,c/2,d*.47);let u;o?u="🏆 FULL TEM COLLECTION!":n?u="✨ NEW PHOTO UNLOCKED!":u="Already in your collection",r.font=`bold ${Math.round(d*.032)}px system-ui`,r.fillStyle=o?"#FFD700":n?"#5EDB7D":"#aaa",r.shadowBlur=8,r.fillText(u,c/2,d*.56),r.font=`${Math.round(d*.026)}px system-ui`,r.fillStyle="rgba(255,255,255,0.75)",r.shadowBlur=4,r.fillText(`Collection: ${i} / ${oi.length}`,c/2,d*.64),r.shadowBlur=0;const p=o?"🏆 Full TEM Collection complete!":n?`📸 New photo unlocked: ${e.name}`:`${e.name} — already in collection`,g={score:t,qualityPct:a,message:p};setTimeout(()=>{var x;return(x=this.onComplete)==null?void 0:x.call(this,g)},2800)}unmount(){this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.rafId&&cancelAnimationFrame(this.rafId),this.canvas&&(this.canvas.removeEventListener("mousemove",this._onMouseMove),this.canvas.removeEventListener("mousedown",this._onMouseDown),this.canvas.removeEventListener("touchstart",this._onTouchStart),this.canvas.removeEventListener("touchmove",this._onTouchMove),this.canvas.removeEventListener("touchend",this._onTouchEnd),this.canvas.remove()),window.removeEventListener("mouseup",this._onMouseUp),this.canvas=null,this.ctx=null,this.scratch=null,this.sctx=null,this.container=null,this.onComplete=null,this.img=null}}const xe=7,io=5,_n=io*xe,Fg=[-6,6],Bg=26,$s=5,jl=13,$l=11,Jl=3.5,Ug=-30,Si=.4;class Ng{constructor(){C(this,"overlay");C(this,"renderer");C(this,"scene");C(this,"camera");C(this,"rafId",0);C(this,"lastTs",0);C(this,"px",0);C(this,"py",0);C(this,"vx",0);C(this,"vy",0);C(this,"onGround",!1);C(this,"jumpsLeft",2);C(this,"climbPole",null);C(this,"swingBar",null);C(this,"swingAngle",0);C(this,"swingOmega",0);C(this,"char");C(this,"charGroup");C(this,"facingRight",!0);C(this,"platforms",[]);C(this,"poles",[]);C(this,"swingBars",[]);C(this,"heartsEl");C(this,"timerEl");C(this,"lives",3);C(this,"timer",90);C(this,"gameOver",!1);C(this,"delivered",!1);C(this,"keys",{left:!1,right:!1,up:!1,down:!1});C(this,"jumpTap",!1);C(this,"onCompleteFn")}start(t){this.onCompleteFn=t,this._createOverlay(),this._createScene(),this._buildBackground(),this._buildLevel(),this._buildHUD(),this._buildControls(),this.px=0,this.py=.5,this.lastTs=performance.now(),this.rafId=requestAnimationFrame(e=>this._loop(e))}_createOverlay(){this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position:fixed; inset:0; z-index:10000; overflow:hidden; touch-action:none;
      background:#87CEEB;
    `,document.body.appendChild(this.overlay)}_createScene(){const t=window.innerWidth,e=window.innerHeight,n=document.createElement("canvas");n.style.cssText="position:absolute;top:0;left:0;width:100%;height:100%;",this.overlay.appendChild(n),this.renderer=new fa({canvas:n,antialias:!0}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,2)),this.renderer.setSize(t,e),this.renderer.shadowMap.enabled=!0,this.scene=new pa,this.scene.background=new Mt(8900331),this.scene.fog=new _o(8900331,.018),this.camera=new De(42,t/e,.1,200),this.camera.position.set(0,12,20),this.camera.lookAt(0,10,0);const i=new _a(16777215,.6);this.scene.add(i);const o=new Oi(16775400,1.1);o.position.set(8,30,15),o.castShadow=!0,o.shadow.mapSize.set(1024,1024),o.shadow.camera.near=.5,o.shadow.camera.far=80,o.shadow.camera.left=-15,o.shadow.camera.right=15,o.shadow.camera.top=40,o.shadow.camera.bottom=-5,this.scene.add(o);const a=new Oi(12638463,.4);a.position.set(-5,10,5),this.scene.add(a),this.char=new Ms(kn.Jarrad),this.charGroup=this.char.group,this.charGroup.scale.setScalar(1),this.scene.add(this.charGroup)}_buildBackground(){const t=(i,o,a,r,l)=>{const c=new D(i,new j({color:o}));return c.position.set(a,r,l),c.receiveShadow=!0,this.scene.add(c),c};t(new de(80,60),11589872,0,22,-12);const e=[[-14,10],[-10,14],[-6,8],[8,16],[12,11],[16,9]];for(const[i,o]of e)t(new Q(4,o,1),6975632,i,o/2-1,-9);const n=_n+4;t(new Q(12,n,.6),15260864,0,n/2-1,-1.5),t(new Q(12.6,.5,.9),13945e3,0,n-1,-1.4),t(new Q(12,.4,.7),13681824,0,0,-1.4);for(let i=0;i<io;i++){const o=i*xe+2.5;for(const a of[-3.5,0,3.5])t(new Q(2.2,3.2,.2),3359846,a,o,-1.1),t(new Q(2,.15,.25),12300432,a,o+1.7,-1.05)}t(new Q(20,.5,5),3815474,0,-.25,.5),t(new Q(10,.5,1.2),13154440,0,.25,1),t(new Q(10,1.2,.15),12101752,0,.6,1.57),t(new Q(.15,1.2,1.2),12101752,-5,.6,1),t(new Q(.15,1.2,1.2),12101752,5,.6,1)}_buildLevel(){for(const t of Fg)this._addScaffoldPole(t,0,_n+3),this.poles.push({x:t,y1:0,y2:_n+3});this._addScaffoldPole(-2.5,0,_n+3),this._addScaffoldPole(2.5,0,_n+3);for(let t=0;t<=io;t++){const e=t*xe;this._addTube(-6,6,e,10066346,.07)}for(let t=0;t<io;t++){const e=t*xe,n=(t+1)*xe;this._addDiag(-6,e,6,n),this._addDiag(6,e,-6,n)}this._addPlat(-5.5,5.5,0,"normal"),this._addPlat(-5.5,-.8,xe*1,"normal"),this._addPlat(.8,5.5,xe*1,"normal"),this._addPlat(-5.5,-1,xe*2,"normal"),this._addPlat(1.5,4.5,xe*2,"crumble"),this._addPlat(-5.5,-1.8,xe*3,"normal"),this._addPlat(1.8,5.5,xe*3,"normal"),this._addPlat(-1.5,1.5,xe*3,"moving"),this._addPlat(-5.5,-2.5,xe*4,"normal"),this._addPlat(-.8,.8,xe*4+1.2,"normal"),this._addPlat(2.5,5.5,xe*4,"normal"),this._addSwingBar(0,xe*1+3.5,2.5),this._addSwingBar(0,xe*3+3.5,2.5),this._addPlat(-5.5,5.5,_n,"win"),this._addSign(0,_n+1.8,"⭐ DELIVER HERE ⭐",16746496),this._addBucket(-3.5,.8)}_addScaffoldPole(t,e,n){const i=n-e,o=new Wt(.07,.07,i,8),a=new j({color:10526896}),r=new D(o,a);r.position.set(t,e+i/2,.3),r.castShadow=!0,this.scene.add(r);for(let l=e;l<=n;l+=xe){const c=new he(.12,6,5),d=new D(c,a);d.position.set(t,l,.3),this.scene.add(d)}}_addTube(t,e,n,i,o){const a=e-t,r=new Wt(o,o,a,7),l=new j({color:i}),c=new D(r,l);c.rotation.z=Math.PI/2,c.position.set((t+e)/2,n,.3),this.scene.add(c)}_addDiag(t,e,n,i){const o=n-t,a=i-e,r=Math.sqrt(o*o+a*a),l=new Wt(.04,.04,r,6),c=new j({color:8947872}),d=new D(l,c);d.rotation.z=Math.atan2(a,o)-Math.PI/2,d.position.set((t+n)/2,(e+i)/2,.3),this.scene.add(d)}_addPlat(t,e,n,i){const o=e-t,a={normal:9134608,moving:13918224,crumble:8939042,win:16763904}[i],r=new Q(o,.28,.8),l=new j({color:a}),c=new D(r,l);c.position.set((t+e)/2,n+.14,.3),c.castShadow=!0,c.receiveShadow=!0,this.scene.add(c);for(let d=t+.6;d<e;d+=.9){const h=new Q(.06,.3,.82),u=new j({color:a-1118464}),p=new D(h,u);p.position.set(d-(t+e)/2,0,0),c.add(p)}this.platforms.push({x1:t,x2:e,y:n,mesh:c,type:i,moveDir:1,crumbleTimer:0,crumbled:!1})}_addSwingBar(t,e,n){const i=new Wt(.09,.09,3,8),o=new j({color:16755200,emissive:8930304,emissiveIntensity:.5}),a=new D(i,o);a.rotation.z=Math.PI/2,a.position.set(t,e,.5),this.scene.add(a);const r=new he(.22,8,8),l=new He({color:16772608,transparent:!0,opacity:.7}),c=new D(r,l);c.position.set(t,e,.6),this.scene.add(c),this.swingBars.push({anchorX:t,anchorY:e,radius:n,mesh:a})}_addSign(t,e,n,i){const o=new Q(6,.8,.15),a=new j({color:i,emissive:i,emissiveIntensity:.3}),r=new D(o,a);r.position.set(t,e,.5),this.scene.add(r)}_addBucket(t,e){const n=new Wt(.25,.2,.5,8),i=new j({color:12674667,emissive:6684689,emissiveIntensity:.3}),o=new D(n,i);o.position.set(t,e,.5),this.scene.add(o)}_buildHUD(){const t=document.createElement("div");t.style.cssText=`
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
    `;const e=document.createElement("div");e.style.cssText="display:grid; grid-template-columns:70px 70px 70px; grid-template-rows:70px 70px; gap:6px;";const n=(g,x,m,f)=>{const w=document.createElement("div");return w.style.cssText=`
        grid-row:${m}; grid-column:${f};
        background:${x}; border-radius:50%; color:#fff;
        font-size:22px; display:flex; align-items:center; justify-content:center;
        box-shadow:0 4px 10px rgba(0,0,0,0.4); touch-action:none; user-select:none;
        cursor:pointer;
      `,w.textContent=g,w},i=n("▲","rgba(60,60,160,0.88)",1,2),o=n("◀","rgba(70,70,70,0.88)",2,1),a=n("▼","rgba(60,60,160,0.88)",2,2),r=n("▶","rgba(70,70,70,0.88)",2,3);e.appendChild(i),e.appendChild(o),e.appendChild(a),e.appendChild(r);const l=document.createElement("div");l.style.cssText=`
      width:92px; height:92px; border-radius:50%;
      background:rgba(30,180,30,0.9); color:#fff;
      font-size:13px; font-weight:900; letter-spacing:0.5px;
      display:flex; align-items:center; justify-content:center;
      box-shadow:0 5px 15px rgba(0,0,0,0.45); touch-action:none; user-select:none;
      cursor:pointer;
    `,l.textContent="JUMP";const c=(g,x,m)=>{g.addEventListener("touchstart",f=>{f.preventDefault(),x()},{passive:!1}),g.addEventListener("touchend",f=>{f.preventDefault(),m()},{passive:!1}),g.addEventListener("mousedown",x),g.addEventListener("mouseup",m)};c(o,()=>this.keys.left=!0,()=>this.keys.left=!1),c(r,()=>this.keys.right=!0,()=>this.keys.right=!1),c(i,()=>this.keys.up=!0,()=>this.keys.up=!1),c(a,()=>this.keys.down=!0,()=>this.keys.down=!1);const d=()=>{this.jumpTap=!0};l.addEventListener("touchstart",g=>{g.preventDefault(),d()},{passive:!1}),l.addEventListener("mousedown",d);const h={ArrowLeft:"left",ArrowRight:"right",ArrowUp:"up",ArrowDown:"down",KeyA:"left",KeyD:"right",KeyW:"up",KeyS:"down"},u=g=>{if(h[g.code]){const x=h[g.code];x==="jump"?this.jumpTap=!0:this.keys[x]=!0}(g.code==="Space"||g.code==="KeyZ")&&(this.jumpTap=!0)},p=g=>{const x=h[g.code];x&&x!=="jump"&&(this.keys[x]=!1)};window.addEventListener("keydown",u),window.addEventListener("keyup",p),this.overlay.addEventListener("remove",()=>{window.removeEventListener("keydown",u),window.removeEventListener("keyup",p)}),t.appendChild(e),t.appendChild(l),this.overlay.appendChild(t)}_loop(t){if(this.gameOver)return;this.rafId=requestAnimationFrame(n=>this._loop(n));const e=Math.min((t-this.lastTs)/1e3,.05);this.lastTs=t,this._update(e),this.renderer.render(this.scene,this.camera),this.jumpTap=!1}_update(t){if(this.timer=Math.max(0,this.timer-t),this.timerEl.textContent=`⏱ ${Math.ceil(this.timer)}s`,this.timer<=0&&!this.delivered){this._end(!1);return}this.char.update(t);for(const n of this.platforms)if(n.type==="moving"&&(n.x1+=2.5*(n.moveDir??1)*t,n.x2+=2.5*(n.moveDir??1)*t,n.mesh.position.x=(n.x1+n.x2)/2,(n.x2>5.2||n.x1<-1.8)&&(n.moveDir=-(n.moveDir??1))),n.type==="crumble"&&!n.crumbled)if(this.onGround&&this.px>=n.x1-Si&&this.px<=n.x2+Si&&Math.abs(this.py-n.y)<.3){n.crumbleTimer=(n.crumbleTimer??0)+t;const o=Math.sin(n.crumbleTimer*40)*.06*Math.min(1,n.crumbleTimer);n.mesh.position.z=.3+o,n.crumbleTimer>1.2&&(n.crumbled=!0,n.mesh.visible=!1)}else(n.crumbleTimer??0)>0&&!n.crumbled&&(n.crumbleTimer=0);this.swingBar?this._physicsSwing(t):this.climbPole?this._physicsClimb(t):this._physicsPlatform(t),this.charGroup.position.set(this.px,this.py,.3),this.charGroup.rotation.y=this.facingRight?-.15:Math.PI+.15;const e=Math.max(8,Math.min(this.py+6,_n+2));if(this.camera.position.y+=(e-this.camera.position.y)*.07,this.camera.lookAt(0,this.camera.position.y-4,0),this.py<-3.5){this._loseLife();return}!this.delivered&&this.py>=_n-.5&&Math.abs(this.px)<5&&(this.delivered=!0,this._end(!0))}_physicsPlatform(t){if(!this.onGround){for(const e of this.poles)if(Math.abs(this.px-e.x)<.5&&this.py>=e.y1-.5&&this.py<=e.y2&&this.keys.up){this.climbPole=e,this.px=e.x,this.vx=0,this.vy=0;return}}if(this.onGround||(this.vy=Math.max(this.vy-Bg*t,Ug)),this.keys.left?(this.vx=-$s,this.facingRight=!1):this.keys.right?(this.vx=$s,this.facingRight=!0):this.vx*=.6,this.jumpTap)if(this.onGround)this.vy=jl,this.onGround=!1,this.jumpsLeft=1;else if(this.jumpsLeft>0)this.vy=$l,this.jumpsLeft--;else for(const e of this.swingBars){const n=this.px-e.anchorX,i=this.py-e.anchorY,o=Math.sqrt(n*n+i*i);if(o<e.radius+1.5&&this.py<e.anchorY+.5){this.swingBar=e;const a=Math.max(o,e.radius);this.swingAngle=Math.atan2(n,-i),this.swingOmega=this.vx/a,this.vx=0,this.vy=0;return}}if(!this.onGround)for(const e of this.swingBars){const n=Math.abs(this.py-e.anchorY),i=Math.abs(this.px-e.anchorX);if(n<.6&&i<e.radius&&this.vy<0){this.swingBar=e,this.swingAngle=Math.atan2(this.px-e.anchorX,-(this.py-e.anchorY)),this.swingOmega=this.vx/e.radius,this.vx=0,this.vy=0;return}}this.px+=this.vx*t,this.py+=this.vy*t,this.px=Math.max(-6.2,Math.min(6.2,this.px)),this.onGround=!1;for(const e of this.platforms)if(!e.crumbled&&this.px+Si>e.x1&&this.px-Si<e.x2&&this.py>e.y-.5&&this.py<e.y+1&&this.vy<=0){this.py=e.y,this.vy=0,this.onGround=!0,this.jumpsLeft=2;break}}_physicsClimb(t){const e=this.climbPole;this.keys.up&&(this.py+=Jl*t),this.keys.down&&(this.py-=Jl*t);for(const n of this.platforms)if(!n.crumbled&&Math.abs(this.py-n.y)<.4&&this.px>=n.x1&&this.px<=n.x2){this.climbPole=null,this.py=n.y,this.onGround=!0,this.jumpsLeft=2;return}(this.py<e.y1||this.py>e.y2)&&(this.climbPole=null),this.jumpTap&&(this.climbPole=null,this.vy=jl*.85,this.jumpsLeft=1,this.keys.left?(this.vx=-$s*1.3,this.facingRight=!1):this.keys.right&&(this.vx=$s*1.3,this.facingRight=!0))}_physicsSwing(t){const e=this.swingBar,n=e.radius;if(this.swingOmega+=-(9.8/n)*Math.sin(this.swingAngle)*t,this.keys.left&&(this.swingOmega-=4*t),this.keys.right&&(this.swingOmega+=4*t),this.swingOmega*=.993,this.swingAngle+=this.swingOmega*t,this.px=e.anchorX+n*Math.sin(this.swingAngle),this.py=e.anchorY-n*Math.cos(this.swingAngle),this.facingRight=this.swingOmega>0,this.jumpTap){this.swingBar=null;const i=this.swingOmega*n;this.vx=i*Math.cos(this.swingAngle)*1.4,this.vy=Math.max($l*.75,Math.abs(i)*.8+4),this.jumpsLeft=1,this.onGround=!1}for(const i of this.platforms)!i.crumbled&&this.px+Si>i.x1&&this.px-Si<i.x2&&Math.abs(this.py-i.y)<.4&&this.swingOmega<1.5&&(this.swingBar=null,this.py=i.y,this.vx=0,this.vy=0,this.onGround=!0,this.jumpsLeft=2)}_loseLife(){if(this.lives--,this._updateHearts(),this.lives<=0){this._end(!1);return}const t=Math.max(0,Math.floor(this.py/xe)-1);this.px=0,this.py=t*xe,this.vx=0,this.vy=0,this.onGround=!1,this.jumpsLeft=2,this.climbPole=null,this.swingBar=null}_end(t){if(this.gameOver)return;this.gameOver=!0,cancelAnimationFrame(this.rafId);const e=t?1:-.3,n=document.createElement("div");n.style.cssText=`
      position:absolute; top:50%; left:50%; transform:translate(-50%,-55%);
      background:rgba(0,0,0,0.88); padding:32px 40px;
      border-radius:22px; font-size:26px; font-weight:900; text-align:center;
      font-family:system-ui,sans-serif; z-index:200;
      box-shadow:0 8px 32px rgba(0,0,0,0.6);
      border:2px solid ${t?"#FFD700":"#C1666B"};
      color: ${t?"#FFD97A":"#FF6B6B"};
    `,n.innerHTML=t?'🏆 DELIVERED!<br><small style="font-size:15px;font-weight:500;color:#ccc;">Full pay — nice work, Jarrad.</small>':`💀 SCAFFOLD FAIL<br><small style="font-size:15px;font-weight:500;color:#ccc;">−30% penalty. Jarrad's blaming his phone.</small>`,this.overlay.appendChild(n),setTimeout(()=>{this._cleanup(),this.onCompleteFn({score:t?100:0,qualityPct:e,message:t?"Scaffold conquered!":"Scaffold failed — 30% deducted."})},t?1800:2200)}_cleanup(){cancelAnimationFrame(this.rafId),this.renderer.dispose(),this.overlay.dispatchEvent(new Event("remove")),this.overlay.remove()}mount(t,e){this.start(e)}unmount(){this.gameOver||(this.gameOver=!0,this._cleanup())}}class Og{constructor(){C(this,"overlay");C(this,"active",!1);C(this,"trowelingGame",null);C(this,"scaffoldGame",null);C(this,"safetyTimer",null);this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,e.addEventListener("click",()=>{this.stop(),t({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(e),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),t({score:70,qualityPct:.7,message:"Time up!"}))},6e4),setTimeout(()=>{if(this.active)try{this.trowelingGame=new Lg,this.trowelingGame.mount(this.overlay,n=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),t(n)})}catch(n){console.error("TrowelingGame init failed:",n);const i=document.createElement("div");i.style.cssText=`
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
    `,e.addEventListener("click",()=>{this.stop(),t({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(e),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),t({score:50,qualityPct:.5,message:"Time up on the scaffold!"}))},9e4),setTimeout(()=>{if(this.active)try{this.scaffoldGame=new Ng,this.scaffoldGame.mount(this.overlay,n=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),t(n)})}catch(n){console.error("ScaffoldGame init failed:",n);const i=document.createElement("div");i.style.cssText=`
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; height:100%; color:#fff;
          font-family:system-ui,sans-serif; gap:24px; padding:40px;
          text-align:center;
        `,i.innerHTML=`
          <div style="font-size:60px">🪣</div>
          <div style="font-size:30px; font-weight:800;">SCAFFOLD CLIMBED!</div>
          <div style="font-size:16px; opacity:0.7;">Tap DONE to collect your pay</div>
        `,this.overlay.appendChild(i)}},120)}startRandom(t){Math.random()<.5?this.startTroweling(t):this.startScaffold(t)}stop(){this.safetyTimer&&(clearTimeout(this.safetyTimer),this.safetyTimer=null),this.trowelingGame&&(this.trowelingGame.unmount(),this.trowelingGame=null),this.scaffoldGame&&(this.scaffoldGame.unmount(),this.scaffoldGame=null),this.overlay.style.display="none",this.overlay.innerHTML="",this.active=!1}}function sd(){return localStorage.getItem("tem-rush-btc-achieved")==="1"}function kg(s={}){const t=s.recipientName??"Apprentice Plasterer",e=s.dateStr??new Date().toLocaleDateString("en-AU",{day:"numeric",month:"long",year:"numeric"}),n=s.btcAchieved??sd(),i=900,o=n?820:640,a=document.createElement("canvas");a.width=i,a.height=o;const r=a.getContext("2d");r.fillStyle="#0D0B08",r.fillRect(0,0,i,o);const l=r.createLinearGradient(0,0,i,o);l.addColorStop(0,"rgba(40,32,20,0.95)"),l.addColorStop(.5,"rgba(28,22,14,0.98)"),l.addColorStop(1,"rgba(40,32,20,0.95)"),r.fillStyle=l,r.fillRect(0,0,i,o),r.strokeStyle="#C8A86A",r.lineWidth=3,r.strokeRect(18,18,i-36,o-36),r.strokeStyle="rgba(200,168,106,0.35)",r.lineWidth=1,r.strokeRect(26,26,i-52,o-52);const c=[[36,36],[i-36,36],[36,o-36],[i-36,o-36]];for(const[I,A]of c)r.strokeStyle="#C8A86A",r.lineWidth=1.5,r.beginPath(),r.arc(I,A,10,0,Math.PI*2),r.stroke(),r.beginPath(),r.arc(I,A,5,0,Math.PI*2),r.fillStyle="#C8A86A",r.fill();const d=i/2,h=74;r.fillStyle="#C8A86A",r.fillRect(d-3,h,6,22);for(let I=0;I<3;I++){const A=20-I*4,T=h-I*14;r.beginPath(),r.arc(d,T,A,0,Math.PI*2),r.fill()}r.textAlign="center",r.fillStyle="#C8A86A",r.font="700 11px 'Courier New', monospace",r.letterSpacing="4px",r.fillText("TROWELED EARTH MELBOURNE",i/2,148),r.fillStyle="rgba(200,168,106,0.45)",r.fillRect(i/2-180,158,360,1),r.fillStyle="#F0E8D8",r.font="900 34px system-ui, sans-serif",r.letterSpacing="0px",r.fillText("Certificate of Completion",i/2,200),r.fillStyle="rgba(200,168,106,0.45)",r.fillRect(i/2-220,214,440,1),r.fillStyle="rgba(240,232,216,0.55)",r.font="400 15px system-ui, sans-serif",r.fillText("This certifies that",i/2,258),r.fillStyle="#FFD97A",r.font="700 28px system-ui, sans-serif",r.fillText(t,i/2,300),r.fillStyle="rgba(200,168,106,0.45)",r.fillRect(i/2-200,312,400,1),r.fillStyle="rgba(240,232,216,0.55)",r.font="400 15px system-ui, sans-serif",r.fillText("has completed all TEM Rush training missions",i/2,348),r.fillText("and achieved full collection of Troweled Earth works.",i/2,372);const u=i/2-200,p=394,g=400,x=58;r.fillStyle="rgba(200,168,106,0.08)",r.strokeStyle="rgba(200,168,106,0.3)",r.lineWidth=1,r.beginPath(),r.roundRect(u,p,g,x,8),r.fill(),r.stroke(),r.fillStyle="#C8A86A",r.font="700 11px 'Courier New', monospace",r.letterSpacing="2px",r.fillText("QUALIFICATION",i/2,p+20),r.fillStyle="#F0E8D8",r.font="700 17px system-ui, sans-serif",r.letterSpacing="0px",r.fillText("TEM Rush — Plasterer's Apprentice",i/2,p+44);const m=i/2-160,f=466,w=320,S=52;r.fillStyle="rgba(193,102,107,0.15)",r.strokeStyle="rgba(193,102,107,0.5)",r.lineWidth=1.5,r.beginPath(),r.roundRect(m,f,w,S,8),r.fill(),r.stroke(),r.fillStyle="#C1666B",r.font="700 11px 'Courier New', monospace",r.letterSpacing="2px",r.fillText("5% OFF TEM STORE — USE CODE:",i/2,f+20),r.fillStyle="#FFD97A",r.font="900 20px system-ui, sans-serif",r.letterSpacing="3px",r.fillText("TEMRUSH5",i/2,f+41),r.letterSpacing="0px";const _=556;if(r.strokeStyle="rgba(200,168,106,0.4)",r.lineWidth=1,r.beginPath(),r.moveTo(i/2-260,_),r.lineTo(i/2-80,_),r.stroke(),r.beginPath(),r.moveTo(i/2+80,_),r.lineTo(i/2+260,_),r.stroke(),r.fillStyle="rgba(240,232,216,0.5)",r.font="400 12px system-ui, sans-serif",r.fillText("Matt Maloy",i/2-170,_+16),r.fillText(e,i/2+170,_+16),r.fillStyle="rgba(200,168,106,0.45)",r.font="400 10px 'Courier New', monospace",r.fillText("Director, Troweled Earth Melbourne",i/2-170,_+32),r.fillText("Date of Completion",i/2+170,_+32),r.fillStyle="rgba(200,168,106,0.06)",r.font="900 90px system-ui, sans-serif",r.save(),r.translate(i/2,o/2+20),r.rotate(-.18),r.fillText("CERTIFIED",0,0),r.restore(),n){r.strokeStyle="rgba(247,147,26,0.35)",r.lineWidth=1,r.beginPath(),r.moveTo(36,602),r.lineTo(i-36,602),r.stroke(),r.fillStyle="#F7931A",r.font="900 14px monospace",r.letterSpacing="2px",r.textAlign="center",r.fillText("₿  1 BITCOIN ACHIEVEMENT — BONUS REWARDS",i/2,624);const A=360,T=90,R=20,b=i/2-A-R/2,y=i/2+R/2,P=638,G=(O,H,$,Y,X)=>{r.fillStyle="rgba(247,147,26,0.10)",r.strokeStyle="rgba(247,147,26,0.40)",r.lineWidth=1,r.beginPath(),r.roundRect(O,H,A,T,8),r.fill(),r.stroke(),r.textAlign="center",r.fillStyle="#F7931A",r.font="700 11px monospace",r.letterSpacing="1px",r.fillText(`${$}  ${Y}`,O+A/2,H+22),r.fillStyle="rgba(240,232,216,0.5)",r.font="400 11px system-ui",r.letterSpacing="0px",r.fillText("USE CODE AT CHECKOUT:",O+A/2,H+46),r.fillStyle="#FFD97A",r.font="900 18px monospace",r.letterSpacing="2px",r.fillText(X,O+A/2,H+72)};G(b,P,"🎽","10% OFF TEM MERCH STORE","BTCPLASTER10"),G(y,P,"🪣","5% OFF MATERIAL SALES","BTCMAT5"),r.letterSpacing="0px",r.textAlign="center",r.fillStyle="rgba(200,168,106,0.4)",r.font="400 10px monospace",r.fillText("Present this certificate at participating TEM retail stores",i/2,746)}return a.toDataURL("image/png")}const zg="https://troweledearthmelbourne.com.au",Kl="TEMRUSH5",Zl="tem-rush-cert-unlocked";class xs{constructor(){C(this,"overlay",null);C(this,"certDataUrl",null)}static isUnlocked(){return localStorage.getItem(Zl)==="1"}trigger(){localStorage.setItem(Zl,"1"),this._show(!0)}open(){xs.isUnlocked()&&this._show(!1)}_show(t){this.overlay&&(this.overlay.remove(),this.overlay=null),this.overlay=document.createElement("div"),this.overlay.style.cssText=`
      position: fixed; inset: 0; z-index: 30000;
      background: rgba(5,4,2,0.97);
      display: flex; flex-direction: column;
      align-items: center; justify-content: flex-start;
      overflow-y: auto;
      font-family: system-ui, -apple-system, sans-serif;
      touch-action: pan-y;
    `,document.body.appendChild(this.overlay);const e=document.createElement("div");e.style.cssText=`
      width: 100%; max-width: 560px;
      padding: 32px 20px 60px;
      box-sizing: border-box;
      display: flex; flex-direction: column; gap: 20px;
    `,this.overlay.appendChild(e);const n=document.createElement("div");n.style.cssText="display:flex; justify-content:flex-end;";const i=document.createElement("button");if(i.textContent="✕",i.style.cssText=`
      background: rgba(255,255,255,0.1); border: none;
      color: #fff; font-size: 18px; width: 38px; height: 38px;
      border-radius: 50%; cursor: pointer; touch-action: manipulation;
    `,i.addEventListener("click",()=>this._close()),n.appendChild(i),e.appendChild(n),t){const l=document.createElement("div");l.style.cssText=`
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
      `,e.appendChild(l)}else{const l=document.createElement("div");l.style.cssText="text-align:center;",l.innerHTML=`
        <div style="font-size:clamp(36px,10vw,56px);">🏆</div>
        <div style="color:#FFD97A; font-size:clamp(18px,5vw,26px); font-weight:900; margin-top:8px;">Your Rewards</div>
      `,e.appendChild(l)}const o=document.createElement("div");o.style.cssText=`
      background: linear-gradient(135deg, rgba(193,102,107,0.18) 0%, rgba(193,102,107,0.08) 100%);
      border: 1.5px solid rgba(193,102,107,0.5);
      border-radius: 16px; padding: 20px;
      display: flex; flex-direction: column; gap: 10px;
    `,o.innerHTML=`
      <div style="color:#C1666B; font-size:12px; font-weight:700; letter-spacing:2px;">🎁  REWARD #1 — TEM STORE</div>
      <div style="color:#F0E8D8; font-size:clamp(14px,4vw,17px); line-height:1.6;">
        5% off everything at<br>
        <a href="${zg}" target="_blank"
           style="color:#C8A86A; font-weight:700; text-decoration:none;">troweledearthmelbourne.com.au</a>
      </div>
      <div style="background:rgba(0,0,0,0.4); border:1px solid rgba(200,168,106,0.4); border-radius:10px;
                  padding:14px; text-align:center;">
        <div style="color:rgba(200,168,106,0.7); font-size:11px; letter-spacing:2px; margin-bottom:6px; font-family:monospace;">
          USE PROMO CODE AT CHECKOUT
        </div>
        <div style="color:#FFD97A; font-size:clamp(22px,7vw,32px); font-weight:900; letter-spacing:4px; font-family:monospace;">
          ${Kl}
        </div>
      </div>
      <button id="copy-code-btn" style="
        background:rgba(200,168,106,0.15); border:1px solid rgba(200,168,106,0.4);
        color:#C8A86A; font-size:13px; font-weight:700; border-radius:8px;
        padding:10px; cursor:pointer; touch-action:manipulation; width:100%;
      ">📋 Copy Code</button>
    `,e.appendChild(o),setTimeout(()=>{const l=document.getElementById("copy-code-btn");l&&l.addEventListener("click",()=>{var c;(c=navigator.clipboard)==null||c.writeText(Kl).then(()=>{l.textContent="✓ Copied!",setTimeout(()=>{l.textContent="📋 Copy Code"},2e3)})})},0);const a=document.createElement("div");a.style.cssText=`
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
    `;try{this.certDataUrl=kg({btcAchieved:sd()});const l=document.createElement("img");l.src=this.certDataUrl,l.style.cssText=`
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
    `,a.appendChild(r),e.appendChild(a),setTimeout(()=>{var l,c;(l=document.getElementById("view-cert-btn"))==null||l.addEventListener("click",()=>this._openCertFull()),(c=document.getElementById("save-cert-btn"))==null||c.addEventListener("click",()=>this._downloadCert())},0),!document.getElementById("reward-styles")){const l=document.createElement("style");l.id="reward-styles",l.textContent=`
        @keyframes rewardPop {
          from { transform: scale(0.7) translateY(30px); opacity: 0; }
          to   { transform: scale(1) translateY(0);      opacity: 1; }
        }
      `,document.head.appendChild(l)}}_openCertFull(){if(!this.certDataUrl)return;const t=document.createElement("div");t.style.cssText=`
      position: fixed; inset: 0; z-index: 40000;
      background: rgba(0,0,0,0.95);
      display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      padding: 20px; box-sizing: border-box;
      touch-action: manipulation;
    `;const e=document.createElement("img");e.src=this.certDataUrl,e.style.cssText=`
      max-width: 100%; max-height: 85vh;
      border-radius: 12px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.8);
    `;const n=document.createElement("button");n.textContent="✕ Close",n.style.cssText=`
      margin-top: 16px; background: rgba(255,255,255,0.1); border: none;
      color: #fff; font-size: 15px; font-weight: 700;
      border-radius: 8px; padding: 10px 24px; cursor: pointer;
      touch-action: manipulation;
    `,n.addEventListener("click",()=>t.remove()),t.addEventListener("click",i=>{i.target===t&&t.remove()}),t.appendChild(e),t.appendChild(n),document.body.appendChild(t)}_downloadCert(){if(!this.certDataUrl)return;const t=document.createElement("a");t.href=this.certDataUrl,t.download="TEM-Rush-Certificate.png",t.click()}_close(){this.overlay&&(this.overlay.remove(),this.overlay=null)}}class Gg{constructor(){C(this,"overlay",null);C(this,"rewardScreen",new xs)}show(){if(this.overlay){this.refresh(),this.overlay.style.display="flex";return}this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,this.overlay.appendChild(o);const a=document.createElement("div");a.id="gallery-encourage",a.style.cssText=`
      width: 100%; max-width: 600px;
      text-align: center;
      color: rgba(200,184,154,0.7);
      font-size: clamp(13px, 3vw, 16px);
      padding: 0 20px 40px;
      box-sizing: border-box;
    `,this.overlay.appendChild(a),this.overlay.addEventListener("click",r=>{r.target===this.overlay&&this.hide()}),document.body.appendChild(this.overlay),this.refresh()}refresh(){if(!this.overlay)return;const t=ws(),e=t.length,n=oi.length,i=this.overlay.querySelector("#gallery-progress-wrap");if(i){i.innerHTML="";const r=document.createElement("div");r.style.cssText=`
        color: #fff; font-size: clamp(13px,3vw,16px);
        font-weight: 700; margin-bottom: 8px;
      `,r.textContent=e>=n?`🏆 FULL COLLECTION — ${e}/${n}`:`Collection: ${e} / ${n}`,i.appendChild(r);const l=document.createElement("div");l.style.cssText=`
        width: 100%; height: 10px; background: rgba(255,255,255,0.1);
        border-radius: 6px; overflow: hidden;
      `;const c=document.createElement("div");c.style.cssText=`
        height: 100%; border-radius: 6px;
        background: ${e>=n?"#FFD700":"#C8B89A"};
        width: ${Math.round(e/n*100)}%;
        transition: width 0.5s ease;
      `,l.appendChild(c),i.appendChild(l)}const o=this.overlay.querySelector("#gallery-grid");o&&(o.innerHTML="",oi.forEach(r=>{const l=t.includes(r.id),c=document.createElement("div");if(c.style.cssText=`
          border-radius: 12px; overflow: hidden;
          position: relative; aspect-ratio: 4/3;
          background: ${l?"#1a1a14":"rgba(255,255,255,0.04)"};
          border: 1.5px solid ${l?"rgba(200,184,154,0.4)":"rgba(255,255,255,0.08)"};
          box-shadow: 0 2px 12px rgba(0,0,0,0.5);
        `,l){const d=document.createElement("img");d.src=r.file,d.alt=r.name,d.style.cssText=`
            width: 100%; height: 100%;
            object-fit: cover;
            filter: blur(1px) brightness(0.75);
            display: block;
          `,c.appendChild(d);const h=document.createElement("div");h.style.cssText=`
            position: absolute; bottom: 0; left: 0; right: 0;
            padding: 8px 10px 10px;
            background: linear-gradient(transparent, rgba(0,0,0,0.85));
            color: #fff; font-size: clamp(11px,2.5vw,14px);
            font-weight: 700; text-align: center;
          `,h.textContent=r.name,c.appendChild(h)}else{const d=document.createElement("div");d.style.cssText=`
            width: 100%; height: 100%;
            display: flex; flex-direction: column;
            align-items: center; justify-content: center;
            gap: 8px;
          `,d.innerHTML=`
            <div style="font-size: clamp(24px,8vw,40px); opacity:0.35;">🔒</div>
            <div style="color:rgba(255,255,255,0.25); font-size:clamp(12px,3vw,16px); font-weight:700;">???</div>
          `,c.appendChild(d)}o.appendChild(c)}));const a=this.overlay.querySelector("#gallery-encourage");a&&(e>=n?(a.innerHTML=`
          <div style="margin-bottom:12px;">🏆 You've scraped them all. Matt's proud. Sort of.</div>
          <button id="gallery-rewards-btn" style="
            background: linear-gradient(135deg,#C8A86A,#A07840);
            color:#0D0B08; border:none; border-radius:12px;
            padding:14px 28px; font-size:15px; font-weight:900;
            cursor:pointer; touch-action:manipulation;
            letter-spacing:0.5px; box-shadow:0 4px 16px rgba(200,168,106,0.35);
          ">🎁 View Rewards &amp; Certificate</button>
        `,setTimeout(()=>{var r;(r=document.getElementById("gallery-rewards-btn"))==null||r.addEventListener("click",()=>{this.hide(),this.rewardScreen.open()})},0)):e>=6?a.textContent="🔥 Almost there — keep scraping!":e>=3?a.textContent="💪 Nice collection forming. More plastering to do!":e===0?a.textContent="🪣 No photos yet — complete jobs to reveal TEM work!":a.textContent="✨ Keep scraping to unlock all 8 TEM photos!")}hide(){this.overlay&&(this.overlay.style.display="none")}}const Ql=[15087942,2201331,16757504,5025616,10233776,16739125],tc=14,ec=8,Hg=6,nc=.6;function Vg(s){const t=new Nt,e=new j({color:s}),n=new D(new Q(3.5,1.2,6.5),e);n.position.set(0,.6,0),n.castShadow=!0,t.add(n);const i=new j({color:s}),o=new D(new Q(2.5,.9,3.5),i);o.position.set(0,1.65,0),o.castShadow=!0,t.add(o);const a=new j({color:1118481}),r=[[-1.8,.4,2.2],[1.8,.4,2.2],[-1.8,.4,-2.2],[1.8,.4,-2.2]];for(const[h,u,p]of r){const g=new D(new Wt(.5,.5,.4,8),a);g.rotation.z=Math.PI/2,g.position.set(h,u,p),g.castShadow=!0,t.add(g)}const l=new j({color:3359829}),c=new D(new Q(2.3,.7,.1),l);c.position.set(0,1.4,-3.3),t.add(c);const d=new D(new Q(2.3,.7,.1),l);return d.position.set(0,1.4,3.3),t.add(d),t}function Wg(s,t){return s==="x"?t===1?-Math.PI/2:Math.PI/2:t===1?Math.PI:0}class Xg{constructor(t){C(this,"cars",[]);C(this,"scene");this.scene=t,this._spawn()}_spawn(){const t=[-200,-160,-120,-80,-40,0,40,80,120,160,200],e=n=>{const i=Ql[Math.floor(Math.random()*Ql.length)],o=Vg(i),a=t[Math.floor(Math.random()*t.length)],r=Math.random()>.5?2:-2,l=10+Math.random()*10,c=Math.random()>.5?1:-1,d=-200+Math.random()*400;o.rotation.y=Wg(n,c);const h={group:o,axis:n,roadPos:a,laneOffset:r,baseSpeed:l,currentSpeed:l,dir:c,pos:d,nudgeVel:0};this.cars.push(h),this.scene.add(o),this._applyPosition(h)};for(let n=0;n<14;n++)e("z");for(let n=0;n<14;n++)e("x")}_applyPosition(t){t.axis==="x"?t.group.position.set(t.pos,0,t.roadPos+t.laneOffset):t.group.position.set(t.roadPos+t.laneOffset,0,t.pos)}update(t,e,n){for(const i of this.cars){const o=i.group.position.x,a=i.group.position.z;let r=1/0,l=1/0;if(i.axis==="x"){const h=(e-o)*i.dir;l=Math.abs(n-a),r=h}else{const h=(n-a)*i.dir;l=Math.abs(e-o),r=h}const c=l<5,d=r>0&&r<tc;if(c&&d){const h=Math.max(0,(r-ec)/(tc-ec));i.currentSpeed=i.baseSpeed*h}else i.currentSpeed=Math.min(i.baseSpeed,i.currentSpeed+Hg*t);Math.abs(i.nudgeVel)>.05?(i.pos+=i.nudgeVel*t,i.nudgeVel*=Math.max(0,1-6*t)):i.nudgeVel=0,i.pos+=i.dir*i.currentSpeed*t,i.pos>235&&(i.pos=-235),i.pos<-235&&(i.pos=235),this._applyPosition(i)}}resolveVan(t,e,n=1.8){let i=t,o=e,a=!1;for(const r of this.cars){const l=r.group.position.x,c=r.group.position.z,d=(r.axis==="x"?3.25:1.75)+n,h=(r.axis==="x"?1.75:3.25)+n,u=i-l,p=o-c;if(Math.abs(u)<d&&Math.abs(p)<h){const g=d-Math.abs(u),x=h-Math.abs(p);if(g<x){const m=u<0?-1:1;i+=m*g,r.axis==="x"&&(r.nudgeVel+=m*nc*-1*r.dir)}else{const m=p<0?-1:1;o+=m*x,r.axis==="z"&&(r.nudgeVel+=m*nc*-1*r.dir)}r.currentSpeed=0,a=!0}}return{x:i,z:o,hit:a}}checkVanCollision(t,e){const n=this.resolveVan(t,e);return{hit:n.hit,pushX:n.x-t,pushZ:n.z-e}}}const ic=[16032353,15167313,2792847,2508371,15320170,11066076,16739179,7029286],qg=16767916,Yg=40,sc=8;function jg(s){const t=new Nt,e=new j({color:s}),n=new j({color:qg}),i=new j({color:s}),o=new D(new Wt(.3,.35,1.1,7),e);o.position.set(0,.55,0),t.add(o);const a=new D(new he(.28,6,5),n);a.position.set(0,1.28,0),t.add(a);const r=new D(new Q(.15,.65,.15),e);r.position.set(-.45,.75,0),r.rotation.z=.15,t.add(r);const l=new D(new Q(.15,.65,.15),e);l.position.set(.45,.75,0),l.rotation.z=-.15,t.add(l);const c=new D(new Q(.18,.55,.18),i);c.position.set(-.18,0,.05),t.add(c);const d=new D(new Q(.18,.55,.18),i);return d.position.set(.18,0,-.05),t.add(d),{group:t,leftArm:r,rightArm:l,leftLeg:c,rightLeg:d}}class $g{constructor(t){C(this,"pedestrians",[]);C(this,"scene");this.scene=t,this._spawn()}_spawn(){const t=[];for(let n=-200;n<=200;n+=40)t.push(n);const e=n=>{const i=ic[Math.floor(Math.random()*ic.length)],{group:o,leftArm:a,rightArm:r,leftLeg:l,rightLeg:c}=jg(i),d=t[Math.floor(Math.random()*t.length)],h=Math.random()>.5?5:-5,u=d+h,p=[];for(let I=-240;I<240;I+=40)p.push(I);const g=p[Math.floor(Math.random()*p.length)],x=g+sc/2,m=g+Yg-sc/2,f=x+Math.random()*(m-x),w=Math.random()>.5?1:-1,S=2+Math.random()*1.5,_={group:o,axis:n,roadPos:u,segStart:x,segEnd:m,pos:f,dir:w,speed:S,scattering:!1,scatterTimer:0,scatterDirX:0,scatterDirZ:0,walkCycle:Math.random()*Math.PI*2,leftArm:a,rightArm:r,leftLeg:l,rightLeg:c};this.pedestrians.push(_),this.scene.add(o),this._applyPosition(_),this._applyFacing(_)};for(let n=0;n<20;n++)e("x");for(let n=0;n<20;n++)e("z")}_applyPosition(t){t.axis==="x"?t.group.position.set(t.pos,0,t.roadPos):t.group.position.set(t.roadPos,0,t.pos)}_applyFacing(t){if(t.scattering){t.group.rotation.y=Math.atan2(t.scatterDirX,t.scatterDirZ);return}t.axis==="x"?t.group.rotation.y=t.dir===1?-Math.PI/2:Math.PI/2:t.group.rotation.y=t.dir===1?Math.PI:0}update(t,e,n){for(const i of this.pedestrians){const o=i.group.position.x,a=i.group.position.z,r=o-e,l=a-n,c=Math.sqrt(r*r+l*l);if(!i.scattering&&c<7){i.scattering=!0,i.scatterTimer=2.5;const u=Math.max(c,.01);i.scatterDirX=r/u,i.scatterDirZ=l/u}i.scattering?(i.group.position.x+=i.scatterDirX*12*t,i.group.position.z+=i.scatterDirZ*12*t,i.scatterTimer-=t,i.scatterTimer<=0&&(i.scattering=!1,i.axis==="x"?i.pos=Math.max(i.segStart,Math.min(i.segEnd,i.group.position.x)):i.pos=Math.max(i.segStart,Math.min(i.segEnd,i.group.position.z)),this._applyPosition(i))):(i.pos+=i.dir*i.speed*t,i.pos>=i.segEnd?(i.pos=i.segEnd,i.dir=-1):i.pos<=i.segStart&&(i.pos=i.segStart,i.dir=1),this._applyPosition(i)),this._applyFacing(i);const d=i.scattering?12:i.speed;i.walkCycle+=d*t*2;const h=Math.sin(i.walkCycle);i.leftArm.rotation.z=h*.4+.15,i.rightArm.rotation.z=-h*.4-.15,i.leftLeg.rotation.x=h*.5,i.rightLeg.rotation.x=-h*.5}}}const yn=class yn{constructor(t){C(this,"indicator");C(this,"scene");C(this,"lastVisit",-30);this.scene=t,this.indicator=new D(new he(1.5,10,8),new j({color:13918762,emissive:new Mt(10498064),emissiveIntensity:.8})),this.indicator.position.set(yn.POS.x,10,yn.POS.z),this.scene.add(this.indicator)}update(t){this.indicator.position.y=10+Math.sin(Date.now()*.002)*.5,this.indicator.rotation.y+=t*1.5}isNearby(t,e){const n=t-yn.POS.x,i=e-yn.POS.z;return Math.sqrt(n*n+i*i)<yn.TRIGGER_RADIUS}tryVisit(t,e){if(!this.isNearby(t,e))return!1;const n=Date.now()/1e3;return n-this.lastVisit<20?!1:(this.lastVisit=n,!0)}};C(yn,"POS",{x:-60,z:-100}),C(yn,"TRIGGER_RADIUS",12);let Qr=yn;class Jg{constructor(){C(this,"level",0);C(this,"isUrgent",!1);C(this,"lastUrgentToast",0);C(this,"caffeinated",!1);C(this,"caffeineTimer",0)}update(t,e){this.caffeinated&&(this.caffeineTimer-=t,this.caffeineTimer<=0&&(this.caffeinated=!1));const n=this.caffeinated?.018:.012;Math.abs(e)>2?this.level=Math.min(1,this.level+t*n):this.level=Math.max(0,this.level-t*.005),this.isUrgent=this.level>.8}drinkCoffee(){this.level=Math.min(1,this.level+.4),this.caffeinated=!0,this.caffeineTimer=30,this.isUrgent=this.level>.8}tryRelief(t,e){const n=t-100,i=e-60;return Math.sqrt(n*n+i*i)>14||this.level===0?!1:(this.level=0,this.isUrgent=!1,this.caffeinated=!1,this.caffeineTimer=0,!0)}get spillMultiplier(){return this.isUrgent?1.8:1}}const ss={x:30,z:28},oc=["Got a dollar, mate? 💸","You got a light? 🚬","Nice van. Does it leak?","My brother Jarrad says I'm not qualified. He's right but I don't like it.","These boots were not made for plastering. Yet here we are.","Jump in? No seriously, I need a lift.","Jarrad says he's read the TDS. He hasn't. I've lived with him.","You look like you need a coffee and a toilet. In that order.","Phil owes me fifty bucks. Pass it on.","I plastered that wall. Don't tell Jarrad.","Matt left the primer lid off again. Just letting you know."],hs=class hs{constructor(t){C(this,"wrapper");C(this,"character");C(this,"ropeRing");C(this,"ropePivot");C(this,"lastDialogue",0);C(this,"cooldown",9e3);this.character=new Ms(kn.Mikayla),this.character.group.scale.set(2,2,2);const e=this.character.buildJumpRopeClip();this.character.mixer.stopAllAction(),this.character.mixer.clipAction(e).play(),this.ropePivot=new Nt,this.ropePivot.position.set(0,1.3,0),this.ropePivot.rotation.y=Math.PI/2,this.character.group.add(this.ropePivot),this.ropeRing=new D(new vo(1.35,.05,7,28),new j({color:8079902})),this.ropePivot.add(this.ropeRing);const n=this._makeNameBoard();n.position.set(0,8.8,0);const i=new D(new li(1.2,1.7,32),new He({color:14501e3,side:ze}));i.rotation.x=-Math.PI/2,i.position.y=.05,this.wrapper=new Nt,this.wrapper.add(this.character.group),this.wrapper.add(n),this.wrapper.add(i),this.wrapper.position.set(ss.x,0,ss.z),t.add(this.wrapper)}_makeNameBoard(){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");e.fillStyle="rgba(190, 40, 90, 0.88)",e.roundRect?e.roundRect(2,2,252,60,8):e.rect(2,2,252,60),e.fill(),e.fillStyle="#fff",e.font="bold 30px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("MIKAYLA",128,32);const n=new vs(t);return new D(new de(2.4,.6),new He({map:n,transparent:!0,depthWrite:!1}))}update(t,e,n,i){this.character.update(t),this.ropeRing.rotation.z+=t*(2*Math.PI/Qc);const o=e-ss.x,a=n-ss.z;this.character.group.rotation.y=Math.atan2(o,a);const r=Math.sqrt(o*o+a*a),l=Date.now();if(r<hs.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=oc[Math.floor(Math.random()*oc.length)];return i.show(kn.Mikayla,c),this.lastDialogue=l,!0}return!1}dispose(t){t.remove(this.wrapper)}};C(hs,"POS",ss),C(hs,"TRIGGER_RADIUS",15);let ti=hs;const os={x:-4,z:-6},rc=["Ha ha ha HA HA! You picked up ze buckets! Love it!","I mix ze plaster by hand. Za gloves are for ze weak.","In Germany, zis would be a warm-up. But I like Australia. Ze mud here is good.","I have mud wrestled ze entire Brunswick football club. Zey lost. Badly.","Ze mixing ratio is one part water, two parts product, one part pure power.","Last Saturday I wrestled a man twice my size. Sunday I mixed 50 buckets. Your turn.","Don't let ze hair fool you. I once arm wrestled Phil. He is still talking about it.","Ha HA! You are funny. Not as funny as ze last guy. But funny."],us=class us{constructor(t){C(this,"wrapper");C(this,"character");C(this,"lastDialogue",0);C(this,"cooldown",1e4);C(this,"audioCtx",null);this.character=new Ms(kn.Connie),this.character.group.scale.set(2,2.35,2);const e=new j({color:15789544}),n=new D(new he(.16,8,6),e);n.position.set(-.12,1.55,.19);const i=new D(new he(.16,8,6),e);i.position.set(.12,1.55,.19),this.character.group.add(n),this.character.group.add(i),this.character.setLogoTexture(Jc(kn.Connie.shirtColor));const o=this._makeNameBoard();o.position.set(0,8.8,0);const a=new D(new li(1.2,1.7,32),new He({color:16109664,side:ze}));a.rotation.x=-Math.PI/2,a.position.y=.05,this.wrapper=new Nt,this.wrapper.add(this.character.group),this.wrapper.add(o),this.wrapper.add(a),this.wrapper.position.set(os.x,0,os.z),t.add(this.wrapper)}_makeNameBoard(){const t=document.createElement("canvas");t.width=256,t.height=64;const e=t.getContext("2d");return e.fillStyle="rgba(200, 150, 20, 0.88)",e.roundRect?e.roundRect(2,2,252,60,8):e.rect(2,2,252,60),e.fill(),e.fillStyle="#fff",e.font="bold 30px Arial",e.textAlign="center",e.textBaseline="middle",e.fillText("CONNIE",128,32),new D(new de(2.4,.6),new He({map:new vs(t),transparent:!0,depthWrite:!1}))}playLaugh(){try{this.audioCtx||(this.audioCtx=new(window.AudioContext||window.webkitAudioContext));const t=this.audioCtx,e=7;for(let n=0;n<e;n++){const i=t.currentTime+n*.16,o=t.createOscillator(),a=t.createGain(),r=480+n*18+Math.random()*60;o.frequency.setValueAtTime(r,i),o.frequency.exponentialRampToValueAtTime(r*.48,i+.13),a.gain.setValueAtTime(0,i),a.gain.linearRampToValueAtTime(.35,i+.03),a.gain.exponentialRampToValueAtTime(.001,i+.15),o.connect(a),a.connect(t.destination),o.start(i),o.stop(i+.17)}}catch{}}update(t,e,n,i){this.character.update(t);const o=e-os.x,a=n-os.z;this.character.group.rotation.y=Math.atan2(o,a);const r=Math.sqrt(o*o+a*a),l=Date.now();if(r<us.TRIGGER_RADIUS&&l-this.lastDialogue>this.cooldown){const c=rc[Math.floor(Math.random()*rc.length)];return i.show(kn.Connie,c),this.lastDialogue=l,!0}return!1}dispose(t){var e;t.remove(this.wrapper),(e=this.audioCtx)==null||e.close()}};C(us,"POS",os),C(us,"TRIGGER_RADIUS",16);let ds=us;const Kg={Connie:{scale:[2,2.35,2],addGeometry:s=>{const t=new j({color:15789544}),e=new D(new he(.16,8,6),t);e.position.set(-.12,1.55,.19);const n=new D(new he(.16,8,6),t);n.position.set(.12,1.55,.19),s.add(e),s.add(n)}},Mikayla:{scale:[1.9,1.9,1.9]}};class Zg{constructor(){C(this,"renderer");C(this,"scene");C(this,"camera");C(this,"canvas");C(this,"cache",new Map);this.canvas=document.createElement("canvas"),this.canvas.width=160,this.canvas.height=160,this.renderer=new fa({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.renderer.setSize(160,160),this.renderer.setClearColor(0,0),this.scene=new pa;const t=new _a(16777215,.7);this.scene.add(t);const e=new Oi(16774624,1);e.position.set(2,4,5),this.scene.add(e);const n=new Oi(14741759,.4);n.position.set(-3,2,3),this.scene.add(n),this.camera=new De(38,1,.1,100),this.camera.position.set(1.2,5,5.5),this.camera.lookAt(.1,3.8,0)}renderPortrait(t){var c;if(this.cache.has(t.name))return this.cache.get(t.name);this.scene.children.filter(d=>!(d instanceof ys)).forEach(d=>this.scene.remove(d));const n=Kg[t.name],i=new Ms(t),[o,a,r]=(n==null?void 0:n.scale)??[2,2,2];i.group.scale.set(o,a,r),i.group.rotation.y=-Math.PI*.18,(c=n==null?void 0:n.addGeometry)==null||c.call(n,i.group),this.scene.add(i.group),this.renderer.render(this.scene,this.camera);const l=this.canvas.toDataURL("image/png");return this.cache.set(t.name,l),this.scene.remove(i.group),l}dispose(){this.renderer.dispose()}}class Qg{constructor(){C(this,"container");C(this,"portrait");C(this,"nameEl");C(this,"textEl");C(this,"portraitRenderer");C(this,"hideTimeout",null);C(this,"visible",!1);this.portraitRenderer=new Zg,this._injectStyles(),this._buildDOM()}_injectStyles(){if(document.getElementById("speech-bubble-styles"))return;const t=document.createElement("style");t.id="speech-bubble-styles",t.textContent=`
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
    `,document.head.appendChild(t)}_buildDOM(){this.container=document.createElement("div"),this.container.id="tem-speech-bubble";const t=document.createElement("div");t.className="sb-portrait-wrap",this.portrait=document.createElement("img"),this.portrait.className="sb-portrait-img",t.appendChild(this.portrait);const e=document.createElement("div");e.className="sb-text-area",this.nameEl=document.createElement("span"),this.nameEl.className="sb-name",this.textEl=document.createElement("span"),this.textEl.className="sb-text",e.appendChild(this.nameEl),e.appendChild(this.textEl),this.container.appendChild(t),this.container.appendChild(e),document.body.appendChild(this.container)}show(t,e){this.nameEl.textContent=t.name,this.textEl.textContent=e,this.portrait.src=this.portraitRenderer.renderPortrait(t),this.container.style.display="flex",requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.container.classList.add("sb-visible")})}),this.visible=!0,this.hideTimeout!==null&&clearTimeout(this.hideTimeout),this.hideTimeout=window.setTimeout(()=>this.hide(),1e4)}setScreenPosition(t,e){this.container.style.left=`${t}px`,this.container.style.top=`${e}px`}hide(){this.container.classList.remove("sb-visible"),this.visible=!1,setTimeout(()=>{this.visible||(this.container.style.display="none")},220)}isVisible(){return this.visible}dispose(){this.portraitRenderer.dispose(),document.body.removeChild(this.container)}}const rs=15;class tx{constructor(){C(this,"overlay");C(this,"titleEl");C(this,"bodyEl");C(this,"sloganEl");C(this,"hintEl");C(this,"progressBar");C(this,"_active",!1);C(this,"_readyToResume",!1);C(this,"_resumeCallback",null);C(this,"_lockTimer",null);C(this,"_countdownInterval",null);C(this,"_autoTimer",null);C(this,"_secondsLeft",rs);if(!document.getElementById("dp-styles")){const r=document.createElement("style");r.id="dp-styles",r.textContent=`
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
    `,a.textContent="▶  TAP GAS or REV to skip",e.appendChild(this.titleEl),e.appendChild(n),o.appendChild(this.bodyEl),t.appendChild(e),t.appendChild(i),t.appendChild(o),t.appendChild(this.sloganEl),t.appendChild(a),this.overlay.appendChild(t),document.body.appendChild(this.overlay),this.overlay.addEventListener("touchstart",r=>{r.preventDefault(),this.tryResume()},{passive:!1}),this.overlay.addEventListener("click",()=>this.tryResume())}show(t,e,n,i){this._clearTimers(),this._active=!0,this._readyToResume=!1,this._resumeCallback=n,this._secondsLeft=rs,this.titleEl.textContent=t,this.bodyEl.textContent=e,this.sloganEl.textContent=i??"",this.sloganEl.style.display=i?"block":"none",this.hintEl.textContent=String(rs),this.overlay.style.display="flex",this.progressBar.style.transition="none",this.progressBar.style.width="100%",this.progressBar.offsetWidth,this.progressBar.style.transition=`width ${rs}s linear`,this.progressBar.style.width="0%",this._lockTimer=setTimeout(()=>{this._readyToResume=!0},380),this._countdownInterval=setInterval(()=>{this._secondsLeft=Math.max(0,this._secondsLeft-1),this.hintEl.textContent=String(this._secondsLeft)},1e3),this._autoTimer=setTimeout(()=>{this._forceResume()},rs*1e3)}tryResume(){!this._active||!this._readyToResume||this._doResume()}_forceResume(){this._active&&this._doResume()}_doResume(){this._active=!1,this._readyToResume=!1,this.overlay.style.display="none",this._clearTimers();const t=this._resumeCallback;this._resumeCallback=null,t==null||t()}_clearTimers(){this._lockTimer&&(clearTimeout(this._lockTimer),this._lockTimer=null),this._autoTimer&&(clearTimeout(this._autoTimer),this._autoTimer=null),this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}get isActive(){return this._active}}const sr=[`Our finishes don't copy the earth.
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
We're on our way.`],or=["DRIVING TIP: The spill meter doesn't care about your excuses. Neither does the road.","DRIVING TIP: Traffic in Melbourne has never once moved for a plastering van. You are not the exception.","DRIVING TIP: Hitting a car at speed is, technically, texture development. We do not recommend it.","DRIVING TIP: The crew will comment on your driving. They are not wrong.","DRIVING TIP: Every bump is just the plaster finding its character. That's what you're telling yourself.","CREW TIP: Tsuyoshi once vaulted into a moving van. He's done it again. You weren't watching.","CREW TIP: Phil will finish his tea before he gets in. Always. Plan for this.","CREW TIP: Jose was ready before you left the workshop. He's been ready since Tuesday.","CREW TIP: Jarrad has been standing there fifteen minutes. He will mention it.","CREW TIP: Fabio is smiling. He's also judging your gearwork. Smile back.","CLIENT TIP: Brad has never been to Europe. The wall will be 'very European' regardless.","CLIENT TIP: Darren is stressed. Darren is always stressed. The wall is fine. Darren is not.","CLIENT TIP: Patricia has read the full TDS. She's highlighted it. She will quiz you.","CLIENT TIP: Zephyr tried to do it himself. You're not here to judge. You are here to fix it.","CLIENT TIP: Mustafa's health inspector doesn't ask questions. You shouldn't either.","HEALTH TIP: Coffee steadies the trowel. What it does to the bladder is your problem.","HEALTH TIP: The toilet block is 100 metres east of the intersection. You know this now.","HEALTH TIP: Hydration is important. Timing is more important.","HEALTH TIP: The barista knows your order. So does your bladder.","BUSINESS TIP: TEM has been in business since before your GPS was a thing. Follow the waypoint anyway.","BUSINESS TIP: Quality render takes time. So does finding parking. Plan accordingly.","BUSINESS TIP: A finish that breathes with the wall is worth more than one that cracks by Thursday. Ask Zephyr.","BUSINESS TIP: Authenticity cannot be rushed. Darren is rushing you. Do your best.","The road to perfection runs through three crew pickups, a coffee stop, and a very urgent toilet.","Connie has seen everything. She is still laughing.","The van has been in worse situations. The plaster has not.","This city has 240 square units of roads and exactly one decent flat white. Find it.",`The walls remember every hand that shaped them.
The van remembers nothing. Drive carefully.`],ex=["One wall. One chance. The render decides everything.","A surface waiting to become something real.","From bare substrate to finished art — this is the job.",`The craft doesn't care about the deadline.
You do. Get there.`,"Clients don't buy plaster. They buy the moment the wall changes everything.",`Not every wall gets a second coat.
This one does. Make it count.`,"The difference between ordinary and extraordinary is one hand-applied layer.","Somewhere between the bucket and the wall, something real happens.",`They called TEM because they want it done right.
Don't prove them wrong.`,"This isn't a wall. It's a surface waiting to breathe."];function $n(s){return s[Math.floor(Math.random()*s.length)]}const nx={Matt:`Matt folds himself into the back. "Took your time." He's already on his phone.`,Jose:'Jose appears from nowhere, bucket in hand. "Vámonos — I was getting bored."',Jarrad:`Jarrad adjusts his hard hat. "I've been standing here fifteen minutes." He has.`,Phil:`Phil sips the last of his tea, unhurried. "Right then. Let's go." He fastens his seatbelt twice.`,Tsuyoshi:"Tsuyoshi vaults in without opening the door. His mohawk grazes the roof lining.",Fabio:`Fabio loads in, trowel over his shoulder. "You're late. Ehhhh —" he waves it off. "I found a pizza place nearby. Very acceptable."`};async function ix(){await qm();const s=new jm;await s.init();const t=new Qm(s.scene);t.spawnCrewAtCityPositions();const e=new _g,n=new tg(s.scene),i=new vg,o=new Ag,a=new tx,r=new fo,l=new rg(n,e,X=>{r.activePhase>=2&&i.triggerBump(X)},s.collisionWorld,()=>{r.activePhase>=2&&i.triggerCrash()}),c=new Zr(s.scene),d=new Sg(X=>{d.hide(),a.show(`📋 ${X.title}`,`Client: ${X.client}

${X.description}

💰 Pay: $${X.pay.toLocaleString()}

🏭 Head to the TEM workshop to collect supplies.`,()=>{r.acceptJob(X),c.setTarget(fo.WORKSHOP_POS),o.setActiveJob(X,1),o.updateCrewStatus([],[],!1),P=0;const k=20+Math.random()*60,nt=k+20+Math.random()*50;Math.random()>.5?(G=k,O=nt):(O=k,G=nt),H=null,$=null},$n(ex))});i.onSpill=X=>{r.money=Math.max(0,r.money-X),o.updateMoney(r.money),o.showSpillPenalty(X)};const h=document.createElement("button");h.textContent="📋 JOBS",h.style.cssText=`
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
  `,h.addEventListener("pointerenter",()=>{h.style.background="rgba(212, 120, 125, 0.95)",h.style.transform="translateY(-2px)"}),h.addEventListener("pointerleave",()=>{h.style.background="rgba(193, 102, 107, 0.9)",h.style.transform=""}),h.addEventListener("click",()=>{d.isVisible()?d.hide():d.show(r.getAvailableJobs())}),document.body.appendChild(h);const u=new Xg(s.scene),p=new $g(s.scene),g=new Qr(s.scene),x=new Jg,m=new ti(s.scene),f=new ds(s.scene),w=new Qg,S=new L(ti.POS.x,6,ti.POS.z),_=new Og,I=new Gg,A=new xs,T=document.createElement("button");T.textContent="📸",T.title="Photo Collection",T.style.cssText=`
    position: fixed; top: 16px; left: 16px;
    z-index: 1000; background: rgba(70,70,70,0.9);
    color: #fff; border: none; border-radius: 50%;
    width: 52px; height: 52px; font-size: 22px;
    cursor: pointer; touch-action: manipulation;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    transition: background 0.15s, transform 0.1s;
  `,T.addEventListener("pointerenter",()=>{T.style.background="rgba(100,100,100,0.95)",T.style.transform="scale(1.1)"}),T.addEventListener("pointerleave",()=>{T.style.background="rgba(70,70,70,0.9)",T.style.transform=""}),T.addEventListener("click",()=>I.show()),document.body.appendChild(T);let R=!1;const b={x:-60,z:-100},y={x:100,z:60};let P=0,G=-1,O=-1,H=null,$=null;const Y=document.createElement("div");Y.style.cssText=`
    position:fixed; top:8px; left:8px; z-index:5000;
    background:rgba(0,0,0,0.6); color:#fff; font-size:11px;
    font-family:monospace; padding:6px 10px; border-radius:6px;
    pointer-events:none; line-height:1.5;
  `,document.body.appendChild(Y),s.onUpdate(X=>{const k=n.mesh.position.x,nt=n.mesh.position.z;if(a.isActive){(e.forward||e.brake)&&a.tryResume(),t.updateAll(X),m.update(X,k,nt,w),f.update(X,k,nt,w),s.camera.follow(n.mesh.position,n.velocity,n.heading);{const J=S.clone().project(s.camera.camera),ht=(J.x*.5+.5)*window.innerWidth,wt=(-J.y*.5+.5)*window.innerHeight;w.setScreenPosition(ht,wt)}return}l.update(X),n.updateSuspension(X);const dt=r.activeJob!==null&&r.activePhase>=2;if(i.setVisible(dt),dt?i.update(X):i.level=0,t.updateAll(X),g.update(X),g.tryVisit(k,nt)&&H!=="coffee"&&(i.level=Math.max(0,i.level-.6),x.drinkCoffee(),x.isUrgent?o.showToast("☕ Coffeed up — now find a toilet, fast!",13918762):o.showToast("☕ Coffee hit! Plaster steady, bladder loading...",13918762)),x.update(X,r.activeJob?l.speed:0),x.tryRelief(k,nt)&&H!=="toilet"&&o.showToast("🚽 Ahhh! Relief! Ready for the next coffee ☕",2201331),x.isUrgent&&r.activeJob){const J=Date.now();J-x.lastUrgentToast>15e3&&(x.lastUrgentToast=J,o.showToast("🚽 Bursting! Find the toilet before you spill!",16733986))}i.spillRateMultiplier=x.spillMultiplier,m.update(X,k,nt,w)&&S.set(ti.POS.x,6,ti.POS.z),f.update(X,k,nt,w)&&S.set(ds.POS.x,6,ds.POS.z);const vt=t.checkProximityDialogue(k,nt);vt&&(S.set(vt.pos.x,6,vt.pos.z),w.show(kn[vt.name],vt.line));{const J=S.clone().project(s.camera.camera),ht=(J.x*.5+.5)*window.innerWidth,wt=(-J.y*.5+.5)*window.innerHeight;w.setScreenPosition(ht,wt)}u.update(X,k,nt),p.update(X,k,nt);const Bt=u.resolveVan(k,nt);if(Bt.hit&&(n.mesh.position.x=Bt.x,n.mesh.position.z=Bt.z,l.applyImpulse(0,0),r.activePhase>=2&&i.triggerCrash()),c.update(X,k,nt),r.activeJob){const J=r.tickTravel(X);o.updateTravelTimer(r.travelTimer),J!=null&&J.failed&&(i.level=0,H=null,$=null,G=-1,O=-1,c.setTarget(null),o.updateTravelTimer(null),o.showTimerFail(15e4),o.setActiveJob(null,1),o.updateMoney(r.money),o.updateCrewStatus([],[],!1),t.showAllCrew(),setTimeout(()=>d.show(r.getAvailableJobs()),3500))}else o.updateTravelTimer(null);if(r.activeJob!==null)if(r.activePhase===1)o.updateJobDistance(r.distanceToWorkshop(k,nt));else if(r.activePhase===2){const J=r.nextCrewNeeded();if(J){const ht=t.getCrewPosition(J);o.updateJobDistance(r.distanceToPoint(k,nt,ht.x,ht.z))}}else o.updateJobDistance(r.distanceTo(k,nt));if(r.activeJob&&!H&&!R&&(P+=X,G>0&&P>=G?(G=-1,H="coffee",$=c.currentTarget,c.setTarget(b),o.showToast("☕ Gagging for a coffee — hit the cafe NOW!",13918762)):O>0&&P>=O&&(O=-1,H="toilet",x.level=.88,x.isUrgent=!0,$=c.currentTarget,c.setTarget(y),o.showToast("🚽 Bursting! Find the toilet before you ruin the plastering!",16733986))),r.activeJob&&H&&!R){const J=H==="coffee"?b:y,ht=k-J.x,wt=nt-J.z;if(Math.sqrt(ht*ht+wt*wt)<14){R=!0;const Lt=H;H=null;const Kt=$;$=null,Lt==="coffee"?(x.drinkCoffee(),a.show("☕ Coffee Break!",`You grab a flat white. The barista nods — they know the order.

Bladder's loading... don't take too long.

Back on the road.`,()=>{c.setTarget(Kt),R=!1},$n(or))):(x.level=0,x.isUrgent=!1,x.caffeinated=!1,a.show("🚽 Phew — Crisis Averted!",`Barely made it. Not a word to the crew.

Back on the road.`,()=>{c.setTarget(Kt),R=!1},$n(or)))}}if(r.activeJob&&r.activePhase===1&&!H&&!R&&r.checkPhase1Arrival(k,nt)){R=!0,i.level=0,f.playLaugh();const J=r.crewToPickup.join(" + ");a.show("📦 Supplies Loaded!",`Connie's cackle echoes through the factory as the buckets go in.

Now go pick up the crew:
👷 ${J}

They're scattered around the city. Your waypoint will guide you.`,()=>{r.advanceToPhase2();const ht=r.nextCrewNeeded();if(ht){const wt=t.getCrewPosition(ht);c.setTarget(wt)}o.showPhase1Complete(),o.setActiveJob(r.activeJob,2),o.updateCrewStatus(r.crewToPickup,r.crewPickedUp,!0),R=!1},$n(sr))}if(r.activeJob&&r.activePhase===2&&!H&&!R)for(const J of r.crewToPickup){if(r.crewPickedUp.includes(J))continue;const ht=t.getCrewPosition(J);if(r.distanceToPoint(k,nt,ht.x,ht.z)<10){R=!0,t.hideCrew(J);const Lt=r.pickupCrew(J);o.updateCrewStatus(r.crewToPickup,r.crewPickedUp,!0);const Kt=nx[J]??`${J} hops in.`;if(Lt)a.show(`🚐 ${J} aboard — Full crew!`,`${Kt}

Full crew loaded. Everyone's in (sort of).

Head to the job site now. Your waypoint is set.`,()=>{r.advanceToPhase3(),c.setTarget(r.activeJob.position),o.showCrewPickup(J,null),o.setActiveJob(r.activeJob,3),R=!1},$n(sr));else{const Vt=r.nextCrewNeeded(),ae=r.crewToPickup.filter(B=>!r.crewPickedUp.includes(B)).join(", ");a.show(`🧑‍🔧 ${J} aboard!`,`${Kt}

Still need to collect:
👷 ${ae}`,()=>{if(Vt){const B=t.getCrewPosition(Vt);c.setTarget(B),o.showCrewPickup(J,Vt)}o.updateCrewStatus(r.crewToPickup,r.crewPickedUp,!0),R=!1},$n(or))}break}}if(r.activeJob&&r.activePhase===3&&!H&&!R&&!_.isActive()){const J=r.checkArrival(k,nt);J!==null&&(R=!0,c.setTarget(null),a.show(`🏗️ ${J.title}`,`${J.client} is waiting.

${J.description}

Time to get to work. Show them what TEM does.`,()=>{o.setActiveJob(null,3),o.updateCrewStatus([],[],!1),_.startRandom(ht=>{const wt=r.completeJob(J,ht.qualityPct);wt<0?o.showPenalty(J.title,Math.abs(wt)):o.showJobComplete(J.title,wt),o.updateMoney(r.money),t.showAllCrew(),H=null,$=null,G=-1,O=-1,R=!1,id()&&!xs.isUnlocked()?setTimeout(()=>A.trigger(),2e3):setTimeout(()=>{const Lt=r.getAvailableJobs();Lt.length>0&&d.show(Lt)},3500)})},$n(sr)))}s.camera.follow(n.mesh.position,n.velocity,n.heading),o.update(l.speed,i.level);const Xt=r.activeJob,K=Xt?`P${r.activePhase}`:"idle",st=Xt?r.activePhase===1?Math.round(r.distanceToWorkshop(k,nt)):r.activePhase===2?Math.round(r.distanceToPoint(k,nt,...(()=>{const J=r.nextCrewNeeded();if(!J)return[k,nt];const ht=t.getCrewPosition(J);return[ht.x,ht.z]})())):Math.round(r.distanceTo(k,nt)):0,yt=Xt?`crew:${r.crewPickedUp.length}/${r.crewToPickup.length}`:"";Y.textContent=`${K} | dist:${st} | ${yt} | lock:${R} | mg:${_.isActive()}`}),setTimeout(()=>{d.show(r.getAvailableJobs())},1e3),s.start()}ix().catch(s=>{console.error("Game init failed:",s),document.body.style.background="#000";const t=document.createElement("div");t.style.cssText=`
    position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
    color:#fff;font-family:sans-serif;font-size:18px;text-align:center;
    background:rgba(200,40,40,0.9);padding:24px 32px;border-radius:16px;
    max-width:90vw;z-index:9999;
  `,t.innerHTML=`<b>🚨 Game failed to start</b><br><br>${(s==null?void 0:s.message)||String(s)}`,document.body.appendChild(t)});
//# sourceMappingURL=index-DsQi4-UB.js.map
