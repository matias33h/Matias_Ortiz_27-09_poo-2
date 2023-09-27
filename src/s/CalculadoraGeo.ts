// Define las clases para las formas geométricas
class Circulo {
    constructor(private radio: number) {}

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    calcularPerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
}

class Rectangulo {
    constructor(private longitud: number, private ancho: number) {}

    calcularArea(): number {
        return this.longitud * this.ancho;
    }

    calcularPerimetro(): number {
        return 2 * (this.longitud + this.ancho);
    }
}

class Triangulo {
    constructor(private lado1: number, private lado2: number, private lado3: number) {}

    calcularArea(): number {
        // Agrega aquí el cálculo del área del triángulo (puedes usar la fórmula de Herón).
        return 0;
    }

    calcularPerimetro(): number {
        return this.lado1 + this.lado2 + this.lado3;
    }
}

// Función para calcular el área y el perímetro según la forma seleccionada
function calcular() {
    const forma = document.getElementById("shape") as HTMLSelectElement;
    const areaResult = document.getElementById("areaResult") as HTMLSpanElement;
    const perimeterResult = document.getElementById("perimeterResult") as HTMLSpanElement;
    
    const selectedShape = forma.value;
    
    if (selectedShape === "circle") {
        const radius = parseFloat((document.getElementById("radius") as HTMLInputElement).value);
        const circulo = new Circulo(radius);
        areaResult.textContent = circulo.calcularArea().toFixed(2);
        perimeterResult.textContent = circulo.calcularPerimetro().toFixed(2);
    } else if (selectedShape === "rectangle") {
        const length = parseFloat((document.getElementById("length") as HTMLInputElement).value);
        const width = parseFloat((document.getElementById("width") as HTMLInputElement).value);
        const rectangulo = new Rectangulo(length, width);
        areaResult.textContent = rectangulo.calcularArea().toFixed(2);
        perimeterResult.textContent = rectangulo.calcularPerimetro().toFixed(2);
    } else if (selectedShape === "triangle") {
        const side1 = parseFloat((document.getElementById("side1") as HTMLInputElement).value);
        const side2 = parseFloat((document.getElementById("side2") as HTMLInputElement).value);
        const side3 = parseFloat((document.getElementById("side3") as HTMLInputElement).value);

        // Verificar si los lados forman un triángulo válido antes de calcular el área.
        if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
            const triangulo = new Triangulo(side1, side2, side3);
            areaResult.textContent = triangulo.calcularArea().toFixed(2);
            perimeterResult.textContent = triangulo.calcularPerimetro().toFixed(2);
        } else {
            areaResult.textContent = "No se puede calcular";
            perimeterResult.textContent = "No se puede calcular";
        }
    }
}

// Mostrar campos relevantes según la forma seleccionada
function mostrarCampos() {
    const forma = document.getElementById("shape") as HTMLSelectElement;
    const circleFields = document.getElementById("circleFields");
    const rectangleFields = document.getElementById("rectangleFields");
    const triangleFields = document.getElementById("triangleFields");
    
    const selectedShape = forma.value;
    
    if (circleFields && rectangleFields && triangleFields) {
        circleFields.style.display = selectedShape === "circle" ? "block" : "none";
        rectangleFields.style.display = selectedShape === "rectangle" ? "block" : "none";
        triangleFields.style.display = selectedShape === "triangle" ? "block" : "none";
    }
}

// Agregar un listener para cambiar los campos visibles cuando se cambia la forma seleccionada
const forma = document.getElementById("shape") as HTMLSelectElement;
forma.addEventListener("change", mostrarCampos);

// Agregar un listener para el botón de cálculo
const calculateButton = document.getElementById("calculateButton") as HTMLButtonElement;
calculateButton.addEventListener("click", calcular);

// Mostrar campos iniciales
mostrarCampos();
