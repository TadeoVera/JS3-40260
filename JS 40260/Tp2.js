/*
Es un sistema que permitirá registrar el presentismo y la ausencia de los alumnos totales ingresados.
Se mostrará dentro de los 30 días la situación final de todos los alumnos.
Cualquier alumno que pase de 18 faltas será reprobado.
*/

//Incorpore más constantes para utilizar un array con el método join *

const distrito = prompt("Indicar distrito escolar");
const escuela = prompt("Indicar nombre del colegio");
const curso = prompt("Indicar curso al cual se le tomara asistencia");
const cantidad = prompt("¿Cuantos alumnos hay en el curso? ( Indicar numero total de alumnos del grado )");
const alumnosTotales = [];
for (i = 0; i < cantidad; i++) {
    alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
    let presencia = prompt("Indicar presencia ingresando la letra P ( cualquier otra letra o palabra será tomada como una ausencia )",nombre);
    if (presencia == "p" || presencia == "P") {
        alumnosTotales[p][1]++;
    }
}


for (i= 0; i < 30; i++) {
    for (alumno in alumnosTotales) {
        tomarAsistencia(alumnosTotales[alumno][0],alumno);
    }
}
    for (alumno in alumnosTotales) {
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    Presentes: ${alumnosTotales[alumno][1]}:<br>
    Ausencias: ${30 - alumnosTotales[alumno][1]}:<br>`;
    if (30 - alumnosTotales[alumno][1] > 18) {
        resultado+= "REPROBADO POR INASISTENCIA<br><br>"; 
    } else {
        resultado+= "<br><br>";
    }
    document.write(resultado)
    
    }
    //____________________________________*
    const info = [
        "Distrito escolar: " + distrito,
        "Instituto: " + escuela,
        "Curso: " + curso,
        "Alumnos totales: " + cantidad]
    
    document.write (info.join ("  //  ")); 
