function nameStudent (firstNames , lastNames) {
    let fullNames = [];
    for (i = 0; i < firstNames.length && i < lastNames.length; i++) {
        fullNames[i] = `${i + 1}. ${firstNames[i]} ${lastNames[i]}`;
    }
    return fullNames;
}
let firstNames = ["John", "Jane", "Bob"];
let lastNames = ["Doe", "Smith", "Johnson"];
let result = nameStudent(firstNames,lastNames);
console.log(result);