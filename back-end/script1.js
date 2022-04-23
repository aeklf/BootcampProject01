//Test script for back end logic//

var button = document.querySelector('#locationbtn');
var temperatureValue;
var humidityValue;

function informationfunction() {

    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+300+'&appid=ae90054c5cfbcc338314940f67ed4e1e&units=metric')
    .then(response => response.json())
    .then(data => {
        temperatureValue = data['main']['temp'];
        humidityValue = data ['main']['humidity'];
        console.log("(fetch primary level)Temperature (ºC): " + temperatureValue);
        console.log("(fetch primary level)Humidity (%): " + humidityValue);   
          
    }).catch(error  => {
    console.log(error);
})
    
    console.log("Test in fetch (secondary level)");
    testFun();  
    currentWeather(temperatureValue,humidityValue);
}

button.addEventListener('click', informationfunction);

function testFun(){
    console.log("Test in nested function. T(ºC): " + temperatureValue + " Humidity(%): " + humidityValue);
    return temperatureValue, (humidityValue/100);
}

//Class creation to assign wardrobe as parameters and methods as functions for oufit assignment (template for user objects)

class User {
    constructor(jacket,sweater,glasses){
        this.jacket = jacket;
        this.sweater = sweater;
        this.glasses = glasses;
    }
    assignJacket1(){
        console.log("It is currently very cold and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        console.log("We recomend wearing: " + this.jacket.option1 + ", " + this.sweater + " and " + this.glasses)
    }
    assignJacket2(){
        console.log("Method test");
        console.log(this.jacket.option2);
        return this.jacket.option2;
    }
}

//Temp var for object as parameter testing
var User1Jackets = {option1:"hoodie", option2:"raincoat"};

const User1 = new User(Object.assign(User1Jackets),"sweater","sunglasses");

//Logical structure for interpreting weather variable inputs

//Temp ranges: <6, 6-13, 13-20, 20-27, >27.
//Humidity ranges: <25%, 25-50%, 50-75%, >75%.

function currentWeather(temperatureValue,humidityValue){
    console.log("Test in weather function")
   

    if(6 < temperatureValue && 13 >= temperatureValue && humidityValue <= 0.25){
        console.log("Scenario 1")
        User1.assignJacket1();
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue < 0.25){
        console.log("Scenario 2")
        return("Scenario 2") 
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue < 0.25){
        console.log("Scenario 3")
        return("Scenario 3") 
    }

    else if(6 < temperatureValue && 13 >= temperatureValue && humidityValue >= 0.25 && humidityValue < 0.5){
        console.log("Scenario 4")
        return("Scenario 4") 
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue >= 0.25 && humidityValue < 0.5){
        console.log("Scenario 5")
        return("Scenario 5") 
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue >= 0.25 && humidityValue < 0.5){
        console.log("Scenario 6")
        return("Scenario 6") 
    }

    else if(6 < temperatureValue && 13 >= temperatureValue && humidityValue >= 0.5 && humidityValue > 0.75){
        console.log("Scenario 7")
        User1.assignJacket2();
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue >= 0.5 && humidityValue > 0.75){
        console.log("Scenario 8")
        return("Scenario 8") 
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue >= 0.5 && humidityValue > 0.75){
        console.log("Scenario 9")
        return("Scenario 9") 
    }
    else {
        console.log("Scenario 10,11 or 12")
        return("Scenario 9") 
    }
}
