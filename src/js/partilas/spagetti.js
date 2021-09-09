const refs = {
    form: document.querySelector('#form'),
    ulContainer: document.querySelector('.container'),
};

const BASE_URL = 'http://api.weatherstack.com/current';

refs.form.addEventListener('submit', fetchWeather);

function fetchWeather(e) {
    e.preventDefault();
    const search = e.currentTarget.elements.query.value;
    console.log(search);

    fetch(`${BASE_URL}?access_key=a9180199410b777ec9cb71c1c9e5cc53&query=${search}`)
    .then(response => response.json())
    .then(weather => {
        console.log(weather);
        const elements = markup(weather);
        refs.ulContainer.innerHTML = elements;
    })
    .catch(err => console.log(err))
    .finally(e.currentTarget.reset());
}

function markup(obj) {
    return `
    <ul class="list list-weather centered">
          <li class="item"><p class="city">${obj.location.name}</p></li>
          <li class="item"><img src="${obj.current.weather_icons.join("")}" alt="${obj.current.weather_descriptions.join("")}"></li>
          <li class="item"><p class="condition">${obj.current.weather_descriptions.join("")}</p></li>
          <li class="item"><p class="temp">${obj.current.temperature} c</p></li>
          <li class="item"><p class="time">${obj.location.localtime}</p></li>
    </ul>
    `
}
