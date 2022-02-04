var input = document.querySelectorAll("input"); // Taking all input
var table = document.querySelector("table");    // Selecting table from document
var rowCount = 0;
var btn = document.querySelectorAll("button");  // Selecting all buttons from document

// Adding event listeners to buttons
btn[0].addEventListener("click", insert);
btn[1].addEventListener("click", edit);
btn[2].addEventListener("click", del);

// Inserting data to table
function insert(){
    var row = table.insertRow();
    var name = row.insertCell(0);
    var dob = row.insertCell(1);
    var email = row.insertCell(2);
    name.innerHTML = input[0].value;
    dob.innerHTML = input[1].value;
    email.innerHTML = input[4].value;
    rowCount++;
}

// Editing the table
function edit(){
    var row = document.querySelectorAll("tr");
    console.log(row.length);
    let index = prompt("Type the row number you want to edit.");
    if(index <= 0)
    {
        alert("Row can not be zero or negative.")
    }
    else if(index <= rowCount)
    {
        let userInput = prompt("Please enter the new data. Seprate each by a comma (,) and if there is no change in a column you can leave that empty.");
        let newData = userInput.split(",");
        let rowUpdate = row[index];
        let oldData = rowUpdate.querySelectorAll("td");
        for(let i=0; i<3; i++)
        {
            if(newData[i] !== '')
            {
                oldData[i].innerHTML = newData[i];
            }
        }
    }
    else
    {
        alert("Given row number is greater than number of rows.")
    }
    
}

// Deleting the row
function del(){
    var row = document.querySelectorAll("tr");
    console.log(row.length);
    let index = prompt("Type the row number you want to delete.");
    if(index <= 0)
    {
        alert("Row can not be zero or negative.")
    }
    else if(index <= rowCount)
    {
        table.deleteRow(index);
        rowCount--;
    }
    else
    {
        alert("Given row number is greater than number of rows.")
    }
}
