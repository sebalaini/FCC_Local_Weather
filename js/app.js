$(document).ready(function(){
  
var lat;
var long;
  
  //AJAX request for location
  $.getJSON("http://ip-api.com/json",function(data2){
    lat=data2.lat;
    long=data2.lon;

var url = "http://api.openweathermap.org/data/2.5/weather?lat=";
var appid = "&APPID=a4b3eb234adddc9781ee965ab3aba708";
  
  //AJAX request weather API
  $.getJSON( url + lat + "&lon=" + long + appid, function (data) {

  var city = data.name;
  var condition = data.weather[0].description;
  var temperature = data.main.temp


  $("#city").html = (city);
  $("#temperature").html = (temperature);
  $("#condition").html = (temperature);

  }); //end JSON weather API

  }); //end JSON location

}); //end ready

