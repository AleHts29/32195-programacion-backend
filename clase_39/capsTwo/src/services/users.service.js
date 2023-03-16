const {User} = require('../models/userData')

// obtnerDatos, createData

const obtnerDatos = async()=>{
    // vamos a usar el Model
    let users = await User.findAll();
    return users;
}

const createData = async(data)=>{
    // Toda esta logica deberia estar en /models --> como DAOs
  let { username, password } = data;
  let user = await User.findOne({
    where: {
      username: username,
    },
  });

  // si no ecuentra al usuario lo creamos
  if (!user) {
    let userNew = await User.create({
      username,
      password,
    });
    return userNew;
  }

  return "El usuario ya existe";
}

module.exports ={
    obtnerDatos,
    createData
}
