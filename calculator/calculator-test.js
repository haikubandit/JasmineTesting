it('should calculate the monthly rate correctly', function() {
	// ...
	expect(calculateMonthlyPayment()).toBeInstanceOf(String);
	const values = {
		amount: 10000,
		years: 8,
		rate: 5.8
	};
	expect(calculateMonthlyPayment(values)).toEqual('130.44');
	expect(Math.floor(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 4.5 }))).toEqual(103);
	expect(Math.floor(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 4.5 }))).toEqual(103);
});

it('should return a result with 2 decimal places', function() {
	// ..
});

/// etc
// expect(calculateMonthlyPayment(2000)).toEqual(2000);
// expect(calculateMonthlyPayment(Math.floor({ amount: 20000, years: 30, rate: 0.4 }))).toEqual(666);
// expect(calculateMonthlyPayment(Math.floor({ amount: 20000, years: 30, rate: 0.4 })).toEqual(666);

// 	expect(Math.floor(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 4.5 }))).toEqual(103),
// 	expect(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 4.5 })).toEqual(103.64),

// expect(calculateMonthlyPayment({ amount: 10000, years: 10, rate: 4.5 })).toBeInstanceOf(String);
