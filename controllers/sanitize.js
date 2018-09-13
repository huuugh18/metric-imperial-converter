const arrayWrap = require('arraywrap');

function sanitize (input) {

  // Guard against multiple inputs converting all inputs to arrays
  let inputArray = arrayWrap(input);
  // Get only the first input, ignoring the rest
  let sanInput = inputArray[0] ? inputArray[0] : '';

  return sanInput;
}
module.exports = sanitize;
