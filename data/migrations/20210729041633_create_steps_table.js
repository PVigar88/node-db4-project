exports.up = function (knex) {
  return knex.schema.createTable("steps", (tbl) => {
    tbl.increments();
    tbl.string("step_instruction").notNullable().unique();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("steps");
};
