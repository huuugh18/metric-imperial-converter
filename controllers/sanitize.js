const arrayWrap = require('arraywrap');

function sanitize (input) {
  // Convert all inputs to arrays
  let inputArray = arrayWrap(input);
  // Get only the first item, ignoring the rest
  let sanInput = inputArray[0] ? inputArray[0] : '';
  // Remove spaces
  sanInput = sanInput.replace(/\s+/g, '');
  return sanInput.toLowerCase();
}
module.exports = sanitize;
