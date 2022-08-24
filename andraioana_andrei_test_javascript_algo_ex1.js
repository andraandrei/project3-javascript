
function removeSpaceArrayNumber(){
    for (let i = 0; i < 9; i++) {
        array_number[i]=array_number[i].replaceAll(" ", "")
    }
    return array_number
}

array_number = removeSpaceArrayNumber()

var table = document.getElementById("myTable");
for (let i = 0; i < 9; i++) {
    var row = document.createElement("tr");
    for (let j = 0; j < 9; j++) {
        var cell = document.createElement("td");
        var cellContents = document.createTextNode(array_number[i][j]);
        cell.appendChild(cellContents);
        row.appendChild(cell);
    }
    table.appendChild(row);
}