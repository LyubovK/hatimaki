$(function(){
    $('.header-notification_close').click(function(){
        $(this).parents('.header-notification').addClass('hidden');
        $('header').css('margin-top','0');
    });
    $('#humburger-icon').click(function(){
        $(this).toggleClass('open');
        $(this).toggleClass('active');

        $('.navbar-menu_mobile').toggleClass('open');
    });
    $('.single-item').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
                        });
    $('.slick-menu').slick({
        arrows: false,
        infinite: false,
        slidesToShow: 16,
        responsive: [
            { breakpoint: 961,
            settings: {
                arrows: true,
                slidesToShow: 10,
                slidesToScroll: 5
            }},
            { breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow:4,
                slidesToScroll: 4
            }}
        ]});
});