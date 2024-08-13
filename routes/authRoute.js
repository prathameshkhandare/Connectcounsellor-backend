const express = require("express");

const {authenticateToken}= require("../middleware/authMiddleware");
const router = express.Router();
const {registerController,loginController, getUserDetails,forgotPassword,resetPassword} = require("../controllers/authController");



router.post('/api/register', registerController);
router.post('/api/login', loginController);
router.get('/api/userdetails',authenticateToken ,getUserDetails);
router.post('/api/forgot-password',forgotPassword)
router.post('/api/reset-password', resetPassword);

module.exports = router;








