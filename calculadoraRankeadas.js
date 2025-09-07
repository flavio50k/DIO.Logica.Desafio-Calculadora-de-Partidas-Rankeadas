// Importa o módulo readline para leitura de entrada no terminal
const readline = require('readline');

// Configura a interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular o saldo de vitórias e determinar o nível
function calcularNivelRankeado(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Função para exibir o resultado
function exibirResultado(vitorias, derrotas) {
    const resultado = calcularNivelRankeado(vitorias, derrotas);
    console.log(`O Herói tem de saldo de ${resultado.saldoVitorias} está no nível de ${resultado.nivel}`);
}

// Lê as entradas do usuário
rl.question('Digite o número de vitórias: ', (vitorias) => {
    rl.question('Digite o número de derrotas: ', (derrotas) => {
        // Converte as entradas para números inteiros
        vitorias = parseInt(vitorias);
        derrotas = parseInt(derrotas);

        // Verifica se as entradas são válidas
        if (isNaN(vitorias) || isNaN(derrotas) || vitorias < 0 || derrotas < 0) {
            console.log("Por favor, insira números inteiros não negativos.");
        } else {
            exibirResultado(vitorias, derrotas);
        }

        // Fecha a interface de leitura
        rl.close();
    });
});