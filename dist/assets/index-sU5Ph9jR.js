var Ac=Object.defineProperty;var Cc=(s,t,e)=>t in s?Ac(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var F=(s,t,e)=>Cc(s,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const No="170",Rc=0,ca=1,Pc=2,Il=1,Fl=2,xi=3,zi=0,Ce=1,oi=2,Mi=0,An=1,Vr=2,ha=3,da=4,Dc=5,$i=100,Lc=101,Ic=102,Fc=103,Bc=104,Uc=200,Nc=201,Oc=202,zc=203,Wr=204,Xr=205,kc=206,Gc=207,Hc=208,Vc=209,Wc=210,Xc=211,Yc=212,qc=213,jc=214,Yr=0,qr=1,jr=2,Pn=3,$r=4,Jr=5,Kr=6,Zr=7,Oo=0,$c=1,Jc=2,Ni=0,Bl=1,Ul=2,Nl=3,zo=4,Kc=5,Ol=6,zl=7,kl=300,Dn=301,Ln=302,Qr=303,to=304,tr=306,eo=1e3,Zi=1001,io=1002,ti=1003,Zc=1004,us=1005,li=1006,ar=1007,Qi=1008,wi=1009,Gl=1010,Hl=1011,ss=1012,ko=1013,en=1014,_i=1015,Si=1016,Go=1017,Ho=1018,In=1020,Vl=35902,Wl=1021,Xl=1022,Qe=1023,Yl=1024,ql=1025,Cn=1026,Fn=1027,jl=1028,Vo=1029,$l=1030,Wo=1031,Xo=1033,ks=33776,Gs=33777,Hs=33778,Vs=33779,no=35840,so=35841,ro=35842,oo=35843,ao=36196,lo=37492,co=37496,ho=37808,uo=37809,fo=37810,po=37811,mo=37812,go=37813,xo=37814,vo=37815,_o=37816,yo=37817,Mo=37818,So=37819,bo=37820,wo=37821,Ws=36492,Eo=36494,To=36495,Jl=36283,Ao=36284,Co=36285,Ro=36286,Qc=3200,th=3201,Kl=0,eh=1,Bi="",He="srgb",Nn="srgb-linear",er="linear",ie="srgb",rn=7680,ua=519,ih=512,nh=513,sh=514,Zl=515,rh=516,oh=517,ah=518,lh=519,Po=35044,fa="300 es",yi=2e3,qs=2001;class On{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const n=this._listeners[t];if(n!==void 0){const r=n.indexOf(e);r!==-1&&n.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const n=i.slice(0);for(let r=0,o=n.length;r<o;r++)n[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lr=Math.PI/180,Do=180/Math.PI;function Oi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ee[s&255]+Ee[s>>8&255]+Ee[s>>16&255]+Ee[s>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]).toLowerCase()}function Fe(s,t,e){return Math.max(t,Math.min(e,s))}function ch(s,t){return(s%t+t)%t}function cr(s,t,e){return(1-e)*s+e*t}function ai(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ne(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Et{constructor(t=0,e=0){Et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,n=t.elements;return this.x=n[0]*e+n[3]*i+n[6],this.y=n[1]*e+n[4]*i+n[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),n=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*n+t.x,this.y=r*n+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,i,n,r,o,a,l,c){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c)}set(t,e,i,n,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=n,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],p=i[5],g=i[8],x=n[0],m=n[3],f=n[6],b=n[1],w=n[4],_=n[7],L=n[2],T=n[5],A=n[8];return r[0]=o*x+a*b+l*L,r[3]=o*m+a*w+l*T,r[6]=o*f+a*_+l*A,r[1]=c*x+h*b+u*L,r[4]=c*m+h*w+u*T,r[7]=c*f+h*_+u*A,r[2]=d*x+p*b+g*L,r[5]=d*m+p*w+g*T,r[8]=d*f+p*_+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-i*r*h+i*a*l+n*r*c-n*o*l}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+i*d+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=u*x,t[1]=(n*c-h*i)*x,t[2]=(a*i-n*o)*x,t[3]=d*x,t[4]=(h*e-n*l)*x,t[5]=(n*r-a*e)*x,t[6]=p*x,t[7]=(i*l-c*e)*x,t[8]=(o*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,n,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-n*c,n*l,-n*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(hr.makeScale(t,e)),this}rotate(t){return this.premultiply(hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<9;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hr=new zt;function Ql(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function js(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function hh(){const s=js("canvas");return s.style.display="block",s}const pa={};function is(s){s in pa||(pa[s]=!0,console.warn(s))}function dh(s,t,e){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function uh(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function fh(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:Nn,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(s.r=Rn(s.r),s.g=Rn(s.g),s.b=Rn(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?er:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Rn(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const ma=[.64,.33,.3,.6,.15,.06],ga=[.2126,.7152,.0722],xa=[.3127,.329],va=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_a=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[Nn]:{primaries:ma,whitePoint:xa,transfer:er,toXYZ:va,fromXYZ:_a,luminanceCoefficients:ga,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:ma,whitePoint:xa,transfer:ie,toXYZ:va,fromXYZ:_a,luminanceCoefficients:ga,outputColorSpaceConfig:{drawingBufferColorSpace:He}}});let on;class ph{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{on===void 0&&(on=js("canvas")),on.width=t.width,on.height=t.height;const i=on.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=on}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=js("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const n=i.getImageData(0,0,t.width,t.height),r=n.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return i.putImageData(n,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(bi(e[i]/255)*255):e[i]=bi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mh=0;class tc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=Oi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let o=0,a=n.length;o<a;o++)n[o].isDataTexture?r.push(dr(n[o].image)):r.push(dr(n[o]))}else r=dr(n);i.url=r}return e||(t.images[this.uuid]=i),i}}function dr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ph.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let gh=0;class Le extends On{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,i=Zi,n=Zi,r=li,o=Qi,a=Qe,l=wi,c=Le.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gh++}),this.uuid=Oi(),this.name="",this.source=new tc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Et(0,0),this.repeat=new Et(1,1),this.center=new Et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case eo:t.x=t.x-Math.floor(t.x);break;case Zi:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case eo:t.y=t.y-Math.floor(t.y);break;case Zi:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=kl;Le.DEFAULT_ANISOTROPY=1;class se{constructor(t=0,e=0,i=0,n=1){se.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=n}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,n){return this.x=t,this.y=e,this.z=i,this.w=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*n+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*n+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*n+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*n+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,n,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(c+1)/2,_=(p+1)/2,L=(f+1)/2,T=(h+d)/4,A=(u+x)/4,P=(g+m)/4;return w>_&&w>L?w<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(w),n=T/i,r=A/i):_>L?_<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(_),i=T/n,r=P/n):L<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(L),i=A/r,n=P/r),this.set(i,n,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-x)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xh extends On{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new se(0,0,t,e),this.scissorTest=!1,this.viewport=new se(0,0,t,e);const n={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Le(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=t,this.textures[n].image.height=e,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,n=t.textures.length;i<n;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new tc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends xh{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ec extends Le{constructor(t=null,e=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ti,this.minFilter=ti,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vh extends Le{constructor(t=null,e=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:n},this.magFilter=ti,this.minFilter=ti,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class as{constructor(t=0,e=0,i=0,n=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=n}static slerpFlat(t,e,i,n,r,o,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*x,b=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){const L=Math.sqrt(w),T=Math.atan2(L,f*b);m=Math.sin(m*T)/L,a=Math.sin(a*T)/L}const _=a*b;if(l=l*m+d*_,c=c*m+p*_,h=h*m+g*_,u=u*m+x*_,m===1-a){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,n,r,o){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,n){return this._x=t,this._y=e,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,n=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(r/2),d=l(i/2),p=l(n/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,n=Math.sin(i);return this._x=t.x*n,this._y=t.y*n,this._z=t.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],n=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-n)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(n+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(r-c)/p,this._x=(n+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-n)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const n=Math.min(1,e/i);return this.slerp(t,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,n=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+o*a+n*c-r*l,this._y=n*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-n*a,this._w=o*h-i*a-n*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,n=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+n*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=n,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*i+e*this._x,this._y=p*n+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(t),n*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ya.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ya.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*n,this.y=r[1]*e+r[4]*i+r[7]*n,this.z=r[2]*e+r[5]*i+r[8]*n,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,n=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*n+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*n+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*n+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,n=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*n-a*i),h=2*(a*e-r*n),u=2*(r*i-o*e);return this.x=e+l*c+o*u-a*h,this.y=i+l*h+a*c-r*u,this.z=n+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,n=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*n,this.y=r[1]*e+r[5]*i+r[9]*n,this.z=r[2]*e+r[6]*i+r[10]*n,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,n=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=n*l-r*a,this.y=r*o-i*l,this.z=i*a-n*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ur.copy(this).projectOnVector(t),this.sub(ur)}reflect(t){return this.sub(ur.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Fe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,n=this.z-t.z;return e*e+i*i+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const n=Math.sin(e)*t;return this.x=n*Math.sin(i),this.y=Math.cos(e)*t,this.z=n*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),n=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=n,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ur=new D,ya=new as;class ls{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(r,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fs.copy(i.boundingBox)),fs.applyMatrix4(t.matrixWorld),this.union(fs)}const n=t.children;for(let r=0,o=n.length;r<o;r++)this.expandByObject(n[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vn),ps.subVectors(this.max,Vn),an.subVectors(t.a,Vn),ln.subVectors(t.b,Vn),cn.subVectors(t.c,Vn),Ci.subVectors(ln,an),Ri.subVectors(cn,ln),Gi.subVectors(an,cn);let e=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-Gi.z,Gi.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,Gi.z,0,-Gi.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-Gi.y,Gi.x,0];return!fr(e,an,ln,cn,ps)||(e=[1,0,0,0,1,0,0,0,1],!fr(e,an,ln,cn,ps))?!1:(ms.crossVectors(Ci,Ri),e=[ms.x,ms.y,ms.z],fr(e,an,ln,cn,ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ui=[new D,new D,new D,new D,new D,new D,new D,new D],je=new D,fs=new ls,an=new D,ln=new D,cn=new D,Ci=new D,Ri=new D,Gi=new D,Vn=new D,ps=new D,ms=new D,Hi=new D;function fr(s,t,e,i,n){for(let r=0,o=s.length-3;r<=o;r+=3){Hi.fromArray(s,r);const a=n.x*Math.abs(Hi.x)+n.y*Math.abs(Hi.y)+n.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),h=i.dot(Hi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const _h=new ls,Wn=new D,pr=new D;class ir{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):_h.setFromPoints(t).getCenter(i);let n=0;for(let r=0,o=t.length;r<o;r++)n=Math.max(n,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(n),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Wn.subVectors(t,this.center);const e=Wn.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),n=(i-this.radius)*.5;this.center.addScaledVector(Wn,n/i),this.radius+=n}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Wn.copy(t.center).add(pr)),this.expandByPoint(Wn.copy(t.center).sub(pr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new D,mr=new D,gs=new D,Pi=new D,gr=new D,xs=new D,xr=new D;class ic{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,i,n){mr.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(mr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(gs),a=Pi.dot(this.direction),l=-Pi.dot(gs),c=Pi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(mr).addScaledVector(gs,d),p}intersectSphere(t,e){fi.subVectors(t.center,this.origin);const i=fi.dot(this.direction),n=fi.dot(fi)-i*i,r=t.radius*t.radius;if(n>r)return null;const o=Math.sqrt(r-n),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,n,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,n=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,n=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>n||((r>i||isNaN(i))&&(i=r),(o<n||isNaN(n))&&(n=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,i,n,r){gr.subVectors(e,t),xs.subVectors(i,t),xr.crossVectors(gr,xs);let o=this.direction.dot(xr),a;if(o>0){if(n)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Pi.subVectors(this.origin,t);const l=a*this.direction.dot(xs.crossVectors(Pi,xs));if(l<0)return null;const c=a*this.direction.dot(gr.cross(Pi));if(c<0||l+c>o)return null;const h=-a*Pi.dot(xr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,n,r,o,a,l,c,h,u,d,p,g,x,m){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,n,r,o,a,l,c,h,u,d,p,g,x,m)}set(t,e,i,n,r,o,a,l,c,h,u,d,p,g,x,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=n,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,n=1/hn.setFromMatrixColumn(t,0).length(),r=1/hn.setFromMatrixColumn(t,1).length(),o=1/hn.setFromMatrixColumn(t,2).length();return e[0]=i[0]*n,e[1]=i[1]*n,e[2]=i[2]*n,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,n=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){const d=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yh,t,Mh)}lookAt(t,e,i){const n=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Di.crossVectors(i,Ue),Di.lengthSq()===0&&(Math.abs(i.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Di.crossVectors(i,Ue)),Di.normalize(),vs.crossVectors(Ue,Di),n[0]=Di.x,n[4]=vs.x,n[8]=Ue.x,n[1]=Di.y,n[5]=vs.y,n[9]=Ue.y,n[2]=Di.z,n[6]=vs.z,n[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,n=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],p=i[13],g=i[2],x=i[6],m=i[10],f=i[14],b=i[3],w=i[7],_=i[11],L=i[15],T=n[0],A=n[4],P=n[8],S=n[12],y=n[1],C=n[5],N=n[9],z=n[13],Y=n[2],q=n[6],X=n[10],Q=n[14],V=n[3],ot=n[7],ft=n[11],St=n[15];return r[0]=o*T+a*y+l*Y+c*V,r[4]=o*A+a*C+l*q+c*ot,r[8]=o*P+a*N+l*X+c*ft,r[12]=o*S+a*z+l*Q+c*St,r[1]=h*T+u*y+d*Y+p*V,r[5]=h*A+u*C+d*q+p*ot,r[9]=h*P+u*N+d*X+p*ft,r[13]=h*S+u*z+d*Q+p*St,r[2]=g*T+x*y+m*Y+f*V,r[6]=g*A+x*C+m*q+f*ot,r[10]=g*P+x*N+m*X+f*ft,r[14]=g*S+x*z+m*Q+f*St,r[3]=b*T+w*y+_*Y+L*V,r[7]=b*A+w*C+_*q+L*ot,r[11]=b*P+w*N+_*X+L*ft,r[15]=b*S+w*z+_*Q+L*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],n=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*u-n*c*u-r*a*d+i*c*d+n*a*p-i*l*p)+x*(+e*l*p-e*c*d+r*o*d-n*o*p+n*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+i*o*p+r*a*h-i*c*h)+f*(-n*a*h-e*l*u+e*a*d+n*o*u-i*o*d+i*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const n=this.elements;return t.isVector3?(n[12]=t.x,n[13]=t.y,n[14]=t.z):(n[12]=t,n[13]=e,n[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],n=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],b=u*m*c-x*d*c+x*l*p-a*m*p-u*l*f+a*d*f,w=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,_=h*x*c-g*u*c+g*a*p-o*x*p-h*a*f+o*u*f,L=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,T=e*b+i*w+n*_+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=b*A,t[1]=(x*d*r-u*m*r-x*n*p+i*m*p+u*n*f-i*d*f)*A,t[2]=(a*m*r-x*l*r+x*n*c-i*m*c-a*n*f+i*l*f)*A,t[3]=(u*l*r-a*d*r-u*n*c+i*d*c+a*n*p-i*l*p)*A,t[4]=w*A,t[5]=(h*m*r-g*d*r+g*n*p-e*m*p-h*n*f+e*d*f)*A,t[6]=(g*l*r-o*m*r-g*n*c+e*m*c+o*n*f-e*l*f)*A,t[7]=(o*d*r-h*l*r+h*n*c-e*d*c-o*n*p+e*l*p)*A,t[8]=_*A,t[9]=(g*u*r-h*x*r-g*i*p+e*x*p+h*i*f-e*u*f)*A,t[10]=(o*x*r-g*a*r+g*i*c-e*x*c-o*i*f+e*a*f)*A,t[11]=(h*a*r-o*u*r-h*i*c+e*u*c+o*i*p-e*a*p)*A,t[12]=L*A,t[13]=(h*x*n-g*u*n+g*i*d-e*x*d-h*i*m+e*u*m)*A,t[14]=(g*a*n-o*x*n-g*i*l+e*x*l+o*i*m-e*a*m)*A,t[15]=(o*u*n-h*a*n+h*i*l-e*u*l-o*i*d+e*a*d)*A,this}scale(t){const e=this.elements,i=t.x,n=t.y,r=t.z;return e[0]*=i,e[4]*=n,e[8]*=r,e[1]*=i,e[5]*=n,e[9]*=r,e[2]*=i,e[6]*=n,e[10]*=r,e[3]*=i,e[7]*=n,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],n=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,n))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),n=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*o,0,c*l-n*a,h*l+n*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,n,r,o){return this.set(1,i,r,0,t,1,o,0,e,n,1,0,0,0,0,1),this}compose(t,e,i){const n=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,x=o*h,m=o*u,f=a*u,b=l*c,w=l*h,_=l*u,L=i.x,T=i.y,A=i.z;return n[0]=(1-(x+f))*L,n[1]=(p+_)*L,n[2]=(g-w)*L,n[3]=0,n[4]=(p-_)*T,n[5]=(1-(d+f))*T,n[6]=(m+b)*T,n[7]=0,n[8]=(g+w)*A,n[9]=(m-b)*A,n[10]=(1-(d+x))*A,n[11]=0,n[12]=t.x,n[13]=t.y,n[14]=t.z,n[15]=1,this}decompose(t,e,i){const n=this.elements;let r=hn.set(n[0],n[1],n[2]).length();const o=hn.set(n[4],n[5],n[6]).length(),a=hn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),t.x=n[12],t.y=n[13],t.z=n[14],$e.copy(this);const c=1/r,h=1/o,u=1/a;return $e.elements[0]*=c,$e.elements[1]*=c,$e.elements[2]*=c,$e.elements[4]*=h,$e.elements[5]*=h,$e.elements[6]*=h,$e.elements[8]*=u,$e.elements[9]*=u,$e.elements[10]*=u,e.setFromRotationMatrix($e),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,n,r,o,a=yi){const l=this.elements,c=2*r/(e-t),h=2*r/(i-n),u=(e+t)/(e-t),d=(i+n)/(i-n);let p,g;if(a===yi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===qs)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,n,r,o,a=yi){const l=this.elements,c=1/(e-t),h=1/(i-n),u=1/(o-r),d=(e+t)*c,p=(i+n)*h;let g,x;if(a===yi)g=(o+r)*u,x=-2*u;else if(a===qs)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let n=0;n<16;n++)if(e[n]!==i[n])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const hn=new D,$e=new he,yh=new D(0,0,0),Mh=new D(1,1,1),Di=new D,vs=new D,Ue=new D,Ma=new he,Sa=new as;class ci{constructor(t=0,e=0,i=0,n=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=n}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,n=this._order){return this._x=t,this._y=e,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const n=t.elements,r=n[0],o=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],p=n[10];switch(e){case"XYZ":this._y=Math.asin(Fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Ma.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ma,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sa.setFromEuler(this),this.setFromQuaternion(Sa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class nc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sh=0;const ba=new D,dn=new as,pi=new he,_s=new D,Xn=new D,bh=new D,wh=new as,wa=new D(1,0,0),Ea=new D(0,1,0),Ta=new D(0,0,1),Aa={type:"added"},Eh={type:"removed"},un={type:"childadded",child:null},vr={type:"childremoved",child:null};class ve extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ve.DEFAULT_UP.clone();const t=new D,e=new ci,i=new as,n=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new he},normalMatrix:{value:new zt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return dn.setFromAxisAngle(t,e),this.quaternion.multiply(dn),this}rotateOnWorldAxis(t,e){return dn.setFromAxisAngle(t,e),this.quaternion.premultiply(dn),this}rotateX(t){return this.rotateOnAxis(wa,t)}rotateY(t){return this.rotateOnAxis(Ea,t)}rotateZ(t){return this.rotateOnAxis(Ta,t)}translateOnAxis(t,e){return ba.copy(t).applyQuaternion(this.quaternion),this.position.add(ba.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wa,t)}translateY(t){return this.translateOnAxis(Ea,t)}translateZ(t){return this.translateOnAxis(Ta,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?_s.copy(t):_s.set(t,e,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Xn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(Xn,_s,this.up):pi.lookAt(_s,Xn,this.up),this.quaternion.setFromRotationMatrix(pi),n&&(pi.extractRotation(n.matrixWorld),dn.setFromRotationMatrix(pi),this.quaternion.premultiply(dn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Aa),un.child=t,this.dispatchEvent(un),un.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Eh),vr.child=t,this.dispatchEvent(vr),vr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Aa),un.child=t,this.dispatchEvent(un),un.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,t,bh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xn,wh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,n=e.length;i<n;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));n.material=a}else n.material=r(t.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=n,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const n=t.children[i];this.add(n.clone())}return this}}ve.DEFAULT_UP=new D(0,1,0);ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new D,mi=new D,_r=new D,gi=new D,fn=new D,pn=new D,Ca=new D,yr=new D,Mr=new D,Sr=new D,br=new se,wr=new se,Er=new se;class We{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,n){n.subVectors(i,e),Je.subVectors(t,e),n.cross(Je);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(t,e,i,n,r){Je.subVectors(n,e),mi.subVectors(i,e),_r.subVectors(t,e);const o=Je.dot(Je),a=Je.dot(mi),l=Je.dot(_r),c=mi.dot(mi),h=mi.dot(_r),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,n){return this.getBarycoord(t,e,i,n,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,i,n,r,o,a,l){return this.getBarycoord(t,e,i,n,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(t,e,i,n,r,o){return br.setScalar(0),wr.setScalar(0),Er.setScalar(0),br.fromBufferAttribute(t,e),wr.fromBufferAttribute(t,i),Er.fromBufferAttribute(t,n),o.setScalar(0),o.addScaledVector(br,r.x),o.addScaledVector(wr,r.y),o.addScaledVector(Er,r.z),o}static isFrontFacing(t,e,i,n){return Je.subVectors(i,e),mi.subVectors(t,e),Je.cross(mi).dot(n)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,n){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[n]),this}setFromAttributeAndIndices(t,e,i,n){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Je.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return We.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return We.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,n,r){return We.getInterpolation(t,this.a,this.b,this.c,e,i,n,r)}containsPoint(t){return We.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return We.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,n=this.b,r=this.c;let o,a;fn.subVectors(n,i),pn.subVectors(r,i),yr.subVectors(t,i);const l=fn.dot(yr),c=pn.dot(yr);if(l<=0&&c<=0)return e.copy(i);Mr.subVectors(t,n);const h=fn.dot(Mr),u=pn.dot(Mr);if(h>=0&&u<=h)return e.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(i).addScaledVector(fn,o);Sr.subVectors(t,r);const p=fn.dot(Sr),g=pn.dot(Sr);if(g>=0&&p<=g)return e.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(i).addScaledVector(pn,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ca.subVectors(r,n),a=(u-h)/(u-h+(p-g)),e.copy(n).addScaledVector(Ca,a);const f=1/(m+x+d);return o=x*f,a=d*f,e.copy(i).addScaledVector(fn,o).addScaledVector(pn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},ys={h:0,s:0,l:0};function Tr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class xt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const n=t;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,n=qt.workingColorSpace){return this.r=t,this.g=e,this.b=i,qt.toWorkingColorSpace(this,n),this}setHSL(t,e,i,n=qt.workingColorSpace){if(t=ch(t,1),e=Fe(e,0,1),i=Fe(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=Tr(o,r,t+1/3),this.g=Tr(o,r,t),this.b=Tr(o,r,t-1/3)}return qt.toWorkingColorSpace(this,n),this}setStyle(t,e=He){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=n[1],a=n[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=n[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){const i=sc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return qt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Fe(Te.r*255,0,255))*65536+Math.round(Fe(Te.g*255,0,255))*256+Math.round(Fe(Te.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Te.copy(this),e);const i=Te.r,n=Te.g,r=Te.b,o=Math.max(i,n,r),a=Math.min(i,n,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=He){qt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,i=Te.g,n=Te.b;return t!==He?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(t,e,i){return this.getHSL(Li),this.setHSL(Li.h+t,Li.s+e,Li.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Li),t.getHSL(ys);const i=cr(Li.h,ys.h,e),n=cr(Li.s,ys.s,e),r=cr(Li.l,ys.l,e);return this.setHSL(i,n,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,n=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*n,this.g=r[1]*e+r[4]*i+r[7]*n,this.b=r[2]*e+r[5]*i+r[8]*n,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new xt;xt.NAMES=sc;let Th=0;class nn extends On{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=Oi(),this.name="",this.blending=An,this.side=zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wr,this.blendDst=Xr,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Pn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rn,this.stencilZFail=rn,this.stencilZPass=rn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const n=this[e];if(n===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==An&&(i.blending=this.blending),this.side!==zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wr&&(i.blendSrc=this.blendSrc),this.blendDst!==Xr&&(i.blendDst=this.blendDst),this.blendEquation!==$i&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Pn&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ua&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==rn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==rn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=n(t.textures),o=n(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const n=e.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ve extends nn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xe=new D,Ms=new Et;class Xe{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Po,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[t+n]=e.array[i+n];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ms.fromBufferAttribute(this,e),Ms.applyMatrix3(t),this.setXY(e,Ms.x,Ms.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix3(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyMatrix4(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.applyNormalMatrix(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xe.fromBufferAttribute(this,e),xe.transformDirection(t),this.setXYZ(e,xe.x,xe.y,xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ai(e,this.array)),e}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ai(e,this.array)),e}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ai(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ai(e,this.array)),e}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,n){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t*=this.itemSize,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=n,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Po&&(t.usage=this.usage),t}}class rc extends Xe{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class oc extends Xe{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class de extends Xe{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Ah=0;const Ge=new he,Ar=new ve,mn=new D,Ne=new ls,Yn=new ls,Se=new D;class Re extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ah++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ql(t)?oc:rc)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(t),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,i){return Ge.makeTranslation(t,e,i),this.applyMatrix4(Ge),this}scale(t,e,i){return Ge.makeScale(t,e,i),this.applyMatrix4(Ge),this}lookAt(t){return Ar.lookAt(t),Ar.updateMatrix(),this.applyMatrix4(Ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mn).negate(),this.translate(mn.x,mn.y,mn.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let n=0,r=t.length;n<r;n++){const o=t[n];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(i,3))}else{for(let i=0,n=e.count;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,n=e.length;i<n;i++){const r=e[i];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ir);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Yn.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(Ne.min,Yn.min),Ne.expandByPoint(Se),Se.addVectors(Ne.max,Yn.max),Ne.expandByPoint(Se)):(Ne.expandByPoint(Yn.min),Ne.expandByPoint(Yn.max))}Ne.getCenter(i);let n=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&(mn.fromBufferAttribute(t,c),Se.add(mn)),n=Math.max(n,i.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,n=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xe(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new D,l[P]=new D;const c=new D,h=new D,u=new D,d=new Et,p=new Et,g=new Et,x=new D,m=new D;function f(P,S,y){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,y),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,S),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(x),a[S].add(x),a[y].add(x),l[P].add(m),l[S].add(m),l[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let P=0,S=b.length;P<S;++P){const y=b[P],C=y.start,N=y.count;for(let z=C,Y=C+N;z<Y;z+=3)f(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const w=new D,_=new D,L=new D,T=new D;function A(P){L.fromBufferAttribute(n,P),T.copy(L);const S=a[P];w.copy(S),w.sub(L.multiplyScalar(L.dot(S))).normalize(),_.crossVectors(T,S);const C=_.dot(l[P])<0?-1:1;o.setXYZW(P,w.x,w.y,w.z,C)}for(let P=0,S=b.length;P<S;++P){const y=b[P],C=y.start,N=y.count;for(let z=C,Y=C+N;z<Y;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Xe(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const n=new D,r=new D,o=new D,a=new D,l=new D,c=new D,h=new D,u=new D;if(t)for(let d=0,p=t.count;d<p;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);n.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)n.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Re,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,i);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(n[l]=h,r=!0)}r&&(t.data.morphAttributes=n,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const n=t.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ra=new he,Vi=new ic,Ss=new ir,Pa=new D,bs=new D,ws=new D,Es=new D,Cr=new D,Ts=new D,Da=new D,As=new D;class O extends ve{constructor(t=new Re,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(n,t);const a=this.morphTargetInfluences;if(r&&a){Ts.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Cr.fromBufferAttribute(u,t),o?Ts.addScaledVector(Cr,h):Ts.addScaledVector(Cr.sub(e),h))}e.add(Ts)}return e}raycast(t,e){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ss.copy(i.boundingSphere),Ss.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(Ss.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(Ss,Pa)===null||Vi.origin.distanceToSquared(Pa)>(t.far-t.near)**2))&&(Ra.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Ra),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,i){let n;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,L=w;_<L;_+=3){const T=a.getX(_),A=a.getX(_+1),P=a.getX(_+2);n=Cs(this,f,t,i,c,h,u,T,A,P),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const b=a.getX(m),w=a.getX(m+1),_=a.getX(m+2);n=Cs(this,o,t,i,c,h,u,b,w,_),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=o[m.materialIndex],b=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let _=b,L=w;_<L;_+=3){const T=_,A=_+1,P=_+2;n=Cs(this,f,t,i,c,h,u,T,A,P),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,e.push(n))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const b=m,w=m+1,_=m+2;n=Cs(this,o,t,i,c,h,u,b,w,_),n&&(n.faceIndex=Math.floor(m/3),e.push(n))}}}}function Ch(s,t,e,i,n,r,o,a){let l;if(t.side===Ce?l=i.intersectTriangle(o,r,n,!0,a):l=i.intersectTriangle(n,r,o,t.side===zi,a),l===null)return null;As.copy(a),As.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(As);return c<e.near||c>e.far?null:{distance:c,point:As.clone(),object:s}}function Cs(s,t,e,i,n,r,o,a,l,c){s.getVertexPosition(a,bs),s.getVertexPosition(l,ws),s.getVertexPosition(c,Es);const h=Ch(s,t,e,i,bs,ws,Es,Da);if(h){const u=new D;We.getBarycoord(Da,bs,ws,Es,u),n&&(h.uv=We.getInterpolatedAttribute(n,a,l,c,u,new Et)),r&&(h.uv1=We.getInterpolatedAttribute(r,a,l,c,u,new Et)),o&&(h.normal=We.getInterpolatedAttribute(o,a,l,c,u,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new D,materialIndex:0};We.getNormal(bs,ws,Es,d.normal),h.face=d,h.barycoord=u}return h}class et extends Re{constructor(t=1,e=1,i=1,n=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:n,heightSegments:r,depthSegments:o};const a=this;n=Math.floor(n),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,n,o,2),g("x","z","y",1,-1,t,i,-e,n,o,3),g("x","y","z",1,-1,t,e,i,n,r,4),g("x","y","z",-1,-1,t,e,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(x,m,f,b,w,_,L,T,A,P,S){const y=_/A,C=L/P,N=_/2,z=L/2,Y=T/2,q=A+1,X=P+1;let Q=0,V=0;const ot=new D;for(let ft=0;ft<X;ft++){const St=ft*C-z;for(let kt=0;kt<q;kt++){const te=kt*y-N;ot[x]=te*b,ot[m]=St*w,ot[f]=Y,c.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[f]=T>0?1:-1,h.push(ot.x,ot.y,ot.z),u.push(kt/A),u.push(1-ft/P),Q+=1}}for(let ft=0;ft<P;ft++)for(let St=0;St<A;St++){const kt=d+St+q*ft,te=d+St+q*(ft+1),j=d+(St+1)+q*(ft+1),nt=d+(St+1)+q*ft;l.push(kt,te,nt),l.push(te,j,nt),V+=6}a.addGroup(p,V,S),p+=V,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Bn(s){const t={};for(const e in s){t[e]={};for(const i in s[e]){const n=s[e][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=n.clone():Array.isArray(n)?t[e][i]=n.slice():t[e][i]=n}}return t}function De(s){const t={};for(let e=0;e<s.length;e++){const i=Bn(s[e]);for(const n in i)t[n]=i[n]}return t}function Rh(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function ac(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const rs={clone:Bn,merge:De};var Ph=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ae extends nn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ph,this.fragmentShader=Dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bn(t.uniforms),this.uniformsGroups=Rh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?e.uniforms[n]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[n]={type:"m4",value:o.toArray()}:e.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class lc extends ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new D,La=new Et,Ia=new Et;class ze extends lc{constructor(t=50,e=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Do*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Do*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,La,Ia),e.subVectors(Ia,La)}setViewOffset(t,e,i,n,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(lr*.5*this.fov)/this.zoom,i=2*e,n=this.aspect*i,r=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*n/l,e-=o.offsetY*i/c,n*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gn=-90,xn=1;class Lh extends ve{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new ze(gn,xn,t,e);n.layers=this.layers,this.add(n);const r=new ze(gn,xn,t,e);r.layers=this.layers,this.add(r);const o=new ze(gn,xn,t,e);o.layers=this.layers,this.add(o);const a=new ze(gn,xn,t,e);a.layers=this.layers,this.add(a);const l=new ze(gn,xn,t,e);l.layers=this.layers,this.add(l);const c=new ze(gn,xn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,n,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===yi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qs)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,n),t.render(e,r),t.setRenderTarget(i,1,n),t.render(e,o),t.setRenderTarget(i,2,n),t.render(e,a),t.setRenderTarget(i,3,n),t.render(e,l),t.setRenderTarget(i,4,n),t.render(e,c),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,n),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class cc extends Le{constructor(t,e,i,n,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Dn,super(t,e,i,n,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ih extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},n=[i,i,i,i,i,i];this.texture=new cc(n,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:li}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},n=new et(5,5,5),r=new Ae({name:"CubemapFromEquirect",uniforms:Bn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ce,blending:Mi});r.uniforms.tEquirect.value=e;const o=new O(n,r),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=li),new Lh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,n){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,n);t.setRenderTarget(r)}}const Rr=new D,Fh=new D,Bh=new zt;class qi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,n){return this.normal.set(t,e,i),this.constant=n,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const n=Rr.subVectors(i,e).cross(Fh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(n,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Rr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Bh.getNormalMatrix(t),n=this.coplanarPoint(Rr).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new ir,Rs=new D;class Yo{constructor(t=new qi,e=new qi,i=new qi,n=new qi,r=new qi,o=new qi){this.planes=[t,e,i,n,r,o]}set(t,e,i,n,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(n),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yi){const i=this.planes,n=t.elements,r=n[0],o=n[1],a=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],p=n[8],g=n[9],x=n[10],m=n[11],f=n[12],b=n[13],w=n[14],_=n[15];if(i[0].setComponents(l-r,d-c,m-p,_-f).normalize(),i[1].setComponents(l+r,d+c,m+p,_+f).normalize(),i[2].setComponents(l+o,d+h,m+g,_+b).normalize(),i[3].setComponents(l-o,d-h,m-g,_-b).normalize(),i[4].setComponents(l-a,d-u,m-x,_-w).normalize(),e===yi)i[5].setComponents(l+a,d+u,m+x,_+w).normalize();else if(e===qs)i[5].setComponents(a,u,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,i=t.center,n=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const n=e[i];if(Rs.x=n.normal.x>0?t.max.x:t.min.x,Rs.y=n.normal.y>0?t.max.y:t.min.y,Rs.z=n.normal.z>0?t.max.z:t.min.z,n.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hc(){let s=null,t=!1,e=null,i=null;function n(r,o){e(r,o),i=s.requestAnimationFrame(n)}return{start:function(){t!==!0&&e!==null&&(i=s.requestAnimationFrame(n),t=!0)},stop:function(){s.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Uh(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:n,remove:r,update:o}}class fe extends Re{constructor(t=1,e=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:n};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const b=f*d-o;for(let w=0;w<c;w++){const _=w*u-r;g.push(_,-b,0),x.push(0,0,1),m.push(w/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let b=0;b<a;b++){const w=b+c*f,_=b+c*(f+1),L=b+1+c*(f+1),T=b+1+c*f;p.push(w,_,T),p.push(_,L,T)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fe(t.width,t.height,t.widthSegments,t.heightSegments)}}var Nh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oh=`#ifdef USE_ALPHAHASH
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
#endif`,zh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vh=`#ifdef USE_AOMAP
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
#endif`,Wh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xh=`#ifdef USE_BATCHING
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
#endif`,Yh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$h=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jh=`#ifdef USE_IRIDESCENCE
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
#endif`,Kh=`#ifdef USE_BUMPMAP
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
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,od=`#define PI 3.141592653589793
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
} // validated`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ld=`vec3 transformedNormal = objectNormal;
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
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,md=`#ifdef USE_ENVMAP
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
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xd=`#ifdef USE_ENVMAP
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
#endif`,vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_d=`#ifdef USE_ENVMAP
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
#endif`,yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Md=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wd=`#ifdef USE_GRADIENTMAP
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
}`,Ed=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Td=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Cd=`uniform bool receiveShadow;
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
#endif`,Rd=`#ifdef USE_ENVMAP
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
#endif`,Pd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ld=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fd=`PhysicalMaterial material;
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
#endif`,Bd=`struct PhysicalMaterial {
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
}`,Ud=`
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
#endif`,Nd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Yd=`#if defined( USE_POINTS_UV )
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
#endif`,qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$d=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zd=`#ifdef USE_MORPHTARGETS
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
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eu=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,iu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,su=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ru=`#ifdef USE_NORMALMAP
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
#endif`,ou=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,au=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,du=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vu=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_u=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mu=`float getShadowMask() {
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
}`,Su=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bu=`#ifdef USE_SKINNING
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
#endif`,wu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eu=`#ifdef USE_SKINNING
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
#endif`,Tu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Au=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ru=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pu=`#ifdef USE_TRANSMISSION
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
#endif`,Du=`#ifdef USE_TRANSMISSION
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
#endif`,Lu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nu=`uniform sampler2D t2D;
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
}`,Ou=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zu=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hu=`#include <common>
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
}`,Vu=`#if DEPTH_PACKING == 3200
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
}`,Wu=`#define DISTANCE
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
}`,Xu=`#define DISTANCE
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
}`,Yu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ju=`uniform float scale;
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
}`,$u=`uniform vec3 diffuse;
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
}`,Ju=`#include <common>
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
}`,Ku=`uniform vec3 diffuse;
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
}`,Zu=`#define LAMBERT
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
}`,Qu=`#define LAMBERT
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
}`,tf=`#define MATCAP
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
}`,ef=`#define MATCAP
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
}`,nf=`#define NORMAL
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
}`,sf=`#define NORMAL
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
}`,rf=`#define PHONG
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
}`,of=`#define PHONG
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
}`,af=`#define STANDARD
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
}`,lf=`#define STANDARD
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
}`,cf=`#define TOON
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
}`,hf=`#define TOON
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
}`,df=`uniform float size;
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
}`,uf=`uniform vec3 diffuse;
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
}`,ff=`#include <common>
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
}`,pf=`uniform vec3 color;
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
}`,mf=`uniform float rotation;
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
}`,gf=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Nh,alphahash_pars_fragment:Oh,alphamap_fragment:zh,alphamap_pars_fragment:kh,alphatest_fragment:Gh,alphatest_pars_fragment:Hh,aomap_fragment:Vh,aomap_pars_fragment:Wh,batching_pars_vertex:Xh,batching_vertex:Yh,begin_vertex:qh,beginnormal_vertex:jh,bsdfs:$h,iridescence_fragment:Jh,bumpmap_pars_fragment:Kh,clipping_planes_fragment:Zh,clipping_planes_pars_fragment:Qh,clipping_planes_pars_vertex:td,clipping_planes_vertex:ed,color_fragment:id,color_pars_fragment:nd,color_pars_vertex:sd,color_vertex:rd,common:od,cube_uv_reflection_fragment:ad,defaultnormal_vertex:ld,displacementmap_pars_vertex:cd,displacementmap_vertex:hd,emissivemap_fragment:dd,emissivemap_pars_fragment:ud,colorspace_fragment:fd,colorspace_pars_fragment:pd,envmap_fragment:md,envmap_common_pars_fragment:gd,envmap_pars_fragment:xd,envmap_pars_vertex:vd,envmap_physical_pars_fragment:Rd,envmap_vertex:_d,fog_vertex:yd,fog_pars_vertex:Md,fog_fragment:Sd,fog_pars_fragment:bd,gradientmap_pars_fragment:wd,lightmap_pars_fragment:Ed,lights_lambert_fragment:Td,lights_lambert_pars_fragment:Ad,lights_pars_begin:Cd,lights_toon_fragment:Pd,lights_toon_pars_fragment:Dd,lights_phong_fragment:Ld,lights_phong_pars_fragment:Id,lights_physical_fragment:Fd,lights_physical_pars_fragment:Bd,lights_fragment_begin:Ud,lights_fragment_maps:Nd,lights_fragment_end:Od,logdepthbuf_fragment:zd,logdepthbuf_pars_fragment:kd,logdepthbuf_pars_vertex:Gd,logdepthbuf_vertex:Hd,map_fragment:Vd,map_pars_fragment:Wd,map_particle_fragment:Xd,map_particle_pars_fragment:Yd,metalnessmap_fragment:qd,metalnessmap_pars_fragment:jd,morphinstance_vertex:$d,morphcolor_vertex:Jd,morphnormal_vertex:Kd,morphtarget_pars_vertex:Zd,morphtarget_vertex:Qd,normal_fragment_begin:tu,normal_fragment_maps:eu,normal_pars_fragment:iu,normal_pars_vertex:nu,normal_vertex:su,normalmap_pars_fragment:ru,clearcoat_normal_fragment_begin:ou,clearcoat_normal_fragment_maps:au,clearcoat_pars_fragment:lu,iridescence_pars_fragment:cu,opaque_fragment:hu,packing:du,premultiplied_alpha_fragment:uu,project_vertex:fu,dithering_fragment:pu,dithering_pars_fragment:mu,roughnessmap_fragment:gu,roughnessmap_pars_fragment:xu,shadowmap_pars_fragment:vu,shadowmap_pars_vertex:_u,shadowmap_vertex:yu,shadowmask_pars_fragment:Mu,skinbase_vertex:Su,skinning_pars_vertex:bu,skinning_vertex:wu,skinnormal_vertex:Eu,specularmap_fragment:Tu,specularmap_pars_fragment:Au,tonemapping_fragment:Cu,tonemapping_pars_fragment:Ru,transmission_fragment:Pu,transmission_pars_fragment:Du,uv_pars_fragment:Lu,uv_pars_vertex:Iu,uv_vertex:Fu,worldpos_vertex:Bu,background_vert:Uu,background_frag:Nu,backgroundCube_vert:Ou,backgroundCube_frag:zu,cube_vert:ku,cube_frag:Gu,depth_vert:Hu,depth_frag:Vu,distanceRGBA_vert:Wu,distanceRGBA_frag:Xu,equirect_vert:Yu,equirect_frag:qu,linedashed_vert:ju,linedashed_frag:$u,meshbasic_vert:Ju,meshbasic_frag:Ku,meshlambert_vert:Zu,meshlambert_frag:Qu,meshmatcap_vert:tf,meshmatcap_frag:ef,meshnormal_vert:nf,meshnormal_frag:sf,meshphong_vert:rf,meshphong_frag:of,meshphysical_vert:af,meshphysical_frag:lf,meshtoon_vert:cf,meshtoon_frag:hf,points_vert:df,points_frag:uf,shadow_vert:ff,shadow_frag:pf,sprite_vert:mf,sprite_frag:gf},rt={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},ri={basic:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:De([rt.common,rt.specularmap,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,rt.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:De([rt.common,rt.envmap,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.roughnessmap,rt.metalnessmap,rt.fog,rt.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:De([rt.common,rt.aomap,rt.lightmap,rt.emissivemap,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.gradientmap,rt.fog,rt.lights,{emissive:{value:new xt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:De([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,rt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:De([rt.points,rt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:De([rt.common,rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:De([rt.common,rt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:De([rt.common,rt.bumpmap,rt.normalmap,rt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:De([rt.sprite,rt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:De([rt.common,rt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:De([rt.lights,rt.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};ri.physical={uniforms:De([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Ps={r:0,b:0,g:0},Xi=new ci,xf=new he;function vf(s,t,e,i,n,r,o){const a=new xt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(b){let w=b.isScene===!0?b.background:null;return w&&w.isTexture&&(w=(b.backgroundBlurriness>0?e:t).get(w)),w}function x(b){let w=!1;const _=g(b);_===null?f(a,l):_&&_.isColor&&(f(_,1),w=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(s.autoClear||w)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(b,w){const _=g(w);_&&(_.isCubeTexture||_.mapping===tr)?(h===void 0&&(h=new O(new et(1,1,1),new Ae({name:"BackgroundCubeMaterial",uniforms:Bn(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Xi.copy(w.backgroundRotation),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xf.makeRotationFromEuler(Xi)),h.material.toneMapped=qt.getTransfer(_.colorSpace)!==ie,(u!==_||d!==_.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=s.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new O(new fe(2,2),new Ae({name:"BackgroundMaterial",uniforms:Bn(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=qt.getTransfer(_.colorSpace)!==ie,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=s.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,w){b.getRGB(Ps,ac(s)),i.buffers.color.setClear(Ps.r,Ps.g,Ps.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),l=w,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,f(a,l)},render:x,addToRenderList:m}}function _f(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null);let r=n,o=!1;function a(y,C,N,z,Y){let q=!1;const X=u(z,N,C);r!==X&&(r=X,c(r.object)),q=p(y,z,N,Y),q&&g(y,z,N,Y),Y!==null&&t.update(Y,s.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,_(y,C,N,z),Y!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,C,N){const z=N.wireframe===!0;let Y=i[y.id];Y===void 0&&(Y={},i[y.id]=Y);let q=Y[C.id];q===void 0&&(q={},Y[C.id]=q);let X=q[z];return X===void 0&&(X=d(l()),q[z]=X),X}function d(y){const C=[],N=[],z=[];for(let Y=0;Y<e;Y++)C[Y]=0,N[Y]=0,z[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:z,object:y,attributes:{},index:null}}function p(y,C,N,z){const Y=r.attributes,q=C.attributes;let X=0;const Q=N.getAttributes();for(const V in Q)if(Q[V].location>=0){const ft=Y[V];let St=q[V];if(St===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(St=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(St=y.instanceColor)),ft===void 0||ft.attribute!==St||St&&ft.data!==St.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function g(y,C,N,z){const Y={},q=C.attributes;let X=0;const Q=N.getAttributes();for(const V in Q)if(Q[V].location>=0){let ft=q[V];ft===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ft=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ft=y.instanceColor));const St={};St.attribute=ft,ft&&ft.data&&(St.data=ft.data),Y[V]=St,X++}r.attributes=Y,r.attributesNum=X,r.index=z}function x(){const y=r.newAttributes;for(let C=0,N=y.length;C<N;C++)y[C]=0}function m(y){f(y,0)}function f(y,C){const N=r.newAttributes,z=r.enabledAttributes,Y=r.attributeDivisors;N[y]=1,z[y]===0&&(s.enableVertexAttribArray(y),z[y]=1),Y[y]!==C&&(s.vertexAttribDivisor(y,C),Y[y]=C)}function b(){const y=r.newAttributes,C=r.enabledAttributes;for(let N=0,z=C.length;N<z;N++)C[N]!==y[N]&&(s.disableVertexAttribArray(N),C[N]=0)}function w(y,C,N,z,Y,q,X){X===!0?s.vertexAttribIPointer(y,C,N,Y,q):s.vertexAttribPointer(y,C,N,z,Y,q)}function _(y,C,N,z){x();const Y=z.attributes,q=N.getAttributes(),X=C.defaultAttributeValues;for(const Q in q){const V=q[Q];if(V.location>=0){let ot=Y[Q];if(ot===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(ot=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(ot=y.instanceColor)),ot!==void 0){const ft=ot.normalized,St=ot.itemSize,kt=t.get(ot);if(kt===void 0)continue;const te=kt.buffer,j=kt.type,nt=kt.bytesPerElement,vt=j===s.INT||j===s.UNSIGNED_INT||ot.gpuType===ko;if(ot.isInterleavedBufferAttribute){const at=ot.data,Ct=at.stride,Lt=ot.offset;if(at.isInstancedInterleavedBuffer){for(let Wt=0;Wt<V.locationSize;Wt++)f(V.location+Wt,at.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Wt=0;Wt<V.locationSize;Wt++)m(V.location+Wt);s.bindBuffer(s.ARRAY_BUFFER,te);for(let Wt=0;Wt<V.locationSize;Wt++)w(V.location+Wt,St/V.locationSize,j,ft,Ct*nt,(Lt+St/V.locationSize*Wt)*nt,vt)}else{if(ot.isInstancedBufferAttribute){for(let at=0;at<V.locationSize;at++)f(V.location+at,ot.meshPerAttribute);y.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let at=0;at<V.locationSize;at++)m(V.location+at);s.bindBuffer(s.ARRAY_BUFFER,te);for(let at=0;at<V.locationSize;at++)w(V.location+at,St/V.locationSize,j,ft,St*nt,St/V.locationSize*at*nt,vt)}}else if(X!==void 0){const ft=X[Q];if(ft!==void 0)switch(ft.length){case 2:s.vertexAttrib2fv(V.location,ft);break;case 3:s.vertexAttrib3fv(V.location,ft);break;case 4:s.vertexAttrib4fv(V.location,ft);break;default:s.vertexAttrib1fv(V.location,ft)}}}}b()}function L(){P();for(const y in i){const C=i[y];for(const N in C){const z=C[N];for(const Y in z)h(z[Y].object),delete z[Y];delete C[N]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const C=i[y.id];for(const N in C){const z=C[N];for(const Y in z)h(z[Y].object),delete z[Y];delete C[N]}delete i[y.id]}function A(y){for(const C in i){const N=i[C];if(N[y.id]===void 0)continue;const z=N[y.id];for(const Y in z)h(z[Y].object),delete z[Y];delete N[y.id]}}function P(){S(),o=!0,r!==n&&(r=n,c(r.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function yf(s,t,e){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),e.update(h,i,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),e.update(h,i,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,i,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,i,1)}}this.setMode=n,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Mf(s,t,e,i){let n;function r(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function o(A){return!(A!==Qe&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===Si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==wi&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==_i&&!P)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),b=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:_,vertexTextures:L,maxSamples:T}}function Sf(s){const t=this;let e=null,i=0,n=!1,r=!1;const o=new qi,a=new zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||i!==0||n;return n=d,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:i,w=b*4;let _=f.clippingState||null;l.value=_,_=h(g,d,w,p);for(let L=0;L!==w;++L)_[L]=e[L];f.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,d,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,_=p;w!==x;++w,_+=4)o.copy(u[w]).applyMatrix4(b,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function bf(s){let t=new WeakMap;function e(o,a){return a===Qr?o.mapping=Dn:a===to&&(o.mapping=Ln),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qr||a===to)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ih(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",n),e(c.texture,o.mapping)}else return null}}return o}function n(o){const a=o.target;a.removeEventListener("dispose",n);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class qo extends lc{constructor(t=-1,e=1,i=1,n=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=n,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,n,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=n+e,l=n-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const En=4,Fa=[.125,.215,.35,.446,.526,.582],Ji=20,Pr=new qo,Ba=new xt;let Dr=null,Lr=0,Ir=0,Fr=!1;const ji=(1+Math.sqrt(5))/2,vn=1/ji,Ua=[new D(-ji,vn,0),new D(ji,vn,0),new D(-vn,0,ji),new D(vn,0,ji),new D(0,ji,-vn),new D(0,ji,vn),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class Na{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,n=100){Dr=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Ir=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,n,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ka(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=za(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Dr,Lr,Ir),this._renderer.xr.enabled=Fr,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Dn||t.mapping===Ln?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dr=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Ir=this._renderer.getActiveMipmapLevel(),Fr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:Si,format:Qe,colorSpace:Nn,depthBuffer:!1},n=Oa(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oa(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wf(r)),this._blurMaterial=Ef(r,t,e)}return n}_compileMaterial(t){const e=new O(this._lodPlanes[0],t);this._renderer.compile(e,Pr)}_sceneToCubeUV(t,e,i,n){const a=new ze(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ba),h.toneMapping=Ni,h.autoClear=!1;const p=new Ve({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),g=new O(new et,p);let x=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(Ba),x=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):b===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const w=this._cubeSize;Ds(n,b*w,f>2?w:0,w,w),h.setRenderTarget(n),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,n=t.mapping===Dn||t.mapping===Ln;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=ka()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=za());const r=n?this._cubemapMaterial:this._equirectMaterial,o=new O(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ds(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Pr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ua[(n-r-1)%Ua.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,n,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,n,"latitudinal",r),this._halfBlur(o,t,i,i,n,"longitudinal",r)}_halfBlur(t,e,i,n,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new O(this._lodPlanes[n],c),d=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ji-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ji;m>Ji&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const f=[];let b=0;for(let A=0;A<Ji;++A){const P=A/x,S=Math.exp(-P*P/2);f.push(S),A===0?b+=S:A<m&&(b+=2*S)}for(let A=0;A<f.length;A++)f[A]=f[A]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-i;const _=this._sizeLods[n],L=3*_*(n>w-En?n-w+En:0),T=4*(this._cubeSize-_);Ds(e,L,T,3*_,2*_),l.setRenderTarget(e),l.render(u,Pr)}}function wf(s){const t=[],e=[],i=[];let n=s;const r=s-En+1+Fa.length;for(let o=0;o<r;o++){const a=Math.pow(2,n);e.push(a);let l=1/a;o>s-En?l=Fa[o-s+En-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,b=new Float32Array(x*g*p),w=new Float32Array(m*g*p),_=new Float32Array(f*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,P=T>2?0:-1,S=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];b.set(S,x*g*T),w.set(d,m*g*T);const y=[T,T,T,T,T,T];_.set(y,f*g*T)}const L=new Re;L.setAttribute("position",new Xe(b,x)),L.setAttribute("uv",new Xe(w,m)),L.setAttribute("faceIndex",new Xe(_,f)),t.push(L),n>En&&n--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Oa(s,t,e){const i=new ei(s,t,e);return i.texture.mapping=tr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ds(s,t,e,i,n){s.viewport.set(t,e,i,n),s.scissor.set(t,e,i,n)}function Ef(s,t,e){const i=new Float32Array(Ji),n=new D(0,1,0);return new Ae({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:jo(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function za(){return new Ae({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jo(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function ka(){return new Ae({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function jo(){return`

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
	`}function Tf(s){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qr||l===to,h=l===Dn||l===Ln;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Na(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&n(p)?(e===null&&(e=new Na(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Af(s){const t={};function e(i){if(t[i]!==void 0)return t[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return t[i]=n,n}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const n=e(i);return n===null&&is("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Cf(s,t,e,i){const n={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete n[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",o),n[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let w=0,_=b.length;w<_;w+=3){const L=b[w+0],T=b[w+1],A=b[w+2];d.push(L,T,T,A,A,L)}}else if(g!==void 0){const b=g.array;x=g.version;for(let w=0,_=b.length/3-1;w<_;w+=3){const L=w+0,T=w+1,A=w+2;d.push(L,T,T,A,A,L)}}else return;const m=new(Ql(d)?oc:rc)(d,1);m.version=x;const f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Rf(s,t,e){let i;function n(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(i,p,r,d*o),e.update(p,i,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(i,p,r,d*o,g),e.update(p,i,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,i,1)}function u(d,p,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,r,d,0,x,0,g);let f=0;for(let b=0;b<g;b++)f+=p[b]*x[b];e.update(f,i,1)}}this.setMode=n,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Pf(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:n,update:i}}function Df(s,t,e){const i=new WeakMap,n=new se;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==u){let y=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],b=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let _=0;g===!0&&(_=1),x===!0&&(_=2),m===!0&&(_=3);let L=a.attributes.position.count*_,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const A=new Float32Array(L*T*4*u),P=new ec(A,L,T,u);P.type=_i,P.needsUpdate=!0;const S=_*4;for(let C=0;C<u;C++){const N=f[C],z=b[C],Y=w[C],q=L*T*4*C;for(let X=0;X<N.count;X++){const Q=X*S;g===!0&&(n.fromBufferAttribute(N,X),A[q+Q+0]=n.x,A[q+Q+1]=n.y,A[q+Q+2]=n.z,A[q+Q+3]=0),x===!0&&(n.fromBufferAttribute(z,X),A[q+Q+4]=n.x,A[q+Q+5]=n.y,A[q+Q+6]=n.z,A[q+Q+7]=0),m===!0&&(n.fromBufferAttribute(Y,X),A[q+Q+8]=n.x,A[q+Q+9]=n.y,A[q+Q+10]=n.z,A[q+Q+11]=Y.itemSize===4?n.w:1)}}d={count:u,texture:P,size:new Et(L,T)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Lf(s,t,e,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=t.get(l,h);if(n.get(u)!==c&&(t.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function o(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class dc extends Le{constructor(t,e,i,n,r,o,a,l,c,h=Cn){if(h!==Cn&&h!==Fn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Cn&&(i=en),i===void 0&&h===Fn&&(i=In),super(null,n,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ti,this.minFilter=l!==void 0?l:ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const uc=new Le,Ga=new dc(1,1),fc=new ec,pc=new vh,mc=new cc,Ha=[],Va=[],Wa=new Float32Array(16),Xa=new Float32Array(9),Ya=new Float32Array(4);function zn(s,t,e){const i=s[0];if(i<=0||i>0)return s;const n=t*e;let r=Ha[n];if(r===void 0&&(r=new Float32Array(n),Ha[n]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function _e(s,t){if(s.length!==t.length)return!1;for(let e=0,i=s.length;e<i;e++)if(s[e]!==t[e])return!1;return!0}function ye(s,t){for(let e=0,i=t.length;e<i;e++)s[e]=t[e]}function nr(s,t){let e=Va[t];e===void 0&&(e=new Int32Array(t),Va[t]=e);for(let i=0;i!==t;++i)e[i]=s.allocateTextureUnit();return e}function If(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Ff(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2fv(this.addr,t),ye(e,t)}}function Bf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;s.uniform3fv(this.addr,t),ye(e,t)}}function Uf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4fv(this.addr,t),ye(e,t)}}function Nf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,i))return;Ya.set(i),s.uniformMatrix2fv(this.addr,!1,Ya),ye(e,i)}}function Of(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,i))return;Xa.set(i),s.uniformMatrix3fv(this.addr,!1,Xa),ye(e,i)}}function zf(s,t){const e=this.cache,i=t.elements;if(i===void 0){if(_e(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(_e(e,i))return;Wa.set(i),s.uniformMatrix4fv(this.addr,!1,Wa),ye(e,i)}}function kf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Gf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2iv(this.addr,t),ye(e,t)}}function Hf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3iv(this.addr,t),ye(e,t)}}function Vf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4iv(this.addr,t),ye(e,t)}}function Wf(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Xf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;s.uniform2uiv(this.addr,t),ye(e,t)}}function Yf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;s.uniform3uiv(this.addr,t),ye(e,t)}}function qf(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;s.uniform4uiv(this.addr,t),ye(e,t)}}function jf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Ga.compareFunction=Zl,r=Ga):r=uc,e.setTexture2D(t||r,n)}function $f(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture3D(t||pc,n)}function Jf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTextureCube(t||mc,n)}function Kf(s,t,e){const i=this.cache,n=e.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),e.setTexture2DArray(t||fc,n)}function Zf(s){switch(s){case 5126:return If;case 35664:return Ff;case 35665:return Bf;case 35666:return Uf;case 35674:return Nf;case 35675:return Of;case 35676:return zf;case 5124:case 35670:return kf;case 35667:case 35671:return Gf;case 35668:case 35672:return Hf;case 35669:case 35673:return Vf;case 5125:return Wf;case 36294:return Xf;case 36295:return Yf;case 36296:return qf;case 35678:case 36198:case 36298:case 36306:case 35682:return jf;case 35679:case 36299:case 36307:return $f;case 35680:case 36300:case 36308:case 36293:return Jf;case 36289:case 36303:case 36311:case 36292:return Kf}}function Qf(s,t){s.uniform1fv(this.addr,t)}function tp(s,t){const e=zn(t,this.size,2);s.uniform2fv(this.addr,e)}function ep(s,t){const e=zn(t,this.size,3);s.uniform3fv(this.addr,e)}function ip(s,t){const e=zn(t,this.size,4);s.uniform4fv(this.addr,e)}function np(s,t){const e=zn(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function sp(s,t){const e=zn(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function rp(s,t){const e=zn(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function op(s,t){s.uniform1iv(this.addr,t)}function ap(s,t){s.uniform2iv(this.addr,t)}function lp(s,t){s.uniform3iv(this.addr,t)}function cp(s,t){s.uniform4iv(this.addr,t)}function hp(s,t){s.uniform1uiv(this.addr,t)}function dp(s,t){s.uniform2uiv(this.addr,t)}function up(s,t){s.uniform3uiv(this.addr,t)}function fp(s,t){s.uniform4uiv(this.addr,t)}function pp(s,t,e){const i=this.cache,n=t.length,r=nr(e,n);_e(i,r)||(s.uniform1iv(this.addr,r),ye(i,r));for(let o=0;o!==n;++o)e.setTexture2D(t[o]||uc,r[o])}function mp(s,t,e){const i=this.cache,n=t.length,r=nr(e,n);_e(i,r)||(s.uniform1iv(this.addr,r),ye(i,r));for(let o=0;o!==n;++o)e.setTexture3D(t[o]||pc,r[o])}function gp(s,t,e){const i=this.cache,n=t.length,r=nr(e,n);_e(i,r)||(s.uniform1iv(this.addr,r),ye(i,r));for(let o=0;o!==n;++o)e.setTextureCube(t[o]||mc,r[o])}function xp(s,t,e){const i=this.cache,n=t.length,r=nr(e,n);_e(i,r)||(s.uniform1iv(this.addr,r),ye(i,r));for(let o=0;o!==n;++o)e.setTexture2DArray(t[o]||fc,r[o])}function vp(s){switch(s){case 5126:return Qf;case 35664:return tp;case 35665:return ep;case 35666:return ip;case 35674:return np;case 35675:return sp;case 35676:return rp;case 5124:case 35670:return op;case 35667:case 35671:return ap;case 35668:case 35672:return lp;case 35669:case 35673:return cp;case 5125:return hp;case 36294:return dp;case 36295:return up;case 36296:return fp;case 35678:case 36198:case 36298:case 36306:case 35682:return pp;case 35679:case 36299:case 36307:return mp;case 35680:case 36300:case 36308:case 36293:return gp;case 36289:case 36303:case 36311:case 36292:return xp}}class _p{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Zf(e.type)}}class yp{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=vp(e.type)}}class Mp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const n=this.seq;for(let r=0,o=n.length;r!==o;++r){const a=n[r];a.setValue(t,e[a.id],i)}}}const Br=/(\w+)(\])?(\[|\.)?/g;function qa(s,t){s.seq.push(t),s.map[t.id]=t}function Sp(s,t,e){const i=s.name,n=i.length;for(Br.lastIndex=0;;){const r=Br.exec(i),o=Br.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===n){qa(e,c===void 0?new _p(a,s,t):new yp(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Mp(a),qa(e,u)),e=u}}}class Xs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=t.getActiveUniform(e,n),o=t.getUniformLocation(e,r.name);Sp(r,o,this)}}setValue(t,e,i,n){const r=this.map[e];r!==void 0&&r.setValue(t,i,n)}setOptional(t,e,i){const n=e[i];n!==void 0&&this.setValue(t,i,n)}static upload(t,e,i,n){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,n)}}static seqWithValue(t,e){const i=[];for(let n=0,r=t.length;n!==r;++n){const o=t[n];o.id in e&&i.push(o)}return i}}function ja(s,t,e){const i=s.createShader(t);return s.shaderSource(i,e),s.compileShader(i),i}const bp=37297;let wp=0;function Ep(s,t){const e=s.split(`
`),i=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=n;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const $a=new zt;function Tp(s){qt._getMatrix($a,qt.workingColorSpace,s);const t=`mat3( ${$a.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(s)){case er:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Ja(s,t,e){const i=s.getShaderParameter(t,s.COMPILE_STATUS),n=s.getShaderInfoLog(t).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+n+`

`+Ep(s.getShaderSource(t),o)}else return n}function Ap(s,t){const e=Tp(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Cp(s,t){let e;switch(t){case Bl:e="Linear";break;case Ul:e="Reinhard";break;case Nl:e="Cineon";break;case zo:e="ACESFilmic";break;case Ol:e="AgX";break;case zl:e="Neutral";break;case Kc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ls=new D;function Rp(){qt.getLuminanceCoefficients(Ls);const s=Ls.x.toFixed(4),t=Ls.y.toFixed(4),e=Ls.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pp(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ns).join(`
`)}function Dp(s){const t=[];for(const e in s){const i=s[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Lp(s,t){const e={},i=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(t,n),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function ns(s){return s!==""}function Ka(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Za(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lo(s){return s.replace(Ip,Bp)}const Fp=new Map;function Bp(s,t){let e=Vt[t];if(e===void 0){const i=Fp.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Lo(e)}const Up=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qa(s){return s.replace(Up,Np)}function Np(s,t,e,i){let n="";for(let r=parseInt(t);r<parseInt(e);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function tl(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Op(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Il?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Fl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===xi&&(t="SHADOWMAP_TYPE_VSM"),t}function zp(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Dn:case Ln:t="ENVMAP_TYPE_CUBE";break;case tr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kp(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ln:t="ENVMAP_MODE_REFRACTION";break}return t}function Gp(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Oo:t="ENVMAP_BLENDING_MULTIPLY";break;case $c:t="ENVMAP_BLENDING_MIX";break;case Jc:t="ENVMAP_BLENDING_ADD";break}return t}function Hp(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Vp(s,t,e,i){const n=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Op(e),c=zp(e),h=kp(e),u=Gp(e),d=Hp(e),p=Pp(e),g=Dp(r),x=n.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ns).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ns).join(`
`),f.length>0&&(f+=`
`)):(m=[tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),f=[tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ni?"#define TONE_MAPPING":"",e.toneMapping!==Ni?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Ni?Cp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,Ap("linearToOutputTexel",e.outputColorSpace),Rp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ns).join(`
`)),o=Lo(o),o=Ka(o,e),o=Za(o,e),a=Lo(a),a=Ka(a,e),a=Za(a,e),o=Qa(o),a=Qa(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const w=b+m+o,_=b+f+a,L=ja(n,n.VERTEX_SHADER,w),T=ja(n,n.FRAGMENT_SHADER,_);n.attachShader(x,L),n.attachShader(x,T),e.index0AttributeName!==void 0?n.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function A(C){if(s.debug.checkShaderErrors){const N=n.getProgramInfoLog(x).trim(),z=n.getShaderInfoLog(L).trim(),Y=n.getShaderInfoLog(T).trim();let q=!0,X=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,L,T);else{const Q=Ja(n,L,"vertex"),V=Ja(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+Q+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(z===""||Y==="")&&(X=!1);X&&(C.diagnostics={runnable:q,programLog:N,vertexShader:{log:z,prefix:m},fragmentShader:{log:Y,prefix:f}})}n.deleteShader(L),n.deleteShader(T),P=new Xs(n,x),S=Lp(n,x)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(x,bp)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wp++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=T,this}let Wp=0;class Xp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,n=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Yp(t),e.set(t,i)),i}}class Yp{constructor(t){this.id=Wp++,this.code=t,this.usedTimes=0}}function qp(s,t,e,i,n,r,o){const a=new nc,l=new Xp,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let p=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,y,C,N,z){const Y=N.fog,q=z.geometry,X=S.isMeshStandardMaterial?N.environment:null,Q=(S.isMeshStandardMaterial?e:t).get(S.envMap||X),V=Q&&Q.mapping===tr?Q.image.height:null,ot=g[S.type];S.precision!==null&&(p=n.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ft=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,St=ft!==void 0?ft.length:0;let kt=0;q.morphAttributes.position!==void 0&&(kt=1),q.morphAttributes.normal!==void 0&&(kt=2),q.morphAttributes.color!==void 0&&(kt=3);let te,j,nt,vt;if(ot){const ee=ri[ot];te=ee.vertexShader,j=ee.fragmentShader}else te=S.vertexShader,j=S.fragmentShader,l.update(S),nt=l.getVertexShaderID(S),vt=l.getFragmentShaderID(S);const at=s.getRenderTarget(),Ct=s.state.buffers.depth.getReversed(),Lt=z.isInstancedMesh===!0,Wt=z.isBatchedMesh===!0,ae=!!S.map,Xt=!!S.matcap,Ft=!!Q,R=!!S.aoMap,ge=!!S.lightMap,Bt=!!S.bumpMap,Gt=!!S.normalMap,At=!!S.displacementMap,Jt=!!S.emissiveMap,Tt=!!S.metalnessMap,E=!!S.roughnessMap,v=S.anisotropy>0,k=S.clearcoat>0,J=S.dispersion>0,tt=S.iridescence>0,$=S.sheen>0,bt=S.transmission>0,ct=v&&!!S.anisotropyMap,pt=k&&!!S.clearcoatMap,jt=k&&!!S.clearcoatNormalMap,it=k&&!!S.clearcoatRoughnessMap,mt=tt&&!!S.iridescenceMap,Rt=tt&&!!S.iridescenceThicknessMap,Dt=$&&!!S.sheenColorMap,gt=$&&!!S.sheenRoughnessMap,Yt=!!S.specularMap,Ht=!!S.specularColorMap,re=!!S.specularIntensityMap,I=bt&&!!S.transmissionMap,lt=bt&&!!S.thicknessMap,W=!!S.gradientMap,K=!!S.alphaMap,ut=S.alphaTest>0,ht=!!S.alphaHash,Ut=!!S.extensions;let pe=Ni;S.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(pe=s.toneMapping);const we={shaderID:ot,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:j,defines:S.defines,customVertexShaderID:nt,customFragmentShaderID:vt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Wt,batchingColor:Wt&&z._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&z.instanceColor!==null,instancingMorph:Lt&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Nn,alphaToCoverage:!!S.alphaToCoverage,map:ae,matcap:Xt,envMap:Ft,envMapMode:Ft&&Q.mapping,envMapCubeUVHeight:V,aoMap:R,lightMap:ge,bumpMap:Bt,normalMap:Gt,displacementMap:d&&At,emissiveMap:Jt,normalMapObjectSpace:Gt&&S.normalMapType===eh,normalMapTangentSpace:Gt&&S.normalMapType===Kl,metalnessMap:Tt,roughnessMap:E,anisotropy:v,anisotropyMap:ct,clearcoat:k,clearcoatMap:pt,clearcoatNormalMap:jt,clearcoatRoughnessMap:it,dispersion:J,iridescence:tt,iridescenceMap:mt,iridescenceThicknessMap:Rt,sheen:$,sheenColorMap:Dt,sheenRoughnessMap:gt,specularMap:Yt,specularColorMap:Ht,specularIntensityMap:re,transmission:bt,transmissionMap:I,thicknessMap:lt,gradientMap:W,opaque:S.transparent===!1&&S.blending===An&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:ut,alphaHash:ht,combine:S.combine,mapUv:ae&&x(S.map.channel),aoMapUv:R&&x(S.aoMap.channel),lightMapUv:ge&&x(S.lightMap.channel),bumpMapUv:Bt&&x(S.bumpMap.channel),normalMapUv:Gt&&x(S.normalMap.channel),displacementMapUv:At&&x(S.displacementMap.channel),emissiveMapUv:Jt&&x(S.emissiveMap.channel),metalnessMapUv:Tt&&x(S.metalnessMap.channel),roughnessMapUv:E&&x(S.roughnessMap.channel),anisotropyMapUv:ct&&x(S.anisotropyMap.channel),clearcoatMapUv:pt&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:jt&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:mt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:gt&&x(S.sheenRoughnessMap.channel),specularMapUv:Yt&&x(S.specularMap.channel),specularColorMapUv:Ht&&x(S.specularColorMap.channel),specularIntensityMapUv:re&&x(S.specularIntensityMap.channel),transmissionMapUv:I&&x(S.transmissionMap.channel),thicknessMapUv:lt&&x(S.thicknessMap.channel),alphaMapUv:K&&x(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Gt||v),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(ae||K),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ct,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:kt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:pe,decodeVideoTexture:ae&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===ie,decodeVideoTextureEmissive:Jt&&S.emissiveMap.isVideoTexture===!0&&qt.getTransfer(S.emissiveMap.colorSpace)===ie,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===oi,flipSided:S.side===Ce,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ut&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&S.extensions.multiDraw===!0||Wt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function f(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)y.push(C),y.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(b(y,S),w(y,S),y.push(s.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function b(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function w(S,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),S.push(a.mask)}function _(S){const y=g[S.type];let C;if(y){const N=ri[y];C=rs.clone(N.uniforms)}else C=S.uniforms;return C}function L(S,y){let C;for(let N=0,z=h.length;N<z;N++){const Y=h[N];if(Y.cacheKey===y){C=Y,++C.usedTimes;break}}return C===void 0&&(C=new Vp(s,y,S,r),h.push(C)),C}function T(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function A(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:_,acquireProgram:L,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:P}}function jp(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function i(o){s.delete(o)}function n(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:i,update:n,dispose:r}}function $p(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function el(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function il(){const s=[];let t=0;const e=[],i=[],n=[];function r(){t=0,e.length=0,i.length=0,n.length=0}function o(u,d,p,g,x,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function a(u,d,p,g,x,m){const f=o(u,d,p,g,x,m);p.transmission>0?i.push(f):p.transparent===!0?n.push(f):e.push(f)}function l(u,d,p,g,x,m){const f=o(u,d,p,g,x,m);p.transmission>0?i.unshift(f):p.transparent===!0?n.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||$p),i.length>1&&i.sort(d||el),n.length>1&&n.sort(d||el)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:n,init:r,push:a,unshift:l,finish:h,sort:c}}function Jp(){let s=new WeakMap;function t(i,n){const r=s.get(i);let o;return r===void 0?(o=new il,s.set(i,[o])):n>=r.length?(o=new il,r.push(o)):o=r[n],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Kp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new xt};break;case"SpotLight":e={position:new D,direction:new D,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":e={color:new xt,position:new D,halfWidth:new D,halfHeight:new D};break}return s[t.id]=e,e}}}function Zp(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Et,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Qp=0;function t0(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function e0(s){const t=new Kp,e=Zp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const n=new D,r=new he,o=new he;function a(c){let h=0,u=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,b=0,w=0,_=0,L=0,T=0,A=0;c.sort(t0);for(let S=0,y=c.length;S<y;S++){const C=c[S],N=C.color,z=C.intensity,Y=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=N.r*z,u+=N.g*z,d+=N.b*z;else if(C.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(C.sh.coefficients[X],z);A++}else if(C.isDirectionalLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,V=e.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=C.shadow.matrix,b++}i.directional[p]=X,p++}else if(C.isSpotLight){const X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(N).multiplyScalar(z),X.distance=Y,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,i.spot[x]=X;const Q=C.shadow;if(C.map&&(i.spotLightMap[L]=C.map,L++,Q.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[x]=Q.matrix,C.castShadow){const V=e.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=q,_++}x++}else if(C.isRectAreaLight){const X=t.get(C);X.color.copy(N).multiplyScalar(z),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=X,m++}else if(C.isPointLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const Q=C.shadow,V=e.get(C);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=C.shadow.matrix,w++}i.point[g]=X,g++}else if(C.isHemisphereLight){const X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(z),X.groundColor.copy(C.groundColor).multiplyScalar(z),i.hemi[f]=X,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=rt.LTC_FLOAT_1,i.rectAreaLTC2=rt.LTC_FLOAT_2):(i.rectAreaLTC1=rt.LTC_HALF_1,i.rectAreaLTC2=rt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==b||P.numPointShadows!==w||P.numSpotShadows!==_||P.numSpotMaps!==L||P.numLightProbes!==A)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=_+L-T,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=p,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=b,P.numPointShadows=w,P.numSpotShadows=_,P.numSpotMaps=L,P.numLightProbes=A,i.version=Qp++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const w=c[f];if(w.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),u++}else if(w.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(w.matrixWorld),n.setFromMatrixPosition(w.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),_.halfWidth.set(w.width*.5,0,0),_.halfHeight.set(0,w.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(w.matrixWorld),_.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const _=i.hemi[x];_.direction.setFromMatrixPosition(w.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function nl(s){const t=new e0(s),e=[],i=[];function n(h){c.camera=h,e.length=0,i.length=0}function r(h){e.push(h)}function o(h){i.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function i0(s){let t=new WeakMap;function e(n,r=0){const o=t.get(n);let a;return o===void 0?(a=new nl(s),t.set(n,[a])):r>=o.length?(a=new nl(s),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class n0 extends nn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Qc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class s0 extends nn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const r0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o0=`uniform sampler2D shadow_pass;
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
}`;function a0(s,t,e){let i=new Yo;const n=new Et,r=new Et,o=new se,a=new n0({depthPacking:th}),l=new s0,c={},h=e.maxTextureSize,u={[zi]:Ce,[Ce]:zi,[oi]:oi},d=new Ae({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Et},radius:{value:4}},vertexShader:r0,fragmentShader:o0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Re;g.setAttribute("position",new Xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new O(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Il;let f=this.type;this.render=function(T,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=s.getRenderTarget(),y=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Mi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=f!==xi&&this.type===xi,Y=f===xi&&this.type!==xi;for(let q=0,X=T.length;q<X;q++){const Q=T[q],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const ot=V.getFrameExtents();if(n.multiply(ot),r.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/ot.x),n.x=r.x*ot.x,V.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/ot.y),n.y=r.y*ot.y,V.mapSize.y=r.y)),V.map===null||z===!0||Y===!0){const St=this.type!==xi?{minFilter:ti,magFilter:ti}:{};V.map!==null&&V.map.dispose(),V.map=new ei(n.x,n.y,St),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const ft=V.getViewportCount();for(let St=0;St<ft;St++){const kt=V.getViewport(St);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),N.viewport(o),V.updateMatrices(Q,St),i=V.getFrustum(),_(A,P,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===xi&&b(V,P),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(S,y,C)};function b(T,A){const P=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ei(n.x,n.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,P,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,P,p,x,null)}function w(T,A,P,S){let y=null;const C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)y=C;else if(y=P.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const N=y.uuid,z=A.uuid;let Y=c[N];Y===void 0&&(Y={},c[N]=Y);let q=Y[z];q===void 0&&(q=y.clone(),Y[z]=q,A.addEventListener("dispose",L)),y=q}if(y.visible=A.visible,y.wireframe=A.wireframe,S===xi?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:u[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const N=s.properties.get(y);N.light=P}return y}function _(T,A,P,S,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===xi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const z=t.update(T),Y=T.material;if(Array.isArray(Y)){const q=z.groups;for(let X=0,Q=q.length;X<Q;X++){const V=q[X],ot=Y[V.materialIndex];if(ot&&ot.visible){const ft=w(T,ot,S,y);T.onBeforeShadow(s,T,A,P,z,ft,V),s.renderBufferDirect(P,null,z,ft,T,V),T.onAfterShadow(s,T,A,P,z,ft,V)}}}else if(Y.visible){const q=w(T,Y,S,y);T.onBeforeShadow(s,T,A,P,z,q,null),s.renderBufferDirect(P,null,z,q,T,null),T.onAfterShadow(s,T,A,P,z,q,null)}}const N=T.children;for(let z=0,Y=N.length;z<Y;z++)_(N[z],A,P,S,y)}function L(T){T.target.removeEventListener("dispose",L);for(const P in c){const S=c[P],y=T.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}const l0={[Yr]:qr,[jr]:Kr,[$r]:Zr,[Pn]:Jr,[qr]:Yr,[Kr]:jr,[Zr]:$r,[Jr]:Pn};function c0(s,t){function e(){let I=!1;const lt=new se;let W=null;const K=new se(0,0,0,0);return{setMask:function(ut){W!==ut&&!I&&(s.colorMask(ut,ut,ut,ut),W=ut)},setLocked:function(ut){I=ut},setClear:function(ut,ht,Ut,pe,we){we===!0&&(ut*=pe,ht*=pe,Ut*=pe),lt.set(ut,ht,Ut,pe),K.equals(lt)===!1&&(s.clearColor(ut,ht,Ut,pe),K.copy(lt))},reset:function(){I=!1,W=null,K.set(-1,0,0,0)}}}function i(){let I=!1,lt=!1,W=null,K=null,ut=null;return{setReversed:function(ht){if(lt!==ht){const Ut=t.get("EXT_clip_control");lt?Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.ZERO_TO_ONE_EXT):Ut.clipControlEXT(Ut.LOWER_LEFT_EXT,Ut.NEGATIVE_ONE_TO_ONE_EXT);const pe=ut;ut=null,this.setClear(pe)}lt=ht},getReversed:function(){return lt},setTest:function(ht){ht?at(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(ht){W!==ht&&!I&&(s.depthMask(ht),W=ht)},setFunc:function(ht){if(lt&&(ht=l0[ht]),K!==ht){switch(ht){case Yr:s.depthFunc(s.NEVER);break;case qr:s.depthFunc(s.ALWAYS);break;case jr:s.depthFunc(s.LESS);break;case Pn:s.depthFunc(s.LEQUAL);break;case $r:s.depthFunc(s.EQUAL);break;case Jr:s.depthFunc(s.GEQUAL);break;case Kr:s.depthFunc(s.GREATER);break;case Zr:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=ht}},setLocked:function(ht){I=ht},setClear:function(ht){ut!==ht&&(lt&&(ht=1-ht),s.clearDepth(ht),ut=ht)},reset:function(){I=!1,W=null,K=null,ut=null,lt=!1}}}function n(){let I=!1,lt=null,W=null,K=null,ut=null,ht=null,Ut=null,pe=null,we=null;return{setTest:function(ee){I||(ee?at(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(ee){lt!==ee&&!I&&(s.stencilMask(ee),lt=ee)},setFunc:function(ee,Ye,hi){(W!==ee||K!==Ye||ut!==hi)&&(s.stencilFunc(ee,Ye,hi),W=ee,K=Ye,ut=hi)},setOp:function(ee,Ye,hi){(ht!==ee||Ut!==Ye||pe!==hi)&&(s.stencilOp(ee,Ye,hi),ht=ee,Ut=Ye,pe=hi)},setLocked:function(ee){I=ee},setClear:function(ee){we!==ee&&(s.clearStencil(ee),we=ee)},reset:function(){I=!1,lt=null,W=null,K=null,ut=null,ht=null,Ut=null,pe=null,we=null}}}const r=new e,o=new i,a=new n,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,b=null,w=null,_=null,L=null,T=null,A=new xt(0,0,0),P=0,S=!1,y=null,C=null,N=null,z=null,Y=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=Q>=2);let ot=null,ft={};const St=s.getParameter(s.SCISSOR_BOX),kt=s.getParameter(s.VIEWPORT),te=new se().fromArray(St),j=new se().fromArray(kt);function nt(I,lt,W,K){const ut=new Uint8Array(4),ht=s.createTexture();s.bindTexture(I,ht),s.texParameteri(I,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(I,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ut=0;Ut<W;Ut++)I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(lt+Ut,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return ht}const vt={};vt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),vt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),vt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(s.DEPTH_TEST),o.setFunc(Pn),Bt(!1),Gt(ca),at(s.CULL_FACE),R(Mi);function at(I){h[I]!==!0&&(s.enable(I),h[I]=!0)}function Ct(I){h[I]!==!1&&(s.disable(I),h[I]=!1)}function Lt(I,lt){return u[I]!==lt?(s.bindFramebuffer(I,lt),u[I]=lt,I===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=lt),I===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function Wt(I,lt){let W=p,K=!1;if(I){W=d.get(lt),W===void 0&&(W=[],d.set(lt,W));const ut=I.textures;if(W.length!==ut.length||W[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,Ut=ut.length;ht<Ut;ht++)W[ht]=s.COLOR_ATTACHMENT0+ht;W.length=ut.length,K=!0}}else W[0]!==s.BACK&&(W[0]=s.BACK,K=!0);K&&s.drawBuffers(W)}function ae(I){return g!==I?(s.useProgram(I),g=I,!0):!1}const Xt={[$i]:s.FUNC_ADD,[Lc]:s.FUNC_SUBTRACT,[Ic]:s.FUNC_REVERSE_SUBTRACT};Xt[Fc]=s.MIN,Xt[Bc]=s.MAX;const Ft={[Uc]:s.ZERO,[Nc]:s.ONE,[Oc]:s.SRC_COLOR,[Wr]:s.SRC_ALPHA,[Wc]:s.SRC_ALPHA_SATURATE,[Hc]:s.DST_COLOR,[kc]:s.DST_ALPHA,[zc]:s.ONE_MINUS_SRC_COLOR,[Xr]:s.ONE_MINUS_SRC_ALPHA,[Vc]:s.ONE_MINUS_DST_COLOR,[Gc]:s.ONE_MINUS_DST_ALPHA,[Xc]:s.CONSTANT_COLOR,[Yc]:s.ONE_MINUS_CONSTANT_COLOR,[qc]:s.CONSTANT_ALPHA,[jc]:s.ONE_MINUS_CONSTANT_ALPHA};function R(I,lt,W,K,ut,ht,Ut,pe,we,ee){if(I===Mi){x===!0&&(Ct(s.BLEND),x=!1);return}if(x===!1&&(at(s.BLEND),x=!0),I!==Dc){if(I!==m||ee!==S){if((f!==$i||_!==$i)&&(s.blendEquation(s.FUNC_ADD),f=$i,_=$i),ee)switch(I){case An:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vr:s.blendFunc(s.ONE,s.ONE);break;case ha:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case da:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case An:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Vr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ha:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case da:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,w=null,L=null,T=null,A.set(0,0,0),P=0,m=I,S=ee}return}ut=ut||lt,ht=ht||W,Ut=Ut||K,(lt!==f||ut!==_)&&(s.blendEquationSeparate(Xt[lt],Xt[ut]),f=lt,_=ut),(W!==b||K!==w||ht!==L||Ut!==T)&&(s.blendFuncSeparate(Ft[W],Ft[K],Ft[ht],Ft[Ut]),b=W,w=K,L=ht,T=Ut),(pe.equals(A)===!1||we!==P)&&(s.blendColor(pe.r,pe.g,pe.b,we),A.copy(pe),P=we),m=I,S=!1}function ge(I,lt){I.side===oi?Ct(s.CULL_FACE):at(s.CULL_FACE);let W=I.side===Ce;lt&&(W=!W),Bt(W),I.blending===An&&I.transparent===!1?R(Mi):R(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const K=I.stencilWrite;a.setTest(K),K&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Jt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(I){y!==I&&(I?s.frontFace(s.CW):s.frontFace(s.CCW),y=I)}function Gt(I){I!==Rc?(at(s.CULL_FACE),I!==C&&(I===ca?s.cullFace(s.BACK):I===Pc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),C=I}function At(I){I!==N&&(X&&s.lineWidth(I),N=I)}function Jt(I,lt,W){I?(at(s.POLYGON_OFFSET_FILL),(z!==lt||Y!==W)&&(s.polygonOffset(lt,W),z=lt,Y=W)):Ct(s.POLYGON_OFFSET_FILL)}function Tt(I){I?at(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function E(I){I===void 0&&(I=s.TEXTURE0+q-1),ot!==I&&(s.activeTexture(I),ot=I)}function v(I,lt,W){W===void 0&&(ot===null?W=s.TEXTURE0+q-1:W=ot);let K=ft[W];K===void 0&&(K={type:void 0,texture:void 0},ft[W]=K),(K.type!==I||K.texture!==lt)&&(ot!==W&&(s.activeTexture(W),ot=W),s.bindTexture(I,lt||vt[I]),K.type=I,K.texture=lt)}function k(){const I=ft[ot];I!==void 0&&I.type!==void 0&&(s.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{s.compressedTexImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{s.texSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function jt(){try{s.texStorage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{s.texStorage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{s.texImage2D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{s.texImage3D.apply(s,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(I){te.equals(I)===!1&&(s.scissor(I.x,I.y,I.z,I.w),te.copy(I))}function gt(I){j.equals(I)===!1&&(s.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function Yt(I,lt){let W=c.get(lt);W===void 0&&(W=new WeakMap,c.set(lt,W));let K=W.get(I);K===void 0&&(K=s.getUniformBlockIndex(lt,I.name),W.set(I,K))}function Ht(I,lt){const K=c.get(lt).get(I);l.get(lt)!==K&&(s.uniformBlockBinding(lt,K,I.__bindingPointIndex),l.set(lt,K))}function re(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},ot=null,ft={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,b=null,w=null,_=null,L=null,T=null,A=new xt(0,0,0),P=0,S=!1,y=null,C=null,N=null,z=null,Y=null,te.set(0,0,s.canvas.width,s.canvas.height),j.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:Ct,bindFramebuffer:Lt,drawBuffers:Wt,useProgram:ae,setBlending:R,setMaterial:ge,setFlipSided:Bt,setCullFace:Gt,setLineWidth:At,setPolygonOffset:Jt,setScissorTest:Tt,activeTexture:E,bindTexture:v,unbindTexture:k,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:mt,texImage3D:Rt,updateUBOMapping:Yt,uniformBlockBinding:Ht,texStorage2D:jt,texStorage3D:it,texSubImage2D:$,texSubImage3D:bt,compressedTexSubImage2D:ct,compressedTexSubImage3D:pt,scissor:Dt,viewport:gt,reset:re}}function sl(s,t,e,i){const n=h0(i);switch(e){case Wl:return s*t;case Yl:return s*t;case ql:return s*t*2;case jl:return s*t/n.components*n.byteLength;case Vo:return s*t/n.components*n.byteLength;case $l:return s*t*2/n.components*n.byteLength;case Wo:return s*t*2/n.components*n.byteLength;case Xl:return s*t*3/n.components*n.byteLength;case Qe:return s*t*4/n.components*n.byteLength;case Xo:return s*t*4/n.components*n.byteLength;case ks:case Gs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hs:case Vs:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case so:case oo:return Math.max(s,16)*Math.max(t,8)/4;case no:case ro:return Math.max(s,8)*Math.max(t,8)/2;case ao:case lo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case fo:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case po:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case mo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case go:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case xo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case vo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case _o:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case yo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case bo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case wo:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Ws:case Eo:case To:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Jl:case Ao:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Co:case Ro:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function h0(s){switch(s){case wi:case Gl:return{byteLength:1,components:1};case ss:case Hl:case Si:return{byteLength:2,components:1};case Go:case Ho:return{byteLength:2,components:4};case en:case ko:case _i:return{byteLength:4,components:1};case Vl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function d0(s,t,e,i,n,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Et,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,v){return p?new OffscreenCanvas(E,v):js("canvas")}function x(E,v,k){let J=1;const tt=Tt(E);if((tt.width>k||tt.height>k)&&(J=k/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const $=Math.floor(J*tt.width),bt=Math.floor(J*tt.height);u===void 0&&(u=g($,bt));const ct=v?g($,bt):u;return ct.width=$,ct.height=bt,ct.getContext("2d").drawImage(E,0,0,$,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+$+"x"+bt+")."),ct}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){s.generateMipmap(E)}function b(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(E,v,k,J,tt=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=v;if(v===s.RED&&(k===s.FLOAT&&($=s.R32F),k===s.HALF_FLOAT&&($=s.R16F),k===s.UNSIGNED_BYTE&&($=s.R8)),v===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.R8UI),k===s.UNSIGNED_SHORT&&($=s.R16UI),k===s.UNSIGNED_INT&&($=s.R32UI),k===s.BYTE&&($=s.R8I),k===s.SHORT&&($=s.R16I),k===s.INT&&($=s.R32I)),v===s.RG&&(k===s.FLOAT&&($=s.RG32F),k===s.HALF_FLOAT&&($=s.RG16F),k===s.UNSIGNED_BYTE&&($=s.RG8)),v===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RG8UI),k===s.UNSIGNED_SHORT&&($=s.RG16UI),k===s.UNSIGNED_INT&&($=s.RG32UI),k===s.BYTE&&($=s.RG8I),k===s.SHORT&&($=s.RG16I),k===s.INT&&($=s.RG32I)),v===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGB8UI),k===s.UNSIGNED_SHORT&&($=s.RGB16UI),k===s.UNSIGNED_INT&&($=s.RGB32UI),k===s.BYTE&&($=s.RGB8I),k===s.SHORT&&($=s.RGB16I),k===s.INT&&($=s.RGB32I)),v===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGBA8UI),k===s.UNSIGNED_SHORT&&($=s.RGBA16UI),k===s.UNSIGNED_INT&&($=s.RGBA32UI),k===s.BYTE&&($=s.RGBA8I),k===s.SHORT&&($=s.RGBA16I),k===s.INT&&($=s.RGBA32I)),v===s.RGB&&k===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),v===s.RGBA){const bt=tt?er:qt.getTransfer(J);k===s.FLOAT&&($=s.RGBA32F),k===s.HALF_FLOAT&&($=s.RGBA16F),k===s.UNSIGNED_BYTE&&($=bt===ie?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function _(E,v){let k;return E?v===null||v===en||v===In?k=s.DEPTH24_STENCIL8:v===_i?k=s.DEPTH32F_STENCIL8:v===ss&&(k=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===en||v===In?k=s.DEPTH_COMPONENT24:v===_i?k=s.DEPTH_COMPONENT32F:v===ss&&(k=s.DEPTH_COMPONENT16),k}function L(E,v){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==ti&&E.minFilter!==li?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function T(E){const v=E.target;v.removeEventListener("dispose",T),P(v),v.isVideoTexture&&h.delete(v)}function A(E){const v=E.target;v.removeEventListener("dispose",A),y(v)}function P(E){const v=i.get(E);if(v.__webglInit===void 0)return;const k=E.source,J=d.get(k);if(J){const tt=J[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&S(E),Object.keys(J).length===0&&d.delete(k)}i.remove(E)}function S(E){const v=i.get(E);s.deleteTexture(v.__webglTexture);const k=E.source,J=d.get(k);delete J[v.__cacheKey],o.memory.textures--}function y(E){const v=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(v.__webglFramebuffer[J]))for(let tt=0;tt<v.__webglFramebuffer[J].length;tt++)s.deleteFramebuffer(v.__webglFramebuffer[J][tt]);else s.deleteFramebuffer(v.__webglFramebuffer[J]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[J])}else{if(Array.isArray(v.__webglFramebuffer))for(let J=0;J<v.__webglFramebuffer.length;J++)s.deleteFramebuffer(v.__webglFramebuffer[J]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let J=0;J<v.__webglColorRenderbuffer.length;J++)v.__webglColorRenderbuffer[J]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[J]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const k=E.textures;for(let J=0,tt=k.length;J<tt;J++){const $=i.get(k[J]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(k[J])}i.remove(E)}let C=0;function N(){C=0}function z(){const E=C;return E>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+n.maxTextures),C+=1,E}function Y(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function q(E,v){const k=i.get(E);if(E.isVideoTexture&&At(E),E.isRenderTargetTexture===!1&&E.version>0&&k.__version!==E.version){const J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(k,E,v);return}}e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+v)}function X(E,v){const k=i.get(E);if(E.version>0&&k.__version!==E.version){j(k,E,v);return}e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+v)}function Q(E,v){const k=i.get(E);if(E.version>0&&k.__version!==E.version){j(k,E,v);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+v)}function V(E,v){const k=i.get(E);if(E.version>0&&k.__version!==E.version){nt(k,E,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+v)}const ot={[eo]:s.REPEAT,[Zi]:s.CLAMP_TO_EDGE,[io]:s.MIRRORED_REPEAT},ft={[ti]:s.NEAREST,[Zc]:s.NEAREST_MIPMAP_NEAREST,[us]:s.NEAREST_MIPMAP_LINEAR,[li]:s.LINEAR,[ar]:s.LINEAR_MIPMAP_NEAREST,[Qi]:s.LINEAR_MIPMAP_LINEAR},St={[ih]:s.NEVER,[lh]:s.ALWAYS,[nh]:s.LESS,[Zl]:s.LEQUAL,[sh]:s.EQUAL,[ah]:s.GEQUAL,[rh]:s.GREATER,[oh]:s.NOTEQUAL};function kt(E,v){if(v.type===_i&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===li||v.magFilter===ar||v.magFilter===us||v.magFilter===Qi||v.minFilter===li||v.minFilter===ar||v.minFilter===us||v.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,ot[v.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,ot[v.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,ot[v.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,ft[v.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,ft[v.minFilter]),v.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,St[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===ti||v.minFilter!==us&&v.minFilter!==Qi||v.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,n.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function te(E,v){let k=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",T));const J=v.source;let tt=d.get(J);tt===void 0&&(tt={},d.set(J,tt));const $=Y(v);if($!==E.__cacheKey){tt[$]===void 0&&(tt[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,k=!0),tt[$].usedTimes++;const bt=tt[E.__cacheKey];bt!==void 0&&(tt[E.__cacheKey].usedTimes--,bt.usedTimes===0&&S(v)),E.__cacheKey=$,E.__webglTexture=tt[$].texture}return k}function j(E,v,k){let J=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(J=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(J=s.TEXTURE_3D);const tt=te(E,v),$=v.source;e.bindTexture(J,E.__webglTexture,s.TEXTURE0+k);const bt=i.get($);if($.version!==bt.__version||tt===!0){e.activeTexture(s.TEXTURE0+k);const ct=qt.getPrimaries(qt.workingColorSpace),pt=v.colorSpace===Bi?null:qt.getPrimaries(v.colorSpace),jt=v.colorSpace===Bi||ct===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let it=x(v.image,!1,n.maxTextureSize);it=Jt(v,it);const mt=r.convert(v.format,v.colorSpace),Rt=r.convert(v.type);let Dt=w(v.internalFormat,mt,Rt,v.colorSpace,v.isVideoTexture);kt(J,v);let gt;const Yt=v.mipmaps,Ht=v.isVideoTexture!==!0,re=bt.__version===void 0||tt===!0,I=$.dataReady,lt=L(v,it);if(v.isDepthTexture)Dt=_(v.format===Fn,v.type),re&&(Ht?e.texStorage2D(s.TEXTURE_2D,1,Dt,it.width,it.height):e.texImage2D(s.TEXTURE_2D,0,Dt,it.width,it.height,0,mt,Rt,null));else if(v.isDataTexture)if(Yt.length>0){Ht&&re&&e.texStorage2D(s.TEXTURE_2D,lt,Dt,Yt[0].width,Yt[0].height);for(let W=0,K=Yt.length;W<K;W++)gt=Yt[W],Ht?I&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(s.TEXTURE_2D,W,Dt,gt.width,gt.height,0,mt,Rt,gt.data);v.generateMipmaps=!1}else Ht?(re&&e.texStorage2D(s.TEXTURE_2D,lt,Dt,it.width,it.height),I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,it.width,it.height,mt,Rt,it.data)):e.texImage2D(s.TEXTURE_2D,0,Dt,it.width,it.height,0,mt,Rt,it.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ht&&re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Dt,Yt[0].width,Yt[0].height,it.depth);for(let W=0,K=Yt.length;W<K;W++)if(gt=Yt[W],v.format!==Qe)if(mt!==null)if(Ht){if(I)if(v.layerUpdates.size>0){const ut=sl(gt.width,gt.height,v.format,v.type);for(const ht of v.layerUpdates){const Ut=gt.data.subarray(ht*ut/gt.data.BYTES_PER_ELEMENT,(ht+1)*ut/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,ht,gt.width,gt.height,1,mt,Ut)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,it.depth,mt,gt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,W,Dt,gt.width,gt.height,it.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?I&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,W,0,0,0,gt.width,gt.height,it.depth,mt,Rt,gt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,W,Dt,gt.width,gt.height,it.depth,0,mt,Rt,gt.data)}else{Ht&&re&&e.texStorage2D(s.TEXTURE_2D,lt,Dt,Yt[0].width,Yt[0].height);for(let W=0,K=Yt.length;W<K;W++)gt=Yt[W],v.format!==Qe?mt!==null?Ht?I&&e.compressedTexSubImage2D(s.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(s.TEXTURE_2D,W,Dt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?I&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,gt.width,gt.height,mt,Rt,gt.data):e.texImage2D(s.TEXTURE_2D,W,Dt,gt.width,gt.height,0,mt,Rt,gt.data)}else if(v.isDataArrayTexture)if(Ht){if(re&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Dt,it.width,it.height,it.depth),I)if(v.layerUpdates.size>0){const W=sl(it.width,it.height,v.format,v.type);for(const K of v.layerUpdates){const ut=it.data.subarray(K*W/it.data.BYTES_PER_ELEMENT,(K+1)*W/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,mt,Rt,ut)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,mt,Rt,it.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,it.width,it.height,it.depth,0,mt,Rt,it.data);else if(v.isData3DTexture)Ht?(re&&e.texStorage3D(s.TEXTURE_3D,lt,Dt,it.width,it.height,it.depth),I&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,mt,Rt,it.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,it.width,it.height,it.depth,0,mt,Rt,it.data);else if(v.isFramebufferTexture){if(re)if(Ht)e.texStorage2D(s.TEXTURE_2D,lt,Dt,it.width,it.height);else{let W=it.width,K=it.height;for(let ut=0;ut<lt;ut++)e.texImage2D(s.TEXTURE_2D,ut,Dt,W,K,0,mt,Rt,null),W>>=1,K>>=1}}else if(Yt.length>0){if(Ht&&re){const W=Tt(Yt[0]);e.texStorage2D(s.TEXTURE_2D,lt,Dt,W.width,W.height)}for(let W=0,K=Yt.length;W<K;W++)gt=Yt[W],Ht?I&&e.texSubImage2D(s.TEXTURE_2D,W,0,0,mt,Rt,gt):e.texImage2D(s.TEXTURE_2D,W,Dt,mt,Rt,gt);v.generateMipmaps=!1}else if(Ht){if(re){const W=Tt(it);e.texStorage2D(s.TEXTURE_2D,lt,Dt,W.width,W.height)}I&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,mt,Rt,it)}else e.texImage2D(s.TEXTURE_2D,0,Dt,mt,Rt,it);m(v)&&f(J),bt.__version=$.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function nt(E,v,k){if(v.image.length!==6)return;const J=te(E,v),tt=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+k);const $=i.get(tt);if(tt.version!==$.__version||J===!0){e.activeTexture(s.TEXTURE0+k);const bt=qt.getPrimaries(qt.workingColorSpace),ct=v.colorSpace===Bi?null:qt.getPrimaries(v.colorSpace),pt=v.colorSpace===Bi||bt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);const jt=v.isCompressedTexture||v.image[0].isCompressedTexture,it=v.image[0]&&v.image[0].isDataTexture,mt=[];for(let K=0;K<6;K++)!jt&&!it?mt[K]=x(v.image[K],!0,n.maxCubemapSize):mt[K]=it?v.image[K].image:v.image[K],mt[K]=Jt(v,mt[K]);const Rt=mt[0],Dt=r.convert(v.format,v.colorSpace),gt=r.convert(v.type),Yt=w(v.internalFormat,Dt,gt,v.colorSpace),Ht=v.isVideoTexture!==!0,re=$.__version===void 0||J===!0,I=tt.dataReady;let lt=L(v,Rt);kt(s.TEXTURE_CUBE_MAP,v);let W;if(jt){Ht&&re&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Yt,Rt.width,Rt.height);for(let K=0;K<6;K++){W=mt[K].mipmaps;for(let ut=0;ut<W.length;ut++){const ht=W[ut];v.format!==Qe?Dt!==null?Ht?I&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ht.width,ht.height,Dt,ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Yt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,0,0,ht.width,ht.height,Dt,gt,ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut,Yt,ht.width,ht.height,0,Dt,gt,ht.data)}}}else{if(W=v.mipmaps,Ht&&re){W.length>0&&lt++;const K=Tt(mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Yt,K.width,K.height)}for(let K=0;K<6;K++)if(it){Ht?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,mt[K].width,mt[K].height,Dt,gt,mt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,mt[K].width,mt[K].height,0,Dt,gt,mt[K].data);for(let ut=0;ut<W.length;ut++){const Ut=W[ut].image[K].image;Ht?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Ut.width,Ut.height,Dt,gt,Ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Yt,Ut.width,Ut.height,0,Dt,gt,Ut.data)}}else{Ht?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Dt,gt,mt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,Dt,gt,mt[K]);for(let ut=0;ut<W.length;ut++){const ht=W[ut];Ht?I&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,0,0,Dt,gt,ht.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,ut+1,Yt,Dt,gt,ht.image[K])}}}m(v)&&f(s.TEXTURE_CUBE_MAP),$.__version=tt.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function vt(E,v,k,J,tt,$){const bt=r.convert(k.format,k.colorSpace),ct=r.convert(k.type),pt=w(k.internalFormat,bt,ct,k.colorSpace),jt=i.get(v),it=i.get(k);if(it.__renderTarget=v,!jt.__hasExternalTextures){const mt=Math.max(1,v.width>>$),Rt=Math.max(1,v.height>>$);tt===s.TEXTURE_3D||tt===s.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,pt,mt,Rt,v.depth,0,bt,ct,null):e.texImage2D(tt,$,pt,mt,Rt,0,bt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),Gt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,J,tt,it.__webglTexture,0,Bt(v)):(tt===s.TEXTURE_2D||tt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,J,tt,it.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function at(E,v,k){if(s.bindRenderbuffer(s.RENDERBUFFER,E),v.depthBuffer){const J=v.depthTexture,tt=J&&J.isDepthTexture?J.type:null,$=_(v.stencilBuffer,tt),bt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=Bt(v);Gt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,$,v.width,v.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,$,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,$,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,bt,s.RENDERBUFFER,E)}else{const J=v.textures;for(let tt=0;tt<J.length;tt++){const $=J[tt],bt=r.convert($.format,$.colorSpace),ct=r.convert($.type),pt=w($.internalFormat,bt,ct,$.colorSpace),jt=Bt(v);k&&Gt(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,pt,v.width,v.height):Gt(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,pt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,pt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(E,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(v.depthTexture);J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q(v.depthTexture,0);const tt=J.__webglTexture,$=Bt(v);if(v.depthTexture.format===Cn)Gt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,tt,0);else if(v.depthTexture.format===Fn)Gt(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Lt(E){const v=i.get(E),k=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const J=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),J){const tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=J}if(E.depthTexture&&!v.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Ct(v.__webglFramebuffer,E)}else if(k){v.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[J]),v.__webglDepthbuffer[J]===void 0)v.__webglDepthbuffer[J]=s.createRenderbuffer(),at(v.__webglDepthbuffer[J],E,!1);else{const tt=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=v.__webglDepthbuffer[J];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),at(v.__webglDepthbuffer,E,!1);else{const J=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,J,s.RENDERBUFFER,tt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(E,v,k){const J=i.get(E);v!==void 0&&vt(J.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Lt(E)}function ae(E){const v=E.texture,k=i.get(E),J=i.get(v);E.addEventListener("dispose",A);const tt=E.textures,$=E.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(J.__webglTexture===void 0&&(J.__webglTexture=s.createTexture()),J.__version=v.version,o.memory.textures++),$){k.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer[ct]=[];for(let pt=0;pt<v.mipmaps.length;pt++)k.__webglFramebuffer[ct][pt]=s.createFramebuffer()}else k.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){k.__webglFramebuffer=[];for(let ct=0;ct<v.mipmaps.length;ct++)k.__webglFramebuffer[ct]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(bt)for(let ct=0,pt=tt.length;ct<pt;ct++){const jt=i.get(tt[ct]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&Gt(E)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ct=0;ct<tt.length;ct++){const pt=tt[ct];k.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[ct]);const jt=r.convert(pt.format,pt.colorSpace),it=r.convert(pt.type),mt=w(pt.internalFormat,jt,it,pt.colorSpace,E.isXRRenderTarget===!0),Rt=Bt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,mt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,k.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),at(k.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture),kt(s.TEXTURE_CUBE_MAP,v);for(let ct=0;ct<6;ct++)if(v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)vt(k.__webglFramebuffer[ct][pt],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,pt);else vt(k.__webglFramebuffer[ct],E,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(v)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ct=0,pt=tt.length;ct<pt;ct++){const jt=tt[ct],it=i.get(jt);e.bindTexture(s.TEXTURE_2D,it.__webglTexture),kt(s.TEXTURE_2D,jt),vt(k.__webglFramebuffer,E,jt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),m(jt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,J.__webglTexture),kt(ct,v),v.mipmaps&&v.mipmaps.length>0)for(let pt=0;pt<v.mipmaps.length;pt++)vt(k.__webglFramebuffer[pt],E,v,s.COLOR_ATTACHMENT0,ct,pt);else vt(k.__webglFramebuffer,E,v,s.COLOR_ATTACHMENT0,ct,0);m(v)&&f(ct),e.unbindTexture()}E.depthBuffer&&Lt(E)}function Xt(E){const v=E.textures;for(let k=0,J=v.length;k<J;k++){const tt=v[k];if(m(tt)){const $=b(E),bt=i.get(tt).__webglTexture;e.bindTexture($,bt),f($),e.unbindTexture()}}}const Ft=[],R=[];function ge(E){if(E.samples>0){if(Gt(E)===!1){const v=E.textures,k=E.width,J=E.height;let tt=s.COLOR_BUFFER_BIT;const $=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=i.get(E),ct=v.length>1;if(ct)for(let pt=0;pt<v.length;pt++)e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let pt=0;pt<v.length;pt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(tt|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(tt|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,bt.__webglColorRenderbuffer[pt]);const jt=i.get(v[pt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,jt,0)}s.blitFramebuffer(0,0,k,J,0,0,k,J,tt,s.NEAREST),l===!0&&(Ft.length=0,R.length=0,Ft.push(s.COLOR_ATTACHMENT0+pt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ft.push($),R.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,R)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let pt=0;pt<v.length;pt++){e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,bt.__webglColorRenderbuffer[pt]);const jt=i.get(v[pt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,bt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const v=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function Bt(E){return Math.min(n.maxSamples,E.samples)}function Gt(E){const v=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function At(E){const v=o.render.frame;h.get(E)!==v&&(h.set(E,v),E.update())}function Jt(E,v){const k=E.colorSpace,J=E.format,tt=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||k!==Nn&&k!==Bi&&(qt.getTransfer(k)===ie?(J!==Qe||tt!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),v}function Tt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Wt,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Gt}function u0(s,t){function e(i,n=Bi){let r;const o=qt.getTransfer(n);if(i===wi)return s.UNSIGNED_BYTE;if(i===Go)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Ho)return s.UNSIGNED_SHORT_5_5_5_1;if(i===Vl)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===Gl)return s.BYTE;if(i===Hl)return s.SHORT;if(i===ss)return s.UNSIGNED_SHORT;if(i===ko)return s.INT;if(i===en)return s.UNSIGNED_INT;if(i===_i)return s.FLOAT;if(i===Si)return s.HALF_FLOAT;if(i===Wl)return s.ALPHA;if(i===Xl)return s.RGB;if(i===Qe)return s.RGBA;if(i===Yl)return s.LUMINANCE;if(i===ql)return s.LUMINANCE_ALPHA;if(i===Cn)return s.DEPTH_COMPONENT;if(i===Fn)return s.DEPTH_STENCIL;if(i===jl)return s.RED;if(i===Vo)return s.RED_INTEGER;if(i===$l)return s.RG;if(i===Wo)return s.RG_INTEGER;if(i===Xo)return s.RGBA_INTEGER;if(i===ks||i===Gs||i===Hs||i===Vs)if(o===ie)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Gs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Hs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Gs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Hs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===no||i===so||i===ro||i===oo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===no)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===so)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ao||i===lo||i===co)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ao||i===lo)return o===ie?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===co)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ho||i===uo||i===fo||i===po||i===mo||i===go||i===xo||i===vo||i===_o||i===yo||i===Mo||i===So||i===bo||i===wo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ho)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===po)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===mo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===go)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===xo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_o)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===yo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===So)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wo)return o===ie?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ws||i===Eo||i===To)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ws)return o===ie?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Eo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===To)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jl||i===Ao||i===Co||i===Ro)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ws)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===In?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:e}}class f0 extends ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Pt extends ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p0={type:"move"};class Ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let n=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=e.getPose(t.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p0)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Pt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const m0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g0=`
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

}`;class x0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const n=new Le,r=t.properties.get(n);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ae({vertexShader:m0,fragmentShader:g0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new O(new fe(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v0 extends On{constructor(t,e){super();const i=this;let n=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const x=new x0,m=e.getContextAttributes();let f=null,b=null;const w=[],_=[],L=new Et;let T=null;const A=new ze;A.viewport=new se;const P=new ze;P.viewport=new se;const S=[A,P],y=new f0;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let nt=w[j];return nt===void 0&&(nt=new Ur,w[j]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(j){let nt=w[j];return nt===void 0&&(nt=new Ur,w[j]=nt),nt.getGripSpace()},this.getHand=function(j){let nt=w[j];return nt===void 0&&(nt=new Ur,w[j]=nt),nt.getHandSpace()};function z(j){const nt=_.indexOf(j.inputSource);if(nt===-1)return;const vt=w[nt];vt!==void 0&&(vt.update(j.inputSource,j.frame,c||o),vt.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",Y),n.removeEventListener("inputsourceschange",q);for(let j=0;j<w.length;j++){const nt=_[j];nt!==null&&(_[j]=null,w[j].disconnect(nt))}C=null,N=null,x.reset(),t.setRenderTarget(f),p=null,d=null,u=null,n=null,b=null,te.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(j){if(n=j,n!==null){if(f=t.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",Y),n.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),n.renderState.layers===void 0){const nt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(n,e,nt),n.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new ei(p.framebufferWidth,p.framebufferHeight,{format:Qe,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let nt=null,vt=null,at=null;m.depth&&(at=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=m.stencil?Fn:Cn,vt=m.stencil?In:en);const Ct={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};u=new XRWebGLBinding(n,e),d=u.createProjectionLayer(Ct),n.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new ei(d.textureWidth,d.textureHeight,{format:Qe,type:wi,depthTexture:new dc(d.textureWidth,d.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await n.requestReferenceSpace(a),te.setContext(n),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(j){for(let nt=0;nt<j.removed.length;nt++){const vt=j.removed[nt],at=_.indexOf(vt);at>=0&&(_[at]=null,w[at].disconnect(vt))}for(let nt=0;nt<j.added.length;nt++){const vt=j.added[nt];let at=_.indexOf(vt);if(at===-1){for(let Lt=0;Lt<w.length;Lt++)if(Lt>=_.length){_.push(vt),at=Lt;break}else if(_[Lt]===null){_[Lt]=vt,at=Lt;break}if(at===-1)break}const Ct=w[at];Ct&&Ct.connect(vt)}}const X=new D,Q=new D;function V(j,nt,vt){X.setFromMatrixPosition(nt.matrixWorld),Q.setFromMatrixPosition(vt.matrixWorld);const at=X.distanceTo(Q),Ct=nt.projectionMatrix.elements,Lt=vt.projectionMatrix.elements,Wt=Ct[14]/(Ct[10]-1),ae=Ct[14]/(Ct[10]+1),Xt=(Ct[9]+1)/Ct[5],Ft=(Ct[9]-1)/Ct[5],R=(Ct[8]-1)/Ct[0],ge=(Lt[8]+1)/Lt[0],Bt=Wt*R,Gt=Wt*ge,At=at/(-R+ge),Jt=At*-R;if(nt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Jt),j.translateZ(At),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ct[10]===-1)j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Tt=Wt+At,E=ae+At,v=Bt-Jt,k=Gt+(at-Jt),J=Xt*ae/E*Tt,tt=Ft*ae/E*Tt;j.projectionMatrix.makePerspective(v,k,J,tt,Tt,E),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ot(j,nt){nt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(nt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(n===null)return;let nt=j.near,vt=j.far;x.texture!==null&&(x.depthNear>0&&(nt=x.depthNear),x.depthFar>0&&(vt=x.depthFar)),y.near=P.near=A.near=nt,y.far=P.far=A.far=vt,(C!==y.near||N!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),C=y.near,N=y.far),A.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,y.layers.mask=A.layers.mask|P.layers.mask;const at=j.parent,Ct=y.cameras;ot(y,at);for(let Lt=0;Lt<Ct.length;Lt++)ot(Ct[Lt],at);Ct.length===2?V(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),ft(j,y,at)};function ft(j,nt,vt){vt===null?j.matrix.copy(nt.matrixWorld):(j.matrix.copy(vt.matrixWorld),j.matrix.invert(),j.matrix.multiply(nt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(nt.projectionMatrix),j.projectionMatrixInverse.copy(nt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Do*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let St=null;function kt(j,nt){if(h=nt.getViewerPose(c||o),g=nt,h!==null){const vt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let at=!1;vt.length!==y.cameras.length&&(y.cameras.length=0,at=!0);for(let Lt=0;Lt<vt.length;Lt++){const Wt=vt[Lt];let ae=null;if(p!==null)ae=p.getViewport(Wt);else{const Ft=u.getViewSubImage(d,Wt);ae=Ft.viewport,Lt===0&&(t.setRenderTargetTextures(b,Ft.colorTexture,d.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(b))}let Xt=S[Lt];Xt===void 0&&(Xt=new ze,Xt.layers.enable(Lt),Xt.viewport=new se,S[Lt]=Xt),Xt.matrix.fromArray(Wt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Wt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ae.x,ae.y,ae.width,ae.height),Lt===0&&(y.matrix.copy(Xt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),at===!0&&y.cameras.push(Xt)}const Ct=n.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Lt=u.getDepthInformation(vt[0]);Lt&&Lt.isValid&&Lt.texture&&x.init(t,Lt,n.renderState)}}for(let vt=0;vt<w.length;vt++){const at=_[vt],Ct=w[vt];at!==null&&Ct!==void 0&&Ct.update(at,nt,c||o)}St&&St(j,nt),nt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:nt}),g=null}const te=new hc;te.setAnimationLoop(kt),this.setAnimationLoop=function(j){St=j},this.dispose=function(){}}}const Yi=new ci,_0=new he;function y0(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,ac(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,b,w,_){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,b,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ce&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ce&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),w=b.envMap,_=b.envMapRotation;w&&(m.envMap.value=w,Yi.copy(_),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(_0.makeRotationFromEuler(Yi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,b,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ce&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function M0(s,t,e,i){let n={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,w){const _=w.program;i.uniformBlockBinding(b,_)}function c(b,w){let _=n[b.id];_===void 0&&(g(b),_=h(b),n[b.id]=_,b.addEventListener("dispose",m));const L=w.program;i.updateUBOMapping(b,L);const T=t.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function h(b){const w=u();b.__bindingPointIndex=w;const _=s.createBuffer(),L=b.__size,T=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,L,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,_),_}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const w=n[b.id],_=b.uniforms,L=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let T=0,A=_.length;T<A;T++){const P=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,y=P.length;S<y;S++){const C=P[S];if(p(C,T,S,L)===!0){const N=C.__offset,z=Array.isArray(C.value)?C.value:[C.value];let Y=0;for(let q=0;q<z.length;q++){const X=z[q],Q=x(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,s.bufferSubData(s.UNIFORM_BUFFER,N+Y,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,Y),Y+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(b,w,_,L){const T=b.value,A=w+"_"+_;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{const P=L[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return L[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(b){const w=b.uniforms;let _=0;const L=16;for(let A=0,P=w.length;A<P;A++){const S=Array.isArray(w[A])?w[A]:[w[A]];for(let y=0,C=S.length;y<C;y++){const N=S[y],z=Array.isArray(N.value)?N.value:[N.value];for(let Y=0,q=z.length;Y<q;Y++){const X=z[Y],Q=x(X),V=_%L,ot=V%Q.boundary,ft=V+ot;_+=ot,ft!==0&&L-ft<Q.storage&&(_+=L-ft),N.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=_,_+=Q.storage}}}const T=_%L;return T>0&&(_+=L-T),b.__size=_,b.__cache={},this}function x(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){const w=b.target;w.removeEventListener("dispose",m);const _=o.indexOf(w.__bindingPointIndex);o.splice(_,1),s.deleteBuffer(n[w.id]),delete n[w.id],delete r[w.id]}function f(){for(const b in n)s.deleteBuffer(n[b]);o=[],n={},r={}}return{bind:l,update:c,dispose:f}}class S0{constructor(t={}){const{canvas:e=hh(),context:i=null,depth:n=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,f=null;const b=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=He,this.toneMapping=Ni,this.toneMappingExposure=1;const _=this;let L=!1,T=0,A=0,P=null,S=-1,y=null;const C=new se,N=new se;let z=null;const Y=new xt(0);let q=0,X=e.width,Q=e.height,V=1,ot=null,ft=null;const St=new se(0,0,X,Q),kt=new se(0,0,X,Q);let te=!1;const j=new Yo;let nt=!1,vt=!1;const at=new he,Ct=new he,Lt=new D,Wt=new se,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function Ft(){return P===null?V:1}let R=i;function ge(M,B){return e.getContext(M,B)}try{const M={alpha:!0,depth:n,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${No}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",ht,!1),R===null){const B="webgl2";if(R=ge(B,M),R===null)throw ge(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Bt,Gt,At,Jt,Tt,E,v,k,J,tt,$,bt,ct,pt,jt,it,mt,Rt,Dt,gt,Yt,Ht,re,I;function lt(){Bt=new Af(R),Bt.init(),Ht=new u0(R,Bt),Gt=new Mf(R,Bt,t,Ht),At=new c0(R,Bt),Gt.reverseDepthBuffer&&d&&At.buffers.depth.setReversed(!0),Jt=new Pf(R),Tt=new jp,E=new d0(R,Bt,At,Tt,Gt,Ht,Jt),v=new bf(_),k=new Tf(_),J=new Uh(R),re=new _f(R,J),tt=new Cf(R,J,Jt,re),$=new Lf(R,tt,J,Jt),Dt=new Df(R,Gt,E),it=new Sf(Tt),bt=new qp(_,v,k,Bt,Gt,re,it),ct=new y0(_,Tt),pt=new Jp,jt=new i0(Bt),Rt=new vf(_,v,k,At,$,p,l),mt=new a0(_,$,Gt),I=new M0(R,Jt,Gt,At),gt=new yf(R,Bt,Jt),Yt=new Rf(R,Bt,Jt),Jt.programs=bt.programs,_.capabilities=Gt,_.extensions=Bt,_.properties=Tt,_.renderLists=pt,_.shadowMap=mt,_.state=At,_.info=Jt}lt();const W=new v0(_,R);this.xr=W,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const M=Bt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Bt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(X,Q,!1))},this.getSize=function(M){return M.set(X,Q)},this.setSize=function(M,B,G=!0){if(W.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=M,Q=B,e.width=Math.floor(M*V),e.height=Math.floor(B*V),G===!0&&(e.style.width=M+"px",e.style.height=B+"px"),this.setViewport(0,0,M,B)},this.getDrawingBufferSize=function(M){return M.set(X*V,Q*V).floor()},this.setDrawingBufferSize=function(M,B,G){X=M,Q=B,V=G,e.width=Math.floor(M*G),e.height=Math.floor(B*G),this.setViewport(0,0,M,B)},this.getCurrentViewport=function(M){return M.copy(C)},this.getViewport=function(M){return M.copy(St)},this.setViewport=function(M,B,G,H){M.isVector4?St.set(M.x,M.y,M.z,M.w):St.set(M,B,G,H),At.viewport(C.copy(St).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(kt)},this.setScissor=function(M,B,G,H){M.isVector4?kt.set(M.x,M.y,M.z,M.w):kt.set(M,B,G,H),At.scissor(N.copy(kt).multiplyScalar(V).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(M){At.setScissorTest(te=M)},this.setOpaqueSort=function(M){ot=M},this.setTransparentSort=function(M){ft=M},this.getClearColor=function(M){return M.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(M=!0,B=!0,G=!0){let H=0;if(M){let U=!1;if(P!==null){const st=P.texture.format;U=st===Xo||st===Wo||st===Vo}if(U){const st=P.texture.type,dt=st===wi||st===en||st===ss||st===In||st===Go||st===Ho,_t=Rt.getClearColor(),yt=Rt.getClearAlpha(),It=_t.r,Nt=_t.g,Mt=_t.b;dt?(g[0]=It,g[1]=Nt,g[2]=Mt,g[3]=yt,R.clearBufferuiv(R.COLOR,0,g)):(x[0]=It,x[1]=Nt,x[2]=Mt,x[3]=yt,R.clearBufferiv(R.COLOR,0,x))}else H|=R.COLOR_BUFFER_BIT}B&&(H|=R.DEPTH_BUFFER_BIT),G&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),pt.dispose(),jt.dispose(),Tt.dispose(),v.dispose(),k.dispose(),$.dispose(),re.dispose(),I.dispose(),bt.dispose(),W.dispose(),W.removeEventListener("sessionstart",ea),W.removeEventListener("sessionend",ia),ki.stop()};function K(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const M=Jt.autoReset,B=mt.enabled,G=mt.autoUpdate,H=mt.needsUpdate,U=mt.type;lt(),Jt.autoReset=M,mt.enabled=B,mt.autoUpdate=G,mt.needsUpdate=H,mt.type=U}function ht(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ut(M){const B=M.target;B.removeEventListener("dispose",Ut),pe(B)}function pe(M){we(M),Tt.remove(M)}function we(M){const B=Tt.get(M).programs;B!==void 0&&(B.forEach(function(G){bt.releaseProgram(G)}),M.isShaderMaterial&&bt.releaseShaderCache(M))}this.renderBufferDirect=function(M,B,G,H,U,st){B===null&&(B=ae);const dt=U.isMesh&&U.matrixWorld.determinant()<0,_t=wc(M,B,G,H,U);At.setMaterial(H,dt);let yt=G.index,It=1;if(H.wireframe===!0){if(yt=tt.getWireframeAttribute(G),yt===void 0)return;It=2}const Nt=G.drawRange,Mt=G.attributes.position;let $t=Nt.start*It,oe=(Nt.start+Nt.count)*It;st!==null&&($t=Math.max($t,st.start*It),oe=Math.min(oe,(st.start+st.count)*It)),yt!==null?($t=Math.max($t,0),oe=Math.min(oe,yt.count)):Mt!=null&&($t=Math.max($t,0),oe=Math.min(oe,Mt.count));const le=oe-$t;if(le<0||le===1/0)return;re.setup(U,H,_t,G,yt);let Ie,Kt=gt;if(yt!==null&&(Ie=J.get(yt),Kt=Yt,Kt.setIndex(Ie)),U.isMesh)H.wireframe===!0?(At.setLineWidth(H.wireframeLinewidth*Ft()),Kt.setMode(R.LINES)):Kt.setMode(R.TRIANGLES);else if(U.isLine){let wt=H.linewidth;wt===void 0&&(wt=1),At.setLineWidth(wt*Ft()),U.isLineSegments?Kt.setMode(R.LINES):U.isLineLoop?Kt.setMode(R.LINE_LOOP):Kt.setMode(R.LINE_STRIP)}else U.isPoints?Kt.setMode(R.POINTS):U.isSprite&&Kt.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Kt.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Bt.get("WEBGL_multi_draw"))Kt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const wt=U._multiDrawStarts,di=U._multiDrawCounts,Zt=U._multiDrawCount,qe=yt?J.get(yt).bytesPerElement:1,sn=Tt.get(H).currentProgram.getUniforms();for(let Be=0;Be<Zt;Be++)sn.setValue(R,"_gl_DrawID",Be),Kt.render(wt[Be]/qe,di[Be])}else if(U.isInstancedMesh)Kt.renderInstances($t,le,U.count);else if(G.isInstancedBufferGeometry){const wt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,di=Math.min(G.instanceCount,wt);Kt.renderInstances($t,le,di)}else Kt.render($t,le)};function ee(M,B,G){M.transparent===!0&&M.side===oi&&M.forceSinglePass===!1?(M.side=Ce,M.needsUpdate=!0,ds(M,B,G),M.side=zi,M.needsUpdate=!0,ds(M,B,G),M.side=oi):ds(M,B,G)}this.compile=function(M,B,G=null){G===null&&(G=M),f=jt.get(G),f.init(B),w.push(f),G.traverseVisible(function(U){U.isLight&&U.layers.test(B.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==G&&M.traverseVisible(function(U){U.isLight&&U.layers.test(B.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();const H=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const st=U.material;if(st)if(Array.isArray(st))for(let dt=0;dt<st.length;dt++){const _t=st[dt];ee(_t,G,U),H.add(_t)}else ee(st,G,U),H.add(st)}),w.pop(),f=null,H},this.compileAsync=function(M,B,G=null){const H=this.compile(M,B,G);return new Promise(U=>{function st(){if(H.forEach(function(dt){Tt.get(dt).currentProgram.isReady()&&H.delete(dt)}),H.size===0){U(M);return}setTimeout(st,10)}Bt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let Ye=null;function hi(M){Ye&&Ye(M)}function ea(){ki.stop()}function ia(){ki.start()}const ki=new hc;ki.setAnimationLoop(hi),typeof self<"u"&&ki.setContext(self),this.setAnimationLoop=function(M){Ye=M,W.setAnimationLoop(M),M===null?ki.stop():ki.start()},W.addEventListener("sessionstart",ea),W.addEventListener("sessionend",ia),this.render=function(M,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(W.cameraAutoUpdate===!0&&W.updateCamera(B),B=W.getCamera()),M.isScene===!0&&M.onBeforeRender(_,M,B,P),f=jt.get(M,w.length),f.init(B),w.push(f),Ct.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(Ct),vt=this.localClippingEnabled,nt=it.init(this.clippingPlanes,vt),m=pt.get(M,b.length),m.init(),b.push(m),W.enabled===!0&&W.isPresenting===!0){const st=_.xr.getDepthSensingMesh();st!==null&&or(st,B,-1/0,_.sortObjects)}or(M,B,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(ot,ft),Xt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Xt&&Rt.addToRenderList(m,M),this.info.render.frame++,nt===!0&&it.beginShadows();const G=f.state.shadowsArray;mt.render(G,M,B),nt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,U=m.transmissive;if(f.setupLights(),B.isArrayCamera){const st=B.cameras;if(U.length>0)for(let dt=0,_t=st.length;dt<_t;dt++){const yt=st[dt];sa(H,U,M,yt)}Xt&&Rt.render(M);for(let dt=0,_t=st.length;dt<_t;dt++){const yt=st[dt];na(m,M,yt,yt.viewport)}}else U.length>0&&sa(H,U,M,B),Xt&&Rt.render(M),na(m,M,B);P!==null&&(E.updateMultisampleRenderTarget(P),E.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(_,M,B),re.resetDefaultState(),S=-1,y=null,w.pop(),w.length>0?(f=w[w.length-1],nt===!0&&it.setGlobalState(_.clippingPlanes,f.state.camera)):f=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function or(M,B,G,H){if(M.visible===!1)return;if(M.layers.test(B.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(B);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||j.intersectsSprite(M)){H&&Wt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ct);const dt=$.update(M),_t=M.material;_t.visible&&m.push(M,dt,_t,G,Wt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||j.intersectsObject(M))){const dt=$.update(M),_t=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Wt.copy(M.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Wt.copy(dt.boundingSphere.center)),Wt.applyMatrix4(M.matrixWorld).applyMatrix4(Ct)),Array.isArray(_t)){const yt=dt.groups;for(let It=0,Nt=yt.length;It<Nt;It++){const Mt=yt[It],$t=_t[Mt.materialIndex];$t&&$t.visible&&m.push(M,dt,$t,G,Wt.z,Mt)}}else _t.visible&&m.push(M,dt,_t,G,Wt.z,null)}}const st=M.children;for(let dt=0,_t=st.length;dt<_t;dt++)or(st[dt],B,G,H)}function na(M,B,G,H){const U=M.opaque,st=M.transmissive,dt=M.transparent;f.setupLightsView(G),nt===!0&&it.setGlobalState(_.clippingPlanes,G),H&&At.viewport(C.copy(H)),U.length>0&&hs(U,B,G),st.length>0&&hs(st,B,G),dt.length>0&&hs(dt,B,G),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function sa(M,B,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new ei(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")||Bt.has("EXT_color_buffer_float")?Si:wi,minFilter:Qi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const st=f.state.transmissionRenderTarget[H.id],dt=H.viewport||C;st.setSize(dt.z,dt.w);const _t=_.getRenderTarget();_.setRenderTarget(st),_.getClearColor(Y),q=_.getClearAlpha(),q<1&&_.setClearColor(16777215,.5),_.clear(),Xt&&Rt.render(G);const yt=_.toneMapping;_.toneMapping=Ni;const It=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),nt===!0&&it.setGlobalState(_.clippingPlanes,H),hs(M,G,H),E.updateMultisampleRenderTarget(st),E.updateRenderTargetMipmap(st),Bt.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let Mt=0,$t=B.length;Mt<$t;Mt++){const oe=B[Mt],le=oe.object,Ie=oe.geometry,Kt=oe.material,wt=oe.group;if(Kt.side===oi&&le.layers.test(H.layers)){const di=Kt.side;Kt.side=Ce,Kt.needsUpdate=!0,ra(le,G,H,Ie,Kt,wt),Kt.side=di,Kt.needsUpdate=!0,Nt=!0}}Nt===!0&&(E.updateMultisampleRenderTarget(st),E.updateRenderTargetMipmap(st))}_.setRenderTarget(_t),_.setClearColor(Y,q),It!==void 0&&(H.viewport=It),_.toneMapping=yt}function hs(M,B,G){const H=B.isScene===!0?B.overrideMaterial:null;for(let U=0,st=M.length;U<st;U++){const dt=M[U],_t=dt.object,yt=dt.geometry,It=H===null?dt.material:H,Nt=dt.group;_t.layers.test(G.layers)&&ra(_t,B,G,yt,It,Nt)}}function ra(M,B,G,H,U,st){M.onBeforeRender(_,B,G,H,U,st),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(_,B,G,H,M,st),U.transparent===!0&&U.side===oi&&U.forceSinglePass===!1?(U.side=Ce,U.needsUpdate=!0,_.renderBufferDirect(G,B,H,U,M,st),U.side=zi,U.needsUpdate=!0,_.renderBufferDirect(G,B,H,U,M,st),U.side=oi):_.renderBufferDirect(G,B,H,U,M,st),M.onAfterRender(_,B,G,H,U,st)}function ds(M,B,G){B.isScene!==!0&&(B=ae);const H=Tt.get(M),U=f.state.lights,st=f.state.shadowsArray,dt=U.state.version,_t=bt.getParameters(M,U.state,st,B,G),yt=bt.getProgramCacheKey(_t);let It=H.programs;H.environment=M.isMeshStandardMaterial?B.environment:null,H.fog=B.fog,H.envMap=(M.isMeshStandardMaterial?k:v).get(M.envMap||H.environment),H.envMapRotation=H.environment!==null&&M.envMap===null?B.environmentRotation:M.envMapRotation,It===void 0&&(M.addEventListener("dispose",Ut),It=new Map,H.programs=It);let Nt=It.get(yt);if(Nt!==void 0){if(H.currentProgram===Nt&&H.lightsStateVersion===dt)return aa(M,_t),Nt}else _t.uniforms=bt.getUniforms(M),M.onBeforeCompile(_t,_),Nt=bt.acquireProgram(_t,yt),It.set(yt,Nt),H.uniforms=_t.uniforms;const Mt=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Mt.clippingPlanes=it.uniform),aa(M,_t),H.needsLights=Tc(M),H.lightsStateVersion=dt,H.needsLights&&(Mt.ambientLightColor.value=U.state.ambient,Mt.lightProbe.value=U.state.probe,Mt.directionalLights.value=U.state.directional,Mt.directionalLightShadows.value=U.state.directionalShadow,Mt.spotLights.value=U.state.spot,Mt.spotLightShadows.value=U.state.spotShadow,Mt.rectAreaLights.value=U.state.rectArea,Mt.ltc_1.value=U.state.rectAreaLTC1,Mt.ltc_2.value=U.state.rectAreaLTC2,Mt.pointLights.value=U.state.point,Mt.pointLightShadows.value=U.state.pointShadow,Mt.hemisphereLights.value=U.state.hemi,Mt.directionalShadowMap.value=U.state.directionalShadowMap,Mt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Mt.spotShadowMap.value=U.state.spotShadowMap,Mt.spotLightMatrix.value=U.state.spotLightMatrix,Mt.spotLightMap.value=U.state.spotLightMap,Mt.pointShadowMap.value=U.state.pointShadowMap,Mt.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Nt,H.uniformsList=null,Nt}function oa(M){if(M.uniformsList===null){const B=M.currentProgram.getUniforms();M.uniformsList=Xs.seqWithValue(B.seq,M.uniforms)}return M.uniformsList}function aa(M,B){const G=Tt.get(M);G.outputColorSpace=B.outputColorSpace,G.batching=B.batching,G.batchingColor=B.batchingColor,G.instancing=B.instancing,G.instancingColor=B.instancingColor,G.instancingMorph=B.instancingMorph,G.skinning=B.skinning,G.morphTargets=B.morphTargets,G.morphNormals=B.morphNormals,G.morphColors=B.morphColors,G.morphTargetsCount=B.morphTargetsCount,G.numClippingPlanes=B.numClippingPlanes,G.numIntersection=B.numClipIntersection,G.vertexAlphas=B.vertexAlphas,G.vertexTangents=B.vertexTangents,G.toneMapping=B.toneMapping}function wc(M,B,G,H,U){B.isScene!==!0&&(B=ae),E.resetTextureUnits();const st=B.fog,dt=H.isMeshStandardMaterial?B.environment:null,_t=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Nn,yt=(H.isMeshStandardMaterial?k:v).get(H.envMap||dt),It=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Nt=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Mt=!!G.morphAttributes.position,$t=!!G.morphAttributes.normal,oe=!!G.morphAttributes.color;let le=Ni;H.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(le=_.toneMapping);const Ie=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Kt=Ie!==void 0?Ie.length:0,wt=Tt.get(H),di=f.state.lights;if(nt===!0&&(vt===!0||M!==y)){const ke=M===y&&H.id===S;it.setState(H,M,ke)}let Zt=!1;H.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==di.state.version||wt.outputColorSpace!==_t||U.isBatchedMesh&&wt.batching===!1||!U.isBatchedMesh&&wt.batching===!0||U.isBatchedMesh&&wt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&wt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&wt.instancing===!1||!U.isInstancedMesh&&wt.instancing===!0||U.isSkinnedMesh&&wt.skinning===!1||!U.isSkinnedMesh&&wt.skinning===!0||U.isInstancedMesh&&wt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&wt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&wt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&wt.instancingMorph===!1&&U.morphTexture!==null||wt.envMap!==yt||H.fog===!0&&wt.fog!==st||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==it.numPlanes||wt.numIntersection!==it.numIntersection)||wt.vertexAlphas!==It||wt.vertexTangents!==Nt||wt.morphTargets!==Mt||wt.morphNormals!==$t||wt.morphColors!==oe||wt.toneMapping!==le||wt.morphTargetsCount!==Kt)&&(Zt=!0):(Zt=!0,wt.__version=H.version);let qe=wt.currentProgram;Zt===!0&&(qe=ds(H,B,U));let sn=!1,Be=!1,Gn=!1;const ce=qe.getUniforms(),ii=wt.uniforms;if(At.useProgram(qe.program)&&(sn=!0,Be=!0,Gn=!0),H.id!==S&&(S=H.id,Be=!0),sn||y!==M){At.buffers.depth.getReversed()?(at.copy(M.projectionMatrix),uh(at),fh(at),ce.setValue(R,"projectionMatrix",at)):ce.setValue(R,"projectionMatrix",M.projectionMatrix),ce.setValue(R,"viewMatrix",M.matrixWorldInverse);const Ti=ce.map.cameraPosition;Ti!==void 0&&Ti.setValue(R,Lt.setFromMatrixPosition(M.matrixWorld)),Gt.logarithmicDepthBuffer&&ce.setValue(R,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ce.setValue(R,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Be=!0,Gn=!0)}if(U.isSkinnedMesh){ce.setOptional(R,U,"bindMatrix"),ce.setOptional(R,U,"bindMatrixInverse");const ke=U.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),ce.setValue(R,"boneTexture",ke.boneTexture,E))}U.isBatchedMesh&&(ce.setOptional(R,U,"batchingTexture"),ce.setValue(R,"batchingTexture",U._matricesTexture,E),ce.setOptional(R,U,"batchingIdTexture"),ce.setValue(R,"batchingIdTexture",U._indirectTexture,E),ce.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&ce.setValue(R,"batchingColorTexture",U._colorsTexture,E));const Hn=G.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Dt.update(U,G,qe),(Be||wt.receiveShadow!==U.receiveShadow)&&(wt.receiveShadow=U.receiveShadow,ce.setValue(R,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(ii.envMap.value=yt,ii.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&B.environment!==null&&(ii.envMapIntensity.value=B.environmentIntensity),Be&&(ce.setValue(R,"toneMappingExposure",_.toneMappingExposure),wt.needsLights&&Ec(ii,Gn),st&&H.fog===!0&&ct.refreshFogUniforms(ii,st),ct.refreshMaterialUniforms(ii,H,V,Q,f.state.transmissionRenderTarget[M.id]),Xs.upload(R,oa(wt),ii,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Xs.upload(R,oa(wt),ii,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ce.setValue(R,"center",U.center),ce.setValue(R,"modelViewMatrix",U.modelViewMatrix),ce.setValue(R,"normalMatrix",U.normalMatrix),ce.setValue(R,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const ke=H.uniformsGroups;for(let Ti=0,Ai=ke.length;Ti<Ai;Ti++){const la=ke[Ti];I.update(la,qe),I.bind(la,qe)}}return qe}function Ec(M,B){M.ambientLightColor.needsUpdate=B,M.lightProbe.needsUpdate=B,M.directionalLights.needsUpdate=B,M.directionalLightShadows.needsUpdate=B,M.pointLights.needsUpdate=B,M.pointLightShadows.needsUpdate=B,M.spotLights.needsUpdate=B,M.spotLightShadows.needsUpdate=B,M.rectAreaLights.needsUpdate=B,M.hemisphereLights.needsUpdate=B}function Tc(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,B,G){Tt.get(M.texture).__webglTexture=B,Tt.get(M.depthTexture).__webglTexture=G;const H=Tt.get(M);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=G===void 0,H.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,B){const G=Tt.get(M);G.__webglFramebuffer=B,G.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(M,B=0,G=0){P=M,T=B,A=G;let H=!0,U=null,st=!1,dt=!1;if(M){const yt=Tt.get(M);if(yt.__useDefaultFramebuffer!==void 0)At.bindFramebuffer(R.FRAMEBUFFER,null),H=!1;else if(yt.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(yt.__hasExternalTextures)E.rebindTextures(M,Tt.get(M.texture).__webglTexture,Tt.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Mt=M.depthTexture;if(yt.__boundDepthTexture!==Mt){if(Mt!==null&&Tt.has(Mt)&&(M.width!==Mt.image.width||M.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}const It=M.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(dt=!0);const Nt=Tt.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Nt[B])?U=Nt[B][G]:U=Nt[B],st=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?U=Tt.get(M).__webglMultisampledFramebuffer:Array.isArray(Nt)?U=Nt[G]:U=Nt,C.copy(M.viewport),N.copy(M.scissor),z=M.scissorTest}else C.copy(St).multiplyScalar(V).floor(),N.copy(kt).multiplyScalar(V).floor(),z=te;if(At.bindFramebuffer(R.FRAMEBUFFER,U)&&H&&At.drawBuffers(M,U),At.viewport(C),At.scissor(N),At.setScissorTest(z),st){const yt=Tt.get(M.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+B,yt.__webglTexture,G)}else if(dt){const yt=Tt.get(M.texture),It=B||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,yt.__webglTexture,G||0,It)}S=-1},this.readRenderTargetPixels=function(M,B,G,H,U,st,dt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _t=Tt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){At.bindFramebuffer(R.FRAMEBUFFER,_t);try{const yt=M.texture,It=yt.format,Nt=yt.type;if(!Gt.textureFormatReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=M.width-H&&G>=0&&G<=M.height-U&&R.readPixels(B,G,H,U,Ht.convert(It),Ht.convert(Nt),st)}finally{const yt=P!==null?Tt.get(P).__webglFramebuffer:null;At.bindFramebuffer(R.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(M,B,G,H,U,st,dt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _t=Tt.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(_t=_t[dt]),_t){const yt=M.texture,It=yt.format,Nt=yt.type;if(!Gt.textureFormatReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=M.width-H&&G>=0&&G<=M.height-U){At.bindFramebuffer(R.FRAMEBUFFER,_t);const Mt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Mt),R.bufferData(R.PIXEL_PACK_BUFFER,st.byteLength,R.STREAM_READ),R.readPixels(B,G,H,U,Ht.convert(It),Ht.convert(Nt),0);const $t=P!==null?Tt.get(P).__webglFramebuffer:null;At.bindFramebuffer(R.FRAMEBUFFER,$t);const oe=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await dh(R,oe,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Mt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,st),R.deleteBuffer(Mt),R.deleteSync(oe),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,B=null,G=0){M.isTexture!==!0&&(is("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,M=arguments[1]);const H=Math.pow(2,-G),U=Math.floor(M.image.width*H),st=Math.floor(M.image.height*H),dt=B!==null?B.x:0,_t=B!==null?B.y:0;E.setTexture2D(M,0),R.copyTexSubImage2D(R.TEXTURE_2D,G,0,0,dt,_t,U,st),At.unbindTexture()},this.copyTextureToTexture=function(M,B,G=null,H=null,U=0){M.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,M=arguments[1],B=arguments[2],U=arguments[3]||0,G=null);let st,dt,_t,yt,It,Nt,Mt,$t,oe;const le=M.isCompressedTexture?M.mipmaps[U]:M.image;G!==null?(st=G.max.x-G.min.x,dt=G.max.y-G.min.y,_t=G.isBox3?G.max.z-G.min.z:1,yt=G.min.x,It=G.min.y,Nt=G.isBox3?G.min.z:0):(st=le.width,dt=le.height,_t=le.depth||1,yt=0,It=0,Nt=0),H!==null?(Mt=H.x,$t=H.y,oe=H.z):(Mt=0,$t=0,oe=0);const Ie=Ht.convert(B.format),Kt=Ht.convert(B.type);let wt;B.isData3DTexture?(E.setTexture3D(B,0),wt=R.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(E.setTexture2DArray(B,0),wt=R.TEXTURE_2D_ARRAY):(E.setTexture2D(B,0),wt=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,B.unpackAlignment);const di=R.getParameter(R.UNPACK_ROW_LENGTH),Zt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),qe=R.getParameter(R.UNPACK_SKIP_PIXELS),sn=R.getParameter(R.UNPACK_SKIP_ROWS),Be=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,le.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,le.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,yt),R.pixelStorei(R.UNPACK_SKIP_ROWS,It),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Nt);const Gn=M.isDataArrayTexture||M.isData3DTexture,ce=B.isDataArrayTexture||B.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const ii=Tt.get(M),Hn=Tt.get(B),ke=Tt.get(ii.__renderTarget),Ti=Tt.get(Hn.__renderTarget);At.bindFramebuffer(R.READ_FRAMEBUFFER,ke.__webglFramebuffer),At.bindFramebuffer(R.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Ai=0;Ai<_t;Ai++)Gn&&R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Tt.get(M).__webglTexture,U,Nt+Ai),M.isDepthTexture?(ce&&R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Tt.get(B).__webglTexture,U,oe+Ai),R.blitFramebuffer(yt,It,st,dt,Mt,$t,st,dt,R.DEPTH_BUFFER_BIT,R.NEAREST)):ce?R.copyTexSubImage3D(wt,U,Mt,$t,oe+Ai,yt,It,st,dt):R.copyTexSubImage2D(wt,U,Mt,$t,oe+Ai,yt,It,st,dt);At.bindFramebuffer(R.READ_FRAMEBUFFER,null),At.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else ce?M.isDataTexture||M.isData3DTexture?R.texSubImage3D(wt,U,Mt,$t,oe,st,dt,_t,Ie,Kt,le.data):B.isCompressedArrayTexture?R.compressedTexSubImage3D(wt,U,Mt,$t,oe,st,dt,_t,Ie,le.data):R.texSubImage3D(wt,U,Mt,$t,oe,st,dt,_t,Ie,Kt,le):M.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,U,Mt,$t,st,dt,Ie,Kt,le.data):M.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,U,Mt,$t,le.width,le.height,Ie,le.data):R.texSubImage2D(R.TEXTURE_2D,U,Mt,$t,st,dt,Ie,Kt,le);R.pixelStorei(R.UNPACK_ROW_LENGTH,di),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Zt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,qe),R.pixelStorei(R.UNPACK_SKIP_ROWS,sn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Be),U===0&&B.generateMipmaps&&R.generateMipmap(wt),At.unbindTexture()},this.copyTextureToTexture3D=function(M,B,G=null,H=null,U=0){return M.isTexture!==!0&&(is("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,H=arguments[1]||null,M=arguments[2],B=arguments[3],U=arguments[4]||0),is('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,B,G,H,U)},this.initRenderTarget=function(M){Tt.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),At.unbindTexture()},this.resetState=function(){T=0,A=0,P=null,At.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class $o{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new xt(t),this.density=e}clone(){return new $o(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class b0 extends ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class w0{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Po,this.updateRanges=[],this.version=0,this.uuid=Oi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let n=0,r=this.stride;n<r;n++)this.array[t+n]=e.array[i+n];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Oi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Pe=new D;class $s{constructor(t,e,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=ai(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ne(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ne(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ai(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ai(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ai(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ai(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this}setXYZW(t,e,i,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ne(e,this.array),i=ne(i,this.array),n=ne(n,this.array),r=ne(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=n,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return new Xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new $s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gc extends nn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new xt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let _n;const qn=new D,yn=new D,Mn=new D,Sn=new Et,jn=new Et,xc=new he,Is=new D,$n=new D,Fs=new D,rl=new Et,Nr=new Et,ol=new Et;class E0 extends ve{constructor(t=new gc){if(super(),this.isSprite=!0,this.type="Sprite",_n===void 0){_n=new Re;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new w0(e,5);_n.setIndex([0,1,2,0,2,3]),_n.setAttribute("position",new $s(i,3,0,!1)),_n.setAttribute("uv",new $s(i,2,3,!1))}this.geometry=_n,this.material=t,this.center=new Et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yn.setFromMatrixScale(this.matrixWorld),xc.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Mn.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yn.multiplyScalar(-Mn.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const o=this.center;Bs(Is.set(-.5,-.5,0),Mn,o,yn,n,r),Bs($n.set(.5,-.5,0),Mn,o,yn,n,r),Bs(Fs.set(.5,.5,0),Mn,o,yn,n,r),rl.set(0,0),Nr.set(1,0),ol.set(1,1);let a=t.ray.intersectTriangle(Is,$n,Fs,!1,qn);if(a===null&&(Bs($n.set(-.5,.5,0),Mn,o,yn,n,r),Nr.set(0,1),a=t.ray.intersectTriangle(Is,Fs,$n,!1,qn),a===null))return;const l=t.ray.origin.distanceTo(qn);l<t.near||l>t.far||e.push({distance:l,point:qn.clone(),uv:We.getInterpolation(qn,Is,$n,Fs,rl,Nr,ol,new Et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Bs(s,t,e,i,n,r){Sn.subVectors(s,e).addScalar(.5).multiply(i),n!==void 0?(jn.x=r*Sn.x-n*Sn.y,jn.y=n*Sn.x+r*Sn.y):jn.copy(Sn),s.copy(t),s.x+=jn.x,s.y+=jn.y,s.applyMatrix4(xc)}class vc extends nn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Js=new D,Ks=new D,al=new he,Jn=new ic,Us=new ir,Or=new D,ll=new D;class T0 extends ve{constructor(t=new Re,e=new vc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let n=1,r=e.count;n<r;n++)Js.fromBufferAttribute(e,n-1),Ks.fromBufferAttribute(e,n),i[n]=i[n-1],i[n]+=Js.distanceTo(Ks);t.setAttribute("lineDistance",new de(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,n=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere),Us.applyMatrix4(n),Us.radius+=r,t.ray.intersectsSphere(Us)===!1)return;al.copy(n).invert(),Jn.copy(t.ray).applyMatrix4(al);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=h.getX(x),b=h.getX(x+1),w=Ns(this,t,Jn,l,f,b);w&&e.push(w)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),f=Ns(this,t,Jn,l,x,m);f&&e.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){const f=Ns(this,t,Jn,l,x,x+1);f&&e.push(f)}if(this.isLineLoop){const x=Ns(this,t,Jn,l,g-1,p);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const n=e[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=n.length;r<o;r++){const a=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ns(s,t,e,i,n,r){const o=s.geometry.attributes.position;if(Js.fromBufferAttribute(o,n),Ks.fromBufferAttribute(o,r),e.distanceSqToSegment(Js,Ks,Or,ll)>i)return;Or.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Or);if(!(l<t.near||l>t.far))return{distance:l,point:ll.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}class cl extends Le{constructor(t,e,i,n,r,o,a,l,c){super(t,e,i,n,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jo extends Re{constructor(t=1,e=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:n},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new D,h=new Et;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=i+u/e*n;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new de(o,3)),this.setAttribute("normal",new de(a,3)),this.setAttribute("uv",new de(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qt extends Re{constructor(t=1,e=1,i=1,n=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:n,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const x=[],m=i/2;let f=0;b(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(p,2));function b(){const _=new D,L=new D;let T=0;const A=(e-t)/i;for(let P=0;P<=r;P++){const S=[],y=P/r,C=y*(e-t)+t;for(let N=0;N<=n;N++){const z=N/n,Y=z*l+a,q=Math.sin(Y),X=Math.cos(Y);L.x=C*q,L.y=-y*i+m,L.z=C*X,u.push(L.x,L.y,L.z),_.set(q,A,X).normalize(),d.push(_.x,_.y,_.z),p.push(z,1-y),S.push(g++)}x.push(S)}for(let P=0;P<n;P++)for(let S=0;S<r;S++){const y=x[S][P],C=x[S+1][P],N=x[S+1][P+1],z=x[S][P+1];(t>0||S!==0)&&(h.push(y,C,z),T+=3),(e>0||S!==r-1)&&(h.push(C,N,z),T+=3)}c.addGroup(f,T,0),f+=T}function w(_){const L=g,T=new Et,A=new D;let P=0;const S=_===!0?t:e,y=_===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;const C=g;for(let N=0;N<=n;N++){const Y=N/n*l+a,q=Math.cos(Y),X=Math.sin(Y);A.x=S*X,A.y=m*y,A.z=S*q,u.push(A.x,A.y,A.z),d.push(0,y,0),T.x=q*.5+.5,T.y=X*.5*y+.5,p.push(T.x,T.y),g++}for(let N=0;N<n;N++){const z=L+N,Y=C+N;_===!0?h.push(Y,Y+1,z):h.push(Y+1,Y,z),P+=3}c.addGroup(f,P,_===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ui extends Qt{constructor(t=1,e=1,i=32,n=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,n,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ui(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ko extends Re{constructor(t=[],e=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:n};const r=[],o=[];a(n),c(i),h(),this.setAttribute("position",new de(r,3)),this.setAttribute("normal",new de(r.slice(),3)),this.setAttribute("uv",new de(o,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function a(b){const w=new D,_=new D,L=new D;for(let T=0;T<e.length;T+=3)p(e[T+0],w),p(e[T+1],_),p(e[T+2],L),l(w,_,L,b)}function l(b,w,_,L){const T=L+1,A=[];for(let P=0;P<=T;P++){A[P]=[];const S=b.clone().lerp(_,P/T),y=w.clone().lerp(_,P/T),C=T-P;for(let N=0;N<=C;N++)N===0&&P===T?A[P][N]=S:A[P][N]=S.clone().lerp(y,N/C)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){const y=Math.floor(S/2);S%2===0?(d(A[P][y+1]),d(A[P+1][y]),d(A[P][y])):(d(A[P][y+1]),d(A[P+1][y+1]),d(A[P+1][y]))}}function c(b){const w=new D;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(b),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){const b=new D;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];const _=m(b)/2/Math.PI+.5,L=f(b)/Math.PI+.5;o.push(_,1-L)}g(),u()}function u(){for(let b=0;b<o.length;b+=6){const w=o[b+0],_=o[b+2],L=o[b+4],T=Math.max(w,_,L),A=Math.min(w,_,L);T>.9&&A<.1&&(w<.2&&(o[b+0]+=1),_<.2&&(o[b+2]+=1),L<.2&&(o[b+4]+=1))}}function d(b){r.push(b.x,b.y,b.z)}function p(b,w){const _=b*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function g(){const b=new D,w=new D,_=new D,L=new D,T=new Et,A=new Et,P=new Et;for(let S=0,y=0;S<r.length;S+=9,y+=6){b.set(r[S+0],r[S+1],r[S+2]),w.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),T.set(o[y+0],o[y+1]),A.set(o[y+2],o[y+3]),P.set(o[y+4],o[y+5]),L.copy(b).add(w).add(_).divideScalar(3);const C=m(L);x(T,y+0,b,C),x(A,y+2,w,C),x(P,y+4,_,C)}}function x(b,w,_,L){L<0&&b.x===1&&(o[w]=b.x-1),_.x===0&&_.z===0&&(o[w]=L/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ko(t.vertices,t.indices,t.radius,t.details)}}class Zo extends Ko{constructor(t=1,e=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zo(t.radius,t.detail)}}class sr extends Re{constructor(t=.5,e=1,i=32,n=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:o},i=Math.max(3,i),n=Math.max(1,n);const a=[],l=[],c=[],h=[];let u=t;const d=(e-t)/n,p=new D,g=new Et;for(let x=0;x<=n;x++){for(let m=0;m<=i;m++){const f=r+m/i*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let x=0;x<n;x++){const m=x*(i+1);for(let f=0;f<i;f++){const b=f+m,w=b,_=b+i+1,L=b+i+2,T=b+1;a.push(w,_,T),a.push(_,L,T)}}this.setIndex(a),this.setAttribute("position",new de(l,3)),this.setAttribute("normal",new de(c,3)),this.setAttribute("uv",new de(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Ze extends Re{constructor(t=1,e=32,i=16,n=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:n,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new D,d=new D,p=[],g=[],x=[],m=[];for(let f=0;f<=i;f++){const b=[],w=f/i;let _=0;f===0&&o===0?_=.5/e:f===i&&l===Math.PI&&(_=-.5/e);for(let L=0;L<=e;L++){const T=L/e;u.x=-t*Math.cos(n+T*r)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(n+T*r)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+_,1-w),b.push(c++)}h.push(b)}for(let f=0;f<i;f++)for(let b=0;b<e;b++){const w=h[f][b+1],_=h[f][b],L=h[f+1][b],T=h[f+1][b+1];(f!==0||o>0)&&p.push(w,_,T),(f!==i-1||l<Math.PI)&&p.push(_,L,T)}this.setIndex(p),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(x,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class A0 extends Ae{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Z extends nn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new Et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rr extends ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class C0 extends rr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const zr=new he,hl=new D,dl=new D;class _c{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Et(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yo,this._frameExtents=new Et(1,1),this._viewportCount=1,this._viewports=[new se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;hl.setFromMatrixPosition(t.matrixWorld),e.position.copy(hl),dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dl),e.updateMatrixWorld(),zr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(zr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ul=new he,Kn=new D,kr=new D;class R0 extends _c{constructor(){super(new ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Et(4,2),this._viewportCount=6,this._viewports=[new se(2,1,1,1),new se(0,1,1,1),new se(3,1,1,1),new se(1,1,1,1),new se(3,0,1,1),new se(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,n=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Kn.setFromMatrixPosition(t.matrixWorld),i.position.copy(Kn),kr.copy(i.position),kr.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(kr),i.updateMatrixWorld(),n.makeTranslation(-Kn.x,-Kn.y,-Kn.z),ul.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul)}}class P0 extends rr{constructor(t,e,i=0,n=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new R0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class D0 extends _c{constructor(){super(new qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fl extends rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ve.DEFAULT_UP),this.updateMatrix(),this.target=new ve,this.shadow=new D0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class L0 extends rr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class I0{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=pl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function pl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:No}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=No);const yc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class kn{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const F0=new qo(-1,1,1,-1,0,1);class B0 extends Re{constructor(){super(),this.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new de([0,2,0,0,2,0],2))}}const U0=new B0;class Qo{constructor(t){this._mesh=new O(U0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,F0)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class N0 extends kn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ae?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=rs.clone(t.uniforms),this.material=new Ae({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Qo(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ml extends kn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const n=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}}class O0 extends kn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class z0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Et);this._width=i.width,this._height=i.height,e=new ei(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Si}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new N0(yc),this.copyPass.material.blending=Mi,this.clock=new I0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let n=0,r=this.passes.length;n<r;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}ml!==void 0&&(o instanceof ml?i=!0:o instanceof O0&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class k0 extends kn{constructor(t,e,i=null,n=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new xt}render(t,e,i){const n=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=n}}const G0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new xt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Un extends kn{constructor(t,e,i,n){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=n,this.resolution=t!==void 0?new Et(t.x,t.y):new Et(256,256),this.clearColor=new xt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ei(r,o,{type:Si}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new ei(r,o,{type:Si});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new ei(r,o,{type:Si});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=G0;this.highPassUniforms=rs.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ae({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Et(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=yc;this.copyUniforms=rs.clone(h.uniforms),this.blendMaterial=new Ae({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Vr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new xt,this.oldClearAlpha=1,this.basic=new Ve,this.fsQuad=new Qo(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),n=Math.round(e/2);this.renderTargetBright.setSize(i,n);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,n),this.renderTargetsVertical[r].setSize(i,n),this.separableBlurMaterials[r].uniforms.invSize.value=new Et(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(t,e,i,n,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Un.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Un.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Ae({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Et(.5,.5)},direction:{value:new Et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}Un.BlurDirectionX=new Et(1,0);Un.BlurDirectionY=new Et(0,1);const H0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class V0 extends kn{constructor(){super();const t=H0;this.uniforms=rs.clone(t.uniforms),this.material=new A0({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Qo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ul?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ol?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Zn={fov:35,height:38,rotationSmoothing:.06,positionSmoothing:.1,lookAheadDistance:6};class W0{constructor(){F(this,"camera");F(this,"targetPos",new D);F(this,"cameraAngle",0);this.camera=new ze(Zn.fov,window.innerWidth/window.innerHeight,5,800)}follow(t,e,i){let n=i-this.cameraAngle;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;this.cameraAngle+=n*Zn.rotationSmoothing;const r=Math.sin(this.cameraAngle)*-28,o=-Math.cos(this.cameraAngle)*-28;this.targetPos.set(t.x+r,t.y+Zn.height,t.z+o),this.camera.position.lerp(this.targetPos,Zn.positionSmoothing);const l=e.length()>.5?e.clone().normalize().multiplyScalar(Zn.lookAheadDistance):new D(0,0,0),c=t.clone().add(l);c.y+=2,this.camera.lookAt(c)}}class X0{constructor(){F(this,"boxes",[])}addBox(t,e,i,n){this.boxes.push({cx:t,cz:e,hw:i,hd:n})}resolveCircle(t,e,i){let n=t,r=e;for(const o of this.boxes){const a=o.hw+i,l=o.hd+i,c=n-o.cx,h=r-o.cz;if(Math.abs(c)<a&&Math.abs(h)<l){const u=a-Math.abs(c),d=l-Math.abs(h);u<d?n+=c<0?-u:u:r+=h<0?-d:d}}return{x:n,z:r}}}class Y0{constructor(){F(this,"renderer");F(this,"scene");F(this,"camera");F(this,"collisionWorld",new X0);F(this,"composer");F(this,"clouds",[]);F(this,"updateCallbacks",[]);F(this,"lastTime",0);F(this,"C",{modernGrey:13157564,warmGrey:12103846,terracotta:12884602,deepClay:10516568,softWhite:15262940,charcoal:4868682,warmCream:13945272,oliveGreen:9083754,ironRed:12674667})}async init(){this.renderer=new S0({antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Fl,this.renderer.toneMapping=zo,this.renderer.toneMappingExposure=1.1,document.body.appendChild(this.renderer.domElement),this.renderer.domElement.style.position="relative",this.renderer.domElement.style.zIndex="1",this.scene=new b0,this.scene.fog=new $o(8900331,.0025),this.camera=new W0,this.scene.add(this.camera.camera),this.composer=new z0(this.renderer),this.composer.addPass(new k0(this.scene,this.camera.camera));const t=new Un(new Et(window.innerWidth,window.innerHeight),.3,.4,.85);this.composer.addPass(t),this.composer.addPass(new V0);const e=new L0(16777215,.5);this.scene.add(e);const i=new fl(16774368,1.4);i.position.set(80,120,40),i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,i.shadow.camera.near=.5,i.shadow.camera.far=600,i.shadow.camera.left=-300,i.shadow.camera.right=300,i.shadow.camera.top=300,i.shadow.camera.bottom=-300,i.shadow.bias=-.001,this.scene.add(i);const n=new fl(16771280,.5);n.position.set(-60,40,-80),this.scene.add(n);const r=new C0(8900331,8943462,.3);this.scene.add(r),this.createCityGround(),this.createCity(),this.createTEHouses(),this.buildWorkshop(10,15),this.createZebraCrossings(),this.createRoadCorners(),this.createStreetFurniture(),this.createSkyDome(),this.createClouds(),this.createPuddles(),window.addEventListener("resize",()=>{this.renderer.setSize(window.innerWidth,window.innerHeight),this.composer.setSize(window.innerWidth,window.innerHeight),this.camera.camera.aspect=window.innerWidth/window.innerHeight,this.camera.camera.updateProjectionMatrix()})}seed(t,e,i=0){const n=Math.sin(t*127.1+e*311.7+i*74.3)*43758.5453123;return n-Math.floor(n)}getZone(t,e){return Math.abs(t)<80&&Math.abs(e)<80?"cbd":t<-80?"footscray":t>80?"richmond":e<-80?"stkilda":"brunswick"}pickBuildingType(t,e){const i={cbd:[.5,.5,.9,1,1],footscray:[0,.2,.2,.4,1],brunswick:[.3,.6,.6,1,1],richmond:[.3,.3,.6,1,1],stkilda:[0,.3,.3,.7,1]},n=i[t]??i.brunswick,r=["A","B","C","D","E"];for(let o=0;o<n.length;o++)if(e<n[o])return r[o];return"D"}createCityGround(){const r=new Z({color:8947840}),o=new O(new fe(2048,2048),r);o.rotation.x=-Math.PI/2,o.position.y=0,o.receiveShadow=!0,this.scene.add(o);const a={cbd:8947840,footscray:7824981,brunswick:8943462,richmond:8026224,stkilda:9080960};for(let l=-240;l<240;l+=40)for(let c=-240;c<240;c+=40){const h=l+20,u=c+40/2,d=this.getZone(h,u),g=this.seed(l,c,0)<.15?5929546:a[d],x=new Z({color:g}),m=new O(new fe(30,30),x);m.rotation.x=-Math.PI/2,m.position.set(h,.005,u),m.receiveShadow=!0,this.scene.add(m)}}createCity(){const n=new Z({color:2763306}),r=new Z({color:16777215}),o=new Z({color:15777856}),a=new Z({color:13156528}),l=32;for(let c=-240;c<=240;c+=40){const u=new O(new fe(480,8),n);u.rotation.x=-Math.PI/2,u.position.set(0,.01,c),u.receiveShadow=!0,this.scene.add(u);for(let d=-240;d<240;d+=40){const p=d+20;for(const g of[-1,1]){const x=new O(new fe(l,2),a);x.rotation.x=-Math.PI/2,x.position.set(p,.02,c+g*(8/2+1)),x.receiveShadow=!0,this.scene.add(x)}}for(const d of[-1,1]){const p=new O(new fe(480,.2),o);p.rotation.x=-Math.PI/2,p.position.set(0,.03,c+d*(8/2-.3)),this.scene.add(p)}for(let d=-240;d<=240;d+=8){const p=new O(new fe(4,.15),r);p.rotation.x=-Math.PI/2,p.position.set(d,.03,c),this.scene.add(p)}for(let d=-240;d<=240;d+=20)for(const p of[-1,1]){const g=d+(this.seed(d,c,50+p)-.5)*2,x=c+p*5.5,m=(g%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,x,d*10+p,c*10+1)}for(let d=-232;d<240;d+=17){const p=this.seed(d,c,60);if(p>.45){const g=p>.72?1:-1,x=d+(this.seed(d,c,61)-.5)*4,m=c+g*(8/2+1.1);this.addParkedCar(x,m,d+g*3,c+7)}}}for(let c=-240;c<=240;c+=40){const u=new O(new fe(8,480),n);u.rotation.x=-Math.PI/2,u.position.set(c,.01,0),u.receiveShadow=!0,this.scene.add(u);for(let d=-240;d<240;d+=40){const p=d+20;for(const g of[-1,1]){const x=new O(new fe(2,l),a);x.rotation.x=-Math.PI/2,x.position.set(c+g*(8/2+1),.02,p),x.receiveShadow=!0,this.scene.add(x)}}for(const d of[-1,1]){const p=new O(new fe(.2,480),o);p.rotation.x=-Math.PI/2,p.position.set(c+d*(8/2-.3),.03,0),this.scene.add(p)}for(let d=-240;d<=240;d+=8){const p=new O(new fe(.15,4),r);p.rotation.x=-Math.PI/2,p.position.set(c,.03,d),this.scene.add(p)}for(let d=-240;d<=240;d+=20)for(const p of[-1,1]){const g=c+p*5.5,x=d+(this.seed(c,d,52+p)-.5)*2,m=(x%40+40)%40;Math.min(m,40-m)<=6||this.addTree(g,x,c*10+2,d*10+p)}for(let d=-232;d<240;d+=17){const p=this.seed(c,d,62);if(p>.45){const g=p>.72?1:-1,x=c+g*(8/2+1.1),m=d+(this.seed(c,d,63)-.5)*4;this.addParkedCar(x,m,c+9,d+g*3)}}}for(let c=-240;c<240;c+=40)for(let h=-240;h<240;h+=40)this.populateBlock(c,h,40,8)}addTree(t,e,i,n){const r=this.seed(i,n,99),o=r<.15?"palm":r<.5?"round":"layered",a=2+r*1.5,l=new Z({color:6045747}),c=new O(new Qt(.25,.35,a,7),l);if(c.position.set(t,a/2,e),c.castShadow=!0,this.scene.add(c),o==="palm"){const h=new O(new Qt(.15,.22,6,6),new Z({color:9139029}));h.position.set(t,3,e),this.scene.add(h);for(let u=0;u<6;u++){const d=u/6*Math.PI*2,p=new O(new et(.15,.08,2.5),new Z({color:2775578}));p.position.set(t+Math.cos(d)*1.2,6.5,e+Math.sin(d)*1.2),p.rotation.y=d,p.rotation.z=.4,this.scene.add(p)}}else if(o==="layered"){const h=[2973229,3829306,4881994];for(let u=0;u<3;u++){const d=2.2-u*.5,p=new O(new Ui(d,2,8),new Z({color:h[u]}));p.position.set(t,a+1+u*1.5,e),p.castShadow=!0,this.scene.add(p)}}else{const h=r>.7?4025917:2973229,u=[[0,0,0],[.8,-.3,.5],[-.7,-.2,.3],[.3,.4,-.6],[-.4,.3,-.5]];for(let d=0;d<u.length;d++){const[p,g,x]=u[d],m=1.8+this.seed(i+d*17,n+d*13,103)*.8,f=new O(new Ze(m,7,6),new Z({color:h}));f.position.set(t+p,a+2.5+g,e+x),f.castShadow=!0,this.scene.add(f)}}}addParkedCar(t,e,i,n){const r=[13382451,3364300,11184810,14540253,2236962],o=Math.floor(this.seed(i,n,20)*r.length),a=new Z({color:r[o]}),l=new O(new et(1.5,1.2,3),a);l.position.set(t,.6,e),this.scene.add(l);const c=new Z({color:2241348}),h=new O(new et(1.4,.5,.1),c);h.position.set(t,1.3,e-.9),this.scene.add(h)}populateBlock(t,e,i,n){const r=i-n-4,o=t+i/2,a=e+i/2,l=this.getZone(o,a),c=1+Math.floor(this.seed(t,e,1)*2);for(let h=0;h<c;h++){const u=this.seed(t+h*3,e+h*7,3),d=this.pickBuildingType(l,u);if(d==="E"){h===0&&this.buildTypeE(o,a,t,e);break}const p=r*.18,g=c>1?h===0?-p:p:0,x=g+(this.seed(t+h*5,e,4)-.5)*p*.3,m=g+(this.seed(t,e+h*5,5)-.5)*p*.3,f=t+h*11,b=e+h*13;switch(d){case"A":this.buildTypeA(o+x,a+m,f,b);break;case"B":this.buildTypeB(o+x,a+m,f,b);break;case"C":this.buildTypeC(o+x,a+m,f,b);break;case"D":this.buildTypeD(o+x,a+m,f,b);break}}}addBox(t,e,i,n,r,o,a,l,c=0,h=0,u=0){const d=new O(new et(i,n,r),new Z({color:e}));d.position.set(o,a,l),c!==0&&(d.rotation.x=c),h!==0&&(d.rotation.y=h),u!==0&&(d.rotation.z=u),d.castShadow=!0,d.receiveShadow=!0,t.add(d)}addCyl(t,e,i,n,r,o,a,l,c){const h=new O(new Qt(i,n,r,o),new Z({color:e}));h.position.set(a,l,c),h.castShadow=!0,h.receiveShadow=!0,t.add(h)}registerBuildingCollider(t,e,i,n,r,o){const a=Math.floor(this.seed(r,o,101)*4)%4,l=a===1||a===3;this.collisionWorld.addBox(t,e,l?n:i,l?i:n)}buildTypeA(t,e,i,n){const r=this.C,o=new Pt;this.addBox(o,r.modernGrey,16,10,14,0,5,0),this.addBox(o,r.softWhite,16.4,.6,14.4,0,10.3,0);for(const u of[-5,0,5])this.addCyl(o,r.charcoal,.3,.3,3,6,u,1.5,-7);this.addBox(o,r.charcoal,14,.4,.4,0,3,-7);for(const u of[-4.5,0,4.5])this.addGlassBox(o,2241348,2.5,1.8,.15,u,7,-6.93);this.addBox(o,r.deepClay,14,.5,1.2,0,.25,-7.6),this.addBox(o,r.oliveGreen,13,.4,1,0,.7,-7.6);const a=this.seed(i,n,400),l=new Z({color:a>.5?12876352:4876938}),c=new O(new et(14,.1,1.5),l);c.position.set(0,3.8,-7.75),c.rotation.x=.15,o.add(c);const h=new O(new et(14,.3,.08),l);h.position.set(0,3.45,-8.45),o.add(h),this.addBox(o,14210252,.8,.5,.08,-6.5,1,-7.05),this.addRooftopDetails(o,16,14,10,i,n),o.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),o.position.set(t,0,e),this.scene.add(o),this.registerBuildingCollider(t,e,8.5,7.5,i,n)}buildTypeB(t,e,i,n){const r=this.C,o=new Pt;this.addBox(o,r.deepClay,14.5,8.2,12.5,.3,4,.3),this.addBox(o,r.terracotta,14,8,12,0,4,0),this.addBox(o,r.terracotta,14.6,1.2,12.6,0,8.6,0),this.addBox(o,r.softWhite,15,.3,13,0,9.35,0);for(const a of[-3,3]){this.addBox(o,r.softWhite,1.6,2.6,.1,a,5,-5.99),this.addGlassBox(o,2241348,1.2,2.2,.2,a,5,-5.75);for(const l of[4.3,5,5.7])this.addBox(o,r.charcoal,1,.08,.12,a,l,-5.68)}this.addBox(o,r.charcoal,2,3,.2,0,1.5,-6.1),this.addBox(o,r.charcoal,1.5,.4,.2,0,3.2,-6.1),this.addBox(o,r.charcoal,1,.4,.2,0,3.7,-6.1),this.addBox(o,r.deepClay,2,.4,.6,0,.2,-6.6),this.addBox(o,r.oliveGreen,1.8,.1,.5,0,.45,-6.6),this.addBox(o,13938826,.8,.5,.08,-5,1,-6.05),this.addRooftopDetails(o,14,12,8,i,n),o.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),o.position.set(t,0,e),this.scene.add(o),this.registerBuildingCollider(t,e,7.5,6.5,i,n)}buildTypeC(t,e,i,n){const r=this.C,o=new Pt,a=30+Math.floor(this.seed(i,n,31)*20);this.addBox(o,r.modernGrey,8,4,8,0,2,0),this.addBox(o,4478310,7.5,3.5,7.5,0,2,0),this.addBox(o,3359829,7,a,7,0,a/2,0);for(let l=4;l<=a;l+=4)this.addBox(o,r.warmGrey,7.3,.2,7.3,0,l,0);this.addBox(o,r.charcoal,4,3,4,0,a+1.5,0),o.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),o.position.set(t,0,e),this.scene.add(o),this.registerBuildingCollider(t,e,4.5,4.5,i,n)}buildTypeD(t,e,i,n){const r=this.C,o=new Pt;this.addBox(o,r.warmCream,13,7,11,0,3.5,0),this.addBox(o,r.softWhite,13.5,.5,11.5,0,7.25,0),this.addBox(o,r.softWhite,2.8,3.8,1.6,0,4,-6.2),this.addBox(o,r.warmCream,2.5,3.5,1.5,0,4,-6.25);for(const a of[-.8,0,.8])this.addGlassBox(o,3359829,.7,2.5,.2,a,4,-7);this.addBox(o,r.deepClay,2.2,3.2,.3,0,1.6,-5.65),this.addBox(o,r.deepClay,1.8,.4,.3,0,3.35,-5.65),this.addBox(o,r.deepClay,1.2,.4,.3,0,3.8,-5.65);for(const a of[-3.5,3.5])this.addBox(o,r.softWhite,1.8,1.5,.1,a,5.5,-5.5),this.addGlassBox(o,3359829,1.5,1.2,.15,a,5.5,-5.55);this.addBox(o,r.deepClay,11,1,.3,0,.5,-6.65),this.addBox(o,14997960,.8,.5,.08,-5,1,-5.55),this.addRooftopDetails(o,13,11,7,i,n),o.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),o.position.set(t,0,e),this.scene.add(o),this.registerBuildingCollider(t,e,7,6,i,n)}buildTypeE(t,e,i,n){this.C;const r=new Pt,o=12*Math.PI/180;this.addBox(r,6974050,22,4,18,0,2,0),this.addBox(r,1710614,22.1,.3,18.1,0,.15,0);const a=new O(new et(22.5,.3,10),new Z({color:1973786}));a.castShadow=!0,a.receiveShadow=!0,a.rotation.x=o,a.position.set(0,4.5,-4.5),r.add(a);const l=new O(new et(22.5,.3,10),new Z({color:1973786}));l.castShadow=!0,l.receiveShadow=!0,l.rotation.x=-o,l.position.set(0,4.5,4.5),r.add(l),this.addBox(r,1118480,22.5,.5,.6,0,5.2,0);for(const p of[-2,.5,3])this.addBox(r,1118480,22.2,.08,.1,0,3.5,p);this.addBox(r,1118480,4.5,3.5,.2,0,1.75,-9.1),this.addBox(r,2236960,.15,3.5,.2,-2.4,1.75,-9.1),this.addBox(r,2236960,.15,3.5,.2,2.4,1.75,-9.1),this.addBox(r,3359829,8,.8,.15,-11.075,3.5,0),this.addCyl(r,1118480,.1,.1,4,5,-11,2,-9);const c=this.seed(i,n,401),h=new Z({color:c>.5?12876352:4876938}),u=new O(new et(8,.1,1.5),h);u.position.set(0,4.2,-9.85),u.rotation.x=.15,r.add(u);const d=new O(new et(8,.3,.08),h);d.position.set(0,3.85,-10.6),r.add(d);for(const p of[-3.5,3.5]){const g=new O(new Qt(.06,.06,4,5),new Z({color:5592400}));g.position.set(p,2,-10.55),r.add(g)}this.addRooftopDetails(r,22,18,5.2,i,n),r.rotation.y=Math.floor(this.seed(i,n,101)*4)*(Math.PI/2),r.position.set(t,0,e),this.scene.add(r),this.registerBuildingCollider(t,e,11.5,9.5,i,n)}createTEHouses(){this.buildHouseMarbellino(20,20),this.collisionWorld.addBox(20,20,10,7.5),this.buildHousePorthole(-60,20),this.collisionWorld.addBox(-60,20,8,6.5),this.buildHouseTerracotta(20,-60),this.collisionWorld.addBox(20,-60,9,7),this.buildHouseLoggia(-60,-60),this.collisionWorld.addBox(-60,-60,10,7.5),this.buildHouseRokka(60,-20),this.collisionWorld.addBox(60,-20,11,8),this.buildHouseTimberStone(100,60),this.collisionWorld.addBox(100,60,11,7),this.buildHouseSculpturalPlaster(-100,-20),this.collisionWorld.addBox(-100,-20,8,6),this.buildHouseHaussmann(60,-100),this.collisionWorld.addBox(60,-100,11,7),this.buildHouseAngularBay(-140,60),this.collisionWorld.addBox(-140,60,9,6.5),this.buildHouseBrutalistCompound(20,100),this.collisionWorld.addBox(20,100,12,5),this.buildHouseTerracottaMonolith(140,20),this.collisionWorld.addBox(140,20,10,5),this.buildHouseCurvedBalcony(-20,-140),this.collisionWorld.addBox(-20,-140,8,6),this.buildHouseCortenPlaster(-140,-60),this.collisionWorld.addBox(-140,-60,10,5.5),this.buildCoffeeShop(-60,-100),this.collisionWorld.addBox(-60,-100,7,5),this.buildToiletBlock(100,60),this.collisionWorld.addBox(100,60,6,5)}buildHouseMarbellino(t,e){const i=new Pt;this.addBox(i,13945786,18,4,14,0,2,0),this.addBox(i,2763306,20,4,15,0,7,0);for(const n of[-8,-5,-2,1,4,7])this.addBox(i,1710618,.15,4,15,n,7,0);this.addBox(i,3355443,20.5,.5,15.5,0,9.25,0),this.addBox(i,3359829,10,.9,.15,0,3.5,-7.1),this.addBox(i,13157564,10.4,1.1,.1,0,3.5,-7.05);for(const n of[-4,0,4]){const r=new O(new et(1.5,2.5,.15),new Z({color:4478310,emissive:new xt(2241348),emissiveIntensity:.3}));r.position.set(n,7.5,-7.6),i.add(r)}this.addBox(i,1710618,5,3.8,.2,-5.5,1.9,-7.1),this.addBox(i,13157564,2,.3,1,4,.15,-7.5),this.addBox(i,9072736,14,.4,1,0,.2,-8),this.addBox(i,5929546,12,.6,.8,0,.6,-8),i.position.set(t,0,e),this.scene.add(i)}buildHousePorthole(t,e){const i=new Pt;this.addBox(i,12104876,16,5.5,13,0,2.75,0),this.addBox(i,9134144,7,5.5,.3,3.5,2.75,-6.65);for(let n=0;n<5;n++){const r=(n-2)*1.2;this.addBox(i,6965280,7,.2,.4,3.5,2.75+r,-6.55,0,0,Math.PI/7.2)}this.addBox(i,13157564,16.5,.3,13.5,0,5.65,0),this.addBox(i,2763306,17,.5,14,0,5.95,0);{const n=new O(new Qt(1.4,1.4,.15,16),new Z({color:8947848}));n.rotation.x=Math.PI/2,n.position.set(-4,3.5,-6.7),i.add(n)}{const n=new O(new Qt(1.1,1.1,.1,16),new Z({color:2241348,emissive:new xt(1122867),emissiveIntensity:.5}));n.rotation.x=Math.PI/2,n.position.set(-4,3.5,-6.65),i.add(n)}this.addBox(i,3359829,3.5,1.2,.15,1,3.5,-6.7),this.addBox(i,3359829,3.5,1.2,.15,5,3.5,-6.7),this.addBox(i,3811866,1.8,2.8,.3,-6,1.4,-6.8),this.addBox(i,8947848,2.2,3,.2,-6,1.4,-6.65),this.addBox(i,3828282,10,.7,.8,0,.35,-7.5),i.position.set(t,0,e),this.scene.add(i)}buildHouseTerracotta(t,e){const i=new Pt;this.addBox(i,10121296,17.6,7.2,14.6,0,3.5,0),this.addBox(i,12884602,17,7,14,0,3.5,0),this.addBox(i,12884602,17.8,1.5,14.8,0,7.75,0),this.addBox(i,15262940,18.2,.3,15.2,0,8.65,0),this.addBox(i,9068608,2.4,3.5,.3,0,1.75,-7.1),this.addBox(i,9068608,2,.5,.3,0,3.75,-7.1),this.addBox(i,9068608,1.4,.5,.3,0,4.25,-7.1),this.addBox(i,9068608,1.4,2.8,.5,-4,4,-7.2),this.addBox(i,2241348,1,2.4,.15,-4,4,-7.05),this.addBox(i,15262940,1.6,3,.15,-4,4,-6.98);for(const n of[3.2,4,4.8])this.addBox(i,3355443,.9,.08,.15,-4,n,-7.1);this.addBox(i,9068608,1.4,2.8,.5,4,4,-7.2),this.addBox(i,2241348,1,2.4,.15,4,4,-7.05),this.addBox(i,15262940,1.6,3,.15,4,4,-6.98);for(const n of[3.2,4,4.8])this.addBox(i,3355443,.9,.08,.15,4,n,-7.1);for(const n of[-2,2])this.addBox(i,3359829,.15,1.5,1,8.58,4,n),this.addBox(i,3359829,.15,1.5,1,-8.58,4,n);this.addBox(i,10516568,2.5,.5,.8,-4,.25,-7.5),this.addBox(i,10516568,2.5,.5,.8,4,.25,-7.5),this.addBox(i,5933642,2,.5,.6,-4,.65,-7.5),this.addBox(i,5933642,2,.5,.6,4,.65,-7.5);for(const n of[-6,-2,2,6])this.addBox(i,15262940,.8,.8,.2,n,8.4,-7.4);i.position.set(t,0,e),this.scene.add(i)}buildHouseLoggia(t,e){const i=new Pt;this.addBox(i,11578532,20,6,15,0,3,0),this.addBox(i,10131088,20.5,.4,15.5,0,6.2,0),this.addBox(i,10131088,20,.4,3,0,3.2,-10);for(const n of[-7,-3,3,7])this.addCyl(i,8947840,.2,.2,3.2,8,n,1.6,-11);this.addBox(i,3359829,14,2,.2,0,4,-7.5),this.addBox(i,13157564,14.4,2.2,.15,0,4,-7.4);for(const n of[-5,0,5])this.addBox(i,8947840,.15,2,.2,n,4,-7.5);{const n=new O(new et(2.4,2.8,.2),new Z({color:3359829,emissive:new xt(1120290),emissiveIntensity:.2}));n.position.set(5,1.4,-7.5),i.add(n)}this.addBox(i,8947840,2.8,3,.15,5,1.4,-7.4),this.addBox(i,9074784,18,.5,2.5,0,.25,-9),this.addBox(i,4880970,16,.7,2,0,.65,-9),this.addBox(i,8947840,20,.3,.3,0,3.1,-10.2),this.addBox(i,8947840,20,.3,.3,0,3.1,-11.8),i.position.set(t,0,e),this.scene.add(i)}buildHouseRokka(t,e){const i=new Pt;this.addBox(i,12892314,22,4.5,16,0,2.25,0),this.addBox(i,10128506,22.5,.3,9,0,4.75,-3.5,Math.PI*8/180,0,0),this.addBox(i,10128506,22.5,.3,9,0,4.75,3.5,-Math.PI*8/180,0,0),this.addBox(i,6969928,22.5,.6,.8,0,5.1,0),this.addBox(i,10127472,22.5,1,16.5,0,.5,0);{const n=new O(new et(6,3.2,.2),new Z({color:3359829,emissive:new xt(1120290),emissiveIntensity:.3}));n.position.set(0,1.6,-8.1),i.add(n)}this.addBox(i,8022618,6.4,3.5,.15,0,1.75,-8);for(const n of[-2,0,2])this.addBox(i,8947824,.1,3.2,.2,n,1.6,-8.1);this.addBox(i,8947824,6,.1,.2,0,2.2,-8.1),this.addBox(i,3359829,2.5,1.5,.2,-7,3,-8.1),this.addBox(i,3359829,2.5,1.5,.2,7,3,-8.1),this.addBox(i,11575432,.8,4.5,.8,-3.5,2.25,-8.2),this.addBox(i,11575432,.8,4.5,.8,3.5,2.25,-8.2),this.addCyl(i,6969928,.1,.1,4.5,5,-11,2.25,-8),this.addCyl(i,6969928,.1,.1,4.5,5,11,2.25,-8),this.addBox(i,11575432,20,.8,.3,0,.4,-10),i.position.set(t,0,e),this.scene.add(i)}buildHouseTimberStone(t,e){const i=new Pt;this.addBox(i,8947840,22,4,14,0,2,0),this.addBox(i,6710880,22.2,.4,14.2,0,.2,0),this.addBox(i,12088362,22,4.5,13,0,6.25,0);for(let n=0;n<8;n++)this.addBox(i,10116634,22.1,.12,13.1,0,4.3+n*.57,0);this.addBox(i,4870229,5,8.5,14.2,8.5,4.25,0);for(let n=0;n<12;n++){const r=n%2===0?3817541:5593696;this.addBox(i,r,5.1,.3,14.3,8.5,.5+n*.65,0)}this.addBox(i,2763306,22.5,.5,14.5,0,8.75,0);for(const n of[-6,-2,2]){this.addBox(i,1710618,2.8,3.2,.2,n,6,-6.6);const r=new O(new et(2.4,2.9,.15),new Z({color:9087675,emissive:new xt(2770005),emissiveIntensity:.2}));r.position.set(n,6,-6.6),i.add(r)}this.addBox(i,1710618,13,.15,.5,-3,8,-6.8),this.addBox(i,10140364,12.5,.8,.1,-3,7.6,-6.75);for(const n of[-7,-4.5])this.addBox(i,1710618,2.2,1.8,.2,n,2,-7.1),this.addBox(i,3359829,1.8,1.5,.15,n,2,-7);this.addBox(i,6962202,1.8,3.2,.2,2.5,1.6,-7.1),this.addBox(i,12092938,.12,.12,.15,3.1,1.6,-7.1),this.addBox(i,1710618,4,.15,2.5,2.5,3.5,-7.3),this.addCyl(i,1710618,.06,.06,3.5,5,1,1.75,-8.2),this.addCyl(i,1710618,.06,.06,3.5,5,4,1.75,-8.2),this.addBox(i,1710618,8,.18,6,-9,4.1,-5),this.addCyl(i,1118481,.12,.12,4.1,6,-6.5,2.05,-7.8),this.addCyl(i,1118481,.12,.12,4.1,6,-11.5,2.05,-7.8),this.addBox(i,10066329,2,.8,3.5,-9.5,.4,-4.5),this.addBox(i,11184810,1.9,.3,3.4,-9.5,.9,-4.5);for(let n=5;n<=13;n+=.7)this.addBox(i,1710618,.12,1.6,.12,n,.8,-8.5);this.addBox(i,6710880,20,.8,.3,0,.4,-9.5),this.addBox(i,4870229,20,.35,.4,0,.18,-9.5);for(let n=0;n<5;n++)this.addBox(i,14540236,1.4,.08,.7,5,.05,-10.2+n*.9);this.addBox(i,4880954,8,.1,3,5,0,-9.8);for(const[n,r]of[[3.5,-8.5],[6.5,-8]]){this.addCyl(i,5912608,.12,.15,2.5,6,n,1.25,r);const o=new O(new Ui(1,2.2,7),new Z({color:3828266}));o.position.set(n,2.8,r),i.add(o)}this.addBox(i,1710618,3.5,1.8,.2,7.5,6.5,-6.6),this.addBox(i,3359829,3,1.5,.15,7.5,6.5,-6.55),i.position.set(t,0,e),this.scene.add(i)}buildHouseSculpturalPlaster(t,e){const i=new Pt,n=8686698,r=6976085,o=11842732,a=1118481;this.addBox(i,n,14,5.5,12,-3,2.75,0),this.addBox(i,n,7,3.5,12,9,1.75,0),this.addBox(i,r,.3,5.6,12,2.85,2.75,0);const l=new O(new et(11,.35,12.4),new Z({color:n}));l.rotation.z=22*Math.PI/180,l.position.set(.5,8,0),i.add(l);const c=new O(new et(7.5,.35,12.4),new Z({color:o}));c.rotation.z=-52*Math.PI/180,c.position.set(-6.2,8.2,0),i.add(c),this.addBox(i,r,.6,.6,12.4,-3.2,10,0),this.addBox(i,1710618,2.3,4,.5,-3,2,-6.25),this.addBox(i,a,2.6,4.3,.2,-3,2.1,-6.05);const h=new O(new et(2,3.6,.12),new Z({color:2767428,emissive:new xt(661538),emissiveIntensity:.3}));h.position.set(-3,2.1,-6.1),i.add(h),this.addBox(i,1710618,1.6,1.6,.4,8.5,2,-6.2),this.addBox(i,a,1.8,1.8,.18,8.5,2,-6.05),this.addBox(i,a,.4,.4,.4,-6.5,4.2,-6.05),this.addBox(i,a,.4,.4,.4,6.5,3.4,-6.05);for(const p of[-6.5,6.5]){const g=new O(new et(.5,.08,.3),new Z({color:16772812,emissive:new xt(16764040),emissiveIntensity:.6}));g.position.set(p,p===-6.5?3.95:3.15,-6.07),i.add(g)}const u=8.5,d=-11;for(let p=-4;p<=4;p++){const g=p/4*40*Math.PI/180,x=u*Math.sin(g),m=d+u*(Math.cos(g)-1),f=new O(new et(2,1.2,.35),new Z({color:n}));f.rotation.y=g,f.position.set(x,.6,m),i.add(f);const b=new O(new et(2,.12,.45),new Z({color:12631720}));b.rotation.y=g,b.position.set(x,1.26,m),i.add(b)}this.addBox(i,r,2.5,.2,1,-3,.1,-7.5),i.position.set(t,0,e),this.scene.add(i)}buildHouseHaussmann(t,e){const i=new Pt,n=15261384,r=15788244,o=13154972,a=1118481;this.addBox(i,n,22,9.5,14,0,4.75,0);for(let h=0;h<5;h++)this.addBox(i,o,22.3,.14,14.3,0,.5+h*.88,0);for(let h=0;h<4;h++)this.addBox(i,o,22.3,.12,14.3,0,5.4+h*.85,0);this.addBox(i,r,22.6,.5,14.6,0,4.75,0),this.addBox(i,o,22.8,.2,14.8,0,5.05,0),this.addBox(i,n,22.5,.3,14.5,0,5.25,0),this.addBox(i,n,23.2,.5,15.2,0,9.75,0),this.addBox(i,r,22.8,.8,14.8,0,10.15,0),this.addBox(i,o,23.4,.25,15.4,0,10.55,0),this.addBox(i,r,4,11.5,4,-10,5.75,-6);for(let h=0;h<6;h++)this.addBox(i,o,4.2,.12,4.2,-10,.5+h*1.75,-6);this.addBox(i,n,4.4,.4,4.4,-10,5,-6),this.addBox(i,n,4.6,.4,4.6,-10,11.3,-6),this.addBox(i,r,4.4,.6,4.4,-10,11.75,-6),this.addBox(i,o,4.8,.25,4.8,-10,12.12,-6),this.addBox(i,n,2.5,1,2.5,-10,12.75,-6);for(const h of[-6.5,-1,4.5]){this.addBox(i,o,2,4.2,.5,h,2.1,-7.25),this.addBox(i,r,1.7,4,.2,h,2.1,-7.05);const u=new O(new et(1.35,3.5,.12),new Z({color:9087931,emissive:new xt(1714739),emissiveIntensity:.15}));u.position.set(h,2.1,-7),i.add(u),this.addBox(i,r,1.7,.12,.15,h,3.2,-7.05)}for(const h of[-6.5,4.5]){this.addBox(i,o,2,3.8,.5,h,7.5,-7.25),this.addBox(i,r,1.7,3.5,.2,h,7.5,-7.05);const u=new O(new et(1.35,3,.12),new Z({color:9087931,emissive:new xt(1714739),emissiveIntensity:.15}));u.position.set(h,7.5,-7),i.add(u),this.addBox(i,r,1.7,.12,.15,h,8.5,-7.05),this.addBox(i,n,3.4,.28,1.4,h,5.66,-7.9),this.addBox(i,o,3.5,.45,1.5,h,5.38,-7.95);for(let d=0;d<5;d++){const p=h-1.3+d*.65;this.addBox(i,a,.07,1,.07,p,6.2,-8.4)}this.addBox(i,a,3.2,.09,.09,h,6.72,-8.4),this.addBox(i,a,3.2,.09,.09,h,5.82,-8.4),this.addBox(i,a,.07,1,.07,h-1.3,6.2,-8.4,0,0,.35),this.addBox(i,a,.07,1,.07,h+1.3,6.2,-8.4,0,0,-.35)}this.addBox(i,r,5,6.5,.22,9.5,3.75,-7.05);const l=new O(new et(4.5,6,.12),new Z({color:9087931,emissive:new xt(1714739),emissiveIntensity:.12}));l.position.set(9.5,3.75,-7),i.add(l);for(let h=0;h<3;h++)this.addBox(i,r,5,.1,.15,9.5,1+h*2,-7);for(const h of[7.5,9.5,11.5])this.addBox(i,r,.1,6,.15,h,3.75,-7);this.addBox(i,o,3.8,5.5,.6,1.5,2.75,-7.4),this.addBox(i,r,2.8,4.8,.2,1.5,2.4,-7.1);const c=new O(new et(2.2,4.2,.12),new Z({color:9087931,emissive:new xt(660768),emissiveIntensity:.2}));c.position.set(1.5,2.4,-7.05),i.add(c),this.addBox(i,13937232,.1,.1,.1,2.4,2.2,-7.06),this.addBox(i,o,22.5,.3,14.5,0,.15,0),i.position.set(t,0,e),this.scene.add(i)}buildHouseAngularBay(t,e){const i=new Pt,n=15789022,r=12876378,o=3809296,a=1118481;this.addBox(i,n,18,4,13,0,2,0),this.addBox(i,n,18,4,12,0,6,0),this.addBox(i,n,8,4,2.5,5,6,-7.25),this.addBox(i,n,3,10,2.5,6.5,5,-7.5),this.addBox(i,r,10,.5,14,-4.5,8.5,0,0,0,.44),this.addBox(i,r,10,.5,14,4.5,8.5,0,0,0,-.44),this.addBox(i,o,1.5,.5,14.5,0,10.5,0),this.addBox(i,o,19,.3,13.5,0,8.05,0),this.addBox(i,o,19,.2,1.2,0,8.05,-7.3);for(const l of[-6.5,0])this.addBox(i,15658734,2.6,2,.12,l,1.8,-6.56),this.addBox(i,3359829,2.2,1.6,.15,l,1.8,-6.5);for(const l of[-6.5,0])this.addBox(i,15658734,2.6,2,.12,l,5.8,-6.56),this.addBox(i,3359829,2.2,1.6,.15,l,5.8,-6.5);for(let l=0;l<4;l++)this.addBox(i,a,.08,1,.08,-8.5+l*.65,5.5,-6.7);this.addBox(i,a,2.4,.08,.08,-7.02,6.05,-6.7),this.addBox(i,a,2.4,.08,.08,-7.02,5,-6.7),i.position.set(t,0,e),this.scene.add(i)}buildHouseBrutalistCompound(t,e){const i=new Pt,n=10524792,r=8947840;this.addBox(i,n,7,7,11,-8.5,3.5,0),this.addBox(i,n,6,5,10,-1,2.5,.5),this.addBox(i,n,6,6,11,5.5,3,-.5),this.addBox(i,n,5,4,9,11,2,0),this.addBox(i,n,24,1.5,9,0,.75,.5),this.addBox(i,r,4,.25,2.5,-8.5,7.25,-6.2),this.addBox(i,r,4,.25,2.5,5.5,6.25,-6.2),this.addBox(i,2241348,4,5.5,.15,-8.5,3.5,-5.6),this.addBox(i,2241348,3.5,4.5,.15,5.5,3,-5.6),this.addBox(i,n,8,5,.4,2,2.5,-6.5,0,.26,0);const o=14,a=9,l=-Math.PI*.35,c=Math.PI*.35;for(let h=0;h<a;h++){const u=h/(a-1),d=l+(c-l)*u,p=Math.sin(d)*o,g=Math.cos(d)*o-o+4;this.addBox(i,n,3.5,1.5,.4,p,.75,g,0,-d,0)}for(const h of[-3,2.5]){this.addCyl(i,5913114,.15,.2,3,5,h,1.5,-4);const u=new O(new Ze(1.2,6,5),new Z({color:3828266}));u.position.set(h,4,-4),i.add(u)}i.position.set(t,0,e),this.scene.add(i)}buildHouseTerracottaMonolith(t,e){const i=new Pt,n=12284e3,r=2759194,o=4880954;this.addBox(i,n,20,3,.5,0,1.5,-9.5),this.addBox(i,r,20.2,.1,.55,0,1,-9.5),this.addBox(i,r,20.2,.1,.55,0,2,-9.5),this.addBox(i,n,20,6,10,0,3,-2),this.addBox(i,r,20.2,.1,10.1,0,2,-2),this.addBox(i,r,20.2,.1,10.1,0,4,-2),this.addBox(i,n,20.3,.4,10.3,0,6.2,-2),this.addBox(i,o,18,.3,1.8,0,.15,-7.5);for(let a=-8;a<=8;a+=2.5){const l=new O(new Ui(.2,.8,5),new Z({color:5933642}));l.position.set(a,.55,-7.5),i.add(l)}this.addBox(i,1118481,1.2,3.5,.2,0,3.5,-7.05),this.addBox(i,2241348,.8,3,.15,0,3.5,-7),i.position.set(t,0,e),this.scene.add(i)}buildHouseCurvedBalcony(t,e){const i=new Pt,n=15261900,r=15789544,o=11053216,a=1118481;this.addBox(i,n,16,4,12,0,2,0),this.addBox(i,r,16,4,12,0,6,0),this.addBox(i,r,16.5,.3,12.5,0,8.15,0),this.addBox(i,a,16.6,.2,12.6,0,8.3,0);const l=5,c=14,h=-Math.PI*.5,u=Math.PI*.5;for(let d=0;d<c;d++){const p=d/(c-1),g=h+(u-h)*p,x=Math.sin(g)*l,m=-Math.cos(g)*l-3.5;this.addBox(i,o,1.3,2,.5,x,5.5,m,0,-g,0)}for(const d of[-5,0,5])this.addBox(i,4473924,2.5,2,.15,d,1.8,-6.1),this.addBox(i,2241348,2,1.6,.12,d,1.8,-6);this.addCyl(i,a,.1,.1,8,5,-8,4,-6.1),this.addCyl(i,a,.1,.1,8,5,8,4,-6.1),this.addBox(i,a,.3,.3,.3,-2,2.5,-6.15),this.addBox(i,r,17,.25,1.5,0,8,-7.2,.1,0,0),this.addBox(i,a,17.2,.1,1.6,0,8.12,-7.2,.1,0,0),i.position.set(t,0,e),this.scene.add(i)}buildHouseCortenPlaster(t,e){const i=new Pt,n=4868682,r=12081696,o=3684408,a=9060368;this.addBox(i,n,12,8,11,-7,4,0),this.addBox(i,n,12.3,.4,11.3,-7,8.2,0),this.addBox(i,r,8,8.5,11,5,4.25,0),this.addBox(i,r,8.3,.4,11.3,5,8.7,0),this.addBox(i,o,2,9.5,11,-.5,4.75,0);for(let c=0;c<6;c++)this.addBox(i,a,.15,8.5,11.1,1.5+c*1.2,4.25,0);this.addCyl(i,13421704,.15,.15,.5,6,-5,5,-5.6),this.addCyl(i,13421704,.15,.15,.5,6,-9,5,-5.6),this.addBox(i,1118481,2.5,1.8,.3,-6,4.5,-5.7),this.addBox(i,2241348,2,1.4,.15,-6,4.5,-5.6),this.addBox(i,1118481,2.5,1.8,.3,-10,2.5,-5.7),this.addBox(i,2241348,2,1.4,.15,-10,2.5,-5.6),this.addCyl(i,9132587,.2,.3,8,6,-15,4,-3);const l=new O(new Ui(2.5,1.5,8),new Z({color:2775578}));l.position.set(-15,8.75,-3),i.add(l),i.position.set(t,0,e),this.scene.add(i)}buildCoffeeShop(t,e){const i=new Pt;this.addBox(i,15788248,14,4,10,0,2,0),this.addBox(i,15261904,14.2,.18,10.2,0,4.09,0),this.addBox(i,1118481,14.6,.38,10.6,0,4.19,0);for(const r of[-3.8,3.8]){this.addBox(i,1118481,4,3.8,.14,r,2.1,-5.08);const o=new O(new et(3.5,3.4,.1),new Z({color:13140032,emissive:new xt(10115616),emissiveIntensity:.7}));o.position.set(r,2.1,-5.06),i.add(o)}this.addBox(i,1118481,2,3,.14,0,1.5,-5.08),this.addBox(i,8014368,1.6,2.8,.2,0,1.4,-5.1),this.addBox(i,13410400,.1,.1,.12,.5,1.4,-5.1),this.addBox(i,12876352,13.5,.28,4,0,3.22,-7),this.addBox(i,10770984,13.5,.6,.18,0,2.95,-9.05);for(const r of[-4.5,0,4.5])this.addCyl(i,8947832,.07,.07,3,5,r,1.5,-9.1);this.addBox(i,16777215,5,.36,.12,0,3.06,-8.96);for(const[r,o]of[[-5,-11.5],[0,-11.5],[5,-11.5]]){this.addCyl(i,9068608,.75,.75,.1,12,r,1.12,o),this.addCyl(i,6963232,.07,.07,1.12,6,r,.56,o);for(const a of[-1,1])this.addCyl(i,9068608,.32,.32,.09,8,r+a*.85,.82,o),this.addCyl(i,6963232,.05,.05,.82,5,r+a*.85,.41,o)}for(let r=0;r<5;r++)this.addCyl(i,16777215,.22-r*.008,.24-r*.008,.3,8,7.1,.22+r*.28,-3.5);this.addBox(i,3355445,1.1,1.7,.12,-3.5,1.1,-5.1),this.addBox(i,15658734,.72,.08,.05,-3.5,1.6,-5.04),this.addBox(i,15658734,.55,.08,.05,-3.5,1.42,-5.04),this.addBox(i,15658734,.63,.08,.05,-3.5,1.24,-5.04),this.addBox(i,15658734,.48,.08,.05,-3.5,1.06,-5.04);for(const r of[-4,0,4]){const o=new O(new et(.25,.25,.25),new Z({color:16764040,emissive:new xt(16755268),emissiveIntensity:.8}));o.position.set(r,3.7,-2),i.add(o)}this.addCyl(i,3355443,.3,.3,12,8,0,6,-8);const n=new O(new et(10,3,.4),new Z({color:13918762,emissive:new xt(9121808),emissiveIntensity:.6}));n.position.set(0,13,-8),n.castShadow=!0,i.add(n),this.addBox(i,16777215,8,.2,.5,0,14.2,-7.85),this.addBox(i,16777215,8,.2,.5,0,12.8,-7.85),this.addCyl(i,16777215,.8,1,1.5,12,0,15.5,-8),this.addCyl(i,7027242,.4,.4,.3,8,0,16.4,-8),i.position.set(t,0,e),this.scene.add(i)}buildWorkshop(t,e){const i=new Pt,n=4868676,r=2236960,o=15657176,a=3355440,l=1118480;this.addBox(i,n,30,8,20,0,4,0),this.addBox(i,1710616,30.2,.35,20.2,0,.18,0);const c=12*Math.PI/180,h=new Z({color:r}),u=new O(new et(30.5,.35,11),h);u.castShadow=!0,u.rotation.x=c,u.position.set(0,8.6,-4.5),i.add(u);const d=new O(new et(30.5,.35,11),h);d.castShadow=!0,d.rotation.x=-c,d.position.set(0,8.6,4.5),i.add(d),this.addBox(i,1118480,30.5,.55,.8,0,9.3,0),this.addBox(i,o,24,3.2,.45,0,7.4,-10.23),this.addBox(i,a,22,2.5,.28,0,7.4,-10.25),this.addBox(i,16775920,24.2,.22,.46,0,9.11,-10.23),this.addBox(i,16775920,24.2,.22,.46,0,5.89,-10.23),this.addBox(i,16775920,.22,3.2,.46,-12.11,7.4,-10.23),this.addBox(i,16775920,.22,3.2,.46,12.11,7.4,-10.23),this.addBox(i,12674667,24,.3,.44,0,5.75,-10.22),this.addBox(i,16763972,8,.65,.35,0,5.5,-10.2),this.addBox(i,2763296,7.5,.42,.38,0,5.5,-10.21),this.addBox(i,l,12,5,.25,0,2.5,-10.15),this.addBox(i,2236960,.2,5,.25,-6.2,2.5,-10.15),this.addBox(i,2236960,.2,5,.25,6.2,2.5,-10.15);for(let f=1;f<=4;f++)this.addBox(i,1710616,11.8,.08,.28,0,f,-10.14);this.addBox(i,2236960,12.6,.4,.28,0,5.2,-10.14);const p=3359829;for(let f=-6;f<=6;f+=4)this.addBox(i,p,.16,1.2,2.8,15.09,7.2,f),this.addBox(i,p,.16,1.2,2.8,-15.09,7.2,f);this.addBox(i,2236960,.2,.18,20,15.1,7.9,0),this.addBox(i,2236960,.2,.18,20,15.1,6.6,0),this.addBox(i,2236960,.2,.18,20,-15.1,7.9,0),this.addBox(i,2236960,.2,.18,20,-15.1,6.6,0),this.addCyl(i,2236960,.12,.12,8,5,-15,4,-10),this.addCyl(i,2236960,.12,.12,8,5,15,4,-10),this.addCyl(i,2236960,.12,.12,8,5,-15,4,10),this.addCyl(i,2236960,.12,.12,8,5,15,4,10),this.addCyl(i,12884602,.85,.9,1.5,10,9.5,.75,-11.5),this.addCyl(i,6974050,.85,.9,1.5,10,9.5,2.35,-11.5),this.addCyl(i,8947840,.92,.92,.12,10,9.5,1.56,-11.5),this.addCyl(i,8947840,.92,.92,.12,10,9.5,3.16,-11.5),this.addCyl(i,12884602,.85,.9,1.5,10,11.2,.75,-12.2),this.addCyl(i,8947840,.92,.92,.12,10,11.2,1.56,-12.2),this.addBox(i,8018488,4.5,.18,2.5,10.2,.09,-11.8),this.addBox(i,9074776,6,1,2.2,0,.5,-9.2),this.addBox(i,13154448,6.3,.18,2.4,0,1.09,-9.2),this.addBox(i,15658700,.8,.05,1,.8,1.19,-9.3),this.addBox(i,4473924,.12,.25,.12,.8,1.22,-9),this.addBox(i,5921362,2.8,1.8,2.8,-8.5,.9,-11.5);const g=new O(new Qt(.75,.75,2.2,10),new Z({color:8947840}));g.rotation.z=35*Math.PI/180,g.position.set(-8.5,1.6,-11.5),g.castShadow=!0,i.add(g),this.addCyl(i,3355440,.4,.4,.3,8,-8.5,.2,-10.8),this.addBox(i,4868676,3.5,2.2,2.5,-11.5,1.1,-13),this.addBox(i,8947840,3,.5,2,-11.5,2.35,-13),this.addBox(i,6710880,2.2,1.2,1.4,-11.5,3.1,-13);const x=new Z({color:10131600}),m=new O(new fe(20,8),x);m.rotation.x=-Math.PI/2,m.position.set(0,.008,-14),m.receiveShadow=!0,i.add(m),this.addBox(i,o,.3,2.5,6,15.16,4,0),this.addBox(i,a,.32,2,5.5,15.17,4,0),i.position.set(t,0,e),this.scene.add(i),this.collisionWorld.addBox(t,e,15.5,10.5)}createZebraCrossings(){const t=new Z({color:15658734}),e=new Z({color:1118481});for(let i=-200;i<=200;i+=40)for(let n=-200;n<=200;n+=40){if(Math.abs(i)>200||Math.abs(n)>200)continue;const r=[-3.2,-1.6,0,1.6,3.2],o=[-2.4,-.8,.8,2.4],a=2;for(const l of r){const c=new O(new et(.8,.03,a),t);c.position.set(i+l,.05,n-5),this.scene.add(c)}for(const l of o){const c=new O(new et(.8,.03,a),e);c.position.set(i+l,.04,n-5),this.scene.add(c)}for(const l of r){const c=new O(new et(.8,.03,a),t);c.position.set(i+l,.05,n+5),this.scene.add(c)}for(const l of o){const c=new O(new et(.8,.03,a),e);c.position.set(i+l,.04,n+5),this.scene.add(c)}for(const l of r){const c=new O(new et(a,.03,.8),t);c.position.set(i-5,.05,n+l),this.scene.add(c)}for(const l of o){const c=new O(new et(a,.03,.8),e);c.position.set(i-5,.04,n+l),this.scene.add(c)}for(const l of r){const c=new O(new et(a,.03,.8),t);c.position.set(i+5,.05,n+l),this.scene.add(c)}for(const l of o){const c=new O(new et(a,.03,.8),e);c.position.set(i+5,.04,n+l),this.scene.add(c)}}}createRoadCorners(){const t=new Z({color:13156528}),e=new Z({color:11051160}),i=[{dx:-6,dz:-6,theta:3*Math.PI/2},{dx:6,dz:-6,theta:Math.PI},{dx:-6,dz:6,theta:0},{dx:6,dz:6,theta:Math.PI/2}];for(let n=-200;n<=200;n+=40)for(let r=-200;r<=200;r+=40)for(const{dx:o,dz:a,theta:l}of i){const c=n+o,h=r+a,u=new O(new Jo(2,24,l,Math.PI/2),t);u.rotation.x=-Math.PI/2,u.position.set(c,.021,h),u.receiveShadow=!0,this.scene.add(u);const d=new O(new sr(1.8,2,24,1,l,Math.PI/2),e);d.rotation.x=-Math.PI/2,d.position.set(c,.08,h),d.receiveShadow=!0,this.scene.add(d)}}onUpdate(t){this.updateCallbacks.push(t)}createSkyDome(){const t=new Ze(800,32,16);t.scale(-1,1,1);const e=new Ae({uniforms:{topColor:{value:new xt(4491468)},bottomColor:{value:new xt(12970229)},offset:{value:100},exponent:{value:.8}},vertexShader:`
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
      `,side:Ce,depthWrite:!1}),i=new O(t,e);this.scene.add(i)}createClouds(){const t=new Z({color:16777215,transparent:!0,opacity:.85});for(let e=0;e<10;e++){const i=new Pt,n=3+Math.floor(Math.random()*4);for(let r=0;r<n;r++){const o=8+Math.random()*12,a=new O(new Ze(o,7,5),t);a.position.set(r*15-n*7+(Math.random()-.5)*10,(Math.random()-.5)*8,(Math.random()-.5)*15),i.add(a)}i.position.set((Math.random()-.5)*600,80+Math.random()*60,(Math.random()-.5)*600),this.scene.add(i),this.clouds.push({mesh:i,speed:.3+Math.random()*.7})}}createPuddles(){const t=new Z({color:8952234,transparent:!0,opacity:.35});for(let e=0;e<20;e++){const i=2+Math.random()*4,n=1+Math.random()*2,r=new O(new fe(i,n),t);r.rotation.x=-Math.PI/2,r.position.set((Math.random()-.5)*300,.015,(Math.random()-.5)*300),this.scene.add(r)}}addRooftopDetails(t,e,i,n,r,o){const a=this.seed(r,o,200);if(a>.3){const l=new Pt;this.addBox(l,8947840,1.5,.6,1,0,0,0),this.addBox(l,6710880,1.5,.1,.8,0,.35,.05),l.position.set(e/2-2,n+.3,i/2-2),t.add(l)}if(a>.7&&n>8){const l=new O(new Qt(1,1,1.8,10),new Z({color:9139029}));l.position.set(-e/2+2,n+.9,0),t.add(l);for(const[c,h]of[[-.7,-.7],[.7,-.7],[-.7,.7],[.7,.7]]){const u=new O(new Qt(.06,.06,1.5,4),new Z({color:5592400}));u.position.set(-e/2+2+c,n+.1,h),t.add(u)}}if(a>.5&&a<.8){const l=new O(new Ze(.4,8,4,0,Math.PI*2,0,Math.PI/2),new Z({color:13421772}));l.position.set(e/2-1,n+.2,-i/2+1),l.rotation.x=-Math.PI/4,t.add(l)}if(a<.4){const l=new O(new Qt(.04,.04,3,4),new Z({color:4473924}));l.position.set(0,n+1.5,0),t.add(l),this.addBox(t,4473924,2,.05,.05,0,n+2.5,0)}a>.4&&a<.6&&this.addBox(t,7829360,2,.4,.4,e/4,n+.2,-i/4)}addHydrant(t,e){const i=new Pt,n=new Z({color:13378082}),r=new Z({color:11145489}),o=new O(new Qt(.25,.28,.6,8),n);o.position.set(0,.3,0),i.add(o);const a=new O(new Qt(.18,.18,.12,8),r);a.position.set(0,.66,0),i.add(a);for(const l of[-1,1]){const c=new O(new Qt(.06,.06,.2,6),n);c.rotation.z=Math.PI/2,c.position.set(l*.3,.3,0),i.add(c)}i.position.set(t,0,e),this.scene.add(i)}addBin(t,e){const i=new Pt,n=new Z({color:4473924}),r=new Z({color:5592405}),o=new O(new Qt(.2,.22,.7,8),n);o.position.set(0,.35,0),i.add(o);const a=new O(new Qt(.22,.22,.08,8),r);a.position.set(0,.74,0),i.add(a),i.position.set(t,0,e),this.scene.add(i)}addBollard(t,e){const i=new Pt,n=new Z({color:10066329}),r=new Z({color:7829367}),o=new O(new Qt(.1,.1,.6,8),n);o.position.set(0,.3,0),i.add(o);const a=new O(new Qt(.14,.14,.08,8),r);a.position.set(0,.04,0),i.add(a),i.position.set(t,0,e),this.scene.add(i)}addBench(t,e,i=0){const n=new Pt,r=new Z({color:9134144}),o=new Z({color:5592405}),a=new O(new et(1.2,.1,.4),r);a.position.set(0,.45,0),n.add(a);for(const c of[-.5,.5]){const h=new O(new et(.05,.4,.4),o);h.position.set(c,.2,0),n.add(h)}const l=new O(new et(1.2,.3,.08),r);l.position.set(0,.75,-.16),n.add(l),n.rotation.y=i,n.position.set(t,0,e),this.scene.add(n)}addBusStop(t,e,i=0){const n=new Pt,r=new Z({color:13421772}),o=new Z({color:4482730,transparent:!0,opacity:.7}),a=new O(new Qt(.05,.05,3.5,6),r);a.position.set(0,1.75,0),n.add(a);const l=new O(new et(2,.05,.8),o);l.position.set(0,3.3,.4),n.add(l);const c=new O(new et(.05,2.5,.8),o);c.position.set(0,2,0),n.add(c),n.rotation.y=i,n.position.set(t,0,e),this.scene.add(n)}addStreetLight(t,e,i=0,n=!1){const r=new Pt,o=new Z({color:1118481}),a=new Z({color:16771232,transparent:!0,opacity:.06}),l=new O(new Qt(.08,.1,6,6),o);l.position.set(0,3,0),r.add(l);const c=new O(new et(.08,.08,1.5),o);c.position.set(0,6,-.75),c.rotation.x=-.2,r.add(c);const h=new O(new et(.4,.15,.3),o);h.position.set(0,5.9,-1.4),r.add(h);const u=new O(new Ui(1.5,3,8,1,!0),a);if(u.rotation.x=Math.PI,u.position.set(0,4.4,-1.4),r.add(u),r.rotation.y=i,r.position.set(t,0,e),this.scene.add(r),n){const d=new P0(16771232,.8,15);d.position.set(t+Math.sin(i+Math.PI)*1.4,5.9,e+Math.cos(i+Math.PI)*1.4),this.scene.add(d)}}addTrafficLight(t,e,i=0){const n=new Pt,r=new Z({color:1118481}),o=new O(new Qt(.07,.09,4.5,6),r);o.position.set(0,2.25,0),n.add(o);const a=new O(new et(.5,1.4,.4),r);a.position.set(0,4.7,0),n.add(a);const l=[16720384,16750848,52292];for(let c=0;c<3;c++){const h=new O(new Qt(.15,.15,.08,8),new Z({color:l[c]}));h.rotation.x=Math.PI/2,h.position.set(0,5.25-c*.45,-.21),n.add(h)}n.rotation.y=i,n.position.set(t,0,e),this.scene.add(n)}createStreetLights(){let i=0;const n=20;for(let r=-160;r<=160;r+=40)for(let o=-160;o<=160;o+=20){const c=Math.sqrt(r*r+o*o)<80&&i<n,h=(o%40+40)%40;Math.min(h,40-h)>6&&(this.addStreetLight(o,r-5.2,0,c),this.addStreetLight(o,r+5.2,Math.PI,c),c&&(i+=2));const u=(o%40+40)%40;if(Math.min(u,40-u)>6&&(this.addStreetLight(r+5.2,o,Math.PI/2,c),this.addStreetLight(r-5.2,o,-Math.PI/2,c),c&&(i+=2)),i>=n)return}}createTrafficLights(){for(let n=-160;n<=160;n+=40)for(let r=-160;r<=160;r+=40)this.addTrafficLight(n-5.2,r-5.2,Math.PI/4),this.addTrafficLight(n+5.2,r-5.2,-Math.PI/4),this.addTrafficLight(n-5.2,r+5.2,3*Math.PI/4),this.addTrafficLight(n+5.2,r+5.2,-3*Math.PI/4)}createStreetFurniture(){for(let i=-160;i<=160;i+=40)for(let n=-160;n<=160;n+=20){const r=this.seed(i,n,300),o=this.seed(i,n,301);if(r>.4){const c=r>.7?1:-1,h=(this.seed(n,i,302)-.5)*4,u=(n%40+40)%40;Math.min(u,40-u)>8&&(o<.3?this.addHydrant(n+h,i+c*5.2):o<.5?this.addBin(n+h,i+c*5.2):o<.65?this.addBollard(n+h,i+c*5.2):o<.75&&this.addBench(n+h,i+c*5.2))}const a=this.seed(n,i,303),l=this.seed(n,i,304);if(a>.4){const c=a>.7?1:-1,h=(this.seed(i,n,305)-.5)*4,u=(n%40+40)%40;Math.min(u,40-u)>8&&(l<.3?this.addHydrant(i+c*5.2,n+h):l<.5?this.addBin(i+c*5.2,n+h):l<.65?this.addBollard(i+c*5.2,n+h):l<.75&&this.addBench(i+c*5.2,n+h,Math.PI/2))}}for(let i=-160;i<=160;i+=40)for(let n=-160;n<=160;n+=160){const r=(n%40+40)%40;Math.min(r,40-r)>8&&this.addBusStop(n,i+5.5,0);const o=(n%40+40)%40;Math.min(o,40-o)>8&&this.addBusStop(i+5.5,n,Math.PI/2)}this.createStreetLights(),this.createTrafficLights()}addGlassBox(t,e,i,n,r,o,a,l){const c=Math.random()>.6?new xt(2241348):new xt(1122867),h=new O(new et(i,n,r),new Z({color:e,emissive:c,emissiveIntensity:Math.random()*.4}));h.position.set(o,a,l),h.castShadow=!0,h.receiveShadow=!0,t.add(h)}buildToiletBlock(t,e){const i=new Pt;this.addBox(i,11577496,10,3.5,8,0,1.75,0),this.addBox(i,10064008,11,.3,9,0,3.65,0),this.addBox(i,2236960,1.6,2.4,.2,-2.2,1.2,-4.05),this.addBox(i,2236960,1.6,2.4,.2,2.2,1.2,-4.05),this.addBox(i,15263968,10.1,.4,8.1,0,1.8,0),this.addBox(i,3359829,8,.8,.15,0,3.1,-4.05),this.addBox(i,16777215,6,.2,.1,0,3.2,-4.03),this.addCyl(i,4473920,.15,.15,8,6,0,4,-5.5),this.addBox(i,2201331,4,1.5,.3,0,8.75,-5.5),this.addBox(i,16777215,3,.25,.1,0,9,-5.38),this.addBox(i,16777215,3,.25,.1,0,8.5,-5.38);const n=new Z({color:6600182,emissive:new xt(1402304),emissiveIntensity:.4}),r=new O(new Ze(.7,8,6),n);r.position.set(0,10.5,-5.5),i.add(r),i.position.set(t,0,e),this.scene.add(i)}start(){const t=e=>{const i=Math.min((e-this.lastTime)/1e3,.05);this.lastTime=e;for(const n of this.updateCallbacks)n(i);for(const n of this.clouds)n.mesh.position.x-=n.speed*i,n.mesh.position.x<-350&&(n.mesh.position.x=350);this.composer.render(),requestAnimationFrame(t)};requestAnimationFrame(t)}}const gl={Jose:{x:-80,z:-40},Jarrad:{x:40,z:-80},Matt:{x:80,z:40},Phil:{x:-40,z:80},Tsuyoshi:{x:120,z:-40},Fabio:{x:-120,z:40},Joe:{x:0,z:-120}};class q0{constructor(t){F(this,"scene");F(this,"crewGroups",new Map);this.scene=t}spawnCrewAtCityPositions(){const t={Jose:()=>this.buildJose(),Jarrad:()=>this.buildJarrad(),Matt:()=>this.buildMatt(),Phil:()=>this.buildPhil(),Tsuyoshi:()=>this.buildTsuyoshi(),Fabio:()=>this.buildFabio(),Joe:()=>this.buildJoe()};for(const[e,i]of Object.entries(gl)){const n=new Pt,r=t[e]();r.scale.set(2,2,2),n.add(r);const o=this._buildPickupIndicator();o.position.set(0,.05,0),n.add(o);const a=document.createElement("canvas");a.width=256,a.height=64;const l=a.getContext("2d");l.fillStyle="rgba(0,0,0,0.7)",l.roundRect(4,4,248,56,10),l.fill(),l.fillStyle="#FFE566",l.font="bold 36px Arial, sans-serif",l.textAlign="center",l.textBaseline="middle",l.fillText(e,128,32);const c=new cl(a),h=new gc({map:c,transparent:!0,depthTest:!1}),u=new E0(h);u.scale.set(4,1,1),u.position.set(0,8,0),n.add(u),n.position.set(i.x,0,i.z),n.rotation.y=0,this.scene.add(n),this.crewGroups.set(e,n)}}getCrewPosition(t){return gl[t]??{x:0,z:0}}hideCrew(t){const e=this.crewGroups.get(t);e&&(e.visible=!1)}showAllCrew(){for(const t of this.crewGroups.values())t.visible=!0}_buildPickupIndicator(){const t=new Qt(2.2,2.2,.08,20),e=new Z({color:16766720,transparent:!0,opacity:.85});return new O(t,e)}createShirtTexture(t,e,i=16777215){const n=document.createElement("canvas");n.width=512,n.height=512;const r=n.getContext("2d");r.fillStyle=`#${e.toString(16).padStart(6,"0")}`,r.fillRect(0,0,512,512);const o=`#${i.toString(16).padStart(6,"0")}`;r.strokeStyle=o,r.lineWidth=8,r.beginPath(),r.moveTo(256,380),r.lineTo(256,220),r.stroke();const a=[[256,320,160,240],[256,320,352,240],[256,270,180,200],[256,270,332,200],[256,240,200,170],[256,240,312,170],[256,215,230,155],[256,215,282,155]];for(const[c,h,u,d]of a)r.beginPath(),r.moveTo(c,h),r.lineTo(u,d),r.stroke();r.fillStyle=o;const l=[[160,240],[352,240],[180,200],[332,200],[200,170],[312,170],[230,155],[282,155],[256,145]];for(const[c,h]of l)r.beginPath(),r.arc(c,h,10,0,Math.PI*2),r.fill();return r.fillStyle=o,r.font="bold 44px Arial, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText("TROWELED",256,430),r.fillText("EARTH",256,480),r.font="28px Arial, sans-serif",r.fillStyle=o,r.globalAlpha=.6,r.fillText(t.toUpperCase(),256,395),r.globalAlpha=1,new cl(n)}buildJose(){const t=new Pt,e=12884592,i=657930,n=2763306,r=1709072;this.addBox(t,n,.38,.9,.32,-.16,.45,0),this.addBox(t,n,.38,.9,.32,.16,.45,0),this.addBox(t,i,.72,1,.42,0,1.4,0),this.addBox(t,14540253,.22,.22,.05,-.05,1.42,.22),this.addBox(t,i,.21,.82,.21,-.5,1.22,0),this.addBox(t,i,.21,.82,.21,.5,1.22,0),this.addBox(t,e,.18,.18,.18,-.5,.78,0),this.addBox(t,e,.18,.18,.18,.5,.78,0),this.addBox(t,e,.22,.22,.22,0,2.01,0),this.addSphere(t,e,.38,0,2.5,0),this.addSphere(t,r,.46,0,2.58,0),this.addBox(t,r,.38,.6,.38,0,2.22,-.08),this.addBox(t,r,.22,.55,.22,-.3,2.2,-.04),this.addBox(t,r,.22,.5,.22,.28,2.18,-.04),this.addBox(t,r,.16,.4,.16,.1,2.1,.1),this.addBox(t,r,.14,.3,.14,-.1,2.05,.08),this.addBox(t,2792080,.22,.11,.04,-.13,2.52,.37),this.addBox(t,2792080,.22,.11,.04,.13,2.52,.37),this.addBox(t,2792080,.07,.06,.03,0,2.52,.38),this.addBox(t,8947848,.06,.06,.55,0,2.1,0),this.addBox(t,5592405,.1,.1,.1,-.22,2.04,.25),this.addBox(t,5592405,.1,.1,.1,.22,2.04,.25),this.addBox(t,2236962,.42,.15,.52,-.16,.06,.08),this.addBox(t,2236962,.42,.15,.52,.16,.06,.08),this.addBox(t,16777215,.12,.08,.02,.2,1.7,.22),this.addSphere(t,16119285,.04,-.15,1.55,.215),this.addSphere(t,16119285,.04,.1,1.3,.215),this.addSphere(t,16119285,.04,.2,1.65,.215);const o=this.createShirtTexture("Jose",i),a=new Ve({map:o,transparent:!1}),l=new O(new fe(.68,.92),a);return l.position.set(0,1.4,.215),t.add(l),t}buildJarrad(){const t=new Pt,e=13148288,i=657930,n=2763306,r=1970184;this.addBox(t,n,.4,.9,.33,-.17,.45,0),this.addBox(t,n,.4,.9,.33,.17,.45,0),this.addBox(t,i,.76,1,.43,0,1.4,0),this.addBox(t,14540253,.22,.22,.05,-.05,1.48,.23),this.addBox(t,e,.21,.8,.21,-.52,1.22,0),this.addBox(t,e,.21,.8,.21,.52,1.22,0),this.addBox(t,e,.22,.22,.22,0,2.01,0),this.addSphere(t,e,.38,0,2.5,0),this.addBox(t,r,.72,.2,.72,0,2.84,-.02),this.addBox(t,r,.2,.28,.2,-.36,2.68,-.02),this.addBox(t,r,.2,.28,.2,.36,2.68,-.02),this.addBox(t,r,.6,.16,.25,0,2.72,-.24),this.addBox(t,2758664,.36,.22,.07,0,2.36,.35),this.addBox(t,1710618,.24,.13,.04,-.13,2.52,.37),this.addBox(t,1710618,.24,.13,.04,.13,2.52,.37),this.addBox(t,1710618,.07,.07,.03,0,2.52,.38),this.addBox(t,1710618,.04,.08,.26,-.32,2.52,.25),this.addBox(t,1710618,.04,.08,.26,.32,2.52,.25),this.addBox(t,2236962,.42,.15,.52,-.17,.06,.08),this.addBox(t,2236962,.42,.15,.52,.17,.06,.08),this.addBox(t,16777215,.12,.08,.02,.2,1.7,.23),this.addSphere(t,16119285,.04,-.18,1.58,.22),this.addSphere(t,16119285,.04,.12,1.32,.22),this.addSphere(t,16119285,.04,.22,1.68,.22);const o=this.createShirtTexture("Jarrad",i),a=new Ve({map:o,transparent:!1}),l=new O(new fe(.72,.92),a);return l.position.set(0,1.4,.22),t.add(l),t}buildMatt(){const t=new Pt,e=13145450,i=657930,n=2631720,r=3809296,o=3022350;this.addBox(t,n,.44,.95,.34,-.19,.475,0),this.addBox(t,n,.44,.95,.34,.19,.475,0),this.addBox(t,i,.88,1.05,.46,0,1.475,0),this.addBox(t,15262940,.08,.08,.05,.2,1.6,.24),this.addBox(t,15262940,.12,.06,.05,-.15,1.3,.24),this.addBox(t,e,.23,.82,.22,-.58,1.26,0),this.addBox(t,e,.23,.82,.22,.58,1.26,0),this.addBox(t,e,.24,.22,.23,0,2.08,0),this.addSphere(t,e,.4,0,2.58,0),this.addBox(t,o,.76,.16,.78,0,2.94,-.02),this.addBox(t,o,.72,.22,.3,0,2.88,-.28),this.addBox(t,o,.25,.3,.22,-.38,2.72,-.05),this.addBox(t,o,.25,.3,.22,.38,2.72,-.05),this.addBox(t,r,.44,.32,.1,0,2.42,.36),this.addBox(t,r,.4,.2,.09,0,2.58,.38),this.addBox(t,r,.2,.4,.1,-.34,2.46,.28),this.addBox(t,r,.2,.4,.1,.34,2.46,.28),this.addBox(t,1118481,.06,.06,.88,0,3.05,0),this.addSphere(t,1118481,.18,-.54,2.72,0),this.addBox(t,2236962,.28,.28,.1,-.54,2.72,0),this.addSphere(t,1118481,.18,.54,2.72,0),this.addBox(t,2236962,.28,.28,.1,.54,2.72,0),this.addBox(t,1118481,.06,.38,.06,-.5,2.89,0),this.addBox(t,1118481,.06,.38,.06,.5,2.89,0),this.addBox(t,2236962,.46,.15,.54,-.19,.06,.08),this.addBox(t,2236962,.46,.15,.54,.19,.06,.08),this.addBox(t,16777215,.12,.08,.02,.2,1.7,.235),this.addSphere(t,16119285,.04,-.2,1.6,.235),this.addSphere(t,16119285,.04,.15,1.35,.235),this.addSphere(t,16119285,.04,.25,1.7,.235);const a=this.createShirtTexture("Matt",i),l=new Ve({map:a,transparent:!1}),c=new O(new fe(.84,.97),l);return c.position.set(0,1.475,.235),t.add(c),t}buildPhil(){const t=new Pt,e=13936768,i=15789544,n=3821696,r=12632248;this.addBox(t,n,.5,1,.38,-.22,.5,0),this.addBox(t,n,.5,1,.38,.22,.5,0),this.addBox(t,i,1,1.1,.52,0,1.55,0),this.addBox(t,3355443,.24,.22,.05,-.05,1.58,.27),this.addBox(t,e,.26,.82,.24,-.66,1.36,0),this.addBox(t,e,.26,.82,.24,.66,1.36,0),this.addBox(t,e,.28,.24,.26,0,2.21,0),this.addSphere(t,e,.44,0,2.72,0),this.addBox(t,r,.8,.18,.8,0,3.08,-.02),this.addBox(t,r,.28,.3,.26,-.42,2.88,-.02),this.addBox(t,r,.28,.3,.26,.42,2.88,-.02),this.addBox(t,r,.7,.18,.3,0,2.82,-.28),this.addBox(t,11053216,.26,.13,.04,-.14,2.74,.42),this.addBox(t,11053216,.26,.13,.04,.14,2.74,.42),this.addBox(t,11053216,.08,.07,.03,0,2.74,.43),this.addBox(t,11053216,.04,.08,.3,-.36,2.74,.28),this.addBox(t,11053216,.04,.08,.3,.36,2.74,.28),this.addBox(t,12615776,.28,.08,.05,0,2.56,.43),this.addBox(t,15658728,.52,.16,.58,-.22,.06,.09),this.addBox(t,15658728,.52,.16,.58,.22,.06,.09),this.addBox(t,3355443,.12,.08,.02,.2,1.75,.265),this.addSphere(t,13420736,.04,-.22,1.65,.265),this.addSphere(t,13420736,.04,.18,1.4,.265),this.addSphere(t,13420736,.04,.28,1.75,.265);const o=this.createShirtTexture("Phil",i,1118481),a=new Ve({map:o,transparent:!1}),l=new O(new fe(.96,1.02),a);return l.position.set(0,1.55,.265),t.add(l),t}buildTsuyoshi(){const t=new Pt,e=12093528,i=657930,n=2236960,r=657928;this.addBox(t,n,.4,.92,.34,-.17,.46,0),this.addBox(t,n,.4,.92,.34,.17,.46,0),this.addBox(t,i,.78,1,.44,0,1.42,0),this.addBox(t,14540253,.22,.22,.05,-.05,1.52,.23),this.addBox(t,i,.21,.82,.21,-.52,1.24,0),this.addBox(t,i,.21,.82,.21,.52,1.24,0),this.addBox(t,e,.19,.18,.19,-.52,.8,0),this.addBox(t,e,.19,.18,.19,.52,.8,0),this.addBox(t,e,.22,.22,.22,0,2.03,0),this.addSphere(t,e,.38,0,2.52,0),this.addBox(t,1710616,.06,.35,.72,-.38,2.6,0),this.addBox(t,1710616,.06,.35,.72,.38,2.6,0),this.addBox(t,r,.22,.18,.72,0,2.88,0),this.addBox(t,r,.16,.6,.18,0,3.18,0),this.addBox(t,r,.12,.5,.14,-.08,3.12,-.14),this.addBox(t,r,.12,.5,.14,.08,3.12,-.14),this.addBox(t,r,.14,.42,.14,0,3.08,.18),this.addBox(t,r,.1,.35,.12,-.06,3,.22),this.addBox(t,r,.1,.35,.12,.06,3,.22),this.addBox(t,2236962,.42,.15,.52,-.17,.06,.08),this.addBox(t,2236962,.42,.15,.52,.17,.06,.08),this.addBox(t,16777215,.12,.08,.02,.2,1.7,.225),this.addSphere(t,16119285,.04,-.16,1.56,.225),this.addSphere(t,16119285,.04,.1,1.32,.225),this.addSphere(t,16119285,.04,.2,1.65,.225);const o=this.createShirtTexture("Tsuyoshi",i),a=new Ve({map:o,transparent:!1}),l=new O(new fe(.74,.92),a);return l.position.set(0,1.42,.225),t.add(l),t}buildFabio(){const t=new Pt,e=12488288,i=1801924,n=2631728;this.addBox(t,n,.44,.95,.36,-.19,.475,0),this.addBox(t,n,.44,.95,.36,.19,.475,0),this.addBox(t,i,.84,1,.46,0,1.42,0),this.addBox(t,14210252,.1,.1,.05,.18,1.6,.24),this.addBox(t,14210252,.16,.08,.05,-.2,1.3,.24),this.addBox(t,14210252,.08,.14,.05,.05,1.48,.24),this.addBox(t,e,.25,.82,.24,-.57,1.24,0),this.addBox(t,e,.25,.82,.24,.57,1.24,0),this.addBox(t,4874400,.27,.24,.26,.57,1.52,0),this.addBox(t,12609600,.27,.14,.26,.57,1.36,0),this.addBox(t,e,.26,.24,.24,0,2.07,0),this.addSphere(t,e,.41,0,2.58,0),this.addBox(t,1708040,.72,.06,.76,0,2.96,0),this.addBox(t,2759176,.38,.2,.08,0,2.42,.37),this.addBox(t,2759176,.34,.12,.07,0,2.56,.38),this.addBox(t,15251608,.26,.07,.05,0,2.48,.41),this.addBox(t,16777215,.18,.05,.04,0,2.49,.42),this.addBox(t,1972240,.46,.18,.56,-.19,.06,.1),this.addBox(t,1972240,.46,.18,.56,.19,.06,.1),this.addBox(t,16777215,.12,.08,.02,.2,1.7,.235),this.addSphere(t,16119285,.04,-.18,1.58,.235),this.addSphere(t,16119285,.04,.12,1.33,.235),this.addSphere(t,16119285,.04,.22,1.68,.235);const r=this.createShirtTexture("Fabio",i),o=new Ve({map:r,transparent:!1}),a=new O(new fe(.8,.92),o);return a.position.set(0,1.42,.235),t.add(a),t}buildJoe(){const t=new Pt,e=13934704,i=15777792,n=2763320,r=16119280;this.addBox(t,n,.46,1.05,.36,-.2,.525,0),this.addBox(t,n,.46,1.05,.36,.2,.525,0),this.addBox(t,1710616,.48,.2,.42,-.2,.1,.04),this.addBox(t,1710616,.48,.2,.42,.2,.1,.04),this.addBox(t,i,.94,1.12,.5,0,1.56,0),this.addBox(t,16777215,.96,.1,.52,0,1.85,0),this.addBox(t,16777215,.96,.1,.52,0,1.45,0),this.addBox(t,i,.22,.86,.22,-.6,1.38,0),this.addBox(t,i,.22,.86,.22,.6,1.38,0),this.addBox(t,e,.2,.2,.2,-.6,.9,0),this.addBox(t,e,.2,.2,.2,.6,.9,0),this.addBox(t,e,.24,.26,.24,0,2.23,0),this.addSphere(t,e,.44,0,2.76,0),this.addBox(t,r,1.1,.1,1.1,0,3.08,-.04),this.addBox(t,r,.82,.36,.82,0,3.28,-.04);const o=this.createShirtTexture("Joe",i,1710618),a=new Ve({map:o,transparent:!1}),l=new O(new fe(.88,1.04),a);return l.position.set(0,1.56,.256),t.add(l),t}addBox(t,e,i,n,r,o,a,l){const c=new O(new et(i,n,r),new Z({color:e}));c.position.set(o,a,l),c.castShadow=!0,c.receiveShadow=!0,t.add(c)}addSphere(t,e,i,n,r,o){const a=new O(new Ze(i,10,8),new Z({color:e}));a.position.set(n,r,o),a.castShadow=!0,t.add(a)}dispose(){for(const t of this.crewGroups.values())this.scene.remove(t);this.crewGroups.clear()}}class j0{constructor(t){F(this,"mesh");F(this,"velocity",new D);F(this,"heading",0);F(this,"bodyGroup");F(this,"suspensionY",0);F(this,"suspensionVel",0);this.mesh=new Pt,this.bodyGroup=new Pt,this.mesh.add(this.bodyGroup);const e=new Z({color:1118481}),i=new O(new et(2.4,1.6,3.2),e);i.position.set(0,.8,.8),i.castShadow=!0,i.receiveShadow=!0,this.bodyGroup.add(i);const n=new Z({color:1579032}),r=new O(new et(2.4,1.4,1.6),n);r.position.set(0,.7,-1.6),r.castShadow=!0,r.receiveShadow=!0,this.bodyGroup.add(r);const o=new Z({color:2241348}),a=new O(new et(2,1,.1),o);a.rotation.x=-.18,a.position.set(0,1.15,-2.36),a.castShadow=!0,a.receiveShadow=!0,this.bodyGroup.add(a);const l=new Z({color:1381653}),c=new O(new et(2.3,.15,4.6),l);c.position.set(0,1.675,0),c.castShadow=!0,c.receiveShadow=!0,this.bodyGroup.add(c);const h=new Z({color:12674667}),u=new O(new et(.05,.35,3),h);u.position.set(-1.23,.85,.5),u.castShadow=!0,u.receiveShadow=!0,this.bodyGroup.add(u);const d=new O(new et(.05,.35,3),h);d.position.set(1.23,.85,.5),d.castShadow=!0,d.receiveShadow=!0,this.bodyGroup.add(d);const p=new Z({color:3359829}),g=new O(new et(.05,.4,.5),p);g.position.set(-1.22,1.1,-1.7),g.castShadow=!0,g.receiveShadow=!0,this.bodyGroup.add(g);const x=new O(new et(.05,.4,.5),p);x.position.set(1.22,1.1,-1.7),x.castShadow=!0,x.receiveShadow=!0,this.bodyGroup.add(x);const m=new Z({color:3355443});for(const Ft of[-.3,.3]){const R=new O(new et(.05,1.4,.1),m);R.position.set(Ft,.8,2.46),R.castShadow=!0,R.receiveShadow=!0,this.bodyGroup.add(R)}const f=new Z({color:526344}),b=new O(new et(.04,1.6,.05),f);b.position.set(-1.22,.8,-.8),this.bodyGroup.add(b);const w=new O(new et(.04,1.6,.05),f);w.position.set(1.22,.8,-.8),this.bodyGroup.add(w);const _=new O(new et(2.4,.04,.05),f);_.position.set(0,1.58,-.8),this.bodyGroup.add(_);const L=new Z({color:1118481}),T=new Z({color:3359829});for(const Ft of[-1,1]){const R=Ft*1.3,ge=new O(new et(.18,.12,.22),L);ge.position.set(R,1.1,-1.7),this.bodyGroup.add(ge);const Bt=new O(new et(.08,.1,.18),T);Bt.position.set(R+Ft*.05,1.1,-1.7),this.bodyGroup.add(Bt)}const A=new Z({color:3355443});for(const Ft of[-.15,-.85]){const R=new O(new et(2.1,.07,.07),A);R.position.set(0,1.78,Ft),this.bodyGroup.add(R)}for(const Ft of[-.95,.95]){const R=new O(new et(.05,.05,.7),A);R.position.set(Ft,1.78,-.5),this.bodyGroup.add(R)}const P=new Z({color:8947848});for(const Ft of[-.6,.6]){const R=new O(new et(.06,.06,.14),P);R.position.set(Ft,.85,2.52),this.bodyGroup.add(R)}const S=new O(new et(2.4,.04,.06),f);S.position.set(0,1.2,2.47),this.bodyGroup.add(S);const y=new Z({color:16733440}),C=new Z({color:1118481}),N=new O(new et(.05,.22,.82),y);N.position.set(-1.255,.86,.36),this.bodyGroup.add(N);const z=new O(new et(.06,.05,.16),C);z.position.set(-1.262,.96,.12),this.bodyGroup.add(z);const Y=new O(new et(.06,.15,.05),C);Y.position.set(-1.262,.86,.12),this.bodyGroup.add(Y);const q=new O(new et(.06,.18,.05),C);q.position.set(-1.262,.86,.38),this.bodyGroup.add(q);const X=new O(new et(.06,.04,.13),C);X.position.set(-1.262,.95,.445),this.bodyGroup.add(X);const Q=new O(new et(.06,.04,.1),C);Q.position.set(-1.262,.86,.43),this.bodyGroup.add(Q);const V=new O(new et(.06,.04,.13),C);V.position.set(-1.262,.77,.445),this.bodyGroup.add(V);const ot=new O(new et(.06,.18,.05),C);ot.position.set(-1.262,.86,.61),this.bodyGroup.add(ot);const ft=new O(new et(.06,.18,.05),C);ft.position.set(-1.262,.86,.73),this.bodyGroup.add(ft);const St=new O(new et(.06,.08,.13),C);St.position.set(-1.262,.92,.67),this.bodyGroup.add(St);const kt=new O(new et(.05,.22,.82),y);kt.position.set(1.255,.86,.36),this.bodyGroup.add(kt);const te=new Qt(.38,.38,.28,10),j=new Z({color:1118481}),nt=new Z({color:8947848}),vt=[[-1.25,.38,-1.2,-1],[1.25,.38,-1.2,1],[-1.25,.38,1.3,-1],[1.25,.38,1.3,1]];for(const[Ft,R,ge,Bt]of vt){const Gt=new O(te,j);Gt.rotation.z=Math.PI/2,Gt.position.set(Ft,R,ge),Gt.castShadow=!0,Gt.receiveShadow=!0,this.mesh.add(Gt);const At=new Qt(.2,.2,.06,10),Jt=new O(At,nt);Jt.rotation.z=Math.PI/2,Jt.position.set(Ft+Bt*.15,R,ge),Jt.castShadow=!0,Jt.receiveShadow=!0,this.mesh.add(Jt);const Tt=new Z({color:3355443}),E=new O(new Qt(.36,.38,.06,10),Tt);E.rotation.z=Math.PI/2,E.position.set(Ft+Bt*.2,R,ge),this.mesh.add(E);const v=new Z({color:1118481}),k=new O(new et(.14,.1,.82),v);k.position.set(Ft+Bt*.07,R+.3,ge),this.bodyGroup.add(k)}const at=new Z({color:16777181,emissive:16777181,emissiveIntensity:.8});for(const Ft of[-.8,.8]){const R=new O(new et(.35,.2,.08),at);R.position.set(Ft,.75,-2.41),R.castShadow=!0,R.receiveShadow=!0,this.bodyGroup.add(R)}const Ct=new Ve({color:16777164,transparent:!0,opacity:.08,side:Ce}),Lt=new Ui(1.5,8,8,1,!0);for(const Ft of[-.6,.6]){const R=new O(Lt,Ct);R.rotation.x=Math.PI/2,R.position.set(Ft,.7,-3),this.bodyGroup.add(R)}const Wt=new Z({color:16720384,emissive:16720384,emissiveIntensity:.8});for(const Ft of[-.8,.8]){const R=new O(new et(.3,.18,.06),Wt);R.position.set(Ft,.75,2.47),R.castShadow=!0,R.receiveShadow=!0,this.bodyGroup.add(R)}const ae=new Z({color:3355443}),Xt=new O(new et(2,.08,.8),ae);Xt.position.set(0,1.77,-.5),Xt.castShadow=!0,Xt.receiveShadow=!0,this.bodyGroup.add(Xt),this.mesh.position.set(0,0,0),t.add(this.mesh)}triggerBump(t){this.suspensionVel=-t*6}updateSuspension(t){const e=-80*this.suspensionY-10*this.suspensionVel;this.suspensionVel+=e*t,this.suspensionY+=this.suspensionVel*t,this.suspensionY=Math.max(-.35,Math.min(.35,this.suspensionY)),this.bodyGroup.position.y=this.suspensionY,this.bodyGroup.rotation.z=-this.suspensionY*.08}get suspensionMagnitude(){return Math.abs(this.suspensionY)+Math.abs(this.suspensionVel)*.04}}const ni={maxSpeed:80,acceleration:55,reverseForce:45,friction:.985,steerRate:2.8,minSpeedToSteer:.5,gripAtLowSpeed:7,gripAtHighSpeed:1.2},xl=40,$0=4,J0=30,K0=.8;function Z0(s){for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;return s}function Q0(s){return Math.round(s/xl)*xl}function vl(s,t){let e=0;const i=Q0((s+t)*.5);for(const n of[-1,1]){const r=i+n*$0;(s-r)*(t-r)<0&&e++}return e}class tm{constructor(t,e,i,n){F(this,"van");F(this,"input");F(this,"_speed",0);F(this,"velocityAngle",0);F(this,"prevPos",new D);F(this,"onBump");F(this,"collisionWorld");F(this,"COLL_GRID",40);F(this,"COLL_ROAD_HALF",6.5);this.van=t,this.input=e,this.onBump=i,this.collisionWorld=n,this.velocityAngle=this.van.heading,this.prevPos.copy(this.van.mesh.position)}get speed(){return this._speed}update(t){this.prevPos.copy(this.van.mesh.position);const e=Math.abs(this._speed);if(this.input.forward&&(this._speed+=ni.acceleration*t),this.input.brake&&(this._speed-=ni.reverseForce*t),this._speed*=Math.pow(ni.friction,t*60),this._speed=Math.max(-80*.5,Math.min(ni.maxSpeed,this._speed)),e>ni.minSpeedToSteer){const l=this.input.left?-1:this.input.right?1:Math.abs(this.input.steerAxis)>.1?this.input.steerAxis:0,c=Math.min(1,e/15);this.van.heading+=l*ni.steerRate*c*Math.sign(this._speed)*t}const i=Math.min(e/ni.maxSpeed,1),n=ni.gripAtLowSpeed+(ni.gripAtHighSpeed-ni.gripAtLowSpeed)*i,r=Z0(this.van.heading-this.velocityAngle);this.velocityAngle+=r*n*t;const o=new D(Math.sin(this.velocityAngle),0,-Math.cos(this.velocityAngle));this.van.velocity.copy(o).multiplyScalar(this._speed),this.van.mesh.position.add(this.van.velocity.clone().multiplyScalar(t)),this.van.mesh.rotation.y=-this.van.heading;const a=245;if(this.van.mesh.position.x=Math.max(-a,Math.min(a,this.van.mesh.position.x)),this.van.mesh.position.z=Math.max(-a,Math.min(a,this.van.mesh.position.z)),this.collisionWorld){const l=this.collisionWorld.resolveCircle(this.van.mesh.position.x,this.van.mesh.position.z,1.8);(l.x!==this.van.mesh.position.x||l.z!==this.van.mesh.position.z)&&(this._speed*=.65,this.van.mesh.position.x=l.x,this.van.mesh.position.z=l.z)}this._checkCurbCrossings()}distToNearestRoad(t){const e=(t%this.COLL_GRID+this.COLL_GRID)%this.COLL_GRID;return Math.min(e,this.COLL_GRID-e)}isOnRoad(t,e){const i=this.distToNearestRoad(t),n=this.distToNearestRoad(e);return i<this.COLL_ROAD_HALF||n<this.COLL_ROAD_HALF}resolveCollision(t,e,i,n){return this.isOnRoad(i,n)?{x:i,z:n}:this.isOnRoad(t,n)?{x:t,z:n}:this.isOnRoad(i,e)?{x:i,z:e}:{x:t,z:e}}applyImpulse(t,e){this._speed*=.5,this.van.mesh.position.x+=t*.1,this.van.mesh.position.z+=e*.1}_checkCurbCrossings(){const t=this.van.mesh.position,e=this.prevPos,i=vl(e.x,t.x),n=vl(e.z,t.z);if(i+n===0)return;const a=Math.abs(this._speed)/J0,l=Math.max(K0,Math.min(1,a));this.van.triggerBump(l),this._speed*=.85,this.onBump&&this.onBump(l)}}const Ys=(s,t)=>{const e=t.x-s.x,i=t.y-s.y;return Math.sqrt(e*e+i*i)},em=(s,t)=>{const e=t.x-s.x,i=t.y-s.y;return nm(Math.atan2(i,e))},im=(s,t,e)=>{const i={x:0,y:0};return e=Io(e),i.x=s.x-t*Math.cos(e),i.y=s.y-t*Math.sin(e),i},Io=s=>s*(Math.PI/180),nm=s=>s*(180/Math.PI),sm=s=>isNaN(s.buttons)?s.pressure!==0:s.buttons!==0,Gr=new Map,_l=s=>{Gr.has(s)&&clearTimeout(Gr.get(s)),Gr.set(s,setTimeout(s,100))},Zs=(s,t,e)=>{const i=t.split(/[ ,]+/g);let n;for(let r=0;r<i.length;r+=1)n=i[r],s.addEventListener?s.addEventListener(n,e,!1):s.attachEvent&&s.attachEvent(n,e)},yl=(s,t,e)=>{const i=t.split(/[ ,]+/g);let n;for(let r=0;r<i.length;r+=1)n=i[r],s.removeEventListener?s.removeEventListener(n,e):s.detachEvent&&s.detachEvent(n,e)},Mc=s=>(s.preventDefault(),s.type.match(/^touch/)?s.changedTouches:s),Ml=()=>{const s=window.pageXOffset!==void 0?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,t=window.pageYOffset!==void 0?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;return{x:s,y:t}},Sl=(s,t)=>{t.top||t.right||t.bottom||t.left?(s.style.top=t.top,s.style.right=t.right,s.style.bottom=t.bottom,s.style.left=t.left):(s.style.left=t.x+"px",s.style.top=t.y+"px")},ta=(s,t,e)=>{const i=Sc(s);for(let n in i)if(i.hasOwnProperty(n))if(typeof t=="string")i[n]=t+" "+e;else{let r="";for(let o=0,a=t.length;o<a;o+=1)r+=t[o]+" "+e+", ";i[n]=r.slice(0,-2)}return i},rm=(s,t)=>{const e=Sc(s);for(let i in e)e.hasOwnProperty(i)&&(e[i]=t);return e},Sc=s=>{const t={};return t[s]="",["webkit","Moz","o"].forEach(function(i){t[i+s.charAt(0).toUpperCase()+s.slice(1)]=""}),t},Hr=(s,t)=>{for(let e in t)t.hasOwnProperty(e)&&(s[e]=t[e]);return s},om=(s,t)=>{const e={};for(let i in s)s.hasOwnProperty(i)&&t.hasOwnProperty(i)?e[i]=t[i]:s.hasOwnProperty(i)&&(e[i]=s[i]);return e},Fo=(s,t)=>{if(s.length)for(let e=0,i=s.length;e<i;e+=1)t(s[e]);else t(s)},am=(s,t,e)=>({x:Math.min(Math.max(s.x,t.x-e),t.x+e),y:Math.min(Math.max(s.y,t.y-e),t.y+e)});var lm="ontouchstart"in window,cm=!!window.PointerEvent,hm=!!window.MSPointerEvent,Qn={touch:{start:"touchstart",move:"touchmove",end:"touchend, touchcancel"},mouse:{start:"mousedown",move:"mousemove",end:"mouseup"},pointer:{start:"pointerdown",move:"pointermove",end:"pointerup, pointercancel"},MSPointer:{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}},Tn,os={};cm?Tn=Qn.pointer:hm?Tn=Qn.MSPointer:lm?(Tn=Qn.touch,os=Qn.mouse):Tn=Qn.mouse;function Ei(){}Ei.prototype.on=function(s,t){var e=this,i=s.split(/[ ,]+/g),n;e._handlers_=e._handlers_||{};for(var r=0;r<i.length;r+=1)n=i[r],e._handlers_[n]=e._handlers_[n]||[],e._handlers_[n].push(t);return e};Ei.prototype.off=function(s,t){var e=this;return e._handlers_=e._handlers_||{},s===void 0?e._handlers_={}:t===void 0?e._handlers_[s]=null:e._handlers_[s]&&e._handlers_[s].indexOf(t)>=0&&e._handlers_[s].splice(e._handlers_[s].indexOf(t),1),e};Ei.prototype.trigger=function(s,t){var e=this,i=s.split(/[ ,]+/g),n;e._handlers_=e._handlers_||{};for(var r=0;r<i.length;r+=1)n=i[r],e._handlers_[n]&&e._handlers_[n].length&&e._handlers_[n].forEach(function(o){o.call(e,{type:n,target:e},t)})};Ei.prototype.config=function(s){var t=this;t.options=t.defaults||{},s&&(t.options=om(t.options,s))};Ei.prototype.bindEvt=function(s,t){var e=this;return e._domHandlers_=e._domHandlers_||{},e._domHandlers_[t]=function(){typeof e["on"+t]=="function"?e["on"+t].apply(e,arguments):console.warn('[WARNING] : Missing "on'+t+'" handler.')},Zs(s,Tn[t],e._domHandlers_[t]),os[t]&&Zs(s,os[t],e._domHandlers_[t]),e};Ei.prototype.unbindEvt=function(s,t){var e=this;return e._domHandlers_=e._domHandlers_||{},yl(s,Tn[t],e._domHandlers_[t]),os[t]&&yl(s,os[t],e._domHandlers_[t]),delete e._domHandlers_[t],this};function Me(s,t){return this.identifier=t.identifier,this.position=t.position,this.frontPosition=t.frontPosition,this.collection=s,this.defaults={size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,mode:"dynamic",zone:document.body,lockX:!1,lockY:!1,shape:"circle"},this.config(t),this.options.mode==="dynamic"&&(this.options.restOpacity=0),this.id=Me.id,Me.id+=1,this.buildEl().stylize(),this.instance={el:this.ui.el,on:this.on.bind(this),off:this.off.bind(this),show:this.show.bind(this),hide:this.hide.bind(this),add:this.addToDom.bind(this),remove:this.removeFromDom.bind(this),destroy:this.destroy.bind(this),setPosition:this.setPosition.bind(this),resetDirection:this.resetDirection.bind(this),computeDirection:this.computeDirection.bind(this),trigger:this.trigger.bind(this),position:this.position,frontPosition:this.frontPosition,ui:this.ui,identifier:this.identifier,id:this.id,options:this.options},this.instance}Me.prototype=new Ei;Me.constructor=Me;Me.id=0;Me.prototype.buildEl=function(s){return this.ui={},this.options.dataOnly?this:(this.ui.el=document.createElement("div"),this.ui.back=document.createElement("div"),this.ui.front=document.createElement("div"),this.ui.el.className="nipple collection_"+this.collection.id,this.ui.back.className="back",this.ui.front.className="front",this.ui.el.setAttribute("id","nipple_"+this.collection.id+"_"+this.id),this.ui.el.appendChild(this.ui.back),this.ui.el.appendChild(this.ui.front),this)};Me.prototype.stylize=function(){if(this.options.dataOnly)return this;var s=this.options.fadeTime+"ms",t=rm("borderRadius","50%"),e=ta("transition","opacity",s),i={};return i.el={position:"absolute",opacity:this.options.restOpacity,display:"block",zIndex:999},i.back={position:"absolute",display:"block",width:this.options.size+"px",height:this.options.size+"px",left:0,marginLeft:-this.options.size/2+"px",marginTop:-this.options.size/2+"px",background:this.options.color,opacity:".5"},i.front={width:this.options.size/2+"px",height:this.options.size/2+"px",position:"absolute",display:"block",left:0,marginLeft:-this.options.size/4+"px",marginTop:-this.options.size/4+"px",background:this.options.color,opacity:".5",transform:"translate(0px, 0px)"},Hr(i.el,e),this.options.shape==="circle"&&Hr(i.back,t),Hr(i.front,t),this.applyStyles(i),this};Me.prototype.applyStyles=function(s){for(var t in this.ui)if(this.ui.hasOwnProperty(t))for(var e in s[t])this.ui[t].style[e]=s[t][e];return this};Me.prototype.addToDom=function(){return this.options.dataOnly||document.body.contains(this.ui.el)?this:(this.options.zone.appendChild(this.ui.el),this)};Me.prototype.removeFromDom=function(){return this.options.dataOnly||!document.body.contains(this.ui.el)?this:(this.options.zone.removeChild(this.ui.el),this)};Me.prototype.destroy=function(){clearTimeout(this.removeTimeout),clearTimeout(this.showTimeout),clearTimeout(this.restTimeout),this.trigger("destroyed",this.instance),this.removeFromDom(),this.off()};Me.prototype.show=function(s){var t=this;return t.options.dataOnly||(clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.addToDom(),t.restCallback(),setTimeout(function(){t.ui.el.style.opacity=1},0),t.showTimeout=setTimeout(function(){t.trigger("shown",t.instance),typeof s=="function"&&s.call(this)},t.options.fadeTime)),t};Me.prototype.hide=function(s){var t=this;if(t.options.dataOnly)return t;if(t.ui.el.style.opacity=t.options.restOpacity,clearTimeout(t.removeTimeout),clearTimeout(t.showTimeout),clearTimeout(t.restTimeout),t.removeTimeout=setTimeout(function(){var e=t.options.mode==="dynamic"?"none":"block";t.ui.el.style.display=e,typeof s=="function"&&s.call(t),t.trigger("hidden",t.instance)},t.options.fadeTime),t.options.restJoystick){const e=t.options.restJoystick,i={};i.x=e===!0||e.x!==!1?0:t.instance.frontPosition.x,i.y=e===!0||e.y!==!1?0:t.instance.frontPosition.y,t.setPosition(s,i)}return t};Me.prototype.setPosition=function(s,t){var e=this;e.frontPosition={x:t.x,y:t.y};var i=e.options.fadeTime+"ms",n={};n.front=ta("transition",["transform"],i);var r={front:{}};r.front={transform:"translate("+e.frontPosition.x+"px,"+e.frontPosition.y+"px)"},e.applyStyles(n),e.applyStyles(r),e.restTimeout=setTimeout(function(){typeof s=="function"&&s.call(e),e.restCallback()},e.options.fadeTime)};Me.prototype.restCallback=function(){var s=this,t={};t.front=ta("transition","none",""),s.applyStyles(t),s.trigger("rested",s.instance)};Me.prototype.resetDirection=function(){this.direction={x:!1,y:!1,angle:!1}};Me.prototype.computeDirection=function(s){var t=s.angle.radian,e=Math.PI/4,i=Math.PI/2,n,r,o;if(t>e&&t<e*3&&!s.lockX?n="up":t>-e&&t<=e&&!s.lockY?n="left":t>-e*3&&t<=-e&&!s.lockX?n="down":s.lockY||(n="right"),s.lockY||(t>-i&&t<i?r="left":r="right"),s.lockX||(t>0?o="up":o="down"),s.force>this.options.threshold){var a={},l;for(l in this.direction)this.direction.hasOwnProperty(l)&&(a[l]=this.direction[l]);var c={};this.direction={x:r,y:o,angle:n},s.direction=this.direction;for(l in a)a[l]===this.direction[l]&&(c[l]=!0);if(c.x&&c.y&&c.angle)return s;(!c.x||!c.y)&&this.trigger("plain",s),c.x||this.trigger("plain:"+r,s),c.y||this.trigger("plain:"+o,s),c.angle||this.trigger("dir dir:"+n,s)}else this.resetDirection();return s};function me(s,t){var e=this;e.nipples=[],e.idles=[],e.actives=[],e.ids=[],e.pressureIntervals={},e.manager=s,e.id=me.id,me.id+=1,e.defaults={zone:document.body,multitouch:!1,maxNumberOfNipples:10,mode:"dynamic",position:{top:0,left:0},catchDistance:200,size:100,threshold:.1,color:"white",fadeTime:250,dataOnly:!1,restJoystick:!0,restOpacity:.5,lockX:!1,lockY:!1,shape:"circle",dynamicPage:!1,follow:!1},e.config(t),(e.options.mode==="static"||e.options.mode==="semi")&&(e.options.multitouch=!1),e.options.multitouch||(e.options.maxNumberOfNipples=1);const i=getComputedStyle(e.options.zone.parentElement);return i&&i.display==="flex"&&(e.parentIsFlex=!0),e.updateBox(),e.prepareNipples(),e.bindings(),e.begin(),e.nipples}me.prototype=new Ei;me.constructor=me;me.id=0;me.prototype.prepareNipples=function(){var s=this,t=s.nipples;t.on=s.on.bind(s),t.off=s.off.bind(s),t.options=s.options,t.destroy=s.destroy.bind(s),t.ids=s.ids,t.id=s.id,t.processOnMove=s.processOnMove.bind(s),t.processOnEnd=s.processOnEnd.bind(s),t.get=function(e){if(e===void 0)return t[0];for(var i=0,n=t.length;i<n;i+=1)if(t[i].identifier===e)return t[i];return!1}};me.prototype.bindings=function(){var s=this;s.bindEvt(s.options.zone,"start"),s.options.zone.style.touchAction="none",s.options.zone.style.msTouchAction="none"};me.prototype.begin=function(){var s=this,t=s.options;if(t.mode==="static"){var e=s.createNipple(t.position,s.manager.getIdentifier());e.add(),s.idles.push(e)}};me.prototype.createNipple=function(s,t){var e=this,i=e.manager.scroll,n={},r=e.options,o={x:e.parentIsFlex?i.x:i.x+e.box.left,y:e.parentIsFlex?i.y:i.y+e.box.top};if(s.x&&s.y)n={x:s.x-o.x,y:s.y-o.y};else if(s.top||s.right||s.bottom||s.left){var a=document.createElement("DIV");a.style.display="hidden",a.style.top=s.top,a.style.right=s.right,a.style.bottom=s.bottom,a.style.left=s.left,a.style.position="absolute",r.zone.appendChild(a);var l=a.getBoundingClientRect();r.zone.removeChild(a),n=s,s={x:l.left+i.x,y:l.top+i.y}}var c=new Me(e,{color:r.color,size:r.size,threshold:r.threshold,fadeTime:r.fadeTime,dataOnly:r.dataOnly,restJoystick:r.restJoystick,restOpacity:r.restOpacity,mode:r.mode,identifier:t,position:s,zone:r.zone,frontPosition:{x:0,y:0},shape:r.shape});return r.dataOnly||(Sl(c.ui.el,n),Sl(c.ui.front,c.frontPosition)),e.nipples.push(c),e.trigger("added "+c.identifier+":added",c),e.manager.trigger("added "+c.identifier+":added",c),e.bindNipple(c),c};me.prototype.updateBox=function(){var s=this;s.box=s.options.zone.getBoundingClientRect()};me.prototype.bindNipple=function(s){var t=this,e,i=function(n,r){e=n.type+" "+r.id+":"+n.type,t.trigger(e,r)};s.on("destroyed",t.onDestroyed.bind(t)),s.on("shown hidden rested dir plain",i),s.on("dir:up dir:right dir:down dir:left",i),s.on("plain:up plain:right plain:down plain:left",i)};me.prototype.pressureFn=function(s,t,e){var i=this,n=0;clearInterval(i.pressureIntervals[e]),i.pressureIntervals[e]=setInterval((function(){var r=s.force||s.pressure||s.webkitForce||0;r!==n&&(t.trigger("pressure",r),i.trigger("pressure "+t.identifier+":pressure",r),n=r)}).bind(i),100)};me.prototype.onstart=function(s){var t=this,e=t.options,i=s;s=Mc(s),t.updateBox();var n=function(r){t.actives.length<e.maxNumberOfNipples?t.processOnStart(r):i.type.match(/^touch/)&&(Object.keys(t.manager.ids).forEach(function(o){if(Object.values(i.touches).findIndex(function(l){return l.identifier===o})<0){var a=[s[0]];a.identifier=o,t.processOnEnd(a)}}),t.actives.length<e.maxNumberOfNipples&&t.processOnStart(r))};return Fo(s,n),t.manager.bindDocument(),!1};me.prototype.processOnStart=function(s){var t=this,e=t.options,i,n=t.manager.getIdentifier(s),r=s.force||s.pressure||s.webkitForce||0,o={x:s.pageX,y:s.pageY},a=t.getOrCreate(n,o);a.identifier!==n&&t.manager.removeIdentifier(a.identifier),a.identifier=n;var l=function(h){h.trigger("start",h),t.trigger("start "+h.id+":start",h),h.show(),r>0&&t.pressureFn(s,h,h.identifier),t.processOnMove(s)};if((i=t.idles.indexOf(a))>=0&&t.idles.splice(i,1),t.actives.push(a),t.ids.push(a.identifier),e.mode!=="semi")l(a);else{var c=Ys(o,a.position);if(c<=e.catchDistance)l(a);else{a.destroy(),t.processOnStart(s);return}}return a};me.prototype.getOrCreate=function(s,t){var e=this,i=e.options,n;return/(semi|static)/.test(i.mode)?(n=e.idles[0],n?(e.idles.splice(0,1),n):i.mode==="semi"?e.createNipple(t,s):(console.warn("Coudln't find the needed nipple."),!1)):(n=e.createNipple(t,s),n)};me.prototype.processOnMove=function(s){var t=this,e=t.options,i=t.manager.getIdentifier(s),n=t.nipples.get(i),r=t.manager.scroll;if(!sm(s)){this.processOnEnd(s);return}if(!n){console.error("Found zombie joystick with ID "+i),t.manager.removeIdentifier(i);return}if(e.dynamicPage){var o=n.el.getBoundingClientRect();n.position={x:r.x+o.left,y:r.y+o.top}}n.identifier=i;var a=n.options.size/2,l={x:s.pageX,y:s.pageY};e.lockX&&(l.y=n.position.y),e.lockY&&(l.x=n.position.x);var c=Ys(l,n.position),h=em(l,n.position),u=Io(h),d=c/a,p={distance:c,position:l},g,x;if(n.options.shape==="circle"?(g=Math.min(c,a),x=im(n.position,g,h)):(x=am(l,n.position,a),g=Ys(x,n.position)),e.follow){if(c>a){let w=l.x-x.x,_=l.y-x.y;n.position.x+=w,n.position.y+=_,n.el.style.top=n.position.y-(t.box.top+r.y)+"px",n.el.style.left=n.position.x-(t.box.left+r.x)+"px",c=Ys(l,n.position)}}else l=x,c=g;var m=l.x-n.position.x,f=l.y-n.position.y;n.frontPosition={x:m,y:f},e.dataOnly||(n.ui.front.style.transform="translate("+m+"px,"+f+"px)");var b={identifier:n.identifier,position:l,force:d,pressure:s.force||s.pressure||s.webkitForce||0,distance:c,angle:{radian:u,degree:h},vector:{x:m/a,y:-f/a},raw:p,instance:n,lockX:e.lockX,lockY:e.lockY};b=n.computeDirection(b),b.angle={radian:Io(180-h),degree:180-h},n.trigger("move",b),t.trigger("move "+n.id+":move",b)};me.prototype.processOnEnd=function(s){var t=this,e=t.options,i=t.manager.getIdentifier(s),n=t.nipples.get(i),r=t.manager.removeIdentifier(n.identifier);n&&(e.dataOnly||n.hide(function(){e.mode==="dynamic"&&(n.trigger("removed",n),t.trigger("removed "+n.id+":removed",n),t.manager.trigger("removed "+n.id+":removed",n),n.destroy())}),clearInterval(t.pressureIntervals[n.identifier]),n.resetDirection(),n.trigger("end",n),t.trigger("end "+n.id+":end",n),t.ids.indexOf(n.identifier)>=0&&t.ids.splice(t.ids.indexOf(n.identifier),1),t.actives.indexOf(n)>=0&&t.actives.splice(t.actives.indexOf(n),1),/(semi|static)/.test(e.mode)?t.idles.push(n):t.nipples.indexOf(n)>=0&&t.nipples.splice(t.nipples.indexOf(n),1),t.manager.unbindDocument(),/(semi|static)/.test(e.mode)&&(t.manager.ids[r.id]=r.identifier))};me.prototype.onDestroyed=function(s,t){var e=this;e.nipples.indexOf(t)>=0&&e.nipples.splice(e.nipples.indexOf(t),1),e.actives.indexOf(t)>=0&&e.actives.splice(e.actives.indexOf(t),1),e.idles.indexOf(t)>=0&&e.idles.splice(e.idles.indexOf(t),1),e.ids.indexOf(t.identifier)>=0&&e.ids.splice(e.ids.indexOf(t.identifier),1),e.manager.removeIdentifier(t.identifier),e.manager.unbindDocument()};me.prototype.destroy=function(){var s=this;s.unbindEvt(s.options.zone,"start"),s.nipples.forEach(function(e){e.destroy()});for(var t in s.pressureIntervals)s.pressureIntervals.hasOwnProperty(t)&&clearInterval(s.pressureIntervals[t]);s.trigger("destroyed",s.nipples),s.manager.unbindDocument(),s.off()};function be(s){var t=this;t.ids={},t.index=0,t.collections=[],t.scroll=Ml(),t.config(s),t.prepareCollections();var e=function(){var n;t.collections.forEach(function(r){r.forEach(function(o){n=o.el.getBoundingClientRect(),o.position={x:t.scroll.x+n.left,y:t.scroll.y+n.top}})})};Zs(window,"resize",function(){_l(e)});var i=function(){t.scroll=Ml()};return Zs(window,"scroll",function(){_l(i)}),t.collections}be.prototype=new Ei;be.constructor=be;be.prototype.prepareCollections=function(){var s=this;s.collections.create=s.create.bind(s),s.collections.on=s.on.bind(s),s.collections.off=s.off.bind(s),s.collections.destroy=s.destroy.bind(s),s.collections.get=function(t){var e;return s.collections.every(function(i){return e=i.get(t),!e}),e}};be.prototype.create=function(s){return this.createCollection(s)};be.prototype.createCollection=function(s){var t=this,e=new me(t,s);return t.bindCollection(e),t.collections.push(e),e};be.prototype.bindCollection=function(s){var t=this,e,i=function(n,r){e=n.type+" "+r.id+":"+n.type,t.trigger(e,r)};s.on("destroyed",t.onDestroyed.bind(t)),s.on("shown hidden rested dir plain",i),s.on("dir:up dir:right dir:down dir:left",i),s.on("plain:up plain:right plain:down plain:left",i)};be.prototype.bindDocument=function(){var s=this;s.binded||(s.bindEvt(document,"move").bindEvt(document,"end"),s.binded=!0)};be.prototype.unbindDocument=function(s){var t=this;(!Object.keys(t.ids).length||s===!0)&&(t.unbindEvt(document,"move").unbindEvt(document,"end"),t.binded=!1)};be.prototype.getIdentifier=function(s){var t;return s?(t=s.identifier===void 0?s.pointerId:s.identifier,t===void 0&&(t=this.latest||0)):t=this.index,this.ids[t]===void 0&&(this.ids[t]=this.index,this.index+=1),this.latest=t,this.ids[t]};be.prototype.removeIdentifier=function(s){var t={};for(var e in this.ids)if(this.ids[e]===s){t.id=e,t.identifier=this.ids[e],delete this.ids[e];break}return t};be.prototype.onmove=function(s){var t=this;return t.onAny("move",s),!1};be.prototype.onend=function(s){var t=this;return t.onAny("end",s),!1};be.prototype.oncancel=function(s){var t=this;return t.onAny("end",s),!1};be.prototype.onAny=function(s,t){var e=this,i,n="processOn"+s.charAt(0).toUpperCase()+s.slice(1);t=Mc(t);var r=function(a,l,c){c.ids.indexOf(l)>=0&&(c[n](a),a._found_=!0)},o=function(a){i=e.getIdentifier(a),Fo(e.collections,r.bind(null,a,i)),a._found_||e.removeIdentifier(i)};return Fo(t,o),!1};be.prototype.destroy=function(){var s=this;s.unbindDocument(!0),s.ids={},s.index=0,s.collections.forEach(function(t){t.destroy()}),s.off()};be.prototype.onDestroyed=function(s,t){var e=this;if(e.collections.indexOf(t)<0)return!1;e.collections.splice(e.collections.indexOf(t),1)};const bl=new be,dm={create:function(s){return bl.create(s)},factory:bl};class um{constructor(){F(this,"keys",{});F(this,"steerAxis",0);F(this,"accelerating",!1);F(this,"braking",!1);F(this,"horn",!1);F(this,"joystickManager",null);F(this,"hornTimeout",null);window.addEventListener("keydown",t=>{this.keys[t.code]=!0,t.code==="KeyH"&&this.triggerHorn()}),window.addEventListener("keyup",t=>{this.keys[t.code]=!1}),this.setupMobileControls()}triggerHorn(){this.horn=!0,this.hornTimeout!==null&&clearTimeout(this.hornTimeout),this.hornTimeout=setTimeout(()=>{this.horn=!1,this.hornTimeout=null},300)}setupMobileControls(){const t=document.createElement("div");t.style.cssText=`
      position: fixed;
      bottom: 20px;
      left: 20px;
      width: 150px;
      height: 150px;
      z-index: 100;
      touch-action: none;
    `,document.body.appendChild(t),this.joystickManager=dm.create({zone:t,mode:"static",position:{left:"75px",bottom:"75px"},color:"rgba(255, 255, 255, 0.6)",size:120,restOpacity:.5}),this.joystickManager.on("move",(r,o)=>{o.vector&&(this.steerAxis=o.vector.x)}),this.joystickManager.on("end",()=>{this.steerAxis=0});const e=document.createElement("div");e.style.cssText=`
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
    `,e.textContent="REV",document.body.appendChild(e),e.addEventListener("touchstart",r=>{r.preventDefault(),this.braking=!0,e.style.background="rgba(220, 50, 50, 0.9)"},{passive:!1}),e.addEventListener("touchend",r=>{r.preventDefault(),this.braking=!1,e.style.background="rgba(220, 50, 50, 0.6)"},{passive:!1});const i=document.createElement("div");i.style.cssText=`
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
    `,i.textContent="GAS",document.body.appendChild(i),i.addEventListener("touchstart",r=>{r.preventDefault(),this.accelerating=!0,i.style.background="rgba(50, 200, 50, 0.9)"},{passive:!1}),i.addEventListener("touchend",r=>{r.preventDefault(),this.accelerating=!1,i.style.background="rgba(50, 200, 50, 0.6)"},{passive:!1});const n=document.createElement("div");n.style.cssText=`
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
    `,n.textContent="📯",document.body.appendChild(n),n.addEventListener("touchstart",r=>{r.preventDefault(),this.triggerHorn(),n.style.background="rgba(255, 200, 50, 0.95)",n.style.transform="scale(1.1)"},{passive:!1}),n.addEventListener("touchend",r=>{r.preventDefault(),n.style.background="rgba(255, 200, 50, 0.6)",n.style.transform="scale(1.0)"},{passive:!1})}get forward(){return this.keys.ArrowUp||this.keys.KeyW||this.accelerating}get backward(){return this.keys.ArrowDown||this.keys.KeyS}get left(){return this.keys.ArrowLeft||this.keys.KeyA||this.steerAxis<-.2}get right(){return this.keys.ArrowRight||this.keys.KeyD||this.steerAxis>.2}get brake(){return this.keys.Space||this.braking}get honk(){return this.horn}}class fm{constructor(){F(this,"level",0);F(this,"spillRateMultiplier",1);F(this,"onSpill");F(this,"container");F(this,"fill");F(this,"bucketEl");F(this,"isShaking",!1);F(this,"spillFlashing",!1);if(!document.getElementById("spill-meter-styles")){const n=document.createElement("style");n.id="spill-meter-styles",n.textContent=`
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
      `,document.head.appendChild(n)}this.container=document.createElement("div"),Object.assign(this.container.style,{position:"fixed",top:"16px",left:"50%",transform:"translateX(-50%)",display:"flex",flexDirection:"column",alignItems:"center",gap:"4px",zIndex:"999",userSelect:"none",pointerEvents:"none"});const t=document.createElement("div");Object.assign(t.style,{display:"flex",alignItems:"center",gap:"8px"}),this.bucketEl=document.createElement("span"),this.bucketEl.textContent="🪣",Object.assign(this.bucketEl.style,{fontSize:"28px",lineHeight:"1"}),t.appendChild(this.bucketEl);const e=document.createElement("div");Object.assign(e.style,{width:"160px",height:"18px",background:"#333",borderRadius:"9px",overflow:"hidden",border:"2px solid rgba(255,255,255,0.25)",boxShadow:"0 2px 6px rgba(0,0,0,0.6)"}),this.fill=document.createElement("div"),Object.assign(this.fill.style,{height:"100%",width:"0%",borderRadius:"9px",transition:"width 0.05s linear",background:"linear-gradient(to right, #4caf50, #ffeb3b)"}),e.appendChild(this.fill),t.appendChild(e),this.container.appendChild(t);const i=document.createElement("div");i.textContent="DON'T SPILL THE PLASTER!",Object.assign(i.style,{color:"#fff",fontSize:"11px",fontWeight:"700",fontFamily:"system-ui, sans-serif",textShadow:"0 1px 4px rgba(0,0,0,0.9)",letterSpacing:"0.5px"}),this.container.appendChild(i),document.body.appendChild(this.container)}addSpill(t){this.level=Math.min(1,this.level+t)}update(t){var i;this.level=Math.max(0,this.level-t*.05/this.spillRateMultiplier);const e=this.level*100;if(this.fill.style.width=`${e}%`,this.level<.5){const n=this.level*2,r=Math.round(76+n*179),o=Math.round(175+n*60);this.fill.style.background=`linear-gradient(to right, rgb(${r},${o},50), rgb(${r},${o},50))`}else{const n=(this.level-.5)*2,r=255,o=Math.round(235-n*235);this.fill.style.background=`linear-gradient(to right, rgb(${r},${o},50), rgb(${r},${Math.round(o*.4)},20))`}this.level>.8&&!this.isShaking?(this.bucketEl.classList.add("bucket-shake"),this.isShaking=!0):this.level<=.8&&this.isShaking&&(this.bucketEl.classList.remove("bucket-shake"),this.isShaking=!1),this.level>=1&&!this.spillFlashing&&(this.spillFlashing=!0,this.level=.5,(i=this.onSpill)==null||i.call(this,5e4),this.container.classList.add("spill-flash"),setTimeout(()=>{this.container.classList.remove("spill-flash"),this.spillFlashing=!1},700))}triggerBump(t){this.addSpill(t*.3)}}const pm=[{id:"job_01",type:"commercial",zone:"cbd",position:{x:40,z:-40},title:"Office Render Touch-Up",client:"Brad from Accounts",description:"Brad wants the boardroom feature wall to look expensive. It doesn't.",pay:42e4,timeLimit:0,travelTimeLimit:120,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_02",type:"commercial",zone:"footscray",position:{x:-120,z:60},title:"Warehouse Render",client:"Big Kev",description:"Big Kev's got a massive shed. Bigger than he let on over the phone.",pay:68e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_03",type:"residential",zone:"brunswick",position:{x:-80,z:80},title:"Terrace Renovation",client:"Matilda",description:"Matilda's doing a reno and needs three rooms done by Thursday. It's Wednesday.",pay:55e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_04",type:"heritage",zone:"richmond",position:{x:120,z:40},title:"Heritage Restoration",client:"The Council",description:"Council heritage job. Nobody told you about the asbestos audit. Nobody.",pay:8e5,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_05",type:"residential",zone:"stkilda",position:{x:40,z:-120},title:"Beachfront Apartment",client:"Chloe",description:"Chloe wants 'something textured but also smooth'. Good luck with that, mate.",pay:61e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_06",type:"emergency",zone:"cbd",position:{x:-40,z:20},title:"Emergency Patch Job",client:"Darren (Stressed)",description:"Darren's got an open home in 4 hours and a hole in his feature wall. Actual hole.",pay:95e4,timeLimit:240,travelTimeLimit:240,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_07",type:"residential",zone:"brunswick",position:{x:-120,z:-80},title:"Mudbrick Repair",client:"Zephyr",description:"Zephyr built a mudbrick wall himself. He was not qualified to do that.",pay:39e4,timeLimit:0,travelTimeLimit:150,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_08",type:"commercial",zone:"footscray",position:{x:-160,z:20},title:"Kebab Shop Freshen-Up",client:"Mustafa",description:"Mustafa wants the walls done before the health inspector returns. No questions.",pay:47e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_09",type:"heritage",zone:"stkilda",position:{x:80,z:-160},title:"Edwardian Cottage Reno",client:"Patricia",description:"Patricia insists on lime render only. She's printed 11 pages of Wikipedia to prove it.",pay:72e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:3,completed:!1},{id:"job_10",type:"residential",zone:"richmond",position:{x:160,z:-40},title:"New Build Render",client:"The Hendersons",description:"The Hendersons want it done before Christmas. You ask which Christmas.",pay:58e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:1,completed:!1},{id:"job_11",type:"emergency",zone:"brunswick",position:{x:-40,z:120},title:"Water Damage Repair",client:"Gary",description:"Gary's upstairs neighbor left the bath running. Gary is not speaking to upstairs.",pay:88e4,timeLimit:300,travelTimeLimit:300,triggerRadius:18,crewNeeded:2,completed:!1},{id:"job_12",type:"commercial",zone:"stkilda",position:{x:-20,z:-160},title:"Wine Bar Feature Wall",description:"The owner wants 'industrial rustic chic'. You write down 'grey with bumps'.",client:"Alejandro",pay:64e4,timeLimit:0,travelTimeLimit:180,triggerRadius:18,crewNeeded:2,completed:!1}],wl=["Jose","Jarrad","Matt","Phil","Tsuyoshi","Fabio"],Ki=class Ki{constructor(){F(this,"jobs",pm.map(t=>({...t})));F(this,"activeJob",null);F(this,"activePhase",1);F(this,"completedJobIds",new Set);F(this,"money",5e5);F(this,"travelTimer",0);F(this,"travelFailed",!1);F(this,"crewToPickup",[]);F(this,"crewPickedUp",[])}getAvailableJobs(){return this.jobs.filter(t=>!this.completedJobIds.has(t.id)&&t!==this.activeJob)}acceptJob(t){this.activeJob=t,this.activePhase=1,this.crewToPickup=this._pickCrew(t.crewNeeded),this.crewPickedUp=[],this.startTravelTimer()}_pickCrew(t){return[...wl].sort(()=>Math.random()-.5).slice(0,Math.min(t,wl.length))}startTravelTimer(){this.activeJob&&(this.travelTimer=this.activeJob.travelTimeLimit??120,this.travelFailed=!1)}checkPhase1Arrival(t,e){const i=t-Ki.WORKSHOP_POS.x,n=e-Ki.WORKSHOP_POS.z;return Math.sqrt(i*i+n*n)<18}advanceToPhase2(){this.activePhase=2,this.startTravelTimer()}advanceToPhase3(){this.activePhase=3,this.startTravelTimer()}pickupCrew(t){return!this.crewPickedUp.includes(t)&&this.crewToPickup.includes(t)&&this.crewPickedUp.push(t),this.allCrewCollected()}allCrewCollected(){return this.crewToPickup.every(t=>this.crewPickedUp.includes(t))}nextCrewNeeded(){for(const t of this.crewToPickup)if(!this.crewPickedUp.includes(t))return t;return null}tickTravel(t){if(!this.activeJob||this.travelFailed)return null;if(this.travelTimer-=t,this.travelTimer<=0){this.travelFailed=!0;const e=15e4;return this.money=Math.max(0,this.money-e),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],{failed:!0,penalty:e}}return null}checkArrival(t,e){if(!this.activeJob||this.activePhase!==3)return null;const i=t-this.activeJob.position.x,n=e-this.activeJob.position.z;return Math.sqrt(i*i+n*n)<this.activeJob.triggerRadius?this.activeJob:null}completeJob(t,e=1){const i=Math.round(t.pay*e);return this.money+=i,this.completedJobIds.add(t.id),this.activeJob=null,this.crewToPickup=[],this.crewPickedUp=[],i}distanceTo(t,e){if(!this.activeJob)return 0;const i=t-this.activeJob.position.x,n=e-this.activeJob.position.z;return Math.sqrt(i*i+n*n)}distanceToWorkshop(t,e){const i=t-Ki.WORKSHOP_POS.x,n=e-Ki.WORKSHOP_POS.z;return Math.sqrt(i*i+n*n)}distanceToPoint(t,e,i,n){const r=t-i,o=e-n;return Math.sqrt(r*r+o*o)}};F(Ki,"WORKSHOP_POS",{x:10,z:15});let Qs=Ki;const Ke=class Ke{constructor(t){F(this,"marker");F(this,"diamond");F(this,"ring");F(this,"routeLine",null);F(this,"routeGeom",null);F(this,"scene");F(this,"time",0);F(this,"targetPos",null);this.scene=t,this.marker=new Pt;const e=new Zo(1,0),i=new Z({color:Ke.MARKER_COLOR,emissive:new xt(Ke.MARKER_COLOR),emissiveIntensity:.35});this.diamond=new O(e,i),this.diamond.scale.set(1.2,2,1.2),this.diamond.castShadow=!1,this.marker.add(this.diamond);const n=new sr(.5,2,32),r=new Ve({color:Ke.MARKER_COLOR,transparent:!0,opacity:.6,side:oi,depthWrite:!1});this.ring=new O(n,r),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=-8+.3,this.marker.add(this.ring),this.marker.visible=!1,this.scene.add(this.marker)}setTarget(t){if(this.targetPos=t,this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null),t===null){this.marker.visible=!1;return}this.marker.position.set(t.x,Ke.BASE_HEIGHT,t.z),this.marker.visible=!0,this.routeGeom=new Re;const e=new Float32Array(6);e[0]=t.x,e[1]=.05,e[2]=t.z,e[3]=t.x,e[4]=.05,e[5]=t.z,this.routeGeom.setAttribute("position",new Xe(e,3));const i=new vc({color:16777215,transparent:!0,opacity:.75,depthTest:!1});this.routeLine=new T0(this.routeGeom,i),this.routeLine.renderOrder=999,this.scene.add(this.routeLine)}setJob(t){this.setTarget((t==null?void 0:t.position)??null)}update(t,e,i){if(this.time+=t,!this.targetPos||!this.marker.visible)return;const n=Math.sin(this.time*2.2)*Ke.BOB_AMP;this.marker.position.y=Ke.BASE_HEIGHT+n,this.diamond.rotation.y=this.time*1.2;const r=this.time*.8%1,o=.5+r*2;this.ring.scale.set(o,o,1);const a=this.ring.material;if(a.opacity=(1-r)*.6,this.routeGeom){const l=this.routeGeom.attributes.position;l.setXYZ(0,e,.05,i),l.setXYZ(1,this.targetPos.x,.05,this.targetPos.z),l.needsUpdate=!0,this.routeGeom.computeBoundingSphere()}}dispose(){this.marker.visible=!1,this.scene.remove(this.marker),this.diamond.geometry.dispose(),this.diamond.material.dispose(),this.ring.geometry.dispose(),this.ring.material.dispose(),this.routeLine&&(this.scene.remove(this.routeLine),this.routeLine.geometry.dispose(),this.routeLine.material.dispose(),this.routeLine=null,this.routeGeom=null)}};F(Ke,"MARKER_COLOR",12674667),F(Ke,"BASE_HEIGHT",8),F(Ke,"BOB_AMP",.5);let Bo=Ke;function mm(s){return s>=1e6?`${(s/1e6).toFixed(2)}M sats`:s>=1e3?`${(s/1e3).toFixed(0)}K sats`:`${s} sats`}const gm={cbd:"🏙️ CBD",footscray:"🏭 Footscray",brunswick:"🎸 Brunswick",richmond:"🏡 Richmond",stkilda:"🌊 St Kilda"},xm={residential:"🏠 Residential",commercial:"🏢 Commercial",heritage:"🏛️ Heritage",emergency:"🚨 Emergency"};class vm{constructor(t){F(this,"onAccept");F(this,"overlay");F(this,"visible",!1);F(this,"jobs",[]);if(this.onAccept=t,this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,t.appendChild(e);const i=document.createElement("button");if(i.className="jb-close-btn",i.textContent="✕",i.setAttribute("aria-label","Close"),i.addEventListener("click",()=>this.hide()),t.appendChild(i),this.overlay.appendChild(t),this.jobs.length===0){const n=document.createElement("div");n.className="jb-no-jobs",n.textContent="You've smashed all the jobs, legend. 🏆",this.overlay.appendChild(n);return}for(const n of this.jobs){const r=document.createElement("div");r.className="jb-card";const o=document.createElement("div");o.className="jb-card-header";const a=document.createElement("div");a.className="jb-title",a.textContent=n.title,o.appendChild(a);const l=document.createElement("div");l.className="jb-pay",l.textContent=`₿ ${mm(n.pay)}`,o.appendChild(l),r.appendChild(o);const c=document.createElement("div");c.className="jb-meta";const h=document.createElement("span");h.className="jb-badge",h.textContent=gm[n.zone]??n.zone,c.appendChild(h);const u=document.createElement("span");if(u.className=`jb-badge${n.type==="emergency"?" jb-emergency-badge":""}`,u.textContent=xm[n.type]??n.type,c.appendChild(u),n.timeLimit>0){const x=document.createElement("span");x.className="jb-badge jb-emergency-badge",x.textContent=`⏱️ ${Math.round(n.timeLimit/60)} min limit`,c.appendChild(x)}r.appendChild(c);const d=document.createElement("div");d.className="jb-client",d.textContent=`Client: ${n.client}`,r.appendChild(d);const p=document.createElement("div");p.className="jb-desc",p.textContent=n.description,r.appendChild(p);const g=document.createElement("button");g.className="jb-accept-btn",g.textContent="ACCEPT →",g.addEventListener("click",()=>{this.onAccept(n)}),r.appendChild(g),this.overlay.appendChild(r)}}}const _m=1e8;function bn(s){return s>=1e6?`${(s/1e6).toFixed(2)}M sats`:s>=1e3?`${(s/1e3).toFixed(0)}K sats`:`${s} sats`}function ym(s){const t=Math.max(0,Math.ceil(s)),e=Math.floor(t/60),i=t%60;return`${e}:${i.toString().padStart(2,"0")}`}function Mm(s){return s.charAt(0).toUpperCase()}class Sm{constructor(){F(this,"btcAchieved",!1);F(this,"speedText");F(this,"moneyEl");F(this,"jobStripEl");F(this,"travelTimerEl");F(this,"flashOverlay");F(this,"timerFailOverlay");F(this,"crewPanelEl");F(this,"activeJob",null);F(this,"activePhase",1);F(this,"flashTimeout",null);F(this,"spillPenaltyTimeout",null);F(this,"currentMoney",5e5);F(this,"timerPulseInterval",null);if(!document.getElementById("hud-styles")){const r=document.createElement("style");r.id="hud-styles",r.textContent=`
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
    `;const i=document.createElement("div");i.id="hud-flash-msg",i.style.cssText=`
      color: #5EDB7D;
      font-size: clamp(28px, 6vw, 52px);
      font-weight: 900;
      font-family: system-ui, sans-serif;
      text-shadow: 0 2px 12px rgba(0,0,0,0.9);
      text-align: center;
      padding: 0 24px;
      line-height: 1.3;
    `,this.flashOverlay.appendChild(i),document.body.appendChild(this.flashOverlay),this.timerFailOverlay=document.createElement("div"),this.timerFailOverlay.style.cssText=`
      position: fixed;
      inset: 0;
      display: none;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1600;
      pointer-events: none;
      background: rgba(220, 38, 38, 0.18);
    `;const n=document.createElement("div");n.id="hud-timer-fail-msg",n.style.cssText=`
      color: #ff4444;
      font-size: clamp(28px, 6vw, 52px);
      font-weight: 900;
      font-family: system-ui, sans-serif;
      text-shadow: 0 2px 12px rgba(0,0,0,0.9);
      text-align: center;
      padding: 0 24px;
      line-height: 1.4;
    `,n.textContent="⏰ TOO SLOW! -150K sats",this.timerFailOverlay.appendChild(n),document.body.appendChild(this.timerFailOverlay)}update(t,e){const i=Math.abs(Math.round(t*3.6));this.speedText.textContent=`${i} km/h`}setActiveJob(t,e=2){if(this.activeJob=t,this.activePhase=e,!t){this.jobStripEl.style.display="none",this.crewPanelEl.style.display="none";return}this.jobStripEl.style.display="flex",this._refreshJobStrip(t,null)}updateJobDistance(t){this.activeJob&&this._refreshJobStrip(this.activeJob,t)}updateCrewStatus(t,e,i){if(!i||t.length===0){this.crewPanelEl.style.display="none";return}this.crewPanelEl.style.display="flex",this.crewPanelEl.innerHTML="";const n=document.createElement("div");n.style.cssText=`
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      letter-spacing: 0.5px;
      text-transform: uppercase;
    `,n.textContent="Crew",this.crewPanelEl.appendChild(n);const r=document.createElement("div");r.style.cssText=`
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
      `,l.textContent=Mm(o),l.title=o,r.appendChild(l)}this.crewPanelEl.appendChild(r)}_refreshJobStrip(t,e){this.jobStripEl.innerHTML="";const i=document.createElement("div");if(i.style.cssText=`
      color: #fff;
      font-size: 13px;
      font-weight: 700;
      text-shadow: 0 1px 4px rgba(0,0,0,0.9);
      text-align: right;
    `,e!==null){const n=e<1e3?`${Math.round(e)}m`:`${(e/1e3).toFixed(1)}km`;this.activePhase===1?(i.textContent=`📦 To workshop: ${n} — ${t.title}`,i.style.color="#FFD700"):this.activePhase===2?(i.textContent=`👥 Pick up crew: ${n} — ${t.title}`,i.style.color="#60AAFF"):(i.textContent=`🧱 To job site: ${n} — ${t.title}`,i.style.color="#C1666B")}else this.activePhase===1?(i.textContent=`📦 Workshop pickup — ${t.title}`,i.style.color="#FFD700"):this.activePhase===2?(i.textContent=`👥 Pick up the crew — ${t.title}`,i.style.color="#60AAFF"):(i.textContent=`🧱 ${t.title}`,i.style.color="#fff");this.jobStripEl.appendChild(i)}updateTravelTimer(t){if(t===null){this.travelTimerEl.style.display="none",this.travelTimerEl.classList.remove("hud-timer-pulse"),this.timerPulseInterval!==null&&(clearInterval(this.timerPulseInterval),this.timerPulseInterval=null);return}this.travelTimerEl.style.display="block",this.travelTimerEl.textContent=`⏱ ${ym(t)}`,t>60?(this.travelTimerEl.style.color="#5EDB7D",this.travelTimerEl.classList.remove("hud-timer-pulse")):t>30?(this.travelTimerEl.style.color="#FFD700",this.travelTimerEl.classList.remove("hud-timer-pulse")):(this.travelTimerEl.style.color="#ff4444",this.travelTimerEl.classList.contains("hud-timer-pulse")||this.travelTimerEl.classList.add("hud-timer-pulse"))}showTimerFail(t){const e=document.getElementById("hud-timer-fail-msg");e&&(e.textContent=`⏰ TOO SLOW! -${bn(t)}`),this.timerFailOverlay.style.display="flex",setTimeout(()=>{this.timerFailOverlay.style.display="none"},3e3)}showPhase1Complete(){const t=document.getElementById("hud-flash-msg");t&&(t.innerHTML='📦 Materials loaded!<br><span style="font-size:0.65em">Go pick up the crew.</span>',t.style.color="#FFD700"),this.flashOverlay.style.background="rgba(255, 210, 0, 0.10)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2500)}showCrewPickup(t,e){const i=document.getElementById("hud-flash-msg");i&&(e?i.innerHTML=`👤 ${t} on board!<br><span style="font-size:0.65em">Pick up ${e}!</span>`:(i.innerHTML='✅ Crew assembled!<br><span style="font-size:0.65em">Head to the job site.</span>',i.style.color="#5EDB7D"),e&&(i.style.color="#60AAFF")),this.flashOverlay.style.background=e?"rgba(96, 170, 255, 0.08)":"rgba(94, 219, 125, 0.12)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashTimeout=null},2200)}showSpillPenalty(t){this.spillPenaltyTimeout!==null&&(clearTimeout(this.spillPenaltyTimeout),this.spillPenaltyTimeout=null);const e=`-${bn(t)}`;this.moneyEl.style.color="#ff4444",this.moneyEl.textContent=`${bn(this.currentMoney)} ${e}`,this.spillPenaltyTimeout=setTimeout(()=>{this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=bn(this.currentMoney),this.spillPenaltyTimeout=null},1500)}showJobComplete(t,e){const i=document.getElementById("hud-flash-msg");i&&(i.style.color="#5EDB7D",i.innerHTML=`✅ JOB DONE!<br><span style="font-size:0.7em">+${bn(e)} — ${t}</span>`),this.flashOverlay.style.background="rgba(94, 219, 125, 0.15)",this.flashOverlay.style.display="flex",this.flashTimeout!==null&&clearTimeout(this.flashTimeout),this.flashTimeout=setTimeout(()=>{this.flashOverlay.style.display="none",this.flashTimeout=null},3e3)}updateMoney(t){this.currentMoney=t,this.spillPenaltyTimeout===null&&(this.moneyEl.style.color="#5EDB7D",this.moneyEl.textContent=bn(t)),!this.btcAchieved&&t>=_m&&(this.btcAchieved=!0,this._showBitcoinAchievement())}showToast(t,e=16777215){const i="#"+e.toString(16).padStart(6,"0"),n=document.createElement("div");n.textContent=t,Object.assign(n.style,{position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)",background:i,color:"#fff",padding:"14px 24px",borderRadius:"14px",fontSize:"18px",fontWeight:"800",fontFamily:"system-ui, sans-serif",zIndex:"9000",opacity:"1",textShadow:"0 1px 4px rgba(0,0,0,0.5)",boxShadow:"0 4px 20px rgba(0,0,0,0.5)",pointerEvents:"none",whiteSpace:"nowrap",transition:"opacity 0.5s ease"}),document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0"},2e3),setTimeout(()=>n.remove(),2600)}_showBitcoinAchievement(){const t=document.createElement("div");t.style.cssText=`
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
    `,document.body.appendChild(t)}}const tn=[{id:"timber-bluestone",file:"images/270ae674-ae77-46c0-a931-d8b3890bb728.jpg",name:"Timber & Bluestone"},{id:"angular-bay",file:"images/4d5ff18e-1129-4195-9108-a64f3c8e4d34.jpg",name:"Angular Bay House"},{id:"haussmann",file:"images/5c2eabb7-65ce-4f76-b14c-8eb37a3f9537.jpg",name:"Haussmann Mansion"},{id:"brutalist",file:"images/60007f2e-318f-412e-b2ad-4d77445ee417.jpg",name:"Brutalist Compound"},{id:"sculptural-olive",file:"images/787315c4-a661-4dca-8567-b7a18f104665.jpg",name:"Sculptural Olive"},{id:"curved-balcony",file:"images/842fccc6-6bad-4509-81d8-ecb2dc14c80c.jpg",name:"Curved Balcony"},{id:"corten-plaster",file:"images/e3cbd2c9-7944-4074-a439-1033c9f2c166.jpg",name:"Corten & Plaster"},{id:"terracotta-mono",file:"images/f2ed55b5-ba78-4a78-8bad-e57a86b6bcef.jpg",name:"Terracotta Monolith"}],bc="tem-rush-achievements";function cs(){try{return JSON.parse(localStorage.getItem(bc)||"[]")}catch{return[]}}function bm(s){const t=cs();return t.includes(s)?!1:(t.push(s),localStorage.setItem(bc,JSON.stringify(t)),!0)}function wm(){return cs().length>=tn.length}function Em(){const s=cs(),t=tn.filter(e=>!s.includes(e.id));return t.length>0?t[Math.floor(Math.random()*t.length)]:tn[Math.floor(Math.random()*tn.length)]}function Tm(s,t,e){s.fillStyle="#C8B89A",s.fillRect(0,0,t,e);for(let i=0;i<800;i++){const n=Math.random()*t,r=Math.random()*e,o=20+Math.random()*60,a=Math.random()*Math.PI,l=Math.floor(180+Math.random()*40);s.strokeStyle=`rgb(${l},${l-10},${l-20})`,s.lineWidth=1+Math.random()*3,s.globalAlpha=.3+Math.random()*.4,s.beginPath(),s.moveTo(n,r),s.lineTo(n+Math.cos(a)*o,r+Math.sin(a)*o),s.stroke()}s.globalAlpha=1,s.font="bold 48px system-ui",s.textAlign="center",s.fillStyle="rgba(180,160,130,0.4)",s.fillText("TROWELED EARTH",t/2,e/2-20),s.font="22px system-ui",s.fillStyle="rgba(180,160,130,0.3)",s.fillText("Scratch to reveal",t/2,e/2+20)}function Am(s,t,e,i,n,r=45){s.globalCompositeOperation="destination-out",s.strokeStyle="rgba(0,0,0,1)",s.lineCap="round",s.lineJoin="round",s.lineWidth=r*2,s.beginPath(),s.moveTo(t,e),s.lineTo(i,n),s.stroke(),s.globalCompositeOperation="source-over"}function El(s,t,e){const i=s.getImageData(0,0,t,e).data;let n=0;const r=t*e;for(let o=3;o<i.length;o+=4)i[o]<128&&n++;return n/r}function Cm(s,t,e){s.save(),s.translate(t,e),s.rotate(Math.PI/4),s.strokeStyle="#8B6914",s.lineWidth=5,s.lineCap="round",s.beginPath(),s.moveTo(0,0),s.lineTo(0,36),s.stroke(),s.fillStyle="#C0C0C0",s.strokeStyle="#888",s.lineWidth=1.5,s.beginPath(),s.moveTo(-14,0),s.lineTo(14,0),s.lineTo(10,-28),s.lineTo(-10,-28),s.closePath(),s.fill(),s.stroke(),s.fillStyle="rgba(255,255,255,0.35)",s.beginPath(),s.moveTo(-8,-4),s.lineTo(4,-4),s.lineTo(2,-22),s.lineTo(-6,-22),s.closePath(),s.fill(),s.restore()}function Tl(s,t,e,i){const n=Math.max(e/t.naturalWidth,i/t.naturalHeight),r=t.naturalWidth*n,o=t.naturalHeight*n,a=(e-r)/2,l=(i-o)/2;s.drawImage(t,a,l,r,o)}class Rm{constructor(){F(this,"container",null);F(this,"canvas",null);F(this,"ctx",null);F(this,"scratch",null);F(this,"sctx",null);F(this,"onComplete",null);F(this,"photo",null);F(this,"img",null);F(this,"imgLoaded",!1);F(this,"lastX",0);F(this,"lastY",0);F(this,"pointerDown",!1);F(this,"cursorX",-999);F(this,"cursorY",-999);F(this,"DURATION",30);F(this,"timeLeft",30);F(this,"timerInterval",null);F(this,"rafId",0);F(this,"done",!1);F(this,"revealed",0);F(this,"lastSampleTime",0);F(this,"SAMPLE_INTERVAL",250);F(this,"toastMsg","");F(this,"toastAlpha",0);F(this,"_onMouseMove");F(this,"_onMouseDown");F(this,"_onMouseUp");F(this,"_onTouchStart");F(this,"_onTouchMove");F(this,"_onTouchEnd");this._onMouseMove=this.handleMouseMove.bind(this),this._onMouseDown=this.handleMouseDown.bind(this),this._onMouseUp=()=>{this.pointerDown=!1},this._onTouchStart=this.handleTouchStart.bind(this),this._onTouchMove=this.handleTouchMove.bind(this),this._onTouchEnd=()=>{this.pointerDown=!1}}mount(t,e){if(this.container=t,this.onComplete=e,this.done=!1,this.revealed=0,this.timeLeft=this.DURATION,this.toastMsg="",this.toastAlpha=0,this.photo=Em(),this.canvas=document.createElement("canvas"),this.canvas.width=t.clientWidth||window.innerWidth,this.canvas.height=t.clientHeight||window.innerHeight,this.canvas.style.cssText="position:absolute;inset:0;display:block;cursor:none;touch-action:none;",this.ctx=this.canvas.getContext("2d",{willReadFrequently:!0}),!this.ctx)throw new Error("Canvas 2D not supported");if(t.appendChild(this.canvas),this.scratch=document.createElement("canvas"),this.scratch.width=this.canvas.width,this.scratch.height=this.canvas.height,this.sctx=this.scratch.getContext("2d",{willReadFrequently:!0}),!this.sctx)throw new Error("Scratch canvas 2D not supported");Tm(this.sctx,this.scratch.width,this.scratch.height),this.img=new Image,this.img.onload=()=>{this.imgLoaded=!0},this.img.onerror=()=>{this.imgLoaded=!0},this.img.src=this.photo.file,this.canvas.addEventListener("mousemove",this._onMouseMove),this.canvas.addEventListener("mousedown",this._onMouseDown),window.addEventListener("mouseup",this._onMouseUp),this.canvas.addEventListener("touchstart",this._onTouchStart,{passive:!1}),this.canvas.addEventListener("touchmove",this._onTouchMove,{passive:!1}),this.canvas.addEventListener("touchend",this._onTouchEnd),this.timerInterval=setInterval(()=>{this.done||(this.timeLeft--,this.timeLeft<=0&&this.finish())},1e3),this.loop()}handleMouseDown(t){this.pointerDown=!0;const e=this.canvas.getBoundingClientRect();this.lastX=t.clientX-e.left,this.lastY=t.clientY-e.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleMouseMove(t){const e=this.canvas.getBoundingClientRect(),i=t.clientX-e.left,n=t.clientY-e.top;this.cursorX=i,this.cursorY=n,this.pointerDown&&!this.done&&(this.scrape(this.lastX,this.lastY,i,n),this.lastX=i,this.lastY=n)}handleTouchStart(t){t.preventDefault(),this.pointerDown=!0;const e=t.touches[0],i=this.canvas.getBoundingClientRect();this.lastX=e.clientX-i.left,this.lastY=e.clientY-i.top,this.cursorX=this.lastX,this.cursorY=this.lastY}handleTouchMove(t){if(t.preventDefault(),!this.pointerDown||this.done)return;const e=t.touches[0],i=this.canvas.getBoundingClientRect(),n=e.clientX-i.left,r=e.clientY-i.top;this.cursorX=n,this.cursorY=r,this.scrape(this.lastX,this.lastY,n,r),this.lastX=n,this.lastY=r}scrape(t,e,i,n){if(!this.sctx||!this.scratch||this.done)return;Am(this.sctx,t,e,i,n,45);const r=performance.now();r-this.lastSampleTime>this.SAMPLE_INTERVAL&&(this.lastSampleTime=r,this.revealed=El(this.sctx,this.scratch.width,this.scratch.height),this.revealed>=.85&&this.finish())}loop(){if(this.done&&this.toastAlpha<=0)return;const t=this.ctx,e=this.canvas;if(!t||!e)return;const i=e.width,n=e.height;t.clearRect(0,0,i,n),this.imgLoaded&&this.img&&this.img.naturalWidth>0?Tl(t,this.img,i,n):(t.fillStyle="#2a2a20",t.fillRect(0,0,i,n)),this.scratch&&t.drawImage(this.scratch,0,0),this.done||this.drawHUD(t,i,n),this.cursorX>0&&!this.done&&Cm(t,this.cursorX,this.cursorY),this.toastAlpha>0&&(this.drawToast(t,i,n),this.toastAlpha-=.012),this.rafId=requestAnimationFrame(()=>this.loop())}drawHUD(t,e,i){const n=this.timeLeft/this.DURATION,r=e*.8,o=e*.1,a=16,l=14,c=7;t.fillStyle="rgba(0,0,0,0.4)",this.roundRect(t,o,a,r,l,c),t.fill();const h=n<.33?"#F07070":n<.6?"#F7C948":"#5EDB7D";t.fillStyle=h,this.roundRect(t,o,a,r*n,l,c),t.fill(),t.fillStyle="#fff",t.font=`bold ${Math.round(i*.03)}px system-ui`,t.textAlign="center",t.shadowColor="rgba(0,0,0,0.8)",t.shadowBlur=6,t.fillText(`${Math.ceil(this.timeLeft)}s`,e/2,a+l+22);const u=Math.round(this.revealed*100);t.font=`900 ${Math.round(i*.09)}px system-ui`,t.textAlign="center",t.fillStyle="rgba(255,255,255,0.9)",t.shadowColor="rgba(0,0,0,0.9)",t.shadowBlur=12,t.fillText(`${u}%`,e/2,i-32),t.shadowBlur=0,this.timeLeft>25&&(t.font=`bold ${Math.round(i*.03)}px system-ui`,t.fillStyle="rgba(255,255,255,0.85)",t.textAlign="center",t.fillText("🪣  Scrape away the plaster!",e/2,i/2))}roundRect(t,e,i,n,r,o){n<0||(t.beginPath(),t.moveTo(e+o,i),t.lineTo(e+n-o,i),t.quadraticCurveTo(e+n,i,e+n,i+o),t.lineTo(e+n,i+r-o),t.quadraticCurveTo(e+n,i+r,e+n-o,i+r),t.lineTo(e+o,i+r),t.quadraticCurveTo(e,i+r,e,i+r-o),t.lineTo(e,i+o),t.quadraticCurveTo(e,i,e+o,i),t.closePath())}drawToast(t,e,i){const n=Math.min(1,this.toastAlpha);t.save(),t.globalAlpha=n,t.fillStyle="rgba(0,0,0,0.7)",t.font=`bold ${Math.round(i*.035)}px system-ui`,t.textAlign="center";const r=this.toastMsg.split(`
`),o=Math.round(i*.045),a=r.length*o+24,l=i*.45-a/2,c=e*.85,h=(e-c)/2;this.roundRect(t,h,l,c,a,16),t.fill(),t.fillStyle="#fff",t.shadowColor="rgba(0,0,0,0.6)",t.shadowBlur=8,r.forEach((u,d)=>{t.fillText(u,e/2,l+22+d*o)}),t.restore()}finish(){if(this.done)return;this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.sctx&&this.scratch&&(this.revealed=El(this.sctx,this.scratch.width,this.scratch.height));const t=Math.round(this.revealed*100),e=Math.max(20,t),i=e/100,n=this.photo,r=bm(n.id),o=cs().length,a=wm();this.showResultScreen(e,n,r,o,a,i)}showResultScreen(t,e,i,n,r,o){const a=this.ctx,l=this.canvas;if(!a||!l)return;const c=l.width,h=l.height;a.clearRect(0,0,c,h),this.imgLoaded&&this.img&&this.img.naturalWidth>0?Tl(a,this.img,c,h):(a.fillStyle="#2a2a20",a.fillRect(0,0,c,h)),this.scratch&&a.drawImage(this.scratch,0,0),a.fillStyle="rgba(0,0,0,0.65)",a.fillRect(0,0,c,h);const u=t>=85?"#5EDB7D":t>=60?"#F7C948":"#F07070";a.font=`900 ${Math.round(h*.15)}px system-ui`,a.textAlign="center",a.fillStyle=u,a.shadowColor="rgba(0,0,0,0.8)",a.shadowBlur=20,a.fillText(`${t}%`,c/2,h*.35),a.font=`bold ${Math.round(h*.04)}px system-ui`,a.fillStyle="#fff",a.shadowBlur=10,a.fillText(`📸 ${e.name}`,c/2,h*.47);let d;r?d="🏆 FULL TEM COLLECTION!":i?d="✨ NEW PHOTO UNLOCKED!":d="Already in your collection",a.font=`bold ${Math.round(h*.032)}px system-ui`,a.fillStyle=r?"#FFD700":i?"#5EDB7D":"#aaa",a.shadowBlur=8,a.fillText(d,c/2,h*.56),a.font=`${Math.round(h*.026)}px system-ui`,a.fillStyle="rgba(255,255,255,0.75)",a.shadowBlur=4,a.fillText(`Collection: ${n} / ${tn.length}`,c/2,h*.64),a.shadowBlur=0;const p=r?"🏆 Full TEM Collection complete!":i?`📸 New photo unlocked: ${e.name}`:`${e.name} — already in collection`,g={score:t,qualityPct:o,message:p};setTimeout(()=>{var x;return(x=this.onComplete)==null?void 0:x.call(this,g)},2800)}unmount(){this.done=!0,this.timerInterval&&clearInterval(this.timerInterval),this.rafId&&cancelAnimationFrame(this.rafId),this.canvas&&(this.canvas.removeEventListener("mousemove",this._onMouseMove),this.canvas.removeEventListener("mousedown",this._onMouseDown),this.canvas.removeEventListener("touchstart",this._onTouchStart),this.canvas.removeEventListener("touchmove",this._onTouchMove),this.canvas.removeEventListener("touchend",this._onTouchEnd),this.canvas.remove()),window.removeEventListener("mouseup",this._onMouseUp),this.canvas=null,this.ctx=null,this.scratch=null,this.sctx=null,this.container=null,this.onComplete=null,this.img=null}}const Ot=400,ue=700,Pm=800,Al=-420,Os=140,Cl=100,Dm=600,Lm=.5,Oe=44,zs=22,Im=.6,Fm=180,Bm=-200,Rl=60,Um=80,Nm=.8,Om=100,zm=1.15,ts=3,km=100,es=200,wn=80,si=270,Gm=[{id:"lv1",baseX:80,y:540,width:100,height:8,level:1,type:"normal"},{id:"lv2",baseX:140,y:450,width:120,height:8,level:2,type:"normal"},{id:"lv3a",baseX:80,y:360,width:100,height:8,level:3,type:"normal"},{id:"lv3b",baseX:220,y:360,width:100,height:8,level:3,type:"normal"},{id:"lv4",baseX:125,y:270,width:140,height:8,level:4,type:"moving"},{id:"lv5a",baseX:80,y:185,width:100,height:8,level:5,type:"crumbling"},{id:"lv5b",baseX:220,y:185,width:100,height:8,level:5,type:"normal"},{id:"lv6",baseX:80,y:100,width:240,height:8,level:6,type:"win"}],Fi={x:190,y:420,w:40,h:30};class Hm{constructor(){F(this,"canvas",null);F(this,"ctx",null);F(this,"animFrame",null);F(this,"onComplete",null);F(this,"phase","playing");F(this,"platforms",[]);F(this,"jarrad");F(this,"pigeon");F(this,"gameTime",0);F(this,"tsuyoshiSpeech","I GOT IT!");F(this,"tsuyoshiTimer",0);F(this,"resultTimer",0);F(this,"retried",!1);F(this,"movingPlatTime",0);F(this,"movingPlatX",125);F(this,"crumble5ATimer",0);F(this,"crumble5AState","solid");F(this,"crumble5ARespawn",0);F(this,"ropeAngle",0);F(this,"ropeAngVel",0);F(this,"ropeGrabbed",!1);F(this,"windCycleTimer",0);F(this,"windActive",!1);F(this,"windAlpha",0);F(this,"showGapHint",!0);F(this,"gapHintTimer",8);F(this,"shakeNoise",0);F(this,"comboPhase",0);F(this,"comboTimer",0);F(this,"comboFlashTimer",0);F(this,"vaultFlashTimer",0);F(this,"rewindFlashTimer",0);F(this,"splatParticles",[]);F(this,"frameCount",0);F(this,"prevJarradY",0);F(this,"wallDustParticles",[]);F(this,"hasShimmied",!1);F(this,"keys",{});F(this,"prevKeys",{});F(this,"keyHandler");F(this,"keyUpHandler");F(this,"mobileLeft",!1);F(this,"mobileRight",!1);F(this,"mobileJump",!1);F(this,"mobileDrop",!1);F(this,"mobileRewind",!1);F(this,"mobileRewindFired",!1);F(this,"mobileContainer",null);F(this,"lastTimestamp",0)}mount(t,e){this.onComplete=e,this.platforms=Gm.map(n=>({...n})),this.canvas=document.createElement("canvas"),this.canvas.width=Ot,this.canvas.height=ue,this.canvas.style.cssText=`
      width: 100%; height: 100%; object-fit: contain; display: block; touch-action: none;
    `,this.ctx=this.canvas.getContext("2d");const i=document.createElement("div");i.style.cssText=`
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      background: #000; overflow: hidden;
    `,i.appendChild(this.canvas),t.appendChild(i),this.buildMobileButtons(i),this.initGame(),this.keys={},this.prevKeys={},this.keyHandler=n=>{this.keys[n.code]=!0,["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","ShiftLeft","ShiftRight"].includes(n.code)&&n.preventDefault()},this.keyUpHandler=n=>{this.keys[n.code]=!1},window.addEventListener("keydown",this.keyHandler),window.addEventListener("keyup",this.keyUpHandler),this.lastTimestamp=0,this.animFrame=requestAnimationFrame(n=>this.gameLoop(n))}unmount(){this.animFrame!==null&&(cancelAnimationFrame(this.animFrame),this.animFrame=null),window.removeEventListener("keydown",this.keyHandler),window.removeEventListener("keyup",this.keyUpHandler),this.canvas=null,this.ctx=null,this.onComplete=null,this.mobileContainer=null}buildMobileButtons(t){const e=document.createElement("div");e.style.cssText=`
      position: absolute; bottom: 0; left: 0; right: 0;
      display: flex; justify-content: space-between; align-items: flex-end;
      padding: 8px; pointer-events: none; z-index: 50;
    `;const i=(u,d,p)=>{const g=document.createElement("button");return g.textContent=u,g.style.cssText=`
        pointer-events: auto;
        background: rgba(255,255,255,0.18); border: 2px solid rgba(255,255,255,0.4);
        color: #fff; border-radius: 12px; font-size: 22px; font-weight: 900;
        cursor: pointer; touch-action: manipulation; user-select: none;
        -webkit-tap-highlight-color: transparent;
      `,g.addEventListener("touchstart",x=>{x.preventDefault(),d()},{passive:!1}),g.addEventListener("touchend",x=>{x.preventDefault(),p()},{passive:!1}),g.addEventListener("mousedown",()=>d()),g.addEventListener("mouseup",()=>p()),g.addEventListener("mouseleave",()=>p()),g},n=document.createElement("div");n.style.cssText="display:flex; flex-direction:column; gap:4px; pointer-events:none; align-items:flex-start;";const r=i("⏪",()=>{this.mobileRewindFired||(this.mobileRewind=!0,this.mobileRewindFired=!0)},()=>{this.mobileRewind=!1,this.mobileRewindFired=!1});r.style.cssText+="; width:48px; height:40px; font-size:16px;";const o=document.createElement("div");o.style.cssText="display:flex; gap:4px; pointer-events:none;";const a=i("◀",()=>{this.mobileLeft=!0},()=>{this.mobileLeft=!1});a.style.width="64px",a.style.height="64px";const l=i("▶",()=>{this.mobileRight=!0},()=>{this.mobileRight=!1});l.style.width="64px",l.style.height="64px",o.appendChild(a),o.appendChild(l),n.appendChild(r),n.appendChild(o);const c=i("▲",()=>{this.mobileJump=!0},()=>{this.mobileJump=!1});c.style.width="80px",c.style.height="64px";const h=i("▼",()=>{this.mobileDrop=!0},()=>{this.mobileDrop=!1});h.style.width="64px",h.style.height="64px",e.appendChild(n),e.appendChild(c),e.appendChild(h),t.appendChild(e),this.mobileContainer=e}initGame(){this.phase="playing",this.gameTime=0,this.movingPlatTime=0,this.movingPlatX=125,this.tsuyoshiTimer=0,this.tsuyoshiSpeech="I GOT IT!",this.resultTimer=0,this.crumble5ATimer=0,this.crumble5AState="solid",this.crumble5ARespawn=0,this.ropeAngle=0,this.ropeAngVel=0,this.ropeGrabbed=!1,this.windCycleTimer=0,this.windActive=!1,this.windAlpha=0,this.showGapHint=!0,this.gapHintTimer=8,this.comboPhase=0,this.comboTimer=0,this.comboFlashTimer=0,this.vaultFlashTimer=0,this.rewindFlashTimer=0,this.splatParticles=[],this.wallDustParticles=[],this.frameCount=0,this.hasShimmied=!1,this.pigeon={x:240,y:0,vx:60,platformIdx:3,jumpTimer:6,scaredTimer:0,flying:!1,flyTargetX:240,flyTargetY:0},this.snapPigeonToPlatform(),this.spawnAtLevel1()}spawnAtLevel1(){var i;const t=this.platforms[0],e=((i=this.jarrad)==null?void 0:i.lives)??3;this.jarrad={x:t.baseX+10,y:t.y-Oe,vx:0,vy:0,w:18,h:Oe,state:"standing",isCrouching:!1,lives:e,invincTimer:0,deathTimer:0,currentLevel:1,bucketAngle:0,wallRunTimer:0,wallRunDir:0,wallRunUsed:!1,rewindX:t.baseX+10,rewindY:t.y-Oe,rewindAvailable:!0},this.ropeGrabbed=!1,this.prevJarradY=this.jarrad.y,this.splatParticles=[],this.wallDustParticles=[]}gameLoop(t){if(!this.ctx||!this.canvas)return;const e=Math.min((t-(this.lastTimestamp||t))/1e3,.05);this.lastTimestamp=t,this.phase==="playing"&&this.update(e),this.draw(),this.prevKeys={...this.keys},this.animFrame=requestAnimationFrame(i=>this.gameLoop(i))}update(t){this.gameTime+=t,this.frameCount++,this.tsuyoshiTimer+=t,this.tsuyoshiTimer>3&&(this.tsuyoshiTimer=0,this.tsuyoshiSpeech=this.tsuyoshiSpeech==="I GOT IT!"?"HOLD ON!":"I GOT IT!"),this.showGapHint&&(this.gapHintTimer-=t,this.gapHintTimer<=0&&(this.showGapHint=!1)),this.movingPlatTime+=t;const e=this.movingPlatX;if(this.movingPlatX=125+45*Math.sin(2*Math.PI*this.movingPlatTime/3),this.updateWind(t),this.updateCrumble(t),this.updatePigeon(t),this.vaultFlashTimer>0&&(this.vaultFlashTimer-=t),this.rewindFlashTimer>0&&(this.rewindFlashTimer-=t),this.comboFlashTimer>0&&(this.comboFlashTimer-=t),this.comboPhase>0&&(this.comboTimer-=t,this.comboTimer<=0&&(this.comboPhase=0,this.comboTimer=0)),this.updateSplatParticles(t),this.updateWallDust(t),this.jarrad.state==="dead"){this.jarrad.deathTimer-=t,this.jarrad.deathTimer<=0&&this.spawnAtLevel1();return}this.jarrad.invincTimer>0&&(this.jarrad.invincTimer-=t),this.prevJarradY=this.jarrad.y,this.handleInput(t),this.applyPhysics(t,e),this.checkCollisions(),this.checkDeath(),this.checkWin();const i=this.jarrad.vx*.002;this.jarrad.bucketAngle+=(i-this.jarrad.bucketAngle)*8*t,this.jarrad.invincTimer<=0&&this.checkPigeonCollision(),this.jarrad.currentLevel=this.getCurrentLevel()}spawnSplatParticles(t,e){const i=5+Math.floor(Math.random()*2);for(let n=0;n<i;n++){const r=Math.PI*2*n/i+(Math.random()-.5)*.5,o=60+Math.random()*80;this.splatParticles.push({x:t,y:e,vx:Math.cos(r)*o,vy:Math.sin(r)*o-30,alpha:1,radius:3+Math.random()*4})}}updateSplatParticles(t){for(const e of this.splatParticles)e.x+=e.vx*t,e.y+=e.vy*t,e.vy+=200*t,e.alpha-=t/.4;this.splatParticles=this.splatParticles.filter(e=>e.alpha>0)}spawnWallDust(t,e){for(let i=0;i<3;i++)this.wallDustParticles.push({x:t+(Math.random()-.5)*10,y:e+Math.random()*20,alpha:.8,r:3+Math.random()*4})}updateWallDust(t){for(const e of this.wallDustParticles)e.alpha-=t/.4,e.y-=20*t;this.wallDustParticles=this.wallDustParticles.filter(e=>e.alpha>0)}updateWind(t){this.windCycleTimer+=t;const e=4,i=1.5,n=this.windCycleTimer%e;n<i?(this.windActive=!0,n<.3?this.windAlpha=n/.3:n>i-.3?this.windAlpha=(i-n)/.3:this.windAlpha=1):(this.windActive=!1,this.windAlpha=0)}updateCrumble(t){if(this.crumble5AState==="broken"){this.crumble5ARespawn-=t,this.crumble5ARespawn<=0&&(this.crumble5AState="solid",this.crumble5ATimer=0);return}const e=this.jarrad,i=this.platforms[5],n=e.y+e.h;e.state==="standing"&&Math.abs(n-i.y)<5&&e.x+e.w>i.baseX&&e.x<i.baseX+i.width?(this.crumble5ATimer+=t,this.crumble5ATimer>1.5?(this.crumble5AState="broken",this.crumble5ARespawn=8,this.crumble5ATimer=0,e.state==="standing"&&(e.state="falling",e.vy=0)):this.crumble5ATimer>1.2&&(this.crumble5AState="shaking",this.shakeNoise=(Math.random()-.5)*4)):(this.crumble5ATimer=Math.max(0,this.crumble5ATimer-t*2),this.crumble5ATimer<1.2&&(this.crumble5AState="solid"))}handleInput(t){const e=this.jarrad,i=this.keys.ArrowLeft||this.keys.KeyA||this.mobileLeft,n=this.keys.ArrowRight||this.keys.KeyD||this.mobileRight,r=this.isJustPressed("ArrowUp")||this.isJustPressed("KeyW")||this.isJustPressed("Space")||this.mobileJump,o=this.keys.ArrowUp||this.keys.KeyW||this.keys.Space||this.mobileJump,a=this.keys.ArrowDown||this.keys.KeyS||this.mobileDrop;if((this.isJustPressed("ShiftLeft")||this.isJustPressed("ShiftRight")||this.mobileRewind)&&!this.mobileRewindFired&&e.rewindAvailable&&e.state!=="dead"&&(this.mobileRewind&&(this.mobileRewindFired=!0),e.rewindAvailable=!1,e.x=e.rewindX,e.y=e.rewindY,e.vx=0,e.vy=0,e.state="falling",e.invincTimer=Nm,e.wallRunTimer=0,e.wallRunUsed=!1,this.rewindFlashTimer=.3,this.ropeGrabbed=!1),e.state==="wall-running"){e.wallRunTimer-=t,e.wallRunTimer<=0&&(e.vx=-e.wallRunDir*Fm,e.vy=Bm,e.state="jumping");return}if(e.state==="swinging"){if(r){const p=this.ropeAngVel,g=this.ropeAngle;e.vx=si*p*Math.cos(g),e.vy=-si*p*Math.sin(g),e.state="jumping",this.ropeGrabbed=!1}return}if((e.state==="jumping"||e.state==="falling")&&!this.ropeGrabbed){const p=e.x+e.w/2,g=e.y+e.h/2,x=wn+si*Math.cos(this.ropeAngle);if(Math.abs(p-es)<15&&g>wn&&g<x+30){const m=p-es,f=g-wn;this.ropeAngle=Math.atan2(m,f),this.ropeAngVel=e.vx/si,e.state="swinging",this.ropeGrabbed=!0,this.comboPhase===1&&(this.comboPhase=2,this.comboTimer=ts);return}}if((e.state==="jumping"||e.state==="falling")&&!e.wallRunUsed){const p=e.x<30&&i,g=e.x+e.w>370&&n;(p||g)&&(e.state="wall-running",e.wallRunDir=g?1:-1,e.wallRunTimer=Im,e.wallRunUsed=!0,e.vx=0,e.vy=-120)}const c=e.x+e.w/2,h=c>120&&c<145&&e.y>180&&e.y+e.h<555,u=c>260&&c<285&&e.y>180&&e.y+e.h<370,d=h||u;if((e.state==="standing"||e.state==="climbing"||e.state==="falling")&&d){if(o){e.isCrouching=!1,e.h=Oe,e.state="climbing",e.vy=-Cl,e.vx=0;return}if(a){e.isCrouching=!1,e.h=Oe,e.state="climbing",e.vy=Cl,e.vx=0;return}}if(e.state==="climbing"&&(!d||!o&&!a)&&(e.vy=0,e.state="falling"),e.state==="standing"){if(a&&!d){e.isCrouching||(e.isCrouching=!0,e.y+=Oe-zs,e.h=zs),e.vx=0;return}else e.isCrouching&&(e.isCrouching=!1,e.y-=Oe-zs,e.h=Oe);if(e.vx=0,i&&(e.vx=-Os),n&&(e.vx=Os),r){const p=Math.abs(e.vx)>Om?zm:1;e.vy=Al*p,e.state="jumping",e.isCrouching=!1,e.h=Oe,this.comboPhase=1,this.comboTimer=ts,this.hasShimmied=!1}}else if(e.state==="jumping"||e.state==="falling")e.vx=0,i&&(e.vx=-Os*.85),n&&(e.vx=Os*.85);else if(e.state==="hanging"){e.vx=0;const p=this.getHangingPlatform();if(p){const g=p.type==="moving"?this.movingPlatX:p.baseX,x=g+p.width;if(i){if(e.x-=Rl*t,e.x+e.w<g+4){e.state="falling",e.vy=0;return}!this.hasShimmied&&this.comboPhase===2&&(this.hasShimmied=!0,this.comboPhase=3,this.comboTimer=ts)}if(n){if(e.x+=Rl*t,e.x>x-4){e.state="falling",e.vy=0;return}!this.hasShimmied&&this.comboPhase===2&&(this.hasShimmied=!0,this.comboPhase=3,this.comboTimer=ts)}}o&&(e.y-=18,e.vy=0,e.state="falling",this.comboPhase===3&&(this.comboPhase=4,this.comboFlashTimer=2,this.gameTime=Math.max(0,this.gameTime-3))),a&&(e.y+=5,e.state="falling")}}getHangingPlatform(){const t=this.jarrad,e=t.y;for(let i=0;i<this.platforms.length;i++){const n=this.platforms[i];if(n.type==="crumbling"&&this.crumble5AState==="broken")continue;const r=n.type==="moving"?this.movingPlatX:n.baseX,o=n.y+n.height;if(Math.abs(e-o)<12&&t.x+t.w>r+2&&t.x<r+n.width-2)return n}return null}isJustPressed(t){return!!this.keys[t]&&!this.prevKeys[t]}applyPhysics(t,e){const i=this.jarrad;if(i.state==="wall-running"){i.vy=-120,i.y+=i.vy*t,i.wallRunDir===1?i.x=Math.min(Ot-i.w-5,Math.max(Ot-i.w-30,i.x)):i.x=Math.max(5,Math.min(30,i.x)),this.frameCount%4===0&&this.spawnWallDust(i.wallRunDir===1?i.x+i.w:i.x,i.y+i.h/2);return}if(i.state==="swinging"){this.ropeAngVel+=-2.962962962962963*Math.sin(this.ropeAngle)*t,this.ropeAngVel*=.995,this.ropeAngle+=this.ropeAngVel*t,this.ropeAngle=Math.max(-Math.PI*.6,Math.min(Math.PI*.6,this.ropeAngle)),i.x=es+si*Math.sin(this.ropeAngle)-i.w/2,i.y=wn+si*Math.cos(this.ropeAngle)-i.h;return}if(i.state==="climbing"){i.y+=i.vy*t;return}if(i.state!=="hanging"&&(i.state!=="standing"&&(i.vy=Math.min(i.vy+Pm*t,Dm)),this.windActive&&i.y<270&&i.state!=="standing"?i.vx-=30*t:this.windActive&&i.y<270&&i.state==="standing"&&(i.vx-=15*t),i.x+=i.vx*t,i.y+=i.vy*t,i.x=Math.max(5,Math.min(Ot-i.w-5,i.x)),i.state==="standing")){const n=this.platforms[4],r=i.y+i.h;if(Math.abs(r-n.y)<5&&i.x+i.w>this.movingPlatX&&i.x<this.movingPlatX+n.width){const o=this.movingPlatX-e;i.x+=o,i.x=Math.max(5,Math.min(Ot-i.w-5,i.x))}}}checkCollisions(){const t=this.jarrad;if(t.state==="dead"||t.state==="swinging"||t.state==="wall-running")return;this.keys.ArrowLeft||this.keys.KeyA||this.mobileLeft,this.keys.ArrowRight||this.keys.KeyD||this.mobileRight;const e=this.keys.ArrowUp||this.keys.KeyW||this.keys.Space||this.mobileJump;for(let i=0;i<this.platforms.length;i++){const n=this.platforms[i];if(n.type==="crumbling"&&this.crumble5AState==="broken")continue;const r=n.type==="moving"?this.movingPlatX:n.baseX,o=n.y,a=r+n.width,l=o+n.height,c=t.y+t.h,h=t.x,u=t.x+t.w;if((t.state==="jumping"||t.state==="falling"||t.state==="climbing")&&t.vy>=0&&c>=o&&c<=l+12&&u>r+2&&h<a-2){t.y-this.prevJarradY>km&&this.spawnSplatParticles(t.x+t.w/2,t.y+t.h),t.y=o-t.h,t.vy=0,t.vx=0,t.state="standing",t.isCrouching&&(t.y+=Oe-zs),t.rewindX=t.x,t.rewindY=t.y,t.wallRunUsed=!1,this.comboPhase<4?(this.comboPhase=0,this.comboTimer=0):this.comboPhase===4&&(this.comboPhase=0);break}const d=t.y;if(t.state==="jumping"&&t.vy<0&&d<=l&&d>=o-10&&u>r+10&&h<a-10){t.vy=0,t.y=l,t.state="hanging",this.comboPhase===1&&(this.comboPhase=2,this.comboTimer=ts,this.hasShimmied=!1);break}}if(t.state==="standing"){let i=!1;for(let n=0;n<this.platforms.length;n++){const r=this.platforms[n];if(r.type==="crumbling"&&this.crumble5AState==="broken")continue;const o=r.type==="moving"?this.movingPlatX:r.baseX,a=t.y+t.h;if(Math.abs(a-r.y)<5&&t.x+t.w>o+1&&t.x<o+r.width-1){i=!0;break}}i||(t.state="falling")}if(t.state==="standing"||t.state==="falling"){const i=t.y+t.h,n=this.platforms[1];if(Math.abs(i-n.y)<6){const r=Fi.x+Fi.w,o=t.x+t.w,a=t.x,l=t.y,c=o>Fi.x&&a<r,h=Fi.y;c&&l<h&&(!t.isCrouching&&Math.abs(t.vx)>=Um&&e?(t.vy=Al*.7,t.y-=6,t.state="jumping",this.vaultFlashTimer=1.2):t.isCrouching||(t.vx=t.vx!==0?-t.vx*.5:0,t.x+t.w/2<Fi.x+Fi.w/2?t.x=Fi.x-t.w-1:t.x=r+1))}}}checkDeath(){const t=this.jarrad;t.state!=="dead"&&(t.y+t.h>=640&&this.killJarrad(),t.y<-120&&(t.y=-60,t.vy=0,t.state="falling"))}killJarrad(){const t=this.jarrad;t.state!=="dead"&&(t.lives--,t.state="dead",t.deathTimer=1.2,t.rewindAvailable=!0,this.ropeGrabbed=!1,t.lives<=0&&setTimeout(()=>{this.retried?(this.phase="result",this.finishGame(!1)):this.phase="lost"},1300))}checkWin(){const t=this.jarrad;if(t.state==="dead")return;const e=this.platforms[7],i=t.y+t.h;Math.abs(i-e.y)<6&&t.x+t.w>e.baseX&&t.x<e.baseX+e.width&&(this.phase="won",setTimeout(()=>this.finishGame(!0),100))}getCurrentLevel(){const t=this.jarrad,e=t.y+t.h;let i=1,n=1/0;for(const r of this.platforms){const o=Math.abs(e-r.y);o<n&&(n=o,i=r.level)}return i}snapPigeonToPlatform(){const t=this.platforms[this.pigeon.platformIdx],e=t.type==="moving"?this.movingPlatX:t.baseX;this.pigeon.y=t.y-20,this.pigeon.x=Math.max(e+4,Math.min(e+t.width-20,this.pigeon.x))}updatePigeon(t){const e=this.pigeon;if(e.scaredTimer>0&&(e.scaredTimer-=t),e.flying){const i=e.flyTargetX-e.x,n=e.flyTargetY-e.y,r=Math.sqrt(i*i+n*n);r<10?(e.flying=!1,this.snapPigeonToPlatform()):(e.x+=i/r*120*t,e.y+=n/r*120*t);return}if(e.jumpTimer-=t,e.jumpTimer<=0){const i=this.getJarradPlatformIdx(),n=[1,2,3,4,5,6].filter(d=>!(d===e.platformIdx||d===5&&this.crumble5AState==="broken")),r=n.filter(d=>d!==i),o=r.length>0?r:n,a=o[Math.floor(Math.random()*o.length)],l=this.platforms[a],c=l.type==="moving"?this.movingPlatX:l.baseX,h=this.platforms[e.platformIdx].type==="moving"?this.movingPlatX:this.platforms[e.platformIdx].baseX;h<190&&c>215||h>215&&c<190||Math.random()<.3?(e.flying=!0,e.platformIdx=a,e.flyTargetX=c+20,e.flyTargetY=l.y-20,e.jumpTimer=5+Math.random()*3):(e.platformIdx=a,e.jumpTimer=5+Math.random()*3,this.snapPigeonToPlatform())}if(!e.flying){const i=this.platforms[e.platformIdx],n=i.type==="moving"?this.movingPlatX:i.baseX,r=n+i.width;e.x+=e.vx*t,e.x<=n+2&&(e.x=n+2,e.vx=60),e.x>=r-20&&(e.x=r-20,e.vx=-60),e.y=i.y-20+Math.sin(this.gameTime*3.5+e.platformIdx)*3}}getJarradPlatformIdx(){const t=this.jarrad,e=t.y+t.h;let i=0,n=1/0;for(let r=0;r<this.platforms.length;r++){const o=Math.abs(e-this.platforms[r].y);o<n&&(n=o,i=r)}return i}checkPigeonCollision(){const t=this.jarrad,e=this.pigeon;if(e.scaredTimer>0||e.flying||this.getJarradPlatformIdx()!==e.platformIdx)return;const n=t.y+t.h,r=this.platforms[e.platformIdx];Math.abs(n-r.y)>12||t.x<e.x+18&&t.x+t.w>e.x&&(t.invincTimer=Lm,e.scaredTimer=1.5,e.jumpTimer=0,t.lives--,t.lives<=0&&(t.state="dead",t.deathTimer=1.2,setTimeout(()=>{this.retried?(this.phase="result",this.finishGame(!1)):this.phase="lost"},1300)))}draw(){if(!this.ctx)return;const t=this.ctx;t.clearRect(0,0,Ot,ue),this.drawBackground(t),this.drawRope(t),this.drawScaffold(t),this.drawPlatforms(t),this.drawDropSheet(t),this.drawGapHint(t),this.drawWindEffect(t),this.drawTsuyoshi(t),this.drawPigeon(t),this.drawWallDust(t),this.drawSplatParticles(t),this.drawJarrad(t),this.drawHUD(t),this.drawFlashTexts(t),this.drawRewindFlash(t),this.phase==="won"?this.drawWinOverlay(t):this.phase==="lost"&&this.drawLostOverlay(t)}drawWallDust(t){for(const e of this.wallDustParticles)t.save(),t.globalAlpha=Math.max(0,e.alpha),t.fillStyle="#E8E0D0",t.beginPath(),t.arc(e.x,e.y,e.r,0,Math.PI*2),t.fill(),t.restore()}drawSplatParticles(t){for(const e of this.splatParticles)t.save(),t.globalAlpha=Math.max(0,e.alpha),t.fillStyle="#FFFFFF",t.beginPath(),t.arc(e.x,e.y,e.radius,0,Math.PI*2),t.fill(),t.restore()}drawFlashTexts(t){if(this.vaultFlashTimer>0){const e=Math.min(1,this.vaultFlashTimer/.4);t.save(),t.globalAlpha=e,t.fillStyle="#FFFF44",t.font="bold 28px system-ui, sans-serif",t.textAlign="center",t.shadowColor="#FF8800",t.shadowBlur=8,t.fillText("VAULT! 🏃",Ot/2,200),t.restore()}if(this.comboFlashTimer>0){const e=Math.min(1,this.comboFlashTimer/.5);t.save(),t.globalAlpha=e,t.fillStyle="#FF6600",t.font="bold 32px system-ui, sans-serif",t.textAlign="center",t.shadowColor="#FFDD00",t.shadowBlur=12,t.fillText("COMBO! 🔥 +3s",Ot/2,160),t.restore()}}drawRewindFlash(t){if(this.rewindFlashTimer<=0)return;const e=this.rewindFlashTimer/.3;t.save(),t.globalAlpha=e*.85,t.fillStyle="#FFFFFF",t.fillRect(0,0,Ot,ue),t.restore()}drawBackground(t){const e=t.createLinearGradient(0,0,0,ue);e.addColorStop(0,"#87CEEB"),e.addColorStop(1,"#C5E8F5"),t.fillStyle=e,t.fillRect(0,0,Ot,ue),t.fillStyle="#C2BEB6",this.roundRect(t,72,60,120,540,12),t.fill(),t.fillStyle="#CAC6BE",this.roundRect(t,212,60,120,540,12),t.fill(),t.fillStyle="rgba(0,0,0,0.07)",this.roundRect(t,72,60,18,540,10),t.fill(),this.roundRect(t,212,60,18,540,10),t.fill(),t.fillStyle="#FFFFFF",t.fillRect(0,635,Ot,8);const i=t.createLinearGradient(0,643,0,ue);i.addColorStop(0,"#48B8C8"),i.addColorStop(1,"#2A9AAD"),t.fillStyle=i,t.fillRect(0,643,Ot,ue-643),t.strokeStyle="rgba(255,255,255,0.25)",t.lineWidth=1.5;for(let n=0;n<5;n++){const r=660+n*8,o=Math.sin(this.gameTime*2+n)*5;t.beginPath(),t.moveTo(10+o,r),t.lineTo(Ot-10+o,r),t.stroke()}t.fillStyle="#8B7355",t.fillRect(0,625,Ot,15),t.fillStyle="#7A6345",t.fillRect(0,627,Ot,4)}drawRope(t){const e=es,i=wn,n=this.ropeAngle,r=e+si*Math.sin(n),o=i+si*Math.cos(n);t.save(),t.strokeStyle="#8B5A2B",t.lineWidth=5,t.lineCap="round",t.beginPath();const a=(e+r)/2+Math.sin(n)*10,l=(i+o)/2+20;t.moveTo(e,i),t.quadraticCurveTo(a,l,r,o),t.stroke(),t.fillStyle="#6B4520",t.strokeStyle="#4A3010",t.lineWidth=1.5,t.beginPath(),t.arc(r,o,5,0,Math.PI*2),t.fill(),t.stroke(),t.restore()}drawScaffold(t){const e=(i,n)=>{t.strokeStyle="#B8B8B8",t.lineWidth=5,t.beginPath(),t.moveTo(i,80),t.lineTo(i,560),t.stroke(),t.beginPath(),t.moveTo(n,80),t.lineTo(n,560),t.stroke();const a=[80,185,270,360,450,540,560];t.strokeStyle="#A0A0A0",t.lineWidth=2;for(let l=0;l<a.length-1;l++){const c=a[l],h=a[l+1];t.beginPath(),t.moveTo(i,c),t.lineTo(n,h),t.stroke(),t.beginPath(),t.moveTo(n,c),t.lineTo(i,h),t.stroke()}};e(80,180),e(220,320),this.drawLadder(t,130,185,540),this.drawLadder(t,270,185,360)}drawLadder(t,e,i,n){t.strokeStyle="#909090",t.lineWidth=2.5,t.beginPath(),t.moveTo(e,i),t.lineTo(e,n),t.stroke(),t.lineWidth=1.5,t.strokeStyle="#A0A0A0";for(let r=i;r<=n;r+=20)t.beginPath(),t.moveTo(e-8,r),t.lineTo(e+8,r),t.stroke()}drawPlatforms(t){for(let e=0;e<this.platforms.length;e++){const i=this.platforms[e];if(i.type==="crumbling"&&this.crumble5AState==="broken")continue;const n=i.type==="moving"?this.movingPlatX:i.baseX;let r=0;i.type==="crumbling"&&this.crumble5AState==="shaking"&&(r=this.shakeNoise);const o=n+r,a=i.y,l=i.width,c=i.height;if(t.save(),i.type==="win"){const h=t.createLinearGradient(o,a,o+l,a);h.addColorStop(0,"#FFD700"),h.addColorStop(1,"#FFA500"),t.fillStyle=h}else i.type==="crumbling"?t.fillStyle="#C8A040":i.type==="moving"?t.fillStyle="#8080D0":t.fillStyle="#B0B0B0";this.roundRect(t,o,a,l,c,2),t.fill(),t.strokeStyle=i.type==="win"?"#FFE57A":i.type==="crumbling"?"#E8C060":"#D8D8D8",t.lineWidth=1.5,t.beginPath(),t.moveTo(o+3,a+1.5),t.lineTo(o+l-3,a+1.5),t.stroke(),i.type==="crumbling"&&(t.strokeStyle="#7A5010",t.lineWidth=1.5,t.beginPath(),t.moveTo(o+20,a+1),t.lineTo(o+28,a+7),t.lineTo(o+35,a+2),t.stroke(),t.beginPath(),t.moveTo(o+55,a+2),t.lineTo(o+60,a+7),t.lineTo(o+68,a+1),t.stroke(),t.beginPath(),t.moveTo(o+80,a+3),t.lineTo(o+87,a+6),t.lineTo(o+93,a+1),t.stroke()),i.type==="moving"&&(t.strokeStyle="#F0F080",t.lineWidth=1.5,t.setLineDash([4,3]),t.strokeRect(o,a,l,c),t.setLineDash([]),t.fillStyle="rgba(255,255,200,0.7)",t.font="bold 7px system-ui",t.textAlign="center",t.fillText("↔ MOVING",o+l/2,a+c-1)),i.type==="win"&&(t.fillStyle="#333",t.font="bold 9px system-ui, sans-serif",t.textAlign="center",t.fillText("🏁 DELIVER",o+l/2,a+6)),t.restore()}}drawDropSheet(t){const{x:e,y:i,w:n,h:r}=Fi;t.save(),t.fillStyle="#F0EDE5",t.strokeStyle="#C8C0A0",t.lineWidth=1,t.beginPath(),t.moveTo(e,i),t.lineTo(e+n,i),t.lineTo(e+n,i+r-4),t.quadraticCurveTo(e+n*.75,i+r+3,e+n*.5,i+r),t.quadraticCurveTo(e+n*.25,i+r-3,e,i+r-4),t.closePath(),t.fill(),t.stroke(),t.strokeStyle="rgba(0,0,0,0.12)",t.lineWidth=1;for(let o=1;o<4;o++){const a=e+n/4*o;t.beginPath(),t.moveTo(a,i),t.lineTo(a+2,i+r-6),t.stroke()}t.fillStyle="#888866",t.font="bold 7px system-ui",t.textAlign="center",t.fillText("DUCK ↓ / VAULT →",e+n/2,i-3),t.restore()}drawGapHint(t){if(!this.showGapHint)return;const e=Math.min(1,this.gapHintTimer/2)*Math.abs(Math.sin(this.gameTime*3));t.save(),t.globalAlpha=e,t.fillStyle="#FFEE44",t.font="bold 11px system-ui",t.textAlign="center",t.fillText("→ JUMP! →",200,400),t.strokeStyle="#FFEE44",t.lineWidth=2,t.beginPath(),t.moveTo(183,390),t.lineTo(217,390),t.moveTo(210,385),t.lineTo(217,390),t.lineTo(210,395),t.stroke(),t.restore()}drawWindEffect(t){if(!(!this.windActive||this.windAlpha<=0)){t.save(),t.globalAlpha=this.windAlpha*.35,t.strokeStyle="#AADDFF",t.lineWidth=2;for(let e=0;e<8;e++){const i=130+e*30+Math.sin(this.gameTime*4+e)*5,n=this.gameTime*120%60,r=30+Math.random()*40;t.beginPath(),t.moveTo(Ot-n,i),t.lineTo(Ot-n-r,i),t.stroke()}t.restore()}}drawTsuyoshi(t){t.fillStyle="#1A1A18",t.fillRect(81,575,18,30),t.fillStyle="#C8A060",t.save(),t.translate(81,585),t.rotate(-.6),t.fillRect(-4,-18,7,20),t.restore(),t.save(),t.translate(99,585),t.rotate(.3),t.fillRect(-3,-16,7,18),t.restore(),t.fillStyle="#C8A060",this.roundRect(t,83,561,14,14,3),t.fill(),t.fillStyle="#0A0A08",t.fillRect(88,549,4,14),t.fillRect(89,543,2,8),t.fillStyle="#0A0A08",t.fillRect(85,567,3,3),t.fillRect(92,567,3,3);const n=this.tsuyoshiSpeech,r=50,o=525,a=80,l=22;t.fillStyle="#FFFFFFEE",this.roundRect(t,r,o,a,l,6),t.fill(),t.strokeStyle="#CCCCCC",t.lineWidth=1,t.stroke(),t.fillStyle="#FFFFFFEE",t.beginPath(),t.moveTo(85,o+l),t.lineTo(95,o+l),t.lineTo(90,o+l+8),t.closePath(),t.fill(),t.fillStyle="#333333",t.font="bold 8px system-ui, sans-serif",t.textAlign="center",t.fillText(n,r+a/2,o+15)}drawJarrad(t){const e=this.jarrad;if(e.invincTimer>0&&Math.floor(e.invincTimer*10)%2===0&&(t.globalAlpha=.4),e.state==="dead"){t.save(),t.translate(e.x+e.w/2,e.y+e.h),t.rotate(Math.PI/2),this.drawJarradShape(t,0,-Oe/2,!1,!1),t.fillStyle="rgba(70,130,180,0.6)",t.beginPath(),t.arc(-10,8,12,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(10,4,8,0,Math.PI*2),t.fill(),t.restore(),t.globalAlpha=1;return}if(e.state==="swinging"){const n=es+si*Math.sin(this.ropeAngle)-e.w/2,r=wn+si*Math.cos(this.ropeAngle);t.save(),t.translate(n+e.w/2,r),t.rotate(this.ropeAngle*.3),this.drawJarradShape(t,-e.w/2,-Oe,!1,!1),t.restore()}else if(e.state==="wall-running"){t.save(),t.translate(e.x+e.w/2,e.y+e.h/2);const n=e.wallRunDir;t.rotate(Math.PI/6*n),this.drawJarradShape(t,-e.w/2,-e.h/2,!1,!1),t.restore()}else if(e.state==="hanging"){t.save(),t.translate(e.x+e.w/2,e.y),this.drawJarradShape(t,-e.w/2,0,!1,!1);const n=e.w/2+2,r=Oe*.6;t.save(),t.translate(n,r);const o=Math.sin(this.gameTime*4)*.3;t.rotate(o+e.bucketAngle),t.strokeStyle="#888",t.lineWidth=1,t.beginPath(),t.moveTo(0,0),t.lineTo(0,8),t.stroke(),t.fillStyle="#C49A7A",t.fillRect(-5,8,10,10),t.strokeStyle="#A07050",t.lineWidth=1,t.strokeRect(-5,8,10,10),t.fillStyle="#F0ECE4",t.fillRect(-3,9,6,4),t.restore(),t.restore()}else{const n=e.state==="standing"&&Math.abs(e.vx)>10;this.drawJarradShape(t,e.x,e.y,e.isCrouching,n)}if(t.globalAlpha=1,e.state!=="swinging"&&e.state!=="hanging"){const n=e.x+e.w+2,r=e.y+(e.isCrouching?10:20);t.save(),t.translate(n,r),t.rotate(e.bucketAngle),t.strokeStyle="#888",t.lineWidth=1,t.beginPath(),t.moveTo(0,0),t.lineTo(0,8),t.stroke(),t.fillStyle="#C49A7A",t.fillRect(-5,8,10,10),t.strokeStyle="#A07050",t.lineWidth=1,t.strokeRect(-5,8,10,10),t.fillStyle="#F0ECE4",t.fillRect(-3,9,6,4),t.restore()}}drawJarradShape(t,e,i,n,r){if(n){t.fillStyle="#111111",t.fillRect(e,i+8,18,14),t.fillStyle="#FFFFFF",t.beginPath(),t.arc(e+5,i+12,2,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(e+13,i+16,2,0,Math.PI*2),t.fill(),t.fillStyle="#C8A080",this.roundRect(t,e+2,i,14,12,3),t.fill(),t.fillStyle="#1E1008",t.fillRect(e+1,i-5,16,6),t.strokeStyle="#1A1A1A",t.lineWidth=1.5,t.strokeRect(e+3,i+3,4,3),t.strokeRect(e+9,i+3,4,3),t.fillStyle="#2A1808",t.fillRect(e+4,i+9,9,3),t.fillStyle="#2A2A2A",t.fillRect(e+1,i+22,7,5),t.fillRect(e+10,i+22,7,5);return}t.fillStyle="#111111",t.fillRect(e,i+14,18,30),t.fillStyle="#FFFFFF",t.beginPath(),t.arc(e+5,i+22,2.5,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(e+12,i+28,2,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(e+7,i+35,1.5,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(e+14,i+19,2,0,Math.PI*2),t.fill(),t.fillStyle="#C8A080",this.roundRect(t,e+2,i,14,14,3),t.fill(),t.fillStyle="#1E1008",t.fillRect(e+1,i-7,16,8),t.fillRect(e+2,i-9,5,4),t.fillRect(e+10,i-8,4,3),t.strokeStyle="#1A1A1A",t.lineWidth=1.5,t.strokeRect(e+3,i+4,4,3),t.strokeRect(e+9,i+4,4,3),t.beginPath(),t.moveTo(e+7,i+5.5),t.lineTo(e+9,i+5.5),t.stroke(),t.fillStyle="#1A1A1A",t.fillRect(e+4,i+5,2,2),t.fillRect(e+10,i+5,2,2),t.fillStyle="#2A1808",t.fillRect(e+4,i+10,9,4),t.fillStyle="#2A2A2A",r?Math.floor(this.frameCount/8)%2===0?(t.fillRect(e+1,i+38,6,14),t.fillRect(e+11,i+44,6,8)):(t.fillRect(e+1,i+44,6,8),t.fillRect(e+11,i+38,6,14)):(t.fillRect(e+2,i+44,6,8),t.fillRect(e+10,i+44,6,8))}drawPigeon(t){const e=this.pigeon,i=e.vx>=0?1:-1;if(t.save(),t.translate(e.x+9,e.y+10),i<0&&t.scale(-1,1),t.fillStyle="#888888",this.roundRect(t,-8,-6,16,12,6),t.fill(),t.fillStyle="#666666",this.roundRect(t,-6,-4,12,6,4),t.fill(),e.flying){const n=Math.sin(this.gameTime*15)*.4;t.save(),t.rotate(n),t.fillStyle="#777777",t.fillRect(-8,-10,16,5),t.restore()}else{const n=Math.sin(this.gameTime*6)*.12;t.save(),t.rotate(n),t.fillStyle="#777777",t.fillRect(-8,-8,16,4),t.restore()}t.fillStyle="#AAAAAA",this.roundRect(t,4,-10,10,9,4),t.fill(),t.fillStyle="#FF4400",t.beginPath(),t.arc(11,-7,2,0,Math.PI*2),t.fill(),t.fillStyle="#000",t.beginPath(),t.arc(11,-7,1,0,Math.PI*2),t.fill(),t.fillStyle="#CC9900",t.beginPath(),t.moveTo(14,-6),t.lineTo(18,-4),t.lineTo(14,-3),t.closePath(),t.fill(),t.strokeStyle="#CC9900",t.lineWidth=1.5,t.beginPath(),t.moveTo(-2,6),t.lineTo(-2,12),t.stroke(),t.beginPath(),t.moveTo(3,6),t.lineTo(3,12),t.stroke(),t.restore()}drawHUD(t){t.fillStyle="rgba(0,0,0,0.55)",t.fillRect(0,0,Ot,36),t.textAlign="left";for(let n=0;n<3;n++)this.drawHeart(t,8+n*22,18,8,n<this.jarrad.lives?"#FF4060":"#555555");t.font="14px system-ui",t.textAlign="left",t.globalAlpha=this.jarrad.rewindAvailable?1:.35,t.fillText("🗡️",72,22),t.globalAlpha=1,t.fillStyle="#FFFFFF",t.font="bold 13px system-ui, sans-serif",t.textAlign="center",t.fillText(`LEVEL ${this.jarrad.currentLevel}/6`,Ot/2,22);const e=Math.floor(this.gameTime/60),i=Math.floor(this.gameTime%60);if(t.textAlign="right",t.fillStyle="#FFFFFF",t.fillText(`${String(e).padStart(2,"0")}:${String(i).padStart(2,"0")}`,Ot-8,22),this.windActive&&(t.save(),t.globalAlpha=this.windAlpha,t.font="14px system-ui",t.textAlign="right",t.fillText("💨",Ot-8,35),t.restore()),this.jarrad.state==="wall-running"&&(t.save(),t.fillStyle="#44FFAA",t.font="bold 11px system-ui",t.textAlign="center",t.fillText("🏃 WALL RUN!",Ot/2,34),t.restore()),this.crumble5AState==="shaking"&&(t.save(),t.fillStyle="#FF8800",t.font="bold 10px system-ui",t.textAlign="center",t.fillText("⚠ PLANK BREAKING!",Ot/2,34),t.restore()),this.comboPhase>0&&this.comboPhase<4){t.save(),t.textAlign="left",t.font="9px system-ui",t.fillStyle="#AAFFAA";const n=["↑J","🤲G","↔S","↑P"];let r=4;for(let o=0;o<4;o++)t.globalAlpha=o<this.comboPhase?1:.3,t.fillText(n[o],r,ue-8),r+=28;t.restore()}this.drawMiniMap(t)}drawMiniMap(t){const e=Ot-28,i=42,n=22,r=120;t.fillStyle="rgba(0,0,0,0.35)",this.roundRect(t,e-2,i-2,n+4,r+4,4),t.fill();const o=n/Ot,a=r/700;for(let u=0;u<this.platforms.length;u++){const d=this.platforms[u];if(d.type==="crumbling"&&this.crumble5AState==="broken")continue;const p=d.type==="moving"?this.movingPlatX:d.baseX,g=e+p*o,x=i+d.y*a,m=d.width*o;let f="#A0A0A0";d.type==="win"&&(f="#FFD700"),d.type==="crumbling"&&(f="#C8A040"),d.type==="moving"&&(f="#8080D0"),t.fillStyle=f,t.fillRect(g,x,Math.max(m,2),2)}const l=this.jarrad,c=e+(l.x+l.w/2)*o,h=i+(l.y+l.h)*a;t.fillStyle="#00FF88",t.beginPath(),t.arc(c,h,2.5,0,Math.PI*2),t.fill()}drawHeart(t,e,i,n,r){t.fillStyle=r,t.beginPath(),t.moveTo(e,i+n*.4),t.bezierCurveTo(e,i-n*.6,e-n*1.2,i-n*.6,e-n*1.2,i),t.bezierCurveTo(e-n*1.2,i+n*.7,e,i+n*1.2,e,i+n*1.4),t.bezierCurveTo(e,i+n*1.2,e+n*1.2,i+n*.7,e+n*1.2,i),t.bezierCurveTo(e+n*1.2,i-n*.6,e,i-n*.6,e,i+n*.4),t.closePath(),t.fill()}drawWinOverlay(t){t.fillStyle="rgba(0,0,0,0.75)",t.fillRect(0,0,Ot,ue),t.textAlign="center",t.font="bold 52px system-ui",t.fillStyle="#FFD700",t.fillText("🪣 DELIVERED!",Ot/2,ue/2-40),t.font="bold 22px system-ui",t.fillStyle="#5EDB7D",t.fillText("🏆 Bucket reached the top!",Ot/2,ue/2+10)}drawLostOverlay(t){var e,i;if(t.fillStyle="rgba(0,0,0,0.80)",t.fillRect(0,0,Ot,ue),t.textAlign="center",t.font="bold 48px system-ui",t.fillStyle="#F07070",t.fillText("💦 SPLAT!",Ot/2,ue/2-60),t.font="bold 16px system-ui",t.fillStyle="#FFFFFF",t.fillText("Jarrad's in the pool.",Ot/2,ue/2-20),!this.retried){t.fillStyle="#C1666B",this.roundRect(t,Ot/2-70,ue/2+10,140,44,10),t.fill(),t.fillStyle="#FFFFFF",t.font="bold 18px system-ui",t.fillText("🔄 RETRY",Ot/2,ue/2+38);const n=r=>{const o=this.canvas.getBoundingClientRect();let a,l;r instanceof MouseEvent?(a=(r.clientX-o.left)*(Ot/o.width),l=(r.clientY-o.top)*(ue/o.height)):(a=(r.changedTouches[0].clientX-o.left)*(Ot/o.width),l=(r.changedTouches[0].clientY-o.top)*(ue/o.height)),a>Ot/2-70&&a<Ot/2+70&&l>ue/2+10&&l<ue/2+54&&(this.canvas.removeEventListener("click",n),this.canvas.removeEventListener("touchend",n),this.retried=!0,this.jarrad.lives=3,this.initGame())};(e=this.canvas)==null||e.addEventListener("click",n,{once:!1}),(i=this.canvas)==null||i.addEventListener("touchend",n,{once:!1})}}finishGame(t){this.phase="result";const e=this.jarrad.lives;let i,n,r;t?e>=3?(i=100,n=1,r="Jarrad didn't spill a drop. Tsuyoshi's still shaking though."):e===2?(i=80,n=.8,r="A pigeon got involved. Classic site visit."):(i=60,n=.6,r="The bucket made it. Jarrad's ego didn't."):(i=0,n=0,r="Jarrad's in the pool. The Marbellino too. Phil's invoice is on the way."),this.ctx&&this.drawResultScreen(this.ctx,t,i,r),setTimeout(()=>{var o;return(o=this.onComplete)==null?void 0:o.call(this,{score:i,qualityPct:n,message:r})},3e3)}drawResultScreen(t,e,i,n){t.fillStyle="rgba(0,0,0,0.82)",t.fillRect(0,0,Ot,ue),t.textAlign="center",t.font="72px system-ui",t.fillText(e?"🏆":"💀",Ot/2,ue/2-90);const r=i>=75?"#5EDB7D":i>=50?"#F7C948":"#F07070";t.fillStyle=r,t.font="bold 64px system-ui, sans-serif",t.fillText(`${i}%`,Ot/2,ue/2-10),t.fillStyle="#FFFFFF",t.font="15px system-ui, sans-serif",this.wrapText(t,n,Ot/2,ue/2+40,340,22)}wrapText(t,e,i,n,r,o){const a=e.split(" ");let l="",c=n;for(const h of a){const u=l+h+" ";t.measureText(u).width>r&&l!==""?(t.fillText(l,i,c),l=h+" ",c+=o):l=u}t.fillText(l,i,c)}roundRect(t,e,i,n,r,o){t.beginPath(),t.moveTo(e+o,i),t.lineTo(e+n-o,i),t.quadraticCurveTo(e+n,i,e+n,i+o),t.lineTo(e+n,i+r-o),t.quadraticCurveTo(e+n,i+r,e+n-o,i+r),t.lineTo(e+o,i+r),t.quadraticCurveTo(e,i+r,e,i+r-o),t.lineTo(e,i+o),t.quadraticCurveTo(e,i,e+o,i),t.closePath()}}class Vm{constructor(){F(this,"overlay");F(this,"active",!1);F(this,"trowelingGame",null);F(this,"scaffoldGame",null);F(this,"safetyTimer",null);this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,e.addEventListener("click",()=>{this.stop(),t({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(e),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),t({score:70,qualityPct:.7,message:"Time up!"}))},6e4),setTimeout(()=>{if(this.active)try{this.trowelingGame=new Rm,this.trowelingGame.mount(this.overlay,i=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),t(i)})}catch(i){console.error("TrowelingGame init failed:",i);const n=document.createElement("div");n.style.cssText=`
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; height:100%; color:#fff;
          font-family:system-ui,sans-serif; gap:24px; padding:40px;
          text-align:center;
        `,n.innerHTML=`
          <div style="font-size:60px">🪣</div>
          <div style="font-size:30px; font-weight:800;">PLASTER APPLIED!</div>
          <div style="font-size:16px; opacity:0.7;">Tap DONE to collect your pay</div>
        `,this.overlay.appendChild(n)}},120)}startScaffold(t){this.stop(),this.active=!0,this.overlay.style.display="block",this.overlay.innerHTML="";const e=document.createElement("button");e.textContent="✓ DONE",e.style.cssText=`
      position: absolute; top: 16px; right: 16px;
      z-index: 10001;
      background: rgba(193,102,107,0.95);
      color: #fff; border: none; border-radius: 10px;
      padding: 12px 22px; font-size: 16px; font-weight: 800;
      cursor: pointer; font-family: system-ui, sans-serif;
      touch-action: manipulation;
    `,e.addEventListener("click",()=>{this.stop(),t({score:75,qualityPct:.75,message:"Job done!"})}),this.overlay.appendChild(e),this.safetyTimer=setTimeout(()=>{this.active&&(this.stop(),t({score:50,qualityPct:.5,message:"Time up on the scaffold!"}))},9e4),setTimeout(()=>{if(this.active)try{this.scaffoldGame=new Hm,this.scaffoldGame.mount(this.overlay,i=>{this.safetyTimer&&clearTimeout(this.safetyTimer),this.stop(),t(i)})}catch(i){console.error("ScaffoldGame init failed:",i);const n=document.createElement("div");n.style.cssText=`
          display:flex; flex-direction:column; align-items:center;
          justify-content:center; height:100%; color:#fff;
          font-family:system-ui,sans-serif; gap:24px; padding:40px;
          text-align:center;
        `,n.innerHTML=`
          <div style="font-size:60px">🪣</div>
          <div style="font-size:30px; font-weight:800;">SCAFFOLD CLIMBED!</div>
          <div style="font-size:16px; opacity:0.7;">Tap DONE to collect your pay</div>
        `,this.overlay.appendChild(n)}},120)}startRandom(t){Math.random()<.5?this.startTroweling(t):this.startScaffold(t)}stop(){this.safetyTimer&&(clearTimeout(this.safetyTimer),this.safetyTimer=null),this.trowelingGame&&(this.trowelingGame.unmount(),this.trowelingGame=null),this.scaffoldGame&&(this.scaffoldGame.unmount(),this.scaffoldGame=null),this.overlay.style.display="none",this.overlay.innerHTML="",this.active=!1}}class Wm{constructor(){F(this,"overlay",null)}show(){if(this.overlay){this.refresh(),this.overlay.style.display="flex";return}this.overlay=document.createElement("div"),this.overlay.style.cssText=`
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
    `,e.textContent="📸 TEM PHOTO COLLECTION";const i=document.createElement("button");i.textContent="✕",i.style.cssText=`
      background: rgba(255,255,255,0.1); border: none;
      color: #fff; font-size: 20px; font-weight: 700;
      width: 40px; height: 40px; border-radius: 50%;
      cursor: pointer; flex-shrink: 0;
      touch-action: manipulation;
    `,i.addEventListener("click",()=>this.hide()),t.appendChild(e),t.appendChild(i),this.overlay.appendChild(t);const n=document.createElement("div");n.id="gallery-progress-wrap",n.style.cssText=`
      width: 100%; max-width: 600px;
      padding: 16px 20px 8px; box-sizing: border-box;
    `,this.overlay.appendChild(n);const r=document.createElement("div");r.id="gallery-grid",r.style.cssText=`
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
    `,this.overlay.appendChild(o),this.overlay.addEventListener("click",a=>{a.target===this.overlay&&this.hide()}),document.body.appendChild(this.overlay),this.refresh()}refresh(){if(!this.overlay)return;const t=cs(),e=t.length,i=tn.length,n=this.overlay.querySelector("#gallery-progress-wrap");if(n){n.innerHTML="";const a=document.createElement("div");a.style.cssText=`
        color: #fff; font-size: clamp(13px,3vw,16px);
        font-weight: 700; margin-bottom: 8px;
      `,a.textContent=e>=i?`🏆 FULL COLLECTION — ${e}/${i}`:`Collection: ${e} / ${i}`,n.appendChild(a);const l=document.createElement("div");l.style.cssText=`
        width: 100%; height: 10px; background: rgba(255,255,255,0.1);
        border-radius: 6px; overflow: hidden;
      `;const c=document.createElement("div");c.style.cssText=`
        height: 100%; border-radius: 6px;
        background: ${e>=i?"#FFD700":"#C8B89A"};
        width: ${Math.round(e/i*100)}%;
        transition: width 0.5s ease;
      `,l.appendChild(c),n.appendChild(l)}const r=this.overlay.querySelector("#gallery-grid");r&&(r.innerHTML="",tn.forEach(a=>{const l=t.includes(a.id),c=document.createElement("div");if(c.style.cssText=`
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
          `,c.appendChild(h)}r.appendChild(c)}));const o=this.overlay.querySelector("#gallery-encourage");o&&(e>=i?o.textContent="🏆 You've scraped them all. Matt's proud. Sort of.":e>=6?o.textContent="🔥 Almost there — keep scraping!":e>=3?o.textContent="💪 Nice collection forming. More plastering to do!":e===0?o.textContent="🪣 No photos yet — complete jobs to reveal TEM work!":o.textContent="✨ Keep scraping to unlock all 8 TEM photos!")}hide(){this.overlay&&(this.overlay.style.display="none")}}const Pl=[15087942,2201331,16757504,5025616,10233776,16739125];function Xm(s){const t=new Pt,e=new Z({color:s}),i=new O(new et(3.5,1.2,6.5),e);i.position.set(0,.6,0),i.castShadow=!0,t.add(i);const n=new Z({color:s}),r=new O(new et(2.5,.9,3.5),n);r.position.set(0,1.65,0),r.castShadow=!0,t.add(r);const o=new Z({color:1118481}),a=[[-1.8,.4,2.2],[1.8,.4,2.2],[-1.8,.4,-2.2],[1.8,.4,-2.2]];for(const[u,d,p]of a){const g=new O(new Qt(.5,.5,.4,8),o);g.rotation.z=Math.PI/2,g.position.set(u,d,p),g.castShadow=!0,t.add(g)}const l=new Z({color:3359829}),c=new O(new et(2.3,.7,.1),l);c.position.set(0,1.4,-3.3),t.add(c);const h=new O(new et(2.3,.7,.1),l);return h.position.set(0,1.4,3.3),t.add(h),t}function Ym(s,t){return s==="x"?t===1?-Math.PI/2:Math.PI/2:t===1?Math.PI:0}class qm{constructor(t){F(this,"cars",[]);F(this,"scene");this.scene=t,this._spawn()}_spawn(){const t=[-200,-160,-120,-80,-40,0,40,80,120,160,200],e=i=>{const n=Pl[Math.floor(Math.random()*Pl.length)],r=Xm(n),o=t[Math.floor(Math.random()*t.length)],a=Math.random()>.5?2:-2,l=10+Math.random()*10,c=Math.random()>.5?1:-1,h=-200+Math.random()*400;r.rotation.y=Ym(i,c);const u={group:r,axis:i,roadPos:o,laneOffset:a,speed:l,dir:c,pos:h};this.cars.push(u),this.scene.add(r),this._applyPosition(u)};for(let i=0;i<14;i++)e("z");for(let i=0;i<14;i++)e("x")}_applyPosition(t){t.axis==="x"?t.group.position.set(t.pos,0,t.roadPos+t.laneOffset):t.group.position.set(t.roadPos+t.laneOffset,0,t.pos)}update(t,e,i){for(const n of this.cars)n.pos+=n.dir*n.speed*t,n.pos>235&&(n.pos=-235),n.pos<-235&&(n.pos=235),this._applyPosition(n)}resolveVan(t,e,i=1.8){let n=t,r=e,o=!1;for(const a of this.cars){const l=a.group.position.x,c=a.group.position.z,h=(a.axis==="x"?3.25:1.75)+i,u=(a.axis==="x"?1.75:3.25)+i,d=n-l,p=r-c;if(Math.abs(d)<h&&Math.abs(p)<u){const g=h-Math.abs(d),x=u-Math.abs(p);g<x?n+=d<0?-g:g:r+=p<0?-x:x,o=!0}}return{x:n,z:r,hit:o}}checkVanCollision(t,e){const i=this.resolveVan(t,e);return{hit:i.hit,pushX:i.x-t,pushZ:i.z-e}}}const Dl=[16032353,15167313,2792847,2508371,15320170,11066076,16739179,7029286],jm=16767916,$m=40,Ll=8;function Jm(s){const t=new Pt,e=new Z({color:s}),i=new Z({color:jm}),n=new Z({color:s}),r=new O(new Qt(.3,.35,1.1,7),e);r.position.set(0,.55,0),t.add(r);const o=new O(new Ze(.28,6,5),i);o.position.set(0,1.28,0),t.add(o);const a=new O(new et(.15,.65,.15),e);a.position.set(-.45,.75,0),a.rotation.z=.15,t.add(a);const l=new O(new et(.15,.65,.15),e);l.position.set(.45,.75,0),l.rotation.z=-.15,t.add(l);const c=new O(new et(.18,.55,.18),n);c.position.set(-.18,0,.05),t.add(c);const h=new O(new et(.18,.55,.18),n);return h.position.set(.18,0,-.05),t.add(h),{group:t,leftArm:a,rightArm:l,leftLeg:c,rightLeg:h}}class Km{constructor(t){F(this,"pedestrians",[]);F(this,"scene");this.scene=t,this._spawn()}_spawn(){const t=[];for(let i=-200;i<=200;i+=40)t.push(i);const e=i=>{const n=Dl[Math.floor(Math.random()*Dl.length)],{group:r,leftArm:o,rightArm:a,leftLeg:l,rightLeg:c}=Jm(n),h=t[Math.floor(Math.random()*t.length)],u=Math.random()>.5?5:-5,d=h+u,p=[];for(let L=-240;L<240;L+=40)p.push(L);const g=p[Math.floor(Math.random()*p.length)],x=g+Ll/2,m=g+$m-Ll/2,f=x+Math.random()*(m-x),b=Math.random()>.5?1:-1,w=2+Math.random()*1.5,_={group:r,axis:i,roadPos:d,segStart:x,segEnd:m,pos:f,dir:b,speed:w,scattering:!1,scatterTimer:0,scatterDirX:0,scatterDirZ:0,walkCycle:Math.random()*Math.PI*2,leftArm:o,rightArm:a,leftLeg:l,rightLeg:c};this.pedestrians.push(_),this.scene.add(r),this._applyPosition(_),this._applyFacing(_)};for(let i=0;i<20;i++)e("x");for(let i=0;i<20;i++)e("z")}_applyPosition(t){t.axis==="x"?t.group.position.set(t.pos,0,t.roadPos):t.group.position.set(t.roadPos,0,t.pos)}_applyFacing(t){if(t.scattering){t.group.rotation.y=Math.atan2(t.scatterDirX,t.scatterDirZ);return}t.axis==="x"?t.group.rotation.y=t.dir===1?-Math.PI/2:Math.PI/2:t.group.rotation.y=t.dir===1?Math.PI:0}update(t,e,i){for(const n of this.pedestrians){const r=n.group.position.x,o=n.group.position.z,a=r-e,l=o-i,c=Math.sqrt(a*a+l*l);if(!n.scattering&&c<7){n.scattering=!0,n.scatterTimer=2.5;const d=Math.max(c,.01);n.scatterDirX=a/d,n.scatterDirZ=l/d}n.scattering?(n.group.position.x+=n.scatterDirX*12*t,n.group.position.z+=n.scatterDirZ*12*t,n.scatterTimer-=t,n.scatterTimer<=0&&(n.scattering=!1,n.axis==="x"?n.pos=Math.max(n.segStart,Math.min(n.segEnd,n.group.position.x)):n.pos=Math.max(n.segStart,Math.min(n.segEnd,n.group.position.z)),this._applyPosition(n))):(n.pos+=n.dir*n.speed*t,n.pos>=n.segEnd?(n.pos=n.segEnd,n.dir=-1):n.pos<=n.segStart&&(n.pos=n.segStart,n.dir=1),this._applyPosition(n)),this._applyFacing(n);const h=n.scattering?12:n.speed;n.walkCycle+=h*t*2;const u=Math.sin(n.walkCycle);n.leftArm.rotation.z=u*.4+.15,n.rightArm.rotation.z=-u*.4-.15,n.leftLeg.rotation.x=u*.5,n.rightLeg.rotation.x=-u*.5}}}const vi=class vi{constructor(t){F(this,"indicator");F(this,"scene");F(this,"lastVisit",-30);this.scene=t,this.indicator=new O(new Ze(1.5,10,8),new Z({color:13918762,emissive:new xt(10498064),emissiveIntensity:.8})),this.indicator.position.set(vi.POS.x,10,vi.POS.z),this.scene.add(this.indicator)}update(t){this.indicator.position.y=10+Math.sin(Date.now()*.002)*.5,this.indicator.rotation.y+=t*1.5}isNearby(t,e){const i=t-vi.POS.x,n=e-vi.POS.z;return Math.sqrt(i*i+n*n)<vi.TRIGGER_RADIUS}tryVisit(t,e){if(!this.isNearby(t,e))return!1;const i=Date.now()/1e3;return i-this.lastVisit<20?!1:(this.lastVisit=i,!0)}};F(vi,"POS",{x:-60,z:-100}),F(vi,"TRIGGER_RADIUS",12);let Uo=vi;class Zm{constructor(){F(this,"level",0);F(this,"isUrgent",!1);F(this,"lastUrgentToast",0)}update(t,e){Math.abs(e)>2?this.level=Math.min(1,this.level+t*.012):this.level=Math.max(0,this.level-t*.005),this.isUrgent=this.level>.8}tryRelief(t,e){const i=t-100,n=e-60;return Math.sqrt(i*i+n*n)>14||this.level===0?!1:(this.level=0,this.isUrgent=!1,!0)}get spillMultiplier(){return this.isUrgent?1.8:1}}async function Qm(){const s=new Y0;await s.init();const t=new q0(s.scene);t.spawnCrewAtCityPositions();const e=new um,i=new j0(s.scene),n=new fm,r=new Sm,o=new tm(i,e,_=>{n.triggerBump(_)},s.collisionWorld),a=new Qs,l=new Bo(s.scene),c=new vm(_=>{a.acceptJob(_),l.setTarget(Qs.WORKSHOP_POS),c.hide(),r.setActiveJob(_,1),r.updateCrewStatus([],[],!1)});n.onSpill=_=>{a.money=Math.max(0,a.money-_),r.updateMoney(a.money),r.showSpillPenalty(_)};const h=document.createElement("button");h.textContent="📋 JOBS",h.style.cssText=`
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
  `,h.addEventListener("pointerenter",()=>{h.style.background="rgba(212, 120, 125, 0.95)",h.style.transform="translateY(-2px)"}),h.addEventListener("pointerleave",()=>{h.style.background="rgba(193, 102, 107, 0.9)",h.style.transform=""}),h.addEventListener("click",()=>{c.isVisible()?c.hide():c.show(a.getAvailableJobs())}),document.body.appendChild(h);const u=new qm(s.scene),d=new Km(s.scene),p=new Uo(s.scene),g=new Zm,x=new Vm,m=new Wm,f=document.createElement("button");f.textContent="📸",f.title="Photo Collection",f.style.cssText=`
    position: fixed; bottom: 20px; left: 20px;
    z-index: 1000; background: rgba(70,70,70,0.9);
    color: #fff; border: none; border-radius: 50%;
    width: 52px; height: 52px; font-size: 22px;
    cursor: pointer; touch-action: manipulation;
    box-shadow: 0 2px 8px rgba(0,0,0,0.5);
    transition: background 0.15s, transform 0.1s;
  `,f.addEventListener("pointerenter",()=>{f.style.background="rgba(100,100,100,0.95)",f.style.transform="scale(1.1)"}),f.addEventListener("pointerleave",()=>{f.style.background="rgba(70,70,70,0.9)",f.style.transform=""}),f.addEventListener("click",()=>m.show()),document.body.appendChild(f);let b=!1;const w=document.createElement("div");w.style.cssText=`
    position:fixed; top:8px; left:8px; z-index:5000;
    background:rgba(0,0,0,0.6); color:#fff; font-size:11px;
    font-family:monospace; padding:6px 10px; border-radius:6px;
    pointer-events:none; line-height:1.5;
  `,document.body.appendChild(w),s.onUpdate(_=>{o.update(_),i.updateSuspension(_),n.update(_);const L=i.mesh.position.x,T=i.mesh.position.z;if(p.update(_),p.tryVisit(L,T)&&(n.level=Math.max(0,n.level-.6),r.showToast("☕ Coffee stop! Plaster calmed!",13918762)),g.update(_,a.activeJob?o.speed:0),g.tryRelief(L,T)&&r.showToast("🚽 Ahhh relief! Back on the tools!",2201331),g.isUrgent&&a.activeJob){const N=Date.now();N-g.lastUrgentToast>15e3&&(g.lastUrgentToast=N,r.showToast("🚽 Need a pee break! Find the toilet!",16733986))}n.spillRateMultiplier=g.spillMultiplier,u.update(_,L,T),d.update(_,L,T);const A=u.resolveVan(L,T);if(A.hit&&(i.mesh.position.x=A.x,i.mesh.position.z=A.z,o.applyImpulse(0,0)),l.update(_,L,T),a.activeJob){const N=a.tickTravel(_);r.updateTravelTimer(a.travelTimer),N!=null&&N.failed&&(l.setTarget(null),r.updateTravelTimer(null),r.showTimerFail(15e4),r.setActiveJob(null,1),r.updateMoney(a.money),r.updateCrewStatus([],[],!1),t.showAllCrew(),setTimeout(()=>c.show(a.getAvailableJobs()),3500))}else r.updateTravelTimer(null);if(a.activeJob!==null)if(a.activePhase===1)r.updateJobDistance(a.distanceToWorkshop(L,T));else if(a.activePhase===2){const N=a.nextCrewNeeded();if(N){const z=t.getCrewPosition(N);r.updateJobDistance(a.distanceToPoint(L,T,z.x,z.z))}}else r.updateJobDistance(a.distanceTo(L,T));if(a.activeJob&&a.activePhase===1&&!b&&a.checkPhase1Arrival(L,T)){b=!0,a.advanceToPhase2();const N=a.nextCrewNeeded();if(N){const z=t.getCrewPosition(N);l.setTarget(z)}r.showPhase1Complete(),r.setActiveJob(a.activeJob,2),r.updateCrewStatus(a.crewToPickup,a.crewPickedUp,!0),setTimeout(()=>{b=!1},2e3)}if(a.activeJob&&a.activePhase===2&&!b)for(const N of a.crewToPickup){if(a.crewPickedUp.includes(N))continue;const z=t.getCrewPosition(N);if(a.distanceToPoint(L,T,z.x,z.z)<10){b=!0,t.hideCrew(N);const q=a.pickupCrew(N);if(r.updateCrewStatus(a.crewToPickup,a.crewPickedUp,!0),q)a.advanceToPhase3(),l.setTarget(a.activeJob.position),r.showCrewPickup(N,null),r.setActiveJob(a.activeJob,3);else{const X=a.nextCrewNeeded();if(X){const Q=t.getCrewPosition(X);l.setTarget(Q),r.showCrewPickup(N,X)}}setTimeout(()=>{b=!1},1500);break}}if(a.activeJob&&a.activePhase===3&&!b&&!x.isActive()){const N=a.checkArrival(L,T);N!==null&&(b=!0,l.setTarget(null),r.setActiveJob(null,3),r.updateCrewStatus([],[],!1),x.startRandom(z=>{const Y=a.completeJob(N,z.qualityPct);r.showJobComplete(N.title,Y),r.updateMoney(a.money),t.showAllCrew(),b=!1,setTimeout(()=>{const q=a.getAvailableJobs();q.length>0&&c.show(q)},3500)}))}s.camera.follow(i.mesh.position,i.velocity,i.heading),r.update(o.speed,n.level);const P=a.activeJob,S=P?`P${a.activePhase}`:"idle",y=P?a.activePhase===1?Math.round(a.distanceToWorkshop(L,T)):a.activePhase===2?Math.round(a.distanceToPoint(L,T,...(()=>{const N=a.nextCrewNeeded();if(!N)return[L,T];const z=t.getCrewPosition(N);return[z.x,z.z]})())):Math.round(a.distanceTo(L,T)):0,C=P?`crew:${a.crewPickedUp.length}/${a.crewToPickup.length}`:"";w.textContent=`${S} | dist:${y} | ${C} | lock:${b} | mg:${x.isActive()}`}),setTimeout(()=>{c.show(a.getAvailableJobs())},1e3),s.start()}Qm();
//# sourceMappingURL=index-sU5Ph9jR.js.map
