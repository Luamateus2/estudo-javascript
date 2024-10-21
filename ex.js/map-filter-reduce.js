const numbers= [1,2,3,4,5];
//multiplicar todos os itens por dois
const numberMultipliedByTwo = numbers.map(function(number){
  return number*2
})
console.log(numberMultipliedByTwo);



//

const ages = [8,13,27,30,22,48]
//filter filtra
const agesPar =ages.filter(
    function(age){
      return age % 2 ===0
    }
) 
console.log(agesPar)

const agesImpar = ages.filter(function(item){
    return item %2 !=0
})
console.log(agesImpar)

const soma= ages.reduce(function(age,acumuLator){
    return acumuLator+age
})
console.log(soma)