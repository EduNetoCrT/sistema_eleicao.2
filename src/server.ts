import "reflect-metadata";
import express from "express";
import { connectToDatabase } from "./database";
import path from "path";
import { router } from "./routers";  // Corrija o caminho para as rotas
import { errorHandler } from "./middleware/errorHandler";


const app = express();

// Definir a pasta de views e o motor de template
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware para lidar com JSON
app.use(express.json());

// Registro das rotas
app.use(router);

app.use(errorHandler)


// Conectar ao banco de dados
connectToDatabase();

const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });

