const chai = require('chai');
const expect = chai.expect;
const sanitize = require('../controllers/sanitize');

describe('Input Sanitizier', function() {

  it('should sanitize inputs', function() {
    let input = '1 L';
    let result = sanitize(input);
    expect(result).to.equal('1l');
  });
});
