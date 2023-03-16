const {db} = require('../../db')
let Sequelize = require('sequelize');
let DataTypes = Sequelize.DataTypes;


const User = db.define(
    "user",
    {
      username: {
        //   type: DataTypes.TEXT,
        //   allowNull: false,
        //   unique: true,
        type: DataTypes.TEXT,
        require: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false, // valores nulos
      },
      role: {
        type: DataTypes.ENUM("user", "moderador"),
        defaultValue: "moderador",
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  module.exports = {
    User
  }