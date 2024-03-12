const form = document.getElementById('form-contatos');
const nomes = [];
const numeros = [];

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
});

function adicionarLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    if(nomes.includes(inputNomeContato.value)){
        alert(`O contato: ${inputNomeContato.value} já foi inserido`);
    } else{
        nomes.push(inputNomeContato.value);
        numeros.push(inputNumeroContato.value);

        let linha = `<tr>
        <td>${inputNomeContato.value}</td>
        <td>${inputNumeroContato.value}</td>
        </tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizarTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

