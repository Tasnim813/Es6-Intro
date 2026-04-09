const numbers=[54,25,2,6,56]
console.log(numbers)
console.log(...numbers)

// const max=Math.max(45,12,82,96,256,236)
const max=Math.max(...numbers)
console.log(max)

// const first=[1,2,33,26,2];
// const second=first;
// second.push(308)
// console.log(first)


const first=[1,2,33,26,2];
const second=[...first];
const third=[...first,78,787,87,75]
second.push(308)
// console.log(first)
// console.log(second)
// console.log(third)
const person={name:'Tasnim', age:55}
const employer={designation:'dev',...person}
// console.log(employer)


// const total=(a,b,c)=>a+b+c;
// const result=total(45,12,12)
// const digit=[78,23,96,52]
// total(digit)