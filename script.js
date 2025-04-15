document.addEventListener('DOMContentLoaded' , function (){

    const botaoDeAxessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade')

    botaoDeAxessibilidade.addEventListener('click',function(){
        botaoDeAxessibilidade.classList.toggle('reotacao-botao')
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista')
    })

    const aumentaFonteBotão = document.getElementById ('aumentar-fonte');
    const dimunuiFonteBotão = document.getElementById ('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    aumentaFonteBotão. addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize =`${tamanhoAtualFonte}rem`; 
    });

    dimunuiFonteBotão. addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize =`${tamanhoAtualFonte}rem`; 
    });
});
