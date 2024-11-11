let vitorias = 103
let derrotas = 25
let saldo = vitorias - derrotas


function CalcularRank(saldo) {    
    let rank
    if (saldo <= 10) {
        rank = "Ferro"
    } else if (saldo <= 20) {
        rank = "Bronze"
    } else if (saldo <= 50) {
        rank = "Prata"
    } else if (saldo <= 80) {
        rank = "Ouro"
    } else if (saldo <= 90) {
        rank = "Diamante"
    } else if (saldo <= 100) {
        rank = "Lendário"
    } else {
        rank = "Imortal"
    }
    console.log("O Herói tem de saldo de "+ saldo + " está no nível de " + rank)
}

CalcularRank(saldo)