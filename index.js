//Estou pegando todos os elementos que está dentro de .duvida 
var elementosDuvida = document.querySelectorAll('.duvida')

// Aqui a ideia é usar uma funcao para cade elemento duvida que ta sendo selecionado
// Para cada elemento de duvida vai ser selecionado um evento de click que vai executar a linha 8 
elementosDuvida.forEach(function(duvida){
    duvida.addEventListener('click',function() {
        duvida.classList.toggle('ativa')
    })
})