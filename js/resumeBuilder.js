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
        "blog": "https://jeffshomali.com/",
        "location": "San Francisco"
    },
    "biopic": "http://jeffshomali.com/wp-content/uploads/2015/03/cropped-Jeff.png",
    "welcome-message": "Welcome to my resume",
    "skills": ["Web Developer", "Enterprunier", "Developer", "Designer"]
};


//work object
var work = {
     "workEmployer":    "Khazar24 Co",
     "workTitle":       "UI/UX Designer",
     "workDates":       "2005 - 2007",
     "workLocation":    "IRAN",
     "workDescription": "First Online Real Estate Business in Iran ",
};//

var education = {
     "schoolName": "Diablo Valley College",
     "schoolDegree": "Associate Degree in Computer Science",
     "schoolDates": "2014-2016",
     "schoolLocation": "United States, California",
     "schoolMajor": "Computer Science"
}


var formattedName = HTMLheaderName.replace("%data%", bio.name); //HTMLheaderName comes from helper.js
     $("#header").append(formattedName);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role); //HTMLheaderRole comes from helper.js
     $("#header").append(formattedRole);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
     $("#main").append(formattedMobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contact.email);
     $("#main").append(formattedEmail);
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contact.twitter);
     $("#main").append(formattedTwitter);
var formattedGithub = HTMLgithub.replace("%data", bio.contact.github);
     $("#main").append(formattedGithub);
var formattedBlog = HTMLblog.replace("%data%", bio.contact.blog);
     $("#main").append(formattedBlog);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
     $("#main").append(formattedLocation);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
     $("#main").append(formattedBioPic);
var forattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcome-message);
     $("#main").append(forattedWelcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
     $("#main").append(formattedSkills);
