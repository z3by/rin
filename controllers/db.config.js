module.exports = {
  host: process.env.RDS_HOSTNAME,
  user: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  port: process.env.RDS_PORT,
  database: process.env.RDS_DATABASE
};

// module.exports = {
//   host: process.env.RDS_HOSTNAME || "localhost",
//   user: process.env.RDS_USERNAME || "root",
//   password: process.env.RDS_PASSWORD || "123456",
//   port: process.env.RDS_PORT || "3306"
// };
