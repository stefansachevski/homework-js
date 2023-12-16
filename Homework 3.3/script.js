function atmWithdrawal(requestedAmount) {
    let accountBalance = 10000;
    if (requestedAmount > accountBalance) {
        return "Not enough money";
    } else {
        let remainingBalance = accountBalance - requestedAmount;
        return {
            amountWithdrawn: requestedAmount,
            remainingBalance: remainingBalance
        };
    }
}
let userInput = prompt("Enter the amount you want to withdraw:");
let withdrawalAmount = parseInt(userInput);

if (!isNaN(withdrawalAmount)) {
    let result = atmWithdrawal(withdrawalAmount);
    if (result === "Not enough money") {
        console.log(result);
    } else {
        console.log(`Withdrawal successful! Amount withdrawn: ${result.amountWithdrawn}. Remaining balance: ${result.remainingBalance}`);
    }
} else {
    console.log("Please enter a valid number.");
}