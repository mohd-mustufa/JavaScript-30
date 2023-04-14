const panels = document.querySelectorAll(".panel");

function toggleOpen() {
	this.classList.toggle("open");
}

function toggleOpenText(e) {
	if (e.propertyName.includes("flex")) {
		this.classList.toggle("open-text");
	}
}

panels.forEach((panel) => {
	panel.addEventListener("click", toggleOpen);
});

panels.forEach((panel) => {
	panel.addEventListener("transitionend", toggleOpenText);
});
