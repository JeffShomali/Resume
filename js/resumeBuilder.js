//bio object
var bio = {
    "name": "Jeff Shomali",
    "role": "Full Stack Web Developer",
    "contact": {
        "mobile": "415-504-1135",
        "email": "jeffshomali@gmail.com",
        "twitter": "@jeffshomali",
        "github": "JeffShomali",
        "blog": "www.JeffShomali.com",
        "location": "San Francisco"
    },
    "biopic": "../Resume/images/avatar.png",
    "welcome_message": "Welcome to my resume",
    "skills": ["Web Developer", "Enterprunier", "Blogger", "Designer"]
};


//work object
var work = {
    jobs: [{
        "workEmployer": "Khazar24 Co",
        "workTitle": "UI/UX Designer",
        "workDates": "2005 - 2007",
        "workLocation": "IRAN",
        "workDescription": "Khazar 24 was first online real estate business in the north of IRAN during 2005 to 2007. During those days, Khazar24.com was one of the Real Estate industry's most recognized brands and acquired​ by Amin Ertebatat Co for $250,000 ​ in 2008.",
    }, {
        "workEmployer": "Perspollice LLC",
        "workTitle": "Founder",
        "workDates": "2010 - 2013",
        "workLocation": "United States, California",
        "workDescription": "I established an LLC company called Perspollice LLC and bought an Italian restaurant in San Ramon CA, called Pasta Primavera. Then I got my investment visa and moved to the United States. After 2 years, I sold my share to my family and start my new challenge to learn web developments​.",
    }, ]
};

var education = {
    "school": [{
        "schoolName": "Diablo Valley College",
        "schoolDegree": "Associate Degree in Computer Science",
        "schoolDates": "2014 - 2016",
        "schoolLocation": "United States, California",
        "schoolMajor": "Computer Science"
    }, {
        "schoolName": "Azad Univercity",
        "schoolDegree": "Bachelor of Business Administration",
        "schoolDates": "2003 - 2007",
        "schoolLocation": "IRAN",
        "schoolMajor": "Business Administration"
    }, ]
};

var onlineClasses = {
     "onlineSchool" :"Front-End Web Developer Nanodegree -- Udacity",
     "onlineTitle"  : "https://www.udacity.com/",
     "onlineDates"  : "2016",
     "onlineURL"    : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
};

var project = {
    "projects": [{
        "projectTitle": "ZagrosFX",
        "projectDates": "2014 - 2015",
        "projectDescription": "ZagrodFX was a signal provider in FOREX market",
        "projectImage": " ../Resume/images/project2.png"

    }, {
        "projectTitle": "PESS.biz",
        "projectDates": "2015 - 2016",
        "projectDescription": "Pars Equality is a startup accelator in Silicon Valley",
        "projectImage": " ../Resume/images/project2.png",
    }]
};





// - - - - - - - - - - - - - - - - - - - - - - -  Header - - - - - - - - - - - - - - - - - - - - - - -
     var formattedRole = HTMLheaderRole.replace("%data%", bio.role); //HTMLheaderRole comes from helper.js
     var formattedName = HTMLheaderName.replace("%data%", bio.name); //HTMLheaderName comes from helper.js
     $("#header").prepend(formattedRole);
     $("#header").prepend(formattedName);

// - - - - - - - - - - - - - - - - - - - - - - -  Contact - - - - - - - - - - - - - - - - - - - - - - -
function displayBio() {

     var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
     var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
     var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
     var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
     var formattedBlog = HTMLblog.replace("%data%", bio.contact.blog);
     var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);

     $("#topContacts , #footerContacts").append(formattedMobile);
     $("#topContacts , #footerContacts").append(formattedEmail);
     $("#topContacts , #footerContacts").append(formattedTwitter);
     $("#topContacts , #footerContacts").append(formattedGithub);
     $("#topContacts , #footerContacts").append(formattedBlog);
     $("#topContacts , #footerContacts").append(formattedLocation);

}
// - - - - - - - - - - - - - - - - - - - - - - - Skills - - - - - - - - - - - - - - - - - - - - - - -
function displaySkills() {
     var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
     var forattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
     $(".center-content").append(formattedBioPic);
     $(".center-content").append(forattedWelcomeMessage);


     // Appending skills to page
     if (Object.keys(bio).length !== 0) { // if bio object is not empty and length is greather than 0
         $("#header").append(HTMLskillsStart); //append HTMLskillsStart from helperjs into #header
         //add all skills into the #skills unordered list
         var one = HTMLskills.replace("%data%", bio.skills[0]);
         $("#skills").append(one);
         var two = HTMLskills.replace("%data%", bio.skills[1]);
         $("#skills").append(two);
         var three = HTMLskills.replace("%data%", bio.skills[2]);
         $("#skills").append(three);
         var four = HTMLskills.replace("%data%", bio.skills[3]);
         $("#skills").append(four);
     }
}


