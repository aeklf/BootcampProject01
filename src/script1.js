//Test script for back end logic//

var UserExt = JSON.parse(localStorage.getItem('User1'));
///////////////////////////////////////////////////////////////////////////////////////////
// if (UserExt.accessories1 == )
console.log(UserExt.accessories1);
console.log(UserExt.accessories2);

var lsachot;

    if(UserExt.accessories1 === "Sunglasses"){
        console.log("Assign acc hot sung");
        lsachot = "Sunglasses";
        console.log(lsachot);
    }
    else{
        console.log("Assign acc hot hat");
        lsachot = "Hat";
        console.log(lsachot);
    }

    var User1Accessories = {cold:lsaccold2, hot:"lsachot"};
    var User1Top = {cold:lstopcold2, hot:lstophot2};
    var User1Bottom = {cold:lsbotcold2, hot:lsbothot2};
    var User1Shoes = {cold:lsshoecold2, hot:lsshoe2};

var lsachot = UserExt.accessories1;
var lsachot2 = UserExt.accessories2;

var lsbothot = UserExt.bottom1;
var lsbothot2 = UserExt.bottom2;

var lsaccold = UserExt.coldacc1;
var lsaccold2 = UserExt.coldacc2;

var lsbotcold = UserExt.coldbottom1;
var lsbotcold2 = UserExt.coldbottom2;

var lsshoecold = UserExt.coldshoes1;
var lsshoecold2 = UserExt.coldshoes2;

var lstopcold = UserExt.coldtop1;
var lstopcold2 = UserExt.coldtop2;

var lsshoe = UserExt.shoes1;
var lsshoe2 = UserExt.shoes2;

var lstophot = UserExt.top1;
var lstophot2 = UserExt.top2;

var userName = UserExt.name;

console.log(lsachot);
console.log(lsbothot);

console.log('1')

console.log(lsaccold);
console.log(lsbotcold);

console.log('2')

console.log(lsshoecold);
console.log(lstopcold);

console.log('3')

console.log(lsshoe);
console.log(lstophot);

console.log('4')

console.log(lsshoe2);
console.log(lstophot2);

console.log('5')

console.log(lsbothot2);
console.log(lsbotcold2);

console.log('6')

console.log(lsshoecold2);
console.log(lstopcold2);

console.log('7')

console.log(userName);

console.log('8')

var User1;

   

//////////creating image variables for each item of clothing
var Sunglassesimage = document.createElement("img");
Sunglassesimage.src = "./assets/images/sunglasses.png";

var Hatimage = document.createElement("img");
Hatimage.src = "./assets/images/hat.png";

var tshirtimage = document.createElement("img");
tshirtimage.src = "./assets/images/tShirt.png";

var tanktopimage = document.createElement("img");
tanktopimage.src = "./assets/images/tanktop.png";

var gymshortsimage = document.createElement("img");
gymshortsimage.src = "./assets/images/gymshorts.png";

var shortsimage = document.createElement("img");
shortsimage.src = "./assets/images/shorts.png";

var crocsimage = document.createElement("img");
crocsimage.src = "./assets/images/crocs.png";

var sandalsimage = document.createElement("img");
sandalsimage.src = "./assets/images/sandals.png";

var earmuffsimage = document.createElement("img");
earmuffsimage.src = "./assets/images/earmuffs.png";

var beanieimage = document.createElement("img");
beanieimage.src = "./assets/images/beanie.png";

var raincoatimage = document.createElement("img");
raincoatimage.src = "./assets/images/raincoat.png";

var jacketimage = document.createElement("img");
jacketimage.src = "./assets/images/jacket.png";

var jeansimage = document.createElement("img");
jeansimage.src = "./assets/images/jeans.png";

var joggersimage = document.createElement("img");
joggersimage.src = "./assets/images/joggers.png";

var sneakersimage = document.createElement("img");
sneakersimage.src = "./assets/images/sneakers.png";

