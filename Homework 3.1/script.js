function printVariableType(input) {
    let type;

    if (!isNaN(input)) {
        type = 'number';
    } else if (input === 'true' || input === 'false') {
        type = 'boolean';
    } else if (input === undefined) {
        type = 'undefined';
    } else {
        type = 'string';
    }
    console.log(`Type of the input variable: ${type}`);
}
let userInput = prompt("Enter something:");
printVariableType(userInput);
