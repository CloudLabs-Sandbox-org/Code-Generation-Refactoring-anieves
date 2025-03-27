// Calculadora básica en JavaScript
function calculadora() {
    const num1 = parseFloat(prompt("Ingresa el primer número:"));
    const num2 = parseFloat(prompt("Ingresa el segundo número:"));
    const operacion = prompt("Elige una operación: suma (+), resta (-), multiplicación (*), división (/)");

    if (isNaN(num1) || isNaN(num2)) {
        console.log("Por favor, ingresa números válidos.");
        return;
    }

    let resultado;

    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                console.log("No se puede dividir entre 0.");
                return;
            }
            break;
        default:
            console.log("Operación no válida.");
            return;
    }

    console.log(`El resultado de la operación es: ${resultado}`);
}

// Llamar a la función para ejecutar la calculadora
calculadora();