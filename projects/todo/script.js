const createTodoButton = document.querySelector("#create-todo-btn");
const container = document.querySelector("#container")
const todoContainer = document.querySelector("#container>div")
const firstTodoInput= document.querySelector("#first-todo-input")
const addTodoInputBtn = document.querySelector("#add-todo-input")

addTodoInputBtn.addEventListener("click",()=>{
    const div = document.createElement("div")
    div.classList.add("border-2","border-black","p-1","mb-4")
    div.setAttribute("contenteditable",true)
    todoContainer.append(div);
    div.focus()

})

createTodoButton.addEventListener("click",() => {
    createTodoButton.classList.add("hidden")
    container.classList.remove("hidden")
    firstTodoInput.focus()
})