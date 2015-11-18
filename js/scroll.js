$(function() {
    $('.menu-item a').each(function() {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('body').animate({scrollTop: ($(this.hash).offset().top - 65) }, 1200);
        });
    });
});



