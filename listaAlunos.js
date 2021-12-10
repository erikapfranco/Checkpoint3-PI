const Aluno = require("./aluno");

const aluno1 = new Aluno("Erika", 3, [5, 4, 7, 10]);
const aluno2 = new Aluno("Lucas Feitosa", 0, [7, 9, 10, 8]);
const aluno3 = new Aluno("Luis Inacio", 0, [9, 8, 9, 7])
const aluno4 = new Aluno("Jaime Messias", 17, [3, 2, 3, 1]);

module.exports = {
    listaAlunos: [aluno1, aluno2, aluno3, aluno4]
}
    

// console.log(`A média final do aluno é ` + aluno1.mediaFinal());

// aluno3.faltas();
// aluno3.faltas();
// console.log(`O número de faltas do aluno é ` + aluno3.qtdeFaltas + ` faltas.`)
