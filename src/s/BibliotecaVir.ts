// Definición de la clase Libro
class Libro {
    private titulo: string;
    private autor: string;
    private prestado: boolean;

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.prestado = false;
    }

    // Método para prestar el libro
    prestar() {
        if (!this.prestado) {
            this.prestado = true;
            console.log(`El libro "${this.titulo}" de ${this.autor} ha sido prestado.`);
        } else {
            console.log(`El libro "${this.titulo}" de ${this.autor} ya ha sido prestado.`);
        }
    }

    // Método para devolver el libro
    devolver() {
        if (this.prestado) {
            this.prestado = false;
            console.log(`El libro "${this.titulo}" de ${this.autor} ha sido devuelto.`);
        } else {
            console.log(`El libro "${this.titulo}" de ${this.autor} no estaba prestado.`);
        }
    }

    // Método para verificar si el libro está prestado
    estaPrestado() {
        return this.prestado;
    }
}

// Ejemplo de uso
const libro1 = new Libro("Harry Potter y la piedra filosofal", "J.K. Rowling");
const libro2 = new Libro("Cien años de soledad", "Gabriel García Márquez");

libro1.prestar();
libro2.prestar();
libro1.devolver();

console.log(`¿El libro 1 está prestado? ${libro1.estaPrestado()}`);
console.log(`¿El libro 2 está prestado? ${libro2.estaPrestado()}`);
