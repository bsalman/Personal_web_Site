module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "experience",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      start_date: DataTypes.DATEONLY,
      end_date: DataTypes.DATEONLY,
      company: DataTypes.STRING(255),
      location: DataTypes.STRING(255),
      country: DataTypes.STRING(100),
      occupation: DataTypes.TEXT,
      job_title: DataTypes.STRING(255)
    },
    { tableName: "experience" }
  );
