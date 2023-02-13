function t(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}function i(t,i){for(var e=0;i.length>e;e++){var s=i[e];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,n(s.key),s)}}function e(t,e,s){return e&&i(t.prototype,e),s&&i(t,s),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,i,e){return(i=n(i))in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function n(t){var i=function(t,i){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var s=e.call(t,i||"default");if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}var h=function(t){var i={pageX:t.pageX,pageY:t.pageY,touches:t.touches};return t.touches||(i.touches=t.touches||[],i.touches[0]={pageX:t.pageX,pageY:t.pageY}),i},o="undefined"!=typeof window&&void 0!==window.ontouchstart,l=function(){},a=function(t){return Math.sqrt(t.x*t.x+t.y*t.y)};function u(t,i){var e=function(t,i){var e=a(t)*a(i);if(0===e)return 0;var s=function(t,i){return t.x*i.x+t.y*i.y}(t,i)/e;return s>1&&(s=1),Math.acos(s)}(t,i);return function(t,i){return t.x*i.y-i.x*t.y}(t,i)>0&&(e*=-1),180*e}var r=function(){function i(e){t(this,i),s(this,"handlers",void 0),s(this,"el",void 0),this.handlers=[],this.el=e}return e(i,[{key:"add",value:function(t){this.handlers.push(t)}},{key:"del",value:function(t){t||(this.handlers=[]);for(var i=this.handlers.length;i>=0;i--)this.handlers[i]===t&&this.handlers.splice(i,1)}},{key:"dispatch",value:function(){for(var t=arguments.length,i=Array(t),e=0;t>e;e++)i[e]=arguments[e];for(var s=0,n=this.handlers.length;n>s;s++){var h,o=this.handlers[s];null===(h=o.apply)||void 0===h||h.call(o,this.el,i)}}}]),i}();function c(t,i){var e=new r(t);return e.add(i),e}var p=function(){function i(e,n){t(this,i),s(this,"element",void 0),s(this,"preV",void 0),s(this,"pinchStartLen",void 0),s(this,"scale",void 0),s(this,"isDoubleTap",void 0),s(this,"rotate",void 0),s(this,"touchStart",void 0),s(this,"touchMove",void 0),s(this,"touchEnd",void 0),s(this,"touchCancel",void 0),s(this,"isMoving",void 0),s(this,"multipointStart",void 0),s(this,"multipointEnd",void 0),s(this,"pinch",void 0),s(this,"swipe",void 0),s(this,"doubleTap",void 0),s(this,"longTap",void 0),s(this,"singleTap",void 0),s(this,"pressMove",void 0),s(this,"twoFingerPressMove",void 0),s(this,"_cancelAllHandler",void 0),s(this,"delta",void 0),s(this,"last",void 0),s(this,"now",void 0),s(this,"tapTimeout",void 0),s(this,"singleTapTimeout",void 0),s(this,"longTapTimeout",void 0),s(this,"swipeTimeout",void 0),s(this,"x1",void 0),s(this,"x2",void 0),s(this,"y1",void 0),s(this,"y2",void 0),s(this,"preTapPosition",void 0),s(this,"_preventTap",void 0),s(this,"sx2",void 0),s(this,"sy2",void 0),this.element=e,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener(o?"touchstart":"mousedown",this.start),o?(this.element.addEventListener("touchmove",this.move),this.element.addEventListener("touchend",this.end),this.element.addEventListener("touchcancel",this.cancel)):(document.addEventListener("mousemove",this.move),document.addEventListener("mouseup",this.end)),this.preV={x:null,y:null},this.pinchStartLen=null,this.scale=1,this.isDoubleTap=!1,this.rotate=c(this.element,n.onRotate||l),this.touchStart=c(this.element,n.onTouchStart||l),this.touchMove=c(this.element,n.onTouchMove||l),this.touchEnd=c(this.element,n.onTouchEnd||l),this.touchCancel=c(this.element,n.onTouchCancel||l),this.isMoving=!1,this.multipointStart=c(this.element,n.onMultipointStart||l),this.multipointEnd=c(this.element,n.onMultipointEnd||l),this.pinch=c(this.element,n.onPinch||l),this.swipe=c(this.element,n.onSwipe||l),this.doubleTap=c(this.element,n.onDoubleTap||l),this.longTap=c(this.element,n.onLongTap||l),this.singleTap=c(this.element,n.onSingleTap||l),this.pressMove=c(this.element,n.onPressMove||l),this.twoFingerPressMove=c(this.element,n.onTwoFingerPressMove||l),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}}return e(i,[{key:"start",value:function(t){var i=h(t);this.isMoving||(this.isMoving=!0),this.now=Date.now(),this.x1=i.touches[0].pageX,this.y1=i.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(i,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&250>=this.delta&&30>Math.abs(this.preTapPosition.x-this.x1)&&30>Math.abs(this.preTapPosition.y-this.y1),this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var e=this.preV;if(i.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var s={x:i.touches[1].pageX-this.x1,y:i.touches[1].pageY-this.y1};e.x=s.x,e.y=s.y,this.pinchStartLen=a(e),this.multipointStart.dispatch(i,this.element)}this._preventTap=!1,this.longTapTimeout=window.setTimeout(function(){this.longTap.dispatch(i,this.element),this._preventTap=!0}.bind(this),750)}},{key:"move",value:function(t){var i;if(this.isMoving){var e=h(t),s=this.preV,n=e.touches.length,o=e.touches[0].pageX,l=e.touches[0].pageY;if(this.isDoubleTap=!1,n>1){var r=e.touches[1].pageX,c=e.touches[1].pageY,p={x:e.touches[1].pageX-o,y:e.touches[1].pageY-l};null!==s.x&&(this.pinchStartLen>0&&(e.scale=a(p)/this.pinchStartLen,this.pinch.dispatch(e,this.element)),e.angle=u(p,s),this.rotate.dispatch(e,this.element)),s.x=p.x,s.y=p.y,null!==this.x2&&null!==this.sx2?(e.deltaX=(o-this.x2+r-this.sx2)/2,e.deltaY=(l-this.y2+c-this.sy2)/2):(e.deltaX=0,e.deltaY=0),this.twoFingerPressMove.dispatch(e,this.element),this.sx2=r,this.sy2=c}else{if(null!==this.x2)e.deltaX=o-this.x2,e.deltaY=l-this.y2,(Math.abs(this.x1-this.x2)>10||Math.abs(this.y1-this.y2)>10)&&(this._preventTap=!0);else e.deltaX=0,e.deltaY=0;this.pressMove.dispatch(e,this.element)}null===(i=this.touchMove)||void 0===i||i.dispatch(e,this.element),this._cancelLongTap(),this.x2=o,this.y2=l,n>1&&t.preventDefault()}}},{key:"end",value:function(t){var i,e=h(t);if(this.isMoving&&(this.isMoving=!1),!o||t.changedTouches){e.touches||(e.touches=t.touches||[],e.touches[0]={pageX:t.pageX,pageY:t.pageY}),this._cancelLongTap();var s=this;o&&2>e.touches.length&&(this.multipointEnd.dispatch(e,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(e.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=window.setTimeout((function(){s.swipe.dispatch(e,s.element)}),0)):(this.tapTimeout=window.setTimeout((function(){var t;s.isDoubleTap&&(null===(t=s.doubleTap)||void 0===t||t.dispatch(e,s.element),s.isDoubleTap=!1)}),0),s.isDoubleTap||(s.singleTapTimeout=window.setTimeout((function(){var t;s._preventTap||(null===(t=s.singleTap)||void 0===t||t.dispatch(e,s.element))}),250))),null===(i=this.touchEnd)||void 0===i||i.dispatch(e,this.element),this.preV.x=0,this.preV.y=0,this.scale=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}}},{key:"cancelAll",value:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)}},{key:"cancel",value:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)}},{key:"_cancelLongTap",value:function(){clearTimeout(this.longTapTimeout)}},{key:"_cancelSingleTap",value:function(){clearTimeout(this.singleTapTimeout)}},{key:"_swipeDirection",value:function(t,i,e,s){return Math.abs(e-s)>Math.abs(t-i)?e-s>0?"up":"down":t-i>0?"left":"right"}},{key:"on",value:function(t,i){this[t]&&this[t].add(i)}},{key:"off",value:function(t,i){this[t]&&this[t].del(i)}},{key:"destroy",value:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener(o?"touchstart":"mousedown",this.start),o?(this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel)):(document.removeEventListener("mousemove",this.move),document.removeEventListener("mouseup",this.end)),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV={x:null,y:null},this.isMoving=this.pinchStartLen=this.scale=this.isDoubleTap=this.delta=this.last=this.now=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}}]),i}();export default p;
