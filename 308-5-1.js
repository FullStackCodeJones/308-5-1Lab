//=================PART ONE====================================================


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

//3. Take an Array of Strings and Return the Longest String======================================

let family = ["Shawn", "Randi", "LeVan", "LeAnni", "Lael", "Lehana", "ChristopherJR"];
let longestName = findLongestString(family);
function findLongestString(arr) {
    let longest = "";
    if (arr.length === 0) {
        return null;
    }


    for (let i = 0; i < arr.length; i++) {

        if (arr[i].length > longest.length) {
            longest = arr[i];
        }
    }

    return longest;
}
console.log(longestName);



//4. Longest Strings and Return The Longest Array Return an Array Strings Longer than the Given Number  ==============

let names = ["Shawn", "Randi", "LeVan", "LeAnni", "Lael", "Lehana", "ChristopherJR"];
let minLength = 3;
let result = [];

for (let i = 0; i < names.length; i++) {
    if (names[i].length > minLength) {
        result.push(names[i]);
    }
}
console.log(result)

//

function printNumbers(n, current = 1) {

    if (current > n) {
        return;
    }

    console.log(current);

    printNumbers(n, current + 1);
}


let n = 5;
printNumbers(n);
