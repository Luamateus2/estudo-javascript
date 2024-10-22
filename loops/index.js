for(let index =0; index<10;index++){
    console.log(index*2)
};
const cars = ["Ferrari","Tesla","Mercedes"]

for (let i=0 ; i<cars.length;i++){
    console.log(cars[i])
};
for (let car of cars){
    console.log(car)
};

cars.forEach(function(car){
  console.log(car);
});