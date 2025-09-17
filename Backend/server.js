const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Pour utiliser les variables d'environnement

const { connectDB } = require("./config/db"); // Importe la fonction de connexion à la DB
const apiRoutes = require("./routes/api"); // Importe les routes API consolidées

const app = express();
const PORT = process.env.PORT || 3001; // Utilise le port du .env ou 3001 par défaut

// Middlewares
app.use(cors()); // Active CORS pour toutes les requêtes
app.use(express.json()); // Permet de parser le JSON des requêtes

// Monte les routes API
app.use("/api", apiRoutes);

// Connecte la base de données avant de démarrer le serveur
connectDB().then(() => {
  // Démarre le serveur
  app.listen(PORT, () => {
    console.log(`API démarrée sur le port ${PORT}`);
  });
});

// Vérifie que l'API est accessible
app.get("/", (req, res) => {
  res.send("API Trouve ton artisan ! est en cours de fonctionnement.");
});
