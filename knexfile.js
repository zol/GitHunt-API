// Since Knex always runs this file first, all of our seeds and migrations are babelified.
require('babel-register');

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3',
    },
    useNullAsDefault: true,
  },

  // Don't complain if the file doesn't exist, if we aren't trying to run in prod
  production: (process.env.NODE_ENV === 'production' && require('./prod-db.js')),
};
