//console.log(books);

//Starting HTML for table
const lista = document.querySelector(".lista");
lista.innerHTML = `<thead id="tHead" class="table-dark">
<tr id="tr0">
</tr>
</thead>
<tbody id="tBody" class="table-group-divider">
</tbody>`;
//Element constants
const head = document.getElementById("tHead");
const body = document.getElementById("tBody");

console.log(books[0]);
//Header HTML generation
const elements = Object.keys(books[0]);
elements.forEach(element => {
    document.getElementById("tr0").innerHTML += `<th>
    ${element}
    </th>`
});

//Body HTML generation
books.forEach(e => {
    body.innerHTML += `<tr>`;
    elements.forEach(element => {
        body.innerHTML += `<td>${e[element]}</td>`;
    });
    body.innerHTML += `</tr>`;
}); 