/* Calculador de indice de masa corporal*/

//clase Persona
class Persona {
	constructor(nombre, edad, altura, peso) {
		this.nombre = nombre;
		this.edad = edad;
		this.altura = altura;
		this.peso = peso;
	}
}
//array donde se guardara el peso de las personas para despues sacar un promedio
let arrayPesos = [];

//funcion para calcular promedio de peso ingresado por usuarios
//los diferentes pesos se guardaran en un array y luego se calcula el promedio

function calcularPromedio() {
	let valoresTotales = arrayPesos.reduce((acumulador, item) => {
		return (acumulador += item);
	}, 0);
	let promedio = valoresTotales / arrayPesos.length;
	return promedio;
}
//pedir nombre
function pedirNombre() {
	let nombre;

	nombre = prompt("Ingrese su nombre");

	return nombre;
}

//Pedir edad para crear persona
//Si no cumple con la condicion, no se termina el bucle y no podrá avanzar
function pedirEdad() {
	let validacion = true;
	let edad;
	do {
		edad = parseInt(prompt("Ingrese su edad"));
		if (Number.isInteger(edad)) {
			validacion = false;
		}
	} while (validacion);

	return edad;
}

//Pedir valor del peso y validar que sea entero
//Si no cumple con la condicion, no se termina el bucle y no podrá avanzar
function pedirPeso() {
	let validacion = true;
	let peso;
	do {
		peso = parseInt(prompt("Ingrese su peso en KG. Solo numeros enteros. Por ejemplo 76."));
		if (Number.isInteger(peso)) {
			validacion = false;
		}
	} while (validacion);

	return peso;
}
//Pedir estatura y validar que sea un numero y además, que sea con decimales.
//Si no cumple con la condicion, no se termina el bucle y no podrá avanzar
function pedirEstatura() {
	let validacion = true;
	let estatura;
	do {
		estatura = parseFloat(prompt("Ingrese su altura en metros y con punto(.). Por ejemplo 1.76"));
		if (!isNaN(estatura) && estatura % 1 !== 0) {
			validacion = false;
		}
	} while (validacion);
	return estatura;
}

//calcular IMC

function calcularImc(peso, altura) {
	return peso / (altura * altura);
}

//Funcion para mostrar el resultado
function resultado(valorObtenido) {
	if (valorObtenido < 18.5) {
		alert("Usted tiene bajo peso");
	} else if (valorObtenido >= 18.5 && valorObtenido <= 24.9) {
		alert("Usted tiene peso normal");
	} else if (valorObtenido >= 25 && valorObtenido <= 29.9) {
		alert("Usted tiene sobrepeso");
	} else if (valorObtenido >= 29.9) {
		alert("Usted tiene obesidad");
	} else {
		alert("error");
	}
}

//Boton para lanzar el calculador
let boton = document.getElementById("boton");

boton.addEventListener("click", () => {
	//Funcion para mostrar los resultador del calculo de IMC, parametros con funciones para probar
	const persona = new Persona(pedirNombre(), pedirEdad(), pedirEstatura(), pedirPeso());
	resultado(calcularImc(persona.peso, persona.altura));
	arrayPesos.push(persona.peso);
	promedio = alert("El promedio de peso de todos los usuarios es de:" + calcularPromedio() + " Kgs");
	confirm("Gracias por su visita");
});
