import express from 'express';
import userRoutes from './routes/usuaraiosRoutes';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/apiFinanceira', userRoutes);

app.get('/', (req, res) => {
  res.send('API rodando!');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} \n http://127.0.0.1:${PORT}`);
});
