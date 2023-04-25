import {burgerList} from './data.js'


// Voici la liste des burgers (le fichier se trouve dans le dossier data.js)
console.log('burgerList', burgerList)
const containerHTML = document.querySelector('#burger-container')
const names = burgerList.map(burgerObj => burgerObj.nom)
const prixAbusé = burgerList.map(burgerObj => burgerObj.prix + 5)


const _burgerList = burgerList.filter(burger => burger.type == "tacos")

console.log('containerHTML', containerHTML)
console.log('names', names)
console.log('prixAbusé', prixAbusé)

// Indice :
// Utiliser la méthode forEach pour parcourir la liste des burgers  
// Pour chaque burger, créer un élément HTML (div) et l'ajouter dans #burger-container avec la méthode innerHTML

// Etape 1
// Pour chacun des burgers affiche le nom dans la console
burgerList.filter(burger => burger.type == "tacos").forEach(burgerObj => {
    console.log(burgerObj.ingredients.join(", "))


    let ingredientsHTML = burgerObj.ingredients.map(ingredient =>  `<div class="bg-slate-600 text-slate-100 rounded-full px-2 py-1 mr-2">${ingredient}</div>`).join('')
    // burgerObj.ingredients.forEach(ingredient => {
    //     console.log(ingredient)
    //     ingredientsHTML += `<div class="bg-slate-600 text-slate-100 rounded-full px-2 py-1 mr-2">${ingredient}</div>`
    // })

    containerHTML.innerHTML += `<div class="border bg-slate-800 p-8 rounded-xl mt-4">
        <div class="flex justify-between mb-2">
            <h2 class="font-bold text-xl">${burgerObj.nom}</h2>
            <p class="text-yellow-200 text-xl">${burgerObj.prix}€</p>
        </div>
        <p class="text-slate-400">${burgerObj.description}</p>
        <div class="flex gap-1 my-2 flex-wrap">${ingredientsHTML}</div>
        <img src="${burgerObj.img}" alt="${burgerObj.nom}" class="w-full rounded-xl mt-4">

    </div>`
})

// Etape 2
// Dans #burger-container afficher le nom des burgers

// Etape 3 
// Ajouter la description et le prix 

// Etape 4 
// Afficher l'image du burger

// Etape 5
// Ajouter des nouveaux burgers dans le fichier data.js

// Etape 6 
// Ajouter votre site sur github page et ajouter le lien dans le cours 

// Etape 7 (Bonus)
// Rendre vos site le plus attractif possible en changeant le style
// Vous pouvez remplacer les burgers par d'autre élements (ex: des films, des livres, des jeux vidéos, des personnages, des animaux, etc...)

// Etape 8 (Bonus)
// Afficher la liste des ingrédients