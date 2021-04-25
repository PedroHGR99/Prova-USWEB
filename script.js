const botao = document.querySelector('#botao');



botao.addEventListener("click", function() {

    const input = document.getElementById('item');
    let elementoinput = input.value;
    input.value = "";
    const lista = document.querySelector('#pokemons');

    const item = document.createElement('li');
    const botaoLista = document.createElement('button');
    const span = document.createElement('span');



    item.appendChild(span)
    lista.appendChild(item);
    lista.appendChild(botaoLista);

    span.textContent = elementoinput;
    botaoLista.textContent = 'Apagar';

    botaoLista.addEventListener("click", function() {
        lista.removeChild(item);
        lista.removeChild(botaoLista);
    })

    input.focus();

});