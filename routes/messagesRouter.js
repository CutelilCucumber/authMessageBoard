const { Router } = require("express");
const messageController = require("../controllers/messageController");
const auth = require('../middleware/authMiddleware.js')
const messageRouter = Router();

messageRouter.get("/", messageController.getLogs);
messageRouter.get("/new", auth.isMember, messageController.createLogGet);
messageRouter.post("/new", auth.isMember, messageController.createLogPost);

module.exports = messageRouter;