exports.seed = function(knex){
    return knex('resources').insert([
      {name: 'r_name_1', description: "r_desc_1", task_id: 2 },
      {name: 'r_name_2', description: "r_desc_2", task_id: 1 },
      {name: 'r_name_3', description: "r_desc_3", task_id: 3},
      {name: 'r_name_4', description: "r_desc_4", task_id: 4},
      {name: 'r_name_5', description: "r_desc_5", task_id: 5},
    ]);
  }; 