---
layout: null
---

window.onload = function () {
    var script = document.createElement('script');
    var firstScript = document.getElementsByTagName('script')[0];
    script.async = true;
    script.src = './sw-register.js?v=' + Date.now();
    firstScript.parentNode.insertBefore(script, firstScript);
};
