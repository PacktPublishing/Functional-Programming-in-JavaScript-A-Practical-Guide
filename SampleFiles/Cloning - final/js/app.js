"use strict";
const arr = [3,4,2,5,1,6];
Object.freeze(arr);

const cloneObj = function(obj) {
    return JSON.parse(JSON.stringify(obj));
};

const newNums = cloneObj(arr).sort();

console.log(newNums);
console.log(arr);

/*let obj = {
    fName: "Steven",
    lName: "Hancock",
    score: 85,
    completion: true,
    questions: {
        q1: {success: true, value: 1},
        q2: {success: false, value: 1}
    }
};

let array = [{a: 1},{b: 2}];

let obj2 = Object.assign({}, array);

let obj3 = JSON.parse(JSON.stringify(array));*/
