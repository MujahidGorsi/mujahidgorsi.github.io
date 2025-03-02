let scripts = [
    "/assets/js/vendor/modernizr-3.5.0.min.js",
    "/assets/js/popper.min.js",
    "/assets/js/bootstrap.min.js",
    "/assets/js/slick.min.js",
    "/assets/js/ajax-form.js",
    "/assets/js/paroller.js",
    "/assets/js/wow.min.js",
    "/assets/js/js_isotope.pkgd.min.js",
    "/assets/js/imagesloaded.min.js",
    "/assets/js/parallax.min.js",
    "/assets/js/jquery.waypoints.min.js",
    "/assets/js/jquery.counterup.min.js",
    "/assets/js/jquery.scrollUp.min.js",
    "/assets/js/jquery.meanmenu.min.js",
    "/assets/js/parallax-scroll.js",
    "/assets/js/jquery.magnific-popup.min.js",
    "/assets/js/element-in-view.js",
    "/assets/js/main.js",
];

scripts.forEach(src => {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
});