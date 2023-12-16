function calculateDogAge(humanYears) {
    let humanAge = parseInt(humanYears);
    if (isNaN(humanAge)) {
        return "Please enter a valid number for your dog's age.";
    }
    else {
    let dogYears = humanAge * 7;
    return `Your dog's age in dog years is: ${dogYears}`;
    }
}
let userInput = prompt("Enter your dog's age in human years:");
console.log(calculateDogAge(userInput));