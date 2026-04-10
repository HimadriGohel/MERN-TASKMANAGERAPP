const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI)
.then(() =>{
  console.log("mongoDB connected successfully.");
}).catch((err) =>{
  console.log("mongodb connection error" , err);
})