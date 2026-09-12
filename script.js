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

const bootscreen = document.querySelector("#bootscreen");
const portfolio = document.querySelector("#portfolio");
const bootlines = document.querySelectorAll("#bootscreen p");

function typeLine(line, text) {
	return new Promise(resolve => {

		let i = 0;

		const interval = setInterval(() => {
			line.textContent += text[i];
			i++;
			if(i===text.length){
				clearInterval(interval);
				resolve();
			}
		}, 90);
	});
}

async function boot(){
	for (const line of bootlines){
		const text = line.textContent;
		line.textContent = "";
		line.style.opacity = "1";

		await typeLine(line, text);
	}

	bootscreen.classList.add("hidden");
	portfolio.classList.add("show");
}

boot();

