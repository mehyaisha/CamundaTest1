const apiKey = '37503bc826dd9fa152117df921503fe7'; // API key
const apiUrl = 'http://api.weatherstack.com/';

document.getElementById('getWeather').addEventListener('click', getWeather);

function getWeather() {
    const city = document.getElementById('cityInput').value;
    if (!city) {
        alert('Please enter a city name');
        return;
    }

    fetch(`${apiUrl}?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }

            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById('cityName').textContent = cityName;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('description').textContent = `Weather: ${description}`;
        })
        .catch(error => console.error('Error:', error));
}
