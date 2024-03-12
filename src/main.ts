import "./style.scss";

//Add Query Selectors and return type HTML 
//Get &  return multiple elements documeny.querySelectorAll(class or id in index.html)

//families of buttons used in for each loops
const button = document.querySelectorAll<HTMLButtonElement>(".button");
const digits = document.querySelectorAll<HTMLButtonElement>(".digit");
const operations = document.querySelectorAll<HTMLButtonElement>(".operation");
const convert  = document.querySelectorAll<HTMLButtonElement>(".convert");

const equalsButton = document.querySelector(".equals");
//Conversion buttons - under development. see commented out code at the bottom
const posToNegButton = document.querySelector(".convert__posNeg");
const decButton = document.querySelector(".convert__dec");
const percentButton = document.querySelector(".convert__percent");


//Output elemets
const outputAnswer = document.getElementById("answer");
const outputEnteredDigits = document.getElementById("entered-digits");
const outputCalcInProgress = document.getElementById("calc-in-progress");

const clearButton = document.querySelector(".clear");
// manage event null is returned 
if (!button) {
    throw new Error ("issue with buttons");
    };
if (!digits ) {
    throw new Error ("issue with digit button");
    };
//if (!convert) {
//    throw new Error ("issue with operator button")
//};
if (!equalsButton){
    throw new Error ("issue with covert button");
};
if (!outputAnswer || !outputEnteredDigits || !outputCalcInProgress){
    throw new Error ("issue with display output");
};
if(!posToNegButton || !decButton) {
    throw new Error ("issue with converts in development");
}

//function handleButtonStyleChange that changes button style on click
const handleButtonStyleChange = (event: Event): void => {
    const thisButton = event.currentTarget as HTMLButtonElement; // Get the button element that triggered the event
    // Simulate button press effect
    thisButton.style.boxShadow = 'inset 0px 0px 10px rgba(0, 0, 0, 0.5)'; // Add a box shadow to simulate button press
    thisButton.style.transform = 'translateY(2px)'; 
    // Reset button appearance 
    setTimeout(() => {
        thisButton.style.boxShadow = ''; // Reset box shadow
        thisButton.style.transform = ''; // Reset transform
    }, 10); 
};

// forEach button add event listener and apply function 
// handleButtonStyleChange on event of click
button.forEach(button => {
    button.addEventListener("click", handleButtonStyleChange);
});

// Function handleDigits triggers events on digit click 
// pushing values to array enteredDigits
const handleDigits = (event: Event): void => {
    const thisDigit = parseInt((event.currentTarget as HTMLButtonElement).value, 10); //ensure that thisDigit is recognised a number not a string .value is accessessing one of the proporties (value) in the array (node list) of digits
    enteredDigits.push(thisDigit); // Push the number into enteredDigits array
    console.log(enteredDigits); // Output the updated array to console 
    outputEnteredDigits.textContent = enteredDigits.join(" ");
};

// for Each digit add event listener to  for the event they are clicked
digits.forEach( (digit) => {
    digit.addEventListener('click', handleDigits);        
    }) ; 

//Declaring Arrays
let enteredDigits:number [] = [];  // Array to store entered digits
let numberInCalculation:number[] =[]; // array to store concatenated number in operation
let operatorsInCalculation:string[] =[]; //array to store operators in calcualtion
let calculation:(number|string)[] = []; //array to store entirety of calculation
//let decimal:(number)[] =[];

//function to concatenate entered digits 
    const handleConcatenation = ([]): number => {
        let concatenatedNumber = 0;
            for (let index = 0; index < enteredDigits.length; index++) {
            concatenatedNumber += enteredDigits[index] * Math.pow(10, enteredDigits.length - index - 1);
            }
    return concatenatedNumber;
    };

//function to handle percentage conversion. 
// calls back concatenation function.
const handlePercentageConversion =(event : Event) :void => {
    let concatenatedNumber = handleConcatenation([enteredDigits]);
    let convertedPercentage: number  = concatenatedNumber /100;
    enteredDigits =[convertedPercentage]; 
    console.log(enteredDigits);
    if (outputEnteredDigits) {
        outputEnteredDigits.textContent = enteredDigits.join(" " );
    }
};

//event listener triggers function handlePercentageConversion on click
if (percentButton) {
   percentButton.addEventListener('click', handlePercentageConversion); 
   };

