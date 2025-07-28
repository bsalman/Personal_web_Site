module.exports = (sequelize, DataTypes) =>
  sequelize.define(
    "personalinfo",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
      },
      lastName: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      FirstName: DataTypes.STRING(255),
      street: DataTypes.STRING(255),
      housNumber: {
        type: DataTypes.STRING(10),
        field: "housNumber"
      },
      zip: DataTypes.INTEGER,
      city: DataTypes.STRING(255),
      description: DataTypes.TEXT,
      position: DataTypes.STRING(255),
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      birthday: DataTypes.STRING(255),
      phone: DataTypes.STRING(255),
      xing_url: DataTypes.STRING(255),
      github_url: DataTypes.STRING(255),
      linkedin_url: DataTypes.STRING(255),
      cv_file_url: DataTypes.STRING(255),
      data_protection_file_url: DataTypes.STRING(255)
    },
    { tableName: "personalinfo" }
  );
