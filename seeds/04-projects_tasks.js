exports.seed = function(knex){
    return knex('projects_tasks').insert([
        { projects_id: 1, tasks_id: 5},
        { projects_id: 2, tasks_id: 4},
        { projects_id: 3, tasks_id: 3},
        { projects_id: 4, tasks_id: 2},
        { projects_id: 5, tasks_id: 1},
    ]);
  }; 