const secondHand = document.querySelector(".sec");
const minuteHand = document.querySelector(".min");
const hourHand = document.querySelector(".hour");

function setTime() {
	const currentTime = new Date();

	const seconds = currentTime.getSeconds();
	const incrementSeconds = seconds * 6 + 90;
	secondHand.style.transform = `rotate(${incrementSeconds}deg)`;

	const minutes = currentTime.getMinutes();
	const incrementMinutes = minutes * 6 + seconds / 12 + 90;
	minuteHand.style.transform = `rotate(${incrementMinutes}deg)`;

	const hours = currentTime.getHours();
	const incrementHours = (hours % 12) * 30 + (minutes / 12) * 6 + 90;
	hourHand.style.transform = `rotate(${incrementHours}deg)`;
}

setInterval(setTime, 1000);
setTime();
