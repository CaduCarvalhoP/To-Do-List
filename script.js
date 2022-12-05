//seleção de elementos
const todoform = document.querySelector("#todo-form");
const todoinput = document.querySelector("#todo-input");
const todolist = document.querySelector("#todo-list");
const editform = document.querySelector("#edit-form");
const editinput = document.querySelector("#edit-input");
const canceleditbtn = document.querySelector("#cancel-edit-btn");
let oldinputvalue;
//funções
const savetodo = (text)=>{
    const todo =  document.createElement("div")
    todo.classList.add("todo")

    const todotitle =document.createElement("h3")
    todotitle.innerText = (text)
    todo.appendChild(todotitle)
    
    
    const donebtn= document.createElement("button")
    donebtn.classList.add("finish")
    donebtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(donebtn)

    
    const editbtn= document.createElement("button")
    editbtn.classList.add("edit")
    editbtn.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(editbtn)
    
    const deletbtn= document.createElement("button")
    deletbtn.classList.add("remove")
    deletbtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(deletbtn)

    todolist.appendChild(todo);
    todoinput.value="";
    todoinput.focus();
    
    //2 click+ ctrl+d =seleciona mais de um 
    //shift+ alt = cola oq foi selecionado 

    
}
const toggleforms = () => {
        editform.classList.toggle("hide");
        todoform.classList.toggle("hide");
        todolist.classList.toggle("hide");
    }

    const updadetodo = (text) =>{

        const todos = document.querySelectorAll(".todo")
        todos.forEach((todo)=>{

            let todotitle =  todo.querySelector("h3")
            if(todotitle.innerText ===oldinputvalue){
                todotitle.innerText = text 
            }
        })

    }
    
//eventos
todoform.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const inputvalue = todoinput.value
    if (inputvalue) {
        savetodo(inputvalue)        
    }
});

document.addEventListener("click", (e)=>{

const targetel =e.target
const parentel =targetel.closest("div");
let todotitle;
if(parentel&&parentel.querySelector("h3")){
    todotitle =parentel.querySelector("h3").innerText;
}

if (targetel.classList.contains("finish")) {
    parentel.classList.toggle("done");
}

if (targetel.classList.contains("remove")) {
    parentel.remove();

}
if (targetel.classList.contains("edit")) {
    toggleforms()
    editinput.value =todotitle
    oldinputvalue= todotitle
}

});
canceleditbtn.addEventListener("click",(e) =>{
    e.preventDefault()
    toggleforms()
})
editform.addEventListener("submit", (e)=>{

    e.preventDefault()
    const editinputvalue =editinput.value
    if(editinputvalue){
        updadetodo(editinputvalue)
    }
    toggleforms()


})

//testando um negocio aqui, é isso