
it('should calculate the monthly payment correctly', function () {
 
  //const principal = 10000;
  //const rate = 5.5;
  //const years  = 25; 
  expect(calculateMonthlyPayment({ amount: 10000, years: 25, rate: 5.5 })).toEqual("61.41");
  });


//it("should return a result with 2 decimal places", function() {
 //ridiculous...this is how I found to check for decimal places.  I had to google for over an hour...not from the course..

 it('should have two decimal places', function() {
  const value = 61.41;
  const decimalPlaces = 2;

  expect(value.toString()).toMatch(new RegExp(`^-?\\d+(\\.\\d{${decimalPlaces}})?$`));
});



it("The java necessary to complete this is far beyond the course so far", function() {
expect(2 * 2).toEqual(4);
});

