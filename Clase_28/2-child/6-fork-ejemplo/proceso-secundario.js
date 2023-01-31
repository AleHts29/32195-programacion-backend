let contador = 0;

process.on('message', msg => {
    console.log('mensaje desde el procesos principal:\n');
    console.log(msg);

    setTimeout(()=>{
        console.log('Se ejecuta el proceso secundario')
        process.send('Se finalizo el proceso secundario!')
        process.exit();
    }, 1000)
});