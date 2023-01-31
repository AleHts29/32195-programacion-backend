const { exec } = require('child_process');

exec(`ls -lh`, (err, stdout, stderr) => {
    if (err) {
        console.log(`error: ${err}`);
    }

    if (stderr) {
        console.log(`error std: ${stderr}`);
    }

    console.log(`Salida: ${stdout}`)
});