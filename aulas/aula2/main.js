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
  const humidity = document.getElementById('humedad');
  const wSpeed = document.getElementById('wSpeed'); // Define el elemento
  const imgFondo = document.getElementById('imagen-fondo');

  async function updateImage() {
    const response = await fetch(
      `${api.url}?q=Almendralejo,Spain&appid=${api.key}&lang=es`
    );
    const data = await response.json();
    const temp = Math.round(data.main.temp - 273.15);
    let src;
  
    switch (true) {
      case temp < 10:
        src = 'frio.jpg';
        break;
      case temp >= 10 && temp < 20:
        src = 'nubes.jpg';
        break;
      default:
        case temp >= 20:
        src = 'sol.jpg';
        break;
        src = 'sol.jpg';
    }
  
    imgFondo.src = src;
  }
  
  updateImage();
  window.onload = updateImage;
  
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
      humidity.innerHTML = `humedad: ${data.main.humidity}%`;
      wSpeed.innerHTML = `Velocidad: ${data.wind.speed} m/s `;
      var velocidad = $data.wind.speed;
      document.cookie='velocidad =' +velocidad;
      updateImages(data);
      
      // Mostrar la humedad en la tarjeta
      
    } catch (err) {
      
    }
  }
  
  window.onload = onSubmit; // Llama a onSubmit al cargar la página para obtener el clima automáticamente
  