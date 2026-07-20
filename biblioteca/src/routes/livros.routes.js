import express from 'express'
import { listarLivros, adicionarLivro, deletarlivro } from '../controllers/controller.js';
const router = express.Router();

router.get  ('/livros',listarLivros);
router.post ('/livros', adicionarLivro);
router.delete ('/livros/:id',deletarlivro);

export default router;