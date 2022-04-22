// Variables
var topClothes = document.querySelector('#top');
var midClothes = document.querySelector('#mid');
var bottomClothes = document.querySelector('#bottom');
var submitButton = document.querySelector('#submitButton');
var formBox = document.querySelector('.formBox')


let clothings = [];

var addClothing = function () {
    let clothing = {
        Top: topClothes.value,
        Mid: midClothes.value,
        Bottom: bottomClothes.value
    }
    clothings.push(clothing);

    localStorage.setItem('ClothingItems', JSON.stringify(clothing));
}





// WHEN I click on user button, THEN the input saves in local storage
submitButton.addEventListener('click', function(){
    
    addClothing();
})