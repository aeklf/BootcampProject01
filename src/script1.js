//Test script for back end logic//

var UserExt = JSON.parse(localStorage.getItem('User1'));
///////////////////////////////////////////////////////////////////////////////////////////
var lsachot = UserExt.accessories1;

var lsbothot = UserExt.bottom1;
var lsbothot2 = UserExt.bottom2;

var lsaccold = UserExt.coldacc1;
var lsaccold2 = UserExt.coldacc2;

var lsbotcol = UserExt.coldbottom1;
var lsbotcol2 = UserExt.coldbottom2;

var lsshoecol = UserExt.coldshoes1;
var lsshoecol2 = UserExt.coldshoes2;

var lstopcol = UserExt.coldtop1;
var lstopcol2 = UserExt.coldtop2;

var lsshoe1 = UserExt.shoes1;
var lsshoe2 = UserExt.shoes2;

var lstophot = UserExt.top1;
var lstophot2 = UserExt.top2;

var userloc = UserExt.location;
var userName = UserExt.name;

console.log(lsachot);
console.log(lsbothot);

console.log('1')

console.log(lsaccold);
console.log(lsbotcol);

console.log('2')

console.log(lsshoecol);
console.log(lstopcol);

console.log('3')

console.log(lsshoe1);
console.log(lstophot);

console.log('4')

console.log(lsshoe2);
console.log(lstophot2);

console.log('5')

console.log(lsbothot2);
console.log(lsbotcol2);

console.log('6')

console.log(lsshoecol2);
console.log(lstopcol2);

console.log('7')

console.log(userloc);
console.log(userName);

console.log('8')

var User1;

//Class creation to assign wardrobe as parameters and methods as functions for oufit assignment (template for user objects)
class NewUser {
    constructor(accessories, bottom, shoes, top, username, location) {

        this.accessories = accessories;
        this.bottom = bottom;
        this.username = username;
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
        console.log(this.top.cold)
        console.log(this.bottom.cold)
        console.log(this.shoes.cold)
        console.log(this.accessories.cold)
        

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
        // $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#userText').html("Hey " + this.username + ". " + "It is pretty cold right now, and it looks like it might rain, you should try wearing: ")
        $('#topText').html("A nice warm " + this.top.cold + ",");
        $('#bottomText').html("Some comfy " + this.bottom.cold + ",");
        $('#shoesText').html("A good pair of " + this.shoes.cold + ",");
        $('#accssText').html("and maybe a " + this.accessories.cold + ".");

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
        $('#topText').html("A comfortable " + this.top.hot + ",");
        $('#bottomText').html("some reliable " + this.bottom.cold + ",");
        $('#shoesText').html("a pair of sturdy " + this.shoes.cold + ",");
        $('#accssText').html("and of course " + this.accessories.hot + ".");
        $('#userText').html("Sorry " + this.username + " I'm not sure about the weather right now, just go with: ")
        console.log(this.top.cold)
        console.log(this.bottom.cold)
        console.log(this.shoes.cold)
        console.log(this.accessories.cold)
    }
}

// Objects with names(according to scenarios(ie. option 1.1 predetermined for rain like conditions)), and values according to user input (wardrobe).

//(Create) Extract variables from local storage (ie. the selection for cold weather top = CurrWeathPick)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var User1Top;
    var User1Bottom;
    var User1Accessories;
    var User1Shoes;

// Test creation for "User" instance. accessories, bottom, shoes, top, username, location
function createUser(){
    var User1Accessories = {cold:lsaccold2, hot:lsachot};
    var User1Top = {cold:lstopcol2, hot:lstophot2};
    var User1Bottom = {cold:lsbotcol2, hot:lsbothot2};
    var User1Shoes = {cold:lsshoecol2, hot:lsshoe2}; 
    User1 = new NewUser(Object.assign(User1Accessories),Object.assign(User1Bottom),Object.assign(User1Shoes),Object.assign(User1Top),userName,location);
}
// API (test) fetch function:  returns variables to be used in outfit assignment function.

var button = document.querySelector('#locationbtn');
var temperatureValue;
var humidityValue;
var input = document.querySelector('#location');

// updated extracts location from user input 

function informationfunction() {

    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+300+'&appid=ae90054c5cfbcc338314940f67ed4e1e&units=metric')
    .then(response => response.json())
    .then(data => {
        
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

//button.addEventListener('click', informationfunction);

// Function to return humidity in 0-1 value.

function returnFun(){
    console.log("Test in nested function. T(ºC): " + temperatureValue + " Humidity(%): " + humidityValue);
    return temperatureValue, (humidityValue/100);
}

//Function for interpreting variables from API fetch, used for assignment of wardrobe options.

//Temperature ranges: <6, 6-13, 13-20, 20-27, >27.
//Humidity ranges: <25%, 25-50%, 50-75%, >75%.

function currentWeather(temperatureValue,humidityValue){

    console.log("Test in weather function");
    createUser();

    if(6 < temperatureValue && 13 >= temperatureValue && humidityValue < 33){
        console.log("Scenario 1")
        User1.assignOutfit1();
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue < 33){
        console.log("Scenario 2")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue); 
        // User1.assignOutfit4();
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue < 33){
        console.log("Scenario 3")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        User1.assignOutfit3();
    }

    else if(6 < temperatureValue && 13 >= temperatureValue && humidityValue >= 33 && humidityValue < 66){
        console.log("Scenario 4")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit2();
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue >= 33 && humidityValue < 66){
        console.log("Scenario 5")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        $('#topText').html(User1.top.cold);
        User1.assignOutfit5();
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue >= 33 && humidityValue < 66){
        console.log("Scenario 6")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        // User1.assignOutfit8();
    }

    else if(6 < temperatureValue && 13 >= temperatureValue && humidityValue >= 66){
        console.log("Scenario 7")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        console.log(User1);
        User1.assignOutfit7();
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
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + "humidity (%): " + humidityValue);
        console.log("Scenario 10");
        console.log(temperatureValue);
        console.log(humidityValue);
        User1.assignOutfit10();
    }
}

var createButton = document.querySelector("#generateOutfit")

createButton.addEventListener('click',informationfunction);

var createButton2 = document.querySelector("#generateHotOutfit")

createButton2.addEventListener('click',function(){
    temperatureValue = 25;
    humidityValue = 5;
    currentWeather();
});