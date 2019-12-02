"use strict";
const arr = [3,4,2,5,1,6];
Object.freeze(arr);

const sortArray = function(arr1) {
    return arr1.sort();
};

const newNums = sortArray(arr);

console.log(newNums);
console.log(arr);


