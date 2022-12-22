import mongoose from 'mongoose';

const userCollections = 'usuarios';

// definimos el esquema
const UserSchema = new mongoose.Schema(
    {
        nombre: { type: String, require: true, max: 100 },
        apellido: { type: String, require: true, max: 100 },
        email: { type: String, require: true, max: 200 },
        edad: { type: Number, require: true, max: 100 },
        password: { type: String, require: true },
    }
)

export const users = mongoose.model(userCollections, UserSchema);