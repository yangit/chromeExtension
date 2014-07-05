var cc = function () {
    console.log(arguments)
};

Array.prototype.forEach.call(document.getElementsByTagName("iframe"), function (e) {
    e.remove();
    cc("iframe");
});
Array.prototype.forEach.call(document.getElementsByTagName("script"), function (e) {
    e.remove();
    cc("script");
});


Array.prototype.forEach.call(document.getElementsByClassName("rb_banner"), function (e) {
    e.remove();
});


document.getElementById("adriver-240x120").remove();
document.getElementById("sidebar1").remove();
document.getElementById("nav-panel").remove();
document.getElementById("forums_wrap").children[0].children[0].children[0].children[1].remove();




