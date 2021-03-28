(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{525:function(e,r,t){e.exports=t(534)(t(535))},532:function(e,r,t){(function(r){const n=t(186),c=t(184),o="aes-256-ctr";e.exports={encrypt:function(data,e){if((Array.isArray(data)||data instanceof Uint8Array)&&(data=r.from(data)),!r.isBuffer(data))throw new TypeError("Expected Buffer");if((Array.isArray(e)||e instanceof Uint8Array)&&(e=r.from(e)),!r.isBuffer(e))throw new TypeError("Expected Buffer");const t=n.sha384(e),l=c.createCipheriv(o,t.slice(0,32),t.slice(32,48)),f=l.update(data);return r.concat([f,l.final()])},decrypt:function(data,e){if((Array.isArray(data)||data instanceof Uint8Array)&&(data=r.from(data)),!r.isBuffer(data))throw new TypeError("Expected Buffer");if((Array.isArray(e)||e instanceof Uint8Array)&&(e=r.from(e)),!r.isBuffer(e))throw new TypeError("Expected Buffer");const t=n.sha384(e),l=c.createDecipheriv(o,t.slice(0,32),t.slice(32,48)),f=l.update(data);return r.concat([f,l.final()])}}}).call(this,t(9).Buffer)},533:function(e,r,t){(function(r){const n=t(103).ec,c=t(549).encrypt,o=t(549).decrypt,l=new n("secp256k1"),f=function(e,r){return c(r,e)},y=function(e,r){return o(r,e)},d=function(e,t){const n=l.keyFromPrivate(t);return r.from(n.sign(e).toDER())},h=function(e,r,t){return l.keyFromPublic(t).verify(e,r)};e.exports={encrypt:f,decrypt:y,sign:d,verify:h,encryptWithPublicKey:f,decryptWithPrivateKey:y,signByPrivateKey:d,verifySignatureWithPublicKey:h}}).call(this,t(9).Buffer)},534:function(e,r){const t="Impossible case. Please create issue.",n="The tweak was out of range or the resulted private key is invalid",c="The tweak was out of range or equal to zero",o="Unknow error on context randomization",l="Private Key is invalid",f="Public Key could not be parsed",y="Public Key serialization error",d="The sum of the public keys is not valid",h="Signature could not be parsed",w="The nonce generation function failed, or the private key was invalid",v="Public key could not be recover",m="Scalar was invalid (zero or overflow)";function K(e,r){if(!e)throw new Error(r)}function E(e,r,t){if(K(r instanceof Uint8Array,`Expected ${e} to be an Uint8Array`),void 0!==t)if(Array.isArray(t)){const n=`Expected ${e} to be an Uint8Array with length [${t.join(", ")}]`;K(t.includes(r.length),n)}else{const n=`Expected ${e} to be an Uint8Array with length ${t}`;K(r.length===t,n)}}function k(e){K("Boolean"===x(e),"Expected compressed to be a Boolean")}function A(output=(e=>new Uint8Array(e)),e){return"function"==typeof output&&(output=output(e)),E("output",output,e),output}function x(e){return Object.prototype.toString.call(e).slice(8,-1)}e.exports=e=>({contextRandomize(r){switch(K(null===r||r instanceof Uint8Array,"Expected seed to be an Uint8Array or null"),null!==r&&E("seed",r,32),e.contextRandomize(r)){case 1:throw new Error(o)}},privateKeyVerify:r=>(E("private key",r,32),0===e.privateKeyVerify(r)),privateKeyNegate(r){switch(E("private key",r,32),e.privateKeyNegate(r)){case 0:return r;case 1:throw new Error(t)}},privateKeyTweakAdd(r,t){switch(E("private key",r,32),E("tweak",t,32),e.privateKeyTweakAdd(r,t)){case 0:return r;case 1:throw new Error(n)}},privateKeyTweakMul(r,t){switch(E("private key",r,32),E("tweak",t,32),e.privateKeyTweakMul(r,t)){case 0:return r;case 1:throw new Error(c)}},publicKeyVerify:r=>(E("public key",r,[33,65]),0===e.publicKeyVerify(r)),publicKeyCreate(r,t=!0,output){switch(E("private key",r,32),k(t),output=A(output,t?33:65),e.publicKeyCreate(output,r)){case 0:return output;case 1:throw new Error(l);case 2:throw new Error(y)}},publicKeyConvert(r,t=!0,output){switch(E("public key",r,[33,65]),k(t),output=A(output,t?33:65),e.publicKeyConvert(output,r)){case 0:return output;case 1:throw new Error(f);case 2:throw new Error(y)}},publicKeyNegate(r,n=!0,output){switch(E("public key",r,[33,65]),k(n),output=A(output,n?33:65),e.publicKeyNegate(output,r)){case 0:return output;case 1:throw new Error(f);case 2:throw new Error(t);case 3:throw new Error(y)}},publicKeyCombine(r,t=!0,output){K(Array.isArray(r),"Expected public keys to be an Array"),K(r.length>0,"Expected public keys array will have more than zero items");for(const e of r)E("public key",e,[33,65]);switch(k(t),output=A(output,t?33:65),e.publicKeyCombine(output,r)){case 0:return output;case 1:throw new Error(f);case 2:throw new Error(d);case 3:throw new Error(y)}},publicKeyTweakAdd(r,t,c=!0,output){switch(E("public key",r,[33,65]),E("tweak",t,32),k(c),output=A(output,c?33:65),e.publicKeyTweakAdd(output,r,t)){case 0:return output;case 1:throw new Error(f);case 2:throw new Error(n)}},publicKeyTweakMul(r,t,n=!0,output){switch(E("public key",r,[33,65]),E("tweak",t,32),k(n),output=A(output,n?33:65),e.publicKeyTweakMul(output,r,t)){case 0:return output;case 1:throw new Error(f);case 2:throw new Error(c)}},signatureNormalize(r){switch(E("signature",r,64),e.signatureNormalize(r)){case 0:return r;case 1:throw new Error(h)}},signatureExport(r,output){E("signature",r,64);const n={output:output=A(output,72),outputlen:72};switch(e.signatureExport(n,r)){case 0:return output.slice(0,n.outputlen);case 1:throw new Error(h);case 2:throw new Error(t)}},signatureImport(r,output){switch(E("signature",r),output=A(output,64),e.signatureImport(output,r)){case 0:return output;case 1:throw new Error(h);case 2:throw new Error(t)}},ecdsaSign(r,n,c={},output){E("message",r,32),E("private key",n,32),K("Object"===x(c),"Expected options to be an Object"),void 0!==c.data&&E("options.data",c.data),void 0!==c.noncefn&&K("Function"===x(c.noncefn),"Expected options.noncefn to be a Function");const o={signature:output=A(output,64),recid:null};switch(e.ecdsaSign(o,r,n,c.data,c.noncefn)){case 0:return o;case 1:throw new Error(w);case 2:throw new Error(t)}},ecdsaVerify(r,t,n){switch(E("signature",r,64),E("message",t,32),E("public key",n,[33,65]),e.ecdsaVerify(r,t,n)){case 0:return!0;case 3:return!1;case 1:throw new Error(h);case 2:throw new Error(f)}},ecdsaRecover(r,n,c,o=!0,output){switch(E("signature",r,64),K("Number"===x(n)&&n>=0&&n<=3,"Expected recovery id to be a Number within interval [0, 3]"),E("message",c,32),k(o),output=A(output,o?33:65),e.ecdsaRecover(output,r,n,c)){case 0:return output;case 1:throw new Error(h);case 2:throw new Error(v);case 3:throw new Error(t)}},ecdh(r,t,n={},output){switch(E("public key",r,[33,65]),E("private key",t,32),K("Object"===x(n),"Expected options to be an Object"),void 0!==n.data&&E("options.data",n.data),void 0!==n.hashfn?(K("Function"===x(n.hashfn),"Expected options.hashfn to be a Function"),void 0!==n.xbuf&&E("options.xbuf",n.xbuf,32),void 0!==n.ybuf&&E("options.ybuf",n.ybuf,32),E("output",output)):output=A(output,32),e.ecdh(output,r,t,n.data,n.hashfn,n.xbuf,n.ybuf)){case 0:return output;case 1:throw new Error(f);case 2:throw new Error(m)}}})},535:function(e,r,t){const n=new(0,t(103).ec)("secp256k1"),c=n.curve,o=c.n.constructor;function l(e){const r=e[0];switch(r){case 2:case 3:return 33!==e.length?null:function(e,r){let t=new o(r);if(t.cmp(c.p)>=0)return null;t=t.toRed(c.red);let l=t.redSqr().redIMul(t).redIAdd(c.b).redSqrt();return 3===e!==l.isOdd()&&(l=l.redNeg()),n.keyPair({pub:{x:t,y:l}})}(r,e.subarray(1,33));case 4:case 6:case 7:return 65!==e.length?null:function(e,r,t){let l=new o(r),f=new o(t);if(l.cmp(c.p)>=0||f.cmp(c.p)>=0)return null;if(l=l.toRed(c.red),f=f.toRed(c.red),(6===e||7===e)&&f.isOdd()!==(7===e))return null;const y=l.redSqr().redIMul(l);return f.redSqr().redISub(y.redIAdd(c.b)).isZero()?n.keyPair({pub:{x:l,y:f}}):null}(r,e.subarray(1,33),e.subarray(33,65));default:return null}}function f(output,e){const r=e.encode(null,33===output.length);for(let i=0;i<output.length;++i)output[i]=r[i]}e.exports={contextRandomize:()=>0,privateKeyVerify(e){const r=new o(e);return r.cmp(c.n)<0&&!r.isZero()?0:1},privateKeyNegate(e){const r=new o(e),t=c.n.sub(r).umod(c.n).toArrayLike(Uint8Array,"be",32);return e.set(t),0},privateKeyTweakAdd(e,r){const t=new o(r);if(t.cmp(c.n)>=0)return 1;if(t.iadd(new o(e)),t.cmp(c.n)>=0&&t.isub(c.n),t.isZero())return 1;const n=t.toArrayLike(Uint8Array,"be",32);return e.set(n),0},privateKeyTweakMul(e,r){let t=new o(r);if(t.cmp(c.n)>=0||t.isZero())return 1;t.imul(new o(e)),t.cmp(c.n)>=0&&(t=t.umod(c.n));const n=t.toArrayLike(Uint8Array,"be",32);return e.set(n),0},publicKeyVerify:e=>null===l(e)?1:0,publicKeyCreate(output,e){const r=new o(e);if(r.cmp(c.n)>=0||r.isZero())return 1;return f(output,n.keyFromPrivate(e).getPublic()),0},publicKeyConvert(output,e){const r=l(e);if(null===r)return 1;return f(output,r.getPublic()),0},publicKeyNegate(output,e){const r=l(e);if(null===r)return 1;const t=r.getPublic();return t.y=t.y.redNeg(),f(output,t),0},publicKeyCombine(output,e){const r=new Array(e.length);for(let i=0;i<e.length;++i)if(r[i]=l(e[i]),null===r[i])return 1;let t=r[0].getPublic();for(let i=1;i<r.length;++i)t=t.add(r[i].pub);return t.isInfinity()?2:(f(output,t),0)},publicKeyTweakAdd(output,e,r){const t=l(e);if(null===t)return 1;if((r=new o(r)).cmp(c.n)>=0)return 2;const n=t.getPublic().add(c.g.mul(r));return n.isInfinity()?2:(f(output,n),0)},publicKeyTweakMul(output,e,r){const t=l(e);if(null===t)return 1;if((r=new o(r)).cmp(c.n)>=0||r.isZero())return 2;return f(output,t.getPublic().mul(r)),0},signatureNormalize(e){const r=new o(e.subarray(0,32)),s=new o(e.subarray(32,64));return r.cmp(c.n)>=0||s.cmp(c.n)>=0?1:(1===s.cmp(n.nh)&&e.set(c.n.sub(s).toArrayLike(Uint8Array,"be",32),32),0)},signatureExport(e,r){const t=r.subarray(0,32),n=r.subarray(32,64);if(new o(t).cmp(c.n)>=0)return 1;if(new o(n).cmp(c.n)>=0)return 1;const{output:output}=e;let l=output.subarray(4,37);l[0]=0,l.set(t,1);let f=33,y=0;for(;f>1&&0===l[y]&&!(128&l[y+1]);--f,++y);if(l=l.subarray(y),128&l[0])return 1;if(f>1&&0===l[0]&&!(128&l[1]))return 1;let s=output.subarray(39,72);s[0]=0,s.set(n,1);let d=33,h=0;for(;d>1&&0===s[h]&&!(128&s[h+1]);--d,++h);return s=s.subarray(h),128&s[0]||d>1&&0===s[0]&&!(128&s[1])?1:(e.outputlen=6+f+d,output[0]=48,output[1]=e.outputlen-2,output[2]=2,output[3]=l.length,output.set(l,4),output[4+f]=2,output[5+f]=s.length,output.set(s,6+f),0)},signatureImport(output,e){if(e.length<8)return 1;if(e.length>72)return 1;if(48!==e[0])return 1;if(e[1]!==e.length-2)return 1;if(2!==e[2])return 1;const r=e[3];if(0===r)return 1;if(5+r>=e.length)return 1;if(2!==e[4+r])return 1;const t=e[5+r];if(0===t)return 1;if(6+r+t!==e.length)return 1;if(128&e[4])return 1;if(r>1&&0===e[4]&&!(128&e[5]))return 1;if(128&e[r+6])return 1;if(t>1&&0===e[r+6]&&!(128&e[r+7]))return 1;let n=e.subarray(4,4+r);if(33===n.length&&0===n[0]&&(n=n.subarray(1)),n.length>32)return 1;let l=e.subarray(6+r);if(33===l.length&&0===l[0]&&(l=l.slice(1)),l.length>32)throw new Error("S length is too long");let f=new o(n);f.cmp(c.n)>=0&&(f=new o(0));let s=new o(e.subarray(6+r));return s.cmp(c.n)>=0&&(s=new o(0)),output.set(f.toArrayLike(Uint8Array,"be",32),0),output.set(s.toArrayLike(Uint8Array,"be",32),32),0},ecdsaSign(e,r,t,data,l){if(l){const e=l;l=n=>{const c=e(r,t,null,data,n);if(!(c instanceof Uint8Array&&32===c.length))throw new Error("This is the way");return new o(c)}}const f=new o(t);if(f.cmp(c.n)>=0||f.isZero())return 1;let y;try{y=n.sign(r,t,{canonical:!0,k:l,pers:data})}catch(e){return 1}return e.signature.set(y.r.toArrayLike(Uint8Array,"be",32),0),e.signature.set(y.s.toArrayLike(Uint8Array,"be",32),32),e.recid=y.recoveryParam,0},ecdsaVerify(e,r,t){const f={r:e.subarray(0,32),s:e.subarray(32,64)},y=new o(f.r),d=new o(f.s);if(y.cmp(c.n)>=0||d.cmp(c.n)>=0)return 1;if(1===d.cmp(n.nh)||y.isZero()||d.isZero())return 3;const h=l(t);if(null===h)return 2;const w=h.getPublic();return n.verify(r,f,w)?0:3},ecdsaRecover(output,e,r,t){const l={r:e.slice(0,32),s:e.slice(32,64)},y=new o(l.r),d=new o(l.s);if(y.cmp(c.n)>=0||d.cmp(c.n)>=0)return 1;if(y.isZero()||d.isZero())return 2;let h;try{h=n.recoverPubKey(t,l,r)}catch(e){return 2}return f(output,h),0},ecdh(output,e,r,data,t,f,y){const d=l(e);if(null===d)return 1;const h=new o(r);if(h.cmp(c.n)>=0||h.isZero())return 2;const w=d.getPublic().mul(h);if(void 0===t){const data=w.encode(null,!0),e=n.hash().update(data).digest();for(let i=0;i<32;++i)output[i]=e[i]}else{f||(f=new Uint8Array(32));const e=w.getX().toArray("be",32);for(let i=0;i<32;++i)f[i]=e[i];y||(y=new Uint8Array(32));const r=w.getY().toArray("be",32);for(let i=0;i<32;++i)y[i]=r[i];const n=t(f,y,data);if(!(n instanceof Uint8Array&&n.length===output.length))return 2;output.set(n)}return 0}}},536:function(e,r,t){"use strict";(function(e){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.aesDecrypt=r.aesEncrypt=r.getValidSecret=r.decodeHex=r.remove0x=void 0;var c=t(184),o=n(t(525));function l(e){return e.startsWith("0x")||e.startsWith("0X")?e.slice(2):e}r.remove0x=l,r.decodeHex=function(r){return e.from(l(r),"hex")},r.getValidSecret=function(){var e;do{e=c.randomBytes(32)}while(!o.default.privateKeyVerify(e));return e},r.aesEncrypt=function(r,t){var n=c.randomBytes(16),o=c.createCipheriv("aes-256-gcm",r,n),l=e.concat([o.update(t),o.final()]),f=o.getAuthTag();return e.concat([n,f,l])},r.aesDecrypt=function(r,t){var n=t.slice(0,16),o=t.slice(16,32),l=t.slice(32),f=c.createDecipheriv("aes-256-gcm",r,n);return f.setAuthTag(o),e.concat([f.update(l),f.final()])}}).call(this,t(9).Buffer)},549:function(e,r,t){"use strict";(function(e){Object.defineProperty(r,"__esModule",{value:!0}),r.utils=r.PublicKey=r.PrivateKey=r.decrypt=r.encrypt=void 0;var n=t(550),c=t(536);r.encrypt=function(r,t){var o=new n.PrivateKey,l=r instanceof e?new n.PublicKey(r):n.PublicKey.fromHex(r),f=o.encapsulate(l),y=c.aesEncrypt(f,t);return e.concat([o.publicKey.uncompressed,y])},r.decrypt=function(r,t){var o=r instanceof e?new n.PrivateKey(r):n.PrivateKey.fromHex(r),l=new n.PublicKey(t.slice(0,65)),f=t.slice(65),y=l.decapsulate(o);return c.aesDecrypt(y,f)};var o=t(550);Object.defineProperty(r,"PrivateKey",{enumerable:!0,get:function(){return o.PrivateKey}}),Object.defineProperty(r,"PublicKey",{enumerable:!0,get:function(){return o.PublicKey}}),r.utils={aesDecrypt:c.aesDecrypt,aesEncrypt:c.aesEncrypt,decodeHex:c.decodeHex,getValidSecret:c.getValidSecret,remove0x:c.remove0x}}).call(this,t(9).Buffer)},550:function(e,r,t){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.PublicKey=r.PrivateKey=void 0;var c=t(574);Object.defineProperty(r,"PrivateKey",{enumerable:!0,get:function(){return n(c).default}});var o=t(552);Object.defineProperty(r,"PublicKey",{enumerable:!0,get:function(){return n(o).default}})},551:function(e,r,t){"use strict";(function(r){const{createHash:n,createHmac:c}=t(184),o={},l=e=>{switch(e){case"sha256":return 32;case"sha512":return 64;case"sha224":return 28;case"sha384":return 48;case"sha3-256":return 32;case"sha3-512":return 64;case"sha3-224":return 28;case"sha3-384":return 48;case"blake2s256":return 32;case"blake2b512":return 64;case"sha1":return 20;case"md5":return 16;default:{let r=o[e];return void 0===r&&(r=n(e).digest().length,o[e]=r),r}}},f=(e,t,n,o)=>{const l=r.isBuffer(n)?n:r.from(n),f=o&&o.length?r.from(o):r.alloc(t,0);return c(e,f).update(l).digest()},y=(e,t,n,o,l)=>{const f=r.from(l||""),y=f.length,d=Math.ceil(o/t);if(d>255)throw new Error(`OKM length ${o} is too long for ${e} hash`);const h=r.alloc(t*d+y+1);for(let r=1,o=0,l=0;r<=d;++r)f.copy(h,l),h[l+y]=r,c(e,n).update(h.slice(o,l+y+1)).digest().copy(h,l),o=l,l+=t;return h.slice(0,o)};function d(e,r,{salt:t="",info:n="",hash:c="SHA-256"}={}){c=c.toLowerCase().replace("-","");const o=l(c),d=f(c,o,e,t);return y(c,o,d,r,n)}Object.defineProperties(d,{hash_length:{configurable:!1,enumerable:!1,writable:!1,value:l},extract:{configurable:!1,enumerable:!1,writable:!1,value:f},expand:{configurable:!1,enumerable:!1,writable:!1,value:y}}),e.exports=d}).call(this,t(9).Buffer)},552:function(e,r,t){"use strict";(function(e){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var c=n(t(551)),o=n(t(525)),l=t(536),f=function(){function r(r){this.uncompressed=e.from(o.default.publicKeyConvert(r,!1)),this.compressed=e.from(o.default.publicKeyConvert(r,!0))}return r.fromHex=function(t){var n=l.decodeHex(t);if(64===n.length){var c=e.from([4]);return new r(e.concat([c,n]))}return new r(n)},r.prototype.toHex=function(e){return void 0===e&&(e=!0),e?this.compressed.toString("hex"):this.uncompressed.toString("hex")},r.prototype.decapsulate=function(r){var t=e.concat([this.uncompressed,r.multiply(this)]);return c.default(t,32,{hash:"SHA-256"})},r.prototype.equals=function(e){return this.uncompressed.equals(e.uncompressed)},r}();r.default=f}).call(this,t(9).Buffer)},574:function(e,r,t){"use strict";(function(e){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});var c=n(t(551)),o=n(t(525)),l=t(536),f=n(t(552)),y=function(){function r(r){if(this.secret=r||l.getValidSecret(),!o.default.privateKeyVerify(this.secret))throw new Error("Invalid private key");this.publicKey=new f.default(e.from(o.default.publicKeyCreate(this.secret)))}return r.fromHex=function(e){return new r(l.decodeHex(e))},r.prototype.toHex=function(){return"0x"+this.secret.toString("hex")},r.prototype.encapsulate=function(r){var t=e.concat([this.publicKey.uncompressed,this.multiply(r)]);return c.default(t,32,{hash:"SHA-256"})},r.prototype.multiply=function(r){return e.from(o.default.publicKeyTweakMul(r.compressed,this.secret,!1))},r.prototype.equals=function(e){return this.secret.equals(e.secret)},r}();r.default=y}).call(this,t(9).Buffer)}}]);