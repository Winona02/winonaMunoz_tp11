let operador = "multiplicacion";
let resultado = 0;
let num1 = 40;
let num2 = 20;

switch (operador) {
    case "suma":
        resultado = num1 + num2;
        console.log("El resultado de sumar " + num1 + " + " + num2 + " es " + resultado);
        
        break;

        case "resta":
        resultado = num1 - num2;
        console.log("El resultado de restar " + num1 + " - " + num2 + " es " + resultado);
        
        break;

        case "division":
        resultado = num1 / num2;
        console.log("El resultado de dividir " + num1 + " por " + num2 + " es " + resultado);
        
        break;

        case "multiplicacion":
        resultado = num1 * num2;
        console.log("El resultado de multiplicarar " + num1 + " por " + num2 + " es " + resultado);
        
        break;

    default:
        console.log("Las operaciones aceptadas son: suma - resta - division - multiplicacion");
        
        break;
}