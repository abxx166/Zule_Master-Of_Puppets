// ETAPA 1: Taquilla VIP

const nombreInput = document.getElementById("nombre");
const contador = document.getElementById("contador");
const zonaSelect = document.getElementById("zona");
const precioSpan = document.getElementById("precio");
const btnComprar = document.getElementById("btnComprar");

// Evento input 
nombreInput.addEventListener("input", function () {
  let longitud = nombreInput.value.length;
  contador.textContent = longitud + "/20 caracteres";

  if (longitud > 20) {
    contador.style.color = "red";
  } else {
    contador.style.color = "white";
  }
});

// Evento change -> Calculadora de precio
zonaSelect.addEventListener("change", function () {
  let valor = zonaSelect.value;
  precioSpan.textContent = "$" + valor;
});

// Evento click -> Validación de compra
btnComprar.addEventListener("click", function (event) {
  event.preventDefault();

  if (nombreInput.value.trim() === "") {
    alert("Error: El nombre no puede estar vacío.");
  } else if (nombreInput.value.length > 20) {
    alert("Error: El nombre excede los 20 caracteres.");
  } else {
    alert("Compra confirmada para " + nombreInput.value + "!");
  }
});


// ETAPA 2: Soundboard

const botonesEfecto = document.querySelectorAll(".efecto");
const pantalla = document.getElementById("pantalla");
const distorsion = document.getElementById("distorsion");
const nivel = document.getElementById("nivel");

// Evento click 

botonesEfecto.forEach(function (boton) {
  boton.addEventListener("click", function () {
    boton.style.backgroundColor = "yellow";
    pantalla.textContent = "Reproduciendo: " + boton.textContent;

    setTimeout(function () {
      boton.style.backgroundColor = "rgb(154 52 18)"; // naranja original
    }, 500);
  });
});

// Evento input 
distorsion.addEventListener("input", function () {
  nivel.textContent = "Nivel de Distorsión: " + distorsion.value + "%";
});

// ETAPA 3: Inventario

const busqueda = document.getElementById("busqueda");
const equipos = document.querySelectorAll(".equipo");

// Evento input 
busqueda.addEventListener("input", function () {
  let texto = busqueda.value.toLowerCase();

  equipos.forEach(function (item) {
    let nombreEquipo = item.textContent.toLowerCase();

    if (nombreEquipo.includes(texto)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

// Evento click 
equipos.forEach(function (item) {
  item.addEventListener("click", function () {
    item.style.color = "limegreen";
    item.style.textDecoration = "line-through";
  });
});