var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();

    }
}

function readFormData() {
    var formData = {};
    formData["StudentId"] = document.getElementById("StudentId").value;
    formData["StudentName"] = document.getElementById("StudentName").value;
    formData["Email"] = document.getElementById("Email").value;
    formData["Class"] = document.getElementById("Class").value;
    formData["Year"] = document.getElementById("Year").value;
    formData["city"] = document.getElementById("city").value;
    formData["Country"] = document.getElementById("Country").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.StudentId;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.StudentName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Email;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Class;
    cell4 = newRow.insertCell(4);

    cell5 = newRow.insertCell(5);
    cell5.innerHTML = data.Year;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = data.city;
    cell7 = newRow.insertCell(7);
    cell7.innerHTML = data.Country;
   
    cell7 = newRow.insertCell(7);

    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("StudentId").value = "";
    document.getElementById("StudentName").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Class").value = "";

    document.getElementById("Year").value = "";
    document.getElementById("city").value = "";
    document.getElementById("Country").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
   document.getElementById("StudentId").value = selectedRow.cells[0].innerHTML;
    document.getElementById("StudentName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Email").value = selectedRow.cells[2].innerHTML;
    document.getElementById("Class").value = selectedRow.cells[3].innerHTML;

       document.getElementById("Year").value = selectedRow.cells[4].innerHTML;
    document.getElementById("city").value = selectedRow.cells[5].innerHTML;
    document.getElementById("Country").value = selectedRow.cells[6].innerHTML;
    
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.StudentId;
    selectedRow.cells[1].innerHTML = formData.StudentName;
    selectedRow.cells[2].innerHTML = formData.Email;
    selectedRow.cells[3].innerHTML = formData.Class;

    selectedRow.cells[4].innerHTML = formData.Year;
    selectedRow.cells[5].innerHTML = formData.city;
    selectedRow.cells[6].innerHTML = formData.Country;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("studentList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("StudentId").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}