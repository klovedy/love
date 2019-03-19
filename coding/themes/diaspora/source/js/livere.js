// 来必力City版

(function(d, s) {
    var j, e = d.getElementsByTagName(s)[0];
    var el = document.getElementById("lv-container");
    var flag = el.getAttribute("flag")||"0";
    if(flag == "1") return;
    if (typeof LivereTower === 'function') { return; }
    j = d.createElement(s);
    j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
    j.async = true;
    e.parentNode.insertBefore(j, e);
    el.setAttribute("flag", "1");
})(document, 'script');
