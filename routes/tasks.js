const express = require('express');


const router = express.Router();


// we are importing by destructuring the object

const {getAllTasks, getTask, createTasks, updateTask,deleteTask} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTasks)

router.route('/:id').patch(updateTask).delete(deleteTask).get(getTask)

module.exports=router