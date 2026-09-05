function insert_Row() {
    // Access the table by its ID
    let table = document.getElementById("sampleTable");
    
    // Insert a new row at index 0 (top of the table)
    let newRow = table.insertRow(0);
    
    // Insert two new cells into the new row
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    
    // Set the inner text for each cell
    cell1.innerText = "New Cell1";
    cell2.innerText = "New Cell2";
}