describe("Helper function tests", function() {
    beforeEach(function() {
        billAmtInput.value = 20;
        tipAmtInput.value = 0;
        submitPaymentInfo();
    })

    it("should not generate a value of less than 0 on sumPaymentTotal()", function() {
        expect(Number(sumPaymentTotal('tipAmt'))).toBeGreaterThanOrEqual(0);
    })

    it("should provide a percentage for a single payment on calculateTipPercent()", function() {
        expect(calculateTipPercent(100, 25)).toBe(25);
        expect(calculateTipPercent(100, 33)).toBe(33);
        expect(calculateTipPercent(100, 7)).toBe(7);
    })

    it("should create new td element on appendTd()", function () {
        let tr = document.createElement('tr');

        appendTd(tr, "new td");

        expect(tr.innerText).toEqual("new td");
    })



    it('should append delete button to parent tr on appendDeleteButton()', function () {
        serverNameInput.value = 'John';
        submitServerInfo();
        let tr = document.querySelectorAll("#serverTable tbody tr");
        expect(tr[0].innerText).toContain("X");
    })

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentId = 0;
        allPayments = {};
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allServers = {};
        serverId = 0;
    })
})