class ConvertHandler {

  constructor () {

  }

  getNum (input) {
    let result;

    return result;
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
