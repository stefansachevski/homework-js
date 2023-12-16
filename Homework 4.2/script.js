function sumNum([num1,num2,num3,num4,num5]) {
    let result = num1 + num2 + num3 + num4 + num5;
    return result;
}
let numbers = [5 , 6 , 10 , 11 , 15];
let sum = sumNum(numbers);
console.log('The sum of numbers are:',sum);