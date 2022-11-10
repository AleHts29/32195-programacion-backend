const express = require('express')

const app = express()

// app.use(express.static('public'))
app.use('/static', express.static(__dirname + '/public'))

const PORT = 8060



app.listen(PORT, () => {
    console.log(`server run on PORT: ${PORT}`);
})