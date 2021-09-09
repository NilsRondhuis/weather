const BASE_URL = 'http://api.weatherstack.com/current';

export default function (city) {
    return fetch(`${BASE_URL}?access_key=a9180199410b777ec9cb71c1c9e5cc53&query=${city}`)
    .then(response => response.json());
}