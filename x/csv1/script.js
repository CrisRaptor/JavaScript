const lista = document.querySelector(".lista");
lista.innerHTML=`<thead id="tHead">
<tr>
</tr>
</thead>
<tbody id="tBody">
<tr>
</tr>
</tbody>`
/*Elementos de la tabla
<thead id="tHead">
<tr>
  <th>a</th>
  <th>b</th>
</tr>
</thead>
<tbody id="tBody">
<tr>
  <td></td>
  <td></td>
</tr>
<tr>
  <td></td>
  <td></td>
</tr>
</tbody>`*/

function csvToArray(csv) {
    let filas = csv.trim().split("\n");
    return filas.map(fila => fila.trim().split(";"));
}
let resultado;
if(csv.length>0 &&csv[0].length>0){
    resultado = csvToArray(csv);
} else {
    resultado = "Valor no encontrado"
}

console.log(resultado);