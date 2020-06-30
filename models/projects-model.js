const db = require("../data/config")

function find(){
  return  db("projects")
}


function findById(id){
    return db("projects")
           .where("id", id)
           .first()
}

function addProject(project){
  return db("projects")
         .insert(project)
}

function updateProject(project, id){
  return db("projects")
        .where({id})        
        .update(project)
          
}

function deleteProject(id) {
  return db("projects")
           .where({id})
           .del()
}



module.exports = {
    find,
    findById,
    addProject,
    updateProject,
    deleteProject,
}




/* function findResources(id){
    return db("projects_resources as pr")
           .innerJoin("projects as p",  "p.id", "pr.project_id")
           .innerJoin("resources as r", "r.id", "pr.r_id")
           .leftJoin("tasks as t", )
}

 */