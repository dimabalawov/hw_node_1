function Fracture(x, y) {
    this.nominator = x;
    this.denominator = y;

    this.toString = function() {
        return this.nominator + "/" + this.denominator;
    }
}

function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

function lcm(a, b) {
    return a * b / gcd(a, b);
}

function SumFracture(f1, f2) {
    const den1 = f1.denominator;
    const num1 = f1.nominator;
    const den2 = f2.denominator;
    const num2 = f2.nominator;

    const commonDenominator = lcm(den1, den2);
    const newNum1 = num1 * (commonDenominator / den1);
    const newNum2 = num2 * (commonDenominator / den2);
    const resultNumerator = newNum1 + newNum2;
    const commonDivisor = gcd(resultNumerator, commonDenominator);

    return new Fracture(resultNumerator / commonDivisor, commonDenominator / commonDivisor);
}

function SubtractFracture(f1, f2) {
    const den1 = f1.denominator;
    const num1 = f1.nominator;
    const den2 = f2.denominator;
    const num2 = f2.nominator;

    const commonDenominator = lcm(den1, den2);
    const newNum1 = num1 * (commonDenominator / den1);
    const newNum2 = num2 * (commonDenominator / den2);
    const resultNumerator = newNum1 - newNum2;
    const commonDivisor = gcd(resultNumerator, commonDenominator);

    return new Fracture(resultNumerator / commonDivisor, commonDenominator / commonDivisor);
}

function MultiplyFracture(f1, f2) {
    const resultNumerator = f1.nominator * f2.nominator;
    const resultDenominator = f1.denominator * f2.denominator;
    const commonDivisor = gcd(resultNumerator, resultDenominator);

    return new Fracture(resultNumerator / commonDivisor, resultDenominator / commonDivisor);
}

function DivideFracture(f1, f2) {
    const resultNumerator = f1.nominator * f2.denominator;
    const resultDenominator = f1.denominator * f2.nominator;
    const commonDivisor = gcd(resultNumerator, resultDenominator);

    return new Fracture(resultNumerator / commonDivisor, resultDenominator / commonDivisor);
}
module.exports = {
    Fracture,
    SumFracture: SumFracture,
    SubtractFracture: SubtractFracture,
    MultiplyFracture: MultiplyFracture,
    DivideFracture: DivideFracture
}