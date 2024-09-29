import "reflect-metadata";
import { AppDataSource } from './database/data-source';
import express from "express";
import { routes } from "./routes";  // Corrija o caminho para as rotas

const app = express();

// Middleware para lidar com JSON
app.use(express.json());

// Registro das rotas
app.use(routes);

// Função para iniciar o servidor e rodar migrações
const startServer = async () => {
  try {
    // Inicializa a conexão com o banco de dados
    await AppDataSource.initialize();
    console.log("Data Source has been initialized!");

    // Executa migrações
    await AppDataSource.runMigrations();
    console.log("Migrations have been run!");

    // Inicializa o servidor na porta 3000
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("Error during Data Source initialization:", error);
  }
};

// Inicia o servidor
startServer();
