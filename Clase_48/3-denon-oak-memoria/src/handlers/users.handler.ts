import { Context, helpers } from "../../deps.ts";
import logger from "../middlewares/logger.ts";
import { User } from "../types/user.type.ts";
import { Context } from 'https://deno.land/x/oak@v10.6.0/mod.ts';

const DB_USERS: User[] = [];
DB_USERS.push({uuid: "1", name: 'John Lennon', birthDate: new Date()});
DB_USERS.push({uuid: "2", name: 'Ringo Star', birthDate: new Date()});
DB_USERS.push({uuid: "3", name: 'George Harrison', birthDate: new Date()});
DB_USERS.push({uuid: "4", name: 'Paul McCartney', birthDate: new Date()});


export const findAll = async (ctx: Context) => {
    try {
        ctx.response.status = 200;
        logger.debug(`status: ${ctx.response.status} method: findAll handler`);

        ctx.response.body = await {code: '00', data: DB_USERS};
    } catch (error) {
        ctx.response.status = 500;

        logger.error(`status: ${ctx.response.status} ${error}`);
        ctx.response.body = {code: '99', msg: error};
    }
}

export const findUser = async (ctx: Context) =>{
    try {
        const { userId } = helpers.getQuery(ctx, {mergeParams: true});
        const user = await DB_USERS.find((u) => u.uuid == userId);

        if (user) {
            ctx.response.body = await {code: '00', data: user};
        } else {
            ctx.response.body = await {code: '01', msg: `Usuario con id ${userId} no encontrado.`};
        }
    } catch (error) {
        ctx.response.status = 500;

        logger.error(`status: ${ctx.response.status} ${error}`);
        ctx.response.body = {code: '99', msg: error};
    }
}

export const createUser = async (ctx: Context ) => {
    try {
        ctx.response.status = 201;
        logger.debug(`status: ${ctx.response.status} method: createUser handler`);

        const { name, birthDate } = await ctx.request.body().value;
        
        const newId = Number(DB_USERS[DB_USERS.length - 1].uuid) + 1;
        const user: User = {
            uuid: newId.toString(),
            name: name,
            birthDate: new Date(birthDate)
        }
        DB_USERS.push(user)

        ctx.response.body = await {code: '00', data: user};
    } catch (error) {
        ctx.response.status = 500;

        logger.error(`status: ${ctx.response.status} ${error}`);
        ctx.response.body = {code: '99', msg: error};
    }
}

export const updateUser = async (ctx: Context ) => {
    try {
        ctx.response.status = 202;
        logger.debug(`status: ${ctx.response.status} method: updateUser handler`);

        const { userId } = helpers.getQuery(ctx, {mergeParams: true});
        const userIndex = await DB_USERS.findIndex((u) => u.uuid == userId);

        if (userIndex) {
            const { name, birthDate } = await ctx.request.body().value;
            DB_USERS.splice(userIndex, 1, {uuid: userId, name, birthDate: new Date(birthDate)});
            
            ctx.response.body = {code: '00', data: {uuid: userId, name, birthDate}} 
        } else {
            ctx.response.body = {code: '01', msg: `Usuario con id ${userId} no encontrado.`};
        }
    } catch (error) {
        ctx.response.status = 500;

        logger.error(`status: ${ctx.response.status} ${error}`);
        ctx.response.body = {msg: error};
    }
}

export const deleteUser = async (ctx: Context ) => {
    try {
        ctx.response.status = 200;
        logger.debug(`status: ${ctx.response.status} method: deleteUser handler`);

        const { userId } = helpers.getQuery(ctx, {mergeParams: true});
        const userIndex = await DB_USERS.findIndex((u) => u.uuid == userId);

        if (userIndex) {
            DB_USERS.splice(userIndex, 1);

            ctx.response.body = {code: '00', msg: `Usuario con id ${userId} eliminado`} 
        } else {
            ctx.response.body = {code: '01', msg: `Usuario con id ${userId} no encontrado.`};
        }
    } catch (error) {
        ctx.response.status = 500;

        logger.error(`status: ${ctx.response.status} ${error}`);
        ctx.response.body = {msg: error};
    }
}