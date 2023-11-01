function getDbConn() {
  return mysql.createConnection(process.env.DATABASE_URL);
}
module.exports = {
  getDbConn,
};
