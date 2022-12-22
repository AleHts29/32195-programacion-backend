import mongoose from "mongoose";
import * as model from './models/usuarios.js';


async function CRUD() {
    try {

        // Conexion con la DB
        const URL = 'mongodb://localhost:27017/ecomerce32195';
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true // maneja la conexion con la DB
        })
        console.log('Base de datos conectada!!');

        const user = {
            nombre: 'Daniel',
            apellido: 'Lobato',
            email: 'daniel123@gmail.com',
            edad: 27,
            password: 'qwe123'
        }

        const usersArray = [
            {
                nombre: 'Mariano',
                apellido: 'Lopez',
                email: 'mariano@gmail.com',
                edad: 27,
                password: 'qwe123'
            },
            {
                nombre: 'Joaquin',
                apellido: 'Mukrillo',
                email: 'joaquin@gmail.com',
                edad: 32,
                password: '123123'
            }
        ]

        // instacio el modelo y le paso la data
        // const userSave = new model.users(user);
        // const savedUser = await userSave.save();
        // console.log(savedUser);

        // Add Many
        const newUsers = await model.users.insertMany(usersArray);
        console.log(newUsers);


        // READ
        const usersRead = await model.users.find({ nombre: 'Mariano' });
        console.log(usersRead);


        // UPDATE
        const userUpdate = await model.users.updateOne({ nombre: 'Mariano' }, { $set: { email: 'lopez123@gmail.com' } })
        console.log(userUpdate);

        // DELETED
        const userDeleted = await model.users.deleteOne({ nombre: 'Joaquin' });
        console.log(userDeleted);






    } catch (error) {
        console.log(error);
    }
}

CRUD();