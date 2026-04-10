const numbers=[1,2,3,4,56,78,5]
for(const num of numbers){
    // console.log(num)
}

const employee={
    name:'Tasnim',
    designation:'QA',
    salary:50000,
    experience:1,
    age:25

}
for(const key in employee){
    console.log(key,employee[key])
}
const keys=Object.keys(employee)
console.log(keys)
for(const  key of keys){
    const value=employee[key]
}