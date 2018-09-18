class ConvertHandler {

  constructor () {

  }

  getNum (input) {
    let result;
    let numeralString = '';
    // Split input at the unit part
    let charRegex = /[a-z]+$/i;
    let indexOfChar = input.search(charRegex);
    if (indexOfChar >= 0) {
      numeralString += input.slice(0, indexOfChar);
    } else {
      numeralString += input;
    }
    // Look for valid numbers
    let numRegex = /^([0-9]+(\.[0-9]+)?)(\/([0-9]+\.[0-9]+|[1-9]+))?$/;
    let found = numRegex.exec(numeralString);
    if (found !== null) {
      let a = Number(found[1]);
      let b = found[4] ? Number(found[4]) : 1;
      result = a / b;
    } else {
      // If nothing found, check for non-number input
      let nonRegex = /[^0-9]+/;
      if (nonRegex.test(numeralString)) { result = NaN; }
      else { result = 1; }
    }
    if (isNaN(result)) { return 'invalid number'; }
    else { return Number(result.toFixed(5)); }
  }

  getUnit (input) {
    let numRegex = /.*(gal|(?<=[^a-zA-Z])l|mi|km|lbs|kg)$/i;
    let found = numRegex.exec(input);
    if (!found) { return 'invalid unit'; }
    let result = found[1];
    return result.toLowerCase();
  }

  getReturnUnit (initUnit) {
    let result;
    switch (initUnit.toLowerCase()) {
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'kg':
        result = 'lbs';
        break;
      default:
        result = 'invalid unit';
    }
    return result;
  }

  spellOutUnit (unit) {
    let result;
    switch (unit.toLowerCase()) {
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      default:
        result = 'invalid unit';
    }
    return result;
  }

  convert (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = Number(initNum);

    switch (initUnit.toLowerCase()) {
      case 'gal':
        result *= galToL;
        break;
      case 'l':
        result /= galToL;
        break;
      case 'lbs':
        result *= lbsToKg;
        break;
      case 'kg':
        result /= lbsToKg;
        break;
      case 'mi':
        result *= miToKm;
        break;
      case 'km':
        result /= miToKm;
        break;
      default:
        result = NaN;
    }
    if (isNaN(result)) { return 'invalid number'; }
    return Number(result.toFixed(5));
  }

  getString (initNum, initUnit, returnNum, returnUnit) {
    let result;
    if (initNum === 'invalid number' && initUnit === 'invalid unit') {
      result = 'invalid number and unit';
    } else if (initNum === 'invalid number') {
      result = 'invalid number';
    } else if (initUnit === 'invalid unit') {
      result = 'invalid unit';
    } else {
      result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    }
    return result;
  }

}
module.exports = ConvertHandler;
