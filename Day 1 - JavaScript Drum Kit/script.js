function playMusic(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	if (audio) {
		audio.currentTime = 0;
		audio.play();
		const child = document.querySelector(`div[data-key="${e.keyCode}"]`);
		child.classList.add("press");
		// setTimeout(() => {
		// 	child.classList.remove("press");
		// }, 100);
	}
}

function removeTransform(e) {
	if (e.propertyName === "transform") {
		e.target.classList.remove("press");
	}
}

children = document.querySelectorAll(".child");
children.forEach((child) => {
	child.addEventListener("transitionend", removeTransform);
});

document.addEventListener("keydown", playMusic);
