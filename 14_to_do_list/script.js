const defaultTodo = [
    {done: true, name: "Tache 1"},
    {done: true, name: "Tache 2"},
]

const url = "https://json-ece.glitch.me/data.json"



// #1 selectionner le bouton avec l'id #add, le container #container-list, le input #new
const addBtn = document.querySelector('#add')
const container = document.querySelector('#container-list')
const input = document.querySelector('#new')

// #2 Afficher les todos dans le container avec une fonction displayTodos
const displayTodos = (list) => {
    container.innerHTML = ""
    list.forEach(task => {
        container.innerHTML += `<div class="p-2 bg-slate-700 rounded mt-2 flex gap-2 items-center">
        <div class="h-6 w-6 flex items-center justify-center rounded-xl border-2 ${task.done ? "bg-green-500" : "bg-red-300"}">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" class="w-4 h-4 ${!task.done && "hidden"}">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
        </div>
        ${task.name}
        </div>`
    })
}
displayTodos(defaultTodo)
// #3 Ajouter un event listener sur le bouton pour ajouter un todo
addBtn.addEventListener('click', () => {
    const newTask = {name: input.value, done: false}
    input.value = ""
    defaultTodo.push(newTask)
    displayTodos(defaultTodo)
})

// Methode 1 : THEN
fetch(url)
    .then(data => data.json())
    .then(data => {
        displayTodos(data.enzo)
    })


// Methode 2 : ASYNC/AWAIT
const getData = async () => {
    const data = await fetch(url)
    const json = await data.json()
    displayTodos(json.enzo)
   
}

// getData()


// BONUS

// #5 Faire un filtre 
// #6 Suprimer un éléments
// #4 Cocher les checkbox pour marquer un todo comme fait

// #Arthur Eliot -- Hugo - Anton 