$(document).ready(function () {
    $("#news-slider").owlCarousel({
        items: 4,
        navigation: true,
        navigationText: ["", ""],
        autoPlay: true
    });
    var imgWidth = ($('.news-grid-image').width() / 19) * 10;
    $('.news-grid-image').css('height', imgWidth);
});
