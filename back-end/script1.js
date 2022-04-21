//Test script for back end logic//

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
        return this.jacket.option2;
    }
}

//Temp var for object as parameter testing
var User1Jackets = {option1:"hoodie", option2:"raincoat"};

const User1 = new User(Object.assign(User1Jackets),"cardigan","sunglasses");


//Logical structure for interpreting weather variable inputs

//Temp ranges: <6, 6-13, 13-20, 20-27, >27.
//Cloud ranges: <25%, 25-50%, 50-75%, >75%.

function currentWeather(temp,cloud){
    if(6 < temp && 13 >= temp && cloud <= 0.25){
        console.log("Test in function")
        return("Scenario 1")
    }

    else if(13 < temp && 20 >= temp && cloud < 0.25){
        return("Scenario 2") 
    }

    else if(20 < temp && 27 >= temp && cloud < 0.25){
        return("Scenario 3") 
    }

    else if(13 < temp && 20 >= temp && cloud >= 0.25 && cloud < 0.5){
        return("Scenario 4") 
    }

    else if(20 < temp && 27 >= temp && cloud >= 0.25 && cloud < 0.5){
        return("Scenario 5") 
    }

    else if(20 < temp && 27 >= temp && cloud >= 0.25 && cloud < 0.5){
        return("Scenario 6") 
    }

    else if(13 < temp && 20 >= temp && cloud >= 0.5 && cloud > 0.75){
        return("Scenario 7") 
    }

    else if(20 < temp && 27 >= temp && cloud >= 0.5 && cloud > 0.75){
        return("Scenario 8") 
    }

    else if(20 < temp && 27 >= temp && cloud >= 0.5 && cloud > 0.75){
        return("Scenario 9") 
    }
}

