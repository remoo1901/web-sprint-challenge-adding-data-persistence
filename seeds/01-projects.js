exports.seed =function(knex){
    return knex("projects").insert([
           {name: "project 1", description: "p_desc_1", project_completed: false},
           {name: "project 2", description: "p_desc_2", project_completed: false},
           {name: "project 3", description: "p_desc_3", project_completed: false},
           {name: "project 4", description: "p_desc_4", project_completed: false},
           {name: "project 5", description: "p_desc_5", project_completed: false}
    ]);
};