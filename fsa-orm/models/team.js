'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
    userCount: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Team.hasMany(models.Project, {
         foreignKey: 'TeamId',
         onDelete: 'CASCADE'
        });
        Team.belongsTo(models.User, {
         foreignKey: 'UserId',
         onDelete: 'CASCADE'
        });
      }
    }
  });
  return Team;
};
