'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
    description: {
      type: DataTypes.TEXT
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Project.belongsTo(models.City, {
         foreignKey: 'CityId',
         onDelete: 'CASCADE'
        });
        Project.belongsTo(models.User, {
         foreignKey: 'UserId',
         onDelete: 'CASCADE'
        });
        Project.belongsTo(models.Team, {
         foreignKey: 'TeamId',
         onDelete: 'CASCADE'
        });
      }
    }
  });
  return Project;
};
