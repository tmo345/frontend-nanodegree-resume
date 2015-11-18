// Scroll animation
$(function() {
    $('.menu-item a').each(function() {
        $(this).on('click', function(e) {
            e.preventDefault();
            // Offset - 75: 60px width of fixed menu + 15px for clearance above target
            $('body').animate({scrollTop: ($(this.hash).offset().top - 75) }, 1200);
        });
    });
});



