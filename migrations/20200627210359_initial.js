
exports.up = async function(knex) {
   await knex.schema.createTable("projects", (table) => {
       table.increments("id")
       table.text("name").notNull()
       table.text("description").notNull()
       table.boolean('project_completed').defaultTo(0)
       
   })

   await knex.schema.createTable("tasks", table => {
       table.increments("id")
       table.text("description").notNull()
       table.text("note")
       table.boolean('task_completed').defaultTo(0)
   }) 
   
   await knex.schema.createTable("resources", table => {
       table.increments("id")
       table.text("name").notNull().unique()
       table.text("description")
       table.integer("task_id")
            .references("id")
            .inTable("tasks")       
   })

   await knex.schema.createTable("projects_tasks", (table) => {
       table
            .integer("projects_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable('projects')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
       table
            .integer("tasks_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("tasks")
            .onUpdate('CASCADE')
            .onDelete('CASCADE');

   })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects_tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("projects")
};
