/*
    Permisos de escritura:
        deno run --allow-write .\4_archivos.ts
    Permisos de lectura:
        deno run --allow-read .\4_archivos.ts
    Permisos de lectura y escritura:
        deno run --allow-read --allow-write 4_archivos.ts
*/

 await Deno.writeTextFile("./txtEjemplo.txt", "Hola desde DENO");

 let contenido = await Deno.readTextFile('./txtEjemplo.txt');
 contenido = `${contenido} y lectura`
 console.log(contenido);
 