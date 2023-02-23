if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const config = {
  development: {
    username: process.env.DEVDB_USERNAME,
    password: process.env.DEVDB_PASSWORD,
    database: process.env.DEVDB_DATABASE,
    host: process.env.DEVDB_HOST,
    dialect: 'mysql'
  },
  test: {
    username: process.env.TESTDB_USERNAME,
    password: process.env.TESTDB_PASSWORD,
    database: process.env.TESTDB_DATABASE,
    host: process.env.TESTDB_HOST,
    dialect: 'mysql',
    logging: false
  },
  production: {
    username: process.env.PRODB_USERNAME,
    password: process.env.PRODB_PASSWORD,
    database: process.env.PRODB_DATABASE,
    host: process.env.PRODB_HOST,
    dialect: 'mysql'
  },
  travis: {
    username: 'travis',
    database: 'ac_twitter_workspace_test',
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false
  }
}

module.exports = config
