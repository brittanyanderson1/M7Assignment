// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM 

const form = document.getElementById('addForm') 
const employeeTableBody = document.getElementById('employees') 
const employeeCount = document.getElementById('empCount') 

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER

let count = 0

// ADD EMPLOYEE

 form.addEventListener('submit', (e) => {

// PREVENT FORM SUBMISSION

 e.preventDefault()

// GET THE VALUES FROM THE TEXT BOXES

const employeeID = document.getElementById('id').value 
const employeeName = document.getElementById('name').value 
const employeeExtension = document.getElementById('extension').value 
const employeeEmail = document.getElementById('email').value 
const employeeDepartment = document.getElementById('department').value

// INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE

const row = employeeTableBody.insertRow()

// INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW

const cellID = row.insertCell(0) 
const cellName = row.insertCell(1) 
const cellExtension = row.insertCell(2) 
const cellEmail = row.insertCell(3) 
const cellDepartment = row.insertCell(4)

// APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS

cellID.appendChild(document.createTextNode(employeeID)) 
cellName.appendChild(document.createTextNode(employeeName)) 
cellExtension.appendChild(document.createTextNode(employeeExtension)) 
cellEmail.appendChild(document.createTextNode(employeeEmail)) 
cellDepartment.appendChild(document.createTextNode(employeeDepartment))

// CREATE THE DELETE BUTTON

const actionsCell = row.insertCell(5) 
const deleteButton = document.createElement('button') 
deleteButton.appendChild(document.createTextNode('X')) 
deleteButton.className = 'btn btn-danger' 
deleteButton.onclick = () => deleteEmployee(row) 
actionsCell.appendChild(deleteButton) 

// RESET THE FORM

form.reset()

// SET FOCUS BACK TO THE ID TEXT BOX

document.getElementById('id').focus()

// INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE

updateEmployeeCount(1) 
    }
) 

// DELETE EMPLOYEE

function deleteEmployee(row) { 
    if (confirm('Are you sure you want to delete this entry?')) { 
        row.remove() 
        updateEmployeeCount(-1) 
    } 
}

// FUNCTION TO UPDATE EMPLOYEE COUNT

 function updateEmployeeCount(value) { 
    count += value
    employeeCount.textContent = count
 }