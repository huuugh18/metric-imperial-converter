const chai = require('chai');
const expect = chai.expect;
const ConvertHandler = require('../controllers/convertHandler');

const convertHandler = new ConvertHandler();

describe('Conversion Handler', () => {


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
