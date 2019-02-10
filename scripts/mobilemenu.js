function openMenu() {
    document.querySelector(".mobileMenu").classList.add("open");
    document.querySelector(".menuList").classList.add("appear");
    document.querySelector(".menuList").classList.remove("disappear");
}

function closeMenu() {
    document.querySelector(".mobileMenu").classList.remove("open");
    document.querySelector(".menuList").classList.remove("appear");
    document.querySelector(".menuList").classList.add("disappear");
}

function removeClass() {
    document.querySelector(".mobileMenu").classList.remove("close");
    document.querySelector(".menuList").classList.add("disappear");
}

// window.onscroll = function() {
//     if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//         document.querySelector(".main_menu").classList.add("test");
//     }
//     else {
//         document.querySelector(".main_menu").classList.remove("test");
//     }
// }

// Make Mobile Menu disappear scrolling down/ appear scroll up
var scrollPos = 0;
window.addEventListener('scroll', function(){
    if (document.body.getBoundingClientRect().top > scrollPos) {
        document.querySelector(".main_menu").classList.remove("test");
        document.querySelector(".main_menu").classList.add("test2");
    } else {
        document.querySelector(".main_menu").classList.remove("test2");
        document.querySelector(".main_menu").classList.add("test");
    }
    scrollPos = (document.body.getBoundingClientRect()).top;
});
