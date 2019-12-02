let sum = _.add(5,2);
//let sum2 = fp.add(5);
let sum3 = _.add(5);

console.log(sum);

//console.log(sum2(2));

console.log(sum3(2));

const addOne = _.map((num) => num + 1);
const multByThree = _.map((num) => num * 3);
const removeNumsOver100 = _.filter((num) => num <= 100);
const logAndReturn = function(data) {
    console.log(data);
    return data;
};
const sumAllNumbers = _.reduce((sum, num) => sum + num)(0);

const processNumbers = _.pipe(//flow and compose is flowRight
    addOne,
    multByThree,
    removeNumsOver100,
    logAndReturn,
    sumAllNumbers,
    console.log);

processNumbers([5, 8, 20, 40]);