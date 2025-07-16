const express = require("express");
const {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(authMiddleware)
//routes
// GET USER || GET
router.get("/getUser", getUserController);

// UPDATE PROFILE
router.put("/updateUser", updateUserController);

//password update
router.post("/updatePassword", updatePasswordController);

// RESET PASSWORD
router.post("/resetPassword", resetPasswordController);

// delete USER
router.delete("/deleteUser/:id", deleteProfileController);

module.exports = router;
