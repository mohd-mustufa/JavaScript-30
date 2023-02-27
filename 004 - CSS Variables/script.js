const inputs = document.querySelectorAll("input");

function handleChange() {
	const val = this.dataset.size || "";
	document.documentElement.style.setProperty(
		"--" + this.name,
		this.value + val
	);
}

inputs.forEach((e) => {
	e.addEventListener("change", handleChange);
	e.addEventListener("mousemove", handleChange);
});
