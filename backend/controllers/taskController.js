const taskModel = require("../models/taskModel");

const createtask = async (req,res) =>{

  const data = req.body;

  try{
    const model = new taskModel(data);
    await model.save();
    res.status(201)
    .json({ message: 'Task is created', success: true });
    } catch (err) {
    res.status(500).json({ message: 'Failed to create task', success: false });
    }
}
  
const fetchAllTask = async (req,res) =>{
  try{
    const data = await taskModel.find({});
     res.status(200)
            .json({ message: 'All Tasks', success: true, data });
    } catch (err) {
        res.status(500).json({ message: 'Failed to get all tasks', success: false });
    }
  }

  const updateTaskById = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const obj = { $set: { ...body } };
        await taskModel.findByIdAndUpdate(id, obj)
        res.status(200).json({ message: 'Task Updated', success: true });
    } catch (err) {
        res.status(500).json({ message: 'Failed to updated task', success: false });
    }
}


const deleteTaskById = async(req, res) => {
    try {
        const id = req.params.id;
        await taskModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Task is deleted', success: true });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete task', success: false });
    }
}

module.exports = {

  createtask,
  fetchAllTask,
  updateTaskById,
  deleteTaskById

}
