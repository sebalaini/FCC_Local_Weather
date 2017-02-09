$(document).ready(function(){
  
var lat;
var long;
var city2;

  //AJAX request for location
  $.getJSON("http://ip-api.com/json",function(data2){
    lat = data2.lat;
    long = data2.lon;
    city2 = data2.city
//    console.log(data2)

//var url = "http://api.openweathermap.org/data/2.5/weather?lat=";
var url = "http://api.openweathermap.org/data/2.5/weather?q=";
var appid = "&APPID=a4b3eb234adddc9781ee965ab3aba708";
  
  //AJAX request weather API
//  $.getJSON( url + lat + "&lon=" + long + appid, function(data) {
   $.getJSON( url + city2 + appid, function(data) {

  var city = data.name;
  var condition = data.weather[0].description;
  var temperature = data.main.temp;
  var temperature_c = (temperature - 273).toFixed(2); 
  var temperature_f = (((temperature - 273) * 9 / 5) + 32).toFixed(2); 

  $("#city").html(city);
  $("#temperature_f").html(temperature_f + " °F");
  $("#temperature_c").html(temperature_c + " °C");
  $("#condition").html(condition);

if (condition.indexOf("clear") !== -1) {
    $("body").css("background", "url(img/clear.jpg)");
      $("#temperature_c").css("color", "black");
      $("#temperature_f").css("color", "black");
      $("#condition").css("color", "black");      
      $("h1").css("color", "black");
      $("#copy").css("color", "black");
  } 
  else if (condition.indexOf("cloud") !== -1){
    $("body").css("background", "url(img/clouds.jpg)");
      $("#temperature_c").css("color", "black");
      $("#temperature_f").css("color", "black");
      $("#condition").css("color", "black");      
      $("h1").css("color", "black");
      $("#copy").css("color", "black");
  }
  else if (condition.indexOf("drizzle") !== -1){
    $("body").css("background", "url(img/drizzle.jpg)");
      $("#temperature_c").css("color", "black");
      $("#temperature_f").css("color", "black");
      $("#condition").css("color", "black");      
      $("h1").css("color", "black");
      $("#copy").css("color", "black");
  }
  else if (condition.indexOf("mist") !== -1){
    $("body").css("background", "url(img/mist.jpg)");
      $("#temperature_c").css("color", "black");
      $("#temperature_f").css("color", "black");
      $("#condition").css("color", "black");      
      $("h1").css("color", "black");
      $("#copy").css("color", "black");
  }
  else if (condition.indexOf("rain") !== -1){
    $("body").css("background", "url(img/rain.jpg)");
  }
  else if (condition.indexOf("snow") !== -1){
    $("body").css("background", "url(img/snow.jpg)");
  }
  else if (condition.indexOf("thunderstorm") !== -1){
    $("body").css("background", "url(img/thunderstorm.jpg)");
  }
  else {
    $("body").css("background", "url(img/default.jpg)");
  }


//  console.log (data);
    }); //end JSON weather API

  }); //end JSON location

  $(".change_unit").click(function() {
  if ($("#temperature_f").hasClass("hidden")) {
    $("#temperature_c").addClass("hidden");
    $("#temperature_f").removeClass("hidden");
    $(".change_unit").html("°F to °C");
  } else {
      $("#temperature_f").addClass("hidden");
    $("#temperature_c").removeClass("hidden");
    $(".change_unit").html("°C to °F");
  }
}); //end change unit click


}); //end ready

