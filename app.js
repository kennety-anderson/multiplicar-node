//Declaração da const para chamar a função crearArchivo do ./multiplicar/multiplicar.
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./config/yargs');
const colors = require('colors');


let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(resp => console.log(`Archivo creado: ${resp.green}`))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comado no reconocido');

};