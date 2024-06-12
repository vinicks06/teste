function criaLogin(){
    let usuario = document.getElementById("user").value
    let pass = document.getElementById("senha").value
    localStorage.setItem("User", usuario)
    localStorage.setItem("senha", pass)
}


function fazerLogin(){
    let nome = document.getElementById("nome2").value
    let senha = document.getElementById("senha2").value
    let nomeJs = localStorage.getItem("User")
    let senhaJs = localStorage.getItem("senha")
    if(nome != nomeJs || senha != senhaJs){
        alert("Nome ou senha inválido")
    }else{
        window.location.href="index5.html"
    }
}

function adicionar(){
    window.location.href="index4.html"
}

function voltar(){
    window.location.href="index3.html"
}

function searchTable() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td");
        for (var j = 0; j < td.length; j++) {
            cell = tr[i].getElementsByTagName("td")[j];
            if (cell) {
                txtValue = cell.textContent || cell.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}