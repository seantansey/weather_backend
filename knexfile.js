module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/weather_items'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/db_name'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },
}
