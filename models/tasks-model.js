const db = require("../data/config")

function find(){
  return  db("tasks")
}


function findById(id){
    return db("tasks")
           .where("id", id)
           .first
}

function addTask(task){
  return db("tasks")
          .insert(task)
}

function updateTask(task,id){
  return db("tasks")
           .update(task)
           .where("id", id)
}

function deleteTask(id){
  return db("tasks")
          .where({id})
          .del()
}



module.exports = {
    find,
    findById,
    addTask,
    updateTask,
    deleteTask
}