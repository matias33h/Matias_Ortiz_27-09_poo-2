

class Contacto {
    nombre: string;
    correo: string;
    telefono: string;

    constructor(nombre: string, correo: string, telefono: string) {
        this.nombre = nombre;
        this.correo = correo;
        this.telefono = telefono;
    }
}

class GestorContactos {
    contactos: Contacto[] = [];

    agregarContacto(contacto: Contacto): void {
        this.contactos.push(contacto);
    }

    buscarContactoPorNombre(nombre: string): Contacto[] {
        return this.contactos.filter(contacto => contacto.nombre.toLowerCase().includes(nombre.toLowerCase()));
    }

    mostrarListaDeContactos(): Contacto[] {
        return this.contactos;
    }
}

// Declarar gestor como variable global
const gestor = new GestorContactos();

// Obtener elementos del DOM
const nombreInput = document.getElementById("nombre") as HTMLInputElement;
const correoInput = document.getElementById("correo") as HTMLInputElement;
const telefonoInput = document.getElementById("telefono") as HTMLInputElement;
const agregarButton = document.getElementById("agregar");

const buscarNombreInput = document.getElementById("buscarNombre") as HTMLInputElement;
const buscarButton = document.getElementById("buscar");

const listaContactos = document.getElementById("listaContactos");

// Verificar si el elemento listaContactos existe antes de actualizarlo
function actualizarListaContactos(contactosMostrar: Contacto[] = gestor.mostrarListaDeContactos()) {
    if (!listaContactos) {
        console.error("Elemento 'listaContactos' no encontrado en el DOM.");
        return;
    }

    listaContactos.innerHTML = ""; // Limpiar la lista
    contactosMostrar.forEach((contacto, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}. ${contacto.nombre}, ${contacto.correo}, ${contacto.telefono}`;
        listaContactos.appendChild(li);
    });
}

// Asignar eventos a los botones
if (agregarButton) {
    agregarButton.addEventListener("click", () => {
        const nombre = nombreInput.value;
        const correo = correoInput.value;
        const telefono = telefonoInput.value;
        const nuevoContacto = new Contacto(nombre, correo, telefono);
        gestor.agregarContacto(nuevoContacto);
        actualizarListaContactos();
        // Limpiar campos de entrada
        nombreInput.value = "";
        correoInput.value = "";
        telefonoInput.value = "";
    });
}

if (buscarButton) {
    buscarButton.addEventListener("click", () => {
        const nombreABuscar = buscarNombreInput.value;
        const resultado = gestor.buscarContactoPorNombre(nombreABuscar);
        actualizarListaContactos(resultado); // Mostrar solo el resultado de la búsqueda
    });
}

// Inicializar la lista de contactos
actualizarListaContactos();
