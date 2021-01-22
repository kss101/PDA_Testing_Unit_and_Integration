var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  });

  // test for calculator.add()
  it('it can add 1 to 4 and get 5', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5);
  });

  // test for calculator.subtract()
  it('it can subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  });

  // test for calculator.multiply()
  it('it can multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  });

  // test for calculator.divide()
  it('it can divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  });

  // test for calculator.numberClick()
  it('it can concatenate multiple number button clicks... accept number 149 as input', function(){
    calculator.previousTotal = 0;
    calculator.numberClick(1);
    calculator.numberClick(4);
    calculator.numberClick(9);
    assert.strictEqual(calculator.runningTotal, 149);
    assert.strictEqual(calculator.newTotal, false);
  });

  // test for calculator.operatorClick()
  it('it can chain multple operations together... 2 + * = and get 16', function(){
    calculator.previousTotal = 0;
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.operatorClick('*');
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 16);
  });

  // test for calculator.clearClick()
  it('it can clear the running total without affecting calculation... 5 + 3 (clear) 4 and get 9', function(){
    calculator.previousTotal = 0;
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 9);
  });
});
