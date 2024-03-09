import "./style.scss";

//Need to add new style if any button has been clciked 
//Get &  return multiple elements documeny.querySelectorAll(class or id in index.html)
//let ts know the kind of element we are trying to get -  add the return type of the method <HTMLstyleElement>

const button = document.querySelectorAll<HTMLButtonElement>(".button");
const digit = document.querySelectorAll<HTMLButtonElement>(".digit");

//Add Query Selectors and return type HTML 
//to know what button has been clicked - Get and return individual digit elements
//let ts know the kind of element we are trying to get -  add the return type of the method <HTMLButtonElement>

const digitOneButton = document.querySelector<HTMLButtonElement>(".digit__1");
const digitTwoButton = document.querySelector<HTMLButtonElement>(".digit__2");
const digitThreeButton = document.querySelector<HTMLButtonElement>(".digit__3");
const digitFourButton = document.querySelector<HTMLButtonElement>(".digit__4");
const digitFiveButton = document.querySelector<HTMLButtonElement>(".digit__5");
const digitSixButton = document.querySelector<HTMLButtonElement>(".digit__6");
const digitSevenButton = document.querySelector<HTMLButtonElement>(".digit__7");
const digitEightButton = document.querySelector<HTMLButtonElement>(".digit__8");
const digitNineButton = document.querySelector<HTMLButtonElement>(".digit__9");
const digitZeroButton = document.querySelector<HTMLButtonElement>(".digit__0");

const multButton = document.querySelector<HTMLButtonElement>(".operation__mult");
const DivButton = document.querySelector<HTMLButtonElement>(".operation__div");
const addButton = document.querySelector<HTMLButtonElement>(".operation__add");
const subButton = document.querySelector<HTMLButtonElement>(".operation__sub");

const equalsButton = document.querySelector(".conver__posNeg");
const posToNegButton = document.querySelector(".convert__dec");
const decButton = document.querySelector(".convert__percent");
const percentButton = document.querySelector(".operation__mult");
const clearButton = document.querySelector(".clear");


// manage the event null is returned from the query selector
//use non-null assertion ! and throw an error 

if (!button) {
    throw new Error ("issue with buttons");
    }
if (!digit) {
    throw new Error ("issue with digit button");
    }

if (!digitOneButton) {
    throw new Error ("issue with digit1");     // do we need to be this specific? and add for each individual button?
    }

//create function handleButtonStyleChange that changes button style
//create event listener - to run code (/ function) when specified event happens 
//decalered using documeny.querySelectorAll gives 'node' list/array of all the instances of button. use .foreach button

    const handleButtonStyleChange = (event: Event): void => {
        const thisButton = event.currentTarget as HTMLButtonElement; // Get the button element that triggered the event
        // Simulate button press effect
        thisButton.style.boxShadow = 'inset 0px 0px 10px rgba(0, 0, 0, 0.5)'; // Add a box shadow to simulate button press
        thisButton.style.transform = 'translateY(2px)'; // Move the button down slightly
        // Reset button appearance after a short delay
        setTimeout(() => {
            thisButton.style.boxShadow = ''; // Reset box shadow
            thisButton.style.transform = ''; // Reset transform
        }, 10); // Adjust the duration (in milliseconds) as needed
    };

    button.forEach(button => {
        button.addEventListener("click", handleButtonStyleChange);
    });

    

// Function to handle button 2 click event
const handleDigitZeroClick = (event: Event): void => {
    enteredDigit.push(0); // Push the number 2 into enteredDigits array
    console.log(enteredDigit); // Output the updated array to console (optional)
}

const handleDigitOneClick = (event: Event): void => {
    enteredDigit.push(1); // Push the number 2 into enteredDigits array
    console.log(enteredDigit); // Output the updated array to console (optional)
}

const handleDigitTwoClick = (event: Event): void => {
    enteredDigit.push(2); // Push the number 2 into enteredDigits array
    console.log(enteredDigit); // Output the updated array to console (optional)
}

const handleDigitThreeClick = (event: Event): void => {
    enteredDigit.push(3); // Push the number 2 into enteredDigits array
    console.log(enteredDigit); // Output the updated array to console (optional)
}

const handleDigitFourClick = (event: Event): void => {
    enteredDigit.push(4); // Push the number 2 into enteredDigits array
    console.log(enteredDigit); // Output the updated array to console (optional)
}

const handleDigitFiveClick = (event: Event): void => {
    enteredDigit.push(5); // Push the number 2 into enteredDigits array
    console.log(enteredDigit); // Output the updated array to console (optional)
}

const handleDigitSixClick = (event: Event): void => {
    enteredDigit.push(6); // Push the number 2 into enteredDigits array
    console.log(enteredDigit); // Output the updated array to console (optional)
}

const handleDigitSevenClick = (event: Event): void => {
    enteredDigit.push(7); // Push the number 2 into enteredDigits array
    console.log(enteredDigit); // Output the updated array to console (optional)
}

const handleDigitEightClick = (event: Event): void => {
    enteredDigit.push(8); // Push the number 2 into enteredDigits array
    console.log(enteredDigit); // Output the updated array to console (optional)
}

const handleDigitNineClick = (event: Event): void => {
    enteredDigit.push(9); // Push the number 2 into enteredDigits array
    console.log(enteredDigit); // Output the updated array to console (optional)
}

//add event listeners to each individual digit button for the event they are clicked
if (digitZeroButton) {
    digitZeroButton.addEventListener('click', handleDigitZeroClick); 
    };

if (digitOneButton) {
    digitOneButton.addEventListener('click', handleDigitOneClick); 
    };
if (digitTwoButton) {
    digitTwoButton.addEventListener('click', handleDigitTwoClick); 
    };
if (digitThreeButton) {   
    digitThreeButton.addEventListener('click', handleDigitThreeClick); 
    };
if (digitFourButton) {
    digitFourButton.addEventListener('click', handleDigitFourClick); 
    };
if (digitFiveButton) {
    digitFiveButton.addEventListener('click', handleDigitFiveClick); 
    };
if (digitSixButton) {
    digitSixButton.addEventListener('click', handleDigitSixClick); 
    };
if (digitSevenButton) {
    digitSevenButton.addEventListener('click', handleDigitSevenClick); 
    };
if (digitEightButton) {
    digitEightButton.addEventListener('click', handleDigitEightClick); 
    };
if (digitNineButton) {
    digitNineButton.addEventListener('click', handleDigitNineClick); 
    };




//handle user clicks an operation button
//const handleMultClick = (event: Event) : void => { 

    
}

//maths functions
//let enteredDigit:number [] = [];  // Array to store entered digits
//let allEnteredDigits: number[] = [];
//let numberInCalculation:number[] =[];


// Concatenate digits to form a larger number
//const concatenateNumber:number = push

//let concatenatedNumber:number = 0; // Initialize numberInCalculation variable before the loop

//for (let index = 0; index < enteredDigit.length; index++) {
 //   concatenatedNumber += enteredDigit[index] * Math.pow(10, index);
}







        //const handleButtonStyleChange = (event: Event) : void  => {
 //   if(button) {
 //       const thisbutton = event.currentTarget as HTMLButtonElement; // Get the button element that triggered the event
  //      thisbutton.style.backgroundColor = 'blue'; // Change the background color of the button
  //      thisbutton.style.color = 'white'; // Change the text color of the button
  //  }
   // };

