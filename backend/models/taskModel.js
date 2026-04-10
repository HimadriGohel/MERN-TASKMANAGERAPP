const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskName :{
    type:String ,
    required : true
  },
  isDone :{
    type : Boolean ,
    required : true
  }
})

module.exports = mongoose.model('todos' , taskSchema);