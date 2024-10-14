class Turma {
    #codigo
    #nota

    constructor(codigo, nota) {
        this.#codigo = codigo
        this.#nota = nota
    }

    getCodigo() {
        return this.#codigo
    }

    getNota() {
        return this.#nota
    }

    setCodigo(codigo) {
        this.#codigo = codigo
    }

    setNota(nota) {
        this.#nota = nota
    }

    aprovado() {
        return Boolean(this.#nota >= 6.0)
    }
}
