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

// PRODUCTOS

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

// USUARIOS

server.post('/user', async (req,res) => {
  try {
    let resultado = await connection
    .db('UDEA')
    .collection('users')
    .insertOne(req.body)

    res.send('Registro de usuario exitoso')
  } catch (error) {
    console.error("Error, el registro de usuario no pudo realizarse - ", error);
    res.status(500).send("Error interno del servidor");
  }
})

// VENTAS

server.post('/sales', async (req,res) => {
  try {
    let resultado = await connection
    .db('UDEA')
    .collection('sales')
    .insertOne(req.body)

    res.send('Compra realizada exitosamente')
  } catch (error) {
    console.error("Error, la compra no pudo ser completada - ", error);
    res.status(500).send("Error interno del servidor");
  }
})

// Actualización stock

server.listen(3001, () => {
  console.log("Server on port 3001");
});