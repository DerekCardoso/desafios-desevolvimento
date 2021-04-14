var projetos, index;

function cadProjeto(nome, inicio, fim, atraso, tempo) {
    projetos = document.getElementById("tbProjetos");
    var qtdLinhas = projetos.rows.length;
    var linha = projetos.insertRow(qtdLinhas);
    var linhaParam;

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellInicio = linha.insertCell(2);
    var cellFim = linha.insertCell(3);
    var cellAtraso = linha.insertCell(4);
    var cellTempo = linha.insertCell(5);

    cellCodigo.innerHTML = qtdLinhas;
    cellNome.innerHTML = nome;
    cellInicio.innerHTML = inicio;
    cellFim.innerHTML = fim;
    cellAtraso.innerHTML = atraso;
    cellTempo.innerHTML = tempo;

    preencheCamposForm();
}



