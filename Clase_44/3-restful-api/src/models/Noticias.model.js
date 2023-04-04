import mongoose from "mongoose";

const NoticiaSchema = mongoose.Schema({
    titulo: {type:String, required: true},
    cuerpo: {type:String, required: true},
    autor: {type:String, required: true},
    imagen: {type:String, required: true},
    email: {type:String, required: true},
    vista: {type:Boolean, required: true},
});

const NoticiaModel = mongoose.model('noticias', NoticiaSchema);

export default NoticiaModel;