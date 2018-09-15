const arrayWrap = require('arraywrap');

function sanitize (input) {

  // Guard against multiple inputs converting all inputs to arrays
  let inputArray = arrayWrap(input);
  // Get only the first input, ignoring the rest
  let sanInput = inputArray[0] ? inputArray[0] : '';

  sanInput = sanInput.replace(/\s+/g, '');

  return sanInput.toLowerCase();
}
module.exports = sanitize;
