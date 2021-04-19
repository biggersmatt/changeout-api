const router = require("express").Router();
const controllers = require("../controllers");

// Current Path = "/users"

router.get("/", controllers.users.index)
router.post("/new", controllers.users.create)
router.put("/:id", controllers.users.update)

module.exports = router; 