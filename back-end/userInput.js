// Variables
var topClothes = document.querySelector('#top');
var midClothes = document.querySelector('#mid');
var bottomClothes = document.querySelector('#bottom');
var submitButton = document.querySelector('#submitButton');
var formBox = document.querySelector('.formBox')


// let clothings = [];

// var addClothing = function () {
//     let clothing = {
//         Top: topClothes.value,
//         Mid: midClothes.value,
//         Bottom: bottomClothes.value
//     }
//     clothings.push(clothing);

//     localStorage.setItem('ClothingItems', JSON.stringify(clothing));
// }

class NewUser {
    constructor(top, mid, bottom){
        this.top = top;
        this.mid = mid;
        this.bottom = bottom;
        
    }
}


// WHEN I click on user button, THEN the input saves in local storage
submitButton.addEventListener('click', function(){
    var userOne = new NewUser(JSON.stringify(topClothes.value, midClothes.value, bottomClothes.value));
    localStorage.setItem(userOne);
    console.log(userOne);
})