import "./style.scss";

//Need to add new style if any button has been clciked 
//Get &  return multiple elements documeny.querySelectorAll(class or id in index.html)
//let ts know the kind of element we are trying to get -  add the return type of the method <HTMLstyleElement>

const button = document.querySelectorAll<HTMLButtonElement>(".button");
const digits = document.querySelectorAll<HTMLButtonElement>(".digit");
const convert  = document.querySelectorAll<HTMLButtonElement>(".convert");
const equal = document.querySelectorAll<HTMLButtonElement>(".equals");

console.log(digits);

//Add Query Selectors and return type HTML 
//to know what button has been clicked - Get and return individual digit elements
//let ts know the kind of element we are trying to get -  add the return type of the method <HTMLButtonElement>


const multButton = document.querySelector<HTMLButtonElement>(".operation__mult");
const DivButton = document.querySelector<HTMLButtonElement>(".operation__div");
const addButton = document.querySelector<HTMLButtonElement>(".operation__add");
const subButton = document.querySelector<HTMLButtonElement>(".operation__sub");

if (!button) {
    throw new Error ("issue with buttons");
    }
if (!digits) {
    throw new Error ("issue with digit button");
    }

if (!convert) {
    throw new Error ("issue with covert button")
}

const equalsButton = document.querySelector(".equals");

if (!equal){
    throw new Error ("issue with covert button")
}




const posToNegButton = document.querySelector(".convert__posNeg");
const decButton = document.querySelector(".convert__dec");
const percentButton = document.querySelector(".convert__percent");
const clearButton = document.querySelector(".clear");

const outputAnswer = document.getElementById("answer");
const outputEnteredDigits = document.getElementById("entered-digits");
const outputCalcInProess = document.getElementById("calc-in-progress");
// manage the event null is returned from the query selector
//use non-null assertion ! and throw an error 





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
//add event listeners to each individual digit button for the event they are clicked

    const handleDigits = (event: Event): void => {
        const thisDigit = parseInt((event.currentTarget as HTMLButtonElement).value, 10); //ensure that thisDigit is recognised a number not a string .value is accessessing one of the proporties (value) in the array (node list) of digits
        enteredDigits.push(thisDigit); // Push the number into enteredDigits array
        console.log(enteredDigits); // Output the updated array to console 
        if (outputEnteredDigits) {
            outputEnteredDigits.textContent = enteredDigits.join(" ");
        }
    };

    digits.forEach( (digit) => {
      digit.addEventListener('click', handleDigits);        
    }) ; 



//Declaring Arrays
let enteredDigits:number [] = [];  // Array to store entered digits
let numberInCalculation:number[] =[]; // array to store concatenated number in operation
let operatorsInCalculation:string[] =[]; //array to staore operators in calcualtion
let calculation:(number|string)[] = [];
let decimal:(number)[] =[];






 
 const handleConcatenation = (enteredDigits: number[]): number => {
     let concatenatedNumber = 0;
     let decimalPlace = decimal[0];
     if (typeof decimalPlace === 'number') {
         for (let index = decimalPlace; index < enteredDigits.length; index++) {
             concatenatedNumber += enteredDigits[index] * Math.pow(10, enteredDigits.length - index - 1);
         } 
     } else {
         for (let index = 0; index < enteredDigits.length; index++) {
             concatenatedNumber += enteredDigits[index] * Math.pow(10, enteredDigits.length - index - 1);
         }
     }
     return concatenatedNumber;
 };
 


 // Define decimalPlace outside the functions






