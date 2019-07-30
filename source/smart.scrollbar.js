
<<<<<<< HEAD
/* Smart HTML Elements v4.0.0 (2019-Aug) 
=======
/* Smart HTML Elements v3.2.0 (2019-June) 
>>>>>>> origin/master
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-scroll-bar",class extends Smart.BaseElement{static get properties(){return{clickRepeatDelay:{type:"integer",value:50},largeStep:{type:"integer",value:100},min:{type:"integer",value:0},max:{type:"integer",value:1e3},mechanicalAction:{value:"switchWhileDragging",allowedValues:["switchUntilReleased","switchWhenReleased","switchWhileDragging"],type:"string"},orientation:{type:"string",value:"horizontal",allowedValues:["horizontal","vertical"]},step:{type:"integer",value:10},showButtons:{type:"boolean",value:!0,defaultReflectToAttribute:!0},value:{type:"integer",value:0}}}static get styleUrls(){return["smart.scrollbar.css"]}template(){return"<div id=\"container\" class=\"smart-container\">\n                    <div id=\"nearButton\" class =\"smart-scroll-button smart-arrow-left\"></div>\n                    <div  id=\"track\" class =\"smart-track\">\n                        <div id=\"thumb\" class=\"smart-thumb\"></div>\n                    </div>\n                    <div id=\"farButton\" class =\"smart-scroll-button smart-arrow-right\"></div>\n            </div>"}static get listeners(){return{"nearButton.click":"_nearButtonClickHandler","nearButton.mousedown":"_startRepeat","nearButton.mouseup":"_stopRepeat","nearButton.mouseenter":"_updateInBoundsFlag","nearButton.mouseleave":"_updateInBoundsFlag","farButton.click":"_farButtonClickHandler","farButton.mousedown":"_startRepeat","farButton.mouseup":"_stopRepeat","farButton.mouseenter":"_updateInBoundsFlag","farButton.mouseleave":"_updateInBoundsFlag","track.down":"_trackDownHandler","track.click":"_trackClickHandler","thumb.down":"_dragStartHandler","document.move":"_dragHandler","document.up":"_dragEndHandler",up:"_dragEndHandler","document.selectstart":"_selectStartHandler",resize:"_resizeHandler"}}_updateInBoundsFlag(a){const b=this,c=a.target;c._isPointerInBounds=!0,"mouseleave"===a.type&&(c._isPointerInBounds=!1);const d="buttons"in a?a.buttons:a.which;1!==d&&b._stopRepeat(a)}_startRepeat(a){const b=this;if(b.disabled)return;const c=a.target;c._initialTimer||(c._initialTimer=setTimeout(function(){c._repeatTimer=setInterval(()=>{if(c._isPointerInBounds){const b="buttons"in a?a.buttons:a.which;c.$.fireEvent("click",{buttons:b,clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY,screenX:a.screenX,screenY:a.screenY})}},b.clickRepeatDelay)},3*b.clickRepeatDelay))}_stopRepeat(a){const b=this;if(!b.disabled){const b=a.target;b._repeatTimer&&(clearInterval(b._repeatTimer),b._repeatTimer=null),b._initialTimer&&(clearTimeout(b._initialTimer),b._initialTimer=null)}}_calculateThumbSize(a){const b=this,c=b.max-b.min,d="horizontal"===b.orientation?10<b.$.track.offsetWidth:10<b.$.track.offsetHeight;let e=0;return 1<=c&&d?(e=a/(c+a)*a,0<=b.$.thumb.className.indexOf("smart-hidden")&&b.$thumb.removeClass("smart-hidden")):b.$thumb.addClass("smart-hidden"),Math.max(10,Math.min(e,a))}_dragStartHandler(a){const b=this;b.disabled||(b.thumbCapture=!0,b.dragStartX=a.clientX,b.dragStartY=a.clientY,b.dragStartValue=b.value,a.stopPropagation(),a.preventDefault())}_dragHandler(a){const b=this;if(!0!==b.thumbCapture)return;b._isThumbDragged=!0;const c=(b.max-b.min)/(b.scrollBarSize-b.thumbSize),d="horizontal"===b.orientation?(a.clientX-b.dragStartX)*c:(a.clientY-b.dragStartY)*c;let e=d;b.rightToLeft&&"horizontal"===b.orientation&&(e=-d),b._updateValue(b.dragStartValue+e),a.stopPropagation(),a.preventDefault(),a.originalEvent&&(a.originalEvent.stopPropagation(),a.originalEvent.preventDefault())}_dragEndHandler(a){const b=this;b._trackDownTimer&&(clearInterval(b._trackDownTimer),b._trackDownTimer=null);b.thumbCapture&&(b.thumbCapture=!1,b._isThumbDragged=!1,"switchWhenReleased"===b.mechanicalAction?b._updateValue(b.dragStartValue,b.value):"switchUntilReleased"===this.mechanicalAction&&b._updateValue(b.dragStartValue),a.preventDefault(),a.stopPropagation(),a.originalEvent.preventDefault(),a.originalEvent.stopPropagation())}_farButtonClickHandler(){const a=this;if(!a.disabled){const b=a.value;a._updateValue(a.value+a.step),"switchUntilReleased"===a.mechanicalAction&&a._updateValue(b)}}_nearButtonClickHandler(){const a=this;if(!a.disabled){const b=a.value;a._updateValue(a.value-a.step),"switchUntilReleased"===a.mechanicalAction&&a._updateValue(b)}}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;switch(a){case"min":case"max":case"orientation":case"showButtons":{d._layout();break}case"value":d._updateValue(b,c);break;default:d._layout();}}ready(){super.ready();const a=this;a._layout()}_resizeHandler(){const a=this;a._layout()}refresh(){const a=this;a._layout()}_layout(){const a=this;a.scrollBarSize="horizontal"===a.orientation?a.$.track.offsetWidth:a.$.track.offsetHeight,a.thumbSize=a._calculateThumbSize(a.scrollBarSize),"horizontal"===a.orientation&&a.$.thumb.style.width!==a.thumbSize+"px"?a.$.thumb.style.width=a.thumbSize+"px":"vertical"===a.orientation&&a.$.thumb.style.height!==a.thumbSize+"px"&&(a.$.thumb.style.height=a.thumbSize+"px"),"horizontal"===a.orientation?(a.$.nearButton.classList.contains("smart-arrow-up")&&a.$.nearButton.classList.remove("smart-arrow-up"),a.$.farButton.classList.contains("smart-arrow-down")&&a.$.farButton.classList.remove("smart-arrow-down"),!a.$.nearButton.classList.contains("smart-arrow-left")&&a.$.nearButton.classList.add("smart-arrow-left"),!a.$.farButton.classList.contains("smart-arrow-right")&&a.$.farButton.classList.add("smart-arrow-right")):(a.$.nearButton.classList.contains("smart-arrow-left")&&a.$.nearButton.classList.remove("smart-arrow-left"),a.$.farButton.classList.contains("smart-arrow-right")&&a.$.farButton.classList.remove("smart-arrow-right"),!a.$.nearButton.classList.contains("smart-arrow-up")&&a.$.nearButton.classList.add("smart-arrow-up"),!a.$.farButton.classList.contains("smart-arrow-down")&&a.$.farButton.classList.add("smart-arrow-down")),a._updateThumbPosition(),(a.value>a.max||a.value<a.min)&&a._updateValue(a.value,a.value>a.max?a.max:a.min)}_selectStartHandler(a){const b=this;b.thumbCapture&&a.preventDefault()}_trackDownHandler(a){const b=this;a.target===b.$.track&&(b._trackDownTimer&&clearInterval(b._trackDownTimer),b.thumbCapture||(b._trackDownTimer=setInterval(function(){b._trackClickHandler(a)},b.clickRepeatDelay),a.stopPropagation(),a.preventDefault()))}_trackClickHandler(a){const b=this;if(b.disabled)return;if(b._isThumbDragged)return clearInterval(b._trackDownTimer),void(b._trackDownTimer=null);const c=b.$.thumb.getBoundingClientRect(),d=a.pageX-window.pageXOffset,e=a.pageY-window.pageYOffset,f=b.value;"horizontal"===b.orientation?d>(b._isThumbDragged?b.dragStartX:c.right)?b._updateValue(b.value+b.largeStep):d<(b._isThumbDragged?b.dragStartX:c.left)&&b._updateValue(b.value-b.largeStep):e>(b._isThumbDragged?b.dragStartY:c.bottom)?b._updateValue(b.value+b.largeStep):e<(b._isThumbDragged?b.dragStartY:c.top)&&b._updateValue(b.value-b.largeStep),"switchUntilReleased"===b.mechanicalAction&&b._updateValue(f)}_updateValue(a,b){const c=this;if(1===arguments.length&&(b=a,a=c.value),(void 0===b||isNaN(b))&&(b=c.min),b>c.max&&(b=c.max),b<c.min&&(b=c.min),c.value=b,a!==b){if(c._updateThumbPosition(),c.thumbCapture&&"switchWhenReleased"===c.mechanicalAction)return;if(c.onChange)return void c.onChange({value:c.value,oldValue:a,min:c.min,max:c.max});c.$.fireEvent("change",{value:c.value,oldValue:a,min:c.min,max:c.max})}}_updateThumbPosition(){const a=this,b=a.$.track.offsetHeight,c=a.$.track.offsetWidth,d="horizontal"===a.orientation?c:b,e=a._calculateThumbSize(d),f="horizontal"===a.orientation?c-e:b-e;let g=(d-e)/(a.max-a.min)*(a.value-a.min);a.rightToLeft&&"horizontal"===a.orientation&&(g=(d-e)/(a.max-a.min)*(a.max-a.value-a.min)),g=Math.min(f,Math.max(0,g)),"vertical"===a.orientation&&a.$.thumb.style.top!==g+"px"?a.$.thumb.style.top=g+"px":"horizontal"===a.orientation&&a.$.thumb.style.left!==g+"px"&&(a.$.thumb.style.left=g+"px")}});