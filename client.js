$(document).ready(onReady);

let employees = [];

function onReady() {
    $('#submitBtn').on('click', addEmployee);
    $('#employeeList').on('click', '.deleteBtn', deleteEmployee); 
    $('#submitBtn').on('click', exceedBudget);
}

function addEmployee() {
    // get user inputs
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idNumberIn').val();
    let title = $('#titleIn').val();
    let annualSalary = $('#annualSalaryIn').val();

    // push user inputs into an array so we can calculate monthly cost
    let newEmployee = { firstName, lastName, idNumber, title, annualSalary };
    employees.push(newEmployee);
    displayEmployees(employees);
    // empty inputs
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');
    calculateMonthlyCosts();
}

function calculateMonthlyCosts() {
    // calculate monthly cost = employee.annualSalary value / 12
    monthlyCost = 0;
    for (let i = 0; i < employees.length; i++) {
        monthlyCost += Number(employees[i].annualSalary / 12);
        }

    // round monthly cost to 2 decimal points
    let roundedMonthlyCost = monthlyCost.toFixed(2);

    // append rounded monthly cost to DOM
    let el = $('#monthlyCost');
    el.empty();
    el.append(roundedMonthlyCost);
}

function deleteEmployee() {
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

function exceedBudget(){
    if(monthlyCost >= 20000){
        $('h3').css('background-color', 'red')
    }
}


