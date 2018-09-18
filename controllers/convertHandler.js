class ConvertHandler {

  constructor () {

  }

  getNum (input) {
    let numeralString = '';
    let charRegex = /[a-z]+$/i;
    let indexOfChar = input.search(charRegex);
    if (indexOfChar >= 0) {
      numeralString += input.slice(0, indexOfChar);
    } else {
      numeralString += input;
    }
    let numRegex = /^(\d+)?(\.|\/)?(\d+)?(\.|\/)?(\d+)?/;
    let found = numRegex.exec(numeralString);
    let a, b, result;
    a = Number(found[1]);
    b = 1;
    // If not found, test whether there's any non-word character
    if (!found[0]) {
      numRegex = /^\W+/;
      if (numRegex.test(input)) { result = NaN; }
      // If not, default to 1
      else { result = 1; }
    }
    if ((found[2] === '.' && found[4] === '.') || (found[2] === '/' && found[4] === '/')) {
      result = NaN;
    } else if (found[2] === '.') {
      a = Number(found[1] + '.' + found[3]);
      if (found[4] === '/' && found[5]) {
        b = Number(found[5]);
      } else {
        b = 1;
      }
    } else if (found[2] === '/') {
      a = Number(found[1]);
      if (found[4] === '.' && found[5]) {
        b = Number(found[3] + '.' + found[5]);
      } else if (found[5]) {
        b = Number(found[5]);
      } else {
        b = Number(found[3]);
      }
    }
    if (result === undefined) {
      result = a / b;
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
