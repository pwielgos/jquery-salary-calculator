console.log('js');

$(document).ready(onReady);

const totalMonthly = 0;
let employees = [];

function onReady() {
    console.log('in onReady');
    $('#submitBtn').on('click', addEmployee);
    $('#employeeList').on('click', '.deleteBtn', deleteEmployee);
    let el = $('#totalMonthly');
    el.empty();
    el.append(`Total Monthly: ${totalMonthly}`);
}

function addEmployee() {
    console.log('submit button clicked');
    // get user inputs
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idNumberIn').val();
    let title = $('#titleIn').val();
    let annualSalary = $('#annualSalaryIn').val();
    console.log(firstName, lastName, idNumber, title, annualSalary);

    // append user inputs to the DOM
    $('#employeeList').append(`<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${idNumber}</td>
    <td>${title}</td>
    <td>${annualSalary}</td>
    <td><button class="deleteBtn">DELETE</button></td>
    </tr>`);

    // empty values
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');

    // push user inputs into an array so we can calculate monthly cost
    let newEmployee = {
        
    }
}

function deleteEmployee(){
    console.log('in deleteEmployee');
    $(this).closest('tr').remove();
}

function calculateTotalSalary(){

}
