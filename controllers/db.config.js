module.exports = {
    host: process.env.RDS_HOSTNAME || "localhost",
    user: process.env.RDS_USERNAME || "root",
    password: process.env.RDS_PASSWORD || "123456",
    port: process.env.RDS_PORT || "3306"
};