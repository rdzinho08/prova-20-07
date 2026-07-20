import Bibliotecadelivros from '../config/db.js';

export const listarLivros = (req, res) => {
    res.json(Bibliotecadelivros);
};

export const adicionarLivro = (req, res) => {
    const novolivro = req.body;
    Bibliotecadelivros.push(novolivro);
    res.status(201).json({ mensagem: "livro adicionado com sucesso!" });
};

export const deletarlivro = (req, res) => {
    const { id } = req.params;

    if (id >= 0 && id < Bibliotecadelivros.length) {
        const livrosremovidos = Bibliotecadelivros.splice(id, 1);
        return res.json({ mensagem: "livro removido com sucesso!" });
    }

    return res.status(404).json({ mensagem: "livro não encontrado!" });
};