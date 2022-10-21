document.getElementById("desktop-arrowDown1").addEventListener("click", () => {
	document.querySelector(".features-Desktopdropdown").style.display = "block";
	document.getElementById("desktop-arrowDown1").style.display = "none";
	document.getElementById("desktop-arrowUp1").style.display = "block";
});

document.getElementById("desktop-arrowUp1").addEventListener("click", () => {
	document.querySelector(".features-Desktopdropdown").style.display = "none";
	document.getElementById("desktop-arrowDown1").style.display = "block";
	document.getElementById("desktop-arrowUp1").style.display = "none";
});

document.getElementById("desktop-arrowDown2").addEventListener("click", () => {
	document.querySelector(".company-Desktopdropdown").style.display = "block";
	document.getElementById("desktop-arrowDown2").style.display = "none";
	document.getElementById("desktop-arrowUp2").style.display = "inline-block";
});

document.getElementById("desktop-arrowUp2").addEventListener("click", () => {
	document.querySelector(".company-Desktopdropdown").style.display = "none";
	document.getElementById("desktop-arrowDown2").style.display = "inline-block";
	document.getElementById("desktop-arrowUp2").style.display = "none";
});

// Mobile Commands //

document.getElementById("menuIcon").addEventListener("click", () => {
	document.getElementById("mobile-menu").style.display = "flex";
	document.querySelector(".container").style.filter = "contrast(40%)";
});

document.getElementById("menuClose").addEventListener("click", () => {
	document.getElementById("mobile-menu").style.display = "none";
	document.querySelector(".container").style.filter = "none";
});

document.getElementById("arrowDown1").addEventListener("click", () => {
	document.querySelector(".features-Mobiledropdown").style.display = "block";
	document.getElementById("arrowDown1").style.display ="none";
	document.getElementById("arrowUp1").style.display ="block";
});

document.getElementById("arrowUp1").addEventListener("click", () => {
	document.querySelector(".features-Mobiledropdown").style.display = "none";
	document.getElementById("arrowDown1").style.display ="block";
	document.getElementById("arrowUp1").style.display ="none";
});

document.getElementById("arrowDown2").addEventListener("click", () => {
	document.querySelector(".company-Mobiledropdown").style.display = "block";
	document.getElementById("arrowDown2").style.display ="none";
	document.getElementById("arrowUp2").style.display ="block";
});

document.getElementById("arrowUp2").addEventListener("click", () => {
	document.querySelector(".company-Mobiledropdown").style.display = "none";
	document.getElementById("arrowUp2").style.display ="none";
	document.getElementById("arrowDown2").style.display ="block";
});