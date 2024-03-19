const express = require("express");
const { addDetails , showDetails,givecity} = require("../controller/lead-controller.js");

const router = express.Router();

router.post("/", addDetails);   //create
router.get("/", showDetails);  
router.get("/getcity/:id",givecity) //read

module.exports = router;