import { Application, Router, Context } from "https://deno.land/x/oak@v10.6.0/mod.ts";

const app = new Application();
const router = new Router();

router.get('/', (ctx: Context) => {
    ctx.response.body = 'Hola desde server con Oak!'
});

router.get("/hola", (ctx: Context) => {
    ctx.response.body = `<!DOCTYPE html>
      <html>
        <head><title>Hello oak!</title><head>
        <body>
          <h1>Hola metodo get</h1>
        </body>
      </html>
    `;
});

router.post("/hola", async (ctx: Context) => {
    // const { nombre, edad } = ctx.request.body();
   
    const body = ctx.request.body({type: 'json'});
    const persona = await body.value;

    ctx.response.status = 200;
    ctx.response.body = {
        code: 200,
        data: {
            saludo: `Hola ${persona.nombre} te felicito por tu cumpleaños ${persona.edad}!`
        }
    };
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });
console.log('Listening on http://localhost:8080/')

