// qui salvo in local storage gli elementi di una lista
let todoList = [];
// array vuoto
function addToList() {
  // funzione per aggiungere alla lista
  let inputValue = document.querySelector("#toDoInput").value;
  // prendo il valore dell'input
  todoList.push(inputValue);
  // pusho nell'array il valore dell'input
  let todoListString = JSON.stringify(todoList);
  // converto in stringa l'array per poterlo salvare in locale
  localStorage.setItem("todo-list", todoListString);
  // una volta convertito in stringa lo salvo in locale e gli do una chiave e il valore
  // della chiave
  visualizeAllTodos();
  // funzione per printare a schermo un todo
}

function visualizeAllTodos() {
  // funzione per printare
  let todoListDiv = document.querySelector("#todo-list");
  todoListDiv.innerHTML = "";
  // pulisco la div
  for (let todo of todoList) {
    todoListDiv.innerHTML += `<div>${todo}</div>`;
  }
  // ciclo per stampare a schermo in una div i todo
}

window.onload = function () {
  // al caricamento della pagina si svolgerà la funzione, window prima di onload è opzionale
  // perche' è sottointeso, stassa cosa per localstorage dove si può omettere il
  // window.
  let saveTodoSTring = localStorage.getItem("todo-list");
  // prendo i dati in stringa salvati richiamando la chiave di prima e li metto in una variabile
  if (saveTodoSTring !== null) {
    // senza l'if andrebbe in errore perche' cercherebbe di convertire il nulla
    todoList = JSON.parse(saveTodoSTring);
    visualizeAllTodos();
    // questo if se è vero mi converte l'array da stringa per poi poterlo printare a
    // schermo
  }
};
