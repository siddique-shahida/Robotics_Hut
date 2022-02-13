console.log(" Student Controller Layer");

//Importing fs module for creating a blog page...
let fs = require('fs');
let fsExtra = require('fs-extra');

//Importing DB Layer in Service Layer...
let dbo = require("../db/database");
let Blogs = dbo.db("RoboticsHut").collection("blogs");

//Initializing Dummy Blog...
const B1 = {
    ID: 1,
    title: "Blog Title",
    author: "Sohaib",
    category: "Dummy",
    image: "Blog.jpg",
    text: "This is our dummy text for our Blog",
    link: "link"
};

const B2 = {
    ID: 2,
    title: "Blog Title 2",
    author: "Sohaib",
    category: "Dummy",
    image: "Blog.jpg",
    text: "This is our 2nd dummy text for our 2nd Blog",
    link: "link"
};

let blogs = [B1, B2];

// Functions for adding new blogs, finding all blogs,creating a new HTML file,
// and adding dummy blogs into the database...

//Inserting our dummy accounts into the database...
const insertDummyBlog = (Blogs) => {
    console.log("Inserting Dummy Blog...");

    //Insert our projects into the DB collection...
    Blogs.insertOne(B1, (err, result) => {
        if (err) { throw err; }
        else { console.log('Dummies Inserted: ', result); }
    });
}

//Finding all blogs from the database...
const findAllBlogs = (res) => {
    console.log("Getting all the Blogs from MongoDB...");

    //Insert our projects into the DB collection...
    Blogs.find().toArray((err, result) => {
        if (err) { throw err; }
        else {
            console.log('Blogs Found: ', result);
            res.send(result);
        }
    });
}

//Inserting new blogs from the database...
const insertNewBlog = (blog, res) => {
    console.log("Inserting New Dummy Blogs...");

    //Insert our projects into the DB collection...
    Blogs.insertOne(blog, (err, result) => {
        if (err) {
            throw err;
        }
        else {
            console.log('New Blog Inserted', result);
        }
    });
}

//Creating an HTML File...
const createBlogPage = (newblog) => {
    let htmlcontent = '<!DOCTYPE html>' + '<html lang="en">' + '<head>' + '<meta charset="UTF-8">' + '<meta http-equiv="X-UA-Compatible" content="IE=edge">' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0">' + '<title>Homepage</title>' +
        '<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">' +
        '<link rel="preconnect" href="https://fonts.googleapis.com">' + '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' +
        '<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet">' + '<link rel="stylesheet" href="/css/styles.css">' + '</head>' +

        '<body>' + '<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #0008C1;">' + '<div class="container-fluid">' + '<a class="navbar-brand" href="#" style="color: white;">The Robotics Hut</a>' +
        '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
        '<span class="navbar-toggler-icon"></span></button>' + '<div class="collapse navbar-collapse d-lg-flex flex-lg-row-reverse" id="navbarNav">' +
        '<ul class="navbar-nav">' + '<li class="nav-item">' + '<a class="nav-link active" aria-current="page" href="#">Home</a>' +
        '</li><li class="nav-item"><a class="nav-link" href="/student/contact">Contact Us</a></li>' +
        '<li class="nav-item"><a class="nav-link" href="/student/aboutus">About Us</a></li>' +
        '<li class="nav-item"> <a class="nav-link" href="/student/blogs">Blogs and Projects</a></li>' +
        '<li class="nav-item"><a class="nav-link" href="/student/FAQs">FAQs</a></li>' +
        '<li class="nav-item"> <a class="nav-link" href="/login">Sign Out</a></li></ul></div></div></nav>' +

        '<main><div class="container my-5"><div class="quiz-banner text-center"><div id="blog-title"><img src="' + newblog.image + '" width="100%" height= 600/></div>' +
        '<div class="my-5"><h2 id="blog-title">' + newblog.title + '</h2></div>' +
        '<p class="my-3 text-start text-muted">' + newblog.description + '</p><br />' +
        '<small style="text-align: left; align-content:start"> Created by: <b>' + newblog.author + '</b></small></div></div></main>' +
        '<footer><div class="container"><span class="text-muted text-center">Copyright &copy; Robotics Hut</span></div>' +
        '</footer></body></html>';

    let htmlfile = 'blog' + newblog.ID + '.html';

    fs.writeFile(htmlfile, htmlcontent, function (err) {
        if (err) {
            throw err;
        } else {
            console.log('New Blog/HTML File is created successfully...');
        }
    });

    fsExtra.move(htmlfile, './public/newblogs/' + htmlfile, function (err) {
        if (err) {
            throw err;
        } else {
            console.log('HTML File moved in the NewBlogs Folder...')
        }
    });
}


//Inseting Dummy Blogs in the Database...
setTimeout(function () {
    //insertDummyBlog(Blogs);
    //console.log("Dummy Blog Inserted");
}, 5000);


module.exports = {
    insertNewBlog, findAllBlogs, createBlogPage
}