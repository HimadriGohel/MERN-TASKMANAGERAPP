const express = require("express");

const router = express.Router();

const {createtask , fetchAllTask , updateTaskById , deleteTaskById}= require("../controllers/taskController");

router.post("/" , createtask);

router.get("/" , fetchAllTask);

router.put("/:id" , updateTaskById);

router.delete("/:id" , deleteTaskById)

module.exports = router;