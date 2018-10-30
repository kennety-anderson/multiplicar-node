//Declaração da const argv que requere o pacote yargs.
const opts = {
    //Comando
    base: {
        //Parametro que exige o comando base
        demand: true,
        //Defini atalho -b
        alias: 'b'
    },
    //Comando
    limite: {
        //Define atalho -l
        alias: 'l',
        //Define o valor padrão de 10
        default: 10
    }
    //Função para fornecer ajuda
};

const argv = require('yargs')
    //Paramentro para a criação de um comando que recebe 3 parametros,
    //primeiro o comando em si, segundo uma mensagem de ajuda e terceiro
    //opções e definissões para o mesmo.
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera um archivo con la tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
};