/**
 * Copyright @ 2023 Esri.
 * All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions.
 */
define(["dojo/text!./FireballMaterial.xml","dojo/_base/declare","../../webgl-engine-extensions/GLSLShader","../../webgl-engine-extensions/GLSLProgramExt","../../support/fx3dUtils","../Materials"],function(t,e,i,s,r,n){var a=e([n],{declaredClass:"esri.views.3d.effects.Fireball.FireballMaterial",constructor:function(t){this._gl=t.gl,this._shaderSnippets=t.shaderSnippets,this._program=null,this._pushState=t.pushState,this._restoreState=t.restoreState,this._srcAlpha=770,this._dstAlpha=1,this._viewingMode=t.viewingMode,"local"==t.viewingMode&&(this._srcAlpha=770,this._dstAlpha=771)},destroy:function(){this._program&&(this._program.dispose(),delete this._program,this._program=null)},_addDefines:function(t,e,i){var s="";if(null!=i)if(Array.isArray(i))for(var r=0,n=i.length;r<n;r++){var a=i[r];s+="#define "+a+"\n"}else for(var a in i)s+="#define "+a+"\n";return this._shaderSnippets[t]+"\n"+s+e},loadShaders:function(e){if(this._shaderSnippets){null!=this._shaderSnippets.fireballVS&&null!=this._shaderSnippets.fireballFS||this._shaderSnippets._parse(t);var r=[];"global"==this._viewingMode?r.push("GLOBAL"):r.push("LOCAL");var n=this._addDefines("defines",this._shaderSnippets.fireballVS,r),a=new i(35633,n,this._gl);n=this._addDefines("defines2",this._shaderSnippets.fireballFS,r);var o=new i(35632,n,this._gl);this._program=new s([a,o],this._gl),this._program.init()}return this._initResources()},getProgram:function(){return this._program},_initResources:function(){return!0},bind:function(t,e){this._program.use(),this._program.uniformMatrix4fv("ms",t.proj),this._program.uniformMatrix4fv("se",t.view),this._program.uniform3fv("eo",t.camPos),this._program.uniform3fv("oe",t.lightingData.direction),this._program.uniform4fv("os",t.lightingData.ambient),this._program.uniform4fv("si",t.lightingData.diffuse),this._program.uniform4fv("om",t.lightingData.specular),this._oldTex=this._gl.getParameter(32873);var i=this.getOldActiveUnit(e);t.ii.bind(i+1),this._program.uniform1i("ii",i+1),this._program.uniform2fv("ol",t.ol),this._program.uniform2fv("oi",[t.oi,t.lm]),t.ep.bind(i+2),this._program.uniform1i("ep",i+2),this._program.uniform2fv("es",t.es),this._gl.activeTexture(33984+i+3),this._gl.bindTexture(3553,t.pl),this._program.uniform1i("pl",i+3),this._gl.activeTexture(33984+i+4),this._gl.bindTexture(3553,t.op),this._program.uniform1i("op",i+4),this._program.uniform1f("so",t.so),this._program.uniform1f("ls",t.ls),this._program.uniform1f("mo",t.mo),this._program.uniform1f("em",t.time),this._program.uniform1i("ml",t.reachedRepeatLimit),0!=e._depthWriteEnabled&&(this._pushState(["setDepthWriteEnabled",e._depthWriteEnabled]),e.setDepthWriteEnabled(!1)),1!=e._depthTestEnabled&&(this._pushState(["setDepthTestEnabled",e._depthTestEnabled]),e.setDepthTestEnabled(!0)),1!=e._blendEnabled&&(this._pushState(["setBlendingEnabled",e._blendEnabled]),e.setBlendingEnabled(!0))},bindBoolean:function(t,e){this._program.uniform1i(t,e)},blend:function(t,e){t?t&&(this._pushState(["setBlendFunctionSeparate",[e._state.blendFunction.srcRGB,e._state.blendFunction.dstRGB,e._state.blendFunction.srcAlpha,e._state.blendFunction.dstAlpha]]),e.setBlendFunction(770,771)):(this._pushState(["setBlendFunctionSeparate",[e._state.blendFunction.srcRGB,e._state.blendFunction.dstRGB,e._state.blendFunction.srcAlpha,e._state.blendFunction.dstAlpha]]),e.setBlendFunction(this._srcAlpha,this._dstAlpha))},release:function(t){this._gl.activeTexture(33984+t._state.activeTexture+1),this._gl.bindTexture(3553,this._oldTex),this._restoreState(t),this._gl.useProgram(null)}});return a});