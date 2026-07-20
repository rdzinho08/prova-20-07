import express from 'express';
import livrosRoutes from '../biblioteca/src/routes/livros.routes.js';

const app = express();

app.use(express.json());
app.use('/', livrosRoutes);

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});