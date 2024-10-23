const addUserText =document.getElementById("add-user");
console.log(addUserText)
addUserText.innerText ='Adiciona usuário';

//const addUser = document.querySelector("#add-user"); //#pega o id
//const addUser= document.querySelector(".add-user") // . pega pela class

const allItems = document.querySelectorAll(".item");// para selecionar multiplos elementos
console.log(allItems)

//manipular items

//const items = document.querySelector(".items");
//remover itens items.remove();

//items.firstElementChild.remove()
//items.lastElementChild.remove();
//const button = document.querySelector(".btn");


//button.style.background="red";

//eventos
const button = document.querySelector("#submit-button");
button.addEventListener('click',function(event ){
    event.preventDefault();
    button.style.background = "red";
})
