const btn_darkM = document.getElementById("dark_mode");
const cta = document.getElementById("cta")


console.log(cta)
// darkMode.className="boton_oscuro"
btn_darkM.addEventListener("click", () => {
    console.log("pepito");
    cta.style.backgroundColor = 'blue';
    btn_darkM.className = "boton_oscuro";
})

const rojo = document.getElementById("rojo")
const verde = document.getElementById("verde")
const azul = document.getElementById("azul")
const cabecera = document.getElementById("cabecera")


// Evento para el slider Rojo
rojo.addEventListener("input", () => {
    const color = `rgb(${rojo.value}, ${verde.value}, ${azul.value})`;
    cabecera.style.setProperty("background-color", color, "important");
});

// Evento para el slider Verde
verde.addEventListener("input", () => {
    const color = `rgb(${rojo.value}, ${verde.value}, ${azul.value})`;
    cabecera.style.setProperty("background-color", color, "important");
});

// Evento para el slider Azul
azul.addEventListener("input", () => {
    const color = `rgb(${rojo.value}, ${verde.value}, ${azul.value})`;
    cabecera.style.setProperty("background-color", color, "important");
});