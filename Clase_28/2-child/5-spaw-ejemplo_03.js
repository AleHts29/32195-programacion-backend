const { spawn } = require('child_process');
const ls = spawn('mkdir', ['carpeta nueva 1', 'carpeta nueva 2', 'carpeta nueva 3']);

ls.stdout.on('data', (data) => {
    console.log(`stdout: \n`);
    console.log(`${data}`)
});

ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});