AOS.init();

$(document).ready(function () {

    function updateActiveLink() {

        $('section').each(function () {
            var sectionTop = $(this).offset().top - 100;
            var sectionBottom = sectionTop + $(this).outerHeight();

            var scrollPosition = $(window).scrollTop();


            if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
                var id = $(this).attr('id');

                $('.btn-menu').removeClass('active');

                $('a[href="#' + id + '"]').addClass('active');
            }
        });
    }


    $(window).on('scroll', function () {
        updateActiveLink();
    });


    updateActiveLink();


    $('.btn-menu').click(function () {
        $('.btn-menu').removeClass('active');
        $(this).addClass('active');
    });

    $('#menu-toggle').click(function () {
        $('.header__menu__list').toggleClass('menu-open');
    });

});
