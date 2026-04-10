const express = require("express");

const app = express();

require("dotenv").config();
require("./backend/models/db");
const cors  = require("cors");

const taskRouter = require("./backend/routes/taskRouter");

app.use(express.urlencoded());
app.use(express.json());

app.use(cors());
app.use("/tasks" , taskRouter);

const port = process.env.PORT;
app.listen(port , () =>{
  console.log(`server is running on http://localhost:${port}`);
})









