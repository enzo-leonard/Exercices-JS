const defaultTodo = [
    {done: true, name: "Tache 1"},
    {done: true, name: "Tache 2"},
]

// #1 selectionner le bouton avec l'id #add, le container #container-list, le input #new
const addBtn = document.querySelector('#add')
const container = document.querySelector('#container-list')
const input = document.querySelector('#new')

// #2 Afficher les todos dans le container avec une fonction displayTodos
const displayTodos = (list) => {
    container.innerHTML = ""
    list.forEach(task => {
        container.innerHTML += `<div class="p-2 bg-slate-700 rounded mt-2">${task.name}</div>`
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

// BONUS

// #5 Faire un filtre 
// #6 Suprimer un éléments
// #4 Cocher les checkbox pour marquer un todo comme fait

// #Arthur Eliot -- Hugo - Anton 