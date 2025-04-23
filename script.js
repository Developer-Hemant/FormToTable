const form = document.getElementById("myform");
        const table = document.getElementById("tabledata").getElementsByTagName("tbody")[0];

        form.addEventListener("submit", function(event){
            event.preventDefault();

            const name = document.getElementById("name").value;
            const id = document.getElementById("id").value;

            const newRow = table.insertRow();
            const namecell = newRow.insertCell(0);
            const idcell = newRow.insertCell(1);

            namecell.textContent = name;
            idcell.textContent = id;

            form.reset();
        });