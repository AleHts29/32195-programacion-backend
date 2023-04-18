/*
    deno run --allow-net 5_server.ts
*/

import { serve } from "https://deno.land/std@0.144.0/http/server.ts";

const port = 9090;

function handler(request: Request): Response{
    const body = "Hola Mundo desde un server con Deno!!";
    return new Response(body, {status: 200});
}

await serve(handler, {port} );