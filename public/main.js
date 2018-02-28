const grid = document.getElementById("grid");
const profile = document.getElementById("profile");
let page = 1,
	increment= 1,
	pro_sess_id = "";
let profilesBatch = [],
	profileInfo = {};

document.getElementById("profile").style.display = "none";
document.getElementById("content").style.display = "none";


profileImgReader  = "";
backgroundImgReader  = ""; 

let path = window.location.pathname.slice(1);

isLogged();
getProfiles();
populateHome(profilesBatch);

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
	if(pro_sess_id==path.split("=")[1]){
		document.getElementById("edit-btn").style.display = "inline-block";
		document.getElementById("edit-btn").onclick = function(event) {
		  document.getElementById("edit-modal").style.display = "block";

		}
	}
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


function populateHome(profiles) {
	profiles.forEach(function (profilesArray){
		const gridContent = generateGridContent(profilesArray);
		grid.innerHTML += gridContent;
	})
}



function generateGridContent(profiles){

	const batch = profiles[1];
	var gridContent = "";
	profiles[0].forEach(function (profile, id) {
		const categoryIcon = defineCategoryIcon(profile.category.toLowerCase());
		const thumbInfoPosition = defineThumbInfoPosition(batch);
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
										<div id='edit-btn'>\
											<img src='assets/icons/edit_icon.png'/>\
										</div>\
										<h1>"+profile.name+"</h1>\
									</div>\
									<div class='profile-info'>\
										<h3>"+profile.address+"</h3>\
										<div class='profile-address'>\
											<img src='"+categoryIcon+"'>\
											<h4 class='profile-thumb-category'>"+profile.category+"</h4>\
										</div>\
										<div class='profile-image'>\
											<img src='"+profile.profilePic+"' alt='Profile picture'>\
											<div id='edit-pics' onclick='openEditPicsModal()'>\
												<p>Change Images</p>\
											</div>\
										</div>\
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
	let moreProfiles = false;
	let httpRequest = new XMLHttpRequest();            
	httpRequest.open('GET', '/api/getProfiles?page='+(page-1), false);
	httpRequest.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
		  if(JSON.parse(this.responseText).profiles.length){
		  	profilesBatch.push([JSON.parse(this.responseText).profiles,page]);
		  	moreProfiles = true;
		  }		  
		} 
	};
	httpRequest.send();
	return moreProfiles;
}

