const express = require("express");
const crypto = require("crypto");

const app = express();
const PORT = parseInt(process.argv[2]) || 8080;

const users = {};

app.get("/", (req, res) => {
  res.json({ users });
});

app.get("/newUser", (req, res) => {
  let userName = req.query.userName || "";
  const password = req.query.password || "";

  // Aplico una exp-Regular para eliminar caracteres extraños
  userName = userName.replace(/[!@#$%^&*]/g, "");

  // Evaluo si el user y password existen
  if (!userName || !password || users[userName]) {
    return res.sendStatus(400);
  }

  // Encriptamos la contraseña
  // crypto.pbkdf2Sync(password, salt, iterations, keylen, digest)
  const salt = crypto.randomBytes(128).toString("base64");
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");

  users[userName] = { salt, hash };

  res.sendStatus(200);
});

// ********** LOGIN BLOQUEANTE *************** //
app.get("/auth-bloq", (req, res) => {
  let userName = req.query.userName || "";
  const password = req.query.password || "";

  // Aplico una exp-Regular para eliminar caracteres extraños
  userName = userName.replace(/[!@#$%^&*]/g, "");

  // Evaluo si el user y password existen
  if (!userName || !password || !users[userName]) {
    process.exit(1);
  }

  const { salt, hash } = users[userName];
  const encrypHash = crypto.pbkdf2Sync(password, salt, 10000, 512, "sha512");

  // Evaluo condicion para que me indica si esta o no registrado el usuario
  if (crypto.timingSafeEqual(hash, encrypHash)) {
    res.sendStatus(200);
  } else {
    process.exit(1);
  }
});

// ********** LOGIN NO-BLOQUEANTE *************** //
app.get("/auth-nobloq", (req, res) => {
  let userName = req.query.userName || "";
  const password = req.query.password || "";

  // Aplico una exp-Regular para eliminar caracteres extraños
  userName = userName.replace(/[!@#$%^&*]/g, "");

  // Evaluo si el user y password existen
  if (!userName || !password || !users[userName]) {
    process.exit(1);
  }

  const { salt } = users[userName];
  crypto.pbkdf2(password, salt, 10000, 512, "sha512", (err, hash) => {
    if (users[userName].hash.toString() === hash.toString()) {
      res.sendStatus(200);
    } else {
      process.exit(1);
    }
  });
});

app.listen(PORT, () => {
  console.log(`sever run - ${PORT}`);
});


