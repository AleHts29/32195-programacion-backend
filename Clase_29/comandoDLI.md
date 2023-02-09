# Comando en la terminal para ver los procesos

# Lista los procesos activos
> ps


# Lista los procesos por puerto
> sudo lsof -i -P -n | grep LISTEN

# en WIN
> tasklist /fi "imagename eq node.exe"


# detener los PID que se estan ejecutando
kill -9 'PID del proceso'