function defineThumbInfoPosition (batch) {
	var thumbInfoPosition = {};
	var initialTop;
	if(window.innerWidth > 1200) {
		initialTop = (batch - 1)*900 ;
		thumbInfoPosition.top = [70 + initialTop + "px",70 + initialTop + "px",70 + initialTop + "px",70 + initialTop + "px",70 + initialTop + "px",70 + initialTop + "px",370 + initialTop + "px",370 + initialTop + "px",370 + initialTop + "px",370 + initialTop + "px",670 + initialTop + "px", 670 + initialTop + "px",670 + initialTop + "px",670 + initialTop + "px"];
		thumbInfoPosition.left = ["0","16.66%","33.32%","49.98%","66.63%","83.3%","0","33.32%","49.98%","83.3%","0","16.66%","33.32%","83.30%"];
		thumbInfoPosition.height = ["300px","600px","300px","300px","300px","300px","300px","300px","600px","300px","300px","300px","300px","300px"];
		thumbInfoPosition.width = ["16.66%","16.66%","16.66%","16.66%","16.66%","16.66%","16.66%","16.66%","33.32%","16.66%","16.66%","16.66%","16.66%","16.66%"];
	} else if(window.innerWidth <= 700) {
		initialTop = (batch - 1)*2700 ;
		thumbInfoPosition.top = [70 + initialTop + "px",70 + initialTop + "px",370 + initialTop + "px",670 + initialTop + "px",670 + initialTop + "px",970 + initialTop + "px",970 + initialTop + "px",1270 + initialTop + "px",1870 + initialTop + "px",1870 + initialTop + "px",2170 + initialTop + "px",2170 + initialTop + "px",2470 + initialTop + "px",2470 + initialTop + "px"];
		thumbInfoPosition.left = ["0","50%","0","0","50%","0","50%","0","0","50%","0","50%","0","50%"];
		thumbInfoPosition.height = ["300px","600px","300px","300px","300px","300px","300px","600px","300px","300px","300px","300px","300px","300px"];
		thumbInfoPosition.width = ["50%","50%","50%","50%","50%","50%","50%","100%","50%","50%","50%","50%","50%","50%"];
	} else {
		initialTop = (batch - 1)*1800 ;
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
	if(pro_sess_id==e.id.split('-')[0]){
		document.getElementById("edit-btn").style.display = "inline-block";
		document.getElementById("edit-btn").onclick = function(event) {
		  document.getElementById("edit-modal").style.display = "block";
		}
	}
}

function showContent() {
	const listObj = {title: "Glass-Icon", url: "/"};
    history.pushState(listObj, listObj.title, listObj.url);
	document.getElementById("profile").style.display = "none";
	document.getElementById("content").style.display = "block";
}

function resizeGrid() {
	grid.innerHTML = "";
	populateHome(profilesBatch);
}

function imgSelected(input){
	if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            if(input.id=="profile-pic" || input.id=="edit-profile-pic"){
            	profileImgReader = e.target.result;
            } else if(input.id=="background-pic" || input.id=="edit-background-pic"){
				backgroundImgReader = e.target.result;
            }            
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function openEditPicsModal() {
	document.getElementById("edit-pics-modal").style.display = "block";
}

document.getElementById("login-icon").onclick = function(event) {
  document.getElementById("sign-modal").style.display = "block";
}

document.getElementById("login-icon-mobile").onclick = function(event) {
  document.getElementById("sign-modal").style.display = "block";
}

document.getElementById("close-edit").onclick = function(event) {
  document.getElementById("edit-modal").style.display = "none";
}

document.getElementById("close-edit-pics").onclick = function(event) {
  document.getElementById("edit-pics-modal").style.display = "none";
}

document.getElementById("close-login").onclick = function(event) {
  document.getElementById("sign-modal").style.display = "none";
  document.getElementById("signup-modal").style.display = "none";
  document.getElementById("login-modal").style.display = "block";
  document.getElementById("signup").style.display = "none";
  document.getElementById("restore-password-email").style.display = "none";
  document.getElementById("login").style.display = "block";
}

document.getElementById("close-signup").onclick = function(event) {
  document.getElementById("sign-modal").style.display = "none";
  document.getElementById("signup-modal").style.display = "none";
  document.getElementById("login-modal").style.display = "block";
  document.getElementById("signup").style.display = "none";
  document.getElementById("restore-password-email").style.display = "none";
  document.getElementById("login").style.display = "block";
}

document.getElementById("register-link").onclick = function(event) {
  document.getElementById("login").style.display = "none";
  document.getElementById("restore-password-email").style.display = "none";
  document.getElementById("signup-modal").style.display = "block";
  document.getElementById("login-modal").style.display = "none";
  document.getElementById("signup").style.display = "block";
}

document.getElementById("login-link").onclick = function(event) {
  document.getElementById("signup-modal").style.display = "none";
  document.getElementById("restore-password-email").style.display = "none";
  document.getElementById("login-modal").style.display = "block";
  document.getElementById("signup-modal").style.display = "none";
  document.getElementById("login").style.display = "block";
}

document.getElementById("forgot-password").onclick = function(event) {
  document.getElementById("login").style.display = "none";
  document.getElementById("signup").style.display = "none";
  document.getElementById("restore-password-email").style.display = "block";
}

document.getElementById("password-reset-email").onclick = function(event) {
  passwordResetEmail();
}

document.getElementById("signin-submit").onclick = function(event) {
    login();
}

document.getElementById("edit-pics-submit").onclick = function(event) {
    editPics();
}

document.getElementById("logout-icon").onclick = function(event) {
  signOut();
}

document.getElementById("signup-submit").onclick = function(event) {
  const validUsername = checkFields("username")
  const validEmail = checkFields("email")
  if (validUsername && validEmail) {
    registerAccount();
  }
}

document.getElementById("edit-submit").onclick = function(event) {
  const validUsername = checkFields("edit-username")
  const validEmail = checkFields("edit-email")
  if (validUsername && validEmail) {
    editAccount();
  }
}

function checkFields(parameter) {
    const input = document.getElementById(parameter);
    if (checkUniqueness(parameter, input)) {
      return true;
    }
    return false;
}

function checkUniqueness(parameter, input) {
  let unique;
  let httpRequest = new XMLHttpRequest();            
  httpRequest.open('POST', '/api/uniqueness', false);
  httpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      input.style.border = "none";
      unique = true;
    } else {
      input.style.border = "1px solid #E34234";
      swal("Ooops!", JSON.parse(this.responseText).message, "warning");
      unique =  false;
    }
  };
  httpRequest.setRequestHeader("Content-type", "application/json");
  httpRequest.send(JSON.stringify({"parameter": parameter, "value": input.value}));
  return unique;
}

