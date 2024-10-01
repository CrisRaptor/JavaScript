///////////////////Ejercicios JS01///////////////////
let num1, num2;
num1 = prompt("Numero 1");
num2 = prompt("Numero 2");
let str = `Sumando ${num1} + ${num2}\nResultado ${+num1+ +num2}`;//+num1+ +num2 es lo mismo que parseInt(num1)+ parseInt(num2)
//Apartado 1
console.log(str);
//Apartado 2
alert(str);
//Apartado 3
document.getElementById('extra').append(document.createElement('p').appendChild(document.createTextNode(`Repito, la respuesta\n${str}`)));
//Apartado 4
document.getElementById("parrafo").innerText = `${document.getElementById("parrafo").innerText}:\n${str}`;

//Segundo elemento
let elemento = document.createElement('p');
elemento.innerText = `Repito, la respuesta\n${str}`;
document.getElementById('extra').append(elemento);

//Tercer elemento
let elemento2 = document.createElement('p');
elemento2.innerHTML = `<p>Repito, la respuesta<br>${str}</p>`;
document.getElementById('extra').append(elemento2);