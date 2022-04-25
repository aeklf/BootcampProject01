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
        currentWeather(temperatureValue,humidityValue);  
          
    }).catch(error  => {
    console.log(error);
})
    
    console.log("Test in fetch (secondary level)");
    testFun();  
    
}

button.addEventListener('click', informationfunction);

function testFun(){
    console.log("Test in nested function. T(ºC): " + temperatureValue + " Humidity(%): " + humidityValue);
    return temperatureValue, (humidityValue/100);
}


//Class creation to assign wardrobe as parameters and methods as functions for oufit assignment (template for user objects)

var topVar = document.querySelector(".main");
var topVarText = document.querySelector("#topText");

var image1 = new Image();
image1.src = "./Images/Hoodie_image.jpg"
var image2 = new Image();
image2.src = "./Images/sunglasses.png"
var image3 = new Image();
image3.src = "./Images/pants_image.png"

var image4 = new Image();
image4.src = "./Images/tshirt_image.png"
var image5 = new Image();
image5.src = "./Images/cap_image.png"
var image6 = new Image();
image6.src = "./Images/shorts_image.png"
class User {
    constructor(jacket,pants,glasses){
        this.jacket = jacket;
        this.pants = pants;
        this.glasses = glasses;
    }
    assignJacket1(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very cold and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.jacket.option1 + ", " + this.pants.option1 + " and " + this.glasses.option1);
        $('#topText').html(this.jacket.option1)
        $('#bottomText').html(this.pants.option1);
        $('#shoesText').html(this.glasses.option1);
        $(".outfit").append(image2);
        $(".outfit").append(image1);
        $(".outfit").append(image3);
    }
    assignJacket2(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + "30" + ", cloudiness (%): " + "8" + ".");
        $('#recomText').html("We recomend wearing: " + this.jacket.option2 + ", " + this.pants.option2 + " and " + this.glasses.option2);
        $('#topText').html(this.jacket.option2)
        $('#bottomText').html(this.pants.option2);
        $('#shoesText').html(this.glasses.option2);
        $(".outfit").append(image5);
        $(".outfit").append(image4);
        $(".outfit").append(image6);
    }
}

//Temp var for object as parameter testing
var User1Jackets = {option1:"hoodie", option2:"T-shirt"};
var User1Pants = {option1:"jeans", option2:"shorts"};
var User1Glasses = {option1:"sunglasses", option2:"cap"};

const User1 = new User(Object.assign(User1Jackets),Object.assign(User1Pants),Object.assign(User1Glasses));

var cwbutton = document.querySelector("#currentW");
var cw2button = document.querySelector("#currentW2");

cwbutton.addEventListener("click", currentWeather);
cw2button.addEventListener("click", currentWeatherTest2);

function currentWeatherTest2(temperatureValue,humidityValue){
    console.log("Test in weather test function")
    temperatureValue = 26;
    humidityValue = 0.1;

    if(20 < temperatureValue && 27 >= temperatureValue && humidityValue < 0.25){
        console.log("test WF2");
        User1.assignJacket2();
    }
    else {
        console.log("else WF2");
        User1.assignJacket2();
    }
}

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
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue); 
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue < 0.25){
        console.log("Scenario 3")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);

    }

    else if(6 < temperatureValue && 13 >= temperatureValue && humidityValue >= 0.25 && humidityValue < 0.5){
        console.log("Scenario 4")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
 
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue >= 0.25 && humidityValue < 0.5){
        console.log("Scenario 5")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);

    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue >= 0.25 && humidityValue < 0.5){
        console.log("Scenario 6")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);

    }

    else if(6 < temperatureValue && 13 >= temperatureValue && humidityValue >= 0.5 && humidityValue > 0.75){
        console.log("Scenario 7")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignJacket2();
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue >= 0.5 && humidityValue > 0.75){
        console.log("Scenario 8")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
 
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue >= 0.5 && humidityValue > 0.75){
        console.log("Scenario 9")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);

    }
    else {
        console.log("Scenario 10,11 or 12")
        User1.assignJacket1();
    }
}

