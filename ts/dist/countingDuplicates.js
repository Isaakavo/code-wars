"use strict";
/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.duplicateCount = void 0;
function duplicateCount(text) {
    let lowerCaseTextArr = text.toLowerCase().split('');
    let hashmap = {};
    let counter = 0;
    for (const char of lowerCaseTextArr) {
        hashmap[char] = hashmap[char] ? hashmap[char] + 1 : 1;
        if (hashmap[char] > 1 && hashmap[char] < 3) {
            counter++;
            hashmap[char] = 2;
        }
    }
    return counter;
}
exports.duplicateCount = duplicateCount;
console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('aabBcde'));
console.log(duplicateCount('indivisibility'));
console.log(duplicateCount('Indivisibilities'));
console.log(duplicateCount('aA11'));
console.log(duplicateCount('ABBA'));
