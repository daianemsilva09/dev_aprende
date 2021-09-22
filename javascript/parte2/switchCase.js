let permissao; // comum, gerente, diretor

permisao = '';

switch (permisao) {
    case 'comum':
    console.log('usuario comum');
    break;

    case 'gerente':
    console.log('usuario gerente');
    break;
    
    case 'diretor':
    console.log('usuario diretor');
    break;

    default:
    console.log('Usuário não reonhecido!');
}