var bootsimage = document.createElement("img");
bootsimage.src = "./assets/images/boots.png";
//Class creation to assign wardrobe as parameters and methods as functions for oufit assignment (template for user objects)
class NewUser {
    constructor(accessories, bottom, shoes, top, username) {

        this.accessories = accessories;
        this.bottom = bottom;
        this.username = username;
        this.location = location;
        this.shoes = shoes;
        this.top = top;

        // this.accessories2 = accessories2;
        // this.bottom2 = bottom2;
        // this.shoes2 = shoes2;
        // this.top2 = top2;



    }//T1,H1 (cold,sunny)
    assignOutfit1(){

        $('.contentLP1').empty();
        $('.contentLP2').empty();
        $('.contentLP3').empty();
        $('.contentLP4').empty();
        // $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#userText').html("Hey " + this.username + ". " + "It is pretty cold right now, but its also pretty sunny you should try wearing: ")
        $('#topText').html("A nice warm " + this.top.cold + ",");
        $('#bottomText').html("Some comfy " + this.bottom.cold + ",");
        $('#shoesText').html("A good pair of " + this.shoes.cold + ",");
        $('#accssText').html("and maybe a " + this.accessories.hot + ".");

        document.querySelector(".contentLP1").appendChild(beanieimage);
        document.querySelector(".contentLP2").appendChild(jacketimage);
        document.querySelector(".contentLP3").appendChild(joggersimage);
        document.querySelector(".contentLP4").appendChild(bootsimage);
        
       
        
    }//T1,H2 (cold,normal)
    assignOutfit4(){
        $('.contentLP1').empty();
        $('.contentLP2').empty();
        $('.contentLP3').empty();
        $('.contentLP4').empty();
        // $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#userText').html("Hello " + this.username + ". " + "It is pretty cold  and a little cloudy, you should keep it safe with: ")
        $('#topText').html("A cool " + this.top.cold + ",");
        $('#bottomText').html("Some nice " + this.bottom.cold + ",");
        $('#shoesText').html("A good pair of " + this.shoes.cold + ",");
        $('#accssText').html("and maybe a " + this.accessories.cold + ".");
        document.querySelector(".contentLP1").appendChild(beanieimage);
        document.querySelector(".contentLP2").appendChild(jacketimage);
        document.querySelector(".contentLP3").appendChild(joggersimage);
        document.querySelector(".contentLP4").appendChild(bootsimage);

    }//T1,H3 (cold,rain)
    assignOutfit7(){
        $('.contentLP1').empty();
        $('.contentLP2').empty();
        $('.contentLP3').empty();
        $('.contentLP4').empty();
        // $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#userText').html("Hey " + this.username + ". " + "It is pretty cold right now, and it looks like it might rain, you should go with: ")
        $('#topText').html("A nice warm " + this.top.cold + ",");
        $('#bottomText').html("Some comfy " + this.bottom.cold + ",");
        $('#shoesText').html("A good pair of " + this.shoes.cold + ",");
        $('#accssText').html("and maybe a " + this.accessories.cold + ".");

        document.querySelector(".contentLP1").appendChild(earmuffsimage);
        document.querySelector(".contentLP2").appendChild(jacketimage);
        document.querySelector(".contentLP3").appendChild(joggersimage);
        document.querySelector(".contentLP4").appendChild(bootsimage);


    }//T2,H1 (normal,sunny)
    assignOutfit2(){
        $('.contentLP1').empty();
        $('.contentLP2').empty();
        $('.contentLP3').empty();
        $('.contentLP4').empty();
        // $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#userText').html("Good to see you " + this.username + ". " + "it's warm but not too bad, though its pretty sunny, go with some: ")
        $('#topText').html("Chill " + this.top.hot + ",");
        $('#bottomText').html("Some cool " + this.bottom.cold + ",");
        $('#shoesText').html("A good pair of " + this.shoes.cold + ",");
        $('#accssText').html("and a " + this.accessories.hot + ".");
        document.querySelector(".contentLP1").appendChild(Sunglassesimage);
        document.querySelector(".contentLP2").appendChild(jacketimage);
        document.querySelector(".contentLP3").appendChild(jeansimage);
        document.querySelector(".contentLP4").appendChild(bootsimage);

    }//T2,H2 (normal,normal)
    assignOutfit5(){
        $('.contentLP1').empty();
        $('.contentLP2').empty();
        $('.contentLP3').empty();
        $('.contentLP4').empty();
        // $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#userText').html("Good to see you " + this.username + ". " + "it's warm but not too bad, kinda cloudy, keep it safe with: ")
        $('#topText').html("Chill " + this.top.hot + ",");
        $('#bottomText').html("Some cool " + this.bottom.cold + ",");
        $('#shoesText').html("A good pair of " + this.shoes.cold + ",");
        $('#accssText').html("and a " + this.accessories.cold + ".");
        document.querySelector(".contentLP1").appendChild(beanieimage);
        document.querySelector(".contentLP2").appendChild(bootsimage);
        document.querySelector(".contentLP3").appendChild(jeansimage);
        document.querySelector(".contentLP4").appendChild(sneakersimage);
 
    }//T2,H3 (normal,rain)
    assignOutfit8(){
        $('.contentLP1').empty();
        $('.contentLP2').empty();
        $('.contentLP3').empty();
        $('.contentLP4').empty();
        // $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#userText').html("hey " + this.username + ". " + "it's warm but not too bad, it looks like it might rain, keep it safe with: ")
        $('#topText').html("A good old " + this.top.cold + ",");
        $('#bottomText').html("Some " + this.bottom.cold + ",");
        $('#shoesText').html("A good pair of " + this.shoes.cold + ",");
        $('#accssText').html("and a " + this.accessories.cold + ".");
        document.querySelector(".contentLP1").appendChild(beanieimage);
        document.querySelector(".contentLP2").appendChild(bootsimage);
        document.querySelector(".contentLP3").appendChild(jeansimage);
        document.querySelector(".contentLP4").appendChild(sneakersimage);

    }//T3,H1 (hot,sunny)
    assignOutfit3(){
        $('.contentLP1').empty();
        $('.contentLP2').empty();
        $('.contentLP3').empty();
        $('.contentLP4').empty();
        // $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#userText').html("Hi " + this.username + ". " + "it's pretty hot out there, and it is quite suuny, you should wear: ")
        $('#topText').html("A good old " + this.top.hot + ",");
        $('#bottomText').html("Some " + this.bottom.hot + ",");
        $('#shoesText').html("A good pair of " + this.shoes.hot + ",");
        $('#accssText').html("and a " + this.accessories.hot + ".");
        document.querySelector(".contentLP1").appendChild(Sunglassesimage);
        document.querySelector(".contentLP2").appendChild(tshirtimage);
        document.querySelector(".contentLP3").appendChild(gymshortsimage);
        document.querySelector(".contentLP4").appendChild(crocsimage);

    }//T3,H2 (hot,normal)
    assignOutfit6(){
        $('.contentLP1').empty();
        $('.contentLP2').empty();
        $('.contentLP3').empty();
        $('.contentLP4').empty();
        // $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#userText').html("Hi " + this.username + ". " + "it's pretty hot out there, and partially clouded, you should wear: ")
        $('#topText').html("A good old " + this.top.hot + ",");
        $('#bottomText').html("Some " + this.bottom.hot + ",");
        $('#shoesText').html("A good pair of " + this.shoes.hot + ",");
        $('#accssText').html("and a " + this.accessories.hot + ".");
        document.querySelector(".contentLP1").appendChild(Hatimage);
        document.querySelector(".contentLP2").appendChild(tanktopimage);
        document.querySelector(".contentLP3").appendChild(gymshortsimage);
        document.querySelector(".contentLP4").appendChild(crocsimage);

    }//T3,H3 (hot,rain)
    assignOutfit9(){
        $('.contentLP1').empty();
        $('.contentLP2').empty();
        $('.contentLP3').empty();
        $('.contentLP4').empty();
        // $('#weatherText').html("It is currently very hot and sunny: temperature(ºC) " + temperatureValue + ", cloudiness (%): " + humidityValue + ".");
        $('#userText').html("Hi " + this.username + ". " + "it's pretty hot out there, but it's also very cloudy, go with: ")
        $('#topText').html("A nice " + this.top.hot + ",");
        $('#bottomText').html("Some " + this.bottom.cold + ",");
        $('#shoesText').html("A pair of " + this.shoes.cold + ",");
        $('#accssText').html("and a " + this.accessories.hot + ".");
        document.querySelector(".contentLP1").appendChild(Hatimage);
        document.querySelector(".contentLP2").appendChild(tshirtimage);
        document.querySelector(".contentLP3").appendChild(jeansimage);
        document.querySelector(".contentLP4").appendChild(bootsimage);


    }//T4,H4 (Undefined)
    assignOutfit10(){
        $('.contentLP1').empty();
        $('.contentLP2').empty();
        $('.contentLP3').empty();
        $('.contentLP4').empty();
        $('#topText').html("A comfortable " + this.top.hot + ",");
        $('#bottomText').html("some reliable " + this.bottom.cold + ",");
        $('#shoesText').html("a pair of sturdy " + this.shoes.cold + ",");
        $('#accssText').html("and of course " + this.accessories.hot + ".");
        $('#userText').html("Sorry " + this.username + " I'm not sure about the weather right now, just go with: ")
        console.log(this.top.cold)
        console.log(this.bottom.cold)
        console.log(this.shoes.cold)
        console.log(this.accessories.cold)
        document.querySelector(".contentLP1").appendChild(earmuffsimage);
        document.querySelector(".contentLP2").appendChild(jacketimage);
        document.querySelector(".contentLP3").appendChild(jeansimage);
        document.querySelector(".contentLP4").appendChild(sneakersimage);
    }
}

