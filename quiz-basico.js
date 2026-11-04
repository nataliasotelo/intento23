// ============================================
// 1. SELECCIONAR los elementos de la página
// ============================================

// Marcador y barra
const puntosTexto = document.getElementById("puntos");
const barra = document.getElementById("progreso");
const textoProgreso = document.getElementById("texto-progreso");

// Pregunta 1 (radio)
const p1a = document.getElementById("p1a");
const p1b = document.getElementById("p1b");
const p1c = document.getElementById("p1c");
const boton1 = document.getElementById("boton1");
const feedback1 = document.getElementById("feedback1");

// Pregunta 2 (radio)
const p2a = document.getElementById("p2a");
const p2b = document.getElementById("p2b");
const p2c = document.getElementById("p2c");
const boton2 = document.getElementById("boton2");
const feedback2 = document.getElementById("feedback2");

// Pregunta 3 (radio)
const p3a = document.getElementById("p3a");
const p3b = document.getElementById("p3b");
const p3c = document.getElementById("p3c");
const boton3 = document.getElementById("boton3");
const feedback3 = document.getElementById("feedback3");

// Pregunta 4 (completar con texto)
const p4 = document.getElementById("p4");
const boton4 = document.getElementById("boton4");
const feedback4 = document.getElementById("feedback4");

// Pregunta 5 (completar con texto)
const p5 = document.getElementById("p5");
const boton5 = document.getElementById("boton5");
const feedback5 = document.getElementById("feedback5");

// ============================================
// 2. ESTADO del juego (variables)
// ============================================

let puntos = 0;
let correctas = 0;
const totalPreguntas = 5;

// ============================================
// 3. FUNCIONES
// ============================================

// Actualiza lo que se ve en pantalla según las variables
function actualizarMarcador() {
  puntosTexto.textContent = puntos;

  const porcentaje = (correctas / totalPreguntas) * 100;
  barra.style.width = porcentaje + "%";

  textoProgreso.textContent = correctas + " de " + totalPreguntas + " correctas";
}

// ---------- Preguntas con radio button ----------

// Pregunta 1: la respuesta correcta es la opción B
function responderPregunta1() {
  // ¿No marcó ninguna opción?
  if (p1a.checked === false && p1b.checked === false && p1c.checked === false) {
    feedback1.textContent = "Elegí una opción primero.";
    feedback1.className = "feedback aviso";
    return;
  }

  if (p1b.checked === true) {
    // Acertó
    puntos = puntos + 10;
    correctas = correctas + 1;
    feedback1.textContent = "¡Correcto! +10 puntos";
    feedback1.className = "feedback ok";

    // Bloquear la pregunta
    p1a.disabled = true;
    p1b.disabled = true;
    p1c.disabled = true;
    boton1.disabled = true;

    actualizarMarcador();
  } else {
    // Se equivocó: no suma y puede intentar de nuevo
    feedback1.textContent = "Todavía no. Probá de nuevo.";
    feedback1.className = "feedback error";
  }
}

// Pregunta 2: la respuesta correcta es la opción C
function responderPregunta2() {
  if (p2a.checked === false && p2b.checked === false && p2c.checked === false) {
    feedback2.textContent = "Elegí una opción primero.";
    feedback2.className = "feedback aviso";
    return;
  }

  if (p2c.checked === true) {
    puntos = puntos + 10;
    correctas = correctas + 1;
    feedback2.textContent = "¡Correcto! +10 puntos";
    feedback2.className = "feedback ok";

    p2a.disabled = true;
    p2b.disabled = true;
    p2c.disabled = true;
    boton2.disabled = true;

    actualizarMarcador();
  } else {
    feedback2.textContent = "Todavía no. Probá de nuevo.";
    feedback2.className = "feedback error";
  }
}

// Pregunta 3: la respuesta correcta es la opción A
function responderPregunta3() {
  if (p3a.checked === false && p3b.checked === false && p3c.checked === false) {
    feedback3.textContent = "Elegí una opción primero.";
    feedback3.className = "feedback aviso";
    return;
  }

  if (p3a.checked === true) {
    puntos = puntos + 10;
    correctas = correctas + 1;
    feedback3.textContent = "¡Correcto! +10 puntos";
    feedback3.className = "feedback ok";

    p3a.disabled = true;
    p3b.disabled = true;
    p3c.disabled = true;
    boton3.disabled = true;

    actualizarMarcador();
  } else {
    feedback3.textContent = "Todavía no. Probá de nuevo.";
    feedback3.className = "feedback error";
  }
}

// ---------- Preguntas para completar con palabras ----------

// Pregunta 4: la palabra correcta es "createElement"
function responderPregunta4() {
  // .value es lo que escribió la persona
  // .trim() saca los espacios de los costados
  // .toLowerCase() lo pasa a minúsculas (así "CreateElement" también vale)
  const respuesta = p4.value.trim().toLowerCase();

  // ¿Dejó el campo vacío?
  if (respuesta === "") {
    feedback4.textContent = "Escribí una palabra primero.";
    feedback4.className = "feedback aviso";
    return;
  }

  if (respuesta === "createelement") {
    puntos = puntos + 10;
    correctas = correctas + 1;
    feedback4.textContent = "¡Correcto! +10 puntos";
    feedback4.className = "feedback ok";

    p4.disabled = true;
    boton4.disabled = true;

    actualizarMarcador();
  } else {
    feedback4.textContent = "Todavía no. Pista: empieza con \"create\".";
    feedback4.className = "feedback error";
  }
}

// Pregunta 5: la palabra correcta es "add"
function responderPregunta5() {
  const respuesta = p5.value.trim().toLowerCase();

  if (respuesta === "") {
    feedback5.textContent = "Escribí una palabra primero.";
    feedback5.className = "feedback aviso";
    return;
  }

  if (respuesta === "add") {
    puntos = puntos + 10;
    correctas = correctas + 1;
    feedback5.textContent = "¡Correcto! +10 puntos";
    feedback5.className = "feedback ok";

    p5.disabled = true;
    boton5.disabled = true;

    actualizarMarcador();
  } else {
    feedback5.textContent = "Todavía no. Pista: es el verbo en inglés para agregar.";
    feedback5.className = "feedback error";
  }
}

// ============================================
// 4. EVENTOS: conectar cada botón con su función
// ============================================

boton1.addEventListener("click", responderPregunta1);
boton2.addEventListener("click", responderPregunta2);
boton3.addEventListener("click", responderPregunta3);
boton4.addEventListener("click", responderPregunta4);
boton5.addEventListener("click", responderPregunta5);

// Mostrar el estado inicial al cargar la página
actualizarMarcador();
