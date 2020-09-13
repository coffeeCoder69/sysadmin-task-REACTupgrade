const { Router } = require('express');
const authController = require('../controllers/adminController');

const router = Router();

router.get('/admin', (req,res) => res.render('admin'));

module.exports = router;