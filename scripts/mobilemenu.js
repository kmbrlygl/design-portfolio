function openMenu() {
    document.querySelector(".mobileMenu").classList.add("open");
    document.querySelector(".menuList").classList.add("appear");
    document.querySelector(".menuList").classList.remove("disappear");
    document.querySelector("body").classList.add("noScroll");
}

function closeMenu() {
    document.querySelector(".mobileMenu").classList.remove("open");
    document.querySelector(".menuList").classList.remove("appear");
    document.querySelector(".menuList").classList.add("disappear");
    document.querySelector("body").classList.remove("noScroll");
}

function removeClass() {
    document.querySelector(".mobileMenu").classList.remove("close");
    document.querySelector(".menuList").classList.add("disappear");
    document.querySelector("body").classList.remove("noScroll");
}

// Make Mobile Menu disappear scrolling down/ appear scroll up
var scrollPos = 0;
window.addEventListener('scroll', function(){
    if (document.body.getBoundingClientRect().top > scrollPos) {
        document.querySelector(".main_menu").classList.remove("menuHide");
        document.querySelector(".main_menu").classList.add("menuAppear");
    } else if (!document.querySelector("body").classList.contains("noScroll")) {
        document.querySelector(".main_menu").classList.remove("menuAppear");
        document.querySelector(".main_menu").classList.add("menuHide");
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
});
