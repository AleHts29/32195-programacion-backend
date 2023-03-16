const express = require("express");
const { db } = require("./db");
const routerDatos = require("./src/routes/users.route");

const app = express();
app.use(express.json());

app.use("/api/datos", routerDatos);

app.listen(8080, () => {
  console.log("Server ok!");

  // inicializo la DB y me conecto
  // force: false -> no borra la info
  db.sync({ force: false })
    .then(() => {
      console.log("DB Conectada");
    })
    .catch((err) => {
      console.log("Error de conexion a la DB");
    });
});
