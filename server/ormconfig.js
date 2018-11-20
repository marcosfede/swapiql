const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, NODE_ENV } = process.env

module.exports = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: true,
  logging: NODE_ENV !== 'production',
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  },
}
