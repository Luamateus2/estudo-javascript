const person ={
    firstName:'Felipe',
    lastName : 'Rocha',
    age: '21',
    hobbies :['Assistir','Jogar Futebol','ler']
}
console.log(person)
console.log(person.firstName)
console.log(person.hobbies)
console.log(person.hobbies[1])

const {firstName,lastName,age,hobbies} =person
const nome = firstName
const hobbie = hobbies[2]
console.log(hobbie)


const todos = [
    {
        id:1,
        description :"EStudar programação",
        isCompleed :false,
    },
    {
        id:3,
        description:"Treinar",
        isCompleed:true,
    }
]
console.log(todos[1].description)