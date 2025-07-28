// src/models/projects.js
module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "projects",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      project_name: DataTypes.STRING(255),
      project_url: DataTypes.STRING(255),
      web_img_url: DataTypes.STRING(255),
      description: DataTypes.TEXT
    },
    { tableName: "projects" }
  );
