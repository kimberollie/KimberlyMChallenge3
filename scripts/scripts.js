//Mapbox API
// API token
mapboxgl.accessToken = 'pk.eyJ1Ijoia2ltYmVyb2xsaWUiLCJhIjoiY2s4azUwajliMGc0NzNtbjZoeThzNjBsOSJ9.j9hg9EcON4aRPNCOU90qmQ';

// Initialate map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',

  // Positie van de kaart met als midden greenwich 
  center: [51.477928, -0.001545],
  zoom: 1,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

//Markers toevoegen van space stations waar geland kan worden
//Vandenberg Airforce base
var popup = new mapboxgl.Popup().setHTML('<h3>Vandenberg Airforce base</h3>');

var marker = new mapboxgl.Marker()
    .setLngLat([-120.57244, 34.742027])
    .setPopup(popup)
    .addTo(map);

//Kennedy space station
var popup = new mapboxgl.Popup().setHTML('<h3>Kennedy space station</h3>');

var marker = new mapboxgl.Marker()
    .setLngLat([-80.604344, 28.608397])
    .setPopup(popup)
    .addTo(map);

//Esrange
var popup = new mapboxgl.Popup().setHTML('<h3>Esrange</h3>');

var marker = new mapboxgl.Marker()
    .setLngLat([21.12423000000001, 67.88359])
    .setPopup(popup)
    .addTo(map);

//Kosmodroom plesetsk
var popup = new mapboxgl.Popup().setHTML('<h3>Kosmodroom plesetsk</h3>');

var marker = new mapboxgl.Marker()
    .setLngLat([40.517, 62.917])
    .setPopup(popup)
    .addTo(map);

//Openweather API
//Vandenberg Airforce Base weer

function drawVandenbergWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);

    document.getElementById('description1').innerHTML = d.weather[0].description;
    document.getElementById('temp1').innerHTML = celcius + '&deg;';
    document.getElementById('location1').innerHTML = d.name;
}

function vandenbergAirforce() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=34.742027&lon=-120.57244&APPID=84a7539cd5f38f71aa76aec925184a5f')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        drawVandenbergWeather(data); // Call drawWeather
    })
    .catch(function() {
        // catch any errors
    });
}

//Kennedy Space Station weer

function drawKennedyWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);

    document.getElementById('description2').innerHTML = d.weather[0].description;
    document.getElementById('temp2').innerHTML = celcius + '&deg;';
    document.getElementById('location2').innerHTML = d.name;
}

function kennedySpaceStation() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=28.608397&lon=-80.604344&APPID=84a7539cd5f38f71aa76aec925184a5f')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        drawKennedyWeather(data); // Call drawWeather
    })
    .catch(function() {
        // catch any errors
    });
}

//Esrange weer

function drawEsrangeWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);

    document.getElementById('description3').innerHTML = d.weather[0].description;
    document.getElementById('temp3').innerHTML = celcius + '&deg;';
    document.getElementById('location3').innerHTML = d.name;
}

function esrange() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=67.88359&lon=21.12423000000001&APPID=84a7539cd5f38f71aa76aec925184a5f')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        drawEsrangeWeather(data); // Call drawWeather
    })
    .catch(function() {
        // catch any errors
    });
}

//Kosmodroom plesetsk weer

function drawKosmodroomWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);

    document.getElementById('description4').innerHTML = d.weather[0].description;
    document.getElementById('temp4').innerHTML = celcius + '&deg;';
    document.getElementById('location4').innerHTML = d.name;
}

function kosmodroom() {
    fetch('https://api.openweathermap.org/data/2.5/weather?lat=62.917&lon=40.517&APPID=84a7539cd5f38f71aa76aec925184a5f')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        drawKosmodroomWeather(data); // Call drawWeather
    })
    .catch(function() {
        // catch any errors
    });
}

window.onload = function() {
    vandenbergAirforce();
    kennedySpaceStation();
    esrange();
    kosmodroom();
}