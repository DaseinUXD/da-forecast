var apiKey = '0ab072376462dd056d5a7f08c9c344a6';
var url = 'https://api.darksky.net/forecast/';
var latitude = 32.883421;
var longitude =  -97.274044;
var data;

function getForecast() {
    $.getJSON(url + apiKey + '/' + latitude + ',' + longitude + '?callback=?', function(data) {
        
    });
}
