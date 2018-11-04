'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('City', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    City.hasMany(models.User, {
     foreignKey: 'CityId',
     onDelete: 'CASCADE'
    });
    City.hasMany(models.Project, {
     foreignKey: 'CityId',
     onDelete: 'CASCADE'
    });
  });
  return City;
};
