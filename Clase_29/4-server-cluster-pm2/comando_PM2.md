/*
La instalacion de PM2 se debe hacer en modo super usuario y se debe instalar de forma global
sh-3.2# npm i -g pm2

ejecución en modo fork
❯ pm2 start server.js --name="Server_01" --watch -- 8080

ejecución en modo Cluster, (-i max: son las instancias max del numero de nucleos)
❯ pm2 start server.js --name="Server_01" --watch -i max -- 8080

finalizacion de procesos por ids
❯ pm2 delete 0 1

listar procesos
❯ pm2 list

detener todos los procesos
❯ pm2 kill

Si intentamos levantar un proceso en un puerto ocupado con nombre distinto --> lo intenta levantar pero lo pone en errored
❯ pm2 start server.js --name="Server_mismo_puerto" --watch -- 8080
❯ pm2 list


para ver logs
❯ pm2 logs 'numero id'
*/