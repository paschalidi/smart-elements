
<<<<<<< HEAD
/* Smart HTML Elements v4.0.0 (2019-Aug) 
=======
/* Smart HTML Elements v3.2.0 (2019-June) 
>>>>>>> origin/master
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-base-progress-bar",class extends Smart.BaseElement{static get properties(){return{indeterminate:{value:!1,type:"boolean"},inverted:{value:!1,type:"boolean"},formatFunction:{value:null,type:"function"},max:{value:100,type:"number"},min:{value:0,type:"number"},showProgressValue:{value:!1,type:"boolean"},value:{value:0,type:"number?"}}}static get styleUrls(){return["smart.progressbar.css"]}ready(){super.ready();const a=this;a._updateProgress()}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;d._updateProgress(),"value"===a&&d.$.fireEvent("change",{value:c,oldValue:b,changeType:"api"})}_updateProgress(){}get _percentageValue(){var a=Math.min,b=Math.max;const c=this,d=b(c.min,c.max),e=a(c.min,c.max),f=a(d,b(e,c.value));return(f-e)/(d-e)}}),Smart("smart-circular-progress-bar",class extends Smart.BaseProgressBar{template(){return`<div id="container">
                    <svg width="100%" height="100%" viewPort="0 0 100 100" viewBox="0 0 100 100">
                       <circle id="value" class ="smart-value-path" r="50" cx="50" cy="50" transform="rotate(270 50 50)"></circle>
                       <circle id="value" class ="smart-value" r="50" cx="50" cy="50" transform="rotate(270 50 50)"></circle>
                    </svg>
                    <div class ="smart-label-container">
                        <content></content>
                        <span id="label" class ="smart-label"></span>
                    </div>
                </div>`}static get listeners(){return{resize:"_resizeHandler"}}ready(){super.ready();const a=this;a.$.container.style.width=a.$.container.style.height=Math.min(a.offsetWidth,a.offsetHeight)+"px",a.$.hasClass("echo-animation")&&(a.value=a.max,a._updateProgress())}_resizeHandler(){const a=this;a.$.container.style.width=a.$.container.style.height=Math.min(a.offsetWidth,a.offsetHeight)+"px"}_updateProgress(){var a=Math.PI;super._updateProgress();const b=this,c=b.indeterminate?100*a:100*a-100*(b._percentageValue*a),d=!!document.documentMode,e=!d&&!!window.StyleMedia;if(b.showProgressValue){const a=parseInt(100*b._percentageValue);b.$.label.innerHTML=b.formatFunction?b.formatFunction(a):a+"%"}else b.$.label.innerHTML="";return d||e?null===b.value||b.indeterminate?(b.$.value.style.strokeDashoffset="",void b.$.value.setAttribute("class","smart-value smart-value-animation-ms")):(b.$.value.setAttribute("class","smart-value"),void(b.$.value.style.strokeDashoffset=b.inverted?-c:c)):(b.$.value.style.strokeDashoffset=b.inverted?-c:c,null===b.value||b.indeterminate?void b.$value.addClass("smart-value-animation"):void b.$value.removeClass("smart-value-animation"))}}),Smart("smart-progress-bar",class extends Smart.BaseProgressBar{static get properties(){return{orientation:{value:"horizontal",allowedValues:["horizontal","vertical"],type:"string"}}}template(){return`<div>
                    <div id="value" class="smart-value"></div>
                    <div id="label" class ="smart-label"></div>
                </div>`}_updateProgress(){super._updateProgress();const a=this;if(a.showProgressValue){const b=parseInt(100*a._percentageValue);a.$.label.innerHTML=a.formatFunction?a.formatFunction(b):b+"%"}else a.$.label.innerHTML="";null===a.value||a.indeterminate?a.$value.addClass("smart-value-animation"):a.$value.removeClass("smart-value-animation"),a.$.value.style.transform="horizontal"===a.orientation?"scaleX("+a._percentageValue+")":"scaleY("+a._percentageValue+")"}});