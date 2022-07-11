/**
 * 
 * in this you can find only the controllers
 */


// getAllTasks

const getAllTasks = (req,res)=>{
    res.send("Hello world from Tasks file");
}
const createTasks = (req,res)=>{
    console.log(req.body)
    res.send("creating Task");
}
const getTask = (req,res)=>{
    res.send("geting sinlge Task");
}
const updateTask = (req,res)=>{
    res.send("updateTask");
}
const deleteTask = (req,res)=>{
    res.send("deleteTask");
}



// We will export all in an object becuase of multiple exports

module.exports={
    getAllTasks,
    createTasks,
    deleteTask,
    updateTask,
    getTask
}
