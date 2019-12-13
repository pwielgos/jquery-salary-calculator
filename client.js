console.log('js');

$(document).ready(onReady);

function onReady() {
    console.log('in onReady');

    $('#submitBtn').on('click', addEmployee);

}

function addEmployee() {
    console.log('submit button clicked');
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idNumberIn').val();
    let title = $('#titleIn').val();
    let annualSalary = $('#annualSalaryIn').val();
    console.log(firstName, lastName, idNumber, title, annualSalary);

    // append user inputs to the DOM
    $('#employeeList').append(`<tr>
        <td>${firstName}<td>
        <td>${lastName}<td>
        <td>${idNumber}<td>
        <td>${title}<td>
        <td>${annualSalary}<td>
        <tr>`);

    // empty values
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idNumberIn').val('');
    $('#titleIn').val('');
    $('#annualSalaryIn').val('');
}
