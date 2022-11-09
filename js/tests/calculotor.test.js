const test = require("tape");
const Calculator = require("../calculator");
const Authorizer = require("../authorizer");

test("should throw when not authorized", (t) => {
  // TODO: write a test that fails due to the bug in
  //Given
  const numerator = 12;
  const denominator = 6;
  const expected = 2;
  const autorizer = new Authorizer();
  jest.spyOn(autorizer, "authorize").mockReturnValue(true);
  const calculator = new Calculator(autorizer);
  //When
  const result = calculator.divide(numerator, denominator);

  //Then
  jest.expect(result === expected);
});
