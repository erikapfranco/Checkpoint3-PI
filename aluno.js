class Aluno {
    constructor(nome, qtdeFaltas, notas) {
            this.nome = nome,
            this.qtdeFaltas = qtdeFaltas,
            this.notas = notas
    };


    //Passo 2: método calcularMedia, que retorna a média de suas notas. 
    mediaFinal = function () {
        let media = 0
        let i;
        for (i = 0; i < this.notas.length; i++) {
            media += this.notas[i]
        }
        return media / this.notas.length
    }
    //Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
    faltasTotal = function () {
        return this.qtdeFaltas++;
    }
}


module.exports = Aluno;

