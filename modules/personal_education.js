// src/models/personal_education.js
module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "personal_education",
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
      eduction_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: { model: "education", key: "id" }
      }
    },
    { tableName: "personal_education", timestamps: false }
  );
