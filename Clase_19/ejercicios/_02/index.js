const mongoose = require('mongoose');



const estudianteSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    edad: { type: Number, required: true },
    dni: { type: String, required: true, unique: true },
    curso: { type: String, required: true },
    nota: { type: Number, required: true },
})

const EstudiantesModel = mongoose.model('estudiantes', estudianteSchema);
const URL = 'mongodb://localhost:27017/colegio';


mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Base de datos ok!!');

        // estudiantes en orden alfabetico
        EstudiantesModel.find({}).sort({ nombre: 1 })
            .then(estudiantes => {
                console.log(estudiantes);


                // Filtro del estudiante mas joven
                return EstudiantesModel.find({}).sort({ edad: 1 }).limit(1)
            })
            .then(estudiantes => {
                console.log('Estudiante mas joven');
                console.log(estudiantes);

                // Filtro por curso
                return EstudiantesModel.find({ curso: '2A' })
            })
            .then(estudiantes => {
                console.log("Estudiantes del curso 2A");
                console.log(estudiantes);
            })


    })