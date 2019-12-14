console.log('js');

$(document).ready(onReady);

let employees = [];

function onReady() {
    console.log('in onReady');
    $('#submitBtn').on('click', addEmployee);
    $('#employeeList').on('click', '.deleteBtn', deleteEmployee); 
    
    displayEmployees(employees);
    calculateMonthlyCosts();
}

function addEmployee(event) {
    event.preventDefault();
    console.log('submit button clicked');
    // get user inputs
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idNumberIn').val();
    let title = $('#titleIn').val();
    let annualSalary = $('#annualSalaryIn').val();

    // empty inputs
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');

    // push user inputs into an array so we can calculate monthly cost
    let newEmployee = { firstName, lastName, idNumber, title, annualSalary };
    employees.push(newEmployee);
    
    displayEmployees(employees);
    calculateMonthlyCosts();
}

function calculateMonthlyCosts() {
  
    // calculate monthly cost = employee.annualSalary value / 12
    let monthlyCost = 0;
    for (let i = 0; i < employees.length; i++) {
        monthlyCost += Number(employees[i].annualSalary / 12);
        }

    // append monthly cost to DOM
    let el = $('#totalMonthly');
    el.empty();
    el.append(`Total Monthly: ${monthlyCost}`);
}

function deleteEmployee() {
    console.log('in deleteEmployee');
    $(this).closest('tr').remove();
}

function displayEmployees(employeeArray) {
    // append user input values to the DOM
    $('#employeeList').empty();
    for(let employee of employeeArray){
    $('#employeeList').append(`<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.idNumber}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td>
        <td><button class="deleteBtn">DELETE</button></td>
        </tr>`);
    }
}


