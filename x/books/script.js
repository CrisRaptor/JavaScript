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

//Table Header HTML generation
const elements = Object.keys(books[0]);
elements.forEach(element => {
    document.getElementById("tr0").innerHTML += `<th>
    ${element}
    </th>`
});

//Table Body HTML generation
let i = 1;
console.log(books.length);
books.forEach(e => {
    body.innerHTML += `<tr id="tr${i}"></tr>`
    elements.forEach(element => {
        let row = document.getElementById(`tr${i}`);
        switch (element) {
            case "Website":
                row.innerHTML += `<td><a href="${e[element]}" target="_blank">${e[element]}</a></td>`;
                break;
            case "Author":
                row.innerHTML += `<td>${e[element].join("<br>")}</td>`;
                break;
            default:
                row.innerHTML += `<td>${e[element]}</td>`;
                break;
        }
    });
    i++;
});