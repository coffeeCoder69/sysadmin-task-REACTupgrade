const { Router } = require('express');
const authController = require('../controllers/adminController');
const { requireAuth } = require("../middlewares/authmiddleware");

const router = Router();

router.get('/admin', requireAuth ,(req,res) => res.render('admin'));

module.exports = router;