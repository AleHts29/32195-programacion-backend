import { Application, Router } from "./deps.ts";
import { config } from './deps.ts';


const router = new Router();
const app = new Application();


router.get('/', (ctx)=>{
    ctx.response.body = 'Hola Coders!!!';
})

app.use(router.routes());

const {PORT} = config();
app.listen({port: Number(PORT) });
console.log(`Server run on port: ${PORT}/`);
