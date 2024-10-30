//1. Sum of Array of Numbers=========================

function sumArray(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
const array = [1, 2, 3, 4, 5];
const total = sumArray(array);
//console.log(total);

//2. Number and Return to Average==========================

function getAverage(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
console.log(getAverage(array));

//3. Longest Strings and Return The Longest Array==============

let names = ["Shawn", "Randi", "LeVan", "LeAnni", "Lael", "Lehana", "ChristopherJR"];
let minLength = 3;
let result = [];

for (let i = 0; i < names.length; i++) {
    if (names[i].length > minLength) {
        result.push(names[i]);
    }
}
console.log(result)
