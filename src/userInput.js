// DOM Input variables
var userForm = document.querySelector('#UserForm');
var nameEl = document.querySelector('#nameEl');
var emailEl = document.querySelector('#emailEl');
var prefBtn = document.querySelector('#prefBtn');

// Checkbox variables
var cb1 = document.querySelector('#box-1');
var cb2 = document.querySelector('#box-2');
var cb3 = document.querySelector('#box-3');
var cb4 = document.querySelector('#box-4');
var cb5 = document.querySelector('#box-5');
var cb6 = document.querySelector('#box-6');
var cb7 = document.querySelector('#box-7');
var cb8 = document.querySelector('#box-8');
var cb9 = document.querySelector('#box-9');
var cb10 = document.querySelector('#box-10');
var cb11 = document.querySelector('#box-11');
var cb12 = document.querySelector('#box-12');
var cb13 = document.querySelector('#box-13');
var cb14 = document.querySelector('#box-14');
var cb15 = document.querySelector('#box-15');
var cb16 = document.querySelector('#box-16');


 // Get User input into an array   
//  var userList = JSON.parse(localStorage.getItem('UserList')); // this doesn't do anything
 var userList;
 
// Submit form
function handleFormSubmit (event) {
// stops from refreshing form
    event.preventDefault(); 

    
// Determine whether Accessories box is checked
if (cb1.checked) {
    var c1 = cb1.value
    console.log(c1)
}
if (cb2.checked) {
    var c2 = cb2.value
    console.log(c2)
}

if (cb3.checked) {
    var c3 = cb3.value
    console.log(c3)
}
if (cb4.checked){
    var c4 = cb4.value;
    console.log(c4)
}

if (cb5.checked){
    var c5 = cb5.value;
    console.log(c5)
}
if (cb6.checked){
    var c6 = cb6.value;
    console.log(c6)
}

if (cb7.checked){
   var c7 = cb7.value;
   console.log(c7)
}
if (cb8.checked){
   var c8 = cb8.value
   console.log(c8)

   
// Cold weather preferences
}
if (cb9.checked){
   var c9 = cb9.value;
   console.log(c9)
   
}
if (cb10.checked){
   var c10 = cb10.value;
   console.log(c10)
}
if (cb11.checked){
   var c11 = cb11.value;
   console.log(c11)
}
if (cb12.checked){
   var c12 = cb12.value;
   console.log(c12)
}
if (cb13.checked){
   var c13 = cb13.value;
   console.log(c13)
}
if (cb14.checked){
   var c14 = cb14.value;
   console.log(c14)
}
if (cb15.checked){
   var c15 = cb15.value;
   console.log(c15)
}
if (cb16.checked){
   var c16 = cb16.value;
   console.log(c16)
}

    // New User input
    class NewUser {
        constructor(name,
             accessories1, accessories2,
              top1, top2, bottom1, bottom2, shoes1, shoes2,
              coldacc1, coldacc2, coldtop1, coldtop2, coldbottom1, coldbottom2, coldshoes1, coldshoes2) {

            this.name = name;
            this.accessories1 = accessories1;
            this.accessories2 = accessories2;
            this.top1 = top1;
            this.top2 = top2;
            this.bottom1 = bottom1;
            this.bottom2 = bottom2;
            this.shoes1 = shoes1;
            this.shoes2 = shoes2;
            this.coldacc1 = coldacc1;
            this.coldacc2 = coldacc2;
            this.coldtop1 = coldtop1;
            this.coldtop2 = coldtop2;
            this.coldbottom1 = coldbottom1;
            this.coldbottom2 = coldbottom2;
            this.coldshoes1 = coldshoes1;
            this.coldshoes2 = coldshoes2;
          
        }
    // Check if user input has information
        isValid() {
            if(this.name == ""){
                return false
            } else {
                return true
            }
        }
    }
    
        var user = new NewUser(nameEl.value,
             c1, c2, c3, c4, c5, c6,
             c7, c8, c9, c10, c11, c12, c13,
             c14, c15, c16 
             );
             
        if (user.isValid()){
           userList = user;
           location.href = "./landingpage.html";
        }else {
            logo =  document.querySelector('#logo');
            logo.scrollIntoView();
            nameEl.style.backgroundColor = '#a52a2a';
        }
        
        localStorage.setItem('User1', JSON.stringify(userList));
}
   

// WHEN I click on user button, THEN the input saves in local storage
prefBtn.addEventListener('click', handleFormSubmit);

// WHEN name input is invalid and red, remove color
nameEl.addEventListener('click', function(){
    nameEl.style.backgroundColor = '';
});

//  Function to cleardata
clearBtn.addEventListener('click', function(){
cleardata();

function cleardata() {
    
        localStorage.clear();
        location.reload();
    }
});