// Objects with names(according to scenarios(ie. option 1.1 predetermined for rain like conditions)), and values according to user input (wardrobe).

//(Create) Extract variables from local storage (ie. the selection for cold weather top = CurrWeathPick)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    var User1Top;
    var User1Bottom;
    var User1Accessories;
    var User1Shoes;

    var User2Top;
    var User2Bottom;
    var User2Accessories;
    var User2Shoes;

// Test creation for "User" instance. accessories, bottom, shoes, top, username, location
function createUser(){

    var User1Accessories = {cold:lsaccold2, hot:"Sunglasses"};
    var User1Top = {cold:lstopcold2, hot:lstophot2};
    var User1Bottom = {cold:lsbotcold2, hot:lsbothot2};
    var User1Shoes = {cold:lsshoecold2, hot:lsshoe2};

    User1 = new NewUser(Object.assign(User1Accessories),Object.assign(User1Bottom),Object.assign(User1Shoes),Object.assign(User1Top), userName);

}

// Test creation for "User" instance. accessories, bottom, shoes, top, username, location
function createUser2(){

    var User2Accessories = {cold:lsaccold, hot:"Hat"};
    var User2Top = {cold:lstopcold, hot:lstophot};
    var User2Bottom = {cold:lsbotcold, hot:lsbothot};
    var User2Shoes = {cold:lsshoecold, hot:lsshoe};

    User2 = new NewUser(Object.assign(User2Accessories),Object.assign(User2Bottom),Object.assign(User2Shoes),Object.assign(User2Top), userName);

}
// API (test) fetch function:  returns variables to be used in outfit assignment function.

