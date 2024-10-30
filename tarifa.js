let pagoMes = 10000;
let consumoKWH = 450;
let pagoAjustado = pagoMes + pagoMes * 0.2;
let mensaje = "";

(consumoKWH >= 300) ? (mensaje = "Debido a que su hogar tuvo un consumo de " + consumoKWH + "kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado el total a pagar, que será de $" + pagoAjustado + ".") : (mensaje = "Debido a que su hogar tuvo un consumo de " + consumoKWH + "kwh, en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%), cumplimos con informarle que no se le ha aumentado el monto a pagar, y sigue siendo de $" + pagoMes + ".");
console.log(mensaje);