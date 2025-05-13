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

    $('.btn-menu').click(function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link

        $('.btn-menu').removeClass('active');
        $(this).addClass('active');

        var target = $(this).attr('href');

        // Animação de scroll suave
        $('html, body').animate({
            scrollTop: $(target).offset().top - 80 // Ajuste se necessário
        }, 600); // Duração em milissegundos (600ms)
    });

    $('#menu-toggle').click(function () {
        $('.header__menu__list').toggleClass('menu-open');
    });

});
