import "reflect-metadata";
import express from "express";
import { routes } from "./routes";  // Corrigi o caminho para as rotas
//import "./database"; // Certifique-se de que o caminho está correto para o seu arquivo de conexão com o banco

const app = express();

// Middleware para lidar com JSON
app.use(express.json());

// Registro das rotas
app.use(routes);

// Inicializa o servidor na porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
