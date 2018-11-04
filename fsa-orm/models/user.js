'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasMany(models.Team, {
         foreignKey: 'UserId',
         onDelete: 'CASCADE'
        });
        User.hasMany(models.Project, {
         foreignKey: 'UserId',
         onDelete: 'CASCADE'
        });
        User.belongsTo(models.City, {
         foreignKey: 'CityId',
         onDelete: 'CASCADE'
        });
      }
    }
  });
  return User;
};
