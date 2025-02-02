const mySql = require("mysql2");
// using dotenv to avoid  write the database as hardcode in side the project //Keeps sensitive information out of your codebase.
const dotenv = require("dotenv");
dotenv.config();

// // creating connection function
let db = null;
function connect() {
  return new Promise((resolve, reject) => {
    if (db) {
      if (db.state === "disconnected") {
        db.connect((error) => {
          if (error) {
            reject(error);
          } else {
            resolve();
          }
        });
      } else {
        resolve();
      }
    } else {
      db = mySql.createConnection({
        multipleStatements: true,
        host: process.env.MYSQL_HOST,
        port: 3306,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
      });
      db.connect((error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    }
  });
}
// //create function to use multi queryString
function runQuery(queryString) {
  return new Promise((resolve, reject) => {
    connect()
      .then(() => {
        db.query(queryString, (error, result, fields) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// creating function to get the info from data base just for home page and the skills page
function getInfo(personId) {
  return new Promise((resolve, reject) => {
    runQuery(
      `SELECT * FROM personalinfo WHERE id ='${personId}';
      SELECT COUNT(skillId) AS count_programming_skills FROM  personalskill WHERE prsonId ='${personId}';
      SELECT COUNT(project_id) AS count_projects FROM  personal_projects WHERE person_id ='${personId}';`
    )
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}
const getFooterInfo = async (personId) => {
  try {
    const footerInfo = await runQuery(
      `SELECT xing_url, github_url,linkedin_url,cv_file_url,data_protection_file_url,email,phone,street,city,zip,city,housNumber
       From personalinfo WHERE id = '${personId}'`
    );
    return footerInfo;
  } catch (error) {
    throw error;
  }
};
// getting skills using the personId
const getMySkills = async (personId) => {
  try {
    const skills = await runQuery(
      `SELECT skill,skillLevel,main_direction  FROM skills AS s 
        INNER JOIN personalskill AS ps 
        ON s.id = ps.skillId 
        INNER JOIN personalinfo AS PI 
        ON PI.id = ps.prsonId 
        WHERE PI.id = '${personId}'
        ORDER BY s.id ASC`
    );
    return skills;
  } catch (error) {
    throw error;
  }
};
// getting projects using the personId
const getProjects = async (personId) => {
  try {
    const projects =
      await runQuery(`SELECT p.project_name, p.project_url, p.web_img_url, p.description
           FROM projects AS p
          INNER JOIN personal_projects AS pp ON p.id = pp.project_id
          INNER JOIN personalinfo AS pi ON pi.id = pp.person_id  
          WHERE pi.id = '${personId}'`);
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
//getting education using the personId
const getEducation = async (personId) => {
  try {
    const education = await runQuery(
      `SELECT start_date,end_date,specialization,location,certificate  FROM education AS e
        INNER JOIN personal_education AS pe 
        ON e.id = pe.eduction_id 
        INNER JOIN personalinfo AS PI 
        ON PI.id = pe.person_id 
        WHERE PI.id = '${personId}'
        ORDER BY start_date ASC`
    );
    return education;
  } catch (error) {
    throw error;
  }
};
//
const getExperience = async (personID) => {
  try {
    const experience = await runQuery(
      `SELECT e.start_date,e.end_date,e.company,e.location,e.country,e.occupation,e.job_title  FROM experience AS e
        INNER JOIN personal_experience AS pe 
        ON e.id = pe.experience_id 
        INNER JOIN personalinfo AS PI 
        ON PI.id = pe.person_id 
        WHERE PI.id = '${personID}'
        ORDER BY start_date ASC`
    );
    return experience;
  } catch (error) {
    throw error;
  }
};
// exporting the functions
module.exports = {
  getInfo,
  getFooterInfo,
  getMySkills,
  getProjects,
  getEducation,
  getExperience
};
