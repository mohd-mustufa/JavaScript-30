const light = document.querySelector(".light");
const dark = document.querySelector(".dark");

dark.addEventListener("click", () => {
	document.documentElement.style.setProperty("--color", "#333");
	light.classList.remove("light-theme");
	dark.classList.remove("light-theme");
	light.classList.add("dark-theme");
	dark.classList.add("dark-theme");
});

light.addEventListener("click", () => {
	document.documentElement.style.setProperty("--color", "#fff");
	light.classList.remove("dark-theme");
	dark.classList.remove("dark-theme");
	light.classList.add("light-theme");
	dark.classList.add("light-theme");
});
