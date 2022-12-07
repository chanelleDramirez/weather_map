"use strict"


var token =  //Located on keys.js


var api = //Located on keys.js


mapboxgl.accessToken = token;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9',
    zoom: 10,
    center: [-98.4916, 29.4252]
});


 $("#header").css("background-color", "#0066FF");


 $("#header").css("color", "white");


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


let marker = new mapboxgl.Marker()
    .setLngLat([-98.4916, 29.4252])
    .addTo(map)
 AdvancedMarkerView.draggable(true);


let terrain = new mapboxgl(document.getElementById("map-marker"),{
    center: {
        lat: 29.4252,
         long: -98.4916
    },
    zoom: 15
});
let locator = mapboxgl.Marker({
    position: {
        lat: 29.4252,
        long: -98.4916
    },
    map:map,
    draggable: true
    });



