const pool = require("./pool");

async function getAllLogs() {
  try {
    const { rows } = await pool.query("SELECT * FROM logs");
    return rows;
  } catch (err) {
    if (err.code === "42P01") {//relation does not exist
      return [];
    }
    throw err;
  }
};

async function insertLog(username, message) {
  await pool.query("INSERT INTO logs (username, message) VALUES ($1, $2)",
  [username, message]);
};

module.exports = {
  getAllLogs,
  insertLog
};