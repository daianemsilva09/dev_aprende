verificarVelocidade(80)

function verificarVelocidade(velocidade){
    const velocidadeMaxima = 70;
    const kmPorPontos = 5;
    if ( velocidade <= velocidadeMaxima)
        console.log ('ok');   
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima)/ kmPorPontos));
        if (pontos >= 12)
            console.log('suspensa');
        else
            console.log('pontos', pontos);
    }
    }

