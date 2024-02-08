window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let loanAmount = document.querySelector("#loan-amount");
  let loanYears = document.querySelector("#loan-years");
  let loanRate = document.querySelector("#loan-rate");

  loanAmount.value = "0";
  loanYears.value = "0";
  loanRate.value = ".00";
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let loanAmount = document.querySelector("#loan-amount");
  let loanYears = document.querySelector("#loan-years");
  let loanRate = document.querySelector("#loan-rate");

  const amount = loanAmount.value;
  const years = loanYears.value;
  const rate = loanRate.value;
  
  if (amount === ''  ||  amount === '0') return;
  if (years === ''  ||  years === '0') return;
  if (rate === ''  ||  rate === '.00') return;

  let monthlyPayment = calculateMonthlyPayment(Number(amount), Number(years), Number(rate));

  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(amt, years, rate) {
  let p = amt;
  let i = rate/12;
  let n = years * 12;
  
  let monthlyPayment = (p * i) / (1 - (1 + i)**(-n));
  let simplified = Math.round(monthlyPayment * 100) / 100;
  return simplified.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  // let charge = monthly.toString();
  let printMonthly = document.querySelector("#monthly-payment");
  printMonthly.innerHTML = monthly;
}
