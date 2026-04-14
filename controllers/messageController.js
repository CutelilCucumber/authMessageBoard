const db = require("../db/queryLogDB");

async function getLogs(req, res) {
  const logs = await db.getAllLogs();
  res.render("index", { logs: logs, user: req.user })
}

async function createLogGet(req, res) {
  res.render("messageForm");
}

async function createLogPost(req, res) {
  console.log(req.user)
  await db.insertLog(req.user.firstname, req.body.message);
  res.redirect("/");
}

async function removeLog(req, res) {
  await db.deleteLog(req.params.id);

  res.redirect('/');
}

module.exports = {
  getLogs,
  createLogGet,
  createLogPost,
  removeLog
};
