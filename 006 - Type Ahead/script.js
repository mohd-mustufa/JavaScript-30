const cities = [];
const endpoint =
	"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

fetch(endpoint)
	.then((blob) => blob.json())
	.then((res) => cities.push(...res));

function getFilteredCities(value) {
	return cities.filter((place) => {
		const reg = new RegExp(value, "i");
		return place.city.match(reg) || place.state.match(reg);
	});
}

function display() {
	const arr = getFilteredCities(this.value);
	const regexp = new RegExp(this.value, "i");
	const html = arr
		.map((place) => {
			const cityName = place.city.replace(
				regexp,
				`<span class="highlight">${this.value}</span>`
			);
			const stateName = place.state.replace(
				regexp,
				`<span class="highlight">${this.value}</span>`
			);
			return `<li>${cityName}, ${stateName}</li>`;
		})
		.join("");
	ul.innerHTML = html;
}

const input = document.querySelector("input");
const ul = document.querySelector("ul");

input.addEventListener("change", display);
input.addEventListener("keyup", display);
