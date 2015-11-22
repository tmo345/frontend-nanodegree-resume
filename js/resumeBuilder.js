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
    'welcomeMessage': 'Hello, my name is Timothy Moore. I own and operate Silver Cittern Web Development, LLC in Augusta, GA. My primary focus is building websites for clients using WordPress and the Genesis Framework.',
    'skills': ['html', 'css', 'javascript', 'jquery', 'php', 'WordPress', 'Genesis Framework'],
    'image': 'images/Timothy_Moore.jpg',
    'display': function() {

        var bioName = HTMLheaderName
                    .replace('%data%', this.name)
                    .replace('%link%', '/');
        var bioImage = HTMLbioPic.replace('%data%', this.image);
        var bioMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

        $('.navbar-header').append(bioName); // Append to navbar
        $('.biopicWelcome').prepend(bioImage);
        $('.welcomeMessageSkills').append(bioMessage);
        $('.welcomeMessageSkills').append(HTMLskillsStart);


        for (var contact in bio.contacts) {
            var bioContactEntry = HTMLcontactGeneric
                                    .replace('%contact%', contact)
                                    .replace('%data%', this.contacts[contact]);

            if (bio.contacts.hasOwnProperty(contact)) {
                $('#topContacts').append(bioContactEntry);
                $('#footerContacts').append(bioContactEntry);
            }
        }

        this.skills.forEach(function(skill) {
            var bioSkillEntry = HTMLskills.replace('%data%', skill);

            $('#skills').append(bioSkillEntry);
        });
    }
};

work = {
    'jobs': [
        {
            'employer': 'Silver Cittern Web Development, LLC',
            'title': 'Owner and Web Developer',
            'location': 'Augusta, Ga',
            'dates': 'October 2015 - Present',
            'description': 'Building and maintaining WordPress websites for businesses and organizations.',
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
            'employer': 'Medical College of Georgia',
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
            'employer': 'Wake Forest Baptist Medical Center',
            'title': 'Pediatrics Resident Physician',
            'location': 'Winston-Salem, NC',
            'dates': 'July 2009 - June 2011',
            'description': 'Physician in pediatrics residency training program. Duties included care of patients in both inpatient and outpatient settings.',
            'workURL': 'http://www.wakehealth.edu/'
        }
    ],
    'display': function() {
        this.jobs.forEach(function(job){

            var workTitle = HTMLworkTitle.replace('%data%', job.title);
            var workName = HTMLworkEmployer
                        .replace('%data%', job.employer)
                        .replace('%link%', job.workURL)
                        .replace('%title%', workTitle);
            var workDates = HTMLworkDates.replace('%data%', job.dates);
            var workLocation = HTMLworkLocation.replace('%data%', job.location);
            var workDescription = HTMLworkDescription.replace('%data%', job.description);

            $('#workExperience .sectionMain').append(HTMLworkStart);
            $('.work-entry:last .section-heading').append(workName);
            $('.work-entry:last .section-dates').append(workDates);
            $('.work-entry:last .section-location').append(workLocation);
            $('.work-entry:last .section-description').append(workDescription);


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
            var schoolDates = HTMLschoolDates.replace('%data%', school.dates);
            var schoolLocation = HTMLschoolLocation.replace('%data%', school.location);
            var schoolMajor = HTMLschoolMajor = HTMLschoolMajor.replace('%data%', school.majors[0]);


            $('.education-entry:last .section-heading').append(schoolName + schoolDegree);
            $('.education-entry:last .section-dates').append(schoolDates);
            $('.education-entry:last .section-location').append(schoolLocation);
            $('.education-entry:last .section-major').append(schoolMajor);


            // school.majors.forEach(function(major) {
            //     var schoolMajors = HTMLschoolMajor.replace('%data%', major);

            // });
        });

        // Online Courses
        $('#education .sectionMain').append(HTMLonlineClasses);
        this.onlineCourses.forEach(function(course) {
            $('#education .sectionMain').append(HTMLonlineStart);

            var courseName = HTMLonlineTitle.replace('%data%', course.title).replace('#', course.url);
            var schoolName = HTMLonlineSchool.replace('%data%', course.school);
            var courseDates = HTMLonlineDates.replace('%data%', course.dates);
            // var courseURL = HTMLonlineURL.replace('%data%', course.url);

            $('.online-entry:last').append(courseName + schoolName);
            $('.online-entry:last').append(courseDates);
            // $('.online-entry:last').append(courseURL);
        });
    }

};

projects = {
    'projects': [
        {
            'title': 'Horizon Eye Center',
            'dates': 'November 2015',
            'description': 'Website for ophthalmologist practice built using Genesis Framework on WordPress. Customized Altitude Pro Genesis child theme. wwww.horizoneyecenter.com',
            'image': 'images/HorizonEyeCenter.jpg'
        },
        {
            'title': 'Portfolio',
            'dates': 'October 2015',
            'description': 'Built and customized style of portfolio site from mockup as part of Udacity Front-End Web Developer Nanodegree.',
            'image': 'images/PortfolioProject.jpg'
        },
        {
            'title': 'Timothy J. Moore Portfolio',
            'dates': 'October 2015',
            'description': 'Portfolio website and contact for Silver Cittern Web Development built using Genesis Framework on WordPress. Customized Modern Portfolio Pro Genesis child theme. www.timothymoore.me',
            'image': 'images/TimothyMoorePortfolio.jpg'
        },
        {
            'title': 'Augusta Retina Consultants',
            'dates': 'May 2015',
            'description': 'Website for ophthalmologist\'s practice built using Genesis Framework on WordPress. Customized Executive Pro Genesis child theme. www.augustaretina.com',
            'image': 'images/AugustaRetina.jpg'
        },
        {
            'title': 'Mahmudah Institute',
            'dates': 'March 2015',
            'description': 'Website for nonprofit organization built using Genesis Framework on WordPress. Customized Outreach Pro Genesis child theme. www.mahmudahinstitute.org',
            'image': 'images/MahmudahInstitute.jpg'
        }
    ],
    'display': function() {

        // Projects display in boostrap columns
        // Use bootstrap clearfix divs to align different height project columns

        // Track project number as we iterate over projects.projects[]
        // We will use projectNumber to add project specific classes to each cleafix
        // Media query will hide all clearfixes and display clearfixes needed to
        //   align heights of project entries

        var projectNumber = 1;

        this.projects.forEach(function(project) {

            var projectTitle = HTMLprojectTitle.replace('%data%', project.title);
            var projectDates = HTMLprojectDates.replace('%data%', project.dates);
            var projectImage = HTMLprojectImage.replace('%data%', project.image);
            var projectDescription = HTMLprojectDescription.replace('%data%', project.description);

            $('.projectGrid').append(HTMLprojectStart);
            $('.project-entry:last').append(projectTitle);
            $('.project-entry:last').append(projectDates);
            $('.project-entry:last').append(projectImage);
            $('.project-entry:last').append(projectDescription);

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
        this.menuItems.forEach(function(menuItem) {
            var menuItem = HTMLheaderMenuItem
                            .replace('%link%', menuItem.link)
                            .replace('%data%', menuItem.section);
            $('.navbar-nav').append(menuItem);
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