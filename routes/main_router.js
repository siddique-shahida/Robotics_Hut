console.log("Main Router Layer");
const express = require("express");
const router = express.Router();     //Initializes a Router...

//Importing Service Layer in Router Layer...
const controllerLayer = require("../controller/controller_layer");

//Importing our Nodemailer and MailGun Service...
const sendPwd = require('../services/nodemail');


//-------------------------------------------------------
//--------------------All the APIs-----------------------

//Unsuccessful Login API...
router.get('/nouser', (req, res) => {
    res.render('nouser.ejs');
});


//Register APIs...
router.get('/register', (req, res) => {
    res.render('register.ejs');
});

router.post('/register', (req, res) => {
    let newaccount = req.body;
    console.log('Inserting new account',newaccount);
    controllerLayer.registerUser(newaccount);
    console.log("New Account Registered!");

    setTimeout(() => {
        return res.redirect('/login');
    }, 5000);
});


//Login APIs...
router.get('/login', (req, res) => {
    res.render('./login.ejs');
});

router.post('/login', (req, res) => {
    let user = req.body;
    console.log("Logging In...", user);
    let loggedIn = controllerLayer.findAccount(user);
    console.log(loggedIn);

    if (loggedIn) {
        setTimeout(() => {
            console.log("Logged in at Home!")
            return res.redirect('http://localhost:8080/student/homepage');
        }, 5000);
    } else {
        setTimeout(() => {
            res.redirect('/nouser');
            console.log("No User Found!");
        }, 500);
    }
});


//Forgot Password APIs 
router.get('/forgot', (req, res) => {
    res.render('./forgotpassword.ejs');
});

router.post('/forgot', (req, res) => {
     //fromEmail, toEmail, subject, text
    let { fromEmail, subject, text } = req.body;
    console.log('Data: ', req.body);

    let email, password = controllerLayer.findAccountByEmail(fromEmail);
    console.log(email, password);

    email = "jake@jake";
    password = "jake";

    text = text + "\n Account: " + email + "\n Your Password: " + password + "\n Have a wonderful day!";
    console.log(text);

    
    sendPwd("sender", fromEmail, subject, text, function (err, data) {
        if (err) {
            res.status(500).json({ message: 'Internal Error' });
            console.log(err);
        } else {
            res.status({ message: "Email Sent!" });
            console.log("Email Sent!!!");
        }
    });

    setTimeout(() => {
        res.redirect('http://localhost:8080/login');
        res.end();
    }, 5000);
});


//---------------------------------------------------------------
//--------------------All the Testing APIs-----------------------


router.get('/accounts', (req, res) => {
    controllerLayer.getAllAccounts(res);
    //console.log("Got the Accounts",DBaccounts);
});

router.post('/accounts', (req, res) => {
    setTimeout(() => {
        console.log("Here!");
        
        console.log("got it");
        res.json({ result: DBaccounts });
        console.log("now Here!");
    }, 5000);
});

//Exporting all the contents for our script...
module.exports = router