(self.webpackChunkelao_=self.webpackChunkelao_||[]).push([[143],{9472:(t,e,n)=>{var i={"./contact_controller.js":227};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(i,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return i[t]}r.keys=function(){return Object.keys(i)},r.resolve=o,t.exports=r,r.id=9472},8205:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>i});const i={}},227:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>p});n(2222),n(9070),n(8304),n(489),n(2419),n(8011),n(2526),n(1817),n(1539),n(2165),n(8783),n(6992),n(3948);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=l(t);if(e){var r=l(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return u(this,n)}}function u(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var c,h,f,p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(l,t);var e,n,i,u=s(l);function l(){return r(this,l),u.apply(this,arguments)}return e=l,(n=[{key:"connect",value:function(){this.mainTarget.replaceChildren(document.importNode(this.formTarget.content,!0))}},{key:"submit",value:function(){var t=this.inputEmailTarget.value,e=this.inputContentTarget.innerText,n=this.inputSignTarget.value,i=this.emailTarget.textContent,r=encodeURIComponent("".concat(e,"\n\n").concat(n,"\n\n").concat(t,"\n")),o="mailto:".concat(i,"?subject=Contact&body=").concat(r,"&reply-to=").concat(t),a=document.createElement("a");a.href=o,a.target="_blank",a.click(),this.mainTarget.replaceChildren(document.importNode(this.successTarget.content,!0)),this.greetingTarget.textContent=n}},{key:"reset",value:function(){this.mainTarget.replaceChildren(document.importNode(this.formTarget.content,!0))}}])&&o(e.prototype,n),i&&o(e,i),l}(n(7931).Controller);f=["main","form","success","email","inputEmail","inputContent","inputSign","greeting"],(h="targets")in(c=p)?Object.defineProperty(c,h,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[h]=f},7264:(t,e,n)=>{"use strict";(0,n(2192).x)(n(9472)),n(4812),n(9554),n(4747),n(9070);function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var r=function(){function t(e,n){var i=this;for(var r in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.triggers=document.querySelectorAll(e),this.rules=n,this.targets={},this.active=!1,this.toggle=this.toggle.bind(this),this.rules)this.targets[r]=document.querySelectorAll(r);this.triggers.forEach((function(t){return t.addEventListener("click",i.toggle)})),this.update()}var e,n,r;return e=t,(n=[{key:"toggle",value:function(){this.setActive(!this.active)}},{key:"setActive",value:function(t){this.active=t,this.update()}},{key:"update",value:function(){var t=this,e=function(e){var n=t.rules[e];t.targets[e].forEach((function(e){e.classList.toggle(n,t.active)}))};for(var n in this.rules)e(n)}}])&&i(e.prototype,n),r&&i(e,r),t}();n(2564);function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;o(this,t),this.frequency=e,this.callback=n,this.interval=null,this.update=this.update.bind(this)}var e,n,i;return e=t,(n=[{key:"setCallback",value:function(t){this.callback=t}},{key:"start",value:function(){this.interval||(this.interval=setInterval(this.update,this.frequency))}},{key:"stop",value:function(){this.interval&&(clearInterval(this.interval),this.frame=null)}},{key:"update",value:function(){this.callback()}}])&&a(e.prototype,n),i&&a(e,i),t}();n(3843),n(3710);function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;u(this,t),this.callback=e,this.frame=null,this.time=Date.now(),this.update=this.update.bind(this)}var e,n,i;return e=t,(n=[{key:"setCallback",value:function(t){this.callback=t}},{key:"start",value:function(){this.frame||(this.frame=window.requestAnimationFrame(this.update),this.time=Date.now())}},{key:"stop",value:function(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=null)}},{key:"update",value:function(){this.frame=window.requestAnimationFrame(this.update);var t=this.time;this.time=Date.now(),this.callback(this.time-t)}}])&&l(e.prototype,n),i&&l(e,i),t}();n(1249),n(2222);function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var p=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;h(this,t),this.map=e,this.element=document.createElementNS("http://www.w3.org/2000/svg","rect"),this.element.setAttribute("fill","#FF4344"),this.element.setAttribute("stroke","#FFFFFF"),this.element.setAttribute("stroke-width","0.9"),this.element.setAttribute("stroke-linecap","square"),this.element.setAttribute("x",-n),this.element.setAttribute("y",-n),this.element.setAttribute("width",this.map.size+2*n),this.element.setAttribute("height",this.map.size+2*n)}var e,n,i;return e=t,(n=[{key:"attach",value:function(t){t.appendChild(this.element)}}])&&f(e.prototype,n),i&&f(e,i),t}();n(5827),n(9753),n(2526),n(1817),n(1539),n(2165),n(8783),n(6992),n(3948),n(7042),n(8309),n(1038);function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var m=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.snake=e,this.element=document.createElementNS("http://www.w3.org/2000/svg","path"),this.element.setAttribute("fill","none"),this.element.setAttribute("stroke","#ffffff"),this.element.setAttribute("stroke-width","0.9"),this.element.setAttribute("stroke-linecap","square"),this.element.setAttribute("d",this.getPath())}var e,n,i;return e=t,(n=[{key:"attach",value:function(t){t.appendChild(this.element)}},{key:"getPath",value:function(t){var e=this.snake.positions,n=e.length-1;return e.reduce((function(i,r,o){var a="L",s=y(r,2),u=s[0],l=s[1];if(0===o){var c=y(e[o+1],2),h=c[0],f=c[1];a="M",u+=(1-t)*(h-u),l+=(1-t)*(f-l)}if(o===n){var p=y(e[o-1],2),v=p[0],d=p[1];u+=t*(v-u),l+=t*(d-l)}return"".concat(i," ").concat(a).concat(u,",").concat(l)}),"")}},{key:"update",value:function(t){this.element.setAttribute("d",this.getPath(this.snake.alive?t:1))}}])&&d(e.prototype,n),i&&d(e,i),t}();function b(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var g=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.pixels=e,this.element=document.createElementNS("http://www.w3.org/2000/svg","path"),this.element.setAttribute("fill","none"),this.element.setAttribute("stroke","#ffffff"),this.element.setAttribute("stroke-width","0.9"),this.element.setAttribute("stroke-linecap","square"),this.element.setAttribute("d",this.getPath())}var e,n,i;return e=t,(n=[{key:"attach",value:function(t){t.appendChild(this.element)}},{key:"getPath",value:function(){return this.pixels.reduce((function(t,e){return"".concat(t," M").concat(e.x,",").concat(e.y," l0,0")}),"")}},{key:"update",value:function(){this.element.setAttribute("d",this.getPath())}}])&&b(e.prototype,n),i&&b(e,i),t}();function w(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var k=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.map=new p(e.map),this.snake=new m(e.snake),this.pixels=new g(e.pixels),this.element=this.constructor.createElement(e.map.size),this.width=null,this.height=null,this.onResize=this.onResize.bind(this),window.addEventListener("resize",this.onResize),this.onResize(),this.map.attach(this.element),this.snake.attach(this.element),this.pixels.attach(this.element),document.body.appendChild(this.element)}var e,n,i;return e=t,i=[{key:"createElement",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n="http://www.w3.org/2000/svg",i=document.createElementNS(n,"svg");return i.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns",n),i.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),i.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),i.setAttribute("version","1.1"),i.setAttribute("viewBox","".concat(-e," ").concat(-e," ").concat(t+2*e," ").concat(t+2*e)),i.style.width="100vw",i.style.height="100vh",i.style.position="fixed",i.style.zIndex=1001,i.style.top=0,i.style.left=0,i.style.right=0,i.style.bottom=0,i.style.backgroundColor="#FF4344",i}}],(n=[{key:"onResize",value:function(){var t=window,e=t.innerWidth,n=t.innerHeight;this.width=e,this.height=n}},{key:"setLogo",value:function(t){this.element.appendChild(t.element),t.element.setAttribute("width","300"),t.element.setAttribute("height","100"),t.element.setAttribute("x","0"),t.element.setAttribute("y","40")}},{key:"update",value:function(t){this.snake.update(t),this.pixels.update()}}])&&w(e.prototype,n),i&&w(e,i),t}();var A=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.callback=e,this.callback()};n(561),n(2772),n(5212),n(9826),n(4723),n(4916);var x=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.size=e};function C(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function T(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var O=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.alive=!0,this.horizontal=!0,this.forward=!0,this.positions=[[6,0],[5,0],[4,0],[3,0],[2,0],[1,0],[0,0]],this.lastTail=null}var e,n,i;return e=t,(n=[{key:"head",get:function(){return this.positions[0]}},{key:"eat",value:function(){this.lastTail&&(this.positions.push(this.lastTail),this.lastTail=null)}},{key:"die",value:function(){this.alive=!1}},{key:"isHorizontal",value:function(){return this.positions[0][1]===this.positions[1][1]}},{key:"update",value:function(t){this.lastTail=this.positions.pop(),this.positions.unshift(t)}},{key:"getNextHead",value:function(){var t=this.forward?1:-1,e=C(this.head,2),n=e[0],i=e[1];return this.horizontal?[n+t,i]:[n,i+t]}},{key:"getNextTail",value:function(){return this.positions.slice(0,-1)}},{key:"onInput",value:function(t){switch(t){case"left":this.setDirection(!0,!1);break;case"right":this.setDirection(!0,!0);break;case"up":this.setDirection(!1,!1);break;case"down":this.setDirection(!1,!0);break;default:throw new Error("Unsopported direction ".concat(t))}}},{key:"setDirection",value:function(t,e){t!==this.isHorizontal()&&(this.horizontal=t,this.forward=e)}}])&&T(e.prototype,n),i&&T(e,i),t}();function P(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var j=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=e,this.y=n}var e,n,i;return e=t,i=[{key:"getRandomPoint",value:function(t){return Math.floor(Math.random()*(t-1))}}],(n=[{key:"match",value:function(t,e){return t===this.x&&e===this.y}}])&&P(e.prototype,n),i&&P(e,i),t}();function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],i=!0,r=!1,o=void 0;try{for(var a,s=t[Symbol.iterator]();!(i=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);i=!0);}catch(t){r=!0,o=t}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}(t,e)||L(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t){return function(t){if(Array.isArray(t))return z(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||L(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(t,e){if(t){if("string"==typeof t)return z(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(t,e):void 0}}function z(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function R(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function N(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var F=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:160,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:16;R(this,t),this.period=e,this.map=new x(n),this.snake=new O,this.pixels=[],this.pixels.push(this.generatePixel()),this.pixels.push(this.generatePixel()),this.pixels.push(this.generatePixel())}var e,n,i;return e=t,(n=[{key:"generatePixel",value:function(){for(var t,e;null!==this.getPixelAt(t,e)||this.hasCollision(t,e);)t=j.getRandomPoint(this.map.size),e=j.getRandomPoint(this.map.size);return new j(t,e)}},{key:"update",value:function(){if(this.snake.alive){var t=this.snake.getNextHead(),e=this.getPixelAt.apply(this,I(t));e&&(this.pixels.splice(this.pixels.indexOf(e),1,this.generatePixel()),this.snake.eat()),this.hasCollision.apply(this,I(t))?this.end():this.snake.update(t)}}},{key:"onInput",value:function(t){this.snake.onInput(t)}},{key:"hasCollision",value:function(t,e){var n=this.map.size,i=this.snake.getNextTail();return t<0||t>n||e<0||e>n||i.some((function(n){var i=S(n,2),r=i[0],o=i[1];return r===t&&o===e}))}},{key:"getPixelAt",value:function(t,e){return void 0===t||void 0===e||this.pixels.find((function(n){return n.match(t,e)}))||null}},{key:"end",value:function(){console.info("💀"),this.snake.die()}}])&&N(e.prototype,n),i&&N(e,i),t}();function D(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var _=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.onChange=e,this.x=[!1,!1],this.y=[!1,!1],this.left=!1,this.right=!1,this.up=!1,this.down=!1,this.onKey=this.onKey.bind(this)}var e,n,i;return e=t,(n=[{key:"start",value:function(){document.addEventListener("keydown",this.onKey),document.addEventListener("keyup",this.onKey)}},{key:"stop",value:function(){document.removeEventListener("keydown",this.onKey),document.removeEventListener("keyup",this.onKey)}},{key:"onKey",value:function(t){var e=this.constructor,n=e.DOWN,i=e.UP,r=e.LEFT,o=e.RIGHT,a=t.keyCode,s="keydown"===t.type;switch(a){case r:this.x[0]=s;break;case o:this.x[1]=s;break;case i:this.y[0]=s;break;case n:this.y[1]=s}this.resolve()}},{key:"resolve",value:function(){return this.setLeft(this.x[0]&&this.x[0]!==this.x[1])?this.onChange("left",this.left):this.setRight(this.x[1]&&this.x[0]!==this.x[1])?this.onChange("right",this.right):this.setUp(this.y[0]&&this.y[0]!==this.y[1])?this.onChange("up",this.up):this.setDown(this.y[1]&&this.y[0]!==this.y[1])?this.onChange("down",this.down):void 0}},{key:"setLeft",value:function(t){return this.left!==t&&(this.left=t,!0)}},{key:"setRight",value:function(t){return this.right!==t&&(this.right=t,!0)}},{key:"setUp",value:function(t){return this.up!==t&&(this.up=t,!0)}},{key:"setDown",value:function(t){return this.down!==t&&(this.down=t,!0)}}])&&D(e.prototype,n),i&&D(e,i),t}();function U(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}_.LEFT=37,_.RIGHT=39,_.UP=38,_.DOWN=40;var q=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.controls=new _(this.onInput.bind(this)),this.game=new F,this.renderer=new k(this.game),this.gameLoop=new s(this.game.period,this.update.bind(this)),this.renderLoop=new c(this.render.bind(this)),this.listener=new A(this.start.bind(this)),this.time=0}var e,n,i;return e=t,(n=[{key:"start",value:function(){console.info("🐍"),this.renderLoop.start(),this.gameLoop.start(),this.controls.start()}},{key:"onInput",value:function(t,e){e&&this.game.onInput(t)}},{key:"update",value:function(){this.game.update(),this.time=0}},{key:"render",value:function(t){var e=this.game.period;this.time+=t,this.renderer.update(this.time/e%e)}}])&&U(e.prototype,n),i&&U(e,i),t}();window.addEventListener("load",(function(){return new q})),window.addEventListener("load",(function(){new r(".nav-toggle",{".nav-mobile":"nav-mobile--open",body:"no-scroll"})}))}},0,[[7264,666,50]]]);