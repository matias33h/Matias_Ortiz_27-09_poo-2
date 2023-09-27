




// Obtener elemento del nombre de la mascota y botón de confirmación
const nombreMascotaInput = document.getElementById("nombreMascota") as HTMLInputElement;
const confirmarNombreButton = document.getElementById("confirmarNombre");

// Asignar evento para confirmar el nombre
if (confirmarNombreButton) {
    confirmarNombreButton.addEventListener("click", () => {
        const nuevoNombre = nombreMascotaInput.value;
        mascota.nombre = nuevoNombre;
        actualizarEstado(); // Actualizar el estado para mostrar el nuevo nombre
        nombreMascotaInput.value = ""; // Limpiar el campo de entrada
    });
}




// Obtener elemento de la imagen
const imagenMascota = document.getElementById("imagenMascota") as HTMLImageElement;

// Obtener elemento de la URL de la imagen y botón de carga
const urlImagenInput = document.getElementById("urlImagen") as HTMLInputElement;
const cargarImagenButton = document.getElementById("cargarImagen");

// Verificar si el elemento cargarImagenButton existe antes de asignar el evento
if (cargarImagenButton) {
    cargarImagenButton.addEventListener("click", () => {
        const urlImagen = urlImagenInput.value;
        imagenMascota.src = urlImagen;
        imagenMascota.alt = "Imagen de la mascota";
        urlImagenInput.value = ""; // Limpiar el campo de entrada
    });
}






class MascotaVirtual {
    nombre: string;
    nivelFelicidad: number;
    nivelHambre: number;
    nivelEnergia: number;

    constructor(nombre: string) {
        this.nombre = nombre;
        this.nivelFelicidad = 50;
        this.nivelHambre = 50;
        this.nivelEnergia = 50;
    }

    alimentar(): void {
        this.nivelHambre -= this.generarNumeroAleatorio(10, 20);
        if (this.nivelHambre < 0) {
            this.nivelHambre = 0;
        }
        this.nivelFelicidad += this.generarNumeroAleatorio(5, 10);
        this.nivelEnergia += this.generarNumeroAleatorio(5, 10);
        this.verEstado();
    }

    jugar(): void {
        this.nivelFelicidad += this.generarNumeroAleatorio(10, 20);
        this.nivelEnergia -= this.generarNumeroAleatorio(5, 15);
        if (this.nivelEnergia < 0) {
            this.nivelEnergia = 0;
        }
        
        // Añadir aumento del nivel de hambre al jugar
        this.nivelHambre += this.generarNumeroAleatorio(5, 10);
        
        this.verEstado();
    }

    descansar(): void {
        this.nivelEnergia += this.generarNumeroAleatorio(10, 20);
        this.verEstado();
    }

    verEstado(): void {
        console.log(`${this.nombre}:`);
        console.log(`Nivel de felicidad: ${this.nivelFelicidad}`);
        console.log(`Nivel de hambre: ${this.nivelHambre}`);
        console.log(`Nivel de energía: ${this.nivelEnergia}`);
        console.log("-----------------------");
    }

    private generarNumeroAleatorio(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

const mascota = new MascotaVirtual("Tu Mascota");

// Obtener elementos del DOM
const nombreElement = document.getElementById("nombre");
const felicidadElement = document.getElementById("felicidad");
const hambreElement = document.getElementById("hambre");
const energiaElement = document.getElementById("energia");

const alimentarButton = document.getElementById("alimentar");
const jugarButton = document.getElementById("jugar");
const descansarButton = document.getElementById("descansar");

// Funciones para actualizar la interfaz de usuario
function actualizarEstado() {
    if (nombreElement && felicidadElement && hambreElement && energiaElement) {
        nombreElement.textContent = `Nombre: ${mascota.nombre}`;
        felicidadElement.textContent = `Felicidad: ${mascota.nivelFelicidad}`;
        hambreElement.textContent = `Hambre: ${mascota.nivelHambre}`;
        energiaElement.textContent = `Energía: ${mascota.nivelEnergia}`;
    }
}

// Asignar eventos a los botones
if (alimentarButton && jugarButton && descansarButton) {
    alimentarButton.addEventListener("click", () => {
        mascota.alimentar();
        actualizarEstado();
    });

    jugarButton.addEventListener("click", () => {
        mascota.jugar();
        actualizarEstado();
    });

    descansarButton.addEventListener("click", () => {
        mascota.descansar();
        actualizarEstado();
    });
}

// Inicializar la interfaz de usuario
actualizarEstado();
