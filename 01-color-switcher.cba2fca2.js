!function(){var t={buttonStart:document.querySelector("button[data-start]"),buttonStop:document.querySelector("button[data-stop]"),bodyEl:document.querySelector("body")},o=null;t.buttonStop.classList.add("disabled"),t.buttonStart.addEventListener("click",(function(){t.buttonStart.classList.add("disabled"),t.buttonStop.classList.remove("disabled"),o=setInterval((function(){t.bodyEl.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),t.buttonStop.addEventListener("click",(function(){t.buttonStart.classList.remove("disabled"),t.buttonStop.classList.add("disabled"),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.cba2fca2.js.map
