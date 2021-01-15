it('should calculate the monthly rate correctly', function() {
	// ...
	const values = {
		amount: 10000,
		years: 8,
		rate: 5.8
	};
	expect(calculateMonthlyPayment(values)).toBeInstanceOf(String);
	expect(calculateMonthlyPayment(values)).toEqual('130.44');
	expect(Math.floor(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 4.5 }))).toEqual(103);
	expect(Math.floor(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 4.5 }))).toEqual(103);
});

it('should return a result with 2 decimal places', function() {
	// ..
	const values = {
		amount: 10043,
		years: 8,
		rate: 5.8
	};
	expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

/// etc
