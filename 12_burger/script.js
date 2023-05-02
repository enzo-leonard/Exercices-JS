import { burgerList } from "./data.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, setDoc, getDoc, where, writeBatch, query, orderBy, doc, limit, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQc1XqM4GvN-W-F-UwSNsOu6WcuajFOds",
  authDomain: "db-ece-20133.firebaseapp.com",
  projectId: "db-ece-20133",
  storageBucket: "db-ece-20133.appspot.com",
  messagingSenderId: "189998340443",
  appId: "1:189998340443:web:8936b311d4adc7a209e27e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// fonction pour récupèrer une collection (READ)
const getDocument = async (collectionName) => {
    const DocumentColRef = collection(db, collectionName);
    const DocumentSnapshot = await getDocs(DocumentColRef);
    const DocumentList = DocumentSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    return DocumentList
  }


  const userExist = async (name, password) => {
  
    const DocumentColRef = collection(db, "users");
    const q = await query(DocumentColRef, where("name", "==", name), where("password", "==", password))
    const querySnapshot = await getDocs(q);
    console.log("querySnapshot docs", querySnapshot.docs)
    const DocumentList = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    console.log('test user already exists', name, password, DocumentList);
    return DocumentList;
  };

  userExist("enzo", "1234")
  userExist("enzo", "test")
// fonction pour créer une collection (CREATE)
const createDocument = async (collectionName, newObj) => {
    console.log('createDocument', newObj)
    const DocumentColRef = collection(db, collectionName);
    const DocumentSnapshot = await addDoc(DocumentColRef, newObj);
}
// createDocument("burgers", {name: "cheeseburger"})

// fonction pour mettre à jour une collection (UPDATE)
const updateDocument = async (collectionName, newObj) => {
    console.log('updateDocument', newObj)
    const DocumentColRef = doc(db, collectionName, newObj.id)
    const DocumentSnapshot = await updateDoc(DocumentColRef, newObj);
}
// fonction pour supprimer une collection (DELETE)
const deleteDocument = async (collectionName, id) => {
    console.log('deleteDocument', id)
    const DocumentColRef = doc(db, collectionName, id)
    console.log('DocumentColRef', DocumentColRef)
    await deleteDoc(DocumentColRef, id);
}

const getData = async() => {
   const data = await fetch("https://json-ece.glitch.me/burgers.json")
   const json = await data.json()
   console.log("json", json)
   displayBurgers(json.data)

   const burgers = document.querySelectorAll('.burger')
    burgers.forEach((burgerHTML, index) => {
        burgerHTML.addEventListener('click', () => {
            displayBurger(burgerList[index])
        })
    })
}

const getDataFirebase = async() => {
    const burgers = await getDocument("burgers")
    console.log("burgers", burgers)
    displayBurgers(burgers)
    const burgersHTML = document.querySelectorAll('.burger')
    burgersHTML.forEach((burgerHTML, index) => {
        burgerHTML.addEventListener('click', () => {
            const newBurger = burgers[index]
            newBurger.last_update = new Date()
            displayBurger(burgerList[index])
            updateDocument("burgers", newBurger)
            //deleteDocument("burgers", burgers[index].id)
        })
    })
}


getDataFirebase()




console.log("burgerList", burgerList)

const addBtn = document.querySelector('#addBtn')
const name = document.querySelector('#name')
const description = document.querySelector('#description')
const img = document.querySelector('#image')

addBtn.addEventListener('click', () => {
    createDocument("users", {
        name:  name.value, 
        password: description.value,
        img: img.value,
    })
})



const burgerContainer = document.querySelector('#burger-container')

const burgerContent = document.querySelector('#burger-content')
const title = document.querySelector('#title')

console.log("burgerContainer", burgerContainer)

const displayBurgers = (list) => {
    // Pour afficher tous les burgers dans le container
    list.forEach((burgerObj, i) => {
        burgerContainer.innerHTML += `<div class="cursor-pointer hover:scale-105 transition border-2 p-4 burger">
          <img class="w-full h-40 object-cover" src="${burgerObj.img}"/>
          <div class=" rounded-xl shadow-lg p-4 flex gap-4 items-center text-2xl font-bold">${burgerObj.name}</div>
          <div class=" rounded-xl shadow-lg p-4 flex gap-4 items-center">${burgerObj.prix}</div>
          <div class=" rounded-xl shadow-lg p-4 flex gap-4 items-center">${burgerObj.id}</div>
          <div class=" rounded-xl shadow-lg p-4 flex gap-4 items-center text-sm">${burgerObj?.description?.slice(0, 100)}</div>
          </div>
        `
    })
}

const displayBurger = (burgerObj) => {
    title.innerHTML = burgerObj?.nom
    let listIngredients = ""
    burgerObj?.ingredients.forEach(ingredient => {
        listIngredients += `<div class="border rounded-xl p-2">${ingredient}</div>`
    })
    burgerContent.innerHTML = `<div class="cursor-pointer hover:scale-105 transition border-2 p-4 burger">
    <img class="w-full h-40 object-cover" src="${burgerObj.img}"/>
    <div class=" rounded-xl shadow-lg p-4 flex gap-4 items-center text-2xl font-bold">${burgerObj.nom}</div>
    <div class=" rounded-xl shadow-lg p-4 flex gap-4 items-center">${burgerObj.prix}</div>
    <h3>Liste des ingrédients</h3>
    <div class="flex flex-wrap gap-2">${listIngredients}</div>
    <div class=" rounded-xl shadow-lg p-4 flex gap-4 items-center">${burgerObj.prix}</div>
    <div class=" rounded-xl shadow-lg p-4 flex gap-4 items-center text-sm">${burgerObj.description}</div>
    </div>`
      // Pour afficher tous UN SEUL burgers dans le container

}




// 3/11
// Anton : 7 mins
// Arthur : 13 mins (avec style)
// Eliot : 15 mins (avec style)
// Hugo : 30 mins ()
// INDICE 
// Tom : 38 mins (petite aide GPT + aide mineure)
// Alexi : 40 mins (petite aide GPT + aide mineure)
// Louis : 45 mins (aide ++)
// Frank : 50 mins (indice 1)
// Malik : 58 mins (aide +++)

// Henin : 60 (aide ++ | 20 min de retard)





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