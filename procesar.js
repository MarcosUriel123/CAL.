function calcular(event) {
    event.preventDefault(); // Previene el envío del formulario y la recarga de la página

    // Obtiene los valores de los campos de entrada
    var constante = parseFloat(document.getElementById("constante").value); // Convierte a número
    var exponente = parseFloat(document.getElementById("exponente").value); // Convierte a número
    var variable = parseFloat(document.getElementById("variable").value); // Convierte a número

    var resultado = document.getElementById("resultado");
    var resultadoGrafica = document.getElementById("resultado_grafica");
    var funcion;

    // Verifica si los valores son numéricos
    if (isNaN(constante) || isNaN(exponente) || isNaN(variable)) {
        resultado.innerHTML = "Datos nulos o incorrectos";

        if (isNaN(constante)) {
            document.getElementById("constante").focus();
        } else if (isNaN(exponente)) {
            document.getElementById("exponente").focus();
        } else {
            document.getElementById("variable").focus();
        }

        return;
    }

    // Calcula la derivada de C * X^N
    funcion = (exponente * constante) + " * " + variable + "^" + (exponente - 1);

    // Muestra el resultado
    resultado.innerHTML = funcion; // Inserta el resultado en la etiqueta con id "resultado"
    resultadoGrafica.innerHTML = funcion; // Inserta el resultado en la etiqueta con id "resultado_grafica"
}