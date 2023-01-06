const admin = require('firebase-admin');
const serviceAcount = require('./db/coder32195c20-firebase-adminsdk-xsj7z-3b57e8a272.json');


// confioguración para la conexion con la DB
admin.initializeApp({
    credential: admin.credential.cert(serviceAcount),
    databaseURL: 'https://coder32195c20.firebaseio.com'
})

console.log("base de datos conectada!!");

async function CRUD() {
    // Le decimos a nuestra app que vamos a trabajar con firebase
    const db = admin.firestore();

    // creamos colleccion
    const query = db.collection('usuarios')

    // CREATE
    // try {
    //     // creamos los documentos
    //     let id = 1
    //     let doc = query.doc(`${id}`);
    //     await doc.create({ nombre: 'Marcelo', dni: 123123 })

    //     id++
    //     doc = query.doc(`${id}`);
    //     await doc.create({ nombre: 'Leidy', dni: 345345 })

    //     id++
    //     doc = query.doc(`${id}`);
    //     await doc.create({ nombre: 'Alex', dni: 789789 })


    // } catch (error) {
    //     console.log(error);
    // }


    // READ

    // try {
    //     const querySnapshop = await query.get()
    //     let docs = querySnapshop.docs

    //     const response = docs.map((doc) => ({
    //         id: doc.id,
    //         nombre: doc.data().nombre,
    //         dni: doc.data().dni,
    //     }))
    //     console.log(response);
    // } catch (error) {
    //     console.log(error);
    // }


    // READ BY ID
    try {
        let id = 2
        const doc = query.doc(`${id}`)
        const item = await doc.get()
        const response = item.data()

        console.log(response);

    } catch (error) {
        console.log(error);
    }



    // UPDATE
    // try {
    //     let id = 2;
    //     const doc = query.doc(`${id}`)
    //     const item = await doc.update({ dni: 121212 })
    //     console.log(item);

    // } catch (error) {
    //     console.log(error);
    // }






    // DELETED
    try {
        let id = 1;
        const doc = query.doc(`${id}`)
        let item = await doc.delete()
        console.log(item);
    } catch (error) {
        console.log(error);
    }


}

CRUD();