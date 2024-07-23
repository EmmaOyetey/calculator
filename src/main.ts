import "./style.scss";

const button = document.querySelectorAll<HTMLButtonElement>(".button");
const digits = document.querySelectorAll<HTMLButtonElement>(".digit");
const operations = document.querySelectorAll<HTMLButtonElement>(".operation");
const convert  = document.querySelectorAll<HTMLButtonElement>(".convert");

const equalsButton = document.querySelector(".equals");

const posToNegButton = document.querySelector(".convert__posNeg");
const decButton = document.querySelector(".convert__dec");
const percentButton = document.querySelector(".convert__percent");

const outputAnswer = document.getElementById("answer");
const outputEnteredDigits = document.getElementById("entered-digits");
const outputCalcInProgress = document.getElementById("calc-in-progress");

const clearButton = document.querySelector(".clear");

if (!button) {
    throw new Error ("issue with buttons");
    };
if (!digits ) {
    throw new Error ("issue with digit button");
    };
if (!equalsButton){
    throw new Error ("issue with covert button");
};
if (!outputAnswer || !outputEnteredDigits || !outputCalcInProgress){
    throw new Error ("issue with display output");
};
if(!posToNegButton || !decButton) {
    throw new Error ("issue with converts in development");
}

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

button.forEach(button => {
    button.addEventListener("click", handleButtonStyleChange);
});

const handleDigits = (event: Event): void => {
    const thisDigit = parseInt((event.currentTarget as HTMLButtonElement).value, 10); //ensure that thisDigit is recognised a number not a string .value is accessessing one of the proporties (value) in the array (node list) of digits
    enteredDigits.push(thisDigit); // Push the number into enteredDigits array
    console.log(enteredDigits); // Output the updated array to console 
    outputEnteredDigits.textContent = enteredDigits.join(" ");
};

digits.forEach( (digit) => {
    digit.addEventListener('click', handleDigits);        
    }) ; 

let enteredDigits:number [] = [];  // Array to store entered digits
let numberInCalculation:number[] =[]; // array to store concatenated number in operation
let operatorsInCalculation:string[] =[]; //array to store operators in calcualtion
let calculation:(number|string)[] = []; //array to store entirety of calculation
//let decimal:(number)[] =[];

    const handleConcatenation = ([]): number => {
        let concatenatedNumber = 0;
            for (let index = 0; index < enteredDigits.length; index++) {
            concatenatedNumber += enteredDigits[index] * Math.pow(10, enteredDigits.length - index - 1);
            }
    return concatenatedNumber;
    };

const handlePercentageConversion =(event : Event) :void => {
    let concatenatedNumber = handleConcatenation([enteredDigits]);
    let convertedPercentage: number  = concatenatedNumber /100;
    enteredDigits =[convertedPercentage]; 
    console.log(enteredDigits);
    if (outputEnteredDigits) {
        outputEnteredDigits.textContent = enteredDigits.join(" " );
    }
};

if (percentButton) {
   percentButton.addEventListener('click', handlePercentageConversion); 
   };

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

operations.forEach( (operation) => {
    operation.addEventListener('click', handleOperators);        
}) ; 

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

equalsButton.addEventListener("click" , handleEquals); 
      
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

