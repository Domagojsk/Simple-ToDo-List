parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
"use strict";var e=document.querySelector(".todo-input"),t=document.querySelector(".todo-btn"),a=document.querySelector(".todo-items"),l=document.querySelector(".filter-todo");function n(t){t.preventDefault();var l=document.createElement("div");l.classList.add("todo");var n=document.createElement("li");n.classList.add("todo-item"),n.innerText=e.value,l.appendChild(n);var s=document.createElement("button");s.classList.add("complete-btn"),s.innerHTML='<i class="fa-solid fa-circle-check"></i>',l.appendChild(s);var c=document.createElement("button");c.classList.add("delete-btn"),c.innerHTML='<i class="fa-solid fa-trash-can"></i>',l.appendChild(c),a.appendChild(l),e.value=""}function s(e){var t=e.target;if("delete-btn"===t.classList[0]){var a=t.parentElement;a.classList.add("fall"),a.addEventListener("transitionend",function(){a.remove()})}"complete-btn"===t.classList[0]&&t.parentElement.classList.toggle("completed")}function c(e){a.childNodes.forEach(function(t){switch(e.target.value){case"all":t.style.display="flex";break;case"completed":t.classList.contains("completed")?t.style.display="flex":t.style.display="none";break;case"uncompleted":t.classList.contains("completed")?t.style.display="none":t.style.display="flex"}})}t.addEventListener("click",n),a.addEventListener("click",s),l.addEventListener("click",c);
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.1ea7a035.js.map