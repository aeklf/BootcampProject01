// DOM Input variables
var userForm = document.querySelector('#UserForm');
var firstNameEl = document.querySelector('#firstNameEl');
var lastNameEl = document.querySelector('#lastNameEl');
var email = document.querySelector('#email')
var homeLocation = document.querySelector('#homeLocation');
var registerSelection = document.querySelector('#registerSelection');

// Checkbox variables
var cb1 = document.querySelector('#cb1');
var cb2 = document.querySelector('#cb2');
var cb3 = document.querySelector('#cb3');
var cb4 = document.querySelector('#cb4');
var cb5 = document.querySelector('#cb5');
var cb6 = document.querySelector('#cb6');

 // Get User input into an array   
//  var userList = JSON.parse(localStorage.getItem('UserList')); // this doesn't do anything
 var userList = [];


// Submit form

function handleFormSubmit (event) {
// stops from refreshing form
    event.preventDefault(); 

    
// Determine whether box is checked
 if (cb1.checked) {
     var c1 = document.querySelector('#hoodie').textContent;
     console.log(c1)
 }
 if (cb2.checked) {
     var c2 = document.querySelector('#shirt').textContent;
     console.log(c2);
 }
 if (cb3.checked) {
     var c3 = document.querySelector('#jeans').textContent;
     console.log(c3)
 }
 if (cb4.checked){
     var c4 = document.querySelector('#shorts').textContent;
     console.log(c4);
 }
 if (cb5.checked){
     var c5 = document.querySelector('#shoes').textContent;
     console.log(c5)
 }
 if (cb6.checked){
     var c6 = document.querySelector('#boots').textContent;
     console.log(c6)
 }
 
                        // accessories, top, bottom, shoes
    // New User input
    class NewUser {
        constructor(first, last, email, location, accessories, top, bottom, shoes) {

            this.first = first;
            this.last = last;
            this.email = email;
            this.location = location;
            this.accessories = accessories;
            this.top = top;
            this.bottom = bottom;
            this.shoes = shoes;
          
        }
    // Check if has information
        isValid() {
            if(this.first === "" || this.last === "" || this.email === "" || this.location === ""){
                return false
            } else {
                return true
            }
        }
    }
    
        var user = new NewUser(firstNameEl.value,
             lastNameEl.value,
             email.value,
             homeLocation.value,
             c1, c2, c3, c4
             );
        if (user.isValid()){
           userList.push(user);
        }else {
            alert('Invalid input')
        }
        var User1accessories = {
            option1: 'sunglasses',
            option2: 'cap'
        }
        var User1top = {
            option1: 'shirt',
            option2: 'jacket'
        }
        var User1bottom = {
            option1: 'jeans',
            option2: 'shorts'
        }
        var User1shoes = {
            option1: 'sneakers',
            option2: 'sandals'
        }
        localStorage.setItem('UserList', JSON.stringify(userList));
        
}

// WHEN I click on user button, THEN the input saves in local storage
registerSelection.addEventListener('click', handleFormSubmit);


