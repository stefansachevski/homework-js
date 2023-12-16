function joinStrings(array) {
    let result = "";
    
    for (i = 0; i < array.length; i++) {
        result += array[i];

        if (i < array.length - 1) {
            result += ' ';
        }
    }

    return result;
}

let stringArray = ["Hello", "there", "students", "of", "SEDC", "!"];
let result = joinStrings(stringArray);
console.log(result);