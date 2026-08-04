const reservasBooking = [
    "03/08/2026",
    "07/08/2026",
    "12/08/2026",
    "18/08/2026",
    "24/08/2026",
    "29/08/2026",
    "04/09/2026",
    "11/09/2026",
    "17/09/2026",
    "25/09/2026"
];

const reservasTrivago = [
    "01/08/2026",
    "05/08/2026",
    "09/08/2026",
    "15/08/2026",
    "21/08/2026",
    "27/08/2026",
    "31/08/2026",
    "06/09/2026",
    "09/09/2026",
    "14/09/2026",
    "19/09/2026",
    "22/09/2026",
    "28/09/2026",
    "03/10/2026",
    "08/10/2026"
];

/**
 * El método .length https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/length  nos permite conocer el tamaño de un array. Úsalo adecuadamente para obtener las reservas totales a través de las plataformas Booking y Trivago . Corregir 13.45
 */

let reservasTotales = reservasBooking.length + reservasTrivago.length; // <-- MODIFICA ESTA LÍNEA
console.log("Reservas totales: ", reservasTotales);