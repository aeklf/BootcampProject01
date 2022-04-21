

var input = document.querySelector('#location');

var button = document.querySelector('#locationbtn');


function informationfunction() {

fetch ('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ae90054c5cfbcc338314940f67ed4e1e&units=metric')
.then(response => response.json())
.then(data => console.log(data));

}



button.addEventListener('click', informationfunction);