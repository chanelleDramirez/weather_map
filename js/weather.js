"use strict"

var token = "pk.eyJ1IjoiY2hhbmVsbGVyYW1pcmV6IiwiYSI6ImNsYjQzODczeTA0bjgzcmwwM2duejFidTkifQ.CxM9hQeZsjYWhK6rQdI5Mw"
var api = "39d4ce254bea6299ed932f2dc24245f9"


let tempElement = $("#temperature-value");
let descElement = $("#temperature-description");
let humElement = $("#Humidity");
let windElement = $("#Wind");
let pressureElement = $("#Pressure");

$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: api,
  //  id:     4726206,
    q:    "San Antonio, US",
    units: "imperial"
}).done(function(data) {
    tempElement.html(data.main.temp + " °F ")
    descElement.html("Description: " + data.weather[0].description )
    humElement.html("Humidity: " + data.main.humidity)
    windElement.html("Wind: " + data.wind.speed)
    pressureElement.html("Pressure: " + data.main.pressure)
    console.log(tempElement);
    console.log(data);

    var marker = new mapboxgl.Marker()
        .setLngLat([-98.4916, 29.4252])
        .addTo(map);

    let lat = 29.4252;
    let long = -98.4916;
    $.get("http://api.openweathermap.org/data/2.5/forecast?lat=" + lat +"&lon="+ long + "&appid=" + api + "&units=imperial").done(function(data){
        let reports = data.list;
        for(let i = 0; i < reports.length; i += 8) {
            console.log(reports[i]);
            console.log(data.city.name);
        }
    })
});


// let lat = 29.4252;
// let long = -98.4916;
//     $.get("http://api.openweathermap.org/data/2.5/forecast?lat=" + lat +"&lon="+ long + "&appid=" + api + "&units=metric").done(function(data){
//         let reports = data.list;
//         for(let i = 0; i < reports.length; i += 8) {
//             console.log(reports[i]);
//         }
// })

mapboxgl.accessToken = token;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});

 $("#header").css("background-color", "#0066FF");

 $("#header").css("color", "white");











