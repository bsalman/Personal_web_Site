// src/models/personal_projects.js
module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "personal_projects",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      person_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: { model: "personalinfo", key: "id" }
      },
      project_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: { model: "projects", key: "id" }
      }
    },
    { tableName: "personal_projects", timestamps: false }
  );
