



var button = document.querySelector('#submitbtn');

var temperatureValue;
var humidityValue;
var input = document.querySelector('#location');

// updated extracts location from user input 

function informationfunction() {

    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ae90054c5cfbcc338314940f67ed4e1e&units=metric')
    .then(response => response.json())
    .then(data => {
        // const User1 = new NewUser(Object.assign(User1Top),Object.assign(User1Bottom),Object.assign(User1Accessories),Object.assign(User1Shoes));
        // console.log(User1);
        temperatureValue = data['main']['temp'];
        humidityValue = data ['main']['humidity'];
        DescriptionValue = data['weather'][0]['description'];
        NameValue = data['name'];
        console.log("(fetch primary level)Temperature (ºC): " + temperatureValue);
        console.log("(fetch primary level))Description: " + DescriptionValue);
        console.log("(fetch primary level)Humidity (%): " + humidityValue); 
        console.log("(fetch primary level)Name: " + NameValue);
        currentWeather(temperatureValue,humidityValue);  
          
    }).catch(error  => {
    console.log(error);
})
    
    console.log("Test in fetch (secondary level)");
    
    
}

// Button: runs main fetch function. 

button.addEventListener('click', informationfunction);