
exports.up = async function(knex) {
   await knex.schema.createTable("projects", (table) => {
       table.increments("id")
       table.text("name").notNull()
       table.text("description").notNull()
       table.boolean("completed").defaultTo(0)
   })

   await knex.schema.createTable("tasks", table => {
       table.increments("id")
       table.text("description").notNull()
       table.text("note")
       table.boolean("completed").defaultTo(0)
   }) 
   
   await knex.schema.createTable("resources", table => {
       table.increments("id")
       table.text("name").notNull().unique()
       table.text("discription")
       table.integer("task_id")
            .references("id")
            .inTable("tasks")       
   })

   await knex.schema.createTable("projects_tasks", (table) => {
       table
            .integer("projects_id")
            .references("id")
            .inTable("projects")
       table
            .integer("tasks_id")
            .references("id")
            .inTable("tasks")

   })

};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("projects_tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("projects")
};
