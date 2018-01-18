function showProfile() {
	document.getElementById("content").style.display = "none";
	document.getElementById("profile").style.display = "flex";
}

function showContent() {
	document.getElementById("profile").style.display = "none";
	document.getElementById("content").style.display = "block";
}

const grid = document.getElementById("grid");

if(window.innerWidth > 1200) {
	grid.innerHTML = "<div class='grid-item' style='background-image: url(assets/img/user1.png); background-repeat: no-repeat; background-size: cover; position:absolute;top: 70px; left: 0;'>\
				<div class='grid-content'>\
				\
					<img src='assets/icons/journalism_icon.png'>\
					<h4 class='profile-thumb-category'>Journalism</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile1.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>blockchain developer</h3>\
					</div>\
				</div>				\
			  </div>\
			  \
			  <div class='grid-item grid-item--height2' style='background-image: url(assets/img/user2.png ); background-repeat: no-repeat; background-size: cover; position:absolute;top: 70px; left: 16.66%;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/support_icon.png'>\
					<h4 class='profile-thumb-category'>Support Lines</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile2.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>blockchain accountant</h3>\
					</div>\
				</div>	\
			  </div>\
			  \
			  <div class='grid-item ' style='background-image: url(assets/img/user3.png); background-repeat: no-repeat; background-size: cover; position:absolute;top: 70px; left: 33.32%;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/professional_icon.png'>\
					<h4 class='profile-thumb-category'>Professional</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile3.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>professional massage</h3>\
					</div>\
				</div>	\
			  </div>\
			  \
			  <div class='grid-item' style='background-image: url(assets/img/user4.png); background-repeat: no-repeat; background-size: cover; position:absolute;top: 70px; left: 49.98%;'>\
				<div class='grid-content'>\
					<img src='assets/icons/journalism_icon.png'>\
					<h4 class='profile-thumb-category'>Journalism</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile4.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>iranian independent journalist</h3>\
					</div>\
				</div>				\
			  </div>\
			  \
			  <div class='grid-item' style='background-image: url(assets/img/user5.png ); background-repeat: no-repeat; background-size: cover; position:absolute;top: 70px; left: 66.63%;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/support_icon.png'>\
					<h4 class='profile-thumb-category'>Support Lines</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile5.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>american journalist</h3>\
					</div>\
				</div>	\
			  </div>\
			  \
			  <div class='grid-item ' style='background-image: url(assets/img/user6.png ); background-repeat: no-repeat; background-size: cover; position:absolute;top: 70px; left: 83.30%;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/professional_icon.png'>\
					<h4 class='profile-thumb-category'>Professional</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile6.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>suicide prevention lifeline</h3>\
					</div>\
				</div>	\
			  </div>\
			  \
			  <div class='grid-item' style='background-image: url(assets/img/user7.png); background-repeat: no-repeat; background-size: cover; position:absolute;top: 370px; left: 0;'>\
				<div class='grid-content'>\
					<img src='assets/icons/journalism_icon.png'>\
					<h4 class='profile-thumb-category'>Journalism</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile7.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>independent stylist</h3>\
					</div>\
				</div>				\
			  </div>\
			  \
			  <div class='grid-item' style='background-image: url(assets/img/user8.png ); background-repeat: no-repeat; background-size: cover; position:absolute;top: 370px; left: 33.32%;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/support_icon.png'>\
					<h4 class='profile-thumb-category'>Support Lines</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile8.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>report domestic violence</h3>\
					</div>\
				</div>	\
			  </div>\
			  \
			  <div class='grid-item grid-item--height2 grid-item--width2' style='background-image: url(assets/img/user9.png); background-repeat: no-repeat; background-size: cover; position:absolute;top: 370px; left: 49.98%;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/professional_icon.png'>\
					<h4 class='profile-thumb-category'>Professional</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile9.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>human rights watch</h3>\
					</div>\
				</div>	\
			  </div>\
			  \
			  <div class='grid-item' style='background-image: url(assets/img/user10.png); background-repeat: no-repeat; background-size: cover; position:absolute;top: 370px; left: 83.30%;'>\
				<div class='grid-content'>\
					<img src='assets/icons/journalism_icon.png'>\
					<h4 class='profile-thumb-category'>Journalism</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile10.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>veterans crisis line</h3>\
					</div>\
				</div>				\
			  </div>\
			  \
			 <div class='grid-item' style='background-image: url(assets/img/user11.png ); background-repeat: no-repeat; background-size: cover; position:absolute;top: 670px; left: 0;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/support_icon.png'>\
					<h4 class='profile-thumb-category'>Support Lines</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile11.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>proffesional accountant</h3>\
					</div>\
				</div>	\
			  </div>\
			  \
			  <div class='grid-item' style='background-image: url(assets/img/user12.png ); background-repeat: no-repeat; background-size: cover; position:absolute;top: 670px; left: 16.66%;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/professional_icon.png'>\
					<h4 class='profile-thumb-category'>Professional</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile12.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>depression line</h3>\
					</div>\
				</div>	\
			  </div>\
			  \
			  <div class='grid-item' style='background-image: url(assets/img/user13.png); background-repeat: no-repeat; background-size: cover; position:absolute;top: 670px; left: 33.32%;'>\
				<div class='grid-content'>\
					<img src='assets/icons/journalism_icon.png'>\
					<h4 class='profile-thumb-category'>Journalism</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile13.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>Proffesional trader</h3>\
					</div>\
				</div>				\
			  </div>\
			  \
			  <div class='grid-item' style='background-image: url(assets/img/user14.png ); background-repeat: no-repeat; background-size: cover; position:absolute;top: 670px; left: 83.30%;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/support_icon.png'>\
					<h4 class='profile-thumb-category'>Support Lines</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile14.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>Soul aid</h3>\
					</div>\
				</div>	\
			  </div>";
} else if(window.innerWidth <= 700) {
	grid.innerHTML = "<div class='grid-item' style='background-image: url(assets/img/user1.png); background-repeat: no-repeat; background-size: cover; position:absolute;top: 70px; left: 0;'>\
				<div class='grid-content'>\
					<img src='assets/icons/journalism_icon.png'>\
					<h4 class='profile-thumb-category'>Journalism</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile1.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>blockchain developer</h3>\
					</div>\
				</div>				\
			  </div>\
			  \
			  <div class='grid-item grid-item--height2' style='background-image: url(assets/img/user2.png ); background-repeat: no-repeat; background-size: cover; position:absolute;top: 70px; left: 50%;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/support_icon.png'>\
					<h4 class='profile-thumb-category'>Support Lines</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile2.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>blockchain accountant</h3>\
					</div>\
				</div>	\
			  </div>\
			  \
			  <div class='grid-item ' style='background-image: url(assets/img/user3.png); background-repeat: no-repeat; background-size: cover; position:absolute;top: 370px; left: 0;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/professional_icon.png'>\
					<h4 class='profile-thumb-category'>Professional</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile3.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>professional massage</h3>\
					</div>\
				</div>	\
			  </div>\
\
			  <div class='grid-item' style='background-image: url(assets/img/user4.png); background-repeat: no-repeat; background-size: cover; position:absolute;top: 670px; left: 0;'>\
				<div class='grid-content'>\
					<img src='assets/icons/journalism_icon.png'>\
					<h4 class='profile-thumb-category'>Journalism</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile4.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>iranian independent journalist</h3>\
					</div>\
				</div>				\
			  </div>\
			  \
			  <div class='grid-item' style='background-image: url(assets/img/user5.png ); background-repeat: no-repeat; background-size: cover; position:absolute;top: 670px; left: 50%;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/support_icon.png'>\
					<h4 class='profile-thumb-category'>Support Lines</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile5.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>american journalist</h3>\
					</div>\
				</div>	\
			  </div>\
			  \
			  <div class='grid-item ' style='background-image: url(assets/img/user6.png ); background-repeat: no-repeat; background-size: cover; position:absolute;top: 970px; left: 0;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/professional_icon.png'>\
					<h4 class='profile-thumb-category'>Professional</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile6.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>suicide prevention lifeline</h3>\
					</div>\
				</div>	\
			  </div>\
\
			  <div class='grid-item' style='background-image: url(assets/img/user7.png); background-repeat: no-repeat; background-size: cover; position:absolute;top: 970px; left: 50%;'>\
				<div class='grid-content'>\
					<img src='assets/icons/journalism_icon.png'>\
					<h4 class='profile-thumb-category'>Journalism</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile7.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>independent stylist</h3>\
					</div>\
				</div>				\
			  </div>\
			  \
			  <div class='grid-item grid-item--height2 grid-item--width2' style='background-image: url(assets/img/user9.png); background-repeat: no-repeat; background-size: cover; position:absolute;top: 1270px; left: 0%;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/professional_icon.png'>\
					<h4 class='profile-thumb-category'>Professional</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile9.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>human rights watch</h3>\
					</div>\
				</div>	\
			  </div>\
\
			  <div class='grid-item' style='background-image: url(assets/img/user8.png ); background-repeat: no-repeat; background-size: cover; position:absolute;top: 1870px; left: 0%;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/support_icon.png'>\
					<h4 class='profile-thumb-category'>Support Lines</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile8.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>report domestic violence</h3>\
					</div>\
				</div>	\
			  </div>\
\
			  <div class='grid-item' style='background-image: url(assets/img/user10.png); background-repeat: no-repeat; background-size: cover; position:absolute;top:1870px; left: 50%;'>\
				<div class='grid-content'>\
					<img src='assets/icons/journalism_icon.png'>\
					<h4 class='profile-thumb-category'>Journalism</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile10.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>veterans crisis line</h3>\
					</div>\
				</div>				\
			  </div>\
			  \
			 <div class='grid-item' style='background-image: url(assets/img/user11.png ); background-repeat: no-repeat; background-size: cover; position:absolute;top: 2170px; left: 0%;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/support_icon.png'>\
					<h4 class='profile-thumb-category'>Support Lines</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile11.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>proffesional accountant</h3>\
					</div>\
				</div>	\
			  </div>\
			  \
			  <div class='grid-item' style='background-image: url(assets/img/user12.png ); background-repeat: no-repeat; background-size: cover; position:absolute;top: 2170px; left: 50%;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/professional_icon.png'>\
					<h4 class='profile-thumb-category'>Professional</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile12.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>depression line</h3>\
					</div>\
				</div>	\
			  </div>\
\
			  <div class='grid-item' style='background-image: url(assets/img/user13.png); background-repeat: no-repeat; background-size: cover; position:absolute;top: 2470px; left: 0%;'>\
				<div class='grid-content'>\
					<img src='assets/icons/journalism_icon.png'>\
					<h4 class='profile-thumb-category'>Journalism</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile13.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>Proffesional trader</h3>\
					</div>\
				</div>				\
			  </div>\
			  \
			  <div class='grid-item' style='background-image: url(assets/img/user14.png ); background-repeat: no-repeat; background-size: cover; position:absolute;top: 2470px; left: 50%;'>\
			  	<div class='grid-content'>\
					<img src='assets/icons/support_icon.png'>\
					<h4 class='profile-thumb-category'>Support Lines</h4>\
					<div class='thumb-user-info'>\
						<img onclick='showProfile()' src='assets/img/profile14.png' alt='user profile picture'>\
						<h3 class='profile-thumb-name' onclick='showProfile()'>Soul aid</h3>\
					</div>\
				</div>	\
			  </div>";
}
