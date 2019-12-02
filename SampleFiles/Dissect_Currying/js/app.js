

const doubleNum = function(num) {
    return num + num;
};

const totalIt = function(n1, n2, n3, n4) {
    return n1 + n2 + n3 + n4;
};

const doArray = function(num1, num2) {
    return [num1, num2];
};

const curriedTotalIt = curry(totalIt);
const curriedDoArray = curry(doArray);

/*const newFunction = pipe(
    doubleNum,
    curriedTotalIt(3)(2)(1),
    curriedDoArray(50));*/















