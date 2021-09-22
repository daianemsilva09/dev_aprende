// Tipo primitivo
const mensagem = 'minha primeira mensagem';
//tipo objeto
const outraMensagem = new String ('bom dia');

typeof mensagem; //(String) tipo da variavel 
outraMensagem.length //(7)tamanho da variavel
outraMensagem[2] //(m) mostra na posição 2 - começando 0
mensagem.includes('primeira') // se tem a palavra (true)
mensagem.startsWith('verde') // (false)começa
mensagem.endsWith('mensagem')// (true) termina
mensagem.indexOf ('primeira')// (6) o indice 
mensagem.replace('minha', 'sua')//trocar minha por sua 
mensagem.trim()// espaços começo e fim 
mensagem.split('')//separa por espaços



