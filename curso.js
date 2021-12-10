// Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 1).

const turma = require('./listaAlunos');
const Aluno = require("./aluno");

function Curso(nomeCurso, notaAprovacao, qtdeFaltasMax) {
    this.nomeCurso = nomeCurso,
        this.notaAprovacaoCurso = notaAprovacao,
        this.qtdeFaltasMax = qtdeFaltasMax,
        this.listaAlunos = turma.listaAlunos,

        // Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

        this.adicionarAluno = function (novoAluno) {
            return this.listaAlunos.push(novoAluno)
        }

// Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

    this.checkAluno = function (aluno) {
        let aprovado;
        //o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas
        if (aluno.mediaFinal() >= this.notaAprovacaoCurso && aluno.qtdeFaltas < this.qtdeFaltasMax) {
            return aprovado = true;

        //Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.
        } else if (aluno.mediaFinal() >= (this.notaAprovacaoCurso * 1.1) && aluno.qtdeFaltas == this.qtdeFaltasMax) {
            return aprovado = true;
        } else {
            return aprovado = false
        }
    }
    //confirmar a listagem de aprovados
    this.aprovados = function () {
        let alunosAprovados = []
        alunosAprovados.push(this.checkAluno(this.listaAlunos[0]))
        alunosAprovados.push(this.checkAluno(this.listaAlunos[1]))
        alunosAprovados.push(this.checkAluno(this.listaAlunos[2]))
        alunosAprovados.push(this.checkAluno(this.listaAlunos[3]))
        console.log(alunosAprovados)
    }

}

let defesaArtesTrevas = new Curso("Defesa Contra As Artes das Trevas", 3, 8);
let feiticosAvancados = new Curso("Feitiços Avançados", 5, 6);

const aluno5 = new Aluno("Joaquim Barbosa", 5, [3,10,10,9]);

defesaArtesTrevas.adicionarAluno(aluno5);
defesaArtesTrevas.aprovados();
console.log(defesaArtesTrevas.listaAlunos);