var button = document.querySelector('#submitbtn');
var temperatureValue;
var humidityValue;
var input = document.querySelector('#location');

// updated extracts location from user input 

function informationfunction() {

    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ae90054c5cfbcc338314940f67ed4e1e&units=metric')
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

button.addEventListener('click', informationfunction);

// Function to return humidity in 0-1 value.

function returnFun(){
    console.log("Test in nested function. T(ºC): " + temperatureValue + " Humidity(%): " + humidityValue);
    return temperatureValue, (humidityValue/100);
}

//Function for interpreting variables from API fetch, used for assignment of wardrobe options.

//Temperature ranges: <6, 6-13, 13-24, 24-33, >33.
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
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue); 
        User1.assignOutfit2();
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue < 33){
        console.log("Scenario 3")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        User1.assignOutfit3();
    }

    else if(6 < temperatureValue && 13 >= temperatureValue && humidityValue >= 33 && humidityValue < 66){
        console.log("Scenario 4")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        User1.assignOutfit4();
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue >= 33 && humidityValue < 66){
        console.log("Scenario 5")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        $('#topText').html(User1.top.cold);
        User1.assignOutfit5();
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue >= 33 && humidityValue < 66){
        console.log("Scenario 6")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        User1.assignOutfit6();
    }

    else if(6 < temperatureValue && 13 >= temperatureValue && humidityValue >= 66){
        console.log("Scenario 7")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        console.log(User1);
        User1.assignOutfit7();
    }

    else if(13 < temperatureValue && 24 >= temperatureValue && humidityValue >= 66){
        console.log("Scenario 8")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        User1.assignOutfit8();
    }

    else if(24 < temperatureValue && 33 >= temperatureValue && humidityValue >= 66){
        console.log("Scenario 9")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        User1.assignOutfit9();
    }
    else {
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        console.log("Scenario 10");
        console.log(temperatureValue);
        console.log(humidityValue);
        User1.assignOutfit10();
    }
}

