const grid = document.getElementById("grid");
const profile = document.getElementById("profile");
const page = 1;
let profilesBatch = [],
	profileInfo = {};

document.getElementById("profile").style.display = "none";
document.getElementById("content").style.display = "none";

let path = window.location.pathname.slice(1);


getProfiles();
populateHome(profilesBatch, page);

function historySection(path) {
  if(path == "") {
  	document.getElementById("profile").style.display = "none";
	document.getElementById("content").style.display = "block";
    // history.replaceState({title:"IcoWall-Home", url:""}, "IcoWall-Home", "");
    // gtag('config', 'UA-109487361-1', {'page_path': '/'+path});
  }
  // else if(path == "home") {
  //   document.getElementById("home").click();
  //   gtag('config', 'UA-109487361-1', {'page_path': '/'+path});
  // }else if(path == "list") {
  //   document.getElementById("list").click();
  //   gtag('config', 'UA-109487361-1', {'page_path': '/'+path});
  // }else if(path == "profile") {
  //   document.getElementById("account").click();
  //   gtag('config', 'UA-109487361-1', {'page_path': '/'+path});
  // }else if(path == "buy") {
  //   document.getElementById("buy").click();
  //   gtag('config', 'UA-109487361-1', {'page_path': '/'+path});
  // }
  else if(path.split("=")[0] == "profile") {
    // gtag('config', 'UA-109487361-1', {'page_path': '/'+path});
    populateProfile(path.split("=")[1]);
	document.getElementById("content").style.display = "none";
	document.getElementById("profile").style.display = "flex";
  }
  // } else if(path == "emailverification" || path == "passwordrecovery") {
  //   gtag('config', 'UA-109487361-1', {'page_path': '/'+path});
  //   return;
  // } else {
  //   showSection(invalidSection);
  //   gtag('config', 'UA-109487361-1', {'page_path': '/'+path});
  // }
}


function populateHome(profiles, page) {
	const gridContent = generateGridContent(profiles, page);
	grid.innerHTML += gridContent;
}


function generateGridContent(profiles, page){
	var gridContent = "";
	profiles.forEach(function (profile, id) {
		const categoryIcon = defineCategoryIcon(profile.category.toLowerCase());
		const thumbInfoPosition = defineThumbInfoPosition(page);
		gridContent += "<div class='grid-item' style='background-image: url(\""+profile.backgroundPic+"\"); background-repeat: no-repeat; background-size: cover; position:absolute;top:"+thumbInfoPosition.top[id]+"; left: "+thumbInfoPosition.left[id]+";width: "+thumbInfoPosition.width[id]+";height: "+thumbInfoPosition.height[id]+";'>\
							<div class='grid-content'>\
								<img src='"+categoryIcon+"'>\
								<h4 class='profile-thumb-category'>"+profile.category+"</h4>\
								<div class='thumb-user-info'>\
									<img id='"+profile._id+"-profile-picture' onclick='showProfile(this)' src='"+profile.profilePic+"' alt='user profile picture'>\
									<h3 id='"+profile._id+"-profile-name' class='profile-thumb-name' onclick='showProfile(this)'>"+profile.name+"</h3>\
								</div>\
							</div>\
						</div>\n";
	});
	return gridContent;
}

function populateProfile(profileId) {
	getProfileInfo(profileId);
	const profileContent = generateProfileContent(profileInfo);
	profile.style.backgroundImage = "url('"+profileInfo.backgroundPic+"')"; 
	profile.innerHTML = profileContent;
}

function generateProfileContent(profile){
	const categoryIcon = defineCategoryIcon(profile.category.toLowerCase());
	const profileContent = "<div id='exit-profile'><img onclick='showContent()' src='assets/icons/exit_icon.png' alt='exit icon'></div>\
							<div class='profile-wrapper'>\
								<div class='profile-info-wrapper'>\
									<div class='profile-name'>\
										<h1>"+profile.name+"</h1>\
									</div>\
									<div class='profile-info'>\
										<h3>"+profile.address+"</h3>\
										<div class='profile-address'>\
											<img src='"+categoryIcon+"'>\
											<h4 class='profile-thumb-category'>"+profile.category+"</h4>\
										</div>\
										<img src='"+profile.profilePic+"' alt='Profile picture'>\
										<p>"+profile.description+"</p>\
										<div class='report'>\
											<h3>Report Offense</h3>\
										</div>\
									</div>\
								</div>\
							</div>";

	return profileContent;
}

function defineCategoryIcon (category) {
	var categoryIcon = "";
	switch(category){
		case "professionals":
			categoryIcon = "assets/icons/professional_icon.png";
			break;
		case "journalism":
			categoryIcon = "assets/icons/journalism_icon.png";
			break;
		case "support lines":
			categoryIcon = "assets/icons/support_icon.png";
			break;
		default:
			categoryIcon = "assets/icons/professional_icon.png";
	}
	return categoryIcon;
}

