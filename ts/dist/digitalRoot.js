"use strict";
/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
  16  -->  1 + 6 = 7
  942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
  132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
  493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitalRoot = void 0;
const digitalRoot = (n) => {
    let result = 0;
    while (n !== 0) {
        let remain = n % 10;
        result += remain;
        n = Math.trunc(n / 10);
        if (Math.trunc(result / 10) !== 0 && n === 0) {
            n = result;
            result = 0;
        }
    }
    return result;
};
exports.digitalRoot = digitalRoot;
console.log((0, exports.digitalRoot)(16));
console.log((0, exports.digitalRoot)(942));
console.log((0, exports.digitalRoot)(132189));
console.log((0, exports.digitalRoot)(493193));
