//Base de datos con los menús
const menus = {
  1: {
    lunes: {comida:"Pasta con champiñones y tofu.",cena:"Pinchos morunos con ensalada de rúcula."},
    martes: {comida:"Wok de verduras, patatas y pollo.",cena:"Pizza cottage de atún."},
    miercoles: {comida:"Ensalada de lentejas y feta.",cena:"Bowl de bacalao."},
    jueves: {comida:"Cuscús de pollo al curry.",cena:"Biscotes y ensalada de atún."},
    viernes: {comida:"Ensalada de judías.",cena:"Burritos."}
  },
  2: {
    lunes: {comida:"Brócoli con pollo.",cena:"Salmón y trigueros."},
    martes: {comida:"Ensalada de atún.",cena:"Salteado de pollo y verduras."},
    miercoles: {comida:"Ensalada de garbanzos.",cena:"Bacalao con judías."},
    jueves: {comida:"Ensalada de pollo.",cena:"Lomo y ensalada de rúcula."},
    viernes: {comida:"Atún fresco con verduras.",cena:"Curry de pollo."}
  },
  3: {
    lunes: {comida:"Pollo con verduras.",cena:"Salmón con verduras."},
    martes: {comida:"Lentejas y pavo.",cena:"Brochetas de ternera y verduras"},
    miercoles: {comida:"Ensalada de garbanzos.",cena:"Merluza con verduras."},
    jueves: {comida:"Ensalada de quinoa.",cena:"Salmón con espinacas."},
    viernes: {comida:"Pollo con arroz.",cena:"Wrap mixto."}
  }
};
// 2. Función para renderizar los días en pantalla
function cargarSemana(numSemana){
  const contenedor = document.getElementById("contenedor-dias");
  contenedor.innerHTML = ""; // Vacíamos el contenedor antes de dibujar

  const semana = menus[numSemana];

  // Recorremos cada día del objeto 'semana'
  for (let dia in semana){
    const datosDia = semana[dia];

    // Creamos la estructura HTML de la tarjeta para cada día
    const tarjeta = document.createElement("div");
    tarjeta.className = "tarjeta-dia";

    tarjeta.innerHTML= `
    <h3>${dia.toUpperCase()}</h3>
    <p><strong>Comida:</strong> ${datosDia.comida}</P>
    <p><strong>Cena:</strong> ${datosDia.cena}</P>
    `;

    // Inyectamos la tarjeta dentro del contenedor
    contenedor.appendChild(tarjeta);
  }
}
// 3. Cargamos la Semana 1 por defecto
cargarSemana(1); 