var bio = {
    'name': 'Timothy J. Moore',
    'role': 'Web Developer',
    'contacts': {
        'email': 'tim@timothymoore.me',
        'github': 'tmo345',
        'location': 'Augusta, GA'
    },
    'welcomeMessage': 'Welcome to my resume.',
    'skills': ['html', 'css', 'javascript', 'jquery', 'php', 'WordPress', 'Genesis Framework'],
    'image': 'images/Timothy_Moore.jpg',
    // display method
    'display': function() {
        // $('#name-area').prepend(HTMLheaderRole.replace('%data%', this.role));
        $('#name-area').prepend(HTMLheaderName.replace('%data%', this.name));
        // button at bottom of page for internationalization of name
        $('main').append(internationalizeButton);

        for (var contact in this.contacts) {
            if (this.contacts.hasOwnProperty(contact)) {
                $('#topContacts').append(HTMLcontactGeneric.replace('%contact%', contact).replace('%data%', this.contacts[contact]));
                $('#footerContacts').append(HTMLcontactGeneric.replace('%contact%', contact).replace('%data%', this.contacts[contact]));
            }
        }

        $('.welcome').append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));
        $('.biopicWelcome').prepend(HTMLbioPic.replace('%data%', this.image));

        if (this.skills.length > 0) {
            $('.skills').append(HTMLskillsStart);
            for (var x = 0; x < this.skills.length; x++) {
                $('#skills').append(HTMLskills.replace('%data%', this.skills[x]));
            }
        }
    }
};

var work = {
    'jobs': [
        {
            'employer': 'Silver Cittern Web Development, LLC',
            'title': 'Owner and Web Developer',
            'location': 'Augusta, Ga',
            'dates': 'October 2015 - Present',
            'description': 'Own and operate business and build/maintain WordPress websites for businesses and organizations.'
        },
                {
            'employer': 'Self-employed',
            'title': 'Freelance Web Developer',
            'location': 'Augusta, GA',
            'dates': 'February 2015 - October 2015',
            'description': 'Building and maintaining WordPress websites for businesses and organizations'
        },
        {
            'employer': 'Medical College of Georgia at Georgia Regents University',
            'title': 'Consultant',
            'location': 'Augusta, GA',
            'dates': 'December 2013 - June 2015',
            'description': 'Wrote and developed online course materials for third year medical student clerkships.'
        },
        {
            'employer': 'Grovetown High School',
            'title': 'Science Teacher',
            'location': 'Grovetown, GA',
            'dates': 'August 2012 - April 2013',
            'description': 'Taught Environmental Science and Biology to high school freshman and sophomores.'
        },
        {
            'employer': 'Wake Forest University Baptist Medical Center',
            'title': 'Pediatrics Resident Physician',
            'location': 'Winston-Salem, NC',
            'dates': 'July 2009 - June 2011',
            'description': 'Physician in pediatrics residency training program. Duties included care of patients in both inpatient and outpatient settings.'
        }
    ],
    'display': function() {
        this.jobs.forEach(function(job){
            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(HTMLworkEmployer.replace('%data%', job.employer) + HTMLworkTitle.replace('%data%', job.title));
            $('.work-entry:last').append(HTMLworkDates.replace('%data%', job.dates) + HTMLworkLocation.replace('%data%', job.location));
            // $('.work-entry:last').append();
            $('.work-entry:last').append(HTMLworkDescription.replace('%data%', job.description));
        });
    }
};

var education = {
    'schools': [
        {
            'name': 'Medical College of Georgia',
            'location': 'Augusta, Ga',
            'degree': 'M.D.',
            'majors': ['Medicine'],
            'dates': 2009,
            'url': 'http://www.gru.edu/mcg/',
        },
        {
            'name': 'University of Georgia',
            'location': 'Athens, Ga',
            'degree': 'B.S. Microbiology',
            'majors': ['Microbiology'],
            'dates': 2005,
            'url': 'http://www.uga.edu'
        }

    ],
    'onlineCourses': [
        {
            'title': 'Javascript Basics',
            'school': 'Udacity',
            'dates': 'November 2015',
            'url': 'https://www.udacity.com/course/viewer#!/c-ud804-nd'
        },
        {
            'title': 'Responsive Web Design Fundamentals',
            'school': 'Udacity',
            'dates': 'October 2015',
            'url': 'https://www.udacity.com/course/viewer#!/c-ud893-nd'
        },
        {
            'title': 'Intro to HTML and CSS',
            'school': 'Udacity',
            'dates': 'October 2015',
            'url': 'https://www.udacity.com/course/viewer#!/c-ud304-nd'
        }
        // {
        //     'title': 'Responsive Images',
        //     'school': 'Udacity',
        //     'dates': 'October 2015 - Present',
        //     'url': 'https://www.udacity.com/course/viewer#!/c-ud882-nd'
        // },
        // {
        //     'title': 'How to Use Git and GitHub',
        //     'school': 'Udacity',
        //     'dates': 'October 2015 - Present',
        //     'url': 'https://www.udacity.com/course/viewer#!/c-ud775-nd/'
        // },

    ],
    'display': function() {
        this.schools.forEach(function(school) {
            $('#education').append(HTMLschoolStart);

            var schoolName = HTMLschoolName.replace('%data%', school.name).replace('#', school.url);
            var schoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
            $('.education-entry:last').append(schoolName + schoolDegree);
            // $('.education-entry:last').append(HTMLschoolLocation.replace('%data%', school.location) + HTMLschoolDates.replace('%data%', school.dates));
            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', school.dates) + HTMLschoolLocation.replace('%data%', school.location));
            for (var x = 0; x < school.majors.length; x++) {
                $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', school.majors[x]));
            }
        });
        $('#education').append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(course) {
            $('#education').append(HTMLonlineStart);

            var courseName = HTMLonlineTitle.replace('%data%', course.title).replace('#', course.url);
            var schoolName = HTMLonlineSchool.replace('%data%', course.school);
            $('.online-entry:last').append(courseName + schoolName);
            $('.online-entry:last').append(HTMLonlineDates.replace('%data%', course.dates));
            $('.online-entry:last').append(HTMLonlineURL.replace('%data%', course.url));
        });
    }

};

