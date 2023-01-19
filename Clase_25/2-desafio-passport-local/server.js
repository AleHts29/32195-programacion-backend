import express from 'express'
import session from 'express-session'
import exphbs from 'express-handlebars'
import path from 'path'
import dotenv from 'dotenv';
dotenv.config();

const app = express();


/*============================[Middlewares]============================*/
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


/*----------- Motor de plantillas -----------*/
app.set('views', 'src/views');
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');


/*----------- Session -----------*/
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 20000 //20sg
    }

}))



/*============================[Base de Datos]============================*/
const usuariosDB = []



/*============================[Rutas]============================*/
app.get('/', (req, res) => {
    res.redirect('login')
})

app.get('/login', (req, res) => {
    res.render('login.hbs')
})


app.get('/register', (req, res) => {
    res.render('registro.hbs')
})


app.post('/login', (req, res) => {

})



app.get('/datos', (req, res) => {

})



app.post('/register', (req, res) => {

})



app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            throw err
        }
        res.redirect('/login')
    })
})

app.get('/login-error', (req, res) => {
    res.render('login-error');
})

/*============================[Servidor]============================*/
const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto ${PORT}`);
})
server.on('error', error => {
    console.error(`Error en el servidor ${error}`);
});