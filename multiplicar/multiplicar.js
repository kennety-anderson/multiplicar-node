// require da biblioteca fs file system
const fs = require('fs');
const colors = require('colors');



let listarTabla = (base, limite) => {

    console.log('=========='.green);
    console.log(`tabla de ${base}`.green);
    console.log('=========='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

//Declaração da função crearArchivo
let crearArchivo = (base, limite) => {

    //Fazendo com que a função retorne uma promisse
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`Lo valor ingressado ${base} no es un numero.`);
            return;
        }

        let data = '';

        //for para concatenar a base mais o expoente que esta no loop
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`./tabelas/tabela-${base}.txt`, data, err => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-al limite-${limite}.txt`);
            }
        });
    })
};

//Exportando o modulo
module.exports = {
    crearArchivo,
    listarTabla
};