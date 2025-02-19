const readlineSync = require('readline-sync');


function pedirCedula() {
  let cedulaStr;
  while (true) {
    cedulaStr = readlineSync.question("Cédula: ").trim();
    if (!/^\d+$/.test(cedulaStr)) {
      console.log("La cédula debe contener solo dígitos.");
      continue;
    }
    if (cedulaStr.length !== 8 && cedulaStr.length !== 10) {
      console.log("Introduce un número de cédula válido (8 o 10 dígitos).");
      continue;
    }
    return parseInt(cedulaStr, 10);
  }
}

function pedirFechaNacimiento() {
  const regexFecha = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/\d{4}$/;
  let fecha;
  while (true) {
    fecha = readlineSync.question("Fecha de nacimiento (dd/mm/yyyy): ").trim();
    if (!regexFecha.test(fecha)) {
      console.log("Introduce una fecha válida en formato dd/mm/yyyy.");
      continue;
    }
    return fecha;
  }
}

function pedirCorreo() {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let correo;
  while (true) {
    correo = readlineSync.question("Correo: ").trim();
    if (!regexEmail.test(correo)) {
      console.log("Introduce un correo electrónico válido.");
      continue;
    }
    return correo;
  }
}

function pedirTexto(mensaje) {
  // Permitimos letras, espacios y algunos caracteres acentuados (opcional)
  const regexTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
  let texto;
  while (true) {
    texto = readlineSync.question(mensaje).trim();
    if (!regexTexto.test(texto)) {
      console.log("Por favor, ingresa un valor válido (solo letras y espacios).");
      continue;
    }
    return texto;
  }
}

function obtenerUsuarios() {
  return [
    {
      id: 1,
      usuario: 'Marcela',
      cedula: 78337123,
      fechaNaci: '08/12/1990',
      correo: 'marcela@gmail.com',
      Ciudadrecidencia: 'Barranquilla',
      CiudadOrigen: 'Barranquilla',
      artistaFavorito: 'Shakira',
      cancionFavorita1: 'Ojos Así',
      cancionFavorita2: 'Ciega Sordo Muda',
      cancionFavorita3: 'Inevitable'
    },
    {
      id: 2,
      usuario: 'Carlos',
      cedula: 10234567,
      fechaNaci: '12/05/1985',
      correo: 'carlos@gmail.com',
      Ciudadrecidencia: 'Bogotá',
      CiudadOrigen: 'Bogotá',
      artistaFavorito: 'Juanes',
      cancionFavorita1: 'La Camisa Negra',
      cancionFavorita2: 'A Dios le Pido',
      cancionFavorita3: 'Me Enamora'
    },
    {
      id: 3,
      usuario: 'Sofía',
      cedula: 20456789,
      fechaNaci: '22/09/1992',
      correo: 'sofia@hotmail.com',
      Ciudadrecidencia: 'Medellín',
      CiudadOrigen: 'Medellín',
      artistaFavorito: 'Shakira',
      cancionFavorita1: 'Hips Don\'t Lie',
      cancionFavorita2: 'Waka Waka',
      cancionFavorita3: 'Whenever, Wherever'
    },
    {
      id: 4,
      usuario: 'Alejandro',
      cedula: 30567890,
      fechaNaci: '15/03/1988',
      correo: 'alejandro@yahoo.com',
      Ciudadrecidencia: 'Cali',
      CiudadOrigen: 'Cali',
      artistaFavorito: 'J Balvin',
      cancionFavorita1: 'Mi Gente',
      cancionFavorita2: 'Safari',
      cancionFavorita3: 'Reggaeton'
    },
    {
      id: 5,
      usuario: 'Camila',
      cedula: 40678901,
      fechaNaci: '30/11/1995',
      correo: 'camila@outlook.com',
      Ciudadrecidencia: 'Cartagena',
      CiudadOrigen: 'Cartagena',
      artistaFavorito: 'Karol G',
      cancionFavorita1: 'Tusa',
      cancionFavorita2: 'Bichota',
      cancionFavorita3: 'Location'
    },
    {
      id: 6,
      usuario: 'Juan',
      cedula: 50789012,
      fechaNaci: '07/07/1980',
      correo: 'juan@gmail.com',
      Ciudadrecidencia: 'Bucaramanga',
      CiudadOrigen: 'Bucaramanga',
      artistaFavorito: 'Fonseca',
      cancionFavorita1: 'Eres Mi Sueño',
      cancionFavorita2: 'Te Mando Flores',
      cancionFavorita3: 'Para Quererte'
    }
  ];
}

// Función para agregar un nuevo usuario
function agregarUsuario(usuarios) {
  console.log("\nIngrese los datos del nuevo usuario:");

  // Generar el id automáticamente (suma 1 al mayor id existente)
  let nextId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;

  let usuarioNombre = pedirTexto("Nombre de usuario: ");
  let cedula = pedirCedula();
  let fechaNaci = pedirFechaNacimiento();
  let correo = pedirCorreo();
  let Ciudadrecidencia = pedirTexto("Ciudad de residencia: ");
  let CiudadOrigen = pedirTexto("Ciudad de origen: ");
  let artistaFavorito = pedirTexto("Artista favorito: ");
  let cancionFavorita1 = pedirTexto("Canción favorita 1: ");
  let cancionFavorita2 = pedirTexto("Canción favorita 2: ");
  let cancionFavorita3 = pedirTexto("Canción favorita 3: ");

  let nuevoUsuario = {
    id: nextId,
    usuario: usuarioNombre,
    cedula,
    fechaNaci,
    correo,
    Ciudadrecidencia,
    CiudadOrigen,
    artistaFavorito,
    cancionFavorita1,
    cancionFavorita2,
    cancionFavorita3
  };

  usuarios.push(nuevoUsuario);
  console.log("\n¡Nuevo usuario agregado exitosamente!");
  return usuarios;
}

// Función para mostrar la información personal de un usuario según su posición (índice)
function mostrarInformacionUsuario(usuarios) {
  let pos = parseInt(readlineSync.question("Ingresa la posición del usuario que deseas ver (comenzando desde 0): "));
  if (isNaN(pos) || pos < 0 || pos >= usuarios.length) {
    console.log("Posición no válida.");
  } else {
    console.log(`\nInformación del usuario en la posición ${pos}:`);
    console.log(usuarios[pos]);
    
  }
  
}


// Función de menú
function menu(usuarios) {
    let opcion;
    // Se repite hasta que la opción sea "1" o "2"
    do {
      console.log("\nMenú de opciones:");
      console.log("1. Agregar un nuevo usuario");
      console.log("2. Mostrar la información de un usuario existente");
      opcion = readlineSync.question("Elige una opción (1 o 2): ").trim();
      if (opcion !== "1" && opcion !== "2") {
        console.log("Opción no válida. Por favor, elige 1 o 2.");
      }
    } while (opcion !== "1" && opcion !== "2");
  
    // Se ejecuta la acción correspondiente según la opción válida ingresada
    switch (opcion) {
      case "1":
        usuarios = agregarUsuario(usuarios);
        break;
      case "2":
        mostrarInformacionUsuario(usuarios);
        break;
    }
    return usuarios;
  }
  


// Obtenemos la lista inicial de usuarios
let listaUsuarios = obtenerUsuarios();

listaUsuarios = menu(listaUsuarios);


