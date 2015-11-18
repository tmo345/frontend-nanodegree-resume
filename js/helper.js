    // Header
var HTMLheaderMenuItem,
    HTMLheaderName,
    HTMLheaderRole,
    // About
    HTMLcontactGeneric,
    HTMLbioPic,
    HTMLwelcomeMsg,
    HTMLskillsStart,
    HTMLskills,
    // Work
    HTMLworkStart,
    HTMLworkEmployer,
    HTMLworkDates,
    HTMLworkTitle,
    HTMLworkLocation,
    HTMLworkDescription,
    // Projects
    HTMLprojectStart,
    HTMLprojectTitle,
    HTMLprojectDates,
    HTMLprojectDescription,
    HTMLprojectImage,
    // Education
      // Schools
      HTMLschoolStart,
      HTMLschoolName,
      HTMLschoolDegree,
      HTMLschoolDates,
      HTMLschoolLocation,
      HTMLschoolMajor,
      // Online Classes
      HTMLonlineStart,
      HTMLonlineClasses,
      HTMLonlineTitle,
      HTMLonlineSchool,
      HTMLonlineDates,
      HTMLonlineURL,
    // International Button
    internationalizeButton,
    // Click Location
    clickLocations,
    // Google map
    googleMap, // HTML for map div
    map; // global map variable for Google map API

// Header
HTMLheaderMenuItem = '<li class="menu-item"><a href="%link%">%data%</a></li>';
HTMLheaderName = '<h1 id="name"><a class="navbar-brand" href="%link%">%data%</a></h1>';
HTMLheaderRole = '<span>%data%</span>';

// About
HTMLcontactGeneric = '<li class="col-lg-4 col-md-4"><span class="contact-category">%contact%</span><span class="contact-information">%data%</span></li>';
HTMLbioPic = '<img src="%data%" class="biopic col-lg-3 col-md-3">';
HTMLwelcomeMsg = '<div class="row"><p class="welcome-message col-lg-12">%data%</p></div>';
HTMLskillsStart = '<div class="row"><h3 id="skills-h3" class="col-lg-12">Skills at a Glance:</h3></div><div class="row"><ul id="skills" class="col-lg-12"></ul></div>';
HTMLskills = '<li><span class="white-text">%data%</span></li>';

// Work
HTMLworkStart = '<div class="work-entry"></div>';
HTMLworkEmployer = '<div class="row"><h3 class="col-lg-8 col-md-8 employerHeading"><a href="%link%">%data%</a></h3>';
HTMLworkDates = '<p class="date-text col-lg-4 col-md-4">%data%</p></div>';
HTMLworkTitle = '<div class="row"><p class="col-lg-8">%data%</p>';
HTMLworkLocation = '<div class="location-text col-lg-4 col-md-4 col-sm-4">%data%</div></div>';
HTMLworkDescription = '<div class="row"><p class="col-lg-12">%data%</p></div>';

// Projects
HTMLprojectStart = '<li class="project-entry col-lg-4 col-md-4 col-sm-6"></li>';
HTMLprojectTitle = '<div class="row"><a href="#"><h3 class="col-lg-12">%data%</h3></a></div>';
HTMLprojectDates = '<div class="row"><div class="date-text col-lg-12">%data%</div></div>';
HTMLprojectDescription = '<div class="row"><p class="col-lg-12">%data%</p></div>';
HTMLprojectImage = '<div class="row"><img src="%data%" class="col-lg-12"></div>';

// Education
// Schools
HTMLschoolStart = '<div class="education-entry"></div>';
HTMLschoolName = '<div class="row"><a href="#" class="col-lg-12">%data%';
HTMLschoolDegree = ' -- %data%</a></div>';
HTMLschoolDates = '<div class="row"><div class="date-text col-lg-7 col-md-7 small-7">%data%</div>';
HTMLschoolLocation = '<div class="location-text col-lg-5 col-md-5 small-5">%data%</div></div>';
HTMLschoolMajor = '<div class="row"><p class="col-lg-12"><em>Major: %data%</em></p></div>';

// Online Courses
HTMLonlineStart = '<div class="online-entry"></div>';
HTMLonlineClasses = '<div class="row"><h3 class="col-lg-12">Online Classes</h3></div>';
HTMLonlineTitle = '<div class="row"><a href="#" class="col-lg-12">%data%';
HTMLonlineSchool = ' - %data%</a></div>';
HTMLonlineDates = '<div class="row"><div class="date-text col-lg-12">%data%</div></div>';
HTMLonlineURL = '<div class="row"><p class="col-lg-12"><a href="#">%data%</a></p><div>';

// International Button
internationalizeButton = '<button>Internationalize</button>';

// Google map
googleMap = '<div id="map" class="row"></div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  var iName;
  $('button').click(function() {
    iName = inName() || function(){};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/

/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations,
      mapOption;

  mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array
    for (var school in education.schools) {
      locations.push(education.schools[school].location);
    }

    // iterates through work locations and appends each location to
    // the locations array
    for (var job in work.jobs) {
      locations.push(work.jobs[job].location);
    }

    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {
    var lat, // latitude from the place service
        lon, // longitude from the place service
        name, // name of the place from the place service
        bounds, // current boundaries of the map window
        marker, // object with additional data about the pin for a single location
        infoWindow; // infoWindows are the little helper windows that open when you click
                    // or hover over a pin on a map. They usually contain more information
                    // about a location.

    // The next lines save location data from the search result object to local variables
    lat = placeData.geometry.location.lat();
    lon = placeData.geometry.location.lng();
    name = placeData.formatted_address;
    bounds = window.mapBounds;


    marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });


    infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
        // infoWindow.setContent(infoWindow.content);
        infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {
    var service,
        request;

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
    for (var place in locations) {

      // the search request object
      request = {
        query: locations[place]
      };

      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    }
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
 map.fitBounds(mapBounds);
});