const handlePercentageConversion =(event : Event) :void => {
    let concatenatedNumber = handleConcatenation(enteredDigits);
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

   const handleDecimals = (event : Event) : void => {
    decimal.push(enteredDigits.length);
    console.log("It's a decimal! Digits before the decimal point: " + decimal);
    if (outputEnteredDigits) {
        outputEnteredDigits.textContent = enteredDigits.join(" ") + ".";
    };
}

if (decButton) {
   decButton.addEventListener("click", handleDecimals);
};
 

//const handlePostoNegConversion = (event : Event) :void => {
 //   let concatenatedNumber = handleConcatenation(enteredDigits);
 //   let converted 
//} 

const handleMultiplication = (event: Event): void => {
    let concatenatedNumber: number = handleConcatenation(enteredDigits); // Call handleConcatenation function
    numberInCalculation.push(concatenatedNumber);
    operatorsInCalculation.push("x");
    calculation.push(concatenatedNumber);
    calculation.push("x");
    enteredDigits.length = 0; 
    console.log(numberInCalculation, operatorsInCalculation, enteredDigits);
    if (outputCalcInProess) {
        outputCalcInProess.textContent = calculation.join(" ");
    }
    if (outputEnteredDigits) {
        outputEnteredDigits.textContent = enteredDigits.join(" ");
    }
};


if (multButton) {
    multButton.addEventListener('click', handleMultiplication); 
    };




    
 


const handleDivision = (event: Event): void => {
    let concatenatedNumber: number = handleConcatenation(enteredDigits); // Call handleConcatenation function
    numberInCalculation.push(concatenatedNumber);
    operatorsInCalculation.push("/");
    calculation.push(concatenatedNumber);
    calculation.push("/");
    enteredDigits=[];    
    console.log(numberInCalculation, operatorsInCalculation, enteredDigits);
    if(outputCalcInProess) {outputCalcInProess.textContent = calculation.join(" ") };
    if(outputEnteredDigits) {outputEnteredDigits.textContent = enteredDigits.join(" ")};
    };

    if(DivButton) {
        DivButton.addEventListener("click", handleDivision);
    };


    const handleAddition = (event: Event): void => {
        let concatenatedNumber: number = handleConcatenation(enteredDigits); // Call handleConcatenation function
        numberInCalculation.push(concatenatedNumber);
        operatorsInCalculation.push("+");
        calculation.push(concatenatedNumber);
        calculation.push("+");
        enteredDigits=[]; 
        console.log(numberInCalculation, operatorsInCalculation, enteredDigits);
        if(outputCalcInProess) {outputCalcInProess.textContent = calculation.join(" ") };
        if(outputEnteredDigits) {outputEnteredDigits.textContent = enteredDigits.join(" ")};
        };

        if(addButton) {
            addButton.addEventListener("click", handleAddition);
        };

        const handleSubtraction = (event: Event): void => {
            let concatenatedNumber: number = handleConcatenation(enteredDigits); // Call handleConcatenation function
            numberInCalculation.push(concatenatedNumber);
            operatorsInCalculation.push("-");
            calculation.push(concatenatedNumber);
            calculation.push("-")
            enteredDigits=[];    
            console.log(numberInCalculation, operatorsInCalculation, enteredDigits);
            if(outputCalcInProess) {outputCalcInProess.textContent = calculation.join(" ") };
            if(outputEnteredDigits) {outputEnteredDigits.textContent = enteredDigits.join(" ")};
            };

            if(subButton) {
                subButton.addEventListener("click", handleSubtraction);
        };

        const handleEquals = (event: Event): void => {
            let concatenatedNumber: number = handleConcatenation(enteredDigits); // Call handleConcatenation function
            numberInCalculation.push(concatenatedNumber);
            calculation.push(concatenatedNumber);
            if(outputCalcInProess) {outputCalcInProess.textContent = calculation.join(" ") };
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
                if(outputAnswer) {outputAnswer.textContent = answer.toString() };
            };

            if(equalsButton) {
                equalsButton.addEventListener("click" , handleEquals); 
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



//if(decButton) {
//    decButton.addEventListener("click", handleDecimal);
//}



//if (operation) {
 //operation.addEventListener('click', registerNumber); 

//resavingincaseilost anything stuck in a loop

        //const handleButtonStyleChange = (event: Event) : void  => {
 //   if(button) {
 //       const thisbutton = event.currentTarget as HTMLButtonElement; // Get the button element that triggered the event
  //      thisbutton.style.backgroundColor = 'blue'; // Change the background color of the button
  //      thisbutton.style.color = 'white'; // Change the text color of the button
  //  }
   // 

    //array to combine numbers in calc and operators in calculation
//let isADecimal = false;

 

// handle user clicks an operation button + - X /
//Concatenate digits 
//move concatinated number t0 array numberInCalculation
//push operator into operations in calculation depending on operator chosen
//clear enteredDigit array
//update output displays ; outputenteredDigits and outputcalculation in process


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