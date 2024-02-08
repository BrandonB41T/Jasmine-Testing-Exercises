describe("calculateMonthlyPayment() tests", function() {
  it('should calculate the monthly rate correctly', function () {
    expect(calculateMonthlyPayment(100, 3, .05)).toEqual("3.00");
    expect(calculateMonthlyPayment(500, 1, .06)).toEqual("43.03");
  });
  
  
  it("should return a result with 2 decimal places", function() {
    let decimalOne = calculateMonthlyPayment(100, 3, .05).split('.');
    expect(decimalOne.length).toBe(2);

    let decimalTwo = calculateMonthlyPayment(100, 3, .05).split('.');
    expect(decimalTwo.length).toBe(2);
  });
  
  /// etc
})

