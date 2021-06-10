const mongoose = require('mongoose');
const fs = require('fs')
const connectionString="mongodb+srv://userName:Password@cluster0.jufz4.mongodb.net/collectionName?retryWrites=true&w=majority";

// get Schema object
const Schema = mongoose.Schema
// creat new users schema
const cvSchema = new Schema({
    fileName:{
        type:String
    }
    ,
    pdfUrl:{
        type: String,
        required: true
    }
})

// creat Cv File model
const CVFile =mongoose.model('lebenslaufFile',cvSchema)

//connect function
function connect() {
    return new Promise((resolve, reject) => {
        if (mongoose.connection.readyState === 1) {
            resolve()
        } else {
            mongoose.connect(connectionString, {
                useUnifiedTopology: true,
                useCreateIndex: true,
                useNewUrlParser: true
            }).then(() => {
                resolve()
            }).catch(error => {
                reject(error)
            })
        }
    })
  }

  // download file function
  function downloadFile(fileName){
      return new Promise((resolve,reject)=>{
          connect().then(()=>{
            CVFile.findOne({fileName:fileName}).then(findFile=>{
                if (findFile) {
                    resolve(findFile.pdfUrl)
                }
                else{
                    reject("not found")
                }
            }).catch(error=>{
                reject(error)
            })
          }).catch(error=>{
            reject(error)
        })
      })
  }

  module.exports={
    downloadFile
  }