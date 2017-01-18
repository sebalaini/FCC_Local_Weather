$(document).ready(function(){
  
  var lat;
  var long;
  
  $.getJSON("http://ip-api.com/json",function(data2){
    lat=data2.lat;
    long=data2.lon;
    
    //Here we added lat='+lat+'&long='+long+' instead of id=2172797
  var api = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=d9f5ce4e90eb255a40b5c45b9e6f2ce3';
  
  $.getJSON(api, function(data){
    var fTemp;
    var cTemp;
    var kTemp;
    
    var tempSwap=false;
    
    var weatherType= data.weather[0].description; //JSON call for open weather api
    
    kTemp = data.main.temp;
    
    var windSpeed= data.wind.speed;
    var city = data.name;
    
    
    fTemp = (kTemp*(9/5)-459.67).toFixed(1); //change kelvin to farenheit, toFixed to change decimal places to 1.
    
    //I will display Celcius using hex code &#8451;, farenheit &#8457;
    
    cTemp = (kTemp - 273).toFixed(1); //this will take kelvin and convert it to celcius
    
    $("#city").html(city);
    $("#condition").html(weatherType); 
    $("#temperature").html(fTemp + " &#8457;");
    $("#fTemp").click(function(){
      
      if(tempSwap===false){
        $("#fTemp").html(cTemp + " &#8451; "); //if tempSwap is false, output celcius temp
        
       tempSwap=true;
      }
      else {
       $("#fTemp").html(fTemp + " &#8457; "); //this is gonna target ftemp on the next click 
          tempSwap=false; //to keep it switching back and forth
      }
    });
    
    });
    
  });
  
});