import "./style.scss";

//Need to add new style if any button has been clciked 
//Get &  return multiple elements documeny.querySelectorAll(class or id in index.html)
//let ts know the kind of element we are trying to get -  add the return type of the method <HTMLstyleElement>

const button = document.querySelectorAll<HTMLButtonElement>(".button");
const digit = document.querySelectorAll<HTMLButtonElement>(".digit");
const convert  = document.querySelectorAll<HTMLButtonElement>(".convert");
const equal = document.querySelectorAll<HTMLButtonElement>(".equals");

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

const equalsButton = document.querySelector(".equals");

const posToNegButton = document.querySelector(".convert__posNeg");
const decButton = document.querySelector(".convert__dec");
const percentButton = document.querySelector(".convert__percent");
const clearButton = document.querySelector(".clear");

const outputAnswer = document.getElementById("answer");
const outputEnteredDigits = document.getElementById("entered-digits");
const outputCalcInProess = document.getElementById("calc-in-progress");
// manage the event null is returned from the query selector
//use non-null assertion ! and throw an error 

if (!button) {
    throw new Error ("issue with buttons");
    }
if (!digit) {
    throw new Error ("issue with digit button");
    }

if (!convert) {
    throw new Error ("issue with covert button")
}

if (!equal){
    throw new Error ("issue with covert button")
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

//

//Declaring Arrays
let enteredDigit:number [] = [];  // Array to store entered digits
let numberInCalculation:number[] =[];
let operatorsInCalculation:string[] =[];

// handle user clicks an operation button
//Concatenate digits move concatinated number t0 array numberInCalculation
//push operator into operations in calculation depending on operator chosen


const multiply = (event: Event): void => {
let concatenatedNumber: number = 0; 
for (let index = 0; index < enteredDigit.length; index++) {
       concatenatedNumber += enteredDigit[index] * Math.pow(10, enteredDigit.length - index - 1);
   }
numberInCalculation.push(concatenatedNumber);
operatorsInCalculation.push("x");
enteredDigit=[];    
console.log(numberInCalculation, operatorsInCalculation, enteredDigit);
};


const divide = (event: Event): void => {
    let concatenatedNumber: number = 0; 
    for (let index = 0; index < enteredDigit.length; index++) {
           concatenatedNumber += enteredDigit[index] * Math.pow(10, enteredDigit.length - index - 1);
       }
    numberInCalculation.push(concatenatedNumber);
    operatorsInCalculation.push("/");
    enteredDigit=[];    
    console.log(numberInCalculation, operatorsInCalculation, enteredDigit);
    
    };

    const add = (event: Event): void => {
        let concatenatedNumber: number = 0; 
        for (let index = 0; index < enteredDigit.length; index++) {
               concatenatedNumber += enteredDigit[index] * Math.pow(10, enteredDigit.length - index - 1);
           }
        numberInCalculation.push(concatenatedNumber);
        operatorsInCalculation.push("+");
        enteredDigit=[];    
        console.log(numberInCalculation, operatorsInCalculation, enteredDigit);
        
        };

        const subtract = (event: Event): void => {
            let concatenatedNumber: number = 0; 
            for (let index = 0; index < enteredDigit.length; index++) {
                   concatenatedNumber += enteredDigit[index] * Math.pow(10, enteredDigit.length - index - 1);
               }
            numberInCalculation.push(concatenatedNumber);
            operatorsInCalculation.push("-");
            enteredDigit=[];    
            console.log(numberInCalculation, operatorsInCalculation, enteredDigit);
            
            };

        const equals = (event: Event): void => {
            let concatenatedNumber: number = 0; 
            for (let index = 0; index < enteredDigit.length; index++) {
                   concatenatedNumber += enteredDigit[index] * Math.pow(10, enteredDigit.length - index - 1);
               }
            numberInCalculation.push(concatenatedNumber);

            enteredDigit=[]; 

            let answer: number = numberInCalculation[0];
                for (let index = 1; index < numberInCalculation.length; index++) {
                    if (operatorsInCalculation[index - 1] === "+") {
                        answer += numberInCalculation[index];
                    } else if (operatorsInCalculation[index - 1] === "-") {
                        answer -= numberInCalculation[index];
                    } else if (operatorsInCalculation[index - 1] === "/") {
                        answer /= numberInCalculation[index];
                    } else if (operatorsInCalculation[index - 1] === "x") {
                        answer *= numberInCalculation[index];
                    } else {
                        console.log("Invalid operator:", operatorsInCalculation[index - 1]);
                    }
                }
                console.log (numberInCalculation, operatorsInCalculation, enteredDigit, answer);
                if(outputAnswer) {outputAnswer.textContent = answer.toString() };
            };

    //    const multiply =(event: Event):void => {
    //       let answer:number = numberInCalculation [0];
    //        for (let index = 0; index < enteredDigit.length; index++) {
    //            if ( operatorsInCalculation = "+" {answer += answer + numberInCalculation[index];
    //       }
    //    }

    //    const equals =(event: Event):void => {
    //       let answer:number = numberInCalculation [0];
    //        for (let index = 0; index < enteredDigit.length; index++) {
    //           if ( operatorsInCalculation = "+" {answer += answer + numberInCalculation[index];
    //        } else if (operatorsInCalculation = "-") {answer += answer - numberInCalculation[index];
//              } else if (operatorsInCalculation = "/") { answer += answer / numberInCalculation[index]};
//                      else if (operatorsInCalculation = "x") { answer += answer x numberInCalculation[index]};
    //    }

if (multButton) {
   multButton.addEventListener('click', multiply); 
   };


if(DivButton) {
        DivButton.addEventListener("click", divide);
    };

if(addButton) {
        addButton.addEventListener("click", add);
    };

if(subButton) {
        subButton.addEventListener("click", subtract);
};

if(equalsButton) {
  equalsButton.addEventListener("click" , equals); 
}



//To avoid repetition of the concatenation could incorporate seperate function for concatenate;
//const concatenateNumber = (enteredDigit: number[]): number => {
//    let concatenatedNumber: number = 0; // Initialize concatenatedNumber variable before the loop
//    for (let index = 0; index < enteredDigit.length; index++) {
//       concatenatedNumber += enteredDigit[index] * Math.pow(10, enteredDigit.length - index - 1);
//   }
//   return concatenatedNumber;
//};

//if (operation) {
 //operation.addEventListener('click', registerNumber); 

//resavingincaseilost anything stuck in a loop













        //const handleButtonStyleChange = (event: Event) : void  => {
 //   if(button) {
 //       const thisbutton = event.currentTarget as HTMLButtonElement; // Get the button element that triggered the event
  //      thisbutton.style.backgroundColor = 'blue'; // Change the background color of the button
  //      thisbutton.style.color = 'white'; // Change the text color of the button
  //  }
   // };

