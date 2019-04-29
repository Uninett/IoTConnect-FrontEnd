var descriptionInput = document.getElementById("description");
var deliverByEmailInput = document.getElementById("send-email");
var submitButton = document.getElementById("sendBtn");
var pskTextField = document.getElementById("psk");
var showPskButton = document.getElementById("showPsk");
var form = document.getElementById("outerForm");
var loader = document.getElementById("loader");
var pskScreen = document.getElementById("pskScreen");

// Get username from URL parameters
var username = getUrlVars()['name'];

if (username == null) {
	// HTTP redirect
	window.location.href = backendUrl + "/connect/";
};

// Set welcome text
var welcomeHeader = document.getElementById("welcomeText");
welcomeHeader.innerHTML = "Velkommen, " + username;

// Add event listeners to input elements
var inputs = document.getElementsByTagName("input");
for (i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener("keyup", function(event) {
		if (event.keyCode === 13) {
			event.preventDefault();
			document.getElementById("sendBtn").click();
		}
	});
}