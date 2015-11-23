// Scroll animation
$(function() {
  $('.menu-item a').each(function() {
    $(this).on('click', function(e) {
        e.preventDefault();
        // Offset - 85: 60px width of fixed menu + 25px for clearance above target
        $('body').animate({scrollTop: ($(this.hash).offset().top - 85) }, 1200);
    });
  });
});



