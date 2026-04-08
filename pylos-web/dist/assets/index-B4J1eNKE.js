(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Es="183",Dr={ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Dd=0,ru=1,Id=2,bo=1,ff=2,as=3,Un=0,Ve=1,Mn=2,Kn=0,Ir=1,su=2,ou=3,au=4,Ld=5,zi=100,Ud=101,Nd=102,Fd=103,Od=104,Bd=200,zd=201,Vd=202,kd=203,mc=204,_c=205,Gd=206,Hd=207,Wd=208,Xd=209,qd=210,Yd=211,$d=212,Zd=213,jd=214,xc=0,vc=1,Mc=2,Nr=3,Sc=4,yc=5,Ec=6,bc=7,df=0,Kd=1,Jd=2,In=0,pf=1,gf=2,mf=3,El=4,_f=5,xf=6,vf=7,Mf=300,qi=301,Fr=302,ca=303,la=304,$o=306,Oo=1e3,jn=1001,Tc=1002,Ce=1003,Qd=1004,Cs=1005,Le=1006,ua=1007,ki=1008,tn=1009,Sf=1010,yf=1011,ms=1012,bl=1013,Nn=1014,Cn=1015,Qn=1016,Tl=1017,Al=1018,_s=1020,Ef=35902,bf=35899,Tf=1021,Af=1022,Sn=1023,ti=1026,Gi=1027,wf=1028,wl=1029,Or=1030,Rl=1031,Cl=1033,To=33776,Ao=33777,wo=33778,Ro=33779,Ac=35840,wc=35841,Rc=35842,Cc=35843,Pc=36196,Dc=37492,Ic=37496,Lc=37488,Uc=37489,Nc=37490,Fc=37491,Oc=37808,Bc=37809,zc=37810,Vc=37811,kc=37812,Gc=37813,Hc=37814,Wc=37815,Xc=37816,qc=37817,Yc=37818,$c=37819,Zc=37820,jc=37821,Kc=36492,Jc=36494,Qc=36495,tl=36283,el=36284,nl=36285,il=36286,tp=3200,Rf=0,ep=1,_i="",ln="srgb",Br="srgb-linear",Bo="linear",ne="srgb",Ki=7680,cu=519,np=512,ip=513,rp=514,Pl=515,sp=516,op=517,Dl=518,ap=519,lu=35044,uu="300 es",Pn=2e3,xs=2001;function cp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function zo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lp(){const i=zo("canvas");return i.style.display="block",i}const hu={};function fu(...i){const t="THREE."+i.shift();console.log(t,...i)}function Cf(i){const t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function kt(...i){i=Cf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=Cf(i);const t="THREE."+i.shift();{const e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Vo(...i){const t=i.join(" ");t in hu||(hu[t]=!0,kt(...i))}function up(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const hp={[xc]:vc,[Mc]:Ec,[Sc]:bc,[Nr]:yc,[vc]:xc,[Ec]:Mc,[bc]:Sc,[yc]:Nr};class $i{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Co=Math.PI/180,rl=180/Math.PI;function bs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Ht(i,t,e){return Math.max(t,Math.min(e,i))}function fp(i,t){return(i%t+t)%t}function ha(i,t,e){return(1-e)*i+e*t}function Xr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const dp={DEG2RAD:Co};class Ot{constructor(t=0,e=0){Ot.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class yi{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,l){let u=n[r+0],h=n[r+1],d=n[r+2],g=n[r+3],p=s[o+0],m=s[o+1],S=s[o+2],T=s[o+3];if(g!==T||u!==p||h!==m||d!==S){let x=u*p+h*m+d*S+g*T;x<0&&(p=-p,m=-m,S=-S,T=-T,x=-x);let _=1-l;if(x<.9995){const E=Math.acos(x),f=Math.sin(E);_=Math.sin(_*E)/f,l=Math.sin(l*E)/f,u=u*_+p*l,h=h*_+m*l,d=d*_+S*l,g=g*_+T*l}else{u=u*_+p*l,h=h*_+m*l,d=d*_+S*l,g=g*_+T*l;const E=1/Math.sqrt(u*u+h*h+d*d+g*g);u*=E,h*=E,d*=E,g*=E}}t[e]=u,t[e+1]=h,t[e+2]=d,t[e+3]=g}static multiplyQuaternionsFlat(t,e,n,r,s,o){const l=n[r],u=n[r+1],h=n[r+2],d=n[r+3],g=s[o],p=s[o+1],m=s[o+2],S=s[o+3];return t[e]=l*S+d*g+u*m-h*p,t[e+1]=u*S+d*p+h*g-l*m,t[e+2]=h*S+d*m+l*p-u*g,t[e+3]=d*S-l*g-u*p-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,l=Math.cos,u=Math.sin,h=l(n/2),d=l(r/2),g=l(s/2),p=u(n/2),m=u(r/2),S=u(s/2);switch(o){case"XYZ":this._x=p*d*g+h*m*S,this._y=h*m*g-p*d*S,this._z=h*d*S+p*m*g,this._w=h*d*g-p*m*S;break;case"YXZ":this._x=p*d*g+h*m*S,this._y=h*m*g-p*d*S,this._z=h*d*S-p*m*g,this._w=h*d*g+p*m*S;break;case"ZXY":this._x=p*d*g-h*m*S,this._y=h*m*g+p*d*S,this._z=h*d*S+p*m*g,this._w=h*d*g-p*m*S;break;case"ZYX":this._x=p*d*g-h*m*S,this._y=h*m*g+p*d*S,this._z=h*d*S-p*m*g,this._w=h*d*g+p*m*S;break;case"YZX":this._x=p*d*g+h*m*S,this._y=h*m*g+p*d*S,this._z=h*d*S-p*m*g,this._w=h*d*g-p*m*S;break;case"XZY":this._x=p*d*g-h*m*S,this._y=h*m*g-p*d*S,this._z=h*d*S+p*m*g,this._w=h*d*g+p*m*S;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],l=e[5],u=e[9],h=e[2],d=e[6],g=e[10],p=n+l+g;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-u)*m,this._y=(s-h)*m,this._z=(o-r)*m}else if(n>l&&n>g){const m=2*Math.sqrt(1+n-l-g);this._w=(d-u)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+h)/m}else if(l>g){const m=2*Math.sqrt(1+l-n-g);this._w=(s-h)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(u+d)/m}else{const m=2*Math.sqrt(1+g-n-l);this._w=(o-r)/m,this._x=(s+h)/m,this._y=(u+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,l=e._x,u=e._y,h=e._z,d=e._w;return this._x=n*d+o*l+r*h-s*u,this._y=r*d+o*u+s*l-n*h,this._z=s*d+o*h+n*u-r*l,this._w=o*d-n*l-r*u-s*h,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,l=this.dot(t);l<0&&(n=-n,r=-r,s=-s,o=-o,l=-l);let u=1-e;if(l<.9995){const h=Math.acos(l),d=Math.sin(h);u=Math.sin(u*h)/d,e=Math.sin(e*h)/d,this._x=this._x*u+n*e,this._y=this._y*u+r*e,this._z=this._z*u+s*e,this._w=this._w*u+o*e,this._onChangeCallback()}else this._x=this._x*u+n*e,this._y=this._y*u+r*e,this._z=this._z*u+s*e,this._w=this._w*u+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(du.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(du.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,l=t.z,u=t.w,h=2*(o*r-l*n),d=2*(l*e-s*r),g=2*(s*n-o*e);return this.x=e+u*h+o*g-l*d,this.y=n+u*d+l*h-s*g,this.z=r+u*g+s*d-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,l=e.y,u=e.z;return this.x=r*u-s*l,this.y=s*o-n*u,this.z=n*l-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fa.copy(this).projectOnVector(t),this.sub(fa)}reflect(t){return this.sub(fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ht(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new L,du=new yi;class Xt{constructor(t,e,n,r,s,o,l,u,h){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,l,u,h)}set(t,e,n,r,s,o,l,u,h){const d=this.elements;return d[0]=t,d[1]=r,d[2]=l,d[3]=e,d[4]=s,d[5]=u,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],l=n[3],u=n[6],h=n[1],d=n[4],g=n[7],p=n[2],m=n[5],S=n[8],T=r[0],x=r[3],_=r[6],E=r[1],f=r[4],a=r[7],M=r[2],c=r[5],C=r[8];return s[0]=o*T+l*E+u*M,s[3]=o*x+l*f+u*c,s[6]=o*_+l*a+u*C,s[1]=h*T+d*E+g*M,s[4]=h*x+d*f+g*c,s[7]=h*_+d*a+g*C,s[2]=p*T+m*E+S*M,s[5]=p*x+m*f+S*c,s[8]=p*_+m*a+S*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],l=t[5],u=t[6],h=t[7],d=t[8];return e*o*d-e*l*h-n*s*d+n*l*u+r*s*h-r*o*u}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],l=t[5],u=t[6],h=t[7],d=t[8],g=d*o-l*h,p=l*u-d*s,m=h*s-o*u,S=e*g+n*p+r*m;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/S;return t[0]=g*T,t[1]=(r*h-d*n)*T,t[2]=(l*n-r*o)*T,t[3]=p*T,t[4]=(d*e-r*u)*T,t[5]=(r*s-l*e)*T,t[6]=m*T,t[7]=(n*u-h*e)*T,t[8]=(o*e-n*s)*T,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,l){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*o+h*l)+o+t,-r*h,r*u,-r*(-h*o+u*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(da.makeScale(t,e)),this}rotate(t){return this.premultiply(da.makeRotation(-t)),this}translate(t,e){return this.premultiply(da.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const da=new Xt,pu=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pp(){const i={enabled:!0,workingColorSpace:Br,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ne&&(r.r=Jn(r.r),r.g=Jn(r.g),r.b=Jn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ne&&(r.r=Lr(r.r),r.g=Lr(r.g),r.b=Lr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===_i?Bo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Br]:{primaries:t,whitePoint:n,transfer:Bo,toXYZ:pu,fromXYZ:gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:pu,fromXYZ:gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}const Jt=pp();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Lr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ji;class gp{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ji===void 0&&(Ji=zo("canvas")),Ji.width=t.width,Ji.height=t.height;const r=Ji.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Ji}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Jn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let mp=0;class Il{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=bs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(pa(r[o].image)):s.push(pa(r[o]))}else s=pa(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}let _p=0;const ga=new L;class Fe extends $i{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=jn,r=jn,s=Le,o=ki,l=Sn,u=tn,h=Fe.DEFAULT_ANISOTROPY,d=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=bs(),this.name="",this.source=new Il(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ga).x}get height(){return this.source.getSize(ga).y}get depth(){return this.source.getSize(ga).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Mf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oo:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case Tc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oo:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case Tc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=Mf;Fe.DEFAULT_ANISOTROPY=1;class ae{constructor(t=0,e=0,n=0,r=1){ae.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const u=t.elements,h=u[0],d=u[4],g=u[8],p=u[1],m=u[5],S=u[9],T=u[2],x=u[6],_=u[10];if(Math.abs(d-p)<.01&&Math.abs(g-T)<.01&&Math.abs(S-x)<.01){if(Math.abs(d+p)<.1&&Math.abs(g+T)<.1&&Math.abs(S+x)<.1&&Math.abs(h+m+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const f=(h+1)/2,a=(m+1)/2,M=(_+1)/2,c=(d+p)/4,C=(g+T)/4,v=(S+x)/4;return f>a&&f>M?f<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(f),r=c/n,s=C/n):a>M?a<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(a),n=c/r,s=v/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=C/s,r=v/s),this.set(n,r,s,e),this}let E=Math.sqrt((x-S)*(x-S)+(g-T)*(g-T)+(p-d)*(p-d));return Math.abs(E)<.001&&(E=1),this.x=(x-S)/E,this.y=(g-T)/E,this.z=(p-d)/E,this.w=Math.acos((h+m+_-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ht(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xp extends $i{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ae(0,0,t,e),this.scissorTest=!1,this.viewport=new ae(0,0,t,e),this.textures=[];const r={width:t,height:e,depth:n.depth},s=new Fe(r),o=n.count;for(let l=0;l<o;l++)this.textures[l]=s.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Le,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Il(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ln extends xp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Pf extends Fe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vp extends Fe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zt{constructor(t,e,n,r,s,o,l,u,h,d,g,p,m,S,T,x){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,l,u,h,d,g,p,m,S,T,x)}set(t,e,n,r,s,o,l,u,h,d,g,p,m,S,T,x){const _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=l,_[13]=u,_[2]=h,_[6]=d,_[10]=g,_[14]=p,_[3]=m,_[7]=S,_[11]=T,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,n=t.elements,r=1/Qi.setFromMatrixColumn(t,0).length(),s=1/Qi.setFromMatrixColumn(t,1).length(),o=1/Qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),l=Math.sin(n),u=Math.cos(r),h=Math.sin(r),d=Math.cos(s),g=Math.sin(s);if(t.order==="XYZ"){const p=o*d,m=o*g,S=l*d,T=l*g;e[0]=u*d,e[4]=-u*g,e[8]=h,e[1]=m+S*h,e[5]=p-T*h,e[9]=-l*u,e[2]=T-p*h,e[6]=S+m*h,e[10]=o*u}else if(t.order==="YXZ"){const p=u*d,m=u*g,S=h*d,T=h*g;e[0]=p+T*l,e[4]=S*l-m,e[8]=o*h,e[1]=o*g,e[5]=o*d,e[9]=-l,e[2]=m*l-S,e[6]=T+p*l,e[10]=o*u}else if(t.order==="ZXY"){const p=u*d,m=u*g,S=h*d,T=h*g;e[0]=p-T*l,e[4]=-o*g,e[8]=S+m*l,e[1]=m+S*l,e[5]=o*d,e[9]=T-p*l,e[2]=-o*h,e[6]=l,e[10]=o*u}else if(t.order==="ZYX"){const p=o*d,m=o*g,S=l*d,T=l*g;e[0]=u*d,e[4]=S*h-m,e[8]=p*h+T,e[1]=u*g,e[5]=T*h+p,e[9]=m*h-S,e[2]=-h,e[6]=l*u,e[10]=o*u}else if(t.order==="YZX"){const p=o*u,m=o*h,S=l*u,T=l*h;e[0]=u*d,e[4]=T-p*g,e[8]=S*g+m,e[1]=g,e[5]=o*d,e[9]=-l*d,e[2]=-h*d,e[6]=m*g+S,e[10]=p-T*g}else if(t.order==="XZY"){const p=o*u,m=o*h,S=l*u,T=l*h;e[0]=u*d,e[4]=-g,e[8]=h*d,e[1]=p*g+T,e[5]=o*d,e[9]=m*g-S,e[2]=S*g-m,e[6]=l*d,e[10]=T*g+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mp,t,Sp)}lookAt(t,e,n){const r=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),si.crossVectors(n,je),si.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),si.crossVectors(n,je)),si.normalize(),Ps.crossVectors(je,si),r[0]=si.x,r[4]=Ps.x,r[8]=je.x,r[1]=si.y,r[5]=Ps.y,r[9]=je.y,r[2]=si.z,r[6]=Ps.z,r[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],l=n[4],u=n[8],h=n[12],d=n[1],g=n[5],p=n[9],m=n[13],S=n[2],T=n[6],x=n[10],_=n[14],E=n[3],f=n[7],a=n[11],M=n[15],c=r[0],C=r[4],v=r[8],y=r[12],A=r[1],b=r[5],w=r[9],R=r[13],U=r[2],N=r[6],O=r[10],F=r[14],G=r[3],H=r[7],nt=r[11],et=r[15];return s[0]=o*c+l*A+u*U+h*G,s[4]=o*C+l*b+u*N+h*H,s[8]=o*v+l*w+u*O+h*nt,s[12]=o*y+l*R+u*F+h*et,s[1]=d*c+g*A+p*U+m*G,s[5]=d*C+g*b+p*N+m*H,s[9]=d*v+g*w+p*O+m*nt,s[13]=d*y+g*R+p*F+m*et,s[2]=S*c+T*A+x*U+_*G,s[6]=S*C+T*b+x*N+_*H,s[10]=S*v+T*w+x*O+_*nt,s[14]=S*y+T*R+x*F+_*et,s[3]=E*c+f*A+a*U+M*G,s[7]=E*C+f*b+a*N+M*H,s[11]=E*v+f*w+a*O+M*nt,s[15]=E*y+f*R+a*F+M*et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],l=t[5],u=t[9],h=t[13],d=t[2],g=t[6],p=t[10],m=t[14],S=t[3],T=t[7],x=t[11],_=t[15],E=u*m-h*p,f=l*m-h*g,a=l*p-u*g,M=o*m-h*d,c=o*p-u*d,C=o*g-l*d;return e*(T*E-x*f+_*a)-n*(S*E-x*M+_*c)+r*(S*f-T*M+_*C)-s*(S*a-T*c+x*C)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],l=t[5],u=t[6],h=t[7],d=t[8],g=t[9],p=t[10],m=t[11],S=t[12],T=t[13],x=t[14],_=t[15],E=e*l-n*o,f=e*u-r*o,a=e*h-s*o,M=n*u-r*l,c=n*h-s*l,C=r*h-s*u,v=d*T-g*S,y=d*x-p*S,A=d*_-m*S,b=g*x-p*T,w=g*_-m*T,R=p*_-m*x,U=E*R-f*w+a*b+M*A-c*y+C*v;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/U;return t[0]=(l*R-u*w+h*b)*N,t[1]=(r*w-n*R-s*b)*N,t[2]=(T*C-x*c+_*M)*N,t[3]=(p*c-g*C-m*M)*N,t[4]=(u*A-o*R-h*y)*N,t[5]=(e*R-r*A+s*y)*N,t[6]=(x*a-S*C-_*f)*N,t[7]=(d*C-p*a+m*f)*N,t[8]=(o*w-l*A+h*v)*N,t[9]=(n*A-e*w-s*v)*N,t[10]=(S*c-T*a+_*E)*N,t[11]=(g*a-d*c-m*E)*N,t[12]=(l*y-o*b-u*v)*N,t[13]=(e*b-n*y+r*v)*N,t[14]=(T*f-S*M-x*E)*N,t[15]=(d*M-g*f+p*E)*N,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,l=t.y,u=t.z,h=s*o,d=s*l;return this.set(h*o+n,h*l-r*u,h*u+r*l,0,h*l+r*u,d*l+n,d*u-r*o,0,h*u-r*l,d*u+r*o,s*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,l=e._z,u=e._w,h=s+s,d=o+o,g=l+l,p=s*h,m=s*d,S=s*g,T=o*d,x=o*g,_=l*g,E=u*h,f=u*d,a=u*g,M=n.x,c=n.y,C=n.z;return r[0]=(1-(T+_))*M,r[1]=(m+a)*M,r[2]=(S-f)*M,r[3]=0,r[4]=(m-a)*c,r[5]=(1-(p+_))*c,r[6]=(x+E)*c,r[7]=0,r[8]=(S+f)*C,r[9]=(x-E)*C,r[10]=(1-(p+T))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Qi.set(r[0],r[1],r[2]).length();const l=Qi.set(r[4],r[5],r[6]).length(),u=Qi.set(r[8],r[9],r[10]).length();s<0&&(o=-o),pn.copy(this);const h=1/o,d=1/l,g=1/u;return pn.elements[0]*=h,pn.elements[1]*=h,pn.elements[2]*=h,pn.elements[4]*=d,pn.elements[5]*=d,pn.elements[6]*=d,pn.elements[8]*=g,pn.elements[9]*=g,pn.elements[10]*=g,e.setFromRotationMatrix(pn),n.x=o,n.y=l,n.z=u,this}makePerspective(t,e,n,r,s,o,l=Pn,u=!1){const h=this.elements,d=2*s/(e-t),g=2*s/(n-r),p=(e+t)/(e-t),m=(n+r)/(n-r);let S,T;if(u)S=s/(o-s),T=o*s/(o-s);else if(l===Pn)S=-(o+s)/(o-s),T=-2*o*s/(o-s);else if(l===xs)S=-o/(o-s),T=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=g,h[9]=m,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,r,s,o,l=Pn,u=!1){const h=this.elements,d=2/(e-t),g=2/(n-r),p=-(e+t)/(e-t),m=-(n+r)/(n-r);let S,T;if(u)S=1/(o-s),T=o/(o-s);else if(l===Pn)S=-2/(o-s),T=-(o+s)/(o-s);else if(l===xs)S=-1/(o-s),T=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return h[0]=d,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=g,h[9]=0,h[13]=m,h[2]=0,h[6]=0,h[10]=S,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qi=new L,pn=new Zt,Mp=new L(0,0,0),Sp=new L(1,1,1),si=new L,Ps=new L,je=new L,mu=new Zt,_u=new yi;class Fn{constructor(t=0,e=0,n=0,r=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],l=r[8],u=r[1],h=r[5],d=r[9],g=r[2],p=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-g,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Ht(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-g,s)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return _u.setFromEuler(this),this.setFromQuaternion(_u,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Ll{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let yp=0;const xu=new L,tr=new yi,kn=new Zt,Ds=new L,qr=new L,Ep=new L,bp=new yi,vu=new L(1,0,0),Mu=new L(0,1,0),Su=new L(0,0,1),yu={type:"added"},Tp={type:"removed"},er={type:"childadded",child:null},ma={type:"childremoved",child:null};class Oe extends $i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=bs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Oe.DEFAULT_UP.clone();const t=new L,e=new Fn,n=new yi,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Xt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Oe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(vu,t)}rotateY(t){return this.rotateOnAxis(Mu,t)}rotateZ(t){return this.rotateOnAxis(Su,t)}translateOnAxis(t,e){return xu.copy(t).applyQuaternion(this.quaternion),this.position.add(xu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(vu,t)}translateY(t){return this.translateOnAxis(Mu,t)}translateZ(t){return this.translateOnAxis(Su,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ds.copy(t):Ds.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(qr,Ds,this.up):kn.lookAt(Ds,qr,this.up),this.quaternion.setFromRotationMatrix(kn),r&&(kn.extractRotation(r.matrixWorld),tr.setFromRotationMatrix(kn),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yu),er.child=t,this.dispatchEvent(er),er.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tp),ma.child=t,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yu),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,Ep),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,bp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){const g=u[h];s(t.shapes,g)}else s(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(s(t.materials,this.material[u]));r.material=l}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];r.animations.push(s(t.animations,u))}}if(e){const l=o(t.geometries),u=o(t.materials),h=o(t.textures),d=o(t.images),g=o(t.shapes),p=o(t.skeletons),m=o(t.animations),S=o(t.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),g.length>0&&(n.shapes=g),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),S.length>0&&(n.nodes=S)}return n.object=r,n;function o(l){const u=[];for(const h in l){const d=l[h];delete d.metadata,u.push(d)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Oe.DEFAULT_UP=new L(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Is extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ap={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Is,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Is,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Is,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const l=this._targetRay,u=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const T of t.hand.values()){const x=e.getJointPose(T,n),_=this._getHandJoint(h,T);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const d=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],p=d.position.distanceTo(g.position),m=.02,S=.005;h.inputState.pinching&&p>m+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=m-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Ap)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Is;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Df={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Ls={h:0,s:0,l:0};function xa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class te{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=Jt.workingColorSpace){if(t=fp(t,1),e=Ht(e,0,1),n=Ht(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=xa(o,s,t+1/3),this.g=xa(o,s,t),this.b=xa(o,s,t-1/3)}return Jt.colorSpaceToWorking(this,r),this}setStyle(t,e=ln){function n(s){s!==void 0&&parseFloat(s)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){const n=Df[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=Lr(t.r),this.g=Lr(t.g),this.b=Lr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return Jt.workingToColorSpace(Ie.copy(this),t),Math.round(Ht(Ie.r*255,0,255))*65536+Math.round(Ht(Ie.g*255,0,255))*256+Math.round(Ht(Ie.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(Ie.copy(this),e);const n=Ie.r,r=Ie.g,s=Ie.b,o=Math.max(n,r,s),l=Math.min(n,r,s);let u,h;const d=(l+o)/2;if(l===o)u=0,h=0;else{const g=o-l;switch(h=d<=.5?g/(o+l):g/(2-o-l),o){case n:u=(r-s)/g+(r<s?6:0);break;case r:u=(s-n)/g+2;break;case s:u=(n-r)/g+4;break}u/=6}return t.h=u,t.s=h,t.l=d,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=ln){Jt.workingToColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,r=Ie.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Ls);const n=ha(oi.h,Ls.h,e),r=ha(oi.s,Ls.s,e),s=ha(oi.l,Ls.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new te;te.NAMES=Df;class wp extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const gn=new L,Gn=new L,va=new L,Hn=new L,nr=new L,ir=new L,Eu=new L,Ma=new L,Sa=new L,ya=new L,Ea=new ae,ba=new ae,Ta=new ae;class le{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),gn.subVectors(t,e),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){gn.subVectors(r,e),Gn.subVectors(n,e),va.subVectors(t,e);const o=gn.dot(gn),l=gn.dot(Gn),u=gn.dot(va),h=Gn.dot(Gn),d=Gn.dot(va),g=o*h-l*l;if(g===0)return s.set(0,0,0),null;const p=1/g,m=(h*u-l*d)*p,S=(o*d-l*u)*p;return s.set(1-m-S,S,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(t,e,n,r,s,o,l,u){return this.getBarycoord(t,e,n,r,Hn)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Hn.x),u.addScaledVector(o,Hn.y),u.addScaledVector(l,Hn.z),u)}static getInterpolatedAttribute(t,e,n,r,s,o){return Ea.setScalar(0),ba.setScalar(0),Ta.setScalar(0),Ea.fromBufferAttribute(t,e),ba.fromBufferAttribute(t,n),Ta.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Ea,s.x),o.addScaledVector(ba,s.y),o.addScaledVector(Ta,s.z),o}static isFrontFacing(t,e,n,r){return gn.subVectors(n,e),Gn.subVectors(t,e),gn.cross(Gn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return gn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),gn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return le.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return le.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return le.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return le.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return le.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,l;nr.subVectors(r,n),ir.subVectors(s,n),Ma.subVectors(t,n);const u=nr.dot(Ma),h=ir.dot(Ma);if(u<=0&&h<=0)return e.copy(n);Sa.subVectors(t,r);const d=nr.dot(Sa),g=ir.dot(Sa);if(d>=0&&g<=d)return e.copy(r);const p=u*g-d*h;if(p<=0&&u>=0&&d<=0)return o=u/(u-d),e.copy(n).addScaledVector(nr,o);ya.subVectors(t,s);const m=nr.dot(ya),S=ir.dot(ya);if(S>=0&&m<=S)return e.copy(s);const T=m*h-u*S;if(T<=0&&h>=0&&S<=0)return l=h/(h-S),e.copy(n).addScaledVector(ir,l);const x=d*S-m*g;if(x<=0&&g-d>=0&&m-S>=0)return Eu.subVectors(s,r),l=(g-d)/(g-d+(m-S)),e.copy(r).addScaledVector(Eu,l);const _=1/(x+T+p);return o=T*_,l=p*_,e.copy(n).addScaledVector(nr,o).addScaledVector(ir,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class ke{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,mn):mn.fromBufferAttribute(s,o),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),Ns.subVectors(this.max,Yr),rr.subVectors(t.a,Yr),sr.subVectors(t.b,Yr),or.subVectors(t.c,Yr),ai.subVectors(sr,rr),ci.subVectors(or,sr),wi.subVectors(rr,or);let e=[0,-ai.z,ai.y,0,-ci.z,ci.y,0,-wi.z,wi.y,ai.z,0,-ai.x,ci.z,0,-ci.x,wi.z,0,-wi.x,-ai.y,ai.x,0,-ci.y,ci.x,0,-wi.y,wi.x,0];return!Aa(e,rr,sr,or,Ns)||(e=[1,0,0,0,1,0,0,0,1],!Aa(e,rr,sr,or,Ns))?!1:(Fs.crossVectors(ai,ci),e=[Fs.x,Fs.y,Fs.z],Aa(e,rr,sr,or,Ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wn=[new L,new L,new L,new L,new L,new L,new L,new L],mn=new L,Us=new ke,rr=new L,sr=new L,or=new L,ai=new L,ci=new L,wi=new L,Yr=new L,Ns=new L,Fs=new L,Ri=new L;function Aa(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ri.fromArray(i,s);const l=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),u=t.dot(Ri),h=e.dot(Ri),d=n.dot(Ri);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>l)return!1}return!0}const ge=new L,Os=new Ot;let Rp=0;class Ye{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Rp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lu,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Os.fromBufferAttribute(this,e),Os.applyMatrix3(t),this.setXY(e,Os.x,Os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix3(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyMatrix4(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.applyNormalMatrix(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ge.fromBufferAttribute(this,e),ge.transformDirection(t),this.setXYZ(e,ge.x,ge.y,ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xr(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xr(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xr(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lu&&(t.usage=this.usage),t}}class If extends Ye{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Lf extends Ye{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class fn extends Ye{constructor(t,e,n){super(new Float32Array(t),e,n)}}const Cp=new ke,$r=new L,wa=new L;class Ul{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Cp.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;$r.subVectors(t,this.center);const e=$r.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector($r,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint($r.copy(t.center).add(wa)),this.expandByPoint($r.copy(t.center).sub(wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let Pp=0;const on=new Zt,Ra=new Oe,ar=new L,Ke=new ke,Zr=new ke,be=new L;class Bn extends $i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pp++}),this.uuid=bs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(cp(t)?Lf:If)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Xt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,n){return on.makeTranslation(t,e,n),this.applyMatrix4(on),this}scale(t,e,n){return on.makeScale(t,e,n),this.applyMatrix4(on),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fn(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ke);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ke.setFromBufferAttribute(s),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Ke.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Ke.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Ke.min),this.boundingBox.expandByPoint(Ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ul);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ke.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const l=e[s];Zr.setFromBufferAttribute(l),this.morphTargetsRelative?(be.addVectors(Ke.min,Zr.min),Ke.expandByPoint(be),be.addVectors(Ke.max,Zr.max),Ke.expandByPoint(be)):(Ke.expandByPoint(Zr.min),Ke.expandByPoint(Zr.max))}Ke.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)be.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(be));if(e)for(let s=0,o=e.length;s<o;s++){const l=e[s],u=this.morphTargetsRelative;for(let h=0,d=l.count;h<d;h++)be.fromBufferAttribute(l,h),u&&(ar.fromBufferAttribute(t,h),be.add(ar)),r=Math.max(r,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ye(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],u=[];for(let v=0;v<n.count;v++)l[v]=new L,u[v]=new L;const h=new L,d=new L,g=new L,p=new Ot,m=new Ot,S=new Ot,T=new L,x=new L;function _(v,y,A){h.fromBufferAttribute(n,v),d.fromBufferAttribute(n,y),g.fromBufferAttribute(n,A),p.fromBufferAttribute(s,v),m.fromBufferAttribute(s,y),S.fromBufferAttribute(s,A),d.sub(h),g.sub(h),m.sub(p),S.sub(p);const b=1/(m.x*S.y-S.x*m.y);isFinite(b)&&(T.copy(d).multiplyScalar(S.y).addScaledVector(g,-m.y).multiplyScalar(b),x.copy(g).multiplyScalar(m.x).addScaledVector(d,-S.x).multiplyScalar(b),l[v].add(T),l[y].add(T),l[A].add(T),u[v].add(x),u[y].add(x),u[A].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let v=0,y=E.length;v<y;++v){const A=E[v],b=A.start,w=A.count;for(let R=b,U=b+w;R<U;R+=3)_(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const f=new L,a=new L,M=new L,c=new L;function C(v){M.fromBufferAttribute(r,v),c.copy(M);const y=l[v];f.copy(y),f.sub(M.multiplyScalar(M.dot(y))).normalize(),a.crossVectors(c,y);const b=a.dot(u[v])<0?-1:1;o.setXYZW(v,f.x,f.y,f.z,b)}for(let v=0,y=E.length;v<y;++v){const A=E[v],b=A.start,w=A.count;for(let R=b,U=b+w;R<U;R+=3)C(t.getX(R+0)),C(t.getX(R+1)),C(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ye(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const r=new L,s=new L,o=new L,l=new L,u=new L,h=new L,d=new L,g=new L;if(t)for(let p=0,m=t.count;p<m;p+=3){const S=t.getX(p+0),T=t.getX(p+1),x=t.getX(p+2);r.fromBufferAttribute(e,S),s.fromBufferAttribute(e,T),o.fromBufferAttribute(e,x),d.subVectors(o,s),g.subVectors(r,s),d.cross(g),l.fromBufferAttribute(n,S),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,x),l.add(d),u.add(d),h.add(d),n.setXYZ(S,l.x,l.y,l.z),n.setXYZ(T,u.x,u.y,u.z),n.setXYZ(x,h.x,h.y,h.z)}else for(let p=0,m=e.count;p<m;p+=3)r.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),d.subVectors(o,s),g.subVectors(r,s),d.cross(g),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(l,u){const h=l.array,d=l.itemSize,g=l.normalized,p=new h.constructor(u.length*d);let m=0,S=0;for(let T=0,x=u.length;T<x;T++){l.isInterleavedBufferAttribute?m=u[T]*l.data.stride+l.offset:m=u[T]*d;for(let _=0;_<d;_++)p[S++]=h[m++]}return new Ye(p,d,g)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Bn,n=this.index.array,r=this.attributes;for(const l in r){const u=r[l],h=t(u,n);e.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,g=h.length;d<g;d++){const p=h[d],m=t(p,n);u.push(m)}e.morphAttributes[l]=u}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(t[h]=u[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const u in n){const h=n[u];t.data.attributes[u]=h.toJSON(t.data)}const r={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],d=[];for(let g=0,p=h.length;g<p;g++){const m=h[g];d.push(m.toJSON(t.data))}d.length>0&&(r[u]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const h in r){const d=r[h];this.setAttribute(h,d.clone(e))}const s=t.morphAttributes;for(const h in s){const d=[],g=s[h];for(let p=0,m=g.length;p<m;p++)d.push(g[p].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,d=o.length;h<d;h++){const g=o[h];this.addGroup(g.start,g.count,g.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Dp=0;class Ts extends $i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=bs(),this.name="",this.type="Material",this.blending=Ir,this.side=Un,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=_c,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Nr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ki,this.stencilZFail=Ki,this.stencilZPass=Ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ir&&(n.blending=this.blending),this.side!==Un&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mc&&(n.blendSrc=this.blendSrc),this.blendDst!==_c&&(n.blendDst=this.blendDst),this.blendEquation!==zi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Nr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ki&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ki&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ki&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const l in s){const u=s[l];delete u.metadata,o.push(u)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Xn=new L,Ca=new L,Bs=new L,li=new L,Pa=new L,zs=new L,Da=new L;class Gr{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ca.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),li.copy(this.origin).sub(Ca);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Bs),l=li.dot(this.direction),u=-li.dot(Bs),h=li.lengthSq(),d=Math.abs(1-o*o);let g,p,m,S;if(d>0)if(g=o*u-l,p=o*l-u,S=s*d,g>=0)if(p>=-S)if(p<=S){const T=1/d;g*=T,p*=T,m=g*(g+o*p+2*l)+p*(o*g+p+2*u)+h}else p=s,g=Math.max(0,-(o*p+l)),m=-g*g+p*(p+2*u)+h;else p=-s,g=Math.max(0,-(o*p+l)),m=-g*g+p*(p+2*u)+h;else p<=-S?(g=Math.max(0,-(-o*s+l)),p=g>0?-s:Math.min(Math.max(-s,-u),s),m=-g*g+p*(p+2*u)+h):p<=S?(g=0,p=Math.min(Math.max(-s,-u),s),m=p*(p+2*u)+h):(g=Math.max(0,-(o*s+l)),p=g>0?s:Math.min(Math.max(-s,-u),s),m=-g*g+p*(p+2*u)+h);else p=o>0?-s:s,g=Math.max(0,-(o*p+l)),m=-g*g+p*(p+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,g),r&&r.copy(Ca).addScaledVector(Bs,p),m}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const n=Xn.dot(this.direction),r=Xn.dot(Xn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=n-o,u=n+o;return u<0?null:l<0?this.at(u,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,l,u;const h=1/this.direction.x,d=1/this.direction.y,g=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,r=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,r=(t.min.x-p.x)*h),d>=0?(s=(t.min.y-p.y)*d,o=(t.max.y-p.y)*d):(s=(t.max.y-p.y)*d,o=(t.min.y-p.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),g>=0?(l=(t.min.z-p.z)*g,u=(t.max.z-p.z)*g):(l=(t.max.z-p.z)*g,u=(t.min.z-p.z)*g),n>u||l>r)||((l>n||n!==n)&&(n=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,n,r,s){Pa.subVectors(e,t),zs.subVectors(n,t),Da.crossVectors(Pa,zs);let o=this.direction.dot(Da),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;li.subVectors(this.origin,t);const u=l*this.direction.dot(zs.crossVectors(li,zs));if(u<0)return null;const h=l*this.direction.dot(Pa.cross(li));if(h<0||u+h>o)return null;const d=-l*li.dot(Da);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Uf extends Ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=df,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const bu=new Zt,Ci=new Gr,Vs=new Ul,Tu=new L,ks=new L,Gs=new L,Hs=new L,Ia=new L,Ws=new L,Au=new L,Xs=new L;class en extends Oe{constructor(t=new Bn,e=new Uf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const l=this.morphTargetInfluences;if(s&&l){Ws.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const d=l[u],g=s[u];d!==0&&(Ia.fromBufferAttribute(g,t),o?Ws.addScaledVector(Ia,d):Ws.addScaledVector(Ia.sub(e),d))}e.add(Ws)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(s),Ci.copy(t.ray).recast(t.near),!(Vs.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(Vs,Tu)===null||Ci.origin.distanceToSquared(Tu)>(t.far-t.near)**2))&&(bu.copy(s).invert(),Ci.copy(t.ray).applyMatrix4(bu),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ci)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,l=s.index,u=s.attributes.position,h=s.attributes.uv,d=s.attributes.uv1,g=s.attributes.normal,p=s.groups,m=s.drawRange;if(l!==null)if(Array.isArray(o))for(let S=0,T=p.length;S<T;S++){const x=p[S],_=o[x.materialIndex],E=Math.max(x.start,m.start),f=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let a=E,M=f;a<M;a+=3){const c=l.getX(a),C=l.getX(a+1),v=l.getX(a+2);r=qs(this,_,t,n,h,d,g,c,C,v),r&&(r.faceIndex=Math.floor(a/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const S=Math.max(0,m.start),T=Math.min(l.count,m.start+m.count);for(let x=S,_=T;x<_;x+=3){const E=l.getX(x),f=l.getX(x+1),a=l.getX(x+2);r=qs(this,o,t,n,h,d,g,E,f,a),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(o))for(let S=0,T=p.length;S<T;S++){const x=p[S],_=o[x.materialIndex],E=Math.max(x.start,m.start),f=Math.min(u.count,Math.min(x.start+x.count,m.start+m.count));for(let a=E,M=f;a<M;a+=3){const c=a,C=a+1,v=a+2;r=qs(this,_,t,n,h,d,g,c,C,v),r&&(r.faceIndex=Math.floor(a/3),r.face.materialIndex=x.materialIndex,e.push(r))}}else{const S=Math.max(0,m.start),T=Math.min(u.count,m.start+m.count);for(let x=S,_=T;x<_;x+=3){const E=x,f=x+1,a=x+2;r=qs(this,o,t,n,h,d,g,E,f,a),r&&(r.faceIndex=Math.floor(x/3),e.push(r))}}}}function Ip(i,t,e,n,r,s,o,l){let u;if(t.side===Ve?u=n.intersectTriangle(o,s,r,!0,l):u=n.intersectTriangle(r,s,o,t.side===Un,l),u===null)return null;Xs.copy(l),Xs.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Xs);return h<e.near||h>e.far?null:{distance:h,point:Xs.clone(),object:i}}function qs(i,t,e,n,r,s,o,l,u,h){i.getVertexPosition(l,ks),i.getVertexPosition(u,Gs),i.getVertexPosition(h,Hs);const d=Ip(i,t,e,n,ks,Gs,Hs,Au);if(d){const g=new L;le.getBarycoord(Au,ks,Gs,Hs,g),r&&(d.uv=le.getInterpolatedAttribute(r,l,u,h,g,new Ot)),s&&(d.uv1=le.getInterpolatedAttribute(s,l,u,h,g,new Ot)),o&&(d.normal=le.getInterpolatedAttribute(o,l,u,h,g,new L),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:l,b:u,c:h,normal:new L,materialIndex:0};le.getNormal(ks,Gs,Hs,p.normal),d.face=p,d.barycoord=g}return d}class Lp extends Fe{constructor(t=null,e=1,n=1,r,s,o,l,u,h=Ce,d=Ce,g,p){super(null,o,l,u,h,d,r,s,g,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const La=new L,Up=new L,Np=new Xt;class Qe{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=La.subVectors(n,e).cross(Up.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(La),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Np.getNormalMatrix(t),r=this.coplanarPoint(La).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new Ul,Fp=new Ot(.5,.5),Ys=new L;class Nl{constructor(t=new Qe,e=new Qe,n=new Qe,r=new Qe,s=new Qe,o=new Qe){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){const r=this.planes,s=t.elements,o=s[0],l=s[1],u=s[2],h=s[3],d=s[4],g=s[5],p=s[6],m=s[7],S=s[8],T=s[9],x=s[10],_=s[11],E=s[12],f=s[13],a=s[14],M=s[15];if(r[0].setComponents(h-o,m-d,_-S,M-E).normalize(),r[1].setComponents(h+o,m+d,_+S,M+E).normalize(),r[2].setComponents(h+l,m+g,_+T,M+f).normalize(),r[3].setComponents(h-l,m-g,_-T,M-f).normalize(),n)r[4].setComponents(u,p,x,a).normalize(),r[5].setComponents(h-u,m-p,_-x,M-a).normalize();else if(r[4].setComponents(h-u,m-p,_-x,M-a).normalize(),e===Pn)r[5].setComponents(h+u,m+p,_+x,M+a).normalize();else if(e===xs)r[5].setComponents(u,p,x,a).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(t){Pi.center.set(0,0,0);const e=Fp.distanceTo(t.center);return Pi.radius=.7071067811865476+e,Pi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Ys.x=r.normal.x>0?t.max.x:t.min.x,Ys.y=r.normal.y>0?t.max.y:t.min.y,Ys.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nf extends Fe{constructor(t=[],e=qi,n,r,s,o,l,u,h,d){super(t,e,n,r,s,o,l,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Op extends Fe{constructor(t,e,n,r,s,o,l,u,h){super(t,e,n,r,s,o,l,u,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vs extends Fe{constructor(t,e,n=Nn,r,s,o,l=Ce,u=Ce,h,d=ti,g=1){if(d!==ti&&d!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:t,height:e,depth:g};super(p,r,s,o,l,u,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Il(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bp extends vs{constructor(t,e=Nn,n=qi,r,s,o=Ce,l=Ce,u,h=ti){const d={width:t,height:t,depth:1},g=[d,d,d,d,d,d];super(t,t,e,n,r,s,o,l,u,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ff extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Hr extends Bn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],h=[],d=[],g=[];let p=0,m=0;S("z","y","x",-1,-1,n,e,t,o,s,0),S("z","y","x",1,-1,n,e,-t,o,s,1),S("x","z","y",1,1,t,n,e,r,o,2),S("x","z","y",1,-1,t,n,-e,r,o,3),S("x","y","z",1,-1,t,e,n,r,s,4),S("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new fn(h,3)),this.setAttribute("normal",new fn(d,3)),this.setAttribute("uv",new fn(g,2));function S(T,x,_,E,f,a,M,c,C,v,y){const A=a/C,b=M/v,w=a/2,R=M/2,U=c/2,N=C+1,O=v+1;let F=0,G=0;const H=new L;for(let nt=0;nt<O;nt++){const et=nt*b-R;for(let Q=0;Q<N;Q++){const ht=Q*A-w;H[T]=ht*E,H[x]=et*f,H[_]=U,h.push(H.x,H.y,H.z),H[T]=0,H[x]=0,H[_]=c>0?1:-1,d.push(H.x,H.y,H.z),g.push(Q/C),g.push(1-nt/v),F+=1}}for(let nt=0;nt<v;nt++)for(let et=0;et<C;et++){const Q=p+et+N*nt,ht=p+et+N*(nt+1),Mt=p+(et+1)+N*(nt+1),xt=p+(et+1)+N*nt;u.push(Q,ht,xt),u.push(ht,Mt,xt),G+=6}l.addGroup(m,G,y),m+=G,p+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Zo extends Bn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,l=Math.floor(n),u=Math.floor(r),h=l+1,d=u+1,g=t/l,p=e/u,m=[],S=[],T=[],x=[];for(let _=0;_<d;_++){const E=_*p-o;for(let f=0;f<h;f++){const a=f*g-s;S.push(a,-E,0),T.push(0,0,1),x.push(f/l),x.push(1-_/u)}}for(let _=0;_<u;_++)for(let E=0;E<l;E++){const f=E+h*_,a=E+h*(_+1),M=E+1+h*(_+1),c=E+1+h*_;m.push(f,a,c),m.push(a,M,c)}this.setIndex(m),this.setAttribute("position",new fn(S,3)),this.setAttribute("normal",new fn(T,3)),this.setAttribute("uv",new fn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.width,t.height,t.widthSegments,t.heightSegments)}}class jo extends Bn{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const u=Math.min(o+l,Math.PI);let h=0;const d=[],g=new L,p=new L,m=[],S=[],T=[],x=[];for(let _=0;_<=n;_++){const E=[],f=_/n;let a=0;_===0&&o===0?a=.5/e:_===n&&u===Math.PI&&(a=-.5/e);for(let M=0;M<=e;M++){const c=M/e;g.x=-t*Math.cos(r+c*s)*Math.sin(o+f*l),g.y=t*Math.cos(o+f*l),g.z=t*Math.sin(r+c*s)*Math.sin(o+f*l),S.push(g.x,g.y,g.z),p.copy(g).normalize(),T.push(p.x,p.y,p.z),x.push(c+a,1-f),E.push(h++)}d.push(E)}for(let _=0;_<n;_++)for(let E=0;E<e;E++){const f=d[_][E+1],a=d[_][E],M=d[_+1][E],c=d[_+1][E+1];(_!==0||o>0)&&m.push(f,a,c),(_!==n-1||u<Math.PI)&&m.push(a,M,c)}this.setIndex(m),this.setAttribute("position",new fn(S,3)),this.setAttribute("normal",new fn(T,3)),this.setAttribute("uv",new fn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}function zr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Be(i){const t={};for(let e=0;e<i.length;e++){const n=zr(i[e]);for(const r in n)t[r]=n[r]}return t}function zp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Of(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const Vp={clone:zr,merge:Be};var kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class On extends Ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zr(t.uniforms),this.uniformsGroups=zp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hp extends On{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ko extends Ts{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rf,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Wp extends Ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Xp extends Ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Bf extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Ua=new Zt,wu=new L,Ru=new L;class qp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=tn,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nl,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new ae(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;wu.setFromMatrixPosition(t.matrixWorld),e.position.copy(wu),Ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ru),e.updateMatrixWorld(),Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===xs||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const $s=new L,Zs=new yi,Tn=new L;class zf extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose($s,Zs,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Zs,Tn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose($s,Zs,Tn),Tn.x===1&&Tn.y===1&&Tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($s,Zs,Tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ui=new L,Cu=new Ot,Pu=new Ot;class un extends zf{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Co*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(Co*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,Cu,Pu),e.subVectors(Pu,Cu)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Co*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/u,e-=o.offsetY*n/h,r*=o.width/u,n*=o.height/h}const l=this.filmOffset;l!==0&&(s+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Fl extends zf{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,l=r+e,u=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,l-=d*this.view.offsetY,u=l-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Yp extends qp{constructor(){super(new Fl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jo extends Bf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Yp}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class $p extends Bf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const cr=-90,lr=1;class Zp extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new un(cr,lr,t,e);r.layers=this.layers,this.add(r);const s=new un(cr,lr,t,e);s.layers=this.layers,this.add(s);const o=new un(cr,lr,t,e);o.layers=this.layers,this.add(o);const l=new un(cr,lr,t,e);l.layers=this.layers,this.add(l);const u=new un(cr,lr,t,e);u.layers=this.layers,this.add(u);const h=new un(cr,lr,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,l,u]=e;for(const h of e)this.remove(h);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===xs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,u,h,d]=this.children,g=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,3,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(n,4,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),n.texture.generateMipmaps=T,t.setRenderTarget(n,5,r),x&&t.autoClear===!1&&t.clearDepth(),t.render(e,d),t.setRenderTarget(g,p,m),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class jp extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}const Du=new Zt;class Kp{constructor(t,e,n=0,r=1/0){this.ray=new Gr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Du.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Du),this}intersectObject(t,e=!0,n=[]){return sl(t,this,n,e),n.sort(Iu),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)sl(t[r],this,n,e);return n.sort(Iu),n}}function Iu(i,t){return i.distance-t.distance}function sl(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let o=0,l=s.length;o<l;o++)sl(s[o],t,e,!0)}}class Lu{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ht(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ht(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Uu=new L,js=new L,ur=new L,hr=new L,Na=new L,Jp=new L,Qp=new L;class we{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Uu.subVectors(t,this.start),js.subVectors(this.end,this.start);const n=js.dot(js);let s=js.dot(Uu)/n;return e&&(s=Ht(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=Jp,n=Qp){const r=10000000000000001e-32;let s,o;const l=this.start,u=t.start,h=this.end,d=t.end;ur.subVectors(h,l),hr.subVectors(d,u),Na.subVectors(l,u);const g=ur.dot(ur),p=hr.dot(hr),m=hr.dot(Na);if(g<=r&&p<=r)return e.copy(l),n.copy(u),e.sub(n),e.dot(e);if(g<=r)s=0,o=m/p,o=Ht(o,0,1);else{const S=ur.dot(Na);if(p<=r)o=0,s=Ht(-S/g,0,1);else{const T=ur.dot(hr),x=g*p-T*T;x!==0?s=Ht((T*m-S*p)/x,0,1):s=0,o=(T*s+m)/p,o<0?(o=0,s=Ht(-S/g,0,1)):o>1&&(o=1,s=Ht((T-S)/g,0,1))}}return e.copy(l).addScaledVector(ur,s),n.copy(u).addScaledVector(hr,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class tg extends $i{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){kt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Nu(i,t,e,n){const r=eg(n);switch(e){case Tf:return i*t;case wf:return i*t/r.components*r.byteLength;case wl:return i*t/r.components*r.byteLength;case Or:return i*t*2/r.components*r.byteLength;case Rl:return i*t*2/r.components*r.byteLength;case Af:return i*t*3/r.components*r.byteLength;case Sn:return i*t*4/r.components*r.byteLength;case Cl:return i*t*4/r.components*r.byteLength;case To:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wc:case Cc:return Math.max(i,16)*Math.max(t,8)/4;case Ac:case Rc:return Math.max(i,8)*Math.max(t,8)/2;case Pc:case Dc:case Lc:case Uc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ic:case Nc:case Fc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oc:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case zc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Vc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Wc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case qc:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Kc:case Jc:case Qc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tl:case el:return Math.ceil(i/4)*Math.ceil(t/4)*8;case nl:case il:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function eg(i){switch(i){case tn:case Sf:return{byteLength:1,components:1};case ms:case yf:case Qn:return{byteLength:2,components:1};case Tl:case Al:return{byteLength:2,components:4};case Nn:case bl:case Cn:return{byteLength:4,components:1};case Ef:case bf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Es}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Es);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vf(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function ng(i){const t=new WeakMap;function e(l,u){const h=l.array,d=l.usage,g=h.byteLength,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,d),l.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)m=i.HALF_FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:g}}function n(l,u,h){const d=u.array,g=u.updateRanges;if(i.bindBuffer(h,l),g.length===0)i.bufferSubData(h,0,d);else{g.sort((m,S)=>m.start-S.start);let p=0;for(let m=1;m<g.length;m++){const S=g[p],T=g[m];T.start<=S.start+S.count+1?S.count=Math.max(S.count,T.start+T.count-S.start):(++p,g[p]=T)}g.length=p+1;for(let m=0,S=g.length;m<S;m++){const T=g[m];i.bufferSubData(h,T.start*d.BYTES_PER_ELEMENT,d,T.start,T.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=t.get(l);u&&(i.deleteBuffer(u.buffer),t.delete(l))}function o(l,u){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const d=t.get(l);(!d||d.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=t.get(l);if(h===void 0)t.set(l,e(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,l,u),h.version=l.version}}return{get:r,remove:s,update:o}}var ig=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rg=`#ifdef USE_ALPHAHASH
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
#endif`,sg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,og=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ag=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lg=`#ifdef USE_AOMAP
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
#endif`,ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hg=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mg=`#ifdef USE_IRIDESCENCE
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
#endif`,_g=`#ifdef USE_BUMPMAP
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
#endif`,xg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Sg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Eg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Tg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Ag=`#define PI 3.141592653589793
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
} // validated`,wg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Rg=`vec3 transformedNormal = objectNormal;
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
#endif`,Cg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ig=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ug=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ng=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Fg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Og=`#ifdef USE_ENVMAP
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
#endif`,Bg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zg=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wg=`#ifdef USE_GRADIENTMAP
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
}`,Xg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$g=`uniform bool receiveShadow;
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
#endif`,Zg=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,jg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,em=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nm=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,im=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,rm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,om=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,hm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fm=`#if defined( USE_POINTS_UV )
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
#endif`,dm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_m=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xm=`#ifdef USE_MORPHTARGETS
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
#endif`,vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Sm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tm=`#ifdef USE_NORMALMAP
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
#endif`,Am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Im=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Um=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Om=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,km=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hm=`#ifdef USE_SKINNING
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
#endif`,Wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xm=`#ifdef USE_SKINNING
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
#endif`,qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ym=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$m=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jm=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Km=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,e_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const n_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,i_=`uniform sampler2D t2D;
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
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,s_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,a_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,c_=`#include <common>
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
}`,l_=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,u_=`#define DISTANCE
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
}`,h_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,f_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,d_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`uniform float scale;
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
}`,g_=`uniform vec3 diffuse;
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
}`,m_=`#include <common>
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
}`,__=`uniform vec3 diffuse;
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
}`,x_=`#define LAMBERT
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
}`,v_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,M_=`#define MATCAP
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
}`,S_=`#define MATCAP
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
}`,y_=`#define NORMAL
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
}`,E_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,b_=`#define PHONG
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
}`,T_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,A_=`#define STANDARD
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
}`,w_=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,R_=`#define TOON
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
}`,C_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,P_=`uniform float size;
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
}`,D_=`uniform vec3 diffuse;
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
}`,I_=`#include <common>
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
}`,L_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,U_=`uniform float rotation;
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
}`,N_=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:ig,alphahash_pars_fragment:rg,alphamap_fragment:sg,alphamap_pars_fragment:og,alphatest_fragment:ag,alphatest_pars_fragment:cg,aomap_fragment:lg,aomap_pars_fragment:ug,batching_pars_vertex:hg,batching_vertex:fg,begin_vertex:dg,beginnormal_vertex:pg,bsdfs:gg,iridescence_fragment:mg,bumpmap_pars_fragment:_g,clipping_planes_fragment:xg,clipping_planes_pars_fragment:vg,clipping_planes_pars_vertex:Mg,clipping_planes_vertex:Sg,color_fragment:yg,color_pars_fragment:Eg,color_pars_vertex:bg,color_vertex:Tg,common:Ag,cube_uv_reflection_fragment:wg,defaultnormal_vertex:Rg,displacementmap_pars_vertex:Cg,displacementmap_vertex:Pg,emissivemap_fragment:Dg,emissivemap_pars_fragment:Ig,colorspace_fragment:Lg,colorspace_pars_fragment:Ug,envmap_fragment:Ng,envmap_common_pars_fragment:Fg,envmap_pars_fragment:Og,envmap_pars_vertex:Bg,envmap_physical_pars_fragment:Zg,envmap_vertex:zg,fog_vertex:Vg,fog_pars_vertex:kg,fog_fragment:Gg,fog_pars_fragment:Hg,gradientmap_pars_fragment:Wg,lightmap_pars_fragment:Xg,lights_lambert_fragment:qg,lights_lambert_pars_fragment:Yg,lights_pars_begin:$g,lights_toon_fragment:jg,lights_toon_pars_fragment:Kg,lights_phong_fragment:Jg,lights_phong_pars_fragment:Qg,lights_physical_fragment:tm,lights_physical_pars_fragment:em,lights_fragment_begin:nm,lights_fragment_maps:im,lights_fragment_end:rm,logdepthbuf_fragment:sm,logdepthbuf_pars_fragment:om,logdepthbuf_pars_vertex:am,logdepthbuf_vertex:cm,map_fragment:lm,map_pars_fragment:um,map_particle_fragment:hm,map_particle_pars_fragment:fm,metalnessmap_fragment:dm,metalnessmap_pars_fragment:pm,morphinstance_vertex:gm,morphcolor_vertex:mm,morphnormal_vertex:_m,morphtarget_pars_vertex:xm,morphtarget_vertex:vm,normal_fragment_begin:Mm,normal_fragment_maps:Sm,normal_pars_fragment:ym,normal_pars_vertex:Em,normal_vertex:bm,normalmap_pars_fragment:Tm,clearcoat_normal_fragment_begin:Am,clearcoat_normal_fragment_maps:wm,clearcoat_pars_fragment:Rm,iridescence_pars_fragment:Cm,opaque_fragment:Pm,packing:Dm,premultiplied_alpha_fragment:Im,project_vertex:Lm,dithering_fragment:Um,dithering_pars_fragment:Nm,roughnessmap_fragment:Fm,roughnessmap_pars_fragment:Om,shadowmap_pars_fragment:Bm,shadowmap_pars_vertex:zm,shadowmap_vertex:Vm,shadowmask_pars_fragment:km,skinbase_vertex:Gm,skinning_pars_vertex:Hm,skinning_vertex:Wm,skinnormal_vertex:Xm,specularmap_fragment:qm,specularmap_pars_fragment:Ym,tonemapping_fragment:$m,tonemapping_pars_fragment:Zm,transmission_fragment:jm,transmission_pars_fragment:Km,uv_pars_fragment:Jm,uv_pars_vertex:Qm,uv_vertex:t_,worldpos_vertex:e_,background_vert:n_,background_frag:i_,backgroundCube_vert:r_,backgroundCube_frag:s_,cube_vert:o_,cube_frag:a_,depth_vert:c_,depth_frag:l_,distance_vert:u_,distance_frag:h_,equirect_vert:f_,equirect_frag:d_,linedashed_vert:p_,linedashed_frag:g_,meshbasic_vert:m_,meshbasic_frag:__,meshlambert_vert:x_,meshlambert_frag:v_,meshmatcap_vert:M_,meshmatcap_frag:S_,meshnormal_vert:y_,meshnormal_frag:E_,meshphong_vert:b_,meshphong_frag:T_,meshphysical_vert:A_,meshphysical_frag:w_,meshtoon_vert:R_,meshtoon_frag:C_,points_vert:P_,points_frag:D_,shadow_vert:I_,shadow_frag:L_,sprite_vert:U_,sprite_frag:N_},gt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},wn={basic:{uniforms:Be([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Be([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Be([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Be([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Be([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new te(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Be([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Be([gt.points,gt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Be([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Be([gt.common,gt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Be([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Be([gt.sprite,gt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:Be([gt.common,gt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:Be([gt.lights,gt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};wn.physical={uniforms:Be([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Ks={r:0,b:0,g:0},Di=new Fn,F_=new Zt;function O_(i,t,e,n,r,s){const o=new te(0);let l=r===!0?0:1,u,h,d=null,g=0,p=null;function m(E){let f=E.isScene===!0?E.background:null;if(f&&f.isTexture){const a=E.backgroundBlurriness>0;f=t.get(f,a)}return f}function S(E){let f=!1;const a=m(E);a===null?x(o,l):a&&a.isColor&&(x(a,1),f=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||f)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(E,f){const a=m(f);a&&(a.isCubeTexture||a.mapping===$o)?(h===void 0&&(h=new en(new Hr(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:zr(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,c,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Di.copy(f.backgroundRotation),Di.x*=-1,Di.y*=-1,Di.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),h.material.uniforms.envMap.value=a,h.material.uniforms.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(F_.makeRotationFromEuler(Di)),h.material.toneMapped=Jt.getTransfer(a.colorSpace)!==ne,(d!==a||g!==a.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=a,g=a.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):a&&a.isTexture&&(u===void 0&&(u=new en(new Zo(2,2),new On({name:"BackgroundMaterial",uniforms:zr(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(u)),u.material.uniforms.t2D.value=a,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Jt.getTransfer(a.colorSpace)!==ne,a.matrixAutoUpdate===!0&&a.updateMatrix(),u.material.uniforms.uvTransform.value.copy(a.matrix),(d!==a||g!==a.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=a,g=a.version,p=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null))}function x(E,f){E.getRGB(Ks,Of(i)),e.buffers.color.setClear(Ks.r,Ks.g,Ks.b,f,s)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,f=1){o.set(E),l=f,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,x(o,l)},render:S,addToRenderList:T,dispose:_}}function B_(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=p(null);let s=r,o=!1;function l(b,w,R,U,N){let O=!1;const F=g(b,U,R,w);s!==F&&(s=F,h(s.object)),O=m(b,U,R,N),O&&S(b,U,R,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,a(b,w,R,U),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function u(){return i.createVertexArray()}function h(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function g(b,w,R,U){const N=U.wireframe===!0;let O=n[w.id];O===void 0&&(O={},n[w.id]=O);const F=b.isInstancedMesh===!0?b.id:0;let G=O[F];G===void 0&&(G={},O[F]=G);let H=G[R.id];H===void 0&&(H={},G[R.id]=H);let nt=H[N];return nt===void 0&&(nt=p(u()),H[N]=nt),nt}function p(b){const w=[],R=[],U=[];for(let N=0;N<e;N++)w[N]=0,R[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:R,attributeDivisors:U,object:b,attributes:{},index:null}}function m(b,w,R,U){const N=s.attributes,O=w.attributes;let F=0;const G=R.getAttributes();for(const H in G)if(G[H].location>=0){const et=N[H];let Q=O[H];if(Q===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor)),et===void 0||et.attribute!==Q||Q&&et.data!==Q.data)return!0;F++}return s.attributesNum!==F||s.index!==U}function S(b,w,R,U){const N={},O=w.attributes;let F=0;const G=R.getAttributes();for(const H in G)if(G[H].location>=0){let et=O[H];et===void 0&&(H==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),H==="instanceColor"&&b.instanceColor&&(et=b.instanceColor));const Q={};Q.attribute=et,et&&et.data&&(Q.data=et.data),N[H]=Q,F++}s.attributes=N,s.attributesNum=F,s.index=U}function T(){const b=s.newAttributes;for(let w=0,R=b.length;w<R;w++)b[w]=0}function x(b){_(b,0)}function _(b,w){const R=s.newAttributes,U=s.enabledAttributes,N=s.attributeDivisors;R[b]=1,U[b]===0&&(i.enableVertexAttribArray(b),U[b]=1),N[b]!==w&&(i.vertexAttribDivisor(b,w),N[b]=w)}function E(){const b=s.newAttributes,w=s.enabledAttributes;for(let R=0,U=w.length;R<U;R++)w[R]!==b[R]&&(i.disableVertexAttribArray(R),w[R]=0)}function f(b,w,R,U,N,O,F){F===!0?i.vertexAttribIPointer(b,w,R,N,O):i.vertexAttribPointer(b,w,R,U,N,O)}function a(b,w,R,U){T();const N=U.attributes,O=R.getAttributes(),F=w.defaultAttributeValues;for(const G in O){const H=O[G];if(H.location>=0){let nt=N[G];if(nt===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),nt!==void 0){const et=nt.normalized,Q=nt.itemSize,ht=t.get(nt);if(ht===void 0)continue;const Mt=ht.buffer,xt=ht.type,$=ht.bytesPerElement,J=xt===i.INT||xt===i.UNSIGNED_INT||nt.gpuType===bl;if(nt.isInterleavedBufferAttribute){const tt=nt.data,lt=tt.stride,st=nt.offset;if(tt.isInstancedInterleavedBuffer){for(let pt=0;pt<H.locationSize;pt++)_(H.location+pt,tt.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let pt=0;pt<H.locationSize;pt++)x(H.location+pt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let pt=0;pt<H.locationSize;pt++)f(H.location+pt,Q/H.locationSize,xt,et,lt*$,(st+Q/H.locationSize*pt)*$,J)}else{if(nt.isInstancedBufferAttribute){for(let tt=0;tt<H.locationSize;tt++)_(H.location+tt,nt.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let tt=0;tt<H.locationSize;tt++)x(H.location+tt);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let tt=0;tt<H.locationSize;tt++)f(H.location+tt,Q/H.locationSize,xt,et,Q*$,Q/H.locationSize*tt*$,J)}}else if(F!==void 0){const et=F[G];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(H.location,et);break;case 3:i.vertexAttrib3fv(H.location,et);break;case 4:i.vertexAttrib4fv(H.location,et);break;default:i.vertexAttrib1fv(H.location,et)}}}}E()}function M(){y();for(const b in n){const w=n[b];for(const R in w){const U=w[R];for(const N in U){const O=U[N];for(const F in O)d(O[F].object),delete O[F];delete U[N]}}delete n[b]}}function c(b){if(n[b.id]===void 0)return;const w=n[b.id];for(const R in w){const U=w[R];for(const N in U){const O=U[N];for(const F in O)d(O[F].object),delete O[F];delete U[N]}}delete n[b.id]}function C(b){for(const w in n){const R=n[w];for(const U in R){const N=R[U];if(N[b.id]===void 0)continue;const O=N[b.id];for(const F in O)d(O[F].object),delete O[F];delete N[b.id]}}}function v(b){for(const w in n){const R=n[w],U=b.isInstancedMesh===!0?b.id:0,N=R[U];if(N!==void 0){for(const O in N){const F=N[O];for(const G in F)d(F[G].object),delete F[G];delete N[O]}delete R[U],Object.keys(R).length===0&&delete n[w]}}}function y(){A(),o=!0,s!==r&&(s=r,h(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:y,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:c,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:T,enableAttribute:x,disableUnusedAttributes:E}}function z_(i,t,e){let n;function r(h){n=h}function s(h,d){i.drawArrays(n,h,d),e.update(d,n,1)}function o(h,d,g){g!==0&&(i.drawArraysInstanced(n,h,d,g),e.update(d,n,g))}function l(h,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,g);let m=0;for(let S=0;S<g;S++)m+=d[S];e.update(m,n,1)}function u(h,d,g,p){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let S=0;S<h.length;S++)o(h[S],d[S],p[S]);else{m.multiDrawArraysInstancedWEBGL(n,h,0,d,0,p,0,g);let S=0;for(let T=0;T<g;T++)S+=d[T]*p[T];e.update(S,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=u}function V_(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(C){const v=C===Qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==tn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Cn&&!v)}function u(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=u(h);d!==h&&(kt("WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const g=e.logarithmicDepthBuffer===!0,p=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),f=i.getParameter(i.MAX_VARYING_VECTORS),a=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),c=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:p,maxTextures:m,maxVertexTextures:S,maxTextureSize:T,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:E,maxVaryings:f,maxFragmentUniforms:a,maxSamples:M,samples:c}}function k_(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new Qe,l=new Xt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(g,p){const m=g.length!==0||p||n!==0||r;return r=p,n=g.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(g,p){e=d(g,p,0)},this.setState=function(g,p,m){const S=g.clippingPlanes,T=g.clipIntersection,x=g.clipShadows,_=i.get(g);if(!r||S===null||S.length===0||s&&!x)s?d(null):h();else{const E=s?0:n,f=E*4;let a=_.clippingState||null;u.value=a,a=d(S,p,f,m);for(let M=0;M!==f;++M)a[M]=e[M];_.clippingState=a,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=E}};function h(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(g,p,m,S){const T=g!==null?g.length:0;let x=null;if(T!==0){if(x=u.value,S!==!0||x===null){const _=m+T*4,E=p.matrixWorldInverse;l.getNormalMatrix(E),(x===null||x.length<_)&&(x=new Float32Array(_));for(let f=0,a=m;f!==T;++f,a+=4)o.copy(g[f]).applyMatrix4(E,l),o.normal.toArray(x,a),x[a+3]=o.constant}u.value=x,u.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,x}}const Mi=4,Fu=[.125,.215,.35,.446,.526,.582],Vi=20,G_=256,jr=new Fl,Ou=new te;let Fa=null,Oa=0,Ba=0,za=!1;const H_=new L;class Bu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:l=H_}=s;Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,r,u,l),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Fa,Oa,Ba),this._renderer.xr.enabled=za,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===Fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:Qn,format:Sn,colorSpace:Br,depthBuffer:!1},r=zu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zu(t,e,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=W_(s)),this._blurMaterial=q_(s,t,e),this._ggxMaterial=X_(s,t,e)}return r}_compileMaterial(t){const e=new en(new Bn,t);this._renderer.compile(e,jr)}_sceneToCubeUV(t,e,n,r,s){const u=new un(90,1,e,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],g=this._renderer,p=g.autoClear,m=g.toneMapping;g.getClearColor(Ou),g.toneMapping=In,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(r),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new en(new Hr,new Uf({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,x=T.material;let _=!1;const E=t.background;E?E.isColor&&(x.color.copy(E),t.background=null,_=!0):(x.color.copy(Ou),_=!0);for(let f=0;f<6;f++){const a=f%3;a===0?(u.up.set(0,h[f],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+d[f],s.y,s.z)):a===1?(u.up.set(0,0,h[f]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+d[f],s.z)):(u.up.set(0,h[f],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+d[f]));const M=this._cubeSize;fr(r,a*M,f>2?M:0,M,M),g.setRenderTarget(r),_&&g.render(T,u),g.render(t,u)}g.toneMapping=m,g.autoClear=p,t.background=E}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===qi||t.mapping===Fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const l=s.uniforms;l.envMap.value=t;const u=this._cubeSize;fr(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(o,jr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,l=this._lodMeshes[n];l.material=o;const u=o.uniforms,h=n/(this._lodMeshes.length-1),d=e/(this._lodMeshes.length-1),g=Math.sqrt(h*h-d*d),p=0+h*1.25,m=g*p,{_lodMax:S}=this,T=this._sizeLods[n],x=3*T*(n>S-Mi?n-S+Mi:0),_=4*(this._cubeSize-T);u.envMap.value=t.texture,u.roughness.value=m,u.mipInt.value=S-e,fr(s,x,_,3*T,2*T),r.setRenderTarget(s),r.render(l,jr),u.envMap.value=s.texture,u.roughness.value=0,u.mipInt.value=S-n,fr(t,x,_,3*T,2*T),r.setRenderTarget(t),r.render(l,jr)}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,l){const u=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Kt("blur direction must be either latitudinal or longitudinal!");const d=3,g=this._lodMeshes[r];g.material=h;const p=h.uniforms,m=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Vi-1),T=s/S,x=isFinite(s)?1+Math.floor(d*T):Vi;x>Vi&&kt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Vi}`);const _=[];let E=0;for(let C=0;C<Vi;++C){const v=C/T,y=Math.exp(-v*v/2);_.push(y),C===0?E+=y:C<x&&(E+=2*y)}for(let C=0;C<_.length;C++)_[C]=_[C]/E;p.envMap.value=t.texture,p.samples.value=x,p.weights.value=_,p.latitudinal.value=o==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:f}=this;p.dTheta.value=S,p.mipInt.value=f-n;const a=this._sizeLods[r],M=3*a*(r>f-Mi?r-f+Mi:0),c=4*(this._cubeSize-a);fr(e,M,c,3*a,2*a),u.setRenderTarget(e),u.render(g,jr)}}function W_(i){const t=[],e=[],n=[];let r=i;const s=i-Mi+1+Fu.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);t.push(l);let u=1/l;o>i-Mi?u=Fu[o-i+Mi-1]:o===0&&(u=0),e.push(u);const h=1/(l-2),d=-h,g=1+h,p=[d,d,g,d,g,g,d,d,g,g,d,g],m=6,S=6,T=3,x=2,_=1,E=new Float32Array(T*S*m),f=new Float32Array(x*S*m),a=new Float32Array(_*S*m);for(let c=0;c<m;c++){const C=c%3*2/3-1,v=c>2?0:-1,y=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];E.set(y,T*S*c),f.set(p,x*S*c);const A=[c,c,c,c,c,c];a.set(A,_*S*c)}const M=new Bn;M.setAttribute("position",new Ye(E,T)),M.setAttribute("uv",new Ye(f,x)),M.setAttribute("faceIndex",new Ye(a,_)),n.push(new en(M,null)),r>Mi&&r--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function zu(i,t,e){const n=new Ln(i,t,e);return n.texture.mapping=$o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function X_(i,t,e){return new On({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:G_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function q_(i,t,e){const n=new Float32Array(Vi),r=new L(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Vu(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qo(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function ku(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Qo(){return`

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
	`}class kf extends Ln{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Nf(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hr(5,5,5),s=new On({name:"CubemapFromEquirect",uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:Kn});s.uniforms.tEquirect.value=e;const o=new en(r,s),l=e.minFilter;return e.minFilter===ki&&(e.minFilter=Le),new Zp(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}function Y_(i){let t=new WeakMap,e=new WeakMap,n=null;function r(p,m=!1){return p==null?null:m?o(p):s(p)}function s(p){if(p&&p.isTexture){const m=p.mapping;if(m===ca||m===la)if(t.has(p)){const S=t.get(p).texture;return l(S,p.mapping)}else{const S=p.image;if(S&&S.height>0){const T=new kf(S.height);return T.fromEquirectangularTexture(i,p),t.set(p,T),p.addEventListener("dispose",h),l(T.texture,p.mapping)}else return null}}return p}function o(p){if(p&&p.isTexture){const m=p.mapping,S=m===ca||m===la,T=m===qi||m===Fr;if(S||T){let x=e.get(p);const _=x!==void 0?x.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==_)return n===null&&(n=new Bu(i)),x=S?n.fromEquirectangular(p,x):n.fromCubemap(p,x),x.texture.pmremVersion=p.pmremVersion,e.set(p,x),x.texture;if(x!==void 0)return x.texture;{const E=p.image;return S&&E&&E.height>0||T&&E&&u(E)?(n===null&&(n=new Bu(i)),x=S?n.fromEquirectangular(p):n.fromCubemap(p),x.texture.pmremVersion=p.pmremVersion,e.set(p,x),p.addEventListener("dispose",d),x.texture):null}}}return p}function l(p,m){return m===ca?p.mapping=qi:m===la&&(p.mapping=Fr),p}function u(p){let m=0;const S=6;for(let T=0;T<S;T++)p[T]!==void 0&&m++;return m===S}function h(p){const m=p.target;m.removeEventListener("dispose",h);const S=t.get(m);S!==void 0&&(t.delete(m),S.dispose())}function d(p){const m=p.target;m.removeEventListener("dispose",d);const S=e.get(m);S!==void 0&&(e.delete(m),S.dispose())}function g(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:g}}function $_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];const r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Vo("WebGLRenderer: "+n+" extension not supported."),r}}}function Z_(i,t,e,n){const r={},s=new WeakMap;function o(g){const p=g.target;p.index!==null&&t.remove(p.index);for(const S in p.attributes)t.remove(p.attributes[S]);p.removeEventListener("dispose",o),delete r[p.id];const m=s.get(p);m&&(t.remove(m),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function l(g,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,e.memory.geometries++),p}function u(g){const p=g.attributes;for(const m in p)t.update(p[m],i.ARRAY_BUFFER)}function h(g){const p=[],m=g.index,S=g.attributes.position;let T=0;if(S===void 0)return;if(m!==null){const E=m.array;T=m.version;for(let f=0,a=E.length;f<a;f+=3){const M=E[f+0],c=E[f+1],C=E[f+2];p.push(M,c,c,C,C,M)}}else{const E=S.array;T=S.version;for(let f=0,a=E.length/3-1;f<a;f+=3){const M=f+0,c=f+1,C=f+2;p.push(M,c,c,C,C,M)}}const x=new(S.count>=65535?Lf:If)(p,1);x.version=T;const _=s.get(g);_&&t.remove(_),s.set(g,x)}function d(g){const p=s.get(g);if(p){const m=g.index;m!==null&&p.version<m.version&&h(g)}else h(g);return s.get(g)}return{get:l,update:u,getWireframeAttribute:d}}function j_(i,t,e){let n;function r(p){n=p}let s,o;function l(p){s=p.type,o=p.bytesPerElement}function u(p,m){i.drawElements(n,m,s,p*o),e.update(m,n,1)}function h(p,m,S){S!==0&&(i.drawElementsInstanced(n,m,s,p*o,S),e.update(m,n,S))}function d(p,m,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,p,0,S);let x=0;for(let _=0;_<S;_++)x+=m[_];e.update(x,n,1)}function g(p,m,S,T){if(S===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<p.length;_++)h(p[_]/o,m[_],T[_]);else{x.multiDrawElementsInstancedWEBGL(n,m,0,s,p,0,T,0,S);let _=0;for(let E=0;E<S;E++)_+=m[E]*T[E];e.update(_,n,1)}}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=g}function K_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=l*(s/3);break;case i.LINES:e.lines+=l*(s/2);break;case i.LINE_STRIP:e.lines+=l*(s-1);break;case i.LINE_LOOP:e.lines+=l*s;break;case i.POINTS:e.points+=l*s;break;default:Kt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function J_(i,t,e){const n=new WeakMap,r=new ae;function s(o,l,u){const h=o.morphTargetInfluences,d=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,g=d!==void 0?d.length:0;let p=n.get(l);if(p===void 0||p.count!==g){let A=function(){v.dispose(),n.delete(l),l.removeEventListener("dispose",A)};var m=A;p!==void 0&&p.texture.dispose();const S=l.morphAttributes.position!==void 0,T=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,_=l.morphAttributes.position||[],E=l.morphAttributes.normal||[],f=l.morphAttributes.color||[];let a=0;S===!0&&(a=1),T===!0&&(a=2),x===!0&&(a=3);let M=l.attributes.position.count*a,c=1;M>t.maxTextureSize&&(c=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const C=new Float32Array(M*c*4*g),v=new Pf(C,M,c,g);v.type=Cn,v.needsUpdate=!0;const y=a*4;for(let b=0;b<g;b++){const w=_[b],R=E[b],U=f[b],N=M*c*4*b;for(let O=0;O<w.count;O++){const F=O*y;S===!0&&(r.fromBufferAttribute(w,O),C[N+F+0]=r.x,C[N+F+1]=r.y,C[N+F+2]=r.z,C[N+F+3]=0),T===!0&&(r.fromBufferAttribute(R,O),C[N+F+4]=r.x,C[N+F+5]=r.y,C[N+F+6]=r.z,C[N+F+7]=0),x===!0&&(r.fromBufferAttribute(U,O),C[N+F+8]=r.x,C[N+F+9]=r.y,C[N+F+10]=r.z,C[N+F+11]=U.itemSize===4?r.w:1)}}p={count:g,texture:v,size:new Ot(M,c)},n.set(l,p),l.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let S=0;for(let x=0;x<h.length;x++)S+=h[x];const T=l.morphTargetsRelative?1:1-S;u.getUniforms().setValue(i,"morphTargetBaseInfluence",T),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:s}}function Q_(i,t,e,n,r){let s=new WeakMap;function o(h){const d=r.render.frame,g=h.geometry,p=t.get(h,g);if(s.get(p)!==d&&(t.update(p),s.set(p,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",u)===!1&&h.addEventListener("dispose",u),s.get(h)!==d&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,d))),h.isSkinnedMesh){const m=h.skeleton;s.get(m)!==d&&(m.update(),s.set(m,d))}return p}function l(){s=new WeakMap}function u(h){const d=h.target;d.removeEventListener("dispose",u),n.releaseStatesOfObject(d),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:o,dispose:l}}const t0={[pf]:"LINEAR_TONE_MAPPING",[gf]:"REINHARD_TONE_MAPPING",[mf]:"CINEON_TONE_MAPPING",[El]:"ACES_FILMIC_TONE_MAPPING",[xf]:"AGX_TONE_MAPPING",[vf]:"NEUTRAL_TONE_MAPPING",[_f]:"CUSTOM_TONE_MAPPING"};function e0(i,t,e,n,r){const s=new Ln(t,e,{type:i,depthBuffer:n,stencilBuffer:r}),o=new Ln(t,e,{type:Qn,depthBuffer:!1,stencilBuffer:!1}),l=new Bn;l.setAttribute("position",new fn([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new fn([0,2,0,0,2,0],2));const u=new Hp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new en(l,u),d=new Fl(-1,1,1,-1,0,1);let g=null,p=null,m=!1,S,T=null,x=[],_=!1;this.setSize=function(E,f){s.setSize(E,f),o.setSize(E,f);for(let a=0;a<x.length;a++){const M=x[a];M.setSize&&M.setSize(E,f)}},this.setEffects=function(E){x=E,_=x.length>0&&x[0].isRenderPass===!0;const f=s.width,a=s.height;for(let M=0;M<x.length;M++){const c=x[M];c.setSize&&c.setSize(f,a)}},this.begin=function(E,f){if(m||E.toneMapping===In&&x.length===0)return!1;if(T=f,f!==null){const a=f.width,M=f.height;(s.width!==a||s.height!==M)&&this.setSize(a,M)}return _===!1&&E.setRenderTarget(s),S=E.toneMapping,E.toneMapping=In,!0},this.hasRenderPass=function(){return _},this.end=function(E,f){E.toneMapping=S,m=!0;let a=s,M=o;for(let c=0;c<x.length;c++){const C=x[c];if(C.enabled!==!1&&(C.render(E,M,a,f),C.needsSwap!==!1)){const v=a;a=M,M=v}}if(g!==E.outputColorSpace||p!==E.toneMapping){g=E.outputColorSpace,p=E.toneMapping,u.defines={},Jt.getTransfer(g)===ne&&(u.defines.SRGB_TRANSFER="");const c=t0[p];c&&(u.defines[c]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=a.texture,E.setRenderTarget(T),E.render(h,d),T=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o.dispose(),l.dispose(),u.dispose()}}const Gf=new Fe,ol=new vs(1,1),Hf=new Pf,Wf=new vp,Xf=new Nf,Gu=[],Hu=[],Wu=new Float32Array(16),Xu=new Float32Array(9),qu=new Float32Array(4);function Wr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Gu[r];if(s===void 0&&(s=new Float32Array(r),Gu[r]=s),t!==0){n.toArray(s,0);for(let o=1,l=0;o!==t;++o)l+=e,i[o].toArray(s,l)}return s}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ye(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ta(i,t){let e=Hu[t];e===void 0&&(e=new Int32Array(t),Hu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function n0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),ye(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),ye(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),ye(e,t)}}function o0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;qu.set(n),i.uniformMatrix2fv(this.addr,!1,qu),ye(e,n)}}function a0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;Xu.set(n),i.uniformMatrix3fv(this.addr,!1,Xu),ye(e,n)}}function c0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(Se(e,n))return;Wu.set(n),i.uniformMatrix4fv(this.addr,!1,Wu),ye(e,n)}}function l0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),ye(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),ye(e,t)}}function f0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),ye(e,t)}}function d0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),ye(e,t)}}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),ye(e,t)}}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),ye(e,t)}}function _0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ol.compareFunction=e.isReversedDepthBuffer()?Dl:Pl,s=ol):s=Gf,e.setTexture2D(t||s,r)}function x0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Wf,r)}function v0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Xf,r)}function M0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Hf,r)}function S0(i){switch(i){case 5126:return n0;case 35664:return i0;case 35665:return r0;case 35666:return s0;case 35674:return o0;case 35675:return a0;case 35676:return c0;case 5124:case 35670:return l0;case 35667:case 35671:return u0;case 35668:case 35672:return h0;case 35669:case 35673:return f0;case 5125:return d0;case 36294:return p0;case 36295:return g0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return x0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return M0}}function y0(i,t){i.uniform1fv(this.addr,t)}function E0(i,t){const e=Wr(t,this.size,2);i.uniform2fv(this.addr,e)}function b0(i,t){const e=Wr(t,this.size,3);i.uniform3fv(this.addr,e)}function T0(i,t){const e=Wr(t,this.size,4);i.uniform4fv(this.addr,e)}function A0(i,t){const e=Wr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function w0(i,t){const e=Wr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function R0(i,t){const e=Wr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function C0(i,t){i.uniform1iv(this.addr,t)}function P0(i,t){i.uniform2iv(this.addr,t)}function D0(i,t){i.uniform3iv(this.addr,t)}function I0(i,t){i.uniform4iv(this.addr,t)}function L0(i,t){i.uniform1uiv(this.addr,t)}function U0(i,t){i.uniform2uiv(this.addr,t)}function N0(i,t){i.uniform3uiv(this.addr,t)}function F0(i,t){i.uniform4uiv(this.addr,t)}function O0(i,t,e){const n=this.cache,r=t.length,s=ta(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=ol:o=Gf;for(let l=0;l!==r;++l)e.setTexture2D(t[l]||o,s[l])}function B0(i,t,e){const n=this.cache,r=t.length,s=ta(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Wf,s[o])}function z0(i,t,e){const n=this.cache,r=t.length,s=ta(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Xf,s[o])}function V0(i,t,e){const n=this.cache,r=t.length,s=ta(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),ye(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Hf,s[o])}function k0(i){switch(i){case 5126:return y0;case 35664:return E0;case 35665:return b0;case 35666:return T0;case 35674:return A0;case 35675:return w0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return D0;case 35669:case 35673:return I0;case 5125:return L0;case 36294:return U0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return V0}}class G0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=S0(e.type)}}class H0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k0(e.type)}}class W0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(t,e[l.id],n)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Yu(i,t){i.seq.push(t),i.map[t.id]=t}function X0(i,t,e){const n=i.name,r=n.length;for(Va.lastIndex=0;;){const s=Va.exec(n),o=Va.lastIndex;let l=s[1];const u=s[2]==="]",h=s[3];if(u&&(l=l|0),h===void 0||h==="["&&o+2===r){Yu(e,h===void 0?new G0(l,i,t):new H0(l,i,t));break}else{let g=e.map[l];g===void 0&&(g=new W0(l),Yu(e,g)),e=g}}}class Po{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const l=t.getActiveUniform(e,o),u=t.getUniformLocation(e,l.name);X0(l,u,this)}const r=[],s=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const l=e[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(t,u.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function $u(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const q0=37297;let Y0=0;function $0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}const Zu=new Xt;function Z0(i){Jt._getMatrix(Zu,Jt.workingColorSpace,i);const t=`mat3( ${Zu.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case Bo:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ju(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+$0(i.getShaderSource(t),l)}else return s}function j0(i,t){const e=Z0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const K0={[pf]:"Linear",[gf]:"Reinhard",[mf]:"Cineon",[El]:"ACESFilmic",[xf]:"AgX",[vf]:"Neutral",[_f]:"Custom"};function J0(i,t){const e=K0[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Js=new L;function Q0(){Jt.getLuminanceCoefficients(Js);const i=Js.x.toFixed(4),t=Js.y.toFixed(4),e=Js.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cs).join(`
`)}function ex(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function nx(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:l}}return e}function cs(i){return i!==""}function Ku(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ju(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ix=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(i){return i.replace(ix,sx)}const rx=new Map;function sx(i,t){let e=qt[t];if(e===void 0){const n=rx.get(t);if(n!==void 0)e=qt[n],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return al(e)}const ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qu(i){return i.replace(ox,ax)}function ax(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function th(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const cx={[bo]:"SHADOWMAP_TYPE_PCF",[as]:"SHADOWMAP_TYPE_VSM"};function lx(i){return cx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ux={[qi]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE",[$o]:"ENVMAP_TYPE_CUBE_UV"};function hx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ux[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const fx={[Fr]:"ENVMAP_MODE_REFRACTION"};function dx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":fx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const px={[df]:"ENVMAP_BLENDING_MULTIPLY",[Kd]:"ENVMAP_BLENDING_MIX",[Jd]:"ENVMAP_BLENDING_ADD"};function gx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":px[i.combine]||"ENVMAP_BLENDING_NONE"}function mx(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function _x(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,l=e.fragmentShader;const u=lx(e),h=hx(e),d=dx(e),g=gx(e),p=mx(e),m=tx(e),S=ex(s),T=r.createProgram();let x,_,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(cs).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(cs).join(`
`),_.length>0&&(_+=`
`)):(x=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cs).join(`
`),_=[th(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?qt.tonemapping_pars_fragment:"",e.toneMapping!==In?J0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,j0("linearToOutputTexel",e.outputColorSpace),Q0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cs).join(`
`)),o=al(o),o=Ku(o,e),o=Ju(o,e),l=al(l),l=Ku(l,e),l=Ju(l,e),o=Qu(o),l=Qu(l),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",e.glslVersion===uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const f=E+x+o,a=E+_+l,M=$u(r,r.VERTEX_SHADER,f),c=$u(r,r.FRAGMENT_SHADER,a);r.attachShader(T,M),r.attachShader(T,c),e.index0AttributeName!==void 0?r.bindAttribLocation(T,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(T,0,"position"),r.linkProgram(T);function C(b){if(i.debug.checkShaderErrors){const w=r.getProgramInfoLog(T)||"",R=r.getShaderInfoLog(M)||"",U=r.getShaderInfoLog(c)||"",N=w.trim(),O=R.trim(),F=U.trim();let G=!0,H=!0;if(r.getProgramParameter(T,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,T,M,c);else{const nt=ju(r,M,"vertex"),et=ju(r,c,"fragment");Kt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(T,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+N+`
`+nt+`
`+et)}else N!==""?kt("WebGLProgram: Program Info Log:",N):(O===""||F==="")&&(H=!1);H&&(b.diagnostics={runnable:G,programLog:N,vertexShader:{log:O,prefix:x},fragmentShader:{log:F,prefix:_}})}r.deleteShader(M),r.deleteShader(c),v=new Po(r,T),y=nx(r,T)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let y;this.getAttributes=function(){return y===void 0&&C(this),y};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(T,q0)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Y0++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=M,this.fragmentShader=c,this}let xx=0;class vx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Mx(t),e.set(t,n)),n}}class Mx{constructor(t){this.id=xx++,this.code=t,this.usedTimes=0}}function Sx(i,t,e,n,r,s){const o=new Ll,l=new vx,u=new Set,h=[],d=new Map,g=n.logarithmicDepthBuffer;let p=n.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(v){return u.add(v),v===0?"uv":`uv${v}`}function T(v,y,A,b,w){const R=b.fog,U=w.geometry,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?b.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,F=t.get(v.envMap||N,O),G=F&&F.mapping===$o?F.image.height:null,H=m[v.type];v.precision!==null&&(p=n.getMaxPrecision(v.precision),p!==v.precision&&kt("WebGLProgram.getParameters:",v.precision,"not supported, using",p,"instead."));const nt=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,et=nt!==void 0?nt.length:0;let Q=0;U.morphAttributes.position!==void 0&&(Q=1),U.morphAttributes.normal!==void 0&&(Q=2),U.morphAttributes.color!==void 0&&(Q=3);let ht,Mt,xt,$;if(H){const ee=wn[H];ht=ee.vertexShader,Mt=ee.fragmentShader}else ht=v.vertexShader,Mt=v.fragmentShader,l.update(v),xt=l.getVertexShaderID(v),$=l.getFragmentShaderID(v);const J=i.getRenderTarget(),tt=i.state.buffers.depth.getReversed(),lt=w.isInstancedMesh===!0,st=w.isBatchedMesh===!0,pt=!!v.map,jt=!!v.matcap,bt=!!F,Tt=!!v.aoMap,Pt=!!v.lightMap,vt=!!v.bumpMap,Ft=!!v.normalMap,B=!!v.displacementMap,Vt=!!v.emissiveMap,It=!!v.metalnessMap,Bt=!!v.roughnessMap,ut=v.anisotropy>0,I=v.clearcoat>0,P=v.dispersion>0,z=v.iridescence>0,Y=v.sheen>0,j=v.transmission>0,q=ut&&!!v.anisotropyMap,ot=I&&!!v.clearcoatMap,ft=I&&!!v.clearcoatNormalMap,Ut=I&&!!v.clearcoatRoughnessMap,zt=z&&!!v.iridescenceMap,it=z&&!!v.iridescenceThicknessMap,at=Y&&!!v.sheenColorMap,At=Y&&!!v.sheenRoughnessMap,Rt=!!v.specularMap,St=!!v.specularColorMap,Yt=!!v.specularIntensityMap,V=j&&!!v.transmissionMap,dt=j&&!!v.thicknessMap,ct=!!v.gradientMap,Et=!!v.alphaMap,rt=v.alphaTest>0,K=!!v.alphaHash,wt=!!v.extensions;let Gt=In;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Gt=i.toneMapping);const ce={shaderID:H,shaderType:v.type,shaderName:v.name,vertexShader:ht,fragmentShader:Mt,defines:v.defines,customVertexShaderID:xt,customFragmentShaderID:$,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:p,batching:st,batchingColor:st&&w._colorsTexture!==null,instancing:lt,instancingColor:lt&&w.instanceColor!==null,instancingMorph:lt&&w.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Br,alphaToCoverage:!!v.alphaToCoverage,map:pt,matcap:jt,envMap:bt,envMapMode:bt&&F.mapping,envMapCubeUVHeight:G,aoMap:Tt,lightMap:Pt,bumpMap:vt,normalMap:Ft,displacementMap:B,emissiveMap:Vt,normalMapObjectSpace:Ft&&v.normalMapType===ep,normalMapTangentSpace:Ft&&v.normalMapType===Rf,metalnessMap:It,roughnessMap:Bt,anisotropy:ut,anisotropyMap:q,clearcoat:I,clearcoatMap:ot,clearcoatNormalMap:ft,clearcoatRoughnessMap:Ut,dispersion:P,iridescence:z,iridescenceMap:zt,iridescenceThicknessMap:it,sheen:Y,sheenColorMap:at,sheenRoughnessMap:At,specularMap:Rt,specularColorMap:St,specularIntensityMap:Yt,transmission:j,transmissionMap:V,thicknessMap:dt,gradientMap:ct,opaque:v.transparent===!1&&v.blending===Ir&&v.alphaToCoverage===!1,alphaMap:Et,alphaTest:rt,alphaHash:K,combine:v.combine,mapUv:pt&&S(v.map.channel),aoMapUv:Tt&&S(v.aoMap.channel),lightMapUv:Pt&&S(v.lightMap.channel),bumpMapUv:vt&&S(v.bumpMap.channel),normalMapUv:Ft&&S(v.normalMap.channel),displacementMapUv:B&&S(v.displacementMap.channel),emissiveMapUv:Vt&&S(v.emissiveMap.channel),metalnessMapUv:It&&S(v.metalnessMap.channel),roughnessMapUv:Bt&&S(v.roughnessMap.channel),anisotropyMapUv:q&&S(v.anisotropyMap.channel),clearcoatMapUv:ot&&S(v.clearcoatMap.channel),clearcoatNormalMapUv:ft&&S(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&S(v.clearcoatRoughnessMap.channel),iridescenceMapUv:zt&&S(v.iridescenceMap.channel),iridescenceThicknessMapUv:it&&S(v.iridescenceThicknessMap.channel),sheenColorMapUv:at&&S(v.sheenColorMap.channel),sheenRoughnessMapUv:At&&S(v.sheenRoughnessMap.channel),specularMapUv:Rt&&S(v.specularMap.channel),specularColorMapUv:St&&S(v.specularColorMap.channel),specularIntensityMapUv:Yt&&S(v.specularIntensityMap.channel),transmissionMapUv:V&&S(v.transmissionMap.channel),thicknessMapUv:dt&&S(v.thicknessMap.channel),alphaMapUv:Et&&S(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ft||ut),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:w.isPoints===!0&&!!U.attributes.uv&&(pt||Et),fog:!!R,useFog:v.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&Ft===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:tt,skinning:w.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:Q,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Gt,decodeVideoTexture:pt&&v.map.isVideoTexture===!0&&Jt.getTransfer(v.map.colorSpace)===ne,decodeVideoTextureEmissive:Vt&&v.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(v.emissiveMap.colorSpace)===ne,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Mn,flipSided:v.side===Ve,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:wt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&v.extensions.multiDraw===!0||st)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ce.vertexUv1s=u.has(1),ce.vertexUv2s=u.has(2),ce.vertexUv3s=u.has(3),u.clear(),ce}function x(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const A in v.defines)y.push(A),y.push(v.defines[A]);return v.isRawShaderMaterial===!1&&(_(y,v),E(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function _(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function E(v,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),v.push(o.mask)}function f(v){const y=m[v.type];let A;if(y){const b=wn[y];A=Vp.clone(b.uniforms)}else A=v.uniforms;return A}function a(v,y){let A=d.get(y);return A!==void 0?++A.usedTimes:(A=new _x(i,y,v,r),h.push(A),d.set(y,A)),A}function M(v){if(--v.usedTimes===0){const y=h.indexOf(v);h[y]=h[h.length-1],h.pop(),d.delete(v.cacheKey),v.destroy()}}function c(v){l.remove(v)}function C(){l.dispose()}return{getParameters:T,getProgramCacheKey:x,getUniforms:f,acquireProgram:a,releaseProgram:M,releaseShaderCache:c,programs:h,dispose:C}}function yx(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function r(o,l,u){i.get(o)[l]=u}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Ex(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function eh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function l(p,m,S,T,x,_){let E=i[t];return E===void 0?(E={id:p.id,object:p,geometry:m,material:S,materialVariant:o(p),groupOrder:T,renderOrder:p.renderOrder,z:x,group:_},i[t]=E):(E.id=p.id,E.object=p,E.geometry=m,E.material=S,E.materialVariant=o(p),E.groupOrder=T,E.renderOrder=p.renderOrder,E.z=x,E.group=_),t++,E}function u(p,m,S,T,x,_){const E=l(p,m,S,T,x,_);S.transmission>0?n.push(E):S.transparent===!0?r.push(E):e.push(E)}function h(p,m,S,T,x,_){const E=l(p,m,S,T,x,_);S.transmission>0?n.unshift(E):S.transparent===!0?r.unshift(E):e.unshift(E)}function d(p,m){e.length>1&&e.sort(p||Ex),n.length>1&&n.sort(m||eh),r.length>1&&r.sort(m||eh)}function g(){for(let p=t,m=i.length;p<m;p++){const S=i[p];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:u,unshift:h,finish:g,sort:d}}function bx(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new nh,i.set(n,[o])):r>=s.length?(o=new nh,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tx(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new te};break;case"SpotLight":e={position:new L,direction:new L,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Ax(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let wx=0;function Rx(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Cx(i){const t=new Tx,e=Ax(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new L);const r=new L,s=new Zt,o=new Zt;function l(h){let d=0,g=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let m=0,S=0,T=0,x=0,_=0,E=0,f=0,a=0,M=0,c=0,C=0;h.sort(Rx);for(let y=0,A=h.length;y<A;y++){const b=h[y],w=b.color,R=b.intensity,U=b.distance;let N=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===Or?N=b.shadow.map.texture:N=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)d+=w.r*R,g+=w.g*R,p+=w.b*R;else if(b.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(b.sh.coefficients[O],R);C++}else if(b.isDirectionalLight){const O=t.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const F=b.shadow,G=e.get(b);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=N,n.directionalShadowMatrix[m]=b.shadow.matrix,E++}n.directional[m]=O,m++}else if(b.isSpotLight){const O=t.get(b);O.position.setFromMatrixPosition(b.matrixWorld),O.color.copy(w).multiplyScalar(R),O.distance=U,O.coneCos=Math.cos(b.angle),O.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),O.decay=b.decay,n.spot[T]=O;const F=b.shadow;if(b.map&&(n.spotLightMap[M]=b.map,M++,F.updateMatrices(b),b.castShadow&&c++),n.spotLightMatrix[T]=F.matrix,b.castShadow){const G=e.get(b);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,n.spotShadow[T]=G,n.spotShadowMap[T]=N,a++}T++}else if(b.isRectAreaLight){const O=t.get(b);O.color.copy(w).multiplyScalar(R),O.halfWidth.set(b.width*.5,0,0),O.halfHeight.set(0,b.height*.5,0),n.rectArea[x]=O,x++}else if(b.isPointLight){const O=t.get(b);if(O.color.copy(b.color).multiplyScalar(b.intensity),O.distance=b.distance,O.decay=b.decay,b.castShadow){const F=b.shadow,G=e.get(b);G.shadowIntensity=F.intensity,G.shadowBias=F.bias,G.shadowNormalBias=F.normalBias,G.shadowRadius=F.radius,G.shadowMapSize=F.mapSize,G.shadowCameraNear=F.camera.near,G.shadowCameraFar=F.camera.far,n.pointShadow[S]=G,n.pointShadowMap[S]=N,n.pointShadowMatrix[S]=b.shadow.matrix,f++}n.point[S]=O,S++}else if(b.isHemisphereLight){const O=t.get(b);O.skyColor.copy(b.color).multiplyScalar(R),O.groundColor.copy(b.groundColor).multiplyScalar(R),n.hemi[_]=O,_++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=g,n.ambient[2]=p;const v=n.hash;(v.directionalLength!==m||v.pointLength!==S||v.spotLength!==T||v.rectAreaLength!==x||v.hemiLength!==_||v.numDirectionalShadows!==E||v.numPointShadows!==f||v.numSpotShadows!==a||v.numSpotMaps!==M||v.numLightProbes!==C)&&(n.directional.length=m,n.spot.length=T,n.rectArea.length=x,n.point.length=S,n.hemi.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=f,n.pointShadowMap.length=f,n.spotShadow.length=a,n.spotShadowMap.length=a,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=f,n.spotLightMatrix.length=a+M-c,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=c,n.numLightProbes=C,v.directionalLength=m,v.pointLength=S,v.spotLength=T,v.rectAreaLength=x,v.hemiLength=_,v.numDirectionalShadows=E,v.numPointShadows=f,v.numSpotShadows=a,v.numSpotMaps=M,v.numLightProbes=C,n.version=wx++)}function u(h,d){let g=0,p=0,m=0,S=0,T=0;const x=d.matrixWorldInverse;for(let _=0,E=h.length;_<E;_++){const f=h[_];if(f.isDirectionalLight){const a=n.directional[g];a.direction.setFromMatrixPosition(f.matrixWorld),r.setFromMatrixPosition(f.target.matrixWorld),a.direction.sub(r),a.direction.transformDirection(x),g++}else if(f.isSpotLight){const a=n.spot[m];a.position.setFromMatrixPosition(f.matrixWorld),a.position.applyMatrix4(x),a.direction.setFromMatrixPosition(f.matrixWorld),r.setFromMatrixPosition(f.target.matrixWorld),a.direction.sub(r),a.direction.transformDirection(x),m++}else if(f.isRectAreaLight){const a=n.rectArea[S];a.position.setFromMatrixPosition(f.matrixWorld),a.position.applyMatrix4(x),o.identity(),s.copy(f.matrixWorld),s.premultiply(x),o.extractRotation(s),a.halfWidth.set(f.width*.5,0,0),a.halfHeight.set(0,f.height*.5,0),a.halfWidth.applyMatrix4(o),a.halfHeight.applyMatrix4(o),S++}else if(f.isPointLight){const a=n.point[p];a.position.setFromMatrixPosition(f.matrixWorld),a.position.applyMatrix4(x),p++}else if(f.isHemisphereLight){const a=n.hemi[T];a.direction.setFromMatrixPosition(f.matrixWorld),a.direction.transformDirection(x),T++}}}return{setup:l,setupView:u,state:n}}function ih(i){const t=new Cx(i),e=[],n=[];function r(d){h.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function o(d){n.push(d)}function l(){t.setup(e)}function u(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o}}function Px(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let l;return o===void 0?(l=new ih(i),t.set(r,[l])):s>=o.length?(l=new ih(i),o.push(l)):l=o[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}const Dx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ix=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Lx=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],Ux=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],rh=new Zt,Kr=new L,ka=new L;function Nx(i,t,e){let n=new Nl;const r=new Ot,s=new Ot,o=new ae,l=new Wp,u=new Xp,h={},d=e.maxTextureSize,g={[Un]:Ve,[Ve]:Un,[Mn]:Mn},p=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:Dx,fragmentShader:Ix}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const S=new Bn;S.setAttribute("position",new Ye(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new en(S,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bo;let _=this.type;this.render=function(c,C,v){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||c.length===0)return;this.type===ff&&(kt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=bo);const y=i.getRenderTarget(),A=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),w=i.state;w.setBlending(Kn),w.buffers.depth.getReversed()===!0?w.buffers.color.setClear(0,0,0,0):w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const R=_!==this.type;R&&C.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(N=>N.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,N=c.length;U<N;U++){const O=c[U],F=O.shadow;if(F===void 0){kt("WebGLShadowMap:",O,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const G=F.getFrameExtents();r.multiply(G),s.copy(F.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/G.x),r.x=s.x*G.x,F.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/G.y),r.y=s.y*G.y,F.mapSize.y=s.y));const H=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=H,F.map===null||R===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===as){if(O.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ln(r.x,r.y,{format:Or,type:Qn,minFilter:Le,magFilter:Le,generateMipmaps:!1}),F.map.texture.name=O.name+".shadowMap",F.map.depthTexture=new vs(r.x,r.y,Cn),F.map.depthTexture.name=O.name+".shadowMapDepth",F.map.depthTexture.format=ti,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ce,F.map.depthTexture.magFilter=Ce}else O.isPointLight?(F.map=new kf(r.x),F.map.depthTexture=new Bp(r.x,Nn)):(F.map=new Ln(r.x,r.y),F.map.depthTexture=new vs(r.x,r.y,Nn)),F.map.depthTexture.name=O.name+".shadowMap",F.map.depthTexture.format=ti,this.type===bo?(F.map.depthTexture.compareFunction=H?Dl:Pl,F.map.depthTexture.minFilter=Le,F.map.depthTexture.magFilter=Le):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Ce,F.map.depthTexture.magFilter=Ce);F.camera.updateProjectionMatrix()}const nt=F.map.isWebGLCubeRenderTarget?6:1;for(let et=0;et<nt;et++){if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,et),i.clear();else{et===0&&(i.setRenderTarget(F.map),i.clear());const Q=F.getViewport(et);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),w.viewport(o)}if(O.isPointLight){const Q=F.camera,ht=F.matrix,Mt=O.distance||Q.far;Mt!==Q.far&&(Q.far=Mt,Q.updateProjectionMatrix()),Kr.setFromMatrixPosition(O.matrixWorld),Q.position.copy(Kr),ka.copy(Q.position),ka.add(Lx[et]),Q.up.copy(Ux[et]),Q.lookAt(ka),Q.updateMatrixWorld(),ht.makeTranslation(-Kr.x,-Kr.y,-Kr.z),rh.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),F._frustum.setFromProjectionMatrix(rh,Q.coordinateSystem,Q.reversedDepth)}else F.updateMatrices(O);n=F.getFrustum(),a(C,v,F.camera,O,this.type)}F.isPointLightShadow!==!0&&this.type===as&&E(F,v),F.needsUpdate=!1}_=this.type,x.needsUpdate=!1,i.setRenderTarget(y,A,b)};function E(c,C){const v=t.update(T);p.defines.VSM_SAMPLES!==c.blurSamples&&(p.defines.VSM_SAMPLES=c.blurSamples,m.defines.VSM_SAMPLES=c.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),c.mapPass===null&&(c.mapPass=new Ln(r.x,r.y,{format:Or,type:Qn})),p.uniforms.shadow_pass.value=c.map.depthTexture,p.uniforms.resolution.value=c.mapSize,p.uniforms.radius.value=c.radius,i.setRenderTarget(c.mapPass),i.clear(),i.renderBufferDirect(C,null,v,p,T,null),m.uniforms.shadow_pass.value=c.mapPass.texture,m.uniforms.resolution.value=c.mapSize,m.uniforms.radius.value=c.radius,i.setRenderTarget(c.map),i.clear(),i.renderBufferDirect(C,null,v,m,T,null)}function f(c,C,v,y){let A=null;const b=v.isPointLight===!0?c.customDistanceMaterial:c.customDepthMaterial;if(b!==void 0)A=b;else if(A=v.isPointLight===!0?u:l,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const w=A.uuid,R=C.uuid;let U=h[w];U===void 0&&(U={},h[w]=U);let N=U[R];N===void 0&&(N=A.clone(),U[R]=N,C.addEventListener("dispose",M)),A=N}if(A.visible=C.visible,A.wireframe=C.wireframe,y===as?A.side=C.shadowSide!==null?C.shadowSide:C.side:A.side=C.shadowSide!==null?C.shadowSide:g[C.side],A.alphaMap=C.alphaMap,A.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,A.map=C.map,A.clipShadows=C.clipShadows,A.clippingPlanes=C.clippingPlanes,A.clipIntersection=C.clipIntersection,A.displacementMap=C.displacementMap,A.displacementScale=C.displacementScale,A.displacementBias=C.displacementBias,A.wireframeLinewidth=C.wireframeLinewidth,A.linewidth=C.linewidth,v.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const w=i.properties.get(A);w.light=v}return A}function a(c,C,v,y,A){if(c.visible===!1)return;if(c.layers.test(C.layers)&&(c.isMesh||c.isLine||c.isPoints)&&(c.castShadow||c.receiveShadow&&A===as)&&(!c.frustumCulled||n.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,c.matrixWorld);const R=t.update(c),U=c.material;if(Array.isArray(U)){const N=R.groups;for(let O=0,F=N.length;O<F;O++){const G=N[O],H=U[G.materialIndex];if(H&&H.visible){const nt=f(c,H,y,A);c.onBeforeShadow(i,c,C,v,R,nt,G),i.renderBufferDirect(v,null,R,nt,c,G),c.onAfterShadow(i,c,C,v,R,nt,G)}}}else if(U.visible){const N=f(c,U,y,A);c.onBeforeShadow(i,c,C,v,R,N,null),i.renderBufferDirect(v,null,R,N,c,null),c.onAfterShadow(i,c,C,v,R,N,null)}}const w=c.children;for(let R=0,U=w.length;R<U;R++)a(w[R],C,v,y,A)}function M(c){c.target.removeEventListener("dispose",M);for(const v in h){const y=h[v],A=c.target.uuid;A in y&&(y[A].dispose(),delete y[A])}}}function Fx(i,t){function e(){let V=!1;const dt=new ae;let ct=null;const Et=new ae(0,0,0,0);return{setMask:function(rt){ct!==rt&&!V&&(i.colorMask(rt,rt,rt,rt),ct=rt)},setLocked:function(rt){V=rt},setClear:function(rt,K,wt,Gt,ce){ce===!0&&(rt*=Gt,K*=Gt,wt*=Gt),dt.set(rt,K,wt,Gt),Et.equals(dt)===!1&&(i.clearColor(rt,K,wt,Gt),Et.copy(dt))},reset:function(){V=!1,ct=null,Et.set(-1,0,0,0)}}}function n(){let V=!1,dt=!1,ct=null,Et=null,rt=null;return{setReversed:function(K){if(dt!==K){const wt=t.get("EXT_clip_control");K?wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.ZERO_TO_ONE_EXT):wt.clipControlEXT(wt.LOWER_LEFT_EXT,wt.NEGATIVE_ONE_TO_ONE_EXT),dt=K;const Gt=rt;rt=null,this.setClear(Gt)}},getReversed:function(){return dt},setTest:function(K){K?J(i.DEPTH_TEST):tt(i.DEPTH_TEST)},setMask:function(K){ct!==K&&!V&&(i.depthMask(K),ct=K)},setFunc:function(K){if(dt&&(K=hp[K]),Et!==K){switch(K){case xc:i.depthFunc(i.NEVER);break;case vc:i.depthFunc(i.ALWAYS);break;case Mc:i.depthFunc(i.LESS);break;case Nr:i.depthFunc(i.LEQUAL);break;case Sc:i.depthFunc(i.EQUAL);break;case yc:i.depthFunc(i.GEQUAL);break;case Ec:i.depthFunc(i.GREATER);break;case bc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Et=K}},setLocked:function(K){V=K},setClear:function(K){rt!==K&&(rt=K,dt&&(K=1-K),i.clearDepth(K))},reset:function(){V=!1,ct=null,Et=null,rt=null,dt=!1}}}function r(){let V=!1,dt=null,ct=null,Et=null,rt=null,K=null,wt=null,Gt=null,ce=null;return{setTest:function(ee){V||(ee?J(i.STENCIL_TEST):tt(i.STENCIL_TEST))},setMask:function(ee){dt!==ee&&!V&&(i.stencilMask(ee),dt=ee)},setFunc:function(ee,zn,Vn){(ct!==ee||Et!==zn||rt!==Vn)&&(i.stencilFunc(ee,zn,Vn),ct=ee,Et=zn,rt=Vn)},setOp:function(ee,zn,Vn){(K!==ee||wt!==zn||Gt!==Vn)&&(i.stencilOp(ee,zn,Vn),K=ee,wt=zn,Gt=Vn)},setLocked:function(ee){V=ee},setClear:function(ee){ce!==ee&&(i.clearStencil(ee),ce=ee)},reset:function(){V=!1,dt=null,ct=null,Et=null,rt=null,K=null,wt=null,Gt=null,ce=null}}}const s=new e,o=new n,l=new r,u=new WeakMap,h=new WeakMap;let d={},g={},p=new WeakMap,m=[],S=null,T=!1,x=null,_=null,E=null,f=null,a=null,M=null,c=null,C=new te(0,0,0),v=0,y=!1,A=null,b=null,w=null,R=null,U=null;const N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,F=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(G)[1]),O=F>=1):G.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),O=F>=2);let H=null,nt={};const et=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),ht=new ae().fromArray(et),Mt=new ae().fromArray(Q);function xt(V,dt,ct,Et){const rt=new Uint8Array(4),K=i.createTexture();i.bindTexture(V,K),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let wt=0;wt<ct;wt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(dt,0,i.RGBA,1,1,Et,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D(dt+wt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return K}const $={};$[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),J(i.DEPTH_TEST),o.setFunc(Nr),vt(!1),Ft(ru),J(i.CULL_FACE),Tt(Kn);function J(V){d[V]!==!0&&(i.enable(V),d[V]=!0)}function tt(V){d[V]!==!1&&(i.disable(V),d[V]=!1)}function lt(V,dt){return g[V]!==dt?(i.bindFramebuffer(V,dt),g[V]=dt,V===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=dt),V===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=dt),!0):!1}function st(V,dt){let ct=m,Et=!1;if(V){ct=p.get(dt),ct===void 0&&(ct=[],p.set(dt,ct));const rt=V.textures;if(ct.length!==rt.length||ct[0]!==i.COLOR_ATTACHMENT0){for(let K=0,wt=rt.length;K<wt;K++)ct[K]=i.COLOR_ATTACHMENT0+K;ct.length=rt.length,Et=!0}}else ct[0]!==i.BACK&&(ct[0]=i.BACK,Et=!0);Et&&i.drawBuffers(ct)}function pt(V){return S!==V?(i.useProgram(V),S=V,!0):!1}const jt={[zi]:i.FUNC_ADD,[Ud]:i.FUNC_SUBTRACT,[Nd]:i.FUNC_REVERSE_SUBTRACT};jt[Fd]=i.MIN,jt[Od]=i.MAX;const bt={[Bd]:i.ZERO,[zd]:i.ONE,[Vd]:i.SRC_COLOR,[mc]:i.SRC_ALPHA,[qd]:i.SRC_ALPHA_SATURATE,[Wd]:i.DST_COLOR,[Gd]:i.DST_ALPHA,[kd]:i.ONE_MINUS_SRC_COLOR,[_c]:i.ONE_MINUS_SRC_ALPHA,[Xd]:i.ONE_MINUS_DST_COLOR,[Hd]:i.ONE_MINUS_DST_ALPHA,[Yd]:i.CONSTANT_COLOR,[$d]:i.ONE_MINUS_CONSTANT_COLOR,[Zd]:i.CONSTANT_ALPHA,[jd]:i.ONE_MINUS_CONSTANT_ALPHA};function Tt(V,dt,ct,Et,rt,K,wt,Gt,ce,ee){if(V===Kn){T===!0&&(tt(i.BLEND),T=!1);return}if(T===!1&&(J(i.BLEND),T=!0),V!==Ld){if(V!==x||ee!==y){if((_!==zi||a!==zi)&&(i.blendEquation(i.FUNC_ADD),_=zi,a=zi),ee)switch(V){case Ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case su:i.blendFunc(i.ONE,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case au:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",V);break}else switch(V){case Ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case su:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ou:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case au:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",V);break}E=null,f=null,M=null,c=null,C.set(0,0,0),v=0,x=V,y=ee}return}rt=rt||dt,K=K||ct,wt=wt||Et,(dt!==_||rt!==a)&&(i.blendEquationSeparate(jt[dt],jt[rt]),_=dt,a=rt),(ct!==E||Et!==f||K!==M||wt!==c)&&(i.blendFuncSeparate(bt[ct],bt[Et],bt[K],bt[wt]),E=ct,f=Et,M=K,c=wt),(Gt.equals(C)===!1||ce!==v)&&(i.blendColor(Gt.r,Gt.g,Gt.b,ce),C.copy(Gt),v=ce),x=V,y=!1}function Pt(V,dt){V.side===Mn?tt(i.CULL_FACE):J(i.CULL_FACE);let ct=V.side===Ve;dt&&(ct=!ct),vt(ct),V.blending===Ir&&V.transparent===!1?Tt(Kn):Tt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const Et=V.stencilWrite;l.setTest(Et),Et&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Vt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function vt(V){A!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),A=V)}function Ft(V){V!==Dd?(J(i.CULL_FACE),V!==b&&(V===ru?i.cullFace(i.BACK):V===Id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):tt(i.CULL_FACE),b=V}function B(V){V!==w&&(O&&i.lineWidth(V),w=V)}function Vt(V,dt,ct){V?(J(i.POLYGON_OFFSET_FILL),(R!==dt||U!==ct)&&(R=dt,U=ct,o.getReversed()&&(dt=-dt),i.polygonOffset(dt,ct))):tt(i.POLYGON_OFFSET_FILL)}function It(V){V?J(i.SCISSOR_TEST):tt(i.SCISSOR_TEST)}function Bt(V){V===void 0&&(V=i.TEXTURE0+N-1),H!==V&&(i.activeTexture(V),H=V)}function ut(V,dt,ct){ct===void 0&&(H===null?ct=i.TEXTURE0+N-1:ct=H);let Et=nt[ct];Et===void 0&&(Et={type:void 0,texture:void 0},nt[ct]=Et),(Et.type!==V||Et.texture!==dt)&&(H!==ct&&(i.activeTexture(ct),H=ct),i.bindTexture(V,dt||$[V]),Et.type=V,Et.texture=dt)}function I(){const V=nt[H];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function P(){try{i.compressedTexImage2D(...arguments)}catch(V){Kt("WebGLState:",V)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(V){Kt("WebGLState:",V)}}function Y(){try{i.texSubImage2D(...arguments)}catch(V){Kt("WebGLState:",V)}}function j(){try{i.texSubImage3D(...arguments)}catch(V){Kt("WebGLState:",V)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Kt("WebGLState:",V)}}function ot(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Kt("WebGLState:",V)}}function ft(){try{i.texStorage2D(...arguments)}catch(V){Kt("WebGLState:",V)}}function Ut(){try{i.texStorage3D(...arguments)}catch(V){Kt("WebGLState:",V)}}function zt(){try{i.texImage2D(...arguments)}catch(V){Kt("WebGLState:",V)}}function it(){try{i.texImage3D(...arguments)}catch(V){Kt("WebGLState:",V)}}function at(V){ht.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),ht.copy(V))}function At(V){Mt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Mt.copy(V))}function Rt(V,dt){let ct=h.get(dt);ct===void 0&&(ct=new WeakMap,h.set(dt,ct));let Et=ct.get(V);Et===void 0&&(Et=i.getUniformBlockIndex(dt,V.name),ct.set(V,Et))}function St(V,dt){const Et=h.get(dt).get(V);u.get(dt)!==Et&&(i.uniformBlockBinding(dt,Et,V.__bindingPointIndex),u.set(dt,Et))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},H=null,nt={},g={},p=new WeakMap,m=[],S=null,T=!1,x=null,_=null,E=null,f=null,a=null,M=null,c=null,C=new te(0,0,0),v=0,y=!1,A=null,b=null,w=null,R=null,U=null,ht.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:J,disable:tt,bindFramebuffer:lt,drawBuffers:st,useProgram:pt,setBlending:Tt,setMaterial:Pt,setFlipSided:vt,setCullFace:Ft,setLineWidth:B,setPolygonOffset:Vt,setScissorTest:It,activeTexture:Bt,bindTexture:ut,unbindTexture:I,compressedTexImage2D:P,compressedTexImage3D:z,texImage2D:zt,texImage3D:it,updateUBOMapping:Rt,uniformBlockBinding:St,texStorage2D:ft,texStorage3D:Ut,texSubImage2D:Y,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:ot,scissor:at,viewport:At,reset:Yt}}function Ox(i,t,e,n,r,s,o){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ot,d=new WeakMap;let g;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,P){return m?new OffscreenCanvas(I,P):zo("canvas")}function T(I,P,z){let Y=1;const j=ut(I);if((j.width>z||j.height>z)&&(Y=z/Math.max(j.width,j.height)),Y<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const q=Math.floor(Y*j.width),ot=Math.floor(Y*j.height);g===void 0&&(g=S(q,ot));const ft=P?S(q,ot):g;return ft.width=q,ft.height=ot,ft.getContext("2d").drawImage(I,0,0,q,ot),kt("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+ot+")."),ft}else return"data"in I&&kt("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),I;return I}function x(I){return I.generateMipmaps}function _(I){i.generateMipmap(I)}function E(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function f(I,P,z,Y,j=!1){if(I!==null){if(i[I]!==void 0)return i[I];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let q=P;if(P===i.RED&&(z===i.FLOAT&&(q=i.R32F),z===i.HALF_FLOAT&&(q=i.R16F),z===i.UNSIGNED_BYTE&&(q=i.R8)),P===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.R8UI),z===i.UNSIGNED_SHORT&&(q=i.R16UI),z===i.UNSIGNED_INT&&(q=i.R32UI),z===i.BYTE&&(q=i.R8I),z===i.SHORT&&(q=i.R16I),z===i.INT&&(q=i.R32I)),P===i.RG&&(z===i.FLOAT&&(q=i.RG32F),z===i.HALF_FLOAT&&(q=i.RG16F),z===i.UNSIGNED_BYTE&&(q=i.RG8)),P===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RG8UI),z===i.UNSIGNED_SHORT&&(q=i.RG16UI),z===i.UNSIGNED_INT&&(q=i.RG32UI),z===i.BYTE&&(q=i.RG8I),z===i.SHORT&&(q=i.RG16I),z===i.INT&&(q=i.RG32I)),P===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RGB8UI),z===i.UNSIGNED_SHORT&&(q=i.RGB16UI),z===i.UNSIGNED_INT&&(q=i.RGB32UI),z===i.BYTE&&(q=i.RGB8I),z===i.SHORT&&(q=i.RGB16I),z===i.INT&&(q=i.RGB32I)),P===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),z===i.UNSIGNED_INT&&(q=i.RGBA32UI),z===i.BYTE&&(q=i.RGBA8I),z===i.SHORT&&(q=i.RGBA16I),z===i.INT&&(q=i.RGBA32I)),P===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),P===i.RGBA){const ot=j?Bo:Jt.getTransfer(Y);z===i.FLOAT&&(q=i.RGBA32F),z===i.HALF_FLOAT&&(q=i.RGBA16F),z===i.UNSIGNED_BYTE&&(q=ot===ne?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function a(I,P){let z;return I?P===null||P===Nn||P===_s?z=i.DEPTH24_STENCIL8:P===Cn?z=i.DEPTH32F_STENCIL8:P===ms&&(z=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===Nn||P===_s?z=i.DEPTH_COMPONENT24:P===Cn?z=i.DEPTH_COMPONENT32F:P===ms&&(z=i.DEPTH_COMPONENT16),z}function M(I,P){return x(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ce&&I.minFilter!==Le?Math.log2(Math.max(P.width,P.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?P.mipmaps.length:1}function c(I){const P=I.target;P.removeEventListener("dispose",c),v(P),P.isVideoTexture&&d.delete(P)}function C(I){const P=I.target;P.removeEventListener("dispose",C),A(P)}function v(I){const P=n.get(I);if(P.__webglInit===void 0)return;const z=I.source,Y=p.get(z);if(Y){const j=Y[P.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(I),Object.keys(Y).length===0&&p.delete(z)}n.remove(I)}function y(I){const P=n.get(I);i.deleteTexture(P.__webglTexture);const z=I.source,Y=p.get(z);delete Y[P.__cacheKey],o.memory.textures--}function A(I){const P=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(P.__webglFramebuffer[Y]))for(let j=0;j<P.__webglFramebuffer[Y].length;j++)i.deleteFramebuffer(P.__webglFramebuffer[Y][j]);else i.deleteFramebuffer(P.__webglFramebuffer[Y]);P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer[Y])}else{if(Array.isArray(P.__webglFramebuffer))for(let Y=0;Y<P.__webglFramebuffer.length;Y++)i.deleteFramebuffer(P.__webglFramebuffer[Y]);else i.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&i.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&i.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let Y=0;Y<P.__webglColorRenderbuffer.length;Y++)P.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(P.__webglColorRenderbuffer[Y]);P.__webglDepthRenderbuffer&&i.deleteRenderbuffer(P.__webglDepthRenderbuffer)}const z=I.textures;for(let Y=0,j=z.length;Y<j;Y++){const q=n.get(z[Y]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(z[Y])}n.remove(I)}let b=0;function w(){b=0}function R(){const I=b;return I>=r.maxTextures&&kt("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),b+=1,I}function U(I){const P=[];return P.push(I.wrapS),P.push(I.wrapT),P.push(I.wrapR||0),P.push(I.magFilter),P.push(I.minFilter),P.push(I.anisotropy),P.push(I.internalFormat),P.push(I.format),P.push(I.type),P.push(I.generateMipmaps),P.push(I.premultiplyAlpha),P.push(I.flipY),P.push(I.unpackAlignment),P.push(I.colorSpace),P.join()}function N(I,P){const z=n.get(I);if(I.isVideoTexture&&It(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&z.__version!==I.version){const Y=I.image;if(Y===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,I,P);return}}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+P)}function O(I,P){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){$(z,I,P);return}else I.isExternalTexture&&(z.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+P)}function F(I,P){const z=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&z.__version!==I.version){$(z,I,P);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+P)}function G(I,P){const z=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&z.__version!==I.version){J(z,I,P);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+P)}const H={[Oo]:i.REPEAT,[jn]:i.CLAMP_TO_EDGE,[Tc]:i.MIRRORED_REPEAT},nt={[Ce]:i.NEAREST,[Qd]:i.NEAREST_MIPMAP_NEAREST,[Cs]:i.NEAREST_MIPMAP_LINEAR,[Le]:i.LINEAR,[ua]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},et={[np]:i.NEVER,[ap]:i.ALWAYS,[ip]:i.LESS,[Pl]:i.LEQUAL,[rp]:i.EQUAL,[Dl]:i.GEQUAL,[sp]:i.GREATER,[op]:i.NOTEQUAL};function Q(I,P){if(P.type===Cn&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===Le||P.magFilter===ua||P.magFilter===Cs||P.magFilter===ki||P.minFilter===Le||P.minFilter===ua||P.minFilter===Cs||P.minFilter===ki)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,H[P.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,H[P.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,H[P.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,nt[P.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,nt[P.minFilter]),P.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,et[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===Ce||P.minFilter!==Cs&&P.minFilter!==ki||P.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function ht(I,P){let z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,P.addEventListener("dispose",c));const Y=P.source;let j=p.get(Y);j===void 0&&(j={},p.set(Y,j));const q=U(P);if(q!==I.__cacheKey){j[q]===void 0&&(j[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[q].usedTimes++;const ot=j[I.__cacheKey];ot!==void 0&&(j[I.__cacheKey].usedTimes--,ot.usedTimes===0&&y(P)),I.__cacheKey=q,I.__webglTexture=j[q].texture}return z}function Mt(I,P,z){return Math.floor(Math.floor(I/z)/P)}function xt(I,P,z,Y){const q=I.updateRanges;if(q.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,P.width,P.height,z,Y,P.data);else{q.sort((it,at)=>it.start-at.start);let ot=0;for(let it=1;it<q.length;it++){const at=q[ot],At=q[it],Rt=at.start+at.count,St=Mt(At.start,P.width,4),Yt=Mt(at.start,P.width,4);At.start<=Rt+1&&St===Yt&&Mt(At.start+At.count-1,P.width,4)===St?at.count=Math.max(at.count,At.start+At.count-at.start):(++ot,q[ot]=At)}q.length=ot+1;const ft=i.getParameter(i.UNPACK_ROW_LENGTH),Ut=i.getParameter(i.UNPACK_SKIP_PIXELS),zt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,P.width);for(let it=0,at=q.length;it<at;it++){const At=q[it],Rt=Math.floor(At.start/4),St=Math.ceil(At.count/4),Yt=Rt%P.width,V=Math.floor(Rt/P.width),dt=St,ct=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,Yt,V,dt,ct,z,Y,P.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ut),i.pixelStorei(i.UNPACK_SKIP_ROWS,zt)}}function $(I,P,z){let Y=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(Y=i.TEXTURE_3D);const j=ht(I,P),q=P.source;e.bindTexture(Y,I.__webglTexture,i.TEXTURE0+z);const ot=n.get(q);if(q.version!==ot.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const ft=Jt.getPrimaries(Jt.workingColorSpace),Ut=P.colorSpace===_i?null:Jt.getPrimaries(P.colorSpace),zt=P.colorSpace===_i||ft===Ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let it=T(P.image,!1,r.maxTextureSize);it=Bt(P,it);const at=s.convert(P.format,P.colorSpace),At=s.convert(P.type);let Rt=f(P.internalFormat,at,At,P.colorSpace,P.isVideoTexture);Q(Y,P);let St;const Yt=P.mipmaps,V=P.isVideoTexture!==!0,dt=ot.__version===void 0||j===!0,ct=q.dataReady,Et=M(P,it);if(P.isDepthTexture)Rt=a(P.format===Gi,P.type),dt&&(V?e.texStorage2D(i.TEXTURE_2D,1,Rt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,Rt,it.width,it.height,0,at,At,null));else if(P.isDataTexture)if(Yt.length>0){V&&dt&&e.texStorage2D(i.TEXTURE_2D,Et,Rt,Yt[0].width,Yt[0].height);for(let rt=0,K=Yt.length;rt<K;rt++)St=Yt[rt],V?ct&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,St.width,St.height,at,At,St.data):e.texImage2D(i.TEXTURE_2D,rt,Rt,St.width,St.height,0,at,At,St.data);P.generateMipmaps=!1}else V?(dt&&e.texStorage2D(i.TEXTURE_2D,Et,Rt,it.width,it.height),ct&&xt(P,it,at,At)):e.texImage2D(i.TEXTURE_2D,0,Rt,it.width,it.height,0,at,At,it.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){V&&dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Rt,Yt[0].width,Yt[0].height,it.depth);for(let rt=0,K=Yt.length;rt<K;rt++)if(St=Yt[rt],P.format!==Sn)if(at!==null)if(V){if(ct)if(P.layerUpdates.size>0){const wt=Nu(St.width,St.height,P.format,P.type);for(const Gt of P.layerUpdates){const ce=St.data.subarray(Gt*wt/St.data.BYTES_PER_ELEMENT,(Gt+1)*wt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,Gt,St.width,St.height,1,at,ce)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,St.width,St.height,it.depth,at,St.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,Rt,St.width,St.height,it.depth,0,St.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?ct&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,St.width,St.height,it.depth,at,At,St.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,Rt,St.width,St.height,it.depth,0,at,At,St.data)}else{V&&dt&&e.texStorage2D(i.TEXTURE_2D,Et,Rt,Yt[0].width,Yt[0].height);for(let rt=0,K=Yt.length;rt<K;rt++)St=Yt[rt],P.format!==Sn?at!==null?V?ct&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,St.width,St.height,at,St.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,Rt,St.width,St.height,0,St.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?ct&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,St.width,St.height,at,At,St.data):e.texImage2D(i.TEXTURE_2D,rt,Rt,St.width,St.height,0,at,At,St.data)}else if(P.isDataArrayTexture)if(V){if(dt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Et,Rt,it.width,it.height,it.depth),ct)if(P.layerUpdates.size>0){const rt=Nu(it.width,it.height,P.format,P.type);for(const K of P.layerUpdates){const wt=it.data.subarray(K*rt/it.data.BYTES_PER_ELEMENT,(K+1)*rt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,at,At,wt)}P.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,at,At,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Rt,it.width,it.height,it.depth,0,at,At,it.data);else if(P.isData3DTexture)V?(dt&&e.texStorage3D(i.TEXTURE_3D,Et,Rt,it.width,it.height,it.depth),ct&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,at,At,it.data)):e.texImage3D(i.TEXTURE_3D,0,Rt,it.width,it.height,it.depth,0,at,At,it.data);else if(P.isFramebufferTexture){if(dt)if(V)e.texStorage2D(i.TEXTURE_2D,Et,Rt,it.width,it.height);else{let rt=it.width,K=it.height;for(let wt=0;wt<Et;wt++)e.texImage2D(i.TEXTURE_2D,wt,Rt,rt,K,0,at,At,null),rt>>=1,K>>=1}}else if(Yt.length>0){if(V&&dt){const rt=ut(Yt[0]);e.texStorage2D(i.TEXTURE_2D,Et,Rt,rt.width,rt.height)}for(let rt=0,K=Yt.length;rt<K;rt++)St=Yt[rt],V?ct&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,at,At,St):e.texImage2D(i.TEXTURE_2D,rt,Rt,at,At,St);P.generateMipmaps=!1}else if(V){if(dt){const rt=ut(it);e.texStorage2D(i.TEXTURE_2D,Et,Rt,rt.width,rt.height)}ct&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at,At,it)}else e.texImage2D(i.TEXTURE_2D,0,Rt,at,At,it);x(P)&&_(Y),ot.__version=q.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function J(I,P,z){if(P.image.length!==6)return;const Y=ht(I,P),j=P.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+z);const q=n.get(j);if(j.version!==q.__version||Y===!0){e.activeTexture(i.TEXTURE0+z);const ot=Jt.getPrimaries(Jt.workingColorSpace),ft=P.colorSpace===_i?null:Jt.getPrimaries(P.colorSpace),Ut=P.colorSpace===_i||ot===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);const zt=P.isCompressedTexture||P.image[0].isCompressedTexture,it=P.image[0]&&P.image[0].isDataTexture,at=[];for(let K=0;K<6;K++)!zt&&!it?at[K]=T(P.image[K],!0,r.maxCubemapSize):at[K]=it?P.image[K].image:P.image[K],at[K]=Bt(P,at[K]);const At=at[0],Rt=s.convert(P.format,P.colorSpace),St=s.convert(P.type),Yt=f(P.internalFormat,Rt,St,P.colorSpace),V=P.isVideoTexture!==!0,dt=q.__version===void 0||Y===!0,ct=j.dataReady;let Et=M(P,At);Q(i.TEXTURE_CUBE_MAP,P);let rt;if(zt){V&&dt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Yt,At.width,At.height);for(let K=0;K<6;K++){rt=at[K].mipmaps;for(let wt=0;wt<rt.length;wt++){const Gt=rt[wt];P.format!==Sn?Rt!==null?V?ct&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt,0,0,Gt.width,Gt.height,Rt,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt,Yt,Gt.width,Gt.height,0,Gt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt,0,0,Gt.width,Gt.height,Rt,St,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt,Yt,Gt.width,Gt.height,0,Rt,St,Gt.data)}}}else{if(rt=P.mipmaps,V&&dt){rt.length>0&&Et++;const K=ut(at[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Et,Yt,K.width,K.height)}for(let K=0;K<6;K++)if(it){V?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,at[K].width,at[K].height,Rt,St,at[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,at[K].width,at[K].height,0,Rt,St,at[K].data);for(let wt=0;wt<rt.length;wt++){const ce=rt[wt].image[K].image;V?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt+1,0,0,ce.width,ce.height,Rt,St,ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt+1,Yt,ce.width,ce.height,0,Rt,St,ce.data)}}else{V?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Rt,St,at[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Yt,Rt,St,at[K]);for(let wt=0;wt<rt.length;wt++){const Gt=rt[wt];V?ct&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt+1,0,0,Rt,St,Gt.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,wt+1,Yt,Rt,St,Gt.image[K])}}}x(P)&&_(i.TEXTURE_CUBE_MAP),q.__version=j.version,P.onUpdate&&P.onUpdate(P)}I.__version=P.version}function tt(I,P,z,Y,j,q){const ot=s.convert(z.format,z.colorSpace),ft=s.convert(z.type),Ut=f(z.internalFormat,ot,ft,z.colorSpace),zt=n.get(P),it=n.get(z);if(it.__renderTarget=P,!zt.__hasExternalTextures){const at=Math.max(1,P.width>>q),At=Math.max(1,P.height>>q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?e.texImage3D(j,q,Ut,at,At,P.depth,0,ot,ft,null):e.texImage2D(j,q,Ut,at,At,0,ot,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),Vt(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,j,it.__webglTexture,0,B(P)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,j,it.__webglTexture,q),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(I,P,z){if(i.bindRenderbuffer(i.RENDERBUFFER,I),P.depthBuffer){const Y=P.depthTexture,j=Y&&Y.isDepthTexture?Y.type:null,q=a(P.stencilBuffer,j),ot=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Vt(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B(P),q,P.width,P.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,B(P),q,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,q,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,I)}else{const Y=P.textures;for(let j=0;j<Y.length;j++){const q=Y[j],ot=s.convert(q.format,q.colorSpace),ft=s.convert(q.type),Ut=f(q.internalFormat,ot,ft,q.colorSpace);Vt(P)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,B(P),Ut,P.width,P.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,B(P),Ut,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Ut,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function st(I,P,z){const Y=P.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(P.depthTexture);if(j.__renderTarget=P,(!j.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),Y){if(j.__webglInit===void 0&&(j.__webglInit=!0,P.depthTexture.addEventListener("dispose",c)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Q(i.TEXTURE_CUBE_MAP,P.depthTexture);const zt=s.convert(P.depthTexture.format),it=s.convert(P.depthTexture.type);let at;P.depthTexture.format===ti?at=i.DEPTH_COMPONENT24:P.depthTexture.format===Gi&&(at=i.DEPTH24_STENCIL8);for(let At=0;At<6;At++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+At,0,at,P.width,P.height,0,zt,it,null)}}else N(P.depthTexture,0);const q=j.__webglTexture,ot=B(P),ft=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,Ut=P.depthTexture.format===Gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(P.depthTexture.format===ti)Vt(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ut,ft,q,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,Ut,ft,q,0);else if(P.depthTexture.format===Gi)Vt(P)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ut,ft,q,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,Ut,ft,q,0);else throw new Error("Unknown depthTexture format")}function pt(I){const P=n.get(I),z=I.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==I.depthTexture){const Y=I.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),Y){const j=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,Y.removeEventListener("dispose",j)};Y.addEventListener("dispose",j),P.__depthDisposeCallback=j}P.__boundDepthTexture=Y}if(I.depthTexture&&!P.__autoAllocateDepthBuffer)if(z)for(let Y=0;Y<6;Y++)st(P.__webglFramebuffer[Y],I,Y);else{const Y=I.texture.mipmaps;Y&&Y.length>0?st(P.__webglFramebuffer[0],I,0):st(P.__webglFramebuffer,I,0)}else if(z){P.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[Y]),P.__webglDepthbuffer[Y]===void 0)P.__webglDepthbuffer[Y]=i.createRenderbuffer(),lt(P.__webglDepthbuffer[Y],I,!1);else{const j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=P.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}else{const Y=I.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=i.createRenderbuffer(),lt(P.__webglDepthbuffer,I,!1);else{const j=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=P.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function jt(I,P,z){const Y=n.get(I);P!==void 0&&tt(Y.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&pt(I)}function bt(I){const P=I.texture,z=n.get(I),Y=n.get(P);I.addEventListener("dispose",C);const j=I.textures,q=I.isWebGLCubeRenderTarget===!0,ot=j.length>1;if(ot||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=P.version,o.memory.textures++),q){z.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(P.mipmaps&&P.mipmaps.length>0){z.__webglFramebuffer[ft]=[];for(let Ut=0;Ut<P.mipmaps.length;Ut++)z.__webglFramebuffer[ft][Ut]=i.createFramebuffer()}else z.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){z.__webglFramebuffer=[];for(let ft=0;ft<P.mipmaps.length;ft++)z.__webglFramebuffer[ft]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ot)for(let ft=0,Ut=j.length;ft<Ut;ft++){const zt=n.get(j[ft]);zt.__webglTexture===void 0&&(zt.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&Vt(I)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ft=0;ft<j.length;ft++){const Ut=j[ft];z.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ft]);const zt=s.convert(Ut.format,Ut.colorSpace),it=s.convert(Ut.type),at=f(Ut.internalFormat,zt,it,Ut.colorSpace,I.isXRRenderTarget===!0),At=B(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,At,at,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,z.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(z.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Q(i.TEXTURE_CUBE_MAP,P);for(let ft=0;ft<6;ft++)if(P.mipmaps&&P.mipmaps.length>0)for(let Ut=0;Ut<P.mipmaps.length;Ut++)tt(z.__webglFramebuffer[ft][Ut],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Ut);else tt(z.__webglFramebuffer[ft],I,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);x(P)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let ft=0,Ut=j.length;ft<Ut;ft++){const zt=j[ft],it=n.get(zt);let at=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(at=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,it.__webglTexture),Q(at,zt),tt(z.__webglFramebuffer,I,zt,i.COLOR_ATTACHMENT0+ft,at,0),x(zt)&&_(at)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ft=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Y.__webglTexture),Q(ft,P),P.mipmaps&&P.mipmaps.length>0)for(let Ut=0;Ut<P.mipmaps.length;Ut++)tt(z.__webglFramebuffer[Ut],I,P,i.COLOR_ATTACHMENT0,ft,Ut);else tt(z.__webglFramebuffer,I,P,i.COLOR_ATTACHMENT0,ft,0);x(P)&&_(ft),e.unbindTexture()}I.depthBuffer&&pt(I)}function Tt(I){const P=I.textures;for(let z=0,Y=P.length;z<Y;z++){const j=P[z];if(x(j)){const q=E(I),ot=n.get(j).__webglTexture;e.bindTexture(q,ot),_(q),e.unbindTexture()}}}const Pt=[],vt=[];function Ft(I){if(I.samples>0){if(Vt(I)===!1){const P=I.textures,z=I.width,Y=I.height;let j=i.COLOR_BUFFER_BIT;const q=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(I),ft=P.length>1;if(ft)for(let zt=0;zt<P.length;zt++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);const Ut=I.texture.mipmaps;Ut&&Ut.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let zt=0;zt<P.length;zt++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[zt]);const it=n.get(P[zt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,it,0)}i.blitFramebuffer(0,0,z,Y,0,0,z,Y,j,i.NEAREST),u===!0&&(Pt.length=0,vt.length=0,Pt.push(i.COLOR_ATTACHMENT0+zt),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Pt.push(q),vt.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let zt=0;zt<P.length;zt++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.RENDERBUFFER,ot.__webglColorRenderbuffer[zt]);const it=n.get(P[zt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+zt,i.TEXTURE_2D,it,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&u){const P=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[P])}}}function B(I){return Math.min(r.maxSamples,I.samples)}function Vt(I){const P=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function It(I){const P=o.render.frame;d.get(I)!==P&&(d.set(I,P),I.update())}function Bt(I,P){const z=I.colorSpace,Y=I.format,j=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||z!==Br&&z!==_i&&(Jt.getTransfer(z)===ne?(Y!==Sn||j!==tn)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",z)),P}function ut(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=R,this.resetTextureUnits=w,this.setTexture2D=N,this.setTexture2DArray=O,this.setTexture3D=F,this.setTextureCube=G,this.rebindTextures=jt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Bx(i,t){function e(n,r=_i){let s;const o=Jt.getTransfer(r);if(n===tn)return i.UNSIGNED_BYTE;if(n===Tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ef)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===bf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sf)return i.BYTE;if(n===yf)return i.SHORT;if(n===ms)return i.UNSIGNED_SHORT;if(n===bl)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Qn)return i.HALF_FLOAT;if(n===Tf)return i.ALPHA;if(n===Af)return i.RGB;if(n===Sn)return i.RGBA;if(n===ti)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===wf)return i.RED;if(n===wl)return i.RED_INTEGER;if(n===Or)return i.RG;if(n===Rl)return i.RG_INTEGER;if(n===Cl)return i.RGBA_INTEGER;if(n===To||n===Ao||n===wo||n===Ro)if(o===ne)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===To)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===To)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ac||n===wc||n===Rc||n===Cc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pc||n===Dc||n===Ic||n===Lc||n===Uc||n===Nc||n===Fc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pc||n===Dc)return o===ne?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ic)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Lc)return s.COMPRESSED_R11_EAC;if(n===Uc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Nc)return s.COMPRESSED_RG11_EAC;if(n===Fc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Oc||n===Bc||n===zc||n===Vc||n===kc||n===Gc||n===Hc||n===Wc||n===Xc||n===qc||n===Yc||n===$c||n===Zc||n===jc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Oc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Bc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===zc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Vc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Gc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Hc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===$c)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jc)return o===ne?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kc||n===Jc||n===Qc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Kc)return o===ne?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tl||n===el||n===nl||n===il)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===tl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===el)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vx=`
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

}`;class kx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Ff(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new On({vertexShader:zx,fragmentShader:Vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new en(new Zo(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Gx extends $i{constructor(t,e){super();const n=this;let r=null,s=1,o=null,l="local-floor",u=1,h=null,d=null,g=null,p=null,m=null,S=null;const T=typeof XRWebGLBinding<"u",x=new kx,_={},E=e.getContextAttributes();let f=null,a=null;const M=[],c=[],C=new Ot;let v=null;const y=new un;y.viewport=new ae;const A=new un;A.viewport=new ae;const b=[y,A],w=new jp;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=M[$];return J===void 0&&(J=new _a,M[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=M[$];return J===void 0&&(J=new _a,M[$]=J),J.getGripSpace()},this.getHand=function($){let J=M[$];return J===void 0&&(J=new _a,M[$]=J),J.getHandSpace()};function N($){const J=c.indexOf($.inputSource);if(J===-1)return;const tt=M[J];tt!==void 0&&(tt.update($.inputSource,$.frame,h||o),tt.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",F);for(let $=0;$<M.length;$++){const J=c[$];J!==null&&(c[$]=null,M[$].disconnect(J))}R=null,U=null,x.reset();for(const $ in _)delete _[$];t.setRenderTarget(f),m=null,p=null,g=null,r=null,a=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function($){h=$},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(r,e)),g},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(f=t.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",O),r.addEventListener("inputsourceschange",F),E.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(C),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,lt=null,st=null;E.depth&&(st=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=E.stencil?Gi:ti,lt=E.stencil?_s:Nn);const pt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};g=this.getBinding(),p=g.createProjectionLayer(pt),r.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),a=new Ln(p.textureWidth,p.textureHeight,{format:Sn,type:tn,depthTexture:new vs(p.textureWidth,p.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}else{const tt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,tt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),a=new Ln(m.framebufferWidth,m.framebufferHeight,{format:Sn,type:tn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}a.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await r.requestReferenceSpace(l),xt.setContext(r),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F($){for(let J=0;J<$.removed.length;J++){const tt=$.removed[J],lt=c.indexOf(tt);lt>=0&&(c[lt]=null,M[lt].disconnect(tt))}for(let J=0;J<$.added.length;J++){const tt=$.added[J];let lt=c.indexOf(tt);if(lt===-1){for(let pt=0;pt<M.length;pt++)if(pt>=c.length){c.push(tt),lt=pt;break}else if(c[pt]===null){c[pt]=tt,lt=pt;break}if(lt===-1)break}const st=M[lt];st&&st.connect(tt)}}const G=new L,H=new L;function nt($,J,tt){G.setFromMatrixPosition(J.matrixWorld),H.setFromMatrixPosition(tt.matrixWorld);const lt=G.distanceTo(H),st=J.projectionMatrix.elements,pt=tt.projectionMatrix.elements,jt=st[14]/(st[10]-1),bt=st[14]/(st[10]+1),Tt=(st[9]+1)/st[5],Pt=(st[9]-1)/st[5],vt=(st[8]-1)/st[0],Ft=(pt[8]+1)/pt[0],B=jt*vt,Vt=jt*Ft,It=lt/(-vt+Ft),Bt=It*-vt;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Bt),$.translateZ(It),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),st[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ut=jt+It,I=bt+It,P=B-Bt,z=Vt+(lt-Bt),Y=Tt*bt/I*ut,j=Pt*bt/I*ut;$.projectionMatrix.makePerspective(P,z,Y,j,ut,I),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function et($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let J=$.near,tt=$.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(tt=x.depthFar)),w.near=A.near=y.near=J,w.far=A.far=y.far=tt,(R!==w.near||U!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,U=w.far),w.layers.mask=$.layers.mask|6,y.layers.mask=w.layers.mask&-5,A.layers.mask=w.layers.mask&-3;const lt=$.parent,st=w.cameras;et(w,lt);for(let pt=0;pt<st.length;pt++)et(st[pt],lt);st.length===2?nt(w,y,A):w.projectionMatrix.copy(y.projectionMatrix),Q($,w,lt)};function Q($,J,tt){tt===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(tt.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=rl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&m===null))return u},this.setFoveation=function($){u=$,p!==null&&(p.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(w)},this.getCameraTexture=function($){return _[$]};let ht=null;function Mt($,J){if(d=J.getViewerPose(h||o),S=J,d!==null){const tt=d.views;m!==null&&(t.setRenderTargetFramebuffer(a,m.framebuffer),t.setRenderTarget(a));let lt=!1;tt.length!==w.cameras.length&&(w.cameras.length=0,lt=!0);for(let bt=0;bt<tt.length;bt++){const Tt=tt[bt];let Pt=null;if(m!==null)Pt=m.getViewport(Tt);else{const Ft=g.getViewSubImage(p,Tt);Pt=Ft.viewport,bt===0&&(t.setRenderTargetTextures(a,Ft.colorTexture,Ft.depthStencilTexture),t.setRenderTarget(a))}let vt=b[bt];vt===void 0&&(vt=new un,vt.layers.enable(bt),vt.viewport=new ae,b[bt]=vt),vt.matrix.fromArray(Tt.transform.matrix),vt.matrix.decompose(vt.position,vt.quaternion,vt.scale),vt.projectionMatrix.fromArray(Tt.projectionMatrix),vt.projectionMatrixInverse.copy(vt.projectionMatrix).invert(),vt.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),bt===0&&(w.matrix.copy(vt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),lt===!0&&w.cameras.push(vt)}const st=r.enabledFeatures;if(st&&st.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&T){g=n.getBinding();const bt=g.getDepthInformation(tt[0]);bt&&bt.isValid&&bt.texture&&x.init(bt,r.renderState)}if(st&&st.includes("camera-access")&&T){t.state.unbindTexture(),g=n.getBinding();for(let bt=0;bt<tt.length;bt++){const Tt=tt[bt].camera;if(Tt){let Pt=_[Tt];Pt||(Pt=new Ff,_[Tt]=Pt);const vt=g.getCameraImage(Tt);Pt.sourceTexture=vt}}}}for(let tt=0;tt<M.length;tt++){const lt=c[tt],st=M[tt];lt!==null&&st!==void 0&&st.update(lt,J,h||o)}ht&&ht($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),S=null}const xt=new Vf;xt.setAnimationLoop(Mt),this.setAnimationLoop=function($){ht=$},this.dispose=function(){}}}const Ii=new Fn,Hx=new Zt;function Wx(i,t){function e(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function n(x,_){_.color.getRGB(x.fogColor.value,Of(i)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function r(x,_,E,f,a){_.isMeshBasicMaterial?s(x,_):_.isMeshLambertMaterial?(s(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(x,_),g(x,_)):_.isMeshPhongMaterial?(s(x,_),d(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(x,_),p(x,_),_.isMeshPhysicalMaterial&&m(x,_,a)):_.isMeshMatcapMaterial?(s(x,_),S(x,_)):_.isMeshDepthMaterial?s(x,_):_.isMeshDistanceMaterial?(s(x,_),T(x,_)):_.isMeshNormalMaterial?s(x,_):_.isLineBasicMaterial?(o(x,_),_.isLineDashedMaterial&&l(x,_)):_.isPointsMaterial?u(x,_,E,f):_.isSpriteMaterial?h(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,e(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Ve&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,e(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Ve&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,e(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,e(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const E=t.get(_),f=E.envMap,a=E.envMapRotation;f&&(x.envMap.value=f,Ii.copy(a),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,f.isCubeTexture&&f.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),x.envMapRotation.value.setFromMatrix4(Hx.makeRotationFromEuler(Ii)),x.flipEnvMap.value=f.isCubeTexture&&f.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,x.aoMapTransform))}function o(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform))}function l(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function u(x,_,E,f){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*E,x.scale.value=f*.5,_.map&&(x.map.value=_.map,e(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function h(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,e(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,e(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function d(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function g(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function p(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function m(x,_,E){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Ve&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=E.texture,x.transmissionSamplerSize.value.set(E.width,E.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,x.specularIntensityMapTransform))}function S(x,_){_.matcap&&(x.matcap.value=_.matcap)}function T(x,_){const E=t.get(_).light;x.referencePosition.value.setFromMatrixPosition(E.matrixWorld),x.nearDistance.value=E.shadow.camera.near,x.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Xx(i,t,e,n){let r={},s={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(E,f){const a=f.program;n.uniformBlockBinding(E,a)}function h(E,f){let a=r[E.id];a===void 0&&(S(E),a=d(E),r[E.id]=a,E.addEventListener("dispose",x));const M=f.program;n.updateUBOMapping(E,M);const c=t.render.frame;s[E.id]!==c&&(p(E),s[E.id]=c)}function d(E){const f=g();E.__bindingPointIndex=f;const a=i.createBuffer(),M=E.__size,c=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,a),i.bufferData(i.UNIFORM_BUFFER,M,c),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,f,a),a}function g(){for(let E=0;E<l;E++)if(o.indexOf(E)===-1)return o.push(E),E;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){const f=r[E.id],a=E.uniforms,M=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,f);for(let c=0,C=a.length;c<C;c++){const v=Array.isArray(a[c])?a[c]:[a[c]];for(let y=0,A=v.length;y<A;y++){const b=v[y];if(m(b,c,y,M)===!0){const w=b.__offset,R=Array.isArray(b.value)?b.value:[b.value];let U=0;for(let N=0;N<R.length;N++){const O=R[N],F=T(O);typeof O=="number"||typeof O=="boolean"?(b.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,w+U,b.__data)):O.isMatrix3?(b.__data[0]=O.elements[0],b.__data[1]=O.elements[1],b.__data[2]=O.elements[2],b.__data[3]=0,b.__data[4]=O.elements[3],b.__data[5]=O.elements[4],b.__data[6]=O.elements[5],b.__data[7]=0,b.__data[8]=O.elements[6],b.__data[9]=O.elements[7],b.__data[10]=O.elements[8],b.__data[11]=0):(O.toArray(b.__data,U),U+=F.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,w,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(E,f,a,M){const c=E.value,C=f+"_"+a;if(M[C]===void 0)return typeof c=="number"||typeof c=="boolean"?M[C]=c:M[C]=c.clone(),!0;{const v=M[C];if(typeof c=="number"||typeof c=="boolean"){if(v!==c)return M[C]=c,!0}else if(v.equals(c)===!1)return v.copy(c),!0}return!1}function S(E){const f=E.uniforms;let a=0;const M=16;for(let C=0,v=f.length;C<v;C++){const y=Array.isArray(f[C])?f[C]:[f[C]];for(let A=0,b=y.length;A<b;A++){const w=y[A],R=Array.isArray(w.value)?w.value:[w.value];for(let U=0,N=R.length;U<N;U++){const O=R[U],F=T(O),G=a%M,H=G%F.boundary,nt=G+H;a+=H,nt!==0&&M-nt<F.storage&&(a+=M-nt),w.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=a,a+=F.storage}}}const c=a%M;return c>0&&(a+=M-c),E.__size=a,E.__cache={},this}function T(E){const f={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(f.boundary=4,f.storage=4):E.isVector2?(f.boundary=8,f.storage=8):E.isVector3||E.isColor?(f.boundary=16,f.storage=12):E.isVector4?(f.boundary=16,f.storage=16):E.isMatrix3?(f.boundary=48,f.storage=48):E.isMatrix4?(f.boundary=64,f.storage=64):E.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):kt("WebGLRenderer: Unsupported uniform value type.",E),f}function x(E){const f=E.target;f.removeEventListener("dispose",x);const a=o.indexOf(f.__bindingPointIndex);o.splice(a,1),i.deleteBuffer(r[f.id]),delete r[f.id],delete s[f.id]}function _(){for(const E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:u,update:h,dispose:_}}const qx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let An=null;function Yx(){return An===null&&(An=new Lp(qx,16,16,Or,Qn),An.name="DFG_LUT",An.minFilter=Le,An.magFilter=Le,An.wrapS=jn,An.wrapT=jn,An.generateMipmaps=!1,An.needsUpdate=!0),An}class $x{constructor(t={}){const{canvas:e=lp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:p=!1,outputBufferType:m=tn}=t;this.isWebGLRenderer=!0;let S;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=n.getContextAttributes().alpha}else S=o;const T=m,x=new Set([Cl,Rl,wl]),_=new Set([tn,Nn,ms,_s,Tl,Al]),E=new Uint32Array(4),f=new Int32Array(4);let a=null,M=null;const c=[],C=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=ln;let b=0,w=0,R=null,U=-1,N=null;const O=new ae,F=new ae;let G=null;const H=new te(0);let nt=0,et=e.width,Q=e.height,ht=1,Mt=null,xt=null;const $=new ae(0,0,et,Q),J=new ae(0,0,et,Q);let tt=!1;const lt=new Nl;let st=!1,pt=!1;const jt=new Zt,bt=new L,Tt=new ae,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function Ft(){return R===null?ht:1}let B=n;function Vt(D,k){return e.getContext(D,k)}try{const D={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:g};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Es}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",ce,!1),B===null){const k="webgl2";if(B=Vt(k,D),B===null)throw Vt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw Kt("WebGLRenderer: "+D.message),D}let It,Bt,ut,I,P,z,Y,j,q,ot,ft,Ut,zt,it,at,At,Rt,St,Yt,V,dt,ct,Et;function rt(){It=new $_(B),It.init(),dt=new Bx(B,It),Bt=new V_(B,It,t,dt),ut=new Fx(B,It),Bt.reversedDepthBuffer&&p&&ut.buffers.depth.setReversed(!0),I=new K_(B),P=new yx,z=new Ox(B,It,ut,P,Bt,dt,I),Y=new Y_(y),j=new ng(B),ct=new B_(B,j),q=new Z_(B,j,I,ct),ot=new Q_(B,q,j,ct,I),St=new J_(B,Bt,z),at=new k_(P),ft=new Sx(y,Y,It,Bt,ct,at),Ut=new Wx(y,P),zt=new bx,it=new Px(It),Rt=new O_(y,Y,ut,ot,S,u),At=new Nx(y,ot,Bt),Et=new Xx(B,I,Bt,ut),Yt=new z_(B,It,I),V=new j_(B,It,I),I.programs=ft.programs,y.capabilities=Bt,y.extensions=It,y.properties=P,y.renderLists=zt,y.shadowMap=At,y.state=ut,y.info=I}rt(),T!==tn&&(v=new e0(T,e.width,e.height,r,s));const K=new Gx(y,B);this.xr=K,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const D=It.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=It.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(D){D!==void 0&&(ht=D,this.setSize(et,Q,!1))},this.getSize=function(D){return D.set(et,Q)},this.setSize=function(D,k,Z=!0){if(K.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}et=D,Q=k,e.width=Math.floor(D*ht),e.height=Math.floor(k*ht),Z===!0&&(e.style.width=D+"px",e.style.height=k+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,D,k)},this.getDrawingBufferSize=function(D){return D.set(et*ht,Q*ht).floor()},this.setDrawingBufferSize=function(D,k,Z){et=D,Q=k,ht=Z,e.width=Math.floor(D*Z),e.height=Math.floor(k*Z),this.setViewport(0,0,D,k)},this.setEffects=function(D){if(T===tn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let k=0;k<D.length;k++)if(D[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(O)},this.getViewport=function(D){return D.copy($)},this.setViewport=function(D,k,Z,X){D.isVector4?$.set(D.x,D.y,D.z,D.w):$.set(D,k,Z,X),ut.viewport(O.copy($).multiplyScalar(ht).round())},this.getScissor=function(D){return D.copy(J)},this.setScissor=function(D,k,Z,X){D.isVector4?J.set(D.x,D.y,D.z,D.w):J.set(D,k,Z,X),ut.scissor(F.copy(J).multiplyScalar(ht).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(D){ut.setScissorTest(tt=D)},this.setOpaqueSort=function(D){Mt=D},this.setTransparentSort=function(D){xt=D},this.getClearColor=function(D){return D.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor(...arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha(...arguments)},this.clear=function(D=!0,k=!0,Z=!0){let X=0;if(D){let W=!1;if(R!==null){const mt=R.texture.format;W=x.has(mt)}if(W){const mt=R.texture.type,yt=_.has(mt),_t=Rt.getClearColor(),Ct=Rt.getClearAlpha(),Lt=_t.r,Wt=_t.g,$t=_t.b;yt?(E[0]=Lt,E[1]=Wt,E[2]=$t,E[3]=Ct,B.clearBufferuiv(B.COLOR,0,E)):(f[0]=Lt,f[1]=Wt,f[2]=$t,f[3]=Ct,B.clearBufferiv(B.COLOR,0,f))}else X|=B.COLOR_BUFFER_BIT}k&&(X|=B.DEPTH_BUFFER_BIT),Z&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",ce,!1),Rt.dispose(),zt.dispose(),it.dispose(),P.dispose(),Y.dispose(),ot.dispose(),ct.dispose(),Et.dispose(),ft.dispose(),K.dispose(),K.removeEventListener("sessionstart",jl),K.removeEventListener("sessionend",Kl),Ti.stop()};function wt(D){D.preventDefault(),fu("WebGLRenderer: Context Lost."),A=!0}function Gt(){fu("WebGLRenderer: Context Restored."),A=!1;const D=I.autoReset,k=At.enabled,Z=At.autoUpdate,X=At.needsUpdate,W=At.type;rt(),I.autoReset=D,At.enabled=k,At.autoUpdate=Z,At.needsUpdate=X,At.type=W}function ce(D){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function ee(D){const k=D.target;k.removeEventListener("dispose",ee),zn(k)}function zn(D){Vn(D),P.remove(D)}function Vn(D){const k=P.get(D).programs;k!==void 0&&(k.forEach(function(Z){ft.releaseProgram(Z)}),D.isShaderMaterial&&ft.releaseShaderCache(D))}this.renderBufferDirect=function(D,k,Z,X,W,mt){k===null&&(k=Pt);const yt=W.isMesh&&W.matrixWorld.determinant()<0,_t=Td(D,k,Z,X,W);ut.setMaterial(X,yt);let Ct=Z.index,Lt=1;if(X.wireframe===!0){if(Ct=q.getWireframeAttribute(Z),Ct===void 0)return;Lt=2}const Wt=Z.drawRange,$t=Z.attributes.position;let Nt=Wt.start*Lt,ie=(Wt.start+Wt.count)*Lt;mt!==null&&(Nt=Math.max(Nt,mt.start*Lt),ie=Math.min(ie,(mt.start+mt.count)*Lt)),Ct!==null?(Nt=Math.max(Nt,0),ie=Math.min(ie,Ct.count)):$t!=null&&(Nt=Math.max(Nt,0),ie=Math.min(ie,$t.count));const de=ie-Nt;if(de<0||de===1/0)return;ct.setup(W,X,_t,Z,Ct);let he,re=Yt;if(Ct!==null&&(he=j.get(Ct),re=V,re.setIndex(he)),W.isMesh)X.wireframe===!0?(ut.setLineWidth(X.wireframeLinewidth*Ft()),re.setMode(B.LINES)):re.setMode(B.TRIANGLES);else if(W.isLine){let Pe=X.linewidth;Pe===void 0&&(Pe=1),ut.setLineWidth(Pe*Ft()),W.isLineSegments?re.setMode(B.LINES):W.isLineLoop?re.setMode(B.LINE_LOOP):re.setMode(B.LINE_STRIP)}else W.isPoints?re.setMode(B.POINTS):W.isSprite&&re.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Vo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),re.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(It.get("WEBGL_multi_draw"))re.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Pe=W._multiDrawStarts,Dt=W._multiDrawCounts,Ze=W._multiDrawCount,Qt=Ct?j.get(Ct).bytesPerElement:1,dn=P.get(X).currentProgram.getUniforms();for(let bn=0;bn<Ze;bn++)dn.setValue(B,"_gl_DrawID",bn),re.render(Pe[bn]/Qt,Dt[bn])}else if(W.isInstancedMesh)re.renderInstances(Nt,de,W.count);else if(Z.isInstancedBufferGeometry){const Pe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Dt=Math.min(Z.instanceCount,Pe);re.renderInstances(Nt,de,Dt)}else re.render(Nt,de)};function Zl(D,k,Z){D.transparent===!0&&D.side===Mn&&D.forceSinglePass===!1?(D.side=Ve,D.needsUpdate=!0,Rs(D,k,Z),D.side=Un,D.needsUpdate=!0,Rs(D,k,Z),D.side=Mn):Rs(D,k,Z)}this.compile=function(D,k,Z=null){Z===null&&(Z=D),M=it.get(Z),M.init(k),C.push(M),Z.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),D!==Z&&D.traverseVisible(function(W){W.isLight&&W.layers.test(k.layers)&&(M.pushLight(W),W.castShadow&&M.pushShadow(W))}),M.setupLights();const X=new Set;return D.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const mt=W.material;if(mt)if(Array.isArray(mt))for(let yt=0;yt<mt.length;yt++){const _t=mt[yt];Zl(_t,Z,W),X.add(_t)}else Zl(mt,Z,W),X.add(mt)}),M=C.pop(),X},this.compileAsync=function(D,k,Z=null){const X=this.compile(D,k,Z);return new Promise(W=>{function mt(){if(X.forEach(function(yt){P.get(yt).currentProgram.isReady()&&X.delete(yt)}),X.size===0){W(D);return}setTimeout(mt,10)}It.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let oa=null;function bd(D){oa&&oa(D)}function jl(){Ti.stop()}function Kl(){Ti.start()}const Ti=new Vf;Ti.setAnimationLoop(bd),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(D){oa=D,K.setAnimationLoop(D),D===null?Ti.stop():Ti.start()},K.addEventListener("sessionstart",jl),K.addEventListener("sessionend",Kl),this.render=function(D,k){if(k!==void 0&&k.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;const Z=K.enabled===!0&&K.isPresenting===!0,X=v!==null&&(R===null||Z)&&v.begin(y,R);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),D.isScene===!0&&D.onBeforeRender(y,D,k,R),M=it.get(D,C.length),M.init(k),C.push(M),jt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),lt.setFromProjectionMatrix(jt,Pn,k.reversedDepth),pt=this.localClippingEnabled,st=at.init(this.clippingPlanes,pt),a=zt.get(D,c.length),a.init(),c.push(a),K.enabled===!0&&K.isPresenting===!0){const yt=y.xr.getDepthSensingMesh();yt!==null&&aa(yt,k,-1/0,y.sortObjects)}aa(D,k,0,y.sortObjects),a.finish(),y.sortObjects===!0&&a.sort(Mt,xt),vt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,vt&&Rt.addToRenderList(a,D),this.info.render.frame++,st===!0&&at.beginShadows();const W=M.state.shadowsArray;if(At.render(W,D,k),st===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&v.hasRenderPass())===!1){const yt=a.opaque,_t=a.transmissive;if(M.setupLights(),k.isArrayCamera){const Ct=k.cameras;if(_t.length>0)for(let Lt=0,Wt=Ct.length;Lt<Wt;Lt++){const $t=Ct[Lt];Ql(yt,_t,D,$t)}vt&&Rt.render(D);for(let Lt=0,Wt=Ct.length;Lt<Wt;Lt++){const $t=Ct[Lt];Jl(a,D,$t,$t.viewport)}}else _t.length>0&&Ql(yt,_t,D,k),vt&&Rt.render(D),Jl(a,D,k)}R!==null&&w===0&&(z.updateMultisampleRenderTarget(R),z.updateRenderTargetMipmap(R)),X&&v.end(y),D.isScene===!0&&D.onAfterRender(y,D,k),ct.resetDefaultState(),U=-1,N=null,C.pop(),C.length>0?(M=C[C.length-1],st===!0&&at.setGlobalState(y.clippingPlanes,M.state.camera)):M=null,c.pop(),c.length>0?a=c[c.length-1]:a=null};function aa(D,k,Z,X){if(D.visible===!1)return;if(D.layers.test(k.layers)){if(D.isGroup)Z=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(k);else if(D.isLight)M.pushLight(D),D.castShadow&&M.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||lt.intersectsSprite(D)){X&&Tt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(jt);const yt=ot.update(D),_t=D.material;_t.visible&&a.push(D,yt,_t,Z,Tt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||lt.intersectsObject(D))){const yt=ot.update(D),_t=D.material;if(X&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Tt.copy(D.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Tt.copy(yt.boundingSphere.center)),Tt.applyMatrix4(D.matrixWorld).applyMatrix4(jt)),Array.isArray(_t)){const Ct=yt.groups;for(let Lt=0,Wt=Ct.length;Lt<Wt;Lt++){const $t=Ct[Lt],Nt=_t[$t.materialIndex];Nt&&Nt.visible&&a.push(D,yt,Nt,Z,Tt.z,$t)}}else _t.visible&&a.push(D,yt,_t,Z,Tt.z,null)}}const mt=D.children;for(let yt=0,_t=mt.length;yt<_t;yt++)aa(mt[yt],k,Z,X)}function Jl(D,k,Z,X){const{opaque:W,transmissive:mt,transparent:yt}=D;M.setupLightsView(Z),st===!0&&at.setGlobalState(y.clippingPlanes,Z),X&&ut.viewport(O.copy(X)),W.length>0&&ws(W,k,Z),mt.length>0&&ws(mt,k,Z),yt.length>0&&ws(yt,k,Z),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Ql(D,k,Z,X){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[X.id]===void 0){const Nt=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[X.id]=new Ln(1,1,{generateMipmaps:!0,type:Nt?Qn:tn,minFilter:ki,samples:Math.max(4,Bt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}const mt=M.state.transmissionRenderTarget[X.id],yt=X.viewport||O;mt.setSize(yt.z*y.transmissionResolutionScale,yt.w*y.transmissionResolutionScale);const _t=y.getRenderTarget(),Ct=y.getActiveCubeFace(),Lt=y.getActiveMipmapLevel();y.setRenderTarget(mt),y.getClearColor(H),nt=y.getClearAlpha(),nt<1&&y.setClearColor(16777215,.5),y.clear(),vt&&Rt.render(Z);const Wt=y.toneMapping;y.toneMapping=In;const $t=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),M.setupLightsView(X),st===!0&&at.setGlobalState(y.clippingPlanes,X),ws(D,Z,X),z.updateMultisampleRenderTarget(mt),z.updateRenderTargetMipmap(mt),It.has("WEBGL_multisampled_render_to_texture")===!1){let Nt=!1;for(let ie=0,de=k.length;ie<de;ie++){const he=k[ie],{object:re,geometry:Pe,material:Dt,group:Ze}=he;if(Dt.side===Mn&&re.layers.test(X.layers)){const Qt=Dt.side;Dt.side=Ve,Dt.needsUpdate=!0,tu(re,Z,X,Pe,Dt,Ze),Dt.side=Qt,Dt.needsUpdate=!0,Nt=!0}}Nt===!0&&(z.updateMultisampleRenderTarget(mt),z.updateRenderTargetMipmap(mt))}y.setRenderTarget(_t,Ct,Lt),y.setClearColor(H,nt),$t!==void 0&&(X.viewport=$t),y.toneMapping=Wt}function ws(D,k,Z){const X=k.isScene===!0?k.overrideMaterial:null;for(let W=0,mt=D.length;W<mt;W++){const yt=D[W],{object:_t,geometry:Ct,group:Lt}=yt;let Wt=yt.material;Wt.allowOverride===!0&&X!==null&&(Wt=X),_t.layers.test(Z.layers)&&tu(_t,k,Z,Ct,Wt,Lt)}}function tu(D,k,Z,X,W,mt){D.onBeforeRender(y,k,Z,X,W,mt),D.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),W.onBeforeRender(y,k,Z,X,D,mt),W.transparent===!0&&W.side===Mn&&W.forceSinglePass===!1?(W.side=Ve,W.needsUpdate=!0,y.renderBufferDirect(Z,k,X,W,D,mt),W.side=Un,W.needsUpdate=!0,y.renderBufferDirect(Z,k,X,W,D,mt),W.side=Mn):y.renderBufferDirect(Z,k,X,W,D,mt),D.onAfterRender(y,k,Z,X,W,mt)}function Rs(D,k,Z){k.isScene!==!0&&(k=Pt);const X=P.get(D),W=M.state.lights,mt=M.state.shadowsArray,yt=W.state.version,_t=ft.getParameters(D,W.state,mt,k,Z),Ct=ft.getProgramCacheKey(_t);let Lt=X.programs;X.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?k.environment:null,X.fog=k.fog;const Wt=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;X.envMap=Y.get(D.envMap||X.environment,Wt),X.envMapRotation=X.environment!==null&&D.envMap===null?k.environmentRotation:D.envMapRotation,Lt===void 0&&(D.addEventListener("dispose",ee),Lt=new Map,X.programs=Lt);let $t=Lt.get(Ct);if($t!==void 0){if(X.currentProgram===$t&&X.lightsStateVersion===yt)return nu(D,_t),$t}else _t.uniforms=ft.getUniforms(D),D.onBeforeCompile(_t,y),$t=ft.acquireProgram(_t,Ct),Lt.set(Ct,$t),X.uniforms=_t.uniforms;const Nt=X.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Nt.clippingPlanes=at.uniform),nu(D,_t),X.needsLights=wd(D),X.lightsStateVersion=yt,X.needsLights&&(Nt.ambientLightColor.value=W.state.ambient,Nt.lightProbe.value=W.state.probe,Nt.directionalLights.value=W.state.directional,Nt.directionalLightShadows.value=W.state.directionalShadow,Nt.spotLights.value=W.state.spot,Nt.spotLightShadows.value=W.state.spotShadow,Nt.rectAreaLights.value=W.state.rectArea,Nt.ltc_1.value=W.state.rectAreaLTC1,Nt.ltc_2.value=W.state.rectAreaLTC2,Nt.pointLights.value=W.state.point,Nt.pointLightShadows.value=W.state.pointShadow,Nt.hemisphereLights.value=W.state.hemi,Nt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Nt.spotLightMatrix.value=W.state.spotLightMatrix,Nt.spotLightMap.value=W.state.spotLightMap,Nt.pointShadowMatrix.value=W.state.pointShadowMatrix),X.currentProgram=$t,X.uniformsList=null,$t}function eu(D){if(D.uniformsList===null){const k=D.currentProgram.getUniforms();D.uniformsList=Po.seqWithValue(k.seq,D.uniforms)}return D.uniformsList}function nu(D,k){const Z=P.get(D);Z.outputColorSpace=k.outputColorSpace,Z.batching=k.batching,Z.batchingColor=k.batchingColor,Z.instancing=k.instancing,Z.instancingColor=k.instancingColor,Z.instancingMorph=k.instancingMorph,Z.skinning=k.skinning,Z.morphTargets=k.morphTargets,Z.morphNormals=k.morphNormals,Z.morphColors=k.morphColors,Z.morphTargetsCount=k.morphTargetsCount,Z.numClippingPlanes=k.numClippingPlanes,Z.numIntersection=k.numClipIntersection,Z.vertexAlphas=k.vertexAlphas,Z.vertexTangents=k.vertexTangents,Z.toneMapping=k.toneMapping}function Td(D,k,Z,X,W){k.isScene!==!0&&(k=Pt),z.resetTextureUnits();const mt=k.fog,yt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?k.environment:null,_t=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Br,Ct=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Lt=Y.get(X.envMap||yt,Ct),Wt=X.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,$t=!!Z.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Nt=!!Z.morphAttributes.position,ie=!!Z.morphAttributes.normal,de=!!Z.morphAttributes.color;let he=In;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(he=y.toneMapping);const re=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Pe=re!==void 0?re.length:0,Dt=P.get(X),Ze=M.state.lights;if(st===!0&&(pt===!0||D!==N)){const Ee=D===N&&X.id===U;at.setState(X,D,Ee)}let Qt=!1;X.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Ze.state.version||Dt.outputColorSpace!==_t||W.isBatchedMesh&&Dt.batching===!1||!W.isBatchedMesh&&Dt.batching===!0||W.isBatchedMesh&&Dt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Dt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Dt.instancing===!1||!W.isInstancedMesh&&Dt.instancing===!0||W.isSkinnedMesh&&Dt.skinning===!1||!W.isSkinnedMesh&&Dt.skinning===!0||W.isInstancedMesh&&Dt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Dt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Dt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Dt.instancingMorph===!1&&W.morphTexture!==null||Dt.envMap!==Lt||X.fog===!0&&Dt.fog!==mt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==at.numPlanes||Dt.numIntersection!==at.numIntersection)||Dt.vertexAlphas!==Wt||Dt.vertexTangents!==$t||Dt.morphTargets!==Nt||Dt.morphNormals!==ie||Dt.morphColors!==de||Dt.toneMapping!==he||Dt.morphTargetsCount!==Pe)&&(Qt=!0):(Qt=!0,Dt.__version=X.version);let dn=Dt.currentProgram;Qt===!0&&(dn=Rs(X,k,W));let bn=!1,Ai=!1,Zi=!1;const oe=dn.getUniforms(),Re=Dt.uniforms;if(ut.useProgram(dn.program)&&(bn=!0,Ai=!0,Zi=!0),X.id!==U&&(U=X.id,Ai=!0),bn||N!==D){ut.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),oe.setValue(B,"projectionMatrix",D.projectionMatrix),oe.setValue(B,"viewMatrix",D.matrixWorldInverse);const ri=oe.map.cameraPosition;ri!==void 0&&ri.setValue(B,bt.setFromMatrixPosition(D.matrixWorld)),Bt.logarithmicDepthBuffer&&oe.setValue(B,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&oe.setValue(B,"isOrthographic",D.isOrthographicCamera===!0),N!==D&&(N=D,Ai=!0,Zi=!0)}if(Dt.needsLights&&(Ze.state.directionalShadowMap.length>0&&oe.setValue(B,"directionalShadowMap",Ze.state.directionalShadowMap,z),Ze.state.spotShadowMap.length>0&&oe.setValue(B,"spotShadowMap",Ze.state.spotShadowMap,z),Ze.state.pointShadowMap.length>0&&oe.setValue(B,"pointShadowMap",Ze.state.pointShadowMap,z)),W.isSkinnedMesh){oe.setOptional(B,W,"bindMatrix"),oe.setOptional(B,W,"bindMatrixInverse");const Ee=W.skeleton;Ee&&(Ee.boneTexture===null&&Ee.computeBoneTexture(),oe.setValue(B,"boneTexture",Ee.boneTexture,z))}W.isBatchedMesh&&(oe.setOptional(B,W,"batchingTexture"),oe.setValue(B,"batchingTexture",W._matricesTexture,z),oe.setOptional(B,W,"batchingIdTexture"),oe.setValue(B,"batchingIdTexture",W._indirectTexture,z),oe.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&oe.setValue(B,"batchingColorTexture",W._colorsTexture,z));const ii=Z.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&St.update(W,Z,dn),(Ai||Dt.receiveShadow!==W.receiveShadow)&&(Dt.receiveShadow=W.receiveShadow,oe.setValue(B,"receiveShadow",W.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&k.environment!==null&&(Re.envMapIntensity.value=k.environmentIntensity),Re.dfgLUT!==void 0&&(Re.dfgLUT.value=Yx()),Ai&&(oe.setValue(B,"toneMappingExposure",y.toneMappingExposure),Dt.needsLights&&Ad(Re,Zi),mt&&X.fog===!0&&Ut.refreshFogUniforms(Re,mt),Ut.refreshMaterialUniforms(Re,X,ht,Q,M.state.transmissionRenderTarget[D.id]),Po.upload(B,eu(Dt),Re,z)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Po.upload(B,eu(Dt),Re,z),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&oe.setValue(B,"center",W.center),oe.setValue(B,"modelViewMatrix",W.modelViewMatrix),oe.setValue(B,"normalMatrix",W.normalMatrix),oe.setValue(B,"modelMatrix",W.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Ee=X.uniformsGroups;for(let ri=0,ji=Ee.length;ri<ji;ri++){const iu=Ee[ri];Et.update(iu,dn),Et.bind(iu,dn)}}return dn}function Ad(D,k){D.ambientLightColor.needsUpdate=k,D.lightProbe.needsUpdate=k,D.directionalLights.needsUpdate=k,D.directionalLightShadows.needsUpdate=k,D.pointLights.needsUpdate=k,D.pointLightShadows.needsUpdate=k,D.spotLights.needsUpdate=k,D.spotLightShadows.needsUpdate=k,D.rectAreaLights.needsUpdate=k,D.hemisphereLights.needsUpdate=k}function wd(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(D,k,Z){const X=P.get(D);X.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),P.get(D.texture).__webglTexture=k,P.get(D.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Z,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,k){const Z=P.get(D);Z.__webglFramebuffer=k,Z.__useDefaultFramebuffer=k===void 0};const Rd=B.createFramebuffer();this.setRenderTarget=function(D,k=0,Z=0){R=D,b=k,w=Z;let X=null,W=!1,mt=!1;if(D){const _t=P.get(D);if(_t.__useDefaultFramebuffer!==void 0){ut.bindFramebuffer(B.FRAMEBUFFER,_t.__webglFramebuffer),O.copy(D.viewport),F.copy(D.scissor),G=D.scissorTest,ut.viewport(O),ut.scissor(F),ut.setScissorTest(G),U=-1;return}else if(_t.__webglFramebuffer===void 0)z.setupRenderTarget(D);else if(_t.__hasExternalTextures)z.rebindTextures(D,P.get(D.texture).__webglTexture,P.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Wt=D.depthTexture;if(_t.__boundDepthTexture!==Wt){if(Wt!==null&&P.has(Wt)&&(D.width!==Wt.image.width||D.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(D)}}const Ct=D.texture;(Ct.isData3DTexture||Ct.isDataArrayTexture||Ct.isCompressedArrayTexture)&&(mt=!0);const Lt=P.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Lt[k])?X=Lt[k][Z]:X=Lt[k],W=!0):D.samples>0&&z.useMultisampledRTT(D)===!1?X=P.get(D).__webglMultisampledFramebuffer:Array.isArray(Lt)?X=Lt[Z]:X=Lt,O.copy(D.viewport),F.copy(D.scissor),G=D.scissorTest}else O.copy($).multiplyScalar(ht).floor(),F.copy(J).multiplyScalar(ht).floor(),G=tt;if(Z!==0&&(X=Rd),ut.bindFramebuffer(B.FRAMEBUFFER,X)&&ut.drawBuffers(D,X),ut.viewport(O),ut.scissor(F),ut.setScissorTest(G),W){const _t=P.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+k,_t.__webglTexture,Z)}else if(mt){const _t=k;for(let Ct=0;Ct<D.textures.length;Ct++){const Lt=P.get(D.textures[Ct]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ct,Lt.__webglTexture,Z,_t)}}else if(D!==null&&Z!==0){const _t=P.get(D.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,_t.__webglTexture,Z)}U=-1},this.readRenderTargetPixels=function(D,k,Z,X,W,mt,yt,_t=0){if(!(D&&D.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=P.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct){ut.bindFramebuffer(B.FRAMEBUFFER,Ct);try{const Lt=D.textures[_t],Wt=Lt.format,$t=Lt.type;if(D.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_t),!Bt.textureFormatReadable(Wt)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable($t)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=D.width-X&&Z>=0&&Z<=D.height-W&&B.readPixels(k,Z,X,W,dt.convert(Wt),dt.convert($t),mt)}finally{const Lt=R!==null?P.get(R).__webglFramebuffer:null;ut.bindFramebuffer(B.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(D,k,Z,X,W,mt,yt,_t=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ct=P.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&yt!==void 0&&(Ct=Ct[yt]),Ct)if(k>=0&&k<=D.width-X&&Z>=0&&Z<=D.height-W){ut.bindFramebuffer(B.FRAMEBUFFER,Ct);const Lt=D.textures[_t],Wt=Lt.format,$t=Lt.type;if(D.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+_t),!Bt.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Nt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Nt),B.bufferData(B.PIXEL_PACK_BUFFER,mt.byteLength,B.STREAM_READ),B.readPixels(k,Z,X,W,dt.convert(Wt),dt.convert($t),0);const ie=R!==null?P.get(R).__webglFramebuffer:null;ut.bindFramebuffer(B.FRAMEBUFFER,ie);const de=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await up(B,de,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Nt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,mt),B.deleteBuffer(Nt),B.deleteSync(de),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,k=null,Z=0){const X=Math.pow(2,-Z),W=Math.floor(D.image.width*X),mt=Math.floor(D.image.height*X),yt=k!==null?k.x:0,_t=k!==null?k.y:0;z.setTexture2D(D,0),B.copyTexSubImage2D(B.TEXTURE_2D,Z,0,0,yt,_t,W,mt),ut.unbindTexture()};const Cd=B.createFramebuffer(),Pd=B.createFramebuffer();this.copyTextureToTexture=function(D,k,Z=null,X=null,W=0,mt=0){let yt,_t,Ct,Lt,Wt,$t,Nt,ie,de;const he=D.isCompressedTexture?D.mipmaps[mt]:D.image;if(Z!==null)yt=Z.max.x-Z.min.x,_t=Z.max.y-Z.min.y,Ct=Z.isBox3?Z.max.z-Z.min.z:1,Lt=Z.min.x,Wt=Z.min.y,$t=Z.isBox3?Z.min.z:0;else{const Re=Math.pow(2,-W);yt=Math.floor(he.width*Re),_t=Math.floor(he.height*Re),D.isDataArrayTexture?Ct=he.depth:D.isData3DTexture?Ct=Math.floor(he.depth*Re):Ct=1,Lt=0,Wt=0,$t=0}X!==null?(Nt=X.x,ie=X.y,de=X.z):(Nt=0,ie=0,de=0);const re=dt.convert(k.format),Pe=dt.convert(k.type);let Dt;k.isData3DTexture?(z.setTexture3D(k,0),Dt=B.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(z.setTexture2DArray(k,0),Dt=B.TEXTURE_2D_ARRAY):(z.setTexture2D(k,0),Dt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,k.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,k.unpackAlignment);const Ze=B.getParameter(B.UNPACK_ROW_LENGTH),Qt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),dn=B.getParameter(B.UNPACK_SKIP_PIXELS),bn=B.getParameter(B.UNPACK_SKIP_ROWS),Ai=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,he.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,he.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Lt),B.pixelStorei(B.UNPACK_SKIP_ROWS,Wt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$t);const Zi=D.isDataArrayTexture||D.isData3DTexture,oe=k.isDataArrayTexture||k.isData3DTexture;if(D.isDepthTexture){const Re=P.get(D),ii=P.get(k),Ee=P.get(Re.__renderTarget),ri=P.get(ii.__renderTarget);ut.bindFramebuffer(B.READ_FRAMEBUFFER,Ee.__webglFramebuffer),ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let ji=0;ji<Ct;ji++)Zi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,P.get(D).__webglTexture,W,$t+ji),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,P.get(k).__webglTexture,mt,de+ji)),B.blitFramebuffer(Lt,Wt,yt,_t,Nt,ie,yt,_t,B.DEPTH_BUFFER_BIT,B.NEAREST);ut.bindFramebuffer(B.READ_FRAMEBUFFER,null),ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||D.isRenderTargetTexture||P.has(D)){const Re=P.get(D),ii=P.get(k);ut.bindFramebuffer(B.READ_FRAMEBUFFER,Cd),ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,Pd);for(let Ee=0;Ee<Ct;Ee++)Zi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Re.__webglTexture,W,$t+Ee):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Re.__webglTexture,W),oe?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ii.__webglTexture,mt,de+Ee):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ii.__webglTexture,mt),W!==0?B.blitFramebuffer(Lt,Wt,yt,_t,Nt,ie,yt,_t,B.COLOR_BUFFER_BIT,B.NEAREST):oe?B.copyTexSubImage3D(Dt,mt,Nt,ie,de+Ee,Lt,Wt,yt,_t):B.copyTexSubImage2D(Dt,mt,Nt,ie,Lt,Wt,yt,_t);ut.bindFramebuffer(B.READ_FRAMEBUFFER,null),ut.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else oe?D.isDataTexture||D.isData3DTexture?B.texSubImage3D(Dt,mt,Nt,ie,de,yt,_t,Ct,re,Pe,he.data):k.isCompressedArrayTexture?B.compressedTexSubImage3D(Dt,mt,Nt,ie,de,yt,_t,Ct,re,he.data):B.texSubImage3D(Dt,mt,Nt,ie,de,yt,_t,Ct,re,Pe,he):D.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,mt,Nt,ie,yt,_t,re,Pe,he.data):D.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,mt,Nt,ie,he.width,he.height,re,he.data):B.texSubImage2D(B.TEXTURE_2D,mt,Nt,ie,yt,_t,re,Pe,he);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ze),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Qt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,dn),B.pixelStorei(B.UNPACK_SKIP_ROWS,bn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ai),mt===0&&k.generateMipmaps&&B.generateMipmap(Dt),ut.unbindTexture()},this.initRenderTarget=function(D){P.get(D).__webglFramebuffer===void 0&&z.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?z.setTextureCube(D,0):D.isData3DTexture?z.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?z.setTexture2DArray(D,0):z.setTexture2D(D,0),ut.unbindTexture()},this.resetState=function(){b=0,w=0,R=null,ut.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}}const sh={type:"change"},Ol={type:"start"},qf={type:"end"},Qs=new Gr,oh=new Qe,Zx=Math.cos(70*dp.DEG2RAD),xe=new L,We=2*Math.PI,se={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ga=1e-6;class jx extends tg{constructor(t,e=null){super(t,e),this.state=se.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Dr.ROTATE,MIDDLE:Dr.DOLLY,RIGHT:Dr.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new yi,this._lastTargetPosition=new L,this._quat=new yi().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Lu,this._sphericalDelta=new Lu,this._scale=1,this._panOffset=new L,this._rotateStart=new Ot,this._rotateEnd=new Ot,this._rotateDelta=new Ot,this._panStart=new Ot,this._panEnd=new Ot,this._panDelta=new Ot,this._dollyStart=new Ot,this._dollyEnd=new Ot,this._dollyDelta=new Ot,this._dollyDirection=new L,this._mouse=new Ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Jx.bind(this),this._onPointerDown=Kx.bind(this),this._onPointerUp=Qx.bind(this),this._onContextMenu=ov.bind(this),this._onMouseWheel=nv.bind(this),this._onKeyDown=iv.bind(this),this._onTouchStart=rv.bind(this),this._onTouchMove=sv.bind(this),this._onMouseDown=tv.bind(this),this._onMouseMove=ev.bind(this),this._interceptControlDown=av.bind(this),this._interceptControlUp=cv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sh),this.update(),this.state=se.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===se.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=We:n>Math.PI&&(n-=We),r<-Math.PI?r+=We:r>Math.PI&&(r-=We),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const l=xe.length();o=this._clampDistance(l*this._scale);const u=l-o;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const h=new L(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(l),this.object.updateMatrixWorld(),o=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Qs.origin.copy(this.object.position),Qs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Qs.direction))<Zx?this.object.lookAt(this.target):(oh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Qs.intersectPlane(oh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ga||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ga||this._lastTargetPosition.distanceToSquared(this.target)>Ga?(this.dispatchEvent(sh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?We/60*this.autoRotateSpeed*t:We/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;xe.copy(r).sub(this.target);let s=xe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,l=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/l)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-We*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(We*this._rotateDelta.x/e.clientHeight),this._rotateUp(We*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,l=(t.pageY+e.y)*.5;this._updateZoomParameters(o,l)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ot,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Kx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function Jx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Qx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qf),this.state=se.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function tv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Dr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=se.DOLLY;break;case Dr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}break;case Dr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=se.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=se.PAN}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Ol)}function ev(i){switch(this.state){case se.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case se.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case se.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function nv(i){this.enabled===!1||this.enableZoom===!1||this.state!==se.NONE||(i.preventDefault(),this.dispatchEvent(Ol),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(qf))}function iv(i){this.enabled!==!1&&this._handleKeyDown(i)}function rv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=se.TOUCH_ROTATE;break;case Tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=se.TOUCH_PAN;break;default:this.state=se.NONE}break;case 2:switch(this.touches.TWO){case Tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=se.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=se.TOUCH_DOLLY_ROTATE;break;default:this.state=se.NONE}break;default:this.state=se.NONE}this.state!==se.NONE&&this.dispatchEvent(Ol)}function sv(i){switch(this._trackPointer(i),this.state){case se.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case se.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case se.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case se.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=se.NONE}}function ov(i){this.enabled!==!1&&i.preventDefault()}function av(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Jr=new L;function an(i,t,e,n,r,s){const o=2*Math.PI*r/4,l=Math.max(s-2*r,0),u=Math.PI/4;Jr.copy(t),Jr[n]=0,Jr.normalize();const h=.5*o/(o+l),d=1-Jr.angleTo(i)/u;return Math.sign(Jr[e])===1?d*h:l/(o+l)+h+h*(1-d)}class ko extends Hr{constructor(t=1,e=1,n=1,r=2,s=.1){const o=r*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:r,radius:s},o===1)return;const l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;const u=new L,h=new L,d=new L(t,e,n).divideScalar(2).subScalar(s),g=this.attributes.position.array,p=this.attributes.normal.array,m=this.attributes.uv.array,S=g.length/6,T=new L,x=.5/o;for(let _=0,E=0;_<g.length;_+=3,E+=2)switch(u.fromArray(g,_),h.copy(u),h.x-=Math.sign(h.x)*x,h.y-=Math.sign(h.y)*x,h.z-=Math.sign(h.z)*x,h.normalize(),g[_+0]=d.x*Math.sign(u.x)+h.x*s,g[_+1]=d.y*Math.sign(u.y)+h.y*s,g[_+2]=d.z*Math.sign(u.z)+h.z*s,p[_+0]=h.x,p[_+1]=h.y,p[_+2]=h.z,Math.floor(_/S)){case 0:T.set(1,0,0),m[E+0]=an(T,h,"z","y",s,n),m[E+1]=1-an(T,h,"y","z",s,e);break;case 1:T.set(-1,0,0),m[E+0]=1-an(T,h,"z","y",s,n),m[E+1]=1-an(T,h,"y","z",s,e);break;case 2:T.set(0,1,0),m[E+0]=1-an(T,h,"x","z",s,t),m[E+1]=an(T,h,"z","x",s,n);break;case 3:T.set(0,-1,0),m[E+0]=1-an(T,h,"x","z",s,t),m[E+1]=1-an(T,h,"z","x",s,n);break;case 4:T.set(0,0,1),m[E+0]=1-an(T,h,"x","y",s,t),m[E+1]=1-an(T,h,"y","x",s,e);break;case 5:T.set(0,0,-1),m[E+0]=an(T,h,"x","y",s,t),m[E+1]=1-an(T,h,"y","x",s,e);break}}static fromJSON(t){return new ko(t.width,t.height,t.depth,t.segments,t.radius)}}const Yf=0,lv=1,uv=2,ah=2,Ha=1.25,ch=1,Ue=32,ve=Ue/4,$f=65535,Do=Math.pow(2,-24),Bl=Symbol("SKIP_GENERATION"),Zf={strategy:Yf,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Bl]:!1};function fe(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function lh(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function uh(i,t){t.set(i)}function hh(i,t,e){let n,r;for(let s=0;s<3;s++){const o=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[o],r=t[o],e[o]=n>r?n:r}}function to(i,t,e){for(let n=0;n<3;n++){const r=t[i+2*n],s=t[i+2*n+1],o=r-s,l=r+s;o<e[n]&&(e[n]=o),l>e[n+3]&&(e[n+3]=l)}}function Qr(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function Me(i,t){return t[i+15]===$f}function Ne(i,t){return t[i+6]}function ze(i,t){return t[i+14]}function Te(i){return i+ve}function Ae(i,t){const e=t[i+6];return i+e*ve}function zl(i,t){return t[i+7]}function Wa(i,t,e,n,r){let s=1/0,o=1/0,l=1/0,u=-1/0,h=-1/0,d=-1/0,g=1/0,p=1/0,m=1/0,S=-1/0,T=-1/0,x=-1/0;const _=i.offset||0;for(let E=(t-_)*6,f=(t+e-_)*6;E<f;E+=6){const a=i[E+0],M=i[E+1],c=a-M,C=a+M;c<s&&(s=c),C>u&&(u=C),a<g&&(g=a),a>S&&(S=a);const v=i[E+2],y=i[E+3],A=v-y,b=v+y;A<o&&(o=A),b>h&&(h=b),v<p&&(p=v),v>T&&(T=v);const w=i[E+4],R=i[E+5],U=w-R,N=w+R;U<l&&(l=U),N>d&&(d=N),w<m&&(m=w),w>x&&(x=w)}n[0]=s,n[1]=o,n[2]=l,n[3]=u,n[4]=h,n[5]=d,r[0]=g,r[1]=p,r[2]=m,r[3]=S,r[4]=T,r[5]=x}const $n=32,hv=(i,t)=>i.candidate-t.candidate,hi=new Array($n).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),eo=new Float32Array(6);function fv(i,t,e,n,r,s){let o=-1,l=0;if(s===Yf)o=lh(t),o!==-1&&(l=(t[o]+t[o+3])/2);else if(s===lv)o=lh(i),o!==-1&&(l=dv(e,n,r,o));else if(s===uv){const u=Qr(i);let h=Ha*r;const d=e.offset||0,g=(n-d)*6,p=(n+r-d)*6;for(let m=0;m<3;m++){const S=t[m],_=(t[m+3]-S)/$n;if(r<$n/4){const E=[...hi];E.length=r;let f=0;for(let M=g;M<p;M+=6,f++){const c=E[f];c.candidate=e[M+2*m],c.count=0;const{bounds:C,leftCacheBounds:v,rightCacheBounds:y}=c;for(let A=0;A<3;A++)y[A]=1/0,y[A+3]=-1/0,v[A]=1/0,v[A+3]=-1/0,C[A]=1/0,C[A+3]=-1/0;to(M,e,C)}E.sort(hv);let a=r;for(let M=0;M<a;M++){const c=E[M];for(;M+1<a&&E[M+1].candidate===c.candidate;)E.splice(M+1,1),a--}for(let M=g;M<p;M+=6){const c=e[M+2*m];for(let C=0;C<a;C++){const v=E[C];c>=v.candidate?to(M,e,v.rightCacheBounds):(to(M,e,v.leftCacheBounds),v.count++)}}for(let M=0;M<a;M++){const c=E[M],C=c.count,v=r-c.count,y=c.leftCacheBounds,A=c.rightCacheBounds;let b=0;C!==0&&(b=Qr(y)/u);let w=0;v!==0&&(w=Qr(A)/u);const R=ch+Ha*(b*C+w*v);R<h&&(o=m,h=R,l=c.candidate)}}else{for(let a=0;a<$n;a++){const M=hi[a];M.count=0,M.candidate=S+_+a*_;const c=M.bounds;for(let C=0;C<3;C++)c[C]=1/0,c[C+3]=-1/0}for(let a=g;a<p;a+=6){let C=~~((e[a+2*m]-S)/_);C>=$n&&(C=$n-1);const v=hi[C];v.count++,to(a,e,v.bounds)}const E=hi[$n-1];uh(E.bounds,E.rightCacheBounds);for(let a=$n-2;a>=0;a--){const M=hi[a],c=hi[a+1];hh(M.bounds,c.rightCacheBounds,M.rightCacheBounds)}let f=0;for(let a=0;a<$n-1;a++){const M=hi[a],c=M.count,C=M.bounds,y=hi[a+1].rightCacheBounds;c!==0&&(f===0?uh(C,eo):hh(C,eo,eo)),f+=c;let A=0,b=0;f!==0&&(A=Qr(eo)/u);const w=r-f;w!==0&&(b=Qr(y)/u);const R=ch+Ha*(A*f+b*w);R<h&&(o=m,h=R,l=M.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:l}}function dv(i,t,e,n){let r=0;const s=i.offset;for(let o=t,l=t+e;o<l;o++)r+=i[(o-s)*6+n*2];return r/e}class Xa{constructor(){this.boundingData=new Float32Array(6)}}function pv(i,t,e,n,r,s){let o=n,l=n+r-1;const u=s.pos,h=s.axis*2,d=e.offset||0;for(;;){for(;o<=l&&e[(o-d)*6+h]<u;)o++;for(;o<=l&&e[(l-d)*6+h]>=u;)l--;if(o<l){for(let g=0;g<t;g++){let p=i[o*t+g];i[o*t+g]=i[l*t+g],i[l*t+g]=p}for(let g=0;g<6;g++){const p=o-d,m=l-d,S=e[p*6+g];e[p*6+g]=e[m*6+g],e[m*6+g]=S}o++,l--}else return o}}let jf,Io,cl,Kf;const gv=Math.pow(2,32);function ll(i){return"count"in i?1:1+ll(i.left)+ll(i.right)}function mv(i,t,e){return jf=new Float32Array(e),Io=new Uint32Array(e),cl=new Uint16Array(e),Kf=new Uint8Array(e),ul(i,t)}function ul(i,t){const e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)jf[e+o]=s[o];if(r)return t.buffer?(Kf.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(Io[e+6]=t.offset,cl[n+14]=t.count,cl[n+15]=$f,i+Ue);{const{left:o,right:l,splitAxis:u}=t,h=i+Ue;let d=ul(h,o);const g=i/Ue,m=d/Ue-g;if(m>gv)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return Io[e+6]=m,Io[e+7]=u,ul(d,l)}}function _v(i,t,e,n,r,s){const{maxDepth:o,verbose:l,maxLeafSize:u,strategy:h,onProgress:d}=r,g=i.primitiveBuffer,p=i.primitiveBufferStride,m=new Float32Array(6);let S=!1;const T=new Xa;return Wa(t,e,n,T.boundingData,m),_(T,e,n,m),T;function x(E){d&&d((E-s.offset)/s.count)}function _(E,f,a,M=null,c=0){if(!S&&c>=o&&(S=!0,l&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)),a<=u||c>=o)return x(f+a),E.offset=f,E.count=a,E;const C=fv(E.boundingData,M,t,f,a,h);if(C.axis===-1)return x(f+a),E.offset=f,E.count=a,E;const v=pv(g,p,t,f,a,C);if(v===f||v===f+a)x(f+a),E.offset=f,E.count=a;else{E.splitAxis=C.axis;const y=new Xa,A=f,b=v-f;E.left=y,Wa(t,A,b,y.boundingData,m),_(y,A,b,m,c+1);const w=new Xa,R=v,U=a-b;E.right=w,Wa(t,R,U,w.boundingData,m),_(w,R,U,m,c+1)}return E}}function xv(i,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),r=n[0],s=n[n.length-1],o={offset:r.offset,count:s.offset+s.count-r.offset},l=new Float32Array(6*o.count);l.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,l),i._roots=n.map(u=>{const h=_v(i,l,u.offset,u.count,t,o),d=ll(h),g=new e(Ue*d);return mv(0,h,g),g})}class Vl{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class vv{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const ue=new vv;let Si,Ar;const dr=[],no=new Vl(()=>new ke);function Mv(i,t,e,n,r,s){Si=no.getPrimitive(),Ar=no.getPrimitive(),dr.push(Si,Ar),ue.setBuffer(i._roots[t]);const o=hl(0,i.geometry,e,n,r,s);ue.clearBuffer(),no.releasePrimitive(Si),no.releasePrimitive(Ar),dr.pop(),dr.pop();const l=dr.length;return l>0&&(Ar=dr[l-1],Si=dr[l-2]),o}function hl(i,t,e,n,r=null,s=0,o=0){const{float32Array:l,uint16Array:u,uint32Array:h}=ue;let d=i*2;if(Me(d,u)){const S=Ne(i,h),T=ze(d,u);return fe(i,l,Si),n(S,T,!1,o,s+i/ve,Si)}else{let w=function(U){const{uint16Array:N,uint32Array:O}=ue;let F=U*2;for(;!Me(F,N);)U=Te(U),F=U*2;return Ne(U,O)},R=function(U){const{uint16Array:N,uint32Array:O}=ue;let F=U*2;for(;!Me(F,N);)U=Ae(U,O),F=U*2;return Ne(U,O)+ze(F,N)};var p=w,m=R;const S=Te(i),T=Ae(i,h);let x=S,_=T,E,f,a,M;if(r&&(a=Si,M=Ar,fe(x,l,a),fe(_,l,M),E=r(a),f=r(M),f<E)){x=T,_=S;const U=E;E=f,f=U,a=M}a||(a=Si,fe(x,l,a));const c=Me(x*2,u),C=e(a,c,E,o+1,s+x/ve);let v;if(C===ah){const U=w(x),O=R(x)-U;v=n(U,O,!0,o+1,s+x/ve,a)}else v=C&&hl(x,t,e,n,r,s,o+1);if(v)return!0;M=Ar,fe(_,l,M);const y=Me(_*2,u),A=e(M,y,f,o+1,s+_/ve);let b;if(A===ah){const U=w(_),O=R(_)-U;b=n(U,O,!0,o+1,s+_/ve,M)}else b=A&&hl(_,t,e,n,r,s,o+1);return!!b}}const us=new ue.constructor,Go=new ue.constructor,di=new Vl(()=>new ke),pr=new ke,gr=new ke,qa=new ke,Ya=new ke;let $a=!1;function Sv(i,t,e,n){if($a)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");$a=!0;const r=i._roots,s=t._roots;let o,l=0,u=0;const h=new Zt().copy(e).invert();for(let d=0,g=r.length;d<g;d++){us.setBuffer(r[d]),u=0;const p=di.getPrimitive();fe(0,us.float32Array,p),p.applyMatrix4(h);for(let m=0,S=s.length;m<S&&(Go.setBuffer(s[m]),o=vn(0,0,e,h,n,l,u,0,0,p),Go.clearBuffer(),u+=s[m].byteLength/Ue,!o);m++);if(di.releasePrimitive(p),us.clearBuffer(),l+=r[d].byteLength/Ue,o)break}return $a=!1,o}function vn(i,t,e,n,r,s=0,o=0,l=0,u=0,h=null,d=!1){let g,p;d?(g=Go,p=us):(g=us,p=Go);const m=g.float32Array,S=g.uint32Array,T=g.uint16Array,x=p.float32Array,_=p.uint32Array,E=p.uint16Array,f=i*2,a=t*2,M=Me(f,T),c=Me(a,E);let C=!1;if(c&&M)d?C=r(Ne(t,_),ze(t*2,E),Ne(i,S),ze(i*2,T),u,o+t/ve,l,s+i/ve):C=r(Ne(i,S),ze(i*2,T),Ne(t,_),ze(t*2,E),l,s+i/ve,u,o+t/ve);else if(c){const v=di.getPrimitive();fe(t,x,v),v.applyMatrix4(e);const y=Te(i),A=Ae(i,S);fe(y,m,pr),fe(A,m,gr);const b=v.intersectsBox(pr),w=v.intersectsBox(gr);C=b&&vn(t,y,n,e,r,o,s,u,l+1,v,!d)||w&&vn(t,A,n,e,r,o,s,u,l+1,v,!d),di.releasePrimitive(v)}else{const v=Te(t),y=Ae(t,_);fe(v,x,qa),fe(y,x,Ya);const A=h.intersectsBox(qa),b=h.intersectsBox(Ya);if(A&&b)C=vn(i,v,e,n,r,s,o,l,u+1,h,d)||vn(i,y,e,n,r,s,o,l,u+1,h,d);else if(A)if(M)C=vn(i,v,e,n,r,s,o,l,u+1,h,d);else{const w=di.getPrimitive();w.copy(qa).applyMatrix4(e);const R=Te(i),U=Ae(i,S);fe(R,m,pr),fe(U,m,gr);const N=w.intersectsBox(pr),O=w.intersectsBox(gr);C=N&&vn(v,R,n,e,r,o,s,u,l+1,w,!d)||O&&vn(v,U,n,e,r,o,s,u,l+1,w,!d),di.releasePrimitive(w)}else if(b)if(M)C=vn(i,y,e,n,r,s,o,l,u+1,h,d);else{const w=di.getPrimitive();w.copy(Ya).applyMatrix4(e);const R=Te(i),U=Ae(i,S);fe(R,m,pr),fe(U,m,gr);const N=w.intersectsBox(pr),O=w.intersectsBox(gr);C=N&&vn(y,R,n,e,r,o,s,u,l+1,w,!d)||O&&vn(y,U,n,e,r,o,s,u,l+1,w,!d),di.releasePrimitive(w)}}return C}const fh=new ke,mr=new Float32Array(6);class yv{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={...Zf,...t},xv(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,r){let s=1/0,o=1/0,l=1/0,u=-1/0,h=-1/0,d=-1/0;for(let g=t,p=t+e;g<p;g++){this.writePrimitiveBounds(g,mr,0);const[m,S,T,x,_,E]=mr;m<s&&(s=m),x>u&&(u=x),S<o&&(o=S),_>h&&(h=_),T<l&&(l=T),E>d&&(d=E)}return n[r+0]=s,n[r+1]=o,n[r+2]=l,n[r+3]=u,n[r+4]=h,n[r+5]=d,n}computePrimitiveBounds(t,e,n){const r=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,mr,0);const[l,u,h,d,g,p]=mr,m=(l+d)/2,S=(u+g)/2,T=(h+p)/2,x=(d-l)/2,_=(g-u)/2,E=(p-h)/2,f=(s-r)*6;n[f+0]=m,n[f+1]=x+(Math.abs(m)+x)*Do,n[f+2]=S,n[f+3]=_+(Math.abs(S)+_)*Do,n[f+4]=T,n[f+5]=E+(Math.abs(T)+E)*Do}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,r=e.length;n<r;n++)e[n]+=t;else{const n=this._roots;for(let r=0;r<n.length;r++){const s=n[r],o=new Uint32Array(s),l=new Uint16Array(s),u=s.byteLength/Ue;for(let h=0;h<u;h++){const d=ve*h,g=2*d;Me(g,l)&&(o[d+6]+=t)}}}}traverse(t,e=0){const n=this._roots[e],r=new Uint32Array(n),s=new Uint16Array(n);o(0);function o(l,u=0){const h=l*2,d=Me(h,s);if(d){const g=r[l+6],p=s[h+14];t(u,d,new Float32Array(n,l*4,6),g,p)}else{const g=Te(l),p=Ae(l,r),m=zl(l,r);t(u,d,new Float32Array(n,l*4,6),m)||(o(g,u+1),o(p,u+1))}}}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),l=new Float32Array(r),u=r.byteLength/Ue;for(let h=u-1;h>=0;h--){const d=h*ve,g=d*2;if(Me(g,o)){const m=Ne(d,s),S=ze(g,o);this.writePrimitiveRangeBounds(m,S,mr,0),l.set(mr,d)}else{const m=Te(d),S=Ae(d,s);for(let T=0;T<3;T++){const x=l[m+T],_=l[m+T+3],E=l[S+T],f=l[S+T+3];l[d+T]=x<E?x:E,l[d+T+3]=_>f?_:f}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{fe(0,new Float32Array(n),fh),t.union(fh)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:l}=t;if(r&&s){const g=r;r=(p,m,S,T,x)=>g(p,m,S,T,x)?!0:l(p,m,this,s,S,T,o)}else r||(s?r=(g,p,m,S)=>l(g,p,this,s,m,S,o):r=(g,p,m)=>m);let u=!1,h=0;const d=this._roots;for(let g=0,p=d.length;g<p;g++){const m=d[g];if(u=Mv(this,g,n,r,e,h),u)break;h+=m.byteLength/Ue}return u}bvhcast(t,e,n){let{intersectsRanges:r}=n;return Sv(this,t,e,r)}}function Ev(){return typeof SharedArrayBuffer<"u"}function kl(i){return i.index?i.index.count:i.attributes.position.count}function ea(i){return kl(i)/3}function bv(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Tv(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=bv(e,n);i.setIndex(new Ye(r,1));for(let s=0;s<e;s++)r[s]=s}}function Av(i,t,e){const n=kl(i)/e,r=t||i.drawRange,s=r.start/e,o=(r.start+r.count)/e,l=Math.max(0,s),u=Math.min(n,o)-l;return{offset:Math.floor(l),count:Math.floor(u)}}function wv(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function dh(i,t,e){const n=Av(i,t,e),r=wv(i,e);if(!r.length)return[n];const s=[],o=n.offset,l=n.offset+n.count,u=kl(i)/e,h=[];for(const p of r){const{offset:m,count:S}=p,T=m,x=isFinite(S)?S:u-m,_=m+x;T<l&&_>o&&(h.push({pos:Math.max(o,T),isStart:!0}),h.push({pos:Math.min(l,_),isStart:!1}))}h.sort((p,m)=>p.pos!==m.pos?p.pos-m.pos:p.type==="end"?-1:1);let d=0,g=null;for(const p of h){const m=p.pos;d!==0&&m!==g&&s.push({offset:g,count:m-g}),d+=p.isStart?1:-1,g=m}return s}function Rv(i,t){const e=i[i.length-1],n=e.offset+e.count>2**16,r=i.reduce((h,d)=>h+d.count,0),s=n?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),l=n?new Uint32Array(o):new Uint16Array(o);let u=0;for(let h=0;h<i.length;h++){const{offset:d,count:g}=i[h];for(let p=0;p<g;p++)l[u+p]=d+p;u+=g}return l}class Cv extends yv{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!Ev())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={...Zf,...e},e[Bl]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const r=dh(e,t.range,n),s=Rv(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else Tv(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new ke))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:dh(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class ei{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){const u=t[s][e];n=u<n?u:n,r=u>r?u:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const l=e[s],u=t.dot(l);n=u<n?u:n,r=u>r?u:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}ei.prototype.setFromBox=(function(){const i=new L;return function(e,n){const r=n.min,s=n.max;let o=1/0,l=-1/0;for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)for(let d=0;d<=1;d++){i.x=r.x*u+s.x*(1-u),i.y=r.y*h+s.y*(1-h),i.z=r.z*d+s.z*(1-d);const g=e.dot(i);o=Math.min(g,o),l=Math.max(g,l)}this.min=o,this.max=l}})();const Pv=(function(){const i=new L,t=new L,e=new L;return function(r,s,o){const l=r.start,u=i,h=s.start,d=t;e.subVectors(l,h),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);const g=e.dot(d),p=d.dot(u),m=d.dot(d),S=e.dot(u),x=u.dot(u)*m-p*p;let _,E;x!==0?_=(g*p-S*m)/x:_=0,E=(g+_*p)/m,o.x=_,o.y=E}})(),Gl=(function(){const i=new Ot,t=new L,e=new L;return function(r,s,o,l){Pv(r,s,i);let u=i.x,h=i.y;if(u>=0&&u<=1&&h>=0&&h<=1){r.at(u,o),s.at(h,l);return}else if(u>=0&&u<=1){h<0?s.at(0,l):s.at(1,l),r.closestPointToPoint(l,!0,o);return}else if(h>=0&&h<=1){u<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,l);return}else{let d;u<0?d=r.start:d=r.end;let g;h<0?g=s.start:g=s.end;const p=t,m=e;if(r.closestPointToPoint(g,!0,t),s.closestPointToPoint(d,!0,e),p.distanceToSquared(g)<=m.distanceToSquared(d)){o.copy(p),l.copy(g);return}else{o.copy(d),l.copy(m);return}}}})(),Dv=(function(){const i=new L,t=new L,e=new Qe,n=new we;return function(s,o){const{radius:l,center:u}=s,{a:h,b:d,c:g}=o;if(n.start=h,n.end=d,n.closestPointToPoint(u,!0,i).distanceTo(u)<=l||(n.start=h,n.end=g,n.closestPointToPoint(u,!0,i).distanceTo(u)<=l)||(n.start=d,n.end=g,n.closestPointToPoint(u,!0,i).distanceTo(u)<=l))return!0;const T=o.getPlane(e);if(Math.abs(T.distanceToPoint(u))<=l){const _=T.projectPoint(u,t);if(o.containsPoint(_))return!0}return!1}})(),Iv=["x","y","z"],Zn=1e-15,ph=Zn*Zn;function cn(i){return Math.abs(i)<Zn}class $e extends le{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new L),this.satBounds=new Array(4).fill().map(()=>new ei),this.points=[this.a,this.b,this.c],this.plane=new Qe,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new we,this.needsUpdate=!0}intersectsSphere(t){return Dv(t,this)}update(){const t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,l=s[0],u=o[0];this.getNormal(l),u.setFromPoints(l,r);const h=s[1],d=o[1];h.subVectors(t,e),d.setFromPoints(h,r);const g=s[2],p=o[2];g.subVectors(e,n),p.setFromPoints(g,r);const m=s[3],S=o[3];m.subVectors(n,t),S.setFromPoints(m,r);const T=h.length(),x=g.length(),_=m.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,T<Zn?x<Zn||_<Zn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):x<Zn?_<Zn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):_<Zn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(l,t),this.needsUpdate=!1}}$e.prototype.closestPointToSegment=(function(){const i=new L,t=new L,e=new we;return function(r,s=null,o=null){const{start:l,end:u}=r,h=this.points;let d,g=1/0;for(let p=0;p<3;p++){const m=(p+1)%3;e.start.copy(h[p]),e.end.copy(h[m]),Gl(e,r,i,t),d=i.distanceToSquared(t),d<g&&(g=d,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(l,i),d=l.distanceToSquared(i),d<g&&(g=d,s&&s.copy(i),o&&o.copy(l)),this.closestPointToPoint(u,i),d=u.distanceToSquared(i),d<g&&(g=d,s&&s.copy(i),o&&o.copy(u)),Math.sqrt(g)}})();$e.prototype.intersectsTriangle=(function(){const i=new $e,t=new ei,e=new ei,n=new L,r=new L,s=new L,o=new L,l=new we,u=new we,h=new L,d=new Ot,g=new Ot;function p(f,a,M,c){const C=n;!f.isDegenerateIntoPoint&&!f.isDegenerateIntoSegment?C.copy(f.plane.normal):C.copy(a.plane.normal);const v=f.satBounds,y=f.satAxes;for(let w=1;w<4;w++){const R=v[w],U=y[w];if(t.setFromPoints(U,a.points),R.isSeparated(t)||(o.copy(C).cross(U),t.setFromPoints(o,f.points),e.setFromPoints(o,a.points),t.isSeparated(e)))return!1}const A=a.satBounds,b=a.satAxes;for(let w=1;w<4;w++){const R=A[w],U=b[w];if(t.setFromPoints(U,f.points),R.isSeparated(t)||(o.crossVectors(C,U),t.setFromPoints(o,f.points),e.setFromPoints(o,a.points),t.isSeparated(e)))return!1}return M&&(c||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),M.start.set(0,0,0),M.end.set(0,0,0)),!0}function m(f,a,M,c,C,v,y,A,b,w,R){let U=y/(y-A);w.x=c+(C-c)*U,R.start.subVectors(a,f).multiplyScalar(U).add(f),U=y/(y-b),w.y=c+(v-c)*U,R.end.subVectors(M,f).multiplyScalar(U).add(f)}function S(f,a,M,c,C,v,y,A,b,w,R){if(C>0)m(f.c,f.a,f.b,c,a,M,b,y,A,w,R);else if(v>0)m(f.b,f.a,f.c,M,a,c,A,y,b,w,R);else if(A*b>0||y!=0)m(f.a,f.b,f.c,a,M,c,y,A,b,w,R);else if(A!=0)m(f.b,f.a,f.c,M,a,c,A,y,b,w,R);else if(b!=0)m(f.c,f.a,f.b,c,a,M,b,y,A,w,R);else return!0;return!1}function T(f,a,M,c){const C=a.degenerateSegment,v=f.plane.distanceToPoint(C.start),y=f.plane.distanceToPoint(C.end);return cn(v)?cn(y)?p(f,a,M,c):(M&&(M.start.copy(C.start),M.end.copy(C.start)),f.containsPoint(C.start)):cn(y)?(M&&(M.start.copy(C.end),M.end.copy(C.end)),f.containsPoint(C.end)):f.plane.intersectLine(C,n)!=null?(M&&(M.start.copy(n),M.end.copy(n)),f.containsPoint(n)):!1}function x(f,a,M){const c=a.a;return cn(f.plane.distanceToPoint(c))&&f.containsPoint(c)?(M&&(M.start.copy(c),M.end.copy(c)),!0):!1}function _(f,a,M){const c=f.degenerateSegment,C=a.a;return c.closestPointToPoint(C,!0,n),C.distanceToSquared(n)<ph?(M&&(M.start.copy(C),M.end.copy(C)),!0):!1}function E(f,a,M,c){if(f.isDegenerateIntoSegment)if(a.isDegenerateIntoSegment){const C=f.degenerateSegment,v=a.degenerateSegment,y=r,A=s;C.delta(y),v.delta(A);const b=n.subVectors(v.start,C.start),w=y.x*A.y-y.y*A.x;if(cn(w))return!1;const R=(b.x*A.y-b.y*A.x)/w,U=-(y.x*b.y-y.y*b.x)/w;if(R<0||R>1||U<0||U>1)return!1;const N=C.start.z+y.z*R,O=v.start.z+A.z*U;return cn(N-O)?(M&&(M.start.copy(C.start).addScaledVector(y,R),M.end.copy(C.start).addScaledVector(y,R)),!0):!1}else return a.isDegenerateIntoPoint?_(f,a,M):T(a,f,M,c);else{if(f.isDegenerateIntoPoint)return a.isDegenerateIntoPoint?a.a.distanceToSquared(f.a)<ph?(M&&(M.start.copy(f.a),M.end.copy(f.a)),!0):!1:a.isDegenerateIntoSegment?_(a,f,M):x(a,f,M);if(a.isDegenerateIntoPoint)return x(f,a,M);if(a.isDegenerateIntoSegment)return T(f,a,M,c)}}return function(a,M=null,c=!1){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const C=E(this,a,M,c);if(C!==void 0)return C;const v=this.plane,y=a.plane;let A=y.distanceToPoint(this.a),b=y.distanceToPoint(this.b),w=y.distanceToPoint(this.c);cn(A)&&(A=0),cn(b)&&(b=0),cn(w)&&(w=0);const R=A*b,U=A*w;if(R>0&&U>0)return!1;let N=v.distanceToPoint(a.a),O=v.distanceToPoint(a.b),F=v.distanceToPoint(a.c);cn(N)&&(N=0),cn(O)&&(O=0),cn(F)&&(F=0);const G=N*O,H=N*F;if(G>0&&H>0)return!1;r.copy(v.normal),s.copy(y.normal);const nt=r.cross(s);let et=0,Q=Math.abs(nt.x);const ht=Math.abs(nt.y);ht>Q&&(Q=ht,et=1),Math.abs(nt.z)>Q&&(et=2);const xt=Iv[et],$=this.a[xt],J=this.b[xt],tt=this.c[xt],lt=a.a[xt],st=a.b[xt],pt=a.c[xt];if(S(this,$,J,tt,R,U,A,b,w,d,l))return p(this,a,M,c);if(S(a,lt,st,pt,G,H,N,O,F,g,u))return p(this,a,M,c);if(d.y<d.x){const jt=d.y;d.y=d.x,d.x=jt,h.copy(l.start),l.start.copy(l.end),l.end.copy(h)}if(g.y<g.x){const jt=g.y;g.y=g.x,g.x=jt,h.copy(u.start),u.start.copy(u.end),u.end.copy(h)}return d.y<g.x||g.y<d.x?!1:(M&&(g.x>d.x?M.start.copy(u.start):M.start.copy(l.start),g.y<d.y?M.end.copy(u.end):M.end.copy(l.end)),!0)}})();$e.prototype.distanceToPoint=(function(){const i=new L;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();$e.prototype.distanceToTriangle=(function(){const i=new L,t=new L,e=["a","b","c"],n=new we,r=new we;return function(o,l=null,u=null){const h=l||u?n:null;if(this.intersectsTriangle(o,h))return(l||u)&&(l&&h.getCenter(l),u&&h.getCenter(u)),0;let d=1/0;for(let g=0;g<3;g++){let p;const m=e[g],S=o[m];this.closestPointToPoint(S,i),p=S.distanceToSquared(i),p<d&&(d=p,l&&l.copy(i),u&&u.copy(S));const T=this[m];o.closestPointToPoint(T,i),p=T.distanceToSquared(i),p<d&&(d=p,l&&l.copy(T),u&&u.copy(i))}for(let g=0;g<3;g++){const p=e[g],m=e[(g+1)%3];n.set(this[p],this[m]);for(let S=0;S<3;S++){const T=e[S],x=e[(S+1)%3];r.set(o[T],o[x]),Gl(n,r,i,t);const _=i.distanceToSquared(t);_<d&&(d=_,l&&l.copy(i),u&&u.copy(t))}}return Math.sqrt(d)}})();class Ge{constructor(t,e,n){this.isOrientedBox=!0,this.min=new L,this.max=new L,this.matrix=new Zt,this.invMatrix=new Zt,this.points=new Array(8).fill().map(()=>new L),this.satAxes=new Array(3).fill().map(()=>new L),this.satBounds=new Array(3).fill().map(()=>new ei),this.alignedSatBounds=new Array(3).fill().map(()=>new ei),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Ge.prototype.update=(function(){return function(){const t=this.matrix,e=this.min,n=this.max,r=this.points;for(let h=0;h<=1;h++)for(let d=0;d<=1;d++)for(let g=0;g<=1;g++){const p=1*h|2*d|4*g,m=r[p];m.x=h?n.x:e.x,m.y=d?n.y:e.y,m.z=g?n.z:e.z,m.applyMatrix4(t)}const s=this.satBounds,o=this.satAxes,l=r[0];for(let h=0;h<3;h++){const d=o[h],g=s[h],p=1<<h,m=r[p];d.subVectors(l,m),g.setFromPoints(d,r)}const u=this.alignedSatBounds;u[0].setFromPointsField(r,"x"),u[1].setFromPointsField(r,"y"),u[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();Ge.prototype.intersectsBox=(function(){const i=new ei;return function(e){this.needsUpdate&&this.update();const n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,l=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,l[0].isSeparated(i)||(i.min=n.y,i.max=r.y,l[1].isSeparated(i))||(i.min=n.z,i.max=r.z,l[2].isSeparated(i)))return!1;for(let u=0;u<3;u++){const h=o[u],d=s[u];if(i.setFromBox(h,e),d.isSeparated(i))return!1}return!0}})();Ge.prototype.intersectsTriangle=(function(){const i=new $e,t=new Array(3),e=new ei,n=new ei,r=new L;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const l=this.satBounds,u=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let p=0;p<3;p++){const m=l[p],S=u[p];if(e.setFromPoints(S,t),m.isSeparated(e))return!1}const h=o.satBounds,d=o.satAxes,g=this.points;for(let p=0;p<3;p++){const m=h[p],S=d[p];if(e.setFromPoints(S,g),m.isSeparated(e))return!1}for(let p=0;p<3;p++){const m=u[p];for(let S=0;S<4;S++){const T=d[S];if(r.crossVectors(m,T),e.setFromPoints(r,t),n.setFromPoints(r,g),e.isSeparated(n))return!1}}return!0}})();Ge.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();Ge.prototype.distanceToPoint=(function(){const i=new L;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ge.prototype.distanceToBox=(function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new we),e=new Array(12).fill().map(()=>new we),n=new L,r=new L;return function(o,l=0,u=null,h=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(u||h)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),u&&u.copy(n),h&&h.copy(r)),0;const d=l*l,g=o.min,p=o.max,m=this.points;let S=1/0;for(let x=0;x<8;x++){const _=m[x];r.copy(_).clamp(g,p);const E=_.distanceToSquared(r);if(E<S&&(S=E,u&&u.copy(_),h&&h.copy(r),E<d))return Math.sqrt(E)}let T=0;for(let x=0;x<3;x++)for(let _=0;_<=1;_++)for(let E=0;E<=1;E++){const f=(x+1)%3,a=(x+2)%3,M=_<<f|E<<a,c=1<<x|_<<f|E<<a,C=m[M],v=m[c];t[T].set(C,v);const A=i[x],b=i[f],w=i[a],R=e[T],U=R.start,N=R.end;U[A]=g[A],U[b]=_?g[b]:p[b],U[w]=E?g[w]:p[b],N[A]=p[A],N[b]=_?g[b]:p[b],N[w]=E?g[w]:p[b],T++}for(let x=0;x<=1;x++)for(let _=0;_<=1;_++)for(let E=0;E<=1;E++){r.x=x?p.x:g.x,r.y=_?p.y:g.y,r.z=E?p.z:g.z,this.closestPointToPoint(r,n);const f=r.distanceToSquared(n);if(f<S&&(S=f,u&&u.copy(n),h&&h.copy(r),f<d))return Math.sqrt(f)}for(let x=0;x<12;x++){const _=t[x];for(let E=0;E<12;E++){const f=e[E];Gl(_,f,n,r);const a=n.distanceToSquared(r);if(a<S&&(S=a,u&&u.copy(n),h&&h.copy(r),a<d))return Math.sqrt(a)}}return Math.sqrt(S)}})();class Lv extends Vl{constructor(){super(()=>new $e)}}const hn=new Lv,ts=new L,Za=new L;function Uv(i,t,e={},n=0,r=1/0){const s=n*n,o=r*r;let l=1/0,u=null;if(i.shapecast({boundsTraverseOrder:d=>(ts.copy(t).clamp(d.min,d.max),ts.distanceToSquared(t)),intersectsBounds:(d,g,p)=>p<l&&p<o,intersectsTriangle:(d,g)=>{d.closestPointToPoint(t,ts);const p=t.distanceToSquared(ts);return p<l&&(Za.copy(ts),l=p,u=g),p<s}}),l===1/0)return null;const h=Math.sqrt(l);return e.point?e.point.copy(Za):e.point=Za.clone(),e.distance=h,e.faceIndex=u,e}const io=parseInt(Es)>=169,Nv=parseInt(Es)<=161,Li=new L,Ui=new L,Ni=new L,ro=new Ot,so=new Ot,oo=new Ot,gh=new L,mh=new L,_h=new L,es=new L;function Fv(i,t,e,n,r,s,o,l){let u;if(s===Ve?u=i.intersectTriangle(n,e,t,!0,r):u=i.intersectTriangle(t,e,n,s!==Mn,r),u===null)return null;const h=i.origin.distanceTo(r);return h<o||h>l?null:{distance:h,point:r.clone()}}function xh(i,t,e,n,r,s,o,l,u,h,d){Li.fromBufferAttribute(t,s),Ui.fromBufferAttribute(t,o),Ni.fromBufferAttribute(t,l);const g=Fv(i,Li,Ui,Ni,es,u,h,d);if(g){if(n){ro.fromBufferAttribute(n,s),so.fromBufferAttribute(n,o),oo.fromBufferAttribute(n,l),g.uv=new Ot;const m=le.getInterpolation(es,Li,Ui,Ni,ro,so,oo,g.uv);io||(g.uv=m)}if(r){ro.fromBufferAttribute(r,s),so.fromBufferAttribute(r,o),oo.fromBufferAttribute(r,l),g.uv1=new Ot;const m=le.getInterpolation(es,Li,Ui,Ni,ro,so,oo,g.uv1);io||(g.uv1=m),Nv&&(g.uv2=g.uv1)}if(e){gh.fromBufferAttribute(e,s),mh.fromBufferAttribute(e,o),_h.fromBufferAttribute(e,l),g.normal=new L;const m=le.getInterpolation(es,Li,Ui,Ni,gh,mh,_h,g.normal);g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1),io||(g.normal=m)}const p={a:s,b:o,c:l,normal:new L,materialIndex:0};if(le.getNormal(Li,Ui,Ni,p.normal),g.face=p,g.faceIndex=s,io){const m=new L;le.getBarycoord(es,Li,Ui,Ni,m),g.barycoord=m}}return g}function vh(i){return i&&i.isMaterial?i.side:i}function na(i,t,e,n,r,s,o){const l=n*3;let u=l+0,h=l+1,d=l+2;const{index:g,groups:p}=i;i.index&&(u=g.getX(u),h=g.getX(h),d=g.getX(d));const{position:m,normal:S,uv:T,uv1:x}=i.attributes;if(Array.isArray(t)){const _=n*3;for(let E=0,f=p.length;E<f;E++){const{start:a,count:M,materialIndex:c}=p[E];if(_>=a&&_<a+M){const C=vh(t[c]),v=xh(e,m,S,T,x,u,h,d,C,s,o);if(v)if(v.faceIndex=n,v.face.materialIndex=c,r)r.push(v);else return v}}}else{const _=vh(t),E=xh(e,m,S,T,x,u,h,d,_,s,o);if(E)if(E.faceIndex=n,E.face.materialIndex=0,r)r.push(E);else return E}return null}function _e(i,t,e,n){const r=i.a,s=i.b,o=i.c;let l=t,u=t+1,h=t+2;e&&(l=e.getX(l),u=e.getX(u),h=e.getX(h)),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),s.x=n.getX(u),s.y=n.getY(u),s.z=n.getZ(u),o.x=n.getX(h),o.y=n.getY(h),o.z=n.getZ(h)}function Ov(i,t,e,n,r,s,o,l){const{geometry:u,_indirectBuffer:h}=i;for(let d=n,g=n+r;d<g;d++)na(u,t,e,d,s,o,l)}function Bv(i,t,e,n,r,s,o){const{geometry:l,_indirectBuffer:u}=i;let h=1/0,d=null;for(let g=n,p=n+r;g<p;g++){let m;m=na(l,t,e,g,null,s,o),m&&m.distance<h&&(d=m,h=m.distance)}return d}function zv(i,t,e,n,r,s,o){const{geometry:l}=e,{index:u}=l,h=l.attributes.position;for(let d=i,g=t+i;d<g;d++){let p;if(p=d,_e(o,p*3,u,h),o.needsUpdate=!0,n(o,p,r,s))return!0}return!1}function Vv(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,l,u,h=0;const d=i._roots;for(let p=0,m=d.length;p<m;p++)s=d[p],o=new Uint32Array(s),l=new Uint16Array(s),u=new Float32Array(s),g(0,h),h+=s.byteLength;function g(p,m,S=!1){const T=p*2;if(Me(T,l)){const x=Ne(p,o),_=ze(T,l);let E=1/0,f=1/0,a=1/0,M=-1/0,c=-1/0,C=-1/0;for(let v=3*x,y=3*(x+_);v<y;v++){let A=n[v];const b=r.getX(A),w=r.getY(A),R=r.getZ(A);b<E&&(E=b),b>M&&(M=b),w<f&&(f=w),w>c&&(c=w),R<a&&(a=R),R>C&&(C=R)}return u[p+0]!==E||u[p+1]!==f||u[p+2]!==a||u[p+3]!==M||u[p+4]!==c||u[p+5]!==C?(u[p+0]=E,u[p+1]=f,u[p+2]=a,u[p+3]=M,u[p+4]=c,u[p+5]=C,!0):!1}else{const x=Te(p),_=Ae(p,o);let E=S,f=!1,a=!1;if(t){if(!E){const A=x/ve+m/Ue,b=_/ve+m/Ue;f=t.has(A),a=t.has(b),E=!f&&!a}}else f=!0,a=!0;const M=E||f,c=E||a;let C=!1;M&&(C=g(x,m,E));let v=!1;c&&(v=g(_,m,E));const y=C||v;if(y)for(let A=0;A<3;A++){const b=x+A,w=_+A,R=u[b],U=u[b+3],N=u[w],O=u[w+3];u[p+A]=R<N?R:N,u[p+A+3]=U>O?U:O}return y}}}function Ei(i,t,e,n,r){let s,o,l,u,h,d;const g=1/e.direction.x,p=1/e.direction.y,m=1/e.direction.z,S=e.origin.x,T=e.origin.y,x=e.origin.z;let _=t[i],E=t[i+3],f=t[i+1],a=t[i+3+1],M=t[i+2],c=t[i+3+2];return g>=0?(s=(_-S)*g,o=(E-S)*g):(s=(E-S)*g,o=(_-S)*g),p>=0?(l=(f-T)*p,u=(a-T)*p):(l=(a-T)*p,u=(f-T)*p),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),m>=0?(h=(M-x)*m,d=(c-x)*m):(h=(c-x)*m,d=(M-x)*m),s>d||h>o)?!1:((h>s||s!==s)&&(s=h),(d<o||o!==o)&&(o=d),s<=r&&o>=n)}function kv(i,t,e,n,r,s,o,l){const{geometry:u,_indirectBuffer:h}=i;for(let d=n,g=n+r;d<g;d++){let p=h?h[d]:d;na(u,t,e,p,s,o,l)}}function Gv(i,t,e,n,r,s,o){const{geometry:l,_indirectBuffer:u}=i;let h=1/0,d=null;for(let g=n,p=n+r;g<p;g++){let m;m=na(l,t,e,u?u[g]:g,null,s,o),m&&m.distance<h&&(d=m,h=m.distance)}return d}function Hv(i,t,e,n,r,s,o){const{geometry:l}=e,{index:u}=l,h=l.attributes.position;for(let d=i,g=t+i;d<g;d++){let p;if(p=e.resolveTriangleIndex(d),_e(o,p*3,u,h),o.needsUpdate=!0,n(o,p,r,s))return!0}return!1}function Wv(i,t,e,n,r,s,o){ue.setBuffer(i._roots[t]),fl(0,i,e,n,r,s,o),ue.clearBuffer()}function fl(i,t,e,n,r,s,o){const{float32Array:l,uint16Array:u,uint32Array:h}=ue,d=i*2;if(Me(d,u)){const p=Ne(i,h),m=ze(d,u);Ov(t,e,n,p,m,r,s,o)}else{const p=Te(i);Ei(p,l,n,s,o)&&fl(p,t,e,n,r,s,o);const m=Ae(i,h);Ei(m,l,n,s,o)&&fl(m,t,e,n,r,s,o)}}const Xv=["x","y","z"];function qv(i,t,e,n,r,s){ue.setBuffer(i._roots[t]);const o=dl(0,i,e,n,r,s);return ue.clearBuffer(),o}function dl(i,t,e,n,r,s){const{float32Array:o,uint16Array:l,uint32Array:u}=ue;let h=i*2;if(Me(h,l)){const g=Ne(i,u),p=ze(h,l);return Bv(t,e,n,g,p,r,s)}else{const g=zl(i,u),p=Xv[g],S=n.direction[p]>=0;let T,x;S?(T=Te(i),x=Ae(i,u)):(T=Ae(i,u),x=Te(i));const E=Ei(T,o,n,r,s)?dl(T,t,e,n,r,s):null;if(E){const M=E.point[p];if(S?M<=o[x+g]:M>=o[x+g+3])return E}const a=Ei(x,o,n,r,s)?dl(x,t,e,n,r,s):null;return E&&a?E.distance<=a.distance?E:a:E||a||null}}const ao=new ke,_r=new $e,xr=new $e,ns=new Zt,Mh=new Ge,co=new Ge;function Yv(i,t,e,n){ue.setBuffer(i._roots[t]);const r=pl(0,i,e,n);return ue.clearBuffer(),r}function pl(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:l}=ue;let u=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Mh.set(e.boundingBox.min,e.boundingBox.max,n),r=Mh),Me(u,o)){const d=t.geometry,g=d.index,p=d.attributes.position,m=e.index,S=e.attributes.position,T=Ne(i,l),x=ze(u,o);if(ns.copy(n).invert(),e.boundsTree)return fe(i,s,co),co.matrix.copy(ns),co.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>co.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let f=T*3,a=(x+T)*3;f<a;f+=3)if(_e(xr,f,g,p),xr.needsUpdate=!0,E.intersectsTriangle(xr))return!0;return!1}});{const _=ea(e);for(let E=T*3,f=(x+T)*3;E<f;E+=3){_e(_r,E,g,p),_r.a.applyMatrix4(ns),_r.b.applyMatrix4(ns),_r.c.applyMatrix4(ns),_r.needsUpdate=!0;for(let a=0,M=_*3;a<M;a+=3)if(_e(xr,a,m,S),xr.needsUpdate=!0,_r.intersectsTriangle(xr))return!0}}}else{const d=Te(i),g=Ae(i,l);return fe(d,s,ao),!!(r.intersectsBox(ao)&&pl(d,t,e,n,r)||(fe(g,s,ao),r.intersectsBox(ao)&&pl(g,t,e,n,r)))}}const lo=new Zt,ja=new Ge,is=new Ge,$v=new L,Zv=new L,jv=new L,Kv=new L;function Jv(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),ja.set(t.boundingBox.min,t.boundingBox.max,e),ja.needsUpdate=!0;const l=i.geometry,u=l.attributes.position,h=l.index,d=t.attributes.position,g=t.index,p=hn.getPrimitive(),m=hn.getPrimitive();let S=$v,T=Zv,x=null,_=null;r&&(x=jv,_=Kv);let E=1/0,f=null,a=null;return lo.copy(e).invert(),is.matrix.copy(lo),i.shapecast({boundsTraverseOrder:M=>ja.distanceToBox(M),intersectsBounds:(M,c,C)=>C<E&&C<o?(c&&(is.min.copy(M.min),is.max.copy(M.max),is.needsUpdate=!0),!0):!1,intersectsRange:(M,c)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:v=>is.distanceToBox(v),intersectsBounds:(v,y,A)=>A<E&&A<o,intersectsRange:(v,y)=>{for(let A=v,b=v+y;A<b;A++){_e(m,3*A,g,d),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let w=M,R=M+c;w<R;w++){_e(p,3*w,h,u),p.needsUpdate=!0;const U=p.distanceToTriangle(m,S,x);if(U<E&&(T.copy(S),_&&_.copy(x),E=U,f=w,a=A),U<s)return!0}}}});{const C=ea(t);for(let v=0,y=C;v<y;v++){_e(m,3*v,g,d),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let A=M,b=M+c;A<b;A++){_e(p,3*A,h,u),p.needsUpdate=!0;const w=p.distanceToTriangle(m,S,x);if(w<E&&(T.copy(S),_&&_.copy(x),E=w,f=A,a=v),w<s)return!0}}}}}),hn.releasePrimitive(p),hn.releasePrimitive(m),E===1/0?null:(n.point?n.point.copy(T):n.point=T.clone(),n.distance=E,n.faceIndex=f,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(lo),T.applyMatrix4(lo),r.distance=T.sub(r.point).length(),r.faceIndex=a),n)}function Qv(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,l,u,h=0;const d=i._roots;for(let p=0,m=d.length;p<m;p++)s=d[p],o=new Uint32Array(s),l=new Uint16Array(s),u=new Float32Array(s),g(0,h),h+=s.byteLength;function g(p,m,S=!1){const T=p*2;if(Me(T,l)){const x=Ne(p,o),_=ze(T,l);let E=1/0,f=1/0,a=1/0,M=-1/0,c=-1/0,C=-1/0;for(let v=x,y=x+_;v<y;v++){const A=3*i.resolveTriangleIndex(v);for(let b=0;b<3;b++){let w=A+b;w=n?n[w]:w;const R=r.getX(w),U=r.getY(w),N=r.getZ(w);R<E&&(E=R),R>M&&(M=R),U<f&&(f=U),U>c&&(c=U),N<a&&(a=N),N>C&&(C=N)}}return u[p+0]!==E||u[p+1]!==f||u[p+2]!==a||u[p+3]!==M||u[p+4]!==c||u[p+5]!==C?(u[p+0]=E,u[p+1]=f,u[p+2]=a,u[p+3]=M,u[p+4]=c,u[p+5]=C,!0):!1}else{const x=Te(p),_=Ae(p,o);let E=S,f=!1,a=!1;if(t){if(!E){const A=x/ve+m/Ue,b=_/ve+m/Ue;f=t.has(A),a=t.has(b),E=!f&&!a}}else f=!0,a=!0;const M=E||f,c=E||a;let C=!1;M&&(C=g(x,m,E));let v=!1;c&&(v=g(_,m,E));const y=C||v;if(y)for(let A=0;A<3;A++){const b=x+A,w=_+A,R=u[b],U=u[b+3],N=u[w],O=u[w+3];u[p+A]=R<N?R:N,u[p+A+3]=U>O?U:O}return y}}}function tM(i,t,e,n,r,s,o){ue.setBuffer(i._roots[t]),gl(0,i,e,n,r,s,o),ue.clearBuffer()}function gl(i,t,e,n,r,s,o){const{float32Array:l,uint16Array:u,uint32Array:h}=ue,d=i*2;if(Me(d,u)){const p=Ne(i,h),m=ze(d,u);kv(t,e,n,p,m,r,s,o)}else{const p=Te(i);Ei(p,l,n,s,o)&&gl(p,t,e,n,r,s,o);const m=Ae(i,h);Ei(m,l,n,s,o)&&gl(m,t,e,n,r,s,o)}}const eM=["x","y","z"];function nM(i,t,e,n,r,s){ue.setBuffer(i._roots[t]);const o=ml(0,i,e,n,r,s);return ue.clearBuffer(),o}function ml(i,t,e,n,r,s){const{float32Array:o,uint16Array:l,uint32Array:u}=ue;let h=i*2;if(Me(h,l)){const g=Ne(i,u),p=ze(h,l);return Gv(t,e,n,g,p,r,s)}else{const g=zl(i,u),p=eM[g],S=n.direction[p]>=0;let T,x;S?(T=Te(i),x=Ae(i,u)):(T=Ae(i,u),x=Te(i));const E=Ei(T,o,n,r,s)?ml(T,t,e,n,r,s):null;if(E){const M=E.point[p];if(S?M<=o[x+g]:M>=o[x+g+3])return E}const a=Ei(x,o,n,r,s)?ml(x,t,e,n,r,s):null;return E&&a?E.distance<=a.distance?E:a:E||a||null}}const uo=new ke,vr=new $e,Mr=new $e,rs=new Zt,Sh=new Ge,ho=new Ge;function iM(i,t,e,n){ue.setBuffer(i._roots[t]);const r=_l(0,i,e,n);return ue.clearBuffer(),r}function _l(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:l}=ue;let u=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Sh.set(e.boundingBox.min,e.boundingBox.max,n),r=Sh),Me(u,o)){const d=t.geometry,g=d.index,p=d.attributes.position,m=e.index,S=e.attributes.position,T=Ne(i,l),x=ze(u,o);if(rs.copy(n).invert(),e.boundsTree)return fe(i,s,ho),ho.matrix.copy(rs),ho.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:E=>ho.intersectsBox(E),intersectsTriangle:E=>{E.a.applyMatrix4(n),E.b.applyMatrix4(n),E.c.applyMatrix4(n),E.needsUpdate=!0;for(let f=T,a=x+T;f<a;f++)if(_e(Mr,3*t.resolveTriangleIndex(f),g,p),Mr.needsUpdate=!0,E.intersectsTriangle(Mr))return!0;return!1}});{const _=ea(e);for(let E=T,f=x+T;E<f;E++){const a=t.resolveTriangleIndex(E);_e(vr,3*a,g,p),vr.a.applyMatrix4(rs),vr.b.applyMatrix4(rs),vr.c.applyMatrix4(rs),vr.needsUpdate=!0;for(let M=0,c=_*3;M<c;M+=3)if(_e(Mr,M,m,S),Mr.needsUpdate=!0,vr.intersectsTriangle(Mr))return!0}}}else{const d=Te(i),g=Ae(i,l);return fe(d,s,uo),!!(r.intersectsBox(uo)&&_l(d,t,e,n,r)||(fe(g,s,uo),r.intersectsBox(uo)&&_l(g,t,e,n,r)))}}const fo=new Zt,Ka=new Ge,ss=new Ge,rM=new L,sM=new L,oM=new L,aM=new L;function cM(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),Ka.set(t.boundingBox.min,t.boundingBox.max,e),Ka.needsUpdate=!0;const l=i.geometry,u=l.attributes.position,h=l.index,d=t.attributes.position,g=t.index,p=hn.getPrimitive(),m=hn.getPrimitive();let S=rM,T=sM,x=null,_=null;r&&(x=oM,_=aM);let E=1/0,f=null,a=null;return fo.copy(e).invert(),ss.matrix.copy(fo),i.shapecast({boundsTraverseOrder:M=>Ka.distanceToBox(M),intersectsBounds:(M,c,C)=>C<E&&C<o?(c&&(ss.min.copy(M.min),ss.max.copy(M.max),ss.needsUpdate=!0),!0):!1,intersectsRange:(M,c)=>{if(t.boundsTree){const C=t.boundsTree;return C.shapecast({boundsTraverseOrder:v=>ss.distanceToBox(v),intersectsBounds:(v,y,A)=>A<E&&A<o,intersectsRange:(v,y)=>{for(let A=v,b=v+y;A<b;A++){const w=C.resolveTriangleIndex(A);_e(m,3*w,g,d),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let R=M,U=M+c;R<U;R++){const N=i.resolveTriangleIndex(R);_e(p,3*N,h,u),p.needsUpdate=!0;const O=p.distanceToTriangle(m,S,x);if(O<E&&(T.copy(S),_&&_.copy(x),E=O,f=R,a=A),O<s)return!0}}}})}else{const C=ea(t);for(let v=0,y=C;v<y;v++){_e(m,3*v,g,d),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let A=M,b=M+c;A<b;A++){const w=i.resolveTriangleIndex(A);_e(p,3*w,h,u),p.needsUpdate=!0;const R=p.distanceToTriangle(m,S,x);if(R<E&&(T.copy(S),_&&_.copy(x),E=R,f=A,a=v),R<s)return!0}}}}}),hn.releasePrimitive(p),hn.releasePrimitive(m),E===1/0?null:(n.point?n.point.copy(T):n.point=T.clone(),n.distance=E,n.faceIndex=f,r&&(r.point?r.point.copy(_):r.point=_.clone(),r.point.applyMatrix4(fo),T.applyMatrix4(fo),r.distance=T.sub(r.point).length(),r.faceIndex=a),n)}function yh(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const po=new Ge,go=new Gr,Eh=new L,bh=new Zt,Th=new L,Ja=["getX","getY","getZ"];class Ho extends Cv{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex(),l={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(l.roots=r.map(u=>u.slice()),l.index=o?o.array.slice():null,l.indirectBuffer=s?s.slice():null):(l.roots=r,l.index=o?o.array:null,l.indirectBuffer=s),l}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),u(s));const l=new Ho(e,{...n,[Bl]:!0});if(l._roots=s,l._indirectBuffer=o||null,n.setIndex){const h=e.getIndex();if(h===null){const d=new Ye(t.index,1,!1);e.setIndex(d)}else h.array!==r&&(h.array.set(r),h.needsUpdate=!0)}return l;function u(h){for(let d=0;d<h.length;d++){const g=h[d],p=new Uint32Array(g),m=new Uint16Array(g);for(let S=0,T=g.byteLength/Ue;S<T;S++){const x=ve*S,_=2*x;Me(_,m)||(p[x+6]=p[x+6]/ve-S)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),e={...e,maxLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,l=r.index?r.index.array:null,h=(s?s[t]:t)*3;let d=h+0,g=h+1,p=h+2;l&&(d=l[d],g=l[g],p=l[p]);for(let m=0;m<3;m++){const S=o[Ja[m]](d),T=o[Ja[m]](g),x=o[Ja[m]](p);let _=S;T<_&&(_=T),x<_&&(_=x);let E=S;T>E&&(E=T),x>E&&(E=x),e[n+m]=_,e[n+m+3]=E}return e}computePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,l=r.index?r.index.array:null,u=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const h=o.array,d=o.offset||0;let g=3;o.isInterleavedBufferAttribute&&(g=o.data.stride);const p=["getX","getY","getZ"],m=n.offset;for(let S=t,T=t+e;S<T;S++){const _=(s?s[S]:S)*3,E=(S-m)*6;let f=_+0,a=_+1,M=_+2;l&&(f=l[f],a=l[a],M=l[M]),u||(f=f*g+d,a=a*g+d,M=M*g+d);for(let c=0;c<3;c++){let C,v,y;u?(C=o[p[c]](f),v=o[p[c]](a),y=o[p[c]](M)):(C=h[f+c],v=h[a+c],y=h[M+c]);let A=C;v<A&&(A=v),y<A&&(A=y);let b=C;v>b&&(b=v),y>b&&(b=y);const w=(b-A)/2,R=c*2;n[E+R+0]=A+w,n[E+R+1]=w+(Math.abs(A)+w)*Do}}return n}raycastObject3D(t,e,n=[]){const{material:r}=t;if(r===void 0)return;bh.copy(t.matrixWorld).invert(),go.copy(e.ray).applyMatrix4(bh),Th.setFromMatrixScale(t.matrixWorld),Eh.copy(go.direction).multiply(Th);const s=Eh.length(),o=e.near/s,l=e.far/s;if(e.firstHitOnly===!0){let u=this.raycastFirst(go,r,o,l);u=yh(u,t,e),u&&n.push(u)}else{const u=this.raycast(go,r,o,l);for(let h=0,d=u.length;h<d;h++){const g=yh(u[h],t,e);g&&n.push(g)}}return n}refit(t=null){return(this.indirect?Qv:Vv)(this,t)}raycast(t,e=Un,n=0,r=1/0){const s=this._roots,o=[],l=this.indirect?tM:Wv;for(let u=0,h=s.length;u<h;u++)l(this,u,e,t,o,n,r);return o}raycastFirst(t,e=Un,n=0,r=1/0){const s=this._roots;let o=null;const l=this.indirect?nM:qv;for(let u=0,h=s.length;u<h;u++){const d=l(this,u,e,t,n,r);d!=null&&(o==null||d.distance<o.distance)&&(o=d)}return o}intersectsGeometry(t,e){let n=!1;const r=this._roots,s=this.indirect?iM:Yv;for(let o=0,l=r.length;o<l&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){const e=hn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?Hv:zv});return hn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const o=hn.getPrimitive(),l=this.geometry.index,u=this.geometry.attributes.position,h=this.indirect?S=>{const T=this.resolveTriangleIndex(S);_e(o,T*3,l,u)}:S=>{_e(o,S*3,l,u)},d=hn.getPrimitive(),g=t.geometry.index,p=t.geometry.attributes.position,m=t.indirect?S=>{const T=t.resolveTriangleIndex(S);_e(d,T*3,g,p)}:S=>{_e(d,S*3,g,p)};if(s){if(!(t instanceof Ho))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const S=(T,x,_,E,f,a,M,c)=>{for(let C=_,v=_+E;C<v;C++){m(C),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let y=T,A=T+x;y<A;y++)if(h(y),o.needsUpdate=!0,s(o,d,y,C,f,a,M,c))return!0}return!1};if(r){const T=r;r=function(x,_,E,f,a,M,c,C){return T(x,_,E,f,a,M,c,C)?!0:S(x,_,E,f,a,M,c,C)}}else r=S}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return po.set(t.min,t.max,e),po.needsUpdate=!0,this.shapecast({intersectsBounds:n=>po.intersectsBox(n),intersectsTriangle:n=>po.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?cM:Jv)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return Uv(this,t,e,n,r)}}const Jf=1e-6,lM=Jf*.5,Qf=Math.pow(10,-Math.log10(Jf)),uM=lM*Qf;function Dn(i){return~~(i*Qf+uM)}function hM(i){return`${Dn(i.x)},${Dn(i.y)}`}function Ah(i){return`${Dn(i.x)},${Dn(i.y)},${Dn(i.z)}`}function fM(i){return`${Dn(i.x)},${Dn(i.y)},${Dn(i.z)},${Dn(i.w)}`}function dM(i,t,e){e.direction.subVectors(t,i).normalize();const n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function td(){return typeof SharedArrayBuffer<"u"}function pM(i){if(i.buffer instanceof SharedArrayBuffer)return i;const t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function gM(i){return i.index?i.index.count:i.attributes.position.count}function Hl(i){return gM(i)/3}const mM=1e-8,_M=new L;function xM(i){return~~(i/3)}function vM(i){return i%3}function wh(i,t){return i.start-t.start}function Rh(i,t){return _M.subVectors(t,i.origin).dot(i.direction)}function MM(i,t,e,n=mM){i.sort(wh),t.sort(wh);for(let l=0;l<i.length;l++){const u=i[l];for(let h=0;h<t.length;h++){const d=t[h];if(!(d.start>u.end)){if(u.end<d.start||d.end<u.start)continue;if(u.start<=d.start&&u.end>=d.end)s(d.end,u.end)||i.splice(l+1,0,{start:d.end,end:u.end,index:u.index}),u.end=d.start,d.start=0,d.end=0;else if(u.start>=d.start&&u.end<=d.end)s(u.end,d.end)||t.splice(h+1,0,{start:u.end,end:d.end,index:d.index}),d.end=u.start,u.start=0,u.end=0;else if(u.start<=d.start&&u.end<=d.end){const g=u.end;u.end=d.start,d.start=g}else if(u.start>=d.start&&u.end>=d.end){const g=d.end;d.end=u.start,u.start=g}else throw new Error}if(e.has(u.index)||e.set(u.index,[]),e.has(d.index)||e.set(d.index,[]),e.get(u.index).push(d.index),e.get(d.index).push(u.index),o(d)&&(t.splice(h,1),h--),o(u)){i.splice(l,1),l--;break}}}r(i),r(t);function r(l){for(let u=0;u<l.length;u++)o(l[u])&&(l.splice(u,1),u--)}function s(l,u){return Math.abs(u-l)<n}function o(l){return Math.abs(l.end-l.start)<n}}const Ch=1e-5,Ph=1e-4;class SM{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let u=0,h=e.length;u<h;u++){const d=e[u];if(o(d,t)&&o(d,n))continue;const g=l(d,t),p=l(d,n),m=Math.min(g,p);m<r&&(r=m,s=d)}return s;function o(u,h){const d=u.origin.distanceTo(h.origin)>Ch;return u.direction.angleTo(h.direction)>Ph||d}function l(u,h){const d=u.origin.distanceTo(h.origin),g=u.direction.angleTo(h.direction);return d/Ch+g/Ph}}}const Qa=new L,tc=new L,mo=new Gr;function yM(i,t,e){const n=i.attributes,r=i.index,s=n.position,o=new Map,l=new Map,u=Array.from(t),h=new SM;for(let d=0,g=u.length;d<g;d++){const p=u[d],m=xM(p),S=vM(p);let T=3*m+S,x=3*m+(S+1)%3;r&&(T=r.getX(T),x=r.getX(x)),Qa.fromBufferAttribute(s,T),tc.fromBufferAttribute(s,x),dM(Qa,tc,mo);let _,E=h.findClosestRay(mo);E===null&&(E=mo.clone(),h.addRay(E)),l.has(E)||l.set(E,{forward:[],reverse:[],ray:E}),_=l.get(E);let f=Rh(E,Qa),a=Rh(E,tc);f>a&&([f,a]=[a,f]),mo.direction.dot(E.direction)<0?_.reverse.push({start:f,end:a,index:p}):_.forward.push({start:f,end:a,index:p})}return l.forEach(({forward:d,reverse:g},p)=>{MM(d,g,o,e),d.length===0&&g.length===0&&l.delete(p)}),{disjointConnectivityMap:o,fragmentMap:l}}const EM=new Ot,ec=new L,bM=new ae,nc=["","",""];class TM{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?f:E,l=new Map,{attributes:u}=t,h=e?Object.keys(u):null,d=t.index,g=u.position;let p=Hl(t);const m=p;let S=0;n&&(S=t.drawRange.start,t.drawRange.count!==1/0&&(p=~~(t.drawRange.count/3)));let T=this.data;(!T||T.length<3*m)&&(T=new Int32Array(3*m)),T.fill(-1);let x=0,_=new Set;for(let a=S,M=p*3+S;a<M;a+=3){const c=a;for(let C=0;C<3;C++){let v=c+C;d&&(v=d.getX(v)),nc[C]=o(v)}for(let C=0;C<3;C++){const v=(C+1)%3,y=nc[C],A=nc[v],b=`${A}_${y}`;if(l.has(b)){const w=c+C,R=l.get(b);T[w]=R,T[R]=w,l.delete(b),x+=2,_.delete(R)}else{const w=`${y}_${A}`,R=c+C;l.set(w,R),_.add(R)}}}if(r){const{fragmentMap:a,disjointConnectivityMap:M}=yM(t,_,s);_.clear(),a.forEach(({forward:c,reverse:C})=>{c.forEach(({index:v})=>_.add(v)),C.forEach(({index:v})=>_.add(v))}),this.unmatchedDisjointEdges=a,this.disjointConnections=M,x=p*3-_.size}this.matchedEdges=x,this.unmatchedEdges=_.size,this.data=T;function E(a){return ec.fromBufferAttribute(g,a),Ah(ec)}function f(a){let M="";for(let c=0,C=h.length;c<C;c++){const v=u[h[c]];let y;switch(v.itemSize){case 1:y=Dn(v.getX(a));break;case 2:y=hM(EM.fromBufferAttribute(v,a));break;case 3:y=Ah(ec.fromBufferAttribute(v,a));break;case 4:y=fM(bM.fromBufferAttribute(v,a));break}M!==""&&(M+="|"),M+=y}return M}}}class hs extends en{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Zt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=td(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",l=`${s.uuid}_${s.count}_${s.version}`,u=`${t.uuid}_${o}_${l}`;if(this._hash===u)return;if(this._hash=u,n)for(const p in e){const m=e[p];if(m.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");m.array=pM(m.array)}t.boundsTree=new Ho(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new TM),t.halfEdges.updateFrom(t);const h=Hl(t);(!t.groupIndices||t.groupIndices.length!==h)&&(t.groupIndices=new Uint16Array(h));const d=t.groupIndices,g=t.groups;for(let p=0,m=g.length;p<m;p++){const{start:S,count:T}=g[p];for(let x=S/3,_=(S+T)/3;x<_;x++)d[x]=p}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}var AM=Object.getOwnPropertyNames,nn=(i,t)=>function(){return t||(0,i[AM(i)[0]])((t={exports:{}}).exports,t),t.exports},ia=nn({"node_modules/binary-search-bounds/search-bounds.js"(i,t){function e(u,h,d,g,p){for(var m=p+1;g<=p;){var S=g+p>>>1,T=u[S],x=d!==void 0?d(T,h):T-h;x>=0?(m=S,p=S-1):g=S+1}return m}function n(u,h,d,g,p){for(var m=p+1;g<=p;){var S=g+p>>>1,T=u[S],x=d!==void 0?d(T,h):T-h;x>0?(m=S,p=S-1):g=S+1}return m}function r(u,h,d,g,p){for(var m=g-1;g<=p;){var S=g+p>>>1,T=u[S],x=d!==void 0?d(T,h):T-h;x<0?(m=S,g=S+1):p=S-1}return m}function s(u,h,d,g,p){for(var m=g-1;g<=p;){var S=g+p>>>1,T=u[S],x=d!==void 0?d(T,h):T-h;x<=0?(m=S,g=S+1):p=S-1}return m}function o(u,h,d,g,p){for(;g<=p;){var m=g+p>>>1,S=u[m],T=d!==void 0?d(S,h):S-h;if(T===0)return m;T<=0?g=m+1:p=m-1}return-1}function l(u,h,d,g,p,m){return typeof d=="function"?m(u,h,d,g===void 0?0:g|0,p===void 0?u.length-1:p|0):m(u,h,void 0,d===void 0?0:d|0,g===void 0?u.length-1:g|0)}t.exports={ge:function(u,h,d,g,p){return l(u,h,d,g,p,e)},gt:function(u,h,d,g,p){return l(u,h,d,g,p,n)},lt:function(u,h,d,g,p){return l(u,h,d,g,p,r)},le:function(u,h,d,g,p){return l(u,h,d,g,p,s)},eq:function(u,h,d,g,p){return l(u,h,d,g,p,o)}}}}),Wl=nn({"node_modules/two-product/two-product.js"(i,t){t.exports=n;var e=+(Math.pow(2,27)+1);function n(r,s,o){var l=r*s,u=e*r,h=u-r,d=u-h,g=r-d,p=e*s,m=p-s,S=p-m,T=s-S,x=l-d*S,_=x-g*S,E=_-d*T,f=g*T-E;return o?(o[0]=f,o[1]=l,o):[f,l]}}}),ed=nn({"node_modules/robust-sum/robust-sum.js"(i,t){t.exports=n;function e(r,s){var o=r+s,l=o-r,u=o-l,h=s-l,d=r-u,g=d+h;return g?[g,o]:[o]}function n(r,s){var o=r.length|0,l=s.length|0;if(o===1&&l===1)return e(r[0],s[0]);var u=o+l,h=new Array(u),d=0,g=0,p=0,m=Math.abs,S=r[g],T=m(S),x=s[p],_=m(x),E,f;T<_?(f=S,g+=1,g<o&&(S=r[g],T=m(S))):(f=x,p+=1,p<l&&(x=s[p],_=m(x))),g<o&&T<_||p>=l?(E=S,g+=1,g<o&&(S=r[g],T=m(S))):(E=x,p+=1,p<l&&(x=s[p],_=m(x)));for(var a=E+f,M=a-E,c=f-M,C=c,v=a,y,A,b,w,R;g<o&&p<l;)T<_?(E=S,g+=1,g<o&&(S=r[g],T=m(S))):(E=x,p+=1,p<l&&(x=s[p],_=m(x))),f=C,a=E+f,M=a-E,c=f-M,c&&(h[d++]=c),y=v+a,A=y-v,b=y-A,w=a-A,R=v-b,C=R+w,v=y;for(;g<o;)E=S,f=C,a=E+f,M=a-E,c=f-M,c&&(h[d++]=c),y=v+a,A=y-v,b=y-A,w=a-A,R=v-b,C=R+w,v=y,g+=1,g<o&&(S=r[g]);for(;p<l;)E=x,f=C,a=E+f,M=a-E,c=f-M,c&&(h[d++]=c),y=v+a,A=y-v,b=y-A,w=a-A,R=v-b,C=R+w,v=y,p+=1,p<l&&(x=s[p]);return C&&(h[d++]=C),v&&(h[d++]=v),d||(h[d++]=0),h.length=d,h}}}),wM=nn({"node_modules/two-sum/two-sum.js"(i,t){t.exports=e;function e(n,r,s){var o=n+r,l=o-n,u=o-l,h=r-l,d=n-u;return s?(s[0]=d+h,s[1]=o,s):[d+h,o]}}}),nd=nn({"node_modules/robust-scale/robust-scale.js"(i,t){var e=Wl(),n=wM();t.exports=r;function r(s,o){var l=s.length;if(l===1){var u=e(s[0],o);return u[0]?u:[u[1]]}var h=new Array(2*l),d=[.1,.1],g=[.1,.1],p=0;e(s[0],o,d),d[0]&&(h[p++]=d[0]);for(var m=1;m<l;++m){e(s[m],o,g);var S=d[1];n(S,g[0],d),d[0]&&(h[p++]=d[0]);var T=g[1],x=d[1],_=T+x,E=_-T,f=x-E;d[1]=_,f&&(h[p++]=f)}return d[1]&&(h[p++]=d[1]),p===0&&(h[p++]=0),h.length=p,h}}}),id=nn({"node_modules/robust-subtract/robust-diff.js"(i,t){t.exports=n;function e(r,s){var o=r+s,l=o-r,u=o-l,h=s-l,d=r-u,g=d+h;return g?[g,o]:[o]}function n(r,s){var o=r.length|0,l=s.length|0;if(o===1&&l===1)return e(r[0],-s[0]);var u=o+l,h=new Array(u),d=0,g=0,p=0,m=Math.abs,S=r[g],T=m(S),x=-s[p],_=m(x),E,f;T<_?(f=S,g+=1,g<o&&(S=r[g],T=m(S))):(f=x,p+=1,p<l&&(x=-s[p],_=m(x))),g<o&&T<_||p>=l?(E=S,g+=1,g<o&&(S=r[g],T=m(S))):(E=x,p+=1,p<l&&(x=-s[p],_=m(x)));for(var a=E+f,M=a-E,c=f-M,C=c,v=a,y,A,b,w,R;g<o&&p<l;)T<_?(E=S,g+=1,g<o&&(S=r[g],T=m(S))):(E=x,p+=1,p<l&&(x=-s[p],_=m(x))),f=C,a=E+f,M=a-E,c=f-M,c&&(h[d++]=c),y=v+a,A=y-v,b=y-A,w=a-A,R=v-b,C=R+w,v=y;for(;g<o;)E=S,f=C,a=E+f,M=a-E,c=f-M,c&&(h[d++]=c),y=v+a,A=y-v,b=y-A,w=a-A,R=v-b,C=R+w,v=y,g+=1,g<o&&(S=r[g]);for(;p<l;)E=x,f=C,a=E+f,M=a-E,c=f-M,c&&(h[d++]=c),y=v+a,A=y-v,b=y-A,w=a-A,R=v-b,C=R+w,v=y,p+=1,p<l&&(x=-s[p]);return C&&(h[d++]=C),v&&(h[d++]=v),d||(h[d++]=0),h.length=d,h}}}),RM=nn({"node_modules/robust-orientation/orientation.js"(i,t){var e=Wl(),n=ed(),r=nd(),s=id(),o=5,l=11102230246251565e-32,u=(3+16*l)*l,h=(7+56*l)*l;function d(a,M,c,C){return function(y,A,b){var w=a(a(M(A[1],b[0]),M(-b[1],A[0])),a(M(y[1],A[0]),M(-A[1],y[0]))),R=a(M(y[1],b[0]),M(-b[1],y[0])),U=C(w,R);return U[U.length-1]}}function g(a,M,c,C){return function(y,A,b,w){var R=a(a(c(a(M(b[1],w[0]),M(-w[1],b[0])),A[2]),a(c(a(M(A[1],w[0]),M(-w[1],A[0])),-b[2]),c(a(M(A[1],b[0]),M(-b[1],A[0])),w[2]))),a(c(a(M(A[1],w[0]),M(-w[1],A[0])),y[2]),a(c(a(M(y[1],w[0]),M(-w[1],y[0])),-A[2]),c(a(M(y[1],A[0]),M(-A[1],y[0])),w[2])))),U=a(a(c(a(M(b[1],w[0]),M(-w[1],b[0])),y[2]),a(c(a(M(y[1],w[0]),M(-w[1],y[0])),-b[2]),c(a(M(y[1],b[0]),M(-b[1],y[0])),w[2]))),a(c(a(M(A[1],b[0]),M(-b[1],A[0])),y[2]),a(c(a(M(y[1],b[0]),M(-b[1],y[0])),-A[2]),c(a(M(y[1],A[0]),M(-A[1],y[0])),b[2])))),N=C(R,U);return N[N.length-1]}}function p(a,M,c,C){return function(y,A,b,w,R){var U=a(a(a(c(a(c(a(M(w[1],R[0]),M(-R[1],w[0])),b[2]),a(c(a(M(b[1],R[0]),M(-R[1],b[0])),-w[2]),c(a(M(b[1],w[0]),M(-w[1],b[0])),R[2]))),A[3]),a(c(a(c(a(M(w[1],R[0]),M(-R[1],w[0])),A[2]),a(c(a(M(A[1],R[0]),M(-R[1],A[0])),-w[2]),c(a(M(A[1],w[0]),M(-w[1],A[0])),R[2]))),-b[3]),c(a(c(a(M(b[1],R[0]),M(-R[1],b[0])),A[2]),a(c(a(M(A[1],R[0]),M(-R[1],A[0])),-b[2]),c(a(M(A[1],b[0]),M(-b[1],A[0])),R[2]))),w[3]))),a(c(a(c(a(M(b[1],w[0]),M(-w[1],b[0])),A[2]),a(c(a(M(A[1],w[0]),M(-w[1],A[0])),-b[2]),c(a(M(A[1],b[0]),M(-b[1],A[0])),w[2]))),-R[3]),a(c(a(c(a(M(w[1],R[0]),M(-R[1],w[0])),A[2]),a(c(a(M(A[1],R[0]),M(-R[1],A[0])),-w[2]),c(a(M(A[1],w[0]),M(-w[1],A[0])),R[2]))),y[3]),c(a(c(a(M(w[1],R[0]),M(-R[1],w[0])),y[2]),a(c(a(M(y[1],R[0]),M(-R[1],y[0])),-w[2]),c(a(M(y[1],w[0]),M(-w[1],y[0])),R[2]))),-A[3])))),a(a(c(a(c(a(M(A[1],R[0]),M(-R[1],A[0])),y[2]),a(c(a(M(y[1],R[0]),M(-R[1],y[0])),-A[2]),c(a(M(y[1],A[0]),M(-A[1],y[0])),R[2]))),w[3]),a(c(a(c(a(M(A[1],w[0]),M(-w[1],A[0])),y[2]),a(c(a(M(y[1],w[0]),M(-w[1],y[0])),-A[2]),c(a(M(y[1],A[0]),M(-A[1],y[0])),w[2]))),-R[3]),c(a(c(a(M(b[1],w[0]),M(-w[1],b[0])),A[2]),a(c(a(M(A[1],w[0]),M(-w[1],A[0])),-b[2]),c(a(M(A[1],b[0]),M(-b[1],A[0])),w[2]))),y[3]))),a(c(a(c(a(M(b[1],w[0]),M(-w[1],b[0])),y[2]),a(c(a(M(y[1],w[0]),M(-w[1],y[0])),-b[2]),c(a(M(y[1],b[0]),M(-b[1],y[0])),w[2]))),-A[3]),a(c(a(c(a(M(A[1],w[0]),M(-w[1],A[0])),y[2]),a(c(a(M(y[1],w[0]),M(-w[1],y[0])),-A[2]),c(a(M(y[1],A[0]),M(-A[1],y[0])),w[2]))),b[3]),c(a(c(a(M(A[1],b[0]),M(-b[1],A[0])),y[2]),a(c(a(M(y[1],b[0]),M(-b[1],y[0])),-A[2]),c(a(M(y[1],A[0]),M(-A[1],y[0])),b[2]))),-w[3]))))),N=a(a(a(c(a(c(a(M(w[1],R[0]),M(-R[1],w[0])),b[2]),a(c(a(M(b[1],R[0]),M(-R[1],b[0])),-w[2]),c(a(M(b[1],w[0]),M(-w[1],b[0])),R[2]))),y[3]),c(a(c(a(M(w[1],R[0]),M(-R[1],w[0])),y[2]),a(c(a(M(y[1],R[0]),M(-R[1],y[0])),-w[2]),c(a(M(y[1],w[0]),M(-w[1],y[0])),R[2]))),-b[3])),a(c(a(c(a(M(b[1],R[0]),M(-R[1],b[0])),y[2]),a(c(a(M(y[1],R[0]),M(-R[1],y[0])),-b[2]),c(a(M(y[1],b[0]),M(-b[1],y[0])),R[2]))),w[3]),c(a(c(a(M(b[1],w[0]),M(-w[1],b[0])),y[2]),a(c(a(M(y[1],w[0]),M(-w[1],y[0])),-b[2]),c(a(M(y[1],b[0]),M(-b[1],y[0])),w[2]))),-R[3]))),a(a(c(a(c(a(M(b[1],R[0]),M(-R[1],b[0])),A[2]),a(c(a(M(A[1],R[0]),M(-R[1],A[0])),-b[2]),c(a(M(A[1],b[0]),M(-b[1],A[0])),R[2]))),y[3]),c(a(c(a(M(b[1],R[0]),M(-R[1],b[0])),y[2]),a(c(a(M(y[1],R[0]),M(-R[1],y[0])),-b[2]),c(a(M(y[1],b[0]),M(-b[1],y[0])),R[2]))),-A[3])),a(c(a(c(a(M(A[1],R[0]),M(-R[1],A[0])),y[2]),a(c(a(M(y[1],R[0]),M(-R[1],y[0])),-A[2]),c(a(M(y[1],A[0]),M(-A[1],y[0])),R[2]))),b[3]),c(a(c(a(M(A[1],b[0]),M(-b[1],A[0])),y[2]),a(c(a(M(y[1],b[0]),M(-b[1],y[0])),-A[2]),c(a(M(y[1],A[0]),M(-A[1],y[0])),b[2]))),-R[3])))),O=C(U,N);return O[O.length-1]}}function m(a){var M=a===3?d:a===4?g:p;return M(n,e,r,s)}var S=m(3),T=m(4),x=[function(){return 0},function(){return 0},function(M,c){return c[0]-M[0]},function(M,c,C){var v=(M[1]-C[1])*(c[0]-C[0]),y=(M[0]-C[0])*(c[1]-C[1]),A=v-y,b;if(v>0){if(y<=0)return A;b=v+y}else if(v<0){if(y>=0)return A;b=-(v+y)}else return A;var w=u*b;return A>=w||A<=-w?A:S(M,c,C)},function(M,c,C,v){var y=M[0]-v[0],A=c[0]-v[0],b=C[0]-v[0],w=M[1]-v[1],R=c[1]-v[1],U=C[1]-v[1],N=M[2]-v[2],O=c[2]-v[2],F=C[2]-v[2],G=A*U,H=b*R,nt=b*w,et=y*U,Q=y*R,ht=A*w,Mt=N*(G-H)+O*(nt-et)+F*(Q-ht),xt=(Math.abs(G)+Math.abs(H))*Math.abs(N)+(Math.abs(nt)+Math.abs(et))*Math.abs(O)+(Math.abs(Q)+Math.abs(ht))*Math.abs(F),$=h*xt;return Mt>$||-Mt>$?Mt:T(M,c,C,v)}];function _(a){var M=x[a.length];return M||(M=x[a.length]=m(a.length)),M.apply(void 0,a)}function E(a,M,c,C,v,y,A){return function(w,R,U,N,O){switch(arguments.length){case 0:case 1:return 0;case 2:return C(w,R);case 3:return v(w,R,U);case 4:return y(w,R,U,N);case 5:return A(w,R,U,N,O)}for(var F=new Array(arguments.length),G=0;G<arguments.length;++G)F[G]=arguments[G];return a(F)}}function f(){for(;x.length<=o;)x.push(m(x.length));t.exports=E.apply(void 0,[_].concat(x));for(var a=0;a<=o;++a)t.exports[a]=x[a]}f()}}),CM=nn({"node_modules/cdt2d/lib/monotone.js"(i,t){var e=ia(),n=RM()[3],r=0,s=1,o=2;t.exports=T;function l(x,_,E,f,a){this.a=x,this.b=_,this.idx=E,this.lowerIds=f,this.upperIds=a}function u(x,_,E,f){this.a=x,this.b=_,this.type=E,this.idx=f}function h(x,_){var E=x.a[0]-_.a[0]||x.a[1]-_.a[1]||x.type-_.type;return E||x.type!==r&&(E=n(x.a,x.b,_.b),E)?E:x.idx-_.idx}function d(x,_){return n(x.a,x.b,_)}function g(x,_,E,f,a){for(var M=e.lt(_,f,d),c=e.gt(_,f,d),C=M;C<c;++C){for(var v=_[C],y=v.lowerIds,b=y.length;b>1&&n(E[y[b-2]],E[y[b-1]],f)>0;)x.push([y[b-1],y[b-2],a]),b-=1;y.length=b,y.push(a);for(var A=v.upperIds,b=A.length;b>1&&n(E[A[b-2]],E[A[b-1]],f)<0;)x.push([A[b-2],A[b-1],a]),b-=1;A.length=b,A.push(a)}}function p(x,_){var E;return x.a[0]<_.a[0]?E=n(x.a,x.b,_.a):E=n(_.b,_.a,x.a),E||(_.b[0]<x.b[0]?E=n(x.a,x.b,_.b):E=n(_.b,_.a,x.b),E||x.idx-_.idx)}function m(x,_,E){var f=e.le(x,E,p),a=x[f],M=a.upperIds,c=M[M.length-1];a.upperIds=[c],x.splice(f+1,0,new l(E.a,E.b,E.idx,[c],M))}function S(x,_,E){var f=E.a;E.a=E.b,E.b=f;var a=e.eq(x,E,p),M=x[a],c=x[a-1];c.upperIds=M.upperIds,x.splice(a,1)}function T(x,_){for(var E=x.length,f=_.length,a=[],M=0;M<E;++M)a.push(new u(x[M],null,r,M));for(var M=0;M<f;++M){var c=_[M],C=x[c[0]],v=x[c[1]];C[0]<v[0]?a.push(new u(C,v,o,M),new u(v,C,s,M)):C[0]>v[0]&&a.push(new u(v,C,o,M),new u(C,v,s,M))}a.sort(h);for(var y=a[0].a[0]-(1+Math.abs(a[0].a[0]))*Math.pow(2,-52),A=[new l([y,1],[y,0],-1,[],[])],b=[],M=0,w=a.length;M<w;++M){var R=a[M],U=R.type;U===r?g(b,A,x,R.a,R.idx):U===o?m(A,x,R):S(A,x,R)}return b}}}),PM=nn({"node_modules/cdt2d/lib/triangulation.js"(i,t){var e=ia();t.exports=o;function n(l,u){this.stars=l,this.edges=u}var r=n.prototype;function s(l,u,h){for(var d=1,g=l.length;d<g;d+=2)if(l[d-1]===u&&l[d]===h){l[d-1]=l[g-2],l[d]=l[g-1],l.length=g-2;return}}r.isConstraint=(function(){var l=[0,0];function u(h,d){return h[0]-d[0]||h[1]-d[1]}return function(h,d){return l[0]=Math.min(h,d),l[1]=Math.max(h,d),e.eq(this.edges,l,u)>=0}})(),r.removeTriangle=function(l,u,h){var d=this.stars;s(d[l],u,h),s(d[u],h,l),s(d[h],l,u)},r.addTriangle=function(l,u,h){var d=this.stars;d[l].push(u,h),d[u].push(h,l),d[h].push(l,u)},r.opposite=function(l,u){for(var h=this.stars[u],d=1,g=h.length;d<g;d+=2)if(h[d]===l)return h[d-1];return-1},r.flip=function(l,u){var h=this.opposite(l,u),d=this.opposite(u,l);this.removeTriangle(l,u,h),this.removeTriangle(u,l,d),this.addTriangle(l,d,h),this.addTriangle(u,h,d)},r.edges=function(){for(var l=this.stars,u=[],h=0,d=l.length;h<d;++h)for(var g=l[h],p=0,m=g.length;p<m;p+=2)u.push([g[p],g[p+1]]);return u},r.cells=function(){for(var l=this.stars,u=[],h=0,d=l.length;h<d;++h)for(var g=l[h],p=0,m=g.length;p<m;p+=2){var S=g[p],T=g[p+1];h<Math.min(S,T)&&u.push([h,S,T])}return u};function o(l,u){for(var h=new Array(l),d=0;d<l;++d)h[d]=[];return new n(h,u)}}}),DM=nn({"node_modules/robust-in-sphere/in-sphere.js"(i,t){var e=Wl(),n=ed(),r=id(),s=nd(),o=6;function l(f){var a=f===3?g:f===4?p:f===5?m:S;return a(n,r,e,s)}function u(){return 0}function h(){return 0}function d(){return 0}function g(f,a,M,c){function C(v,y,A){var b=M(v[0],v[0]),w=c(b,y[0]),R=c(b,A[0]),U=M(y[0],y[0]),N=c(U,v[0]),O=c(U,A[0]),F=M(A[0],A[0]),G=c(F,v[0]),H=c(F,y[0]),nt=f(a(H,O),a(N,w)),et=a(G,R),Q=a(nt,et);return Q[Q.length-1]}return C}function p(f,a,M,c){function C(v,y,A,b){var w=f(M(v[0],v[0]),M(v[1],v[1])),R=c(w,y[0]),U=c(w,A[0]),N=c(w,b[0]),O=f(M(y[0],y[0]),M(y[1],y[1])),F=c(O,v[0]),G=c(O,A[0]),H=c(O,b[0]),nt=f(M(A[0],A[0]),M(A[1],A[1])),et=c(nt,v[0]),Q=c(nt,y[0]),ht=c(nt,b[0]),Mt=f(M(b[0],b[0]),M(b[1],b[1])),xt=c(Mt,v[0]),$=c(Mt,y[0]),J=c(Mt,A[0]),tt=f(f(c(a(J,ht),y[1]),f(c(a($,H),-A[1]),c(a(Q,G),b[1]))),f(c(a($,H),v[1]),f(c(a(xt,N),-y[1]),c(a(F,R),b[1])))),lt=f(f(c(a(J,ht),v[1]),f(c(a(xt,N),-A[1]),c(a(et,U),b[1]))),f(c(a(Q,G),v[1]),f(c(a(et,U),-y[1]),c(a(F,R),A[1])))),st=a(tt,lt);return st[st.length-1]}return C}function m(f,a,M,c){function C(v,y,A,b,w){var R=f(M(v[0],v[0]),f(M(v[1],v[1]),M(v[2],v[2]))),U=c(R,y[0]),N=c(R,A[0]),O=c(R,b[0]),F=c(R,w[0]),G=f(M(y[0],y[0]),f(M(y[1],y[1]),M(y[2],y[2]))),H=c(G,v[0]),nt=c(G,A[0]),et=c(G,b[0]),Q=c(G,w[0]),ht=f(M(A[0],A[0]),f(M(A[1],A[1]),M(A[2],A[2]))),Mt=c(ht,v[0]),xt=c(ht,y[0]),$=c(ht,b[0]),J=c(ht,w[0]),tt=f(M(b[0],b[0]),f(M(b[1],b[1]),M(b[2],b[2]))),lt=c(tt,v[0]),st=c(tt,y[0]),pt=c(tt,A[0]),jt=c(tt,w[0]),bt=f(M(w[0],w[0]),f(M(w[1],w[1]),M(w[2],w[2]))),Tt=c(bt,v[0]),Pt=c(bt,y[0]),vt=c(bt,A[0]),Ft=c(bt,b[0]),B=f(f(f(c(f(c(a(Ft,jt),A[1]),f(c(a(vt,J),-b[1]),c(a(pt,$),w[1]))),y[2]),f(c(f(c(a(Ft,jt),y[1]),f(c(a(Pt,Q),-b[1]),c(a(st,et),w[1]))),-A[2]),c(f(c(a(vt,J),y[1]),f(c(a(Pt,Q),-A[1]),c(a(xt,nt),w[1]))),b[2]))),f(c(f(c(a(pt,$),y[1]),f(c(a(st,et),-A[1]),c(a(xt,nt),b[1]))),-w[2]),f(c(f(c(a(Ft,jt),y[1]),f(c(a(Pt,Q),-b[1]),c(a(st,et),w[1]))),v[2]),c(f(c(a(Ft,jt),v[1]),f(c(a(Tt,F),-b[1]),c(a(lt,O),w[1]))),-y[2])))),f(f(c(f(c(a(Pt,Q),v[1]),f(c(a(Tt,F),-y[1]),c(a(H,U),w[1]))),b[2]),f(c(f(c(a(st,et),v[1]),f(c(a(lt,O),-y[1]),c(a(H,U),b[1]))),-w[2]),c(f(c(a(pt,$),y[1]),f(c(a(st,et),-A[1]),c(a(xt,nt),b[1]))),v[2]))),f(c(f(c(a(pt,$),v[1]),f(c(a(lt,O),-A[1]),c(a(Mt,N),b[1]))),-y[2]),f(c(f(c(a(st,et),v[1]),f(c(a(lt,O),-y[1]),c(a(H,U),b[1]))),A[2]),c(f(c(a(xt,nt),v[1]),f(c(a(Mt,N),-y[1]),c(a(H,U),A[1]))),-b[2]))))),Vt=f(f(f(c(f(c(a(Ft,jt),A[1]),f(c(a(vt,J),-b[1]),c(a(pt,$),w[1]))),v[2]),c(f(c(a(Ft,jt),v[1]),f(c(a(Tt,F),-b[1]),c(a(lt,O),w[1]))),-A[2])),f(c(f(c(a(vt,J),v[1]),f(c(a(Tt,F),-A[1]),c(a(Mt,N),w[1]))),b[2]),c(f(c(a(pt,$),v[1]),f(c(a(lt,O),-A[1]),c(a(Mt,N),b[1]))),-w[2]))),f(f(c(f(c(a(vt,J),y[1]),f(c(a(Pt,Q),-A[1]),c(a(xt,nt),w[1]))),v[2]),c(f(c(a(vt,J),v[1]),f(c(a(Tt,F),-A[1]),c(a(Mt,N),w[1]))),-y[2])),f(c(f(c(a(Pt,Q),v[1]),f(c(a(Tt,F),-y[1]),c(a(H,U),w[1]))),A[2]),c(f(c(a(xt,nt),v[1]),f(c(a(Mt,N),-y[1]),c(a(H,U),A[1]))),-w[2])))),It=a(B,Vt);return It[It.length-1]}return C}function S(f,a,M,c){function C(v,y,A,b,w,R){var U=f(f(M(v[0],v[0]),M(v[1],v[1])),f(M(v[2],v[2]),M(v[3],v[3]))),N=c(U,y[0]),O=c(U,A[0]),F=c(U,b[0]),G=c(U,w[0]),H=c(U,R[0]),nt=f(f(M(y[0],y[0]),M(y[1],y[1])),f(M(y[2],y[2]),M(y[3],y[3]))),et=c(nt,v[0]),Q=c(nt,A[0]),ht=c(nt,b[0]),Mt=c(nt,w[0]),xt=c(nt,R[0]),$=f(f(M(A[0],A[0]),M(A[1],A[1])),f(M(A[2],A[2]),M(A[3],A[3]))),J=c($,v[0]),tt=c($,y[0]),lt=c($,b[0]),st=c($,w[0]),pt=c($,R[0]),jt=f(f(M(b[0],b[0]),M(b[1],b[1])),f(M(b[2],b[2]),M(b[3],b[3]))),bt=c(jt,v[0]),Tt=c(jt,y[0]),Pt=c(jt,A[0]),vt=c(jt,w[0]),Ft=c(jt,R[0]),B=f(f(M(w[0],w[0]),M(w[1],w[1])),f(M(w[2],w[2]),M(w[3],w[3]))),Vt=c(B,v[0]),It=c(B,y[0]),Bt=c(B,A[0]),ut=c(B,b[0]),I=c(B,R[0]),P=f(f(M(R[0],R[0]),M(R[1],R[1])),f(M(R[2],R[2]),M(R[3],R[3]))),z=c(P,v[0]),Y=c(P,y[0]),j=c(P,A[0]),q=c(P,b[0]),ot=c(P,w[0]),ft=f(f(f(c(f(f(c(f(c(a(ot,I),b[1]),f(c(a(q,Ft),-w[1]),c(a(ut,vt),R[1]))),A[2]),c(f(c(a(ot,I),A[1]),f(c(a(j,pt),-w[1]),c(a(Bt,st),R[1]))),-b[2])),f(c(f(c(a(q,Ft),A[1]),f(c(a(j,pt),-b[1]),c(a(Pt,lt),R[1]))),w[2]),c(f(c(a(ut,vt),A[1]),f(c(a(Bt,st),-b[1]),c(a(Pt,lt),w[1]))),-R[2]))),y[3]),f(c(f(f(c(f(c(a(ot,I),b[1]),f(c(a(q,Ft),-w[1]),c(a(ut,vt),R[1]))),y[2]),c(f(c(a(ot,I),y[1]),f(c(a(Y,xt),-w[1]),c(a(It,Mt),R[1]))),-b[2])),f(c(f(c(a(q,Ft),y[1]),f(c(a(Y,xt),-b[1]),c(a(Tt,ht),R[1]))),w[2]),c(f(c(a(ut,vt),y[1]),f(c(a(It,Mt),-b[1]),c(a(Tt,ht),w[1]))),-R[2]))),-A[3]),c(f(f(c(f(c(a(ot,I),A[1]),f(c(a(j,pt),-w[1]),c(a(Bt,st),R[1]))),y[2]),c(f(c(a(ot,I),y[1]),f(c(a(Y,xt),-w[1]),c(a(It,Mt),R[1]))),-A[2])),f(c(f(c(a(j,pt),y[1]),f(c(a(Y,xt),-A[1]),c(a(tt,Q),R[1]))),w[2]),c(f(c(a(Bt,st),y[1]),f(c(a(It,Mt),-A[1]),c(a(tt,Q),w[1]))),-R[2]))),b[3]))),f(f(c(f(f(c(f(c(a(q,Ft),A[1]),f(c(a(j,pt),-b[1]),c(a(Pt,lt),R[1]))),y[2]),c(f(c(a(q,Ft),y[1]),f(c(a(Y,xt),-b[1]),c(a(Tt,ht),R[1]))),-A[2])),f(c(f(c(a(j,pt),y[1]),f(c(a(Y,xt),-A[1]),c(a(tt,Q),R[1]))),b[2]),c(f(c(a(Pt,lt),y[1]),f(c(a(Tt,ht),-A[1]),c(a(tt,Q),b[1]))),-R[2]))),-w[3]),c(f(f(c(f(c(a(ut,vt),A[1]),f(c(a(Bt,st),-b[1]),c(a(Pt,lt),w[1]))),y[2]),c(f(c(a(ut,vt),y[1]),f(c(a(It,Mt),-b[1]),c(a(Tt,ht),w[1]))),-A[2])),f(c(f(c(a(Bt,st),y[1]),f(c(a(It,Mt),-A[1]),c(a(tt,Q),w[1]))),b[2]),c(f(c(a(Pt,lt),y[1]),f(c(a(Tt,ht),-A[1]),c(a(tt,Q),b[1]))),-w[2]))),R[3])),f(c(f(f(c(f(c(a(ot,I),b[1]),f(c(a(q,Ft),-w[1]),c(a(ut,vt),R[1]))),y[2]),c(f(c(a(ot,I),y[1]),f(c(a(Y,xt),-w[1]),c(a(It,Mt),R[1]))),-b[2])),f(c(f(c(a(q,Ft),y[1]),f(c(a(Y,xt),-b[1]),c(a(Tt,ht),R[1]))),w[2]),c(f(c(a(ut,vt),y[1]),f(c(a(It,Mt),-b[1]),c(a(Tt,ht),w[1]))),-R[2]))),v[3]),c(f(f(c(f(c(a(ot,I),b[1]),f(c(a(q,Ft),-w[1]),c(a(ut,vt),R[1]))),v[2]),c(f(c(a(ot,I),v[1]),f(c(a(z,H),-w[1]),c(a(Vt,G),R[1]))),-b[2])),f(c(f(c(a(q,Ft),v[1]),f(c(a(z,H),-b[1]),c(a(bt,F),R[1]))),w[2]),c(f(c(a(ut,vt),v[1]),f(c(a(Vt,G),-b[1]),c(a(bt,F),w[1]))),-R[2]))),-y[3])))),f(f(f(c(f(f(c(f(c(a(ot,I),y[1]),f(c(a(Y,xt),-w[1]),c(a(It,Mt),R[1]))),v[2]),c(f(c(a(ot,I),v[1]),f(c(a(z,H),-w[1]),c(a(Vt,G),R[1]))),-y[2])),f(c(f(c(a(Y,xt),v[1]),f(c(a(z,H),-y[1]),c(a(et,N),R[1]))),w[2]),c(f(c(a(It,Mt),v[1]),f(c(a(Vt,G),-y[1]),c(a(et,N),w[1]))),-R[2]))),b[3]),c(f(f(c(f(c(a(q,Ft),y[1]),f(c(a(Y,xt),-b[1]),c(a(Tt,ht),R[1]))),v[2]),c(f(c(a(q,Ft),v[1]),f(c(a(z,H),-b[1]),c(a(bt,F),R[1]))),-y[2])),f(c(f(c(a(Y,xt),v[1]),f(c(a(z,H),-y[1]),c(a(et,N),R[1]))),b[2]),c(f(c(a(Tt,ht),v[1]),f(c(a(bt,F),-y[1]),c(a(et,N),b[1]))),-R[2]))),-w[3])),f(c(f(f(c(f(c(a(ut,vt),y[1]),f(c(a(It,Mt),-b[1]),c(a(Tt,ht),w[1]))),v[2]),c(f(c(a(ut,vt),v[1]),f(c(a(Vt,G),-b[1]),c(a(bt,F),w[1]))),-y[2])),f(c(f(c(a(It,Mt),v[1]),f(c(a(Vt,G),-y[1]),c(a(et,N),w[1]))),b[2]),c(f(c(a(Tt,ht),v[1]),f(c(a(bt,F),-y[1]),c(a(et,N),b[1]))),-w[2]))),R[3]),c(f(f(c(f(c(a(q,Ft),A[1]),f(c(a(j,pt),-b[1]),c(a(Pt,lt),R[1]))),y[2]),c(f(c(a(q,Ft),y[1]),f(c(a(Y,xt),-b[1]),c(a(Tt,ht),R[1]))),-A[2])),f(c(f(c(a(j,pt),y[1]),f(c(a(Y,xt),-A[1]),c(a(tt,Q),R[1]))),b[2]),c(f(c(a(Pt,lt),y[1]),f(c(a(Tt,ht),-A[1]),c(a(tt,Q),b[1]))),-R[2]))),v[3]))),f(f(c(f(f(c(f(c(a(q,Ft),A[1]),f(c(a(j,pt),-b[1]),c(a(Pt,lt),R[1]))),v[2]),c(f(c(a(q,Ft),v[1]),f(c(a(z,H),-b[1]),c(a(bt,F),R[1]))),-A[2])),f(c(f(c(a(j,pt),v[1]),f(c(a(z,H),-A[1]),c(a(J,O),R[1]))),b[2]),c(f(c(a(Pt,lt),v[1]),f(c(a(bt,F),-A[1]),c(a(J,O),b[1]))),-R[2]))),-y[3]),c(f(f(c(f(c(a(q,Ft),y[1]),f(c(a(Y,xt),-b[1]),c(a(Tt,ht),R[1]))),v[2]),c(f(c(a(q,Ft),v[1]),f(c(a(z,H),-b[1]),c(a(bt,F),R[1]))),-y[2])),f(c(f(c(a(Y,xt),v[1]),f(c(a(z,H),-y[1]),c(a(et,N),R[1]))),b[2]),c(f(c(a(Tt,ht),v[1]),f(c(a(bt,F),-y[1]),c(a(et,N),b[1]))),-R[2]))),A[3])),f(c(f(f(c(f(c(a(j,pt),y[1]),f(c(a(Y,xt),-A[1]),c(a(tt,Q),R[1]))),v[2]),c(f(c(a(j,pt),v[1]),f(c(a(z,H),-A[1]),c(a(J,O),R[1]))),-y[2])),f(c(f(c(a(Y,xt),v[1]),f(c(a(z,H),-y[1]),c(a(et,N),R[1]))),A[2]),c(f(c(a(tt,Q),v[1]),f(c(a(J,O),-y[1]),c(a(et,N),A[1]))),-R[2]))),-b[3]),c(f(f(c(f(c(a(Pt,lt),y[1]),f(c(a(Tt,ht),-A[1]),c(a(tt,Q),b[1]))),v[2]),c(f(c(a(Pt,lt),v[1]),f(c(a(bt,F),-A[1]),c(a(J,O),b[1]))),-y[2])),f(c(f(c(a(Tt,ht),v[1]),f(c(a(bt,F),-y[1]),c(a(et,N),b[1]))),A[2]),c(f(c(a(tt,Q),v[1]),f(c(a(J,O),-y[1]),c(a(et,N),A[1]))),-b[2]))),R[3]))))),Ut=f(f(f(c(f(f(c(f(c(a(ot,I),b[1]),f(c(a(q,Ft),-w[1]),c(a(ut,vt),R[1]))),A[2]),c(f(c(a(ot,I),A[1]),f(c(a(j,pt),-w[1]),c(a(Bt,st),R[1]))),-b[2])),f(c(f(c(a(q,Ft),A[1]),f(c(a(j,pt),-b[1]),c(a(Pt,lt),R[1]))),w[2]),c(f(c(a(ut,vt),A[1]),f(c(a(Bt,st),-b[1]),c(a(Pt,lt),w[1]))),-R[2]))),v[3]),f(c(f(f(c(f(c(a(ot,I),b[1]),f(c(a(q,Ft),-w[1]),c(a(ut,vt),R[1]))),v[2]),c(f(c(a(ot,I),v[1]),f(c(a(z,H),-w[1]),c(a(Vt,G),R[1]))),-b[2])),f(c(f(c(a(q,Ft),v[1]),f(c(a(z,H),-b[1]),c(a(bt,F),R[1]))),w[2]),c(f(c(a(ut,vt),v[1]),f(c(a(Vt,G),-b[1]),c(a(bt,F),w[1]))),-R[2]))),-A[3]),c(f(f(c(f(c(a(ot,I),A[1]),f(c(a(j,pt),-w[1]),c(a(Bt,st),R[1]))),v[2]),c(f(c(a(ot,I),v[1]),f(c(a(z,H),-w[1]),c(a(Vt,G),R[1]))),-A[2])),f(c(f(c(a(j,pt),v[1]),f(c(a(z,H),-A[1]),c(a(J,O),R[1]))),w[2]),c(f(c(a(Bt,st),v[1]),f(c(a(Vt,G),-A[1]),c(a(J,O),w[1]))),-R[2]))),b[3]))),f(f(c(f(f(c(f(c(a(q,Ft),A[1]),f(c(a(j,pt),-b[1]),c(a(Pt,lt),R[1]))),v[2]),c(f(c(a(q,Ft),v[1]),f(c(a(z,H),-b[1]),c(a(bt,F),R[1]))),-A[2])),f(c(f(c(a(j,pt),v[1]),f(c(a(z,H),-A[1]),c(a(J,O),R[1]))),b[2]),c(f(c(a(Pt,lt),v[1]),f(c(a(bt,F),-A[1]),c(a(J,O),b[1]))),-R[2]))),-w[3]),c(f(f(c(f(c(a(ut,vt),A[1]),f(c(a(Bt,st),-b[1]),c(a(Pt,lt),w[1]))),v[2]),c(f(c(a(ut,vt),v[1]),f(c(a(Vt,G),-b[1]),c(a(bt,F),w[1]))),-A[2])),f(c(f(c(a(Bt,st),v[1]),f(c(a(Vt,G),-A[1]),c(a(J,O),w[1]))),b[2]),c(f(c(a(Pt,lt),v[1]),f(c(a(bt,F),-A[1]),c(a(J,O),b[1]))),-w[2]))),R[3])),f(c(f(f(c(f(c(a(ot,I),A[1]),f(c(a(j,pt),-w[1]),c(a(Bt,st),R[1]))),y[2]),c(f(c(a(ot,I),y[1]),f(c(a(Y,xt),-w[1]),c(a(It,Mt),R[1]))),-A[2])),f(c(f(c(a(j,pt),y[1]),f(c(a(Y,xt),-A[1]),c(a(tt,Q),R[1]))),w[2]),c(f(c(a(Bt,st),y[1]),f(c(a(It,Mt),-A[1]),c(a(tt,Q),w[1]))),-R[2]))),v[3]),c(f(f(c(f(c(a(ot,I),A[1]),f(c(a(j,pt),-w[1]),c(a(Bt,st),R[1]))),v[2]),c(f(c(a(ot,I),v[1]),f(c(a(z,H),-w[1]),c(a(Vt,G),R[1]))),-A[2])),f(c(f(c(a(j,pt),v[1]),f(c(a(z,H),-A[1]),c(a(J,O),R[1]))),w[2]),c(f(c(a(Bt,st),v[1]),f(c(a(Vt,G),-A[1]),c(a(J,O),w[1]))),-R[2]))),-y[3])))),f(f(f(c(f(f(c(f(c(a(ot,I),y[1]),f(c(a(Y,xt),-w[1]),c(a(It,Mt),R[1]))),v[2]),c(f(c(a(ot,I),v[1]),f(c(a(z,H),-w[1]),c(a(Vt,G),R[1]))),-y[2])),f(c(f(c(a(Y,xt),v[1]),f(c(a(z,H),-y[1]),c(a(et,N),R[1]))),w[2]),c(f(c(a(It,Mt),v[1]),f(c(a(Vt,G),-y[1]),c(a(et,N),w[1]))),-R[2]))),A[3]),c(f(f(c(f(c(a(j,pt),y[1]),f(c(a(Y,xt),-A[1]),c(a(tt,Q),R[1]))),v[2]),c(f(c(a(j,pt),v[1]),f(c(a(z,H),-A[1]),c(a(J,O),R[1]))),-y[2])),f(c(f(c(a(Y,xt),v[1]),f(c(a(z,H),-y[1]),c(a(et,N),R[1]))),A[2]),c(f(c(a(tt,Q),v[1]),f(c(a(J,O),-y[1]),c(a(et,N),A[1]))),-R[2]))),-w[3])),f(c(f(f(c(f(c(a(Bt,st),y[1]),f(c(a(It,Mt),-A[1]),c(a(tt,Q),w[1]))),v[2]),c(f(c(a(Bt,st),v[1]),f(c(a(Vt,G),-A[1]),c(a(J,O),w[1]))),-y[2])),f(c(f(c(a(It,Mt),v[1]),f(c(a(Vt,G),-y[1]),c(a(et,N),w[1]))),A[2]),c(f(c(a(tt,Q),v[1]),f(c(a(J,O),-y[1]),c(a(et,N),A[1]))),-w[2]))),R[3]),c(f(f(c(f(c(a(ut,vt),A[1]),f(c(a(Bt,st),-b[1]),c(a(Pt,lt),w[1]))),y[2]),c(f(c(a(ut,vt),y[1]),f(c(a(It,Mt),-b[1]),c(a(Tt,ht),w[1]))),-A[2])),f(c(f(c(a(Bt,st),y[1]),f(c(a(It,Mt),-A[1]),c(a(tt,Q),w[1]))),b[2]),c(f(c(a(Pt,lt),y[1]),f(c(a(Tt,ht),-A[1]),c(a(tt,Q),b[1]))),-w[2]))),v[3]))),f(f(c(f(f(c(f(c(a(ut,vt),A[1]),f(c(a(Bt,st),-b[1]),c(a(Pt,lt),w[1]))),v[2]),c(f(c(a(ut,vt),v[1]),f(c(a(Vt,G),-b[1]),c(a(bt,F),w[1]))),-A[2])),f(c(f(c(a(Bt,st),v[1]),f(c(a(Vt,G),-A[1]),c(a(J,O),w[1]))),b[2]),c(f(c(a(Pt,lt),v[1]),f(c(a(bt,F),-A[1]),c(a(J,O),b[1]))),-w[2]))),-y[3]),c(f(f(c(f(c(a(ut,vt),y[1]),f(c(a(It,Mt),-b[1]),c(a(Tt,ht),w[1]))),v[2]),c(f(c(a(ut,vt),v[1]),f(c(a(Vt,G),-b[1]),c(a(bt,F),w[1]))),-y[2])),f(c(f(c(a(It,Mt),v[1]),f(c(a(Vt,G),-y[1]),c(a(et,N),w[1]))),b[2]),c(f(c(a(Tt,ht),v[1]),f(c(a(bt,F),-y[1]),c(a(et,N),b[1]))),-w[2]))),A[3])),f(c(f(f(c(f(c(a(Bt,st),y[1]),f(c(a(It,Mt),-A[1]),c(a(tt,Q),w[1]))),v[2]),c(f(c(a(Bt,st),v[1]),f(c(a(Vt,G),-A[1]),c(a(J,O),w[1]))),-y[2])),f(c(f(c(a(It,Mt),v[1]),f(c(a(Vt,G),-y[1]),c(a(et,N),w[1]))),A[2]),c(f(c(a(tt,Q),v[1]),f(c(a(J,O),-y[1]),c(a(et,N),A[1]))),-w[2]))),-b[3]),c(f(f(c(f(c(a(Pt,lt),y[1]),f(c(a(Tt,ht),-A[1]),c(a(tt,Q),b[1]))),v[2]),c(f(c(a(Pt,lt),v[1]),f(c(a(bt,F),-A[1]),c(a(J,O),b[1]))),-y[2])),f(c(f(c(a(Tt,ht),v[1]),f(c(a(bt,F),-y[1]),c(a(et,N),b[1]))),A[2]),c(f(c(a(tt,Q),v[1]),f(c(a(J,O),-y[1]),c(a(et,N),A[1]))),-b[2]))),w[3]))))),zt=a(ft,Ut);return zt[zt.length-1]}return C}var T=[u,h,d];function x(f){var a=T[f.length];return a||(a=T[f.length]=l(f.length)),a.apply(void 0,f)}function _(f,a,M,c,C,v,y,A){function b(w,R,U,N,O,F){switch(arguments.length){case 0:case 1:return 0;case 2:return c(w,R);case 3:return C(w,R,U);case 4:return v(w,R,U,N);case 5:return y(w,R,U,N,O);case 6:return A(w,R,U,N,O,F)}for(var G=new Array(arguments.length),H=0;H<arguments.length;++H)G[H]=arguments[H];return f(G)}return b}function E(){for(;T.length<=o;)T.push(l(T.length));t.exports=_.apply(void 0,[x].concat(T));for(var f=0;f<=o;++f)t.exports[f]=T[f]}E()}}),IM=nn({"node_modules/cdt2d/lib/delaunay.js"(i,t){var e=DM()[4];ia(),t.exports=r;function n(s,o,l,u,h,d){var g=o.opposite(u,h);if(!(g<0)){if(h<u){var p=u;u=h,h=p,p=d,d=g,g=p}o.isConstraint(u,h)||e(s[u],s[h],s[d],s[g])<0&&l.push(u,h)}}function r(s,o){for(var l=[],u=s.length,h=o.stars,d=0;d<u;++d)for(var g=h[d],p=1;p<g.length;p+=2){var m=g[p];if(!(m<d)&&!o.isConstraint(d,m)){for(var S=g[p-1],T=-1,x=1;x<g.length;x+=2)if(g[x-1]===m){T=g[x];break}T<0||e(s[d],s[m],s[S],s[T])<0&&l.push(d,m)}}for(;l.length>0;){for(var m=l.pop(),d=l.pop(),S=-1,T=-1,g=h[d],_=1;_<g.length;_+=2){var E=g[_-1],f=g[_];E===m?T=f:f===m&&(S=E)}S<0||T<0||e(s[d],s[m],s[S],s[T])>=0||(o.flip(d,m),n(s,o,l,S,d,T),n(s,o,l,d,T,S),n(s,o,l,T,m,S),n(s,o,l,m,S,T))}}}}),LM=nn({"node_modules/cdt2d/lib/filter.js"(i,t){var e=ia();t.exports=u;function n(h,d,g,p,m,S,T){this.cells=h,this.neighbor=d,this.flags=p,this.constraint=g,this.active=m,this.next=S,this.boundary=T}var r=n.prototype;function s(h,d){return h[0]-d[0]||h[1]-d[1]||h[2]-d[2]}r.locate=(function(){var h=[0,0,0];return function(d,g,p){var m=d,S=g,T=p;return g<p?g<d&&(m=g,S=p,T=d):p<d&&(m=p,S=d,T=g),m<0?-1:(h[0]=m,h[1]=S,h[2]=T,e.eq(this.cells,h,s))}})();function o(h,d){for(var g=h.cells(),p=g.length,m=0;m<p;++m){var S=g[m],T=S[0],x=S[1],_=S[2];x<_?x<T&&(S[0]=x,S[1]=_,S[2]=T):_<T&&(S[0]=_,S[1]=T,S[2]=x)}g.sort(s);for(var E=new Array(p),m=0;m<E.length;++m)E[m]=0;var f=[],a=[],M=new Array(3*p),c=new Array(3*p),C=null;d&&(C=[]);for(var v=new n(g,M,c,E,f,a,C),m=0;m<p;++m)for(var S=g[m],y=0;y<3;++y){var T=S[y],x=S[(y+1)%3],A=M[3*m+y]=v.locate(x,T,h.opposite(x,T)),b=c[3*m+y]=h.isConstraint(T,x);A<0&&(b?a.push(m):(f.push(m),E[m]=1),d&&C.push([x,T,-1]))}return v}function l(h,d,g){for(var p=0,m=0;m<h.length;++m)d[m]===g&&(h[p++]=h[m]);return h.length=p,h}function u(h,d,g){var p=o(h,g);if(d===0)return g?p.cells.concat(p.boundary):p.cells;for(var m=1,S=p.active,T=p.next,x=p.flags,_=p.cells,E=p.constraint,f=p.neighbor;S.length>0||T.length>0;){for(;S.length>0;){var a=S.pop();if(x[a]!==-m){x[a]=m,_[a];for(var M=0;M<3;++M){var c=f[3*a+M];c>=0&&x[c]===0&&(E[3*a+M]?T.push(c):(S.push(c),x[c]=m))}}}var C=T;T=S,S=C,T.length=0,m=-m}var v=l(_,x,d);return g?v.concat(p.boundary):v}}}),UM=nn({"node_modules/cdt2d/cdt2d.js"(i,t){var e=CM(),n=PM(),r=IM(),s=LM();t.exports=d;function o(g){return[Math.min(g[0],g[1]),Math.max(g[0],g[1])]}function l(g,p){return g[0]-p[0]||g[1]-p[1]}function u(g){return g.map(o).sort(l)}function h(g,p,m){return p in g?g[p]:m}function d(g,p,m){Array.isArray(p)?(m=m||{},p=p||[]):(m=p||{},p=[]);var S=!!h(m,"delaunay",!0),T=!!h(m,"interior",!0),x=!!h(m,"exterior",!0),_=!!h(m,"infinity",!1);if(!T&&!x||g.length===0)return[];var E=e(g,p);if(S||T!==x||_){for(var f=n(g.length,u(p)),a=0;a<E.length;++a){var M=E[a];f.addTriangle(M[0],M[1],M[2])}return S&&r(g,f),x?T?_?s(f,0,_):f.cells():s(f,1,_):s(f,-1)}else return E}}});const NM=UM();class Yi{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}const Dh=1e-16,FM=1e-16,Hi=new L,Ih=new L,Lh=new Yi(()=>({param:0,index:0})),OM=new Yi(()=>new L);function BM(i,t,e,n){Lh.clear(),t.length=0,e.length=0;for(let h=0,d=i.length;h<d;h++){const g=i[h];u(g.start),u(g.end)}for(let h=0,d=i.length;h<d;h++){const g=i[h];for(let p=h+1;p<d;p++){const m=i[p];g.distanceSqToLine3(m,Hi,Ih)<Dh*n&&u(Ih)}}const r=[];for(let h=0,d=i.length;h<d;h++){r.length=0;const g=i[h];for(let p=0,m=t.length;p<m;p++){const S=t[p],T=g.closestPointToPointParameter(S,!0);if(g.at(T,Hi),S.distanceToSquared(Hi)<Dh*n){const x=Lh.getInstance();x.param=T,x.index=p,r.push(x)}}r.sort(l);for(let p=0,m=r.length-1;p<m;p++){const S=r[p].index,T=r[p+1].index;S!==T&&e.push([S,T])}}const s=new Set;let o=0;for(let h=0,d=e.length;h<d;h++){const g=e[h],p=Math.min(g[0],g[1]),m=Math.max(g[0],g[1]),S=p+","+m;s.has(S)||(s.add(S),e[o++]=g)}e.length=o;function l(h,d){return h.param-d.param}function u(h){for(let d=0;d<t.length;d++){const g=t[d];if(h===g||h.distanceToSquared(g)<FM*n)return d}return t.push(OM.getInstance().copy(h)),t.length-1}}class Uh{constructor(){this.trianglePool=new Yi(()=>new $e),this.linePool=new Yi(()=>new we),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new L,this.projOrigin=new L,this.projU=new L,this.projV=new L,this.baseTri=new $e,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,r=null){this.reset();const{normal:s,baseTri:o,projU:l,projV:u,projOrigin:h,constrainedEdges:d,linePool:g,baseIndices:p}=this;t.getNormal(s),o.copy(t),o.update(),p[0]=e,p[1]=n,p[2]=r,d.length=0;const m=g.getInstance();m.start.copy(o.a),m.end.copy(o.b);const S=g.getInstance();S.start.copy(o.b),S.end.copy(o.c);const T=g.getInstance();T.start.copy(o.c),T.end.copy(o.a),d.push(m,S,T),h.copy(o.a),l.subVectors(o.b,o.a).normalize(),u.crossVectors(s,l).normalize()}addConstraintEdge(t){const{constrainedEdges:e,linePool:n}=this,r=n.getInstance().copy(t);e.push(r)}_to2D(t,e){const{projOrigin:n,projU:r,projV:s}=this;return Hi.subVectors(t,n),e.set(Hi.dot(r),Hi.dot(s),0)}_from2D(t,e,n){const{projOrigin:r,projU:s,projV:o}=this;return n.copy(r).addScaledVector(s,t).addScaledVector(o,e),n}triangulate(){const{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:l,baseIndices:u}=this;t.length=0,e.clear();const h=[];for(let _=0,E=l.length;_<E;_++){const f=l[_],a=s.getInstance();this._to2D(f.start,a.start),this._to2D(f.end,a.end),h.push(a)}let d=0;for(let _=0;_<3;_++){const E=this._to2D(o.points[_],Hi);d=Math.max(d,Math.abs(E.x),Math.abs(E.y))}const g=[],p=[];BM(h,g,p,d);const m=[];for(let _=0,E=g.length;_<E;_++){const f=g[_];m.push([f.x,f.y])}const S=NM(m,p,{exterior:!1}),T=new Map;for(let _=0,E=p.length;_<E;_++){const f=p[_];T.set(`${f[0]}_${f[1]}`,-1),T.set(`${f[1]}_${f[0]}`,-1)}const x=`${u[0]}_${u[1]}_${u[2]}_`;for(let _=0,E=S.length;_<E;_++){const f=S[_],[a,M,c]=f,C=e.getInstance();this._from2D(m[a][0],m[a][1],C.a),this._from2D(m[M][0],m[M][1],C.b),this._from2D(m[c][0],m[c][1],C.c),t.push(C);const v=[];n.push(v);const y=[];r.push(y);for(let A=0;A<3;A++){const b=f[A];y.push(b<3?u[b]:x+b);const w=f[(A+1)%3],R=`${b}_${w}`;if(T.has(R)){const U=T.get(R);U!==-1&&(v.push(U),n[U].push(_))}else{const U=`${w}_${b}`;T.set(U,_)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}}const zM=1e-14,ic=new L,Nh=new L,Fh=new L;function xi(i,t=zM){ic.subVectors(i.b,i.a),Nh.subVectors(i.c,i.a),Fh.subVectors(i.b,i.c);const e=ic.angleTo(Nh),n=ic.angleTo(Fh),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}const rc=1e-10,os=1e-10,qn=new we,pe=new we,Yn=new L,Oh=new L,Bh=new L,_o=new Qe,sc=new $e;class zh{constructor(){this.trianglePool=new Yi(()=>new le),this.triangles=[],this.normal=new L}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){const l=t[s];if(s===0)l.getNormal(r);else if(Math.abs(1-l.getNormal(Yn).dot(r))>rc)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const u=n.getInstance();u.copy(l),e.push(u)}else{t.getNormal(r);const s=n.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){const{triangles:n}=this;if(e){for(let s=0,o=n.length;s<o;s++){const l=n[s];l.coplanarCount=0}const r=[t.a,t.b,t.c];for(let s=0;s<3;s++){const o=(s+1)%3,l=r[s],u=r[o];t.getNormal(Oh).normalize(),Yn.subVectors(u,l).normalize(),Bh.crossVectors(Oh,Yn),_o.setFromNormalAndCoplanarPoint(Bh,l),this.splitByPlane(_o,t)}}else t.getPlane(_o),this.splitByPlane(_o,t)}splitByPlane(t,e){const{triangles:n,trianglePool:r}=this;sc.copy(e),sc.needsUpdate=!0;for(let s=0,o=n.length;s<o;s++){const l=n[s];if(!sc.intersectsTriangle(l,qn,!0))continue;const{a:u,b:h,c:d}=l;let g=0,p=-1,m=!1,S=[],T=[];const x=[u,h,d];for(let _=0;_<3;_++){const E=(_+1)%3;qn.start.copy(x[_]),qn.end.copy(x[E]);const f=t.distanceToPoint(qn.start),a=t.distanceToPoint(qn.end);if(Math.abs(f)<os&&Math.abs(a)<os){m=!0;break}if(f>0?S.push(_):T.push(_),Math.abs(f)<os)continue;let M=!!t.intersectLine(qn,Yn);!M&&Math.abs(a)<os&&(Yn.copy(qn.end),M=!0),M&&!(Yn.distanceTo(qn.start)<rc)&&(Yn.distanceTo(qn.end)<rc&&(p=_),g===0?pe.start.copy(Yn):pe.end.copy(Yn),g++)}if(!m&&g===2&&pe.distance()>os)if(p!==-1){p=(p+1)%3;let _=0;_===p&&(_=(_+1)%3);let E=_+1;E===p&&(E=(E+1)%3);const f=r.getInstance();f.a.copy(x[E]),f.b.copy(pe.end),f.c.copy(pe.start),xi(f)||n.push(f),l.a.copy(x[_]),l.b.copy(pe.start),l.c.copy(pe.end),xi(l)&&(n.splice(s,1),s--,o--)}else{const _=S.length>=2?T[0]:S[0];if(_===0){let c=pe.start;pe.start=pe.end,pe.end=c}const E=(_+1)%3,f=(_+2)%3,a=r.getInstance(),M=r.getInstance();x[E].distanceToSquared(pe.start)<x[f].distanceToSquared(pe.end)?(a.a.copy(x[E]),a.b.copy(pe.start),a.c.copy(pe.end),M.a.copy(x[E]),M.b.copy(x[f]),M.c.copy(pe.start)):(a.a.copy(x[f]),a.b.copy(pe.start),a.c.copy(pe.end),M.a.copy(x[E]),M.b.copy(x[f]),M.c.copy(pe.end)),l.a.copy(x[_]),l.b.copy(pe.end),l.c.copy(pe.start),xi(a)||n.push(a),xi(M)||n.push(M),xi(l)&&(n.splice(s,1),s--,o--)}else g===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}}class Vh{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){const{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),n&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){const{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}}const VM=0,xl=1,kM=2,GM=3,HM=4,rd=5,sd=6,oc=1e-10,WM=1e-15,XM=1e-10,qM=1e-10,kh=new we,Sr=new we,Gh=new L,Hh=new L,Wh=new L,ac=new Qe,wr=new L,Wo=new L;function YM(i,t){i.getNormal(wr),t.getNormal(Wo);const e=wr.dot(Wo);if(Math.abs(1-Math.abs(e))>=XM)return!1;const n=wr.dot(i.a),r=wr.dot(t.a);return Math.abs(n-r)<qM}function Xh(i,t,e,n){let r=0,s=1;i.delta(Gh);const o=[t.a,t.b,t.c];for(let l=0;l<3;l++){const u=o[l],h=o[(l+1)%3];Hh.subVectors(h,u),Wh.crossVectors(e,Hh),ac.setFromNormalAndCoplanarPoint(Wh,u);const d=ac.distanceToPoint(i.start),g=ac.normal.dot(Gh);if(Math.abs(g)<WM){if(d<-oc)return null;continue}const p=-d/g;if(g>0?r=Math.max(r,p):s=Math.min(s,p),r>s+oc)return null}return s-r<oc?null:(i.at(r,n.start),i.at(s,n.end),n)}function qh(i,t,e){let n=0;i.getNormal(wr),t.getNormal(Wo);const r=[t.a,t.b,t.c];for(let o=0;o<3;o++){Sr.start.copy(r[o]),Sr.end.copy(r[(o+1)%3]);const l=Xh(Sr,i,wr,kh);l!==null&&(n>=e.length&&e.push(new we),e[n].copy(l),n++)}const s=[i.a,i.b,i.c];for(let o=0;o<3;o++){Sr.start.copy(s[o]),Sr.end.copy(s[(o+1)%3]);const l=Xh(Sr,t,Wo,kh);l!==null&&(n>=e.length&&e.push(new we),e[n].copy(l),n++)}return n}const yr=new Gr,Yh=new Zt,xo=new we,cc=[],vo=new Yi(()=>new we),Er=-1,br=1,Lo=-2,Uo=2,fs=0,Fi=1,Xl=2;let No=null;function $h(i){No=i}function od(i,t,e=null){i.getMidpoint(yr.origin),i.getNormal(yr.direction),e&&(yr.origin.applyMatrix4(e),yr.direction.transformDirection(e));const n=t.raycastFirst(yr,Mn);return!!(n&&yr.direction.dot(n.face.normal)>0)?Er:br}function $M(i,t){const e=new Vh,n=new Vh;return vo.clear(),Yh.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,Yh,{intersectsTriangles(r,s,o,l){if(!xi(r)&&!xi(s)){const h=(YM(r,s)?qh(r,s,cc):0)>2;if(h||r.intersectsTriangle(s,xo,!0)){const g=i.geometry.boundsTree.resolveTriangleIndex(o),p=t.geometry.boundsTree.resolveTriangleIndex(l);if(e.add(g,p,h),n.add(p,g,h),h){const m=qh(r,s,cc);for(let S=0;S<m;S++){const T=vo.getInstance().copy(cc[S]);e.addIntersectionEdge(g,T),n.addIntersectionEdge(p,T)}}else{const m=vo.getInstance().copy(xo),S=vo.getInstance().copy(xo);e.addIntersectionEdge(g,m),n.addIntersectionEdge(p,S)}No&&(No.addEdge(xo),No.addIntersectingTriangles(o,r,l,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function ad(i,t,e=!1){switch(i){case VM:if(t===br||t===Uo&&!e)return Fi;break;case xl:if(e){if(t===Er)return fs}else if(t===br||t===Lo)return Fi;break;case kM:if(e){if(t===br||t===Lo)return Fi}else if(t===Er)return fs;break;case HM:if(t===Er)return fs;if(t===br)return Fi;break;case GM:if(t===Er||t===Uo&&!e)return Fi;break;case rd:if(!e&&(t===br||t===Lo))return Fi;break;case sd:if(!e&&(t===Er||t===Uo))return Fi;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return Xl}class ZM{constructor(t){this.triangle=new le().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new le().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class Zh{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){const{data:s}=this;s[t]||(s[t]=new ZM(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,r=new Set,s=[],o=l=>{if(n[l])if(e!==null)n[l].intersects[e]&&s.push(n[l].intersects[e]);else{const u=n[l].intersects;for(const h in u)r.has(h)||(r.add(h),s.push(u[h]))}};if(t!==null)o(t);else for(const l in n)o(l);return s}reset(){this.data={}}}class jM{constructor(){this.enabled=!1,this.triangleIntersectsA=new Zh,this.triangleIntersectsB=new Zh,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){const{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,n,r),o.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),$h(this))}complete(){this.enabled&&$h(null)}}const Je=new Zt,Oi=new Zt,qe=new Zt,pi=new Xt,_n=new le,Bi=new le,xn=new le,fi=new le,Wi=[],Rn=[],Mo=new Set,jh=new L,Kh=new L,Jh=new Yi(()=>new le),Qh=new L,So=[];function KM(i,t,e,n,r,s={}){const{useGroups:o=!0}=s,{aIntersections:l,bIntersections:u}=$M(i,t),h=[];let d=null,g;return g=o?0:-1,ef(i,t,l,e,!1,r,g),tf(i,t,l,e,!1,n,r,g),e.findIndex(m=>m!==sd&&m!==rd)!==-1&&(r.forEach(m=>m.clearIndexMap()),g=o?i.geometry.groups.length||1:-1,ef(t,i,u,e,!0,r,g),tf(t,i,u,e,!0,n,r,g)),r.forEach(m=>m.clearIndexMap()),Wi.length=0,{groups:h,materials:d}}function tf(i,t,e,n,r,s,o,l=0){Je.copy(t.matrixWorld).invert().multiply(i.matrixWorld),Oi.copy(Je).invert(),r?qe.copy(Je):qe.identity();const u=qe.determinant()<0;pi.getNormalMatrix(qe).multiplyScalar(u?-1:1);const h=i.geometry.groupIndices,d=i.geometry.index,g=i.geometry.attributes.position,p=t.geometry.boundsTree,m=t.geometry.index,S=t.geometry.attributes.position,T=e.ids;for(let x=0,_=T.length;x<_;x++){const E=T[x],f=l===-1?0:h[E]+l,a=3*E;let M=a+0,c=a+1,C=a+2;d&&(M=d.getX(M),c=d.getX(c),C=d.getX(C)),_n.a.fromBufferAttribute(g,M),_n.b.fromBufferAttribute(g,c),_n.c.fromBufferAttribute(g,C),r&&(_n.a.applyMatrix4(Je),_n.b.applyMatrix4(Je),_n.c.applyMatrix4(Je)),s.reset(),s.initialize(_n,M,c,C),So.length=0,Jh.clear(),_n.getNormal(Kh);const v=e.coplanarSet.get(E);if(v)for(const w of v){const R=3*w;let U=R+0,N=R+1,O=R+2;m&&(U=m.getX(U),N=m.getX(N),O=m.getX(O));const F=Jh.getInstance();F.a.fromBufferAttribute(S,U),F.b.fromBufferAttribute(S,N),F.c.fromBufferAttribute(S,O),r||(F.a.applyMatrix4(Oi),F.b.applyMatrix4(Oi),F.c.applyMatrix4(Oi)),So.push(F)}if(s.addConstraintEdge){const w=e.getIntersectionEdges(E);if(w)for(const R of w)s.addConstraintEdge(R);s.triangulate()}else{const R=e.intersectionSet.get(E);for(let U=0,N=R.length;U<N;U++){const O=R[U],F=v&&v.has(O),G=3*O;let H=G+0,nt=G+1,et=G+2;m&&(H=m.getX(H),nt=m.getX(nt),et=m.getX(et)),Bi.a.fromBufferAttribute(S,H),Bi.b.fromBufferAttribute(S,nt),Bi.c.fromBufferAttribute(S,et),r||(Bi.a.applyMatrix4(Oi),Bi.b.applyMatrix4(Oi),Bi.c.applyMatrix4(Oi)),s.splitByTriangle(Bi,F)}}const{triangles:y,triangleIndices:A=[],triangleConnectivity:b=[]}=s;for(let w=0,R=o.length;w<R;w++)o[w].initInterpolatedAttributeData(i.geometry,qe,pi,M,c,C);Mo.clear();for(let w=0,R=y.length;w<R;w++){if(Mo.has(w))continue;const U=y[w],N=r?null:Je;let O=null;U.getMidpoint(jh);for(let F=0,G=So.length;F<G;F++){const H=So[F];if(H.containsPoint(jh)){H.getNormal(Qh),O=Kh.dot(Qh)>0?Uo:Lo;break}}O===null&&(O=od(U,p,N)),Wi.length=0,Rn.length=0;for(let F=0,G=n.length;F<G;F++){const H=ad(n[F],O,r);H!==Xl&&(Wi.push(H),Rn.push(o[F]))}if(Rn.length!==0){const F=[w];for(;F.length>0;){const G=F.pop();if(Mo.has(G))continue;Mo.add(G);const H=A[G];let nt=null,et=null,Q=null;H&&(nt=H[0],et=H[1],Q=H[2]);const ht=y[G];_n.getBarycoord(ht.a,fi.a),_n.getBarycoord(ht.b,fi.b),_n.getBarycoord(ht.c,fi.c);for(let Mt=0,xt=Rn.length;Mt<xt;Mt++){const $=Rn[Mt],tt=Wi[Mt]===fs,lt=u!==tt;$.appendInterpolatedAttributeData(f,fi.a,nt,lt),lt?($.appendInterpolatedAttributeData(f,fi.c,Q,lt),$.appendInterpolatedAttributeData(f,fi.b,et,lt)):($.appendInterpolatedAttributeData(f,fi.b,et,lt),$.appendInterpolatedAttributeData(f,fi.c,Q,lt))}}}}}return T.length}function ef(i,t,e,n,r,s,o=0){Je.copy(t.matrixWorld).invert().multiply(i.matrixWorld),r?qe.copy(Je):qe.identity();const l=qe.determinant()<0;pi.getNormalMatrix(qe).multiplyScalar(l?-1:1);const u=t.geometry.boundsTree,h=i.geometry.groupIndices,d=i.geometry.index,p=i.geometry.attributes.position,m=[],S=i.geometry.halfEdges,T=new Set(e.ids),x=Hl(i.geometry);for(let _=0;_<x&&T.size!==x;_++){if(T.has(_))continue;T.add(_),m.push(_);const E=3*_;let f=E+0,a=E+1,M=E+2;d&&(f=d.getX(f),a=d.getX(a),M=d.getX(M)),xn.a.fromBufferAttribute(p,f),xn.b.fromBufferAttribute(p,a),xn.c.fromBufferAttribute(p,M),r&&(xn.a.applyMatrix4(Je),xn.b.applyMatrix4(Je),xn.c.applyMatrix4(Je));const c=od(xn,u,r?null:Je);Wi.length=0,Rn.length=0;for(let C=0,v=n.length;C<v;C++){const y=ad(n[C],c,r);y!==Xl&&(Wi.push(y),Rn.push(s[C]))}for(;m.length>0;){const C=m.pop();for(let v=0;v<3;v++){const y=S.getSiblingTriangleIndex(C,v);y!==-1&&!T.has(y)&&(m.push(y),T.add(y))}if(Rn.length!==0){const v=3*C;let y=v+0,A=v+1,b=v+2;d&&(y=d.getX(y),A=d.getX(A),b=d.getX(b));const w=o===-1?0:h[C]+o;if(xn.a.fromBufferAttribute(p,y),xn.b.fromBufferAttribute(p,A),xn.c.fromBufferAttribute(p,b),!xi(xn))for(let R=0,U=Rn.length;R<U;R++){const N=Rn[R],G=Wi[R]===fs!==l;N.appendIndexFromGeometry(i.geometry,qe,pi,w,y,G),G?(N.appendIndexFromGeometry(i.geometry,qe,pi,w,b,G),N.appendIndexFromGeometry(i.geometry,qe,pi,w,A,G)):(N.appendIndexFromGeometry(i.geometry,qe,pi,w,A,G),N.appendIndexFromGeometry(i.geometry,qe,pi,w,b,G))}}}}}function JM(i){return i=~~i,i+4-i%4}class QM{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=td()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(JM(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}}const Xe=new L,lc=new L,uc=new L,hc=new L,yo=new ae,tS=new ae,eS=new ae,nS=new ae;function iS(i,t,e,n,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(i,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function nf(i,t,e){switch(t){case 1:e.push(i.x);break;case 2:e.push(i.x,i.y);break;case 3:e.push(i.x,i.y,i.z);break;case 4:e.push(i.x,i.y,i.z,i.w);break}}class fc extends QM{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}}class rS{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();const{attributeData:n}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){const l=e[s],u=r[l],h=u.array.constructor;n[l]||(n[l]=new fc(h)),n[l].setType(h),n[l].itemSize=u.itemSize,n[l].normalized=u.normalized}for(const s in n.attributes)e.includes(s)||n.delete(s)}initInterpolatedAttributeData(t,e,n,r,s,o){const{attributeData:l,interpolatedFields:u}=this,{attributes:h}=t;for(const d in l){const g=h[d];if(!g)throw new Error(`CSG Operations: Attribute ${d} not available on geometry.`);let p,m,S;if(d==="position"?(p=lc.fromBufferAttribute(g,r).applyMatrix4(e),m=uc.fromBufferAttribute(g,s).applyMatrix4(e),S=hc.fromBufferAttribute(g,o).applyMatrix4(e)):d==="normal"?(p=lc.fromBufferAttribute(g,r).applyNormalMatrix(n),m=uc.fromBufferAttribute(g,s).applyNormalMatrix(n),S=hc.fromBufferAttribute(g,o).applyNormalMatrix(n)):d==="tangent"?(p=lc.fromBufferAttribute(g,r).transformDirection(e),m=uc.fromBufferAttribute(g,s).transformDirection(e),S=hc.fromBufferAttribute(g,o).transformDirection(e)):(p=tS.fromBufferAttribute(g,r),m=eS.fromBufferAttribute(g,s),S=nS.fromBufferAttribute(g,o)),!u[d])u[d]=[p.clone(),m.clone(),S.clone()];else{const T=u[d];T[0].copy(p),T[1].copy(m),T[2].copy(S)}}}appendInterpolatedAttributeData(t,e,n=null,r=!1){const{groupIndices:s,attributeData:o,interpolatedFields:l,forwardIndexMap:u,invertedIndexMap:h}=this;for(;s.length<=t;)s.push(new fc(Uint32Array));const d=r?h:u,g=s[t];if(n!==null&&d.has(n))g.push(d.get(n));else{d.set(n,o.position.count),g.push(o.position.count);for(const p in l){const m=o[p],S=p==="normal"||p==="tangent",T=r&&S,x=m.itemSize,[_,E,f]=l[p];iS(_,E,f,e,yo,S,T),nf(yo,x,m)}}}appendIndexFromGeometry(t,e,n,r,s,o=!1){const{groupIndices:l,attributeData:u,forwardIndexMap:h,invertedIndexMap:d}=this;for(;l.length<=r;)l.push(new fc(Uint32Array));const g=o?d:h,p=l[r];if(s!==null&&g.has(s))p.push(g.get(s));else{g.set(s,u.position.count),p.push(u.position.count);const{attributes:m}=t;for(const S in u){const T=u[S],x=m[S];if(!x)throw new Error(`CSG Operations: Attribute ${S} not available on geometry.`);const _=x.itemSize;S==="position"?(Xe.fromBufferAttribute(x,s).applyMatrix4(e),T.push(Xe.x,Xe.y,Xe.z)):S==="normal"?(Xe.fromBufferAttribute(x,s).applyNormalMatrix(n),o&&Xe.multiplyScalar(-1),T.push(Xe.x,Xe.y,Xe.z)):S==="tangent"?(Xe.fromBufferAttribute(x,s).transformDirection(e),o&&Xe.multiplyScalar(-1),T.push(Xe.x,Xe.y,Xe.z)):(yo.fromBufferAttribute(x,s),nf(yo,_,T))}}}buildGeometry(t,e){let n=!1;const{groupIndices:r,attributeData:s}=this,{attributes:o,index:l}=t;for(const d in s){const g=s[d],{type:p,itemSize:m,normalized:S,length:T,count:x}=g,_=g.array.buffer;let E=o[d];(!E||E.count<x||E.array.type!==p)&&(E=new Ye(new p(T),m,S),t.setAttribute(d,E),n=!0),E.array.set(new p(_,0,T),0),E.needsUpdate=!0}const u=r.reduce((d,g)=>g.count+d,0);(!t.index||l.count<u||l.array.type!==Uint32Array)&&(t.setIndex(new Ye(new Uint32Array(u),1)),n=!0),t.clearGroups();let h=0;for(let d=0,g=Math.min(e.length,r.length);d<g;d++){const{index:p,materialIndex:m}=e[d],{count:S}=r[p],T=r[p].array.buffer;S!==0&&(t.index.array.set(new Uint32Array(T,0,S),h),t.addGroup(h,S,m),h+=S)}t.setDrawRange(0,h),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){const{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(const n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}}function sS(i,t){for(const e in i.attributes)t.includes(e)||(i.deleteAttribute(e),i.dispose());return i}function oS(i,t){const e=[];for(let n=0,r=i.length;n<r;n++){const s=i[n],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function aS(i,t){const e=[],n=new Map;for(let r=0,s=i.length;r<s;r++){const o=i[r];n.has(o.materialIndex)||(n.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=n.get(o.materialIndex)}return e}function cS(i){for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){const r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function rf(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}class lS{get useCDTClipping(){return this.triangleSplitter instanceof Uh}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new Uh:new zh)}constructor(){this.triangleSplitter=new zh,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new jM}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,r=new hs){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,geometryBuilders:l,attributes:u,useGroups:h,consolidateGroups:d,removeUnusedMaterials:g,debug:p}=this;for(;l.length<r.length;)l.push(new rS);r.forEach((f,a)=>{l[a].initFromGeometry(t.geometry,u),sS(f.geometry,u)}),p.init(),KM(t,e,n,o,l,{useGroups:h}),p.complete();const m=this.getGroupRanges(t.geometry),S=rf(m,t.material),T=this.getGroupRanges(e.geometry),x=rf(T,e.material);T.forEach(f=>f.materialIndex+=S.length);const _=[...S,...x];let E=[...m,...T].map((f,a)=>({...f,index:a}));return h?h&&d&&(E=oS(E,_),E.sort((f,a)=>f.materialIndex-a.materialIndex)):E=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((f,a)=>{const M=f.geometry;l[a].buildGeometry(M,E),t.matrixWorld.decompose(f.position,f.quaternion,f.scale),f.updateMatrix(),f.matrixWorld.copy(t.matrixWorld),h?(f.material=_,d&&cS(M.groups),g&&(f.material=aS(M.groups,_))):f.material=_[0]}),s?r:r[0]}evaluateHierarchy(t,e=new hs){t.updateMatrixWorld(!0);const n=(s,o)=>{const l=s.children;for(let u=0,h=l.length;u<h;u++){const d=l[u];d.isOperationGroup?n(d,o):o(d)}},r=s=>{const o=s.children;let l=!1;for(let h=0,d=o.length;h<d;h++){const g=o[h];l=r(g)||l}const u=s.isDirty();if(u&&s.markUpdated(),l&&!s.isOperationGroup){let h;return n(s,d=>{h?h=this.evaluate(h,d,d.operation):h=this.evaluate(s,d,d.operation)}),s._cachedGeometry=h.geometry,s._cachedMaterials=h.material,!0}else return l||u};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}const Xo=[0,16,25,29],qo=[4,3,2,1],vi=30,ql=new Map;for(let i=1;i<4;i++){const t=qo[i],e=qo[i-1],n=Xo[i],r=Xo[i-1];for(let s=0;s<t;s++)for(let o=0;o<t;o++)ql.set(n+s*t+o,[r+s*e+o,r+s*e+o+1,r+(s+1)*e+o,r+(s+1)*e+o+1])}const cd=Array.from({length:vi},()=>[]);for(const[i,t]of ql)for(const e of t)cd[e].push(i);const ld=[];for(let i=0;i<4;i++){const t=qo[i],e=Xo[i],n=[];for(let r=0;r<t-1;r++)for(let s=0;s<t-1;s++)n.push([e+r*t+s,e+r*t+s+1,e+(r+1)*t+s,e+(r+1)*t+s+1]);ld.push(n)}function Fo(i){for(let t=3;t>=0;t--)if(i>=Xo[t])return t;return 0}const uS=Math.sqrt(2),Vr=[];{let i=0;for(let t=0;t<4;t++){const e=qo[t],n=1+t*uS,r=e-1;for(let s=0;s<e;s++)for(let o=0;o<e;o++)Vr[i]=[-r+o*2,-r+s*2,n],i++}}function ud(i){const t=i*8,e=[];for(let n=0;n<15;n++){const r=Math.floor(n/8),s=n%8;e.push([-7+s*2,t+i*r*2,1])}return e}class hS{constructor(){this.board=[],this.reserves=[15,15],this.currentPlayer=0,this.phase="place",this.takeBacksRemaining=0,this.done=!1,this.winner=-1,this.reset()}reset(){this.board=new Array(vi).fill(0),this.reserves=[15,15],this.currentPlayer=0,this.phase="place",this.takeBacksRemaining=0,this.done=!1,this.winner=-1}snapshot(){return{board:[...this.board],reserves:[...this.reserves],currentPlayer:this.currentPlayer,phase:this.phase,takeBacksRemaining:this.takeBacksRemaining,done:this.done,winner:this.winner}}restore(t){this.board=[...t.board],this.reserves=[...t.reserves],this.currentPlayer=t.currentPlayer,this.phase=t.phase,this.takeBacksRemaining=t.takeBacksRemaining,this.done=t.done,this.winner=t.winner}playerVal(t){return t+1}isSupported(t){return t<16?!0:ql.get(t).every(n=>this.board[n]!==0)}isUncovered(t){return cd[t].every(e=>this.board[e]===0)}formedSquare(t,e){const n=Fo(t);for(const r of ld[n])if(r.includes(t)&&r.every(s=>this.board[s]===e))return!0;return!1}legalPlaceActions(){const t=this.playerVal(this.currentPlayer),e=[];if(this.reserves[this.currentPlayer]>0)for(let n=0;n<vi;n++)this.board[n]===0&&this.isSupported(n)&&e.push(n);for(let n=0;n<vi;n++){if(this.board[n]!==t||!this.isUncovered(n))continue;const r=Fo(n);this.board[n]=0;for(let s=0;s<vi;s++)this.board[s]===0&&Fo(s)>r&&this.isSupported(s)&&e.push(30+n*30+s);this.board[n]=t}return e}legalTakeBackActions(){const t=[0],e=this.playerVal(this.currentPlayer);for(let n=0;n<vi;n++)this.board[n]===e&&this.isUncovered(n)&&t.push(n+1);return t}applyPlace(t){const e=this.playerVal(this.currentPlayer);let n;if(t<30)n=t,this.board[n]=e,this.reserves[this.currentPlayer]--;else{const r=t-30,s=Math.floor(r/30),o=r%30;this.board[s]=0,this.board[o]=e,n=o}return n===29?(this.done=!0,this.winner=this.currentPlayer,!1):this.formedSquare(n,e)?(this.phase="take_back",this.takeBacksRemaining=2,!0):(this.endTurn(),!1)}applyTakeBack(t){if(t===0)this.takeBacksRemaining=0;else{const e=t-1;this.board[e]=0,this.reserves[this.currentPlayer]++,this.takeBacksRemaining--}this.takeBacksRemaining<=0&&(this.phase="place",this.endTurn())}endTurn(){this.phase="place",this.currentPlayer=1-this.currentPlayer,this.legalPlaceActions().length===0&&(this.done=!0,this.winner=1-this.currentPlayer)}}function fS(i,t,e){const n=e===0?"Light":"Dark";if(t==="place"){if(i<30)return`${n} places at ${i} (L${Fo(i)})`;const r=i-30,s=Math.floor(r/30),o=r%30;return`${n} raises ${s} to ${o}`}return i===0?`${n} passes take-back`:`${n} takes back ${i-1}`}const ra=1,hd=ud(-1),fd=ud(1),rn=new $x({antialias:!0});rn.setPixelRatio(window.devicePixelRatio);rn.setSize(window.innerWidth,window.innerHeight);rn.shadowMap.enabled=!0;rn.shadowMap.type=ff;rn.toneMapping=El;rn.toneMappingExposure=1.4;document.body.appendChild(rn.domElement);const En=new wp;En.background=new te(2763314);const bi=new un(45,window.innerWidth/window.innerHeight,.5,200);bi.position.set(18,-18,18);const yn=new jx(bi,rn.domElement);yn.target.set(0,0,2);yn.enableDamping=!0;yn.dampingFactor=.12;yn.minDistance=10;yn.maxDistance=60;yn.maxPolarAngle=Math.PI*.48;yn.minPolarAngle=.1;yn.enabled=!1;window.addEventListener("resize",()=>{bi.aspect=window.innerWidth/window.innerHeight,bi.updateProjectionMatrix(),rn.setSize(window.innerWidth,window.innerHeight)});const sn=new Jo(16774624,1.6);sn.position.set(15,25,-10);sn.castShadow=!0;sn.shadow.mapSize.set(2048,2048);sn.shadow.camera.left=-15;sn.shadow.camera.right=15;sn.shadow.camera.top=15;sn.shadow.camera.bottom=-15;sn.shadow.camera.near=1;sn.shadow.camera.far=60;sn.shadow.bias=-.001;En.add(sn);En.add(sn.target);sn.target.position.set(0,0,2);const dd=new Jo(13687024,1);dd.position.set(-14,12,10);En.add(dd);const pd=new Jo(13158624,.7);pd.position.set(5,18,-15);En.add(pd);const gd=new Jo(15261904,.4);gd.position.set(0,3,0);En.add(gd);En.add(new $p(6316136,1.2));function Yl(i,t,e,n,r,s,o=512){const l=document.createElement("canvas");l.width=o,l.height=o;const u=l.getContext("2d");u.fillStyle=`rgb(${i},${t},${e})`,u.fillRect(0,0,o,o),u.globalAlpha=.35;for(let d=0;d<120;d++){const g=Math.random()*o,p=.5+Math.random()*2.5,m=.3+Math.random()*1.5,S=.005+Math.random()*.015,T=.7+Math.random()*.3;u.strokeStyle=`rgb(${n*T|0},${r*T|0},${s*T|0})`,u.lineWidth=p,u.beginPath();for(let x=0;x<o;x+=2){const _=g+Math.sin(x*S)*m*20+Math.sin(x*S*3.7)*m*5;x===0?u.moveTo(x,_):u.lineTo(x,_)}u.stroke()}u.globalAlpha=.06;for(let d=0;d<15e3;d++){const g=Math.random()*o,p=Math.random()*o,m=Math.random()>.5?255:0;u.fillStyle=`rgb(${m},${m},${m})`,u.fillRect(g,p,1.5,1.5)}const h=new Op(l);return h.wrapS=h.wrapT=Oo,h}const dS=Yl(180,155,120,120,90,55),pS=new Ko({map:dS,roughness:.55,metalness:0}),gS=Yl(70,38,22,35,15,5),mS=new Ko({map:gS,roughness:.5,metalness:0}),_S=new Ko({color:11193599,roughness:.1,transparent:!0,opacity:.3,depthWrite:!1}),md=Yl(160,120,75,100,65,30);md.repeat.set(2,2);const sf=new Ko({map:md,roughness:.45,metalness:0}),_d=new jo(ra,48,32),of=2.5,xS=.4,vS=18,MS=24,xd=ra,SS=16.5,yS=5,af=ra,dc=.5;function ES(){const i=new lS,t=new ko(vS,of,MS,4,xS);let e=new hs(t,sf);e.position.set(0,-of/2,0),e.updateMatrixWorld();const n=new jo(ra,24,16);for(let l=0;l<16;l++){const[u,h]=Vr[l],d=new hs(n);d.position.set(u,0,-h),d.updateMatrixWorld(),e=i.evaluate(e,d,xl)}const r=af+dc,s=new ko(SS,r,yS,4,dc);for(const l of[9,-9]){const u=new hs(s);u.position.set(0,-af/2+dc/2,l),u.updateMatrixWorld(),e=i.evaluate(e,u,xl)}const o=new en(e.geometry,sf);return o.position.y=xd,o.castShadow=!0,o.receiveShadow=!0,o}const bS=ES();En.add(bS);const gi=new en(_d,_S);gi.visible=!1;En.add(gi);const As=new Map;let TS=0;function $l(i,t,e){return new L(i,e,-t)}function cf(i,t){const e=new en(_d,t===0?pS:mS),n=$l(...i);e.position.copy(n),e.castShadow=!0,e.receiveShadow=!0,e.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),En.add(e);const r=TS++;return As.set(r,{mesh:e,player:t}),r}let Ms=[],Ss=[],mi=new Array(vi).fill(null);function AS(){Ms=hd.map(i=>cf(i,0)),Ss=fd.map(i=>cf(i,1))}AS();const ds=[];function pc(i,t,e=.8){const n=As.get(i),r=n.mesh.position.clone(),s=$l(...t),o=new L((r.x+s.x)/2,Math.max(r.y,s.y)+4,(r.z+s.z)/2);return new Promise(l=>{ds.push({mesh:n.mesh,start:r,mid:o,end:s,t:0,dur:e,resolve:l})})}function wS(i){for(let t=ds.length-1;t>=0;t--){const e=ds[t];e.t=Math.min(e.t+i/e.dur,1);const n=e.t,r=n<.5?2*n*n:1-Math.pow(-2*n+2,2)/2;if(r<.5){const s=r*2;e.mesh.position.lerpVectors(e.start,e.mid,s)}else{const s=(r-.5)*2;e.mesh.position.lerpVectors(e.mid,e.end,s)}e.t>=1&&(e.mesh.position.copy(e.end),ds.splice(t,1),e.resolve())}}const lf=new Kp,gc=new Ot,RS=new Qe(new L(0,1,0),-xd);let Rr=null;function CS(i){if(!Xi||ni){gi.visible=!1,Rr=null;return}gc.x=i.clientX/window.innerWidth*2-1,gc.y=-(i.clientY/window.innerHeight)*2+1,lf.setFromCamera(gc,bi);const t=new L;if(lf.ray.intersectPlane(RS,t),!t){gi.visible=!1,Rr=null;return}const e=t.x,n=-t.z,r=PS();let s=null,o=1.8;for(const l of r){const[u,h]=Vr[l],d=Math.hypot(u-e,h-n);d<o&&(o=d,s=l)}if(s!==null){const[l,u,h]=Vr[s];gi.position.copy($l(l,u,h)),gi.visible=!0,gi.material.opacity=.25+.08*Math.sin(performance.now()*.003),Rr=s}else gi.visible=!1,Rr=null}function PS(){const i=me,t=new Set;if(i.phase==="place"){const e=i.legalPlaceActions();for(const r of e)if(r<30)t.add(r);else{const s=r-30;t.add(Math.floor(s/30)),Cr&&vl===Math.floor(s/30)&&t.add(s%30)}const n=i.playerVal(kr);for(let r=0;r<vi;r++)i.board[r]===n&&i.isUncovered(r)&&t.add(r)}else for(const e of i.legalTakeBackActions())e>0&&t.add(e-1);return t}rn.domElement.addEventListener("mousemove",CS);rn.domElement.addEventListener("click",BS);const me=new hS;let kr=0,Xi=!1,ni=!1,Cr=!1,vl=-1,ps=null;const Pr=[],Yo=[],ys=[];function vd(){const i=new Map;for(const[t,e]of As)i.set(t,[e.mesh.position.x,e.mesh.position.y,e.mesh.position.z]);Pr.push({game:me.snapshot(),vis:{boardSlots:[...mi],reserveP0:[...Ms],reserveP1:[...Ss],ballPositions:i,moveLog:[...ys]}}),Yo.length=0}async function Md(i,t){me.restore(i.game),mi=[...i.vis.boardSlots],Ms=[...i.vis.reserveP0],Ss=[...i.vis.reserveP1],ys.length=0,ys.push(...i.vis.moveLog),Sd();const e=[];for(const[n,r]of i.vis.ballPositions){const s=As.get(n),o=[s.mesh.position.x,s.mesh.position.y,s.mesh.position.z];Math.abs(o[0]-r[0])>.01||Math.abs(o[1]-r[1])>.01||Math.abs(o[2]-r[2])>.01?e.push(DS(n,new L(r[0],r[1],r[2]),.5)):s.mesh.position.set(r[0],r[1],r[2])}e.length&&(ni=!0,await Promise.all(e),ni=!1)}function DS(i,t,e){const n=As.get(i),r=n.mesh.position.clone(),s=new L((r.x+t.x)/2,Math.max(r.y,t.y)+4,(r.z+t.z)/2);return new Promise(o=>{ds.push({mesh:n.mesh,start:r,mid:s,end:t,t:0,dur:e,resolve:o})})}const IS=document.getElementById("statusText"),LS=document.getElementById("undoBtn"),US=document.getElementById("redoBtn"),Ml=document.getElementById("passBtn"),ls=document.getElementById("logEntries"),uf=document.getElementById("logToggle");function Ur(i){IS.textContent=i}function Sd(){ls.innerHTML="";for(const i of ys.slice(-20)){const t=document.createElement("div");t.textContent=i,ls.appendChild(t)}ls.scrollTop=ls.scrollHeight}let Eo=!0;uf.addEventListener("click",()=>{Eo=!Eo,ls.style.display=Eo?"":"none",uf.textContent=Eo?"[-]":"[+]"});LS.addEventListener("click",NS);US.addEventListener("click",FS);Ml.addEventListener("click",()=>{Xi&&me.phase==="take_back"&&gs(0)});async function NS(){if(Pr.length<=1||ni)return;yd();const i=Pr.pop();Yo.push(i),await Md(Pr[Pr.length-1]),sa()}async function FS(){if(!Yo.length||ni)return;yd();const i=Yo.pop();Pr.push(i),await Md(i),sa()}function yd(){ps!==null&&(clearTimeout(ps),ps=null)}function sa(){if(ni=!1,Cr=!1,me.done){const e=me.winner===0?"Light":"Dark";Ur(`Game over! ${e} wins!`),Xi=!1,Ml.style.display="none";return}const i=me.currentPlayer,t=i===0?"Light":"Dark";Ml.style.display=me.phase==="take_back"&&i===kr?"":"none",i===kr?(Ur(me.phase==="take_back"?"Your turn: take back (or pass)":"Your turn: click a position"),Xi=!0):(Ur(`${t} thinking...`),Xi=!1,ps=window.setTimeout(OS,3e3))}function OS(){if(ps=null,me.done)return;const i=me.phase==="place"?me.legalPlaceActions():me.legalTakeBackActions();i.length&&gs(i[Math.floor(Math.random()*i.length)])}function BS(i){i.target===rn.domElement&&(!Xi||ni||Rr===null||zS(Rr))}function zS(i){const t=me;if(t.phase==="place"){const e=t.legalPlaceActions();if(e.includes(i)){gs(i);return}const n=t.playerVal(kr);if(t.board[i]===n&&t.isUncovered(i)){vl=i,Cr=!0,Ur(`Raise from ${i}: click destination`);return}if(Cr){const r=30+vl*30+i;if(e.includes(r)){Cr=!1,gs(r);return}Ur("Invalid raise destination"),Cr=!1;return}}else{const e=i+1;if(t.legalTakeBackActions().includes(e)){gs(e);return}}Ur("Invalid move")}async function gs(i){Xi=!1,ni=!0;const t=me.currentPlayer,e=me.phase;if(ys.push(fS(i,e,t)),Sd(),e==="place")if(i<30){const r=(t===0?Ms:Ss).pop();mi[i]=r,await pc(r,Vr[i]),me.applyPlace(i)}else{const n=i-30,r=Math.floor(n/30),s=n%30,o=mi[r];mi[r]=null,mi[s]=o,me.applyPlace(i),await pc(o,Vr[s])}else if(i===0)me.applyTakeBack(i);else{const n=i-1,r=mi[n];mi[n]=null;const s=t===0?Ms:Ss,o=t===0?hd:fd;s.push(r);const l=Math.min(s.length-1,o.length-1);me.applyTakeBack(i),await pc(r,o[l])}vd(),ni=!1,sa()}const VS=document.getElementById("setup"),Sl=document.getElementById("pickLight"),yl=document.getElementById("pickDark"),kS=document.getElementById("startBtn");Sl.addEventListener("click",()=>{kr=0,Sl.classList.add("selected"),yl.classList.remove("selected")});yl.addEventListener("click",()=>{kr=1,yl.classList.add("selected"),Sl.classList.remove("selected")});kS.addEventListener("click",()=>{VS.style.display="none",document.getElementById("gamePanel").style.display="",document.getElementById("logPanel").style.display="",yn.enabled=!0;const i=bi.position.clone(),t=new L(18,18,14),e=2e3,n=performance.now();function r(){const s=Math.min((performance.now()-n)/e,1),o=s<.5?2*s*s:1-Math.pow(-2*s+2,2)/2;bi.position.lerpVectors(i,t,o),yn.update(),s<1?requestAnimationFrame(r):(vd(),sa())}r()});let hf=performance.now();function Ed(){requestAnimationFrame(Ed);const i=performance.now(),t=(i-hf)/1e3;hf=i,wS(t),yn.update(),rn.render(En,bi)}Ed();
