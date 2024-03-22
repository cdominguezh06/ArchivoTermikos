const api = {
      key: '9e122cd782b2d0333f5fe4e7fa192062',
      url: `https://api.openweathermap.org/data/2.5/weather`
    };
    
    const card = document.getElementById('card');
    const city = document.getElementById('city');
    const date = document.getElementById('date');
    const tempImg = document.getElementById('temp-img');
    const temp = document.getElementById('temp');
    const weather = document.getElementById('weather');
    const range = document.getElementById('range');
    const humidity = document.getElementById('humidity'); // Define el elemento
    
    function updateImages(data) {
      const temp = toCelsius(data.main.temp);
      let src = 'sol.png';
      if (temp > 10) {
        src = 'sol.png';
      } else if (temp < 10) {
        src = 'nubes.png';
      }
      tempImg.src = src;
    }
    
    function toCelsius(kelvin) {
      return Math.round(kelvin - 273.15);
    }
    
    async function onSubmit(event) {
      event.preventDefault();
      // Se eliminó la entrada de ciudad y la función de búsqueda
    
      try {
        const response = await fetch(`${api.url}?q=Almendralejo,Spain&appid=${api.key}&lang=es`);
        const data = await response.json();
        card.style.display = 'block';
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        date.innerHTML = (new Date()).toLocaleDateString();
        temp.innerHTML = `${toCelsius(data.main.temp)}c`;
        weather.innerHTML = data.weather[0].description;
    
        updateImages(data);
        
        // Mostrar la humedad en la tarjeta
        humidity.innerHTML = `Humedad: ${data.main.humidity}%`;
      } catch (err) {
        console.log(err);
        alert('Hubo un error');
      }
    }
    
    window.onload = onSubmit; // Llama a onSubmit al cargar la página para obtener el clima automáticamente
    