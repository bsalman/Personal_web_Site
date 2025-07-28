// src/services/personal.service.js
const {
  PersonalInfo,
  Skill,
  Project,
  Education,
  Experience,
  PersonalSkill,
  PersonalProject,
  PersonalEducation,
  PersonalExperience
} = require("../modules/index");

// ----------------------------------------------------
//  getInfo            (home & skills page header)
// ----------------------------------------------------
async function getInfo(personId) {
  const person = await PersonalInfo.findByPk(personId);

  if (!person) return null;

  const [skillCount, projectCount] = await Promise.all([
    PersonalSkill.count({ where: { prsonId: personId } }),
    PersonalProject.count({ where: { person_id: personId } })
  ]);

  return {
    personalinfo: person,
    count_programming_skills: skillCount,
    count_projects: projectCount
  };
}

// ----------------------------------------------------
//  getFooterInfo
// ----------------------------------------------------
function getFooterInfo(personId) {
  const footerInfo = PersonalInfo.findByPk(personId, {
    attributes: [
      "xing_url",
      "github_url",
      "linkedin_url",
      "cv_file_url",
      "data_protection_file_url",
      "email",
      "phone",
      "street",
      "city",
      "zip",
      "housNumber"
    ]
  });
  console.log(footerInfo);

  return footerInfo;
}

// ----------------------------------------------------
//  getMySkills
// ----------------------------------------------------
function getMySkills(personId) {
  return Skill.findAll({
    attributes: ["skill", "skillLevel", "main_direction"],
    include: [
      {
        model: PersonalInfo,
        attributes: [],
        where: { id: personId },
        through: { attributes: [] } // drop join-table clutter
      }
    ],
    order: [["id", "ASC"]]
  });
}

// ----------------------------------------------------
//  getProjects
// ----------------------------------------------------
function getProjects(personId) {
  return Project.findAll({
    attributes: ["project_name", "project_url", "web_img_url", "description"],
    include: [
      {
        model: PersonalInfo,
        attributes: [],
        where: { id: personId },
        through: { attributes: [] }
      }
    ]
  });
}

// ----------------------------------------------------
//  getEducation
// ----------------------------------------------------
function getEducation(personId) {
  return Education.findAll({
    attributes: [
      "start_date",
      "end_date",
      "specialization",
      "location",
      "certificate"
    ],
    include: [
      {
        model: PersonalInfo,
        attributes: [],
        where: { id: personId },
        through: { attributes: [] }
      }
    ],
    order: [["start_date", "ASC"]]
  });
}

// ----------------------------------------------------
//  getExperience
// ----------------------------------------------------
function getExperience(personId) {
  return Experience.findAll({
    attributes: [
      "start_date",
      "end_date",
      "company",
      "location",
      "country",
      "occupation",
      "job_title"
    ],
    include: [
      {
        model: PersonalInfo,
        attributes: [],
        where: { id: personId },
        through: { attributes: [] }
      }
    ],
    order: [["start_date", "ASC"]]
  });
}

module.exports = {
  getInfo,
  getFooterInfo,
  getMySkills,
  getProjects,
  getEducation,
  getExperience
};
