const express = require("express");
const cors = require("cors");
const usuarioRoutes = require("./routes/usuarioRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Permitir JSON en el body

// Rutas
app.use("/api", usuarioRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
