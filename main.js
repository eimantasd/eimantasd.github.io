document.querySelector('.date').textContent = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
        function getRandomNumber(min, max) {
            return (Math.random() * (max - min) + min).toFixed(2);
        }

        document.getElementById('indoor-temp').textContent = `${getRandomNumber(20, 30)}°C`;
        document.getElementById('outdoor-humidity').textContent = `${getRandomNumber(40, 80)}%`;
        document.getElementById('indoor-temp2').textContent = `${getRandomNumber(50, 80)}%`;

        function getRandomWeather() {
            const weatherConditions = ["Sunny", "Cloudy", "Rainy", "Snowy", "Windy"];
            const randomIndex = Math.floor(Math.random() * weatherConditions.length);
            return weatherConditions[randomIndex];
        }

        document.getElementById('weatherTitle').textContent = getRandomWeather();