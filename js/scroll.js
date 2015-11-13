$(function() {

    var windowScroll = $(document);
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
    var scrollWatcherID;


    // Event Listeners

    // Scroll to target
    $('.menu-item a').each(function() {
        $(this).on('click', function(evt) {
            evt.preventDefault();
            var target = $(this).attr('href');
            clearInterval(scrollWatcherID);
            removeActive();
            $('body').animate({scrollTop: ($(target).offset().top - 75) }, 1200, function() {
                    scrollWatcher();
                });
        });
    });

    // Toggle active
    $('.menu-item').each(function() {
        $(this).on('click focusout', function(evt) {
            evt.preventDefault();
            $('.active').removeClass('active');
            $(this).toggleClass('active');

        });
    });

    // // Scroll event
    // function turnWindowScrollOn() {
    //     windowScroll.on('scroll', function() {
    //         console.log(windowScroll.scrollTop());
    //     setActiveSection();
    //     setTopBarHeight();
    //     });
    // }


    // Helper functions

    function addActive(menuItem) {
        $('.active').removeClass('active');
        menuItem.toggleClass('active');
    }

    function removeActive() {
        $('.active').removeClass('active');
    }

    function calcOffset(section) {
        return section.offset().top - 75; // Subtract 50 to provide space for fixed topbar
    }

    function inSection(section) {
        if (section === about) {
            return (windowScroll.scrollTop() === 0) || (windowScroll.scrollTop() < calcOffset(section.next()));
        }
        return (calcOffset(section) < windowScroll.scrollTop()) && (windowScroll.scrollTop() < calcOffset(section.next()));
    }

    function setActiveSection() {
        // console.log('setActive!');
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
        } else {
            addActive(aboutMenu);
        }
    }

    // function setTopBarHeight() {
    //     console.log('topbar');
    //     if ($(document).scrollTop() > 20) {
    //         $('.top-bar').removeClass('at-top');
    //         $('.top-bar').addClass('scrolling');
    //     } else {
    //         $('.top-bar').removeClass('scrolling');
    //         $('.top-bar').addClass('at-top');
    //     }
    // }

    function scrollWatcher() {
        scrollWatcherID = window.setInterval(setActiveSection, 200);
        // window.setInterval(setTopBarHeight, 400);

    }
        // var topBarWatcherID;
    // function topBarWatcher() {
    //     topBarWatcherID = window.setInterval(setTopBarHeight, 300);
    //     // turnOnTopBarWatcher();
    //     window.setInterval(pauseTopBar, 1000);
    // }


    // var topBarWatcherOn = true;

    // function pauseTopBar() {
    //     if (windowScroll.scrollTop() < 100) {
    //         topBarWatcherID = window.setInterval(setTopBarHeight, 400);
    //     }
    //     if (windowScroll.scrollTop() >= 100) {
    //         console.log(topBarWatcherID);
    //         topBarWatcherID = window.setInterval(setTopBarHeight, 12000); }

    //     // } else if (windowScroll.scrollTop() < 50) {
    //     //     topBarWatcherID = window.setInterval(setTopBarHeight, 400);
    //     //     console.log(topBarWatcherID);
    //     // } else {
    //     //     console.log(windowScroll.scrollTop() < 50);
    //     // }
    // }

    // function turnOnTopBarWatcher() {
    //     window.setInterval(setTopBarHeight, 400);

    // }


 // Determine initial active section and set
    scrollWatcher();
    // topBarWatcher();
    // setActiveSection();
    // Set window scroll event listener
    // turnWindowScrollOn();

});



