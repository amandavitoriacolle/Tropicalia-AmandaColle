document.addEventListener('DOMContentLoaded' , function (){
    const AumentaFonteBotão = document.getElementById ('aumentar-fonte');
    const dimunuiFonteBotão = document.getElementById ('diminuir-fonte');

    let tamanhoAtualFonte = 1;

    AumentaFonteBotão. addEventListener('click', function(){
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize =`${tamanhoAtualFonte}rem`; 
    });

    dimunuiFonteBotão. addEventListener('click', function(){
        tamanhoAtualFonte -= 0.1;
        document.body.style.fontSize =`${tamanhoAtualFonte}rem`; 
    });
});
