import Bibliotecadelivros from '../config/db.js';

export const buscarLivrosService = () => {
    return Bibliotecadelivros;
};

export const criarLivroService = (novoLivro) => {
    Bibliotecadelivros.push(novoLivro);
    return novoLivro;
};

export const deletarLivroService = (id) => {
    if (id >= 0 && id < Bibliotecadelivros.length) {
        return Bibliotecadelivros.splice(id, 1);
    }
    return null;
};