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

// 5/6 IDK anymore, I spent an hour thinking my code was wrong because I forgot to save 🤕

function printNumbers(n, current = 1) {

    if (current > n) {
        return;
    }

    console.log(current);

    printNumbers(n, current + 1);
}


let n = 5;
printNumbers(n);
//PART TWO================================

// Given Data
const data = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];
//Sort The Array By Age===============

const sortedByAge = data.sort((a, b) => {
    return Number(a.age) - Number(b.age);
});


console.log(sortedByAge);

//Filter The Array By Age=============================
const underFifty = data.filter(person => Number(person.age) <= 50);
console.log(underFifty);

//Map the Array===========================

// Map the array to change "occupation" to "job" and increment "age" by 1=========================


const updatedData = data.map(person => ({
    id: person.id,
    name: person.name,
    job: person.occupation,
    age: Number(person.age) + 1
}));


console.log(updatedData);





const totalAge = data.reduce((sum, person) => {
    return sum + Number(person.age);
}, 0);


const averageAge = totalAge / data.length;

console.log(`Total Age: ${totalAge}`);
let randisFamily = [
    { name: "Shawn", age: 36 },
    { name: "Randi", age: 36 },
    { name: "Le'Van", age: 18 },
    { name: "Le'Anni", age: 16 },
    { name: "La'el", age: 11 },
    { name: "Lehana", age: 6 },
    { name: "ChristopherJR", age: 3 }
];


randisFamily.forEach(person => {
    person.age += 1;
});

console.log(randisFamily);
console.log(`Average Age: ${averageAge}`);

//============================================================
function incrementAge(person) {
  
    let personCopy = { ...person };

  
    if (typeof personCopy.age === "number") {
        personCopy.age += 1;
    }function incrementAge(person) {
        
        let personCopy = { ...person }; 
        if (typeof personCopy.age === "number") {
            personCopy.age += 1;
        }
    
        
        return personCopy;
    }
    //=====================================================
    let randiFamily = {
        name: "Randi",
        age: 36
    };
    
    
    let updatedFamilyMember = incrementAge(randiFamily);
    
    
    console.log(updatedFamilyMember); 
    console.log(randiFamily);
    

    return personCopy;
}


let randiFamily = {
    name: "Randi",
    age: 36
};


let updatedFamilyMember = incrementAge(randiFamily);


console.log(updatedFamilyMember); 

