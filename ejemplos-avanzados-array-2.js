const usuarios = [{
    username: 'omiras',
    password: '****',
    subscribed: true // indica si estamos suscritos a la newletter
}, {
    username: 'vcollazos',
    password: '****',
    subscribed: true
}, {
    username: 'qzaman___',
    password: '****',
    subscribed: false
}];

// Busca en la base de datos si existe un usuario con el usernae 'omiras'

let resultado = usuarios.some( (usuario) => {
    //console.log("Busco: ", usuario);
    return usuario.username == 'omiras';
} )

// Queremos comprobar si todos los usuarios estan suscritos a la newletter

let todosSuscritos = usuarios.every(usuario => usuario.subscribed)
//console.log(todosSuscritos)

// Find. Dame el primer usuario que tenga más de 6 caracteres en su username
let usuarioLargo = usuarios.find(usuario => usuario.username.length > 6);
console.log(usuarioLargo);

// FindIndex. Dame la POSICIÓN que ocupa en el array el primer usuario que tenga más de 6 carácteres en su username
let usuarioLargoPosicion = usuarios.findIndex(usuario => usuario.username.length > 6);
console.log(usuarioLargoPosicion);

// Slice. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice


