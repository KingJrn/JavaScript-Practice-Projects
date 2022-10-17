document.addEventListener("DOMContentLoaded", () => {
    //select the nav bar and create array of itds classes
    let navElement = document.getElementById("navElement");
    let navList = navElement.classList;
    // window scroll event set to 50px
    window.addEventListener("scroll", () => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navList.add("activeNavbar");
            $(".navbar .navbar-brand a, .navbar .navbar-end *:not(#home)").addClass("colorText")
        } else {
            $(".navbar .navbar-brand a, .navbar .navbar-end *:not(#home)").removeClass("colorText")
            navList.remove("activeNavbar");
        }
    });
    // toggle is-active on the navbar-burger 
    $(".navbar-burger").on("click", function () {
        $(this).toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active mobile-menu");
    })

})