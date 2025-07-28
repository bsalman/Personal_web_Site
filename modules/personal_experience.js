// src/models/personal_experience.js
module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "personal_experience",
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
      experience_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: { model: "experience", key: "id" }
      }
    },
    { tableName: "personal_experience", timestamps: false }
  );
