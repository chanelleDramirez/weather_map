"use strict"

var token = "pk.eyJ1IjoiY2hhbmVsbGVyYW1pcmV6IiwiYSI6ImNsYjQzODczeTA0bjgzcmwwM2duejFidTkifQ.CxM9hQeZsjYWhK6rQdI5Mw"
var api = "39d4ce254bea6299ed932f2dc24245f9"

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: api,
    id:     4726206,
    q:    "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    console.log(data);
});

mapboxgl.accessToken = token;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});

 $("#header").css("background-color", "#0066FF");

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: OPEN_WEATHER_APPID,
    lat:    29.423017,
    lon:   -98.48527,
    units: "imperial"
}).done(function(data) {
    console.log('current weather', data);
});