// Configuracion de la conexion a Mongo
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Base de datos conectada!!');
        }
    }

);


export default mongoose;