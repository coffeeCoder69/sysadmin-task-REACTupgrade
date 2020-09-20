const { Router } = require("express");
//const authController = require("../controllers/adminController");
const { requireAuth } = require("../middlewares/authmiddleware");

const router = Router();

router.get("/user/:id", requireAuth);
router.get("/user/:id/events", requireAuth);

module.exports = router;