function informationfunction2() {

    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=ae90054c5cfbcc338314940f67ed4e1e&units=metric')
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
        currentWeather2(temperatureValue,humidityValue);  
          
    }).catch(error  => {
    console.log(error);
})
    
    console.log("Test in fetch (secondary level)");
    returnFun();  
    
}

function currentWeather2(temperatureValue,humidityValue){

    console.log("Test in weather function");
    createUser2();

    if(6 < temperatureValue && 13 >= temperatureValue && humidityValue < 33){
        console.log("Scenario 1")
        User2.assignOutfit1();
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue < 33){
        console.log("Scenario 2")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue); 
        User2.assignOutfit2();
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue < 33){
        console.log("Scenario 3")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        User2.assignOutfit3();
    }

    else if(6 < temperatureValue && 13 >= temperatureValue && humidityValue >= 33 && humidityValue < 66){
        console.log("Scenario 4")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        User2.assignOutfit4();
    }

    else if(13 < temperatureValue && 20 >= temperatureValue && humidityValue >= 33 && humidityValue < 66){
        console.log("Scenario 5")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        $('#topText').html(User2.top.cold);
        User2.assignOutfit5();
    }

    else if(20 < temperatureValue && 27 >= temperatureValue && humidityValue >= 33 && humidityValue < 66){
        console.log("Scenario 6")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        User2.assignOutfit6();
    }

    else if(6 < temperatureValue && 13 >= temperatureValue && humidityValue >= 66){
        console.log("Scenario 7")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        console.log(User2);
        User2.assignOutfit7();
    }

    else if(13 < temperatureValue && 24 >= temperatureValue && humidityValue >= 66){
        console.log("Scenario 8")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        User2.assignOutfit8();
    }

    else if(24 < temperatureValue && 33 >= temperatureValue && humidityValue >= 66){
        console.log("Scenario 9")
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        User2.assignOutfit9();
    }
    else {
        $('#weatherText').html("Temperature (ºC): " + temperatureValue + " humidity (%): " + humidityValue);
        console.log("Scenario 10");
        console.log(temperatureValue);
        console.log(humidityValue);
        User2.assignOutfit10();
    }
}

var button2 = document.querySelector('#submitbtn2');

button2.addEventListener('click',informationfunction2);