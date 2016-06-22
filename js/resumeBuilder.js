//.append(arg)
// $("#main").append(["Jeff Shomali"]);


//console.log(arg)
// var awsomeThoughts = "I am Jeff Shomali and I am awsome";
// console.log(awsomeThoughts);

//.replace(old, new);
// var funThoughts = awsomeThoughts.replace("awsome", "fun");
// console.log(funThoughts);
// $("#main").append([funThoughts]);


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
    "biopic": "file:///Users/MackPro/Desktop/JeffResume/Resume/images/fry.jpg",
    "welcome_message": "Welcome to my resume",
    "skills": ["Web Developer", "Enterprunier", "Developer", "Designer"]
};


//work object
var work = {
     "workEmployer":    "Khazar24 Co",
     "workTitle":       "UI/UX Designer",
     "workDates":       "2005 - 2007",
     "workLocation":    "IRAN",
     "workDescription": "First Online Real Estate Business in Iran First Online Real Estate Business in Iran First Online Real Estate Business in Iran First Online Real Estate Business in Iran ",
};

var education = {
     "school": [
     {
     "schoolName": "Diablo Valley College",
     "schoolDegree": "Associate Degree in Computer Science",
     "schoolDates": "2014 - 2016",
     "schoolLocation": "United States, California",
     "schoolMajor": "Computer Science"
     },
     {
     "schoolName": "Azad Univercity",
     "schoolDegree": "Bachelor of Business Administration",
     "schoolDates": "2003 - 2007",
     "schoolLocation": "IRAN",
     "schoolMajor": "Business Administration"
     },
 ]
};

var project = {
     "projects": [
          {
               "projectTitle": "ZagrosFX",
               "projectDates": "2014 - 2015",
               "projectDescription": "ZagrodFX was a signal provider in FOREX market",
               "projectImage": " http://placehold.it/350x250"

          },
          {
               "projectTitle": "PESS.biz",
               "projectDates": "2015 - 2016",
               "projectDescription": "Pars Equality is a startup accelator in Silicon Valley",
               "projectImage": " http://placehold.it/350x250",
          },
     ]
};


// - - - - - - - - - - - - - - - - - - - - - - -  Header - - - - - - - - - - - - - - - - - - - - - - -
var formattedRole = HTMLheaderRole.replace("%data%", bio.role); //HTMLheaderRole comes from helper.js
     $("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name); //HTMLheaderName comes from helper.js
     $("#header").prepend(formattedName);

// - - - - - - - - - - - - - - - - - - - - - - -  Contact - - - - - - - - - - - - - - - - - - - - - - -
// var formattedContactGeneric = HTMLcontactGeneric.replace("%contact%", "Contact Me");
//      $("#topContacts").append(formattedContactGeneric);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
     $("#topContacts").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
     $("#topContacts").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
     $("#topContacts").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
     $("#topContacts").append(formattedGithub);
var formattedBlog = HTMLblog.replace("%data%", bio.contact.blog);
     $("#topContacts").append(formattedBlog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
     $("#topContacts").append(formattedLocation);

// - - - - - - - - - - - - - - - - - - - - - - - Skills - - - - - - - - - - - - - - - - - - - - - - -
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
     $(".center-content").append(formattedBioPic);
var forattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
     $(".center-content").append(forattedWelcomeMessage);
var fomattedskillsStart = HTMLskillsStart;
     $(".welcome-message").append(fomattedskillsStart);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
     $(".center-content").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
     $(".center-content").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
     $(".center-content").append(formattedSkills);


// - - - - - - - - - - - - - - - - - - - - - - - Work Experience - - - - - - - - - - - - - - - - - - - - - - -
var formattedworkStart = HTMLworkStart;
$("#workExperience").append(formattedworkStart);
var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.workEmployer);
     $(".work-entry").prepend(formattedworkEmployer);
var formattedworkDates = HTMLworkDates.replace("%data%", work.workDates);
     $(".work-entry").append(formattedworkDates);
var formattedworkLocation = HTMLworkLocation.replace("%data%", work.workLocation);
     $(".work-entry").append(formattedworkLocation);
// var formattedworkTitle = HTMLworkTitle.replace("%data%", work.workTitle);
//      $(".work-entry").prepend(formattedworkTitle);
var formattedworkDescription = HTMLworkDescription.replace("%data%", work.workDescription);
     $(".work-entry").append(formattedworkDescription);

// - - - - - - - - - - - - - - - - - - - - - - - Projects - - - - - - - - - - - - - - - - - - - - - - -
//project 1
var formattedprojectStart = HTMLprojectStart;
     $('#projects').append(formattedprojectStart);
var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.projects[0].projectTitle);
     $('.project-entry').append(formattedprojectTitle);
var formattedprojectDates = HTMLprojectDates.replace("%data%", project.projects[0].projectDates);
     $('.project-entry').append(formattedprojectDates);
var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.projects[0].projectDescription);
     $('.project-entry').append(formattedprojectDescription);
var formattedprojectImage = HTMLprojectImage.replace("%data%", project.projects[0].projectImage);
     $('.project-entry').append(formattedprojectImage);
//project 2
// var formattedprojectStart = HTMLprojectStart;
//      $('#projects').append(formattedprojectStart);
var formattedprojectTitle = HTMLprojectTitle.replace("%data%", project.projects[1].projectTitle);
     $('.project-entry').append(formattedprojectTitle);
var formattedprojectDates = HTMLprojectDates.replace("%data%", project.projects[1].projectDates);
     $('.project-entry').append(formattedprojectDates);
var formattedprojectDescription = HTMLprojectDescription.replace("%data%", project.projects[1].projectDescription);
     $('.project-entry').append(formattedprojectDescription);
var formattedprojectImage = HTMLprojectImage.replace("%data%", project.projects[1].projectImage);
     $('.project-entry').append(formattedprojectImage);


//- - - - - - - - - - - - - - - - - - - - - - -  Education - - - - - - - - - - - - - - - - - - - - - - -
// var formattedschoolStart = HTMLschoolStart;
//      $('#education').append(formattedschoolStart);
// var formattedschoolNameandDegree = HTMLschoolName.replace("%data%", education.school[0].schoolName) + HTMLschoolDegree.replace("%data%", education.school[0].schoolDegree);
//      $('.education-entry').append(formattedschoolNameandDegree);
// var formattedschoolDates = HTMLschoolDates.replace("%data%", education.school[0].schoolDates);
//      $('.education-entry').append(formattedschoolDates);
// var  formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.school[0].schoolMajor);
//      $('.education-entry').append(formattedschoolMajor);
//
//      // access to school[1] content
// var formattedschoolNameandDegree = HTMLschoolName.replace("%data%", education.school[1].schoolName) + HTMLschoolDegree.replace("%data%", education.school[0].schoolDegree);
//      $('.education-entry').append(formattedschoolNameandDegree);
// var formattedschoolDates = HTMLschoolDates.replace("%data%", education.school[1].schoolDates);
//      $('.education-entry').append(formattedschoolDates);
// var  formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.school[1].schoolMajor);
//      $('.education-entry').append(formattedschoolMajor);
