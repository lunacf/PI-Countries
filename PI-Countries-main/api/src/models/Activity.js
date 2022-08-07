const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Activity', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    nameAct: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 5 },
      allowNull: false,
    },
    duration: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM('Winter', 'Summer', 'Spring', 'Autumn'),
      allowNull: false,
    }
  }
  );
}//