// - - - - - - - - - - - - - - - - - - - - - - - Work Experience - - - - - - - - - - - - - - - - - - -
function displayWork(_inclass) {
    for (var i in _inclass.jobs) {

        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", _inclass.jobs[i].workEmployer) + HTMLworkTitle.replace("%data%", _inclass.jobs[i].workTitle);
        var formattedworkDates = HTMLworkDates.replace("%data%", _inclass.jobs[i].workDates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", _inclass.jobs[i].workLocation);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", _inclass.jobs[i].workDescription);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedworkEmployer);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formattedworkLocation);
        $(".work-entry:last").append(formattedworkDescription);

    }
} //end function


// - - - - - - - - - - - - - - - - - - - - - - - Projects - - - - - - - - - - - - - - - - - - - - - - -
project.displayProject = function(_project) {
    for (var i in _project.projects) {
        var formattedworkEmployer = HTMLprojectTitle.replace("%data%", _project.projects[i].projectTitle);
        var formattedworkDates = HTMLprojectDates.replace("%data%", _project.projects[i].projectDates);
        var formattedworkLocation = HTMLprojectDescription.replace("%data%", _project.projects[i].projectDescription);
        var formattedworkDescription = HTMLprojectImage.replace("%data%", _project.projects[i].projectImage);

        $('#projects').append(HTMLprojectStart);
        $(".project-entry:last").append(formattedworkEmployer);
        $(".project-entry:last").append(formattedworkDates);
        $(".project-entry:last").append(formattedworkLocation);
        $(".project-entry:last").append(formattedworkDescription);
        //  console.log(_inclass.jobs[i].workEmployer); //for debuging perpusses
    }
};

//- - - - - - - - - - - - - - - - - - - - - - -  Education - - - - - - - - - - - - - - - - - - - - - - -

education.displayEducation = function(_education) {
    $('#education').append(HTMLschoolStart);
    for (var i in _education.school) {

        var formattedschoolNameandDegree = HTMLschoolName.replace("%data%", _education.school[i].schoolName) + HTMLschoolDegree.replace("%data%", _education.school[i].schoolDegree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", _education.school[i].schoolDates);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", _education.school[i].schoolMajor);

        $(".education-entry:last").append(formattedschoolNameandDegree);
        $(".education-entry:last").append(formattedschoolDates);
        $(".education-entry:last").append(formattedschoolMajor);
    }
};

//- - - - - - - - - - - - - - - - - - - - - - -  Online Classes - - - - - - - - - - - - - - - - - - - - -

onlineClasses.displayOlineClasses = function(_onlineClass) {
     $('.education-entry:last').append(HTMLonlineClasses);
          var formattedonlineTitle = HTMLonlineTitle.replace("%data%", _onlineClass.onlineTitle) + HTMLonlineSchool.replace("%data%", _onlineClass.onlineSchool);
          var formattedonlineDates = HTMLonlineDates.replace("%data%", _onlineClass.onlineDates);
          var formattedonlineURL   = HTMLonlineURL.replace("%data%",   _onlineClass.onlineURL);
          //Append data
          $('.education-entry:last').append(formattedonlineTitle);
          $('.education-entry:last').append(formattedonlineDates);
          $('.education-entry:last').append(formattedonlineURL);
};

//- - - - - - - - - - - - - - - - - - - - - - -  Button - - - - - - - - - - - - - - - - - - - - -
// $("#main").append(internationalizeButton);

//- - - - - - - - - - - - - - - - - - - - - - -  Map - - - - - - - - - - - - - - - - - - - - - - -
$("#mapDiv").append(googleMap);

//- - - - - - - - - - - - - - - - - - - - - - -  Lets Connect - - - - - - - - - - -  - - - - - - -
