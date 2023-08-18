require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

require("./db/conn");
const users = require("./models/usersSchema");
const students = require("./models/studentsSchema");
const router = require("./routes/router");

const cors = require("cors");

const app = express();

const port = 8003;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`server is at port number ${port}`);
});
