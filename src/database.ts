import { Knex, knex as setupKnex } from 'knex'

import { env } from './env'

export const config: Knex.Config = {
  client: 'sqlite3',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true, // todos os campos que não forem preenchidos, serão nulos
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)