function registerAccount() {
  let submit = true;
  let error = [];
  const form = document.getElementById("signup-form");
  const userInfo = {
    "name": form[0].value,
    "email": form[1].value,
    "description": form[2].value,
    "category": form[3].value,
    "address": form[4].value,
    "password": form[5].value,
    "profilePic": profileImgReader,
	"backgroundPic": backgroundImgReader
  }

  if(!checkFill(userInfo.name)){
    submit = false;
    error.push("Enter an username")
    form[0].style.border = "1px solid #E34234";
  }

  if(!checkFill(userInfo.email)){
    submit = false;
    error.push("Enter a valid email");
    form[1].style.border = "1px solid #E34234";
  } else {
    if(!checkEmail(userInfo.email)){
      submit = false;
      error.push("The email you provided is invalid");
      form[1].style.border = "1px solid #E34234";
    }
  }

  if(!checkFill(userInfo.description)){
    submit = false;
    error.push("Enter a description")
    form[2].style.border = "1px solid #E34234";
  }

  if(!checkFill(userInfo.password)){
    submit = false;
    error.push("Enter a password")
    form[5].style.border = "1px solid #E34234";
  }

  if(!checkFill(form[4].value)){
    submit = false;
    error.push("Enter an address")
    form[4].style.border = "1px solid #E34234";
  }

  if(!checkFill(profileImgReader)){
    submit = false;
    error.push("Select a profile image")
    form[7].style.border = "1px solid #E34234";
  }

  if(!checkFill(backgroundImgReader)){
    submit = false;
    error.push("Select a background image")
    form[8].style.border = "1px solid #E34234";
  }

  if(!checkPasswordConfirmation()){
    submit = false;
    error.push("The passwords didn't match"); 
  }
  

  if(!submit){
    swal("Watch out!", error.join(", "), "warning");
    return false;
  }

  let httpRequest = new XMLHttpRequest();            
  httpRequest.open('POST', '/api/register', false);
  httpRequest.onreadystatechange = function () {
  	profileImgReader="";
	backgroundImgReader="";
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("close-login").click();
      swal("Great!", JSON.parse(this.responseText).message, "success");
    } else {
      swal("Sorry!", JSON.parse(this.responseText).message, "error");
    }
  };
  httpRequest.setRequestHeader("Content-type", "application/json");
  httpRequest.send(JSON.stringify(userInfo));
}

function editAccount() {
  let submit = true;
  let error = [];
  const form = document.getElementById("edit-form");
  const userInfo = {
    "name": form[0].value,
    "email": form[1].value,
    "description": form[2].value,
    "category": form[3].value,
    "address": form[4].value
  }

  if(!checkFill(userInfo.name)){
    submit = false;
    error.push("Enter an username")
    form[0].style.border = "1px solid #E34234";
  }

  if(!checkFill(userInfo.email)){
    submit = false;
    error.push("Enter a valid email");
    form[1].style.border = "1px solid #E34234";
  } else {
    if(!checkEmail(userInfo.email)){
      submit = false;
      error.push("The email you provided is invalid");
      form[1].style.border = "1px solid #E34234";
    }
  }

  if(!checkFill(userInfo.description)){
    submit = false;
    error.push("Enter a description")
    form[2].style.border = "1px solid #E34234";
  }

  if(!checkFill(form[4].value)){
    submit = false;
    error.push("Enter an address")
    form[4].style.border = "1px solid #E34234";
  }  

  if(!submit){
    swal("Watch out!", error.join(", "), "warning");
    return false;
  }

  let httpRequest = new XMLHttpRequest();            
  httpRequest.open('POST', '/api/edit?id='+pro_sess_id, false);
  httpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("close-edit").click();
      location.reload();
    } else {
      swal("Sorry!", JSON.parse(this.responseText).message, "error");
    }
  };
  httpRequest.setRequestHeader("Content-type", "application/json");
  httpRequest.send(JSON.stringify(userInfo));
}

function editPics() {
  let submit = false;
  let error = [];
  const form = document.getElementById("edit-pics-form");
  let userInfo = {};

  if(checkFill(profileImgReader)){
    userInfo.profilePic = profileImgReader;
    submit = true;
  }

  if(checkFill(backgroundImgReader)){
    userInfo.backgroundPic = backgroundImgReader;
    submit = true;
  }  

  if(!submit){
    document.getElementById("close-edit-pics").click();
    return;
  }

  let httpRequest = new XMLHttpRequest();            
  httpRequest.open('POST', '/api/edit?id='+pro_sess_id, false);
  httpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("close-edit-pics").click();
      location.reload();
    } else {
      swal("Sorry!", JSON.parse(this.responseText).message, "error");
    }
  };
  httpRequest.setRequestHeader("Content-type", "application/json");
  httpRequest.send(JSON.stringify(userInfo));
}

