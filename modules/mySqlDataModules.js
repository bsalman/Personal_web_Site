
const mySql = require('mysql');
const fs = require('fs')
// creating connection function 
let con = null;
function connect() {
    return new Promise((resolve, reject) => {
        if (con) {
            if (con.state === 'disconnected') {
                con.connect(error => {
                    if (error) {
                        reject(error)
                    } else {
                        resolve()
                    }
                })
            } else {
                resolve()
            }
        } else {
            con = mySql.createConnection({
                multipleStatements: true,
                host: 'localhost',
                port: 3306,
                user: 'root',
                password: '',
                database: 'cv'
            })
            con.connect(error => {
                if (error) {
                    reject(error)
                } else {
                    resolve()
                }
            })
        }
    })
}
//creat function to use multi queryString
function runQuery(queryString) {
    return new Promise((resolve, reject) => {
        connect().then(() => {
            con.query(queryString, (error, result, fields) => {
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })
        }).catch(error => {
            reject(error)
        })
    })
}

// creating function to get the info from data base just for home page and the skills page
function getMyInfo(){
    return new Promise((resolve,reject)=>{
        runQuery(`SELECT * FROM myinfo WHERE id LIKE'${1}'` ).then((result)=>{
         
            resolve(result)
        }).catch((error)=>{
            console.log(error);
            reject(error)
        })
    })
}

module.exports={
    getMyInfo
}
