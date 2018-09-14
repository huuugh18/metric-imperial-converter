class ConvertHandler {

  constructor () {

  }

  getNum (input) {
    let regex = /^(\d+)?(\.|\/)?(\d+)?(\.|\/)?(\d+)?/;
    let found = regex.exec(input);
    let a, b, result;
    a = Number(found[1]);
    b = 1;
    // If not found, test whether there's any non-word character
    if (!found[0]) {
      regex = /^\W+/;
      if (regex.test(input)) { result = NaN; }
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
    let result;

    return result;
  }

  getReturnUnit (initUnit) {
    let result;

    return result;
  }

  spellOutUnit (unit) {
    let result;

    return result;
  }

  convert (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = Number(initNum);
    let numberIsValid = true;
    let unitIsValid = true;
    if (isNaN(result)) {
      numberIsValid = false;
    }

    switch (initUnit) {
      case 'gal':
        result *= galToL;
        break;
      case 'L':
        result /= galToL;
        break;
      case 'lbs':
        result *= lbsToKg;
        break;
      case 'Kg':
        result /= lbsToKg;
        break;
      case 'mi':
        result *= miToKm;
        break;
      case 'Km':
        result /= miToKm;
        break;
      default:
        unitIsValid = false;
    }

    if (!numberIsValid && !unitIsValid) {
      throw new Error('invalid number and unit');
    } else if (!numberIsValid) {
      throw new Error('invalid number');
    } else if (!unitIsValid) {
      throw new Error('invalid unit');
    }

    return Number(result.toFixed(5));
  }

  getString (initNum, initUnit, returnNum, returnUnit) {
    let result;

    return result;
  }

  }



module.exports = ConvertHandler;
