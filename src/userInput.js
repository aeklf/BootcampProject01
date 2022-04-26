// DOM Input variables
var userForm = document.querySelector('#UserForm');
var nameEl = document.querySelector('#nameEl');
var emailEl = document.querySelector('#emailEl')
var homeLocation = document.querySelector('#homeLocationEl');
var prefBtn = document.querySelector('#prefBtn')

// Checkbox variables
var cb1 = document.querySelector('#box-1');
var cb2 = document.querySelector('#box-2');
var cb3 = document.querySelector('#box-3');
var cb4 = document.querySelector('#box-4');
var cb5 = document.querySelector('#box-5');
var cb6 = document.querySelector('#box-6');
var cb7 = document.querySelector('#box-7');
var cb8 = document.querySelector('#box-8');

 // Get User input into an array   
//  var userList = JSON.parse(localStorage.getItem('UserList')); // this doesn't do anything
 var userList = [localStorage.getItem(JSON.parse('User1'))];
 
// Submit form

function handleFormSubmit (event) {
// stops from refreshing form
    event.preventDefault(); 

    
// Determine whether Accessories box is checked
 if (cb1.checked) {
     var c1 = document.querySelector('#sunglasses').textContent;
     console.log(c1)
 }
 if (cb2.checked) {
     var c2 = document.querySelector('#beanie').textContent;
     console.log(c2);
 }
//  Determine whether Top box is checked
 if (cb3.checked) {
     var c3 = document.querySelector('#shirt').textContent;
     console.log(c3)
 }
 if (cb4.checked){
     var c4 = document.querySelector('#jacket').textContent;
     console.log(c4);
 }
 // Determine whether Bottom box is checked
 if (cb5.checked){
     var c5 = document.querySelector('#jeans').textContent;
     console.log(c5)
 }
 if (cb6.checked){
     var c6 = document.querySelector('#shorts').textContent;
     console.log(c6)
 }
 // Determine whether Shoes box is checked
 if (cb7.checked){
    var c5 = document.querySelector('#sneakers').textContent;
    console.log(c5)
}
if (cb8.checked){
    var c6 = document.querySelector('#sandals').textContent;
    console.log(c6)
}
 
                        // accessories, top, bottom, shoes
    // New User input
    class NewUser {
        constructor(name, email, location, accessories, top, bottom, shoes) {

            this.name = name;
            this.email = email;
            this.location = location;
            this.accessories = accessories;
            this.top = top;
            this.bottom = bottom;
            this.shoes = shoes;
          
        }
    // Check if has information user input
        isValid() {
            if(this.name === "" || this.email === "" || this.location === ""){
                return false
            } else {
                return true
            }
        }
    }
    
        var user = new NewUser(nameEl.value,
             emailEl.value,
             homeLocation.value,
             c1, c2, c3, c4, c5, c6
             );
        if (user.isValid()){
           userList.push(user);
        }else {
            alert('Invalid input')
        }
        
        localStorage.setItem('User1', JSON.stringify(userList));
        

}
   


// WHEN I click on user button, THEN the input saves in local storage
prefBtn.addEventListener('click', handleFormSubmit);

