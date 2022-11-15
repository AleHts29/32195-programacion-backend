const express = require('express')
const { promises: fs } = require('fs')
const app = express()

// hacemos configuracion del engine
app.engine('abc', async (filePath, options, callback) => {
    try {
        const content = await fs.readFile(filePath);
        const rendered = content.toString().replace('#title#', '' + options.title + '')
            .replace('#message#', '' + options.message + '');
        return callback(null, rendered);
    } catch (error) {
        return callback(new Error(error));
    }
});

app.set('views', './views')
app.set('view engine', 'abc')

app.get('/', (req, res) => {
    const datos = {
        title: 'Custom template con ABC',
        message: 'Custom template message'
    }

    res.render('index', datos)
})



app.listen(8070, () => {
    console.log('server Ok!!');
})