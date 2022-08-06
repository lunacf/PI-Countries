const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

 sequelize.define('activity', {
    idCountry: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nameAct: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idCountry: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }
  );
}//