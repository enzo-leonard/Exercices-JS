const counterHTML = document.querySelector('#counter') // Object HTML
const nombre = 12 // Number 
const array = ["a", "b", "c", 12, {}] // Array
const object = {cle: "value", list: []} // Object
const fonction = () => {} // Function



// récupérer la valeur numérique de counter 
const counter = document.querySelector('#counter');
const body = document.querySelector('body');
console.log(body)
let number = Number(counter.innerHTML);
console.log(number)

// console click quand j'appuis sur un bouton (+ ou -)
const plus = document.querySelector('#btnMore');
const less = document.querySelector('#btnLess');

const options = {
    minValue: 2,
    maxValue: 18
}

console.log(12 + 'px')
console.log(options)


plus.addEventListener('click', () => {
    // console.log la valeur de counter + 1
    if (number < options.maxValue) {
        number = number + 1
        counter.innerHTML = number
        colorBackground()
    }
   
})



less.addEventListener('click', () => {
    // console.log la valeur de counter + 1
    if (number > options.minValue) {
        number = number - 1
        counter.innerHTML = number
        colorBackground()
    }
})

const colorBackground = () => {
    counter.style.fontSize = 10 +number*20+"px"
    if (number > 10) {
        // fond rouge
        body.style.backgroundColor = "red"
     

    } else {
        body.style.backgroundColor = "green"
      
        ///fond vert
    }
}

console.log(body.style)