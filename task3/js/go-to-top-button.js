const scrollButton = $(".button_scroll");
$(window).scroll(() => {
    if ($(window).scrollTop() >= 400) {
        scrollButton.addClass("visible");
    } else {
        scrollButton.removeClass("visible");
    }
});

scrollButton.click(() => {
    $("html").animate({ scrollTop: 0 }, "slow");
});
