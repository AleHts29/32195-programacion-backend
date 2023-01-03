import mongoose from "mongoose";


// Definicion del schema 
const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    dni: { type: String, unique: true }
})
const userModel = mongoose.model('usuarios', userSchema);

const URL = 'mongodb+srv://coder_c20:coder_c20_pwd@cluster0.k9njtyy.mongodb.net/ecommerce?retryWrites=true&w=majority'

try {
    // Conexion a la DB
    await mongoose.connect(URL, {
        useNewUrlParser: true, // mongodb+srv:
        useUnifiedTopology: true //maneja la conexion a la DB
    })
    console.log('Base de datos conectada!');

    // Listamos la informacion de la DB
    const users = await userModel.find({});
    console.log(users);

} catch (error) {
    console.log(`Error de conexion con la base de datos! ${error}`);
}
