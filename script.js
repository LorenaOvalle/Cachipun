// Paso 1: Solicitar datos
// Jugadas 1: Piedra 2: Papel 3: Tijeras

var juegos = prompt("¿Cuántas veces quieres jugar? ");
// Paso 2: operacion
alert("piedra 👊,papel ✋,tijeras ✌");

function partida(jugador, maquina) {
  if (jugador === maquina) {
    return alert(`¡Es un Empate! 🙀`);
  }
  if (jugador === 3 && maquina === 2) {
    return alert(
      "Felicitaciones: ¡Ganaste!. 😸 Tiraste tijeras y la máquina papel"
    );
  }
  if (jugador === 2 && maquina === 1) {
    return alert(
      "Felicitaciones: ¡Ganaste!. 😸 Tiraste papel y la máquina piedra"
    );
    jugador;
  }
  if (jugador === 1 && maquina === 3) {
    return alert(
      "Felicitaciones: ¡Ganaste!. 😸 Tiraste piedra y la máquina tijeras"
    );
  }
  if (jugador === 2 && maquina === 3) {
    return alert("Lo lamento: Perdiste 😿 Tiraste pepel y la máquina tijeras");
  }
  if (jugador === 1 && maquina === 2) {
    return alert("Lo lamento: Perdiste 😿  Tiraste piedra y la máquina papel");
  }
  if (jugador === 3 && maquina === 1) {
    return alert(
      "Lo lamento: Perdiste 😿  Tiraste tijeras y la máquina piedra"
    );
  }
}
// Paso 3: Mostrar resultado
for (iteracion = 1; iteracion <= juegos; iteracion++) {
  let jugador = parseInt(
    prompt("Ingrese el número: piedra (1), papel (2) o tijeras (3)")
  );
  console.log(jugador);
  let maquina = Math.floor(Math.random() * 3);

  partida(jugador, maquina);
}
