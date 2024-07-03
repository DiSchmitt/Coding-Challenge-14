//Task 1: Create this Module
//Task 5: The main module should import functions from the other modules
//and provide a simple user interface (UI) in the HTML document. 
//This UI should include input fields for necessary parameters like principal, rate, time, and a calculate button for each calculation type.
import * as calculateInterestRate from 'https://raw.githubusercontent.com/DiSchmitt/Coding-Challenge-14/main/js/interestRate.js';
import * as calculateLoanPayment from'https://raw.githubusercontent.com/DiSchmitt/Coding-Challenge-14/main/js/loanPayment.js';
import * as calculateInvestmentReturn from 'https://raw.githubusercontent.com/DiSchmitt/Coding-Challenge-14/main/js/investmentReturn.js';

function toggleCalculationFields() {
    var typeOfCalc = document.getElementById('typeOfCalc').value;
    
    // Hide all calculation-specific divs
    document.getElementById('interestFields').style.display = 'none';
    document.getElementById('investmentFields').style.display = 'none';
    document.getElementById('loanFields').style.display = 'none';
    
    // Show the relevant div based on the selected typeOfCalc
    switch (typeOfCalc) {
        case 'interest':
            document.getElementById('interestFields').style.display = 'block';
            break;
        case 'investment':
            document.getElementById('investmentFields').style.display = 'block';
            break;
        case 'loan':
            document.getElementById('loanFields').style.display = 'block';
            break;
        default:
            break;
    }
}

// Function to perform calculation based on selected type
function performCalculation(event) {
    event.preventDefault(); // Prevent form submission for now
    
    var P = parseFloat(document.getElementById('Principal').value);
    var r = parseFloat(document.getElementById('Rate').value);
    var t = parseFloat(document.getElementById('Time').value);
    var typeOfCalc = document.getElementById('typeOfCalc').value;
    
    var result;
    
    switch (typeOfCalc) {
        case 'interest':
            result = interestRate(P, r, t);
            break;
        case 'investment':
            result = investmentReturn(P, r, t); // Adjust parameters as per your calculation function
            break;
        case 'loan':
            result = loanPayment(P, r, t); // Adjust parameters as per your calculation function
            break;
        default:
            result = 'Invalid Calculation Type';
            break;
    }
    
    document.getElementById('result').innerText = `Result: ${result}`;
}

// Attach event listener to form submission
document.getElementById('calcForm').addEventListener('submit', performCalculation);