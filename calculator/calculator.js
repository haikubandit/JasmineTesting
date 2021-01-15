window.addEventListener('DOMContentLoaded', function() {
	const form = document.getElementById('calc-form');
	if (form) {
		setupIntialValues();
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			update();
		});
	}
});

function getCurrentUIValues() {
	return {
		amount: +document.getElementById('loan-amount').value,
		years: +document.getElementById('loan-years').value,
		rate: +document.getElementById('loan-rate').value
	};
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
	document.getElementById('loan-amount').value = 20000;
	document.getElementById('loan-years').value = 30;
	document.getElementById('loan-rate').value = 0.4;
	update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
	updateMonthly(calculateMonthlyPayment(getCurrentUIValues()));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
	let monthlyRate;
	let principle = values.amount;
	let periodicInterest = values.rate / 12;
	let payments = values.years * 12;

	monthlyRate = principle * periodicInterest / (1 - (1 + periodicInterest) ** -payments);
	return (Math.round(monthlyRate * 100) / 100).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
	document.getElementById('monthly-payment').innerHTML = monthly;
}
