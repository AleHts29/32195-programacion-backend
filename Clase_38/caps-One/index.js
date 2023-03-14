const express = require('express');
const app = express();
const routerUser = require('./src/routes/user.routes.js')

const PORT = 8080


app.use('/api', routerUser)


app.listen(PORT, () => {
    console.log("Server ok");
})