let nome = document.getElementById("nome");
let cognome = document.getElementById("cognome");
let telefono = document.getElementById("telefono");
let indirizzo = document.getElementById("indirizzo_casa");
let btn = document.getElementById("btn");

btn.addEventListener("click" , steal);
function steal() {
   let elemento1= localStorage.setItem("nome",nome.value);
    localStorage.getItem("nome");

    let elemento2 = localStorage.setItem( "cognome", cognome.value);
        localStorage.getItem("cognome");

   let elemento3= localStorage.setItem("telefono",telefono.value);
    localStorage.getItem("telefono");

    let elemento4 = localStorage.setItem( "indirizzo", indirizzo.value);
        localStorage.getItem("indirizzo");

    console.log(localStorage);
    localStorage.clear();
}
