function Add(num1, num2) {
    num2 = num2 || 0;
    return num1 + num2;
}
const total = Add(16);
console.log(total);

// You can set default value of num2 in function using equal sign