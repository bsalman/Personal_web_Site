const mySql = require("mysql2");
// using dotenv to avoid  write the database as hardcode in side the project //Keeps sensitive information out of your codebase.
const dotenv = require("dotenv");
dotenv.config();

// // creating connection function
let db = null;
function connect() {
  return new Promise((resolve, reject) => {
    if (db) {
      console.log(db);
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
    runQuery(`SELECT * FROM personalinfo WHERE id ='${personId}'`)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

const getMySkills = async (personId) => {
  try {
    const skills = await runQuery(
      `SELECT skill,skillLevel,main_direction,firstname,lastName  FROM skills AS s 
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

module.exports = {
  getInfo,
  getMySkills
};
