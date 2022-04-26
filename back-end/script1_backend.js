//Test script for back end logic//

// API (test) fetch function:  returns variables to be used in outfit assignment function.

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
        currentWeather(temperatureValue,humidityValue);  
          
    }).catch(error  => {
    console.log(error);
})
    
    console.log("Test in fetch (secondary level)");
    returnFun();  
    
}

// Button: runs main fetch function. 

button.addEventListener('click', informationfunction);

// Function to return humidity in 0-1 value.

function returnFun(){
    console.log("Test in nested function. T(ºC): " + temperatureValue + " Humidity(%): " + humidityValue);
    return temperatureValue, (humidityValue/100);
}


//Class creation to assign wardrobe as parameters and methods as functions for oufit assignment (template for user objects)
class NewUser {
    constructor(accessories,top,bottom,shoes,first,last,location){
        this.accessories = accessories;
        this.top = top;
        this.bottom = bottom;
    }
    assignOutfit1(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very cold and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.option1 + ", " + this.top.option1 + " and " + this.bottom.option1);
        $('#topText').html(this.accessories.option1)
        $('#bottomText').html(this.top.option1);
        $('#shoesText').html(this.bottom.option1);
    }
    assignOutfit2(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.option2 + ", " + this.top.option2 + " and " + this.bottom.option2);
        $('#topText').html(this.accessories.option2)
        $('#bottomText').html(this.top.option2);
        $('#shoesText').html(this.bottom.option2);

    }
    assignOutfit3(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.option2 + ", " + this.top.option2 + " and " + this.bottom.option2);
        $('#topText').html(this.accessories.option2)
        $('#bottomText').html(this.top.option2);
        $('#shoesText').html(this.bottom.option2);

    }
    assignOutfit4(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.option2 + ", " + this.top.option2 + " and " + this.bottom.option2);
        $('#topText').html(this.accessories.option2)
        $('#bottomText').html(this.top.option2);
        $('#shoesText').html(this.bottom.option2);
   
    }
    assignOutfit5(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.option2 + ", " + this.top.option2 + " and " + this.bottom.option2);
        $('#topText').html(this.accessories.option2)
        $('#bottomText').html(this.top.option2);
        $('#shoesText').html(this.bottom.option2);
 
    }
    assignOutfit6(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.option2 + ", " + this.top.option2 + " and " + this.bottom.option2);
        $('#topText').html(this.accessories.option2)
        $('#bottomText').html(this.top.option2);
        $('#shoesText').html(this.bottom.option2);

    }
    assignOutfit7(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.option2 + ", " + this.top.option2 + " and " + this.bottom.option2);
        $('#topText').html(this.accessories.option2)
        $('#bottomText').html(this.top.option2);
        $('#shoesText').html(this.bottom.option2);

    }
    assignOutfit8(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.option2 + ", " + this.top.option2 + " and " + this.bottom.option2);
        $('#topText').html(this.accessories.option2)
        $('#bottomText').html(this.top.option2);
        $('#shoesText').html(this.bottom.option2);
    }
    assignOutfit9(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.option2 + ", " + this.top.option2 + " and " + this.bottom.option2);
        $('#topText').html(this.accessories.option2)
        $('#bottomText').html(this.top.option2);
        $('#shoesText').html(this.bottom.option2);

    }
    assignOutfit10(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.option2 + ", " + this.top.option2 + " and " + this.bottom.option2);
        $('#topText').html(this.accessories.option2)
        $('#bottomText').html(this.top.option2);
        $('#shoesText').html(this.bottom.option2);

    }
}

// Objects with names(according to scenarios(ie. option 1.1 predetermined for rain like conditions)), and values according to user input (wardrobe).

var User1accessoriess = {option1:"hoodie", option2:"T-shirt"};
var User1top = {option1:"jeans", option2:"shorts"};
var User1bottom = {option1:"sunbottom", option2:"cap"};
var User1shoe = {};

// Test creation for "User" instance.

const User1 = new NewUser (Object.assign(User1accessoriess),Object.assign(User1top),Object.assign(User1bottom));

localStorage.setItem("User1Info",User1);

//Function for interpreting variables from API fetch, used for assignment of wardrobe options.

//Temperature ranges: <6, 6-13, 13-20, 20-27, >27.
//Humidity ranges: <25%, 25-50%, 50-75%, >75%.

function currentWeather(temperatureValue,humidityValue){

    console.log("Test in weather function")

    if(6 < temperatureValue && 13 >= temperatureValue && humidityValue <= 0.25){
        console.log("Scenario 1")
        User1.assignOutfit1();
        // User1.assignOutfit1();
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue < 0.25){
        console.log("Scenario 2")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue); 
        // User1.assignOutfit2();
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue < 0.25){
        console.log("Scenario 3")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit3();
    }

    else if(6 < temperatureValue && 13 >= temperatureValue && humidityValue >= 0.25 && humidityValue < 0.5){
        console.log("Scenario 4")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit4();
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue >= 0.25 && humidityValue < 0.5){
        console.log("Scenario 5")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit5();
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue >= 0.25 && humidityValue < 0.5){
        console.log("Scenario 6")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit6();
    }

    else if(6 < temperatureValue && 13 >= temperatureValue && humidityValue >= 0.5 && humidityValue > 0.75){
        console.log("Scenario 7")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit7();
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue >= 0.5 && humidityValue > 0.75){
        console.log("Scenario 8")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit8();
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue >= 0.5 && humidityValue > 0.75){
        console.log("Scenario 9")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit9();
    }
    else {
        console.log("Scenario 10,11 or 12")
        User1.assignOutfit10();
        // User1.assignOutfit10();
    }
}

