$(document).ready(function(){
  
var lat;
var long;
var city;

  //AJAX request for location
  $.getJSON("http://ip-api.com/json",function(data2){
    lat = data2.lat;
    long = data2.lon;
    city = data2.city
    console.log(data2)

//var url = "http://api.openweathermap.org/data/2.5/weather?lat=";
var url = "http://api.openweathermap.org/data/2.5/weather?q=";
var appid = "&APPID=a4b3eb234adddc9781ee965ab3aba708";
  
  //AJAX request weather API
//  $.getJSON( url + lat + "&lon=" + long + appid, function(data) {
   $.getJSON( url + city + appid, function(data) {

  var city = data.name;
  var condition = data.weather[0].description;
  var temperature = data.main.temp;

  $("#city").html(city);
  $("#temperature").html(temperature);
  $("#condition").html(condition);

  console.log (data);
  }); //end JSON weather API

  }); //end JSON location

}); //end ready