// function to handle operation on the event of a click
const handleOperators = (event: Event): void => {
    const thisOperator = (event.currentTarget as HTMLButtonElement).value; 
    let concatenatedNumber: number = handleConcatenation(enteredDigits); // Call handleConcatenation function
    numberInCalculation.push(concatenatedNumber);
    operatorsInCalculation.push(thisOperator);
    calculation.push(concatenatedNumber);
    calculation.push(thisOperator);
    enteredDigits.length = 0; 
    console.log(numberInCalculation, operatorsInCalculation, enteredDigits);
    outputCalcInProgress.textContent = calculation.join(" ");
    outputEnteredDigits.textContent = enteredDigits.join(" ");
 };

//event listener to trigger the handling of an 
//operation in the event operator button is click
operations.forEach( (operation) => {
    operation.addEventListener('click', handleOperators);        
}) ; 

//function to handle the event = is clicked
const handleEquals = (event: Event): void => {
    let concatenatedNumber: number = handleConcatenation(enteredDigits); 
    numberInCalculation.push(concatenatedNumber);
    calculation.push(concatenatedNumber);
    if(outputCalcInProgress) {outputCalcInProgress.textContent = calculation.join(" ") };
    enteredDigits=[]; 
    if(outputEnteredDigits) {outputEnteredDigits.textContent = " = "};
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
    console.log (numberInCalculation, operatorsInCalculation, enteredDigits, answer);
    outputAnswer.textContent = answer.toString();
    enteredDigits = [] ;
    numberInCalculation = [];
    operatorsInCalculation = [] ;
    calculation = [] ;
    };

//event listener to trigger the handling of calculating the sum on the event = is clicked
equalsButton.addEventListener("click" , handleEquals); 
      
//function to handle clearing display inputs

const handleClearingInputs = (event : Event) : void => {

    enteredDigits = [] ;
    numberInCalculation = [];
    operatorsInCalculation = [] ;
    calculation = [] ;
    outputCalcInProgress.textContent = "";
    outputEnteredDigits.textContent = "Get Calculating!";
    outputAnswer.textContent = "";
}    

clearButton?.addEventListener("click" , handleClearingInputs);

const handleUnderDevelopment = (event :Event) : void => {
    outputEnteredDigits.textContent = "Coming Soon!";
    outputCalcInProgress.textContent = "";
    enteredDigits = [] ;
    numberInCalculation = [];
    operatorsInCalculation = [] ;
    calculation = [] ;    
    outputAnswer.textContent = "";
};

posToNegButton.addEventListener("click", handleUnderDevelopment);
decButton.addEventListener("click", handleUnderDevelopment);

//if(decButton) {
//    decButton.addEventListener("click", handleDecimal);
//} 
//let isADecimal = false;

//const handleConcatenation = (): number => {
 //   let concatenatedNumber = 0;
 //   if (isADecimal) {
 //       for (let index = decimalPlace; index < enteredDigit.length; index++) {
  //          concatenatedNumber += enteredDigit[index] * Math.pow(10, enteredDigit.length - index - 1);
 //       }
 //  } else {
  //      for (let index = 0; index < enteredDigit.length; index++) {
   //         concatenatedNumber += enteredDigit[index] * Math.pow(10, enteredDigit.length - index - 1);
  //      }
 //   }
 //   return concatenatedNumber

 //function to convery entered digits into concatenated number
 //const handleConcatenation = (enteredDigits: number[]): number => {
 //    let concatenatedNumber = 0;
 //    let decimalPlace = decimal[0];

 //    if (typeof decimalPlace === 'number') {
 //        for (let index = decimalPlace; index < enteredDigits.length; index++) {
 //            concatenatedNumber += enteredDigits[index] * Math.pow(10, enteredDigits.length - index - 1);
 //       } 
 //    } else {
 //        for (let index = 0; index < enteredDigits.length; index++) {
 //            concatenatedNumber += enteredDigits[index] * Math.pow(10, enteredDigits.length - index - 1);
 //        }
 //    }
 //    return concatenatedNumber;
 //};

 //if (decButton) {
//   decButton.addEventListener("click", handleDecimals);
//};
 
//const handlePostoNegConversion = (event : Event) :void => {
 //   let concatenatedNumber = handleConcatenation(enteredDigits);
 //   let converted 
//} 

//const handleDecimals = (event : Event) : void => {
 //   decimal.push(enteredDigits.length);
 //   console.log("It's a decimal! Digits before the decimal point: " + decimal);
 //   if (outputEnteredDigits) {
  //      outputEnteredDigits.textContent = enteredDigits.join(" ") + ".";
  //  };
//}