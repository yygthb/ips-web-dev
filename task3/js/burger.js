const burger = $(".header_burger");
const headerNav = $(".header_nav");

burger.click((e) => {
    headerNav.addClass("visible");
});

headerNav.click((e) => {
    e.stopPropagation();
    headerNav.removeClass("visible");
});
