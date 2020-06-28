const db = require("../data/config")

function find(){
  return  db("projects")
}


function findById(id){
    return db("projects")
           .where("id", id)
           .first
}


module.exports = {
    find,
    findById
}




/* function findResources(id){
    return db("projects_resources as pr")
           .innerJoin("projects as p",  "p.id", "pr.project_id")
           .innerJoin("resources as r", "r.id", "pr.r_id")
           .leftJoin("tasks as t", )
}

 */