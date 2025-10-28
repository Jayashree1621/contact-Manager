const express = require("express");
const contactController= require("../controllers/contactController")
const router = express.Router();

router.get("/about",contactController.about)

router.get("/",contactController.getHomePage);

// router.get("/add-contact", contactController.getAddContact);
// router.post("/add-contact",contactController.addSingleContact);

router.route("/add-contact").get(contactController.getAddContact).post(contactController.addSingleContact)

// router.get("/edit-contact/:id",contactController.getEditContact);
// router.put("/edit-contact/:id",contactController.getUpdatesingleContact);

router.route("/edit-contact/:id").get(contactController.getEditContact).put(contactController.getUpdatesingleContact)

router.delete("/delete-contact/:id",contactController.deleteSingleContact);



module.exports=router
