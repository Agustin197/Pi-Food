const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      // validate: {
      //   min: 1,
      //   max: 100,
      // }
    },
    // steps: {
    //   type: DataTypes.ARRAY(DataTypes.TEXT),
    // },
    image: {
      type: DataTypes.TEXT,
    },
    createInDb: {
      type: DataTypes.BOOLEAN,
      //allowNull: false,
      defaultValue: true,
    },
  }, {timestamps: false});
};
