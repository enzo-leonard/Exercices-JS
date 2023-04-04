// #1 écouter le changement de text sur l'input
const input = document.querySelector('#input');
const counter = document.querySelector('#counter');
const counterWords = document.querySelector('#counter-words');
const render = document.querySelector('#render');
const maxCar = 20

const changeStateInput = (input, nbCar, maxCar) => {
    if(nbCar >= maxCar) {   
        input.value = input.value.slice(0, maxCar)
        input.classList.remove('border-slate-500')
        input.classList.add('border-red-500')
    } else {
        input.classList.add('border-slate-500')
        input.classList.remove('border-red-500')
    }
}

const showInfoInput = (event) => {
    const input = event.target
    const car = input.value.split('')
    const nbCar = car.length
    counter.innerHTML = nbCar
    render.innerHTML = input.value
    changeStateInput(input, nbCar, maxCar)
}

input.addEventListener('keyup', showInfoInput)


input.addEventListener('keyup', () => {
    const car = input.value.split(/\b\w+\b/g)
    const nbWord= car.length - 1
    counterWords.innerHTML = nbWord
})

// #2 récupérer la valeur de l'input et mettre à jour le nombre de caractères

// #3 si le nombre de caractères est supérieur à 50 empécher l'utilisateur d'écrire
