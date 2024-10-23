function sum(a,b=0){
    console.log(a+b)
}
sum(1,2)

function soma(a,v=0){
  return a+v
}
let total = soma(12,2)
console.log(total)

const sumArrow = (a,b ) =>{
     return a+b;
}
const sumArrow2 = (a,b = 10) => a+b;