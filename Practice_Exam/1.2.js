let employees = [
    {firstName: 'Anna', lastName: 'A'},
    {firstName: 'Ben', lastName: 'B'},
    {firstName: 'La', lastName: 'C'},
    {firstName: 'Vi', lastName: 'D'},
    {firstName: 'Gu', lastName: 'E'}
];

const listCont = document.getElementById('employee-list');
const ol = document.createElement('ol');

employees.forEach(employees => {
    let li = document.createElement('li');
    li.textContent = `${employees.firstName} ${employees.lastName}`;
    ol.appendChild(li);
});
listCont.appendChild(ol);