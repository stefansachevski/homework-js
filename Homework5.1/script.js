var numbersArray = [1, 2, 3, 4, 5];
function printNumbersAndSum() {
    let numbersList = document.getElementById("numbersList");
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        let number = numbersArray[i];
        let listItem = document.createElement("li");
        listItem.innerText = number;
        numbersList.appendChild(listItem);
        sum += number;
    }
    let sumElement = document.getElementById("sum");
    sumElement.innerText = "Sum: " + sum;
}
printNumbersAndSum();