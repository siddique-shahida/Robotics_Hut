var expect = require("chai").expect;
var request = require("request");

//Tests in the Student Router...

//Home Page...
describe("8.Testing our Home Page", function () {
    var url = "http://localhost:8080/student/homepage";

    it("a- returns status 200 to check if api works", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});


//Contact Us Page...
describe("9.Testing our Contact Page", function () {
    var url = "http://localhost:8080/student/contact";

    it("a- returns status 200 to check if api works", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});


//About Us Page...
describe("10.Testing our Contact Page", function () {
    var url = "http://localhost:8080/student/about";

    it("a- returns status 200 to check if api works", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});


//FAQs Page...
describe("11.Testing our Contact Page", function () {
    var url = "http://localhost:8080/student/FAQs";

    it("a- returns status 200 to check if api works", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});


//Quiz Page...
describe("12.Testing our Contact Page", function () {
    var url = "http://localhost:8080/student/Quiz";

    it("a- returns status 200 to check if api works", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});


//Blogs and Projects Page...
describe("13.Testing our Blogs and Projects Page", function () {
    var url = "http://localhost:8080/student/blogsandprojects";

    it("a- returns status 200 to check if api works", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});


//Blogs Page...
describe("14.Testing our Blogs and Projects Page", function () {
    var url = "http://localhost:8080/student/blogs";

    it("a- returns status 200 to check if api works", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it("b- Checks if the blogs are recieved from the backend as an array of JSON Objects", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body).to.be.an("array");
            done();
        });
    });
});


//Blogs Page...
describe("14.Testing our Blogs and Projects Page", function () {
    var url = "http://localhost:8080/student/newblog";

    it("a- returns status 200 to check if api works", function (done) {
        request(url, function (error, response) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    
    it("b- Checks if the blog(s) are sent to the backend as JSON Object(s)", function (done) {
        request(url, function (error, response, body) {
            body = JSON.parse(body)
            expect(body).to.be.an("array");
            done();
        });
    });
});