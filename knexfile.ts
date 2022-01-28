// Update with your config settings.

import path from "path";
import { config } from "./server/config/config";

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: config.database.database,
      user: config.database.username,
      password: config.database.password,
    },
    migrations: {
      directory: path.join(__dirname, "./server/DataBase/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "./server/DataBase/seeds"),
    },
    debug: false,
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "adit_db",
      user: "youruser",
      password: "yourpass",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "adit_db",
      user: "youruser",
      password: "yourpass",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
  test: {
    client: "postgresql",
    connection: {
      database: "adit_db",
      user: "youruser",
      password: "yourpass",
    },
    pool: {
      min: 2,
      max: 4,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
