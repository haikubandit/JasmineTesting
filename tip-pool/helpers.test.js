describe('Helper function tests (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		allPayments = {
			payment1: { billAmt: '100', tipAmt: '20', tipPercent: 20 },
			payment2: { billAmt: '50', tipAmt: '5', tipPercent: 10 }
		};
	});

	it("should accept 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects", function() {
		//...
		expect(sumPaymentTotal('billAmt')).toEqual(150);
		expect(sumPaymentTotal('tipAmt')).toEqual(25);
		expect(sumPaymentTotal('tipPercent')).toEqual(30);
	});

	it('should convert the bill and tip amount into a tip percent', function() {
		//...
		let payment1 = allPayments.payment1;
		let payment2 = allPayments.payment2;

		expect(calculateTipPercent(payment1.billAmt, payment1.tipAmt)).toEqual(20);
		expect(calculateTipPercent(payment2.billAmt, payment2.tipAmt)).toEqual(10);
	});

	it('should append a newly created td element from the value', function() {
		//...
		let newTr = document.createElement('tr');
		newTr.id = 'payment1';
		value1 = 20;
		appendTd(newTr, value1);
		console.log(newTr.querySelector('td').innerText);

		expect(newTr.children.length).toEqual(1);
		expect(newTr.querySelector('td').innerText).toEqual('20');
	});

	afterEach(function() {
		// teardown logic
		allPayments = {};
	});
});
