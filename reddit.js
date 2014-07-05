console.log("Hi reddit");

var removeClass = function (className) {
    Array.prototype.forEach.call(document.getElementsByClassName(className), function (e) {
        e.remove();
    });
};
Array.prototype.forEach.call(document.getElementsByClassName("content"), function (e) {
    e.style.marginLeft = "0";
});
removeClass("side");