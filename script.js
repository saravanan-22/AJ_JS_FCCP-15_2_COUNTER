let btnD = document.querySelector("#btn1");
let btnR = document.querySelector("#btn2");
let btnI = document.querySelector("#btn3");
let value = document.querySelector("#value");

btnD.addEventListener("click", () => {
  value.textContent = --value.textContent;
  if (value.textContent < 0) {
    value.className = "red";
  }
});
btnR.addEventListener("click", () => {
  value.textContent = 0;
  if (value.textContent == 0) {
    value.className = "black";
  }
});
btnI.addEventListener("click", () => {
  value.textContent = ++value.textContent;
  if (value.textContent > 0) {
    value.className = "green";
  }
});






// 1.These lines use the document.querySelector() method to select HTML elements with the IDs "btn1", "btn2", "btn3", and "value" respectively.


//  This means it's finding elements on the webpage with these IDs and storing references to them in the variables btnD, btnR, btnI, and value.




// 2.This block of code adds a click event listener to the button with the ID "btn1" (likely a "Decrement" button). 


// When this button is clicked, the code inside the callback function is executed.


// The textContent property of the value element (which likely represents the counter value) is decremented by one using the pre-decrement operator --.


// If the counter value becomes less than 0, the CSS class "red" is applied to the value element.



// 2.This block of code adds a click event listener to the button with the ID "btn2" (likely a "Reset" button).


// When this button is clicked, the counter value is reset to 0.


// If the counter value is 0 after the reset, the CSS class "black" is applied to the value element. 


// This could be used to set the color of the counter value back to black.



// This might be used to change the color of the counter value to red when it becomes negative.


// This block of code adds a click event listener to the button with the ID "btn3" (likely an "Increment" button).


// When this button is clicked, the counter value is incremented by one using the pre-increment operator ++.


// If the counter value becomes greater than 0, the CSS class "green" is applied to the value element. This might be used to change the color of the counter value to green when it becomes positive.


// In summary, the code binds event listeners to three buttons on the webpage. 


// Each button modifies the counter value displayed on the page and potentially changes the color of the value based on the conditions provided. 


// This is a simple example of how JavaScript can be used to create interactive elements on a webpage.  