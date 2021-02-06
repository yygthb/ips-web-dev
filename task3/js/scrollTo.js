const navLinks = $(".nav_item");

navLinks.on("click", (e) => {
    // console.log('click on target: ', e.currentTarget.hash)
    $.scrollTo(e.currentTarget.hash, 1000);
});
