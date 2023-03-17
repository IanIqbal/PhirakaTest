const express = require("express")
const Controller = require("../controllers/controller")
const authentication = require("../middlewares/authentication")
const errorHandler = require("../middlewares/errorHandler")
const router = express.Router()


router.post("/login", Controller.login)
router.post("/register", authentication,Controller.register )
router.get("/users", authentication,Controller.getUsers)
router.get("/users/:id", authentication,Controller.getUser)
router.delete("/users/:id", authentication, Controller.deleteUser)
router.put("/users/:id", authentication, Controller.editUser)
router.use(errorHandler)
module.exports = router