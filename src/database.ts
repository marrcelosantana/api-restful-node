import "dotenv/config";

import { knex as setupKnex, Knex } from "knex";
import { env } from "./env";

export const config: Knex.Config = {
  client: env.DATABABASE_CLIENT,
  connection:
    env.DATABABASE_CLIENT === "sqlite"
      ? {
          filename: env.DATABASE_URL,
        }
      : env.DATABABASE_CLIENT,
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
};

export const knex = setupKnex(config);
