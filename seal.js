const employee={
    name:'Tasnim',
    designation:'QA',
    salary:50000,
    experience:1,
    age:25

}
Object.seal(employee)
delete employee.experience
employee.salary=employee.salary+10000;
employee.location='sylhet'
console.log(employee)