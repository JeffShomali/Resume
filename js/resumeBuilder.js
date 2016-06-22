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
     "schoolName": "Diablo Valley College",
     "schoolDegree": "Associate Degree in Computer Science",
     "schoolDates": "2014-2016",
     "schoolLocation": "United States, California",
     "schoolMajor": "Computer Science"
};

// Header
var formattedRole = HTMLheaderRole.replace("%data%", bio.role); //HTMLheaderRole comes from helper.js
     $("#header").prepend(formattedRole);
var formattedName = HTMLheaderName.replace("%data%", bio.name); //HTMLheaderName comes from helper.js
     $("#header").prepend(formattedName);

// Contact
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


// Skills
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
     $(".center-content").append(formattedBioPic);
var forattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcome_message);
     $(".center-content").append(forattedWelcomeMessage);
var fomattedskillsStart = HTMLskillsStart;
     $(".welcome-message").append(fomattedskillsStart);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
     $("#skills").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
     $("#skills").append(formattedSkills);
var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
     $("#skills").append(formattedSkills);


// workExperience
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

// Projects


// 
