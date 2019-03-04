'use strict';
module.exports = (sequelize, DataTypes) => {
  const Job = sequelize.define('Job', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Jobs",
        key: "id",
        as: "categoryId"
      }
    }
  }, {});
  Job.associate = function(models) {
    Job.hasOne(models.Category, {
      foreignKey: "categoryId"
    })
  };
  return Job;
};