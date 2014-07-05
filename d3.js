var removeClass = function (className) {
    Array.prototype.forEach.call(document.getElementsByClassName(className), function (e) {
        e.style.display = "none";
    });
};

removeClass("l-content_aside");
removeClass("b-sidebar");
removeClass("b-user_ad_container");


Array.prototype.forEach.call(document.getElementsByClassName("l-i-content_main"), function (e) {
    e.style.paddingLeft = "0";
});

Array.prototype.forEach.call(document.getElementsByClassName("l-content_main"), function (e) {
    e.style.marginLeft = "0";
});
Array.prototype.forEach.call(document.getElementsByClassName("l-i-wrapper"), function (e) {
    e.style.backgroundImage="url('')";
});

var e = document.getElementById("js-posts_holder");
if (e) {
    e.style.paddingRight = "0";
}


console.log("Hi d3");
