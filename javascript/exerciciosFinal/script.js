function verificarEntrada() {

    NomeConvidado = document.getElementById('nome').value;
    ConvidadosDai = ['Maria','João','Gabriel','Raquel']

    if (ConvidadosDai.includes(NomeConvidado)){
        document.getElementById('permissaoDeEntrada').innerText =
        'Pode entrar'
    }else {
        document.getElementById('permissaoDeEntrada').innerText =
        'Não pode'
    }
}