function getProfileInfo(profileId) {
	let httpRequest = new XMLHttpRequest();      
	httpRequest.open('GET', '/api/getProfile?id='+profileId, false);
	httpRequest.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
		  profileInfo = JSON.parse(this.responseText).profile;
		} 
	};
	httpRequest.send();
}

function getProfiles() {
	let httpRequest = new XMLHttpRequest();            
	httpRequest.open('GET', '/api/getProfiles', false);
	httpRequest.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
		  profilesBatch = JSON.parse(this.responseText).profiles;
		} 
	};
	httpRequest.send();
}

function defineThumbInfoPosition (page) {
	var thumbInfoPosition = {};
	var initialTop;
	if(window.innerWidth > 1200) {
		initialTop = (page - 1)*900 ;
		thumbInfoPosition.top = [70 + initialTop + "px",70 + initialTop + "px",70 + initialTop + "px",70 + initialTop + "px",70 + initialTop + "px",70 + initialTop + "px",370 + initialTop + "px",370 + initialTop + "px",370 + initialTop + "px",370 + initialTop + "px",670 + initialTop + "px", 670 + initialTop + "px",670 + initialTop + "px",670 + initialTop + "px"];
		thumbInfoPosition.left = ["0","16.66%","33.32%","49.98%","66.63%","83.3%","0","33.32%","49.98%","83.3%","0","16.66%","33.32%","83.30%"];
		thumbInfoPosition.height = ["300px","600px","300px","300px","300px","300px","300px","300px","600px","300px","300px","300px","300px","300px"];
		thumbInfoPosition.width = ["16.66%","16.66%","16.66%","16.66%","16.66%","16.66%","16.66%","16.66%","33.32%","16.66%","16.66%","16.66%","16.66%","16.66%"];
	} else if(window.innerWidth <= 700) {
		initialTop = (page - 1)*2700 ;
		thumbInfoPosition.top = [70 + initialTop + "px",70 + initialTop + "px",370 + initialTop + "px",670 + initialTop + "px",670 + initialTop + "px",970 + initialTop + "px",970 + initialTop + "px",1270 + initialTop + "px",1870 + initialTop + "px",1870 + initialTop + "px",2170 + initialTop + "px",2170 + initialTop + "px",2470 + initialTop + "px",2470 + initialTop + "px"];
		thumbInfoPosition.left = ["0","50%","0","0","50%","0","50%","0","0","50%","0","50%","0","50%"];
		thumbInfoPosition.height = ["300px","600px","300px","300px","300px","300px","300px","600px","300px","300px","300px","300px","300px","300px"];
		thumbInfoPosition.width = ["50%","50%","50%","50%","50%","50%","50%","100%","50%","50%","50%","50%","50%","50%"];
	} else {
		initialTop = (page - 1)*1800 ;
		thumbInfoPosition.top = [70 + initialTop + "px",70 + initialTop + "px",70 + initialTop + "px",370 + initialTop + "px",370 + initialTop + "px",670 + initialTop + "px",670 + initialTop + "px",670 + initialTop + "px",970 + initialTop + "px",970 + initialTop + "px",1270 + initialTop + "px",1570 + initialTop + "px",1570 + initialTop + "px",1570 + initialTop + "px"];
		thumbInfoPosition.left = ["0","33.33%","66.66%","0","66.66%","0","33.33%","66.66%","0","66.66%","66.66%","0","33.33%","66.66%"];
		thumbInfoPosition.height = ["300px","600px","300px","300px","300px","300px","300px","300px","600px","300px","300px","300px","300px","300px"];
		thumbInfoPosition.width = ["33.33%","33.33%","33.33%","33.33%","33.33%","33.33%","33.33%","33.33%","66.66%","33.33%","33.33%","33.33%","33.33%","33.33%"];
	}
	return thumbInfoPosition;
}

function showProfile(e) {
	const profileId = e.id.split('-')[0];
	const listObj = {title: "Glass-Icon", url: "profile=" + profileId};
    history.pushState(listObj, listObj.title, listObj.url);
	populateProfile(profileId);
	document.getElementById("content").style.display = "none";
	document.getElementById("profile").style.display = "flex";
}

function showContent() {
	const listObj = {title: "Glass-Icon", url: "/"};
    history.pushState(listObj, listObj.title, listObj.url);
	document.getElementById("profile").style.display = "none";
	document.getElementById("content").style.display = "block";
}

function resizeGrid() {
	const page = 1;
	grid.innerHTML = "";
	populateHome(profilesBatch, page);
}

window.onpopstate = function(event) {
  historySection(window.location.pathname.slice(1));
}

historySection(path);