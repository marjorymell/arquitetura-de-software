class TurmaPresencial extends Turma {
    #frequencia

    constructor(codigo, nota, frequencia) {
        super(codigo, nota)
        this.#frequencia = frequencia
    }

    getFrequencia() {
        return this.#frequencia
    }

    setFrequencia(frequencia) {
        this.#frequencia = frequencia
    }

    aprovado() {
        return Boolean(super.aprovado() && this.#frequencia >= 75)
    }
}
