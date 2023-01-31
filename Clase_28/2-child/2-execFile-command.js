const { execFile } = require('child_process');

execFile(__dirname + '/ejemplo.linux.sh', (err, stdout, stderr) => {
    if (err) {
        console.log('error: ', err)
    }

    if (stderr) {
        console.log('error: ', stderr)
    }

    console.log('stdout', stdout)
});