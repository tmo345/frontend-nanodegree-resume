var work = {
    "jobs": [
        {
            "employer": "Wake Forest University Baptist Medical Center",
            "title": "Pediatrics Resident Physician",
            "location": "Winston-Salem, NC",
            "dates": "July 2009 - June 2011",
            "description": "Physician in pediatrics residency training program. Duties included care of patients in both inpatient and outpatient settings."
        },
        {
            "employer": "Grovetown High School",
            "title": "Science Teacher",
            "location": "Grovetown, GA",
            "dates": "August 2012 - April 2013",
            "description": "Taught Environmental Science and Biology to high school freshman and sophpmores"
        },
        {
            "employer": "Medical College of Georgia at Georgia Regents University",
            "title": "Consultant",
            "location": "Augusta, GA",
            "dates": "December 2013 - June 2015",
            "description": "Wrote and developed online course materials for third year medical student clerkships."
        },
        {
            "employer": "Self-employed",
            "title": "Freelance Web Developer",
            "location": "Augusta, GA",
            "dates": "February 2015 - October 2015",
            "description": "Building and maintaining WordPress websites for businesses and organizations"
        },
        {
            "employer": "Silver Cittern Web Development, LLC",
            "title": "Owner and Web Developer",
            "location": "Augusta, Ga",
            "dates": "October 2015 - Present",
            "description": "Own and operate business and build/maintain WordPress websites for businesses and organizations."
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Mahmudah Institute of Wellness and Mindful Living Website",
            "dates": "Live March 2015, Maintained March 2015 - Present",
            "description": "Website for nonprofit organization built using Genesis Framework on WordPress. Customized Outreach Pro Genesis child theme. www.mahmudahinstitute.org",
            "images": ["images/Mahmudah_Institute_Featured-1-740x735.jpg"]
        },
        {
            "title": "Augusta Retina Consultants Website",
            "dates": "Live May 2015, Maintained May 2015 - Present",
            "description": "Website for ophthalmologist's practice built using Genesis Framework on WordPress. Customized Executive Pro Genesis child theme. www.augustaretina.com",
            "images": ["images/Augusta_Retina-740x737.jpg"]
        },
        {
            "title": "Timothy J. Moore Portfolio Website",
            "dates": "Live October 2015, Maintained October 2015 - Present",
            "description": "Portfolio website and contact for Silver Cittern Web Development built using Genesis Framework on WordPress. Customized Modern Portfolio Pro Genesis child theme. www.timothymoore.me",
            "images": ["images/timothymoore-500.jpg"]
        },
        {
            "title": "Horizon Eye Center Website",
            "dates": "Live November 2015",
            "description": "Website for ophthalmologist practice built using Genesis Framework on WordPress. Customized Altitude Pro Genesis child theme. wwww.horizoneyecenter.com",
            "images": ["images/HEC.jpg"]
        },
        {
            "title": "Portfolio - Udacity Front-End Web Developer Nanodegree",
            "dates": "October 2015",
            "description": "Built and customized style of portfolio site from mockup",
            "images": ["images/Portfolio-P1.jpg"]
        }
    ]
}

var bio = {
    "name": "Timothy Moore",
    "role": "Web Developer",
    "welcomeMessage": "Welcome to my resume.",
    "contacts": {
        "email": "moore.tim@outlook.com",
        "location": "Augusta, GA",
        "github": "tmo345"
    },
    "skills": ["html", "css", "javascript", "jquery", "php", "WordPress", "Genesis Framework"],
    "image": "images/Timothy_Moore.jpg"
}

var education = {
    "schools": [
        {
            "school": "University of Georgia",
            "location": "Athens, Ga",
            "majors": ["Microbiology"],
            "graduationYear": 2005
        },
        {
            "school": "Medical College of Georgia",
            "location": "Augusta, Ga",
            "majors": ["Medicine (MD)"],
            "graduationYear": 2009
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "September - October 2015",
            "url": "https://www.udacity.com/course/viewer#!/c-ud304-nd"
        },
        {
            "title": "Responsive Web Design Fundamentals",
            "school": "Udacity",
            "dates": "October 2015",
            "url": "https://www.udacity.com/course/viewer#!/c-ud893-nd"
        },
        {
            "title": "Responsive Images",
            "school": "Udacity",
            "dates": "October 2015 - Present",
            "url": "https://www.udacity.com/course/viewer#!/c-ud882-nd"
        },
        {
            "title": "How to Use Git and GitHub",
            "school": "Udacity",
            "dates": "October 2015 - Present",
            "url": "https://www.udacity.com/course/viewer#!/c-ud775-nd/"
        },
        {
            "title": "Javascript Basics",
            "school": "Udacity",
            "dates": "November 2015 - Present",
            "url": "https://www.udacity.com/course/viewer#!/c-ud804-nd"
        }
    ]
}

var inName = function() {
    var nameArray = bio.name.trim().split(' ');
    nameArray[1] = nameArray[1].toUpperCase();
    nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
    return nameArray.join(' ');
};



bio.displayBio = function() {
    // Header population
    $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
    $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));

    for (var contact in bio.contacts) {
        $('#topContacts').append(HTMLcontactGeneric.replace('%contact%', contact).replace('%data%', bio.contacts[contact]));
    }
    $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));
    $('#header').append(HTMLbioPic.replace('%data%', bio.image));

}




// Work population
work.displayWork = function() {
   work.jobs.forEach(function(job){
    $('#workExperience').append(HTMLworkStart);
    $('.work-entry:last').append(HTMLworkEmployer.replace('%data%', job.employer) + HTMLworkTitle.replace('%data%', job.title));
    $('.work-entry:last').append(HTMLworkLocation.replace('%data%', job.location));
    $('.work-entry:last').append(HTMLworkDates.replace('%data%', job.dates));
    $('.work-entry:last').append(HTMLworkDescription.replace('%data%', job.description));
    });
};


$(document).click(function(loc) {
    logClicks(loc.pageX, loc.pageY);
});

$('#main').append(internationalizeButton);

projects.display = function() {
    projects.projects.forEach(function(project) {
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(HTMLprojectTitle.replace('%data%', project.title));
        $('.project-entry:last').append(HTMLprojectDates.replace('%data%', project.dates));
        $('.project-entry:last').append(HTMLprojectDescription.replace('%data%', project.description));
        $('.project-entry:last').append(HTMLprojectImage.replace('%data%', project.images));
    });
};

bio.displayBio();
work.displayWork();
projects.display();

// Skills population
if (bio.skills.length > 0) {
    $('#header').append(HTMLskillsStart);
    for (var x = 0; x < bio.skills.length; x++) {
        $('#skills').append(HTMLskills.replace('%data%', bio.skills[x]));
    }
}

$('#mapDiv').append(googleMap);

