// function declaration
function add(num1,num2){
    return num1+ num2;
}

// function expression
const addition= function(num1,num2){
    return num1+num2;
}

// arrow function

const add2=(num1,num2)=> num1+num2;
const multiply=(a,b)=> a*b;
const sumall=(a,b,c,d,e,f)=>a+b+c+d+e+f;
const isFirstBig=(x,y)=>x>y;

// multy line arrow function
const doMath=(x,y)=>{
    const makedouble=x*2;
    const againDouble=y*2;
    const result=makedouble+againDouble;
    return result;
}


const result=add2(15,13)
console.log(result)

const mult=multiply(5,6)
console.log(mult)

const isBig= isFirstBig(100,80)
console.log(isBig)