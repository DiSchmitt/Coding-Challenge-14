//Task 1: Create this Module
//Task 5: The main module should import functions from the other modules
import * as interestRate from "https://raw.githubusercontent.com/DiSchmitt/Coding-Challenge-14/main/js/interestRate.js";
import * as loanPayment from "https://raw.githubusercontent.com/DiSchmitt/Coding-Challenge-14/main/js/loanPayment.js";
import * as dividend from "https://raw.githubusercontent.com/DiSchmitt/Coding-Challenge-14/main/js/investmentReturn.js";

window.performCalculation = function () {
  const Rate = parseFloat(document.getElementById("Rate").value);
  const Principal = parseFloat(document.getElementById("Principal").value);
  const Time = parseFloat(document.getElementById("Time").value);
  const Periods = parseFloat(document.getElementById("Periods").value);
  const operation = document.getElementById("operation").value;

  let result;

  switch (operation) {
    case "cInterestRate":
      result = interestRate.cInterestRate(Principal, Rate, Time);
      break;
    case "cLoanPayment":
      result = loanPayment.cLoanPayment(Principal, Periods, Rate);
      break;
    case "cDividend":
      result = dividend.cDividend(Principal, Rate, Periods, Time);
      break;
    default:
      result = "Invalid operation";
  }

  document.getElementById("result").innerText = `Result: ${result}`;
};
