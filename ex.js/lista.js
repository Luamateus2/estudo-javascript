const names = ['luana','joao'];
names.push('pedro');
const joao = names[1];
console.log(joao);
console.log(names);
names.unshift('MARIA');
console.log(names);
names.pop();
console.log(names);


//indexOf pega a posição de onde encontrar o item procurado
console.log(names.indexOf('MARIA'));