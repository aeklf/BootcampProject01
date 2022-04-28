//Test script for back end logic//

var test = JSON.parse(localStorage.getItem('User1'));

var loc = test.name;

console.log(test);


//Class creation to assign wardrobe as parameters and methods as functions for oufit assignment (template for user objects)
class NewUser {
    constructor(accessories, bottom, email, first, last,  location, shoes, top) {

        this.accessories = accessories;
        this.bottom = bottom;
        this.email = email;
        this.first = first;
        this.last = last;
        this.location = location;
        this.shoes = shoes;
        this.top = top;

    }//T1,H1 (cold,sunny)
    assignOutfit1(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very cold and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.cold + ", " + this.top.cold + " and " + this.bottom.cold);
        $('#topText').html(this.top.cold);
        $('#bottomText').html(this.bottom.cold);
        $('#shoesText').html(this.shoes.cold);
        $('#accssText').html(this.accessories.cold);

    }//T1,H2 (cold,normal)
    assignOutfit4(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.hot + ", " + this.top.hot + " and " + this.bottom.hot);
        $('#topText').html(this.top.cold);
        $('#bottomText').html(this.bottom.cold);
        $('#shoesText').html(this.shoes.cold);
        $('#accssText').html(this.accessories.cold);

    }//T1,H3 (cold,rain)
    assignOutfit7(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.hot + ", " + this.top.hot + " and " + this.bottom.hot);
        $('#topText').html(this.top.cold);
        $('#bottomText').html(this.bottom.cold);
        $('#shoesText').html(this.shoes.cold);
        $('#accssText').html(this.accessories.cold);

    }//T2,H1 (normal,sunny)
    assignOutfit2(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.hot + ", " + this.top.hot + " and " + this.bottom.hot);
        $('#topText').html(this.top.cold);
        $('#bottomText').html(this.bottom.cold);
        $('#shoesText').html(this.shoes.cold);
        $('#accssText').html(this.accessories.hot);
   
    }//T2,H2 (normal,normal)
    assignOutfit5(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.hot + ", " + this.top.hot + " and " + this.bottom.hot);
        $('#topText').html(this.top.cold);
        $('#bottomText').html(this.bottom.cold);
        $('#shoesText').html(this.shoes.cold);
        $('#accssText').html(this.accessories.hot);
 
    }//T2,H3 (normal,rain)
    assignOutfit8(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.hot + ", " + this.top.hot + " and " + this.bottom.hot);
        $('#topText').html(this.top.cold);
        $('#bottomText').html(this.bottom.cold);
        $('#shoesText').html(this.shoes.cold);
        $('#accssText').html(this.accessories.hot);

    }//T3,H1 (hot,sunny)
    assignOutfit3(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.hot + ", " + this.top.hot + " and " + this.bottom.hot);
        $('#topText').html(this.top.hot);
        $('#bottomText').html(this.bottom.hot);
        $('#shoesText').html(this.shoes.hot);
        $('#accssText').html(this.accessories.hot);

    }//T3,H2 (hot,normal)
    assignOutfit6(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.hot + ", " + this.top.hot + " and " + this.bottom.hot);
        $('#topText').html(this.top.hot);
        $('#bottomText').html(this.bottom.hot);
        $('#shoesText').html(this.shoes.hot);
        $('#accssText').html(this.accessories.hot);

    }//T3,H3 (hot,rain)
    assignOutfit9(){
        $('.outfit').empty();
        $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#recomText').html("We recomend wearing: " + this.accessories.hot + ", " + this.top.hot + " and " + this.bottom.hot);
        $('#topText').html(this.top.hot);
        $('#bottomText').html(this.bottom.cold);
        $('#shoesText').html(this.shoes.cold);
        $('#accssText').html(this.accessories.hot);

    }//T4,H4 (Undefined)
    assignOutfit10(){
        $('.outfit').empty();
        $('#topText').html(this.top.hot);
        $('#bottomText').html(this.bottom.cold);
        $('#shoesText').html(this.shoes.hot);
        $('#accssText').html(this.accessories.cold);
    }
}

// Objects with names(according to scenarios(ie. option 1.1 predetermined for rain like conditions)), and values according to user input (wardrobe).

//(Create) Extract variables from local storage (ie. the selection for cold weather top = CurrWeathPick)

var User1Accessories = {cold:"sunAccessories", hot:"cap"};
//var User1Top = {cold:CurrWeathPick, hot:"T-shirt"};
var User1Bottom = {cold:"jeans", hot:"shorts"};
var User1Shoes = {cold:"sneakers", hot:"sandals"};

// Test creation for "User" instance.
function createUser(){
    var User1Top = {cold:"hoodie", hot:"T-shirt"};
    var User1Bottom = {cold:"jeans", hot:"shorts"};
    var User1Accessories = {cold:"sunAccessories", hot:"cap"};
    var User1Shoes = {cold:"sneakers", hot:"sandals"};
    const User1 = new NewUser(Object.assign(User1Top),Object.assign(User1Bottom),Object.assign(User1Accessories),Object.assign(User1Shoes));
}
// API (test) fetch function:  returns variables to be used in outfit assignment function.

var button = document.querySelector('#locationbtn');
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
    returnFun();  
    
}

// Button: runs main fetch function. 

button.addEventListener('click', informationfunction);

// Function to return humidity in 0-1 value.

function returnFun(){
    console.log("Test in nested function. T(ºC): " + temperatureValue + " Humidity(%): " + humidityValue);
    return temperatureValue, (humidityValue/100);
}

//Function for interpreting variables from API fetch, used for assignment of wardrobe options.

//Temperature ranges: <6, 6-13, 13-20, 20-27, >27.
//Humidity ranges: <25%, 25-50%, 50-75%, >75%.

function currentWeather(temperatureValue,humidityValue){

    console.log("Test in weather function")

    if(6 < temperatureValue && 13 >= temperatureValue && humidityValue < 33){
        console.log("Scenario 1")
        //User1.assignOutfit1();
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue < 33){
        console.log("Scenario 2")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue); 
        // User1.assignOutfit4();
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue < 33){
        console.log("Scenario 3")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit7();
    }

    else if(6 < temperatureValue && 13 >= temperatureValue && humidityValue >= 33 && humidityValue < 66){
        console.log("Scenario 4")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit2();
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue >= 33 && humidityValue < 66){
        console.log("Scenario 5")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit5();
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue >= 33 && humidityValue < 66){
        console.log("Scenario 6")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit8();
    }

    else if(6 < temperatureValue && 13 >= temperatureValue && humidityValue >= 66){
        console.log("Scenario 7")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit3();
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue >= 66){
        console.log("Scenario 8")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit6();
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue >= 66){
        console.log("Scenario 9")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit9();
    }
    else {
        console.log("Scenario 10")
        console.log(temperatureValue);
        console.log(humidityValue);
        //User1.assignOutfit10();
    }
}

