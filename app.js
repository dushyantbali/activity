document.getElementById('search-btn').addEventListener('click', fetchWeather);

async function fetchWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = '6ae23e49dbmsh28832acca8b12bfp18c69ajsn51eae0ce626d'; // Replace with your RapidAPI key
    const url = 'https://open-weather13.p.rapidapi.com/city/landon/EN';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '6ae23e49dbmsh28832acca8b12bfp18c69ajsn51eae0ce626d',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    
    }

function displayWeather(data) {
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('weather-description').textContent = data.weather[0].description;
    document.getElementById('temperature').textContent = `${data.main.temp}°C`;
    document.getElementById('weather-icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}}
