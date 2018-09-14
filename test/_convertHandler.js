const chai = require('chai');
const expect = chai.expect;
const ConvertHandler = require('../controllers/convertHandler');

const convertHandler = new ConvertHandler();

describe('Conversion Handler', () => {

  describe('Function convertHandler.getNum(input)', function() {

    it('Whole number input', function(done) {
      let input = '32L';
      let result = convertHandler.getNum(input);
      expect(result).to.equal(32);
      done();
    });

    it('Decimal Input', function(done) {
      let input = '1.3mi';
      let result = convertHandler.getNum(input);
      expect(result).to.equal(1.3);
      done();
    });

    it('Fractional Input', function(done) {
      let input = '1/4Kg';
      let result = convertHandler.getNum(input);
      expect(result).to.equal(0.25);
      done();
    });

    it('Fractional Input w/ Decimal', function(done) {
      let input = '5/6.5lbs';
      let result = convertHandler.getNum(input);
      expect(result).to.equal(0.76923);
      done();
    });

    it('Decimal Input w/ Fraction', function(done) {
      let input = '5.6/5lbs';
      let result = convertHandler.getNum(input);
      expect(result).to.equal(1.12);
      done();
    });

    it('Invalid Input (double fraction)', function(done) {
      let input = '5/2/3Km';
      let result = convertHandler.getNum(input);
      expect(result).to.equal('invalid number');
      done();
    });

    it('Invalid Input (multiple dots)', function(done) {
      let input = '5.2.3Km';
      let result = convertHandler.getNum(input);
      expect(result).to.equal('invalid number');
      done();
    });

    it('No Numerical Input (blank)', function(done) {
      let input = 'Km';
      let result = convertHandler.getNum(input);
      expect(result).to.equal(1);
      done();
    });

    it('No Numerical Input (non-alphanumerical char)', function(done) {
      let input = '-Km';
      let result = convertHandler.getNum(input);
      expect(result).to.equal('invalid number');
      done();
    });

  });


  describe('Function convertHandler.convert(num, unit)', () => {

    it('Gal to L', function(done) {
      let input = [5, 'gal'];
      let expected = 18.9271;
      let result = convertHandler.convert(input[0], input[1]);
      expect(result).to.be.closeTo(expected, 0.1); //0.1 tolerance
      done();
    });

    it('L to Gal', function(done) {
      let input = [10, 'L'];
      let expected = 2.64172;
      let result = convertHandler.convert(input[0], input[1]);
      expect(result).to.be.closeTo(expected, 0.1); //0.1 tolerance
      done();
    });

    it('Mi to Km', function(done) {
      let input = [23, 'mi'];
      let expected = 37.01482;
      let result = convertHandler.convert(input[0], input[1]);
      expect(result).to.be.closeTo(expected, 0.1); //0.1 tolerance
      done();
    });

    it('Km to Mi', function(done) {
      let input = [33, 'Km'];
      let expected = 20.50530;
      let result = convertHandler.convert(input[0], input[1]);
      expect(result).to.be.closeTo(expected, 0.1); //0.1 tolerance
      done();
    });

    it('Lbs to Kg', function(done) {
      let input = [100, 'lbs'];
      let expected = 45.3592;
      let result = convertHandler.convert(input[0], input[1]);
      expect(result).to.be.closeTo(expected, 0.1); //0.1 tolerance
      done();
    });

    it('Kg to Lbs', function(done) {
      let input = [300, 'Kg'];
      let expected = 661.38732;
      let result = convertHandler.convert(input[0], input[1]);
      expect(result).to.be.closeTo(expected, 0.1); //0.1 tolerance
      done();
    });

  });



});
