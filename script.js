const apiKey = "4d8fb5b93d4af21d66a2948710284366";
let temp = document.querySelector(".weather-temp");
let weatherDesc = document.querySelector(".weather-desc");
let wind = document.querySelector(".wind .value");
let pressure = document.querySelector(".pressure .value");
let humidity = document.querySelector(".humidity .value");
let locatio = document.querySelector(".location");
let dateDayname = document.querySelector(".date-container .date-dayname");
let option = document.getElementById("city");

function citys(city) {
	url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	async function getJason() {
		const respnse = await fetch(url);
		const data = await respnse.json();
		console.log(data);

		temp.innerHTML = `${Math.round(data.main.temp)} °C`;
		weatherDesc.innerHTML = data.weather[0]["description"];
		wind.innerHTML = `${data.wind.speed} km/h`;
		humidity.innerHTML = `${data.main.humidity} %`;
		pressure.innerHTML = `${data.main.pressure} mb`;
		locatio.innerHTML = city;

		dateDayname.innerHTML = new Date().toDateString();
	}
	getJason();
}
citys("Amman");
option.addEventListener("change", (e) => {
	citys(e.target.value);
});
