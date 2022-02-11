console.log("Student Router Layer");
const express = require("express");
const router = express.Router();     //Initializes a Router...

//Importing Service Layer in Router Layer...
const studentControllerLayer = require("../controller/student_controller_layer");

//Importing our Nodemailer and MailGun Service...
const sendMail = require('../services/nodemail');


//-------------------------------------------------------
//--------------------All the APIs-----------------------

//HOME API...
router.get('/homepage', (req, res) => {
    res.render('./homepage.ejs');
});

//Contact Us APIs...
router.get('/contact', (req, res) => {
    res.render('./contact.ejs');
});


router.post('/contact', (req, res) => {
    //Sending an Email from here
    //fromEmail, toEmail, subject, text
    const { fromEmail, subject, text } = req.body;
    console.log('Data: ', req.body);
    sendMail("sender", fromEmail, subject, text, function (err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
            console.log(err);
        } else {
            res.status({ message: "Email Sent!" });
            console.log("Email Sent!!!");
        }
    });
});


//FAQs API...
router.get('/FAQs', (req, res) => {
    res.render('./faqs.ejs');
});

router.post('/FAQs', (req, res) => {
    //Implementing Sockets here..
});


//Quiz API...
router.get('/Quiz', (req, res) => {
    res.render('./quiz.ejs');
});

//Blogs API...

router.get('/blogsandprojects', (req, res) => {
    console.log("All good!");
});


//Uploading our Project list contents on request...
router.get('/blogs', (req, res) => {
    blogsController.findAllBlogs(res);
});

router.post('/blogs', (req, res) => {
    console.log('body', req.body);

    let newblog = req.body;
    blogsController.insertNewBlog(newblog);
});


router.get('/newblog', (req, res) => {
    res.send(" ");
});


router.post('/newblog', (req, res) => {
    let newblog = req.body;
    console.log("New Blog sent to the Server: ", newblog);
    blogsController.createBlogPage(newblog);
});


//About Us API...
router.get('/about', (req, res) => {
    res.send(" ");
});

//Exporting all the contents for our script...
module.exports = router