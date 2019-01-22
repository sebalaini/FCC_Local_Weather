$(document).ready(function(){

  // LOCATION request
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
    var lat = position.coords.latitude;
    var long = position.coords.longitude;

    var url = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=';
    var appid = '&APPID=a4b3eb234adddc9781ee965ab3aba708';

    // AJAX request weather API
    $.ajax({
      url: url + lat + '&lon=' + long + appid
    })
    .always(function () {
      $('.loading').show();
    })
    .done(function (data) {

      var city = data.name;
      var country = data.sys.country;
      var condition = data.weather[0].description;
      var wind = data.wind.speed;
      var humidity = data.main.humidity;
      var temperature = data.main.temp;
      var temperature_c = (temperature - 273).toFixed(2);
      var temperature_f = (((temperature - 273) * 9 / 5) + 32).toFixed(2);

      $('#city').html(city + '. ' + country);
      $('.temperature_f').html(temperature_f);
      $('.temperature_c').html(temperature_c);
      $('#condition').html(condition);
      $('#wind').html('Wind speed: ' + wind + ' M/s');
      $('#humidity').html('humidity: ' + humidity + '%');

      if (condition.indexOf('clear') !== -1) {
        $('body').css('background', 'url(img/clear.jpg)');
        $('h1').css('color', 'black');
        $('#copy').css('color', 'black');
      }
      else if (condition.indexOf('cloud') !== -1){
        $('body').css('background', 'url(img/clouds.jpg)');
        $('h1').css('color', 'black');
        $('#copy').css('color', 'black');
      }
      else if (condition.indexOf('drizzle') !== -1){
        $('body').css('background', 'url(img/drizzle.jpg)');
        $('h1').css('color', 'black');
        $('#copy').css('color', 'black');
      }
      else if (condition.indexOf('mist') !== -1){
        $('body').css('background', 'url(img/mist.jpg)');
        $('h1').css('color', 'black');
        $('#copy').css('color', 'black');
      }
      else if (condition.indexOf('rain') !== -1){
        $('body').css('background', 'url(img/rain.jpg)');
      }
      else if (condition.indexOf('snow') !== -1){
        $('body').css('background', 'url(img/snow.jpg)');
      }
      else if (condition.indexOf('thunderstorm') !== -1){
        $('body').css('background', 'url(img/thunderstorm.jpg)');
      }
      else {
        $('body').css('background', 'url(img/default.jpg)');
      }
      $('.loading').hide();
    })

    $('button.change').click(function() {
    if ($('#unitC').hasClass('hidden')) {
      $('.temperature_c').removeClass('hidden');
      $('.temperature_f').addClass('hidden');
      $('#unitF').addClass('hidden');
      $('#unitC').removeClass('hidden');
    } else {
        $('.temperature_c').addClass('hidden');
        $('.temperature_f').removeClass('hidden');
        $('#unitF').removeClass('hidden');
        $('#unitC').addClass('hidden');
    }
  }); //end change unit click

    });
  } // end if geolocation
}); // end ready
