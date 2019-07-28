var tabela = document.getElementById('tabela');
var id_linha = 1;
var lista = [];


function keyPress(event) {
    var x = event.which || event.keyCode;
    if (x == "13")
        myFunction();
}

function inserirDados() {
    
    //captrando valores de entrada
    var firstName     = document.getElementById('input_firstName');
    var lastName      = document.getElementById('input_lastName');
    var participation = document.getElementById('input_participation');

    if(firstName.value == "" || lastName.value == "" || participation.value == "")
        return;

    //adicionando nova linha na tabela
    var row = tabela.insertRow();
    
    //adicionando novas células para a linha
    var cel_id = row.insertCell();
    var cel_firstName = row.insertCell();
    var cel_lastName = row.insertCell();
    var cel_participation = row.insertCell();

    //atribuindo valores para a nova linha
    cel_id.innerHTML = id_linha++;
    cel_firstName.innerHTML = firstName.value.trim();
    cel_lastName.innerHTML = lastName.value.trim();
    cel_participation.innerHTML = participation.value + "%";

    //atualizando a lista de dados
    lista.push({y: participation.value, name: firstName.value.trim() + " " + lastName.value.trim()});

    //atualizando o gráfico
    desenharGrafico(lista);

    firstName.value = "";
    lastName.value = "";
    participation.value = "";
}
