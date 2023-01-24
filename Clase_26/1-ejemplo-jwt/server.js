import express from "express";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const app = express();

/*============================[Middlewares]============================*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function generateToken(user) {
    const token = jwt.sign({ data: user }, PRIVATE_KEY, { expiresIn: '5m' })
    return token;
}

function auth(req, res, next) {
    const authHeader = req.headers["Authorization"] || req.headers["authorization"];
    console.log(authHeader);

    if (!authHeader) {
        return res.status(401).json(
            {
                code: 401,
                msg: 'not authenticated token'
            }
        )
    }

    const token = authHeader.split(' ')[0];

    jwt.verify(token, PRIVATE_KEY, (err, datos) => {
        if (err) return res.status(403).json({
            code: 403,
            msg: 'not authorized'
        })

        req.user = datos;
        next();
    })
}

/*============================[Base de datos]============================*/
const usuariosDB = [
    { username: 'user_prueba', password: 'qweqwe', direccion: 'direccion CABA' }
];

/*============================[Rutas]============================*/
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    //Se implementa bcrypt para comparar password, por ahora no lo usamos 
    const existeUsuario = usuariosDB.find(usr => usr.username == username && usr.password == password);

    if (existeUsuario) {
        const accessToken = generateToken({ username: existeUsuario.username, direccion: existeUsuario.direccion });
        res.status(200).json({
            codigo: 200,
            msg: 'usuario loggeado!',
            accessToken
        })
    } else {
        return res.status(403).json({
            codigo: 403,
            msg: 'credenciales incorrectas!',
        })
    }
});

app.get('/datos', auth, (req, res) => {
    console.log('req.user', req.user)
    const datosUsuario = req.user;
    res.json(datosUsuario);
});

/*============================[Servidor]============================*/
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})
server.on('error', error => {
    console.error(`Error en el servidor ${error}`);
});