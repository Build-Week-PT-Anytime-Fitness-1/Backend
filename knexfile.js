const dbConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/auth.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
      tableName: 'dbmigrations',
    },
    seeds: { directory: './database/seeds' },
    // add the following
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
  },
};


production: {
    client: 'pg',
    connection: {
      filename: './data/auth.db3'
    },
    useNullAsDefault:true,
    migrations:{
      directory:'./data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    },
    // add the following
    pool: {
      afterCreate: (conn, done) => {
        // runs after a connection is made to the sqlite engine
        conn.run('PRAGMA foreign_keys = ON', done); // turn on FK enforcement
      },
    },
  },
};
