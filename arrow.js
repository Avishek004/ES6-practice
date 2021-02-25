function doubleIt(num) {
    return num * 2;
}
const result = doubleIt(6);
console.log(result);

const add = function (num) {
    return num + 5;
}
const sum = add(5);
console.log(sum);

// Arrow Function
const tripleIt = num => num * 3;
const total = tripleIt(5);
console.log(total);

const plus = (x, y) => x + y;
const value = plus(4, 5);
console.log(value);

const value1 = () => 6;
const equal = value1();
console.log(equal);


const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const value2 = doMath(5, 8);
console.log(value2);