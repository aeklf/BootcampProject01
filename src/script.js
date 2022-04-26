

var input = document.querySelector('#location');

var button = document.querySelector('#locationbtn');


function informationfunction() {

fetch ('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ae90054c5cfbcc338314940f67ed4e1e&units=metric')
.then(response => response.json())
.then(data => console.log(data))
.then(
    data => {
    var temperatureValue = data['main']['temp'];
    var humidityValue = data ['main']['humidity'];

   console.log(temperatureValue)
   console.log(humidityValue)

})

}



button.addEventListener('click', informationfunction);