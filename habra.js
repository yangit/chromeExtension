console.log("Hi habra");

var removeClass = function (className) {
    Array.prototype.forEach.call(document.getElementsByClassName(className), function (e) {
        e.style.display = "none";
    });
};
Array.prototype.forEach.call(document.getElementsByClassName("content_left"), function (e) {
    e.style.marginRight = "0";
    e.style.paddingRight = "0";
    e.style.width = "100%";
});

Array.prototype.forEach.call(document.getElementsByClassName("inner"), function (e) {
    e.style.paddingRight = "0";
    e.style.paddingLeft = "0";    
});

removeClass("sidebar_right");


