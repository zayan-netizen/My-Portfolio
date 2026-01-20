/* Nav-Buttons */

const navItems = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".content-section");

navItems.forEach(item => {
	item.addEventListener("click", () => {

		navItems.forEach(nav => nav.classList.remove("active"));

		sections.forEach(section => section.classList.remove("active"));

		item.classList.add("active");

		const targetid = item.getAttribute("data-target");
		document.getElementById(targetid).classList.add("active")
	});
});