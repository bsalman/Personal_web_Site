const express = require("express");
const fs = require("fs");
const fileupload = require("express-fileupload");
const bodyParser = require("body-parser");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
const emailSender = require("./modules/emailSend");
const dataModule = require("./modules/mySqlDataModules");

const app = express();
// Middleware
app.use(express.static(__dirname + "/public"));

app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"]
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;
///////////////Handle Api post //////////////////////////////
const personId = 1;

app.post("/sendInfo", (req, res) => {
  dataModule
    .getInfo(personId)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
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
      res.json(2);
    });
});
//////////////////////////////////////////////////
app.post(
  "/contact",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Email is invalid"),
    body("title").notEmpty().withMessage("Title is required"),
    body("text").notEmpty().withMessage("Text is required")
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, title, text } = req.body;

    emailSender.sendEmail(name, email, title, text, (ok) => {
      if (ok) {
        res.status(200).json({ message: "the Email sended successfully" });
      } else {
        res.status(500).json({ message: "Error sending email" });
      }
    });
  }
);
//////////////////////////////////////////////////
//route handler
app.use(
  "/",

  (req, res) => {
    const html = fs.readFileSync(__dirname + "/index.html", "utf-8");
    res.send(html);
  }
);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
