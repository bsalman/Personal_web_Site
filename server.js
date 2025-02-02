const express = require("express");
const fs = require("fs");
const fileupload = require("express-fileupload");

const emailSender = require("./modules/emailSend");
const dataModule = require("./modules/mySqlDataModules");

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());
app.use(
  fileupload({
    limits: {
      fileSize: 50 * 1024 * 1024
    }
  })
);

const port = process.env.PORT || 5000;
/////////////////////////////////////////////
const personId = 1;

app.post("/sendInfo", (req, res) => {
  dataModule
    .getInfo(personId)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.json(2);
    });
});
app.post("/getFooterInfo", (req, res) => {
  dataModule
    .getFooterInfo(personId)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.json(2);
    });
});

app.post("/getSkills", (req, res) => {
  dataModule
    .getMySkills(personId)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.json(2);
    });
});
// send post  request to frontend uel /getProjects
app.post("/getProjects", (req, res) => {
  dataModule
    .getProjects(personId)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.json(2);
    });
});
//
app.post("/getEducationPost", (req, res) => {
  dataModule
    .getEducation(personId)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.json(2);
    });
});
//////////////////////////////////////////////////
app.post("/getExperiencePost", (req, res) => {
  dataModule
    .getExperience(personId)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log(error);
      res.json(2);
    });
});
//////////////////////////////////////////////////
app.use("/", (req, res) => {
  const html = fs.readFileSync(__dirname + "/index.html", "utf-8");
  res.send(html);
});
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
