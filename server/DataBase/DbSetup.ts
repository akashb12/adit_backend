import knex from "knex";
const knexfile = require("../../knexfile");
import { Model, knexSnakeCaseMappers } from "objection";
import { config } from "../config/config";

function setupDb() {
  const env = config.env;
  const db = knex({
    // @ts-ignore
    ...knexfile[env],
    ...knexSnakeCaseMappers(),
  });
  Model.knex(db);
}
module.exports = setupDb;
