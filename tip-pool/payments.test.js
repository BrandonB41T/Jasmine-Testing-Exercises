describe('Payments tests', function () {
    beforeEach(function () {
        billAmtInput.value = 100;
        tipAmtInput.value = 17;
    })

    it('should add an object to allPayments on submitPaymentInfo()', function () {
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toBe(1);

        billAmtInput.value = 32;
        tipAmtInput.value = 8;
        submitPaymentInfo();
        expect(Object.keys(allPayments).length).toBe(2);
    })

    it('should not accept negative values on createCurPayment()', function() {
        billAmtInput.value = 10;
        tipAmtInput.value = -14;
        expect(createCurPayment()).toBe(undefined);
    })

    it('should append new table row to payment table on appendPaymentTable()', function () {
        submitPaymentInfo(); // appendPaymentTable() nested inside
        expect(paymentTbody.children.length).toEqual(1);

        billAmtInput.value = 19;
        tipAmtInput.value = 0;
        submitPaymentInfo();
        expect(paymentTbody.children.length).toEqual(2);
    })

    it('should update summaryTds on updateSummary()', function () {
        expect(summaryTds[0].innerText).toBe('');
        expect(summaryTds[1].innerText).toBe('');
        expect(summaryTds[2].innerText).toBe('');

        submitPaymentInfo();

        expect(summaryTds[0].innerText).not.toBe('');
        expect(summaryTds[1].innerText).not.toBe('');
        expect(summaryTds[2].innerText).not.toBe('');
    })

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML= '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    })
})