///////////////////Ejercicios JS01///////////////////
let num1, num2;
num1 = prompt("Numero 1");
num2 = prompt("Numero 2");
let str = `Sumando ${num1} + ${num2}\nResultado ${+num1+ +num2}`;//+num1+ +num2 es lo mismo que parseInt(num1)+ parseInt(num2)
console.log(str);
alert(str);

/* document.getElementById("parrafo").innerHTML = `${document.getElementById("parrafo").innerHTML}\n${str}`;
document.body.appendChild(document.createElement(p).innerHTML = "Repito, la respuesta\n"+str); */