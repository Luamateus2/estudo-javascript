const todos = [
    {
        id:1,
        description:"Estudar programação",
        isCompleted: false,
    },
    {
        id:2,
        description:"Ler",
        isCompleted: true,
    },
    {
        id:3,
        description:"Treinar",
        isCompleted: true,
    }

];

//arquivo json 

const todosJson = JSON.stringify(todos);
console.log(todosJson)
const todosList = JSON.parse(todosJson)