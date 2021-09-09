import refs from './getRefs';
import fetchWeather from './fethResponse';

refs.form.addEventListener('submit', onSearch);

function onSearch(e) {
    e.preventDefault()
    const search = e.currentTarget.elements.query.value;
    fetchWeather(search)
    .then(createMarkup)
    .catch(err => console.log(err))
    .finally(e.currentTarget.reset());
}

function createMarkup(obj) {
    const elements = markup(obj);
    refs.ulContainer.innerHTML = elements;
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
    `;
}