module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "education",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      start_date: DataTypes.DATEONLY,
      end_date: DataTypes.DATEONLY,
      location: DataTypes.STRING(255),
      specialization: DataTypes.STRING(255),
      certificate: DataTypes.STRING(255)
    },
    { tableName: "education" }
  );
