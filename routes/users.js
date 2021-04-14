const router = require("express").Router();
const controllers = require("../controllers");

// Current Path = "/users"

router.post("/new", controllers.users.create)
router.put("/:id", controllers.users.update)
// router.post("/login", controllers.users.login)
// router.get("/logout", controllers.users.logout)
// router.delete("/:id", controllers.users.destroy)

module.exports = router; 