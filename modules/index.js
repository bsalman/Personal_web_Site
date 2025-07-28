// src/models/index.js
const { sequelize } = require("../config/sequelize");
const DataTypes = require("sequelize").DataTypes;

// Instantiate every model
const PersonalInfo = require("./personalinfo")(sequelize, DataTypes);
const Skill = require("./skills")(sequelize, DataTypes);
const PersonalSkill = require("./personalskill")(sequelize, DataTypes);
const Project = require("./projects")(sequelize, DataTypes);
const PersonalProject = require("./personal_projects")(sequelize, DataTypes);
const Education = require("./education")(sequelize, DataTypes);
const PersonalEducation = require("./personal_education")(sequelize, DataTypes);
const Experience = require("./experience")(sequelize, DataTypes);
const PersonalExperience = require("./personal_experience")(
  sequelize,
  DataTypes
);

/* ---------- Associations ---------- */

// skills  <-> personalinfo
PersonalInfo.belongsToMany(Skill, {
  through: PersonalSkill,
  foreignKey: "prsonId"
});

Skill.belongsToMany(PersonalInfo, {
  through: PersonalSkill,
  foreignKey: "skillId"
});

// projects <-> personalinfo
PersonalInfo.belongsToMany(Project, {
  through: PersonalProject,
  foreignKey: "person_id"
});

Project.belongsToMany(PersonalInfo, {
  through: PersonalProject,
  foreignKey: "project_id"
});

// education <-> personalinfo
PersonalInfo.belongsToMany(Education, {
  through: PersonalEducation,
  foreignKey: "person_id"
});
Education.belongsToMany(PersonalInfo, {
  through: PersonalEducation,
  foreignKey: "eduction_id"
});

// experience <-> personalinfo
PersonalInfo.belongsToMany(Experience, {
  through: PersonalExperience,
  foreignKey: "person_id"
});
Experience.belongsToMany(PersonalInfo, {
  through: PersonalExperience,
  foreignKey: "experience_id"
});

module.exports = {
  sequelize,
  PersonalInfo,
  Skill,
  PersonalSkill,
  Project,
  PersonalProject,
  Education,
  PersonalEducation,
  Experience,
  PersonalExperience
};
