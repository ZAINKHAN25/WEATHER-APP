function checkinterfoo(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        getWeather();
    }
}

function getWeather() {
    var fetchvariable = "49cc8c821cd2aff9af04c9f98c36eb74";
    var cityInput = document.querySelector('.city');
    var dateoftoday = new Date();
    
    var months = [
        "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
    ];
    
    var divofclound = document.querySelector('.divofclound')
    var weatherIcon = document.querySelector('.weatherIcon');
    var temperature = document.querySelector('.temtwo');
    var weatherCondition = document.querySelector('.weatherCondition');
    var place = document.querySelector('.place');
    var date = document.querySelector(".date");
    
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInput.value + "&appid=" + fetchvariable + "&units=metric";
    
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            divofclound.classList.add('blocklevel');

            setTimeout(() => {
                divofclound.classList.remove('blocklevel');
            }, 4000);
            setTimeout(() => {
                
                place.innerHTML = data.name + ", " + data.sys.country;
                temperature.innerHTML = data.main.temp;
            weatherCondition.innerHTML = data.weather[0].main;
            date.innerHTML = dateoftoday.getDate() + " " + months[dateoftoday.getMonth()];
            function getWeatherIcon(condition) {
                switch (condition) {
                    case 'Clear':
                        return 'wi-day-sunny';
                    case 'Clouds':
                        return 'wi-cloudy';
                    case 'Rain':
                        return 'wi-rain';
                    case 'Thunderstorm':
                        return 'wi-thunderstorm';
                    case 'Drizzle':
                        return 'wi-sprinkle';
                    case 'Snow':
                        return 'wi-snow';
                    default:
                        return 'wi-day-cloudy';
                }
            }
            var conditionIcon = getWeatherIcon(weatherCondition.innerHTML);
            weatherIcon.innerHTML = '<i class="wi ' + conditionIcon + '"></i>';
        }, 2000);
        })
        .catch((error) => {
            alert("Please enter a correct city name in the input");
        });
}
