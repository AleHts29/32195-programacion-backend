const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

// Middleware
app.use(cookieParser('miPassword'));
// app.use(cookieParser(['miPassword_01', 'miPassword_02']));

// 1er - cookies sin tiempo de expiración
app.get('/set-cookie', (req, res) => {
    res.cookie('cookie-app2', 'seteoCookieNode2');
    res.send('Set cookie ok!!')
})


// recuperamos las cookies
app.get('/cookies', (req, res) => {
    res.json({ cookies: req.signedCookies })
})

// cookie con expiracion
app.get('/set-cookie-exp', (req, res) => {
    res.cookie('cookie-app-exp', 'seteoCookieNode-exp', { maxAge: 10000 });
    res.send('Set cookie ok!!')

})

// Podemos hacer la eliminacion de forma "manual"
app.get('/clear', (req, res) => {
    for (const cookieName of Object.keys(req.cookies)) {
        res.clearCookie(cookieName);
    }
    res.send('Clear cookies ok!!')
})


// 2da parte - Cookies firmadas
app.get('/set-cookie-signed', (req, res) => {
    res.cookie('cookie-app-signed', 'seteoCookieNode-signed', { signed: true });
    res.send('set cookie-signed ok!!')
})

app.get('/clear-signed', (req, res) => {
    for (const cookieName of Object.keys(req.signedCookies)) {
        res.clearCookie(cookieName);
    }
    res.send('Clear signedCookies ok!!')
})


app.post('setNewCookie', (req, res) => {

})


app.listen(8082)