console.log("Student Router Layer");
const express = require("express");
const router = express.Router();     //Initializes a Router...

//Importing Service Layer in Router Layer...
const studentControllerLayer = require("../controller/student_controller_layer");

//HOME API...
router.get('/homepage', (req, res) => {
    res.render('./student/homepage.ejs');
});

//Contact Us API...
router.get('/contact', (req, res) => {
    res.render('./student/contact.ejs');
});

//FAQs API...
router.get('/FAQs', (req, res) => {
    res.render('./student/faqs.ejs');
});

//Quiz API...
router.get('/Quiz', (req, res) => {
    res.render('./student/quiz.ejs');
});

//Blogs API...
//Quiz Result API...
//About Us API...

//Exporting all the contents for our script...
module.exports = router