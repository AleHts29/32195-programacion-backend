import { Router } from "../../deps.ts";
import { findAll, findUser, createUser, updateUser, deleteUser } from "../handlers/users.handler.ts";

export const router = new Router()
    .get('/api/users', findAll)
    .get('/api/users/:userId', findUser)
    .post('/api/users', createUser)
    .put('/api/users/:userId', updateUser)
    .delete('/api/users/:userId', deleteUser)