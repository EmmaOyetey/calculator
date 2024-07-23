# Calculator Project
This project is a simple calculator application that can handle multiple numbers and perform basic arithmetic operations (+, -, x, /) on any length of numbers. Additionally, it can convert a number to a percentage. The project is built using Vite, TypeScript, and SCSS, and it follows best practices in coding and design.

## Features
**Arithmetic Operations:** Perform addition, subtraction, multiplication, and division on any length of numbers.                   
**Percentage Conversion:** Convert a number to its percentage value.              
**User Interface:** Intuitive and user-friendly interface designed with responsive grids.            
**Console Logging:** The arrays used in calculations are logged to the console for debugging and learning purposes.                 

## Exploring the Code
The calculator functionality is centered around four main arrays, which are crucial for the operations:

**enteredDigits:** number[] = []; // Array to store entered digits.                      
**numberInCalculation:** number[] = []; // Array to store concatenated numbers in operation.                 
**operatorsInCalculation:** string[] = []; // Array to store operators in calculation.                
**calculation:** (number | string)[] = []; // Array to store the entirety of the calculation.                          

These arrays are logged to the console as calculations are performed, providing insights into the current state of the operation.

## Usage                                   
Interact with the calculator using the digit and operation buttons. The following buttons are available:                                                       
- **Digit Buttons:** 0-9                                           
- **Operation Buttons:** +, -, x, /                                 
- **Conversion Buttons:** %, +/-, .                             
- **Clear Button:** C                           
- **Equals Button:** =                                     
The calculator displays the entered digits, the ongoing calculation, and the final answer.                            

## Tech Stack      
**Vite:** Fast and modern build tool for development.                                         
**TypeScript:** Provides static typing for better code quality and maintainability.                             
**SCSS:** For modular and maintainable CSS.                        
**HTML:** For the structure of the web application.                             

## Key Principles and Techniques
**Event Handling:** The application uses event listeners to handle button clicks and perform corresponding actions.             
**Array Manipulation:** Arrays are used to manage digits, operators, and the entire calculation process.                 
**Responsive Design:** The layout uses CSS Grid for a responsive and flexible design.                      
**SCSS Grid Usage** The calculator's layout is designed using CSS Grid, providing a responsive and flexible interface:               

          .buttons-container {
            max-width: 100%;
            display: grid;
            grid-gap: 7px; 
            grid-template-columns: repeat(4, 1fr); 
            grid-template-rows: repeat(5, 1fr); 
            grid-template-areas:
                "clear posNeg percent div"
                "digit__7 digit__8 digit__9 mult"
                "digit__4 digit__5 digit__6 addsign"
                "digit__1 digit__2 digit__3 subsign"
                "digit__0 digit__0 decPoint equals"; 
          }
**Future Developments**
The functionality for converting a number into a decimal or between negative and positive.
