

var bio = {
	"name": "Ousainou Touray",
	"role": "Web Developer",
	"contacts": {
		"mobile": "(678) 404-1972",
		"email": "ousainou.touray@gmail.com",
		"github": "OusainouTouray",
		"twitter": "@oustouray",
		"location": "Atlanta"
	},
	"welcomeMessage": "Welcome to my online resume! Handcrafted with passion :)",
    "skills": ["HTML", "CSS", "Javascript", "Python"],
    "bioPic": "images/mypic.jpg"
};

bio.display = function () {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);


	// Header Contact Info
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);

    //Footer Contact Info
	$("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGithub);
    $("#footerContacts").append(formattedTwitter);

    //Skills info
    if (bio.skills.length > 0) {
    	$("#header").append(HTMLskillsStart);

    	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    	$("#skills").append(formattedSkill);

    	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    	$("#skills").append(formattedSkill);

    	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    	$("#skills").append(formattedSkill);

    	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    	$("#skills").append(formattedSkill);
	}
}
bio.display();



var work = {
	"jobs": [
	{
		"employer": "Veritz LLC",
		"title": "Web Developer",
		"location": "Roswell, GA",
		"dates": "2011 - present",
		"description": "Customizing Wordpress Themes and setting up and installing databases and website files on server."

	},
	{
		"employer": "Tobatex Inc.",
		"title": "General Manager",
		"location": "Marietta, GA",
		"dates": "2007 - 2011",
		"description": "Managing daily businees activities such as inventory, employees, vendors, and accounting."

	}
	]
};

work.display = function () {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}
work.display();



var projects = {
	"projects": [
	{
		"title": "HTML Page Mockup",
		"titleUrl": "https://github.com/OusainouTouray/html-mockup",
		"date": "November 2014",
		"description": "Mockup of a responsive product page using html and css.",
		"images": ["images/html-product-page.png"],
	},
	{
		"title": "Google Homepage Mockup",
		"titleUrl": "https://github.com/OusainouTouray/google-homepage",
		"date": "April 2014",
		"description": "Deconstruction and rebuilding a mockup of the Google homepage.",
		"images": ["images/google-homepage.png"],
	}
	]
};

projects.display = function() {
	for(project in projects.projects){

		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = (HTMLprojectTitle.replace("%data%", projects.projects[project].title)).replace("#", projects.projects[project].titleUrl);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {

				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			    $(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}
projects.display();



var education = {
	"schools": [
	{
		"name": "Bartlett H.S.",
		"location": "Anchorage, AK",
		"degree": "Diploma",
		"major": "General Studies",
		"dates": "2004 ",

	}
	],
	"onlineCourses": [
		{
			"title": "Front-end Developer NanoDegree",
			"titleUrl": "https://www.udacity.com/course/nd001",
			"school": "Udacity",
			"dates": "October 2014 - present",
			"url": "udacity.com"
		},
		{
			"title": "Python for Everybody",
			"titleUrl": "https://www.coursera.org/course/pythonlearn",
			"school": " Coursera ( by University of Michigan )",
			"dates": "July 2014",
			"url": "coursera.org"
		},
		{
			"title": "An Introduction to Marketing",
			"titleUrl": "https://www.coursera.org/course/marketing",
			"school": " Coursera ( by University of Pennsylvania )",
			"dates": "July 2014",
			"url": "coursera.org"
		}
		]
};

education.display = function() {

	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDegree = formattedSchoolName + formattedDegree;
		$(".education-entry:last").append(formattedSchoolDegree);

		var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDate);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
	}

	// Online Classes Info
	$("#education").append(HTMLonlineClasses);

    for (course in education.onlineCourses) {

        $("#education").append(HTMLschoolStart);

	    var formattedOnlineTitle = (HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title)).replace("#", education.onlineCourses[course].titleUrl);;
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		var formattedTitleSchool = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedTitleSchool);

		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);

		var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineUrl);
	}
}
education.display();



// Shows map
$("#mapDiv").append(googleMap);


// Click location
$(document).click(function(loc){
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x, y);
});
