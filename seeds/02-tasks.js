exports.seed = function(knex){
    return knex('tasks').insert([
        {description: ' t_desc_1', note: ' note_1', task_completed: false},
        {description: ' t_desc_2', note: ' note_2', task_completed: false},
        {description: ' t_desc_3', note: ' note_3', task_completed: false},
        {description: ' t_desc_4', note: ' note_4', task_completed: false},
        {description: ' t_desc_5', note: ' note_5', task_completed: false},
    ]);
  }; 