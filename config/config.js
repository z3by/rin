module.exports = {
  development: {
    username: "root",
    password: "123456",
    database: "rin",
    host: "127.0.0.1",
    dialect: "mysql"
  },
  test: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DATABASE,
    host: process.env.RDS_HOSTNAME,
    dialect: "mysql"
  },
  production: {
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    database: process.env.RDS_DATABASE,
    host: process.env.RDS_HOSTNAME,
    dialect: "mysql"
  }
};
