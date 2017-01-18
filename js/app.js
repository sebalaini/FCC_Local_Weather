$(document).ready(function(){
  
var lat;
var long;
  
  //AJAX request for location
  $.getJSON("https://ip-api.com/json",function(data2){
    lat=data2.lat;
    long=data2.lon;

var url = "https://api.openweathermap.org/data/2.5/weather?lat=";
var appid = "&APPID=a4b3eb234adddc9781ee965ab3aba708";
  
  //AJAX request weather API
  $.getJSON( url + lat + "&lon=" + long + appid, function (data) {

  $("#city").html = data.name;
  $("#temperature").html = data.main.temp;
  $("#condition").html = data.weather.main;

  }); //end JSON weather API

  }); //end JSON location

}); //end ready

