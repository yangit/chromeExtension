console.log("Hi reddit");

var hideClass = function (className) {
    Array.prototype.forEach.call(document.getElementsByClassName(className), function (e) {
        e.style.display = "none";
    });
};
Array.prototype.forEach.call(document.getElementsByClassName("content"), function (e) {
    e.style.marginLeft = "0";
});
hideClass("side");

Array.prototype.forEach.call(document.getElementsByClassName("md"), function (e) {
    e.style.maxWidth="1000em";    
});