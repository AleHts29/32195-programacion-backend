import { Context, helpers } from "../../deps.ts";
import logger from "../middlewares/logger.ts";
import { User } from "../types/user.type.ts";
import dbConn from "../middlewares/mongo.conn.ts";

const users = dbConn.collection<User>('users');

export const findAll = async (ctx: Context) => {
    try {
        ctx.response.status = 200;
        logger.debug(`status: ${ctx.response.status} method: findAll handler`);

        const resUsers = await users.find({}).toArray();
        ctx.response.body = await {code: '00', data: resUsers};
    } catch (error) {
        ctx.response.status = 500;

        logger.error(`status: ${ctx.response.status} ${error}`);
        ctx.response.body = {code: '99', msg: error};
    }
}

export const findUser = async (ctx: Context) =>{
    try {
        const { userId } = helpers.getQuery(ctx, {mergeParams: true});
        const user = await users.findOne({uuid:userId})

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
        
        const resUsers = await users.find({}).toArray();

        let newId = 0;
        if (resUsers.length > 0) {
            newId = Number(resUsers[resUsers.length - 1].uuid) + 1;                   
        } else {
            newId = 1;
        }

        const user: User = {
            uuid: newId.toString(),
            name: name,
            birthDate: new Date(birthDate)
        }
        await users.insertOne(user);

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
        const user = await users.findOne({uuid: userId});

        if (user) {
            const { name, birthDate } = await ctx.request.body().value;
            await users.updateOne({uuid: userId}, {$set: {name: name, birthDate: new Date(birthDate)}})
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
        const user = await users.findOne({uuid: userId});

        if (user) {
            await users.deleteOne({uuid: userId});

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