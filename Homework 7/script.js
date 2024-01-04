function createTable(rows, columns) {
    let table = document.createElement("table");
    for (let i = 1; i <= rows; i++) {
        let row = table.insertRow();

        for (let j = 1; j <= columns; j++) {
            let cell = row.insertCell();
            cell.innerText = "Row-" + i + " Column-" + j;
        }
    }
    document.body.appendChild(table);
}

let numRows = parseInt(prompt("Enter the number of rows:"));
let numColumns = parseInt(prompt("Enter the number of columns:"));

if (!isNaN(numRows) && !isNaN(numColumns)) {
    createTable(numRows, numColumns);
} else {
    alert("Invalid input. Please enter valid numbers for rows and columns.");
}