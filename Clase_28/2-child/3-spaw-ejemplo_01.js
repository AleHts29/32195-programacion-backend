// Similar a exec pero se trabaja con promesas

const { spawn } = require('child_process');
const ls = spawn('ls', ['/Applications']);

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