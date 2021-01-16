describe('Payments test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		// curPayment = { billAmt: 100, tipAmt: 20, tipPercent: 20 };
		billAmtInput.value = 100;
		tipAmtInput.value = 20;
		// createCurPayment();
	});

	it('should return undefined with negative or empty inputs & positive billAmt is required but tip can be 0', function() {
		//...
		expect(createCurPayment()).toEqual({ billAmt: '100', tipAmt: '20', tipPercent: 20 });

		billAmtInput.value = -100;
		tipAmtInput.value = 0;
		expect(createCurPayment()).toEqual(undefined);
	});

	it('should add a new payment to allPayments on submitPaymentInfo()', function() {
		//...
		submitPaymentInfo();

		expect(Object.keys(allPayments).length).toEqual(1);
		expect(allPayments['payment' + paymentId]).toEqual({ billAmt: '100', tipAmt: '20', tipPercent: 20 });
	});

	it('should create table row element and pass to appendTd with input value', function() {
		//...
		curPayment = { billAmt: '100', tipAmt: '20', tipPercent: 20 };
		appendPaymentTable(curPayment);

		expect(paymentTbody.querySelectorAll('tr').length).toEqual(1);
		expect(paymentTbody.querySelectorAll('tr td')[0].innerText).toEqual('$100');
		expect(paymentTbody.querySelectorAll('tr td')[1].innerText).toEqual('$20');
		expect(paymentTbody.querySelectorAll('tr td')[2].innerText).toEqual('20%');
	});

	it('should create table row element and pass to appendTd with calculated sum of all payment', function() {
		//...
		allPayments = {
			payment1: { billAmt: '100', tipAmt: '20', tipPercent: 20 },
			payment2: { billAmt: '50', tipAmt: '5', tipPercent: 10 }
		};
		updateSummary();

		expect(summaryTds[0].innerHTML).toEqual('$150');
		expect(summaryTds[1].innerHTML).toEqual('$25');
		expect(summaryTds[2].innerHTML).toEqual('15%');
	});

	afterEach(function() {
		// teardown logic
		billAmtInput.value = '';
		tipAmtInput.value = '';
		allPayments = {};
		paymentTbody.innerHTML = '';
	});
});
