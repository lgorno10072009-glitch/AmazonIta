let steal1 = document.getElementById("steal1");
let btn = document.getElementById("controlloMail");
btn.addEventListener("click", save);
function save(){
    let elemento1= localStorage.setItem("email",steal1.value);
    localStorage.getItem("email");

    console.log(localStorage);
    localStorage.clear();
}