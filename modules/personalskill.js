// src/models/personalskill.js  (join table)
module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "personalskill",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      prsonId: {
        // original typo kept; map it—don’t fight it
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: { model: "personalinfo", key: "id" }
      },
      skillId: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        references: { model: "skills", key: "id" }
      }
    },
    { tableName: "personalskill" }
  );
