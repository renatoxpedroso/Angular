type heroi = {
    nome: string,
    vulgo: string,
};

function printHeroi(heroi: heroi) {
    console.log(`Nome: ${heroi.nome}, Vulgo: ${heroi.vulgo}`);
}

printHeroi({ nome: 'Clark Kent', vulgo: 'Superman ' });