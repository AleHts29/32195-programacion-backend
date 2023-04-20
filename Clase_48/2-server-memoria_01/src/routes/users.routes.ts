import {Router, Context} from '../../deps.ts';
import { Context } from 'https://deno.land/x/oak@v10.6.0/mod.ts';

export const router = new Router()
    .get('/api/users/', (ctx: Context) => ctx.response.body = `findAll`)