function login() {
  let submit = true;
  const form = document.getElementById("signin-form");
  const userInfo = {
    "username": form[0].value,
    "password": form[1].value
  }
  if(!checkFill(userInfo.username)){
    submit = false;
    form[0].style.border = "1px solid #E34234";
  }

  if(!checkFill(userInfo.password)){
    submit = false;
    form[1].style.border = "1px solid #E34234";
  }

  if(!submit){
    return false;
  }


  let httpRequest = new XMLHttpRequest();            
  httpRequest.open('POST', '/api/login', false);
  httpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      location.reload();
    } else {
      if (this.status == 402) {
        swal({
          title: "Almost there!",
          text: JSON.parse(this.responseText).message, 
          icon: "success",
          buttons: {
            resend: {
              text: "Resend verification email",
              value: "resend",
            },
            Continue: true,
          }
      }).then((value) => {
          switch (value) {
            case "resend":
                resendVerificationEmail(form[0].value);
              break;         
            default:
              swal.close();
          }
        });
      } else{
        swal("Sorry!", JSON.parse(this.responseText).message, "error");
      }
      
    }
  };
  httpRequest.setRequestHeader("Content-type", "application/json");
  httpRequest.send(JSON.stringify(userInfo));
}

function checkSession() {
  let status = {"logged": false, "user": {}};
  let httpRequest = new XMLHttpRequest();            
  httpRequest.open('GET', '/api/logged', false);
  httpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      status.logged = true;
      status.user = JSON.parse(this.responseText).user;
    } 
  };
  httpRequest.setRequestHeader("Content-type", "application/json");
  httpRequest.send();
  return status;
}

function isLogged() {
  session = checkSession();
  if(session.logged){
  	pro_sess_id = session["user"]._id;


  	const form = document.getElementById("edit-form");
  	form[0].value = session["user"].name;
  	form[1].value = session["user"].email;
  	form[2].value = session["user"].description;
  	form[3].value = session["user"].category;
  	form[4].value = session["user"].address;

    document.getElementById("login-icon").style.display = "none";
	document.getElementById("login-icon-mobile").style.display = "none";
	document.getElementById("logout-icon").style.display = "block";
	if (window.innerWidth > 700) {
		document.getElementById("logged-icon").style.display = "block";
		document.getElementById("logged-icon").onclick = function(){
			showProfile({"id":session["user"]._id});
		}
	} else{
		document.getElementById("logged-icon-mobile").style.display = "block";
	}
  }else{
  	if (window.innerWidth > 700) {
		document.getElementById("login-icon").style.display = "block";
	} else{
		document.getElementById("login-icon-mobile").style.display = "block";
	}
  }
}

function signOut() {
  let httpRequest = new XMLHttpRequest();            
  httpRequest.open('GET', '/api/signout', false);
  httpRequest.send();
  pro_sess_id = "";
  location.reload();
}

function checkFill(value) {
  if(value.length < 1) {
    return false;
  }
  return true;
}

function checkSpace(value) {
  const validEmail = /\s/.test(value);
  return validEmail;
}

function checkEmail(email) {
  const validEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$/.test(email.toLowerCase());
  return validEmail;
}

function checkPasswordConfirmation() {
  const password = document.getElementById("password"),
    passwordConfirmation = document.getElementById("password-confirmation");
    if(password.value != passwordConfirmation.value){
      passwordNotEqual(password, passwordConfirmation);
      return false;
    }
    return true;
}

function passwordNotEqual(field1, field2){
  field1.value = "";
  field2.value = "";
}


window.addEventListener("scroll", getProfilesWhenScroll);

// function getProfilesWhenScroll() {
function getProfilesWhenScroll(){
	if ((document.documentElement.scrollTop + page*70 + document.body.clientHeight) >= ((window.innerHeight*page))) {
        if(increment==1){
	        page += increment;
	        const moreProfiles = getProfiles();
	        if(moreProfiles){	        	
				const gridContent = generateGridContent(profilesBatch[page-1]);
				grid.innerHTML += gridContent;
				increment = 0;
				setTimeout(function(){
				    increment =1;
				}, 300);
	        }else{
	        	// noMoreProfiles()
	        }

	    }
    }
}

function noMoreProfiles(){
	window.removeEventListener("scroll", getProfilesWhenScroll);
}



window.onpopstate = function(event) {
  historySection(window.location.pathname.slice(1));
}


historySection(path);