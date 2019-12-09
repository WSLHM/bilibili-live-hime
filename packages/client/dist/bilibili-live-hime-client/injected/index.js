/*!
 * bilibili-live-hime v1.0.1
 * Github: https://github.com/zhw2590582/bilibili-live-hime
 * (c) 2018-2019 Harvey Zack
 * Released under the MIT License.
 */

var BilibiliLiveHimeInjected=function(){"use strict";var t=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var n=function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t},i="blh";return new(function(){function e(){t(this,e),window.location.href.includes(i)&&this.init()}return n(e,[{key:"init",value:function(){this.getChatHistoryList().then((function(t){new MutationObserver((function(t){t.forEach((function(t){Array.from(t.addedNodes||[]).forEach((function(t){if(t.classList.contains("danmaku-item"))try{window.postMessage({type:"danmu",data:{uid:t.dataset.uid,uname:t.dataset.uname,text:t.dataset.danmaku}})}catch(t){}if(t.classList.contains("gift-item"))try{window.postMessage({type:"gift",data:{uid:null,uname:t.querySelector(".username").innerText.trim(),action:t.querySelector(".action").innerText.trim(),gift:t.querySelector(".gift-name").innerText.trim(),count:t.querySelector(".count").innerText.trim()}})}catch(t){}if(t.classList.contains("guard-buy"))try{window.postMessage({type:"guard",data:{uid:null,uname:t.querySelector(".username").innerText.trim(),action:"购买",gift:"舰长",count:t.querySelector(".count").innerText.trim()}})}catch(t){}}))}))})).observe(t,{childList:!0})})),this.getPenuryGiftMsg().then((function(t){new MutationObserver((function(t){t.forEach((function(t){Array.from(t.addedNodes||[]).forEach((function(t){try{window.postMessage({type:"gift",data:{uname:t.querySelector(".username").innerText.trim(),action:t.querySelector(".action").innerText.trim(),gift:t.querySelector(".gift-name").innerText.trim(),count:t.querySelector(".count").innerText.trim()}})}catch(t){}}))}))})).observe(t,{childList:!0})}))}},{key:"getChatHistoryList",value:function(){return new Promise((function(t){!function e(){var n=document.getElementById("chat-history-list");n?t(n):setTimeout(e,1e3)}()}))}},{key:"getPenuryGiftMsg",value:function(){return new Promise((function(t){!function e(){var n=document.getElementById("penury-gift-msg");n?t(n):setTimeout(e,1e3)}()}))}}]),e}())}();
