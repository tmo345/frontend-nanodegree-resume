var bio, // object - About section
    work, // object - Work Experience section
    education, // object - Education section
    projects, // object - Projects section
    menu, // object - navbar menu
    inName; // function - internation name button


bio = {
    'name': 'Timothy J. Moore',
    'role': 'Web Developer',
    'contacts': {
        'email': 'tim@timothymoore.me',
        'github': 'tmo345',
        'location': 'Augusta, GA'
    },
    'welcomeMessage': 'Hello, my name is Timothy Moore. I currently own and operate Silver Cittern Web Development, LLC in Augusta, GA. My primary focus is building websites for clients using WordPress and the Genesis Framework.',
    'skills': ['html', 'css', 'javascript', 'jquery', 'php', 'WordPress', 'Genesis Framework'],
    'image': 'images/Timothy_Moore.jpg',
    'display': function() {
        // $('#name-area').prepend(HTMLheaderRole.replace('%data%', this.role));
        $('.navbar-header').append(HTMLheaderName
            .replace('%data%', this.name)
            .replace('%link%', '/'));

        for (var contact in this.contacts) {
            if (this.contacts.hasOwnProperty(contact)) {
                $('#topContacts').append(HTMLcontactGeneric
                    .replace('%contact%', contact)
                    .replace('%data%', this.contacts[contact]));
                $('#footerContacts').append(HTMLcontactGeneric
                    .replace('%contact%', contact)
                    .replace('%data%', this.contacts[contact]));
            }
        }

        $('.welcomeMessageSkills').append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));
        $('.biopicWelcome').prepend(HTMLbioPic.replace('%data%', this.image));

        if (this.skills.length > 0) {
            $('.welcomeMessageSkills').append(HTMLskillsStart);
            for (var x = 0; x < this.skills.length; x++) {
                $('#skills').append(HTMLskills.replace('%data%', this.skills[x]));
            }
        }
    }
};

work = {
    'jobs': [
        {
            'employer': 'Silver Cittern Web Development, LLC',
            'title': 'Owner and Web Developer',
            'location': 'Augusta, Ga',
            'dates': 'October 2015 - Present',
            'description': 'Own and operate business and build/maintain WordPress websites for businesses and organizations.',
            'workURL': 'http://www.timothymoore.me'
        },
                {
            'employer': 'Freelancer',
            'title': 'Freelance Web Developer',
            'location': 'Augusta, GA',
            'dates': 'February 2015 - October 2015',
            'description': 'Building and maintaining WordPress websites for businesses and organizations.',
            'workURL': 'http://www.timothymoore.me'
        },
        {
            'employer': 'Medical College of Georgia at Georgia Regents University',
            'title': 'Consultant',
            'location': 'Augusta, GA',
            'dates': 'December 2013 - June 2015',
            'description': 'Wrote and developed online course materials for third year medical student clerkships.',
            'workURL': 'http://www.gru.edu/mcg/'
        },
        {
            'employer': 'Grovetown High School',
            'title': 'Science Teacher',
            'location': 'Grovetown, GA',
            'dates': 'August 2012 - April 2013',
            'description': 'Taught Environmental Science and Biology to high school freshman and sophomores.',
            'workURL': 'http://www.edline.net/pages/Grovetown_High'
        },
        {
            'employer': 'Wake Forest University Baptist Medical Center',
            'title': 'Pediatrics Resident Physician',
            'location': 'Winston-Salem, NC',
            'dates': 'July 2009 - June 2011',
            'description': 'Physician in pediatrics residency training program. Duties included care of patients in both inpatient and outpatient settings.',
            'workURL': 'http://www.wakehealth.edu/'
        }
    ],
    'display': function() {
        this.jobs.forEach(function(job){
            var workName, // job.employer
                workDates, // job.dates
                workTitle, // job.title
                workLocation; // job.location

            workName = HTMLworkEmployer.replace('%data%', job.employer).replace('%link%', job.workURL);
            workDates = HTMLworkDates.replace('%data%', job.dates);
            workTitle = HTMLworkTitle.replace('%data%', job.title);
            workLocation = HTMLworkLocation.replace('%data%', job.location);

            $('#workExperience .sectionMain').append(HTMLworkStart);
            $('.work-entry:last').append(workName + workDates);
            $('.work-entry:last').append(workTitle + workLocation);
            $('.work-entry:last').append(HTMLworkDescription.replace('%data%', job.description));
        });
    }
};