var projects = {
    'projects': [
        {
            'title': 'Horizon Eye Center Website',
            'dates': 'Live November 2015',
            'description': 'Website for ophthalmologist practice built using Genesis Framework on WordPress. Customized Altitude Pro Genesis child theme. wwww.horizoneyecenter.com',
            'images': ['images/HEC.jpg']
        },
        {
            'title': 'Portfolio - Udacity Front-End Web Developer Nanodegree',
            'dates': 'October 2015',
            'description': 'Built and customized style of portfolio site from mockup',
            'images': ['images/Portfolio-P1.jpg']
        },
        {
            'title': 'Timothy J. Moore Portfolio Website',
            'dates': 'Live October 2015, Maintained October 2015 - Present',
            'description': 'Portfolio website and contact for Silver Cittern Web Development built using Genesis Framework on WordPress. Customized Modern Portfolio Pro Genesis child theme. www.timothymoore.me',
            'images': ['images/timothymoore-500.jpg']
        },
        {
            'title': 'Augusta Retina Consultants Website',
            'dates': 'Live May 2015, Maintained May 2015 - Present',
            'description': 'Website for ophthalmologist\'s practice built using Genesis Framework on WordPress. Customized Executive Pro Genesis child theme. www.augustaretina.com',
            'images': ['images/Augusta_Retina-740x737.jpg']
        },
        {
            'title': 'Mahmudah Institute of Wellness and Mindful Living Website',
            'dates': 'Live March 2015, Maintained March 2015 - Present',
            'description': 'Website for nonprofit organization built using Genesis Framework on WordPress. Customized Outreach Pro Genesis child theme. www.mahmudahinstitute.org',
            'images': ['images/Mahmudah_Institute_Featured-1-740x735.jpg']
        }
    ],
    'display': function() {
        // Using Foundation for grid based layout
        // Need 2 projects per row

        // Set numberOfProjects counter
        var numberOfProjectsCounter = 0;

        // Iterate over projects to increment to number of projects
        this.projects.forEach(function(project) {
            numberOfProjectsCounter++;
        });

        // Calculate number of rows needed
        var numberOfRows = Math.ceil(numberOfProjectsCounter / 2);

        // Append the number of rows needed with class for row-n
        for (var i = 0; i < numberOfRows; i++) {
            $('#projects').append('<div class="row row-' + (i + 1) + '"></div>');
        }

        // Keep track of rows and project numbers
        var rowCounter = 1;
        var projectNumber = 0;

        // Append each project to the appropriate row
        this.projects.forEach(function(project) {
            // Append project start to current row using .row-n class from above
            $('.row-' + rowCounter).append(HTMLprojectStart);

            // Append project information to last project entry
            $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', project.title));
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%', project.dates));
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', project.description));
            $('.project-entry:last').append(HTMLprojectImage.replace('%data%', project.images));

            // Check to see if we are on first or second project in a row
            // Odd project numbers are second in row, so we need to incredment rowCounter to ensure
            // we append next project to the next row
            if (projectNumber % 2 !== 0) {
                rowCounter++;
            }

            projectNumber++;
        });
    }
};

var menu = {
    'menuItems': [
        {
            'section': 'About',
            'link': '#about',
            'class': 'aboutMenu'
        },
        {
            'section': 'Work Experience',
            'link': '#workExperience',
            'class': 'workMenu'
        },
        {
            'section': 'Projects',
            'link': '#projects',
            'class': 'projectsMenu'
        },
        {
            'section': 'Education',
            'link': '#education',
            'class': 'educationMenu'
        },
        {
            'section': 'Places Lived & Worked',
            'link': '#mapDiv',
            'class': 'mapMenu'
        }

    ],
    'display': function() {
        this.menuItems.forEach(function(menuItem){
            // $('.top-bar-section ul').append(HTMLheaderMenuStart
            //         .replace('%dataAttr%', menuItem.class)
            //         .replace('%dataMagellan%', menuItem.link.slice(1)));
            $('.top-bar-section').append(HTMLheaderMenuItem
                    .replace('%dataMagellan%', menuItem.link.slice(1))
                    .replace('%link%', menuItem.link)
                    .replace('%data%', menuItem.section));
        });
    }
};




var inName = function() {
    var nameArray = bio.name.trim().split(' ');
    nameArray[1] = nameArray[1].toUpperCase();
    nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    return nameArray.join(' ');
};



$('#mapDiv').append(googleMap);


bio.display();
work.display();
projects.display();
education.display();
menu.display();




