function generateTable() {
    var numberInput = document.getElementById("number");
    var number = parseInt(numberInput.value);

    if (isNaN(number)) {
      alert("Please enter a valid number.");
      return;
    }

    var tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = "";

    var table = document.createElement("table");

    // Create the table header
    var headerRow = document.createElement("tr");
    var headerCell = document.createElement("th");
    headerCell.textContent = "Multiplication Table of " + number;
    headerCell.colSpan = 2;
    headerRow.appendChild(headerCell);
    table.appendChild(headerRow);

    // Create the table rows and cells
    for (var i = 1; i <= 10; i++) {
      var row = document.createElement("tr");

      var cell1 = document.createElement("td");
      cell1.textContent = i;
      row.appendChild(cell1);

      var cell2 = document.createElement("td");
      cell2.textContent = number + " x " + i + " = " + (number * i);
      row.appendChild(cell2);

      table.appendChild(row);
    }

    tableContainer.appendChild(table);
  }