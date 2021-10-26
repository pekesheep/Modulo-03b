const empleado = { 
    bruto: 14500, 
    hijos: 2, 
    pagas: 14
};
let retencion;
let netoAnual=0;
let netoMensual=0;

switch(true) {
     case (empleado.bruto < 12000): retencion=0; 
     break;
     case (empleado.bruto < 24000): retencion=8; 
     break;
     case (empleado.bruto < 34000): retencion=16; 
     break;
     default: retencion=30; 
     break;
}
retencion = (empleado.hijos == 2 && retencion != 0) ? retencion -2 : retencion;
console.log("La retención de los", empleado.bruto, "€ al año es del", retencion, "%.");

netoAnual = empleado.bruto-empleado.bruto*(retencion/100);
console.log("El sueldo neto anual es",netoAnual,"€.");

netoMensual = netoAnual/empleado.pagas;
console.log("El sueldo neto mensual es",netoMensual,"€ dividido en",empleado.pagas,"pagas.");