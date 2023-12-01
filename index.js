import { Contador } from "./Contador.1.js";

const modal = document.querySelector("dialog");

const p1 = new Contador("Nosotros", document.getElementById("jugador1Container"));
const p2 = new Contador("Ellos", document.getElementById("jugador2Container"));


document.getElementById("reset").addEventListener("click",()=>{modal.showModal();})
document.getElementById("volver").addEventListener("click",()=>{modal.close();})
document.getElementById("aceptar").addEventListener("click",()=> {
    p1.reset();
    p2.reset();
    modal.close();
})




