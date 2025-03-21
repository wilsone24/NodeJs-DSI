const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/contactController");


router.get("/api/contacts", user_controller.Get_Contact);
router.post("/api/contacts", user_controller.Add_Contact);
router.put("/api/contacts/:id", user_controller.Update_Contact);
router.delete("/api/contacts/:id", user_controller.Delete_Contact);

module.exports = router;
