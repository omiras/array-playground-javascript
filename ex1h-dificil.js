/**
 * En Femxa Llevamos un registro de a qué hora se conecta los alumnos. 
 * Para simplificar, pensaremos que un alumno puede entrar solamente a las 10h, a las 11h, a las 12h o a las 13h. 
 * Se considera que un alumno ha llegado tarde si entra más tarde de las 10h. En la siguiente captura de pantalla real, vemos que 2 alumnos han llegado pasadas las 10h: https://oscarm.tinytake.com/media/187835b?filename=1785828368360_TinyTake04-08-2026-09-25-57_639214251676250514.png&sub_type=thumbnail_preview&type=attachment&width=207&height=599
 */

/**
 * Completa el siguiente código para contar todas las personas que han llegado tarde el dia 2 de julio (datos inventados)
 */

const horaConexion = [10, 10, 10, 11, 10, 12, 12, 10, 10, 12];
let numPersonasTarde = 0;

for (let i=0; i<horaConexion.length; i++) {
    // COMPLETAR EL CUERPO DEL BUCLE
}

// NO MODIFICAR
console.log(`El 2 de julio llegaron tarde ${numPersonasTarde} en total.`)

