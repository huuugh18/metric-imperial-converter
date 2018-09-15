/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

var chai = require('chai');
var assert = chai.assert;
var ConvertHandler = require('../controllers/convertHandler.js');

var convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  suite('Function convertHandler.getNum(input)', function() {

    test('Whole number input', function(done) {
      var input = '32L';
      let result = convertHandler.getNum(input);
      assert.equal(result, 32);
      done();
    });

    test('Decimal Input', function(done) {
      let input = '1.3mi';
      let result = convertHandler.getNum(input);
      assert.equal(result, 1.3);
      done();
    });

    test('Fractional Input', function(done) {
      let input = '1/4Kg';
      let result = convertHandler.getNum(input);
      assert.equal(result, 0.25);
      done();
    });

    test('Fractional Input w/ Decimal', function(done) {
      let input = '5/6.5lbs';
      let result = convertHandler.getNum(input);
      assert.equal(result, 0.76923);
      done();
    });

    test('Invalid Input (double fraction)', function(done) {
      let input = '5/2/3Km';
      let result = convertHandler.getNum(input);
      assert.equal(result, 'invalid number');
      done();
    });

    test('No Numerical Input', function(done) {
      let input = 'Km';
      let result = convertHandler.getNum(input);
      assert.equal(result, 1);
      done();
    });

  });

  suite('Function convertHandler.getUnit(input)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max)) + 1;
      }
      let input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      input.forEach(function(i) {
        let input = String(getRandomInt(100)) + i;
        let result = convertHandler.getUnit(input);
        assert.equal(result, i.toLowerCase());
      });
      done();
    });

    test('Unknown Unit Input', function(done) {
      let input = '100X';
      let result = convertHandler.getUnit(input);
      assert.equal(result, 'invalid unit');
      done();
    });

  });

  suite('Function convertHandler.getReturnUnit(initUnit)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg'];
      let expected = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        let result = convertHandler.getReturnUnit(ele);
        assert.equal(result, expected[i]);
      });
    });

  });

  suite('Function convertHandler.spellOutUnit(unit)', function() {

    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg'];
      let expected = ['gallons','liters','miles','kilometers','pounds','kilograms'];
      input.forEach(function(ele, i) {
        let result = convertHandler.spellOutUnit(ele);
        assert.equal(result, expected[i]);
      });
      done();
    });

  });

  suite('Function convertHandler.convert(num, unit)', function() {

    test('Gal to L', function(done) {
      let input = [5, 'gal'];
      let expected = 18.9271;
      let result = convertHandler.convert(input[0], input[1]);
      assert.approximately(result, expected, 0.1); //0.1 tolerance
      done();
    });

    test('L to Gal', function(done) {
      let input = [10, 'L'];
      let expected = 2.64172;
      let result = convertHandler.convert(input[0], input[1]);
      assert.approximately(result, expected, 0.1); //0.1 tolerance
      done();
    });

    test('Mi to Km', function(done) {
      let input = [10, 'L'];
      let expected = 2.64172;
      let result = convertHandler.convert(input[0], input[1]);
      assert.approximately(result, expected, 0.1); //0.1 tolerance
      done();
    });

    test('Km to Mi', function(done) {
      let input = [10, 'L'];
      let expected = 2.64172;
      let result = convertHandler.convert(input[0], input[1]);
      assert.approximately(result, expected, 0.1); //0.1 tolerance
      done();
    });

    test('Lbs to Kg', function(done) {
      let input = [10, 'L'];
      let expected = 2.64172;
      let result = convertHandler.convert(input[0], input[1]);
      assert.approximately(result, expected, 0.1); //0.1 tolerance
      done();
    });

    test('Kg to Lbs', function(done) {
      let input = [10, 'L'];
      let expected = 2.64172;
      let result = convertHandler.convert(input[0], input[1]);
      assert.approximately(result, expected, 0.1); //0.1 tolerance
      done();
    });

  });

  suite('Function convertHandler.getNum(input)', function() {

    test('Decimal Input w/ Fraction', function(done) {
      let input = '5.6/5lbs';
      let result = convertHandler.getNum(input);
      assert.equal(result, 1.12);
      done();
    });

    test('Invalid Input (multiple dots)', function(done) {
      let input = '5.2.3Km';
      let result = convertHandler.getNum(input);
      assert.equal(result, 'invalid number');
      done();
    });

    test('No Numerical Input (non-alphanumerical char)', function(done) {
      let input = '-Km';
      let result = convertHandler.getNum(input);
      assert.equal(result, 'invalid number');
      done();
    });

  });

  suite('Function convertHandler.getString(initNum, initUnit, returnNum, returnUnit)', function() {

    test('Formatted output string', function() {
      let initNum = 300;
      let initUnit = 'Kg';
      let returnNum = 661.38732;
      let returnUnit = 'lbs';

      console.log(`\tResult string:
        ${convertHandler.getString(initNum, initUnit, returnNum, returnUnit)}`);
    });
  });

});
