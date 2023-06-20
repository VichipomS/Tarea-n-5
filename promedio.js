
function SumaNotas(notas)  {

    var suma = 0;
    for (var i = 0; i < notas.length; i++) {
      suma += notas[i];
    }
    return suma;
  }
  function PromedioNotas(notas) {
    var suma = SumaNotas(notas);

    var promedio = suma / notas.length;

    return promedio;
  }
  var notas = [6, 8, 9, 2, 5, 10];

  var sumaNotas = SumaNotas(notas);

  var promedioNotas = PromedioNotas(notas);
  
  console.log("La suma de las notas es: " + sumaNotas);
  
  console.log("El promedio de las notas es: " + promedioNotas);
  

