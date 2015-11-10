$(function() {

    var windowScroll = $(window);
    var about = $('#about');
    var aboutMenu = $('.aboutMenu');
    var work = $('#workExperience');
    var workMenu = $('.workMenu');
    var projects = $('#projects');
    var projectsMenu = $('.projectsMenu');
    var education = $('#education');
    var educationMenu = $('.educationMenu');
    var map = $('#mapDiv');
    var mapMenu = $('.mapMenu');


    // Determine initial active section and set
    setActiveSection();
    // Set window scroll event listener
    turnWindowScrollOn();

    // Event Listeners

    // Scroll to target
    $('.menu-item a').each(function() {
        $(this).click(function(evt) {
            evt.preventDefault();
            target = $(this).attr('href');
            windowScroll.off('scroll');
            $('body').animate({scrollTop: ($(target).offset().top - 40) }, 1200, function() {turnWindowScrollOn()});
        });
    });

    // Toggle active
    $('.menu-item').each(function() {
        $(this).click(function(evt) {
            evt.preventDefault();
            $('.active').removeClass('active');
            $(this).toggleClass('active');

        })
    });

    // Scroll event
    function turnWindowScrollOn() {
        windowScroll.on('scroll', function() {
           setActiveSection();
        });
    }


    // Helper functions

    function addActive(menuItem) {
        $('.active').removeClass('active');
        if (!(menuItem).is('.active')) {
            menuItem.addClass('active');
        }
    }

    function calcOffset(section) {
        return section.offset().top - 50;
    }

    function inSection(section) {
        return (calcOffset(section) < windowScroll.scrollTop()) && (windowScroll.scrollTop() < calcOffset(section.next()));
    }

    function setActiveSection() {
        if (inSection(about)) {
                addActive(aboutMenu);
            } else if (inSection(work)) {
                addActive(workMenu);
            } else if (inSection(projects)) {
                addActive(projectsMenu);
            } else if (inSection(education)) {
                addActive(educationMenu);
            } else if (inSection(map)) {
                addActive(mapMenu);
            }
    }

});



