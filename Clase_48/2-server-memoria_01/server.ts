import { Application, Router } from "./deps.ts";
import { config } from './deps.ts';
import { router } from './src/routes/users.routes.ts'

const app = new Application();

app.use(router.routes());

const {PORT} = config();
app.listen({port: Number(PORT) });
console.log(`Server run on port: ${PORT}/`);
