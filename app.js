const express = require("express");
const logsController = require("./controllers/logsController.js")
const app = express();

app.use(express.json());

app.get("/", (req, res) => { 
    res.send("welcome to the captain's log");
  });

app.use("/logs", logsController)

app.get("*", (req,res) => {
    res.status(404).json({"error": "Page Not Found"})
})






module.exports = app;

