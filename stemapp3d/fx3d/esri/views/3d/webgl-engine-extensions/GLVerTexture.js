/**
 * Copyright @ 2023 Esri.
 * All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions.
 */
define(["dojo/_base/declare","../support/fx3dUtils"],function(e,t){var i=0,s=e(null,{declaredClass:"esri.views.3d.webgl-engine-extensions.GLVerTexture",constructor:function(e){this.id=i++,this._gl=e,this._ready=!1,this._pixelData=null,this._pixelDataType=null,this._textureHandle=null,this._gl&&(this._textureHandle=this._gl.createTexture())},_setTexParams:function(){this._gl.pixelStorei(this._gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_WRAP_S,this._gl.CLAMP_TO_EDGE),this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_WRAP_T,this._gl.CLAMP_TO_EDGE),this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_MIN_FILTER,this._gl.NEAREST),this._gl.texParameteri(this._gl.TEXTURE_2D,this._gl.TEXTURE_MAG_FILTER,this._gl.NEAREST)},_reset:function(e,i){this._width=e,this._height=i,this._pixelSize=window.parseInt(this._width*this._height*4),this._isPowerOfTwo=t.isPowerOfTwo(e)&&t.isPowerOfTwo(i),this._isPowerOfTwo||(console.warn("Width and height are not power of 2, and the rendering may be incorrect."),console.error("GLVerTexture ERROR 222"))},initTexture:function(e,t,i){if(i instanceof Uint8Array)this._pixelDataType=5121;else{if(!(i instanceof Float32Array))return;this._pixelDataType=5126}return this._reset(e,t),isNaN(this._pixelSize)||this._pixelSize!==i.length?(console.warn("The pixel size is invalid."),void console.error("GLVerTexture ERROR 333")):(this._gl.bindTexture(this._gl.TEXTURE_2D,this._textureHandle),this._setTexParams(),void this._texImage2D())},setData:function(e,t,i){if(i instanceof Uint8Array)this._pixelDataType=5121;else{if(!(i instanceof Float32Array))return;this._pixelDataType=5126}return this._reset(e,t),isNaN(this._pixelSize)||this._pixelSize!==i.length?(console.warn("The pixel size is invalid."),void console.error("GLVerTexture ERROR 333")):(this._pixelData=i,this._gl.bindTexture(this._gl.TEXTURE_2D,this._textureHandle),this._setTexParams(),void this._texImage2D())},updateTexture:function(e){this._pixelData=e,this._gl.bindTexture(this._gl.TEXTURE_2D,this._textureHandle),this._setTexParams(),this._texImage2D(),this._showError()},syncData:function(e){this._gl.bindTexture(this._gl.TEXTURE_2D,this._textureHandle),this._setTexParams(),this._texImage2D(),this._showError()},_showError:function(){var e=this._gl.getError();0!==e&&console.error("TEX Error ==> "+e)},bind:function(e){return this._textureHandle?("number"==typeof e&&this._gl.activeTexture(33984+e),this._gl.bindTexture(3553,this._textureHandle),void this.syncData()):void console.error("GLVerTexture ERROR 444")},unbind:function(){this._gl.bindTexture(3553,null)},release:function(){this._gl.bindTexture(3553,null)},getTextureHandle:function(){return this._textureHandle},dispose:function(){this._textureHandle.__deleted__=!0,this._gl.deleteTexture(this._textureHandle)},_texImage2D:function(){var e=this._gl.RGBA;this._gl instanceof WebGLRenderingContext||this._gl instanceof WebGL2RenderingContext&&(e=this._gl.RGBA32F),this._gl.texImage2D(this._gl.TEXTURE_2D,0,e,this._width,this._height,0,this._gl.RGBA,this._pixelDataType,this._pixelData)}});return s});