let a = (a,b=10) =>a+b;

class Person{
    constructor(firstName,lastName,age){
       this.firstName =firstName;
       this.lastName = lastName;
       this.age = age;
    }
    getFullName(){
        return ` ${this.firstName} + ${this.lastName}`
    }
}
let nome = new Person('maria','antonia',13);
console.log(nome.getFullName)

