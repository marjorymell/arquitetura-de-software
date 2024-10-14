const Aluno = require('./Aluno')
const Turma = require('./Turma')
const TurmaPresencial = require('./TurmaPresencial')


const aluno1 = new Aluno('QA', 'teste123', '12345678');
console.log(aluno1)

const turma1 = new Turma('TURMATest', 8.5)
console.log(`Turma: ${turma1.aprovado()}`)

const turmaPresencial1 = new TurmaPresencial('TURMAPresencial', 7.5, 80);
console.log(`Turma Presencial: ${turmaPresencial1.aprovado()}`)