education = {
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
            'degree': 'B.S.',
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
        // Schools attended
        this.schools.forEach(function(school) {
            $('#education .sectionMain').append(HTMLschoolStart);

            var schoolName = HTMLschoolName
                .replace('%data%', school.name)
                .replace('#', school.url);
            var schoolDegree = HTMLschoolDegree.replace('%data%', school.degree);
            $('.education-entry:last').append(schoolName + schoolDegree);

            $('.education-entry:last').append(HTMLschoolDates.replace('%data%', school.dates) + HTMLschoolLocation.replace('%data%', school.location));
            for (var x = 0; x < school.majors.length; x++) {
                $('.education-entry:last').append(HTMLschoolMajor.replace('%data%', school.majors[x]));
            }
        });

        // Online Courses
        $('#education .sectionMain').append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(course) {
            $('#education .sectionMain').append(HTMLonlineStart);

            var courseName = HTMLonlineTitle.replace('%data%', course.title).replace('#', course.url);
            var schoolName = HTMLonlineSchool.replace('%data%', course.school);
            $('.online-entry:last').append(courseName + schoolName);
            $('.online-entry:last').append(HTMLonlineDates.replace('%data%', course.dates));
            $('.online-entry:last').append(HTMLonlineURL.replace('%data%', course.url));
        });
    }

};

projects = {
    'projects': [
        {
            'title': 'Horizon Eye Center',
            'dates': 'November 2015',
            'description': 'Website for ophthalmologist practice built using Genesis Framework on WordPress. Customized Altitude Pro Genesis child theme. wwww.horizoneyecenter.com',
            'images': ['images/HorizonEyeCenter.jpg']
        },
        {
            'title': 'Portfolio',
            'dates': 'October 2015',
            'description': 'Built and customized style of portfolio site from mockup as part of Udacity Front-End Web Developer Nanodegree.',
            'images': ['images/PortfolioProject.jpg']
        },
        {
            'title': 'Timothy J. Moore Portfolio',
            'dates': 'October 2015',
            'description': 'Portfolio website and contact for Silver Cittern Web Development built using Genesis Framework on WordPress. Customized Modern Portfolio Pro Genesis child theme. www.timothymoore.me',
            'images': ['images/TimothyMoorePortfolio.jpg']
        },
        {
            'title': 'Augusta Retina Consultants',
            'dates': 'May 2015',
            'description': 'Website for ophthalmologist\'s practice built using Genesis Framework on WordPress. Customized Executive Pro Genesis child theme. www.augustaretina.com',
            'images': ['images/AugustaRetina.jpg']
        },
        {
            'title': 'Mahmudah Institute',
            'dates': 'March 2015',
            'description': 'Website for nonprofit organization built using Genesis Framework on WordPress. Customized Outreach Pro Genesis child theme. www.mahmudahinstitute.org',
            'images': ['images/MahmudahInstitute.jpg']
        }
    ],
    'display': function() {
        var projectNumber;
        // Projects display in boostrap columns
        // Use bootstrap clearfix divs to align different height project columns

        // Track project number as we iterate over projects.projects[]
        // We will use projectNumber to add project specific classes to each cleafix
        // Media query will hide all clearfixes and display clearfixes needed to
        //   align heights of project entries

        projectNumber = 1;

        this.projects.forEach(function(project) {

            $('.projectGrid').append(HTMLprojectStart);
            $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', project.title));
            $('.project-entry:last').append(HTMLprojectDates.replace('%data%', project.dates));
            $('.project-entry:last').append(HTMLprojectImage.replace('%data%', project.images[0]));
            $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', project.description));
            if (window.innerHeight )
            $('.projectGrid').append('<div id="clearProject-' + projectNumber + '" class="clearfix visible-sm-block"></div>');

            projectNumber++;
        });
    }
};

menu = {
    'menuItems': [
        {
            'section': 'About',
            'link': '#about',
            'class': 'aboutMenu'
        },
        {
            'section': 'Work',
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
            'section': 'Locations',
            'link': '#mapDiv',
            'class': 'mapMenu'
        }

    ],
    'display': function() {
        this.menuItems.forEach(function(menuItem){
            $('.navbar-nav').append(HTMLheaderMenuItem
                    .replace('%link%', menuItem.link)
                    .replace('%data%', menuItem.section));
        });
    }
};




inName = function() {
    var nameArray = bio.name.trim().split(' ');
    nameArray[1] = nameArray[1].toUpperCase();
    nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    return nameArray.join(' ');
};



menu.display();
bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv .sectionMain').append(googleMap);