function sumMaxAndMin(numbers) {
    let maxNumber = numbers[0];
    let minNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i];
        } else if (numbers[i] < minNumber) {
            minNumber = numbers[i];
        }
    }
    console.log('Max number is:',maxNumber);
    console.log('Min number is:',minNumber);

    return maxNumber + minNumber;
}
let numbersArray = [3, 5, 6, 8, 11];
let result = sumMaxAndMin(numbersArray);
console.log('Sum of max number and min number is:',result);