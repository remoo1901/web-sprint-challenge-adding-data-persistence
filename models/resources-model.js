const db = require("../data/config")

function find(){
  return  db("resources")
}


function findById(id){
    return db("resources")
           .where("id", id)
           .first
}

function addResource(resource){
  return db("resources")
          .insert(resource)
}

function updateResource(resource,id){
  return db("resources")
           .update(resource)
           .where("id", id)
}

function deleteResource(id){
  return db("resources")
          .where({id})
          .del()
}

module.exports = {
    find,
    findById,
    addResource,
    updateResource,
    deleteResource
}