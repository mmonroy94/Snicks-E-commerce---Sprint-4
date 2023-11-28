const { MongoClient } = require("mongodb");
const express = require("express");
const server = express();
const path = require("path");
const cors = require("cors");

// Conexión de node.js con MongoDb
const connection = new MongoClient("mongodb://127.0.0.1:27017");

async function iniciarDB() {
  try {
    await connection.connect();
  } catch (event) {
    console.log(event);
  }
}
iniciarDB();

server.use(express.static(path.resolve("./build")));
server.get("/", (req, res) => {
  res.sendFile(path.resolve("./build/index.html"));
});

server.get("/app", (req, res) => {
  res.sendFile(path.resolve("./build/index.html"));
});

server.use(express.json()); // Para leer json
server.use(cors()); // Permitir todas las conexiones

server.get("/products", async (req, res) => {
  try {
    let resultado = await connection
      .db("UDEA")
      .collection("products")
      .find({})
      .toArray();

    res.send(JSON.stringify({ resultado : resultado }));
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).send("Error interno del servidor");
  }
});

server.listen(3001, () => {
  console.log("Server on port 3001");
});