$('.menu-item a').each(function() {
    $(this).click(function(evt) {
        evt.preventDefault();
        target = $(this).attr('href');
        $('body').animate({scrollTop: $(target).offset().top }, 1200);
    });
});