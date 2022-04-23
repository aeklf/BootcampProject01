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
        console.log("Console log: " + temperatureValue);
        console.log("Console log: " + humidityValue);   
          
    }).catch(error  => {
    console.log(error);
})

    console.log("test");
    testFun();  
    currentWeather(temperatureValue,(humidityValue/100));
}

button.addEventListener('click', informationfunction);

function testFun(){
    console.log(temperatureValue, (humidityValue/100));
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
        return this.jacket.option1;
    }
    assignJacket2(){
        currentWeather(16,0.2);
        console.log("Test");
        alert(this.jacket.option2);
        return this.jacket.option2;
    }
}

//Temp var for object as parameter testing
var User1Jackets = {option1:"hoodie", option2:"raincoat"};

const User1 = new User(Object.assign(User1Jackets),"cardigan","sunglasses");

//Logical structure for interpreting weather variable inputs

//Temp ranges: <6, 6-13, 13-20, 20-27, >27.
//Cloud ranges: <25%, 25-50%, 50-75%, >75%.

function currentWeather(temperatureValue,cloud){

    if(6 < temperatureValue && 13 >= temperatureValue && cloud <= 0.25){
        console.log("Scenario 1")
        return("Scenario 1")
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && cloud < 0.25){
        console.log("Scenario 2")
        return("Scenario 2") 
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && cloud < 0.25){
        console.log("Scenario 3")
        return("Scenario 3") 
    }

    else if(6 < temperatureValue && 13 >= temperatureValue && cloud >= 0.25 && cloud < 0.5){
        console.log("Scenario 4")
        return("Scenario 4") 
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && cloud >= 0.25 && cloud < 0.5){
        console.log("Scenario 5")
        return("Scenario 5") 
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && cloud >= 0.25 && cloud < 0.5){
        console.log("Scenario 6")
        return("Scenario 6") 
    }

    else if(6 < temperatureValue && 13 >= temperatureValue && cloud >= 0.5 && cloud > 0.75){
        console.log("Scenario 7")
        return("Scenario 7") 
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && cloud >= 0.5 && cloud > 0.75){
        console.log("Scenario 8")
        return("Scenario 8") 
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && cloud >= 0.5 && cloud > 0.75){
        console.log("Scenario 9")
        return("Scenario 9") 
    }
}
