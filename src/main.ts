import "./style.scss";

//Need to add new style if any button has been clciked 
//Get &  return multiple elements documeny.querySelectorAll(class or id in index.html)
//let ts know the kind of element we are trying to get -  add the return type of the method <HTMLstyleElement>

const button = document.querySelectorAll<HTMLButtonElement>(".button");
const digit = document.querySelectorAll<HTMLButtonElement>(".digit");

//Need to know what button has been clicked 
//Get and return individual digit elements
//let ts know the kind of element we are trying to get -  add the return type of the method <HTMLButtonElement>

const digitOneButton = document.querySelector<HTMLButtonElement>(".digit__1");
const digitTwoButton = document.querySelector<HTMLButtonElement>(".digit__2");
const digitThreeButton = document.querySelector<HTMLButtonElement>(".digit__3");
const digitFourButton = document.querySelector<HTMLButtonElement>(".digit__4");
const digitFiveButton = document.querySelector<HTMLButtonElement>(".digit__5");
const digitSixButton = document.querySelector<HTMLButtonElement>(".digit__6");
const digitSevenButton = document.querySelector<HTMLButtonElement>(".digit__7");
const digitEightButton = document.querySelector<HTMLButtonElement>(".digit__8");
const digitNineButtom = document.querySelector<HTMLButtonElement>(".digit__9");
const digitzeroButton = document.querySelector<HTMLButtonElement>(".digit__0");

const multButton = document.querySelector<HTMLButtonElement>(".operation__mult");
const DivButton = document.querySelector<HTMLButtonElement>(".operation__div");
const addButton = document.querySelector<HTMLButtonElement>(".operation__add");
const subButton = document.querySelector<HTMLButtonElement>(".operation__sub");


const equalsButton = document.querySelector(".conver__posNeg");
const posToNegButton = document.querySelector(".convert__dec");
const decButton = document.querySelector(".convert__percent");
const percentButton = document.querySelector(".operation__mult");
const clearButton = document.querySelector(".clear");


// manage event that the event null is returned from the query selector
//use non-null assertion ! and throw an error 

if (!button) {
    throw new Error ("issue with buttons");
}

if (!digit) {
    throw new Error ("issue with digit button");
}
// do we need to be this specific? and add for each individual button?
if (!digitOneButton) {
    throw new Error ("issue with digit1");
}


//create call back functions for different events

//create function handleButtonStyleChange that changes button style

const handleButtonStyleChange = (event: Event) : void  => {
    if(button) {
        const thisbutton = event.currentTarget as HTMLButtonElement; // Get the button element that triggered the event
        thisbutton.style.backgroundColor = 'blue'; // Change the background color of the button
        thisbutton.style.color = 'white'; // Change the text color of the button
    }
    };

//create event listener to run the code (or function) when an event happens 
// as we have decalered button using documeny.querySelectorAll 
//we have created a 'node' list (array) of all the instances of button
//we there need to do '.foreach button


    button.forEach(button => {
        button.addEventListener("click", handleButtonStyleChange);
    });


//button.addEventListener("click", handleClickedButtonVisual);
//

