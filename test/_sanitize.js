const chai = require('chai');
const expect = chai.expect;
const sanitize = require('../controllers/sanitize');

describe('Input Sanitizier', function() {

  it('removes spaces between number and unit', function() {
    let input = '1 L';
    let result = sanitize(input);
    expect(result).to.equal('1l');
  });

  it('ignores query arrays', function() {
    let input = ['1 KG', '1 mi', 'ABCD'];
    let result = sanitize(input);
    expect(result).to.equal('1kg');
  });

  it('returns a blank string if the input is empty', function() {
    let input = null;
    let result = sanitize(input);
    expect(result).to.equal('');
  });

  it('converts input strings to lower case', function() {
    let input = 'ABCD';
    let result = sanitize(input);
    expect(result).to.equal('abcd');
  });

});
