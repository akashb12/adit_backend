import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("employees", (t) => {
    t.bigIncrements();
    t.bigInteger("company_id")
      .references("companies.id")
      .notNullable()
      .index()
      .onDelete("RESTRICT");
    t.bigInteger("role_id")
      .references("roles.id")
      .notNullable()
      .index()
      .onDelete("RESTRICT");
    t.string("first_name").notNullable();
    t.string("last_name");
    t.string("email").notNullable();
    t.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("employees");
}
