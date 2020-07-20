//jshint esversion:6

exports.getWeather = function(){
  const appKey = 'eeb34898ca8328e687adab23a180094e'
  const unit = "metric"
  const url = "https://api.openweathermap.org/data/2.5/weather?q=Retford&appid=" + appKey + "&units=" + unit;

  https.get(url, function(response) {
    console.log(response.statusCode);
    response.on("data", function(data) {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
return temp;
})});
