const { Router } = require("express");
const { role } = require("../models/User");
//const authController = require('../controllers/adminController');
const { requireAuth } = require("../middlewares/authMiddleware");
const { requireAdmin } = require("../middlewares/accessAdmin");

const router = Router();

router.get("/admin", requireAuth, requireAdmin, (req, res) => {
  res.render("admin");
});
router.get("/admin/events", requireAuth, requireAdmin, (req, res) => {
  res.render("admin-events");
});
router.get("/admin/users", requireAuth, requireAdmin, (req, res) => {
  res.render("admin-users");
});

module.exports = router;
